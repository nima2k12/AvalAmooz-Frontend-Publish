"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_view_pages_tuner-plus_ve_ve_module_ts"],{

/***/ 98403:
/*!***************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/ve/ve-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VERoutingModule": () => (/* binding */ VERoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ve_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ve.component */ 84358);




const routes = [{ path: '', component: _ve_component__WEBPACK_IMPORTED_MODULE_0__.VEComponent }];
let VERoutingModule = class VERoutingModule {
};
VERoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], VERoutingModule);



/***/ }),

/***/ 84358:
/*!**********************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/ve/ve.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VEComponent": () => (/* binding */ VEComponent)
/* harmony export */ });
/* harmony import */ var G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _ve_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ve.component.html?ngResource */ 93303);
/* harmony import */ var _ve_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ve.component.scss?ngResource */ 71647);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_core_common_G__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/common/G */ 67122);
/* harmony import */ var _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/common/GResponse */ 54021);
/* harmony import */ var _core_common_Urls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../core/common/Urls */ 35602);
/* harmony import */ var _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../core/common/SharedIonic */ 97112);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _data_service_site_Slider_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../data/service/site/Slider.service */ 79519);
/* harmony import */ var _data_service_course_course_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../data/service/course/course.service */ 29209);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! file-saver */ 65226);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_9__);




/* eslint-disable prefer-const */

/* eslint-disable @typescript-eslint/prefer-for-of */

/* eslint-disable max-len */

/* eslint-disable guard-for-in */

/* eslint-disable eqeqeq */

/* eslint-disable @typescript-eslint/naming-convention */













let VEComponent = class VEComponent {
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
    this.tableSize = 16;
    this.tableSizeSelected = '16';
    this.min = 300;
    this.max = 0;
    this.veMode = true;
    this.isShow = false;
    this.check();
  }

  tableSizeChanged() {
    this.tableSize = +this.tableSizeSelected;
  }

  onCFM() {
    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.loading(this.loadingController);
    const displacement = this.form.value.engineVolum / 1000 * 61;

    for (let i = 1; i < this.VE.length; i++) {
      for (let j = 0; j < this.VE[i].length; j++) {
        if (j != 0) {
          this.VE[i][j] = Math.round(this.VE[i][j] * this.VE[0][j] * displacement / 345600);
        }
      }
    }

    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController);
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
    <table cols="` + _this.form.value.x + `" rows="` + _this.form.value.y + `">
    <xAxis cols="` + _this.form.value.y + `" name="rpm">
             ` + tableRpm + `</xAxis>
    <yAxis name="fuelload" rows="` + _this.form.value.y + `">
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
        file_saver__WEBPACK_IMPORTED_MODULE_9__.saveAs(blob, 'VE Table - ' + latestDateDetail + '.table');
      } catch (e) {
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(_this.toastController, 'مرورگر شما از این قابلیت پشتیبانی نمیکند');
      }
    })();
  }

  check() {
    var _this2 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.loading(_this2.loadingController);

      _this2.siteService.GetTunerPlusById(7).subscribe(res => {
        if (res.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
          if (res.data.isActive) {
            if (!res.data.isFree) {
              _this2.courseService.GetUserCoursesId().subscribe(ress => {
                if (ress.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
                  let found = false;
                  res.data.courseIds.forEach(courseId => {
                    if (ress.data.find(n => n == courseId)) {
                      found = true;

                      _this2.courseService.GetUserTunerPlusAccess().subscribe(resss => {
                        if (resss.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
                          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(_this2.loadingController);
                          _this2.isCheck = false;
                        } else {
                          _this2.router.navigateByUrl(_core_common_Urls__WEBPACK_IMPORTED_MODULE_5__.Urls.AccessDeniedTunerPlusUrl);

                          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(_this2.loadingController);
                        }
                      }, errs => {
                        _this2.router.navigateByUrl(_core_common_Urls__WEBPACK_IMPORTED_MODULE_5__.Urls.AccessDeniedTunerPlusUrl);

                        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(_this2.loadingController);
                      });
                    }
                  });

                  if (!found) {
                    _this2.router.navigateByUrl(_core_common_Urls__WEBPACK_IMPORTED_MODULE_5__.Urls.AccessDeniedTunerPlusUrl);

                    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(_this2.loadingController);
                  }
                } else {
                  _this2.router.navigateByUrl(_core_common_Urls__WEBPACK_IMPORTED_MODULE_5__.Urls.AccessDeniedTunerPlusUrl);

                  _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(_this2.loadingController);
                }
              }, errs => {
                _this2.router.navigateByUrl(_core_common_Urls__WEBPACK_IMPORTED_MODULE_5__.Urls.AccessDeniedTunerPlusUrl);

                _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(_this2.loadingController);
              });
            } else {
              _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(_this2.loadingController);
              _this2.isCheck = false;
            }
          } else {
            _this2.router.navigateByUrl(_core_common_Urls__WEBPACK_IMPORTED_MODULE_5__.Urls.AccessDeniedTunerPlusUrl);

            _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(_this2.loadingController);
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
          _this2.router.navigateByUrl(_core_common_Urls__WEBPACK_IMPORTED_MODULE_5__.Urls.AccessDeniedTunerPlusUrl);

          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(_this2.loadingController);
        }
      }, err => {
        _this2.router.navigateByUrl(_core_common_Urls__WEBPACK_IMPORTED_MODULE_5__.Urls.AccessDeniedTunerPlusUrl);

        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(_this2.loadingController);
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
    this.instagram = src_app_core_common_G__WEBPACK_IMPORTED_MODULE_3__.G.Instagram;
    this.twiter = src_app_core_common_G__WEBPACK_IMPORTED_MODULE_3__.G.Twiter;
    this.facebook = src_app_core_common_G__WEBPACK_IMPORTED_MODULE_3__.G.Facebook;
    this.telegram = src_app_core_common_G__WEBPACK_IMPORTED_MODULE_3__.G.Telegram;
    this.youtube = src_app_core_common_G__WEBPACK_IMPORTED_MODULE_3__.G.Youtube;
    this.pinterest = src_app_core_common_G__WEBPACK_IMPORTED_MODULE_3__.G.Pinterest;
    this.linkedin = src_app_core_common_G__WEBPACK_IMPORTED_MODULE_3__.G.Linkedin;
    this.twitch = src_app_core_common_G__WEBPACK_IMPORTED_MODULE_3__.G.Twitch;
    this.aparat = src_app_core_common_G__WEBPACK_IMPORTED_MODULE_3__.G.Aparat;
    this.discord = src_app_core_common_G__WEBPACK_IMPORTED_MODULE_3__.G.Discord;
    this.form = this.fb.group({
      idleRpm: [900, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.min(300), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.max(9000)]],
      idleVacuum: [24, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.min(5), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.max(30)]],
      rpmRedline: [7000, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.min(3000), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.max(20000)]],
      peakHp: [100, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.min(30), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.max(20000)]],
      peakHpRpm: [5000, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.min(2000), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.max(20000)]],
      peakTorqu: [170, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.min(20), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.max(30000)]],
      peakTorquRpm: [3000, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.min(1000), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.max(20000)]],
      engineVolum: [2000, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.min(600), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.max(20000)]],
      x: [16, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.min(4), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.max(50)]],
      y: [16, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.min(4), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.max(50)]],
      boost: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.max(200)]]
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

    _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.loading(this.loadingController);
    this.courseService.GetUserTunerPlusAccess().subscribe(resss => {
      if (resss.status === _core_common_GResponse__WEBPACK_IMPORTED_MODULE_4__.GResponse.SuccessStatus) {
        if (!this.check_errors()) {
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController);
        } else {
          this.make_VE_table();
          this.rpm_bins(this.form.value.rpmRedline, this.form.value.idleRpm);
          this.map_bins(this.form.value.boost, this.form.value.idleVacuum);
          this.compute_VEs();
          this.calcMinMax(); // this.reverse_table();

          this.veMode = true;
          this.isShow = true;
          _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController);
        }
      } else {
        this.router.navigateByUrl(_core_common_Urls__WEBPACK_IMPORTED_MODULE_5__.Urls.AccessDeniedTunerPlusUrl);
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController);
      }
    }, errs => {
      this.router.navigateByUrl(_core_common_Urls__WEBPACK_IMPORTED_MODULE_5__.Urls.AccessDeniedTunerPlusUrl);
      _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.dismissLoading(this.loadingController);
    });
  }

  reverse_table() {
    var _this3 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let new_table = _this3.VE;

      for (let i = 0; i < _this3.VE.length; i++) {
        for (let j = 0; j < _this3.VE[i].length; j++) {// new_table[this.tableSize + 1 - i][j] = this.VE[i][j];
          // console.log(new_table[this.tableSize + 1 - i][j]);
        }
      }

      _this3.VE = new_table;
      return;
    })();
  }

  calcMinMax() {
    var _this4 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this4.min = 300;
      _this4.max = 0;

      for (let i = 1; i < _this4.VE.length; i++) {
        // tslint:disable-next-line: prefer-for-of
        for (let j = 1; j < _this4.VE[i].length; j++) {
          const ve = _this4.VE[i][j];

          if (ve < _this4.min) {
            _this4.min = ve;
          }

          if (ve > _this4.max) {
            _this4.max = ve;
          }
        }
      }

      _this4.avg = (_this4.max - _this4.min) / 2 + _this4.min;
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
        b += 3;
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
    var _this5 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Create VE Array
      // VE[i][j] is the volumetric efficiency(VE) * gamma  value
      // for the ith MAP bin, jth RPM bin (i,j=1..8)
      // where gamma=14.7/afr for gasoline.
      // VE[i][0] is the ith MAP bin value (i=1..8)
      // VE[0][j] is the jth RPM bin value (j=1..8)
      // VE[0][0] is the kPa row with the value nearest 100kPa (i.e. the 'normally aspirated' row)
      //          and is it determined in function 'map_bins' - set but not used in this code version
      _this5.VE = new Array(_this5.form.value.x + 1);

      for (let i = 0; i <= _this5.form.value.x; i++) {
        _this5.VE[i] = new Array(_this5.form.value.y + 1);
      } // Initialize VE Array
      // tslint:disable-next-line: forin


      for (const j in _this5.VE) {
        for (let k = 0; k <= _this5.form.value.y; k++) {
          _this5.VE[j][k] = 0;
        }
      }

      return _this5.VE;
    })();
  }

  rpm_bins(maxrpm, idlerpm) {
    var _this6 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Calculate RPM bins
      // First two bins bracket idle with a delta of 500 rpm.
      // Other bins are equally spaced (ignoring rounding) to max_rpm.
      _this6.VE[0][1] = Math.round((parseFloat(idlerpm) - 150) / 100) * 100;
      _this6.VE[0][2] = Math.round((parseFloat(idlerpm) + 350) / 100) * 100;
      const rpm_bin_step = (parseFloat(maxrpm) - _this6.VE[0][2]) / (_this6.form.value.y * 1.0 - 2);

      for (let i = 3; i <= _this6.form.value.y * 1.0 - 1; i++) {
        _this6.VE[0][i] = Math.round((_this6.VE[0][2] + (i - 2) * rpm_bin_step) / 100) * 100;
      }

      _this6.VE[0][_this6.form.value.y * 1.0] = Math.round(parseFloat(maxrpm) / 100) * 100;
      return;
    })();
  }

  map_bins(maxmap, idlemap) {
    var _this7 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Calculate MAP bins
      // First bin is idle MAP value. Rest are evenly spaced to 'boost' value (maxmap).
      // VE[0][0] is set to the index for the array row containing the highest MAP value
      // less than 115 (i.e. the naturally aspirated, WOT row)
      _this7.VE[1][0] = Math.round((101 - parseFloat(idlemap) * (101 / 29.92)) / 5) * 5;
      const map_bin_step = (parseFloat(maxmap) * (101 / 14.7) + 101 - _this7.VE[1][0]) / (_this7.form.value.x * 1.0 - 1);

      for (let i = 2; i <= _this7.form.value.x * 1.0; i++) {
        _this7.VE[i][0] = Math.round((_this7.VE[1][0] + (i - 1) * map_bin_step) / 5) * 5;

        if (_this7.VE[i][0] < 115) {
          _this7.VE[0][0] = i;
        }
      }

      return;
    })();
  }

  compute_VEs() {
    var _this8 = this;

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
      const peak_tq = _this8.form.value.peakTorqu / 1.3558179999442195;
      const peak_hp = _this8.form.value.peakHp;
      const maxmap = _this8.form.value.boost;
      const displacement = _this8.form.value.engineVolum / 1000 * 61; // swept volume in cubic inches

      const peak_hp_rpm = _this8.form.value.peakHpRpm;
      const peak_torque_rpm = _this8.form.value.peakTorquRpm; // Compute torque at peak horsepower and torque - adjusted for any boost

      let compressor_efficiency = 1;

      if (maxmap > 0) {
        compressor_efficiency = 0.6;
      }

      const na_tq = peak_tq * (14.7 / (14.7 + maxmap * compressor_efficiency));
      const na_hp = peak_hp * (14.7 / (14.7 + maxmap * compressor_efficiency)) * (5250 / peak_hp_rpm);

      _this8.compute_coefficients(peak_torque_rpm, 85 * (na_tq / displacement), peak_hp_rpm, 85 * (na_hp / displacement)); // Set K - the 'step' degradation ration for VE to kPa


      const K = 0.45; // Fill the VE values
      // (but not the bin values)

      const maxVE = _this8.a * peak_torque_rpm * peak_torque_rpm + _this8.b * peak_torque_rpm + _this8.c;

      for (let i = 1; i <= _this8.form.value.x * 1.0; i++) {
        for (let j = 1; j <= _this8.form.value.y * 1.0; j++) {
          compressor_efficiency = 1;

          if (_this8.VE[i][0] > 100) {
            compressor_efficiency = 0.6;
          }

          const f = (100 - (100 - _this8.VE[i][0]) * K) / 100;
          _this8.VE[i][j] = (_this8.a * _this8.VE[0][j] * _this8.VE[0][j] + _this8.b * _this8.VE[0][j] + _this8.c) * f; // VE at least 25% of maxVE at all times

          if (_this8.VE[i][j] < maxVE * 0.25) {
            _this8.VE[i][j] = maxVE * 0.25;
          } // limit 'fall-off' to 5% per bin to prevent going lean on top end


          if (j > 1) {
            if (_this8.VE[i][j] < _this8.VE[i][j - 1] * 0.95) {
              _this8.VE[i][j] = _this8.VE[i][j - 1] * 0.95;
            }
          }

          _this8.VE[i][j] = Math.round(_this8.VE[i][j]);
        }
      }
    })();
  }

  compute_coefficients(x1, y1, x2, y2) {
    var _this9 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Compute the quadratic coefficients for a curve passing through (x1,y1), (x2,y2)
      // with a maximum at (x1,y1)
      // modify global variables a,b,c, where y=ax^2+bx+c
      //
      _this9.a = (y2 - y1) / (x2 * x2 - 2 * x1 * x2 + x1 * x1);
      _this9.b = -2 * _this9.a * x1;
      _this9.c = y1 + _this9.a * x1 * x1;
      return;
    })();
  }

  onInfo(type) {
    switch (type) {
      case 'idleRpm':
        this.presentActiveAlertConfirm('دور موتور در زمانی که پدال گاز رها است را وارد کنید. معمولا عددی بین 700 الی 1300');
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

      case 'x':
        this.presentActiveAlertConfirm('تعداد سطر های جدول یا همان x جدول میباشد');
        break;

      case 'y':
        this.presentActiveAlertConfirm('تعداد ستون های جدول یا همان y جدول میباشد');
        break;

      case 'boost':
        this.presentActiveAlertConfirm('اگر خودرو تنفس طبیعی است و توربو یا سوپرشارژ ندارد،مقدار صفر وارد شود. در غیر این صورت بیشترین فشار هوایی که توربو یا سوپرشارژ به موتور اعمال میکند وارد شود بر حسب پی اس آی');
        break;

      default:
        break;
    }
  }

  presentActiveAlertConfirm(msg = '') {
    var _this10 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this10.alertController.create({
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
    var _this11 = this;

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
      const err_idle_rpm = _this11.form.value.idleRpm;
      const err_idle_map = _this11.form.value.idleVacuum;
      const err_maxrpm = _this11.form.value.rpmRedline;
      const err_peak_tq = _this11.form.value.peakTorqu / 1.3558179999442195;
      const err_tq_rpm = _this11.form.value.peakTorquRpm;
      const err_boost = _this11.form.value.boost;
      const err_peak_hp = _this11.form.value.peakHp;
      const err_hp_rpm = _this11.form.value.peakHpRpm;
      const err_displacement = _this11.form.value.engineVolum / 1000 * 61; // swept volume in cubic inches

      let errors = '';

      if (err_idle_rpm < 300) {
        errors = 'Idle rpm set too low. ';
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(_this11.toastController, 'دور آرام نباید کمتر از 300 باشد');
      } else if (err_idle_map < 5) {
        errors = errors + 'Idle vacuum is too low to model. ';
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(_this11.toastController, 'وکیوم دور آرام نباید کمتر از 5 باشد');
      } else if (err_idle_map > 30) {
        errors = errors + 'Idle vacuum is too high. ';
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(_this11.toastController, 'وکیوم دور آرام نباید بیشتر از 30 باشد');
      } else if (err_maxrpm > 20000) {
        errors = errors + 'Maximum RPM is set too high. ';
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(_this11.toastController, 'دور موتور کاتاف نباید بیشتر از 20000 باشد');
      } else if (err_boost > 200) {
        errors = errors + 'Maximum boost is set too high for standard MegaSquirt<sup>&reg;</sup> MPX4250 MAP sensor. ';
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(_this11.toastController, 'بوست توربو نباید بیشتر از 200 باشد');
      } else if (err_tq_rpm > err_hp_rpm) {
        errors = errors + 'RPM for peak torque occurs above RPM for peak horsepower. ';
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(_this11.toastController, 'دور موتور اوج گشتاور نباید بیشتر از توان باشد');
      } else if (err_peak_hp * 5252 / err_hp_rpm > err_peak_tq) {
        errors = errors + 'Torque at maximum HP is higher than at \'peak\' torque! ';
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(_this11.toastController, 'گشتاور در اوج توان نباید بیشتر از اوج گشتاور باشد');
      } else if (err_peak_hp / err_displacement > 3) {
        errors = errors + 'Specific output is too high to model. ';
        _core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(_this11.toastController, 'خروجی خاص برای مدل سازی خیلی زیاد است');
      }

      if (errors === '') {
        return false;
      } else {
        return true;
      }
    })();
  }

};

VEComponent.ctorParameters = () => [{
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
  type: _data_service_site_Slider_service__WEBPACK_IMPORTED_MODULE_7__.SliderService
}, {
  type: _data_service_course_course_service__WEBPACK_IMPORTED_MODULE_8__.CourseService
}, {
  type: _angular_common__WEBPACK_IMPORTED_MODULE_13__.DatePipe
}];

VEComponent.propDecorators = {
  content: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild,
    args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonContent]
  }]
};
VEComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
  selector: 'app-ve',
  template: _ve_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_ve_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], VEComponent);


/***/ }),

/***/ 79526:
/*!*******************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/ve/ve.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VEModule": () => (/* binding */ VEModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/view/components/app/page-header/page-header.module */ 19916);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _ve_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ve-routing.module */ 98403);
/* harmony import */ var _ve_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ve.component */ 84358);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/view/components/app/footer/footer.module */ 60412);
/* harmony import */ var src_app_view_components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/view/components/common/loading/loading.module */ 90876);










let VEModule = class VEModule {
};
VEModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [_ve_component__WEBPACK_IMPORTED_MODULE_2__.VEComponent],
        imports: [
            src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__.PageHeaderModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _ve_routing_module__WEBPACK_IMPORTED_MODULE_1__.VERoutingModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            src_app_view_components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_4__.LoadingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
            src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__.FooterModule
        ],
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe]
    })
], VEModule);



/***/ }),

/***/ 71647:
/*!***********************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/ve/ve.component.scss?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = ".ve-results {\n  position: relative;\n  max-width: 1500px;\n  margin: clamp(16px, 3vw, 40px) auto 48px;\n  padding: clamp(16px, 2.5vw, 30px);\n  overflow: hidden;\n  color: var(--ion-text-color);\n  background: var(--ion-item-background, var(--ion-background-color));\n  border: 1px solid rgba(var(--ion-color-medium-rgb), 0.22);\n  border-radius: 24px;\n  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.12);\n}\n\n.ve-results::before {\n  content: \"\";\n  position: absolute;\n  inset: 0 0 auto;\n  height: 4px;\n  background: linear-gradient(90deg, transparent, var(--ion-color-danger), var(--ion-color-primary), transparent);\n}\n\n.ve-results__header,\n.ve-results__footer,\n.ve-results__actions,\n.ve-axis-guide,\n.ve-legend {\n  display: flex;\n  align-items: center;\n}\n\n.ve-results__header {\n  justify-content: space-between;\n  gap: 18px;\n  margin-bottom: 18px;\n}\n\n.ve-results__eyebrow {\n  margin: 0 0 8px;\n  color: var(--ion-color-danger);\n  font-size: 0.72rem;\n  font-weight: 800;\n  letter-spacing: 0.16em;\n}\n\n.ve-results h2 {\n  margin: 0;\n  font-size: clamp(1.25rem, 2.2vw, 1.8rem);\n  font-weight: 800;\n}\n\n.ve-results__description {\n  margin: 8px 0 0;\n  color: var(--ion-color-medium);\n  font-size: 0.92rem;\n}\n\n.ve-results__size {\n  display: inline-flex;\n  align-items: center;\n  gap: 9px;\n  flex: none;\n  padding: 11px 14px;\n  color: var(--ion-text-color);\n  background: rgba(var(--ion-color-medium-rgb), 0.09);\n  border: 1px solid rgba(var(--ion-color-medium-rgb), 0.2);\n  border-radius: 12px;\n  font-size: 0.85rem;\n  font-weight: 700;\n  font-feature-settings: \"tnum\";\n  font-variant-numeric: tabular-nums;\n}\n\n.ve-results__size ion-icon {\n  color: var(--ion-color-danger);\n  font-size: 1.1rem;\n}\n\n.ve-axis-guide {\n  flex-wrap: wrap;\n  gap: 10px 22px;\n  margin-bottom: 14px;\n  color: var(--ion-color-medium);\n  font-size: 0.84rem;\n}\n\n.ve-axis-guide span {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.ve-axis-guide__dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n}\n\n.ve-axis-guide__dot--rpm {\n  background: var(--ion-color-danger);\n}\n\n.ve-axis-guide__dot--map {\n  background: var(--ion-color-medium);\n}\n\n.ve-table-scroll {\n  max-height: min(70vh, 720px);\n  overflow: auto;\n  padding: 8px;\n  background: #111418;\n  border: 1px solid var(--tuner-border, #30363d);\n  border-radius: 16px;\n  scrollbar-color: #6b737d #171b20;\n}\n\n.ve-table-scroll:focus-visible {\n  outline: 3px solid var(--ion-color-danger);\n  outline-offset: 3px;\n}\n\n.ve-matrix {\n  width: max-content;\n  min-width: 100%;\n  border-collapse: separate;\n  border-spacing: 3px;\n  font-feature-settings: \"tnum\";\n  font-variant-numeric: tabular-nums;\n  text-align: center;\n}\n\n.ve-matrix th,\n.ve-matrix td {\n  min-width: 76px;\n  height: 48px;\n  padding: 8px 12px;\n  border-radius: 7px;\n  white-space: nowrap;\n}\n\n.ve-matrix thead th {\n  position: sticky;\n  top: 0;\n  z-index: 2;\n  color: #f6f7f8;\n  background: #303740;\n  box-shadow: inset 0 -2px 0 #ba3438;\n  font-size: 0.87rem;\n  font-weight: 800;\n}\n\n.ve-matrix tbody th {\n  position: sticky;\n  left: 0;\n  z-index: 1;\n  color: #f6f7f8;\n  background: #303740;\n  box-shadow: inset -2px 0 0 #ba3438;\n  font-size: 0.9rem;\n  font-weight: 800;\n}\n\n.ve-matrix thead .ve-matrix__corner {\n  left: 0;\n  z-index: 3;\n  min-width: 112px;\n  color: #fff;\n  background: #a8232b;\n  box-shadow: none;\n  font-size: 0.77rem;\n}\n\n.ve-matrix tbody th:first-child {\n  min-width: 112px;\n}\n\n.ve-matrix td {\n  color: #172028;\n  font-size: 1rem;\n  font-weight: 800;\n  transition: box-shadow 160ms ease, filter 160ms ease;\n}\n\n.ve-matrix tbody tr:hover td {\n  filter: brightness(1.05);\n}\n\n.ve-matrix td:hover {\n  box-shadow: inset 0 0 0 3px rgba(15, 20, 25, 0.55);\n}\n\n.ve-results__footer {\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin: 15px 0 20px;\n}\n\n.ve-legend {\n  gap: 10px;\n  color: var(--ion-color-medium);\n  font-size: 0.8rem;\n}\n\n.ve-legend strong {\n  color: var(--ion-text-color);\n  font-weight: 800;\n}\n\n.ve-legend__scale {\n  width: clamp(72px, 14vw, 150px);\n  height: 8px;\n  border-radius: 10px;\n  background: linear-gradient(to left, #8787ff, #87ff87, #ff8787);\n}\n\n.ve-results__scroll-hint {\n  color: var(--ion-color-medium);\n  font-size: 0.78rem;\n}\n\n.ve-results__actions {\n  justify-content: flex-end;\n  flex-wrap: wrap;\n  gap: 10px;\n  padding-top: 18px;\n  border-top: 1px solid rgba(var(--ion-color-medium-rgb), 0.2);\n}\n\n.ve-results__actions ion-button {\n  min-width: 138px;\n  margin: 0;\n  font-weight: 700;\n}\n\n.ve-results__back {\n  --color: var(--ion-text-color);\n  --border-color: rgba(var(--ion-color-medium-rgb), 0.4);\n}\n\n.ve-results__download {\n  --background: var(--ion-color-danger);\n  --color: var(--ion-color-danger-contrast);\n  --box-shadow: 0 8px 20px rgba(var(--ion-color-danger-rgb), 0.24);\n}\n\n@media (max-width: 600px) {\n  .ve-results {\n    margin: 12px 10px 32px;\n    padding: 16px 12px;\n    border-radius: 18px;\n  }\n\n  .ve-results__header {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n\n  .ve-table-scroll {\n    padding: 5px;\n    border-radius: 12px;\n  }\n\n  .ve-matrix th,\n.ve-matrix td {\n    min-width: 64px;\n    height: 42px;\n    padding: 7px 9px;\n    font-size: 0.85rem;\n  }\n\n  .ve-matrix thead .ve-matrix__corner,\n.ve-matrix tbody th:first-child {\n    min-width: 94px;\n  }\n\n  .ve-results__actions ion-button {\n    flex: 1;\n    min-width: 0;\n  }\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .ve-matrix td {\n    transition: none;\n  }\n}\n\n:host-context(.dark-theme) {\n  color-scheme: dark;\n  color: var(--tuner-text);\n  --tuner-page: #11151e;\n  --tuner-surface: #1c2230;\n  --tuner-soft: #252e3d;\n  --tuner-border: #465269;\n  --tuner-text: #edf1f8;\n  --tuner-muted: #b2bfd1;\n  --tuner-header: rgba(28, 34, 48, 0.94);\n  --tuner-overlay: rgba(28, 34, 48, 0.95);\n  --tuner-purple-text: #c4b5fd;\n  --tuner-purple-soft: #302444;\n  --tuner-purple-border: #72579b;\n  --tuner-info-text: #93c5fd;\n  --tuner-info-soft: #1d304c;\n  --tuner-info-border: #466b9a;\n  --tuner-warning-text: #fcd477;\n  --tuner-warning-soft: #3b3020;\n  --tuner-warning-border: #93743d;\n  --tuner-success-text: #86efac;\n  --tuner-success-soft: #19392e;\n  --tuner-success-border: #417d60;\n  --tuner-danger-text: #fda4af;\n  --tuner-danger-soft: #402631;\n  --tuner-danger-border: #985367;\n  --tuner-teal-text: #7de4d4;\n  --tuner-teal-soft: #193a3a;\n  --tuner-teal-border: #437f7c;\n}\n\n:host-context(.dark-theme) input:not([type=range]):not([type=checkbox]):not([type=radio]):not([type=button]):not([type=submit]):not([type=file]),\n:host-context(.dark-theme) textarea,\n:host-context(.dark-theme) select {\n  color: var(--tuner-text);\n  background-color: var(--tuner-soft);\n}\n\n:host-context(.dark-theme) input::placeholder, :host-context(.dark-theme) textarea::placeholder {\n  color: var(--tuner-muted);\n  opacity: 0.75;\n}\n\n:host-context(.dark-theme) ion-header.learning-header {\n  --background: var(--tuner-header);\n  background: var(--tuner-header);\n  border-bottom-color: var(--tuner-border);\n}\n\n:host-context(.dark-theme) ion-content {\n  --background: var(--tuner-page);\n  --color: var(--tuner-text);\n}\n\n:host-context(.dark-theme) ion-card:not([color]), :host-context(.dark-theme) ion-list, :host-context(.dark-theme) ion-item:not([color]), :host-context(.dark-theme) ion-item-divider:not([color]) {\n  --background: var(--tuner-surface);\n  --color: var(--tuner-text);\n  --border-color: var(--tuner-border);\n}\n\n:host-context(.dark-theme) ion-list {\n  background: var(--tuner-surface);\n}\n\n:host-context(.dark-theme) ion-card-title, :host-context(.dark-theme) ion-card-subtitle {\n  color: var(--tuner-text);\n}\n\n:host-context(.dark-theme) ion-card[color=lightest], :host-context(.dark-theme) ion-item[color=lightest], :host-context(.dark-theme) ion-fab-button[color=lightest] {\n  --ion-color-base: var(--tuner-surface);\n  --ion-color-contrast: var(--tuner-text);\n  --ion-color-shade: var(--tuner-soft);\n  --ion-color-tint: var(--tuner-soft);\n}\n\n:host-context(.dark-theme) ion-text[color=dark], :host-context(.dark-theme) ion-label[color=dark] {\n  --ion-color-base: var(--tuner-text);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlLmNvbXBvbmVudC5zY3NzIiwiLi5cXF90aGVtZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHdDQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUVBQUE7RUFDQSx5REFBQTtFQUNBLG1CQUFBO0VBQ0EsMkNBQUE7QUFERjs7QUFJQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsK0dBQUE7QUFERjs7QUFJQTs7Ozs7RUFLRSxhQUFBO0VBQ0EsbUJBQUE7QUFERjs7QUFJQTtFQUNFLDhCQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FBREY7O0FBSUE7RUFDRSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUFERjs7QUFJQTtFQUNFLFNBQUE7RUFDQSx3Q0FBQTtFQUNBLGdCQUFBO0FBREY7O0FBSUE7RUFDRSxlQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtBQURGOztBQUlBO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtFQUNBLG1EQUFBO0VBQ0Esd0RBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtFQUFBLGtDQUFBO0FBREY7O0FBSUE7RUFDRSw4QkFBQTtFQUNBLGlCQUFBO0FBREY7O0FBSUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtBQURGOztBQUlBO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7QUFERjs7QUFJQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFERjs7QUFJQTtFQUNFLG1DQUFBO0FBREY7O0FBSUE7RUFDRSxtQ0FBQTtBQURGOztBQUlBO0VBQ0UsNEJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsOENBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0FBREY7O0FBSUE7RUFDRSwwQ0FBQTtFQUNBLG1CQUFBO0FBREY7O0FBSUE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFBQSxrQ0FBQTtFQUNBLGtCQUFBO0FBREY7O0FBSUE7O0VBRUUsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFERjs7QUFJQTtFQUNFLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFJQTtFQUNFLGdCQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFJQTtFQUNFLE9BQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBREY7O0FBSUE7RUFDRSxnQkFBQTtBQURGOztBQUlBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9EQUFBO0FBREY7O0FBSUE7RUFDRSx3QkFBQTtBQURGOztBQUlBO0VBQ0Usa0RBQUE7QUFERjs7QUFJQTtFQUNFLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtBQURGOztBQUlBO0VBQ0UsU0FBQTtFQUNBLDhCQUFBO0VBQ0EsaUJBQUE7QUFERjs7QUFJQTtFQUNFLDRCQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFJQTtFQUNFLCtCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsK0RBQUE7QUFERjs7QUFJQTtFQUNFLDhCQUFBO0VBQ0Esa0JBQUE7QUFERjs7QUFJQTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUNBLDREQUFBO0FBREY7O0FBSUE7RUFDRSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQURGOztBQUlBO0VBQ0UsOEJBQUE7RUFDQSxzREFBQTtBQURGOztBQUlBO0VBQ0UscUNBQUE7RUFDQSx5Q0FBQTtFQUNBLGdFQUFBO0FBREY7O0FBSUE7RUFDRTtJQUNFLHNCQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtFQURGOztFQUlBO0lBQ0UsdUJBQUE7SUFDQSxzQkFBQTtFQURGOztFQUlBO0lBQ0UsWUFBQTtJQUNBLG1CQUFBO0VBREY7O0VBSUE7O0lBRUUsZUFBQTtJQUNBLFlBQUE7SUFDQSxnQkFBQTtJQUNBLGtCQUFBO0VBREY7O0VBSUE7O0lBRUUsZUFBQTtFQURGOztFQUlBO0lBQ0UsT0FBQTtJQUNBLFlBQUE7RUFERjtBQUNGOztBQUlBO0VBQ0U7SUFDRSxnQkFBQTtFQUZGO0FBQ0Y7O0FDcFJFO0VBQ0Usa0JBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLHNDQUFBO0VBQ0EsdUNBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsK0JBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsK0JBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7QURzUko7O0FDblJJOzs7RUFHRSx3QkFBQTtFQUNBLG1DQUFBO0FEcVJOOztBQ2xSSTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtBRG9STjs7QUNqUkk7RUFDRSxpQ0FBQTtFQUNBLCtCQUFBO0VBQ0Esd0NBQUE7QURtUk47O0FDalJJO0VBQWMsK0JBQUE7RUFBaUMsMEJBQUE7QURxUm5EOztBQ3BSSTtFQUNFLGtDQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQ0FBQTtBRHNSTjs7QUNwUkk7RUFBVyxnQ0FBQTtBRHVSZjs7QUN0Ukk7RUFBb0Msd0JBQUE7QUR5UnhDOztBQ3hSSTtFQUNFLHNDQUFBO0VBQ0EsdUNBQUE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO0FEMFJOOztBQ3hSSTtFQUFrRCxtQ0FBQTtBRDJSdEQiLCJmaWxlIjoidmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi90aGVtZSc7XG5cbi52ZS1yZXN1bHRzIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXgtd2lkdGg6IDE1MDBweDtcbiAgbWFyZ2luOiBjbGFtcCgxNnB4LCAzdncsIDQwcHgpIGF1dG8gNDhweDtcbiAgcGFkZGluZzogY2xhbXAoMTZweCwgMi41dncsIDMwcHgpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvcikpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKHZhcigtLWlvbi1jb2xvci1tZWRpdW0tcmdiKSwgMC4yMik7XG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gIGJveC1zaGFkb3c6IDAgMjRweCA2MHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG5cbi52ZS1yZXN1bHRzOjpiZWZvcmUge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBpbnNldDogMCAwIGF1dG87XG4gIGhlaWdodDogNHB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHRyYW5zcGFyZW50LCB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKSwgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpLCB0cmFuc3BhcmVudCk7XG59XG5cbi52ZS1yZXN1bHRzX19oZWFkZXIsXG4udmUtcmVzdWx0c19fZm9vdGVyLFxuLnZlLXJlc3VsdHNfX2FjdGlvbnMsXG4udmUtYXhpcy1ndWlkZSxcbi52ZS1sZWdlbmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udmUtcmVzdWx0c19faGVhZGVyIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDE4cHg7XG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XG59XG5cbi52ZS1yZXN1bHRzX19leWVicm93IHtcbiAgbWFyZ2luOiAwIDAgOHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG4gIGZvbnQtc2l6ZTogMC43MnJlbTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMTZlbTtcbn1cblxuLnZlLXJlc3VsdHMgaDIge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogY2xhbXAoMS4yNXJlbSwgMi4ydncsIDEuOHJlbSk7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5cbi52ZS1yZXN1bHRzX19kZXNjcmlwdGlvbiB7XG4gIG1hcmdpbjogOHB4IDAgMDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICBmb250LXNpemU6IDAuOTJyZW07XG59XG5cbi52ZS1yZXN1bHRzX19zaXplIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOXB4O1xuICBmbGV4OiBub25lO1xuICBwYWRkaW5nOiAxMXB4IDE0cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvcik7XG4gIGJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLW1lZGl1bS1yZ2IpLCAwLjA5KTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSh2YXIoLS1pb24tY29sb3ItbWVkaXVtLXJnYiksIDAuMik7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC12YXJpYW50LW51bWVyaWM6IHRhYnVsYXItbnVtcztcbn1cblxuLnZlLXJlc3VsdHNfX3NpemUgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xufVxuXG4udmUtYXhpcy1ndWlkZSB7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiAxMHB4IDIycHg7XG4gIG1hcmdpbi1ib3R0b206IDE0cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgZm9udC1zaXplOiAwLjg0cmVtO1xufVxuXG4udmUtYXhpcy1ndWlkZSBzcGFuIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xufVxuXG4udmUtYXhpcy1ndWlkZV9fZG90IHtcbiAgd2lkdGg6IDhweDtcbiAgaGVpZ2h0OiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLnZlLWF4aXMtZ3VpZGVfX2RvdC0tcnBtIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG59XG5cbi52ZS1heGlzLWd1aWRlX19kb3QtLW1hcCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xufVxuXG4udmUtdGFibGUtc2Nyb2xsIHtcbiAgbWF4LWhlaWdodDogbWluKDcwdmgsIDcyMHB4KTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHBhZGRpbmc6IDhweDtcbiAgYmFja2dyb3VuZDogIzExMTQxODtcbiAgYm9yZGVyOiAxcHggc29saWQgdHVuZXItY29sb3IoYm9yZGVyLCAjMzAzNjNkKTtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgc2Nyb2xsYmFyLWNvbG9yOiAjNmI3MzdkICMxNzFiMjA7XG59XG5cbi52ZS10YWJsZS1zY3JvbGw6Zm9jdXMtdmlzaWJsZSB7XG4gIG91dGxpbmU6IDNweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbiAgb3V0bGluZS1vZmZzZXQ6IDNweDtcbn1cblxuLnZlLW1hdHJpeCB7XG4gIHdpZHRoOiBtYXgtY29udGVudDtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xuICBib3JkZXItc3BhY2luZzogM3B4O1xuICBmb250LXZhcmlhbnQtbnVtZXJpYzogdGFidWxhci1udW1zO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi52ZS1tYXRyaXggdGgsXG4udmUtbWF0cml4IHRkIHtcbiAgbWluLXdpZHRoOiA3NnB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHBhZGRpbmc6IDhweCAxMnB4O1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi52ZS1tYXRyaXggdGhlYWQgdGgge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDI7XG4gIGNvbG9yOiAjZjZmN2Y4O1xuICBiYWNrZ3JvdW5kOiAjMzAzNzQwO1xuICBib3gtc2hhZG93OiBpbnNldCAwIC0ycHggMCAjYmEzNDM4O1xuICBmb250LXNpemU6IDAuODdyZW07XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5cbi52ZS1tYXRyaXggdGJvZHkgdGgge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxO1xuICBjb2xvcjogI2Y2ZjdmODtcbiAgYmFja2dyb3VuZDogIzMwMzc0MDtcbiAgYm94LXNoYWRvdzogaW5zZXQgLTJweCAwIDAgI2JhMzQzODtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5cbi52ZS1tYXRyaXggdGhlYWQgLnZlLW1hdHJpeF9fY29ybmVyIHtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMztcbiAgbWluLXdpZHRoOiAxMTJweDtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6ICNhODIzMmI7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMC43N3JlbTtcbn1cblxuLnZlLW1hdHJpeCB0Ym9keSB0aDpmaXJzdC1jaGlsZCB7XG4gIG1pbi13aWR0aDogMTEycHg7XG59XG5cbi52ZS1tYXRyaXggdGQge1xuICBjb2xvcjogIzE3MjAyODtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogODAwO1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDE2MG1zIGVhc2UsIGZpbHRlciAxNjBtcyBlYXNlO1xufVxuXG4udmUtbWF0cml4IHRib2R5IHRyOmhvdmVyIHRkIHtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMDUpO1xufVxuXG4udmUtbWF0cml4IHRkOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgM3B4IHJnYmEoMTUsIDIwLCAyNSwgMC41NSk7XG59XG5cbi52ZS1yZXN1bHRzX19mb290ZXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiAxMnB4O1xuICBtYXJnaW46IDE1cHggMCAyMHB4O1xufVxuXG4udmUtbGVnZW5kIHtcbiAgZ2FwOiAxMHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuXG4udmUtbGVnZW5kIHN0cm9uZyB7XG4gIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvcik7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5cbi52ZS1sZWdlbmRfX3NjYWxlIHtcbiAgd2lkdGg6IGNsYW1wKDcycHgsIDE0dncsIDE1MHB4KTtcbiAgaGVpZ2h0OiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjODc4N2ZmLCAjODdmZjg3LCAjZmY4Nzg3KTtcbn1cblxuLnZlLXJlc3VsdHNfX3Njcm9sbC1oaW50IHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICBmb250LXNpemU6IDAuNzhyZW07XG59XG5cbi52ZS1yZXN1bHRzX19hY3Rpb25zIHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IDEwcHg7XG4gIHBhZGRpbmctdG9wOiAxOHB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSh2YXIoLS1pb24tY29sb3ItbWVkaXVtLXJnYiksIDAuMik7XG59XG5cbi52ZS1yZXN1bHRzX19hY3Rpb25zIGlvbi1idXR0b24ge1xuICBtaW4td2lkdGg6IDEzOHB4O1xuICBtYXJnaW46IDA7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi52ZS1yZXN1bHRzX19iYWNrIHtcbiAgLS1jb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IpO1xuICAtLWJvcmRlci1jb2xvcjogcmdiYSh2YXIoLS1pb24tY29sb3ItbWVkaXVtLXJnYiksIDAuNCk7XG59XG5cbi52ZS1yZXN1bHRzX19kb3dubG9hZCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3QpO1xuICAtLWJveC1zaGFkb3c6IDAgOHB4IDIwcHggcmdiYSh2YXIoLS1pb24tY29sb3ItZGFuZ2VyLXJnYiksIDAuMjQpO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLnZlLXJlc3VsdHMge1xuICAgIG1hcmdpbjogMTJweCAxMHB4IDMycHg7XG4gICAgcGFkZGluZzogMTZweCAxMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE4cHg7XG4gIH1cblxuICAudmUtcmVzdWx0c19faGVhZGVyIHtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5cbiAgLnZlLXRhYmxlLXNjcm9sbCB7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIH1cblxuICAudmUtbWF0cml4IHRoLFxuICAudmUtbWF0cml4IHRkIHtcbiAgICBtaW4td2lkdGg6IDY0cHg7XG4gICAgaGVpZ2h0OiA0MnB4O1xuICAgIHBhZGRpbmc6IDdweCA5cHg7XG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xuICB9XG5cbiAgLnZlLW1hdHJpeCB0aGVhZCAudmUtbWF0cml4X19jb3JuZXIsXG4gIC52ZS1tYXRyaXggdGJvZHkgdGg6Zmlyc3QtY2hpbGQge1xuICAgIG1pbi13aWR0aDogOTRweDtcbiAgfVxuXG4gIC52ZS1yZXN1bHRzX19hY3Rpb25zIGlvbi1idXR0b24ge1xuICAgIGZsZXg6IDE7XG4gICAgbWluLXdpZHRoOiAwO1xuICB9XG59XG5cbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XG4gIC52ZS1tYXRyaXggdGQge1xuICAgIHRyYW5zaXRpb246IG5vbmU7XG4gIH1cbn1cblxuQGluY2x1ZGUgdHVuZXItZGFyay10aGVtZTtcbiIsIi8vIEtlZXAgdGhlIG9yaWdpbmFsIGxpZ2h0IGNvbG9yIGF0IGVhY2ggY2FsbCBzaXRlLiBUb2tlbnMgZXhpc3Qgb25seSBpbiBkYXJrIG1vZGUuXG5AZnVuY3Rpb24gdHVuZXItY29sb3IoJHJvbGUsICRsaWdodCkge1xuICBAcmV0dXJuIHZhcigtLXR1bmVyLSN7JHJvbGV9LCAjeyRsaWdodH0pO1xufVxuXG5AbWl4aW4gdHVuZXItZGFyay10aGVtZSB7XG4gIDpob3N0LWNvbnRleHQoLmRhcmstdGhlbWUpIHtcbiAgICBjb2xvci1zY2hlbWU6IGRhcms7XG4gICAgY29sb3I6IHZhcigtLXR1bmVyLXRleHQpO1xuICAgIC0tdHVuZXItcGFnZTogIzExMTUxZTtcbiAgICAtLXR1bmVyLXN1cmZhY2U6ICMxYzIyMzA7XG4gICAgLS10dW5lci1zb2Z0OiAjMjUyZTNkO1xuICAgIC0tdHVuZXItYm9yZGVyOiAjNDY1MjY5O1xuICAgIC0tdHVuZXItdGV4dDogI2VkZjFmODtcbiAgICAtLXR1bmVyLW11dGVkOiAjYjJiZmQxO1xuICAgIC0tdHVuZXItaGVhZGVyOiByZ2JhKDI4LCAzNCwgNDgsIDAuOTQpO1xuICAgIC0tdHVuZXItb3ZlcmxheTogcmdiYSgyOCwgMzQsIDQ4LCAwLjk1KTtcbiAgICAtLXR1bmVyLXB1cnBsZS10ZXh0OiAjYzRiNWZkO1xuICAgIC0tdHVuZXItcHVycGxlLXNvZnQ6ICMzMDI0NDQ7XG4gICAgLS10dW5lci1wdXJwbGUtYm9yZGVyOiAjNzI1NzliO1xuICAgIC0tdHVuZXItaW5mby10ZXh0OiAjOTNjNWZkO1xuICAgIC0tdHVuZXItaW5mby1zb2Z0OiAjMWQzMDRjO1xuICAgIC0tdHVuZXItaW5mby1ib3JkZXI6ICM0NjZiOWE7XG4gICAgLS10dW5lci13YXJuaW5nLXRleHQ6ICNmY2Q0Nzc7XG4gICAgLS10dW5lci13YXJuaW5nLXNvZnQ6ICMzYjMwMjA7XG4gICAgLS10dW5lci13YXJuaW5nLWJvcmRlcjogIzkzNzQzZDtcbiAgICAtLXR1bmVyLXN1Y2Nlc3MtdGV4dDogIzg2ZWZhYztcbiAgICAtLXR1bmVyLXN1Y2Nlc3Mtc29mdDogIzE5MzkyZTtcbiAgICAtLXR1bmVyLXN1Y2Nlc3MtYm9yZGVyOiAjNDE3ZDYwO1xuICAgIC0tdHVuZXItZGFuZ2VyLXRleHQ6ICNmZGE0YWY7XG4gICAgLS10dW5lci1kYW5nZXItc29mdDogIzQwMjYzMTtcbiAgICAtLXR1bmVyLWRhbmdlci1ib3JkZXI6ICM5ODUzNjc7XG4gICAgLS10dW5lci10ZWFsLXRleHQ6ICM3ZGU0ZDQ7XG4gICAgLS10dW5lci10ZWFsLXNvZnQ6ICMxOTNhM2E7XG4gICAgLS10dW5lci10ZWFsLWJvcmRlcjogIzQzN2Y3YztcblxuICAgIC8vIE5hdGl2ZSBjb250cm9scyB3aXRob3V0IGFuIGV4cGxpY2l0IGxpZ2h0IGJhY2tncm91bmQgbmVlZCBhIGRhcmsgc3VyZmFjZSB0b28uXG4gICAgaW5wdXQ6bm90KFt0eXBlPSdyYW5nZSddKTpub3QoW3R5cGU9J2NoZWNrYm94J10pOm5vdChbdHlwZT0ncmFkaW8nXSk6bm90KFt0eXBlPSdidXR0b24nXSk6bm90KFt0eXBlPSdzdWJtaXQnXSk6bm90KFt0eXBlPSdmaWxlJ10pLFxuICAgIHRleHRhcmVhLFxuICAgIHNlbGVjdCB7XG4gICAgICBjb2xvcjogdmFyKC0tdHVuZXItdGV4dCk7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10dW5lci1zb2Z0KTtcbiAgICB9XG5cbiAgICBpbnB1dDo6cGxhY2Vob2xkZXIsIHRleHRhcmVhOjpwbGFjZWhvbGRlciB7XG4gICAgICBjb2xvcjogdmFyKC0tdHVuZXItbXV0ZWQpO1xuICAgICAgb3BhY2l0eTogMC43NTtcbiAgICB9XG5cbiAgICBpb24taGVhZGVyLmxlYXJuaW5nLWhlYWRlciB7XG4gICAgICAtLWJhY2tncm91bmQ6IHZhcigtLXR1bmVyLWhlYWRlcik7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS10dW5lci1oZWFkZXIpO1xuICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdmFyKC0tdHVuZXItYm9yZGVyKTtcbiAgICB9XG4gICAgaW9uLWNvbnRlbnQgeyAtLWJhY2tncm91bmQ6IHZhcigtLXR1bmVyLXBhZ2UpOyAtLWNvbG9yOiB2YXIoLS10dW5lci10ZXh0KTsgfVxuICAgIGlvbi1jYXJkOm5vdChbY29sb3JdKSwgaW9uLWxpc3QsIGlvbi1pdGVtOm5vdChbY29sb3JdKSwgaW9uLWl0ZW0tZGl2aWRlcjpub3QoW2NvbG9yXSkge1xuICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS10dW5lci1zdXJmYWNlKTtcbiAgICAgIC0tY29sb3I6IHZhcigtLXR1bmVyLXRleHQpO1xuICAgICAgLS1ib3JkZXItY29sb3I6IHZhcigtLXR1bmVyLWJvcmRlcik7XG4gICAgfVxuICAgIGlvbi1saXN0IHsgYmFja2dyb3VuZDogdmFyKC0tdHVuZXItc3VyZmFjZSk7IH1cbiAgICBpb24tY2FyZC10aXRsZSwgaW9uLWNhcmQtc3VidGl0bGUgeyBjb2xvcjogdmFyKC0tdHVuZXItdGV4dCk7IH1cbiAgICBpb24tY2FyZFtjb2xvcj0nbGlnaHRlc3QnXSwgaW9uLWl0ZW1bY29sb3I9J2xpZ2h0ZXN0J10sIGlvbi1mYWItYnV0dG9uW2NvbG9yPSdsaWdodGVzdCddIHtcbiAgICAgIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLXR1bmVyLXN1cmZhY2UpO1xuICAgICAgLS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLXR1bmVyLXRleHQpO1xuICAgICAgLS1pb24tY29sb3Itc2hhZGU6IHZhcigtLXR1bmVyLXNvZnQpO1xuICAgICAgLS1pb24tY29sb3ItdGludDogdmFyKC0tdHVuZXItc29mdCk7XG4gICAgfVxuICAgIGlvbi10ZXh0W2NvbG9yPSdkYXJrJ10sIGlvbi1sYWJlbFtjb2xvcj0nZGFyayddIHsgLS1pb24tY29sb3ItYmFzZTogdmFyKC0tdHVuZXItdGV4dCk7IH1cbiAgfVxufVxuIl19 */";

/***/ }),

/***/ 93303:
/*!***********************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/ve/ve.component.html?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"interior-header\" translucent=\"true\">\n  <app-loading></app-loading>\n  <app-page-header fallback=\"/TunerPlus\" [defaultBack]=\"false\">\n<ion-buttons page-back><ion-back-button text=\"\" icon=\"arrow-back-outline\"\r\n        color=\"lightest\"\r\n        defaultHref=\"/TunerPlus\"\r\n      ></ion-back-button></ion-buttons>\n<span page-title dir=\"rtl\" *ngIf=\"!showSearchbar\" class=\"title-size no-padding\"\r\n      >راندمان حجمی (VE)</span>\n<ion-buttons page-actions slot=\"end\" *ngIf=\"!showSearchbar\">\r\n      <ion-button (click)=\"showSearchbar = true\">\r\n        <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\n<ion-searchbar\r\n      dir=\"rtl\"\r\n      *ngIf=\"showSearchbar\"\r\n      showCancelButton=\"always\"\r\n      [(ngModel)]=\"queryText\"\r\n      placeholder=\"جستجوی آموزشگاه\"\r\n      (ionCancel)=\"onCancel()\"\r\n      (keyup.enter)=\"search()\"\r\n    ></ion-searchbar>\n\n  </app-page-header>\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <Section *ngIf=\"!isCheck\">\r\n    <ion-grid fixed *ngIf=\"!isShow\">\r\n      <ion-row>\r\n        <ion-col\r\n          dir=\"rtl\"\r\n          size=\"12\"\r\n          offset=\"0\"\r\n          size-md=\"10\"\r\n          offset-md=\"1\"\r\n          size-lg=\"8\"\r\n          offset-lg=\"2\"\r\n        >\r\n          <ion-card>\r\n            <!-- <ion-item>\r\n              <ion-label>ابعاد جدول</ion-label>\r\n              <ion-select\r\n                (ionChange)=\"tableSizeChanged()\"\r\n                [(ngModel)]=\"tableSizeSelected\"\r\n                value=\"16\"\r\n              >\r\n                <ion-select-option value=\"16\">16*16</ion-select-option>\r\n                <ion-select-option value=\"12\">12*12</ion-select-option>\r\n                <ion-select-option value=\"9\">9*9</ion-select-option>\r\n                <ion-select-option value=\"8\">8*8</ion-select-option>\r\n              </ion-select>\r\n            </ion-item> -->\r\n\r\n            <form [formGroup]=\"form\" (ngSubmit)=\"onCalc()\">\r\n              <ion-card-header color=\"primary\">\r\n                <ion-card-title class=\"text-center\"\r\n                  >محاسبه راندمان حجمی</ion-card-title\r\n                >\r\n              </ion-card-header>\r\n              <ion-list>\r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon\r\n                    slot=\"start\"\r\n                    name=\"ellipsis-vertical-outline\"\r\n                  ></ion-icon>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >تعداد سطر جدول</ion-label\r\n                  >\r\n                  <ion-input placeholder=\"16\" formControlName=\"x\" type=\"number\">\r\n                  </ion-input>\r\n                  <ion-button\r\n                    size=\"large\"\r\n                    fill=\"clear\"\r\n                    shape=\"round\"\r\n                    color=\"twitter\"\r\n                    slot=\"end\"\r\n                    (click)=\"onInfo('x')\"\r\n                  >\r\n                    <ion-icon\r\n                      size=\"large\"\r\n                      slot=\"icon-only\"\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon\r\n                    slot=\"start\"\r\n                    name=\"ellipsis-horizontal-outline\"\r\n                  ></ion-icon>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >تعداد ستون جدول</ion-label\r\n                  >\r\n                  <ion-input placeholder=\"16\" formControlName=\"y\" type=\"number\">\r\n                  </ion-input>\r\n                  <ion-button\r\n                    size=\"large\"\r\n                    fill=\"clear\"\r\n                    shape=\"round\"\r\n                    color=\"twitter\"\r\n                    slot=\"end\"\r\n                    (click)=\"onInfo('y')\"\r\n                  >\r\n                    <ion-icon\r\n                      size=\"large\"\r\n                      slot=\"icon-only\"\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon\r\n                    color=\"success\"\r\n                    slot=\"start\"\r\n                    name=\"speedometer-outline\"\r\n                  ></ion-icon>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >دور آرام (RPM)</ion-label\r\n                  >\r\n                  <ion-input\r\n                    placeholder=\"900\"\r\n                    formControlName=\"idleRpm\"\r\n                    type=\"number\"\r\n                  >\r\n                  </ion-input>\r\n                  <ion-button\r\n                    size=\"large\"\r\n                    fill=\"clear\"\r\n                    shape=\"round\"\r\n                    color=\"twitter\"\r\n                    slot=\"end\"\r\n                    (click)=\"onInfo('idleRpm')\"\r\n                  >\r\n                    <ion-icon\r\n                      size=\"large\"\r\n                      slot=\"icon-only\"\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n\r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon\r\n                    color=\"twitter\"\r\n                    slot=\"start\"\r\n                    name=\"pulse-outline\"\r\n                  ></ion-icon>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >وکیوم دور آرام (in·Hg)</ion-label\r\n                  >\r\n                  <ion-input\r\n                    placeholder=\"24\"\r\n                    formControlName=\"idleVacuum\"\r\n                    type=\"number\"\r\n                  >\r\n                  </ion-input>\r\n                  <ion-button\r\n                    size=\"large\"\r\n                    fill=\"clear\"\r\n                    shape=\"round\"\r\n                    color=\"twitter\"\r\n                    slot=\"end\"\r\n                    (click)=\"onInfo('idleVacuum')\"\r\n                  >\r\n                    <ion-icon\r\n                      size=\"large\"\r\n                      slot=\"icon-only\"\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n\r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon\r\n                    color=\"danger\"\r\n                    slot=\"start\"\r\n                    name=\"speedometer-outline\"\r\n                  ></ion-icon>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >دور موتور کاتاف</ion-label\r\n                  >\r\n                  <ion-input\r\n                    placeholder=\"6000\"\r\n                    formControlName=\"rpmRedline\"\r\n                    type=\"number\"\r\n                  >\r\n                  </ion-input>\r\n                  <ion-button\r\n                    size=\"large\"\r\n                    fill=\"clear\"\r\n                    shape=\"round\"\r\n                    color=\"twitter\"\r\n                    slot=\"end\"\r\n                    (click)=\"onInfo('rpmRedline')\"\r\n                  >\r\n                    <ion-icon\r\n                      size=\"large\"\r\n                      slot=\"icon-only\"\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n\r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon\r\n                    color=\"warning\"\r\n                    slot=\"start\"\r\n                    name=\"flame-outline\"\r\n                  ></ion-icon>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >اوج توان (HP)</ion-label\r\n                  >\r\n                  <ion-input\r\n                    placeholder=\"100\"\r\n                    formControlName=\"peakHp\"\r\n                    type=\"number\"\r\n                  >\r\n                  </ion-input>\r\n                  <ion-button\r\n                    size=\"large\"\r\n                    fill=\"clear\"\r\n                    shape=\"round\"\r\n                    color=\"twitter\"\r\n                    slot=\"end\"\r\n                    (click)=\"onInfo('peakHp')\"\r\n                  >\r\n                    <ion-icon\r\n                      size=\"large\"\r\n                      slot=\"icon-only\"\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n\r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon\r\n                    color=\"danger\"\r\n                    slot=\"start\"\r\n                    name=\"speedometer-outline\"\r\n                  ></ion-icon>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >دوره موتوره اوج توان</ion-label\r\n                  >\r\n                  <ion-input\r\n                    placeholder=\"5000\"\r\n                    formControlName=\"peakHpRpm\"\r\n                    type=\"number\"\r\n                  >\r\n                  </ion-input>\r\n                  <ion-button\r\n                    size=\"large\"\r\n                    fill=\"clear\"\r\n                    shape=\"round\"\r\n                    color=\"twitter\"\r\n                    slot=\"end\"\r\n                    (click)=\"onInfo('peakHpRpm')\"\r\n                  >\r\n                    <ion-icon\r\n                      size=\"large\"\r\n                      slot=\"icon-only\"\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n\r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon\r\n                    color=\"warning\"\r\n                    slot=\"start\"\r\n                    name=\"flash-outline\"\r\n                  ></ion-icon>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >اوج گشتاور (Nm)</ion-label\r\n                  >\r\n                  <ion-input\r\n                    placeholder=\"170\"\r\n                    formControlName=\"peakTorqu\"\r\n                    type=\"number\"\r\n                  >\r\n                  </ion-input>\r\n                  <ion-button\r\n                    size=\"large\"\r\n                    fill=\"clear\"\r\n                    shape=\"round\"\r\n                    color=\"twitter\"\r\n                    slot=\"end\"\r\n                    (click)=\"onInfo('peakTorqu')\"\r\n                  >\r\n                    <ion-icon\r\n                      size=\"large\"\r\n                      slot=\"icon-only\"\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n\r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon\r\n                    color=\"danger\"\r\n                    slot=\"start\"\r\n                    name=\"speedometer-outline\"\r\n                  ></ion-icon>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >دوره موتوره اوج گشتاور</ion-label\r\n                  >\r\n                  <ion-input\r\n                    placeholder=\"3000\"\r\n                    formControlName=\"peakTorquRpm\"\r\n                    type=\"number\"\r\n                  >\r\n                  </ion-input>\r\n                  <ion-button\r\n                    size=\"large\"\r\n                    fill=\"clear\"\r\n                    shape=\"round\"\r\n                    color=\"twitter\"\r\n                    slot=\"end\"\r\n                    (click)=\"onInfo('peakTorquRpm')\"\r\n                  >\r\n                    <ion-icon\r\n                      size=\"large\"\r\n                      slot=\"icon-only\"\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n\r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon\r\n                    color=\"success\"\r\n                    slot=\"start\"\r\n                    name=\"cube-outline\"\r\n                  ></ion-icon>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >حجم موتور (cc)</ion-label\r\n                  >\r\n                  <ion-input\r\n                    placeholder=\"2000\"\r\n                    formControlName=\"engineVolum\"\r\n                    type=\"number\"\r\n                  >\r\n                  </ion-input>\r\n                  <ion-button\r\n                    size=\"large\"\r\n                    fill=\"clear\"\r\n                    shape=\"round\"\r\n                    color=\"twitter\"\r\n                    slot=\"end\"\r\n                    (click)=\"onInfo('engineVolum')\"\r\n                  >\r\n                    <ion-icon\r\n                      size=\"large\"\r\n                      slot=\"icon-only\"\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n\r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon\r\n                    color=\"instagram\"\r\n                    slot=\"start\"\r\n                    name=\"rocket-outline\"\r\n                  ></ion-icon>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >بوست توربو (PSI)</ion-label\r\n                  >\r\n                  <ion-input\r\n                    placeholder=\"0\"\r\n                    formControlName=\"boost\"\r\n                    type=\"number\"\r\n                  >\r\n                  </ion-input>\r\n                  <ion-button\r\n                    size=\"large\"\r\n                    fill=\"clear\"\r\n                    shape=\"round\"\r\n                    color=\"twitter\"\r\n                    slot=\"end\"\r\n                    (click)=\"onInfo('boost')\"\r\n                  >\r\n                    <ion-icon\r\n                      size=\"large\"\r\n                      slot=\"icon-only\"\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n              </ion-list>\r\n\r\n              <ion-button\r\n                class=\"ion-margin\"\r\n                expand=\"block\"\r\n                fill=\"solid\"\r\n                shape=\"round\"\r\n                color=\"success\"\r\n                type=\"submit\"\r\n                [disabled]=\"form.invalid\"\r\n              >\r\n                محاسبه\r\n              </ion-button>\r\n\r\n              <ion-button\r\n                class=\"ion-margin\"\r\n                expand=\"block\"\r\n                fill=\"clear\"\r\n                shape=\"round\"\r\n                color=\"warning\"\r\n                (click)=\"form.reset()\"\r\n              >\r\n                ریست\r\n              </ion-button>\r\n            </form>\r\n          </ion-card>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n    <section class=\"ve-results\" *ngIf=\"isShow\" dir=\"rtl\">\r\n      <div class=\"ve-results__header\">\r\n        <div>\r\n          <p class=\"ve-results__eyebrow\">TUNER PLUS / VE MAP</p>\r\n          <h2>جدول راندمان حجمی</h2>\r\n          <p class=\"ve-results__description\">مقادیر محاسبه‌شده بر اساس دور موتور و فشار مانیفولد</p>\r\n        </div>\r\n        <div class=\"ve-results__size\" aria-label=\"ابعاد جدول\">\r\n          <ion-icon name=\"grid-outline\" aria-hidden=\"true\"></ion-icon>\r\n          <span>{{ form.value.x }} ردیف × {{ form.value.y }} ستون</span>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"ve-axis-guide\" aria-hidden=\"true\">\r\n        <span><i class=\"ve-axis-guide__dot ve-axis-guide__dot--rpm\"></i> محور افقی: دور موتور (RPM)</span>\r\n        <span><i class=\"ve-axis-guide__dot ve-axis-guide__dot--map\"></i> محور عمودی: فشار مانیفولد (kPa)</span>\r\n      </div>\r\n\r\n      <div class=\"ve-table-scroll\" role=\"region\" tabindex=\"0\" aria-label=\"جدول VE؛ برای دیدن همه ستون‌ها به صورت افقی حرکت کنید\">\r\n        <table class=\"ve-matrix\" dir=\"ltr\" aria-label=\"مقادیر راندمان حجمی بر اساس MAP و RPM\">\r\n          <thead>\r\n            <tr>\r\n              <th *ngFor=\"let rpm of VE[0]; index as i\" scope=\"col\" [class.ve-matrix__corner]=\"i === 0\">\r\n                {{ i === 0 ? 'MAP / RPM' : rpm }}\r\n              </th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <ng-container *ngFor=\"let ve of VE; index as i\">\r\n              <tr *ngIf=\"i !== 0\">\r\n                <ng-container *ngFor=\"let item of ve; index as j\">\r\n                  <th *ngIf=\"j === 0\" scope=\"row\">{{ item }}</th>\r\n                  <td *ngIf=\"j !== 0\" [style.background-color]=\"veMode ? calcColor(item, j) : calcColor2(item, j)\">{{ item }}</td>\r\n                </ng-container>\r\n              </tr>\r\n            </ng-container>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n\r\n      <div class=\"ve-results__footer\">\r\n        <div class=\"ve-legend\" *ngIf=\"veMode\">\r\n          <span>کمینه <strong>{{ min }}</strong></span>\r\n          <span class=\"ve-legend__scale\" aria-hidden=\"true\"></span>\r\n          <span>بیشینه <strong>{{ max }}</strong></span>\r\n        </div>\r\n        <span class=\"ve-results__scroll-hint\">برای مشاهده همه خانه‌ها، جدول را بکشید.</span>\r\n      </div>\r\n\r\n      <div class=\"ve-results__actions\">\r\n        <ion-button class=\"ve-results__back\" (click)=\"onBack()\" fill=\"outline\" shape=\"round\">\r\n          <ion-icon slot=\"start\" name=\"arrow-forward-outline\"></ion-icon>\r\n          بازگشت\r\n        </ion-button>\r\n        <ion-button class=\"ve-results__download\" (click)=\"exportTable()\" fill=\"solid\" shape=\"round\">\r\n          <ion-icon slot=\"start\" name=\"download-outline\"></ion-icon>\r\n          دانلود جدول\r\n        </ion-button>\r\n      </div>\r\n    </section>\r\n  </Section>\r\n\r\n  <app-footer></app-footer>\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button>\r\n      <ion-icon name=\"share-social-outline\"></ion-icon>\r\n    </ion-fab-button>\r\n    <ion-fab-list side=\"end\">\r\n      <ion-fab-button><ion-icon name=\"logo-vimeo\"></ion-icon></ion-fab-button>\r\n    </ion-fab-list>\r\n\r\n    <ion-fab-list side=\"top\">\r\n      <ion-fab-button color=\"instagram\">\r\n        <a\r\n          class=\"full-width full-height social-icon-container\"\r\n          href=\"{{ instagram }}\"\r\n          target=\"_blank\"\r\n        >\r\n          <ion-icon\r\n            class=\"social-icon\"\r\n            color=\"lightest\"\r\n            name=\"logo-instagram\"\r\n          ></ion-icon></a\r\n      ></ion-fab-button>\r\n      <ion-fab-button color=\"instagram\"\r\n        ><a\r\n          class=\"full-width full-height social-icon-container\"\r\n          href=\"{{ twitch }}\"\r\n          target=\"_blank\"\r\n        >\r\n          <ion-icon\r\n            class=\"social-icon\"\r\n            color=\"lightest\"\r\n            name=\"logo-twitch\"\r\n          ></ion-icon></a\r\n      ></ion-fab-button>\r\n      <ion-fab-button color=\"discord\"\r\n        ><a\r\n          class=\"full-width full-height social-icon-container\"\r\n          href=\"{{ discord }}\"\r\n          target=\"_blank\"\r\n        >\r\n          <ion-icon\r\n            class=\"social-icon\"\r\n            color=\"lightest\"\r\n            name=\"logo-discord\"\r\n          ></ion-icon></a\r\n      ></ion-fab-button>\r\n      <ion-fab-button color=\"danger\"\r\n        ><a\r\n          class=\"full-width full-height social-icon-container\"\r\n          href=\"{{ youtube }}\"\r\n          target=\"_blank\"\r\n        >\r\n          <ion-icon\r\n            class=\"social-icon\"\r\n            color=\"lightest\"\r\n            name=\"logo-youtube\"\r\n          ></ion-icon></a\r\n      ></ion-fab-button>\r\n      <ion-fab-button color=\"danger\"\r\n        ><a\r\n          class=\"full-width full-height social-icon-container\"\r\n          href=\"{{ pinterest }}\"\r\n          target=\"_blank\"\r\n        >\r\n          <ion-icon\r\n            class=\"social-icon\"\r\n            color=\"lightest\"\r\n            name=\"logo-pinterest\"\r\n          ></ion-icon></a\r\n      ></ion-fab-button>\r\n      <ion-fab-button color=\"facebook\"\r\n        ><a\r\n          class=\"full-width full-height social-icon-container\"\r\n          href=\"{{ facebook }}\"\r\n          target=\"_blank\"\r\n        >\r\n          <ion-icon\r\n            class=\"social-icon\"\r\n            color=\"lightest\"\r\n            name=\"logo-facebook\"\r\n          ></ion-icon></a\r\n      ></ion-fab-button>\r\n      <ion-fab-button color=\"twitter\"\r\n        ><a\r\n          class=\"full-width full-height social-icon-container\"\r\n          href=\"{{ twiter }}\"\r\n          target=\"_blank\"\r\n        >\r\n          <ion-icon\r\n            class=\"social-icon\"\r\n            color=\"lightest\"\r\n            name=\"logo-twitter\"\r\n          ></ion-icon></a\r\n      ></ion-fab-button>\r\n      <ion-fab-button color=\"twitter\"\r\n        ><a\r\n          class=\"full-width full-height social-icon-container\"\r\n          href=\"{{ linkedin }}\"\r\n          target=\"_blank\"\r\n        >\r\n          <ion-icon\r\n            class=\"social-icon\"\r\n            color=\"lightest\"\r\n            name=\"logo-linkedin\"\r\n          ></ion-icon></a\r\n      ></ion-fab-button>\r\n      <ion-fab-button color=\"telegram\"\r\n        ><a\r\n          class=\"full-width full-height social-icon-container\"\r\n          href=\"{{ telegram }}\"\r\n          target=\"_blank\"\r\n        >\r\n          <ion-icon\r\n            class=\"social-icon\"\r\n            color=\"lightest\"\r\n            name=\"paper-plane-outline\"\r\n          ></ion-icon></a\r\n      ></ion-fab-button>\r\n      <ion-fab-button color=\"lightest\"\r\n        ><a\r\n          class=\"full-width full-height social-icon-container\"\r\n          href=\"{{ aparat }}\"\r\n          target=\"_blank\"\r\n        >\r\n          <ion-icon\r\n            class=\"social-icon\"\r\n            color=\"lightest\"\r\n            src=\"/assets/icon/logo-aparat.svg\"\r\n          ></ion-icon></a\r\n      ></ion-fab-button>\r\n    </ion-fab-list>\r\n  </ion-fab>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_view_pages_tuner-plus_ve_ve_module_ts.js.map