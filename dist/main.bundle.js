var ac_main =
webpackJsonpac__name_([1],{

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(8))(294);

/***/ }),

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(8))(443);

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return decorateModuleRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ENV_PROVIDERS; });
// Angular 2


// Environment Providers
var PROVIDERS = [];
// Angular debug tools in the dev console
// https://github.com/angular/angular/blob/86405345b781a9dc2438c0fbe3e9409245647019/TOOLS_JS.md
var _decorateModuleRef = function (value) { return value; };
if (false) {
    enableProdMode();
    // Production
    _decorateModuleRef = function (modRef) {
        disableDebugTools();
        return modRef;
    };
    PROVIDERS = PROVIDERS.slice();
}
else {
    _decorateModuleRef = function (modRef) {
        var appRef = modRef.injector.get(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ApplicationRef"]);
        var cmpRef = appRef.components[0];
        var _ng = window.ng;
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["enableDebugTools"])(cmpRef);
        window.ng.probe = _ng.probe;
        window.ng.coreTokens = _ng.coreTokens;
        return modRef;
    };
    // Development
    PROVIDERS = PROVIDERS.slice();
}
var decorateModuleRef = _decorateModuleRef;
var ENV_PROVIDERS = PROVIDERS.slice();


/***/ }),

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(8))(444);

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__about_component__ = __webpack_require__(231);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__about_component__["a"]; });



/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_component__ = __webpack_require__(239);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__home_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__overview_overview_component__ = __webpack_require__(240);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__overview_overview_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile_component__ = __webpack_require__(241);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__profile_profile_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__accounts_accounts_component__ = __webpack_require__(237);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__accounts_accounts_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__categorization_categorization_component__ = __webpack_require__(238);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__categorization_categorization_component__["a"]; });







/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__no_content_component__ = __webpack_require__(242);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__no_content_component__["a"]; });



/***/ }),

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(57);

/***/ }),

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(8))(109);

/***/ }),

/***/ 196:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(8))(143);

/***/ }),

/***/ 203:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(8))(77);

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_module__ = __webpack_require__(233);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app_module__["a"]; });
// App



/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(8))(442);

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(79);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CapitalOne; });


var CapitalOne = (function () {
    function CapitalOne(http) {
        this.http = http;
        this.customerID = "58a9a8c21756fc834d905ae9";
        this.apiUrl = "http://api.reimaginebanking.com";
        this.APIKey = "df8a613cd6635b6513d8050b63b13dde";
    }
    CapitalOne.prototype.getAccounts = function (id) {
        if (id === void 0) { id = this.customerID; }
        var getAccountsUrl = this.apiUrl + "/customers/" + id + "/accounts?key=" + this.APIKey;
        return this.http.get(getAccountsUrl).map(function (res) { return res.json(); });
    };
    CapitalOne.prototype.getBills = function (id) {
        if (id === void 0) { id = this.customerID; }
        var getBillsUrl = this.apiUrl + "/customers/" + id + "/bills?key=" + this.APIKey;
        return this.http.get(getBillsUrl).map(function (res) { return res.json(); });
    };
    CapitalOne.prototype.getLoans = function (accountID) {
        var getBillsUrl = this.apiUrl + "/accounts/" + accountID + "/loans?key=" + this.APIKey;
        return this.http.get(getBillsUrl).map(function (res) { return res.json(); });
    };
    CapitalOne.prototype.getPurchases = function (accountID) {
        var getPurchasesUrl = this.apiUrl + "/accounts/" + accountID + "/purchases?key=" + this.APIKey;
        return this.http.get(getPurchasesUrl).map(function (res) { return res.json(); });
    };
    CapitalOne.prototype.getTransfer = function (accountID) {
        var getTransferUrl = this.apiUrl + "/accounts/" + accountID + "/transfers?key=" + this.APIKey;
        return this.http.get(getTransferUrl).map(function (res) { return res.json(); });
    };
    CapitalOne.prototype.getMerchants = function (merchantID) {
        var getMerchantsUrl = this.apiUrl + "/merchants/" + merchantID + "/?key=" + this.APIKey;
        return this.http.get(getMerchantsUrl).map(function (res) { return res.json(); });
    };
    /**
     *   "payer_id": "string",
     *   "medium": "balance",
     *   "amount": 0.01,
     *   "description": "string"
     */
    CapitalOne.prototype.updatePurchase = function (purchaseID, body) {
        var updatePurchaseUrl = this.apiUrl + "/purchases/" + purchaseID + "?key=" + this.APIKey;
        return this.http.put(updatePurchaseUrl, body).map(function (res) { return res.json(); });
    };
    return CapitalOne;
}());
CapitalOne = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
], CapitalOne);



/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_jwt__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_auth0_lock__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_auth0_lock___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_auth0_lock__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Auth; });




var Auth = (function () {
    function Auth(router) {
        this.router = router;
        // Configure Auth0
        this.lock = new __WEBPACK_IMPORTED_MODULE_3_auth0_lock___default.a('NFGRPL9EEVGJ03KBJj4gzeOBC7zQDp0C', 'guocheng.auth0.com', {
            auth: {
                redirectUrl: 'http://localhost:3000/home',
                responseType: 'token',
                sso: false
            },
            theme: {
                logo: '../../assets/img/arabica.png',
                primaryColor: '#3A99D8'
            },
            languageDictionary: {
                title: ''
            }
        });
        // Add callback for lock `authenticated` event
        this.lock.on("authenticated", function (authResult) {
            console.log(authResult);
            localStorage.setItem('id_token', authResult.idToken);
        });
    }
    Auth.prototype.login = function () {
        // Call the show method to display the widget.
        this.lock.show();
    };
    Auth.prototype.authenticated = function () {
        // Check if there's an unexpired JWT
        // This searches for an item in localStorage with key == 'id_token'
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_angular2_jwt__["tokenNotExpired"])();
    };
    Auth.prototype.logout = function () {
        // Remove token from localStorage
        localStorage.removeItem('id_token');
        this.router.navigate(['/about']);
    };
    return Auth;
}());
Auth = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]])
], Auth);



/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(622);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Data; });



var Data = (function () {
    function Data(http) {
        this.http = http;
        this.apiUrl = '/capitalOne/personal';
        this.profile = JSON.parse(localStorage.getItem('profile'));
    }
    Data.prototype.getData = function (type) {
        var body = {
            "first_name": this.profile.given_name,
            "last_name": this.profile.family_name,
            "type": type
        };
        return this.http.post(this.apiUrl, body).map(function (res) { return res.json(); });
    };
    return Data;
}());
Data = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
], Data);



/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(55);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoggedInGuard; });


var LoggedInGuard = (function () {
    function LoggedInGuard(authService) {
        this.authService = authService;
    }
    LoggedInGuard.prototype.canActivate = function () {
        return this.authService.authenticated();
    };
    return LoggedInGuard;
}());
LoggedInGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__index__["a" /* Auth */]])
], LoggedInGuard);



/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(123);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });


var AboutComponent = (function () {
    function AboutComponent(route) {
        this.route = route;
    }
    AboutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route
            .data
            .subscribe(function (data) {
            // your resolved data from route
            _this.localState = data.yourData;
        });
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'about',
        template: __webpack_require__(371)
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]])
], AboutComponent);



/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__(65);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/*
 * Angular 2 decorators and services
 */


/*
 * App Component
 * Top Level Component
 */
var AppComponent = (function () {
    function AppComponent(af) {
        this.af = af;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.login = function () {
        this.af.auth.login({
            provider: __WEBPACK_IMPORTED_MODULE_1_angularfire2__["c" /* AuthProviders */].Google,
            method: __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AuthMethods */].Popup,
        })
            .then(function (success) {
            console.log("Firebase success: " + JSON.stringify(success));
        })
            .catch(function (error) {
            console.log("Firebase failure: " + JSON.stringify(error));
        });
    };
    AppComponent.prototype.logout = function () {
        this.af.auth.logout();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        styles: [
            __webpack_require__(469)
        ],
        template: __webpack_require__(372)
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2__["b" /* AngularFire */]])
], AppComponent);



/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angularclass_hmr__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angularclass_hmr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__angularclass_hmr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environment__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routes__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_resolver__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_service__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__home__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__about__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__no_content__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angular2_jwt__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__service_index__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_common__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ng2_charts__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__styles_styles_scss__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__styles_styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19__styles_styles_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__styles_headings_css__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__styles_headings_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20__styles_headings_css__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });







/**
 * Config Firebase
 */
var firebaseConfig = {
    apiKey: "AIzaSyDHrRhLaadP9ACGu1zS-yHFoZOyXfhIrvc",
    authDomain: "arabica-156306.firebaseapp.com",
    databaseURL: "https://arabica-156306.firebaseio.com",
    storageBucket: "arabica-156306.appspot.com",
    messagingSenderId: "478294907734"
};
/*
 * Platform and Environment providers/directives/pipes
 */


// App is our top level component






// All services are here






// Application wide providers
var APP_PROVIDERS = __WEBPACK_IMPORTED_MODULE_10__app_resolver__["a" /* APP_RESOLVER_PROVIDERS */].concat([
    __WEBPACK_IMPORTED_MODULE_11__app_service__["a" /* AppState */]
]);
/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
var AppModule = (function () {
    function AppModule(appRef, appState) {
        this.appRef = appRef;
        this.appState = appState;
    }
    AppModule.prototype.hmrOnInit = function (store) {
        if (!store || !store.state) {
            return;
        }
        console.log('HMR store', JSON.stringify(store, null, 2));
        // set state
        this.appState._state = store.state;
        // set input values
        if ('restoreInputValues' in store) {
            var restoreInputValues = store.restoreInputValues;
            setTimeout(restoreInputValues);
        }
        this.appRef.tick();
        delete store.state;
        delete store.restoreInputValues;
    };
    AppModule.prototype.hmrOnDestroy = function (store) {
        var cmpLocation = this.appRef.components.map(function (cmp) { return cmp.location.nativeElement; });
        // save state
        var state = this.appState._state;
        store.state = state;
        // recreate root elements
        store.disposeOldHosts = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angularclass_hmr__["createNewHosts"])(cmpLocation);
        // save input values
        store.restoreInputValues = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angularclass_hmr__["createInputTransfer"])();
        // remove styles
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angularclass_hmr__["removeNgStyles"])();
    };
    AppModule.prototype.hmrAfterDestroy = function (store) {
        // display new elements
        store.disposeOldHosts();
        delete store.disposeOldHosts;
    };
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
        bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_13__about__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_12__home__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_12__home__["b" /* OverviewComponent */],
            __WEBPACK_IMPORTED_MODULE_12__home__["c" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_12__home__["d" /* AccountsComponent */],
            __WEBPACK_IMPORTED_MODULE_12__home__["e" /* CategorizationComponent */],
            __WEBPACK_IMPORTED_MODULE_14__no_content__["a" /* NoContentComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["RouterModule"].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_routes__["a" /* ROUTES */], { useHash: true, preloadingStrategy: __WEBPACK_IMPORTED_MODULE_5__angular_router__["PreloadAllModules"] }),
            __WEBPACK_IMPORTED_MODULE_6_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
            __WEBPACK_IMPORTED_MODULE_18_ng2_charts__["ChartsModule"]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__environment__["b" /* ENV_PROVIDERS */],
            APP_PROVIDERS,
            __WEBPACK_IMPORTED_MODULE_15_angular2_jwt__["AUTH_PROVIDERS"],
            __WEBPACK_IMPORTED_MODULE_16__service_index__["a" /* Auth */], __WEBPACK_IMPORTED_MODULE_16__service_index__["b" /* LoggedInGuard */], __WEBPACK_IMPORTED_MODULE_16__service_index__["c" /* Data */], __WEBPACK_IMPORTED_MODULE_16__service_index__["d" /* CapitalOne */],
            { provide: __WEBPACK_IMPORTED_MODULE_17__angular_common__["LocationStrategy"], useClass: __WEBPACK_IMPORTED_MODULE_17__angular_common__["PathLocationStrategy"] }
        ]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_core__["ApplicationRef"],
        __WEBPACK_IMPORTED_MODULE_11__app_service__["a" /* AppState */]])
], AppModule);



/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__ = __webpack_require__(621);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__);
/* unused harmony export DataResolver */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_RESOLVER_PROVIDERS; });



var DataResolver = (function () {
    function DataResolver() {
    }
    DataResolver.prototype.resolve = function (route, state) {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of({ res: 'I am data' });
    };
    return DataResolver;
}());
DataResolver = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], DataResolver);

// an array of services to resolve routes with data
var APP_RESOLVER_PROVIDERS = [
    DataResolver
];


/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__no_content__ = __webpack_require__(129);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });



var ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__about__["a" /* AboutComponent */] },
    {
        path: 'home', component: __WEBPACK_IMPORTED_MODULE_0__home__["a" /* HomeComponent */],
        children: [
            { path: '', redirectTo: 'overview', pathMatch: 'full' },
            { path: 'overview', component: __WEBPACK_IMPORTED_MODULE_0__home__["b" /* OverviewComponent */] },
            { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_0__home__["c" /* ProfileComponent */] },
            { path: 'accounts', component: __WEBPACK_IMPORTED_MODULE_0__home__["d" /* AccountsComponent */] },
            { path: 'categorization', component: __WEBPACK_IMPORTED_MODULE_0__home__["e" /* CategorizationComponent */] }
        ]
    },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_1__about__["a" /* AboutComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_2__no_content__["a" /* NoContentComponent */] }
];


/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppState; });

var AppState = (function () {
    function AppState() {
        this._state = {};
    }
    Object.defineProperty(AppState.prototype, "state", {
        // already return a clone of the current state
        get: function () {
            return this._state = this._clone(this._state);
        },
        // never allow mutation
        set: function (value) {
            throw new Error('do not mutate the `.state` directly');
        },
        enumerable: true,
        configurable: true
    });
    AppState.prototype.get = function (prop) {
        // use our state getter for the clone
        var state = this.state;
        return state.hasOwnProperty(prop) ? state[prop] : state;
    };
    AppState.prototype.set = function (prop, value) {
        // internally mutate our state
        return this._state[prop] = value;
    };
    AppState.prototype._clone = function (object) {
        // simple object clone
        return JSON.parse(JSON.stringify(object));
    };
    return AppState;
}());
AppState = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], AppState);



/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service__ = __webpack_require__(55);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountsComponent; });


var AccountsComponent = (function () {
    function AccountsComponent(capitalOne) {
        this.capitalOne = capitalOne;
    }
    AccountsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.capitalOne.getAccounts().subscribe(function (data) {
            _this.accounts = data;
        }, function (err) {
            // print out the error
            console.log(err);
        });
    };
    return AccountsComponent;
}());
AccountsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'accounts',
        styles: [__webpack_require__(470)],
        template: __webpack_require__(373)
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service__["d" /* CapitalOne */]])
], AccountsComponent);



/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service__ = __webpack_require__(55);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategorizationComponent; });



var CategorizationComponent = (function () {
    function CategorizationComponent(capitalOne, af) {
        var _this = this;
        this.capitalOne = capitalOne;
        this.af = af;
        this.purchases = [];
        this.category = "Null";
        this.pointer = 0;
        this.purchase = {
            "_id": "",
            "merchant_id": "",
            "medium": "",
            "purchase_date": "",
            "amount": 0,
            "description": "",
            "status": "",
            "type": "",
            "payer_id": "",
            "payee_id": "",
            merchantInfo: {
                _id: "",
                address: { street_number: "", street_name: "", city: "", state: "", zip: "" },
                category: ["", ""],
                creation_date: "", geocode: { lat: 0, lng: 0 }, name: ""
            }
        };
        this.af.database.list('/categories', { query: { orderByChild: "name" } }).subscribe(function (data) {
            _this.categories = data;
        });
    }
    CategorizationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.capitalOne.getAccounts().subscribe(function (accounts) {
            for (var _i = 0, accounts_1 = accounts; _i < accounts_1.length; _i++) {
                var account = accounts_1[_i];
                _this.capitalOne.getPurchases(account._id).subscribe(function (data) {
                    var _loop_1 = function (p) {
                        _this.capitalOne.getMerchants(p.merchant_id).subscribe(function (data) {
                            p.merchantInfo = data;
                            _this.purchases.push(p);
                            _this.purchase = _this.purchases[0];
                        });
                    };
                    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                        var p = data_1[_i];
                        _loop_1(p);
                    }
                });
            }
        });
    };
    CategorizationComponent.prototype.doSomething = function (event) {
        switch (event.keyIdentifier) {
            case "Left":
                if (this.pointer <= 0) {
                    this.pointer = this.purchases.length - 1;
                }
                else {
                    this.pointer = this.pointer - 1;
                }
                this.purchase = this.purchases[this.pointer];
                break;
            case "Right":
                if (this.pointer >= this.purchases.length - 1) {
                    this.pointer = 0;
                }
                else {
                    this.pointer = this.pointer + 1;
                }
                this.purchase = this.purchases[this.pointer];
                break;
            case "Enter":
                console.log(this.category);
                this.capitalOne.updatePurchase(this.purchase._id, {
                    "description": this.category
                }).subscribe(function (data) {
                    console.log(data);
                }, function (err) {
                    console.log("Error " + err);
                });
                break;
            case "U+0048":
                this.category = "Housing";
                break;
            case "U+0054":
                this.category = "Tranportation";
                break;
            case "U+0044":
                this.category = "Debt";
                break;
            case "U+004F":
                this.category = "Other";
                break;
            case "U+0049": // I
            case "U+0053":
                this.category = "Investment & Saving";
                break;
            default:
                break;
        }
    };
    CategorizationComponent.prototype.updateCategory = function (category, purchase) {
        var ref = this.af.database.list('/purchase_category', { query: { orderByChild: "purchaseID", equalTo: purchase._id } });
        console.log(ref);
        ref.update(purchase._id, { "category": category.name });
    };
    CategorizationComponent.prototype.ngOnDestroy = function () {
        this.purchases = [];
    };
    return CategorizationComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('document:keyup', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CategorizationComponent.prototype, "doSomething", null);
CategorizationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'categorization',
        styles: [__webpack_require__(471)],
        template: __webpack_require__(374)
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__service__["d" /* CapitalOne */], __WEBPACK_IMPORTED_MODULE_1_angularfire2__["b" /* AngularFire */]])
], CategorizationComponent);



/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__(65);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });


var HomeComponent = (function () {
    function HomeComponent(af) {
        this.af = af;
        this.profile = {
            name: "unknown",
            gender: "unknown",
            email: "unknown",
            picture: "http://babyinfoforyou.com/wp-content/uploads/2014/10/avatar-300x300.png"
        };
    }
    HomeComponent.prototype.ngOnInit = function () {
        var token = localStorage.getItem('id_token');
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        // The selector is what angular internally uses
        // for `document.querySelectorAll(selector)` in our index.html
        // where, in this case, selector is the string 'home'
        selector: 'home',
        // Our list of styles in our component. We may add more to compose many styles together
        //   styles: [require('./home.component.css')],
        // Every Angular template is first compiled by the browser before Angular runs it's compiler
        template: __webpack_require__(375)
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2__["b" /* AngularFire */]])
], HomeComponent);



/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service__ = __webpack_require__(55);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverviewComponent; });


var OverviewComponent = (function () {
    // mock data
    function OverviewComponent(capitalOne) {
        this.capitalOne = capitalOne;
        this.contentType = "Chart";
        this.billTotal = 0;
        this.loanTotal = 0;
        this.purchaseTotal = 0;
        this.transfersTotal = 0;
        this.kind = "Bill";
        this.bills = [];
        this.loans = [];
        this.purchases = [];
        this.transfers = [];
        this.type = 'pie';
        this.options = {
            responsive: true,
            maintainAspectRatio: false
        };
        this.outcome = {
            labels: ["Bill", "Loan", "Purchase", "Transfer"],
            datasets: [
                {
                    label: "Jan 2017",
                    data: [0, 0, 0, 0]
                }
            ]
        };
        this.income = {
            labels: ["Income", "Outcome"],
            datasets: [
                {
                    label: "Jan 2017",
                    data: [5500, 3100]
                }
            ]
        };
    }
    OverviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.capitalOne.getBills().subscribe(function (data) {
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var bill = data_1[_i];
                _this.bills.push(bill);
                _this.billTotal += bill.payment_amount;
            }
            _this.capitalOne.getAccounts().subscribe(function (data) {
                var _loop_1 = function (account) {
                    _this.capitalOne.getTransfer(account._id).subscribe(function (data) {
                        for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
                            var transfer = data_2[_i];
                            _this.transfers.push(transfer);
                            _this.transfersTotal += transfer.amount;
                        }
                        _this.capitalOne.getLoans(account._id).subscribe(function (data) {
                            for (var _i = 0, data_3 = data; _i < data_3.length; _i++) {
                                var loan = data_3[_i];
                                _this.loans.push(loan);
                                _this.loanTotal += loan.monthly_payment;
                            }
                            _this.capitalOne.getPurchases(account._id).subscribe(function (data) {
                                for (var _i = 0, data_4 = data; _i < data_4.length; _i++) {
                                    var purchase = data_4[_i];
                                    _this.purchases.push(purchase);
                                    _this.purchaseTotal += purchase.amount;
                                }
                                _this.outcome = {
                                    labels: ["Bill", "Loan", "Purchase", "Transfer"],
                                    datasets: [
                                        {
                                            label: "Jan 2017",
                                            data: [_this.billTotal, _this.loanTotal, _this.purchaseTotal, _this.transfersTotal]
                                        }
                                    ]
                                };
                                _this.income = {
                                    labels: ["Income", "Outcome"],
                                    datasets: [
                                        {
                                            label: "Jan 2017",
                                            data: [5500, 3100]
                                        },
                                        {
                                            label: "Dec 2016",
                                            data: [5500, 2383]
                                        },
                                        {
                                            label: "Nov 2016",
                                            data: [4500, 3383]
                                        }
                                    ]
                                };
                            });
                        }, function (err) {
                            console.log(err);
                        });
                    });
                };
                for (var _i = 0, data_5 = data; _i < data_5.length; _i++) {
                    var account = data_5[_i];
                    _loop_1(account);
                }
            });
        }, function (err) {
            console.log(err);
        });
    };
    OverviewComponent.prototype.updateType = function (t) {
        console.log("checking:" + t);
        this.type = t;
    };
    OverviewComponent.prototype.switchChart = function () {
        this.isIncome = !this.isIncome;
    };
    // events
    OverviewComponent.prototype.chartClicked = function (e) {
        // console.log(e);
    };
    OverviewComponent.prototype.chartHovered = function (e) {
        // console.log(e);
    };
    OverviewComponent.prototype.hasAccount = function () {
        return true;
    };
    OverviewComponent.prototype.switchContent = function (type) {
        this.contentType = type;
    };
    OverviewComponent.prototype.doSomething = function (event) {
        var financeType = ["Bill", "Loan", "Transfer"];
        var index = financeType.indexOf(this.kind);
        if (event.keyIdentifier === 'Left') {
            index--;
            if (index < 0) {
                index = financeType.length - 1;
            }
        }
        else if (event.keyIdentifier === 'Right') {
            index++;
            if (index > financeType.length - 1) {
                index = 0;
            }
        }
        this.kind = financeType[index];
    };
    OverviewComponent.prototype.ngOnDestroy = function () {
        this.bills = [];
        this.loans = [];
        this.purchases = [];
        this.transfers = [];
    };
    return OverviewComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('document:keyup', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], OverviewComponent.prototype, "doSomething", null);
OverviewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'overview',
        styles: [__webpack_require__(472)],
        template: __webpack_require__(376)
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service__["d" /* CapitalOne */]])
], OverviewComponent);



/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });

var ProfileComponent = (function () {
    function ProfileComponent() {
        this.profile = JSON.parse(localStorage.getItem('profile'));
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'profile',
        styles: [__webpack_require__(473)],
        template: __webpack_require__(377)
    }),
    __metadata("design:paramtypes", [])
], ProfileComponent);



/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoContentComponent; });

var NoContentComponent = (function () {
    function NoContentComponent() {
    }
    return NoContentComponent;
}());
NoContentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'no-content',
        template: "\n    <div>\n      <h1>404: page missing</h1>\n    </div>\n  "
    })
], NoContentComponent);



/***/ }),

/***/ 327:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(37)();
// imports


// module
exports.push([module.i, "/* this file will be extracted to main dist folder and is imported in index.html */\n/* This file is for setting global styles  */\nnav a {\n  background-color: #F8F8F8;\n  color: white;\n  vertical-align: middle;\n  text-align: center;\n  text-decoration: none;\n  border-radius: 4px; }\n", ""]);

// exports


/***/ }),

/***/ 328:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(37)();
// imports


// module
exports.push([module.i, "html, body{\n  height: 100%;\n  font-family: Arial, Helvetica, sans-serif;\n}\n\na.active {\n  background-color: gray;\n}\n\n\nfooter {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  background-color: #5E5E5E;\n\n  height: 50px;\n  line-height: 50px;\n  color: #E5E5E5;\n}", ""]);

// exports


/***/ }),

/***/ 329:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(37)();
// imports


// module
exports.push([module.i, ".credit-card-div  span {\n    padding-top:10px;\n        }\n.credit-card-div img {\n    padding-top:30px;\n}\n.credit-card-div .small-font {\n    font-size:9px;\n}\n.credit-card-div .pad-adjust {\n    padding-top:10px;\n}", ""]);

// exports


/***/ }),

/***/ 330:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(37)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 331:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(37)();
// imports


// module
exports.push([module.i, ".container-center {\n    margin: 0;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    margin-right: -50%;\n    transform: translate(-50%, -50%)\n}\n\n.container_info {\n    position: absolute;\n    right: 130px;\n    overflow: auto;\n    background: rgb(48, 48, 48);\n    color: white;\n    border: 1px solid #ccc;\n    min-height: 57%;\n    max-height: 65%;\n    min-width: 330px;\n    max-width: 30%;\n    font-size: 14px;\n    font-family: inherit;\n    margin: 5px 5px 5px 5px;\n    box-shadow: -4px 4px 2px 0 rgba(0,0,0,0.3);\n    white-space: pre-wrap;\n    outline: 0;\n    opacity: 0.35;\n}", ""]);

// exports


/***/ }),

/***/ 332:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(37)();
// imports


// module
exports.push([module.i, ".user-row {\n    margin-bottom: 14px;\n}\n\n.user-row:last-child {\n    margin-bottom: 0;\n}\n\n.dropdown-user {\n    margin: 13px 0;\n    padding: 5px;\n    height: 100%;\n}\n\n.dropdown-user:hover {\n    cursor: pointer;\n}\n\n.table-user-information > tbody > tr {\n    border-top: 1px solid rgb(221, 221, 221);\n}\n\n.table-user-information > tbody > tr:first-child {\n    border-top: 0;\n}\n\n\n.table-user-information > tbody > tr > td {\n    border-top: 0;\n}\n.toppad\n{margin-top:20px;\n}", ""]);

// exports


/***/ }),

/***/ 333:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(37)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 371:
/***/ (function(module, exports) {

module.exports = "<section class=\"container\">\n    <section class=\"row text-center\">\n        <h1 id=\"about\">About</h1>\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque blandit rhoncus neque, hendrerit pretium sapien ornare non. Proin iaculis arcu risus, vel vulputate est pharetra a. Donec efficitur, velit in auctor congue, lectus ipsum lacinia velit, in blandit est sem ut est. Aenean tortor lectus, viverra tempor purus sed, finibus varius arcu. Proin efficitur scelerisque metus at commodo. Maecenas convallis fermentum laoreet. Proin finibus lectus vel enim consequat, vitae vulputate libero elementum. Praesent sit amet dictum dui, ac maximus ante. Nunc nec arcu eget erat venenatis porta. Phasellus suscipit accumsan tellus at semper.<p>\n    </section>\n</section>"

/***/ }),

/***/ 372:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n    <div class=\"container-fluid\">\n        <!-- Brand and toggle get grouped for better mobile display -->\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar-collapse\"\n                aria-expanded=\"false\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\" [routerLink]=\"['/home']\">Arabica</a>\n        </div>\n\n        <!-- Collect the nav links, forms, and other content for toggling -->\n        <div class=\"collapse navbar-collapse\" id=\"navbar-collapse\">\n            <ul *ngIf=\"!(af.auth | async)\" class=\"nav navbar-nav navbar-right\">\n                <li><a href=\"#about\">About</a></li>\n                <li><button class=\"btn btn-primary\" (click)=\"login()\" style=\"margin: 9px 0px 0px 0px\">Log In</button></li>\n            </ul>\n            <ul *ngIf=\"af.auth | async\" class=\"nav navbar-nav navbar-right\">\n                <li><a [routerLink]=\"['./home/overview']\">Overview</a></li>\n                <li><a [routerLink]=\"['./home/accounts']\">Accounts</a></li>\n                <li><a [routerLink]=\"['./home/categorization']\">Categorization</a></li>\n                <li><a [routerLink]=\"['./home/profile']\">Profile</a></li>\n                <li><button class=\"btn btn-primary\" (click)=\"logout()\" style=\"margin: 9px 0px 0px 0px\">Log Out</button></li>\n            </ul>\n        </div>\n        <!-- /.navbar-collapse -->\n    </div>\n    <!-- /.container-fluid -->\n</nav>\n<router-outlet></router-outlet>\n<footer>\n    <div class=\"container\">\n        <p class=\"text-center\">&copy;2017 Developed &amp; Designed by Guocheng Wei</p>\n    </div>\n</footer>"

/***/ }),

/***/ 373:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1\">\n        <div class=\"credit-card-div\" *ngFor=\"let account of accounts\">\n            <div class=\"panel panel-default\">\n                <div class=\"panel-heading\">{{account.nickname}}</div>\n                <div class=\"panel-body\">\n                    <div class=\"col-md-12\">\n                        <span class=\"col-md-5 col-xs-6\">Type:</span>\n                        <span class=\"col-md-7 col-xs-6\">{{account.type}}</span>\n                    </div>\n                    <div class=\"col-md-12\">\n                        <span class=\"col-md-5 col-xs-6\">#Number:</span>\n                        <span class=\"col-md-7 col-xs-6\">{{account.account_number}}</span>\n                    </div>\n                    <div class=\"col-md-12\">\n                        <span class=\"col-md-5 col-xs-6\">Rewards:</span>\n                        <span class=\"col-md-7 col-xs-6\">$ {{account.rewards}}</span>\n                    </div>\n                    <div class=\"col-md-12\">\n                        <span class=\"col-md-5 col-xs-6\">Balance:</span>\n                        <span class=\"col-md-7 col-xs-6\">$ {{account.balance}}</span>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- CREDIT CARD DIV END -->\n</div>"

/***/ }),

/***/ 374:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1\">\n    <div class=\"panel panel-default\">\n        <div class=\"panel-heading\">{{purchase.merchantInfo.name}}</div>\n        <div class=\"panel-body\">\n            <p>Payee Type: {{purchase.type}}</p>\n            <p>Category: {{purchase.description}}</p>\n            <p>Amount: {{purchase.amount}}</p>\n            <p>Medium: {{purchase.medium}}</p>\n            <p>Date: {{purchase.merchantInfo.creation_date}}</p>\n            <p>Address: {{purchase.merchantInfo.address.street_number}} {{purchase.merchantInfo.address.street_number}}, {{purchase.merchantInfo.address.city}}, {{purchase.merchantInfo.address.state}} {{purchase.merchantInfo.address.zip}}</p>\n        </div>\n    </div>\n    <br>\n    <h2 class=\"text-center\">{{category}}</h2>\n    <br>\n    <section>\n        <div *ngFor=\"let c of categories\" class=\"col-lg-3 col-md-4 col-xs-6 text-center btn btn-default\" (click)=\"updateCategory(c, purchase)\">{{c.name}}</div>\n        <div class=\"col-lg-3 col-md-4 col-xs-6 text-center btn btn-default\"><i class=\"glyphicon glyphicon-plus\"></i></div>\n    </section>\n</div>"

/***/ }),

/***/ 375:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ 376:
/***/ (function(module, exports) {

module.exports = "<section *ngIf=\"hasAccount()\" class=\"container\">\n    <h1 class=\"text-center\">My Finance Record</h1><br>\n    <ul class=\"nav nav-tabs\">\n        <li role=\"presentation\" [class.active]=\"contentType == 'Chart'\"><a (click)=\"switchContent('Chart')\">Chart</a></li>\n        <li role=\"presentation\" [class.active]=\"contentType == 'List'\"><a (click)=\"switchContent('List')\">List</a></li>\n    </ul>\n    <div class=\"row\" *ngIf=\"contentType == 'Chart'\">\n        <div class=\"text-center\">\n            <div style=\"display: block;\">\n                <canvas baseChart *ngIf=\"!isIncome\" width=\"400\" height=\"400\" [datasets]=\"outcome.datasets\" [labels]=\"outcome.labels\" [options]=\"options\" [chartType]=\"type\" (chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\"></canvas>\n                <canvas baseChart *ngIf=\"isIncome\" width=\"400\" height=\"400\" [datasets]=\"income.datasets\" [labels]=\"income.labels\" [options]=\"options\"[chartType]=\"type\" (chartHover)=\"chartHovered($event)\" (chartClick)=\"chartClicked($event)\"></canvas>\n            </div>\n        </div>\n        <br>\n        <div class=\"row\">\n            <div class=\"row text-center\">\n                <button class=\"btn btn-info col\" (click)=\"updateType('pie')\">Pie</button>\n                <button class=\"btn btn-info col\" (click)=\"updateType('bar')\">Bar</button>\n                <button class=\"btn btn-info col\" (click)=\"updateType('line')\">Line</button>\n                <button class=\"btn btn-info col\" (click)=\"updateType('radar')\">Radar</button>\n                <button class=\"btn btn-info col\" (click)=\"updateType('polarArea')\">Polar</button>\n                <button class=\"btn btn-default col\" (click)=\"switchChart()\">Switch</button>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"row\" *ngIf=\"contentType === 'List'\">\n        <h3 class=\"text-center\">{{kind}} Details</h3>\n        <div class=\"panel panel-default\">\n            <!-- Bill -->\n            <table class=\"table\" *ngIf=\"kind === 'Bill'\">\n                <tr>\n                    <th>Status</th>\n                    <th>Payee</th>\n                    <th>Payment Date</th>\n                    <th>Recurring Date</th>\n                    <th>Payment Amount</th>\n                </tr>\n                <tr *ngFor=\"let bill of bills\">\n                    <td>{{bill.status}}</td>\n                    <td>{{bill.payee}}</td>\n                    <td>{{bill.payment_date}}</td>\n                    <td>{{bill.recurring_date}}</td>\n                    <td>{{bill.payment_amount}}</td>\n                </tr>\n            </table>\n\n            <!-- Loan -->\n            <table class=\"table\" *ngIf=\"kind === 'Loan'\">\n                <tr>\n                    <th>Type</th>\n                    <th>Status</th>\n                    <th>Credit Score</th>\n                    <th>Monthly Payment</th>\n                    <th>Amount</th>\n                </tr>\n                <tr *ngFor=\"let loan of loans\">\n                    <td>{{loan.type}}</td>\n                    <td>{{loan.status}}</td>\n                    <td>{{loan.credit_score}}</td>\n                    <td>{{loan.monthly_payment}}</td>\n                    <td>{{loan.amount}}</td>\n                </tr>\n            </table>\n\n            <!-- Purchase -->\n            <table class=\"table\" *ngIf=\"kind === 'Transfer'\">\n                <tr>\n                    <th>Type</th>\n                    <th>Status</th>\n                    <th>Amount</th>\n                    <th>Transaction Date</th>\n                    <th>Payee</th>\n                </tr>\n                <tr *ngFor=\"let transfer of transfers\">\n                    <td>{{transfer.type}}</td>\n                    <td>{{transfer.status}}</td>\n                    <td>{{transfer.amount}}</td>\n                    <td>{{transfer.transaction_date}}</td>\n                    <td>{{transfer.payee_id}}</td>\n                </tr>\n            </table>\n        </div>\n    </div>\n</section>\n\n<!-- If donot have an Capital One account-->\n<section *ngIf=\"!hasAccount()\" class=\"container\">\n    <div class=\"text-center container-center\">\n        <button class=\"btn btn-info\">Create A <strong>Capital One</strong> Account</button>\n    </div>\n</section>"

/***/ }),

/***/ 377:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xs-offset-0 col-sm-offset-0 col-md-offset-3 col-lg-offset-3 toppad\">\n\n\n            <div class=\"panel panel-info\">\n                <div class=\"panel-heading\">\n                    <h3 class=\"panel-title\">{{profile.name}}</h3>\n                </div>\n                <div class=\"panel-body\">\n                    <div class=\"row\">\n                        <div class=\"col-md-3 col-lg-3 \" align=\"center\"> <img alt=\"User Pic\" src=\"{{profile.picture_large}}\"\n                                class=\"img-circle img-responsive\">\n                        </div>\n                        <div class=\" col-md-9 col-lg-9 \">\n                            <table class=\"table table-user-information\">\n                                <tbody>\n                                    <tr>\n                                        <td>First Name:</td>\n                                        <td>{{profile.given_name}}</td>\n                                    </tr>\n                                    <tr>\n                                        <td>Last Name:</td>\n                                        <td>{{profile.family_name}}</td>\n                                    </tr>\n\n                                    <tr>\n                                        <tr>\n                                            <td>Gender</td>\n                                            <td>{{profile.gender}}</td>\n                                        </tr>\n                                        <tr>\n                                            <td>Home Address</td>\n                                            <td>West Lafayette</td>\n                                        </tr>\n                                        <tr>\n                                            <td>Email</td>\n                                            <td><a href=\"{{profile.email}}\">{{profile.email}}</a></td>\n                                        </tr>\n                                        <tr>\n                                            <td>Phone Number</td>\n                                            <td>123-4567-890(Landline)<br><br>555-4567-890(Mobile)\n                                            </td>\n                                        </tr>\n                                </tbody>\n                            </table>\n\n                            <a [routerLink]=\"['../overview']\" class=\"btn btn-primary\">Create A Capital Account</a>\n                            <a [routerLink]=\"['../accounts']\" class=\"btn btn-primary\">Track Finance Accounts</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(750);

/***/ }),

/***/ 462:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(327);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(194)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/index.js!./styles.scss", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/index.js!./styles.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 463:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(333);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(194)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!./headings.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!./headings.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 469:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(328);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 470:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(329);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 471:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(330);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 472:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(331);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 473:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(332);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 476:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(8))(111);

/***/ }),

/***/ 477:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(8))(196);

/***/ }),

/***/ 478:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(8))(284);

/***/ }),

/***/ 479:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(8))(287);

/***/ }),

/***/ 484:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(8))(422);

/***/ }),

/***/ 485:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(8))(431);

/***/ }),

/***/ 486:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(8))(440);

/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(8))(0);

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_service__ = __webpack_require__(228);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__auth_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__guard_service__ = __webpack_require__(230);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__guard_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_service__ = __webpack_require__(229);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__data_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__CapitalOne_service__ = __webpack_require__(227);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__CapitalOne_service__["a"]; });






/***/ }),

/***/ 620:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(8))(765);

/***/ }),

/***/ 621:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(8))(771);

/***/ }),

/***/ 622:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(8))(820);

/***/ }),

/***/ 623:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(8))(826);

/***/ }),

/***/ 624:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(8))(921);

/***/ }),

/***/ 625:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_environment__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angularclass_hmr__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angularclass_hmr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angularclass_hmr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app__ = __webpack_require__(204);
/* harmony export (immutable) */ __webpack_exports__["main"] = main;
/*
 * Angular bootstraping
 */



/*
 * App Module
 * our top level module that holds all of our components
 */

/*
 * Bootstrap our Angular app with a top level NgModule
 */
function main() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["platformBrowserDynamic"])()
        .bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app__["a" /* AppModule */]).then(function(MODULE_REF) {
  if (false) {
    module["hot"]["accept"]();
    
    if (MODULE_REF.instance["hmrOnInit"]) {
      module["hot"]["data"] && MODULE_REF.instance["hmrOnInit"](module["hot"]["data"]);
    }
    if (MODULE_REF.instance["hmrOnStatus"]) {
      module["hot"]["apply"](function(status) {
        MODULE_REF.instance["hmrOnStatus"](status);
      });
    }
    if (MODULE_REF.instance["hmrOnCheck"]) {
      module["hot"]["check"](function(err, outdatedModules) {
        MODULE_REF.instance["hmrOnCheck"](err, outdatedModules);
      });
    }
    if (MODULE_REF.instance["hmrOnDecline"]) {
      module["hot"]["decline"](function(dependencies) {
        MODULE_REF.instance["hmrOnDecline"](dependencies);
      });
    }
    module["hot"]["dispose"](function(store) {
      MODULE_REF.instance["hmrOnDestroy"] && MODULE_REF.instance["hmrOnDestroy"](store);
      MODULE_REF.destroy();
      MODULE_REF.instance["hmrAfterDestroy"] && MODULE_REF.instance["hmrAfterDestroy"](store);
    });
  }
  return MODULE_REF;
})
        .then(__WEBPACK_IMPORTED_MODULE_1__app_environment__["a" /* decorateModuleRef */])
        .catch(function (err) { return console.error(err); });
}
// needed for hmr
// in prod this is replace for document ready
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angularclass_hmr__["bootloader"])(main);


/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(8))(2);

/***/ }),

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(8))(441);

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

module.exports = vendor_lib;

/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(8))(96);

/***/ })

},[625]);
//# sourceMappingURL=main.bundle.js.map