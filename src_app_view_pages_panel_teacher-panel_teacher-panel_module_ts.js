"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_view_pages_panel_teacher-panel_teacher-panel_module_ts"],{

/***/ 54044:
/*!********************************************************************************!*\
  !*** ./src/app/view/pages/panel/teacher-panel/teacher-panel-routing.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeacherPanelRoutingModule": () => (/* binding */ TeacherPanelRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _teacher_panel_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./teacher-panel.component */ 90710);




const routes = [
    {
        path: '',
        component: _teacher_panel_component__WEBPACK_IMPORTED_MODULE_0__.TeacherPanelComponent
    },
    {
        path: 'Addcourse',
        redirectTo: '/TeacherPanel/AddCourse',
        // loadChildren: () => import('../../../../view/pages/panel/teacher-panel/add-course/add-course.module').then(m => m.AddCourseModule)
    },
    {
        path: 'addcourse',
        redirectTo: '/TeacherPanel/AddCourse',
        // loadChildren: () => import('../../../../view/pages/panel/teacher-panel/add-course/add-course.module').then(m => m.AddCourseModule)
    },
    {
        path: 'addCourse',
        redirectTo: '/TeacherPanel/AddCourse',
        // loadChildren: () => import('../../../../view/pages/panel/teacher-panel/add-course/add-course.module').then(m => m.AddCourseModule)
    },
    {
        path: 'AddCourse',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_kolkov_angular-editor_fesm2020_kolkov-angular-editor_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_view_pages_panel_teacher-panel_add-course_add-course_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../view/pages/panel/teacher-panel/add-course/add-course.module */ 18519)).then(m => m.AddCourseModule)
    },
    {
        path: 'Addarticle',
        redirectTo: '/TeacherPanel/AddArticle',
        // loadChildren: () => import('../../../../view/pages/panel/teacher-panel/add-article/add-article.module').then(m => m.AddArticleModule)
    },
    {
        path: 'addarticle',
        redirectTo: '/TeacherPanel/AddArticle',
        // loadChildren: () => import('../../../../view/pages/panel/teacher-panel/add-article/add-article.module').then(m => m.AddArticleModule)
    },
    {
        path: 'addArticle',
        redirectTo: '/TeacherPanel/AddArticle',
        // loadChildren: () => import('../../../../view/pages/panel/teacher-panel/add-article/add-article.module').then(m => m.AddArticleModule),
        pathMatch: 'full'
    },
    {
        path: 'AddArticle',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_kolkov_angular-editor_fesm2020_kolkov-angular-editor_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_view_pages_panel_teacher-panel_add-article_add-article_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../view/pages/panel/teacher-panel/add-article/add-article.module */ 37358)).then(m => m.AddArticleModule)
    },
    {
        path: 'students',
        redirectTo: '/TeacherPanel/Students',
    },
    {
        path: 'Students',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_course_shared-course_module_ts"), __webpack_require__.e("default-src_app_data_model_order_CartModel_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_view_pages_panel_teacher-panel_students_students_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../view/pages/panel/teacher-panel/students/students.module */ 26965)).then(m => m.StudentsModule)
    },
    {
        path: 'Updatecourse',
        redirectTo: '/TeacherPanel/UpdateCourse',
    },
    {
        path: 'updatecourse',
        redirectTo: '/TeacherPanel/UpdateCourse',
    },
    {
        path: 'updateCourse',
        redirectTo: '/TeacherPanel/UpdateCourse',
    },
    {
        path: 'UpdateCourse',
        // tslint:disable-next-line: max-line-length
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_course_shared-course_module_ts"), __webpack_require__.e("default-node_modules_kolkov_angular-editor_fesm2020_kolkov-angular-editor_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_view_pages_panel_teacher-panel_update-course_update-course_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../view/pages/panel/teacher-panel/update-course/update-course.module */ 79850)).then(m => m.UpdateCourseModule)
    },
    {
        path: 'Updatearticle',
        redirectTo: '/TeacherPanel/UpdateArticle',
    },
    {
        path: 'updatearticle',
        redirectTo: '/TeacherPanel/UpdateArticle',
    },
    {
        path: 'updateArticle',
        redirectTo: '/TeacherPanel/UpdateArticle',
    },
    {
        path: 'UpdateArticle',
        // tslint:disable-next-line: max-line-length
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_kolkov_angular-editor_fesm2020_kolkov-angular-editor_mjs"), __webpack_require__.e("default-src_app_data_model_article_ArticleFilterModel_ts-src_app_view_components_article_shar-857c2c"), __webpack_require__.e("common"), __webpack_require__.e("src_app_view_pages_panel_teacher-panel_update-article_update-article_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../view/pages/panel/teacher-panel/update-article/update-article.module */ 64856)).then(m => m.UpdateArticleModule)
    },
    {
        path: 'Addvideo',
        redirectTo: '/TeacherPanel/AddVideo',
    },
    {
        path: 'addvideo',
        redirectTo: '/TeacherPanel/AddVideo',
    },
    {
        path: 'addVideo',
        redirectTo: '/TeacherPanel/AddVideo',
    },
    {
        path: 'AddVideo',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_course_shared-course_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_view_pages_panel_teacher-panel_add-video_add-video_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../view/pages/panel/teacher-panel/add-video/add-video.module */ 87777)).then(m => m.AddVideoModule)
    },
    {
        path: 'Addimage',
        redirectTo: '/TeacherPanel/AddImage',
    },
    {
        path: 'addimage',
        redirectTo: '/TeacherPanel/AddImage',
    },
    {
        path: 'addImage',
        redirectTo: '/TeacherPanel/AddImage',
    },
    {
        path: 'AddImage',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_course_shared-course_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_core_pipe_price_module_ts-src_app_view_pages_panel_teacher-panel_add-image_add-image_-5bb3cc")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../view/pages/panel/teacher-panel/add-image/add-image.module */ 16391)).then(m => m.AddImageModule)
    },
    {
        path: 'Bankdetail',
        redirectTo: '/TeacherPanel/BankDetail',
    },
    {
        path: 'bankdetail',
        redirectTo: '/TeacherPanel/BankDetail',
    },
    {
        path: 'bankDetail',
        redirectTo: '/TeacherPanel/BankDetail',
    },
    {
        path: 'BankDetail',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_view_pages_panel_teacher-panel_bank-detail_bank-detail_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../view/pages/panel/teacher-panel/bank-detail/bank-detail.module */ 80547)).then(m => m.BankDetailModule)
    },
    {
        path: 'Cashrequest',
        redirectTo: '/TeacherPanel/CashRequest',
    },
    {
        path: 'cashrequest',
        redirectTo: '/TeacherPanel/CashRequest',
    },
    {
        path: 'cashRequest',
        redirectTo: '/TeacherPanel/CashRequest',
    },
    {
        path: 'CashRequest',
        // tslint:disable-next-line: max-line-length
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_view_pages_panel_teacher-panel_cash-request_cash-request_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../view/pages/panel/teacher-panel/cash-request/cash-request.module */ 65000)).then(m => m.CashRequestModule)
    },
    {
        path: 'Profileedit',
        redirectTo: '/TeacherPanel/ProfileEdit',
    },
    {
        path: 'profileedit',
        redirectTo: '/TeacherPanel/ProfileEdit',
    },
    {
        path: 'profileEdit',
        redirectTo: '/TeacherPanel/ProfileEdit',
    },
    {
        path: 'ProfileEdit',
        // tslint:disable-next-line: max-line-length
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_view_pages_panel_teacher-panel_profile-edit_profile-edit_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../../../view/pages/panel/teacher-panel/profile-edit/profile-edit.module */ 31099)).then(m => m.ProfileEditModule)
    },
    {
        path: 'rules',
        redirectTo: '/TeacherPanel/Rules',
    },
    {
        path: 'Rules',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_view_pages_panel_teacher-panel_rules_rules_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../../../view/pages/panel/teacher-panel/rules/rules.module */ 62649)).then(m => m.RulesModule)
    },
    {
        path: 'questions',
        redirectTo: '/TeacherPanel/Questions',
        pathMatch: 'full'
    },
    {
        path: 'questions/:id',
        redirectTo: '/TeacherPanel/Questions/:id'
    },
    {
        path: 'Questions',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_course_shared-course_module_ts"), __webpack_require__.e("default-src_app_core_pipe_persian-date_persian-date_module_ts-src_app_data_model_question_Que-d2a263"), __webpack_require__.e("common"), __webpack_require__.e("src_app_core_pipe_price_module_ts-src_app_view_pages_panel_teacher-panel_questions_questions_-17de44")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../view/pages/panel/teacher-panel/questions/questions.module */ 79468)).then(m => m.QuestionsModule)
    },
    {
        path: 'Questions/:id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_course_shared-course_module_ts"), __webpack_require__.e("default-src_app_core_pipe_persian-date_persian-date_module_ts-src_app_data_model_question_Que-d2a263"), __webpack_require__.e("common"), __webpack_require__.e("src_app_core_pipe_price_module_ts-src_app_view_pages_panel_teacher-panel_questions_questions_-17de44")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../view/pages/panel/teacher-panel/questions/questions.module */ 79468)).then(m => m.QuestionsModule)
    },
    {
        path: 'comments',
        redirectTo: '/TeacherPanel/Comments',
        pathMatch: 'full'
    },
    {
        path: 'comments/:id',
        redirectTo: '/TeacherPanel/Comments/:id'
    },
    {
        path: 'Comments',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_course_shared-course_module_ts"), __webpack_require__.e("default-src_app_core_pipe_persian-date_persian-date_module_ts-src_app_data_model_question_Que-d2a263"), __webpack_require__.e("common"), __webpack_require__.e("src_app_core_pipe_price_module_ts-src_app_view_pages_panel_teacher-panel_comments_comments_mo-ae3f0a")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../view/pages/panel/teacher-panel/comments/comments.module */ 80528)).then(m => m.CommentsModule)
    },
    {
        path: 'Comments/:id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_components_course_shared-course_module_ts"), __webpack_require__.e("default-src_app_core_pipe_persian-date_persian-date_module_ts-src_app_data_model_question_Que-d2a263"), __webpack_require__.e("common"), __webpack_require__.e("src_app_core_pipe_price_module_ts-src_app_view_pages_panel_teacher-panel_comments_comments_mo-ae3f0a")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../view/pages/panel/teacher-panel/comments/comments.module */ 80528)).then(m => m.CommentsModule)
    },
    {
        path: 'exam',
        redirectTo: '/TeacherPanel/Exam',
        pathMatch: 'full'
    },
    {
        path: 'Exam',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_view_pages_panel_teacher-panel_exam_exam_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../view/pages/panel/teacher-panel/exam/exam.module */ 22221)).then(m => m.ExamModule),
        pathMatch: 'full'
    },
    {
        path: 'exam/:id',
        redirectTo: '/TeacherPanel/Exam/:id'
    },
    {
        path: 'Exam/:id',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_view_pages_panel_teacher-panel_exam_exam_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../../view/pages/panel/teacher-panel/exam/exam.module */ 22221)).then(m => m.ExamModule)
    },
];
let TeacherPanelRoutingModule = class TeacherPanelRoutingModule {
};
TeacherPanelRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], TeacherPanelRoutingModule);



/***/ }),

/***/ 90710:
/*!***************************************************************************!*\
  !*** ./src/app/view/pages/panel/teacher-panel/teacher-panel.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeacherPanelComponent": () => (/* binding */ TeacherPanelComponent)
/* harmony export */ });
/* harmony import */ var G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _teacher_panel_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./teacher-panel.component.html?ngResource */ 88492);
/* harmony import */ var _teacher_panel_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./teacher-panel.component.scss?ngResource */ 65874);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);







let TeacherPanelComponent = class TeacherPanelComponent {
  constructor(router, menuCtrl) {
    this.router = router;
    this.menuCtrl = menuCtrl;
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

TeacherPanelComponent.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.MenuController
}];

TeacherPanelComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-teacher-panel',
  template: _teacher_panel_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_teacher_panel_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], TeacherPanelComponent);


/***/ }),

/***/ 70521:
/*!************************************************************************!*\
  !*** ./src/app/view/pages/panel/teacher-panel/teacher-panel.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeacherPanelModule": () => (/* binding */ TeacherPanelModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/view/components/app/page-header/page-header.module */ 19916);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _teacher_panel_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./teacher-panel-routing.module */ 54044);
/* harmony import */ var _teacher_panel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./teacher-panel.component */ 90710);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/app/footer/footer.module */ 60412);
/* harmony import */ var _components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/common/loading/loading.module */ 90876);









let TeacherPanelModule = class TeacherPanelModule {
};
TeacherPanelModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [_teacher_panel_component__WEBPACK_IMPORTED_MODULE_2__.TeacherPanelComponent],
        imports: [
            src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__.PageHeaderModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _teacher_panel_routing_module__WEBPACK_IMPORTED_MODULE_1__.TeacherPanelRoutingModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__.FooterModule,
            _components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_4__.LoadingModule
        ]
    })
], TeacherPanelModule);



/***/ }),

/***/ 65874:
/*!****************************************************************************************!*\
  !*** ./src/app/view/pages/panel/teacher-panel/teacher-panel.component.scss?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZWFjaGVyLXBhbmVsLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 88492:
/*!****************************************************************************************!*\
  !*** ./src/app/view/pages/panel/teacher-panel/teacher-panel.component.html?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"interior-header\" [translucent]=\"true\">\n  <app-loading></app-loading>\n  <app-page-header titleKey=\"pageHeader.panel/teacher-panel/teacher-panel\" fallback=\"/\" [defaultBack]=\"false\">\n<ion-buttons page-back><ion-back-button text=\"\" icon=\"arrow-back-outline\" defaultHref=\"/\" class=\"panel-back-btn\"></ion-back-button></ion-buttons>\n\n  </app-page-header>\n</ion-header>\n\n<ion-content>\n  <ion-grid class=\"bg\">\n    <ion-row>\n      <ion-col size=\"12\" size-lg=\"10\" offset-lg=\"1\">\n        <!-- Hero Section -->\n        <div class=\"panel-hero\">\n          <div class=\"panel-hero__badge\">\n            <span class=\"sparkle\">✦</span>\n            <span>پنل اختصاصی آموزگاران و مدرسین</span>\n          </div>\n          <h1 class=\"panel-hero__title\">میز کار آموزش و تدریس اول آموز</h1>\n          <p class=\"panel-hero__desc\">\n            سامانه یکپارچه مدیریت دوره‌های ابتدایی، محتوای چندرسانه‌ای، آزمون‌ها و ارتباط مؤثر با دانش‌آموزان و اولیا\n          </p>\n        </div>\n\n        <!-- Section 1: Courses & Media -->\n        <section class=\"panel-section\">\n          <div class=\"panel-section__header\">\n            <h2 class=\"panel-section__title\">\n              <ion-icon name=\"school-outline\"></ion-icon>\n              <span>دوره‌ها و محتوای آموزشی</span>\n            </h2>\n            <span class=\"panel-section__tag\">۴ بخش</span>\n          </div>\n          <div class=\"panel-grid-cards\">\n            <a class=\"panel-action-card panel-action-card--emerald\" routerLink=\"/TeacherPanel/AddCourse\">\n              <div class=\"panel-action-card__main\">\n                <div class=\"panel-action-card__icon-wrap\">\n                  <ion-icon name=\"add-outline\"></ion-icon>\n                </div>\n                <div class=\"panel-action-card__body\">\n                  <strong>درج دوره جدید</strong>\n                  <small>ثبت و انتشار دوره آموزشی جدید</small>\n                </div>\n              </div>\n              <ion-icon class=\"panel-action-card__arrow\" name=\"chevron-back-outline\"></ion-icon>\n            </a>\n\n            <a class=\"panel-action-card panel-action-card--purple\" routerLink=\"/TeacherPanel/UpdateCourse\">\n              <div class=\"panel-action-card__main\">\n                <div class=\"panel-action-card__icon-wrap\">\n                  <ion-icon name=\"sync-outline\"></ion-icon>\n                </div>\n                <div class=\"panel-action-card__body\">\n                  <strong>ویرایش دوره ها</strong>\n                  <small>مدیریت و بروزرسانی دوره‌های فعال</small>\n                </div>\n              </div>\n              <ion-icon class=\"panel-action-card__arrow\" name=\"chevron-back-outline\"></ion-icon>\n            </a>\n\n            <a class=\"panel-action-card panel-action-card--rose\" routerLink=\"/TeacherPanel/AddVideo\">\n              <div class=\"panel-action-card__main\">\n                <div class=\"panel-action-card__icon-wrap\">\n                  <ion-icon name=\"videocam-outline\"></ion-icon>\n                </div>\n                <div class=\"panel-action-card__body\">\n                  <strong>درج و ویرایش ویدئو</strong>\n                  <small>بارگذاری جلسات و ویدیوهای درس</small>\n                </div>\n              </div>\n              <ion-icon class=\"panel-action-card__arrow\" name=\"chevron-back-outline\"></ion-icon>\n            </a>\n\n            <a class=\"panel-action-card panel-action-card--amber\" routerLink=\"/TeacherPanel/AddImage\">\n              <div class=\"panel-action-card__main\">\n                <div class=\"panel-action-card__icon-wrap\">\n                  <ion-icon name=\"images-outline\"></ion-icon>\n                </div>\n                <div class=\"panel-action-card__body\">\n                  <strong>درج و ویرایش عکس</strong>\n                  <small>کاور و تصاویر دوره‌های آموزشی</small>\n                </div>\n              </div>\n              <ion-icon class=\"panel-action-card__arrow\" name=\"chevron-back-outline\"></ion-icon>\n            </a>\n          </div>\n        </section>\n\n        <!-- Section 2: Students, Engagement & Tests -->\n        <section class=\"panel-section\">\n          <div class=\"panel-section__header\">\n            <h2 class=\"panel-section__title\">\n              <ion-icon name=\"people-outline\"></ion-icon>\n              <span>کلاس درس و تعامل با دانش‌آموزان</span>\n            </h2>\n            <span class=\"panel-section__tag\">۴ بخش</span>\n          </div>\n          <div class=\"panel-grid-cards\">\n            <a class=\"panel-action-card panel-action-card--sky\" routerLink=\"/TeacherPanel/Students\">\n              <div class=\"panel-action-card__main\">\n                <div class=\"panel-action-card__icon-wrap\">\n                  <ion-icon name=\"school-outline\"></ion-icon>\n                </div>\n                <div class=\"panel-action-card__body\">\n                  <strong>دانشجو های من</strong>\n                  <small>مشاهده فهرست دانش‌آموزان ثبت‌نامی</small>\n                </div>\n              </div>\n              <ion-icon class=\"panel-action-card__arrow\" name=\"chevron-back-outline\"></ion-icon>\n            </a>\n\n            <a class=\"panel-action-card panel-action-card--purple\" routerLink=\"/TeacherPanel/Exam\">\n              <div class=\"panel-action-card__main\">\n                <div class=\"panel-action-card__icon-wrap\">\n                  <ion-icon name=\"checkbox-outline\"></ion-icon>\n                </div>\n                <div class=\"panel-action-card__body\">\n                  <strong>تست و آزمون</strong>\n                  <small>طراحی آزمون و مشاهده نتایج دانش‌آموزان</small>\n                </div>\n              </div>\n              <ion-icon class=\"panel-action-card__arrow\" name=\"chevron-back-outline\"></ion-icon>\n            </a>\n\n            <a class=\"panel-action-card panel-action-card--amber\" routerLink=\"/TeacherPanel/Questions\">\n              <div class=\"panel-action-card__main\">\n                <div class=\"panel-action-card__icon-wrap\">\n                  <ion-icon name=\"help-outline\"></ion-icon>\n                </div>\n                <div class=\"panel-action-card__body\">\n                  <strong>پرسش و پاسخ</strong>\n                  <small>پاسخ به سوالات درسی دانش‌آموزان</small>\n                </div>\n              </div>\n              <ion-icon class=\"panel-action-card__arrow\" name=\"chevron-back-outline\"></ion-icon>\n            </a>\n\n            <a class=\"panel-action-card panel-action-card--rose\" routerLink=\"/TeacherPanel/Comments\">\n              <div class=\"panel-action-card__main\">\n                <div class=\"panel-action-card__icon-wrap\">\n                  <ion-icon name=\"chatbox-outline\"></ion-icon>\n                </div>\n                <div class=\"panel-action-card__body\">\n                  <strong>نظرات دوره</strong>\n                  <small>نظرات و بازخوردهای دریافتی دوره‌ها</small>\n                </div>\n              </div>\n              <ion-icon class=\"panel-action-card__arrow\" name=\"chevron-back-outline\"></ion-icon>\n            </a>\n          </div>\n        </section>\n\n        <!-- Section 3: Educational Articles -->\n        <section class=\"panel-section\">\n          <div class=\"panel-section__header\">\n            <h2 class=\"panel-section__title\">\n              <ion-icon name=\"document-text-outline\"></ion-icon>\n              <span>مقالات و وبلاگ آموزشی</span>\n            </h2>\n            <span class=\"panel-section__tag\">۲ بخش</span>\n          </div>\n          <div class=\"panel-grid-cards\">\n            <a class=\"panel-action-card panel-action-card--emerald\" routerLink=\"/TeacherPanel/AddArticle\">\n              <div class=\"panel-action-card__main\">\n                <div class=\"panel-action-card__icon-wrap\">\n                  <ion-icon name=\"add-outline\"></ion-icon>\n                </div>\n                <div class=\"panel-action-card__body\">\n                  <strong>درج مقاله جدید</strong>\n                  <small>انتشار مقاله یا یادداشت آموزشی جدید</small>\n                </div>\n              </div>\n              <ion-icon class=\"panel-action-card__arrow\" name=\"chevron-back-outline\"></ion-icon>\n            </a>\n\n            <a class=\"panel-action-card panel-action-card--purple\" routerLink=\"/TeacherPanel/UpdateArticle\">\n              <div class=\"panel-action-card__main\">\n                <div class=\"panel-action-card__icon-wrap\">\n                  <ion-icon name=\"sync-outline\"></ion-icon>\n                </div>\n                <div class=\"panel-action-card__body\">\n                  <strong>ویرایش مقاله ها</strong>\n                  <small>مدیریت مقالات منتشر شده</small>\n                </div>\n              </div>\n              <ion-icon class=\"panel-action-card__arrow\" name=\"chevron-back-outline\"></ion-icon>\n            </a>\n          </div>\n        </section>\n\n        <!-- Section 4: Finance & Account -->\n        <section class=\"panel-section\">\n          <div class=\"panel-section__header\">\n            <h2 class=\"panel-section__title\">\n              <ion-icon name=\"card-outline\"></ion-icon>\n              <span>امور مالی و حساب مدرس</span>\n            </h2>\n            <span class=\"panel-section__tag\">۴ بخش</span>\n          </div>\n          <div class=\"panel-grid-cards\">\n            <a class=\"panel-action-card panel-action-card--emerald\" routerLink=\"/TeacherPanel/CashRequest\">\n              <div class=\"panel-action-card__main\">\n                <div class=\"panel-action-card__icon-wrap\">\n                  <ion-icon name=\"cash-outline\"></ion-icon>\n                </div>\n                <div class=\"panel-action-card__body\">\n                  <strong>درخواست وجه</strong>\n                  <small>ثبت درخواست تسویه و واریز درآمد</small>\n                </div>\n              </div>\n              <ion-icon class=\"panel-action-card__arrow\" name=\"chevron-back-outline\"></ion-icon>\n            </a>\n\n            <a class=\"panel-action-card panel-action-card--sky\" routerLink=\"/TeacherPanel/BankDetail\">\n              <div class=\"panel-action-card__main\">\n                <div class=\"panel-action-card__icon-wrap\">\n                  <ion-icon name=\"business-outline\"></ion-icon>\n                </div>\n                <div class=\"panel-action-card__body\">\n                  <strong>مشخصات بانکی</strong>\n                  <small>شماره شبا و اطلاعات حساب واریز</small>\n                </div>\n              </div>\n              <ion-icon class=\"panel-action-card__arrow\" name=\"chevron-back-outline\"></ion-icon>\n            </a>\n\n            <a class=\"panel-action-card panel-action-card--purple\" routerLink=\"/TeacherPanel/ProfileEdit\">\n              <div class=\"panel-action-card__main\">\n                <div class=\"panel-action-card__icon-wrap\">\n                  <ion-icon name=\"body-outline\"></ion-icon>\n                </div>\n                <div class=\"panel-action-card__body\">\n                  <strong>پروفایل مدرس</strong>\n                  <small>ویرایش رزومه، بیوگرافی و تصویر</small>\n                </div>\n              </div>\n              <ion-icon class=\"panel-action-card__arrow\" name=\"chevron-back-outline\"></ion-icon>\n            </a>\n\n            <a class=\"panel-action-card panel-action-card--amber\" routerLink=\"/TeacherPanel/Rules\">\n              <div class=\"panel-action-card__main\">\n                <div class=\"panel-action-card__icon-wrap\">\n                  <ion-icon name=\"cash-outline\"></ion-icon>\n                </div>\n                <div class=\"panel-action-card__body\">\n                  <strong>راهنما و قوانین مدرس</strong>\n                  <small>شرایط و ضوابط همکاری و تدریس</small>\n                </div>\n              </div>\n              <ion-icon class=\"panel-action-card__arrow\" name=\"chevron-back-outline\"></ion-icon>\n            </a>\n          </div>\n        </section>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <app-footer></app-footer>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_view_pages_panel_teacher-panel_teacher-panel_module_ts.js.map