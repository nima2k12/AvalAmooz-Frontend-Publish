(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _core_guard_admin_admin_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/guard/admin/admin.guard */ 72521);
/* harmony import */ var _core_guard_auth_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/guard/auth/auth.guard */ 91823);
/* harmony import */ var _core_guard_buyer_buyer_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/guard/buyer/buyer.guard */ 42683);
/* harmony import */ var _core_guard_auth_deactive_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/guard/auth/deactive-auth.guard */ 47091);
/* harmony import */ var _core_guard_teacher_teacher_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/guard/teacher/teacher.guard */ 55168);
/* harmony import */ var _core_guard_super_admin_super_admin_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/guard/super-admin/super-admin.guard */ 9326);
/* harmony import */ var _core_guard_course_course_id_course_id_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/guard/course/course-id/course-id.guard */ 90028);
/* harmony import */ var _core_guard_teacher_teacher_edit_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/guard/teacher/teacher.edit.guard */ 68739);
/* harmony import */ var _core_guard_seller_seller_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/guard/seller/seller.guard */ 70673);
/* harmony import */ var _core_guard_product_product_id_product_id_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/guard/product/product-id/product-id.guard */ 39587);
/* harmony import */ var _core_guard_public_hidden_public_hidden_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/guard/public-hidden/public-hidden.guard */ 48358);
/* harmony import */ var _core_guard_admin_or_super_admin_admin_or_super_admin_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./core/guard/admin-or-super-admin/admin-or-super-admin.guard */ 40668);

/* eslint-disable max-len */














const routes = [
    // Home page
    {
        path: '',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_app_page-header_page-header_module_ts"), __webpack_require__.e("default-src_app_view_pages_home_learning-landing_learning-landing_module_ts"), __webpack_require__.e("src_app_view_pages_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./view/pages/home/home.module */ 13911)).then(m => m.HomeModule),
        pathMatch: 'full',
        data: {
            title: 'اول آموز | مرجع تخصصی دوره‌ها و محصولات آموزشی معلمان ابتدایی',
            description: 'اول آموز (avalamuz.ir)؛ پلتفرم تخصصی توانمندسازی معلمان و آموزگاران پایه اول ابتدایی. دوره‌های روش تدریس، طرح درس، کاربرگ‌های استاندارد و ابزارهای آموزشی کلاسی.',
            ogUrl: 'http://localhost:4300/'
        }
    },
    {
        path: 'home',
        redirectTo: '/Home',
        // loadChildren: () => import('./view/pages/home/home.module').then(m => m.HomeModule),
        data: {
            title: 'اول آموز | مرجع تخصصی دوره‌ها و محصولات آموزشی معلمان ابتدایی',
            description: 'اول آموز (avalamuz.ir)؛ پلتفرم تخصصی توانمندسازی معلمان و آموزگاران پایه اول ابتدایی. دوره‌های روش تدریس، طرح درس، کاربرگ‌های استاندارد و ابزارهای آموزشی کلاسی.',
            ogUrl: 'http://localhost:4300/'
        }
    },
    {
        path: 'Home',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_app_page-header_page-header_module_ts"), __webpack_require__.e("default-src_app_view_pages_home_learning-landing_learning-landing_module_ts"), __webpack_require__.e("src_app_view_pages_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./view/pages/home/home.module */ 13911)).then(m => m.HomeModule),
        data: {
            title: 'اول آموز | مرجع تخصصی دوره‌ها و محصولات آموزشی معلمان ابتدایی',
            description: 'اول آموز (avalamuz.ir)؛ پلتفرم تخصصی توانمندسازی معلمان و آموزگاران پایه اول ابتدایی. دوره‌های روش تدریس، طرح درس، کاربرگ‌های استاندارد و ابزارهای آموزشی کلاسی.',
            ogUrl: 'http://localhost:4300/'
        }
    },
    {
        path: 'homee',
        redirectTo: '/Homee',
        data: {
            title: 'اول آموز (طراحی قبلی)',
            description: 'نسخه مقایسه ظاهر اولیه اول آموز',
            ogUrl: 'http://localhost:4300/Homee'
        }
    },
    {
        path: 'Homee',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_app_page-header_page-header_module_ts"), __webpack_require__.e("src_app_view_pages_homee_homee_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./view/pages/homee/homee.module */ 72294)).then(m => m.HomeeModule),
        data: {
            title: 'اول آموز (طراحی قبلی)',
            description: 'نسخه مقایسه ظاهر اولیه اول آموز',
            ogUrl: 'http://localhost:4300/Homee'
        }
    },
    // Most Common Pages
    {
        path: 'teacherActive',
        redirectTo: '/TeacherActive',
        // loadChildren: () => import('./view/pages/common/teacher-active/teacher-active.module').then(m => m.TeacherActiveModule),
        data: {
            title: 'اول آموز - آموزش تیونینگ و تقویت موتور, نصب توربوشارژر و سوپرشارژر',
            description: 'اول آموز مرجع تخصصی دوره‌های روش تدریس، کاربرگ‌های آموزشی و ملزومات پایه‌های اول تا ششم دبستان است',
            ogUrl: 'http://localhost:4300/TeacherActive'
        }
    },
    {
        path: 'teacheractive',
        redirectTo: '/TeacherActive',
        // loadChildren: () => import('./view/pages/common/teacher-active/teacher-active.module').then(m => m.TeacherActiveModule),
        data: {
            title: 'اول آموز - آموزش تیونینگ و تقویت موتور, نصب توربوشارژر و سوپرشارژر',
            description: 'اول آموز مرجع تخصصی دوره‌های روش تدریس، کاربرگ‌های آموزشی و ملزومات پایه‌های اول تا ششم دبستان است',
            ogUrl: 'http://localhost:4300/TeacherActive'
        }
    },
    {
        path: 'Teacheractive',
        redirectTo: '/TeacherActive',
        // loadChildren: () => import('./view/pages/common/teacher-active/teacher-active.module').then(m => m.TeacherActiveModule),
        data: {
            title: 'اول آموز - آموزش تیونینگ و تقویت موتور, نصب توربوشارژر و سوپرشارژر',
            description: 'اول آموز مرجع تخصصی دوره‌های روش تدریس، کاربرگ‌های آموزشی و ملزومات پایه‌های اول تا ششم دبستان است',
            ogUrl: 'http://localhost:4300/TeacherActive'
        }
    },
    {
        path: 'TeacherActive',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_app_page-header_page-header_module_ts"), __webpack_require__.e("default-src_app_view_components_app_footer_footer_module_ts"), __webpack_require__.e("src_app_view_pages_common_teacher-active_teacher-active_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./view/pages/common/teacher-active/teacher-active.module */ 33335)).then(m => m.TeacherActiveModule),
        data: {
            title: 'اول آموز - آموزش تیونینگ و تقویت موتور, نصب توربوشارژر و سوپرشارژر',
            description: 'اول آموز مرجع تخصصی دوره‌های روش تدریس، کاربرگ‌های آموزشی و ملزومات پایه‌های اول تا ششم دبستان است',
            ogUrl: 'http://localhost:4300/TeacherActive'
        }
    },
    {
        path: 'page404',
        redirectTo: '/Page404',
        // loadChildren: () => import('./view/pages/common/page404/page404.module').then(m => m.Page404Module),
        data: {
            title: 'اول آموز - صفحه مورد نظر یافت نشد | خطای 404',
            description: 'اول آموز | خطای 404 | موردی یافت نشده است',
            ogUrl: 'http://localhost:4300/Page404'
        }
    },
    {
        path: 'Page404',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_app_page-header_page-header_module_ts"), __webpack_require__.e("default-src_app_view_components_app_footer_footer_module_ts"), __webpack_require__.e("src_app_view_pages_common_page404_page404_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./view/pages/common/page404/page404.module */ 23392)).then(m => m.Page404Module),
        data: {
            title: 'اول آموز - صفحه مورد نظر یافت نشد | خطای 404',
            description: 'اول آموز | خطای 404 | موردی یافت نشده است',
            ogUrl: 'http://localhost:4300/Page404'
        }
    },
    {
        path: 'page500',
        redirectTo: '/Page500',
        // loadChildren: () => import('./view/pages/common/page500/page500.module').then(m => m.Page500Module),
        data: {
            title: 'اول آموز - صفحه مورد نظر با خطا مواجه شد | خطای 500',
            description: 'اول آموز | خطای 500 | موردی یافت نشده است',
            ogUrl: 'http://localhost:4300/Page500'
        }
    },
    {
        path: 'Page500',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_app_page-header_page-header_module_ts"), __webpack_require__.e("default-src_app_view_components_app_footer_footer_module_ts"), __webpack_require__.e("src_app_view_pages_common_page500_page500_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./view/pages/common/page500/page500.module */ 74674)).then(m => m.Page500Module),
        data: {
            title: 'اول آموز - صفحه مورد نظر با خطا مواجه شد | خطای 500',
            description: 'اول آموز | خطای 500 | موردی یافت نشده است',
            ogUrl: 'http://localhost:4300/Page500'
        }
    },
    {
        path: 'page503',
        redirectTo: '/Page503',
        // loadChildren: () => import('./view/pages/common/page503/page503.module').then(m => m.Page503Module),
        data: {
            title: 'اول آموز - صفحه مورد نظر با خطا مواجه شد | خطای 503',
            description: 'اول آموز | خطای 503 | موردی یافت نشده است',
            ogUrl: 'http://localhost:4300/Page503'
        }
    },
    {
        path: 'Page503',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_app_page-header_page-header_module_ts"), __webpack_require__.e("default-src_app_view_components_app_footer_footer_module_ts"), __webpack_require__.e("src_app_view_pages_common_page503_page503_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./view/pages/common/page503/page503.module */ 51249)).then(m => m.Page503Module),
        data: {
            title: 'اول آموز - صفحه مورد نظر با خطا مواجه شد | خطای 503',
            description: 'اول آموز | خطای 503 | موردی یافت نشده است',
            ogUrl: 'http://localhost:4300/Page503'
        }
    },
    {
        path: 'about',
        redirectTo: '/About',
        // loadChildren: () => import('./view/pages/common/about/about.module').then(m => m.AboutModule),
        data: {
            title: 'اول آموز - درباره ی ما | تماس با ما',
            description: 'اول آموز | درباره ما | همراه هوشمند معلمان در کلاس درس ابتدایی | مرجع تخصصی دوره‌ها، کاربرگ‌ها و روش تدریس ابتدایی',
            ogUrl: 'http://localhost:4300/About'
        }
    },
    {
        path: 'About',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_app_page-header_page-header_module_ts"), __webpack_require__.e("default-src_app_view_components_app_footer_footer_module_ts"), __webpack_require__.e("src_app_view_pages_common_about_about_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./view/pages/common/about/about.module */ 97260)).then(m => m.AboutModule),
        data: {
            title: 'اول آموز - درباره ی ما | تماس با ما',
            description: 'اول آموز | درباره ما | همراه هوشمند معلمان در کلاس درس ابتدایی | مرجع تخصصی دوره‌ها، کاربرگ‌ها و روش تدریس ابتدایی',
            ogUrl: 'http://localhost:4300/About'
        }
    },
    {
        path: 'Accessdenied',
        redirectTo: '/AccessDenied',
        // loadChildren: () => import('./view/pages/common/access-denied/access-denied.module').then(m => m.AccessDeniedModule),
        data: {
            title: 'اول آموز - دسترسی غیر مجاز',
            description: 'اول آموز | صفحه ی دسترسی غیر مجاز | مرجع تخصصی دوره‌ها، کاربرگ‌ها و روش تدریس ابتدایی',
            ogUrl: 'http://localhost:4300/AccessDenied'
        }
    },
    {
        path: 'accessdenied',
        redirectTo: '/AccessDenied',
        // loadChildren: () => import('./view/pages/common/access-denied/access-denied.module').then(m => m.AccessDeniedModule),
        data: {
            title: 'اول آموز - دسترسی غیر مجاز',
            description: 'اول آموز | صفحه ی دسترسی غیر مجاز | مرجع تخصصی دوره‌ها، کاربرگ‌ها و روش تدریس ابتدایی',
            ogUrl: 'http://localhost:4300/AccessDenied'
        }
    },
    {
        path: 'accessDenied',
        redirectTo: '/AccessDenied',
        // loadChildren: () => import('./view/pages/common/access-denied/access-denied.module').then(m => m.AccessDeniedModule),
        data: {
            title: 'اول آموز - دسترسی غیر مجاز',
            description: 'اول آموز | صفحه ی دسترسی غیر مجاز | مرجع تخصصی دوره‌ها، کاربرگ‌ها و روش تدریس ابتدایی',
            ogUrl: 'http://localhost:4300/AccessDenied'
        }
    },
    {
        path: 'AccessDenied',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_app_page-header_page-header_module_ts"), __webpack_require__.e("default-src_app_view_components_app_footer_footer_module_ts"), __webpack_require__.e("src_app_view_pages_common_access-denied_access-denied_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./view/pages/common/access-denied/access-denied.module */ 49238)).then(m => m.AccessDeniedModule),
        data: {
            title: 'اول آموز - دسترسی غیر مجاز',
            description: 'اول آموز | صفحه ی دسترسی غیر مجاز | مرجع تخصصی دوره‌ها، کاربرگ‌ها و روش تدریس ابتدایی',
            ogUrl: 'http://localhost:4300/AccessDenied'
        }
    },
    {
        path: 'Accessdenied/:msg',
        redirectTo: '/AccessDenied/:msg',
        // loadChildren: () => import('./view/pages/common/access-denied/access-denied.module').then(m => m.AccessDeniedModule),
        data: {
            title: 'اول آموز - دسترسی غیر مجاز',
            description: 'اول آموز | صفحه ی دسترسی غیر مجاز | مرجع تخصصی دوره‌ها، کاربرگ‌ها و روش تدریس ابتدایی',
            ogUrl: 'http://localhost:4300/AccessDenied'
        }
    },
    {
        path: 'accessdenied/:msg',
        redirectTo: '/AccessDenied/:msg',
        // loadChildren: () => import('./view/pages/common/access-denied/access-denied.module').then(m => m.AccessDeniedModule),
        data: {
            title: 'اول آموز - دسترسی غیر مجاز',
            description: 'اول آموز | صفحه ی دسترسی غیر مجاز | مرجع تخصصی دوره‌ها، کاربرگ‌ها و روش تدریس ابتدایی',
            ogUrl: 'http://localhost:4300/AccessDenied'
        }
    },
    {
        path: 'accessDenied/:msg',
        redirectTo: '/AccessDenied/:msg',
        // loadChildren: () => import('./view/pages/common/access-denied/access-denied.module').then(m => m.AccessDeniedModule),
        data: {
            title: 'اول آموز - دسترسی غیر مجاز',
            description: 'اول آموز | صفحه ی دسترسی غیر مجاز | مرجع تخصصی دوره‌ها، کاربرگ‌ها و روش تدریس ابتدایی',
            ogUrl: 'http://localhost:4300/AccessDenied'
        }
    },
    {
        path: 'AccessDenied/:msg',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_app_page-header_page-header_module_ts"), __webpack_require__.e("default-src_app_view_components_app_footer_footer_module_ts"), __webpack_require__.e("src_app_view_pages_common_access-denied_access-denied_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./view/pages/common/access-denied/access-denied.module */ 49238)).then(m => m.AccessDeniedModule),
        data: {
            title: 'اول آموز - دسترسی غیر مجاز',
            description: 'اول آموز | صفحه ی دسترسی غیر مجاز | مرجع تخصصی دوره‌ها، کاربرگ‌ها و روش تدریس ابتدایی',
            ogUrl: 'http://localhost:4300/AccessDenied'
        }
    },
    {
        path: 'suport',
        redirectTo: '/Suport',
        // loadChildren: () => import('./view/pages/common/suport/suport.module').then(m => m.SuportModule),
        // canActivate: [BuyerGuard, AuthGuard],
        data: {
            title: 'اول آموز - تماس با ما | درباره ی ما',
            description: 'اول آموز | تماس با ما و ارتباط با پشتیبانی اول آموز | مرجع تخصصی دوره‌ها، کاربرگ‌ها و روش تدریس ابتدایی',
            ogUrl: 'http://localhost:4300/Suport'
        }
    },
    {
        path: 'Suport',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_app_page-header_page-header_module_ts"), __webpack_require__.e("default-src_app_view_components_app_footer_footer_module_ts"), __webpack_require__.e("default-node_modules_recaptcha-v3_dist_ReCaptcha_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_view_pages_common_suport_suport_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./view/pages/common/suport/suport.module */ 89000)).then(m => m.SuportModule),
        canActivate: [_core_guard_buyer_buyer_guard__WEBPACK_IMPORTED_MODULE_2__.BuyerGuard, _core_guard_auth_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard],
        data: {
            title: 'اول آموز - تماس با ما | درباره ی ما',
            description: 'اول آموز | تماس با ما و ارتباط با پشتیبانی اول آموز | مرجع تخصصی دوره‌ها، کاربرگ‌ها و روش تدریس ابتدایی',
            ogUrl: 'http://localhost:4300/Suport'
        }
    },
    // Panel pages
    {
        path: 'Adminpanel',
        redirectTo: '/AdminPanel',
        // loadChildren: () => import('./view/pages/panel/admin-panel/admin-panel.module').then(m => m.AdminPanelModule),
        // canActivate: [AdminGuard, AuthGuard],
        data: {
            title: 'اول آموز - مدیریت',
            description: 'اول آموز | صفحه ی مدیریت | مرجع تخصصی دوره‌ها، کاربرگ‌ها و روش تدریس ابتدایی',
            ogUrl: 'http://localhost:4300/AdminPanel'
        }
    },
    {
        path: 'adminpanel',
        redirectTo: '/AdminPanel',
        // loadChildren: () => import('./view/pages/panel/admin-panel/admin-panel.module').then(m => m.AdminPanelModule),
        // canActivate: [AdminGuard, AuthGuard],
        data: {
            title: 'اول آموز - مدیریت',
            description: 'اول آموز | صفحه ی مدیریت | مرجع تخصصی دوره‌ها، کاربرگ‌ها و روش تدریس ابتدایی',
            ogUrl: 'http://localhost:4300/AdminPanel'
        }
    },
    {
        path: 'adminPanel',
        redirectTo: '/AdminPanel',
        // loadChildren: () => import('./view/pages/panel/admin-panel/admin-panel.module').then(m => m.AdminPanelModule),
        // canActivate: [AdminGuard, AuthGuard],
        data: {
            title: 'اول آموز - مدیریت',
            description: 'اول آموز | صفحه ی مدیریت | مرجع تخصصی دوره‌ها، کاربرگ‌ها و روش تدریس ابتدایی',
            ogUrl: 'http://localhost:4300/AdminPanel'
        }
    },
    {
        path: 'AdminPanel',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_app_page-header_page-header_module_ts"), __webpack_require__.e("default-src_app_view_components_app_footer_footer_module_ts"), __webpack_require__.e("src_app_view_pages_panel_admin-panel_admin-panel_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./view/pages/panel/admin-panel/admin-panel.module */ 37768)).then(m => m.AdminPanelModule),
        canActivate: [_core_guard_admin_admin_guard__WEBPACK_IMPORTED_MODULE_0__.AdminGuard, _core_guard_auth_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard],
        data: {
            title: 'اول آموز - مدیریت',
            description: 'اول آموز | صفحه ی مدیریت | مرجع تخصصی دوره‌ها، کاربرگ‌ها و روش تدریس ابتدایی',
            ogUrl: 'http://localhost:4300/AdminPanel'
        }
    },
    {
        path: 'Userpanel/:id',
        redirectTo: '/UserPanel/:id',
        // loadChildren: () => import('./view/pages/panel/user-panel/user-panel.module').then(m => m.UserPanelModule),
        // canActivate: [BuyerGuard, AuthGuard],
        data: {
            title: 'اول آموز - حساب کاربری',
            description: 'اول آموز | صفحه ی حساب کاربری | مرجع تخصصی دوره‌ها، کاربرگ‌ها و روش تدریس ابتدایی',
            ogUrl: 'http://localhost:4300/UserPanel'
        }
    },
    {
        path: 'userpanel/:id',
        redirectTo: '/UserPanel/:id',
        // loadChildren: () => import('./view/pages/panel/user-panel/user-panel.module').then(m => m.UserPanelModule),
        // canActivate: [BuyerGuard, AuthGuard],
        data: {
            title: 'اول آموز - حساب کاربری',
            description: 'اول آموز | صفحه ی حساب کاربری | مرجع تخصصی دوره‌ها، کاربرگ‌ها و روش تدریس ابتدایی',
            ogUrl: 'http://localhost:4300/UserPanel'
        }
    },
    {
        path: 'userPanel/:id',
        redirectTo: '/UserPanel/:id',
        // loadChildren: () => import('./view/pages/panel/user-panel/user-panel.module').then(m => m.UserPanelModule),
        // canActivate: [BuyerGuard, AuthGuard],
        data: {
            title: 'اول آموز - حساب کاربری',
            description: 'اول آموز | صفحه ی حساب کاربری | مرجع تخصصی دوره‌ها، کاربرگ‌ها و روش تدریس ابتدایی',
            ogUrl: 'http://localhost:4300/UserPanel'
        }
    },
    {
        path: 'UserPanel/:id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_app_page-header_page-header_module_ts"), __webpack_require__.e("default-src_app_view_components_app_footer_footer_module_ts"), __webpack_require__.e("default-src_app_data_model_order_CartModel_ts"), __webpack_require__.e("default-src_app_core_pipe_persian-date_persian-date_module_ts-src_app_data_model_question_Que-d2a263"), __webpack_require__.e("default-node_modules_recaptcha-v3_dist_ReCaptcha_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_view_pages_panel_user-panel_user-panel_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./view/pages/panel/user-panel/user-panel.module */ 21905)).then(m => m.UserPanelModule),
        canActivate: [_core_guard_buyer_buyer_guard__WEBPACK_IMPORTED_MODULE_2__.BuyerGuard, _core_guard_auth_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard],
        data: {
            title: 'اول آموز - حساب کاربری',
            description: 'اول آموز | صفحه ی حساب کاربری | مرجع تخصصی دوره‌ها، کاربرگ‌ها و روش تدریس ابتدایی',
            ogUrl: 'http://localhost:4300/UserPanel'
        }
    },
    {
        path: 'userpanel',
        redirectTo: '/UserPanel',
        // loadChildren: () => import('./view/pages/panel/user-panel/user-panel.module').then(m => m.UserPanelModule),
        // canActivate: [BuyerGuard, AuthGuard],
        pathMatch: 'full',
        data: {
            title: 'اول آموز - حساب کاربری',
            description: 'اول آموز | صفحه ی حساب کاربری | مرجع تخصصی دوره‌ها، کاربرگ‌ها و روش تدریس ابتدایی',
            ogUrl: 'http://localhost:4300/UserPanel'
        }
    },
    {
        path: 'Userpanel',
        redirectTo: '/UserPanel',
        // loadChildren: () => import('./view/pages/panel/user-panel/user-panel.module').then(m => m.UserPanelModule),
        // canActivate: [BuyerGuard, AuthGuard],
        data: {
            title: 'اول آموز - حساب کاربری',
            description: 'اول آموز | صفحه ی حساب کاربری | مرجع تخصصی دوره‌ها، کاربرگ‌ها و روش تدریس ابتدایی',
            ogUrl: 'http://localhost:4300/UserPanel'
        }
    },
    {
        path: 'userPanel',
        redirectTo: '/UserPanel',
        // loadChildren: () => import('./view/pages/panel/user-panel/user-panel.module').then(m => m.UserPanelModule),
        // canActivate: [BuyerGuard, AuthGuard],
        data: {
            title: 'اول آموز - حساب کاربری',
            description: 'اول آموز | صفحه ی حساب کاربری | مرجع تخصصی دوره‌ها، کاربرگ‌ها و روش تدریس ابتدایی',
            ogUrl: 'http://localhost:4300/UserPanel'
        }
    },
    {
        path: 'UserPanel',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_app_page-header_page-header_module_ts"), __webpack_require__.e("default-src_app_view_components_app_footer_footer_module_ts"), __webpack_require__.e("default-src_app_data_model_order_CartModel_ts"), __webpack_require__.e("default-src_app_core_pipe_persian-date_persian-date_module_ts-src_app_data_model_question_Que-d2a263"), __webpack_require__.e("default-node_modules_recaptcha-v3_dist_ReCaptcha_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_view_pages_panel_user-panel_user-panel_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./view/pages/panel/user-panel/user-panel.module */ 21905)).then(m => m.UserPanelModule),
        canActivate: [_core_guard_buyer_buyer_guard__WEBPACK_IMPORTED_MODULE_2__.BuyerGuard, _core_guard_auth_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard],
        data: {
            title: 'اول آموز - حساب کاربری',
            description: 'اول آموز | صفحه ی حساب کاربری | مرجع تخصصی دوره‌ها، کاربرگ‌ها و روش تدریس ابتدایی',
            ogUrl: 'http://localhost:4300/UserPanel'
        }
    },
    {
        path: 'Sellerpanel',
        redirectTo: 'SellerPanel',
        pathMatch: 'full'
    },
    {
        path: 'sellerpanel',
        redirectTo: 'SellerPanel',
        pathMatch: 'full'
    },
    {
        path: 'sellerPanel',
        redirectTo: 'SellerPanel',
        pathMatch: 'full'
    },
    {
        path: 'SellerPanel',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_app_page-header_page-header_module_ts"), __webpack_require__.e("default-src_app_view_components_app_footer_footer_module_ts"), __webpack_require__.e("src_app_view_pages_panel_seller-panel_seller-panel_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./view/pages/panel/seller-panel/seller-panel.module */ 40955)).then(m => m.SellerPanelModule),
        canActivate: [_core_guard_seller_seller_guard__WEBPACK_IMPORTED_MODULE_8__.SellerGuard, _core_guard_auth_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard],
        data: {
            title: 'اول آموز - پنل فروشنده',
            description: 'اول آموز | صفحه ی پنل فروشنده | مرجع تخصصی دوره‌ها، کاربرگ‌ها و روش تدریس ابتدایی',
            ogUrl: 'http://localhost:4300/SellerPanel'
        }
    },
    {
        path: 'teacherpanel',
        redirectTo: '/TeacherPanel',
        // loadChildren: () => import('./view/pages/panel/teacher-panel/teacher-panel.module').then(m => m.TeacherPanelModule),
        // canActivate: [TeacherGuard, AuthGuard],
        data: {
            title: 'اول آموز - پنل مدرس',
            description: 'اول آموز | صفحه ی پنل مدرس | مرجع تخصصی دوره‌ها، کاربرگ‌ها و روش تدریس ابتدایی',
            ogUrl: 'http://localhost:4300/TeacherPanel'
        }
    },
    {
        path: 'Teacherpanel',
        redirectTo: '/TeacherPanel',
        // loadChildren: () => import('./view/pages/panel/teacher-panel/teacher-panel.module').then(m => m.TeacherPanelModule),
        // canActivate: [TeacherGuard, AuthGuard],
        data: {
            title: 'اول آموز - پنل مدرس',
            description: 'اول آموز | صفحه ی پنل مدرس | مرجع تخصصی دوره‌ها، کاربرگ‌ها و روش تدریس ابتدایی',
            ogUrl: 'http://localhost:4300/TeacherPanel'
        }
    },
    {
        path: 'teacherPanel',
        redirectTo: '/TeacherPanel',
        // loadChildren: () => import('./view/pages/panel/teacher-panel/teacher-panel.module').then(m => m.TeacherPanelModule),
        // canActivate: [TeacherGuard, AuthGuard],
        data: {
            title: 'اول آموز - پنل مدرس',
            description: 'اول آموز | صفحه ی پنل مدرس | مرجع تخصصی دوره‌ها، کاربرگ‌ها و روش تدریس ابتدایی',
            ogUrl: 'http://localhost:4300/TeacherPanel'
        }
    },
    {
        path: 'TeacherPanel',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_app_page-header_page-header_module_ts"), __webpack_require__.e("default-src_app_view_components_app_footer_footer_module_ts"), __webpack_require__.e("src_app_view_pages_panel_teacher-panel_teacher-panel_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./view/pages/panel/teacher-panel/teacher-panel.module */ 70521)).then(m => m.TeacherPanelModule),
        canActivate: [_core_guard_teacher_teacher_guard__WEBPACK_IMPORTED_MODULE_4__.TeacherGuard, _core_guard_auth_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard],
        data: {
            title: 'اول آموز - پنل مدرس',
            description: 'اول آموز | صفحه ی پنل مدرس | مرجع تخصصی دوره‌ها، کاربرگ‌ها و روش تدریس ابتدایی',
            ogUrl: 'http://localhost:4300/TeacherPanel'
        }
    },
    {
        path: 'superadminpanel',
        redirectTo: '/SuperAdminPanel',
        // loadChildren: () => import('./view/pages/panel/super-admin-panel/super-admin-panel.module').then(m => m.SuperAdminPanelModule),
        // canActivate: [SuperAdminGuard, AuthGuard],
        data: {
            title: 'اول آموز - مدیریت اصلی',
            description: 'اول آموز | صفحه ی مدیریت اصلی | مرجع تخصصی دوره‌ها، کاربرگ‌ها و روش تدریس ابتدایی',
            ogUrl: 'http://localhost:4300/SuperAdminPanel'
        }
    },
    {
        path: 'superadminPanel',
        redirectTo: '/SuperAdminPanel',
        // loadChildren: () => import('./view/pages/panel/super-admin-panel/super-admin-panel.module').then(m => m.SuperAdminPanelModule),
        // canActivate: [SuperAdminGuard, AuthGuard],
        data: {
            title: 'اول آموز - مدیریت اصلی',
            description: 'اول آموز | صفحه ی مدیریت اصلی | مرجع تخصصی دوره‌ها، کاربرگ‌ها و روش تدریس ابتدایی',
            ogUrl: 'http://localhost:4300/SuperAdminPanel'
        }
    },
    {
        path: 'superAdminpanel',
        redirectTo: '/SuperAdminPanel',
        // loadChildren: () => import('./view/pages/panel/super-admin-panel/super-admin-panel.module').then(m => m.SuperAdminPanelModule),
        // canActivate: [SuperAdminGuard, AuthGuard],
        data: {
            title: 'اول آموز - مدیریت اصلی',
            description: 'اول آموز | صفحه ی مدیریت اصلی | مرجع تخصصی دوره‌ها، کاربرگ‌ها و روش تدریس ابتدایی',
            ogUrl: 'http://localhost:4300/SuperAdminPanel'
        }
    },
    {
        path: 'superAdminPanel',
        redirectTo: '/SuperAdminPanel',
        // loadChildren: () => import('./view/pages/panel/super-admin-panel/super-admin-panel.module').then(m => m.SuperAdminPanelModule),
        // canActivate: [SuperAdminGuard, AuthGuard],
        data: {
            title: 'اول آموز - مدیریت اصلی',
            description: 'اول آموز | صفحه ی مدیریت اصلی | مرجع تخصصی دوره‌ها، کاربرگ‌ها و روش تدریس ابتدایی',
            ogUrl: 'http://localhost:4300/SuperAdminPanel'
        }
    },
    {
        path: 'SuperadminPanel',
        redirectTo: '/SuperAdminPanel',
        // loadChildren: () => import('./view/pages/panel/super-admin-panel/super-admin-panel.module').then(m => m.SuperAdminPanelModule),
        // canActivate: [SuperAdminGuard, AuthGuard],
        data: {
            title: 'اول آموز - مدیریت اصلی',
            description: 'اول آموز | صفحه ی مدیریت اصلی | مرجع تخصصی دوره‌ها، کاربرگ‌ها و روش تدریس ابتدایی',
            ogUrl: 'http://localhost:4300/SuperAdminPanel'
        }
    },
    {
        path: 'Superadminpanel',
        redirectTo: '/SuperAdminPanel',
        // loadChildren: () => import('./view/pages/panel/super-admin-panel/super-admin-panel.module').then(m => m.SuperAdminPanelModule),
        // canActivate: [SuperAdminGuard, AuthGuard],
        data: {
            title: 'اول آموز - مدیریت اصلی',
            description: 'اول آموز | صفحه ی مدیریت اصلی | مرجع تخصصی دوره‌ها، کاربرگ‌ها و روش تدریس ابتدایی',
            ogUrl: 'http://localhost:4300/SuperAdminPanel'
        }
    },
    {
        path: 'SuperAdminpanel',
        redirectTo: '/SuperAdminPanel',
        // loadChildren: () => import('./view/pages/panel/super-admin-panel/super-admin-panel.module').then(m => m.SuperAdminPanelModule),
        // canActivate: [SuperAdminGuard, AuthGuard],
        data: {
            title: 'اول آموز - مدیریت اصلی',
            description: 'اول آموز | صفحه ی مدیریت اصلی | مرجع تخصصی دوره‌ها، کاربرگ‌ها و روش تدریس ابتدایی',
            ogUrl: 'http://localhost:4300/SuperAdminPanel'
        }
    },
    {
        path: 'SuperAdminPanel',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_app_page-header_page-header_module_ts"), __webpack_require__.e("default-src_app_view_components_app_footer_footer_module_ts"), __webpack_require__.e("src_app_view_pages_panel_super-admin-panel_super-admin-panel_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./view/pages/panel/super-admin-panel/super-admin-panel.module */ 55528)).then(m => m.SuperAdminPanelModule),
        canActivate: [_core_guard_super_admin_super_admin_guard__WEBPACK_IMPORTED_MODULE_5__.SuperAdminGuard, _core_guard_auth_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard],
        data: {
            title: 'اول آموز - مدیریت اصلی',
            description: 'اول آموز | صفحه ی مدیریت اصلی | مرجع تخصصی دوره‌ها، کاربرگ‌ها و روش تدریس ابتدایی',
            ogUrl: 'http://localhost:4300/SuperAdminPanel'
        }
    },
    // Auth pages
    {
        path: 'account',
        redirectTo: '/Account',
        // loadChildren: () => import('./view/pages/auth/account/account.module').then(m => m.AccountModule),
        // canActivate: [DeactiveAuthGuard],
        data: {
            title: 'اول آموز - ورود | عضویت - Register | Login',
            description: 'اول آموز | صفحه ی ورود | عضویت | Register | Login | مرجع تخصصی دوره‌ها، کاربرگ‌ها و روش تدریس ابتدایی',
            ogUrl: 'http://localhost:4300/Account'
        }
    },
    {
        path: 'Account',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_app_page-header_page-header_module_ts"), __webpack_require__.e("default-src_app_view_components_app_footer_footer_module_ts"), __webpack_require__.e("default-node_modules_recaptcha-v3_dist_ReCaptcha_js"), __webpack_require__.e("default-src_app_view_components_auth_auth_module_ts"), __webpack_require__.e("src_app_view_pages_auth_account_account_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./view/pages/auth/account/account.module */ 57445)).then(m => m.AccountModule),
        canActivate: [_core_guard_auth_deactive_auth_guard__WEBPACK_IMPORTED_MODULE_3__.DeactiveAuthGuard],
        data: {
            title: 'اول آموز - ورود | عضویت - Register | Login',
            description: 'اول آموز | صفحه ی ورود | عضویت | Register | Login | مرجع تخصصی دوره‌ها، کاربرگ‌ها و روش تدریس ابتدایی',
            ogUrl: 'http://localhost:4300/Account'
        }
    },
    {
        path: 'account/:id',
        redirectTo: '/Account/:id',
        // loadChildren: () => import('./view/pages/auth/account/account.module').then(m => m.AccountModule),
        data: {
            title: 'اول آموز - ورود | عضویت - Register | Login',
            description: 'اول آموز | صفحه ی ورود | عضویت | Register | Login | مرجع تخصصی دوره‌ها، کاربرگ‌ها و روش تدریس ابتدایی',
            ogUrl: 'http://localhost:4300/Account'
        }
    },
    {
        path: 'Account/:id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_app_page-header_page-header_module_ts"), __webpack_require__.e("default-src_app_view_components_app_footer_footer_module_ts"), __webpack_require__.e("default-node_modules_recaptcha-v3_dist_ReCaptcha_js"), __webpack_require__.e("default-src_app_view_components_auth_auth_module_ts"), __webpack_require__.e("src_app_view_pages_auth_account_account_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./view/pages/auth/account/account.module */ 57445)).then(m => m.AccountModule),
        data: {
            title: 'اول آموز - ورود | عضویت - Register | Login',
            description: 'اول آموز | صفحه ی ورود | عضویت | Register | Login | مرجع تخصصی دوره‌ها، کاربرگ‌ها و روش تدریس ابتدایی',
            ogUrl: 'http://localhost:4300/Account'
        }
    },
    // Main pages
    {
        path: 'products',
        redirectTo: 'Products',
        pathMatch: 'full'
    },
    { path: 'Products', redirectTo: '/Categories', pathMatch: 'full' },
    {
        path: 'Products',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_app_page-header_page-header_module_ts"), __webpack_require__.e("default-src_app_view_components_app_footer_footer_module_ts"), __webpack_require__.e("default-src_app_view_components_product_shared-product_module_ts"), __webpack_require__.e("src_app_view_pages_product_products_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./view/pages/product/products.module */ 40766)).then(m => m.ProductModule)
    },
    {
        path: 'P/:id',
        redirectTo: '/p/:id',
        // loadChildren: () => import('./view/pages/course/course-by-id/course-by-id.module').then(m => m.CourseByIdModule),
        // canActivate: [ProductIdGuard],
        pathMatch: 'full'
    },
    {
        path: 'p/:id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_app_page-header_page-header_module_ts"), __webpack_require__.e("default-src_app_view_components_app_footer_footer_module_ts"), __webpack_require__.e("default-src_app_view_components_product_shared-product_module_ts"), __webpack_require__.e("default-src_app_data_model_order_CartModel_ts"), __webpack_require__.e("default-src_app_core_pipe_persian-date_persian-date_module_ts-src_app_data_model_question_Que-d2a263"), __webpack_require__.e("default-src_app_view_components_modal_photo-gallery-modal-page_photo-gallery_photo-gallery_mo-e50760"), __webpack_require__.e("default-src_app_view_pages_product_product-by-id_product-by-id_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./view/pages/product/product-by-id/product-by-id.module */ 28705)).then(m => m.ProductByIdModule),
        canActivate: [_core_guard_product_product_id_product_id_guard__WEBPACK_IMPORTED_MODULE_9__.ProductIdGuard],
        pathMatch: 'full'
    },
    {
        path: 'C/:id',
        redirectTo: '/c/:id',
        // loadChildren: () => import('./view/pages/course/course-by-id/course-by-id.module').then(m => m.CourseByIdModule),
        // canActivate: [CourseIdGuard],
        pathMatch: 'full'
    },
    {
        path: 'c/:id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_app_page-header_page-header_module_ts"), __webpack_require__.e("default-src_app_view_components_app_footer_footer_module_ts"), __webpack_require__.e("default-src_app_view_components_course_shared-course_module_ts"), __webpack_require__.e("default-src_app_core_pipe_persian-date_persian-date_module_ts-src_app_data_model_question_Que-d2a263"), __webpack_require__.e("default-src_app_view_components_modal_photo-gallery-modal-page_photo-gallery_photo-gallery_mo-e50760"), __webpack_require__.e("common"), __webpack_require__.e("src_app_view_pages_course_course-by-id_course-by-id_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./view/pages/course/course-by-id/course-by-id.module */ 34274)).then(m => m.CourseByIdModule),
        canActivate: [_core_guard_course_course_id_course_id_guard__WEBPACK_IMPORTED_MODULE_6__.CourseIdGuard],
        pathMatch: 'full'
    },
    {
        path: 'course',
        redirectTo: '/Course',
        // loadChildren: () => import('./view/pages/course/course.module').then(m => m.CourseModule),
        data: {
            title: 'اول آموز - دسته بندی دوره های آموزش تیونینگ',
            description: 'اول آموز | دسته‌بندی موضوعی دوره‌ها و محصولات ابتدایی | مرجع تخصصی دوره‌ها، کاربرگ‌ها و روش تدریس ابتدایی',
            ogUrl: 'http://localhost:4300/Course'
        }
    },
    { path: 'Course', redirectTo: '/Categories', pathMatch: 'full' },
    { path: 'Categories', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_app_page-header_page-header_module_ts"), __webpack_require__.e("default-src_app_view_components_app_footer_footer_module_ts"), __webpack_require__.e("default-src_app_view_components_course_shared-course_module_ts"), __webpack_require__.e("src_app_core_pipe_price_module_ts-src_app_view_pages_course_course_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./view/pages/course/course.module */ 10507)).then(m => m.CourseModule), data: { title: 'اول آموز - دسته‌بندی دوره‌ها و محصولات', description: 'فارسی، ریاضی، علوم، هنر، قرآن و مدیریت کلاس؛ دوره‌ها و محصولات آموزشی اول آموز', ogUrl: 'http://localhost:4300/Categories' } },
    {
        path: 'Course',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_app_page-header_page-header_module_ts"), __webpack_require__.e("default-src_app_view_components_app_footer_footer_module_ts"), __webpack_require__.e("default-src_app_view_components_course_shared-course_module_ts"), __webpack_require__.e("src_app_core_pipe_price_module_ts-src_app_view_pages_course_course_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./view/pages/course/course.module */ 10507)).then(m => m.CourseModule),
        data: {
            title: 'اول آموز - دسته بندی دوره های آموزش تیونینگ',
            description: 'اول آموز | دسته‌بندی موضوعی دوره‌ها و محصولات ابتدایی | مرجع تخصصی دوره‌ها، کاربرگ‌ها و روش تدریس ابتدایی',
            ogUrl: 'http://localhost:4300/Course'
        }
    },
    {
        path: 'cart',
        redirectTo: '/Cart',
        // loadChildren: () => import('./view/pages/cart/cart.module').then(m => m.CartModule),
        data: {
            title: 'اول آموز - سبد خرید',
            description: 'اول آموز | صفحه ی سبد خرید | مرجع تخصصی دوره‌ها، کاربرگ‌ها و روش تدریس ابتدایی',
            ogUrl: 'http://localhost:4300/Cart'
        }
    },
    {
        path: 'Cart',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_app_page-header_page-header_module_ts"), __webpack_require__.e("default-src_app_view_components_app_footer_footer_module_ts"), __webpack_require__.e("default-src_app_data_model_order_CartModel_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_view_pages_cart_cart_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./view/pages/cart/cart.module */ 71637)).then(m => m.CartModule),
        data: {
            title: 'اول آموز - سبد خرید',
            description: 'اول آموز | صفحه ی سبد خرید | مرجع تخصصی دوره‌ها، کاربرگ‌ها و روش تدریس ابتدایی',
            ogUrl: 'http://localhost:4300/Cart'
        }
    },
    {
        path: 'A/:id',
        redirectTo: '/a/:id',
        // loadChildren: () => import('./view/pages/article/article-by-id/article-by-id.module').then(m => m.ArticleByIdModule),
        pathMatch: 'full'
    },
    {
        path: 'a/:id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_app_page-header_page-header_module_ts"), __webpack_require__.e("default-src_app_view_components_app_footer_footer_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_view_pages_article_article-by-id_article-by-id_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./view/pages/article/article-by-id/article-by-id.module */ 47764)).then(m => m.ArticleByIdModule),
        pathMatch: 'full'
    },
    {
        path: 'PA/:id',
        redirectTo: '/pa/:id',
        pathMatch: 'full'
    },
    {
        path: 'pa/:id',
        pathMatch: 'full',
        // tslint:disable-next-line: max-line-length
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_app_page-header_page-header_module_ts"), __webpack_require__.e("default-src_app_view_components_app_footer_footer_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_view_pages_article_product-article-by-id_product-article-by-id_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./view/pages/article/product-article-by-id/product-article-by-id.module */ 71130)).then(m => m.ProductArticleByIdModule),
        data: {
            title: 'اول آموز - مقالات آموزشی',
            description: 'اول آموز | مقالات آموزشی برای خانواده‌ها، معلم‌ها و دانش‌آموزان ابتدایی',
            ogUrl: 'http://localhost:4300/ProductArticle'
        }
    },
    {
        path: 'article',
        redirectTo: '/Article',
        // loadChildren: () => import('./view/pages/article/article.module').then(m => m.ArticleModule),
        data: {
            title: 'اول آموز - مقالات آموزشی',
            description: 'اول آموز | مقالات آموزشی برای خانواده‌ها، معلم‌ها و دانش‌آموزان ابتدایی',
            ogUrl: 'http://localhost:4300/Article'
        }
    },
    {
        path: 'Article',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_app_page-header_page-header_module_ts"), __webpack_require__.e("default-src_app_view_components_app_footer_footer_module_ts"), __webpack_require__.e("default-src_app_data_model_article_ArticleFilterModel_ts-src_app_view_components_article_shar-857c2c"), __webpack_require__.e("src_app_view_pages_article_article_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./view/pages/article/article.module */ 82203)).then(m => m.ArticleModule),
        data: {
            title: 'اول آموز - مقالات آموزشی',
            description: 'اول آموز | مقالات آموزشی برای خانواده‌ها، معلم‌ها و دانش‌آموزان ابتدایی',
            ogUrl: 'http://localhost:4300/Article'
        }
    },
    {
        path: 'Productarticle',
        redirectTo: '/ProductArticle'
    },
    {
        path: 'productarticle',
        redirectTo: '/ProductArticle'
    },
    {
        path: 'productArticle',
        redirectTo: '/ProductArticle'
    },
    {
        path: 'ProductArticle',
        // tslint:disable-next-line: max-line-length
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_app_page-header_page-header_module_ts"), __webpack_require__.e("default-src_app_view_components_app_footer_footer_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_view_pages_article_product-article-by-id_product-article-by-id_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./view/pages/article/product-article-by-id/product-article-by-id.module */ 71130)).then(m => m.ProductArticleByIdModule),
        data: {
            title: 'اول آموز - مقالات آموزشی',
            description: 'اول آموز | مقالات آموزشی برای خانواده‌ها، معلم‌ها و دانش‌آموزان ابتدایی',
            ogUrl: 'http://localhost:4300/ProductArticle'
        }
    },
    {
        path: 'Confirmemail',
        redirectTo: '/ConfirmEmail',
        // loadChildren: () => import('./view/pages/common/confirm-email/confirm-email.module').then(m => m.ConfirmEmailModule)
    },
    {
        path: 'confirmemail',
        redirectTo: '/ConfirmEmail',
        // loadChildren: () => import('./view/pages/common/confirm-email/confirm-email.module').then(m => m.ConfirmEmailModule)
    },
    {
        path: 'confirmEmail',
        redirectTo: '/ConfirmEmail',
        // loadChildren: () => import('./view/pages/common/confirm-email/confirm-email.module').then(m => m.ConfirmEmailModule)
    },
    {
        path: 'ConfirmEmail',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_app_page-header_page-header_module_ts"), __webpack_require__.e("default-src_app_view_components_app_footer_footer_module_ts"), __webpack_require__.e("src_app_view_pages_common_confirm-email_confirm-email_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./view/pages/common/confirm-email/confirm-email.module */ 34183)).then(m => m.ConfirmEmailModule)
    },
    {
        path: 'external',
        redirectTo: '/External',
        // loadChildren: () => import('./view/pages/auth/external/external.module').then(m => m.ExternalModule)
    },
    {
        path: 'External',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_app_page-header_page-header_module_ts"), __webpack_require__.e("default-src_app_view_components_app_footer_footer_module_ts"), __webpack_require__.e("default-node_modules_recaptcha-v3_dist_ReCaptcha_js"), __webpack_require__.e("default-src_app_view_components_auth_auth_module_ts"), __webpack_require__.e("src_app_view_pages_auth_external_external_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./view/pages/auth/external/external.module */ 90945)).then(m => m.ExternalModule)
    },
    {
        path: 'Privacypolicy',
        redirectTo: '/PrivacyPolicy',
        // loadChildren: () => import('./view/pages/common/privacy-policy/privacy-policy.module').then(m => m.PrivacyPolicyModule),
        data: {
            title: 'اول آموز - سیاست حفظ حریم شخصی',
            description: 'اول آموز | سیاست حفظ حریم شخصی و امنیت داده‌های کاربران | مرجع تخصصی دوره‌ها، کاربرگ‌ها و روش تدریس ابتدایی',
            ogUrl: 'http://localhost:4300/Privacypolicy'
        }
    },
    {
        path: 'privacypolicy',
        redirectTo: '/PrivacyPolicy',
        // loadChildren: () => import('./view/pages/common/privacy-policy/privacy-policy.module').then(m => m.PrivacyPolicyModule),
        data: {
            title: 'اول آموز - سیاست حفظ حریم شخصی',
            description: 'اول آموز | سیاست حفظ حریم شخصی و امنیت داده‌های کاربران | مرجع تخصصی دوره‌ها، کاربرگ‌ها و روش تدریس ابتدایی',
            ogUrl: 'http://localhost:4300/Privacypolicy'
        }
    },
    {
        path: 'privacyPolicy',
        redirectTo: '/PrivacyPolicy',
        // loadChildren: () => import('./view/pages/common/privacy-policy/privacy-policy.module').then(m => m.PrivacyPolicyModule),
        data: {
            title: 'اول آموز - سیاست حفظ حریم شخصی',
            description: 'اول آموز | سیاست حفظ حریم شخصی و امنیت داده‌های کاربران | مرجع تخصصی دوره‌ها، کاربرگ‌ها و روش تدریس ابتدایی',
            ogUrl: 'http://localhost:4300/Privacypolicy'
        }
    },
    {
        path: 'PrivacyPolicy',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_app_page-header_page-header_module_ts"), __webpack_require__.e("default-src_app_view_components_app_footer_footer_module_ts"), __webpack_require__.e("src_app_view_pages_common_privacy-policy_privacy-policy_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./view/pages/common/privacy-policy/privacy-policy.module */ 23887)).then(m => m.PrivacyPolicyModule),
        data: {
            title: 'اول آموز - سیاست حفظ حریم شخصی',
            description: 'اول آموز | سیاست حفظ حریم شخصی و امنیت داده‌های کاربران | مرجع تخصصی دوره‌ها، کاربرگ‌ها و روش تدریس ابتدایی',
            ogUrl: 'http://localhost:4300/Privacypolicy'
        }
    },
    {
        path: 'Tunerplus',
        redirectTo: '/TunerPlus',
    },
    {
        path: 'tunerplus',
        redirectTo: '/TunerPlus',
    },
    {
        path: 'tunerPlus',
        redirectTo: '/TunerPlus',
    },
    {
        path: 'BazoyeAvalAmooz',
        redirectTo: '/TunerPlus',
    },
    {
        path: 'bazoyeavalamooz',
        redirectTo: '/TunerPlus',
    },
    {
        path: 'BazuyeAvalAmooz',
        redirectTo: '/TunerPlus',
    },
    {
        path: 'TunerPlus',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_app_page-header_page-header_module_ts"), __webpack_require__.e("default-src_app_view_components_app_footer_footer_module_ts"), __webpack_require__.e("src_app_view_pages_tuner-plus_tuner-plus_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./view/pages/tuner-plus/tuner-plus.module */ 1910)).then(m => m.TunerPlusModule),
        canActivate: [_core_guard_admin_or_super_admin_admin_or_super_admin_guard__WEBPACK_IMPORTED_MODULE_11__.AdminOrSuperAdminGuard],
        canActivateChild: [_core_guard_admin_or_super_admin_admin_or_super_admin_guard__WEBPACK_IMPORTED_MODULE_11__.AdminOrSuperAdminGuard],
        data: {
            title: 'اول آموز - بازوی اول آموز (جعبه‌ابزار و دستیار هوشمند معلمان ابتدایی)',
            description: 'اول آموز | بازوی اول آموز، دستیار تخصصی و جعبه‌ابزارهای کاربردی آموزگاران و مربیان ابتدایی در سامانه اول آموز.',
            ogUrl: 'http://localhost:4300/TunerPlus'
        }
    },
    {
        path: 'instagrambot',
        redirectTo: '/InstagramBot',
    },
    {
        path: 'Instagrambot',
        redirectTo: '/InstagramBot',
    },
    {
        path: 'instagramBot',
        redirectTo: '/InstagramBot',
    },
    {
        path: 'InstagramBot',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_app_page-header_page-header_module_ts"), __webpack_require__.e("default-src_app_view_components_app_footer_footer_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_view_pages_common_instagram-bot_instagram-bot_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./view/pages/common/instagram-bot/instagram-bot.module */ 89506)).then(m => m.InstagramBotModule),
        data: {
            title: 'اول آموز - ربات اینستاگرام | Instagram Bot',
            description: 'اول آموز | ربات اینستاگرام | Instagram Bot | مرجع تخصصی دوره‌ها، کاربرگ‌ها و روش تدریس ابتدایی',
            ogUrl: 'http://localhost:4300/InstagramBot'
        }
    },
    {
        path: 'Teacheredit',
        redirectTo: '/TeacherEdit',
    },
    {
        path: 'teacheredit',
        redirectTo: '/TeacherEdit',
    },
    {
        path: 'teacherEdit',
        redirectTo: '/TeacherEdit',
    },
    {
        path: 'TeacherEdit',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_app_page-header_page-header_module_ts"), __webpack_require__.e("default-src_app_view_components_app_footer_footer_module_ts"), __webpack_require__.e("src_app_view_pages_common_teacher-edit_teacher-edit_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./view/pages/common/teacher-edit/teacher-edit.module */ 51220)).then(m => m.TeacherEditModule),
        canActivate: [_core_guard_teacher_teacher_edit_guard__WEBPACK_IMPORTED_MODULE_7__.TeacherEditGuard]
    },
    {
        path: 'questions',
        redirectTo: '/Questions',
        pathMatch: 'full'
    },
    {
        path: 'questions/:id',
        redirectTo: 'Questions/:id'
    },
    {
        path: 'Questions',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_app_page-header_page-header_module_ts"), __webpack_require__.e("default-src_app_view_components_app_footer_footer_module_ts"), __webpack_require__.e("default-src_app_view_components_course_shared-course_module_ts"), __webpack_require__.e("default-src_app_core_pipe_persian-date_persian-date_module_ts-src_app_data_model_question_Que-d2a263"), __webpack_require__.e("common"), __webpack_require__.e("src_app_core_pipe_price_module_ts-src_app_view_pages_home_questions_questions_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./view/pages/home/questions/questions.module */ 2267)).then(m => m.QuestionsModule),
        data: {
            title: 'اول آموز | تالار پرسش و پاسخ دوره‌های آموزشی معلمان ابتدایی',
            description: 'تالار پرسش و پاسخ تخصصی دوره‌های آموزشی معلمان ابتدایی اول آموز؛ پاسخ به سوالات روش تدریس، اختلالات یادگیری، طرح درس و مدیریت کلاس اول تا ششم دبستان.',
            ogUrl: 'http://localhost:4300/Questions'
        }
    },
    {
        path: 'Questions/:id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_app_page-header_page-header_module_ts"), __webpack_require__.e("default-src_app_view_components_app_footer_footer_module_ts"), __webpack_require__.e("default-src_app_view_components_course_shared-course_module_ts"), __webpack_require__.e("default-src_app_core_pipe_persian-date_persian-date_module_ts-src_app_data_model_question_Que-d2a263"), __webpack_require__.e("common"), __webpack_require__.e("src_app_core_pipe_price_module_ts-src_app_view_pages_home_questions_questions_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./view/pages/home/questions/questions.module */ 2267)).then(m => m.QuestionsModule)
    },
    {
        path: 'productQuestions',
        redirectTo: '/ProductQuestions',
        pathMatch: 'full'
    },
    {
        path: 'productquestions',
        redirectTo: '/ProductQuestions',
        pathMatch: 'full'
    },
    {
        path: 'Productquestions',
        redirectTo: '/ProductQuestions',
        pathMatch: 'full'
    },
    {
        path: 'productQuestions/:id',
        redirectTo: 'ProductQuestions/:id'
    },
    {
        path: 'productquestions/:id',
        redirectTo: 'ProductQuestions/:id'
    },
    {
        path: 'Productquestions/:id',
        redirectTo: 'ProductQuestions/:id'
    },
    {
        path: 'ProductQuestions',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_app_page-header_page-header_module_ts"), __webpack_require__.e("default-src_app_view_components_app_footer_footer_module_ts"), __webpack_require__.e("default-src_app_view_components_product_shared-product_module_ts"), __webpack_require__.e("default-src_app_core_pipe_persian-date_persian-date_module_ts-src_app_data_model_question_Que-d2a263"), __webpack_require__.e("common"), __webpack_require__.e("src_app_view_pages_home_product-questions_product-questions_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./view/pages/home/product-questions/product-questions.module */ 71546)).then(m => m.ProductQuestionsModule),
        data: {
            title: 'اول آموز | تالار پرسش و پاسخ محصولات، کاربرگ‌ها و ابزارهای کلاسی',
            description: 'پرسش و پاسخ پیرامون کاربرگ‌های آموزشی، فایل‌های طرح درس، ابزارهای کمک‌آموزشی و ملزومات کلاسی پایه اول تا ششم ابتدایی در اول آموز.',
            ogUrl: 'http://localhost:4300/ProductQuestions'
        }
    },
    {
        path: 'ProductQuestions/:id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_app_page-header_page-header_module_ts"), __webpack_require__.e("default-src_app_view_components_app_footer_footer_module_ts"), __webpack_require__.e("default-src_app_view_components_product_shared-product_module_ts"), __webpack_require__.e("default-src_app_core_pipe_persian-date_persian-date_module_ts-src_app_data_model_question_Que-d2a263"), __webpack_require__.e("common"), __webpack_require__.e("src_app_view_pages_home_product-questions_product-questions_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./view/pages/home/product-questions/product-questions.module */ 71546)).then(m => m.ProductQuestionsModule)
    },
    {
        path: 'teachers/:id',
        redirectTo: 'Teachers/:id'
    },
    {
        path: 'Teachers/:id',
        canActivate: [_core_guard_public_hidden_public_hidden_guard__WEBPACK_IMPORTED_MODULE_10__.PublicHiddenGuard],
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_app_page-header_page-header_module_ts"), __webpack_require__.e("default-src_app_view_components_app_footer_footer_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_view_pages_common_teachers_teachers_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./view/pages/common/teachers/teachers.module */ 29817)).then(m => m.TeachersModule),
        data: {
            title: 'اول آموز - لیست مدرسین مکانیک و تیونینگ و خودرو | AvalAmooz Teachers',
            description: 'معرفی آموزگاران و مدرسین سرآمد اول آموز | سوابق تدریس و دوره‌های آموزشی دبستان | مرجع تخصصی دوره‌ها، کاربرگ‌ها و روش تدریس ابتدایی',
            ogUrl: 'http://localhost:4300/Teachers'
        }
    },
    {
        path: 'teachers',
        redirectTo: 'Teachers'
    },
    {
        path: 'Teachers',
        canActivate: [_core_guard_public_hidden_public_hidden_guard__WEBPACK_IMPORTED_MODULE_10__.PublicHiddenGuard],
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_app_page-header_page-header_module_ts"), __webpack_require__.e("default-src_app_view_components_app_footer_footer_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_view_pages_common_teachers_teachers_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./view/pages/common/teachers/teachers.module */ 29817)).then(m => m.TeachersModule),
        data: {
            title: 'اول آموز - لیست مدرسین مکانیک و تیونینگ و خودرو | AvalAmooz Teachers',
            description: 'معرفی آموزگاران و مدرسین سرآمد اول آموز | سوابق تدریس و دوره‌های آموزشی دبستان | مرجع تخصصی دوره‌ها، کاربرگ‌ها و روش تدریس ابتدایی',
            ogUrl: 'http://localhost:4300/Teachers'
        }
    },
    {
        path: 'doers',
        redirectTo: 'Doers'
    },
    {
        path: 'Doers',
        canActivate: [_core_guard_public_hidden_public_hidden_guard__WEBPACK_IMPORTED_MODULE_10__.PublicHiddenGuard],
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_app_page-header_page-header_module_ts"), __webpack_require__.e("default-src_app_view_components_app_footer_footer_module_ts"), __webpack_require__.e("src_app_view_pages_common_doers_doers_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./view/pages/common/doers/doers.module */ 48980)).then(m => m.DoersModule),
        data: {
            title: 'اول آموز - لیست مدرسین مکانیک و تیونینگ و خودرو | AvalAmooz Doers',
            description: 'نمایندگان و همکاران آموزشی اول آموز | شبکه سراسری آموزگاران ابتدایی | مرجع تخصصی دوره‌ها، کاربرگ‌ها و روش تدریس ابتدایی',
            ogUrl: 'http://localhost:4300/Doers'
        }
    },
    {
        path: 'exam',
        redirectTo: 'Exam'
    },
    {
        path: 'Exam',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_app_page-header_page-header_module_ts"), __webpack_require__.e("default-src_app_view_components_app_footer_footer_module_ts"), __webpack_require__.e("default-src_app_view_components_course_shared-course_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_view_pages_exam_exam_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./view/pages/exam/exam.module */ 80182)).then(m => m.ExamModule),
        canActivate: [_core_guard_admin_or_super_admin_admin_or_super_admin_guard__WEBPACK_IMPORTED_MODULE_11__.AdminOrSuperAdminGuard],
        canActivateChild: [_core_guard_admin_or_super_admin_admin_or_super_admin_guard__WEBPACK_IMPORTED_MODULE_11__.AdminOrSuperAdminGuard],
        data: {
            title: 'اول آموز | سامانه آزمون و سنجش آنلاین معلمان ابتدایی',
            description: 'آزمون‌ها و سنجش آنلاین اول آموز؛ ارزیابی مهارت‌های روش تدریس، آزمون‌های کلاسی و توانمندسازی آموزگاران ابتدایی.',
            ogUrl: 'http://localhost:4300/Exam'
        }
    },
    {
        path: 'exam/:id',
        redirectTo: 'Exam/:id'
    },
    {
        path: 'Exam/:id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_app_page-header_page-header_module_ts"), __webpack_require__.e("default-src_app_view_components_app_footer_footer_module_ts"), __webpack_require__.e("default-src_app_view_components_course_shared-course_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_view_pages_exam_exam_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./view/pages/exam/exam.module */ 80182)).then(m => m.ExamModule),
        canActivate: [_core_guard_admin_or_super_admin_admin_or_super_admin_guard__WEBPACK_IMPORTED_MODULE_11__.AdminOrSuperAdminGuard],
        canActivateChild: [_core_guard_admin_or_super_admin_admin_or_super_admin_guard__WEBPACK_IMPORTED_MODULE_11__.AdminOrSuperAdminGuard],
        data: {
            title: 'اول آموز | سامانه آزمون و سنجش آنلاین معلمان ابتدایی',
            description: 'آزمون‌ها و سنجش آنلاین اول آموز؛ ارزیابی مهارت‌های روش تدریس، آزمون‌های کلاسی و توانمندسازی آموزگاران ابتدایی.',
            ogUrl: 'http://localhost:4300/Exam'
        }
    },
    {
        path: 'Degree/:id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_app_page-header_page-header_module_ts"), __webpack_require__.e("default-src_app_view_components_app_footer_footer_module_ts"), __webpack_require__.e("src_app_view_pages_exam_degree_degree_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./view/pages/exam/degree/degree.module */ 94454)).then(m => m.DegreeModule),
        data: {
            title: 'اول آموز | گواهینامه رسمی پایان دوره و آزمون | AvalAmooz Degree',
            description: 'استعلام و مشاهده گواهینامه رسمی پایان دوره، نتایج ارزشیابی و نمرات آزمون‌های تخصصی اول آموز.',
            ogUrl: 'http://localhost:4300/Degree/'
        }
    },
    {
        path: 'CommonQuestions',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_app_page-header_page-header_module_ts"), __webpack_require__.e("default-src_app_view_components_app_footer_footer_module_ts"), __webpack_require__.e("src_app_view_pages_common_common-questions_common-questions_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./view/pages/common/common-questions/common-questions.module */ 13036)).then(m => m.CommonQuestionsModule),
        data: {
            title: 'اول آموز - سوالات متداول',
            description: 'اول آموز | سوالات متداول و راهنمای معلمان و اولیا | مرجع تخصصی دوره‌ها، کاربرگ‌ها و روش تدریس ابتدایی',
            ogUrl: 'http://localhost:4300/CommonQuestions'
        }
    },
    {
        path: 'product',
        redirectTo: 'Product'
    },
    {
        path: 'Product',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_app_page-header_page-header_module_ts"), __webpack_require__.e("default-src_app_view_pages_home_learning-landing_learning-landing_module_ts"), __webpack_require__.e("common")]).then(__webpack_require__.bind(__webpack_require__, /*! ./view/pages/home/product/product.module */ 91941)).then(m => m.ProductModule),
        data: {
            title: 'اول آموز | فروشگاه محصولات و ابزارهای آموزشی معلمان ابتدایی',
            description: 'فروشگاه تخصصی معلمان ابتدایی اول آموز؛ کاربرگ‌های هفتگی پایه اول، طرح درس روزانه و سالانه، دست‌سازه‌های آموزشی و کیت‌های یادگیری خلاق.',
            ogUrl: 'http://localhost:4300/Product'
        }
    },
    {
        path: 'confirmphone',
        redirectTo: '/ConfirmPhone',
    },
    {
        path: 'Confirmphone',
        redirectTo: '/ConfirmPhone',
    },
    {
        path: 'confirmPhone',
        redirectTo: '/ConfirmPhone',
    },
    {
        path: 'ConfirmPhone',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_app_page-header_page-header_module_ts"), __webpack_require__.e("default-src_app_view_components_app_footer_footer_module_ts"), __webpack_require__.e("src_app_view_pages_common_confirm-phone_confirm-phone_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./view/pages/common/confirm-phone/confirm-phone.module */ 78511)).then(m => m.ConfirmPhoneModule)
    },
    { path: 'SellerActive', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_app_page-header_page-header_module_ts"), __webpack_require__.e("default-src_app_view_components_app_footer_footer_module_ts"), __webpack_require__.e("src_app_view_pages_common_seller-active_seller-active_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./view/pages/common/seller-active/seller-active.module */ 66064)).then(m => m.SellerActiveModule) },
    { path: 'SellerEdit', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_app_page-header_page-header_module_ts"), __webpack_require__.e("default-src_app_view_components_app_footer_footer_module_ts"), __webpack_require__.e("src_app_view_pages_common_seller-edit_seller-edit_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./view/pages/common/seller-edit/seller-edit.module */ 66117)).then(m => m.SellerEditModule) },
    {
        path: 'Payrules',
        redirectTo: '/PayRules',
    },
    {
        path: 'payrules',
        redirectTo: '/PayRules',
    },
    {
        path: 'payRules',
        redirectTo: '/PayRules',
    },
    {
        path: 'PayRules',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_app_page-header_page-header_module_ts"), __webpack_require__.e("default-src_app_view_components_app_footer_footer_module_ts"), __webpack_require__.e("src_app_view_pages_common_pay-rules_pay-rules_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./view/pages/common/pay-rules/pay-rules.module */ 16348)).then(m => m.PayRulesPageModule),
        data: {
            title: 'اول آموز - شرايط و قوانین فروشگاه',
            description: 'اول آموز | شرايط و قوانین فروشگاه | صفحه ی قوانین پرداخت و بازگشت وجه',
            ogUrl: 'http://localhost:4300/PayRules'
        }
    },
    // { path: 'OffCode', loadChildren: () => import('./view/pages/common/off-code/off-code.module').then(m => m.OffCodeModule) },
    // Error 404!
    {
        path: '**',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_app_page-header_page-header_module_ts"), __webpack_require__.e("default-src_app_view_components_app_footer_footer_module_ts"), __webpack_require__.e("src_app_view_pages_common_page404_page404_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./view/pages/common/page404/page404.module */ 23392)).then(m => m.Page404Module),
        data: {
            title: 'اول آموز - صفحه مورد نظر یافت نشد | خطای 404',
            description: 'اول آموز | خطای 404 | موردی یافت نشده است',
            ogUrl: 'http://localhost:4300/Page404'
        }
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule.forRoot(routes)
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule]
    })
], AppRoutingModule);

// @NgModule({
//   imports: [
//     RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
//   ],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }


/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.html?ngResource */ 33383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 79259);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/service-worker */ 63769);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs/operators */ 59151);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs/operators */ 86942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! rxjs/operators */ 80522);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ 92340);
/* harmony import */ var _core_common_G__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/common/G */ 67122);
/* harmony import */ var _core_common_GAccount__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/common/GAccount */ 6958);
/* harmony import */ var _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/common/GResponse */ 54021);
/* harmony import */ var _core_common_Urls__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/common/Urls */ 35602);
/* harmony import */ var _data_service_course_course_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./data/service/course/course.service */ 29209);
/* harmony import */ var _data_service_order_order_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./data/service/order/order.service */ 22773);
/* harmony import */ var _data_service_product_product_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./data/service/product/product.service */ 60007);
/* harmony import */ var _data_service_seo_seo_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./data/service/seo/seo.service */ 73847);
/* harmony import */ var _data_service_site_Slider_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./data/service/site/Slider.service */ 79519);
/* harmony import */ var _data_service_user_user_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./data/service/user/user.service */ 55007);
/* harmony import */ var _awesome_cordova_plugins_status_bar_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @awesome-cordova-plugins/status-bar/ngx */ 1550);
/* harmony import */ var _awesome_cordova_plugins_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @awesome-cordova-plugins/splash-screen/ngx */ 64883);
/* harmony import */ var _awesome_cordova_plugins_deeplinks_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @awesome-cordova-plugins/deeplinks/ngx */ 43671);
/* harmony import */ var _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./core/common/SharedIonic */ 97112);
/* harmony import */ var _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @awesome-cordova-plugins/geolocation/ngx */ 36457);
/* harmony import */ var _data_service_auth_account_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./data/service/auth/account.service */ 57577);
/* harmony import */ var _core_i18n_site_language_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./core/i18n/site-language.service */ 37159);




/* eslint-disable no-underscore-dangle */

/* eslint-disable @typescript-eslint/dot-notation */

/* eslint-disable @typescript-eslint/naming-convention */

/* eslint-disable @angular-eslint/use-lifecycle-interface */

/* eslint-disable eqeqeq */





 // eslint-disable-next-line max-len
















 // import { GoogleAnalytics } from '@awesome-cordova-plugins/google-analytics/ngx';


 // import Analytics from 'analytics';
// import googleAnalytics from '@analytics/google-analytics';


 // const analytics = Analytics({
//   app: 'avalamooz',
//   plugins: [
//     googleAnalytics({
//       trackingId: '264792585'
//     })
//   ]
// });

let AppComponent = class AppComponent {
  // eslint-disable-next-line @typescript-eslint/member-ordering
  constructor(document, platform, splashScreen, statusBar, router, accountService, courseService, productService, alertController, loadingController, orderService, location, menu, navController, deeplinks, sliderService, zone, activatedRoute, // private ga: GoogleAnalytics,
  seoService, userService, domSanitizer, geolocation, toastController, updates, swPush, _location, language) {
    this.document = document;
    this.platform = platform;
    this.splashScreen = splashScreen;
    this.statusBar = statusBar;
    this.router = router;
    this.accountService = accountService;
    this.courseService = courseService;
    this.productService = productService;
    this.alertController = alertController;
    this.loadingController = loadingController;
    this.orderService = orderService;
    this.location = location;
    this.menu = menu;
    this.navController = navController;
    this.deeplinks = deeplinks;
    this.sliderService = sliderService;
    this.zone = zone;
    this.activatedRoute = activatedRoute;
    this.seoService = seoService;
    this.userService = userService;
    this.domSanitizer = domSanitizer;
    this.geolocation = geolocation;
    this.toastController = toastController;
    this.updates = updates;
    this.swPush = swPush;
    this._location = _location;
    this.language = language;
    this.update = false;
    this.isAndroid = false;
    this.androidAppEnabled = _core_common_G__WEBPACK_IMPORTED_MODULE_4__.G.AndroidAppEnabled;
    this.isNewAndroidVersion = false;
    this.version = '';
    this.localVersion = _core_common_G__WEBPACK_IMPORTED_MODULE_4__.G.Version;
    this.newAndroidVersion = '';
    this.lastTimeBackPress = 0;
    this.timePeriodToExit = 2000;
    this.app = 'ir.avalamooz';
    this.isAdminMode = false;
    this.dark = false;
    this.voice = false;
    this.appPages = [{
      title: 'آموزشگاه',
      titleKey: 'nav.academy',
      url: _core_common_Urls__WEBPACK_IMPORTED_MODULE_7__.Urls.HomeUrl,
      icon: 'school',
      color: 'success'
    }, {
      title: 'دسته بندی دوره ها',
      titleKey: 'nav.categories',
      url: '/Categories',
      icon: 'school',
      color: 'success'
    }, {
      title: 'فروشگاه',
      titleKey: 'nav.store',
      url: _core_common_Urls__WEBPACK_IMPORTED_MODULE_7__.Urls.ProductUrl,
      icon: 'cube',
      color: 'danger'
    }, {
      title: 'دسته بندی محصولات',
      titleKey: 'nav.products',
      url: _core_common_Urls__WEBPACK_IMPORTED_MODULE_7__.Urls.ProductsUrl,
      icon: 'cube',
      color: 'danger'
    }, {
      title: 'مقالات',
      titleKey: 'nav.articles',
      url: _core_common_Urls__WEBPACK_IMPORTED_MODULE_7__.Urls.ArticleUrl,
      icon: 'document-text',
      color: 'warning'
    }, {
      title: 'مدرسین',
      titleKey: 'nav.teachers',
      url: _core_common_Urls__WEBPACK_IMPORTED_MODULE_7__.Urls.TeachersUrl,
      icon: 'people',
      color: 'discord'
    }, {
      title: 'نمایندگان',
      titleKey: 'nav.doers',
      url: _core_common_Urls__WEBPACK_IMPORTED_MODULE_7__.Urls.DoersUrl,
      icon: 'business',
      color: 'success'
    } // {
    //   title: 'جستجو',
    //   url: '/Home/Search',
    //   icon: 'search',
    //   color: 'light'
    // }
    ];
    this.windowWidth = 1000;
    this.count = 0;
    this.count2 = 0;
    this.signingOut = false;
    this.initializeApp();
    _core_common_GAccount__WEBPACK_IMPORTED_MODULE_5__.GAccount.CheckUser();

    if (_core_common_GAccount__WEBPACK_IMPORTED_MODULE_5__.GAccount.IsLoggedIn()) {
      this.accountService.ValidateSession().subscribe({
        error: () => {}
      });
    }

    this.CheckTheme();
    this.CheckVoice();
    this.backButtonEvent(); // if (updates.isEnabled) {
    //   console.log('check for update');
    //   updates.checkForUpdate();
    // }

    this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_22__.NavigationEnd), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.map)(() => this.activatedRoute), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.map)(route => {
      while (route.firstChild) {
        route = route.firstChild;
      }

      return route;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.filter)(route => route.outlet === 'primary'), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_24__.mergeMap)(route => route.data)).subscribe(event => {
      this.language.syncFromUrl(this.router.url);
      this.seoService.updateLocale(this.language.current);

      if (this.language.current === 'en') {
        const publicPath = this.router.url.split(/[?#]/, 1)[0];
        const section = publicPath.split('/')[2]?.toLowerCase() || '';
        const sectionTitles = {
          product: 'Learning Shop',
          products: 'Learning Products',
          p: 'Product',
          home: 'Courses',
          course: 'Courses',
          c: 'Course',
          tunerplus: 'Tuner Plus',
          tuningroad: 'Tuning Roadmap',
          account: 'Account',
          cart: 'Cart',
          article: 'Articles',
          a: 'Article',
          pa: 'Article',
          about: 'About Us',
          privacypolicy: 'Privacy Policy',
          commonquestions: 'FAQ',
          teachers: 'Instructors',
          doers: 'Partners',
          questions: 'Course Q&A',
          productquestions: 'Product Q&A'
        };
        const isLearningShop = section === 'product' || section === 'home' && publicPath.split('/')[3]?.toLowerCase() === 'product';
        const pageTitle = isLearningShop ? 'Learning Shop' : sectionTitles[section] || 'A World of Learning';
        this.seoService.updateTitle(pageTitle + ' | AvalAmooz');
        this.seoService.updateDescription(isLearningShop || section === 'products' || section === 'p' ? 'Explore books, worksheets, games and creative learning products for children and teachers.' : 'Explore learning courses and resources for primary school children, families and teachers.');
        this.seoService.updateOgUrl('http://localhost:4300' + publicPath);
      } else {
        this.seoService.updateTitle(event.title);
        this.seoService.updateOgUrl(event.ogUrl);
        this.seoService.updateDescription(event.title + event.description);
      }
    });
    router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_22__.NavigationStart)).subscribe(event => {
      _core_common_G__WEBPACK_IMPORTED_MODULE_4__.G.setIsLoading(true);
    });
    router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_22__.NavigationEnd)).subscribe(event => {
      _core_common_G__WEBPACK_IMPORTED_MODULE_4__.G.setIsLoading(false);
    });

    if (_core_common_GAccount__WEBPACK_IMPORTED_MODULE_5__.GAccount.IsLoggedIn()) {
      this.userService.GetUserIp().subscribe(res => {
        if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.SuccessStatus) {
          _core_common_G__WEBPACK_IMPORTED_MODULE_4__.G.UserIp = res.data;
        }
      }, err => {
        console.log('IP Failed');
        ;
      });
      this.orderService.GetUserCart().subscribe(res => {
        if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.SuccessStatus) {
          if (res.data.courses == null) {
            _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.setCartCoursesCount(0); // GResponse.CartCoursesCount = 0;
          } else {
            _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.setCartCoursesCount(res.data.courses.length); // GResponse.CartCoursesCount = res.data.courses.length;
          }

          if (res.data.products == null) {
            _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.setCartProductsCount(0);
          } else {
            _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.setCartProductsCount(res.data.products.length);
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
            this.presentLimitProductCart(list);
          }
        } else {
          _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.setCartCoursesCount(0);
          _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.setCartProductsCount(0); // GResponse.CartCoursesCount = 0;
        }
      });
      _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.getCartCoursesCount().subscribe(res => {
        this.count = res;
      });
      _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.getCartProductsCount().subscribe(res => {
        this.count2 = res;
      });
      this.courseService.GetUserCoursesId().subscribe(res => {
        if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.SuccessStatus) {
          _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.MyCourseIds = res.data;
          _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.setMyCourseIds(res.data);
        } else {
          _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.MyCourseIds = [];
        }
      });
      this.productService.GetUserProductsId().subscribe(res => {
        if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.SuccessStatus) {
          _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.MyProductIds = res.data;
          _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.setMyProductIds(res.data);
        } else {
          _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.MyProductIds = [];
        }
      });
    }
  }

  onResize(event) {
    this.windowWidth = +event.target.innerWidth;
    _core_common_G__WEBPACK_IMPORTED_MODULE_4__.G.setWindowWidth(this.windowWidth);
  }

  presentLimitProductCart(model) {
    var _this = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this.alertController.create({
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
    // this.productService.GetAllProductsCategory().subscribe(
    //   res => {
    //     if (res.status === GResponse.SuccessStatus) {
    //       GResponse.ProductCategory = res.data;
    //     }
    //   }
    // );
    this.courseService.GetAllCoursesCategory().subscribe(res => {
      if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.SuccessStatus) {
        _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.CourseCategory = res.data;
        _core_common_G__WEBPACK_IMPORTED_MODULE_4__.G.setCourseCategory(res.data);
      }
    });
    this.productService.GetAllProductsCategory().subscribe(res => {
      if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.SuccessStatus) {
        _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.ProductCategory = res.data;
        _core_common_G__WEBPACK_IMPORTED_MODULE_4__.G.setProductCategory(res.data);
      }
    });
    this.sliderService.GetAllHelpfulLink().subscribe(res => {
      if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.SuccessStatus) {
        _core_common_G__WEBPACK_IMPORTED_MODULE_4__.G.setHelpfulLinks(res.data);
      }
    });
    this.sliderService.GetSliders().subscribe(res => {
      if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.SuccessStatus) {
        _core_common_G__WEBPACK_IMPORTED_MODULE_4__.G.setSlides(res.data);
      } else {
        _core_common_G__WEBPACK_IMPORTED_MODULE_4__.G.setSlides([]);
      }
    }, err => {
      _core_common_G__WEBPACK_IMPORTED_MODULE_4__.G.setSlides([]);
    });
    this.sliderService.GetSetting().subscribe(res => {
      if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.SuccessStatus) {
        _core_common_G__WEBPACK_IMPORTED_MODULE_4__.G.Facebook = res.data.faceBook;
        _core_common_G__WEBPACK_IMPORTED_MODULE_4__.G.Instagram = res.data.instagram;
        _core_common_G__WEBPACK_IMPORTED_MODULE_4__.G.Telegram = res.data.telegram;
        _core_common_G__WEBPACK_IMPORTED_MODULE_4__.G.Twiter = res.data.twitter;
        _core_common_G__WEBPACK_IMPORTED_MODULE_4__.G.Twitch = res.data.twitch;
        _core_common_G__WEBPACK_IMPORTED_MODULE_4__.G.Discord = res.data.discord;
        _core_common_G__WEBPACK_IMPORTED_MODULE_4__.G.Aparat = res.data.aparat;
        _core_common_G__WEBPACK_IMPORTED_MODULE_4__.G.Pinterest = res.data.pinterest;
        _core_common_G__WEBPACK_IMPORTED_MODULE_4__.G.Linkedin = res.data.linkedIn;
        _core_common_G__WEBPACK_IMPORTED_MODULE_4__.G.TeacherRegisterLink = res.data.teacherRegisterLink;
        _core_common_G__WEBPACK_IMPORTED_MODULE_4__.G.TunerPlusVideo = res.data.tunerPlusVideo;
        _core_common_G__WEBPACK_IMPORTED_MODULE_4__.G.GearRatioVideo = res.data.gearRatioVideo;
        _core_common_G__WEBPACK_IMPORTED_MODULE_4__.G.TeacherRegisterVideo = res.data.teacherRegisterVideo;
        _core_common_G__WEBPACK_IMPORTED_MODULE_4__.G.TeacherPanelVideo = res.data.teacherPanelVideo;
        _core_common_G__WEBPACK_IMPORTED_MODULE_4__.G.SellerPanelVideo = res.data.sellerPanelVideo;
        _core_common_G__WEBPACK_IMPORTED_MODULE_4__.G.TunerPlusStoichVideo = res.data.tunerPlusStoichVideo;
        _core_common_G__WEBPACK_IMPORTED_MODULE_4__.G.SiteVersion = res.data.siteVersion;
        _core_common_G__WEBPACK_IMPORTED_MODULE_4__.G.TunerPlusDwellVideo = res.data.tunerPlusDwellVideo;
        _core_common_G__WEBPACK_IMPORTED_MODULE_4__.G.AndroidApp = res.data.androidApp;
        _core_common_G__WEBPACK_IMPORTED_MODULE_4__.G.TunerPlusInj = res.data.tunerPlusInjVideo;
        _core_common_G__WEBPACK_IMPORTED_MODULE_4__.G.TunerPlusHpVideo = res.data.tunerPlusHpVideo;
        _core_common_G__WEBPACK_IMPORTED_MODULE_4__.G.TunerPlusRunnerVideo = res.data.tunerPlusRunnerVideo;
        _core_common_G__WEBPACK_IMPORTED_MODULE_4__.G.TunerPlusTurboVideo = res.data.tunerPlusTurboVideo;
        _core_common_G__WEBPACK_IMPORTED_MODULE_4__.G.TunerPlusThrottleVideo = res.data.tunerPlusThrottleVideo;
        _core_common_G__WEBPACK_IMPORTED_MODULE_4__.G.TunerPlusTu5Video = res.data.tunerPlusTu5Video;
        _core_common_G__WEBPACK_IMPORTED_MODULE_4__.G.PlacementExamVideo = res.data.placementExamVideo;
        _core_common_G__WEBPACK_IMPORTED_MODULE_4__.G.CourseExamVideo = res.data.courseExamVideo;
        _core_common_G__WEBPACK_IMPORTED_MODULE_4__.G.WhpToHpVideo = res.data.whpToHpVideo;
        _core_common_G__WEBPACK_IMPORTED_MODULE_4__.G.SellerRegisterVideo = res.data.sellerRegisterVideo;
        _core_common_G__WEBPACK_IMPORTED_MODULE_4__.G.SellerRegisterLink = res.data.sellerRegisterLink;
        _core_common_G__WEBPACK_IMPORTED_MODULE_4__.G.IsCourseDisabled = res.data.isCourseDisabled;
        _core_common_G__WEBPACK_IMPORTED_MODULE_4__.G.IsProductDisabled = res.data.isProductDisabled;
        _core_common_G__WEBPACK_IMPORTED_MODULE_4__.G.isOff = res.data.isOff;
        _core_common_G__WEBPACK_IMPORTED_MODULE_4__.G.offDate = res.data.offDate;
        _core_common_G__WEBPACK_IMPORTED_MODULE_4__.G.limitTitle = res.data.limitTitle;
        this.newAndroidVersion = _core_common_G__WEBPACK_IMPORTED_MODULE_4__.G.SiteVersion;
        _core_common_G__WEBPACK_IMPORTED_MODULE_4__.G.setAndroidApp2(res.data.androidApp);
        _core_common_G__WEBPACK_IMPORTED_MODULE_4__.G.setSettingsDone(true);
        const version = localStorage.getItem('version');

        if (this.androidAppEnabled && this.platform.is('android') && this.platform.is('mobileweb') && !this.platform.is('hybrid')) {
          for (let i = 0; i < localStorage.length; i++) {
            if (localStorage.key(i) === 'android-app-alert') {
              if (localStorage.getItem('android-app-alert') === 'true') {
                break;
              } else {
                localStorage.removeItem('android-app-alert'); // this.alertUseApp();

                break;
              }
            } else if (i == localStorage.length - 1) {
              this.alertUseApp();
            }
          }
        }

        if (this.platform.is('hybrid')) {
          this.version = _core_common_G__WEBPACK_IMPORTED_MODULE_4__.G.Version;
          this.isAndroid = true;

          if (_core_common_G__WEBPACK_IMPORTED_MODULE_4__.G.Version !== _core_common_G__WEBPACK_IMPORTED_MODULE_4__.G.SiteVersion) {
            this.alertNewVersion();
            this.isNewAndroidVersion = true;
          }
        } else {
          if (version == null) {
            this.version = _core_common_G__WEBPACK_IMPORTED_MODULE_4__.G.SiteVersion;
            localStorage.setItem('version', _core_common_G__WEBPACK_IMPORTED_MODULE_4__.G.SiteVersion);
            this.pwaUpdate();
          } else if (version !== _core_common_G__WEBPACK_IMPORTED_MODULE_4__.G.SiteVersion) {
            this.version = version;
            this.pwaUpdate();
          } else {
            this.version = version;
            this.pwaUpdate();
          }
        }

        if (src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.production && !this.platform.is('hybrid')) {
          if (localStorage.getItem('check') != _core_common_G__WEBPACK_IMPORTED_MODULE_4__.G.SiteVersion) {
            const isFound = localStorage.getItem('check') == null;
            localStorage.removeItem('check');
            localStorage.setItem('check', _core_common_G__WEBPACK_IMPORTED_MODULE_4__.G.SiteVersion);

            if ('caches' in window) {
              caches.keys().then(keyList => Promise.all(keyList.map(key => caches.delete(key))));
            }

            if (window.navigator && navigator.serviceWorker) {
              navigator.serviceWorker.getRegistrations().then(registrations => {
                for (const registration of registrations) {
                  registration.unregister();
                }
              });
            }

            if (!isFound) {
              setTimeout(() => {
                this.alertUpdated();
              }, 3000);
            }
          }
        }
      }

      _core_common_G__WEBPACK_IMPORTED_MODULE_4__.G.setIsSettingLoading(false);
    });
    this.userService.GetAllOffCodes().subscribe(res => {
      if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_6__.GResponse.SuccessStatus === res.status) {
        _core_common_G__WEBPACK_IMPORTED_MODULE_4__.G.setOffCodes(res.data.filter(x => x.isActive === true));
      }
    }); // this.articleService.GetAllArticlesCategory().subscribe(
    //   res => {
    //     if (res.status === GResponse.SuccessStatus) {
    //       GResponse.ArticleCategory = res.data;
    //     }
    //   }
    // );

    this.geolocation.getCurrentPosition().then(resp => {
      localStorage.removeItem('lat');
      localStorage.setItem('lat', resp.coords.latitude.toString());
      localStorage.removeItem('long');
      localStorage.setItem('long', resp.coords.longitude.toString()); // this.ga.setVar('Email', GAccount.UserEmail);
      // this.ga.setVar('latitude', resp.coords.latitude.toString());
      // this.ga.setVar('longitude', resp.coords.longitude.toString());
      // this.ga.startTrackerWithId('187103654')
      //   .then(() => {
      //     this.ga.setUserId(GAccount.UserEmail);
      //     this.ga.setVar('Email', GAccount.UserEmail);
      //     this.ga.setVar('latitude', resp.coords.latitude.toString());
      //     this.ga.setVar('longitude', resp.coords.longitude.toString());
      //     // Tracker is ready
      //     // You can now track pages or set additional information such as AppVersion or UserId
      //   })
      //   .catch(e => SharedIonic.toast(this.toastController, 'Google Analytic Error'));
    }).catch(error => {// console.log(error);
      // SharedIonic.toast(this.toastController, 'Geolocation Error');
    });
  }

  clearCaches() {
    if ('caches' in window) {
      caches.keys().then(keyList => Promise.all(keyList.map(key => caches.delete(key))));
    }

    if (window.navigator && navigator.serviceWorker) {
      navigator.serviceWorker.getRegistrations().then(registrations => {
        for (const registration of registrations) {
          registration.unregister();
        }
      });
    }

    setTimeout(() => {
      location.reload();
    }, 1000);
  }

  isHybrid() {
    if (this.platform.is('hybrid')) {
      return true;
    } else {
      return false;
    }
  }

  IsAndroidBrowser() {
    if (this.platform.is('android') && this.platform.is('mobileweb') && !this.platform.is('hybrid')) {
      return true;
    } else {
      return false;
    }
  }

  clearCacheStorage() {
    return caches.keys().then(cacheKeys => Promise.all(cacheKeys.map(cacheKey => {
      const ngswRegex = /^(ngsw).*/;

      if (ngswRegex.test(cacheKey)) {
        return caches.open(cacheKey).then(cache => cache.keys().then(requests => requests.map(req => cache.delete(req))));
      }
    })));
  } // private async subscribeToPush() {
  //   try {
  //     const sub = await this.swPush.requestSubscription({
  //       serverPublicKey: PUBLIC_VAPID_KEY_OF_SERVER,
  //     });
  //     // TODO: Send to server.
  //   } catch (err) {
  //     console.error('Could not subscribe due to:', err);
  //   }
  // }


  pwaUpdate() {
    var _this2 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this2.updates.isEnabled) {
        // this.swPush.notificationClicks.subscribe(
        //   ({ action, notification }) => {
        //     // TODO: Do something in response to notification click.
        //     console.log('action');
        //     console.log(action);
        //     console.log('notification');
        //     console.log(notification);
        //   });
        // this.swPush.unsubscribe().then(e => {
        //   console.log('e');
        //   console.log(e);
        // });
        _this2.updates.available.subscribe(event => {
          // this.update = true;
          _this2.updates.activateUpdate().then(() => _this2.alertUpdated());
        });
      }
    })();
  }

  alertUpdated() {
    var _this3 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      localStorage.removeItem('version');
      localStorage.setItem('version', _core_common_G__WEBPACK_IMPORTED_MODULE_4__.G.SiteVersion);
      _this3.update = false;
      const alert = yield _this3.alertController.create({
        cssClass: 'main-alert',
        header: 'بروزرسانی',
        message: 'سایت بروز شد. رفرش کنید',
        backdropDismiss: false,
        buttons: [{
          text: 'لغو',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        }, {
          text: 'رفرش',
          handler: () => {
            document.location.reload();
          }
        }]
      });
      yield alert.present();
    })();
  }

  alertNewVersion() {
    var _this4 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this4.androidAppEnabled) {
        return;
      }

      const alert = yield _this4.alertController.create({
        cssClass: 'main-alert',
        header: 'بروزرسانی',
        message: 'ورژن جدید وجود دارد',
        backdropDismiss: false,
        buttons: [{
          text: 'بستن',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        }, {
          text: 'دانلود',
          handler: () => {
            window.location.href = _core_common_G__WEBPACK_IMPORTED_MODULE_4__.G.AndroidApp;
          }
        }]
      });
      yield alert.present();
    })();
  }

  downloadAndroidNewVersion() {
    if (!this.androidAppEnabled) {
      return;
    }

    window.location.href = _core_common_G__WEBPACK_IMPORTED_MODULE_4__.G.AndroidApp;
  }

  alertUseApp() {
    var _this5 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this5.androidAppEnabled) {
        return;
      }

      const alert = yield _this5.alertController.create({
        cssClass: 'main-alert',
        header: 'اپلیکیشن اول آموز',
        message: 'پیشنهاد میشود از اپلیکیشن اندروید استفاده فرمایید',
        backdropDismiss: false,
        buttons: [{
          text: 'بستن',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        }, {
          text: 'دانلود',
          handler: () => {
            window.location.href = _core_common_G__WEBPACK_IMPORTED_MODULE_4__.G.AndroidApp;
          }
        }]
      });
      yield alert.present();
      localStorage.setItem('android-app-alert', 'true');
    })();
  }

  alertDownloadApp() {
    var _this6 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this6.androidAppEnabled) {
        return;
      }

      const alert = yield _this6.alertController.create({
        cssClass: 'main-alert2',
        header: 'اپلیکیشن اول آموز',
        message: 'برای دانلود اپلیکیشن اندروید روی گزینه دانلود کلیک فرمایید\r\nورژن: ' + _this6.newAndroidVersion,
        backdropDismiss: true,
        buttons: [{
          text: 'بستن',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        }, {
          text: 'دانلود',
          handler: () => {
            window.location.href = _core_common_G__WEBPACK_IMPORTED_MODULE_4__.G.AndroidApp;
          }
        }]
      });
      yield alert.present();
    })();
  }

  backButtonEvent() {
    var _this7 = this;

    this.platform.backButton.subscribeWithPriority(0, () => {
      this.routerOutlets.forEach( /*#__PURE__*/function () {
        var _ref = (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (outlet) {
          const url = _this7.router.url;

          if (url === '/Home' || url === '/home' || url === '/') {
            if (new Date().getTime() - _this7.lastTimeBackPress >= _this7.timePeriodToExit) {
              _this7.lastTimeBackPress = new Date().getTime();

              _this7.presentAlertConfirm();
            } else {
              // tslint:disable-next-line: no-string-literal
              navigator['app'].exitApp();
            }
          } else {
            _this7._location.back();
          }
        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    });
  }

  presentAlertConfirm() {
    var _this8 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this8.alertController.create({
        // header: 'Confirm!',
        message: 'آیا برای خروج مطمئن هستید؟',
        cssClass: 'exit-alert',
        buttons: [{
          text: 'لغو',
          role: 'cancel',
          handler: blah => {}
        }, {
          text: 'خروج',
          handler: () => {
            // tslint:disable-next-line: no-string-literal
            navigator['app'].exitApp();
          }
        }]
      });
      yield alert.present();
    })();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // this.ga.startTrackerWithId('264792585').then(() => {
      //   //Track Screen1 page
      //   this.ga.trackView('Landing Page');
      //   this.ga.trackEvent('View', 'StartUp', 'My event', 1);
      //   this.ga.addCustomDimension(1, GAccount.UserEmail == null ? 'null' : GAccount.UserEmail);
      //   this.ga.setUserId(GAccount.UserEmail == null ? 'null' : GAccount.UserEmail);
      // }).catch(e => {
      //   if (GAccount.UserEmail == 'nima.dr13@gmail.com') {
      //     console.log(e);
      //   }
      // });
      // /* Track a page view */
      // analytics.page();
      // /* Track a custom event */
      // analytics.track('playedVideo', {
      //   category: 'Videos',
      //   label: 'Fall Campaign',
      //   value: 42
      // });
      // /* Identify a visitor */
      // analytics.identify(GAccount.UserEmail == null ? 'null' : GAccount.UserEmail, {
      //   firstName: 'bill',
      //   lastName: 'murray'
      // });
      _core_common_G__WEBPACK_IMPORTED_MODULE_4__.G.Width = +this.platform.width();

      if (this.platform.is('desktop')) {
        _core_common_G__WEBPACK_IMPORTED_MODULE_4__.G.IsDesktop = true;

        if (window.location.hostname === 'm.avalamooz.ir') {
          const url = window.location.href.replace('m.avalamooz.ir', 'avalamooz.ir');
          this.document.location.href = url;
        }
      }

      if (this.platform.is('hybrid')) {
        _core_common_G__WEBPACK_IMPORTED_MODULE_4__.G.IsAppInstalled = true;
        _core_common_G__WEBPACK_IMPORTED_MODULE_4__.G.IsAndroid = true;
        this.statusBar.styleDefault();
        this.statusBar.hide();
        this.splashScreen.hide();
        this.setDeepLink();
      } else {
        _core_common_G__WEBPACK_IMPORTED_MODULE_4__.G.IsAndroid = false; // this.appAvailability.check(this.app)
        //   .then(
        //     (yes: boolean) => {
        //       G.IsAppInstalled = true;
        //     }
        //     ,
        //     (no: boolean) => {
        //       G.IsAppInstalled = false;
        //     }
        //   );
      }
    });
  }

  setDeepLink() {
    this.deeplinks.routeWithNavController(this.navController, {
      '/online-payment/:id': '/Cart/OnlinePayment/:id',
      '/online-payment-wallet/:id': '/Cart/OnlinePaymentWallet/:id',
      '/online-payment-exam/:id': '/Exam/OnlinePaymentExam/:id',
      '/online-payment-pay-again/:id': '/Cart/OnlinePaymentPayAgain/:id'
    }).subscribe(match => {
      _core_common_G__WEBPACK_IMPORTED_MODULE_4__.G.IsPhonePayState = true;
      console.log('Successfully matched route: ', match); // Create our internal Router path by hand

      const internalPath = `/${match.$route}/${match.$args}`;
      console.log('internalPath: ', internalPath); // const internalPath = '/About';
      // Run the navigation in the Angular zone

      this.zone.run(() => {
        this.router.navigateByUrl(internalPath);
      });
    }, nomatch => {
      // nomatch.$link - the full link data
      _core_common_G__WEBPACK_IMPORTED_MODULE_4__.G.IsPhonePayState = true;
      console.error('Got a deeplink that didn\'t match: ', nomatch);
    });
  }

  ngAfterViewInit() {}

  CheckTheme() {
    let found = false;

    for (let i = 0; i < localStorage.length; i++) {
      if (localStorage.key(i) === 'theme') {
        found = true;

        if (localStorage.getItem('theme') === 'dark') {
          this.dark = true;
        } else {
          this.dark = false;
        }
      }
    }

    if (!found) {
      this.dark = false;
    }

    this.document.body.classList.toggle('dark-theme', this.dark);
    _core_common_G__WEBPACK_IMPORTED_MODULE_4__.G.darkTheme = this.dark;
    _core_common_G__WEBPACK_IMPORTED_MODULE_4__.G.setCurrentMode(_core_common_G__WEBPACK_IMPORTED_MODULE_4__.G.darkTheme);
  }

  CheckVoice() {
    let found = false;

    for (let i = 0; i < localStorage.length; i++) {
      if (localStorage.key(i) === 'voice') {
        found = true;

        if (localStorage.getItem('voice') === '1') {
          this.voice = true;
        } else {
          this.voice = false;
        }
      }
    }

    if (!found) {
      this.voice = false;
    }

    _core_common_G__WEBPACK_IMPORTED_MODULE_4__.G.voice = this.voice;
    _core_common_G__WEBPACK_IMPORTED_MODULE_4__.G.setCurrentVoice(_core_common_G__WEBPACK_IMPORTED_MODULE_4__.G.voice);
  }

  ThemeChanged(dark) {
    this.dark = dark;
    this.document.body.classList.toggle('dark-theme', dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
    _core_common_G__WEBPACK_IMPORTED_MODULE_4__.G.darkTheme = dark;
    _core_common_G__WEBPACK_IMPORTED_MODULE_4__.G.setCurrentMode(_core_common_G__WEBPACK_IMPORTED_MODULE_4__.G.darkTheme);
  }

  VoiceChanged() {
    for (let i = 0; i < localStorage.length; i++) {
      if (localStorage.key(i) === 'voice') {
        localStorage.removeItem('voice');
      }
    }

    if (!this.voice) {
      localStorage.setItem('voice', '1');
    } else {
      localStorage.setItem('voice', '0');
    }

    _core_common_G__WEBPACK_IMPORTED_MODULE_4__.G.voice = !this.voice;
    _core_common_G__WEBPACK_IMPORTED_MODULE_4__.G.setCurrentVoice(_core_common_G__WEBPACK_IMPORTED_MODULE_4__.G.voice);
  }

  SignOut() {
    var _this9 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this9.alertController.create({
        // header: 'Confirm!',
        message: 'آیا برای خروج مطمئن هستید؟',
        cssClass: 'exit-alert',
        buttons: [{
          text: 'لغو',
          role: 'cancel',
          handler: blah => {}
        }, {
          text: 'خروج',
          handler: () => {
            _this9.onSignOut();
          }
        }]
      });
      yield alert.present();
    })();
  }

  onSignOut() {
    if (this.signingOut) {
      return;
    }

    const token = _core_common_GAccount__WEBPACK_IMPORTED_MODULE_5__.GAccount.TokenDecryptValue;

    const complete = () => {
      this.signingOut = false;

      if (_core_common_GAccount__WEBPACK_IMPORTED_MODULE_5__.GAccount.TokenDecryptValue && _core_common_GAccount__WEBPACK_IMPORTED_MODULE_5__.GAccount.TokenDecryptValue !== token) {
        return;
      }

      _core_common_GAccount__WEBPACK_IMPORTED_MODULE_5__.GAccount.SignOut();
      this.router.navigateByUrl(this.language.url(_core_common_Urls__WEBPACK_IMPORTED_MODULE_7__.Urls.AccountUrl));
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_17__.SharedIonic.dismissLoading(this.loadingController);
    };

    if (!_core_common_GAccount__WEBPACK_IMPORTED_MODULE_5__.GAccount.IsLoggedIn()) {
      complete();
      return;
    }

    this.signingOut = true;
    this.accountService.Logout().subscribe({
      next: complete,
      error: err => {
        if (err.status === 401 && err.error?.code === 'invalid_session') {
          complete();
        } else {
          this.signingOut = false;
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_17__.SharedIonic.toast(this.toastController, this.language.text('account.logoutFailed'));
        }
      }
    });
  }

  onSessionStorageChange(event) {
    if (event.storageArea !== localStorage) {
      return;
    }

    const token = _core_common_GAccount__WEBPACK_IMPORTED_MODULE_5__.GAccount.TokenDecryptValue;
    _core_common_GAccount__WEBPACK_IMPORTED_MODULE_5__.GAccount.CheckUser();

    if (token && !_core_common_GAccount__WEBPACK_IMPORTED_MODULE_5__.GAccount.IsLoggedIn()) {
      this.router.navigateByUrl(this.language.url(_core_common_Urls__WEBPACK_IMPORTED_MODULE_7__.Urls.AccountUrl));
    }
  }

  IsLoggedin() {
    return _core_common_GAccount__WEBPACK_IMPORTED_MODULE_5__.GAccount.IsLoggedIn();
  }

  IsAdmin() {
    return _core_common_GAccount__WEBPACK_IMPORTED_MODULE_5__.GAccount.IsAdmin();
  }

  IsUser() {
    return _core_common_GAccount__WEBPACK_IMPORTED_MODULE_5__.GAccount.IsLoggedIn() && !_core_common_GAccount__WEBPACK_IMPORTED_MODULE_5__.GAccount.IsAdmin();
  }

  IsSuperAdmin() {
    return _core_common_GAccount__WEBPACK_IMPORTED_MODULE_5__.GAccount.IsSuperAdmin();
  }

  CanViewRestrictedPages() {
    return _core_common_GAccount__WEBPACK_IMPORTED_MODULE_5__.GAccount.IsAdminActive() || _core_common_GAccount__WEBPACK_IMPORTED_MODULE_5__.GAccount.IsSuperAdminActive();
  }

  IsSeller() {
    return _core_common_GAccount__WEBPACK_IMPORTED_MODULE_5__.GAccount.IsSeller();
  }

  IsTeacher() {
    return _core_common_GAccount__WEBPACK_IMPORTED_MODULE_5__.GAccount.IsTeacher();
  }

  IsInstagramAdmin() {
    return _core_common_GAccount__WEBPACK_IMPORTED_MODULE_5__.GAccount.IsInstagramAdmin();
  }

};

AppComponent.ctorParameters = () => [{
  type: Document,
  decorators: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_25__.Inject,
    args: [_angular_common__WEBPACK_IMPORTED_MODULE_26__.DOCUMENT]
  }]
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_27__.Platform
}, {
  type: _awesome_cordova_plugins_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_15__.SplashScreen
}, {
  type: _awesome_cordova_plugins_status_bar_ngx__WEBPACK_IMPORTED_MODULE_14__.StatusBar
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_22__.Router
}, {
  type: _data_service_auth_account_service__WEBPACK_IMPORTED_MODULE_19__.AccountService
}, {
  type: _data_service_course_course_service__WEBPACK_IMPORTED_MODULE_8__.CourseService
}, {
  type: _data_service_product_product_service__WEBPACK_IMPORTED_MODULE_10__.ProductService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_27__.AlertController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_27__.LoadingController
}, {
  type: _data_service_order_order_service__WEBPACK_IMPORTED_MODULE_9__.OrderService
}, {
  type: _angular_common__WEBPACK_IMPORTED_MODULE_26__.Location
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_27__.MenuController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_27__.NavController
}, {
  type: _awesome_cordova_plugins_deeplinks_ngx__WEBPACK_IMPORTED_MODULE_16__.Deeplinks
}, {
  type: _data_service_site_Slider_service__WEBPACK_IMPORTED_MODULE_12__.SliderService
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_25__.NgZone
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_22__.ActivatedRoute
}, {
  type: _data_service_seo_seo_service__WEBPACK_IMPORTED_MODULE_11__.SEOService
}, {
  type: _data_service_user_user_service__WEBPACK_IMPORTED_MODULE_13__.UserService
}, {
  type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_28__.DomSanitizer
}, {
  type: _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_18__.Geolocation
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_27__.ToastController
}, {
  type: _angular_service_worker__WEBPACK_IMPORTED_MODULE_29__.SwUpdate
}, {
  type: _angular_service_worker__WEBPACK_IMPORTED_MODULE_29__.SwPush
}, {
  type: _angular_common__WEBPACK_IMPORTED_MODULE_26__.Location
}, {
  type: _core_i18n_site_language_service__WEBPACK_IMPORTED_MODULE_20__.SiteLanguageService
}];

AppComponent.propDecorators = {
  routerOutlets: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_25__.ViewChildren,
    args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_27__.IonRouterOutlet]
  }],
  onResize: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_25__.HostListener,
    args: ['window:resize', ['$event']]
  }],
  onSessionStorageChange: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_25__.HostListener,
    args: ['window:storage', ['$event']]
  }]
};
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_30__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_25__.Component)({
  selector: 'app-root',
  template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], AppComponent);


/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/service-worker */ 63769);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ 92340);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _view_components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/components/common/loading/loading.module */ 90876);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _data_service_product_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data/service/product/product.service */ 60007);
/* harmony import */ var _data_service_course_course_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data/service/course/course.service */ 29209);
/* harmony import */ var _data_service_article_article_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./data/service/article/article.service */ 56847);
/* harmony import */ var _data_service_site_Slider_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./data/service/site/Slider.service */ 79519);
/* harmony import */ var _data_service_order_order_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./data/service/order/order.service */ 22773);
/* harmony import */ var _data_service_user_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./data/service/user/user.service */ 55007);
/* harmony import */ var _core_utility_account_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/utility/account.interceptor */ 8363);
/* harmony import */ var _awesome_cordova_plugins_app_availability_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @awesome-cordova-plugins/app-availability/ngx */ 28313);
/* harmony import */ var _awesome_cordova_plugins_status_bar_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @awesome-cordova-plugins/status-bar/ngx */ 1550);
/* harmony import */ var _awesome_cordova_plugins_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @awesome-cordova-plugins/splash-screen/ngx */ 64883);
/* harmony import */ var _awesome_cordova_plugins_deeplinks_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @awesome-cordova-plugins/deeplinks/ngx */ 43671);
/* harmony import */ var _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @awesome-cordova-plugins/geolocation/ngx */ 36457);
/* harmony import */ var _awesome_cordova_plugins_ble_ngx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @awesome-cordova-plugins/ble/ngx */ 84880);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _core_i18n_locale_url_serializer__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./core/i18n/locale-url-serializer */ 15836);
/* harmony import */ var _core_i18n_site_i18n_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./core/i18n/site-i18n.module */ 58586);























// import { GoogleAnalytics } from '@awesome-cordova-plugins/google-analytics/ngx';





let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_19__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_20__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__.BrowserModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_22__.IonicModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormsModule,
            _view_components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_3__.LoadingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_24__.HttpClientModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__.TranslateModule.forRoot(),
            _core_i18n_site_i18n_module__WEBPACK_IMPORTED_MODULE_18__.SiteI18nModule,
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_26__.ServiceWorkerModule.register('ngsw-worker.js', {
                enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.production,
                // Register the ServiceWorker as soon as the application is stable
                // or after 30 seconds (whichever comes first).
                registrationStrategy: 'registerWhenStable:30000'
            })
        ],
        providers: [
            _awesome_cordova_plugins_status_bar_ngx__WEBPACK_IMPORTED_MODULE_12__.StatusBar,
            _awesome_cordova_plugins_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_13__.SplashScreen,
            {
                provide: _angular_router__WEBPACK_IMPORTED_MODULE_27__.RouteReuseStrategy,
                useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_22__.IonicRouteStrategy
            },
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_27__.UrlSerializer, useClass: _core_i18n_locale_url_serializer__WEBPACK_IMPORTED_MODULE_17__.LocaleUrlSerializer },
            _data_service_product_product_service__WEBPACK_IMPORTED_MODULE_4__.ProductService,
            // GoogleAnalytics,
            _data_service_course_course_service__WEBPACK_IMPORTED_MODULE_5__.CourseService,
            _data_service_article_article_service__WEBPACK_IMPORTED_MODULE_6__.ArticleService,
            _data_service_site_Slider_service__WEBPACK_IMPORTED_MODULE_7__.SliderService,
            _awesome_cordova_plugins_deeplinks_ngx__WEBPACK_IMPORTED_MODULE_14__.Deeplinks,
            _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_15__.Geolocation,
            _awesome_cordova_plugins_app_availability_ngx__WEBPACK_IMPORTED_MODULE_11__.AppAvailability,
            _data_service_order_order_service__WEBPACK_IMPORTED_MODULE_8__.OrderService,
            _awesome_cordova_plugins_ble_ngx__WEBPACK_IMPORTED_MODULE_16__.BLE,
            _data_service_user_user_service__WEBPACK_IMPORTED_MODULE_9__.UserService,
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_24__.HTTP_INTERCEPTORS,
                useClass: _core_utility_account_interceptor__WEBPACK_IMPORTED_MODULE_10__.AccountInterceptor,
                multi: true
            }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 24784:
/*!***************************************************!*\
  !*** ./src/app/core/common/CryptographyHelper.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CryptographyHelper": () => (/* binding */ CryptographyHelper)
/* harmony export */ });
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto-js */ 36240);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _G__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./G */ 67122);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 92340);



class CryptographyHelper {
    static encrypt(plaintext) {
        try {
            return crypto_js__WEBPACK_IMPORTED_MODULE_0__.AES.encrypt(JSON.stringify(plaintext), this.privateKey).toString();
        }
        catch (e) {
            // console.log('encrypt failed');
        }
    }
    static decrypt(cypher) {
        try {
            const bytes = crypto_js__WEBPACK_IMPORTED_MODULE_0__.AES.decrypt(cypher, this.privateKey);
            if (bytes.toString()) {
                return JSON.parse(bytes.toString(crypto_js__WEBPACK_IMPORTED_MODULE_0__.enc.Utf8));
            }
            return cypher;
        }
        catch (e) {
            // console.log('decrypt failed');
        }
    }
    static buildSecureLink(path) {
        if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.production) {
            _G__WEBPACK_IMPORTED_MODULE_1__.G.UserIp = '2.147.192.83';
        }
        const videoUrl = new URL(path, window.location.origin);
        const baseUrl = videoUrl.origin;
        path = videoUrl.pathname;
        const expires = Math.floor(Date.now() / 1000) + 86400; //86400 = 1 Day
        const md5Input = `${expires}${path}${_G__WEBPACK_IMPORTED_MODULE_1__.G.UserIp} ${this.secret}`;
        const md5Hash = crypto_js__WEBPACK_IMPORTED_MODULE_0__.MD5(md5Input).toString(crypto_js__WEBPACK_IMPORTED_MODULE_0__.enc.Latin1);
        let md5Base64 = crypto_js__WEBPACK_IMPORTED_MODULE_0__.enc.Base64.stringify(crypto_js__WEBPACK_IMPORTED_MODULE_0__.enc.Latin1.parse(md5Hash));
        md5Base64 = md5Base64.replace(/\+/g, '-').replace(/\//g, '_');
        md5Base64 = md5Base64.replace(/=/g, '');
        return `${baseUrl}${path}?md5=${md5Base64}&expires=${expires}`;
    }
}
CryptographyHelper.privateKey = '@Nima#SecretKey$2k12';
CryptographyHelper.secret = 'oiwy#1Pwq';


/***/ }),

/***/ 67122:
/*!**********************************!*\
  !*** ./src/app/core/common/G.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ G)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 84505);
/* eslint-disable @typescript-eslint/naming-convention */

class G {
    static getIsSettingLoading() {
        return this.IsSettingLoading;
    }
    static setIsSettingLoading(mode) {
        this.IsSettingLoading.next(mode);
    }
    static getSlides() {
        return this.slides;
    }
    static setSlides(mode) {
        this.slides.next(mode);
    }
    static getAndroidApp2() {
        return this.AndroidApp2;
    }
    static getSettingsDone() {
        return this.SettingsDone;
    }
    static setAndroidApp2(mode) {
        this.AndroidApp2.next(mode);
    }
    static setSettingsDone(mode) {
        this.SettingsDone.next(mode);
    }
    static getCourseCategory() {
        return this.CourseCategory;
    }
    static setCourseCategory(mode) {
        this.CourseCategory.next(mode);
    }
    static getProductCategory() {
        return this.ProductCategory;
    }
    static setProductCategory(mode) {
        this.ProductCategory.next(mode);
    }
    static getOffCodes() {
        return this.OffCodes;
    }
    static setOffCodes(mode) {
        this.OffCodes.next(mode);
    }
    static getWindowWidth() {
        return this.WindowWidth;
    }
    static setWindowWidth(mode) {
        this.WindowWidth.next(mode);
    }
    static getIsLoading() {
        return this.IsLoading;
    }
    static setIsLoading(isLoading) {
        this.IsLoading.next(isLoading);
    }
    static getCurrentMode() {
        return this.DarkMode;
    }
    static setCurrentMode(mode) {
        this.DarkMode.next(mode);
    }
    static getCurrentVoice() {
        return this.VoiceMode;
    }
    static setCurrentVoice(mode) {
        this.VoiceMode.next(mode);
    }
    static getHelpfulLinks() {
        return this.helpfulLinks;
    }
    static setHelpfulLinks(model) {
        this.helpfulLinks.next(model);
    }
    static sslRemover(model) {
        // return ('http' + model.slice(5));
        return model;
    }
}
// SnackBar Show Time!
G.SnackBarDurationInSeconds = 3000;
G.PublicMessageChecked = false;
G.IsSettingLoading = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(true);
G.slides = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]);
G.IsCourseDisabled = false;
G.IsProductDisabled = false;
G.isOff = false;
G.limitTitle = '';
G.darkTheme = false;
G.voice = false;
G.IsAndroid = false;
// Temporarily hide Android app links and prompts; keep app support for later.
G.AndroidAppEnabled = false;
G.IsDesktop = false;
G.IsAppInstalled = false;
G.IsPhonePayState = false;
G.Width = 1200;
G.Version = '1.1.0';
G.UserIp = '';
G.Instagram = 'https://instagram.com/aval.amooz';
G.Twiter = 'http://twitter.com/AvalAmooz17';
G.Facebook = 'http://facebook.com/nima.sedigh.d';
G.Youtube = 'http://youtube.com/channel/UCPJayc8H_H2exstjCob881Q';
G.Pinterest = 'http://pinterest.com/avalamooz_ir';
G.Linkedin = 'http://linkedin.com/in/nima-sedigh-37a7a4203';
G.Twitch = 'http://twitch.tv/AvalAmooz_ir';
G.Discord = 'http://discord.gg/uxZWkk3mph';
G.Aparat = 'http://aparat.com/avalamooz';
G.Telegram = 'https://t.me/avalamooz2';
G.TeacherRegisterLink = 'http://localhost:4300/assets/file/teacher.zip';
G.SellerRegisterLink = 'http://localhost:4300/assets/file/seller.zip';
G.AndroidApp = 'http://localhost:4300/assets/file/AvalAmooz.apk';
G.TunerPlusVideo = 'pto2lr0';
G.TeacherRegisterVideo = 'brfwi7w';
G.SellerRegisterVideo = 'brfwi7w';
G.TunerPlusThrottleVideo = 'jwh85ym';
G.TunerPlusTurboVideo = 'pud1j1c';
G.TunerPlusRunnerVideo = 'nhc4f23';
G.TunerPlusHpVideo = 'canm8in';
G.TeacherPanelVideo = 'brfwi7w';
G.SellerPanelVideo = 'brfwi7w';
G.TunerPlusStoichVideo = 'kar4m41';
G.TunerPlusDwellVideo = 'yqwq204';
G.TunerPlusInj = 'yqwq204';
G.TunerPlusTu5Video = 'InJWP';
G.SiteVersion = '';
G.GearRatioVideo = 'zoe6xq4';
G.IncVideo = 'rvw4849';
G.PlacementExamVideo = 'shwy833';
G.CourseExamVideo = 'shwy833';
G.WhpToHpVideo = 'uqv6t39';
G.TunerPlusReqFuelVideo = 'sqe0a45';
G.TunerPlusFuelPumpVideo = 'sqe0a45';
G.SiteKey = '6LeMyzAaAAAAAPtXgZD8vuD1mipihUmrMJbPpL4Q';
G.AndroidApp2 = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('http://localhost:4300/assets/file/AvalAmooz.apk');
G.DarkMode = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
G.VoiceMode = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
G.WindowWidth = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(window.screen.width);
G.IsLoading = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
G.SettingsDone = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
G.CourseCategory = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
G.ProductCategory = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
G.helpfulLinks = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
G.OffCodes = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]);


/***/ }),

/***/ 6958:
/*!*****************************************!*\
  !*** ./src/app/core/common/GAccount.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GAccount": () => (/* binding */ GAccount)
/* harmony export */ });
/* harmony import */ var _CryptographyHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CryptographyHelper */ 24784);
/* harmony import */ var _GResponse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GResponse */ 54021);
/* eslint-disable @typescript-eslint/naming-convention */


class GAccount {
    static IsBuyer() {
        if (GAccount.TokenKey != null && GAccount.CurrrentUserRoles.size > 0) {
            if (GAccount.CurrrentUserRoles.get(GAccount.BuyerType) != null) {
                return true;
            }
        }
        return false;
    }
    static IsBuyerActive() {
        if (GAccount.TokenKey != null && GAccount.CurrrentUserRoles.size > 0) {
            if (GAccount.CurrrentUserRoles.get(GAccount.BuyerType) === true) {
                return true;
            }
        }
        return false;
    }
    static IsSeller() {
        if (GAccount.TokenKey != null && GAccount.CurrrentUserRoles.size > 0) {
            if (GAccount.CurrrentUserRoles.get(GAccount.SellerType) != null) {
                return true;
            }
        }
        return false;
    }
    static IsSellerActive() {
        if (GAccount.TokenKey != null && GAccount.CurrrentUserRoles.size > 0) {
            if (GAccount.CurrrentUserRoles.get(GAccount.SellerType) === true) {
                return true;
            }
        }
        return false;
    }
    static IsAdmin() {
        if (GAccount.TokenKey != null && GAccount.CurrrentUserRoles.size > 0) {
            if (GAccount.CurrrentUserRoles.get(GAccount.AdminType) != null) {
                return true;
            }
        }
        return false;
    }
    static IsAdminActive() {
        if (GAccount.TokenKey != null && GAccount.CurrrentUserRoles.size > 0) {
            if (GAccount.CurrrentUserRoles.get(GAccount.AdminType) === true) {
                return true;
            }
        }
        return false;
    }
    static IsTeacher() {
        if (GAccount.TokenKey != null && GAccount.CurrrentUserRoles.size > 0) {
            if (GAccount.CurrrentUserRoles.get(GAccount.TeacherType) != null) {
                return true;
            }
        }
        return false;
    }
    static IsInstagramAdmin() {
        if (GAccount.UserEmail != null && GAccount.CurrrentUserRoles.size > 0) {
            if (GAccount.UserEmail === 'nima.dr13@gmail.com' || GAccount.UserEmail === 'nikerfan041@gmail.com') {
                return true;
            }
        }
        return false;
    }
    static IsTeacherActive() {
        if (GAccount.TokenKey != null && GAccount.CurrrentUserRoles.size > 0) {
            if (GAccount.CurrrentUserRoles.get(GAccount.TeacherType) === true) {
                return true;
            }
        }
        return false;
    }
    static IsSuperAdmin() {
        if (GAccount.TokenKey != null && GAccount.CurrrentUserRoles.size > 0) {
            if (GAccount.CurrrentUserRoles.get(GAccount.SuperAdminType) != null) {
                return true;
            }
        }
        return false;
    }
    static IsSuperAdminActive() {
        if (GAccount.TokenKey != null && GAccount.CurrrentUserRoles.size > 0) {
            if (GAccount.CurrrentUserRoles.get(GAccount.SuperAdminType) === true) {
                return true;
            }
        }
        return false;
    }
    static IsLoggedIn() {
        if (GAccount.TokenKey != null && GAccount.TokenValue != null && typeof GAccount.TokenDecryptValue === 'string' && GAccount.TokenDecryptValue.length > 0) {
            return true;
        }
        return false;
    }
    static SignOut2() {
        return GAccount.ClearSession(true);
    }
    static SignOut() {
        return GAccount.ClearSession(false);
    }
    static ClearSession(preserveEmail) {
        const wasLoggedIn = GAccount.IsLoggedIn();
        const authKeys = [GAccount.TokenDecryptKey, GAccount.FakeDecryptKey, GAccount.RolesCountDecryptKey, ...GAccount.Roles.slice(1)];
        for (let i = localStorage.length - 1; i >= 0; i--) {
            const key = localStorage.key(i);
            if (authKeys.includes(_CryptographyHelper__WEBPACK_IMPORTED_MODULE_0__.CryptographyHelper.decrypt(key))) {
                localStorage.removeItem(key);
            }
        }
        if (!preserveEmail) {
            localStorage.removeItem('Email');
        }
        GAccount.CheckUser();
        _GResponse__WEBPACK_IMPORTED_MODULE_1__.GResponse.MyCourseIds = [];
        _GResponse__WEBPACK_IMPORTED_MODULE_1__.GResponse.setCartCoursesCount(0);
        return wasLoggedIn;
    }
    static GetUserTypeCode() {
        return GAccount.Roles.indexOf(GAccount.UserType);
    }
    static CheckUser() {
        GAccount.TokenKey = GAccount.TokenValue = GAccount.TokenDecryptValue = null;
        GAccount.FakeKey = GAccount.FakeValue = null;
        GAccount.BuyerTypeKey = GAccount.SellerTypeKey = GAccount.TeacherTypeKey = null;
        GAccount.AdminTypeKey = GAccount.SuperAdminTypeKey = null;
        GAccount.UserEmail = null;
        GAccount.UserType = GAccount.Roles[0];
        GAccount.CurrrentUserRoles = new Map(null);
        for (let i = 0; i < localStorage.length; i++) {
            if (_CryptographyHelper__WEBPACK_IMPORTED_MODULE_0__.CryptographyHelper.decrypt(localStorage.key(i)) === GAccount.TokenDecryptKey) {
                GAccount.TokenKey = localStorage.key(i);
                GAccount.TokenValue = localStorage.getItem(GAccount.TokenKey);
                GAccount.TokenDecryptValue = _CryptographyHelper__WEBPACK_IMPORTED_MODULE_0__.CryptographyHelper.decrypt(GAccount.TokenValue);
            }
            else if (_CryptographyHelper__WEBPACK_IMPORTED_MODULE_0__.CryptographyHelper.decrypt(localStorage.key(i)) === GAccount.FakeDecryptKey) {
                GAccount.FakeKey = localStorage.key(i);
                GAccount.FakeValue = localStorage.getItem(GAccount.FakeKey);
            }
            else if (_CryptographyHelper__WEBPACK_IMPORTED_MODULE_0__.CryptographyHelper.decrypt(localStorage.key(i)) === GAccount.BuyerType) {
                GAccount.BuyerTypeKey = localStorage.key(i);
                if (_CryptographyHelper__WEBPACK_IMPORTED_MODULE_0__.CryptographyHelper.decrypt(localStorage.getItem(localStorage.key(i))) === GAccount.ActiveRole) {
                    GAccount.CurrrentUserRoles.set(GAccount.BuyerType, true);
                }
                else {
                    GAccount.CurrrentUserRoles.set(GAccount.BuyerType, false);
                }
            }
            else if (_CryptographyHelper__WEBPACK_IMPORTED_MODULE_0__.CryptographyHelper.decrypt(localStorage.key(i)) === GAccount.SellerType) {
                GAccount.SellerTypeKey = localStorage.key(i);
                if (_CryptographyHelper__WEBPACK_IMPORTED_MODULE_0__.CryptographyHelper.decrypt(localStorage.getItem(localStorage.key(i))) === GAccount.ActiveRole) {
                    GAccount.CurrrentUserRoles.set(GAccount.SellerType, true);
                }
                else {
                    GAccount.CurrrentUserRoles.set(GAccount.SellerType, false);
                }
            }
            else if (_CryptographyHelper__WEBPACK_IMPORTED_MODULE_0__.CryptographyHelper.decrypt(localStorage.key(i)) === GAccount.TeacherType) {
                GAccount.TeacherTypeKey = localStorage.key(i);
                if (_CryptographyHelper__WEBPACK_IMPORTED_MODULE_0__.CryptographyHelper.decrypt(localStorage.getItem(localStorage.key(i))) === GAccount.ActiveRole) {
                    GAccount.CurrrentUserRoles.set(GAccount.TeacherType, true);
                }
                else {
                    GAccount.CurrrentUserRoles.set(GAccount.TeacherType, false);
                }
            }
            else if (_CryptographyHelper__WEBPACK_IMPORTED_MODULE_0__.CryptographyHelper.decrypt(localStorage.key(i)) === GAccount.AdminType) {
                GAccount.AdminTypeKey = localStorage.key(i);
                if (_CryptographyHelper__WEBPACK_IMPORTED_MODULE_0__.CryptographyHelper.decrypt(localStorage.getItem(localStorage.key(i))) === GAccount.ActiveRole) {
                    GAccount.CurrrentUserRoles.set(GAccount.AdminType, true);
                }
                else {
                    GAccount.CurrrentUserRoles.set(GAccount.AdminType, false);
                }
            }
            else if (_CryptographyHelper__WEBPACK_IMPORTED_MODULE_0__.CryptographyHelper.decrypt(localStorage.key(i)) === GAccount.SuperAdminType) {
                GAccount.SuperAdminTypeKey = localStorage.key(i);
                if (_CryptographyHelper__WEBPACK_IMPORTED_MODULE_0__.CryptographyHelper.decrypt(localStorage.getItem(localStorage.key(i))) === GAccount.ActiveRole) {
                    GAccount.CurrrentUserRoles.set(GAccount.SuperAdminType, true);
                }
                else {
                    GAccount.CurrrentUserRoles.set(GAccount.SuperAdminType, false);
                }
            }
            else if (localStorage.key(i) === 'Email') {
                GAccount.UserEmail = localStorage.getItem(localStorage.key(i));
            }
            else {
                // console.log('Error in CheckUser');
            }
        }
    }
}
// Request type used for callback method
// Account Service
GAccount.RequestType = [
    'Register',
    'Login',
    'ForgetPassword',
    'ChangePassword',
    'SellerRegister',
    'TeacherRegister',
    'AdminRegister'
];
GAccount.RegisterType = GAccount.RequestType[0];
GAccount.LoginType = GAccount.RequestType[1];
GAccount.ForgetPasswordType = GAccount.RequestType[2];
GAccount.ChangePasswordType = GAccount.RequestType[3];
GAccount.SellerRegisterType = GAccount.RequestType[4];
GAccount.TeacherRegisterType = GAccount.RequestType[5];
GAccount.AdminRegisterType = GAccount.RequestType[6];
// User Roles
GAccount.Roles = ['', 'SuperAdmin', 'Admin', 'Buyer', 'Seller', 'Teacher'];
GAccount.SuperAdminType = GAccount.Roles[1];
GAccount.AdminType = GAccount.Roles[2];
GAccount.BuyerType = GAccount.Roles[3];
GAccount.SellerType = GAccount.Roles[4];
GAccount.TeacherType = GAccount.Roles[5];
// this will initial with one of the types.
GAccount.UserType = GAccount.Roles[0];
GAccount.SuperAdminTypeKey = null;
GAccount.AdminTypeKey = null;
GAccount.BuyerTypeKey = null;
GAccount.SellerTypeKey = null;
GAccount.TeacherTypeKey = null;
/* ***********Used for save token in local************* */
// Fake Token
GAccount.FakeDecryptKey = 'Fake Key';
GAccount.FakeDecryptValue = 'Fake Value';
GAccount.FakeKey = null;
GAccount.FakeValue = null;
// Main Token
GAccount.TokenDecryptKey = 'AvalAmoozToken';
GAccount.TokenDecryptValue = null;
GAccount.TokenKey = null;
GAccount.TokenValue = null;
// Roles
GAccount.CurrrentUserRoles = new Map(null);
// public static RolesDecryptKey = 'Roles';
// public static RolesDecryptValue = null;
// public static RolesKey = null;
// public static RolesValue = null;
// Roles Count
GAccount.RolesCountDecryptKey = 'RolesCount';
GAccount.RolesCountDecryptValue = null;
GAccount.RolesCountKey = null;
GAccount.RolesCountValue = null;
// Role Active | DeActive
GAccount.ActiveRole = 'Active';
GAccount.DeActiveRole = 'DeActive';
GAccount.UserEmail = null;


/***/ }),

/***/ 54021:
/*!******************************************!*\
  !*** ./src/app/core/common/GResponse.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GResponse": () => (/* binding */ GResponse)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 84505);

class GResponse {
    static getCartCoursesCount() {
        return this.CartCoursesCount;
    }
    static setCartCoursesCount(model) {
        this.BetaCartCoursesCount = model;
        this.CartCoursesCount.next(model);
    }
    static getCartProductsCount() {
        return this.CartProductsCount;
    }
    static setCartProductsCount(model) {
        this.BetaCartProductsCount = model;
        this.CartProductsCount.next(model);
    }
    static getTunerPlusAccessList() {
        return this.TunerPlusAccessList;
    }
    static setTunerPlusAccessList(model) {
        this.TunerPlusAccessList.next(model);
    }
    static getMyCourseIds() {
        return this.MyCourseIds2;
    }
    static setMyCourseIds(model) {
        this.MyCourseIds2.next(model);
    }
    static getMyProductIds() {
        return this.MyProductIds2;
    }
    static setMyProductIds(model) {
        this.MyProductIds2.next(model);
    }
}
// Data Response Status
GResponse.ResponseStatus = [
    'Success',
    'Error',
    'AccessDenied',
    'NotFound'
];
GResponse.SuccessStatus = GResponse.ResponseStatus[0];
GResponse.ErrorStatus = GResponse.ResponseStatus[1];
GResponse.AccessDeniedStatus = GResponse.ResponseStatus[2];
GResponse.NotFoundStatus = GResponse.ResponseStatus[3];
// Sort Types
GResponse.SortTypes = [
    'مرتبط ترین',
    'ارزان ترین',
    'گران ترین',
    'پر بازدید ترین',
    'جدید ترین',
    'پر فروش ترین'
];
GResponse.MostCommon = GResponse.SortTypes[0];
GResponse.Cheapest = GResponse.SortTypes[1];
GResponse.Expensivest = GResponse.SortTypes[2];
GResponse.MostViewed = GResponse.SortTypes[3];
GResponse.Newest = GResponse.SortTypes[4];
GResponse.MostSells = GResponse.SortTypes[5];
GResponse.ProductCategory = [];
GResponse.CourseCategory = [];
GResponse.ArticleCategory = [];
GResponse.CartCoursesCount = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(0);
GResponse.CartProductsCount = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(0);
GResponse.TunerPlusAccessList = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]);
GResponse.MyCourseIds2 = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]);
GResponse.MyProductIds2 = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]);
GResponse.BetaCartCoursesCount = 0;
GResponse.BetaCartProductsCount = 0;
GResponse.MyCourseIds = [];
GResponse.MyProductIds = [];


/***/ }),

/***/ 97112:
/*!********************************************!*\
  !*** ./src/app/core/common/SharedIonic.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedIonic": () => (/* binding */ SharedIonic)
/* harmony export */ });
/* harmony import */ var G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);

class SharedIonic {
  constructor() {} // Alert


  static alert(alertController, title, subTitle, content) {
    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield alertController.create({
        cssClass: 'main-alert',
        header: title,
        subHeader: subTitle,
        message: content,
        buttons: ['OK']
      });
      yield alert.present();
    })();
  } // Loading


  static loading(loadingController) {
    var _this = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        if (_this.isLoading) {
          return;
        }

        _this.isLoading = true;
        return yield loadingController.create({
          // spinner: null,
          duration: 500000,
          message: 'لطفا صبر کنید',
          translucent: true,
          cssClass: 'main-loading',
          backdropDismiss: false
        }).then(a => {
          a.present().then(() => {
            if (!_this.isLoading) {
              a.dismiss().then(() => {});
            }
          });
        });
      } catch (error) {}
    })();
  }

  static dismissLoading(loadingController) {
    var _this2 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        if (!_this2.isLoading) {
          return;
        }

        _this2.isLoading = false;
        return yield loadingController.dismiss().then(() => {});
      } catch (error) {}
    })();
  } // Toast


  static toast(toastController, msg) {
    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const toast = yield toastController.create({
          message: msg,
          cssClass: 'main-toast',
          duration: 3000
        });
        toast.present();
      } catch (error) {}
    })();
  }

  static successToast(toastController) {
    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const toast = yield toastController.create({
          message: 'با موفقیت انجام شد',
          cssClass: 'main-success-toast',
          duration: 3000
        });
        toast.present();
      } catch (error) {}
    })();
  }

  static unSuccessToast(toastController) {
    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const toast = yield toastController.create({
          message: 'انجام نشد',
          cssClass: 'main-unsuccess-toast',
          duration: 3000
        });
        toast.present();
      } catch (error) {}
    })();
  }

}
SharedIonic.isLoading = false;

/***/ }),

/***/ 35602:
/*!*************************************!*\
  !*** ./src/app/core/common/Urls.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutUrl": () => (/* binding */ AboutUrl),
/* harmony export */   "AccessDeniedUrl": () => (/* binding */ AccessDeniedUrl),
/* harmony export */   "AccountAdminRegisterUrl": () => (/* binding */ AccountAdminRegisterUrl),
/* harmony export */   "AccountSellerRegisterUrl": () => (/* binding */ AccountSellerRegisterUrl),
/* harmony export */   "AccountTeacherRegisterUrl": () => (/* binding */ AccountTeacherRegisterUrl),
/* harmony export */   "AccountUrl": () => (/* binding */ AccountUrl),
/* harmony export */   "ActivatedAccessDeniedUrl": () => (/* binding */ ActivatedAccessDeniedUrl),
/* harmony export */   "AdminPanelUrl": () => (/* binding */ AdminPanelUrl),
/* harmony export */   "ArticleUrl": () => (/* binding */ ArticleUrl),
/* harmony export */   "CartUrl": () => (/* binding */ CartUrl),
/* harmony export */   "CourseUrl": () => (/* binding */ CourseUrl),
/* harmony export */   "HomeUrl": () => (/* binding */ HomeUrl),
/* harmony export */   "OffPricedProductsUrl": () => (/* binding */ OffPricedProductsUrl),
/* harmony export */   "Page404Url": () => (/* binding */ Page404Url),
/* harmony export */   "Page500Url": () => (/* binding */ Page500Url),
/* harmony export */   "Page503Url": () => (/* binding */ Page503Url),
/* harmony export */   "ProductByIdUrl": () => (/* binding */ ProductByIdUrl),
/* harmony export */   "ProductUrl": () => (/* binding */ ProductUrl),
/* harmony export */   "SellerPanelUrl": () => (/* binding */ SellerPanelUrl),
/* harmony export */   "SpecialProductsUrl": () => (/* binding */ SpecialProductsUrl),
/* harmony export */   "SuperAdminPanelUrl": () => (/* binding */ SuperAdminPanelUrl),
/* harmony export */   "SuportUrl": () => (/* binding */ SuportUrl),
/* harmony export */   "TeacherPanelUrl": () => (/* binding */ TeacherPanelUrl),
/* harmony export */   "TopProductsUrl": () => (/* binding */ TopProductsUrl),
/* harmony export */   "TopViewedProductsUrl": () => (/* binding */ TopViewedProductsUrl),
/* harmony export */   "Urls": () => (/* binding */ Urls),
/* harmony export */   "UserPanelUrl": () => (/* binding */ UserPanelUrl)
/* harmony export */ });
/* eslint-disable @typescript-eslint/naming-convention */
class Urls {
}
Urls.ReturnUrl = '/';
// Home
Urls.HomeUrl = '/';
Urls.ProductHomeUrl = '/Product';
// Account
Urls.AccountUrl = '/Account';
Urls.AccountAdminRegisterUrl = '/Account/Admin';
Urls.AccountSellerRegisterUrl = '/Account/Seller';
Urls.AccountTeacherRegisterUrl = '/Account/Teacher';
// Common
Urls.Page404Url = '/Page404';
Urls.Page500Url = '/Page500';
Urls.Page503Url = '/Page503';
Urls.AccessDeniedUrl = '/AccessDenied';
Urls.AccessDeniedTunerPlusUrl = '/AccessDenied/TunerPlus';
Urls.AccessDeniedTunerPlusStoichiometryUrl = '/AccessDenied/TunerPlusStoichiometry';
Urls.AccessDeniedTunerPlusTuningUrl = '/AccessDenied/TunerPlusTuning';
Urls.AccessDeniedTunerInjUrl = '/AccessDenied/AccessDeniedTunerInj';
Urls.ActivatedAccessDeniedUrl = '/AccessDenied/deactive';
Urls.ActivatedAccessDenied2Url = '/AccessDenied/deactive2';
Urls.SuportUrl = '/Suport';
Urls.AboutUrl = '/About';
// Panel
Urls.UserPanelUrl = '/UserPanel';
Urls.AdminPanelUrl = '/AdminPanel';
Urls.SellerPanelUrl = '/SellerPanel';
Urls.TeacherPanelUrl = '/TeacherPanel';
Urls.SuperAdminPanelUrl = '/SuperAdminPanel';
// Product
Urls.ProductUrl = '/Product';
Urls.ProductsUrl = '/Products';
Urls.ProductByIdUrl = '/Product/Id';
Urls.TopProductsUrl = '/Product/TopProducts';
Urls.SpecialProductsUrl = '/Product/SpecialProducts';
Urls.TopViewedProductsUrl = '/Product/TopViewedProducts';
Urls.OffPricedProductsUrl = '/Product/OffPricedProducts';
// Course
Urls.CourseUrl = '/Course';
// Article
Urls.ArticleUrl = '/Article';
// Teacher
Urls.TeachersUrl = '/Teachers';
// Doer
Urls.DoersUrl = '/Doers';
// Cart
Urls.CartUrl = '/Cart';
// Home
const HomeUrl = '/';
// Account
const AccountUrl = '/Account';
const AccountAdminRegisterUrl = '/Account/Admin';
const AccountSellerRegisterUrl = '/Account/Seller';
const AccountTeacherRegisterUrl = '/Account/Teacher';
// Common
const SuportUrl = '/Suport';
const AboutUrl = '/About';
const Page404Url = '/Page404';
const Page500Url = '/Page500';
const Page503Url = '/Page503';
const AccessDeniedUrl = '/AccessDenied';
const ActivatedAccessDeniedUrl = '/AccessDenied/deactive';
// Panel
const AdminPanelUrl = '/AdminPanel';
const SuperAdminPanelUrl = '/SuperAdminPanel';
const SellerPanelUrl = '/SellerPanel';
const TeacherPanelUrl = '/TeacherPanel';
const UserPanelUrl = '/UserPanel';
// Product
const ProductUrl = '/Product';
const ProductByIdUrl = '/Product/Id';
const TopProductsUrl = '/Product/TopProducts';
const SpecialProductsUrl = '/Product/SpecialProducts';
const TopViewedProductsUrl = '/Product/TopViewedProducts';
const OffPricedProductsUrl = '/Product/OffPricedProducts';
// Course
const CourseUrl = '/Course';
// Article
const ArticleUrl = '/Article';
// Cart
const CartUrl = '/Cart';


/***/ }),

/***/ 40668:
/*!*******************************************************************************!*\
  !*** ./src/app/core/guard/admin-or-super-admin/admin-or-super-admin.guard.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminOrSuperAdminGuard": () => (/* binding */ AdminOrSuperAdminGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _common_GAccount__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/GAccount */ 6958);
/* harmony import */ var _common_Urls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/Urls */ 35602);





let AdminOrSuperAdminGuard = class AdminOrSuperAdminGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate() {
        return this.canViewRestrictedPages();
    }
    canActivateChild() {
        return this.canViewRestrictedPages();
    }
    canViewRestrictedPages() {
        return _common_GAccount__WEBPACK_IMPORTED_MODULE_0__.GAccount.IsAdminActive() || _common_GAccount__WEBPACK_IMPORTED_MODULE_0__.GAccount.IsSuperAdminActive()
            ? true
            : this.router.createUrlTree([_common_Urls__WEBPACK_IMPORTED_MODULE_1__.Urls.HomeUrl]);
    }
};
AdminOrSuperAdminGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
AdminOrSuperAdminGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], AdminOrSuperAdminGuard);



/***/ }),

/***/ 72521:
/*!*************************************************!*\
  !*** ./src/app/core/guard/admin/admin.guard.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminGuard": () => (/* binding */ AdminGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _common_GAccount__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/GAccount */ 6958);
/* harmony import */ var _common_Urls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/Urls */ 35602);





let AdminGuard = class AdminGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(next, state) {
        if (_common_GAccount__WEBPACK_IMPORTED_MODULE_0__.GAccount.IsAdminActive()) {
            return true;
        }
        else if (!_common_GAccount__WEBPACK_IMPORTED_MODULE_0__.GAccount.IsAdmin() && _common_GAccount__WEBPACK_IMPORTED_MODULE_0__.GAccount.IsLoggedIn()) {
            this.router.navigateByUrl(_common_Urls__WEBPACK_IMPORTED_MODULE_1__.Urls.AccessDeniedUrl);
            return false;
        }
        else if (!_common_GAccount__WEBPACK_IMPORTED_MODULE_0__.GAccount.IsAdminActive() && _common_GAccount__WEBPACK_IMPORTED_MODULE_0__.GAccount.IsAdmin() && _common_GAccount__WEBPACK_IMPORTED_MODULE_0__.GAccount.IsLoggedIn()) {
            this.router.navigateByUrl(_common_Urls__WEBPACK_IMPORTED_MODULE_1__.Urls.ActivatedAccessDeniedUrl);
            return false;
        }
        else {
            return false;
        }
    }
};
AdminGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
AdminGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], AdminGuard);



/***/ }),

/***/ 91823:
/*!***********************************************!*\
  !*** ./src/app/core/guard/auth/auth.guard.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _common_GAccount__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/GAccount */ 6958);
/* harmony import */ var _common_Urls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/Urls */ 35602);





let AuthGuard = class AuthGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(next, state) {
        if (_common_GAccount__WEBPACK_IMPORTED_MODULE_0__.GAccount.IsLoggedIn()) {
            return true;
        }
        else {
            this.router.navigateByUrl(_common_Urls__WEBPACK_IMPORTED_MODULE_1__.Urls.AccountUrl);
            return false;
        }
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
AuthGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ 47091:
/*!********************************************************!*\
  !*** ./src/app/core/guard/auth/deactive-auth.guard.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeactiveAuthGuard": () => (/* binding */ DeactiveAuthGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var rxjs_Operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Operators */ 59151);
/* harmony import */ var _common_GAccount__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/GAccount */ 6958);
/* harmony import */ var _common_SharedIonic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/SharedIonic */ 97112);
/* harmony import */ var _common_Urls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/Urls */ 35602);








let DeactiveAuthGuard = class DeactiveAuthGuard {
    constructor(router, toastController) {
        this.router = router;
        this.toastController = toastController;
        this.pervRoute = 'null';
        router.events
            .pipe((0,rxjs_Operators__WEBPACK_IMPORTED_MODULE_3__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationEnd))
            .subscribe((event) => {
            this.pervRoute = event.url;
        });
    }
    canActivate(next, state) {
        if (_common_GAccount__WEBPACK_IMPORTED_MODULE_0__.GAccount.IsLoggedIn()) {
            _common_SharedIonic__WEBPACK_IMPORTED_MODULE_1__.SharedIonic.toast(this.toastController, 'قبلا وارد شده اید');
            if (this.pervRoute === 'null') {
                this.router.navigateByUrl(_common_Urls__WEBPACK_IMPORTED_MODULE_2__.Urls.HomeUrl);
            }
            return false;
        }
        else {
            return true;
        }
    }
};
DeactiveAuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController }
];
DeactiveAuthGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({
        providedIn: 'root'
    })
], DeactiveAuthGuard);



/***/ }),

/***/ 42683:
/*!*************************************************!*\
  !*** ./src/app/core/guard/buyer/buyer.guard.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BuyerGuard": () => (/* binding */ BuyerGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _common_GAccount__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/GAccount */ 6958);
/* harmony import */ var _common_Urls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/Urls */ 35602);





let BuyerGuard = class BuyerGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(next, state) {
        if (_common_GAccount__WEBPACK_IMPORTED_MODULE_0__.GAccount.IsBuyer()) {
            return true;
        }
        else if (!_common_GAccount__WEBPACK_IMPORTED_MODULE_0__.GAccount.IsBuyer() && _common_GAccount__WEBPACK_IMPORTED_MODULE_0__.GAccount.IsLoggedIn()) {
            this.router.navigateByUrl(_common_Urls__WEBPACK_IMPORTED_MODULE_1__.Urls.AccessDeniedUrl);
            return false;
        }
        else {
            return false;
        }
    }
};
BuyerGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
BuyerGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], BuyerGuard);



/***/ }),

/***/ 90028:
/*!****************************************************************!*\
  !*** ./src/app/core/guard/course/course-id/course-id.guard.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CourseIdGuard": () => (/* binding */ CourseIdGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _common_Urls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/Urls */ 35602);




let CourseIdGuard = class CourseIdGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(next, state) {
        let canActive = false;
        // tslint:disable-next-line: radix
        const checkMsgId = parseInt(next.params.id, 10);
        const msgId = next.params.id;
        if (msgId === undefined) {
            canActive = false;
            this.router.navigateByUrl(_common_Urls__WEBPACK_IMPORTED_MODULE_0__.Urls.CourseUrl);
        }
        else {
            if (Number.isNaN(checkMsgId) || checkMsgId <= 0) {
                canActive = false;
                this.router.navigateByUrl(_common_Urls__WEBPACK_IMPORTED_MODULE_0__.Urls.CourseUrl);
            }
            else {
                canActive = true;
            }
        }
        return canActive;
    }
};
CourseIdGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.Router }
];
CourseIdGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], CourseIdGuard);



/***/ }),

/***/ 39587:
/*!*******************************************************************!*\
  !*** ./src/app/core/guard/product/product-id/product-id.guard.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductIdGuard": () => (/* binding */ ProductIdGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _common_Urls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/Urls */ 35602);




let ProductIdGuard = class ProductIdGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(next, state) {
        let canActive = false;
        // tslint:disable-next-line: radix
        const checkMsgId = parseInt(next.params.id, 10);
        const msgId = next.params.id;
        if (msgId === undefined) {
            canActive = false;
            this.router.navigateByUrl(_common_Urls__WEBPACK_IMPORTED_MODULE_0__.Urls.ProductUrl);
        }
        else {
            if (Number.isNaN(checkMsgId) || checkMsgId <= 0) {
                canActive = false;
                this.router.navigateByUrl(_common_Urls__WEBPACK_IMPORTED_MODULE_0__.Urls.ProductUrl);
            }
            else {
                canActive = true;
            }
        }
        return canActive;
    }
};
ProductIdGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.Router }
];
ProductIdGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], ProductIdGuard);



/***/ }),

/***/ 48358:
/*!*****************************************************************!*\
  !*** ./src/app/core/guard/public-hidden/public-hidden.guard.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PublicHiddenGuard": () => (/* binding */ PublicHiddenGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _common_GAccount__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/GAccount */ 6958);
/* harmony import */ var _common_Urls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/Urls */ 35602);





let PublicHiddenGuard = class PublicHiddenGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(next, state) {
        if (_common_GAccount__WEBPACK_IMPORTED_MODULE_0__.GAccount.IsAdmin()) {
            return true;
        }
        this.router.navigateByUrl(_common_Urls__WEBPACK_IMPORTED_MODULE_1__.Urls.HomeUrl);
        return false;
    }
};
PublicHiddenGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
PublicHiddenGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], PublicHiddenGuard);



/***/ }),

/***/ 70673:
/*!***************************************************!*\
  !*** ./src/app/core/guard/seller/seller.guard.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SellerGuard": () => (/* binding */ SellerGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _common_GAccount__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/GAccount */ 6958);
/* harmony import */ var _common_Urls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/Urls */ 35602);





let SellerGuard = class SellerGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(next, state) {
        if (_common_GAccount__WEBPACK_IMPORTED_MODULE_0__.GAccount.IsSellerActive()) {
            return true;
        }
        else if (!_common_GAccount__WEBPACK_IMPORTED_MODULE_0__.GAccount.IsSeller() && _common_GAccount__WEBPACK_IMPORTED_MODULE_0__.GAccount.IsLoggedIn()) {
            this.router.navigateByUrl(_common_Urls__WEBPACK_IMPORTED_MODULE_1__.Urls.AccessDeniedUrl);
            return false;
        }
        else if (!_common_GAccount__WEBPACK_IMPORTED_MODULE_0__.GAccount.IsSellerActive() && _common_GAccount__WEBPACK_IMPORTED_MODULE_0__.GAccount.IsSeller() && _common_GAccount__WEBPACK_IMPORTED_MODULE_0__.GAccount.IsLoggedIn()) {
            this.router.navigateByUrl(_common_Urls__WEBPACK_IMPORTED_MODULE_1__.Urls.ActivatedAccessDenied2Url);
            return false;
        }
        else {
            this.router.navigateByUrl(_common_Urls__WEBPACK_IMPORTED_MODULE_1__.Urls.AccessDeniedUrl);
            return false;
        }
    }
};
SellerGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
SellerGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], SellerGuard);



/***/ }),

/***/ 9326:
/*!*************************************************************!*\
  !*** ./src/app/core/guard/super-admin/super-admin.guard.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SuperAdminGuard": () => (/* binding */ SuperAdminGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _common_GAccount__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/GAccount */ 6958);
/* harmony import */ var _common_Urls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/Urls */ 35602);





let SuperAdminGuard = class SuperAdminGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(next, state) {
        if (_common_GAccount__WEBPACK_IMPORTED_MODULE_0__.GAccount.IsSuperAdmin()) {
            return true;
        }
        else {
            this.router.navigateByUrl(_common_Urls__WEBPACK_IMPORTED_MODULE_1__.Urls.AccessDeniedUrl);
            return false;
        }
    }
};
SuperAdminGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
SuperAdminGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], SuperAdminGuard);



/***/ }),

/***/ 68739:
/*!**********************************************************!*\
  !*** ./src/app/core/guard/teacher/teacher.edit.guard.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeacherEditGuard": () => (/* binding */ TeacherEditGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _common_GAccount__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/GAccount */ 6958);
/* harmony import */ var _common_Urls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/Urls */ 35602);





let TeacherEditGuard = class TeacherEditGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(next, state) {
        if (!_common_GAccount__WEBPACK_IMPORTED_MODULE_0__.GAccount.IsTeacherActive() && _common_GAccount__WEBPACK_IMPORTED_MODULE_0__.GAccount.IsTeacher() && _common_GAccount__WEBPACK_IMPORTED_MODULE_0__.GAccount.IsLoggedIn()) {
            return true;
        }
        else {
            this.router.navigateByUrl(_common_Urls__WEBPACK_IMPORTED_MODULE_1__.Urls.AccessDeniedUrl);
            return false;
        }
    }
};
TeacherEditGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
TeacherEditGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], TeacherEditGuard);



/***/ }),

/***/ 55168:
/*!*****************************************************!*\
  !*** ./src/app/core/guard/teacher/teacher.guard.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeacherGuard": () => (/* binding */ TeacherGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _common_GAccount__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/GAccount */ 6958);
/* harmony import */ var _common_Urls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/Urls */ 35602);





let TeacherGuard = class TeacherGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(next, state) {
        if (_common_GAccount__WEBPACK_IMPORTED_MODULE_0__.GAccount.IsTeacherActive()) {
            return true;
        }
        else if (!_common_GAccount__WEBPACK_IMPORTED_MODULE_0__.GAccount.IsTeacher() && _common_GAccount__WEBPACK_IMPORTED_MODULE_0__.GAccount.IsLoggedIn()) {
            this.router.navigateByUrl(_common_Urls__WEBPACK_IMPORTED_MODULE_1__.Urls.AccessDeniedUrl);
            return false;
        }
        else if (!_common_GAccount__WEBPACK_IMPORTED_MODULE_0__.GAccount.IsTeacherActive() && _common_GAccount__WEBPACK_IMPORTED_MODULE_0__.GAccount.IsTeacher() && _common_GAccount__WEBPACK_IMPORTED_MODULE_0__.GAccount.IsLoggedIn()) {
            this.router.navigateByUrl(_common_Urls__WEBPACK_IMPORTED_MODULE_1__.Urls.ActivatedAccessDeniedUrl);
            return false;
        }
        else {
            this.router.navigateByUrl(_common_Urls__WEBPACK_IMPORTED_MODULE_1__.Urls.AccessDeniedUrl);
            return false;
        }
    }
};
TeacherGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
TeacherGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], TeacherGuard);



/***/ }),

/***/ 77786:
/*!**********************************************************!*\
  !*** ./src/app/core/i18n/language-switcher.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LanguageSwitcherComponent": () => (/* binding */ LanguageSwitcherComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var G_Dev_AvalAmooz_AvalAmooz_Frontend_src_app_core_i18n_language_switcher_component_ts_css_ngResource_G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_Lmxhbmd1YWdlLXN3aXRjaGVye2Rpc3BsYXk6aW5saW5lLWZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7bWluLXdpZHRoOjQycHg7bWluLWhlaWdodDozNnB4O3BhZGRpbmc6MCA5cHg7Ym9yZGVyOjFweCBzb2xpZCBjdXJyZW50Q29sb3I7Ym9yZGVyLXJhZGl1czoxMHB4O2NvbG9yOmluaGVyaXQ7dGV4dC1kZWNvcmF0aW9uOm5vbmU7Zm9udDo3MDAgMTNweCBBcmlhbCxzYW5zLXNlcmlmfS5sYW5ndWFnZS1zd2l0Y2hlcjpmb2N1cy12aXNpYmxle291dGxpbmU6MnB4IHNvbGlkICNlNjM5NDY7b3V0bGluZS1vZmZzZXQ6MnB4fQ_3D_3D_G_Dev_AvalAmooz_AvalAmooz_Frontend_src_app_core_i18n_language_switcher_component_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/app/core/i18n/language-switcher.component.ts.css?ngResource!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=Lmxhbmd1YWdlLXN3aXRjaGVye2Rpc3BsYXk6aW5saW5lLWZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7bWluLXdpZHRoOjQycHg7bWluLWhlaWdodDozNnB4O3BhZGRpbmc6MCA5cHg7Ym9yZGVyOjFweCBzb2xpZCBjdXJyZW50Q29sb3I7Ym9yZGVyLXJhZGl1czoxMHB4O2NvbG9yOmluaGVyaXQ7dGV4dC1kZWNvcmF0aW9uOm5vbmU7Zm9udDo3MDAgMTNweCBBcmlhbCxzYW5zLXNlcmlmfS5sYW5ndWFnZS1zd2l0Y2hlcjpmb2N1cy12aXNpYmxle291dGxpbmU6MnB4IHNvbGlkICNlNjM5NDY7b3V0bGluZS1vZmZzZXQ6MnB4fQ%3D%3D!./src/app/core/i18n/language-switcher.component.ts */ 93952);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _site_language_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./site-language.service */ 37159);




let LanguageSwitcherComponent = class LanguageSwitcherComponent {
    constructor(language) {
        this.language = language;
    }
};
LanguageSwitcherComponent.ctorParameters = () => [
    { type: _site_language_service__WEBPACK_IMPORTED_MODULE_1__.SiteLanguageService }
];
LanguageSwitcherComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-language-switcher',
        template: '<a class="language-switcher" [href]="language.alternateUrl(language.current === \'fa\' ? \'en\' : \'fa\')" [attr.aria-label]="language.current === \'fa\' ? \'Switch to English\' : \'تغییر زبان به فارسی\'">{{ language.current === \'fa\' ? \'EN\' : \'فا\' }}</a>',
        styles: [G_Dev_AvalAmooz_AvalAmooz_Frontend_src_app_core_i18n_language_switcher_component_ts_css_ngResource_G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_Lmxhbmd1YWdlLXN3aXRjaGVye2Rpc3BsYXk6aW5saW5lLWZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7bWluLXdpZHRoOjQycHg7bWluLWhlaWdodDozNnB4O3BhZGRpbmc6MCA5cHg7Ym9yZGVyOjFweCBzb2xpZCBjdXJyZW50Q29sb3I7Ym9yZGVyLXJhZGl1czoxMHB4O2NvbG9yOmluaGVyaXQ7dGV4dC1kZWNvcmF0aW9uOm5vbmU7Zm9udDo3MDAgMTNweCBBcmlhbCxzYW5zLXNlcmlmfS5sYW5ndWFnZS1zd2l0Y2hlcjpmb2N1cy12aXNpYmxle291dGxpbmU6MnB4IHNvbGlkICNlNjM5NDY7b3V0bGluZS1vZmZzZXQ6MnB4fQ_3D_3D_G_Dev_AvalAmooz_AvalAmooz_Frontend_src_app_core_i18n_language_switcher_component_ts__WEBPACK_IMPORTED_MODULE_0__]
    })
], LanguageSwitcherComponent);



/***/ }),

/***/ 15836:
/*!****************************************************!*\
  !*** ./src/app/core/i18n/locale-url-serializer.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocaleUrlSerializer": () => (/* binding */ LocaleUrlSerializer)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _site_language_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./site-language.service */ 37159);




let LocaleUrlSerializer = class LocaleUrlSerializer extends _angular_router__WEBPACK_IMPORTED_MODULE_1__.DefaultUrlSerializer {
    constructor(language) {
        super();
        this.language = language;
    }
    parse(url) {
        this.language.syncFromUrl(url);
        return super.parse((0,_site_language_service__WEBPACK_IMPORTED_MODULE_0__.stripLanguagePrefix)(url));
    }
    serialize(tree) {
        return this.language.url(super.serialize(tree));
    }
};
LocaleUrlSerializer.ctorParameters = () => [
    { type: _site_language_service__WEBPACK_IMPORTED_MODULE_0__.SiteLanguageService }
];
LocaleUrlSerializer = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)()
], LocaleUrlSerializer);



/***/ }),

/***/ 58586:
/*!***********************************************!*\
  !*** ./src/app/core/i18n/site-i18n.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SiteI18nModule": () => (/* binding */ SiteI18nModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _language_switcher_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./language-switcher.component */ 77786);




let SiteI18nModule = class SiteI18nModule {
};
SiteI18nModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [_language_switcher_component__WEBPACK_IMPORTED_MODULE_0__.LanguageSwitcherComponent],
        imports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateModule],
        exports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateModule, _language_switcher_component__WEBPACK_IMPORTED_MODULE_0__.LanguageSwitcherComponent]
    })
], SiteI18nModule);



/***/ }),

/***/ 37159:
/*!****************************************************!*\
  !*** ./src/app/core/i18n/site-language.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
var _assets_i18n_fa_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache;
var _assets_i18n_en_json__WEBPACK_IMPORTED_MODULE_1___namespace_cache;
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SiteLanguageService": () => (/* binding */ SiteLanguageService),
/* harmony export */   "stripLanguagePrefix": () => (/* binding */ stripLanguagePrefix)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 38699);
/* harmony import */ var _assets_i18n_fa_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/i18n/fa.json */ 20231);
/* harmony import */ var _assets_i18n_en_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/i18n/en.json */ 40502);






// Publish a language only when its shared interface catalog is ready.
const publishedLanguages = ['fa', 'en'];
const languagePrefix = new RegExp(`^/(${publishedLanguages.join('|')})(?=/|[?#]|$)`, 'i');
function stripLanguagePrefix(url) {
    const clean = url.replace(languagePrefix, '');
    return clean.startsWith('/') ? clean : '/' + clean;
}
let SiteLanguageService = class SiteLanguageService {
    constructor(document, translate) {
        this.document = document;
        this.translate = translate;
        this.currentLanguage = 'fa';
        // Bundle the published catalogs so the initial Persian page renders without a network request.
        this.translate.setTranslation('fa', /*#__PURE__*/ (_assets_i18n_fa_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (_assets_i18n_fa_json__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(_assets_i18n_fa_json__WEBPACK_IMPORTED_MODULE_0__, 2))));
        this.translate.setTranslation('en', /*#__PURE__*/ (_assets_i18n_en_json__WEBPACK_IMPORTED_MODULE_1___namespace_cache || (_assets_i18n_en_json__WEBPACK_IMPORTED_MODULE_1___namespace_cache = __webpack_require__.t(_assets_i18n_en_json__WEBPACK_IMPORTED_MODULE_1__, 2))));
        this.translate.addLangs(publishedLanguages);
        this.translate.setDefaultLang('fa');
        this.syncFromUrl(this.document.location.pathname);
    }
    get current() { return this.currentLanguage; }
    get direction() { return this.currentLanguage === 'fa' || this.currentLanguage === 'ar' ? 'rtl' : 'ltr'; }
    // Preserve the original Persian header: brand left, menu button right.
    get headerDirection() { return this.direction === 'rtl' ? 'ltr' : 'rtl'; }
    text(key, params) {
        return this.translate.instant(key, params);
    }
    // Keep legacy Persian URLs intact and preserve English across all routes.
    url(path, language = this.currentLanguage) {
        const clean = stripLanguagePrefix(path);
        if (language === 'fa' || !publishedLanguages.includes(language)) {
            return clean;
        }
        return '/' + language + (clean === '/' ? '' : clean);
    }
    alternateUrl(language) {
        const location = this.document.location;
        return this.url(location.pathname, language) + location.search + location.hash;
    }
    syncFromUrl(url) {
        const match = languagePrefix.exec(url);
        const requested = match ? match[1].toLowerCase() : 'fa';
        const language = requested !== 'fa' && publishedLanguages.includes(requested)
            ? requested : 'fa';
        if (language === this.currentLanguage && this.translate.currentLang === language) {
            return;
        }
        this.currentLanguage = language;
        this.document.documentElement.lang = language;
        this.document.documentElement.dir = this.direction;
        this.translate.use(language);
    }
};
SiteLanguageService.ctorParameters = () => [
    { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject, args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT,] }] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateService }
];
SiteLanguageService = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({ providedIn: 'root' })
], SiteLanguageService);



/***/ }),

/***/ 27935:
/*!*******************************************!*\
  !*** ./src/app/core/utility/PathTools.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DomainName": () => (/* binding */ DomainName)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 92340);
/* eslint-disable @typescript-eslint/naming-convention */

const DomainName = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiBaseUrl;


/***/ }),

/***/ 8363:
/*!*****************************************************!*\
  !*** ./src/app/core/utility/account.interceptor.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountInterceptor": () => (/* binding */ AccountInterceptor)
/* harmony export */ });
/* harmony import */ var G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs_Operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/Operators */ 88759);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _common_GAccount__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/GAccount */ 6958);
/* harmony import */ var _common_Urls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/Urls */ 35602);
/* harmony import */ var _PathTools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PathTools */ 27935);
/* harmony import */ var _common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/SharedIonic */ 97112);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _i18n_site_language_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../i18n/site-language.service */ 37159);











let AccountInterceptor = class AccountInterceptor {
  constructor(router, toastController, alertController, language) {
    this.router = router;
    this.toastController = toastController;
    this.alertController = alertController;
    this.language = language;
  }

  alert() {
    var _this = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this.alertController.create({
        cssClass: 'main-alert2',
        header: 'توجه',
        message: 'اکانت شما موقت قفل شده است',
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

  alert2() {
    var _this2 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this2.alertController.create({
        cssClass: 'main-alert2',
        header: 'توجه',
        message: 'آی پی شما موقت بلوک شده است',
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

  intercept(request, next) {
    const isRelativeApi = request.url.startsWith('/api/');

    if (!isRelativeApi && !request.url.startsWith(_PathTools__WEBPACK_IMPORTED_MODULE_3__.DomainName + '/api/')) {
      return next.handle(request);
    }

    const isPublicIp = request.url.split('?')[0].endsWith('/api/Site/GetPublicIp');
    const token = !isPublicIp && _common_GAccount__WEBPACK_IMPORTED_MODULE_1__.GAccount.IsLoggedIn() ? _common_GAccount__WEBPACK_IMPORTED_MODULE_1__.GAccount.TokenDecryptValue : null;
    let headers = request.headers.set('Accept-Language', this.language.current);

    if (token) {
      headers = headers.set('Authorization', 'Bearer ' + token);
    }

    const clonedReq = request.clone({
      url: isRelativeApi ? _PathTools__WEBPACK_IMPORTED_MODULE_3__.DomainName + request.url : request.url,
      headers
    });
    return next.handle(clonedReq).pipe((0,rxjs_Operators__WEBPACK_IMPORTED_MODULE_6__.tap)({
      error: err => {
        if (err.status === 401) {
          // An endpoint's business error or an older request cannot delete the current session.
          if (token && err.error?.code === 'invalid_session' && token === _common_GAccount__WEBPACK_IMPORTED_MODULE_1__.GAccount.TokenDecryptValue) {
            _common_GAccount__WEBPACK_IMPORTED_MODULE_1__.GAccount.SignOut();
            this.router.navigateByUrl(this.language.url(_common_Urls__WEBPACK_IMPORTED_MODULE_2__.Urls.AccountUrl));
          } else if (!token && !_common_GAccount__WEBPACK_IMPORTED_MODULE_1__.GAccount.IsLoggedIn()) {
            this.router.navigateByUrl(this.language.url(_common_Urls__WEBPACK_IMPORTED_MODULE_2__.Urls.AccountUrl));
          }
        } else if (err.status === 0) {
          _common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.toast(this.toastController, 'اینترنت قطع است');
        } else if (err.status === 500) {
          this.router.navigateByUrl(_common_Urls__WEBPACK_IMPORTED_MODULE_2__.Urls.Page500Url);
        } else if (err.status === 423) {
          this.alert();
        } else if (err.status === 403) {
          this.alert2();
        }
      }
    }));
  }

};

AccountInterceptor.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController
}, {
  type: _i18n_site_language_service__WEBPACK_IMPORTED_MODULE_5__.SiteLanguageService
}];

AccountInterceptor = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Injectable)()], AccountInterceptor);


/***/ }),

/***/ 56847:
/*!*********************************************************!*\
  !*** ./src/app/data/service/article/article.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticleService": () => (/* binding */ ArticleService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 84505);

/* eslint-disable @typescript-eslint/naming-convention */



let ArticleService = class ArticleService {
    constructor(http) {
        this.http = http;
        this.homeNewArticles = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
        this.homeNewProductArticles = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
        this.GetHomeNewArticlesUrl = '/api/Article/GetHomeNewArticles';
        this.GetHomeNewProductArticlesUrl = '/api/Article/GetHomeNewProductArticles';
        this.GetHomeNewArticlesByFilterUrl = '/api/Article/GetHomeNewArticlesByFilter';
        this.GetHomeNewProductArticlesByFilterUrl = '/api/Article/GetHomeNewProductArticlesByFilter';
        this.GetArticleByIdUrl = '/api/Article/GetArticle';
        this.GetProductArticleByIdUrl = '/api/Article/GetProductArticle';
        this.GetArticleEditByIdUrl = '/api/Article/GetArticleEditById';
        this.GetProductArticleEditByIdUrl = '/api/Article/GetProductArticleEditById';
        this.GetArticleByAuthUrl = '/api/Article/GetArticleByAuth';
        this.GetProductArticleByAuthUrl = '/api/Article/GetProductArticleByAuth';
        this.GetDeActiveArticleByIdUrl = '/api/Article/GetDeActiveArticleById';
        this.GetDeActiveProductArticleByIdUrl = '/api/Article/GetDeActiveProductArticleById';
        this.GetArticleDetailUserLikedByIdUrl = '/api/Article/GetArticleDetailUserLikedById';
        this.GetProductArticleDetailUserLikedByIdUrl = '/api/Article/GetProductArticleDetailUserLikedById';
        this.GetArticleDetailByIdUrl = '/api/Article/GetArticleDetailById';
        this.GetProductArticleDetailByIdUrl = '/api/Article/GetProductArticleDetailById';
        this.GetArticleDetailViewedShowByIdUrl = '/api/Article/GetArticleDetailViewedShowById';
        this.GetProductArticleDetailViewedShowByIdUrl = '/api/Article/GetProductArticleDetailViewedShowById';
        this.GetArticleDetailTeacherByIdUrl = '/api/Article/GetArticleDetailTeacherById';
        this.GetArticleDetailSellerByIdUrl = '/api/Article/GetArticleDetailSellerById';
        this.AddOrUpdateUserViewedArticleUrl = '/api/Article/AddOrUpdateUserViewedArticle';
        this.AddOrUpdateUserViewedProductArticleUrl = '/api/Article/AddOrUpdateUserViewedProductArticle';
        this.AddOrUpdateUserLikedArticleUrl = '/api/Article/AddOrUpdateUserLikedArticle';
        this.AddOrUpdateUserLikedProductArticleUrl = '/api/Article/AddOrUpdateUserLikedProductArticle';
        this.GetAllArticlesCategoryUrl = '/api/Article/GetAllArticlesCategory';
        this.GetAllProductArticlesCategoryUrl = '/api/Article/GetAllProductArticlesCategory';
        this.GetArticlesByFilterUrl = '/api/Article/GetArticlesByFilter';
        this.GetProductArticlesByFilterUrl = '/api/Article/GetProductArticlesByFilter';
        this.GetTeacherArticlesByFilterUrl = '/api/Article/GetTeacherArticlesByFilter';
        this.GetSellerArticlesByFilterUrl = '/api/Article/GetSellerArticlesByFilter';
        this.GetDeActiveArticlesByFilterUrl = '/api/Article/GetDeActiveArticlesByFilter';
        this.GetDeActiveProductArticlesByFilterUrl = '/api/Article/GetDeActiveProductArticlesByFilter';
        this.GetEditArticlesByFilterUrl = '/api/Article/GetEditArticlesByFilter';
        this.GetEditProductArticlesByFilterUrl = '/api/Article/GetEditProductArticlesByFilter';
        this.AddArticleUrl = '/api/Article/AddArticle';
        this.SellerAddArticleUrl = '/api/Article/SellerAddArticle';
        this.DeleteArticleByIdUrl = '/api/Article/DeleteArticleById';
        this.DeleteProductArticleByIdUrl = '/api/Article/DeleteProductArticleById';
        this.ActiveArticleByIdUrl = '/api/Article/ActiveArticleById';
        this.ActiveProductArticleByIdUrl = '/api/Article/ActiveProductArticleById';
        this.ActiveArticleEditByIdUrl = '/api/Article/ActiveArticleEditById';
        this.ActiveProductArticleEditByIdUrl = '/api/Article/ActiveProductArticleEditById';
        this.ActiveArticleByIdNoShareUrl = '/api/Article/ActiveArticleByIdNoShare';
        this.ActiveProductArticleByIdNoShareUrl = '/api/Article/ActiveProductArticleByIdNoShare';
        this.GetArticleLikeByIdUrl = '/api/Article/GetArticleLikeById';
        this.GetProductArticleLikeByIdUrl = '/api/Article/GetProductArticleLikeById';
        this.DeActiveArticleByIdUrl = '/api/Article/DeActiveArticleById';
        this.DeActiveProductArticleByIdUrl = '/api/Article/DeActiveProductArticleById';
        this.AddOrUpdateArticleTagUrl = '/api/Article/AddOrUpdateArticleTag';
        this.AddOrUpdateProductArticleTagUrl = '/api/Article/AddOrUpdateProductArticleTag';
        this.GetArticleTagsUrl = '/api/Article/GetArticleTags';
        this.GetProductArticleTagsUrl = '/api/Article/GetProductArticleTags';
        this.RemoveArticleTagUrl = '/api/Article/RemoveArticleTag';
        this.RemoveProductArticleTagUrl = '/api/Article/RemoveProductArticleTag';
        this.AdminUpdateArticleUrl = '/api/Article/AdminUpdateArticle';
        this.AdminUpdateProductArticleUrl = '/api/Article/AdminUpdateProductArticle';
        this.GetAdminArticlesByFilterUrl = '/api/Article/GetAdminArticlesByFilter';
        this.GetAdminProductArticlesByFilterUrl = '/api/Article/GetAdminProductArticlesByFilter';
        this.GetUserLikedArticleUrl = '/api/Article/GetUserLikedArticle';
        this.GetUserLikedProductArticleUrl = '/api/Article/GetUserLikedProductArticle';
    }
    // New Articles
    GetHomeNewArticlesByFilter(filter) {
        return this.http.post(this.GetHomeNewArticlesByFilterUrl, filter, { responseType: 'json' });
    }
    GetHomeNewProductArticlesByFilter(filter) {
        return this.http.post(this.GetHomeNewProductArticlesByFilterUrl, filter, { responseType: 'json' });
    }
    GetHomeNewArticles(count) {
        return this.http.get(this.GetHomeNewArticlesUrl + '?count=' + count);
    }
    GetHomeNewProductArticles(count) {
        return this.http.get(this.GetHomeNewProductArticlesUrl + '?count=' + count);
    }
    getCurrentHomeNewArticles() {
        return this.homeNewArticles;
    }
    getCurrentHomeNewProductArticles() {
        return this.homeNewProductArticles;
    }
    setCurrentHomeNewArticles(model) {
        this.homeNewArticles.next(model);
    }
    setCurrentHomeNewProductArticles(model) {
        this.homeNewProductArticles.next(model);
    }
    // Article
    GetArticleEditById(id) {
        return this.http.get(this.GetArticleEditByIdUrl + '?id=' + id);
    }
    GetProductArticleEditById(id) {
        return this.http.post(this.GetProductArticleEditByIdUrl, id, { responseType: 'json' });
    }
    GetArticleById(id) {
        return this.http.get(this.GetArticleByIdUrl + '?id=' + id);
    }
    GetProductArticleById(id) {
        return this.http.get(this.GetProductArticleByIdUrl + '?id=' + id);
    }
    GetArticleByAuth(id) {
        return this.http.get(this.GetArticleByAuthUrl + '?id=' + id);
    }
    GetProductArticleByAuth(id) {
        return this.http.get(this.GetProductArticleByAuthUrl + '?id=' + id);
    }
    GetDeActiveArticleById(id) {
        return this.http.post(this.GetDeActiveArticleByIdUrl, id, { responseType: 'json' });
    }
    GetDeActiveProductArticleById(id) {
        return this.http.post(this.GetDeActiveProductArticleByIdUrl, id, { responseType: 'json' });
    }
    GetArticleDetailUserLikedById(id) {
        return this.http.post(this.GetArticleDetailUserLikedByIdUrl, id, { responseType: 'json' });
    }
    GetProductArticleDetailUserLikedById(id) {
        return this.http.post(this.GetProductArticleDetailUserLikedByIdUrl, id, { responseType: 'json' });
    }
    GetArticleDetailById(id) {
        return this.http.post(this.GetArticleDetailByIdUrl, id, { responseType: 'json' });
    }
    GetProductArticleDetailById(id) {
        return this.http.post(this.GetProductArticleDetailByIdUrl, id, { responseType: 'json' });
    }
    GetArticleDetailViewedShowById(id) {
        return this.http.post(this.GetArticleDetailViewedShowByIdUrl, id, { responseType: 'json' });
    }
    GetProductArticleDetailViewedShowById(id) {
        return this.http.post(this.GetProductArticleDetailViewedShowByIdUrl, id, { responseType: 'json' });
    }
    GetArticleDetailTeacherById(id) {
        return this.http.post(this.GetArticleDetailTeacherByIdUrl, id, { responseType: 'json' });
    }
    GetArticleDetailSellerById(id) {
        return this.http.post(this.GetArticleDetailSellerByIdUrl, id, { responseType: 'json' });
    }
    // AddOrUpdateUserViewedArticle
    AddOrUpdateUserViewedArticle(id) {
        return this.http.post(this.AddOrUpdateUserViewedArticleUrl + '?id=' + id, { responseType: 'json' });
    }
    AddOrUpdateUserViewedProductArticle(id) {
        return this.http.post(this.AddOrUpdateUserViewedProductArticleUrl + '?id=' + id, { responseType: 'json' });
    }
    AddOrUpdateUserLikedArticle(id, like) {
        return this.http.post(this.AddOrUpdateUserLikedArticleUrl + '?id=' + id + '&like=' + like, { responseType: 'json' });
    }
    AddOrUpdateUserLikedProductArticle(id, like) {
        return this.http.post(this.AddOrUpdateUserLikedProductArticleUrl + '?id=' + id + '&like=' + like, { responseType: 'json' });
    }
    DeleteArticleById(id) {
        return this.http.post(this.DeleteArticleByIdUrl, id, { responseType: 'json' });
    }
    DeleteProductArticleById(id) {
        return this.http.post(this.DeleteProductArticleByIdUrl, id, { responseType: 'json' });
    }
    ActiveArticleEditById(id) {
        return this.http.post(this.ActiveArticleEditByIdUrl, id, { responseType: 'json' });
    }
    ActiveProductArticleEditById(id) {
        return this.http.post(this.ActiveProductArticleEditByIdUrl, id, { responseType: 'json' });
    }
    ActiveArticleById(id) {
        return this.http.post(this.ActiveArticleByIdUrl, id, { responseType: 'json' });
    }
    ActiveProductArticleById(id) {
        return this.http.post(this.ActiveProductArticleByIdUrl, id, { responseType: 'json' });
    }
    ActiveArticleByIdNoShare(id) {
        return this.http.post(this.ActiveArticleByIdNoShareUrl, id, { responseType: 'json' });
    }
    ActiveProductArticleByIdNoShare(id) {
        return this.http.post(this.ActiveProductArticleByIdNoShareUrl, id, { responseType: 'json' });
    }
    GetArticleLikeById(id) {
        return this.http.post(this.GetArticleLikeByIdUrl, id, { responseType: 'json' });
    }
    GetProductArticleLikeById(id) {
        return this.http.post(this.GetProductArticleLikeByIdUrl, id, { responseType: 'json' });
    }
    DeActiveArticleById(id) {
        return this.http.post(this.DeActiveArticleByIdUrl, id, { responseType: 'json' });
    }
    DeActiveProductArticleById(id) {
        return this.http.post(this.DeActiveProductArticleByIdUrl, id, { responseType: 'json' });
    }
    // Article Category
    GetAllArticlesCategory() {
        return this.http.get(this.GetAllArticlesCategoryUrl);
    }
    GetAllProductArticlesCategory() {
        return this.http.get(this.GetAllProductArticlesCategoryUrl);
    }
    GetArticlesByFilter(filter) {
        return this.http.post(this.GetArticlesByFilterUrl, filter, { responseType: 'json' });
    }
    GetProductArticlesByFilter(filter) {
        return this.http.post(this.GetProductArticlesByFilterUrl, filter, { responseType: 'json' });
    }
    AddOrUpdateArticle(model) {
        return this.http.post(this.AddArticleUrl, model, { responseType: 'json' });
    }
    SellerAddOrUpdateArticle(model) {
        return this.http.post(this.SellerAddArticleUrl, model, { responseType: 'json' });
    }
    AdminUpdateArticle(model) {
        return this.http.post(this.AdminUpdateArticleUrl, model, { responseType: 'json' });
    }
    AdminUpdateProductArticle(model) {
        return this.http.post(this.AdminUpdateProductArticleUrl, model, { responseType: 'json' });
    }
    AddOrUpdateArticleTag(model) {
        return this.http.post(this.AddOrUpdateArticleTagUrl, model, { responseType: 'json' });
    }
    AddOrUpdateProductArticleTag(model) {
        return this.http.post(this.AddOrUpdateProductArticleTagUrl, model, { responseType: 'json' });
    }
    GetTeacherArticlesByFilter(filter) {
        return this.http.post(this.GetTeacherArticlesByFilterUrl, filter, { responseType: 'json' });
    }
    GetSellerArticlesByFilter(filter) {
        return this.http.post(this.GetSellerArticlesByFilterUrl, filter, { responseType: 'json' });
    }
    GetAdminArticlesByFilter(filter) {
        return this.http.post(this.GetAdminArticlesByFilterUrl, filter, { responseType: 'json' });
    }
    GetAdminProductArticlesByFilter(filter) {
        return this.http.post(this.GetAdminProductArticlesByFilterUrl, filter, { responseType: 'json' });
    }
    GetDeActiveArticlesByFilter(filter) {
        return this.http.post(this.GetDeActiveArticlesByFilterUrl, filter, { responseType: 'json' });
    }
    GetDeActiveProductArticlesByFilter(filter) {
        return this.http.post(this.GetDeActiveProductArticlesByFilterUrl, filter, { responseType: 'json' });
    }
    GetEditArticlesByFilter(filter) {
        return this.http.post(this.GetEditArticlesByFilterUrl, filter, { responseType: 'json' });
    }
    GetEditProductArticlesByFilter(filter) {
        return this.http.post(this.GetEditProductArticlesByFilterUrl, filter, { responseType: 'json' });
    }
    GetArticleTags(id) {
        return this.http.post(this.GetArticleTagsUrl, id, { responseType: 'json' });
    }
    GetProductArticleTags(id) {
        return this.http.post(this.GetProductArticleTagsUrl, id, { responseType: 'json' });
    }
    RemoveArticleTag(id) {
        return this.http.post(this.RemoveArticleTagUrl, id, { responseType: 'json' });
    }
    RemoveProductArticleTag(id) {
        return this.http.post(this.RemoveProductArticleTagUrl, id, { responseType: 'json' });
    }
    GetUserLikedArticle() {
        return this.http.get(this.GetUserLikedArticleUrl, { responseType: 'json' });
    }
    GetUserLikedProductArticle() {
        return this.http.get(this.GetUserLikedProductArticleUrl, { responseType: 'json' });
    }
};
ArticleService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
ArticleService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], ArticleService);



/***/ }),

/***/ 57577:
/*!******************************************************!*\
  !*** ./src/app/data/service/auth/account.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountService": () => (/* binding */ AccountService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 66587);
/* harmony import */ var rxjs_Operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Operators */ 47418);
/* harmony import */ var rxjs_Operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Operators */ 19019);
/* harmony import */ var _core_common_CryptographyHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/common/CryptographyHelper */ 24784);
/* harmony import */ var _core_common_GAccount__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/common/GAccount */ 6958);
var AccountService_1;

/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/naming-convention */






let AccountService = AccountService_1 = class AccountService {
    constructor(http) {
        this.http = http;
        // Urls
        this.loginUrl = '/api/Account/Login';
        this.logoutUrl = '/api/Account/Logout';
        this.RegisterUrl = '/api/account/Register';
        this.ExternalRegisterUrl = '/api/account/ExternalRegister';
        this.SelerRegisterUrl = '/api/account/SellerRegister';
        this.TeacherRegisterUrl = '/api/account/TeacherRegister';
        this.AdminRegisterUrl = '/api/account/AdminRegister';
        this.ForgetPasswordUrl = '/api/account/ForgetPassword';
        this.ChangePasswordUrl = '/api/account/ChangePassword';
        this.ResetPasswordUrl = '/api/account/ResetPassword';
        this.ConfirmEmailUrl = '/api/account/ConfirmEmail';
        this.ConfirmPhoneUrl = '/api/account/ConfirmPhone';
        this.ActiveAdminUserByEmailUrl = '/api/account/ActiveAdminUserByEmail';
        this.BlockAdminUserByEmailUrl = '/api/account/BlockAdminUserByEmail';
        this.DeActiveLockoutUrl = '/api/account/DeActiveLockout';
        this.ActiveLockoutUrl = '/api/account/ActiveLockout';
        this.AdminForceDeActiveUrl = '/api/account/AdminForceDeActive';
        this.AdminForceActiveUrl = '/api/account/AdminForceActive';
    }
    static TokenRolesInit(res, email) {
        const response = res;
        let rolesKey;
        let rolesValue;
        if (email == null) {
            if (_core_common_GAccount__WEBPACK_IMPORTED_MODULE_1__.GAccount.IsLoggedIn()) {
                _core_common_GAccount__WEBPACK_IMPORTED_MODULE_1__.GAccount.SignOut2();
            }
        }
        else {
            if (_core_common_GAccount__WEBPACK_IMPORTED_MODULE_1__.GAccount.IsLoggedIn()) {
                _core_common_GAccount__WEBPACK_IMPORTED_MODULE_1__.GAccount.SignOut();
            }
            _core_common_GAccount__WEBPACK_IMPORTED_MODULE_1__.GAccount.UserEmail = email;
            localStorage.setItem('Email', email);
        }
        _core_common_GAccount__WEBPACK_IMPORTED_MODULE_1__.GAccount.TokenKey = _core_common_CryptographyHelper__WEBPACK_IMPORTED_MODULE_0__.CryptographyHelper.encrypt(_core_common_GAccount__WEBPACK_IMPORTED_MODULE_1__.GAccount.TokenDecryptKey);
        _core_common_GAccount__WEBPACK_IMPORTED_MODULE_1__.GAccount.TokenValue = _core_common_CryptographyHelper__WEBPACK_IMPORTED_MODULE_0__.CryptographyHelper.encrypt(res.token);
        localStorage.setItem(_core_common_GAccount__WEBPACK_IMPORTED_MODULE_1__.GAccount.TokenKey, _core_common_GAccount__WEBPACK_IMPORTED_MODULE_1__.GAccount.TokenValue);
        _core_common_GAccount__WEBPACK_IMPORTED_MODULE_1__.GAccount.CurrrentUserRoles = response.roles;
        if (response.roles[_core_common_GAccount__WEBPACK_IMPORTED_MODULE_1__.GAccount.BuyerType] != null) {
            rolesKey = _core_common_CryptographyHelper__WEBPACK_IMPORTED_MODULE_0__.CryptographyHelper.encrypt(_core_common_GAccount__WEBPACK_IMPORTED_MODULE_1__.GAccount.BuyerType);
            if (response.roles[_core_common_GAccount__WEBPACK_IMPORTED_MODULE_1__.GAccount.BuyerType] === true) {
                rolesValue = _core_common_CryptographyHelper__WEBPACK_IMPORTED_MODULE_0__.CryptographyHelper.encrypt(_core_common_GAccount__WEBPACK_IMPORTED_MODULE_1__.GAccount.ActiveRole);
            }
            else {
                rolesValue = _core_common_CryptographyHelper__WEBPACK_IMPORTED_MODULE_0__.CryptographyHelper.encrypt(_core_common_GAccount__WEBPACK_IMPORTED_MODULE_1__.GAccount.DeActiveRole);
            }
            localStorage.setItem(rolesKey, rolesValue);
        }
        if (response.roles[_core_common_GAccount__WEBPACK_IMPORTED_MODULE_1__.GAccount.SellerType] != null) {
            rolesKey = _core_common_CryptographyHelper__WEBPACK_IMPORTED_MODULE_0__.CryptographyHelper.encrypt(_core_common_GAccount__WEBPACK_IMPORTED_MODULE_1__.GAccount.SellerType);
            if (response.roles[_core_common_GAccount__WEBPACK_IMPORTED_MODULE_1__.GAccount.SellerType] === true) {
                rolesValue = _core_common_CryptographyHelper__WEBPACK_IMPORTED_MODULE_0__.CryptographyHelper.encrypt(_core_common_GAccount__WEBPACK_IMPORTED_MODULE_1__.GAccount.ActiveRole);
            }
            else {
                rolesValue = _core_common_CryptographyHelper__WEBPACK_IMPORTED_MODULE_0__.CryptographyHelper.encrypt(_core_common_GAccount__WEBPACK_IMPORTED_MODULE_1__.GAccount.DeActiveRole);
            }
            localStorage.setItem(rolesKey, rolesValue);
        }
        if (response.roles[_core_common_GAccount__WEBPACK_IMPORTED_MODULE_1__.GAccount.TeacherType] != null) {
            rolesKey = _core_common_CryptographyHelper__WEBPACK_IMPORTED_MODULE_0__.CryptographyHelper.encrypt(_core_common_GAccount__WEBPACK_IMPORTED_MODULE_1__.GAccount.TeacherType);
            if (response.roles[_core_common_GAccount__WEBPACK_IMPORTED_MODULE_1__.GAccount.TeacherType] === true) {
                rolesValue = _core_common_CryptographyHelper__WEBPACK_IMPORTED_MODULE_0__.CryptographyHelper.encrypt(_core_common_GAccount__WEBPACK_IMPORTED_MODULE_1__.GAccount.ActiveRole);
            }
            else {
                rolesValue = _core_common_CryptographyHelper__WEBPACK_IMPORTED_MODULE_0__.CryptographyHelper.encrypt(_core_common_GAccount__WEBPACK_IMPORTED_MODULE_1__.GAccount.DeActiveRole);
            }
            localStorage.setItem(rolesKey, rolesValue);
        }
        if (response.roles[_core_common_GAccount__WEBPACK_IMPORTED_MODULE_1__.GAccount.AdminType] != null) {
            rolesKey = _core_common_CryptographyHelper__WEBPACK_IMPORTED_MODULE_0__.CryptographyHelper.encrypt(_core_common_GAccount__WEBPACK_IMPORTED_MODULE_1__.GAccount.AdminType);
            if (response.roles[_core_common_GAccount__WEBPACK_IMPORTED_MODULE_1__.GAccount.AdminType] === true) {
                rolesValue = _core_common_CryptographyHelper__WEBPACK_IMPORTED_MODULE_0__.CryptographyHelper.encrypt(_core_common_GAccount__WEBPACK_IMPORTED_MODULE_1__.GAccount.ActiveRole);
            }
            else {
                rolesValue = _core_common_CryptographyHelper__WEBPACK_IMPORTED_MODULE_0__.CryptographyHelper.encrypt(_core_common_GAccount__WEBPACK_IMPORTED_MODULE_1__.GAccount.DeActiveRole);
            }
            localStorage.setItem(rolesKey, rolesValue);
        }
        if (response.roles[_core_common_GAccount__WEBPACK_IMPORTED_MODULE_1__.GAccount.SuperAdminType] != null) {
            rolesKey = _core_common_CryptographyHelper__WEBPACK_IMPORTED_MODULE_0__.CryptographyHelper.encrypt(_core_common_GAccount__WEBPACK_IMPORTED_MODULE_1__.GAccount.SuperAdminType);
            if (response.roles[_core_common_GAccount__WEBPACK_IMPORTED_MODULE_1__.GAccount.SuperAdminType] === true) {
                rolesValue = _core_common_CryptographyHelper__WEBPACK_IMPORTED_MODULE_0__.CryptographyHelper.encrypt(_core_common_GAccount__WEBPACK_IMPORTED_MODULE_1__.GAccount.ActiveRole);
            }
            else {
                rolesValue = _core_common_CryptographyHelper__WEBPACK_IMPORTED_MODULE_0__.CryptographyHelper.encrypt(_core_common_GAccount__WEBPACK_IMPORTED_MODULE_1__.GAccount.DeActiveRole);
            }
            localStorage.setItem(rolesKey, rolesValue);
        }
        // Fake Item to run mad hackers!
        localStorage.setItem(_core_common_CryptographyHelper__WEBPACK_IMPORTED_MODULE_0__.CryptographyHelper.encrypt(_core_common_GAccount__WEBPACK_IMPORTED_MODULE_1__.GAccount.FakeDecryptKey), _core_common_CryptographyHelper__WEBPACK_IMPORTED_MODULE_0__.CryptographyHelper.encrypt(_core_common_GAccount__WEBPACK_IMPORTED_MODULE_1__.GAccount.FakeDecryptValue));
        _core_common_GAccount__WEBPACK_IMPORTED_MODULE_1__.GAccount.CheckUser();
    }
    static TokenRolesInit2(res) {
        const response = res;
        let rolesKey;
        let rolesValue;
        if (_core_common_GAccount__WEBPACK_IMPORTED_MODULE_1__.GAccount.IsLoggedIn()) {
            _core_common_GAccount__WEBPACK_IMPORTED_MODULE_1__.GAccount.SignOut();
        }
        _core_common_GAccount__WEBPACK_IMPORTED_MODULE_1__.GAccount.TokenKey = _core_common_CryptographyHelper__WEBPACK_IMPORTED_MODULE_0__.CryptographyHelper.encrypt(_core_common_GAccount__WEBPACK_IMPORTED_MODULE_1__.GAccount.TokenDecryptKey);
        _core_common_GAccount__WEBPACK_IMPORTED_MODULE_1__.GAccount.TokenValue = _core_common_CryptographyHelper__WEBPACK_IMPORTED_MODULE_0__.CryptographyHelper.encrypt(res.token);
        localStorage.setItem(_core_common_GAccount__WEBPACK_IMPORTED_MODULE_1__.GAccount.TokenKey, _core_common_GAccount__WEBPACK_IMPORTED_MODULE_1__.GAccount.TokenValue);
        _core_common_GAccount__WEBPACK_IMPORTED_MODULE_1__.GAccount.CurrrentUserRoles = response.roles;
        if (response.roles.has(_core_common_GAccount__WEBPACK_IMPORTED_MODULE_1__.GAccount.BuyerType)) {
            rolesKey = _core_common_CryptographyHelper__WEBPACK_IMPORTED_MODULE_0__.CryptographyHelper.encrypt(_core_common_GAccount__WEBPACK_IMPORTED_MODULE_1__.GAccount.BuyerType);
            if (response.roles.get(_core_common_GAccount__WEBPACK_IMPORTED_MODULE_1__.GAccount.BuyerType) === true) {
                rolesValue = _core_common_CryptographyHelper__WEBPACK_IMPORTED_MODULE_0__.CryptographyHelper.encrypt(_core_common_GAccount__WEBPACK_IMPORTED_MODULE_1__.GAccount.ActiveRole);
            }
            else {
                rolesValue = _core_common_CryptographyHelper__WEBPACK_IMPORTED_MODULE_0__.CryptographyHelper.encrypt(_core_common_GAccount__WEBPACK_IMPORTED_MODULE_1__.GAccount.DeActiveRole);
            }
            localStorage.setItem(rolesKey, rolesValue);
        }
        if (response.roles.has(_core_common_GAccount__WEBPACK_IMPORTED_MODULE_1__.GAccount.SellerType)) {
            rolesKey = _core_common_CryptographyHelper__WEBPACK_IMPORTED_MODULE_0__.CryptographyHelper.encrypt(_core_common_GAccount__WEBPACK_IMPORTED_MODULE_1__.GAccount.SellerType);
            if (response.roles.get(_core_common_GAccount__WEBPACK_IMPORTED_MODULE_1__.GAccount.SellerType) === true) {
                rolesValue = _core_common_CryptographyHelper__WEBPACK_IMPORTED_MODULE_0__.CryptographyHelper.encrypt(_core_common_GAccount__WEBPACK_IMPORTED_MODULE_1__.GAccount.ActiveRole);
            }
            else {
                rolesValue = _core_common_CryptographyHelper__WEBPACK_IMPORTED_MODULE_0__.CryptographyHelper.encrypt(_core_common_GAccount__WEBPACK_IMPORTED_MODULE_1__.GAccount.DeActiveRole);
            }
            localStorage.setItem(rolesKey, rolesValue);
        }
        if (response.roles.has(_core_common_GAccount__WEBPACK_IMPORTED_MODULE_1__.GAccount.TeacherType)) {
            rolesKey = _core_common_CryptographyHelper__WEBPACK_IMPORTED_MODULE_0__.CryptographyHelper.encrypt(_core_common_GAccount__WEBPACK_IMPORTED_MODULE_1__.GAccount.TeacherType);
            if (response.roles.get(_core_common_GAccount__WEBPACK_IMPORTED_MODULE_1__.GAccount.TeacherType) === true) {
                rolesValue = _core_common_CryptographyHelper__WEBPACK_IMPORTED_MODULE_0__.CryptographyHelper.encrypt(_core_common_GAccount__WEBPACK_IMPORTED_MODULE_1__.GAccount.ActiveRole);
            }
            else {
                rolesValue = _core_common_CryptographyHelper__WEBPACK_IMPORTED_MODULE_0__.CryptographyHelper.encrypt(_core_common_GAccount__WEBPACK_IMPORTED_MODULE_1__.GAccount.DeActiveRole);
            }
            localStorage.setItem(rolesKey, rolesValue);
        }
        if (response.roles.has(_core_common_GAccount__WEBPACK_IMPORTED_MODULE_1__.GAccount.AdminType)) {
            rolesKey = _core_common_CryptographyHelper__WEBPACK_IMPORTED_MODULE_0__.CryptographyHelper.encrypt(_core_common_GAccount__WEBPACK_IMPORTED_MODULE_1__.GAccount.AdminType);
            if (response.roles.get(_core_common_GAccount__WEBPACK_IMPORTED_MODULE_1__.GAccount.AdminType) === true) {
                rolesValue = _core_common_CryptographyHelper__WEBPACK_IMPORTED_MODULE_0__.CryptographyHelper.encrypt(_core_common_GAccount__WEBPACK_IMPORTED_MODULE_1__.GAccount.ActiveRole);
            }
            else {
                rolesValue = _core_common_CryptographyHelper__WEBPACK_IMPORTED_MODULE_0__.CryptographyHelper.encrypt(_core_common_GAccount__WEBPACK_IMPORTED_MODULE_1__.GAccount.DeActiveRole);
            }
            localStorage.setItem(rolesKey, rolesValue);
        }
        if (response.roles.has(_core_common_GAccount__WEBPACK_IMPORTED_MODULE_1__.GAccount.SuperAdminType)) {
            rolesKey = _core_common_CryptographyHelper__WEBPACK_IMPORTED_MODULE_0__.CryptographyHelper.encrypt(_core_common_GAccount__WEBPACK_IMPORTED_MODULE_1__.GAccount.SuperAdminType);
            if (response.roles.get(_core_common_GAccount__WEBPACK_IMPORTED_MODULE_1__.GAccount.SuperAdminType) === true) {
                rolesValue = _core_common_CryptographyHelper__WEBPACK_IMPORTED_MODULE_0__.CryptographyHelper.encrypt(_core_common_GAccount__WEBPACK_IMPORTED_MODULE_1__.GAccount.ActiveRole);
            }
            else {
                rolesValue = _core_common_CryptographyHelper__WEBPACK_IMPORTED_MODULE_0__.CryptographyHelper.encrypt(_core_common_GAccount__WEBPACK_IMPORTED_MODULE_1__.GAccount.DeActiveRole);
            }
            localStorage.setItem(rolesKey, rolesValue);
        }
        // Fake Item to run mad hackers!
        localStorage.setItem(_core_common_CryptographyHelper__WEBPACK_IMPORTED_MODULE_0__.CryptographyHelper.encrypt(_core_common_GAccount__WEBPACK_IMPORTED_MODULE_1__.GAccount.FakeDecryptKey), _core_common_CryptographyHelper__WEBPACK_IMPORTED_MODULE_0__.CryptographyHelper.encrypt(_core_common_GAccount__WEBPACK_IMPORTED_MODULE_1__.GAccount.FakeDecryptValue));
        _core_common_GAccount__WEBPACK_IMPORTED_MODULE_1__.GAccount.CheckUser();
    }
    Register(model) {
        return this.http
            .post(this.RegisterUrl, model, { responseType: 'json' })
            .pipe((0,rxjs_Operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.showError));
    }
    ExternalRegister(model) {
        return this.http
            .post(this.ExternalRegisterUrl, model, { responseType: 'json', withCredentials: true })
            .pipe((0,rxjs_Operators__WEBPACK_IMPORTED_MODULE_3__.timeout)(30000), (0,rxjs_Operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.showError));
    }
    SellerRegister(model) {
        return this.http
            .post(this.SelerRegisterUrl, model, { responseType: 'json' })
            .pipe((0,rxjs_Operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.showError));
    }
    TeacherRegister(model) {
        return this.http
            .post(this.TeacherRegisterUrl, model, { responseType: 'json' })
            .pipe((0,rxjs_Operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.showError));
    }
    AdminRegister(model) {
        return this.http
            .post(this.AdminRegisterUrl, model, { responseType: 'json' })
            .pipe((0,rxjs_Operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.showError));
    }
    Login(model) {
        return this.http
            .post(this.loginUrl, model, { responseType: 'json' })
            .pipe((0,rxjs_Operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.showError));
    }
    ValidateSession() {
        return this.http.get('/api/Account/Session');
    }
    Logout() {
        return this.http
            .post(this.logoutUrl, null, { responseType: 'json' }).pipe((0,rxjs_Operators__WEBPACK_IMPORTED_MODULE_3__.timeout)(15000));
    }
    ForgetPassword(model) {
        return this.http
            .post(this.ForgetPasswordUrl, model, { responseType: 'json' })
            .pipe((0,rxjs_Operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.showError));
    }
    ResetPassword(model) {
        return this.http
            .post(this.ResetPasswordUrl, model, { responseType: 'json' })
            .pipe((0,rxjs_Operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.showError));
    }
    ConfirmEmail(model) {
        return this.http
            .post(this.ConfirmEmailUrl, model, { responseType: 'json' })
            .pipe((0,rxjs_Operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.showError));
    }
    ConfirmPhone(model) {
        return this.http
            .post(this.ConfirmPhoneUrl, model, { responseType: 'json' })
            .pipe((0,rxjs_Operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.showError));
    }
    ChangePassword(model) {
        return this.http
            .post(this.ChangePasswordUrl, model, { responseType: 'json' })
            .pipe((0,rxjs_Operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.showError));
    }
    ActiveAdminUserByEmail(email) {
        return this.http
            .post(this.ActiveAdminUserByEmailUrl + '?email=' + email, { responseType: 'json' });
    }
    BlockAdminUserByEmail(email) {
        return this.http
            .post(this.BlockAdminUserByEmailUrl + '?email=' + email, { responseType: 'json' });
    }
    ActiveLockout(model) {
        return this.http
            .post(this.ActiveLockoutUrl, model, { responseType: 'json' });
    }
    DeActiveLockout(model) {
        return this.http
            .post(this.DeActiveLockoutUrl, model, { responseType: 'json' });
    }
    AdminForceActive(model) {
        return this.http.post(this.AdminForceActiveUrl, model, { responseType: 'json' });
    }
    AdminForceDeActive(model) {
        return this.http.post(this.AdminForceDeActiveUrl, model, { responseType: 'json' });
    }
    // tslint:disable-next-line: typedef
    showError(errorResponse) {
        AccountService_1.ErrorState = errorResponse.status;
        AccountService_1.ErrorMessage = errorResponse.error;
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)('Error');
    }
};
AccountService.ErrorState = 0;
AccountService.ErrorMessage = '';
AccountService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient }
];
AccountService = AccountService_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({
        providedIn: 'root'
    })
], AccountService);



/***/ }),

/***/ 29209:
/*!*******************************************************!*\
  !*** ./src/app/data/service/course/course.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CourseService": () => (/* binding */ CourseService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 84505);

/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/naming-convention */



let CourseService = class CourseService {
    constructor(http) {
        this.http = http;
        this.testData = [];
        this.homeNewCourses = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
        this.homeTopViewedCourses = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
        this.homeOffPricedCourses = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
        this.GetHomeNewCoursesUrl = '/api/Course/GetHomeNewCourses';
        this.GetHomeNewCoursesByFilterUrl = '/api/Course/GetHomeNewCoursesByFilter';
        this.GetHomeTopViewedCoursesUrl = '/api/Course/GetHomeTopViewedCourses';
        this.GetHomeTopViewedCoursesByFilterUrl = '/api/Course/GetHomeTopViewedCoursesByFilter';
        this.GetHomeOffPricedCoursesUrl = '/api/Course/GetHomeOffPricedCourses';
        this.GetHomeOffPricedCoursesByFilterUrl = '/api/Course/GetHomeOffPricedCoursesByFilter';
        this.GetCourseExamByIdUrl = '/api/Course/GetCourseExamById';
        this.GetPlacementExamByIdUrl = '/api/Course/GetPlacementExamById';
        this.GetExamByIdUrl = '/api/Course/GetExamById';
        this.GetExamDetailByIdUrl = '/api/Course/GetExamDetailById';
        this.GetTeacherExamByIdUrl = '/api/Course/GetTeacherExamById';
        this.GetAdminExamByIdUrl = '/api/Course/GetAdminExamById';
        this.GetExamResultByIdUrl = '/api/Course/GetExamResultById';
        this.GetExamByIdForBeginUrl = '/api/Course/GetExamByIdForBegin';
        this.SetExamEndUrl = '/api/Course/SetExamEnd';
        this.SetExamTestAnswerUrl = '/api/Course/SetExamTestAnswer';
        this.AddNoOneTestsIfNotExistUrl = '/api/Course/AddNoOneTestsIfNotExist';
        this.MakeExamUrl = '/api/Course/MakeExam';
        this.PayExamUrl = '/api/Course/PayExam';
        this.PhonePayExamUrl = '/api/Course/PhonePayExam';
        this.PayExamByWalletUrl = '/api/Course/PayExamByWallet';
        this.MakeExamByWalletUrl = '/api/Course/MakeExamByWallet';
        this.MakeFreeExamUrl = '/api/Course/MakeFreeExam';
        this.MakeFreePlacementExamUrl = '/api/Course/MakeFreePlacementExam';
        this.GetCourseByIdUrl = '/api/Course/GetCourse';
        this.GetCourseDetailByIdUrl = '/api/Course/GetCourseDetailById';
        this.GetCourseDetailById2Url = '/api/Course/GetCourseDetailById2';
        this.GetAdminCourseDetailByIdUrl = '/api/Course/GetAdminCourseDetailById';
        this.GetTeacherCourseDetailByIdUrl = '/api/Course/GetTeacherCourseDetailById';
        this.GetCourseDetailImagesByIdUrl = '/api/Course/GetCourseDetailImagesById';
        this.GetCourseDetailImagesById2Url = '/api/Course/GetCourseDetailImagesById2';
        this.GetTeacherCourseDetailImagesByIdUrl = '/api/Course/GetTeacherCourseDetailImagesById';
        this.GetAdminCourseDetailImagesByIdUrl = '/api/Course/GetAdminCourseDetailImagesById';
        this.GetCourseDetailCategoriesByIdUrl = '/api/Course/GetCourseDetailCategoriesById';
        this.GetCourseDetailTeacherByIdUrl = '/api/Course/GetCourseDetailTeacherById';
        this.GetCourseDetailVideosByIdUrl = '/api/Course/GetCourseDetailVideosById';
        this.GetCourseDetailVideosById2Url = '/api/Course/GetCourseDetailVideosById2';
        this.GetAuthCourseDetailVideosByIdUrl = '/api/Course/GetAuthCourseDetailVideosById';
        this.CalcCoursesUrl = '/api/Course/CalcCourses';
        this.GetAuthCourseDetailVideosById2Url = '/api/Course/GetAuthCourseDetailVideosById2';
        this.GetAuthCourseDetailVideosById3Url = '/api/Course/GetAuthCourseDetailVideosById3';
        this.GetAdminCourseDetailVideosByIdUrl = '/api/Course/GetAdminCourseDetailVideosById';
        this.GetTeacherCourseDetailVideosByIdUrl = '/api/Course/GetTeacherCourseDetailVideosById';
        this.GetCourseDetailUserLikedByIdUrl = '/api/Course/GetCourseDetailUserLikedById';
        this.GetCourseDetailViewedShowByIdUrl = '/api/Course/GetCourseDetailViewedShowById';
        this.GetAdminCourseByIdUrl = '/api/Course/GetAdminCourse';
        this.GetEditCourseByIdUrl = '/api/Course/GetCourseEditById';
        this.GetCourseEditByIdUrl = '/api/Course/GetCourseEditById';
        this.GetCourseByAuthUrl = '/api/Course/GetCourseByAuth';
        this.GetDeActiveCourseByIdUrl = '/api/Course/GetDeActiveCourseById';
        this.AddOrUpdateUserViewedCourseUrl = '/api/Course/AddOrUpdateUserViewedCourse';
        this.AddOrUpdateUserLikedCourseUrl = '/api/Course/AddOrUpdateUserLikedCourse';
        this.CheckUserCourseRatingUrl = '/api/Course/CheckUserCourseRating';
        this.AddUserCourseRatingUrl = '/api/Course/AddUserCourseRating';
        this.GetAllCoursesCategoryUrl = '/api/Course/GetAllCoursesCategory';
        this.GetCoursesByFilterUrl = '/api/Course/GetCoursesByFilter';
        this.GetExamCoursesByFilterUrl = '/api/Course/GetExamCoursesByFilter';
        this.GetQuestionCoursesByFilterUrl = '/api/Course/GetQuestionCoursesByFilter';
        this.GetTeacherQuestionCoursesByFilterUrl = '/api/Course/GetTeacherQuestionCoursesByFilter';
        this.GetAdminQuestionCoursesByFilterUrl = '/api/Course/GetAdminQuestionCoursesByFilter';
        this.GetActiveVideoCoursesByFilterUrl = '/api/Course/GetActiveVideoCoursesByFilter';
        this.GetActiveImageCoursesByFilterUrl = '/api/Course/GetActiveImageCoursesByFilter';
        this.GetDeActiveImageCoursesByFilterUrl = '/api/Course/GetDeActiveImageCoursesByFilter';
        this.GetDeActiveVideoCoursesByFilterUrl = '/api/Course/GetDeActiveVideoCoursesByFilter';
        this.GetUserLikedCourseByFilterUrl = '/api/Course/GetUserLikedCourseByFilter';
        this.GetUserQuestionsByFilterUrl = '/api/Course/GetUserQuestionsByFilter';
        this.GetCourseQuestionsByFilterUrl = '/api/Course/GetCourseQuestionsByFilter';
        this.GetExamQuestionByFilterUrl = '/api/Course/GetExamQuestionByFilter';
        this.GetAdminExamQuestionByFilterUrl = '/api/Course/GetAdminExamQuestionByFilter';
        this.GetAdminLevelTestExamQuestionByFilterUrl = '/api/Course/GetAdminLevelTestExamQuestionByFilter';
        this.AddOrUpdateExamQuestionUrl = '/api/Course/AddOrUpdateExamQuestion';
        this.AdminAddOrUpdateExamQuestionUrl = '/api/Course/AdminAddOrUpdateExamQuestion';
        this.AdminUpdateExamUrl = '/api/Course/AdminUpdateExam';
        this.AdminUpdateExamUserTestQuestionAnswersUrl = '/api/Course/AdminUpdateExamUserTestQuestionAnswers';
        this.DeleteExamQuestionByIdUrl = '/api/Course/DeleteExamQuestionById';
        this.GetTeacherExamsByFilterUrl = '/api/Course/GetTeacherExamsByFilter';
        this.GetAdminExamsByFilterUrl = '/api/Course/GetAdminExamsByFilter';
        this.GetAdminLevelTestExamsByFilterUrl = '/api/Course/GetAdminLevelTestExamsByFilter';
        this.GetTeacherCourseQuestionsByFilterUrl = '/api/Course/GetTeacherCourseQuestionsByFilter';
        this.GetAdminCourseReportsByFilterUrl = '/api/Course/GetAdminCourseReportsByFilter';
        this.GetAdminCourseCommentReportsByFilterUrl = '/api/Course/GetAdminCourseCommentReportsByFilter';
        this.GetAdminCourseQuestionReportsByFilterUrl = '/api/Course/GetAdminCourseQuestionReportsByFilter';
        this.GetTeacherCourseCommentsByFilterUrl = '/api/Course/GetTeacherCourseCommentsByFilter';
        this.GetCourseHiddenQuestionsByFilterUrl = '/api/Course/GetCourseHiddenQuestionsByFilter';
        this.GetTeacherCourseHiddenQuestionsByFilterUrl = '/api/Course/GetTeacherCourseHiddenQuestionsByFilter';
        this.GetTeacherCourseHiddenCommentsByFilterUrl = '/api/Course/GetTeacherCourseHiddenCommentsByFilter';
        this.GetCourseCommentsByFilterUrl = '/api/Course/GetCourseCommentsByFilter';
        this.GetAuthCourseCommentsByFilterUrl = '/api/Course/GetAuthCourseCommentsByFilter';
        this.GetCourseQuestionsCountByIdUrl = '/api/Course/GetCourseQuestionsCountById';
        this.GetTeacherCourseQuestionsCountByIdUrl = '/api/Course/GetTeacherCourseQuestionsCountById';
        this.GetAdminCourseReportsListCountUrl = '/api/Course/GetAdminCourseReportsListCount';
        this.GetAdminCourseCommentReportsListCountUrl = '/api/Course/GetAdminCourseCommentReportsListCount';
        this.GetAdminCourseQuestionReportsListCountUrl = '/api/Course/GetAdminCourseQuestionReportsListCount';
        this.GetTeacherCourseCommentsCountByIdUrl = '/api/Course/GetTeacherCourseCommentsCountById';
        this.GetCourseHiddenQuestionsCountByIdUrl = '/api/Course/GetCourseHiddenQuestionsCountById';
        this.GetTeacherCourseHiddenQuestionsCountByIdUrl = '/api/Course/GetTeacherCourseHiddenQuestionsCountById';
        this.GetTeacherCourseHiddenCommentsCountByIdUrl = '/api/Course/GetTeacherCourseHiddenCommentsCountById';
        this.GetCourseQuestionsDetailsByIdUrl = '/api/Course/GetCourseQuestionsDetailsById';
        this.GetTeacherCourseQuestionsDetailsByIdUrl = '/api/Course/GetTeacherCourseQuestionsDetailsById';
        this.GetTeacherCourseCommentsDetailsByIdUrl = '/api/Course/GetTeacherCourseCommentsDetailsById';
        this.GetAdminCourseHiddenQuestionsDetailsByIdUrl = '/api/Course/GetAdminCourseHiddenQuestionsDetailsById';
        this.GetAdminCourseHiddenCommentsDetailsByIdUrl = '/api/Course/GetAdminCourseHiddenCommentsDetailsById';
        this.GetCourseHiddenQuestionsDetailsByIdUrl = '/api/Course/GetCourseHiddenQuestionsDetailsById';
        this.GetTeacherCourseHiddenQuestionsDetailsByIdUrl = '/api/Course/GetTeacherCourseHiddenQuestionsDetailsById';
        this.GetAdminCourseReportDetailsByIdUrl = '/api/Course/GetAdminCourseReportDetailsById';
        this.GetAdminCourseCommentReportDetailsByIdUrl = '/api/Course/GetAdminCourseCommentReportDetailsById';
        this.GetAdminCourseQuestionReportDetailsByIdUrl = '/api/Course/GetAdminCourseQuestionReportDetailsById';
        this.GetTeacherCourseHiddenCommentsDetailsByIdUrl = '/api/Course/GetTeacherCourseHiddenCommentsDetailsById';
        this.GetAdminCourseQuestionsDetailsByIdUrl = '/api/Course/GetAdminCourseQuestionsDetailsById';
        this.GetAdminCourseCommentsDetailsByIdUrl = '/api/Course/GetAdminCourseCommentsDetailsById';
        this.ActiveCourseQuestionUrl = '/api/Course/ActiveCourseQuestion';
        this.GetAdminUnSeenCourseCommentsListUrl = '/api/Course/GetAdminUnSeenCourseCommentsList';
        this.GetTeacherUnSeenCourseCommentsListUrl = '/api/Course/GetTeacherUnSeenCourseCommentsList';
        this.GetAdminUnSeenCourseQuestionsListUrl = '/api/Course/GetAdminUnSeenCourseQuestionsList';
        this.SendAdminUnSeenCourseCommentsListUrl = '/api/Course/SendAdminUnSeenCourseCommentsList';
        this.GetAdminUnSeenCourseReportsListUrl = '/api/Course/GetAdminUnSeenCourseReportsList';
        this.GetAdminUnSeenCourseCommentReportsListUrl = '/api/Course/GetAdminUnSeenCourseCommentReportsList';
        this.GetAdminUnSeenCourseQuestionReportsListUrl = '/api/Course/GetAdminUnSeenCourseQuestionReportsList';
        this.SendAdminUnSeenCourseQuestionsListUrl = '/api/Course/SendAdminUnSeenCourseQuestionsList';
        this.GetTeacherUnSeenCourseQuestionsListUrl = '/api/Course/GetTeacherUnSeenCourseQuestionsList';
        this.ActiveCourseCommentUrl = '/api/Course/ActiveCourseComment';
        this.DeActiveCourseQuestionUrl = '/api/Course/DeActiveCourseQuestion';
        this.OpenQuestionUrl = '/api/Course/OpenQuestion';
        this.CloseQuestionUrl = '/api/Course/CloseQuestion';
        this.AdminVerifyCourseReportUrl = '/api/Course/AdminVerifyCourseReport';
        this.AdminDeVerifyCourseReportUrl = '/api/Course/AdminDeVerifyCourseReport';
        this.AdminVerifyCourseCommentReportUrl = '/api/Course/AdminVerifyCourseCommentReport';
        this.AdminDeVerifyCourseCommentReportUrl = '/api/Course/AdminDeVerifyCourseCommentReport';
        this.AdminVerifyCourseQuestionReportUrl = '/api/Course/AdminVerifyCourseQuestionReport';
        this.AdminDeVerifyCourseQuestionReportUrl = '/api/Course/AdminDeVerifyCourseQuestionReport';
        this.UnSetBestQuestionAnswerUrl = '/api/Course/UnSetBestQuestionAnswer';
        this.SetBestQuestionAnswerUrl = '/api/Course/SetBestQuestionAnswer';
        this.DeActiveCourseCommentUrl = '/api/Course/DeActiveCourseComment';
        this.DeleteCourseQuestionUrl = '/api/Course/DeleteCourseQuestion';
        this.DeleteCourseCommentUrl = '/api/Course/DeleteCourseComment';
        this.SetCourseQuestionUrl = '/api/Course/SetCourseQuestion';
        this.ReplyCommentByIdUrl = '/api/Course/ReplyCommentById';
        this.ReportCommentUrl = '/api/Course/ReportComment';
        this.ReportQuestionUrl = '/api/Course/ReportQuestion';
        this.ReportCourseUrl = '/api/Course/ReportCourse';
        this.onSendCommentUrl = '/api/Course/SendComment';
        this.EditCourseQuestionUrl = '/api/Course/EditCourseQuestion';
        this.EditCourseCommentUrl = '/api/Course/EditCourseComment';
        this.SetTeacherCourseQuestionUrl = '/api/Course/SetTeacherCourseQuestion';
        this.SetTeacherCourseCommentUrl = '/api/Course/SetTeacherCourseComment';
        this.AdminGetUserLikedCourseByFilterUrl = '/api/Course/AdminGetUserLikedCourseByFilter';
        this.GetUserExamsByFilterUrl = '/api/Course/GetUserExamsByFilter';
        this.GetUserPlacementExamsByFilterUrl = '/api/Course/GetUserPlacementExamsByFilter';
        this.GetUserDegreesByFilterUrl = '/api/Course/GetUserDegreesByFilter';
        this.GetDeActiveCoursesByFilterUrl = '/api/Course/GetDeActiveCoursesByFilter';
        this.GetEditCoursesByFilterUrl = '/api/Course/GetEditCoursesByFilter';
        this.GetTeacherCoursesByFilterUrl = '/api/Course/GetTeacherCoursesByFilter';
        this.GetTeacherCoursesStudentByFilterUrl = '/api/Course/GetTeacherCoursesStudentByFilter';
        this.GetUserCoursesIdUrl = '/api/Course/GetUserCoursesId';
        this.GetUserTunerPlusAccessUrl = '/api/Course/GetUserTunerPlusAccess';
        this.CreateExamDegreeUrl = '/api/Course/CreateExamDegree';
        this.CreateExamDegreeAsPngUrl = '/api/Course/CreateExamDegreeAsPng';
        this.AdminCreateExamDegreeAsJpegUrl = '/api/Course/AdminCreateExamDegreeAsJpeg';
        this.CreateExamDegreeAsJpegUrl = '/api/Course/CreateExamDegreeAsJpeg';
        this.CreateExamDegreeAsJpeg2Url = '/api/Course/CreateExamDegreeAsJpeg2';
        this.GetUserCoursesNameUrl = '/api/Course/GetUserCoursesName';
        this.GetUserLikedCourseUrl = '/api/Course/GetUserLikedCourse';
        this.AdminGetUserCoursesNameUrl = '/api/Course/AdminGetUserCoursesName';
        this.RemoveAllTeacherCourseOffPriceUrl = '/api/Course/RemoveAllTeacherCourseOffPrice';
        this.GetTeacherPortionUrl = '/api/Course/GetTeacherPortion';
        this.AddOrUpdateTeacherPortionUrl = '/api/Course/AddOrUpdateTeacherPortion';
        this.AddCourseUrl = '/api/Course/AddCourse';
        this.UpdateCoursePriceByPercentUrl = '/api/Course/UpdateCoursePriceByPercent';
        this.UpdateCoursePriceByPercent2Url = '/api/Course/UpdateCoursePriceByPercent2';
        this.AdminUpdateCourseUrl = '/api/Course/AdminUpdateCourse';
        this.AddOrUpdateVideoUrl = '/api/Course/AddOrUpdateVideo';
        this.UpdateVideoOrderUrl = '/api/Course/UpdateVideoOrder';
        this.AdminUpdateVideoOrderUrl = '/api/Course/AdminUpdateVideoOrder';
        this.AddOrUpdateImageUrl = '/api/Course/AddOrUpdateImage';
        this.AdminAddOrUpdateVideoUrl = '/api/Course/AdminAddOrUpdateVideo';
        this.AdminAddOrUpdateUserVoiceUrl = '/api/Course/AdminAddOrUpdateUserVoice';
        this.AdminAddOrUpdateImageUrl = '/api/Course/AdminAddOrUpdateImage';
        this.DeleteVideoUrl = '/api/Course/DeleteVideo';
        this.DeleteImageUrl = '/api/Course/DeleteImage';
        this.AdminDeleteVideoUrl = '/api/Course/AdminDeleteVideo';
        this.AdminDeleteUserVoiceUrl = '/api/Course/AdminDeleteUserVoice';
        this.AdminDeleteImageUrl = '/api/Course/AdminDeleteImage';
        this.AddOrUpdateCourseCategoryUrl = '/api/Course/AddOrUpdateCourseCategory';
        this.DeleteCourseByIdUrl = '/api/Course/DeleteCourseById';
        this.DeleteCategoryByIdUrl = '/api/Course/DeleteCategoryById';
        this.DeActiveCourseByIdUrl = '/api/Course/DeActiveCourseById';
        this.ActiveCourseByIdUrl = '/api/Course/ActiveCourseById';
        this.ActiveEditCourseByIdUrl = '/api/Course/ActiveEditCourseById';
        this.ActiveCourseByIdNoShareUrl = '/api/Course/ActiveCourseByIdNoShare';
        this.GetCourseLikeByIdUrl = '/api/Course/GetCourseLikeById';
        this.AddFakeCoursesRateUrl = '/api/Course/AddFakeCoursesRate';
        this.AddFakeCourseRateUrl = '/api/Course/AddFakeCourseRate';
        this.ActiveCourseVideoByIdUrl = '/api/Course/ActiveCourseVideoById';
        this.ActiveCourseImageByIdUrl = '/api/Course/ActiveCourseImageById';
        this.ActiveCourseVideoByIdNoShareUrl = '/api/Course/ActiveCourseVideoByIdNoShare';
        this.DeActiveCourseVideoByIdUrl = '/api/Course/DeActiveCourseVideoById';
        this.DeActiveCourseImageByIdUrl = '/api/Course/DeActiveCourseImageById';
        this.AddOrUpdateCourseTagUrl = '/api/Course/AddOrUpdateCourseTag';
        this.GetCourseTagsUrl = '/api/Course/GetCourseTags';
        this.GetCourseUserVoiceUrl = '/api/Course/GetCourseUserVoice';
        this.GetHomeCourseUserVoiceUrl = '/api/Course/GetHomeCourseUserVoice';
        this.GetAdminCourseUserVoicesUrl = '/api/Course/GetAdminCourseUserVoices';
        this.RemoveCourseTagUrl = '/api/Course/RemoveCourseTag';
        this.RemoveCourseToUserUrl = '/api/Course/RemoveCourseToUser';
        this.AddCourseToUserUrl = '/api/Course/AddCourseToUser';
        this.GetCartHistoryByFilterUrl = '/api/User/GetCartHistoryByFilter';
        this.GetCartHistoryByFilterFirstTimeUrl = '/api/User/GetCartHistoryByFilterFirstTime';
        this.GetAdminCourseSellCountUrl = '/api/User/GetAdminCourseSellCount';
        this.GetAdminCourseSellCount2Url = '/api/User/GetAdminCourseSellCount2';
        this.GetCourseSellCountUrl = '/api/User/GetCourseSellCount';
        this.GetAdminCourseSellPriceCountUrl = '/api/User/GetAdminCourseSellPriceCount';
        this.GetCourseSellPriceCountUrl = '/api/User/GetCourseSellPriceCount';
        this.GetCartHistoryDetailUrl = '/api/User/GetCartHistoryDetail';
        this.GetAdminCartHistoryByFilterUrl = '/api/User/GetAdminCartHistoryByFilter';
        this.GetAdminCartHistoryByFilter2Url = '/api/User/GetAdminCartHistoryByFilter2';
        this.GetAdminCartHistoryByFilterFirstTimeUrl = '/api/User/GetAdminCartHistoryByFilterFirstTime';
        this.GetAdminCartHistoryDetailUrl = '/api/User/GetAdminCartHistoryDetail';
        this.GetAdminCoursesByFilterUrl = '/api/Course/GetAdminCoursesByFilter';
        this.GetAdminCoursesStudentByFilterUrl = '/api/Course/GetAdminCoursesStudentByFilter';
        this.DeActiveQuestionByIdUrl = '/api/Course/DeActiveQuestionById';
        this.ActiveQuestionByIdUrl = '/api/Course/ActiveQuestionById';
        this.DeActiveQuestionAnswersByIdUrl = '/api/Course/DeActiveQuestionAnswersById';
        this.ActiveQuestionAnswersByIdUrl = '/api/Course/ActiveQuestionAnswersById';
        this.ActiveAnswer1ByIdUrl = '/api/Course/ActiveAnswer1ById';
        this.DeActiveAnswer1ByIdUrl = '/api/Course/DeActiveAnswer1ById';
        this.ActiveAnswer2ByIdUrl = '/api/Course/ActiveAnswer2ById';
        this.DeActiveAnswer2ByIdUrl = '/api/Course/DeActiveAnswer2ById';
        this.ActiveAnswer3ByIdUrl = '/api/Course/ActiveAnswer3ById';
        this.DeActiveAnswer3ByIdUrl = '/api/Course/DeActiveAnswer3ById';
        this.ActiveAnswer4ByIdUrl = '/api/Course/ActiveAnswer4ById';
        this.DeActiveAnswer4ByIdUrl = '/api/Course/DeActiveAnswer4ById';
        this.OnlinePaymentExamUrl = '/api/Course/OnlinePaymentExam';
        this.GetSameCoursesByIdUrl = '/api/Course/GetSameCoursesById';
    }
    // New Courses
    GetHomeNewCoursesByFilter(filter) {
        return this.http.post(this.GetHomeNewCoursesByFilterUrl, filter, { responseType: 'json' });
    }
    GetSameCoursesById(id) {
        return this.http.post(this.GetSameCoursesByIdUrl, id, { responseType: 'json' });
    }
    GetHomeNewCourses(count) {
        return this.http.get(this.GetHomeNewCoursesUrl + '?count=' + count);
    }
    getCurrentHomeNewCourses() {
        return this.homeNewCourses;
    }
    setCurrentHomeNewCourses(courses) {
        this.homeNewCourses.next(courses);
    }
    // Top Viewed Courses
    GetHomeTopViewedCoursesByFilter(filter) {
        return this.http.post(this.GetHomeTopViewedCoursesByFilterUrl, filter, { responseType: 'json' });
    }
    GetHomeTopViewedCourses(count) {
        return this.http.get(this.GetHomeTopViewedCoursesUrl + '?count=' + count);
    }
    getCurrentHomeTopViewedCourses() {
        return this.homeTopViewedCourses;
    }
    setCurrentHomeTopViewedCourses(courses) {
        this.homeTopViewedCourses.next(courses);
    }
    // Off Priced Courses
    GetHomeOffPricedCoursesByFilter(filter) {
        return this.http.post(this.GetHomeOffPricedCoursesByFilterUrl, filter, { responseType: 'json' });
    }
    GetHomeOffPricedCourses(count) {
        return this.http.get(this.GetHomeOffPricedCoursesUrl + '?count=' + count);
    }
    getCurrentHomeOffPricedCourses() {
        return this.homeOffPricedCourses;
    }
    setCurrentHomeOffPricedCourses(courses) {
        this.homeOffPricedCourses.next(courses);
    }
    // Course
    GetCourseExamById(id) {
        return this.http.post(this.GetCourseExamByIdUrl, id, { responseType: 'json' });
    }
    GetPlacementExamById() {
        return this.http.post(this.GetPlacementExamByIdUrl, { responseType: 'json' });
    }
    GetExamById(id) {
        return this.http.post(this.GetExamByIdUrl, id, { responseType: 'json' });
    }
    GetExamDetailById(id) {
        return this.http.post(this.GetExamDetailByIdUrl, id, { responseType: 'json' });
    }
    GetTeacherExamById(id) {
        return this.http.post(this.GetTeacherExamByIdUrl, id, { responseType: 'json' });
    }
    GetAdminExamById(id) {
        return this.http.post(this.GetAdminExamByIdUrl, id, { responseType: 'json' });
    }
    GetExamResultById(id) {
        return this.http.post(this.GetExamResultByIdUrl, id, { responseType: 'json' });
    }
    GetExamByIdForBegin(id) {
        return this.http.post(this.GetExamByIdForBeginUrl, id, { responseType: 'json' });
    }
    SetExamEnd(model) {
        return this.http.post(this.SetExamEndUrl, model, { responseType: 'json' });
    }
    SetExamTestAnswer(model) {
        return this.http.post(this.SetExamTestAnswerUrl, model, { responseType: 'json' });
    }
    AddNoOneTestsIfNotExist() {
        return this.http.post(this.AddNoOneTestsIfNotExistUrl, { responseType: 'json' });
    }
    MakeExam(exam) {
        return this.http.post(this.MakeExamUrl, exam, { responseType: 'json' });
    }
    PhoneMakeExam(exam) {
        return this.http.post(this.MakeExamUrl, exam, { responseType: 'json' });
    }
    PayExam(exam) {
        return this.http.post(this.PayExamUrl, exam, { responseType: 'json' });
    }
    PhonePayExam(exam) {
        return this.http.post(this.PhonePayExamUrl, exam, { responseType: 'json' });
    }
    PayExamByWallet(exam) {
        return this.http.post(this.PayExamByWalletUrl, exam, { responseType: 'json' });
    }
    MakeExamByWallet(exam) {
        return this.http.post(this.MakeExamByWalletUrl, exam, { responseType: 'json' });
    }
    MakeFreeExam(exam) {
        return this.http.post(this.MakeFreeExamUrl, exam, { responseType: 'json' });
    }
    MakeFreePlacementExam(exam) {
        return this.http.post(this.MakeFreePlacementExamUrl, exam, { responseType: 'json' });
    }
    GetCourseById(id) {
        return this.http.get(this.GetCourseByIdUrl + '?id=' + id, { responseType: 'json' });
    }
    GetCourseDetailById(id) {
        return this.http.post(this.GetCourseDetailByIdUrl, id, { responseType: 'json' });
    }
    GetCourseDetailById2(id) {
        return this.http.post(this.GetCourseDetailById2Url, id, { responseType: 'json' });
    }
    GetAdminCourseDetailById(id) {
        return this.http.post(this.GetAdminCourseDetailByIdUrl, id, { responseType: 'json' });
    }
    GetTeacherCourseDetailById(id) {
        return this.http.post(this.GetTeacherCourseDetailByIdUrl, id, { responseType: 'json' });
    }
    GetCourseDetailImagesById(id) {
        return this.http.post(this.GetCourseDetailImagesByIdUrl, id, { responseType: 'json' });
    }
    GetCourseDetailImagesById2(id) {
        return this.http.post(this.GetCourseDetailImagesById2Url, id, { responseType: 'json' });
    }
    GetTeacherCourseDetailImagesById(id) {
        return this.http.post(this.GetTeacherCourseDetailImagesByIdUrl, id, { responseType: 'json' });
    }
    GetAdminCourseDetailImagesById(id) {
        return this.http.post(this.GetAdminCourseDetailImagesByIdUrl, id, { responseType: 'json' });
    }
    GetCourseDetailCategoriesById(id) {
        return this.http.post(this.GetCourseDetailCategoriesByIdUrl, id, { responseType: 'json' });
    }
    GetCourseDetailTeacherById(id) {
        return this.http.post(this.GetCourseDetailTeacherByIdUrl, id, { responseType: 'json' });
    }
    GetCourseDetailVideosById(id) {
        return this.http.post(this.GetCourseDetailVideosByIdUrl, id, { responseType: 'json' });
    }
    GetCourseDetailVideosById2(id) {
        return this.http.post(this.GetCourseDetailVideosById2Url, id, { responseType: 'json' });
    }
    CalcCourses() {
        return this.http.post(this.CalcCoursesUrl, { responseType: 'json' });
    }
    GetAuthCourseDetailVideosById(id) {
        return this.http.post(this.GetAuthCourseDetailVideosByIdUrl, id, { responseType: 'json' });
    }
    GetAuthCourseDetailVideosById2(id) {
        return this.http.post(this.GetAuthCourseDetailVideosById2Url, id, { responseType: 'json' });
    }
    GetAuthCourseDetailVideosById3(id) {
        return this.http.post(this.GetAuthCourseDetailVideosById3Url, id, { responseType: 'json' });
    }
    GetAdminCourseDetailVideosById(id) {
        return this.http.post(this.GetAdminCourseDetailVideosByIdUrl, id, { responseType: 'json' });
    }
    GetTeacherCourseDetailVideosById(id) {
        return this.http.post(this.GetTeacherCourseDetailVideosByIdUrl, id, { responseType: 'json' });
    }
    GetCourseDetailUserLikedById(id) {
        return this.http.post(this.GetCourseDetailUserLikedByIdUrl, id, { responseType: 'json' });
    }
    GetCourseDetailViewedShowById(id) {
        return this.http.post(this.GetCourseDetailViewedShowByIdUrl, id, { responseType: 'json' });
    }
    GetAdminActiveCourseById(id) {
        return this.http.get(this.GetAdminCourseByIdUrl + '?id=' + id, { responseType: 'json' });
    }
    // public GetEditCourseById(id: number): Observable<IResponseResult<ICourseDetailModel>> {
    //   return this.http.get<IResponseResult<ICourseDetailModel>>(this.GetEditCourseByIdUrl + '?id=' + id, { responseType: 'json' });
    // }
    GetCourseEditById(id) {
        return this.http.post(this.GetCourseEditByIdUrl, id, { responseType: 'json' });
    }
    GetCourseByAuth(id) {
        return this.http.get(this.GetCourseByAuthUrl + '?id=' + id, { responseType: 'json' });
    }
    GetDeActiveCourseById(id) {
        return this.http.post(this.GetDeActiveCourseByIdUrl, id, { responseType: 'json' });
    }
    // AddOrUpdateUserViewedCourse
    AddOrUpdateUserViewedCourse(id) {
        return this.http.post(this.AddOrUpdateUserViewedCourseUrl + '?id=' + id, { responseType: 'json' });
    }
    AddOrUpdateTeacherPortion(model) {
        return this.http.post(this.AddOrUpdateTeacherPortionUrl, model, { responseType: 'json' });
    }
    // AddOrUpdateUserLikedCourse
    AddUserCourseRating(model) {
        return this.http.post(this.AddUserCourseRatingUrl, model, { responseType: 'json' });
    }
    CheckUserCourseRating(id) {
        return this.http.post(this.CheckUserCourseRatingUrl + '?id=' + id, { responseType: 'json' });
    }
    AddOrUpdateUserLikedCourse(id, like) {
        return this.http.post(this.AddOrUpdateUserLikedCourseUrl + '?id=' + id + '&like=' + like, { responseType: 'json' });
    }
    DeleteCourseById(id) {
        return this.http.post(this.DeleteCourseByIdUrl, id, { responseType: 'json' });
    }
    DeleteCategoryById(id) {
        return this.http.post(this.DeleteCategoryByIdUrl, id, { responseType: 'json' });
    }
    DeActiveCourseById(id) {
        return this.http.post(this.DeActiveCourseByIdUrl, id, { responseType: 'json' });
    }
    GetCartHistoryDetail(id) {
        return this.http.post(this.GetCartHistoryDetailUrl, id, { responseType: 'json' });
    }
    GetAdminCartHistoryDetail(id) {
        return this.http.post(this.GetAdminCartHistoryDetailUrl, id, { responseType: 'json' });
    }
    DeActiveCourseImageById(id) {
        return this.http.post(this.DeActiveCourseImageByIdUrl, id, { responseType: 'json' });
    }
    DeActiveCourseVideoById(id) {
        return this.http.post(this.DeActiveCourseVideoByIdUrl, id, { responseType: 'json' });
    }
    ActiveCourseImageById(id) {
        return this.http.post(this.ActiveCourseImageByIdUrl, id, { responseType: 'json' });
    }
    ActiveCourseVideoById(id) {
        return this.http.post(this.ActiveCourseVideoByIdUrl, id, { responseType: 'json' });
    }
    ActiveCourseVideoByIdNoShare(id) {
        return this.http.post(this.ActiveCourseVideoByIdNoShareUrl, id, { responseType: 'json' });
    }
    ActiveCourseById(id) {
        return this.http.post(this.ActiveCourseByIdUrl, id, { responseType: 'json' });
    }
    ActiveEditCourseById(id) {
        return this.http.post(this.ActiveEditCourseByIdUrl, id, { responseType: 'json' });
    }
    ActiveCourseByIdNoShare(id) {
        return this.http.post(this.ActiveCourseByIdNoShareUrl, id, { responseType: 'json' });
    }
    GetCourseLikeById(id) {
        return this.http.post(this.GetCourseLikeByIdUrl, id, { responseType: 'json' });
    }
    AddFakeCourseRate(id) {
        return this.http.post(this.AddFakeCourseRateUrl, id, { responseType: 'json' });
    }
    AddFakeCoursesRate() {
        return this.http.post(this.AddFakeCoursesRateUrl, null, { responseType: 'json' });
    }
    AddOrUpdateCourseTag(model) {
        return this.http.post(this.AddOrUpdateCourseTagUrl, model, { responseType: 'json' });
    }
    // Course Category
    GetAllCoursesCategory() {
        return this.http.get(this.GetAllCoursesCategoryUrl);
    }
    GetCoursesByFilter(filter) {
        return this.http.post(this.GetCoursesByFilterUrl, filter, { responseType: 'json' });
    }
    GetExamCoursesByFilter(filter) {
        return this.http.post(this.GetExamCoursesByFilterUrl, filter, { responseType: 'json' });
    }
    GetQuestionCoursesByFilter(filter) {
        return this.http.post(this.GetQuestionCoursesByFilterUrl, filter, { responseType: 'json' });
    }
    GetTeacherQuestionCoursesByFilter(filter) {
        return this.http.post(this.GetTeacherQuestionCoursesByFilterUrl, filter, { responseType: 'json' });
    }
    GetAdminQuestionCoursesByFilter(filter) {
        return this.http.post(this.GetAdminQuestionCoursesByFilterUrl, filter, { responseType: 'json' });
    }
    GetCartHistoryByFilter(filter) {
        return this.http.post(this.GetCartHistoryByFilterUrl, filter, { responseType: 'json' });
    }
    GetCartHistoryByFilterFirstTime(filter) {
        return this.http.post(this.GetCartHistoryByFilterFirstTimeUrl, filter, { responseType: 'json' });
    }
    GetAdminCourseSellCount(courseId) {
        return this.http.post(this.GetAdminCourseSellCountUrl, courseId, { responseType: 'json' });
    }
    GetAdminCourseSellCount2(courseId) {
        return this.http.post(this.GetAdminCourseSellCount2Url, courseId, { responseType: 'json' });
    }
    GetAdminCourseSellPriceCount(courseId) {
        return this.http.post(this.GetAdminCourseSellPriceCountUrl, courseId, { responseType: 'json' });
    }
    GetCourseSellCount(courseId) {
        return this.http.post(this.GetCourseSellCountUrl, courseId, { responseType: 'json' });
    }
    GetCourseSellPriceCount(courseId) {
        return this.http.post(this.GetCourseSellPriceCountUrl, courseId, { responseType: 'json' });
    }
    GetAdminCartHistoryByFilter(filter) {
        return this.http.post(this.GetAdminCartHistoryByFilterUrl, filter, { responseType: 'json' });
    }
    GetAdminCartHistoryByFilter2(filter) {
        return this.http.post(this.GetAdminCartHistoryByFilter2Url, filter, { responseType: 'json' });
    }
    GetAdminCartHistoryByFilterFirstTime(filter) {
        return this.http.post(this.GetAdminCartHistoryByFilterFirstTimeUrl, filter, { responseType: 'json' });
    }
    GetActiveVideoCoursesByFilter(filter) {
        return this.http.post(this.GetActiveVideoCoursesByFilterUrl, filter, { responseType: 'json' });
    }
    GetActiveImageCoursesByFilter(filter) {
        return this.http.post(this.GetActiveImageCoursesByFilterUrl, filter, { responseType: 'json' });
    }
    GetDeActiveImageCoursesByFilter(filter) {
        return this.http.post(this.GetDeActiveImageCoursesByFilterUrl, filter, { responseType: 'json' });
    }
    GetDeActiveVideoCoursesByFilter(filter) {
        return this.http.post(this.GetDeActiveVideoCoursesByFilterUrl, filter, { responseType: 'json' });
    }
    GetUserLikedCourseByFilter(filter) {
        return this.http.post(this.GetUserLikedCourseByFilterUrl, filter, { responseType: 'json' });
    }
    GetUserQuestionsByFilter(filter) {
        return this.http.post(this.GetUserQuestionsByFilterUrl, filter, { responseType: 'json' });
    }
    GetCourseQuestionsByFilter(filter) {
        return this.http.post(this.GetCourseQuestionsByFilterUrl, filter, { responseType: 'json' });
    }
    GetExamQuestionByFilter(filter) {
        return this.http.post(this.GetExamQuestionByFilterUrl, filter, { responseType: 'json' });
    }
    GetAdminExamQuestionByFilter(filter) {
        return this.http.post(this.GetAdminExamQuestionByFilterUrl, filter, { responseType: 'json' });
    }
    GetAdminLevelTestExamQuestionByFilter(filter) {
        return this.http.post(this.GetAdminLevelTestExamQuestionByFilterUrl, filter, { responseType: 'json' });
    }
    GetTeacherExamsByFilter(filter) {
        return this.http.post(this.GetTeacherExamsByFilterUrl, filter, { responseType: 'json' });
    }
    GetAdminExamsByFilter(filter) {
        return this.http.post(this.GetAdminExamsByFilterUrl, filter, { responseType: 'json' });
    }
    GetAdminLevelTestExamsByFilter(filter) {
        return this.http.post(this.GetAdminLevelTestExamsByFilterUrl, filter, { responseType: 'json' });
    }
    AddOrUpdateExamQuestion(model) {
        return this.http.post(this.AddOrUpdateExamQuestionUrl, model, { responseType: 'json' });
    }
    AdminAddOrUpdateExamQuestion(model) {
        return this.http.post(this.AdminAddOrUpdateExamQuestionUrl, model, { responseType: 'json' });
    }
    AdminUpdateExam(model) {
        return this.http.post(this.AdminUpdateExamUrl, model, { responseType: 'json' });
    }
    AdminUpdateExamUserTestQuestionAnswers(model) {
        return this.http.post(this.AdminUpdateExamUserTestQuestionAnswersUrl, model, { responseType: 'json' });
    }
    DeleteExamQuestionById(model) {
        return this.http.post(this.DeleteExamQuestionByIdUrl, model, { responseType: 'json' });
    }
    GetAdminCourseReportsByFilter(filter) {
        return this.http.post(this.GetAdminCourseReportsByFilterUrl, filter, { responseType: 'json' });
    }
    GetAdminCourseCommentReportsByFilter(filter) {
        return this.http.post(this.GetAdminCourseCommentReportsByFilterUrl, filter, { responseType: 'json' });
    }
    GetAdminCourseQuestionReportsByFilter(filter) {
        return this.http.post(this.GetAdminCourseQuestionReportsByFilterUrl, filter, { responseType: 'json' });
    }
    GetTeacherCourseQuestionsByFilter(filter) {
        return this.http.post(this.GetTeacherCourseQuestionsByFilterUrl, filter, { responseType: 'json' });
    }
    GetTeacherCourseCommentsByFilter(filter) {
        return this.http.post(this.GetTeacherCourseCommentsByFilterUrl, filter, { responseType: 'json' });
    }
    GetCourseHiddenQuestionsByFilter(filter) {
        return this.http.post(this.GetCourseHiddenQuestionsByFilterUrl, filter, { responseType: 'json' });
    }
    GetTeacherCourseHiddenQuestionsByFilter(filter) {
        return this.http.post(this.GetTeacherCourseHiddenQuestionsByFilterUrl, filter, { responseType: 'json' });
    }
    GetTeacherCourseHiddenCommentsByFilter(filter) {
        return this.http.post(this.GetTeacherCourseHiddenCommentsByFilterUrl, filter, { responseType: 'json' });
    }
    GetCourseCommentsByFilter(model) {
        return this.http.post(this.GetCourseCommentsByFilterUrl, model, { responseType: 'json' });
    }
    GetAuthCourseCommentsByFilter(model) {
        return this.http.post(this.GetAuthCourseCommentsByFilterUrl, model, { responseType: 'json' });
    }
    GetCourseQuestionsCountById(id) {
        return this.http.post(this.GetCourseQuestionsCountByIdUrl, id, { responseType: 'json' });
    }
    GetTeacherCourseQuestionsCountById(id) {
        return this.http.post(this.GetTeacherCourseQuestionsCountByIdUrl, id, { responseType: 'json' });
    }
    GetAdminCourseReportsListCount() {
        return this.http.post(this.GetAdminCourseReportsListCountUrl, null, { responseType: 'json' });
    }
    GetAdminCourseCommentReportsListCount() {
        return this.http.post(this.GetAdminCourseCommentReportsListCountUrl, null, { responseType: 'json' });
    }
    GetAdminCourseQuestionReportsListCount() {
        return this.http.post(this.GetAdminCourseQuestionReportsListCountUrl, null, { responseType: 'json' });
    }
    GetTeacherCourseCommentsCountById(id) {
        return this.http.post(this.GetTeacherCourseCommentsCountByIdUrl, id, { responseType: 'json' });
    }
    GetCourseHiddenQuestionsCountById(id) {
        return this.http.post(this.GetCourseHiddenQuestionsCountByIdUrl, id, { responseType: 'json' });
    }
    GetTeacherCourseHiddenQuestionsCountById(id) {
        return this.http.post(this.GetTeacherCourseHiddenQuestionsCountByIdUrl, id, { responseType: 'json' });
    }
    GetTeacherCourseHiddenCommentsCountById(id) {
        return this.http.post(this.GetTeacherCourseHiddenCommentsCountByIdUrl, id, { responseType: 'json' });
    }
    GetCourseQuestionsDetailsById(id) {
        return this.http.post(this.GetCourseQuestionsDetailsByIdUrl, id, { responseType: 'json' });
    }
    GetTeacherCourseQuestionsDetailsById(id) {
        return this.http.post(this.GetTeacherCourseQuestionsDetailsByIdUrl, id, { responseType: 'json' });
    }
    GetTeacherCourseCommentsDetailsById(id) {
        return this.http.post(this.GetTeacherCourseCommentsDetailsByIdUrl, id, { responseType: 'json' });
    }
    GetAdminCourseHiddenQuestionsDetailsById(id) {
        return this.http.post(this.GetAdminCourseHiddenQuestionsDetailsByIdUrl, id, { responseType: 'json' });
    }
    GetAdminCourseHiddenCommentsDetailsById(id) {
        return this.http.post(this.GetAdminCourseHiddenCommentsDetailsByIdUrl, id, { responseType: 'json' });
    }
    GetCourseHiddenQuestionsDetailsById(id) {
        return this.http.post(this.GetCourseHiddenQuestionsDetailsByIdUrl, id, { responseType: 'json' });
    }
    GetTeacherCourseHiddenQuestionsDetailsById(id) {
        return this.http.post(this.GetTeacherCourseHiddenQuestionsDetailsByIdUrl, id, { responseType: 'json' });
    }
    GetAdminCourseReportDetailsById(id) {
        return this.http.post(this.GetAdminCourseReportDetailsByIdUrl, id, { responseType: 'json' });
    }
    GetAdminCourseCommentReportDetailsById(id) {
        return this.http.post(this.GetAdminCourseCommentReportDetailsByIdUrl, id, { responseType: 'json' });
    }
    GetAdminCourseQuestionReportDetailsById(id) {
        return this.http.post(this.GetAdminCourseQuestionReportDetailsByIdUrl, id, { responseType: 'json' });
    }
    GetTeacherCourseHiddenCommentsDetailsById(id) {
        return this.http.post(this.GetTeacherCourseHiddenCommentsDetailsByIdUrl, id, { responseType: 'json' });
    }
    GetAdminCourseQuestionsDetailsById(id) {
        return this.http.post(this.GetAdminCourseQuestionsDetailsByIdUrl, id, { responseType: 'json' });
    }
    GetAdminCourseCommentsDetailsById(id) {
        return this.http.post(this.GetAdminCourseCommentsDetailsByIdUrl, id, { responseType: 'json' });
    }
    GetAdminUnSeenCourseCommentsList() {
        return this.http.post(this.GetAdminUnSeenCourseCommentsListUrl, null, { responseType: 'json' });
    }
    GetTeacherUnSeenCourseCommentsList() {
        return this.http.post(this.GetTeacherUnSeenCourseCommentsListUrl, null, { responseType: 'json' });
    }
    GetAdminUnSeenCourseQuestionsList() {
        return this.http.post(this.GetAdminUnSeenCourseQuestionsListUrl, null, { responseType: 'json' });
    }
    GetAdminUnSeenCourseReportsList() {
        return this.http.post(this.GetAdminUnSeenCourseReportsListUrl, null, { responseType: 'json' });
    }
    GetAdminUnSeenCourseCommentReportsList() {
        return this.http.post(this.GetAdminUnSeenCourseCommentReportsListUrl, null, { responseType: 'json' });
    }
    GetAdminUnSeenCourseQuestionReportsList() {
        return this.http.post(this.GetAdminUnSeenCourseQuestionReportsListUrl, null, { responseType: 'json' });
    }
    SendAdminUnSeenCourseCommentsList() {
        return this.http.post(this.SendAdminUnSeenCourseCommentsListUrl, null, { responseType: 'json' });
    }
    SendAdminUnSeenCourseQuestionsList() {
        return this.http.post(this.SendAdminUnSeenCourseQuestionsListUrl, null, { responseType: 'json' });
    }
    GetTeacherUnSeenCourseQuestionsList() {
        return this.http.post(this.GetTeacherUnSeenCourseQuestionsListUrl, null, { responseType: 'json' });
    }
    ActiveCourseQuestion(id) {
        return this.http.post(this.ActiveCourseQuestionUrl, id, { responseType: 'json' });
    }
    ActiveCourseComment(id) {
        return this.http.post(this.ActiveCourseCommentUrl, id, { responseType: 'json' });
    }
    DeActiveCourseQuestion(id) {
        return this.http.post(this.DeActiveCourseQuestionUrl, id, { responseType: 'json' });
    }
    OpenQuestion(id) {
        return this.http.post(this.OpenQuestionUrl, id, { responseType: 'json' });
    }
    CloseQuestion(id) {
        return this.http.post(this.CloseQuestionUrl, id, { responseType: 'json' });
    }
    AdminVerifyCourseReport(id) {
        return this.http.post(this.AdminVerifyCourseReportUrl, id, { responseType: 'json' });
    }
    AdminDeVerifyCourseReport(id) {
        return this.http.post(this.AdminDeVerifyCourseReportUrl, id, { responseType: 'json' });
    }
    AdminVerifyCourseCommentReport(id) {
        return this.http.post(this.AdminVerifyCourseCommentReportUrl, id, { responseType: 'json' });
    }
    AdminDeVerifyCourseCommentReport(id) {
        return this.http.post(this.AdminDeVerifyCourseCommentReportUrl, id, { responseType: 'json' });
    }
    AdminVerifyCourseQuestionReport(id) {
        return this.http.post(this.AdminVerifyCourseQuestionReportUrl, id, { responseType: 'json' });
    }
    AdminDeVerifyCourseQuestionReport(id) {
        return this.http.post(this.AdminDeVerifyCourseQuestionReportUrl, id, { responseType: 'json' });
    }
    UnSetBestQuestionAnswer(id) {
        return this.http.post(this.UnSetBestQuestionAnswerUrl, id, { responseType: 'json' });
    }
    SetBestQuestionAnswer(id) {
        return this.http.post(this.SetBestQuestionAnswerUrl, id, { responseType: 'json' });
    }
    DeActiveCourseComment(id) {
        return this.http.post(this.DeActiveCourseCommentUrl, id, { responseType: 'json' });
    }
    DeleteCourseQuestion(id) {
        return this.http.post(this.DeleteCourseQuestionUrl, id, { responseType: 'json' });
    }
    DeleteCourseComment(id) {
        return this.http.post(this.DeleteCourseCommentUrl, id, { responseType: 'json' });
    }
    SetCourseQuestion(model) {
        return this.http.post(this.SetCourseQuestionUrl, model, { responseType: 'json' });
    }
    ReplyCommentById(model) {
        return this.http.post(this.ReplyCommentByIdUrl, model, { responseType: 'json' });
    }
    ReportComment(model) {
        return this.http.post(this.ReportCommentUrl, model, { responseType: 'json' });
    }
    ReportQuestion(model) {
        return this.http.post(this.ReportQuestionUrl, model, { responseType: 'json' });
    }
    ReportCourse(model) {
        return this.http.post(this.ReportCourseUrl, model, { responseType: 'json' });
    }
    onSendComment(model) {
        return this.http.post(this.onSendCommentUrl, model, { responseType: 'json' });
    }
    EditCourseQuestion(model) {
        return this.http.post(this.EditCourseQuestionUrl, model, { responseType: 'json' });
    }
    EditCourseComment(model) {
        return this.http.post(this.EditCourseCommentUrl, model, { responseType: 'json' });
    }
    SetTeacherCourseQuestion(model) {
        return this.http.post(this.SetTeacherCourseQuestionUrl, model, { responseType: 'json' });
    }
    SetTeacherCourseComment(model) {
        return this.http.post(this.SetTeacherCourseCommentUrl, model, { responseType: 'json' });
    }
    AdminGetUserLikedCourseByFilter(filter) {
        return this.http.post(this.AdminGetUserLikedCourseByFilterUrl, filter, { responseType: 'json' });
    }
    GetUserExamsByFilter(filter) {
        return this.http.post(this.GetUserExamsByFilterUrl, filter, { responseType: 'json' });
    }
    GetUserPlacementExamsByFilter(filter) {
        return this.http.post(this.GetUserPlacementExamsByFilterUrl, filter, { responseType: 'json' });
    }
    GetUserDegreesByFilter(filter) {
        return this.http.post(this.GetUserDegreesByFilterUrl, filter, { responseType: 'json' });
    }
    GetDeActiveCoursesByFilter(filter) {
        return this.http.post(this.GetDeActiveCoursesByFilterUrl, filter, { responseType: 'json' });
    }
    GetEditCoursesByFilter(filter) {
        return this.http.post(this.GetEditCoursesByFilterUrl, filter, { responseType: 'json' });
    }
    GetTeacherCoursesByFilter(filter) {
        return this.http.post(this.GetTeacherCoursesByFilterUrl, filter, { responseType: 'json' });
    }
    GetTeacherCoursesStudentByFilter(filter) {
        return this.http.post(this.GetTeacherCoursesStudentByFilterUrl, filter, { responseType: 'json' });
    }
    GetAdminCoursesByFilter(filter) {
        return this.http.post(this.GetAdminCoursesByFilterUrl, filter, { responseType: 'json' });
    }
    GetAdminCoursesStudentByFilter(filter) {
        return this.http.post(this.GetAdminCoursesStudentByFilterUrl, filter, { responseType: 'json' });
    }
    GetUserCoursesId() {
        return this.http.get(this.GetUserCoursesIdUrl, { responseType: 'json' });
    }
    GetUserTunerPlusAccess() {
        return this.http.get(this.GetUserTunerPlusAccessUrl, { responseType: 'json' });
    }
    CreateExamDegree(id) {
        let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
        header = header.set('Accept', 'application/pdf');
        return this.http.post(this.CreateExamDegreeUrl, id, { headers: header, responseType: 'blob' });
    }
    CreateExamDegreeAsPng(id) {
        return this.http.post(this.CreateExamDegreeAsPngUrl, id, { responseType: 'blob' });
    }
    AdminCreateExamDegreeAsJpeg(id) {
        return this.http.post(this.AdminCreateExamDegreeAsJpegUrl, id, { responseType: 'blob' });
    }
    CreateExamDegreeAsJpeg(id) {
        return this.http.post(this.CreateExamDegreeAsJpegUrl, id, { responseType: 'blob' });
    }
    CreateExamDegreeAsJpeg2(id) {
        return this.http.post(this.CreateExamDegreeAsJpeg2Url, id, { responseType: 'json' });
    }
    GetTeacherPortion(id) {
        return this.http.post(this.GetTeacherPortionUrl, id, { responseType: 'json' });
    }
    GetUserCoursesName() {
        return this.http.get(this.GetUserCoursesNameUrl, { responseType: 'json' });
    }
    GetUserLikedCourse() {
        return this.http.get(this.GetUserLikedCourseUrl, { responseType: 'json' });
    }
    AdminGetUserCoursesName(id) {
        return this.http.post(this.AdminGetUserCoursesNameUrl, id, { responseType: 'json' });
    }
    RemoveAllTeacherCourseOffPrice() {
        return this.http.post(this.RemoveAllTeacherCourseOffPriceUrl, null, { responseType: 'json' });
    }
    AddOrUpdateCourse(model) {
        return this.http.post(this.AddCourseUrl, model, { responseType: 'json' });
    }
    UpdateCoursePriceByPercent(model) {
        return this.http.post(this.UpdateCoursePriceByPercentUrl, model, { responseType: 'json' });
    }
    UpdateCoursePriceByPercent2(model) {
        return this.http.post(this.UpdateCoursePriceByPercent2Url, model, { responseType: 'json' });
    }
    AdminUpdateCourse(model) {
        return this.http.post(this.AdminUpdateCourseUrl, model, { responseType: 'json' });
    }
    AddOrUpdateImage(model) {
        return this.http.post(this.AddOrUpdateImageUrl, model, { responseType: 'json' });
    }
    AddOrUpdateVideo(model) {
        return this.http.post(this.AddOrUpdateVideoUrl, model, { responseType: 'json' });
    }
    UpdateVideoOrder(model) {
        return this.http.post(this.UpdateVideoOrderUrl, model, { responseType: 'json' });
    }
    AdminUpdateVideoOrder(model) {
        return this.http.post(this.AdminUpdateVideoOrderUrl, model, { responseType: 'json' });
    }
    AdminAddOrUpdateVideo(model) {
        return this.http.post(this.AdminAddOrUpdateVideoUrl, model, { responseType: 'json' });
    }
    AdminAddOrUpdateUserVoice(model) {
        return this.http.post(this.AdminAddOrUpdateUserVoiceUrl, model, { responseType: 'json' });
    }
    AdminAddOrUpdateImage(model) {
        return this.http.post(this.AdminAddOrUpdateImageUrl, model, { responseType: 'json' });
    }
    DeleteImage(id) {
        return this.http.post(this.DeleteImageUrl, id, { responseType: 'json' });
    }
    DeleteVideo(id) {
        return this.http.post(this.DeleteVideoUrl, id, { responseType: 'json' });
    }
    AdminDeleteVideo(id) {
        return this.http.post(this.AdminDeleteVideoUrl, id, { responseType: 'json' });
    }
    AdminDeleteUserVoice(id) {
        return this.http.post(this.AdminDeleteUserVoiceUrl, id, { responseType: 'json' });
    }
    AdminDeleteImage(id) {
        return this.http.post(this.AdminDeleteImageUrl, id, { responseType: 'json' });
    }
    AddOrUpdateCourseCategory(model) {
        return this.http.post(this.AddOrUpdateCourseCategoryUrl, model, { responseType: 'json' });
    }
    GetCourseTags(id) {
        return this.http.post(this.GetCourseTagsUrl, id, { responseType: 'json' });
    }
    GetCourseUserVoice(id) {
        return this.http.post(this.GetCourseUserVoiceUrl, id, { responseType: 'json' });
    }
    GetHomeCourseUserVoice() {
        return this.http.post(this.GetHomeCourseUserVoiceUrl, { responseType: 'json' });
    }
    GetAdminCourseUserVoices(id) {
        return this.http.post(this.GetAdminCourseUserVoicesUrl, id, { responseType: 'json' });
    }
    RemoveCourseTag(id) {
        return this.http.post(this.RemoveCourseTagUrl, id, { responseType: 'json' });
    }
    RemoveCourseToUser(model) {
        return this.http.post(this.RemoveCourseToUserUrl, model, { responseType: 'json' });
    }
    AddCourseToUser(model) {
        return this.http.post(this.AddCourseToUserUrl, model, { responseType: 'json' });
    }
    DeActiveQuestionById(id) {
        return this.http.post(this.DeActiveQuestionByIdUrl, id, { responseType: 'json' });
    }
    ActiveQuestionById(id) {
        return this.http.post(this.ActiveQuestionByIdUrl, id, { responseType: 'json' });
    }
    DeActiveQuestionAnswersById(id) {
        return this.http.post(this.DeActiveQuestionAnswersByIdUrl, id, { responseType: 'json' });
    }
    ActiveQuestionAnswersById(id) {
        return this.http.post(this.ActiveQuestionAnswersByIdUrl, id, { responseType: 'json' });
    }
    ActiveAnswer1ById(id) {
        return this.http.post(this.ActiveAnswer1ByIdUrl, id, { responseType: 'json' });
    }
    DeActiveAnswer1ById(id) {
        return this.http.post(this.DeActiveAnswer1ByIdUrl, id, { responseType: 'json' });
    }
    ActiveAnswer2ById(id) {
        return this.http.post(this.ActiveAnswer2ByIdUrl, id, { responseType: 'json' });
    }
    DeActiveAnswer2ById(id) {
        return this.http.post(this.DeActiveAnswer2ByIdUrl, id, { responseType: 'json' });
    }
    ActiveAnswer3ById(id) {
        return this.http.post(this.ActiveAnswer3ByIdUrl, id, { responseType: 'json' });
    }
    DeActiveAnswer3ById(id) {
        return this.http.post(this.DeActiveAnswer3ByIdUrl, id, { responseType: 'json' });
    }
    ActiveAnswer4ById(id) {
        return this.http.post(this.ActiveAnswer4ByIdUrl, id, { responseType: 'json' });
    }
    DeActiveAnswer4ById(id) {
        return this.http.post(this.DeActiveAnswer4ByIdUrl, id, { responseType: 'json' });
    }
    OnlinePaymentExam(model) {
        return this.http.post(this.OnlinePaymentExamUrl, model, { responseType: 'json' });
    }
};
CourseService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
CourseService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], CourseService);



/***/ }),

/***/ 22773:
/*!*****************************************************!*\
  !*** ./src/app/data/service/order/order.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderService": () => (/* binding */ OrderService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);

/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/naming-convention */


let OrderService = class OrderService {
    constructor(http) {
        this.http = http;
        this.GetUserCartUrl = '/api/Order/GetUserCart';
        this.GetUserCartDetailUrl = '/api/Order/GetUserCartDetail';
        this.GetUserCartDetail2Url = '/api/Order/GetUserCartDetail2';
        this.AddOffPriceUrl = '/api/Order/AddOffPrice';
        this.RemoveOffPriceUrl = '/api/Order/RemoveOffPrice';
        this.RemoveCourseByIdUrl = '/api/Order/RemoveCourseById';
        this.RemoveProductByIdUrl = '/api/Order/RemoveProductById';
        this.RemoveCourseById2Url = '/api/Order/RemoveCourseById2';
        this.RemoveProductByModelUrl = '/api/Order/RemoveProductByModel';
        this.AddCourseByIdUrl = '/api/Order/AddCourseById';
        this.AddProductByIdUrl = '/api/Order/AddProductById';
        this.AddMoreProductByIdUrl = '/api/Order/AddMoreProductById';
        this.ChangeProductCartCountUrl = '/api/Order/ChangeProductCartCount';
        this.PayCartByWalletUrl = '/api/Order/PayCartByWallet';
        this.GetWalletChargeHistoryUrl = '/api/Order/GetWalletChargeHistory';
        this.GetWalletChargeHistoryByFilterUrl = '/api/Order/GetWalletChargeHistoryByFilter';
        this.GetExamPayHistoryByFilterUrl = '/api/Order/GetExamPayHistoryByFilter';
        this.GetAdminWalletChargeHistoryByFilterUrl = '/api/Order/GetAdminWalletChargeHistoryByFilter';
        this.GetPayHistoryByFilterUrl = '/api/Order/GetPayHistoryByFilter';
        this.GetPointHistoryByFilterUrl = '/api/Order/GetPointHistoryByFilter';
        this.GetSellerCartByFilterUrl = '/api/Order/GetSellerCartByFilter';
        this.CreateOrderAsJpegUrl = '/api/Order/CreateOrderAsJpeg';
        this.GetSellerCartDetailByIdUrl = '/api/Order/GetSellerCartDetailById';
        this.SetProductCartSeenUrl = '/api/Order/SetProductCartSeen';
        this.GetSellerUnSeenCartListUrl = '/api/Order/GetSellerUnSeenCartList';
        this.GetCartHistoryByFilterUrl = '/api/Order/GetCartHistoryByFilter';
        this.GetAdminPayHistoryByFilterUrl = '/api/Order/GetAdminPayHistoryByFilter';
        this.GetAdminCartHistoryByFilterUrl = '/api/Order/GetAdminCartHistoryByFilter';
        this.GetAdminCartHistoryByFilter2Url = '/api/Order/GetAdminCartHistoryByFilter2';
        this.GetAdminExamPayHistoryByFilterUrl = '/api/Order/GetAdminExamPayHistoryByFilter';
        this.GetAdminUserPointHistoryByFilterUrl = '/api/Order/GetAdminUserPointHistoryByFilter';
        this.GetAdminUserPassHistoryByFilterUrl = '/api/Order/GetAdminUserPassHistoryByFilter';
        this.GetUserCoursePayHistoryUrl = '/api/Order/GetUserCoursePayHistory';
        this.GetUserWalletChargeHistoryUrl = '/api/Order/GetUserWalletChargeHistory';
        this.GetUserExamPayHistoryUrl = '/api/Order/GetUserExamPayHistory';
        this.GetUserCoursePayHistory2Url = '/api/Order/GetUserCoursePayHistory2';
        this.GetUserWalletChargeHistory2Url = '/api/Order/GetUserWalletChargeHistory2';
        this.GetUserExamPayHistory2Url = '/api/Order/GetUserExamPayHistory2';
        this.GetAdminPayHistoryDetailByIdUrl = '/api/Order/GetAdminPayHistoryDetailById';
        this.GetAdminCartHistoryDetailByIdUrl = '/api/Order/GetAdminCartHistoryDetailById';
        this.CheckUnVerifyWalletChargesUrl = '/api/Order/CheckUnVerifyWalletCharges';
        this.CheckUnVerifyPaymentsUrl = '/api/Order/CheckUnVerifyPayments';
        this.PayCartByBankUrl = '/api/Order/PayCartByBank';
        this.PayAgainByBankUrl = '/api/Order/PayAgainByBank';
        this.PayAgainByWalletUrl = '/api/Order/PayAgainByWallet';
        this.PayAgainByBankPhoneUrl = '/api/Order/PayAgainByBankPhone';
        this.PhonePayCartByBankUrl = '/api/Order/PhonePayCartByBank';
        this.ChargeWalletUrl = '/api/Order/ChargeWallet';
        this.ChargeWalletPhoneUrl = '/api/Order/ChargeWalletPhone';
        this.CallPayPhoneUrl = '/api/Order/CallPayPhone';
        this.CallPayUrl = '/api/Order/CallPay';
        this.OnlinePaymentUrl = '/api/Order/OnlinePayment';
        this.OnlinePaymentPayAgainUrl = '/api/Order/OnlinePaymentPayAgain';
        this.OnlinePaymentWalletUrl = '/api/Order/OnlinePaymentWallet';
        this.AddOffCodeToCartUrl = '/api/Order/AddOffCodeToCart';
        this.ChangeProductCartStatusUrl = '/api/Order/ChangeProductCartStatus';
        this.GetUserAgainPayHistoryUrl = '/api/Order/GetUserAgainPayHistory';
        this.GetUserAgainPayHistory2Url = '/api/Order/GetUserAgainPayHistory2';
        this.GetUserAgainPayHistory3Url = '/api/Order/GetUserAgainPayHistory3';
        this.GetUserExamPayHistory3Url = '/api/Order/GetUserExamPayHistory3';
        this.GetUserCoursePayHistory3Url = '/api/Order/GetUserCoursePayHistory3';
        this.GetUserCoursePayHistory4Url = '/api/Order/GetUserCoursePayHistory4';
        this.GetUserWalletChargeHistory3Url = '/api/Order/GetUserWalletChargeHistory3';
    }
    GetUserCart() {
        return this.http.post(this.GetUserCartUrl, null, { responseType: 'json' });
    }
    GetUserCartDetail() {
        return this.http.post(this.GetUserCartDetailUrl, null, { responseType: 'json' });
    }
    GetUserCartDetail2() {
        return this.http.post(this.GetUserCartDetail2Url, null, { responseType: 'json' });
    }
    ChangeProductCartStatus(model) {
        return this.http.post(this.ChangeProductCartStatusUrl, model, { responseType: 'json' });
    }
    AddOffPrice(model) {
        return this.http.post(this.AddOffPriceUrl, { OffCode: model }, { responseType: 'json' });
    }
    AddOffCodeToCart(model) {
        // tslint:disable-next-line: max-line-length
        return this.http.post(this.AddOffCodeToCartUrl, { OffCode: model }, { responseType: 'json' });
    }
    CreateOrderAsJpeg(id) {
        return this.http.post(this.CreateOrderAsJpegUrl, id, { responseType: 'blob' });
    }
    RemoveOffPrice() {
        return this.http.post(this.RemoveOffPriceUrl, null, { responseType: 'json' });
    }
    CheckUnVerifyWalletCharges() {
        return this.http.post(this.CheckUnVerifyWalletChargesUrl, null, { responseType: 'json' });
    }
    CheckUnVerifyPayments() {
        return this.http.post(this.CheckUnVerifyPaymentsUrl, null, { responseType: 'json' });
    }
    RemoveCourseById(id) {
        return this.http.post(this.RemoveCourseByIdUrl, id, { responseType: 'json' });
    }
    RemoveProductById(id) {
        return this.http.post(this.RemoveProductByIdUrl, id, { responseType: 'json' });
    }
    RemoveCourseById2(id) {
        return this.http.post(this.RemoveCourseById2Url, id, { responseType: 'json' });
    }
    RemoveProductByModel(model) {
        return this.http.post(this.RemoveProductByModelUrl, model, { responseType: 'json' });
    }
    GetWalletChargeHistory() {
        return this.http.post(this.GetWalletChargeHistoryUrl, { responseType: 'json' });
    }
    GetWalletChargeHistoryByFilter(model) {
        return this.
            http.post(this.GetWalletChargeHistoryByFilterUrl, model, { responseType: 'json' });
    }
    GetExamPayHistoryByFilter(model) {
        return this.
            http.post(this.GetExamPayHistoryByFilterUrl, model, { responseType: 'json' });
    }
    GetAdminWalletChargeHistoryByFilter(model) {
        return this.
            http.post(this.GetAdminWalletChargeHistoryByFilterUrl, model, { responseType: 'json' });
    }
    GetPayHistoryByFilter(model) {
        return this.
            http.post(this.GetPayHistoryByFilterUrl, model, { responseType: 'json' });
    }
    GetPointHistoryByFilter(model) {
        return this.
            http.post(this.GetPointHistoryByFilterUrl, model, { responseType: 'json' });
    }
    GetSellerCartByFilter(model) {
        return this.
            http.post(this.GetSellerCartByFilterUrl, model, { responseType: 'json' });
    }
    GetSellerCartDetailById(id) {
        return this.
            http.post(this.GetSellerCartDetailByIdUrl, id, { responseType: 'json' });
    }
    SetProductCartSeen(id) {
        return this.
            http.post(this.SetProductCartSeenUrl, id, { responseType: 'json' });
    }
    GetSellerUnSeenCartList() {
        return this.
            http.post(this.GetSellerUnSeenCartListUrl, null, { responseType: 'json' });
    }
    GetCartHistoryByFilter(model) {
        return this.
            http.post(this.GetCartHistoryByFilterUrl, model, { responseType: 'json' });
    }
    GetAdminPayHistoryByFilter(model) {
        return this.
            http.post(this.GetAdminPayHistoryByFilterUrl, model, { responseType: 'json' });
    }
    GetAdminCartHistoryByFilter(model) {
        return this.
            http.post(this.GetAdminCartHistoryByFilterUrl, model, { responseType: 'json' });
    }
    GetAdminCartHistoryByFilter2(model) {
        return this.
            http.post(this.GetAdminCartHistoryByFilter2Url, model, { responseType: 'json' });
    }
    GetAdminExamPayHistoryByFilter(model) {
        return this.
            http.post(this.GetAdminExamPayHistoryByFilterUrl, model, { responseType: 'json' });
    }
    GetAdminUserPointHistoryByFilter(model) {
        return this.
            http.post(this.GetAdminUserPointHistoryByFilterUrl, model, { responseType: 'json' });
    }
    GetAdminUserPassHistoryByFilter(model) {
        return this.
            http.post(this.GetAdminUserPassHistoryByFilterUrl, model, { responseType: 'json' });
    }
    GetUserCoursePayHistory(model) {
        return this.
            http.post(this.GetUserCoursePayHistoryUrl, model, { responseType: 'json' });
    }
    GetUserAgainPayHistory(model) {
        return this.
            http.post(this.GetUserAgainPayHistoryUrl, model, { responseType: 'json' });
    }
    GetUserAgainPayHistory2(model) {
        return this.
            http.post(this.GetUserAgainPayHistory2Url, model, { responseType: 'json' });
    }
    GetUserAgainPayHistory3(model) {
        return this.
            http.post(this.GetUserAgainPayHistory3Url, model, { responseType: 'json' });
    }
    GetUserWalletChargeHistory(model) {
        return this.
            http.post(this.GetUserWalletChargeHistoryUrl, model, { responseType: 'json' });
    }
    GetUserExamPayHistory(model) {
        return this.
            http.post(this.GetUserExamPayHistoryUrl, model, { responseType: 'json' });
    }
    GetUserCoursePayHistory2(model) {
        return this.
            http.post(this.GetUserCoursePayHistory2Url, model, { responseType: 'json' });
    }
    GetUserCoursePayHistory3(model) {
        return this.
            http.post(this.GetUserCoursePayHistory3Url, model, { responseType: 'json' });
    }
    GetUserCoursePayHistory4(model) {
        return this.
            http.post(this.GetUserCoursePayHistory4Url, model, { responseType: 'json' });
    }
    GetUserWalletChargeHistory2(model) {
        return this.
            http.post(this.GetUserWalletChargeHistory2Url, model, { responseType: 'json' });
    }
    GetUserWalletChargeHistory3(model) {
        return this.
            http.post(this.GetUserWalletChargeHistory3Url, model, { responseType: 'json' });
    }
    GetUserExamPayHistory2(model) {
        return this.
            http.post(this.GetUserExamPayHistory2Url, model, { responseType: 'json' });
    }
    GetUserExamPayHistory3(model) {
        return this.
            http.post(this.GetUserExamPayHistory3Url, model, { responseType: 'json' });
    }
    GetAdminPayHistoryDetailById(id) {
        return this.
            http.post(this.GetAdminPayHistoryDetailByIdUrl, id, { responseType: 'json' });
    }
    GetAdminCartHistoryDetailById(id) {
        return this.
            http.post(this.GetAdminCartHistoryDetailByIdUrl, id, { responseType: 'json' });
    }
    AddCourseById(id) {
        return this.http.post(this.AddCourseByIdUrl, id, { responseType: 'json' });
    }
    AddProductById(model) {
        return this.http.post(this.AddProductByIdUrl, model, { responseType: 'json' });
    }
    AddMoreProductById(model) {
        return this.http.post(this.AddMoreProductByIdUrl, model, { responseType: 'json' });
    }
    ChangeProductCartCount(model) {
        return this.http.post(this.ChangeProductCartCountUrl, model, { responseType: 'json' });
    }
    PayCartByWallet(id) {
        return this.http.post(this.PayCartByWalletUrl, id, { responseType: 'json' });
    }
    PayCartByBank(id) {
        return this.http.post(this.PayCartByBankUrl, id, { responseType: 'json' });
    }
    PayAgainByWallet(id) {
        return this.http.post(this.PayAgainByWalletUrl, id, { responseType: 'json' });
    }
    PayAgainByBank(id) {
        return this.http.post(this.PayAgainByBankUrl, id, { responseType: 'json' });
    }
    PayAgainByBankPhone(id) {
        return this.http.post(this.PayAgainByBankPhoneUrl, id, { responseType: 'json' });
    }
    PhonePayCartByBank(id) {
        return this.http.post(this.PhonePayCartByBankUrl, id, { responseType: 'json' });
    }
    ChargeWallet(price) {
        return this.http.post(this.ChargeWalletUrl, price, { responseType: 'json' });
    }
    ChargeWalletPhone(price) {
        return this.http.post(this.ChargeWalletPhoneUrl, price, { responseType: 'json' });
    }
    CallPayPhone(model) {
        return this.http.post(this.CallPayPhoneUrl, model, { responseType: 'json' });
    }
    CallPay(model) {
        return this.http.post(this.CallPayUrl, model, { responseType: 'json' });
    }
    OnlinePayment(model) {
        return this.http.post(this.OnlinePaymentUrl, model, { responseType: 'json' });
    }
    OnlinePaymentPayAgain(model) {
        return this.http.post(this.OnlinePaymentPayAgainUrl, model, { responseType: 'json' });
    }
    OnlinePaymentWallet(model) {
        return this.http.post(this.OnlinePaymentWalletUrl, model, { responseType: 'json' });
    }
};
OrderService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
OrderService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], OrderService);



/***/ }),

/***/ 60007:
/*!*********************************************************!*\
  !*** ./src/app/data/service/product/product.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductService": () => (/* binding */ ProductService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 84505);

/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/naming-convention */



let ProductService = class ProductService {
    constructor(http) {
        this.http = http;
        this.homeTopProducts = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
        this.homeTopViewedProducts = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
        this.homeSpecialProducts = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
        this.homeOffPricedProducts = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
        this.homeNewProducts = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
        this.GetHomeTopProductsUrl = '/api/Product/GetHomeTopProducts';
        this.AdminDeleteProductImageUrl = '/api/Product/AdminDeleteProductImage';
        this.DeleteProductByIdUrl = '/api/Product/DeleteProductById';
        this.GetHomeTopProductsByFilterUrl = '/api/Product/GetHomeTopProductsByFilter';
        this.GetAdminProductDetailImagesByIdUrl = '/api/Product/GetAdminProductDetailImagesById';
        this.AdminAddOrUpdateProductImageUrl = '/api/Product/AdminAddOrUpdateProductImage';
        this.GetHomeTopViewedProductsUrl = '/api/Product/GetHomeTopViewedProducts';
        this.GetSellerProductDetailVideosByIdUrl = '/api/Product/GetSellerProductDetailVideosById';
        this.GetSellerProductDetailDesignsByIdUrl = '/api/Product/GetSellerProductDetailDesignsById';
        this.GetSellerProductDetailDesignsEditByIdUrl = '/api/Product/GetSellerProductDetailDesignsEditById';
        this.GetAdminProductDetailDesignsEditByIdUrl = '/api/Product/GetAdminProductDetailDesignsEditById';
        this.GetAdminProductDetailDesignsByIdUrl = '/api/Product/GetAdminProductDetailDesignsById';
        this.GetAdminFurtherDetailByIdUrl = '/api/Product/GetAdminFurtherDetailById';
        this.GetAdminFurtherDetailEditByIdUrl = '/api/Product/GetAdminFurtherDetailEditById';
        this.GetSellerFurtherDetailEditByIdUrl = '/api/Product/GetSellerFurtherDetailEditById';
        this.GetSellerFurtherDetailByIdUrlUrl = '/api/Product/GetSellerFurtherDetailByIdUrld';
        this.AddOrUpdateProductCategoryUrl = '/api/Product/AddOrUpdateProductCategory';
        this.DeleteCategoryByIdUrl = '/api/Product/DeleteCategoryById';
        this.GetProductLikeByIdUrl = '/api/Product/GetProductLikeById';
        this.AddFakeProductRateUrl = '/api/Product/AddFakeProductRate';
        this.AddFakeProductsRateUrl = '/api/Product/AddFakeProductsRate';
        this.GetDeActiveProductsByFilterUrl = '/api/Product/GetDeActiveProductsByFilter';
        this.GetAdminActiveProductByIdUrl = '/api/Product/GetAdminActiveProductById';
        this.GetDeActiveProductByIdUrl = '/api/Product/GetDeActiveProductById';
        this.DeActiveProductVideoByIdUrl = '/api/Product/DeActiveProductVideoById';
        this.GetEditProductsByFilterUrl = '/api/Product/GetEditProductsByFilter';
        this.ActiveEditProductByIdUrl = '/api/Product/ActiveEditProductById';
        this.ActiveProductVideoByIdUrl = '/api/Product/ActiveProductVideoById';
        this.ActiveProductVideoByIdNoShareUrl = '/api/Product/ActiveProductVideoByIdNoShare';
        this.ActiveProductByIdUrl = '/api/Product/ActiveProductById';
        this.ActiveProductByIdNoShareUrl = '/api/Product/ActiveProductByIdNoShare';
        this.DeActiveProductByIdUrl = '/api/Product/DeActiveProductById';
        this.RemoveProductTagUrl = '/api/Product/RemoveProductTag';
        this.AddOrUpdateProductTagUrl = '/api/Product/AddOrUpdateProductTag';
        this.GetProductTagsUrl = '/api/Product/GetProductTags';
        this.AdminUpdateProductUrl = '/api/Product/AdminUpdateProduct';
        this.GetActiveVideoProductsByFilterUrl = '/api/Product/GetActiveVideoProductsByFilter';
        this.GetDeActiveVideoProductsByFilterUrl = '/api/Product/GetDeActiveVideoProductsByFilter';
        this.GetEditProductByIdUrl = '/api/Product/GetEditProductById';
        this.GetHomeTopViewedProductsByFilterUrl = '/api/Product/GetHomeTopViewedProductsByFilter';
        this.GetHomeSpecialProductsUrl = '/api/Product/GetHomeSpecialProducts';
        this.GetSellerProductDetailImagesByIdUrl = '/api/Product/GetSellerProductDetailImagesById';
        this.GetSellerProductDetailByIdUrl = '/api/Product/GetSellerProductDetailById';
        this.GetAdminProductsByFilterUrl = '/api/Product/GetAdminProductsByFilter';
        this.GetHomeSpecialProductsByFilterUrl = '/api/Product/GetHomeSpecialProductsByFilter';
        this.GetHomeOffPricedProductsUrl = '/api/Product/GetHomeOffPricedProducts';
        this.GetHomeNewProductsUrl = '/api/Product/GetHomeNewProducts';
        this.GetHomeNewProductsByFilterUrl = '/api/Product/GetHomeNewProductsByFilter';
        this.DeleteImageUrl = '/api/Product/DeleteImage';
        this.AddOrUpdateImageUrl = '/api/Product/AddOrUpdateImage';
        this.GetHomeOffPricedProductsByFilterUrl = '/api/Product/GetHomeOffPricedProductsByFilter';
        this.DeleteVideoUrl = '/api/Product/DeleteVideo';
        this.DeleteFurtherDetailUrl = '/api/Product/DeleteFurtherDetail';
        this.DeleteDesignUrl = '/api/Product/DeleteDesign';
        this.AdminDeleteDesignUrl = '/api/Product/AdminDeleteDesign';
        this.AddOrUpdateVideoUrl = '/api/Product/AddOrUpdateVideo';
        this.AddOrUpdateFurtherDetailUrl = '/api/Product/AddOrUpdateFurtherDetail';
        this.AdminAddOrUpdateFurtherDetailUrl = '/api/Product/AdminAddOrUpdateFurtherDetail';
        this.AddOrUpdateDesignUrl = '/api/Product/AddOrUpdateDesign';
        this.AdminAddOrUpdateDesignUrl = '/api/Product/AdminAddOrUpdateDesign';
        this.GetProductByIdUrl = '/api/Product/GetProduct';
        this.GetSellerProductsByFilterUrl = '/api/Product/GetSellerProductsByFilter';
        this.GetAdminProductDetailByIdUrl = '/api/Product/GetAdminProductDetailById';
        this.GetProductByAuthUrl = '/api/Product/GetProductByAuth';
        this.AddOrUpdateUserViewedProductUrl = '/api/Product/AddOrUpdateUserViewedProduct';
        this.AddOrUpdateUserLikedProductUrl = '/api/Product/AddOrUpdateUserLikedProduct';
        this.GetProductsByFilterUrl = '/api/Product/GetProductsByFilter';
        this.GetActiveProductsByFilterUrl = '/api/Product/GetActiveProductsByFilter';
        this.GetAllProductsCategoryUrl = '/api/Product/GetAllProductsCategory';
        this.AddOrUpdateProductUrl = '/api/Product/AddOrUpdateProduct';
        this.GetAdminProductDetailVideosByIdUrl = '/api/Product/GetAdminProductDetailVideosById';
        this.AdminAddOrUpdateProductVideoUrl = '/api/Product/AdminAddOrUpdateProductVideo';
        this.AdminDeleteProductVideoUrl = '/api/Product/AdminDeleteProductVideo';
        this.GetProductEditByIdUrl = '/api/Product/GetProductEditById';
        this.GetActiveImageProductsByFilterUrl = '/api/Product/GetActiveImageProductsByFilter';
        this.GetDeActiveImageProductsByFilterUrl = '/api/Product/GetDeActiveImageProductsByFilter';
        this.GetUserLikedProductUrl = '/api/Product/GetUserLikedProduct';
        this.CheckUserProductRatingUrl = '/api/Product/CheckUserProductRating';
        this.AddUserProductRatingUrl = '/api/Product/AddUserProductRating';
        this.GetUserProductsNameUrl = '/api/Product/GetUserProductsName';
        this.ActiveProductImageByIdUrl = '/api/Product/ActiveProductImageById';
        this.DeActiveProductImageByIdUrl = '/api/Product/DeActiveProductImageById';
        this.GetUserProductsIdUrl = '/api/Product/GetUserProductsId';
        this.ActiveDesignUrl = '/api/Product/ActiveDesign';
        this.DeActiveDesignUrl = '/api/Product/DeActiveDesign';
        this.VerifyDesignEditUrl = '/api/Product/VerifyDesignEdit';
        this.ActiveFurtherDetailUrl = '/api/Product/ActiveFurtherDetail';
        this.DeActiveFurtherDetailUrl = '/api/Product/DeActiveFurtherDetail';
        this.VerifyFurtherDetailEditUrl = '/api/Product/VerifyFurtherDetailEdit';
        this.GetProductDetailByIdUrl = '/api/Product/GetProductDetailById';
        this.GetAuthProductDetailVideosById2Url = '/api/Product/GetAuthProductDetailVideosById2';
        this.GetProductDetailVideosById2Url = '/api/Product/GetProductDetailVideosById2';
        this.GetProductDetailUserLikedByIdUrl = '/api/Product/GetProductDetailUserLikedById';
        this.GetProductDetailViewedShowByIdUrl = '/api/Product/GetProductDetailViewedShowById';
        this.GetProductDetailImagesByIdUrl = '/api/Product/GetProductDetailImagesById';
        this.GetProductDetailProductDesignsByIdUrl = '/api/Product/GetProductDetailProductDesignsById';
        this.GetProductDetailFurtherDetailsByIdUrl = '/api/Product/GetProductDetailFurtherDetailsById';
        this.GetProductDetailSellerByIdUrl = '/api/Product/GetProductDetailSellerById';
        this.GetProductCartHistoryByFilterFirstTimeUrl = '/api/User/GetProductCartHistoryByFilterFirstTime';
        this.GetAdminProductCartHistoryByFilterFirstTimeUrl = '/api/User/GetAdminProductCartHistoryByFilterFirstTime';
        this.GetProductCartHistoryDetailUrl = '/api/User/GetProductCartHistoryDetail';
        this.GetAdminProductCartHistoryDetailUrl = '/api/User/GetAdminProductCartHistoryDetail';
        this.GetProductDetailCategoriesByIdUrl = '/api/Product/GetProductDetailCategoriesById';
        this.GetAuthProductCommentsByFilterUrl = '/api/Product/GetAuthProductCommentsByFilter';
        this.GetProductCommentsByFilterUrl = '/api/Product/GetProductCommentsByFilter';
        this.GetProductSellCountUrl = '/api/User/GetProductSellCount';
        this.GetAdminProductSellCountUrl = '/api/User/GetAdminProductSellCount';
        this.GetProductSellPriceCountUrl = '/api/User/GetProductSellPriceCount';
        this.GetAdminProductSellPriceCountUrl = '/api/User/GetAdminProductSellPriceCount';
        this.GetProductCartHistoryByFilterUrl = '/api/User/GetProductCartHistoryByFilter';
        this.GetAdminProductCartHistoryByFilterUrl = '/api/User/GetAdminProductCartHistoryByFilter';
        this.ReportCommentUrl = '/api/Product/ReportComment';
        this.ReportQuestionUrl = '/api/Product/ReportQuestion';
        this.ReportProductUrl = '/api/Product/ReportProduct';
        this.onSendCommentUrl = '/api/Product/SendComment';
        this.ReplyCommentByIdUrl = '/api/Product/ReplyCommentById';
        this.SetProductQuestionUrl = '/api/Product/SetProductQuestion';
        this.GetQuestionProductsByFilterUrl = '/api/Product/GetQuestionProductsByFilter';
        this.GetProductQuestionsDetailsByIdUrl = '/api/Product/GetProductQuestionsDetailsById';
        this.GetProductQuestionsByFilterUrl = '/api/Product/GetProductQuestionsByFilter';
        this.GetProductQuestionsCountByIdUrl = '/api/Product/GetProductQuestionsCountById';
        this.GetSellerProductQuestionsCountByIdUrl = '/api/Product/GetSellerProductQuestionsCountById';
        this.GetProductHiddenQuestionsDetailsByIdUrl = '/api/Product/GetProductHiddenQuestionsDetailsById';
        this.GetProductHiddenQuestionsByFilterUrl = '/api/Product/GetProductHiddenQuestionsByFilter';
        this.GetProductHiddenQuestionsCountByIdUrl = '/api/Product/GetProductHiddenQuestionsCountById';
        this.GetSellerUnSeenProductCommentsListUrl = '/api/Product/GetSellerUnSeenProductCommentsList';
        this.GetSellerProductCommentsDetailsByIdUrl = '/api/Product/GetSellerProductCommentsDetailsById';
        this.GetSellerProductCommentsByFilterUrl = '/api/Product/GetSellerProductCommentsByFilter';
        this.GetSellerProductCommentsCountByIdUrl = '/api/Product/GetSellerProductCommentsCountById';
        this.GetSellerProductHiddenCommentsDetailsByIdUrl = '/api/Product/GetSellerProductHiddenCommentsDetailsById';
        this.GetSellerProductHiddenCommentsByFilterUrl = '/api/Product/GetSellerProductHiddenCommentsByFilter';
        this.GetSellerProductHiddenCommentsCountByIdUrl = '/api/Product/GetSellerProductHiddenCommentsCountById';
        this.ActiveProductCommentUrl = '/api/Product/ActiveProductComment';
        this.DeActiveProductCommentUrl = '/api/Product/DeActiveProductComment';
        this.SetSellerProductCommentUrl = '/api/Product/SetSellerProductComment';
        this.GetAdminUnSeenProductCommentsListUrl = '/api/Product/GetAdminUnSeenProductCommentsList';
        this.GetAdminProductCommentsDetailsByIdUrl = '/api/Product/GetAdminProductCommentsDetailsById';
        this.GetAdminProductHiddenCommentsDetailsByIdUrl = '/api/Product/GetAdminProductHiddenCommentsDetailsById';
        this.DeleteProductCommentUrl = '/api/Product/DeleteProductComment';
        this.EditProductCommentUrl = '/api/Product/EditProductComment';
        this.GetSellerQuestionProductsByFilterUrl = '/api/Product/GetSellerQuestionProductsByFilter';
        this.GetSellerUnSeenProductQuestionsListUrl = '/api/Product/GetSellerUnSeenProductQuestionsList';
        this.GetSellerProductQuestionsDetailsByIdUrl = '/api/Product/GetSellerProductQuestionsDetailsById';
        this.GetSellerProductQuestionsByFilterUrl = '/api/Product/GetSellerProductQuestionsByFilter';
        this.GetSellerProductHiddenQuestionsDetailsByIdUrl = '/api/Product/GetSellerProductHiddenQuestionsDetailsById';
        this.GetSellerProductHiddenQuestionsByFilterUrl = '/api/Product/GetSellerProductHiddenQuestionsByFilter';
        this.GetSellerProductHiddenQuestionsCountByIdUrl = '/api/Product/GetSellerProductHiddenQuestionsCountById';
        this.ActiveProductQuestionUrl = '/api/Product/ActiveProductQuestion';
        this.DeActiveProductQuestionUrl = '/api/Product/DeActiveProductQuestion';
        this.UnSetBestQuestionAnswerUrl = '/api/Product/UnSetBestQuestionAnswer';
        this.SetBestQuestionAnswerUrl = '/api/Product/SetBestQuestionAnswer';
        this.OpenQuestionUrl = '/api/Product/OpenQuestion';
        this.CloseQuestionUrl = '/api/Product/CloseQuestion';
        this.SetSellerProductQuestionUrl = '/api/Product/SetSellerProductQuestion';
        this.GetAdminQuestionProductsByFilterUrl = '/api/Product/GetAdminQuestionProductsByFilter';
        this.GetAdminUnSeenProductQuestionsListUrl = '/api/Product/GetAdminUnSeenProductQuestionsList';
        this.GetAdminProductQuestionsDetailsByIdUrl = '/api/Product/GetAdminProductQuestionsDetailsById';
        this.GetAdminProductHiddenQuestionsDetailsByIdUrl = '/api/Product/GetAdminProductHiddenQuestionsDetailsById';
        this.EditProductQuestionUrl = '/api/Product/EditProductQuestion';
        this.DeleteProductQuestionUrl = '/api/Product/DeleteProductQuestion';
        this.GetUserProductQuestionsByFilterUrl = '/api/Product/GetUserProductQuestionsByFilter';
        this.AdminGetUserProductsNameUrl = '/api/Product/AdminGetUserProductsName';
        this.RemoveProductToUserUrl = '/api/Product/RemoveProductToUser';
        this.AddProductToUserUrl = '/api/Product/AddProductToUser';
        this.GetSameProductsByIdUrl = '/api/Product/GetSameProductsById';
        this.GetAdminProductReportDetailsByIdUrl = '/api/Product/GetAdminProductReportDetailsById';
        this.GetAdminProductCommentReportDetailsByIdUrl = '/api/Product/GetAdminProductCommentReportDetailsById';
        this.GetAdminProductQuestionReportDetailsByIdUrl = '/api/Product/GetAdminProductQuestionReportDetailsById';
        this.GetAdminProductReportsListCountUrl = '/api/Product/GetAdminProductReportsListCount';
        this.GetAdminProductCommentReportsListCountUrl = '/api/Product/GetAdminProductCommentReportsListCount';
        this.GetAdminProductQuestionReportsListCountUrl = '/api/Product/GetAdminProductQuestionReportsListCount';
        this.GetAdminUnSeenProductReportsListUrl = '/api/Product/GetAdminUnSeenProductReportsList';
        this.GetAdminUnSeenProductCommentReportsListUrl = '/api/Product/GetAdminUnSeenProductCommentReportsList';
        this.GetAdminUnSeenProductQuestionReportsListUrl = '/api/Product/GetAdminUnSeenProductQuestionReportsList';
        this.GetAdminProductReportsByFilterUrl = '/api/Product/GetAdminProductReportsByFilter';
        this.GetAdminProductCommentReportsByFilterUrl = '/api/Product/GetAdminProductCommentReportsByFilter';
        this.GetAdminProductQuestionReportsByFilterUrl = '/api/Product/GetAdminProductQuestionReportsByFilter';
        this.AdminVerifyProductReportUrl = '/api/Product/AdminVerifyProductReport';
        this.AdminDeVerifyProductReportUrl = '/api/Product/AdminDeVerifyProductReport';
        this.AdminVerifyProductCommentReportUrl = '/api/Product/AdminVerifyProductCommentReport';
        this.AdminDeVerifyProductCommentReportUrl = '/api/Product/AdminDeVerifyProductCommentReport';
        this.AdminVerifyProductQuestionReportUrl = '/api/Product/AdminVerifyProductQuestionReport';
        this.AdminDeVerifyProductQuestionReportUrl = '/api/Product/AdminDeVerifyProductQuestionReport';
    }
    // Top Products
    GetAdminProductReportDetailsById(id) {
        return this.http.post(this.GetAdminProductReportDetailsByIdUrl, id, { responseType: 'json' });
    }
    GetAdminProductCommentReportDetailsById(id) {
        return this.http.post(this.GetAdminProductCommentReportDetailsByIdUrl, id, { responseType: 'json' });
    }
    GetAdminProductQuestionReportDetailsById(id) {
        return this.http.post(this.GetAdminProductQuestionReportDetailsByIdUrl, id, { responseType: 'json' });
    }
    GetAdminProductReportsListCount() {
        return this.http.post(this.GetAdminProductReportsListCountUrl, null, { responseType: 'json' });
    }
    GetAdminProductCommentReportsListCount() {
        return this.http.post(this.GetAdminProductCommentReportsListCountUrl, null, { responseType: 'json' });
    }
    GetAdminProductQuestionReportsListCount() {
        return this.http.post(this.GetAdminProductQuestionReportsListCountUrl, null, { responseType: 'json' });
    }
    AddUserProductRating(model) {
        return this.http.post(this.AddUserProductRatingUrl, model, { responseType: 'json' });
    }
    CheckUserProductRating(id) {
        return this.http.post(this.CheckUserProductRatingUrl + '?id=' + id, { responseType: 'json' });
    }
    GetAdminUnSeenProductReportsList() {
        return this.http.post(this.GetAdminUnSeenProductReportsListUrl, null, { responseType: 'json' });
    }
    GetAdminUnSeenProductCommentReportsList() {
        return this.http.post(this.GetAdminUnSeenProductCommentReportsListUrl, null, { responseType: 'json' });
    }
    GetAdminUnSeenProductQuestionReportsList() {
        return this.http.post(this.GetAdminUnSeenProductQuestionReportsListUrl, null, { responseType: 'json' });
    }
    GetAdminProductReportsByFilter(filter) {
        return this.http.post(this.GetAdminProductReportsByFilterUrl, filter, { responseType: 'json' });
    }
    GetAdminProductCommentReportsByFilter(filter) {
        return this.http.post(this.GetAdminProductCommentReportsByFilterUrl, filter, { responseType: 'json' });
    }
    GetAdminProductQuestionReportsByFilter(filter) {
        return this.http.post(this.GetAdminProductQuestionReportsByFilterUrl, filter, { responseType: 'json' });
    }
    AdminVerifyProductReport(id) {
        return this.http.post(this.AdminVerifyProductReportUrl, id, { responseType: 'json' });
    }
    AdminDeVerifyProductReport(id) {
        return this.http.post(this.AdminDeVerifyProductReportUrl, id, { responseType: 'json' });
    }
    AdminVerifyProductCommentReport(id) {
        return this.http.post(this.AdminVerifyProductCommentReportUrl, id, { responseType: 'json' });
    }
    AdminDeVerifyProductCommentReport(id) {
        return this.http.post(this.AdminDeVerifyProductCommentReportUrl, id, { responseType: 'json' });
    }
    AdminVerifyProductQuestionReport(id) {
        return this.http.post(this.AdminVerifyProductQuestionReportUrl, id, { responseType: 'json' });
    }
    AdminDeVerifyProductQuestionReport(id) {
        return this.http.post(this.AdminDeVerifyProductQuestionReportUrl, id, { responseType: 'json' });
    }
    ReportComment(model) {
        return this.http.post(this.ReportCommentUrl, model, { responseType: 'json' });
    }
    GetSameProductsById(id) {
        return this.http.post(this.GetSameProductsByIdUrl, id, { responseType: 'json' });
    }
    RemoveProductToUser(model) {
        return this.http.post(this.RemoveProductToUserUrl, model, { responseType: 'json' });
    }
    AddProductToUser(model) {
        return this.http.post(this.AddProductToUserUrl, model, { responseType: 'json' });
    }
    GetUserProductQuestionsByFilter(filter) {
        return this.http.post(this.GetUserProductQuestionsByFilterUrl, filter, { responseType: 'json' });
    }
    AdminGetUserProductsName(id) {
        return this.http.post(this.AdminGetUserProductsNameUrl, id, { responseType: 'json' });
    }
    DeleteProductQuestion(id) {
        return this.http.post(this.DeleteProductQuestionUrl, id, { responseType: 'json' });
    }
    EditProductQuestion(model) {
        return this.http.post(this.EditProductQuestionUrl, model, { responseType: 'json' });
    }
    GetAdminProductHiddenQuestionsDetailsById(id) {
        return this.http.post(this.GetAdminProductHiddenQuestionsDetailsByIdUrl, id, { responseType: 'json' });
    }
    GetAdminProductQuestionsDetailsById(id) {
        return this.http.post(this.GetAdminProductQuestionsDetailsByIdUrl, id, { responseType: 'json' });
    }
    GetAdminUnSeenProductQuestionsList() {
        return this.http.post(this.GetAdminUnSeenProductQuestionsListUrl, null, { responseType: 'json' });
    }
    GetAdminQuestionProductsByFilter(filter) {
        return this.http.post(this.GetAdminQuestionProductsByFilterUrl, filter, { responseType: 'json' });
    }
    SetSellerProductQuestion(model) {
        return this.http.post(this.SetSellerProductQuestionUrl, model, { responseType: 'json' });
    }
    CloseQuestion(id) {
        return this.http.post(this.CloseQuestionUrl, id, { responseType: 'json' });
    }
    OpenQuestion(id) {
        return this.http.post(this.OpenQuestionUrl, id, { responseType: 'json' });
    }
    SetBestQuestionAnswer(id) {
        return this.http.post(this.SetBestQuestionAnswerUrl, id, { responseType: 'json' });
    }
    UnSetBestQuestionAnswer(id) {
        return this.http.post(this.UnSetBestQuestionAnswerUrl, id, { responseType: 'json' });
    }
    DeActiveProductQuestion(id) {
        return this.http.post(this.DeActiveProductQuestionUrl, id, { responseType: 'json' });
    }
    ActiveProductQuestion(id) {
        return this.http.post(this.ActiveProductQuestionUrl, id, { responseType: 'json' });
    }
    GetSellerProductHiddenQuestionsCountById(id) {
        return this.http.post(this.GetSellerProductHiddenQuestionsCountByIdUrl, id, { responseType: 'json' });
    }
    GetSellerProductHiddenQuestionsByFilter(filter) {
        return this.http.post(this.GetSellerProductHiddenQuestionsByFilterUrl, filter, { responseType: 'json' });
    }
    GetSellerProductHiddenQuestionsDetailsById(id) {
        return this.http.post(this.GetSellerProductHiddenQuestionsDetailsByIdUrl, id, { responseType: 'json' });
    }
    GetSellerProductQuestionsByFilter(filter) {
        return this.http.post(this.GetSellerProductQuestionsByFilterUrl, filter, { responseType: 'json' });
    }
    GetSellerProductQuestionsDetailsById(id) {
        return this.http.post(this.GetSellerProductQuestionsDetailsByIdUrl, id, { responseType: 'json' });
    }
    GetSellerUnSeenProductQuestionsList() {
        return this.http.post(this.GetSellerUnSeenProductQuestionsListUrl, null, { responseType: 'json' });
    }
    GetSellerQuestionProductsByFilter(filter) {
        return this.http.post(this.GetSellerQuestionProductsByFilterUrl, filter, { responseType: 'json' });
    }
    EditProductComment(model) {
        return this.http.post(this.EditProductCommentUrl, model, { responseType: 'json' });
    }
    DeleteProductComment(id) {
        return this.http.post(this.DeleteProductCommentUrl, id, { responseType: 'json' });
    }
    GetAdminProductHiddenCommentsDetailsById(id) {
        return this.http.post(this.GetAdminProductHiddenCommentsDetailsByIdUrl, id, { responseType: 'json' });
    }
    GetAdminProductCommentsDetailsById(id) {
        return this.http.post(this.GetAdminProductCommentsDetailsByIdUrl, id, { responseType: 'json' });
    }
    GetAdminUnSeenProductCommentsList() {
        return this.http.post(this.GetAdminUnSeenProductCommentsListUrl, null, { responseType: 'json' });
    }
    SetSellerProductComment(model) {
        return this.http.post(this.SetSellerProductCommentUrl, model, { responseType: 'json' });
    }
    DeActiveProductComment(id) {
        return this.http.post(this.DeActiveProductCommentUrl, id, { responseType: 'json' });
    }
    ActiveProductComment(id) {
        return this.http.post(this.ActiveProductCommentUrl, id, { responseType: 'json' });
    }
    GetSellerProductHiddenCommentsCountById(id) {
        return this.http.post(this.GetSellerProductHiddenCommentsCountByIdUrl, id, { responseType: 'json' });
    }
    GetSellerProductHiddenCommentsByFilter(filter) {
        return this.http.post(this.GetSellerProductHiddenCommentsByFilterUrl, filter, { responseType: 'json' });
    }
    GetSellerProductHiddenCommentsDetailsById(id) {
        return this.http.post(this.GetSellerProductHiddenCommentsDetailsByIdUrl, id, { responseType: 'json' });
    }
    GetSellerProductCommentsCountById(id) {
        return this.http.post(this.GetSellerProductCommentsCountByIdUrl, id, { responseType: 'json' });
    }
    GetSellerUnSeenProductCommentsList() {
        return this.http.post(this.GetSellerUnSeenProductCommentsListUrl, null, { responseType: 'json' });
    }
    GetSellerProductCommentsByFilter(filter) {
        return this.http.post(this.GetSellerProductCommentsByFilterUrl, filter, { responseType: 'json' });
    }
    GetSellerProductCommentsDetailsById(id) {
        return this.http.post(this.GetSellerProductCommentsDetailsByIdUrl, id, { responseType: 'json' });
    }
    GetProductHiddenQuestionsCountById(id) {
        return this.http.post(this.GetProductHiddenQuestionsCountByIdUrl, id, { responseType: 'json' });
    }
    GetProductHiddenQuestionsByFilter(filter) {
        return this.http.post(this.GetProductHiddenQuestionsByFilterUrl, filter, { responseType: 'json' });
    }
    GetProductHiddenQuestionsDetailsById(id) {
        return this.http.post(this.GetProductHiddenQuestionsDetailsByIdUrl, id, { responseType: 'json' });
    }
    GetSellerProductQuestionsCountById(id) {
        return this.http.post(this.GetSellerProductQuestionsCountByIdUrl, id, { responseType: 'json' });
    }
    GetProductQuestionsByFilter(filter) {
        return this.http.post(this.GetProductQuestionsByFilterUrl, filter, { responseType: 'json' });
    }
    GetProductQuestionsCountById(id) {
        return this.http.post(this.GetProductQuestionsCountByIdUrl, id, { responseType: 'json' });
    }
    GetProductQuestionsDetailsById(id) {
        return this.http.post(this.GetProductQuestionsDetailsByIdUrl, id, { responseType: 'json' });
    }
    GetQuestionProductsByFilter(filter) {
        return this.http.post(this.GetQuestionProductsByFilterUrl, filter, { responseType: 'json' });
    }
    SetProductQuestion(model) {
        return this.http.post(this.SetProductQuestionUrl, model, { responseType: 'json' });
    }
    ReplyCommentById(model) {
        return this.http.post(this.ReplyCommentByIdUrl, model, { responseType: 'json' });
    }
    onSendComment(model) {
        return this.http.post(this.onSendCommentUrl, model, { responseType: 'json' });
    }
    ReportQuestion(model) {
        return this.http.post(this.ReportQuestionUrl, model, { responseType: 'json' });
    }
    ReportProduct(model) {
        return this.http.post(this.ReportProductUrl, model, { responseType: 'json' });
    }
    GetHomeTopProductsByFilter(filter) {
        return this.http.post(this.GetHomeTopProductsByFilterUrl, filter, { responseType: 'json' });
    }
    GetProductCommentsByFilter(model) {
        return this.http.post(this.GetProductCommentsByFilterUrl, model, { responseType: 'json' });
    }
    GetProductSellCount(productId) {
        return this.http.post(this.GetProductSellCountUrl, productId, { responseType: 'json' });
    }
    GetAdminProductSellCount(productId) {
        return this.http.post(this.GetAdminProductSellCountUrl, productId, { responseType: 'json' });
    }
    GetProductSellPriceCount(productId) {
        return this.http.post(this.GetProductSellPriceCountUrl, productId, { responseType: 'json' });
    }
    GetAdminProductSellPriceCount(productId) {
        return this.http.post(this.GetAdminProductSellPriceCountUrl, productId, { responseType: 'json' });
    }
    GetProductCartHistoryByFilter(filter) {
        return this.http.post(this.GetProductCartHistoryByFilterUrl, filter, { responseType: 'json' });
    }
    GetAdminProductCartHistoryByFilter(filter) {
        return this.http.post(this.GetAdminProductCartHistoryByFilterUrl, filter, { responseType: 'json' });
    }
    GetAuthProductCommentsByFilter(model) {
        return this.http.post(this.GetAuthProductCommentsByFilterUrl, model, { responseType: 'json' });
    }
    GetProductDetailCategoriesById(id) {
        return this.http.post(this.GetProductDetailCategoriesByIdUrl, id, { responseType: 'json' });
    }
    GetProductDetailSellerById(id) {
        return this.http.post(this.GetProductDetailSellerByIdUrl, id, { responseType: 'json' });
    }
    GetProductCartHistoryByFilterFirstTime(filter) {
        return this.http.post(this.GetProductCartHistoryByFilterFirstTimeUrl, filter, { responseType: 'json' });
    }
    GetAdminProductCartHistoryByFilterFirstTime(filter) {
        return this.http.post(this.GetAdminProductCartHistoryByFilterFirstTimeUrl, filter, { responseType: 'json' });
    }
    GetProductCartHistoryDetail(id) {
        return this.http.post(this.GetProductCartHistoryDetailUrl, id, { responseType: 'json' });
    }
    GetAdminProductCartHistoryDetail(id) {
        return this.http.post(this.GetAdminProductCartHistoryDetailUrl, id, { responseType: 'json' });
    }
    GetProductDetailImagesById(id) {
        return this.http.post(this.GetProductDetailImagesByIdUrl, id, { responseType: 'json' });
    }
    GetProductDetailProductDesignsById(id) {
        return this.http.post(this.GetProductDetailProductDesignsByIdUrl, id, { responseType: 'json' });
    }
    GetProductDetailFurtherDetailsById(id) {
        return this.http.post(this.GetProductDetailFurtherDetailsByIdUrl, id, { responseType: 'json' });
    }
    GetProductDetailViewedShowById(id) {
        return this.http.post(this.GetProductDetailViewedShowByIdUrl, id, { responseType: 'json' });
    }
    GetProductDetailVideosById2(id) {
        return this.http.post(this.GetProductDetailVideosById2Url, id, { responseType: 'json' });
    }
    GetAuthProductDetailVideosById2(id) {
        return this.http.post(this.GetAuthProductDetailVideosById2Url, id, { responseType: 'json' });
    }
    GetProductDetailUserLikedById(id) {
        return this.http.post(this.GetProductDetailUserLikedByIdUrl, id, { responseType: 'json' });
    }
    GetProductDetailById(id) {
        return this.http.post(this.GetProductDetailByIdUrl, id, { responseType: 'json' });
    }
    ActiveDesign(id) {
        return this.http.post(this.ActiveDesignUrl, id, { responseType: 'json' });
    }
    DeActiveDesign(id) {
        return this.http.post(this.DeActiveDesignUrl, id, { responseType: 'json' });
    }
    VerifyDesignEdit(id) {
        return this.http.post(this.VerifyDesignEditUrl, id, { responseType: 'json' });
    }
    ActiveFurtherDetail(id) {
        return this.http.post(this.ActiveFurtherDetailUrl, id, { responseType: 'json' });
    }
    DeActiveFurtherDetail(id) {
        return this.http.post(this.DeActiveFurtherDetailUrl, id, { responseType: 'json' });
    }
    VerifyFurtherDetailEdit(id) {
        return this.http.post(this.VerifyFurtherDetailEditUrl, id, { responseType: 'json' });
    }
    GetUserProductsId() {
        return this.http.post(this.GetUserProductsIdUrl, { responseType: 'json' });
    }
    DeActiveProductImageById(id) {
        return this.http.post(this.DeActiveProductImageByIdUrl, id, { responseType: 'json' });
    }
    ActiveProductImageById(id) {
        return this.http.post(this.ActiveProductImageByIdUrl, id, { responseType: 'json' });
    }
    GetDeActiveImageProductsByFilter(filter) {
        return this.http.post(this.GetDeActiveImageProductsByFilterUrl, filter, { responseType: 'json' });
    }
    GetUserLikedProduct() {
        return this.http.post(this.GetUserLikedProductUrl, { responseType: 'json' });
    }
    GetUserProductsName() {
        return this.http.post(this.GetUserProductsNameUrl, { responseType: 'json' });
    }
    GetActiveImageProductsByFilter(filter) {
        return this.http.post(this.GetActiveImageProductsByFilterUrl, filter, { responseType: 'json' });
    }
    AdminAddOrUpdateProductVideo(model) {
        return this.http.post(this.AdminAddOrUpdateProductVideoUrl, model, { responseType: 'json' });
    }
    GetProductEditById(id) {
        return this.http.post(this.GetProductEditByIdUrl, id, { responseType: 'json' });
    }
    AdminDeleteProductVideo(id) {
        return this.http.post(this.AdminDeleteProductVideoUrl, id, { responseType: 'json' });
    }
    GetAdminProductDetailVideosById(id) {
        return this.http.post(this.GetAdminProductDetailVideosByIdUrl, id, { responseType: 'json' });
    }
    GetAdminProductDetailImagesById(id) {
        return this.http.post(this.GetAdminProductDetailImagesByIdUrl, id, { responseType: 'json' });
    }
    AdminAddOrUpdateProductImage(model) {
        return this.http.post(this.AdminAddOrUpdateProductImageUrl, model, { responseType: 'json' });
    }
    GetHomeTopProducts(count) {
        return this.http.get(this.GetHomeTopProductsUrl + '?count=' + count);
    }
    AdminDeleteProductImage(id) {
        return this.http.post(this.AdminDeleteProductImageUrl, id, { responseType: 'json' });
    }
    getCurrentHomeTopProducts() {
        return this.homeTopProducts;
    }
    setCurrentHomeTopProducts(products) {
        this.homeTopProducts.next(products);
    }
    DeleteProductById(id) {
        return this.http.post(this.DeleteProductByIdUrl, id, { responseType: 'json' });
    }
    GetSellerProductDetailVideosById(id) {
        return this.http.post(this.GetSellerProductDetailVideosByIdUrl, id, { responseType: 'json' });
    }
    GetSellerProductDetailDesignsEditById(id) {
        return this.http.post(this.GetSellerProductDetailDesignsEditByIdUrl, id, { responseType: 'json' });
    }
    GetAdminProductDetailDesignsEditById(id) {
        return this.http.post(this.GetAdminProductDetailDesignsEditByIdUrl, id, { responseType: 'json' });
    }
    GetAdminProductDetailDesignsById(id) {
        return this.http.post(this.GetAdminProductDetailDesignsByIdUrl, id, { responseType: 'json' });
    }
    GetAdminFurtherDetailById(id) {
        return this.http.post(this.GetAdminFurtherDetailByIdUrl, id, { responseType: 'json' });
    }
    GetAdminFurtherDetailEditById(id) {
        return this.http.post(this.GetAdminFurtherDetailEditByIdUrl, id, { responseType: 'json' });
    }
    GetSellerFurtherDetailEditById(id) {
        return this.http.post(this.GetSellerFurtherDetailEditByIdUrl, id, { responseType: 'json' });
    }
    GetSellerFurtherDetailById(id) {
        return this.http.post(this.GetSellerFurtherDetailByIdUrlUrl, id, { responseType: 'json' });
    }
    GetSellerProductDetailDesignsById(id) {
        return this.http.post(this.GetSellerProductDetailDesignsByIdUrl, id, { responseType: 'json' });
    }
    AddOrUpdateProductCategory(model) {
        return this.http.post(this.AddOrUpdateProductCategoryUrl, model, { responseType: 'json' });
    }
    DeleteCategoryById(id) {
        return this.http.post(this.DeleteCategoryByIdUrl, id, { responseType: 'json' });
    }
    GetProductLikeById(id) {
        return this.http.post(this.GetProductLikeByIdUrl, id, { responseType: 'json' });
    }
    AddFakeProductRate(id) {
        return this.http.post(this.AddFakeProductRateUrl, id, { responseType: 'json' });
    }
    AddFakeProductsRate() {
        return this.http.post(this.AddFakeProductsRateUrl, null, { responseType: 'json' });
    }
    GetDeActiveProductsByFilter(filter) {
        return this.http.post(this.GetDeActiveProductsByFilterUrl, filter, { responseType: 'json' });
    }
    GetAdminActiveProductById(id) {
        return this.http.get(this.GetAdminActiveProductByIdUrl + '?id=' + id, { responseType: 'json' });
    }
    GetDeActiveProductById(id) {
        return this.http.post(this.GetDeActiveProductByIdUrl, id, { responseType: 'json' });
    }
    DeActiveProductVideoById(id) {
        return this.http.post(this.DeActiveProductVideoByIdUrl, id, { responseType: 'json' });
    }
    GetEditProductsByFilter(filter) {
        return this.http.post(this.GetEditProductsByFilterUrl, filter, { responseType: 'json' });
    }
    ActiveEditProductById(id) {
        return this.http.post(this.ActiveEditProductByIdUrl, id, { responseType: 'json' });
    }
    ActiveProductVideoById(id) {
        return this.http.post(this.ActiveProductVideoByIdUrl, id, { responseType: 'json' });
    }
    ActiveProductVideoByIdNoShare(id) {
        return this.http.post(this.ActiveProductVideoByIdNoShareUrl, id, { responseType: 'json' });
    }
    ActiveProductById(id) {
        return this.http.post(this.ActiveProductByIdUrl, id, { responseType: 'json' });
    }
    ActiveProductByIdNoShare(id) {
        return this.http.post(this.ActiveProductByIdNoShareUrl, id, { responseType: 'json' });
    }
    DeActiveProductById(id) {
        return this.http.post(this.DeActiveProductByIdUrl, id, { responseType: 'json' });
    }
    RemoveProductTag(id) {
        return this.http.post(this.RemoveProductTagUrl, id, { responseType: 'json' });
    }
    AddOrUpdateProductTag(model) {
        return this.http.post(this.AddOrUpdateProductTagUrl, model, { responseType: 'json' });
    }
    GetProductTags(id) {
        return this.http.post(this.GetProductTagsUrl, id, { responseType: 'json' });
    }
    AdminUpdateProduct(model) {
        return this.http.post(this.AdminUpdateProductUrl, model, { responseType: 'json' });
    }
    GetActiveVideoProductsByFilter(filter) {
        return this.http.post(this.GetActiveVideoProductsByFilterUrl, filter, { responseType: 'json' });
    }
    GetDeActiveVideoProductsByFilter(filter) {
        return this.http.post(this.GetDeActiveVideoProductsByFilterUrl, filter, { responseType: 'json' });
    }
    // Top Viewed Products
    GetEditProductById(id) {
        return this.http.get(this.GetEditProductByIdUrl + '?id=' + id, { responseType: 'json' });
    }
    GetHomeTopViewedProductsByFilter(filter) {
        return this.http.post(this.GetHomeTopViewedProductsByFilterUrl, filter, { responseType: 'json' });
    }
    GetHomeTopViewedProducts(count) {
        return this.http.get(this.GetHomeTopViewedProductsUrl + '?count=' + count);
    }
    getCurrentHomeTopViewedProducts() {
        return this.homeTopViewedProducts;
    }
    setCurrentHomeTopViewedProducts(products) {
        this.homeTopViewedProducts.next(products);
    }
    GetSellerProductDetailImagesById(id) {
        return this.http.post(this.GetSellerProductDetailImagesByIdUrl, id, { responseType: 'json' });
    }
    // Special Products
    GetSellerProductDetailById(id) {
        return this.http.post(this.GetSellerProductDetailByIdUrl, id, { responseType: 'json' });
    }
    GetAdminProductsByFilter(filter) {
        return this.http.post(this.GetAdminProductsByFilterUrl, filter, { responseType: 'json' });
    }
    GetHomeSpecialProductsByFilter(filter) {
        return this.http.post(this.GetHomeSpecialProductsByFilterUrl, filter, { responseType: 'json' });
    }
    GetHomeSpecialProducts(count) {
        return this.http.get(this.GetHomeSpecialProductsUrl + '?count=' + count);
    }
    getCurrentHomeSpecialProducts() {
        return this.homeSpecialProducts;
    }
    setCurrentHomeSpecialProducts(products) {
        this.homeSpecialProducts.next(products);
    }
    // Off Priced Products
    GetHomeOffPricedProductsByFilter(filter) {
        return this.http.post(this.GetHomeOffPricedProductsByFilterUrl, filter, { responseType: 'json' });
    }
    GetHomeOffPricedProducts(count) {
        return this.http.get(this.GetHomeOffPricedProductsUrl + '?count=' + count);
    }
    GetHomeNewProducts(count) {
        return this.http.get(this.GetHomeNewProductsUrl + '?count=' + count);
    }
    GetHomeNewProductsByFilter(filter) {
        return this.http.post(this.GetHomeNewProductsByFilterUrl, filter, { responseType: 'json' });
    }
    DeleteImage(id) {
        return this.http.post(this.DeleteImageUrl, id, { responseType: 'json' });
    }
    AddOrUpdateImage(model) {
        return this.http.post(this.AddOrUpdateImageUrl, model, { responseType: 'json' });
    }
    getCurrentHomeOffPricedProducts() {
        return this.homeOffPricedProducts;
    }
    getCurrentHomeNewProducts() {
        return this.homeNewProducts;
    }
    setCurrentHomeOffPricedProducts(products) {
        this.homeOffPricedProducts.next(products);
    }
    setCurrentHomeNewProducts(products) {
        this.homeNewProducts.next(products);
    }
    DeleteVideo(id) {
        return this.http.post(this.DeleteVideoUrl, id, { responseType: 'json' });
    }
    DeleteFurtherDetail(id) {
        return this.http.post(this.DeleteFurtherDetailUrl, id, { responseType: 'json' });
    }
    DeleteDesign(id) {
        return this.http.post(this.DeleteDesignUrl, id, { responseType: 'json' });
    }
    AdminDeleteDesign(id) {
        return this.http.post(this.AdminDeleteDesignUrl, id, { responseType: 'json' });
    }
    AddOrUpdateVideo(model) {
        return this.http.post(this.AddOrUpdateVideoUrl, model, { responseType: 'json' });
    }
    AddOrUpdateFurtherDetail(model) {
        return this.http.post(this.AddOrUpdateFurtherDetailUrl, model, { responseType: 'json' });
    }
    AdminAddOrUpdateFurtherDetail(model) {
        return this.http.post(this.AdminAddOrUpdateFurtherDetailUrl, model, { responseType: 'json' });
    }
    AddOrUpdateDesign(model) {
        return this.http.post(this.AddOrUpdateDesignUrl, model, { responseType: 'json' });
    }
    AdminAddOrUpdateDesign(model) {
        return this.http.post(this.AdminAddOrUpdateDesignUrl, model, { responseType: 'json' });
    }
    // Product
    GetProductById(id) {
        return this.http.get(this.GetProductByIdUrl + '?id=' + id);
    }
    GetSellerProductsByFilter(filter) {
        return this.http.post(this.GetSellerProductsByFilterUrl, filter, { responseType: 'json' });
    }
    GetAdminProductDetailById(id) {
        return this.http.post(this.GetAdminProductDetailByIdUrl, id, { responseType: 'json' });
    }
    // Product
    GetProductByAuth(id) {
        return this.http.get(this.GetProductByAuthUrl + '?id=' + id);
    }
    // AddOrUpdateUserViewedProduct
    AddOrUpdateUserViewedProduct(id) {
        return this.http.post(this.AddOrUpdateUserViewedProductUrl + '?id=' + id, { responseType: 'json' });
    }
    // AddOrUpdateUserLikedProduct
    AddOrUpdateUserLikedProduct(id, like) {
        return this.http.post(this.AddOrUpdateUserLikedProductUrl + '?id=' + id + '&like=' + like, { responseType: 'json' });
    }
    AddOrUpdateProduct(model) {
        return this.http.post(this.AddOrUpdateProductUrl, model, { responseType: 'json' });
    }
    // Filter Products
    GetProductsByFilter(filter) {
        return this.http.post(this.GetProductsByFilterUrl, filter, { responseType: 'json' });
    }
    GetActiveProductsByFilter(filter) {
        return this.http.post(this.GetActiveProductsByFilterUrl, filter, { responseType: 'json' });
    }
    // Products Category
    GetAllProductsCategory() {
        return this.http.get(this.GetAllProductsCategoryUrl);
    }
};
ProductService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
ProductService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], ProductService);



/***/ }),

/***/ 73847:
/*!*************************************************!*\
  !*** ./src/app/data/service/seo/seo.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SEOService": () => (/* binding */ SEOService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ 34497);




let SEOService = class SEOService {
    constructor(title, meta, doc) {
        this.title = title;
        this.meta = meta;
        this.doc = doc;
    }
    updateTitle(title = 'اول آموز - مرجع تخصصی دوره‌ها، کاربرگ‌ها و روش تدریس ابتدایی') {
        this.title.setTitle(title);
        this.meta.updateTag({ name: 'og:title', content: title });
        this.meta.updateTag({ name: 'twitter:title', content: title });
        this.meta.updateTag({ property: 'og:title', content: title });
        this.meta.updateTag({ itemprop: 'name', content: title });
    }
    updateOgUrl(url = 'http://localhost:4300/') {
        this.meta.updateTag({ name: 'og:url', content: url });
        this.meta.updateTag({ name: 'twitter:url', content: url });
        this.meta.updateTag({ name: 'og:image', content: 'http://localhost:4300/assets/icon/avalamooz.svg' });
        this.meta.updateTag({ property: 'og:image', content: 'http://localhost:4300/assets/icon/avalamooz.svg' });
        this.meta.updateTag({ name: 'twitter:image', content: 'http://localhost:4300/assets/icon/avalamooz.svg' });
        this.meta.updateTag({ name: 'og:image:alt', content: 'AvalAmooz Logo' });
        this.meta.updateTag({ property: 'og:image:alt', content: 'AvalAmooz Logo' });
        const head = this.doc.getElementsByTagName('head')[0];
        let element = this.doc.querySelector(`link[rel='canonical']`) || null;
        if (element == null) {
            element = this.doc.createElement('link');
            head.appendChild(element);
        }
        element.setAttribute('rel', 'canonical');
        element.setAttribute('href', url);
    }
    updateDescription(desc = 'اول آموز مرجع تخصصی دوره‌های روش تدریس، کاربرگ‌های آموزشی و ملزومات پایه‌های اول تا ششم دبستان است') {
        this.meta.updateTag({ name: 'description', content: desc });
        this.meta.updateTag({ name: 'twitter:description', content: desc });
        this.meta.updateTag({ name: 'og:description', content: desc });
        this.meta.updateTag({ property: 'og:description', content: desc });
        this.meta.updateTag({ itemprop: 'description', content: desc });
    }
    updateLocale(language) {
        const openGraphLocales = {
            fa: 'fa_IR', en: 'en_US', ar: 'ar_SA', tr: 'tr_TR', ru: 'ru_RU'
        };
        this.meta.updateTag({ property: 'og:locale', content: openGraphLocales[language] });
        // The English catalog content is not translated yet; keep its preview out of search results.
        this.meta.updateTag({ name: 'robots', content: language === 'fa' ? 'index,follow' : 'noindex,follow' });
    }
};
SEOService.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__.Title },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__.Meta },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject, args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT,] }] }
];
SEOService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], SEOService);



/***/ }),

/***/ 79519:
/*!*****************************************************!*\
  !*** ./src/app/data/service/site/Slider.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SliderService": () => (/* binding */ SliderService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 84505);

/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/naming-convention */



let SliderService = class SliderService {
    constructor(http) {
        this.http = http;
        this.homeSliders = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
        this.GetAllSlidersUrl = '/api/Site/GetAllSlide';
        this.GetAllAdminSlideUrl = '/api/Site/GetAllAdminSlide';
        this.AddOrUpdateSliderUrl = '/api/Site/AddOrUpdateSlider';
        this.RemoveSlideUrl = '/api/Site/RemoveSlide';
        this.ActiveSlideUrl = '/api/Site/ActiveSlide';
        this.GetAllHelpfulLinkUrl = '/api/Site/GetAllHelpfulLink';
        this.GetPublicMessageUrl = '/api/Site/GetPublicMessage';
        this.AdminGetPublicMessageUrl = '/api/Site/AdminGetPublicMessage';
        this.GetHelpfulLinkByIdUrl = '/api/Site/GetHelpfulLinkById';
        this.GetSettingUrl = '/api/Site/GetSetting';
        this.GetSettingNoCacheUrl = '/api/Site/GetSettingNoCache';
        this.GetBlockIpsUrl = '/api/Site/GetBlockIps';
        this.SetUnBlockIpUrl = '/api/Site/SetUnBlockIp';
        this.SetBlockIpUrl = '/api/Site/SetBlockIp';
        this.GetAllTunerPlusAccessUrl = '/api/Site/GetAllTunerPlusAccess';
        this.GetAllDoersUrl = '/api/Site/GetAllDoers';
        this.AdminGetAllDoersUrl = '/api/Site/AdminGetAllDoers';
        this.UpdateSettingUrl = '/api/Site/UpdateSetting';
        this.AddOrUpdateHelpfulLinkUrl = '/api/Site/AddOrUpdateHelpfulLink';
        this.AddOrUpdateTunerPlusAccessUrl = '/api/Site/AddOrUpdateTunerPlusAccess';
        this.AddOrUpdateCommonQuestionUrl = '/api/Site/AddOrUpdateCommonQuestion';
        this.RemoveHelpfulLinkUrl = '/api/Site/RemoveHelpfulLink';
        this.RemoveDoerUrl = '/api/Site/RemoveDoer';
        this.RemoveTunerPlusAccessUrl = '/api/Site/RemoveTunerPlusAccess';
        this.RemoveTunerPlusUrl = '/api/Site/RemoveTunerPlus';
        this.RemoveCommonQuestionUrl = '/api/Site/RemoveCommonQuestion';
        this.InstagramBotUserDirectMsgUrl = '/api/Site/InstagramBotUserDirectMsg';
        this.InstagramBotFollowersDirectMsgUrl = '/api/Site/InstagramBotFollowersDirectMsg';
        this.RemoveInstagramSessionUrl = '/api/Site/RemoveInstagramSession';
        this.AddOrUpdateTunerPlusUrl = '/api/Site/AddOrUpdateTunerPlus';
        this.AddOrUpdateCarFactoryNameUrl = '/api/Site/AddOrUpdateCarFactoryName';
        this.AddOrUpdateCarModelNameUrl = '/api/Site/AddOrUpdateCarModelName';
        this.AddOrUpdateGearBoxModelNameUrl = '/api/Site/AddOrUpdateGearBoxModelName';
        this.AddOrUpdateDoerUrl = '/api/Site/AddOrUpdateDoer';
        this.AddOrUpdatePublicMessageUrl = '/api/Site/AddOrUpdatePublicMessage';
        this.AdminUpdateDoerOrderUrl = '/api/Site/AdminUpdateDoerOrder';
        this.GetAllCommonQuestionsUrl = '/api/Site/GetAllCommonQuestions';
        this.GetAllTunerPlusUrl = '/api/Site/GetAllTunerPlus';
        this.GetAllTunerPlusCoursesUrl = '/api/Site/GetAllTunerPlusCourses';
        // private GetTunerPlusByIdUrl = '/api/Site/GetTunerPlusById';
        this.GetTunerPlusByIdUrl = '/api/Site/GetTunerPlusById2';
        this.GetAllTunerPlusCourseByIdUrl = '/api/Site/GetAllTunerPlusCourseById';
        this.GetAllGearRatioUrl = '/api/Site/GetAllGearRatio2';
        this.AdminGetAllGearRatioUrl = '/api/Site/AdminGetAllGearRatio';
        this.DeleteGearBoxModelNameUrl = '/api/Site/DeleteGearBoxModelName';
        this.DeleteCarFactoryNameUrl = '/api/Site/DeleteCarFactoryName';
        this.DeleteCarModelNameUrl = '/api/Site/DeleteCarModelName';
    }
    GetAllHelpfulLink() {
        return this.http.get(this.GetAllHelpfulLinkUrl, { responseType: 'json' });
    }
    GetPublicMessage() {
        return this.http.get(this.GetPublicMessageUrl, { responseType: 'json' });
    }
    AdminGetPublicMessage() {
        return this.http.get(this.AdminGetPublicMessageUrl, { responseType: 'json' });
    }
    GetHelpfulLinkById(id) {
        return this.http.get(this.GetHelpfulLinkByIdUrl + '?id=' + id, { responseType: 'json' });
    }
    GetSetting() {
        return this.http.get(this.GetSettingUrl, { responseType: 'json' });
    }
    GetSettingNoCache() {
        return this.http.get(this.GetSettingNoCacheUrl, { responseType: 'json' });
    }
    GetBlockIps() {
        return this.http.get(this.GetBlockIpsUrl, { responseType: 'blob' });
    }
    GetAllTunerPlusAccess() {
        return this.http.get(this.GetAllTunerPlusAccessUrl, { responseType: 'json' });
    }
    GetAllDoer() {
        return this.http.get(this.GetAllDoersUrl, { responseType: 'json' });
    }
    AdminGetAllDoers() {
        return this.http.get(this.AdminGetAllDoersUrl, { responseType: 'json' });
    }
    UpdateSetting(model) {
        return this.http.post(this.UpdateSettingUrl, model, { responseType: 'json' });
    }
    SetUnBlockIp(model) {
        return this.http.post(this.SetUnBlockIpUrl, model, { responseType: 'json' });
    }
    SetBlockIp(model) {
        return this.http.post(this.SetBlockIpUrl, model, { responseType: 'json' });
    }
    AddOrUpdateHelpfulLink(model) {
        return this.http.post(this.AddOrUpdateHelpfulLinkUrl, model, { responseType: 'json' });
    }
    AddOrUpdateSlider(model) {
        return this.http.post(this.AddOrUpdateSliderUrl, model, { responseType: 'json' });
    }
    RemoveSlide(model) {
        return this.http.post(this.RemoveSlideUrl, model, { responseType: 'json' });
    }
    ActiveSlide(model) {
        return this.http.post(this.ActiveSlideUrl, model, { responseType: 'json' });
    }
    AddOrUpdateTunerPlusAccess(model) {
        return this.http.post(this.AddOrUpdateTunerPlusAccessUrl, model, { responseType: 'json' });
    }
    AddOrUpdateCommonQuestion(model) {
        return this.http.post(this.AddOrUpdateCommonQuestionUrl, model, { responseType: 'json' });
    }
    RemoveHelpfulLink(id) {
        return this.http.post(this.RemoveHelpfulLinkUrl, id, { responseType: 'json' });
    }
    RemoveTunerPlusAccess(id) {
        return this.http.post(this.RemoveTunerPlusAccessUrl, id, { responseType: 'json' });
    }
    RemoveDoer(id) {
        return this.http.post(this.RemoveDoerUrl, id, { responseType: 'json' });
    }
    RemoveTunerPlus(id) {
        return this.http.post(this.RemoveTunerPlusUrl, id, { responseType: 'json' });
    }
    RemoveCommonQuestion(id) {
        return this.http.post(this.RemoveCommonQuestionUrl, id, { responseType: 'json' });
    }
    GetSliders() {
        return this.http.post(this.GetAllSlidersUrl, null, { responseType: 'json' });
    }
    GetAllAdminSliders() {
        return this.http.post(this.GetAllAdminSlideUrl, null, { responseType: 'json' });
    }
    getCurrentSliders() {
        return this.homeSliders;
    }
    setCurrentSliders(sliders) {
        this.homeSliders.next(sliders);
    }
    InstagramBotUserDirectMsg(model) {
        return this.http.post(this.InstagramBotUserDirectMsgUrl, model, { responseType: 'json' });
    }
    InstagramBotFollowersDirectMsg(model) {
        return this.http.post(this.InstagramBotFollowersDirectMsgUrl, model, { responseType: 'json' });
    }
    RemoveInstagramSession() {
        return this.http.post(this.RemoveInstagramSessionUrl, { responseType: 'json' });
    }
    AddOrUpdateTunerPlus(model) {
        return this.http.post(this.AddOrUpdateTunerPlusUrl, model, { responseType: 'json' });
    }
    AddOrUpdateCarFactoryName(model) {
        return this.http.post(this.AddOrUpdateCarFactoryNameUrl, model, { responseType: 'json' });
    }
    AddOrUpdateCarModelName(model) {
        return this.http.post(this.AddOrUpdateCarModelNameUrl, model, { responseType: 'json' });
    }
    AddOrUpdateGearBoxModelName(model) {
        return this.http.post(this.AddOrUpdateGearBoxModelNameUrl, model, { responseType: 'json' });
    }
    AddOrUpdateDoer(model) {
        return this.http.post(this.AddOrUpdateDoerUrl, model, { responseType: 'json' });
    }
    AddOrUpdatePublicMessage(model) {
        return this.http.post(this.AddOrUpdatePublicMessageUrl, model, { responseType: 'json' });
    }
    AdminUpdateDoerOrder(model) {
        return this.http.post(this.AdminUpdateDoerOrderUrl, model, { responseType: 'json' });
    }
    DeleteCarFactoryName(id) {
        return this.http.post(this.DeleteCarFactoryNameUrl, id, { responseType: 'json' });
    }
    DeleteCarModelName(id) {
        return this.http.post(this.DeleteCarModelNameUrl, id, { responseType: 'json' });
    }
    DeleteGearBoxModelName(id) {
        return this.http.post(this.DeleteGearBoxModelNameUrl, id, { responseType: 'json' });
    }
    GetAllTunerPlus() {
        return this.http.post(this.GetAllTunerPlusUrl, { responseType: 'json' });
    }
    GetAllGearRatio() {
        return this.http.post(this.GetAllGearRatioUrl, { responseType: 'json' });
    }
    AdminGetAllGearRatio() {
        return this.http.post(this.AdminGetAllGearRatioUrl, { responseType: 'json' });
    }
    GetAllCommonQuestions() {
        return this.http.post(this.GetAllCommonQuestionsUrl, { responseType: 'json' });
    }
    GetAllTunerPlusCourses() {
        return this.http.post(this.GetAllTunerPlusCoursesUrl, { responseType: 'json' });
    }
    GetTunerPlusById(id) {
        return this.http.post(this.GetTunerPlusByIdUrl, id, { responseType: 'json' });
    }
    GetAllTunerPlusCourseById(id) {
        return this.http.post(this.GetAllTunerPlusCourseByIdUrl, id, { responseType: 'json' });
    }
};
SliderService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
SliderService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], SliderService);



/***/ }),

/***/ 55007:
/*!***************************************************!*\
  !*** ./src/app/data/service/user/user.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);

/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/naming-convention */


let UserService = class UserService {
    constructor(http) {
        this.http = http;
        this.api_key = 'b48c5eb333034d0d9a3f784df34a9b12';
        this.url = 'https://ipgeolocation.abstractapi.com/v1/?api_key=' + this.api_key;
        this.GetUserProfileUrl = '/api/User/GetUserProfile';
        this.GetPublicIpUrl = '/api/Site/GetPublicIp';
        this.GetUserIpUrl = '/api/Site/GetUserIp';
        this.GetAdminUserSocialUrl = '/api/User/GetAdminUserSocial';
        this.GetAdminUserTunerPlusAccessUrl = '/api/User/GetAdminUserTunerPlusAccess';
        this.RemoveUserTunerPlusAccessUrl = '/api/User/RemoveUserTunerPlusAccess';
        this.CheckedTunerPlusAccessUrl = '/api/User/CheckedTunerPlusAccess';
        this.GetAdminUserDetailUrl = '/api/User/GetAdminUserDetail';
        this.GetAdminUserWalletUrl = '/api/User/GetAdminUserWallet';
        this.SetAllUserDegreeSharedUrl = '/api/User/SetAllUserDegreeShared';
        this.GetAdminTeacherWalletUrl = '/api/User/GetAdminTeacherWallet';
        this.GetAdminSellerWalletUrl = '/api/User/GetAdminSellerWallet';
        this.GetUserSocialUrl = '/api/User/GetUserSocial';
        this.GetUserProductAddressUrl = '/api/User/GetUserProductAddress';
        this.GetUserDetailUrl = '/api/User/GetUserDetail';
        this.ChangeUserProfileUrl = '/api/User/ChangeUserProfile';
        this.AddOrUpdateUserDetailUrl = '/api/User/AddOrUpdateUserDetail';
        this.AdminAddOrUpdateUserDetailUrl = '/api/User/AdminAddOrUpdateUserDetail';
        this.AddOrUpdateUserSocialUrl = '/api/User/AddOrUpdateUserSocial';
        this.RemoveUserProductAddressUrl = '/api/User/RemoveUserProductAddress';
        this.AddOrUpdateUserProductAddressUrl = '/api/User/AddOrUpdateUserProductAddress';
        this.GetBuyerUserWalletUrl = '/api/User/GetBuyerUserWallet';
        this.AddOffCodeByAdminIdUrl = '/api/User/AddOffCodeByAdminId';
        this.AddLimitedOffCodeByUserPointUrl = '/api/User/AddLimitedOffCodeByUserPoint';
        this.AddLimitedOffCodeByUserPoint2Url = '/api/User/AddLimitedOffCodeByUserPoint2';
        this.GetAllOffCodesUrl = '/api/User/GetAllOffCodes';
        this.GetAdminAllOffCodesUrl = '/api/User/GetAdminAllOffCodes';
        this.GetAdminAllOffCodesByIdUrl = '/api/User/GetAdminAllOffCodesById';
        this.AdminRestoreOffCodeUrl = '/api/User/AdminRestoreOffCode';
        this.AdminDeleteOffCodeUrl = '/api/User/AdminDeleteOffCode';
        this.AddOrUpdateUserBankDetailUrl = '/api/User/AddOrUpdateUserBankDetail';
        this.AddOrUpdateSellerUserBankDetailUrl = '/api/User/AddOrUpdateSellerUserBankDetail';
        this.GetTeacherUserBankDetailUrl = '/api/User/GetTeacherUserBankDetail';
        this.GetSellerUserBankDetailUrl = '/api/User/GetSellerUserBankDetail';
        this.GetTeacherUserWalletUrl = '/api/User/GetTeacherUserWallet';
        this.GetSellerUserWalletUrl = '/api/User/GetSellerUserWallet';
        this.TeacherCashRequestUrl = '/api/User/TeacherCashRequest';
        this.SellerCashRequestUrl = '/api/User/SellerCashRequest';
        this.GetAllTeacherCashRequestsUrl = '/api/User/GetAllTeacherCashRequests';
        this.GetTeacherCashRequestsByFilterUrl = '/api/User/GetTeacherCashRequestsByFilter';
        this.GetSellerCashRequestsByFilterUrl = '/api/User/GetSellerCashRequestsByFilter';
        this.GetTeacherShowByFilterUrl = '/api/User/GetTeacherShowByFilter';
        this.GetTeacherShowProfileDetailsByIdUrl = '/api/User/GetTeacherShowProfileDetailsById';
        this.GetTeacherCoursesByIdUrl = '/api/User/GetTeacherCoursesById';
        this.GetEmailConfirmUrl = '/api/User/GetEmailConfirm';
        this.GetPhoneConfirmUrl = '/api/User/GetPhoneConfirm';
        this.SendEmailVerifyUrl = '/api/User/SendEmailVerify';
        this.PhoneConfirmUrl = '/api/User/PhoneConfirm';
        this.ForceChangeCourseVideosDirectoryNameUrl = '/api/Course/ForceChangeCourseVideosDirectoryName';
        this.GetCurrentCourseVideosDirectoryNameUrl = '/api/Course/GetCurrentCourseVideosDirectoryName';
        this.ForceChangeProductVideosDirectoryNameUrl = '/api/Product/ForceChangeProductVideosDirectoryName';
        this.GetCurrentProductVideosDirectoryNameUrl = '/api/Product/GetCurrentProductVideosDirectoryName';
        this.SendSMSVerifyUrl = '/api/User/SendSMSVerify';
        this.GetTeacherProfileUrl = '/api/User/GetTeacherProfile';
        this.GetTeacherProfileEditUrl = '/api/User/GetTeacherProfileEdit';
        this.GetSellerProfileEditUrl = '/api/User/GetSellerProfileEdit';
        this.GetTeacherProfileEditByIdUrl = '/api/User/GetTeacherProfileEditById';
        this.GetSellerProfileEditByIdUrl = '/api/User/GetSellerProfileEditById';
        this.UpdateTeacherProfileUrl = '/api/User/UpdateTeacherProfile';
        this.UpdateSellerProfileUrl = '/api/User/UpdateSellerProfile';
        this.UpdateTeacherProfileEditUrl = '/api/User/UpdateTeacherProfileEdit';
        this.UpdateSellerProfileEditUrl = '/api/User/UpdateSellerProfileEdit';
        this.UserMessageUrl = '/api/User/UserMessage';
        this.GetUserDetailFileUrl = '/api/User/GetUserDetailFile';
        this.DeVerifyAdminUserByIdUrl = '/api/User/DeVerifyAdminUserById';
        this.AdminReduceWalletUrl = '/api/User/AdminReduceWallet';
        this.AdminAddWalletUrl = '/api/User/AdminAddWallet';
        this.AdminReducePointUrl = '/api/User/AdminReducePoint';
        this.AdminAddPointUrl = '/api/User/AdminAddPoint';
        this.AdminReduceTeacherWalletUrl = '/api/User/AdminReduceTeacherWallet';
        this.AdminReduceSellerWalletUrl = '/api/User/AdminReduceSellerWallet';
        this.AdminAddTeacherWalletUrl = '/api/User/AdminAddTeacherWallet';
        this.AdminAddSellerWalletUrl = '/api/User/AdminAddSellerWallet';
        this.AdminReduceAllWalletUrl = '/api/User/AdminReduceAllWallet';
        this.AdminAddAllWalletUrl = '/api/User/AdminAddAllWallet';
        this.AdminReduceAllPointUrl = '/api/User/AdminReduceAllPoint';
        this.AdminAddAllPointUrl = '/api/User/AdminAddAllPoint';
        this.VerifyAdminUserByIdUrl = '/api/User/VerifyAdminUserById';
        this.ShowPointBySmsUrl = '/api/User/ShowPointBySms';
        this.ShowPointByEmailUrl = '/api/User/ShowPointByEmail';
        this.GetDailyPointUrl = '/api/User/GetDailyPoint';
        this.GetUserInvitesUrl = '/api/User/GetUserInvites';
    }
    GetUserProfile() {
        return this.http.get(this.GetUserProfileUrl, { responseType: 'json' });
    }
    GetUserInvites() {
        return this.http.post(this.GetUserInvitesUrl, null, { responseType: 'json' });
    }
    GetDailyPoint() {
        return this.http.post(this.GetDailyPointUrl, null, { responseType: 'json' });
    }
    GetAdminUserSocial(id) {
        return this.http.post(this.GetAdminUserSocialUrl, id, { responseType: 'json' });
    }
    GetAdminUserTunerPlusAccess(id) {
        return this.http.post(this.GetAdminUserTunerPlusAccessUrl, id, { responseType: 'json' });
    }
    RemoveUserTunerPlusAccess(id) {
        return this.http.post(this.RemoveUserTunerPlusAccessUrl, id, { responseType: 'json' });
    }
    CheckedTunerPlusAccess(id) {
        return this.http.post(this.CheckedTunerPlusAccessUrl, id, { responseType: 'json' });
    }
    GetAdminUserDetail(id) {
        return this.http.post(this.GetAdminUserDetailUrl, id, { responseType: 'json' });
    }
    GetAdminUserWallet(id) {
        return this.http.post(this.GetAdminUserWalletUrl, id, { responseType: 'json' });
    }
    ActiveDegreeShared() {
        return this.http.post(this.SetAllUserDegreeSharedUrl, 1, { responseType: 'json' });
    }
    DeActiveDegreeShared() {
        return this.http.post(this.SetAllUserDegreeSharedUrl, 0, { responseType: 'json' });
    }
    GetAdminTeacherWallet(id) {
        return this.http.post(this.GetAdminTeacherWalletUrl, id, { responseType: 'json' });
    }
    GetAdminSellerWallet(id) {
        return this.http.post(this.GetAdminSellerWalletUrl, id, { responseType: 'json' });
    }
    GetUserSocial() {
        return this.http.get(this.GetUserSocialUrl, { responseType: 'json' });
    }
    GetUserProductAddress() {
        return this.http.get(this.GetUserProductAddressUrl, { responseType: 'json' });
    }
    GetUserDetail() {
        return this.http.get(this.GetUserDetailUrl, { responseType: 'json' });
    }
    ChangeUserProfile(model) {
        return this.http.post(this.ChangeUserProfileUrl, model, { responseType: 'json' });
    }
    AddOrUpdateUserSocial(model) {
        return this.http.post(this.AddOrUpdateUserSocialUrl, model, { responseType: 'json' });
    }
    RemoveUserProductAddress(id) {
        return this.http.post(this.RemoveUserProductAddressUrl, id, { responseType: 'json' });
    }
    AddOrUpdateUserProductAddress(model) {
        return this.http.post(this.AddOrUpdateUserProductAddressUrl, model, { responseType: 'json' });
    }
    AddOrUpdateUserDetail(model) {
        return this.http.post(this.AddOrUpdateUserDetailUrl, model, { responseType: 'json' });
    }
    AdminAddOrUpdateUserDetail(model) {
        return this.http.post(this.AdminAddOrUpdateUserDetailUrl, model, { responseType: 'json' });
    }
    GetBuyerUserWallet() {
        return this.http.get(this.GetBuyerUserWalletUrl, { responseType: 'json' });
    }
    GetAllOffCodes() {
        return this.http.post(this.GetAllOffCodesUrl, { responseType: 'json' });
    }
    GetAdminAllOffCodes() {
        return this.http.post(this.GetAdminAllOffCodesUrl, { responseType: 'json' });
    }
    GetAdminAllOffCodesById(id) {
        return this.http.post(this.GetAdminAllOffCodesByIdUrl, id, { responseType: 'json' });
    }
    AdminDeleteOffCode(id) {
        return this.http.post(this.AdminDeleteOffCodeUrl, id, { responseType: 'json' });
    }
    AdminRestoreOffCode(id) {
        return this.http.post(this.AdminRestoreOffCodeUrl, id, { responseType: 'json' });
    }
    AddOffCodeByAdminId(model) {
        return this.http.post(this.AddOffCodeByAdminIdUrl, model, { responseType: 'json' });
    }
    AddLimitedOffCodeByUserPoint(model) {
        return this.http.post(this.AddLimitedOffCodeByUserPointUrl, model, { responseType: 'json' });
    }
    AddLimitedOffCodeByUserPoint2(model) {
        return this.http.post(this.AddLimitedOffCodeByUserPoint2Url, model, { responseType: 'json' });
    }
    AddOrUpdateUserBankDetail(model) {
        return this.http.post(this.AddOrUpdateUserBankDetailUrl, model, { responseType: 'json' });
    }
    AddOrUpdateSellerUserBankDetail(model) {
        return this.http.post(this.AddOrUpdateSellerUserBankDetailUrl, model, { responseType: 'json' });
    }
    GetTeacherUserBankDetail() {
        return this.http.post(this.GetTeacherUserBankDetailUrl, { responseType: 'json' });
    }
    GetSellerUserBankDetail() {
        return this.http.post(this.GetSellerUserBankDetailUrl, { responseType: 'json' });
    }
    GetTeacherUserWallet() {
        return this.http.post(this.GetTeacherUserWalletUrl, { responseType: 'json' });
    }
    GetSellerUserWallet() {
        return this.http.post(this.GetSellerUserWalletUrl, { responseType: 'json' });
    }
    TeacherCashRequest(price) {
        return this.http.post(this.TeacherCashRequestUrl, price, { responseType: 'json' });
    }
    SellerCashRequest(price) {
        return this.http.post(this.SellerCashRequestUrl, price, { responseType: 'json' });
    }
    GetTeacherCashRequestsByFilter(model) {
        return this.http.post(this.GetTeacherCashRequestsByFilterUrl, model, { responseType: 'json' });
    }
    GetSellerCashRequestsByFilter(model) {
        return this.http.post(this.GetSellerCashRequestsByFilterUrl, model, { responseType: 'json' });
    }
    GetTeacherShowByFilter(model) {
        return this.http.post(this.GetTeacherShowByFilterUrl, model, { responseType: 'json' });
    }
    GetTeacherShowProfileDetailsById(id) {
        return this.http.post(this.GetTeacherShowProfileDetailsByIdUrl, id, { responseType: 'json' });
    }
    GetTeacherCoursesById(id) {
        return this.http.post(this.GetTeacherCoursesByIdUrl, id, { responseType: 'json' });
    }
    GetAllTeacherCashRequests() {
        return this.http.post(this.GetAllTeacherCashRequestsUrl, { responseType: 'json' });
    }
    GetEmailConfirm() {
        return this.http.post(this.GetEmailConfirmUrl, { responseType: 'json' });
    }
    GetPhoneConfirm() {
        return this.http.post(this.GetPhoneConfirmUrl, { responseType: 'json' });
    }
    SendEmailVerify() {
        return this.http.post(this.SendEmailVerifyUrl, { responseType: 'json' });
    }
    PhoneConfirm(code) {
        return this.http.post(this.PhoneConfirmUrl, +code, { responseType: 'json' });
    }
    SendSMSVerify() {
        return this.http.post(this.SendSMSVerifyUrl, { responseType: 'json' });
    }
    GetTeacherProfile() {
        return this.http.post(this.GetTeacherProfileUrl, { responseType: 'json' });
    }
    GetTeacherProfileEdit() {
        return this.http.post(this.GetTeacherProfileEditUrl, { responseType: 'json' });
    }
    GetSellerProfileEdit() {
        return this.http.post(this.GetSellerProfileEditUrl, { responseType: 'json' });
    }
    GetTeacherProfileEditById(id) {
        return this.http.post(this.GetTeacherProfileEditByIdUrl, id, { responseType: 'json' });
    }
    GetSellerProfileEditById(id) {
        return this.http.post(this.GetSellerProfileEditByIdUrl, id, { responseType: 'json' });
    }
    UpdateTeacherProfile(model) {
        return this.http.post(this.UpdateTeacherProfileUrl, model, { responseType: 'json' });
    }
    UpdateSellerProfile(model) {
        return this.http.post(this.UpdateSellerProfileUrl, model, { responseType: 'json' });
    }
    UpdateTeacherProfileEdit(model) {
        return this.http.post(this.UpdateTeacherProfileEditUrl, model, { responseType: 'json' });
    }
    UpdateSellerProfileEdit(model) {
        return this.http.post(this.UpdateSellerProfileEditUrl, model, { responseType: 'json' });
    }
    UserMessage(model) {
        return this.http.post(this.UserMessageUrl, model, { responseType: 'json' });
    }
    GetUserDetailFile(userId) {
        return this.http.post(this.GetUserDetailFileUrl, userId, { responseType: 'blob' });
    }
    VerifyAdminUserById(id) {
        return this.http
            .post(this.VerifyAdminUserByIdUrl, id, { responseType: 'json' });
    }
    ShowPointBySms(id) {
        return this.http
            .post(this.ShowPointBySmsUrl, id, { responseType: 'json' });
    }
    ShowPointByEmail(id) {
        return this.http
            .post(this.ShowPointByEmailUrl, id, { responseType: 'json' });
    }
    DeVerifyAdminUserById(id) {
        return this.http
            .post(this.DeVerifyAdminUserByIdUrl, id, { responseType: 'json' });
    }
    AdminReduceWallet(model) {
        return this.http
            .post(this.AdminReduceWalletUrl, model, { responseType: 'json' });
    }
    AdminAddWallet(model) {
        return this.http
            .post(this.AdminAddWalletUrl, model, { responseType: 'json' });
    }
    AdminReducePoint(model) {
        return this.http
            .post(this.AdminReducePointUrl, model, { responseType: 'json' });
    }
    AdminAddPoint(model) {
        return this.http
            .post(this.AdminAddPointUrl, model, { responseType: 'json' });
    }
    AdminReduceTeacherWallet(model) {
        return this.http
            .post(this.AdminReduceTeacherWalletUrl, model, { responseType: 'json' });
    }
    AdminReduceSellerWallet(model) {
        return this.http
            .post(this.AdminReduceSellerWalletUrl, model, { responseType: 'json' });
    }
    AdminAddTeacherWallet(model) {
        return this.http
            .post(this.AdminAddTeacherWalletUrl, model, { responseType: 'json' });
    }
    AdminAddSellerWallet(model) {
        return this.http
            .post(this.AdminAddSellerWalletUrl, model, { responseType: 'json' });
    }
    AdminReduceAllWallet(cash) {
        return this.http
            .post(this.AdminReduceAllWalletUrl, cash, { responseType: 'json' });
    }
    AdminAddAllWallet(cash) {
        return this.http
            .post(this.AdminAddAllWalletUrl, cash, { responseType: 'json' });
    }
    AdminReduceAllPoint(cash) {
        return this.http
            .post(this.AdminReduceAllPointUrl, cash, { responseType: 'json' });
    }
    AdminAddAllPoint(cash) {
        return this.http
            .post(this.AdminAddAllPointUrl, cash, { responseType: 'json' });
    }
    ForceChangeCourseVideosDirectoryName() {
        return this.http
            .post(this.ForceChangeCourseVideosDirectoryNameUrl, { responseType: 'json' });
    }
    GetCurrentCourseVideosDirectoryName() {
        return this.http
            // tslint:disable-next-line: max-line-length
            .post(this.GetCurrentCourseVideosDirectoryNameUrl, { responseType: 'json' });
    }
    ForceChangeProductVideosDirectoryName() {
        return this.http
            .post(this.ForceChangeProductVideosDirectoryNameUrl, { responseType: 'json' });
    }
    GetCurrentProductVideosDirectoryName() {
        return this.http
            // tslint:disable-next-line: max-line-length
            .post(this.GetCurrentProductVideosDirectoryNameUrl, { responseType: 'json' });
    }
    getIPAddress() {
        return this.http.get(this.url);
    }
    getIPAddress2() {
        return this.http.get('https://api64.ipify.org?format=json');
    }
    GetPublicIp() {
        return this.http.get(this.GetPublicIpUrl, { responseType: 'json' });
    }
    GetUserIp() {
        return this.http.get(this.GetUserIpUrl, { responseType: 'json' });
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
UserService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], UserService);



/***/ }),

/***/ 27405:
/*!*********************************************************************!*\
  !*** ./src/app/view/components/common/loading/loading.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingComponent": () => (/* binding */ LoadingComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _loading_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loading.component.html?ngResource */ 6266);
/* harmony import */ var _loading_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loading.component.scss?ngResource */ 3230);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _core_common_G__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../core/common/G */ 67122);





let LoadingComponent = class LoadingComponent {
    constructor() {
        this.isloading = false;
    }
    ngOnInit() {
        _core_common_G__WEBPACK_IMPORTED_MODULE_2__.G.getIsLoading().subscribe(res => {
            this.isloading = res;
        });
    }
};
LoadingComponent.ctorParameters = () => [];
LoadingComponent.propDecorators = {
    isloading: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
LoadingComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-loading',
        template: _loading_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_loading_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoadingComponent);



/***/ }),

/***/ 90876:
/*!******************************************************************!*\
  !*** ./src/app/view/components/common/loading/loading.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingModule": () => (/* binding */ LoadingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _loading_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loading.component */ 27405);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);





let LoadingModule = class LoadingModule {
};
LoadingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        declarations: [_loading_component__WEBPACK_IMPORTED_MODULE_0__.LoadingComponent],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule
        ],
        exports: [_loading_component__WEBPACK_IMPORTED_MODULE_0__.LoadingComponent]
    })
], LoadingModule);



/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiBaseUrl: 'http://localhost:5100',
    siteBaseUrl: 'http://localhost:4300'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 76057);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		70079,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		25593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		13225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		86655,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		44856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		13059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		58648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		98308,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		44690,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		64090,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		36214,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		69447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		79689,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		18840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		40749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		69667,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		83288,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		35473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		53634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		22855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		58737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		99632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		54446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		32275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		48050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		18994,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		23592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		35454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		92666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		64816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		45534,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		94902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		91938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		78179,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		90668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		61624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		19989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		28902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		70199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		48395,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		96357,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		38268,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		15269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		32875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 93952:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/core/i18n/language-switcher.component.ts.css?ngResource!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=Lmxhbmd1YWdlLXN3aXRjaGVye2Rpc3BsYXk6aW5saW5lLWZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7bWluLXdpZHRoOjQycHg7bWluLWhlaWdodDozNnB4O3BhZGRpbmc6MCA5cHg7Ym9yZGVyOjFweCBzb2xpZCBjdXJyZW50Q29sb3I7Ym9yZGVyLXJhZGl1czoxMHB4O2NvbG9yOmluaGVyaXQ7dGV4dC1kZWNvcmF0aW9uOm5vbmU7Zm9udDo3MDAgMTNweCBBcmlhbCxzYW5zLXNlcmlmfS5sYW5ndWFnZS1zd2l0Y2hlcjpmb2N1cy12aXNpYmxle291dGxpbmU6MnB4IHNvbGlkICNlNjM5NDY7b3V0bGluZS1vZmZzZXQ6MnB4fQ%3D%3D!./src/app/core/i18n/language-switcher.component.ts ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = ".language-switcher{display:inline-flex;align-items:center;justify-content:center;min-width:42px;min-height:36px;padding:0 9px;border:1px solid currentColor;border-radius:10px;color:inherit;text-decoration:none;font:700 13px Arial,sans-serif}.language-switcher:focus-visible{outline:2px solid #e63946;outline-offset:2px}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhbmd1YWdlLXN3aXRjaGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxtQkFBbUIsbUJBQW1CLENBQUMsa0JBQWtCLENBQUMsc0JBQXNCLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsNkJBQTZCLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDLG9CQUFvQixDQUFDLDhCQUE4QixDQUFDLGlDQUFpQyx5QkFBeUIsQ0FBQyxrQkFBa0IiLCJmaWxlIjoibGFuZ3VhZ2Utc3dpdGNoZXIuY29tcG9uZW50LnRzIiwic291cmNlc0NvbnRlbnQiOlsiLmxhbmd1YWdlLXN3aXRjaGVye2Rpc3BsYXk6aW5saW5lLWZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7bWluLXdpZHRoOjQycHg7bWluLWhlaWdodDozNnB4O3BhZGRpbmc6MCA5cHg7Ym9yZGVyOjFweCBzb2xpZCBjdXJyZW50Q29sb3I7Ym9yZGVyLXJhZGl1czoxMHB4O2NvbG9yOmluaGVyaXQ7dGV4dC1kZWNvcmF0aW9uOm5vbmU7Zm9udDo3MDAgMTNweCBBcmlhbCxzYW5zLXNlcmlmfS5sYW5ndWFnZS1zd2l0Y2hlcjpmb2N1cy12aXNpYmxle291dGxpbmU6MnB4IHNvbGlkICNlNjM5NDY7b3V0bGluZS1vZmZzZXQ6MnB4fSJdfQ== */";

/***/ }),

/***/ 79259:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = ".app-side-menu {\n  --menu-canvas: #f6f5fc;\n  --menu-surface: #ffffff;\n  --menu-border: #e6e2f3;\n  --menu-ink: #29243d;\n  --menu-accent: #6d28d9;\n  --menu-soft: #f0ebfb;\n  --menu-selected: #e8ddfb;\n  --width: min(88vw, 360px);\n  --max-width: 360px;\n  font-family: \"Shabnam\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif;\n}\n\n.app-side-menu::part(container) {\n  overflow: hidden;\n  border-radius: 24px 0 0 24px;\n  box-shadow: -20px 0 50px rgba(109, 40, 217, 0.22);\n  background: var(--menu-canvas);\n}\n\n.app-side-menu[dir=ltr]::part(container) {\n  border-radius: 0 24px 24px 0;\n  box-shadow: 20px 0 50px rgba(109, 40, 217, 0.22);\n}\n\n.app-side-menu::part(backdrop) {\n  background: rgba(15, 23, 42, 0.55);\n  backdrop-filter: blur(6px);\n  -webkit-backdrop-filter: blur(6px);\n}\n\n.menu-header {\n  box-shadow: 0 8px 24px rgba(109, 40, 217, 0.18);\n}\n\n.menu-brand-toolbar {\n  --min-height: 90px;\n  --padding-start: 18px;\n  --padding-end: 14px;\n  --background: linear-gradient(135deg, #52318e 0%, #7150bd 55%, #9573d5 100%);\n  --color: #ffffff;\n}\n\n.menu-brand {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  gap: 12px;\n}\n\n.menu-brand__logo {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex: 0 0 auto;\n  width: 86px;\n  height: 54px;\n  padding: 4px 8px;\n  border: 1px solid rgba(255, 255, 255, 0.4);\n  border-radius: 14px;\n  background: #ffffff;\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);\n}\n\n.menu-brand__logo img {\n  width: 100%;\n  height: 100%;\n  max-height: 46px;\n  object-fit: contain;\n  display: block;\n}\n\n.menu-brand__copy {\n  display: flex;\n  min-width: 0;\n  flex: 1;\n  flex-direction: column;\n}\n\n.menu-brand__copy strong {\n  font-size: 1.15rem;\n  font-weight: 900;\n  color: #ffffff;\n  letter-spacing: -0.3px;\n}\n\n.menu-brand__copy small {\n  margin-top: 3px;\n  color: rgba(255, 255, 255, 0.85);\n  font-size: 0.72rem;\n  font-weight: 500;\n}\n\n.menu-close ion-button {\n  --color: #ffffff;\n  --border-radius: 12px;\n  --background: rgba(255, 255, 255, 0.15);\n  --background-hover: rgba(255, 255, 255, 0.28);\n  width: 40px;\n  height: 40px;\n  margin: 0;\n}\n\n.menu-content {\n  --padding-top: 14px;\n  --padding-bottom: 24px;\n  --background: var(--menu-canvas);\n}\n\n.menu-content::part(scroll) {\n  scrollbar-width: thin;\n  scrollbar-color: rgba(109, 40, 217, 0.3) transparent;\n}\n\n.app-side-menu ion-list {\n  margin: 0 12px 12px;\n  padding: 8px;\n  border: 1px solid var(--menu-border);\n  border-radius: 20px;\n  background: var(--menu-surface);\n  box-shadow: 0 6px 20px rgba(109, 40, 217, 0.04);\n}\n\n.app-side-menu ion-list-header {\n  min-height: 36px;\n  padding-inline: 14px;\n  color: var(--menu-accent);\n  font-size: 0.75rem;\n  font-weight: 800;\n  letter-spacing: 0;\n}\n\n.app-side-menu ion-list-header::after {\n  content: \"\";\n  flex: 1;\n  height: 1px;\n  margin-right: 12px;\n  background: linear-gradient(90deg, transparent, rgba(109, 40, 217, 0.25));\n}\n\n.app-side-menu ion-item {\n  --min-height: 50px;\n  --padding-start: 12px;\n  --padding-end: 10px;\n  --inner-padding-end: 8px;\n  --border-radius: 14px;\n  --background: transparent;\n  --background-hover: var(--menu-soft);\n  --color: var(--menu-ink);\n  margin: 3px 0 !important;\n  font-size: 0.88rem;\n  font-weight: 600;\n  transition: all 0.2s ease;\n}\n\n.app-side-menu ion-item:hover {\n  transform: translateX(-3px);\n  color: var(--menu-accent);\n}\n\n.app-side-menu ion-item ion-icon {\n  --ion-color-base: var(--menu-accent) !important;\n  width: 22px;\n  height: 22px;\n  margin-inline-end: 12px;\n  padding: 7px;\n  border-radius: 12px;\n  background: var(--menu-soft);\n  color: var(--menu-accent) !important;\n}\n\n.app-side-menu ion-item.selected {\n  --background: var(--menu-selected);\n  --color: var(--menu-accent);\n  font-weight: 800;\n}\n\n.app-side-menu ion-item.selected::part(native) {\n  box-shadow: inset -4px 0 0 var(--menu-accent);\n}\n\n.app-side-menu ion-item.selected ion-icon {\n  --ion-color-base: #ffffff !important;\n  background: var(--menu-accent);\n  color: #ffffff !important;\n}\n\n.app-side-menu ion-item[disabled] {\n  opacity: 0.45;\n}\n\n.app-side-menu ion-badge {\n  min-width: 22px;\n  border-radius: 999px;\n  background: #f59e0b;\n  color: #fff;\n}\n\n.app-side-menu ion-toggle {\n  --track-background-checked: rgba(109, 40, 217, 0.35);\n  --handle-background-checked: var(--menu-accent);\n}\n\n@media (max-width: 380px) {\n  .menu-brand__copy small {\n    display: none;\n  }\n\n  .app-side-menu ion-list {\n    margin-inline: 8px;\n  }\n}\n\n.app-side-menu[dir=ltr] ion-list-header::after {\n  margin-right: 0;\n  margin-left: 12px;\n}\n\n.dark-theme .app-side-menu {\n  --menu-canvas: #141223;\n  --menu-surface: #201c33;\n  --menu-border: #38304e;\n  --menu-ink: #f2eefb;\n  --menu-accent: #c4a5ff;\n  --menu-soft: #302642;\n  --menu-selected: #3a2a55;\n  --ion-text-color: var(--menu-ink);\n  --ion-background-color: var(--menu-canvas);\n}\n\n.dark-theme .menu-brand-toolbar {\n  --background: linear-gradient(135deg, #251b3d, #46306d);\n}\n\n.dark-theme .app-side-menu ion-item.selected ion-icon {\n  --ion-color-base: #241837 !important;\n  color: #241837 !important;\n}\n\n.app-side-menu ion-toggle {\n  --track-background: #d7d1e6;\n  --track-background-checked: #8b5cf6;\n  --handle-background: #ffffff;\n  --handle-background-checked: #ffffff;\n}\n\n.app-side-menu ion-item:focus-within {\n  --background: var(--menu-soft);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLHdCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlGQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0EsaURBQUE7RUFDQSw4QkFBQTtBQUVGOztBQUFBO0VBQ0UsNEJBQUE7RUFDQSxnREFBQTtBQUdGOztBQURBO0VBQ0Usa0NBQUE7RUFDQSwwQkFBQTtFQUNBLGtDQUFBO0FBSUY7O0FBREE7RUFDRSwrQ0FBQTtBQUlGOztBQUZBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsNEVBQUE7RUFDQSxnQkFBQTtBQUtGOztBQUhBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7QUFNRjs7QUFKQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQTtBQU9GOztBQUxBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQVFGOztBQU5BO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0Esc0JBQUE7QUFTRjs7QUFQQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7QUFVRjs7QUFSQTtFQUNFLGVBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFXRjs7QUFUQTtFQUNFLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSx1Q0FBQTtFQUNBLDZDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0FBWUY7O0FBVEE7RUFDRSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0NBQUE7QUFZRjs7QUFWQTtFQUNFLHFCQUFBO0VBQ0Esb0RBQUE7QUFhRjs7QUFYQTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtFQUNBLCtDQUFBO0FBY0Y7O0FBWkE7RUFDRSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFlRjs7QUFiQTtFQUNFLFdBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EseUVBQUE7QUFnQkY7O0FBZEE7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxvQ0FBQTtFQUNBLHdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFpQkY7O0FBZkE7RUFDRSwyQkFBQTtFQUNBLHlCQUFBO0FBa0JGOztBQWhCQTtFQUNFLCtDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0Esb0NBQUE7QUFtQkY7O0FBakJBO0VBQ0Usa0NBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0FBb0JGOztBQWxCQTtFQUNFLDZDQUFBO0FBcUJGOztBQW5CQTtFQUNFLG9DQUFBO0VBQ0EsOEJBQUE7RUFDQSx5QkFBQTtBQXNCRjs7QUFwQkE7RUFDRSxhQUFBO0FBdUJGOztBQXJCQTtFQUNFLGVBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQXdCRjs7QUF0QkE7RUFDRSxvREFBQTtFQUNBLCtDQUFBO0FBeUJGOztBQXRCQTtFQUNFO0lBQTBCLGFBQUE7RUEwQjFCOztFQXpCQTtJQUEwQixrQkFBQTtFQTZCMUI7QUFDRjs7QUE1QkE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUE4QkY7O0FBM0JBO0VBQ0Usc0JBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQ0FBQTtFQUNBLDBDQUFBO0FBOEJGOztBQTVCQTtFQUNFLHVEQUFBO0FBK0JGOztBQTdCQTtFQUNFLG9DQUFBO0VBQ0EseUJBQUE7QUFnQ0Y7O0FBOUJBO0VBQ0UsMkJBQUE7RUFDQSxtQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esb0NBQUE7QUFpQ0Y7O0FBL0JBO0VBQ0UsOEJBQUE7QUFrQ0YiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcC1zaWRlLW1lbnUge1xyXG4gIC0tbWVudS1jYW52YXM6ICNmNmY1ZmM7XHJcbiAgLS1tZW51LXN1cmZhY2U6ICNmZmZmZmY7XHJcbiAgLS1tZW51LWJvcmRlcjogI2U2ZTJmMztcclxuICAtLW1lbnUtaW5rOiAjMjkyNDNkO1xyXG4gIC0tbWVudS1hY2NlbnQ6ICM2ZDI4ZDk7XHJcbiAgLS1tZW51LXNvZnQ6ICNmMGViZmI7XHJcbiAgLS1tZW51LXNlbGVjdGVkOiAjZThkZGZiO1xyXG4gIC0td2lkdGg6IG1pbig4OHZ3LCAzNjBweCk7XHJcbiAgLS1tYXgtd2lkdGg6IDM2MHB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnU2hhYm5hbScsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5hcHAtc2lkZS1tZW51OjpwYXJ0KGNvbnRhaW5lcikge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYm9yZGVyLXJhZGl1czogMjRweCAwIDAgMjRweDtcclxuICBib3gtc2hhZG93OiAtMjBweCAwIDUwcHggcmdiYSgxMDksIDQwLCAyMTcsIDAuMjIpO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLW1lbnUtY2FudmFzKTtcclxufVxyXG4uYXBwLXNpZGUtbWVudVtkaXI9J2x0ciddOjpwYXJ0KGNvbnRhaW5lcikge1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgMjRweCAyNHB4IDA7XHJcbiAgYm94LXNoYWRvdzogMjBweCAwIDUwcHggcmdiYSgxMDksIDQwLCAyMTcsIDAuMjIpO1xyXG59XHJcbi5hcHAtc2lkZS1tZW51OjpwYXJ0KGJhY2tkcm9wKSB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgxNSwgMjMsIDQyLCAwLjU1KTtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNnB4KTtcclxuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cig2cHgpO1xyXG59XHJcblxyXG4ubWVudS1oZWFkZXIge1xyXG4gIGJveC1zaGFkb3c6IDAgOHB4IDI0cHggcmdiYSgxMDksIDQwLCAyMTcsIDAuMTgpO1xyXG59XHJcbi5tZW51LWJyYW5kLXRvb2xiYXIge1xyXG4gIC0tbWluLWhlaWdodDogOTBweDtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDE4cHg7XHJcbiAgLS1wYWRkaW5nLWVuZDogMTRweDtcclxuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM1MjMxOGUgMCUsICM3MTUwYmQgNTUlLCAjOTU3M2Q1IDEwMCUpO1xyXG4gIC0tY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuLm1lbnUtYnJhbmQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBnYXA6IDEycHg7XHJcbn1cclxuLm1lbnUtYnJhbmRfX2xvZ28ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmbGV4OiAwIDAgYXV0bztcclxuICB3aWR0aDogODZweDtcclxuICBoZWlnaHQ6IDU0cHg7XHJcbiAgcGFkZGluZzogNHB4IDhweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIGJveC1zaGFkb3c6IDAgOHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxufVxyXG4ubWVudS1icmFuZF9fbG9nbyBpbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtYXgtaGVpZ2h0OiA0NnB4O1xyXG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLm1lbnUtYnJhbmRfX2NvcHkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWluLXdpZHRoOiAwO1xyXG4gIGZsZXg6IDE7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG4ubWVudS1icmFuZF9fY29weSBzdHJvbmcge1xyXG4gIGZvbnQtc2l6ZTogMS4xNXJlbTtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMC4zcHg7XHJcbn1cclxuLm1lbnUtYnJhbmRfX2NvcHkgc21hbGwge1xyXG4gIG1hcmdpbi10b3A6IDNweDtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg1KTtcclxuICBmb250LXNpemU6IDAuNzJyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG4ubWVudS1jbG9zZSBpb24tYnV0dG9uIHtcclxuICAtLWNvbG9yOiAjZmZmZmZmO1xyXG4gIC0tYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAtLWJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XHJcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjgpO1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5tZW51LWNvbnRlbnQge1xyXG4gIC0tcGFkZGluZy10b3A6IDE0cHg7XHJcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjRweDtcclxuICAtLWJhY2tncm91bmQ6IHZhcigtLW1lbnUtY2FudmFzKTtcclxufVxyXG4ubWVudS1jb250ZW50OjpwYXJ0KHNjcm9sbCkge1xyXG4gIHNjcm9sbGJhci13aWR0aDogdGhpbjtcclxuICBzY3JvbGxiYXItY29sb3I6IHJnYmEoMTA5LCA0MCwgMjE3LCAwLjMpIHRyYW5zcGFyZW50O1xyXG59XHJcbi5hcHAtc2lkZS1tZW51IGlvbi1saXN0IHtcclxuICBtYXJnaW46IDAgMTJweCAxMnB4O1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1tZW51LWJvcmRlcik7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1tZW51LXN1cmZhY2UpO1xyXG4gIGJveC1zaGFkb3c6IDAgNnB4IDIwcHggcmdiYSgxMDksIDQwLCAyMTcsIDAuMDQpO1xyXG59XHJcbi5hcHAtc2lkZS1tZW51IGlvbi1saXN0LWhlYWRlciB7XHJcbiAgbWluLWhlaWdodDogMzZweDtcclxuICBwYWRkaW5nLWlubGluZTogMTRweDtcclxuICBjb2xvcjogdmFyKC0tbWVudS1hY2NlbnQpO1xyXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwO1xyXG59XHJcbi5hcHAtc2lkZS1tZW51IGlvbi1saXN0LWhlYWRlcjo6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIGZsZXg6IDE7XHJcbiAgaGVpZ2h0OiAxcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgdHJhbnNwYXJlbnQsIHJnYmEoMTA5LCA0MCwgMjE3LCAwLjI1KSk7XHJcbn1cclxuLmFwcC1zaWRlLW1lbnUgaW9uLWl0ZW0ge1xyXG4gIC0tbWluLWhlaWdodDogNTBweDtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDEycHg7XHJcbiAgLS1wYWRkaW5nLWVuZDogMTBweDtcclxuICAtLWlubmVyLXBhZGRpbmctZW5kOiA4cHg7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiAxNHB4O1xyXG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiB2YXIoLS1tZW51LXNvZnQpO1xyXG4gIC0tY29sb3I6IHZhcigtLW1lbnUtaW5rKTtcclxuICBtYXJnaW46IDNweCAwICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAwLjg4cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxufVxyXG4uYXBwLXNpZGUtbWVudSBpb24taXRlbTpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zcHgpO1xyXG4gIGNvbG9yOiB2YXIoLS1tZW51LWFjY2VudCk7XHJcbn1cclxuLmFwcC1zaWRlLW1lbnUgaW9uLWl0ZW0gaW9uLWljb24ge1xyXG4gIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLW1lbnUtYWNjZW50KSAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiAyMnB4O1xyXG4gIGhlaWdodDogMjJweDtcclxuICBtYXJnaW4taW5saW5lLWVuZDogMTJweDtcclxuICBwYWRkaW5nOiA3cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1tZW51LXNvZnQpO1xyXG4gIGNvbG9yOiB2YXIoLS1tZW51LWFjY2VudCkgIWltcG9ydGFudDtcclxufVxyXG4uYXBwLXNpZGUtbWVudSBpb24taXRlbS5zZWxlY3RlZCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1tZW51LXNlbGVjdGVkKTtcclxuICAtLWNvbG9yOiB2YXIoLS1tZW51LWFjY2VudCk7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxufVxyXG4uYXBwLXNpZGUtbWVudSBpb24taXRlbS5zZWxlY3RlZDo6cGFydChuYXRpdmUpIHtcclxuICBib3gtc2hhZG93OiBpbnNldCAtNHB4IDAgMCB2YXIoLS1tZW51LWFjY2VudCk7XHJcbn1cclxuLmFwcC1zaWRlLW1lbnUgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xyXG4gIC0taW9uLWNvbG9yLWJhc2U6ICNmZmZmZmYgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1tZW51LWFjY2VudCk7XHJcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcclxufVxyXG4uYXBwLXNpZGUtbWVudSBpb24taXRlbVtkaXNhYmxlZF0ge1xyXG4gIG9wYWNpdHk6IDAuNDU7XHJcbn1cclxuLmFwcC1zaWRlLW1lbnUgaW9uLWJhZGdlIHtcclxuICBtaW4td2lkdGg6IDIycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XHJcbiAgYmFja2dyb3VuZDogI2Y1OWUwYjtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG4uYXBwLXNpZGUtbWVudSBpb24tdG9nZ2xlIHtcclxuICAtLXRyYWNrLWJhY2tncm91bmQtY2hlY2tlZDogcmdiYSgxMDksIDQwLCAyMTcsIDAuMzUpO1xyXG4gIC0taGFuZGxlLWJhY2tncm91bmQtY2hlY2tlZDogdmFyKC0tbWVudS1hY2NlbnQpO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMzgwcHgpIHtcclxuICAubWVudS1icmFuZF9fY29weSBzbWFsbCB7IGRpc3BsYXk6IG5vbmU7IH1cclxuICAuYXBwLXNpZGUtbWVudSBpb24tbGlzdCB7IG1hcmdpbi1pbmxpbmU6IDhweDsgfVxyXG59XHJcbi5hcHAtc2lkZS1tZW51W2Rpcj0nbHRyJ10gaW9uLWxpc3QtaGVhZGVyOjphZnRlciB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gIG1hcmdpbi1sZWZ0OiAxMnB4O1xyXG59XHJcblxyXG4uZGFyay10aGVtZSAuYXBwLXNpZGUtbWVudSB7XHJcbiAgLS1tZW51LWNhbnZhczogIzE0MTIyMztcclxuICAtLW1lbnUtc3VyZmFjZTogIzIwMWMzMztcclxuICAtLW1lbnUtYm9yZGVyOiAjMzgzMDRlO1xyXG4gIC0tbWVudS1pbms6ICNmMmVlZmI7XHJcbiAgLS1tZW51LWFjY2VudDogI2M0YTVmZjtcclxuICAtLW1lbnUtc29mdDogIzMwMjY0MjtcclxuICAtLW1lbnUtc2VsZWN0ZWQ6ICMzYTJhNTU7XHJcbiAgLS1pb24tdGV4dC1jb2xvcjogdmFyKC0tbWVudS1pbmspO1xyXG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHZhcigtLW1lbnUtY2FudmFzKTtcclxufVxyXG4uZGFyay10aGVtZSAubWVudS1icmFuZC10b29sYmFyIHtcclxuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMyNTFiM2QsICM0NjMwNmQpO1xyXG59XHJcbi5kYXJrLXRoZW1lIC5hcHAtc2lkZS1tZW51IGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcclxuICAtLWlvbi1jb2xvci1iYXNlOiAjMjQxODM3ICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICMyNDE4MzcgIWltcG9ydGFudDtcclxufVxyXG4uYXBwLXNpZGUtbWVudSBpb24tdG9nZ2xlIHtcclxuICAtLXRyYWNrLWJhY2tncm91bmQ6ICNkN2QxZTY7XHJcbiAgLS10cmFjay1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICM4YjVjZjY7XHJcbiAgLS1oYW5kbGUtYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAtLWhhbmRsZS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICNmZmZmZmY7XHJcbn1cclxuLmFwcC1zaWRlLW1lbnUgaW9uLWl0ZW06Zm9jdXMtd2l0aGluIHtcclxuICAtLWJhY2tncm91bmQ6IHZhcigtLW1lbnUtc29mdCk7XHJcbn1cclxuXHJcbiJdfQ== */";

/***/ }),

/***/ 3230:
/*!**********************************************************************************!*\
  !*** ./src/app/view/components/common/loading/loading.component.scss?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2FkaW5nLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 33383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app [class.dark-theme]=\"dark\" [attr.dir]=\"language.direction\">\n  <!-- <ion-split-pane contentId=\"main-content\"> -->\r\n  <ion-menu class=\"app-side-menu\" type=\"overlay\" [attr.dir]=\"language.direction\" side=\"start\" contentId=\"main-content\">\n    <ion-header class=\"menu-header\">\n      <ion-toolbar class=\"menu-brand-toolbar\">\n        <div class=\"menu-brand\">\n          <span class=\"menu-brand__logo avalamooz-logo-frame\"><img width=\"144\" height=\"44\" class=\"avalamooz-logo\" src=\"assets/learning/brand/logo.png\" alt=\"اول آموز\" /></span>\n          <span class=\"menu-brand__copy\"><strong>{{ 'brand.name' | translate }}</strong><small>{{ 'brand.tagline' | translate }}</small></span>\n          <!-- Language switcher hidden as requested -->\n          <ion-menu-toggle class=\"menu-close\" autoHide=\"false\"><ion-button fill=\"clear\" [attr.aria-label]=\"'common.closeMenu' | translate\"><ion-icon slot=\"icon-only\" name=\"close-outline\"></ion-icon></ion-button></ion-menu-toggle>\n        </div>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content class=\"menu-content\">\n      <ion-list lines=\"none\">\r\n        <ion-item *ngIf=\"update\">\r\n          <ion-icon\r\n            class=\"blink-image\"\r\n            color=\"success\"\r\n            slot=\"start\"\r\n            name=\"git-compare-outline\"\r\n          ></ion-icon>\r\n          <ion-label>{{ 'common.updating' | translate }}</ion-label>\n        </ion-item>\r\n\r\n        <ion-list-header>{{ 'common.pages' | translate }}</ion-list-header>\n        <ion-menu-toggle\r\n          autoHide=\"false\"\r\n          *ngFor=\"let p of appPages; let i = index\"\n          [hidden]=\"p.title == 'فروشگاه' || p.url == '/Home/Product' || p.url == '/Product' || p.url == '/Products' || p.url == '/Teachers' || p.url == '/Doers' || p.title == 'مدرسین' || p.title == 'نمایندگان' || p.titleKey == 'nav.teachers' || p.titleKey == 'nav.doers'\"\r\n        >\r\n          <ion-item\r\n            *ngIf=\"p.title == 'دسته بندی دوره ها' || p.title == 'دسته بندی محصولات'\"\r\n            style=\"margin-right: 25px\"\r\n            [routerLink]=\"p.url\"\r\n            routerLinkActive=\"selected\"\r\n            routerDirection=\"root\"\r\n            [routerLinkActiveOptions]=\"{ exact: true }\"\r\n            detail=\"false\"\r\n          >\r\n            <ion-icon\r\n              size=\"small\"\r\n              [color]=\"p.color\"\r\n              slot=\"start\"\r\n              [name]=\"p.icon + '-outline'\"\r\n            ></ion-icon>\r\n            <ion-label style=\"font-size: 12px !important\">\r\n              {{ p.titleKey | translate }}\n            </ion-label>\r\n          </ion-item>\r\n\r\n          <ion-item\r\n            *ngIf=\"p.title != 'دسته بندی دوره ها' && p.title != 'دسته بندی محصولات'\"\r\n            [routerLink]=\"p.url\"\r\n            routerLinkActive=\"selected\"\r\n            routerDirection=\"root\"\r\n            [routerLinkActiveOptions]=\"{ exact: true }\"\r\n            detail=\"false\"\r\n          >\r\n            <ion-icon\r\n              [color]=\"p.color\"\r\n              slot=\"start\"\r\n              [name]=\"p.icon + '-outline'\"\r\n            ></ion-icon>\r\n            <ion-label>\r\n              {{ p.titleKey | translate }}\n            </ion-label>\r\n          </ion-item>\r\n        </ion-menu-toggle>\r\n\r\n        <ion-menu-toggle autoHide=\"false\" *ngIf=\"IsLoggedin()\">\r\n          <ion-item\r\n            routerLink=\"/Cart\"\r\n            routerLinkActive=\"selected\"\r\n            routerDirection=\"root\"\r\n            detail=\"false\"\r\n          >\r\n            <ion-icon\r\n              color=\"twitter\"\r\n              slot=\"start\"\r\n              name=\"cart-outline\"\r\n            ></ion-icon>\r\n            <ion-badge slot=\"end\" color=\"success\">{{\r\n              count + count2\r\n            }}</ion-badge>\r\n            <ion-label> {{ 'common.cart' | translate }} </ion-label>\n          </ion-item>\r\n        </ion-menu-toggle>\r\n      </ion-list>\r\n\r\n      <ion-list lines=\"none\">\r\n        <ion-list-header>\r\n          <ion-text> {{ 'menu.tuning' | translate }} </ion-text>\n        </ion-list-header>\r\n\r\n        <ion-menu-toggle autoHide=\"false\" *ngIf=\"CanViewRestrictedPages()\">\n          <ion-item\r\n            routerLink=\"/TunerPlus\"\r\n            routerLinkActive=\"selected\"\r\n            routerDirection=\"root\"\r\n            detail=\"false\"\r\n          >\r\n            <ion-icon\r\n              color=\"success\"\r\n              slot=\"start\"\r\n              name=\"build-outline\"\r\n            ></ion-icon>\r\n            <ion-label> {{ 'nav.tunerPlus' | translate }} </ion-label>\n          </ion-item>\r\n        </ion-menu-toggle>\r\n\r\n        <ion-menu-toggle autoHide=\"false\">\r\n          <ion-item\r\n            routerLink=\"/Questions\"\r\n            routerLinkActive=\"selected\"\r\n            routerDirection=\"root\"\r\n            detail=\"false\"\r\n          >\r\n            <ion-icon\r\n              color=\"warning\"\r\n              slot=\"start\"\r\n              name=\"help-outline\"\r\n            ></ion-icon>\r\n            <ion-label> {{ 'menu.questionsCourses' | translate }} </ion-label>\n          </ion-item>\r\n        </ion-menu-toggle>\r\n\r\n        <ion-menu-toggle autoHide=\"false\" *ngIf=\"false\">\n          <ion-item\r\n            routerLink=\"/ProductQuestions\"\r\n            routerLinkActive=\"selected\"\r\n            routerDirection=\"root\"\r\n            detail=\"false\"\r\n          >\r\n            <ion-icon\r\n              color=\"warning\"\r\n              slot=\"start\"\r\n              name=\"help-outline\"\r\n            ></ion-icon>\r\n            <ion-label> {{ 'menu.questionsProducts' | translate }} </ion-label>\n          </ion-item>\r\n        </ion-menu-toggle>\r\n\r\n        <ion-menu-toggle autoHide=\"false\" *ngIf=\"CanViewRestrictedPages()\">\n          <ion-item\r\n            routerLink=\"/Exam\"\r\n            routerLinkActive=\"selected\"\r\n            routerDirection=\"root\"\r\n            detail=\"false\"\r\n          >\r\n            <ion-icon\r\n              color=\"discord\"\r\n              slot=\"start\"\r\n              name=\"checkbox-outline\"\r\n            ></ion-icon>\r\n            <ion-label> {{ 'menu.exams' | translate }} </ion-label>\n          </ion-item>\r\n        </ion-menu-toggle>\r\n\r\n        <ion-menu-toggle autoHide=\"false\">\r\n          <ion-item\r\n            routerLink=\"/UserPanel/19\"\r\n            routerLinkActive=\"selected\"\r\n            routerDirection=\"root\"\r\n            detail=\"false\"\r\n          >\r\n            <ion-icon color=\"instagram\" slot=\"start\" name=\"ribbon-outline\"></ion-icon>\r\n            <ion-label> {{ 'menu.club' | translate }} </ion-label>\n          </ion-item>\r\n        </ion-menu-toggle>\r\n      </ion-list>\r\n\r\n      <ion-list *ngIf=\"IsLoggedin()\" lines=\"none\">\r\n        <ion-list-header> {{ 'menu.accountSection' | translate }} </ion-list-header>\n\r\n        <ion-menu-toggle autoHide=\"false\">\r\n          <ion-item\r\n            [routerLinkActiveOptions]=\"{ exact: true }\"\r\n            routerLink=\"/UserPanel\"\r\n            routerLinkActive=\"selected\"\r\n            routerDirection=\"root\"\r\n            detail=\"false\"\r\n          >\r\n            <ion-icon color=\"warning\" slot=\"start\" name=\"person\"></ion-icon>\r\n            <ion-label> {{ 'common.account' | translate }} </ion-label>\n          </ion-item>\r\n        </ion-menu-toggle>\r\n\r\n        <ion-menu-toggle autoHide=\"false\" *ngIf=\"IsTeacher()\">\r\n          <ion-item\r\n            routerLink=\"/TeacherPanel\"\r\n            routerLinkActive=\"selected\"\r\n            routerDirection=\"root\"\r\n            detail=\"false\"\r\n          >\r\n            <ion-icon\r\n              color=\"success\"\r\n              slot=\"start\"\r\n              name=\"person-circle\"\r\n            ></ion-icon>\r\n            <ion-label> {{ 'menu.teacherPanel' | translate }} </ion-label>\n          </ion-item>\r\n        </ion-menu-toggle>\r\n\r\n        <ion-menu-toggle autoHide=\"false\" *ngIf=\"IsSeller()\">\r\n          <ion-item\r\n            routerLink=\"/SellerPanel\"\r\n            routerLinkActive=\"selected\"\r\n            routerDirection=\"root\"\r\n            detail=\"false\"\r\n          >\r\n            <ion-icon\r\n              color=\"danger\"\r\n              slot=\"start\"\r\n              name=\"person-circle\"\r\n            ></ion-icon>\r\n            <ion-label> {{ 'menu.sellerPanel' | translate }} </ion-label>\n          </ion-item>\r\n        </ion-menu-toggle>\r\n\r\n        <ion-menu-toggle autoHide=\"false\" *ngIf=\"IsAdmin()\">\r\n          <ion-item\r\n            routerLink=\"/AdminPanel\"\r\n            routerLinkActive=\"selected\"\r\n            routerDirection=\"root\"\r\n            detail=\"false\"\r\n          >\r\n            <ion-icon color=\"discord\" slot=\"start\" name=\"people\"></ion-icon>\r\n            <ion-label> {{ 'menu.management' | translate }} </ion-label>\n          </ion-item>\r\n        </ion-menu-toggle>\r\n\r\n        <ion-menu-toggle autoHide=\"false\" *ngIf=\"IsSuperAdmin()\">\r\n          <ion-item\r\n            routerLink=\"/SuperAdminPanel\"\r\n            routerLinkActive=\"selected\"\r\n            routerDirection=\"root\"\r\n            detail=\"false\"\r\n          >\r\n            <ion-icon color=\"discord\" slot=\"start\" name=\"man\"></ion-icon>\r\n            <ion-label> {{ 'menu.superManagement' | translate }} </ion-label>\n          </ion-item>\r\n        </ion-menu-toggle>\r\n\r\n        <!-- <ion-menu-toggle autoHide=\"false\" *ngIf=\"IsInstagramAdmin()\">\r\n          <ion-item\r\n            routerLink=\"/InstagramBot\"\r\n            routerLinkActive=\"selected\"\r\n            routerDirection=\"root\"\r\n            detail=\"false\"\r\n          >\r\n            <ion-icon\r\n              color=\"instagram\"\r\n              slot=\"start\"\r\n              name=\"logo-instagram\"\r\n            ></ion-icon>\r\n            <ion-label> {{ 'menu.instagramBot' | translate }} </ion-label>\n          </ion-item>\r\n        </ion-menu-toggle> -->\r\n\r\n        <!-- <ion-menu-toggle autoHide=\"false\" *ngIf=\"IsSeller()\">\r\n          <ion-item\r\n            routerLink=\"/SellerPanel\"\r\n            routerLinkActive=\"selected\"\r\n            routerDirection=\"root\"\r\n            detail=\"false\"\r\n          >\r\n            <ion-icon slot=\"start\" name=\"person\"></ion-icon>\r\n            <ion-label> {{ 'menu.sellerPanel' | translate }} </ion-label>\n          </ion-item>\r\n        </ion-menu-toggle> -->\r\n\r\n        <ion-menu-toggle autoHide=\"false\">\r\n          <ion-item (click)=\"SignOut()\" button detail=\"false\">\r\n            <ion-icon slot=\"start\" name=\"log-out-outline\"></ion-icon>\r\n            <ion-label> {{ 'menu.logout' | translate }} </ion-label>\n          </ion-item>\r\n        </ion-menu-toggle>\r\n      </ion-list>\r\n\r\n      <ion-list *ngIf=\"!IsLoggedin()\" lines=\"none\">\r\n        <ion-list-header> {{ 'menu.accountSection' | translate }} </ion-list-header>\n\r\n        <ion-menu-toggle autoHide=\"false\">\r\n          <ion-item\r\n            routerLink=\"/Account\"\r\n            routerLinkActive=\"selected\"\r\n            [routerLinkActiveOptions]=\"{ exact: true }\"\r\n            routerDirection=\"root\"\r\n            detail=\"false\"\r\n          >\r\n            <ion-icon slot=\"start\" name=\"log-in-outline\"></ion-icon>\r\n            <ion-label> {{ 'common.login' | translate }} </ion-label>\n          </ion-item>\r\n        </ion-menu-toggle>\r\n      </ion-list>\r\n\r\n      <ion-list *ngIf=\"!IsTeacher() && IsLoggedin()\" lines=\"none\">\r\n        <ion-list-header> {{ 'menu.workWithUs' | translate }} </ion-list-header>\n\r\n        <ion-menu-toggle autoHide=\"false\" *ngIf=\"!IsTeacher()\">\r\n          <ion-item\r\n            routerLink=\"/Account/Teacher\"\r\n            routerLinkActive=\"selected\"\r\n            routerDirection=\"root\"\r\n            detail=\"false\"\r\n          >\r\n            <ion-icon slot=\"start\" name=\"mail-open-outline\"></ion-icon>\r\n            <ion-label> {{ 'menu.teacherSignup' | translate }} </ion-label>\n          </ion-item>\r\n        </ion-menu-toggle>\r\n\r\n        <ion-menu-toggle autoHide=\"false\" *ngIf=\"!IsSeller()\">\r\n          <ion-item\r\n            disabled=\"true\"\r\n            routerLink=\"/Account/Seller\"\r\n            routerLinkActive=\"selected\"\r\n            routerDirection=\"root\"\r\n            detail=\"false\"\r\n          >\r\n            <ion-icon slot=\"start\" name=\"mail-open-outline\"></ion-icon>\r\n            <ion-label> {{ 'menu.sellerSignup' | translate }} </ion-label>\n          </ion-item>\r\n        </ion-menu-toggle>\r\n      </ion-list>\r\n\r\n      <ion-list lines=\"none\">\r\n        <ion-list-header> {{ 'menu.connections' | translate }} </ion-list-header>\n\r\n        <ion-menu-toggle autoHide=\"false\">\r\n          <ion-item\r\n            routerLink=\"/CommonQuestions\"\r\n            routerLinkActive=\"selected\"\r\n            routerDirection=\"root\"\r\n            detail=\"false\"\r\n          >\r\n            <ion-icon slot=\"start\" name=\"chatbubbles-outline\"></ion-icon>\r\n            <ion-label> {{ 'menu.faq' | translate }} </ion-label>\n          </ion-item>\r\n        </ion-menu-toggle>\r\n\r\n        <ion-menu-toggle autoHide=\"false\" *ngIf=\"IsLoggedin()\">\r\n          <ion-item\r\n            routerLink=\"/Suport\"\r\n            routerLinkActive=\"selected\"\r\n            routerDirection=\"root\"\r\n            detail=\"false\"\r\n          >\r\n            <ion-icon\r\n              color=\"success\"\r\n              slot=\"start\"\r\n              name=\"call-outline\"\r\n            ></ion-icon>\r\n            <ion-label> {{ 'menu.contact' | translate }} </ion-label>\n          </ion-item>\r\n        </ion-menu-toggle>\r\n\r\n        <ion-menu-toggle autoHide=\"false\">\r\n          <ion-item\r\n            routerLink=\"/About\"\r\n            routerLinkActive=\"selected\"\r\n            routerDirection=\"root\"\r\n            detail=\"false\"\r\n          >\r\n            <ion-icon\r\n              color=\"facebook\"\r\n              slot=\"start\"\r\n              name=\"information-circle-outline\"\r\n            ></ion-icon>\r\n            <ion-label> {{ 'menu.about' | translate }} </ion-label>\n          </ion-item>\r\n        </ion-menu-toggle>\r\n\r\n        <ion-menu-toggle autoHide=\"false\">\r\n          <ion-item\r\n            routerLink=\"/PrivacyPolicy\"\r\n            routerLinkActive=\"selected\"\r\n            routerDirection=\"root\"\r\n            detail=\"false\"\r\n          >\r\n            <ion-icon\r\n              color=\"instagram\"\r\n              slot=\"start\"\r\n              name=\"document-lock-outline\"\r\n            ></ion-icon>\r\n            <ion-label> {{ 'menu.privacy' | translate }} </ion-label>\n          </ion-item>\r\n        </ion-menu-toggle>\r\n\r\n        <ion-item>\r\n          <ion-icon color=\"warning\" slot=\"start\" name=\"moon-outline\"></ion-icon>\r\n          <ion-label> {{ 'menu.darkMode' | translate }} </ion-label>\n          <ion-toggle\r\n            [ngModel]=\"dark\"\n            (ngModelChange)=\"ThemeChanged($event)\"\n            [attr.aria-label]=\"'menu.darkMode' | translate\"\n          ></ion-toggle>\r\n        </ion-item>\r\n\r\n        <ion-item *ngIf=\"isAndroid\">\r\n          <ion-icon color=\"warning\" slot=\"start\" [name]=\"voice ? 'volume-mute-outline' : 'volume-high-outline'\"></ion-icon>\r\n          <ion-label> {{ 'menu.voice' | translate }} </ion-label>\n          <ion-toggle\r\n            (ngModelChange)=\"VoiceChanged()\"\r\n            [(ngModel)]=\"voice\"\r\n          ></ion-toggle>\r\n        </ion-item>\r\n\r\n        <ion-item *ngIf=\"isAndroid\">\r\n          <ion-icon slot=\"start\" name=\"invert-mode-outline\"></ion-icon>\r\n          <ion-label>{{ 'menu.version' | translate }} {{ version }}</ion-label>\n        </ion-item>\r\n\r\n        <ion-item *ngIf=\"!isAndroid\">\r\n          <ion-icon slot=\"start\" name=\"invert-mode-outline\"></ion-icon>\r\n          <ion-label>{{ 'menu.version' | translate }} {{ localVersion }}</ion-label>\n        </ion-item>\r\n\r\n        <ion-item *ngIf=\"androidAppEnabled && isAndroid && isNewAndroidVersion\" button (click)=\"alertDownloadApp()\">\n          <ion-icon slot=\"start\" name=\"cloud-download-outline\"></ion-icon>\r\n          <ion-label color=\"success\">{{ 'menu.downloadVersion' | translate }}</ion-label>\n        </ion-item>\r\n      </ion-list>\r\n\r\n      <ion-list *ngIf=\"!isHybrid()\">\r\n        <ion-list-header *ngIf=\"androidAppEnabled\"> {{ 'menu.application' | translate }} </ion-list-header>\n\r\n        <ion-menu-toggle autoHide=\"false\">\r\n          <ion-item *ngIf=\"androidAppEnabled\" button (click)=\"alertDownloadApp()\" detail=\"false\">\n            <ion-icon\r\n              class=\"blink-image\"\r\n              color=\"success\"\r\n              slot=\"start\"\r\n              name=\"cloud-download-outline\"\r\n            ></ion-icon>\r\n            <ion-label> {{ 'menu.downloadApp' | translate }} </ion-label>\n          </ion-item>\r\n        </ion-menu-toggle>\r\n\r\n        <ion-menu-toggle autoHide=\"false\">\r\n          <ion-item detail=\"false\">\r\n            <ion-button\r\n              (click)=\"clearCaches()\"\r\n              expand=\"block\"\r\n              fill=\"clear\"\r\n              class=\"full-width\"\r\n              shape=\"round\"\r\n              color=\"success\"\r\n            >\r\n              {{ 'menu.refresh' | translate }}\n            </ion-button>\r\n            <ion-icon\r\n              color=\"danger\"\r\n              slot=\"start\"\r\n              name=\"git-compare-outline\"\r\n            ></ion-icon>\r\n          </ion-item>\r\n        </ion-menu-toggle>\r\n      </ion-list>\r\n    </ion-content>\r\n  </ion-menu>\r\n  <ion-router-outlet id=\"main-content\"></ion-router-outlet>\r\n\r\n  <!-- </ion-split-pane> -->\r\n</ion-app>\r\n\r\n";

/***/ }),

/***/ 6266:
/*!**********************************************************************************!*\
  !*** ./src/app/view/components/common/loading/loading.component.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-progress-bar\r\n  *ngIf=\"isloading\"\r\n  type=\"indeterminate\"\r\n  reversed=\"false\"\r\n  color=\"warning\"\r\n></ion-progress-bar>\r\n";

/***/ }),

/***/ 42480:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 40502:
/*!*********************************!*\
  !*** ./src/assets/i18n/en.json ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"catalog.categoryCourses":"Courses","catalog.categoryProducts":"Products","nav.categories":"Course and product categories","catalog.sharedCategories":"Course and product categories","catalog.sharedCategoriesDescription":"Choose a subject to explore its courses and educational products together.","catalog.noCategories":"No categories have been added yet.","account.logoutFailed":"Logout could not be completed. Check your connection and try again.","learn.brand":"AvalAmooz","learn.tagline":"Professional Courses & Classroom Resources for Primary Teachers","learn.subbrand":"avalamuz.ir","learn.navigation":"Main navigation","learn.nav.home":"Home","learn.nav.courses":"Courses","learn.nav.store":"Worksheets & Tools","learn.nav.grade1":"Grade 1 Focus","learn.nav.free":"Free Classroom Sample","learn.nav.roadmap":"Teaching Roadmap","learn.nav.faq":"Teacher FAQ","learn.mode.courses":"Professional Teacher Courses","learn.mode.store":"Classroom Tools & Supplies","learn.menu":"Open menu","learn.search":"Search","learn.searchCourses":"Search teacher courses","learn.searchProducts":"Search classroom supplies","learn.searchPlaceholder":"Search courses, lesson plans, worksheets...","learn.home.eyebrow":"Professional Academy for Primary School Educators","learn.home.title":"Smart Teaching, Vibrant Classrooms;","learn.home.highlight":"With AvalAmooz Masterclasses","learn.home.description":"The dedicated professional development hub for elementary school teachers. Master innovative Grade 1 alphabet pedagogy, hands-on math, classroom management, and learning disorders with Iran\'s top educational mentors.","learn.home.action":"Explore Grade 1 Courses","learn.home.explore":"View Syllabus & Teaching Roadmap","learn.home.imageAlt":"Dedicated primary teacher guiding an interactive classroom","learn.home.noteTitle":"Ready-to-use Lesson Plans","learn.home.noteText":"Save hours of daily lesson preparation","learn.home.bottomNote":"Aligned with official 1403-1404 curriculum standards","learn.home.topicKicker":"Essential Teacher Skills","learn.home.topicTitle":"Professional Development Workshops","learn.home.all":"All Courses","learn.store.eyebrow":"Curated Classroom Resources & Kits for Teachers","learn.store.title":"Classroom Equipment & Resources;","learn.store.highlight":"Ready in the Teacher\'s Hands","learn.store.description":"Comprehensive weekly worksheets, daily and yearly lesson plans, hands-on math kits, alphabet flashcards, and interactive slides — ready to print and use immediately in your classroom.","learn.store.action":"Explore Grade 1 Supplies","learn.store.explore":"Browse Resource Categories","learn.store.imageAlt":"Grade 1 classroom kits, printable worksheets and hands-on manipulatives","learn.store.noteTitle":"High-Quality Vector PDFs","learn.store.noteText":"Ink-efficient printing with zero watermarks","learn.store.bottomNote":"Guaranteed curriculum alignment & teacher satisfaction","learn.store.topicKicker":"Resource Categories","learn.store.topicTitle":"Teaching Supplies & Classroom Kits","learn.store.all":"All Products","learn.note.grade1":"Specialized Grade 1 Launch","learn.note.curriculum":"100% Curriculum Aligned","learn.note.support":"Year-round Classroom Support","learn.welcome":"Welcome, Educator","learn.welcomeHint":"Your trusted partner for a vibrant, successful classroom","learn.closed":"Store purchasing is temporarily updating. Browse samples and teacher courses freely.","learn.grade.kicker":"Primary School Grade Levels","learn.grade.title":"Select your teaching grade","learn.grade.description":"Currently, our comprehensive Grade 1 courses and supplies are fully ready. Additional grades will launch soon.","learn.grade.selected":"Selected Grade:","learn.grade.next":"Explore ready-to-teach resources for this grade:","learn.grade.activeBadge":"Active - Complete Curriculum","learn.grade.comingSoon":"Coming Soon","learn.grade.comingSoonToast":"Courses and supplies for this grade are currently in production. Join the waitlist to receive launch updates and discounts.","learn.grade.1":"Grade 1","learn.grade.2":"Grade 2","learn.grade.3":"Grade 3","learn.grade.4":"Grade 4","learn.grade.5":"Grade 5","learn.grade.6":"Grade 6","learn.digit.1":"1","learn.digit.2":"2","learn.digit.3":"3","learn.digit.4":"4","learn.digit.5":"5","learn.digit.6":"6","learn.subject.caption":"Grade 1 Teacher Focus","learn.subject.action":"Explore courses in this field","learn.subject.math.title":"Grade 1 Math Pedagogy","learn.subject.math.description":"Conceptual math through manipulatives, sudoku tables, place value, and patterns.","learn.subject.math.search":"Grade 1 Math","learn.subject.reading.title":"Alphabet & Persian Reading","learn.subject.reading.description":"Innovative phonics, letter combinations, reading fluency, and spelling remediation.","learn.subject.reading.search":"Grade 1 Persian","learn.subject.science.title":"Science & Classroom Inquiry","learn.subject.science.description":"Inquiry-based learning, hands-on classroom experiments, and scientific curiosity.","learn.subject.science.search":"Grade 1 Science","learn.subject.art.title":"Art","learn.subject.art.description":"Drawing, crafts and creative activities for primary school children.","learn.subject.art.search":"Art","learn.collection.caption":"Ready for Classroom Use","learn.collection.action":"Browse resources","learn.collection.worksheets.title":"Weekly Practice Worksheets","learn.collection.worksheets.description":"Standardized weekly packages strictly aligned with syllabus timelines without watermarks.","learn.collection.worksheets.search":"Grade 1 Worksheet","learn.collection.books.title":"Lesson Plans & Scenarios","learn.collection.books.description":"Detailed daily, monthly, and yearly lesson plans in Word & PDF formats.","learn.collection.books.search":"Lesson Plan","learn.collection.games.title":"Hands-on Kits & Manipulatives","learn.collection.games.description":"Alphabet cards, counting sticks, abacuses, and classroom educational blocks.","learn.collection.games.search":"Classroom Kit","learn.collection.creative.title":"Interactive Slides & Media","learn.collection.creative.description":"Audio-visual teaching slides and engaging classroom projector activities.","learn.collection.creative.search":"Classroom Slides","learn.values.kicker":"The AvalAmooz Teacher Advantage","learn.values.title":"Four Core Pillars for Inspired Teaching","learn.values.description":"We take care of material prep so you can focus entirely on inspiring your young students.","learn.values.1.title":"Save Countless Hours","learn.values.1.text":"No more late-night searching for worksheets or lesson plans; everything is standardized and ready.","learn.values.2.title":"Playful, Hands-on Pedagogy","learn.values.2.text":"Gamified teaching techniques turn challenging math and phonics concepts into playful classroom moments.","learn.values.3.title":"100% Curriculum Aligned","learn.values.3.text":"Every worksheet and lesson follows the official Ministry of Education curriculum and week-by-week schedule.","learn.values.4.title":"Teacher Community & Mentorship","learn.values.4.text":"Continuous mentoring throughout the school year with experienced teacher coaches.","learn.roadmap.kicker":"Grade 1 Teaching Roadmap","learn.roadmap.title":"Guided Step-by-Step Through the School Year","learn.roadmap.description":"Seasonal timeline for a smooth, high-performing classroom experience.","learn.roadmap.fall.title":"Fall: Foundation & Routine","learn.roadmap.fall.desc":"Initial phonics, early math concepts, motor readiness, and helping children adapt to school.","learn.roadmap.winter.title":"Winter: Acceleration & Mastery","learn.roadmap.winter.desc":"Advanced consonants, blending syllables, story problem solving, and reading fluency.","learn.roadmap.spring.title":"Spring: Alphabet Festival & Fluency","learn.roadmap.spring.desc":"Celebrating the Alphabet Festival, independent writing, and final qualitative assessments.","learn.roadmap.exam.title":"Year-End: Assessment Portfolios","learn.roadmap.exam.desc":"Completing performance checklists, descriptive feedback portfolios, and promoting students with pride.","learn.lead.kicker":"Free Gift for Educators","learn.lead.title":"Download the Free Sample Lesson Plan & Phonics Pack","learn.lead.desc":"Test AvalAmooz quality directly in your classroom with our complimentary letter pack.","learn.lead.action":"Download Free Sample Pack","learn.teacher.kicker":"A Note to Dedicated Educators","learn.teacher.title":"For Classrooms Full of Spark and Joy","learn.teacher.description":"Grade 1 teaching is one of the most noble educational journeys. We are here with cutting-edge methods, structured plans, and printables to support your mission.","learn.teacher.tag1":"Modern Phonics Methods","learn.teacher.tag2":"Hands-on Math Play","learn.teacher.tag3":"Grade 1 Behavior Strategies","learn.teacher.search":"Grade 1 Teacher","learn.teacher.action":"Explore Teacher Workshops","learn.faq.kicker":"Frequently Asked Questions","learn.faq.title":"Answers for Educators","learn.faq.description":"Everything you need to know about starting with AvalAmooz.","learn.faq.1.question":"Are courses and worksheets aligned with the latest official textbooks?","learn.faq.1.answer":"Yes, 100% of our materials and lesson plans follow the official textbook editions and syllabus timeline.","learn.faq.2.question":"What formats are printables provided in, and how are they printed?","learn.faq.2.answer":"All worksheets are delivered in high-resolution vector PDF format, optimized for A4 black-and-white or color printing without ink waste or annoying watermarks. Lesson plans are provided in both Word and PDF.","learn.faq.3.question":"Do teachers receive verified completion certificates?","learn.faq.3.answer":"Yes, completing our professional workshops earns you a digital certificate with a verifiable ID code suitable for resumes and professional portfolios.","learn.faq.4.question":"When will grades 2 through 6 be available?","learn.faq.4.answer":"AvalAmooz launched with an in-depth focus on Grade 1 as the cornerstone of elementary education. Grades 2-6 are currently in active development and will be rolled out during the academic year.","learn.join.kicker":"Join the Educator Community","learn.join.title":"More joyful teaching and a thriving classroom start today","learn.join.description":"Sign up to access exclusive teacher workshops, lesson plans, and ready-to-print resources.","learn.join.action":"Sign in or Join as Teacher","learn.footer.description":"AvalAmooz (avalamuz.ir) is the premier professional development and classroom resource platform for elementary school teachers, dedicated to Grade 1 excellence.","learn.footer.links":"Quick Links","learn.footer.about":"About & Support","learn.footer.privacy":"Terms & Privacy","learn.footer.copyright":"All content rights are reserved by AvalAmooz (avalamuz.ir).","learn.footer.made":"Crafted with dedication for primary school educators","cinema.explore":"Scroll into the AvalAmooz experience","cinema.storyHint":"From the first spark to your next build","cinema.academy.title":"Performance starts with knowledge.","cinema.academy.1.title":"Understand it. Then tune it.","cinema.academy.1.body":"From engine fundamentals to ECU calibration and turbo installation. Find your learning path and take your project forward, one step at a time.","cinema.academy.1.action":"Find my learning path","cinema.academy.2.title":"Every number. A better decision.","cinema.academy.2.body":"Displacement, compression ratio, turbo selection and more. Explore your ideas with the Tuner Plus engineering calculators.","cinema.academy.2.action":"Explore Tuner Plus","cinema.academy.3.title":"Now, make it happen.","cinema.academy.3.body":"Bring knowledge, tools and the right parts together. Discover equipment for your next project in the AvalAmooz shop.","cinema.academy.3.action":"Discover the shop","cinema.shop.title":"Your project. Your signature.","cinema.shop.browse":"Explore parts and equipment","cinema.shop.1.title":"Your next build starts here.","cinema.shop.1.body":"From specialist tools to performance parts. Explore the options and their specifications for the next step of your project.","cinema.shop.1.action":"Find parts","cinema.shop.2.title":"A great choice starts with insight.","cinema.shop.2.body":"Learn before you buy. Our technical articles help you understand how parts work and what your project needs.","cinema.shop.2.action":"Read the technical guides","cinema.shop.3.title":"The details make the difference.","cinema.shop.3.body":"Explore your component combination before the build. Use Tuner Plus calculators for initial setup estimates.","cinema.shop.3.action":"Explore AvalAmooz Assistant","brand.name":"AvalAmooz","brand.tagline":"Learning & resources for primary teachers","nav.academy":"Academy","nav.store":"Parts Store","nav.tunerPlus":"AvalAmooz Assistant","nav.tools":"Tools","nav.tuningRoad":"Tuning Roadmap","nav.courses":"Course Categories","nav.products":"Product Categories","nav.articles":"Articles","nav.teachers":"Instructors","nav.doers":"Partners","common.search":"Search","common.cart":"Cart","common.account":"Account","common.login":"Log in / Sign up","common.closeMenu":"Close menu","common.pages":"Pages","common.updating":"Updating","common.notice":"Notice","common.close":"Close","menu.tuning":"Teaching resources","menu.questionsCourses":"Course Q&A","menu.questionsProducts":"Product Q&A","menu.exams":"Tests and exams","menu.club":"AvalAmooz Club","menu.accountSection":"Account","menu.teacherPanel":"Instructor panel","menu.sellerPanel":"Seller panel","menu.management":"Management","menu.superManagement":"Main management","menu.instagramBot":"Instagram bot","menu.logout":"Log out","menu.workWithUs":"Work with us","menu.teacherSignup":"Become an instructor","menu.sellerSignup":"Become a seller","menu.connections":"Contact","menu.faq":"FAQ","menu.contact":"Contact us","menu.about":"About us","menu.privacy":"Privacy policy","menu.darkMode":"Dark mode","menu.voice":"Voice assistant","menu.version":"Version:","menu.downloadVersion":"Download new version","menu.application":"App","menu.downloadApp":"AvalAmooz app","menu.refresh":"Refresh","menu.tuningRoad":"Tuning roadmap","footer.useful":"Quick Links","footer.academy":"Teacher Training Courses","footer.android":"Download AvalAmooz Android App","footer.privacy":"Terms & Privacy Policy","footer.about":"About AvalAmooz & Support","footer.rights":"All content rights are reserved by AvalAmooz (avalamuz.ir).","home.searchPlaceholder":"Search courses, parts, articles, or instructors...","home.hero.lead":"From curiosity to expert builds","home.hero.highlight":"Power, boost, and performance","home.hero.description":"Hands-on training in tuning, engine upgrades, turbocharging, supercharging, and ECU calibration, together with performance parts for builders who want to go beyond watching and start engineering.","home.hero.courses":"Explore courses","home.hero.store":"Shop performance parts","home.hero.tools":"Explore Tuner Plus tools","home.hero.courseCount":"25+ courses","home.hero.courseCaption":"Practical, project-based training","home.hero.toolCount":"10+ tools","home.hero.toolCaption":"Drag simulation and tuning tools","home.hero.authenticity":"Genuine parts","home.hero.support":"Technical support and a tuner community","home.sound.on":"Sound on","home.sound.off":"Muted","home.sound.enable":"Enable sound","home.sound.disable":"Mute sound","home.hud.power":"Horsepower","home.hud.limiter":"Limiter active — release!","home.hud.revving":"Revs are climbing...","home.hud.hold":"Rev it! (click and hold)","home.stages.badge":"Performance upgrade path • TUNING STAGES","home.stages.title":"What stage is your build at?","home.stages.description":"From street tuning to serious track turbo builds, choose your stage and explore suitable parts and courses.","home.stages.power":"Estimated power gain","home.stages.torque":"Torque gain","home.stages.boost":"Boost pressure","home.stages.acceleration":"Acceleration improvement","home.stages.upgrades":"Upgrades and parts at this stage:","home.stages.shop":"Shop parts for this stage","home.stage.1.name":"Stage 1 (Street)","home.stage.1.tagline":"Sharper acceleration and throttle response without opening the engine","home.stage.1.hpGain":"+15 to +25 hp","home.stage.1.torqueGain":"+30 Nm","home.stage.1.boost":"Naturally aspirated (stock)","home.stage.1.accel":"Up to 1.5 s quicker 0–100 km/h","home.stage.1.mod.0":"Calibrate fuel, ignition, and torque tables","home.stage.1.mod.1":"Fit a steel or carbon-fiber intake with a performance filter","home.stage.1.mod.2":"Fit a 4-2-1 steel header with optimized exhaust flow","home.stage.1.mod.3":"Reduce throttle lag and optimize fuel use","home.stage.1.course":"Complete ECU remapping and tuning course","home.stage.2.name":"Stage 2 (Sport & Track)","home.stage.2.tagline":"Improve cylinder-head breathing and extend usable engine speed","home.stage.2.hpGain":"+45 to +70 hp","home.stage.2.torqueGain":"+60 Nm","home.stage.2.boost":"0.4 bar / improved breathing","home.stage.2.accel":"Up to 3.2 s quicker 0–100 km/h","home.stage.2.mod.0":"Install a higher-duration street or race camshaft","home.stage.2.mod.1":"Port and polish the cylinder head with flow-bench guidance","home.stage.2.mod.2":"Fit a high-flow intake manifold and larger throttle body","home.stage.2.mod.3":"Use stronger valve springs and an adjustable cam gear","home.stage.2.course":"Cylinder-head porting and cam setup course","home.stage.3.name":"Stage 3 (Full Boost)","home.stage.3.tagline":"A high-power turbo build for serious acceleration","home.stage.3.hpGain":"+150 to +350 hp","home.stage.3.torqueGain":"+220 Nm","home.stage.3.boost":"1.4 to 2.0 bar turbo boost","home.stage.3.accel":"0–100 km/h in under 5 s","home.stage.3.mod.0":"Fit forged pistons and rods with a turbo-suitable compression ratio","home.stage.3.mod.1":"Use a ball-bearing turbo, front intercooler, and external wastegate","home.stage.3.mod.2":"Fit a high-flow fuel pump and injectors","home.stage.3.mod.3":"Install a standalone ECU, racing wiring, and 4-bar MAP sensor","home.stage.3.course":"Complete turbocharger installation course","home.garage.badge":"AvalAmooz Garage • MY GARAGE","home.garage.title":"What\'s your car? Find a matching build","home.garage.description":"Choose your vehicle platform to find courses, ECU tuning, and parts suited to your engine.","home.garage.course":"Recommended course:","home.garage.parts":"Recommended parts:","home.garage.power":"Power","home.gateway.badge":"One brand, two ways to build","home.gateway.title":"Where will your project go today?","home.gateway.description":"Build your engineering skills or find the performance parts your project needs.","home.gateway.academyBadge":"Path one • Learn","home.gateway.academyTitle":"Performance Tuning Academy","home.gateway.academyDescription":"Practical, step-by-step courses from engine fundamentals and simulation to setup, ECU calibration, and turbo installation.","home.gateway.academyAction":"Explore the academy","home.gateway.storeBadge":"Path two • Build","home.gateway.storeTitle":"Performance Parts Store","home.gateway.storeDescription":"Turbochargers, high-pressure pumps, intercoolers, wastegates, and precision tools, backed by quality assurance and technical advice.","home.gateway.storeAction":"Browse parts","home.tuner.title":"Tuner Plus engineering tools","home.tuner.description":"Estimate engine and boost parameters before you turn a wrench or buy a part.","home.tuner.all":"Explore all tools","home.tuner.dragTitle":"Estimate your drag time","home.tuner.dragDescription":"Enter weight, power, and grip to estimate 0–100 km/h, quarter-mile time, and trap speed.","home.tuner.dragAction":"Open drag simulator","home.tuner.turboTitle":"Match a turbocharger","home.tuner.turboDescription":"Estimate airflow and pressure ratio to find a suitable compressor map.","home.tuner.turboAction":"Size a turbo","home.tuner.fuelTitle":"Calculate fuel pump flow","home.tuner.fuelDescription":"Estimate the flow rate your fuel system needs for target power and rail pressure.","home.tuner.fuelAction":"Calculate pump flow","home.tuner.compressionTitle":"Dynamic compression and quench","home.tuner.compressionDescription":"Estimate static and dynamic compression using cam timing to help assess knock risk.","home.tuner.compressionAction":"Calculate compression","home.specialties.badge":"Choose a specialty","home.specialties.title":"What would you like to master?","home.specialties.description":"Find content in tuning, mechanical work, or automotive design that matches your goals.","home.specialties.mechanic":"Automotive mechanics","home.specialties.mechanicDescription":"Repairs, diagnosis, and engine service","home.specialties.tuning":"Tuning and performance","home.specialties.tuningDescription":"Turbocharging, ECU calibration, and power","home.specialties.design":"Design and styling","home.specialties.designDescription":"Body kits, aerodynamics, cabin, and style","home.coupon.title":"Special course offer","home.coupon.discount":"off","home.coupon.code":"Discount code:","home.coupon.copy":"Copy code","home.latest.title":"Latest courses","home.latest.description":"Skills you can put to work in your garage and on your car today.","home.latest.all":"View all courses","home.free.title":"Popular free courses","home.free.description":"Start learning at no cost with courses popular in the AvalAmooz community.","home.free.all":"Explore free courses","home.voices.title":"Hear from our learners","home.voices.description":"Listen to students and specialists who completed AvalAmooz courses and brought their projects to life.","home.voices.verified":"Verified student audio reviews","home.voices.play":"Play audio reviews","home.articles.title":"Read before you build","home.articles.description":"Technical articles on tuning, parts selection, diagnostics, and comparisons.","home.articles.all":"Browse articles","home.deals.title":"This week\'s special offers","home.deals.description":"Selected courses at limited-time prices.","home.deals.all":"View all offers","home.cta.badge":"Ready for your next build?","home.cta.title":"Put engineering knowledge to work and build your dream car.","home.cta.description":"Technical support, Tuner Plus tools, and quality parts are here to help.","home.cta.store":"Explore the parts store","home.cta.join":"Join the AvalAmooz community","home.loading":"Loading AvalAmooz...","home.closed":"The AvalAmooz Academy is temporarily being updated.","home.closedAlert":"The academy is closed","home.coupon.copied":"Discount code {{code}} copied","home.coupon.value":"Discount code: {{code}}","store.searchPlaceholder":"Search parts, categories, or brands...","store.back":"Back to the academy","store.hero.lead":"The right parts.","store.hero.highlight":"Real performance.","store.hero.description":"For builds that demand more than guesswork, find tuning parts and specialist tools with confidence.","store.hero.expert":"Expert selection","store.hero.performance":"Built for performance projects","store.hero.advice":"Advice before you buy","store.categories.title":"Where do you start?","store.categories.description":"Choose a category to find the right parts for your project faster.","store.categories.mechanic":"Mechanics","store.categories.mechanicDescription":"Tools, service, and repair","store.categories.tuning":"Tuning","store.categories.tuningDescription":"Power, turbo, and performance","store.categories.design":"Design","store.categories.designDescription":"Exterior and interior details","store.coupon.title":"Special store discount code","store.new.title":"New arrivals","store.new.description":"New additions to the AvalAmooz performance catalog.","store.popular.title":"Popular picks","store.popular.description":"The parts our builders and enthusiasts view most.","store.articles.title":"Parts buying guides","store.articles.description":"Check the technical details before buying for your project.","store.deals.title":"Special offers","store.deals.description":"Selected performance parts at better prices while stocks last.","store.academy.title":"Want to decide with confidence before you buy?","store.academy.action":"Explore the academy","store.closed":"The store is temporarily closed.","store.closedAlert":"The store is closed","discovery.home":"AvalAmooz Home","discovery.tagline":"Smart Teacher Companion in the Classroom","discovery.journey":"Elementary Teachers Academy","discovery.description":"Specialized teaching methods, lesson plans, standard worksheets, and classroom essentials for elementary educators.","discovery.categories":"Educational Categories","discovery.question":"What content are you looking for?","discovery.mechanics":"Teaching Methods Courses","discovery.mechanicsDetail":"Alphabet, Hands-on Math, and Science Methods","discovery.tuning":"Worksheets & Lesson Plans","discovery.tuningDetail":"Weekly worksheets, Word & PDF lesson plans","discovery.design":"Grade 1 & Free Samples","discovery.designDetail":"Teaching roadmap and free sample downloads","search.academy":"Search courses","search.store":"Search products","search.courses":"Courses","search.products":"Products","search.sort":"Sort by","search.select":"Select","search.cancel":"Cancel","search.sortNone":"Default order","search.cheapest":"Lowest price","search.mostExpensive":"Highest price","search.mostViewed":"Most viewed","search.newest":"Newest","search.bestSelling":"Best selling","search.noResults":"No results found","tunerPlus.engineeringTools":"Teacher Smart Tools & Utilities","tunerPlus.eyebrow":"AvalAmooz Elementary Teacher Assistant","tunerPlus.heroDescription":"A comprehensive suite of smart educational tools and classroom assistants designed for elementary school teachers.","tunerPlus.dragAction":"Simulate drag performance","tunerPlus.courseAction":"Explore the full course","tunerPlus.specialistTools":"Specialist tools","tunerPlus.forTuning":"for tuning","tunerPlus.memberAccess":"Member access","tunerPlus.memberDescription":"Sign in to use all the tools.","tunerPlus.quickStart":"Quick start","tunerPlus.featuredTitle":"Featured tools","tunerPlus.featuredCount":"featured tools","tunerPlus.quickSearch":"Quick search","tunerPlus.findTool":"Find the tool you need","tunerPlus.categories":"Tool categories","tunerPlus.gettingStarted":"Getting started","tunerPlus.tutorialTitle":"Start your first project with confidence","tunerPlus.tutorialDescription":"The Tuner Plus tutorial shows you how to choose and use these tools step by step.","tunerPlus.watchVideo":"Watch on Aparat","tunerPlus.videoTitle":"AvalAmooz Assistant Tutorial","tunerPlus.category.all":"All tools","tunerPlus.category.engine":"Engine","tunerPlus.category.airTurbo":"Air and turbo","tunerPlus.category.fuelIgnition":"Fuel and ignition","tunerPlus.category.drivetrain":"Drivetrain","tunerPlus.category.specialized":"Specialist tools","tunerPlus.tool.dragperformance.title":"Drag performance","tunerPlus.tool.dragperformance.subtitle":"Estimate 0–100 km/h and 402 m times","tunerPlus.tool.turbomatch.title":"Turbo matching","tunerPlus.tool.turbomatch.subtitle":"Plot operating points on compressor maps","tunerPlus.tool.vehicle-profile.title":"Vehicle and project profile","tunerPlus.tool.vehicle-profile.subtitle":"Save vehicle specs for use across tools","tunerPlus.tool.gearshiftoptimizer.title":"Optimal shift points","tunerPlus.tool.gearshiftoptimizer.subtitle":"Shift points from wheel torque curves","tunerPlus.tool.compressionquench.title":"Compression and quench","tunerPlus.tool.compressionquench.subtitle":"Static CR and quench clearance","tunerPlus.tool.dynamiccompression.title":"Dynamic compression","tunerPlus.tool.dynamiccompression.subtitle":"DCR from intake valve closing timing","tunerPlus.tool.ve.title":"Volumetric efficiency","tunerPlus.tool.ve.subtitle":"Build a VE table for your ECU","tunerPlus.tool.afr.title":"Air–fuel ratio","tunerPlus.tool.afr.subtitle":"Set a target AFR table","tunerPlus.tool.lambda.title":"Lambda table","tunerPlus.tool.lambda.subtitle":"Lambda targets for ECU remapping","tunerPlus.tool.spark.title":"Ignition timing","tunerPlus.tool.spark.subtitle":"Calculate a spark timing table","tunerPlus.tool.sparkpluggap.title":"Spark plug gap","tunerPlus.tool.sparkpluggap.subtitle":"Starting gap from compression, boost, and coil","tunerPlus.tool.requiredfuel.title":"Required fuel","tunerPlus.tool.requiredfuel.subtitle":"Calculate ECU required fuel","tunerPlus.tool.injectorsrating.title":"Injector sizing","tunerPlus.tool.injectorsrating.subtitle":"Estimate suitable injector flow","tunerPlus.tool.fuelpumplph.title":"Fuel pump flow","tunerPlus.tool.fuelpumplph.subtitle":"Estimate required pump flow in LPH","tunerPlus.tool.electricalcalibration.title":"Coil and injector calibration","tunerPlus.tool.electricalcalibration.subtitle":"Dwell and injector dead time","tunerPlus.tool.dwell.title":"Coil dwell","tunerPlus.tool.dwell.subtitle":"Estimate coil charging time","tunerPlus.tool.maxdwell.title":"Maximum dwell","tunerPlus.tool.maxdwell.subtitle":"Charging limits at high RPM","tunerPlus.tool.stoichiometry.title":"Stoichiometric ratio","tunerPlus.tool.stoichiometry.subtitle":"Stoich values for different fuels","tunerPlus.tool.turbo.title":"Turbo sizing","tunerPlus.tool.turbo.subtitle":"Choose a turbo for your engine","tunerPlus.tool.customturbo.title":"Custom turbo","tunerPlus.tool.customturbo.subtitle":"Advanced turbo calculations","tunerPlus.tool.intakeflow.title":"Engine intake flow","tunerPlus.tool.intakeflow.subtitle":"Intake airflow and CFM","tunerPlus.tool.throttle.title":"Throttle body sizing","tunerPlus.tool.throttle.subtitle":"Calculate throttle body diameter","tunerPlus.tool.runner.title":"Intake manifold runners","tunerPlus.tool.runner.subtitle":"Runner length and diameter","tunerPlus.tool.headers.title":"Exhaust headers","tunerPlus.tool.headers.subtitle":"Header and exhaust dimensions","tunerPlus.tool.camtiming.title":"Cam timing","tunerPlus.tool.camtiming.subtitle":"Valve timing and events","tunerPlus.tool.rodratio.title":"Rod ratio","tunerPlus.tool.rodratio.subtitle":"Engine rod-to-stroke ratio","tunerPlus.tool.valvespringrate.title":"Valve spring rate","tunerPlus.tool.valvespringrate.subtitle":"Estimate valve spring stiffness","tunerPlus.tool.gearratio.title":"Gear ratios","tunerPlus.tool.gearratio.subtitle":"Speed in each gear and RPM drop","tunerPlus.tool.hp.title":"Power and torque","tunerPlus.tool.hp.subtitle":"Convert horsepower and torque","tunerPlus.tool.whptohp.title":"Drivetrain power loss","tunerPlus.tool.whptohp.subtitle":"Convert wheel HP to flywheel HP","tunerPlus.tool.atmosphericpressure.title":"Atmospheric pressure","tunerPlus.tool.atmosphericpressure.subtitle":"Air pressure calculations","tunerPlus.tool.speedometer.title":"Speedometer","tunerPlus.tool.speedometer.subtitle":"Speedometer calculations","tunerPlus.tool.dbw.title":"Drive-by-wire control","tunerPlus.tool.dbw.subtitle":"Electronic throttle control","tunerPlus.tool.injectorresistor.title":"Injector resistor","tunerPlus.tool.injectorresistor.subtitle":"Injector resistance calculations","tunerPlus.tool.tu5clearance.title":"TU5 clearances","tunerPlus.tool.tu5clearance.subtitle":"TU5JP4 dimensions and clearances","tunerPlus.tool.m15.title":"M15 engine calculations","tunerPlus.tool.m15.subtitle":"Tiba engine specifications","tunerPlus.tool.daewooespero.title":"Daewoo Espero calculations","tunerPlus.tool.daewooespero.subtitle":"Tools for the Daewoo Espero engine","tunerPlus.tool.inc.title":"INC files","tunerPlus.tool.inc.subtitle":"ECU configuration files","tunerPlus.tool.datalog.title":"ECU datalog analyzer","tunerPlus.tool.datalog.subtitle":"Analyze CSV logs and suggest VE corrections","tunerPlus.tool.fuel-blend.title":"Fuel and octane blending","tunerPlus.tool.fuel-blend.subtitle":"E85, ethanol, and blend stoichiometry","tunerPlus.tool.intercooler.title":"Intercooler sizing","tunerPlus.tool.intercooler.subtitle":"Outlet temperature and core pressure drop","tunerPlus.tool.boost-control.title":"Boost control engineering","tunerPlus.tool.boost-control.subtitle":"Wastegate spring and starting duty cycle","tunerPlus.tool.wheel-final-drive.title":"Wheel and final drive","tunerPlus.tool.wheel-final-drive.subtitle":"Diameter, road speed, and engine RPM","tunerPlus.tool.fuel-system.title":"Fuel system capacity","tunerPlus.tool.fuel-system.subtitle":"Find the limiting pump or injector","tunerPlus.tool.egt-backpressure.title":"EGT and backpressure","tunerPlus.tool.egt-backpressure.subtitle":"Thermal risk and EMAP/MAP ratio","tunerPlus.tool.cam-selector.title":"Camshaft selection","tunerPlus.tool.cam-selector.subtitle":"Starting duration, LSA, and lift","tunerPlus.tool.launch-traction.title":"Launch and traction","tunerPlus.tool.launch-traction.subtitle":"Traction and first-gear torque limit","account.backHome":"Back to home","account.benefits":"Benefits of joining AvalAmooz","account.academy":"Primary Educators Platform","account.heroEyebrow":"Your Smart Classroom Partner","account.heroLead":"Turn innovative teaching into","account.heroHighlight":"inspiring classrooms.","account.heroEnd":"","account.heroDescription":"Join AvalAmooz for expert elementary teaching masterclasses, ready-to-use lesson plans, standard weekly worksheets, and hands-on manipulatives.","account.expertCourses":"Hours of Masterclasses","account.currentKnowledge":"Curriculum-Aligned Bank","account.fromBasics":"Grade 1 Alphabet to Math","account.lifetimeAccess":"Lifetime access","account.toPurchasedCourses":"to your purchased resources","account.community":"Creative teachers community","account.learnTogether":"Learn alongside top educators","account.securePayment":"Year-round support","account.trustedPurchase":"Accredited educational partner","account.signIn":"Sign In","account.freeSignup":"Free Teacher Sign Up","account.googleLogin":"Quick Sign In with Google","account.googleSignup":"Quick Sign Up with Google","account.continueEmail":"Or continue with email","account.forgotPassword":"Forgot your password?","account.notMember":"New to AvalAmooz?","account.createFree":"Create a free account","account.haveAccount":"Already have an account?","account.backToLogin":"Back to sign in","account.secureConnection":"Your information is protected by encrypted connection.","account.kickerStart":"Start your journey","account.kicker":"AvalAmooz Account","account.mode.login.title":"Welcome, Educator","account.mode.login.description":"Sign in to access your courses, lesson plans, and classroom supplies.","account.mode.buyerRegister.title":"Join AvalAmooz Community","account.mode.buyerRegister.description":"Less than a minute away from the most comprehensive elementary teaching toolkit.","account.mode.sellerRegister.title":"Educational Vendor Application","account.mode.sellerRegister.description":"Submit your details to supply classroom resources and manipulatives.","account.mode.teacherRegister.title":"Teach & Collaborate with Us","account.mode.teacherRegister.description":"Share your expertise and teaching resources with thousands of educators nationwide.","account.mode.adminRegister.title":"Create Admin Account","account.mode.adminRegister.description":"Enter the details required for administrative access.","account.mode.forgetPassword.title":"Reset your password","account.mode.forgetPassword.description":"Enter your email and we\'ll send you a reset link.","account.mode.resetPassword.title":"Create a new password","account.mode.resetPassword.description":"Choose a strong new password for your account.","account.mode.TwoFactor.title":"Secure sign-in verification","account.mode.TwoFactor.description":"Confirm your password again to protect your account.","account.mode.Invite.title":"Join with an invitation","account.mode.Invite.description":"Your invitation is valid. Complete your account.","auth.email":"Email","auth.emailPlaceholder":"Enter your email","auth.password":"Password","auth.passwordPlaceholder":"Enter your password","auth.secondPassword":"Second password","auth.secondPasswordPlaceholder":"Enter your second password","auth.deliveryTitle":"Choose how to receive your sign-in code","auth.deliveryPrompt":"Choose a method for this account\'s six-digit code.","auth.deliveryEmail":"Receive by email","auth.deliverySms":"Receive by SMS","auth.deliveryDevice":"Use either authorized admin\'s signed-in panel","auth.deliveryBack":"Back to sign-in","auth.deliveryChange":"Choose another method","auth.deliveryEmailDisabled":"Email delivery is disabled. Use SMS or either authorized admin\'s signed-in panel.","auth.mobile":"Mobile number","auth.mobilePlaceholder":"Enter your mobile number","auth.firstName":"First name","auth.firstNamePlaceholder":"Enter your first name","auth.lastName":"Last name","auth.lastNamePlaceholder":"Enter your last name","auth.referralCode":"Referral code (optional)","auth.referralPlaceholder":"Enter a referral code if you have one","auth.sendRequest":"Send request","road.eyebrow":"Your specialist automotive learning path","road.heroLead":"From engine fundamentals to","road.heroHighlight":"confident tuning","road.heroDescription":"A clear, step-by-step route from mechanical basics to advanced ECU calibration and professional tuning.","road.start":"Start learning","road.watchIntro":"Watch the introduction","road.stats":"Learning path overview","road.sixStages":"specialist stages","road.structuredPath":"structured path","road.practical":"Practical","road.engineeringApproach":"engineering approach","road.destination":"Destination: professional tuner","road.beforeStart":"Before you start","road.introTitle":"A clear path is half the work","road.introDescription":"Learn why these skills are ordered this way and why each stage matters.","road.videoTitle":"The path to becoming a capable mechanic and tuner","road.introVideo":"Introduction video","road.mapTitle":"The professional tuner roadmap","road.mapDescription":"Each stage builds on the previous one. Follow the path in order.","road.viewCourse":"View course","road.outcomeKicker":"The finish line is a new beginning","road.outcomeTitle":"What will you know at the end?","road.outcomeDescription":"Build an integrated understanding of mechanics, sensors, engine upgrades, and ECU calibration.","road.outcome1":"Analyze engine performance","road.outcome2":"Interpret sensor data","road.outcome3":"Diagnose and repair faults","road.outcome4":"Calibrate an ECU","road.ready":"Ready to begin?","road.finalTitle":"Your professional journey starts with the first step.","road.firstStep":"Enter the first stage","road.social":"Social networks","road.step.1.title":"How a car engine works","road.step.1.level":"Beginner","road.step.1.description":"Start with the engine\'s internal parts, gearbox, and drivetrain. This is the foundation for later technical decisions.","road.step.1.skill1":"Engine construction","road.step.1.skill2":"Drivetrain","road.step.1.skill3":"Mechanical fundamentals","road.step.2.title":"Engine sensors","road.step.2.level":"Beginner to intermediate","road.step.2.description":"Understand sensor signals and operation to diagnose faults and tune an engine using real data.","road.step.2.skill1":"Reading signals","road.step.2.skill2":"Diagnostics","road.step.2.skill3":"Sensor data","road.step.3.title":"TU5 engine repair","road.step.3.level":"Intermediate","road.step.3.description":"Turn basic knowledge into hands-on skill by disassembling, inspecting, and rebuilding a popular engine.","road.step.3.skill1":"Careful disassembly","road.step.3.skill2":"Component measurement","road.step.3.skill3":"Engine assembly","road.step.4.title":"Engine tuning and upgrades","road.step.4.level":"Advanced","road.step.4.description":"Choose the right performance parts and plan a balanced build using your mechanical knowledge.","road.step.4.skill1":"Part selection","road.step.4.skill2":"Build planning","road.step.4.skill3":"Efficiency gains","road.step.5.title":"Super ECU standalone","road.step.5.level":"Advanced","road.step.5.description":"Learn programmable ECU architecture, installation, and calibration for serious tuning projects.","road.step.5.skill1":"ECU installation","road.step.5.skill2":"Fuel maps","road.step.5.skill3":"Ignition tuning","road.step.6.title":"Advanced Super ECU","road.step.6.level":"Expert","road.step.6.description":"Apply advanced ECU settings and features to complex projects and refine your tuning decisions.","road.step.6.skill1":"Advanced calibration","road.step.6.skill2":"Protection strategies","road.step.6.skill3":"Log analysis","catalog.categories":"Categories","catalog.allCourses":"View all courses","catalog.courseList":"Course categories","catalog.allProducts":"View all products","catalog.productList":"Product categories","catalog.articles":"Articles","catalog.searchArticles":"Search articles","catalog.articleSubtitle":"Learning and elementary education for families and teachers","faq.contentNotice":"Questions and answers are currently available in Persian.","faq.link":"Link","faq.empty":"No questions have been posted yet.","learn.subject.quran.title":"Quran","learn.subject.classroom.description":"Positive discipline, focus and collaboration with pupils and families.","learn.subject.classroom.search":"Classroom Management","learn.subject.classroom.title":"Classroom Management","learn.subject.quran.search":"Quran","learn.subject.quran.description":"Child-friendly reading and learning of simple Quran concepts.","pageHeader.back":"Go back","pageHeader.article/article":"Educational articles","pageHeader.article/article-by-id/article-by-id":"Article","pageHeader.auth/account/account":"Sign in and register","pageHeader.cart/cart":"Shopping cart","pageHeader.common/about/about":"About AvalAmooz","pageHeader.common/access-denied/access-denied":"Access restricted","pageHeader.common/common-questions/common-questions":"Frequently asked questions","pageHeader.common/confirm-email/confirm-email":"Verify email","pageHeader.common/confirm-phone/confirm-phone":"Verify phone number","pageHeader.common/doers/doers":"Our team","pageHeader.common/off-code/off-code":"Discount code","pageHeader.common/page404/page404":"Page not found","pageHeader.common/page500/page500":"Server error","pageHeader.common/page503/page503":"Service unavailable","pageHeader.common/pay-rules/pay-rules":"Purchase terms","pageHeader.common/privacy-policy/privacy-policy":"Privacy policy","pageHeader.common/seller-active/seller-active":"Seller activation","pageHeader.common/seller-edit/seller-edit":"Seller profile","pageHeader.common/suport/suport":"Support","pageHeader.common/teacher-active/teacher-active":"Teacher activation","pageHeader.common/teacher-edit/teacher-edit":"Teacher profile","pageHeader.common/teachers/teachers":"Teachers","pageHeader.course/course":"Course and product categories","pageHeader.course/course-by-id/course-by-id":"Course details","pageHeader.exam/degree/degree":"Certificate","pageHeader.exam/exam":"Exams","pageHeader.exam/online-exam/online-exam":"Online exam","pageHeader.home/product-questions/product-questions":"Product questions","pageHeader.home/psearch/psearch":"Product search","pageHeader.home/questions/questions":"Course questions","pageHeader.home/search/search":"Course search","pageHeader.panel/admin-panel/admin-panel":"Admin panel","pageHeader.panel/seller-panel/seller-panel":"Seller panel","pageHeader.panel/super-admin-panel/super-admin-panel":"Super admin panel","pageHeader.panel/teacher-panel/teacher-panel":"Teacher panel","pageHeader.panel/user-panel/user-panel":"My account","pageHeader.product/product-by-id/product-by-id":"Product details","pageHeader.product/products":"Educational products","pageHeader.tuner-plus/alphabet/alphabet":"Alphabet practice","pageHeader.tuner-plus/class-timer/class-timer":"Class timer","pageHeader.tuner-plus/clock-learning/clock-learning":"Learning the clock","pageHeader.tuner-plus/dictation/dictation":"Dictation practice","pageHeader.tuner-plus/grade-calculator/grade-calculator":"Grade calculator","pageHeader.tuner-plus/math-practice/math-practice":"Math practice","pageHeader.tuner-plus/memory-game/memory-game":"Memory game","pageHeader.tuner-plus/random-picker/random-picker":"Random picker","pageHeader.tuner-plus/shapes/shapes":"Learning shapes","pageHeader.tuner-plus/syllable-breaker/syllable-breaker":"Word syllables","pageHeader.tuner-plus/tuner-plus":"Teaching tools"}');

/***/ }),

/***/ 20231:
/*!*********************************!*\
  !*** ./src/assets/i18n/fa.json ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"catalog.categoryCourses":"دوره‌ها","catalog.categoryProducts":"محصولات","nav.categories":"دسته‌بندی دوره‌ها و محصولات","catalog.sharedCategories":"دسته‌بندی دوره‌ها و محصولات","catalog.sharedCategoriesDescription":"موضوع مورد علاقه‌ات را انتخاب کن؛ دوره‌ها و محصولات آموزشی هر موضوع اینجا کنار هم هستند.","catalog.noCategories":"هنوز دسته‌بندی‌ای ثبت نشده است.","account.logoutFailed":"خروج کامل انجام نشد؛ ارتباط با سرور را بررسی کنید و دوباره خروج بزنید.","learn.brand":"اول آموز","learn.tagline":"مرجع تخصصی دوره‌ها و محصولات آموزشی معلمان ابتدایی","learn.subbrand":"avalamuz.ir","learn.navigation":"منوی اصلی","learn.nav.home":"صفحه اصلی","learn.nav.courses":"دوره‌های آموزشی","learn.nav.store":"محصولات و کاربرگ‌ها","learn.nav.grade1":"ویژه پایه اول","learn.nav.free":"بسته رایگان نمونه","learn.nav.roadmap":"نقشه راه تدریس","learn.nav.faq":"سوالات متداول","learn.mode.courses":"دوره‌های آموزشی معلمان","learn.mode.store":"فروشگاه ابزار و ملزومات کلاسی","learn.menu":"باز کردن منو","learn.search":"جستجو","learn.searchCourses":"جستجوی دوره‌های معلمان","learn.searchProducts":"جستجوی محصولات کلاسی","learn.searchPlaceholder":"جستجو میان دوره‌ها، طرح درس‌ها و کاربرگ‌ها...","learn.home.eyebrow":"آکادمی توانمندسازی و مهارت‌افزایی معلمان ابتدایی","learn.home.title":"تدریس هوشمندانه، کلاس پرانرژی؛","learn.home.highlight":"با آموزش‌های تخصصی اول آموز","learn.home.description":"مرجع مهارت‌های نوین تدریس برای آموزگاران مقطع ابتدایی؛ یادگیری کاربردی روش تدریس الفبا، ریاضی دست‌ورزی، مدیریت کلاس و اختلالات یادگیری پایه اول با همراهی برترین سرگروه‌های آموزشی کشور.","learn.home.action":"مشاهده دوره‌های پایه اول","learn.home.explore":"سرفصل‌ها و نقشه راه تدریس","learn.home.imageAlt":"آموزگار در حال هدایت کلاس درس پویا با ابزارهای نوین آموزشی","learn.home.noteTitle":"طرح درس و سناریوی کلاسی","learn.home.noteText":"صرفه‌جویی چشمگیر در زمان آماده‌سازی تدریس","learn.home.bottomNote":"منطبق بر آخرین تغییرات کتب درسی ۱۴۰۳-۱۴۰۴","learn.home.topicKicker":"محورهای تخصصی تدریس","learn.home.topicTitle":"کارگاه‌های توانمندسازی معلمین","learn.home.all":"مشاهده تمام دوره‌ها","learn.store.eyebrow":"فروشگاه تخصصی ابزارها و محتوای کلاسی معلمان","learn.store.title":"تجهیزات و محتوای آموزشی؛","learn.store.highlight":"آماده در دستان آموزگار","learn.store.description":"پکیج‌های کامل کاربرگ‌های هفتگی استاندارد، طرح درس‌های روزانه و سالانه، کیت‌های دست‌ورزی ریاضی، کارت‌های نشانه‌ها و فایل‌های تعاملی کلاسی؛ آماده چاپ و استفاده مستقیم در کلاس درس.","learn.store.action":"مشاهده محصولات پایه اول","learn.store.explore":"دسته‌بندی‌های تجهیزات کلاسی","learn.store.imageAlt":"مجموعه کاربرگ‌ها، طرح درس و وسایل کمک‌آموزشی دست‌ورزی کلاس اول","learn.store.noteTitle":"فایل‌های PDF باکیفیت وکتور","learn.store.noteText":"آماده چاپ بدون اتلاف جوهر و بدون واترمارک","learn.store.bottomNote":"ضمانت کیفیت محتوا و تطابق بودجه‌بندی","learn.store.topicKicker":"دسته‌بندی‌های کاربردی","learn.store.topicTitle":"ابزارها و ملزومات کلاسی آموزگار","learn.store.all":"مشاهده تمام محصولات","learn.note.grade1":"تمرکز جامع بر پایه اول دبستان","learn.note.curriculum":"۱۰۰٪ منطبق با کتب درسی رسمی","learn.note.support":"پشتیبانی و رفع اشکال در طول سال","learn.welcome":"همکار گرامی، به اول آموز خوش آمدید","learn.welcomeHint":"پایگاه تخصصی توانمندسازی معلمان و غنی‌سازی کلاس درس ابتدایی","learn.closed":"بخش خرید فعلاً در حال به‌روزرسانی است. می‌توانید نمونه‌ها و دوره‌های اول آموز را مشاهده فرمایید.","learn.grade.kicker":"پایه‌های تحصیلی مقطع ابتدایی","learn.grade.title":"پایه تحصیلی کلاس خود را انتخاب کنید","learn.grade.description":"در حال حاضر دوره‌ها و محصولات جامع «پایه اول دبستان» آماده استفاده همکاران است. سایر پایه‌ها به زودی اضافه خواهند شد.","learn.grade.selected":"پایه انتخابی شما:","learn.grade.next":"مشاهده محتوا و ابزارهای آماده تدریس این پایه:","learn.grade.activeBadge":"فعال - دوره و محصول کامل","learn.grade.comingSoon":"به‌زودی","learn.grade.comingSoonToast":"دوره‌ها و محصولات این پایه در حال آماده‌سازی است. برای اطلاع از زمان انتشار در خبرنامه عضو شوید.","learn.grade.1":"پایهٔ اول","learn.grade.2":"پایهٔ دوم","learn.grade.3":"پایهٔ سوم","learn.grade.4":"پایهٔ چهارم","learn.grade.5":"پایهٔ پنجم","learn.grade.6":"پایهٔ ششم","learn.digit.1":"۱","learn.digit.2":"۲","learn.digit.3":"۳","learn.digit.4":"۴","learn.digit.5":"۵","learn.digit.6":"۶","learn.subject.caption":"ویژه آموزگاران اول دبستان","learn.subject.action":"مشاهده دوره‌های این بخش","learn.subject.math.title":"ریاضی","learn.subject.math.description":"آموزش مفهومی با دست‌ورزی، جدول شگفت‌انگیز، الگویابی و ارزش مکانی.","learn.subject.math.search":"ریاضی اول","learn.subject.reading.title":"فارسی","learn.subject.reading.description":"روش تدریس نشانه‌های ۱ و ۲، جدول ترکیب صامت و مصوت و رفع اختلالات املا.","learn.subject.reading.search":"فارسی اول","learn.subject.science.title":"علوم","learn.subject.science.description":"رویکرد کاوشگری، یادگیری پروژه‌محور و آزمایش‌های ساده در کلاس اول.","learn.subject.science.search":"علوم اول","learn.subject.art.title":"هنر","learn.subject.art.description":"نقاشی، کاردستی و فعالیت‌های خلاق برای کودکان ابتدایی.","learn.subject.art.search":"هنر","learn.collection.caption":"آماده استفاده در کلاس درس","learn.collection.action":"مشاهده و دریافت محصولات","learn.collection.worksheets.title":"کاربرگ و پیک آدینه","learn.collection.worksheets.description":"تمرین‌های هفتگی استاندارد، تفکیک‌شده بر اساس بودجه‌بندی بدون واترمارک.","learn.collection.worksheets.search":"کاربرگ اول","learn.collection.books.title":"طرح درس و سناریو","learn.collection.books.description":"طرح درس‌های روزانه، ماهانه و سالانه آماده Word و PDF با اهداف کلی و رفتاری.","learn.collection.books.search":"طرح درس","learn.collection.games.title":"کیت‌ها و ابزار دست‌ورزی","learn.collection.games.description":"جدول دوستی، فلش‌کارت‌های نشانه‌ها، چوب‌خط، چرتکه و مکعب‌های آموزشی.","learn.collection.games.search":"ابزار دست ورزی","learn.collection.creative.title":"فایل‌ها و اسلایدهای کلاسی","learn.collection.creative.description":"پاورپوینت‌های تعاملی صوتی و تصویری تدریس نشانه‌ها و بازی‌های کلاسی.","learn.collection.creative.search":"پاورپوینت تدریس","learn.values.kicker":"مزیت‌های اول آموز برای معلمان","learn.values.title":"چهار ویژگی که تدریس شما را متمایز می‌کند","learn.values.description":"تمرکز شما روی بچه‌ها باشد؛ آماده‌سازی فایل‌ها، طرح درس‌ها و ابزارها با ما.","learn.values.1.title":"صرفه‌جویی چشمگیر در وقت","learn.values.1.text":"دیگر نیازی به ساعت‌ها جستجو در وب برای طرح درس و کاربرگ نیست؛ همه چیز استاندارد و آماده است.","learn.values.2.title":"متد نوین بازی‌محور","learn.values.2.text":"تلفیق بازی، دست‌ورزی و شعر برای جذاب‌سازی مفاهیم سخت ریاضی و الفبا در پایه اول.","learn.values.3.title":"تطابق ۱۰۰٪ با کتب درسی","learn.values.3.text":"تمام محتواها منطبق بر آخرین بودجه‌بندی رسمی وزارت آموزش و پرورش برای سال تحصیلی جاری تدوین شده‌اند.","learn.values.4.title":"جامعه و پشتیبانی آموزگاران","learn.values.4.text":"همراهی مداوم در طول سال تحصیلی و پاسخگویی به چالش‌های تدریس توسط سرگروه‌های آموزشی باسابقه.","learn.roadmap.kicker":"نقشه راه آموزگار پایه اول","learn.roadmap.title":"گام‌به‌گام از مهر تا خرداد در کنار شما","learn.roadmap.description":"برنامه‌ریزی دقیق فصلی برای یک سال تحصیلی درخشان، آرام و پربار در کلاس اول.","learn.roadmap.fall.title":"فصل پاییز: پی‌ریزی و تثبیت","learn.roadmap.fall.desc":"تدریس نگاره‌ها، آغاز نشانه‌های ۱، مفاهیم اولیه ریاضی، سازگاری دانش‌آموزان و انضباط کلاس.","learn.roadmap.winter.title":"فصل زمستان: جهش یادگیری","learn.roadmap.winter.desc":"ورود به نشانه‌های ۲، جدول ترکیب صامت و مصوت، روان‌خوانی کلمات، جمع و منها و حل مسئله داستانی.","learn.roadmap.spring.title":"فصل بهار: تثبیت و جشن الفبا","learn.roadmap.spring.desc":"جشن باشکوه الفبا، تسلط بر خوانداری و نوشتن، جمله‌سازی خلاق و تکمیل آزمون‌های توصیفی.","learn.roadmap.exam.title":"خرداد: بستن پوشه کار کلاسی","learn.roadmap.exam.desc":"تکمیل چک‌لیست‌های عملکردی، جمع‌بندی پیشرفت تحصیلی و اهدای کارنامه موفقیت نوآموزان.","learn.lead.kicker":"هدیه اختصاصی برای همکاران","learn.lead.title":"دانلود رایگان بسته نمونه طرح درس و کاربرگ نشانه (آ - ب)","learn.lead.desc":"کیفیت محتوا و استانداردهای طراحی اول آموز را به رایگان در کلاس خود تست کنید.","learn.lead.action":"دانلود رایگان بسته نمونه","learn.teacher.kicker":"پیام به همکاران پرتلاش","learn.teacher.title":"برای کلاس‌هایی سرشار از شوق و درخشش","learn.teacher.description":"تدریس در پایه اول مهم‌ترین و حساس‌ترین رسالت آموزشی است. ما اینجا هستیم تا با بهترین روش‌های تدریس، طرح درس‌های دقیق و کاربرگ‌های استاندارد، در این مسیر پرافتخار همراهتان باشیم.","learn.teacher.tag1":"روش تدریس نوین الفبا","learn.teacher.tag2":"دست‌ورزی و بازی‌های ریاضی","learn.teacher.tag3":"مدیریت چالش‌های کلاس اول","learn.teacher.search":"معلم پایه اول","learn.teacher.action":"مشاهده دوره‌های توانمندسازی","learn.faq.kicker":"پرسش‌های متداول همکاران","learn.faq.title":"پاسخ به سوالات پرتکرار معلمان","learn.faq.description":"هر آنچه برای شروع همراهی با اول آموز نیاز دارید بدانید.","learn.faq.1.question":"آیا دوره‌ها و کاربرگ‌ها مطابق آخرین تغییرات کتاب‌های درسی هستند؟","learn.faq.1.answer":"بله، ۱۰۰٪ محتواها، طرح درس‌ها و کاربرگ‌ها بر اساس آخرین ویرایش کتب درسی سال تحصیلی جاری و بودجه‌بندی رسمی وزارت آموزش و پرورش تهیه شده‌اند.","learn.faq.2.question":"فایل‌های کاربرگ و طرح درس با چه فرمتی ارائه می‌شوند و نحوه چاپ چگونه است؟","learn.faq.2.answer":"کاربرگ‌ها در قالب PDF با کیفیت بالای وکتور و استاندارد پرینت A4 بدون حاشیه زائد و بدون واترمارک مزاحم طراحی شده‌اند تا در پرینترهای معمولی سیاه‌سفید یا رنگی با کمترین مصرف تونر چاپ شوند. طرح درس‌ها نیز با فرمت Word و PDF جهت سهولت در ویرایش در دسترس هستند.","learn.faq.3.question":"آیا پس از شرکت در دوره‌ها گواهی معتبر دریافت می‌کنم؟","learn.faq.3.answer":"بله، پس از پایان موفقیت‌آمیز دوره‌های آموزشی، گواهی معتبر دیجیتال پایان دوره با کد رهگیری اختصاصی برای شما صادر می‌شود که در رزومه و پرونده آموزشی قابل استناد است.","learn.faq.4.question":"دوره‌ها و محصولات برای پایه‌های دوم تا ششم چه زمانی منتشر می‌شوند؟","learn.faq.4.answer":"در مرحله فعلی اول آموز به عنوان مرجع تخصصی روی حساس‌ترین پایه ابتدایی یعنی «پایه اول» تمرکز کرده است. پایه‌های دوم تا ششم در حال ضبط و تدوین سرفصل‌ها هستند و به زودی به سامانه اضافه خواهند شد.","learn.join.kicker":"پیوستن به جمع آموزگاران خلاق","learn.join.title":"تدریسی شیرین‌تر و کلاسی موفق‌تر از همین امروز","learn.join.description":"به شبکه معلمان اول آموز بپیوندید و به دوره‌های تخصصی، طرح درس‌ها و کاربرگ‌های استاندارد دسترسی داشته باشید.","learn.join.action":"ورود و ثبت‌نام آموزگاران","learn.footer.description":"اول آموز (avalamuz.ir) مرجع تخصصی توانمندسازی معلمان و غنی‌سازی کلاس‌های مقطع ابتدایی با محوریت ویژه پایه اول دبستان است.","learn.footer.links":"دسترسی سریع","learn.footer.about":"درباره اول آموز و پشتیبانی","learn.footer.privacy":"شرايط و حریم خصوصی","learn.footer.copyright":"تمامی حقوق محتوا متعلق به پلتفرم اول آموز (avalamuz.ir) است.","learn.footer.made":"ساخته شده با عشق برای آموزگاران دلسوز ایران زمین","cinema.explore":"اسکرول کن؛ وارد دنیای اول آموز شو","cinema.storyHint":"از اولین جرقه تا اجرای پروژه","cinema.academy.title":"قدرت، از دانش شروع می‌شود.","cinema.academy.1.title":"اول بفهم، بعد تیون کن.","cinema.academy.1.body":"از شناخت موتور تا ریمپ و نصب توربو؛ مسیر یادگیری‌ات را پیدا کن و قدم‌به‌قدم، به پروژه‌ات نزدیک‌تر شو.","cinema.academy.1.action":"مسیر یادگیری من","cinema.academy.2.title":"هر عدد، یک تصمیم بهتر.","cinema.academy.2.body":"دسترسی به جعبه‌ابزار هوشمند، محاسبات آموزشی و ابزارهای تدریس؛ با بازوی اول آموز، کلاسی جذاب‌تر و اثربخش‌تر بسازید.","cinema.academy.2.action":"ورود به بازوی اول آموز","cinema.academy.3.title":"حالا وقت ساختن است.","cinema.academy.3.body":"دانش و ابزار را کنار قطعه مناسب بگذار. قطعات و تجهیزات پروژه بعدی‌ات را در فروشگاه اول آموز پیدا کن.","cinema.academy.3.action":"کشف فروشگاه","cinema.shop.title":"پروژه تو. امضای تو.","cinema.shop.browse":"دیدن قطعات و تجهیزات","cinema.shop.1.title":"پروژه‌ات از اینجا شروع می‌شود.","cinema.shop.1.body":"از ابزارهای تخصصی تا قطعات تقویتی؛ برای قدم بعدی پروژه، گزینه‌ها را ببین و مشخصاتشان را بررسی کن.","cinema.shop.1.action":"جستجوی قطعات","cinema.shop.2.title":"انتخاب خوب، اتفاقی نیست.","cinema.shop.2.body":"پیش از خرید، بیشتر بدان. مقاله‌های تخصصی کمک می‌کنند کاربرد قطعات و نیاز پروژه‌ات را بهتر بشناسی.","cinema.shop.2.action":"خواندن مقاله‌های تخصصی","cinema.shop.3.title":"جزئیات، تفاوت می‌سازند.","cinema.shop.3.body":"ابزارهای کاربردی و دستیارهای هوشمند کلاسی در کنار شما هستند تا مدیریت کلاس و آموزش نوآموزان به سادگی انجام شود.","cinema.shop.3.action":"ورود به بازوی اول آموز","brand.name":"اول آموز","brand.tagline":"آموزش و ابزارهای معلمان ابتدایی","nav.academy":"آموزشگاه","nav.store":"فروشگاه قطعات","nav.tunerPlus":"بازوی اول آموز","nav.tools":"ابزارها","nav.tuningRoad":"مسیر تیونر","nav.courses":"دسته بندی دوره ها","nav.products":"دسته بندی محصولات","nav.articles":"مقالات","nav.teachers":"مدرسین","nav.doers":"نمایندگان","common.search":"جستجو","common.cart":"سبد خرید","common.account":"حساب کاربری","common.login":"ورود / عضویت","common.closeMenu":"بستن منو","common.pages":"صفحات","common.updating":"درحال بروزرسانی","common.notice":"توجه","common.close":"بستن","menu.tuning":"بازوی اول آموز","menu.questionsCourses":"پرسش و پاسخ","menu.questionsProducts":"پرسش و پاسخ (کالا)","menu.exams":"تست و آزمون","menu.club":"اول آموز کلاب","menu.accountSection":"اکانت","menu.teacherPanel":"پنل مدرس","menu.sellerPanel":"پنل فروشنده","menu.management":"مدیریت","menu.superManagement":"مدیریت اصلی","menu.instagramBot":"ربات اینستاگرام","menu.logout":"خروج","menu.workWithUs":"همکاری با ما","menu.teacherSignup":"عضویت مدرس","menu.sellerSignup":"عضویت فروشنده","menu.connections":"ارتباطات","menu.faq":"سوالات متداول","menu.contact":"تماس با ما","menu.about":"درباره ما","menu.privacy":"سیاست حفظ حریم خصوصی","menu.darkMode":"حالت شب","menu.voice":"دستیار صوتی","menu.version":"ورژن:","menu.downloadVersion":"دانلود ورژن جدید","menu.application":"اپلیکیشن","menu.downloadApp":"اپلیکیشن اول آموز","menu.refresh":"بروزرسانی","menu.tuningRoad":"مسیر تیونر موفق","footer.useful":"دسترسی سریع","footer.academy":"دوره‌های آموزشی معلمان","footer.android":"دریافت اپلیکیشن اندروید اول آموز","footer.privacy":"قوانین و حریم خصوصی","footer.about":"درباره اول آموز و پشتیبانی","footer.rights":"تمامی حقوق محتوا متعلق به پلتفرم اول آموز (avalamuz.ir) است.","home.searchPlaceholder":"جستجوی دوره، قطعه، مقاله یا مدرس...","home.hero.lead":"از علاقه تا ارتقای حرفه‌ای","home.hero.highlight":"قدرت، بوست و عملکرد خودرو","home.hero.description":"مرجع تخصصی آموزش عملی تیونینگ، تقویت موتور، نصب توربوشارژر و سوپرشارژر، ریمپ ECU و تأمین قطعات پرفورمنس؛ برای کسانی که می‌خواهند از یک تماشاچی فراتر بروند و با علم مهندسی بسازند.","home.hero.courses":"مشاهده دوره‌های آموزشی","home.hero.store":"فروشگاه قطعات","home.hero.tools":"ابزارهای بازوی اول آموز","home.hero.courseCount":"+۲۵ دوره","home.hero.courseCaption":"آموزش پروژه‌محور و عملی","home.hero.toolCount":"+۱۰ ابزار","home.hero.toolCaption":"شبیه‌ساز درگ و ابزارهای تیونینگ","home.hero.authenticity":"تضمین اصالت","home.hero.support":"پشتیبانی علمی و جامعه معلمان ابتدایی","home.sound.on":"صدا روشن","home.sound.off":"بی‌صدا","home.sound.enable":"فعال‌سازی صدا","home.sound.disable":"قطع صدا","home.hud.power":"HP اسب‌بخار","home.hud.limiter":"کات‌آف فعال — رها کنید!","home.hud.revving":"دور در حال بالا رفتن...","home.hud.hold":"گاز بده! (کلیک و نگه دارید)","home.stages.badge":"مسیر ارتقای قدرت • TUNING STAGES","home.stages.title":"سطح ارتقای پروژه شما کجاست؟","home.stages.description":"از تیونینگ استریت شهری تا توربو هیولای پیست؛ استیج مناسب خود را انتخاب و قطعات و دوره‌ها را ببینید.","home.stages.power":"افزایش قدرت تخمینی","home.stages.torque":"افزایش گشتاور","home.stages.boost":"فشار بوست موتور","home.stages.acceleration":"بهبود شتاب‌گیری","home.stages.upgrades":"اقدامات و قطعات ارتقایی در این استیج:","home.stages.shop":"خرید قطعات مخصوص این استیج","home.stage.1.name":"استیج ۱ (استریت / شهری)","home.stage.1.tagline":"افزایش شتاب و رفع کپ بدون نیاز به باز شدن موتور","home.stage.1.hpGain":"+۱۵ تا +۲۵ اسب‌بخار","home.stage.1.torqueGain":"+۳۰ نیوتن‌متر","home.stage.1.boost":"تنفس طبیعی (فابریک)","home.stage.1.accel":"کاهش ۱.۵ ثانیه از ۰-۱۰۰","home.stage.1.mod.0":"ریمپ تخصصی جداول سوخت، جرقه و گشتاور","home.stage.1.mod.1":"نصب کیت مکش استیل / فیبرکربن با فیلتر هوای اسپرت","home.stage.1.mod.2":"هدرز استیل ۴-۲-۱ با خروجی گاز بهینه‌سازی شده","home.stage.1.mod.3":"حذف تأخیر پدال گاز و بهینه‌سازی مصرف سوخت","home.stage.1.course":"دوره جامع ریمپ و تیونینگ ECU","home.stage.2.name":"استیج ۲ (اسپرت و پیست)","home.stage.2.tagline":"تنفس عمیق‌تر سرسیلندر و افزایش چشمگیر دور موتور","home.stage.2.hpGain":"+۴۵ تا +۷۰ اسب‌بخار","home.stage.2.torqueGain":"+۶۰ نیوتن‌متر","home.stage.2.boost":"۰.۴ بار / تنفس ارتقایافته","home.stage.2.accel":"کاهش ۳.۲ ثانیه از ۰-۱۰۰","home.stage.2.mod.0":"میل‌سوپاپ با زاویه دیوریشن بالاتر (Street/Race Cam)","home.stage.2.mod.1":"پورت و پولیش سرسیلندر با شبیه‌سازی فلو بنچ","home.stage.2.mod.2":"منیفولد ورودی هوای حجم‌بالا و دریچه گاز بزرگ‌تر","home.stage.2.mod.3":"فنر سوپاپ‌های تقویتی و دنده تایم قابل تنظیم (Adjustable)","home.stage.2.course":"دوره پورت و پولیش و ستاپ میل‌سوپاپ","home.stage.3.name":"استیج ۳ (توربو هیولا - Full Boost)","home.stage.3.tagline":"نهایت قدرت و شتاب؛ ورود به دنیای بوست و توربوشارژر","home.stage.3.hpGain":"+۱۵۰ تا +۳۵۰ اسب‌بخار!","home.stage.3.torqueGain":"+۲۲۰ نیوتن‌متر","home.stage.3.boost":"۱.۴ تا ۲.۰ بار بوست توربو","home.stage.3.accel":"شتاب ۰-۱۰۰ زیر ۵ ثانیه","home.stage.3.mod.0":"پیستون و شاتون فورج با نسبت تراکم کاهش‌یافته توربویی","home.stage.3.mod.1":"توربوشارژر بلبرینگ، اینترکولر فرانت و وست‌گیت اکسترنال","home.stage.3.mod.2":"پمپ بنزین پرفشار و سوزن انژکتورهای دبی‌بالا","home.stage.3.mod.3":"ECU استندالون با وایرینگ ریسینگ و سنسور مپ ۴ بار","home.stage.3.course":"دوره صفر تا صد نصب و راه‌اندازی توربوشارژر","home.garage.badge":"گاراژ اول آموز • MY GARAGE","home.garage.title":"ماشینت چیه؟ انتخاب خودرو برای فیلتر هوشمند","home.garage.description":"پلتفرم خودروی خود را انتخاب کنید تا دوره‌ها، ریمپ و قطعات سازگار با موتور شما نمایش داده شود.","home.garage.course":"دوره تخصصی این خودرو:","home.garage.parts":"قطعات و افترمارکت پیشنهادی:","home.garage.power":"توان","home.gateway.badge":"یک برند، دو مسیر تخصصی","home.gateway.title":"امروز برای پروژه‌ات چه تصمیمی داری؟","home.gateway.description":"مسیر یادگیری مهندسی را انتخاب کن، یا قطعه پرفورمنس مورد نیازت را سفارش بده.","home.gateway.academyBadge":"مسیر اول • یادگیری","home.gateway.academyTitle":"آموزشگاه تخصصی تیونینگ","home.gateway.academyDescription":"دوره‌های عملی و مرحله‌به‌مرحله از پایه‌های تقویت موتور، شبیه‌سازی، ستاپ و ریمپ تا راه‌اندازی توربوشارژر.","home.gateway.academyAction":"ورود به آکادمی و دوره‌ها","home.gateway.storeBadge":"مسیر دوم • تجهیز و ساخت","home.gateway.storeTitle":"فروشگاه قطعات و افترمارکت","home.gateway.storeDescription":"توربوشارژرها، پمپ‌های فشار بالا، اینترکولر، وست‌گیت و ابزارهای دقیق مکانیک با تضمین کیفیت و مشاوره فنی.","home.gateway.storeAction":"مشاهده و خرید قطعات","home.tuner.title":"جعبه‌ابزار هوشمند بازوی اول آموز","home.tuner.description":"قبل از بستن اولین پیچ یا خرید قطعه، محاسبات دقیق موتور و بوست را به صورت علمی انجام دهید.","home.tuner.all":"مشاهده همه ابزارها","home.tuner.dragTitle":"زمان درگ خودرویت را تخمین بزن","home.tuner.dragDescription":"وزن، توان و چسبندگی را وارد کن و تخمین ۰ تا ۱۰۰، ۴۰۲ متر و سرعت خط پایان را ببین.","home.tuner.dragAction":"شروع شبیه‌سازی درگ","home.tuner.turboTitle":"انتخاب و مچینگ توربوشارژر","home.tuner.turboDescription":"محاسبه حجم هوای ورودی (CFM/LB-MIN) و Pressure Ratio برای مپ مناسب کمپرسور توربو.","home.tuner.turboAction":"سایزینگ توربو","home.tuner.fuelTitle":"محاسبه دبی پمپ بنزین (LPH)","home.tuner.fuelDescription":"محاسبه لیتر بر ساعت مورد نیاز سیستم سوخت‌رسانی متناسب با توان هدف و فشار ریل سوخت.","home.tuner.fuelAction":"محاسبه پمپ سوخت","home.tuner.compressionTitle":"تراکم داینامیک و کوئنچ","home.tuner.compressionDescription":"محاسبه دقیق نسبت تراکم استاتیک و دینامیک با زاویه میل‌سوپاپ برای پیشگیری از پدیده ناک.","home.tuner.compressionAction":"محاسبه تراکم","home.specialties.badge":"انتخاب حوزه تخصصی","home.specialties.title":"در کدام شاخه می‌خواهی متخصص شوی؟","home.specialties.description":"از میان سه حوزه اصلی تیونینگ، مکانیک و دیزاین، محتوای متناسب با هدفت را فیلتر کن.","home.specialties.mechanic":"مکانیک خودرو","home.specialties.mechanicDescription":"تعمیرات اصولی، عیب‌یابی و سرویس موتور","home.specialties.tuning":"تیونینگ و تقویت","home.specialties.tuningDescription":"توربوشارژر، ریمپ ECU، افزایش شتاب و توان","home.specialties.design":"دیزاین و زیبایی","home.specialties.designDescription":"کیت بدنه، آیرودینامیک، استایل و کابین","home.coupon.title":"تخفیف ویژه دوره‌ها","home.coupon.discount":"تخفیف","home.coupon.code":"کد تخفیف:","home.coupon.copy":"کپی کد","home.latest.title":"تازه‌ترین دوره‌های آموزشی","home.latest.description":"مهارت‌هایی که از همین امروز در گاراژ و روی خودرو قابل پیاده‌سازی هستند.","home.latest.all":"مشاهده همه دوره‌ها","home.free.title":"دوره‌های رایگان و پرطرفدار","home.free.description":"شروع مسیر یادگیری بدون هزینه؛ بیشترین بازدید توسط جامعه اول آموز.","home.free.all":"مشاهده رایگان‌ها","home.voices.title":"صدای کسانی که شروع کردند","home.voices.description":"شنیدن تجربه واقعی هنرجویان و متخصصانی که دوره‌های اول آموز را پشت سر گذاشته و پروژه‌های خود را با موفقیت استارت زده‌اند.","home.voices.verified":"نظرات صوتی تأیید شده هنرجویان","home.voices.play":"پخش صوت‌های ارسال شده","home.articles.title":"پیش از آچار کشیدن، بخوانید","home.articles.description":"مقالات تخصصی درباره تیونینگ، انتخاب قطعات، عیب‌یابی و مقایسه‌های فنی.","home.articles.all":"آرشیو مقالات","home.deals.title":"فرصت‌های شگفت‌انگیز این هفته","home.deals.description":"دوره‌های منتخب با تخفیف‌های ویژه تا زمان محدود.","home.deals.all":"همه تخفیف‌دارها","home.cta.badge":"آماده ساخت پروژه بعدی خود هستید؟","home.cta.title":"دانش فنی را به کار بگیر؛ ماشین رویاهایت را خودت بساز.","home.cta.description":"با پشتیبانی علمی، ابزارهای کاربردی بازوی اول آموز و کامل‌ترین محتوای آموزشی در کنارتان هستیم.","home.cta.store":"ورود به فروشگاه قطعات","home.cta.join":"عضویت در خانواده اول آموز","home.loading":"درحال بارگذاری اطلاعات اول آموز...","home.closed":"آموزشگاه اول آموز موقتاً در حال به‌روزرسانی سیستم است.","home.closedAlert":"آموزشگاه تعطیل است","home.coupon.copied":"کد تخفیف {{code}} کپی شد","home.coupon.value":"کد تخفیف: {{code}}","store.searchPlaceholder":"جستجوی قطعه، دسته یا برند...","store.back":"بازگشت به آموزشگاه","store.hero.lead":"قطعه درست،","store.hero.highlight":"عملکرد واقعی.","store.hero.description":"برای پروژه‌هایی که به حدس و گمان راضی نیستند؛ قطعات تیونینگ و ابزار تخصصی را با انتخاب آگاهانه پیدا کن.","store.hero.expert":"انتخاب تخصصی","store.hero.performance":"مناسب پروژه‌های عملکردی","store.hero.advice":"مشاوره پیش از خرید","store.categories.title":"از کجا شروع می‌کنی؟","store.categories.description":"یک دسته را انتخاب کن تا سریع‌تر به قطعه مناسب پروژه‌ات برسی.","store.categories.mechanic":"مکانیک","store.categories.mechanicDescription":"ابزار، سرویس و تعمیر","store.categories.tuning":"تیونینگ","store.categories.tuningDescription":"قدرت، توربو و عملکرد","store.categories.design":"دیزاین","store.categories.designDescription":"جزئیات و ظاهر خودرو","store.coupon.title":"کد تخفیف ویژه فروشگاه","store.new.title":"تازه‌واردهای فروشگاه","store.new.description":"قطعاتی که به‌تازگی به انتخاب‌های حرفه‌ای AvalAmooz اضافه شده‌اند.","store.popular.title":"انتخاب‌های محبوب","store.popular.description":"چیزهایی که سازندگان و علاقه‌مندان بیشتر دیده‌اند.","store.articles.title":"راهنمای انتخاب قطعه","store.articles.description":"قبل از خرید، نکات فنی پروژه‌ات را دقیق‌تر بررسی کن.","store.deals.title":"پیشنهادهای ویژه","store.deals.description":"چند انتخاب حرفه‌ای با شرایط بهتر؛ تا زمانی که موجودند.","store.academy.title":"می‌خواهی قبل از خرید، مطمئن‌تر تصمیم بگیری؟","store.academy.action":"رفتن به آموزشگاه","store.closed":"فروشگاه موقتاً تعطیل است.","store.closedAlert":"فروشگاه تعطیل است","discovery.home":"صفحه اصلی اول آموز","discovery.tagline":"همراه هوشمند معلمان در کلاس درس","discovery.journey":"آکادمی تخصصی معلمان ابتدایی","discovery.description":"مرجع تخصصی روش‌های نوین تدریس، طرح درس، کاربرگ‌های استاندارد و ملزومات آموزشی مقطع ابتدایی با محوریت پایه اول دبستان.","discovery.categories":"سرفصل‌های آموزشی اول آموز","discovery.question":"دنبال چه محتوایی هستید؟","discovery.mechanics":"دوره‌های روش تدریس","discovery.mechanicsDetail":"روش تدریس الفبا، ریاضی دست‌ورزی و علوم","discovery.tuning":"کاربرگ و طرح درس","discovery.tuningDetail":"پیک آدینه، طرح درس Word و PDF استاندارد","discovery.design":"ویژه پایه اول و نمونه‌ها","discovery.designDetail":"نقشه راه تدریس و دانلود رایگان نمونه‌ها","search.academy":"جستجوی آموزشگاه","search.store":"جستجوی فروشگاه","search.courses":"دوره‌ها","search.products":"محصولات","search.sort":"مرتب‌سازی","search.select":"انتخاب","search.cancel":"لغو","search.sortNone":"بدون ترتیب","search.cheapest":"ارزان‌ترین","search.mostExpensive":"گران‌ترین","search.mostViewed":"پربازدیدترین","search.newest":"جدیدترین","search.bestSelling":"پرفروش‌ترین","search.noResults":"موردی یافت نشد","tunerPlus.engineeringTools":"دستیار و جعبه‌ابزار معلمان","tunerPlus.eyebrow":"بازوی توانمند و هوشمند آموزگاران ابتدایی","tunerPlus.heroDescription":"مجموعه ابزارها و محاسبات کاربردی بازوی اول آموز؛ دستیار همراه آموزگاران و مربیان برای برنامه‌ریزی، محاسبات آموزشی و ملزومات کلاسی در محیطی شاد و تعاملی.","tunerPlus.dragAction":"شبیه‌سازی و ارزیابی عملکرد","tunerPlus.courseAction":"مشاهده دوره‌های روش تدریس","tunerPlus.specialistTools":"ابزار کاربردی","tunerPlus.forTuning":"ویژه اول آموز","tunerPlus.memberAccess":"دسترسی اعضا","tunerPlus.memberDescription":"برای استفاده از کلیه ابزارها و امکانات بازوی اول آموز، وارد حساب کاربری خود شوید.","tunerPlus.quickStart":"شروع سریع","tunerPlus.featuredTitle":"ابزارهای برگزیده بازوی اول آموز","tunerPlus.featuredCount":"ابزار منتخب","tunerPlus.quickSearch":"جستجوی سریع","tunerPlus.findTool":"ابزار یا محاسبه‌گر موردنیازت را پیدا کن","tunerPlus.categories":"دسته‌بندی ابزارها","tunerPlus.gettingStarted":"راهنمای استفاده","tunerPlus.tutorialTitle":"آشنایی با امکانات بازوی اول آموز","tunerPlus.tutorialDescription":"ویدیوی راهنمای بازوی اول آموز، نحوه استفاده از ابزارها و دستیارهای کلاسی را قدم‌به‌قدم نشان می‌دهد.","tunerPlus.watchVideo":"مشاهده در آپارات","tunerPlus.videoTitle":"ویدیو آموزش استفاده از بازوی اول آموز","account.backHome":"بازگشت به صفحه اصلی","account.benefits":"مزایای عضویت در اول آموز","account.academy":"مرجع تخصصی معلمان ابتدایی","account.heroEyebrow":"همراه هوشمند شما در کلاس درس","account.heroLead":"مهارت‌های نوین تدریس را به","account.heroHighlight":"کلاسی پرانرژی و خلاق","account.heroEnd":"تبدیل کنید.","account.heroDescription":"با عضویت در اول آموز، جامع‌ترین بانک روش‌های تدریس، طرح‌درس‌های استاندارد، کاربرگ‌های هفتگی و ابزارهای دست‌ورزی ابتدایی همواره در دسترس شماست.","account.expertCourses":"ساعت آموزش تخصصی","account.currentKnowledge":"بانک طرح‌درس و کاربرگ","account.fromBasics":"منطبق بر کتب درسی رسمی","account.lifetimeAccess":"دسترسی نامحدود","account.toPurchasedCourses":"به دوره‌ها و فایل‌های دانلودی","account.community":"جامعه معلمان خلاق","account.learnTogether":"هم‌افزایی با برترین آموزگاران","account.securePayment":"پشتیبانی دائمی","account.trustedPurchase":"همراه شما در طول سال تحصیلی","account.signIn":"ورود به حساب","account.freeSignup":"عضویت رایگان آموزگاران","account.googleLogin":"ورود سریع با حساب گوگل","account.googleSignup":"عضویت سریع با حساب گوگل","account.continueEmail":"یا با ایمیل ادامه دهید","account.forgotPassword":"رمز عبور را فراموش کرده‌اید؟","account.notMember":"هنوز در اول آموز ثبت‌نام نکرده‌اید؟","account.createFree":"ساخت حساب رایگان","account.haveAccount":"قبلاً در اول آموز حساب ساخته‌اید؟","account.backToLogin":"بازگشت به صفحه ورود","account.secureConnection":"اطلاعات شما با پروتکل رمزنگاری امن محافظت می‌شود.","account.kickerStart":"شروع همراهی با اول آموز","account.kicker":"حساب کاربری اول آموز","account.mode.login.title":"خوش آمدید، همکار گرامی","account.mode.login.description":"برای دسترسی به دوره‌ها، طرح‌درس‌ها و ابزارهای کلاسی وارد شوید.","account.mode.buyerRegister.title":"عضویت در خانواده اول آموز","account.mode.buyerRegister.description":"کمتر از یک دقیقه تا دسترسی به کامل‌ترین جعبه‌ابزار تدریس ابتدایی فاصله دارید.","account.mode.sellerRegister.title":"درخواست همکاری فروشگاه آموزشی","account.mode.sellerRegister.description":"اطلاعات خود را جهت بررسی عرضه ابزارها و ملزومات کلاسی وارد نمایید.","account.mode.teacherRegister.title":"همکاری به عنوان آموزگار و مؤلف","account.mode.teacherRegister.description":"تخصص و محتوای آموزشی خود را با هزاران همکار فرهنگی در سراسر کشور به اشتراک بگذارید.","account.mode.adminRegister.title":"ایجاد حساب مدیر سامانه","account.mode.adminRegister.description":"اطلاعات لازم برای ورود به پنل مدیریتی را وارد کنید.","account.mode.forgetPassword.title":"بازیابی رمز عبور","account.mode.forgetPassword.description":"ایمیل حساب خود را وارد کنید تا پیوند تغییر رمز عبور بلافاصله ارسال شود.","account.mode.resetPassword.title":"تنظیم رمز عبور جدید","account.mode.resetPassword.description":"یک رمز عبور امن و مطمئن برای حساب کاربری خود انتخاب کنید.","account.mode.TwoFactor.title":"تأیید امنیتی ورود","account.mode.TwoFactor.description":"برای حفاظت از اطلاعات حساب، رمز عبور یا کد تأیید خود را وارد کنید.","account.mode.Invite.title":"عضویت از طریق دعوت همکار","account.mode.Invite.description":"دعوت‌نامه شما معتبر است؛ مشخصات خود را برای شروع تکمیل کنید.","auth.email":"ایمیل","auth.emailPlaceholder":"ایمیل را وارد کنید","auth.password":"رمز عبور","auth.passwordPlaceholder":"رمز عبور را وارد کنید","auth.secondPassword":"رمز دوم","auth.secondPasswordPlaceholder":"رمز دوم را وارد کنید","auth.deliveryTitle":"انتخاب روش دریافت کد ورود","auth.deliveryPrompt":"روش دریافت کد شش‌رقمی را برای همین حساب انتخاب کنید.","auth.deliveryEmail":"دریافت از ایمیل","auth.deliverySms":"دریافت با پیامک","auth.deliveryDevice":"دریافت از پنل یکی از دو ادمین واردشده","auth.deliveryBack":"بازگشت به ورود","auth.deliveryChange":"انتخاب روش دیگر","auth.deliveryEmailDisabled":"ارسال ایمیل فعلاً غیرفعال است؛ از پیامک یا پنل یکی از دو ادمین واردشده استفاده کنید.","auth.mobile":"شماره موبایل","auth.mobilePlaceholder":"موبایل خود را وارد کنید","auth.firstName":"نام","auth.firstNamePlaceholder":"نام خود را وارد کنید","auth.lastName":"نام خانوادگی","auth.lastNamePlaceholder":"نام خانوادگی خود را وارد کنید","auth.referralCode":"کد معرف (اجباری نیست)","auth.referralPlaceholder":"کد پرسنلی معرف اجباری نیست","auth.sendRequest":"ارسال درخواست","road.eyebrow":"نقشه راه یادگیری تخصصی خودرو","road.heroLead":"از شناخت موتور تا","road.heroHighlight":"تسلط بر تیونینگ","road.heroDescription":"یک مسیر مرحله‌به‌مرحله و هدفمند برای تبدیل‌شدن به مکانیک و تیونر حرفه‌ای؛ بدون سردرگمی، از مفاهیم پایه تا تنظیمات پیشرفته ECU.","road.start":"شروع مسیر یادگیری","road.watchIntro":"تماشای معرفی مسیر","road.stats":"مشخصات مسیر یادگیری","road.sixStages":"مرحله تخصصی","road.structuredPath":"مسیر منظم","road.practical":"عملی","road.engineeringApproach":"با دید مهندسی","road.destination":"مقصد: تیونر حرفه‌ای","road.beforeStart":"قبل از شروع","road.introTitle":"مسیر درست، نیمی از موفقیت است","road.introDescription":"در این ویدیو با ترتیب مهارت‌ها و دلیل اهمیت هر مرحله آشنا شوید.","road.videoTitle":"مسیر مکانیک و تیونر موفق","road.introVideo":"ویدیوی معرفی","road.mapTitle":"نقشه راه تیونر حرفه‌ای","road.mapDescription":"هر مرحله، پیش‌نیاز منطقی مرحله بعدی است. مسیر را به‌ترتیب پیش ببرید.","road.viewCourse":"مشاهده دوره","road.outcomeKicker":"خط پایان نیست؛ شروع حرفه‌ای شدن است","road.outcomeTitle":"بعد از تکمیل این مسیر چه مهارت‌هایی دارید؟","road.outcomeDescription":"دیدی یکپارچه از مکانیک، سنسورها، تقویت موتور و تنظیم ECU که برای ورود جدی به دنیای تیونینگ نیاز دارید.","road.outcome1":"تحلیل عملکرد موتور","road.outcome2":"درک داده سنسورها","road.outcome3":"شناخت عیب و تعمیر","road.outcome4":"تنظیم حرفه‌ای ECU","road.ready":"آماده‌ای شروع کنی؟","road.finalTitle":"اولین قدم مسیر حرفه‌ای تو همین‌جاست.","road.firstStep":"ورود به مرحله اول","road.social":"شبکه‌های اجتماعی","catalog.categories":"دسته‌بندی","catalog.allCourses":"مشاهده همه دوره‌ها","catalog.courseList":"لیست دوره‌ها","catalog.allProducts":"مشاهده همه کالاها","catalog.productList":"لیست کالاها","catalog.articles":"مقاله‌ها","catalog.searchArticles":"جستجو در مقالات","catalog.articleSubtitle":"یادگیری، آموزش ابتدایی و همراهی خانواده‌ها و معلم‌ها","faq.contentNotice":"متن پرسش‌ها و پاسخ‌ها فعلاً به فارسی ارائه می‌شود.","faq.link":"لینک","faq.empty":"هنوز سوالی ثبت نشده است!","learn.subject.quran.title":"قرآن","learn.subject.classroom.description":"انضباط مثبت، افزایش تمرکز و همراهی با دانش‌آموزان و خانواده‌ها.","learn.subject.classroom.search":"مدیریت کلاس","learn.subject.classroom.title":"مدیریت کلاس","learn.subject.quran.search":"قرآن","learn.subject.quran.description":"آموزش روخوانی و مفاهیم ساده قرآن با روش‌های مناسب کودکان.","pageHeader.back":"بازگشت","pageHeader.article/article":"مقالات آموزشی","pageHeader.article/article-by-id/article-by-id":"مقاله آموزشی","pageHeader.auth/account/account":"ورود و ثبت‌نام","pageHeader.cart/cart":"سبد خرید","pageHeader.common/about/about":"درباره اول آموز","pageHeader.common/access-denied/access-denied":"دسترسی محدود","pageHeader.common/common-questions/common-questions":"سوالات متداول","pageHeader.common/confirm-email/confirm-email":"تأیید ایمیل","pageHeader.common/confirm-phone/confirm-phone":"تأیید شماره همراه","pageHeader.common/doers/doers":"همکاران اول آموز","pageHeader.common/off-code/off-code":"کد تخفیف","pageHeader.common/page404/page404":"صفحه پیدا نشد","pageHeader.common/page500/page500":"خطای سامانه","pageHeader.common/page503/page503":"سامانه در دسترس نیست","pageHeader.common/pay-rules/pay-rules":"قوانین خرید","pageHeader.common/privacy-policy/privacy-policy":"حریم خصوصی","pageHeader.common/seller-active/seller-active":"فعال‌سازی فروشندگی","pageHeader.common/seller-edit/seller-edit":"اطلاعات فروشنده","pageHeader.common/suport/suport":"پشتیبانی","pageHeader.common/teacher-active/teacher-active":"فعال‌سازی تدریس","pageHeader.common/teacher-edit/teacher-edit":"اطلاعات مدرس","pageHeader.common/teachers/teachers":"مدرسان اول آموز","pageHeader.course/course":"دسته‌بندی دوره‌ها و محصولات","pageHeader.course/course-by-id/course-by-id":"جزئیات دوره","pageHeader.exam/degree/degree":"گواهی آموزشی","pageHeader.exam/exam":"آزمون‌ها","pageHeader.exam/online-exam/online-exam":"آزمون آنلاین","pageHeader.home/product-questions/product-questions":"پرسش‌های محصول","pageHeader.home/psearch/psearch":"جستجوی محصولات","pageHeader.home/questions/questions":"پرسش‌های دوره","pageHeader.home/search/search":"جستجوی دوره‌ها","pageHeader.panel/admin-panel/admin-panel":"پنل مدیر","pageHeader.panel/seller-panel/seller-panel":"پنل فروشنده","pageHeader.panel/super-admin-panel/super-admin-panel":"پنل مدیرکل","pageHeader.panel/teacher-panel/teacher-panel":"پنل مدرس","pageHeader.panel/user-panel/user-panel":"حساب کاربری","pageHeader.product/product-by-id/product-by-id":"جزئیات محصول","pageHeader.product/products":"محصولات آموزشی","pageHeader.tuner-plus/alphabet/alphabet":"آموزش الفبا","pageHeader.tuner-plus/class-timer/class-timer":"تایمر کلاس","pageHeader.tuner-plus/clock-learning/clock-learning":"آموزش ساعت","pageHeader.tuner-plus/dictation/dictation":"تمرین املا","pageHeader.tuner-plus/grade-calculator/grade-calculator":"محاسبه نمره","pageHeader.tuner-plus/math-practice/math-practice":"تمرین ریاضی","pageHeader.tuner-plus/memory-game/memory-game":"بازی حافظه","pageHeader.tuner-plus/random-picker/random-picker":"انتخاب تصادفی","pageHeader.tuner-plus/shapes/shapes":"آموزش شکل‌ها","pageHeader.tuner-plus/syllable-breaker/syllable-breaker":"بخش‌بندی کلمات","pageHeader.tuner-plus/tuner-plus":"بازوی اول آموز"}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map