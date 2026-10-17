"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_view_pages_tuner-plus_tuner-plus_module_ts"],{

/***/ 20022:
/*!********************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/tuner-plus-routing.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TunerPlusRoutingModule": () => (/* binding */ TunerPlusRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var src_app_core_guard_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/core/guard/auth/auth.guard */ 91823);
/* harmony import */ var src_app_core_guard_buyer_buyer_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/guard/buyer/buyer.guard */ 42683);
/* harmony import */ var src_app_core_guard_admin_admin_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/guard/admin/admin.guard */ 72521);
/* harmony import */ var _tuner_plus_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tuner-plus.component */ 81146);

/* eslint-disable max-len */






const labToolRoutes = [
    {
        path: 'SparkPlugGap',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_view_pages_tuner-plus_spark-plug-gap_spark-plug-gap_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./spark-plug-gap/spark-plug-gap.module */ 64635)).then(m => m.SparkPlugGapModule),
        canActivate: [src_app_core_guard_buyer_buyer_guard__WEBPACK_IMPORTED_MODULE_1__.BuyerGuard, src_app_core_guard_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        data: {
            title: 'اول آموز - محاسبه گپ شمع | بازوی اول آموز',
            description: 'تخمین گپ اولیه شمع بر اساس تراکم، بوست و مشخصات سیستم جرقه',
            ogUrl: 'http://localhost:4300/TunerPlus/SparkPlugGap'
        }
    },
    {
        path: 'datalog',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_pages_tuner-plus_vehicle-profile_vehicle-profile_store_ts"), __webpack_require__.e("src_app_view_pages_tuner-plus_datalog_datalog_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./datalog/datalog.module */ 98618)).then(m => m.DatalogModule),
        canActivate: [src_app_core_guard_buyer_buyer_guard__WEBPACK_IMPORTED_MODULE_1__.BuyerGuard, src_app_core_guard_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        data: { title: 'اول آموز - تحلیل‌گر دیتالاگ ECU | بازوی اول آموز' }
    },
    {
        path: 'fuel-blend',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_pages_tuner-plus_vehicle-profile_vehicle-profile_store_ts"), __webpack_require__.e("src_app_view_pages_tuner-plus_fuel-blend_fuel-blend_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./fuel-blend/fuel-blend.module */ 9303)).then(m => m.FuelBlendModule),
        canActivate: [src_app_core_guard_buyer_buyer_guard__WEBPACK_IMPORTED_MODULE_1__.BuyerGuard, src_app_core_guard_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        data: { title: 'اول آموز - ترکیب سوخت و اکتان | بازوی اول آموز' }
    },
    {
        path: 'intercooler',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_pages_tuner-plus_vehicle-profile_vehicle-profile_store_ts"), __webpack_require__.e("src_app_view_pages_tuner-plus_intercooler_intercooler_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./intercooler/intercooler.module */ 61228)).then(m => m.IntercoolerModule),
        canActivate: [src_app_core_guard_buyer_buyer_guard__WEBPACK_IMPORTED_MODULE_1__.BuyerGuard, src_app_core_guard_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        data: { title: 'اول آموز - سایزینگ اینترکولر | بازوی اول آموز' }
    },
    {
        path: 'boost-control',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_pages_tuner-plus_vehicle-profile_vehicle-profile_store_ts"), __webpack_require__.e("src_app_view_pages_tuner-plus_boost-control_boost-control_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./boost-control/boost-control.module */ 11556)).then(m => m.BoostControlModule),
        canActivate: [src_app_core_guard_buyer_buyer_guard__WEBPACK_IMPORTED_MODULE_1__.BuyerGuard, src_app_core_guard_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        data: { title: 'اول آموز - مهندسی Boost Control | بازوی اول آموز' }
    },
    {
        path: 'wheel-final-drive',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_pages_tuner-plus_vehicle-profile_vehicle-profile_store_ts"), __webpack_require__.e("src_app_view_pages_tuner-plus_wheel-final-drive_wheel-final-drive_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./wheel-final-drive/wheel-final-drive.module */ 78407)).then(m => m.WheelFinalDriveModule),
        canActivate: [src_app_core_guard_buyer_buyer_guard__WEBPACK_IMPORTED_MODULE_1__.BuyerGuard, src_app_core_guard_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        data: { title: 'اول آموز - رینگ، لاستیک و Final Drive | بازوی اول آموز' }
    },
    {
        path: 'fuel-system',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_pages_tuner-plus_vehicle-profile_vehicle-profile_store_ts"), __webpack_require__.e("src_app_view_pages_tuner-plus_fuel-system_fuel-system_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./fuel-system/fuel-system.module */ 51541)).then(m => m.FuelSystemModule),
        canActivate: [src_app_core_guard_buyer_buyer_guard__WEBPACK_IMPORTED_MODULE_1__.BuyerGuard, src_app_core_guard_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        data: { title: 'اول آموز - ظرفیت کامل سیستم سوخت | بازوی اول آموز' }
    },
    {
        path: 'egt-backpressure',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_pages_tuner-plus_vehicle-profile_vehicle-profile_store_ts"), __webpack_require__.e("src_app_view_pages_tuner-plus_egt-backpressure_egt-backpressure_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./egt-backpressure/egt-backpressure.module */ 24769)).then(m => m.EgtBackpressureModule),
        canActivate: [src_app_core_guard_buyer_buyer_guard__WEBPACK_IMPORTED_MODULE_1__.BuyerGuard, src_app_core_guard_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        data: { title: 'اول آموز - EGT و Backpressure | بازوی اول آموز' }
    },
    {
        path: 'cam-selector',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_pages_tuner-plus_vehicle-profile_vehicle-profile_store_ts"), __webpack_require__.e("src_app_view_pages_tuner-plus_cam-selector_cam-selector_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./cam-selector/cam-selector.module */ 33827)).then(m => m.CamSelectorModule),
        canActivate: [src_app_core_guard_buyer_buyer_guard__WEBPACK_IMPORTED_MODULE_1__.BuyerGuard, src_app_core_guard_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        data: { title: 'اول آموز - راهنمای انتخاب میل‌سوپاپ | بازوی اول آموز' }
    },
    {
        path: 'launch-traction',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_pages_tuner-plus_vehicle-profile_vehicle-profile_store_ts"), __webpack_require__.e("src_app_view_pages_tuner-plus_launch-traction_launch-traction_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./launch-traction/launch-traction.module */ 99459)).then(m => m.LaunchTractionModule),
        canActivate: [src_app_core_guard_buyer_buyer_guard__WEBPACK_IMPORTED_MODULE_1__.BuyerGuard, src_app_core_guard_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        data: { title: 'اول آموز - Launch و Traction | بازوی اول آموز' }
    },
    {
        path: 'vehicle-profile',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_pages_tuner-plus_vehicle-profile_vehicle-profile_store_ts"), __webpack_require__.e("src_app_view_pages_tuner-plus_vehicle-profile_vehicle-profile_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./vehicle-profile/vehicle-profile.module */ 84086)).then(m => m.VehicleProfileModule),
        canActivate: [src_app_core_guard_buyer_buyer_guard__WEBPACK_IMPORTED_MODULE_1__.BuyerGuard, src_app_core_guard_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        data: { title: 'اول آموز - پروفایل خودرو و پروژه | بازوی اول آموز' }
    },
    // ─── ابزارهای آنلاین کلاس اول ابتدایی (بازوی اول آموز) ───
    {
        path: 'alphabet',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_view_pages_tuner-plus_alphabet_alphabet_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./alphabet/alphabet.module */ 32086)).then(m => m.AlphabetModule),
        data: {
            title: 'اول آموز - آموزش الفبای فارسی کلاس اول | بازوی اول آموز',
            description: 'آموزش تعاملی ۳۲ نشانه الفبای فارسی، شکل‌ها و صداها همراه با تمرین کلاسی اول دبستان'
        }
    },
    {
        path: 'math-practice',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_view_pages_tuner-plus_math-practice_math-practice_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./math-practice/math-practice.module */ 78904)).then(m => m.MathPracticeModule),
        data: {
            title: 'اول آموز - تمرین جمع و تفریق اول دبستان | بازوی اول آموز',
            description: 'تمرین تعاملی جمع و تفریق تا ۱۰ و ۲۰ با محور اعداد و دست‌ورزی عینی ریاضی پایه اول'
        }
    },
    {
        path: 'clock-learning',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_view_pages_tuner-plus_clock-learning_clock-learning_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./clock-learning/clock-learning.module */ 39944)).then(m => m.ClockLearningModule),
        data: {
            title: 'اول آموز - آموزش ساعت کلاس اول | بازوی اول آموز',
            description: 'ساعت‌آموز تعاملی، عقربه ساعت‌شمار و دقیقه‌شمار، ساعات تمام و نیم با کوئیز سنجش'
        }
    },
    {
        path: 'random-picker',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_view_pages_tuner-plus_random-picker_random-picker_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./random-picker/random-picker.module */ 20405)).then(m => m.RandomPickerModule),
        data: {
            title: 'اول آموز - چرخ شانس و قرعه‌کشی دانش‌آموز | بازوی اول آموز',
            description: 'انتخاب تصادفی و عادلانه دانش‌آموزان برای روخوانی، پرسش کلاسی و بازی‌های گروهی'
        }
    },
    {
        path: 'class-timer',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_view_pages_tuner-plus_class-timer_class-timer_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./class-timer/class-timer.module */ 8534)).then(m => m.ClassTimerModule),
        data: {
            title: 'اول آموز - تایمر کلاسی و آزمون | بازوی اول آموز',
            description: 'زمان‌سنج معکوس کلاسی با زنگ هشدار برای کاربرگ، تکالیف و فعالیت‌های زمان‌دار'
        }
    },
    {
        path: 'syllable-breaker',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_view_pages_tuner-plus_syllable-breaker_syllable-breaker_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./syllable-breaker/syllable-breaker.module */ 15225)).then(m => m.SyllableBreakerModule),
        data: {
            title: 'اول آموز - هجاشکن و بخش و صداکشی فارسی | بازوی اول آموز',
            description: 'تقسیم کلمات کتاب فارسی پایه اول به بخش‌ها، جدول صداکشی و مسابقه شمارش هجاها'
        }
    },
    {
        path: 'dictation',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_view_pages_tuner-plus_dictation_dictation_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./dictation/dictation.module */ 26328)).then(m => m.DictationModule),
        data: {
            title: 'اول آموز - دیکته‌ساز هوشمند اول دبستان | بازوی اول آموز',
            description: 'دیکته‌گوی صوتی هوشمند بر اساس دروس کتاب فارسی اول ابتدایی'
        }
    },
    {
        path: 'shapes',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_view_pages_tuner-plus_shapes_shapes_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./shapes/shapes.module */ 8637)).then(m => m.ShapesModule),
        data: {
            title: 'اول آموز - آموزش اشکال هندسی اول دبستان | بازوی اول آموز',
            description: 'آموزش تعاملی اشکال هندسی، لبه‌ها و گوشه‌ها با معمای تصویری'
        }
    },
    {
        path: 'grade-calculator',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_view_pages_tuner-plus_grade-calculator_grade-calculator_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./grade-calculator/grade-calculator.module */ 67418)).then(m => m.GradeCalculatorModule),
        data: {
            title: 'اول آموز - کارنامه و ارزشیابی توصیفی | بازوی اول آموز',
            description: 'ثبت و محاسبه رتبه‌های ارزشیابی کیفی-توصیفی و چاپ کارنامه کلاسی'
        }
    },
    {
        path: 'memory-game',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_view_pages_tuner-plus_memory-game_memory-game_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./memory-game/memory-game.module */ 61955)).then(m => m.MemoryGameModule),
        data: {
            title: 'اول آموز - بازی حافظه تصویری | بازوی اول آموز',
            description: 'بازی آموزشی تقویت تمرکز و حافظه با پیدا کردن جفت کارت‌های یکسان'
        }
    },
];
const routes = [
    {
        path: '',
        component: _tuner_plus_component__WEBPACK_IMPORTED_MODULE_3__.TunerPlusComponent
    },
    {
        path: 'Ve',
        redirectTo: 'VE'
    },
    {
        path: 've',
        redirectTo: 'VE'
    },
    {
        path: 'vE',
        redirectTo: 'VE'
    },
    {
        path: 'VE',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_view_pages_tuner-plus_ve_ve_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../view/pages/tuner-plus/ve/ve.module */ 79526)).then(m => m.VEModule),
        canActivate: [src_app_core_guard_buyer_buyer_guard__WEBPACK_IMPORTED_MODULE_1__.BuyerGuard, src_app_core_guard_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        data: {
            title: 'اول آموز - محاسبه ی جدول راندمان حجمی (VE) | بازوی اول آموز',
            description: 'اول آموز | محاسبه ی جدول راندمان حجمی (VE) | بازوی اول آموز | TunerPlus | آموزش تیونینگ و تقویت موتور, نصب توربوشارژر و سوپرشارژر',
            ogUrl: 'http://localhost:4300/TunerPlus/VE'
        }
    },
    {
        path: 'Afr',
        redirectTo: 'AFR'
    },
    {
        path: 'afr',
        redirectTo: 'AFR'
    },
    {
        path: 'afR',
        redirectTo: 'AFR'
    },
    {
        path: 'aFR',
        redirectTo: 'AFR'
    },
    {
        path: 'AFR',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_view_pages_tuner-plus_afr_afr_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../view/pages/tuner-plus/afr/afr.module */ 7927)).then(m => m.AFRModule),
        canActivate: [src_app_core_guard_buyer_buyer_guard__WEBPACK_IMPORTED_MODULE_1__.BuyerGuard, src_app_core_guard_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        data: {
            title: 'اول آموز - محاسبه ی جدول نسبت سوخت به هوا (AFR) | بازوی اول آموز',
            description: 'اول آموز | محاسبه ی جدول نسبت سوخت به هوا (AFR) | بازوی اول آموز | TunerPlus | آموزش تیونینگ و تقویت موتور, نصب توربوشارژر و سوپرشارژر',
            ogUrl: 'http://localhost:4300/TunerPlus/AFR'
        }
    },
    {
        path: 'spark',
        redirectTo: 'Spark'
    },
    {
        path: 'Spark',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_view_pages_tuner-plus_spark_spark_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../view/pages/tuner-plus/spark/spark.module */ 66969)).then(m => m.SparkModule),
        canActivate: [src_app_core_guard_buyer_buyer_guard__WEBPACK_IMPORTED_MODULE_1__.BuyerGuard, src_app_core_guard_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        data: {
            title: 'اول آموز - محاسبه ی جدول زاویه جرقه (Spark) | بازوی اول آموز',
            description: 'اول آموز | محاسبه ی جدول زاویه جرقه (Spark) | بازوی اول آموز | TunerPlus | آموزش تیونینگ و تقویت موتور, نصب توربوشارژر و سوپرشارژر',
            ogUrl: 'http://localhost:4300/TunerPlus/Spark'
        }
    },
    {
        path: 'Gearratio',
        redirectTo: 'GearRatio'
    },
    {
        path: 'gearratio',
        redirectTo: 'GearRatio'
    },
    {
        path: 'gearRatio',
        redirectTo: 'GearRatio'
    },
    {
        path: 'GearRatio',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_view_pages_tuner-plus_gear-ratio_gear-ratio_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../../view/pages/tuner-plus/gear-ratio/gear-ratio.module */ 50586)).then(m => m.GearRatioModule),
        canActivate: [src_app_core_guard_buyer_buyer_guard__WEBPACK_IMPORTED_MODULE_1__.BuyerGuard, src_app_core_guard_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        data: {
            title: 'اول آموز - محاسبه ی نسبت دنده (Gear Ratio) | بازوی اول آموز',
            description: 'اول آموز | محاسبه ی محاسبه ی نسبت دنده (Gear Ratio) | بازوی اول آموز | TunerPlus | آموزش تیونینگ و تقویت موتور, نصب توربوشارژر و سوپرشارژر',
            ogUrl: 'http://localhost:4300/TunerPlus/GearRatio'
        }
    },
    {
        path: 'stoichiometry',
        redirectTo: 'Stoichiometry'
    },
    {
        path: 'Stoichiometry',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_view_pages_tuner-plus_stoichiometry_stoichiometry_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../../view/pages/tuner-plus/stoichiometry/stoichiometry.module */ 20722)).then(m => m.StoichiometryModule),
        canActivate: [src_app_core_guard_buyer_buyer_guard__WEBPACK_IMPORTED_MODULE_1__.BuyerGuard, src_app_core_guard_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        data: {
            title: 'اول آموز - محاسبه ی نسبت استوکیومتری (Stoich) | بازوی اول آموز',
            description: 'اول آموز | محاسبه ی محاسبه ی نسبت استوکیومتری (Stoich) | بازوی اول آموز | TunerPlus | آموزش تیونینگ و تقویت موتور, نصب توربوشارژر و سوپرشارژر',
            ogUrl: 'http://localhost:4300/TunerPlus/Stoichiometry'
        }
    },
    {
        path: 'dwell',
        redirectTo: 'Dwell'
    },
    {
        path: 'Dwell',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_view_pages_tuner-plus_dwell_dwell_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../../view/pages/tuner-plus/dwell/dwell.module */ 34163)).then(m => m.DwellModule),
        canActivate: [src_app_core_guard_buyer_buyer_guard__WEBPACK_IMPORTED_MODULE_1__.BuyerGuard, src_app_core_guard_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        data: {
            title: 'اول آموز - محاسبه ی زمان شارژ کویل (Dwell) | بازوی اول آموز',
            description: 'اول آموز | محاسبه ی زمان شارژ کویل (Dwell) | بازوی اول آموز | TunerPlus | آموزش تیونینگ و تقویت موتور, نصب توربوشارژر و سوپرشارژر',
            ogUrl: 'http://localhost:4300/TunerPlus/Dwell'
        }
    },
    {
        path: 'Injectorsrating',
        redirectTo: 'InjectorsRating'
    },
    {
        path: 'injectorsrating',
        redirectTo: 'InjectorsRating'
    },
    {
        path: 'injectorsRating',
        redirectTo: 'InjectorsRating'
    },
    {
        path: 'InjectorsRating',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_view_pages_tuner-plus_injectors-rating_injectors-rating_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../../view/pages/tuner-plus/injectors-rating/injectors-rating.module */ 26010)).then(m => m.InjectorsRatingModule),
        canActivate: [src_app_core_guard_buyer_buyer_guard__WEBPACK_IMPORTED_MODULE_1__.BuyerGuard, src_app_core_guard_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        data: {
            title: 'اول آموز - محاسبه ی حجم انژکتور انژکتور (Injector Rating) | بازوی اول آموز',
            description: 'اول آموز | محاسبه ی حجم انژکتور انژکتور (Injector Rating) | بازوی اول آموز | TunerPlus | آموزش تیونینگ و تقویت موتور, نصب توربوشارژر و سوپرشارژر',
            ogUrl: 'http://localhost:4300/TunerPlus/InjectorsRating'
        }
    },
    {
        path: 'throttle',
        redirectTo: 'Throttle'
    },
    {
        path: 'Throttle',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_view_pages_tuner-plus_throttle_throttle_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../../view/pages/tuner-plus/throttle/throttle.module */ 35174)).then(m => m.ThrottleModule),
        canActivate: [src_app_core_guard_buyer_buyer_guard__WEBPACK_IMPORTED_MODULE_1__.BuyerGuard, src_app_core_guard_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        data: {
            title: 'اول آموز - محاسبه ی دریچه گاز (Throttle) | بازوی اول آموز',
            description: 'اول آموز | محاسبه ی دریچه گاز (Throttle) | بازوی اول آموز | TunerPlus | آموزش تیونینگ و تقویت موتور, نصب توربوشارژر و سوپرشارژر',
            ogUrl: 'http://localhost:4300/TunerPlus/Throttle'
        }
    },
    {
        path: 'Hp',
        redirectTo: 'HP'
    },
    {
        path: 'hp',
        redirectTo: 'HP'
    },
    {
        path: 'hP',
        redirectTo: 'HP'
    },
    {
        path: 'HP',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_view_pages_tuner-plus_hp_hp_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../../view/pages/tuner-plus/hp/hp.module */ 39937)).then(m => m.HPModule),
        canActivate: [src_app_core_guard_buyer_buyer_guard__WEBPACK_IMPORTED_MODULE_1__.BuyerGuard, src_app_core_guard_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        data: {
            title: 'اول آموز - تبدیل توان به گشتاور (Converter) | بازوی اول آموز',
            description: 'اول آموز | تبدیل توان به گشتاور (Converter) | بازوی اول آموز | TunerPlus | آموزش تیونینگ و تقویت موتور, نصب توربوشارژر و سوپرشارژر',
            ogUrl: 'http://localhost:4300/TunerPlus/HP'
        }
    },
    {
        path: 'runner',
        redirectTo: 'Runner'
    },
    {
        path: 'Runner',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_view_pages_tuner-plus_runner_runner_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../../view/pages/tuner-plus/runner/runner.module */ 13083)).then(m => m.RunnerModule),
        canActivate: [src_app_core_guard_buyer_buyer_guard__WEBPACK_IMPORTED_MODULE_1__.BuyerGuard, src_app_core_guard_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        data: {
            title: 'اول آموز - محاسبه قطر و طول رانر منیفولد | بازوی اول آموز',
            description: 'اول آموز | محاسبه قطر و طول رانر منیفولد | بازوی اول آموز | TunerPlus | آموزش تیونینگ و تقویت موتور, نصب توربوشارژر و سوپرشارژر',
            ogUrl: 'http://localhost:4300/TunerPlus/Runner'
        }
    },
    {
        path: 'turbo',
        redirectTo: 'Turbo'
    },
    {
        path: 'Turbo',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_view_pages_tuner-plus_turbo_turbo_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../view/pages/tuner-plus/turbo/turbo.module */ 63739)).then(m => m.TurboModule),
        canActivate: [src_app_core_guard_buyer_buyer_guard__WEBPACK_IMPORTED_MODULE_1__.BuyerGuard, src_app_core_guard_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        data: {
            title: 'اول آموز - محاسبه سایز توربو | بازوی اول آموز',
            description: 'اول آموز | محاسبه سایز توربو | بازوی اول آموز | TunerPlus | آموزش تیونینگ و تقویت موتور, نصب توربوشارژر و سوپرشارژر',
            ogUrl: 'http://localhost:4300/TunerPlus/Turbo'
        }
    },
    {
        path: 'Tu5clearance',
        redirectTo: 'Tu5Clearance'
    },
    {
        path: 'tu5clearance',
        redirectTo: 'Tu5Clearance'
    },
    {
        path: 'tu5Clearance',
        redirectTo: 'Tu5Clearance'
    },
    {
        path: 'Tu5Clearance',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_view_pages_tuner-plus_tu5-clearance_tu5-clearance_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../../view/pages/tuner-plus/tu5-clearance/tu5-clearance.module */ 10722)).then(m => m.Tu5ClearanceModule),
        canActivate: [src_app_core_guard_buyer_buyer_guard__WEBPACK_IMPORTED_MODULE_1__.BuyerGuard, src_app_core_guard_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        data: {
            title: 'اول آموز - اندازه و محاسبات تیو5 (Tu5jp4) | بازوی اول آموز',
            description: 'اول آموز | اندازه و محاسبات تیو5 (Tu5jp4) | بازوی اول آموز | TunerPlus | آموزش تیونینگ و تقویت موتور, نصب توربوشارژر و سوپرشارژر',
            ogUrl: 'http://localhost:4300/TunerPlus/Tu5Clearance'
        }
    },
    {
        path: 'WHPTOHP',
        redirectTo: 'WhpToHp'
    },
    {
        path: 'WhptoHp',
        redirectTo: 'WhpToHp'
    },
    {
        path: 'WhpTohp',
        redirectTo: 'WhpToHp'
    },
    {
        path: 'Whptohp',
        redirectTo: 'WhpToHp'
    },
    {
        path: 'whptohp',
        redirectTo: 'WhpToHp'
    },
    {
        path: 'whptoHp',
        redirectTo: 'WhpToHp'
    },
    {
        path: 'whpToHp',
        redirectTo: 'WhpToHp'
    },
    {
        path: 'WhpToHp',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_view_pages_tuner-plus_whp-to-hp_whp-to-hp_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../../view/pages/tuner-plus/whp-to-hp/whp-to-hp.module */ 97331)).then(m => m.WhpToHpModule),
        canActivate: [src_app_core_guard_buyer_buyer_guard__WEBPACK_IMPORTED_MODULE_1__.BuyerGuard, src_app_core_guard_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        data: {
            title: 'اول آموز - تبدیل توان سر چرخ به اسب بخار سره میل لنگ  (Whp to Hp) | بازوی اول آموز',
            description: 'اول آموز | تبدیل توان سر چرخ به اسب بخار سره میل لنگ  (Whp to Hp) | بازوی اول آموز | TunerPlus | آموزش تیونینگ و تقویت موتور, نصب توربوشارژر و سوپرشارژر',
            ogUrl: 'http://localhost:4300/TunerPlus/WhpToHp'
        }
    },
    {
        path: 'lambda',
        redirectTo: 'Lambda'
    },
    {
        path: 'Lambda',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_view_pages_tuner-plus_lambda_lambda_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../view/pages/tuner-plus/lambda/lambda.module */ 58752)).then(m => m.LambdaModule),
        canActivate: [src_app_core_guard_buyer_buyer_guard__WEBPACK_IMPORTED_MODULE_1__.BuyerGuard, src_app_core_guard_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        data: {
            title: 'اول آموز - محاسبه لامبدا (Lambda) - نسبت سوخت به به هوا (AFR) | بازوی اول آموز',
            description: 'اول آموز | محاسبه لامبدا (Lambda) - نسبت سوخت به به هوا (AFR) | بازوی اول آموز | TunerPlus | آموزش تیونینگ و تقویت موتور, نصب توربوشارژر و سوپرشارژر',
            ogUrl: 'http://localhost:4300/TunerPlus/Lambda'
        }
    },
    {
        path: 'Requiredfuel',
        redirectTo: 'RequiredFuel'
    },
    {
        path: 'requiredfuel',
        redirectTo: 'RequiredFuel'
    },
    {
        path: 'requiredFuel',
        redirectTo: 'RequiredFuel'
    },
    {
        path: 'RequiredFuel',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_view_pages_tuner-plus_required-fuel_required-fuel_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../../../view/pages/tuner-plus/required-fuel/required-fuel.module */ 85428)).then(m => m.RequiredFuelModule),
        canActivate: [src_app_core_guard_buyer_buyer_guard__WEBPACK_IMPORTED_MODULE_1__.BuyerGuard, src_app_core_guard_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        data: {
            title: 'اول آموز - محاسبه RequiredFuel - بازوی اول آموز',
            description: 'اول آموز | محاسبه RequiredFuel - بازوی اول آموز | TunerPlus | آموزش تیونینگ و تقویت موتور, نصب توربوشارژر و سوپرشارژر',
            ogUrl: 'http://localhost:4300/TunerPlus/RequiredFuel'
        }
    },
    {
        path: 'INC',
        redirectTo: 'Inc'
    },
    {
        path: 'inc',
        redirectTo: 'Inc'
    },
    {
        path: 'Inc',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_view_pages_tuner-plus_inc_inc_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../../view/pages/tuner-plus/inc/inc.module */ 54967)).then(m => m.IncPageModule),
        canActivate: [src_app_core_guard_buyer_buyer_guard__WEBPACK_IMPORTED_MODULE_1__.BuyerGuard, src_app_core_guard_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        data: {
            title: 'اول آموز - محاسبه Inc - بازوی اول آموز',
            description: 'اول آموز | محاسبه Inc - بازوی اول آموز | TunerPlus | آموزش تیونینگ و تقویت موتور, نصب توربوشارژر و سوپرشارژر',
            ogUrl: 'http://localhost:4300/TunerPlus/Inc'
        }
    },
    {
        path: 'headers',
        redirectTo: 'Headers'
    },
    {
        path: 'Headers',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_view_pages_tuner-plus_headers_headers_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./headers/headers.module */ 75417)).then(m => m.HeadersPageModule),
        canActivate: [src_app_core_guard_buyer_buyer_guard__WEBPACK_IMPORTED_MODULE_1__.BuyerGuard, src_app_core_guard_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        data: {
            title: 'اول آموز - محاسبه سایز توربو | بازوی اول آموز',
            description: 'اول آموز | محاسبه سایز توربو | بازوی اول آموز | TunerPlus | آموزش تیونینگ و تقویت موتور, نصب توربوشارژر و سوپرشارژر',
            ogUrl: 'http://localhost:4300/TunerPlus/Turbo2'
        }
    },
    {
        path: 'Intakeflow',
        redirectTo: 'IntakeFlow'
    },
    {
        path: 'Intakeflow',
        redirectTo: 'IntakeFlow'
    },
    {
        path: 'intakeFlow',
        redirectTo: 'IntakeFlow'
    },
    {
        path: 'IntakeFlow',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_view_pages_tuner-plus_cfm_cfm_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./cfm/cfm.module */ 58434)).then(m => m.CFMPageModule),
        canActivate: [src_app_core_guard_buyer_buyer_guard__WEBPACK_IMPORTED_MODULE_1__.BuyerGuard, src_app_core_guard_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        data: {
            title: 'اول آموز - محاسبه جریان هوا (IntakeFlow) - بازوی اول آموز',
            description: 'اول آموز | محاسبه جریان هوا موتور (IntakeFlow) - بازوی اول آموز | TunerPlus | آموزش تیونینگ و تقویت موتور, نصب توربوشارژر و سوپرشارژر',
            ogUrl: 'http://localhost:4300/TunerPlus/IntakeFlow'
        }
    },
    {
        path: 'Camtiming',
        redirectTo: 'CamTiming'
    },
    {
        path: 'camtiming',
        redirectTo: 'CamTiming'
    },
    {
        path: 'camtiming',
        redirectTo: 'CamTiming'
    },
    {
        path: 'camTiming',
        redirectTo: 'CamTiming'
    },
    {
        path: 'CamTiming',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_view_pages_tuner-plus_cam-timing_cam-timing_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./cam-timing/cam-timing.module */ 97864)).then(m => m.CamTimingPageModule),
        canActivate: [src_app_core_guard_buyer_buyer_guard__WEBPACK_IMPORTED_MODULE_1__.BuyerGuard, src_app_core_guard_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        data: {
            title: 'اول آموز - محاسبه تایمینگ میل سوپاپ (CamTiming) - بازوی اول آموز',
            description: 'اول آموز | محاسبه تایمینگ میل سوپاپ (CamTiming) - بازوی اول آموز | TunerPlus | آموزش تیونینگ و تقویت موتور, نصب توربوشارژر و سوپرشارژر',
            ogUrl: 'http://localhost:4300/TunerPlus/CamTiming'
        }
    },
    {
        path: 'Customturbo',
        redirectTo: 'CustomTurbo'
    },
    {
        path: 'customturbo',
        redirectTo: 'CustomTurbo'
    },
    {
        path: 'customTurbo',
        redirectTo: 'CustomTurbo'
    },
    {
        path: 'CustomTurbo',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_view_pages_tuner-plus_turbo2_turbo2_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./turbo2/turbo2.module */ 74673)).then(m => m.Turbo2PageModule),
        canActivate: [src_app_core_guard_buyer_buyer_guard__WEBPACK_IMPORTED_MODULE_1__.BuyerGuard, src_app_core_guard_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        data: {
            title: 'اول آموز - محاسبه تایمینگ میل سوپاپ (CamTiming) - بازوی اول آموز',
            description: 'اول آموز | محاسبه تایمینگ میل سوپاپ (CamTiming) - بازوی اول آموز | TunerPlus | آموزش تیونینگ و تقویت موتور, نصب توربوشارژر و سوپرشارژر',
            ogUrl: 'http://localhost:4300/TunerPlus/CustomTurbo'
        }
    },
    {
        path: 'DaewooEspero',
        redirectTo: 'DaewooEspero'
    },
    {
        path: 'DaewooEspero',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_view_pages_tuner-plus_daewoo-espero_daewoo-espero_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./daewoo-espero/daewoo-espero.module */ 62299)).then(m => m.DaewooEsperoPageModule),
        canActivate: [src_app_core_guard_buyer_buyer_guard__WEBPACK_IMPORTED_MODULE_1__.BuyerGuard, src_app_core_guard_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        data: {
            title: 'اول آموز - محاسبات دوو اسپرو (DaewooEspero) - بازوی اول آموز',
            description: 'اول آموز | محاسبات دوو اسپرو (DaewooEspero) - بازوی اول آموز | TunerPlus | آموزش تیونینگ و تقویت موتور, نصب توربوشارژر و سوپرشارژر',
            ogUrl: 'http://localhost:4300/TunerPlus/DaewooEspero'
        }
    },
    {
        path: 'Atmosphericpressure',
        redirectTo: 'AtmosphericPressure'
    },
    {
        path: 'atmosphericpressure',
        redirectTo: 'AtmosphericPressure'
    },
    {
        path: 'atmosphericPressure',
        redirectTo: 'AtmosphericPressure'
    },
    {
        path: 'AtmosphericPressure',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_view_pages_tuner-plus_atmospheric-pressure_atmospheric-pressure_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./atmospheric-pressure/atmospheric-pressure.module */ 47753)).then(m => m.AtmosphericPressurePageModule),
        canActivate: [src_app_core_guard_buyer_buyer_guard__WEBPACK_IMPORTED_MODULE_1__.BuyerGuard, src_app_core_guard_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        data: {
            title: 'اول آموز - محاسبه فشار هوای اتمسفر (Atmospheric Pressure) - بازوی اول آموز',
            description: 'اول آموز | محاسبه فشار هوای اتمسفر (Atmospheric Pressure) - بازوی اول آموز | TunerPlus | آموزش تیونینگ و تقویت موتور, نصب توربوشارژر و سوپرشارژر',
            ogUrl: 'http://localhost:4300/TunerPlus/AtmosphericPressure'
        }
    },
    {
        path: 'speedometer',
        redirectTo: 'Speedometer'
    },
    {
        path: 'Speedometer',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_view_pages_tuner-plus_speedometer_speedometer_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./speedometer/speedometer.module */ 75733)).then(m => m.SpeedometerPageModule),
        canActivate: [src_app_core_guard_buyer_buyer_guard__WEBPACK_IMPORTED_MODULE_1__.BuyerGuard, src_app_core_guard_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        data: {
            title: 'اول آموز - سرعت سنج (Speedometer) - بازوی اول آموز',
            description: 'اول آموز | سرعت سنج (Speedometer) - بازوی اول آموز | TunerPlus | آموزش تیونینگ و تقویت موتور, نصب توربوشارژر و سوپرشارژر',
            ogUrl: 'http://localhost:4300/TunerPlus/Speedometer'
        }
    },
    {
        path: 'gyroscope',
        redirectTo: 'Gyroscope'
    },
    {
        path: 'Gyroscope',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_view_pages_tuner-plus_gyroscope_gyroscope_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./gyroscope/gyroscope.module */ 11658)).then(m => m.GyroscopePageModule),
        canActivate: [src_app_core_guard_buyer_buyer_guard__WEBPACK_IMPORTED_MODULE_1__.BuyerGuard, src_app_core_guard_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        data: {
            title: 'اول آموز - ژیروسکوپ (Gyroscope) - بازوی اول آموز',
            description: 'اول آموز | ژیروسکوپ (Gyroscope) - بازوی اول آموز | TunerPlus | آموزش تیونینگ و تقویت موتور, نصب توربوشارژر و سوپرشارژر',
            ogUrl: 'http://localhost:4300/TunerPlus/Gyroscope'
        }
    },
    {
        path: 'rodratio',
        redirectTo: 'RodRatio'
    },
    {
        path: 'Rodratio',
        redirectTo: 'RodRatio'
    },
    {
        path: 'rodRatio',
        redirectTo: 'RodRatio'
    },
    {
        path: 'RodRatio',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_view_pages_tuner-plus_rod-ratio_rod-ratio_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./rod-ratio/rod-ratio.module */ 13783)).then(m => m.RodRatioPageModule),
        canActivate: [src_app_core_guard_buyer_buyer_guard__WEBPACK_IMPORTED_MODULE_1__.BuyerGuard, src_app_core_guard_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        data: {
            title: 'اول آموز - ضریب شاتون (RodRatio) - بازوی اول آموز',
            description: 'اول آموز | ضریب شاتون (RodRatio) - بازوی اول آموز | TunerPlus | آموزش تیونینگ و تقویت موتور, نصب توربوشارژر و سوپرشارژر',
            ogUrl: 'http://localhost:4300/TunerPlus/RodRatio'
        }
    },
    {
        path: 'maxdwell',
        redirectTo: 'MaxDwell'
    },
    {
        path: 'Maxdwell',
        redirectTo: 'MaxDwell'
    },
    {
        path: 'maxDwell',
        redirectTo: 'MaxDwell'
    },
    {
        path: 'MaxDwell',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_view_pages_tuner-plus_max-dwell_max-dwell_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./max-dwell/max-dwell.module */ 46893)).then(m => m.MaxDwellModule),
        canActivate: [src_app_core_guard_buyer_buyer_guard__WEBPACK_IMPORTED_MODULE_1__.BuyerGuard, src_app_core_guard_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        data: {
            title: 'اول آموز - محاسبه محدودیت شارژ کویل (MAX Dwell) - بازوی اول آموز',
            description: 'اول آموز | محاسبه محدودیت شارژ کویل (MAX Dwell) - بازوی اول آموز | TunerPlus | آموزش تیونینگ و تقویت موتور, نصب توربوشارژر و سوپرشارژر',
            ogUrl: 'http://localhost:4300/TunerPlus/MaxDwell'
        }
    },
    {
        path: 'Valvespringrate',
        redirectTo: 'ValveSpringRate'
    },
    {
        path: 'valvespringrate',
        redirectTo: 'ValveSpringRate'
    },
    {
        path: 'valvespringRate',
        redirectTo: 'ValveSpringRate'
    },
    {
        path: 'valveSpringRate',
        redirectTo: 'ValveSpringRate'
    },
    {
        path: 'ValveSpringRate',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_view_pages_tuner-plus_valve-spring-rate_valve-spring-rate_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./valve-spring-rate/valve-spring-rate.module */ 73581)).then(m => m.ValveSpringRatePageModule),
        canActivate: [src_app_core_guard_buyer_buyer_guard__WEBPACK_IMPORTED_MODULE_1__.BuyerGuard, src_app_core_guard_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        data: {
            title: 'اول آموز - نرخ فنر سوپاپ (ValveSpringRate) - بازوی اول آموز',
            description: 'اول آموز | نرخ فنر سوپاپ (ValveSpringRate) - بازوی اول آموز | TunerPlus | آموزش تیونینگ و تقویت موتور, نصب توربوشارژر و سوپرشارژر',
            ogUrl: 'http://localhost:4300/TunerPlus/ValveSpringRate'
        }
    },
    {
        path: 'Injectorresistor',
        redirectTo: 'InjectorResistor'
    },
    {
        path: 'injectorresistor',
        redirectTo: 'InjectorResistor'
    },
    {
        path: 'injectorResistor',
        redirectTo: 'InjectorResistor'
    },
    {
        path: 'InjectorResistor',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_view_pages_tuner-plus_injector-resistor_injector-resistor_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./injector-resistor/injector-resistor.module */ 25553)).then(m => m.InjectorResistorPageModule),
        canActivate: [src_app_core_guard_buyer_buyer_guard__WEBPACK_IMPORTED_MODULE_1__.BuyerGuard, src_app_core_guard_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        data: {
            title: 'اول آموز - محاسبه مقاومت انژکتور (Injector Resistor) - بازوی اول آموز',
            description: 'اول آموز | محاسبه مقاومت انژکتور (Injector Resistor) - بازوی اول آموز | TunerPlus | آموزش تیونینگ و تقویت موتور, نصب توربوشارژر و سوپرشارژر',
            ogUrl: 'http://localhost:4300/TunerPlus/InjectorResistor'
        }
    },
    {
        path: 'm15',
        redirectTo: 'M15'
    },
    {
        path: 'M15',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_view_pages_tuner-plus_m15_m15_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./m15/m15.module */ 55383)).then(m => m.M15PageModule),
        canActivate: [src_app_core_guard_buyer_buyer_guard__WEBPACK_IMPORTED_MODULE_1__.BuyerGuard, src_app_core_guard_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        data: {
            title: 'اول آموز - محاسبات تیبا (Tiba M15) - بازوی اول آموز',
            description: 'اول آموز | محاسبات تیبا (Tiba M15) - بازوی اول آموز | TunerPlus | آموزش تیونینگ و تقویت موتور, نصب توربوشارژر و سوپرشارژر',
            ogUrl: 'http://localhost:4300/TunerPlus/M15'
        }
    },
    {
        path: 'fuelpumplph',
        redirectTo: 'FuelPumpLph'
    },
    {
        path: 'Fuelpumplph',
        redirectTo: 'FuelPumpLph'
    },
    {
        path: 'fuelPumpLph',
        redirectTo: 'FuelPumpLph'
    },
    {
        path: 'FuelPumpLph',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_view_pages_tuner-plus_fuel-pump-lph_fuel-pump-lph_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./fuel-pump-lph/fuel-pump-lph.module */ 8754)).then(m => m.FuelPumpLphModule),
        canActivate: [src_app_core_guard_buyer_buyer_guard__WEBPACK_IMPORTED_MODULE_1__.BuyerGuard, src_app_core_guard_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        data: {
            title: 'اول آموز - محاسبه سایز پمپ بنزین (LPH) | بازوی اول آموز',
            description: 'اول آموز | محاسبه سایز پمپ بنزین برحسب LPH و GPH | بازوی اول آموز | TunerPlus | آموزش تیونینگ و تقویت موتور, نصب توربوشارژر و سوپرشارژر',
            ogUrl: 'http://localhost:4300/TunerPlus/FuelPumpLph'
        }
    },
    {
        path: 'dyno',
        redirectTo: 'Dyno'
    },
    {
        path: 'dynamiccompression',
        redirectTo: 'DynamicCompression'
    },
    {
        path: 'turbomatch',
        redirectTo: 'TurboMatch'
    },
    {
        path: 'electricalcalibration',
        redirectTo: 'ElectricalCalibration'
    },
    {
        path: 'dragperformance',
        redirectTo: 'DragPerformance'
    },
    {
        path: 'compressionquench',
        redirectTo: 'CompressionQuench'
    },
    {
        path: 'gearshiftoptimizer',
        redirectTo: 'GearShiftOptimizer'
    },
    {
        path: 'Gearshiftoptimizer',
        redirectTo: 'GearShiftOptimizer'
    },
    {
        path: 'gearShiftOptimizer',
        redirectTo: 'GearShiftOptimizer'
    },
    {
        path: 'GearShiftOptimizer',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_pages_tuner-plus_vehicle-profile_vehicle-profile_store_ts"), __webpack_require__.e("src_app_view_pages_tuner-plus_gear-shift-optimizer_gear-shift-optimizer_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./gear-shift-optimizer/gear-shift-optimizer.module */ 99528)).then(m => m.GearShiftOptimizerModule),
        canActivate: [src_app_core_guard_buyer_buyer_guard__WEBPACK_IMPORTED_MODULE_1__.BuyerGuard, src_app_core_guard_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        data: {
            title: 'اول آموز - بهینه ساز تعویض دنده | بازوی اول آموز',
            description: 'اول آموز | محاسبه دور و سرعت بهینه تعویض دنده با نمودار گشتاور سر چرخ | بازوی اول آموز',
            ogUrl: 'http://localhost:4300/TunerPlus/GearShiftOptimizer'
        }
    },
    {
        path: 'Compressionquench',
        redirectTo: 'CompressionQuench'
    },
    {
        path: 'compressionQuench',
        redirectTo: 'CompressionQuench'
    },
    {
        path: 'CompressionQuench',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_pages_tuner-plus_vehicle-profile_vehicle-profile_store_ts"), __webpack_require__.e("src_app_view_pages_tuner-plus_compression-quench_compression-quench_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./compression-quench/compression-quench.module */ 33179)).then(m => m.CompressionQuenchModule),
        canActivate: [src_app_core_guard_buyer_buyer_guard__WEBPACK_IMPORTED_MODULE_1__.BuyerGuard, src_app_core_guard_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        data: {
            title: 'اول آموز - محاسبه نسبت تراکم واقعی و Quench | بازوی اول آموز',
            description: 'اول آموز | محاسبه نسبت تراکم استاتیک واقعی، حجم کلیرانس و فاصله Quench موتور | بازوی اول آموز',
            ogUrl: 'http://localhost:4300/TunerPlus/CompressionQuench'
        }
    },
    {
        path: 'Dragperformance',
        redirectTo: 'DragPerformance'
    },
    {
        path: 'dragPerformance',
        redirectTo: 'DragPerformance'
    },
    {
        path: 'DragPerformance',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_pages_tuner-plus_vehicle-profile_vehicle-profile_store_ts"), __webpack_require__.e("src_app_view_pages_tuner-plus_drag-performance_drag-performance_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./drag-performance/drag-performance.module */ 79186)).then(m => m.DragPerformanceModule),
        canActivate: [src_app_core_guard_buyer_buyer_guard__WEBPACK_IMPORTED_MODULE_1__.BuyerGuard, src_app_core_guard_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        data: {
            title: 'اول آموز - تخمین عملکرد درگ و ۴۰۲ متر | بازوی اول آموز',
            description: 'اول آموز | تخمین زمان ۰ تا ۱۰۰، ۱۰۰ تا ۲۰۰ و ۴۰۲ متر بر اساس وزن، توان و انتقال نیرو | بازوی اول آموز',
            ogUrl: 'http://localhost:4300/TunerPlus/DragPerformance'
        }
    },
    {
        path: 'Electricalcalibration',
        redirectTo: 'ElectricalCalibration'
    },
    {
        path: 'electricalCalibration',
        redirectTo: 'ElectricalCalibration'
    },
    {
        path: 'ElectricalCalibration',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_pages_tuner-plus_vehicle-profile_vehicle-profile_store_ts"), __webpack_require__.e("src_app_view_pages_tuner-plus_electrical-calibration_electrical-calibration_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./electrical-calibration/electrical-calibration.module */ 34292)).then(m => m.ElectricalCalibrationModule),
        canActivate: [src_app_core_guard_buyer_buyer_guard__WEBPACK_IMPORTED_MODULE_1__.BuyerGuard, src_app_core_guard_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        data: {
            title: 'اول آموز - Dwell و Injector Dead-time | بازوی اول آموز',
            description: 'اول آموز | ساخت جدول اولیه Dwell کویل و Injector Dead-time بر اساس ولتاژ باتری | بازوی اول آموز',
            ogUrl: 'http://localhost:4300/TunerPlus/ElectricalCalibration'
        }
    },
    {
        path: 'Turbomatch',
        redirectTo: 'TurboMatch'
    },
    {
        path: 'turboMatch',
        redirectTo: 'TurboMatch'
    },
    {
        path: 'TurboMatch',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_pages_tuner-plus_vehicle-profile_vehicle-profile_store_ts"), __webpack_require__.e("src_app_view_pages_tuner-plus_turbo-match_turbo-match_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./turbo-match/turbo-match.module */ 81125)).then(m => m.TurboMatchModule),
        canActivate: [src_app_core_guard_buyer_buyer_guard__WEBPACK_IMPORTED_MODULE_1__.BuyerGuard, src_app_core_guard_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        data: {
            title: 'اول آموز - تطبیق توربو و کمپرسورمپ | بازوی اول آموز',
            description: 'اول آموز | محاسبه نقطه کاری موتور روی نقشه کمپرسور توربو و بررسی محدوده surge و choke | بازوی اول آموز',
            ogUrl: 'http://localhost:4300/TunerPlus/TurboMatch'
        }
    },
    {
        path: 'Dynamiccompression',
        redirectTo: 'DynamicCompression'
    },
    {
        path: 'dynamicCompression',
        redirectTo: 'DynamicCompression'
    },
    {
        path: 'DynamicCompression',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_view_pages_tuner-plus_vehicle-profile_vehicle-profile_store_ts"), __webpack_require__.e("src_app_view_pages_tuner-plus_dynamic-compression_dynamic-compression_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./dynamic-compression/dynamic-compression.module */ 96624)).then(m => m.DynamicCompressionModule),
        canActivate: [src_app_core_guard_buyer_buyer_guard__WEBPACK_IMPORTED_MODULE_1__.BuyerGuard, src_app_core_guard_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        data: {
            title: 'اول آموز - محاسبه نسبت تراکم دینامیک (DCR) | بازوی اول آموز',
            description: 'اول آموز | محاسبه نسبت تراکم دینامیک موتور با کورس، طول شاتون و زمان بسته شدن سوپاپ هوا | بازوی اول آموز',
            ogUrl: 'http://localhost:4300/TunerPlus/DynamicCompression'
        }
    },
    ...labToolRoutes,
    { path: 'Lab/:tool', redirectTo: ':tool' },
    {
        path: 'Lab',
        redirectTo: 'datalog'
    },
    {
        path: 'Dyno',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_view_pages_tuner-plus_dyno_dyno_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./dyno/dyno.module */ 20553)).then(m => m.DynoModule),
        canActivate: [src_app_core_guard_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard, src_app_core_guard_admin_admin_guard__WEBPACK_IMPORTED_MODULE_2__.AdminGuard],
        data: {
            title: 'اول آموز - شبیه ساز داینو خودرو | بازوی اول آموز',
            description: 'اول آموز | شبیه ساز داینو خودرو | بازوی اول آموز | TunerPlus | آموزش تیونینگ و تقویت موتور, نصب توربوشارژر و سوپرشارژر',
            ogUrl: 'http://localhost:4300/TunerPlus/Dyno'
        }
    },
    {
        path: 'dbw',
        redirectTo: 'Dbw'
    },
    {
        path: 'Dbw',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_view_pages_tuner-plus_dbw_dbw_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./dbw/dbw.module */ 644)).then(m => m.DbwModule),
        canActivate: [src_app_core_guard_buyer_buyer_guard__WEBPACK_IMPORTED_MODULE_1__.BuyerGuard, src_app_core_guard_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        data: {
            title: 'اول آموز - اپلیکیشن کنترل دریچه گاز برقی (DBW) - بازوی اول آموز',
            description: 'اول آموز | اپلیکیشن کنترل دریچه گاز برقی (DBW) - بازوی اول آموز | TunerPlus | آموزش تیونینگ و تقویت موتور, نصب توربوشارژر و سوپرشارژر',
            ogUrl: 'http://localhost:4300/TunerPlus/M15'
        }
    }
];
let TunerPlusRoutingModule = class TunerPlusRoutingModule {
};
TunerPlusRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
    })
], TunerPlusRoutingModule);



/***/ }),

/***/ 81146:
/*!***************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/tuner-plus.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TunerPlusComponent": () => (/* binding */ TunerPlusComponent)
/* harmony export */ });
/* harmony import */ var G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _tuner_plus_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tuner-plus.component.html?ngResource */ 10406);
/* harmony import */ var _tuner_plus_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tuner-plus.component.scss?ngResource */ 51614);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _core_common_G__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/common/G */ 67122);
/* harmony import */ var _core_common_GAccount__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/common/GAccount */ 6958);
/* harmony import */ var _core_i18n_site_language_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/i18n/site-language.service */ 37159);











let TunerPlusComponent = class TunerPlusComponent {
  constructor(sanitizer, router, menuCtrl, language) {
    this.sanitizer = sanitizer;
    this.router = router;
    this.menuCtrl = menuCtrl;
    this.language = language;
    this.login = false;
    this.queryText = '';
    this.toolFilterQuery = '';
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
    this.tunerPlusVideo = '6A3VE';
    this.animatedToolCount = 0;
    this.particles = [];
    this.activeCategory = 'همه ابزارها';
    this.categoryMeta = {
      'همه ابزارها': 'apps-outline',
      'فارسی و سوادآموزی': 'book-outline',
      'ریاضی و اعداد': 'calculator-outline',
      'مدیریت کلاس': 'people-outline',
      'بازی و خلاقیت': 'color-palette-outline'
    };
    this.categories = ['همه ابزارها', 'فارسی و سوادآموزی', 'ریاضی و اعداد', 'مدیریت کلاس', 'بازی و خلاقیت'];
    this.tools = [{
      title: 'عملکرد درگ',
      subtitle: 'شبیه‌سازی ۰–۱۰۰ و ۴۰۲ متر',
      route: '/TunerPlus/DragPerformance',
      icon: 'flag-outline',
      color: 'warning',
      category: 'انتقال قدرت',
      featured: true,
      badge: 'NEW',
      hidden: true
    }, {
      title: 'تطبیق توربو',
      subtitle: 'نقاط کاری روی کمپرسورمپ',
      route: '/TunerPlus/TurboMatch',
      icon: 'speedometer-outline',
      color: 'danger',
      category: 'هوا و توربو',
      featured: true,
      badge: 'NEW',
      hidden: true
    }, {
      title: 'پروفایل خودرو و پروژه',
      subtitle: 'خودرویت را بساز و مشخصاتش را در ابزارها استفاده کن',
      route: '/TunerPlus/vehicle-profile',
      icon: 'car-sport-outline',
      color: 'danger',
      category: 'ابزارهای تخصصی',
      badge: 'Beta',
      hidden: true
    }, {
      title: 'تعویض دنده بهینه',
      subtitle: 'نقطه تعویض با نمودار گشتاور چرخ',
      route: '/TunerPlus/GearShiftOptimizer',
      icon: 'git-compare-outline',
      color: 'tertiary',
      category: 'انتقال قدرت',
      featured: true,
      badge: 'NEW',
      hidden: true
    }, {
      title: 'نسبت تراکم واقعی',
      subtitle: 'CR استاتیک و فاصله Quench',
      route: '/TunerPlus/CompressionQuench',
      icon: 'resize-outline',
      color: 'success',
      category: 'موتور',
      featured: true,
      badge: 'NEW',
      hidden: true
    }, {
      title: 'تراکم داینامیک',
      subtitle: 'DCR با زمان بسته‌شدن سوپاپ هوا',
      route: '/TunerPlus/DynamicCompression',
      icon: 'pulse-outline',
      color: 'success',
      category: 'موتور',
      featured: true,
      badge: 'NEW',
      hidden: true
    }, {
      title: 'راندمان حجمی',
      subtitle: 'ساخت جدول VE برای ECU',
      route: '/TunerPlus/VE',
      icon: 'cube-outline',
      color: 'success',
      category: 'سوخت و جرقه',
      badge: 'VE',
      hidden: true
    }, {
      title: 'نسبت سوخت به هوا',
      subtitle: 'تنظیم جدول AFR هدف',
      route: '/TunerPlus/AFR',
      icon: 'flame-outline',
      color: 'danger',
      category: 'سوخت و جرقه',
      badge: 'AFR',
      hidden: true
    }, {
      title: 'جدول لامبدا',
      subtitle: 'Lambda target برای Remap',
      route: '/TunerPlus/Lambda',
      icon: 'bonfire-outline',
      color: 'secondary',
      category: 'سوخت و جرقه',
      badge: 'λ',
      hidden: true
    }, {
      title: 'زاویه جرقه',
      subtitle: 'محاسبه جدول Spark',
      route: '/TunerPlus/Spark',
      icon: 'flash-outline',
      color: 'warning',
      category: 'سوخت و جرقه',
      badge: 'Spark',
      hidden: true
    }, {
      title: 'گپ شمع',
      subtitle: 'گپ اولیه بر اساس تراکم، بوست و کویل',
      route: '/TunerPlus/SparkPlugGap',
      icon: 'flash-outline',
      color: 'danger',
      category: 'سوخت و جرقه',
      badge: 'NEW',
      hidden: true
    }, {
      title: 'سوخت موردنیاز',
      subtitle: 'محاسبه Required Fuel',
      route: '/TunerPlus/RequiredFuel',
      icon: 'flask-outline',
      color: 'danger',
      category: 'سوخت و جرقه',
      hidden: true
    }, {
      title: 'سایز انژکتور',
      subtitle: 'دبی مناسب انژکتور',
      route: '/TunerPlus/InjectorsRating',
      icon: 'eyedrop-outline',
      color: 'tertiary',
      category: 'سوخت و جرقه',
      hidden: true
    }, {
      title: 'پمپ بنزین',
      subtitle: 'محاسبه دبی پمپ LPH',
      route: '/TunerPlus/FuelPumpLph',
      icon: 'water-outline',
      color: 'primary',
      category: 'سوخت و جرقه',
      hidden: true
    }, {
      title: 'کویل و انژکتور',
      subtitle: 'Dwell و Injector Dead-time',
      route: '/TunerPlus/ElectricalCalibration',
      icon: 'flash-outline',
      color: 'warning',
      category: 'سوخت و جرقه',
      badge: 'NEW',
      hidden: true
    }, {
      title: 'Dwell کویل',
      subtitle: 'زمان شارژ کویل',
      route: '/TunerPlus/Dwell',
      icon: 'flash-off-outline',
      color: 'primary',
      category: 'سوخت و جرقه',
      hidden: true
    }, {
      title: 'حداکثر Dwell',
      subtitle: 'محدودیت شارژ کویل در دور بالا',
      route: '/TunerPlus/MaxDwell',
      icon: 'timer-outline',
      color: 'danger',
      category: 'سوخت و جرقه',
      hidden: true
    }, {
      title: 'نسبت استوکیومتری',
      subtitle: 'Stoich برای انواع سوخت',
      route: '/TunerPlus/Stoichiometry',
      icon: 'color-filter-outline',
      color: 'tertiary',
      category: 'سوخت و جرقه',
      hidden: true
    }, {
      title: 'سایز توربو',
      subtitle: 'انتخاب توربو بر اساس نیاز موتور',
      route: '/TunerPlus/Turbo',
      icon: 'rocket-outline',
      color: 'danger',
      category: 'هوا و توربو',
      hidden: true
    }, {
      title: 'توربوی سفارشی',
      subtitle: 'محاسبات پیشرفته توربو',
      route: '/TunerPlus/CustomTurbo',
      icon: 'construct-outline',
      color: 'danger',
      category: 'هوا و توربو',
      hidden: true
    }, {
      title: 'جریان هوای موتور',
      subtitle: 'Intake Flow و CFM',
      route: '/TunerPlus/IntakeFlow',
      icon: 'cloud-outline',
      color: 'primary',
      category: 'هوا و توربو',
      hidden: true
    }, {
      title: 'دریچه گاز',
      subtitle: 'محاسبه قطر Throttle body',
      route: '/TunerPlus/Throttle',
      icon: 'aperture-outline',
      color: 'secondary',
      category: 'هوا و توربو',
      hidden: true
    }, {
      title: 'رانر منیفولد',
      subtitle: 'طول و قطر Runner',
      route: '/TunerPlus/Runner',
      icon: 'git-branch-outline',
      color: 'success',
      category: 'هوا و توربو',
      hidden: true
    }, {
      title: 'هدرز',
      subtitle: 'ابعاد Header و اگزوز',
      route: '/TunerPlus/Headers',
      icon: 'options-outline',
      color: 'warning',
      category: 'هوا و توربو',
      hidden: true
    }, {
      title: 'تایمینگ میل‌سوپاپ',
      subtitle: 'Cam Timing و رویدادهای سوپاپ',
      route: '/TunerPlus/CamTiming',
      icon: 'time-outline',
      color: 'tertiary',
      category: 'موتور',
      hidden: true
    }, {
      title: 'ضریب شاتون',
      subtitle: 'Rod Ratio موتور',
      route: '/TunerPlus/RodRatio',
      icon: 'swap-vertical-outline',
      color: 'warning',
      category: 'موتور',
      hidden: true
    }, {
      title: 'نرخ فنر سوپاپ',
      subtitle: 'Valve Spring Rate',
      route: '/TunerPlus/ValveSpringRate',
      icon: 'pulse-outline',
      color: 'danger',
      category: 'موتور',
      hidden: true
    }, {
      title: 'نسبت دنده',
      subtitle: 'سرعت هر دنده و افت دور',
      route: '/TunerPlus/GearRatio',
      icon: 'cog-outline',
      color: 'warning',
      category: 'انتقال قدرت',
      hidden: true
    }, {
      title: 'توان و گشتاور',
      subtitle: 'تبدیل HP و Torque',
      route: '/TunerPlus/HP',
      icon: 'repeat-outline',
      color: 'success',
      category: 'انتقال قدرت',
      hidden: true
    }, {
      title: 'تلفات توان',
      subtitle: 'تبدیل WHP به Flywheel HP',
      route: '/TunerPlus/WhpToHp',
      icon: 'barbell-outline',
      color: 'tertiary',
      category: 'انتقال قدرت',
      hidden: true
    }, {
      title: 'فشار محیط',
      subtitle: 'Atmospheric Pressure',
      route: '/TunerPlus/AtmosphericPressure',
      icon: 'partly-sunny-outline',
      color: 'primary',
      category: 'ابزارهای تخصصی',
      hidden: true
    }, {
      title: 'سرعت‌سنج',
      subtitle: 'محاسبات Speedometer',
      route: '/TunerPlus/Speedometer',
      icon: 'speedometer-outline',
      color: 'success',
      category: 'ابزارهای تخصصی',
      hidden: true
    }, {
      title: 'کنترل DBW',
      subtitle: 'دریچه گاز برقی',
      route: '/TunerPlus/Dbw',
      icon: 'hardware-chip-outline',
      color: 'secondary',
      category: 'ابزارهای تخصصی',
      admin: true,
      hidden: true
    }, {
      title: 'مقاومت انژکتور',
      subtitle: 'Injector Resistor',
      route: '/TunerPlus/InjectorResistor',
      icon: 'git-network-outline',
      color: 'success',
      category: 'ابزارهای تخصصی',
      hidden: true
    }, {
      title: 'محاسبات TU5',
      subtitle: 'ابعاد و کلیرانس TU5JP4',
      route: '/TunerPlus/Tu5Clearance',
      icon: 'car-sport-outline',
      color: 'warning',
      category: 'ابزارهای تخصصی',
      hidden: true
    }, {
      title: 'محاسبات M15',
      subtitle: 'ابعاد و مشخصات موتور تیبا',
      route: '/TunerPlus/M15',
      icon: 'car-outline',
      color: 'tertiary',
      category: 'ابزارهای تخصصی',
      hidden: true
    }, {
      title: 'محاسبات Daewoo Espero',
      subtitle: 'ابزار موتور دوو اسپرو',
      route: '/TunerPlus/DaewooEspero',
      icon: 'car-outline',
      color: 'success',
      category: 'ابزارهای تخصصی',
      hidden: true
    }, {
      title: 'فایل INC',
      subtitle: 'ابزار فایل‌های تنظیمات ECU',
      route: '/TunerPlus/Inc',
      icon: 'document-text-outline',
      color: 'danger',
      category: 'ابزارهای تخصصی',
      hidden: true
    }, {
      title: 'تحلیل‌گر دیتالاگ ECU',
      subtitle: 'تحلیل CSV و پیشنهاد اصلاح VE',
      route: '/TunerPlus/datalog',
      icon: 'analytics-outline',
      color: 'primary',
      category: 'سوخت و جرقه',
      badge: 'Beta',
      admin: true,
      hidden: true
    }, {
      title: 'ترکیب سوخت و اکتان',
      subtitle: 'E85، اتانول و Stoich ترکیب',
      route: '/TunerPlus/fuel-blend',
      icon: 'flask-outline',
      color: 'danger',
      category: 'سوخت و جرقه',
      badge: 'Beta',
      hidden: true
    }, {
      title: 'سایزینگ اینترکولر',
      subtitle: 'دمای خروجی و افت فشار core',
      route: '/TunerPlus/intercooler',
      icon: 'snow-outline',
      color: 'secondary',
      category: 'هوا و توربو',
      badge: 'Beta',
      hidden: true
    }, {
      title: 'مهندسی Boost Control',
      subtitle: 'فنر ویست‌گیت و Duty اولیه',
      route: '/TunerPlus/boost-control',
      icon: 'speedometer-outline',
      color: 'danger',
      category: 'هوا و توربو',
      badge: 'Beta',
      admin: true,
      hidden: true
    }, {
      title: 'رینگ، لاستیک و Final Drive',
      subtitle: 'قطر، سرعت و دور موتور',
      route: '/TunerPlus/wheel-final-drive',
      icon: 'disc-outline',
      color: 'warning',
      category: 'انتقال قدرت',
      badge: 'Beta',
      hidden: true
    }, {
      title: 'ظرفیت کامل سیستم سوخت',
      subtitle: 'ضعیف‌ترین حلقه پمپ و انژکتور',
      route: '/TunerPlus/fuel-system',
      icon: 'water-outline',
      color: 'tertiary',
      category: 'سوخت و جرقه',
      badge: 'Beta',
      admin: true,
      hidden: true
    }, {
      title: 'EGT و Backpressure',
      subtitle: 'ریسک حرارتی و نسبت EMAP/MAP',
      route: '/TunerPlus/egt-backpressure',
      icon: 'thermometer-outline',
      color: 'warning',
      category: 'موتور',
      badge: 'Beta',
      featured: true,
      hidden: true
    }, {
      title: 'انتخاب میل‌سوپاپ',
      subtitle: 'Duration، LSA و Lift اولیه',
      route: '/TunerPlus/cam-selector',
      icon: 'pulse-outline',
      color: 'success',
      category: 'موتور',
      badge: 'Beta',
      hidden: true
    }, {
      title: 'Launch و Traction',
      subtitle: 'حد چسبندگی و گشتاور دنده یک',
      route: '/TunerPlus/launch-traction',
      icon: 'flag-outline',
      color: 'warning',
      category: 'انتقال قدرت',
      badge: 'Beta',
      admin: true,
      hidden: true
    }, // ─── ابزارهای آنلاین کلاس اول ابتدایی (بازوی اول آموز) ───
    // فارسی و سوادآموزی
    {
      title: 'آموزش الفبای فارسی',
      subtitle: 'یادگیری ۳۲ نشانه، صداها و شکل نوشتاری',
      route: '/TunerPlus/alphabet',
      icon: 'text-outline',
      color: 'danger',
      category: 'فارسی و سوادآموزی',
      featured: true,
      badge: 'جدید'
    }, {
      title: 'دیکته‌ساز هوشمند',
      subtitle: 'گوینده صوتی املا با دروس کتاب فارسی اول',
      route: '/TunerPlus/dictation',
      icon: 'create-outline',
      color: 'warning',
      category: 'فارسی و سوادآموزی',
      featured: true,
      badge: 'جدید'
    }, {
      title: 'هجاشکن و بخش کلمات',
      subtitle: 'تقسیم کلمات به بخش‌ها و جدول صداکشی',
      route: '/TunerPlus/syllable-breaker',
      icon: 'git-branch-outline',
      color: 'tertiary',
      category: 'فارسی و سوادآموزی',
      badge: 'جدید'
    }, // ریاضی و اعداد
    {
      title: 'تمرین جمع و تفریق',
      subtitle: 'تمرین تعاملی ریاضی با محور اعداد و دست‌ورزی',
      route: '/TunerPlus/math-practice',
      icon: 'calculator-outline',
      color: 'primary',
      category: 'ریاضی و اعداد',
      featured: true,
      badge: 'جدید'
    }, {
      title: 'ساعت‌آموز',
      subtitle: 'یادگیری ساعت‌خوانی، عقربه‌ها و زمان با آزمون',
      route: '/TunerPlus/clock-learning',
      icon: 'time-outline',
      color: 'warning',
      category: 'ریاضی و اعداد',
      featured: true,
      badge: 'جدید'
    }, {
      title: 'شکل‌شناسی هندسی',
      subtitle: 'آموزش اشکال پایه، لبه‌ها، گوشه‌ها و معما',
      route: '/TunerPlus/shapes',
      icon: 'shapes-outline',
      color: 'danger',
      category: 'ریاضی و اعداد',
      badge: 'جدید'
    }, // مدیریت کلاس
    {
      title: 'تایمر کلاسی و آزمون',
      subtitle: 'زمان‌سنج معکوس با زنگ هشدار برای فعالیت‌ها',
      route: '/TunerPlus/class-timer',
      icon: 'timer-outline',
      color: 'danger',
      category: 'مدیریت کلاس',
      featured: true,
      badge: 'جدید'
    }, {
      title: 'محاسبه‌گر کارنامه توصیفی',
      subtitle: 'ارزشیابی کیفی-توصیفی و چاپ کارنامه کلاسی',
      route: '/TunerPlus/grade-calculator',
      icon: 'ribbon-outline',
      color: 'warning',
      category: 'مدیریت کلاس',
      badge: 'جدید'
    }, {
      title: 'چرخ شانس و قرعه‌کشی',
      subtitle: 'انتخاب عادلانه دانش‌آموز برای پاسخ‌گویی کلاسی',
      route: '/TunerPlus/random-picker',
      icon: 'sync-outline',
      color: 'tertiary',
      category: 'مدیریت کلاس',
      featured: true,
      badge: 'جدید'
    }, // بازی و خلاقیت
    {
      title: 'حافظه تصویری',
      subtitle: 'بازی پیدا کردن جفت کارت‌های مشابه برای تمرکز',
      route: '/TunerPlus/memory-game',
      icon: 'grid-outline',
      color: 'primary',
      category: 'بازی و خلاقیت',
      featured: true,
      badge: 'جدید'
    }];
  }

  toggleAppMenu() {
    this.menuCtrl.toggle('start');
  }

  scrollTo(id) {
    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

  ngAfterViewInit() {
    this.animateCounter();
    this.generateParticles();
  }

  animateCounter() {
    const target = this.allowedTools.length;
    const duration = 1800;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;

      if (current >= target) {
        this.animatedToolCount = target;
        clearInterval(timer);
      } else {
        this.animatedToolCount = Math.floor(current);
      }
    }, duration / steps);
  }

  generateParticles() {
    for (let i = 0; i < 20; i++) {
      this.particles.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2,
        delay: Math.random() * 5,
        duration: Math.random() * 10 + 15
      });
    }
  }

  getCategoryIcon(category) {
    const icons = {
      'همه ابزارها': 'apps-outline',
      'فارسی و سوادآموزی': 'book-outline',
      'ریاضی و اعداد': 'calculator-outline',
      'مدیریت کلاس': 'people-outline',
      'بازی و خلاقیت': 'color-palette-outline'
    };
    return icons[category] || 'grid-outline';
  }

  getCategoryCount(category) {
    if (category === 'همه ابزارها') {
      return this.allowedTools.length;
    }

    return this.allowedTools.filter(t => t.category === category).length;
  }

  doRefresh(event) {
    setTimeout(() => {
      location.reload();
      event.target.complete();
    }, 2000);
  }

  ionViewWillEnter() {
    this.login = _core_common_GAccount__WEBPACK_IMPORTED_MODULE_4__.GAccount.IsLoggedIn();
  }

  goTop() {
    this.content.scrollToTop(3000);
  }

  forwardUrl(url) {
    window.location.href = url;
  }

  isAndroid() {
    return _core_common_G__WEBPACK_IMPORTED_MODULE_3__.G.IsAndroid;
  }

  isAdmin() {
    return _core_common_GAccount__WEBPACK_IMPORTED_MODULE_4__.GAccount.IsAdminActive();
  }

  ngOnInit() {
    this.instagram = _core_common_G__WEBPACK_IMPORTED_MODULE_3__.G.Instagram;
    this.twiter = _core_common_G__WEBPACK_IMPORTED_MODULE_3__.G.Twiter;
    this.facebook = _core_common_G__WEBPACK_IMPORTED_MODULE_3__.G.Facebook;
    this.telegram = _core_common_G__WEBPACK_IMPORTED_MODULE_3__.G.Telegram;
    this.youtube = _core_common_G__WEBPACK_IMPORTED_MODULE_3__.G.Youtube;
    this.pinterest = _core_common_G__WEBPACK_IMPORTED_MODULE_3__.G.Pinterest;
    this.linkedin = _core_common_G__WEBPACK_IMPORTED_MODULE_3__.G.Linkedin;
    this.twitch = _core_common_G__WEBPACK_IMPORTED_MODULE_3__.G.Twitch;
    this.aparat = _core_common_G__WEBPACK_IMPORTED_MODULE_3__.G.Aparat;
    this.discord = _core_common_G__WEBPACK_IMPORTED_MODULE_3__.G.Discord;
    this.tunerPlusVideo = _core_common_G__WEBPACK_IMPORTED_MODULE_3__.G.TunerPlusVideo;
  }

  onNavigate(url) {
    this.router.navigateByUrl(url);
  }

  selectCategory(category) {
    this.activeCategory = category;
  }

  get allowedTools() {
    return this.tools.filter(tool => !tool.hidden && (!tool.admin || this.isAdmin()));
  }

  get visibleTools() {
    let list = this.activeCategory === 'همه ابزارها' ? this.allowedTools : this.allowedTools.filter(tool => tool.category === this.activeCategory);

    if (this.toolFilterQuery && this.toolFilterQuery.trim()) {
      const q = this.toolFilterQuery.trim().toLowerCase();
      list = list.filter(t => t.title && t.title.toLowerCase().includes(q) || t.subtitle && t.subtitle.toLowerCase().includes(q));
    }

    return list;
  }

  get featuredTools() {
    return this.allowedTools.filter(tool => tool.featured);
  }

  categoryName(category) {
    if (this.language.current === 'fa') {
      return category;
    }

    const keys = {
      'همه ابزارها': 'all',
      'فارسی و سوادآموزی': 'persianLiteracy',
      'ریاضی و اعداد': 'mathNumbers',
      'مدیریت کلاس': 'classManagement',
      'بازی و خلاقیت': 'gamesCreativity'
    };
    const key = 'tunerPlus.category.' + keys[category];
    const translated = this.language.text(key);
    return translated === key ? category : translated;
  }

  toolText(tool, field) {
    if (this.language.current === 'fa') {
      return tool[field];
    }

    const key = 'tunerPlus.tool.' + tool.route.split('/').pop().toLowerCase() + '.' + field;
    const translated = this.language.text(key);
    return translated === key ? tool[field] : translated;
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

  goLogin() {
    var _this = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) === 'returnUrl') {
          localStorage.removeItem('returnUrl');
        }
      }

      localStorage.setItem('returnUrl', _this.language.url('/TunerPlus')); // this.router.navigateByUrl(Urls.AccountUrl);
    })();
  }

  checkURL() {
    const url = 'https://www.aparat.com/video/video/embed/videohash/' + this.tunerPlusVideo + '/vt/frame';
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  checkVideoUrl() {
    const url = 'https://www.aparat.com/v/' + this.tunerPlusVideo;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

};

TunerPlusComponent.ctorParameters = () => [{
  type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.DomSanitizer
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.MenuController
}, {
  type: _core_i18n_site_language_service__WEBPACK_IMPORTED_MODULE_5__.SiteLanguageService
}];

TunerPlusComponent.propDecorators = {
  content: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild,
    args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonContent]
  }]
};
TunerPlusComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-tuner-plus',
  template: _tuner_plus_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_tuner_plus_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], TunerPlusComponent);


/***/ }),

/***/ 1910:
/*!************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/tuner-plus.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TunerPlusModule": () => (/* binding */ TunerPlusModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/view/components/app/page-header/page-header.module */ 19916);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _tuner_plus_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tuner-plus-routing.module */ 20022);
/* harmony import */ var _tuner_plus_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tuner-plus.component */ 81146);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/app/footer/footer.module */ 60412);
/* harmony import */ var _components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/common/loading/loading.module */ 90876);
/* harmony import */ var _core_i18n_site_i18n_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/i18n/site-i18n.module */ 58586);











let TunerPlusModule = class TunerPlusModule {
};
TunerPlusModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        declarations: [_tuner_plus_component__WEBPACK_IMPORTED_MODULE_2__.TunerPlusComponent],
        imports: [
            src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__.PageHeaderModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _tuner_plus_routing_module__WEBPACK_IMPORTED_MODULE_1__.TunerPlusRoutingModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_4__.LoadingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
            _components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__.FooterModule,
            _core_i18n_site_i18n_module__WEBPACK_IMPORTED_MODULE_5__.SiteI18nModule
        ]
    })
], TunerPlusModule);



/***/ }),

/***/ 51614:
/*!****************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/tuner-plus.component.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = ":host {\n  --ink: var(--tuner-text, #1e1b4b);\n  --ink-secondary: var(--tuner-muted, #475569);\n  --muted: var(--tuner-muted, #64748b);\n  --purple: #6d28d9;\n  --purple-dark: #581c87;\n  --purple-light: var(--tuner-purple-soft, #ede9fe);\n  --purple-glow: rgba(109, 40, 217, 0.16);\n  --amber: #f59e0b;\n  --amber-dark: var(--tuner-warning-text, #d97706);\n  --amber-light: var(--tuner-warning-soft, #fef3c7);\n  --amber-glow: rgba(245, 158, 11, 0.18);\n  --emerald: #10b981;\n  --emerald-dark: var(--tuner-success-text, #059669);\n  --emerald-light: var(--tuner-success-soft, #d1fae5);\n  --rose: #f43f5e;\n  --rose-light: var(--tuner-danger-soft, #ffe4e6);\n  --sky: var(--tuner-info-text, #0284c7);\n  --sky-light: var(--tuner-info-soft, #e0f2fe);\n  --paper: var(--tuner-surface, #ffffff);\n  --bg-canvas: var(--tuner-page, #fcfbfe);\n  --border-soft: var(--tuner-border, #ede9f6);\n  --card-bg: var(--tuner-surface, #ffffff);\n  --ion-background-color: var(--bg-canvas);\n  --ion-text-color: var(--ink);\n  display: flex;\n  flex-direction: column;\n  min-height: 100%;\n  color: var(--ink);\n  font-family: var(--ion-font-family, \"Shabnam-Medium\", \"Vazirmatn\", system-ui, sans-serif);\n}\n\n* {\n  box-sizing: border-box;\n}\n\na {\n  color: inherit;\n  text-decoration: none;\n}\n\nbutton, input {\n  font: inherit;\n}\n\nbutton {\n  cursor: pointer;\n  border: 0;\n  background: transparent;\n}\n\nbutton, a {\n  -webkit-tap-highlight-color: transparent;\n}\n\nbutton:focus-visible, a:focus-visible, input:focus-visible {\n  outline: 3px solid #ac88f2;\n  outline-offset: 3px;\n  border-radius: 10px;\n}\n\nion-icon {\n  pointer-events: none;\n  flex-shrink: 0;\n}\n\nh1, h2, h3, h4, p {\n  margin: 0;\n  color: inherit;\n}\n\n.learning-header {\n  background: var(--tuner-header, rgba(255, 255, 255, 0.94));\n  backdrop-filter: blur(16px);\n  -webkit-backdrop-filter: blur(16px);\n  box-shadow: 0 4px 20px rgba(99, 63, 163, 0.05);\n  border-bottom: 1px solid var(--border-soft);\n  position: sticky;\n  top: 0;\n  z-index: 50;\n  flex-shrink: 0;\n}\n\n.learning-header::after {\n  display: none;\n}\n\n.nav-shell {\n  max-width: 1280px;\n  margin: auto;\n  padding: 12px 24px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  min-height: 76px;\n}\n\n.menu-toggle {\n  width: 42px;\n  height: 42px;\n  border-radius: 12px;\n  background: var(--purple-light);\n  color: var(--tuner-purple-text, var(--purple));\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 22px;\n  transition: all 0.2s ease;\n}\n\n.menu-toggle:hover {\n  background: var(--tuner-purple-soft, #ded7fb);\n  transform: scale(1.04);\n}\n\n.brand {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  flex-shrink: 0;\n}\n\n.brand-logo-wrap {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.brand-logo-wrap img {\n  object-fit: contain;\n  border-radius: 12px;\n}\n\n.brand-sparkle {\n  position: absolute;\n  top: -5px;\n  inset-inline-end: -6px;\n  color: var(--amber);\n  font-size: 13px;\n  animation: sparkle-pulse 2s ease-in-out infinite;\n}\n\n.brand-titles b {\n  display: block;\n  color: var(--tuner-purple-text, var(--purple));\n  font-size: 22px;\n  font-weight: 900;\n  line-height: 1.25;\n}\n\n.brand-titles small {\n  display: block;\n  color: var(--muted);\n  font-size: 10px;\n  margin-top: 1px;\n  white-space: nowrap;\n}\n\n.main-nav {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  flex: 1;\n}\n\n.main-nav .nav-link-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n  font-weight: 700;\n  padding: 8px 14px;\n  color: var(--ink);\n  border-radius: 12px;\n  white-space: nowrap;\n  transition: all 0.2s ease;\n}\n\n.main-nav .nav-link-btn ion-icon {\n  font-size: 16px;\n  color: var(--tuner-purple-text, var(--purple));\n}\n\n.main-nav .nav-link-btn:hover {\n  color: var(--tuner-purple-text, var(--purple));\n  background: var(--purple-light);\n}\n\n.main-nav .nav-link-btn.active-nav {\n  color: var(--tuner-purple-text, var(--purple));\n  background: var(--purple-light);\n  font-weight: 800;\n}\n\n.nav-actions {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-shrink: 0;\n}\n\n.icon-button {\n  width: 42px;\n  height: 42px;\n  border-radius: 12px;\n  background: var(--tuner-soft, #f8fafc);\n  color: var(--ink);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  border: 1px solid var(--border-soft);\n  transition: all 0.2s ease;\n}\n\n.icon-button:hover {\n  color: var(--tuner-purple-text, var(--purple));\n  border-color: var(--tuner-purple-text, var(--purple));\n  background: var(--purple-light);\n}\n\n.login-button {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 9px 18px;\n  background: linear-gradient(135deg, var(--purple) 0%, var(--purple-dark) 100%);\n  color: #fff !important;\n  font-size: 13px;\n  font-weight: 800;\n  border-radius: 14px;\n  box-shadow: 0 4px 14px var(--purple-glow);\n  transition: all 0.2s ease;\n}\n\n.login-button ion-icon {\n  font-size: 18px;\n}\n\n.login-button:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 18px rgba(109, 40, 217, 0.32);\n}\n\n.header-search-bar {\n  background: var(--tuner-surface, #fff);\n  border-top: 1px solid var(--border-soft);\n  padding: 12px 24px;\n  animation: slide-down 0.25s ease-out;\n}\n\n.header-search-bar .search-input-wrap {\n  max-width: 680px;\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: var(--tuner-soft, #f8fafc);\n  border: 1.5px solid var(--border-soft);\n  border-radius: 14px;\n  padding: 6px 14px;\n}\n\n.header-search-bar .search-input-wrap ion-icon {\n  color: var(--muted);\n  font-size: 20px;\n}\n\n.header-search-bar .search-input-wrap input {\n  flex: 1;\n  border: 0;\n  background: transparent;\n  font-size: 14px;\n  color: var(--ink);\n  outline: none;\n}\n\n.header-search-bar .search-input-wrap input::placeholder {\n  color: var(--muted);\n}\n\n.tuner-plus-content {\n  --background: var(--bg-canvas);\n}\n\n.page-wrapper {\n  position: relative;\n  overflow: hidden;\n  min-height: calc(100vh - 80px);\n  padding-bottom: 56px;\n}\n\n.backdrop-glows {\n  position: absolute;\n  inset: 0;\n  pointer-events: none;\n  z-index: 0;\n}\n\n.glow-orb {\n  position: absolute;\n  border-radius: 50%;\n  filter: blur(80px);\n  opacity: 0.6;\n}\n\n.glow-purple {\n  width: 440px;\n  height: 440px;\n  top: -100px;\n  inset-inline-end: -100px;\n  background: radial-gradient(circle, var(--purple-glow), transparent 70%);\n}\n\n.glow-amber {\n  width: 380px;\n  height: 380px;\n  top: 350px;\n  inset-inline-start: -120px;\n  background: radial-gradient(circle, var(--amber-glow), transparent 70%);\n}\n\n.glow-emerald {\n  width: 400px;\n  height: 400px;\n  bottom: 100px;\n  inset-inline-end: 10%;\n  background: radial-gradient(circle, rgba(16, 185, 129, 0.12), transparent 70%);\n}\n\n.floating-decor {\n  position: absolute;\n  font-size: 24px;\n  opacity: 0.28;\n  pointer-events: none;\n  animation: float-decor 6s ease-in-out infinite;\n}\n\n.floating-decor.pencil {\n  top: 110px;\n  inset-inline-start: 4%;\n  animation-delay: 0s;\n}\n\n.floating-decor.star {\n  top: 220px;\n  inset-inline-end: 6%;\n  font-size: 28px;\n  color: var(--amber);\n  opacity: 0.5;\n  animation-delay: 1.5s;\n}\n\n.floating-decor.book {\n  top: 580px;\n  inset-inline-start: 3%;\n  animation-delay: 3s;\n}\n\n.floating-decor.sparkle {\n  top: 800px;\n  inset-inline-end: 4%;\n  color: var(--tuner-purple-text, var(--purple));\n  opacity: 0.4;\n  animation-delay: 4.5s;\n}\n\n.tuner-main {\n  position: relative;\n  z-index: 1;\n  max-width: 1280px;\n  margin: 0 auto;\n  padding: 32px 24px 0;\n}\n\n.tuner-hero {\n  position: relative;\n  background: var(--tuner-surface, #ffffff);\n  border: 1px solid var(--border-soft);\n  border-radius: 28px;\n  padding: 44px 40px;\n  box-shadow: 0 12px 36px rgba(109, 40, 217, 0.05);\n  margin-bottom: 32px;\n  overflow: hidden;\n}\n\n.tuner-hero::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 5px;\n  background: linear-gradient(90deg, var(--purple) 0%, var(--amber) 50%, var(--emerald) 100%);\n}\n\n.eyebrow-wrap {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-bottom: 16px;\n}\n\n.eyebrow {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n  font-weight: 800;\n  color: var(--tuner-purple-text, var(--purple));\n  background: var(--purple-light);\n  padding: 5px 14px;\n  border-radius: 999px;\n}\n\n.eyebrow .little-star {\n  color: var(--amber);\n}\n\n.hero-chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--emerald-dark);\n  background: var(--emerald-light);\n  padding: 5px 12px;\n  border-radius: 999px;\n}\n\n.hero-chip ion-icon {\n  font-size: 14px;\n}\n\n.tuner-hero h1 {\n  font-size: clamp(24px, 3.8vw, 36px);\n  font-weight: 900;\n  line-height: 1.45;\n  color: var(--ink);\n  margin-bottom: 16px;\n}\n\n.tuner-hero h1 .highlight {\n  position: relative;\n  display: inline-block;\n  color: var(--tuner-purple-text, var(--purple));\n}\n\n.tuner-hero h1 .highlight svg {\n  position: absolute;\n  bottom: -6px;\n  left: 0;\n  width: 100%;\n  height: 12px;\n  stroke: var(--amber);\n  stroke-width: 3.5;\n  fill: none;\n  stroke-linecap: round;\n}\n\n.hero-desc {\n  font-size: 15px;\n  line-height: 1.95;\n  color: var(--ink-secondary);\n  max-width: 820px;\n  margin-bottom: 28px;\n}\n\n.hero-actions {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-bottom: 32px;\n}\n\n.button {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 22px;\n  border-radius: 14px;\n  font-size: 14px;\n  font-weight: 800;\n  cursor: pointer;\n  transition: all 0.25s ease;\n  white-space: nowrap;\n}\n\n.button.small {\n  padding: 8px 16px;\n  font-size: 13px;\n  border-radius: 10px;\n}\n\n.button.primary {\n  background: linear-gradient(135deg, var(--purple) 0%, var(--purple-dark) 100%);\n  color: #fff !important;\n  box-shadow: 0 6px 18px var(--purple-glow);\n}\n\n.button.primary:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 10px 24px rgba(109, 40, 217, 0.28);\n}\n\n.button.primary .action-arrow {\n  transition: transform 0.2s ease;\n}\n\n.button.primary:hover .action-arrow {\n  transform: translateX(-4px);\n}\n\n.button.secondary {\n  background: var(--purple-light);\n  color: var(--tuner-purple-text, var(--purple)) !important;\n}\n\n.button.secondary:hover {\n  background: var(--tuner-purple-soft, #ded7fb);\n  transform: translateY(-2px);\n}\n\n.button.ghost {\n  background: var(--tuner-soft, #f8fafc);\n  border: 1px solid var(--border-soft);\n  color: var(--ink-secondary) !important;\n}\n\n.button.ghost:hover {\n  background: var(--purple-light);\n  color: var(--tuner-purple-text, var(--purple)) !important;\n  border-color: var(--tuner-purple-text, var(--purple));\n}\n\n.hero-trust-strip {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 20px;\n  padding-top: 24px;\n  border-top: 1px solid var(--border-soft);\n}\n\n.hero-trust-strip .trust-item {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n\n.hero-trust-strip .trust-item .trust-icon {\n  width: 40px;\n  height: 40px;\n  border-radius: 12px;\n  background: var(--amber-light);\n  color: var(--amber-dark);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n\n.hero-trust-strip .trust-item .trust-text b {\n  display: block;\n  font-size: 14px;\n  font-weight: 800;\n  color: var(--ink);\n}\n\n.hero-trust-strip .trust-item .trust-text small {\n  display: block;\n  font-size: 12px;\n  color: var(--muted);\n}\n\n.hero-trust-strip .trust-divider {\n  width: 1px;\n  height: 32px;\n  background: var(--border-soft);\n}\n\n.access-banner {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 20px;\n  background: linear-gradient(135deg, var(--tuner-warning-soft, #fefce8) 0%, var(--tuner-warning-soft, #fef3c7) 100%);\n  border: 1px solid var(--tuner-warning-border, #fde68a);\n  border-radius: 20px;\n  padding: 18px 24px;\n  margin-bottom: 32px;\n}\n\n.access-banner .access-icon {\n  width: 44px;\n  height: 44px;\n  border-radius: 14px;\n  background: var(--tuner-surface, #ffffff);\n  color: var(--amber-dark);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 22px;\n  flex-shrink: 0;\n  box-shadow: 0 4px 12px rgba(245, 158, 11, 0.15);\n}\n\n.access-banner .access-content {\n  flex: 1;\n}\n\n.access-banner .access-content strong {\n  display: block;\n  color: var(--tuner-warning-text, #92400e);\n  font-size: 15px;\n  font-weight: 800;\n  margin-bottom: 2px;\n}\n\n.access-banner .access-content p {\n  color: var(--tuner-warning-text, #b45309);\n  font-size: 13px;\n}\n\n.section-heading {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 16px;\n  margin-bottom: 24px;\n}\n\n.section-heading .section-kicker {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  font-weight: 800;\n  color: var(--tuner-purple-text, var(--purple));\n  text-transform: uppercase;\n  margin-bottom: 4px;\n}\n\n.section-heading .section-kicker .kicker-sparkle {\n  color: var(--amber);\n}\n\n.section-heading h2 {\n  font-size: clamp(20px, 2.6vw, 26px);\n  font-weight: 900;\n  color: var(--ink);\n}\n\n.section-heading .section-count-chip {\n  font-size: 12px;\n  font-weight: 800;\n  color: var(--tuner-purple-text, var(--purple));\n  background: var(--purple-light);\n  padding: 6px 14px;\n  border-radius: 999px;\n  white-space: nowrap;\n}\n\n.featured-section {\n  margin-bottom: 44px;\n}\n\n.featured-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));\n  gap: 18px;\n}\n\n.featured-card {\n  position: relative;\n  background: var(--tuner-surface, #ffffff);\n  border: 1px solid var(--border-soft);\n  border-radius: 20px;\n  padding: 22px;\n  display: flex;\n  align-items: flex-start;\n  gap: 16px;\n  transition: all 0.25s ease;\n  box-shadow: 0 4px 16px rgba(109, 40, 217, 0.04);\n}\n\n.featured-card:hover {\n  transform: translateY(-4px);\n  border-color: var(--tuner-purple-text, var(--purple));\n  box-shadow: 0 12px 30px rgba(109, 40, 217, 0.09);\n}\n\n.featured-card:hover .arrow-icon {\n  color: var(--tuner-purple-text, var(--purple));\n  transform: translateX(-4px);\n}\n\n.featured-card .tool-icon-wrap {\n  width: 48px;\n  height: 48px;\n  border-radius: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 22px;\n  flex-shrink: 0;\n}\n\n.featured-card .tool-icon-wrap.accent-primary {\n  background: var(--purple-light);\n  color: var(--tuner-purple-text, var(--purple));\n}\n\n.featured-card .tool-icon-wrap.accent-warning {\n  background: var(--amber-light);\n  color: var(--amber-dark);\n}\n\n.featured-card .tool-icon-wrap.accent-success {\n  background: var(--emerald-light);\n  color: var(--emerald-dark);\n}\n\n.featured-card .tool-icon-wrap.accent-danger {\n  background: var(--rose-light);\n  color: var(--rose);\n}\n\n.featured-card .tool-icon-wrap.accent-secondary {\n  background: var(--sky-light);\n  color: var(--sky);\n}\n\n.featured-card .tool-icon-wrap.accent-tertiary {\n  background: var(--tuner-purple-soft, #ede9fe);\n  color: var(--tuner-purple-text, #7c3aed);\n}\n\n.featured-card .tool-copy {\n  flex: 1;\n  min-width: 0;\n}\n\n.featured-card .tool-copy .card-top-row {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 6px;\n}\n\n.featured-card .tool-copy .card-top-row .category-tag {\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--muted);\n}\n\n.featured-card .tool-copy .card-top-row .tool-badge {\n  font-size: 10px;\n  font-weight: 800;\n  background: var(--amber);\n  color: #422006;\n  padding: 2px 8px;\n  border-radius: 6px;\n}\n\n.featured-card .tool-copy h3 {\n  font-size: 16px;\n  font-weight: 800;\n  color: var(--ink);\n  margin-bottom: 4px;\n  line-height: 1.35;\n}\n\n.featured-card .tool-copy p {\n  font-size: 12px;\n  line-height: 1.7;\n  color: var(--ink-secondary);\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n\n.featured-card .arrow-icon {\n  font-size: 18px;\n  color: var(--muted);\n  align-self: center;\n  transition: all 0.2s ease;\n}\n\n.tool-explorer {\n  margin-bottom: 44px;\n}\n\n.explorer-filter-bar {\n  background: var(--tuner-surface, #ffffff);\n  border: 1px solid var(--border-soft);\n  border-radius: 20px;\n  padding: 16px 20px;\n  margin-bottom: 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  box-shadow: 0 4px 16px rgba(109, 40, 217, 0.03);\n}\n\n.filter-search-box {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: var(--tuner-soft, #f8fafc);\n  border: 1px solid var(--border-soft);\n  border-radius: 14px;\n  padding: 10px 16px;\n}\n\n.filter-search-box ion-icon {\n  font-size: 20px;\n  color: var(--tuner-purple-text, var(--purple));\n}\n\n.filter-search-box input {\n  flex: 1;\n  border: 0;\n  background: transparent;\n  font-size: 14px;\n  color: var(--ink);\n  outline: none;\n}\n\n.filter-search-box input::placeholder {\n  color: var(--muted);\n  font-size: 13px;\n}\n\n.filter-search-box .clear-search-btn {\n  color: var(--muted);\n  font-size: 18px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n}\n\n.filter-search-box .clear-search-btn:hover {\n  color: var(--rose);\n}\n\n.category-scroller {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  overflow-x: auto;\n  padding-bottom: 4px;\n  scrollbar-width: none;\n}\n\n.category-scroller::-webkit-scrollbar {\n  display: none;\n}\n\n.category-scroller .category-chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 16px;\n  background: var(--tuner-soft, #f8fafc);\n  border: 1px solid var(--border-soft);\n  border-radius: 999px;\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--ink);\n  cursor: pointer;\n  white-space: nowrap;\n  transition: all 0.2s ease;\n}\n\n.category-scroller .category-chip ion-icon {\n  font-size: 16px;\n  color: var(--tuner-purple-text, var(--purple));\n}\n\n.category-scroller .category-chip .chip-count {\n  font-size: 11px;\n  font-weight: 800;\n  background: rgba(0, 0, 0, 0.06);\n  padding: 1px 7px;\n  border-radius: 999px;\n}\n\n.category-scroller .category-chip:hover {\n  background: var(--purple-light);\n  color: var(--tuner-purple-text, var(--purple));\n  border-color: var(--tuner-purple-text, var(--purple));\n}\n\n.category-scroller .category-chip.active {\n  background: var(--purple);\n  color: #fff;\n  border-color: var(--tuner-purple-text, var(--purple));\n}\n\n.category-scroller .category-chip.active ion-icon {\n  color: #fff;\n}\n\n.category-scroller .category-chip.active .chip-count {\n  background: rgba(255, 255, 255, 0.25);\n  color: #fff;\n}\n\n.tool-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));\n  gap: 16px;\n}\n\n.tool-card {\n  background: var(--tuner-surface, #ffffff);\n  border: 1px solid var(--border-soft);\n  border-radius: 18px;\n  padding: 18px 20px;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  transition: all 0.2s ease;\n  box-shadow: 0 2px 10px rgba(109, 40, 217, 0.03);\n}\n\n.tool-card:hover {\n  transform: translateY(-3px);\n  border-color: var(--tuner-purple-text, var(--purple));\n  box-shadow: 0 8px 24px rgba(109, 40, 217, 0.08);\n}\n\n.tool-card:hover .card-chevron {\n  color: var(--tuner-purple-text, var(--purple));\n  transform: translateX(-3px);\n}\n\n.tool-card .tool-card-icon {\n  width: 44px;\n  height: 44px;\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  flex-shrink: 0;\n}\n\n.tool-card .tool-card-icon.accent-primary {\n  background: var(--purple-light);\n  color: var(--tuner-purple-text, var(--purple));\n}\n\n.tool-card .tool-card-icon.accent-warning {\n  background: var(--amber-light);\n  color: var(--amber-dark);\n}\n\n.tool-card .tool-card-icon.accent-success {\n  background: var(--emerald-light);\n  color: var(--emerald-dark);\n}\n\n.tool-card .tool-card-icon.accent-danger {\n  background: var(--rose-light);\n  color: var(--rose);\n}\n\n.tool-card .tool-card-icon.accent-secondary {\n  background: var(--sky-light);\n  color: var(--sky);\n}\n\n.tool-card .tool-card-icon.accent-tertiary {\n  background: var(--tuner-purple-soft, #ede9fe);\n  color: var(--tuner-purple-text, #7c3aed);\n}\n\n.tool-card .tool-card-copy {\n  flex: 1;\n  min-width: 0;\n}\n\n.tool-card .tool-card-copy .card-meta-row {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-bottom: 4px;\n}\n\n.tool-card .tool-card-copy .card-meta-row .category-pill {\n  font-size: 11px;\n  color: var(--muted);\n  font-weight: 700;\n}\n\n.tool-card .tool-card-copy .card-meta-row .badge-label {\n  font-size: 9px;\n  font-weight: 800;\n  background: var(--amber);\n  color: #422006;\n  padding: 1px 6px;\n  border-radius: 4px;\n}\n\n.tool-card .tool-card-copy h3 {\n  font-size: 15px;\n  font-weight: 800;\n  color: var(--ink);\n  margin-bottom: 2px;\n  line-height: 1.3;\n}\n\n.tool-card .tool-card-copy p {\n  font-size: 12px;\n  color: var(--ink-secondary);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.tool-card .card-chevron {\n  font-size: 16px;\n  color: var(--muted);\n  transition: all 0.2s ease;\n}\n\n.empty-tools-state {\n  text-align: center;\n  padding: 48px 24px;\n  background: var(--tuner-surface, #ffffff);\n  border: 1px solid var(--border-soft);\n  border-radius: 20px;\n}\n\n.empty-tools-state .empty-icon {\n  font-size: 40px;\n  margin-bottom: 12px;\n}\n\n.empty-tools-state h3 {\n  font-size: 18px;\n  font-weight: 800;\n  color: var(--ink);\n  margin-bottom: 8px;\n}\n\n.empty-tools-state p {\n  font-size: 14px;\n  color: var(--muted);\n  margin-bottom: 20px;\n}\n\n.tutorial-section {\n  margin-bottom: 40px;\n}\n\n.tutorial-card {\n  background: var(--tuner-surface, #ffffff);\n  border: 1px solid var(--border-soft);\n  border-radius: 28px;\n  padding: 36px 36px;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  align-items: center;\n  gap: 36px;\n  box-shadow: 0 10px 32px rgba(109, 40, 217, 0.05);\n}\n\n.tutorial-card .tutorial-copy h2 {\n  font-size: clamp(20px, 2.5vw, 26px);\n  font-weight: 900;\n  color: var(--ink);\n  margin-bottom: 14px;\n  line-height: 1.35;\n}\n\n.tutorial-card .tutorial-copy p {\n  font-size: 14px;\n  line-height: 1.9;\n  color: var(--ink-secondary);\n  margin-bottom: 24px;\n}\n\n.tutorial-card .tutorial-copy .tutorial-actions {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n\n.tutorial-card .video-frame-container {\n  width: 100%;\n}\n\n.tutorial-card .video-frame-container .video-frame {\n  position: relative;\n  width: 100%;\n  padding-top: 56.25%;\n  border-radius: 20px;\n  overflow: hidden;\n  border: 2px solid var(--border-soft);\n  box-shadow: 0 8px 24px rgba(109, 40, 217, 0.08);\n}\n\n.tutorial-card .video-frame-container .video-frame iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border: 0;\n}\n\n.feedback-cta-banner {\n  background: linear-gradient(135deg, var(--tuner-purple-soft, #f5f3ff) 0%, var(--tuner-purple-soft, #ede9fe) 100%);\n  border: 1px solid var(--tuner-purple-border, #ddd6fe);\n  border-radius: 24px;\n  padding: 32px 36px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 28px;\n  margin-bottom: 40px;\n}\n\n.feedback-cta-banner .feedback-copy .feedback-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  font-weight: 800;\n  color: var(--tuner-purple-text, var(--purple));\n  margin-bottom: 8px;\n}\n\n.feedback-cta-banner .feedback-copy .feedback-badge .sparkle-icon {\n  color: var(--amber);\n}\n\n.feedback-cta-banner .feedback-copy h3 {\n  font-size: 20px;\n  font-weight: 900;\n  color: var(--tuner-purple-text, var(--purple-dark));\n  margin-bottom: 8px;\n}\n\n.feedback-cta-banner .feedback-copy p {\n  font-size: 14px;\n  line-height: 1.85;\n  color: var(--tuner-purple-text, #5b21b6);\n  max-width: 680px;\n}\n\n@media (max-width: 960px) {\n  .tutorial-card {\n    grid-template-columns: 1fr;\n    gap: 24px;\n    padding: 28px 24px;\n  }\n\n  .feedback-cta-banner {\n    flex-direction: column;\n    align-items: flex-start;\n    padding: 28px 24px;\n  }\n}\n\n@media (max-width: 768px) {\n  .nav-shell {\n    padding: 10px 16px;\n  }\n\n  .main-nav {\n    display: none;\n  }\n\n  .tuner-hero {\n    padding: 28px 20px;\n  }\n\n  .hero-trust-strip {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 14px;\n  }\n  .hero-trust-strip .trust-divider {\n    display: none;\n  }\n\n  .featured-grid {\n    grid-template-columns: 1fr;\n  }\n\n  .tool-grid {\n    grid-template-columns: 1fr;\n  }\n}\n\n@keyframes sparkle-pulse {\n  0%, 100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n  50% {\n    transform: scale(1.3);\n    opacity: 0.7;\n  }\n}\n\n@keyframes float-decor {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-14px);\n  }\n}\n\n@keyframes slide-down {\n  from {\n    opacity: 0;\n    transform: translateY(-8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n\n:host-context(.dark-theme) {\n  color-scheme: dark;\n  color: var(--tuner-text);\n  --tuner-page: #11151e;\n  --tuner-surface: #1c2230;\n  --tuner-soft: #252e3d;\n  --tuner-border: #465269;\n  --tuner-text: #edf1f8;\n  --tuner-muted: #b2bfd1;\n  --tuner-header: rgba(28, 34, 48, 0.94);\n  --tuner-overlay: rgba(28, 34, 48, 0.95);\n  --tuner-purple-text: #c4b5fd;\n  --tuner-purple-soft: #302444;\n  --tuner-purple-border: #72579b;\n  --tuner-info-text: #93c5fd;\n  --tuner-info-soft: #1d304c;\n  --tuner-info-border: #466b9a;\n  --tuner-warning-text: #fcd477;\n  --tuner-warning-soft: #3b3020;\n  --tuner-warning-border: #93743d;\n  --tuner-success-text: #86efac;\n  --tuner-success-soft: #19392e;\n  --tuner-success-border: #417d60;\n  --tuner-danger-text: #fda4af;\n  --tuner-danger-soft: #402631;\n  --tuner-danger-border: #985367;\n  --tuner-teal-text: #7de4d4;\n  --tuner-teal-soft: #193a3a;\n  --tuner-teal-border: #437f7c;\n}\n\n:host-context(.dark-theme) input:not([type=range]):not([type=checkbox]):not([type=radio]):not([type=button]):not([type=submit]):not([type=file]),\n:host-context(.dark-theme) textarea,\n:host-context(.dark-theme) select {\n  color: var(--tuner-text);\n  background-color: var(--tuner-soft);\n}\n\n:host-context(.dark-theme) input::placeholder, :host-context(.dark-theme) textarea::placeholder {\n  color: var(--tuner-muted);\n  opacity: 0.75;\n}\n\n:host-context(.dark-theme) ion-header.learning-header {\n  --background: var(--tuner-header);\n  background: var(--tuner-header);\n  border-bottom-color: var(--tuner-border);\n}\n\n:host-context(.dark-theme) ion-content {\n  --background: var(--tuner-page);\n  --color: var(--tuner-text);\n}\n\n:host-context(.dark-theme) ion-card:not([color]), :host-context(.dark-theme) ion-list, :host-context(.dark-theme) ion-item:not([color]), :host-context(.dark-theme) ion-item-divider:not([color]) {\n  --background: var(--tuner-surface);\n  --color: var(--tuner-text);\n  --border-color: var(--tuner-border);\n}\n\n:host-context(.dark-theme) ion-list {\n  background: var(--tuner-surface);\n}\n\n:host-context(.dark-theme) ion-card-title, :host-context(.dark-theme) ion-card-subtitle {\n  color: var(--tuner-text);\n}\n\n:host-context(.dark-theme) ion-card[color=lightest], :host-context(.dark-theme) ion-item[color=lightest], :host-context(.dark-theme) ion-fab-button[color=lightest] {\n  --ion-color-base: var(--tuner-surface);\n  --ion-color-contrast: var(--tuner-text);\n  --ion-color-shade: var(--tuner-soft);\n  --ion-color-tint: var(--tuner-soft);\n}\n\n:host-context(.dark-theme) ion-text[color=dark], :host-context(.dark-theme) ion-label[color=dark] {\n  --ion-color-base: var(--tuner-text);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR1bmVyLXBsdXMuY29tcG9uZW50LnNjc3MiLCJfdGhlbWUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRQTtFQUNFLGlDQUFBO0VBQ0EsNENBQUE7RUFDQSxvQ0FBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpREFBQTtFQUNBLHVDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnREFBQTtFQUNBLGlEQUFBO0VBQ0Esc0NBQUE7RUFDQSxrQkFBQTtFQUNBLGtEQUFBO0VBQ0EsbURBQUE7RUFDQSxlQUFBO0VBQ0EsK0NBQUE7RUFDQSxzQ0FBQTtFQUNBLDRDQUFBO0VBQ0Esc0NBQUE7RUFDQSx1Q0FBQTtFQUNBLDJDQUFBO0VBQ0Esd0NBQUE7RUFDQSx3Q0FBQTtFQUNBLDRCQUFBO0VBRUEsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlGQUFBO0FBUkY7O0FBV0E7RUFBSSxzQkFBQTtBQVBKOztBQVFBO0VBQUksY0FBQTtFQUFnQixxQkFBQTtBQUhwQjs7QUFJQTtFQUFnQixhQUFBO0FBQWhCOztBQUNBO0VBQVMsZUFBQTtFQUFpQixTQUFBO0VBQVcsdUJBQUE7QUFLckM7O0FBSkE7RUFBWSx3Q0FBQTtBQVFaOztBQVBBO0VBQ0UsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBVUY7O0FBUkE7RUFBVyxvQkFBQTtFQUFzQixjQUFBO0FBYWpDOztBQVpBO0VBQW9CLFNBQUE7RUFBVyxjQUFBO0FBaUIvQjs7QUFaQTtFQUNFLDBEQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQ0FBQTtFQUNBLDhDQUFBO0VBQ0EsMkNBQUE7RUFDQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQWVGOztBQWJFO0VBQVcsYUFBQTtBQWdCYjs7QUFiQTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUFnQkY7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O0VBQ0Esc0JBQUE7RUFDQSxzQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0EsMEJBQUE7RUFDQSwwQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLCtCQUFBO0VBQ0EsNkJBQUE7RUFDQSw2QkFBQTtFQUNBLCtCQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0EsMEJBQUE7RUFDQSwwQkFBQTtFQUNBLDRCQUFBO0FEcW1DSjs7QUNsbUNJOzs7RUFHRSx3QkFBQTtFQUNBLG1DQUFBO0FEb21DTjs7QUNqbUNJO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0FEbW1DTjs7QUNobUNJO0VBQ0UsaUNBQUE7RUFDQSwrQkFBQTtFQUNBLHdDQUFBO0FEa21DTjs7QUNobUNJO0VBQWMsK0JBQUE7RUFBaUMsMEJBQUE7QURvbUNuRDs7QUNubUNJO0VBQ0Usa0NBQUE7RUFDQSwwQkFBQTtFQUNBLG1DQUFBO0FEcW1DTjs7QUNubUNJO0VBQVcsZ0NBQUE7QURzbUNmOztBQ3JtQ0k7RUFBb0Msd0JBQUE7QUR3bUN4Qzs7QUN2bUNJO0VBQ0Usc0NBQUE7RUFDQSx1Q0FBQTtFQUNBLG9DQUFBO0VBQ0EsbUNBQUE7QUR5bUNOOztBQ3ZtQ0k7RUFBa0QsbUNBQUE7QUQwbUN0RCIsImZpbGUiOiJ0dW5lci1wbHVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi90aGVtZSc7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gQXZhbEFtb296IC0gQmF6b3llIEF2YWwgQW1vb3ogKNio2KfYstmI24wg2KfZiNmEINii2YXZiNiyKVxyXG4vLyBNYXRjaGVzIGxlYXJuaW5nLWxhbmRpbmcgdGhlbWU6IHNvZnQgbGlsYWMvcHVycGxlLCBzdW5ueSBhbWJlciwgbWludCBlbWVyYWxkLFxyXG4vLyByb3VuZGVkIGNhcmRzLCBwYXN0ZWwgaWNvbiBjaGlwcywgYW5kIHdhcm0gUGVyc2lhbiB0eXBvZ3JhcGh5LlxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbjpob3N0IHtcclxuICAtLWluazogI3t0dW5lci1jb2xvcih0ZXh0LCAjMWUxYjRiKX07XHJcbiAgLS1pbmstc2Vjb25kYXJ5OiAje3R1bmVyLWNvbG9yKG11dGVkLCAjNDc1NTY5KX07XHJcbiAgLS1tdXRlZDogI3t0dW5lci1jb2xvcihtdXRlZCwgIzY0NzQ4Yil9O1xyXG4gIC0tcHVycGxlOiAjNmQyOGQ5O1xyXG4gIC0tcHVycGxlLWRhcms6ICM1ODFjODc7XHJcbiAgLS1wdXJwbGUtbGlnaHQ6ICN7dHVuZXItY29sb3IocHVycGxlLXNvZnQsICNlZGU5ZmUpfTtcclxuICAtLXB1cnBsZS1nbG93OiByZ2JhKDEwOSwgNDAsIDIxNywgMC4xNik7XHJcbiAgLS1hbWJlcjogI2Y1OWUwYjtcclxuICAtLWFtYmVyLWRhcms6ICN7dHVuZXItY29sb3Iod2FybmluZy10ZXh0LCAjZDk3NzA2KX07XHJcbiAgLS1hbWJlci1saWdodDogI3t0dW5lci1jb2xvcih3YXJuaW5nLXNvZnQsICNmZWYzYzcpfTtcclxuICAtLWFtYmVyLWdsb3c6IHJnYmEoMjQ1LCAxNTgsIDExLCAwLjE4KTtcclxuICAtLWVtZXJhbGQ6ICMxMGI5ODE7XHJcbiAgLS1lbWVyYWxkLWRhcms6ICN7dHVuZXItY29sb3Ioc3VjY2Vzcy10ZXh0LCAjMDU5NjY5KX07XHJcbiAgLS1lbWVyYWxkLWxpZ2h0OiAje3R1bmVyLWNvbG9yKHN1Y2Nlc3Mtc29mdCwgI2QxZmFlNSl9O1xyXG4gIC0tcm9zZTogI2Y0M2Y1ZTtcclxuICAtLXJvc2UtbGlnaHQ6ICN7dHVuZXItY29sb3IoZGFuZ2VyLXNvZnQsICNmZmU0ZTYpfTtcclxuICAtLXNreTogI3t0dW5lci1jb2xvcihpbmZvLXRleHQsICMwMjg0YzcpfTtcclxuICAtLXNreS1saWdodDogI3t0dW5lci1jb2xvcihpbmZvLXNvZnQsICNlMGYyZmUpfTtcclxuICAtLXBhcGVyOiAje3R1bmVyLWNvbG9yKHN1cmZhY2UsICNmZmZmZmYpfTtcclxuICAtLWJnLWNhbnZhczogI3t0dW5lci1jb2xvcihwYWdlLCAjZmNmYmZlKX07XHJcbiAgLS1ib3JkZXItc29mdDogI3t0dW5lci1jb2xvcihib3JkZXIsICNlZGU5ZjYpfTtcclxuICAtLWNhcmQtYmc6ICN7dHVuZXItY29sb3Ioc3VyZmFjZSwgI2ZmZmZmZil9O1xyXG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNhbnZhcyk7XHJcbiAgLS1pb24tdGV4dC1jb2xvcjogdmFyKC0taW5rKTtcclxuXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgY29sb3I6IHZhcigtLWluayk7XHJcbiAgZm9udC1mYW1pbHk6IHZhcigtLWlvbi1mb250LWZhbWlseSwgXCJTaGFibmFtLU1lZGl1bVwiLCBcIlZhemlybWF0blwiLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWYpO1xyXG59XHJcblxyXG4qIHsgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxyXG5hIHsgY29sb3I6IGluaGVyaXQ7IHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxyXG5idXR0b24sIGlucHV0IHsgZm9udDogaW5oZXJpdDsgfVxyXG5idXR0b24geyBjdXJzb3I6IHBvaW50ZXI7IGJvcmRlcjogMDsgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IH1cclxuYnV0dG9uLCBhIHsgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDsgfVxyXG5idXR0b246Zm9jdXMtdmlzaWJsZSwgYTpmb2N1cy12aXNpYmxlLCBpbnB1dDpmb2N1cy12aXNpYmxlIHtcclxuICBvdXRsaW5lOiAzcHggc29saWQgI2FjODhmMjtcclxuICBvdXRsaW5lLW9mZnNldDogM3B4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuaW9uLWljb24geyBwb2ludGVyLWV2ZW50czogbm9uZTsgZmxleC1zaHJpbms6IDA7IH1cclxuaDEsIGgyLCBoMywgaDQsIHAgeyBtYXJnaW46IDA7IGNvbG9yOiBpbmhlcml0OyB9XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBUb3AgTmF2aWdhdGlvbiBIZWFkZXJcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLmxlYXJuaW5nLWhlYWRlciB7XHJcbiAgYmFja2dyb3VuZDogdHVuZXItY29sb3IoaGVhZGVyLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTQpKTtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTZweCk7XHJcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTZweCk7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggMjBweCByZ2JhKDk5LCA2MywgMTYzLCAwLjA1KTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLXNvZnQpO1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgdG9wOiAwO1xyXG4gIHotaW5kZXg6IDUwO1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG5cclxuICAmOjphZnRlciB7IGRpc3BsYXk6IG5vbmU7IH1cclxufVxyXG5cclxuLm5hdi1zaGVsbCB7XHJcbiAgbWF4LXdpZHRoOiAxMjgwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDEycHggMjRweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGdhcDogMTZweDtcclxuICBtaW4taGVpZ2h0OiA3NnB4O1xyXG59XHJcblxyXG4ubWVudS10b2dnbGUge1xyXG4gIHdpZHRoOiA0MnB4O1xyXG4gIGhlaWdodDogNDJweDtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXB1cnBsZS1saWdodCk7XHJcbiAgY29sb3I6IHR1bmVyLWNvbG9yKHB1cnBsZS10ZXh0LCB2YXIoLS1wdXJwbGUpKTtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2U7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogdHVuZXItY29sb3IocHVycGxlLXNvZnQsICNkZWQ3ZmIpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA0KTtcclxuICB9XHJcbn1cclxuXHJcbi5icmFuZCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDEwcHg7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbn1cclxuXHJcbi5icmFuZC1sb2dvLXdyYXAge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gIGltZyB7XHJcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICB9XHJcbn1cclxuXHJcbi5icmFuZC1zcGFya2xlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAtNXB4O1xyXG4gIGluc2V0LWlubGluZS1lbmQ6IC02cHg7XHJcbiAgY29sb3I6IHZhcigtLWFtYmVyKTtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgYW5pbWF0aW9uOiBzcGFya2xlLXB1bHNlIDJzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xyXG59XHJcblxyXG4uYnJhbmQtdGl0bGVzIHtcclxuICBiIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY29sb3I6IHR1bmVyLWNvbG9yKHB1cnBsZS10ZXh0LCB2YXIoLS1wdXJwbGUpKTtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMS4yNTtcclxuICB9XHJcblxyXG4gIHNtYWxsIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY29sb3I6IHZhcigtLW11dGVkKTtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDFweDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgfVxyXG59XHJcblxyXG4ubWFpbi1uYXYge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBnYXA6IDhweDtcclxuICBmbGV4OiAxO1xyXG5cclxuICAubmF2LWxpbmstYnRuIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogNnB4O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIHBhZGRpbmc6IDhweCAxNHB4O1xyXG4gICAgY29sb3I6IHZhcigtLWluayk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZTtcclxuXHJcbiAgICBpb24taWNvbiB7IGZvbnQtc2l6ZTogMTZweDsgY29sb3I6IHR1bmVyLWNvbG9yKHB1cnBsZS10ZXh0LCB2YXIoLS1wdXJwbGUpKTsgfVxyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBjb2xvcjogdHVuZXItY29sb3IocHVycGxlLXRleHQsIHZhcigtLXB1cnBsZSkpO1xyXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wdXJwbGUtbGlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgICYuYWN0aXZlLW5hdiB7XHJcbiAgICAgIGNvbG9yOiB0dW5lci1jb2xvcihwdXJwbGUtdGV4dCwgdmFyKC0tcHVycGxlKSk7XHJcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXB1cnBsZS1saWdodCk7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ubmF2LWFjdGlvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDEwcHg7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbn1cclxuXHJcbi5pY29uLWJ1dHRvbiB7XHJcbiAgd2lkdGg6IDQycHg7XHJcbiAgaGVpZ2h0OiA0MnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgYmFja2dyb3VuZDogdHVuZXItY29sb3Ioc29mdCwgI2Y4ZmFmYyk7XHJcbiAgY29sb3I6IHZhcigtLWluayk7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLXNvZnQpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZTtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBjb2xvcjogdHVuZXItY29sb3IocHVycGxlLXRleHQsIHZhcigtLXB1cnBsZSkpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB0dW5lci1jb2xvcihwdXJwbGUtdGV4dCwgdmFyKC0tcHVycGxlKSk7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wdXJwbGUtbGlnaHQpO1xyXG4gIH1cclxufVxyXG5cclxuLmxvZ2luLWJ1dHRvbiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDhweDtcclxuICBwYWRkaW5nOiA5cHggMThweDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1wdXJwbGUpIDAlLCB2YXIoLS1wdXJwbGUtZGFyaykgMTAwJSk7XHJcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDE0cHggdmFyKC0tcHVycGxlLWdsb3cpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZTtcclxuXHJcbiAgaW9uLWljb24geyBmb250LXNpemU6IDE4cHg7IH1cclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbiAgICBib3gtc2hhZG93OiAwIDZweCAxOHB4IHJnYmEoMTA5LCA0MCwgMjE3LCAwLjMyKTtcclxuICB9XHJcbn1cclxuXHJcbi5oZWFkZXItc2VhcmNoLWJhciB7XHJcbiAgYmFja2dyb3VuZDogdHVuZXItY29sb3Ioc3VyZmFjZSwgI2ZmZik7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1zb2Z0KTtcclxuICBwYWRkaW5nOiAxMnB4IDI0cHg7XHJcbiAgYW5pbWF0aW9uOiBzbGlkZS1kb3duIC4yNXMgZWFzZS1vdXQ7XHJcblxyXG4gIC5zZWFyY2gtaW5wdXQtd3JhcCB7XHJcbiAgICBtYXgtd2lkdGg6IDY4MHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMTBweDtcclxuICAgIGJhY2tncm91bmQ6IHR1bmVyLWNvbG9yKHNvZnQsICNmOGZhZmMpO1xyXG4gICAgYm9yZGVyOiAxLjVweCBzb2xpZCB2YXIoLS1ib3JkZXItc29mdCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG4gICAgcGFkZGluZzogNnB4IDE0cHg7XHJcblxyXG4gICAgaW9uLWljb24geyBjb2xvcjogdmFyKC0tbXV0ZWQpOyBmb250LXNpemU6IDIwcHg7IH1cclxuXHJcbiAgICBpbnB1dCB7XHJcbiAgICAgIGZsZXg6IDE7XHJcbiAgICAgIGJvcmRlcjogMDtcclxuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgY29sb3I6IHZhcigtLWluayk7XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcblxyXG4gICAgICAmOjpwbGFjZWhvbGRlciB7IGNvbG9yOiB2YXIoLS1tdXRlZCk7IH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIExheW91dCAmIFBhZ2UgV3JhcHBlclxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4udHVuZXItcGx1cy1jb250ZW50IHtcclxuICAtLWJhY2tncm91bmQ6IHZhcigtLWJnLWNhbnZhcyk7XHJcbn1cclxuXHJcbi5wYWdlLXdyYXBwZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA4MHB4KTtcclxuICBwYWRkaW5nLWJvdHRvbTogNTZweDtcclxufVxyXG5cclxuLmJhY2tkcm9wLWdsb3dzIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaW5zZXQ6IDA7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgei1pbmRleDogMDtcclxufVxyXG5cclxuLmdsb3ctb3JiIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGZpbHRlcjogYmx1cig4MHB4KTtcclxuICBvcGFjaXR5OiAwLjY7XHJcbn1cclxuXHJcbi5nbG93LXB1cnBsZSB7XHJcbiAgd2lkdGg6IDQ0MHB4O1xyXG4gIGhlaWdodDogNDQwcHg7XHJcbiAgdG9wOiAtMTAwcHg7XHJcbiAgaW5zZXQtaW5saW5lLWVuZDogLTEwMHB4O1xyXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHZhcigtLXB1cnBsZS1nbG93KSwgdHJhbnNwYXJlbnQgNzAlKTtcclxufVxyXG5cclxuLmdsb3ctYW1iZXIge1xyXG4gIHdpZHRoOiAzODBweDtcclxuICBoZWlnaHQ6IDM4MHB4O1xyXG4gIHRvcDogMzUwcHg7XHJcbiAgaW5zZXQtaW5saW5lLXN0YXJ0OiAtMTIwcHg7XHJcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgdmFyKC0tYW1iZXItZ2xvdyksIHRyYW5zcGFyZW50IDcwJSk7XHJcbn1cclxuXHJcbi5nbG93LWVtZXJhbGQge1xyXG4gIHdpZHRoOiA0MDBweDtcclxuICBoZWlnaHQ6IDQwMHB4O1xyXG4gIGJvdHRvbTogMTAwcHg7XHJcbiAgaW5zZXQtaW5saW5lLWVuZDogMTAlO1xyXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYmEoMTYsIDE4NSwgMTI5LCAwLjEyKSwgdHJhbnNwYXJlbnQgNzAlKTtcclxufVxyXG5cclxuLmZsb2F0aW5nLWRlY29yIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIG9wYWNpdHk6IDAuMjg7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgYW5pbWF0aW9uOiBmbG9hdC1kZWNvciA2cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcclxuXHJcbiAgJi5wZW5jaWwgeyB0b3A6IDExMHB4OyBpbnNldC1pbmxpbmUtc3RhcnQ6IDQlOyBhbmltYXRpb24tZGVsYXk6IDBzOyB9XHJcbiAgJi5zdGFyIHsgdG9wOiAyMjBweDsgaW5zZXQtaW5saW5lLWVuZDogNiU7IGZvbnQtc2l6ZTogMjhweDsgY29sb3I6IHZhcigtLWFtYmVyKTsgb3BhY2l0eTogMC41OyBhbmltYXRpb24tZGVsYXk6IDEuNXM7IH1cclxuICAmLmJvb2sgeyB0b3A6IDU4MHB4OyBpbnNldC1pbmxpbmUtc3RhcnQ6IDMlOyBhbmltYXRpb24tZGVsYXk6IDNzOyB9XHJcbiAgJi5zcGFya2xlIHsgdG9wOiA4MDBweDsgaW5zZXQtaW5saW5lLWVuZDogNCU7IGNvbG9yOiB0dW5lci1jb2xvcihwdXJwbGUtdGV4dCwgdmFyKC0tcHVycGxlKSk7IG9wYWNpdHk6IDAuNDsgYW5pbWF0aW9uLWRlbGF5OiA0LjVzOyB9XHJcbn1cclxuXHJcbi50dW5lci1tYWluIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMTtcclxuICBtYXgtd2lkdGg6IDEyODBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBwYWRkaW5nOiAzMnB4IDI0cHggMDtcclxufVxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gSGVybyBTZWN0aW9uXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi50dW5lci1oZXJvIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZDogdHVuZXItY29sb3Ioc3VyZmFjZSwgI2ZmZmZmZik7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLXNvZnQpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDI4cHg7XHJcbiAgcGFkZGluZzogNDRweCA0MHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMTJweCAzNnB4IHJnYmEoMTA5LCA0MCwgMjE3LCAwLjA1KTtcclxuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICY6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGhlaWdodDogNXB4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCB2YXIoLS1wdXJwbGUpIDAlLCB2YXIoLS1hbWJlcikgNTAlLCB2YXIoLS1lbWVyYWxkKSAxMDAlKTtcclxuICB9XHJcbn1cclxuXHJcbi5leWVicm93LXdyYXAge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgZ2FwOiAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbn1cclxuXHJcbi5leWVicm93IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogNnB4O1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBmb250LXdlaWdodDogODAwO1xyXG4gIGNvbG9yOiB0dW5lci1jb2xvcihwdXJwbGUtdGV4dCwgdmFyKC0tcHVycGxlKSk7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tcHVycGxlLWxpZ2h0KTtcclxuICBwYWRkaW5nOiA1cHggMTRweDtcclxuICBib3JkZXItcmFkaXVzOiA5OTlweDtcclxuXHJcbiAgLmxpdHRsZS1zdGFyIHsgY29sb3I6IHZhcigtLWFtYmVyKTsgfVxyXG59XHJcblxyXG4uaGVyby1jaGlwIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogNnB4O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiB2YXIoLS1lbWVyYWxkLWRhcmspO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWVtZXJhbGQtbGlnaHQpO1xyXG4gIHBhZGRpbmc6IDVweCAxMnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xyXG5cclxuICBpb24taWNvbiB7IGZvbnQtc2l6ZTogMTRweDsgfVxyXG59XHJcblxyXG4udHVuZXItaGVybyBoMSB7XHJcbiAgZm9udC1zaXplOiBjbGFtcCgyNHB4LCAzLjh2dywgMzZweCk7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICBsaW5lLWhlaWdodDogMS40NTtcclxuICBjb2xvcjogdmFyKC0taW5rKTtcclxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG5cclxuICAuaGlnaGxpZ2h0IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGNvbG9yOiB0dW5lci1jb2xvcihwdXJwbGUtdGV4dCwgdmFyKC0tcHVycGxlKSk7XHJcblxyXG4gICAgc3ZnIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBib3R0b206IC02cHg7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDEycHg7XHJcbiAgICAgIHN0cm9rZTogdmFyKC0tYW1iZXIpO1xyXG4gICAgICBzdHJva2Utd2lkdGg6IDMuNTtcclxuICAgICAgZmlsbDogbm9uZTtcclxuICAgICAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmhlcm8tZGVzYyB7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjk1O1xyXG4gIGNvbG9yOiB2YXIoLS1pbmstc2Vjb25kYXJ5KTtcclxuICBtYXgtd2lkdGg6IDgyMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDI4cHg7XHJcbn1cclxuXHJcbi5oZXJvLWFjdGlvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgZ2FwOiAxMnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDMycHg7XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiA4cHg7XHJcbiAgcGFkZGluZzogMTJweCAyMnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAuMjVzIGVhc2U7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuXHJcbiAgJi5zbWFsbCB7XHJcbiAgICBwYWRkaW5nOiA4cHggMTZweDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAmLnByaW1hcnkge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0tcHVycGxlKSAwJSwgdmFyKC0tcHVycGxlLWRhcmspIDEwMCUpO1xyXG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IDAgNnB4IDE4cHggdmFyKC0tcHVycGxlLWdsb3cpO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMTBweCAyNHB4IHJnYmEoMTA5LCA0MCwgMjE3LCAwLjI4KTtcclxuICAgIH1cclxuXHJcbiAgICAuYWN0aW9uLWFycm93IHtcclxuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4ycyBlYXNlO1xyXG4gICAgfVxyXG5cclxuICAgICY6aG92ZXIgLmFjdGlvbi1hcnJvdyB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNHB4KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuc2Vjb25kYXJ5IHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLXB1cnBsZS1saWdodCk7XHJcbiAgICBjb2xvcjogdHVuZXItY29sb3IocHVycGxlLXRleHQsIHZhcigtLXB1cnBsZSkpICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHR1bmVyLWNvbG9yKHB1cnBsZS1zb2Z0LCAjZGVkN2ZiKTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5naG9zdCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0dW5lci1jb2xvcihzb2Z0LCAjZjhmYWZjKTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1zb2Z0KTtcclxuICAgIGNvbG9yOiB2YXIoLS1pbmstc2Vjb25kYXJ5KSAhaW1wb3J0YW50O1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wdXJwbGUtbGlnaHQpO1xyXG4gICAgICBjb2xvcjogdHVuZXItY29sb3IocHVycGxlLXRleHQsIHZhcigtLXB1cnBsZSkpICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogdHVuZXItY29sb3IocHVycGxlLXRleHQsIHZhcigtLXB1cnBsZSkpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmhlcm8tdHJ1c3Qtc3RyaXAge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgZ2FwOiAyMHB4O1xyXG4gIHBhZGRpbmctdG9wOiAyNHB4O1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItc29mdCk7XHJcblxyXG4gIC50cnVzdC1pdGVtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAxMnB4O1xyXG5cclxuICAgIC50cnVzdC1pY29uIHtcclxuICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgYmFja2dyb3VuZDogdmFyKC0tYW1iZXItbGlnaHQpO1xyXG4gICAgICBjb2xvcjogdmFyKC0tYW1iZXItZGFyayk7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC50cnVzdC10ZXh0IHtcclxuICAgICAgYiB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWluayk7XHJcbiAgICAgIH1cclxuICAgICAgc21hbGwge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudHJ1c3QtZGl2aWRlciB7XHJcbiAgICB3aWR0aDogMXB4O1xyXG4gICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYm9yZGVyLXNvZnQpO1xyXG4gIH1cclxufVxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gTWVtYmVyIEFjY2VzcyBCYW5uZXJcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLmFjY2Vzcy1iYW5uZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgZ2FwOiAyMHB4O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHR1bmVyLWNvbG9yKHdhcm5pbmctc29mdCwgI2ZlZmNlOCkgMCUsIHR1bmVyLWNvbG9yKHdhcm5pbmctc29mdCwgI2ZlZjNjNykgMTAwJSk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdHVuZXItY29sb3Iod2FybmluZy1ib3JkZXIsICNmZGU2OGEpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgcGFkZGluZzogMThweCAyNHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDMycHg7XHJcblxyXG4gIC5hY2Nlc3MtaWNvbiB7XHJcbiAgICB3aWR0aDogNDRweDtcclxuICAgIGhlaWdodDogNDRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB0dW5lci1jb2xvcihzdXJmYWNlLCAjZmZmZmZmKTtcclxuICAgIGNvbG9yOiB2YXIoLS1hbWJlci1kYXJrKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBmbGV4LXNocmluazogMDtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgyNDUsIDE1OCwgMTEsIDAuMTUpO1xyXG4gIH1cclxuXHJcbiAgLmFjY2Vzcy1jb250ZW50IHtcclxuICAgIGZsZXg6IDE7XHJcblxyXG4gICAgc3Ryb25nIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIGNvbG9yOiB0dW5lci1jb2xvcih3YXJuaW5nLXRleHQsICM5MjQwMGUpO1xyXG4gICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDJweDtcclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgY29sb3I6IHR1bmVyLWNvbG9yKHdhcm5pbmctdGV4dCwgI2I0NTMwOSk7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIFNlY3Rpb24gSGVhZGluZ3NcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLnNlY3Rpb24taGVhZGluZyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGdhcDogMTZweDtcclxuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG5cclxuICAuc2VjdGlvbi1raWNrZXIge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiA2cHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgY29sb3I6IHR1bmVyLWNvbG9yKHB1cnBsZS10ZXh0LCB2YXIoLS1wdXJwbGUpKTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcblxyXG4gICAgLmtpY2tlci1zcGFya2xlIHsgY29sb3I6IHZhcigtLWFtYmVyKTsgfVxyXG4gIH1cclxuXHJcbiAgaDIge1xyXG4gICAgZm9udC1zaXplOiBjbGFtcCgyMHB4LCAyLjZ2dywgMjZweCk7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgY29sb3I6IHZhcigtLWluayk7XHJcbiAgfVxyXG5cclxuICAuc2VjdGlvbi1jb3VudC1jaGlwIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBjb2xvcjogdHVuZXItY29sb3IocHVycGxlLXRleHQsIHZhcigtLXB1cnBsZSkpO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tcHVycGxlLWxpZ2h0KTtcclxuICAgIHBhZGRpbmc6IDZweCAxNHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOTk5cHg7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIH1cclxufVxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gRmVhdHVyZWQgVG9vbHMgR3JpZFxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4uZmVhdHVyZWQtc2VjdGlvbiB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDRweDtcclxufVxyXG5cclxuLmZlYXR1cmVkLWdyaWQge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMjkwcHgsIDFmcikpO1xyXG4gIGdhcDogMThweDtcclxufVxyXG5cclxuLmZlYXR1cmVkLWNhcmQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kOiB0dW5lci1jb2xvcihzdXJmYWNlLCAjZmZmZmZmKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItc29mdCk7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBwYWRkaW5nOiAyMnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgZ2FwOiAxNnB4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAuMjVzIGVhc2U7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggMTZweCByZ2JhKDEwOSwgNDAsIDIxNywgMC4wNCk7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00cHgpO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB0dW5lci1jb2xvcihwdXJwbGUtdGV4dCwgdmFyKC0tcHVycGxlKSk7XHJcbiAgICBib3gtc2hhZG93OiAwIDEycHggMzBweCByZ2JhKDEwOSwgNDAsIDIxNywgMC4wOSk7XHJcblxyXG4gICAgLmFycm93LWljb24ge1xyXG4gICAgICBjb2xvcjogdHVuZXItY29sb3IocHVycGxlLXRleHQsIHZhcigtLXB1cnBsZSkpO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTRweCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudG9vbC1pY29uLXdyYXAge1xyXG4gICAgd2lkdGg6IDQ4cHg7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIGZsZXgtc2hyaW5rOiAwO1xyXG5cclxuICAgICYuYWNjZW50LXByaW1hcnkgeyBiYWNrZ3JvdW5kOiB2YXIoLS1wdXJwbGUtbGlnaHQpOyBjb2xvcjogdHVuZXItY29sb3IocHVycGxlLXRleHQsIHZhcigtLXB1cnBsZSkpOyB9XHJcbiAgICAmLmFjY2VudC13YXJuaW5nIHsgYmFja2dyb3VuZDogdmFyKC0tYW1iZXItbGlnaHQpOyBjb2xvcjogdmFyKC0tYW1iZXItZGFyayk7IH1cclxuICAgICYuYWNjZW50LXN1Y2Nlc3MgeyBiYWNrZ3JvdW5kOiB2YXIoLS1lbWVyYWxkLWxpZ2h0KTsgY29sb3I6IHZhcigtLWVtZXJhbGQtZGFyayk7IH1cclxuICAgICYuYWNjZW50LWRhbmdlciB7IGJhY2tncm91bmQ6IHZhcigtLXJvc2UtbGlnaHQpOyBjb2xvcjogdmFyKC0tcm9zZSk7IH1cclxuICAgICYuYWNjZW50LXNlY29uZGFyeSB7IGJhY2tncm91bmQ6IHZhcigtLXNreS1saWdodCk7IGNvbG9yOiB2YXIoLS1za3kpOyB9XHJcbiAgICAmLmFjY2VudC10ZXJ0aWFyeSB7IGJhY2tncm91bmQ6IHR1bmVyLWNvbG9yKHB1cnBsZS1zb2Z0LCAjZWRlOWZlKTsgY29sb3I6IHR1bmVyLWNvbG9yKHB1cnBsZS10ZXh0LCAjN2MzYWVkKTsgfVxyXG4gIH1cclxuXHJcbiAgLnRvb2wtY29weSB7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgbWluLXdpZHRoOiAwO1xyXG5cclxuICAgIC5jYXJkLXRvcC1yb3cge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBnYXA6IDhweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG5cclxuICAgICAgLmNhdGVnb3J5LXRhZyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLW11dGVkKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnRvb2wtYmFkZ2Uge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWFtYmVyKTtcclxuICAgICAgICBjb2xvcjogIzQyMjAwNjtcclxuICAgICAgICBwYWRkaW5nOiAycHggOHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGgzIHtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICBjb2xvcjogdmFyKC0taW5rKTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMS4zNTtcclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMS43O1xyXG4gICAgICBjb2xvcjogdmFyKC0taW5rLXNlY29uZGFyeSk7XHJcbiAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XHJcbiAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYXJyb3ctaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBjb2xvcjogdmFyKC0tbXV0ZWQpO1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlO1xyXG4gIH1cclxufVxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gVG9vbHMgRXhwbG9yZXIgJiBGaWx0ZXJcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLnRvb2wtZXhwbG9yZXIge1xyXG4gIG1hcmdpbi1ib3R0b206IDQ0cHg7XHJcbn1cclxuXHJcbi5leHBsb3Jlci1maWx0ZXItYmFyIHtcclxuICBiYWNrZ3JvdW5kOiB0dW5lci1jb2xvcihzdXJmYWNlLCAjZmZmZmZmKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItc29mdCk7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBwYWRkaW5nOiAxNnB4IDIwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiAxNHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDE2cHggcmdiYSgxMDksIDQwLCAyMTcsIDAuMDMpO1xyXG59XHJcblxyXG4uZmlsdGVyLXNlYXJjaC1ib3gge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDEycHg7XHJcbiAgYmFja2dyb3VuZDogdHVuZXItY29sb3Ioc29mdCwgI2Y4ZmFmYyk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLXNvZnQpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgcGFkZGluZzogMTBweCAxNnB4O1xyXG5cclxuICBpb24taWNvbiB7IGZvbnQtc2l6ZTogMjBweDsgY29sb3I6IHR1bmVyLWNvbG9yKHB1cnBsZS10ZXh0LCB2YXIoLS1wdXJwbGUpKTsgfVxyXG5cclxuICBpbnB1dCB7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogdmFyKC0taW5rKTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcblxyXG4gICAgJjo6cGxhY2Vob2xkZXIgeyBjb2xvcjogdmFyKC0tbXV0ZWQpOyBmb250LXNpemU6IDEzcHg7IH1cclxuICB9XHJcblxyXG4gIC5jbGVhci1zZWFyY2gtYnRuIHtcclxuICAgIGNvbG9yOiB2YXIoLS1tdXRlZCk7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAmOmhvdmVyIHsgY29sb3I6IHZhcigtLXJvc2UpOyB9XHJcbiAgfVxyXG59XHJcblxyXG4uY2F0ZWdvcnktc2Nyb2xsZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDhweDtcclxuICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gIHBhZGRpbmctYm90dG9tOiA0cHg7XHJcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xyXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHsgZGlzcGxheTogbm9uZTsgfVxyXG5cclxuICAuY2F0ZWdvcnktY2hpcCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDhweDtcclxuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xyXG4gICAgYmFja2dyb3VuZDogdHVuZXItY29sb3Ioc29mdCwgI2Y4ZmFmYyk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItc29mdCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA5OTlweDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogdmFyKC0taW5rKTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2U7XHJcblxyXG4gICAgaW9uLWljb24geyBmb250LXNpemU6IDE2cHg7IGNvbG9yOiB0dW5lci1jb2xvcihwdXJwbGUtdGV4dCwgdmFyKC0tcHVycGxlKSk7IH1cclxuXHJcbiAgICAuY2hpcC1jb3VudCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjA2KTtcclxuICAgICAgcGFkZGluZzogMXB4IDdweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogOTk5cHg7XHJcbiAgICB9XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXB1cnBsZS1saWdodCk7XHJcbiAgICAgIGNvbG9yOiB0dW5lci1jb2xvcihwdXJwbGUtdGV4dCwgdmFyKC0tcHVycGxlKSk7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogdHVuZXItY29sb3IocHVycGxlLXRleHQsIHZhcigtLXB1cnBsZSkpO1xyXG4gICAgfVxyXG5cclxuICAgICYuYWN0aXZlIHtcclxuICAgICAgYmFja2dyb3VuZDogdmFyKC0tcHVycGxlKTtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogdHVuZXItY29sb3IocHVycGxlLXRleHQsIHZhcigtLXB1cnBsZSkpO1xyXG5cclxuICAgICAgaW9uLWljb24geyBjb2xvcjogI2ZmZjsgfVxyXG5cclxuICAgICAgLmNoaXAtY291bnQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi50b29sLWdyaWQge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzEwcHgsIDFmcikpO1xyXG4gIGdhcDogMTZweDtcclxufVxyXG5cclxuLnRvb2wtY2FyZCB7XHJcbiAgYmFja2dyb3VuZDogdHVuZXItY29sb3Ioc3VyZmFjZSwgI2ZmZmZmZik7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLXNvZnQpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XHJcbiAgcGFkZGluZzogMThweCAyMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDE2cHg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgxMDksIDQwLCAyMTcsIDAuMDMpO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcclxuICAgIGJvcmRlci1jb2xvcjogdHVuZXItY29sb3IocHVycGxlLXRleHQsIHZhcigtLXB1cnBsZSkpO1xyXG4gICAgYm94LXNoYWRvdzogMCA4cHggMjRweCByZ2JhKDEwOSwgNDAsIDIxNywgMC4wOCk7XHJcblxyXG4gICAgLmNhcmQtY2hldnJvbiB7XHJcbiAgICAgIGNvbG9yOiB0dW5lci1jb2xvcihwdXJwbGUtdGV4dCwgdmFyKC0tcHVycGxlKSk7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtM3B4KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC50b29sLWNhcmQtaWNvbiB7XHJcbiAgICB3aWR0aDogNDRweDtcclxuICAgIGhlaWdodDogNDRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZmxleC1zaHJpbms6IDA7XHJcblxyXG4gICAgJi5hY2NlbnQtcHJpbWFyeSB7IGJhY2tncm91bmQ6IHZhcigtLXB1cnBsZS1saWdodCk7IGNvbG9yOiB0dW5lci1jb2xvcihwdXJwbGUtdGV4dCwgdmFyKC0tcHVycGxlKSk7IH1cclxuICAgICYuYWNjZW50LXdhcm5pbmcgeyBiYWNrZ3JvdW5kOiB2YXIoLS1hbWJlci1saWdodCk7IGNvbG9yOiB2YXIoLS1hbWJlci1kYXJrKTsgfVxyXG4gICAgJi5hY2NlbnQtc3VjY2VzcyB7IGJhY2tncm91bmQ6IHZhcigtLWVtZXJhbGQtbGlnaHQpOyBjb2xvcjogdmFyKC0tZW1lcmFsZC1kYXJrKTsgfVxyXG4gICAgJi5hY2NlbnQtZGFuZ2VyIHsgYmFja2dyb3VuZDogdmFyKC0tcm9zZS1saWdodCk7IGNvbG9yOiB2YXIoLS1yb3NlKTsgfVxyXG4gICAgJi5hY2NlbnQtc2Vjb25kYXJ5IHsgYmFja2dyb3VuZDogdmFyKC0tc2t5LWxpZ2h0KTsgY29sb3I6IHZhcigtLXNreSk7IH1cclxuICAgICYuYWNjZW50LXRlcnRpYXJ5IHsgYmFja2dyb3VuZDogdHVuZXItY29sb3IocHVycGxlLXNvZnQsICNlZGU5ZmUpOyBjb2xvcjogdHVuZXItY29sb3IocHVycGxlLXRleHQsICM3YzNhZWQpOyB9XHJcbiAgfVxyXG5cclxuICAudG9vbC1jYXJkLWNvcHkge1xyXG4gICAgZmxleDogMTtcclxuICAgIG1pbi13aWR0aDogMDtcclxuXHJcbiAgICAuY2FyZC1tZXRhLXJvdyB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGdhcDogNnB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcblxyXG4gICAgICAuY2F0ZWdvcnktcGlsbCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1tdXRlZCk7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmJhZGdlLWxhYmVsIHtcclxuICAgICAgICBmb250LXNpemU6IDlweDtcclxuICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWFtYmVyKTtcclxuICAgICAgICBjb2xvcjogIzQyMjAwNjtcclxuICAgICAgICBwYWRkaW5nOiAxcHggNnB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGgzIHtcclxuICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICBjb2xvcjogdmFyKC0taW5rKTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMS4zO1xyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pbmstc2Vjb25kYXJ5KTtcclxuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY2FyZC1jaGV2cm9uIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiB2YXIoLS1tdXRlZCk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2U7XHJcbiAgfVxyXG59XHJcblxyXG4uZW1wdHktdG9vbHMtc3RhdGUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiA0OHB4IDI0cHg7XHJcbiAgYmFja2dyb3VuZDogdHVuZXItY29sb3Ioc3VyZmFjZSwgI2ZmZmZmZik7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLXNvZnQpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcblxyXG4gIC5lbXB0eS1pY29uIHsgZm9udC1zaXplOiA0MHB4OyBtYXJnaW4tYm90dG9tOiAxMnB4OyB9XHJcbiAgaDMgeyBmb250LXNpemU6IDE4cHg7IGZvbnQtd2VpZ2h0OiA4MDA7IGNvbG9yOiB2YXIoLS1pbmspOyBtYXJnaW4tYm90dG9tOiA4cHg7IH1cclxuICBwIHsgZm9udC1zaXplOiAxNHB4OyBjb2xvcjogdmFyKC0tbXV0ZWQpOyBtYXJnaW4tYm90dG9tOiAyMHB4OyB9XHJcbn1cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIFZpZGVvIFR1dG9yaWFsIFNlY3Rpb25cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLnR1dG9yaWFsLXNlY3Rpb24ge1xyXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbn1cclxuXHJcbi50dXRvcmlhbC1jYXJkIHtcclxuICBiYWNrZ3JvdW5kOiB0dW5lci1jb2xvcihzdXJmYWNlLCAjZmZmZmZmKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItc29mdCk7XHJcbiAgYm9yZGVyLXJhZGl1czogMjhweDtcclxuICBwYWRkaW5nOiAzNnB4IDM2cHg7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDM2cHg7XHJcbiAgYm94LXNoYWRvdzogMCAxMHB4IDMycHggcmdiYSgxMDksIDQwLCAyMTcsIDAuMDUpO1xyXG5cclxuICAudHV0b3JpYWwtY29weSB7XHJcbiAgICBoMiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogY2xhbXAoMjBweCwgMi41dncsIDI2cHgpO1xyXG4gICAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgICBjb2xvcjogdmFyKC0taW5rKTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTRweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuMzU7XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuOTtcclxuICAgICAgY29sb3I6IHZhcigtLWluay1zZWNvbmRhcnkpO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC50dXRvcmlhbC1hY3Rpb25zIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgZ2FwOiAxMnB4O1xyXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudmlkZW8tZnJhbWUtY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIC52aWRlby1mcmFtZSB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHBhZGRpbmctdG9wOiA1Ni4yNSU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJvcmRlci1zb2Z0KTtcclxuICAgICAgYm94LXNoYWRvdzogMCA4cHggMjRweCByZ2JhKDEwOSwgNDAsIDIxNywgMC4wOCk7XHJcblxyXG4gICAgICBpZnJhbWUge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBUZWFjaGVyIEZlZWRiYWNrIENUQSBCYW5uZXJcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLmZlZWRiYWNrLWN0YS1iYW5uZXIge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHR1bmVyLWNvbG9yKHB1cnBsZS1zb2Z0LCAjZjVmM2ZmKSAwJSwgdHVuZXItY29sb3IocHVycGxlLXNvZnQsICNlZGU5ZmUpIDEwMCUpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHR1bmVyLWNvbG9yKHB1cnBsZS1ib3JkZXIsICNkZGQ2ZmUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XHJcbiAgcGFkZGluZzogMzJweCAzNnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgZ2FwOiAyOHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcblxyXG4gIC5mZWVkYmFjay1jb3B5IHtcclxuICAgIC5mZWVkYmFjay1iYWRnZSB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBnYXA6IDZweDtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICBjb2xvcjogdHVuZXItY29sb3IocHVycGxlLXRleHQsIHZhcigtLXB1cnBsZSkpO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcblxyXG4gICAgICAuc3BhcmtsZS1pY29uIHsgY29sb3I6IHZhcigtLWFtYmVyKTsgfVxyXG4gICAgfVxyXG5cclxuICAgIGgzIHtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgICBjb2xvcjogdHVuZXItY29sb3IocHVycGxlLXRleHQsIHZhcigtLXB1cnBsZS1kYXJrKSk7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMS44NTtcclxuICAgICAgY29sb3I6IHR1bmVyLWNvbG9yKHB1cnBsZS10ZXh0LCAjNWIyMWI2KTtcclxuICAgICAgbWF4LXdpZHRoOiA2ODBweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbi8vIFJlc3BvbnNpdmUgQWRqdXN0bWVudHNcclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk2MHB4KSB7XHJcbiAgLnR1dG9yaWFsLWNhcmQge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICBnYXA6IDI0cHg7XHJcbiAgICBwYWRkaW5nOiAyOHB4IDI0cHg7XHJcbiAgfVxyXG5cclxuICAuZmVlZGJhY2stY3RhLWJhbm5lciB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICBwYWRkaW5nOiAyOHB4IDI0cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAubmF2LXNoZWxsIHtcclxuICAgIHBhZGRpbmc6IDEwcHggMTZweDtcclxuICB9XHJcblxyXG4gIC5tYWluLW5hdiB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLnR1bmVyLWhlcm8ge1xyXG4gICAgcGFkZGluZzogMjhweCAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLmhlcm8tdHJ1c3Qtc3RyaXAge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgZ2FwOiAxNHB4O1xyXG5cclxuICAgIC50cnVzdC1kaXZpZGVyIHsgZGlzcGxheTogbm9uZTsgfVxyXG4gIH1cclxuXHJcbiAgLmZlYXR1cmVkLWdyaWQge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgfVxyXG5cclxuICAudG9vbC1ncmlkIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBzcGFya2xlLXB1bHNlIHtcclxuICAwJSwgMTAwJSB7IHRyYW5zZm9ybTogc2NhbGUoMSk7IG9wYWNpdHk6IDE7IH1cclxuICA1MCUgeyB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7IG9wYWNpdHk6IDAuNzsgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZsb2F0LWRlY29yIHtcclxuICAwJSwgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfVxyXG4gIDUwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTRweCk7IH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBzbGlkZS1kb3duIHtcclxuICBmcm9tIHsgb3BhY2l0eTogMDsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC04cHgpOyB9XHJcbiAgdG8geyBvcGFjaXR5OiAxOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH1cclxufVxyXG5cclxuQGluY2x1ZGUgdHVuZXItZGFyay10aGVtZTtcclxuIiwiLy8gS2VlcCB0aGUgb3JpZ2luYWwgbGlnaHQgY29sb3IgYXQgZWFjaCBjYWxsIHNpdGUuIFRva2VucyBleGlzdCBvbmx5IGluIGRhcmsgbW9kZS5cbkBmdW5jdGlvbiB0dW5lci1jb2xvcigkcm9sZSwgJGxpZ2h0KSB7XG4gIEByZXR1cm4gdmFyKC0tdHVuZXItI3skcm9sZX0sICN7JGxpZ2h0fSk7XG59XG5cbkBtaXhpbiB0dW5lci1kYXJrLXRoZW1lIHtcbiAgOmhvc3QtY29udGV4dCguZGFyay10aGVtZSkge1xuICAgIGNvbG9yLXNjaGVtZTogZGFyaztcbiAgICBjb2xvcjogdmFyKC0tdHVuZXItdGV4dCk7XG4gICAgLS10dW5lci1wYWdlOiAjMTExNTFlO1xuICAgIC0tdHVuZXItc3VyZmFjZTogIzFjMjIzMDtcbiAgICAtLXR1bmVyLXNvZnQ6ICMyNTJlM2Q7XG4gICAgLS10dW5lci1ib3JkZXI6ICM0NjUyNjk7XG4gICAgLS10dW5lci10ZXh0OiAjZWRmMWY4O1xuICAgIC0tdHVuZXItbXV0ZWQ6ICNiMmJmZDE7XG4gICAgLS10dW5lci1oZWFkZXI6IHJnYmEoMjgsIDM0LCA0OCwgMC45NCk7XG4gICAgLS10dW5lci1vdmVybGF5OiByZ2JhKDI4LCAzNCwgNDgsIDAuOTUpO1xuICAgIC0tdHVuZXItcHVycGxlLXRleHQ6ICNjNGI1ZmQ7XG4gICAgLS10dW5lci1wdXJwbGUtc29mdDogIzMwMjQ0NDtcbiAgICAtLXR1bmVyLXB1cnBsZS1ib3JkZXI6ICM3MjU3OWI7XG4gICAgLS10dW5lci1pbmZvLXRleHQ6ICM5M2M1ZmQ7XG4gICAgLS10dW5lci1pbmZvLXNvZnQ6ICMxZDMwNGM7XG4gICAgLS10dW5lci1pbmZvLWJvcmRlcjogIzQ2NmI5YTtcbiAgICAtLXR1bmVyLXdhcm5pbmctdGV4dDogI2ZjZDQ3NztcbiAgICAtLXR1bmVyLXdhcm5pbmctc29mdDogIzNiMzAyMDtcbiAgICAtLXR1bmVyLXdhcm5pbmctYm9yZGVyOiAjOTM3NDNkO1xuICAgIC0tdHVuZXItc3VjY2Vzcy10ZXh0OiAjODZlZmFjO1xuICAgIC0tdHVuZXItc3VjY2Vzcy1zb2Z0OiAjMTkzOTJlO1xuICAgIC0tdHVuZXItc3VjY2Vzcy1ib3JkZXI6ICM0MTdkNjA7XG4gICAgLS10dW5lci1kYW5nZXItdGV4dDogI2ZkYTRhZjtcbiAgICAtLXR1bmVyLWRhbmdlci1zb2Z0OiAjNDAyNjMxO1xuICAgIC0tdHVuZXItZGFuZ2VyLWJvcmRlcjogIzk4NTM2NztcbiAgICAtLXR1bmVyLXRlYWwtdGV4dDogIzdkZTRkNDtcbiAgICAtLXR1bmVyLXRlYWwtc29mdDogIzE5M2EzYTtcbiAgICAtLXR1bmVyLXRlYWwtYm9yZGVyOiAjNDM3ZjdjO1xuXG4gICAgLy8gTmF0aXZlIGNvbnRyb2xzIHdpdGhvdXQgYW4gZXhwbGljaXQgbGlnaHQgYmFja2dyb3VuZCBuZWVkIGEgZGFyayBzdXJmYWNlIHRvby5cbiAgICBpbnB1dDpub3QoW3R5cGU9J3JhbmdlJ10pOm5vdChbdHlwZT0nY2hlY2tib3gnXSk6bm90KFt0eXBlPSdyYWRpbyddKTpub3QoW3R5cGU9J2J1dHRvbiddKTpub3QoW3R5cGU9J3N1Ym1pdCddKTpub3QoW3R5cGU9J2ZpbGUnXSksXG4gICAgdGV4dGFyZWEsXG4gICAgc2VsZWN0IHtcbiAgICAgIGNvbG9yOiB2YXIoLS10dW5lci10ZXh0KTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXR1bmVyLXNvZnQpO1xuICAgIH1cblxuICAgIGlucHV0OjpwbGFjZWhvbGRlciwgdGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10dW5lci1tdXRlZCk7XG4gICAgICBvcGFjaXR5OiAwLjc1O1xuICAgIH1cblxuICAgIGlvbi1oZWFkZXIubGVhcm5pbmctaGVhZGVyIHtcbiAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0tdHVuZXItaGVhZGVyKTtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXR1bmVyLWhlYWRlcik7XG4gICAgICBib3JkZXItYm90dG9tLWNvbG9yOiB2YXIoLS10dW5lci1ib3JkZXIpO1xuICAgIH1cbiAgICBpb24tY29udGVudCB7IC0tYmFja2dyb3VuZDogdmFyKC0tdHVuZXItcGFnZSk7IC0tY29sb3I6IHZhcigtLXR1bmVyLXRleHQpOyB9XG4gICAgaW9uLWNhcmQ6bm90KFtjb2xvcl0pLCBpb24tbGlzdCwgaW9uLWl0ZW06bm90KFtjb2xvcl0pLCBpb24taXRlbS1kaXZpZGVyOm5vdChbY29sb3JdKSB7XG4gICAgICAtLWJhY2tncm91bmQ6IHZhcigtLXR1bmVyLXN1cmZhY2UpO1xuICAgICAgLS1jb2xvcjogdmFyKC0tdHVuZXItdGV4dCk7XG4gICAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0tdHVuZXItYm9yZGVyKTtcbiAgICB9XG4gICAgaW9uLWxpc3QgeyBiYWNrZ3JvdW5kOiB2YXIoLS10dW5lci1zdXJmYWNlKTsgfVxuICAgIGlvbi1jYXJkLXRpdGxlLCBpb24tY2FyZC1zdWJ0aXRsZSB7IGNvbG9yOiB2YXIoLS10dW5lci10ZXh0KTsgfVxuICAgIGlvbi1jYXJkW2NvbG9yPSdsaWdodGVzdCddLCBpb24taXRlbVtjb2xvcj0nbGlnaHRlc3QnXSwgaW9uLWZhYi1idXR0b25bY29sb3I9J2xpZ2h0ZXN0J10ge1xuICAgICAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0tdHVuZXItc3VyZmFjZSk7XG4gICAgICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0tdHVuZXItdGV4dCk7XG4gICAgICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0tdHVuZXItc29mdCk7XG4gICAgICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS10dW5lci1zb2Z0KTtcbiAgICB9XG4gICAgaW9uLXRleHRbY29sb3I9J2RhcmsnXSwgaW9uLWxhYmVsW2NvbG9yPSdkYXJrJ10geyAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS10dW5lci10ZXh0KTsgfVxuICB9XG59XG4iXX0= */";

/***/ }),

/***/ 10406:
/*!****************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/tuner-plus.component.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"interior-header\" [attr.dir]=\"language.direction\">\n  \n  <app-page-header titleKey=\"pageHeader.tuner-plus/tuner-plus\" fallback=\"/\">\n<div page-actions><button type=\"button\" class=\"icon-button search-toggle\" (click)=\"showSearchbar = !showSearchbar\" [attr.aria-expanded]=\"showSearchbar\" aria-label=\"جستجو در سامانه\" title=\"جستجو در سامانه\">\r\n        <ion-icon name=\"search-outline\" aria-hidden=\"true\"></ion-icon>\r\n      </button>\n</div>\n\n<div class=\"header-search-bar\" *ngIf=\"showSearchbar\">\r\n    <div class=\"search-input-wrap\">\r\n      <ion-icon name=\"search-outline\" aria-hidden=\"true\"></ion-icon>\r\n      <input type=\"search\" [(ngModel)]=\"queryText\" [placeholder]=\"'search.academy' | translate\" (keyup.enter)=\"search()\" autofocus />\r\n      <button type=\"button\" class=\"action-btn primary\" (click)=\"search()\">{{ 'common.search' | translate }}</button>\r\n      <button type=\"button\" class=\"action-btn ghost\" (click)=\"onCancel()\">{{ 'search.cancel' | translate }}</button>\r\n    </div>\r\n  </div>\n  </app-page-header>\n</ion-header>\r\n\r\n<ion-content class=\"tuner-plus-content\" [attr.dir]=\"language.direction\">\r\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n\r\n  <div class=\"page-wrapper\">\r\n    <!-- Ambient Backdrop Glows -->\r\n    <div class=\"backdrop-glows\" aria-hidden=\"true\">\r\n      <div class=\"glow-orb glow-purple\"></div>\r\n      <div class=\"glow-orb glow-amber\"></div>\r\n      <div class=\"glow-orb glow-emerald\"></div>\r\n    </div>\r\n\r\n    <!-- Playful Floating Elementary Decor -->\r\n    <span class=\"floating-decor pencil\" aria-hidden=\"true\">🎒</span>\r\n    <span class=\"floating-decor star\" aria-hidden=\"true\">✦</span>\r\n    <span class=\"floating-decor book\" aria-hidden=\"true\">📐</span>\r\n    <span class=\"floating-decor sparkle\" aria-hidden=\"true\">✨</span>\r\n\r\n    <main class=\"tuner-main\">\r\n      <!-- Hero Section -->\r\n      <section class=\"tuner-hero\" aria-labelledby=\"tuner-title\">\r\n        <div class=\"hero-shell\">\r\n          <div class=\"hero-copy\">\r\n            <div class=\"eyebrow-wrap\">\r\n              <span class=\"eyebrow\">\r\n                <span class=\"little-star\">✦</span>\r\n                {{ 'tunerPlus.eyebrow' | translate }}\r\n              </span>\r\n              <span class=\"hero-chip\">\r\n                <ion-icon name=\"sparkles\" aria-hidden=\"true\"></ion-icon>\r\n                {{ 'tunerPlus.engineeringTools' | translate }}\r\n              </span>\r\n            </div>\r\n\r\n            <h1 id=\"tuner-title\">\r\n              همراه هوشمند و کاربردی در کلاس درس:<br />\r\n              <span class=\"highlight\">\r\n                {{ 'nav.tunerPlus' | translate }}\r\n                <svg viewBox=\"0 0 360 20\" aria-hidden=\"true\">\r\n                  <path d=\"M5 13Q170 -5 355 10M30 18Q190 2 328 16\" />\r\n                </svg>\r\n              </span>\r\n            </h1>\r\n\r\n            <p class=\"hero-desc\">\r\n              {{ 'tunerPlus.heroDescription' | translate }}\r\n            </p>\r\n\r\n            <div class=\"hero-actions\">\r\n              <button type=\"button\" class=\"button primary glow\" (click)=\"scrollTo('tools-explorer')\">\r\n                <ion-icon name=\"construct-outline\" aria-hidden=\"true\"></ion-icon>\r\n                <span>کاوش جعبه‌ابزار بازوی اول آموز</span>\r\n                <ion-icon name=\"arrow-back-outline\" aria-hidden=\"true\" class=\"action-arrow\"></ion-icon>\r\n              </button>\r\n              <a routerLink=\"/Home\" fragment=\"courses\" class=\"button secondary\">\r\n                <ion-icon name=\"school-outline\" aria-hidden=\"true\"></ion-icon>\r\n                <span>{{ 'tunerPlus.courseAction' | translate }}</span>\r\n              </a>\r\n              <button type=\"button\" class=\"button ghost\" (click)=\"scrollTo('tutorial-section')\">\r\n                <ion-icon name=\"play-circle-outline\" aria-hidden=\"true\"></ion-icon>\r\n                <span>{{ 'tunerPlus.gettingStarted' | translate }}</span>\r\n              </button>\r\n            </div>\r\n\r\n            <!-- Trust Strip -->\r\n            <div class=\"hero-trust-strip\">\r\n              <div class=\"trust-item\">\r\n                <span class=\"trust-icon\"><ion-icon name=\"sparkles-outline\" aria-hidden=\"true\"></ion-icon></span>\r\n                <div class=\"trust-text\">\r\n                  <b>+{{ animatedToolCount }} ابزار و محاسبه‌گر فعال</b>\r\n                  <small>{{ 'tunerPlus.specialistTools' | translate }} {{ 'tunerPlus.forTuning' | translate }}</small>\r\n                </div>\r\n              </div>\r\n              <div class=\"trust-divider\" aria-hidden=\"true\"></div>\r\n              <div class=\"trust-item\">\r\n                <span class=\"trust-icon\"><ion-icon name=\"shield-checkmark-outline\" aria-hidden=\"true\"></ion-icon></span>\r\n                <div class=\"trust-text\">\r\n                  <b>منطبق بر نیاز معلمان و کلاس</b>\r\n                  <small>محیطی ساده، سریع و رایگان برای همکاران</small>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </section>\r\n\r\n      <!-- Member Access Alert if not logged in -->\r\n      <section *ngIf=\"!login\" class=\"access-banner\">\r\n        <div class=\"access-icon\">\r\n          <ion-icon name=\"lock-open-outline\" aria-hidden=\"true\"></ion-icon>\r\n        </div>\r\n        <div class=\"access-content\">\r\n          <strong>{{ 'tunerPlus.memberAccess' | translate }}</strong>\r\n          <p>{{ 'tunerPlus.memberDescription' | translate }}</p>\r\n        </div>\r\n        <a [href]=\"language.url('/Account')\" (click)=\"goLogin()\" class=\"button primary small\">\r\n          <ion-icon name=\"log-in-outline\" aria-hidden=\"true\"></ion-icon>\r\n          <span>{{ 'common.login' | translate }}</span>\r\n        </a>\r\n      </section>\r\n\r\n      <!-- Featured Tools Section -->\r\n      <section class=\"featured-section\" id=\"featured-section\" aria-labelledby=\"featured-title\">\r\n        <div class=\"section-heading\">\r\n          <div class=\"heading-text\">\r\n            <span class=\"section-kicker\"><span class=\"kicker-sparkle\">✦</span> {{ 'tunerPlus.quickStart' | translate }}</span>\r\n            <h2 id=\"featured-title\">{{ 'tunerPlus.featuredTitle' | translate }}</h2>\r\n          </div>\r\n          <span class=\"section-count-chip\">\r\n            {{ featuredTools.length }} {{ 'tunerPlus.featuredCount' | translate }}\r\n          </span>\r\n        </div>\r\n\r\n        <div class=\"featured-grid\">\r\n          <a *ngFor=\"let tool of featuredTools; let i = index\" [routerLink]=\"tool.route\" class=\"featured-card\" [style.animation-delay]=\"(i * 60) + 'ms'\">\r\n            <div [class]=\"'tool-icon-wrap accent-' + tool.color\">\r\n              <ion-icon [name]=\"tool.icon\" aria-hidden=\"true\"></ion-icon>\r\n            </div>\r\n            <div class=\"tool-copy\">\r\n              <div class=\"card-top-row\">\r\n                <span class=\"category-tag\">{{ categoryName(tool.category) }}</span>\r\n                <span *ngIf=\"tool.badge\" class=\"tool-badge\">{{ tool.badge }}</span>\r\n              </div>\r\n              <h3>{{ toolText(tool, 'title') }}</h3>\r\n              <p>{{ toolText(tool, 'subtitle') }}</p>\r\n            </div>\r\n            <ion-icon class=\"arrow-icon\" name=\"arrow-back-outline\" aria-hidden=\"true\"></ion-icon>\r\n          </a>\r\n        </div>\r\n      </section>\r\n\r\n      <!-- Tools Explorer Section -->\r\n      <section class=\"tool-explorer\" id=\"tools-explorer\" aria-labelledby=\"tools-title\">\r\n        <div class=\"section-heading\">\r\n          <div class=\"heading-text\">\r\n            <span class=\"section-kicker\"><span class=\"kicker-sparkle\">✦</span> {{ 'tunerPlus.quickSearch' | translate }}</span>\r\n            <h2 id=\"tools-title\">{{ 'tunerPlus.findTool' | translate }}</h2>\r\n          </div>\r\n          <span class=\"section-count-chip\">\r\n            {{ visibleTools.length }} {{ 'nav.tools' | translate }}\r\n          </span>\r\n        </div>\r\n\r\n        <!-- In-page Filter & Search Controls -->\r\n        <div class=\"explorer-filter-bar\">\r\n          <div class=\"filter-search-box\">\r\n            <ion-icon name=\"search-outline\" aria-hidden=\"true\"></ion-icon>\r\n            <input type=\"text\" [(ngModel)]=\"toolFilterQuery\" placeholder=\"جستجوی سریع در نام یا توضیحات ابزارها...\" />\r\n            <button *ngIf=\"toolFilterQuery\" type=\"button\" class=\"clear-search-btn\" (click)=\"toolFilterQuery = ''\" title=\"پاک کردن\">\r\n              <ion-icon name=\"close-circle\" aria-hidden=\"true\"></ion-icon>\r\n            </button>\r\n          </div>\r\n\r\n          <!-- Category Chips Scroller -->\r\n          <div class=\"category-scroller\" role=\"tablist\" [attr.aria-label]=\"'tunerPlus.categories' | translate\">\r\n            <button *ngFor=\"let category of categories\" type=\"button\" class=\"category-chip\" [class.active]=\"activeCategory === category\" (click)=\"selectCategory(category)\">\r\n              <ion-icon [name]=\"getCategoryIcon(category)\" aria-hidden=\"true\"></ion-icon>\r\n              <span>{{ categoryName(category) }}</span>\r\n              <span class=\"chip-count\">{{ getCategoryCount(category) }}</span>\r\n            </button>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- Tool Cards Grid -->\r\n        <div class=\"tool-grid\" *ngIf=\"visibleTools.length > 0\">\r\n          <a *ngFor=\"let tool of visibleTools; let i = index\" class=\"tool-card\" [routerLink]=\"tool.route\">\r\n            <div [class]=\"'tool-card-icon accent-' + tool.color\">\r\n              <ion-icon [name]=\"tool.icon\" aria-hidden=\"true\"></ion-icon>\r\n            </div>\r\n            <div class=\"tool-card-copy\">\r\n              <div class=\"card-meta-row\">\r\n                <span class=\"category-pill\">{{ categoryName(tool.category) }}</span>\r\n                <small *ngIf=\"tool.badge\" class=\"badge-label\">{{ tool.badge }}</small>\r\n              </div>\r\n              <h3>{{ toolText(tool, 'title') }}</h3>\r\n              <p>{{ toolText(tool, 'subtitle') }}</p>\r\n            </div>\r\n            <ion-icon name=\"arrow-back-outline\" class=\"card-chevron\" aria-hidden=\"true\"></ion-icon>\r\n          </a>\r\n        </div>\r\n\r\n        <!-- Empty Filter State -->\r\n        <div class=\"empty-tools-state\" *ngIf=\"visibleTools.length === 0\">\r\n          <div class=\"empty-icon\">🎒</div>\r\n          <h3>ابزاری با این مشخصات یافت نشد</h3>\r\n          <p>می‌توانید عبارت جستجو را تغییر دهید یا دسته‌بندی دیگری را انتخاب کنید.</p>\r\n          <button type=\"button\" class=\"button secondary small\" (click)=\"toolFilterQuery = ''; activeCategory = 'همه ابزارها'\">\r\n            مشاهده همه ابزارها\r\n          </button>\r\n        </div>\r\n      </section>\r\n\r\n      <!-- Video Tutorial Section -->\r\n      <section class=\"tutorial-section\" id=\"tutorial-section\" aria-labelledby=\"tutorial-title\">\r\n        <div class=\"tutorial-card\">\r\n          <div class=\"tutorial-copy\">\r\n            <div class=\"eyebrow-wrap\">\r\n              <span class=\"eyebrow\">\r\n                <span class=\"little-star\">✦</span>\r\n                {{ 'tunerPlus.gettingStarted' | translate }}\r\n              </span>\r\n            </div>\r\n            <h2 id=\"tutorial-title\">{{ 'tunerPlus.tutorialTitle' | translate }}</h2>\r\n            <p>{{ 'tunerPlus.tutorialDescription' | translate }}</p>\r\n            <div class=\"tutorial-actions\">\r\n              <a [href]=\"checkVideoUrl()\" target=\"_blank\" class=\"button primary small\">\r\n                <ion-icon name=\"play-circle-outline\" aria-hidden=\"true\"></ion-icon>\r\n                <span>{{ 'tunerPlus.watchVideo' | translate }}</span>\r\n              </a>\r\n              <a routerLink=\"/CommonQuestions\" class=\"button ghost small\">\r\n                <ion-icon name=\"help-circle-outline\" aria-hidden=\"true\"></ion-icon>\r\n                <span>{{ 'menu.faq' | translate }}</span>\r\n              </a>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"video-frame-container\">\r\n            <div class=\"video-frame\">\r\n              <iframe [src]=\"checkURL()\" [title]=\"'tunerPlus.videoTitle' | translate\" allowfullscreen=\"true\"></iframe>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </section>\r\n\r\n      <!-- Teacher Feedback CTA Banner -->\r\n      <section class=\"feedback-cta-banner\">\r\n        <div class=\"feedback-copy\">\r\n          <div class=\"feedback-badge\">\r\n            <span class=\"sparkle-icon\">✦</span>\r\n            <span>ایده یا ابزار آموزشی جدیدی پیشنهاد دارید؟</span>\r\n          </div>\r\n          <h3>بازوی اول آموز را متناسب با نیاز کلاس خود بسازید</h3>\r\n          <p>اگر برای برنامه‌ریزی درسی، ثبت نمرات، یا بازی‌های الفبا و ریاضی نیاز به محاسبه‌گر یا ابزار هوشمند جدیدی دارید، از بخش پشتیبانی به ما اطلاع دهید.</p>\r\n        </div>\r\n        <a routerLink=\"/Suport\" class=\"button primary\">\r\n          <ion-icon name=\"chatbubbles-outline\" aria-hidden=\"true\"></ion-icon>\r\n          <span>ارسال پیشنهاد به پشتیبانی</span>\r\n        </a>\r\n      </section>\r\n    </main>\r\n  </div>\r\n\r\n  <app-footer></app-footer>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_view_pages_tuner-plus_tuner-plus_module_ts.js.map