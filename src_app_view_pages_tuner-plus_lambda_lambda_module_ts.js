"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_view_pages_tuner-plus_lambda_lambda_module_ts"],{

/***/ 93903:
/*!***********************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/lambda/lambda-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LambdaRoutingModule": () => (/* binding */ LambdaRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _lambda_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lambda.component */ 91497);




const routes = [{ path: '', component: _lambda_component__WEBPACK_IMPORTED_MODULE_0__.LambdaComponent }];
let LambdaRoutingModule = class LambdaRoutingModule {
};
LambdaRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], LambdaRoutingModule);



/***/ }),

/***/ 91497:
/*!******************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/lambda/lambda.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LambdaComponent": () => (/* binding */ LambdaComponent)
/* harmony export */ });
/* harmony import */ var G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _lambda_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lambda.component.html?ngResource */ 92510);
/* harmony import */ var _lambda_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lambda.component.scss?ngResource */ 31075);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! file-saver */ 65226);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_core_common_G__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/common/G */ 67122);
/* harmony import */ var src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/common/GResponse */ 54021);
/* harmony import */ var src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/common/SharedIonic */ 97112);
/* harmony import */ var src_app_core_common_Urls__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/common/Urls */ 35602);
/* harmony import */ var src_app_data_service_course_course_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/data/service/course/course.service */ 29209);
/* harmony import */ var src_app_data_service_site_Slider_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/data/service/site/Slider.service */ 79519);




/* eslint-disable max-len */

/* eslint-disable guard-for-in */

/* eslint-disable eqeqeq */

/* eslint-disable @typescript-eslint/naming-convention */














let LambdaComponent = class LambdaComponent {
  constructor(fb, router, alertController, loadingController, toastController, siteService, sanitizer, courseService, datePipe) {
    this.fb = fb;
    this.router = router;
    this.alertController = alertController;
    this.loadingController = loadingController;
    this.toastController = toastController;
    this.siteService = siteService;
    this.sanitizer = sanitizer;
    this.courseService = courseService;
    this.datePipe = datePipe;
    this.isShow = false;
    this.isCheck = true;
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
    this.video = 'vOmca';
    this.engineTypeSelected = '1'; // tableSize = 12;
    // tableSizeSelected = '12';

    this.min = 300;
    this.max = 0;
    this.stoich = 0;
    this.outputMode = 'lambda';
    this.narrowbandCenterVoltage = 0.498;
    this.narrowbandLeanVoltage = 0.10;
    this.narrowbandRichVoltage = 0.90;
    this.narrowbandTransition = 0.025;
    this.isShow = false;
    src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.loading(this.loadingController);
    this.check();
  } // tableSizeChanged() {
  //   this.tableSize = +this.tableSizeSelected;
  // }


  exportTable() {
    var _this = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.date = new Date();

      const latestDate = _this.datePipe.transform(_this.date, 'yyyy-MM-dd');

      const latestDateDetail = _this.datePipe.transform(_this.date, 'yyyy-MM-dd-h-mm-ss');

      let tableRpm = ``;
      let tableMap = ``;
      let tableContent = ``;

      for (let i = 1; i < _this.AFR[0].length; i++) {
        const rpm = _this.AFR[0][i];
        tableRpm += rpm + ` \n`;
      }

      for (let i = 1; i < _this.AFR.length; i++) {
        const map1 = _this.AFR[i];

        for (let j = 0; j < map1.length; j++) {
          const map = map1[j];

          if (j == 0) {
            tableMap += map + ` \n`;
          } else {
            tableContent += _this.outputValue(map, i, j) + ` `;
          }
        }

        tableContent += `\n`;
      }

      const content = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
    <tableData xmlns="http://localhost:4300/:table">
    <bibliography author="Nima Sedigh - avalamooz.ir.com" company="SuperTubo" writeDate="` + latestDate + `" />
    <versionInfo fileFormat="1.0"/>
    <table cols="` + _this.form.value.x + `" rows="` + _this.form.value.y + `">
    <xAxis cols="` + _this.form.value.y + `" name="rpm">
             ` + tableRpm + `</xAxis>
    <yAxis name="afrload1" rows="` + _this.form.value.y + `">
             ` + tableMap + `</yAxis>
    <zValues cols="` + _this.form.value.x + `" rows="` + _this.form.value.y + `">
             ` + tableContent + `</zValues>
    </table>
    </tableData>
    `;

      try {
        const blob = new Blob([content], {
          type: 'text/xml;charset=utf-8'
        });
        const tableName = _this.outputMode === 'narrowband' ? 'Narrowband EGO Target Voltage' : 'Lambda Table';
        file_saver__WEBPACK_IMPORTED_MODULE_3__.saveAs(blob, tableName + ' - ' + latestDateDetail + '.table');
      } catch (e) {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(_this.toastController, 'مرورگر شما از این قابلیت پشتیبانی نمیکند');
      }
    })();
  }

  check() {
    var _this2 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.loading(_this2.loadingController);

      _this2.siteService.GetTunerPlusById(16).subscribe(res => {
        if (res.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.SuccessStatus) {
          if (res.data.isActive) {
            if (!res.data.isFree) {
              _this2.courseService.GetUserCoursesId().subscribe(ress => {
                if (ress.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.SuccessStatus) {
                  let found = false;
                  res.data.courseIds.forEach(courseId => {
                    if (ress.data.find(n => n == courseId)) {
                      found = true;

                      _this2.courseService.GetUserTunerPlusAccess().subscribe(resss => {
                        if (resss.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.SuccessStatus) {
                          src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(_this2.loadingController);
                          _this2.isCheck = false;
                        } else {
                          _this2.router.navigateByUrl(src_app_core_common_Urls__WEBPACK_IMPORTED_MODULE_7__.Urls.AccessDeniedTunerPlusUrl);

                          src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(_this2.loadingController);
                        }
                      }, errs => {
                        _this2.router.navigateByUrl(src_app_core_common_Urls__WEBPACK_IMPORTED_MODULE_7__.Urls.AccessDeniedTunerPlusUrl);

                        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(_this2.loadingController);
                      });
                    }
                  });

                  if (!found) {
                    _this2.router.navigateByUrl(src_app_core_common_Urls__WEBPACK_IMPORTED_MODULE_7__.Urls.AccessDeniedTunerPlusUrl);

                    src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(_this2.loadingController);
                  }
                } else {
                  _this2.router.navigateByUrl(src_app_core_common_Urls__WEBPACK_IMPORTED_MODULE_7__.Urls.AccessDeniedTunerPlusUrl);

                  src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(_this2.loadingController);
                }
              }, errs => {
                _this2.router.navigateByUrl(src_app_core_common_Urls__WEBPACK_IMPORTED_MODULE_7__.Urls.AccessDeniedTunerPlusUrl);

                src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(_this2.loadingController);
              });
            } else {
              src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(_this2.loadingController);
              _this2.isCheck = false;
            }
          } else {
            _this2.router.navigateByUrl(src_app_core_common_Urls__WEBPACK_IMPORTED_MODULE_7__.Urls.AccessDeniedTunerPlusUrl);

            src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(_this2.loadingController);
          }
        } else {
          _this2.router.navigateByUrl(src_app_core_common_Urls__WEBPACK_IMPORTED_MODULE_7__.Urls.AccessDeniedTunerPlusUrl);

          src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(_this2.loadingController);
        }
      }, err => {
        _this2.router.navigateByUrl(src_app_core_common_Urls__WEBPACK_IMPORTED_MODULE_7__.Urls.AccessDeniedTunerPlusUrl);

        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(_this2.loadingController);
      });
    })();
  }

  goTop() {
    this.content.scrollToTop(3000);
  }

  forwardUrl(url) {
    window.location.href = url;
  }

  ngOnInit() {
    this.instagram = src_app_core_common_G__WEBPACK_IMPORTED_MODULE_4__.G.Instagram;
    this.twiter = src_app_core_common_G__WEBPACK_IMPORTED_MODULE_4__.G.Twiter;
    this.facebook = src_app_core_common_G__WEBPACK_IMPORTED_MODULE_4__.G.Facebook;
    this.telegram = src_app_core_common_G__WEBPACK_IMPORTED_MODULE_4__.G.Telegram;
    this.youtube = src_app_core_common_G__WEBPACK_IMPORTED_MODULE_4__.G.Youtube;
    this.pinterest = src_app_core_common_G__WEBPACK_IMPORTED_MODULE_4__.G.Pinterest;
    this.linkedin = src_app_core_common_G__WEBPACK_IMPORTED_MODULE_4__.G.Linkedin;
    this.twitch = src_app_core_common_G__WEBPACK_IMPORTED_MODULE_4__.G.Twitch;
    this.aparat = src_app_core_common_G__WEBPACK_IMPORTED_MODULE_4__.G.Aparat;
    this.discord = src_app_core_common_G__WEBPACK_IMPORTED_MODULE_4__.G.Discord;
    this.form = this.fb.group({
      idleRpm: [900, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.min(300), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.max(3000)]],
      rpmRedline: [7000, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.min(3000), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.max(12000)]],
      peakHp: [100, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.min(30), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.max(1000)]],
      peakHpRpm: [5000, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.min(2000), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.max(12000)]],
      peakTorqu: [170, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.min(20), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.max(1000)]],
      peakTorquRpm: [3000, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.min(1000), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.max(12000)]],
      engineVolum: [2000, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.min(600), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.max(12000)]],
      boost: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.max(40)]],
      x: [12, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.min(4), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.max(50)]],
      y: [12, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.min(4), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.max(50)]],
      sto: [14.7, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.max(60)]]
    });
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

    this.router.navigate(['Home', 'Search'], {
      queryParams: {
        title: this.queryText
      }
    });
  }

  onCalc() {
    if (!this.form.valid) {
      return;
    }

    src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.loading(this.loadingController);
    this.courseService.GetUserTunerPlusAccess().subscribe(resss => {
      if (resss.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_5__.GResponse.SuccessStatus) {
        if (!this.check_errors()) {
          src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController);
        } else {
          this.stoich = 100 - +this.form.value.sto * 100 / 14.7;
          this.make_AFR_table();
          this.rpm_bins(this.form.value.rpmRedline, this.form.value.idleRpm);
          this.map_bins(this.form.value.boost);
          this.compute_AFRs();
          this.calcMinMax();
          this.isShow = true;
          src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController);
        }
      } else {
        this.router.navigateByUrl(src_app_core_common_Urls__WEBPACK_IMPORTED_MODULE_7__.Urls.AccessDeniedTunerPlusUrl);
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController);
      }
    }, errs => {
      this.router.navigateByUrl(src_app_core_common_Urls__WEBPACK_IMPORTED_MODULE_7__.Urls.AccessDeniedTunerPlusUrl);
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController);
    });
  }

  calcMinMax() {
    var _this3 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.min = 300;
      _this3.max = 0;

      for (let i = 1; i < _this3.AFR.length; i++) {
        // tslint:disable-next-line: prefer-for-of
        for (let j = 1; j < _this3.AFR[i].length; j++) {
          const ve = _this3.outputValue(_this3.AFR[i][j], i, j);

          if (ve < _this3.min) {
            _this3.min = ve;
          }

          if (ve > _this3.max) {
            _this3.max = ve;
          }
        }
      }

      _this3.avg = (_this3.max - _this3.min) / 2 + _this3.min;
    })();
  }

  calcColor(ve, j) {
    let r = 135;
    let g = 135;
    let b = 135;

    if (j == 0) {
      return 'black';
    } else {
      if (ve >= this.avg) {
        r = (ve - this.min) * 100 / (this.max - this.min) * 255 / 100;
        r += 3;
        g = (100 - (ve - this.avg) * 100 / (this.max - this.avg)) * 255 / 100;
        g += 34;

        if (g < 135) {
          g = 135;
        }

        if (g > 255) {
          g = 255;
        }

        if (r < 135) {
          r = 135;
        }

        if (r > 255) {
          r = 255;
        }
      } else {
        b = (100 - (ve - this.min) * 100 / (this.max - this.min)) * 255 / 100;
        b += 3;
        g = (ve - this.min) * 100 / (this.avg - this.min) * 255 / 100;
        g += 34;

        if (g < 135) {
          g = 135;
        }

        if (g > 255) {
          g = 255;
        }

        if (b < 135) {
          b = 135;
        }

        if (b > 255) {
          b = 255;
        }
      }

      return 'rgb(' + r.toString() + ', ' + g.toString() + ', ' + b.toString() + ')';
    }
  }

  get outputTable() {
    if (!this.AFR) {
      return [];
    }

    return this.AFR.map((row, i) => row.map((value, j) => this.outputValue(value, i, j)));
  }

  onOutputModeChanged() {
    this.calcMinMax();
  }

  onNarrowbandSettingChanged() {
    if (this.narrowbandLeanVoltage >= this.narrowbandRichVoltage) {
      this.narrowbandLeanVoltage = Math.max(0, this.narrowbandRichVoltage - 0.05);
    }

    this.calcMinMax();
  }

  outputValue(value, row, column) {
    if (row === 0 || column === 0 || this.outputMode === 'lambda') {
      return value;
    }

    const lambda = Number(value);

    if (!isFinite(lambda)) {
      return value;
    } // A narrowband zirconia sensor changes very steeply around lambda 1.0.
    // This logistic approximation is intended for an EGO target voltage table,
    // not for measuring AFR away from stoichiometric.


    const transition = Math.max(0.005, Number(this.narrowbandTransition));
    const span = this.narrowbandRichVoltage - this.narrowbandLeanVoltage;
    const normalized = 1 / (1 + Math.exp((lambda - 1) / transition));
    const rawVoltage = this.narrowbandLeanVoltage + span * normalized;
    const centeredVoltage = rawVoltage + (this.narrowbandCenterVoltage - (this.narrowbandLeanVoltage + span / 2));
    return +Math.max(0, Math.min(1, centeredVoltage)).toFixed(3);
  }

  make_AFR_table() {
    var _this4 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Create AFR Array
      // AFR[i][j] is the volumetric efficiency(VE) * gamma  value
      // for the ith MAP bin, jth RPM bin (i,j=1..8)
      // where gamma=14.7/afr for gasoline.
      // AFR[i][0] is the ith MAP bin value (i=1..8)
      // AFR[0][j] is the jth RPM bin value (j=1..8)
      // AFR[0][0] is the kPa row with the value nearest 100kPa (i.e. the 'normally aspirated' row)
      //          and is it determined in function 'map_bins' - set but not used in this code version
      _this4.AFR = new Array(_this4.form.value.x + 1);

      for (let i = 0; i <= _this4.form.value.x; i++) {
        _this4.AFR[i] = new Array(_this4.form.value.y + 1);
      } // Initialize AFR Array
      // tslint:disable-next-line: forin


      for (const j in _this4.AFR) {
        for (let k = 0; k <= _this4.form.value.y; k++) {
          _this4.AFR[j][k] = 0;
        }
      }

      return;
    })();
  }

  rpm_bins(maxrpm, idlerpm) {
    var _this5 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Calculate RPM bins
      _this5.AFR[0][1] = Math.round((parseFloat(idlerpm) - 150) / 100) * 100;
      _this5.AFR[0][2] = Math.round((parseFloat(idlerpm) + 350) / 100) * 100;
      const rpm_bin_step = (parseFloat(maxrpm) - _this5.AFR[0][2]) / (_this5.form.value.y * 1.0 - 2);

      for (let i = 3; i <= _this5.form.value.y * 1.0 - 1; i++) {
        _this5.AFR[0][i] = Math.round((_this5.AFR[0][2] + (i - 2) * rpm_bin_step) / 100) * 100;
      }

      _this5.AFR[0][_this5.form.value.y * 1.0] = Math.round(parseFloat(maxrpm) / 100) * 100;
      return;
    })();
  }

  map_bins(maxmap) {
    var _this6 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Calculate MAP bins
      // First bin is 25 kPa. Rest are evenly spaced to 'boost' value (maxmap).
      _this6.AFR[1][0] = 25; // Always start at 25 kPa

      const map_bin_step = (parseFloat(maxmap) * (101.3 / 14.7) + 101.3 - _this6.AFR[1][0]) / (_this6.form.value.x * 1.0 - 1);

      for (let i = 2; i <= _this6.form.value.x * 1.0 - 1; i++) {
        _this6.AFR[i][0] = Math.round((_this6.AFR[1][0] + (i - 1) * map_bin_step) / 2) * 2;

        if (_this6.AFR[i][0] < 115) {
          _this6.AFR[0][0] = i;
        }

        _this6.AFR[_this6.form.value.x * 1.0][0] = Math.round(parseFloat(maxmap) * (101.3 / 14.7) + 101.3);
      }

      return;
    })();
  }

  compute_AFRs() {
    var _this7 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Get form values
      const peak_tq = _this7.form.value.peakTorqu / 1.3558179999442195;
      const peak_hp = _this7.form.value.peakHp;
      const maxmap = _this7.form.value.boost;
      const displacement = _this7.form.value.engineVolum / 1000 * 61; // swept volume in cubic inches

      const peak_hp_rpm = _this7.form.value.peakHpRpm;
      const peak_torque_rpm = _this7.form.value.peakTorquRpm; // Compute torque at peak horsepower and torque - adjusted for any boost

      let compressor_efficiency = 1;

      if (maxmap > 0) {
        compressor_efficiency = 0.6;
      }

      const na_tq = peak_tq * (14.7 / (14.7 + maxmap * compressor_efficiency));
      const na_hp = peak_hp * (14.7 / (14.7 + maxmap * compressor_efficiency)) * (5250 / peak_hp_rpm); // Compute specific output ranges

      if (na_hp / displacement > 1.2 || maxmap > 8) {
        // high output
        _this7.minAFR = 1200; // target AFR x100
      } else if (na_hp / displacement > 0.7) {
        // medium output
        _this7.minAFR = 1250;
      } else {
        // low output
        _this7.minAFR = 1300;
      } // Set K - the 'step' degradation ration for AFR to kPa


      const K = -0.02; // for every 100 kPa, lower the AFR by 2.0:1

      if (_this7.engineTypeSelected === '1') {
        for (let i = 1; i <= _this7.form.value.x * 1.0; i++) {
          for (let j = 1; j <= _this7.form.value.y * 1.0; j++) {
            compressor_efficiency = 1;

            if (_this7.AFR[i][0] > 100) {
              compressor_efficiency = 0.6;
            }

            const f = (100 - (100 - _this7.AFR[i][0]) * K) / 100;

            if (j <= 2) {
              _this7.AFR[i][j] = (_this7.minAFR + 80) / 100;
            } else {
              // not idling
              if (_this7.AFR[0][j] < peak_torque_rpm) {
                _this7.AFR[i][j] = _this7.minAFR + 60;
              } else if (_this7.AFR[0][j] > peak_hp_rpm) {
                _this7.AFR[i][j] = _this7.minAFR;
              } else {
                _this7.AFR[i][j] = _this7.minAFR + 60 / (peak_hp_rpm - peak_torque_rpm) * (peak_hp_rpm - _this7.AFR[0][j]);
              } // adjust for MAP


              _this7.AFR[i][j] = _this7.AFR[i][j] / 100 - (100 - _this7.AFR[i][0]) * K;
            }

            _this7.AFR[i][j] = +((Math.round((_this7.AFR[i][j] - _this7.AFR[i][j] * _this7.stoich / 100) * 10) / 10 - 0.00005) / 14.7).toFixed(3);
          }
        }
      } else if (_this7.engineTypeSelected === '2') {
        for (let i = 1; i <= _this7.form.value.x * 1.0; i++) {
          for (let j = 1; j <= _this7.form.value.y * 1.0; j++) {
            compressor_efficiency = 1;

            if (_this7.AFR[i][0] > 100) {
              compressor_efficiency = 0.6;
            }

            const f = (100 - (100 - _this7.AFR[i][0]) * K) / 100;

            if (j <= 2) {
              _this7.AFR[i][j] = (_this7.minAFR + 80) / 100;
            } else {
              // not idling
              if (_this7.AFR[0][j] < peak_torque_rpm) {
                _this7.AFR[i][j] = _this7.minAFR + 60;
              } else if (_this7.AFR[0][j] > peak_hp_rpm) {
                _this7.AFR[i][j] = _this7.minAFR;
              } else {
                _this7.AFR[i][j] = _this7.minAFR + 60 / (peak_hp_rpm - peak_torque_rpm) * (peak_hp_rpm - _this7.AFR[0][j]);
              } // adjust for MAP


              _this7.AFR[i][j] = _this7.AFR[i][j] / 100 - (100 - _this7.AFR[i][0]) * K;
            }

            _this7.AFR[i][j] = +((Math.round((_this7.AFR[i][j] - _this7.AFR[i][j] * _this7.stoich / 100) * 10) / 10 - 1.00005) / 14.7).toFixed(3);
          }
        }
      } // Fill the AFR values
      // (but not the bin values)
      // for (let i = 1; i <= (this.form.value.x * 1.0); i++) {
      //   for (let j = 1; j <= (this.form.value.y * 1.0); j++) {
      //     compressor_efficiency = 1;
      //     if (this.AFR[i][0] > 100) { compressor_efficiency = 0.6; }
      //     const f = (100 - (100 - this.AFR[i][0]) * K) / 100;
      //     if (j <= 2) {
      //       this.AFR[i][j] = (this.minAFR + 80) / 100;
      //     }
      //     else { // not idling
      //       if (this.AFR[0][j] < peak_torque_rpm) {
      //         this.AFR[i][j] = (this.minAFR + 60);
      //       }
      //       else if (this.AFR[0][j] > peak_hp_rpm) {
      //         this.AFR[i][j] = this.minAFR;
      //       }
      //       else {
      //         this.AFR[i][j] = this.minAFR + 60 / (peak_hp_rpm - peak_torque_rpm) * (peak_hp_rpm - this.AFR[0][j]);
      //       }
      //       // adjust for MAP
      //       this.AFR[i][j] = (this.AFR[i][j] / 100) - (100 - this.AFR[i][0]) * K;
      //     }
      //     this.AFR[i][j] = +(((Math.round(this.AFR[i][j] * 10) / 10) - 0.00005) / 14.7).toFixed(3);
      //   }
      // }

    })();
  }

  checkURL() {
    const url = 'https://www.aparat.com/video/video/embed/videohash/' + this.video + '/vt/frame';
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  checkVideoUrl() {
    const url = 'https://www.aparat.com/v/' + this.video;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  check_errors() {
    var _this8 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // check for
      // idle_rpm > 300
      // max_rpm < 12000
      // boost < 21psi
      // 25 < idle_map > 4
      // phprpm > phprpm
      // peak_tq > peak_hp*5250/phprpm
      // peak_hp/displacement < 3.0 hp/ci
      // errors is a string with all error messages
      const err_idle_rpm = _this8.form.value.idleRpm;
      const err_maxrpm = _this8.form.value.rpmRedline;
      const err_peak_tq = _this8.form.value.peakTorqu / 1.3558179999442195;
      const err_tq_rpm = _this8.form.value.peakTorquRpm;
      const err_boost = _this8.form.value.boost;
      const err_peak_hp = _this8.form.value.peakHp;
      const err_hp_rpm = _this8.form.value.peakHpRpm;
      const err_displacement = _this8.form.value.engineVolum / 1000 * 61; // swept volume in cubic inches

      let errors = '';

      if (err_idle_rpm < 300) {
        errors = 'Idle rpm set too low. ';
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(_this8.toastController, 'دور آرام نباید کمتر از 300 باشد');
      } else if (err_maxrpm > 12000) {
        errors = errors + 'Maximum RPM is set too high. ';
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(_this8.toastController, 'دور موتور کاتاف نباید بیشتر از 12000 باشد');
      } else if (err_boost > 40) {
        errors = errors + 'Maximum boost is set too high for standard MegaSquirt<sup>&reg;</sup> MPX4250 MAP sensor. ';
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(_this8.toastController, 'بوست توربو نباید بیشتر از 40 باشد');
      } else if (err_tq_rpm > err_hp_rpm) {
        errors = errors + 'RPM for peak torque occurs above RPM for peak horsepower. ';
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(_this8.toastController, 'دور موتور اوج گشتاور نباید بیشتر از توان باشد');
      } else if (err_peak_hp * 5250 / err_hp_rpm > err_peak_tq) {
        errors = errors + 'Torque at maximum HP is higher than at \'peak\' torque! ';
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(_this8.toastController, 'گشتاور در اوج توان نباید بیشتر از اوج گشتاور باشد');
      } else if (err_peak_hp / err_displacement > 3) {
        errors = errors + 'Specific output is too high to model. ';
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(_this8.toastController, 'خروجی خاص برای مدل سازی خیلی زیاد است');
      } else if (errors === '') {
        return false;
      } else {
        return true;
      }
    })();
  }

  onBack() {
    this.isShow = false;
  }

  onInfo(type) {
    switch (type) {
      case 'idleRpm':
        this.presentActiveAlertConfirm('دور موتور در زمانی که پدال گاز رها است را وارد کنید. معمولا عددی بین 700 الی 1300');
        break;

      case 'rpmRedline':
        this.presentActiveAlertConfirm('بیشترین دور موتور تعیین شده برای خودرو که در محدوده قرمز صفحه کیلومتر نشان داده میشود');
        break;

      case 'peakHp':
        this.presentActiveAlertConfirm('بیشینه ی توان موتور در سر فلایول برحسب اسب بخار');
        break;

      case 'peakHpRpm':
        this.presentActiveAlertConfirm('دور موتوری که بیشینه ی توان موتور در آن بدست آمده است');
        break;

      case 'peakTorqu':
        this.presentActiveAlertConfirm('بیشینه ی گشتاور موتور در سر فلایول برحسب نیوتن متر');
        break;

      case 'peakTorquRpm':
        this.presentActiveAlertConfirm('دور موتوری که بیشینه ی گشتاور موتور در آن بدست آمده است');
        break;

      case 'engineVolum':
        this.presentActiveAlertConfirm('حجم موتور بر حسب سی سی');
        break;

      case 'boost':
        this.presentActiveAlertConfirm('اگر خودرو تنفس طبیعی است و توربو یا سوپرشارژ ندارد،مقدار صفر وارد شود. در غیر این صورت بیشترین فشار هوایی که توربو یا سوپرشارژ به موتور اعمال میکند وارد شود بر حسب پی اس آی');
        break;

      case 'x':
        this.presentActiveAlertConfirm('تعداد سطر های جدول یا همان x جدول میباشد');
        break;

      case 'y':
        this.presentActiveAlertConfirm('تعداد ستون های جدول یا همان y جدول میباشد');
        break;

      case 'sto':
        this.presentActiveAlertConfirm('ضریب استوکیومتری سوخت مصرفی. برای بنزین معمولی 14.7');
        break;

      case 'nbCenter':
        this.presentActiveAlertConfirm('ولتاژ سوئیچ سنسور در Lambda=1. مقدار رایج جدول Narrowband EGO در TunerStudio حدود 0.498 ولت است، اما دیتاشیت سنسور اولویت دارد.');
        break;

      case 'nbLean':
        this.presentActiveAlertConfirm('ولتاژ تقریبی سنسور در سمت مخلوط رقیق. در سنسور زیرکونیا 0 تا 1 ولت معمولاً نزدیک 0.1 ولت در نظر گرفته می‌شود.');
        break;

      case 'nbRich':
        this.presentActiveAlertConfirm('ولتاژ تقریبی سنسور در سمت مخلوط غنی. در سنسور زیرکونیا 0 تا 1 ولت معمولاً نزدیک 0.9 ولت در نظر گرفته می‌شود.');
        break;

      case 'nbTransition':
        this.presentActiveAlertConfirm('پهنای گذار منحنی اطراف Lambda=1. Narrowband در این ناحیه به‌سرعت از Lean به Rich سوئیچ می‌کند و برای سنجش دقیق AFR مناسب نیست.');
        break;

      default:
        break;
    }
  }

  presentActiveAlertConfirm(msg = '') {
    var _this9 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this9.alertController.create({
        cssClass: 'main-alert',
        header: 'توضیحات',
        message: msg,
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

};

LambdaComponent.ctorParameters = () => [{
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.AlertController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.LoadingController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ToastController
}, {
  type: src_app_data_service_site_Slider_service__WEBPACK_IMPORTED_MODULE_9__.SliderService
}, {
  type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.DomSanitizer
}, {
  type: src_app_data_service_course_course_service__WEBPACK_IMPORTED_MODULE_8__.CourseService
}, {
  type: _angular_common__WEBPACK_IMPORTED_MODULE_14__.DatePipe
}];

LambdaComponent.propDecorators = {
  content: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.ViewChild,
    args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonContent]
  }]
};
LambdaComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_16__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.Component)({
  selector: 'app-lambda',
  template: _lambda_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_lambda_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], LambdaComponent);


/***/ }),

/***/ 58752:
/*!***************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/lambda/lambda.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LambdaModule": () => (/* binding */ LambdaModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/view/components/app/page-header/page-header.module */ 19916);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _lambda_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lambda-routing.module */ 93903);
/* harmony import */ var _lambda_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lambda.component */ 91497);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/view/components/app/footer/footer.module */ 60412);
/* harmony import */ var src_app_view_components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/view/components/common/loading/loading.module */ 90876);










let LambdaModule = class LambdaModule {
};
LambdaModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [_lambda_component__WEBPACK_IMPORTED_MODULE_2__.LambdaComponent],
        imports: [
            src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__.PageHeaderModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _lambda_routing_module__WEBPACK_IMPORTED_MODULE_1__.LambdaRoutingModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            src_app_view_components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_4__.LoadingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
            src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__.FooterModule
        ],
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe]
    })
], LambdaModule);



/***/ }),

/***/ 31075:
/*!*******************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/lambda/lambda.component.scss?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = ".h_iframe-aparat_embed_frame {\n  position: relative;\n}\n\n.h_iframe-aparat_embed_frame .ratio {\n  display: block;\n  width: 100%;\n  height: auto;\n}\n\n.h_iframe-aparat_embed_frame iframe {\n  border-radius: 15px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.video-span {\n  display: block;\n  padding-top: 57%;\n}\n\n.output-mode-card {\n  margin: 12px;\n  border-radius: 16px;\n}\n\n.narrowband-settings {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 8px;\n  margin-top: 16px;\n}\n\n.narrowband-settings ion-item {\n  --background: var(--ion-color-light);\n  --color: var(--ion-color-light-contrast);\n  --border-radius: 10px;\n}\n\n.narrowband-settings ion-label,\n.narrowband-settings ion-input {\n  color: var(--ion-color-light-contrast) !important;\n  --color: var(--ion-color-light-contrast);\n  --placeholder-color: var(--ion-color-light-contrast);\n}\n\n.narrowband-settings ion-note {\n  grid-column: 1/-1;\n  display: block;\n  padding: 12px;\n  line-height: 1.8;\n  border-radius: 10px;\n  background: rgba(var(--ion-color-warning-rgb), 0.12);\n}\n\n@media (max-width: 768px) {\n  .narrowband-settings {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n\n@media (max-width: 480px) {\n  .narrowband-settings {\n    grid-template-columns: 1fr;\n  }\n}\n\n.st-output {\n  --matrix-accent: var(--ion-color-danger);\n  position: relative;\n  max-width: 1500px;\n  margin: clamp(16px, 3vw, 40px) auto 48px;\n  padding: clamp(16px, 2.5vw, 30px);\n  overflow: hidden;\n  color: var(--ion-text-color);\n  background: linear-gradient(145deg, rgba(var(--ion-color-danger-rgb), 0.07), transparent 36%), var(--ion-item-background, var(--ion-background-color));\n  border: 1px solid rgba(var(--ion-color-medium-rgb), 0.24);\n  border-radius: 24px;\n  box-shadow: 0 22px 56px rgba(0, 0, 0, 0.12);\n}\n\n.st-output::before {\n  content: \"\";\n  position: absolute;\n  inset: 0 0 auto;\n  height: 4px;\n  background: linear-gradient(90deg, transparent, var(--matrix-accent), transparent);\n}\n\n.st-output__header,\n.st-output__badge,\n.st-output__axes,\n.st-output__axes span,\n.st-output__footer,\n.st-output__actions {\n  display: flex;\n  align-items: center;\n}\n\n.st-output__header {\n  justify-content: space-between;\n  gap: 16px;\n  margin-bottom: 18px;\n}\n\n.st-output__eyebrow {\n  margin: 0 0 8px;\n  color: var(--matrix-accent);\n  font-size: 0.73rem;\n  font-weight: 800;\n  letter-spacing: 0.15em;\n}\n\n.st-output__header h2 {\n  margin: 0;\n  font-size: clamp(1.3rem, 2.3vw, 1.85rem);\n  font-weight: 800;\n}\n\n.st-output__description {\n  margin: 8px 0 0;\n  color: var(--ion-color-medium);\n  font-size: 0.9rem;\n}\n\n.st-output__badge {\n  flex: none;\n  gap: 9px;\n  padding: 10px 14px;\n  color: var(--ion-text-color);\n  background: rgba(var(--ion-color-medium-rgb), 0.09);\n  border: 1px solid rgba(var(--ion-color-medium-rgb), 0.2);\n  border-radius: 12px;\n  font-size: 0.84rem;\n  font-weight: 700;\n  font-feature-settings: \"tnum\";\n  font-variant-numeric: tabular-nums;\n}\n\n.st-output__badge ion-icon {\n  color: var(--matrix-accent);\n  font-size: 1.1rem;\n}\n\n.st-output__axes {\n  flex-wrap: wrap;\n  gap: 9px 20px;\n  margin-bottom: 14px;\n  color: var(--ion-color-medium);\n  font-size: 0.82rem;\n}\n\n.st-output__axes span {\n  gap: 7px;\n}\n\n.st-output__axes ion-icon {\n  color: var(--matrix-accent);\n  font-size: 1rem;\n}\n\n.st-output__viewport {\n  max-height: min(70vh, 720px);\n  overflow: auto;\n  padding: 8px;\n  background: #111418;\n  border: 1px solid #30363d;\n  border-radius: 16px;\n  scrollbar-color: #6b737d #171b20;\n}\n\n.st-output__viewport:focus-visible {\n  outline: 3px solid var(--matrix-accent);\n  outline-offset: 3px;\n}\n\n.st-output__table {\n  width: max-content;\n  min-width: 100%;\n  border-collapse: separate;\n  border-spacing: 3px;\n  font-feature-settings: \"tnum\";\n  font-variant-numeric: tabular-nums;\n  text-align: center;\n}\n\n.st-output__table th,\n.st-output__table td {\n  min-width: 76px;\n  height: 48px;\n  padding: 8px 12px;\n  border-radius: 7px;\n  white-space: nowrap;\n}\n\n.st-output__table thead th {\n  position: sticky;\n  top: 0;\n  z-index: 2;\n  color: #f6f7f8;\n  background: #303740;\n  box-shadow: inset 0 -2px 0 #ba3438;\n  font-size: 0.87rem;\n  font-weight: 800;\n}\n\n.st-output__table tbody th {\n  position: sticky;\n  left: 0;\n  z-index: 1;\n  color: #f6f7f8;\n  background: #303740;\n  box-shadow: inset -2px 0 0 #ba3438;\n  font-size: 0.9rem;\n  font-weight: 800;\n}\n\n.st-output__table thead .st-output__corner {\n  left: 0;\n  z-index: 3;\n  min-width: 112px;\n  color: #fff;\n  background: #a8232b;\n  box-shadow: none;\n  font-size: 0.76rem;\n}\n\n.st-output__table tbody th:first-child {\n  min-width: 112px;\n}\n\n.st-output__table td {\n  color: #172028;\n  font-size: 1rem;\n  font-weight: 800;\n  transition: box-shadow 160ms ease, filter 160ms ease;\n}\n\n.st-output__table tbody tr:hover td {\n  filter: brightness(1.05);\n}\n\n.st-output__table tbody tr:hover th {\n  background: #424b55;\n}\n\n.st-output__table td:hover {\n  box-shadow: inset 0 0 0 3px rgba(15, 20, 25, 0.55);\n}\n\n.st-output__footer {\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin: 14px 0 20px;\n  color: var(--ion-color-medium);\n  font-size: 0.79rem;\n}\n\n.st-output__actions {\n  justify-content: flex-end;\n  flex-wrap: wrap;\n  gap: 10px;\n  padding-top: 18px;\n  border-top: 1px solid rgba(var(--ion-color-medium-rgb), 0.2);\n}\n\n.st-output__actions ion-button {\n  min-width: 138px;\n  margin: 0;\n  font-weight: 700;\n}\n\n.st-output__back {\n  --color: var(--ion-text-color);\n  --border-color: rgba(var(--ion-color-medium-rgb), 0.4);\n}\n\n.st-output__download {\n  --background: var(--matrix-accent);\n  --color: var(--ion-color-danger-contrast);\n  --box-shadow: 0 8px 20px rgba(var(--ion-color-danger-rgb), 0.24);\n}\n\n@media (max-width: 600px) {\n  .st-output {\n    margin: 12px 10px 32px;\n    padding: 16px 12px;\n    border-radius: 18px;\n  }\n\n  .st-output__header {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n\n  .st-output__viewport {\n    padding: 5px;\n    border-radius: 12px;\n  }\n\n  .st-output__table th,\n.st-output__table td {\n    min-width: 64px;\n    height: 42px;\n    padding: 7px 9px;\n    font-size: 0.85rem;\n  }\n\n  .st-output__table thead .st-output__corner,\n.st-output__table tbody th:first-child {\n    min-width: 94px;\n  }\n\n  .st-output__actions ion-button {\n    flex: 1;\n    min-width: 0;\n  }\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .st-output__table td {\n    transition: none;\n  }\n}\n\n:host-context(.dark-theme) {\n  color-scheme: dark;\n  color: var(--tuner-text);\n  --tuner-page: #11151e;\n  --tuner-surface: #1c2230;\n  --tuner-soft: #252e3d;\n  --tuner-border: #465269;\n  --tuner-text: #edf1f8;\n  --tuner-muted: #b2bfd1;\n  --tuner-header: rgba(28, 34, 48, 0.94);\n  --tuner-overlay: rgba(28, 34, 48, 0.95);\n  --tuner-purple-text: #c4b5fd;\n  --tuner-purple-soft: #302444;\n  --tuner-purple-border: #72579b;\n  --tuner-info-text: #93c5fd;\n  --tuner-info-soft: #1d304c;\n  --tuner-info-border: #466b9a;\n  --tuner-warning-text: #fcd477;\n  --tuner-warning-soft: #3b3020;\n  --tuner-warning-border: #93743d;\n  --tuner-success-text: #86efac;\n  --tuner-success-soft: #19392e;\n  --tuner-success-border: #417d60;\n  --tuner-danger-text: #fda4af;\n  --tuner-danger-soft: #402631;\n  --tuner-danger-border: #985367;\n  --tuner-teal-text: #7de4d4;\n  --tuner-teal-soft: #193a3a;\n  --tuner-teal-border: #437f7c;\n}\n\n:host-context(.dark-theme) input:not([type=range]):not([type=checkbox]):not([type=radio]):not([type=button]):not([type=submit]):not([type=file]),\n:host-context(.dark-theme) textarea,\n:host-context(.dark-theme) select {\n  color: var(--tuner-text);\n  background-color: var(--tuner-soft);\n}\n\n:host-context(.dark-theme) input::placeholder, :host-context(.dark-theme) textarea::placeholder {\n  color: var(--tuner-muted);\n  opacity: 0.75;\n}\n\n:host-context(.dark-theme) ion-header.learning-header {\n  --background: var(--tuner-header);\n  background: var(--tuner-header);\n  border-bottom-color: var(--tuner-border);\n}\n\n:host-context(.dark-theme) ion-content {\n  --background: var(--tuner-page);\n  --color: var(--tuner-text);\n}\n\n:host-context(.dark-theme) ion-card:not([color]), :host-context(.dark-theme) ion-list, :host-context(.dark-theme) ion-item:not([color]), :host-context(.dark-theme) ion-item-divider:not([color]) {\n  --background: var(--tuner-surface);\n  --color: var(--tuner-text);\n  --border-color: var(--tuner-border);\n}\n\n:host-context(.dark-theme) ion-list {\n  background: var(--tuner-surface);\n}\n\n:host-context(.dark-theme) ion-card-title, :host-context(.dark-theme) ion-card-subtitle {\n  color: var(--tuner-text);\n}\n\n:host-context(.dark-theme) ion-card[color=lightest], :host-context(.dark-theme) ion-item[color=lightest], :host-context(.dark-theme) ion-fab-button[color=lightest] {\n  --ion-color-base: var(--tuner-surface);\n  --ion-color-contrast: var(--tuner-text);\n  --ion-color-shade: var(--tuner-soft);\n  --ion-color-tint: var(--tuner-soft);\n}\n\n:host-context(.dark-theme) ion-text[color=dark], :host-context(.dark-theme) ion-label[color=dark] {\n  --ion-color-base: var(--tuner-text);\n}\n\n:host-context(.dark-theme) .narrowband-settings ion-item {\n  --background: var(--tuner-soft);\n  --color: var(--tuner-text);\n}\n\n:host-context(.dark-theme) .narrowband-settings ion-label, :host-context(.dark-theme) .narrowband-settings ion-input {\n  color: var(--tuner-text) !important;\n  --color: var(--tuner-text);\n  --placeholder-color: var(--tuner-muted);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhbWJkYS5jb21wb25lbnQuc2NzcyIsIi4uXFxfb3V0cHV0LW1hdHJpeC5zY3NzIiwiLi5cXF90aGVtZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0Usa0JBQUE7QUFIRjs7QUFNQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUhGOztBQU1BO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFIRjs7QUFNQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQUhGOztBQU1BO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSxhQUFBO0VBQ0EsZ0RBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7QUFIRjs7QUFNQTtFQUNFLG9DQUFBO0VBQ0Esd0NBQUE7RUFDQSxxQkFBQTtBQUhGOztBQU1BOztFQUVFLGlEQUFBO0VBQ0Esd0NBQUE7RUFDQSxvREFBQTtBQUhGOztBQU1BO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvREFBQTtBQUhGOztBQU1BO0VBQ0U7SUFDRSxnREFBQTtFQUhGO0FBQ0Y7O0FBTUE7RUFDRTtJQUNFLDBCQUFBO0VBSkY7QUFDRjs7QUNuRUE7RUFDRSx3Q0FBQTtFQUVBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSx3Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLHNKQUFBO0VBRUEseURBQUE7RUFDQSxtQkFBQTtFQUNBLDJDQUFBO0FEbUVGOztBQ2hFQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0ZBQUE7QURtRUY7O0FDaEVBOzs7Ozs7RUFNRSxhQUFBO0VBQ0EsbUJBQUE7QURtRUY7O0FDaEVBO0VBQ0UsOEJBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QURtRUY7O0FDaEVBO0VBQ0UsZUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FEbUVGOztBQ2hFQTtFQUNFLFNBQUE7RUFDQSx3Q0FBQTtFQUNBLGdCQUFBO0FEbUVGOztBQ2hFQTtFQUNFLGVBQUE7RUFDQSw4QkFBQTtFQUNBLGlCQUFBO0FEbUVGOztBQ2hFQTtFQUNFLFVBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtFQUNBLG1EQUFBO0VBQ0Esd0RBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtFQUFBLGtDQUFBO0FEbUVGOztBQ2hFQTtFQUNFLDJCQUFBO0VBQ0EsaUJBQUE7QURtRUY7O0FDaEVBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7QURtRUY7O0FDaEVBO0VBQ0UsUUFBQTtBRG1FRjs7QUNoRUE7RUFDRSwyQkFBQTtFQUNBLGVBQUE7QURtRUY7O0FDaEVBO0VBQ0UsNEJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0FEbUVGOztBQ2hFQTtFQUNFLHVDQUFBO0VBQ0EsbUJBQUE7QURtRUY7O0FDaEVBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQUEsa0NBQUE7RUFDQSxrQkFBQTtBRG1FRjs7QUNoRUE7O0VBRUUsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QURtRUY7O0FDaEVBO0VBQ0UsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBRG1FRjs7QUNoRUE7RUFDRSxnQkFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FEbUVGOztBQ2hFQTtFQUNFLE9BQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FEbUVGOztBQ2hFQTtFQUNFLGdCQUFBO0FEbUVGOztBQ2hFQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvREFBQTtBRG1FRjs7QUNoRUE7RUFDRSx3QkFBQTtBRG1FRjs7QUNoRUE7RUFDRSxtQkFBQTtBRG1FRjs7QUNoRUE7RUFDRSxrREFBQTtBRG1FRjs7QUNoRUE7RUFDRSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0FEbUVGOztBQ2hFQTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUNBLDREQUFBO0FEbUVGOztBQ2hFQTtFQUNFLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FEbUVGOztBQ2hFQTtFQUNFLDhCQUFBO0VBQ0Esc0RBQUE7QURtRUY7O0FDaEVBO0VBQ0Usa0NBQUE7RUFDQSx5Q0FBQTtFQUNBLGdFQUFBO0FEbUVGOztBQ2hFQTtFQUNFO0lBQ0Usc0JBQUE7SUFDQSxrQkFBQTtJQUNBLG1CQUFBO0VEbUVGOztFQ2hFQTtJQUNFLHVCQUFBO0lBQ0Esc0JBQUE7RURtRUY7O0VDaEVBO0lBQ0UsWUFBQTtJQUNBLG1CQUFBO0VEbUVGOztFQ2hFQTs7SUFFRSxlQUFBO0lBQ0EsWUFBQTtJQUNBLGdCQUFBO0lBQ0Esa0JBQUE7RURtRUY7O0VDaEVBOztJQUVFLGVBQUE7RURtRUY7O0VDaEVBO0lBQ0UsT0FBQTtJQUNBLFlBQUE7RURtRUY7QUFDRjs7QUNoRUE7RUFDRTtJQUNFLGdCQUFBO0VEa0VGO0FBQ0Y7O0FFNVRFO0VBQ0Usa0JBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLHNDQUFBO0VBQ0EsdUNBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsK0JBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsK0JBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7QUY4VEo7O0FFM1RJOzs7RUFHRSx3QkFBQTtFQUNBLG1DQUFBO0FGNlROOztBRTFUSTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtBRjRUTjs7QUV6VEk7RUFDRSxpQ0FBQTtFQUNBLCtCQUFBO0VBQ0Esd0NBQUE7QUYyVE47O0FFelRJO0VBQWMsK0JBQUE7RUFBaUMsMEJBQUE7QUY2VG5EOztBRTVUSTtFQUNFLGtDQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQ0FBQTtBRjhUTjs7QUU1VEk7RUFBVyxnQ0FBQTtBRitUZjs7QUU5VEk7RUFBb0Msd0JBQUE7QUZpVXhDOztBRWhVSTtFQUNFLHNDQUFBO0VBQ0EsdUNBQUE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO0FGa1VOOztBRWhVSTtFQUFrRCxtQ0FBQTtBRm1VdEQ7O0FBelRFO0VBQVcsK0JBQUE7RUFBaUMsMEJBQUE7QUE4VDlDOztBQTdURTtFQUNFLG1DQUFBO0VBQ0EsMEJBQUE7RUFDQSx1Q0FBQTtBQStUSiIsImZpbGUiOiJsYW1iZGEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi90aGVtZSc7XHJcblxyXG5cclxuXHJcbi5oX2lmcmFtZS1hcGFyYXRfZW1iZWRfZnJhbWUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmhfaWZyYW1lLWFwYXJhdF9lbWJlZF9mcmFtZSAucmF0aW8ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLmhfaWZyYW1lLWFwYXJhdF9lbWJlZF9mcmFtZSBpZnJhbWUge1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnZpZGVvLXNwYW4ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBhZGRpbmctdG9wOiA1NyU7XHJcbn1cclxuXHJcbi5vdXRwdXQtbW9kZS1jYXJkIHtcclxuICBtYXJnaW46IDEycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcclxufVxyXG5cclxuLm5hcnJvd2JhbmQtc2V0dGluZ3Mge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgbWlubWF4KDAsIDFmcikpO1xyXG4gIGdhcDogOHB4O1xyXG4gIG1hcmdpbi10b3A6IDE2cHg7XHJcbn1cclxuXHJcbi5uYXJyb3diYW5kLXNldHRpbmdzIGlvbi1pdGVtIHtcclxuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0KTtcclxuICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5uYXJyb3diYW5kLXNldHRpbmdzIGlvbi1sYWJlbCxcclxuLm5hcnJvd2JhbmQtc2V0dGluZ3MgaW9uLWlucHV0IHtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0KSAhaW1wb3J0YW50O1xyXG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodC1jb250cmFzdCk7XHJcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0KTtcclxufVxyXG5cclxuLm5hcnJvd2JhbmQtc2V0dGluZ3MgaW9uLW5vdGUge1xyXG4gIGdyaWQtY29sdW1uOiAxIC8gLTE7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcGFkZGluZzogMTJweDtcclxuICBsaW5lLWhlaWdodDogMS44O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3Itd2FybmluZy1yZ2IpLCAuMTIpO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAubmFycm93YmFuZC1zZXR0aW5ncyB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW5tYXgoMCwgMWZyKSk7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAubmFycm93YmFuZC1zZXR0aW5ncyB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICB9XHJcbn1cclxuQGltcG9ydCAnLi4vb3V0cHV0LW1hdHJpeCc7XHJcblxyXG5AaW5jbHVkZSB0dW5lci1kYXJrLXRoZW1lO1xyXG5cclxuOmhvc3QtY29udGV4dCguZGFyay10aGVtZSkgLm5hcnJvd2JhbmQtc2V0dGluZ3Mge1xyXG4gIGlvbi1pdGVtIHsgLS1iYWNrZ3JvdW5kOiB2YXIoLS10dW5lci1zb2Z0KTsgLS1jb2xvcjogdmFyKC0tdHVuZXItdGV4dCk7IH1cclxuICBpb24tbGFiZWwsIGlvbi1pbnB1dCB7XHJcbiAgICBjb2xvcjogdmFyKC0tdHVuZXItdGV4dCkgIWltcG9ydGFudDtcclxuICAgIC0tY29sb3I6IHZhcigtLXR1bmVyLXRleHQpO1xyXG4gICAgLS1wbGFjZWhvbGRlci1jb2xvcjogdmFyKC0tdHVuZXItbXV0ZWQpO1xyXG4gIH1cclxufVxyXG4iLCIuc3Qtb3V0cHV0IHtcbiAgLS1tYXRyaXgtYWNjZW50OiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcblxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1heC13aWR0aDogMTUwMHB4O1xuICBtYXJnaW46IGNsYW1wKDE2cHgsIDN2dywgNDBweCkgYXV0byA0OHB4O1xuICBwYWRkaW5nOiBjbGFtcCgxNnB4LCAyLjV2dywgMzBweCk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvcik7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNDVkZWcsIHJnYmEodmFyKC0taW9uLWNvbG9yLWRhbmdlci1yZ2IpLCAwLjA3KSwgdHJhbnNwYXJlbnQgMzYlKSxcbiAgICB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvcikpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKHZhcigtLWlvbi1jb2xvci1tZWRpdW0tcmdiKSwgMC4yNCk7XG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gIGJveC1zaGFkb3c6IDAgMjJweCA1NnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5zdC1vdXRwdXQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGluc2V0OiAwIDAgYXV0bztcbiAgaGVpZ2h0OiA0cHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgdHJhbnNwYXJlbnQsIHZhcigtLW1hdHJpeC1hY2NlbnQpLCB0cmFuc3BhcmVudCk7XG59XG5cbi5zdC1vdXRwdXRfX2hlYWRlcixcbi5zdC1vdXRwdXRfX2JhZGdlLFxuLnN0LW91dHB1dF9fYXhlcyxcbi5zdC1vdXRwdXRfX2F4ZXMgc3Bhbixcbi5zdC1vdXRwdXRfX2Zvb3Rlcixcbi5zdC1vdXRwdXRfX2FjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc3Qtb3V0cHV0X19oZWFkZXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogMThweDtcbn1cblxuLnN0LW91dHB1dF9fZXllYnJvdyB7XG4gIG1hcmdpbjogMCAwIDhweDtcbiAgY29sb3I6IHZhcigtLW1hdHJpeC1hY2NlbnQpO1xuICBmb250LXNpemU6IDAuNzNyZW07XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjE1ZW07XG59XG5cbi5zdC1vdXRwdXRfX2hlYWRlciBoMiB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiBjbGFtcCgxLjNyZW0sIDIuM3Z3LCAxLjg1cmVtKTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuLnN0LW91dHB1dF9fZGVzY3JpcHRpb24ge1xuICBtYXJnaW46IDhweCAwIDA7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG59XG5cbi5zdC1vdXRwdXRfX2JhZGdlIHtcbiAgZmxleDogbm9uZTtcbiAgZ2FwOiA5cHg7XG4gIHBhZGRpbmc6IDEwcHggMTRweDtcbiAgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yKTtcbiAgYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItbWVkaXVtLXJnYiksIDAuMDkpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKHZhcigtLWlvbi1jb2xvci1tZWRpdW0tcmdiKSwgMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgZm9udC1zaXplOiAwLjg0cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXZhcmlhbnQtbnVtZXJpYzogdGFidWxhci1udW1zO1xufVxuXG4uc3Qtb3V0cHV0X19iYWRnZSBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1tYXRyaXgtYWNjZW50KTtcbiAgZm9udC1zaXplOiAxLjFyZW07XG59XG5cbi5zdC1vdXRwdXRfX2F4ZXMge1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogOXB4IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDE0cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgZm9udC1zaXplOiAwLjgycmVtO1xufVxuXG4uc3Qtb3V0cHV0X19heGVzIHNwYW4ge1xuICBnYXA6IDdweDtcbn1cblxuLnN0LW91dHB1dF9fYXhlcyBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1tYXRyaXgtYWNjZW50KTtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4uc3Qtb3V0cHV0X192aWV3cG9ydCB7XG4gIG1heC1oZWlnaHQ6IG1pbig3MHZoLCA3MjBweCk7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBwYWRkaW5nOiA4cHg7XG4gIGJhY2tncm91bmQ6ICMxMTE0MTg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzMDM2M2Q7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIHNjcm9sbGJhci1jb2xvcjogIzZiNzM3ZCAjMTcxYjIwO1xufVxuXG4uc3Qtb3V0cHV0X192aWV3cG9ydDpmb2N1cy12aXNpYmxlIHtcbiAgb3V0bGluZTogM3B4IHNvbGlkIHZhcigtLW1hdHJpeC1hY2NlbnQpO1xuICBvdXRsaW5lLW9mZnNldDogM3B4O1xufVxuXG4uc3Qtb3V0cHV0X190YWJsZSB7XG4gIHdpZHRoOiBtYXgtY29udGVudDtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xuICBib3JkZXItc3BhY2luZzogM3B4O1xuICBmb250LXZhcmlhbnQtbnVtZXJpYzogdGFidWxhci1udW1zO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zdC1vdXRwdXRfX3RhYmxlIHRoLFxuLnN0LW91dHB1dF9fdGFibGUgdGQge1xuICBtaW4td2lkdGg6IDc2cHg7XG4gIGhlaWdodDogNDhweDtcbiAgcGFkZGluZzogOHB4IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLnN0LW91dHB1dF9fdGFibGUgdGhlYWQgdGgge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDI7XG4gIGNvbG9yOiAjZjZmN2Y4O1xuICBiYWNrZ3JvdW5kOiAjMzAzNzQwO1xuICBib3gtc2hhZG93OiBpbnNldCAwIC0ycHggMCAjYmEzNDM4O1xuICBmb250LXNpemU6IDAuODdyZW07XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5cbi5zdC1vdXRwdXRfX3RhYmxlIHRib2R5IHRoIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTtcbiAgY29sb3I6ICNmNmY3Zjg7XG4gIGJhY2tncm91bmQ6ICMzMDM3NDA7XG4gIGJveC1zaGFkb3c6IGluc2V0IC0ycHggMCAwICNiYTM0Mzg7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBmb250LXdlaWdodDogODAwO1xufVxuXG4uc3Qtb3V0cHV0X190YWJsZSB0aGVhZCAuc3Qtb3V0cHV0X19jb3JuZXIge1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAzO1xuICBtaW4td2lkdGg6IDExMnB4O1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogI2E4MjMyYjtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgZm9udC1zaXplOiAwLjc2cmVtO1xufVxuXG4uc3Qtb3V0cHV0X190YWJsZSB0Ym9keSB0aDpmaXJzdC1jaGlsZCB7XG4gIG1pbi13aWR0aDogMTEycHg7XG59XG5cbi5zdC1vdXRwdXRfX3RhYmxlIHRkIHtcbiAgY29sb3I6ICMxNzIwMjg7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAxNjBtcyBlYXNlLCBmaWx0ZXIgMTYwbXMgZWFzZTtcbn1cblxuLnN0LW91dHB1dF9fdGFibGUgdGJvZHkgdHI6aG92ZXIgdGQge1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4wNSk7XG59XG5cbi5zdC1vdXRwdXRfX3RhYmxlIHRib2R5IHRyOmhvdmVyIHRoIHtcbiAgYmFja2dyb3VuZDogIzQyNGI1NTtcbn1cblxuLnN0LW91dHB1dF9fdGFibGUgdGQ6aG92ZXIge1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAzcHggcmdiYSgxNSwgMjAsIDI1LCAwLjU1KTtcbn1cblxuLnN0LW91dHB1dF9fZm9vdGVyIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogMTBweDtcbiAgbWFyZ2luOiAxNHB4IDAgMjBweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICBmb250LXNpemU6IDAuNzlyZW07XG59XG5cbi5zdC1vdXRwdXRfX2FjdGlvbnMge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogMTBweDtcbiAgcGFkZGluZy10b3A6IDE4cHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKHZhcigtLWlvbi1jb2xvci1tZWRpdW0tcmdiKSwgMC4yKTtcbn1cblxuLnN0LW91dHB1dF9fYWN0aW9ucyBpb24tYnV0dG9uIHtcbiAgbWluLXdpZHRoOiAxMzhweDtcbiAgbWFyZ2luOiAwO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uc3Qtb3V0cHV0X19iYWNrIHtcbiAgLS1jb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IpO1xuICAtLWJvcmRlci1jb2xvcjogcmdiYSh2YXIoLS1pb24tY29sb3ItbWVkaXVtLXJnYiksIDAuNCk7XG59XG5cbi5zdC1vdXRwdXRfX2Rvd25sb2FkIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1tYXRyaXgtYWNjZW50KTtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdCk7XG4gIC0tYm94LXNoYWRvdzogMCA4cHggMjBweCByZ2JhKHZhcigtLWlvbi1jb2xvci1kYW5nZXItcmdiKSwgMC4yNCk7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuc3Qtb3V0cHV0IHtcbiAgICBtYXJnaW46IDEycHggMTBweCAzMnB4O1xuICAgIHBhZGRpbmc6IDE2cHggMTJweDtcbiAgICBib3JkZXItcmFkaXVzOiAxOHB4O1xuICB9XG5cbiAgLnN0LW91dHB1dF9faGVhZGVyIHtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5cbiAgLnN0LW91dHB1dF9fdmlld3BvcnQge1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICB9XG5cbiAgLnN0LW91dHB1dF9fdGFibGUgdGgsXG4gIC5zdC1vdXRwdXRfX3RhYmxlIHRkIHtcbiAgICBtaW4td2lkdGg6IDY0cHg7XG4gICAgaGVpZ2h0OiA0MnB4O1xuICAgIHBhZGRpbmc6IDdweCA5cHg7XG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xuICB9XG5cbiAgLnN0LW91dHB1dF9fdGFibGUgdGhlYWQgLnN0LW91dHB1dF9fY29ybmVyLFxuICAuc3Qtb3V0cHV0X190YWJsZSB0Ym9keSB0aDpmaXJzdC1jaGlsZCB7XG4gICAgbWluLXdpZHRoOiA5NHB4O1xuICB9XG5cbiAgLnN0LW91dHB1dF9fYWN0aW9ucyBpb24tYnV0dG9uIHtcbiAgICBmbGV4OiAxO1xuICAgIG1pbi13aWR0aDogMDtcbiAgfVxufVxuXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xuICAuc3Qtb3V0cHV0X190YWJsZSB0ZCB7XG4gICAgdHJhbnNpdGlvbjogbm9uZTtcbiAgfVxufVxuIiwiLy8gS2VlcCB0aGUgb3JpZ2luYWwgbGlnaHQgY29sb3IgYXQgZWFjaCBjYWxsIHNpdGUuIFRva2VucyBleGlzdCBvbmx5IGluIGRhcmsgbW9kZS5cbkBmdW5jdGlvbiB0dW5lci1jb2xvcigkcm9sZSwgJGxpZ2h0KSB7XG4gIEByZXR1cm4gdmFyKC0tdHVuZXItI3skcm9sZX0sICN7JGxpZ2h0fSk7XG59XG5cbkBtaXhpbiB0dW5lci1kYXJrLXRoZW1lIHtcbiAgOmhvc3QtY29udGV4dCguZGFyay10aGVtZSkge1xuICAgIGNvbG9yLXNjaGVtZTogZGFyaztcbiAgICBjb2xvcjogdmFyKC0tdHVuZXItdGV4dCk7XG4gICAgLS10dW5lci1wYWdlOiAjMTExNTFlO1xuICAgIC0tdHVuZXItc3VyZmFjZTogIzFjMjIzMDtcbiAgICAtLXR1bmVyLXNvZnQ6ICMyNTJlM2Q7XG4gICAgLS10dW5lci1ib3JkZXI6ICM0NjUyNjk7XG4gICAgLS10dW5lci10ZXh0OiAjZWRmMWY4O1xuICAgIC0tdHVuZXItbXV0ZWQ6ICNiMmJmZDE7XG4gICAgLS10dW5lci1oZWFkZXI6IHJnYmEoMjgsIDM0LCA0OCwgMC45NCk7XG4gICAgLS10dW5lci1vdmVybGF5OiByZ2JhKDI4LCAzNCwgNDgsIDAuOTUpO1xuICAgIC0tdHVuZXItcHVycGxlLXRleHQ6ICNjNGI1ZmQ7XG4gICAgLS10dW5lci1wdXJwbGUtc29mdDogIzMwMjQ0NDtcbiAgICAtLXR1bmVyLXB1cnBsZS1ib3JkZXI6ICM3MjU3OWI7XG4gICAgLS10dW5lci1pbmZvLXRleHQ6ICM5M2M1ZmQ7XG4gICAgLS10dW5lci1pbmZvLXNvZnQ6ICMxZDMwNGM7XG4gICAgLS10dW5lci1pbmZvLWJvcmRlcjogIzQ2NmI5YTtcbiAgICAtLXR1bmVyLXdhcm5pbmctdGV4dDogI2ZjZDQ3NztcbiAgICAtLXR1bmVyLXdhcm5pbmctc29mdDogIzNiMzAyMDtcbiAgICAtLXR1bmVyLXdhcm5pbmctYm9yZGVyOiAjOTM3NDNkO1xuICAgIC0tdHVuZXItc3VjY2Vzcy10ZXh0OiAjODZlZmFjO1xuICAgIC0tdHVuZXItc3VjY2Vzcy1zb2Z0OiAjMTkzOTJlO1xuICAgIC0tdHVuZXItc3VjY2Vzcy1ib3JkZXI6ICM0MTdkNjA7XG4gICAgLS10dW5lci1kYW5nZXItdGV4dDogI2ZkYTRhZjtcbiAgICAtLXR1bmVyLWRhbmdlci1zb2Z0OiAjNDAyNjMxO1xuICAgIC0tdHVuZXItZGFuZ2VyLWJvcmRlcjogIzk4NTM2NztcbiAgICAtLXR1bmVyLXRlYWwtdGV4dDogIzdkZTRkNDtcbiAgICAtLXR1bmVyLXRlYWwtc29mdDogIzE5M2EzYTtcbiAgICAtLXR1bmVyLXRlYWwtYm9yZGVyOiAjNDM3ZjdjO1xuXG4gICAgLy8gTmF0aXZlIGNvbnRyb2xzIHdpdGhvdXQgYW4gZXhwbGljaXQgbGlnaHQgYmFja2dyb3VuZCBuZWVkIGEgZGFyayBzdXJmYWNlIHRvby5cbiAgICBpbnB1dDpub3QoW3R5cGU9J3JhbmdlJ10pOm5vdChbdHlwZT0nY2hlY2tib3gnXSk6bm90KFt0eXBlPSdyYWRpbyddKTpub3QoW3R5cGU9J2J1dHRvbiddKTpub3QoW3R5cGU9J3N1Ym1pdCddKTpub3QoW3R5cGU9J2ZpbGUnXSksXG4gICAgdGV4dGFyZWEsXG4gICAgc2VsZWN0IHtcbiAgICAgIGNvbG9yOiB2YXIoLS10dW5lci10ZXh0KTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXR1bmVyLXNvZnQpO1xuICAgIH1cblxuICAgIGlucHV0OjpwbGFjZWhvbGRlciwgdGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10dW5lci1tdXRlZCk7XG4gICAgICBvcGFjaXR5OiAwLjc1O1xuICAgIH1cblxuICAgIGlvbi1oZWFkZXIubGVhcm5pbmctaGVhZGVyIHtcbiAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0tdHVuZXItaGVhZGVyKTtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXR1bmVyLWhlYWRlcik7XG4gICAgICBib3JkZXItYm90dG9tLWNvbG9yOiB2YXIoLS10dW5lci1ib3JkZXIpO1xuICAgIH1cbiAgICBpb24tY29udGVudCB7IC0tYmFja2dyb3VuZDogdmFyKC0tdHVuZXItcGFnZSk7IC0tY29sb3I6IHZhcigtLXR1bmVyLXRleHQpOyB9XG4gICAgaW9uLWNhcmQ6bm90KFtjb2xvcl0pLCBpb24tbGlzdCwgaW9uLWl0ZW06bm90KFtjb2xvcl0pLCBpb24taXRlbS1kaXZpZGVyOm5vdChbY29sb3JdKSB7XG4gICAgICAtLWJhY2tncm91bmQ6IHZhcigtLXR1bmVyLXN1cmZhY2UpO1xuICAgICAgLS1jb2xvcjogdmFyKC0tdHVuZXItdGV4dCk7XG4gICAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0tdHVuZXItYm9yZGVyKTtcbiAgICB9XG4gICAgaW9uLWxpc3QgeyBiYWNrZ3JvdW5kOiB2YXIoLS10dW5lci1zdXJmYWNlKTsgfVxuICAgIGlvbi1jYXJkLXRpdGxlLCBpb24tY2FyZC1zdWJ0aXRsZSB7IGNvbG9yOiB2YXIoLS10dW5lci10ZXh0KTsgfVxuICAgIGlvbi1jYXJkW2NvbG9yPSdsaWdodGVzdCddLCBpb24taXRlbVtjb2xvcj0nbGlnaHRlc3QnXSwgaW9uLWZhYi1idXR0b25bY29sb3I9J2xpZ2h0ZXN0J10ge1xuICAgICAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0tdHVuZXItc3VyZmFjZSk7XG4gICAgICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0tdHVuZXItdGV4dCk7XG4gICAgICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0tdHVuZXItc29mdCk7XG4gICAgICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS10dW5lci1zb2Z0KTtcbiAgICB9XG4gICAgaW9uLXRleHRbY29sb3I9J2RhcmsnXSwgaW9uLWxhYmVsW2NvbG9yPSdkYXJrJ10geyAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS10dW5lci10ZXh0KTsgfVxuICB9XG59XG4iXX0= */";

/***/ }),

/***/ 92510:
/*!*******************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/lambda/lambda.component.html?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"interior-header\" translucent=\"true\">\n  <app-loading></app-loading>\n  <app-page-header fallback=\"/TunerPlus\" [defaultBack]=\"false\">\n<ion-buttons page-back><ion-back-button text=\"\" icon=\"arrow-back-outline\"\r\n        color=\"lightest\"\r\n        defaultHref=\"/TunerPlus\"\r\n      ></ion-back-button></ion-buttons>\n<span page-title dir=\"rtl\" *ngIf=\"!showSearchbar\" class=\"title-size no-padding\"\r\n      >محاسبه جدول لامبدا (Lambda - Remap)</span>\n<ion-buttons page-actions slot=\"end\" *ngIf=\"!showSearchbar\">\r\n      <ion-button (click)=\"showSearchbar = true\">\r\n        <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\n<ion-searchbar\r\n      dir=\"rtl\"\r\n      *ngIf=\"showSearchbar\"\r\n      showCancelButton=\"always\"\r\n      [(ngModel)]=\"queryText\"\r\n      placeholder=\"جستجوی آموزشگاه\"\r\n      (ionCancel)=\"onCancel()\"\r\n      (keyup.enter)=\"search()\"\r\n    ></ion-searchbar>\n\n  </app-page-header>\n</ion-header>\r\n\r\n<ion-content>\r\n  <Section *ngIf=\"!isCheck\">\r\n    <ion-grid fixed *ngIf=\"!isShow\">\r\n      <ion-row>\r\n        <ion-col\r\n          dir=\"rtl\"\r\n          size=\"12\"\r\n          offset=\"0\"\r\n          size-md=\"10\"\r\n          offset-md=\"1\"\r\n          size-lg=\"8\"\r\n          offset-lg=\"2\"\r\n        >\r\n          <ion-card>\r\n            <!-- <ion-item>\r\n                <ion-label>ابعاد جدول</ion-label>\r\n                <ion-select\r\n                  (ionChange)=\"tableSizeChanged()\"\r\n                  [(ngModel)]=\"tableSizeSelected\"\r\n                  value=\"16\"\r\n                >\r\n                  <ion-select-option value=\"16\">16*16</ion-select-option>\r\n                  <ion-select-option value=\"12\">12*12</ion-select-option>\r\n                  <ion-select-option value=\"9\">9*9</ion-select-option>\r\n                  <ion-select-option value=\"8\">8*8</ion-select-option>\r\n                </ion-select>\r\n              </ion-item> -->\r\n            <ion-item>\r\n              <ion-label>نوع موتور</ion-label>\r\n              <ion-select\r\n                [(ngModel)]=\"engineTypeSelected\"\r\n                value=\"1\"\r\n              >\r\n                <ion-select-option value=\"1\">پیستونی</ion-select-option>\r\n                <ion-select-option value=\"2\">روتاری</ion-select-option>\r\n              </ion-select>\r\n            </ion-item>\r\n\r\n            <form [formGroup]=\"form\" (ngSubmit)=\"onCalc()\">\r\n              <ion-card-header color=\"primary\">\r\n                <ion-card-title class=\"text-center\"\r\n                  >محاسبه جدول لامبدا (Lambda - Remap)</ion-card-title\r\n                >\r\n              </ion-card-header>\r\n              <ion-list>\r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon\r\n                    slot=\"start\"\r\n                    name=\"ellipsis-vertical-outline\"\r\n                  ></ion-icon>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >تعداد سطر جدول</ion-label\r\n                  >\r\n                  <ion-input placeholder=\"12\" formControlName=\"x\" type=\"number\">\r\n                  </ion-input>\r\n                  <ion-button\r\n                    size=\"large\"\r\n                    fill=\"clear\"\r\n                    shape=\"round\"\r\n                    color=\"twitter\"\r\n                    slot=\"end\"\r\n                    (click)=\"onInfo('x')\"\r\n                  >\r\n                    <ion-icon\r\n                      size=\"large\"\r\n                      slot=\"icon-only\"\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon\r\n                    slot=\"start\"\r\n                    name=\"ellipsis-horizontal-outline\"\r\n                  ></ion-icon>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >تعداد ستون جدول</ion-label\r\n                  >\r\n                  <ion-input placeholder=\"12\" formControlName=\"y\" type=\"number\">\r\n                  </ion-input>\r\n                  <ion-button\r\n                    size=\"large\"\r\n                    fill=\"clear\"\r\n                    shape=\"round\"\r\n                    color=\"twitter\"\r\n                    slot=\"end\"\r\n                    (click)=\"onInfo('y')\"\r\n                  >\r\n                    <ion-icon\r\n                      size=\"large\"\r\n                      slot=\"icon-only\"\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n\r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon\r\n                    color=\"danger\"\r\n                    slot=\"start\"\r\n                    name=\"flask-outline\"\r\n                  ></ion-icon>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >ضریب استوکیومتری</ion-label\r\n                  >\r\n                  <ion-input\r\n                    placeholder=\"14.7\"\r\n                    formControlName=\"sto\"\r\n                    type=\"number\"\r\n                  >\r\n                  </ion-input>\r\n                  <ion-button\r\n                    size=\"large\"\r\n                    fill=\"clear\"\r\n                    shape=\"round\"\r\n                    color=\"twitter\"\r\n                    slot=\"end\"\r\n                    (click)=\"onInfo('sto')\"\r\n                  >\r\n                    <ion-icon\r\n                      size=\"large\"\r\n                      slot=\"icon-only\"\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon\r\n                    color=\"success\"\r\n                    slot=\"start\"\r\n                    name=\"speedometer-outline\"\r\n                  ></ion-icon>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >دور آرام (RPM)</ion-label\r\n                  >\r\n                  <ion-input\r\n                    placeholder=\"900\"\r\n                    formControlName=\"idleRpm\"\r\n                    type=\"number\"\r\n                  >\r\n                  </ion-input>\r\n                  <ion-button\r\n                    size=\"large\"\r\n                    fill=\"clear\"\r\n                    shape=\"round\"\r\n                    color=\"twitter\"\r\n                    slot=\"end\"\r\n                    (click)=\"onInfo('idleRpm')\"\r\n                  >\r\n                    <ion-icon\r\n                      size=\"large\"\r\n                      slot=\"icon-only\"\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n\r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon\r\n                    color=\"danger\"\r\n                    slot=\"start\"\r\n                    name=\"speedometer-outline\"\r\n                  ></ion-icon>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >دور موتور کاتاف</ion-label\r\n                  >\r\n                  <ion-input\r\n                    placeholder=\"6000\"\r\n                    formControlName=\"rpmRedline\"\r\n                    type=\"number\"\r\n                  >\r\n                  </ion-input>\r\n                  <ion-button\r\n                    size=\"large\"\r\n                    fill=\"clear\"\r\n                    shape=\"round\"\r\n                    color=\"twitter\"\r\n                    slot=\"end\"\r\n                    (click)=\"onInfo('rpmRedline')\"\r\n                  >\r\n                    <ion-icon\r\n                      size=\"large\"\r\n                      slot=\"icon-only\"\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n\r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon\r\n                    color=\"warning\"\r\n                    slot=\"start\"\r\n                    name=\"flame-outline\"\r\n                  ></ion-icon>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >اوج توان (HP)</ion-label\r\n                  >\r\n                  <ion-input\r\n                    placeholder=\"100\"\r\n                    formControlName=\"peakHp\"\r\n                    type=\"number\"\r\n                  >\r\n                  </ion-input>\r\n                  <ion-button\r\n                    size=\"large\"\r\n                    fill=\"clear\"\r\n                    shape=\"round\"\r\n                    color=\"twitter\"\r\n                    slot=\"end\"\r\n                    (click)=\"onInfo('peakHp')\"\r\n                  >\r\n                    <ion-icon\r\n                      size=\"large\"\r\n                      slot=\"icon-only\"\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n\r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon\r\n                    color=\"danger\"\r\n                    slot=\"start\"\r\n                    name=\"speedometer-outline\"\r\n                  ></ion-icon>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >دوره موتوره اوج توان</ion-label\r\n                  >\r\n                  <ion-input\r\n                    placeholder=\"5000\"\r\n                    formControlName=\"peakHpRpm\"\r\n                    type=\"number\"\r\n                  >\r\n                  </ion-input>\r\n                  <ion-button\r\n                    size=\"large\"\r\n                    fill=\"clear\"\r\n                    shape=\"round\"\r\n                    color=\"twitter\"\r\n                    slot=\"end\"\r\n                    (click)=\"onInfo('peakHpRpm')\"\r\n                  >\r\n                    <ion-icon\r\n                      size=\"large\"\r\n                      slot=\"icon-only\"\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n\r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon\r\n                    color=\"warning\"\r\n                    slot=\"start\"\r\n                    name=\"flash-outline\"\r\n                  ></ion-icon>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >اوج گشتاور (Nm)</ion-label\r\n                  >\r\n                  <ion-input\r\n                    placeholder=\"170\"\r\n                    formControlName=\"peakTorqu\"\r\n                    type=\"number\"\r\n                  >\r\n                  </ion-input>\r\n                  <ion-button\r\n                    size=\"large\"\r\n                    fill=\"clear\"\r\n                    shape=\"round\"\r\n                    color=\"twitter\"\r\n                    slot=\"end\"\r\n                    (click)=\"onInfo('peakTorqu')\"\r\n                  >\r\n                    <ion-icon\r\n                      size=\"large\"\r\n                      slot=\"icon-only\"\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n\r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon\r\n                    color=\"danger\"\r\n                    slot=\"start\"\r\n                    name=\"speedometer-outline\"\r\n                  ></ion-icon>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >دوره موتوره اوج گشتاور</ion-label\r\n                  >\r\n                  <ion-input\r\n                    placeholder=\"3000\"\r\n                    formControlName=\"peakTorquRpm\"\r\n                    type=\"number\"\r\n                  >\r\n                  </ion-input>\r\n                  <ion-button\r\n                    size=\"large\"\r\n                    fill=\"clear\"\r\n                    shape=\"round\"\r\n                    color=\"twitter\"\r\n                    slot=\"end\"\r\n                    (click)=\"onInfo('peakTorquRpm')\"\r\n                  >\r\n                    <ion-icon\r\n                      size=\"large\"\r\n                      slot=\"icon-only\"\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n\r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon\r\n                    color=\"success\"\r\n                    slot=\"start\"\r\n                    name=\"cube-outline\"\r\n                  ></ion-icon>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >حجم موتور (cc)</ion-label\r\n                  >\r\n                  <ion-input\r\n                    placeholder=\"2000\"\r\n                    formControlName=\"engineVolum\"\r\n                    type=\"number\"\r\n                  >\r\n                  </ion-input>\r\n                  <ion-button\r\n                    size=\"large\"\r\n                    fill=\"clear\"\r\n                    shape=\"round\"\r\n                    color=\"twitter\"\r\n                    slot=\"end\"\r\n                    (click)=\"onInfo('engineVolum')\"\r\n                  >\r\n                    <ion-icon\r\n                      size=\"large\"\r\n                      slot=\"icon-only\"\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n\r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon\r\n                    color=\"instagram\"\r\n                    slot=\"start\"\r\n                    name=\"rocket-outline\"\r\n                  ></ion-icon>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >بوست توربو (PSI)</ion-label\r\n                  >\r\n                  <ion-input\r\n                    placeholder=\"0\"\r\n                    formControlName=\"boost\"\r\n                    type=\"number\"\r\n                  >\r\n                  </ion-input>\r\n                  <ion-button\r\n                    size=\"large\"\r\n                    fill=\"clear\"\r\n                    shape=\"round\"\r\n                    color=\"twitter\"\r\n                    slot=\"end\"\r\n                    (click)=\"onInfo('boost')\"\r\n                  >\r\n                    <ion-icon\r\n                      size=\"large\"\r\n                      slot=\"icon-only\"\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n              </ion-list>\r\n\r\n              <ion-button\r\n                class=\"ion-margin\"\r\n                expand=\"block\"\r\n                fill=\"solid\"\r\n                shape=\"round\"\r\n                color=\"success\"\r\n                type=\"submit\"\r\n                [disabled]=\"form.invalid\"\r\n              >\r\n                محاسبه\r\n              </ion-button>\r\n\r\n              <ion-button\r\n                class=\"ion-margin\"\r\n                expand=\"block\"\r\n                fill=\"clear\"\r\n                shape=\"round\"\r\n                color=\"warning\"\r\n                (click)=\"form.reset()\"\r\n              >\r\n                ریست\r\n              </ion-button>\r\n            </form>\r\n          </ion-card>\r\n          <ion-card>\r\n            <ion-item>\r\n              <ion-label\r\n                >ویدیو آموزش استفاده از محاسبه جدول لامبدا (Lambda -\r\n                Remap)</ion-label\r\n              >\r\n              <ion-icon\r\n                color=\"success\"\r\n                slot=\"start\"\r\n                name=\"arrow-down-circle-outline\"\r\n              ></ion-icon>\r\n            </ion-item>\r\n\r\n            <div class=\"h_iframe-aparat_embed_frame\">\r\n              <span class=\"video-span\"></span\r\n              ><iframe\r\n                [src]=\"checkURL()\"\r\n                title=\"ویدیو آموزش استفاده از محاسبه جدول لامبدا (Lambda - Remap) تیونر پلاس ویژه اول آموز\"\r\n                allowfullscreen=\"true\"\r\n                webkitallowfullscreen=\"true\"\r\n                mozallowfullscreen=\"true\"\r\n              ></iframe>\r\n            </div>\r\n\r\n            <ion-item>\r\n              <ion-label>{{\r\n                \"ویدیو آموزش استفاده از محاسبه جدول لامبدا (Lambda - Remap) تیونر پلاس\"\r\n              }}</ion-label>\r\n              <a\r\n                class=\"decoration-none\"\r\n                [href]=\"checkVideoUrl()\"\r\n                target=\"_blank\"\r\n                title=\"ویدیو آموزش استفاده از محاسبه جدول لامبدا (Lambda - Remap) تیونر پلاس ویژه اول آموز\"\r\n                ><ion-button expand=\"block\" fill=\"clear\" shape=\"round\">\r\n                  <ion-icon\r\n                    color=\"success\"\r\n                    slot=\"icon-only\"\r\n                    name=\"download-outline\"\r\n                  ></ion-icon> </ion-button\r\n              ></a>\r\n            </ion-item>\r\n          </ion-card>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n    <ion-grid class=\"no-margin\" style=\"padding: 0px\" *ngIf=\"isShow\">\r\n      <ion-card class=\"output-mode-card\" dir=\"rtl\">\r\n        <ion-card-header>\r\n          <ion-card-subtitle>نوع خروجی جدول</ion-card-subtitle>\r\n          <ion-card-title>{{ outputMode === 'lambda' ? 'Lambda Target' : 'Narrowband EGO Target Voltage' }}</ion-card-title>\r\n        </ion-card-header>\r\n        <ion-card-content>\r\n          <ion-segment [(ngModel)]=\"outputMode\" (ionChange)=\"onOutputModeChanged()\" mode=\"md\">\r\n            <ion-segment-button value=\"lambda\"><ion-label>لامبدا</ion-label></ion-segment-button>\r\n            <ion-segment-button value=\"narrowband\"><ion-label>ولتاژ Narrowband</ion-label></ion-segment-button>\r\n          </ion-segment>\r\n\r\n          <div class=\"narrowband-settings\" *ngIf=\"outputMode === 'narrowband'\">\r\n            <ion-item>\r\n              <ion-label position=\"stacked\">ولتاژ سوئیچ Lambda=1</ion-label>\r\n              <ion-input type=\"number\" inputmode=\"decimal\" min=\"0.1\" max=\"0.9\" step=\"0.001\" [(ngModel)]=\"narrowbandCenterVoltage\" (ionChange)=\"onNarrowbandSettingChanged()\"></ion-input>\r\n              <ion-button slot=\"end\" fill=\"clear\" (click)=\"onInfo('nbCenter')\"><ion-icon name=\"information-circle-outline\"></ion-icon></ion-button>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label position=\"stacked\">ولتاژ سمت Lean</ion-label>\r\n              <ion-input type=\"number\" inputmode=\"decimal\" min=\"0\" max=\"0.8\" step=\"0.01\" [(ngModel)]=\"narrowbandLeanVoltage\" (ionChange)=\"onNarrowbandSettingChanged()\"></ion-input>\r\n              <ion-button slot=\"end\" fill=\"clear\" (click)=\"onInfo('nbLean')\"><ion-icon name=\"information-circle-outline\"></ion-icon></ion-button>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label position=\"stacked\">ولتاژ سمت Rich</ion-label>\r\n              <ion-input type=\"number\" inputmode=\"decimal\" min=\"0.2\" max=\"1\" step=\"0.01\" [(ngModel)]=\"narrowbandRichVoltage\" (ionChange)=\"onNarrowbandSettingChanged()\"></ion-input>\r\n              <ion-button slot=\"end\" fill=\"clear\" (click)=\"onInfo('nbRich')\"><ion-icon name=\"information-circle-outline\"></ion-icon></ion-button>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label position=\"stacked\">پهنای ناحیه سوئیچ</ion-label>\r\n              <ion-input type=\"number\" inputmode=\"decimal\" min=\"0.005\" max=\"0.1\" step=\"0.005\" [(ngModel)]=\"narrowbandTransition\" (ionChange)=\"onNarrowbandSettingChanged()\"></ion-input>\r\n              <ion-button slot=\"end\" fill=\"clear\" (click)=\"onInfo('nbTransition')\"><ion-icon name=\"information-circle-outline\"></ion-icon></ion-button>\r\n            </ion-item>\r\n            <ion-note color=\"warning\">\r\n              سنسور Narrowband فقط نزدیک Lambda=1 رفتار قابل اتکا دارد. برای بار کامل و بوست، کنترل EGO را محدود یا غیرفعال کنید و تیون را با Wideband انجام دهید.\r\n            </ion-note>\r\n          </div>\r\n        </ion-card-content>\r\n      </ion-card>\r\n      <section class=\"st-output\" dir=\"rtl\">\r\n        <div class=\"st-output__header\">\r\n          <div>\r\n            <p class=\"st-output__eyebrow\">TUNER PLUS / LAMBDA</p>\r\n            <h2>{{ outputMode === 'lambda' ? 'جدول هدف لامبدا' : 'جدول ولتاژ هدف Narrowband' }}</h2>\r\n            <p class=\"st-output__description\">مقادیر هدف در دور و بارهای مختلف</p>\r\n          </div>\r\n          <div class=\"st-output__badge\" aria-label=\"ابعاد جدول\">\r\n            <ion-icon name=\"grid-outline\" aria-hidden=\"true\"></ion-icon>\r\n            <span>{{ AFR.length - 1 }} ردیف × {{ AFR[0].length - 1 }} ستون</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"st-output__axes\" aria-hidden=\"true\">\r\n          <span><ion-icon name=\"speedometer-outline\"></ion-icon>محور افقی: دور موتور (RPM)</span>\r\n          <span><ion-icon name=\"pulse-outline\"></ion-icon>محور عمودی: فشار مانیفولد (kPa)</span>\r\n        </div>\r\n        <div class=\"st-output__viewport\" role=\"region\" tabindex=\"0\" aria-label=\"جدول Lambda؛ برای دیدن همه ستون‌ها به صورت افقی حرکت کنید\">\r\n          <table class=\"st-output__table\" dir=\"ltr\" aria-label=\"مقادیر هدف Lambda یا Narrowband\">\r\n            <thead>\r\n              <tr>\r\n                <th *ngFor=\"let rpm of AFR[0]; index as i\" scope=\"col\" [class.st-output__corner]=\"i === 0\">\r\n                  {{ i === 0 ? 'MAP / RPM' : rpm }}\r\n                </th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <ng-container *ngFor=\"let row of outputTable; index as i\">\r\n                <tr *ngIf=\"i !== 0\">\r\n                  <ng-container *ngFor=\"let item of row; index as j\">\r\n                    <th *ngIf=\"j === 0\" scope=\"row\">{{ item }}</th>\r\n                    <td *ngIf=\"j !== 0\" [style.background-color]=\"calcColor(item, j)\">{{ item }}</td>\r\n                  </ng-container>\r\n                </tr>\r\n              </ng-container>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n        <div class=\"st-output__footer\">\r\n          <span>مقادیر خانه‌ها بر اساس ورودی‌های شما محاسبه شده‌اند.</span>\r\n          <span>برای مشاهده همه خانه‌ها، جدول را بکشید.</span>\r\n        </div>\r\n        <div class=\"st-output__actions\">\r\n          <ion-button class=\"st-output__back\" (click)=\"onBack()\" fill=\"outline\" shape=\"round\">\r\n            <ion-icon slot=\"start\" name=\"arrow-forward-outline\"></ion-icon>\r\n            بازگشت\r\n          </ion-button>\r\n          <ion-button class=\"st-output__download\" (click)=\"exportTable()\" fill=\"solid\" shape=\"round\">\r\n            <ion-icon slot=\"start\" name=\"download-outline\"></ion-icon>\r\n            دانلود جدول\r\n          </ion-button>\r\n        </div>\r\n      </section>\r\n    </ion-grid>\r\n  </Section>\r\n  <app-footer></app-footer>\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button>\r\n      <ion-icon name=\"share-social-outline\"></ion-icon>\r\n    </ion-fab-button>\r\n    <ion-fab-list side=\"end\">\r\n      <ion-fab-button><ion-icon name=\"logo-vimeo\"></ion-icon></ion-fab-button>\r\n    </ion-fab-list>\r\n\r\n    <ion-fab-list side=\"top\">\r\n      <ion-fab-button color=\"instagram\">\r\n        <a\r\n          class=\"full-width full-height social-icon-container\"\r\n          href=\"{{ instagram }}\"\r\n          target=\"_blank\"\r\n        >\r\n          <ion-icon\r\n            class=\"social-icon\"\r\n            color=\"lightest\"\r\n            name=\"logo-instagram\"\r\n          ></ion-icon></a\r\n      ></ion-fab-button>\r\n      <ion-fab-button color=\"instagram\"\r\n        ><a\r\n          class=\"full-width full-height social-icon-container\"\r\n          href=\"{{ twitch }}\"\r\n          target=\"_blank\"\r\n        >\r\n          <ion-icon\r\n            class=\"social-icon\"\r\n            color=\"lightest\"\r\n            name=\"logo-twitch\"\r\n          ></ion-icon></a\r\n      ></ion-fab-button>\r\n      <ion-fab-button color=\"discord\"\r\n        ><a\r\n          class=\"full-width full-height social-icon-container\"\r\n          href=\"{{ discord }}\"\r\n          target=\"_blank\"\r\n        >\r\n          <ion-icon\r\n            class=\"social-icon\"\r\n            color=\"lightest\"\r\n            name=\"logo-discord\"\r\n          ></ion-icon></a\r\n      ></ion-fab-button>\r\n      <ion-fab-button color=\"danger\"\r\n        ><a\r\n          class=\"full-width full-height social-icon-container\"\r\n          href=\"{{ youtube }}\"\r\n          target=\"_blank\"\r\n        >\r\n          <ion-icon\r\n            class=\"social-icon\"\r\n            color=\"lightest\"\r\n            name=\"logo-youtube\"\r\n          ></ion-icon></a\r\n      ></ion-fab-button>\r\n      <ion-fab-button color=\"danger\"\r\n        ><a\r\n          class=\"full-width full-height social-icon-container\"\r\n          href=\"{{ pinterest }}\"\r\n          target=\"_blank\"\r\n        >\r\n          <ion-icon\r\n            class=\"social-icon\"\r\n            color=\"lightest\"\r\n            name=\"logo-pinterest\"\r\n          ></ion-icon></a\r\n      ></ion-fab-button>\r\n      <ion-fab-button color=\"facebook\"\r\n        ><a\r\n          class=\"full-width full-height social-icon-container\"\r\n          href=\"{{ facebook }}\"\r\n          target=\"_blank\"\r\n        >\r\n          <ion-icon\r\n            class=\"social-icon\"\r\n            color=\"lightest\"\r\n            name=\"logo-facebook\"\r\n          ></ion-icon></a\r\n      ></ion-fab-button>\r\n      <ion-fab-button color=\"twitter\"\r\n        ><a\r\n          class=\"full-width full-height social-icon-container\"\r\n          href=\"{{ twiter }}\"\r\n          target=\"_blank\"\r\n        >\r\n          <ion-icon\r\n            class=\"social-icon\"\r\n            color=\"lightest\"\r\n            name=\"logo-twitter\"\r\n          ></ion-icon></a\r\n      ></ion-fab-button>\r\n      <ion-fab-button color=\"twitter\"\r\n        ><a\r\n          class=\"full-width full-height social-icon-container\"\r\n          href=\"{{ linkedin }}\"\r\n          target=\"_blank\"\r\n        >\r\n          <ion-icon\r\n            class=\"social-icon\"\r\n            color=\"lightest\"\r\n            name=\"logo-linkedin\"\r\n          ></ion-icon></a\r\n      ></ion-fab-button>\r\n      <ion-fab-button color=\"telegram\"\r\n        ><a\r\n          class=\"full-width full-height social-icon-container\"\r\n          href=\"{{ telegram }}\"\r\n          target=\"_blank\"\r\n        >\r\n          <ion-icon\r\n            class=\"social-icon\"\r\n            color=\"lightest\"\r\n            name=\"paper-plane-outline\"\r\n          ></ion-icon></a\r\n      ></ion-fab-button>\r\n      <ion-fab-button color=\"lightest\"\r\n        ><a\r\n          class=\"full-width full-height social-icon-container\"\r\n          href=\"{{ aparat }}\"\r\n          target=\"_blank\"\r\n        >\r\n          <ion-icon\r\n            class=\"social-icon\"\r\n            color=\"lightest\"\r\n            src=\"/assets/icon/logo-aparat.svg\"\r\n          ></ion-icon></a\r\n      ></ion-fab-button>\r\n    </ion-fab-list>\r\n  </ion-fab>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_view_pages_tuner-plus_lambda_lambda_module_ts.js.map