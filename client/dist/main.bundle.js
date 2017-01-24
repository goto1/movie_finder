webpackJsonp([0,3],{

/***/ 152:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tmdb_service__ = __webpack_require__(526);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DiscoverService; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DiscoverService = (function (_super) {
    __extends(DiscoverService, _super);
    function DiscoverService(http) {
        _super.call(this);
        this.http = http;
    }
    ;
    DiscoverService.prototype.nextPage = function () {
        this.page++;
    };
    DiscoverService.prototype.previousPage = function () {
        this.page--;
    };
    DiscoverService.prototype.hasNext = function () {
        return this.page < this.pageCount;
    };
    DiscoverService.prototype.hasPrevious = function () {
        return this.page > 1;
    };
    DiscoverService.prototype.getMovies = function (url) {
        var _this = this;
        return this.http.get(url)
            .map(function (response) { return _this.extractData(response); })
            .catch(function (err) { return _this.handleError(err); });
    };
    DiscoverService.prototype.extractData = function (res) {
        var data = res.json();
        this.extractPageCount(data);
        this.extractPosterUrl(data.results);
        return data.results || {};
    };
    DiscoverService.prototype.extractPageCount = function (movies) {
        this.page = movies.page;
        this.pageCount = movies.total_pages;
    };
    DiscoverService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], DiscoverService);
    return DiscoverService;
    var _a;
}(__WEBPACK_IMPORTED_MODULE_2__tmdb_service__["a" /* TMDBService */]));
//# sourceMappingURL=/Users/tomasz/Development/mean/movie_finder/client/src/discover.service.js.map

/***/ },

/***/ 162:
/***/ function(module, exports) {

module.exports = ".pagination {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  margin: 15px 0 0 0; }\n  .pagination button {\n    width: 180px;\n    padding: 10px 10px 5px 10px;\n    margin-bottom: 5px;\n    border: none;\n    background-color: inherit;\n    text-transform: uppercase;\n    font-weight: 500;\n    color: #577F6D;\n    letter-spacing: 0.05em;\n    -webkit-transition: 0.5s;\n    transition: 0.5s;\n    border-bottom: 1px solid #FE5E4A; }\n    .pagination button:hover {\n      cursor: pointer;\n      -webkit-transform: scale(1.2);\n              transform: scale(1.2); }\n    .pagination button:focus {\n      outline: none; }\n    .pagination button:disabled {\n      cursor: not-allowed;\n      color: #7D7F7F;\n      font-weight: 300;\n      border-bottom: none; }\n    .pagination button i {\n      font-size: 1.15em;\n      padding-left: 2.5px;\n      padding-right: 2.5px; }\n\n.movies {\n  margin-top: 25px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -ms-flex-pack: distribute;\n      justify-content: space-around; }\n  .movies .movie-overview {\n    -ms-flex-preferred-size: 190px;\n        flex-basis: 190px;\n    height: auto;\n    margin-bottom: 25px;\n    -webkit-box-flex: 0;\n        -ms-flex-positive: 0;\n            flex-grow: 0;\n    padding: 2.5px;\n    background-color: #577F6D;\n    border-radius: 2.5px;\n    box-shadow: 0px 0px 2px 2px #FE5E4A;\n    -webkit-transition: 0.5s;\n    transition: 0.5s;\n    position: relative; }\n    .movies .movie-overview:hover {\n      -webkit-transform: scale(1.05);\n              transform: scale(1.05);\n      cursor: pointer; }\n    .movies .movie-overview .movie-poster img {\n      width: 100%;\n      border-radius: 2.5px;\n      height: 285px; }\n    .movies .movie-overview .movie-poster .no-poster {\n      height: 285px;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      border: 2px solid #FE5E4A;\n      border-radius: 2.5px; }\n      .movies .movie-overview .movie-poster .no-poster i {\n        font-size: 7em;\n        color: #FE5E4A; }\n    .movies .movie-overview .movie-title {\n      color: #FFFBFB;\n      text-transform: uppercase;\n      letter-spacing: 0.05em;\n      height: 40px;\n      overflow: hidden;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      text-align: center; }\n    .movies .movie-overview .movie-rating {\n      position: absolute;\n      top: -10px;\n      right: -10px;\n      background-color: #FE5E4A;\n      padding: 2.5px 5px 2.5px 5px;\n      color: #FFFBFB;\n      width: 55px;\n      letter-spacing: 0.05em;\n      font-weigth: 600;\n      border-radius: 2.5px;\n      text-align: center; }\n      .movies .movie-overview .movie-rating i {\n        color: yellow;\n        font-weight: 900; }\n\n.error {\n  text-align: center;\n  color: #FFFBFB;\n  text-transform: uppercase;\n  background-color: rgba(232, 44, 12, 0.7);\n  padding: 25px;\n  border-radius: 5px;\n  width: 70%;\n  margin: 20px auto; }\n  .error .message {\n    font-size: 2.5em;\n    letter-spacing: 0.05em;\n    font-weight: 600; }\n  .error .broken {\n    margin-top: 25px;\n    font-size: 6em; }\n"

/***/ },

/***/ 163:
/***/ function(module, exports) {

module.exports = "<div class=\"show-movies\" *ngIf=\"movies\">\n\n  <div class=\"pagination\">\n    <button type=\"button\" class=\"btn\" (click)=\"previousPage()\"\n      [disabled]=\"!hasPrevious()\">\n    <i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i> Previous Page\n    </button>\n    <button type=\"button\" class=\"btn\" (click)=\"nextPage()\"\n      [disabled]=\"!hasNext()\">\n      Next Page <i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n\n  <div class=\"movies\">\n    <div class=\"movie-overview\" *ngFor=\"let movie of movies\">\n      <div class=\"movie-poster\">\n        <img *ngIf=\"movie.poster_path\" [src]=\"movie.poster_path | safeUrl\" alt=\"movie poster\">\n        <div class=\"no-poster\" *ngIf=\"!movie.poster_path\">\n          <i class=\"fa fa-file-video-o\" aria-hidden=\"true\"></i>\n        </div>\n      </div>\n      <div class=\"movie-title\">\n        <div class=\"title\">{{movie.title | movieTitleShort: 30}}</div>\n      </div>\n      <div *ngIf=\"movie.vote_average\" class=\"movie-rating\">\n        {{movie.vote_average}} <i class=\"fa fa-star-o\" aria-hidden=\"true\"></i>\n      </div>\n    </div>\n  </div>\n\n</div>\n\n<div class=\"error\" *ngIf=\"!movies\">\n  <div class=\"message\">\n    Something went wrong! <br> Please try again shortly.\n  </div>\n  <div class=\"broken\">\n    <i class=\"fa fa-exclamation-triangle\" aria-hidden=\"true\"></i>\n  </div>\n</div>\n\n\n\n\n\n"

/***/ },

/***/ 333:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DiscoverComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DiscoverComponent = (function () {
    function DiscoverComponent() {
        this.categories = [
            { value: 1, name: 'Now Playing' },
            { value: 2, name: 'Popular' },
            { value: 3, name: 'Top Rated' },
            { value: 4, name: 'Upcoming' }
        ];
    }
    DiscoverComponent.prototype.ngOnInit = function () {
        this.selected = {
            category: this.categories[0]
        };
    };
    DiscoverComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            template: "\n    <div class=\"select-category\">\n      <div class=\"select-wrapper\">\n        <select name=\"category\" [(ngModel)]=\"selected.category\">\n          <option *ngFor=\"let category of categories\" [ngValue]=\"category\">\n            {{category.name}}\n          </option>\n        </select>\n      </div>\n    </div>\n    <now-playing *ngIf=\"selected.category.value === 1\"></now-playing>\n    <popular *ngIf=\"selected.category.value === 2\"></popular>\n    <top-rated *ngIf=\"selected.category.value === 3\"></top-rated>\n    <upcoming *ngIf=\"selected.category.value === 4\"></upcoming>\n  ",
            styles: [__webpack_require__(683)]
        }), 
        __metadata('design:paramtypes', [])
    ], DiscoverComponent);
    return DiscoverComponent;
}());
//# sourceMappingURL=/Users/tomasz/Development/mean/movie_finder/client/src/discover.component.js.map

/***/ },

/***/ 334:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_movie_details_service__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__ = __webpack_require__(697);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MovieDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MovieDetailsComponent = (function () {
    function MovieDetailsComponent(route, movieDetailsService, location) {
        this.route = route;
        this.movieDetailsService = movieDetailsService;
        this.location = location;
    }
    MovieDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) { return _this.getMovieDetails(+params['id']); }, function (error) { return console.error(error); });
    };
    MovieDetailsComponent.prototype.getMovieDetails = function (id) {
        var _this = this;
        this.movieDetailsService.getDetails(id)
            .subscribe(function (movie) { return _this.movie = movie; }, function (error) { return console.error(error); });
    };
    MovieDetailsComponent.prototype.goBack = function () {
        this.location.back();
    };
    MovieDetailsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            template: __webpack_require__(689),
            styles: [__webpack_require__(684)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_movie_details_service__["a" /* MovieDetailsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_movie_details_service__["a" /* MovieDetailsService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* Location */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* Location */]) === 'function' && _c) || Object])
    ], MovieDetailsComponent);
    return MovieDetailsComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/tomasz/Development/mean/movie_finder/client/src/movie-details.component.js.map

/***/ },

/***/ 335:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_search_movies_service__ = __webpack_require__(341);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MoviesSearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MoviesSearchComponent = (function () {
    function MoviesSearchComponent(searchService) {
        this.searchService = searchService;
    }
    MoviesSearchComponent.prototype.ngOnInit = function () {
        this.search = { title: '' };
        this.searchFor(this.search.title);
    };
    MoviesSearchComponent.prototype.searchFor = function (title) {
        var _this = this;
        if (title) {
            this.search.title = title;
            this.searchService.searchMovie(this.search.title)
                .subscribe(function (movies) { return _this.movies = movies; }, function (error) {
                console.error(error);
                _this.error = true;
            });
        }
    };
    MoviesSearchComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'movies-search',
            template: __webpack_require__(690),
            styles: [__webpack_require__(685)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_search_movies_service__["a" /* SearchMoviesService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_search_movies_service__["a" /* SearchMoviesService */]) === 'function' && _a) || Object])
    ], MoviesSearchComponent);
    return MoviesSearchComponent;
    var _a;
}());
//# sourceMappingURL=/Users/tomasz/Development/mean/movie_finder/client/src/movies-search.component.js.map

/***/ },

/***/ 336:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
    function MoviesComponent() {
    }
    MoviesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            template: "\n    <nav>\n      <a routerLink=\"/movies\" routerLinkActive=\"active\">\n        Discover <i class=\"fa fa-film\" aria-hidden=\"true\"></i>\n      </a>\n      <a routerLink=\"/search\" routerLinkActive=\"active\">\n        Search <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n      </a>\n    </nav>\n    <router-outlet></router-outlet>\n  ",
            styles: [__webpack_require__(687)]
        }), 
        __metadata('design:paramtypes', [])
    ], MoviesComponent);
    return MoviesComponent;
}());
//# sourceMappingURL=/Users/tomasz/Development/mean/movie_finder/client/src/movies.component.js.map

/***/ },

/***/ 337:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__moviedb_service__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__moviedb_api_info__ = __webpack_require__(80);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MovieDetailsService; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MovieDetailsService = (function (_super) {
    __extends(MovieDetailsService, _super);
    function MovieDetailsService(http) {
        _super.call(this);
        this.http = http;
    }
    MovieDetailsService.prototype.getDetails = function (id) {
        var _this = this;
        var apiUrl = __WEBPACK_IMPORTED_MODULE_3__moviedb_api_info__["a" /* API */].url + '/movie/' + id + '?' +
            __WEBPACK_IMPORTED_MODULE_3__moviedb_api_info__["a" /* API */].key + '&language=en-US' + '&append_to_response=videos,similar';
        this.lastMovie = +id;
        return this.http.get(apiUrl)
            .map(function (data) { return _this.extractData(data); })
            .catch(this.handleError);
    };
    MovieDetailsService.prototype.getLastMovieRetrieved = function () {
        return this.lastMovie;
    };
    MovieDetailsService.prototype.extractData = function (res) {
        var movie = res.json() || {};
        movie.similar = this.extractSimilarMovies(movie);
        movie.trailer = this.extractTrailerUrl(movie);
        movie.poster_path = this.extractPosterUrl(movie);
        return movie;
    };
    MovieDetailsService.prototype.extractSimilarMovies = function (movie) {
        var similar = [];
        var numberOfMovies = 6;
        if (movie.similar.results) {
            if (movie.similar.results.length > numberOfMovies) {
                similar = movie.similar.results.slice(0, numberOfMovies);
            }
            else {
                similar = movie.similar.results;
            }
        }
        return similar;
    };
    MovieDetailsService.prototype.extractTrailerUrl = function (movie) {
        var trailerUrl = '';
        if (movie.videos.results[0]) {
            trailerUrl = "https://youtube.com/embed/" + movie.videos.results[0].key;
        }
        return trailerUrl;
    };
    MovieDetailsService.prototype.extractPosterUrl = function (movie) {
        var posterUrl = '';
        if (movie.poster_path) {
            posterUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
        }
        return posterUrl;
    };
    MovieDetailsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], MovieDetailsService);
    return MovieDetailsService;
    var _a;
}(__WEBPACK_IMPORTED_MODULE_2__moviedb_service__["a" /* MovieDBService */]));
//# sourceMappingURL=/Users/tomasz/Development/mean/movie_finder/client/src/movie-details.service.js.map

/***/ },

/***/ 338:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(696);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(695);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MovieDBService; });




var MovieDBService = (function () {
    function MovieDBService() {
    }
    MovieDBService.prototype.extractData = function (res) {
        var body = res.json();
        return body.results || {};
    };
    MovieDBService.prototype.handleError = function (error) {
        var errorMessage;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errorMessage = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errorMessage = error.message ? error.message : error.toString();
        }
        console.error(errorMessage);
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(errorMessage);
    };
    return MovieDBService;
}());
//# sourceMappingURL=/Users/tomasz/Development/mean/movie_finder/client/src/moviedb.service.js.map

/***/ },

/***/ 339:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__moviedb_api_info__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__discover_service__ = __webpack_require__(152);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return NowPlayingService; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NowPlayingService = (function (_super) {
    __extends(NowPlayingService, _super);
    function NowPlayingService(http) {
        _super.call(this, http);
        this.http = http;
    }
    NowPlayingService.prototype.getNowPlaying = function () {
        this.page = this.page || 1;
        var url = __WEBPACK_IMPORTED_MODULE_2__moviedb_api_info__["a" /* API */].url + "/movie/now_playing?" + __WEBPACK_IMPORTED_MODULE_2__moviedb_api_info__["a" /* API */].key + "&language=en-US&page=" + this.page;
        return this.getMovies(url);
    };
    NowPlayingService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], NowPlayingService);
    return NowPlayingService;
    var _a;
}(__WEBPACK_IMPORTED_MODULE_3__discover_service__["a" /* DiscoverService */]));
//# sourceMappingURL=/Users/tomasz/Development/mean/movie_finder/client/src/now-playing.service.js.map

/***/ },

/***/ 340:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__moviedb_api_info__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__discover_service__ = __webpack_require__(152);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PopularService; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PopularService = (function (_super) {
    __extends(PopularService, _super);
    function PopularService(http) {
        _super.call(this, http);
        this.http = http;
    }
    PopularService.prototype.getPopular = function () {
        this.page = this.page || 1;
        var url = __WEBPACK_IMPORTED_MODULE_2__moviedb_api_info__["a" /* API */].url + "/movie/popular?" + __WEBPACK_IMPORTED_MODULE_2__moviedb_api_info__["a" /* API */].key + "&language=en-US&page=" + this.page;
        return this.getMovies(url);
    };
    PopularService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], PopularService);
    return PopularService;
    var _a;
}(__WEBPACK_IMPORTED_MODULE_3__discover_service__["a" /* DiscoverService */]));
//# sourceMappingURL=/Users/tomasz/Development/mean/movie_finder/client/src/popular.service.js.map

/***/ },

/***/ 341:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__moviedb_service__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__moviedb_api_info__ = __webpack_require__(80);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SearchMoviesService; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchMoviesService = (function (_super) {
    __extends(SearchMoviesService, _super);
    function SearchMoviesService(http) {
        _super.call(this);
        this.http = http;
        this.apiUrl = __WEBPACK_IMPORTED_MODULE_3__moviedb_api_info__["a" /* API */].url + '/search/movie?' + __WEBPACK_IMPORTED_MODULE_3__moviedb_api_info__["a" /* API */].key + '&language=en-US&page=1&include_adult=false';
    }
    SearchMoviesService.prototype.searchMovie = function (title) {
        title = title.replace(/\s/g, '%20');
        this.apiUrl += '&query=' + title;
        return this.http.get(this.apiUrl)
            .map(this.extractData)
            .catch(this.handleError);
    };
    SearchMoviesService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], SearchMoviesService);
    return SearchMoviesService;
    var _a;
}(__WEBPACK_IMPORTED_MODULE_2__moviedb_service__["a" /* MovieDBService */]));
//# sourceMappingURL=/Users/tomasz/Development/mean/movie_finder/client/src/search-movies.service.js.map

/***/ },

/***/ 342:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__moviedb_api_info__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__discover_service__ = __webpack_require__(152);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TopRatedService; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TopRatedService = (function (_super) {
    __extends(TopRatedService, _super);
    function TopRatedService(http) {
        _super.call(this, http);
        this.http = http;
    }
    TopRatedService.prototype.getTopRated = function () {
        this.page = this.page || 1;
        var url = __WEBPACK_IMPORTED_MODULE_2__moviedb_api_info__["a" /* API */].url + "/movie/top_rated?" + __WEBPACK_IMPORTED_MODULE_2__moviedb_api_info__["a" /* API */].key + "&language=en-US&page=" + this.page;
        return this.getMovies(url);
    };
    TopRatedService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], TopRatedService);
    return TopRatedService;
    var _a;
}(__WEBPACK_IMPORTED_MODULE_3__discover_service__["a" /* DiscoverService */]));
//# sourceMappingURL=/Users/tomasz/Development/mean/movie_finder/client/src/top-rated.service.js.map

/***/ },

/***/ 343:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__moviedb_api_info__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__discover_service__ = __webpack_require__(152);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return UpcomingService; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UpcomingService = (function (_super) {
    __extends(UpcomingService, _super);
    function UpcomingService(http) {
        _super.call(this, http);
        this.http = http;
    }
    UpcomingService.prototype.getUpcoming = function () {
        this.page = this.page || 1;
        var url = __WEBPACK_IMPORTED_MODULE_2__moviedb_api_info__["a" /* API */].url + "/movie/upcoming?" + __WEBPACK_IMPORTED_MODULE_2__moviedb_api_info__["a" /* API */].key + "&language=en-US&page=" + this.page;
        return this.getMovies(url);
    };
    UpcomingService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], UpcomingService);
    return UpcomingService;
    var _a;
}(__WEBPACK_IMPORTED_MODULE_3__discover_service__["a" /* DiscoverService */]));
//# sourceMappingURL=/Users/tomasz/Development/mean/movie_finder/client/src/upcoming.service.js.map

/***/ },

/***/ 396:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 396;


/***/ },

/***/ 397:
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(516);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/tomasz/Development/mean/movie_finder/client/src/main.js.map

/***/ },

/***/ 514:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(217);
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
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(appRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
//# sourceMappingURL=/Users/tomasz/Development/mean/movie_finder/client/src/app-routing.module.js.map

/***/ },

/***/ 515:
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
            template: "\n    <header>\n      <div class=\"logo header-item\" [routerLink]=\"'/'\">MOVIEJO</div>\n      <nav class=\"header-item\">\n        <button class=\"nav-item\" *ngIf=\"!userLoggedIn\">\n          Login <i class=\"fa fa-user\" aria-hidden=\"true\"></i>\n        </button>\n        <button class=\"nav-item\" *ngIf=\"userLoggedIn\">\n          Logout <i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i>\n        </button>\n      </nav>\n    </header>\n    <router-outlet></router-outlet>\n  ",
            styles: [__webpack_require__(682)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/tomasz/Development/mean/movie_finder/client/src/app.component.js.map

/***/ },

/***/ 516:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__movies_movies_module__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__page_not_found_component__ = __webpack_require__(527);
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

/***/ 517:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_now_playing_service__ = __webpack_require__(339);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return NowPlayingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NowPlayingComponent = (function () {
    function NowPlayingComponent(nowPlayingService) {
        this.nowPlayingService = nowPlayingService;
    }
    NowPlayingComponent.prototype.ngOnInit = function () {
        this.getMovies();
    };
    NowPlayingComponent.prototype.getMovies = function () {
        var _this = this;
        this.nowPlayingService.getNowPlaying()
            .subscribe(function (movies) { return _this.movies = movies; }, function (error) { return _this.error = true; });
    };
    NowPlayingComponent.prototype.nextPage = function () {
        this.nowPlayingService.nextPage();
        this.getMovies();
    };
    NowPlayingComponent.prototype.previousPage = function () {
        this.nowPlayingService.previousPage();
        this.getMovies();
    };
    NowPlayingComponent.prototype.hasPrevious = function () {
        return this.nowPlayingService.hasPrevious();
    };
    NowPlayingComponent.prototype.hasNext = function () {
        return this.nowPlayingService.hasNext();
    };
    NowPlayingComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'now-playing',
            template: __webpack_require__(163),
            styles: [__webpack_require__(162)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_now_playing_service__["a" /* NowPlayingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_now_playing_service__["a" /* NowPlayingService */]) === 'function' && _a) || Object])
    ], NowPlayingComponent);
    return NowPlayingComponent;
    var _a;
}());
//# sourceMappingURL=/Users/tomasz/Development/mean/movie_finder/client/src/now-playing.component.js.map

/***/ },

/***/ 518:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_popular_service__ = __webpack_require__(340);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PopularComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PopularComponent = (function () {
    function PopularComponent(popularService) {
        this.popularService = popularService;
    }
    PopularComponent.prototype.ngOnInit = function () {
        this.getMovies();
    };
    PopularComponent.prototype.getMovies = function () {
        var _this = this;
        this.popularService.getPopular()
            .subscribe(function (movies) { return _this.movies = movies; }, function (error) { return _this.error = error; });
    };
    PopularComponent.prototype.nextPage = function () {
        this.popularService.nextPage();
        this.getMovies();
    };
    PopularComponent.prototype.previousPAge = function () {
        this.popularService.previousPage();
        this.getMovies();
    };
    PopularComponent.prototype.hasPrevious = function () {
        return this.popularService.hasPrevious();
    };
    PopularComponent.prototype.hasNext = function () {
        return this.popularService.hasNext();
    };
    PopularComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'popular',
            template: __webpack_require__(163),
            styles: [__webpack_require__(162)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_popular_service__["a" /* PopularService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_popular_service__["a" /* PopularService */]) === 'function' && _a) || Object])
    ], PopularComponent);
    return PopularComponent;
    var _a;
}());
//# sourceMappingURL=/Users/tomasz/Development/mean/movie_finder/client/src/popular.component.js.map

/***/ },

/***/ 519:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_top_rated_service__ = __webpack_require__(342);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TopRatedComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TopRatedComponent = (function () {
    function TopRatedComponent(topRatedService) {
        this.topRatedService = topRatedService;
    }
    TopRatedComponent.prototype.ngOnInit = function () {
        this.getMovies();
    };
    TopRatedComponent.prototype.getMovies = function () {
        var _this = this;
        this.topRatedService.getTopRated()
            .subscribe(function (movies) { return _this.movies = movies; }, function (error) { return _this.error = true; });
    };
    TopRatedComponent.prototype.nextPage = function () {
        this.topRatedService.nextPage();
        this.getMovies();
    };
    TopRatedComponent.prototype.previousPage = function () {
        this.topRatedService.previousPage();
        this.getMovies();
    };
    TopRatedComponent.prototype.hasPrevious = function () {
        return this.topRatedService.hasPrevious();
    };
    TopRatedComponent.prototype.hasNext = function () {
        return this.topRatedService.hasNext();
    };
    TopRatedComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'top-rated',
            template: __webpack_require__(163),
            styles: [__webpack_require__(162)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_top_rated_service__["a" /* TopRatedService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_top_rated_service__["a" /* TopRatedService */]) === 'function' && _a) || Object])
    ], TopRatedComponent);
    return TopRatedComponent;
    var _a;
}());
//# sourceMappingURL=/Users/tomasz/Development/mean/movie_finder/client/src/top-rated.component.js.map

/***/ },

/***/ 520:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_upcoming_service__ = __webpack_require__(343);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return UpcomingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UpcomingComponent = (function () {
    function UpcomingComponent(upcomingService) {
        this.upcomingService = upcomingService;
    }
    UpcomingComponent.prototype.ngOnInit = function () {
        this.getMovies();
    };
    UpcomingComponent.prototype.getMovies = function () {
        var _this = this;
        this.upcomingService.getUpcoming()
            .subscribe(function (movies) { return _this.movies = movies; }, function (error) { return _this.error = true; });
    };
    UpcomingComponent.prototype.nextPage = function () {
        this.upcomingService.nextPage();
        this.getMovies();
    };
    UpcomingComponent.prototype.previousPage = function () {
        this.upcomingService.previousPage();
        this.getMovies();
    };
    UpcomingComponent.prototype.hasPrevious = function () {
        return this.upcomingService.hasPrevious();
    };
    UpcomingComponent.prototype.hasNext = function () {
        return this.upcomingService.hasNext();
    };
    UpcomingComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'upcoming',
            template: __webpack_require__(163),
            styles: [__webpack_require__(162)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_upcoming_service__["a" /* UpcomingService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_upcoming_service__["a" /* UpcomingService */]) === 'function' && _a) || Object])
    ], UpcomingComponent);
    return UpcomingComponent;
    var _a;
}());
//# sourceMappingURL=/Users/tomasz/Development/mean/movie_finder/client/src/upcoming.component.js.map

/***/ },

/***/ 521:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__movies_component__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__movie_details_movie_details_component__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__movies_search_movies_search_component__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__discover_discover_component__ = __webpack_require__(333);
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
    { path: 'movie/:id', component: __WEBPACK_IMPORTED_MODULE_3__movie_details_movie_details_component__["a" /* MovieDetailsComponent */] },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__movies_component__["a" /* MoviesComponent */],
        children: [
            { path: 'movies', component: __WEBPACK_IMPORTED_MODULE_5__discover_discover_component__["a" /* DiscoverComponent */] },
            { path: 'search', component: __WEBPACK_IMPORTED_MODULE_4__movies_search_movies_search_component__["a" /* MoviesSearchComponent */] },
            { path: '', redirectTo: 'movies', pathMatch: 'full' }
        ]
    }
];
var MoviesRoutingModule = (function () {
    function MoviesRoutingModule() {
    }
    MoviesRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(moviesRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        }), 
        __metadata('design:paramtypes', [])
    ], MoviesRoutingModule);
    return MoviesRoutingModule;
}());
//# sourceMappingURL=/Users/tomasz/Development/mean/movie_finder/client/src/movies-routing.module.js.map

/***/ },

/***/ 522:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SearchResultsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchResultsComponent = (function () {
    function SearchResultsComponent() {
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', Array)
    ], SearchResultsComponent.prototype, "movies", void 0);
    SearchResultsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Component */])({
            selector: 'movies-search-result',
            template: __webpack_require__(691),
            styles: [__webpack_require__(686)]
        }), 
        __metadata('design:paramtypes', [])
    ], SearchResultsComponent);
    return SearchResultsComponent;
}());
//# sourceMappingURL=/Users/tomasz/Development/mean/movie_finder/client/src/search-results.component.js.map

/***/ },

/***/ 523:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__movies_routing_module__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__movies_component__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__discover_discover_component__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__discover_now_playing_component__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__discover_popular_component__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__discover_top_rated_component__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__discover_upcoming_component__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__movies_search_movies_search_component__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__movies_search_search_results_component__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__movie_details_movie_details_component__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_popular_service__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_now_playing_service__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_top_rated_service__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_upcoming_service__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_search_movies_service__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_movie_details_service__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pipes_movie_title_short_pipe__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pipes_safe_url_pipe__ = __webpack_require__(525);
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
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__movies_routing_module__["a" /* MoviesRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__movies_component__["a" /* MoviesComponent */],
                __WEBPACK_IMPORTED_MODULE_6__discover_discover_component__["a" /* DiscoverComponent */],
                __WEBPACK_IMPORTED_MODULE_7__discover_now_playing_component__["a" /* NowPlayingComponent */],
                __WEBPACK_IMPORTED_MODULE_8__discover_popular_component__["a" /* PopularComponent */],
                __WEBPACK_IMPORTED_MODULE_9__discover_top_rated_component__["a" /* TopRatedComponent */],
                __WEBPACK_IMPORTED_MODULE_10__discover_upcoming_component__["a" /* UpcomingComponent */],
                __WEBPACK_IMPORTED_MODULE_11__movies_search_movies_search_component__["a" /* MoviesSearchComponent */],
                __WEBPACK_IMPORTED_MODULE_12__movies_search_search_results_component__["a" /* SearchResultsComponent */],
                __WEBPACK_IMPORTED_MODULE_13__movie_details_movie_details_component__["a" /* MovieDetailsComponent */],
                // Pipes
                __WEBPACK_IMPORTED_MODULE_20__pipes_movie_title_short_pipe__["a" /* MovieTitleShortPipe */],
                __WEBPACK_IMPORTED_MODULE_21__pipes_safe_url_pipe__["a" /* SafeUrlPipe */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_14__services_popular_service__["a" /* PopularService */],
                __WEBPACK_IMPORTED_MODULE_15__services_now_playing_service__["a" /* NowPlayingService */],
                __WEBPACK_IMPORTED_MODULE_16__services_top_rated_service__["a" /* TopRatedService */],
                __WEBPACK_IMPORTED_MODULE_17__services_upcoming_service__["a" /* UpcomingService */],
                __WEBPACK_IMPORTED_MODULE_18__services_search_movies_service__["a" /* SearchMoviesService */],
                __WEBPACK_IMPORTED_MODULE_19__services_movie_details_service__["a" /* MovieDetailsService */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* Location */],
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], MoviesModule);
    return MoviesModule;
}());
//# sourceMappingURL=/Users/tomasz/Development/mean/movie_finder/client/src/movies.module.js.map

/***/ },

/***/ 524:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MovieTitleShortPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MovieTitleShortPipe = (function () {
    function MovieTitleShortPipe() {
    }
    MovieTitleShortPipe.prototype.transform = function (title, titleLength) {
        if (title.length > +titleLength) {
            title = title.slice(0, +titleLength - 3) + '...';
        }
        return title;
    };
    MovieTitleShortPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Pipe */])({ name: 'movieTitleShort' }), 
        __metadata('design:paramtypes', [])
    ], MovieTitleShortPipe);
    return MovieTitleShortPipe;
}());
//# sourceMappingURL=/Users/tomasz/Development/mean/movie_finder/client/src/movie-title-short.pipe.js.map

/***/ },

/***/ 525:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(106);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SafeUrlPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafeUrlPipe = (function () {
    function SafeUrlPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafeUrlPipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustUrl(url);
    };
    SafeUrlPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Pipe */])({ name: 'safeUrl' }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]) === 'function' && _a) || Object])
    ], SafeUrlPipe);
    return SafeUrlPipe;
    var _a;
}());
//# sourceMappingURL=/Users/tomasz/Development/mean/movie_finder/client/src/safe-url.pipe.js.map

/***/ },

/***/ 526:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TMDBService; });


var TMDBService = (function () {
    function TMDBService() {
    }
    TMDBService.prototype.extractPosterUrl = function (movies) {
        movies.map(function (movie) {
            if (movie.poster_path) {
                movie.poster_path = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
            }
            else {
                movie.poster_path = '';
            }
        });
    };
    TMDBService.prototype.handleError = function (error) {
        var errorMessage = this.extractErrorMessage(error);
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(errorMessage);
    };
    TMDBService.prototype.extractErrorMessage = function (error) {
        var errorMessage;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errorMessage = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errorMessage = error.message ? error.message : error.toString();
        }
        return errorMessage;
    };
    return TMDBService;
}());
//# sourceMappingURL=/Users/tomasz/Development/mean/movie_finder/client/src/tmdb.service.js.map

/***/ },

/***/ 527:
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
            styles: [__webpack_require__(688)]
        }), 
        __metadata('design:paramtypes', [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());
//# sourceMappingURL=/Users/tomasz/Development/mean/movie_finder/client/src/page-not-found.component.js.map

/***/ },

/***/ 528:
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

/***/ 529:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(537);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(711);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/Users/tomasz/Development/mean/movie_finder/client/src/polyfills.js.map

/***/ },

/***/ 682:
/***/ function(module, exports) {

module.exports = "header {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 65px;\n  background-color: #FBFFFD;\n  color: #577F6D; }\n  header .header-item {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    font-weight: 900; }\n  header .logo {\n    font-size: 1.75em;\n    font-weight: 600;\n    letter-spacing: .25em;\n    padding-left: 25px;\n    -webkit-transition: 0.5s;\n    transition: 0.5s; }\n    header .logo:hover {\n      cursor: pointer;\n      color: #FE5E4A; }\n  header nav {\n    text-align: right;\n    padding-right: 25px; }\n    header nav button {\n      width: 130px;\n      padding: 12.5px 7.5px 12.5px 12.5px;\n      background-color: #577F6D;\n      border: none;\n      font-weight: 400;\n      color: #FFFBFB;\n      letter-spacing: .15em;\n      text-transform: uppercase;\n      border-radius: 2px;\n      box-shadow: 0px 1.5px 2px 1px #7D7F7F;\n      -webkit-transition: 0.5s;\n      transition: 0.5s; }\n      header nav button:hover {\n        cursor: not-allowed;\n        opacity: 0.75; }\n    header nav i {\n      margin-left: 2.5px; }\n"

/***/ },

/***/ 683:
/***/ function(module, exports) {

module.exports = ".select-category {\n  padding: 15px 25px 15px 25px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: reverse;\n      -ms-flex-direction: row-reverse;\n          flex-direction: row-reverse; }\n  .select-category .select-wrapper {\n    width: 180px;\n    background-color: #577F6D;\n    height: 40px;\n    padding: 3.5px 5px 0 2.5px;\n    box-shadow: 0px 1.5px 2px 1px #7D7F7F;\n    border-radius: 2.5px; }\n    .select-category .select-wrapper select {\n      border: none;\n      background-color: inherit;\n      width: 180px;\n      height: 100%;\n      color: #FFFBFB;\n      letter-spacing: 0.05em;\n      text-transform: uppercase; }\n      .select-category .select-wrapper select:focus {\n        outline: none; }\n"

/***/ },

/***/ 684:
/***/ function(module, exports) {

module.exports = ".row {\n  padding: 25px 22.5px 25px 22.5px;\n  border-top: 2px solid #C8CBCB; }\n\n.row1 {\n  margin: 25px 0 0 0; }\n\n.movie-overview {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  overflow: hidden; }\n  .movie-overview .col1 {\n    padding-top: 2.5px;\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 67.5%;\n            flex: 0 0 67.5%; }\n    .movie-overview .col1 .title-rating-wrapper {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      font-size: 2.25em;\n      letter-spacing: .05em;\n      padding-bottom: 7.5px;\n      border-bottom: 1px solid #B4CBCB; }\n      .movie-overview .col1 .title-rating-wrapper .trw-item {\n        -webkit-box-flex: 0;\n            -ms-flex: 0 0 50%;\n                flex: 0 0 50%; }\n      .movie-overview .col1 .title-rating-wrapper .title {\n        color: #577F6D;\n        text-transform: uppercase; }\n      .movie-overview .col1 .title-rating-wrapper .rating {\n        text-align: right; }\n        .movie-overview .col1 .title-rating-wrapper .rating span {\n          text-align: center;\n          display: inline-block;\n          border-radius: 2.5px;\n          background-color: #FE5E4A;\n          padding: 2.5px 3.5px 2.5px 3.5px;\n          width: 75px;\n          color: #FFFBFB; }\n    .movie-overview .col1 .vote-count-release-date-wrapper {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      margin-top: 10px;\n      font-size: 1.15em;\n      letter-spacing: 0.05em; }\n      .movie-overview .col1 .vote-count-release-date-wrapper .vcrdw {\n        -webkit-box-flex: 0;\n            -ms-flex: 0 0 50%;\n                flex: 0 0 50%; }\n        .movie-overview .col1 .vote-count-release-date-wrapper .vcrdw span {\n          font-weight: 600; }\n      .movie-overview .col1 .vote-count-release-date-wrapper .vote-count {\n        text-align: right; }\n    .movie-overview .col1 .genres {\n      margin-top: 10px; }\n      .movie-overview .col1 .genres span {\n        display: inline-block;\n        padding: 5px;\n        margin-right: 5px;\n        background-color: #577F6D;\n        color: #FFFBFB;\n        width: 75px;\n        text-transform: uppercase;\n        font-weight: 500;\n        font-size: .75em;\n        text-align: center;\n        border-radius: 2.5px; }\n    .movie-overview .col1 .overview {\n      margin-top: 40px; }\n      .movie-overview .col1 .overview h2 {\n        font-size: 1.5em;\n        font-weight: 600;\n        letter-spacing: 0.1em; }\n      .movie-overview .col1 .overview .overview-text {\n        line-height: 1.5em;\n        font-size: 1.25em;\n        letter-spacing: 0.1em; }\n  .movie-overview .col2 {\n    text-align: right;\n    -webkit-box-flex: 0;\n        -ms-flex: 0 0 32.5%;\n            flex: 0 0 32.5%; }\n    .movie-overview .col2 .poster-holder {\n      padding: 5px 5px 0 0; }\n      .movie-overview .col2 .poster-holder img {\n        width: 271px;\n        height: 407px;\n        border-radius: 2.5px;\n        box-shadow: 0px 0px 2px 3px #FE5E4A; }\n    .movie-overview .col2 .not-available {\n      padding: 5px 5px 0 0;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: end;\n          -ms-flex-pack: end;\n              justify-content: flex-end; }\n      .movie-overview .col2 .not-available .poster-not-available {\n        margin-bottom: 5px;\n        width: 271px;\n        height: 407px;\n        border-radius: 2.5px;\n        box-shadow: 0px 0px 2px 3px #FE5E4A;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-pack: center;\n            -ms-flex-pack: center;\n                justify-content: center;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center; }\n        .movie-overview .col2 .not-available .poster-not-available i {\n          font-size: 7em;\n          color: #FE5E4A; }\n\n.row2 {\n  padding: 5px 25px 25px 22.5px;\n  border-top: 1px solid #B4CBCB; }\n  .row2 h2 {\n    line-height: 1.5em;\n    font-size: 1.5em;\n    letter-spacing: 0.1em;\n    margin-top: 0; }\n  .row2 .similar-movies {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between; }\n    .row2 .similar-movies .movie-template {\n      -webkit-box-flex: 0;\n          -ms-flex: 0 0 135px;\n              flex: 0 0 135px;\n      padding: 2.5px;\n      margin-bottom: 10px;\n      border-radius: 2.5px;\n      background-color: #577F6D;\n      box-shadow: 0px 0px 2px 2px #FE5E4A;\n      -webkit-transition: 0.5s;\n      transition: 0.5s; }\n      .row2 .similar-movies .movie-template:hover {\n        cursor: pointer;\n        box-shadow: 0px 0px 2px 3px #FE5E4A;\n        -webkit-transform: scale(1.05);\n                transform: scale(1.05); }\n      .row2 .similar-movies .movie-template .movie-poster {\n        position: relative; }\n        .row2 .similar-movies .movie-template .movie-poster img {\n          width: 135px;\n          height: 202px;\n          border-radius: 2.5px; }\n        .row2 .similar-movies .movie-template .movie-poster .rating {\n          position: absolute;\n          right: 1%;\n          top: 1%;\n          display: inline-block;\n          background-color: #FE5E4A;\n          border-radius: 2.5px;\n          text-align: center;\n          width: 25px;\n          color: #FFFBFB;\n          padding: 2.5px;\n          font-size: .85em;\n          font-weight: 600;\n          letter-spacing: 0.05em; }\n      .row2 .similar-movies .movie-template .movie-title {\n        color: #FFFBFB;\n        text-transform: uppercase;\n        text-align: center;\n        overflow: hidden; }\n"

/***/ },

/***/ 685:
/***/ function(module, exports) {

module.exports = ".movie-search {\n  margin-top: 25px;\n  padding: 0 25px 0 25px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  height: 75px; }\n  .movie-search .search-input {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    height: 30px;\n    width: 225px;\n    padding: 10px 10px 10px 15px;\n    border-radius: 2.5px;\n    box-shadow: 0px 0px 2px 1px #7D7F7F;\n    -webkit-transition: 0.5s;\n    transition: 0.5s; }\n    .movie-search .search-input:hover {\n      box-shadow: 0px 0px 2px 3px #577F6D;\n      width: 325px; }\n    .movie-search .search-input input[type=\"text\"] {\n      border: none;\n      width: 75%; }\n      .movie-search .search-input input[type=\"text\"]:focus {\n        outline: none; }\n    .movie-search .search-input button {\n      border: none;\n      background-color: inherit;\n      color: #FE5E4A; }\n      .movie-search .search-input button:hover {\n        cursor: pointer; }\n      .movie-search .search-input button:focus {\n        outline: none; }\n      .movie-search .search-input button:disabled {\n        color: #7D7F7F;\n        cursor: not-allowed; }\n    .movie-search .search-input i {\n      -ms-flex-item-align: center;\n          -ms-grid-row-align: center;\n          align-self: center;\n      font-size: 1.25em; }\n  .movie-search .error {\n    width: 100%;\n    padding: 10px 0 0 0;\n    color: red;\n    text-transform: uppercase;\n    font-weight: 600;\n    text-align: right;\n    font-size: .75em; }\n  .movie-search .active {\n    box-shadow: 0px 0px 2px 3px #577F6D;\n    width: 325px; }\n  .movie-search .active-not-valid {\n    box-shadow: 0px 0px 2px 3px #FE5E4A !important;\n    width: 325px; }\n\n.search-results-fail {\n  text-align: center;\n  margin: 35px 0 35px 0; }\n  .search-results-fail h2 {\n    font-size: 2em;\n    color: #577F6D;\n    text-transform: uppercase;\n    letter-spacing: 0.05em; }\n  .search-results-fail .error {\n    font-size: 7em;\n    color: #661B11; }\n\n.search-instructions {\n  padding: 15px 0 0 0;\n  font-size: 1.8em;\n  text-transform: uppercase;\n  color: #577F6D;\n  text-align: center;\n  letter-spacing: .05em;\n  line-height: 1.5em; }\n\n.search-results {\n  padding-left: 25px;\n  padding-right: 25px; }\n  .search-results .search-query {\n    padding: 0 0 5px 0;\n    margin-bottom: 25px;\n    font-size: 1.15em;\n    letter-spacing: 0.10em;\n    color: #577F6D;\n    text-transform: uppercase;\n    border-bottom: 1px solid #7D7F7F; }\n    .search-results .search-query span {\n      font-size: 1.2em; }\n"

/***/ },

/***/ 686:
/***/ function(module, exports) {

module.exports = ".search-results {\n  padding-left: 25px;\n  padding-right: 25px; }\n  .search-results .header {\n    color: #577F6D;\n    font-size: 1.25em;\n    font-weight: 500;\n    border-bottom: 2px solid #7D7F7F;\n    padding-bottom: 5px;\n    letter-spacing: .10em; }\n    .search-results .header span {\n      font-weight: 900; }\n  .search-results .movies {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -ms-flex-pack: distribute;\n        justify-content: space-around; }\n    .search-results .movies .movie-details {\n      -ms-flex-preferred-size: 200px;\n          flex-basis: 200px;\n      -ms-flex-negative: 0;\n          flex-shrink: 0;\n      -webkit-box-flex: 0;\n          -ms-flex-positive: 0;\n              flex-grow: 0;\n      margin-bottom: 25px;\n      background-color: #577F6D;\n      color: #FFFBFB;\n      border-radius: 2px;\n      box-shadow: 0px 1.5px 2px 1px #7D7F7F;\n      overflow: hidden;\n      padding: 2.5px;\n      height: 396px;\n      -webkit-transition: 0.5s;\n      transition: 0.5s; }\n      .search-results .movies .movie-details:hover {\n        cursor: pointer;\n        box-shadow: 0px 0px 2px 3px #FE5E4A;\n        -webkit-transform: scale(1.05);\n                transform: scale(1.05); }\n      .search-results .movies .movie-details .poster {\n        position: relative; }\n        .search-results .movies .movie-details .poster .vote-average {\n          position: absolute;\n          top: 1.5%;\n          right: 2.5%;\n          text-align: right; }\n          .search-results .movies .movie-details .poster .vote-average span {\n            display: inline-block;\n            border-radius: 2.5px;\n            background-color: #FE5E4A;\n            padding: 2.5px 3.5px 2.5px 3.5px;\n            width: 55px;\n            text-align: center; }\n            .search-results .movies .movie-details .poster .vote-average span i {\n              padding-left: 2.5px; }\n        .search-results .movies .movie-details .poster img {\n          width: 200px;\n          height: 300px;\n          border-radius: 2.5px; }\n        .search-results .movies .movie-details .poster .no-poster {\n          border: 1px solid red;\n          width: 195px;\n          height: 300px;\n          margin-bottom: 2.5px;\n          border-radius: 2.5px;\n          border: 2px solid #FE5E4A;\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-pack: center;\n              -ms-flex-pack: center;\n                  justify-content: center;\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center; }\n          .search-results .movies .movie-details .poster .no-poster i {\n            font-size: 6em;\n            color: #FE5E4A; }\n      .search-results .movies .movie-details .movie-info .title {\n        text-transform: uppercase;\n        border-bottom: 1px solid #FE5E4A;\n        font-size: 1em;\n        font-weight: 600;\n        padding: 0 5px 2.5px 5px; }\n      .search-results .movies .movie-details .movie-info .release-date {\n        margin: 7.5px 2.5px 7.5px 2.5px;\n        font-size: .90em; }\n        .search-results .movies .movie-details .movie-info .release-date span {\n          font-weight: 900;\n          font-size: 1em;\n          text-decoration: underline;\n          letter-spacing: 0.1em; }\n      .search-results .movies .movie-details .footer {\n        background-color: #FFFBFB;\n        color: #577F6D;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex; }\n        .search-results .movies .movie-details .footer .footer-item {\n          margin: 10px;\n          -webkit-transition: 0.5s;\n          transition: 0.5s; }\n          .search-results .movies .movie-details .footer .footer-item:hover {\n            cursor: pointer;\n            color: #FE5E4A;\n            -webkit-transform: scale(1.25);\n                    transform: scale(1.25); }\n"

/***/ },

/***/ 687:
/***/ function(module, exports) {

module.exports = "nav {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin: 15px 0 0 0;\n  padding: 7.5px 25px 7.5px 25px;\n  border-bottom: 1px solid #B4CBCB;\n  border-top: 1px solid #B4CBCB; }\n  nav .active {\n    color: #6376D6;\n    box-shadow: 0px 0px 1px 2px #6376D6; }\n  nav a {\n    text-decoration: none;\n    -ms-flex-preferred-size: 140px;\n        flex-basis: 140px;\n    padding: 12.5px 7.5px 12.5px 12.5px;\n    margin-right: 10px;\n    text-align: center;\n    border-radius: 2px;\n    letter-spacing: .15em;\n    font-weight: 400;\n    text-transform: uppercase;\n    color: #577F6D;\n    -webkit-transition: 0.5s;\n    transition: 0.5s;\n    box-shadow: 0px 0px 1px 1px #7D7F7F; }\n    nav a:hover {\n      color: #6376D6;\n      box-shadow: 0px 0px 1px 2px #6376D6; }\n    nav a i {\n      margin-left: 2.5px; }\n"

/***/ },

/***/ 688:
/***/ function(module, exports) {

module.exports = "div {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-top: 25px; }\n  div h2 {\n    text-align: center;\n    text-transform: uppercase;\n    color: #577F6D;\n    letter-spacing: .15em;\n    line-height: 1.5em;\n    font-size: 2em; }\n  div .exclamation-triangle {\n    text-align: center;\n    font-size: 8em;\n    color: #661B11; }\n  div .back {\n    text-align: right;\n    padding-right: 25px;\n    -ms-flex-item-align: end;\n        align-self: flex-end; }\n    div .back button {\n      display: inline-block;\n      width: 130px;\n      border: 1px solid #577F6D;\n      border-radius: 2px;\n      padding: 12.5px 7.5px 12.5px 12.5px;\n      font-weight: 400;\n      background-color: #FBFFFD;\n      color: #577F6D;\n      text-transform: uppercase;\n      letter-spacing: .15em;\n      -webkit-transition: 0.5s;\n      transition: 0.5s; }\n      div .back button:hover {\n        opacity: 0.75;\n        box-shadow: 0px 0px 2px 1px #7D7F7F;\n        cursor: pointer; }\n    div .back i {\n      margin-left: 2.5px; }\n"

/***/ },

/***/ 689:
/***/ function(module, exports) {

module.exports = "<button type=\"button\" (click)=\"goBack()\">Go Back</button><br />\n\n<div class=\"row row1\">\n  <div class=\"movie-overview\">\n\n    <div class=\"col col1\">\n      <div class=\"title-rating-wrapper\">\n        <div class=\"title trw-item\">\n          {{movie?.title}}\n        </div>\n        <div class=\"rating trw-item\">\n          <span>{{movie?.vote_average}}</span>\n        </div>\n      </div>\n      <div class=\"vote-count-release-date-wrapper\">\n        <div class=\"release-date vcrdw\">\n          Release Date: <span>{{movie?.release_date}}</span>\n        </div>\n        <div class=\"vote-count vcrdw\">\n          Vote Count: <span>{{movie?.vote_count}}</span>\n        </div>\n      </div>\n      <div class=\"genres\" *ngIf=\"movie?.genres\">\n        <span class=\"genre-name\" *ngFor=\"let genre of movie.genres\">\n          {{genre.name | movieTitleShort: 10}}\n        </span>\n      </div>\n      <div class=\"overview\">\n        <h2>Overview</h2>\n        <div class=\"overview-text\">{{movie?.overview}}</div>\n      </div>\n    </div>\n\n    <div class=\"col col2\">\n      <div class=\"poster-holder\" *ngIf=\"movie?.poster_path\">\n        <img [src]=\"movie.poster_path | safeUrl\" \n          alt=\"image poster\" />\n      </div>\n      <div class=\"poster-holder not-available\" *ngIf=\"!movie?.poster_path\">\n        <div class=\"poster-not-available\">\n          <i class=\"fa fa-film\" aria-hidden=\"true\"></i>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"row row2\" *ngIf=\"movie?.similar\">\n  <h2>Similar Movies</h2>\n  <div class=\"similar-movies\">\n    <div class=\"movie-template\" *ngFor=\"let similar of movie.similar\" [routerLink]=\"['/movie', similar.id]\">\n      <div class=\"movie-poster\">\n        <img src=\"https://image.tmdb.org/t/p/w500{{similar.poster_path}}\" \n          alt=\"movie poster\" />\n        <div class=\"rating\">{{similar.vote_average}}</div>\n      </div>\n      <div class=\"movie-title\">\n        {{similar.title | movieTitleShort: 15 }}\n      </div>\n    </div>\n  </div>\n</div>\n\n<!--<div class=\"col\" *ngIf=\"movie?.trailer\">\n  <h1>Yay! Trailer!</h1>\n  {{movie.trailer | safeUrl}}\n  <iframe width=\"640\" height=\"360\" [src]=\"movie.trailer | safeUrl\" frameborder=\"0\" allowfullscreen></iframe>\n</div>-->"

/***/ },

/***/ 690:
/***/ function(module, exports) {

module.exports = "<div class=\"movie-search\">\n  <form>\n    <div class=\"search-input\" [class.active]=\"query.touched || query.dirty\"\n      [class.active-not-valid]=\"query.invalid && query.dirty\">\n      <input type=\"text\"\n        [(ngModel)]=\"search.title\" #query=\"ngModel\"\n        name=\"title\" placeholder=\"Search for a title...\" required />\n      <button type=\"button\" (click)=\"searchFor(search.title)\" \n        [disabled]=\"!query.valid || query.prestine\">\n        <i class=\"fa fa-search input-item\" aria-hidden=\"true\"></i>\n      </button>\n    </div>\n    <div class=\"error\" [hidden]=\"query.valid || query.pristine\">\n      Missing movie title!\n    </div>\n  </form>\n</div>\n\n<div *ngIf=\"!movies && !error\" class=\"search-instructions\">\n  Search for a movie by typing <br /> the title in the search box\n</div>\n\n<div *ngIf=\"movies\" class=\"search-results\">\n  <div class=\"search-query\">\n    Showing results for <span>{{this.search.title}}</span>...\n  </div>\n  <movies-search-result [movies]=\"movies\"></movies-search-result>\n</div>\n\n<div class=\"search-results-fail\" *ngIf=\"error\">\n  <h2>Looks like something went wrong. <br />Please try again.</h2>\n  <div class=\"error\">\n    <i class=\"fa fa-meh-o\" aria-hidden=\"true\"></i>\n  </div>\n</div>\n\n\n"

/***/ },

/***/ 691:
/***/ function(module, exports) {

module.exports = "<div class=\"search-results\">\n  <div class=\"movies\">\n    <div class=\"movie-details\" *ngFor=\"let movie of movies\" [routerLink]=\"['/movie', movie.id]\">\n      <div class=\"poster\">\n        <div *ngIf=\"movie.poster_path\">\n          <img src=\"https://image.tmdb.org/t/p/w500{{movie.poster_path}}\" alt=\"movie poster\" />\n        </div>\n        <div *ngIf=\"!movie.poster_path\" class=\"no-poster\">\n          <i class=\"fa fa-film\" aria-hidden=\"true\"></i>\n        </div>\n        <div class=\"vote-average\">\n          <span>{{movie.vote_average}} <i class=\"fa fa-star-o\" aria-hidden=\"true\"></i></span>\n        </div>\n      </div>\n      <div class=\"movie-info\">\n        <div class=\"title\">{{movie.title | movieTitleShort: 19}}</div>\n        <div class=\"release-date\">\n          Release Date: \n          <span *ngIf=\"movie.release_date\">{{movie.release_date}}</span>\n          <span *ngIf=\"!movie.release_date\">N/A</span>\n        </div>\n      </div>\n      <div class=\"footer\">\n        <div class=\"like footer-item\">\n          <i class=\"fa fa-heart\" aria-hidden=\"true\"></i>\n        </div>\n        <div class=\"bookmark footer-item\">\n          <i class=\"fa fa-bookmark\" aria-hidden=\"true\"></i>\n        </div>        \n      </div>\n    </div>\n  </div>\n</div>"

/***/ },

/***/ 712:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(397);


/***/ },

/***/ 80:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return API; });
var API = {
    url: 'https://api.themoviedb.org/3',
    key: 'api_key=03eb2b84d82f7dbdb50c3106fb6c2de3'
};
//# sourceMappingURL=/Users/tomasz/Development/mean/movie_finder/client/src/moviedb-api-info.js.map

/***/ }

},[712]);
//# sourceMappingURL=main.bundle.map