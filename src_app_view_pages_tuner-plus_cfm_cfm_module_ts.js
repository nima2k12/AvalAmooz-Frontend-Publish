"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_view_pages_tuner-plus_cfm_cfm_module_ts"],{

/***/ 83740:
/*!*****************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/cfm/cfm-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CFMPageRoutingModule": () => (/* binding */ CFMPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _cfm_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cfm.component */ 60479);




const routes = [
    {
        path: '',
        component: _cfm_component__WEBPACK_IMPORTED_MODULE_0__.CFMPage
    }
];
let CFMPageRoutingModule = class CFMPageRoutingModule {
};
CFMPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CFMPageRoutingModule);



/***/ }),

/***/ 60479:
/*!************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/cfm/cfm.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CFMPage": () => (/* binding */ CFMPage)
/* harmony export */ });
/* harmony import */ var G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _cfm_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cfm.component.html?ngResource */ 14864);
/* harmony import */ var _cfm_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cfm.component.scss?ngResource */ 12973);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
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




/* eslint-disable eqeqeq */

/* eslint-disable guard-for-in */

/* eslint-disable max-len */

/* eslint-disable @typescript-eslint/naming-convention */













let CFMPage = class CFMPage {
  constructor(fb, router, alertController, loadingController, toastController, siteService, courseService, datePipe) {
    this.fb = fb;
    this.router = router;
    this.alertController = alertController;
    this.loadingController = loadingController;
    this.toastController = toastController;
    this.siteService = siteService;
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
    this.lastUnit = 'lbs';
    this.unit = 'lbs';
    this.tableSize = 16;
    this.tableSizeSelected = '16';
    this.min = 300;
    this.max = 0;
    this.r = 639.6;
    this.veMode = true;
    this.isShow = false;
    this.check();
  }

  tableSizeChanged() {
    this.tableSize = +this.tableSizeSelected;
  }

  unitChanged() {
    src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.loading(this.loadingController);

    if (this.unit === 'lbs') {
      if (this.lastUnit === 'cfm') {
        this.VE = [...this.lbs];
        this.calcMinMax();
        this.lastUnit = 'lbs';
      } else {
        this.VE = [...this.lbs];
        this.calcMinMax();
        this.lastUnit = 'lbs';
      }
    } else if (this.unit === 'cfm') {
      if (this.lastUnit === 'lbs') {
        // this.convert0(0.069);
        this.VE = [...this.cfm];
        this.calcMinMax();
        this.lastUnit = 'cfm';
      } else {
        // this.convert0(0.069);
        this.VE = [...this.cfm];
        this.calcMinMax();
        this.lastUnit = 'cfm';
      }
    } else {
      if (this.lastUnit === 'lbs') {
        // this.convert4(132);
        this.VE = [...this.kg];
        this.calcMinMax();
        this.lastUnit = 'kg';
      } else {
        // this.convert3(9.108);
        this.VE = [...this.kg];
        this.calcMinMax();
        this.lastUnit = 'kg';
      }
    }

    src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController);
  }

  onCFM() {
    src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.loading(this.loadingController);
    const displacement = this.form.value.engineVolum / 1000 * 61;
    const c = this.form.value.engineVolum * 0.061023744095;
    const temp = this.form.value.temp * 1.8 + 32;
    const x = -0.0002 * this.form.value.temp + 0.0801;

    for (let i = 1; i < this.VE.length; i++) {
      const m = +(this.VE[i][0] * 0.145).toFixed(1);
      this.VE[i][0] = m;
      this.lbs[i][0] = m;
      this.cfm[i][0] = m;
      this.kg[i][0] = m;

      for (let j = 0; j < this.VE[i].length; j++) {
        if (j != 0) {
          const ve = this.VE[i][j];
          const rpm = this.VE[0][j];
          const res = Math.round(ve * rpm * c / 345600);
          this.VE[i][j] = +(res * x).toFixed(2);
          this.cfm[i][j] = res;
          this.lbs[i][j] = +(res * x).toFixed(2);
          this.kg[i][j] = +(res * x / 132.3).toFixed(3); //const res = +((ve * 0.01 * rpm / 2 * c * (m + this.form.value.boost)) / (this.r * (460 + temp))).toFixed(1);
          // this.VE[i][j] = res;
          // this.lbs[i][j] = res;
          // this.cfm[i][j] = +(res / x).toFixed(0);
          // this.kg[i][j] = +(res / 132.3).toFixed(3);
        }
      }
    }

    if (this.unit === 'lbs') {
      this.VE = [...this.lbs];
    } else if (this.unit === 'cfm') {
      this.VE = [...this.cfm];
    } else {
      this.VE = [...this.kg];
    }

    src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController);
    this.veMode = false;
  }

  exportTable() {
    var _this = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.date = new Date();

      const latestDate = _this.datePipe.transform(_this.date, 'yyyy-MM-dd');

      const latestDateDetail = _this.datePipe.transform(_this.date, 'yyyy-MM-dd-h-mm-ss');

      let tableRpm = ``;
      let tableMap = ``;
      let tableContent = ``;

      for (let i = 1; i < _this.VE[0].length; i++) {
        const rpm = _this.VE[0][i];
        tableRpm += rpm + ` \n`;
      }

      for (let i = 1; i < _this.VE.length; i++) {
        const map1 = _this.VE[i];

        for (let j = 0; j < map1.length; j++) {
          const map = map1[j];

          if (j == 0) {
            tableMap += map + ` \n`;
          } else {
            tableContent += map + ` `;
          }
        }

        tableContent += `\n`;
      }

      const content = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
    <tableData xmlns="http://localhost:4300/:table">
    <bibliography author="Nima Sedigh - avalamooz.ir.com" company="SuperTubo" writeDate="` + latestDate + `" />
    <versionInfo fileFormat="1.0"/>
    <table cols="` + +_this.tableSize + `" rows="` + +_this.tableSize + `">
    <xAxis cols="` + +_this.tableSize + `" name="rpm">
             ` + tableRpm + `</xAxis>
    <yAxis name="fuelload" rows="` + +_this.tableSize + `">
             ` + tableMap + `</yAxis>
    <zValues cols="` + +_this.tableSize + `" rows="` + +_this.tableSize + `">
             ` + tableContent + `</zValues>
    </table>
    </tableData>
    `;

      try {
        const blob = new Blob([content], {
          type: 'text/xml;charset=utf-8'
        });
        file_saver__WEBPACK_IMPORTED_MODULE_3__.saveAs(blob, 'Flow Table - ' + latestDateDetail + '.table');
      } catch (e) {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(_this.toastController, 'مرورگر شما از این قابلیت پشتیبانی نمیکند');
      }
    })();
  }

  check() {
    var _this2 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.loading(_this2.loadingController);

      _this2.siteService.GetTunerPlusById(21).subscribe(res => {
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
          } // if (res.data.courseIds.length > 0) {
          //   this.courseService.GetUserCoursesId().subscribe(
          //     ress => {
          //       if (ress.status === GResponse.SuccessStatus) {
          //         let found = false;
          //         res.data.courseIds.forEach(data => {
          //           if (ress.data.find(n => n == data.courseId || n == 8)) {
          //             SharedIonic.dismissLoading(this.loadingController);
          //             this.isCheck = false;
          //             found = true;
          //           }
          //         });
          //         if (!found) {
          //           this.router.navigateByUrl(Urls.AccessDeniedTunerPlusUrl);
          //           SharedIonic.dismissLoading(this.loadingController);
          //         }
          //       } else {
          //         this.router.navigateByUrl(Urls.AccessDeniedTunerPlusUrl);
          //         SharedIonic.dismissLoading(this.loadingController);
          //       }
          //     },
          //     errs => {
          //       this.router.navigateByUrl(Urls.AccessDeniedTunerPlusUrl);
          //       SharedIonic.dismissLoading(this.loadingController);
          //     }
          //   );
          // } else {
          //   this.isCheck = false;
          //   SharedIonic.dismissLoading(this.loadingController);
          // }

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
      idleRpm: [900, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.min(300), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.max(9000)]],
      idleVacuum: [24, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.min(5), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.max(30)]],
      rpmRedline: [7000, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.min(3000), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.max(20000)]],
      peakHp: [100, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.min(30), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.max(20000)]],
      peakHpRpm: [5000, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.min(2000), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.max(20000)]],
      peakTorqu: [170, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.min(20), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.max(30000)]],
      peakTorquRpm: [3000, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.min(1000), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.max(20000)]],
      engineVolum: [2000, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.min(600), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.max(20000)]],
      boost: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.max(200)]],
      temp: [50, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.min(-40), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.max(200)]]
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
          this.make_VE_table();
          this.rpm_bins(this.form.value.rpmRedline, this.form.value.idleRpm);
          this.map_bins(this.form.value.boost, this.form.value.idleVacuum);
          this.compute_VEs();
          this.calcMinMax();
          this.onCFM();
          this.veMode = false;
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

      for (let i = 1; i < _this3.VE.length; i++) {
        // tslint:disable-next-line: prefer-for-of
        for (let j = 1; j < _this3.VE[i].length; j++) {
          const ve = _this3.VE[i][j];

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

  calcColor2(ve, j) {
    let r = 135;
    let g = 135;
    let b = 135;
    this.max = this.VE[this.VE.length - 1][this.VE.length - 1];
    this.min = this.VE[1][1];
    this.avg = (this.max - this.min) / 2 + this.min;

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

  onBack() {
    this.isShow = false;
  }

  make_VE_table() {
    var _this4 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Create VE Array
      // VE[i][j] is the volumetric efficiency(VE) * gamma  value
      // for the ith MAP bin, jth RPM bin (i,j=1..8)
      // where gamma=14.7/afr for gasoline.
      // VE[i][0] is the ith MAP bin value (i=1..8)
      // VE[0][j] is the jth RPM bin value (j=1..8)
      // VE[0][0] is the kPa row with the value nearest 100kPa (i.e. the 'normally aspirated' row)
      //          and is it determined in function 'map_bins' - set but not used in this code version
      _this4.VE = new Array(_this4.tableSize + 1);
      _this4.lbs = new Array(_this4.tableSize + 1);
      _this4.cfm = new Array(_this4.tableSize + 1);
      _this4.kg = new Array(_this4.tableSize + 1);

      for (let i = 0; i <= _this4.tableSize; i++) {
        _this4.VE[i] = new Array(_this4.tableSize + 1);
        _this4.lbs[i] = new Array(_this4.tableSize + 1);
        _this4.cfm[i] = new Array(_this4.tableSize + 1);
        _this4.kg[i] = new Array(_this4.tableSize + 1);
      } // Initialize VE Array
      // tslint:disable-next-line: forin


      for (const j in _this4.VE) {
        for (let k = 0; k <= _this4.tableSize; k++) {
          _this4.VE[j][k] = 0;
          _this4.lbs[j][k] = 0;
          _this4.cfm[j][k] = 0;
          _this4.kg[j][k] = 0;
        }
      }

      return _this4.VE;
    })();
  }

  rpm_bins(maxrpm, idlerpm) {
    var _this5 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Calculate RPM bins
      // First two bins bracket idle with a delta of 500 rpm.
      // Other bins are equally spaced (ignoring rounding) to max_rpm.
      _this5.VE[0][1] = Math.round((parseFloat(idlerpm) - 150) / 100) * 100;
      _this5.VE[0][2] = Math.round((parseFloat(idlerpm) + 350) / 100) * 100;
      _this5.lbs[0][1] = Math.round((parseFloat(idlerpm) - 150) / 100) * 100;
      _this5.lbs[0][2] = Math.round((parseFloat(idlerpm) + 350) / 100) * 100;
      _this5.cfm[0][1] = Math.round((parseFloat(idlerpm) - 150) / 100) * 100;
      _this5.cfm[0][2] = Math.round((parseFloat(idlerpm) + 350) / 100) * 100;
      _this5.kg[0][1] = Math.round((parseFloat(idlerpm) - 150) / 100) * 100;
      _this5.kg[0][2] = Math.round((parseFloat(idlerpm) + 350) / 100) * 100;
      const rpm_bin_step = (parseFloat(maxrpm) - _this5.VE[0][2]) / (_this5.tableSize * 1.0 - 2);

      for (let i = 3; i <= _this5.tableSize * 1.0 - 1; i++) {
        _this5.VE[0][i] = Math.round((_this5.VE[0][2] + (i - 2) * rpm_bin_step) / 100) * 100;
        _this5.lbs[0][i] = Math.round((_this5.VE[0][2] + (i - 2) * rpm_bin_step) / 100) * 100;
        _this5.cfm[0][i] = Math.round((_this5.VE[0][2] + (i - 2) * rpm_bin_step) / 100) * 100;
        _this5.kg[0][i] = Math.round((_this5.VE[0][2] + (i - 2) * rpm_bin_step) / 100) * 100;
      }

      _this5.VE[0][_this5.tableSize * 1.0] = Math.round(parseFloat(maxrpm) / 100) * 100;
      _this5.lbs[0][_this5.tableSize * 1.0] = Math.round(parseFloat(maxrpm) / 100) * 100;
      _this5.cfm[0][_this5.tableSize * 1.0] = Math.round(parseFloat(maxrpm) / 100) * 100;
      _this5.kg[0][_this5.tableSize * 1.0] = Math.round(parseFloat(maxrpm) / 100) * 100;
      return;
    })();
  }

  map_bins(maxmap, idlemap) {
    var _this6 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Calculate MAP bins
      // First bin is idle MAP value. Rest are evenly spaced to 'boost' value (maxmap).
      // VE[0][0] is set to the index for the array row containing the highest MAP value
      // less than 115 (i.e. the naturally aspirated, WOT row)
      _this6.VE[1][0] = Math.round((101 - parseFloat(idlemap) * (101 / 29.92)) / 5) * 5;
      _this6.lbs[1][0] = Math.round((101 - parseFloat(idlemap) * (101 / 29.92)) / 5) * 5;
      _this6.cfm[1][0] = Math.round((101 - parseFloat(idlemap) * (101 / 29.92)) / 5) * 5;
      _this6.kg[1][0] = Math.round((101 - parseFloat(idlemap) * (101 / 29.92)) / 5) * 5;
      const map_bin_step = (parseFloat(maxmap) * (101 / 14.7) + 101 - _this6.VE[1][0]) / (_this6.tableSize * 1.0 - 1);

      for (let i = 2; i <= _this6.tableSize * 1.0; i++) {
        _this6.VE[i][0] = Math.round((_this6.VE[1][0] + (i - 1) * map_bin_step) / 5) * 5;
        _this6.lbs[i][0] = Math.round((_this6.VE[1][0] + (i - 1) * map_bin_step) / 5) * 5;
        _this6.cfm[i][0] = Math.round((_this6.VE[1][0] + (i - 1) * map_bin_step) / 5) * 5;
        _this6.kg[i][0] = Math.round((_this6.VE[1][0] + (i - 1) * map_bin_step) / 5) * 5;

        if (_this6.VE[i][0] < 115) {
          _this6.VE[0][0] = i;
          _this6.lbs[0][0] = i;
          _this6.cfm[0][0] = i;
          _this6.kg[0][0] = i;
        }
      }

      return;
    })();
  }

  compute_VEs() {
    var _this7 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // VEs are modeled based on several equations.
      // A quadratic is used to estimate the WOT VE curve based on the peak torque (&rpm)
      // and torque at peak horsepower.
      // Calculations are based on naturally aspirated equivalents, derived from:
      //
      // natural_tq(ptq)= ptq*(14.7/(14.7+boost))
      // natural_tq(php)= 5250*(php*(14.7/(14.7+boost)))/phprpm
      //
      // The 'flatness/peakiness' of the curve is determined
      // by rpm difference between peak torque and peak horseower.
      //
      // VE(100,rpm) = (a * rpm^2) + (b * rpm) + c
      //
      // We want VE(ptq)=(natural_tq(ptq))/displacement*(0.86)
      // and VE(ptq)=(natural_hp(php))/displacement*(0.95)
      //
      // where 0.86 is the estimated volumetric efficiency for an engine that produces
      // 1 lb-ft/cubic inch, and where 0.95 is the estimated volumetric efficiency for
      // an engine that produces 1 hp/cubic inch
      //
      // and we know that:
      //
      // (1)    VEnatural_tq(ptq) = 0.86 = a * ptqrpm^2 + b * ptqrpm + c
      //
      // (2)    VEnatural_tq(php) = 0.95 = a * phprpm^2 + b * phprpm + c
      // and
      // (3)    2*a*ptqrpm = (-b) by differentiation, since we want VE to peak at peak torque (dy/dx=2ax+b=0 @ ptqrpm)
      //
      // So we have three equations with three unknowns (a, b and c)
      // from third equation:
      //
      // (4) b = -2*a*ptqrpm
      // which forces a maximum in the curve at the peak torque.
      // Coefficient calculation is done in the separate compute_coefficients function
      //
      // to get VE need to pass x1=ptqrpm, y1=0.86*(na_peak_torque/displacement)
      //                    and x2=phprpm, y2=0.95*(na_peak_hp/displacement)
      //
      // A linear scaling 'gamma' factor is then applied to each value in the VE(100,rpm) column to adjust
      // the mixture ratio from a constant 14.7:1 to a function of rpm, going from 14:1 at
      // the lowest rpm to 12:1 at the highest rpm (all still at 100kPa).
      //
      // Final equation for 100kPa is: VE = a*rpm^2 + b*rpm + c
      // Note that VE is already adjusted for best afr at peak torque and hp
      //
      // For each MAP row, the values are scaled from the 100kPa values.
      // For kPa<=100 factor 0.45 is used
      // for kPa>100, factor K*(compressor_efficiency = 0.60) is used, to account for compressor efficiency
      // i.e. for a boost of 10 pounds, if 6 psi is used to increase mass of charge,
      // and 4 psi comes from the added heat of compression, compressor_efficiency=0.60
      // and the K is a constant determined empirically,
      //
      // suppose k=0.7
      // VE(x,rpm) = VE(100,rpm) * f(map)
      // where f(map) could be f(map)=1-(100-map)/100*K
      // ex. VE(100,4000)=100, want VE(70,4000)
      //     so f(70) = 1-(100-70)/100*0.7 = 0.79
      //     and VE(70,4000) = 100*0.85 = 79%
      //
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
      const na_hp = peak_hp * (14.7 / (14.7 + maxmap * compressor_efficiency)) * (5250 / peak_hp_rpm);

      _this7.compute_coefficients(peak_torque_rpm, 85 * (na_tq / displacement), peak_hp_rpm, 85 * (na_hp / displacement)); // Set K - the 'step' degradation ration for VE to kPa


      const K = 0.45; // Fill the VE values
      // (but not the bin values)

      const maxVE = _this7.a * peak_torque_rpm * peak_torque_rpm + _this7.b * peak_torque_rpm + _this7.c;

      for (let i = 1; i <= _this7.tableSize * 1.0; i++) {
        for (let j = 1; j <= _this7.tableSize * 1.0; j++) {
          compressor_efficiency = 1;

          if (_this7.VE[i][0] > 100) {
            compressor_efficiency = 0.6;
          }

          const f = (100 - (100 - _this7.VE[i][0]) * K) / 100;
          _this7.VE[i][j] = (_this7.a * _this7.VE[0][j] * _this7.VE[0][j] + _this7.b * _this7.VE[0][j] + _this7.c) * f; // VE at least 25% of maxVE at all times

          if (_this7.VE[i][j] < maxVE * 0.25) {
            _this7.VE[i][j] = maxVE * 0.25;
          } // limit 'fall-off' to 5% per bin to prevent going lean on top end


          if (j > 1) {
            if (_this7.VE[i][j] < _this7.VE[i][j - 1] * 0.95) {
              _this7.VE[i][j] = _this7.VE[i][j - 1] * 0.95;
            }
          }

          _this7.VE[i][j] = Math.round(_this7.VE[i][j]);
        }
      }
    })();
  }

  compute_coefficients(x1, y1, x2, y2) {
    var _this8 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Compute the quadratic coefficients for a curve passing through (x1,y1), (x2,y2)
      // with a maximum at (x1,y1)
      // modify global variables a,b,c, where y=ax^2+bx+c
      //
      _this8.a = (y2 - y1) / (x2 * x2 - 2 * x1 * x2 + x1 * x1);
      _this8.b = -2 * _this8.a * x1;
      _this8.c = y1 + _this8.a * x1 * x1;
      return;
    })();
  }

  onInfo(type) {
    switch (type) {
      case 'idleRpm':
        this.presentActiveAlertConfirm('دور موتور در زمانی که پدال گاز رها است را وارد کنید. معمولا عددی بین 700 الی 1300');
        break;

      case 'temp':
        this.presentActiveAlertConfirm('دمای هوای منیفولد برحسب درجه سانتیگراد. معمولا بین 40 الی 60 درجه میباشد.');
        break;

      case 'idleVacuum':
        this.presentActiveAlertConfirm('خلا بیکار تخمین زده شده برحسب Hg. برای موتور استوک حدود 24 - برای خودروی تقویت شهری حدود 15 - برای خودروی مسابفاتی حدود 10');
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

  check_errors() {
    var _this10 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // check for
      // idle_rpm > 300
      // 0< idle_map < 80
      // max_rpm < 12000
      // boost < 21psi
      // 25 < idle_map > 4
      // phprpm > phprpm
      // peak_tq > peak_hp*5250/phprpm
      // peak_hp/displacement < 3.0 hp/ci
      // errors is a string with all error messages
      const err_idle_rpm = _this10.form.value.idleRpm;
      const err_idle_map = _this10.form.value.idleVacuum;
      const err_maxrpm = _this10.form.value.rpmRedline;
      const err_peak_tq = _this10.form.value.peakTorqu / 1.3558179999442195;
      const err_tq_rpm = _this10.form.value.peakTorquRpm;
      const err_boost = _this10.form.value.boost;
      const err_peak_hp = _this10.form.value.peakHp;
      const err_hp_rpm = _this10.form.value.peakHpRpm;
      const err_displacement = _this10.form.value.engineVolum / 1000 * 61; // swept volume in cubic inches

      let errors = '';

      if (err_idle_rpm < 300) {
        errors = 'Idle rpm set too low. ';
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(_this10.toastController, 'دور آرام نباید کمتر از 300 باشد');
      } else if (err_idle_map < 5) {
        errors = errors + 'Idle vacuum is too low to model. ';
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(_this10.toastController, 'وکیوم دور آرام نباید کمتر از 5 باشد');
      } else if (err_idle_map > 30) {
        errors = errors + 'Idle vacuum is too high. ';
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(_this10.toastController, 'وکیوم دور آرام نباید بیشتر از 30 باشد');
      } else if (err_maxrpm > 20000) {
        errors = errors + 'Maximum RPM is set too high. ';
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(_this10.toastController, 'دور موتور کاتاف نباید بیشتر از 20000 باشد');
      } else if (err_boost > 200) {
        errors = errors + 'Maximum boost is set too high for standard MegaSquirt<sup>&reg;</sup> MPX4250 MAP sensor. ';
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(_this10.toastController, 'بوست توربو نباید بیشتر از 200 باشد');
      } else if (err_tq_rpm > err_hp_rpm) {
        errors = errors + 'RPM for peak torque occurs above RPM for peak horsepower. ';
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(_this10.toastController, 'دور موتور اوج گشتاور نباید بیشتر از توان باشد');
      } else if (err_peak_hp * 5252 / err_hp_rpm > err_peak_tq) {
        errors = errors + 'Torque at maximum HP is higher than at \'peak\' torque! ';
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(_this10.toastController, 'گشتاور در اوج توان نباید بیشتر از اوج گشتاور باشد');
      } else if (err_peak_hp / err_displacement > 3) {
        errors = errors + 'Specific output is too high to model. ';
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(_this10.toastController, 'خروجی خاص برای مدل سازی خیلی زیاد است');
      }

      if (errors === '') {
        return false;
      } else {
        return true;
      }
    })();
  }

};

CFMPage.ctorParameters = () => [{
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
  type: src_app_data_service_course_course_service__WEBPACK_IMPORTED_MODULE_8__.CourseService
}, {
  type: _angular_common__WEBPACK_IMPORTED_MODULE_13__.DatePipe
}];

CFMPage.propDecorators = {
  content: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild,
    args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonContent]
  }]
};
CFMPage = (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
  selector: 'app-cfm',
  template: _cfm_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_cfm_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], CFMPage);


/***/ }),

/***/ 58434:
/*!*********************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/cfm/cfm.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CFMPageModule": () => (/* binding */ CFMPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/view/components/app/page-header/page-header.module */ 19916);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _cfm_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cfm-routing.module */ 83740);
/* harmony import */ var _cfm_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cfm.component */ 60479);
/* harmony import */ var src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/view/components/app/footer/footer.module */ 60412);
/* harmony import */ var src_app_view_components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/view/components/common/loading/loading.module */ 90876);










let CFMPageModule = class CFMPageModule {
};
CFMPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__.PageHeaderModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _cfm_routing_module__WEBPACK_IMPORTED_MODULE_1__.CFMPageRoutingModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            src_app_view_components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_4__.LoadingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
            src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__.FooterModule
        ],
        declarations: [_cfm_component__WEBPACK_IMPORTED_MODULE_2__.CFMPage],
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe]
    })
], CFMPageModule);



/***/ }),

/***/ 12973:
/*!*************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/cfm/cfm.component.scss?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = ".st-output {\n  --matrix-accent: var(--ion-color-danger);\n  position: relative;\n  max-width: 1500px;\n  margin: clamp(16px, 3vw, 40px) auto 48px;\n  padding: clamp(16px, 2.5vw, 30px);\n  overflow: hidden;\n  color: var(--ion-text-color);\n  background: linear-gradient(145deg, rgba(var(--ion-color-danger-rgb), 0.07), transparent 36%), var(--ion-item-background, var(--ion-background-color));\n  border: 1px solid rgba(var(--ion-color-medium-rgb), 0.24);\n  border-radius: 24px;\n  box-shadow: 0 22px 56px rgba(0, 0, 0, 0.12);\n}\n\n.st-output::before {\n  content: \"\";\n  position: absolute;\n  inset: 0 0 auto;\n  height: 4px;\n  background: linear-gradient(90deg, transparent, var(--matrix-accent), transparent);\n}\n\n.st-output__header,\n.st-output__badge,\n.st-output__axes,\n.st-output__axes span,\n.st-output__footer,\n.st-output__actions {\n  display: flex;\n  align-items: center;\n}\n\n.st-output__header {\n  justify-content: space-between;\n  gap: 16px;\n  margin-bottom: 18px;\n}\n\n.st-output__eyebrow {\n  margin: 0 0 8px;\n  color: var(--matrix-accent);\n  font-size: 0.73rem;\n  font-weight: 800;\n  letter-spacing: 0.15em;\n}\n\n.st-output__header h2 {\n  margin: 0;\n  font-size: clamp(1.3rem, 2.3vw, 1.85rem);\n  font-weight: 800;\n}\n\n.st-output__description {\n  margin: 8px 0 0;\n  color: var(--ion-color-medium);\n  font-size: 0.9rem;\n}\n\n.st-output__badge {\n  flex: none;\n  gap: 9px;\n  padding: 10px 14px;\n  color: var(--ion-text-color);\n  background: rgba(var(--ion-color-medium-rgb), 0.09);\n  border: 1px solid rgba(var(--ion-color-medium-rgb), 0.2);\n  border-radius: 12px;\n  font-size: 0.84rem;\n  font-weight: 700;\n  font-feature-settings: \"tnum\";\n  font-variant-numeric: tabular-nums;\n}\n\n.st-output__badge ion-icon {\n  color: var(--matrix-accent);\n  font-size: 1.1rem;\n}\n\n.st-output__axes {\n  flex-wrap: wrap;\n  gap: 9px 20px;\n  margin-bottom: 14px;\n  color: var(--ion-color-medium);\n  font-size: 0.82rem;\n}\n\n.st-output__axes span {\n  gap: 7px;\n}\n\n.st-output__axes ion-icon {\n  color: var(--matrix-accent);\n  font-size: 1rem;\n}\n\n.st-output__viewport {\n  max-height: min(70vh, 720px);\n  overflow: auto;\n  padding: 8px;\n  background: #111418;\n  border: 1px solid #30363d;\n  border-radius: 16px;\n  scrollbar-color: #6b737d #171b20;\n}\n\n.st-output__viewport:focus-visible {\n  outline: 3px solid var(--matrix-accent);\n  outline-offset: 3px;\n}\n\n.st-output__table {\n  width: max-content;\n  min-width: 100%;\n  border-collapse: separate;\n  border-spacing: 3px;\n  font-feature-settings: \"tnum\";\n  font-variant-numeric: tabular-nums;\n  text-align: center;\n}\n\n.st-output__table th,\n.st-output__table td {\n  min-width: 76px;\n  height: 48px;\n  padding: 8px 12px;\n  border-radius: 7px;\n  white-space: nowrap;\n}\n\n.st-output__table thead th {\n  position: sticky;\n  top: 0;\n  z-index: 2;\n  color: #f6f7f8;\n  background: #303740;\n  box-shadow: inset 0 -2px 0 #ba3438;\n  font-size: 0.87rem;\n  font-weight: 800;\n}\n\n.st-output__table tbody th {\n  position: sticky;\n  left: 0;\n  z-index: 1;\n  color: #f6f7f8;\n  background: #303740;\n  box-shadow: inset -2px 0 0 #ba3438;\n  font-size: 0.9rem;\n  font-weight: 800;\n}\n\n.st-output__table thead .st-output__corner {\n  left: 0;\n  z-index: 3;\n  min-width: 112px;\n  color: #fff;\n  background: #a8232b;\n  box-shadow: none;\n  font-size: 0.76rem;\n}\n\n.st-output__table tbody th:first-child {\n  min-width: 112px;\n}\n\n.st-output__table td {\n  color: #172028;\n  font-size: 1rem;\n  font-weight: 800;\n  transition: box-shadow 160ms ease, filter 160ms ease;\n}\n\n.st-output__table tbody tr:hover td {\n  filter: brightness(1.05);\n}\n\n.st-output__table tbody tr:hover th {\n  background: #424b55;\n}\n\n.st-output__table td:hover {\n  box-shadow: inset 0 0 0 3px rgba(15, 20, 25, 0.55);\n}\n\n.st-output__footer {\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin: 14px 0 20px;\n  color: var(--ion-color-medium);\n  font-size: 0.79rem;\n}\n\n.st-output__actions {\n  justify-content: flex-end;\n  flex-wrap: wrap;\n  gap: 10px;\n  padding-top: 18px;\n  border-top: 1px solid rgba(var(--ion-color-medium-rgb), 0.2);\n}\n\n.st-output__actions ion-button {\n  min-width: 138px;\n  margin: 0;\n  font-weight: 700;\n}\n\n.st-output__back {\n  --color: var(--ion-text-color);\n  --border-color: rgba(var(--ion-color-medium-rgb), 0.4);\n}\n\n.st-output__download {\n  --background: var(--matrix-accent);\n  --color: var(--ion-color-danger-contrast);\n  --box-shadow: 0 8px 20px rgba(var(--ion-color-danger-rgb), 0.24);\n}\n\n@media (max-width: 600px) {\n  .st-output {\n    margin: 12px 10px 32px;\n    padding: 16px 12px;\n    border-radius: 18px;\n  }\n\n  .st-output__header {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n\n  .st-output__viewport {\n    padding: 5px;\n    border-radius: 12px;\n  }\n\n  .st-output__table th,\n.st-output__table td {\n    min-width: 64px;\n    height: 42px;\n    padding: 7px 9px;\n    font-size: 0.85rem;\n  }\n\n  .st-output__table thead .st-output__corner,\n.st-output__table tbody th:first-child {\n    min-width: 94px;\n  }\n\n  .st-output__actions ion-button {\n    flex: 1;\n    min-width: 0;\n  }\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .st-output__table td {\n    transition: none;\n  }\n}\n\n:host-context(.dark-theme) {\n  color-scheme: dark;\n  color: var(--tuner-text);\n  --tuner-page: #11151e;\n  --tuner-surface: #1c2230;\n  --tuner-soft: #252e3d;\n  --tuner-border: #465269;\n  --tuner-text: #edf1f8;\n  --tuner-muted: #b2bfd1;\n  --tuner-header: rgba(28, 34, 48, 0.94);\n  --tuner-overlay: rgba(28, 34, 48, 0.95);\n  --tuner-purple-text: #c4b5fd;\n  --tuner-purple-soft: #302444;\n  --tuner-purple-border: #72579b;\n  --tuner-info-text: #93c5fd;\n  --tuner-info-soft: #1d304c;\n  --tuner-info-border: #466b9a;\n  --tuner-warning-text: #fcd477;\n  --tuner-warning-soft: #3b3020;\n  --tuner-warning-border: #93743d;\n  --tuner-success-text: #86efac;\n  --tuner-success-soft: #19392e;\n  --tuner-success-border: #417d60;\n  --tuner-danger-text: #fda4af;\n  --tuner-danger-soft: #402631;\n  --tuner-danger-border: #985367;\n  --tuner-teal-text: #7de4d4;\n  --tuner-teal-soft: #193a3a;\n  --tuner-teal-border: #437f7c;\n}\n\n:host-context(.dark-theme) input:not([type=range]):not([type=checkbox]):not([type=radio]):not([type=button]):not([type=submit]):not([type=file]),\n:host-context(.dark-theme) textarea,\n:host-context(.dark-theme) select {\n  color: var(--tuner-text);\n  background-color: var(--tuner-soft);\n}\n\n:host-context(.dark-theme) input::placeholder, :host-context(.dark-theme) textarea::placeholder {\n  color: var(--tuner-muted);\n  opacity: 0.75;\n}\n\n:host-context(.dark-theme) ion-header.learning-header {\n  --background: var(--tuner-header);\n  background: var(--tuner-header);\n  border-bottom-color: var(--tuner-border);\n}\n\n:host-context(.dark-theme) ion-content {\n  --background: var(--tuner-page);\n  --color: var(--tuner-text);\n}\n\n:host-context(.dark-theme) ion-card:not([color]), :host-context(.dark-theme) ion-list, :host-context(.dark-theme) ion-item:not([color]), :host-context(.dark-theme) ion-item-divider:not([color]) {\n  --background: var(--tuner-surface);\n  --color: var(--tuner-text);\n  --border-color: var(--tuner-border);\n}\n\n:host-context(.dark-theme) ion-list {\n  background: var(--tuner-surface);\n}\n\n:host-context(.dark-theme) ion-card-title, :host-context(.dark-theme) ion-card-subtitle {\n  color: var(--tuner-text);\n}\n\n:host-context(.dark-theme) ion-card[color=lightest], :host-context(.dark-theme) ion-item[color=lightest], :host-context(.dark-theme) ion-fab-button[color=lightest] {\n  --ion-color-base: var(--tuner-surface);\n  --ion-color-contrast: var(--tuner-text);\n  --ion-color-shade: var(--tuner-soft);\n  --ion-color-tint: var(--tuner-soft);\n}\n\n:host-context(.dark-theme) ion-text[color=dark], :host-context(.dark-theme) ion-label[color=dark] {\n  --ion-color-base: var(--tuner-text);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFxfb3V0cHV0LW1hdHJpeC5zY3NzIiwiY2ZtLmNvbXBvbmVudC5zY3NzIiwiLi5cXF90aGVtZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0NBQUE7RUFFQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esd0NBQUE7RUFDQSxpQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzSkFBQTtFQUVBLHlEQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQ0FBQTtBQ0RGOztBRElBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxrRkFBQTtBQ0RGOztBRElBOzs7Ozs7RUFNRSxhQUFBO0VBQ0EsbUJBQUE7QUNERjs7QURJQTtFQUNFLDhCQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FDREY7O0FESUE7RUFDRSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUNERjs7QURJQTtFQUNFLFNBQUE7RUFDQSx3Q0FBQTtFQUNBLGdCQUFBO0FDREY7O0FESUE7RUFDRSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtBQ0RGOztBRElBO0VBQ0UsVUFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsbURBQUE7RUFDQSx3REFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDZCQUFBO0VBQUEsa0NBQUE7QUNERjs7QURJQTtFQUNFLDJCQUFBO0VBQ0EsaUJBQUE7QUNERjs7QURJQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0FDREY7O0FESUE7RUFDRSxRQUFBO0FDREY7O0FESUE7RUFDRSwyQkFBQTtFQUNBLGVBQUE7QUNERjs7QURJQTtFQUNFLDRCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtBQ0RGOztBRElBO0VBQ0UsdUNBQUE7RUFDQSxtQkFBQTtBQ0RGOztBRElBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQUEsa0NBQUE7RUFDQSxrQkFBQTtBQ0RGOztBRElBOztFQUVFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDREY7O0FESUE7RUFDRSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDREY7O0FESUE7RUFDRSxnQkFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDREY7O0FESUE7RUFDRSxPQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0RGOztBRElBO0VBQ0UsZ0JBQUE7QUNERjs7QURJQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvREFBQTtBQ0RGOztBRElBO0VBQ0Usd0JBQUE7QUNERjs7QURJQTtFQUNFLG1CQUFBO0FDREY7O0FESUE7RUFDRSxrREFBQTtBQ0RGOztBRElBO0VBQ0UsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtBQ0RGOztBRElBO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsNERBQUE7QUNERjs7QURJQTtFQUNFLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FDREY7O0FESUE7RUFDRSw4QkFBQTtFQUNBLHNEQUFBO0FDREY7O0FESUE7RUFDRSxrQ0FBQTtFQUNBLHlDQUFBO0VBQ0EsZ0VBQUE7QUNERjs7QURJQTtFQUNFO0lBQ0Usc0JBQUE7SUFDQSxrQkFBQTtJQUNBLG1CQUFBO0VDREY7O0VESUE7SUFDRSx1QkFBQTtJQUNBLHNCQUFBO0VDREY7O0VESUE7SUFDRSxZQUFBO0lBQ0EsbUJBQUE7RUNERjs7RURJQTs7SUFFRSxlQUFBO0lBQ0EsWUFBQTtJQUNBLGdCQUFBO0lBQ0Esa0JBQUE7RUNERjs7RURJQTs7SUFFRSxlQUFBO0VDREY7O0VESUE7SUFDRSxPQUFBO0lBQ0EsWUFBQTtFQ0RGO0FBQ0Y7O0FESUE7RUFDRTtJQUNFLGdCQUFBO0VDRkY7QUFDRjs7QUN4UEU7RUFDRSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0NBQUE7RUFDQSx1Q0FBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLDBCQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSwrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLDBCQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtBRDBQSjs7QUN2UEk7OztFQUdFLHdCQUFBO0VBQ0EsbUNBQUE7QUR5UE47O0FDdFBJO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0FEd1BOOztBQ3JQSTtFQUNFLGlDQUFBO0VBQ0EsK0JBQUE7RUFDQSx3Q0FBQTtBRHVQTjs7QUNyUEk7RUFBYywrQkFBQTtFQUFpQywwQkFBQTtBRHlQbkQ7O0FDeFBJO0VBQ0Usa0NBQUE7RUFDQSwwQkFBQTtFQUNBLG1DQUFBO0FEMFBOOztBQ3hQSTtFQUFXLGdDQUFBO0FEMlBmOztBQzFQSTtFQUFvQyx3QkFBQTtBRDZQeEM7O0FDNVBJO0VBQ0Usc0NBQUE7RUFDQSx1Q0FBQTtFQUNBLG9DQUFBO0VBQ0EsbUNBQUE7QUQ4UE47O0FDNVBJO0VBQWtELG1DQUFBO0FEK1B0RCIsImZpbGUiOiJjZm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3Qtb3V0cHV0IHtcbiAgLS1tYXRyaXgtYWNjZW50OiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcblxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1heC13aWR0aDogMTUwMHB4O1xuICBtYXJnaW46IGNsYW1wKDE2cHgsIDN2dywgNDBweCkgYXV0byA0OHB4O1xuICBwYWRkaW5nOiBjbGFtcCgxNnB4LCAyLjV2dywgMzBweCk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvcik7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNDVkZWcsIHJnYmEodmFyKC0taW9uLWNvbG9yLWRhbmdlci1yZ2IpLCAwLjA3KSwgdHJhbnNwYXJlbnQgMzYlKSxcbiAgICB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvcikpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKHZhcigtLWlvbi1jb2xvci1tZWRpdW0tcmdiKSwgMC4yNCk7XG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gIGJveC1zaGFkb3c6IDAgMjJweCA1NnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5zdC1vdXRwdXQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGluc2V0OiAwIDAgYXV0bztcbiAgaGVpZ2h0OiA0cHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgdHJhbnNwYXJlbnQsIHZhcigtLW1hdHJpeC1hY2NlbnQpLCB0cmFuc3BhcmVudCk7XG59XG5cbi5zdC1vdXRwdXRfX2hlYWRlcixcbi5zdC1vdXRwdXRfX2JhZGdlLFxuLnN0LW91dHB1dF9fYXhlcyxcbi5zdC1vdXRwdXRfX2F4ZXMgc3Bhbixcbi5zdC1vdXRwdXRfX2Zvb3Rlcixcbi5zdC1vdXRwdXRfX2FjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc3Qtb3V0cHV0X19oZWFkZXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogMThweDtcbn1cblxuLnN0LW91dHB1dF9fZXllYnJvdyB7XG4gIG1hcmdpbjogMCAwIDhweDtcbiAgY29sb3I6IHZhcigtLW1hdHJpeC1hY2NlbnQpO1xuICBmb250LXNpemU6IDAuNzNyZW07XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjE1ZW07XG59XG5cbi5zdC1vdXRwdXRfX2hlYWRlciBoMiB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiBjbGFtcCgxLjNyZW0sIDIuM3Z3LCAxLjg1cmVtKTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuLnN0LW91dHB1dF9fZGVzY3JpcHRpb24ge1xuICBtYXJnaW46IDhweCAwIDA7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG59XG5cbi5zdC1vdXRwdXRfX2JhZGdlIHtcbiAgZmxleDogbm9uZTtcbiAgZ2FwOiA5cHg7XG4gIHBhZGRpbmc6IDEwcHggMTRweDtcbiAgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yKTtcbiAgYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItbWVkaXVtLXJnYiksIDAuMDkpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKHZhcigtLWlvbi1jb2xvci1tZWRpdW0tcmdiKSwgMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgZm9udC1zaXplOiAwLjg0cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXZhcmlhbnQtbnVtZXJpYzogdGFidWxhci1udW1zO1xufVxuXG4uc3Qtb3V0cHV0X19iYWRnZSBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1tYXRyaXgtYWNjZW50KTtcbiAgZm9udC1zaXplOiAxLjFyZW07XG59XG5cbi5zdC1vdXRwdXRfX2F4ZXMge1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogOXB4IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDE0cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgZm9udC1zaXplOiAwLjgycmVtO1xufVxuXG4uc3Qtb3V0cHV0X19heGVzIHNwYW4ge1xuICBnYXA6IDdweDtcbn1cblxuLnN0LW91dHB1dF9fYXhlcyBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1tYXRyaXgtYWNjZW50KTtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4uc3Qtb3V0cHV0X192aWV3cG9ydCB7XG4gIG1heC1oZWlnaHQ6IG1pbig3MHZoLCA3MjBweCk7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBwYWRkaW5nOiA4cHg7XG4gIGJhY2tncm91bmQ6ICMxMTE0MTg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzMDM2M2Q7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIHNjcm9sbGJhci1jb2xvcjogIzZiNzM3ZCAjMTcxYjIwO1xufVxuXG4uc3Qtb3V0cHV0X192aWV3cG9ydDpmb2N1cy12aXNpYmxlIHtcbiAgb3V0bGluZTogM3B4IHNvbGlkIHZhcigtLW1hdHJpeC1hY2NlbnQpO1xuICBvdXRsaW5lLW9mZnNldDogM3B4O1xufVxuXG4uc3Qtb3V0cHV0X190YWJsZSB7XG4gIHdpZHRoOiBtYXgtY29udGVudDtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xuICBib3JkZXItc3BhY2luZzogM3B4O1xuICBmb250LXZhcmlhbnQtbnVtZXJpYzogdGFidWxhci1udW1zO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zdC1vdXRwdXRfX3RhYmxlIHRoLFxuLnN0LW91dHB1dF9fdGFibGUgdGQge1xuICBtaW4td2lkdGg6IDc2cHg7XG4gIGhlaWdodDogNDhweDtcbiAgcGFkZGluZzogOHB4IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLnN0LW91dHB1dF9fdGFibGUgdGhlYWQgdGgge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDI7XG4gIGNvbG9yOiAjZjZmN2Y4O1xuICBiYWNrZ3JvdW5kOiAjMzAzNzQwO1xuICBib3gtc2hhZG93OiBpbnNldCAwIC0ycHggMCAjYmEzNDM4O1xuICBmb250LXNpemU6IDAuODdyZW07XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5cbi5zdC1vdXRwdXRfX3RhYmxlIHRib2R5IHRoIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTtcbiAgY29sb3I6ICNmNmY3Zjg7XG4gIGJhY2tncm91bmQ6ICMzMDM3NDA7XG4gIGJveC1zaGFkb3c6IGluc2V0IC0ycHggMCAwICNiYTM0Mzg7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBmb250LXdlaWdodDogODAwO1xufVxuXG4uc3Qtb3V0cHV0X190YWJsZSB0aGVhZCAuc3Qtb3V0cHV0X19jb3JuZXIge1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAzO1xuICBtaW4td2lkdGg6IDExMnB4O1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogI2E4MjMyYjtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgZm9udC1zaXplOiAwLjc2cmVtO1xufVxuXG4uc3Qtb3V0cHV0X190YWJsZSB0Ym9keSB0aDpmaXJzdC1jaGlsZCB7XG4gIG1pbi13aWR0aDogMTEycHg7XG59XG5cbi5zdC1vdXRwdXRfX3RhYmxlIHRkIHtcbiAgY29sb3I6ICMxNzIwMjg7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAxNjBtcyBlYXNlLCBmaWx0ZXIgMTYwbXMgZWFzZTtcbn1cblxuLnN0LW91dHB1dF9fdGFibGUgdGJvZHkgdHI6aG92ZXIgdGQge1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4wNSk7XG59XG5cbi5zdC1vdXRwdXRfX3RhYmxlIHRib2R5IHRyOmhvdmVyIHRoIHtcbiAgYmFja2dyb3VuZDogIzQyNGI1NTtcbn1cblxuLnN0LW91dHB1dF9fdGFibGUgdGQ6aG92ZXIge1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAzcHggcmdiYSgxNSwgMjAsIDI1LCAwLjU1KTtcbn1cblxuLnN0LW91dHB1dF9fZm9vdGVyIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogMTBweDtcbiAgbWFyZ2luOiAxNHB4IDAgMjBweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICBmb250LXNpemU6IDAuNzlyZW07XG59XG5cbi5zdC1vdXRwdXRfX2FjdGlvbnMge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogMTBweDtcbiAgcGFkZGluZy10b3A6IDE4cHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKHZhcigtLWlvbi1jb2xvci1tZWRpdW0tcmdiKSwgMC4yKTtcbn1cblxuLnN0LW91dHB1dF9fYWN0aW9ucyBpb24tYnV0dG9uIHtcbiAgbWluLXdpZHRoOiAxMzhweDtcbiAgbWFyZ2luOiAwO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uc3Qtb3V0cHV0X19iYWNrIHtcbiAgLS1jb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IpO1xuICAtLWJvcmRlci1jb2xvcjogcmdiYSh2YXIoLS1pb24tY29sb3ItbWVkaXVtLXJnYiksIDAuNCk7XG59XG5cbi5zdC1vdXRwdXRfX2Rvd25sb2FkIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1tYXRyaXgtYWNjZW50KTtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdCk7XG4gIC0tYm94LXNoYWRvdzogMCA4cHggMjBweCByZ2JhKHZhcigtLWlvbi1jb2xvci1kYW5nZXItcmdiKSwgMC4yNCk7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuc3Qtb3V0cHV0IHtcbiAgICBtYXJnaW46IDEycHggMTBweCAzMnB4O1xuICAgIHBhZGRpbmc6IDE2cHggMTJweDtcbiAgICBib3JkZXItcmFkaXVzOiAxOHB4O1xuICB9XG5cbiAgLnN0LW91dHB1dF9faGVhZGVyIHtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5cbiAgLnN0LW91dHB1dF9fdmlld3BvcnQge1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICB9XG5cbiAgLnN0LW91dHB1dF9fdGFibGUgdGgsXG4gIC5zdC1vdXRwdXRfX3RhYmxlIHRkIHtcbiAgICBtaW4td2lkdGg6IDY0cHg7XG4gICAgaGVpZ2h0OiA0MnB4O1xuICAgIHBhZGRpbmc6IDdweCA5cHg7XG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xuICB9XG5cbiAgLnN0LW91dHB1dF9fdGFibGUgdGhlYWQgLnN0LW91dHB1dF9fY29ybmVyLFxuICAuc3Qtb3V0cHV0X190YWJsZSB0Ym9keSB0aDpmaXJzdC1jaGlsZCB7XG4gICAgbWluLXdpZHRoOiA5NHB4O1xuICB9XG5cbiAgLnN0LW91dHB1dF9fYWN0aW9ucyBpb24tYnV0dG9uIHtcbiAgICBmbGV4OiAxO1xuICAgIG1pbi13aWR0aDogMDtcbiAgfVxufVxuXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xuICAuc3Qtb3V0cHV0X190YWJsZSB0ZCB7XG4gICAgdHJhbnNpdGlvbjogbm9uZTtcbiAgfVxufVxuIiwiLnN0LW91dHB1dCB7XG4gIC0tbWF0cml4LWFjY2VudDogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWF4LXdpZHRoOiAxNTAwcHg7XG4gIG1hcmdpbjogY2xhbXAoMTZweCwgM3Z3LCA0MHB4KSBhdXRvIDQ4cHg7XG4gIHBhZGRpbmc6IGNsYW1wKDE2cHgsIDIuNXZ3LCAzMHB4KTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE0NWRlZywgcmdiYSh2YXIoLS1pb24tY29sb3ItZGFuZ2VyLXJnYiksIDAuMDcpLCB0cmFuc3BhcmVudCAzNiUpLCB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvcikpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKHZhcigtLWlvbi1jb2xvci1tZWRpdW0tcmdiKSwgMC4yNCk7XG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gIGJveC1zaGFkb3c6IDAgMjJweCA1NnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi5zdC1vdXRwdXQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaW5zZXQ6IDAgMCBhdXRvO1xuICBoZWlnaHQ6IDRweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCB0cmFuc3BhcmVudCwgdmFyKC0tbWF0cml4LWFjY2VudCksIHRyYW5zcGFyZW50KTtcbn1cblxuLnN0LW91dHB1dF9faGVhZGVyLFxuLnN0LW91dHB1dF9fYmFkZ2UsXG4uc3Qtb3V0cHV0X19heGVzLFxuLnN0LW91dHB1dF9fYXhlcyBzcGFuLFxuLnN0LW91dHB1dF9fZm9vdGVyLFxuLnN0LW91dHB1dF9fYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zdC1vdXRwdXRfX2hlYWRlciB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xufVxuXG4uc3Qtb3V0cHV0X19leWVicm93IHtcbiAgbWFyZ2luOiAwIDAgOHB4O1xuICBjb2xvcjogdmFyKC0tbWF0cml4LWFjY2VudCk7XG4gIGZvbnQtc2l6ZTogMC43M3JlbTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMTVlbTtcbn1cblxuLnN0LW91dHB1dF9faGVhZGVyIGgyIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IGNsYW1wKDEuM3JlbSwgMi4zdncsIDEuODVyZW0pO1xuICBmb250LXdlaWdodDogODAwO1xufVxuXG4uc3Qtb3V0cHV0X19kZXNjcmlwdGlvbiB7XG4gIG1hcmdpbjogOHB4IDAgMDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICBmb250LXNpemU6IDAuOXJlbTtcbn1cblxuLnN0LW91dHB1dF9fYmFkZ2Uge1xuICBmbGV4OiBub25lO1xuICBnYXA6IDlweDtcbiAgcGFkZGluZzogMTBweCAxNHB4O1xuICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IpO1xuICBiYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1tZWRpdW0tcmdiKSwgMC4wOSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEodmFyKC0taW9uLWNvbG9yLW1lZGl1bS1yZ2IpLCAwLjIpO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBmb250LXNpemU6IDAuODRyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtdmFyaWFudC1udW1lcmljOiB0YWJ1bGFyLW51bXM7XG59XG5cbi5zdC1vdXRwdXRfX2JhZGdlIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLW1hdHJpeC1hY2NlbnQpO1xuICBmb250LXNpemU6IDEuMXJlbTtcbn1cblxuLnN0LW91dHB1dF9fYXhlcyB7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiA5cHggMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICBmb250LXNpemU6IDAuODJyZW07XG59XG5cbi5zdC1vdXRwdXRfX2F4ZXMgc3BhbiB7XG4gIGdhcDogN3B4O1xufVxuXG4uc3Qtb3V0cHV0X19heGVzIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLW1hdHJpeC1hY2NlbnQpO1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbi5zdC1vdXRwdXRfX3ZpZXdwb3J0IHtcbiAgbWF4LWhlaWdodDogbWluKDcwdmgsIDcyMHB4KTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHBhZGRpbmc6IDhweDtcbiAgYmFja2dyb3VuZDogIzExMTQxODtcbiAgYm9yZGVyOiAxcHggc29saWQgIzMwMzYzZDtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgc2Nyb2xsYmFyLWNvbG9yOiAjNmI3MzdkICMxNzFiMjA7XG59XG5cbi5zdC1vdXRwdXRfX3ZpZXdwb3J0OmZvY3VzLXZpc2libGUge1xuICBvdXRsaW5lOiAzcHggc29saWQgdmFyKC0tbWF0cml4LWFjY2VudCk7XG4gIG91dGxpbmUtb2Zmc2V0OiAzcHg7XG59XG5cbi5zdC1vdXRwdXRfX3RhYmxlIHtcbiAgd2lkdGg6IG1heC1jb250ZW50O1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XG4gIGJvcmRlci1zcGFjaW5nOiAzcHg7XG4gIGZvbnQtdmFyaWFudC1udW1lcmljOiB0YWJ1bGFyLW51bXM7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnN0LW91dHB1dF9fdGFibGUgdGgsXG4uc3Qtb3V0cHV0X190YWJsZSB0ZCB7XG4gIG1pbi13aWR0aDogNzZweDtcbiAgaGVpZ2h0OiA0OHB4O1xuICBwYWRkaW5nOiA4cHggMTJweDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uc3Qtb3V0cHV0X190YWJsZSB0aGVhZCB0aCB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMjtcbiAgY29sb3I6ICNmNmY3Zjg7XG4gIGJhY2tncm91bmQ6ICMzMDM3NDA7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgLTJweCAwICNiYTM0Mzg7XG4gIGZvbnQtc2l6ZTogMC44N3JlbTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuLnN0LW91dHB1dF9fdGFibGUgdGJvZHkgdGgge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxO1xuICBjb2xvcjogI2Y2ZjdmODtcbiAgYmFja2dyb3VuZDogIzMwMzc0MDtcbiAgYm94LXNoYWRvdzogaW5zZXQgLTJweCAwIDAgI2JhMzQzODtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5cbi5zdC1vdXRwdXRfX3RhYmxlIHRoZWFkIC5zdC1vdXRwdXRfX2Nvcm5lciB7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDM7XG4gIG1pbi13aWR0aDogMTEycHg7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAjYTgyMzJiO1xuICBib3gtc2hhZG93OiBub25lO1xuICBmb250LXNpemU6IDAuNzZyZW07XG59XG5cbi5zdC1vdXRwdXRfX3RhYmxlIHRib2R5IHRoOmZpcnN0LWNoaWxkIHtcbiAgbWluLXdpZHRoOiAxMTJweDtcbn1cblxuLnN0LW91dHB1dF9fdGFibGUgdGQge1xuICBjb2xvcjogIzE3MjAyODtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogODAwO1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDE2MG1zIGVhc2UsIGZpbHRlciAxNjBtcyBlYXNlO1xufVxuXG4uc3Qtb3V0cHV0X190YWJsZSB0Ym9keSB0cjpob3ZlciB0ZCB7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygxLjA1KTtcbn1cblxuLnN0LW91dHB1dF9fdGFibGUgdGJvZHkgdHI6aG92ZXIgdGgge1xuICBiYWNrZ3JvdW5kOiAjNDI0YjU1O1xufVxuXG4uc3Qtb3V0cHV0X190YWJsZSB0ZDpob3ZlciB7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDNweCByZ2JhKDE1LCAyMCwgMjUsIDAuNTUpO1xufVxuXG4uc3Qtb3V0cHV0X19mb290ZXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiAxMHB4O1xuICBtYXJnaW46IDE0cHggMCAyMHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIGZvbnQtc2l6ZTogMC43OXJlbTtcbn1cblxuLnN0LW91dHB1dF9fYWN0aW9ucyB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiAxMHB4O1xuICBwYWRkaW5nLXRvcDogMThweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEodmFyKC0taW9uLWNvbG9yLW1lZGl1bS1yZ2IpLCAwLjIpO1xufVxuXG4uc3Qtb3V0cHV0X19hY3Rpb25zIGlvbi1idXR0b24ge1xuICBtaW4td2lkdGg6IDEzOHB4O1xuICBtYXJnaW46IDA7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5zdC1vdXRwdXRfX2JhY2sge1xuICAtLWNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvcik7XG4gIC0tYm9yZGVyLWNvbG9yOiByZ2JhKHZhcigtLWlvbi1jb2xvci1tZWRpdW0tcmdiKSwgMC40KTtcbn1cblxuLnN0LW91dHB1dF9fZG93bmxvYWQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLW1hdHJpeC1hY2NlbnQpO1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0KTtcbiAgLS1ib3gtc2hhZG93OiAwIDhweCAyMHB4IHJnYmEodmFyKC0taW9uLWNvbG9yLWRhbmdlci1yZ2IpLCAwLjI0KTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5zdC1vdXRwdXQge1xuICAgIG1hcmdpbjogMTJweCAxMHB4IDMycHg7XG4gICAgcGFkZGluZzogMTZweCAxMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE4cHg7XG4gIH1cblxuICAuc3Qtb3V0cHV0X19oZWFkZXIge1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cblxuICAuc3Qtb3V0cHV0X192aWV3cG9ydCB7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIH1cblxuICAuc3Qtb3V0cHV0X190YWJsZSB0aCxcbi5zdC1vdXRwdXRfX3RhYmxlIHRkIHtcbiAgICBtaW4td2lkdGg6IDY0cHg7XG4gICAgaGVpZ2h0OiA0MnB4O1xuICAgIHBhZGRpbmc6IDdweCA5cHg7XG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xuICB9XG5cbiAgLnN0LW91dHB1dF9fdGFibGUgdGhlYWQgLnN0LW91dHB1dF9fY29ybmVyLFxuLnN0LW91dHB1dF9fdGFibGUgdGJvZHkgdGg6Zmlyc3QtY2hpbGQge1xuICAgIG1pbi13aWR0aDogOTRweDtcbiAgfVxuXG4gIC5zdC1vdXRwdXRfX2FjdGlvbnMgaW9uLWJ1dHRvbiB7XG4gICAgZmxleDogMTtcbiAgICBtaW4td2lkdGg6IDA7XG4gIH1cbn1cbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XG4gIC5zdC1vdXRwdXRfX3RhYmxlIHRkIHtcbiAgICB0cmFuc2l0aW9uOiBub25lO1xuICB9XG59XG46aG9zdC1jb250ZXh0KC5kYXJrLXRoZW1lKSB7XG4gIGNvbG9yLXNjaGVtZTogZGFyaztcbiAgY29sb3I6IHZhcigtLXR1bmVyLXRleHQpO1xuICAtLXR1bmVyLXBhZ2U6ICMxMTE1MWU7XG4gIC0tdHVuZXItc3VyZmFjZTogIzFjMjIzMDtcbiAgLS10dW5lci1zb2Z0OiAjMjUyZTNkO1xuICAtLXR1bmVyLWJvcmRlcjogIzQ2NTI2OTtcbiAgLS10dW5lci10ZXh0OiAjZWRmMWY4O1xuICAtLXR1bmVyLW11dGVkOiAjYjJiZmQxO1xuICAtLXR1bmVyLWhlYWRlcjogcmdiYSgyOCwgMzQsIDQ4LCAwLjk0KTtcbiAgLS10dW5lci1vdmVybGF5OiByZ2JhKDI4LCAzNCwgNDgsIDAuOTUpO1xuICAtLXR1bmVyLXB1cnBsZS10ZXh0OiAjYzRiNWZkO1xuICAtLXR1bmVyLXB1cnBsZS1zb2Z0OiAjMzAyNDQ0O1xuICAtLXR1bmVyLXB1cnBsZS1ib3JkZXI6ICM3MjU3OWI7XG4gIC0tdHVuZXItaW5mby10ZXh0OiAjOTNjNWZkO1xuICAtLXR1bmVyLWluZm8tc29mdDogIzFkMzA0YztcbiAgLS10dW5lci1pbmZvLWJvcmRlcjogIzQ2NmI5YTtcbiAgLS10dW5lci13YXJuaW5nLXRleHQ6ICNmY2Q0Nzc7XG4gIC0tdHVuZXItd2FybmluZy1zb2Z0OiAjM2IzMDIwO1xuICAtLXR1bmVyLXdhcm5pbmctYm9yZGVyOiAjOTM3NDNkO1xuICAtLXR1bmVyLXN1Y2Nlc3MtdGV4dDogIzg2ZWZhYztcbiAgLS10dW5lci1zdWNjZXNzLXNvZnQ6ICMxOTM5MmU7XG4gIC0tdHVuZXItc3VjY2Vzcy1ib3JkZXI6ICM0MTdkNjA7XG4gIC0tdHVuZXItZGFuZ2VyLXRleHQ6ICNmZGE0YWY7XG4gIC0tdHVuZXItZGFuZ2VyLXNvZnQ6ICM0MDI2MzE7XG4gIC0tdHVuZXItZGFuZ2VyLWJvcmRlcjogIzk4NTM2NztcbiAgLS10dW5lci10ZWFsLXRleHQ6ICM3ZGU0ZDQ7XG4gIC0tdHVuZXItdGVhbC1zb2Z0OiAjMTkzYTNhO1xuICAtLXR1bmVyLXRlYWwtYm9yZGVyOiAjNDM3ZjdjO1xufVxuOmhvc3QtY29udGV4dCguZGFyay10aGVtZSkgaW5wdXQ6bm90KFt0eXBlPXJhbmdlXSk6bm90KFt0eXBlPWNoZWNrYm94XSk6bm90KFt0eXBlPXJhZGlvXSk6bm90KFt0eXBlPWJ1dHRvbl0pOm5vdChbdHlwZT1zdWJtaXRdKTpub3QoW3R5cGU9ZmlsZV0pLFxuOmhvc3QtY29udGV4dCguZGFyay10aGVtZSkgdGV4dGFyZWEsXG46aG9zdC1jb250ZXh0KC5kYXJrLXRoZW1lKSBzZWxlY3Qge1xuICBjb2xvcjogdmFyKC0tdHVuZXItdGV4dCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXR1bmVyLXNvZnQpO1xufVxuOmhvc3QtY29udGV4dCguZGFyay10aGVtZSkgaW5wdXQ6OnBsYWNlaG9sZGVyLCA6aG9zdC1jb250ZXh0KC5kYXJrLXRoZW1lKSB0ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogdmFyKC0tdHVuZXItbXV0ZWQpO1xuICBvcGFjaXR5OiAwLjc1O1xufVxuOmhvc3QtY29udGV4dCguZGFyay10aGVtZSkgaW9uLWhlYWRlci5sZWFybmluZy1oZWFkZXIge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXR1bmVyLWhlYWRlcik7XG4gIGJhY2tncm91bmQ6IHZhcigtLXR1bmVyLWhlYWRlcik7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHZhcigtLXR1bmVyLWJvcmRlcik7XG59XG46aG9zdC1jb250ZXh0KC5kYXJrLXRoZW1lKSBpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tdHVuZXItcGFnZSk7XG4gIC0tY29sb3I6IHZhcigtLXR1bmVyLXRleHQpO1xufVxuOmhvc3QtY29udGV4dCguZGFyay10aGVtZSkgaW9uLWNhcmQ6bm90KFtjb2xvcl0pLCA6aG9zdC1jb250ZXh0KC5kYXJrLXRoZW1lKSBpb24tbGlzdCwgOmhvc3QtY29udGV4dCguZGFyay10aGVtZSkgaW9uLWl0ZW06bm90KFtjb2xvcl0pLCA6aG9zdC1jb250ZXh0KC5kYXJrLXRoZW1lKSBpb24taXRlbS1kaXZpZGVyOm5vdChbY29sb3JdKSB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tdHVuZXItc3VyZmFjZSk7XG4gIC0tY29sb3I6IHZhcigtLXR1bmVyLXRleHQpO1xuICAtLWJvcmRlci1jb2xvcjogdmFyKC0tdHVuZXItYm9yZGVyKTtcbn1cbjpob3N0LWNvbnRleHQoLmRhcmstdGhlbWUpIGlvbi1saXN0IHtcbiAgYmFja2dyb3VuZDogdmFyKC0tdHVuZXItc3VyZmFjZSk7XG59XG46aG9zdC1jb250ZXh0KC5kYXJrLXRoZW1lKSBpb24tY2FyZC10aXRsZSwgOmhvc3QtY29udGV4dCguZGFyay10aGVtZSkgaW9uLWNhcmQtc3VidGl0bGUge1xuICBjb2xvcjogdmFyKC0tdHVuZXItdGV4dCk7XG59XG46aG9zdC1jb250ZXh0KC5kYXJrLXRoZW1lKSBpb24tY2FyZFtjb2xvcj1saWdodGVzdF0sIDpob3N0LWNvbnRleHQoLmRhcmstdGhlbWUpIGlvbi1pdGVtW2NvbG9yPWxpZ2h0ZXN0XSwgOmhvc3QtY29udGV4dCguZGFyay10aGVtZSkgaW9uLWZhYi1idXR0b25bY29sb3I9bGlnaHRlc3RdIHtcbiAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0tdHVuZXItc3VyZmFjZSk7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS10dW5lci10ZXh0KTtcbiAgLS1pb24tY29sb3Itc2hhZGU6IHZhcigtLXR1bmVyLXNvZnQpO1xuICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS10dW5lci1zb2Z0KTtcbn1cbjpob3N0LWNvbnRleHQoLmRhcmstdGhlbWUpIGlvbi10ZXh0W2NvbG9yPWRhcmtdLCA6aG9zdC1jb250ZXh0KC5kYXJrLXRoZW1lKSBpb24tbGFiZWxbY29sb3I9ZGFya10ge1xuICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS10dW5lci10ZXh0KTtcbn0iLCIvLyBLZWVwIHRoZSBvcmlnaW5hbCBsaWdodCBjb2xvciBhdCBlYWNoIGNhbGwgc2l0ZS4gVG9rZW5zIGV4aXN0IG9ubHkgaW4gZGFyayBtb2RlLlxuQGZ1bmN0aW9uIHR1bmVyLWNvbG9yKCRyb2xlLCAkbGlnaHQpIHtcbiAgQHJldHVybiB2YXIoLS10dW5lci0jeyRyb2xlfSwgI3skbGlnaHR9KTtcbn1cblxuQG1peGluIHR1bmVyLWRhcmstdGhlbWUge1xuICA6aG9zdC1jb250ZXh0KC5kYXJrLXRoZW1lKSB7XG4gICAgY29sb3Itc2NoZW1lOiBkYXJrO1xuICAgIGNvbG9yOiB2YXIoLS10dW5lci10ZXh0KTtcbiAgICAtLXR1bmVyLXBhZ2U6ICMxMTE1MWU7XG4gICAgLS10dW5lci1zdXJmYWNlOiAjMWMyMjMwO1xuICAgIC0tdHVuZXItc29mdDogIzI1MmUzZDtcbiAgICAtLXR1bmVyLWJvcmRlcjogIzQ2NTI2OTtcbiAgICAtLXR1bmVyLXRleHQ6ICNlZGYxZjg7XG4gICAgLS10dW5lci1tdXRlZDogI2IyYmZkMTtcbiAgICAtLXR1bmVyLWhlYWRlcjogcmdiYSgyOCwgMzQsIDQ4LCAwLjk0KTtcbiAgICAtLXR1bmVyLW92ZXJsYXk6IHJnYmEoMjgsIDM0LCA0OCwgMC45NSk7XG4gICAgLS10dW5lci1wdXJwbGUtdGV4dDogI2M0YjVmZDtcbiAgICAtLXR1bmVyLXB1cnBsZS1zb2Z0OiAjMzAyNDQ0O1xuICAgIC0tdHVuZXItcHVycGxlLWJvcmRlcjogIzcyNTc5YjtcbiAgICAtLXR1bmVyLWluZm8tdGV4dDogIzkzYzVmZDtcbiAgICAtLXR1bmVyLWluZm8tc29mdDogIzFkMzA0YztcbiAgICAtLXR1bmVyLWluZm8tYm9yZGVyOiAjNDY2YjlhO1xuICAgIC0tdHVuZXItd2FybmluZy10ZXh0OiAjZmNkNDc3O1xuICAgIC0tdHVuZXItd2FybmluZy1zb2Z0OiAjM2IzMDIwO1xuICAgIC0tdHVuZXItd2FybmluZy1ib3JkZXI6ICM5Mzc0M2Q7XG4gICAgLS10dW5lci1zdWNjZXNzLXRleHQ6ICM4NmVmYWM7XG4gICAgLS10dW5lci1zdWNjZXNzLXNvZnQ6ICMxOTM5MmU7XG4gICAgLS10dW5lci1zdWNjZXNzLWJvcmRlcjogIzQxN2Q2MDtcbiAgICAtLXR1bmVyLWRhbmdlci10ZXh0OiAjZmRhNGFmO1xuICAgIC0tdHVuZXItZGFuZ2VyLXNvZnQ6ICM0MDI2MzE7XG4gICAgLS10dW5lci1kYW5nZXItYm9yZGVyOiAjOTg1MzY3O1xuICAgIC0tdHVuZXItdGVhbC10ZXh0OiAjN2RlNGQ0O1xuICAgIC0tdHVuZXItdGVhbC1zb2Z0OiAjMTkzYTNhO1xuICAgIC0tdHVuZXItdGVhbC1ib3JkZXI6ICM0MzdmN2M7XG5cbiAgICAvLyBOYXRpdmUgY29udHJvbHMgd2l0aG91dCBhbiBleHBsaWNpdCBsaWdodCBiYWNrZ3JvdW5kIG5lZWQgYSBkYXJrIHN1cmZhY2UgdG9vLlxuICAgIGlucHV0Om5vdChbdHlwZT0ncmFuZ2UnXSk6bm90KFt0eXBlPSdjaGVja2JveCddKTpub3QoW3R5cGU9J3JhZGlvJ10pOm5vdChbdHlwZT0nYnV0dG9uJ10pOm5vdChbdHlwZT0nc3VibWl0J10pOm5vdChbdHlwZT0nZmlsZSddKSxcbiAgICB0ZXh0YXJlYSxcbiAgICBzZWxlY3Qge1xuICAgICAgY29sb3I6IHZhcigtLXR1bmVyLXRleHQpO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHVuZXItc29mdCk7XG4gICAgfVxuXG4gICAgaW5wdXQ6OnBsYWNlaG9sZGVyLCB0ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xuICAgICAgY29sb3I6IHZhcigtLXR1bmVyLW11dGVkKTtcbiAgICAgIG9wYWNpdHk6IDAuNzU7XG4gICAgfVxuXG4gICAgaW9uLWhlYWRlci5sZWFybmluZy1oZWFkZXIge1xuICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS10dW5lci1oZWFkZXIpO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tdHVuZXItaGVhZGVyKTtcbiAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHZhcigtLXR1bmVyLWJvcmRlcik7XG4gICAgfVxuICAgIGlvbi1jb250ZW50IHsgLS1iYWNrZ3JvdW5kOiB2YXIoLS10dW5lci1wYWdlKTsgLS1jb2xvcjogdmFyKC0tdHVuZXItdGV4dCk7IH1cbiAgICBpb24tY2FyZDpub3QoW2NvbG9yXSksIGlvbi1saXN0LCBpb24taXRlbTpub3QoW2NvbG9yXSksIGlvbi1pdGVtLWRpdmlkZXI6bm90KFtjb2xvcl0pIHtcbiAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0tdHVuZXItc3VyZmFjZSk7XG4gICAgICAtLWNvbG9yOiB2YXIoLS10dW5lci10ZXh0KTtcbiAgICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS10dW5lci1ib3JkZXIpO1xuICAgIH1cbiAgICBpb24tbGlzdCB7IGJhY2tncm91bmQ6IHZhcigtLXR1bmVyLXN1cmZhY2UpOyB9XG4gICAgaW9uLWNhcmQtdGl0bGUsIGlvbi1jYXJkLXN1YnRpdGxlIHsgY29sb3I6IHZhcigtLXR1bmVyLXRleHQpOyB9XG4gICAgaW9uLWNhcmRbY29sb3I9J2xpZ2h0ZXN0J10sIGlvbi1pdGVtW2NvbG9yPSdsaWdodGVzdCddLCBpb24tZmFiLWJ1dHRvbltjb2xvcj0nbGlnaHRlc3QnXSB7XG4gICAgICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS10dW5lci1zdXJmYWNlKTtcbiAgICAgIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS10dW5lci10ZXh0KTtcbiAgICAgIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS10dW5lci1zb2Z0KTtcbiAgICAgIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLXR1bmVyLXNvZnQpO1xuICAgIH1cbiAgICBpb24tdGV4dFtjb2xvcj0nZGFyayddLCBpb24tbGFiZWxbY29sb3I9J2RhcmsnXSB7IC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLXR1bmVyLXRleHQpOyB9XG4gIH1cbn1cbiJdfQ== */";

/***/ }),

/***/ 14864:
/*!*************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/cfm/cfm.component.html?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"interior-header\" translucent=\"true\">\n  <app-loading></app-loading>\n  <app-page-header fallback=\"/TunerPlus\" [defaultBack]=\"false\">\n<ion-buttons page-back><ion-back-button text=\"\" icon=\"arrow-back-outline\"\r\n        color=\"lightest\"\r\n        defaultHref=\"/TunerPlus\"\r\n      ></ion-back-button></ion-buttons>\n<span page-title dir=\"rtl\" *ngIf=\"!showSearchbar\" class=\"title-size no-padding\"\r\n      >محاسبه جریان هوا موتور (Intake Flow)</span>\n<ion-buttons page-actions slot=\"end\" *ngIf=\"!showSearchbar\">\r\n      <ion-button (click)=\"showSearchbar = true\">\r\n        <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\n<ion-searchbar\r\n      dir=\"rtl\"\r\n      *ngIf=\"showSearchbar\"\r\n      showCancelButton=\"always\"\r\n      [(ngModel)]=\"queryText\"\r\n      placeholder=\"جستجوی آموزشگاه\"\r\n      (ionCancel)=\"onCancel()\"\r\n      (keyup.enter)=\"search()\"\r\n    ></ion-searchbar>\n\n  </app-page-header>\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <Section *ngIf=\"!isCheck\">\r\n    <ion-grid fixed *ngIf=\"!isShow\">\r\n      <ion-row>\r\n        <ion-col\r\n          dir=\"rtl\"\r\n          size=\"12\"\r\n          offset=\"0\"\r\n          size-md=\"10\"\r\n          offset-md=\"1\"\r\n          size-lg=\"8\"\r\n          offset-lg=\"2\"\r\n        >\r\n          <ion-card>\r\n            <ion-item>\r\n              <ion-label>ابعاد جدول</ion-label>\r\n              <ion-select\r\n                (ionChange)=\"tableSizeChanged()\"\r\n                [(ngModel)]=\"tableSizeSelected\"\r\n                value=\"16\"\r\n              >\r\n                <ion-select-option value=\"16\">16*16</ion-select-option>\r\n                <ion-select-option value=\"12\">12*12</ion-select-option>\r\n                <ion-select-option value=\"9\">9*9</ion-select-option>\r\n                <ion-select-option value=\"8\">8*8</ion-select-option>\r\n              </ion-select>\r\n            </ion-item>\r\n\r\n            <form [formGroup]=\"form\" (ngSubmit)=\"onCalc()\">\r\n              <ion-card-header color=\"primary\">\r\n                <ion-card-title class=\"text-center\"\r\n                  >محاسبه جریان هوا موتور (Intake Flow)</ion-card-title\r\n                >\r\n              </ion-card-header>\r\n              <ion-list>\r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon\r\n                    color=\"success\"\r\n                    slot=\"start\"\r\n                    name=\"speedometer-outline\"\r\n                  ></ion-icon>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >دور آرام (RPM)</ion-label\r\n                  >\r\n                  <ion-input\r\n                    placeholder=\"900\"\r\n                    formControlName=\"idleRpm\"\r\n                    type=\"number\"\r\n                  >\r\n                  </ion-input>\r\n                  <ion-button\r\n                    size=\"large\"\r\n                    fill=\"clear\"\r\n                    shape=\"round\"\r\n                    color=\"twitter\"\r\n                    slot=\"end\"\r\n                    (click)=\"onInfo('idleRpm')\"\r\n                  >\r\n                    <ion-icon\r\n                      size=\"large\"\r\n                      slot=\"icon-only\"\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n\r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon\r\n                    color=\"twitter\"\r\n                    slot=\"start\"\r\n                    name=\"pulse-outline\"\r\n                  ></ion-icon>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >وکیوم دور آرام (in·Hg)</ion-label\r\n                  >\r\n                  <ion-input\r\n                    placeholder=\"24\"\r\n                    formControlName=\"idleVacuum\"\r\n                    type=\"number\"\r\n                  >\r\n                  </ion-input>\r\n                  <ion-button\r\n                    size=\"large\"\r\n                    fill=\"clear\"\r\n                    shape=\"round\"\r\n                    color=\"twitter\"\r\n                    slot=\"end\"\r\n                    (click)=\"onInfo('idleVacuum')\"\r\n                  >\r\n                    <ion-icon\r\n                      size=\"large\"\r\n                      slot=\"icon-only\"\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n\r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon\r\n                    color=\"danger\"\r\n                    slot=\"start\"\r\n                    name=\"speedometer-outline\"\r\n                  ></ion-icon>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >دور موتور کاتاف</ion-label\r\n                  >\r\n                  <ion-input\r\n                    placeholder=\"6000\"\r\n                    formControlName=\"rpmRedline\"\r\n                    type=\"number\"\r\n                  >\r\n                  </ion-input>\r\n                  <ion-button\r\n                    size=\"large\"\r\n                    fill=\"clear\"\r\n                    shape=\"round\"\r\n                    color=\"twitter\"\r\n                    slot=\"end\"\r\n                    (click)=\"onInfo('rpmRedline')\"\r\n                  >\r\n                    <ion-icon\r\n                      size=\"large\"\r\n                      slot=\"icon-only\"\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n\r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon\r\n                    color=\"warning\"\r\n                    slot=\"start\"\r\n                    name=\"flame-outline\"\r\n                  ></ion-icon>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >اوج توان (HP)</ion-label\r\n                  >\r\n                  <ion-input\r\n                    placeholder=\"100\"\r\n                    formControlName=\"peakHp\"\r\n                    type=\"number\"\r\n                  >\r\n                  </ion-input>\r\n                  <ion-button\r\n                    size=\"large\"\r\n                    fill=\"clear\"\r\n                    shape=\"round\"\r\n                    color=\"twitter\"\r\n                    slot=\"end\"\r\n                    (click)=\"onInfo('peakHp')\"\r\n                  >\r\n                    <ion-icon\r\n                      size=\"large\"\r\n                      slot=\"icon-only\"\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n\r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon\r\n                    color=\"danger\"\r\n                    slot=\"start\"\r\n                    name=\"speedometer-outline\"\r\n                  ></ion-icon>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >دوره موتوره اوج توان</ion-label\r\n                  >\r\n                  <ion-input\r\n                    placeholder=\"5000\"\r\n                    formControlName=\"peakHpRpm\"\r\n                    type=\"number\"\r\n                  >\r\n                  </ion-input>\r\n                  <ion-button\r\n                    size=\"large\"\r\n                    fill=\"clear\"\r\n                    shape=\"round\"\r\n                    color=\"twitter\"\r\n                    slot=\"end\"\r\n                    (click)=\"onInfo('peakHpRpm')\"\r\n                  >\r\n                    <ion-icon\r\n                      size=\"large\"\r\n                      slot=\"icon-only\"\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n\r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon\r\n                    color=\"warning\"\r\n                    slot=\"start\"\r\n                    name=\"flash-outline\"\r\n                  ></ion-icon>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >اوج گشتاور (Nm)</ion-label\r\n                  >\r\n                  <ion-input\r\n                    placeholder=\"170\"\r\n                    formControlName=\"peakTorqu\"\r\n                    type=\"number\"\r\n                  >\r\n                  </ion-input>\r\n                  <ion-button\r\n                    size=\"large\"\r\n                    fill=\"clear\"\r\n                    shape=\"round\"\r\n                    color=\"twitter\"\r\n                    slot=\"end\"\r\n                    (click)=\"onInfo('peakTorqu')\"\r\n                  >\r\n                    <ion-icon\r\n                      size=\"large\"\r\n                      slot=\"icon-only\"\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n\r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon\r\n                    color=\"danger\"\r\n                    slot=\"start\"\r\n                    name=\"speedometer-outline\"\r\n                  ></ion-icon>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >دوره موتوره اوج گشتاور</ion-label\r\n                  >\r\n                  <ion-input\r\n                    placeholder=\"3000\"\r\n                    formControlName=\"peakTorquRpm\"\r\n                    type=\"number\"\r\n                  >\r\n                  </ion-input>\r\n                  <ion-button\r\n                    size=\"large\"\r\n                    fill=\"clear\"\r\n                    shape=\"round\"\r\n                    color=\"twitter\"\r\n                    slot=\"end\"\r\n                    (click)=\"onInfo('peakTorquRpm')\"\r\n                  >\r\n                    <ion-icon\r\n                      size=\"large\"\r\n                      slot=\"icon-only\"\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n\r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon\r\n                    color=\"success\"\r\n                    slot=\"start\"\r\n                    name=\"cube-outline\"\r\n                  ></ion-icon>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >حجم موتور (cc)</ion-label\r\n                  >\r\n                  <ion-input\r\n                    placeholder=\"2000\"\r\n                    formControlName=\"engineVolum\"\r\n                    type=\"number\"\r\n                  >\r\n                  </ion-input>\r\n                  <ion-button\r\n                    size=\"large\"\r\n                    fill=\"clear\"\r\n                    shape=\"round\"\r\n                    color=\"twitter\"\r\n                    slot=\"end\"\r\n                    (click)=\"onInfo('engineVolum')\"\r\n                  >\r\n                    <ion-icon\r\n                      size=\"large\"\r\n                      slot=\"icon-only\"\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n\r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon\r\n                    color=\"instagram\"\r\n                    slot=\"start\"\r\n                    name=\"rocket-outline\"\r\n                  ></ion-icon>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >بوست توربو (PSI)</ion-label\r\n                  >\r\n                  <ion-input\r\n                    placeholder=\"0\"\r\n                    formControlName=\"boost\"\r\n                    type=\"number\"\r\n                  >\r\n                  </ion-input>\r\n                  <ion-button\r\n                    size=\"large\"\r\n                    fill=\"clear\"\r\n                    shape=\"round\"\r\n                    color=\"twitter\"\r\n                    slot=\"end\"\r\n                    (click)=\"onInfo('boost')\"\r\n                  >\r\n                    <ion-icon\r\n                      size=\"large\"\r\n                      slot=\"icon-only\"\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n\r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon\r\n                    color=\"danger\"\r\n                    slot=\"start\"\r\n                    name=\"thermometer-outline\"\r\n                  ></ion-icon>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >دمای هوای منیفولد (°C)</ion-label\r\n                  >\r\n                  <ion-input\r\n                    placeholder=\"50\"\r\n                    formControlName=\"temp\"\r\n                    type=\"number\"\r\n                  >\r\n                  </ion-input>\r\n                  <ion-button\r\n                    size=\"large\"\r\n                    fill=\"clear\"\r\n                    shape=\"round\"\r\n                    color=\"twitter\"\r\n                    slot=\"end\"\r\n                    (click)=\"onInfo('temp')\"\r\n                  >\r\n                    <ion-icon\r\n                      size=\"large\"\r\n                      slot=\"icon-only\"\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n              </ion-list>\r\n\r\n              <ion-button\r\n                class=\"ion-margin\"\r\n                expand=\"block\"\r\n                fill=\"solid\"\r\n                shape=\"round\"\r\n                color=\"success\"\r\n                type=\"submit\"\r\n                [disabled]=\"form.invalid\"\r\n              >\r\n                محاسبه\r\n              </ion-button>\r\n\r\n              <ion-button\r\n                class=\"ion-margin\"\r\n                expand=\"block\"\r\n                fill=\"clear\"\r\n                shape=\"round\"\r\n                color=\"warning\"\r\n                (click)=\"form.reset()\"\r\n              >\r\n                ریست\r\n              </ion-button>\r\n            </form>\r\n          </ion-card>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n    <ion-card *ngIf=\"isShow\">\r\n      <ion-item dir=\"rtl\">\r\n        <ion-label>واحد اندازه گیری</ion-label>\r\n        <ion-select\r\n          (ionChange)=\"unitChanged()\"\r\n          [(ngModel)]=\"unit\"\r\n          value=\"lbs\"\r\n        >\r\n          <ion-select-option value=\"lbs\">lbs/min</ion-select-option>\r\n          <ion-select-option value=\"cfm\">cfm</ion-select-option>\r\n          <ion-select-option value=\"kg\">kg/s</ion-select-option>\r\n        </ion-select>\r\n      </ion-item>\r\n    </ion-card>\r\n\r\n    <section class=\"st-output\" *ngIf=\"isShow\" dir=\"rtl\">\r\n      <div class=\"st-output__header\">\r\n        <div>\r\n          <p class=\"st-output__eyebrow\">TUNER PLUS / INTAKE FLOW</p>\r\n          <h2>جدول جریان هوای ورودی</h2>\r\n          <p class=\"st-output__description\">جریان محاسبه‌شده موتور در دور و بارهای مختلف</p>\r\n        </div>\r\n        <div class=\"st-output__badge\" aria-label=\"ابعاد جدول\">\r\n          <ion-icon name=\"grid-outline\" aria-hidden=\"true\"></ion-icon>\r\n          <span>{{ VE.length - 1 }} ردیف × {{ VE[0].length - 1 }} ستون</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"st-output__axes\" aria-hidden=\"true\">\r\n        <span><ion-icon name=\"speedometer-outline\"></ion-icon>محور افقی: دور موتور (RPM)</span>\r\n        <span><ion-icon name=\"pulse-outline\"></ion-icon>محور عمودی: فشار مانیفولد (kPa)</span>\r\n      </div>\r\n      <div class=\"st-output__viewport\" role=\"region\" tabindex=\"0\" aria-label=\"جدول CFM؛ برای دیدن همه ستون‌ها به صورت افقی حرکت کنید\">\r\n        <table class=\"st-output__table\" dir=\"ltr\" aria-label=\"جدول جریان هوای ورودی\">\r\n          <thead>\r\n            <tr>\r\n              <th *ngFor=\"let rpm of VE[0]; index as i\" scope=\"col\" [class.st-output__corner]=\"i === 0\">\r\n                {{ i === 0 ? 'MAP / RPM' : rpm }}\r\n              </th>\r\n            </tr>\r\n          </thead>\r\n          <tbody *ngIf=\"!veMode\">\r\n            <ng-container *ngFor=\"let row of VE; index as i\">\r\n              <tr *ngIf=\"i !== 0\">\r\n                <ng-container *ngFor=\"let item of row; index as j\">\r\n                  <th *ngIf=\"j === 0\" scope=\"row\">{{ item }}</th>\r\n                  <td *ngIf=\"j !== 0\" [style.background-color]=\"calcColor2(item, j)\">{{ item }}</td>\r\n                </ng-container>\r\n              </tr>\r\n            </ng-container>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n      <div class=\"st-output__footer\">\r\n        <span>مقادیر خانه‌ها بر اساس ورودی‌های شما محاسبه شده‌اند.</span>\r\n        <span>برای مشاهده همه خانه‌ها، جدول را بکشید.</span>\r\n      </div>\r\n      <div class=\"st-output__actions\">\r\n        <ion-button class=\"st-output__back\" (click)=\"onBack()\" fill=\"outline\" shape=\"round\">\r\n          <ion-icon slot=\"start\" name=\"arrow-forward-outline\"></ion-icon>\r\n          بازگشت\r\n        </ion-button>\r\n        <ion-button class=\"st-output__download\" (click)=\"exportTable()\" fill=\"solid\" shape=\"round\">\r\n          <ion-icon slot=\"start\" name=\"download-outline\"></ion-icon>\r\n          دانلود جدول\r\n        </ion-button>\r\n      </div>\r\n    </section>\r\n  </Section>\r\n\r\n  <app-footer></app-footer>\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button>\r\n      <ion-icon name=\"share-social-outline\"></ion-icon>\r\n    </ion-fab-button>\r\n    <ion-fab-list side=\"end\">\r\n      <ion-fab-button><ion-icon name=\"logo-vimeo\"></ion-icon></ion-fab-button>\r\n    </ion-fab-list>\r\n\r\n    <ion-fab-list side=\"top\">\r\n      <ion-fab-button color=\"instagram\">\r\n        <a\r\n          class=\"full-width full-height social-icon-container\"\r\n          href=\"{{ instagram }}\"\r\n          target=\"_blank\"\r\n        >\r\n          <ion-icon\r\n            class=\"social-icon\"\r\n            color=\"lightest\"\r\n            name=\"logo-instagram\"\r\n          ></ion-icon></a\r\n      ></ion-fab-button>\r\n      <ion-fab-button color=\"instagram\"\r\n        ><a\r\n          class=\"full-width full-height social-icon-container\"\r\n          href=\"{{ twitch }}\"\r\n          target=\"_blank\"\r\n        >\r\n          <ion-icon\r\n            class=\"social-icon\"\r\n            color=\"lightest\"\r\n            name=\"logo-twitch\"\r\n          ></ion-icon></a\r\n      ></ion-fab-button>\r\n      <ion-fab-button color=\"discord\"\r\n        ><a\r\n          class=\"full-width full-height social-icon-container\"\r\n          href=\"{{ discord }}\"\r\n          target=\"_blank\"\r\n        >\r\n          <ion-icon\r\n            class=\"social-icon\"\r\n            color=\"lightest\"\r\n            name=\"logo-discord\"\r\n          ></ion-icon></a\r\n      ></ion-fab-button>\r\n      <ion-fab-button color=\"danger\"\r\n        ><a\r\n          class=\"full-width full-height social-icon-container\"\r\n          href=\"{{ youtube }}\"\r\n          target=\"_blank\"\r\n        >\r\n          <ion-icon\r\n            class=\"social-icon\"\r\n            color=\"lightest\"\r\n            name=\"logo-youtube\"\r\n          ></ion-icon></a\r\n      ></ion-fab-button>\r\n      <ion-fab-button color=\"danger\"\r\n        ><a\r\n          class=\"full-width full-height social-icon-container\"\r\n          href=\"{{ pinterest }}\"\r\n          target=\"_blank\"\r\n        >\r\n          <ion-icon\r\n            class=\"social-icon\"\r\n            color=\"lightest\"\r\n            name=\"logo-pinterest\"\r\n          ></ion-icon></a\r\n      ></ion-fab-button>\r\n      <ion-fab-button color=\"facebook\"\r\n        ><a\r\n          class=\"full-width full-height social-icon-container\"\r\n          href=\"{{ facebook }}\"\r\n          target=\"_blank\"\r\n        >\r\n          <ion-icon\r\n            class=\"social-icon\"\r\n            color=\"lightest\"\r\n            name=\"logo-facebook\"\r\n          ></ion-icon></a\r\n      ></ion-fab-button>\r\n      <ion-fab-button color=\"twitter\"\r\n        ><a\r\n          class=\"full-width full-height social-icon-container\"\r\n          href=\"{{ twiter }}\"\r\n          target=\"_blank\"\r\n        >\r\n          <ion-icon\r\n            class=\"social-icon\"\r\n            color=\"lightest\"\r\n            name=\"logo-twitter\"\r\n          ></ion-icon></a\r\n      ></ion-fab-button>\r\n      <ion-fab-button color=\"twitter\"\r\n        ><a\r\n          class=\"full-width full-height social-icon-container\"\r\n          href=\"{{ linkedin }}\"\r\n          target=\"_blank\"\r\n        >\r\n          <ion-icon\r\n            class=\"social-icon\"\r\n            color=\"lightest\"\r\n            name=\"logo-linkedin\"\r\n          ></ion-icon></a\r\n      ></ion-fab-button>\r\n      <ion-fab-button color=\"telegram\"\r\n        ><a\r\n          class=\"full-width full-height social-icon-container\"\r\n          href=\"{{ telegram }}\"\r\n          target=\"_blank\"\r\n        >\r\n          <ion-icon\r\n            class=\"social-icon\"\r\n            color=\"lightest\"\r\n            name=\"paper-plane-outline\"\r\n          ></ion-icon></a\r\n      ></ion-fab-button>\r\n      <ion-fab-button color=\"lightest\"\r\n        ><a\r\n          class=\"full-width full-height social-icon-container\"\r\n          href=\"{{ aparat }}\"\r\n          target=\"_blank\"\r\n        >\r\n          <ion-icon\r\n            class=\"social-icon\"\r\n            color=\"lightest\"\r\n            src=\"/assets/icon/logo-aparat.svg\"\r\n          ></ion-icon></a\r\n      ></ion-fab-button>\r\n    </ion-fab-list>\r\n  </ion-fab>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_view_pages_tuner-plus_cfm_cfm_module_ts.js.map