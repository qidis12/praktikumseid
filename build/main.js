webpackJsonp([0],{

/***/ 108:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 149:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 149;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/labkom/App/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Beranda</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Wisata Yogya</h3>\n<ion-content class="card-background-page">\n\n  <ion-card>\n    <img src="data:image/jpeg;base64,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"/>\n    <div class="card-title">Pantai</div>\n    <div class="card-subtitle">41 Listings</div>\n  </ion-card>\n\n  <ion-card>\n    <img src="https://nusatour.co.id/wp-content/uploads/wisata-jogjakarta.jpeg"/>\n    <div class="card-title">Candi</div>\n    <div class="card-subtitle">64 Listings</div>\n  </ion-card>\n\n  <ion-card>\n    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf8wtXJzgx5kWG474cirBInmSEHJvm2ntvGjZzWH8nzW4Ho3H_vQ"/>\n    <div class="card-title">Goa</div>\n    <div class="card-subtitle">72 Listings</div>\n  </ion-card>\n\n  <ion-card>\n    <img src="https://garasijogja.com/wp-content/uploads/2017/12/anismanto-e1513688653759.jpg"/>\n    <div class="card-title">sunset</div>\n    <div class="card-subtitle">28 Listings</div>\n  </ion-card>\n\n</ion-content>\n  <button ion-button secondary menuToggle>Toggle Menu</button>\n</ion-content>\n'/*ion-inline-end:"/home/labkom/App/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/home/labkom/App/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-end>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/labkom/App/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(218);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(192);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/labkom/App/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/home/labkom/App/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[195]);
//# sourceMappingURL=main.js.map