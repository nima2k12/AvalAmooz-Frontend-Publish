"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_view_pages_panel_super-admin-panel_common-questions_common-questions_module_ts"],{

/***/ 11421:
/*!********************************************************************************************************!*\
  !*** ./src/app/view/pages/panel/super-admin-panel/common-questions/common-questions-routing.module.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommonQuestionsRoutingModule": () => (/* binding */ CommonQuestionsRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _common_questions_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common-questions.component */ 20578);




const routes = [{ path: '', component: _common_questions_component__WEBPACK_IMPORTED_MODULE_0__.CommonQuestionsComponent }];
let CommonQuestionsRoutingModule = class CommonQuestionsRoutingModule {
};
CommonQuestionsRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], CommonQuestionsRoutingModule);



/***/ }),

/***/ 20578:
/*!***************************************************************************************************!*\
  !*** ./src/app/view/pages/panel/super-admin-panel/common-questions/common-questions.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommonQuestionsComponent": () => (/* binding */ CommonQuestionsComponent)
/* harmony export */ });
/* harmony import */ var G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _common_questions_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common-questions.component.html?ngResource */ 59073);
/* harmony import */ var _common_questions_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common-questions.component.scss?ngResource */ 84226);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_data_service_site_Slider_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/data/service/site/Slider.service */ 79519);
/* harmony import */ var _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/common/SharedIonic */ 97112);
/* harmony import */ var _core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/common/GResponse */ 54021);
/* harmony import */ var _data_model_site_SliderModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../data/model/site/SliderModel */ 89062);












let CommonQuestionsComponent = class CommonQuestionsComponent {
  constructor(siteService, fb, toastController, loadingController, alertController, router) {
    this.siteService = siteService;
    this.fb = fb;
    this.toastController = toastController;
    this.loadingController = loadingController;
    this.alertController = alertController;
    this.router = router;
    this.segmentSelected = 'Add';
    this.selectedIndex = -1;
    this.list = [];
  }

  ionViewWillEnter() {
    this.getData();
  }

  ngOnInit() {
    this.addForm = this.fb.group({
      title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(1)]],
      description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(1)]],
      link: [''],
      isActive: [false],
      isImportant: [false]
    });
    this.updateForm = this.fb.group({
      id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.min(1)]],
      title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(1)]],
      description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(1)]],
      link: [''],
      isActive: [false],
      isImportant: [false]
    });
  }

  getData() {
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.loading(this.loadingController);
    this.siteService.GetAllCommonQuestions().subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);

      if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.SuccessStatus === res.status) {
        this.list = res.data;
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.toast(this.toastController, 'موردی یافت نشد');
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.unSuccessToast(this.toastController);
    });
  }

  onSelect(index) {
    this.selectedIndex = +index;
    this.updateForm.setValue({
      id: this.list[+index].id,
      title: this.list[+index].title,
      description: this.list[+index].description,
      link: this.list[+index].link,
      isActive: this.list[+index].isActive,
      isImportant: this.list[+index].isImportant
    });
  }

  presentAlertConfirm(index) {
    var _this = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this.alertController.create({
        cssClass: 'main-alert',
        header: 'هشدار!',
        message: 'آیا مطمئن به حذف هستید؟!؟',
        buttons: [{
          text: 'لغو',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        }, {
          text: 'حذف',
          handler: () => {
            _this.onDelete(index);
          }
        }]
      });
      yield alert.present();
    })();
  }

  onDelete(index) {
    this.selectedIndex = +index;
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.loading(this.loadingController);
    this.siteService.RemoveCommonQuestion(this.list[this.selectedIndex].id).subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);

      if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.SuccessStatus === res.status) {
        this.updateForm.setValue({
          id: '',
          title: '',
          description: '',
          link: '',
          isActive: false,
          isImportant: false
        });
        this.getData();
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.successToast(this.toastController);
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.unSuccessToast(this.toastController);
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.unSuccessToast(this.toastController);
    });
  }

  onUpdate() {
    if (this.updateForm.valid || this.selectedIndex != 0) {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.loading(this.loadingController);
      this.siteService.AddOrUpdateCommonQuestion(new _data_model_site_SliderModel__WEBPACK_IMPORTED_MODULE_6__.CommonQuestionViewModel(this.updateForm.value.id, this.updateForm.value.title, this.updateForm.value.description, this.updateForm.value.link, this.updateForm.value.isActive, this.updateForm.value.isImportant)).subscribe(res => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);

        if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.SuccessStatus === res.status) {
          this.updateForm.setValue({
            id: '',
            title: '',
            description: '',
            link: '',
            isActive: false,
            isImportant: false
          });
          this.getData();
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.successToast(this.toastController);
        } else {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.unSuccessToast(this.toastController);
        }
      }, err => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.unSuccessToast(this.toastController);
      });
    }
  }

  onAdd() {
    if (this.addForm.valid) {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.loading(this.loadingController);
      this.siteService.AddOrUpdateCommonQuestion(new _data_model_site_SliderModel__WEBPACK_IMPORTED_MODULE_6__.CommonQuestionViewModel(0, this.addForm.value.title, this.addForm.value.description, this.addForm.value.link, this.addForm.value.isActive, this.addForm.value.isImportant)).subscribe(res => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);

        if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.SuccessStatus === res.status) {
          this.addForm.setValue({
            title: '',
            description: '',
            link: '',
            isActive: false,
            isImportant: false
          });
          this.getData();
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.successToast(this.toastController);
        } else {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.unSuccessToast(this.toastController);
        }
      }, err => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.unSuccessToast(this.toastController);
      });
    }
  }

};

CommonQuestionsComponent.ctorParameters = () => [{
  type: src_app_data_service_site_Slider_service__WEBPACK_IMPORTED_MODULE_3__.SliderService
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
}];

CommonQuestionsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'app-common-questions',
  template: _common_questions_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_common_questions_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], CommonQuestionsComponent);


/***/ }),

/***/ 20654:
/*!************************************************************************************************!*\
  !*** ./src/app/view/pages/panel/super-admin-panel/common-questions/common-questions.module.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommonQuestionsModule": () => (/* binding */ CommonQuestionsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/view/components/app/page-header/page-header.module */ 19916);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _common_questions_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common-questions-routing.module */ 11421);
/* harmony import */ var _common_questions_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common-questions.component */ 20578);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/view/components/app/footer/footer.module */ 60412);
/* harmony import */ var src_app_view_components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/view/components/common/loading/loading.module */ 90876);











let CommonQuestionsModule = class CommonQuestionsModule {
};
CommonQuestionsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [_common_questions_component__WEBPACK_IMPORTED_MODULE_2__.CommonQuestionsComponent],
        imports: [
            src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__.PageHeaderModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _common_questions_routing_module__WEBPACK_IMPORTED_MODULE_1__.CommonQuestionsRoutingModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
            src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__.FooterModule,
            src_app_view_components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_4__.LoadingModule
        ]
    })
], CommonQuestionsModule);



/***/ }),

/***/ 84226:
/*!****************************************************************************************************************!*\
  !*** ./src/app/view/pages/panel/super-admin-panel/common-questions/common-questions.component.scss?ngResource ***!
  \****************************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21tb24tcXVlc3Rpb25zLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 59073:
/*!****************************************************************************************************************!*\
  !*** ./src/app/view/pages/panel/super-admin-panel/common-questions/common-questions.component.html?ngResource ***!
  \****************************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"interior-header\" translucent=\"true\">\n  <app-loading></app-loading>\n  <app-page-header fallback=\"/\" [defaultBack]=\"false\">\n<ion-buttons page-back><ion-back-button text=\"\" icon=\"arrow-back-outline\"\r\n        color=\"lightest\"\r\n        defaultHref=\"/SuperAdminPanel\"\r\n      ></ion-back-button></ion-buttons>\n<span page-title>سوالات متداول</span>\n  </app-page-header>\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid\r\n    style=\"padding: 0px !important\"\r\n    class=\"ion-no-padding ion-margin-top\"\r\n    class=\"bg\"\r\n  >\r\n    <ion-toolbar dir=\"rtl\" color=\"primary\">\r\n      <ion-segment [(ngModel)]=\"segmentSelected\">\r\n        <ion-segment-button value=\"Add\">\r\n          <ion-label>درج</ion-label>\r\n          <ion-icon name=\"add-outline\"></ion-icon>\r\n        </ion-segment-button>\r\n        <ion-segment-button value=\"Update\">\r\n          <ion-label>ویرایش</ion-label>\r\n          <ion-icon name=\"sync-outline\"></ion-icon>\r\n        </ion-segment-button>\r\n      </ion-segment>\r\n    </ion-toolbar>\r\n\r\n    <ion-row *ngIf=\"segmentSelected === 'Add'\">\r\n      <ion-col\r\n        size=\"12\"\r\n        offset=\"0\"\r\n        size-md=\"10\"\r\n        offset-md=\"1\"\r\n        size-lg=\"8\"\r\n        offset-lg=\"2\"\r\n        dir=\"rtl\"\r\n      >\r\n        <form [formGroup]=\"addForm\" (ngSubmit)=\"onAdd()\">\r\n          <ion-card>\r\n            <ion-list>\r\n              <ion-list-header>\r\n                <ion-label>درج سوال</ion-label>\r\n              </ion-list-header>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\" color=\"light\">عنوان </ion-label>\r\n                <ion-input\r\n                  placeholder=\"عنوان سوال\"\r\n                  formControlName=\"title\"\r\n                ></ion-input>\r\n                <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\" color=\"light\">پاسخ </ion-label>\r\n                <ion-textarea\r\n                  placeholder=\"پاسخ سوال\"\r\n                  formControlName=\"description\"\r\n                ></ion-textarea>\r\n                <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\" color=\"light\">لینک </ion-label>\r\n                <ion-input\r\n                  placeholder=\"لینک سوال\"\r\n                  formControlName=\"link\"\r\n                ></ion-input>\r\n                <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\" color=\"light\">فعال? </ion-label>\r\n                <ion-checkbox formControlName=\"isActive\"></ion-checkbox>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\" color=\"light\">مهم? </ion-label>\r\n                <ion-checkbox formControlName=\"isImportant\"></ion-checkbox>\r\n              </ion-item>\r\n            </ion-list>\r\n          </ion-card>\r\n\r\n          <ion-button\r\n            class=\"ion-margin\"\r\n            expand=\"block\"\r\n            fill=\"solid\"\r\n            shape=\"round\"\r\n            color=\"success\"\r\n            type=\"submit\"\r\n            [disabled]=\"addForm.invalid\"\r\n          >\r\n            درج\r\n          </ion-button>\r\n        </form>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row *ngIf=\"segmentSelected === 'Update'\">\r\n      <ion-col\r\n        size=\"12\"\r\n        offset=\"0\"\r\n        size-md=\"10\"\r\n        offset-md=\"1\"\r\n        size-lg=\"8\"\r\n        offset-lg=\"2\"\r\n        dir=\"rtl\"\r\n      >\r\n        <ion-card>\r\n          <ion-list>\r\n            <ion-list-header>\r\n              <ion-label>لیست سوال ها</ion-label>\r\n            </ion-list-header>\r\n            <div *ngIf=\"list.length <= 0\">\r\n              <ion-item>\r\n                <ion-label color=\"warning\" class=\"text-center\"\r\n                  >هنوز سوالی درج نشده است</ion-label\r\n                >\r\n              </ion-item>\r\n            </div>\r\n            <div *ngIf=\"list.length > 0\">\r\n              <ion-card *ngFor=\"let s of list; let i = index\">\r\n                <ion-item button (click)=\"onSelect(i)\">\r\n                  <ion-label>{{ 'کد: ' + s.id }}</ion-label>\r\n                  <ion-button (click)=\"presentAlertConfirm(i)\">\r\n                    <ion-icon slot=\"icon-only\" name=\"trash-outline\"></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-text>{{ 'عنوان: ' + s.title }}</ion-text>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-textarea>{{ 'پاسخ: ' + s.description }}</ion-textarea>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-text>{{ 'لینک: ' + s.link }}</ion-text>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-text>{{ 'فعال: ' + s.isActive }}</ion-text>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-text>{{ 'مهم: ' + s.isImportant }}</ion-text>\r\n                </ion-item>\r\n              </ion-card>\r\n            </div>\r\n          </ion-list>\r\n        </ion-card>\r\n        <form [formGroup]=\"updateForm\" (ngSubmit)=\"onUpdate()\">\r\n          <ion-card>\r\n            <ion-list>\r\n              <ion-list-header>\r\n                <ion-label>ویرایش</ion-label>\r\n              </ion-list-header>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\" color=\"light\">عنوان </ion-label>\r\n                <ion-input\r\n                  placeholder=\"عنوان سوال\"\r\n                  formControlName=\"title\"\r\n                ></ion-input>\r\n                <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\" color=\"light\">پاسخ </ion-label>\r\n                <ion-textarea\r\n                  placeholder=\"پاسخ سوال\"\r\n                  formControlName=\"description\"\r\n                ></ion-textarea>\r\n                <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\" color=\"light\">لینک </ion-label>\r\n                <ion-input\r\n                  placeholder=\"لینک سوال\"\r\n                  formControlName=\"link\"\r\n                ></ion-input>\r\n                <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\" color=\"light\">فعال? </ion-label>\r\n                <ion-checkbox formControlName=\"isActive\"></ion-checkbox>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\" color=\"light\">مهم? </ion-label>\r\n                <ion-checkbox formControlName=\"isImportant\"></ion-checkbox>\r\n              </ion-item>\r\n            </ion-list>\r\n          </ion-card>\r\n\r\n          <ion-button\r\n            class=\"ion-margin\"\r\n            expand=\"block\"\r\n            fill=\"solid\"\r\n            shape=\"round\"\r\n            color=\"success\"\r\n            type=\"submit\"\r\n            [disabled]=\"updateForm.invalid || selectedIndex === -1\"\r\n          >\r\n            ویرایش\r\n          </ion-button>\r\n        </form>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <app-footer></app-footer>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_view_pages_panel_super-admin-panel_common-questions_common-questions_module_ts.js.map