"use strict";
(self["webpackChunkyawl_web_frontend"] = self["webpackChunkyawl_web_frontend"] || []).push([["main"],{

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-notifier */ 24110);



/**
 * This is the root component.
 * The app starts with this component.
 *
 * @author Philipp Thomas
 */
class AppComponent {
    ngOnInit() {
        document.body.classList.remove("loading");
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet")(1, "notifier-container");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet, angular_notifier__WEBPACK_IMPORTED_MODULE_2__.NotifierContainerComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ 37146);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! angular-notifier */ 24110);
/* harmony import */ var _common_layout_layout_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/layout/layout.module */ 81268);
/* harmony import */ var _common_session_session_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/session/session.module */ 67227);
/* harmony import */ var _yawl_resources_yawl_resources_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./yawl/resources/yawl-resources.module */ 13607);
/* harmony import */ var _dashboard_new_dashboard_new_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard-new/dashboard-new.module */ 82533);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 19200);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 9306);
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.routes */ 48693);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/menu */ 88589);
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./material.module */ 63806);
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @swimlane/ngx-charts */ 14142);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faArrowTurnUp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faArrowTurnUp */ 74577);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 22560);












/**
 *
 * @author Philipp Thomas
 * @editedBy Robin Steinwarz
 */
// Core










class AppModule {
    constructor(library, faConfig) {
        faConfig.fixedWidth = true;
        library.addIcons(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faCircleInfo, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faChartLine, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faArrowRightFromBracket, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faBars, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faGaugeHigh, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faCompass, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faBell, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faSitemap, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faFileCode, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faDatabase, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faCubes, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faCircle, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faCaretDown, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faCaretRight, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faPencil, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faArrowsToEye, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faArrowLeftLong, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faSquare, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faFilePen, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faChevronDown, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faChevronUp, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faPlus, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__.faArrowRight, _fortawesome_free_solid_svg_icons_faArrowTurnUp__WEBPACK_IMPORTED_MODULE_8__.faArrowTurnUp);
    }
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__.FaIconLibrary), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__.FaConfig)); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_11__.LocationStrategy, useClass: _angular_common__WEBPACK_IMPORTED_MODULE_11__.HashLocationStrategy }], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__.BrowserAnimationsModule,
        _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_14__.NgxChartsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClientModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule.forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_4__.routesConfig),
        _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule,
        angular_notifier__WEBPACK_IMPORTED_MODULE_18__.NotifierModule,
        _common_layout_layout_module__WEBPACK_IMPORTED_MODULE_0__.LayoutModule,
        _common_session_session_module__WEBPACK_IMPORTED_MODULE_1__.SessionModule,
        _yawl_resources_yawl_resources_module__WEBPACK_IMPORTED_MODULE_2__.YawlResourcesModule,
        _dashboard_new_dashboard_new_module__WEBPACK_IMPORTED_MODULE_3__.DashboardNewModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__.MatMenuModule,
        _material_module__WEBPACK_IMPORTED_MODULE_6__.MaterialModule,
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__.FontAwesomeModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__.AppComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__.BrowserAnimationsModule,
        _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_14__.NgxChartsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClientModule, _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule,
        angular_notifier__WEBPACK_IMPORTED_MODULE_18__.NotifierModule,
        _common_layout_layout_module__WEBPACK_IMPORTED_MODULE_0__.LayoutModule,
        _common_session_session_module__WEBPACK_IMPORTED_MODULE_1__.SessionModule,
        _yawl_resources_yawl_resources_module__WEBPACK_IMPORTED_MODULE_2__.YawlResourcesModule,
        _dashboard_new_dashboard_new_module__WEBPACK_IMPORTED_MODULE_3__.DashboardNewModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__.MatMenuModule,
        _material_module__WEBPACK_IMPORTED_MODULE_6__.MaterialModule,
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__.FontAwesomeModule] }); })();


/***/ }),

/***/ 48693:
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "routesConfig": () => (/* binding */ routesConfig)
/* harmony export */ });
/* harmony import */ var _common_layout_page_not_found_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/layout/page-not-found.page */ 97953);

/**
 * The configuration of the routes that are default.
 *
 * Note: Routes for other components are in other modules.
 *
 * @author Philipp Thomas
 * @editedBy Robin Steinwarz
 */
const routesConfig = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
    },
    {
        path: '**',
        pathMatch: 'full',
        component: _common_layout_page_not_found_page__WEBPACK_IMPORTED_MODULE_0__.PageNotFoundPage
    }
];


/***/ }),

/***/ 30233:
/*!**************************************************!*\
  !*** ./src/app/common/config/features-config.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "featuresConfig": () => (/* binding */ featuresConfig)
/* harmony export */ });
/**
 *
 * @createdBy Robin Steinwarz
 */
const featuresConfig = {
    editCostAndLimits: true
};


/***/ }),

/***/ 47512:
/*!*********************************************************!*\
  !*** ./src/app/common/layout/default-page.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultPageComponent": () => (/* binding */ DefaultPageComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 26078);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _session_session_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../session/session.service */ 6134);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-notifier */ 24110);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/toolbar */ 52543);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 19200);
/* harmony import */ var _sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar.component */ 1677);
/* harmony import */ var _sidebar_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar-layout.component */ 31073);












function DefaultPageComponent_li_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li")(1, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "fa-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fixedWidth", true);
} }
const _c0 = ["*"];
/**
 * @author Philipp R. Thomas
 * @editedBy Robin Steinwarz
 */
class DefaultPageComponent {
    constructor(sessionService, router, notifierService) {
        this.sessionService = sessionService;
        this.router = router;
        this.notifierService = notifierService;
        this.dashboards = [];
        this.subscription = rxjs__WEBPACK_IMPORTED_MODULE_4__.Subscription.EMPTY;
        this.withDashboardService = true;
        this.organisationToggledOn = false;
    }
    ngOnInit() {
        /*if(this.withDashboardService) {
            this.subscription = this.dashboardService.dashboardChanged.subscribe(() => {
                this.reload()
            });
    
            this.reload();
        }*/
    }
    ngOnDestroy() {
        if (this.subscription) {
            // @ts-ignore
            this.subscription.unsubscribe();
        }
    }
    reload() {
        /*this.dashboardService.getDashboardsOfUser().subscribe((result: { dashboards: any; }) => {
            this.dashboards = result.dashboards;
          },
          (error: string) => {
            this.notifierService.notify("Error", "Could not load dashboards. "+error)
          },
          () => {});*/
    }
    toggleOrganisation(event) {
        this.organisationToggledOn = !this.organisationToggledOn;
    }
    onLogoutButton() {
        this.sessionService.logout().subscribe(() => {
            this.notifierService.notify("success", "You have been successfully logged out");
            this.router.navigate(['/login']);
        }, () => {
            this.notifierService.notify("error", "An error occured while logging out");
        });
    }
    getUsername() {
        return this.sessionService.getUsername();
    }
}
DefaultPageComponent.ɵfac = function DefaultPageComponent_Factory(t) { return new (t || DefaultPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_session_session_service__WEBPACK_IMPORTED_MODULE_0__.SessionService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](angular_notifier__WEBPACK_IMPORTED_MODULE_6__.NotifierService)); };
DefaultPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: DefaultPageComponent, selectors: [["default-page"]], ngContentSelectors: _c0, decls: 19, vars: 5, consts: [[1, "toolbar-primary"], [1, "sidebar-toggle-button", "btn", "btn-icon", 3, "click"], ["icon", "bars", 1, "fa-fw"], [1, "toolbar-title"], [1, "toolbar-right"], ["mat-button", "", 1, "logout-button", 3, "click"], ["icon", "arrow-right-from-bracket", 1, "fa-fw", 2, "font-size", "13px", "color", "rgba(255,255,255,0.9)"], ["sidenav", ""], [1, "sidebar-header"], ["icon", "chart-line", 2, "font-size", "15px", "color", "rgba(255,255,255,0.9)", 3, "fixedWidth"], [1, "main-menu"], [4, "ngIf"], [1, "app-content"], ["routerLink", "/", "routerLinkActive", "active", 2, "padding", "0.5em 13px"], ["icon", "gauge-high", "matTooltip", "Go to the home page.", 3, "fixedWidth"]], template: function DefaultPageComponent_Template(rf, ctx) { if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-toolbar", 0)(1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DefaultPageComponent_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](12); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r0.toggle()); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "fa-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " YAWL Dashboard ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4)(6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DefaultPageComponent_Template_button_click_6_listener() { return ctx.onLogoutButton(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "fa-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " Logout ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "sidebar-layout")(11, "sidebar", null, 7)(13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "fa-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, DefaultPageComponent_li_16_Template, 3, 1, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵprojection"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.getUsername(), ", ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fixedWidth", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.withDashboardService);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("with-sidebar", _r0.opened);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkActive, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__.MatToolbar, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__.MatTooltip, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__.FaIconComponent, _sidebar_component__WEBPACK_IMPORTED_MODULE_1__.SidebarComponent, _sidebar_layout_component__WEBPACK_IMPORTED_MODULE_2__.SidebarLayoutComponent], encapsulation: 2 });


/***/ }),

/***/ 81268:
/*!************************************************!*\
  !*** ./src/app/common/layout/layout.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutModule": () => (/* binding */ LayoutModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _material_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./material-shared.module */ 69438);
/* harmony import */ var _page_not_found_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-not-found.page */ 97953);
/* harmony import */ var _default_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./default-page.component */ 47512);
/* harmony import */ var _toolbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toolbar.component */ 57338);
/* harmony import */ var _sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sidebar.component */ 1677);
/* harmony import */ var _sidebar_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sidebar-layout.component */ 31073);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 19200);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);










/**
 * @author Philipp R. Thomas
 */
class LayoutModule {
}
LayoutModule.ɵfac = function LayoutModule_Factory(t) { return new (t || LayoutModule)(); };
LayoutModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: LayoutModule });
LayoutModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule,
        _material_shared_module__WEBPACK_IMPORTED_MODULE_0__.MaterialSharedModule,
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__.FontAwesomeModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](LayoutModule, { declarations: [_page_not_found_page__WEBPACK_IMPORTED_MODULE_1__.PageNotFoundPage,
        _default_page_component__WEBPACK_IMPORTED_MODULE_2__.DefaultPageComponent,
        _toolbar_component__WEBPACK_IMPORTED_MODULE_3__.ToolbarComponent,
        _sidebar_component__WEBPACK_IMPORTED_MODULE_4__.SidebarComponent,
        _sidebar_layout_component__WEBPACK_IMPORTED_MODULE_5__.SidebarLayoutComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule,
        _material_shared_module__WEBPACK_IMPORTED_MODULE_0__.MaterialSharedModule,
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__.FontAwesomeModule], exports: [_default_page_component__WEBPACK_IMPORTED_MODULE_2__.DefaultPageComponent] }); })();


/***/ }),

/***/ 69438:
/*!*********************************************************!*\
  !*** ./src/app/common/layout/material-shared.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialSharedModule": () => (/* binding */ MaterialSharedModule)
/* harmony export */ });
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/menu */ 88589);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/toolbar */ 52543);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button-toggle */ 19837);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/checkbox */ 44792);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/chips */ 11169);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/datepicker */ 42298);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/paginator */ 36060);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/radio */ 52922);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/sidenav */ 16643);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/snack-bar */ 10930);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/tabs */ 15892);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);




















/**
 * @author Philipp R. Thomas
 */
class MaterialSharedModule {
}
MaterialSharedModule.ɵfac = function MaterialSharedModule_Factory(t) { return new (t || MaterialSharedModule)(); };
MaterialSharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialSharedModule });
MaterialSharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatButtonModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_2__.MatButtonToggleModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__.MatCheckboxModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__.MatChipsModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__.MatDatepickerModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInputModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_9__.MatListModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenuModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__.MatPaginatorModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__.MatRadioModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_13__.MatSelectModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__.MatSidenavModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__.MatSnackBarModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatTableModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_17__.MatTabsModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__.MatToolbarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__.MatTooltipModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatButtonModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_2__.MatButtonToggleModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__.MatCheckboxModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__.MatChipsModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__.MatDatepickerModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInputModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_9__.MatListModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenuModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__.MatPaginatorModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__.MatRadioModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_13__.MatSelectModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__.MatSidenavModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__.MatSnackBarModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatTableModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_17__.MatTabsModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__.MatToolbarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__.MatTooltipModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialSharedModule, { imports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatButtonModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_2__.MatButtonToggleModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__.MatCheckboxModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__.MatChipsModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__.MatDatepickerModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInputModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_9__.MatListModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenuModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__.MatPaginatorModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__.MatRadioModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_13__.MatSelectModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__.MatSidenavModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__.MatSnackBarModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatTableModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_17__.MatTabsModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__.MatToolbarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__.MatTooltipModule], exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatButtonModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_2__.MatButtonToggleModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__.MatCheckboxModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_5__.MatChipsModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__.MatDatepickerModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInputModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_9__.MatListModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenuModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__.MatPaginatorModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__.MatRadioModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_13__.MatSelectModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__.MatSidenavModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__.MatSnackBarModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_16__.MatTableModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_17__.MatTabsModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_18__.MatToolbarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_19__.MatTooltipModule] }); })();


/***/ }),

/***/ 97953:
/*!******************************************************!*\
  !*** ./src/app/common/layout/page-not-found.page.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageNotFoundPage": () => (/* binding */ PageNotFoundPage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _default_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default-page.component */ 47512);



/**
 * @author Philipp R. Thomas
 */
class PageNotFoundPage {
    constructor(router) {
        this.router = router;
    }
    navigateToHome() {
        let url = '/';
        this.router.navigate([url]);
    }
}
PageNotFoundPage.ɵfac = function PageNotFoundPage_Factory(t) { return new (t || PageNotFoundPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
PageNotFoundPage.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PageNotFoundPage, selectors: [["ng-component"]], decls: 6, vars: 0, consts: [[1, "page-header"]], template: function PageNotFoundPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "default-page")(1, "div", 0)(2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "404 Not found");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "There is no page with this URL");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } }, dependencies: [_default_page_component__WEBPACK_IMPORTED_MODULE_0__.DefaultPageComponent], encapsulation: 2 });


/***/ }),

/***/ 31073:
/*!***********************************************************!*\
  !*** ./src/app/common/layout/sidebar-layout.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarLayoutComponent": () => (/* binding */ SidebarLayoutComponent)
/* harmony export */ });
/* harmony import */ var _sidebar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sidebar.component */ 1677);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);



const _c0 = ["*"];
/**
 * @author Philipp R. Thomas
 */
class SidebarLayoutComponent {
    toggleSidebar() {
        return this.sidebar.first.toggle();
    }
    isSidebarOpen() {
        return this.sidebar.first.opened;
    }
}
SidebarLayoutComponent.ɵfac = function SidebarLayoutComponent_Factory(t) { return new (t || SidebarLayoutComponent)(); };
SidebarLayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SidebarLayoutComponent, selectors: [["sidebar-layout"]], contentQueries: function SidebarLayoutComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, _sidebar_component__WEBPACK_IMPORTED_MODULE_0__.SidebarComponent, 4);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.sidebar = _t);
    } }, ngContentSelectors: _c0, decls: 2, vars: 2, consts: [[1, "sidebar-backdrop", 3, "click"]], template: function SidebarLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidebarLayoutComponent_Template_div_click_0_listener() { return ctx.toggleSidebar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("sidebar-backdrop-shown", ctx.isSidebarOpen());
    } }, encapsulation: 2 });


/***/ }),

/***/ 1677:
/*!****************************************************!*\
  !*** ./src/app/common/layout/sidebar.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarComponent": () => (/* binding */ SidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);


const _c0 = ["*"];
/**
 * @author Philipp R. Thomas
 */
class SidebarComponent {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.opened = false;
    }
    toggle(isOpen = !this.opened) {
        this.opened = isOpen;
        if (this.opened) {
            this.renderer.addClass(this.el.nativeElement, 'sidebar-visible');
        }
        else {
            this.renderer.removeClass(this.el.nativeElement, 'sidebar-visible');
        }
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2)); };
SidebarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["sidebar"]], ngContentSelectors: _c0, decls: 1, vars: 0, template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    } }, encapsulation: 2 });


/***/ }),

/***/ 57338:
/*!****************************************************!*\
  !*** ./src/app/common/layout/toolbar.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToolbarComponent": () => (/* binding */ ToolbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

const _c0 = ["*"];
/**
 * @author Philipp R. Thomas
 */
class ToolbarComponent {
}
ToolbarComponent.ɵfac = function ToolbarComponent_Factory(t) { return new (t || ToolbarComponent)(); };
ToolbarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ToolbarComponent, selectors: [["toolbar"]], ngContentSelectors: _c0, decls: 1, vars: 0, template: function ToolbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    } }, encapsulation: 2 });


/***/ }),

/***/ 46625:
/*!***************************************************!*\
  !*** ./src/app/common/session/logged-in.guard.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoggedInGuard": () => (/* binding */ LoggedInGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _session_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./session.service */ 6134);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);




/**
 * @author Philipp R. Thomas
 * @editedBy Robin Steinwarz
 */
class LoggedInGuard {
    constructor(sessionService, router) {
        this.sessionService = sessionService;
        this.router = router;
    }
    canActivate(route, state) {
        if (this.sessionService.isLoggedIn()) {
            return true;
        }
        this.sessionService.redirectUrl = state.url;
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}
LoggedInGuard.ɵfac = function LoggedInGuard_Factory(t) { return new (t || LoggedInGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_session_service__WEBPACK_IMPORTED_MODULE_0__.SessionService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
LoggedInGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LoggedInGuard, factory: LoggedInGuard.ɵfac });


/***/ }),

/***/ 93610:
/*!***************************************************!*\
  !*** ./src/app/common/session/login-form.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginFormPage": () => (/* binding */ LoginFormPage)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _session_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./session.service */ 6134);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-notifier */ 24110);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 84522);






/**
 * @author Philipp R. Thomas
 */
class LoginFormPage {
    constructor(sessionService, router, notifierService) {
        this.sessionService = sessionService;
        this.router = router;
        this.notifierService = notifierService;
        this.applicationName = "YAWL Web Admin";
        this.username = "admin";
        this.password = "YAWL";
        this.isLoading = false;
        this.loadingType = "";
    }
    ngOnInit() {
        this.isLoading = true;
        this.loadingType = "session-check";
        this.sessionService.checkLoggedIn(() => {
            this.isLoading = false;
            if (this.sessionService.isLoggedIn()) {
                this.redirect();
            }
        });
    }
    onSubmit() {
        this.isLoading = true;
        this.loadingType = "credentials-check";
        this.sessionService.login(this.username, this.password)
            .subscribe({
            next: this.handleLoginResponse.bind(this),
            error: this.handleLoginError.bind(this)
        });
        this.password = "";
    }
    handleLoginResponse(result) {
        this.isLoading = false;
        if (result) {
            this.notifierService.notify("success", "You have been successfully logged in");
            this.redirect();
        }
        else {
            this.notifierService.notify("error", "The username or password you have entered is invalid");
        }
    }
    handleLoginError(error) {
        this.isLoading = false;
        this.notifierService.notify("error", "Login was unsuccessful");
    }
    redirect() {
        if (!this.sessionService.redirectUrl
            || this.sessionService.redirectUrl == "login") {
            this.router.navigate(['']);
        }
        else {
            this.router.navigate([this.sessionService.redirectUrl]);
        }
        this.sessionService.redirectUrl = '';
    }
}
LoginFormPage.ɵfac = function LoginFormPage_Factory(t) { return new (t || LoginFormPage)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_session_service__WEBPACK_IMPORTED_MODULE_0__.SessionService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](angular_notifier__WEBPACK_IMPORTED_MODULE_3__.NotifierService)); };
LoginFormPage.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginFormPage, selectors: [["login-form"]], decls: 16, vars: 8, consts: [[1, "form-signin-wrapper"], ["role", "form", 1, "form-signin", 3, "ngSubmit"], [1, "form-signin-heading"], [1, "form-signin-subheading"], [1, "alert", "alert-info", 3, "hidden"], [1, "sr-only"], ["name", "username", "type", "text", "autofocus", "autofocus", "placeholder", "Username", 1, "form-control", 3, "ngModel", "disabled", "ngModelChange"], ["name", "password", "type", "password", "placeholder", "Password", 1, "form-control", 3, "ngModel", "disabled", "ngModelChange"], ["mat-raised-button", "", "color", "accent", "type", "submit", 3, "disabled"]], template: function LoginFormPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginFormPage_Template_form_ngSubmit_1_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Log in");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Check current session...");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Check credentials...");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginFormPage_Template_input_ngModelChange_11_listener($event) { return ctx.username = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginFormPage_Template_input_ngModelChange_13_listener($event) { return ctx.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Log in ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("to ", ctx.applicationName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !(ctx.isLoading && ctx.loadingType == "session-check"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !(ctx.isLoading && ctx.loadingType == "credentials-check"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.username)("disabled", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.password)("disabled", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.isLoading);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton], styles: [".form-signin-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  position: absolute;\n  top: 50%;\n  margin-top: -180px;\n}\n.form-signin[_ngcontent-%COMP%] {\n  margin: auto;\n  max-width: 330px;\n  padding: 15px;\n  font-family: Roboto, Helvetica, sans-serif;\n  font-size: 1.2em;\n}\n.form-signin-heading[_ngcontent-%COMP%] {\n  font-size: 2em;\n  margin-bottom: 0;\n}\n.form-signin-subheading[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  font-size: 0.8em;\n  color: #AAAAAA;\n  padding-left: 2px;\n}\n.form-signin[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  position: relative;\n  height: auto;\n  box-sizing: border-box;\n  padding: 10px;\n  width: 100%;\n  border-radius: 4px;\n  border: 1px solid #d2d6de;\n  background-color: white;\n  font-size: 16px;\n}\n.form-signin[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  margin-bottom: -1px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.form-signin[_ngcontent-%COMP%]   input[type=password][_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.form-signin[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLWZvcm0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhCQUFBO0FBRUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7QUFBRjtBQUdBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLDBDQUFBO0VBQ0EsZ0JBQUE7QUFBRjtBQUdBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FBQUY7QUFHQTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFBRjtBQUdBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBR0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUFBRjtBQUdBO0VBQ0UsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLDRCQUFBO0FBQUY7QUFHQTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtBQUFGO0FBSUE7RUFDRSxjQUFBO0FBREYiLCJmaWxlIjoibG9naW4tZm9ybS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBAYXV0aG9yIFBoaWxpcHAgUi4gVGhvbWFzICovXHJcblxyXG4uZm9ybS1zaWduaW4td3JhcHBlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIG1hcmdpbi10b3A6IC0xODBweDtcclxufVxyXG5cclxuLmZvcm0tc2lnbmluIHtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgbWF4LXdpZHRoOiAzMzBweDtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDEuMmVtO1xyXG59XHJcblxyXG4uZm9ybS1zaWduaW4taGVhZGluZyB7XHJcbiAgZm9udC1zaXplOiAyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuLmZvcm0tc2lnbmluLXN1YmhlYWRpbmcge1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgZm9udC1zaXplOiAwLjhlbTs7XHJcbiAgY29sb3I6ICNBQUFBQUE7XHJcbiAgcGFkZGluZy1sZWZ0OiAycHg7XHJcbn1cclxuXHJcbi5mb3JtLXNpZ25pbiAuZm9ybS1jb250cm9sIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZDJkNmRlOztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5mb3JtLXNpZ25pbiBpbnB1dFt0eXBlPVwidGV4dFwiXSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogLTFweDtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xyXG59XHJcblxyXG4uZm9ybS1zaWduaW4gaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdIHtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XHJcbn1cclxuXHJcblxyXG4uZm9ybS1zaWduaW4gYnV0dG9uIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 67227:
/*!**************************************************!*\
  !*** ./src/app/common/session/session.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SessionModule": () => (/* binding */ SessionModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _layout_material_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../layout/material-shared.module */ 69438);
/* harmony import */ var _logged_in_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logged-in.guard */ 46625);
/* harmony import */ var _session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./session.service */ 6134);
/* harmony import */ var _login_form_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-form.page */ 93610);
/* harmony import */ var _session_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./session.routes */ 37729);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);










/**
 * @author Philipp R. Thomas
 */
class SessionModule {
}
SessionModule.ɵfac = function SessionModule_Factory(t) { return new (t || SessionModule)(); };
SessionModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: SessionModule });
SessionModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [
        _logged_in_guard__WEBPACK_IMPORTED_MODULE_1__.LoggedInGuard,
        _session_service__WEBPACK_IMPORTED_MODULE_2__.SessionService
    ], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(_session_routes__WEBPACK_IMPORTED_MODULE_4__.sessionRoutesConfig),
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
        _layout_material_shared_module__WEBPACK_IMPORTED_MODULE_0__.MaterialSharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](SessionModule, { declarations: [_login_form_page__WEBPACK_IMPORTED_MODULE_3__.LoginFormPage], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
        _layout_material_shared_module__WEBPACK_IMPORTED_MODULE_0__.MaterialSharedModule] }); })();


/***/ }),

/***/ 37729:
/*!**************************************************!*\
  !*** ./src/app/common/session/session.routes.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sessionRoutesConfig": () => (/* binding */ sessionRoutesConfig)
/* harmony export */ });
/* harmony import */ var _login_form_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-form.page */ 93610);

/**
 * @author Philipp R. Thomas
 */
/**
 * The configuration of the routes for session management.
 *
 * @author Philipp Thomas
 */
const sessionRoutesConfig = [
    {
        path: 'login',
        pathMatch: 'full',
        component: _login_form_page__WEBPACK_IMPORTED_MODULE_0__.LoginFormPage
    }
];


/***/ }),

/***/ 6134:
/*!***************************************************!*\
  !*** ./src/app/common/session/session.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SessionService": () => (/* binding */ SessionService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);

// @ts-ignore





/**
 * The service for session management.
 *
 * @author Philipp Thomas
 * @editedBy Robin Steinwarz
 */
class SessionService {
    constructor(http) {
        this.http = http;
        this.userUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.env.apiUrl + 'user';
        this.loginUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.env.url + 'login';
        this.logoutUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.env.url + 'logout';
        this.loggedIn = false;
        this.username = "";
        this.authorities = [];
        this.sessionCheckInterval = null;
        this.startIntervalSessionCheck();
    }
    startIntervalSessionCheck() {
        if (!this.sessionCheckInterval) {
            // @ts-ignore
            this.sessionCheckInterval = setInterval(() => {
                this.checkLoggedIn();
            }, 10000);
        }
    }
    stopIntervalSessionCheck() {
        if (this.sessionCheckInterval) {
            // @ts-ignore
            clearInterval(this.sessionCheckInterval);
            this.sessionCheckInterval = null;
        }
    }
    isIntervalSessionCheckRunning() {
        return this.sessionCheckInterval != null;
    }
    checkLoggedIn(callback) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
        this.http.get(this.userUrl, { headers, withCredentials: true }).subscribe((res) => {
            this.loggedIn = true;
            this.username = res.username;
            this.authorities = res.authorities;
            //this.startIntervalSessionCheck();
            callback && callback();
        }, (error) => {
            this.loggedIn = false;
            this.username = "";
            this.authorities = [];
            callback && callback();
        });
    }
    login(username, password) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let payload = 'username=' + encodeURIComponent(username) + '&password=' + encodeURIComponent(password);
        let response = this.http.post(this.loginUrl, payload, {
            headers,
            observe: "response",
            withCredentials: true
        });
        response.subscribe({
            next: this.handleLoginResponse.bind(this),
            error: this.handleLoginError.bind(this)
        });
        return response;
    }
    handleLoginResponse(res) {
        if (res.ok) {
            this.loggedIn = true;
            this.username = "admin";
            //this.startIntervalSessionCheck();
        }
        return res.ok;
    }
    handleLoginError(error) {
        if (error.status && error.status == 401) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(false);
        }
        let errMsg = (error.message)
            ? error.message
            : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(errMsg);
    }
    loginFake(username, password) {
        this.loggedIn = username == "admin";
    }
    logout() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
        return this.http.get(this.logoutUrl, { headers, withCredentials: true }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((res) => {
            this.loggedIn = false;
            this.username = "";
            this.authorities = [];
            //this.stopIntervalSessionCheck();
            return;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)((error) => this.handleLogoutError(error)));
    }
    handleLogoutError(error) {
        let errMsg = (error.message)
            ? error.message
            : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(errMsg);
    }
    isLoggedIn() {
        return this.loggedIn;
    }
    getUsername() {
        return this.username;
    }
    getAuthorities() {
        return this.authorities;
    }
    hasAuthoritiy(authority) {
        for (let entry of this.authorities) {
            if (entry == authority) {
                return true;
            }
        }
        return false;
    }
    hasRole(role) {
        for (let authority of this.authorities) {
            if (authority == "ROLE_" + role) {
                return true;
            }
        }
        return false;
    }
}
SessionService.ɵfac = function SessionService_Factory(t) { return new (t || SessionService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
SessionService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: SessionService, factory: SessionService.ɵfac });


/***/ }),

/***/ 19274:
/*!*******************************************!*\
  !*** ./src/app/common/util/color-util.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColorUtils": () => (/* binding */ ColorUtils)
/* harmony export */ });
/* harmony import */ var color2k__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! color2k */ 77518);

/**
 * @author Robin Steinwarz
 */
class ColorUtils {
    static getVibrantColor() {
        let index = (this.vibrantIndex++ % this.vibrantColor.length);
        let div = (this.vibrantIndex / this.vibrantColor.length);
        let lighterAmount = (div > 0) ? div / 10 : 0;
        return (0,color2k__WEBPACK_IMPORTED_MODULE_0__.lighten)(this.vibrantColor[index], lighterAmount);
    }
    static getColorMix() {
        let index = (this.colorMixIndex++ % this.colorMix.length);
        let div = (this.colorMixIndex / this.colorMix.length);
        let lighterAmount = (div > 0) ? div / 10 : 0;
        return (0,color2k__WEBPACK_IMPORTED_MODULE_0__.lighten)(this.colorMix[index], lighterAmount);
    }
    static getColor2Mix() {
        let index = (this.colorMix2Index++ % this.colorMix2.length);
        let div = (this.colorMix2Index / this.colorMix2.length);
        let lighterAmount = (div > 0) ? div / 10 : 0;
        return (0,color2k__WEBPACK_IMPORTED_MODULE_0__.lighten)(this.colorMix2[index], lighterAmount);
    }
    static getWeekdayColor(i) {
        return this.vibrantColor[(i % this.vibrantColor.length)];
    }
    static getLighterColor(color) {
        return (0,color2k__WEBPACK_IMPORTED_MODULE_0__.lighten)(color, .1);
    }
    static getMuchLighterColor(color) {
        return (0,color2k__WEBPACK_IMPORTED_MODULE_0__.lighten)(color, .3);
    }
    static getTransparentColor(color) {
        let cl = (0,color2k__WEBPACK_IMPORTED_MODULE_0__.parseToRgba)(color);
        cl[3] = 0.4;
        return (0,color2k__WEBPACK_IMPORTED_MODULE_0__.rgba)(...cl);
    }
    static getDarkerColor(color) {
        return (0,color2k__WEBPACK_IMPORTED_MODULE_0__.darken)(color, .2);
    }
    static getPrimaryColor() {
        return "#2196c3";
    }
    static getSecondaryColor() {
        return "#12376a";
    }
}
ColorUtils.vibrantColor = ["#F94144", "#F3722C", "#F8961E", "#F9844A", "#F9C74F", "#90BE6D", "#43AA8B", "#4D908E", "#577590", "#277DA1"];
ColorUtils.vibrantIndex = 0;
ColorUtils.colorMix = ["#39F6BA", "#31D4CE", "#42C3EB", "#3183D4", "#3966F6", "#A3F659", "#5DD44C", "#5FEA79", "#4CD48B", "#59F6CE",
    "#F6C34F", "#D4B744", "#EBDC56", "#D3D444", "#BBF64F", "#F6724C", "#D47842", "#EBA254", "#D49F42", "#F6CA4C", "#F65DD3", "#D45074",
    "#EB6D65", "#D46C50", "#F6945D", "#B66CF6", "#BD5DD4", "#EB73D9", "#D45D87", "#F6726C", "#6862F6", "#7C55D4", "#B46AEA", "#C155D4",
    "#F662D3", "#B4F7ED", "#9CCFD6", "#B8D9ED", "#9CB1D6", "#B4BAF7", "#F7E9BE", "#D6CFA5", "#EEECC4", "#CED6A5", "#D9F7BE"];
ColorUtils.colorMixIndex = 0;
ColorUtils.colorMix2 = ["#3F2BB3", "#635E80", "#4E88E5", "#E9BF89", "#B3642B", "#327FB3", "#58E6D4", "#B33332",
    "#2B9BB3", "#5E7A80", "#4DE5AB", "#E98C89", "#B32B63", "#2DB393", "#51E66F", "#E98CC8", "#A82DB3", "#25B34B", "#5B8064",
    "#80E647", "#CB82E9", "#6425B3", "#E5E53E", "#9179E9", "#1E26B3", "#B2B320", "#7F8057", "#E5C43F", "#7B9DE9",
    "#2074B3", "#B38F15", "#E59833", "#6DDDE9", "#15B396", "#B3916B", "#805526", "#E5B0A0", "#69E9A3", "#6BB377"];
ColorUtils.colorMix2Index = 0;


/***/ }),

/***/ 17045:
/*!********************************************!*\
  !*** ./src/app/common/util/format-util.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormatUtils": () => (/* binding */ FormatUtils)
/* harmony export */ });
/**
 * @author Robin Steinwarz
 */
class FormatUtils {
    getTimestampFromDuration(start, end) {
        // @ts-ignore
        return Math.abs(start - end);
    }
    applyPastTimeFormatForTimestamp(timestamp) {
        // @ts-ignore
        if (timestamp === undefined || timestamp === '') {
            timestamp = 0;
        }
        // @ts-ignore
        let hoursMs = timestamp;
        let minutesMs = timestamp % (1000 * 60 * 60);
        let secondsMs = timestamp % (1000 * 60);
        let hours = Math.floor(hoursMs / (1000 * 60 * 60));
        let minutes = Math.floor(minutesMs / (1000 * 60));
        let seconds = Math.floor(secondsMs / (1000));
        return hours + ":" + ("0" + minutes).slice(-2) + ":" + ("0" + seconds).slice(-2);
    }
    applyPastTimeFormatForTimestampWithDays(timestamp) {
        if (timestamp === 0) {
            return 0 + "d " + 0 + ":" + 0 + ":" + 0;
        }
        let daysMs = timestamp;
        let hoursMs = daysMs % (1000 * 60 * 60 * 24);
        let minutesMs = hoursMs % (1000 * 60 * 60);
        let secondsMs = hoursMs % (1000 * 60);
        let days = Math.floor(daysMs / (1000 * 60 * 60 * 24));
        let hours = Math.floor(hoursMs / (1000 * 60 * 60));
        let minutes = Math.floor(minutesMs / (1000 * 60));
        let seconds = Math.floor(secondsMs / (1000));
        return days + "d " + hours + ":" + ("0" + minutes).slice(-2) + ":" + ("0" + seconds).slice(-2);
    }
    static applyPastTimeFormatForTimestampWithDays(timestamp) {
        if (timestamp === 0) {
            return 0 + "d " + 0 + ":" + 0 + ":" + 0;
        }
        let daysMs = timestamp;
        let hoursMs = daysMs % (1000 * 60 * 60 * 24);
        let minutesMs = hoursMs % (1000 * 60 * 60);
        let secondsMs = hoursMs % (1000 * 60);
        let days = Math.floor(daysMs / (1000 * 60 * 60 * 24));
        let hours = Math.floor(hoursMs / (1000 * 60 * 60));
        let minutes = Math.floor(minutesMs / (1000 * 60));
        let seconds = Math.floor(secondsMs / (1000));
        return days + "d " + ("00" + hours).slice(-2) + ":" + ("00" + minutes).slice(-2) + ":" + ("00" + seconds).slice(-2);
    }
    applyDatetimeFormat(timestamp) {
        if (timestamp === 0) {
            return "";
        }
        let date = new Date(timestamp);
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
        return months[date.getMonth()] + ".:" + date.getDate() + ", " + date.getFullYear() + " " + date.toLocaleTimeString();
    }
    static applyDateFormat(timestamp) {
        if (timestamp === 0) {
            return "";
        }
        let date = new Date(timestamp);
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return date.getFullYear() + " " + months[date.getMonth()];
    }
    static applyDateWithDaysFormat(timestamp) {
        if (timestamp === 0) {
            return "";
        }
        let date = new Date(timestamp);
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return date.getFullYear() + " " + months[date.getMonth()] + " " + date.getDate() + " " + date.getHours();
    }
    applyResourcesArrayFormat(resources) {
        if (resources === undefined) {
            return "";
        }
        let chain = "";
        resources.forEach(resource => {
            chain += ", " + resource.firstname + " " + resource.lastname;
        });
        return chain.substring(2).trim();
    }
    applyOccurencesFormat(occurences) {
        if (occurences.length != 8) {
            return "";
        }
        return "M" + occurences[0] + " T" + occurences[1] + " W" + occurences[2] + " T" + occurences[3] + " F" + occurences[4] + " S" + occurences[5] + " S" + occurences[6] + "";
    }
    applyIsOverdueFormat(age, maxTime) {
        if (maxTime === 0) {
            return "Not set";
        }
        if (age > maxTime) {
            return "Yes";
        }
        else {
            return "No";
        }
    }
    applyBooleanFormat(bool) {
        return (bool) ? "Yes" : "No";
    }
    applyPercentageFormat(val) {
        return val.toLocaleString() + '%';
    }
    static applyDecimalPercentageFormat(val) {
        return (val * 100).toFixed(2) + '%';
    }
    applyFixedDecimalNumbers(val) {
        return val.toFixed(2);
    }
    applyVerticalGroupChartFormat(data) {
        return "";
    }
    applyPieChartTimestampLabelFormat(val) {
        return val.data.label + "<br> " + new FormatUtils().applyPastTimeFormatForTimestampWithDays(val.value);
    }
}


/***/ }),

/***/ 44796:
/*!************************************************!*\
  !*** ./src/app/common/util/statistic-utils.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatisticUtils": () => (/* binding */ StatisticUtils)
/* harmony export */ });
/**
 * @author Robin Steinwarz
 */
class StatisticUtils {
    static notCancelledAndCompleted(caseStatistic) {
        return !caseStatistic.cancelled && caseStatistic.end !== 0;
    }
    static timestampIsInDateRange(timestamp, range) {
        let start = range.value.start?.getTime();
        let end = range.value.end?.getTime();
        if (timestamp > start && timestamp < end) {
            return true;
        }
        return false;
    }
    static calculateStatisticTicks(range, fineness) {
        let start = range.value.start;
        let end = range.value.end;
        let bufferLabel = start.getTime() + " " + end.getTime() + " " + fineness;
        if (this.tickBuffer.has(bufferLabel)) {
            return this.tickBuffer.get(bufferLabel);
        }
        let startYear = start.getFullYear();
        let startMonth = start.getMonth();
        let endYear = end.getFullYear();
        let endMonth = end.getMonth();
        let dates = [];
        if (fineness === 'month') {
            for (let i = startYear; i <= endYear; i++) {
                let startMonthIndex = (i === startYear) ? startMonth : 0;
                let endMonthIndex = (i != endYear) ? 11 : endMonth;
                for (let j = startMonthIndex; j <= endMonthIndex; j++) {
                    dates.push({ year: new Date(i, 0).getTime(), month: new Date(i, j).getTime() });
                }
            }
        }
        else {
            for (let i = startYear; i <= endYear; i++) {
                dates.push({ year: new Date(i, 0).getTime(), month: 0 });
            }
        }
        this.tickBuffer.set(bufferLabel, dates);
        return dates;
    }
    static preventNullStatistic(array, series = false) {
        const emptyStatistic = {
            name: "None",
            series: [{
                    name: "None",
                    value: 0
                }]
        };
        const emptyNormalStatistic = {
            name: "None",
            value: 0
        };
        if (series && array.length === 0) {
            array.push(emptyStatistic);
        }
        else if (!series && array.length === 0) {
            array.push(emptyNormalStatistic);
        }
    }
    static changeMap(map, id, change) {
        if (!map.has(id)) {
            map.set(id, 0);
        }
        map.set(id, map.get(id) + change);
    }
}
StatisticUtils.monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
StatisticUtils.weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
StatisticUtils.tickBuffer = new Map();


/***/ }),

/***/ 92523:
/*!******************************************************************************************!*\
  !*** ./src/app/dashboard-new/case-statistic-view/case-statistic-chart-configurations.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CaseStatisticChartConfigurations": () => (/* binding */ CaseStatisticChartConfigurations)
/* harmony export */ });
/* harmony import */ var _common_util_format_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/util/format-util */ 17045);

/**
 * @author Robin Steinwarz
 */
class CaseStatisticChartConfigurations {
    static weekDayOccurrencesOptions(month) {
        return {
            animation: false,
            maintainAspectRatio: false,
            normalized: true,
            scales: {
                x: {
                    stacked: true,
                    type: 'time',
                    time: {
                        unit: (month) ? 'month' : 'year',
                        displayFormats: {
                            year: 'yyy MMM',
                            month: 'yyy MMM',
                        }
                    },
                    ticks: {
                        font: {
                            size: 10
                        }
                    }
                },
                y: {
                    stacked: true,
                    ticks: {
                        font: {
                            size: 10
                        }
                    },
                    title: {
                        display: true,
                        text: 'Number of cases started',
                        font: {
                            size: 10
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    display: false,
                    labels: {
                        font: {
                            size: 10
                        }
                    }
                },
                tooltip: {
                    enabled: true,
                    callbacks: {
                        label: function (tooltipItem) {
                            if (!tooltipItem) {
                                return "";
                            }
                            return [" " + tooltipItem.dataset.label,
                                // @ts-ignore
                                "Case instances started: " + tooltipItem.raw];
                        }
                    }
                },
            }
        };
    }
    static costsOptions(month) {
        return {
            animation: false,
            maintainAspectRatio: false,
            normalized: true,
            scales: {
                x: {
                    stacked: true,
                    type: 'time',
                    time: {
                        unit: (month) ? 'month' : 'year',
                        displayFormats: {
                            year: 'yyy MMM',
                            month: 'yyy MMM',
                        }
                    },
                    ticks: {
                        font: {
                            size: 10
                        }
                    }
                },
                y: {
                    stacked: true,
                    ticks: {
                        font: {
                            size: 10
                        }
                    },
                    title: {
                        display: true,
                        text: 'Sum of costs',
                        font: {
                            size: 10
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    display: false,
                    labels: {
                        font: {
                            size: 10
                        }
                    }
                },
                tooltip: {
                    enabled: true,
                    callbacks: {
                        label: function (tooltipItem) {
                            if (!tooltipItem) {
                                return "";
                            }
                            return [" " + tooltipItem.dataset.label,
                                // @ts-ignore
                                "Cost: " + tooltipItem.raw.toFixed(2)];
                        }
                    }
                },
            }
        };
    }
    static resourceUtilizationOptions(month) {
        return {
            animation: false,
            normalized: true,
            spanGaps: true,
            elements: {
                line: {
                    borderWidth: 1
                },
                point: {
                    radius: 0,
                    hitRadius: 2
                }
            },
            scales: {
                x: {
                    type: 'time',
                    time: {
                        unit: 'month',
                        displayFormats: {
                            year: 'yyy MMM',
                            month: 'yyy MMM',
                        }
                    },
                    ticks: {
                        font: {
                            size: 10
                        }
                    }
                },
                y: {
                    ticks: {
                        font: {
                            size: 10
                        }
                    },
                    min: 0,
                    title: {
                        display: true,
                        text: 'Number of resources',
                        font: {
                            size: 10
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    display: false,
                    labels: {
                        font: {
                            size: 10
                        }
                    }
                },
                tooltip: {
                    enabled: true,
                    callbacks: {
                        label: function (tooltipItem) {
                            if (!tooltipItem) {
                                return "";
                            }
                            return "Number of resources " + tooltipItem.raw;
                        }
                    }
                },
            }
        };
    }
    static caseIndicatorOptions(month) {
        return {
            animation: false,
            normalized: true,
            scales: {
                x: {
                    type: 'time',
                    time: {
                        unit: (month) ? 'month' : 'year',
                        displayFormats: {
                            year: 'yyy MMM',
                            month: 'yyy MMM',
                        }
                    },
                    ticks: {
                        font: {
                            size: 10
                        }
                    }
                },
                y: {
                    ticks: {
                        font: {
                            size: 10
                        },
                        // Include a dollar sign in the ticks
                        callback: function (value, index, ticks) {
                            return _common_util_format_util__WEBPACK_IMPORTED_MODULE_0__.FormatUtils.applyDecimalPercentageFormat(value);
                        }
                    },
                    min: 0,
                    max: 1,
                    title: {
                        display: true,
                        text: 'Ratio as percentage',
                        font: {
                            size: 10
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        font: {
                            size: 10
                        }
                    }
                },
                tooltip: {
                    enabled: true,
                    callbacks: {
                        label: function (tooltipItem) {
                            if (!tooltipItem) {
                                return "";
                            }
                            return [" " + tooltipItem.dataset.label + " bar",
                                // @ts-ignore
                                "Percentage: " + _common_util_format_util__WEBPACK_IMPORTED_MODULE_0__.FormatUtils.applyDecimalPercentageFormat(tooltipItem.raw)];
                        }
                    }
                },
            }
        };
    }
    static casePerformanceOptions(month) {
        return {
            animation: false,
            maintainAspectRatio: false,
            normalized: true,
            scales: {
                x: {
                    type: 'time',
                    time: {
                        unit: (month) ? 'month' : 'year',
                        displayFormats: {
                            year: 'yyy MMM',
                            month: 'yyy MMM',
                        }
                    },
                    ticks: {
                        font: {
                            size: 10
                        }
                    }
                },
                y: {
                    ticks: {
                        font: {
                            size: 10
                        },
                        // Include a dollar sign in the ticks
                        callback: function (value, index, ticks) {
                            return _common_util_format_util__WEBPACK_IMPORTED_MODULE_0__.FormatUtils.applyPastTimeFormatForTimestampWithDays(value);
                        }
                    },
                    title: {
                        display: true,
                        text: 'Run time',
                        font: {
                            size: 10
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        usePointStyle: true,
                        pointStyle: 'circle',
                        boxWidth: 0,
                        boxHeight: 0,
                        font: {
                            size: 10
                        }
                    }
                },
                tooltip: {
                    enabled: true,
                    callbacks: {
                        label: function (tooltipItem) {
                            if (!tooltipItem) {
                                return "";
                            }
                            return [" " + tooltipItem.dataset.label + " bar",
                                // @ts-ignore
                                "Value: " + _common_util_format_util__WEBPACK_IMPORTED_MODULE_0__.FormatUtils.applyPastTimeFormatForTimestampWithDays(tooltipItem.raw)];
                        }
                    }
                },
            }
        };
    }
    static casePerformanceDistributionOptions(month) {
        return {
            animation: false,
            maintainAspectRatio: false,
            normalized: true,
            scales: {
                x: {
                    stacked: true,
                    ticks: {
                        font: {
                            size: 10
                        }
                    }
                },
                y: {
                    stacked: true,
                    ticks: {
                        font: {
                            size: 10
                        }
                    },
                    title: {
                        display: true,
                        text: 'Number of cases per distribution percentile',
                        font: {
                            size: 10
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    display: false,
                    labels: {
                        font: {
                            size: 10
                        }
                    }
                },
                tooltip: {
                    enabled: true,
                    callbacks: {
                        label: function (tooltipItem) {
                            if (!tooltipItem) {
                                return "";
                            }
                            return [" " + tooltipItem.dataset.label + " bar",
                                // @ts-ignore
                                "Value: " + tooltipItem.raw];
                        }
                    }
                },
            }
        };
    }
}


/***/ }),

/***/ 16674:
/*!************************************************************************************!*\
  !*** ./src/app/dashboard-new/case-statistic-view/case-statistic-view.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CaseStatisticViewComponent": () => (/* binding */ CaseStatisticViewComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _common_util_format_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/util/format-util */ 17045);
/* harmony import */ var _common_util_statistic_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/util/statistic-utils */ 44796);
/* harmony import */ var _case_statistic_chart_configurations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./case-statistic-chart-configurations */ 92523);
/* harmony import */ var _common_util_color_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/util/color-util */ 19274);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button-toggle */ 19837);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/datepicker */ 42298);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 19200);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/grid-list */ 42642);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/expansion */ 17591);
/* harmony import */ var _chart_capsule_chart_capsule_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../chart-capsule/chart-capsule.component */ 3461);


















function CaseStatisticViewComponent_mat_hint_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Cases found: ", ctx_r0.casesInRange, "");
} }
function CaseStatisticViewComponent_mat_hint_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-hint", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Cases found: ", ctx_r1.casesInRange, "");
} }
function CaseStatisticViewComponent_mat_error_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Invalid start date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function CaseStatisticViewComponent_mat_error_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Invalid end date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function CaseStatisticViewComponent_mat_expansion_panel_68_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const resource_r9 = ctx.$implicit;
    const j_r10 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](j_r10 > 0 ? ", " + resource_r9.firstname + " " + resource_r9.lastname : resource_r9.firstname + " " + resource_r9.lastname);
} }
function CaseStatisticViewComponent_mat_expansion_panel_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-expansion-panel")(1, "mat-expansion-panel-header")(2, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, CaseStatisticViewComponent_mat_expansion_panel_68_span_4_Template, 2, 1, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const keyValue_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", keyValue_r6.key, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", keyValue_r6.value);
} }
/**
 * @author Robin Steinwarz
 */
class CaseStatisticViewComponent {
    constructor() {
        this.range = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
            start: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(new Date(Date.UTC(new Date(Date.now()).getFullYear() - 2, 0))),
            end: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(new Date(Date.now())),
        });
        this.formatUtils = new _common_util_format_util__WEBPACK_IMPORTED_MODULE_0__.FormatUtils();
        // Config
        this.statisticSelection = "general";
        this.fineness = 'month';
        this.loaded = false;
        this.statisticTicks = [];
        this.specificationTimeLimit = 0;
        this.casesInRange = 0;
        // Common
        this.weekDayOccurrencesOptions = _case_statistic_chart_configurations__WEBPACK_IMPORTED_MODULE_2__.CaseStatisticChartConfigurations.weekDayOccurrencesOptions(this.fineness === 'month');
        this.weekDayOccurrencesData = { labels: [], datasets: [] };
        this.costsOptions = _case_statistic_chart_configurations__WEBPACK_IMPORTED_MODULE_2__.CaseStatisticChartConfigurations.costsOptions(this.fineness === 'month');
        this.costsData = { labels: [], datasets: [] };
        this.resourceUtilizationOptions = _case_statistic_chart_configurations__WEBPACK_IMPORTED_MODULE_2__.CaseStatisticChartConfigurations.resourceUtilizationOptions(this.fineness === 'month');
        this.resourceUtilizationData = { labels: [], datasets: [] };
        this.assocResources = new Map();
        // Performance
        this.overallIndicatorOptions = _case_statistic_chart_configurations__WEBPACK_IMPORTED_MODULE_2__.CaseStatisticChartConfigurations.caseIndicatorOptions(this.fineness === 'month');
        this.overallIndicatorData = { labels: [], datasets: [] };
        this.casePerformanceOptions = _case_statistic_chart_configurations__WEBPACK_IMPORTED_MODULE_2__.CaseStatisticChartConfigurations.casePerformanceOptions(this.fineness === 'month');
        this.casePerformanceData = { labels: [], datasets: [] };
        this.casePerformanceDistributionOptions = _case_statistic_chart_configurations__WEBPACK_IMPORTED_MODULE_2__.CaseStatisticChartConfigurations.casePerformanceDistributionOptions(this.fineness === 'month');
        this.casePerformanceDistributionData = { labels: [], datasets: [] };
        // Performance
        this.casePerformance = [];
        this.casePerformanceDistribution = [];
        this.casePerformanceDistributionMin = "";
        this.casePerformanceDistributionMax = "";
    }
    ngAfterViewInit() {
    }
    ngOnInit() {
        this.specificationTimeLimit = this.specificationDataContainer?.extensionSpecification.specificationTimeLimit;
        this.statisticTicks = _common_util_statistic_utils__WEBPACK_IMPORTED_MODULE_1__.StatisticUtils.calculateStatisticTicks(this.range, this.fineness);
        this.weekDayOccurrences();
        this.processRessourceUtilization();
        this.processCosts();
        this.processAssocResources();
        this.processIndicatorRate();
        this.processPerformance();
        this.processPerformanceDistribution();
        this.processCasesInRange();
        this.loaded = true;
    }
    updateData() {
        if (this.range.value.start === null || this.range.value.end === null) {
            return;
        }
        this.statisticTicks = _common_util_statistic_utils__WEBPACK_IMPORTED_MODULE_1__.StatisticUtils.calculateStatisticTicks(this.range, this.fineness);
        this.weekDayOccurrences();
        this.processRessourceUtilization();
        this.processCosts();
        this.processAssocResources();
        this.processIndicatorRate();
        this.processPerformance();
        this.processPerformanceDistribution();
        this.processCasesInRange();
    }
    selectStatistic(val) {
        this.statisticSelection = val;
        // Update statistic graphics after they become unhidden
        // Prevents misaligned ngx charts
        window.dispatchEvent(new Event('resize'));
    }
    processCasesInRange() {
        this.casesInRange = 0;
        this.specificationDataContainer?.specificationStatistic.caseStatisticDTOS.forEach(caseStatistic => {
            if (_common_util_statistic_utils__WEBPACK_IMPORTED_MODULE_1__.StatisticUtils.timestampIsInDateRange(caseStatistic.start, this.range)) {
                this.casesInRange++;
            }
        });
    }
    weekDayOccurrences() {
        let dataMap = new Map();
        this.statisticTicks.forEach(tick => {
            let baseMap = new Map();
            _common_util_statistic_utils__WEBPACK_IMPORTED_MODULE_1__.StatisticUtils.weekdays.forEach(name => {
                baseMap.set(name, 0);
            });
            dataMap.set(((this.fineness === 'month') ? tick.month : tick.year), baseMap);
        });
        this.specificationDataContainer.specificationStatistic.caseStatisticDTOS.forEach(caseStatistic => {
            if (_common_util_statistic_utils__WEBPACK_IMPORTED_MODULE_1__.StatisticUtils.timestampIsInDateRange(caseStatistic.start, this.range)) {
                let startDate = new Date(caseStatistic.start);
                let yearMonthID = (this.fineness === 'month') ? new Date(startDate.getFullYear(), startDate.getMonth()).getTime() : new Date(startDate.getFullYear(), 0).getTime();
                let figures = dataMap.get(yearMonthID);
                figures.set(_common_util_statistic_utils__WEBPACK_IMPORTED_MODULE_1__.StatisticUtils.weekdays[startDate.getDay()], figures.get(_common_util_statistic_utils__WEBPACK_IMPORTED_MODULE_1__.StatisticUtils.weekdays[startDate.getDay()]) + 1);
            }
        });
        let labels = [];
        let mo = [];
        let tu = [];
        let we = [];
        let th = [];
        let fr = [];
        let sa = [];
        let su = [];
        dataMap.forEach((weekdays, tick) => {
            labels.push(tick);
            su.push(weekdays.get(_common_util_statistic_utils__WEBPACK_IMPORTED_MODULE_1__.StatisticUtils.weekdays[0]));
            mo.push(weekdays.get(_common_util_statistic_utils__WEBPACK_IMPORTED_MODULE_1__.StatisticUtils.weekdays[1]));
            tu.push(weekdays.get(_common_util_statistic_utils__WEBPACK_IMPORTED_MODULE_1__.StatisticUtils.weekdays[2]));
            we.push(weekdays.get(_common_util_statistic_utils__WEBPACK_IMPORTED_MODULE_1__.StatisticUtils.weekdays[3]));
            th.push(weekdays.get(_common_util_statistic_utils__WEBPACK_IMPORTED_MODULE_1__.StatisticUtils.weekdays[4]));
            fr.push(weekdays.get(_common_util_statistic_utils__WEBPACK_IMPORTED_MODULE_1__.StatisticUtils.weekdays[5]));
            sa.push(weekdays.get(_common_util_statistic_utils__WEBPACK_IMPORTED_MODULE_1__.StatisticUtils.weekdays[6]));
        });
        this.weekDayOccurrencesData.labels = labels;
        this.weekDayOccurrencesData.datasets = [];
        this.weekDayOccurrencesData.datasets.push({
            label: "Sunday",
            backgroundColor: _common_util_color_util__WEBPACK_IMPORTED_MODULE_3__.ColorUtils.getWeekdayColor(0),
            data: su
        });
        this.weekDayOccurrencesData.datasets.push({
            label: "Monday",
            backgroundColor: _common_util_color_util__WEBPACK_IMPORTED_MODULE_3__.ColorUtils.getWeekdayColor(1),
            data: mo
        });
        this.weekDayOccurrencesData.datasets.push({
            label: "Tuesday",
            backgroundColor: _common_util_color_util__WEBPACK_IMPORTED_MODULE_3__.ColorUtils.getWeekdayColor(2),
            data: tu
        });
        this.weekDayOccurrencesData.datasets.push({
            label: "Wednesday",
            backgroundColor: _common_util_color_util__WEBPACK_IMPORTED_MODULE_3__.ColorUtils.getWeekdayColor(3),
            data: we
        });
        this.weekDayOccurrencesData.datasets.push({
            label: "Thursday",
            backgroundColor: _common_util_color_util__WEBPACK_IMPORTED_MODULE_3__.ColorUtils.getWeekdayColor(4),
            data: th
        });
        this.weekDayOccurrencesData.datasets.push({
            label: "Friday",
            backgroundColor: _common_util_color_util__WEBPACK_IMPORTED_MODULE_3__.ColorUtils.getWeekdayColor(5),
            data: fr
        });
        this.weekDayOccurrencesData.datasets.push({
            label: "Saturday",
            backgroundColor: _common_util_color_util__WEBPACK_IMPORTED_MODULE_3__.ColorUtils.getWeekdayColor(6),
            data: sa
        });
    }
    processRessourceUtilization() {
        // Jahr, Monat, Tag, Stunde
        let workitemsSorted = [];
        this.specificationDataContainer.specificationStatistic.caseStatisticDTOS.forEach(caseStatistic => {
            if (_common_util_statistic_utils__WEBPACK_IMPORTED_MODULE_1__.StatisticUtils.timestampIsInDateRange(caseStatistic.start, this.range)) {
                caseStatistic.workitemDTOS.forEach(workitem => {
                    let resource;
                    Object.entries(workitem.resources).forEach((keyValue) => {
                        let events = new Set(keyValue[1]);
                        if (events.has('Start') && events.has('Complete')) {
                            resource = keyValue[0];
                        }
                    });
                    if (!workitem.automated && resource !== undefined && workitem.startTimestamp !== 0 && workitem.endTimestamp !== 0) {
                        workitemsSorted.push({
                            timestamp: workitem.startTimestamp,
                            taskid: workitem.taskid,
                            change: 1,
                            resourceKey: resource
                        });
                        workitemsSorted.push({
                            timestamp: workitem.endTimestamp,
                            taskid: workitem.taskid,
                            change: -1,
                            resourceKey: resource
                        });
                    }
                });
            }
        });
        workitemsSorted.sort((a, b) => (a.timestamp < b.timestamp) ? -1 : 1);
        this.resourceUtilizationData.labels = [];
        let yDataArray = [];
        let start = this.range.value.start?.getTime();
        let end = this.range.value.end?.getTime();
        let tick = 1000 * 60 * 60; // hours
        if (start !== 0 && start !== undefined && end !== 0 && end !== undefined) {
            // Zeiträum größer als 4 Jahre unzulässig
            if (end - start > (1000 * 60 * 60 * 24 * 29 * 12 * 4)) {
                end = Date.now();
                start = end - (1000 * 60 * 60 * 24 * 29 * 12 * 4);
            }
            let taskTimestampIndex = 0;
            let status = new Map();
            for (let timeIndex = start; timeIndex < end; timeIndex += tick) {
                let minus = new Map();
                while (taskTimestampIndex < workitemsSorted.length
                    && workitemsSorted[taskTimestampIndex].timestamp < timeIndex) {
                    if (workitemsSorted[taskTimestampIndex].change === -1) {
                        _common_util_statistic_utils__WEBPACK_IMPORTED_MODULE_1__.StatisticUtils.changeMap(minus, workitemsSorted[taskTimestampIndex].resourceKey, workitemsSorted[taskTimestampIndex].change);
                    }
                    else {
                        _common_util_statistic_utils__WEBPACK_IMPORTED_MODULE_1__.StatisticUtils.changeMap(status, workitemsSorted[taskTimestampIndex].resourceKey, workitemsSorted[taskTimestampIndex].change);
                    }
                    taskTimestampIndex++;
                }
                this.resourceUtilizationData.labels.push(timeIndex);
                let count = 0;
                status.forEach(stat => {
                    if (stat > 0) {
                        count++;
                    }
                });
                yDataArray.push(count);
                minus.forEach((change, id) => {
                    _common_util_statistic_utils__WEBPACK_IMPORTED_MODULE_1__.StatisticUtils.changeMap(status, id, change);
                });
            }
        }
        this.resourceUtilizationData.datasets = [];
        this.resourceUtilizationData.datasets.push({
            data: yDataArray
        });
    }
    processCosts() {
        let allStarts = new Map();
        let taskMap = new Map();
        this.specificationDataContainer.specificationStatistic.taskStatisticDTOS.forEach(taskStatistic => {
            taskMap.set(taskStatistic.taskid, taskStatistic);
        });
        this.statisticTicks.forEach((tick) => {
            let baseTaskMap = new Map();
            this.specificationDataContainer.specificationStatistic.taskStatisticDTOS.forEach(taskStatistic => {
                baseTaskMap.set(taskStatistic.taskid, 0);
            });
            allStarts.set(((this.fineness === 'month') ? tick.month : tick.year), baseTaskMap);
        });
        this.specificationDataContainer.specificationStatistic.caseStatisticDTOS.forEach(caseStatistic => {
            if (_common_util_statistic_utils__WEBPACK_IMPORTED_MODULE_1__.StatisticUtils.timestampIsInDateRange(caseStatistic.start, this.range)) {
                let startDate = new Date(caseStatistic.start);
                let yearMonthID = (this.fineness === 'month') ? new Date(startDate.getFullYear(), startDate.getMonth()).getTime() : new Date(startDate.getFullYear(), 0)
                    .getTime();
                let monthInstance = allStarts.get(yearMonthID);
                caseStatistic.workitemDTOS.forEach(workitem => {
                    if (!workitem.automated && !workitem.cancelled && workitem.endTimestamp !== 0) {
                        monthInstance.set(workitem.taskid, monthInstance.get(workitem.taskid) + ((workitem.resourceTime) / (1000 * 60 * 60)) * taskMap.get(workitem.taskid).costResourceHour);
                    }
                });
            }
        });
        this.costsData.labels = [];
        this.costsData.datasets = [];
        let finalMap = new Map();
        this.specificationDataContainer.specificationStatistic.taskStatisticDTOS.forEach(taskStatistic => {
            finalMap.set(taskStatistic.taskid, { name: taskStatistic.name, color: taskStatistic.color, data: [] });
        });
        allStarts.forEach((taskMap, key) => {
            this.costsData.labels.push(key);
            taskMap.forEach((costs, taskid) => {
                finalMap.get(taskid).data.push(costs);
            });
        });
        finalMap.forEach((task, taskid) => {
            this.costsData.datasets.push({
                data: task.data,
                backgroundColor: task.color,
                label: task.name
            });
        });
    }
    processIndicatorRate() {
        let successMap = new Map();
        this.specificationDataContainer.specificationStatistic.caseStatisticDTOS.forEach(caseStatistic => {
            if (_common_util_statistic_utils__WEBPACK_IMPORTED_MODULE_1__.StatisticUtils.timestampIsInDateRange(caseStatistic.start, this.range)
                && caseStatistic.end !== 0) {
                let startDate = new Date(caseStatistic.start);
                let tick = (this.fineness === 'month') ? new Date(startDate.getFullYear(), startDate.getMonth())
                    .getTime() : new Date(startDate.getFullYear(), 0).getTime();
                if (!successMap.has(tick)) {
                    successMap.set(tick, { success: [], sla: [] });
                }
                let successArray = successMap.get(tick);
                if (this.specificationDataContainer.extensionSpecification.specificationTimeLimit === 0) {
                    successArray.sla.push(1);
                }
                else {
                    if (Number(this.specificationDataContainer.extensionSpecification.specificationTimeLimit) < caseStatistic.leadTime) {
                        successArray.sla.push(0);
                    }
                    else {
                        successArray.sla.push(1);
                    }
                }
                if (caseStatistic.cancelled) {
                    successArray.success.push(0);
                }
                else {
                    successArray.success.push(1);
                }
            }
        });
        let labels = [];
        let successDataSet = [];
        let slaDataSet = [];
        successMap.forEach((value, tick) => {
            labels.push(tick);
            let successfulCases = value.success.filter(value => value === 1).length;
            let successRatio = successfulCases / value.success.length || 0;
            successDataSet.push(successRatio);
            let slaMetCases = value.sla.filter(value => value === 1).length;
            let slaMetRatio = slaMetCases / value.sla.length || 0;
            slaDataSet.push(slaMetRatio);
        });
        this.overallIndicatorData.labels = labels;
        this.overallIndicatorData.datasets = [];
        this.overallIndicatorData.datasets.push({
            label: "Success ratio",
            data: successDataSet,
            backgroundColor: _common_util_color_util__WEBPACK_IMPORTED_MODULE_3__.ColorUtils.getMuchLighterColor(_common_util_color_util__WEBPACK_IMPORTED_MODULE_3__.ColorUtils.getPrimaryColor())
        });
        this.overallIndicatorData.datasets.push({
            label: "Deadline fulfilled ratio",
            data: slaDataSet,
            backgroundColor: _common_util_color_util__WEBPACK_IMPORTED_MODULE_3__.ColorUtils.getMuchLighterColor(_common_util_color_util__WEBPACK_IMPORTED_MODULE_3__.ColorUtils.getSecondaryColor())
        });
    }
    processPerformance() {
        this.casePerformance = [];
        let map = new Map;
        this.statisticTicks.forEach(tick => {
            map.set(((this.fineness === 'month') ? tick.month : tick.year), {
                min: Number.MAX_VALUE, minColor: "",
                max: 0, maxColor: "", ages: []
            });
        });
        this.specificationDataContainer?.specificationStatistic.caseStatisticDTOS.forEach(caseStatistic => {
            if (_common_util_statistic_utils__WEBPACK_IMPORTED_MODULE_1__.StatisticUtils.notCancelledAndCompleted(caseStatistic) &&
                _common_util_statistic_utils__WEBPACK_IMPORTED_MODULE_1__.StatisticUtils.timestampIsInDateRange(caseStatistic.start, this.range)) {
                let startDate = new Date(caseStatistic.start);
                let label = (this.fineness === 'month') ? new Date(startDate.getFullYear(), startDate.getMonth())
                    .getTime() : new Date(startDate.getFullYear(), 0).getTime();
                let instance = map.get(label);
                instance.ages.push(caseStatistic.leadTime);
                if (instance.min > caseStatistic.leadTime) {
                    instance.min = caseStatistic.leadTime;
                    instance.minColor = caseStatistic.color;
                }
                if (instance.max < caseStatistic.leadTime) {
                    instance.max = caseStatistic.leadTime;
                    instance.maxColor = caseStatistic.color;
                }
            }
        });
        let labels = [];
        let min = [];
        let colorsMin = [];
        let max = [];
        let colorsMax = [];
        let avgArray = [];
        map.forEach((instance, label) => {
            const sum = instance.ages.reduce((a, b) => a + b, 0);
            const avg = (sum / instance.ages.length) || 0;
            labels.push(label);
            min.push((avg === 0) ? 0 : instance.min);
            colorsMin.push(instance.minColor);
            max.push(instance.max);
            colorsMax.push(instance.maxColor);
            avgArray.push(avg);
        });
        this.casePerformanceData.labels = labels;
        this.casePerformanceData.datasets = [{
                data: min,
                label: 'Minimal duration',
                backgroundColor: _common_util_color_util__WEBPACK_IMPORTED_MODULE_3__.ColorUtils.getMuchLighterColor(_common_util_color_util__WEBPACK_IMPORTED_MODULE_3__.ColorUtils.getPrimaryColor())
            }, {
                data: avgArray,
                label: 'Average duration',
                backgroundColor: _common_util_color_util__WEBPACK_IMPORTED_MODULE_3__.ColorUtils.getMuchLighterColor(_common_util_color_util__WEBPACK_IMPORTED_MODULE_3__.ColorUtils.getSecondaryColor())
            }, {
                data: max,
                label: 'Maximal duration',
                backgroundColor: _common_util_color_util__WEBPACK_IMPORTED_MODULE_3__.ColorUtils.getMuchLighterColor(_common_util_color_util__WEBPACK_IMPORTED_MODULE_3__.ColorUtils.getPrimaryColor())
            }
        ];
    }
    processPerformanceDistribution() {
        this.casePerformanceDistribution = [];
        let casePerformanceSorted = [];
        this.specificationDataContainer?.specificationStatistic.caseStatisticDTOS.forEach(caseStatistic => {
            if (_common_util_statistic_utils__WEBPACK_IMPORTED_MODULE_1__.StatisticUtils.notCancelledAndCompleted(caseStatistic) &&
                _common_util_statistic_utils__WEBPACK_IMPORTED_MODULE_1__.StatisticUtils.timestampIsInDateRange(caseStatistic.start, this.range)) {
                casePerformanceSorted.push({ name: caseStatistic.caseid, age: caseStatistic.leadTime });
            }
        });
        casePerformanceSorted = casePerformanceSorted.sort((a, b) => (a.age > b.age) ? 1 : -1);
        if (casePerformanceSorted.length !== 0) {
            let min = casePerformanceSorted[0].age;
            let max = casePerformanceSorted[casePerformanceSorted.length - 1].age;
            this.casePerformanceDistributionMin = "(" + this.formatUtils.applyPastTimeFormatForTimestampWithDays(min) + ")";
            this.casePerformanceDistributionMax = "(" + this.formatUtils.applyPastTimeFormatForTimestampWithDays(max) + ")";
            let diff = max - min;
            let performanceDistributionMap = new Map([[0, { duration: min, performance: [] }], [10, {
                        duration: min + .1 * diff,
                        performance: []
                    }], [20, { duration: min + .2 * diff, performance: [] }],
                [30, { duration: min + .3 * diff, performance: [] }], [40, {
                        duration: min + .4 * diff,
                        performance: []
                    }], [50, { duration: min + .5 * diff, performance: [] }],
                [60, { duration: min + .6 * diff, performance: [] }], [70, {
                        duration: min + .7 * diff,
                        performance: []
                    }], [80, { duration: min + .8 * diff, performance: [] }],
                [90, { duration: min + .9 * diff, performance: [] }], [100, { duration: max, performance: [] }]]);
            casePerformanceSorted.forEach(caseElement => {
                let fraction = (Math.round((Math.abs((1 - (max - caseElement.age) / diff))) * 10) * 10);
                if (diff === 0) {
                    fraction = 100;
                }
                let figure = performanceDistributionMap.get(fraction);
                figure.performance.push({ name: caseElement.name, value: 1 });
            });
            this.casePerformanceDistributionData.labels = [];
            this.casePerformanceDistributionData.datasets = [];
            let data = [];
            performanceDistributionMap.forEach((performance, label) => {
                this.casePerformanceDistributionData.labels?.push(label + "% (" + _common_util_format_util__WEBPACK_IMPORTED_MODULE_0__.FormatUtils.applyPastTimeFormatForTimestampWithDays(performance.duration) + ")");
                data.push(performance.performance.length);
            });
            this.casePerformanceDistributionData.datasets.push({
                label: "Case size",
                data: data,
                backgroundColor: _common_util_color_util__WEBPACK_IMPORTED_MODULE_3__.ColorUtils.getMuchLighterColor(_common_util_color_util__WEBPACK_IMPORTED_MODULE_3__.ColorUtils.getSecondaryColor())
            });
        }
    }
    processAssocResources() {
        this.assocResources = new Map();
        this.specificationDataContainer?.specificationStatistic.roleAssocResources.forEach(entry => {
            this.assocResources.set(entry.association, entry.resources);
        });
    }
}
CaseStatisticViewComponent.ɵfac = function CaseStatisticViewComponent_Factory(t) { return new (t || CaseStatisticViewComponent)(); };
CaseStatisticViewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: CaseStatisticViewComponent, selectors: [["app-case-statistic-view"]], inputs: { specificationDataContainer: "specificationDataContainer" }, decls: 102, vars: 56, consts: [["appearance", "legacy", 3, "valueChange"], ["value", "performance", 3, "checked"], ["value", "general"], ["appearance", "legacy"], [3, "formGroup", "rangePicker"], ["matStartDate", "", "formControlName", "start", "placeholder", "Start date", 3, "dateChange"], ["matEndDate", "", "formControlName", "end", "placeholder", "End date", 3, "dateChange"], [4, "ngIf"], ["style", "color: darkred", 4, "ngIf"], ["matSuffix", "", 3, "for"], ["picker", ""], [3, "value", "valueChange"], [3, "value"], [3, "hidden"], ["cols", "5", "rowHeight", "2:1", 3, "gutterSize"], ["rowspan", "2"], [1, "statistic-container"], [1, "statistic-title"], [1, "statistic-title-text"], [1, "statistic-title-info"], ["icon", "circle-info", 3, "fixedWidth", "matTooltip"], [1, "statistic-body", "ngx-charts-small-text"], [1, "statistic-graph"], [1, "chart-capsule", 3, "type", "datasets", "labels", "options"], ["rowspan", "2", "colspan", "2"], ["icon", "circle-info", "matTooltip", "This chart shows sums of resources for each day of the specified time window.\n                     Resources take part in the sum of a specific day\n                     if they have processed at least one work item on that day.\n                     Please note that the maximum time span for this chart is 4 years.", 3, "fixedWidth"], [1, "statistic-container", "scrollbar"], ["icon", "circle-info", "matTooltip", "These lists of roles show all resources with this corresponding role, that processed\n                                 work items of this process. This is the case, when a resource started a work item\n                                 of this process.", 3, "fixedWidth"], [1, "ngx-charts-small-text"], [1, "statistic-text-lists"], [4, "ngFor", "ngForOf"], ["icon", "circle-info", "matTooltip", "This chart shows the minimum, maximum and average runtime for all cases of this specification.\n                      Cancelled and uncompleted cases excluded.", 3, "fixedWidth"], [2, "color", "darkred"], ["class", "statistic-small-list-text", 4, "ngFor", "ngForOf"], [1, "statistic-small-list-text"]], template: function CaseStatisticViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p")(1, "mat-button-toggle-group", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("valueChange", function CaseStatisticViewComponent_Template_mat_button_toggle_group_valueChange_1_listener($event) { return ctx.selectStatistic($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-button-toggle", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Performance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "mat-button-toggle", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "General");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "mat-form-field", 3)(7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Select statistic range");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "mat-date-range-input", 4)(10, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("dateChange", function CaseStatisticViewComponent_Template_input_dateChange_10_listener() { return ctx.updateData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("dateChange", function CaseStatisticViewComponent_Template_input_dateChange_11_listener() { return ctx.updateData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, CaseStatisticViewComponent_mat_hint_12_Template, 2, 1, "mat-hint", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, CaseStatisticViewComponent_mat_hint_13_Template, 2, 1, "mat-hint", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "mat-datepicker-toggle", 9)(15, "mat-date-range-picker", null, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, CaseStatisticViewComponent_mat_error_17_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, CaseStatisticViewComponent_mat_error_18_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "mat-form-field", 3)(20, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "Statistic fineness");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "mat-select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("valueChange", function CaseStatisticViewComponent_Template_mat_select_valueChange_22_listener($event) { return ctx.fineness = $event; })("valueChange", function CaseStatisticViewComponent_Template_mat_select_valueChange_22_listener() { return ctx.updateData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 13)(28, "mat-grid-list", 14)(29, "mat-grid-tile", 15)(30, "div", 16)(31, "div", 17)(32, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "How are our case starts distributed over weekdays?");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](35, "fa-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "div", 21)(37, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](38, "app-chart-capsule", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "mat-grid-tile", 15)(40, "div", 16)(41, "div", 17)(42, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](43, "What are the costs of this process?");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](45, "fa-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "div", 21)(47, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](48, "app-chart-capsule", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "mat-grid-tile", 24)(50, "div", 16)(51, "div", 17)(52, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](53, "When do our resources work on this process?");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](55, "fa-icon", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "div", 21)(57, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](58, "app-chart-capsule", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "mat-grid-tile", 15)(60, "div", 26)(61, "div", 17)(62, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](63, "Who is collaborating in this process?");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](65, "fa-icon", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "div", 28)(67, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](68, CaseStatisticViewComponent_mat_expansion_panel_68_Template, 5, 2, "mat-expansion-panel", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](69, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](70, "div", 13)(71, "mat-grid-list", 14)(72, "mat-grid-tile", 24)(73, "div", 16)(74, "div", 17)(75, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](76, "How do our cases perform overall?");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](78, "fa-icon", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](79, "div", 21)(80, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](81, "app-chart-capsule", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](82, "mat-grid-tile", 15)(83, "div", 16)(84, "div", 17)(85, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](86, "What is the usual runtime for our cases?");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](87, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](88, "fa-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](89, "div", 21)(90, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](91, "app-chart-capsule", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](92, "mat-grid-tile", 24)(93, "div", 16)(94, "div", 17)(95, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](96, "How successful are our cases?");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](97, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](98, "fa-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](99, "div", 21)(100, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](101, "app-chart-capsule", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.range)("rangePicker", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.casesInRange !== 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.casesInRange === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("for", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.range.controls.start.hasError("matStartDateInvalid"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.range.controls.end.hasError("matEndDateInvalid"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx.fineness);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", "month");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]("month");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", "year");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]("year");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", ctx.statisticSelection !== "general");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("gutterSize", "8px");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("matTooltip", "This chart shows the sum of cases for this process\n                     that were started in the corresponding ", ctx.fineness === "month" ? "monthly" : "annual", " period.\n                     In addition, the sum of case starts is distributed among the days of the week. Thus, it is possible\n                     to determine when this case is usually started in the week.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("fixedWidth", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("type", "bar")("datasets", ctx.weekDayOccurrencesData.datasets)("labels", ctx.weekDayOccurrencesData.labels)("options", ctx.weekDayOccurrencesOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("matTooltip", "This chart shows the actual sum of costs for cases\n                     started in the corresponding ", ctx.fineness === "month" ? "monthly" : "annual", " period.\n                     Also, all costs for each period are divided and summarized into costs for individual task types.\n                     Thus, on the one hand, it is possible to determine the costs for each period and,\n                     on the other hand, it is easy to see which task type was for example particularly expensive.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("fixedWidth", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("type", "bar")("datasets", ctx.costsData.datasets)("labels", ctx.costsData.labels)("options", ctx.costsOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("fixedWidth", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("type", "line")("datasets", ctx.resourceUtilizationData.datasets)("labels", ctx.resourceUtilizationData.labels)("options", ctx.resourceUtilizationOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("fixedWidth", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](69, 54, ctx.assocResources));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", ctx.statisticSelection !== "performance");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("gutterSize", "8px");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("fixedWidth", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("type", "bar")("datasets", ctx.casePerformanceData.datasets)("labels", ctx.casePerformanceData.labels)("options", ctx.casePerformanceOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate2"]("matTooltip", "This chart shows the performance distribution for all cases of this specification.\n                     All cases are associated with a percentage from 0 to 100% in 10% steps, where 0\n                     ", ctx.casePerformanceDistributionMin, " represents the case with the shortest runtime\n                     and 100% ", ctx.casePerformanceDistributionMax, " the case with the longest runtime. All other cases are\n                     sorted into the sections in between.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("fixedWidth", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("type", "bar")("datasets", ctx.casePerformanceDistributionData.datasets)("labels", ctx.casePerformanceDistributionData.labels)("options", ctx.casePerformanceDistributionOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("matTooltip", "This chart shows the overall success and deadline fulfilled ratio for cases\n                     that were started in the corresponding ", ctx.fineness === "month" ? "monthly" : "annual", " period.\n                     A successful case has not been cancelled. A case has met its deadline if its runtime is shorter\n                     than the specification time limit of its process. Uncompleted cases excluded.");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("fixedWidth", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("type", "bar")("datasets", ctx.overallIndicatorData.datasets)("labels", ctx.overallIndicatorData.labels)("options", ctx.overallIndicatorOptions);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__.MatButtonToggleGroup, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__.MatButtonToggle, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__.MatDatepickerToggle, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__.MatDateRangeInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__.MatStartDate, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__.MatEndDate, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__.MatDateRangePicker, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatHint, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatSuffix, _angular_material_select__WEBPACK_IMPORTED_MODULE_11__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatOption, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__.MatTooltip, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__.FaIconComponent, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__.MatGridList, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__.MatGridTile, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__.MatExpansionPanel, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__.MatExpansionPanelHeader, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__.MatExpansionPanelTitle, _chart_capsule_chart_capsule_component__WEBPACK_IMPORTED_MODULE_4__.ChartCapsuleComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.KeyValuePipe], styles: [".mat-grid-tile[_ngcontent-%COMP%] {\r\n  border-radius: 2px;\r\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 3px;\r\n}\r\n.scrollbar[_ngcontent-%COMP%] {\r\n  overflow-y: auto;\r\n  overflow-x: hidden;\r\n}\r\n.statistic-container[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%] {\r\n  width: 90%;\r\n  margin: 0 0 0 5px;\r\n}\r\n.mat-form-field[_ngcontent-%COMP%] {\r\n  margin-left: 2em;\r\n}\r\n.scrollbar[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 4px;\r\n}\r\n.scrollbar[_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n  border-radius: 4px;\r\n  border: 1px solid #efeeee;\r\n}\r\n.scrollbar[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  border-radius: 8px;\r\n  border: 3px solid transparent;\r\n  background-clip: content-box;\r\n  background: #c0cad5;\r\n}\r\n.mat-expansion-panel[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\r\n  box-shadow: none;\r\n}\r\n.mat-expansion-panel-header[_ngcontent-%COMP%] {\r\n  height: 2em;\r\n  border-bottom: 1px solid lightgrey;\r\n}\r\n.statistic-small-list-text[_ngcontent-%COMP%] {\r\n  font-size: 9px;\r\n  color: #413a3a;\r\n}\r\n.mat-expansion-panel-header-title[_ngcontent-%COMP%] {\r\n  font-size: 9px;\r\n  color: #919191;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhc2Utc3RhdGlzdGljLXZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw0QkFBNEI7QUFDNUI7RUFDRSxrQkFBa0I7RUFDbEIsMkNBQTJDO0FBQzdDO0FBR0E7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLFVBQVU7QUFDWjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLDZCQUE2QjtFQUM3Qiw0QkFBNEI7RUFDNUIsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQ0FBa0M7QUFDcEM7QUFFQTtFQUNFLGNBQWM7RUFDZCxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxjQUFjO0VBQ2QsY0FBYztBQUNoQiIsImZpbGUiOiJjYXNlLXN0YXRpc3RpYy12aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBAYXV0aG9yIFJvYmluIFN0ZWlud2FyeiAqL1xyXG4ubWF0LWdyaWQtdGlsZSB7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNikgMHB4IDFweCAzcHg7XHJcbn1cclxuXHJcblxyXG4uc2Nyb2xsYmFyIHtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxufVxyXG5cclxuLnN0YXRpc3RpYy1jb250YWluZXIgLm1hdC1mb3JtLWZpZWxkIHtcclxuICB3aWR0aDogOTAlO1xyXG4gIG1hcmdpbjogMCAwIDAgNXB4O1xyXG59XHJcblxyXG4ubWF0LWZvcm0tZmllbGQge1xyXG4gIG1hcmdpbi1sZWZ0OiAyZW07XHJcbn1cclxuXHJcbi5zY3JvbGxiYXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICB3aWR0aDogNHB4O1xyXG59XHJcblxyXG4uc2Nyb2xsYmFyOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZmVlZWU7XHJcbn1cclxuXHJcbi5zY3JvbGxiYXI6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYmFja2dyb3VuZC1jbGlwOiBjb250ZW50LWJveDtcclxuICBiYWNrZ3JvdW5kOiAjYzBjYWQ1O1xyXG59XHJcblxyXG4ubWF0LWV4cGFuc2lvbi1wYW5lbDpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKSB7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcclxuICBoZWlnaHQ6IDJlbTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmV5O1xyXG59XHJcblxyXG4uc3RhdGlzdGljLXNtYWxsLWxpc3QtdGV4dCB7XHJcbiAgZm9udC1zaXplOiA5cHg7XHJcbiAgY29sb3I6ICM0MTNhM2E7XHJcbn1cclxuXHJcbi5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci10aXRsZSB7XHJcbiAgZm9udC1zaXplOiA5cHg7XHJcbiAgY29sb3I6ICM5MTkxOTE7XHJcbn1cclxuXHJcbiJdfQ== */"] });


/***/ }),

/***/ 87393:
/*!****************************************************************!*\
  !*** ./src/app/dashboard-new/case-view/case-view.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CaseViewComponent": () => (/* binding */ CaseViewComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/sort */ 92197);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var _workitem_queue_dialog_workitem_queue_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../workitem-queue-dialog/workitem-queue-dialog.component */ 61836);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _workitems_dialog_workitems_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../workitems-dialog/workitems-dialog.component */ 30684);
/* harmony import */ var _common_util_format_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/util/format-util */ 17045);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ 92340);
/* harmony import */ var _common_config_features_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/config/features-config */ 30233);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _yawl_resources_services_specification_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../yawl/resources/services/specification-data.service */ 81966);
/* harmony import */ var _yawl_resources_services_extension_specification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../yawl/resources/services/extension-specification.service */ 56469);
/* harmony import */ var _yawl_resources_services_specification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../yawl/resources/services/specification.service */ 94237);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angular-notifier */ 24110);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _common_layout_default_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/layout/default-page.component */ 47512);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/radio */ 52922);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/toolbar */ 52543);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 19200);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _task_view_task_view_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../task-view/task-view.component */ 67101);
/* harmony import */ var _timestampform_timestampform_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../timestampform/timestampform.component */ 30472);
/* harmony import */ var _case_statistic_view_case_statistic_view_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../case-statistic-view/case-statistic-view.component */ 16674);





























function CaseViewComponent_div_17_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Color ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function CaseViewComponent_div_17_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "fa-icon", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("color", element_r25.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("fixedWidth", true);
} }
function CaseViewComponent_div_17_th_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "th", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Case ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function CaseViewComponent_div_17_td_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", element_r26.caseid, " ");
} }
function CaseViewComponent_div_17_th_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Initiated ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function CaseViewComponent_div_17_td_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r27 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r7.formatUtils.applyDatetimeFormat(element_r27.start));
} }
function CaseViewComponent_div_17_th_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "th", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Completed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function CaseViewComponent_div_17_td_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r28 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r9.formatUtils.applyDatetimeFormat(element_r28.end));
} }
function CaseViewComponent_div_17_th_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "th", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Lead Time ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function CaseViewComponent_div_17_td_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r29 = ctx.$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r11.formatUtils.applyPastTimeFormatForTimestampWithDays(element_r29.leadTime));
} }
function CaseViewComponent_div_17_th_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "th", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Running Workitems ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function CaseViewComponent_div_17_td_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](element_r30.runningWorkitemsCount);
} }
function CaseViewComponent_div_17_th_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "th", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Queued Workitems ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function CaseViewComponent_div_17_td_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](element_r31.queuedWorkitemsCount);
} }
function CaseViewComponent_div_17_th_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Overdue ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function CaseViewComponent_div_17_td_37_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r33.formatUtils.applyIsOverdueFormat(element_r32.leadTime, +(ctx_r33.specificationDataContainer == null ? null : ctx_r33.specificationDataContainer.extensionSpecification == null ? null : ctx_r33.specificationDataContainer.extensionSpecification.specificationTimeLimit)), " ");
} }
function CaseViewComponent_div_17_td_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, CaseViewComponent_div_17_td_37_span_1_Template, 2, 1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", (ctx_r17.specificationDataContainer == null ? null : ctx_r17.specificationDataContainer.extensionSpecification) !== undefined);
} }
function CaseViewComponent_div_17_th_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "th", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Cancelled ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function CaseViewComponent_div_17_td_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r35 = ctx.$implicit;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r19.formatUtils.applyBooleanFormat(element_r35.cancelled), " ");
} }
function CaseViewComponent_div_17_th_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Actions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function CaseViewComponent_div_17_td_43_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "td", 46)(1, "a", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function CaseViewComponent_div_17_td_43_Template_a_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r38); const element_r36 = restoredCtx.$implicit; const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r37.openWorkitemsDialog(element_r36.caseid)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](4, "fa-icon", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("fixedWidth", true);
} }
function CaseViewComponent_div_17_tr_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "tr", 59);
} }
function CaseViewComponent_div_17_tr_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "tr", 60);
} }
function CaseViewComponent_div_17_tr_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "tr", 61)(1, "td", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, " Empty table ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵattribute"]("colspan", ctx_r24.displayedColumns.length);
} }
function CaseViewComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "app-case-statistic-view", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "p", 14)(3, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, "Instances");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function CaseViewComponent_div_17_Template_a_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r41); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r40.openWorkitemQueueDialog()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6, " Work item queue ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](7, "fa-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "span", 18)(9, "mat-label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10, " Max case time ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "app-timestampform", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("timestampChange", function CaseViewComponent_div_17_Template_app_timestampform_timestampChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r41); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r42.specificationTimeLimit = $event); })("timestampChanged", function CaseViewComponent_div_17_Template_app_timestampform_timestampChanged_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r41); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r43.changedSpecificationAttributes()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "table", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("matSortChange", function CaseViewComponent_div_17_Template_table_matSortChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r41); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵresetView"](ctx_r44.announceSortChange($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](14, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](15, CaseViewComponent_div_17_th_15_Template, 2, 0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](16, CaseViewComponent_div_17_td_16_Template, 2, 3, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](17, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](18, CaseViewComponent_div_17_th_18_Template, 2, 0, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](19, CaseViewComponent_div_17_td_19_Template, 2, 1, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](20, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](21, CaseViewComponent_div_17_th_21_Template, 2, 0, "th", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](22, CaseViewComponent_div_17_td_22_Template, 2, 1, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](23, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](24, CaseViewComponent_div_17_th_24_Template, 2, 0, "th", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](25, CaseViewComponent_div_17_td_25_Template, 2, 1, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](26, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](27, CaseViewComponent_div_17_th_27_Template, 2, 0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](28, CaseViewComponent_div_17_td_28_Template, 2, 1, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](29, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](30, CaseViewComponent_div_17_th_30_Template, 2, 0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](31, CaseViewComponent_div_17_td_31_Template, 2, 1, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](32, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](33, CaseViewComponent_div_17_th_33_Template, 2, 0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](34, CaseViewComponent_div_17_td_34_Template, 2, 1, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](35, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](36, CaseViewComponent_div_17_th_36_Template, 2, 0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](37, CaseViewComponent_div_17_td_37_Template, 2, 1, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](38, 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](39, CaseViewComponent_div_17_th_39_Template, 2, 0, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](40, CaseViewComponent_div_17_td_40_Template, 2, 1, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](41, 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](42, CaseViewComponent_div_17_th_42_Template, 2, 0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](43, CaseViewComponent_div_17_td_43_Template, 5, 1, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](44, CaseViewComponent_div_17_tr_44_Template, 1, 0, "tr", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](45, CaseViewComponent_div_17_tr_45_Template, 1, 0, "tr", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](46, CaseViewComponent_div_17_tr_46_Template, 3, 1, "tr", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("hidden", !ctx_r0.isCaseView());
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("specificationDataContainer", ctx_r0.specificationDataContainer);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("fixedWidth", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("enabled", ctx_r0.featuresConfig.editCostAndLimits)("timestamp", ctx_r0.specificationTimeLimit)("monthSelectionActive", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("dataSource", ctx_r0.dataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("matHeaderRowDef", ctx_r0.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("matRowDefColumns", ctx_r0.displayedColumns);
} }
function CaseViewComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "app-task-view", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("specificationDataContainer", ctx_r1.specificationDataContainer);
} }
/**
 * @author Robin Steinwarz
 */
class CaseViewComponent {
    constructor(dialog, specificationDataService, extensionSpecificationService, specificationService, route, notifierService) {
        this.dialog = dialog;
        this.specificationDataService = specificationDataService;
        this.extensionSpecificationService = extensionSpecificationService;
        this.specificationService = specificationService;
        this.route = route;
        this.notifierService = notifierService;
        this.featuresConfig = _common_config_features_config__WEBPACK_IMPORTED_MODULE_4__.featuresConfig;
        // @ts-ignore
        this.viewType = '0';
        this.formatUtils = new _common_util_format_util__WEBPACK_IMPORTED_MODULE_2__.FormatUtils();
        // Config
        this.displayedColumns = ['caseid', 'start', 'end', 'leadTime', 'running', 'queue', 'overdue', 'cancelled', 'actions'];
        // @ts-ignore
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableDataSource();
        this.casesURL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__.env.remoteUIUrl;
        this.cases = undefined;
        this.specificationTimeLimit = 0;
    }
    set matSort(ms) {
        this.sort = ms;
        if (this.dataSource != undefined) {
            this.dataSource.sort = this.sort;
        }
    }
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.specificationDataService.getSpecificationsData().subscribe(specificationDataContainers => {
                specificationDataContainers.forEach(specificationDataContainer => {
                    if (specificationDataContainer.specificationInformation.uri === params.get('uri')
                        && specificationDataContainer.specificationInformation.specversion === params.get('specversion')
                        && specificationDataContainer.specificationInformation.id === params.get('uuid')) {
                        this.specificationDataContainer = specificationDataContainer;
                        this.cases = specificationDataContainer.specificationStatistic.caseStatisticDTOS;
                        this.dataSource.data = this.cases;
                        this.dataSource.sort = this.sort;
                        this.specificationTimeLimit = this.specificationDataContainer?.extensionSpecification.specificationTimeLimit;
                    }
                });
            });
        });
    }
    openWorkitemQueueDialog() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
            specificationDataContainer: this.specificationDataContainer
        };
        this.dialog.open(_workitem_queue_dialog_workitem_queue_dialog_component__WEBPACK_IMPORTED_MODULE_0__.WorkitemQueueDialogComponent, dialogConfig);
    }
    openWorkitemsDialog(caseid) {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
            specificationDataContainer: this.specificationDataContainer,
            caseid: caseid
        };
        this.dialog.open(_workitems_dialog_workitems_dialog_component__WEBPACK_IMPORTED_MODULE_1__.WorkitemsDialogComponent, dialogConfig);
    }
    isCaseView() {
        return this.viewType == ViewType.Case;
    }
    isTaskView() {
        return this.viewType == ViewType.Task;
    }
    changedSpecificationAttributes() {
        if (this.specificationDataContainer?.specificationStatistic === undefined) {
            return;
        }
        this.specificationService
            .storeSpecificationAttributesById(this.specificationDataContainer?.specificationStatistic.id, this.specificationDataContainer?.specificationStatistic.version, this.specificationDataContainer?.specificationStatistic.uri, "" + this.specificationTimeLimit)
            .subscribe(result => {
            this.notifierService.notify("success", "Specification time limit saved");
        });
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    /** Announce the change in sort state for assistive technology. */
    announceSortChange(sort) {
        const isAsc = sort.direction === 'asc';
        if (sort.direction === '') {
            this.dataSource?.data.sort((a, b) => this.compare(a.caseid, b.caseid, true));
        }
        else {
            switch (sort.active) {
                case 'overdue':
                    this.dataSource?.data.sort((a, b) => this.compare(+(a.leadTime > +this.specificationDataContainer?.extensionSpecification.specificationTimeLimit), +(b.leadTime > +this.specificationDataContainer?.extensionSpecification.specificationTimeLimit), isAsc));
                    return;
                default:
                    return 0;
            }
        }
        return;
    }
    compare(a, b, isAsc) {
        return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }
}
CaseViewComponent.ɵfac = function CaseViewComponent_Factory(t) { return new (t || CaseViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_yawl_resources_services_specification_data_service__WEBPACK_IMPORTED_MODULE_5__.SpecificationDataService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_yawl_resources_services_extension_specification_service__WEBPACK_IMPORTED_MODULE_6__.ExtensionSpecificationService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_yawl_resources_services_specification_service__WEBPACK_IMPORTED_MODULE_7__.SpecificationService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](angular_notifier__WEBPACK_IMPORTED_MODULE_16__.NotifierService)); };
CaseViewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({ type: CaseViewComponent, selectors: [["app-case-view"]], viewQuery: function CaseViewComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_17__.MatSort, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.matSort = _t.first);
    } }, decls: 20, vars: 6, consts: [[1, "page-title-spaceless"], ["href", "/#/dashboard"], ["icon", "arrow-right", 3, "fixedWidth"], [3, "innerHTML"], [2, "margin-left", ".5em", 3, "innerHTML"], [2, "margin-left", ".5em"], [3, "ngModel", "ngModelChange"], ["value", "0", 2, "padding", "0", "margin", "0", "font-size", "16px", "font-weight", "100"], ["value", "1", 2, "font-size", "16px", "font-weight", "100"], [3, "hidden", 4, "ngIf"], [4, "ngIf"], [1, "bottom-page-margin"], [3, "hidden"], [3, "specificationDataContainer"], [2, "margin-top", "2em"], [2, "font-size", "14px"], ["mat-raised-button", "", "target", "_blank", 2, "float", "right", "top", "-1em", 3, "click"], ["icon", "arrow-turn-up", "matTooltip", "Open the work items queue dialog. This dialog summarizes all work items waiting to be processed by resources.", 1, "deg90", 3, "fixedWidth"], [2, "display", "block", "white-space", "nowrap", "float", "right", "margin-top", "-24px", "margin-right", "1em"], [2, "color", "rgba(0, 0, 0, 0.38)", "font-size", "8px", "font-weight", "600", "font-family", "Roboto, 'Helvetica Neue', sans-serif"], [3, "enabled", "timestamp", "monthSelectionActive", "timestampChange", "timestampChanged"], ["mat-table", "", "matSort", "", "matSortActive", "caseid", "matSortDirection", "asc", 1, "mat-elevation-z8", 3, "dataSource", "matSortChange"], ["matColumnDef", "color"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "caseid"], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by caseId", 4, "matHeaderCellDef"], ["matColumnDef", "start"], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by specification initiated", 4, "matHeaderCellDef"], ["matColumnDef", "end"], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by completed", 4, "matHeaderCellDef"], ["matColumnDef", "leadTime"], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by lead time", 4, "matHeaderCellDef"], ["matColumnDef", "running"], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by running workitems", 4, "matHeaderCellDef"], ["matColumnDef", "queue"], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by queued workitems", 4, "matHeaderCellDef"], ["matColumnDef", "overdue"], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by overdued case", 4, "matHeaderCellDef"], ["matColumnDef", "cancelled"], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by cancelled case", 4, "matHeaderCellDef"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], ["mat-header-cell", ""], ["mat-cell", ""], ["icon", "square", "matTooltip", "This is the color associated with the case.", 3, "fixedWidth"], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by caseId"], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by specification initiated"], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by completed"], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by lead time"], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by running workitems"], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by queued workitems"], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by overdued case"], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by cancelled case"], ["href", "javascript:", 3, "click"], ["mat-raised-button", ""], ["icon", "arrow-turn-up", "matTooltip", "Open the work items dialog. This dialog shows the exact processing of this case. Accordingly, all work items are listed in their processing order.", 1, "deg90", 3, "fixedWidth"], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row"], [1, "mat-cell", 2, "text-align", "center", "color", "#5e5e5e"]], template: function CaseViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "default-page")(1, "div")(2, "mat-toolbar", 0)(3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, " Specifications ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](5, "fa-icon", 2)(6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7, " , ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "section", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10, " ( ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "mat-radio-group", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function CaseViewComponent_Template_mat_radio_group_ngModelChange_11_listener($event) { return ctx.viewType = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "mat-radio-button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](13, " Cases ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "mat-radio-button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](15, " Tasks ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](16, " ) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](17, CaseViewComponent_div_17_Template, 47, 9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](18, CaseViewComponent_div_18_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("fixedWidth", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("innerHTML", ctx.specificationDataContainer == null ? null : ctx.specificationDataContainer.specificationStatistic == null ? null : ctx.specificationDataContainer.specificationStatistic.uri, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("innerHTML", ctx.specificationDataContainer == null ? null : ctx.specificationDataContainer.specificationStatistic == null ? null : ctx.specificationDataContainer.specificationStatistic.version, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx.viewType);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", (ctx.specificationDataContainer == null ? null : ctx.specificationDataContainer.specificationStatistic) != undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.specificationDataContainer !== undefined && ctx.isTaskView());
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, _common_layout_default_page_component__WEBPACK_IMPORTED_MODULE_8__.DefaultPageComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_19__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_19__.MatAnchor, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__.MatLabel, _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__.MatRadioGroup, _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__.MatRadioButton, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatNoDataRow, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__.MatToolbar, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_23__.MatTooltip, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_24__.FaIconComponent, _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__.MatSortHeader, _angular_forms__WEBPACK_IMPORTED_MODULE_25__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_25__.NgModel, _task_view_task_view_component__WEBPACK_IMPORTED_MODULE_9__.TaskViewComponent, _timestampform_timestampform_component__WEBPACK_IMPORTED_MODULE_10__.TimestampformComponent, _case_statistic_view_case_statistic_view_component__WEBPACK_IMPORTED_MODULE_11__.CaseStatisticViewComponent], styles: ["table[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n.mat-mdc-form-field[_ngcontent-%COMP%] {\r\n  margin-top: 5em;\r\n}\r\n.spacer[_ngcontent-%COMP%] {\r\n  flex: 1 1 auto;\r\n}\r\na[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n}\r\n.statistics[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  margin-top: 20px;\r\n}\r\n.grid-form[_ngcontent-%COMP%] {\r\n  width: 98%;\r\n}\r\n.mat-radio-button[_ngcontent-%COMP%] {\r\n  margin-left: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhc2Utdmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRCQUE0QjtBQUM1QjtFQUNFLFdBQVc7QUFDYjtBQUVBO0VBQ0UsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxVQUFVO0FBQ1o7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJjYXNlLXZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEBhdXRob3IgUm9iaW4gU3RlaW53YXJ6ICovXHJcbnRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1hdC1tZGMtZm9ybS1maWVsZCB7XHJcbiAgbWFyZ2luLXRvcDogNWVtO1xyXG59XHJcblxyXG4uc3BhY2VyIHtcclxuICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG5cclxuYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uc3RhdGlzdGljcyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuLmdyaWQtZm9ybSB7XHJcbiAgd2lkdGg6IDk4JTtcclxufVxyXG5cclxuLm1hdC1yYWRpby1idXR0b24ge1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcbiJdfQ== */"] });
var ViewType;
(function (ViewType) {
    ViewType[ViewType["Case"] = 0] = "Case";
    ViewType[ViewType["Task"] = 1] = "Task";
})(ViewType || (ViewType = {}));


/***/ }),

/***/ 3461:
/*!************************************************************************!*\
  !*** ./src/app/dashboard-new/chart-capsule/chart-capsule.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChartCapsuleComponent": () => (/* binding */ ChartCapsuleComponent)
/* harmony export */ });
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chart.js */ 83854);
/* harmony import */ var chartjs_adapter_date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chartjs-adapter-date-fns */ 8995);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);




const _c0 = ["canvasElement"];
/**
 * @author Robin Steinwarz
 */
class ChartCapsuleComponent {
    constructor() {
        chart_js__WEBPACK_IMPORTED_MODULE_1__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_1__.Colors, chart_js__WEBPACK_IMPORTED_MODULE_1__.TimeScale, chart_js__WEBPACK_IMPORTED_MODULE_1__.BubbleController, chart_js__WEBPACK_IMPORTED_MODULE_1__.LinearScale, chart_js__WEBPACK_IMPORTED_MODULE_1__.PointElement, chart_js__WEBPACK_IMPORTED_MODULE_1__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_1__.CategoryScale, chart_js__WEBPACK_IMPORTED_MODULE_1__.BarController, chart_js__WEBPACK_IMPORTED_MODULE_1__.BarElement, chart_js__WEBPACK_IMPORTED_MODULE_1__.Legend, chart_js__WEBPACK_IMPORTED_MODULE_1__.RadarController, chart_js__WEBPACK_IMPORTED_MODULE_1__.RadialLinearScale, chart_js__WEBPACK_IMPORTED_MODULE_1__.LineElement, chart_js__WEBPACK_IMPORTED_MODULE_1__.Filler, chart_js__WEBPACK_IMPORTED_MODULE_1__.LineController);
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        if (this.chart === undefined) {
            this.tryInstantiateChart();
        }
    }
    ngOnChanges(changes) {
        if (this.chart === undefined) {
            //this.tryInstantiateChart();
        }
        else {
            this.tryUpdateChart();
        }
    }
    tryInstantiateChart() {
        if (this.canvasElement !== undefined && this.type !== undefined && this.datasets !== undefined && this.options !== undefined) {
            this.chart = new chart_js__WEBPACK_IMPORTED_MODULE_1__.Chart(this.canvasElement.nativeElement, {
                type: this.type,
                data: { datasets: this.datasets, labels: this.labels },
                options: this.options
            });
        }
    }
    tryUpdateChart() {
        if (this.canvasElement !== undefined && this.chart !== undefined && this.type !== undefined && this.datasets !== undefined && this.options !== undefined) {
            this.chart.config.data = { labels: this.labels, datasets: this.datasets };
            this.chart.config.options = this.options;
            this.chart.update();
        }
    }
}
ChartCapsuleComponent.ɵfac = function ChartCapsuleComponent_Factory(t) { return new (t || ChartCapsuleComponent)(); };
ChartCapsuleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ChartCapsuleComponent, selectors: [["app-chart-capsule"]], viewQuery: function ChartCapsuleComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.canvasElement = _t.first);
    } }, inputs: { type: "type", datasets: "datasets", labels: "labels", options: "options" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 0, consts: [["canvasElement", ""]], template: function ChartCapsuleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "canvas", null, 0);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXJ0LWNhcHN1bGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw0QkFBNEIiLCJmaWxlIjoiY2hhcnQtY2Fwc3VsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQGF1dGhvciBSb2JpbiBTdGVpbndhcnogKi9cclxuIl19 */"] });


/***/ }),

/***/ 82533:
/*!*******************************************************!*\
  !*** ./src/app/dashboard-new/dashboard-new.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardNewModule": () => (/* binding */ DashboardNewModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 60124);
/* harmony import */ var _dashboard_new_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-new.routes */ 66390);
/* harmony import */ var _common_layout_layout_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/layout/layout.module */ 81268);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/slide-toggle */ 84714);
/* harmony import */ var _common_layout_material_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/layout/material-shared.module */ 69438);
/* harmony import */ var _specification_view_specification_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./specification-view/specification-view.component */ 65799);
/* harmony import */ var _dashboard_new_dashboard_new_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard-new/dashboard-new.component */ 69786);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 19200);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/sort */ 92197);
/* harmony import */ var _case_view_case_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./case-view/case-view.component */ 87393);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/grid-list */ 42642);
/* harmony import */ var _workitem_queue_dialog_workitem_queue_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./workitem-queue-dialog/workitem-queue-dialog.component */ 61836);
/* harmony import */ var _workitems_dialog_workitems_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./workitems-dialog/workitems-dialog.component */ 30684);
/* harmony import */ var _task_view_task_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./task-view/task-view.component */ 67101);
/* harmony import */ var _timestampform_timestampform_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./timestampform/timestampform.component */ 30472);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _specification_statistic_view_specification_statistic_view_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./specification-statistic-view/specification-statistic-view.component */ 8680);
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @swimlane/ngx-charts */ 14142);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/platform-browser/animations */ 37146);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _case_statistic_view_case_statistic_view_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./case-statistic-view/case-statistic-view.component */ 16674);
/* harmony import */ var _task_statistic_view_task_statistic_view_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./task-statistic-view/task-statistic-view.component */ 64145);
/* harmony import */ var _chart_capsule_chart_capsule_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./chart-capsule/chart-capsule.component */ 3461);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/expansion */ 17591);
/* harmony import */ var _task_statistic_heatmap_view_task_statistic_heatmap_view_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./task-statistic-heatmap-view/task-statistic-heatmap-view.component */ 25335);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 22560);






/* Components */



























/**
 * @author Robin Steinwarz
 */
class DashboardNewModule {
}
DashboardNewModule.ɵfac = function DashboardNewModule_Factory(t) { return new (t || DashboardNewModule)(); };
DashboardNewModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({ type: DashboardNewModule });
DashboardNewModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule.forChild(_dashboard_new_routes__WEBPACK_IMPORTED_MODULE_0__.dashboardRoutesConfig),
        _common_layout_layout_module__WEBPACK_IMPORTED_MODULE_1__.LayoutModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_18__.MatSlideToggleModule,
        _common_layout_material_shared_module__WEBPACK_IMPORTED_MODULE_2__.MaterialSharedModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MatNativeDateModule,
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_20__.FontAwesomeModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__.BrowserModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__.MatSortModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_23__.MatTableModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_24__.MatGridListModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_25__.ReactiveFormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_25__.FormsModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__.BrowserAnimationsModule,
        _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_27__.NgxChartsModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_28__.MatExpansionModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_29__.MatButtonModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_30__.MatDividerModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_31__.MatIconModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](DashboardNewModule, { declarations: [_dashboard_new_dashboard_new_component__WEBPACK_IMPORTED_MODULE_4__.DashboardNewComponent,
        _specification_view_specification_view_component__WEBPACK_IMPORTED_MODULE_3__.SpecificationViewComponent,
        _case_view_case_view_component__WEBPACK_IMPORTED_MODULE_5__.CaseViewComponent,
        _workitem_queue_dialog_workitem_queue_dialog_component__WEBPACK_IMPORTED_MODULE_6__.WorkitemQueueDialogComponent,
        _workitems_dialog_workitems_dialog_component__WEBPACK_IMPORTED_MODULE_7__.WorkitemsDialogComponent,
        _task_view_task_view_component__WEBPACK_IMPORTED_MODULE_8__.TaskViewComponent,
        _timestampform_timestampform_component__WEBPACK_IMPORTED_MODULE_9__.TimestampformComponent,
        _specification_statistic_view_specification_statistic_view_component__WEBPACK_IMPORTED_MODULE_10__.SpecificationStatisticViewComponent,
        _case_statistic_view_case_statistic_view_component__WEBPACK_IMPORTED_MODULE_11__.CaseStatisticViewComponent,
        _task_statistic_view_task_statistic_view_component__WEBPACK_IMPORTED_MODULE_12__.TaskStatisticViewComponent,
        _task_statistic_heatmap_view_task_statistic_heatmap_view_component__WEBPACK_IMPORTED_MODULE_14__.TaskStatisticHeatmapViewComponent,
        _chart_capsule_chart_capsule_component__WEBPACK_IMPORTED_MODULE_13__.ChartCapsuleComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule, _common_layout_layout_module__WEBPACK_IMPORTED_MODULE_1__.LayoutModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_18__.MatSlideToggleModule,
        _common_layout_material_shared_module__WEBPACK_IMPORTED_MODULE_2__.MaterialSharedModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MatNativeDateModule,
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_20__.FontAwesomeModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__.BrowserModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__.MatSortModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_23__.MatTableModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_24__.MatGridListModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_25__.ReactiveFormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_25__.FormsModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_26__.BrowserAnimationsModule,
        _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_27__.NgxChartsModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_28__.MatExpansionModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_29__.MatButtonModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_30__.MatDividerModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_31__.MatIconModule] }); })();


/***/ }),

/***/ 66390:
/*!*******************************************************!*\
  !*** ./src/app/dashboard-new/dashboard-new.routes.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dashboardRoutesConfig": () => (/* binding */ dashboardRoutesConfig)
/* harmony export */ });
/* harmony import */ var _common_session_logged_in_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/session/logged-in.guard */ 46625);
/* harmony import */ var _dashboard_new_dashboard_new_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard-new/dashboard-new.component */ 69786);
/* harmony import */ var _case_view_case_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./case-view/case-view.component */ 87393);



/**
 * @author Robin Steinwarz
 */
const dashboardRoutesConfig = [
    {
        path: 'dashboard',
        pathMatch: 'full',
        component: _dashboard_new_dashboard_new_component__WEBPACK_IMPORTED_MODULE_1__.DashboardNewComponent,
        canActivate: [_common_session_logged_in_guard__WEBPACK_IMPORTED_MODULE_0__.LoggedInGuard],
    },
    {
        path: 'dashboard/specification/:uri/:uuid/:specversion',
        pathMatch: 'full',
        component: _case_view_case_view_component__WEBPACK_IMPORTED_MODULE_2__.CaseViewComponent,
        canActivate: [_common_session_logged_in_guard__WEBPACK_IMPORTED_MODULE_0__.LoggedInGuard],
    },
];


/***/ }),

/***/ 69786:
/*!************************************************************************!*\
  !*** ./src/app/dashboard-new/dashboard-new/dashboard-new.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardNewComponent": () => (/* binding */ DashboardNewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _common_layout_default_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/layout/default-page.component */ 47512);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ 52543);
/* harmony import */ var _specification_view_specification_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../specification-view/specification-view.component */ 65799);
/* harmony import */ var _specification_statistic_view_specification_statistic_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../specification-statistic-view/specification-statistic-view.component */ 8680);





/**
 * @author Robin Steinwarz
 */
class DashboardNewComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
DashboardNewComponent.ɵfac = function DashboardNewComponent_Factory(t) { return new (t || DashboardNewComponent)(); };
DashboardNewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: DashboardNewComponent, selectors: [["app-dashboard-new"]], decls: 8, vars: 0, consts: [[1, "page-title-spaceless"]], template: function DashboardNewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "default-page")(1, "section")(2, "div")(3, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " Specifications ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "app-specification-statistic-view")(6, "hr")(7, "app-specification-view");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } }, dependencies: [_common_layout_default_page_component__WEBPACK_IMPORTED_MODULE_0__.DefaultPageComponent, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__.MatToolbar, _specification_view_specification_view_component__WEBPACK_IMPORTED_MODULE_1__.SpecificationViewComponent, _specification_statistic_view_specification_statistic_view_component__WEBPACK_IMPORTED_MODULE_2__.SpecificationStatisticViewComponent], styles: [".mat-radio-button[_ngcontent-%COMP%] {\r\n  margin-left: 10px;\r\n}\r\nhr[_ngcontent-%COMP%] {\r\n  color: #8ca3be;\r\n  border: none;\r\n  width: 100%;\r\n  height: 50px;\r\n  margin: -50px auto 2em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC1uZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw0QkFBNEI7QUFDNUI7RUFDRSxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7RUFDWixzQkFBc0I7QUFDeEIiLCJmaWxlIjoiZGFzaGJvYXJkLW5ldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQGF1dGhvciBSb2JpbiBTdGVpbndhcnogKi9cclxuLm1hdC1yYWRpby1idXR0b24ge1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG5ociB7XHJcbiAgY29sb3I6ICM4Y2EzYmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNTBweDtcclxuICBtYXJnaW46IC01MHB4IGF1dG8gMmVtO1xyXG59XHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ 84817:
/*!************************************************************************************************************!*\
  !*** ./src/app/dashboard-new/specification-statistic-view/specification-statistic-chart-configurations.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpecificationStatisticChartConfigurations": () => (/* binding */ SpecificationStatisticChartConfigurations)
/* harmony export */ });
/* harmony import */ var _common_util_format_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/util/format-util */ 17045);
/* harmony import */ var _common_util_color_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/util/color-util */ 19274);


/**
 * @author Robin Steinwarz
 */
class SpecificationStatisticChartConfigurations {
    static specPerformanceComparisonOptions(month) {
        return {
            animation: false,
            scales: {
                x: {
                    type: 'time',
                    time: {
                        unit: (month) ? 'month' : 'year',
                        displayFormats: {
                            year: 'yyy MMM',
                            month: 'yyy MMM',
                        }
                    },
                    ticks: {
                        stepSize: 1,
                        font: {
                            size: 10
                        }
                    }
                },
                y: {
                    ticks: {
                        font: {
                            size: 10
                        },
                        // Include a dollar sign in the ticks
                        callback: function (value, index, ticks) {
                            return new _common_util_format_util__WEBPACK_IMPORTED_MODULE_0__.FormatUtils().applyPastTimeFormatForTimestampWithDays(value);
                        }
                    },
                    min: 0,
                    title: {
                        display: true,
                        text: 'Avg. run time',
                        font: {
                            size: 10
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    display: false,
                    labels: {
                        font: {
                            size: 10
                        }
                    }
                },
                tooltip: {
                    enabled: true,
                    callbacks: {
                        label: function (tooltipItem) {
                            if (!tooltipItem) {
                                return "";
                            }
                            return [" " + tooltipItem.dataset.label,
                                // @ts-ignore
                                "Period (year/month): " + _common_util_format_util__WEBPACK_IMPORTED_MODULE_0__.FormatUtils.applyDateFormat(tooltipItem.raw.x),
                                // @ts-ignore
                                "Number of cases started in period: " + tooltipItem.raw.count,
                                // @ts-ignore
                                "Avg. case duration: " + _common_util_format_util__WEBPACK_IMPORTED_MODULE_0__.FormatUtils.applyPastTimeFormatForTimestampWithDays(tooltipItem.raw.y)];
                        }
                    }
                },
            }
        };
    }
    static pastBottlenecksOptions(month) {
        return {
            animation: false,
            elements: {
                line: {
                    borderWidth: 1
                },
                point: {
                    radius: 0,
                    hitRadius: 1
                }
            },
            scales: {
                x: {
                    type: 'time',
                    time: {
                        unit: 'month',
                        displayFormats: {
                            year: 'yyy MMM',
                            month: 'yyy MMM',
                        }
                    },
                    ticks: {
                        font: {
                            size: 10
                        }
                    },
                    title: {
                        display: true,
                        text: 'Queue size',
                        font: {
                            size: 10
                        }
                    }
                },
                y: {
                    ticks: {
                        font: {
                            size: 10
                        }
                    },
                    min: 0,
                    title: {
                        display: true,
                        text: 'Number of work items in queue',
                        font: {
                            size: 10
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    display: false,
                    labels: {
                        font: {
                            size: 10
                        }
                    }
                },
                tooltip: {
                    enabled: true,
                    callbacks: {
                        label: function (tooltipItem) {
                            if (!tooltipItem) {
                                return "";
                            }
                            return "Queue size " + tooltipItem.raw;
                        }
                    }
                },
            }
        };
    }
    static specIndicatorOptions(month) {
        return {
            animation: false,
            scales: {
                x: {
                    type: 'time',
                    time: {
                        unit: (month) ? 'month' : 'year',
                        displayFormats: {
                            year: 'yyy MMM',
                            month: 'yyy MMM',
                        }
                    },
                    ticks: {
                        font: {
                            size: 10
                        }
                    }
                },
                y: {
                    ticks: {
                        font: {
                            size: 10
                        },
                        // Include a dollar sign in the ticks
                        callback: function (value, index, ticks) {
                            return _common_util_format_util__WEBPACK_IMPORTED_MODULE_0__.FormatUtils.applyDecimalPercentageFormat(value);
                        }
                    },
                    min: 0,
                    max: 1,
                    title: {
                        display: true,
                        text: 'Ratio in percentage',
                        font: {
                            size: 10
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        font: {
                            size: 10
                        }
                    }
                },
                tooltip: {
                    enabled: true,
                    callbacks: {
                        label: function (tooltipItem) {
                            if (!tooltipItem) {
                                return "";
                            }
                            return [" " + tooltipItem.dataset.label + " bar",
                                // @ts-ignore
                                "Percentage: " + _common_util_format_util__WEBPACK_IMPORTED_MODULE_0__.FormatUtils.applyDecimalPercentageFormat(tooltipItem.raw)];
                        }
                    }
                },
            }
        };
    }
    static specOutlierOptions(month) {
        return {
            animation: false,
            maintainAspectRatio: false,
            scales: {
                x: {
                    ticks: {
                        font: {
                            size: 7
                        },
                        maxRotation: 90,
                        minRotation: 90
                    }
                },
                y: {
                    ticks: {
                        font: {
                            size: 10
                        },
                        // Include a dollar sign in the ticks
                        callback: function (value, index, ticks) {
                            return _common_util_format_util__WEBPACK_IMPORTED_MODULE_0__.FormatUtils.applyPastTimeFormatForTimestampWithDays(value);
                        }
                    },
                    title: {
                        display: true,
                        text: 'Run time',
                        font: {
                            size: 10
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        usePointStyle: true,
                        pointStyle: 'circle',
                        boxWidth: 0,
                        boxHeight: 0,
                        font: {
                            size: 10
                        }
                    }
                },
                tooltip: {
                    enabled: true,
                    callbacks: {
                        label: function (tooltipItem) {
                            if (!tooltipItem) {
                                return "";
                            }
                            return [" " + tooltipItem.dataset.label + " bar",
                                // @ts-ignore
                                "Value: " + _common_util_format_util__WEBPACK_IMPORTED_MODULE_0__.FormatUtils.applyPastTimeFormatForTimestampWithDays(tooltipItem.raw)];
                        }
                    }
                },
            }
        };
    }
    static capacityUtilizationOptions(month) {
        return {
            animation: false,
            maintainAspectRatio: false,
            scales: {
                x: {
                    stacked: true,
                    type: 'time',
                    time: {
                        unit: (month) ? 'month' : 'year',
                        displayFormats: {
                            year: 'yyy MMM',
                            month: 'yyy MMM',
                        }
                    },
                    ticks: {
                        font: {
                            size: 10
                        }
                    }
                },
                y: {
                    stacked: true,
                    ticks: {
                        font: {
                            size: 10
                        },
                        // Include a dollar sign in the ticks
                        callback: function (value, index, ticks) {
                            return _common_util_format_util__WEBPACK_IMPORTED_MODULE_0__.FormatUtils.applyPastTimeFormatForTimestampWithDays(value);
                        }
                    },
                    title: {
                        display: true,
                        text: 'Utilized capacity',
                        font: {
                            size: 10
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        font: {
                            size: 10
                        }
                    }
                },
                tooltip: {
                    enabled: true,
                    callbacks: {
                        label: function (tooltipItem) {
                            if (!tooltipItem) {
                                return "";
                            }
                            return [" " + tooltipItem.dataset.label + " bar",
                                // @ts-ignore
                                "Value: " + _common_util_format_util__WEBPACK_IMPORTED_MODULE_0__.FormatUtils.applyPastTimeFormatForTimestampWithDays(tooltipItem.raw)];
                        }
                    }
                },
            }
        };
    }
    static activeBottlenecksOptions(month) {
        return {
            animation: false,
            maintainAspectRatio: false,
            scales: {
                x: {
                    stacked: true,
                    ticks: {
                        font: {
                            size: 7
                        },
                        maxRotation: 90,
                        minRotation: 90
                    }
                },
                y: {
                    stacked: true,
                    ticks: {
                        font: {
                            size: 10
                        }
                    },
                    title: {
                        display: true,
                        text: 'Number of work items in queue',
                        font: {
                            size: 10
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    enabled: true,
                    callbacks: {
                        label: function (tooltipItem) {
                            if (!tooltipItem) {
                                return "";
                            }
                            return [" Task: " + tooltipItem.dataset.label,
                                // @ts-ignore
                                "Number of active work items: " + tooltipItem.raw];
                        }
                    }
                },
            }
        };
    }
    static automationRatioOptions(month) {
        return {
            animation: false,
            maintainAspectRatio: false,
            scales: {
                x: {
                    ticks: {
                        font: {
                            size: 7
                        },
                        maxRotation: 90,
                        minRotation: 90
                    }
                },
                y: {
                    min: 0,
                    max: 1,
                    ticks: {
                        font: {
                            size: 10
                        },
                        // Include a dollar sign in the ticks
                        callback: function (value, index, ticks) {
                            return _common_util_format_util__WEBPACK_IMPORTED_MODULE_0__.FormatUtils.applyDecimalPercentageFormat(value);
                        }
                    },
                    title: {
                        display: true,
                        text: 'Automation ratio in %',
                        font: {
                            size: 10
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    enabled: true,
                    callbacks: {
                        label: function (tooltipItem) {
                            if (!tooltipItem) {
                                return "";
                            }
                            return [" " + tooltipItem.dataset.label + " bar",
                                // @ts-ignore
                                "Automation ratio: " + _common_util_format_util__WEBPACK_IMPORTED_MODULE_0__.FormatUtils.applyDecimalPercentageFormat(tooltipItem.raw)];
                        }
                    }
                },
            }
        };
    }
    static automationCandidatesOptions(month) {
        return {
            animation: false,
            maintainAspectRatio: false,
            scales: {
                x: {
                    stacked: true,
                    ticks: {
                        font: {
                            size: 7
                        },
                        maxRotation: 90,
                        minRotation: 90
                    }
                },
                y: {
                    stacked: true,
                    ticks: {
                        font: {
                            size: 10
                        },
                        // Include a dollar sign in the ticks
                        callback: function (value, index, ticks) {
                            return _common_util_format_util__WEBPACK_IMPORTED_MODULE_0__.FormatUtils.applyPastTimeFormatForTimestampWithDays(value);
                        }
                    },
                    title: {
                        display: true,
                        text: 'Avg. time to complete',
                        font: {
                            size: 10
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    enabled: true,
                    callbacks: {
                        label: function (tooltipItem) {
                            if (!tooltipItem) {
                                return "";
                            }
                            return [" Task: " + tooltipItem.dataset.label,
                                // @ts-ignore
                                "Average resource time: " + _common_util_format_util__WEBPACK_IMPORTED_MODULE_0__.FormatUtils.applyPastTimeFormatForTimestampWithDays(tooltipItem.raw)];
                        }
                    }
                },
            }
        };
    }
    static resourcesRadarOptions(month) {
        return {
            animation: false,
            maintainAspectRatio: true,
            elements: {
                line: {
                    borderWidth: 2,
                    borderColor: _common_util_color_util__WEBPACK_IMPORTED_MODULE_1__.ColorUtils.getPrimaryColor()
                },
                point: {
                    radius: 3,
                    borderColor: _common_util_color_util__WEBPACK_IMPORTED_MODULE_1__.ColorUtils.getPrimaryColor()
                }
            },
            scales: {
                r: {
                    angleLines: {
                        display: false
                    },
                    beginAtZero: true,
                    pointLabels: {
                        font: {
                            size: 10
                        }
                    },
                    ticks: {
                        font: {
                            size: 10
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        };
    }
    static resourceUtilizationRadarOptions(month) {
        return {
            animation: false,
            maintainAspectRatio: true,
            elements: {
                line: {
                    borderWidth: 2,
                    borderColor: _common_util_color_util__WEBPACK_IMPORTED_MODULE_1__.ColorUtils.getPrimaryColor()
                },
                point: {
                    radius: 3,
                    borderColor: _common_util_color_util__WEBPACK_IMPORTED_MODULE_1__.ColorUtils.getPrimaryColor()
                }
            },
            scales: {
                r: {
                    ticks: {
                        font: {
                            size: 10
                        },
                        callback: function (value, index, ticks) {
                            return _common_util_format_util__WEBPACK_IMPORTED_MODULE_0__.FormatUtils.applyPastTimeFormatForTimestampWithDays(value);
                        }
                    },
                    beginAtZero: true,
                    pointLabels: {
                        font: {
                            size: 10
                        }
                    },
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    enabled: true,
                    callbacks: {
                        label: function (tooltipItem) {
                            if (!tooltipItem) {
                                return "";
                            }
                            // @ts-ignore
                            return "Summed resource time: " + _common_util_format_util__WEBPACK_IMPORTED_MODULE_0__.FormatUtils.applyPastTimeFormatForTimestampWithDays(tooltipItem.raw);
                        }
                    }
                },
            }
        };
    }
}


/***/ }),

/***/ 8680:
/*!******************************************************************************************************!*\
  !*** ./src/app/dashboard-new/specification-statistic-view/specification-statistic-view.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpecificationStatisticViewComponent": () => (/* binding */ SpecificationStatisticViewComponent)
/* harmony export */ });
/* harmony import */ var _common_util_format_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/util/format-util */ 17045);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _common_util_statistic_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/util/statistic-utils */ 44796);
/* harmony import */ var _specification_statistic_chart_configurations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./specification-statistic-chart-configurations */ 84817);
/* harmony import */ var _common_util_color_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/util/color-util */ 19274);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/a11y */ 24218);
/* harmony import */ var _yawl_resources_services_specification_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../yawl/resources/services/specification-data.service */ 81966);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button-toggle */ 19837);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/datepicker */ 42298);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 19200);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/grid-list */ 42642);
/* harmony import */ var _chart_capsule_chart_capsule_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../chart-capsule/chart-capsule.component */ 3461);



















function SpecificationStatisticViewComponent_mat_hint_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Cases found: ", ctx_r0.casesInRange, "");
} }
function SpecificationStatisticViewComponent_mat_hint_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-hint", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Cases found: ", ctx_r1.casesInRange, "");
} }
function SpecificationStatisticViewComponent_mat_error_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Invalid start date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function SpecificationStatisticViewComponent_mat_error_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Invalid end date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function SpecificationStatisticViewComponent_mat_form_field_29_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-form-field", 4)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Resource aspect");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "mat-select", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("valueChange", function SpecificationStatisticViewComponent_mat_form_field_29_Template_mat_select_valueChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r15.statisticResourceSelection = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx_r5.statisticResourceSelection);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", "role");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"]("Role");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", "capability");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"]("Capability");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", "position");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"]("Position");
} }
function SpecificationStatisticViewComponent_mat_grid_tile_116_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-grid-tile", 26)(1, "div", 18)(2, "div", 19)(3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "How is our role distribution?");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "fa-icon", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 23)(8, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "app-chart-capsule", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("fixedWidth", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("type", "radar")("datasets", ctx_r6.roleDistributionData.datasets)("labels", ctx_r6.roleDistributionData.labels)("options", ctx_r6.resourceRadarOptions);
} }
function SpecificationStatisticViewComponent_mat_grid_tile_117_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-grid-tile", 26)(1, "div", 18)(2, "div", 19)(3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "How is our capability distribution?");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "fa-icon", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 23)(8, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "app-chart-capsule", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("fixedWidth", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("type", "radar")("datasets", ctx_r7.capabilityDistributionData.datasets)("labels", ctx_r7.capabilityDistributionData.labels)("options", ctx_r7.resourceRadarOptions);
} }
function SpecificationStatisticViewComponent_mat_grid_tile_118_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-grid-tile", 26)(1, "div", 18)(2, "div", 19)(3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "How is our position distribution?");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "fa-icon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 23)(8, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "app-chart-capsule", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("fixedWidth", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("type", "radar")("datasets", ctx_r8.positionDistributionData.datasets)("labels", ctx_r8.positionDistributionData.labels)("options", ctx_r8.resourceRadarOptions);
} }
function SpecificationStatisticViewComponent_mat_grid_tile_119_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-grid-tile", 26)(1, "div", 18)(2, "div", 19)(3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "How is our role distribution according to our processes?");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "fa-icon", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 23)(8, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "app-chart-capsule", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("fixedWidth", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("type", "radar")("datasets", ctx_r9.configuredRolesData.datasets)("labels", ctx_r9.configuredRolesData.labels)("options", ctx_r9.resourceRadarOptions);
} }
function SpecificationStatisticViewComponent_mat_grid_tile_120_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-grid-tile", 26)(1, "div", 18)(2, "div", 19)(3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "How is our capability distribution according to our processes?");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "fa-icon", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 23)(8, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "app-chart-capsule", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("fixedWidth", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("type", "radar")("datasets", ctx_r10.configuredCapabilitiesData.datasets)("labels", ctx_r10.configuredCapabilitiesData.labels)("options", ctx_r10.resourceRadarOptions);
} }
function SpecificationStatisticViewComponent_mat_grid_tile_121_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-grid-tile", 26)(1, "div", 18)(2, "div", 19)(3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "How is our position distribution according to our processes?");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "fa-icon", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 23)(8, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "app-chart-capsule", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("fixedWidth", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("type", "radar")("datasets", ctx_r11.configuredPositionsData.datasets)("labels", ctx_r11.configuredPositionsData.labels)("options", ctx_r11.resourceRadarOptions);
} }
function SpecificationStatisticViewComponent_mat_grid_tile_122_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-grid-tile", 26)(1, "div", 18)(2, "div", 19)(3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "How did we really utilize roles?");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "fa-icon", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 23)(8, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "app-chart-capsule", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("fixedWidth", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("type", "radar")("datasets", ctx_r12.roleUtilizationData.datasets)("labels", ctx_r12.roleUtilizationData.labels)("options", ctx_r12.resourceUtilizationRadarOptions);
} }
function SpecificationStatisticViewComponent_mat_grid_tile_123_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-grid-tile", 26)(1, "div", 18)(2, "div", 19)(3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "How did we really utilize capabilities?");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "fa-icon", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 23)(8, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "app-chart-capsule", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("fixedWidth", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("type", "radar")("datasets", ctx_r13.capabilityUtilizationData.datasets)("labels", ctx_r13.capabilityUtilizationData.labels)("options", ctx_r13.resourceUtilizationRadarOptions);
} }
function SpecificationStatisticViewComponent_mat_grid_tile_124_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-grid-tile", 26)(1, "div", 18)(2, "div", 19)(3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "How did we really utilize positions?");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "fa-icon", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 23)(8, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "app-chart-capsule", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("fixedWidth", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("type", "radar")("datasets", ctx_r14.positionUtilizationData.datasets)("labels", ctx_r14.positionUtilizationData.labels)("options", ctx_r14.resourceUtilizationRadarOptions);
} }
/**
 * @author Robin Steinwarz
 */
class SpecificationStatisticViewComponent {
    constructor(_liveAnnouncer, specificationDataService) {
        this._liveAnnouncer = _liveAnnouncer;
        this.specificationDataService = specificationDataService;
        this.range = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({
            start: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(new Date(Date.UTC(new Date(Date.now()).getFullYear() - 2, 0))),
            end: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(new Date(Date.now())),
        });
        this.formatUtils = new _common_util_format_util__WEBPACK_IMPORTED_MODULE_0__.FormatUtils();
        // Config
        this.loaded = false;
        this.fineness = 'month';
        this.statisticSelection = "performance";
        this.statisticResourceSelection = "role";
        this.statisticTicks = [];
        this.casesInRange = 0;
        // Performance
        this.specPerformanceOptions = _specification_statistic_chart_configurations__WEBPACK_IMPORTED_MODULE_2__.SpecificationStatisticChartConfigurations.specPerformanceComparisonOptions(this.fineness === 'month');
        this.specPerformanceComparisonData = [];
        this.overallIndicatorOptions = _specification_statistic_chart_configurations__WEBPACK_IMPORTED_MODULE_2__.SpecificationStatisticChartConfigurations.specIndicatorOptions(this.fineness === 'month');
        this.overallIndicatorData = { labels: [], datasets: [] };
        this.specOutlierOptions = _specification_statistic_chart_configurations__WEBPACK_IMPORTED_MODULE_2__.SpecificationStatisticChartConfigurations.specOutlierOptions(this.fineness === 'month');
        this.specOutlierData = { labels: [], datasets: [] };
        // Capacity
        this.capacityUtilizationOptions = _specification_statistic_chart_configurations__WEBPACK_IMPORTED_MODULE_2__.SpecificationStatisticChartConfigurations.capacityUtilizationOptions(this.fineness === 'month');
        this.capacityUtilizationData = { labels: [], datasets: [] };
        this.activeBottlenecksOptions = _specification_statistic_chart_configurations__WEBPACK_IMPORTED_MODULE_2__.SpecificationStatisticChartConfigurations.activeBottlenecksOptions(this.fineness === 'month');
        this.activeBottlenecksData = { labels: [], datasets: [] };
        this.pastBottlenecksOptions = _specification_statistic_chart_configurations__WEBPACK_IMPORTED_MODULE_2__.SpecificationStatisticChartConfigurations.pastBottlenecksOptions(this.fineness === 'month');
        this.pastBottlenecksData = { labels: [], datasets: [] };
        // Resources
        this.automationRatioOptions = _specification_statistic_chart_configurations__WEBPACK_IMPORTED_MODULE_2__.SpecificationStatisticChartConfigurations.automationRatioOptions(this.fineness === 'month');
        this.automationRatioData = { labels: [], datasets: [] };
        this.automationCandidatesOptions = _specification_statistic_chart_configurations__WEBPACK_IMPORTED_MODULE_2__.SpecificationStatisticChartConfigurations.automationCandidatesOptions(this.fineness === 'month');
        this.automationCandidatesData = { labels: [], datasets: [] };
        this.resourceRadarOptions = _specification_statistic_chart_configurations__WEBPACK_IMPORTED_MODULE_2__.SpecificationStatisticChartConfigurations.resourcesRadarOptions(this.fineness === 'month');
        this.resourceUtilizationRadarOptions = _specification_statistic_chart_configurations__WEBPACK_IMPORTED_MODULE_2__.SpecificationStatisticChartConfigurations.resourceUtilizationRadarOptions(this.fineness === 'month');
        this.roleDistributionData = { labels: [], datasets: [] };
        this.capabilityDistributionData = { labels: [], datasets: [] };
        this.positionDistributionData = { labels: [], datasets: [] };
        this.configuredRolesData = { labels: [], datasets: [] };
        this.configuredCapabilitiesData = { labels: [], datasets: [] };
        this.configuredPositionsData = { labels: [], datasets: [] };
        this.roleUtilizationData = { labels: [], datasets: [] };
        this.capabilityUtilizationData = { labels: [], datasets: [] };
        this.positionUtilizationData = { labels: [], datasets: [] };
    }
    ngOnInit() {
        this.specificationDataService.getSpecificationsData().subscribe(specificationDataContainers => {
            this.specificationDataContainers = specificationDataContainers;
            this.statisticTicks = _common_util_statistic_utils__WEBPACK_IMPORTED_MODULE_1__.StatisticUtils.calculateStatisticTicks(this.range, this.fineness);
            this.processSpecPerformanceComparison();
            this.processCasesInRange();
            this.processIndicatorRate();
            this.processSpecificationOutliers();
            this.processCapacityUtilization();
            this.processAutomation();
            this.processResourceRadars();
            this.processBottlenecks();
            this.processPastBottlenecks();
            this.loaded = true;
        });
    }
    updateData() {
        if (this.range.value.start === null || this.range.value.end === null
            || this.range.value.start === undefined || this.range.value.end === undefined
            || this.range.value.start > this.range.value.end) {
            return;
        }
        this.statisticTicks = _common_util_statistic_utils__WEBPACK_IMPORTED_MODULE_1__.StatisticUtils.calculateStatisticTicks(this.range, this.fineness);
        this.processCasesInRange();
        this.processCapacityUtilization();
        this.processSpecPerformanceComparison();
        this.processIndicatorRate();
        this.processSpecificationOutliers();
        this.processAutomation();
        this.specPerformanceOptions = _specification_statistic_chart_configurations__WEBPACK_IMPORTED_MODULE_2__.SpecificationStatisticChartConfigurations.specPerformanceComparisonOptions(this.fineness === 'month');
        this.overallIndicatorOptions = _specification_statistic_chart_configurations__WEBPACK_IMPORTED_MODULE_2__.SpecificationStatisticChartConfigurations.specIndicatorOptions(this.fineness === 'month');
        this.specOutlierOptions = _specification_statistic_chart_configurations__WEBPACK_IMPORTED_MODULE_2__.SpecificationStatisticChartConfigurations.specOutlierOptions(this.fineness === 'month');
        this.capacityUtilizationOptions = _specification_statistic_chart_configurations__WEBPACK_IMPORTED_MODULE_2__.SpecificationStatisticChartConfigurations.capacityUtilizationOptions(this.fineness === 'month');
        this.automationRatioOptions = _specification_statistic_chart_configurations__WEBPACK_IMPORTED_MODULE_2__.SpecificationStatisticChartConfigurations.automationRatioOptions(this.fineness === 'month');
        this.automationCandidatesOptions = _specification_statistic_chart_configurations__WEBPACK_IMPORTED_MODULE_2__.SpecificationStatisticChartConfigurations.automationCandidatesOptions(this.fineness === 'month');
        this.resourceRadarOptions = _specification_statistic_chart_configurations__WEBPACK_IMPORTED_MODULE_2__.SpecificationStatisticChartConfigurations.resourcesRadarOptions(this.fineness === 'month');
    }
    selectStatistic(val) {
        this.statisticSelection = val;
        // Update statistic graphics after they become unhidden
        // Prevents misaligned ngx charts
        window.dispatchEvent(new Event('resize'));
    }
    processCasesInRange() {
        this.casesInRange = 0;
        this.specificationDataContainers?.forEach(specificationDataContainer => {
            specificationDataContainer.specificationStatistic.caseStatisticDTOS.forEach(caseStatistic => {
                if (_common_util_statistic_utils__WEBPACK_IMPORTED_MODULE_1__.StatisticUtils.timestampIsInDateRange(caseStatistic.start, this.range)) {
                    this.casesInRange++;
                }
            });
        });
    }
    processSpecPerformanceComparison() {
        this.specPerformanceComparisonData = [];
        let maxCaseCountPerPeriod = 0;
        this.specificationDataContainers?.forEach(specificationDataContainer => {
            let map = new Map;
            this.statisticTicks.forEach(tick => {
                map.set(((this.fineness === 'month') ? tick.month : tick.year), []);
            });
            specificationDataContainer.specificationStatistic.caseStatisticDTOS.forEach(caseStatistic => {
                if (_common_util_statistic_utils__WEBPACK_IMPORTED_MODULE_1__.StatisticUtils.timestampIsInDateRange(caseStatistic.start, this.range)
                    && _common_util_statistic_utils__WEBPACK_IMPORTED_MODULE_1__.StatisticUtils.notCancelledAndCompleted(caseStatistic)) {
                    let startDate = new Date(caseStatistic.start);
                    let tick = (this.fineness === 'month') ? new Date(startDate.getFullYear(), startDate.getMonth()).getTime() : new Date(startDate.getFullYear(), 0).getTime();
                    let period = map.get(tick);
                    period.push(caseStatistic.leadTime);
                    if (period.length > maxCaseCountPerPeriod) {
                        maxCaseCountPerPeriod = period.length;
                    }
                }
            });
            let dataPoints = [];
            map.forEach((timestamps, tick) => {
                if (timestamps.length !== 0) {
                    const sum = timestamps.reduce((a, b) => a + b, 0);
                    const avg = (sum / timestamps.length) || 0;
                    dataPoints.push({
                        x: tick,
                        y: avg,
                        r: Math.max(7 * (timestamps.length / maxCaseCountPerPeriod), 1),
                        count: timestamps.length
                    });
                }
            });
            this.specPerformanceComparisonData.push({
                label: specificationDataContainer.specificationInformation.uri + " " + specificationDataContainer.specificationInformation.specversion,
                borderColor: _common_util_color_util__WEBPACK_IMPORTED_MODULE_3__.ColorUtils.getDarkerColor(specificationDataContainer.specificationStatistic.color),
                backgroundColor: _common_util_color_util__WEBPACK_IMPORTED_MODULE_3__.ColorUtils.getLighterColor(specificationDataContainer.specificationStatistic.color),
                data: dataPoints
            });
        });
    }
    processIndicatorRate() {
        let successMap = new Map();
        this.specificationDataContainers?.forEach(specificationDataContainer => {
            specificationDataContainer.specificationStatistic.caseStatisticDTOS.forEach(caseStatistic => {
                if (_common_util_statistic_utils__WEBPACK_IMPORTED_MODULE_1__.StatisticUtils.timestampIsInDateRange(caseStatistic.start, this.range)
                    && caseStatistic.end !== 0) {
                    let startDate = new Date(caseStatistic.start);
                    let tick = (this.fineness === 'month') ? new Date(startDate.getFullYear(), startDate.getMonth()).getTime() : new Date(startDate.getFullYear(), 0).getTime();
                    if (!successMap.has(tick)) {
                        successMap.set(tick, { success: [], sla: [] });
                    }
                    let successArray = successMap.get(tick);
                    if (!caseStatistic.cancelled) {
                        if (specificationDataContainer.extensionSpecification.specificationTimeLimit === 0) {
                            successArray.sla.push(1);
                        }
                        else {
                            if (Number(specificationDataContainer.extensionSpecification.specificationTimeLimit) < caseStatistic.leadTime) {
                                successArray.sla.push(0);
                            }
                            else {
                                successArray.sla.push(1);
                            }
                        }
                    }
                    if (caseStatistic.cancelled) {
                        successArray.success.push(0);
                    }
                    else {
                        successArray.success.push(1);
                    }
                }
            });
        });
        let labels = [];
        let successDataSet = [];
        let slaDataSet = [];
        successMap.forEach((value, tick) => {
            labels.push(tick);
            let successfulCases = value.success.filter(value => value === 1).length;
            let successRatio = successfulCases / value.success.length || 0;
            successDataSet.push(successRatio);
            let slaMetCases = value.sla.filter(value => value === 1).length;
            let slaMetRatio = slaMetCases / value.sla.length || 0;
            slaDataSet.push(slaMetRatio);
        });
        this.overallIndicatorData.labels = labels;
        this.overallIndicatorData.datasets = [];
        this.overallIndicatorData.datasets.push({
            label: "Success ratio",
            data: successDataSet,
            backgroundColor: _common_util_color_util__WEBPACK_IMPORTED_MODULE_3__.ColorUtils.getMuchLighterColor(_common_util_color_util__WEBPACK_IMPORTED_MODULE_3__.ColorUtils.getPrimaryColor())
        });
        this.overallIndicatorData.datasets.push({
            label: "Deadline fulfilled ratio",
            data: slaDataSet,
            backgroundColor: _common_util_color_util__WEBPACK_IMPORTED_MODULE_3__.ColorUtils.getMuchLighterColor(_common_util_color_util__WEBPACK_IMPORTED_MODULE_3__.ColorUtils.getSecondaryColor())
        });
    }
    processSpecificationOutliers() {
        let labels = [];
        let colors = [];
        let avg = [];
        let min = [];
        let max = [];
        this.specificationDataContainers?.forEach(specificationDataContainer => {
            if (specificationDataContainer.specificationStatistic.caseStatisticDTOS.length !== 0) {
                let avgLeadTime = 0;
                let counter = 0;
                let minLeadTime = Number.MAX_VALUE;
                let maxLeadTime = 0;
                specificationDataContainer.specificationStatistic.caseStatisticDTOS.forEach((caseStatistic, key) => {
                    if (_common_util_statistic_utils__WEBPACK_IMPORTED_MODULE_1__.StatisticUtils.timestampIsInDateRange(caseStatistic.start, this.range)
                        && _common_util_statistic_utils__WEBPACK_IMPORTED_MODULE_1__.StatisticUtils.notCancelledAndCompleted(caseStatistic)) {
                        avgLeadTime += caseStatistic.leadTime;
                        counter++;
                        if (minLeadTime > caseStatistic.leadTime) {
                            minLeadTime = caseStatistic.leadTime;
                        }
                        if (maxLeadTime < caseStatistic.leadTime) {
                            maxLeadTime = caseStatistic.leadTime;
                        }
                    }
                });
                labels.push([specificationDataContainer.specificationInformation.uri,
                    specificationDataContainer.specificationInformation.specversion]);
                colors.push(specificationDataContainer.specificationStatistic.color);
                avg.push((avgLeadTime / counter) || 0);
                max.push(maxLeadTime);
                if (minLeadTime !== Number.MAX_VALUE) {
                    min.push(minLeadTime);
                }
                else {
                    min.push(0);
                }
            }
        });
        let backgroundFunction = function (context) {
            return colors[context.dataIndex];
        };
        this.specOutlierData.labels = labels;
        this.specOutlierData.datasets = [];
        this.specOutlierData.datasets.push({
            label: "Run time minimum",
            data: min,
            backgroundColor: backgroundFunction
        });
        this.specOutlierData.datasets.push({
            label: "Run time average",
            data: avg,
            backgroundColor: backgroundFunction
        });
        this.specOutlierData.datasets.push({
            label: "Run time maximum",
            data: max,
            backgroundColor: backgroundFunction
        });
    }
    processCapacityUtilization() {
        let dataMap = new Map();
        this.statisticTicks.forEach(tick => {
            let baseMap = new Map();
            this.specificationDataContainers?.forEach(specificationDataContainer => {
                let label = specificationDataContainer.specificationInformation.uri + " " + specificationDataContainer.specificationInformation.specversion;
                baseMap.set(label, { color: specificationDataContainer.specificationStatistic.color, capacity: [] });
            });
            dataMap.set(((this.fineness === 'month') ? tick.month : tick.year), baseMap);
        });
        this.specificationDataContainers?.forEach(specificationDataContainer => {
            specificationDataContainer.specificationStatistic.caseStatisticDTOS.forEach(caseStatistic => {
                if (_common_util_statistic_utils__WEBPACK_IMPORTED_MODULE_1__.StatisticUtils.timestampIsInDateRange(caseStatistic.start, this.range)
                    && !caseStatistic.cancelled) {
                    caseStatistic.workitemDTOS.forEach(workitem => {
                        if (!workitem.automated && !workitem.cancelled && workitem.status === 'Completed'
                            && workitem.endTimestamp !== 0 && _common_util_statistic_utils__WEBPACK_IMPORTED_MODULE_1__.StatisticUtils.timestampIsInDateRange(workitem.startTimestamp, this.range)) {
                            let startDate = new Date(workitem.startTimestamp);
                            let tick = (this.fineness === 'month') ? new Date(startDate.getFullYear(), startDate.getMonth()).getTime() : new Date(startDate.getFullYear(), 0).getTime();
                            let label = specificationDataContainer.specificationInformation.uri + " " + specificationDataContainer.specificationInformation.specversion;
                            let period = dataMap.get(tick);
                            period.get(label).capacity.push(workitem.resourceTime);
                        }
                    });
                }
            });
        });
        let finalDataMap = new Map();
        this.capacityUtilizationData.labels = [];
        dataMap.forEach((data, tick) => {
            this.capacityUtilizationData.labels.push(tick);
            data.forEach((capacityInstance, label) => {
                const capacityUtilization = capacityInstance.capacity.reduce((a, b) => a + b, 0);
                if (!finalDataMap.has(label)) {
                    finalDataMap.set(label, { color: capacityInstance.color, label: label, capacity: [] });
                }
                finalDataMap.get(label).capacity.push(capacityUtilization);
            });
        });
        this.capacityUtilizationData.datasets = [];
        finalDataMap.forEach(finalDataMapInstance => {
            this.capacityUtilizationData.datasets.push({
                label: finalDataMapInstance.label,
                data: finalDataMapInstance.capacity,
                backgroundColor: finalDataMapInstance.color
            });
        });
    }
    processBottlenecks() {
        this.activeBottlenecksData.datasets = [];
        this.activeBottlenecksData.labels = [];
        let taskMap = new Map();
        this.specificationDataContainers?.forEach((specificationDataContainer, key) => {
            let label = [specificationDataContainer.specificationInformation.uri,
                specificationDataContainer.specificationInformation.specversion];
            let colorMap = new Map();
            specificationDataContainer.specificationStatistic.taskStatisticDTOS.forEach(taskStatistic => {
                colorMap.set(taskStatistic.taskid, taskStatistic.color);
            });
            specificationDataContainer.specificationStatistic.caseStatisticDTOS.forEach(caseStatistic => {
                if (caseStatistic.end === 0 && !caseStatistic.cancelled) {
                    caseStatistic.queue.forEach(workitem => {
                        if (workitem.status === 'Offered' || workitem.status === 'Allocated') {
                            if (!taskMap.has(workitem.taskid)) {
                                taskMap.set(workitem.taskid, { color: colorMap.get(workitem.taskid), queueCount: [0, 0, 0] });
                            }
                            taskMap.get(workitem.taskid).queueCount[key]++;
                        }
                    });
                }
            });
            this.activeBottlenecksData.labels?.push(label);
        });
        taskMap.forEach((task, id) => {
            this.activeBottlenecksData.datasets.push({
                label: id,
                data: task.queueCount,
                backgroundColor: task.color
            });
        });
        this.activeBottlenecksData.datasets = this.activeBottlenecksData.datasets.sort((a, b) => a.label.localeCompare(b.label));
    }
    processPastBottlenecks() {
        // Jahr, Monat, Tag, Stunde
        let workitemsSorted = [];
        this.specificationDataContainers?.forEach((specificationDataContainer) => {
            specificationDataContainer.specificationStatistic.caseStatisticDTOS.forEach(caseStatistic => {
                if (_common_util_statistic_utils__WEBPACK_IMPORTED_MODULE_1__.StatisticUtils.timestampIsInDateRange(caseStatistic.start, this.range)) {
                    caseStatistic.workitemDTOS.forEach(workitem => {
                        if (!workitem.automated) {
                            let created = (workitem.offeredTimestamp === 0) ? workitem.allocatedTimestamp : workitem.offeredTimestamp;
                            if (created !== 0 && workitem.startTimestamp !== 0) {
                                workitemsSorted.push({ timestamp: created, taskid: workitem.taskid, change: 1 });
                                workitemsSorted.push({ timestamp: workitem.startTimestamp, taskid: workitem.taskid, change: -1 });
                            }
                        }
                    });
                }
            });
        });
        workitemsSorted.sort((a, b) => (a.timestamp < b.timestamp) ? -1 : 1);
        this.pastBottlenecksData.labels = [];
        let yDataArray = [];
        let start = this.range.value.start?.getTime();
        let end = this.range.value.end?.getTime();
        let tick = 1000 * 60 * 60; // hours
        if (start !== 0 && start !== undefined && end !== 0 && end !== undefined) {
            // Zeiträum größer als 4 Jahre unzulässig
            if (end - start > (1000 * 60 * 60 * 24 * 29 * 12 * 4)) {
                end = Date.now();
                start = end - (1000 * 60 * 60 * 24 * 29 * 12 * 4);
            }
            let taskTimestampIndex = 0;
            let status = new Map();
            for (let timeIndex = start; timeIndex < end; timeIndex += tick) {
                while (taskTimestampIndex < workitemsSorted.length
                    && workitemsSorted[taskTimestampIndex].timestamp < timeIndex) {
                    if (!status.has(workitemsSorted[taskTimestampIndex].taskid)) {
                        status.set(workitemsSorted[taskTimestampIndex].taskid, 0);
                    }
                    status.set(workitemsSorted[taskTimestampIndex].taskid, status.get(workitemsSorted[taskTimestampIndex].taskid) + workitemsSorted[taskTimestampIndex].change);
                    taskTimestampIndex++;
                }
                this.pastBottlenecksData.labels.push(timeIndex);
                let count = 0;
                status.forEach(stat => {
                    count += stat;
                });
                yDataArray.push(count);
            }
        }
        this.pastBottlenecksData.datasets = [];
        this.pastBottlenecksData.datasets.push({
            data: yDataArray
        });
    }
    processAutomation() {
        this.automationCandidatesData.datasets = [];
        this.automationCandidatesData.labels = [];
        let ratioLabels = [];
        let colors = [];
        let ratios = [];
        let taskMap = new Map();
        this.specificationDataContainers?.forEach((specificationDataContainer, key) => {
            ratioLabels.push([specificationDataContainer.specificationInformation.uri,
                specificationDataContainer.specificationInformation.specversion]);
            colors.push(specificationDataContainer.specificationStatistic.color);
            ratios.push(specificationDataContainer.specificationStatistic.automationPercentage);
            let label = [specificationDataContainer.specificationInformation.uri,
                specificationDataContainer.specificationInformation.specversion];
            specificationDataContainer.specificationStatistic.taskStatisticDTOS.forEach(taskStatistic => {
                if (!taskStatistic.automated) {
                    if (!taskMap.has(taskStatistic.taskid)) {
                        taskMap.set(taskStatistic.taskid, { color: taskStatistic.color, avgTime: [0, 0, 0] });
                    }
                    taskMap.get(taskStatistic.taskid).avgTime[key] = taskStatistic.avgCompletionTime;
                }
            });
            this.automationCandidatesData.labels?.push(label);
        });
        taskMap.forEach((task, id) => {
            this.automationCandidatesData.datasets.push({
                label: id,
                data: task.avgTime,
                backgroundColor: task.color
            });
        });
        this.automationCandidatesData.datasets = this.automationCandidatesData.datasets.sort((a, b) => a.label.localeCompare(b.label));
        let backgroundFunction = function (context) {
            return colors[context.dataIndex];
        };
        this.automationRatioData.labels = ratioLabels;
        this.automationRatioData.datasets = [];
        this.automationRatioData.datasets.push({
            label: "Automation ratio",
            data: ratios,
            backgroundColor: backgroundFunction
        });
    }
    processResourceRadars() {
        let resources = this.specificationDataContainers.at(0).resources;
        let roles = new Map;
        let capabilities = new Map;
        let positions = new Map;
        resources.forEach(resource => {
            resource.capabilities.forEach(capability => {
                if (!capabilities.has(capability.name)) {
                    capabilities.set(capability.name, 0);
                }
                capabilities.set(capability.name, capabilities.get(capability.name) + 1);
            });
            resource.roles.forEach(role => {
                if (!roles.has(role.name)) {
                    roles.set(role.name, 0);
                }
                roles.set(role.name, roles.get(role.name) + 1);
            });
            resource.positions.forEach(position => {
                if (!positions.has(position.title)) {
                    positions.set(position.title, 0);
                }
                positions.set(position.title, positions.get(position.title) + 1);
            });
        });
        let taskCount = 0;
        let rolesDemand = new Map([...roles.keys()].map(key => [key, 0]));
        let capabilitiesDemand = new Map([...capabilities.keys()].map(key => [key, 0]));
        let positionsDemand = new Map([...positions.keys()].map(key => [key, 0]));
        let totalTimeSpentWithRoles = new Map([...roles.keys()].map(key => [key, 0]));
        let totalTimeSpentWithCapabilities = new Map([...capabilities.keys()].map(key => [key, 0]));
        let totalTimeSpentWithPositions = new Map([...positions.keys()].map(key => [key, 0]));
        this.specificationDataContainers?.forEach(specificationDataContainer => {
            taskCount += specificationDataContainer.specificationStatistic.taskStatisticDTOS.length;
            specificationDataContainer.specificationStatistic.taskStatisticDTOS.forEach(taskStatistic => {
                taskStatistic.demandedRoles.forEach(role => {
                    if (!rolesDemand.has(role.name)) {
                        rolesDemand.set(role.name, 0);
                    }
                    rolesDemand.set(role.name, rolesDemand.get(role.name) + 1);
                });
                taskStatistic.demandedCapabilities.forEach(capability => {
                    if (!capabilitiesDemand.has(capability.name)) {
                        capabilitiesDemand.set(capability.name, 0);
                    }
                    capabilitiesDemand.set(capability.name, capabilitiesDemand.get(capability.name) + 1);
                });
                taskStatistic.demandedPositions.forEach(position => {
                    if (!positionsDemand.has(position.title)) {
                        positionsDemand.set(position.title, 0);
                    }
                    positionsDemand.set(position.title, positionsDemand.get(position.title) + 1);
                });
                if (taskStatistic.assocRoleTime !== undefined && Object.keys(taskStatistic.assocRoleTime).length !== 0) {
                    Object.entries(taskStatistic.assocRoleTime).forEach((keyValue) => {
                        if (!totalTimeSpentWithRoles.has(keyValue[0])) {
                            totalTimeSpentWithRoles.set(keyValue[0], 0);
                        }
                        totalTimeSpentWithRoles.set(keyValue[0], totalTimeSpentWithRoles.get(keyValue[0]) + keyValue[1]);
                    });
                }
                if (taskStatistic.assocCapabilityTime !== undefined && Object.keys(taskStatistic.assocCapabilityTime).length !== 0) {
                    Object.entries(taskStatistic.assocCapabilityTime).forEach((keyValue) => {
                        if (!totalTimeSpentWithCapabilities.has(keyValue[0])) {
                            totalTimeSpentWithCapabilities.set(keyValue[0], 0);
                        }
                        totalTimeSpentWithCapabilities.set(keyValue[0], totalTimeSpentWithCapabilities.get(keyValue[0]) + keyValue[1]);
                    });
                }
                if (taskStatistic.assocPositionTime !== undefined && Object.keys(taskStatistic.assocPositionTime).length !== 0) {
                    Object.entries(taskStatistic.assocPositionTime).forEach((keyValue) => {
                        if (!totalTimeSpentWithPositions.has(keyValue[0])) {
                            totalTimeSpentWithPositions.set(keyValue[0], 0);
                        }
                        totalTimeSpentWithPositions.set(keyValue[0], totalTimeSpentWithPositions.get(keyValue[0]) + keyValue[1]);
                    });
                }
            });
        });
        // Distributions
        this.roleDistributionData.labels = Array.from(roles.keys());
        this.roleDistributionData.datasets = [];
        this.roleDistributionData.datasets.push({
            label: "Quantity", data: Array.from(roles.values()), fill: true,
            backgroundColor: _common_util_color_util__WEBPACK_IMPORTED_MODULE_3__.ColorUtils.getTransparentColor(_common_util_color_util__WEBPACK_IMPORTED_MODULE_3__.ColorUtils.getMuchLighterColor(_common_util_color_util__WEBPACK_IMPORTED_MODULE_3__.ColorUtils.getPrimaryColor()))
        });
        this.capabilityDistributionData.labels = Array.from(capabilities.keys());
        this.capabilityDistributionData.datasets = [];
        this.capabilityDistributionData.datasets.push({
            label: "Quantity", data: Array.from(capabilities.values()), fill: true,
            backgroundColor: _common_util_color_util__WEBPACK_IMPORTED_MODULE_3__.ColorUtils.getTransparentColor(_common_util_color_util__WEBPACK_IMPORTED_MODULE_3__.ColorUtils.getMuchLighterColor(_common_util_color_util__WEBPACK_IMPORTED_MODULE_3__.ColorUtils.getPrimaryColor()))
        });
        this.positionDistributionData.labels = Array.from(positions.keys());
        this.positionDistributionData.datasets = [];
        this.positionDistributionData.datasets.push({
            label: "Quantity", data: Array.from(positions.values()), fill: true,
            backgroundColor: _common_util_color_util__WEBPACK_IMPORTED_MODULE_3__.ColorUtils.getTransparentColor(_common_util_color_util__WEBPACK_IMPORTED_MODULE_3__.ColorUtils.getMuchLighterColor(_common_util_color_util__WEBPACK_IMPORTED_MODULE_3__.ColorUtils.getPrimaryColor()))
        });
        // Configurations
        this.configuredRolesData.labels = Array.from(rolesDemand.keys());
        this.configuredRolesData.datasets = [];
        this.configuredRolesData.datasets.push({
            label: "Quantity", data: Array.from(rolesDemand.values()), fill: true,
            backgroundColor: _common_util_color_util__WEBPACK_IMPORTED_MODULE_3__.ColorUtils.getTransparentColor(_common_util_color_util__WEBPACK_IMPORTED_MODULE_3__.ColorUtils.getMuchLighterColor(_common_util_color_util__WEBPACK_IMPORTED_MODULE_3__.ColorUtils.getPrimaryColor()))
        });
        this.configuredCapabilitiesData.labels = Array.from(capabilitiesDemand.keys());
        this.configuredCapabilitiesData.datasets = [];
        this.configuredCapabilitiesData.datasets.push({
            label: "Quantity", data: Array.from(capabilitiesDemand.values()), fill: true,
            backgroundColor: _common_util_color_util__WEBPACK_IMPORTED_MODULE_3__.ColorUtils.getTransparentColor(_common_util_color_util__WEBPACK_IMPORTED_MODULE_3__.ColorUtils.getMuchLighterColor(_common_util_color_util__WEBPACK_IMPORTED_MODULE_3__.ColorUtils.getPrimaryColor()))
        });
        this.configuredPositionsData.labels = Array.from(positionsDemand.keys());
        this.configuredPositionsData.datasets = [];
        this.configuredPositionsData.datasets.push({
            label: "Quantity", data: Array.from(positionsDemand.values()), fill: true,
            backgroundColor: _common_util_color_util__WEBPACK_IMPORTED_MODULE_3__.ColorUtils.getTransparentColor(_common_util_color_util__WEBPACK_IMPORTED_MODULE_3__.ColorUtils.getMuchLighterColor(_common_util_color_util__WEBPACK_IMPORTED_MODULE_3__.ColorUtils.getPrimaryColor()))
        });
        // Utilizations
        this.roleUtilizationData.labels = Array.from(totalTimeSpentWithRoles.keys());
        this.roleUtilizationData.datasets = [];
        this.roleUtilizationData.datasets.push({
            label: "Quantity", data: Array.from(totalTimeSpentWithRoles.values()), fill: true,
            backgroundColor: _common_util_color_util__WEBPACK_IMPORTED_MODULE_3__.ColorUtils.getTransparentColor(_common_util_color_util__WEBPACK_IMPORTED_MODULE_3__.ColorUtils.getMuchLighterColor(_common_util_color_util__WEBPACK_IMPORTED_MODULE_3__.ColorUtils.getPrimaryColor()))
        });
        this.capabilityUtilizationData.labels = Array.from(totalTimeSpentWithCapabilities.keys());
        this.capabilityUtilizationData.datasets = [];
        this.capabilityUtilizationData.datasets.push({
            label: "Quantity", data: Array.from(totalTimeSpentWithCapabilities.values()), fill: true,
            backgroundColor: _common_util_color_util__WEBPACK_IMPORTED_MODULE_3__.ColorUtils.getTransparentColor(_common_util_color_util__WEBPACK_IMPORTED_MODULE_3__.ColorUtils.getMuchLighterColor(_common_util_color_util__WEBPACK_IMPORTED_MODULE_3__.ColorUtils.getPrimaryColor()))
        });
        this.positionUtilizationData.labels = Array.from(totalTimeSpentWithPositions.keys());
        this.positionUtilizationData.datasets = [];
        this.positionUtilizationData.datasets.push({
            label: "Quantity", data: Array.from(totalTimeSpentWithPositions.values()), fill: true,
            backgroundColor: _common_util_color_util__WEBPACK_IMPORTED_MODULE_3__.ColorUtils.getTransparentColor(_common_util_color_util__WEBPACK_IMPORTED_MODULE_3__.ColorUtils.getMuchLighterColor(_common_util_color_util__WEBPACK_IMPORTED_MODULE_3__.ColorUtils.getPrimaryColor()))
        });
    }
}
SpecificationStatisticViewComponent.ɵfac = function SpecificationStatisticViewComponent_Factory(t) { return new (t || SpecificationStatisticViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__.LiveAnnouncer), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_yawl_resources_services_specification_data_service__WEBPACK_IMPORTED_MODULE_4__.SpecificationDataService)); };
SpecificationStatisticViewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: SpecificationStatisticViewComponent, selectors: [["app-specification-statistic-view"]], decls: 125, vars: 71, consts: [["appearance", "legacy", 3, "valueChange"], ["value", "performance", 3, "checked"], ["value", "capacity"], ["value", "resources"], ["appearance", "legacy"], [3, "formGroup", "rangePicker"], ["matStartDate", "", "formControlName", "start", "placeholder", "Start date", 3, "dateChange"], ["matEndDate", "", "formControlName", "end", "placeholder", "End date", 3, "dateChange"], [4, "ngIf"], ["style", "color: darkred", 4, "ngIf"], ["matSuffix", "", 3, "for"], ["picker", ""], [3, "value", "valueChange"], [3, "value"], ["appearance", "legacy", 4, "ngIf"], [3, "hidden"], ["cols", "5", "rowHeight", "2:1", 3, "gutterSize"], ["rowspan", "2", "colspan", "2"], [1, "statistic-container"], [1, "statistic-title"], [1, "statistic-title-text"], [1, "statistic-title-info"], ["icon", "circle-info", 3, "fixedWidth", "matTooltip"], [1, "statistic-body", "ngx-charts-small-text"], [1, "statistic-graph"], [1, "chart-capsule", 3, "type", "datasets", "options"], ["rowspan", "2"], ["icon", "circle-info", "matTooltip", "This chart shows the minimum, maximum and average runtime for all cases of a corresponding process.\n                      Cancelled and uncompleted cases excluded.", 3, "fixedWidth"], [1, "chart-capsule", 3, "type", "datasets", "labels", "options"], ["icon", "circle-info", "matTooltip", "This chart shows the queue size for each hour in the specified time window. The\n                                 queue size is the sum of all offered or allocated, but not started work items\n                                 at a given hour. Please note that the maximum time span for this chart is 4 years.", 3, "fixedWidth"], ["icon", "circle-info", "matTooltip", "This chart shows the sum of offered or allocated work items of a certain type\n                                  waiting to be processed.", 3, "fixedWidth"], ["icon", "circle-info", "matTooltip", "This chart shows the automation ratio for each process. This ratio is calculated\n                     by dividing the number of automated tasks of a corresponding process by the number of all its tasks.", 3, "fixedWidth"], ["icon", "circle-info", "matTooltip", "This chart shows all tasks for each process and illustrates how much time our\n                                 resources spent on average on one of these tasks. This average time is calculated for\n                                 each task by dividing the sum of the time spans between the start and completion of all\n                                 corresponding work items by the number of work items. Automated tasks and cancelled\n                                 work items excluded.", 3, "fixedWidth"], ["rowspan", "2", 4, "ngIf"], [2, "color", "darkred"], ["icon", "circle-info", "matTooltip", "This chart shows for each role the sum of our resources currently having this role.", 3, "fixedWidth"], ["icon", "circle-info", "matTooltip", "This chart shows for each capability the sum of our resources currently possessing this capability.", 3, "fixedWidth"], ["icon", "circle-info", "matTooltip", "This chart shows for each position the sum of our resources currently having this position.", 3, "fixedWidth"], ["icon", "circle-info", "matTooltip", "This chart shows for each role the sum of tasks requiring it.", 3, "fixedWidth"], ["icon", "circle-info", "matTooltip", "This chart shows for each capability the sum of tasks requiring it.", 3, "fixedWidth"], ["icon", "circle-info", "matTooltip", "This chart shows for each position the sum of tasks requiring it.", 3, "fixedWidth"], ["icon", "circle-info", "matTooltip", "This chart shows the summed resource time for each role for all work items in all\n                     processes. This time can be an indication of which role was needed most for our processes.\n                     The resource times of all work items contribute to this time, where the resource that started\n                     the work item had the corresponding role. The resource time is calculated from the time that\n                     elapsed between the start and completion of a work item. In the case that a work item took longer\n                     than two days to complete, each work day contributes 8 hours of resource time.", 3, "fixedWidth"], ["icon", "circle-info", "matTooltip", "This chart shows the summed resource time for each capability for all work items in all\n                     processes. This time can be an indication of which capability was needed most for our processes.\n                     The resource times of all work items contribute to this time, where the resource that started\n                     the work item had the corresponding capability. The resource time is calculated from the time that\n                     elapsed between the start and completion of a work item. In the case that a work item took longer\n                     than two days to complete, each work day contributes 8 hours of resource time.", 3, "fixedWidth"], ["icon", "circle-info", "matTooltip", "This chart shows the summed resource time for each position for all work items in all\n                     processes. This time can be an indication of which position was needed most for our processes.\n                     The resource times of all work items contribute to this time, where the resource that started\n                     the work item had the corresponding position. The resource time is calculated from the time that\n                     elapsed between the start and completion of a work item. In the case that a work item took longer\n                     than two days to complete, each work day contributes 8 hours of resource time.", 3, "fixedWidth"]], template: function SpecificationStatisticViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p")(1, "mat-button-toggle-group", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("valueChange", function SpecificationStatisticViewComponent_Template_mat_button_toggle_group_valueChange_1_listener($event) { return ctx.selectStatistic($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "mat-button-toggle", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Performance");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "mat-button-toggle", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Capacity");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "mat-button-toggle", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Resources");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "mat-form-field", 4)(9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Select statistic range");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "mat-date-range-input", 5)(12, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("dateChange", function SpecificationStatisticViewComponent_Template_input_dateChange_12_listener() { return ctx.updateData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("dateChange", function SpecificationStatisticViewComponent_Template_input_dateChange_13_listener() { return ctx.updateData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, SpecificationStatisticViewComponent_mat_hint_14_Template, 2, 1, "mat-hint", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, SpecificationStatisticViewComponent_mat_hint_15_Template, 2, 1, "mat-hint", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "mat-datepicker-toggle", 10)(17, "mat-date-range-picker", null, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, SpecificationStatisticViewComponent_mat_error_19_Template, 2, 0, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, SpecificationStatisticViewComponent_mat_error_20_Template, 2, 0, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "mat-form-field", 4)(22, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "Statistic fineness");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "mat-select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("valueChange", function SpecificationStatisticViewComponent_Template_mat_select_valueChange_24_listener($event) { return ctx.fineness = $event; })("valueChange", function SpecificationStatisticViewComponent_Template_mat_select_valueChange_24_listener() { return ctx.updateData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](29, SpecificationStatisticViewComponent_mat_form_field_29_Template, 10, 7, "mat-form-field", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "div", 15)(31, "mat-grid-list", 16)(32, "mat-grid-tile", 17)(33, "div", 18)(34, "div", 19)(35, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36, "How long do our cases run on average?");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](38, "fa-icon", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "div", 23)(40, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](41, "app-chart-capsule", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "mat-grid-tile", 26)(43, "div", 18)(44, "div", 19)(45, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](46, "How severe are our process outliers?");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](48, "fa-icon", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "div", 23)(50, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](51, "app-chart-capsule", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "mat-grid-tile", 17)(53, "div", 18)(54, "div", 19)(55, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](56, "How successful are our cases?");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](57, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](58, "fa-icon", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "div", 23)(60, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](61, "app-chart-capsule", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](62, "div", 15)(63, "mat-grid-list", 16)(64, "mat-grid-tile", 17)(65, "div", 18)(66, "div", 19)(67, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](68, "How high is our capacity utilization?");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](69, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](70, "fa-icon", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](71, "div", 23)(72, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](73, "app-chart-capsule", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](74, "mat-grid-tile", 17)(75, "div", 18)(76, "div", 19)(77, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](78, "When did we encounter bottlenecks?");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](79, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](80, "fa-icon", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](81, "div", 23)(82, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](83, "app-chart-capsule", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](84, "mat-grid-tile", 26)(85, "div", 18)(86, "div", 19)(87, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](88, "Where do we currently encounter bottlenecks?");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](89, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](90, "fa-icon", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](91, "div", 23)(92, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](93, "app-chart-capsule", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](94, "div", 15)(95, "mat-grid-list", 16)(96, "mat-grid-tile", 26)(97, "div", 18)(98, "div", 19)(99, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](100, "How automated are our processes?");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](101, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](102, "fa-icon", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](103, "div", 23)(104, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](105, "app-chart-capsule", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](106, "mat-grid-tile", 26)(107, "div", 18)(108, "div", 19)(109, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](110, "Where is further automation effective?");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](111, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](112, "fa-icon", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](113, "div", 23)(114, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](115, "app-chart-capsule", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](116, SpecificationStatisticViewComponent_mat_grid_tile_116_Template, 10, 5, "mat-grid-tile", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](117, SpecificationStatisticViewComponent_mat_grid_tile_117_Template, 10, 5, "mat-grid-tile", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](118, SpecificationStatisticViewComponent_mat_grid_tile_118_Template, 10, 5, "mat-grid-tile", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](119, SpecificationStatisticViewComponent_mat_grid_tile_119_Template, 10, 5, "mat-grid-tile", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](120, SpecificationStatisticViewComponent_mat_grid_tile_120_Template, 10, 5, "mat-grid-tile", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](121, SpecificationStatisticViewComponent_mat_grid_tile_121_Template, 10, 5, "mat-grid-tile", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](122, SpecificationStatisticViewComponent_mat_grid_tile_122_Template, 10, 5, "mat-grid-tile", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](123, SpecificationStatisticViewComponent_mat_grid_tile_123_Template, 10, 5, "mat-grid-tile", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](124, SpecificationStatisticViewComponent_mat_grid_tile_124_Template, 10, 5, "mat-grid-tile", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("checked", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.range)("rangePicker", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.casesInRange !== 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.casesInRange === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("for", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.range.controls.start.hasError("matStartDateInvalid"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.range.controls.end.hasError("matEndDateInvalid"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx.fineness);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", "month");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"]("month");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", "year");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"]("year");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.statisticSelection === "resources");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", ctx.statisticSelection !== "performance");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("gutterSize", "8px");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate1"]("matTooltip", "This chart shows the average runtime of all cases\n                     that were started in the corresponding ", ctx.fineness === "month" ? "monthly" : "annual", " period.\n                     Cancelled and uncompleted cases excluded.");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("fixedWidth", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("type", "bubble")("datasets", ctx.specPerformanceComparisonData)("options", ctx.specPerformanceOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("fixedWidth", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("type", "bar")("datasets", ctx.specOutlierData.datasets)("labels", ctx.specOutlierData.labels)("options", ctx.specOutlierOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate1"]("matTooltip", "This chart shows the overall success and deadline fulfilled ratio for cases\n                     that were started in the corresponding ", ctx.fineness === "month" ? "monthly" : "annual", " period.\n                     A successful case has not been cancelled. A case has met its deadline if its runtime is shorter\n                     than the specification time limit of its process. Uncompleted cases excluded.");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("fixedWidth", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("type", "bar")("datasets", ctx.overallIndicatorData.datasets)("labels", ctx.overallIndicatorData.labels)("options", ctx.overallIndicatorOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", ctx.statisticSelection !== "capacity");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("gutterSize", "8px");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate1"]("matTooltip", "This chart shows the overall capacity utilization for\n                                ", ctx.fineness === "month" ? "monthly" : "annual", " periods.\n                                Each capacity utilization value is calculated from the sum of all work item\n                                durations started in the corresponding period. A work item duration is the\n                                time elapsed between start and completion. In the case where a work item was\n                                completed over a period of several days, 8 hours of resource time was allocated\n                                to each day. Cancelled cases and cancelled or automated work items were excluded.");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("fixedWidth", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("type", "bar")("datasets", ctx.capacityUtilizationData.datasets)("labels", ctx.capacityUtilizationData.labels)("options", ctx.capacityUtilizationOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("fixedWidth", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("type", "line")("datasets", ctx.pastBottlenecksData.datasets)("labels", ctx.pastBottlenecksData.labels)("options", ctx.pastBottlenecksOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("fixedWidth", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("type", "bar")("datasets", ctx.activeBottlenecksData.datasets)("labels", ctx.activeBottlenecksData.labels)("options", ctx.activeBottlenecksOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", ctx.statisticSelection !== "resources");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("gutterSize", "8px");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("fixedWidth", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("type", "bar")("datasets", ctx.automationRatioData.datasets)("labels", ctx.automationRatioData.labels)("options", ctx.automationRatioOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("fixedWidth", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("type", "bar")("datasets", ctx.automationCandidatesData.datasets)("labels", ctx.automationCandidatesData.labels)("options", ctx.automationCandidatesOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.statisticResourceSelection === "role");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.statisticResourceSelection === "capability");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.statisticResourceSelection === "position");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.statisticResourceSelection === "role");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.statisticResourceSelection === "capability");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.statisticResourceSelection === "position");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.statisticResourceSelection === "role");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.statisticResourceSelection === "capability");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.statisticResourceSelection === "position");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_10__.MatButtonToggleGroup, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_10__.MatButtonToggle, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__.MatDatepickerToggle, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__.MatDateRangeInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__.MatStartDate, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__.MatEndDate, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__.MatDateRangePicker, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatHint, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatSuffix, _angular_material_select__WEBPACK_IMPORTED_MODULE_13__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MatOption, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__.MatTooltip, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_16__.FaIconComponent, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__.MatGridList, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__.MatGridTile, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _chart_capsule_chart_capsule_component__WEBPACK_IMPORTED_MODULE_5__.ChartCapsuleComponent], styles: [".mat-grid-tile[_ngcontent-%COMP%] {\r\n  border-radius: 2px;\r\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 3px;\r\n}\r\n.mat-form-field[_ngcontent-%COMP%] {\r\n  margin-left: 2em;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwZWNpZmljYXRpb24tc3RhdGlzdGljLXZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw0QkFBNEI7QUFDNUI7RUFDRSxrQkFBa0I7RUFDbEIsMkNBQTJDO0FBQzdDO0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3BlY2lmaWNhdGlvbi1zdGF0aXN0aWMtdmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQGF1dGhvciBSb2JpbiBTdGVpbndhcnogKi9cclxuLm1hdC1ncmlkLXRpbGUge1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTYpIDBweCAxcHggM3B4O1xyXG59XHJcblxyXG4ubWF0LWZvcm0tZmllbGQge1xyXG4gIG1hcmdpbi1sZWZ0OiAyZW07XHJcbn1cclxuXHJcbiJdfQ== */"] });


/***/ }),

/***/ 65799:
/*!**********************************************************************************!*\
  !*** ./src/app/dashboard-new/specification-view/specification-view.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpecificationViewComponent": () => (/* binding */ SpecificationViewComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sort */ 92197);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/a11y */ 24218);
/* harmony import */ var _yawl_resources_services_specification_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../yawl/resources/services/specification-data.service */ 81966);
/* harmony import */ var _yawl_resources_services_extension_specification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../yawl/resources/services/extension-specification.service */ 56469);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/slide-toggle */ 84714);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 19200);















function SpecificationViewComponent_th_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Color ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SpecificationViewComponent_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "fa-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("color", element_r22.specificationStatistic.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fixedWidth", true);
} }
function SpecificationViewComponent_th_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " URI ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SpecificationViewComponent_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](element_r23.specificationInformation.uri);
} }
function SpecificationViewComponent_th_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Specification Version ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SpecificationViewComponent_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r24.specificationInformation.specversion, " ");
} }
function SpecificationViewComponent_th_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Documentation ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SpecificationViewComponent_td_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r25.specificationInformation.description, " ");
} }
function SpecificationViewComponent_th_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Uploaded ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SpecificationViewComponent_td_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SpecificationViewComponent_th_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Total Cases ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SpecificationViewComponent_td_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", element_r27.specificationStatistic.caseStatisticDTOS.length, " ");
} }
function SpecificationViewComponent_th_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Active Cases ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SpecificationViewComponent_td_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](element_r28.specificationInformation.activeCasesCount);
} }
function SpecificationViewComponent_th_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Core ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SpecificationViewComponent_td_35_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 30)(1, "mat-slide-toggle", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function SpecificationViewComponent_td_35_Template_mat_slide_toggle_change_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r31); const element_r29 = restoredCtx.$implicit; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r30.checkCore(element_r29)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const element_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("checked", element_r29.extensionSpecification.core);
} }
function SpecificationViewComponent_th_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Actions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function SpecificationViewComponent_td_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 30)(1, "a", 40)(2, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "fa-icon", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const element_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate3"]("href", "/#/dashboard/specification/", element_r32.specificationInformation.uri, "/", element_r32.specificationInformation.id, "/", element_r32.specificationInformation.specversion, "", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fixedWidth", true);
} }
function SpecificationViewComponent_tr_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 43);
} }
function SpecificationViewComponent_tr_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tr", 44);
} }
function SpecificationViewComponent_tr_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 45)(1, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Empty table ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("colspan", ctx_r21.displayedColumns.length);
} }
/**
 * @author Robin Steinwarz
 */
class SpecificationViewComponent {
    constructor(_liveAnnouncer, specificationDataService, extensionSpecificationService) {
        this._liveAnnouncer = _liveAnnouncer;
        this.specificationDataService = specificationDataService;
        this.extensionSpecificationService = extensionSpecificationService;
        this.specificationsURL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.env.remoteUIUrl;
        this.displayedColumns = ['color', 'uri', 'specversion', 'documentation', 'casesCount', 'activeCasesCount', 'actions'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTableDataSource();
        this.specificationDataContainer = undefined;
    }
    ngOnInit() {
        this.specificationDataService.getSpecificationsData().subscribe(specificationDataContainers => {
            this.dataSource.data = specificationDataContainers;
            this.specificationDataContainer = specificationDataContainers;
        });
    }
    ngAfterViewInit() {
        this.dataSource.sort = this.sort;
        this.dataSource.sortingDataAccessor = (row, key) => {
            switch (key) {
                case 'uri':
                    return row.specificationInformation.uri;
                case 'specversion':
                    return row.specificationInformation.specversion;
                case 'documentation':
                    return row.specificationInformation.description;
                case 'casesCount':
                    return row.specificationStatistic.caseStatisticDTOS.length;
                case 'activeCasesCount':
                    return row.specificationInformation.activeCasesCount;
                case 'core':
                    return row.extensionSpecification.core;
                default:
                    return row.specificationInformation.specversion;
            }
        };
    }
    checkCore(specification) {
        let willBeCoreSpecification = false;
        // @ts-ignore
        if (specification.extensionSpecification.core === false) {
            willBeCoreSpecification = true;
        }
        // @ts-ignore
        specification.extensionSpecification.core = willBeCoreSpecification;
        let id = specification.specificationInformation.id;
        let uri = specification.specificationInformation.uri;
        let version = specification.specificationInformation.specversion;
        // @ts-ignore
        this.extensionSpecificationService.setCoreAttribute(id, version, uri, willBeCoreSpecification).subscribe();
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        // @ts-ignore
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    /** Announce the change in sort state for assistive technology. */
    announceSortChange(sort) {
        const isAsc = sort.direction === 'asc';
        if (sort.direction === '') {
            this.dataSource?.data.sort((a, b) => this.compare(a.specificationInformation.uri, b.specificationInformation.uri, true));
        }
        return;
    }
    compare(a, b, isAsc) {
        return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }
}
SpecificationViewComponent.ɵfac = function SpecificationViewComponent_Factory(t) { return new (t || SpecificationViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__.LiveAnnouncer), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_yawl_resources_services_specification_data_service__WEBPACK_IMPORTED_MODULE_1__.SpecificationDataService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_yawl_resources_services_extension_specification_service__WEBPACK_IMPORTED_MODULE_2__.ExtensionSpecificationService)); };
SpecificationViewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SpecificationViewComponent, selectors: [["app-specification-view"]], viewQuery: function SpecificationViewComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_6__.MatSort, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 43, vars: 5, consts: [[2, "font-size", "14px"], ["target", "_blank", 3, "href"], ["icon", "pencil", "matTooltip", "Redirect to yawl dashboard.", 3, "fixedWidth"], [1, "mat-mdc-form-field"], ["matInput", "", "type", "text", "placeholder", "", 3, "keyup"], ["input", ""], ["mat-table", "", "matSort", "", "matSortActive", "uri", "matSortDirection", "asc", 1, "mat-elevation-z8", 3, "dataSource", "matSortChange"], ["matColumnDef", "color"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "uri"], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by uri", 4, "matHeaderCellDef"], ["matColumnDef", "specversion"], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by specification version", 4, "matHeaderCellDef"], ["matColumnDef", "documentation"], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by documentation", 4, "matHeaderCellDef"], ["matColumnDef", "uploaded"], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by uploaded", 4, "matHeaderCellDef"], ["matColumnDef", "casesCount"], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by cases", 4, "matHeaderCellDef"], ["matColumnDef", "activeCasesCount"], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by active caseDTOS", 4, "matHeaderCellDef"], ["matColumnDef", "core"], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by core", 4, "matHeaderCellDef"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], [1, "bottom-page-margin"], ["mat-header-cell", ""], ["mat-cell", ""], ["icon", "square", "matTooltip", "This is the color associated with the specification.", 3, "fixedWidth"], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by uri"], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by specification version"], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by documentation"], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by uploaded"], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by cases"], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by active caseDTOS"], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by core"], [3, "checked", "change"], [3, "href"], ["mat-raised-button", ""], ["icon", "arrow-turn-up", "matTooltip", "Redirect to the details page of the specification.", 1, "deg90", 3, "fixedWidth"], ["mat-header-row", ""], ["mat-row", ""], [1, "mat-row"], [1, "mat-cell", 2, "text-align", "center", "color", "#5e5e5e"]], template: function SpecificationViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Instances ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "fa-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-form-field", 3)(7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keyup", function SpecificationViewComponent_Template_input_keyup_9_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("matSortChange", function SpecificationViewComponent_Template_table_matSortChange_11_listener($event) { return ctx.announceSortChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](12, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, SpecificationViewComponent_th_13_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, SpecificationViewComponent_td_14_Template, 2, 3, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](15, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, SpecificationViewComponent_th_16_Template, 2, 0, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, SpecificationViewComponent_td_17_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](18, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, SpecificationViewComponent_th_19_Template, 2, 0, "th", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, SpecificationViewComponent_td_20_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](21, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, SpecificationViewComponent_th_22_Template, 2, 0, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, SpecificationViewComponent_td_23_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](24, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, SpecificationViewComponent_th_25_Template, 2, 0, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, SpecificationViewComponent_td_26_Template, 2, 0, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](27, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, SpecificationViewComponent_th_28_Template, 2, 0, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, SpecificationViewComponent_td_29_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](30, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, SpecificationViewComponent_th_31_Template, 2, 0, "th", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, SpecificationViewComponent_td_32_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](33, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](34, SpecificationViewComponent_th_34_Template, 2, 0, "th", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](35, SpecificationViewComponent_td_35_Template, 2, 1, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](36, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](37, SpecificationViewComponent_th_37_Template, 2, 0, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](38, SpecificationViewComponent_td_38_Template, 5, 4, "td", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](39, SpecificationViewComponent_tr_39_Template, 1, 0, "tr", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](40, SpecificationViewComponent_tr_40_Template, 1, 0, "tr", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](41, SpecificationViewComponent_tr_41_Template, 3, 1, "tr", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](42, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("href", ctx.specificationsURL, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fixedWidth", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, dependencies: [_angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_7__.MatSlideToggle, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInput, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatNoDataRow, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__.MatTooltip, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__.FaIconComponent, _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__.MatSortHeader], styles: ["table[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\nth.mat-sort-header-sorted[_ngcontent-%COMP%] {\r\n  color: black;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwZWNpZmljYXRpb24tdmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRCQUE0QjtBQUM1QjtFQUNFLFdBQVc7QUFDYjtBQUVBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6InNwZWNpZmljYXRpb24tdmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQGF1dGhvciBSb2JpbiBTdGVpbndhcnogKi9cclxudGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG50aC5tYXQtc29ydC1oZWFkZXItc29ydGVkIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 25335:
/*!****************************************************************************************************!*\
  !*** ./src/app/dashboard-new/task-statistic-heatmap-view/task-statistic-heatmap-view.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaskStatisticHeatmapViewComponent": () => (/* binding */ TaskStatisticHeatmapViewComponent)
/* harmony export */ });
/* harmony import */ var _common_util_format_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/util/format-util */ 17045);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _common_util_statistic_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/util/statistic-utils */ 44796);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 19200);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/grid-list */ 42642);
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swimlane/ngx-charts */ 14142);














function TaskStatisticHeatmapViewComponent_mat_grid_list_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-grid-list", 4)(1, "mat-grid-tile", 5)(2, "div", 6)(3, "div", 7)(4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Heat Map");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 9)(7, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Legend");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "min");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " 0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "fa-icon", 12)(13, "fa-icon", 13)(14, "fa-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "max");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "fa-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 16)(20, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "ngx-charts-heat-map", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("gutterSize", "8px");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("color", "rgb(255, 247, 223)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("fixedWidth", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("fixedWidth", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("color", "rgb(255, 79, 0)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("fixedWidth", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.statisticSelection.getRawValue() === "avgInstancesPerCase" || ctx_r0.statisticSelection.getRawValue() === "cost" ? ctx_r0.formatUtils.applyFixedDecimalNumbers(ctx_r0.max) : ctx_r0.formatUtils.applyPastTimeFormatForTimestampWithDays(ctx_r0.max), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("fixedWidth", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("animations", false)("scheme", "solar")("legend", false)("showXAxisLabel", false)("showYAxisLabel", false)("xAxis", true)("yAxis", false)("xAxisLabel", "")("yAxisLabel", "")("tooltipText", ctx_r0.heatMapTooltipText)("results", ctx_r0.heatMapData);
} }
/**
 * @author Robin Steinwarz
 */
class TaskStatisticHeatmapViewComponent {
    constructor() {
        this.statisticSelection = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('avgCompletionTime');
        this.range = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            start: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(new Date(Date.UTC(new Date(Date.now()).getFullYear() - 2, 0))),
            end: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(new Date(Date.now())),
        });
        this.formatUtils = new _common_util_format_util__WEBPACK_IMPORTED_MODULE_0__.FormatUtils();
        // Config
        this.loaded = false;
        this.fineness = 'month';
        this.casesInRange = 0;
        this.statisticTicks = [];
        // Heat Map
        this.heatMapData = [];
        this.max = 0;
    }
    ngOnChanges(changes) {
        this.updateOnlyStatisticData();
    }
    ngOnInit() {
        this.statisticTicks = _common_util_statistic_utils__WEBPACK_IMPORTED_MODULE_1__.StatisticUtils.calculateStatisticTicks(this.range, this.fineness);
        this.processHeatMapData();
        this.processCasesInRange();
        this.loaded = true;
    }
    updateData() {
        if (this.range.value.start === null || this.range.value.end === null) {
            return;
        }
        this.statisticTicks = _common_util_statistic_utils__WEBPACK_IMPORTED_MODULE_1__.StatisticUtils.calculateStatisticTicks(this.range, this.fineness);
        this.processCasesInRange();
        this.processHeatMapData();
    }
    updateOnlyStatisticData() {
        if (this.range.value.start === null || this.range.value.end === null) {
            return;
        }
        this.statisticTicks = _common_util_statistic_utils__WEBPACK_IMPORTED_MODULE_1__.StatisticUtils.calculateStatisticTicks(this.range, this.fineness);
        this.processCasesInRange();
    }
    processHeatMapData() {
        this.heatMapData = [];
        this.max = 0;
        let taskStatisticMap = new Map();
        this.specificationDataContainer?.specificationStatistic.taskStatisticDTOS.forEach(taskStatistic => {
            if (!taskStatisticMap.has(taskStatistic.minimalOrder)) {
                taskStatisticMap.set(taskStatistic.minimalOrder, []);
            }
            taskStatisticMap.get(taskStatistic.minimalOrder).push(taskStatistic);
        });
        taskStatisticMap.forEach((taskStatistics, label) => {
            let heatMapElement = {
                name: label,
                series: []
            };
            let counter = 1;
            taskStatistics.forEach(taskStatistic => {
                let value = 0;
                switch (this.statisticSelection.value) {
                    case ("avgCompletionTime"):
                        value = taskStatistic.avgCompletionTime;
                        (value > this.max) ? this.max = value : 'nothing';
                        break;
                    case ("avgQueueTime"):
                        value = taskStatistic.avgQueueTime;
                        (value > this.max) ? this.max = value : 'nothing';
                        break;
                    case ("avgTimeToReach"):
                        value = taskStatistic.avgTimeToReach;
                        (value > this.max) ? this.max = value : 'nothing';
                        break;
                    case ("cost"):
                        value = (taskStatistic.avgCompletionTime / (1000 * 60 * 60)) * taskStatistic.costResourceHour;
                        (value > this.max) ? this.max = value : 'nothing';
                        break;
                    case ("avgInstancesPerCase"):
                        value = taskStatistic.avgInstancesPerCase;
                        (value > this.max) ? this.max = value : 'nothing';
                        break;
                }
                heatMapElement.series.push({
                    name: "" + counter++,
                    value: value,
                    extra: {
                        statistic: taskStatistic,
                        statisticSelection: this.statisticSelection.value
                    }
                });
            });
            this.heatMapData.push(heatMapElement);
        });
        this.heatMapData.sort((a, b) => {
            return this.compare(a.name, b.name, true);
        });
    }
    processCasesInRange() {
        this.casesInRange = 0;
        this.specificationDataContainer.specificationStatistic.caseStatisticDTOS.forEach(caseStatistic => {
            if (_common_util_statistic_utils__WEBPACK_IMPORTED_MODULE_1__.StatisticUtils.timestampIsInDateRange(caseStatistic.start, this.range)) {
                this.casesInRange++;
            }
        });
    }
    heatMapTooltipText(data) {
        let taskStatistic = data.cell.extra.statistic;
        let valueString = "";
        if (data.cell.extra.statisticSelection === 'cost' || data.cell.extra.statisticSelection === 'avgInstancesPerCase') {
            valueString = data.cell.value.toFixed(2);
        }
        else {
            valueString = new _common_util_format_util__WEBPACK_IMPORTED_MODULE_0__.FormatUtils().applyPastTimeFormatForTimestampWithDays(data.cell.value);
        }
        return taskStatistic.name + "<br>" + valueString;
    }
    compare(a, b, isAsc) {
        return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }
}
TaskStatisticHeatmapViewComponent.ɵfac = function TaskStatisticHeatmapViewComponent_Factory(t) { return new (t || TaskStatisticHeatmapViewComponent)(); };
TaskStatisticHeatmapViewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TaskStatisticHeatmapViewComponent, selectors: [["app-task-statistic-heatmap-view"]], inputs: { specificationDataContainer: "specificationDataContainer", specificTaskStatistic: "specificTaskStatistic" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵNgOnChangesFeature"]], decls: 16, vars: 7, consts: [[1, "statistic-filter"], [3, "formControl", "selectionChange"], [3, "value"], ["cols", "5", "rowHeight", "2:1", 3, "gutterSize", 4, "ngIf"], ["cols", "5", "rowHeight", "2:1", 3, "gutterSize"], ["colspan", "5"], [1, "statistic-container"], [1, "statistic-title"], [1, "statistic-title-text"], [1, "statistic-title-info"], [2, "margin-right", "15px"], [2, "font-size", "7px"], ["icon", "square", "matTooltip", "This color indicates a task with a corresponding small value.", 3, "fixedWidth"], ["icon", "arrow-right", 3, "fixedWidth"], ["icon", "square", "matTooltip", "This color indicates a task with a corresponding big value.", 3, "fixedWidth"], ["id", "heatmapInfo", "icon", "circle-info", "matTooltip", "This heatmap illustrates the differences between several selectable properties of our\n                   tasks. Each square represents a task. They are ordered by their possible first occurrence in the process.\n                   The further to the left a task is in the heatmap, the earlier it can occur in the process.\n                   Tasks stacked vertically mean that they can occur at the same time in the process.", 3, "fixedWidth"], [1, "statistic-body", "ngx-charts-extra-small-text"], [1, "statistic-graph"], [3, "animations", "scheme", "legend", "showXAxisLabel", "showYAxisLabel", "xAxis", "yAxis", "xAxisLabel", "yAxisLabel", "tooltipText", "results"], [1, "statistic-label"]], template: function TaskStatisticHeatmapViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "mat-form-field")(2, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Heat map selection");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-select", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("selectionChange", function TaskStatisticHeatmapViewComponent_Template_mat_select_selectionChange_4_listener() { return ctx.updateData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Avg. resource time");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Avg. queue time");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Avg. time to reach task");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "mat-option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Avg. task instances per case");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "mat-option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Avg. cost of task");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, TaskStatisticHeatmapViewComponent_mat_grid_list_15_Template, 23, 21, "mat-grid-list", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.statisticSelection);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", "avgCompletionTime");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", "avgQueueTime");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", "avgTimeToReach");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", "avgInstancesPerCase");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", "cost");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loaded && ctx.specificationDataContainer !== undefined);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_6__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__.MatOption, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__.MatTooltip, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__.FaIconComponent, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__.MatGridList, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__.MatGridTile, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlDirective, _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_11__.HeatMapComponent], styles: [".mat-grid-tile[_ngcontent-%COMP%] {\r\n  border-radius: 2px;\r\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 3px;\r\n}\r\n.statistic-filter[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n  margin: 2em 0 0;\r\n}\r\n.statistic-title-info[_ngcontent-%COMP%] {\r\n  width: 20%;\r\n  float: none;\r\n}\r\n.statistic-title-info[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%] {\r\n  float: none;\r\n  font-size: 12px;\r\n  color: #12376a;\r\n}\r\n#heatmapInfo[_ngcontent-%COMP%] {\r\n  float: right;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhc2stc3RhdGlzdGljLWhlYXRtYXAtdmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRCQUE0QjtBQUM1QjtFQUNFLGtCQUFrQjtFQUNsQiwyQ0FBMkM7QUFDN0M7QUFFQTtFQUNFLFVBQVU7RUFDVixlQUFlO0FBQ2pCO0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztBQUNiO0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGNBQWM7QUFDaEI7QUFFQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJ0YXNrLXN0YXRpc3RpYy1oZWF0bWFwLXZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEBhdXRob3IgUm9iaW4gU3RlaW53YXJ6ICovXHJcbi5tYXQtZ3JpZC10aWxlIHtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE2KSAwcHggMXB4IDNweDtcclxufVxyXG5cclxuLnN0YXRpc3RpYy1maWx0ZXIge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAyZW0gMCAwO1xyXG59XHJcblxyXG4uc3RhdGlzdGljLXRpdGxlLWluZm8ge1xyXG4gIHdpZHRoOiAyMCU7XHJcbiAgZmxvYXQ6IG5vbmU7XHJcbn1cclxuXHJcbi5zdGF0aXN0aWMtdGl0bGUtaW5mbyBmYS1pY29uIHtcclxuICBmbG9hdDogbm9uZTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgY29sb3I6ICMxMjM3NmE7XHJcbn1cclxuXHJcbiNoZWF0bWFwSW5mbyB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 78394:
/*!******************************************************************************************!*\
  !*** ./src/app/dashboard-new/task-statistic-view/task-statistic-chart-configurations.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaskStatisticChartConfigurations": () => (/* binding */ TaskStatisticChartConfigurations)
/* harmony export */ });
/* harmony import */ var _common_util_format_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/util/format-util */ 17045);

/**
 * @author Robin Steinwarz
 */
class TaskStatisticChartConfigurations {
    static avgCompletionTimeOverPeriodsOptions(month) {
        return {
            animation: false,
            normalized: true,
            scales: {
                x: {
                    type: 'time',
                    time: {
                        unit: (month) ? 'month' : 'year',
                        displayFormats: {
                            year: 'yyy MMM',
                            month: 'yyy MMM',
                        }
                    },
                    ticks: {
                        font: {
                            size: 10
                        }
                    }
                },
                y: {
                    ticks: {
                        font: {
                            size: 10
                        },
                        // Include a dollar sign in the ticks
                        callback: function (value, index, ticks) {
                            return new _common_util_format_util__WEBPACK_IMPORTED_MODULE_0__.FormatUtils().applyPastTimeFormatForTimestampWithDays(value);
                        }
                    },
                    min: 0,
                    title: {
                        display: true,
                        text: 'Avg. completion time',
                        font: {
                            size: 10
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    display: false,
                    labels: {
                        font: {
                            size: 10
                        }
                    }
                },
                tooltip: {
                    enabled: true,
                    callbacks: {
                        label: function (tooltipItem) {
                            if (!tooltipItem) {
                                return "";
                            }
                            return [" " + tooltipItem.dataset.label,
                                // @ts-ignore
                                "Value: " + _common_util_format_util__WEBPACK_IMPORTED_MODULE_0__.FormatUtils.applyPastTimeFormatForTimestampWithDays(tooltipItem.raw)];
                        }
                    }
                },
            }
        };
    }
    static resourceAvgPerformanceOptions(month) {
        return {
            animation: false,
            normalized: true,
            scales: {
                x: {
                    ticks: {
                        font: {
                            size: 10
                        }
                    }
                },
                y: {
                    ticks: {
                        font: {
                            size: 10
                        },
                        // Include a dollar sign in the ticks
                        callback: function (value, index, ticks) {
                            return new _common_util_format_util__WEBPACK_IMPORTED_MODULE_0__.FormatUtils().applyPastTimeFormatForTimestampWithDays(value);
                        }
                    },
                    min: 0,
                    title: {
                        display: true,
                        text: 'Avg. completion time',
                        font: {
                            size: 10
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    display: false,
                    labels: {
                        font: {
                            size: 10
                        }
                    }
                },
                tooltip: {
                    enabled: true,
                    callbacks: {
                        label: function (tooltipItem) {
                            if (!tooltipItem) {
                                return "";
                            }
                            return [" " + tooltipItem.dataset.label,
                                // @ts-ignore
                                "Value: " + _common_util_format_util__WEBPACK_IMPORTED_MODULE_0__.FormatUtils.applyPastTimeFormatForTimestampWithDays(tooltipItem.raw)];
                        }
                    }
                },
            }
        };
    }
    static resourcesProcessedInstancesOptions(month) {
        return {
            animation: false,
            normalized: true,
            scales: {
                x: {
                    ticks: {
                        font: {
                            size: 10
                        }
                    }
                },
                y: {
                    ticks: {
                        font: {
                            size: 10
                        }
                    },
                    min: 0,
                    title: {
                        display: true,
                        text: 'Instances',
                        font: {
                            size: 10
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    display: false,
                    labels: {
                        font: {
                            size: 10
                        }
                    }
                },
                tooltip: {
                    enabled: true,
                    callbacks: {
                        label: function (tooltipItem) {
                            if (!tooltipItem) {
                                return "";
                            }
                            return [" " + tooltipItem.dataset.label,
                                // @ts-ignore
                                "Value: " + tooltipItem.raw];
                        }
                    }
                },
            }
        };
    }
}


/***/ }),

/***/ 64145:
/*!************************************************************************************!*\
  !*** ./src/app/dashboard-new/task-statistic-view/task-statistic-view.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaskStatisticViewComponent": () => (/* binding */ TaskStatisticViewComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _common_util_statistic_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/util/statistic-utils */ 44796);
/* harmony import */ var _task_statistic_chart_configurations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task-statistic-chart-configurations */ 78394);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/datepicker */ 42298);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 19200);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/grid-list */ 42642);
/* harmony import */ var _chart_capsule_chart_capsule_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chart-capsule/chart-capsule.component */ 3461);















function TaskStatisticViewComponent_mat_hint_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Cases found: ", ctx_r0.casesInRange, "");
} }
function TaskStatisticViewComponent_mat_hint_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-hint", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Cases found: ", ctx_r1.casesInRange, "");
} }
function TaskStatisticViewComponent_mat_error_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Invalid start date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function TaskStatisticViewComponent_mat_error_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Invalid end date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
/**
 * @author Robin Steinwarz
 */
class TaskStatisticViewComponent {
    constructor() {
        this.range = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            start: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(new Date(Date.UTC(new Date(Date.now()).getFullYear() - 2, 0))),
            end: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(new Date(Date.now())),
        });
        // Config
        this.loaded = false;
        this.fineness = 'month';
        this.casesInRange = 0;
        this.statisticTicks = [];
        // Specific statistics
        this.avgCompletionTimeOverPeriodsOptions = _task_statistic_chart_configurations__WEBPACK_IMPORTED_MODULE_1__.TaskStatisticChartConfigurations.avgCompletionTimeOverPeriodsOptions(this.fineness === 'month');
        this.avgCompletionTimeOverPeriodsData = { labels: [], datasets: [] };
        this.resourceAvgPerformanceOptions = _task_statistic_chart_configurations__WEBPACK_IMPORTED_MODULE_1__.TaskStatisticChartConfigurations.resourceAvgPerformanceOptions(this.fineness === 'month');
        this.resourceAvgPerformanceData = { labels: [], datasets: [] };
        this.resourcesProcessedInstancesOptions = _task_statistic_chart_configurations__WEBPACK_IMPORTED_MODULE_1__.TaskStatisticChartConfigurations.resourcesProcessedInstancesOptions(this.fineness === 'month');
        this.resourcesProcessedInstancesData = { labels: [], datasets: [] };
    }
    ngOnChanges(changes) {
        this.updateOnlyStatisticData();
    }
    ngOnInit() {
        this.statisticTicks = _common_util_statistic_utils__WEBPACK_IMPORTED_MODULE_0__.StatisticUtils.calculateStatisticTicks(this.range, this.fineness);
        this.processCasesInRange();
        this.loaded = true;
    }
    updateData() {
        if (this.range.value.start === null || this.range.value.end === null) {
            return;
        }
        this.statisticTicks = _common_util_statistic_utils__WEBPACK_IMPORTED_MODULE_0__.StatisticUtils.calculateStatisticTicks(this.range, this.fineness);
        this.processCasesInRange();
    }
    updateOnlyStatisticData() {
        if (this.range.value.start === null || this.range.value.end === null) {
            return;
        }
        this.statisticTicks = _common_util_statistic_utils__WEBPACK_IMPORTED_MODULE_0__.StatisticUtils.calculateStatisticTicks(this.range, this.fineness);
        this.processSpecificTaskStatistics();
        this.processCasesInRange();
    }
    processSpecificTaskStatistics() {
        if (this.specificTaskStatistic === '') {
            return;
        }
        let resourceMap = new Map();
        this.specificationDataContainer.resources.forEach(resource => {
            resourceMap.set(resource.id, resource);
        });
        let allStarts = new Map();
        let data = new Map();
        this.statisticTicks.forEach((tick) => {
            allStarts.set((this.fineness === 'month') ? tick.month : tick.year, { durations: [], resources: new Map() });
            data.set((this.fineness === 'month') ? tick.month : tick.year, new Map());
        });
        this.specificationDataContainer.specificationStatistic.caseStatisticDTOS.forEach(caseStatistic => {
            if (_common_util_statistic_utils__WEBPACK_IMPORTED_MODULE_0__.StatisticUtils.timestampIsInDateRange(caseStatistic.start, this.range)) {
                let startDate = new Date(caseStatistic.start);
                let yearMonthID = (this.fineness === 'month') ? new Date(startDate.getFullYear(), startDate.getMonth()).getTime() : new Date(startDate.getFullYear(), 0)
                    .getTime();
                let figures = allStarts.get(yearMonthID);
                let resourceFigures = data.get(yearMonthID);
                caseStatistic.workitemDTOS.forEach(workitem => {
                    if (workitem.taskid === this.specificTaskStatistic
                        && !workitem.cancelled && workitem.status === 'Completed') {
                        figures.durations.push(workitem.resourceTime);
                        Object.entries(workitem.resources).forEach(entry => {
                            if (entry[0] !== "system") {
                                let isRelevant = false;
                                for (let event of entry[1]) {
                                    if (event === "Start" || event === "Complete") {
                                        isRelevant = true;
                                        break;
                                    }
                                }
                                if (isRelevant) {
                                    if (!resourceFigures.has(entry[0])) {
                                        resourceFigures.set(entry[0], { resource: resourceMap.get(entry[0]), durations: [] });
                                    }
                                    resourceFigures.get(entry[0]).durations.push(workitem.resourceTime);
                                    if (!figures.resources.has(entry[0])) {
                                        figures.resources.set(entry[0], { resource: resourceMap.get(entry[0]), number: 0, durations: [] });
                                    }
                                    let resourceEntry = figures.resources.get(entry[0]);
                                    figures.resources.set(entry[0], {
                                        resource: resourceEntry.resource,
                                        number: resourceEntry.number + 1,
                                        durations: [...resourceEntry.durations, workitem.resourceTime]
                                    });
                                }
                            }
                        });
                    }
                });
            }
        });
        let taskStatistic = this.specificationDataContainer.specificationStatistic.taskStatisticDTOS
            .filter(taskStatistic => taskStatistic.taskid === this.specificTaskStatistic).at(0);
        let avgCompletionTimeOverPeriodsLabels = [];
        let avgCompletionTimeOverPeriods = [];
        let resourceAvgPerformanceLabels = [];
        let resourceAvgPerformance = [];
        let resourcesProcessedInstancesLabels = [];
        let resourcesProcessedInstances = [];
        let resourcePerformance = new Map();
        data.forEach((resourceMap, tick) => {
            let allDurations = [];
            resourceMap.forEach((figures, resource) => {
                allDurations.push(...figures.durations);
                let label = figures.resource.firstname + " " + figures.resource.lastname;
                if (!resourcePerformance.has(label)) {
                    resourcePerformance.set(label, { durations: [] });
                }
                resourcePerformance.get(label).durations.push(...figures.durations);
            });
            const sum = allDurations.reduce((a, b) => a + b, 0);
            const avg = (sum / allDurations.length) || 0;
            avgCompletionTimeOverPeriodsLabels.push(tick);
            avgCompletionTimeOverPeriods.push(avg);
        });
        resourcePerformance.forEach((value, label) => {
            resourceAvgPerformanceLabels.push(label);
            resourcesProcessedInstancesLabels.push(label);
            resourceAvgPerformance.push(value.durations.reduce((a, b) => a + b) / value.durations.length || 0);
            resourcesProcessedInstances.push(value.durations.length);
        });
        this.avgCompletionTimeOverPeriodsData.labels = avgCompletionTimeOverPeriodsLabels;
        this.avgCompletionTimeOverPeriodsData.datasets = [];
        this.avgCompletionTimeOverPeriodsData.datasets.push({
            data: avgCompletionTimeOverPeriods,
            label: "Average completion time",
            backgroundColor: taskStatistic.color
        });
        this.resourceAvgPerformanceData.labels = resourceAvgPerformanceLabels;
        this.resourceAvgPerformanceData.datasets = [];
        this.resourceAvgPerformanceData.datasets.push({
            data: resourceAvgPerformance,
            label: "Average completion time",
            backgroundColor: taskStatistic.color
        });
        this.resourcesProcessedInstancesData.labels = resourcesProcessedInstancesLabels;
        this.resourcesProcessedInstancesData.datasets = [];
        this.resourcesProcessedInstancesData.datasets.push({
            data: resourcesProcessedInstances,
            label: "Instances",
            backgroundColor: taskStatistic.color
        });
        console.log(this.avgCompletionTimeOverPeriodsData);
    }
    processCasesInRange() {
        this.casesInRange = 0;
        this.specificationDataContainer.specificationStatistic.caseStatisticDTOS.forEach(caseStatistic => {
            if (_common_util_statistic_utils__WEBPACK_IMPORTED_MODULE_0__.StatisticUtils.timestampIsInDateRange(caseStatistic.start, this.range)) {
                this.casesInRange++;
            }
        });
    }
}
TaskStatisticViewComponent.ɵfac = function TaskStatisticViewComponent_Factory(t) { return new (t || TaskStatisticViewComponent)(); };
TaskStatisticViewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: TaskStatisticViewComponent, selectors: [["app-task-statistic-view"]], inputs: { specificationDataContainer: "specificationDataContainer", specificTaskStatistic: "specificTaskStatistic" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]], decls: 53, vars: 31, consts: [[1, "statistic-filter"], ["appearance", "legacy"], [3, "formGroup", "rangePicker"], ["matStartDate", "", "formControlName", "start", "placeholder", "Start date", 3, "dateChange"], ["matEndDate", "", "formControlName", "end", "placeholder", "End date", 3, "dateChange"], [4, "ngIf"], ["style", "color: darkred", 4, "ngIf"], ["matSuffix", "", 3, "for"], ["picker", ""], ["appearance", "legacy", 1, "mat-form-field-space"], [3, "value", "valueChange"], [3, "value"], ["cols", "4", "rowHeight", "3:1", 3, "gutterSize"], ["rowspan", "2"], [1, "statistic-container"], [1, "statistic-title"], [1, "statistic-title-text"], [1, "statistic-title-info"], ["icon", "circle-info", 3, "fixedWidth", "matTooltip"], [1, "statistic-body", "ngx-charts-small-text"], [1, "statistic-graph"], [1, "chart-capsule", 3, "type", "datasets", "labels", "options"], [2, "color", "darkred"]], template: function TaskStatisticViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "mat-form-field", 1)(2, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Select statistic range");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-date-range-input", 2)(5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("dateChange", function TaskStatisticViewComponent_Template_input_dateChange_5_listener() { return ctx.updateOnlyStatisticData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("dateChange", function TaskStatisticViewComponent_Template_input_dateChange_6_listener() { return ctx.updateOnlyStatisticData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, TaskStatisticViewComponent_mat_hint_7_Template, 2, 1, "mat-hint", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, TaskStatisticViewComponent_mat_hint_8_Template, 2, 1, "mat-hint", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "mat-datepicker-toggle", 7)(10, "mat-date-range-picker", null, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, TaskStatisticViewComponent_mat_error_12_Template, 2, 0, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, TaskStatisticViewComponent_mat_error_13_Template, 2, 0, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "mat-form-field", 9)(15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Statistic fineness");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "mat-select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("valueChange", function TaskStatisticViewComponent_Template_mat_select_valueChange_17_listener($event) { return ctx.fineness = $event; })("valueChange", function TaskStatisticViewComponent_Template_mat_select_valueChange_17_listener() { return ctx.updateOnlyStatisticData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "mat-grid-list", 12)(23, "mat-grid-tile", 13)(24, "div", 14)(25, "div", 15)(26, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "How long does the selected task run usually?");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](29, "fa-icon", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 19)(31, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "app-chart-capsule", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "mat-grid-tile", 13)(34, "div", 14)(35, "div", 15)(36, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "How do our resources perform on average on the selected task?");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](39, "fa-icon", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 19)(41, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](42, "app-chart-capsule", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "mat-grid-tile", 13)(44, "div", 14)(45, "div", 15)(46, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "What resources usually take on this task?");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](49, "fa-icon", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "div", 19)(51, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](52, "app-chart-capsule", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.range)("rangePicker", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.casesInRange !== 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.casesInRange === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("for", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.range.controls.start.hasError("matStartDateInvalid"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.range.controls.end.hasError("matEndDateInvalid"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.fineness);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", "month");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"]("month");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", "year");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"]("year");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("gutterSize", "8px");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("matTooltip", "This chart visualizes the average time it takes to complete the selected task (", ctx.specificTaskStatistic, ") for each period.\n                                 For the calculation of the average completion time of one period all task instances started\n                                 in that period were considered. Cancelled tasks excluded.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fixedWidth", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", "bar")("datasets", ctx.avgCompletionTimeOverPeriodsData.datasets)("labels", ctx.avgCompletionTimeOverPeriodsData.labels)("options", ctx.avgCompletionTimeOverPeriodsOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("matTooltip", "This chart visualizes the average time it takes to complete the selected task (", ctx.specificTaskStatistic, ") for our resources.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fixedWidth", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", "bar")("datasets", ctx.resourceAvgPerformanceData.datasets)("labels", ctx.resourceAvgPerformanceData.labels)("options", ctx.resourceAvgPerformanceOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("matTooltip", "This chart visualizes the number of work items corresponding to the selected task (", ctx.specificTaskStatistic, ")\n                      that each resource has processed in total.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fixedWidth", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("type", "bar")("datasets", ctx.resourcesProcessedInstancesData.datasets)("labels", ctx.resourcesProcessedInstancesData.labels)("options", ctx.resourcesProcessedInstancesOptions);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__.MatDatepickerToggle, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__.MatDateRangeInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__.MatStartDate, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__.MatEndDate, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__.MatDateRangePicker, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatHint, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatSuffix, _angular_material_select__WEBPACK_IMPORTED_MODULE_8__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatOption, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__.MatTooltip, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_11__.FaIconComponent, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__.MatGridList, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__.MatGridTile, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _chart_capsule_chart_capsule_component__WEBPACK_IMPORTED_MODULE_2__.ChartCapsuleComponent], styles: [".mat-grid-tile[_ngcontent-%COMP%] {\r\n  border-radius: 2px;\r\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 3px;\r\n}\r\n.statistic-filter[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n  margin: 0 0 .5em;\r\n}\r\nmat-grid-list[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhc2stc3RhdGlzdGljLXZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw0QkFBNEI7QUFDNUI7RUFDRSxrQkFBa0I7RUFDbEIsMkNBQTJDO0FBQzdDO0FBRUE7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoidGFzay1zdGF0aXN0aWMtdmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQGF1dGhvciBSb2JpbiBTdGVpbndhcnogKi9cclxuLm1hdC1ncmlkLXRpbGUge1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTYpIDBweCAxcHggM3B4O1xyXG59XHJcblxyXG4uc3RhdGlzdGljLWZpbHRlciB7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDAgMCAuNWVtO1xyXG59XHJcblxyXG5tYXQtZ3JpZC1saXN0IHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuIl19 */"] });


/***/ }),

/***/ 67101:
/*!****************************************************************!*\
  !*** ./src/app/dashboard-new/task-view/task-view.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaskViewComponent": () => (/* binding */ TaskViewComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sort */ 92197);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var _common_config_features_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/config/features-config */ 30233);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/animations */ 24851);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _yawl_resources_services_specification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../yawl/resources/services/specification.service */ 94237);
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-notifier */ 24110);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 19200);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _timestampform_timestampform_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../timestampform/timestampform.component */ 30472);
/* harmony import */ var _task_statistic_view_task_statistic_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../task-statistic-view/task-statistic-view.component */ 64145);
/* harmony import */ var _task_statistic_heatmap_view_task_statistic_heatmap_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../task-statistic-heatmap-view/task-statistic-heatmap-view.component */ 25335);



















function TaskViewComponent_app_task_statistic_heatmap_view_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-task-statistic-heatmap-view", 5);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("specificationDataContainer", ctx_r0.specificationDataContainer)("specificTaskStatistic", ctx_r0.specificTaskStatisticSelection);
} }
function TaskViewComponent_table_4_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Color ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TaskViewComponent_table_4_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "fa-icon", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("color", element_r27.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("fixedWidth", true);
} }
function TaskViewComponent_table_4_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Task ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TaskViewComponent_table_4_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](element_r28.name);
} }
function TaskViewComponent_table_4_th_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Order ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "fa-icon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("fixedWidth", true);
} }
function TaskViewComponent_table_4_td_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](element_r29.minimalOrder);
} }
function TaskViewComponent_table_4_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Overall avg. occurrences per week ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TaskViewComponent_table_4_td_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 33)(1, "div", 39)(2, "div", 40)(3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "M");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 40)(8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "T");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 40)(13, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "W");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 40)(18, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "T");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 40)(23, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "F");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 40)(28, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "S");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 40)(33, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "S");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const element_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", element_r30.avgOccurrencesPerWeek[0], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", element_r30.avgOccurrencesPerWeek[1], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", element_r30.avgOccurrencesPerWeek[2], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", element_r30.avgOccurrencesPerWeek[3], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", element_r30.avgOccurrencesPerWeek[4], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", element_r30.avgOccurrencesPerWeek[5], " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", element_r30.avgOccurrencesPerWeek[6], " ");
} }
function TaskViewComponent_table_4_th_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Automated ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TaskViewComponent_table_4_td_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", element_r31.automated ? "Yes" : "No", " ");
} }
function TaskViewComponent_table_4_th_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Avg. cost per hour ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TaskViewComponent_table_4_td_18_mat_form_field_1_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-form-field", 45)(1, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function TaskViewComponent_table_4_td_18_mat_form_field_1_Template_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r36); const element_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](element_r32.costResourceHour = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const element_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("width", 70, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx_r33.featuresConfig.editCostAndLimits)("ngModel", element_r32.costResourceHour);
} }
function TaskViewComponent_table_4_td_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, TaskViewComponent_table_4_td_18_mat_form_field_1_Template, 2, 4, "mat-form-field", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !element_r32.automated);
} }
function TaskViewComponent_table_4_th_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Task queue time limit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TaskViewComponent_table_4_td_21_app_timestampform_1_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "app-timestampform", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("timestampChange", function TaskViewComponent_table_4_td_21_app_timestampform_1_Template_app_timestampform_timestampChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r42); const element_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](element_r38.maxQueueAge = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("enabled", ctx_r39.featuresConfig.editCostAndLimits)("monthSelectionActive", true)("timestamp", element_r38.maxQueueAge);
} }
function TaskViewComponent_table_4_td_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, TaskViewComponent_table_4_td_21_app_timestampform_1_Template, 1, 3, "app-timestampform", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !element_r38.automated);
} }
function TaskViewComponent_table_4_th_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Task time limit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TaskViewComponent_table_4_td_24_app_timestampform_1_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "app-timestampform", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("timestampChange", function TaskViewComponent_table_4_td_24_app_timestampform_1_Template_app_timestampform_timestampChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r48); const element_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](element_r44.maxTaskAge = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("enabled", ctx_r45.featuresConfig.editCostAndLimits)("monthSelectionActive", true)("timestamp", element_r44.maxTaskAge);
} }
function TaskViewComponent_table_4_td_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, TaskViewComponent_table_4_td_24_app_timestampform_1_Template, 1, 3, "app-timestampform", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !element_r44.automated);
} }
function TaskViewComponent_table_4_th_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Actions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TaskViewComponent_table_4_td_27_Template(rf, ctx) { if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 33)(1, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TaskViewComponent_table_4_td_27_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r52); const element_r50 = restoredCtx.$implicit; const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r51.saveLimits(element_r50)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "save");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} }
function TaskViewComponent_table_4_th_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function TaskViewComponent_table_4_td_30_button_1_fa_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "fa-icon", 57);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("fixedWidth", true);
} }
function TaskViewComponent_table_4_td_30_button_1_fa_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "fa-icon", 58);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("fixedWidth", true);
} }
function TaskViewComponent_table_4_td_30_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function TaskViewComponent_table_4_td_30_button_1_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r58); const element_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit; const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); ctx_r57.expandedElement = ctx_r57.expandedElement === element_r53 ? null : element_r53; return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"]($event.stopPropagation()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, TaskViewComponent_table_4_td_30_button_1_fa_icon_1_Template, 1, 1, "fa-icon", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, TaskViewComponent_table_4_td_30_button_1_fa_icon_2_Template, 1, 1, "fa-icon", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r54.expandedElement !== element_r53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r54.expandedElement === element_r53);
} }
function TaskViewComponent_table_4_td_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, TaskViewComponent_table_4_td_30_button_1_Template, 3, 2, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r53 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !element_r53.automated);
} }
function TaskViewComponent_table_4_td_32_div_1_app_task_statistic_view_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-task-statistic-view", 5);
} if (rf & 2) {
    const element_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("specificationDataContainer", ctx_r63.specificationDataContainer)("specificTaskStatistic", element_r61.taskid);
} }
function TaskViewComponent_table_4_td_32_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, TaskViewComponent_table_4_td_32_div_1_app_task_statistic_view_1_Template, 1, 2, "app-task-statistic-view", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("@detailExpand", element_r61 == ctx_r62.expandedElement ? "expanded" : "collapsed");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r62.specificationDataContainer !== undefined && element_r61 == ctx_r62.expandedElement);
} }
function TaskViewComponent_table_4_td_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, TaskViewComponent_table_4_td_32_div_1_Template, 2, 2, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r61 = ctx.$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("colspan", ctx_r22.displayedColumnsWithExpand.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !element_r61.automated);
} }
function TaskViewComponent_table_4_tr_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 61);
} }
function TaskViewComponent_table_4_tr_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 62);
} if (rf & 2) {
    const element_r66 = ctx.$implicit;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("expanded-row", ctx_r24.expandedElement === element_r66);
} }
function TaskViewComponent_table_4_tr_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 63);
} }
function TaskViewComponent_table_4_tr_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr", 64)(1, "td", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Empty table ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("colspan", ctx_r26.displayedColumnsWithExpand.length);
} }
const _c0 = function () { return ["expandedDetail"]; };
function TaskViewComponent_table_4_Template(rf, ctx) { if (rf & 1) {
    const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "table", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("matSortChange", function TaskViewComponent_table_4_Template_table_matSortChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r69); const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r68.announceSortChange($event)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](1, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, TaskViewComponent_table_4_th_2_Template, 2, 0, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, TaskViewComponent_table_4_td_3_Template, 2, 3, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](4, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, TaskViewComponent_table_4_th_5_Template, 2, 0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, TaskViewComponent_table_4_td_6_Template, 2, 1, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](7, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, TaskViewComponent_table_4_th_8_Template, 3, 1, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, TaskViewComponent_table_4_td_9_Template, 2, 1, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](10, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, TaskViewComponent_table_4_th_11_Template, 2, 0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, TaskViewComponent_table_4_td_12_Template, 37, 7, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](13, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, TaskViewComponent_table_4_th_14_Template, 2, 0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, TaskViewComponent_table_4_td_15_Template, 2, 1, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](16, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, TaskViewComponent_table_4_th_17_Template, 2, 0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, TaskViewComponent_table_4_td_18_Template, 2, 1, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](19, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, TaskViewComponent_table_4_th_20_Template, 2, 0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, TaskViewComponent_table_4_td_21_Template, 2, 1, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](22, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](23, TaskViewComponent_table_4_th_23_Template, 2, 0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, TaskViewComponent_table_4_td_24_Template, 2, 1, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](25, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, TaskViewComponent_table_4_th_26_Template, 2, 0, "th", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](27, TaskViewComponent_table_4_td_27_Template, 3, 0, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](28, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, TaskViewComponent_table_4_th_29_Template, 2, 0, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](30, TaskViewComponent_table_4_td_30_Template, 2, 1, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](31, 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](32, TaskViewComponent_table_4_td_32_Template, 2, 2, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](33, TaskViewComponent_table_4_tr_33_Template, 1, 0, "tr", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](34, TaskViewComponent_table_4_tr_34_Template, 1, 2, "tr", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](35, TaskViewComponent_table_4_tr_35_Template, 1, 0, "tr", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](36, TaskViewComponent_table_4_tr_36_Template, 3, 1, "tr", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dataSource", ctx_r1.dataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matHeaderRowDef", ctx_r1.displayedColumnsWithExpand);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matRowDefColumns", ctx_r1.displayedColumnsWithExpand);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matRowDefColumns", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](4, _c0));
} }
/**
 * @author Robin Steinwarz
 */
class TaskViewComponent {
    constructor(specificationService, notifierService) {
        this.specificationService = specificationService;
        this.notifierService = notifierService;
        this.featuresConfig = _common_config_features_config__WEBPACK_IMPORTED_MODULE_0__.featuresConfig;
        this.displayedColumns = ['color', 'name', 'order', 'avgOccurrencesPerWeek', 'automated',
            'costResourceHour', 'maxQueueAge', 'maxTaskAge', 'actions'];
        this.displayedColumnsWithExpand = ['expand', ...this.displayedColumns];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableDataSource();
        this.specificTaskStatisticSelection = '';
    }
    ngOnInit() {
        this.dataSource.data = this.specificationDataContainer?.specificationStatistic.taskStatisticDTOS;
    }
    ngAfterViewInit() {
        this.dataSource.sort = this.sort;
        this.dataSource.sortingDataAccessor = (row, key) => {
            switch (key) {
                case 'name':
                    return row.name;
                case 'automated':
                    return "" + row.automated;
                case 'order':
                    return row.minimalOrder;
                case 'avgQueueTime':
                    return row.avgQueueTime;
                case 'avgCompletionTime':
                    return row.avgCompletionTime;
                case 'avgTimeToReach':
                    return row.avgTimeToReach;
                case 'costResourceHour':
                    return row.costResourceHour;
                case 'maxTaskAge':
                    return row.maxTaskAge;
                case 'maxQueueAge':
                    return row.maxQueueAge;
                default:
                    return row.minimalOrder;
            }
        };
        if (this.specificationDataContainer?.specificationStatistic.taskStatisticDTOS.length > 0) {
            this.specificTaskStatisticSelection = this.specificationDataContainer?.specificationStatistic.taskStatisticDTOS[0].taskid;
        }
        this.dataSource.data.sort((a, b) => {
            return this.compare(a.name, b.name, true);
        });
    }
    selectSpecificTaskStatistic(taskid) {
        this.specificTaskStatisticSelection = taskid;
    }
    saveLimits(task) {
        if (this.specificationDataContainer?.specificationStatistic === undefined) {
            return;
        }
        this.specificationService.storeTaskAttributesById(this.specificationDataContainer?.specificationStatistic.id, this.specificationDataContainer?.specificationStatistic.version, this.specificationDataContainer?.specificationStatistic.uri, task.taskid, task.costResourceHour, task.maxTaskAge, task.maxQueueAge).subscribe(result => {
            this.notifierService.notify("success", "Task attributes saved");
        });
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    announceSortChange(sort) {
        const isAsc = sort.direction === 'asc';
        if (sort.direction === '') {
            this.dataSource?.data.sort((a, b) => this.compare(a.minimalOrder, b.minimalOrder, true));
        }
    }
    compare(a, b, isAsc) {
        return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }
    compareOccasions(a, b, isAsc) {
        return (a[7] < b[7] ? -1 : 1) * (isAsc ? 1 : -1);
    }
}
TaskViewComponent.ɵfac = function TaskViewComponent_Factory(t) { return new (t || TaskViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_yawl_resources_services_specification_service__WEBPACK_IMPORTED_MODULE_1__.SpecificationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](angular_notifier__WEBPACK_IMPORTED_MODULE_7__.NotifierService)); };
TaskViewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: TaskViewComponent, selectors: [["app-task-view"]], viewQuery: function TaskViewComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSort, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, inputs: { specificationDataContainer: "specificationDataContainer" }, decls: 6, vars: 2, consts: [[3, "specificationDataContainer", "specificTaskStatistic", 4, "ngIf"], [2, "margin-top", "2em"], [2, "font-size", "14px"], ["mat-table", "", "multiTemplateDataRows", "", "matSort", "", "id", "table", "class", "mat-elevation-z8", 3, "dataSource", "matSortChange", 4, "ngIf"], [1, "bottom-page-margin"], [3, "specificationDataContainer", "specificTaskStatistic"], ["mat-table", "", "multiTemplateDataRows", "", "matSort", "", "id", "table", 1, "mat-elevation-z8", 3, "dataSource", "matSortChange"], ["matColumnDef", "color"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["mat-header-cell", "", "mat-sort-header", "name", "sortActionDescription", "Sort by Task", 4, "matHeaderCellDef"], ["matColumnDef", "order"], ["mat-header-cell", "", "mat-sort-header", "order", "sortActionDescription", "Sort by order", 4, "matHeaderCellDef"], ["matColumnDef", "avgOccurrencesPerWeek"], ["mat-header-cell", "", "mat-sort-header", "avgOccurrencesPerWeek", "sortActionDescription", "Sort by avg. occurrences per week", 4, "matHeaderCellDef"], ["matColumnDef", "automated"], ["mat-header-cell", "", "mat-sort-header", "automated", "sortActionDescription", "Sort by automated", 4, "matHeaderCellDef"], ["matColumnDef", "costResourceHour"], ["mat-header-cell", "", "mat-sort-header", "costResourceHour", "sortActionDescription", "Sort by average cost per resource hour", 4, "matHeaderCellDef"], ["matColumnDef", "maxQueueAge"], ["mat-header-cell", "", "mat-sort-header", "maxQueueAge", "sortActionDescription", "Sort by task queue time limit", 4, "matHeaderCellDef"], ["matColumnDef", "maxTaskAge"], ["mat-header-cell", "", "mat-sort-header", "maxTaskAge", "sortActionDescription", "Sort by task time limit", 4, "matHeaderCellDef"], ["matColumnDef", "actions"], ["matColumnDef", "expand"], ["mat-header-cell", "", "aria-label", "row actions", 4, "matHeaderCellDef"], ["matColumnDef", "expandedDetail"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", "class", "element-row", 3, "expanded-row", 4, "matRowDef", "matRowDefColumns"], ["mat-row", "", "class", "detail-row", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], ["mat-header-cell", ""], ["mat-cell", ""], ["icon", "square", "matTooltip", "This color is associated with the task.", 3, "fixedWidth"], ["mat-header-cell", "", "mat-sort-header", "name", "sortActionDescription", "Sort by Task"], ["mat-header-cell", "", "mat-sort-header", "order", "sortActionDescription", "Sort by order"], ["icon", "circle-info", "matTooltip", "This property describes for each task when this task can appear in a process for the first time.\n                     For this reason it is used for sorting the tasks. Each number of this property describes the\n                     horizontal sorting of the task in the specification relatively to a parent process.\n                     A point represents the descent into a subprocess and corresponds to the vertical sorting.", 1, "info", 3, "fixedWidth"], ["mat-header-cell", "", "mat-sort-header", "avgOccurrencesPerWeek", "sortActionDescription", "Sort by avg. occurrences per week"], [2, "display", "flex", "font-size", "13px"], [1, "occurence-box"], [2, "float", "left"], ["mat-header-cell", "", "mat-sort-header", "automated", "sortActionDescription", "Sort by automated"], ["mat-header-cell", "", "mat-sort-header", "costResourceHour", "sortActionDescription", "Sort by average cost per resource hour"], ["class", "grid-form", "appearance", "legacy", "disabled", "", 3, "width", 4, "ngIf"], ["appearance", "legacy", "disabled", "", 1, "grid-form"], ["matInput", "", "type", "number", "min", "0", 3, "disabled", "ngModel", "ngModelChange"], ["mat-header-cell", "", "mat-sort-header", "maxQueueAge", "sortActionDescription", "Sort by task queue time limit"], [3, "enabled", "monthSelectionActive", "timestamp", "timestampChange", 4, "ngIf"], [3, "enabled", "monthSelectionActive", "timestamp", "timestampChange"], ["mat-header-cell", "", "mat-sort-header", "maxTaskAge", "sortActionDescription", "Sort by task time limit"], ["mat-button", "", 3, "click"], ["mat-header-cell", "", "aria-label", "row actions"], ["mat-icon-button", "", "aria-label", "expand row", 3, "click", 4, "ngIf"], ["mat-icon-button", "", "aria-label", "expand row", 3, "click"], ["matTooltip", "Expand details row.", "icon", "chevron-down", 3, "fixedWidth", 4, "ngIf"], ["matTooltip", "Close details row.", "icon", "chevron-up", 3, "fixedWidth", 4, "ngIf"], ["matTooltip", "Expand details row.", "icon", "chevron-down", 3, "fixedWidth"], ["matTooltip", "Close details row.", "icon", "chevron-up", 3, "fixedWidth"], ["class", "element-detail", 4, "ngIf"], [1, "element-detail"], ["mat-header-row", ""], ["mat-row", "", 1, "element-row"], ["mat-row", "", 1, "detail-row"], [1, "mat-row"], [1, "mat-cell", 2, "text-align", "center", "color", "#5e5e5e"]], template: function TaskViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, TaskViewComponent_app_task_statistic_heatmap_view_0_Template, 1, 2, "app-task-statistic-heatmap-view", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "p", 1)(2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Instances");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, TaskViewComponent_table_4_Template, 37, 5, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "div", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.specificationDataContainer !== undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.specificationDataContainer !== undefined);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInput, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatNoDataRow, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_13__.MatTooltip, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__.FaIconComponent, _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_8__.MatSortHeader, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgModel, _timestampform_timestampform_component__WEBPACK_IMPORTED_MODULE_2__.TimestampformComponent, _task_statistic_view_task_statistic_view_component__WEBPACK_IMPORTED_MODULE_3__.TaskStatisticViewComponent, _task_statistic_heatmap_view_task_statistic_heatmap_view_component__WEBPACK_IMPORTED_MODULE_4__.TaskStatisticHeatmapViewComponent], styles: ["table[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  margin-top: 2em;\r\n}\r\napp-task-statistic-view[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\nmat-form-field[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n}\r\n.mat-cell[_ngcontent-%COMP%] {\r\n  padding-top: .5em;\r\n}\r\n.mat-column-taskid[_ngcontent-%COMP%] {\r\n  line-break: anywhere;\r\n}\r\n.occurence-box[_ngcontent-%COMP%] {\r\n  margin-right: 3px;\r\n}\r\ntd.mat-cell.cdk-cell.cdk-column-expandedDetail.mat-column-expandedDetail[_ngcontent-%COMP%] {\r\n  padding-top: 0;\r\n}\r\ntr.mat-row[_ngcontent-%COMP%] {\r\n  height: 64px;\r\n}\r\nmat-cell.cdk-cell[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n}\r\nfa-icon[_ngcontent-%COMP%]   .ng-fa-icon[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\r\n  float: right;\r\n  font-size: 10px;\r\n  color: #829dc1;\r\n}\r\ntr.detail-row[_ngcontent-%COMP%] {\r\n  height: 0;\r\n}\r\ntr.element-row[_ngcontent-%COMP%]:not(.example-expanded-row):hover {\r\n  background: whitesmoke;\r\n}\r\ntr.element-row[_ngcontent-%COMP%]:not(.example-expanded-row):active {\r\n  background: #efefef;\r\n}\r\n.element-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  border-bottom-width: 0;\r\n}\r\n.element-detail[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n  display: flex;\r\n}\r\n.element-diagram[_ngcontent-%COMP%] {\r\n  min-width: 80px;\r\n  border: 2px solid black;\r\n  padding: 8px;\r\n  font-weight: lighter;\r\n  margin: 8px 0;\r\n  height: 104px;\r\n}\r\n.element-symbol[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n  font-size: 40px;\r\n  line-height: normal;\r\n}\r\n.element-description[_ngcontent-%COMP%] {\r\n  padding: 16px;\r\n}\r\n.element-description-attribution[_ngcontent-%COMP%] {\r\n  opacity: 0.5;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhc2stdmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRCQUE0QjtBQUM1QjtFQUNFLFdBQVc7RUFDWCxlQUFlO0FBQ2pCO0FBRUE7RUFDRSxXQUFXO0FBQ2I7QUFFQTtFQUNFLFVBQVU7QUFDWjtBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFDRSxVQUFVO0FBQ1o7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsY0FBYztBQUNoQjtBQUdBO0VBQ0UsU0FBUztBQUNYO0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmO0FBRUE7RUFDRSxlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLGFBQWE7QUFDZjtBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLGFBQWE7QUFDZjtBQUVBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6InRhc2stdmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQGF1dGhvciBSb2JpbiBTdGVpbndhcnogKi9cclxudGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi10b3A6IDJlbTtcclxufVxyXG5cclxuYXBwLXRhc2stc3RhdGlzdGljLXZpZXcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5tYXQtZm9ybS1maWVsZCB7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLm1hdC1jZWxsIHtcclxuICBwYWRkaW5nLXRvcDogLjVlbTtcclxufVxyXG5cclxuLm1hdC1jb2x1bW4tdGFza2lkIHtcclxuICBsaW5lLWJyZWFrOiBhbnl3aGVyZTtcclxufVxyXG5cclxuLm9jY3VyZW5jZS1ib3gge1xyXG4gIG1hcmdpbi1yaWdodDogM3B4O1xyXG59XHJcblxyXG50ZC5tYXQtY2VsbC5jZGstY2VsbC5jZGstY29sdW1uLWV4cGFuZGVkRGV0YWlsLm1hdC1jb2x1bW4tZXhwYW5kZWREZXRhaWwge1xyXG4gIHBhZGRpbmctdG9wOiAwO1xyXG59XHJcblxyXG50ci5tYXQtcm93IHtcclxuICBoZWlnaHQ6IDY0cHg7XHJcbn1cclxuXHJcbm1hdC1jZWxsLmNkay1jZWxsIHtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5mYS1pY29uIC5uZy1mYS1pY29uIC5pbmZvIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIGNvbG9yOiAjODI5ZGMxO1xyXG59XHJcblxyXG5cclxudHIuZGV0YWlsLXJvdyB7XHJcbiAgaGVpZ2h0OiAwO1xyXG59XHJcblxyXG50ci5lbGVtZW50LXJvdzpub3QoLmV4YW1wbGUtZXhwYW5kZWQtcm93KTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcclxufVxyXG5cclxudHIuZWxlbWVudC1yb3c6bm90KC5leGFtcGxlLWV4cGFuZGVkLXJvdyk6YWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xyXG59XHJcblxyXG4uZWxlbWVudC1yb3cgdGQge1xyXG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XHJcbn1cclxuXHJcbi5lbGVtZW50LWRldGFpbCB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uZWxlbWVudC1kaWFncmFtIHtcclxuICBtaW4td2lkdGg6IDgwcHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgcGFkZGluZzogOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gIG1hcmdpbjogOHB4IDA7XHJcbiAgaGVpZ2h0OiAxMDRweDtcclxufVxyXG5cclxuLmVsZW1lbnQtc3ltYm9sIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxufVxyXG5cclxuLmVsZW1lbnQtZGVzY3JpcHRpb24ge1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbn1cclxuXHJcbi5lbGVtZW50LWRlc2NyaXB0aW9uLWF0dHJpYnV0aW9uIHtcclxuICBvcGFjaXR5OiAwLjU7XHJcbn1cclxuIl19 */"], data: { animation: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_16__.trigger)('detailExpand', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_16__.state)('collapsed, void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_16__.style)({ height: '0px', minHeight: '0' })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_16__.state)('expanded', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_16__.style)({ height: '*' })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_16__.transition)('expanded <=> collapsed', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_16__.animate)('50ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
            ]),
        ] }, changeDetection: 0 });


/***/ }),

/***/ 30472:
/*!************************************************************************!*\
  !*** ./src/app/dashboard-new/timestampform/timestampform.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimestampformComponent": () => (/* binding */ TimestampformComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);





/**
 * @author Robin Steinwarz
 */
class TimestampformComponent {
    constructor() {
        this.monthSelectionActive = false;
        this.timestampChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.timestampChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.months = 0;
        this.days = 0;
        this.hours = 0;
        this.minutes = 0;
    }
    ngOnInit() {
        this.applyPastTimeFormatForTimestamp();
    }
    ngOnChanges(changes) {
        this.applyPastTimeFormatForTimestamp();
    }
    applyPastTimeFormatForTimestamp() {
        if (this.timestamp === undefined) {
            return;
        }
        let monthMs = this.timestamp;
        let daysMs = monthMs % (2505600000);
        let hoursMs = daysMs % (86400000);
        let minutesMs = hoursMs % (3600000);
        this.months = Math.floor(monthMs / 2505600000);
        this.days = Math.floor(daysMs / 86400000);
        this.hours = Math.floor(hoursMs / 3600000);
        this.minutes = Math.floor(minutesMs / 60000);
    }
    change() {
        let newTimestamp = (this.months * (2505600000) + this.days * 86400000) + (this.hours * 3600000) + (this.minutes * 60000);
        this.timestampChange.emit(newTimestamp);
        this.timestampChanged.emit(newTimestamp);
    }
}
TimestampformComponent.ɵfac = function TimestampformComponent_Factory(t) { return new (t || TimestampformComponent)(); };
TimestampformComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TimestampformComponent, selectors: [["app-timestampform"]], inputs: { monthSelectionActive: "monthSelectionActive", timestamp: "timestamp", enabled: "enabled" }, outputs: { timestampChange: "timestampChange", timestampChanged: "timestampChanged" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 16, vars: 9, consts: [[2, "width", "45px !important", 3, "hidden"], ["matInput", "", "type", "number", "min", "0", "max", "120", 3, "disabled", "ngModel", "change", "ngModelChange"], [2, "width", "45px !important"], ["matInput", "", "type", "number", "min", "0", "max", "29", 3, "disabled", "ngModel", "change", "ngModelChange"], ["matInput", "", "type", "number", "min", "0", "max", "23", 3, "disabled", "ngModel", "change", "ngModelChange"], ["matInput", "", "type", "number", "min", "0", "max", "59", 3, "disabled", "ngModel", "change", "ngModelChange"]], template: function TimestampformComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 0)(1, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Months");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TimestampformComponent_Template_input_change_3_listener() { return ctx.change(); })("ngModelChange", function TimestampformComponent_Template_input_ngModelChange_3_listener($event) { return ctx.months = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field", 2)(5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Days");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TimestampformComponent_Template_input_change_7_listener() { return ctx.change(); })("ngModelChange", function TimestampformComponent_Template_input_ngModelChange_7_listener($event) { return ctx.days = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 2)(9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Hours");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TimestampformComponent_Template_input_change_11_listener() { return ctx.change(); })("ngModelChange", function TimestampformComponent_Template_input_ngModelChange_11_listener($event) { return ctx.hours = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 2)(13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Minutes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TimestampformComponent_Template_input_change_15_listener() { return ctx.change(); })("ngModelChange", function TimestampformComponent_Template_input_ngModelChange_15_listener($event) { return ctx.minutes = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.monthSelectionActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.enabled)("ngModel", ctx.months);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.enabled)("ngModel", ctx.days);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.enabled)("ngModel", ctx.hours);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.enabled)("ngModel", ctx.minutes);
    } }, dependencies: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_2__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MaxValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpbWVzdGFtcGZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw0QkFBNEIiLCJmaWxlIjoidGltZXN0YW1wZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQGF1dGhvciBSb2JpbiBTdGVpbndhcnogKi9cclxuIl19 */"], changeDetection: 0 });


/***/ }),

/***/ 61836:
/*!****************************************************************************************!*\
  !*** ./src/app/dashboard-new/workitem-queue-dialog/workitem-queue-dialog.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkitemQueueDialogComponent": () => (/* binding */ WorkitemQueueDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sort */ 92197);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/animations */ 24851);
/* harmony import */ var _common_util_format_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/util/format-util */ 17045);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/a11y */ 24218);
/* harmony import */ var _yawl_resources_services_work_item_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../yawl/resources/services/work-item.service */ 43693);
/* harmony import */ var _yawl_resources_services_specification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../yawl/resources/services/specification.service */ 94237);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/toolbar */ 52543);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 19200);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/grid-list */ 42642);






















function WorkitemQueueDialogComponent_th_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Case ID ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function WorkitemQueueDialogComponent_td_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r22.caseid, " ");
} }
function WorkitemQueueDialogComponent_th_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function WorkitemQueueDialogComponent_td_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r23.name, " ");
} }
function WorkitemQueueDialogComponent_th_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function WorkitemQueueDialogComponent_td_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r24.status, " ");
} }
function WorkitemQueueDialogComponent_th_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Created ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function WorkitemQueueDialogComponent_td_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r25 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r8.formatUtils.applyDatetimeFormat(element_r25.created));
} }
function WorkitemQueueDialogComponent_th_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Queue time ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function WorkitemQueueDialogComponent_td_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r26 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r10.formatUtils.applyPastTimeFormatForTimestampWithDays(element_r26.queueTime), " ");
} }
function WorkitemQueueDialogComponent_th_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Overdue ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function WorkitemQueueDialogComponent_td_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r27 = ctx.$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r12.formatUtils.applyIsOverdueFormat(element_r27.leadTime, ctx_r12.getOverdueLimit(element_r27)));
} }
function WorkitemQueueDialogComponent_th_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Actions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function WorkitemQueueDialogComponent_td_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 36)(1, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "fa-icon", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("href", ctx_r14.workitemURL, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("fixedWidth", true);
} }
function WorkitemQueueDialogComponent_th_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function WorkitemQueueDialogComponent_td_51_fa_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "fa-icon", 48);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("fixedWidth", true);
} }
function WorkitemQueueDialogComponent_td_51_fa_icon_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "fa-icon", 49);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("fixedWidth", true);
} }
function WorkitemQueueDialogComponent_td_51_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 36)(1, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WorkitemQueueDialogComponent_td_51_Template_button_click_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r33); const element_r29 = restoredCtx.$implicit; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); ctx_r32.expandedElement = ctx_r32.expandedElement === element_r29 ? null : element_r29; return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event.stopPropagation()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, WorkitemQueueDialogComponent_td_51_fa_icon_2_Template, 1, 1, "fa-icon", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, WorkitemQueueDialogComponent_td_51_fa_icon_3_Template, 1, 1, "fa-icon", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const element_r29 = ctx.$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r16.expandedElement !== element_r29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r16.expandedElement === element_r29);
} }
function WorkitemQueueDialogComponent_td_53_input_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "input", 54);
} }
function WorkitemQueueDialogComponent_td_53_textarea_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "textarea", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r36.formatUtils.applyResourcesArrayFormat(ctx_r36.computeResourcesAsked(element_r34)));
} }
function WorkitemQueueDialogComponent_td_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 36)(1, "div", 50)(2, "mat-grid-list", 7)(3, "mat-grid-tile")(4, "mat-form-field", 8)(5, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Queue time limit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "mat-grid-tile")(9, "mat-form-field", 8)(10, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Avg. queue time for task");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "mat-grid-tile")(14, "mat-form-field", 8)(15, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Avg. time to reach");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "mat-grid-tile", 51)(19, "mat-form-field", 8)(20, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Work item was offered or allocated to");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, WorkitemQueueDialogComponent_td_53_input_22_Template, 1, 0, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, WorkitemQueueDialogComponent_td_53_textarea_23_Template, 2, 1, "textarea", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const element_r34 = ctx.$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("colspan", ctx_r17.displayedColumnsWithExpand.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("@detailExpand", element_r34 == ctx_r17.expandedElement ? "expanded" : "collapsed");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", ctx_r17.formatUtils.applyPastTimeFormatForTimestampWithDays(ctx_r17.taskStatisticMap.get(element_r34.taskid).maxQueueAge));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", ctx_r17.formatUtils.applyPastTimeFormatForTimestampWithDays(ctx_r17.taskStatisticMap.get(element_r34.taskid).avgQueueTime));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", ctx_r17.formatUtils.applyPastTimeFormatForTimestampWithDays(ctx_r17.taskStatisticMap.get(element_r34.taskid).avgTimeToReach));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", element_r34.automated);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !element_r34.automated);
} }
function WorkitemQueueDialogComponent_tr_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 56);
} }
function WorkitemQueueDialogComponent_tr_55_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WorkitemQueueDialogComponent_tr_55_Template_tr_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r40); const element_r38 = restoredCtx.$implicit; const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r39.expandedElement = ctx_r39.expandedElement === element_r38 ? null : element_r38); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r38 = ctx.$implicit;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("expanded-row", ctx_r19.expandedElement === element_r38);
} }
function WorkitemQueueDialogComponent_tr_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 58);
} }
function WorkitemQueueDialogComponent_tr_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 59)(1, "td", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Empty table ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("colspan", ctx_r21.displayedColumnsWithExpand.length);
} }
const _c0 = function () { return ["expandedDetail"]; };
/**
 * @author Robin Steinwarz
 */
class WorkitemQueueDialogComponent {
    constructor(_liveAnnouncer, workItemService, specificationService, fb, dialogRef, data) {
        this._liveAnnouncer = _liveAnnouncer;
        this.workItemService = workItemService;
        this.specificationService = specificationService;
        this.fb = fb;
        this.dialogRef = dialogRef;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource();
        this.displayedColumns = ['caseid', 'name', 'status', 'created', 'queueTime', 'overdue', 'actions'];
        this.displayedColumnsWithExpand = ['expand', ...this.displayedColumns];
        this.formatUtils = new _common_util_format_util__WEBPACK_IMPORTED_MODULE_0__.FormatUtils();
        this.workitemURL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.env.remoteUIUrl;
        this.taskStatisticMap = new Map();
        this.queueSize = 0;
        this.specificationDataContainer = data.specificationDataContainer;
    }
    ngOnInit() {
        let workitems = [];
        this.specificationDataContainer.specificationStatistic.caseStatisticDTOS.forEach(caseInstance => {
            workitems.push(...caseInstance.queue);
        });
        this.specificationDataContainer.specificationStatistic.taskStatisticDTOS.forEach(taskStatistic => {
            this.taskStatisticMap.set(taskStatistic.taskid, taskStatistic);
        });
        this.queueSize = workitems.length;
        this.dataSource.data = workitems.sort((a, b) => a.order.localeCompare(b.order));
    }
    ngAfterViewInit() {
        this.dataSource.sort = this.sort;
    }
    close() {
        this.dialogRef.close();
    }
    getOverdueLimit(workitem) {
        let taskStatistic = this.taskStatisticMap.get(workitem.taskid);
        if (workitem.startTimestamp === 0) {
            return taskStatistic.maxQueueAge;
        }
        else {
            return taskStatistic.maxTaskAge;
        }
    }
    computeAvgQueueTimeForAllTasks() {
        let total = 0;
        let counter = 0;
        this.specificationDataContainer.specificationStatistic.taskStatisticDTOS.forEach(task => {
            total += task.avgQueueTime;
            counter++;
        });
        return this.formatUtils.applyPastTimeFormatForTimestampWithDays(total / counter);
    }
    computeResourcesAsked(workitem) {
        let resourceMap = new Map();
        this.specificationDataContainer.resources.forEach(resource => {
            resourceMap.set(resource.id, resource);
        });
        let resourcesArray = [];
        Object.entries(workitem.resources).forEach(entry => {
            if (entry[0] !== "system") {
                let isRelevant = false;
                for (let event of entry[1]) {
                    if (event === "Offer" || event === "Allocate") {
                        isRelevant = true;
                        break;
                    }
                }
                if (isRelevant) {
                    resourcesArray.push(resourceMap.get(entry[0]));
                }
            }
        });
        return resourcesArray;
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    /** Announce the change in sort state for assistive technology. */
    announceSortChange(sortState) {
        if (sortState.direction === '') {
            this.dataSource?.data.sort((a, b) => a.order.localeCompare(b.order));
        }
        return;
    }
}
WorkitemQueueDialogComponent.ɵfac = function WorkitemQueueDialogComponent_Factory(t) { return new (t || WorkitemQueueDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__.LiveAnnouncer), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_yawl_resources_services_work_item_service__WEBPACK_IMPORTED_MODULE_2__.WorkItemService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_yawl_resources_services_specification_service__WEBPACK_IMPORTED_MODULE_3__.SpecificationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MAT_DIALOG_DATA)); };
WorkitemQueueDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: WorkitemQueueDialogComponent, selectors: [["app-workitem-queue-dialog"]], viewQuery: function WorkitemQueueDialogComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_9__.MatSort, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 58, vars: 9, consts: [[1, "dialog", 2, "height", "70vh", "overflow-y", "auto"], [1, "modal-toolbar"], ["mat-button", "", 1, "back-button", 3, "click"], ["icon", "arrow-left-long", "matTooltip", "Close the workitem queue modal.", 3, "fixedWidth"], [1, "spacer"], ["icon", "circle-info", "matTooltip", "This dialog summarizes all work items waiting to be processed by resources.", 1, "info", 2, "color", "#12376a", 3, "fixedWidth"], [1, "statistics"], ["rowHeight", "70px", "cols", "6"], ["appearance", "fill", "disabled", "", 1, "grid-form"], ["matInput", "", "disabled", "", 3, "value"], [1, "mat-mdc-form-field"], ["matInput", "", "type", "text", "placeholder", "", 3, "keyup"], ["input", ""], ["mat-table", "", "multiTemplateDataRows", "", "matSort", "", 1, "mat-elevation-z8", 3, "dataSource", "matSortChange"], ["matColumnDef", "caseid"], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by caseId", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by specification work item name", 4, "matHeaderCellDef"], ["matColumnDef", "status"], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by status", 4, "matHeaderCellDef"], ["matColumnDef", "created"], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by created", 4, "matHeaderCellDef"], ["matColumnDef", "queueTime"], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by queue time", 4, "matHeaderCellDef"], ["matColumnDef", "overdue"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "actions"], ["matColumnDef", "expand"], ["mat-header-cell", "", "aria-label", "row actions", 4, "matHeaderCellDef"], ["matColumnDef", "expandedDetail"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", "class", "element-row", 3, "expanded-row", "click", 4, "matRowDef", "matRowDefColumns"], ["mat-row", "", "class", "detail-row", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by caseId"], ["mat-cell", ""], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by specification work item name"], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by status"], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by created"], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by queue time"], ["mat-header-cell", ""], ["target", "_blank", 3, "href"], ["icon", "pencil", "matTooltip", "Redirect to the yawl frontend.", 3, "fixedWidth"], ["mat-header-cell", "", "aria-label", "row actions"], ["mat-icon-button", "", "aria-label", "expand row", 3, "click"], ["matTooltip", "Expand details row.", "icon", "chevron-down", 3, "fixedWidth", 4, "ngIf"], ["matTooltip", "Close details row.", "icon", "chevron-up", 3, "fixedWidth", 4, "ngIf"], ["matTooltip", "Expand details row.", "icon", "chevron-down", 3, "fixedWidth"], ["matTooltip", "Close details row.", "icon", "chevron-up", 3, "fixedWidth"], [1, "element-detail"], ["colspan", "2"], ["matInput", "", "disabled", "", "value", "Automated", 4, "ngIf"], ["class", "full-form-field", "disabled", "true", "matInput", "", 4, "ngIf"], ["matInput", "", "disabled", "", "value", "Automated"], ["disabled", "true", "matInput", "", 1, "full-form-field"], ["mat-header-row", ""], ["mat-row", "", 1, "element-row", 3, "click"], ["mat-row", "", 1, "detail-row"], [1, "mat-row"], [1, "mat-cell", 2, "text-align", "center", "color", "#5e5e5e"]], template: function WorkitemQueueDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "mat-toolbar", 1)(2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WorkitemQueueDialogComponent_Template_button_click_2_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "fa-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Workitem queue ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "fa-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 6)(11, "mat-grid-list", 7)(12, "mat-grid-tile")(13, "mat-form-field", 8)(14, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Queue size");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "mat-grid-tile")(18, "mat-form-field", 8)(19, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Avg. queue time");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "mat-form-field", 10)(23, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keyup", function WorkitemQueueDialogComponent_Template_input_keyup_25_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "table", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("matSortChange", function WorkitemQueueDialogComponent_Template_table_matSortChange_27_listener($event) { return ctx.announceSortChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](28, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, WorkitemQueueDialogComponent_th_29_Template, 2, 0, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, WorkitemQueueDialogComponent_td_30_Template, 2, 1, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](31, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](32, WorkitemQueueDialogComponent_th_32_Template, 2, 0, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](33, WorkitemQueueDialogComponent_td_33_Template, 2, 1, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](34, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](35, WorkitemQueueDialogComponent_th_35_Template, 2, 0, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](36, WorkitemQueueDialogComponent_td_36_Template, 2, 1, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](37, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](38, WorkitemQueueDialogComponent_th_38_Template, 2, 0, "th", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](39, WorkitemQueueDialogComponent_td_39_Template, 2, 1, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](40, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](41, WorkitemQueueDialogComponent_th_41_Template, 2, 0, "th", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](42, WorkitemQueueDialogComponent_td_42_Template, 2, 1, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](43, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](44, WorkitemQueueDialogComponent_th_44_Template, 2, 0, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](45, WorkitemQueueDialogComponent_td_45_Template, 2, 1, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](46, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](47, WorkitemQueueDialogComponent_th_47_Template, 2, 0, "th", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](48, WorkitemQueueDialogComponent_td_48_Template, 3, 2, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](49, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](50, WorkitemQueueDialogComponent_th_50_Template, 2, 0, "th", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](51, WorkitemQueueDialogComponent_td_51_Template, 4, 2, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](52, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](53, WorkitemQueueDialogComponent_td_53_Template, 24, 7, "td", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](54, WorkitemQueueDialogComponent_tr_54_Template, 1, 0, "tr", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](55, WorkitemQueueDialogComponent_tr_55_Template, 1, 2, "tr", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](56, WorkitemQueueDialogComponent_tr_56_Template, 1, 0, "tr", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](57, WorkitemQueueDialogComponent_tr_57_Template, 3, 1, "tr", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("fixedWidth", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("fixedWidth", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", ctx.queueSize);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", ctx.computeAvgQueueTimeForAllTasks());
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumnsWithExpand);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumnsWithExpand);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRowDefColumns", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](8, _c0));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInput, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatNoDataRow, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__.MatToolbar, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__.MatTooltip, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_16__.FaIconComponent, _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__.MatSortHeader, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__.MatGridList, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__.MatGridTile], styles: ["mat-dialog-container[_ngcontent-%COMP%] {\r\n  display: block; \r\n}\r\n\r\n\r\n\r\nmat-dialog-container[_ngcontent-%COMP%] {\r\n  overflow-y: initial\r\n}\r\n\r\nmat-dialog-container[_ngcontent-%COMP%]   .mat-dialog-container[_ngcontent-%COMP%]   .cdk-dialog-container[_ngcontent-%COMP%] {\r\n  height: 80vh;\r\n  overflow-y: auto;\r\n}\r\n\r\ntable[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\n.dialog[_ngcontent-%COMP%] {\r\n  width: 1000px;\r\n}\r\n\r\n.spacer[_ngcontent-%COMP%] {\r\n  flex: 1 1 auto;\r\n}\r\n\r\nspan[_ngcontent-%COMP%] {\r\n  font-size: 15px;\r\n  font-weight: normal;\r\n  font-family: Roboto, Helvetica, sans-serif;\r\n  color: #5e5e5e;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n}\r\n\r\nmat-toolbar.modal-toolbar[_ngcontent-%COMP%] {\r\n  height: 40px;\r\n  padding: 0 10px 0 0;\r\n}\r\n\r\nmat-toolbar.modal-toolbar[_ngcontent-%COMP%]:hover {\r\n  cursor: pointer;\r\n}\r\n\r\nmat-grid-list[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\n.statistics[_ngcontent-%COMP%] {\r\n  width: 100%\r\n}\r\n\r\n.grid-form[_ngcontent-%COMP%] {\r\n  width: 98%;\r\n}\r\n\r\ntr.detail-row[_ngcontent-%COMP%] {\r\n  height: 0;\r\n}\r\n\r\ntr.element-row[_ngcontent-%COMP%]:not(.example-expanded-row):hover {\r\n  background: whitesmoke;\r\n}\r\n\r\ntr.element-row[_ngcontent-%COMP%]:not(.example-expanded-row):active {\r\n  background: #efefef;\r\n}\r\n\r\n.element-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  border-bottom-width: 0;\r\n}\r\n\r\n.element-detail[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n  display: flex;\r\n}\r\n\r\n.element-diagram[_ngcontent-%COMP%] {\r\n  min-width: 80px;\r\n  border: 2px solid black;\r\n  padding: 8px;\r\n  font-weight: lighter;\r\n  margin: 8px 0;\r\n  height: 104px;\r\n}\r\n\r\n.element-symbol[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n  font-size: 40px;\r\n  line-height: normal;\r\n}\r\n\r\n.element-description[_ngcontent-%COMP%] {\r\n  padding: 16px;\r\n}\r\n\r\n.element-description-attribution[_ngcontent-%COMP%] {\r\n  opacity: 0.5;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmtpdGVtLXF1ZXVlLWRpYWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDRCQUE0Qjs7QUFFNUI7RUFDRSxjQUFjLEVBQUUsdURBQXVEO0FBQ3pFOztBQUVBLG1CQUFtQjs7QUFDbkI7RUFDRTtBQUNGOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLDBDQUEwQztFQUMxQyxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUdBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IsYUFBYTtBQUNmOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoid29ya2l0ZW0tcXVldWUtZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBAYXV0aG9yIFJvYmluIFN0ZWlud2FyeiAqL1xyXG5cclxubWF0LWRpYWxvZy1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGJsb2NrOyAvKiBJIGFkZGVkIHRoaXMgdG8gc2VlIHRoZSBtb2RhbCwgeW91IGRvbid0IG5lZWQgdGhpcyAqL1xyXG59XHJcblxyXG4vKiBJbXBvcnRhbnQgcGFydCAqL1xyXG5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XHJcbiAgb3ZlcmZsb3cteTogaW5pdGlhbFxyXG59XHJcblxyXG5tYXQtZGlhbG9nLWNvbnRhaW5lciAubWF0LWRpYWxvZy1jb250YWluZXIgLmNkay1kaWFsb2ctY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDgwdmg7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxudGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZGlhbG9nIHtcclxuICB3aWR0aDogMTAwMHB4O1xyXG59XHJcblxyXG4uc3BhY2VyIHtcclxuICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG5cclxuc3BhbiB7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiAjNWU1ZTVlO1xyXG59XHJcblxyXG5hIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbm1hdC10b29sYmFyLm1vZGFsLXRvb2xiYXIge1xyXG4gIGhlaWdodDogNDBweDtcclxuICBwYWRkaW5nOiAwIDEwcHggMCAwO1xyXG59XHJcblxyXG5tYXQtdG9vbGJhci5tb2RhbC10b29sYmFyOmhvdmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbm1hdC1ncmlkLWxpc3Qge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uc3RhdGlzdGljcyB7XHJcbiAgd2lkdGg6IDEwMCVcclxufVxyXG5cclxuLmdyaWQtZm9ybSB7XHJcbiAgd2lkdGg6IDk4JTtcclxufVxyXG5cclxuXHJcbnRyLmRldGFpbC1yb3cge1xyXG4gIGhlaWdodDogMDtcclxufVxyXG5cclxudHIuZWxlbWVudC1yb3c6bm90KC5leGFtcGxlLWV4cGFuZGVkLXJvdyk6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XHJcbn1cclxuXHJcbnRyLmVsZW1lbnQtcm93Om5vdCguZXhhbXBsZS1leHBhbmRlZC1yb3cpOmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZDogI2VmZWZlZjtcclxufVxyXG5cclxuLmVsZW1lbnQtcm93IHRkIHtcclxuICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xyXG59XHJcblxyXG4uZWxlbWVudC1kZXRhaWwge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmVsZW1lbnQtZGlhZ3JhbSB7XHJcbiAgbWluLXdpZHRoOiA4MHB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICBtYXJnaW46IDhweCAwO1xyXG4gIGhlaWdodDogMTA0cHg7XHJcbn1cclxuXHJcbi5lbGVtZW50LXN5bWJvbCB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbi5lbGVtZW50LWRlc2NyaXB0aW9uIHtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG59XHJcblxyXG4uZWxlbWVudC1kZXNjcmlwdGlvbi1hdHRyaWJ1dGlvbiB7XHJcbiAgb3BhY2l0eTogMC41O1xyXG59XHJcbiJdfQ== */"], data: { animation: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_18__.trigger)('detailExpand', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_18__.state)('collapsed, void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_18__.style)({ height: '0px', minHeight: '0' })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_18__.state)('expanded', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_18__.style)({ height: '*' })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_18__.transition)('expanded <=> collapsed', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_18__.animate)('50ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
            ]),
        ] } });


/***/ }),

/***/ 30684:
/*!******************************************************************************!*\
  !*** ./src/app/dashboard-new/workitems-dialog/workitems-dialog.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkitemsDialogComponent": () => (/* binding */ WorkitemsDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sort */ 92197);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/animations */ 24851);
/* harmony import */ var _common_util_format_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/util/format-util */ 17045);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/a11y */ 24218);
/* harmony import */ var _yawl_resources_services_work_item_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../yawl/resources/services/work-item.service */ 43693);
/* harmony import */ var _yawl_resources_services_specification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../yawl/resources/services/specification.service */ 94237);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/toolbar */ 52543);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 19200);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/grid-list */ 42642);






















function WorkitemsDialogComponent_th_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Workitem ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function WorkitemsDialogComponent_td_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r24.name, " ");
} }
function WorkitemsDialogComponent_th_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Process log order ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function WorkitemsDialogComponent_td_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r25.order, " ");
} }
function WorkitemsDialogComponent_th_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function WorkitemsDialogComponent_td_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", element_r26.status, "");
} }
function WorkitemsDialogComponent_th_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Queue time ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function WorkitemsDialogComponent_td_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r27 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r8.formatUtils.applyPastTimeFormatForTimestampWithDays(element_r27.queueTime));
} }
function WorkitemsDialogComponent_th_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Completion time ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function WorkitemsDialogComponent_td_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r28 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r10.formatUtils.applyPastTimeFormatForTimestampWithDays(element_r28.completionTime));
} }
function WorkitemsDialogComponent_th_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Resource ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function WorkitemsDialogComponent_td_33_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r30.formatUtils.applyResourcesArrayFormat(ctx_r30.computeResources(element_r29)), " ");
} }
function WorkitemsDialogComponent_td_33_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Automated ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function WorkitemsDialogComponent_td_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, WorkitemsDialogComponent_td_33_span_1_Template, 2, 1, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, WorkitemsDialogComponent_td_33_span_2_Template, 2, 0, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !element_r29.automated);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", element_r29.automated);
} }
function WorkitemsDialogComponent_th_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Overdue ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function WorkitemsDialogComponent_td_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r33 = ctx.$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r14.formatUtils.applyIsOverdueFormat(element_r33.leadTime, ctx_r14.getOverdueLimit(element_r33)));
} }
function WorkitemsDialogComponent_th_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Actions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function WorkitemsDialogComponent_td_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 35)(1, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "fa-icon", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("href", ctx_r16.workitemURL, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("fixedWidth", true);
} }
function WorkitemsDialogComponent_th_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function WorkitemsDialogComponent_td_42_fa_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "fa-icon", 49);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("fixedWidth", true);
} }
function WorkitemsDialogComponent_td_42_fa_icon_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "fa-icon", 50);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("fixedWidth", true);
} }
function WorkitemsDialogComponent_td_42_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 35)(1, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WorkitemsDialogComponent_td_42_Template_button_click_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r39); const element_r35 = restoredCtx.$implicit; const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); ctx_r38.expandedElement = ctx_r38.expandedElement === element_r35 ? null : element_r35; return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event.stopPropagation()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, WorkitemsDialogComponent_td_42_fa_icon_2_Template, 1, 1, "fa-icon", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, WorkitemsDialogComponent_td_42_fa_icon_3_Template, 1, 1, "fa-icon", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const element_r35 = ctx.$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r18.expandedElement !== element_r35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r18.expandedElement === element_r35);
} }
function WorkitemsDialogComponent_td_44_mat_form_field_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-form-field", 54)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Max queue time");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", ctx_r41.formatUtils.applyPastTimeFormatForTimestampWithDays(ctx_r41.taskstatisticMap.get(element_r40.taskid).maxQueueAge));
} }
function WorkitemsDialogComponent_td_44_mat_form_field_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-form-field", 54)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Max task time");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", ctx_r42.formatUtils.applyPastTimeFormatForTimestampWithDays(ctx_r42.taskstatisticMap.get(element_r40.taskid).maxTaskAge));
} }
function WorkitemsDialogComponent_td_44_input_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "input", 60);
} }
function WorkitemsDialogComponent_td_44_textarea_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "textarea", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r44.formatUtils.applyResourcesArrayFormat(ctx_r44.computeResourcesAsked(element_r40)));
} }
function WorkitemsDialogComponent_td_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 35)(1, "div", 51)(2, "mat-grid-list", 52)(3, "mat-grid-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, WorkitemsDialogComponent_td_44_mat_form_field_4_Template, 4, 1, "mat-form-field", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, WorkitemsDialogComponent_td_44_mat_form_field_5_Template, 4, 1, "mat-form-field", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "mat-grid-tile")(7, "mat-form-field", 54)(8, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Avg. queue time");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "mat-grid-tile")(12, "mat-form-field", 54)(13, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Avg. completion time");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "mat-grid-tile")(17, "mat-form-field", 54)(18, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Avg. time to reach");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "mat-grid-tile", 56)(22, "mat-form-field", 54)(23, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Work item was offered or allocated to");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, WorkitemsDialogComponent_td_44_input_25_Template, 1, 0, "input", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, WorkitemsDialogComponent_td_44_textarea_26_Template, 2, 1, "textarea", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "mat-grid-tile", 59)(28, "mat-form-field", 54)(29, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "Created");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](31, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "mat-grid-tile", 59)(33, "mat-form-field", 54)(34, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "Completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](36, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const element_r40 = ctx.$implicit;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("colspan", ctx_r19.displayedColumnsWithExpand.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("@detailExpand", element_r40 == ctx_r19.expandedElement ? "expanded" : "collapsed");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", element_r40.status === "Offered" || element_r40.status === "Allocated");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !(element_r40.status === "Offered" || element_r40.status === "Allocated"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", ctx_r19.formatUtils.applyPastTimeFormatForTimestampWithDays(ctx_r19.taskstatisticMap.get(element_r40.taskid).avgQueueTime));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", ctx_r19.formatUtils.applyPastTimeFormatForTimestampWithDays(ctx_r19.taskstatisticMap.get(element_r40.taskid).avgCompletionTime));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", ctx_r19.formatUtils.applyPastTimeFormatForTimestampWithDays(ctx_r19.taskstatisticMap.get(element_r40.taskid).avgTimeToReach));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", element_r40.automated);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !element_r40.automated);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", ctx_r19.formatUtils.applyDatetimeFormat(element_r40.created));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", ctx_r19.formatUtils.applyDatetimeFormat(element_r40.endTimestamp));
} }
function WorkitemsDialogComponent_tr_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 62);
} }
function WorkitemsDialogComponent_tr_46_Template(rf, ctx) { if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WorkitemsDialogComponent_tr_46_Template_tr_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r50); const element_r48 = restoredCtx.$implicit; const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r49.expandedElement = ctx_r49.expandedElement === element_r48 ? null : element_r48); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r48 = ctx.$implicit;
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("expanded-row", ctx_r21.expandedElement === element_r48);
} }
function WorkitemsDialogComponent_tr_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 64);
} }
function WorkitemsDialogComponent_tr_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 65)(1, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Empty table ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("colspan", ctx_r23.displayedColumnsWithExpand.length);
} }
const _c0 = function () { return ["expandedDetail"]; };
/**
 * @author Robin Steinwarz
 */
class WorkitemsDialogComponent {
    constructor(_liveAnnouncer, workItemService, specificationService, fb, dialogRef, data) {
        this._liveAnnouncer = _liveAnnouncer;
        this.workItemService = workItemService;
        this.specificationService = specificationService;
        this.fb = fb;
        this.dialogRef = dialogRef;
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTableDataSource();
        this.displayedColumns = ['name', 'order', 'status', 'queueTime', 'completionTime', 'resources', 'overdue', 'actions'];
        this.displayedColumnsWithExpand = ['expand', ...this.displayedColumns];
        this.formatUtils = new _common_util_format_util__WEBPACK_IMPORTED_MODULE_0__.FormatUtils();
        this.workitemURL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.env.remoteUIUrl;
        this.taskstatisticMap = new Map();
        this.specificationDataContainer = data.specificationDataContainer;
        this.caseid = data.caseid;
    }
    ngOnInit() {
        this.specificationDataContainer.specificationStatistic.taskStatisticDTOS.forEach(taskStatistic => {
            this.taskstatisticMap.set(taskStatistic.taskid, taskStatistic);
        });
        this.relevantCaseStatistic = this.specificationDataContainer.specificationStatistic.caseStatisticDTOS
            .filter(caseInstance => caseInstance.caseid === this.caseid)[0];
        this.dataSource.data = this.relevantCaseStatistic.workitemDTOS.sort((a, b) => a.order.localeCompare(b.order));
    }
    ngAfterViewInit() {
        this.dataSource.sort = this.sort;
    }
    close() {
        this.dialogRef.close();
    }
    computeResourcesAsked(workitem) {
        let resourceMap = new Map();
        this.specificationDataContainer.resources.forEach(resource => {
            resourceMap.set(resource.id, resource);
        });
        let resourcesArray = [];
        Object.entries(workitem.resources).forEach(entry => {
            if (entry[0] !== "system") {
                let isRelevant = false;
                for (let event of entry[1]) {
                    if (event === "Offer" || event === "Allocate") {
                        isRelevant = true;
                        break;
                    }
                }
                if (isRelevant) {
                    resourcesArray.push(resourceMap.get(entry[0]));
                }
            }
        });
        return resourcesArray;
    }
    computeResources(workitem) {
        let resourceMap = new Map();
        this.specificationDataContainer.resources.forEach(resource => {
            resourceMap.set(resource.id, resource);
        });
        let resourcesArray = [];
        Object.entries(workitem.resources).forEach(entry => {
            if (entry[0] !== "system") {
                let isRelevant = false;
                for (let event of entry[1]) {
                    if (event === "Start" || event === "Complete") {
                        isRelevant = true;
                        break;
                    }
                }
                if (isRelevant) {
                    resourcesArray.push(resourceMap.get(entry[0]));
                }
            }
        });
        return resourcesArray;
    }
    getOverdueLimit(workitem) {
        let taskStatistic = this.taskstatisticMap.get(workitem.taskid);
        if (workitem.startTimestamp === 0) {
            return taskStatistic.maxQueueAge;
        }
        else {
            return taskStatistic.maxTaskAge;
        }
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    announceSortChange(sortState) {
        if (sortState.direction === '') {
            this.dataSource?.data.sort((a, b) => a.order.localeCompare(b.order));
        }
        if (sortState.active === 'resources' && sortState.direction === 'asc') {
            this.dataSource?.data.sort((a, b) => {
                return this.getRessourcesString(a).localeCompare(this.getRessourcesString(b));
            });
        }
        else if (sortState.active === 'resources' && sortState.direction === 'desc') {
            this.dataSource?.data.sort((a, b) => {
                return this.getRessourcesString(b).localeCompare(this.getRessourcesString(a));
            });
        }
        return;
    }
    getRessourcesString(resourcesList) {
        return this.computeResources(resourcesList).map(a => a.firstname + " " + a.lastname).join(" ");
    }
}
WorkitemsDialogComponent.ɵfac = function WorkitemsDialogComponent_Factory(t) { return new (t || WorkitemsDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_6__.LiveAnnouncer), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_yawl_resources_services_work_item_service__WEBPACK_IMPORTED_MODULE_2__.WorkItemService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_yawl_resources_services_specification_service__WEBPACK_IMPORTED_MODULE_3__.SpecificationService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MAT_DIALOG_DATA)); };
WorkitemsDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: WorkitemsDialogComponent, selectors: [["app-workitems-dialog"]], viewQuery: function WorkitemsDialogComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_9__.MatSort, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 49, vars: 9, consts: [[1, "dialog", 2, "height", "60vh", "overflow-y", "auto"], [1, "modal-toolbar"], ["mat-button", "", 1, "back-button", 3, "click"], ["icon", "arrow-left-long", "matTooltip", "Close the work items modal.", 3, "fixedWidth"], [1, "spacer"], ["icon", "circle-info", 1, "info", 2, "color", "#12376a", 3, "fixedWidth", "matTooltip"], [1, "mat-mdc-form-field"], ["matInput", "", "type", "text", "placeholder", "", 3, "keyup"], ["input", ""], ["mat-table", "", "multiTemplateDataRows", "", "matSort", "", 1, "mat-elevation-z8", 3, "dataSource", "matSortChange"], ["matColumnDef", "name"], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by workitem name", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "order"], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by order", 4, "matHeaderCellDef"], ["matColumnDef", "status"], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by status", 4, "matHeaderCellDef"], ["matColumnDef", "queueTime"], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by queue time", 4, "matHeaderCellDef"], ["matColumnDef", "completionTime"], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by completionTime", 4, "matHeaderCellDef"], ["matColumnDef", "resources"], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by resource", 4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "overdue"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "actions"], ["matColumnDef", "expand"], ["mat-header-cell", "", "aria-label", "row actions", 4, "matHeaderCellDef"], ["matColumnDef", "expandedDetail"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", "class", "element-row", 3, "expanded-row", "click", 4, "matRowDef", "matRowDefColumns"], ["mat-row", "", "class", "detail-row", 4, "matRowDef", "matRowDefColumns"], ["class", "mat-row", 4, "matNoDataRow"], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by workitem name"], ["mat-cell", ""], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by order"], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by status"], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by queue time"], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by completionTime"], ["mat-header-cell", "", "mat-sort-header", "", "sortActionDescription", "Sort by resource"], [4, "ngIf"], ["mat-header-cell", ""], ["target", "_blank", 3, "href"], ["icon", "pencil", "matTooltip", "Redirect to the yawl dashboard.", 3, "fixedWidth"], ["mat-header-cell", "", "aria-label", "row actions"], ["mat-icon-button", "", "aria-label", "expand row", 3, "click"], ["matTooltip", "Expand details row.", "icon", "chevron-down", 3, "fixedWidth", 4, "ngIf"], ["matTooltip", "Close details row.", "icon", "chevron-up", 3, "fixedWidth", 4, "ngIf"], ["matTooltip", "Expand details row.", "icon", "chevron-down", 3, "fixedWidth"], ["matTooltip", "Close details row.", "icon", "chevron-up", 3, "fixedWidth"], [1, "element-detail"], ["rowHeight", "70px", "cols", "6"], ["class", "grid-form", "appearance", "fill", "disabled", "", 4, "ngIf"], ["appearance", "fill", "disabled", "", 1, "grid-form"], ["matInput", "", "disabled", "", 3, "value"], ["rowspan", "2", "colspan", "2"], ["matInput", "", "disabled", "", "value", "Automated", 4, "ngIf"], ["rows", "5", "class", "full-form-field", "disabled", "true", "matInput", "", 4, "ngIf"], ["colspan", "2"], ["matInput", "", "disabled", "", "value", "Automated"], ["rows", "5", "disabled", "true", "matInput", "", 1, "full-form-field"], ["mat-header-row", ""], ["mat-row", "", 1, "element-row", 3, "click"], ["mat-row", "", 1, "detail-row"], [1, "mat-row"], [1, "mat-cell", 2, "text-align", "center", "color", "#5e5e5e"]], template: function WorkitemsDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "mat-toolbar", 1)(2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WorkitemsDialogComponent_Template_button_click_2_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "fa-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "fa-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "mat-form-field", 6)(11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keyup", function WorkitemsDialogComponent_Template_input_keyup_13_listener($event) { return ctx.applyFilter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "table", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("matSortChange", function WorkitemsDialogComponent_Template_table_matSortChange_15_listener($event) { return ctx.announceSortChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](16, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, WorkitemsDialogComponent_th_17_Template, 2, 0, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, WorkitemsDialogComponent_td_18_Template, 2, 1, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](19, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, WorkitemsDialogComponent_th_20_Template, 2, 0, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, WorkitemsDialogComponent_td_21_Template, 2, 1, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](22, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, WorkitemsDialogComponent_th_23_Template, 2, 0, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, WorkitemsDialogComponent_td_24_Template, 2, 1, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](25, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, WorkitemsDialogComponent_th_26_Template, 2, 0, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, WorkitemsDialogComponent_td_27_Template, 2, 1, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](28, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, WorkitemsDialogComponent_th_29_Template, 2, 0, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, WorkitemsDialogComponent_td_30_Template, 2, 1, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](31, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](32, WorkitemsDialogComponent_th_32_Template, 2, 0, "th", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](33, WorkitemsDialogComponent_td_33_Template, 3, 2, "td", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](34, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](35, WorkitemsDialogComponent_th_35_Template, 2, 0, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](36, WorkitemsDialogComponent_td_36_Template, 2, 1, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](37, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](38, WorkitemsDialogComponent_th_38_Template, 2, 0, "th", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](39, WorkitemsDialogComponent_td_39_Template, 3, 2, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](40, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](41, WorkitemsDialogComponent_th_41_Template, 2, 0, "th", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](42, WorkitemsDialogComponent_td_42_Template, 4, 2, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](43, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](44, WorkitemsDialogComponent_td_44_Template, 37, 11, "td", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](45, WorkitemsDialogComponent_tr_45_Template, 1, 0, "tr", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](46, WorkitemsDialogComponent_tr_46_Template, 1, 2, "tr", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](47, WorkitemsDialogComponent_tr_47_Template, 1, 0, "tr", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](48, WorkitemsDialogComponent_tr_48_Template, 3, 1, "tr", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("fixedWidth", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Case Id: ", ctx.caseid, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("matTooltip", "This dialog shows the exact processing of this case ", ctx.caseid, ". Accordingly, all corresponding work items are listed in the order in which they appeared in this process.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("fixedWidth", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumnsWithExpand);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumnsWithExpand);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRowDefColumns", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](8, _c0));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInput, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_5__.MatNoDataRow, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__.MatToolbar, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__.MatTooltip, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_16__.FaIconComponent, _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_9__.MatSortHeader, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__.MatGridList, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__.MatGridTile], styles: ["mat-dialog-container[_ngcontent-%COMP%] {\r\n  display: block !important; \r\n}\r\n\r\nmat-dialog-container[_ngcontent-%COMP%] {\r\n  overflow-y: initial !important\r\n}\r\nmat-dialog-container[_ngcontent-%COMP%]   .mat-dialog-container[_ngcontent-%COMP%]   .cdk-dialog-container[_ngcontent-%COMP%] {\r\n  height: 80vh;\r\n  overflow-y: auto;\r\n}\r\ntable[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  margin-top: 1em;\r\n}\r\n.dialog[_ngcontent-%COMP%] {\r\n  width: 1000px;\r\n}\r\n.spacer[_ngcontent-%COMP%] {\r\n  flex: 1 1 auto;\r\n}\r\n.mat-cell[_ngcontent-%COMP%] {\r\n  line-break: anywhere;\r\n}\r\nspan[_ngcontent-%COMP%] {\r\n  font-size: 15px;\r\n  font-weight: normal;\r\n  font-family: Roboto, Helvetica, sans-serif;\r\n  color: #5e5e5e;\r\n}\r\na[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n}\r\nmat-toolbar.modal-toolbar[_ngcontent-%COMP%] {\r\n  height: 40px;\r\n  padding: 0 10px 0 0;\r\n}\r\nmat-grid-list[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n.statistics[_ngcontent-%COMP%] {\r\n  width: 100%\r\n}\r\n.grid-form[_ngcontent-%COMP%] {\r\n  width: 98%;\r\n}\r\ntr.detail-row[_ngcontent-%COMP%] {\r\n  height: 0;\r\n}\r\ntr.element-row[_ngcontent-%COMP%]:not(.example-expanded-row):hover {\r\n  background: whitesmoke;\r\n}\r\ntr.element-row[_ngcontent-%COMP%]:not(.example-expanded-row):active {\r\n  background: #efefef;\r\n}\r\n.element-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  border-bottom-width: 0;\r\n}\r\n.element-detail[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n  display: flex;\r\n}\r\n.element-diagram[_ngcontent-%COMP%] {\r\n  min-width: 80px;\r\n  border: 2px solid black;\r\n  padding: 8px;\r\n  font-weight: lighter;\r\n  margin: 8px 0;\r\n  height: 104px;\r\n}\r\n.element-symbol[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n  font-size: 40px;\r\n  line-height: normal;\r\n}\r\n.element-description[_ngcontent-%COMP%] {\r\n  padding: 16px;\r\n}\r\n.element-description-attribution[_ngcontent-%COMP%] {\r\n  opacity: 0.5;\r\n}\r\n.full-form-field[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 100%;\r\n  resize: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmtpdGVtcy1kaWFsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw0QkFBNEI7QUFDNUI7RUFDRSx5QkFBeUIsRUFBRSx1REFBdUQ7QUFDcEY7QUFFQSxtQkFBbUI7QUFDbkI7RUFDRTtBQUNGO0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsYUFBYTtBQUNmO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7QUFFQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsMENBQTBDO0VBQzFDLGNBQWM7QUFDaEI7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsV0FBVztBQUNiO0FBRUE7RUFDRTtBQUNGO0FBRUE7RUFDRSxVQUFVO0FBQ1o7QUFHQTtFQUNFLFNBQVM7QUFDWDtBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7QUFFQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjtBQUVBO0VBQ0UsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYixhQUFhO0FBQ2Y7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxhQUFhO0FBQ2Y7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0FBQ2QiLCJmaWxlIjoid29ya2l0ZW1zLWRpYWxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQGF1dGhvciBSb2JpbiBTdGVpbndhcnogKi9cclxubWF0LWRpYWxvZy1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7IC8qIEkgYWRkZWQgdGhpcyB0byBzZWUgdGhlIG1vZGFsLCB5b3UgZG9uJ3QgbmVlZCB0aGlzICovXHJcbn1cclxuXHJcbi8qIEltcG9ydGFudCBwYXJ0ICovXHJcbm1hdC1kaWFsb2ctY29udGFpbmVyIHtcclxuICBvdmVyZmxvdy15OiBpbml0aWFsICFpbXBvcnRhbnRcclxufVxyXG5cclxubWF0LWRpYWxvZy1jb250YWluZXIgLm1hdC1kaWFsb2ctY29udGFpbmVyIC5jZGstZGlhbG9nLWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiA4MHZoO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW4tdG9wOiAxZW07XHJcbn1cclxuXHJcbi5kaWFsb2cge1xyXG4gIHdpZHRoOiAxMDAwcHg7XHJcbn1cclxuXHJcbi5zcGFjZXIge1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcblxyXG4ubWF0LWNlbGwge1xyXG4gIGxpbmUtYnJlYWs6IGFueXdoZXJlO1xyXG59XHJcblxyXG5zcGFuIHtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBmb250LWZhbWlseTogUm9ib3RvLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6ICM1ZTVlNWU7XHJcbn1cclxuXHJcbmEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxubWF0LXRvb2xiYXIubW9kYWwtdG9vbGJhciB7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIHBhZGRpbmc6IDAgMTBweCAwIDA7XHJcbn1cclxuXHJcbm1hdC1ncmlkLWxpc3Qge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uc3RhdGlzdGljcyB7XHJcbiAgd2lkdGg6IDEwMCVcclxufVxyXG5cclxuLmdyaWQtZm9ybSB7XHJcbiAgd2lkdGg6IDk4JTtcclxufVxyXG5cclxuXHJcbnRyLmRldGFpbC1yb3cge1xyXG4gIGhlaWdodDogMDtcclxufVxyXG5cclxudHIuZWxlbWVudC1yb3c6bm90KC5leGFtcGxlLWV4cGFuZGVkLXJvdyk6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XHJcbn1cclxuXHJcbnRyLmVsZW1lbnQtcm93Om5vdCguZXhhbXBsZS1leHBhbmRlZC1yb3cpOmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZDogI2VmZWZlZjtcclxufVxyXG5cclxuLmVsZW1lbnQtcm93IHRkIHtcclxuICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xyXG59XHJcblxyXG4uZWxlbWVudC1kZXRhaWwge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmVsZW1lbnQtZGlhZ3JhbSB7XHJcbiAgbWluLXdpZHRoOiA4MHB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICBtYXJnaW46IDhweCAwO1xyXG4gIGhlaWdodDogMTA0cHg7XHJcbn1cclxuXHJcbi5lbGVtZW50LXN5bWJvbCB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbi5lbGVtZW50LWRlc2NyaXB0aW9uIHtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG59XHJcblxyXG4uZWxlbWVudC1kZXNjcmlwdGlvbi1hdHRyaWJ1dGlvbiB7XHJcbiAgb3BhY2l0eTogMC41O1xyXG59XHJcblxyXG4uZnVsbC1mb3JtLWZpZWxkIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcmVzaXplOiBub25lO1xyXG59XHJcbiJdfQ== */"], data: { animation: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_18__.trigger)('detailExpand', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_18__.state)('collapsed, void', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_18__.style)({ height: '0px', minHeight: '0' })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_18__.state)('expanded', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_18__.style)({ height: '*' })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_18__.transition)('expanded <=> collapsed', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_18__.animate)('50ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
            ]),
        ] } });


/***/ }),

/***/ 63806:
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialModule": () => (/* binding */ MaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 94666);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/autocomplete */ 88550);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/checkbox */ 44792);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/datepicker */ 42298);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 75074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 68562);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/radio */ 52922);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ 57371);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/slider */ 5682);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/slide-toggle */ 84714);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/menu */ 88589);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sidenav */ 16643);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/toolbar */ 52543);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ 82156);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/divider */ 71528);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/expansion */ 17591);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/grid-list */ 42642);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/stepper */ 44193);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/tabs */ 15892);
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/tree */ 53453);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/button */ 84522);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/button-toggle */ 19837);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/badge */ 83335);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/chips */ 11169);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/icon */ 57822);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/progress-spinner */ 61708);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/progress-bar */ 51294);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/core */ 59121);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 64865);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/dialog */ 31484);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/snack-bar */ 10930);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/paginator */ 36060);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/sort */ 92197);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/table */ 85288);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 19200);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 22560);

// Material Form Controls









// Material Navigation



// Material Layout








// Material Buttons & Indicators








// Material Popups & Modals




// Material Data tables





/**
 *
 * @author Robin Steinwarz
 */
class MaterialModule {
}
MaterialModule.ɵfac = function MaterialModule_Factory(t) { return new (t || MaterialModule)(); };
MaterialModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__.MatAutocompleteModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__.MatCheckboxModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__.MatDatepickerModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInputModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__.MatRadioModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_8__.MatSelectModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__.MatSliderModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__.MatSlideToggleModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__.MatMenuModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__.MatSidenavModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__.MatToolbarModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__.MatDividerModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__.MatExpansionModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__.MatGridListModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_18__.MatListModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__.MatStepperModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__.MatTabsModule,
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_21__.MatTreeModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_22__.MatButtonModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_23__.MatButtonToggleModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_24__.MatBadgeModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_25__.MatChipsModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__.MatIconModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__.MatProgressSpinnerModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__.MatProgressBarModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_29__.MatRippleModule,
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_30__.MatBottomSheetModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_31__.MatDialogModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_32__.MatSnackBarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__.MatTooltipModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_34__.MatPaginatorModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__.MatSortModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_36__.MatTableModule,
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_37__.FontAwesomeModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__.MatAutocompleteModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__.MatCheckboxModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__.MatDatepickerModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInputModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__.MatRadioModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_8__.MatSelectModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__.MatSliderModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__.MatSlideToggleModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__.MatMenuModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__.MatSidenavModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__.MatToolbarModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__.MatDividerModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__.MatExpansionModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__.MatGridListModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_18__.MatListModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__.MatStepperModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__.MatTabsModule,
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_21__.MatTreeModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_22__.MatButtonModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_23__.MatButtonToggleModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_24__.MatBadgeModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_25__.MatChipsModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__.MatIconModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__.MatProgressSpinnerModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__.MatProgressBarModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_29__.MatRippleModule,
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_30__.MatBottomSheetModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_31__.MatDialogModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_32__.MatSnackBarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__.MatTooltipModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_34__.MatPaginatorModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__.MatSortModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_36__.MatTableModule,
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_37__.FontAwesomeModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__.MatAutocompleteModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__.MatCheckboxModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__.MatDatepickerModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInputModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__.MatRadioModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_8__.MatSelectModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__.MatSliderModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__.MatSlideToggleModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__.MatMenuModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__.MatSidenavModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__.MatToolbarModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__.MatDividerModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__.MatExpansionModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__.MatGridListModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_18__.MatListModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__.MatStepperModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__.MatTabsModule,
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_21__.MatTreeModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_22__.MatButtonModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_23__.MatButtonToggleModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_24__.MatBadgeModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_25__.MatChipsModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__.MatIconModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__.MatProgressSpinnerModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__.MatProgressBarModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_29__.MatRippleModule,
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_30__.MatBottomSheetModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_31__.MatDialogModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_32__.MatSnackBarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__.MatTooltipModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_34__.MatPaginatorModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__.MatSortModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_36__.MatTableModule,
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_37__.FontAwesomeModule], exports: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_2__.MatAutocompleteModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_3__.MatCheckboxModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__.MatDatepickerModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInputModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__.MatRadioModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_8__.MatSelectModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__.MatSliderModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__.MatSlideToggleModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__.MatMenuModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__.MatSidenavModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__.MatToolbarModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__.MatDividerModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__.MatExpansionModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__.MatGridListModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_18__.MatListModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_19__.MatStepperModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__.MatTabsModule,
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_21__.MatTreeModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_22__.MatButtonModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_23__.MatButtonToggleModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_24__.MatBadgeModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_25__.MatChipsModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__.MatIconModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__.MatProgressSpinnerModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__.MatProgressBarModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_29__.MatRippleModule,
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_30__.MatBottomSheetModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_31__.MatDialogModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_32__.MatSnackBarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__.MatTooltipModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_34__.MatPaginatorModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__.MatSortModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_36__.MatTableModule,
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_37__.FontAwesomeModule] }); })();


/***/ }),

/***/ 56469:
/*!****************************************************************************!*\
  !*** ./src/app/yawl/resources/services/extension-specification.service.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExtensionSpecificationService": () => (/* binding */ ExtensionSpecificationService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-notifier */ 24110);






/**
 * @author Robin Steinwarz
 */
class ExtensionSpecificationService {
    constructor(http, notifierService) {
        this.http = http;
        this.notifierService = notifierService;
        this.baseURL = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.env.apiUrl;
    }
    getExtensionSpecifications() {
        return this.http.get(this.baseURL + "specification/extension", { withCredentials: true }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => res), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)((error) => this.handleError(error)));
    }
    getExtensionSpecification(specificationId, version, uri) {
        return this.http.get(this.baseURL + "specification/extension/" + uri + "/" + specificationId + "/" + version, { withCredentials: true }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => res), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)((error) => this.handleError(error)));
    }
    getSpecificationExtensionTasks(id, version, uri) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders();
        headers.append("Accept", "application/json");
        let url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.env.apiUrl + "specification/task/"
            + encodeURIComponent(uri)
            + "/" + encodeURIComponent(id)
            + "/" + encodeURIComponent(version);
        return this.http.get(url, { headers, withCredentials: true }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => res), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)((error) => this.handleError(error)));
    }
    setCoreAttribute(specificationId, version, uri, core) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let payload = 'core=' + encodeURIComponent(core);
        return this.http.post(this.baseURL + "specification/extension/" + uri + "/" + specificationId + "/" + version + "/core", payload, {
            headers,
            withCredentials: true
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => res), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)((error) => {
            this.notifierService.notify("error", "Could not set core attribute");
            return this.handleError(error);
        }));
    }
    setSpecificationTimeLimitAttribute(specificationId, version, uri, specificationTimeLimit) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let payload = 'specificationTimeLimit=' + encodeURIComponent(specificationTimeLimit);
        return this.http.post(this.baseURL + "specification/extension/" + uri + "/" + specificationId + "/" + version + "/specificationTimeLimit", payload, {
            headers,
            withCredentials: true
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => res), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)((error) => {
            this.notifierService.notify("error", "Could not set core attribute");
            return this.handleError(error);
        }));
    }
    setCostResourceHourAttribute(specificationId, version, uri, costResourceHour) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let payload = 'costResourceHour=' + encodeURIComponent(costResourceHour);
        return this.http.post(this.baseURL + "specification/extension/" + uri + "/" + specificationId + "/" + version + "/costResourceHour", payload, {
            headers,
            withCredentials: true
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => res), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)((error) => this.handleError(error)));
    }
    setMaxTaskAgeAttribute(specificationId, version, uri, maxTaskAge) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let payload = 'maxTaskAge=' + encodeURIComponent(maxTaskAge);
        return this.http.post(this.baseURL + "specification/extension/" + uri + "/" + specificationId + "/" + version + "/maxTaskAge", payload, {
            headers,
            withCredentials: true
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => res), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)((error) => this.handleError(error)));
    }
    setMaxQueueAgeAttribute(specificationId, version, uri, maxQueueAge) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let payload = 'maxQueueAge=' + encodeURIComponent(maxQueueAge);
        return this.http.post(this.baseURL + "specification/extension/" + uri + "/" + specificationId + "/" + version + "/maxQueueAge", payload, {
            headers,
            withCredentials: true
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((res) => res), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)((error) => this.handleError(error)));
    }
    handleError(error) {
        let errMsg = (error.message)
            ? error.message
            : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        throw new Error(errMsg);
    }
}
ExtensionSpecificationService.ɵfac = function ExtensionSpecificationService_Factory(t) { return new (t || ExtensionSpecificationService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](angular_notifier__WEBPACK_IMPORTED_MODULE_5__.NotifierService)); };
ExtensionSpecificationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: ExtensionSpecificationService, factory: ExtensionSpecificationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 33698:
/*!*************************************************************!*\
  !*** ./src/app/yawl/resources/services/resource.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResourceService": () => (/* binding */ ResourceService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 92340);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-notifier */ 24110);






/**
 * @author Robin Steinwarz
 */
class ResourceService {
    constructor(http, notifierService) {
        this.http = http;
        this.notifierService = notifierService;
    }
    findAll() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
        headers.append("Accept", "application/json");
        let url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.env.apiUrl + "resources";
        // @ts-ignore
        return this.http.get(url, { headers, withCredentials: true }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => res), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((error) => this.handleError(error)));
    }
    handleError(error) {
        let errMsg = (error.json().message)
            ? error.json().message
            : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        throw new Error(errMsg);
    }
}
ResourceService.ɵfac = function ResourceService_Factory(t) { return new (t || ResourceService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](angular_notifier__WEBPACK_IMPORTED_MODULE_5__.NotifierService)); };
ResourceService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: ResourceService, factory: ResourceService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 81966:
/*!***********************************************************************!*\
  !*** ./src/app/yawl/resources/services/specification-data.service.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpecificationDataService": () => (/* binding */ SpecificationDataService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 47367);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 91640);
/* harmony import */ var _common_util_color_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/util/color-util */ 19274);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-notifier */ 24110);
/* harmony import */ var _specification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./specification.service */ 94237);
/* harmony import */ var _statistic_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./statistic.service */ 80265);
/* harmony import */ var _resource_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resource.service */ 33698);
/* harmony import */ var _extension_specification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./extension-specification.service */ 56469);









/**
 * @author Robin Steinwarz
 */
class SpecificationDataService {
    constructor(http, notifierService, specificationService, statisticService, resourceService, extensionSpecificationService) {
        this.http = http;
        this.notifierService = notifierService;
        this.specificationService = specificationService;
        this.statisticService = statisticService;
        this.resourceService = resourceService;
        this.extensionSpecificationService = extensionSpecificationService;
        this.dataHasBeenLoaded = false;
        this.loading = undefined;
    }
    getSpecificationsData() {
        if (!this.dataHasBeenLoaded) {
            if (this.loading !== undefined) {
                return this.loading;
            }
            else {
                return this.refreshSpecificationsData();
            }
        }
        let subject = new rxjs__WEBPACK_IMPORTED_MODULE_5__.AsyncSubject();
        subject.next(this.specificationDataContainers);
        subject.complete();
        return subject;
    }
    refreshSpecificationsData() {
        this.specificationDataContainers = [];
        let subject = new rxjs__WEBPACK_IMPORTED_MODULE_5__.AsyncSubject();
        this.loading = subject;
        this.specificationService.findAll().subscribe(specifications => {
            this.extensionSpecificationService.getExtensionSpecifications().subscribe(extensionSpecifications => {
                // if no extension specification exists for one specification,
                // inform the backend
                let observables = [];
                specifications.forEach((specification, key) => {
                    // @ts-ignore
                    let specificationDataContainer = {};
                    specificationDataContainer.specificationInformation = specification;
                    let extensionSpecification = extensionSpecifications.filter(extensionSpecification => extensionSpecification.specificationId === specification.id
                        && extensionSpecification.specversion === specification.specversion
                        && extensionSpecification.uri === specification.uri);
                    if (extensionSpecification.length === 0) {
                        let extensionSpecificationObservable = this.extensionSpecificationService
                            .getExtensionSpecification(specification.id, specification.specversion, specification.uri);
                        observables.push(extensionSpecificationObservable);
                        extensionSpecificationObservable.subscribe((extensionSpecification) => {
                            specificationDataContainer.extensionSpecification = extensionSpecification;
                        });
                    }
                    else {
                        specificationDataContainer.extensionSpecification = extensionSpecification[0];
                    }
                    let statisticObservable = this.statisticService
                        .getSpecificationStatistic(specification.id, specification.specversion, specification.uri);
                    observables.push(statisticObservable);
                    statisticObservable.subscribe(specificationStatistic => {
                        specificationDataContainer.specificationStatistic = specificationStatistic;
                        specificationDataContainer.specificationStatistic.color = _common_util_color_util__WEBPACK_IMPORTED_MODULE_0__.ColorUtils.getColorMix();
                        specificationDataContainer.specificationStatistic.taskStatisticDTOS = specificationDataContainer.specificationStatistic.taskStatisticDTOS.sort((a, b) => a.minimalOrder.localeCompare(b.minimalOrder));
                        specificationDataContainer.specificationStatistic.taskStatisticDTOS.forEach(taskStatistic => {
                            taskStatistic.color = _common_util_color_util__WEBPACK_IMPORTED_MODULE_0__.ColorUtils.getColor2Mix();
                        });
                    });
                    let resourceObservable = this.resourceService.findAll();
                    observables.push(resourceObservable);
                    resourceObservable.subscribe(resources => {
                        specificationDataContainer.resources = resources;
                    });
                    this.specificationDataContainers.push(specificationDataContainer);
                    if (key === specifications.length - 1) {
                        (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.forkJoin)(observables).subscribe(() => {
                            this.loading = undefined;
                            this.dataHasBeenLoaded = true;
                            subject.next(this.specificationDataContainers.sort((a, b) => {
                                return a.specificationInformation.uri.localeCompare(b.specificationInformation.uri);
                            }));
                            subject.complete();
                        });
                    }
                });
            });
        });
        return subject;
    }
}
SpecificationDataService.ɵfac = function SpecificationDataService_Factory(t) { return new (t || SpecificationDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](angular_notifier__WEBPACK_IMPORTED_MODULE_9__.NotifierService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_specification_service__WEBPACK_IMPORTED_MODULE_1__.SpecificationService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_statistic_service__WEBPACK_IMPORTED_MODULE_2__.StatisticService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_resource_service__WEBPACK_IMPORTED_MODULE_3__.ResourceService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_extension_specification_service__WEBPACK_IMPORTED_MODULE_4__.ExtensionSpecificationService)); };
SpecificationDataService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({ token: SpecificationDataService, factory: SpecificationDataService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 94237:
/*!******************************************************************!*\
  !*** ./src/app/yawl/resources/services/specification.service.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpecificationService": () => (/* binding */ SpecificationService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-notifier */ 24110);






/**
 * @author Philipp R. Thomas
 * @editedBy Robin Steinwarz
 */
class SpecificationService {
    constructor(http, notifierService) {
        this.http = http;
        this.notifierService = notifierService;
    }
    findAll() {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
        headers.append("Accept", "application/json");
        let url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.env.apiUrl + "specification";
        return this.http.get(url, { headers, withCredentials: true }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => res), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => res), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((error) => this.handleError(error)));
    }
    findTasksById(id, version, uri) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
        headers.append("Accept", "application/json");
        let url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.env.apiUrl + "specification/task/"
            + encodeURIComponent(uri)
            + "/" + encodeURIComponent(id)
            + "/" + encodeURIComponent(version);
        return this.http.get(url, { headers, withCredentials: true }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => res), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((error) => this.handleError(error)));
    }
    getSpecificationStatistic(id, version, uri) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
        headers.append("Accept", "application/json");
        let url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.env.apiUrl + "statistic/specification/"
            + encodeURIComponent(uri)
            + "/" + encodeURIComponent(id)
            + "/" + encodeURIComponent(version);
        return this.http.get(url, { headers, withCredentials: true }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => res), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((error) => this.handleError(error)));
    }
    storeTaskAttributesById(id, version, uri, taskid, costResourceHour, maxTaskAge, maxQueueAge) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.env.apiUrl + "specification/task/"
            + encodeURIComponent(uri)
            + "/" + encodeURIComponent(id)
            + "/" + encodeURIComponent(version)
            + "/" + encodeURIComponent(taskid)
            + "/setAttributes";
        let payload = 'costResourceHour=' + encodeURIComponent(costResourceHour)
            + '&maxTaskAge=' + encodeURIComponent(maxTaskAge)
            + '&maxQueueAge=' + encodeURIComponent(maxQueueAge);
        return this.http.post(url, payload, { headers, withCredentials: true }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => res), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((error) => {
            this.notifierService.notify("error", "Could not store task attributes");
            return this.handleError(error);
        }));
    }
    storeSpecificationAttributesById(id, version, uri, specificationTimeLimit) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.env.apiUrl + "specification/extension/"
            + encodeURIComponent(uri)
            + "/" + encodeURIComponent(id)
            + "/" + encodeURIComponent(version)
            + "/specificationTimeLimit";
        let payload = 'specificationTimeLimit=' + encodeURIComponent(specificationTimeLimit);
        return this.http.post(url, payload, { headers, withCredentials: true }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => res), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((error) => {
            this.notifierService.notify("error", "Could not store specification time limit");
            return this.handleError(error);
        }));
    }
    handleError(error) {
        if (error.message !== undefined) {
            throw new Error(error.message);
        }
        let errMsg = (error.json().message)
            ? error.json().message
            : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        throw new Error(errMsg);
    }
}
SpecificationService.ɵfac = function SpecificationService_Factory(t) { return new (t || SpecificationService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](angular_notifier__WEBPACK_IMPORTED_MODULE_5__.NotifierService)); };
SpecificationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: SpecificationService, factory: SpecificationService.ɵfac });


/***/ }),

/***/ 80265:
/*!**************************************************************!*\
  !*** ./src/app/yawl/resources/services/statistic.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StatisticService": () => (/* binding */ StatisticService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 19337);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-notifier */ 24110);
/* harmony import */ var _specification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./specification.service */ 94237);
/* harmony import */ var _extension_specification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extension-specification.service */ 56469);








/**
 * @author Robin Steinwarz
 */
class StatisticService {
    constructor(http, notifierService, specificationService, extensionSpecificationService) {
        this.http = http;
        this.notifierService = notifierService;
        this.specificationService = specificationService;
        this.extensionSpecificationService = extensionSpecificationService;
    }
    getSpecificationStatistic(id, version, uri) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders();
        headers.append("Accept", "application/json");
        let url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.env.apiUrl + "statistic/specification/"
            + encodeURIComponent(uri)
            + "/" + encodeURIComponent(id)
            + "/" + encodeURIComponent(version);
        return this.http.get(url, { headers, withCredentials: true }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.tap)({ error: (error) => this.handleError(error) }));
    }
    handleError(error) {
        let errMsg = (error.json().message)
            ? error.json().message
            : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        throw new Error(errMsg);
    }
}
StatisticService.ɵfac = function StatisticService_Factory(t) { return new (t || StatisticService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](angular_notifier__WEBPACK_IMPORTED_MODULE_6__.NotifierService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_specification_service__WEBPACK_IMPORTED_MODULE_1__.SpecificationService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_extension_specification_service__WEBPACK_IMPORTED_MODULE_2__.ExtensionSpecificationService)); };
StatisticService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: StatisticService, factory: StatisticService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 43693:
/*!**************************************************************!*\
  !*** ./src/app/yawl/resources/services/work-item.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkItemService": () => (/* binding */ WorkItemService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 58987);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 53158);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 92340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 22560);





/**
 * @author Philipp R. Thomas
 * @editedBy Robin Steinwarz
 */
class WorkItemService {
    constructor(http) {
        this.http = http;
    }
    findAllBySpecification(specificationId, specversion, uri) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders();
        headers.append("Accept", "application/json");
        let url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.env.apiUrl + "specification/"
            + encodeURIComponent(uri) + "/"
            + encodeURIComponent(specificationId) + "/"
            + encodeURIComponent(specversion)
            + "/workitems";
        return this.http.get(url, { headers, withCredentials: true }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((res) => res), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)((error) => this.handleError(error)));
    }
    handleError(error) {
        let errMsg = (error.json().message)
            ? error.json().message
            : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        throw new Error(errMsg);
    }
}
WorkItemService.ɵfac = function WorkItemService_Factory(t) { return new (t || WorkItemService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
WorkItemService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: WorkItemService, factory: WorkItemService.ɵfac });


/***/ }),

/***/ 13607:
/*!*********************************************************!*\
  !*** ./src/app/yawl/resources/yawl-resources.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "YawlResourcesModule": () => (/* binding */ YawlResourcesModule)
/* harmony export */ });
/* harmony import */ var _services_specification_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/specification.service */ 94237);
/* harmony import */ var _services_work_item_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/work-item.service */ 43693);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);



/**
 * This is the module that should be importet
 * by the root app component as it provides resource services.
 *
 * @author Philipp Thomas
 */
class YawlResourcesModule {
}
YawlResourcesModule.ɵfac = function YawlResourcesModule_Factory(t) { return new (t || YawlResourcesModule)(); };
YawlResourcesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: YawlResourcesModule });
YawlResourcesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ providers: [
        _services_specification_service__WEBPACK_IMPORTED_MODULE_0__.SpecificationService,
        _services_work_item_service__WEBPACK_IMPORTED_MODULE_1__.WorkItemService
    ] });


/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "env": () => (/* binding */ env)
/* harmony export */ });
/**
 *
 * @author Philipp R. Thomas
 * @editedBy Robin Steinwarz
 */
const env = {
    production: false,
    apiUrl: "http://localhost:8082/api/",
    url: "http://localhost:8082/",
    remoteUIUrl: "http://localhost:8080/yawlui/"
};


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 34497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 22560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.env.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map