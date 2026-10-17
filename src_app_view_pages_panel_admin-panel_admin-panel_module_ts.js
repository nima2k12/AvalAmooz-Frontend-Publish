"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_view_pages_panel_admin-panel_admin-panel_module_ts"],{

/***/ 91989:
/*!****************************************************************************!*\
  !*** ./src/app/view/pages/panel/admin-panel/admin-panel-routing.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminPanelRoutingModule": () => (/* binding */ AdminPanelRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _admin_panel_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-panel.component */ 48712);




const routes = [
    {
        path: '',
        component: _admin_panel_component__WEBPACK_IMPORTED_MODULE_0__.AdminPanelComponent
    },
    {
        path: 'BarcodeGenerator',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_view_pages_panel_admin-panel_barcode-generator_barcode-generator_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./barcode-generator/barcode-generator.module */ 28320)).then(m => m.BarcodeGeneratorModule)
    },
    {
        path: 'Editcategory',
        redirectTo: '/AdminPanel/EditCategory'
    },
    {
        path: 'editcategory',
        redirectTo: '/AdminPanel/EditCategory'
    },
    {
        path: 'editCategory',
        redirectTo: '/AdminPanel/EditCategory'
    },
    {
        path: 'EditCategory',
        // tslint:disable-next-line: max-line-length
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_course_shared-course_module_ts"), __webpack_require__.e("src_app_core_pipe_price_module_ts-src_app_view_pages_panel_admin-panel_edit-category_edit-cat-73b2ef")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../view/pages/panel/admin-panel/edit-category/edit-category.module */ 62161)).then(m => m.EditCategoryModule)
    },
    {
        path: 'editproductcategory',
        redirectTo: '/AdminPanel/EditProductCategory'
    },
    {
        path: 'Editproductcategory',
        redirectTo: '/AdminPanel/EditProductCategory'
    },
    {
        path: 'editProductcategory',
        redirectTo: '/AdminPanel/EditProductCategory'
    },
    {
        path: 'EditProductcategory',
        redirectTo: '/AdminPanel/EditProductCategory'
    },
    {
        path: 'editProductcategory',
        redirectTo: '/AdminPanel/EditProductCategory'
    },
    {
        path: 'editProductCategory',
        redirectTo: '/AdminPanel/EditProductCategory'
    },
    { path: 'EditProductCategory', redirectTo: 'EditCategory', pathMatch: 'full' },
    {
        path: 'EditProductCategory',
        // tslint:disable-next-line: max-line-length
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_product_shared-product_module_ts"), __webpack_require__.e("src_app_view_pages_panel_admin-panel_edit-product-category_edit-product-category_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../view/pages/panel/admin-panel/edit-product-category/edit-product-category.module */ 88887)).then(m => m.EditProductCategoryModule)
    },
    {
        path: 'Addcategory',
        redirectTo: '/AdminPanel/AddCategory'
    },
    {
        path: 'addcategory',
        redirectTo: '/AdminPanel/AddCategory'
    },
    {
        path: 'addCategory',
        redirectTo: '/AdminPanel/AddCategory'
    },
    {
        path: 'AddCategory',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_view_pages_panel_admin-panel_add-category_add-category_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../../../view/pages/panel/admin-panel/add-category/add-category.module */ 32230)).then(m => m.AddCategoryModule)
    },
    {
        path: 'addproductcategory',
        redirectTo: '/AdminPanel/AddProductCategory'
    },
    {
        path: 'Addproductcategory',
        redirectTo: '/AdminPanel/AddProductCategory'
    },
    {
        path: 'addProductcategory',
        redirectTo: '/AdminPanel/AddProductCategory'
    },
    {
        path: 'AddProductcategory',
        redirectTo: '/AdminPanel/AddProductCategory'
    },
    {
        path: 'addProductcategory',
        redirectTo: '/AdminPanel/AddProductCategory'
    },
    {
        path: 'addProductCategory',
        redirectTo: '/AdminPanel/AddProductCategory'
    },
    { path: 'AddProductCategory', redirectTo: 'AddCategory', pathMatch: 'full' },
    {
        path: 'AddProductCategory',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_view_pages_panel_admin-panel_add-product-category_add-product-category_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../../../view/pages/panel/admin-panel/add-product-category/add-product-category.module */ 72163)).then(m => m.AddProductCategoryModule)
    },
    {
        path: 'articleTag',
        redirectTo: '/AdminPanel/ArticleTag'
    },
    {
        path: 'articletag',
        redirectTo: '/AdminPanel/ArticleTag'
    },
    {
        path: 'Articletag',
        redirectTo: '/AdminPanel/ArticleTag'
    },
    {
        path: 'ArticleTag',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_data_model_article_ArticleFilterModel_ts-src_app_view_components_article_shar-857c2c"), __webpack_require__.e("common"), __webpack_require__.e("src_app_view_pages_panel_admin-panel_article-tag_article-tag_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../view/pages/panel/admin-panel/article-tag/article-tag.module */ 38052)).then(m => m.ArticleTagModule)
    },
    {
        path: 'productarticletag',
        redirectTo: '/AdminPanel/ProductArticleTag'
    },
    {
        path: 'productarticleTag',
        redirectTo: '/AdminPanel/ProductArticleTag'
    },
    {
        path: 'ProductarticleTag',
        redirectTo: '/AdminPanel/ProductArticleTag'
    },
    {
        path: 'Productarticletag',
        redirectTo: '/AdminPanel/ProductArticleTag'
    },
    {
        path: 'ProductArticletag',
        redirectTo: '/AdminPanel/ProductArticleTag'
    },
    {
        path: 'ProductArticleTag',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_data_model_article_ArticleFilterModel_ts-src_app_view_components_article_shar-857c2c"), __webpack_require__.e("common"), __webpack_require__.e("src_app_view_pages_panel_admin-panel_product-article-tag_product-article-tag_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../view/pages/panel/admin-panel/product-article-tag/product-article-tag.module */ 44912)).then(m => m.ProductArticleTagModule)
    },
    {
        path: 'Coursetag',
        redirectTo: '/AdminPanel/CourseTag'
    },
    {
        path: 'coursetag',
        redirectTo: '/AdminPanel/CourseTag'
    },
    {
        path: 'courseTag',
        redirectTo: '/AdminPanel/CourseTag'
    },
    {
        path: 'CourseTag',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_course_shared-course_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_core_pipe_price_module_ts-src_app_view_pages_panel_admin-panel_course-tag_course-tag_-0aae40")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../view/pages/panel/admin-panel/course-tag/course-tag.module */ 40153)).then(m => m.CourseTagModule)
    },
    {
        path: 'Producttag',
        redirectTo: '/AdminPanel/ProductTag'
    },
    {
        path: 'producttag',
        redirectTo: '/AdminPanel/ProductTag'
    },
    {
        path: 'productTag',
        redirectTo: '/AdminPanel/ProductTag'
    },
    {
        path: 'ProductTag',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_product_shared-product_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_view_pages_panel_admin-panel_product-tag_product-tag_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../view/pages/panel/admin-panel/product-tag/product-tag.module */ 50341)).then(m => m.ProductTagModule)
    },
    {
        path: 'students',
        redirectTo: '/AdminPanel/Students'
    },
    {
        path: 'Students',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_course_shared-course_module_ts"), __webpack_require__.e("default-src_app_data_model_order_CartModel_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_view_pages_panel_admin-panel_students_students_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../view/pages/panel/admin-panel/students/students.module */ 3186)).then(m => m.StudentsModule)
    },
    {
        path: 'customers',
        redirectTo: '/AdminPanel/Customers'
    },
    {
        path: 'Customers',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_product_shared-product_module_ts"), __webpack_require__.e("default-src_app_data_model_order_CartModel_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_view_pages_panel_admin-panel_customers_customers_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../view/pages/panel/admin-panel/customers/customers.module */ 43751)).then(m => m.CustomersModule)
    },
    {
        path: 'Deletecategory',
        redirectTo: '/AdminPanel/DeleteCategory'
    },
    {
        path: 'deletecategory',
        redirectTo: '/AdminPanel/DeleteCategory'
    },
    {
        path: 'deleteCategory',
        redirectTo: '/AdminPanel/DeleteCategory'
    },
    {
        path: 'DeleteCategory',
        // tslint:disable-next-line: max-line-length
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_course_shared-course_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_core_pipe_price_module_ts-src_app_view_pages_panel_admin-panel_delete-category_delete-96284b")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../view/pages/panel/admin-panel/delete-category/delete-category.module */ 32540)).then(m => m.DeleteCategoryModule)
    },
    {
        path: 'deleteproductcategory',
        redirectTo: '/AdminPanel/DeleteProductCategory'
    },
    {
        path: 'Deleteproductcategory',
        redirectTo: '/AdminPanel/DeleteProductCategory'
    },
    {
        path: 'DeleteProductcategory',
        redirectTo: '/AdminPanel/DeleteProductCategory'
    },
    {
        path: 'deleteProductcategory',
        redirectTo: '/AdminPanel/DeleteProductCategory'
    },
    {
        path: 'deleteProductCategory',
        redirectTo: '/AdminPanel/DeleteProductCategory'
    },
    {
        path: 'DeleteProductCategory',
        // tslint:disable-next-line: max-line-length
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_product_shared-product_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_view_pages_panel_admin-panel_delete-product-category_delete-product-category_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../view/pages/panel/admin-panel/delete-product-category/delete-product-category.module */ 21184)).then(m => m.DeleteProductCategoryModule)
    },
    {
        path: 'Deletecourse',
        redirectTo: '/AdminPanel/DeleteCourse'
    },
    {
        path: 'deletecourse',
        redirectTo: '/AdminPanel/DeleteCourse'
    },
    {
        path: 'deleteCourse',
        redirectTo: '/AdminPanel/DeleteCourse'
    },
    {
        path: 'DeleteCourse',
        // tslint:disable-next-line: max-line-length
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_course_shared-course_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_core_pipe_price_module_ts-src_app_view_pages_panel_admin-panel_delete-course_delete-c-b855af")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../view/pages/panel/admin-panel/delete-course/delete-course.module */ 51898)).then(m => m.DeleteCourseModule)
    },
    {
        path: 'Deleteproduct',
        redirectTo: '/AdminPanel/DeleteProduct'
    },
    {
        path: 'deleteproduct',
        redirectTo: '/AdminPanel/DeleteProduct'
    },
    {
        path: 'deleteProduct',
        redirectTo: '/AdminPanel/DeleteProduct'
    },
    {
        path: 'DeleteProduct',
        // tslint:disable-next-line: max-line-length
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_product_shared-product_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_view_pages_panel_admin-panel_delete-product_delete-product_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../view/pages/panel/admin-panel/delete-product/delete-product.module */ 98481)).then(m => m.DeleteProductModule)
    },
    {
        path: 'Deletearticle',
        redirectTo: '/AdminPanel/DeleteArticle'
    },
    {
        path: 'deletearticle',
        redirectTo: '/AdminPanel/DeleteArticle'
    },
    {
        path: 'deleteArticle',
        redirectTo: '/AdminPanel/DeleteArticle'
    },
    {
        path: 'DeleteArticle',
        // tslint:disable-next-line: max-line-length
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_data_model_article_ArticleFilterModel_ts-src_app_view_components_article_shar-857c2c"), __webpack_require__.e("src_app_view_pages_panel_admin-panel_delete-article_delete-article_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../view/pages/panel/admin-panel/delete-article/delete-article.module */ 96617)).then(m => m.DeleteArticleModule)
    },
    {
        path: 'deleteproductarticle',
        redirectTo: '/AdminPanel/DeleteProductArticle'
    },
    {
        path: 'Deleteproductarticle',
        redirectTo: '/AdminPanel/DeleteProductArticle'
    },
    {
        path: 'DeleteProductarticle',
        redirectTo: '/AdminPanel/DeleteProductArticle'
    },
    {
        path: 'deleteProductarticle',
        redirectTo: '/AdminPanel/DeleteProductArticle'
    },
    {
        path: 'deleteProductArticle',
        redirectTo: '/AdminPanel/DeleteProductArticle'
    },
    {
        path: 'DeleteProductArticle',
        // tslint:disable-next-line: max-line-length
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_data_model_article_ArticleFilterModel_ts-src_app_view_components_article_shar-857c2c"), __webpack_require__.e("src_app_view_pages_panel_admin-panel_delete-product-article_delete-product-article_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../view/pages/panel/admin-panel/delete-product-article/delete-product-article.module */ 93564)).then(m => m.DeleteProductArticleModule)
    },
    {
        path: 'Offcode',
        redirectTo: '/AdminPanel/OffCode',
        // loadChildren: () => import('../../../../view/pages/panel/admin-panel/off-code/off-code.module').then(m => m.OffCodeModule)
    },
    {
        path: 'offcode',
        redirectTo: '/AdminPanel/OffCode',
        // loadChildren: () => import('../../../../view/pages/panel/admin-panel/off-code/off-code.module').then(m => m.OffCodeModule)
    },
    {
        path: 'offCode',
        redirectTo: '/AdminPanel/OffCode',
        // loadChildren: () => import('../../../../view/pages/panel/admin-panel/off-code/off-code.module').then(m => m.OffCodeModule)
    },
    {
        path: 'OffCode',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_view_pages_panel_admin-panel_off-code_off-code_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../view/pages/panel/admin-panel/off-code/off-code.module */ 45972)).then(m => m.OffCodeModule)
    },
    {
        path: 'Activateteacher',
        redirectTo: '/AdminPanel/ActivateTeacher'
    },
    {
        path: 'activateteacher',
        redirectTo: '/AdminPanel/ActivateTeacher'
    },
    {
        path: 'activateTeacher',
        redirectTo: '/AdminPanel/ActivateTeacher'
    },
    {
        path: 'ActivateTeacher',
        // tslint:disable-next-line: max-line-length
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_data_model_order_CartModel_ts"), __webpack_require__.e("default-src_app_data_service_admin_admin_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_view_pages_panel_admin-panel_activate-teacher_activate-teacher_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../view/pages/panel/admin-panel/activate-teacher/activate-teacher.module */ 83416)).then(m => m.ActivateTeacherModule)
    },
    {
        path: 'Activateseller',
        redirectTo: '/AdminPanel/ActivateSeller'
    },
    {
        path: 'activateseller',
        redirectTo: '/AdminPanel/ActivateSeller'
    },
    {
        path: 'activateSeller',
        redirectTo: '/AdminPanel/ActivateSeller'
    },
    {
        path: 'ActivateSeller',
        // tslint:disable-next-line: max-line-length
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_data_model_order_CartModel_ts"), __webpack_require__.e("default-src_app_data_service_admin_admin_service_ts"), __webpack_require__.e("src_app_view_pages_panel_admin-panel_activate-seller_activate-seller_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../view/pages/panel/admin-panel/activate-seller/activate-seller.module */ 63962)).then(m => m.ActivateSellerModule)
    },
    {
        path: 'Articlestate',
        redirectTo: '/AdminPanel/ArticleState'
    },
    {
        path: 'articlestate',
        redirectTo: '/AdminPanel/ArticleState'
    },
    {
        path: 'articleState',
        redirectTo: '/AdminPanel/ArticleState'
    },
    {
        path: 'ArticleState',
        // tslint:disable-next-line: max-line-length
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_data_model_article_ArticleFilterModel_ts-src_app_view_components_article_shar-857c2c"), __webpack_require__.e("default-src_app_core_pipe_persian-date_persian-date_module_ts-src_app_view_pages_panel_admin--c90b6c"), __webpack_require__.e("src_app_view_pages_panel_admin-panel_article-state_article-state_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../view/pages/panel/admin-panel/article-state/article-state.module */ 2229)).then(m => m.ArticleStateModule)
    },
    {
        path: 'productarticlestate',
        redirectTo: '/AdminPanel/ProductArticleState'
    },
    {
        path: 'ProductArticlestate',
        redirectTo: '/AdminPanel/ProductArticleState'
    },
    {
        path: 'Productarticlestate',
        redirectTo: '/AdminPanel/ProductArticleState'
    },
    {
        path: 'ProductarticleState',
        redirectTo: '/AdminPanel/ProductArticleState'
    },
    {
        path: 'ProductArticleState',
        // tslint:disable-next-line: max-line-length
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_data_model_article_ArticleFilterModel_ts-src_app_view_components_article_shar-857c2c"), __webpack_require__.e("default-src_app_core_pipe_persian-date_persian-date_module_ts-src_app_view_pages_panel_admin--c90b6c"), __webpack_require__.e("src_app_view_pages_panel_admin-panel_product-article-state_product-article-state_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../view/pages/panel/admin-panel/product-article-state/product-article-state.module */ 73653)).then(m => m.ProductArticleStateModule)
    },
    {
        path: 'Coursestate',
        redirectTo: '/AdminPanel/CourseState'
    },
    {
        path: 'coursestate',
        redirectTo: '/AdminPanel/CourseState'
    },
    {
        path: 'courseState',
        redirectTo: '/AdminPanel/CourseState'
    },
    {
        path: 'CourseState',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_course_shared-course_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_view_pages_panel_admin-panel_course-state_course-state_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../view/pages/panel/admin-panel/course-state/course-state.module */ 40977)).then(m => m.CourseStateModule)
    },
    {
        path: 'Productstate',
        redirectTo: '/AdminPanel/ProductState'
    },
    {
        path: 'productstate',
        redirectTo: '/AdminPanel/ProductState'
    },
    {
        path: 'productState',
        redirectTo: '/AdminPanel/ProductState'
    },
    {
        path: 'ProductState',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_product_shared-product_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_view_pages_panel_admin-panel_product-state_product-state_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../view/pages/panel/admin-panel/product-state/product-state.module */ 72221)).then(m => m.ProductStateModule)
    },
    {
        path: 'courseVideoState',
        redirectTo: '/AdminPanel/CourseVideoState'
    },
    {
        path: 'CourseVideostate',
        redirectTo: '/AdminPanel/CourseVideoState'
    },
    {
        path: 'CoursevideoState',
        redirectTo: '/AdminPanel/CourseVideoState'
    },
    {
        path: 'Coursevideostate',
        redirectTo: '/AdminPanel/CourseVideoState'
    },
    {
        path: 'coursevideostate',
        redirectTo: '/AdminPanel/CourseVideoState'
    },
    {
        path: 'coursevideoState',
        redirectTo: '/AdminPanel/CourseVideoState'
    },
    {
        path: 'courseVideoState',
        redirectTo: '/AdminPanel/CourseVideoState'
    },
    {
        path: 'CourseVideoState',
        // tslint:disable-next-line: max-line-length
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_course_shared-course_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_view_pages_panel_admin-panel_course-video-state_course-video-state_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../view/pages/panel/admin-panel/course-video-state/course-video-state.module */ 19566)).then(m => m.CourseVideoStateModule)
    },
    {
        path: 'productVideoState',
        redirectTo: '/AdminPanel/ProductVideoState'
    },
    {
        path: 'ProductVideostate',
        redirectTo: '/AdminPanel/ProductVideoState'
    },
    {
        path: 'ProductvideoState',
        redirectTo: '/AdminPanel/ProductVideoState'
    },
    {
        path: 'Productvideostate',
        redirectTo: '/AdminPanel/ProductVideoState'
    },
    {
        path: 'productvideostate',
        redirectTo: '/AdminPanel/ProductVideoState'
    },
    {
        path: 'productvideoState',
        redirectTo: '/AdminPanel/ProductVideoState'
    },
    {
        path: 'productVideoState',
        redirectTo: '/AdminPanel/ProductVideoState'
    },
    {
        path: 'ProductVideoState',
        // tslint:disable-next-line: max-line-length
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_product_shared-product_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_view_pages_panel_admin-panel_product-video-state_product-video-state_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../view/pages/panel/admin-panel/product-video-state/product-video-state.module */ 99611)).then(m => m.ProductVideoStateModule)
    },
    {
        path: 'helpfulLink',
        redirectTo: '/AdminPanel/HelpfulLink',
        // loadChildren: () => import('../../../../view/pages/panel/admin-panel/helpful-link/helpful-link.module').then(m => m.HelpfulLinkModule)
    },
    {
        path: 'helpfullink',
        redirectTo: '/AdminPanel/HelpfulLink',
        // loadChildren: () => import('../../../../view/pages/panel/admin-panel/helpful-link/helpful-link.module').then(m => m.HelpfulLinkModule)
    },
    {
        path: 'Helpfullink',
        redirectTo: '/AdminPanel/HelpfulLink',
        // loadChildren: () => import('../../../../view/pages/panel/admin-panel/helpful-link/helpful-link.module').then(m => m.HelpfulLinkModule)
    },
    {
        path: 'HelpfulLink',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_view_pages_panel_admin-panel_helpful-link_helpful-link_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../view/pages/panel/admin-panel/helpful-link/helpful-link.module */ 98619)).then(m => m.HelpfulLinkModule)
    },
    {
        path: 'Instagrambot',
        redirectTo: '/AdminPanel/InstagramBot'
    },
    {
        path: 'instagrambot',
        redirectTo: '/AdminPanel/InstagramBot'
    },
    {
        path: 'instagramBot',
        redirectTo: '/AdminPanel/InstagramBot'
    },
    {
        path: 'InstagramBot',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_view_pages_panel_admin-panel_instagram-bot_instagram-bot_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../view/pages/panel/admin-panel/instagram-bot/instagram-bot.module */ 7882)).then(m => m.InstagramBotModule)
    },
    {
        path: 'Likedcourses',
        redirectTo: '/AdminPanel/LikedCourses'
    },
    {
        path: 'likedcourses',
        redirectTo: '/AdminPanel/LikedCourses'
    },
    {
        path: 'likedCourses',
        redirectTo: '/AdminPanel/LikedCourses'
    },
    {
        path: 'LikedCourses',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_course_shared-course_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_core_pipe_price_module_ts-src_app_view_pages_panel_admin-panel_liked-courses_liked-co-b91ed9")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../view/pages/panel/admin-panel/liked-courses/liked-courses.module */ 77099)).then(m => m.LikedCoursesModule)
    },
    {
        path: 'Likedproduct',
        redirectTo: '/AdminPanel/LikedProduct'
    },
    {
        path: 'likedproduct',
        redirectTo: '/AdminPanel/LikedProduct'
    },
    {
        path: 'likedProduct',
        redirectTo: '/AdminPanel/LikedProduct'
    },
    {
        path: 'LikedProduct',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_product_shared-product_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_view_pages_panel_admin-panel_liked-product_liked-product_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../view/pages/panel/admin-panel/liked-product/liked-product.module */ 30317)).then(m => m.LikedProductModule)
    },
    {
        path: 'Likedarticles',
        redirectTo: '/AdminPanel/LikedArticles'
    },
    {
        path: 'likedarticles',
        redirectTo: '/AdminPanel/LikedArticles'
    },
    {
        path: 'likedArticles',
        redirectTo: '/AdminPanel/LikedArticles'
    },
    {
        path: 'LikedArticles',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_data_model_article_ArticleFilterModel_ts-src_app_view_components_article_shar-857c2c"), __webpack_require__.e("src_app_view_pages_panel_admin-panel_liked-articles_liked-articles_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../view/pages/panel/admin-panel/liked-articles/liked-articles.module */ 39762)).then(m => m.LikedArticlesModule)
    },
    {
        path: 'likedproductarticles',
        redirectTo: '/AdminPanel/LikedProductArticle'
    },
    {
        path: 'likedProductArticles',
        redirectTo: '/AdminPanel/LikedProductArticle'
    },
    {
        path: 'LikedProductarticles',
        redirectTo: '/AdminPanel/LikedProductArticle'
    },
    {
        path: 'likedProductarticles',
        redirectTo: '/AdminPanel/LikedProductArticle'
    },
    {
        path: 'likedProductArticles',
        redirectTo: '/AdminPanel/LikedProductArticle'
    },
    {
        path: 'LikedProductArticle',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_data_model_article_ArticleFilterModel_ts-src_app_view_components_article_shar-857c2c"), __webpack_require__.e("src_app_view_pages_panel_admin-panel_liked-product-article_liked-product-article_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../view/pages/panel/admin-panel/liked-product-article/liked-product-article.module */ 55734)).then(m => m.LikedProductArticleModule)
    },
    {
        path: 'CourseimageState',
        redirectTo: '/AdminPanel/CourseImageState'
    },
    {
        path: 'courseImageState',
        redirectTo: '/AdminPanel/CourseImageState'
    },
    {
        path: 'courseImagestate',
        redirectTo: '/AdminPanel/CourseImageState'
    },
    {
        path: 'CourseImagestate',
        redirectTo: '/AdminPanel/CourseImageState'
    },
    {
        path: 'Courseimagestate',
        redirectTo: '/AdminPanel/CourseImageState'
    },
    {
        path: 'courseimagestate',
        redirectTo: '/AdminPanel/CourseImageState'
    },
    {
        path: 'courseimageState',
        redirectTo: '/AdminPanel/CourseImageState'
    },
    {
        path: 'courseImageState',
        redirectTo: '/AdminPanel/CourseImageState'
    },
    {
        path: 'CourseImageState',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_course_shared-course_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_view_pages_panel_admin-panel_course-image-state_course-image-state_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../view/pages/panel/admin-panel/course-image-state/course-image-state.module */ 40732)).then(m => m.CourseImageStateModule)
    },
    {
        path: 'ProductimageState',
        redirectTo: '/AdminPanel/ProductImageState'
    },
    {
        path: 'productImageState',
        redirectTo: '/AdminPanel/ProductImageState'
    },
    {
        path: 'productImagestate',
        redirectTo: '/AdminPanel/ProductImageState'
    },
    {
        path: 'ProductImagestate',
        redirectTo: '/AdminPanel/ProductImageState'
    },
    {
        path: 'Productimagestate',
        redirectTo: '/AdminPanel/ProductImageState'
    },
    {
        path: 'productimagestate',
        redirectTo: '/AdminPanel/ProductImageState'
    },
    {
        path: 'productimageState',
        redirectTo: '/AdminPanel/ProductImageState'
    },
    {
        path: 'productImageState',
        redirectTo: '/AdminPanel/ProductImageState'
    },
    {
        path: 'ProductImageState',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_product_shared-product_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_view_pages_panel_admin-panel_product-image-state_product-image-state_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../view/pages/panel/admin-panel/product-image-state/product-image-state.module */ 28950)).then(m => m.ProductImageStateModule)
    },
    {
        path: 'questions',
        redirectTo: '/AdminPanel/Questions',
        pathMatch: 'full'
    },
    {
        path: 'questions/:id',
        redirectTo: '/AdminPanel/Questions/:id'
    },
    {
        path: 'Questions',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_course_shared-course_module_ts"), __webpack_require__.e("default-src_app_core_pipe_persian-date_persian-date_module_ts-src_app_data_model_question_Que-d2a263"), __webpack_require__.e("common"), __webpack_require__.e("src_app_core_pipe_price_module_ts-src_app_view_pages_panel_admin-panel_questions_questions_mo-55ae1e")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../view/pages/panel/admin-panel/questions/questions.module */ 14881)).then(m => m.QuestionsModule)
    },
    {
        path: 'Questions/:id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_course_shared-course_module_ts"), __webpack_require__.e("default-src_app_core_pipe_persian-date_persian-date_module_ts-src_app_data_model_question_Que-d2a263"), __webpack_require__.e("common"), __webpack_require__.e("src_app_core_pipe_price_module_ts-src_app_view_pages_panel_admin-panel_questions_questions_mo-55ae1e")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../view/pages/panel/admin-panel/questions/questions.module */ 14881)).then(m => m.QuestionsModule)
    },
    {
        path: 'productquestions',
        redirectTo: '/AdminPanel/ProductQuestions',
        pathMatch: 'full'
    },
    {
        path: 'productquestions/:id',
        redirectTo: '/AdminPanel/ProductQuestions/:id'
    },
    {
        path: 'Productquestions',
        redirectTo: '/AdminPanel/ProductQuestions',
        pathMatch: 'full'
    },
    {
        path: 'Productquestions/:id',
        redirectTo: '/AdminPanel/ProductQuestions/:id'
    },
    {
        path: 'ProductQuestions',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_product_shared-product_module_ts"), __webpack_require__.e("default-src_app_core_pipe_persian-date_persian-date_module_ts-src_app_data_model_question_Que-d2a263"), __webpack_require__.e("common"), __webpack_require__.e("src_app_view_pages_panel_admin-panel_product-questions_product-questions_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../view/pages/panel/admin-panel/product-questions/product-questions.module */ 29845)).then(m => m.ProductQuestionsModule)
    },
    {
        path: 'ProductQuestions/:id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_product_shared-product_module_ts"), __webpack_require__.e("default-src_app_core_pipe_persian-date_persian-date_module_ts-src_app_data_model_question_Que-d2a263"), __webpack_require__.e("common"), __webpack_require__.e("src_app_view_pages_panel_admin-panel_product-questions_product-questions_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../view/pages/panel/admin-panel/product-questions/product-questions.module */ 29845)).then(m => m.ProductQuestionsModule)
    },
    {
        path: 'comments',
        redirectTo: '/AdminPanel/Comments',
        pathMatch: 'full'
    },
    {
        path: 'comments/:id',
        redirectTo: '/AdminPanel/Comments/:id'
    },
    {
        path: 'Comments',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_course_shared-course_module_ts"), __webpack_require__.e("default-src_app_core_pipe_persian-date_persian-date_module_ts-src_app_data_model_question_Que-d2a263"), __webpack_require__.e("common"), __webpack_require__.e("src_app_core_pipe_price_module_ts-src_app_view_pages_panel_admin-panel_comments_comments_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../view/pages/panel/admin-panel/comments/comments.module */ 98129)).then(m => m.CommentsModule)
    },
    {
        path: 'Comments/:id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_course_shared-course_module_ts"), __webpack_require__.e("default-src_app_core_pipe_persian-date_persian-date_module_ts-src_app_data_model_question_Que-d2a263"), __webpack_require__.e("common"), __webpack_require__.e("src_app_core_pipe_price_module_ts-src_app_view_pages_panel_admin-panel_comments_comments_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../view/pages/panel/admin-panel/comments/comments.module */ 98129)).then(m => m.CommentsModule)
    },
    {
        path: 'productcomments',
        redirectTo: '/AdminPanel/ProductComments',
        pathMatch: 'full'
    },
    {
        path: 'productcomments/:id',
        redirectTo: '/AdminPanel/ProductComments/:id'
    },
    {
        path: 'Productcomments',
        redirectTo: '/AdminPanel/ProductComments',
        pathMatch: 'full'
    },
    {
        path: 'Productcomments/:id',
        redirectTo: '/AdminPanel/ProductComments/:id'
    },
    {
        path: 'ProductComments',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_product_shared-product_module_ts"), __webpack_require__.e("default-src_app_core_pipe_persian-date_persian-date_module_ts-src_app_data_model_question_Que-d2a263"), __webpack_require__.e("common"), __webpack_require__.e("src_app_view_pages_panel_admin-panel_product-comments_product-comments_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../view/pages/panel/admin-panel/product-comments/product-comments.module */ 23317)).then(m => m.ProductCommentsModule)
    },
    {
        path: 'ProductComments/:id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_product_shared-product_module_ts"), __webpack_require__.e("default-src_app_core_pipe_persian-date_persian-date_module_ts-src_app_data_model_question_Que-d2a263"), __webpack_require__.e("common"), __webpack_require__.e("src_app_view_pages_panel_admin-panel_product-comments_product-comments_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../view/pages/panel/admin-panel/product-comments/product-comments.module */ 23317)).then(m => m.ProductCommentsModule)
    },
    {
        path: 'exam',
        redirectTo: '/AdminPanel/Exam',
        pathMatch: 'full'
    },
    {
        path: 'Exam',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_view_pages_panel_admin-panel_exam_exam_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../view/pages/panel/admin-panel/exam/exam.module */ 35461)).then(m => m.ExamModule),
        pathMatch: 'full'
    },
    {
        path: 'exam/:id',
        redirectTo: '/AdminPanel/Exam/:id'
    },
    {
        path: 'Exam/:id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_view_pages_panel_admin-panel_exam_exam_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../view/pages/panel/admin-panel/exam/exam.module */ 35461)).then(m => m.ExamModule)
    },
    {
        path: 'Furtherdetail',
        redirectTo: '/AdminPanel/FurtherDetail',
    },
    {
        path: 'furtherdetail',
        redirectTo: '/AdminPanel/FurtherDetail',
    },
    {
        path: 'furtherDetail',
        redirectTo: '/AdminPanel/FurtherDetail',
    },
    {
        path: 'FurtherDetail',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_product_shared-product_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_view_pages_panel_admin-panel_further-detail_further-detail_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../view/pages/panel/admin-panel/further-detail/further-detail.module */ 83473)).then(m => m.FurtherDetailModule)
    },
    {
        path: 'Productdesigns',
        redirectTo: '/AdminPanel/ProductDesigns',
    },
    {
        path: 'productdesigns',
        redirectTo: '/AdminPanel/ProductDesigns',
    },
    {
        path: 'productDesigns',
        redirectTo: '/AdminPanel/ProductDesigns',
    },
    {
        path: 'ProductDesigns',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_product_shared-product_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_view_pages_panel_admin-panel_product-designs_product-designs_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../view/pages/panel/admin-panel/product-designs/product-designs.module */ 91635)).then(m => m.ProductDesignsModule)
    },
    {
        path: 'reports',
        redirectTo: '/AdminPanel/Reports',
    },
    {
        path: 'Reports',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_product_shared-product_module_ts"), __webpack_require__.e("default-src_app_view_components_course_shared-course_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_view_pages_panel_admin-panel_reports_reports_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./reports/reports.module */ 45825)).then(m => m.ReportsPageModule)
    },
    {
        path: 'ReportCourse',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_view_pages_panel_admin-panel_report-course_report-course_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./report-course/report-course.module */ 10738)).then(m => m.ReportCoursePageModule)
    },
    {
        path: 'ReportCourseComment',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_view_pages_panel_admin-panel_report-course-comment_report-course-comment_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./report-course-comment/report-course-comment.module */ 25088)).then(m => m.ReportCourseCommentPageModule)
    },
    {
        path: 'ReportCourseQuestion',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_view_pages_panel_admin-panel_report-course-question_report-course-question_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./report-course-question/report-course-question.module */ 56417)).then(m => m.ReportCourseQuestionPageModule)
    },
    {
        path: 'ReportProduct',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_view_pages_panel_admin-panel_report-product_report-product_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./report-product/report-product.module */ 52095)).then(m => m.ReportProductPageModule)
    },
    {
        path: 'ReportProductComment',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_view_pages_panel_admin-panel_report-product-comment_report-product-comment_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./report-product-comment/report-product-comment.module */ 93970)).then(m => m.ReportProductCommentPageModule)
    },
    {
        path: 'ReportProductQuestion',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_view_pages_panel_admin-panel_report-product-question_report-product-question_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./report-product-question/report-product-question.module */ 84529)).then(m => m.ReportProductQuestionPageModule)
    },
    {
        path: 'ReportCourse/:id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_view_pages_panel_admin-panel_report-course_report-course_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./report-course/report-course.module */ 10738)).then(m => m.ReportCoursePageModule)
    },
    {
        path: 'ReportCourseComment/:id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_view_pages_panel_admin-panel_report-course-comment_report-course-comment_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./report-course-comment/report-course-comment.module */ 25088)).then(m => m.ReportCourseCommentPageModule)
    },
    {
        path: 'ReportCourseQuestion/:id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_view_pages_panel_admin-panel_report-course-question_report-course-question_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./report-course-question/report-course-question.module */ 56417)).then(m => m.ReportCourseQuestionPageModule)
    },
    {
        path: 'ReportProduct/:id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_view_pages_panel_admin-panel_report-product_report-product_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./report-product/report-product.module */ 52095)).then(m => m.ReportProductPageModule)
    },
    {
        path: 'ReportProductComment/:id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_view_pages_panel_admin-panel_report-product-comment_report-product-comment_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./report-product-comment/report-product-comment.module */ 93970)).then(m => m.ReportProductCommentPageModule)
    },
    {
        path: 'ReportProductQuestion/:id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_view_pages_panel_admin-panel_report-product-question_report-product-question_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./report-product-question/report-product-question.module */ 84529)).then(m => m.ReportProductQuestionPageModule)
    },
    {
        path: 'ProductSliders',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_product_shared-product_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_view_pages_panel_admin-panel_product-sliders_product-sliders_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./product-sliders/product-sliders.module */ 46591)).then(m => m.ProductSlidersPageModule)
    },
];
let AdminPanelRoutingModule = class AdminPanelRoutingModule {
};
AdminPanelRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], AdminPanelRoutingModule);



/***/ }),

/***/ 48712:
/*!***********************************************************************!*\
  !*** ./src/app/view/pages/panel/admin-panel/admin-panel.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminPanelComponent": () => (/* binding */ AdminPanelComponent)
/* harmony export */ });
/* harmony import */ var G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _admin_panel_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-panel.component.html?ngResource */ 67789);
/* harmony import */ var _admin_panel_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-panel.component.scss?ngResource */ 29721);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);







let AdminPanelComponent = class AdminPanelComponent {
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

AdminPanelComponent.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.MenuController
}];

AdminPanelComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-admin-panel',
  template: _admin_panel_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_admin_panel_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], AdminPanelComponent);


/***/ }),

/***/ 37768:
/*!********************************************************************!*\
  !*** ./src/app/view/pages/panel/admin-panel/admin-panel.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminPanelModule": () => (/* binding */ AdminPanelModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/view/components/app/page-header/page-header.module */ 19916);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _admin_panel_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-panel-routing.module */ 91989);
/* harmony import */ var _admin_panel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-panel.component */ 48712);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/app/footer/footer.module */ 60412);
/* harmony import */ var _components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/common/loading/loading.module */ 90876);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);










let AdminPanelModule = class AdminPanelModule {
};
AdminPanelModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [_admin_panel_component__WEBPACK_IMPORTED_MODULE_2__.AdminPanelComponent],
        imports: [
            src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__.PageHeaderModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _admin_panel_routing_module__WEBPACK_IMPORTED_MODULE_1__.AdminPanelRoutingModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__.FooterModule,
            _components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_4__.LoadingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule
        ]
    })
], AdminPanelModule);



/***/ }),

/***/ 29721:
/*!************************************************************************************!*\
  !*** ./src/app/view/pages/panel/admin-panel/admin-panel.component.scss?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = ".point:hover {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLXBhbmVsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQUNKIiwiZmlsZSI6ImFkbWluLXBhbmVsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBvaW50OmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgIl19 */";

/***/ }),

/***/ 67789:
/*!************************************************************************************!*\
  !*** ./src/app/view/pages/panel/admin-panel/admin-panel.component.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"interior-header\" [translucent]=\"true\">\n  <app-loading></app-loading>\n  <app-page-header titleKey=\"pageHeader.panel/admin-panel/admin-panel\" fallback=\"/\" [defaultBack]=\"false\">\n<ion-buttons page-back><ion-back-button text=\"\" icon=\"arrow-back-outline\" defaultHref=\"/\" class=\"panel-back-btn\"></ion-back-button></ion-buttons>\n\n  </app-page-header>\n</ion-header>\n\n<ion-content>\n  <ion-grid class=\"bg\">\n    <ion-row>\n      <ion-col size=\"12\" size-lg=\"10\" offset-lg=\"1\">\n        <!-- Hero Section -->\n        <div class=\"panel-hero\">\n          <div class=\"panel-hero__badge\">\n            <span class=\"sparkle\">✦</span>\n            <span>مرکز نظارت و مدیریت سامانه</span>\n          </div>\n          <h1 class=\"panel-hero__title\">پنل مدیریت اول آموز</h1>\n          <p class=\"panel-hero__desc\">\n            پایش و تایید محتوا، نظارت بر آموزشگاه و فروشگاه، فعال‌سازی مدرسان و فروشندگان، گزارش‌ها و بنرها\n          </p>\n        </div>\n\n        <!-- Section Switcher Segment -->\n        <ion-segment [(ngModel)]=\"segmentSelected\" dir=\"rtl\">\n          <ion-segment-button value=\"Course\">\n            <ion-icon name=\"school-outline\"></ion-icon>\n            <ion-label>آموزشگاه</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value=\"Product\">\n            <ion-icon name=\"cube-outline\"></ion-icon>\n            <ion-label>فروشگاه</ion-label>\n          </ion-segment-button>\n        </ion-segment>\n\n        <!-- General Shared Utility -->\n        <div style=\"margin: 16px 0 24px; text-align: center;\">\n          <a class=\"panel-action-card panel-action-card--purple\" style=\"max-width: 480px; margin: 0 auto;\" routerLink=\"/AdminPanel/BarcodeGenerator\">\n            <div class=\"panel-action-card__main\">\n              <div class=\"panel-action-card__icon-wrap\">\n                <ion-icon name=\"barcode-outline\"></ion-icon>\n              </div>\n              <div class=\"panel-action-card__body\">\n                <strong>تولید بارکد و QR کد</strong>\n                <small>تولید کدهای شناسایی و دسترسی سریع به محتوا</small>\n              </div>\n            </div>\n            <ion-icon class=\"panel-action-card__arrow\" name=\"chevron-back-outline\"></ion-icon>\n          </a>\n        </div>\n\n        <!-- ================= PRODUCT SECTION ================= -->\n        <div *ngIf=\"segmentSelected === 'Product'\" dir=\"rtl\">\n          <!-- Sub-section: Moderation & Approvals -->\n          <section class=\"panel-section\">\n            <div class=\"panel-section__header\">\n              <h2 class=\"panel-section__title\">\n                <ion-icon name=\"checkmark-circle-outline\"></ion-icon>\n                <span>فعال و غیرفعال‌سازی محتوای کالاها</span>\n              </h2>\n              <span class=\"panel-section__tag\">۶ بخش</span>\n            </div>\n            <div class=\"panel-grid-cards\">\n              <a class=\"panel-action-card panel-action-card--emerald\" routerLink=\"/AdminPanel/ProductState\">\n                <div class=\"panel-action-card__main\">\n                  <div class=\"panel-action-card__icon-wrap\"><ion-icon name=\"cube-outline\"></ion-icon></div>\n                  <div class=\"panel-action-card__body\"><strong>فعال یا غیرفعال سازی کالا</strong><small>بررسی و تایید انتشار محصولات</small></div>\n                </div>\n                <ion-icon class=\"panel-action-card__arrow\" name=\"chevron-back-outline\"></ion-icon>\n              </a>\n\n              <a class=\"panel-action-card panel-action-card--purple\" routerLink=\"/AdminPanel/ProductArticleState\">\n                <div class=\"panel-action-card__main\">\n                  <div class=\"panel-action-card__icon-wrap\"><ion-icon name=\"document-text-outline\"></ion-icon></div>\n                  <div class=\"panel-action-card__body\"><strong>فعال یا غیرفعال سازی مقاله</strong><small>تایید مقالات فروشگاه</small></div>\n                </div>\n                <ion-icon class=\"panel-action-card__arrow\" name=\"chevron-back-outline\"></ion-icon>\n              </a>\n\n              <a class=\"panel-action-card panel-action-card--rose\" routerLink=\"/AdminPanel/ProductVideoState\">\n                <div class=\"panel-action-card__main\">\n                  <div class=\"panel-action-card__icon-wrap\"><ion-icon name=\"videocam-outline\"></ion-icon></div>\n                  <div class=\"panel-action-card__body\"><strong>فعال یا غیرفعال سازی ویدیو کالا</strong><small>تایید ویدیوهای بارگذاری‌شده</small></div>\n                </div>\n                <ion-icon class=\"panel-action-card__arrow\" name=\"chevron-back-outline\"></ion-icon>\n              </a>\n\n              <a class=\"panel-action-card panel-action-card--amber\" routerLink=\"/AdminPanel/ProductImageState\">\n                <div class=\"panel-action-card__main\">\n                  <div class=\"panel-action-card__icon-wrap\"><ion-icon name=\"images-outline\"></ion-icon></div>\n                  <div class=\"panel-action-card__body\"><strong>فعال یا غیرفعال سازی عکس کالا</strong><small>تایید عکس‌های ارسالی محصولات</small></div>\n                </div>\n                <ion-icon class=\"panel-action-card__arrow\" name=\"chevron-back-outline\"></ion-icon>\n              </a>\n\n              <a class=\"panel-action-card panel-action-card--sky\" routerLink=\"/AdminPanel/ProductDesigns\">\n                <div class=\"panel-action-card__main\">\n                  <div class=\"panel-action-card__icon-wrap\"><ion-icon name=\"color-palette-outline\"></ion-icon></div>\n                  <div class=\"panel-action-card__body\"><strong>فعال یا غیرفعال سازی طرح کالا</strong><small>تایید تنوع و طرح‌های محصول</small></div>\n                </div>\n                <ion-icon class=\"panel-action-card__arrow\" name=\"chevron-back-outline\"></ion-icon>\n              </a>\n\n              <a class=\"panel-action-card panel-action-card--purple\" routerLink=\"/AdminPanel/FurtherDetail\">\n                <div class=\"panel-action-card__main\">\n                  <div class=\"panel-action-card__icon-wrap\"><ion-icon name=\"list-outline\"></ion-icon></div>\n                  <div class=\"panel-action-card__body\"><strong>فعال یا غیرفعال سازی ویژگی کالا</strong><small>تایید ویژگی‌های فنی کالا</small></div>\n                </div>\n                <ion-icon class=\"panel-action-card__arrow\" name=\"chevron-back-outline\"></ion-icon>\n              </a>\n            </div>\n          </section>\n\n          <!-- Sub-section: Users, Questions & Interactions -->\n          <section class=\"panel-section\">\n            <div class=\"panel-section__header\">\n              <h2 class=\"panel-section__title\">\n                <ion-icon name=\"people-outline\"></ion-icon>\n                <span>فروشندگان، مشتریان و تعاملات</span>\n              </h2>\n              <span class=\"panel-section__tag\">۵ بخش</span>\n            </div>\n            <div class=\"panel-grid-cards\">\n              <a class=\"panel-action-card panel-action-card--sky\" routerLink=\"/AdminPanel/ActivateSeller\">\n                <div class=\"panel-action-card__main\">\n                  <div class=\"panel-action-card__icon-wrap\"><ion-icon name=\"person-add-outline\"></ion-icon></div>\n                  <div class=\"panel-action-card__body\"><strong>فروشندگان</strong><small>تایید مدارک و فعالیت فروشندگان</small></div>\n                </div>\n                <ion-icon class=\"panel-action-card__arrow\" name=\"chevron-back-outline\"></ion-icon>\n              </a>\n\n              <a class=\"panel-action-card panel-action-card--amber\" routerLink=\"/AdminPanel/ProductQuestions\">\n                <div class=\"panel-action-card__main\">\n                  <div class=\"panel-action-card__icon-wrap\"><ion-icon name=\"help-outline\"></ion-icon></div>\n                  <div class=\"panel-action-card__body\"><strong>پرسش و پاسخ</strong><small>مدیریت سوالات مطرح‌شده برای کالاها</small></div>\n                </div>\n                <ion-icon class=\"panel-action-card__arrow\" name=\"chevron-back-outline\"></ion-icon>\n              </a>\n\n              <a class=\"panel-action-card panel-action-card--rose\" routerLink=\"/AdminPanel/ProductComments\">\n                <div class=\"panel-action-card__main\">\n                  <div class=\"panel-action-card__icon-wrap\"><ion-icon name=\"chatbox-outline\"></ion-icon></div>\n                  <div class=\"panel-action-card__body\"><strong>نظرات کالا</strong><small>تایید و بررسی دیدگاه‌های ثبت‌شده</small></div>\n                </div>\n                <ion-icon class=\"panel-action-card__arrow\" name=\"chevron-back-outline\"></ion-icon>\n              </a>\n\n              <a class=\"panel-action-card panel-action-card--purple\" routerLink=\"/AdminPanel/Customers\">\n                <div class=\"panel-action-card__main\">\n                  <div class=\"panel-action-card__icon-wrap\"><ion-icon name=\"business-outline\"></ion-icon></div>\n                  <div class=\"panel-action-card__body\"><strong>مشتری های من</strong><small>آمار و اطلاعات خریداران فروشگاه</small></div>\n                </div>\n                <ion-icon class=\"panel-action-card__arrow\" name=\"chevron-back-outline\"></ion-icon>\n              </a>\n\n              <a class=\"panel-action-card panel-action-card--emerald\" routerLink=\"/AdminPanel/OffCode\">\n                <div class=\"panel-action-card__main\">\n                  <div class=\"panel-action-card__icon-wrap\"><ion-icon name=\"cash-outline\"></ion-icon></div>\n                  <div class=\"panel-action-card__body\"><strong>کد تخفیف</strong><small>ایجاد و مدیریت کدهای تخفیف فروشگاه</small></div>\n                </div>\n                <ion-icon class=\"panel-action-card__arrow\" name=\"chevron-back-outline\"></ion-icon>\n              </a>\n            </div>\n          </section>\n\n          <!-- Sub-section: Marketing, Tags & Content -->\n          <section class=\"panel-section\">\n            <div class=\"panel-section__header\">\n              <h2 class=\"panel-section__title\">\n                <ion-icon name=\"pricetags-outline\"></ion-icon>\n                <span>برچسب‌ها، بنرها و پیوندها</span>\n              </h2>\n              <span class=\"panel-section__tag\">۴ بخش</span>\n            </div>\n            <div class=\"panel-grid-cards\">\n              <a class=\"panel-action-card panel-action-card--rose\" routerLink=\"/AdminPanel/ProductSliders\">\n                <div class=\"panel-action-card__main\">\n                  <div class=\"panel-action-card__icon-wrap\"><ion-icon name=\"albums-outline\"></ion-icon></div>\n                  <div class=\"panel-action-card__body\"><strong>بنر</strong><small>تنظیم و درج اسلایدرهای صفحه فروشگاه</small></div>\n                </div>\n                <ion-icon class=\"panel-action-card__arrow\" name=\"chevron-back-outline\"></ion-icon>\n              </a>\n\n              <a class=\"panel-action-card panel-action-card--amber\" routerLink=\"/AdminPanel/ProductTag\">\n                <div class=\"panel-action-card__main\">\n                  <div class=\"panel-action-card__icon-wrap\"><ion-icon name=\"pricetag-outline\"></ion-icon></div>\n                  <div class=\"panel-action-card__body\"><strong>درج یا ویرایش برچسب کالا</strong><small>مدیریت تگ‌های جستجوی محصولات</small></div>\n                </div>\n                <ion-icon class=\"panel-action-card__arrow\" name=\"chevron-back-outline\"></ion-icon>\n              </a>\n\n              <a class=\"panel-action-card panel-action-card--purple\" routerLink=\"/AdminPanel/ProductArticleTag\">\n                <div class=\"panel-action-card__main\">\n                  <div class=\"panel-action-card__icon-wrap\"><ion-icon name=\"pricetags-outline\"></ion-icon></div>\n                  <div class=\"panel-action-card__body\"><strong>درج یا ویرایش برچسب مقاله</strong><small>مدیریت تگ‌های مقالات فروشگاه</small></div>\n                </div>\n                <ion-icon class=\"panel-action-card__arrow\" name=\"chevron-back-outline\"></ion-icon>\n              </a>\n\n              <a class=\"panel-action-card panel-action-card--sky\" routerLink=\"/AdminPanel/HelpfulLink\">\n                <div class=\"panel-action-card__main\">\n                  <div class=\"panel-action-card__icon-wrap\"><ion-icon name=\"link-outline\"></ion-icon></div>\n                  <div class=\"panel-action-card__body\"><strong>درج یا ویرایش لینک مفید</strong><small>پیوندهای کاربردی و آموزش‌های مرتبط</small></div>\n                </div>\n                <ion-icon class=\"panel-action-card__arrow\" name=\"chevron-back-outline\"></ion-icon>\n              </a>\n            </div>\n          </section>\n\n          <!-- Sub-section: Feedback & Reports -->\n          <section class=\"panel-section\">\n            <div class=\"panel-section__header\">\n              <h2 class=\"panel-section__title\">\n                <ion-icon name=\"heart-outline\"></ion-icon>\n                <span>رضایت‌مندی و گزارش‌های تخلف</span>\n              </h2>\n              <span class=\"panel-section__tag\">۵ بخش</span>\n            </div>\n            <div class=\"panel-grid-cards\">\n              <a class=\"panel-action-card panel-action-card--emerald\" routerLink=\"/AdminPanel/LikedProduct\">\n                <div class=\"panel-action-card__main\">\n                  <div class=\"panel-action-card__icon-wrap\"><ion-icon name=\"happy-outline\"></ion-icon></div>\n                  <div class=\"panel-action-card__body\"><strong>رضایت از کالا</strong><small>آمار علاقه‌مندی‌ها و بازخورد کالاها</small></div>\n                </div>\n                <ion-icon class=\"panel-action-card__arrow\" name=\"chevron-back-outline\"></ion-icon>\n              </a>\n\n              <a class=\"panel-action-card panel-action-card--emerald\" routerLink=\"/AdminPanel/LikedProductArticle\">\n                <div class=\"panel-action-card__main\">\n                  <div class=\"panel-action-card__icon-wrap\"><ion-icon name=\"happy-outline\"></ion-icon></div>\n                  <div class=\"panel-action-card__body\"><strong>رضایت از مقاله</strong><small>آمار بازخورد و لایک مقالات</small></div>\n                </div>\n                <ion-icon class=\"panel-action-card__arrow\" name=\"chevron-back-outline\"></ion-icon>\n              </a>\n\n              <a class=\"panel-action-card panel-action-card--rose\" routerLink=\"/AdminPanel/ReportProduct\">\n                <div class=\"panel-action-card__main\">\n                  <div class=\"panel-action-card__icon-wrap\"><ion-icon name=\"alert-circle-outline\"></ion-icon></div>\n                  <div class=\"panel-action-card__body\"><strong>گزارش کالا</strong><small>گزارش‌های تخلف ثبت‌شده کالاها</small></div>\n                </div>\n                <ion-icon class=\"panel-action-card__arrow\" name=\"chevron-back-outline\"></ion-icon>\n              </a>\n\n              <a class=\"panel-action-card panel-action-card--rose\" routerLink=\"/AdminPanel/ReportProductComment\">\n                <div class=\"panel-action-card__main\">\n                  <div class=\"panel-action-card__icon-wrap\"><ion-icon name=\"alert-circle-outline\"></ion-icon></div>\n                  <div class=\"panel-action-card__body\"><strong>گزارش نظرات کالا</strong><small>گزارش دیدگاه‌های نامناسب</small></div>\n                </div>\n                <ion-icon class=\"panel-action-card__arrow\" name=\"chevron-back-outline\"></ion-icon>\n              </a>\n\n              <a class=\"panel-action-card panel-action-card--rose\" routerLink=\"/AdminPanel/ReportProductQuestion\">\n                <div class=\"panel-action-card__main\">\n                  <div class=\"panel-action-card__icon-wrap\"><ion-icon name=\"alert-circle-outline\"></ion-icon></div>\n                  <div class=\"panel-action-card__body\"><strong>گزارش سوالات کالا</strong><small>گزارش پرسش‌های نامرتبط یا نامناسب</small></div>\n                </div>\n                <ion-icon class=\"panel-action-card__arrow\" name=\"chevron-back-outline\"></ion-icon>\n              </a>\n            </div>\n          </section>\n\n          <!-- Sub-section: Deletions -->\n          <section class=\"panel-section\">\n            <div class=\"panel-section__header\">\n              <h2 class=\"panel-section__title\">\n                <ion-icon name=\"trash-outline\"></ion-icon>\n                <span>عملیات حذف و بایگانی فروشگاه</span>\n              </h2>\n              <span class=\"panel-section__tag\">۳ بخش</span>\n            </div>\n            <div class=\"panel-grid-cards\">\n              <a class=\"panel-action-card panel-action-card--rose\" routerLink=\"/AdminPanel/DeleteProductCategory\">\n                <div class=\"panel-action-card__main\">\n                  <div class=\"panel-action-card__icon-wrap\"><ion-icon name=\"close-circle-outline\"></ion-icon></div>\n                  <div class=\"panel-action-card__body\"><strong>حذف گروه</strong><small>حذف دسته‌بندی‌های بدون استفاده</small></div>\n                </div>\n                <ion-icon class=\"panel-action-card__arrow\" name=\"chevron-back-outline\"></ion-icon>\n              </a>\n\n              <a class=\"panel-action-card panel-action-card--rose\" routerLink=\"/AdminPanel/DeleteProduct\">\n                <div class=\"panel-action-card__main\">\n                  <div class=\"panel-action-card__icon-wrap\"><ion-icon name=\"close-circle-outline\"></ion-icon></div>\n                  <div class=\"panel-action-card__body\"><strong>حذف کالا</strong><small>حذف یا بایگانی کالاهای نامعتبر</small></div>\n                </div>\n                <ion-icon class=\"panel-action-card__arrow\" name=\"chevron-back-outline\"></ion-icon>\n              </a>\n\n              <a class=\"panel-action-card panel-action-card--rose\" routerLink=\"/AdminPanel/DeleteProductArticle\">\n                <div class=\"panel-action-card__main\">\n                  <div class=\"panel-action-card__icon-wrap\"><ion-icon name=\"close-circle-outline\"></ion-icon></div>\n                  <div class=\"panel-action-card__body\"><strong>حذف مقاله</strong><small>حذف مقالات منقضی یا نامناسب</small></div>\n                </div>\n                <ion-icon class=\"panel-action-card__arrow\" name=\"chevron-back-outline\"></ion-icon>\n              </a>\n            </div>\n          </section>\n        </div>\n\n        <!-- ================= COURSE SECTION ================= -->\n        <div *ngIf=\"segmentSelected === 'Course'\" dir=\"rtl\">\n          <!-- Sub-section: Moderation & Approvals -->\n          <section class=\"panel-section\">\n            <div class=\"panel-section__header\">\n              <h2 class=\"panel-section__title\">\n                <ion-icon name=\"checkmark-circle-outline\"></ion-icon>\n                <span>فعال و غیرفعال‌سازی محتوای آموزشگاه</span>\n              </h2>\n              <span class=\"panel-section__tag\">۴ بخش</span>\n            </div>\n            <div class=\"panel-grid-cards\">\n              <a class=\"panel-action-card panel-action-card--emerald\" routerLink=\"/AdminPanel/CourseState\">\n                <div class=\"panel-action-card__main\">\n                  <div class=\"panel-action-card__icon-wrap\"><ion-icon name=\"school-outline\"></ion-icon></div>\n                  <div class=\"panel-action-card__body\"><strong>فعال یا غیرفعال سازی دوره</strong><small>بررسی و تایید انتشار دوره‌های آموزشی</small></div>\n                </div>\n                <ion-icon class=\"panel-action-card__arrow\" name=\"chevron-back-outline\"></ion-icon>\n              </a>\n\n              <a class=\"panel-action-card panel-action-card--purple\" routerLink=\"/AdminPanel/ArticleState\">\n                <div class=\"panel-action-card__main\">\n                  <div class=\"panel-action-card__icon-wrap\"><ion-icon name=\"document-text-outline\"></ion-icon></div>\n                  <div class=\"panel-action-card__body\"><strong>فعال یا غیرفعال سازی مقاله</strong><small>تایید مقالات آموزشی سایت</small></div>\n                </div>\n                <ion-icon class=\"panel-action-card__arrow\" name=\"chevron-back-outline\"></ion-icon>\n              </a>\n\n              <a class=\"panel-action-card panel-action-card--rose\" routerLink=\"/AdminPanel/CourseVideoState\">\n                <div class=\"panel-action-card__main\">\n                  <div class=\"panel-action-card__icon-wrap\"><ion-icon name=\"videocam-outline\"></ion-icon></div>\n                  <div class=\"panel-action-card__body\"><strong>فعال یا غیرفعال سازی ویدیو دوره</strong><small>تایید ویدیوهای درسی و جلسات</small></div>\n                </div>\n                <ion-icon class=\"panel-action-card__arrow\" name=\"chevron-back-outline\"></ion-icon>\n              </a>\n\n              <a class=\"panel-action-card panel-action-card--amber\" routerLink=\"/AdminPanel/CourseImageState\">\n                <div class=\"panel-action-card__main\">\n                  <div class=\"panel-action-card__icon-wrap\"><ion-icon name=\"images-outline\"></ion-icon></div>\n                  <div class=\"panel-action-card__body\"><strong>فعال یا غیرفعال سازی عکس دوره</strong><small>تایید پوسترها و عکس‌های دوره</small></div>\n                </div>\n                <ion-icon class=\"panel-action-card__arrow\" name=\"chevron-back-outline\"></ion-icon>\n              </a>\n            </div>\n          </section>\n\n          <!-- Sub-section: Teachers, Students & Exams -->\n          <section class=\"panel-section\">\n            <div class=\"panel-section__header\">\n              <h2 class=\"panel-section__title\">\n                <ion-icon name=\"people-outline\"></ion-icon>\n                <span>مدرسین، دانش‌آموزان و آزمون‌ها</span>\n              </h2>\n              <span class=\"panel-section__tag\">۶ بخش</span>\n            </div>\n            <div class=\"panel-grid-cards\">\n              <a class=\"panel-action-card panel-action-card--sky\" routerLink=\"/AdminPanel/ActivateTeacher\">\n                <div class=\"panel-action-card__main\">\n                  <div class=\"panel-action-card__icon-wrap\"><ion-icon name=\"person-add-outline\"></ion-icon></div>\n                  <div class=\"panel-action-card__body\"><strong>مدرسین</strong><small>تایید صلاحیت و فعال‌سازی معلمان</small></div>\n                </div>\n                <ion-icon class=\"panel-action-card__arrow\" name=\"chevron-back-outline\"></ion-icon>\n              </a>\n\n              <a class=\"panel-action-card panel-action-card--purple\" routerLink=\"/AdminPanel/Students\">\n                <div class=\"panel-action-card__main\">\n                  <div class=\"panel-action-card__icon-wrap\"><ion-icon name=\"school-outline\"></ion-icon></div>\n                  <div class=\"panel-action-card__body\"><strong>دانشجو های من</strong><small>فهرست فراگیران و ثبت‌نام‌شدگان</small></div>\n                </div>\n                <ion-icon class=\"panel-action-card__arrow\" name=\"chevron-back-outline\"></ion-icon>\n              </a>\n\n              <a class=\"panel-action-card panel-action-card--purple\" routerLink=\"/AdminPanel/Exam\">\n                <div class=\"panel-action-card__main\">\n                  <div class=\"panel-action-card__icon-wrap\"><ion-icon name=\"checkbox-outline\"></ion-icon></div>\n                  <div class=\"panel-action-card__body\"><strong>تست و آزمون</strong><small>نظارت بر آزمون‌های کلاسی و نمرات</small></div>\n                </div>\n                <ion-icon class=\"panel-action-card__arrow\" name=\"chevron-back-outline\"></ion-icon>\n              </a>\n\n              <a class=\"panel-action-card panel-action-card--amber\" routerLink=\"/AdminPanel/Questions\">\n                <div class=\"panel-action-card__main\">\n                  <div class=\"panel-action-card__icon-wrap\"><ion-icon name=\"help-outline\"></ion-icon></div>\n                  <div class=\"panel-action-card__body\"><strong>پرسش و پاسخ</strong><small>نظارت بر سوالات و پاسخ‌های درسی</small></div>\n                </div>\n                <ion-icon class=\"panel-action-card__arrow\" name=\"chevron-back-outline\"></ion-icon>\n              </a>\n\n              <a class=\"panel-action-card panel-action-card--rose\" routerLink=\"/AdminPanel/Comments\">\n                <div class=\"panel-action-card__main\">\n                  <div class=\"panel-action-card__icon-wrap\"><ion-icon name=\"chatbox-outline\"></ion-icon></div>\n                  <div class=\"panel-action-card__body\"><strong>نظرات دوره</strong><small>تایید و بررسی دیدگاه‌های دوره‌ها</small></div>\n                </div>\n                <ion-icon class=\"panel-action-card__arrow\" name=\"chevron-back-outline\"></ion-icon>\n              </a>\n\n              <a class=\"panel-action-card panel-action-card--emerald\" routerLink=\"/AdminPanel/OffCode\">\n                <div class=\"panel-action-card__main\">\n                  <div class=\"panel-action-card__icon-wrap\"><ion-icon name=\"cash-outline\"></ion-icon></div>\n                  <div class=\"panel-action-card__body\"><strong>کد تخفیف</strong><small>تخفیف‌های دوره‌های آموزشی</small></div>\n                </div>\n                <ion-icon class=\"panel-action-card__arrow\" name=\"chevron-back-outline\"></ion-icon>\n              </a>\n            </div>\n          </section>\n\n          <!-- Sub-section: Categories, Tags & Marketing -->\n          <section class=\"panel-section\">\n            <div class=\"panel-section__header\">\n              <h2 class=\"panel-section__title\">\n                <ion-icon name=\"layers-outline\"></ion-icon>\n                <span>دسته‌بندی، برچسب‌ها و تبلیغات</span>\n              </h2>\n              <span class=\"panel-section__tag\">۶ بخش</span>\n            </div>\n            <div class=\"panel-grid-cards\">\n              <a class=\"panel-action-card panel-action-card--emerald\" routerLink=\"/AdminPanel/AddCategory\">\n                <div class=\"panel-action-card__main\">\n                  <div class=\"panel-action-card__icon-wrap\"><ion-icon name=\"add-circle-outline\"></ion-icon></div>\n                  <div class=\"panel-action-card__body\"><strong>ایجاد دسته‌بندی مشترک</strong><small>تعریف شاخه‌های جدید دروس</small></div>\n                </div>\n                <ion-icon class=\"panel-action-card__arrow\" name=\"chevron-back-outline\"></ion-icon>\n              </a>\n\n              <a class=\"panel-action-card panel-action-card--purple\" routerLink=\"/AdminPanel/EditCategory\">\n                <div class=\"panel-action-card__main\">\n                  <div class=\"panel-action-card__icon-wrap\"><ion-icon name=\"sync-circle-outline\"></ion-icon></div>\n                  <div class=\"panel-action-card__body\"><strong>ویرایش دسته‌بندی مشترک</strong><small>ویرایش نام و ترتیب شاخه‌ها</small></div>\n                </div>\n                <ion-icon class=\"panel-action-card__arrow\" name=\"chevron-back-outline\"></ion-icon>\n              </a>\n\n              <a class=\"panel-action-card panel-action-card--amber\" routerLink=\"/AdminPanel/CourseTag\">\n                <div class=\"panel-action-card__main\">\n                  <div class=\"panel-action-card__icon-wrap\"><ion-icon name=\"pricetag-outline\"></ion-icon></div>\n                  <div class=\"panel-action-card__body\"><strong>درج یا ویرایش برچسب دوره</strong><small>تگ‌های پایه‌ها و سرفصل‌ها</small></div>\n                </div>\n                <ion-icon class=\"panel-action-card__arrow\" name=\"chevron-back-outline\"></ion-icon>\n              </a>\n\n              <a class=\"panel-action-card panel-action-card--purple\" routerLink=\"/AdminPanel/ArticleTag\">\n                <div class=\"panel-action-card__main\">\n                  <div class=\"panel-action-card__icon-wrap\"><ion-icon name=\"pricetags-outline\"></ion-icon></div>\n                  <div class=\"panel-action-card__body\"><strong>درج یا ویرایش برچسب مقاله</strong><small>تگ‌های مقالات آموزشی</small></div>\n                </div>\n                <ion-icon class=\"panel-action-card__arrow\" name=\"chevron-back-outline\"></ion-icon>\n              </a>\n\n              <a class=\"panel-action-card panel-action-card--sky\" routerLink=\"/AdminPanel/HelpfulLink\">\n                <div class=\"panel-action-card__main\">\n                  <div class=\"panel-action-card__icon-wrap\"><ion-icon name=\"link-outline\"></ion-icon></div>\n                  <div class=\"panel-action-card__body\"><strong>درج یا ویرایش لینک مفید</strong><small>پیوندهای کمکی اول آموز</small></div>\n                </div>\n                <ion-icon class=\"panel-action-card__arrow\" name=\"chevron-back-outline\"></ion-icon>\n              </a>\n\n              <a class=\"panel-action-card panel-action-card--rose\" routerLink=\"/AdminPanel/ProductSliders\">\n                <div class=\"panel-action-card__main\">\n                  <div class=\"panel-action-card__icon-wrap\"><ion-icon name=\"albums-outline\"></ion-icon></div>\n                  <div class=\"panel-action-card__body\"><strong>بنر</strong><small>اسلایدرهای صفحه آموزشگاه</small></div>\n                </div>\n                <ion-icon class=\"panel-action-card__arrow\" name=\"chevron-back-outline\"></ion-icon>\n              </a>\n            </div>\n          </section>\n\n          <!-- Sub-section: Feedback, Bots & Reports -->\n          <section class=\"panel-section\">\n            <div class=\"panel-section__header\">\n              <h2 class=\"panel-section__title\">\n                <ion-icon name=\"sparkles-outline\"></ion-icon>\n                <span>ربات‌ها، رضایت‌مندی و گزارش‌ها</span>\n              </h2>\n              <span class=\"panel-section__tag\">۶ بخش</span>\n            </div>\n            <div class=\"panel-grid-cards\">\n              <a class=\"panel-action-card panel-action-card--rose\" routerLink=\"/AdminPanel/InstagramBot\">\n                <div class=\"panel-action-card__main\">\n                  <div class=\"panel-action-card__icon-wrap\"><ion-icon name=\"logo-instagram\"></ion-icon></div>\n                  <div class=\"panel-action-card__body\"><strong>ربات اینستاگرام</strong><small>مدیریت ارسال خودکار محتوا به اینستاگرام</small></div>\n                </div>\n                <ion-icon class=\"panel-action-card__arrow\" name=\"chevron-back-outline\"></ion-icon>\n              </a>\n\n              <a class=\"panel-action-card panel-action-card--emerald\" routerLink=\"/AdminPanel/LikedCourses\">\n                <div class=\"panel-action-card__main\">\n                  <div class=\"panel-action-card__icon-wrap\"><ion-icon name=\"happy-outline\"></ion-icon></div>\n                  <div class=\"panel-action-card__body\"><strong>رضایت از دوره</strong><small>آمار بازخوردها و لایک دوره‌ها</small></div>\n                </div>\n                <ion-icon class=\"panel-action-card__arrow\" name=\"chevron-back-outline\"></ion-icon>\n              </a>\n\n              <a class=\"panel-action-card panel-action-card--emerald\" routerLink=\"/AdminPanel/LikedArticles\">\n                <div class=\"panel-action-card__main\">\n                  <div class=\"panel-action-card__icon-wrap\"><ion-icon name=\"happy-outline\"></ion-icon></div>\n                  <div class=\"panel-action-card__body\"><strong>رضایت از مقاله</strong><small>آمار لایک مقالات آموزشی</small></div>\n                </div>\n                <ion-icon class=\"panel-action-card__arrow\" name=\"chevron-back-outline\"></ion-icon>\n              </a>\n\n              <a class=\"panel-action-card panel-action-card--rose\" routerLink=\"/AdminPanel/ReportCourse\">\n                <div class=\"panel-action-card__main\">\n                  <div class=\"panel-action-card__icon-wrap\"><ion-icon name=\"alert-circle-outline\"></ion-icon></div>\n                  <div class=\"panel-action-card__body\"><strong>گزارش دوره</strong><small>گزارش‌های تخلف ثبت‌شده دوره‌ها</small></div>\n                </div>\n                <ion-icon class=\"panel-action-card__arrow\" name=\"chevron-back-outline\"></ion-icon>\n              </a>\n\n              <a class=\"panel-action-card panel-action-card--rose\" routerLink=\"/AdminPanel/ReportCourseComment\">\n                <div class=\"panel-action-card__main\">\n                  <div class=\"panel-action-card__icon-wrap\"><ion-icon name=\"alert-circle-outline\"></ion-icon></div>\n                  <div class=\"panel-action-card__body\"><strong>گزارش نظرات دوره</strong><small>گزارش دیدگاه‌های نامناسب دوره</small></div>\n                </div>\n                <ion-icon class=\"panel-action-card__arrow\" name=\"chevron-back-outline\"></ion-icon>\n              </a>\n\n              <a class=\"panel-action-card panel-action-card--rose\" routerLink=\"/AdminPanel/ReportCourseQuestion\">\n                <div class=\"panel-action-card__main\">\n                  <div class=\"panel-action-card__icon-wrap\"><ion-icon name=\"alert-circle-outline\"></ion-icon></div>\n                  <div class=\"panel-action-card__body\"><strong>گزارش سوالات دوره</strong><small>گزارش پرسش‌های نامناسب دوره</small></div>\n                </div>\n                <ion-icon class=\"panel-action-card__arrow\" name=\"chevron-back-outline\"></ion-icon>\n              </a>\n            </div>\n          </section>\n\n          <!-- Sub-section: Deletions -->\n          <section class=\"panel-section\">\n            <div class=\"panel-section__header\">\n              <h2 class=\"panel-section__title\">\n                <ion-icon name=\"trash-outline\"></ion-icon>\n                <span>عملیات حذف و بایگانی آموزشگاه</span>\n              </h2>\n              <span class=\"panel-section__tag\">۳ بخش</span>\n            </div>\n            <div class=\"panel-grid-cards\">\n              <a class=\"panel-action-card panel-action-card--rose\" routerLink=\"/AdminPanel/DeleteCategory\">\n                <div class=\"panel-action-card__main\">\n                  <div class=\"panel-action-card__icon-wrap\"><ion-icon name=\"close-circle-outline\"></ion-icon></div>\n                  <div class=\"panel-action-card__body\"><strong>حذف گروه</strong><small>حذف دسته‌های نامعتبر دوره‌ها</small></div>\n                </div>\n                <ion-icon class=\"panel-action-card__arrow\" name=\"chevron-back-outline\"></ion-icon>\n              </a>\n\n              <a class=\"panel-action-card panel-action-card--rose\" routerLink=\"/AdminPanel/DeleteCourse\">\n                <div class=\"panel-action-card__main\">\n                  <div class=\"panel-action-card__icon-wrap\"><ion-icon name=\"close-circle-outline\"></ion-icon></div>\n                  <div class=\"panel-action-card__body\"><strong>حذف دوره</strong><small>حذف یا بایگانی دوره‌های منقضی</small></div>\n                </div>\n                <ion-icon class=\"panel-action-card__arrow\" name=\"chevron-back-outline\"></ion-icon>\n              </a>\n\n              <a class=\"panel-action-card panel-action-card--rose\" routerLink=\"/AdminPanel/DeleteArticle\">\n                <div class=\"panel-action-card__main\">\n                  <div class=\"panel-action-card__icon-wrap\"><ion-icon name=\"close-circle-outline\"></ion-icon></div>\n                  <div class=\"panel-action-card__body\"><strong>حذف مقاله</strong><small>حذف مقالات منقضی یا نامعتبر</small></div>\n                </div>\n                <ion-icon class=\"panel-action-card__arrow\" name=\"chevron-back-outline\"></ion-icon>\n              </a>\n            </div>\n          </section>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <app-footer></app-footer>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_view_pages_panel_admin-panel_admin-panel_module_ts.js.map