"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_view_pages_tuner-plus_dyno_dyno_module_ts"],{

/***/ 35362:
/*!**************************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/dyno/cylinder-head-airflow-dialog.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CylinderHeadAirflowDialogComponent": () => (/* binding */ CylinderHeadAirflowDialogComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _cylinder_head_airflow_dialog_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cylinder-head-airflow-dialog.component.html?ngResource */ 23532);
/* harmony import */ var _cylinder_head_airflow_dialog_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cylinder-head-airflow-dialog.component.scss?ngResource */ 32921);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 93819);



/* eslint-disable @typescript-eslint/member-ordering */



const MAX_DATA_POINTS = 10;
const DEFAULT_DATA_POINTS = 8;
let CylinderHeadAirflowDialogComponent = class CylinderHeadAirflowDialogComponent {
    constructor(fb, modalCtrl) {
        this.fb = fb;
        this.modalCtrl = modalCtrl;
        /** Pass an existing CylinderHeadAirflowData to edit it, or omit for a fresh entry. */
        this.data = null;
        this.maxDataPoints = MAX_DATA_POINTS;
        this.dataPointOptions = Array.from({ length: MAX_DATA_POINTS - 1 }, (_, i) => i + 2); // 2..10
    }
    ngOnInit() {
        this.form = this.fb.group({
            description: [this.data?.description ?? '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            dataPoints: [this.data?.dataPoints ?? DEFAULT_DATA_POINTS, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.min(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.max(MAX_DATA_POINTS)]],
            intake: this.fb.group({
                testDiameterMm: [this.data?.intake.testDiameterMm ?? 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.min(0)]],
                pressureDropCmH2O: [this.data?.intake.pressureDropCmH2O ?? 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.min(0)]],
                points: this.fb.array(this.buildPointRows(this.data?.intake.points)),
            }),
            exhaust: this.fb.group({
                testDiameterMm: [this.data?.exhaust.testDiameterMm ?? 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.min(0)]],
                pressureDropCmH2O: [this.data?.exhaust.pressureDropCmH2O ?? 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.min(0)]],
                points: this.fb.array(this.buildPointRows(this.data?.exhaust.points)),
            }),
        });
        this.form.get('dataPoints').valueChanges.subscribe((count) => this.syncRowCount(count));
    }
    // ---------------------------------------------------------------------
    get intakePoints() {
        return this.form.get('intake.points');
    }
    get exhaustPoints() {
        return this.form.get('exhaust.points');
    }
    buildPointRows(existing) {
        const count = this.data?.dataPoints ?? DEFAULT_DATA_POINTS;
        return Array.from({ length: MAX_DATA_POINTS }, (_, i) => {
            const p = existing?.[i];
            return this.fb.group({
                liftMm: [i < count ? (p?.liftMm ?? null) : null],
                flowCfm: [i < count ? (p?.flowCfm ?? null) : null],
            });
        });
    }
    syncRowCount(count) {
        // Rows beyond `count` are visually disabled/hidden in the template ("****"
        // placeholder in Dyno2000); we keep all MAX_DATA_POINTS rows in the
        // FormArray and just clear the ones that fall outside the active range.
        [this.intakePoints, this.exhaustPoints].forEach(arr => {
            arr.controls.forEach((ctrl, i) => {
                if (i >= count) {
                    ctrl.get('liftMm').setValue(null, { emitEvent: false });
                    ctrl.get('flowCfm').setValue(null, { emitEvent: false });
                }
            });
        });
    }
    isRowActive(index) {
        return index < (this.form.get('dataPoints').value ?? DEFAULT_DATA_POINTS);
    }
    // ---------------------------------------------------------------------
    // Actions
    // ---------------------------------------------------------------------
    ok() {
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }
        const raw = this.form.getRawValue();
        const count = raw.dataPoints;
        const trim = (pts) => pts.slice(0, count);
        const result = {
            description: raw.description,
            dataPoints: count,
            intake: {
                testDiameterMm: raw.intake.testDiameterMm,
                pressureDropCmH2O: raw.intake.pressureDropCmH2O,
                points: trim(raw.intake.points),
            },
            exhaust: {
                testDiameterMm: raw.exhaust.testDiameterMm,
                pressureDropCmH2O: raw.exhaust.pressureDropCmH2O,
                points: trim(raw.exhaust.points),
            },
        };
        this.modalCtrl.dismiss(result);
    }
    cancel() {
        this.modalCtrl.dismiss(null);
    }
    /** TODO: wire to file storage — persist the current airflow data as a reusable .flw-equivalent entry. */
    saveAs() {
        // Intentionally left for integration with the platform's file/asset service.
    }
    /** TODO: wire to file storage — load a previously saved custom airflow entry into the form. */
    open() {
        // Intentionally left for integration with the platform's file/asset service.
    }
    /** Derive exhaust flow from intake flow (or vice versa) using a typical Ex/Int ratio, as Dyno2000 offers. */
    calcOthers() {
        // Placeholder: a typical exhaust/intake flow ratio (~75-80%) could seed
        // the missing side; left as a TODO pending calibration against real data.
    }
    resetAll() {
        this.form.reset({
            description: '',
            dataPoints: DEFAULT_DATA_POINTS,
            intake: { testDiameterMm: 0, pressureDropCmH2O: 0 },
            exhaust: { testDiameterMm: 0, pressureDropCmH2O: 0 },
        });
        [this.intakePoints, this.exhaustPoints].forEach(arr => {
            arr.controls.forEach(ctrl => ctrl.reset({ liftMm: null, flowCfm: null }));
        });
    }
};
CylinderHeadAirflowDialogComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController }
];
CylinderHeadAirflowDialogComponent.propDecorators = {
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input }]
};
CylinderHeadAirflowDialogComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-cylinder-head-airflow-dialog',
        template: _cylinder_head_airflow_dialog_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_cylinder_head_airflow_dialog_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CylinderHeadAirflowDialogComponent);



/***/ }),

/***/ 81926:
/*!**************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/dyno/dyno-calc.util.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calcCamshaft": () => (/* binding */ calcCamshaft),
/* harmony export */   "calcCombustionSpaceCc": () => (/* binding */ calcCombustionSpaceCc),
/* harmony export */   "calcShortBlock": () => (/* binding */ calcShortBlock)
/* harmony export */ });
/* eslint-disable prefer-arrow/prefer-arrow-functions */
// dyno-calc.util.ts
// Pure, deterministic helper calculations used to drive the live-updating
// read-only fields in the input panel (Cyl Vol, Total Vol, Combustion Space,
// Lobe Center, Duration, Overlap, ICA/ECA, shifted valve events).
//
// NOTE: These are geometric/definitional formulas only. The separate
// engineering estimate of VE / IMEP / FMEP / BMEP lives in dyno.service.ts.
/** Per-cylinder swept volume (cc) and total displacement (cc) from bore/stroke/cylinders in mm. */
function calcShortBlock(input) {
    const { bore, stroke, cylinders } = input;
    const cylVolumeCc = bore > 0 && stroke > 0
        ? (Math.PI / 4) * Math.pow(bore / 10, 2) * (stroke / 10) // cm^3 = cc
        : 0;
    const totalVolumeCc = cylVolumeCc * (cylinders || 0);
    return {
        cylVolumeCc: round(cylVolumeCc, 2),
        totalVolumeCc: round(totalVolumeCc, 2),
    };
}
/** Combustion chamber volume (cc) implied by per-cylinder volume and compression ratio. */
function calcCombustionSpaceCc(cylVolumeCc, compressionRatio) {
    if (!compressionRatio || compressionRatio <= 1) {
        return 0;
    }
    return round(cylVolumeCc / (compressionRatio - 1), 2);
}
/**
 * Valve-event / duration / overlap math.
 *
 *  Int Duration = IVO + 180 + IVC
 *  Exh Duration = EVO + 180 + EVC
 *  Overlap      = IVO + EVC
 *
 * Timing Advance(+)/Retard(-) shifts all four nominal events symmetrically,
 * which keeps Duration and Overlap constant while shifting the VE curve
 * along the RPM axis. Advancing the cam (positive value) opens the intake
 * earlier (larger IVO) and closes it earlier (smaller IVC), and equivalently
 * for the exhaust events.
 */
function calcCamshaft(input) {
    const { ivoBTDC, ivcABDC, evoBBDC, evcATDC, timingAdvRetDeg } = input;
    const intDurationDeg = ivoBTDC + 180 + ivcABDC;
    const exhDurationDeg = evoBBDC + 180 + evcATDC;
    const valveOverlapDeg = ivoBTDC + evcATDC;
    // Intake Centerline Angle (ATDC) = half of intake duration, measured from TDC, minus IVO
    const icaATDC = intDurationDeg / 2 - ivoBTDC;
    // Exhaust centerline (BTDC) is half duration before EVC (ATDC).
    const ecaBTDC = exhDurationDeg / 2 - evcATDC;
    // Lobe Center = midpoint between ICA and ECA (as displayed in the UI)
    const lobeCenterDeg = round((icaATDC + ecaBTDC) / 2, 1);
    const shift = timingAdvRetDeg || 0;
    const ivoShifted = ivoBTDC + shift;
    const ivcShifted = ivcABDC - shift;
    const evoShifted = evoBBDC + shift;
    const evcShifted = evcATDC - shift;
    return {
        lobeCenterDeg,
        valveOverlapDeg: round(valveOverlapDeg, 1),
        intDurationDeg: round(intDurationDeg, 1),
        exhDurationDeg: round(exhDurationDeg, 1),
        icaATDC: round(icaATDC, 1),
        ecaBTDC: round(ecaBTDC, 1),
        ivoShifted: round(ivoShifted, 1),
        ivcShifted: round(ivcShifted, 1),
        evoShifted: round(evoShifted, 1),
        evcShifted: round(evcShifted, 1),
    };
}
function round(value, decimals) {
    const factor = Math.pow(10, decimals);
    return Math.round((value + Number.EPSILON) * factor) / factor;
}


/***/ }),

/***/ 34302:
/*!***************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/dyno/dyno-chart.util.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildLineChartSvg": () => (/* binding */ buildLineChartSvg),
/* harmony export */   "powerTorqueSeries": () => (/* binding */ powerTorqueSeries)
/* harmony export */ });
// dyno-chart.util.ts
// Pure-SVG line-chart builder for the dyno "Graph" tab (Power/Torque vs RPM,
// and any other RPM-indexed series such as BMEP/VE). No external chart
// library dependency, consistent with the rest of the module.
const DEFAULTS = {
    width: 760,
    height: 420,
    paddingLeft: 56,
    paddingRight: 24,
    paddingTop: 20,
    paddingBottom: 40,
    yAxisLabel: '',
    xAxisLabel: 'Engine RPM',
};
/** Convenience: build Power(hp) and Torque(lb-ft) series directly from result rows. */
function powerTorqueSeries(rows) {
    return {
        rpm: rows.map(r => r.rpm),
        series: [
            { label: 'Power (hp)', color: '#d33', values: rows.map(r => r.powerFlyHp) },
            { label: 'Torque (lb-ft)', color: '#36c', values: rows.map(r => r.torqueFlyLbFt) },
        ],
    };
}
function buildLineChartSvg(rpm, series, options = {}) {
    const o = { ...DEFAULTS, ...options };
    const plotW = o.width - o.paddingLeft - o.paddingRight;
    const plotH = o.height - o.paddingTop - o.paddingBottom;
    const allValues = series.reduce((acc, s) => acc.concat(s.values), []);
    const yMin = 0;
    const yMax = Math.max(1, ...allValues) * 1.08;
    const xMin = Math.min(...rpm);
    const xMax = Math.max(...rpm);
    const xScale = (v) => o.paddingLeft + ((v - xMin) / (xMax - xMin || 1)) * plotW;
    const yScale = (v) => o.paddingTop + plotH - ((v - yMin) / (yMax - yMin || 1)) * plotH;
    const gridLines = buildGridLines(o, plotW, plotH, yMin, yMax);
    const xTicks = buildXTicks(rpm, o, xScale);
    const paths = series.map(s => buildSeriesPath(s, rpm, xScale, yScale)).join('\n');
    const legend = buildLegend(series, o);
    return `
<svg viewBox="0 0 ${o.width} ${o.height}" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif">
  <rect x="0" y="0" width="${o.width}" height="${o.height}" fill="none" />
  ${gridLines}
  <line x1="${o.paddingLeft}" y1="${o.paddingTop}" x2="${o.paddingLeft}" y2="${o.paddingTop + plotH}" stroke="currentColor" opacity=".45" />
  <line x1="${o.paddingLeft}" y1="${o.paddingTop + plotH}" x2="${o.paddingLeft + plotW}" y2="${o.paddingTop + plotH}" stroke="currentColor" opacity=".45" />
  ${xTicks}
  ${paths}
  <text x="${o.paddingLeft + plotW / 2}" y="${o.height - 6}" text-anchor="middle" font-size="12" fill="currentColor">${o.xAxisLabel}</text>
  ${legend}
</svg>`.trim();
}
function buildGridLines(o, plotW, plotH, yMin, yMax) {
    const steps = 5;
    const lines = [];
    for (let i = 0; i <= steps; i++) {
        const y = o.paddingTop + plotH - (i / steps) * plotH;
        const value = yMin + (i / steps) * (yMax - yMin);
        lines.push(`<line x1="${o.paddingLeft}" y1="${y}" x2="${o.paddingLeft + plotW}" y2="${y}" stroke="currentColor" opacity=".12" />`);
        lines.push(`<text x="${o.paddingLeft - 8}" y="${y + 4}" text-anchor="end" font-size="11" fill="currentColor" opacity=".7">${Math.round(value)}</text>`);
    }
    return lines.join('\n');
}
function buildXTicks(rpm, o, xScale) {
    return rpm
        .filter((_, i) => i % 4 === 0) // keep RPM labels readable when the chart is scaled to a phone
        .map(v => {
        const x = xScale(v);
        const y = o.height - o.paddingBottom + 16;
        return `<text x="${x}" y="${y}" text-anchor="middle" font-size="10" fill="currentColor" opacity=".7">${v}</text>`;
    })
        .join('\n');
}
function buildSeriesPath(s, rpm, xScale, yScale) {
    const d = s.values
        .map((v, i) => `${i === 0 ? 'M' : 'L'} ${xScale(rpm[i]).toFixed(1)} ${yScale(v).toFixed(1)}`)
        .join(' ');
    const dots = s.values
        .map((v, i) => `<circle cx="${xScale(rpm[i]).toFixed(1)}" cy="${yScale(v).toFixed(1)}" r="2.5" fill="${s.color}" />`)
        .join('\n');
    return `<path d="${d}" fill="none" stroke="${s.color}" stroke-width="2" />\n${dots}`;
}
function buildLegend(series, o) {
    return series
        .map((s, i) => {
        const x = o.paddingLeft + 12;
        const y = o.paddingTop + 14 + i * 18;
        return `<rect x="${x}" y="${y - 9}" width="10" height="10" fill="${s.color}" />` +
            `<text x="${x + 16}" y="${y}" font-size="12" fill="currentColor">${s.label}</text>`;
    })
        .join('\n');
}


/***/ }),

/***/ 4930:
/*!*******************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/dyno/dyno-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DynoRoutingModule": () => (/* binding */ DynoRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _dyno_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dyno.component */ 99308);




const routes = [
    {
        path: '',
        component: _dyno_component__WEBPACK_IMPORTED_MODULE_0__.DynoComponent,
    },
];
let DynoRoutingModule = class DynoRoutingModule {
};
DynoRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DynoRoutingModule);



/***/ }),

/***/ 99308:
/*!**************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/dyno/dyno.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DynoComponent": () => (/* binding */ DynoComponent)
/* harmony export */ });
/* harmony import */ var G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _dyno_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dyno.component.html?ngResource */ 65937);
/* harmony import */ var _dyno_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dyno.component.scss?ngResource */ 34523);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 85921);
/* harmony import */ var src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/common/GResponse */ 54021);
/* harmony import */ var src_app_core_common_GAccount__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/common/GAccount */ 6958);
/* harmony import */ var src_app_core_common_Urls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/common/Urls */ 35602);
/* harmony import */ var src_app_data_service_course_course_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/data/service/course/course.service */ 29209);
/* harmony import */ var src_app_data_service_site_Slider_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/data/service/site/Slider.service */ 79519);
/* harmony import */ var _dyno_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dyno.service */ 28958);
/* harmony import */ var _dyno_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dyno.model */ 21075);
/* harmony import */ var _dyno_calc_util__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dyno-calc.util */ 81926);
/* harmony import */ var _cylinder_head_airflow_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./cylinder-head-airflow-dialog.component */ 35362);
/* harmony import */ var _dyno_chart_util__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dyno-chart.util */ 34302);




/* eslint-disable @typescript-eslint/member-ordering */


















let DynoComponent = class DynoComponent {
  constructor(fb, modalCtrl, dynoService, sanitizer, sliderService, courseService, router) {
    this.fb = fb;
    this.modalCtrl = modalCtrl;
    this.dynoService = dynoService;
    this.sanitizer = sanitizer;
    this.sliderService = sliderService;
    this.courseService = courseService;
    this.router = router;
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_13__.Subject();
    this.isShow = false;
    this.loading = true; // Option lists shown in the UI selects -----------------------------------

    this.cylinderHeadOptions = [];
    this.camshaftPresets = [];
    this.manifoldTypeOptions = ['Single-Plane Manifold', 'Dual-Plane Manifold', 'Stock Manifold', 'Individual Runner (EFI)'];
    this.exhaustSystemOptions = ['Stock Manifolds And Mufflers', 'Shorty Headers/Stock Mufflers', 'Long-Tube Headers/Low-Restriction Mufflers', 'Long-Tube Headers/Open Exhaust'];
    this.fuelOptions = ['Gasoline', 'Racing Gasoline', 'Methanol', 'E85'];
    this.lifterOptions = ['Hydraulic Flat Tappet', 'Solid Flat Tappet', 'Hydraulic Roller', 'Solid Roller'];
    this.camSpecBasisOptions = ['Seat-To-Seat', 'Advertised', '.050" Tappet Lift']; // Live-calculated (read-only) fields --------------------------------------

    this.shortBlockCalc = {
      cylVolumeCc: 0,
      totalVolumeCc: 0
    };
    this.compressionCalc = {
      combustionSpaceCc: 0
    };
    this.camshaftCalc = null; // Output ------------------------------------------------------------------

    this.results = [];
    this.baseline = [];
    this.baselineName = '';
    this.modelIssues = [];
    this.resultView = 'graph';
    this.workspaceView = 'results';
    this.chartMetric = 'output';
    this.chartSvg = null;
    this.savedProfiles = [];
    this.selectedProfileId = null;
    this.rpmSweep = (0,_dyno_model__WEBPACK_IMPORTED_MODULE_9__.buildRpmSweep)();
    this.isShow = false;
  }

  get peakPower() {
    return this.results.length ? this.results.reduce((a, b) => b.powerFlyHp > a.powerFlyHp ? b : a) : null;
  }

  get peakTorque() {
    return this.results.length ? this.results.reduce((a, b) => b.torqueFlyLbFt > a.torqueFlyLbFt ? b : a) : null;
  }

  get peakPowerDelta() {
    if (!this.baseline.length || !this.peakPower) {
      return 0;
    }

    const basePeak = Math.max(...this.baseline.map(r => r.powerFlyHp));
    return Math.round((this.peakPower.powerFlyHp - basePeak) * 10) / 10;
  }

  ngOnInit() {
    this.buildForm();
    this.watchFormChanges();
    this.readProfiles();
    this.checkAccess();
  }

  checkAccess() {
    if (src_app_core_common_GAccount__WEBPACK_IMPORTED_MODULE_4__.GAccount.IsAdminActive()) {
      this.grantAccess();
      return;
    }

    this.sliderService.GetTunerPlusById(38).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.takeUntil)(this.destroy$)).subscribe(res => {
      if (res?.status !== src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_3__.GResponse.SuccessStatus || !res.data?.isActive) {
        this.denyAccess();
        return;
      }

      if (res.data.isFree) {
        this.grantAccess();
        return;
      }

      this.courseService.GetUserCoursesId().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.takeUntil)(this.destroy$)).subscribe(courses => {
        const permittedCourses = res.data.courseIds || [];
        const ownedCourses = courses?.data || [];

        if (courses?.status !== src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_3__.GResponse.SuccessStatus || !permittedCourses.some(id => ownedCourses.some(ownedId => Number(ownedId) === Number(id)))) {
          this.denyAccess();
          return;
        }

        this.courseService.GetUserTunerPlusAccess().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.takeUntil)(this.destroy$)).subscribe(access => {
          if (access?.status === src_app_core_common_GResponse__WEBPACK_IMPORTED_MODULE_3__.GResponse.SuccessStatus) {
            this.grantAccess();
          } else {
            this.denyAccess();
          }
        }, () => this.denyAccess());
      }, () => this.denyAccess());
    }, () => this.denyAccess());
  }

  grantAccess() {
    this.loadOptions();
    this.isShow = true;
  }

  denyAccess() {
    this.loading = false;
    this.router.navigateByUrl(src_app_core_common_Urls__WEBPACK_IMPORTED_MODULE_5__.Urls.AccessDeniedTunerPlusUrl);
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  } // ---------------------------------------------------------------------
  // Setup
  // ---------------------------------------------------------------------


  buildForm() {
    this.form = this.fb.group({
      shortBlock: this.fb.group({
        block: ['نمونه ۱.۶ لیتری چهار سیلندر', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required],
        bore: [78.5, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min(1)]],
        stroke: [82.0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min(1)]],
        cylinders: [4, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min(1)]]
      }),
      cylinderHeads: this.fb.group({
        headOptionId: ['4v-stock', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required],
        airflowFile: [null],
        intakeValves: [2, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min(1)]],
        exhaustValves: [2, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min(1)]],
        intakeValveDiaMm: [31.30, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min(0)]],
        exhaustValveDiaMm: [25.50, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min(0)]],
        customAirflow: [null]
      }),
      compression: this.fb.group({
        compressionRatio: [10.5, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min(1)]]
      }),
      induction: this.fb.group({
        inductionFlowCfm: [500.0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min(0)]],
        inductionFlowPressureDropInHg: [1.50, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min(0)]],
        fuel: ['Gasoline', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required],
        manifoldType: ['Single-Plane Manifold', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required],
        n2oLbsMin: [0.0, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min(0)]]
      }),
      forcedInduction: this.fb.group({
        enabled: [false],
        blowerType: ['Turbo-Rajay 300B'],
        flowCfm: [250.0],
        pressureRatio: [3.70],
        intercoolerEfficiencyPct: [85.0],
        boostLimitPsi: [15.0],
        speedRpm: [null],
        beltGearRatio: [null],
        internalGearRatio: [null],
        efficiencyPct: [74.0],
        surgeFlowCfm: [80.0]
      }),
      exhaust: this.fb.group({
        exhaustSystem: ['Stock Manifolds And Mufflers', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]
      }),
      camshaft: this.fb.group({
        camPresetId: ['stock-street-economy', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required],
        camFile: [null],
        lifterType: ['Hydraulic Flat Tappet', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required],
        camSpecsBasis: ['Seat-To-Seat', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required],
        intLiftAtValveMm: [8.00, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min(0)]],
        exhLiftAtValveMm: [7.65, [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.min(0)]],
        timingAdvRetDeg: [0.0],
        ivoBTDC: [13.5, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required],
        ivcABDC: [49.5, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required],
        evoBBDC: [40.5, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required],
        evcATDC: [16.5, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]
      })
    });
  }

  loadOptions() {
    this.cylinderHeadOptions = this.dynoService.getCylinderHeadOptions();
    this.camshaftPresets = this.dynoService.getCamshaftPresets();
    this.recalculateAll();
    this.loading = false;
  }

  watchFormChanges() {
    this.form.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.takeUntil)(this.destroy$)).subscribe(() => this.recalculateAll());
  } // ---------------------------------------------------------------------
  // Live-calculated read-only fields
  // ---------------------------------------------------------------------


  recalculateAll() {
    const config = this.form.getRawValue();
    this.shortBlockCalc = (0,_dyno_calc_util__WEBPACK_IMPORTED_MODULE_10__.calcShortBlock)(config.shortBlock);
    this.compressionCalc = {
      combustionSpaceCc: (0,_dyno_calc_util__WEBPACK_IMPORTED_MODULE_10__.calcCombustionSpaceCc)(this.shortBlockCalc.cylVolumeCc, config.compression.compressionRatio)
    };
    this.camshaftCalc = (0,_dyno_calc_util__WEBPACK_IMPORTED_MODULE_10__.calcCamshaft)(config.camshaft);
    this.modelIssues = this.dynoService.validate(config);
    this.results = this.form.valid && !this.modelIssues.length ? this.dynoService.calculate(config) : [];
    this.updateChart();
  }

  updateChart() {
    if (!this.results.length) {
      this.chartSvg = null;
      return;
    }

    let series;
    let baseValues;

    if (this.chartMetric === 'pressure') {
      series = [{
        label: 'IMEP (psi)',
        color: '#d62828',
        values: this.results.map(r => r.imepPsi)
      }, {
        label: 'BMEP (psi)',
        color: '#d8912d',
        values: this.results.map(r => r.bmepPsi)
      }, {
        label: 'FMEP (psi)',
        color: '#699a8b',
        values: this.results.map(r => r.fmepPsi)
      }, {
        label: 'PMEP (psi)',
        color: '#9674aa',
        values: this.results.map(r => r.pmepPsi)
      }];
      baseValues = this.baseline.map(r => r.bmepPsi);
    } else if (this.chartMetric === 've') {
      series = [{
        label: 'VE (%)',
        color: '#d62828',
        values: this.results.map(r => r.volEffPct)
      }];
      baseValues = this.baseline.map(r => r.volEffPct);
    } else if (this.chartMetric === 'map') {
      series = [{
        label: 'MAP absolute (inHg)',
        color: '#d62828',
        values: this.results.map(r => r.intManPressureInHg)
      }];
      baseValues = this.baseline.map(r => r.intManPressureInHg);
    } else {
      series = [{
        label: 'Power (hp)',
        color: '#d62828',
        values: this.results.map(r => r.powerFlyHp)
      }, {
        label: 'Torque (lb-ft)',
        color: '#d8912d',
        values: this.results.map(r => r.torqueFlyLbFt)
      }];
      baseValues = this.baseline.map(r => r.powerFlyHp);
    }

    if (this.baseline.length === this.results.length) {
      series.push({
        label: 'Baseline',
        color: '#666b76',
        values: baseValues
      });
    }

    const svg = (0,_dyno_chart_util__WEBPACK_IMPORTED_MODULE_12__.buildLineChartSvg)(this.results.map(r => r.rpm), series, {
      width: 800,
      height: 390,
      xAxisLabel: 'RPM'
    });
    this.chartSvg = this.sanitizer.bypassSecurityTrustHtml(svg);
  }

  setChartMetric(value) {
    if (value === 'output' || value === 'pressure' || value === 've' || value === 'map') {
      this.chartMetric = value;
      this.updateChart();
    }
  }

  setWorkspaceView(value) {
    if (value === 'inputs' || value === 'results') {
      this.workspaceView = value;
    }
  }

  saveBaseline() {
    if (!this.results.length) {
      return;
    }

    this.baseline = this.results.map(r => ({ ...r
    }));
    this.baselineName = this.form.get('shortBlock.block').value || 'Baseline';
    this.updateChart();
  }

  clearBaseline() {
    this.baseline = [];
    this.baselineName = '';
    this.updateChart();
  }

  baselineAtRpm(rpm) {
    return this.baseline.find(r => r.rpm === rpm);
  }

  exportCsv() {
    if (!this.results.length) {
      return;
    }

    const columns = ['rpm', 'powerFlyHp', 'torqueFlyLbFt', 'intManPressureInHg', 'volEffPct', 'imepPsi', 'fmepPsi', 'pmepPsi', 'bmepPsi'];
    const lines = [columns.join(','), ...this.results.map(row => columns.map(key => row[key]).join(','))];
    const url = URL.createObjectURL(new Blob(['\ufeff' + lines.join('\r\n')], {
      type: 'text/csv;charset=utf-8'
    }));
    const link = document.createElement('a');
    link.href = url;
    link.download = 'avalamooz-dyno.csv';
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  readProfiles() {
    try {
      const stored = JSON.parse(localStorage.getItem('st-dyno-profiles-v1') || '[]');
      this.savedProfiles = Array.isArray(stored) ? stored.filter(p => p && p.config && p.name).slice(0, 12) : [];
    } catch {
      this.savedProfiles = [];
    }
  }

  writeProfiles() {
    try {
      localStorage.setItem('st-dyno-profiles-v1', JSON.stringify(this.savedProfiles));
    } catch {
      /* private browsing */
    }
  }

  saveProfile() {
    if (!this.results.length) {
      return;
    }

    const name = String(this.form.get('shortBlock.block').value || 'Engine').trim().slice(0, 60);
    const profile = {
      id: Date.now(),
      name,
      config: this.form.getRawValue()
    };
    this.savedProfiles = [profile, ...this.savedProfiles].slice(0, 12);
    this.selectedProfileId = profile.id;
    this.writeProfiles();
  }

  loadProfile() {
    const profile = this.savedProfiles.find(p => p.id === Number(this.selectedProfileId));

    if (profile) {
      this.form.patchValue(profile.config);
    }
  }

  deleteProfile() {
    this.savedProfiles = this.savedProfiles.filter(p => p.id !== Number(this.selectedProfileId));
    this.selectedProfileId = null;
    this.writeProfiles();
  } // ---------------------------------------------------------------------
  // Cylinder head selection / custom airflow dialog
  // ---------------------------------------------------------------------


  get isCustomCylinderHead() {
    const opt = this.cylinderHeadOptions.find(o => o.id === this.form.get('cylinderHeads.headOptionId').value);
    return !!opt?.isCustom;
  }

  onCylinderHeadChanged() {
    if (this.isCustomCylinderHead) {
      this.openCylinderHeadAirflowDialog();
    } else {
      const opt = this.cylinderHeadOptions.find(o => o.id === this.form.get('cylinderHeads.headOptionId').value);
      this.form.get('cylinderHeads.airflowFile').setValue(opt?.flwFileId ?? null);

      if (opt?.id.startsWith('2v') || opt?.id.startsWith('4v')) {
        const count = opt.id.startsWith('2v') ? 1 : 2;
        this.form.get('cylinderHeads').patchValue({
          intakeValves: count,
          exhaustValves: count
        });
      }
    }
  }

  openCylinderHeadAirflowDialog(existing) {
    var _this = this;

    return (0,G_Dev_AvalAmooz_AvalAmooz_Frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this.modalCtrl.create({
        component: _cylinder_head_airflow_dialog_component__WEBPACK_IMPORTED_MODULE_11__.CylinderHeadAirflowDialogComponent,
        componentProps: {
          data: existing ?? null
        }
      });
      modal.onDidDismiss().then(({
        data
      }) => {
        if (data) {
          _this.form.get('cylinderHeads.customAirflow').setValue(data);

          _this.form.get('cylinderHeads.airflowFile').setValue(data.description || 'Custom');
        }
      });
      yield modal.present();
    })();
  } // ---------------------------------------------------------------------
  // Camshaft preset selection
  // ---------------------------------------------------------------------


  get isCustomCamshaft() {
    const preset = this.camshaftPresets.find(p => p.id === this.form.get('camshaft.camPresetId').value);
    return !!preset?.isCustom;
  }

  onCamshaftPresetChanged() {
    const preset = this.camshaftPresets.find(p => p.id === this.form.get('camshaft.camPresetId').value);
    this.form.get('camshaft.camFile').setValue(preset?.camFileId ?? null);
    const events = this.dynoService.getCamEvents(preset?.id);

    if (events) {
      this.form.get('camshaft').patchValue(events);
    }
  }

};

DynoComponent.ctorParameters = () => [{
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormBuilder
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.ModalController
}, {
  type: _dyno_service__WEBPACK_IMPORTED_MODULE_8__.DynoService
}, {
  type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__.DomSanitizer
}, {
  type: src_app_data_service_site_Slider_service__WEBPACK_IMPORTED_MODULE_7__.SliderService
}, {
  type: src_app_data_service_course_course_service__WEBPACK_IMPORTED_MODULE_6__.CourseService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_18__.Router
}];

DynoComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_19__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_20__.Component)({
  selector: 'app-dyno',
  template: _dyno_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_dyno_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], DynoComponent);


/***/ }),

/***/ 21075:
/*!**********************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/dyno/dyno.model.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DYNO_RPM_END": () => (/* binding */ DYNO_RPM_END),
/* harmony export */   "DYNO_RPM_START": () => (/* binding */ DYNO_RPM_START),
/* harmony export */   "DYNO_RPM_STEP": () => (/* binding */ DYNO_RPM_STEP),
/* harmony export */   "buildRpmSweep": () => (/* binding */ buildRpmSweep)
/* harmony export */ });
/* eslint-disable prefer-arrow/prefer-arrow-functions */
// dyno.model.ts
// Data model for the Dyno2000-style engine dyno simulator (Tuner Plus)
// Mirrors the "Engine" input tab (left panel) and the "Table" output tab (right panel)
const DYNO_RPM_START = 2000;
const DYNO_RPM_END = 11000;
const DYNO_RPM_STEP = 500;
function buildRpmSweep(start = DYNO_RPM_START, end = DYNO_RPM_END, step = DYNO_RPM_STEP) {
    const rpms = [];
    for (let rpm = start; rpm <= end; rpm += step) {
        rpms.push(rpm);
    }
    return rpms;
}


/***/ }),

/***/ 20553:
/*!***********************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/dyno/dyno.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DynoModule": () => (/* binding */ DynoModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/view/components/app/page-header/page-header.module */ 19916);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _dyno_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dyno-routing.module */ 4930);
/* harmony import */ var _dyno_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dyno.component */ 99308);
/* harmony import */ var _dyno_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dyno.service */ 28958);
/* harmony import */ var _cylinder_head_airflow_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cylinder-head-airflow-dialog.component */ 35362);
/* harmony import */ var src_app_view_components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/view/components/common/loading/loading.module */ 90876);











let DynoModule = class DynoModule {
};
DynoModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        declarations: [
            _dyno_component__WEBPACK_IMPORTED_MODULE_2__.DynoComponent,
            _cylinder_head_airflow_dialog_component__WEBPACK_IMPORTED_MODULE_4__.CylinderHeadAirflowDialogComponent,
        ],
        imports: [
            src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__.PageHeaderModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule,
            _dyno_routing_module__WEBPACK_IMPORTED_MODULE_1__.DynoRoutingModule,
            src_app_view_components_common_loading_loading_module__WEBPACK_IMPORTED_MODULE_5__.LoadingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule
        ],
        providers: [
            _dyno_service__WEBPACK_IMPORTED_MODULE_3__.DynoService,
        ],
    })
], DynoModule);



/***/ }),

/***/ 28958:
/*!************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/dyno/dyno.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DynoService": () => (/* binding */ DynoService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _dyno_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dyno.model */ 21075);
/* harmony import */ var _dyno_calc_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dyno-calc.util */ 81926);

/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable max-len */



// Transparent engineering estimate; these coefficients require calibration
// against measured engines. This is not Dyno2000's proprietary solver.
const ATM_PSI = 14.696;
const PSI_TO_INHG = 2.03602;
const AIR_DENSITY = 1.225; // kg/m3 at 15 C, sea level
const AMBIENT_K = 288.15;
const CC_PER_FT3 = 28316.8466;
const FUELS = {
    Gasoline: { afr: 12.8, lhv: 43.0 },
    'Racing Gasoline': { afr: 12.8, lhv: 43.0 },
    Methanol: { afr: 5.5, lhv: 19.9 },
    E85: { afr: 8.3, lhv: 29.2 },
};
let DynoService = class DynoService {
    getCylinderHeadOptions() {
        return [
            { id: '2v-stock', label: '2-Valve Head/Stock Ports And Valves' },
            { id: '2v-ported', label: '2-Valve Head/Ported And Polished' },
            { id: '4v-stock', label: '4-Valve Head/Stock Ports And Valves' },
            { id: '4v-ported', label: '4-Valve Head/Ported And Polished' },
            { id: 'custom', label: 'Custom Airflow Data...', isCustom: true },
        ];
    }
    getCamshaftPresets() {
        return [
            { id: 'stock-street-economy', label: 'Stock Street/Economy' },
            { id: 'street-performance', label: 'Street Performance' },
            { id: 'street-strip', label: 'Street/Strip' },
            { id: 'race-modified-street', label: 'Race Only - Modified Street' },
            { id: 'drag-race', label: 'Full Race - Drag Race' },
            { id: 'custom', label: 'Custom...', isCustom: true },
        ];
    }
    getCamEvents(id) {
        const events = {
            'stock-street-economy': [13.5, 49.5, 40.5, 16.5],
            'street-performance': [20, 56, 48, 22],
            'street-strip': [27, 65, 56, 28],
            'race-modified-street': [34, 73, 64, 34],
            'drag-race': [43, 82, 72, 44],
        }[id];
        return events ? { ivoBTDC: events[0], ivcABDC: events[1], evoBBDC: events[2], evcATDC: events[3] } : null;
    }
    validate(c) {
        const issues = [];
        const check = (v, min, max, label) => {
            if (v === null || !Number.isFinite(Number(v)) || Number(v) < min || Number(v) > max) {
                issues.push(`${label}: مقدار باید بین ${min} و ${max} باشد.`);
            }
        };
        if (!String(c.shortBlock.block || '').trim()) {
            issues.push('نام موتور را وارد کنید.');
        }
        check(c.shortBlock.bore, 45, 160, 'قطر سیلندر');
        check(c.shortBlock.stroke, 40, 160, 'کورس');
        check(c.shortBlock.cylinders, 1, 16, 'تعداد سیلندر');
        if (!Number.isInteger(Number(c.shortBlock.cylinders))) {
            issues.push('تعداد سیلندر باید عدد صحیح باشد.');
        }
        check(c.compression.compressionRatio, 6, 16, 'نسبت تراکم');
        check(c.induction.inductionFlowCfm, 25, 3000, 'دبی ورودی');
        check(c.induction.inductionFlowPressureDropInHg, 0.1, 5, 'افت فشار مرجع');
        check(c.induction.n2oLbsMin, 0, 5, 'دبی نیتروس');
        check(c.cylinderHeads.intakeValves, 1, 4, 'تعداد سوپاپ ورودی');
        check(c.cylinderHeads.exhaustValves, 1, 4, 'تعداد سوپاپ خروجی');
        check(c.cylinderHeads.intakeValveDiaMm, 15, 65, 'قطر سوپاپ ورودی');
        check(c.cylinderHeads.exhaustValveDiaMm, 15, 65, 'قطر سوپاپ خروجی');
        check(c.camshaft.intLiftAtValveMm, 3, 25, 'لیفت ورودی');
        check(c.camshaft.exhLiftAtValveMm, 3, 25, 'لیفت خروجی');
        check(c.camshaft.timingAdvRetDeg, -20, 20, 'آوانس میل سوپاپ');
        for (const key of ['ivoBTDC', 'ivcABDC', 'evoBBDC', 'evcATDC']) {
            check(c.camshaft[key], -40, 120, key);
        }
        if (c.cylinderHeads.headOptionId === 'custom' &&
            !(c.cylinderHeads.customAirflow?.intake?.points || []).some(p => Number(p.liftMm) > 0 && Number(p.flowCfm) > 0)) {
            issues.push('برای سرسیلندر سفارشی دست‌کم یک نقطه معتبر دبی ورودی ثبت کنید.');
        }
        if (c.cylinderHeads.headOptionId === 'custom' && c.cylinderHeads.customAirflow) {
            check(c.cylinderHeads.customAirflow.intake.pressureDropCmH2O, 1, 200, 'افت فشار تست سرسیلندر');
        }
        if (c.forcedInduction.enabled) {
            const f = c.forcedInduction;
            check(f.flowCfm, 30, 3000, 'دبی کمپرسور');
            check(f.pressureRatio, 1, 5, 'نسبت فشار کمپرسور');
            check(f.boostLimitPsi, 0, 45, 'حد بوست');
            check(f.efficiencyPct, 35, 90, 'بازده کمپرسور');
            check(f.intercoolerEfficiencyPct, 0, 100, 'بازده اینترکولر');
            check(f.surgeFlowCfm, 0, f.flowCfm, 'دبی سرج');
        }
        return issues;
    }
    calculate(c) {
        if (this.validate(c).length) {
            return [];
        }
        const displacementCc = (0,_dyno_calc_util__WEBPACK_IMPORTED_MODULE_1__.calcShortBlock)(c.shortBlock).totalVolumeCc;
        const cam = (0,_dyno_calc_util__WEBPACK_IMPORTED_MODULE_1__.calcCamshaft)(c.camshaft);
        const fuel = FUELS[c.induction.fuel] || FUELS.Gasoline;
        const manifoldShift = c.induction.manifoldType === 'Individual Runner (EFI)' ? 350 :
            c.induction.manifoldType === 'Dual-Plane Manifold' ? -400 :
                c.induction.manifoldType === 'Stock Manifold' ? -550 : 0;
        // A .050-inch timing card omits the low-lift ramps. Treat it as about
        // 35 crank degrees shorter than a seat-timing card for curve placement.
        const durationCorrection = c.camshaft.camSpecsBasis === '.050" Tappet Lift' ? 35 : 0;
        const peakRpm = clamp(3900 + (cam.intDurationDeg + durationCorrection - 240) * 47 +
            (cam.ivcShifted - 50) * 16 + manifoldShift, 2600, 8500);
        const headCfm = this.headFlowCapacity(c);
        const exhaustFactor = this.exhaustFactor(c.exhaust.exhaustSystem);
        return (0,_dyno_model__WEBPACK_IMPORTED_MODULE_0__.buildRpmSweep)().map(rpm => {
            const normalized = (rpm - peakRpm) / (rpm < peakRpm ? 3000 : 2600);
            const overlapLoss = clamp((cam.valveOverlapDeg - 35) / 180, 0, 0.26) *
                clamp((peakRpm - rpm) / 4200, 0, 1);
            let breathingVe = (0.59 + 0.34 * Math.exp(-0.5 * normalized * normalized)) * (1 - overlapLoss);
            breathingVe *= c.cylinderHeads.headOptionId.includes('ported') ? 1.055 : 1;
            breathingVe *= clamp(c.camshaft.intLiftAtValveMm / 8, 0.78, 1.15);
            breathingVe *= c.camshaft.lifterType.includes('Roller') ? 1.015 : 1;
            breathingVe *= exhaustFactor;
            const intakeCurtain = c.cylinderHeads.intakeValves * c.cylinderHeads.intakeValveDiaMm *
                c.camshaft.intLiftAtValveMm;
            const exhaustCurtain = c.cylinderHeads.exhaustValves * c.cylinderHeads.exhaustValveDiaMm *
                c.camshaft.exhLiftAtValveMm;
            breathingVe *= clamp(0.9 + 0.1 * exhaustCurtain / Math.max(1, intakeCurtain) / 0.78, 0.88, 1.04);
            // Flow-bench CFM is steady flow; the duty factor estimates useful intake time.
            const cylinderDemand = displacementCc / c.shortBlock.cylinders / CC_PER_FT3 * rpm / 2 * breathingVe;
            breathingVe *= clamp(headCfm * 0.47 / Math.max(1, cylinderDemand), 0.35, 1);
            breathingVe = clamp(breathingVe, 0.25, 1.08);
            const manifoldCfm = displacementCc / CC_PER_FT3 * rpm / 2 * breathingVe;
            const boostPsi = this.boostAtFlow(c, manifoldCfm);
            const compressorPr = 1 + boostPsi / ATM_PSI;
            const efficiency = clamp(c.forcedInduction.efficiencyPct / 100, 0.35, 0.9);
            const compressedK = AMBIENT_K * (1 + (Math.pow(compressorPr, 0.286) - 1) / efficiency);
            const chargeK = c.forcedInduction.enabled ?
                AMBIENT_K + (compressedK - AMBIENT_K) * (1 - c.forcedInduction.intercoolerEfficiencyPct / 100) : AMBIENT_K;
            const inletCfm = manifoldCfm * compressorPr * AMBIENT_K / chargeK;
            const intakeDropPsi = c.induction.inductionFlowPressureDropInHg / PSI_TO_INHG *
                Math.pow(inletCfm / c.induction.inductionFlowCfm, 2);
            const mapPsi = clamp(ATM_PSI + boostPsi - intakeDropPsi, 1, 60);
            const airVe = breathingVe * mapPsi / ATM_PSI * AMBIENT_K / chargeK;
            // Nitrous adds oxygen-equivalent air mass. Fueling and knock are not predicted.
            const nitrousKgSec = c.induction.n2oLbsMin * 0.45359237 / 60;
            const airEquivalentKgSec = nitrousKgSec * 0.36 / 0.232;
            const engineVolumeM3Sec = displacementCc / 1e6 * rpm / 120;
            const nitrousVe = clamp(airEquivalentKgSec /
                Math.max(0.001, engineVolumeM3Sec * AIR_DENSITY), 0, 1.5);
            const totalVe = airVe + nitrousVe;
            const compressionFactor = clamp(1 + (c.compression.compressionRatio - 10.5) * 0.016, 0.88, 1.10);
            const indicatedEfficiency = 0.38 * compressionFactor;
            const imepPsi = AIR_DENSITY * totalVe * fuel.lhv * 1e6 / fuel.afr *
                indicatedEfficiency / 6894.757;
            const pistonSpeed = 2 * c.shortBlock.stroke / 1000 * rpm / 60;
            const fmepPsi = 6 + 0.65 * pistonSpeed + 0.025 * pistonSpeed * pistonSpeed;
            const exhaustBackpressure = (1.3 / exhaustFactor - 1.1) * Math.pow(rpm / 6000, 2);
            const pmepPsi = Math.max(0, ATM_PSI - mapPsi) + Math.max(0, exhaustBackpressure);
            const bmepPsi = Math.max(0, imepPsi - fmepPsi - pmepPsi);
            // psi * in3 gives lb-in; divide by 12 for lb-ft. Four-stroke work
            // occurs once per two revolutions, hence the 4*pi denominator.
            const torqueLbFt = bmepPsi * (displacementCc / 16.387064) / (4 * Math.PI * 12);
            return {
                rpm,
                powerFlyHp: round(torqueLbFt * rpm / 5252.113, 1),
                torqueFlyLbFt: round(torqueLbFt, 1),
                intManPressureInHg: round(mapPsi * PSI_TO_INHG, 2),
                volEffPct: round(totalVe * 100, 1),
                imepPsi: round(imepPsi, 1),
                fmepPsi: round(fmepPsi, 1),
                pmepPsi: round(pmepPsi, 1),
                bmepPsi: round(bmepPsi, 1),
            };
        });
    }
    headFlowCapacity(c) {
        const h = c.cylinderHeads;
        if (h.headOptionId === 'custom' && h.customAirflow) {
            const side = h.customAirflow.intake;
            const points = side.points.filter(p => Number(p.liftMm) > 0 && Number(p.flowCfm) > 0)
                .sort((a, b) => Number(a.liftMm) - Number(b.liftMm));
            if (points.length) {
                const target = c.camshaft.intLiftAtValveMm;
                let flow = Number(points[points.length - 1].flowCfm);
                if (target <= Number(points[0].liftMm)) {
                    flow = Number(points[0].flowCfm) * target / Number(points[0].liftMm);
                }
                for (let i = 0; i < points.length - 1; i++) {
                    if (target >= Number(points[i].liftMm) && target <= Number(points[i + 1].liftMm)) {
                        const t = (target - Number(points[i].liftMm)) /
                            (Number(points[i + 1].liftMm) - Number(points[i].liftMm) || 1);
                        flow = Number(points[i].flowCfm) + t *
                            (Number(points[i + 1].flowCfm) - Number(points[i].flowCfm));
                        break;
                    }
                }
                return clamp(flow * Math.sqrt(71.12 / Math.max(1, side.pressureDropCmH2O)), 20, 500);
            }
        }
        const curtainArea = h.intakeValves * Math.PI * h.intakeValveDiaMm *
            Math.min(c.camshaft.intLiftAtValveMm, h.intakeValveDiaMm * 0.3);
        return clamp(curtainArea / 10.5 * (h.headOptionId.includes('ported') ? 1.18 : 1), 25, 350);
    }
    boostAtFlow(c, manifoldCfm) {
        const f = c.forcedInduction;
        if (!f.enabled) {
            return 0;
        }
        const maxBoost = Math.min(f.boostLimitPsi, (f.pressureRatio - 1) * ATM_PSI);
        const inletFlow = manifoldCfm * (1 + maxBoost / ATM_PSI);
        const choke = clamp(f.flowCfm / Math.max(inletFlow, 1), 0.15, 1);
        const surge = f.surgeFlowCfm > 0 ? clamp(inletFlow / f.surgeFlowCfm, 0.25, 1) : 1;
        return maxBoost * choke * surge;
    }
    exhaustFactor(system) {
        switch (system) {
            case 'Long-Tube Headers/Open Exhaust': return 1.06;
            case 'Long-Tube Headers/Low-Restriction Mufflers': return 1.04;
            case 'Shorty Headers/Stock Mufflers': return 1.01;
            default: return 0.96;
        }
    }
};
DynoService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({ providedIn: 'root' })
], DynoService);

function clamp(v, min, max) { return Math.min(max, Math.max(min, v)); }
function round(v, digits) { const p = Math.pow(10, digits); return Math.round(v * p) / p; }


/***/ }),

/***/ 85921:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/takeUntil.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "takeUntil": () => (/* binding */ takeUntil)
/* harmony export */ });
/* harmony import */ var _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../innerSubscribe */ 52831);

function takeUntil(notifier) {
  return source => source.lift(new TakeUntilOperator(notifier));
}

class TakeUntilOperator {
  constructor(notifier) {
    this.notifier = notifier;
  }

  call(subscriber, source) {
    const takeUntilSubscriber = new TakeUntilSubscriber(subscriber);
    const notifierSubscription = (0,_innerSubscribe__WEBPACK_IMPORTED_MODULE_0__.innerSubscribe)(this.notifier, new _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__.SimpleInnerSubscriber(takeUntilSubscriber));

    if (notifierSubscription && !takeUntilSubscriber.seenValue) {
      takeUntilSubscriber.add(notifierSubscription);
      return source.subscribe(takeUntilSubscriber);
    }

    return takeUntilSubscriber;
  }

}

class TakeUntilSubscriber extends _innerSubscribe__WEBPACK_IMPORTED_MODULE_0__.SimpleOuterSubscriber {
  constructor(destination) {
    super(destination);
    this.seenValue = false;
  }

  notifyNext() {
    this.seenValue = true;
    this.complete();
  }

  notifyComplete() {}

}

/***/ }),

/***/ 32921:
/*!***************************************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/dyno/cylinder-head-airflow-dialog.component.scss?ngResource ***!
  \***************************************************************************************************/
/***/ ((module) => {

module.exports = ".airflow-dialog {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --padding-top: 12px;\n}\n\n.top-row {\n  display: flex;\n  gap: 12px;\n  align-items: flex-start;\n}\n\n.top-row .description-item {\n  flex: 1;\n}\n\n.top-row .data-points-item {\n  width: 120px;\n}\n\n.valves-row {\n  display: flex;\n  gap: 16px;\n  margin-top: 12px;\n  flex-wrap: wrap;\n}\n\n.valves-row .valve-fieldset {\n  flex: 1;\n  min-width: 260px;\n  border: 1px solid var(--ion-color-light-shade, #d7d8da);\n  border-radius: 6px;\n  padding: 10px 12px 14px;\n}\n\n.valves-row .valve-fieldset legend {\n  padding: 0 6px;\n  font-weight: 700;\n  font-size: 0.85rem;\n}\n\n.points-table {\n  margin-top: 8px;\n}\n\n.points-table .points-header {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 8px;\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: var(--ion-color-medium-shade, #5c5f66);\n  padding: 0 2px 4px;\n}\n\n.points-table .points-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 8px;\n  margin-bottom: 4px;\n}\n\n.points-table .points-row ion-input {\n  --padding-start: 6px;\n  --padding-end: 6px;\n  border: 1px solid var(--ion-color-light-shade, #d7d8da);\n  border-radius: 4px;\n  font-size: 0.85rem;\n  min-height: 32px;\n}\n\n.points-table .points-row ion-input[disabled] {\n  --color: var(--ion-color-medium, #92949c);\n  background: var(--ion-color-light, #f4f5f8);\n}\n\n:host-context(.dark-theme) {\n  color-scheme: dark;\n  color: var(--tuner-text);\n  --tuner-page: #11151e;\n  --tuner-surface: #1c2230;\n  --tuner-soft: #252e3d;\n  --tuner-border: #465269;\n  --tuner-text: #edf1f8;\n  --tuner-muted: #b2bfd1;\n  --tuner-header: rgba(28, 34, 48, 0.94);\n  --tuner-overlay: rgba(28, 34, 48, 0.95);\n  --tuner-purple-text: #c4b5fd;\n  --tuner-purple-soft: #302444;\n  --tuner-purple-border: #72579b;\n  --tuner-info-text: #93c5fd;\n  --tuner-info-soft: #1d304c;\n  --tuner-info-border: #466b9a;\n  --tuner-warning-text: #fcd477;\n  --tuner-warning-soft: #3b3020;\n  --tuner-warning-border: #93743d;\n  --tuner-success-text: #86efac;\n  --tuner-success-soft: #19392e;\n  --tuner-success-border: #417d60;\n  --tuner-danger-text: #fda4af;\n  --tuner-danger-soft: #402631;\n  --tuner-danger-border: #985367;\n  --tuner-teal-text: #7de4d4;\n  --tuner-teal-soft: #193a3a;\n  --tuner-teal-border: #437f7c;\n}\n\n:host-context(.dark-theme) input:not([type=range]):not([type=checkbox]):not([type=radio]):not([type=button]):not([type=submit]):not([type=file]),\n:host-context(.dark-theme) textarea,\n:host-context(.dark-theme) select {\n  color: var(--tuner-text);\n  background-color: var(--tuner-soft);\n}\n\n:host-context(.dark-theme) input::placeholder, :host-context(.dark-theme) textarea::placeholder {\n  color: var(--tuner-muted);\n  opacity: 0.75;\n}\n\n:host-context(.dark-theme) ion-header.learning-header {\n  --background: var(--tuner-header);\n  background: var(--tuner-header);\n  border-bottom-color: var(--tuner-border);\n}\n\n:host-context(.dark-theme) ion-content {\n  --background: var(--tuner-page);\n  --color: var(--tuner-text);\n}\n\n:host-context(.dark-theme) ion-card:not([color]), :host-context(.dark-theme) ion-list, :host-context(.dark-theme) ion-item:not([color]), :host-context(.dark-theme) ion-item-divider:not([color]) {\n  --background: var(--tuner-surface);\n  --color: var(--tuner-text);\n  --border-color: var(--tuner-border);\n}\n\n:host-context(.dark-theme) ion-list {\n  background: var(--tuner-surface);\n}\n\n:host-context(.dark-theme) ion-card-title, :host-context(.dark-theme) ion-card-subtitle {\n  color: var(--tuner-text);\n}\n\n:host-context(.dark-theme) ion-card[color=lightest], :host-context(.dark-theme) ion-item[color=lightest], :host-context(.dark-theme) ion-fab-button[color=lightest] {\n  --ion-color-base: var(--tuner-surface);\n  --ion-color-contrast: var(--tuner-text);\n  --ion-color-shade: var(--tuner-soft);\n  --ion-color-tint: var(--tuner-soft);\n}\n\n:host-context(.dark-theme) ion-text[color=dark], :host-context(.dark-theme) ion-label[color=dark] {\n  --ion-color-base: var(--tuner-text);\n}\n\n:host-context(.dark-theme) .points-row ion-input[disabled] {\n  background: var(--tuner-soft);\n  --color: var(--tuner-muted);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN5bGluZGVyLWhlYWQtYWlyZmxvdy1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCIuLlxcX3RoZW1lLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7QUFERjs7QUFHRTtFQUNFLE9BQUE7QUFESjs7QUFJRTtFQUNFLFlBQUE7QUFGSjs7QUFNQTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBSEY7O0FBS0U7RUFDRSxPQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1REFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUFISjs7QUFLSTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBSE47O0FBUUE7RUFDRSxlQUFBO0FBTEY7O0FBT0U7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDZDQUFBO0VBQ0Esa0JBQUE7QUFMSjs7QUFRRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtBQU5KOztBQVFJO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtFQUNBLHVEQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBTk47O0FBUU07RUFDRSx5Q0FBQTtFQUNBLDJDQUFBO0FBTlI7O0FDNURFO0VBQ0Usa0JBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLHNDQUFBO0VBQ0EsdUNBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsK0JBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsK0JBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7QUQrREo7O0FDNURJOzs7RUFHRSx3QkFBQTtFQUNBLG1DQUFBO0FEOEROOztBQzNESTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtBRDZETjs7QUMxREk7RUFDRSxpQ0FBQTtFQUNBLCtCQUFBO0VBQ0Esd0NBQUE7QUQ0RE47O0FDMURJO0VBQWMsK0JBQUE7RUFBaUMsMEJBQUE7QUQ4RG5EOztBQzdESTtFQUNFLGtDQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQ0FBQTtBRCtETjs7QUM3REk7RUFBVyxnQ0FBQTtBRGdFZjs7QUMvREk7RUFBb0Msd0JBQUE7QURrRXhDOztBQ2pFSTtFQUNFLHNDQUFBO0VBQ0EsdUNBQUE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO0FEbUVOOztBQ2pFSTtFQUFrRCxtQ0FBQTtBRG9FdEQ7O0FBeERBO0VBQ0UsNkJBQUE7RUFDQSwyQkFBQTtBQTJERiIsImZpbGUiOiJjeWxpbmRlci1oZWFkLWFpcmZsb3ctZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vdGhlbWUnO1xuXG4uYWlyZmxvdy1kaWFsb2cge1xuICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDE2cHg7XG4gIC0tcGFkZGluZy10b3A6IDEycHg7XG59XG5cbi50b3Atcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxMnB4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblxuICAuZGVzY3JpcHRpb24taXRlbSB7XG4gICAgZmxleDogMTtcbiAgfVxuXG4gIC5kYXRhLXBvaW50cy1pdGVtIHtcbiAgICB3aWR0aDogMTIwcHg7XG4gIH1cbn1cblxuLnZhbHZlcy1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDE2cHg7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIGZsZXgtd3JhcDogd3JhcDtcblxuICAudmFsdmUtZmllbGRzZXQge1xuICAgIGZsZXg6IDE7XG4gICAgbWluLXdpZHRoOiAyNjBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUsICNkN2Q4ZGEpO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBwYWRkaW5nOiAxMHB4IDEycHggMTRweDtcblxuICAgIGxlZ2VuZCB7XG4gICAgICBwYWRkaW5nOiAwIDZweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBmb250LXNpemU6IDAuODVyZW07XG4gICAgfVxuICB9XG59XG5cbi5wb2ludHMtdGFibGUge1xuICBtYXJnaW4tdG9wOiA4cHg7XG5cbiAgLnBvaW50cy1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgIGdhcDogOHB4O1xuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlLCAjNWM1ZjY2KTtcbiAgICBwYWRkaW5nOiAwIDJweCA0cHg7XG4gIH1cblxuICAucG9pbnRzLXJvdyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgZ2FwOiA4cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuXG4gICAgaW9uLWlucHV0IHtcbiAgICAgIC0tcGFkZGluZy1zdGFydDogNnB4O1xuICAgICAgLS1wYWRkaW5nLWVuZDogNnB4O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlLCAjZDdkOGRhKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgICAgIG1pbi1oZWlnaHQ6IDMycHg7XG5cbiAgICAgICZbZGlzYWJsZWRdIHtcbiAgICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSwgIzkyOTQ5Yyk7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCwgI2Y0ZjVmOCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBpbmNsdWRlIHR1bmVyLWRhcmstdGhlbWU7XG5cbjpob3N0LWNvbnRleHQoLmRhcmstdGhlbWUpIC5wb2ludHMtcm93IGlvbi1pbnB1dFtkaXNhYmxlZF0ge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS10dW5lci1zb2Z0KTtcbiAgLS1jb2xvcjogdmFyKC0tdHVuZXItbXV0ZWQpO1xufVxuIiwiLy8gS2VlcCB0aGUgb3JpZ2luYWwgbGlnaHQgY29sb3IgYXQgZWFjaCBjYWxsIHNpdGUuIFRva2VucyBleGlzdCBvbmx5IGluIGRhcmsgbW9kZS5cbkBmdW5jdGlvbiB0dW5lci1jb2xvcigkcm9sZSwgJGxpZ2h0KSB7XG4gIEByZXR1cm4gdmFyKC0tdHVuZXItI3skcm9sZX0sICN7JGxpZ2h0fSk7XG59XG5cbkBtaXhpbiB0dW5lci1kYXJrLXRoZW1lIHtcbiAgOmhvc3QtY29udGV4dCguZGFyay10aGVtZSkge1xuICAgIGNvbG9yLXNjaGVtZTogZGFyaztcbiAgICBjb2xvcjogdmFyKC0tdHVuZXItdGV4dCk7XG4gICAgLS10dW5lci1wYWdlOiAjMTExNTFlO1xuICAgIC0tdHVuZXItc3VyZmFjZTogIzFjMjIzMDtcbiAgICAtLXR1bmVyLXNvZnQ6ICMyNTJlM2Q7XG4gICAgLS10dW5lci1ib3JkZXI6ICM0NjUyNjk7XG4gICAgLS10dW5lci10ZXh0OiAjZWRmMWY4O1xuICAgIC0tdHVuZXItbXV0ZWQ6ICNiMmJmZDE7XG4gICAgLS10dW5lci1oZWFkZXI6IHJnYmEoMjgsIDM0LCA0OCwgMC45NCk7XG4gICAgLS10dW5lci1vdmVybGF5OiByZ2JhKDI4LCAzNCwgNDgsIDAuOTUpO1xuICAgIC0tdHVuZXItcHVycGxlLXRleHQ6ICNjNGI1ZmQ7XG4gICAgLS10dW5lci1wdXJwbGUtc29mdDogIzMwMjQ0NDtcbiAgICAtLXR1bmVyLXB1cnBsZS1ib3JkZXI6ICM3MjU3OWI7XG4gICAgLS10dW5lci1pbmZvLXRleHQ6ICM5M2M1ZmQ7XG4gICAgLS10dW5lci1pbmZvLXNvZnQ6ICMxZDMwNGM7XG4gICAgLS10dW5lci1pbmZvLWJvcmRlcjogIzQ2NmI5YTtcbiAgICAtLXR1bmVyLXdhcm5pbmctdGV4dDogI2ZjZDQ3NztcbiAgICAtLXR1bmVyLXdhcm5pbmctc29mdDogIzNiMzAyMDtcbiAgICAtLXR1bmVyLXdhcm5pbmctYm9yZGVyOiAjOTM3NDNkO1xuICAgIC0tdHVuZXItc3VjY2Vzcy10ZXh0OiAjODZlZmFjO1xuICAgIC0tdHVuZXItc3VjY2Vzcy1zb2Z0OiAjMTkzOTJlO1xuICAgIC0tdHVuZXItc3VjY2Vzcy1ib3JkZXI6ICM0MTdkNjA7XG4gICAgLS10dW5lci1kYW5nZXItdGV4dDogI2ZkYTRhZjtcbiAgICAtLXR1bmVyLWRhbmdlci1zb2Z0OiAjNDAyNjMxO1xuICAgIC0tdHVuZXItZGFuZ2VyLWJvcmRlcjogIzk4NTM2NztcbiAgICAtLXR1bmVyLXRlYWwtdGV4dDogIzdkZTRkNDtcbiAgICAtLXR1bmVyLXRlYWwtc29mdDogIzE5M2EzYTtcbiAgICAtLXR1bmVyLXRlYWwtYm9yZGVyOiAjNDM3ZjdjO1xuXG4gICAgLy8gTmF0aXZlIGNvbnRyb2xzIHdpdGhvdXQgYW4gZXhwbGljaXQgbGlnaHQgYmFja2dyb3VuZCBuZWVkIGEgZGFyayBzdXJmYWNlIHRvby5cbiAgICBpbnB1dDpub3QoW3R5cGU9J3JhbmdlJ10pOm5vdChbdHlwZT0nY2hlY2tib3gnXSk6bm90KFt0eXBlPSdyYWRpbyddKTpub3QoW3R5cGU9J2J1dHRvbiddKTpub3QoW3R5cGU9J3N1Ym1pdCddKTpub3QoW3R5cGU9J2ZpbGUnXSksXG4gICAgdGV4dGFyZWEsXG4gICAgc2VsZWN0IHtcbiAgICAgIGNvbG9yOiB2YXIoLS10dW5lci10ZXh0KTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXR1bmVyLXNvZnQpO1xuICAgIH1cblxuICAgIGlucHV0OjpwbGFjZWhvbGRlciwgdGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcbiAgICAgIGNvbG9yOiB2YXIoLS10dW5lci1tdXRlZCk7XG4gICAgICBvcGFjaXR5OiAwLjc1O1xuICAgIH1cblxuICAgIGlvbi1oZWFkZXIubGVhcm5pbmctaGVhZGVyIHtcbiAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0tdHVuZXItaGVhZGVyKTtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXR1bmVyLWhlYWRlcik7XG4gICAgICBib3JkZXItYm90dG9tLWNvbG9yOiB2YXIoLS10dW5lci1ib3JkZXIpO1xuICAgIH1cbiAgICBpb24tY29udGVudCB7IC0tYmFja2dyb3VuZDogdmFyKC0tdHVuZXItcGFnZSk7IC0tY29sb3I6IHZhcigtLXR1bmVyLXRleHQpOyB9XG4gICAgaW9uLWNhcmQ6bm90KFtjb2xvcl0pLCBpb24tbGlzdCwgaW9uLWl0ZW06bm90KFtjb2xvcl0pLCBpb24taXRlbS1kaXZpZGVyOm5vdChbY29sb3JdKSB7XG4gICAgICAtLWJhY2tncm91bmQ6IHZhcigtLXR1bmVyLXN1cmZhY2UpO1xuICAgICAgLS1jb2xvcjogdmFyKC0tdHVuZXItdGV4dCk7XG4gICAgICAtLWJvcmRlci1jb2xvcjogdmFyKC0tdHVuZXItYm9yZGVyKTtcbiAgICB9XG4gICAgaW9uLWxpc3QgeyBiYWNrZ3JvdW5kOiB2YXIoLS10dW5lci1zdXJmYWNlKTsgfVxuICAgIGlvbi1jYXJkLXRpdGxlLCBpb24tY2FyZC1zdWJ0aXRsZSB7IGNvbG9yOiB2YXIoLS10dW5lci10ZXh0KTsgfVxuICAgIGlvbi1jYXJkW2NvbG9yPSdsaWdodGVzdCddLCBpb24taXRlbVtjb2xvcj0nbGlnaHRlc3QnXSwgaW9uLWZhYi1idXR0b25bY29sb3I9J2xpZ2h0ZXN0J10ge1xuICAgICAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0tdHVuZXItc3VyZmFjZSk7XG4gICAgICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0tdHVuZXItdGV4dCk7XG4gICAgICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0tdHVuZXItc29mdCk7XG4gICAgICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS10dW5lci1zb2Z0KTtcbiAgICB9XG4gICAgaW9uLXRleHRbY29sb3I9J2RhcmsnXSwgaW9uLWxhYmVsW2NvbG9yPSdkYXJrJ10geyAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS10dW5lci10ZXh0KTsgfVxuICB9XG59XG4iXX0= */";

/***/ }),

/***/ 34523:
/*!***************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/dyno/dyno.component.scss?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  min-height: 0;\n}\n\n.dyno-header ion-toolbar {\n  --background: var(--ion-item-background, var(--ion-background-color));\n  --color: var(--ion-text-color);\n  --ion-toolbar-color: var(--ion-text-color);\n  border-bottom: 1px solid var(--ion-color-light-shade, #d7d8da);\n}\n\n.dyno-header ion-title {\n  font-size: 1rem;\n  font-weight: 800;\n}\n\n.dyno-header ion-back-button, .dyno-header ion-menu-button {\n  --color: var(--ion-text-color);\n}\n\nion-content {\n  flex: 1;\n  min-height: 0;\n  --overflow: hidden;\n}\n\n.dyno-grid {\n  flex: 1;\n  min-height: 0;\n  width: 100%;\n  padding: 0;\n  overflow: hidden;\n}\n\n.dyno-row {\n  height: 100%;\n  min-height: 0;\n}\n\n.workspace-switch {\n  display: none;\n}\n\n.dyno-form {\n  max-width: 1600px;\n  height: 100%;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  color: var(--ion-text-color);\n}\n\n.dyno-intro {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  padding: 9px 18px;\n  background: var(--ion-item-background, var(--ion-background-color));\n  border-bottom: 1px solid var(--ion-color-light-shade, #d7d8da);\n}\n\n.dyno-intro h1 {\n  font-size: 1.12rem;\n  margin: 2px 0;\n  font-weight: 800;\n}\n\n.dyno-intro p {\n  margin: 0;\n  color: var(--ion-color-medium-shade);\n  line-height: 1.4;\n  font-size: 0.75rem;\n}\n\n.eyebrow {\n  color: var(--tuner-danger-text, #d62828);\n  letter-spacing: 0.15em;\n  font-size: 0.68rem;\n  font-weight: 800;\n}\n\n.model-tag {\n  flex: none;\n  padding: 5px 9px;\n  border: 1px solid rgba(214, 40, 40, 0.34);\n  border-radius: 999px;\n  color: var(--tuner-danger-text, #d62828);\n  font-size: 0.75rem;\n  font-weight: 700;\n}\n\n.profile-bar {\n  padding: 5px 18px;\n  background: var(--ion-item-background, var(--ion-background-color));\n  border-bottom: 1px solid var(--ion-color-light-shade, #d7d8da);\n}\n\n.profile-bar summary {\n  cursor: pointer;\n  font-size: 0.79rem;\n  font-weight: 700;\n}\n\n.profile-bar .profile-actions {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 8px;\n  padding-top: 5px;\n}\n\n.profile-bar select {\n  min-width: 180px;\n  max-width: 320px;\n  padding: 8px 12px;\n  border: 1px solid var(--ion-color-light-shade, #d7d8da);\n  border-radius: 8px;\n  background: var(--ion-background-color);\n  color: var(--ion-text-color);\n}\n\n.input-panel {\n  border-right: 1px solid var(--ion-color-light-shade, #d7d8da);\n  height: 100%;\n  min-height: 0;\n  overflow-y: auto;\n}\n\n.input-panel ion-accordion ion-item[slot=header] {\n  --min-height: 32px;\n  font-weight: 700;\n  font-size: 0.85rem;\n  letter-spacing: 0.02em;\n}\n\n.input-panel .section-body {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 0 8px;\n  padding: 4px 10px 8px;\n}\n\n.input-panel .section-body ion-item {\n  --padding-start: 0;\n  --inner-padding-end: 0;\n  --min-height: 40px;\n  min-width: 0;\n}\n\n.input-panel .section-body ion-item-divider, .input-panel .section-body .calc-row, .input-panel .section-body .timing-grid, .input-panel .section-body .hint {\n  grid-column: 1/-1;\n}\n\n.input-panel .calc-row {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px 16px;\n  padding: 8px 2px 2px;\n  font-size: 0.8rem;\n  color: var(--ion-color-medium-shade, #5c5f66);\n}\n\n.input-panel .calc-row strong {\n  color: var(--ion-text-color, #1e1e1e);\n}\n\n.input-panel .timing-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  column-gap: 8px;\n}\n\n.input-panel .hint {\n  padding: 4px 4px 0;\n  font-size: 0.78rem;\n  color: var(--ion-color-medium, #92949c);\n}\n\n.output-panel {\n  height: 100%;\n  min-height: 0;\n  overflow-y: auto;\n  padding: 10px 14px;\n}\n\n.output-panel .output-head {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  gap: 6px;\n}\n\n.output-panel .output-actions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n}\n\n.output-panel .output-title {\n  font-size: 0.95rem;\n  font-weight: 700;\n  margin: 2px 0 4px;\n}\n\n.output-panel .peak-grid {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 6px;\n  margin: 6px 0;\n}\n\n.output-panel .peak-grid > div {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  padding: 8px;\n  border-radius: 9px;\n  background: var(--ion-item-background, var(--ion-background-color));\n  border: 1px solid var(--ion-color-light-shade, #d7d8da);\n}\n\n.output-panel .peak-grid small, .output-panel .peak-grid span {\n  color: var(--ion-color-medium-shade);\n  font-size: 0.69rem;\n}\n\n.output-panel .peak-grid strong {\n  color: var(--ion-text-color);\n  font-size: 1.05rem;\n  direction: ltr;\n  text-align: right;\n}\n\n.output-panel .result-switch {\n  margin: 4px 0;\n  min-height: 36px;\n}\n\n.output-panel .chart-controls {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.8rem;\n}\n\n.output-panel .chart-controls select {\n  padding: 5px 8px;\n  border: 1px solid var(--ion-color-light-shade, #d7d8da);\n  border-radius: 8px;\n  background: var(--ion-background-color);\n  color: var(--ion-text-color);\n}\n\n.output-panel .chart-wrap {\n  width: 100%;\n  overflow: hidden;\n  color: var(--ion-text-color);\n  padding: 4px;\n  border-radius: 12px;\n  border: 1px solid var(--ion-color-light-shade, #d7d8da);\n  background: var(--ion-item-background, var(--ion-background-color));\n}\n\n.output-panel .chart-wrap ::ng-deep svg {\n  display: block;\n  width: 100%;\n  height: auto;\n}\n\n.output-panel .issue-box {\n  padding: 12px 16px;\n  margin: 12px 0;\n  border-radius: 10px;\n  border: 1px solid rgba(214, 40, 40, 0.45);\n  color: var(--ion-text-color);\n}\n\n.output-panel .issue-box p {\n  margin: 4px 0;\n  font-size: 0.84rem;\n}\n\n.output-panel .baseline-note, .output-panel .model-note {\n  color: var(--ion-color-medium-shade);\n  font-size: 0.79rem;\n  line-height: 1.9;\n}\n\n.output-panel .model-note {\n  margin: 7px 0;\n}\n\n.output-panel .model-note summary {\n  cursor: pointer;\n  font-weight: 700;\n}\n\n.output-panel .model-note p {\n  margin: 4px 0;\n}\n\n.output-panel .table-wrap {\n  overflow: auto;\n  max-height: min(57vh, 600px);\n}\n\n.output-panel .results-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.82rem;\n}\n\n.output-panel .results-table th, .output-panel .results-table td {\n  border: 1px solid var(--ion-color-light-shade, #d7d8da);\n  padding: 4px 8px;\n  text-align: right;\n  white-space: nowrap;\n}\n\n.output-panel .results-table th {\n  background: var(--ion-color-light, #f4f5f8);\n  color: var(--ion-color-light-contrast);\n  font-weight: 700;\n  text-align: center;\n}\n\n.output-panel .results-table td:first-child {\n  text-align: center;\n  font-weight: 600;\n}\n\n.output-panel .results-table .empty-row {\n  text-align: center;\n  color: var(--ion-color-medium, #92949c);\n  padding: 24px 8px;\n}\n\n@media (max-width: 767px) {\n  .dyno-intro {\n    padding: 6px 10px;\n  }\n  .dyno-intro h1 {\n    font-size: 0.98rem;\n  }\n  .dyno-intro p, .dyno-intro .eyebrow {\n    display: none;\n  }\n\n  .model-tag {\n    font-size: 0.66rem;\n  }\n\n  .profile-bar {\n    padding: 5px 10px;\n  }\n\n  .workspace-switch {\n    display: flex;\n    flex: none;\n    min-height: 38px;\n  }\n\n  .dyno-grid .mobile-hidden {\n    display: none !important;\n  }\n\n  .input-panel {\n    border-right: 0;\n  }\n\n  .input-panel, .output-panel {\n    height: 100%;\n    min-height: 0;\n    overflow-y: auto;\n  }\n\n  .output-panel {\n    padding: 7px 9px;\n  }\n\n  .output-panel .peak-grid {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n}\n\n@media (max-width: 420px) {\n  .output-panel .peak-grid > div {\n    padding: 6px;\n  }\n\n  .output-panel .peak-grid strong {\n    font-size: 0.88rem;\n  }\n\n  .output-panel .peak-grid small, .output-panel .peak-grid span {\n    font-size: 0.61rem;\n  }\n\n  .output-panel .output-actions ion-button {\n    font-size: 0.69rem;\n  }\n}\n\n@media (max-height: 650px) and (min-width: 768px) {\n  .dyno-intro p {\n    display: none;\n  }\n\n  .output-panel .chart-wrap {\n    max-width: 680px;\n  }\n}\n\n:host-context(.dark-theme) {\n  color-scheme: dark;\n  color: var(--tuner-text);\n  --tuner-page: #11151e;\n  --tuner-surface: #1c2230;\n  --tuner-soft: #252e3d;\n  --tuner-border: #465269;\n  --tuner-text: #edf1f8;\n  --tuner-muted: #b2bfd1;\n  --tuner-header: rgba(28, 34, 48, 0.94);\n  --tuner-overlay: rgba(28, 34, 48, 0.95);\n  --tuner-purple-text: #c4b5fd;\n  --tuner-purple-soft: #302444;\n  --tuner-purple-border: #72579b;\n  --tuner-info-text: #93c5fd;\n  --tuner-info-soft: #1d304c;\n  --tuner-info-border: #466b9a;\n  --tuner-warning-text: #fcd477;\n  --tuner-warning-soft: #3b3020;\n  --tuner-warning-border: #93743d;\n  --tuner-success-text: #86efac;\n  --tuner-success-soft: #19392e;\n  --tuner-success-border: #417d60;\n  --tuner-danger-text: #fda4af;\n  --tuner-danger-soft: #402631;\n  --tuner-danger-border: #985367;\n  --tuner-teal-text: #7de4d4;\n  --tuner-teal-soft: #193a3a;\n  --tuner-teal-border: #437f7c;\n}\n\n:host-context(.dark-theme) input:not([type=range]):not([type=checkbox]):not([type=radio]):not([type=button]):not([type=submit]):not([type=file]),\n:host-context(.dark-theme) textarea,\n:host-context(.dark-theme) select {\n  color: var(--tuner-text);\n  background-color: var(--tuner-soft);\n}\n\n:host-context(.dark-theme) input::placeholder, :host-context(.dark-theme) textarea::placeholder {\n  color: var(--tuner-muted);\n  opacity: 0.75;\n}\n\n:host-context(.dark-theme) ion-header.learning-header {\n  --background: var(--tuner-header);\n  background: var(--tuner-header);\n  border-bottom-color: var(--tuner-border);\n}\n\n:host-context(.dark-theme) ion-content {\n  --background: var(--tuner-page);\n  --color: var(--tuner-text);\n}\n\n:host-context(.dark-theme) ion-card:not([color]), :host-context(.dark-theme) ion-list, :host-context(.dark-theme) ion-item:not([color]), :host-context(.dark-theme) ion-item-divider:not([color]) {\n  --background: var(--tuner-surface);\n  --color: var(--tuner-text);\n  --border-color: var(--tuner-border);\n}\n\n:host-context(.dark-theme) ion-list {\n  background: var(--tuner-surface);\n}\n\n:host-context(.dark-theme) ion-card-title, :host-context(.dark-theme) ion-card-subtitle {\n  color: var(--tuner-text);\n}\n\n:host-context(.dark-theme) ion-card[color=lightest], :host-context(.dark-theme) ion-item[color=lightest], :host-context(.dark-theme) ion-fab-button[color=lightest] {\n  --ion-color-base: var(--tuner-surface);\n  --ion-color-contrast: var(--tuner-text);\n  --ion-color-shade: var(--tuner-soft);\n  --ion-color-tint: var(--tuner-soft);\n}\n\n:host-context(.dark-theme) ion-text[color=dark], :host-context(.dark-theme) ion-label[color=dark] {\n  --ion-color-base: var(--tuner-text);\n}\n\n:host-context(.dark-theme) .output-panel .results-table th {\n  background: var(--tuner-soft);\n  color: var(--tuner-text);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImR5bm8uY29tcG9uZW50LnNjc3MiLCIuLlxcX3RoZW1lLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFBUSxhQUFBO0VBQWUsc0JBQUE7RUFBd0IsWUFBQTtFQUFjLGFBQUE7QUFHN0Q7O0FBQUU7RUFDRSxxRUFBQTtFQUNBLDhCQUFBO0VBQ0EsMENBQUE7RUFDQSw4REFBQTtBQUdKOztBQURFO0VBQVksZUFBQTtFQUFpQixnQkFBQTtBQUsvQjs7QUFKRTtFQUFtQyw4QkFBQTtBQU9yQzs7QUFKQTtFQUFjLE9BQUE7RUFBUyxhQUFBO0VBQWUsa0JBQUE7QUFVdEM7O0FBUkE7RUFBYSxPQUFBO0VBQVMsYUFBQTtFQUFlLFdBQUE7RUFBYSxVQUFBO0VBQVksZ0JBQUE7QUFnQjlEOztBQWZBO0VBQVksWUFBQTtFQUFjLGFBQUE7QUFvQjFCOztBQW5CQTtFQUFvQixhQUFBO0FBdUJwQjs7QUFyQkE7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtBQXdCRjs7QUFyQkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtFQUNBLG1FQUFBO0VBQ0EsOERBQUE7QUF3QkY7O0FBdEJFO0VBQUssa0JBQUE7RUFBb0IsYUFBQTtFQUFlLGdCQUFBO0FBMkIxQzs7QUExQkU7RUFBSSxTQUFBO0VBQVcsb0NBQUE7RUFBc0MsZ0JBQUE7RUFBa0Isa0JBQUE7QUFnQ3pFOztBQTdCQTtFQUNFLHdDQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBZ0NGOztBQTdCQTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtFQUNBLHlDQUFBO0VBQ0Esb0JBQUE7RUFDQSx3Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFnQ0Y7O0FBN0JBO0VBQ0UsaUJBQUE7RUFDQSxtRUFBQTtFQUNBLDhEQUFBO0FBZ0NGOztBQTlCRTtFQUFVLGVBQUE7RUFBaUIsa0JBQUE7RUFBbUIsZ0JBQUE7QUFtQ2hEOztBQWxDRTtFQUFtQixhQUFBO0VBQWUsbUJBQUE7RUFBcUIsZUFBQTtFQUFpQixRQUFBO0VBQVUsZ0JBQUE7QUF5Q3BGOztBQXhDRTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHVEQUFBO0VBQ0Esa0JBQUE7RUFDQSx1Q0FBQTtFQUNBLDRCQUFBO0FBMENKOztBQXRDQTtFQUNFLDZEQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQXlDRjs7QUF0Q0k7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQXdDTjs7QUFwQ0U7RUFDRSxhQUFBO0VBQ0EsZ0RBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7QUFzQ0o7O0FBcENJO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQXNDTjs7QUFwQ0k7RUFBbUQsaUJBQUE7QUF1Q3ZEOztBQXBDRTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSw2Q0FBQTtBQXNDSjs7QUFwQ0k7RUFDRSxxQ0FBQTtBQXNDTjs7QUFsQ0U7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0FBb0NKOztBQWpDRTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1Q0FBQTtBQW1DSjs7QUEvQkE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFrQ0Y7O0FBaENFO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsUUFBQTtBQWtDSjs7QUEvQkU7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7QUFpQ0o7O0FBOUJFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBZ0NKOztBQTdCRTtFQUNFLGFBQUE7RUFDQSxnREFBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0FBK0JKOztBQTdCSTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtRUFBQTtFQUNBLHVEQUFBO0FBK0JOOztBQTVCSTtFQUFjLG9DQUFBO0VBQXNDLGtCQUFBO0FBZ0N4RDs7QUEvQkk7RUFBUyw0QkFBQTtFQUE4QixrQkFBQTtFQUFvQixjQUFBO0VBQWdCLGlCQUFBO0FBcUMvRTs7QUFsQ0U7RUFBaUIsYUFBQTtFQUFlLGdCQUFBO0FBc0NsQzs7QUFyQ0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsaUJBQUE7QUF1Q0o7O0FBdENJO0VBQ0UsZ0JBQUE7RUFDQSx1REFBQTtFQUNBLGtCQUFBO0VBQ0EsdUNBQUE7RUFDQSw0QkFBQTtBQXdDTjs7QUFyQ0U7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHVEQUFBO0VBQ0EsbUVBQUE7QUF1Q0o7O0FBdENJO0VBQWdCLGNBQUE7RUFBZ0IsV0FBQTtFQUFhLFlBQUE7QUEyQ2pEOztBQXpDRTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EseUNBQUE7RUFDQSw0QkFBQTtBQTJDSjs7QUExQ0k7RUFBSSxhQUFBO0VBQWUsa0JBQUE7QUE4Q3ZCOztBQTVDRTtFQUNFLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQThDSjs7QUE1Q0U7RUFBYyxhQUFBO0FBK0NoQjs7QUE5Q0U7RUFBc0IsZUFBQTtFQUFpQixnQkFBQTtBQWtEekM7O0FBakRFO0VBQWdCLGFBQUE7QUFvRGxCOztBQWxERTtFQUNFLGNBQUE7RUFDQSw0QkFBQTtBQW9ESjs7QUFqREU7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQW1ESjs7QUFqREk7RUFDRSx1REFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQW1ETjs7QUFoREk7RUFDRSwyQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQWtETjs7QUEvQ0k7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0FBaUROOztBQTlDSTtFQUNFLGtCQUFBO0VBQ0EsdUNBQUE7RUFDQSxpQkFBQTtBQWdETjs7QUEzQ0E7RUFDRTtJQUNFLGlCQUFBO0VBOENGO0VBN0NFO0lBQUssa0JBQUE7RUFnRFA7RUEvQ0U7SUFBYyxhQUFBO0VBa0RoQjs7RUFoREE7SUFBYSxrQkFBQTtFQW9EYjs7RUFuREE7SUFBZSxpQkFBQTtFQXVEZjs7RUF0REE7SUFBb0IsYUFBQTtJQUFlLFVBQUE7SUFBWSxnQkFBQTtFQTREL0M7O0VBM0RBO0lBQTRCLHdCQUFBO0VBK0Q1Qjs7RUE5REE7SUFBZSxlQUFBO0VBa0VmOztFQWpFQTtJQUE4QixZQUFBO0lBQWMsYUFBQTtJQUFlLGdCQUFBO0VBdUUzRDs7RUF0RUE7SUFBZ0IsZ0JBQUE7RUEwRWhCOztFQXpFQTtJQUEyQixnREFBQTtFQTZFM0I7QUFDRjs7QUEzRUE7RUFDRTtJQUFpQyxZQUFBO0VBOEVqQzs7RUE3RUE7SUFBa0Msa0JBQUE7RUFpRmxDOztFQWhGQTtJQUFnRSxrQkFBQTtFQW9GaEU7O0VBbkZBO0lBQTJDLGtCQUFBO0VBdUYzQztBQUNGOztBQXJGQTtFQUNFO0lBQWdCLGFBQUE7RUF3RmhCOztFQXZGQTtJQUE0QixnQkFBQTtFQTJGNUI7QUFDRjs7QUNsWEU7RUFDRSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0NBQUE7RUFDQSx1Q0FBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLDBCQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSwrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLDBCQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtBRG9YSjs7QUNqWEk7OztFQUdFLHdCQUFBO0VBQ0EsbUNBQUE7QURtWE47O0FDaFhJO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0FEa1hOOztBQy9XSTtFQUNFLGlDQUFBO0VBQ0EsK0JBQUE7RUFDQSx3Q0FBQTtBRGlYTjs7QUMvV0k7RUFBYywrQkFBQTtFQUFpQywwQkFBQTtBRG1YbkQ7O0FDbFhJO0VBQ0Usa0NBQUE7RUFDQSwwQkFBQTtFQUNBLG1DQUFBO0FEb1hOOztBQ2xYSTtFQUFXLGdDQUFBO0FEcVhmOztBQ3BYSTtFQUFvQyx3QkFBQTtBRHVYeEM7O0FDdFhJO0VBQ0Usc0NBQUE7RUFDQSx1Q0FBQTtFQUNBLG9DQUFBO0VBQ0EsbUNBQUE7QUR3WE47O0FDdFhJO0VBQWtELG1DQUFBO0FEeVh0RDs7QUE1SkE7RUFDRSw2QkFBQTtFQUNBLHdCQUFBO0FBK0pGIiwiZmlsZSI6ImR5bm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi90aGVtZSc7XG5cbjpob3N0IHsgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgaGVpZ2h0OiAxMDAlOyBtaW4taGVpZ2h0OiAwOyB9XG5cbi5keW5vLWhlYWRlciB7XG4gIGlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKSk7XG4gICAgLS1jb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IpO1xuICAgIC0taW9uLXRvb2xiYXItY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yKTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlLCAjZDdkOGRhKTtcbiAgfVxuICBpb24tdGl0bGUgeyBmb250LXNpemU6IDFyZW07IGZvbnQtd2VpZ2h0OiA4MDA7IH1cbiAgaW9uLWJhY2stYnV0dG9uLCBpb24tbWVudS1idXR0b24geyAtLWNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvcik7IH1cbn1cblxuaW9uLWNvbnRlbnQgeyBmbGV4OiAxOyBtaW4taGVpZ2h0OiAwOyAtLW92ZXJmbG93OiBoaWRkZW47IH1cblxuLmR5bm8tZ3JpZCB7IGZsZXg6IDE7IG1pbi1oZWlnaHQ6IDA7IHdpZHRoOiAxMDAlOyBwYWRkaW5nOiAwOyBvdmVyZmxvdzogaGlkZGVuOyB9XG4uZHluby1yb3cgeyBoZWlnaHQ6IDEwMCU7IG1pbi1oZWlnaHQ6IDA7IH1cbi53b3Jrc3BhY2Utc3dpdGNoIHsgZGlzcGxheTogbm9uZTsgfVxuXG4uZHluby1mb3JtIHtcbiAgbWF4LXdpZHRoOiAxNjAwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvcik7XG59XG5cbi5keW5vLWludHJvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDEycHg7XG4gIHBhZGRpbmc6IDlweCAxOHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvcikpO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlLCAjZDdkOGRhKTtcblxuICBoMSB7IGZvbnQtc2l6ZTogMS4xMnJlbTsgbWFyZ2luOiAycHggMDsgZm9udC13ZWlnaHQ6IDgwMDsgfVxuICBwIHsgbWFyZ2luOiAwOyBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7IGxpbmUtaGVpZ2h0OiAxLjQ7IGZvbnQtc2l6ZTogLjc1cmVtOyB9XG59XG5cbi5leWVicm93IHtcbiAgY29sb3I6IHR1bmVyLWNvbG9yKGRhbmdlci10ZXh0LCAjZDYyODI4KTtcbiAgbGV0dGVyLXNwYWNpbmc6IC4xNWVtO1xuICBmb250LXNpemU6IC42OHJlbTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuLm1vZGVsLXRhZyB7XG4gIGZsZXg6IG5vbmU7XG4gIHBhZGRpbmc6IDVweCA5cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjE0LCA0MCwgNDAsIC4zNCk7XG4gIGJvcmRlci1yYWRpdXM6IDk5OXB4O1xuICBjb2xvcjogdHVuZXItY29sb3IoZGFuZ2VyLXRleHQsICNkNjI4MjgpO1xuICBmb250LXNpemU6IC43NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLnByb2ZpbGUtYmFyIHtcbiAgcGFkZGluZzogNXB4IDE4cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKSk7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUsICNkN2Q4ZGEpO1xuXG4gIHN1bW1hcnkgeyBjdXJzb3I6IHBvaW50ZXI7IGZvbnQtc2l6ZTogLjc5cmVtOyBmb250LXdlaWdodDogNzAwOyB9XG4gIC5wcm9maWxlLWFjdGlvbnMgeyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBmbGV4LXdyYXA6IHdyYXA7IGdhcDogOHB4OyBwYWRkaW5nLXRvcDogNXB4OyB9XG4gIHNlbGVjdCB7XG4gICAgbWluLXdpZHRoOiAxODBweDtcbiAgICBtYXgtd2lkdGg6IDMyMHB4O1xuICAgIHBhZGRpbmc6IDhweCAxMnB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSwgI2Q3ZDhkYSk7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICBjb2xvcjogdmFyKC0taW9uLXRleHQtY29sb3IpO1xuICB9XG59XG5cbi5pbnB1dC1wYW5lbCB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSwgI2Q3ZDhkYSk7XG4gIGhlaWdodDogMTAwJTtcbiAgbWluLWhlaWdodDogMDtcbiAgb3ZlcmZsb3cteTogYXV0bztcblxuICBpb24tYWNjb3JkaW9uIHtcbiAgICBpb24taXRlbVtzbG90PSdoZWFkZXInXSB7XG4gICAgICAtLW1pbi1oZWlnaHQ6IDMycHg7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgZm9udC1zaXplOiAwLjg1cmVtO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcbiAgICB9XG4gIH1cblxuICAuc2VjdGlvbi1ib2R5IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heCgwLCAxZnIpKTtcbiAgICBnYXA6IDAgOHB4O1xuICAgIHBhZGRpbmc6IDRweCAxMHB4IDhweDtcblxuICAgIGlvbi1pdGVtIHtcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG4gICAgICAtLW1pbi1oZWlnaHQ6IDQwcHg7XG4gICAgICBtaW4td2lkdGg6IDA7XG4gICAgfVxuICAgIGlvbi1pdGVtLWRpdmlkZXIsIC5jYWxjLXJvdywgLnRpbWluZy1ncmlkLCAuaGludCB7IGdyaWQtY29sdW1uOiAxIC8gLTE7IH1cbiAgfVxuXG4gIC5jYWxjLXJvdyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgZ2FwOiA4cHggMTZweDtcbiAgICBwYWRkaW5nOiA4cHggMnB4IDJweDtcbiAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSwgIzVjNWY2Nik7XG5cbiAgICBzdHJvbmcge1xuICAgICAgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yLCAjMWUxZTFlKTtcbiAgICB9XG4gIH1cblxuICAudGltaW5nLWdyaWQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgIGNvbHVtbi1nYXA6IDhweDtcbiAgfVxuXG4gIC5oaW50IHtcbiAgICBwYWRkaW5nOiA0cHggNHB4IDA7XG4gICAgZm9udC1zaXplOiAwLjc4cmVtO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLCAjOTI5NDljKTtcbiAgfVxufVxuXG4ub3V0cHV0LXBhbmVsIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtaW4taGVpZ2h0OiAwO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBwYWRkaW5nOiAxMHB4IDE0cHg7XG5cbiAgLm91dHB1dC1oZWFkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBnYXA6IDZweDtcbiAgfVxuXG4gIC5vdXRwdXQtYWN0aW9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgZ2FwOiA0cHg7XG4gIH1cblxuICAub3V0cHV0LXRpdGxlIHtcbiAgICBmb250LXNpemU6IDAuOTVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBtYXJnaW46IDJweCAwIDRweDtcbiAgfVxuXG4gIC5wZWFrLWdyaWQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgbWlubWF4KDAsIDFmcikpO1xuICAgIGdhcDogNnB4O1xuICAgIG1hcmdpbjogNnB4IDA7XG5cbiAgICA+IGRpdiB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGdhcDogMnB4O1xuICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogOXB4O1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpKTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSwgI2Q3ZDhkYSk7XG4gICAgfVxuXG4gICAgc21hbGwsIHNwYW4geyBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7IGZvbnQtc2l6ZTogLjY5cmVtOyB9XG4gICAgc3Ryb25nIHsgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yKTsgZm9udC1zaXplOiAxLjA1cmVtOyBkaXJlY3Rpb246IGx0cjsgdGV4dC1hbGlnbjogcmlnaHQ7IH1cbiAgfVxuXG4gIC5yZXN1bHQtc3dpdGNoIHsgbWFyZ2luOiA0cHggMDsgbWluLWhlaWdodDogMzZweDsgfVxuICAuY2hhcnQtY29udHJvbHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDZweDtcbiAgICBmb250LXNpemU6IC44cmVtO1xuICAgIHNlbGVjdCB7XG4gICAgICBwYWRkaW5nOiA1cHggOHB4O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlLCAjZDdkOGRhKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvcik7XG4gICAgfVxuICB9XG4gIC5jaGFydC13cmFwIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tdGV4dC1jb2xvcik7XG4gICAgcGFkZGluZzogNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlLCAjZDdkOGRhKTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvcikpO1xuICAgIDo6bmctZGVlcCBzdmcgeyBkaXNwbGF5OiBibG9jazsgd2lkdGg6IDEwMCU7IGhlaWdodDogYXV0bzsgfVxuICB9XG4gIC5pc3N1ZS1ib3gge1xuICAgIHBhZGRpbmc6IDEycHggMTZweDtcbiAgICBtYXJnaW46IDEycHggMDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjE0LCA0MCwgNDAsIC40NSk7XG4gICAgY29sb3I6IHZhcigtLWlvbi10ZXh0LWNvbG9yKTtcbiAgICBwIHsgbWFyZ2luOiA0cHggMDsgZm9udC1zaXplOiAuODRyZW07IH1cbiAgfVxuICAuYmFzZWxpbmUtbm90ZSwgLm1vZGVsLW5vdGUge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgICBmb250LXNpemU6IC43OXJlbTtcbiAgICBsaW5lLWhlaWdodDogMS45O1xuICB9XG4gIC5tb2RlbC1ub3RlIHsgbWFyZ2luOiA3cHggMDsgfVxuICAubW9kZWwtbm90ZSBzdW1tYXJ5IHsgY3Vyc29yOiBwb2ludGVyOyBmb250LXdlaWdodDogNzAwOyB9XG4gIC5tb2RlbC1ub3RlIHAgeyBtYXJnaW46IDRweCAwOyB9XG5cbiAgLnRhYmxlLXdyYXAge1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIG1heC1oZWlnaHQ6IG1pbig1N3ZoLCA2MDBweCk7XG4gIH1cblxuICAucmVzdWx0cy10YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICBmb250LXNpemU6IDAuODJyZW07XG5cbiAgICB0aCwgdGQge1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlLCAjZDdkOGRhKTtcbiAgICAgIHBhZGRpbmc6IDRweCA4cHg7XG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgfVxuXG4gICAgdGgge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LCAjZjRmNWY4KTtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QpO1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbiAgICB0ZDpmaXJzdC1jaGlsZCB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cblxuICAgIC5lbXB0eS1yb3cge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0sICM5Mjk0OWMpO1xuICAgICAgcGFkZGluZzogMjRweCA4cHg7XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuZHluby1pbnRybyB7XG4gICAgcGFkZGluZzogNnB4IDEwcHg7XG4gICAgaDEgeyBmb250LXNpemU6IC45OHJlbTsgfVxuICAgIHAsIC5leWVicm93IHsgZGlzcGxheTogbm9uZTsgfVxuICB9XG4gIC5tb2RlbC10YWcgeyBmb250LXNpemU6IC42NnJlbTsgfVxuICAucHJvZmlsZS1iYXIgeyBwYWRkaW5nOiA1cHggMTBweDsgfVxuICAud29ya3NwYWNlLXN3aXRjaCB7IGRpc3BsYXk6IGZsZXg7IGZsZXg6IG5vbmU7IG1pbi1oZWlnaHQ6IDM4cHg7IH1cbiAgLmR5bm8tZ3JpZCAubW9iaWxlLWhpZGRlbiB7IGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfVxuICAuaW5wdXQtcGFuZWwgeyBib3JkZXItcmlnaHQ6IDA7IH1cbiAgLmlucHV0LXBhbmVsLCAub3V0cHV0LXBhbmVsIHsgaGVpZ2h0OiAxMDAlOyBtaW4taGVpZ2h0OiAwOyBvdmVyZmxvdy15OiBhdXRvOyB9XG4gIC5vdXRwdXQtcGFuZWwgeyBwYWRkaW5nOiA3cHggOXB4OyB9XG4gIC5vdXRwdXQtcGFuZWwgLnBlYWstZ3JpZCB7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIG1pbm1heCgwLCAxZnIpKTsgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDIwcHgpIHtcbiAgLm91dHB1dC1wYW5lbCAucGVhay1ncmlkID4gZGl2IHsgcGFkZGluZzogNnB4OyB9XG4gIC5vdXRwdXQtcGFuZWwgLnBlYWstZ3JpZCBzdHJvbmcgeyBmb250LXNpemU6IC44OHJlbTsgfVxuICAub3V0cHV0LXBhbmVsIC5wZWFrLWdyaWQgc21hbGwsIC5vdXRwdXQtcGFuZWwgLnBlYWstZ3JpZCBzcGFuIHsgZm9udC1zaXplOiAuNjFyZW07IH1cbiAgLm91dHB1dC1wYW5lbCAub3V0cHV0LWFjdGlvbnMgaW9uLWJ1dHRvbiB7IGZvbnQtc2l6ZTogLjY5cmVtOyB9XG59XG5cbkBtZWRpYSAobWF4LWhlaWdodDogNjUwcHgpIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAuZHluby1pbnRybyBwIHsgZGlzcGxheTogbm9uZTsgfVxuICAub3V0cHV0LXBhbmVsIC5jaGFydC13cmFwIHsgbWF4LXdpZHRoOiA2ODBweDsgfVxufVxuXG5AaW5jbHVkZSB0dW5lci1kYXJrLXRoZW1lO1xuXG46aG9zdC1jb250ZXh0KC5kYXJrLXRoZW1lKSAub3V0cHV0LXBhbmVsIC5yZXN1bHRzLXRhYmxlIHRoIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tdHVuZXItc29mdCk7XG4gIGNvbG9yOiB2YXIoLS10dW5lci10ZXh0KTtcbn1cbiIsIi8vIEtlZXAgdGhlIG9yaWdpbmFsIGxpZ2h0IGNvbG9yIGF0IGVhY2ggY2FsbCBzaXRlLiBUb2tlbnMgZXhpc3Qgb25seSBpbiBkYXJrIG1vZGUuXG5AZnVuY3Rpb24gdHVuZXItY29sb3IoJHJvbGUsICRsaWdodCkge1xuICBAcmV0dXJuIHZhcigtLXR1bmVyLSN7JHJvbGV9LCAjeyRsaWdodH0pO1xufVxuXG5AbWl4aW4gdHVuZXItZGFyay10aGVtZSB7XG4gIDpob3N0LWNvbnRleHQoLmRhcmstdGhlbWUpIHtcbiAgICBjb2xvci1zY2hlbWU6IGRhcms7XG4gICAgY29sb3I6IHZhcigtLXR1bmVyLXRleHQpO1xuICAgIC0tdHVuZXItcGFnZTogIzExMTUxZTtcbiAgICAtLXR1bmVyLXN1cmZhY2U6ICMxYzIyMzA7XG4gICAgLS10dW5lci1zb2Z0OiAjMjUyZTNkO1xuICAgIC0tdHVuZXItYm9yZGVyOiAjNDY1MjY5O1xuICAgIC0tdHVuZXItdGV4dDogI2VkZjFmODtcbiAgICAtLXR1bmVyLW11dGVkOiAjYjJiZmQxO1xuICAgIC0tdHVuZXItaGVhZGVyOiByZ2JhKDI4LCAzNCwgNDgsIDAuOTQpO1xuICAgIC0tdHVuZXItb3ZlcmxheTogcmdiYSgyOCwgMzQsIDQ4LCAwLjk1KTtcbiAgICAtLXR1bmVyLXB1cnBsZS10ZXh0OiAjYzRiNWZkO1xuICAgIC0tdHVuZXItcHVycGxlLXNvZnQ6ICMzMDI0NDQ7XG4gICAgLS10dW5lci1wdXJwbGUtYm9yZGVyOiAjNzI1NzliO1xuICAgIC0tdHVuZXItaW5mby10ZXh0OiAjOTNjNWZkO1xuICAgIC0tdHVuZXItaW5mby1zb2Z0OiAjMWQzMDRjO1xuICAgIC0tdHVuZXItaW5mby1ib3JkZXI6ICM0NjZiOWE7XG4gICAgLS10dW5lci13YXJuaW5nLXRleHQ6ICNmY2Q0Nzc7XG4gICAgLS10dW5lci13YXJuaW5nLXNvZnQ6ICMzYjMwMjA7XG4gICAgLS10dW5lci13YXJuaW5nLWJvcmRlcjogIzkzNzQzZDtcbiAgICAtLXR1bmVyLXN1Y2Nlc3MtdGV4dDogIzg2ZWZhYztcbiAgICAtLXR1bmVyLXN1Y2Nlc3Mtc29mdDogIzE5MzkyZTtcbiAgICAtLXR1bmVyLXN1Y2Nlc3MtYm9yZGVyOiAjNDE3ZDYwO1xuICAgIC0tdHVuZXItZGFuZ2VyLXRleHQ6ICNmZGE0YWY7XG4gICAgLS10dW5lci1kYW5nZXItc29mdDogIzQwMjYzMTtcbiAgICAtLXR1bmVyLWRhbmdlci1ib3JkZXI6ICM5ODUzNjc7XG4gICAgLS10dW5lci10ZWFsLXRleHQ6ICM3ZGU0ZDQ7XG4gICAgLS10dW5lci10ZWFsLXNvZnQ6ICMxOTNhM2E7XG4gICAgLS10dW5lci10ZWFsLWJvcmRlcjogIzQzN2Y3YztcblxuICAgIC8vIE5hdGl2ZSBjb250cm9scyB3aXRob3V0IGFuIGV4cGxpY2l0IGxpZ2h0IGJhY2tncm91bmQgbmVlZCBhIGRhcmsgc3VyZmFjZSB0b28uXG4gICAgaW5wdXQ6bm90KFt0eXBlPSdyYW5nZSddKTpub3QoW3R5cGU9J2NoZWNrYm94J10pOm5vdChbdHlwZT0ncmFkaW8nXSk6bm90KFt0eXBlPSdidXR0b24nXSk6bm90KFt0eXBlPSdzdWJtaXQnXSk6bm90KFt0eXBlPSdmaWxlJ10pLFxuICAgIHRleHRhcmVhLFxuICAgIHNlbGVjdCB7XG4gICAgICBjb2xvcjogdmFyKC0tdHVuZXItdGV4dCk7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10dW5lci1zb2Z0KTtcbiAgICB9XG5cbiAgICBpbnB1dDo6cGxhY2Vob2xkZXIsIHRleHRhcmVhOjpwbGFjZWhvbGRlciB7XG4gICAgICBjb2xvcjogdmFyKC0tdHVuZXItbXV0ZWQpO1xuICAgICAgb3BhY2l0eTogMC43NTtcbiAgICB9XG5cbiAgICBpb24taGVhZGVyLmxlYXJuaW5nLWhlYWRlciB7XG4gICAgICAtLWJhY2tncm91bmQ6IHZhcigtLXR1bmVyLWhlYWRlcik7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS10dW5lci1oZWFkZXIpO1xuICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdmFyKC0tdHVuZXItYm9yZGVyKTtcbiAgICB9XG4gICAgaW9uLWNvbnRlbnQgeyAtLWJhY2tncm91bmQ6IHZhcigtLXR1bmVyLXBhZ2UpOyAtLWNvbG9yOiB2YXIoLS10dW5lci10ZXh0KTsgfVxuICAgIGlvbi1jYXJkOm5vdChbY29sb3JdKSwgaW9uLWxpc3QsIGlvbi1pdGVtOm5vdChbY29sb3JdKSwgaW9uLWl0ZW0tZGl2aWRlcjpub3QoW2NvbG9yXSkge1xuICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS10dW5lci1zdXJmYWNlKTtcbiAgICAgIC0tY29sb3I6IHZhcigtLXR1bmVyLXRleHQpO1xuICAgICAgLS1ib3JkZXItY29sb3I6IHZhcigtLXR1bmVyLWJvcmRlcik7XG4gICAgfVxuICAgIGlvbi1saXN0IHsgYmFja2dyb3VuZDogdmFyKC0tdHVuZXItc3VyZmFjZSk7IH1cbiAgICBpb24tY2FyZC10aXRsZSwgaW9uLWNhcmQtc3VidGl0bGUgeyBjb2xvcjogdmFyKC0tdHVuZXItdGV4dCk7IH1cbiAgICBpb24tY2FyZFtjb2xvcj0nbGlnaHRlc3QnXSwgaW9uLWl0ZW1bY29sb3I9J2xpZ2h0ZXN0J10sIGlvbi1mYWItYnV0dG9uW2NvbG9yPSdsaWdodGVzdCddIHtcbiAgICAgIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLXR1bmVyLXN1cmZhY2UpO1xuICAgICAgLS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLXR1bmVyLXRleHQpO1xuICAgICAgLS1pb24tY29sb3Itc2hhZGU6IHZhcigtLXR1bmVyLXNvZnQpO1xuICAgICAgLS1pb24tY29sb3ItdGludDogdmFyKC0tdHVuZXItc29mdCk7XG4gICAgfVxuICAgIGlvbi10ZXh0W2NvbG9yPSdkYXJrJ10sIGlvbi1sYWJlbFtjb2xvcj0nZGFyayddIHsgLS1pb24tY29sb3ItYmFzZTogdmFyKC0tdHVuZXItdGV4dCk7IH1cbiAgfVxufVxuIl19 */";

/***/ }),

/***/ 23532:
/*!***************************************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/dyno/cylinder-head-airflow-dialog.component.html?ngResource ***!
  \***************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"interior-header\">\n  \n  <app-page-header fallback=\"/TunerPlus\">\n<span page-title>Cylinder Head Airflow Data</span>\n<ion-buttons page-actions slot=\"end\">\n      <ion-button (click)=\"cancel()\">\n        <ion-icon name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </app-page-header>\n</ion-header>\n\n<ion-content class=\"airflow-dialog\" *ngIf=\"form\">\n  <form [formGroup]=\"form\">\n\n    <div class=\"top-row\">\n      <ion-item class=\"description-item\">\n        <ion-label position=\"stacked\">Description</ion-label>\n        <ion-input formControlName=\"description\" placeholder=\"Enter a Text Description for this Airflow Data\"></ion-input>\n      </ion-item>\n\n      <ion-item class=\"data-points-item\">\n        <ion-label position=\"stacked\">Data Points</ion-label>\n        <ion-select formControlName=\"dataPoints\">\n          <ion-select-option *ngFor=\"let n of dataPointOptions\" [value]=\"n\">{{ n }}</ion-select-option>\n        </ion-select>\n      </ion-item>\n    </div>\n\n    <div class=\"valves-row\">\n\n      <!-- INTAKE VALVE -->\n      <fieldset class=\"valve-fieldset\" formGroupName=\"intake\">\n        <legend>Intake Valve</legend>\n\n        <ion-item>\n          <ion-label position=\"stacked\">Test Diameter: mm</ion-label>\n          <ion-input type=\"number\" step=\"0.01\" formControlName=\"testDiameterMm\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"stacked\">Pressure Drop: cmH2O</ion-label>\n          <ion-input type=\"number\" step=\"0.01\" formControlName=\"pressureDropCmH2O\"></ion-input>\n        </ion-item>\n\n        <div class=\"points-table\" formArrayName=\"points\">\n          <div class=\"points-header\">\n            <span>Lift: mm</span>\n            <span>Flow: cfm</span>\n          </div>\n          <div class=\"points-row\" *ngFor=\"let row of intakePoints.controls; let i = index\" [formGroupName]=\"i\">\n            <ion-input type=\"number\" step=\"0.01\" formControlName=\"liftMm\"\n                       [disabled]=\"!isRowActive(i)\" [placeholder]=\"isRowActive(i) ? '' : '****'\"></ion-input>\n            <ion-input type=\"number\" step=\"0.1\" formControlName=\"flowCfm\"\n                       [disabled]=\"!isRowActive(i)\" [placeholder]=\"isRowActive(i) ? '' : '****'\"></ion-input>\n          </div>\n        </div>\n      </fieldset>\n\n      <!-- EXHAUST VALVE -->\n      <fieldset class=\"valve-fieldset\" formGroupName=\"exhaust\">\n        <legend>Exhaust Valve</legend>\n\n        <ion-item>\n          <ion-label position=\"stacked\">Test Diameter: mm</ion-label>\n          <ion-input type=\"number\" step=\"0.01\" formControlName=\"testDiameterMm\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"stacked\">Pressure Drop: cmH2O</ion-label>\n          <ion-input type=\"number\" step=\"0.01\" formControlName=\"pressureDropCmH2O\"></ion-input>\n        </ion-item>\n\n        <div class=\"points-table\" formArrayName=\"points\">\n          <div class=\"points-header\">\n            <span>Lift: mm</span>\n            <span>Flow: cfm</span>\n          </div>\n          <div class=\"points-row\" *ngFor=\"let row of exhaustPoints.controls; let i = index\" [formGroupName]=\"i\">\n            <ion-input type=\"number\" step=\"0.01\" formControlName=\"liftMm\"\n                       [disabled]=\"!isRowActive(i)\" [placeholder]=\"isRowActive(i) ? '' : '****'\"></ion-input>\n            <ion-input type=\"number\" step=\"0.1\" formControlName=\"flowCfm\"\n                       [disabled]=\"!isRowActive(i)\" [placeholder]=\"isRowActive(i) ? '' : '****'\"></ion-input>\n          </div>\n        </div>\n      </fieldset>\n\n    </div>\n  </form>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"saveAs()\">Save As...</ion-button>\n      <ion-button (click)=\"open()\">Open...</ion-button>\n      <ion-button (click)=\"calcOthers()\">Calc Others</ion-button>\n      <ion-button (click)=\"resetAll()\">Reset All</ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button fill=\"solid\" color=\"primary\" (click)=\"ok()\">OK</ion-button>\n      <ion-button (click)=\"cancel()\">Cancel</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n";

/***/ }),

/***/ 65937:
/*!***************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/dyno/dyno.component.html?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"interior-header\">\n  \n  <app-page-header fallback=\"/TunerPlus\" [defaultBack]=\"false\">\n<ion-buttons page-back><ion-back-button text=\"\" icon=\"arrow-back-outline\" defaultHref=\"/TunerPlus\"></ion-back-button></ion-buttons>\n<span page-title>شبیه‌ساز داینو</span>\n  </app-page-header>\n</ion-header>\r\n\r\n<ion-content [scrollY]=\"false\">\r\n  <app-loading *ngIf=\"loading\"></app-loading>\r\n\r\n  <form *ngIf=\"!loading && isShow\" [formGroup]=\"form\" class=\"dyno-form\">\r\n    <section class=\"dyno-intro\" dir=\"rtl\">\r\n      <div>\r\n        <span class=\"eyebrow\">TUNER PLUS / DYNO</span>\r\n        <h1>شبیه‌ساز داینو موتور</h1>\r\n        <p>قطعات موتور را تغییر دهید و اثرشان را روی منحنی قدرت، گشتاور و فشارها ببینید.</p>\r\n      </div>\r\n      <span class=\"model-tag\">مدل تخمینی مهندسی</span>\r\n    </section>\r\n    <details class=\"profile-bar\" dir=\"rtl\">\r\n      <summary>پروفایل‌های موتور <span *ngIf=\"savedProfiles.length\">({{ savedProfiles.length }})</span></summary>\r\n      <div class=\"profile-actions\">\r\n        <ion-button type=\"button\" size=\"small\" fill=\"outline\" (click)=\"saveProfile()\" [disabled]=\"!results.length\">ذخیره موتور</ion-button>\r\n        <select #profileSelect aria-label=\"موتورهای ذخیره‌شده\" [value]=\"selectedProfileId || ''\"\r\n                (change)=\"selectedProfileId = +profileSelect.value; loadProfile()\">\r\n          <option value=\"\">موتورهای ذخیره‌شده</option>\r\n          <option *ngFor=\"let profile of savedProfiles\" [value]=\"profile.id\">{{ profile.name }}</option>\r\n        </select>\r\n        <ion-button type=\"button\" size=\"small\" fill=\"clear\" color=\"danger\" *ngIf=\"selectedProfileId\" (click)=\"deleteProfile()\">حذف ذخیره</ion-button>\r\n      </div>\r\n    </details>\r\n    <ion-segment class=\"workspace-switch\" [value]=\"workspaceView\" (ionChange)=\"setWorkspaceView($any($event).detail.value)\">\r\n      <ion-segment-button value=\"results\"><ion-label>نتیجه</ion-label></ion-segment-button>\r\n      <ion-segment-button value=\"inputs\"><ion-label>تنظیمات موتور</ion-label></ion-segment-button>\r\n    </ion-segment>\r\n    <ion-grid class=\"dyno-grid\">\r\n      <ion-row class=\"dyno-row\">\r\n\r\n        <!-- ============================= LEFT: INPUT PANEL ============================= -->\r\n        <ion-col size=\"12\" size-md=\"5\" class=\"input-panel\" [class.mobile-hidden]=\"workspaceView !== 'inputs'\">\r\n          <ion-accordion-group [multiple]=\"false\" value=\"shortBlock\">\r\n\r\n            <!-- SHORT BLOCK -->\r\n            <ion-accordion value=\"shortBlock\">\r\n              <ion-item slot=\"header\" color=\"light\"><ion-label>SHORT BLOCK</ion-label></ion-item>\r\n              <div slot=\"content\" formGroupName=\"shortBlock\" class=\"section-body\">\r\n                <ion-item>\r\n                  <ion-label position=\"stacked\">Block</ion-label>\r\n                  <ion-input formControlName=\"block\"></ion-input>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label position=\"stacked\">Bore (mm)</ion-label>\r\n                  <ion-input type=\"number\" formControlName=\"bore\"></ion-input>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label position=\"stacked\">Stroke (mm)</ion-label>\r\n                  <ion-input type=\"number\" formControlName=\"stroke\"></ion-input>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label position=\"stacked\">Cylinders</ion-label>\r\n                  <ion-input type=\"number\" formControlName=\"cylinders\"></ion-input>\r\n                </ion-item>\r\n                <div class=\"calc-row\">\r\n                  <span>Cyl Vol: <strong>{{ shortBlockCalc.cylVolumeCc }} cc</strong></span>\r\n                  <span>Total Vol: <strong>{{ shortBlockCalc.totalVolumeCc }} cc</strong></span>\r\n                </div>\r\n              </div>\r\n            </ion-accordion>\r\n\r\n            <!-- CYLINDER HEADS -->\r\n            <ion-accordion value=\"cylinderHeads\">\r\n              <ion-item slot=\"header\" color=\"light\"><ion-label>CYLINDER HEADS</ion-label></ion-item>\r\n              <div slot=\"content\" formGroupName=\"cylinderHeads\" class=\"section-body\">\r\n                <ion-item>\r\n                  <ion-label position=\"stacked\">Cylinder Heads</ion-label>\r\n                  <ion-select formControlName=\"headOptionId\" (ionChange)=\"onCylinderHeadChanged()\">\r\n                    <ion-select-option *ngFor=\"let opt of cylinderHeadOptions\" [value]=\"opt.id\">\r\n                      {{ opt.label }}\r\n                    </ion-select-option>\r\n                  </ion-select>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label position=\"stacked\">Airflow File</ion-label>\r\n                  <ion-input [value]=\"form.get('cylinderHeads.airflowFile').value || '***'\" readonly></ion-input>\r\n                  <ion-button *ngIf=\"isCustomCylinderHead\" fill=\"clear\" slot=\"end\"\r\n                              (click)=\"openCylinderHeadAirflowDialog(form.get('cylinderHeads.customAirflow').value)\">\r\n                    Edit...\r\n                  </ion-button>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label position=\"stacked\">Intake Valves</ion-label>\r\n                  <ion-input type=\"number\" formControlName=\"intakeValves\"></ion-input>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label position=\"stacked\">Exhaust Valves</ion-label>\r\n                  <ion-input type=\"number\" formControlName=\"exhaustValves\"></ion-input>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label position=\"stacked\">Intake Valve (mm)</ion-label>\r\n                  <ion-input type=\"number\" formControlName=\"intakeValveDiaMm\"></ion-input>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label position=\"stacked\">Exhaust Valve (mm)</ion-label>\r\n                  <ion-input type=\"number\" formControlName=\"exhaustValveDiaMm\"></ion-input>\r\n                </ion-item>\r\n              </div>\r\n            </ion-accordion>\r\n\r\n            <!-- COMPRESSION -->\r\n            <ion-accordion value=\"compression\">\r\n              <ion-item slot=\"header\" color=\"light\"><ion-label>COMPRESSION</ion-label></ion-item>\r\n              <div slot=\"content\" formGroupName=\"compression\" class=\"section-body\">\r\n                <ion-item>\r\n                  <ion-label position=\"stacked\">Compression Ratio</ion-label>\r\n                  <ion-input type=\"number\" step=\"0.1\" formControlName=\"compressionRatio\"></ion-input>\r\n                </ion-item>\r\n                <div class=\"calc-row\">\r\n                  <span>Combustion Space: <strong>{{ compressionCalc.combustionSpaceCc }} cc</strong></span>\r\n                </div>\r\n              </div>\r\n            </ion-accordion>\r\n\r\n            <!-- INDUCTION -->\r\n            <ion-accordion value=\"induction\">\r\n              <ion-item slot=\"header\" color=\"light\"><ion-label>INDUCTION</ion-label></ion-item>\r\n              <div slot=\"content\" formGroupName=\"induction\" class=\"section-body\">\r\n                <ion-item>\r\n                  <ion-label position=\"stacked\">Induction Flow (cfm)</ion-label>\r\n                  <ion-input type=\"number\" formControlName=\"inductionFlowCfm\"></ion-input>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label position=\"stacked\">@ Pressure Drop (inHg)</ion-label>\r\n                  <ion-input type=\"number\" step=\"0.01\" formControlName=\"inductionFlowPressureDropInHg\"></ion-input>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label position=\"stacked\">Fuel</ion-label>\r\n                  <ion-select formControlName=\"fuel\">\r\n                    <ion-select-option *ngFor=\"let f of fuelOptions\" [value]=\"f\">{{ f }}</ion-select-option>\r\n                  </ion-select>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label position=\"stacked\">Manifold Type</ion-label>\r\n                  <ion-select formControlName=\"manifoldType\">\r\n                    <ion-select-option *ngFor=\"let m of manifoldTypeOptions\" [value]=\"m\">{{ m }}</ion-select-option>\r\n                  </ion-select>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label position=\"stacked\">N2O (lbs/min)</ion-label>\r\n                  <ion-input type=\"number\" step=\"0.1\" formControlName=\"n2oLbsMin\"></ion-input>\r\n                </ion-item>\r\n              </div>\r\n            </ion-accordion>\r\n\r\n            <!-- FORCED INDUCTION -->\r\n            <ion-accordion value=\"forcedInduction\">\r\n              <ion-item slot=\"header\" color=\"light\">\r\n                <ion-label>FORCED INDUCTION</ion-label>\r\n              </ion-item>\r\n              <div slot=\"content\" formGroupName=\"forcedInduction\" class=\"section-body\">\r\n                <ion-item>\r\n                  <ion-label>Enable Forced Induction</ion-label>\r\n                  <ion-toggle formControlName=\"enabled\" slot=\"end\"></ion-toggle>\r\n                </ion-item>\r\n                <ng-container *ngIf=\"form.get('forcedInduction.enabled').value\">\r\n                  <ion-item>\r\n                    <ion-label position=\"stacked\">Blower</ion-label>\r\n                    <ion-input formControlName=\"blowerType\"></ion-input>\r\n                  </ion-item>\r\n                  <ion-item>\r\n                    <ion-label position=\"stacked\">Flow (cfm)</ion-label>\r\n                    <ion-input type=\"number\" formControlName=\"flowCfm\"></ion-input>\r\n                  </ion-item>\r\n                  <ion-item>\r\n                    <ion-label position=\"stacked\">Pressure Ratio</ion-label>\r\n                    <ion-input type=\"number\" step=\"0.01\" formControlName=\"pressureRatio\"></ion-input>\r\n                  </ion-item>\r\n                  <ion-item>\r\n                    <ion-label position=\"stacked\">Intercooler (%)</ion-label>\r\n                    <ion-input type=\"number\" formControlName=\"intercoolerEfficiencyPct\"></ion-input>\r\n                  </ion-item>\r\n                  <ion-item>\r\n                    <ion-label position=\"stacked\">Boost Limit (psi)</ion-label>\r\n                    <ion-input type=\"number\" formControlName=\"boostLimitPsi\"></ion-input>\r\n                  </ion-item>\r\n                  <ion-item>\r\n                    <ion-label position=\"stacked\">Eff (%)</ion-label>\r\n                    <ion-input type=\"number\" formControlName=\"efficiencyPct\"></ion-input>\r\n                  </ion-item>\r\n                  <ion-item>\r\n                    <ion-label position=\"stacked\">Surge Flow (cfm)</ion-label>\r\n                    <ion-input type=\"number\" formControlName=\"surgeFlowCfm\"></ion-input>\r\n                  </ion-item>\r\n                </ng-container>\r\n                <p class=\"hint\" *ngIf=\"form.get('forcedInduction.enabled').value\">\r\n                  بوست، دمای شارژ، محدودیت دبی و سرج در محاسبه لحاظ می‌شوند. دورگیری توربو، نقشه کمپرسور و ناک شبیه‌سازی نمی‌شوند.\r\n                </p>\r\n              </div>\r\n            </ion-accordion>\r\n\r\n            <!-- EXHAUST -->\r\n            <ion-accordion value=\"exhaust\">\r\n              <ion-item slot=\"header\" color=\"light\"><ion-label>EXHAUST</ion-label></ion-item>\r\n              <div slot=\"content\" formGroupName=\"exhaust\" class=\"section-body\">\r\n                <ion-item>\r\n                  <ion-label position=\"stacked\">Exhaust System</ion-label>\r\n                  <ion-select formControlName=\"exhaustSystem\">\r\n                    <ion-select-option *ngFor=\"let e of exhaustSystemOptions\" [value]=\"e\">{{ e }}</ion-select-option>\r\n                  </ion-select>\r\n                </ion-item>\r\n              </div>\r\n            </ion-accordion>\r\n\r\n            <!-- CAMSHAFT -->\r\n            <ion-accordion value=\"camshaft\">\r\n              <ion-item slot=\"header\" color=\"light\"><ion-label>CAMSHAFT</ion-label></ion-item>\r\n              <div slot=\"content\" formGroupName=\"camshaft\" class=\"section-body\">\r\n                <ion-item>\r\n                  <ion-label position=\"stacked\">Camshaft Type</ion-label>\r\n                  <ion-select formControlName=\"camPresetId\" (ionChange)=\"onCamshaftPresetChanged()\">\r\n                    <ion-select-option *ngFor=\"let c of camshaftPresets\" [value]=\"c.id\">{{ c.label }}</ion-select-option>\r\n                  </ion-select>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label position=\"stacked\">Lifter</ion-label>\r\n                  <ion-select formControlName=\"lifterType\">\r\n                    <ion-select-option *ngFor=\"let l of lifterOptions\" [value]=\"l\">{{ l }}</ion-select-option>\r\n                  </ion-select>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label position=\"stacked\">Cam Specs @</ion-label>\r\n                  <ion-select formControlName=\"camSpecsBasis\">\r\n                    <ion-select-option *ngFor=\"let s of camSpecBasisOptions\" [value]=\"s\">{{ s }}</ion-select-option>\r\n                  </ion-select>\r\n                </ion-item>\r\n                <p class=\"hint\">رویدادهای .050 اینچ برای تخمین منحنی با اصلاح تقریبی ۳۵ درجه به زمان‌بندی نشیمن تبدیل می‌شوند.</p>\r\n                <ion-item>\r\n                  <ion-label position=\"stacked\">Int Lift@Valve (mm)</ion-label>\r\n                  <ion-input type=\"number\" step=\"0.01\" formControlName=\"intLiftAtValveMm\"></ion-input>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label position=\"stacked\">Exh Lift@Valve (mm)</ion-label>\r\n                  <ion-input type=\"number\" step=\"0.01\" formControlName=\"exhLiftAtValveMm\"></ion-input>\r\n                </ion-item>\r\n                <ion-item>\r\n                  <ion-label position=\"stacked\">Timing @ Adv(+)/Ret(-)</ion-label>\r\n                  <ion-input type=\"number\" step=\"0.1\" formControlName=\"timingAdvRetDeg\"></ion-input>\r\n                </ion-item>\r\n\r\n                <ion-item-divider>Nominal Timing</ion-item-divider>\r\n                <div class=\"timing-grid\">\r\n                  <ion-item>\r\n                    <ion-label position=\"stacked\">IVO (BTDC)</ion-label>\r\n                    <ion-input type=\"number\" step=\"0.1\" formControlName=\"ivoBTDC\" [readonly]=\"!isCustomCamshaft\"></ion-input>\r\n                  </ion-item>\r\n                  <ion-item>\r\n                    <ion-label position=\"stacked\">IVC (ABDC)</ion-label>\r\n                    <ion-input type=\"number\" step=\"0.1\" formControlName=\"ivcABDC\" [readonly]=\"!isCustomCamshaft\"></ion-input>\r\n                  </ion-item>\r\n                  <ion-item>\r\n                    <ion-label position=\"stacked\">EVO (BBDC)</ion-label>\r\n                    <ion-input type=\"number\" step=\"0.1\" formControlName=\"evoBBDC\" [readonly]=\"!isCustomCamshaft\"></ion-input>\r\n                  </ion-item>\r\n                  <ion-item>\r\n                    <ion-label position=\"stacked\">EVC (ATDC)</ion-label>\r\n                    <ion-input type=\"number\" step=\"0.1\" formControlName=\"evcATDC\" [readonly]=\"!isCustomCamshaft\"></ion-input>\r\n                  </ion-item>\r\n                </div>\r\n\r\n                <div class=\"calc-row\" *ngIf=\"camshaftCalc\">\r\n                  <span>Lobe Center: <strong>{{ camshaftCalc.lobeCenterDeg }}</strong></span>\r\n                  <span>Valve Overlap: <strong>{{ camshaftCalc.valveOverlapDeg }}</strong></span>\r\n                  <span>Int Duration: <strong>{{ camshaftCalc.intDurationDeg }}</strong></span>\r\n                  <span>Exh Duration: <strong>{{ camshaftCalc.exhDurationDeg }}</strong></span>\r\n                  <span>ICA (ATDC): <strong>{{ camshaftCalc.icaATDC }}</strong></span>\r\n                  <span>ECA (BTDC): <strong>{{ camshaftCalc.ecaBTDC }}</strong></span>\r\n                  <span>Shifted IVO: <strong>{{ camshaftCalc.ivoShifted }}</strong></span>\r\n                  <span>Shifted IVC: <strong>{{ camshaftCalc.ivcShifted }}</strong></span>\r\n                  <span>Shifted EVO: <strong>{{ camshaftCalc.evoShifted }}</strong></span>\r\n                  <span>Shifted EVC: <strong>{{ camshaftCalc.evcShifted }}</strong></span>\r\n                </div>\r\n              </div>\r\n            </ion-accordion>\r\n\r\n          </ion-accordion-group>\r\n        </ion-col>\r\n\r\n        <!-- ============================= RIGHT: OUTPUT TABLE ============================= -->\r\n        <ion-col size=\"12\" size-md=\"7\" class=\"output-panel\" [class.mobile-hidden]=\"workspaceView !== 'results'\">\r\n          <div class=\"output-head\" dir=\"rtl\">\r\n            <div>\r\n              <span class=\"eyebrow\">LIVE RESULTS</span>\r\n              <h2 class=\"output-title\">قدرت و فشارهای محاسبه‌شده</h2>\r\n            </div>\r\n            <div class=\"output-actions\">\r\n              <ion-button type=\"button\" size=\"small\" fill=\"outline\" (click)=\"saveBaseline()\" [disabled]=\"!results.length\">ثبت مبنا</ion-button>\r\n              <ion-button type=\"button\" size=\"small\" fill=\"clear\" *ngIf=\"baseline.length\" (click)=\"clearBaseline()\">حذف مبنا</ion-button>\r\n              <ion-button type=\"button\" size=\"small\" fill=\"outline\" (click)=\"exportCsv()\" [disabled]=\"!results.length\">CSV</ion-button>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"issue-box\" *ngIf=\"modelIssues.length\" dir=\"rtl\">\r\n            <strong>ورودی‌ها را بررسی کنید</strong>\r\n            <p *ngFor=\"let issue of modelIssues\">{{ issue }}</p>\r\n          </div>\r\n\r\n          <div class=\"peak-grid\" *ngIf=\"peakPower && peakTorque\" dir=\"rtl\">\r\n            <div><small>بیشینه قدرت</small><strong>{{ peakPower.powerFlyHp }} hp</strong><span>در {{ peakPower.rpm }} rpm</span></div>\r\n            <div><small>بیشینه گشتاور</small><strong>{{ peakTorque.torqueFlyLbFt }} lb-ft</strong><span>در {{ peakTorque.rpm }} rpm</span></div>\r\n            <div><small>حجم موتور</small><strong>{{ shortBlockCalc.totalVolumeCc | number:'1.0-0' }} cc</strong><span>{{ form.get('shortBlock.cylinders').value }} سیلندر</span></div>\r\n          </div>\r\n\r\n          <p class=\"baseline-note\" *ngIf=\"baseline.length\" dir=\"rtl\">\r\n            مبنای مقایسه: {{ baselineName }}. اختلاف بیشینه قدرت: {{ peakPowerDelta > 0 ? '+' : '' }}{{ peakPowerDelta }} hp.\r\n            منحنی خاکستری مقدار مبنا برای نمودار انتخاب‌شده است.\r\n          </p>\r\n          <ion-segment class=\"result-switch\" [value]=\"resultView\" (ionChange)=\"resultView = $any($event).detail.value\">\r\n            <ion-segment-button value=\"graph\"><ion-label>نمودار</ion-label></ion-segment-button>\r\n            <ion-segment-button value=\"table\"><ion-label>جدول</ion-label></ion-segment-button>\r\n          </ion-segment>\r\n\r\n          <div class=\"chart-controls\" *ngIf=\"resultView === 'graph'\" dir=\"rtl\">\r\n            <label for=\"dyno-chart-metric\">نمایش نمودار</label>\r\n            <select id=\"dyno-chart-metric\" #metricSelect [value]=\"chartMetric\"\r\n                    (change)=\"setChartMetric(metricSelect.value)\">\r\n              <option value=\"output\">قدرت و گشتاور</option>\r\n              <option value=\"pressure\">فشارهای موتور</option>\r\n              <option value=\"ve\">بازده حجمی</option>\r\n              <option value=\"map\">فشار منیفولد</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"chart-wrap\" *ngIf=\"resultView === 'graph' && chartSvg\" [innerHTML]=\"chartSvg\"></div>\r\n\r\n          <div class=\"table-wrap\" *ngIf=\"resultView === 'table'\">\r\n            <table class=\"results-table\">\r\n              <thead>\r\n                <tr>\r\n                  <th>Engine<br/>RPM</th>\r\n                  <th>Power<br/>hp (Fly)</th>\r\n                  <th>Torque<br/>lb-ft (Fly)</th>\r\n                  <th>Int Man<br/>inHg abs</th>\r\n                  <th>Vol<br/>Eff %</th>\r\n                  <th>IMEP<br/>psi</th>\r\n                  <th>FMEP<br/>psi</th>\r\n                  <th>PMEP<br/>psi</th>\r\n                  <th>BMEP<br/>psi</th>\r\n                  <th *ngIf=\"baseline.length\">Base<br/>hp</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let row of results\">\r\n                  <td>{{ row.rpm }}</td>\r\n                  <td>{{ row.powerFlyHp }}</td>\r\n                  <td>{{ row.torqueFlyLbFt }}</td>\r\n                  <td>{{ row.intManPressureInHg }}</td>\r\n                  <td>{{ row.volEffPct }}</td>\r\n                  <td>{{ row.imepPsi }}</td>\r\n                  <td>{{ row.fmepPsi }}</td>\r\n                  <td>{{ row.pmepPsi }}</td>\r\n                  <td>{{ row.bmepPsi }}</td>\r\n                  <td *ngIf=\"baseline.length\">{{ baselineAtRpm(row.rpm)?.powerFlyHp }}</td>\r\n                </tr>\r\n                <tr *ngIf=\"!results.length\">\r\n                  <td [attr.colspan]=\"baseline.length ? 10 : 9\" class=\"empty-row\">ورودی‌های معتبر را تکمیل کنید.</td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n          <details class=\"model-note\" dir=\"rtl\">\r\n            <summary>فرض‌ها و محدودیت‌های مدل</summary>\r\n            <p>\r\n              خروجی، تخمین توان میل‌لنگ در دریچه گاز باز و شرایط استاندارد سطح دریاست. برای تیون نهایی، توان‌سنجی و داده‌های واقعی موتور لازم است.\r\n              فشار منیفولد مطلق (inHg) و VE بر مبنای جرم هوای معادل در شرایط محیط است؛ BMEP = IMEP − FMEP − PMEP.\r\n              اثر نیتروس با فرض سوخت‌رسانی کافی تخمین زده می‌شود. زمان‌بندی جرقه، ناک، نقشه کمپرسور و دورگیری توربو در این مدل نیستند.\r\n            </p>\r\n          </details>\r\n        </ion-col>\r\n\r\n      </ion-row>\r\n    </ion-grid>\r\n  </form>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_view_pages_tuner-plus_dyno_dyno_module_ts.js.map