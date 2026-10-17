"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_view_pages_panel_super-admin-panel_super-admin-panel_module_ts"],{

/***/ 30619:
/*!***********************************************************************************************************!*\
  !*** ./src/app/view/pages/panel/super-admin-panel/catalog-translations/catalog-translations.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CatalogTranslationsComponent": () => (/* binding */ CatalogTranslationsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _catalog_translations_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./catalog-translations.component.html?ngResource */ 50269);
/* harmony import */ var _catalog_translations_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catalog-translations.component.scss?ngResource */ 4532);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);





let CatalogTranslationsComponent = class CatalogTranslationsComponent {
    constructor(http) {
        this.http = http;
        this.types = [
            { value: 'course', label: 'دوره‌ها' },
            { value: 'product', label: 'محصولات' },
            { value: 'article', label: 'مقاله‌های آموزشی' },
            { value: 'product-article', label: 'مقاله‌های محصول' },
            { value: 'course-category', label: 'دسته‌های آموزشگاه' },
            { value: 'product-category', label: 'دسته‌های فروشگاه' },
            { value: 'course-tag', label: 'برچسب‌های دوره' },
            { value: 'product-tag', label: 'برچسب‌های محصول' },
            { value: 'article-tag', label: 'برچسب‌های مقاله' },
            { value: 'product-article-tag', label: 'برچسب‌های مقالهٔ محصول' },
            { value: 'product-further-detail', label: 'ویژگی‌های محصول' },
            { value: 'product-design', label: 'طرح‌های محصول' },
            { value: 'product-guarantee', label: 'متن ضمانت محصول' },
            { value: 'product-return', label: 'متن مرجوعی محصول' },
            { value: 'course-level', label: 'سطح دوره' }
        ];
        this.type = 'course';
        this.language = 'en';
        this.page = 1;
        this.rows = [];
        this.busy = false;
        this.error = '';
        this.message = '';
    }
    ngOnInit() { this.load(); }
    load(reset = false) {
        if (reset) {
            this.page = 1;
            this.source = undefined;
            this.translation = undefined;
        }
        this.error = '';
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams().set('type', this.type).set('language', this.language).set('page', String(this.page));
        this.http.get('/api/CatalogTranslation/Items', { params }).subscribe(response => this.rows = response.data.items, error => this.fail(error));
    }
    open(row) {
        this.error = '';
        this.message = '';
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams().set('type', this.type).set('id', String(row.id)).set('language', this.language);
        this.http.get('/api/CatalogTranslation/Item', { params }).subscribe(response => {
            this.source = response.data.source;
            this.translation = response.data.translation || {
                contentType: this.type, contentId: row.id, language: this.language,
                name: '', shortDescription: '', description: '', isPublished: false, isReviewed: false
            };
        }, error => this.fail(error));
    }
    save(approve) {
        if (!this.translation || this.busy || !this.translation.name.trim()) {
            return;
        }
        this.busy = true;
        this.error = '';
        this.message = '';
        const draft = { ...this.translation, isPublished: approve };
        this.http.post('/api/CatalogTranslation/Save', draft).subscribe(response => {
            this.translation = response.data;
            this.busy = false;
            this.message = approve ? 'ترجمه در دیتابیس ذخیره و منتشر شد.' : 'پیش‌نویس در دیتابیس ذخیره شد و منتشر نیست.';
            this.load();
        }, error => { this.busy = false; this.fail(error); });
    }
    changePage(delta) {
        if (this.page + delta < 1 || (delta > 0 && this.rows.length < 20)) {
            return;
        }
        this.page += delta;
        this.source = undefined;
        this.translation = undefined;
        this.load();
    }
    fail(error) {
        if (error.status === 503) {
            this.error = 'جدول ترجمه‌ها هنوز روی دیتابیس نصب نشده است. مایگریشن CatalogTranslations را اجرا کنید.';
            return;
        }
        this.error = typeof error.error === 'string' && error.error.length < 200
            ? error.error : 'دریافت یا ذخیرهٔ ترجمه انجام نشد.';
    }
};
CatalogTranslationsComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient }
];
CatalogTranslationsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-catalog-translations',
        template: _catalog_translations_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_catalog_translations_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CatalogTranslationsComponent);



/***/ }),

/***/ 10958:
/*!****************************************************************************************!*\
  !*** ./src/app/view/pages/panel/super-admin-panel/super-admin-panel-routing.module.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SuperAdminPanelRoutingModule": () => (/* binding */ SuperAdminPanelRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _super_admin_panel_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./super-admin-panel.component */ 11120);
/* harmony import */ var _catalog_translations_catalog_translations_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catalog-translations/catalog-translations.component */ 30619);

/* eslint-disable max-len */




const routes = [
    { path: 'CatalogTranslations', component: _catalog_translations_catalog_translations_component__WEBPACK_IMPORTED_MODULE_1__.CatalogTranslationsComponent },
    {
        path: '',
        component: _super_admin_panel_component__WEBPACK_IMPORTED_MODULE_0__.SuperAdminPanelComponent
    },
    {
        path: 'BarcodeGenerator',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_view_pages_panel_admin-panel_barcode-generator_barcode-generator_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../admin-panel/barcode-generator/barcode-generator.module */ 28320)).then(m => m.BarcodeGeneratorModule)
    },
    {
        path: 'Cashrequests',
        redirectTo: '/SuperAdminPanel/CashRequests',
        // tslint:disable-next-line: max-line-length
        // loadChildren: () => import('../../../../view/pages/panel/super-admin-panel/cash-requests/cash-requests.module').then(m => m.CashRequestsModule)
    },
    {
        path: 'cashrequests',
        redirectTo: '/SuperAdminPanel/CashRequests',
        // tslint:disable-next-line: max-line-length
        // loadChildren: () => import('../../../../view/pages/panel/super-admin-panel/cash-requests/cash-requests.module').then(m => m.CashRequestsModule)
    },
    {
        path: 'cashRequests',
        redirectTo: '/SuperAdminPanel/CashRequests',
        // tslint:disable-next-line: max-line-length
        // loadChildren: () => import('../../../../view/pages/panel/super-admin-panel/cash-requests/cash-requests.module').then(m => m.CashRequestsModule)
    },
    {
        path: 'CashRequests',
        // tslint:disable-next-line: max-line-length
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_data_service_admin_admin_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_view_pages_panel_super-admin-panel_cash-requests_cash-requests_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../view/pages/panel/super-admin-panel/cash-requests/cash-requests.module */ 50513)).then(m => m.CashRequestsModule)
    },
    {
        path: 'setting',
        redirectTo: '/SuperAdminPanel/Setting',
        // loadChildren: () => import('../../../../view/pages/panel/super-admin-panel/setting/setting.module').then(m => m.SettingModule)
    },
    {
        path: 'Setting',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_view_pages_panel_super-admin-panel_setting_setting_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../view/pages/panel/super-admin-panel/setting/setting.module */ 84711)).then(m => m.SettingModule)
    },
    {
        path: 'users',
        redirectTo: '/SuperAdminPanel/Users',
        // loadChildren: () => import('../../../../view/pages/panel/super-admin-panel/users/users.module').then(m => m.UsersModule)
    },
    {
        path: 'Users',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_data_model_order_CartModel_ts"), __webpack_require__.e("default-node_modules_kolkov_angular-editor_fesm2020_kolkov-angular-editor_mjs"), __webpack_require__.e("default-src_app_data_service_admin_admin_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_view_pages_panel_super-admin-panel_users_users_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../view/pages/panel/super-admin-panel/users/users.module */ 88659)).then(m => m.UsersModule)
    },
    {
        path: 'Updatearticle',
        redirectTo: '/SuperAdminPanel/UpdateArticle',
        // loadChildren: () => import('../../../../view/pages/panel/super-admin-panel/update-article/update-article.module').then(m => m.UpdateArticleModule)
    },
    {
        path: 'updatearticle',
        redirectTo: '/SuperAdminPanel/UpdateArticle',
        // loadChildren: () => import('../../../../view/pages/panel/super-admin-panel/update-article/update-article.module').then(m => m.UpdateArticleModule)
    },
    {
        path: 'updateArticle',
        redirectTo: '/SuperAdminPanel/UpdateArticle',
        // loadChildren: () => import('../../../../view/pages/panel/super-admin-panel/update-article/update-article.module').then(m => m.UpdateArticleModule)
    },
    {
        path: 'UpdateArticle',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_kolkov_angular-editor_fesm2020_kolkov-angular-editor_mjs"), __webpack_require__.e("default-src_app_data_model_article_ArticleFilterModel_ts-src_app_view_components_article_shar-857c2c"), __webpack_require__.e("common"), __webpack_require__.e("src_app_view_pages_panel_super-admin-panel_update-article_update-article_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../view/pages/panel/super-admin-panel/update-article/update-article.module */ 51273)).then(m => m.UpdateArticleModule)
    },
    {
        path: 'Updatecourse',
        redirectTo: '/SuperAdminPanel/UpdateCourse',
        // loadChildren: () => import('../../../../view/pages/panel/super-admin-panel/update-course/update-course.module').then(m => m.UpdateCourseModule)
    },
    {
        path: 'updatecourse',
        redirectTo: '/SuperAdminPanel/UpdateCourse',
        // loadChildren: () => import('../../../../view/pages/panel/super-admin-panel/update-course/update-course.module').then(m => m.UpdateCourseModule)
    },
    {
        path: 'updateCourse',
        redirectTo: '/SuperAdminPanel/UpdateCourse',
        // loadChildren: () => import('../../../../view/pages/panel/super-admin-panel/update-course/update-course.module').then(m => m.UpdateCourseModule)
    },
    {
        path: 'UpdateCourse',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_course_shared-course_module_ts"), __webpack_require__.e("default-node_modules_kolkov_angular-editor_fesm2020_kolkov-angular-editor_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_view_pages_panel_super-admin-panel_update-course_update-course_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../view/pages/panel/super-admin-panel/update-course/update-course.module */ 13628)).then(m => m.UpdateCourseModule)
    },
    {
        path: 'UpdateCoursevideo',
        redirectTo: '/SuperAdminPanel/UpdateCourseVideo'
    },
    {
        path: 'Updatecoursevideo',
        redirectTo: '/SuperAdminPanel/UpdateCourseVideo'
    },
    {
        path: 'updatecoursevideo',
        redirectTo: '/SuperAdminPanel/UpdateCourseVideo'
    },
    {
        path: 'updatecourseVideo',
        redirectTo: '/SuperAdminPanel/UpdateCourseVideo'
    },
    {
        path: 'updateCourseVideo',
        redirectTo: '/SuperAdminPanel/UpdateCourseVideo'
    },
    {
        path: 'UpdateCourseVideo',
        // tslint:disable-next-line: max-line-length
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_course_shared-course_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_view_pages_panel_super-admin-panel_update-course-video_update-course-video_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../view/pages/panel/super-admin-panel/update-course-video/update-course-video.module */ 44715)).then(m => m.UpdateCourseVideoModule)
    },
    {
        path: 'Usercourse',
        redirectTo: '/SuperAdminPanel/UserCourse'
    },
    {
        path: 'usercourse',
        redirectTo: '/SuperAdminPanel/UserCourse'
    },
    {
        path: 'userCourse',
        redirectTo: '/SuperAdminPanel/UserCourse'
    },
    {
        path: 'UserCourse',
        // tslint:disable-next-line: max-line-length
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_view_pages_panel_super-admin-panel_user-course_user-course_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../../../view/pages/panel/super-admin-panel/user-course/user-course.module */ 38164)).then(m => m.UserCourseModule)
    },
    {
        path: 'Tunerplus',
        redirectTo: '/SuperAdminPanel/TunerPlus'
    },
    {
        path: 'tunerplus',
        redirectTo: '/SuperAdminPanel/TunerPlus'
    },
    {
        path: 'tunerPlus',
        redirectTo: '/SuperAdminPanel/TunerPlus'
    },
    {
        path: 'TunerPlus',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_view_pages_panel_super-admin-panel_tuner-plus_tuner-plus_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../view/pages/panel/super-admin-panel/tuner-plus/tuner-plus.module */ 84881)).then(m => m.TunerPlusModule)
    },
    {
        path: 'tunerPlusBase',
        redirectTo: '/SuperAdminPanel/TunerPlusBase'
    },
    {
        path: 'TunerPlusbase',
        redirectTo: '/SuperAdminPanel/TunerPlusBase'
    },
    {
        path: 'TunerplusBase',
        redirectTo: '/SuperAdminPanel/TunerPlusBase'
    },
    {
        path: 'Tunerplusbase',
        redirectTo: '/SuperAdminPanel/TunerPlusBase'
    },
    {
        path: 'tunerPlusbase',
        redirectTo: '/SuperAdminPanel/TunerPlusBase'
    },
    {
        path: 'tunerplusbase',
        redirectTo: '/SuperAdminPanel/TunerPlusBase'
    },
    {
        path: 'tunerplusBase',
        redirectTo: '/SuperAdminPanel/TunerPlusBase'
    },
    {
        path: 'tunerPlusBase',
        redirectTo: '/SuperAdminPanel/TunerPlusBase'
    },
    {
        path: 'TunerPlusBase',
        // tslint:disable-next-line: max-line-length
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_view_pages_panel_super-admin-panel_tuner-plus-base_tuner-plus-base_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../view/pages/panel/super-admin-panel/tuner-plus-base/tuner-plus-base.module */ 37389)).then(m => m.TunerPlusBaseModule)
    },
    {
        path: 'Updatecoursephoto',
        redirectTo: '/SuperAdminPanel/UpdateCoursePhoto'
    },
    {
        path: 'updateCoursePhoto',
        redirectTo: '/SuperAdminPanel/UpdateCoursePhoto'
    },
    {
        path: 'updateCoursephoto',
        redirectTo: '/SuperAdminPanel/UpdateCoursePhoto'
    },
    {
        path: 'UpdateCoursephoto',
        redirectTo: '/SuperAdminPanel/UpdateCoursePhoto'
    },
    {
        path: 'Updatecoursephoto',
        redirectTo: '/SuperAdminPanel/UpdateCoursePhoto'
    },
    {
        path: 'updatecoursephoto',
        redirectTo: '/SuperAdminPanel/UpdateCoursePhoto'
    },
    {
        path: 'updatecoursePhoto',
        redirectTo: '/SuperAdminPanel/UpdateCoursePhoto'
    },
    {
        path: 'updateCoursePhoto',
        redirectTo: '/SuperAdminPanel/UpdateCoursePhoto'
    },
    {
        path: 'UpdateCoursePhoto',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_course_shared-course_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_core_pipe_price_module_ts-src_app_view_pages_panel_super-admin-panel_update-course-ph-20f43b")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../view/pages/panel/super-admin-panel/update-course-photo/update-course-photo.module */ 18076)).then(m => m.UpdateCoursePhotoModule)
    },
    {
        path: 'Payhistory',
        redirectTo: '/SuperAdminPanel/PayHistory'
    },
    {
        path: 'payhistory',
        redirectTo: '/SuperAdminPanel/PayHistory'
    },
    {
        path: 'payHistory',
        redirectTo: '/SuperAdminPanel/PayHistory'
    },
    {
        path: 'PayHistory',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_data_model_order_CartModel_ts"), __webpack_require__.e("default-src_app_data_service_admin_admin_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_view_pages_panel_super-admin-panel_pay-history_pay-history_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../view/pages/panel/super-admin-panel/pay-history/pay-history.module */ 86598)).then(m => m.PayHistoryModule)
    },
    {
        path: 'Commonquestions',
        redirectTo: '/SuperAdminPanel/CommonQuestions'
    },
    {
        path: 'commonquestions',
        redirectTo: '/SuperAdminPanel/CommonQuestions'
    },
    {
        path: 'commonQuestions',
        redirectTo: '/SuperAdminPanel/CommonQuestions'
    },
    {
        path: 'CommonQuestions',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_view_pages_panel_super-admin-panel_common-questions_common-questions_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../view/pages/panel/super-admin-panel/common-questions/common-questions.module */ 20654)).then(m => m.CommonQuestionsModule)
    },
    {
        path: 'email',
        redirectTo: '/SuperAdminPanel/Email'
    },
    {
        path: 'Email',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_kolkov_angular-editor_fesm2020_kolkov-angular-editor_mjs"), __webpack_require__.e("default-src_app_data_service_admin_admin_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_view_pages_panel_super-admin-panel_email_email_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../view/pages/panel/super-admin-panel/email/email.module */ 77274)).then(m => m.EmailModule)
    },
    {
        path: 'doer',
        redirectTo: '/SuperAdminPanel/Doer'
    },
    {
        path: 'Doer',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_view_pages_panel_super-admin-panel_doer_doer_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../view/pages/panel/super-admin-panel/doer/doer.module */ 97161)).then(m => m.DoerModule)
    },
    {
        path: 'Sellercashrequests',
        redirectTo: '/SuperAdminPanel/SellerCashRequests'
    },
    {
        path: 'sellercashrequests',
        redirectTo: '/SuperAdminPanel/SellerCashRequests'
    },
    {
        path: 'sellercashRequests',
        redirectTo: '/SuperAdminPanel/SellerCashRequests'
    },
    {
        path: 'sellerCashRequests',
        redirectTo: '/SuperAdminPanel/SellerCashRequests'
    },
    {
        path: 'SellerCashRequests',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_data_service_admin_admin_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_view_pages_panel_super-admin-panel_seller-cash-requests_seller-cash-requests_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../view/pages/panel/super-admin-panel/seller-cash-requests/seller-cash-requests.module */ 95336)).then(m => m.SellerCashRequestsModule)
    },
    {
        path: 'Updateproductarticle',
        redirectTo: '/SuperAdminPanel/UpdateProductArticle'
    },
    {
        path: 'updateproductarticle',
        redirectTo: '/SuperAdminPanel/UpdateProductArticle'
    },
    {
        path: 'updateproductArticle',
        redirectTo: '/SuperAdminPanel/UpdateProductArticle'
    },
    {
        path: 'updateProductArticle',
        redirectTo: '/SuperAdminPanel/UpdateProductArticle'
    },
    {
        path: 'UpdateProductArticle',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_kolkov_angular-editor_fesm2020_kolkov-angular-editor_mjs"), __webpack_require__.e("default-src_app_data_model_article_ArticleFilterModel_ts-src_app_view_components_article_shar-857c2c"), __webpack_require__.e("common"), __webpack_require__.e("src_app_view_pages_panel_super-admin-panel_update-product-article_update-product-article_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../view/pages/panel/super-admin-panel/update-product-article/update-product-article.module */ 95769)).then(m => m.UpdateProductArticleModule)
    },
    {
        path: 'Updateproduct',
        redirectTo: '/SuperAdminPanel/UpdateProduct'
    },
    {
        path: 'updateproduct',
        redirectTo: '/SuperAdminPanel/UpdateProduct'
    },
    {
        path: 'updateProduct',
        redirectTo: '/SuperAdminPanel/UpdateProduct'
    },
    {
        path: 'UpdateProduct',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_product_shared-product_module_ts"), __webpack_require__.e("default-node_modules_kolkov_angular-editor_fesm2020_kolkov-angular-editor_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_view_pages_panel_super-admin-panel_update-product_update-product_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../view/pages/panel/super-admin-panel/update-product/update-product.module */ 66188)).then(m => m.UpdateProductModule)
    },
    {
        path: 'Updateproductphoto',
        redirectTo: '/SuperAdminPanel/UpdateProductPhoto'
    },
    {
        path: 'updateproductphoto',
        redirectTo: '/SuperAdminPanel/UpdateProductPhoto'
    },
    {
        path: 'updateproductPhoto',
        redirectTo: '/SuperAdminPanel/UpdateProductPhoto'
    },
    {
        path: 'updateProductPhoto',
        redirectTo: '/SuperAdminPanel/UpdateProductPhoto'
    },
    {
        path: 'UpdateProductPhoto',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_product_shared-product_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_view_pages_panel_super-admin-panel_update-product-photo_update-product-photo_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../view/pages/panel/super-admin-panel/update-product-photo/update-product-photo.module */ 16170)).then(m => m.UpdateProductPhotoModule)
    },
    {
        path: 'Updateproductvideo',
        redirectTo: '/SuperAdminPanel/UpdateProductVideo'
    },
    {
        path: 'updateproductvideo',
        redirectTo: '/SuperAdminPanel/UpdateProductVideo'
    },
    {
        path: 'updateproductVideo',
        redirectTo: '/SuperAdminPanel/UpdateProductVideo'
    },
    {
        path: 'updateProductVideo',
        redirectTo: '/SuperAdminPanel/UpdateProductVideo'
    },
    {
        path: 'UpdateProductVideo',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_product_shared-product_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_view_pages_panel_super-admin-panel_update-product-video_update-product-video_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../view/pages/panel/super-admin-panel/update-product-video/update-product-video.module */ 39044)).then(m => m.UpdateProductVideoModule)
    },
    {
        path: 'UserdetailRequest',
        redirectTo: '/SuperAdminPanel/UserDetailRequest'
    },
    {
        path: 'userDetailRequest',
        redirectTo: '/SuperAdminPanel/UserDetailRequest'
    },
    {
        path: 'userDetailrequest',
        redirectTo: '/SuperAdminPanel/UserDetailRequest'
    },
    {
        path: 'UserDetailrequest',
        redirectTo: '/SuperAdminPanel/UserDetailRequest'
    },
    {
        path: 'Userdetailrequest',
        redirectTo: '/SuperAdminPanel/UserDetailRequest'
    },
    {
        path: 'userdetailrequest',
        redirectTo: '/SuperAdminPanel/UserDetailRequest'
    },
    {
        path: 'userdetailRequest',
        redirectTo: '/SuperAdminPanel/UserDetailRequest'
    },
    {
        path: 'userDetailRequest',
        redirectTo: '/SuperAdminPanel/UserDetailRequest'
    },
    {
        path: 'UserDetailRequest',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_data_service_admin_admin_service_ts"), __webpack_require__.e("src_app_view_pages_panel_super-admin-panel_user-detail-request_user-detail-request_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../view/pages/panel/super-admin-panel/user-detail-request/user-detail-request.module */ 32212)).then(m => m.UserDetailRequestModule)
    },
    {
        path: 'courseMediacomment',
        redirectTo: '/SuperAdminPanel/CourseMediaComment'
    },
    {
        path: 'CoursemediaComment',
        redirectTo: '/SuperAdminPanel/CourseMediaComment'
    },
    {
        path: 'CourseMediacomment',
        redirectTo: '/SuperAdminPanel/CourseMediaComment'
    },
    {
        path: 'Coursemediacomment',
        redirectTo: '/SuperAdminPanel/CourseMediaComment'
    },
    {
        path: 'coursemediacomment',
        redirectTo: '/SuperAdminPanel/CourseMediaComment'
    },
    {
        path: 'coursemediaComment',
        redirectTo: '/SuperAdminPanel/CourseMediaComment'
    },
    {
        path: 'courseMediaComment',
        redirectTo: '/SuperAdminPanel/CourseMediaComment'
    },
    {
        path: 'CourseMediaComment',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_course_shared-course_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_view_pages_panel_super-admin-panel_course-media-comment_course-media-comment_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./course-media-comment/course-media-comment.module */ 92083)).then(m => m.CourseMediaCommentPageModule)
    },
];
let SuperAdminPanelRoutingModule = class SuperAdminPanelRoutingModule {
};
SuperAdminPanelRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    })
], SuperAdminPanelRoutingModule);



/***/ }),

/***/ 11120:
/*!***********************************************************************************!*\
  !*** ./src/app/view/pages/panel/super-admin-panel/super-admin-panel.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SuperAdminPanelComponent": () => (/* binding */ SuperAdminPanelComponent)
/* harmony export */ });
/* harmony import */ var G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _super_admin_panel_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./super-admin-panel.component.html?ngResource */ 50906);
/* harmony import */ var _super_admin_panel_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./super-admin-panel.component.scss?ngResource */ 82263);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);







let SuperAdminPanelComponent = class SuperAdminPanelComponent {
  constructor(router, menuCtrl) {
    this.router = router;
    this.menuCtrl = menuCtrl;
    this.segmentSelected = 'Course';
  }

  ngOnInit() {}

  toggleAppMenu() {
    var _this = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.menuCtrl.toggle();
    })();
  }

  onNavigate(url) {
    this.router.navigateByUrl(url);
  }

};

SuperAdminPanelComponent.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.MenuController
}];

SuperAdminPanelComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-super-admin-panel',
  template: _super_admin_panel_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_super_admin_panel_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], SuperAdminPanelComponent);


/***/ }),

/***/ 55528:
/*!********************************************************************************!*\
  !*** ./src/app/view/pages/panel/super-admin-panel/super-admin-panel.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SuperAdminPanelModule": () => (/* binding */ SuperAdminPanelModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/view/components/app/page-header/page-header.module */ 19916);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _super_admin_panel_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./super-admin-panel-routing.module */ 10958);
/* harmony import */ var _super_admin_panel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./super-admin-panel.component */ 11120);
/* harmony import */ var _catalog_translations_catalog_translations_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./catalog-translations/catalog-translations.component */ 30619);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/app/footer/footer.module */ 60412);
/* harmony import */ var _components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/common/loading/loading.module */ 90876);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);











let SuperAdminPanelModule = class SuperAdminPanelModule {
};
SuperAdminPanelModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        declarations: [_super_admin_panel_component__WEBPACK_IMPORTED_MODULE_2__.SuperAdminPanelComponent, _catalog_translations_catalog_translations_component__WEBPACK_IMPORTED_MODULE_3__.CatalogTranslationsComponent],
        imports: [
            src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__.PageHeaderModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _super_admin_panel_routing_module__WEBPACK_IMPORTED_MODULE_1__.SuperAdminPanelRoutingModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_4__.FooterModule,
            _components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_5__.LoadingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule
        ]
    })
], SuperAdminPanelModule);



/***/ }),

/***/ 4532:
/*!************************************************************************************************************************!*\
  !*** ./src/app/view/pages/panel/super-admin-panel/catalog-translations/catalog-translations.component.scss?ngResource ***!
  \************************************************************************************************************************/
/***/ ((module) => {

module.exports = ".translation-layout {\n  max-width: 1400px;\n  margin: 0 auto;\n  padding: 20px;\n}\n\n.filters, .columns, .actions, .pager {\n  display: flex;\n  gap: 16px;\n}\n\n.filters ion-item {\n  flex: 1;\n  min-width: 180px;\n}\n\n.columns {\n  margin-top: 20px;\n  align-items: flex-start;\n}\n\n.list-panel {\n  width: 35%;\n}\n\n.editor-panel {\n  flex: 1;\n  min-width: 0;\n}\n\n.list-panel, .editor-panel {\n  background: var(--ion-card-background, var(--ion-background-color));\n  border: 1px solid var(--ion-color-medium-shade);\n  border-radius: 12px;\n  padding: 12px;\n}\n\n.selected {\n  --background: var(--ion-color-primary-tint);\n}\n\n.source-text {\n  padding: 12px;\n  border: 1px solid var(--ion-color-medium);\n  border-radius: 8px;\n  white-space: pre-wrap;\n  overflow-wrap: anywhere;\n}\n\n.long-text {\n  max-height: 220px;\n  overflow: auto;\n}\n\nlabel {\n  display: block;\n  margin: 16px 0 8px;\n  font-weight: 600;\n}\n\n.actions, .pager {\n  justify-content: flex-start;\n  align-items: center;\n  flex-wrap: wrap;\n  margin-top: 16px;\n}\n\n.approved {\n  color: var(--ion-color-success);\n}\n\n@media (max-width: 800px) {\n  .columns {\n    flex-direction: column;\n  }\n\n  .list-panel, .editor-panel {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGFsb2ctdHJhbnNsYXRpb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQXNCLGlCQUFBO0VBQW1CLGNBQUE7RUFBZ0IsYUFBQTtBQUl6RDs7QUFIQTtFQUF1QyxhQUFBO0VBQWUsU0FBQTtBQVF0RDs7QUFQQTtFQUFvQixPQUFBO0VBQVMsZ0JBQUE7QUFZN0I7O0FBWEE7RUFBVyxnQkFBQTtFQUFrQix1QkFBQTtBQWdCN0I7O0FBZkE7RUFBYyxVQUFBO0FBbUJkOztBQWxCQTtFQUFnQixPQUFBO0VBQVMsWUFBQTtBQXVCekI7O0FBdEJBO0VBQTZCLG1FQUFBO0VBQXFFLCtDQUFBO0VBQWlELG1CQUFBO0VBQXFCLGFBQUE7QUE2QnhLOztBQTVCQTtFQUFZLDJDQUFBO0FBZ0NaOztBQS9CQTtFQUFlLGFBQUE7RUFBZSx5Q0FBQTtFQUEyQyxrQkFBQTtFQUFvQixxQkFBQTtFQUF1Qix1QkFBQTtBQXVDcEg7O0FBdENBO0VBQWEsaUJBQUE7RUFBbUIsY0FBQTtBQTJDaEM7O0FBMUNBO0VBQVEsY0FBQTtFQUFnQixrQkFBQTtFQUFvQixnQkFBQTtBQWdENUM7O0FBL0NBO0VBQW1CLDJCQUFBO0VBQTZCLG1CQUFBO0VBQXFCLGVBQUE7RUFBaUIsZ0JBQUE7QUFzRHRGOztBQXJEQTtFQUFZLCtCQUFBO0FBeURaOztBQXhEQTtFQUE0QjtJQUFXLHNCQUFBO0VBNkRyQzs7RUE3RCtEO0lBQTZCLFdBQUE7RUFpRTVGO0FBQ0YiLCJmaWxlIjoiY2F0YWxvZy10cmFuc2xhdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudHJhbnNsYXRpb24tbGF5b3V0IHsgbWF4LXdpZHRoOiAxNDAwcHg7IG1hcmdpbjogMCBhdXRvOyBwYWRkaW5nOiAyMHB4OyB9XG4uZmlsdGVycywgLmNvbHVtbnMsIC5hY3Rpb25zLCAucGFnZXIgeyBkaXNwbGF5OiBmbGV4OyBnYXA6IDE2cHg7IH1cbi5maWx0ZXJzIGlvbi1pdGVtIHsgZmxleDogMTsgbWluLXdpZHRoOiAxODBweDsgfVxuLmNvbHVtbnMgeyBtYXJnaW4tdG9wOiAyMHB4OyBhbGlnbi1pdGVtczogZmxleC1zdGFydDsgfVxuLmxpc3QtcGFuZWwgeyB3aWR0aDogMzUlOyB9XG4uZWRpdG9yLXBhbmVsIHsgZmxleDogMTsgbWluLXdpZHRoOiAwOyB9XG4ubGlzdC1wYW5lbCwgLmVkaXRvci1wYW5lbCB7IGJhY2tncm91bmQ6IHZhcigtLWlvbi1jYXJkLWJhY2tncm91bmQsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKSk7IGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpOyBib3JkZXItcmFkaXVzOiAxMnB4OyBwYWRkaW5nOiAxMnB4OyB9XG4uc2VsZWN0ZWQgeyAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQpOyB9XG4uc291cmNlLXRleHQgeyBwYWRkaW5nOiAxMnB4OyBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTsgYm9yZGVyLXJhZGl1czogOHB4OyB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7IG92ZXJmbG93LXdyYXA6IGFueXdoZXJlOyB9XG4ubG9uZy10ZXh0IHsgbWF4LWhlaWdodDogMjIwcHg7IG92ZXJmbG93OiBhdXRvOyB9XG5sYWJlbCB7IGRpc3BsYXk6IGJsb2NrOyBtYXJnaW46IDE2cHggMCA4cHg7IGZvbnQtd2VpZ2h0OiA2MDA7IH1cbi5hY3Rpb25zLCAucGFnZXIgeyBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGZsZXgtd3JhcDogd3JhcDsgbWFyZ2luLXRvcDogMTZweDsgfVxuLmFwcHJvdmVkIHsgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKTsgfVxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7IC5jb2x1bW5zIHsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfSAubGlzdC1wYW5lbCwgLmVkaXRvci1wYW5lbCB7IHdpZHRoOiAxMDAlOyB9IH1cbiJdfQ== */";

/***/ }),

/***/ 82263:
/*!************************************************************************************************!*\
  !*** ./src/app/view/pages/panel/super-admin-panel/super-admin-panel.component.scss?ngResource ***!
  \************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdXBlci1hZG1pbi1wYW5lbC5jb21wb25lbnQuc2NzcyJ9 */";

/***/ }),

/***/ 50269:
/*!************************************************************************************************************************!*\
  !*** ./src/app/view/pages/panel/super-admin-panel/catalog-translations/catalog-translations.component.html?ngResource ***!
  \************************************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"interior-header\">\n  \n  <app-page-header fallback=\"/\" [defaultBack]=\"false\">\n<ion-buttons page-back><ion-back-button text=\"\" icon=\"arrow-back-outline\" defaultHref=\"/SuperAdminPanel\"></ion-back-button></ion-buttons>\n<span page-title>ترجمهٔ محتوای سایت</span>\n  </app-page-header>\n</ion-header>\n\n<ion-content>\n  <div class=\"translation-layout\" dir=\"rtl\">\n    <h1>ترجمهٔ محتوا</h1>\n    <p>متن فارسی اصلی حفظ می‌شود. ترجمه را وارد و در دیتابیس ذخیره کنید؛ فقط موارد منتشرشده در سایت نمایش داده می‌شوند.</p>\n\n    <div class=\"filters\">\n      <ion-item>\n        <ion-label>نوع محتوا</ion-label>\n        <ion-select [(ngModel)]=\"type\" (ionChange)=\"load(true)\">\n          <ion-select-option *ngFor=\"let item of types\" [value]=\"item.value\">{{ item.label }}</ion-select-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label>زبان</ion-label>\n        <ion-select [(ngModel)]=\"language\" (ionChange)=\"load(true)\">\n          <ion-select-option value=\"en\">English</ion-select-option>\n          <ion-select-option value=\"ar\">العربية</ion-select-option>\n          <ion-select-option value=\"tr\">Türkçe</ion-select-option>\n          <ion-select-option value=\"ru\">Русский</ion-select-option>\n        </ion-select>\n      </ion-item>\n    </div>\n\n    <ion-note color=\"danger\" *ngIf=\"error\">{{ error }}</ion-note>\n    <ion-note color=\"success\" *ngIf=\"message\">{{ message }}</ion-note>\n\n    <div class=\"columns\">\n      <section class=\"list-panel\">\n        <ion-list>\n          <ion-item button *ngFor=\"let row of rows\" (click)=\"open(row)\" [class.selected]=\"source?.id === row.id\">\n            <ion-label>\n              <h2>{{ row.name }}</h2>\n              <p>{{ row.translatedName || 'بدون ترجمه' }}</p>\n              <ion-badge [color]=\"row.isPublished ? 'success' : 'medium'\">\n                {{ row.isPublished ? 'منتشر شده' : row.translatedName ? 'پیش‌نویس' : 'بدون ترجمه' }}\n              </ion-badge>\n            </ion-label>\n          </ion-item>\n        </ion-list>\n        <div class=\"pager\">\n          <ion-button fill=\"outline\" (click)=\"changePage(-1)\" [disabled]=\"page === 1\">قبلی</ion-button>\n          <span>صفحه {{ page }}</span>\n          <ion-button fill=\"outline\" (click)=\"changePage(1)\" [disabled]=\"rows.length < 20\">بعدی</ion-button>\n        </div>\n      </section>\n\n      <section class=\"editor-panel\" *ngIf=\"source && translation; else selectHint\">\n        <h2>مورد شماره {{ source.id }}</h2>\n        <label>عنوان فارسی</label>\n        <div class=\"source-text\">{{ source.name }}</div>\n        <ion-item><ion-label position=\"stacked\">عنوان ترجمه</ion-label><ion-input [(ngModel)]=\"translation.name\"></ion-input></ion-item>\n\n        <ng-container *ngIf=\"type === 'course' || type === 'product' || type === 'article' || type === 'product-article' || type === 'product-further-detail' || type === 'product-design'\">\n          <label>خلاصهٔ فارسی</label>\n          <div class=\"source-text\">{{ source.shortDescription || '—' }}</div>\n          <ion-item><ion-label position=\"stacked\">خلاصهٔ ترجمه</ion-label><ion-textarea autoGrow=\"true\" [(ngModel)]=\"translation.shortDescription\"></ion-textarea></ion-item>\n\n          <label>متن فارسی</label>\n          <div class=\"source-text long-text\">{{ source.description || '—' }}</div>\n          <ion-item><ion-label position=\"stacked\">متن ترجمه، با حفظ HTML در صورت وجود</ion-label><ion-textarea [rows]=\"12\" [(ngModel)]=\"translation.description\"></ion-textarea></ion-item>\n        </ng-container>\n\n        <div class=\"actions\">\n          <ion-button fill=\"outline\" (click)=\"save(false)\" [disabled]=\"busy || !translation.name.trim()\">ذخیرهٔ پیش‌نویس</ion-button>\n          <ion-button color=\"success\" (click)=\"save(true)\" [disabled]=\"busy || !translation.name.trim()\">ذخیره و انتشار</ion-button>\n        </div>\n      </section>\n      <ng-template #selectHint><section class=\"editor-panel\"><p>برای بازبینی، یک مورد را انتخاب کنید.</p></section></ng-template>\n    </div>\n  </div>\n</ion-content>\n";

/***/ }),

/***/ 50906:
/*!************************************************************************************************!*\
  !*** ./src/app/view/pages/panel/super-admin-panel/super-admin-panel.component.html?ngResource ***!
  \************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"interior-header\" [translucent]=\"true\">\n  <app-loading></app-loading>\n  <app-page-header titleKey=\"pageHeader.panel/super-admin-panel/super-admin-panel\" fallback=\"/\" [defaultBack]=\"false\">\n<ion-buttons page-back><ion-back-button text=\"\" icon=\"arrow-back-outline\" defaultHref=\"/\" class=\"panel-back-btn\"></ion-back-button></ion-buttons>\n\n  </app-page-header>\n</ion-header>\n\n<ion-content>\n  <ion-grid class=\"bg\">\n    <ion-row>\n      <ion-col size=\"12\" size-lg=\"10\" offset-lg=\"1\">\n        <!-- Hero Section -->\n        <div class=\"panel-hero\">\n          <div class=\"panel-hero__badge\">\n            <span class=\"sparkle\">✦</span>\n            <span>مدیریت ارشد و راهبری کلان سامانه</span>\n          </div>\n          <h1 class=\"panel-hero__title\">میز کار سوپر ادمین اول آموز</h1>\n          <p class=\"panel-hero__desc\">\n            مدیریت مالی و تسویه‌حساب‌ها، تنظیمات کلان سیستم، کاربران، هوش مصنوعی، چندزبانی و نمایندگان\n          </p>\n        </div>\n\n        <!-- Section Switcher Segment -->\n        <ion-segment [(ngModel)]=\"segmentSelected\" dir=\"rtl\">\n          <ion-segment-button value=\"Course\">\n            <ion-icon name=\"school-outline\"></ion-icon>\n            <ion-label>آموزشگاه</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value=\"Product\">\n            <ion-icon name=\"cube-outline\"></ion-icon>\n            <ion-label>فروشگاه</ion-label>\n          </ion-segment-button>\n        </ion-segment>\n\n        <!-- General Master Utilities -->\n        <div style=\"margin: 16px 0 24px; direction: rtl;\">\n          <div class=\"panel-grid-cards\">\n            <a class=\"panel-action-card panel-action-card--purple\" routerLink=\"/SuperAdminPanel/CatalogTranslations\">\n              <div class=\"panel-action-card__main\">\n                <div class=\"panel-action-card__icon-wrap\">\n                  <ion-icon name=\"language-outline\"></ion-icon>\n                </div>\n                <div class=\"panel-action-card__body\">\n                  <strong>ترجمهٔ محتوای سایت</strong>\n                  <small>مدیریت زبان‌های مختلف سامانه</small>\n                </div>\n              </div>\n              <ion-icon class=\"panel-action-card__arrow\" name=\"chevron-back-outline\"></ion-icon>\n            </a>\n\n            <a class=\"panel-action-card panel-action-card--emerald\" routerLink=\"/SuperAdminPanel/BarcodeGenerator\">\n              <div class=\"panel-action-card__main\">\n                <div class=\"panel-action-card__icon-wrap\">\n                  <ion-icon name=\"barcode-outline\"></ion-icon>\n                </div>\n                <div class=\"panel-action-card__body\">\n                  <strong>تولید بارکد و QR کد</strong>\n                  <small>تولید سریع کد دسترسی به محتوا</small>\n                </div>\n              </div>\n              <ion-icon class=\"panel-action-card__arrow\" name=\"chevron-back-outline\"></ion-icon>\n            </a>\n          </div>\n        </div>\n\n        <!-- ================= PRODUCT SECTION ================= -->\n        <div *ngIf=\"segmentSelected === 'Product'\" dir=\"rtl\">\n          <!-- Sub-section: Finance & Transactions -->\n          <section class=\"panel-section\">\n            <div class=\"panel-section__header\">\n              <h2 class=\"panel-section__title\">\n                <ion-icon name=\"wallet-outline\"></ion-icon>\n                <span>امور مالی و تراکنش‌های فروشگاه</span>\n              </h2>\n              <span class=\"panel-section__tag\">۲ بخش</span>\n            </div>\n            <div class=\"panel-grid-cards\">\n              <a class=\"panel-action-card panel-action-card--emerald\" routerLink=\"/SuperAdminPanel/SellerCashRequests\">\n                <div class=\"panel-action-card__main\">\n                  <div class=\"panel-action-card__icon-wrap\"><ion-icon name=\"cash-outline\"></ion-icon></div>\n                  <div class=\"panel-action-card__body\"><strong>درخواست وجه</strong><small>بررسی و تسویه درخواست‌های فروشندگان</small></div>\n                </div>\n                <ion-icon class=\"panel-action-card__arrow\" name=\"chevron-back-outline\"></ion-icon>\n              </a>\n\n              <a class=\"panel-action-card panel-action-card--sky\" routerLink=\"/SuperAdminPanel/PayHistory\">\n                <div class=\"panel-action-card__main\">\n                  <div class=\"panel-action-card__icon-wrap\"><ion-icon name=\"git-compare-outline\"></ion-icon></div>\n                  <div class=\"panel-action-card__body\"><strong>تراکنش ها</strong><small>تاریخچه پرداخت‌ها و تراکنش‌های مالی</small></div>\n                </div>\n                <ion-icon class=\"panel-action-card__arrow\" name=\"chevron-back-outline\"></ion-icon>\n              </a>\n            </div>\n          </section>\n\n          <!-- Sub-section: Content & Media Management -->\n          <section class=\"panel-section\">\n            <div class=\"panel-section__header\">\n              <h2 class=\"panel-section__title\">\n                <ion-icon name=\"create-outline\"></ion-icon>\n                <span>مدیریت و ویرایش مستقیم محصولات</span>\n              </h2>\n              <span class=\"panel-section__tag\">۴ بخش</span>\n            </div>\n            <div class=\"panel-grid-cards\">\n              <a class=\"panel-action-card panel-action-card--purple\" routerLink=\"/SuperAdminPanel/UpdateProduct\">\n                <div class=\"panel-action-card__main\">\n                  <div class=\"panel-action-card__icon-wrap\"><ion-icon name=\"cube-outline\"></ion-icon></div>\n                  <div class=\"panel-action-card__body\"><strong>ویرایش کالا</strong><small>ویرایش اطلاعات و مشخصات کالا</small></div>\n                </div>\n                <ion-icon class=\"panel-action-card__arrow\" name=\"chevron-back-outline\"></ion-icon>\n              </a>\n\n              <a class=\"panel-action-card panel-action-card--rose\" routerLink=\"/SuperAdminPanel/UpdateProductVideo\">\n                <div class=\"panel-action-card__main\">\n                  <div class=\"panel-action-card__icon-wrap\"><ion-icon name=\"videocam-outline\"></ion-icon></div>\n                  <div class=\"panel-action-card__body\"><strong>ویرایش ویدیو کالا</strong><small>مدیریت ویدیوهای محصولات</small></div>\n                </div>\n                <ion-icon class=\"panel-action-card__arrow\" name=\"chevron-back-outline\"></ion-icon>\n              </a>\n\n              <a class=\"panel-action-card panel-action-card--amber\" routerLink=\"/SuperAdminPanel/UpdateProductPhoto\">\n                <div class=\"panel-action-card__main\">\n                  <div class=\"panel-action-card__icon-wrap\"><ion-icon name=\"images-outline\"></ion-icon></div>\n                  <div class=\"panel-action-card__body\"><strong>ویرایش تصویر کالا</strong><small>تغییر یا حذف تصاویر کالا</small></div>\n                </div>\n                <ion-icon class=\"panel-action-card__arrow\" name=\"chevron-back-outline\"></ion-icon>\n              </a>\n\n              <a class=\"panel-action-card panel-action-card--purple\" routerLink=\"/SuperAdminPanel/UpdateProductArticle\">\n                <div class=\"panel-action-card__main\">\n                  <div class=\"panel-action-card__icon-wrap\"><ion-icon name=\"document-text-outline\"></ion-icon></div>\n                  <div class=\"panel-action-card__body\"><strong>ویرایش مقاله</strong><small>ویرایش مقالات فروشگاه</small></div>\n                </div>\n                <ion-icon class=\"panel-action-card__arrow\" name=\"chevron-back-outline\"></ion-icon>\n              </a>\n            </div>\n          </section>\n\n          <!-- Sub-section: Core System & Tuner Plus -->\n          <section class=\"panel-section\">\n            <div class=\"panel-section__header\">\n              <h2 class=\"panel-section__title\">\n                <ion-icon name=\"hardware-chip-outline\"></ion-icon>\n                <span>سیستم و هوش مصنوعی اول آموز</span>\n              </h2>\n              <span class=\"panel-section__tag\">۲ بخش</span>\n            </div>\n            <div class=\"panel-grid-cards\">\n              <a class=\"panel-action-card panel-action-card--emerald\" routerLink=\"/SuperAdminPanel/TunerPlusBase\">\n                <div class=\"panel-action-card__main\">\n                  <div class=\"panel-action-card__icon-wrap\"><ion-icon name=\"sparkles-outline\"></ion-icon></div>\n                  <div class=\"panel-action-card__body\"><strong>بازوی اول آموز (اصلی)</strong><small>مدیریت موتور هوش مصنوعی و تنظیمات پایه</small></div>\n                </div>\n                <ion-icon class=\"panel-action-card__arrow\" name=\"chevron-back-outline\"></ion-icon>\n              </a>\n\n              <a class=\"panel-action-card panel-action-card--purple\" routerLink=\"/SuperAdminPanel/Setting\">\n                <div class=\"panel-action-card__main\">\n                  <div class=\"panel-action-card__icon-wrap\"><ion-icon name=\"settings-outline\"></ion-icon></div>\n                  <div class=\"panel-action-card__body\"><strong>تنظیمات سایت</strong><small>تنظیمات کلان سامانه و درگاه‌ها</small></div>\n                </div>\n                <ion-icon class=\"panel-action-card__arrow\" name=\"chevron-back-outline\"></ion-icon>\n              </a>\n            </div>\n          </section>\n\n          <!-- Sub-section: Users, Communications & Representatives -->\n          <section class=\"panel-section\">\n            <div class=\"panel-section__header\">\n              <h2 class=\"panel-section__title\">\n                <ion-icon name=\"people-outline\"></ion-icon>\n                <span>کاربران، نمایندگان و ارتباطات</span>\n              </h2>\n              <span class=\"panel-section__tag\">۴ بخش</span>\n            </div>\n            <div class=\"panel-grid-cards\">\n              <a class=\"panel-action-card panel-action-card--sky\" routerLink=\"/SuperAdminPanel/Users\">\n                <div class=\"panel-action-card__main\">\n                  <div class=\"panel-action-card__icon-wrap\"><ion-icon name=\"people-outline\"></ion-icon></div>\n                  <div class=\"panel-action-card__body\"><strong>کاربران</strong><small>مدیریت حساب‌ها، نقش‌ها و دسترسی‌ها</small></div>\n                </div>\n                <ion-icon class=\"panel-action-card__arrow\" name=\"chevron-back-outline\"></ion-icon>\n              </a>\n\n              <a class=\"panel-action-card panel-action-card--rose\" routerLink=\"/SuperAdminPanel/Doer\">\n                <div class=\"panel-action-card__main\">\n                  <div class=\"panel-action-card__icon-wrap\"><ion-icon name=\"business-outline\"></ion-icon></div>\n                  <div class=\"panel-action-card__body\"><strong>نمایندگان</strong><small>مدیریت نمایندگی‌ها و دفاتر همکار</small></div>\n                </div>\n                <ion-icon class=\"panel-action-card__arrow\" name=\"chevron-back-outline\"></ion-icon>\n              </a>\n\n              <a class=\"panel-action-card panel-action-card--amber\" routerLink=\"/SuperAdminPanel/Email\">\n                <div class=\"panel-action-card__main\">\n                  <div class=\"panel-action-card__icon-wrap\"><ion-icon name=\"mail-outline\"></ion-icon></div>\n                  <div class=\"panel-action-card__body\"><strong>ارسال ایمیل</strong><small>ارسال ایمیل‌های گروهی و اطلاع‌رسانی</small></div>\n                </div>\n                <ion-icon class=\"panel-action-card__arrow\" name=\"chevron-back-outline\"></ion-icon>\n              </a>\n\n              <a class=\"panel-action-card panel-action-card--purple\" routerLink=\"/SuperAdminPanel/CommonQuestions\">\n                <div class=\"panel-action-card__main\">\n                  <div class=\"panel-action-card__icon-wrap\"><ion-icon name=\"help-circle-outline\"></ion-icon></div>\n                  <div class=\"panel-action-card__body\"><strong>سوالات متداول</strong><small>ویرایش و درج پرسش‌های پرتکرار اولیا</small></div>\n                </div>\n                <ion-icon class=\"panel-action-card__arrow\" name=\"chevron-back-outline\"></ion-icon>\n              </a>\n            </div>\n          </section>\n        </div>\n\n        <!-- ================= COURSE SECTION ================= -->\n        <div *ngIf=\"segmentSelected === 'Course'\" dir=\"rtl\">\n          <!-- Sub-section: Finance & Transactions -->\n          <section class=\"panel-section\">\n            <div class=\"panel-section__header\">\n              <h2 class=\"panel-section__title\">\n                <ion-icon name=\"wallet-outline\"></ion-icon>\n                <span>امور مالی و تراکنش‌های آموزشگاه</span>\n              </h2>\n              <span class=\"panel-section__tag\">۲ بخش</span>\n            </div>\n            <div class=\"panel-grid-cards\">\n              <a class=\"panel-action-card panel-action-card--emerald\" routerLink=\"/SuperAdminPanel/CashRequests\">\n                <div class=\"panel-action-card__main\">\n                  <div class=\"panel-action-card__icon-wrap\"><ion-icon name=\"cash-outline\"></ion-icon></div>\n                  <div class=\"panel-action-card__body\"><strong>درخواست وجه</strong><small>بررسی و تسویه مطالبات مدرسین</small></div>\n                </div>\n                <ion-icon class=\"panel-action-card__arrow\" name=\"chevron-back-outline\"></ion-icon>\n              </a>\n\n              <a class=\"panel-action-card panel-action-card--sky\" routerLink=\"/SuperAdminPanel/PayHistory\">\n                <div class=\"panel-action-card__main\">\n                  <div class=\"panel-action-card__icon-wrap\"><ion-icon name=\"git-compare-outline\"></ion-icon></div>\n                  <div class=\"panel-action-card__body\"><strong>تراکنش ها</strong><small>تاریخچه جامع پرداخت‌های شهریه</small></div>\n                </div>\n                <ion-icon class=\"panel-action-card__arrow\" name=\"chevron-back-outline\"></ion-icon>\n              </a>\n            </div>\n          </section>\n\n          <!-- Sub-section: Content & Media Management -->\n          <section class=\"panel-section\">\n            <div class=\"panel-section__header\">\n              <h2 class=\"panel-section__title\">\n                <ion-icon name=\"create-outline\"></ion-icon>\n                <span>مدیریت و ویرایش مستقیم دوره‌ها</span>\n              </h2>\n              <span class=\"panel-section__tag\">۵ بخش</span>\n            </div>\n            <div class=\"panel-grid-cards\">\n              <a class=\"panel-action-card panel-action-card--purple\" routerLink=\"/SuperAdminPanel/UpdateCourse\">\n                <div class=\"panel-action-card__main\">\n                  <div class=\"panel-action-card__icon-wrap\"><ion-icon name=\"school-outline\"></ion-icon></div>\n                  <div class=\"panel-action-card__body\"><strong>ویرایش دوره</strong><small>مدیریت جامع مشخصات و سرفصل‌های دوره</small></div>\n                </div>\n                <ion-icon class=\"panel-action-card__arrow\" name=\"chevron-back-outline\"></ion-icon>\n              </a>\n\n              <a class=\"panel-action-card panel-action-card--rose\" routerLink=\"/SuperAdminPanel/UpdateCourseVideo\">\n                <div class=\"panel-action-card__main\">\n                  <div class=\"panel-action-card__icon-wrap\"><ion-icon name=\"videocam-outline\"></ion-icon></div>\n                  <div class=\"panel-action-card__body\"><strong>ویرایش ویدیو دوره</strong><small>مدیریت و اصلاح ویدیوهای جلسات</small></div>\n                </div>\n                <ion-icon class=\"panel-action-card__arrow\" name=\"chevron-back-outline\"></ion-icon>\n              </a>\n\n              <a class=\"panel-action-card panel-action-card--amber\" routerLink=\"/SuperAdminPanel/UpdateCoursePhoto\">\n                <div class=\"panel-action-card__main\">\n                  <div class=\"panel-action-card__icon-wrap\"><ion-icon name=\"images-outline\"></ion-icon></div>\n                  <div class=\"panel-action-card__body\"><strong>ویرایش تصویر دوره</strong><small>بروزرسانی کاور و تصاویر دوره‌ها</small></div>\n                </div>\n                <ion-icon class=\"panel-action-card__arrow\" name=\"chevron-back-outline\"></ion-icon>\n              </a>\n\n              <a class=\"panel-action-card panel-action-card--purple\" routerLink=\"/SuperAdminPanel/UpdateArticle\">\n                <div class=\"panel-action-card__main\">\n                  <div class=\"panel-action-card__icon-wrap\"><ion-icon name=\"document-text-outline\"></ion-icon></div>\n                  <div class=\"panel-action-card__body\"><strong>ویرایش مقاله</strong><small>ویرایش مقالات آموزشگاه</small></div>\n                </div>\n                <ion-icon class=\"panel-action-card__arrow\" name=\"chevron-back-outline\"></ion-icon>\n              </a>\n\n              <a class=\"panel-action-card panel-action-card--emerald\" routerLink=\"/SuperAdminPanel/CourseMediaComment\">\n                <div class=\"panel-action-card__main\">\n                  <div class=\"panel-action-card__icon-wrap\"><ion-icon name=\"mic-outline\"></ion-icon></div>\n                  <div class=\"panel-action-card__body\"><strong>نظرات صوتی دوره</strong><small>شنیدن و تایید بازخوردهای صوتی کودکان</small></div>\n                </div>\n                <ion-icon class=\"panel-action-card__arrow\" name=\"chevron-back-outline\"></ion-icon>\n              </a>\n            </div>\n          </section>\n\n          <!-- Sub-section: Core System & Tuner Plus -->\n          <section class=\"panel-section\">\n            <div class=\"panel-section__header\">\n              <h2 class=\"panel-section__title\">\n                <ion-icon name=\"hardware-chip-outline\"></ion-icon>\n                <span>سیستم و هوش مصنوعی اول آموز</span>\n              </h2>\n              <span class=\"panel-section__tag\">۲ بخش</span>\n            </div>\n            <div class=\"panel-grid-cards\">\n              <a class=\"panel-action-card panel-action-card--emerald\" routerLink=\"/SuperAdminPanel/TunerPlusBase\">\n                <div class=\"panel-action-card__main\">\n                  <div class=\"panel-action-card__icon-wrap\"><ion-icon name=\"sparkles-outline\"></ion-icon></div>\n                  <div class=\"panel-action-card__body\"><strong>بازوی اول آموز (اصلی)</strong><small>مدیریت موتور هوش مصنوعی و پردازش یادگیری</small></div>\n                </div>\n                <ion-icon class=\"panel-action-card__arrow\" name=\"chevron-back-outline\"></ion-icon>\n              </a>\n\n              <a class=\"panel-action-card panel-action-card--purple\" routerLink=\"/SuperAdminPanel/Setting\">\n                <div class=\"panel-action-card__main\">\n                  <div class=\"panel-action-card__icon-wrap\"><ion-icon name=\"settings-outline\"></ion-icon></div>\n                  <div class=\"panel-action-card__body\"><strong>تنظیمات سایت</strong><small>پیکربندی اصلی سرور و تنظیمات سامانه</small></div>\n                </div>\n                <ion-icon class=\"panel-action-card__arrow\" name=\"chevron-back-outline\"></ion-icon>\n              </a>\n            </div>\n          </section>\n\n          <!-- Sub-section: Users & Communications -->\n          <section class=\"panel-section\">\n            <div class=\"panel-section__header\">\n              <h2 class=\"panel-section__title\">\n                <ion-icon name=\"people-outline\"></ion-icon>\n                <span>کاربران، اولیا و ارتباطات</span>\n              </h2>\n              <span class=\"panel-section__tag\">۳ بخش</span>\n            </div>\n            <div class=\"panel-grid-cards\">\n              <a class=\"panel-action-card panel-action-card--sky\" routerLink=\"/SuperAdminPanel/Users\">\n                <div class=\"panel-action-card__main\">\n                  <div class=\"panel-action-card__icon-wrap\"><ion-icon name=\"people-outline\"></ion-icon></div>\n                  <div class=\"panel-action-card__body\"><strong>کاربران</strong><small>لیست و دسترسی‌های همه کاربران</small></div>\n                </div>\n                <ion-icon class=\"panel-action-card__arrow\" name=\"chevron-back-outline\"></ion-icon>\n              </a>\n\n              <a class=\"panel-action-card panel-action-card--amber\" routerLink=\"/SuperAdminPanel/Email\">\n                <div class=\"panel-action-card__main\">\n                  <div class=\"panel-action-card__icon-wrap\"><ion-icon name=\"mail-outline\"></ion-icon></div>\n                  <div class=\"panel-action-card__body\"><strong>ارسال ایمیل</strong><small>سامانه ارسال ایمیل‌های اطلاع‌رسانی</small></div>\n                </div>\n                <ion-icon class=\"panel-action-card__arrow\" name=\"chevron-back-outline\"></ion-icon>\n              </a>\n\n              <a class=\"panel-action-card panel-action-card--purple\" routerLink=\"/SuperAdminPanel/CommonQuestions\">\n                <div class=\"panel-action-card__main\">\n                  <div class=\"panel-action-card__icon-wrap\"><ion-icon name=\"help-circle-outline\"></ion-icon></div>\n                  <div class=\"panel-action-card__body\"><strong>سوالات متداول</strong><small>پاسخ به سوالات اولیا و دانش‌آموزان</small></div>\n                </div>\n                <ion-icon class=\"panel-action-card__arrow\" name=\"chevron-back-outline\"></ion-icon>\n              </a>\n            </div>\n          </section>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <app-footer></app-footer>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_view_pages_panel_super-admin-panel_super-admin-panel_module_ts.js.map