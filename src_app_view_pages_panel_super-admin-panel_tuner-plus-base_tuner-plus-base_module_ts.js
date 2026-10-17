"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_view_pages_panel_super-admin-panel_tuner-plus-base_tuner-plus-base_module_ts"],{

/***/ 51218:
/*!******************************************************************************************************!*\
  !*** ./src/app/view/pages/panel/super-admin-panel/tuner-plus-base/tuner-plus-base-routing.module.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TunerPlusBaseRoutingModule": () => (/* binding */ TunerPlusBaseRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _tuner_plus_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tuner-plus-base.component */ 73784);




const routes = [{ path: '', component: _tuner_plus_base_component__WEBPACK_IMPORTED_MODULE_0__.TunerPlusBaseComponent }];
let TunerPlusBaseRoutingModule = class TunerPlusBaseRoutingModule {
};
TunerPlusBaseRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], TunerPlusBaseRoutingModule);



/***/ }),

/***/ 73784:
/*!*************************************************************************************************!*\
  !*** ./src/app/view/pages/panel/super-admin-panel/tuner-plus-base/tuner-plus-base.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TunerPlusBaseComponent": () => (/* binding */ TunerPlusBaseComponent)
/* harmony export */ });
/* harmony import */ var G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _tuner_plus_base_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tuner-plus-base.component.html?ngResource */ 28522);
/* harmony import */ var _tuner_plus_base_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tuner-plus-base.component.scss?ngResource */ 22843);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_data_service_site_Slider_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/data/service/site/Slider.service */ 79519);
/* harmony import */ var _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../core/common/SharedIonic */ 97112);
/* harmony import */ var _core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../core/common/GResponse */ 54021);
/* harmony import */ var _data_model_site_SliderModel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../data/model/site/SliderModel */ 89062);
/* harmony import */ var _data_model_common_BaseModel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../data/model/common/BaseModel */ 55937);




/* eslint-disable max-len */

/* eslint-disable eqeqeq */










let TunerPlusBaseComponent = class TunerPlusBaseComponent {
  constructor(siteService, fb, toastController, loadingController, alertController, router) {
    this.siteService = siteService;
    this.fb = fb;
    this.toastController = toastController;
    this.loadingController = loadingController;
    this.alertController = alertController;
    this.router = router;
    this.tunerPluses = [];
    this.selectedIndex = -1;
    this.courseIds = [];
    this.segmentSelected = 'Add';
    this.gearRatio = null;
    this.gearId = 1;
    this.carModelId = 1;
    this.carFactoryId = 1;
  }

  ionViewWillEnter() {
    this.getData();
  }

  ngOnInit() {
    this.addForm = this.fb.group({
      name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(1)]],
      isActive: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
      isFree: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
      isVip: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]]
    });
    this.addForm2 = this.fb.group({
      name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(200)]],
      g1: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(15)]],
      g2: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(15)]],
      g3: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(15)]],
      g4: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(15)]],
      g5: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(15)]],
      g6: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(15)]],
      g7: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(15)]],
      g8: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(15)]],
      rev: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(15)]],
      def: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(15)]],
      isDelete: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]]
    });
    this.addForm3 = this.fb.group({
      name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(200)]],
      isDelete: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]]
    });
    this.addForm4 = this.fb.group({
      name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(200)]],
      isDelete: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]]
    });
    this.updateForm3 = this.fb.group({
      id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.min(1)]],
      name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(200)]],
      isDelete: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]]
    });
    this.updateForm4 = this.fb.group({
      id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.min(1)]],
      name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(200)]],
      isDelete: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]]
    });
    this.updateForm2 = this.fb.group({
      id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.min(1)]],
      name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(200)]],
      g1: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(15)]],
      g2: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(15)]],
      g3: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(15)]],
      g4: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(15)]],
      g5: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(15)]],
      g6: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(15)]],
      g7: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(15)]],
      g8: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(15)]],
      rev: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(15)]],
      def: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(15)]],
      isDelete: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]]
    });
    this.updateForm = this.fb.group({
      id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.min(1)]],
      courseId: [''],
      tunerPlusId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.min(1)]],
      name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(1)]],
      isActive: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
      isFree: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
      isVip: [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]]
    });
  }

  getData() {
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.loading(this.loadingController);
    this.siteService.GetAllTunerPlus().subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);

      if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.SuccessStatus === res.status) {
        this.tunerPluses = res.data;
      } else {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.toast(this.toastController, 'موردی یافت نشد');
      }
    }, err => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.unSuccessToast(this.toastController);
    });
  }

  segmentChanged() {
    if (this.segmentSelected == 'Add2' || this.segmentSelected == 'Add3' || this.segmentSelected == 'Update2' || this.segmentSelected == 'Update3') {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.loading(this.loadingController);
      this.siteService.AdminGetAllGearRatio().subscribe(res => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);

        if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.SuccessStatus === res.status) {
          this.gearRatio = res.data;
        } else {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.toast(this.toastController, 'موردی یافت نشد');
        }
      }, err => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.unSuccessToast(this.toastController);
      });
    }
  }

  getCityList() {
    return this.gearRatio.carModelNames.filter(e => e.carFactoryNameId == this.carFactoryId);
  }

  getGearList() {
    return this.gearRatio.gearBoxModelNames.filter(e => e.carModelNameId == this.carModelId);
  }

  onSelect(index) {
    this.selectedIndex = +index;
    this.courseIds = [...this.tunerPluses[+index].courseIds];
    this.updateForm.setValue({
      id: this.tunerPluses[+index].id,
      courseId: this.tunerPluses[+index].courseId,
      tunerPlusId: this.tunerPluses[+index].tunerPlusId,
      name: this.tunerPluses[+index].name,
      isActive: this.tunerPluses[+index].isActive,
      isFree: this.tunerPluses[+index].isFree,
      isVip: this.tunerPluses[+index].isVip
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

  presentAlertConfirmOnUpdate() {
    var _this2 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this2.alertController.create({
        cssClass: 'main-alert',
        header: 'هشدار!',
        message: 'آیا مطمئن هستید؟',
        buttons: [{
          text: 'لغو',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        }, {
          text: 'بله',
          handler: () => {
            _this2.onUpdate();
          }
        }]
      });
      yield alert.present();
    })();
  }

  presentAlertConfirmOnAdd() {
    var _this3 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this3.alertController.create({
        cssClass: 'main-alert',
        header: 'هشدار!',
        message: 'آیا مطمئن هستید؟',
        buttons: [{
          text: 'لغو',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        }, {
          text: 'بله',
          handler: () => {
            _this3.onAdd();
          }
        }]
      });
      yield alert.present();
    })();
  }

  presentAlertConfirmOnAdd2() {
    var _this4 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this4.alertController.create({
        cssClass: 'main-alert',
        header: 'هشدار!',
        message: 'آیا مطمئن هستید؟',
        buttons: [{
          text: 'لغو',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        }, {
          text: 'بله',
          handler: () => {
            _this4.onAdd2();
          }
        }]
      });
      yield alert.present();
    })();
  }

  presentAlertConfirmOnAdd3() {
    var _this5 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this5.alertController.create({
        cssClass: 'main-alert',
        header: 'هشدار!',
        message: 'آیا مطمئن هستید؟',
        buttons: [{
          text: 'لغو',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        }, {
          text: 'بله',
          handler: () => {
            _this5.onAdd3();
          }
        }]
      });
      yield alert.present();
    })();
  }

  presentAlertConfirmOnAdd4() {
    var _this6 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this6.alertController.create({
        cssClass: 'main-alert',
        header: 'هشدار!',
        message: 'آیا مطمئن هستید؟',
        buttons: [{
          text: 'لغو',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        }, {
          text: 'بله',
          handler: () => {
            _this6.onAdd4();
          }
        }]
      });
      yield alert.present();
    })();
  }

  presentAlertConfirmOnUpdate2() {
    var _this7 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this7.alertController.create({
        cssClass: 'main-alert',
        header: 'هشدار!',
        message: 'آیا مطمئن هستید؟',
        buttons: [{
          text: 'لغو',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        }, {
          text: 'بله',
          handler: () => {
            _this7.onUpdate2();
          }
        }]
      });
      yield alert.present();
    })();
  }

  presentAlertConfirmOnUpdate3() {
    var _this8 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this8.alertController.create({
        cssClass: 'main-alert',
        header: 'هشدار!',
        message: 'آیا مطمئن هستید؟',
        buttons: [{
          text: 'لغو',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        }, {
          text: 'بله',
          handler: () => {
            _this8.onUpdate3();
          }
        }]
      });
      yield alert.present();
    })();
  }

  presentAlertConfirmOnUpdate4() {
    var _this9 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this9.alertController.create({
        cssClass: 'main-alert',
        header: 'هشدار!',
        message: 'آیا مطمئن هستید؟',
        buttons: [{
          text: 'لغو',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        }, {
          text: 'بله',
          handler: () => {
            _this9.onUpdate4();
          }
        }]
      });
      yield alert.present();
    })();
  }

  changed() {
    const model = this.gearRatio.carFactoryNames.find(e => e.id == this.carFactoryId);
    this.updateForm4.setValue({
      id: this.carFactoryId,
      name: model.name,
      isDelete: model.isDelete
    });
    this.updateForm3.setValue({
      id: '',
      name: '',
      isDelete: false
    });
  }

  changed2() {
    const model = this.gearRatio.carModelNames.find(e => e.id == this.carModelId);
    this.updateForm3.setValue({
      id: this.carModelId,
      name: model.name,
      isDelete: model.isDelete
    });
  }

  changed3() {
    const model = this.gearRatio.gearBoxModelNames.find(e => e.id == this.gearId);
    this.updateForm2.setValue({
      id: this.gearId,
      name: model.name,
      isDelete: model.isDelete,
      g1: model.g1,
      g2: model.g2,
      g3: model.g3,
      g4: model.g4,
      g5: model.g5,
      g6: model.g6,
      g7: model.g7,
      g8: model.g8,
      rev: model.rev,
      def: model.def
    });
  }

  onAddCourseId(id) {
    this.courseIds.push(+id);
  }

  removeId(index) {
    this.courseIds.splice(+index, 1);
  }

  onDelete(index) {
    this.selectedIndex = +index;
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.loading(this.loadingController);
    this.siteService.RemoveTunerPlus(this.tunerPluses[this.selectedIndex].id).subscribe(res => {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);

      if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.SuccessStatus === res.status) {
        this.updateForm.setValue({
          id: '',
          courseId: '',
          tunerPlusId: '',
          name: '',
          isActive: false,
          isFree: false,
          isVip: false
        });
        this.tunerPluses.splice(this.selectedIndex, 1);
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
    if (this.updateForm.valid || this.selectedIndex != 0 && this.courseIds.length != 0) {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.loading(this.loadingController);
      const model = new _data_model_site_SliderModel__WEBPACK_IMPORTED_MODULE_6__.TunerPlusCourseViewModel(this.updateForm.value.id, this.updateForm.value.courseId, this.updateForm.value.tunerPlusId, this.courseIds, this.updateForm.value.name, this.updateForm.value.isActive, this.updateForm.value.isFree, this.updateForm.value.isVip);
      this.siteService.AddOrUpdateTunerPlus(model).subscribe(res => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);

        if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.SuccessStatus === res.status) {
          this.updateForm.setValue({
            id: '',
            courseId: '',
            tunerPlusId: '',
            name: '',
            isActive: false,
            isFree: false,
            isVip: false
          });
          const index = this.tunerPluses.findIndex(e => e.id == model.id);

          if (index == -1) {
            this.courseIds = [];
            this.getData();
          } else {
            this.tunerPluses[index].courseId = model.courseId;
            this.tunerPluses[index].isActive = model.isActive;
            this.tunerPluses[index].isFree = model.isFree;
            this.tunerPluses[index].isVip = model.isVip;
            this.tunerPluses[index].name = model.name;
            this.tunerPluses[index].courseIds = [...this.courseIds];
            this.courseIds = [];
          }

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
    if (this.addForm.valid && this.courseIds.length != 0) {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.loading(this.loadingController);
      const newModel = new _data_model_site_SliderModel__WEBPACK_IMPORTED_MODULE_6__.TunerPlusCourseViewModel(0, 0, 0, this.courseIds, this.addForm.value.name, this.addForm.value.isActive, this.addForm.value.isFree, this.addForm.value.isVip);
      this.siteService.AddOrUpdateTunerPlus(newModel).subscribe(res => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);

        if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.SuccessStatus === res.status) {
          this.addForm.setValue({
            name: '',
            isActive: false,
            isFree: false,
            isVip: false
          });
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.successToast(this.toastController);
          this.courseIds = [];
          this.getData();
        } else {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.unSuccessToast(this.toastController);
        }
      }, err => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.unSuccessToast(this.toastController);
      });
    }
  }

  onAdd2() {
    if (this.addForm2.valid) {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.loading(this.loadingController);
      const newModel = new _data_model_common_BaseModel__WEBPACK_IMPORTED_MODULE_7__.GearKeyValueViewModel(this.carFactoryId, this.carModelId, 0, this.addForm2.value.name, this.addForm2.value.g1, this.addForm2.value.g2, this.addForm2.value.g3, this.addForm2.value.g4, this.addForm2.value.g5, this.addForm2.value.g6, this.addForm2.value.g7, this.addForm2.value.g8, this.addForm2.value.rev, this.addForm2.value.def, this.addForm2.value.isDelete);
      this.siteService.AddOrUpdateGearBoxModelName(newModel).subscribe(res => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);

        if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.SuccessStatus === res.status) {
          this.addForm2.setValue({
            name: '',
            isDelete: false,
            g1: '',
            g2: '',
            g3: '',
            g4: '',
            g5: '',
            g6: '',
            g7: '',
            g8: '',
            rev: '',
            def: ''
          });
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.successToast(this.toastController);
          newModel.id = res.data;
          this.gearRatio.gearBoxModelNames.push(newModel);
        } else {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.unSuccessToast(this.toastController);
        }
      }, err => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.unSuccessToast(this.toastController);
      });
    }
  }

  onAdd3() {
    if (this.addForm3.valid) {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.loading(this.loadingController);
      const newModel = new _data_model_common_BaseModel__WEBPACK_IMPORTED_MODULE_7__.GearKeyValueViewModel(this.carFactoryId, 0, 0, this.addForm3.value.name, '', '', '', '', '', '', '', '', '', '', this.addForm3.value.isDelete);
      this.siteService.AddOrUpdateCarModelName(newModel).subscribe(res => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);

        if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.SuccessStatus === res.status) {
          this.addForm3.setValue({
            name: '',
            isDelete: false
          });
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.successToast(this.toastController);
          newModel.id = res.data;
          this.gearRatio.carModelNames.push(newModel);
        } else {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.unSuccessToast(this.toastController);
        }
      }, err => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.unSuccessToast(this.toastController);
      });
    }
  }

  onAdd4() {
    if (this.addForm4.valid) {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.loading(this.loadingController);
      const newModel = new _data_model_common_BaseModel__WEBPACK_IMPORTED_MODULE_7__.GearKeyValueViewModel(0, 0, 0, this.addForm4.value.name, '', '', '', '', '', '', '', '', '', '', this.addForm4.value.isDelete);
      this.siteService.AddOrUpdateCarFactoryName(newModel).subscribe(res => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);

        if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.SuccessStatus === res.status) {
          this.addForm4.setValue({
            name: '',
            isDelete: false
          });
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.successToast(this.toastController);
          newModel.id = res.data;
          this.gearRatio.carFactoryNames.push(newModel);
        } else {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.unSuccessToast(this.toastController);
        }
      }, err => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.unSuccessToast(this.toastController);
      });
    }
  }

  onUpdate3() {
    if (this.updateForm3.valid) {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.loading(this.loadingController);
      const newModel = new _data_model_common_BaseModel__WEBPACK_IMPORTED_MODULE_7__.GearKeyValueViewModel(this.carFactoryId, 0, this.carModelId, this.updateForm3.value.name, '', '', '', '', '', '', '', '', '', '', this.updateForm3.value.isDelete);
      this.siteService.AddOrUpdateCarModelName(newModel).subscribe(res => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);

        if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.SuccessStatus === res.status) {
          this.updateForm3.setValue({
            id: '',
            name: '',
            isDelete: false
          });
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.successToast(this.toastController);
          newModel.id = res.data;
          const find = this.gearRatio.carModelNames.find(e => e.id == newModel.id);
          find.name = newModel.name;
          find.isDelete = newModel.isDelete;
        } else {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.unSuccessToast(this.toastController);
        }
      }, err => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.unSuccessToast(this.toastController);
      });
    }
  }

  presentAlertConfirmOnDeleteGear() {
    var _this10 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this10.alertController.create({
        cssClass: 'main-alert',
        header: 'هشدار!',
        message: 'آیا مطمئن هستید؟',
        buttons: [{
          text: 'لغو',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        }, {
          text: 'بله',
          handler: () => {
            _this10.onDeleteGear();
          }
        }]
      });
      yield alert.present();
    })();
  }

  onDeleteGear() {
    if (this.updateForm2.valid) {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.loading(this.loadingController);
      this.siteService.DeleteGearBoxModelName(this.gearId).subscribe(res => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);

        if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.SuccessStatus === res.status) {
          this.updateForm2.setValue({
            id: '',
            name: '',
            isDelete: false,
            g1: '',
            g2: '',
            g3: '',
            g4: '',
            g5: '',
            g6: '',
            g7: '',
            g8: '',
            rev: '',
            def: ''
          });
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.successToast(this.toastController);
          const find = this.gearRatio.gearBoxModelNames.findIndex(e => e.id == this.gearId);
          this.gearRatio.gearBoxModelNames.splice(find, 1);
        } else {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.unSuccessToast(this.toastController);
        }
      }, err => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.unSuccessToast(this.toastController);
      });
    }
  }

  presentAlertConfirmOnDeleteCarModel() {
    var _this11 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this11.alertController.create({
        cssClass: 'main-alert',
        header: 'هشدار!',
        message: 'آیا مطمئن هستید؟',
        buttons: [{
          text: 'لغو',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        }, {
          text: 'بله',
          handler: () => {
            _this11.onDeleteCarModel();
          }
        }]
      });
      yield alert.present();
    })();
  }

  onDeleteCarModel() {
    if (this.updateForm3.valid) {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.loading(this.loadingController);
      this.siteService.DeleteCarModelName(this.carModelId).subscribe(res => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);

        if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.SuccessStatus === res.status) {
          this.updateForm3.setValue({
            id: '',
            name: '',
            isDelete: false
          });
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.successToast(this.toastController);
          const find = this.gearRatio.carModelNames.findIndex(e => e.id == this.carModelId);
          this.gearRatio.carModelNames.splice(find, 1);
        } else {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.unSuccessToast(this.toastController);
        }
      }, err => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.unSuccessToast(this.toastController);
      });
    }
  }

  presentAlertConfirmOnDeleteCarFactory() {
    var _this12 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this12.alertController.create({
        cssClass: 'main-alert',
        header: 'هشدار!',
        message: 'آیا مطمئن هستید؟',
        buttons: [{
          text: 'لغو',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {}
        }, {
          text: 'بله',
          handler: () => {
            _this12.onDeleteCarFactory();
          }
        }]
      });
      yield alert.present();
    })();
  }

  onDeleteCarFactory() {
    if (this.updateForm4.valid) {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.loading(this.loadingController);
      this.siteService.DeleteCarFactoryName(this.carFactoryId).subscribe(res => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);

        if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.SuccessStatus === res.status) {
          this.updateForm4.setValue({
            id: '',
            name: '',
            isDelete: false
          });
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.successToast(this.toastController);
          const find = this.gearRatio.carFactoryNames.findIndex(e => e.id == this.carFactoryId);
          this.gearRatio.carFactoryNames.splice(find, 1);
        } else {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.unSuccessToast(this.toastController);
        }
      }, err => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.unSuccessToast(this.toastController);
      });
    }
  }

  onUpdate2() {
    if (this.updateForm2.valid) {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.loading(this.loadingController);
      const newModel = new _data_model_common_BaseModel__WEBPACK_IMPORTED_MODULE_7__.GearKeyValueViewModel(this.carFactoryId, this.carModelId, this.gearId, this.updateForm2.value.name, this.updateForm2.value.g1, this.updateForm2.value.g2, this.updateForm2.value.g3, this.updateForm2.value.g4, this.updateForm2.value.g5, this.updateForm2.value.g6, this.updateForm2.value.g7, this.updateForm2.value.g8, this.updateForm2.value.rev, this.updateForm2.value.def, this.updateForm2.value.isDelete);
      this.siteService.AddOrUpdateGearBoxModelName(newModel).subscribe(res => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);

        if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.SuccessStatus === res.status) {
          this.updateForm2.setValue({
            id: '',
            name: '',
            isDelete: false,
            g1: '',
            g2: '',
            g3: '',
            g4: '',
            g5: '',
            g6: '',
            g7: '',
            g8: '',
            rev: '',
            def: ''
          });
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.successToast(this.toastController);
          newModel.id = res.data;
          const find = this.gearRatio.gearBoxModelNames.find(e => e.id == newModel.id);
          find.name = newModel.name;
          find.isDelete = newModel.isDelete;
          find.g1 = newModel.g1;
          find.g2 = newModel.g2;
          find.g3 = newModel.g3;
          find.g4 = newModel.g4;
          find.g5 = newModel.g5;
          find.g6 = newModel.g6;
          find.g7 = newModel.g7;
          find.g8 = newModel.g8;
          find.rev = newModel.rev;
          find.def = newModel.def;
        } else {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.unSuccessToast(this.toastController);
        }
      }, err => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.unSuccessToast(this.toastController);
      });
    }
  }

  onUpdate4() {
    if (this.updateForm4.valid) {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.loading(this.loadingController);
      const newModel = new _data_model_common_BaseModel__WEBPACK_IMPORTED_MODULE_7__.GearKeyValueViewModel(0, 0, this.carFactoryId, this.updateForm4.value.name, '', '', '', '', '', '', '', '', '', '', this.updateForm4.value.isDelete);
      this.siteService.AddOrUpdateCarFactoryName(newModel).subscribe(res => {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.dismissLoading(this.loadingController);

        if (_core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.SuccessStatus === res.status) {
          this.updateForm4.setValue({
            id: '',
            name: '',
            isDelete: false
          });
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_4__.SharedIonic.successToast(this.toastController);
          newModel.id = res.data;
          const find = this.gearRatio.carFactoryNames.find(e => e.id == newModel.id);
          find.name = newModel.name;
          find.isDelete = newModel.isDelete;
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

TunerPlusBaseComponent.ctorParameters = () => [{
  type: src_app_data_service_site_Slider_service__WEBPACK_IMPORTED_MODULE_3__.SliderService
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ToastController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.LoadingController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router
}];

TunerPlusBaseComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
  selector: 'app-tuner-plus-base',
  template: _tuner_plus_base_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_tuner_plus_base_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], TunerPlusBaseComponent);


/***/ }),

/***/ 37389:
/*!**********************************************************************************************!*\
  !*** ./src/app/view/pages/panel/super-admin-panel/tuner-plus-base/tuner-plus-base.module.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TunerPlusBaseModule": () => (/* binding */ TunerPlusBaseModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/view/components/app/page-header/page-header.module */ 19916);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _tuner_plus_base_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tuner-plus-base-routing.module */ 51218);
/* harmony import */ var _tuner_plus_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tuner-plus-base.component */ 73784);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/view/components/app/footer/footer.module */ 60412);
/* harmony import */ var src_app_view_components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/view/components/common/loading/loading.module */ 90876);











let TunerPlusBaseModule = class TunerPlusBaseModule {
};
TunerPlusBaseModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [_tuner_plus_base_component__WEBPACK_IMPORTED_MODULE_2__.TunerPlusBaseComponent],
        imports: [
            src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__.PageHeaderModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _tuner_plus_base_routing_module__WEBPACK_IMPORTED_MODULE_1__.TunerPlusBaseRoutingModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
            src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__.FooterModule,
            src_app_view_components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_4__.LoadingModule
        ]
    })
], TunerPlusBaseModule);



/***/ }),

/***/ 22843:
/*!**************************************************************************************************************!*\
  !*** ./src/app/view/pages/panel/super-admin-panel/tuner-plus-base/tuner-plus-base.component.scss?ngResource ***!
  \**************************************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0dW5lci1wbHVzLWJhc2UuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 28522:
/*!**************************************************************************************************************!*\
  !*** ./src/app/view/pages/panel/super-admin-panel/tuner-plus-base/tuner-plus-base.component.html?ngResource ***!
  \**************************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"interior-header\" translucent=\"true\">\n  <app-loading></app-loading>\n  <app-page-header fallback=\"/\" [defaultBack]=\"false\">\n<ion-buttons page-back><ion-back-button text=\"\" icon=\"arrow-back-outline\"\r\n        color=\"lightest\"\r\n        defaultHref=\"/SuperAdminPanel\"\r\n      ></ion-back-button></ion-buttons>\n<span page-title>بازوی اول آموز</span>\n  </app-page-header>\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-grid\r\n    style=\"padding: 0px !important\"\r\n    class=\"ion-no-padding ion-margin-top\"\r\n    class=\"bg\"\r\n  >\r\n    <ion-toolbar dir=\"rtl\" color=\"primary\">\r\n      <ion-segment [(ngModel)]=\"segmentSelected\" (ionChange)=\"segmentChanged()\">\r\n        <ion-segment-button value=\"Add\">\r\n          <ion-label>درج ابزار</ion-label>\r\n          <ion-icon name=\"add-outline\"></ion-icon>\r\n        </ion-segment-button>\r\n        <ion-segment-button value=\"Update\">\r\n          <ion-label>ویرایش ابزار</ion-label>\r\n          <ion-icon name=\"sync-outline\"></ion-icon>\r\n        </ion-segment-button>\r\n        <ion-segment-button value=\"Add2\">\r\n          <ion-label>درج نسبت دنده</ion-label>\r\n          <ion-icon name=\"add-outline\"></ion-icon>\r\n        </ion-segment-button>\r\n        <ion-segment-button value=\"Update2\">\r\n          <ion-label>ویرایش نسبت دنده</ion-label>\r\n          <ion-icon name=\"sync-outline\"></ion-icon>\r\n        </ion-segment-button>\r\n        <ion-segment-button value=\"Add3\">\r\n          <ion-label>درج خودرو و کمپانی</ion-label>\r\n          <ion-icon name=\"add-outline\"></ion-icon>\r\n        </ion-segment-button>\r\n        <ion-segment-button value=\"Update3\">\r\n          <ion-label>ویرایش خودرو و کمپانی</ion-label>\r\n          <ion-icon name=\"sync-outline\"></ion-icon>\r\n        </ion-segment-button>\r\n      </ion-segment>\r\n    </ion-toolbar>\r\n\r\n    <ion-row *ngIf=\"segmentSelected === 'Add'\">\r\n      <ion-col\r\n        size=\"12\"\r\n        offset=\"0\"\r\n        size-md=\"10\"\r\n        offset-md=\"1\"\r\n        size-lg=\"8\"\r\n        offset-lg=\"2\"\r\n        dir=\"rtl\"\r\n      >\r\n        <form [formGroup]=\"addForm\" (ngSubmit)=\"presentAlertConfirmOnAdd()\">\r\n          <ion-card>\r\n            <ion-list>\r\n              <ion-list-header>\r\n                <ion-label>درج بازوی اول آموز</ion-label>\r\n              </ion-list-header>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\" color=\"light\"\r\n                  >نام ابزار\r\n                </ion-label>\r\n                <ion-input\r\n                  placeholder=\"نام\"\r\n                  formControlName=\"name\"\r\n                  type=\"text\"\r\n                ></ion-input>\r\n                <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\" color=\"light\">فعال؟ </ion-label>\r\n                <ion-checkbox formControlName=\"isActive\"></ion-checkbox>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\" color=\"light\">رایگان؟ </ion-label>\r\n                <ion-checkbox formControlName=\"isFree\"></ion-checkbox>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\" color=\"light\">VIP? </ion-label>\r\n                <ion-checkbox formControlName=\"isVip\"></ion-checkbox>\r\n              </ion-item>\r\n            </ion-list>\r\n          </ion-card>\r\n\r\n          <ion-card>\r\n            <ion-item>\r\n              <ion-label position=\"stacked\" color=\"light\">کد دوره </ion-label>\r\n              <ion-input placeholder=\"9\" type=\"number\" #id></ion-input>\r\n              <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n            </ion-item>\r\n            <ion-button\r\n              [disabled]=\"id.value == ''\"\r\n              color=\"success\"\r\n              (click)=\"onAddCourseId(id.value); id.value = ''\"\r\n              expand=\"block\"\r\n              fill=\"clear\"\r\n              shape=\"round\"\r\n            >\r\n              اضافه کردن\r\n            </ion-button>\r\n            <ion-list>\r\n              <ion-list-header>\r\n                <ion-label>کد دوره ها</ion-label>\r\n              </ion-list-header>\r\n              <ion-item *ngFor=\"let id of courseIds; let i = index\">\r\n                <ion-label>{{ id }}</ion-label>\r\n                <ion-button (click)=\"removeId(i)\">\r\n                  <ion-icon slot=\"icon-only\" name=\"trash-outline\"></ion-icon>\r\n                </ion-button>\r\n              </ion-item>\r\n            </ion-list>\r\n          </ion-card>\r\n\r\n          <ion-button\r\n            class=\"ion-margin\"\r\n            expand=\"block\"\r\n            fill=\"solid\"\r\n            shape=\"round\"\r\n            color=\"success\"\r\n            type=\"submit\"\r\n            [disabled]=\"addForm.invalid || this.courseIds.length == 0\"\r\n          >\r\n            درج\r\n          </ion-button>\r\n        </form>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row *ngIf=\"segmentSelected === 'Add2'\">\r\n      <ion-col\r\n        size=\"12\"\r\n        offset=\"0\"\r\n        size-md=\"10\"\r\n        offset-md=\"1\"\r\n        size-lg=\"8\"\r\n        offset-lg=\"2\"\r\n        dir=\"rtl\"\r\n      >\r\n        <section *ngIf=\"gearRatio\">\r\n          <ion-item>\r\n            <ion-label>کمپانی</ion-label>\r\n            <ion-select [(ngModel)]=\"carFactoryId\" multiple=\"false\">\r\n              <ion-select-option\r\n                (ionChange)=\"carFactoryId = p.id\"\r\n                [value]=\"p.id\"\r\n                *ngFor=\"let p of gearRatio.carFactoryNames\"\r\n                >{{ p.name }}</ion-select-option\r\n              >\r\n            </ion-select>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label>خودرو</ion-label>\r\n            <ion-select [(ngModel)]=\"carModelId\" multiple=\"false\">\r\n              <ion-select-option\r\n                [value]=\"c.id\"\r\n                *ngFor=\"let c of getCityList()\"\r\n                >{{ c.name }}</ion-select-option\r\n              >\r\n            </ion-select>\r\n          </ion-item>\r\n        </section>\r\n        <form [formGroup]=\"addForm2\" (ngSubmit)=\"presentAlertConfirmOnAdd2()\">\r\n          <ion-card>\r\n            <ion-list>\r\n              <ion-list-header>\r\n                <ion-label>درج نسبت دنده</ion-label>\r\n              </ion-list-header>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\" color=\"light\"\r\n                  >مدل گیربکس\r\n                </ion-label>\r\n                <ion-input\r\n                  placeholder=\"مدل گیربکس\"\r\n                  formControlName=\"name\"\r\n                  type=\"text\"\r\n                ></ion-input>\r\n                <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\" color=\"light\"\r\n                  >نسبت دنده 1\r\n                </ion-label>\r\n                <ion-input\r\n                  placeholder=\"نسبت دنده 1\"\r\n                  formControlName=\"g1\"\r\n                  type=\"text\"\r\n                ></ion-input>\r\n                <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\" color=\"light\"\r\n                  >نسبت دنده 2\r\n                </ion-label>\r\n                <ion-input\r\n                  placeholder=\"نسبت دنده 2\"\r\n                  formControlName=\"g2\"\r\n                  type=\"text\"\r\n                ></ion-input>\r\n                <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\" color=\"light\"\r\n                  >نسبت دنده 3\r\n                </ion-label>\r\n                <ion-input\r\n                  placeholder=\"نسبت دنده 3\"\r\n                  formControlName=\"g3\"\r\n                  type=\"text\"\r\n                ></ion-input>\r\n                <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\" color=\"light\"\r\n                  >نسبت دنده 4\r\n                </ion-label>\r\n                <ion-input\r\n                  placeholder=\"نسبت دنده 4\"\r\n                  formControlName=\"g4\"\r\n                  type=\"text\"\r\n                ></ion-input>\r\n                <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\" color=\"light\"\r\n                  >نسبت دنده 5\r\n                </ion-label>\r\n                <ion-input\r\n                  placeholder=\"نسبت دنده 5\"\r\n                  formControlName=\"g5\"\r\n                  type=\"text\"\r\n                ></ion-input>\r\n                <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\" color=\"light\"\r\n                  >نسبت دنده 6\r\n                </ion-label>\r\n                <ion-input\r\n                  placeholder=\"نسبت دنده 6\"\r\n                  formControlName=\"g6\"\r\n                  type=\"text\"\r\n                ></ion-input>\r\n                <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\" color=\"light\"\r\n                  >نسبت دنده 7\r\n                </ion-label>\r\n                <ion-input\r\n                  placeholder=\"نسبت دنده 7\"\r\n                  formControlName=\"g7\"\r\n                  type=\"text\"\r\n                ></ion-input>\r\n                <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\" color=\"light\"\r\n                  >نسبت دنده 8\r\n                </ion-label>\r\n                <ion-input\r\n                  placeholder=\"نسبت دنده 8\"\r\n                  formControlName=\"g8\"\r\n                  type=\"text\"\r\n                ></ion-input>\r\n                <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\" color=\"light\"\r\n                  >نسبت دنده عقب\r\n                </ion-label>\r\n                <ion-input\r\n                  placeholder=\"نسبت دنده عقب\"\r\n                  formControlName=\"rev\"\r\n                  type=\"text\"\r\n                ></ion-input>\r\n                <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\" color=\"light\"\r\n                  >نسبت دیفرانسیل\r\n                </ion-label>\r\n                <ion-input\r\n                  placeholder=\"نسبت دیفرانسیل\"\r\n                  formControlName=\"def\"\r\n                  type=\"text\"\r\n                ></ion-input>\r\n                <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>غیرفعال؟</ion-label>\r\n                <ion-checkbox formControlName=\"isDelete\" slot=\"start\">\r\n                </ion-checkbox>\r\n              </ion-item>\r\n            </ion-list>\r\n          </ion-card>\r\n\r\n          <ion-button\r\n            class=\"ion-margin\"\r\n            expand=\"block\"\r\n            fill=\"solid\"\r\n            shape=\"round\"\r\n            color=\"success\"\r\n            type=\"submit\"\r\n            [disabled]=\"addForm2.invalid\"\r\n          >\r\n            درج\r\n          </ion-button>\r\n        </form>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row *ngIf=\"segmentSelected === 'Update2'\">\r\n      <ion-col\r\n        size=\"12\"\r\n        offset=\"0\"\r\n        size-md=\"10\"\r\n        offset-md=\"1\"\r\n        size-lg=\"8\"\r\n        offset-lg=\"2\"\r\n        dir=\"rtl\"\r\n      >\r\n        <section *ngIf=\"gearRatio\">\r\n          <ion-item>\r\n            <ion-label>کمپانی</ion-label>\r\n            <ion-select [(ngModel)]=\"carFactoryId\" multiple=\"false\">\r\n              <ion-select-option\r\n                (ionChange)=\"carFactoryId = p.id\"\r\n                [value]=\"p.id\"\r\n                *ngFor=\"let p of gearRatio.carFactoryNames\"\r\n                >{{ p.name }}</ion-select-option\r\n              >\r\n            </ion-select>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label>خودرو</ion-label>\r\n            <ion-select [(ngModel)]=\"carModelId\" multiple=\"false\">\r\n              <ion-select-option\r\n                [value]=\"c.id\"\r\n                *ngFor=\"let c of getCityList()\"\r\n                >{{ c.name }}</ion-select-option\r\n              >\r\n            </ion-select>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label>گیربکس</ion-label>\r\n            <ion-select [(ngModel)]=\"gearId\" multiple=\"false\"\r\n            (ionChange)=\"changed3()\">\r\n              <ion-select-option\r\n                [value]=\"c.id\"\r\n                *ngFor=\"let c of getGearList()\"\r\n                >{{ c.name }}</ion-select-option\r\n              >\r\n            </ion-select>\r\n          </ion-item>\r\n        </section>\r\n        <form [formGroup]=\"updateForm2\" (ngSubmit)=\"presentAlertConfirmOnUpdate2()\">\r\n          <ion-card>\r\n            <ion-list>\r\n              <ion-list-header>\r\n                <ion-label>درج نسبت دنده</ion-label>\r\n                <ion-button\r\n                [disabled]=\"updateForm2.invalid\" (click)=\"presentAlertConfirmOnDeleteGear()\" color=\"danger\">\r\n                  حذف\r\n                </ion-button>\r\n              </ion-list-header>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\" color=\"light\"\r\n                  >شناسه\r\n                </ion-label>\r\n                <ion-input\r\n                  placeholder=\"شناسه\"\r\n                  formControlName=\"id\"\r\n                  type=\"number\"\r\n                  [disabled]=\"true\"\r\n                ></ion-input>\r\n                <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\" color=\"light\"\r\n                  >مدل گیربکس\r\n                </ion-label>\r\n                <ion-input\r\n                  placeholder=\"مدل گیربکس\"\r\n                  formControlName=\"name\"\r\n                  type=\"text\"\r\n                ></ion-input>\r\n                <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\" color=\"light\"\r\n                  >نسبت دنده 1\r\n                </ion-label>\r\n                <ion-input\r\n                  placeholder=\"نسبت دنده 1\"\r\n                  formControlName=\"g1\"\r\n                  type=\"text\"\r\n                ></ion-input>\r\n                <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\" color=\"light\"\r\n                  >نسبت دنده 2\r\n                </ion-label>\r\n                <ion-input\r\n                  placeholder=\"نسبت دنده 2\"\r\n                  formControlName=\"g2\"\r\n                  type=\"text\"\r\n                ></ion-input>\r\n                <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\" color=\"light\"\r\n                  >نسبت دنده 3\r\n                </ion-label>\r\n                <ion-input\r\n                  placeholder=\"نسبت دنده 3\"\r\n                  formControlName=\"g3\"\r\n                  type=\"text\"\r\n                ></ion-input>\r\n                <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\" color=\"light\"\r\n                  >نسبت دنده 4\r\n                </ion-label>\r\n                <ion-input\r\n                  placeholder=\"نسبت دنده 4\"\r\n                  formControlName=\"g4\"\r\n                  type=\"text\"\r\n                ></ion-input>\r\n                <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\" color=\"light\"\r\n                  >نسبت دنده 5\r\n                </ion-label>\r\n                <ion-input\r\n                  placeholder=\"نسبت دنده 5\"\r\n                  formControlName=\"g5\"\r\n                  type=\"text\"\r\n                ></ion-input>\r\n                <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\" color=\"light\"\r\n                  >نسبت دنده 6\r\n                </ion-label>\r\n                <ion-input\r\n                  placeholder=\"نسبت دنده 6\"\r\n                  formControlName=\"g6\"\r\n                  type=\"text\"\r\n                ></ion-input>\r\n                <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\" color=\"light\"\r\n                  >نسبت دنده 7\r\n                </ion-label>\r\n                <ion-input\r\n                  placeholder=\"نسبت دنده 7\"\r\n                  formControlName=\"g7\"\r\n                  type=\"text\"\r\n                ></ion-input>\r\n                <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\" color=\"light\"\r\n                  >نسبت دنده 8\r\n                </ion-label>\r\n                <ion-input\r\n                  placeholder=\"نسبت دنده 8\"\r\n                  formControlName=\"g8\"\r\n                  type=\"text\"\r\n                ></ion-input>\r\n                <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\" color=\"light\"\r\n                  >نسبت دنده عقب\r\n                </ion-label>\r\n                <ion-input\r\n                  placeholder=\"نسبت دنده عقب\"\r\n                  formControlName=\"rev\"\r\n                  type=\"text\"\r\n                ></ion-input>\r\n                <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\" color=\"light\"\r\n                  >نسبت دیفرانسیل\r\n                </ion-label>\r\n                <ion-input\r\n                  placeholder=\"نسبت دیفرانسیل\"\r\n                  formControlName=\"def\"\r\n                  type=\"text\"\r\n                ></ion-input>\r\n                <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>غیرفعال؟</ion-label>\r\n                <ion-checkbox formControlName=\"isDelete\" slot=\"start\">\r\n                </ion-checkbox>\r\n              </ion-item>\r\n            </ion-list>\r\n          </ion-card>\r\n\r\n          <ion-button\r\n            class=\"ion-margin\"\r\n            expand=\"block\"\r\n            fill=\"solid\"\r\n            shape=\"round\"\r\n            color=\"success\"\r\n            type=\"submit\"\r\n            [disabled]=\"updateForm2.invalid\"\r\n          >\r\n            درج\r\n          </ion-button>\r\n        </form>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row *ngIf=\"segmentSelected === 'Add3'\">\r\n      <ion-col\r\n        size=\"12\"\r\n        offset=\"0\"\r\n        size-md=\"10\"\r\n        offset-md=\"1\"\r\n        size-lg=\"8\"\r\n        offset-lg=\"2\"\r\n        dir=\"rtl\"\r\n      >\r\n        <section *ngIf=\"gearRatio\">\r\n          <ion-item>\r\n            <ion-label>کمپانی</ion-label>\r\n            <ion-select [(ngModel)]=\"carFactoryId\" multiple=\"false\">\r\n              <ion-select-option\r\n                (ionChange)=\"carFactoryId = p.id\"\r\n                [value]=\"p.id\"\r\n                *ngFor=\"let p of gearRatio.carFactoryNames\"\r\n                >{{ p.name }}</ion-select-option\r\n              >\r\n            </ion-select>\r\n          </ion-item>\r\n        </section>\r\n        <form [formGroup]=\"addForm3\" (ngSubmit)=\"presentAlertConfirmOnAdd3()\">\r\n          <ion-card>\r\n            <ion-list>\r\n              <ion-list-header>\r\n                <ion-label>درج مدل خودرو</ion-label>\r\n              </ion-list-header>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\" color=\"light\"\r\n                  >مدل خودرو\r\n                </ion-label>\r\n                <ion-input\r\n                  placeholder=\"مدل خودرو\"\r\n                  formControlName=\"name\"\r\n                  type=\"text\"\r\n                ></ion-input>\r\n                <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>غیرفعال؟</ion-label>\r\n                <ion-checkbox formControlName=\"isDelete\" slot=\"start\">\r\n                </ion-checkbox>\r\n              </ion-item>\r\n            </ion-list>\r\n          </ion-card>\r\n\r\n          <ion-button\r\n            class=\"ion-margin\"\r\n            expand=\"block\"\r\n            fill=\"solid\"\r\n            shape=\"round\"\r\n            color=\"success\"\r\n            type=\"submit\"\r\n            [disabled]=\"addForm3.invalid\"\r\n          >\r\n            درج\r\n          </ion-button>\r\n        </form>\r\n\r\n        <form [formGroup]=\"addForm4\" (ngSubmit)=\"presentAlertConfirmOnAdd4()\">\r\n          <ion-card>\r\n            <ion-list>\r\n              <ion-list-header>\r\n                <ion-label>درج کمپانی</ion-label>\r\n              </ion-list-header>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\" color=\"light\"\r\n                  >نام کمپانی\r\n                </ion-label>\r\n                <ion-input\r\n                  placeholder=\"نام کمپانی\"\r\n                  formControlName=\"name\"\r\n                  type=\"text\"\r\n                ></ion-input>\r\n                <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>غیرفعال؟</ion-label>\r\n                <ion-checkbox formControlName=\"isDelete\" slot=\"start\">\r\n                </ion-checkbox>\r\n              </ion-item>\r\n            </ion-list>\r\n          </ion-card>\r\n\r\n          <ion-button\r\n            class=\"ion-margin\"\r\n            expand=\"block\"\r\n            fill=\"solid\"\r\n            shape=\"round\"\r\n            color=\"success\"\r\n            type=\"submit\"\r\n            [disabled]=\"addForm4.invalid\"\r\n          >\r\n            درج\r\n          </ion-button>\r\n        </form>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row *ngIf=\"segmentSelected === 'Update3'\">\r\n      <ion-col\r\n        size=\"12\"\r\n        offset=\"0\"\r\n        size-md=\"10\"\r\n        offset-md=\"1\"\r\n        size-lg=\"8\"\r\n        offset-lg=\"2\"\r\n        dir=\"rtl\"\r\n      >\r\n        <section *ngIf=\"gearRatio\">\r\n          <ion-item>\r\n            <ion-label>کمپانی</ion-label>\r\n            <ion-select [(ngModel)]=\"carFactoryId\" multiple=\"false\"\r\n            (ionChange)=\"changed()\">\r\n              <ion-select-option\r\n                [value]=\"p.id\"\r\n                *ngFor=\"let p of gearRatio.carFactoryNames\"\r\n                >{{ p.name }}</ion-select-option\r\n              >\r\n            </ion-select>\r\n          </ion-item>\r\n          <ion-item>\r\n            <ion-label>خودرو</ion-label>\r\n            <ion-select [(ngModel)]=\"carModelId\" multiple=\"false\"\r\n            (ionChange)=\"changed2()\">\r\n              <ion-select-option\r\n                [value]=\"c.id\"\r\n                *ngFor=\"let c of getCityList()\"\r\n                >{{ c.name }}</ion-select-option\r\n              >\r\n            </ion-select>\r\n          </ion-item>\r\n        </section>\r\n        <form [formGroup]=\"updateForm3\" (ngSubmit)=\"presentAlertConfirmOnUpdate3()\">\r\n          <ion-card>\r\n            <ion-list>\r\n              <ion-list-header>\r\n                <ion-label>درج مدل خودرو</ion-label>\r\n                <ion-button\r\n                [disabled]=\"updateForm3.invalid\" (click)=\"presentAlertConfirmOnDeleteCarModel()\" color=\"danger\">\r\n                  حذف\r\n                </ion-button>\r\n              </ion-list-header>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\" color=\"light\"\r\n                  >شناسه\r\n                </ion-label>\r\n                <ion-input\r\n                  placeholder=\"شناسه\"\r\n                  formControlName=\"id\"\r\n                  type=\"number\"\r\n                  [disabled]=\"true\"\r\n                ></ion-input>\r\n                <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\" color=\"light\"\r\n                  >مدل خودرو\r\n                </ion-label>\r\n                <ion-input\r\n                  placeholder=\"مدل خودرو\"\r\n                  formControlName=\"name\"\r\n                  type=\"text\"\r\n                ></ion-input>\r\n                <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>غیرفعال؟</ion-label>\r\n                <ion-checkbox formControlName=\"isDelete\" slot=\"start\">\r\n                </ion-checkbox>\r\n              </ion-item>\r\n            </ion-list>\r\n          </ion-card>\r\n\r\n          <ion-button\r\n            class=\"ion-margin\"\r\n            expand=\"block\"\r\n            fill=\"solid\"\r\n            shape=\"round\"\r\n            color=\"success\"\r\n            type=\"submit\"\r\n            [disabled]=\"updateForm3.invalid\"\r\n          >\r\n            درج\r\n          </ion-button>\r\n        </form>\r\n\r\n        <form [formGroup]=\"updateForm4\" (ngSubmit)=\"presentAlertConfirmOnUpdate4()\">\r\n          <ion-card>\r\n            <ion-list>\r\n              <ion-list-header>\r\n                <ion-label>درج کمپانی</ion-label>\r\n                <ion-button\r\n                [disabled]=\"updateForm4.invalid\" (click)=\"presentAlertConfirmOnDeleteCarFactory()\" color=\"danger\">\r\n                  حذف\r\n                </ion-button>\r\n              </ion-list-header>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\" color=\"light\"\r\n                  >شناسه\r\n                </ion-label>\r\n                <ion-input\r\n                  placeholder=\"شناسه\"\r\n                  formControlName=\"id\"\r\n                  type=\"number\"\r\n                  [disabled]=\"true\"\r\n                ></ion-input>\r\n                <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\" color=\"light\"\r\n                  >نام کمپانی\r\n                </ion-label>\r\n                <ion-input\r\n                  placeholder=\"نام کمپانی\"\r\n                  formControlName=\"name\"\r\n                  type=\"text\"\r\n                ></ion-input>\r\n                <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>غیرفعال؟</ion-label>\r\n                <ion-checkbox formControlName=\"isDelete\" slot=\"start\">\r\n                </ion-checkbox>\r\n              </ion-item>\r\n            </ion-list>\r\n          </ion-card>\r\n\r\n          <ion-button\r\n            class=\"ion-margin\"\r\n            expand=\"block\"\r\n            fill=\"solid\"\r\n            shape=\"round\"\r\n            color=\"success\"\r\n            type=\"submit\"\r\n            [disabled]=\"updateForm4.invalid\"\r\n          >\r\n            درج\r\n          </ion-button>\r\n        </form>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <ion-row *ngIf=\"segmentSelected === 'Update'\">\r\n      <ion-col\r\n        size=\"12\"\r\n        offset=\"0\"\r\n        size-md=\"10\"\r\n        offset-md=\"1\"\r\n        size-lg=\"8\"\r\n        offset-lg=\"2\"\r\n        dir=\"rtl\"\r\n      >\r\n        <ion-card>\r\n          <ion-list>\r\n            <ion-list-header>\r\n              <ion-label>لیست دسترسی ها</ion-label>\r\n            </ion-list-header>\r\n            <div *ngIf=\"tunerPluses.length <= 0\">\r\n              <ion-item>\r\n                <ion-label color=\"warning\" class=\"text-center\"\r\n                  >هنوز دسترسی درج نشده است</ion-label\r\n                >\r\n              </ion-item>\r\n            </div>\r\n            <div *ngIf=\"tunerPluses.length > 0\">\r\n              <ion-item\r\n                *ngFor=\"let tunerPluse of tunerPluses; let i = index\"\r\n                button\r\n                (click)=\"onSelect(i)\"\r\n              >\r\n                <ion-label>{{\r\n                  tunerPluse.id + \"- \" + tunerPluse.name\r\n                }}</ion-label>\r\n                <ion-button (click)=\"presentAlertConfirm(i)\">\r\n                  <ion-icon slot=\"icon-only\" name=\"trash-outline\"></ion-icon>\r\n                </ion-button>\r\n              </ion-item>\r\n            </div>\r\n          </ion-list>\r\n        </ion-card>\r\n        <form\r\n          [formGroup]=\"updateForm\"\r\n          (ngSubmit)=\"presentAlertConfirmOnUpdate()\"\r\n        >\r\n          <ion-card>\r\n            <ion-list>\r\n              <ion-list-header>\r\n                <ion-label>ویرایش</ion-label>\r\n              </ion-list-header>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\" color=\"light\"\r\n                  >نام ابزار\r\n                </ion-label>\r\n                <ion-input\r\n                  placeholder=\"نام\"\r\n                  formControlName=\"name\"\r\n                  type=\"text\"\r\n                ></ion-input>\r\n                <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\" color=\"light\">فعال؟ </ion-label>\r\n                <ion-checkbox formControlName=\"isActive\"></ion-checkbox>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\" color=\"light\">رایگان؟ </ion-label>\r\n                <ion-checkbox formControlName=\"isFree\"></ion-checkbox>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label position=\"stacked\" color=\"light\">VIP? </ion-label>\r\n                <ion-checkbox formControlName=\"isVip\"></ion-checkbox>\r\n              </ion-item>\r\n            </ion-list>\r\n          </ion-card>\r\n\r\n          <ion-card>\r\n            <ion-item>\r\n              <ion-label position=\"stacked\" color=\"light\">کد دوره </ion-label>\r\n              <ion-input placeholder=\"9\" type=\"number\" #id></ion-input>\r\n              <ion-icon slot=\"start\" name=\"text-outline\"></ion-icon>\r\n            </ion-item>\r\n            <ion-button\r\n              [disabled]=\"id.value == ''\"\r\n              color=\"success\"\r\n              (click)=\"onAddCourseId(id.value); id.value = ''\"\r\n              expand=\"block\"\r\n              fill=\"clear\"\r\n              shape=\"round\"\r\n            >\r\n              اضافه کردن\r\n            </ion-button>\r\n            <ion-list>\r\n              <ion-list-header>\r\n                <ion-label>کد دوره ها</ion-label>\r\n              </ion-list-header>\r\n              <ion-item *ngFor=\"let id of courseIds; let i = index\">\r\n                <ion-label>{{ id }}</ion-label>\r\n                <ion-button (click)=\"removeId(i)\">\r\n                  <ion-icon slot=\"icon-only\" name=\"trash-outline\"></ion-icon>\r\n                </ion-button>\r\n              </ion-item>\r\n            </ion-list>\r\n          </ion-card>\r\n\r\n          <ion-button\r\n            class=\"ion-margin\"\r\n            expand=\"block\"\r\n            fill=\"solid\"\r\n            shape=\"round\"\r\n            color=\"success\"\r\n            type=\"submit\"\r\n            [disabled]=\"\r\n              updateForm.invalid ||\r\n              selectedIndex === -1 ||\r\n              this.courseIds.length == 0\r\n            \"\r\n          >\r\n            ویرایش\r\n          </ion-button>\r\n        </form>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <app-footer></app-footer>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_view_pages_panel_super-admin-panel_tuner-plus-base_tuner-plus-base_module_ts.js.map