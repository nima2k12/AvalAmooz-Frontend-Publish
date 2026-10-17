"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_view_pages_tuner-plus_spark_spark_module_ts"],{

/***/ 74288:
/*!*********************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/spark/spark-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SparkRoutingModule": () => (/* binding */ SparkRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _spark_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spark.component */ 78343);




const routes = [{ path: '', component: _spark_component__WEBPACK_IMPORTED_MODULE_0__.SparkComponent }];
let SparkRoutingModule = class SparkRoutingModule {
};
SparkRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], SparkRoutingModule);



/***/ }),

/***/ 78343:
/*!****************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/spark/spark.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SparkComponent": () => (/* binding */ SparkComponent)
/* harmony export */ });
/* harmony import */ var G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _spark_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spark.component.html?ngResource */ 57617);
/* harmony import */ var _spark_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spark.component.scss?ngResource */ 26741);
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




/* eslint-disable max-len */

/* eslint-disable eqeqeq */

/* eslint-disable @typescript-eslint/naming-convention */













let SparkComponent = class SparkComponent {
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
    this.quench = 28;
    this.compratio = 1;
    this.fuel = -2;
    this.quench2 = '28';
    this.compratio2 = '1';
    this.fuel2 = '-2';
    this.units = 1;
    this.isShow = false;
    src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.loading(this.loadingController);
    this.check();
  }

  tableSizeChanged() {
    this.tableSize = +this.tableSizeSelected;
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

      for (let i = 1; i < _this.SPK[0].length; i++) {
        const rpm = _this.SPK[0][i];
        tableRpm += rpm + ` \n`;
      }

      for (let i = 1; i < _this.SPK.length; i++) {
        const map1 = _this.SPK[i];

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
    <yAxis name="ignload" rows="` + _this.form.value.y + `">
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
        file_saver__WEBPACK_IMPORTED_MODULE_3__.saveAs(blob, 'Ignition Table - ' + latestDateDetail + '.table');
      } catch (e) {
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(_this.toastController, 'مرورگر شما از این قابلیت پشتیبانی نمیکند');
      }
    })();
  }

  check() {
    var _this2 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.loading(_this2.loadingController);

      _this2.siteService.GetTunerPlusById(9).subscribe(res => {
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
      idleRpm: [900, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.min(300), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.max(9000)]],
      idleVacuum: [24, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.min(5), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.max(30)]],
      rpmRedline: [7000, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.min(3000), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.max(20000)]],
      bore: [86, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.max(1000)]],
      engineVolum: [2000, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.min(600), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.max(20000)]],
      boost: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.max(200)]],
      x: [16, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.min(4), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.max(50)]],
      y: [16, [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.min(4), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.max(50)]]
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
          this.make_SPK_table(this.tableSize);
          this.rpm_bins(this.form.value.rpmRedline, this.form.value.idleRpm);
          this.map_bins(this.form.value.boost, this.form.value.idleVacuum);
          this.compute_SPKs();
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

      for (let i = 1; i < _this3.SPK.length; i++) {
        // tslint:disable-next-line: prefer-for-of
        for (let j = 1; j < _this3.SPK[i].length; j++) {
          const ve = _this3.SPK[i][j];

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

  onBack() {
    this.isShow = false;
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

      case 'bore':
        this.presentActiveAlertConfirm('قطر پیستون یا سیلندر بر حسب میلیمتر');
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
    var _this4 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this4.alertController.create({
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

  make_SPK_table(size) {
    var _this5 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Create SPK Array
      // SPK[i][j] is the spark advance
      // for the ith MAP bin, jth RPM bin (i,j=1..8)
      // where gamma=14.7/afr for gasoline.
      // SPK[i][0] is the ith MAP bin value (i=1..8)
      // SPK[0][j] is the jth RPM bin value (j=1..8)
      // SPK[0][0] is the kPa row with the value nearest 100kPa (i.e. the 'normally aspirated' row)
      //          and is it determined in function 'map_bins' - set but not used in this code version
      _this5.SPK = new Array(_this5.form.value.x + 1);

      for (let i = 0; i <= _this5.form.value.x; i++) {
        _this5.SPK[i] = new Array(_this5.form.value.y + 1);
      } // Initialize SPK Array


      for (let j = 0; j <= _this5.form.value.y; j++) {
        for (let k = 0; k <= _this5.form.value.y; k++) {
          _this5.SPK[j][k] = 0;
        }
      }

      return;
    })();
  }

  rpm_bins(maxrpm, idlerpm) {
    var _this6 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Calculate RPM bins
      // First two bins bracket idle with a delta of 500 rpm.
      // Other bins are equally spaced (ignoring rounding) to max_rpm.
      _this6.SPK[0][1] = Math.round((parseFloat(idlerpm) - 150) / 100) * 100;
      _this6.SPK[0][2] = Math.round(parseFloat(idlerpm) / 50) * 50;
      const rpm_bin_step = (parseFloat(maxrpm) - _this6.SPK[0][2]) / (_this6.form.value.y * 1.0 - 2) - 180;

      for (let i = 3; i <= _this6.form.value.y * 1.0 - 1; i++) {
        _this6.SPK[0][i] = Math.round((_this6.SPK[0][2] + (i - 2) * rpm_bin_step) / 100) * 100;
      }

      _this6.SPK[0][_this6.form.value.y * 1.0] = Math.round(parseFloat(maxrpm) / 100) * 100;
      return;
    })();
  }

  map_bins(maxmap, idlemap) {
    var _this7 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Calculate MAP bins
      // First bin is idle MAP value - 25. Rest are evenly spaced to 'boost' value (maxmap).
      // SPK[0][0] is set to the index for the array row containing the highest MAP value
      // less than 115 (i.e. the naturally aspirated, WOT row)
      _this7.SPK[1][0] = Math.round((101 - parseFloat(idlemap) * (101 / 29.92)) / 5 - 5) * 5;

      if (_this7.SPK[1][0] < 10) {
        _this7.SPK[1][0] = 10;
      }

      const map_bin_step = (parseFloat(maxmap) * (101 / 14.7) + 101 - _this7.SPK[1][0]) / (_this7.form.value.x * 1.0 - 1);

      for (let i = 2; i <= _this7.form.value.x * 1.0; i++) {
        _this7.SPK[i][0] = Math.round(_this7.SPK[1][0] + (i - 1) * map_bin_step);

        if (_this7.SPK[i][0] < 115) {
          _this7.SPK[0][0] = i;
        }
      }

      return;
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

  check_errors() {
    var _this9 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // check for
      // bore < 2"
      // max_rpm < 12000
      // boost < 21psi
      // 25 < idle_map > 4
      // phprpm > phprpm
      // peak_tq > peak_hp*5250/phprpm
      // peak_hp/displacement < 3.0 hp/ci
      // errors is a string with all error messages
      const err_idle_rpm = _this9.form.value.idleRpm;
      const err_maxrpm = _this9.form.value.rpmRedline;
      const err_boost = _this9.form.value.boost;
      let errors = '';

      if (err_idle_rpm < 300) {
        errors = 'Idle rpm set too low. ';
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(_this9.toastController, 'دور آرام نباید کمتر از 300 باشد');
      } else if (err_maxrpm > 20000) {
        errors = errors + 'Maximum RPM is set too high. ';
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(_this9.toastController, 'دور موتور کاتاف نباید بیشتر از 20000 باشد');
      } else if (err_boost > 200) {
        errors = errors + 'Maximum boost is too high to model. ';
        src_app_core_common_SharedIonic__WEBPACK_IMPORTED_MODULE_6__.SharedIonic.toast(_this9.toastController, 'بوست توربو نباید بیشتر از 200 باشد');
      }

      if (errors === '') {
        return false;
      } else {
        return true;
      }
    })();
  }

  compute_SPKs() {
    var _this10 = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this10.quench = +_this10.quench2 * 1.0;
      _this10.fuel = +_this10.fuel2 * 1.0;
      _this10.compratio = +_this10.compratio2 * 1.0;
      let bore = _this10.form.value.bore * 1.0;
      const idle_rpm = _this10.form.value.idleRpm * 1.0;

      if (_this10.units == 1) {
        bore = bore / 25.4;
      } // convert from mm to inches
      // get base value from bore size


      let total_adv = bore / 4.000; // get difference in inches

      total_adv = total_adv * 6.0; // add 6 degrees for every 1 inch over 4.000 inches, subtract if under

      total_adv = total_adv + _this10.quench + _this10.fuel + _this10.compratio; // idle value

      const idle_adv = 10; // fixed amount for now
      // Set K - the 'step' degradation ratio for spark advance to kPa

      const K = -0.30; // retard by 0.30 degrees per kPa
      // Fill the advance values
      // (but not the bin values)

      for (let i = 1; i <= _this10.form.value.x * 1.0; i++) {
        for (let j = 1; j <= _this10.form.value.y * 1.0; j++) {
          const f = (100 - (100 - _this10.SPK[i][0]) * K) / 100;

          if (_this10.SPK[0][j] > 2999) {
            // above 2999 rpm
            _this10.SPK[i][j] = total_adv * f;
          } else if (_this10.SPK[0][j] < idle_rpm) {
            // below idle speed
            if (_this10.SPK[i][0] <= 90) {
              // probably running
              _this10.SPK[i][j] = idle_adv + 3; // increase advance to prevent stall
            } else {
              // kpa bin greater than 90, probably cranking
              _this10.SPK[i][j] = 5; // set cranking advance
            } // end if ((SPK[j][0]...

          } else if (_this10.SPK[0][j] == idle_rpm) {
            // at idle speed
            _this10.SPK[i][j] = idle_adv;
          } else {
            // between idle and 3000 rpm
            const deltaAdv = total_adv - idle_adv;
            const deltaRPM = 3000 - idle_rpm;
            _this10.SPK[i][j] = (total_adv - deltaAdv * ((3000 - _this10.SPK[0][j]) / deltaRPM)) * f;
          } // end if(....


          _this10.SPK[i][j] = Math.round(10 * _this10.SPK[i][j]) / 10;
        } // end for j=...

      } // end for i=...

    })();
  }

};

SparkComponent.ctorParameters = () => [{
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

SparkComponent.propDecorators = {
  content: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild,
    args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonContent]
  }]
};
SparkComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
  selector: 'app-spark',
  template: _spark_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_spark_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], SparkComponent);


/***/ }),

/***/ 66969:
/*!*************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/spark/spark.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SparkModule": () => (/* binding */ SparkModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/view/components/app/page-header/page-header.module */ 19916);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _spark_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spark-routing.module */ 74288);
/* harmony import */ var _spark_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spark.component */ 78343);
/* harmony import */ var _components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/common/loading/loading.module */ 90876);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/view/components/app/footer/footer.module */ 60412);










let SparkModule = class SparkModule {
};
SparkModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [_spark_component__WEBPACK_IMPORTED_MODULE_2__.SparkComponent],
        imports: [
            src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__.PageHeaderModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _spark_routing_module__WEBPACK_IMPORTED_MODULE_1__.SparkRoutingModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_3__.LoadingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
            src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_4__.FooterModule
        ],
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe]
    })
], SparkModule);



/***/ }),

/***/ 26741:
/*!*****************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/spark/spark.component.scss?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = ".st-output {\n  --matrix-accent: var(--ion-color-danger);\n  position: relative;\n  max-width: 1500px;\n  margin: clamp(16px, 3vw, 40px) auto 48px;\n  padding: clamp(16px, 2.5vw, 30px);\n  overflow: hidden;\n  color: var(--ion-text-color);\n  background: linear-gradient(145deg, rgba(var(--ion-color-danger-rgb), 0.07), transparent 36%), var(--ion-item-background, var(--ion-background-color));\n  border: 1px solid rgba(var(--ion-color-medium-rgb), 0.24);\n  border-radius: 24px;\n  box-shadow: 0 22px 56px rgba(0, 0, 0, 0.12);\n}\n\n.st-output::before {\n  content: \"\";\n  position: absolute;\n  inset: 0 0 auto;\n  height: 4px;\n  background: linear-gradient(90deg, transparent, var(--matrix-accent), transparent);\n}\n\n.st-output__header,\n.st-output__badge,\n.st-output__axes,\n.st-output__axes span,\n.st-output__footer,\n.st-output__actions {\n  display: flex;\n  align-items: center;\n}\n\n.st-output__header {\n  justify-content: space-between;\n  gap: 16px;\n  margin-bottom: 18px;\n}\n\n.st-output__eyebrow {\n  margin: 0 0 8px;\n  color: var(--matrix-accent);\n  font-size: 0.73rem;\n  font-weight: 800;\n  letter-spacing: 0.15em;\n}\n\n.st-output__header h2 {\n  margin: 0;\n  font-size: clamp(1.3rem, 2.3vw, 1.85rem);\n  font-weight: 800;\n}\n\n.st-output__description {\n  margin: 8px 0 0;\n  color: var(--ion-color-medium);\n  font-size: 0.9rem;\n}\n\n.st-output__badge {\n  flex: none;\n  gap: 9px;\n  padding: 10px 14px;\n  color: var(--ion-text-color);\n  background: rgba(var(--ion-color-medium-rgb), 0.09);\n  border: 1px solid rgba(var(--ion-color-medium-rgb), 0.2);\n  border-radius: 12px;\n  font-size: 0.84rem;\n  font-weight: 700;\n  font-feature-settings: \"tnum\";\n  font-variant-numeric: tabular-nums;\n}\n\n.st-output__badge ion-icon {\n  color: var(--matrix-accent);\n  font-size: 1.1rem;\n}\n\n.st-output__axes {\n  flex-wrap: wrap;\n  gap: 9px 20px;\n  margin-bottom: 14px;\n  color: var(--ion-color-medium);\n  font-size: 0.82rem;\n}\n\n.st-output__axes span {\n  gap: 7px;\n}\n\n.st-output__axes ion-icon {\n  color: var(--matrix-accent);\n  font-size: 1rem;\n}\n\n.st-output__viewport {\n  max-height: min(70vh, 720px);\n  overflow: auto;\n  padding: 8px;\n  background: #111418;\n  border: 1px solid #30363d;\n  border-radius: 16px;\n  scrollbar-color: #6b737d #171b20;\n}\n\n.st-output__viewport:focus-visible {\n  outline: 3px solid var(--matrix-accent);\n  outline-offset: 3px;\n}\n\n.st-output__table {\n  width: max-content;\n  min-width: 100%;\n  border-collapse: separate;\n  border-spacing: 3px;\n  font-feature-settings: \"tnum\";\n  font-variant-numeric: tabular-nums;\n  text-align: center;\n}\n\n.st-output__table th,\n.st-output__table td {\n  min-width: 76px;\n  height: 48px;\n  padding: 8px 12px;\n  border-radius: 7px;\n  white-space: nowrap;\n}\n\n.st-output__table thead th {\n  position: sticky;\n  top: 0;\n  z-index: 2;\n  color: #f6f7f8;\n  background: #303740;\n  box-shadow: inset 0 -2px 0 #ba3438;\n  font-size: 0.87rem;\n  font-weight: 800;\n}\n\n.st-output__table tbody th {\n  position: sticky;\n  left: 0;\n  z-index: 1;\n  color: #f6f7f8;\n  background: #303740;\n  box-shadow: inset -2px 0 0 #ba3438;\n  font-size: 0.9rem;\n  font-weight: 800;\n}\n\n.st-output__table thead .st-output__corner {\n  left: 0;\n  z-index: 3;\n  min-width: 112px;\n  color: #fff;\n  background: #a8232b;\n  box-shadow: none;\n  font-size: 0.76rem;\n}\n\n.st-output__table tbody th:first-child {\n  min-width: 112px;\n}\n\n.st-output__table td {\n  color: #172028;\n  font-size: 1rem;\n  font-weight: 800;\n  transition: box-shadow 160ms ease, filter 160ms ease;\n}\n\n.st-output__table tbody tr:hover td {\n  filter: brightness(1.05);\n}\n\n.st-output__table tbody tr:hover th {\n  background: #424b55;\n}\n\n.st-output__table td:hover {\n  box-shadow: inset 0 0 0 3px rgba(15, 20, 25, 0.55);\n}\n\n.st-output__footer {\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin: 14px 0 20px;\n  color: var(--ion-color-medium);\n  font-size: 0.79rem;\n}\n\n.st-output__actions {\n  justify-content: flex-end;\n  flex-wrap: wrap;\n  gap: 10px;\n  padding-top: 18px;\n  border-top: 1px solid rgba(var(--ion-color-medium-rgb), 0.2);\n}\n\n.st-output__actions ion-button {\n  min-width: 138px;\n  margin: 0;\n  font-weight: 700;\n}\n\n.st-output__back {\n  --color: var(--ion-text-color);\n  --border-color: rgba(var(--ion-color-medium-rgb), 0.4);\n}\n\n.st-output__download {\n  --background: var(--matrix-accent);\n  --color: var(--ion-color-danger-contrast);\n  --box-shadow: 0 8px 20px rgba(var(--ion-color-danger-rgb), 0.24);\n}\n\n@media (max-width: 600px) {\n  .st-output {\n    margin: 12px 10px 32px;\n    padding: 16px 12px;\n    border-radius: 18px;\n  }\n\n  .st-output__header {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n\n  .st-output__viewport {\n    padding: 5px;\n    border-radius: 12px;\n  }\n\n  .st-output__table th,\n.st-output__table td {\n    min-width: 64px;\n    height: 42px;\n    padding: 7px 9px;\n    font-size: 0.85rem;\n  }\n\n  .st-output__table thead .st-output__corner,\n.st-output__table tbody th:first-child {\n    min-width: 94px;\n  }\n\n  .st-output__actions ion-button {\n    flex: 1;\n    min-width: 0;\n  }\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .st-output__table td {\n    transition: none;\n  }\n}\n\n:host-context(.dark-theme) {\n  color-scheme: dark;\n  color: var(--tuner-text);\n  --tuner-page: #11151e;\n  --tuner-surface: #1c2230;\n  --tuner-soft: #252e3d;\n  --tuner-border: #465269;\n  --tuner-text: #edf1f8;\n  --tuner-muted: #b2bfd1;\n  --tuner-header: rgba(28, 34, 48, 0.94);\n  --tuner-overlay: rgba(28, 34, 48, 0.95);\n  --tuner-purple-text: #c4b5fd;\n  --tuner-purple-soft: #302444;\n  --tuner-purple-border: #72579b;\n  --tuner-info-text: #93c5fd;\n  --tuner-info-soft: #1d304c;\n  --tuner-info-border: #466b9a;\n  --tuner-warning-text: #fcd477;\n  --tuner-warning-soft: #3b3020;\n  --tuner-warning-border: #93743d;\n  --tuner-success-text: #86efac;\n  --tuner-success-soft: #19392e;\n  --tuner-success-border: #417d60;\n  --tuner-danger-text: #fda4af;\n  --tuner-danger-soft: #402631;\n  --tuner-danger-border: #985367;\n  --tuner-teal-text: #7de4d4;\n  --tuner-teal-soft: #193a3a;\n  --tuner-teal-border: #437f7c;\n}\n\n:host-context(.dark-theme) input:not([type=range]):not([type=checkbox]):not([type=radio]):not([type=button]):not([type=submit]):not([type=file]),\n:host-context(.dark-theme) textarea,\n:host-context(.dark-theme) select {\n  color: var(--tuner-text);\n  background-color: var(--tuner-soft);\n}\n\n:host-context(.dark-theme) input::placeholder, :host-context(.dark-theme) textarea::placeholder {\n  color: var(--tuner-muted);\n  opacity: 0.75;\n}\n\n:host-context(.dark-theme) ion-header.learning-header {\n  --background: var(--tuner-header);\n  background: var(--tuner-header);\n  border-bottom-color: var(--tuner-border);\n}\n\n:host-context(.dark-theme) ion-content {\n  --background: var(--tuner-page);\n  --color: var(--tuner-text);\n}\n\n:host-context(.dark-theme) ion-card:not([color]), :host-context(.dark-theme) ion-list, :host-context(.dark-theme) ion-item:not([color]), :host-context(.dark-theme) ion-item-divider:not([color]) {\n  --background: var(--tuner-surface);\n  --color: var(--tuner-text);\n  --border-color: var(--tuner-border);\n}\n\n:host-context(.dark-theme) ion-list {\n  background: var(--tuner-surface);\n}\n\n:host-context(.dark-theme) ion-card-title, :host-context(.dark-theme) ion-card-subtitle {\n  color: var(--tuner-text);\n}\n\n:host-context(.dark-theme) ion-card[color=lightest], :host-context(.dark-theme) ion-item[color=lightest], :host-context(.dark-theme) ion-fab-button[color=lightest] {\n  --ion-color-base: var(--tuner-surface);\n  --ion-color-contrast: var(--tuner-text);\n  --ion-color-shade: var(--tuner-soft);\n  --ion-color-tint: var(--tuner-soft);\n}\n\n:host-context(.dark-theme) ion-text[color=dark], :host-context(.dark-theme) ion-label[color=dark] {\n  --ion-color-base: var(--tuner-text);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFxfb3V0cHV0LW1hdHJpeC5zY3NzIiwic3BhcmsuY29tcG9uZW50LnNjc3MiLCIuLlxcX3RoZW1lLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3Q0FBQTtFQUVBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSx3Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLHNKQUFBO0VBRUEseURBQUE7RUFDQSxtQkFBQTtFQUNBLDJDQUFBO0FDREY7O0FESUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtGQUFBO0FDREY7O0FESUE7Ozs7OztFQU1FLGFBQUE7RUFDQSxtQkFBQTtBQ0RGOztBRElBO0VBQ0UsOEJBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUNERjs7QURJQTtFQUNFLGVBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQ0RGOztBRElBO0VBQ0UsU0FBQTtFQUNBLHdDQUFBO0VBQ0EsZ0JBQUE7QUNERjs7QURJQTtFQUNFLGVBQUE7RUFDQSw4QkFBQTtFQUNBLGlCQUFBO0FDREY7O0FESUE7RUFDRSxVQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxtREFBQTtFQUNBLHdEQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7RUFBQSxrQ0FBQTtBQ0RGOztBRElBO0VBQ0UsMkJBQUE7RUFDQSxpQkFBQTtBQ0RGOztBRElBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7QUNERjs7QURJQTtFQUNFLFFBQUE7QUNERjs7QURJQTtFQUNFLDJCQUFBO0VBQ0EsZUFBQTtBQ0RGOztBRElBO0VBQ0UsNEJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0FDREY7O0FESUE7RUFDRSx1Q0FBQTtFQUNBLG1CQUFBO0FDREY7O0FESUE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFBQSxrQ0FBQTtFQUNBLGtCQUFBO0FDREY7O0FESUE7O0VBRUUsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNERjs7QURJQTtFQUNFLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNERjs7QURJQTtFQUNFLGdCQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNERjs7QURJQTtFQUNFLE9BQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDREY7O0FESUE7RUFDRSxnQkFBQTtBQ0RGOztBRElBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9EQUFBO0FDREY7O0FESUE7RUFDRSx3QkFBQTtBQ0RGOztBRElBO0VBQ0UsbUJBQUE7QUNERjs7QURJQTtFQUNFLGtEQUFBO0FDREY7O0FESUE7RUFDRSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0FDREY7O0FESUE7RUFDRSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSw0REFBQTtBQ0RGOztBRElBO0VBQ0UsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUNERjs7QURJQTtFQUNFLDhCQUFBO0VBQ0Esc0RBQUE7QUNERjs7QURJQTtFQUNFLGtDQUFBO0VBQ0EseUNBQUE7RUFDQSxnRUFBQTtBQ0RGOztBRElBO0VBQ0U7SUFDRSxzQkFBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7RUNERjs7RURJQTtJQUNFLHVCQUFBO0lBQ0Esc0JBQUE7RUNERjs7RURJQTtJQUNFLFlBQUE7SUFDQSxtQkFBQTtFQ0RGOztFRElBOztJQUVFLGVBQUE7SUFDQSxZQUFBO0lBQ0EsZ0JBQUE7SUFDQSxrQkFBQTtFQ0RGOztFRElBOztJQUVFLGVBQUE7RUNERjs7RURJQTtJQUNFLE9BQUE7SUFDQSxZQUFBO0VDREY7QUFDRjs7QURJQTtFQUNFO0lBQ0UsZ0JBQUE7RUNGRjtBQUNGOztBQ3hQRTtFQUNFLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0EsMEJBQUE7RUFDQSwwQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLCtCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLCtCQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0EsMEJBQUE7RUFDQSwwQkFBQTtFQUNBLDRCQUFBO0FEMFBKOztBQ3ZQSTs7O0VBR0Usd0JBQUE7RUFDQSxtQ0FBQTtBRHlQTjs7QUN0UEk7RUFDRSx5QkFBQTtFQUNBLGFBQUE7QUR3UE47O0FDclBJO0VBQ0UsaUNBQUE7RUFDQSwrQkFBQTtFQUNBLHdDQUFBO0FEdVBOOztBQ3JQSTtFQUFjLCtCQUFBO0VBQWlDLDBCQUFBO0FEeVBuRDs7QUN4UEk7RUFDRSxrQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsbUNBQUE7QUQwUE47O0FDeFBJO0VBQVcsZ0NBQUE7QUQyUGY7O0FDMVBJO0VBQW9DLHdCQUFBO0FENlB4Qzs7QUM1UEk7RUFDRSxzQ0FBQTtFQUNBLHVDQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQ0FBQTtBRDhQTjs7QUM1UEk7RUFBa0QsbUNBQUE7QUQrUHREIiwiZmlsZSI6InNwYXJrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0LW91dHB1dCB7XG4gIC0tbWF0cml4LWFjY2VudDogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG5cbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXgtd2lkdGg6IDE1MDBweDtcbiAgbWFyZ2luOiBjbGFtcCgxNnB4LCAzdncsIDQwcHgpIGF1dG8gNDhweDtcbiAgcGFkZGluZzogY2xhbXAoMTZweCwgMi41dncsIDMwcHgpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTQ1ZGVnLCByZ2JhKHZhcigtLWlvbi1jb2xvci1kYW5nZXItcmdiKSwgMC4wNyksIHRyYW5zcGFyZW50IDM2JSksXG4gICAgdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpKTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSh2YXIoLS1pb24tY29sb3ItbWVkaXVtLXJnYiksIDAuMjQpO1xuICBib3JkZXItcmFkaXVzOiAyNHB4O1xuICBib3gtc2hhZG93OiAwIDIycHggNTZweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4uc3Qtb3V0cHV0OjpiZWZvcmUge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBpbnNldDogMCAwIGF1dG87XG4gIGhlaWdodDogNHB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHRyYW5zcGFyZW50LCB2YXIoLS1tYXRyaXgtYWNjZW50KSwgdHJhbnNwYXJlbnQpO1xufVxuXG4uc3Qtb3V0cHV0X19oZWFkZXIsXG4uc3Qtb3V0cHV0X19iYWRnZSxcbi5zdC1vdXRwdXRfX2F4ZXMsXG4uc3Qtb3V0cHV0X19heGVzIHNwYW4sXG4uc3Qtb3V0cHV0X19mb290ZXIsXG4uc3Qtb3V0cHV0X19hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnN0LW91dHB1dF9faGVhZGVyIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XG59XG5cbi5zdC1vdXRwdXRfX2V5ZWJyb3cge1xuICBtYXJnaW46IDAgMCA4cHg7XG4gIGNvbG9yOiB2YXIoLS1tYXRyaXgtYWNjZW50KTtcbiAgZm9udC1zaXplOiAwLjczcmVtO1xuICBmb250LXdlaWdodDogODAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4xNWVtO1xufVxuXG4uc3Qtb3V0cHV0X19oZWFkZXIgaDIge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogY2xhbXAoMS4zcmVtLCAyLjN2dywgMS44NXJlbSk7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5cbi5zdC1vdXRwdXRfX2Rlc2NyaXB0aW9uIHtcbiAgbWFyZ2luOiA4cHggMCAwO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuXG4uc3Qtb3V0cHV0X19iYWRnZSB7XG4gIGZsZXg6IG5vbmU7XG4gIGdhcDogOXB4O1xuICBwYWRkaW5nOiAxMHB4IDE0cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvcik7XG4gIGJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLW1lZGl1bS1yZ2IpLCAwLjA5KTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSh2YXIoLS1pb24tY29sb3ItbWVkaXVtLXJnYiksIDAuMik7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGZvbnQtc2l6ZTogMC44NHJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC12YXJpYW50LW51bWVyaWM6IHRhYnVsYXItbnVtcztcbn1cblxuLnN0LW91dHB1dF9fYmFkZ2UgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0tbWF0cml4LWFjY2VudCk7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xufVxuXG4uc3Qtb3V0cHV0X19heGVzIHtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IDlweCAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIGZvbnQtc2l6ZTogMC44MnJlbTtcbn1cblxuLnN0LW91dHB1dF9fYXhlcyBzcGFuIHtcbiAgZ2FwOiA3cHg7XG59XG5cbi5zdC1vdXRwdXRfX2F4ZXMgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0tbWF0cml4LWFjY2VudCk7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLnN0LW91dHB1dF9fdmlld3BvcnQge1xuICBtYXgtaGVpZ2h0OiBtaW4oNzB2aCwgNzIwcHgpO1xuICBvdmVyZmxvdzogYXV0bztcbiAgcGFkZGluZzogOHB4O1xuICBiYWNrZ3JvdW5kOiAjMTExNDE4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMzAzNjNkO1xuICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICBzY3JvbGxiYXItY29sb3I6ICM2YjczN2QgIzE3MWIyMDtcbn1cblxuLnN0LW91dHB1dF9fdmlld3BvcnQ6Zm9jdXMtdmlzaWJsZSB7XG4gIG91dGxpbmU6IDNweCBzb2xpZCB2YXIoLS1tYXRyaXgtYWNjZW50KTtcbiAgb3V0bGluZS1vZmZzZXQ6IDNweDtcbn1cblxuLnN0LW91dHB1dF9fdGFibGUge1xuICB3aWR0aDogbWF4LWNvbnRlbnQ7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcbiAgYm9yZGVyLXNwYWNpbmc6IDNweDtcbiAgZm9udC12YXJpYW50LW51bWVyaWM6IHRhYnVsYXItbnVtcztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc3Qtb3V0cHV0X190YWJsZSB0aCxcbi5zdC1vdXRwdXRfX3RhYmxlIHRkIHtcbiAgbWluLXdpZHRoOiA3NnB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHBhZGRpbmc6IDhweCAxMnB4O1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5zdC1vdXRwdXRfX3RhYmxlIHRoZWFkIHRoIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAyO1xuICBjb2xvcjogI2Y2ZjdmODtcbiAgYmFja2dyb3VuZDogIzMwMzc0MDtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAtMnB4IDAgI2JhMzQzODtcbiAgZm9udC1zaXplOiAwLjg3cmVtO1xuICBmb250LXdlaWdodDogODAwO1xufVxuXG4uc3Qtb3V0cHV0X190YWJsZSB0Ym9keSB0aCB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDE7XG4gIGNvbG9yOiAjZjZmN2Y4O1xuICBiYWNrZ3JvdW5kOiAjMzAzNzQwO1xuICBib3gtc2hhZG93OiBpbnNldCAtMnB4IDAgMCAjYmEzNDM4O1xuICBmb250LXNpemU6IDAuOXJlbTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuLnN0LW91dHB1dF9fdGFibGUgdGhlYWQgLnN0LW91dHB1dF9fY29ybmVyIHtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMztcbiAgbWluLXdpZHRoOiAxMTJweDtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6ICNhODIzMmI7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMC43NnJlbTtcbn1cblxuLnN0LW91dHB1dF9fdGFibGUgdGJvZHkgdGg6Zmlyc3QtY2hpbGQge1xuICBtaW4td2lkdGg6IDExMnB4O1xufVxuXG4uc3Qtb3V0cHV0X190YWJsZSB0ZCB7XG4gIGNvbG9yOiAjMTcyMDI4O1xuICBmb250LXNpemU6IDFyZW07XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMTYwbXMgZWFzZSwgZmlsdGVyIDE2MG1zIGVhc2U7XG59XG5cbi5zdC1vdXRwdXRfX3RhYmxlIHRib2R5IHRyOmhvdmVyIHRkIHtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMDUpO1xufVxuXG4uc3Qtb3V0cHV0X190YWJsZSB0Ym9keSB0cjpob3ZlciB0aCB7XG4gIGJhY2tncm91bmQ6ICM0MjRiNTU7XG59XG5cbi5zdC1vdXRwdXRfX3RhYmxlIHRkOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgM3B4IHJnYmEoMTUsIDIwLCAyNSwgMC41NSk7XG59XG5cbi5zdC1vdXRwdXRfX2Zvb3RlciB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IDEwcHg7XG4gIG1hcmdpbjogMTRweCAwIDIwcHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgZm9udC1zaXplOiAwLjc5cmVtO1xufVxuXG4uc3Qtb3V0cHV0X19hY3Rpb25zIHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IDEwcHg7XG4gIHBhZGRpbmctdG9wOiAxOHB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSh2YXIoLS1pb24tY29sb3ItbWVkaXVtLXJnYiksIDAuMik7XG59XG5cbi5zdC1vdXRwdXRfX2FjdGlvbnMgaW9uLWJ1dHRvbiB7XG4gIG1pbi13aWR0aDogMTM4cHg7XG4gIG1hcmdpbjogMDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLnN0LW91dHB1dF9fYmFjayB7XG4gIC0tY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yKTtcbiAgLS1ib3JkZXItY29sb3I6IHJnYmEodmFyKC0taW9uLWNvbG9yLW1lZGl1bS1yZ2IpLCAwLjQpO1xufVxuXG4uc3Qtb3V0cHV0X19kb3dubG9hZCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tbWF0cml4LWFjY2VudCk7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3QpO1xuICAtLWJveC1zaGFkb3c6IDAgOHB4IDIwcHggcmdiYSh2YXIoLS1pb24tY29sb3ItZGFuZ2VyLXJnYiksIDAuMjQpO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLnN0LW91dHB1dCB7XG4gICAgbWFyZ2luOiAxMnB4IDEwcHggMzJweDtcbiAgICBwYWRkaW5nOiAxNnB4IDEycHg7XG4gICAgYm9yZGVyLXJhZGl1czogMThweDtcbiAgfVxuXG4gIC5zdC1vdXRwdXRfX2hlYWRlciB7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuXG4gIC5zdC1vdXRwdXRfX3ZpZXdwb3J0IHtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgfVxuXG4gIC5zdC1vdXRwdXRfX3RhYmxlIHRoLFxuICAuc3Qtb3V0cHV0X190YWJsZSB0ZCB7XG4gICAgbWluLXdpZHRoOiA2NHB4O1xuICAgIGhlaWdodDogNDJweDtcbiAgICBwYWRkaW5nOiA3cHggOXB4O1xuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgfVxuXG4gIC5zdC1vdXRwdXRfX3RhYmxlIHRoZWFkIC5zdC1vdXRwdXRfX2Nvcm5lcixcbiAgLnN0LW91dHB1dF9fdGFibGUgdGJvZHkgdGg6Zmlyc3QtY2hpbGQge1xuICAgIG1pbi13aWR0aDogOTRweDtcbiAgfVxuXG4gIC5zdC1vdXRwdXRfX2FjdGlvbnMgaW9uLWJ1dHRvbiB7XG4gICAgZmxleDogMTtcbiAgICBtaW4td2lkdGg6IDA7XG4gIH1cbn1cblxuQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpIHtcbiAgLnN0LW91dHB1dF9fdGFibGUgdGQge1xuICAgIHRyYW5zaXRpb246IG5vbmU7XG4gIH1cbn1cbiIsIi5zdC1vdXRwdXQge1xuICAtLW1hdHJpeC1hY2NlbnQ6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1heC13aWR0aDogMTUwMHB4O1xuICBtYXJnaW46IGNsYW1wKDE2cHgsIDN2dywgNDBweCkgYXV0byA0OHB4O1xuICBwYWRkaW5nOiBjbGFtcCgxNnB4LCAyLjV2dywgMzBweCk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvcik7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNDVkZWcsIHJnYmEodmFyKC0taW9uLWNvbG9yLWRhbmdlci1yZ2IpLCAwLjA3KSwgdHJhbnNwYXJlbnQgMzYlKSwgdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpKTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSh2YXIoLS1pb24tY29sb3ItbWVkaXVtLXJnYiksIDAuMjQpO1xuICBib3JkZXItcmFkaXVzOiAyNHB4O1xuICBib3gtc2hhZG93OiAwIDIycHggNTZweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4uc3Qtb3V0cHV0OjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGluc2V0OiAwIDAgYXV0bztcbiAgaGVpZ2h0OiA0cHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgdHJhbnNwYXJlbnQsIHZhcigtLW1hdHJpeC1hY2NlbnQpLCB0cmFuc3BhcmVudCk7XG59XG5cbi5zdC1vdXRwdXRfX2hlYWRlcixcbi5zdC1vdXRwdXRfX2JhZGdlLFxuLnN0LW91dHB1dF9fYXhlcyxcbi5zdC1vdXRwdXRfX2F4ZXMgc3Bhbixcbi5zdC1vdXRwdXRfX2Zvb3Rlcixcbi5zdC1vdXRwdXRfX2FjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc3Qtb3V0cHV0X19oZWFkZXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogMThweDtcbn1cblxuLnN0LW91dHB1dF9fZXllYnJvdyB7XG4gIG1hcmdpbjogMCAwIDhweDtcbiAgY29sb3I6IHZhcigtLW1hdHJpeC1hY2NlbnQpO1xuICBmb250LXNpemU6IDAuNzNyZW07XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjE1ZW07XG59XG5cbi5zdC1vdXRwdXRfX2hlYWRlciBoMiB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiBjbGFtcCgxLjNyZW0sIDIuM3Z3LCAxLjg1cmVtKTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuLnN0LW91dHB1dF9fZGVzY3JpcHRpb24ge1xuICBtYXJnaW46IDhweCAwIDA7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgZm9udC1zaXplOiAwLjlyZW07XG59XG5cbi5zdC1vdXRwdXRfX2JhZGdlIHtcbiAgZmxleDogbm9uZTtcbiAgZ2FwOiA5cHg7XG4gIHBhZGRpbmc6IDEwcHggMTRweDtcbiAgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yKTtcbiAgYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItbWVkaXVtLXJnYiksIDAuMDkpO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKHZhcigtLWlvbi1jb2xvci1tZWRpdW0tcmdiKSwgMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgZm9udC1zaXplOiAwLjg0cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXZhcmlhbnQtbnVtZXJpYzogdGFidWxhci1udW1zO1xufVxuXG4uc3Qtb3V0cHV0X19iYWRnZSBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1tYXRyaXgtYWNjZW50KTtcbiAgZm9udC1zaXplOiAxLjFyZW07XG59XG5cbi5zdC1vdXRwdXRfX2F4ZXMge1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogOXB4IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDE0cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgZm9udC1zaXplOiAwLjgycmVtO1xufVxuXG4uc3Qtb3V0cHV0X19heGVzIHNwYW4ge1xuICBnYXA6IDdweDtcbn1cblxuLnN0LW91dHB1dF9fYXhlcyBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1tYXRyaXgtYWNjZW50KTtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4uc3Qtb3V0cHV0X192aWV3cG9ydCB7XG4gIG1heC1oZWlnaHQ6IG1pbig3MHZoLCA3MjBweCk7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBwYWRkaW5nOiA4cHg7XG4gIGJhY2tncm91bmQ6ICMxMTE0MTg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzMDM2M2Q7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIHNjcm9sbGJhci1jb2xvcjogIzZiNzM3ZCAjMTcxYjIwO1xufVxuXG4uc3Qtb3V0cHV0X192aWV3cG9ydDpmb2N1cy12aXNpYmxlIHtcbiAgb3V0bGluZTogM3B4IHNvbGlkIHZhcigtLW1hdHJpeC1hY2NlbnQpO1xuICBvdXRsaW5lLW9mZnNldDogM3B4O1xufVxuXG4uc3Qtb3V0cHV0X190YWJsZSB7XG4gIHdpZHRoOiBtYXgtY29udGVudDtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xuICBib3JkZXItc3BhY2luZzogM3B4O1xuICBmb250LXZhcmlhbnQtbnVtZXJpYzogdGFidWxhci1udW1zO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zdC1vdXRwdXRfX3RhYmxlIHRoLFxuLnN0LW91dHB1dF9fdGFibGUgdGQge1xuICBtaW4td2lkdGg6IDc2cHg7XG4gIGhlaWdodDogNDhweDtcbiAgcGFkZGluZzogOHB4IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLnN0LW91dHB1dF9fdGFibGUgdGhlYWQgdGgge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDI7XG4gIGNvbG9yOiAjZjZmN2Y4O1xuICBiYWNrZ3JvdW5kOiAjMzAzNzQwO1xuICBib3gtc2hhZG93OiBpbnNldCAwIC0ycHggMCAjYmEzNDM4O1xuICBmb250LXNpemU6IDAuODdyZW07XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5cbi5zdC1vdXRwdXRfX3RhYmxlIHRib2R5IHRoIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTtcbiAgY29sb3I6ICNmNmY3Zjg7XG4gIGJhY2tncm91bmQ6ICMzMDM3NDA7XG4gIGJveC1zaGFkb3c6IGluc2V0IC0ycHggMCAwICNiYTM0Mzg7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBmb250LXdlaWdodDogODAwO1xufVxuXG4uc3Qtb3V0cHV0X190YWJsZSB0aGVhZCAuc3Qtb3V0cHV0X19jb3JuZXIge1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAzO1xuICBtaW4td2lkdGg6IDExMnB4O1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZDogI2E4MjMyYjtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgZm9udC1zaXplOiAwLjc2cmVtO1xufVxuXG4uc3Qtb3V0cHV0X190YWJsZSB0Ym9keSB0aDpmaXJzdC1jaGlsZCB7XG4gIG1pbi13aWR0aDogMTEycHg7XG59XG5cbi5zdC1vdXRwdXRfX3RhYmxlIHRkIHtcbiAgY29sb3I6ICMxNzIwMjg7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAxNjBtcyBlYXNlLCBmaWx0ZXIgMTYwbXMgZWFzZTtcbn1cblxuLnN0LW91dHB1dF9fdGFibGUgdGJvZHkgdHI6aG92ZXIgdGQge1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4wNSk7XG59XG5cbi5zdC1vdXRwdXRfX3RhYmxlIHRib2R5IHRyOmhvdmVyIHRoIHtcbiAgYmFja2dyb3VuZDogIzQyNGI1NTtcbn1cblxuLnN0LW91dHB1dF9fdGFibGUgdGQ6aG92ZXIge1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAzcHggcmdiYSgxNSwgMjAsIDI1LCAwLjU1KTtcbn1cblxuLnN0LW91dHB1dF9fZm9vdGVyIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogMTBweDtcbiAgbWFyZ2luOiAxNHB4IDAgMjBweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICBmb250LXNpemU6IDAuNzlyZW07XG59XG5cbi5zdC1vdXRwdXRfX2FjdGlvbnMge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogMTBweDtcbiAgcGFkZGluZy10b3A6IDE4cHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKHZhcigtLWlvbi1jb2xvci1tZWRpdW0tcmdiKSwgMC4yKTtcbn1cblxuLnN0LW91dHB1dF9fYWN0aW9ucyBpb24tYnV0dG9uIHtcbiAgbWluLXdpZHRoOiAxMzhweDtcbiAgbWFyZ2luOiAwO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uc3Qtb3V0cHV0X19iYWNrIHtcbiAgLS1jb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IpO1xuICAtLWJvcmRlci1jb2xvcjogcmdiYSh2YXIoLS1pb24tY29sb3ItbWVkaXVtLXJnYiksIDAuNCk7XG59XG5cbi5zdC1vdXRwdXRfX2Rvd25sb2FkIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1tYXRyaXgtYWNjZW50KTtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdCk7XG4gIC0tYm94LXNoYWRvdzogMCA4cHggMjBweCByZ2JhKHZhcigtLWlvbi1jb2xvci1kYW5nZXItcmdiKSwgMC4yNCk7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuc3Qtb3V0cHV0IHtcbiAgICBtYXJnaW46IDEycHggMTBweCAzMnB4O1xuICAgIHBhZGRpbmc6IDE2cHggMTJweDtcbiAgICBib3JkZXItcmFkaXVzOiAxOHB4O1xuICB9XG5cbiAgLnN0LW91dHB1dF9faGVhZGVyIHtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG5cbiAgLnN0LW91dHB1dF9fdmlld3BvcnQge1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICB9XG5cbiAgLnN0LW91dHB1dF9fdGFibGUgdGgsXG4uc3Qtb3V0cHV0X190YWJsZSB0ZCB7XG4gICAgbWluLXdpZHRoOiA2NHB4O1xuICAgIGhlaWdodDogNDJweDtcbiAgICBwYWRkaW5nOiA3cHggOXB4O1xuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgfVxuXG4gIC5zdC1vdXRwdXRfX3RhYmxlIHRoZWFkIC5zdC1vdXRwdXRfX2Nvcm5lcixcbi5zdC1vdXRwdXRfX3RhYmxlIHRib2R5IHRoOmZpcnN0LWNoaWxkIHtcbiAgICBtaW4td2lkdGg6IDk0cHg7XG4gIH1cblxuICAuc3Qtb3V0cHV0X19hY3Rpb25zIGlvbi1idXR0b24ge1xuICAgIGZsZXg6IDE7XG4gICAgbWluLXdpZHRoOiAwO1xuICB9XG59XG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xuICAuc3Qtb3V0cHV0X190YWJsZSB0ZCB7XG4gICAgdHJhbnNpdGlvbjogbm9uZTtcbiAgfVxufVxuOmhvc3QtY29udGV4dCguZGFyay10aGVtZSkge1xuICBjb2xvci1zY2hlbWU6IGRhcms7XG4gIGNvbG9yOiB2YXIoLS10dW5lci10ZXh0KTtcbiAgLS10dW5lci1wYWdlOiAjMTExNTFlO1xuICAtLXR1bmVyLXN1cmZhY2U6ICMxYzIyMzA7XG4gIC0tdHVuZXItc29mdDogIzI1MmUzZDtcbiAgLS10dW5lci1ib3JkZXI6ICM0NjUyNjk7XG4gIC0tdHVuZXItdGV4dDogI2VkZjFmODtcbiAgLS10dW5lci1tdXRlZDogI2IyYmZkMTtcbiAgLS10dW5lci1oZWFkZXI6IHJnYmEoMjgsIDM0LCA0OCwgMC45NCk7XG4gIC0tdHVuZXItb3ZlcmxheTogcmdiYSgyOCwgMzQsIDQ4LCAwLjk1KTtcbiAgLS10dW5lci1wdXJwbGUtdGV4dDogI2M0YjVmZDtcbiAgLS10dW5lci1wdXJwbGUtc29mdDogIzMwMjQ0NDtcbiAgLS10dW5lci1wdXJwbGUtYm9yZGVyOiAjNzI1NzliO1xuICAtLXR1bmVyLWluZm8tdGV4dDogIzkzYzVmZDtcbiAgLS10dW5lci1pbmZvLXNvZnQ6ICMxZDMwNGM7XG4gIC0tdHVuZXItaW5mby1ib3JkZXI6ICM0NjZiOWE7XG4gIC0tdHVuZXItd2FybmluZy10ZXh0OiAjZmNkNDc3O1xuICAtLXR1bmVyLXdhcm5pbmctc29mdDogIzNiMzAyMDtcbiAgLS10dW5lci13YXJuaW5nLWJvcmRlcjogIzkzNzQzZDtcbiAgLS10dW5lci1zdWNjZXNzLXRleHQ6ICM4NmVmYWM7XG4gIC0tdHVuZXItc3VjY2Vzcy1zb2Z0OiAjMTkzOTJlO1xuICAtLXR1bmVyLXN1Y2Nlc3MtYm9yZGVyOiAjNDE3ZDYwO1xuICAtLXR1bmVyLWRhbmdlci10ZXh0OiAjZmRhNGFmO1xuICAtLXR1bmVyLWRhbmdlci1zb2Z0OiAjNDAyNjMxO1xuICAtLXR1bmVyLWRhbmdlci1ib3JkZXI6ICM5ODUzNjc7XG4gIC0tdHVuZXItdGVhbC10ZXh0OiAjN2RlNGQ0O1xuICAtLXR1bmVyLXRlYWwtc29mdDogIzE5M2EzYTtcbiAgLS10dW5lci10ZWFsLWJvcmRlcjogIzQzN2Y3Yztcbn1cbjpob3N0LWNvbnRleHQoLmRhcmstdGhlbWUpIGlucHV0Om5vdChbdHlwZT1yYW5nZV0pOm5vdChbdHlwZT1jaGVja2JveF0pOm5vdChbdHlwZT1yYWRpb10pOm5vdChbdHlwZT1idXR0b25dKTpub3QoW3R5cGU9c3VibWl0XSk6bm90KFt0eXBlPWZpbGVdKSxcbjpob3N0LWNvbnRleHQoLmRhcmstdGhlbWUpIHRleHRhcmVhLFxuOmhvc3QtY29udGV4dCguZGFyay10aGVtZSkgc2VsZWN0IHtcbiAgY29sb3I6IHZhcigtLXR1bmVyLXRleHQpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10dW5lci1zb2Z0KTtcbn1cbjpob3N0LWNvbnRleHQoLmRhcmstdGhlbWUpIGlucHV0OjpwbGFjZWhvbGRlciwgOmhvc3QtY29udGV4dCguZGFyay10aGVtZSkgdGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHZhcigtLXR1bmVyLW11dGVkKTtcbiAgb3BhY2l0eTogMC43NTtcbn1cbjpob3N0LWNvbnRleHQoLmRhcmstdGhlbWUpIGlvbi1oZWFkZXIubGVhcm5pbmctaGVhZGVyIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS10dW5lci1oZWFkZXIpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS10dW5lci1oZWFkZXIpO1xuICBib3JkZXItYm90dG9tLWNvbG9yOiB2YXIoLS10dW5lci1ib3JkZXIpO1xufVxuOmhvc3QtY29udGV4dCguZGFyay10aGVtZSkgaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXR1bmVyLXBhZ2UpO1xuICAtLWNvbG9yOiB2YXIoLS10dW5lci10ZXh0KTtcbn1cbjpob3N0LWNvbnRleHQoLmRhcmstdGhlbWUpIGlvbi1jYXJkOm5vdChbY29sb3JdKSwgOmhvc3QtY29udGV4dCguZGFyay10aGVtZSkgaW9uLWxpc3QsIDpob3N0LWNvbnRleHQoLmRhcmstdGhlbWUpIGlvbi1pdGVtOm5vdChbY29sb3JdKSwgOmhvc3QtY29udGV4dCguZGFyay10aGVtZSkgaW9uLWl0ZW0tZGl2aWRlcjpub3QoW2NvbG9yXSkge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXR1bmVyLXN1cmZhY2UpO1xuICAtLWNvbG9yOiB2YXIoLS10dW5lci10ZXh0KTtcbiAgLS1ib3JkZXItY29sb3I6IHZhcigtLXR1bmVyLWJvcmRlcik7XG59XG46aG9zdC1jb250ZXh0KC5kYXJrLXRoZW1lKSBpb24tbGlzdCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXR1bmVyLXN1cmZhY2UpO1xufVxuOmhvc3QtY29udGV4dCguZGFyay10aGVtZSkgaW9uLWNhcmQtdGl0bGUsIDpob3N0LWNvbnRleHQoLmRhcmstdGhlbWUpIGlvbi1jYXJkLXN1YnRpdGxlIHtcbiAgY29sb3I6IHZhcigtLXR1bmVyLXRleHQpO1xufVxuOmhvc3QtY29udGV4dCguZGFyay10aGVtZSkgaW9uLWNhcmRbY29sb3I9bGlnaHRlc3RdLCA6aG9zdC1jb250ZXh0KC5kYXJrLXRoZW1lKSBpb24taXRlbVtjb2xvcj1saWdodGVzdF0sIDpob3N0LWNvbnRleHQoLmRhcmstdGhlbWUpIGlvbi1mYWItYnV0dG9uW2NvbG9yPWxpZ2h0ZXN0XSB7XG4gIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLXR1bmVyLXN1cmZhY2UpO1xuICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0tdHVuZXItdGV4dCk7XG4gIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS10dW5lci1zb2Z0KTtcbiAgLS1pb24tY29sb3ItdGludDogdmFyKC0tdHVuZXItc29mdCk7XG59XG46aG9zdC1jb250ZXh0KC5kYXJrLXRoZW1lKSBpb24tdGV4dFtjb2xvcj1kYXJrXSwgOmhvc3QtY29udGV4dCguZGFyay10aGVtZSkgaW9uLWxhYmVsW2NvbG9yPWRhcmtdIHtcbiAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0tdHVuZXItdGV4dCk7XG59IiwiLy8gS2VlcCB0aGUgb3JpZ2luYWwgbGlnaHQgY29sb3IgYXQgZWFjaCBjYWxsIHNpdGUuIFRva2VucyBleGlzdCBvbmx5IGluIGRhcmsgbW9kZS5cbkBmdW5jdGlvbiB0dW5lci1jb2xvcigkcm9sZSwgJGxpZ2h0KSB7XG4gIEByZXR1cm4gdmFyKC0tdHVuZXItI3skcm9sZX0sICN7JGxpZ2h0fSk7XG59XG5cbkBtaXhpbiB0dW5lci1kYXJrLXRoZW1lIHtcbiAgOmhvc3QtY29udGV4dCguZGFyay10aGVtZSkge1xuICAgIGNvbG9yLXNjaGVtZTogZGFyaztcbiAgICBjb2xvcjogdmFyKC0tdHVuZXItdGV4dCk7XG4gICAgLS10dW5lci1wYWdlOiAjMTExNTFlO1xuICAgIC0tdHVuZXItc3VyZmFjZTogIzFjMjIzMDtcbiAgICAtLXR1bmVyLXNvZnQ6ICMyNTJlM2Q7XG4gICAgLS10dW5lci1ib3JkZXI6ICM0NjUyNjk7XG4gICAgLS10dW5lci10ZXh0OiAjZWRmMWY4O1xuICAgIC0tdHVuZXItbXV0ZWQ6ICNiMmJmZDE7XG4gICAgLS10dW5lci1oZWFkZXI6IHJnYmEoMjgsIDM0LCA0OCwgMC45NCk7XG4gICAgLS10dW5lci1vdmVybGF5OiByZ2JhKDI4LCAzNCwgNDgsIDAuOTUpO1xuICAgIC0tdHVuZXItcHVycGxlLXRleHQ6ICNjNGI1ZmQ7XG4gICAgLS10dW5lci1wdXJwbGUtc29mdDogIzMwMjQ0NDtcbiAgICAtLXR1bmVyLXB1cnBsZS1ib3JkZXI6ICM3MjU3OWI7XG4gICAgLS10dW5lci1pbmZvLXRleHQ6ICM5M2M1ZmQ7XG4gICAgLS10dW5lci1pbmZvLXNvZnQ6ICMxZDMwNGM7XG4gICAgLS10dW5lci1pbmZvLWJvcmRlcjogIzQ2NmI5YTtcbiAgICAtLXR1bmVyLXdhcm5pbmctdGV4dDogI2ZjZDQ3NztcbiAgICAtLXR1bmVyLXdhcm5pbmctc29mdDogIzNiMzAyMDtcbiAgICAtLXR1bmVyLXdhcm5pbmctYm9yZGVyOiAjOTM3NDNkO1xuICAgIC0tdHVuZXItc3VjY2Vzcy10ZXh0OiAjODZlZmFjO1xuICAgIC0tdHVuZXItc3VjY2Vzcy1zb2Z0OiAjMTkzOTJlO1xuICAgIC0tdHVuZXItc3VjY2Vzcy1ib3JkZXI6ICM0MTdkNjA7XG4gICAgLS10dW5lci1kYW5nZXItdGV4dDogI2ZkYTRhZjtcbiAgICAtLXR1bmVyLWRhbmdlci1zb2Z0OiAjNDAyNjMxO1xuICAgIC0tdHVuZXItZGFuZ2VyLWJvcmRlcjogIzk4NTM2NztcbiAgICAtLXR1bmVyLXRlYWwtdGV4dDogIzdkZTRkNDtcbiAgICAtLXR1bmVyLXRlYWwtc29mdDogIzE5M2EzYTtcbiAgICAtLXR1bmVyLXRlYWwtYm9yZGVyOiAjNDM3ZjdjO1xuXG4gICAgLy8gTmF0aXZlIGNvbnRyb2xzIHdpdGhvdXQgYW4gZXhwbGljaXQgbGlnaHQgYmFja2dyb3VuZCBuZWVkIGEgZGFyayBzdXJmYWNlIHRvby5cbiAgICBpbnB1dDpub3QoW3R5cGU9J3JhbmdlJ10pOm5vdChbdHlwZT0nY2hlY2tib3gnXSk6bm90KFt0eXBlPSdyYWRpbyddKTpub3QoW3R5cGU9J2J1dHRvbiddKTpub3QoW3R5cGU9J3N1Ym1pdCddKTpub3QoW3R5cGU9J2ZpbGUnXSksXG4gICAgdGV4dGFyZWEsXG4gICAgc2VsZWN0IHtcbiAgICAgIGNvbG9yOiB2YXIoLS10dW5lci10ZXh0KTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXR1bmVyLXNvZnQpO1xuICAgIH1cblxuICAgIGlucHV0OjpwbGFjZWhvbGRlciwgdGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10dW5lci1tdXRlZCk7XG4gICAgICBvcGFjaXR5OiAwLjc1O1xuICAgIH1cblxuICAgIGlvbi1oZWFkZXIubGVhcm5pbmctaGVhZGVyIHtcbiAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0tdHVuZXItaGVhZGVyKTtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXR1bmVyLWhlYWRlcik7XG4gICAgICBib3JkZXItYm90dG9tLWNvbG9yOiB2YXIoLS10dW5lci1ib3JkZXIpO1xuICAgIH1cbiAgICBpb24tY29udGVudCB7IC0tYmFja2dyb3VuZDogdmFyKC0tdHVuZXItcGFnZSk7IC0tY29sb3I6IHZhcigtLXR1bmVyLXRleHQpOyB9XG4gICAgaW9uLWNhcmQ6bm90KFtjb2xvcl0pLCBpb24tbGlzdCwgaW9uLWl0ZW06bm90KFtjb2xvcl0pLCBpb24taXRlbS1kaXZpZGVyOm5vdChbY29sb3JdKSB7XG4gICAgICAtLWJhY2tncm91bmQ6IHZhcigtLXR1bmVyLXN1cmZhY2UpO1xuICAgICAgLS1jb2xvcjogdmFyKC0tdHVuZXItdGV4dCk7XG4gICAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0tdHVuZXItYm9yZGVyKTtcbiAgICB9XG4gICAgaW9uLWxpc3QgeyBiYWNrZ3JvdW5kOiB2YXIoLS10dW5lci1zdXJmYWNlKTsgfVxuICAgIGlvbi1jYXJkLXRpdGxlLCBpb24tY2FyZC1zdWJ0aXRsZSB7IGNvbG9yOiB2YXIoLS10dW5lci10ZXh0KTsgfVxuICAgIGlvbi1jYXJkW2NvbG9yPSdsaWdodGVzdCddLCBpb24taXRlbVtjb2xvcj0nbGlnaHRlc3QnXSwgaW9uLWZhYi1idXR0b25bY29sb3I9J2xpZ2h0ZXN0J10ge1xuICAgICAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0tdHVuZXItc3VyZmFjZSk7XG4gICAgICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0tdHVuZXItdGV4dCk7XG4gICAgICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0tdHVuZXItc29mdCk7XG4gICAgICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS10dW5lci1zb2Z0KTtcbiAgICB9XG4gICAgaW9uLXRleHRbY29sb3I9J2RhcmsnXSwgaW9uLWxhYmVsW2NvbG9yPSdkYXJrJ10geyAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS10dW5lci10ZXh0KTsgfVxuICB9XG59XG4iXX0= */";

/***/ }),

/***/ 57617:
/*!*****************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/spark/spark.component.html?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"interior-header\" translucent=\"true\">\n  <app-loading></app-loading>\n  <app-page-header fallback=\"/TunerPlus\" [defaultBack]=\"false\">\n<ion-buttons page-back><ion-back-button text=\"\" icon=\"arrow-back-outline\"\r\n        color=\"lightest\"\r\n        defaultHref=\"/TunerPlus\"\r\n      ></ion-back-button></ion-buttons>\n<span page-title dir=\"rtl\" *ngIf=\"!showSearchbar\" class=\"title-size no-padding\"\r\n      >زاویه جرقه (Ignition Advance)</span>\n<ion-buttons page-actions slot=\"end\" *ngIf=\"!showSearchbar\">\r\n      <ion-button (click)=\"showSearchbar = true\">\r\n        <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\n<ion-searchbar\r\n      dir=\"rtl\"\r\n      *ngIf=\"showSearchbar\"\r\n      showCancelButton=\"always\"\r\n      [(ngModel)]=\"queryText\"\r\n      placeholder=\"جستجوی آموزشگاه\"\r\n      (ionCancel)=\"onCancel()\"\r\n      (keyup.enter)=\"search()\"\r\n    ></ion-searchbar>\n\n  </app-page-header>\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <Section *ngIf=\"!isCheck\">\r\n    <ion-grid fixed *ngIf=\"!isShow\">\r\n      <ion-row>\r\n        <ion-col\r\n          dir=\"rtl\"\r\n          size=\"12\"\r\n          offset=\"0\"\r\n          size-md=\"10\"\r\n          offset-md=\"1\"\r\n          size-lg=\"8\"\r\n          offset-lg=\"2\"\r\n        >\r\n          <ion-card>\r\n            <ion-card-content dir=\"rtl\">\r\n              <!-- <ion-item>\r\n                <ion-label>ابعاد جدول</ion-label>\r\n                <ion-select (ionChange)=\"tableSizeChanged()\" [(ngModel)]=\"tableSizeSelected\" value=\"16\">\r\n                  <ion-select-option value=\"16\">16*16</ion-select-option>\r\n                  <ion-select-option value=\"12\">12*12</ion-select-option>\r\n                  <ion-select-option value=\"9\">9*9</ion-select-option>\r\n                  <ion-select-option value=\"8\">8*8</ion-select-option>\r\n                </ion-select>\r\n              </ion-item> -->\r\n              <ion-item>\r\n                <ion-label>نسبت تراکم</ion-label>\r\n                <ion-select [(ngModel)]=\"compratio2\" value=\"1\">\r\n                  <ion-select-option value=\"2\">< 9.0</ion-select-option>\r\n                  <ion-select-option value=\"1\">9.1 ~ 10.0</ion-select-option>\r\n                  <ion-select-option value=\"0\">10.1 ~ 11.5</ion-select-option>\r\n                  <ion-select-option value=\"-2\">> 11.6</ion-select-option>\r\n                </ion-select>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>نوع سوخت</ion-label>\r\n                <ion-select [(ngModel)]=\"fuel2\" value=\"-1\">\r\n                  <ion-select-option value=\"-4\">(78 اکتان)</ion-select-option>\r\n                  <ion-select-option value=\"-3\">(82 اکتان)</ion-select-option>\r\n                  <ion-select-option value=\"-2\">(87 اکتان)</ion-select-option>\r\n                  <ion-select-option value=\"-1\"\r\n                    >معمولی (91 - 92 اکتان)</ion-select-option\r\n                  >\r\n                  <ion-select-option value=\"0\"\r\n                    >ویژه (94+ اکتان)</ion-select-option\r\n                  >\r\n                  <ion-select-option value=\"2\">E85</ion-select-option>\r\n                  <ion-select-option value=\"3\">اکتان < 105</ion-select-option>\r\n                </ion-select>\r\n              </ion-item>\r\n              <ion-item>\r\n                <ion-label>نوع محفظه احتراق</ion-label>\r\n                <ion-select [(ngModel)]=\"quench2\" value=\"28\">\r\n                  <ion-select-option value=\"33\"\r\n                    >از نوع سوپاپ باز</ion-select-option\r\n                  >\r\n                  <ion-select-option value=\"28\"\r\n                    >دارای 2 سوپاپ</ion-select-option\r\n                  >\r\n                  <ion-select-option value=\"22\"\r\n                    >دارای 3 یا 4 سوپاپ</ion-select-option\r\n                  >\r\n                  <ion-select-option value=\"20\"\r\n                    >دارای 5 سوپاپ</ion-select-option\r\n                  >\r\n                </ion-select>\r\n              </ion-item>\r\n            </ion-card-content>\r\n          </ion-card>\r\n\r\n          <form [formGroup]=\"form\" (ngSubmit)=\"onCalc()\">\r\n            <ion-card>\r\n              <ion-card-header color=\"primary\">\r\n                <ion-card-title class=\"text-center\"\r\n                  >محاسبه زاویه جرقه</ion-card-title\r\n                >\r\n              </ion-card-header>\r\n              <ion-list>\r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon\r\n                    slot=\"start\"\r\n                    name=\"ellipsis-vertical-outline\"\r\n                  ></ion-icon>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >تعداد سطر جدول</ion-label\r\n                  >\r\n                  <ion-input placeholder=\"16\" formControlName=\"x\" type=\"number\">\r\n                  </ion-input>\r\n                  <ion-button\r\n                    size=\"large\"\r\n                    fill=\"clear\"\r\n                    shape=\"round\"\r\n                    color=\"twitter\"\r\n                    slot=\"end\"\r\n                    (click)=\"onInfo('x')\"\r\n                  >\r\n                    <ion-icon\r\n                      size=\"large\"\r\n                      slot=\"icon-only\"\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon\r\n                    slot=\"start\"\r\n                    name=\"ellipsis-horizontal-outline\"\r\n                  ></ion-icon>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >تعداد ستون جدول</ion-label\r\n                  >\r\n                  <ion-input placeholder=\"16\" formControlName=\"y\" type=\"number\">\r\n                  </ion-input>\r\n                  <ion-button\r\n                    size=\"large\"\r\n                    fill=\"clear\"\r\n                    shape=\"round\"\r\n                    color=\"twitter\"\r\n                    slot=\"end\"\r\n                    (click)=\"onInfo('y')\"\r\n                  >\r\n                    <ion-icon\r\n                      size=\"large\"\r\n                      slot=\"icon-only\"\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon\r\n                    color=\"success\"\r\n                    slot=\"start\"\r\n                    name=\"speedometer-outline\"\r\n                  ></ion-icon>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >دور آرام (RPM)</ion-label\r\n                  >\r\n                  <ion-input\r\n                    placeholder=\"900\"\r\n                    formControlName=\"idleRpm\"\r\n                    type=\"number\"\r\n                  >\r\n                  </ion-input>\r\n                  <ion-button\r\n                    size=\"large\"\r\n                    fill=\"clear\"\r\n                    shape=\"round\"\r\n                    color=\"twitter\"\r\n                    slot=\"end\"\r\n                    (click)=\"onInfo('idleRpm')\"\r\n                  >\r\n                    <ion-icon\r\n                      size=\"large\"\r\n                      slot=\"icon-only\"\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n\r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon\r\n                    color=\"twitter\"\r\n                    slot=\"start\"\r\n                    name=\"pulse-outline\"\r\n                  ></ion-icon>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >وکیوم دور آرام (in·Hg)</ion-label\r\n                  >\r\n                  <ion-input\r\n                    placeholder=\"24\"\r\n                    formControlName=\"idleVacuum\"\r\n                    type=\"number\"\r\n                  >\r\n                  </ion-input>\r\n                  <ion-button\r\n                    size=\"large\"\r\n                    fill=\"clear\"\r\n                    shape=\"round\"\r\n                    color=\"twitter\"\r\n                    slot=\"end\"\r\n                    (click)=\"onInfo('idleVacuum')\"\r\n                  >\r\n                    <ion-icon\r\n                      size=\"large\"\r\n                      slot=\"icon-only\"\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n\r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon\r\n                    color=\"danger\"\r\n                    slot=\"start\"\r\n                    name=\"speedometer-outline\"\r\n                  ></ion-icon>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >دور موتور کاتاف</ion-label\r\n                  >\r\n                  <ion-input\r\n                    placeholder=\"6000\"\r\n                    formControlName=\"rpmRedline\"\r\n                    type=\"number\"\r\n                  >\r\n                  </ion-input>\r\n                  <ion-button\r\n                    size=\"large\"\r\n                    fill=\"clear\"\r\n                    shape=\"round\"\r\n                    color=\"twitter\"\r\n                    slot=\"end\"\r\n                    (click)=\"onInfo('rpmRedline')\"\r\n                  >\r\n                    <ion-icon\r\n                      size=\"large\"\r\n                      slot=\"icon-only\"\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n\r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon\r\n                    color=\"warning\"\r\n                    slot=\"start\"\r\n                    name=\"ellipse-outline\"\r\n                  ></ion-icon>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >قطر سیلندر (mm)</ion-label\r\n                  >\r\n                  <ion-input\r\n                    placeholder=\"86\"\r\n                    formControlName=\"bore\"\r\n                    type=\"number\"\r\n                  >\r\n                  </ion-input>\r\n                  <ion-button\r\n                    size=\"large\"\r\n                    fill=\"clear\"\r\n                    shape=\"round\"\r\n                    color=\"twitter\"\r\n                    slot=\"end\"\r\n                    (click)=\"onInfo('bore')\"\r\n                  >\r\n                    <ion-icon\r\n                      size=\"large\"\r\n                      slot=\"icon-only\"\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n\r\n                <ion-item class=\"ion-margin\">\r\n                  <ion-icon\r\n                    color=\"instagram\"\r\n                    slot=\"start\"\r\n                    name=\"rocket-outline\"\r\n                  ></ion-icon>\r\n                  <ion-label position=\"floating\" color=\"light\"\r\n                    >بوست توربو (PSI)</ion-label\r\n                  >\r\n                  <ion-input\r\n                    placeholder=\"0\"\r\n                    formControlName=\"boost\"\r\n                    type=\"number\"\r\n                  >\r\n                  </ion-input>\r\n                  <ion-button\r\n                    size=\"large\"\r\n                    fill=\"clear\"\r\n                    shape=\"round\"\r\n                    color=\"twitter\"\r\n                    slot=\"end\"\r\n                    (click)=\"onInfo('boost')\"\r\n                  >\r\n                    <ion-icon\r\n                      size=\"large\"\r\n                      slot=\"icon-only\"\r\n                      name=\"information-circle-outline\"\r\n                    ></ion-icon>\r\n                  </ion-button>\r\n                </ion-item>\r\n              </ion-list>\r\n            </ion-card>\r\n\r\n            <ion-button\r\n              class=\"ion-margin\"\r\n              expand=\"block\"\r\n              fill=\"solid\"\r\n              shape=\"round\"\r\n              color=\"success\"\r\n              type=\"submit\"\r\n              [disabled]=\"form.invalid\"\r\n            >\r\n              محاسبه\r\n            </ion-button>\r\n\r\n            <ion-button\r\n              class=\"ion-margin\"\r\n              expand=\"block\"\r\n              fill=\"clear\"\r\n              shape=\"round\"\r\n              color=\"warning\"\r\n              (click)=\"form.reset()\"\r\n            >\r\n              ریست\r\n            </ion-button>\r\n          </form>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n    <section class=\"st-output\" *ngIf=\"isShow\" dir=\"rtl\">\r\n      <div class=\"st-output__header\">\r\n        <div>\r\n          <p class=\"st-output__eyebrow\">TUNER PLUS / SPARK</p>\r\n          <h2>جدول آوانس جرقه</h2>\r\n          <p class=\"st-output__description\">مقدار آوانس در دور و بارهای مختلف</p>\r\n        </div>\r\n        <div class=\"st-output__badge\" aria-label=\"ابعاد جدول\">\r\n          <ion-icon name=\"grid-outline\" aria-hidden=\"true\"></ion-icon>\r\n          <span>{{ SPK.length - 1 }} ردیف × {{ SPK[0].length - 1 }} ستون</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"st-output__axes\" aria-hidden=\"true\">\r\n        <span><ion-icon name=\"speedometer-outline\"></ion-icon>محور افقی: دور موتور (RPM)</span>\r\n        <span><ion-icon name=\"pulse-outline\"></ion-icon>محور عمودی: فشار مانیفولد (kPa)</span>\r\n      </div>\r\n      <div class=\"st-output__viewport\" role=\"region\" tabindex=\"0\" aria-label=\"جدول SPARK؛ برای دیدن همه ستون‌ها به صورت افقی حرکت کنید\">\r\n        <table class=\"st-output__table\" dir=\"ltr\" aria-label=\"جدول آوانس جرقه\">\r\n          <thead>\r\n            <tr>\r\n              <th *ngFor=\"let rpm of SPK[0]; index as i\" scope=\"col\" [class.st-output__corner]=\"i === 0\">\r\n                {{ i === 0 ? 'MAP / RPM' : rpm }}\r\n              </th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <ng-container *ngFor=\"let row of SPK; index as i\">\r\n              <tr *ngIf=\"i !== 0\">\r\n                <ng-container *ngFor=\"let item of row; index as j\">\r\n                  <th *ngIf=\"j === 0\" scope=\"row\">{{ item }}</th>\r\n                  <td *ngIf=\"j !== 0\" [style.background-color]=\"calcColor(item, j)\">{{ item }}</td>\r\n                </ng-container>\r\n              </tr>\r\n            </ng-container>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n      <div class=\"st-output__footer\">\r\n        <span>مقادیر خانه‌ها بر اساس ورودی‌های شما محاسبه شده‌اند.</span>\r\n        <span>برای مشاهده همه خانه‌ها، جدول را بکشید.</span>\r\n      </div>\r\n      <div class=\"st-output__actions\">\r\n        <ion-button class=\"st-output__back\" (click)=\"onBack()\" fill=\"outline\" shape=\"round\">\r\n          <ion-icon slot=\"start\" name=\"arrow-forward-outline\"></ion-icon>\r\n          بازگشت\r\n        </ion-button>\r\n        <ion-button class=\"st-output__download\" (click)=\"exportTable()\" fill=\"solid\" shape=\"round\">\r\n          <ion-icon slot=\"start\" name=\"download-outline\"></ion-icon>\r\n          دانلود جدول\r\n        </ion-button>\r\n      </div>\r\n    </section>\r\n  </Section>\r\n\r\n  <app-footer></app-footer>\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button>\r\n      <ion-icon name=\"share-social-outline\"></ion-icon>\r\n    </ion-fab-button>\r\n    <ion-fab-list side=\"end\">\r\n      <ion-fab-button><ion-icon name=\"logo-vimeo\"></ion-icon></ion-fab-button>\r\n    </ion-fab-list>\r\n\r\n    <ion-fab-list side=\"top\">\r\n      <ion-fab-button color=\"instagram\">\r\n        <a\r\n          class=\"full-width full-height social-icon-container\"\r\n          href=\"{{ instagram }}\"\r\n          target=\"_blank\"\r\n        >\r\n          <ion-icon\r\n            class=\"social-icon\"\r\n            color=\"lightest\"\r\n            name=\"logo-instagram\"\r\n          ></ion-icon></a\r\n      ></ion-fab-button>\r\n      <ion-fab-button color=\"instagram\"\r\n        ><a\r\n          class=\"full-width full-height social-icon-container\"\r\n          href=\"{{ twitch }}\"\r\n          target=\"_blank\"\r\n        >\r\n          <ion-icon\r\n            class=\"social-icon\"\r\n            color=\"lightest\"\r\n            name=\"logo-twitch\"\r\n          ></ion-icon></a\r\n      ></ion-fab-button>\r\n      <ion-fab-button color=\"discord\"\r\n        ><a\r\n          class=\"full-width full-height social-icon-container\"\r\n          href=\"{{ discord }}\"\r\n          target=\"_blank\"\r\n        >\r\n          <ion-icon\r\n            class=\"social-icon\"\r\n            color=\"lightest\"\r\n            name=\"logo-discord\"\r\n          ></ion-icon></a\r\n      ></ion-fab-button>\r\n      <ion-fab-button color=\"danger\"\r\n        ><a\r\n          class=\"full-width full-height social-icon-container\"\r\n          href=\"{{ youtube }}\"\r\n          target=\"_blank\"\r\n        >\r\n          <ion-icon\r\n            class=\"social-icon\"\r\n            color=\"lightest\"\r\n            name=\"logo-youtube\"\r\n          ></ion-icon></a\r\n      ></ion-fab-button>\r\n      <ion-fab-button color=\"danger\"\r\n        ><a\r\n          class=\"full-width full-height social-icon-container\"\r\n          href=\"{{ pinterest }}\"\r\n          target=\"_blank\"\r\n        >\r\n          <ion-icon\r\n            class=\"social-icon\"\r\n            color=\"lightest\"\r\n            name=\"logo-pinterest\"\r\n          ></ion-icon></a\r\n      ></ion-fab-button>\r\n      <ion-fab-button color=\"facebook\"\r\n        ><a\r\n          class=\"full-width full-height social-icon-container\"\r\n          href=\"{{ facebook }}\"\r\n          target=\"_blank\"\r\n        >\r\n          <ion-icon\r\n            class=\"social-icon\"\r\n            color=\"lightest\"\r\n            name=\"logo-facebook\"\r\n          ></ion-icon></a\r\n      ></ion-fab-button>\r\n      <ion-fab-button color=\"twitter\"\r\n        ><a\r\n          class=\"full-width full-height social-icon-container\"\r\n          href=\"{{ twiter }}\"\r\n          target=\"_blank\"\r\n        >\r\n          <ion-icon\r\n            class=\"social-icon\"\r\n            color=\"lightest\"\r\n            name=\"logo-twitter\"\r\n          ></ion-icon></a\r\n      ></ion-fab-button>\r\n      <ion-fab-button color=\"twitter\"\r\n        ><a\r\n          class=\"full-width full-height social-icon-container\"\r\n          href=\"{{ linkedin }}\"\r\n          target=\"_blank\"\r\n        >\r\n          <ion-icon\r\n            class=\"social-icon\"\r\n            color=\"lightest\"\r\n            name=\"logo-linkedin\"\r\n          ></ion-icon></a\r\n      ></ion-fab-button>\r\n      <ion-fab-button color=\"telegram\"\r\n        ><a\r\n          class=\"full-width full-height social-icon-container\"\r\n          href=\"{{ telegram }}\"\r\n          target=\"_blank\"\r\n        >\r\n          <ion-icon\r\n            class=\"social-icon\"\r\n            color=\"lightest\"\r\n            name=\"paper-plane-outline\"\r\n          ></ion-icon></a\r\n      ></ion-fab-button>\r\n      <ion-fab-button color=\"lightest\"\r\n        ><a\r\n          class=\"full-width full-height social-icon-container\"\r\n          href=\"{{ aparat }}\"\r\n          target=\"_blank\"\r\n        >\r\n          <ion-icon\r\n            class=\"social-icon\"\r\n            color=\"lightest\"\r\n            src=\"/assets/icon/logo-aparat.svg\"\r\n          ></ion-icon></a\r\n      ></ion-fab-button>\r\n    </ion-fab-list>\r\n  </ion-fab>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_view_pages_tuner-plus_spark_spark_module_ts.js.map