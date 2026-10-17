"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_view_pages_tuner-plus_random-picker_random-picker_module_ts"],{

/***/ 36468:
/*!********************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/random-picker/random-picker.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RandomPickerComponent": () => (/* binding */ RandomPickerComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _random_picker_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./random-picker.component.html?ngResource */ 48199);
/* harmony import */ var _random_picker_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./random-picker.component.scss?ngResource */ 37246);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);




let RandomPickerComponent = class RandomPickerComponent {
    constructor() {
        this.namesText = 'علی محمدی\nسارا رضایی\nحسین حسینی\nمریم کریمی\nامیرعلی احمدی\nفاطمه موسوی\nمهدی نوری\nزهرا ابراهیمی\nطاها قاسم‌پور\nنازنین صادقی';
        this.namesList = [];
        this.newName = '';
        this.isSpinning = false;
        this.selectedWinner = null;
        this.history = [];
        // تنظیمات
        this.removeAfterPick = false;
    }
    ngOnInit() {
        this.parseNames();
    }
    parseNames() {
        this.namesList = this.namesText
            .split('\n')
            .map(n => n.trim())
            .filter(n => n.length > 0);
    }
    addSingleName() {
        if (this.newName && this.newName.trim()) {
            this.namesList.push(this.newName.trim());
            this.namesText = this.namesList.join('\n');
            this.newName = '';
        }
    }
    removeName(index) {
        this.namesList.splice(index, 1);
        this.namesText = this.namesList.join('\n');
    }
    spin() {
        if (this.namesList.length === 0 || this.isSpinning) {
            return;
        }
        this.isSpinning = true;
        this.selectedWinner = null;
        let counter = 0;
        const maxSpins = 25;
        const interval = setInterval(() => {
            const randomIdx = Math.floor(Math.random() * this.namesList.length);
            this.selectedWinner = this.namesList[randomIdx];
            counter++;
            if (counter >= maxSpins) {
                clearInterval(interval);
                this.isSpinning = false;
                if (this.selectedWinner) {
                    this.history.unshift(this.selectedWinner);
                    if (this.removeAfterPick) {
                        const idx = this.namesList.indexOf(this.selectedWinner);
                        if (idx > -1) {
                            this.namesList.splice(idx, 1);
                            this.namesText = this.namesList.join('\n');
                        }
                    }
                }
            }
        }, 100);
    }
    clearHistory() {
        this.history = [];
    }
};
RandomPickerComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-random-picker',
        template: _random_picker_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_random_picker_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RandomPickerComponent);



/***/ }),

/***/ 20405:
/*!*****************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/random-picker/random-picker.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RandomPickerModule": () => (/* binding */ RandomPickerModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/view/components/app/page-header/page-header.module */ 19916);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _random_picker_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./random-picker.component */ 36468);
/* harmony import */ var src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/view/components/app/footer/footer.module */ 60412);









const routes = [
    {
        path: '',
        component: _random_picker_component__WEBPACK_IMPORTED_MODULE_1__.RandomPickerComponent
    }
];
let RandomPickerModule = class RandomPickerModule {
};
RandomPickerModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            src_app_view_components_app_page_header_page_header_module__WEBPACK_IMPORTED_MODULE_0__.PageHeaderModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(routes),
            src_app_view_components_app_footer_footer_module__WEBPACK_IMPORTED_MODULE_2__.FooterModule
        ],
        declarations: [_random_picker_component__WEBPACK_IMPORTED_MODULE_1__.RandomPickerComponent]
    })
], RandomPickerModule);



/***/ }),

/***/ 37246:
/*!*********************************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/random-picker/random-picker.component.scss?ngResource ***!
  \*********************************************************************************************/
/***/ ((module) => {

module.exports = ":host {\n  display: block;\n}\n\n:host-context(.dark-theme) {\n  color-scheme: dark;\n  color: var(--tuner-text);\n  --tuner-page: #11151e;\n  --tuner-surface: #1c2230;\n  --tuner-soft: #252e3d;\n  --tuner-border: #465269;\n  --tuner-text: #edf1f8;\n  --tuner-muted: #b2bfd1;\n  --tuner-header: rgba(28, 34, 48, 0.94);\n  --tuner-overlay: rgba(28, 34, 48, 0.95);\n  --tuner-purple-text: #c4b5fd;\n  --tuner-purple-soft: #302444;\n  --tuner-purple-border: #72579b;\n  --tuner-info-text: #93c5fd;\n  --tuner-info-soft: #1d304c;\n  --tuner-info-border: #466b9a;\n  --tuner-warning-text: #fcd477;\n  --tuner-warning-soft: #3b3020;\n  --tuner-warning-border: #93743d;\n  --tuner-success-text: #86efac;\n  --tuner-success-soft: #19392e;\n  --tuner-success-border: #417d60;\n  --tuner-danger-text: #fda4af;\n  --tuner-danger-soft: #402631;\n  --tuner-danger-border: #985367;\n  --tuner-teal-text: #7de4d4;\n  --tuner-teal-soft: #193a3a;\n  --tuner-teal-border: #437f7c;\n}\n\n:host-context(.dark-theme) input:not([type=range]):not([type=checkbox]):not([type=radio]):not([type=button]):not([type=submit]):not([type=file]),\n:host-context(.dark-theme) textarea,\n:host-context(.dark-theme) select {\n  color: var(--tuner-text);\n  background-color: var(--tuner-soft);\n}\n\n:host-context(.dark-theme) input::placeholder, :host-context(.dark-theme) textarea::placeholder {\n  color: var(--tuner-muted);\n  opacity: 0.75;\n}\n\n:host-context(.dark-theme) ion-header.learning-header {\n  --background: var(--tuner-header);\n  background: var(--tuner-header);\n  border-bottom-color: var(--tuner-border);\n}\n\n:host-context(.dark-theme) ion-content {\n  --background: var(--tuner-page);\n  --color: var(--tuner-text);\n}\n\n:host-context(.dark-theme) ion-card:not([color]), :host-context(.dark-theme) ion-list, :host-context(.dark-theme) ion-item:not([color]), :host-context(.dark-theme) ion-item-divider:not([color]) {\n  --background: var(--tuner-surface);\n  --color: var(--tuner-text);\n  --border-color: var(--tuner-border);\n}\n\n:host-context(.dark-theme) ion-list {\n  background: var(--tuner-surface);\n}\n\n:host-context(.dark-theme) ion-card-title, :host-context(.dark-theme) ion-card-subtitle {\n  color: var(--tuner-text);\n}\n\n:host-context(.dark-theme) ion-card[color=lightest], :host-context(.dark-theme) ion-item[color=lightest], :host-context(.dark-theme) ion-fab-button[color=lightest] {\n  --ion-color-base: var(--tuner-surface);\n  --ion-color-contrast: var(--tuner-text);\n  --ion-color-shade: var(--tuner-soft);\n  --ion-color-tint: var(--tuner-soft);\n}\n\n:host-context(.dark-theme) ion-text[color=dark], :host-context(.dark-theme) ion-label[color=dark] {\n  --ion-color-base: var(--tuner-text);\n}\n\n:host-context(.dark-theme) .learning-header {\n  background: var(--tuner-header);\n  border-bottom-color: var(--tuner-border);\n}\n\n:host-context(.dark-theme) .learning-header .brand {\n  color: var(--tuner-text);\n}\n\n:host-context(.dark-theme) .learning-header .brand-titles small {\n  color: var(--tuner-muted);\n}\n\n:host-context(.dark-theme) .hero-banner h1 {\n  color: var(--tuner-text);\n}\n\n:host-context(.dark-theme) .hero-banner p {\n  color: var(--tuner-muted);\n}\n\n:host-context(.dark-theme) .roulette-card, :host-context(.dark-theme) .names-manager-card {\n  background: var(--tuner-surface);\n  color: var(--tuner-text);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);\n}\n\n:host-context(.dark-theme) .brand-titles b, :host-context(.dark-theme) .winner-name {\n  color: var(--tuner-purple-text);\n}\n\n:host-context(.dark-theme) .nav-link-btn, :host-context(.dark-theme) .hero-chip, :host-context(.dark-theme) .winner-display-box, :host-context(.dark-theme) .hist-chip, :host-context(.dark-theme) .name-badge {\n  background: var(--tuner-purple-soft);\n  color: var(--tuner-purple-text);\n  border-color: var(--tuner-purple-border);\n}\n\n:host-context(.dark-theme) .winner-label, :host-context(.dark-theme) .options-toggle, :host-context(.dark-theme) .bulk-edit-section label {\n  color: var(--tuner-muted);\n}\n\n:host-context(.dark-theme) .spin-big-btn, :host-context(.dark-theme) .add-btn {\n  background: #6d28d9;\n  color: #fff;\n}\n\n:host-context(.dark-theme) .clear-hist-btn, :host-context(.dark-theme) .del-btn {\n  color: var(--tuner-danger-text);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJhbmRvbS1waWNrZXIuY29tcG9uZW50LnNjc3MiLCIuLlxcX3RoZW1lLnNjc3MiLCIuLlxcX2VkdWNhdGlvbi10aGVtZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsY0FBQTtBQURGOztBQ0lFO0VBQ0Usa0JBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLHNDQUFBO0VBQ0EsdUNBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsK0JBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsK0JBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7QURESjs7QUNJSTs7O0VBR0Usd0JBQUE7RUFDQSxtQ0FBQTtBREZOOztBQ0tJO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0FESE47O0FDTUk7RUFDRSxpQ0FBQTtFQUNBLCtCQUFBO0VBQ0Esd0NBQUE7QURKTjs7QUNNSTtFQUFjLCtCQUFBO0VBQWlDLDBCQUFBO0FERm5EOztBQ0dJO0VBQ0Usa0NBQUE7RUFDQSwwQkFBQTtFQUNBLG1DQUFBO0FERE47O0FDR0k7RUFBVyxnQ0FBQTtBREFmOztBQ0NJO0VBQW9DLHdCQUFBO0FERXhDOztBQ0RJO0VBQ0Usc0NBQUE7RUFDQSx1Q0FBQTtFQUNBLG9DQUFBO0VBQ0EsbUNBQUE7QURHTjs7QUNESTtFQUFrRCxtQ0FBQTtBREl0RDs7QUVqRUk7RUFDRSwrQkFBQTtFQUNBLHdDQUFBO0FGb0VOOztBRW5FTTtFQUFTLHdCQUFBO0FGc0VmOztBRXJFTTtFQUFzQix5QkFBQTtBRndFNUI7O0FFdEVJO0VBQWtCLHdCQUFBO0FGeUV0Qjs7QUV4RUk7RUFBaUIseUJBQUE7QUYyRXJCOztBRTFFSTtFQUNFLGdDQUFBO0VBQ0Esd0JBQUE7RUFDQSx5Q0FBQTtBRjRFTjs7QUFyRkU7RUFBZ0MsK0JBQUE7QUF5RmxDOztBQXhGRTtFQUNFLG9DQUFBO0VBQ0EsK0JBQUE7RUFDQSx3Q0FBQTtBQTBGSjs7QUF4RkU7RUFBMkQseUJBQUE7QUEyRjdEOztBQTFGRTtFQUEwQixtQkFBQTtFQUFxQixXQUFBO0FBOEZqRDs7QUE3RkU7RUFBNEIsK0JBQUE7QUFnRzlCIiwiZmlsZSI6InJhbmRvbS1waWNrZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi9lZHVjYXRpb24tdGhlbWUnO1xuXG46aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5AaW5jbHVkZSBlZHVjYXRpb24tZGFyay10aGVtZSgnLnJvdWxldHRlLWNhcmQsIC5uYW1lcy1tYW5hZ2VyLWNhcmQnKTtcblxuOmhvc3QtY29udGV4dCguZGFyay10aGVtZSkge1xuICAuYnJhbmQtdGl0bGVzIGIsIC53aW5uZXItbmFtZSB7IGNvbG9yOiB2YXIoLS10dW5lci1wdXJwbGUtdGV4dCk7IH1cbiAgLm5hdi1saW5rLWJ0biwgLmhlcm8tY2hpcCwgLndpbm5lci1kaXNwbGF5LWJveCwgLmhpc3QtY2hpcCwgLm5hbWUtYmFkZ2Uge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXR1bmVyLXB1cnBsZS1zb2Z0KTtcbiAgICBjb2xvcjogdmFyKC0tdHVuZXItcHVycGxlLXRleHQpO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tdHVuZXItcHVycGxlLWJvcmRlcik7XG4gIH1cbiAgLndpbm5lci1sYWJlbCwgLm9wdGlvbnMtdG9nZ2xlLCAuYnVsay1lZGl0LXNlY3Rpb24gbGFiZWwgeyBjb2xvcjogdmFyKC0tdHVuZXItbXV0ZWQpOyB9XG4gIC5zcGluLWJpZy1idG4sIC5hZGQtYnRuIHsgYmFja2dyb3VuZDogIzZkMjhkOTsgY29sb3I6ICNmZmY7IH1cbiAgLmNsZWFyLWhpc3QtYnRuLCAuZGVsLWJ0biB7IGNvbG9yOiB2YXIoLS10dW5lci1kYW5nZXItdGV4dCk7IH1cbn1cbiIsIi8vIEtlZXAgdGhlIG9yaWdpbmFsIGxpZ2h0IGNvbG9yIGF0IGVhY2ggY2FsbCBzaXRlLiBUb2tlbnMgZXhpc3Qgb25seSBpbiBkYXJrIG1vZGUuXG5AZnVuY3Rpb24gdHVuZXItY29sb3IoJHJvbGUsICRsaWdodCkge1xuICBAcmV0dXJuIHZhcigtLXR1bmVyLSN7JHJvbGV9LCAjeyRsaWdodH0pO1xufVxuXG5AbWl4aW4gdHVuZXItZGFyay10aGVtZSB7XG4gIDpob3N0LWNvbnRleHQoLmRhcmstdGhlbWUpIHtcbiAgICBjb2xvci1zY2hlbWU6IGRhcms7XG4gICAgY29sb3I6IHZhcigtLXR1bmVyLXRleHQpO1xuICAgIC0tdHVuZXItcGFnZTogIzExMTUxZTtcbiAgICAtLXR1bmVyLXN1cmZhY2U6ICMxYzIyMzA7XG4gICAgLS10dW5lci1zb2Z0OiAjMjUyZTNkO1xuICAgIC0tdHVuZXItYm9yZGVyOiAjNDY1MjY5O1xuICAgIC0tdHVuZXItdGV4dDogI2VkZjFmODtcbiAgICAtLXR1bmVyLW11dGVkOiAjYjJiZmQxO1xuICAgIC0tdHVuZXItaGVhZGVyOiByZ2JhKDI4LCAzNCwgNDgsIDAuOTQpO1xuICAgIC0tdHVuZXItb3ZlcmxheTogcmdiYSgyOCwgMzQsIDQ4LCAwLjk1KTtcbiAgICAtLXR1bmVyLXB1cnBsZS10ZXh0OiAjYzRiNWZkO1xuICAgIC0tdHVuZXItcHVycGxlLXNvZnQ6ICMzMDI0NDQ7XG4gICAgLS10dW5lci1wdXJwbGUtYm9yZGVyOiAjNzI1NzliO1xuICAgIC0tdHVuZXItaW5mby10ZXh0OiAjOTNjNWZkO1xuICAgIC0tdHVuZXItaW5mby1zb2Z0OiAjMWQzMDRjO1xuICAgIC0tdHVuZXItaW5mby1ib3JkZXI6ICM0NjZiOWE7XG4gICAgLS10dW5lci13YXJuaW5nLXRleHQ6ICNmY2Q0Nzc7XG4gICAgLS10dW5lci13YXJuaW5nLXNvZnQ6ICMzYjMwMjA7XG4gICAgLS10dW5lci13YXJuaW5nLWJvcmRlcjogIzkzNzQzZDtcbiAgICAtLXR1bmVyLXN1Y2Nlc3MtdGV4dDogIzg2ZWZhYztcbiAgICAtLXR1bmVyLXN1Y2Nlc3Mtc29mdDogIzE5MzkyZTtcbiAgICAtLXR1bmVyLXN1Y2Nlc3MtYm9yZGVyOiAjNDE3ZDYwO1xuICAgIC0tdHVuZXItZGFuZ2VyLXRleHQ6ICNmZGE0YWY7XG4gICAgLS10dW5lci1kYW5nZXItc29mdDogIzQwMjYzMTtcbiAgICAtLXR1bmVyLWRhbmdlci1ib3JkZXI6ICM5ODUzNjc7XG4gICAgLS10dW5lci10ZWFsLXRleHQ6ICM3ZGU0ZDQ7XG4gICAgLS10dW5lci10ZWFsLXNvZnQ6ICMxOTNhM2E7XG4gICAgLS10dW5lci10ZWFsLWJvcmRlcjogIzQzN2Y3YztcblxuICAgIC8vIE5hdGl2ZSBjb250cm9scyB3aXRob3V0IGFuIGV4cGxpY2l0IGxpZ2h0IGJhY2tncm91bmQgbmVlZCBhIGRhcmsgc3VyZmFjZSB0b28uXG4gICAgaW5wdXQ6bm90KFt0eXBlPSdyYW5nZSddKTpub3QoW3R5cGU9J2NoZWNrYm94J10pOm5vdChbdHlwZT0ncmFkaW8nXSk6bm90KFt0eXBlPSdidXR0b24nXSk6bm90KFt0eXBlPSdzdWJtaXQnXSk6bm90KFt0eXBlPSdmaWxlJ10pLFxuICAgIHRleHRhcmVhLFxuICAgIHNlbGVjdCB7XG4gICAgICBjb2xvcjogdmFyKC0tdHVuZXItdGV4dCk7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10dW5lci1zb2Z0KTtcbiAgICB9XG5cbiAgICBpbnB1dDo6cGxhY2Vob2xkZXIsIHRleHRhcmVhOjpwbGFjZWhvbGRlciB7XG4gICAgICBjb2xvcjogdmFyKC0tdHVuZXItbXV0ZWQpO1xuICAgICAgb3BhY2l0eTogMC43NTtcbiAgICB9XG5cbiAgICBpb24taGVhZGVyLmxlYXJuaW5nLWhlYWRlciB7XG4gICAgICAtLWJhY2tncm91bmQ6IHZhcigtLXR1bmVyLWhlYWRlcik7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS10dW5lci1oZWFkZXIpO1xuICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdmFyKC0tdHVuZXItYm9yZGVyKTtcbiAgICB9XG4gICAgaW9uLWNvbnRlbnQgeyAtLWJhY2tncm91bmQ6IHZhcigtLXR1bmVyLXBhZ2UpOyAtLWNvbG9yOiB2YXIoLS10dW5lci10ZXh0KTsgfVxuICAgIGlvbi1jYXJkOm5vdChbY29sb3JdKSwgaW9uLWxpc3QsIGlvbi1pdGVtOm5vdChbY29sb3JdKSwgaW9uLWl0ZW0tZGl2aWRlcjpub3QoW2NvbG9yXSkge1xuICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS10dW5lci1zdXJmYWNlKTtcbiAgICAgIC0tY29sb3I6IHZhcigtLXR1bmVyLXRleHQpO1xuICAgICAgLS1ib3JkZXItY29sb3I6IHZhcigtLXR1bmVyLWJvcmRlcik7XG4gICAgfVxuICAgIGlvbi1saXN0IHsgYmFja2dyb3VuZDogdmFyKC0tdHVuZXItc3VyZmFjZSk7IH1cbiAgICBpb24tY2FyZC10aXRsZSwgaW9uLWNhcmQtc3VidGl0bGUgeyBjb2xvcjogdmFyKC0tdHVuZXItdGV4dCk7IH1cbiAgICBpb24tY2FyZFtjb2xvcj0nbGlnaHRlc3QnXSwgaW9uLWl0ZW1bY29sb3I9J2xpZ2h0ZXN0J10sIGlvbi1mYWItYnV0dG9uW2NvbG9yPSdsaWdodGVzdCddIHtcbiAgICAgIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLXR1bmVyLXN1cmZhY2UpO1xuICAgICAgLS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLXR1bmVyLXRleHQpO1xuICAgICAgLS1pb24tY29sb3Itc2hhZGU6IHZhcigtLXR1bmVyLXNvZnQpO1xuICAgICAgLS1pb24tY29sb3ItdGludDogdmFyKC0tdHVuZXItc29mdCk7XG4gICAgfVxuICAgIGlvbi10ZXh0W2NvbG9yPSdkYXJrJ10sIGlvbi1sYWJlbFtjb2xvcj0nZGFyayddIHsgLS1pb24tY29sb3ItYmFzZTogdmFyKC0tdHVuZXItdGV4dCk7IH1cbiAgfVxufVxuIiwiQGltcG9ydCAnLi90aGVtZSc7XG5cbi8vIFNoYXJlZCBieSB0aGUgZWR1Y2F0aW9uIHRvb2xzOyBhY2NlbnRzIGFuZCBhbnN3ZXIgc3RhdGVzIHN0YXkgY29tcG9uZW50LW93bmVkLlxuQG1peGluIGVkdWNhdGlvbi1kYXJrLXRoZW1lKCRjYXJkcykge1xuICBAaW5jbHVkZSB0dW5lci1kYXJrLXRoZW1lO1xuXG4gIDpob3N0LWNvbnRleHQoLmRhcmstdGhlbWUpIHtcbiAgICAubGVhcm5pbmctaGVhZGVyIHtcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLXR1bmVyLWhlYWRlcik7XG4gICAgICBib3JkZXItYm90dG9tLWNvbG9yOiB2YXIoLS10dW5lci1ib3JkZXIpO1xuICAgICAgLmJyYW5kIHsgY29sb3I6IHZhcigtLXR1bmVyLXRleHQpOyB9XG4gICAgICAuYnJhbmQtdGl0bGVzIHNtYWxsIHsgY29sb3I6IHZhcigtLXR1bmVyLW11dGVkKTsgfVxuICAgIH1cbiAgICAuaGVyby1iYW5uZXIgaDEgeyBjb2xvcjogdmFyKC0tdHVuZXItdGV4dCk7IH1cbiAgICAuaGVyby1iYW5uZXIgcCB7IGNvbG9yOiB2YXIoLS10dW5lci1tdXRlZCk7IH1cbiAgICAjeyRjYXJkc30ge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tdHVuZXItc3VyZmFjZSk7XG4gICAgICBjb2xvcjogdmFyKC0tdHVuZXItdGV4dCk7XG4gICAgICBib3gtc2hhZG93OiAwIDhweCAyNHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */";

/***/ }),

/***/ 48199:
/*!*********************************************************************************************!*\
  !*** ./src/app/view/pages/tuner-plus/random-picker/random-picker.component.html?ngResource ***!
  \*********************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"interior-header\" dir=\"rtl\">\n  \n  <app-page-header titleKey=\"pageHeader.tuner-plus/random-picker/random-picker\" fallback=\"/TunerPlus\">\n\n  </app-page-header>\n</ion-header>\n\n<ion-content dir=\"rtl\" class=\"picker-content\">\n  <div class=\"container\">\n    <div class=\"hero-banner\">\n      <span class=\"hero-chip\">🎲 ابزار مدیریت کلاس اول دبستان</span>\n      <h1>قرعه‌کشی و انتخاب تصادفی دانش‌آموز</h1>\n      <p>ابزاری عادلانه، شاد و بدون سوگیری برای پاسخ‌گویی به درس، خواندن شعر و انشا، مسئول کلاس، و فعالیت‌های گروهی.</p>\n    </div>\n\n    <div class=\"picker-workspace\">\n      <!-- سمت چپ: گردونه و نمایش برنده -->\n      <div class=\"roulette-card\">\n        <div class=\"winner-display-box\" [class.spinning]=\"isSpinning\">\n          <span class=\"winner-label\">{{ isSpinning ? 'در حال قرعه‌کشی...' : 'نفر انتخاب شده:' }}</span>\n          <div class=\"winner-name\">\n            {{ selectedWinner ? selectedWinner : 'گردونه را بچرخانید!' }}\n          </div>\n          <span *ngIf=\"selectedWinner && !isSpinning\" class=\"winner-confetti\">🎉 نوبت شماست! 👏</span>\n        </div>\n\n        <button \n          class=\"spin-big-btn\" \n          [disabled]=\"isSpinning || namesList.length === 0\" \n          (click)=\"spin()\">\n          <ion-icon name=\"sync-outline\" [class.spin-icon]=\"isSpinning\"></ion-icon>\n          <span>{{ isSpinning ? 'در حال چرخش...' : '🎯 انتخاب تصادفی دانش‌آموز' }}</span>\n        </button>\n\n        <div class=\"options-toggle\">\n          <label class=\"checkbox-label\">\n            <input type=\"checkbox\" [(ngModel)]=\"removeAfterPick\" />\n            <span>حذف نام دانش‌آموز پس از هر بار انتخاب (تا همه نوبتشان شود)</span>\n          </label>\n        </div>\n\n        <!-- تاریخچه انتخاب‌ها -->\n        <div class=\"history-box\" *ngIf=\"history.length > 0\">\n          <div class=\"history-header\">\n            <h4>تاریخچه نوبت‌ها:</h4>\n            <button class=\"clear-hist-btn\" (click)=\"clearHistory()\">پاک کردن تاریخچه</button>\n          </div>\n          <div class=\"history-chips\">\n            <span *ngFor=\"let h of history; let idx = index\" class=\"hist-chip\">\n              #{{ history.length - idx }}: {{ h }}\n            </span>\n          </div>\n        </div>\n      </div>\n\n      <!-- سمت راست: مدیریت اسامی دانش‌آموزان -->\n      <div class=\"names-manager-card\">\n        <div class=\"header-row\">\n          <h3>لیست دانش‌آموزان کلاس ({{ namesList.length }} نفر)</h3>\n        </div>\n\n        <div class=\"quick-add-row\">\n          <input type=\"text\" [(ngModel)]=\"newName\" placeholder=\"نام دانش‌آموز جدید...\" (keyup.enter)=\"addSingleName()\" />\n          <button class=\"add-btn\" (click)=\"addSingleName()\">+ افزودن</button>\n        </div>\n\n        <div class=\"chips-list\">\n          <span *ngFor=\"let name of namesList; let i = index\" class=\"name-badge\">\n            {{ name }}\n            <button class=\"del-btn\" (click)=\"removeName(i)\">×</button>\n          </span>\n        </div>\n\n        <div class=\"bulk-edit-section\">\n          <label>ویرایش یا الصاق گروهی اسامی (هر اسم در یک خط):</label>\n          <textarea rows=\"6\" [(ngModel)]=\"namesText\" (input)=\"parseNames()\" placeholder=\"نام‌ها را با اینتر جدا کنید...\"></textarea>\n        </div>\n      </div>\n    </div>\n  </div>\n  <app-footer></app-footer>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_view_pages_tuner-plus_random-picker_random-picker_module_ts.js.map