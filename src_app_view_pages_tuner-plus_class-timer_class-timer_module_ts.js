"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_view_pages_tuner-plus_class-timer_class-timer_module_ts"],{

/***/ 39548:
/*!****************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/class-timer/class-timer.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClassTimerComponent": () => (/* binding */ ClassTimerComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _class_timer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class-timer.component.html?ngResource */ 56014);
/* harmony import */ var _class_timer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./class-timer.component.scss?ngResource */ 29967);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let ClassTimerComponent = class ClassTimerComponent {
    constructor() {
        this.totalSeconds = 300; // پیش‌فرض ۵ دقیقه
        this.remainingSeconds = 300;
        this.isRunning = false;
        this.isFinished = false;
        this.intervalId = null;
        this.activityName = 'فعالیت کلاسی و کاربرگ';
        this.presets = [
            { label: '۱ دقیقه (پاسخ سریع)', sec: 60 },
            { label: '۳ دقیقه (روخوانی / املای کلمه)', sec: 180 },
            { label: '۵ دقیقه (کاربرگ ریاضی)', sec: 300 },
            { label: '۱۰ دقیقه (نقاشی و کار گروهی)', sec: 600 },
            { label: '۱۵ دقیقه (زنگ تفریح و استراحت)', sec: 900 },
            { label: '۲۰ دقیقه (ارزیابی جامع کلاسی)', sec: 1200 },
        ];
    }
    ngOnInit() {
        this.remainingSeconds = this.totalSeconds;
    }
    ngOnDestroy() {
        this.stopTimer();
    }
    setPreset(sec, label) {
        this.stopTimer();
        this.totalSeconds = sec;
        this.remainingSeconds = sec;
        this.activityName = label;
        this.isFinished = false;
    }
    startTimer() {
        if (this.isRunning) {
            return;
        }
        if (this.remainingSeconds <= 0) {
            this.remainingSeconds = this.totalSeconds;
        }
        this.isRunning = true;
        this.isFinished = false;
        this.intervalId = setInterval(() => {
            if (this.remainingSeconds > 0) {
                this.remainingSeconds--;
            }
            else {
                this.finishTimer();
            }
        }, 1000);
    }
    pauseTimer() {
        this.isRunning = false;
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }
    resetTimer() {
        this.pauseTimer();
        this.remainingSeconds = this.totalSeconds;
        this.isFinished = false;
    }
    stopTimer() {
        this.isRunning = false;
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }
    finishTimer() {
        this.stopTimer();
        this.isFinished = true;
        this.playChimeSound();
    }
    playChimeSound() {
        // بازخورد صوتی مرورگر با Web Audio API بدون نیاز به فایل صوتی
        try {
            const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.type = 'sine';
            osc.frequency.setValueAtTime(587.33, audioCtx.currentTime); // D5
            osc.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.3); // A5
            gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 1.2);
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.start();
            osc.stop(audioCtx.currentTime + 1.2);
        }
        catch (e) {
            // AudioContext fallback
        }
    }
    get progressPercentage() {
        if (this.totalSeconds <= 0) {
            return 0;
        }
        return ((this.totalSeconds - this.remainingSeconds) / this.totalSeconds) * 100;
    }
    get formattedTime() {
        const mins = Math.floor(this.remainingSeconds / 60);
        const secs = this.remainingSeconds % 60;
        const mStr = mins < 10 ? '۰' + mins : '' + mins;
        const sStr = secs < 10 ? '۰' + secs : '' + secs;
        return `${mStr}:${sStr}`;
    }
};
ClassTimerComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-class-timer',
        template: _class_timer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_class_timer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ClassTimerComponent);



/***/ }),

/***/ 8534:
/*!*************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/class-timer/class-timer.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClassTimerModule": () => (/* binding */ ClassTimerModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/view/components/app/page-header/page-header.module */ 19916);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _class_timer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./class-timer.component */ 39548);
/* harmony import */ var src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/view/components/app/footer/footer.module */ 60412);









const routes = [
    {
        path: '',
        component: _class_timer_component__WEBPACK_IMPORTED_MODULE_1__.ClassTimerComponent
    }
];
let ClassTimerModule = class ClassTimerModule {
};
ClassTimerModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__.PageHeaderModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(routes),
            src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_2__.FooterModule
        ],
        declarations: [_class_timer_component__WEBPACK_IMPORTED_MODULE_1__.ClassTimerComponent]
    })
], ClassTimerModule);



/***/ }),

/***/ 29967:
/*!*****************************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/class-timer/class-timer.component.scss?ngResource ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = ".learning-header {\n  background: var(--tuner-surface, #ffffff);\n  box-shadow: 0 4px 20px rgba(99, 63, 163, 0.05);\n  border-bottom: 1px solid var(--tuner-border, #ede9f6);\n  position: sticky;\n  top: 0;\n  z-index: 50;\n}\n.learning-header .nav-shell {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 12px 20px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.learning-header .brand {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  text-decoration: none;\n  color: var(--tuner-text, #1e1b4b);\n}\n.learning-header .brand .brand-titles {\n  display: flex;\n  flex-direction: column;\n}\n.learning-header .brand .brand-titles b {\n  font-size: 1.1rem;\n  color: var(--tuner-danger-text, #dc2626);\n}\n.learning-header .brand .brand-titles small {\n  font-size: 0.75rem;\n  color: var(--tuner-muted, #64748b);\n}\n.learning-header .nav-link-btn {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: var(--tuner-danger-soft, #fef2f2);\n  color: var(--tuner-danger-text, #dc2626);\n  padding: 8px 16px;\n  border-radius: 12px;\n  font-weight: bold;\n  text-decoration: none;\n}\n.timer-content {\n  --background: var(--tuner-page, #fbfbfe);\n  font-family: var(--ion-font-family, \"Shabnam-Medium\", \"Vazirmatn\", sans-serif);\n}\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 24px 20px 48px;\n}\n.hero-banner {\n  text-align: center;\n  margin-bottom: 24px;\n}\n.hero-banner .hero-chip {\n  display: inline-block;\n  background: var(--tuner-danger-soft, #fee2e2);\n  color: var(--tuner-danger-text, #b91c1c);\n  padding: 6px 14px;\n  border-radius: 20px;\n  font-size: 0.85rem;\n  font-weight: bold;\n  margin-bottom: 12px;\n}\n.hero-banner h1 {\n  font-size: 2rem;\n  font-weight: 900;\n  color: var(--tuner-text, #1e1b4b);\n  margin: 0 0 8px;\n}\n.hero-banner p {\n  color: var(--tuner-muted, #64748b);\n  max-width: 600px;\n  margin: 0 auto;\n  font-size: 0.95rem;\n}\n.timer-card {\n  background: var(--tuner-surface, #ffffff);\n  border-radius: 32px;\n  padding: 32px 24px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);\n  text-align: center;\n  border: 1px solid var(--tuner-border, #e2e8f0);\n}\n.timer-card .activity-title-row {\n  margin-bottom: 24px;\n}\n.timer-card .activity-title-row input {\n  border: 2px solid var(--tuner-border, #e2e8f0);\n  border-radius: 16px;\n  padding: 10px 20px;\n  font-size: 1.1rem;\n  font-weight: bold;\n  color: var(--tuner-text, #1e293b);\n  text-align: center;\n  width: 100%;\n  max-width: 450px;\n  outline: none;\n}\n.timer-card .activity-title-row input:focus {\n  border-color: var(--tuner-danger-border, #dc2626);\n}\n.timer-card .timer-display-circle {\n  width: 280px;\n  height: 280px;\n  border-radius: 50%;\n  margin: 0 auto 32px;\n  background: var(--tuner-soft, #f8fafc);\n  border: 10px solid var(--tuner-border, #e2e8f0);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.04);\n  transition: all 0.3s;\n}\n.timer-card .timer-display-circle.finished {\n  background: var(--tuner-danger-soft, #fef2f2);\n  border-color: var(--tuner-danger-border, #f87171);\n  animation: finish-pulse 0.8s infinite alternate;\n}\n.timer-card .timer-display-circle.finished .time-readout {\n  color: var(--tuner-danger-text, #dc2626);\n}\n.timer-card .timer-display-circle .time-readout {\n  font-size: 4rem;\n  font-weight: 900;\n  color: var(--tuner-text, #0f172a);\n  letter-spacing: 2px;\n}\n.timer-card .timer-display-circle .timer-status {\n  font-size: 0.85rem;\n  color: var(--tuner-muted, #64748b);\n  font-weight: bold;\n  margin-top: 4px;\n}\n.timer-card .timer-display-circle .progress-bar-wrap {\n  position: absolute;\n  bottom: 24px;\n  width: 140px;\n  height: 6px;\n  background: var(--tuner-soft, #e2e8f0);\n  border-radius: 10px;\n  overflow: hidden;\n}\n.timer-card .timer-display-circle .progress-bar-wrap .progress-fill {\n  height: 100%;\n  background: #dc2626;\n  transition: width 1s linear;\n}\n.timer-card .timer-controls {\n  display: flex;\n  justify-content: center;\n  gap: 12px;\n  flex-wrap: wrap;\n  margin-bottom: 32px;\n}\n.timer-card .timer-controls .action-btn {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 12px 24px;\n  border-radius: 14px;\n  font-size: 1rem;\n  font-weight: bold;\n  border: none;\n  cursor: pointer;\n  transition: 0.2s;\n}\n.timer-card .timer-controls .action-btn.start {\n  background: #10b981;\n  color: #ffffff;\n  box-shadow: 0 4px 15px rgba(16, 185, 129, 0.25);\n}\n.timer-card .timer-controls .action-btn.pause {\n  background: #f59e0b;\n  color: #ffffff;\n  box-shadow: 0 4px 15px rgba(245, 158, 11, 0.25);\n}\n.timer-card .timer-controls .action-btn.reset {\n  background: var(--tuner-soft, #f1f5f9);\n  color: var(--tuner-muted, #475569);\n  border: 1px solid var(--tuner-border, #cbd5e1);\n}\n.timer-card .timer-controls .action-btn.chime {\n  background: var(--tuner-info-soft, #eff6ff);\n  color: var(--tuner-info-text, #2563eb);\n  border: 1px solid var(--tuner-info-border, #bfdbfe);\n}\n.timer-card .presets-wrapper {\n  border-top: 1px solid var(--tuner-border, #f1f5f9);\n  padding-top: 24px;\n  text-align: right;\n}\n.timer-card .presets-wrapper h3 {\n  font-size: 0.95rem;\n  color: var(--tuner-muted, #475569);\n  margin: 0 0 12px;\n}\n.timer-card .presets-wrapper .presets-chips {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n.timer-card .presets-wrapper .presets-chips .preset-chip {\n  background: var(--tuner-soft, #f8fafc);\n  border: 1px solid var(--tuner-border, #e2e8f0);\n  padding: 8px 14px;\n  border-radius: 12px;\n  font-size: 0.85rem;\n  cursor: pointer;\n  color: var(--tuner-text, #334155);\n  font-weight: 600;\n  transition: 0.2s;\n}\n.timer-card .presets-wrapper .presets-chips .preset-chip:hover {\n  background: var(--tuner-danger-soft, #fef2f2);\n  border-color: var(--tuner-danger-border, #fca5a5);\n}\n.timer-card .presets-wrapper .presets-chips .preset-chip.active {\n  background: #dc2626;\n  color: #ffffff;\n  border-color: var(--tuner-danger-border, #dc2626);\n}\n@keyframes finish-pulse {\n  from {\n    transform: scale(1);\n    box-shadow: 0 0 10px rgba(220, 38, 38, 0.2);\n  }\n  to {\n    transform: scale(1.03);\n    box-shadow: 0 0 25px rgba(220, 38, 38, 0.4);\n  }\n}\n:host-context(.dark-theme) {\n  color-scheme: dark;\n  color: var(--tuner-text);\n  --tuner-page: #11151e;\n  --tuner-surface: #1c2230;\n  --tuner-soft: #252e3d;\n  --tuner-border: #465269;\n  --tuner-text: #edf1f8;\n  --tuner-muted: #b2bfd1;\n  --tuner-header: rgba(28, 34, 48, 0.94);\n  --tuner-overlay: rgba(28, 34, 48, 0.95);\n  --tuner-purple-text: #c4b5fd;\n  --tuner-purple-soft: #302444;\n  --tuner-purple-border: #72579b;\n  --tuner-info-text: #93c5fd;\n  --tuner-info-soft: #1d304c;\n  --tuner-info-border: #466b9a;\n  --tuner-warning-text: #fcd477;\n  --tuner-warning-soft: #3b3020;\n  --tuner-warning-border: #93743d;\n  --tuner-success-text: #86efac;\n  --tuner-success-soft: #19392e;\n  --tuner-success-border: #417d60;\n  --tuner-danger-text: #fda4af;\n  --tuner-danger-soft: #402631;\n  --tuner-danger-border: #985367;\n  --tuner-teal-text: #7de4d4;\n  --tuner-teal-soft: #193a3a;\n  --tuner-teal-border: #437f7c;\n}\n:host-context(.dark-theme) input:not([type=range]):not([type=checkbox]):not([type=radio]):not([type=button]):not([type=submit]):not([type=file]),\n:host-context(.dark-theme) textarea,\n:host-context(.dark-theme) select {\n  color: var(--tuner-text);\n  background-color: var(--tuner-soft);\n}\n:host-context(.dark-theme) input::placeholder, :host-context(.dark-theme) textarea::placeholder {\n  color: var(--tuner-muted);\n  opacity: 0.75;\n}\n:host-context(.dark-theme) ion-header.learning-header {\n  --background: var(--tuner-header);\n  background: var(--tuner-header);\n  border-bottom-color: var(--tuner-border);\n}\n:host-context(.dark-theme) ion-content {\n  --background: var(--tuner-page);\n  --color: var(--tuner-text);\n}\n:host-context(.dark-theme) ion-card:not([color]), :host-context(.dark-theme) ion-list, :host-context(.dark-theme) ion-item:not([color]), :host-context(.dark-theme) ion-item-divider:not([color]) {\n  --background: var(--tuner-surface);\n  --color: var(--tuner-text);\n  --border-color: var(--tuner-border);\n}\n:host-context(.dark-theme) ion-list {\n  background: var(--tuner-surface);\n}\n:host-context(.dark-theme) ion-card-title, :host-context(.dark-theme) ion-card-subtitle {\n  color: var(--tuner-text);\n}\n:host-context(.dark-theme) ion-card[color=lightest], :host-context(.dark-theme) ion-item[color=lightest], :host-context(.dark-theme) ion-fab-button[color=lightest] {\n  --ion-color-base: var(--tuner-surface);\n  --ion-color-contrast: var(--tuner-text);\n  --ion-color-shade: var(--tuner-soft);\n  --ion-color-tint: var(--tuner-soft);\n}\n:host-context(.dark-theme) ion-text[color=dark], :host-context(.dark-theme) ion-label[color=dark] {\n  --ion-color-base: var(--tuner-text);\n}\n:host-context(.dark-theme) .learning-header {\n  background: var(--tuner-header);\n  border-bottom-color: var(--tuner-border);\n}\n:host-context(.dark-theme) .learning-header .brand {\n  color: var(--tuner-text);\n}\n:host-context(.dark-theme) .learning-header .brand-titles small {\n  color: var(--tuner-muted);\n}\n:host-context(.dark-theme) .hero-banner h1 {\n  color: var(--tuner-text);\n}\n:host-context(.dark-theme) .hero-banner p {\n  color: var(--tuner-muted);\n}\n:host-context(.dark-theme) .timer-card {\n  background: var(--tuner-surface);\n  color: var(--tuner-text);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsYXNzLXRpbWVyLmNvbXBvbmVudC5zY3NzIiwiLi5cXF90aGVtZS5zY3NzIiwiLi5cXF9lZHVjYXRpb24tdGhlbWUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHlDQUFBO0VBQ0EsOENBQUE7RUFDQSxxREFBQTtFQUNBLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7QUFERjtBQUdFO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQURKO0FBSUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EscUJBQUE7RUFDQSxpQ0FBQTtBQUZKO0FBSUk7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUFGTjtBQUdNO0VBQUksaUJBQUE7RUFBbUIsd0NBQUE7QUFDN0I7QUFBTTtFQUFRLGtCQUFBO0VBQW9CLGtDQUFBO0FBSWxDO0FBQUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsNkNBQUE7RUFDQSx3Q0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FBRUo7QUFFQTtFQUNFLHdDQUFBO0VBQ0EsOEVBQUE7QUFDRjtBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7QUFDRjtBQUVBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQUNGO0FBQ0U7RUFDRSxxQkFBQTtFQUNBLDZDQUFBO0VBQ0Esd0NBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFFRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtBQUFKO0FBR0U7RUFDRSxrQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBREo7QUFLQTtFQUNFLHlDQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLDJDQUFBO0VB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QUNBLHdDQUFBO0FENk9OO0FDM09JO0VBQWMsK0JBQUE7RUFBaUMsMEJBQUE7QUQrT25EO0FDOU9JO0VBQ0Usa0NBQUE7RUFDQSwwQkFBQTtFQUNBLG1DQUFBO0FEZ1BOO0FDOU9JO0VBQVcsZ0NBQUE7QURpUGY7QUNoUEk7RUFBb0Msd0JBQUE7QURtUHhDO0FDbFBJO0VBQ0Usc0NBQUE7RUFDQSx1Q0FBQTtFQUNBLG9DQUFBO0VBQ0EsbUNBQUE7QURvUE47QUNsUEk7RUFBa0QsbUNBQUE7QURxUHREO0FFbFRJO0VBQ0UsK0JBQUE7RUFDQSx3Q0FBQTtBRnFUTjtBRXBUTTtFQUFTLHdCQUFBO0FGdVRmO0FFdFRNO0VBQXNCLHlCQUFBO0FGeVQ1QjtBRXZUSTtFQUFrQix3QkFBQTtBRjBUdEI7QUV6VEk7RUFBaUIseUJBQUE7QUY0VHJCO0FFM1RJO0VBQ0UsZ0NBQUE7RUFDQSx3QkFBQTtFQUNBLHlDQUFBO0FGNlROIiwiZmlsZSI6ImNsYXNzLXRpbWVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vZWR1Y2F0aW9uLXRoZW1lJztcblxuLmxlYXJuaW5nLWhlYWRlciB7XG4gIGJhY2tncm91bmQ6IHR1bmVyLWNvbG9yKHN1cmZhY2UsICNmZmZmZmYpO1xuICBib3gtc2hhZG93OiAwIDRweCAyMHB4IHJnYmEoOTksIDYzLCAxNjMsIDAuMDUpO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdHVuZXItY29sb3IoYm9yZGVyLCAjZWRlOWY2KTtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiA1MDtcblxuICAubmF2LXNoZWxsIHtcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIC5icmFuZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTJweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IHR1bmVyLWNvbG9yKHRleHQsICMxZTFiNGIpO1xuXG4gICAgLmJyYW5kLXRpdGxlcyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGIgeyBmb250LXNpemU6IDEuMXJlbTsgY29sb3I6IHR1bmVyLWNvbG9yKGRhbmdlci10ZXh0LCAjZGMyNjI2KTsgfVxuICAgICAgc21hbGwgeyBmb250LXNpemU6IDAuNzVyZW07IGNvbG9yOiB0dW5lci1jb2xvcihtdXRlZCwgIzY0NzQ4Yik7IH1cbiAgICB9XG4gIH1cblxuICAubmF2LWxpbmstYnRuIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA4cHg7XG4gICAgYmFja2dyb3VuZDogdHVuZXItY29sb3IoZGFuZ2VyLXNvZnQsICNmZWYyZjIpO1xuICAgIGNvbG9yOiB0dW5lci1jb2xvcihkYW5nZXItdGV4dCwgI2RjMjYyNik7XG4gICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbn1cblxuLnRpbWVyLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICN7dHVuZXItY29sb3IocGFnZSwgI2ZiZmJmZSl9O1xuICBmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5LCBcIlNoYWJuYW0tTWVkaXVtXCIsIFwiVmF6aXJtYXRuXCIsIHNhbnMtc2VyaWYpO1xufVxuXG4uY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiA4MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDI0cHggMjBweCA0OHB4O1xufVxuXG4uaGVyby1iYW5uZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG5cbiAgLmhlcm8tY2hpcCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJhY2tncm91bmQ6IHR1bmVyLWNvbG9yKGRhbmdlci1zb2Z0LCAjZmVlMmUyKTtcbiAgICBjb2xvcjogdHVuZXItY29sb3IoZGFuZ2VyLXRleHQsICNiOTFjMWMpO1xuICAgIHBhZGRpbmc6IDZweCAxNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gIH1cblxuICBoMSB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgY29sb3I6IHR1bmVyLWNvbG9yKHRleHQsICMxZTFiNGIpO1xuICAgIG1hcmdpbjogMCAwIDhweDtcbiAgfVxuXG4gIHAge1xuICAgIGNvbG9yOiB0dW5lci1jb2xvcihtdXRlZCwgIzY0NzQ4Yik7XG4gICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBmb250LXNpemU6IDAuOTVyZW07XG4gIH1cbn1cblxuLnRpbWVyLWNhcmQge1xuICBiYWNrZ3JvdW5kOiB0dW5lci1jb2xvcihzdXJmYWNlLCAjZmZmZmZmKTtcbiAgYm9yZGVyLXJhZGl1czogMzJweDtcbiAgcGFkZGluZzogMzJweCAyNHB4O1xuICBib3gtc2hhZG93OiAwIDEwcHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHR1bmVyLWNvbG9yKGJvcmRlciwgI2UyZThmMCk7XG5cbiAgLmFjdGl2aXR5LXRpdGxlLXJvdyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjRweDtcblxuICAgIGlucHV0IHtcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHR1bmVyLWNvbG9yKGJvcmRlciwgI2UyZThmMCk7XG4gICAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGNvbG9yOiB0dW5lci1jb2xvcih0ZXh0LCAjMWUyOTNiKTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWF4LXdpZHRoOiA0NTBweDtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG5cbiAgICAgICY6Zm9jdXMge1xuICAgICAgICBib3JkZXItY29sb3I6IHR1bmVyLWNvbG9yKGRhbmdlci1ib3JkZXIsICNkYzI2MjYpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC50aW1lci1kaXNwbGF5LWNpcmNsZSB7XG4gICAgd2lkdGg6IDI4MHB4O1xuICAgIGhlaWdodDogMjgwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIG1hcmdpbjogMCBhdXRvIDMycHg7XG4gICAgYmFja2dyb3VuZDogdHVuZXItY29sb3Ioc29mdCwgI2Y4ZmFmYyk7XG4gICAgYm9yZGVyOiAxMHB4IHNvbGlkIHR1bmVyLWNvbG9yKGJvcmRlciwgI2UyZThmMCk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4wNCk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG5cbiAgICAmLmZpbmlzaGVkIHtcbiAgICAgIGJhY2tncm91bmQ6IHR1bmVyLWNvbG9yKGRhbmdlci1zb2Z0LCAjZmVmMmYyKTtcbiAgICAgIGJvcmRlci1jb2xvcjogdHVuZXItY29sb3IoZGFuZ2VyLWJvcmRlciwgI2Y4NzE3MSk7XG4gICAgICBhbmltYXRpb246IGZpbmlzaC1wdWxzZSAwLjhzIGluZmluaXRlIGFsdGVybmF0ZTtcblxuICAgICAgLnRpbWUtcmVhZG91dCB7XG4gICAgICAgIGNvbG9yOiB0dW5lci1jb2xvcihkYW5nZXItdGV4dCwgI2RjMjYyNik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnRpbWUtcmVhZG91dCB7XG4gICAgICBmb250LXNpemU6IDRyZW07XG4gICAgICBmb250LXdlaWdodDogOTAwO1xuICAgICAgY29sb3I6IHR1bmVyLWNvbG9yKHRleHQsICMwZjE3MmEpO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICB9XG5cbiAgICAudGltZXItc3RhdHVzIHtcbiAgICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgICAgIGNvbG9yOiB0dW5lci1jb2xvcihtdXRlZCwgIzY0NzQ4Yik7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICB9XG5cbiAgICAucHJvZ3Jlc3MtYmFyLXdyYXAge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYm90dG9tOiAyNHB4O1xuICAgICAgd2lkdGg6IDE0MHB4O1xuICAgICAgaGVpZ2h0OiA2cHg7XG4gICAgICBiYWNrZ3JvdW5kOiB0dW5lci1jb2xvcihzb2Z0LCAjZTJlOGYwKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgICAucHJvZ3Jlc3MtZmlsbCB7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZDogI2RjMjYyNjtcbiAgICAgICAgdHJhbnNpdGlvbjogd2lkdGggMXMgbGluZWFyO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC50aW1lci1jb250cm9scyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDEycHg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIG1hcmdpbi1ib3R0b206IDMycHg7XG5cbiAgICAuYWN0aW9uLWJ0biB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogOHB4O1xuICAgICAgcGFkZGluZzogMTJweCAyNHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMTRweDtcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgdHJhbnNpdGlvbjogMC4ycztcblxuICAgICAgJi5zdGFydCB7XG4gICAgICAgIGJhY2tncm91bmQ6ICMxMGI5ODE7XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICBib3gtc2hhZG93OiAwIDRweCAxNXB4IHJnYmEoMTYsIDE4NSwgMTI5LCAwLjI1KTtcbiAgICAgIH1cblxuICAgICAgJi5wYXVzZSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmNTllMGI7XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICBib3gtc2hhZG93OiAwIDRweCAxNXB4IHJnYmEoMjQ1LCAxNTgsIDExLCAwLjI1KTtcbiAgICAgIH1cblxuICAgICAgJi5yZXNldCB7XG4gICAgICAgIGJhY2tncm91bmQ6IHR1bmVyLWNvbG9yKHNvZnQsICNmMWY1ZjkpO1xuICAgICAgICBjb2xvcjogdHVuZXItY29sb3IobXV0ZWQsICM0NzU1NjkpO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB0dW5lci1jb2xvcihib3JkZXIsICNjYmQ1ZTEpO1xuICAgICAgfVxuXG4gICAgICAmLmNoaW1lIHtcbiAgICAgICAgYmFja2dyb3VuZDogdHVuZXItY29sb3IoaW5mby1zb2Z0LCAjZWZmNmZmKTtcbiAgICAgICAgY29sb3I6IHR1bmVyLWNvbG9yKGluZm8tdGV4dCwgIzI1NjNlYik7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHR1bmVyLWNvbG9yKGluZm8tYm9yZGVyLCAjYmZkYmZlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAucHJlc2V0cy13cmFwcGVyIHtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgdHVuZXItY29sb3IoYm9yZGVyLCAjZjFmNWY5KTtcbiAgICBwYWRkaW5nLXRvcDogMjRweDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcblxuICAgIGgzIHtcbiAgICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcbiAgICAgIGNvbG9yOiB0dW5lci1jb2xvcihtdXRlZCwgIzQ3NTU2OSk7XG4gICAgICBtYXJnaW46IDAgMCAxMnB4O1xuICAgIH1cblxuICAgIC5wcmVzZXRzLWNoaXBzIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICBnYXA6IDEwcHg7XG5cbiAgICAgIC5wcmVzZXQtY2hpcCB7XG4gICAgICAgIGJhY2tncm91bmQ6IHR1bmVyLWNvbG9yKHNvZnQsICNmOGZhZmMpO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB0dW5lci1jb2xvcihib3JkZXIsICNlMmU4ZjApO1xuICAgICAgICBwYWRkaW5nOiA4cHggMTRweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICAgICAgZm9udC1zaXplOiAwLjg1cmVtO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGNvbG9yOiB0dW5lci1jb2xvcih0ZXh0LCAjMzM0MTU1KTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgdHJhbnNpdGlvbjogMC4ycztcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB0dW5lci1jb2xvcihkYW5nZXItc29mdCwgI2ZlZjJmMik7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiB0dW5lci1jb2xvcihkYW5nZXItYm9yZGVyLCAjZmNhNWE1KTtcbiAgICAgICAgfVxuXG4gICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZGMyNjI2O1xuICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogdHVuZXItY29sb3IoZGFuZ2VyLWJvcmRlciwgI2RjMjYyNik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQGtleWZyYW1lcyBmaW5pc2gtcHVsc2Uge1xuICBmcm9tIHsgdHJhbnNmb3JtOiBzY2FsZSgxKTsgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgyMjAsIDM4LCAzOCwgMC4yKTsgfVxuICB0byB7IHRyYW5zZm9ybTogc2NhbGUoMS4wMyk7IGJveC1zaGFkb3c6IDAgMCAyNXB4IHJnYmEoMjIwLCAzOCwgMzgsIDAuNCk7IH1cbn1cblxuQGluY2x1ZGUgZWR1Y2F0aW9uLWRhcmstdGhlbWUoJy50aW1lci1jYXJkJyk7XG4iLCIvLyBLZWVwIHRoZSBvcmlnaW5hbCBsaWdodCBjb2xvciBhdCBlYWNoIGNhbGwgc2l0ZS4gVG9rZW5zIGV4aXN0IG9ubHkgaW4gZGFyayBtb2RlLlxuQGZ1bmN0aW9uIHR1bmVyLWNvbG9yKCRyb2xlLCAkbGlnaHQpIHtcbiAgQHJldHVybiB2YXIoLS10dW5lci0jeyRyb2xlfSwgI3skbGlnaHR9KTtcbn1cblxuQG1peGluIHR1bmVyLWRhcmstdGhlbWUge1xuICA6aG9zdC1jb250ZXh0KC5kYXJrLXRoZW1lKSB7XG4gICAgY29sb3Itc2NoZW1lOiBkYXJrO1xuICAgIGNvbG9yOiB2YXIoLS10dW5lci10ZXh0KTtcbiAgICAtLXR1bmVyLXBhZ2U6ICMxMTE1MWU7XG4gICAgLS10dW5lci1zdXJmYWNlOiAjMWMyMjMwO1xuICAgIC0tdHVuZXItc29mdDogIzI1MmUzZDtcbiAgICAtLXR1bmVyLWJvcmRlcjogIzQ2NTI2OTtcbiAgICAtLXR1bmVyLXRleHQ6ICNlZGYxZjg7XG4gICAgLS10dW5lci1tdXRlZDogI2IyYmZkMTtcbiAgICAtLXR1bmVyLWhlYWRlcjogcmdiYSgyOCwgMzQsIDQ4LCAwLjk0KTtcbiAgICAtLXR1bmVyLW92ZXJsYXk6IHJnYmEoMjgsIDM0LCA0OCwgMC45NSk7XG4gICAgLS10dW5lci1wdXJwbGUtdGV4dDogI2M0YjVmZDtcbiAgICAtLXR1bmVyLXB1cnBsZS1zb2Z0OiAjMzAyNDQ0O1xuICAgIC0tdHVuZXItcHVycGxlLWJvcmRlcjogIzcyNTc5YjtcbiAgICAtLXR1bmVyLWluZm8tdGV4dDogIzkzYzVmZDtcbiAgICAtLXR1bmVyLWluZm8tc29mdDogIzFkMzA0YztcbiAgICAtLXR1bmVyLWluZm8tYm9yZGVyOiAjNDY2YjlhO1xuICAgIC0tdHVuZXItd2FybmluZy10ZXh0OiAjZmNkNDc3O1xuICAgIC0tdHVuZXItd2FybmluZy1zb2Z0OiAjM2IzMDIwO1xuICAgIC0tdHVuZXItd2FybmluZy1ib3JkZXI6ICM5Mzc0M2Q7XG4gICAgLS10dW5lci1zdWNjZXNzLXRleHQ6ICM4NmVmYWM7XG4gICAgLS10dW5lci1zdWNjZXNzLXNvZnQ6ICMxOTM5MmU7XG4gICAgLS10dW5lci1zdWNjZXNzLWJvcmRlcjogIzQxN2Q2MDtcbiAgICAtLXR1bmVyLWRhbmdlci10ZXh0OiAjZmRhNGFmO1xuICAgIC0tdHVuZXItZGFuZ2VyLXNvZnQ6ICM0MDI2MzE7XG4gICAgLS10dW5lci1kYW5nZXItYm9yZGVyOiAjOTg1MzY3O1xuICAgIC0tdHVuZXItdGVhbC10ZXh0OiAjN2RlNGQ0O1xuICAgIC0tdHVuZXItdGVhbC1zb2Z0OiAjMTkzYTNhO1xuICAgIC0tdHVuZXItdGVhbC1ib3JkZXI6ICM0MzdmN2M7XG5cbiAgICAvLyBOYXRpdmUgY29udHJvbHMgd2l0aG91dCBhbiBleHBsaWNpdCBsaWdodCBiYWNrZ3JvdW5kIG5lZWQgYSBkYXJrIHN1cmZhY2UgdG9vLlxuICAgIGlucHV0Om5vdChbdHlwZT0ncmFuZ2UnXSk6bm90KFt0eXBlPSdjaGVja2JveCddKTpub3QoW3R5cGU9J3JhZGlvJ10pOm5vdChbdHlwZT0nYnV0dG9uJ10pOm5vdChbdHlwZT0nc3VibWl0J10pOm5vdChbdHlwZT0nZmlsZSddKSxcbiAgICB0ZXh0YXJlYSxcbiAgICBzZWxlY3Qge1xuICAgICAgY29sb3I6IHZhcigtLXR1bmVyLXRleHQpO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHVuZXItc29mdCk7XG4gICAgfVxuXG4gICAgaW5wdXQ6OnBsYWNlaG9sZGVyLCB0ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xuICAgICAgY29sb3I6IHZhcigtLXR1bmVyLW11dGVkKTtcbiAgICAgIG9wYWNpdHk6IDAuNzU7XG4gICAgfVxuXG4gICAgaW9uLWhlYWRlci5sZWFybmluZy1oZWFkZXIge1xuICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS10dW5lci1oZWFkZXIpO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tdHVuZXItaGVhZGVyKTtcbiAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHZhcigtLXR1bmVyLWJvcmRlcik7XG4gICAgfVxuICAgIGlvbi1jb250ZW50IHsgLS1iYWNrZ3JvdW5kOiB2YXIoLS10dW5lci1wYWdlKTsgLS1jb2xvcjogdmFyKC0tdHVuZXItdGV4dCk7IH1cbiAgICBpb24tY2FyZDpub3QoW2NvbG9yXSksIGlvbi1saXN0LCBpb24taXRlbTpub3QoW2NvbG9yXSksIGlvbi1pdGVtLWRpdmlkZXI6bm90KFtjb2xvcl0pIHtcbiAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0tdHVuZXItc3VyZmFjZSk7XG4gICAgICAtLWNvbG9yOiB2YXIoLS10dW5lci10ZXh0KTtcbiAgICAgIC0tYm9yZGVyLWNvbG9yOiB2YXIoLS10dW5lci1ib3JkZXIpO1xuICAgIH1cbiAgICBpb24tbGlzdCB7IGJhY2tncm91bmQ6IHZhcigtLXR1bmVyLXN1cmZhY2UpOyB9XG4gICAgaW9uLWNhcmQtdGl0bGUsIGlvbi1jYXJkLXN1YnRpdGxlIHsgY29sb3I6IHZhcigtLXR1bmVyLXRleHQpOyB9XG4gICAgaW9uLWNhcmRbY29sb3I9J2xpZ2h0ZXN0J10sIGlvbi1pdGVtW2NvbG9yPSdsaWdodGVzdCddLCBpb24tZmFiLWJ1dHRvbltjb2xvcj0nbGlnaHRlc3QnXSB7XG4gICAgICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS10dW5lci1zdXJmYWNlKTtcbiAgICAgIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS10dW5lci10ZXh0KTtcbiAgICAgIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS10dW5lci1zb2Z0KTtcbiAgICAgIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLXR1bmVyLXNvZnQpO1xuICAgIH1cbiAgICBpb24tdGV4dFtjb2xvcj0nZGFyayddLCBpb24tbGFiZWxbY29sb3I9J2RhcmsnXSB7IC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLXR1bmVyLXRleHQpOyB9XG4gIH1cbn1cbiIsIkBpbXBvcnQgJy4vdGhlbWUnO1xuXG4vLyBTaGFyZWQgYnkgdGhlIGVkdWNhdGlvbiB0b29sczsgYWNjZW50cyBhbmQgYW5zd2VyIHN0YXRlcyBzdGF5IGNvbXBvbmVudC1vd25lZC5cbkBtaXhpbiBlZHVjYXRpb24tZGFyay10aGVtZSgkY2FyZHMpIHtcbiAgQGluY2x1ZGUgdHVuZXItZGFyay10aGVtZTtcblxuICA6aG9zdC1jb250ZXh0KC5kYXJrLXRoZW1lKSB7XG4gICAgLmxlYXJuaW5nLWhlYWRlciB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS10dW5lci1oZWFkZXIpO1xuICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdmFyKC0tdHVuZXItYm9yZGVyKTtcbiAgICAgIC5icmFuZCB7IGNvbG9yOiB2YXIoLS10dW5lci10ZXh0KTsgfVxuICAgICAgLmJyYW5kLXRpdGxlcyBzbWFsbCB7IGNvbG9yOiB2YXIoLS10dW5lci1tdXRlZCk7IH1cbiAgICB9XG4gICAgLmhlcm8tYmFubmVyIGgxIHsgY29sb3I6IHZhcigtLXR1bmVyLXRleHQpOyB9XG4gICAgLmhlcm8tYmFubmVyIHAgeyBjb2xvcjogdmFyKC0tdHVuZXItbXV0ZWQpOyB9XG4gICAgI3skY2FyZHN9IHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXR1bmVyLXN1cmZhY2UpO1xuICAgICAgY29sb3I6IHZhcigtLXR1bmVyLXRleHQpO1xuICAgICAgYm94LXNoYWRvdzogMCA4cHggMjRweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgfVxuICB9XG59XG4iXX0= */";

/***/ }),

/***/ 56014:
/*!*****************************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/class-timer/class-timer.component.html?ngResource ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"interior-header\" dir=\"rtl\">\n  \n  <app-page-header titleKey=\"pageHeader.tuner-plus/class-timer/class-timer\" fallback=\"/TunerPlus\">\n\n  </app-page-header>\n</ion-header>\n\n<ion-content dir=\"rtl\" class=\"timer-content\">\n  <div class=\"container\">\n    <div class=\"hero-banner\">\n      <span class=\"hero-chip\">⏳ زمان‌بندی و نظم کلاس اول</span>\n      <h1>تایمر فعالیت‌ها و آزمون‌های کلاسی</h1>\n      <p>نمایشگر بزرگ و جذاب زمان برای کنترل فعالیت‌های انفرادی، حل کاربرگ، زنگ نقاشی و امتحانات کلاسی با زنگ هشدار پایانی.</p>\n    </div>\n\n    <div class=\"timer-card\">\n      <div class=\"activity-title-row\">\n        <input type=\"text\" [(ngModel)]=\"activityName\" placeholder=\"عنوان فعالیت (مثلاً حل کاربرگ ریاضی)...\" />\n      </div>\n\n      <!-- دایره تایمر معکوس بزرگ -->\n      <div class=\"timer-display-circle\" [class.finished]=\"isFinished\">\n        <div class=\"time-readout\">{{ formattedTime }}</div>\n        <span class=\"timer-status\">\n          {{ isFinished ? '🔔 زمان به پایان رسید!' : (isRunning ? 'در حال ثبت زمان...' : 'متوقف شده') }}\n        </span>\n\n        <!-- نوار پیشرفت -->\n        <div class=\"progress-bar-wrap\">\n          <div class=\"progress-fill\" [style.width.%]=\"progressPercentage\"></div>\n        </div>\n      </div>\n\n      <!-- دکمه‌های کنترل زمان -->\n      <div class=\"timer-controls\">\n        <button *ngIf=\"!isRunning\" class=\"action-btn start\" (click)=\"startTimer()\">\n          <ion-icon name=\"play\"></ion-icon>\n          <span>شروع زمان</span>\n        </button>\n\n        <button *ngIf=\"isRunning\" class=\"action-btn pause\" (click)=\"pauseTimer()\">\n          <ion-icon name=\"pause\"></ion-icon>\n          <span>توقف موقت</span>\n        </button>\n\n        <button class=\"action-btn reset\" (click)=\"resetTimer()\">\n          <ion-icon name=\"refresh\"></ion-icon>\n          <span>شروع مجدد</span>\n        </button>\n\n        <button class=\"action-btn chime\" (click)=\"playChimeSound()\">\n          <ion-icon name=\"notifications-outline\"></ion-icon>\n          <span>صدای زنگ</span>\n        </button>\n      </div>\n\n      <!-- قالب‌های آماده سریع زمان -->\n      <div class=\"presets-wrapper\">\n        <h3>زمان‌های پرکاربرد کلاس اول:</h3>\n        <div class=\"presets-chips\">\n          <button \n            *ngFor=\"let p of presets\" \n            class=\"preset-chip\" \n            [class.active]=\"totalSeconds === p.sec\"\n            (click)=\"setPreset(p.sec, p.label)\">\n            {{ p.label }}\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <app-footer></app-footer>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_view_pages_tuner-plus_class-timer_class-timer_module_ts.js.map