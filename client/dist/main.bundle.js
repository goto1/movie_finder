webpackJsonp([0,3],{

/***/ 329:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__movies_service__ = __webpack_require__(330);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MoviesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MoviesComponent = (function () {
    function MoviesComponent(moviesService) {
        this.moviesService = moviesService;
    }
    MoviesComponent.prototype.ngOnInit = function () {
        this.searchQuery = 'The Hangover';
        this.searchMovie(this.searchQuery);
    };
    MoviesComponent.prototype.searchMovie = function (title) {
        var _this = this;
        if (title) {
            this.searchQuery = title;
            this.moviesService.searchForMovie(title).subscribe(function (movies) { return _this.movies = movies; }, function (error) { return _this.errorMessage = error; });
        }
    };
    MoviesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            template: __webpack_require__(672),
            styles: [__webpack_require__(669)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__movies_service__["a" /* MoviesService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__movies_service__["a" /* MoviesService */]) === 'function' && _a) || Object])
    ], MoviesComponent);
    return MoviesComponent;
    var _a;
}());
//# sourceMappingURL=/Users/tomasz/Development/mean/movie_finder/client/src/movies.component.js.map

/***/ },

/***/ 330:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MoviesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var API_INFO = {
    search_url: 'https://api.themoviedb.org/3/search/movie?api_key=03eb2b84d82f7dbdb50c3106fb6c2de3',
    add_info: '&language=en-US&page=1&include_adult=false'
};
var MoviesService = (function () {
    function MoviesService(http) {
        this.http = http;
    }
    MoviesService.prototype.searchForMovie = function (title) {
        title = title.replace(/\s/g, '%20');
        this.apiUrl = "" + API_INFO.search_url + API_INFO.add_info + "&query=" + title;
        return this.http.get(this.apiUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    MoviesService.prototype.extractData = function (res) {
        var body = res.json();
        return body.results || {};
    };
    MoviesService.prototype.handleError = function (error) {
        var errorMessage;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errorMessage = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errorMessage = error.message ? error.message : error.toString();
        }
        console.error(errorMessage);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errorMessage);
    };
    MoviesService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === 'function' && _a) || Object])
    ], MoviesService);
    return MoviesService;
    var _a;
}());
//# sourceMappingURL=/Users/tomasz/Development/mean/movie_finder/client/src/movies.service.js.map

/***/ },

/***/ 331:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(678);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(677);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TrendingMoviesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TrendingMoviesService = (function () {
    function TrendingMoviesService(http) {
        this.http = http;
        this.moviesUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=03eb2b84d82f7dbdb50c3106fb6c2de3&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1';
    }
    TrendingMoviesService.prototype.getMovies = function () {
        return this.http.get(this.moviesUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    TrendingMoviesService.prototype.extractData = function (res) {
        var body = res.json();
        return body.results || {};
    };
    TrendingMoviesService.prototype.handleError = function (error) {
        var errorMessage;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errorMessage = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errorMessage = error.message ? error.message : error.toString();
        }
        console.error(errorMessage);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errorMessage);
    };
    TrendingMoviesService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === 'function' && _a) || Object])
    ], TrendingMoviesService);
    return TrendingMoviesService;
    var _a;
}());
//# sourceMappingURL=/Users/tomasz/Development/mean/movie_finder/client/src/trending-movies.service.js.map

/***/ },

/***/ 384:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 384;


/***/ },

/***/ 385:
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(504);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/tomasz/Development/mean/movie_finder/client/src/main.js.map

/***/ },

/***/ 502:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(323);
/* unused harmony export appRoutes */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var appRoutes = [
    { path: '', redirectTo: '/movies', pathMatch: 'full' },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(appRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
//# sourceMappingURL=/Users/tomasz/Development/mean/movie_finder/client/src/app-routing.module.js.map

/***/ },

/***/ 503:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.userLoggedIn = false;
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'app-root',
            template: "\n    <header>\n      <div class=\"logo header-item\">MOVIEJO</div>\n      <nav class=\"header-item\">\n        <button class=\"nav-item\" *ngIf=\"!userLoggedIn\">\n          Login <i class=\"fa fa-user\" aria-hidden=\"true\"></i>\n        </button>\n        <button class=\"nav-item\" *ngIf=\"userLoggedIn\">\n          Logout <i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i>\n        </button>\n      </nav>\n    </header>\n    <router-outlet></router-outlet>\n  ",
            styles: [__webpack_require__(668)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/tomasz/Development/mean/movie_finder/client/src/app.component.js.map

/***/ },

/***/ 504:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(503);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__movies_movies_module__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__page_not_found_component__ = __webpack_require__(510);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__page_not_found_component__["a" /* PageNotFoundComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__movies_movies_module__["a" /* MoviesModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/tomasz/Development/mean/movie_finder/client/src/app.module.js.map

/***/ },

/***/ 505:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__movies_component__ = __webpack_require__(329);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MoviesRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var moviesRoutes = [
    { path: 'movies', component: __WEBPACK_IMPORTED_MODULE_2__movies_component__["a" /* MoviesComponent */] }
];
var MoviesRoutingModule = (function () {
    function MoviesRoutingModule() {
    }
    MoviesRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(moviesRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        }), 
        __metadata('design:paramtypes', [])
    ], MoviesRoutingModule);
    return MoviesRoutingModule;
}());
//# sourceMappingURL=/Users/tomasz/Development/mean/movie_finder/client/src/movies-routing.module.js.map

/***/ },

/***/ 506:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__movies_component__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__trending_movies_trending_movies_component__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__movies_routing_module__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__trending_movies_trending_movies_service__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__movies_service__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__trending_movies_movie_title_pipe__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pipes_movie_title_search_pipe__ = __webpack_require__(507);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MoviesModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var MoviesModule = (function () {
    function MoviesModule() {
    }
    MoviesModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* JsonpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__movies_routing_module__["a" /* MoviesRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__movies_component__["a" /* MoviesComponent */],
                __WEBPACK_IMPORTED_MODULE_5__trending_movies_trending_movies_component__["a" /* TrendingMoviesComponent */],
                __WEBPACK_IMPORTED_MODULE_9__trending_movies_movie_title_pipe__["a" /* MovieTitlePipe */],
                __WEBPACK_IMPORTED_MODULE_10__pipes_movie_title_search_pipe__["a" /* MovieTitleSearchPipe */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__trending_movies_trending_movies_service__["a" /* TrendingMoviesService */],
                __WEBPACK_IMPORTED_MODULE_8__movies_service__["a" /* MoviesService */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], MoviesModule);
    return MoviesModule;
}());
//# sourceMappingURL=/Users/tomasz/Development/mean/movie_finder/client/src/movies.module.js.map

/***/ },

/***/ 507:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MovieTitleSearchPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MovieTitleSearchPipe = (function () {
    function MovieTitleSearchPipe() {
    }
    MovieTitleSearchPipe.prototype.transform = function (title) {
        if (title.length > 19) {
            title = title.slice(0, 16) + '...';
        }
        return title;
    };
    MovieTitleSearchPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Pipe */])({ name: 'movieTitleSearch' }), 
        __metadata('design:paramtypes', [])
    ], MovieTitleSearchPipe);
    return MovieTitleSearchPipe;
}());
//# sourceMappingURL=/Users/tomasz/Development/mean/movie_finder/client/src/movie-title-search.pipe.js.map

/***/ },

/***/ 508:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MovieTitlePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MovieTitlePipe = (function () {
    function MovieTitlePipe() {
    }
    MovieTitlePipe.prototype.transform = function (title) {
        var result = title;
        if (result.length > 34) {
            result = result.slice(0, 31) + '...';
        }
        return result;
    };
    MovieTitlePipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Pipe */])({ name: 'movieTitle' }), 
        __metadata('design:paramtypes', [])
    ], MovieTitlePipe);
    return MovieTitlePipe;
}());
//# sourceMappingURL=/Users/tomasz/Development/mean/movie_finder/client/src/movie-title.pipe.js.map

/***/ },

/***/ 509:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__trending_movies_service__ = __webpack_require__(331);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TrendingMoviesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TrendingMoviesComponent = (function () {
    function TrendingMoviesComponent(trendingMoviesService) {
        this.trendingMoviesService = trendingMoviesService;
        this.moviesExtracted = [];
        this.pageNumber = 0;
    }
    TrendingMoviesComponent.prototype.ngOnInit = function () {
        this.getMovies();
    };
    TrendingMoviesComponent.prototype.getMovies = function () {
        var _this = this;
        this.trendingMoviesService.getMovies().subscribe(function (movies) {
            _this.allMovies = movies;
            _this.sortMoviesByPages();
            _this.getMoviesFromPage(_this.pageNumber);
        }, function (error) { return _this.errorMessage = error; });
    };
    TrendingMoviesComponent.prototype.sortMoviesByPages = function () {
        var tempArr = [];
        var counter = 1;
        for (var i = 0; i < this.allMovies.length; i++) {
            tempArr.push(this.allMovies[i]);
            if (counter % 5 === 0) {
                this.moviesExtracted.push(tempArr);
                tempArr = [];
            }
            counter++;
        }
    };
    TrendingMoviesComponent.prototype.getMoviesFromPage = function (number) {
        this.moviesShown = this.moviesExtracted[number];
    };
    TrendingMoviesComponent.prototype.nextPage = function () {
        if (this.pageNumber < this.moviesExtracted.length - 1) {
            this.pageNumber++;
        }
        this.getMoviesFromPage(this.pageNumber);
    };
    TrendingMoviesComponent.prototype.previousPage = function () {
        if (this.pageNumber > 0) {
            this.pageNumber--;
            console.log(this.pageNumber);
        }
        this.getMoviesFromPage(this.pageNumber);
    };
    TrendingMoviesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'trending-movies',
            template: __webpack_require__(673),
            styles: [__webpack_require__(670)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__trending_movies_service__["a" /* TrendingMoviesService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__trending_movies_service__["a" /* TrendingMoviesService */]) === 'function' && _a) || Object])
    ], TrendingMoviesComponent);
    return TrendingMoviesComponent;
    var _a;
}());
//# sourceMappingURL=/Users/tomasz/Development/mean/movie_finder/client/src/trending-movies.component.js.map

/***/ },

/***/ 510:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PageNotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            template: "\n    <div>\n      <h2>The page you're looking <br />for doesn't exist.</h2>\n      <div class=\"exclamation-triangle\">\n        <i class=\"fa fa-exclamation-triangle\" aria-hidden=\"true\"></i>\n      </div>\n      <div class=\"back\">\n        <button>Home <i class=\"fa fa-home\" aria-hidden=\"true\"></i></button>\n      </div>\n    </div>\n  ",
            styles: [__webpack_require__(671)]
        }), 
        __metadata('design:paramtypes', [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());
//# sourceMappingURL=/Users/tomasz/Development/mean/movie_finder/client/src/page-not-found.component.js.map

/***/ },

/***/ 511:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/tomasz/Development/mean/movie_finder/client/src/environment.js.map

/***/ },

/***/ 512:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(694);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/Users/tomasz/Development/mean/movie_finder/client/src/polyfills.js.map

/***/ },

/***/ 668:
/***/ function(module, exports) {

module.exports = "header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 65px;\n  background-color: #FBFFFD;\n  color: #577F6D; }\n  header .header-item {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    font-weight: 900; }\n  header .logo {\n    font-size: 1.75em;\n    font-weight: 600;\n    letter-spacing: .25em;\n    padding-left: 25px; }\n  header nav {\n    text-align: right;\n    padding-right: 25px; }\n    header nav button {\n      width: 130px;\n      padding: 12.5px 7.5px 12.5px 12.5px;\n      background-color: #577F6D;\n      border: none;\n      font-weight: 400;\n      color: #FFFBFB;\n      letter-spacing: .15em;\n      text-transform: uppercase;\n      border-radius: 2px;\n      box-shadow: 0px 1.5px 2px 1px #7D7F7F;\n      -webkit-transition: 0.5s;\n      transition: 0.5s; }\n      header nav button:hover {\n        cursor: not-allowed;\n        opacity: 0.75; }\n    header nav i {\n      margin-left: 2.5px; }\n"

/***/ },

/***/ 669:
/***/ function(module, exports) {

module.exports = ".movie-search {\n  margin-top: 25px;\n  padding: 0 25px 0 25px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end; }\n  .movie-search .search-input {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    border: 1px solid #577F6D;\n    height: 30px;\n    width: 215px;\n    padding: 10px;\n    border-radius: 2.5px;\n    box-shadow: 0px 0px 2px 1px #7D7F7F;\n    -webkit-transition: 0.5s;\n    transition: 0.5s; }\n    .movie-search .search-input:hover {\n      border: 1px solid #FE5E4A;\n      width: 300px; }\n    .movie-search .search-input input[type=\"text\"] {\n      border: none;\n      width: 75%; }\n      .movie-search .search-input input[type=\"text\"]:focus {\n        outline: none; }\n    .movie-search .search-input i {\n      -ms-flex-item-align: center;\n          -ms-grid-row-align: center;\n          align-self: center;\n      font-size: 1.25em;\n      -webkit-transition: 0.5s;\n      transition: 0.5s; }\n      .movie-search .search-input i:hover {\n        color: #FE5E4A;\n        cursor: pointer; }\n\n.search-results {\n  padding-left: 25px;\n  padding-right: 25px; }\n  .search-results .header {\n    color: #577F6D;\n    font-size: 1.25em;\n    font-weight: 500;\n    border-bottom: 2px solid #7D7F7F;\n    padding-bottom: 5px;\n    letter-spacing: .10em; }\n    .search-results .header span {\n      font-weight: 900; }\n  .search-results .movies {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -ms-flex-pack: distribute;\n        justify-content: space-around; }\n    .search-results .movies .movie-details {\n      -ms-flex-preferred-size: 200px;\n          flex-basis: 200px;\n      -ms-flex-negative: 0;\n          flex-shrink: 0;\n      -webkit-box-flex: 0;\n          -ms-flex-positive: 0;\n              flex-grow: 0;\n      margin-bottom: 25px;\n      background-color: #577F6D;\n      color: #FFFBFB;\n      border-radius: 2px;\n      box-shadow: 0px 1.5px 2px 1px #7D7F7F;\n      overflow: hidden;\n      padding: 2.5px;\n      height: 426px;\n      -webkit-transition: 0.5s;\n      transition: 0.5s; }\n      .search-results .movies .movie-details:hover {\n        cursor: pointer;\n        box-shadow: 0px 0px 2px 3px #FE5E4A;\n        -webkit-transform: scale(1.05);\n                transform: scale(1.05); }\n      .search-results .movies .movie-details .poster img {\n        width: 200px;\n        height: 300px;\n        border-radius: 2.5px; }\n      .search-results .movies .movie-details .poster .no-poster {\n        border: 1px solid red;\n        width: 195px;\n        height: 300px;\n        margin-bottom: 2.5px;\n        border-radius: 2.5px;\n        border: 2px solid #FE5E4A;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center; }\n        .search-results .movies .movie-details .poster .no-poster i {\n          font-size: 6em;\n          color: #FE5E4A; }\n      .search-results .movies .movie-details .movie-info .title {\n        text-transform: uppercase;\n        border-bottom: 1px solid #FE5E4A;\n        font-size: 1em;\n        font-weight: 600;\n        padding: 0 5px 2.5px 5px; }\n      .search-results .movies .movie-details .movie-info .release-date {\n        margin: 7.5px 2.5px 7.5px 2.5px;\n        font-size: .90em; }\n        .search-results .movies .movie-details .movie-info .release-date span {\n          font-weight: 900;\n          font-size: 1em;\n          text-decoration: underline;\n          letter-spacing: 0.1em; }\n      .search-results .movies .movie-details .movie-info .vote-average {\n        margin: 7.5px 2.5px 5.7px 2.5px;\n        text-align: right; }\n        .search-results .movies .movie-details .movie-info .vote-average span {\n          display: inline-block;\n          border-radius: 2.5px;\n          background-color: #FE5E4A;\n          padding: 2.5px 3.5px 2.5px 3.5px;\n          width: 55px;\n          text-align: center; }\n          .search-results .movies .movie-details .movie-info .vote-average span i {\n            padding-left: 2.5px; }\n      .search-results .movies .movie-details .footer {\n        background-color: #FFFBFB;\n        color: #577F6D;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex; }\n        .search-results .movies .movie-details .footer .footer-item {\n          margin: 10px;\n          -webkit-transition: 0.5s;\n          transition: 0.5s; }\n          .search-results .movies .movie-details .footer .footer-item:hover {\n            cursor: pointer;\n            color: #FE5E4A;\n            -webkit-transform: scale(1.25);\n                    transform: scale(1.25); }\n\n.search-results-fail {\n  text-align: center;\n  margin: 35px 0 35px 0; }\n  .search-results-fail h2 {\n    font-size: 2em;\n    color: #577F6D;\n    text-transform: uppercase;\n    letter-spacing: 0.05em; }\n  .search-results-fail .error {\n    font-size: 7em;\n    color: #661B11; }\n"

/***/ },

/***/ 670:
/***/ function(module, exports) {

module.exports = ".trending {\n  margin-top: 25px;\n  border: 2px solid #7D7F7F;\n  border-radius: 5px 15px 5px 15px;\n  height: 350px;\n  position: relative; }\n  .trending .title {\n    position: absolute;\n    top: 5px;\n    left: 10px;\n    text-transform: uppercase;\n    letter-spacing: .15em;\n    font-size: .85em;\n    font-weight: 600;\n    color: #577F6D; }\n  .trending .error {\n    margin-top: 50px;\n    width: 100%;\n    height: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n    .trending .error .error-item {\n      -ms-flex-item-align: center;\n          -ms-grid-row-align: center;\n          align-self: center; }\n    .trending .error h2 {\n      text-align: center;\n      text-transform: uppercase;\n      color: #577F6D;\n      letter-spacing: .15em;\n      line-height: 1.5em;\n      font-size: 1.35em;\n      font-weight: 600; }\n    .trending .error .sad-face {\n      font-size: 7em;\n      color: #661B11; }\n  .trending .movies {\n    width: 100%;\n    height: 100%;\n    position: relative; }\n    .trending .movies .scroll {\n      position: absolute;\n      top: 40%;\n      font-size: 3.25em;\n      -webkit-transition: 0.5s;\n      transition: 0.5s; }\n      .trending .movies .scroll:hover {\n        color: #FE5E4A;\n        cursor: pointer; }\n    .trending .movies .scroll-left {\n      left: 7.5px; }\n    .trending .movies .scroll-right {\n      right: 7.5px; }\n    .trending .movies .trending-movies {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      height: 100%;\n      margin: 0 30px 0 30px;\n      -ms-flex-pack: distribute;\n          justify-content: space-around; }\n      .trending .movies .trending-movies .movie-wrapper {\n        -ms-flex-preferred-size: 160px;\n            flex-basis: 160px;\n        -ms-flex-negative: 0;\n            flex-shrink: 0;\n        -ms-flex-item-align: center;\n            -ms-grid-row-align: center;\n            align-self: center;\n        height: 285px;\n        background-color: #577F6D;\n        border-bottom: 1px solid #7D7F7F;\n        -webkit-transition: 0.5s;\n        transition: 0.5s;\n        border-radius: 2.5px;\n        overflow: hidden; }\n        .trending .movies .trending-movies .movie-wrapper:hover {\n          cursor: pointer;\n          box-shadow: 0px 0px 2px 4px #FE5E4A; }\n        .trending .movies .trending-movies .movie-wrapper .movie-details .movie-poster img {\n          width: 100%; }\n        .trending .movies .trending-movies .movie-wrapper .movie-details .movie-title {\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-pack: center;\n              -ms-flex-pack: center;\n                  justify-content: center;\n          text-transform: uppercase;\n          color: #FFFBFB;\n          padding: 0px 5px 0px 5px;\n          font-weight: 600;\n          font-size: .85em;\n          letter-spacing: .05em;\n          text-align: center;\n          height: 40px; }\n          .trending .movies .trending-movies .movie-wrapper .movie-details .movie-title .movie-title-wrapper {\n            -ms-flex-item-align: center;\n                -ms-grid-row-align: center;\n                align-self: center; }\n"

/***/ },

/***/ 671:
/***/ function(module, exports) {

module.exports = "div {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-top: 25px; }\n  div h2 {\n    text-align: center;\n    text-transform: uppercase;\n    color: #577F6D;\n    letter-spacing: .15em;\n    line-height: 1.5em;\n    font-size: 2em; }\n  div .exclamation-triangle {\n    text-align: center;\n    font-size: 8em;\n    color: #661B11; }\n  div .back {\n    text-align: right;\n    padding-right: 25px;\n    -ms-flex-item-align: end;\n        align-self: flex-end; }\n    div .back button {\n      display: inline-block;\n      width: 130px;\n      border: 1px solid #577F6D;\n      border-radius: 2px;\n      padding: 12.5px 7.5px 12.5px 12.5px;\n      font-weight: 400;\n      background-color: #FBFFFD;\n      color: #577F6D;\n      text-transform: uppercase;\n      letter-spacing: .15em;\n      -webkit-transition: 0.5s;\n      transition: 0.5s; }\n      div .back button:hover {\n        opacity: 0.75;\n        box-shadow: 0px 0px 2px 1px #7D7F7F;\n        cursor: pointer; }\n    div .back i {\n      margin-left: 2.5px; }\n"

/***/ },

/***/ 672:
/***/ function(module, exports) {

module.exports = "<trending-movies></trending-movies>\n\n<div class=\"movie-search\">\n  <div class=\"search-input\">\n    <input type=\"text\" placeholder=\"The Hangover...\" class=\"input-item\" \n      #title />\n    <i class=\"fa fa-search input-item\" aria-hidden=\"true\"\n      (click)=\"searchMovie(title.value)\"></i>\n  </div>\n</div>\n<div class=\"search-results\" *ngIf=\"movies\">\n  <h2 class=\"header\">Showing results for <span>{{searchQuery}}</span>...</h2>\n\n  <div class=\"movies\">\n    <div class=\"movie-details\" *ngFor=\"let movie of movies\">\n      <div class=\"poster\">\n        <div *ngIf=\"movie.poster_path\">\n          <img src=\"https://image.tmdb.org/t/p/w500{{movie.poster_path}}\" alt=\"movie poster\" />\n        </div>\n        <div *ngIf=\"!movie.poster_path\" class=\"no-poster\">\n          <i class=\"fa fa-film\" aria-hidden=\"true\"></i>\n        </div>\n      </div>\n      <div class=\"movie-info\">\n        <div class=\"title\">{{movie.title | movieTitleSearch}}</div>\n        <div class=\"release-date\">\n          Release Date: \n          <span *ngIf=\"movie.release_date\">{{movie.release_date}}</span>\n          <span *ngIf=\"!movie.release_date\">N/A</span>\n        </div>\n        <div class=\"vote-average\"><span>{{movie.vote_average}} <i class=\"fa fa-star-o\" aria-hidden=\"true\"></i></span></div>\n      </div>\n      <div class=\"footer\">\n        <div class=\"like footer-item\">\n          <i class=\"fa fa-heart\" aria-hidden=\"true\"></i>\n        </div>\n        <div class=\"bookmark footer-item\">\n          <i class=\"fa fa-bookmark\" aria-hidden=\"true\"></i>\n        </div>        \n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"search-results-fail\" *ngIf=\"!movies\">\n  <h2>Looks like something went wrong. <br />Please try again.</h2>\n  <div class=\"error\">\n    <i class=\"fa fa-meh-o\" aria-hidden=\"true\"></i>\n  </div>\n</div>\n"

/***/ },

/***/ 673:
/***/ function(module, exports) {

module.exports = "<div class=\"trending\">\n  <div class=\"title\">\n    <i class=\"fa fa-film\" aria-hidden=\"true\"></i>\n    Currently Trending...\n  </div>\n\n  <div class=\"movies\" *ngIf=\"moviesShown\">\n    <div class=\"scroll-left scroll\" (click)=\"previousPage()\">\n      <a><i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i></a>\n    </div>\n    <div class=\"scroll-right scroll\" (click)=\"nextPage()\">\n      <a><i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i></a>\n    </div>\n\n    <div class=\"trending-movies\">\n      <div class=\"movie-wrapper\" *ngFor=\"let movie of moviesShown\">\n        <div class=\"movie-details\">\n          <div class=\"movie-poster\">\n            <img src=\"https://image.tmdb.org/t/p/w500{{movie.poster_path}}\" alt=\"movie poster\">\n          </div>\n          <div class=\"movie-title\">\n            <div class=\"movie-title-wrapper\">{{movie.title | movieTitle}}</div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"error\" *ngIf=\"!moviesShown\">\n    <h2 class=\"error-item\">\n      Oops! Something went terribly wrong. <br />Please refresh the page\n      or try again later.\n    </h2>\n    <div class=\"sad-face error-item\"><i class=\"fa fa-frown-o\" aria-hidden=\"true\"></i></div>\n  </div>\n  \n</div>"

/***/ },

/***/ 695:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(385);


/***/ }

},[695]);
//# sourceMappingURL=main.bundle.map