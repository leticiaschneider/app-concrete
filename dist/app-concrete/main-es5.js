(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"Home\">\n  <router-outlet></router-outlet>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/result/result.component.html": 
        /*!************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/result/result.component.html ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n    <div class=\"alinhar\">\n        <div class=\"Github-Search\">\n            <b>Github</b>\n            <span class=\"text-style-1\"> Search</span>\n        </div>\n    \n        <div class=\"input\">\n            <form (submit)=\"searchSubmit()\">\n                <div class=\"alinhar\">\n                    <input type=\"text\" class=\"Search-Input search-text\" name=\"userLogin\" [(ngModel)]=\"userLogin\">\n                    <button type=\"submit\" class=\"search-button\">\n                        <img src=\"./assets/img/search-icon.svg\" class=\"Search-Icon\">\n                    </button>\n                </div>\n            </form>\n        </div>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div *ngIf=\"!error\">\n        <div class=\"left-side\">\n            <img class=\"user-avatar\" src=\"{{user.avatar_url}}\" alt=\"\" srcset=\"\">\n\n            <h1 class=\"user-name\" *ngIf=\"user.name\">\n                {{user.name}}\n            </h1>\n\n            <h2 class=\"user-login\" *ngIf=\"user.login\">\n                {{user.login}}\n            </h2>\n            <div class=\"details\">\n                <div class=\"detail\" *ngIf=\"user.company\">\n                    <img src=\"./assets/img/organization icon.svg\" class=\"details-icon\">\n                    <span class=\"details-name\">{{user.company}}</span>\n                </div>\n                <div class=\"detail\" *ngIf=\"user.location\">\n                    <img src=\"./assets/img/location icon.svg\" class=\"details-icon\">\n                    <span class=\"details-name\">{{user.location}}</span>\n                </div>\n\n                <div class=\"detail\">\n                    <img src=\"./assets/img/star icon.svg\" class=\"details-icon\">\n                    <span class=\"details-name\">{{totalStars}}</span>\n                </div>\n\n                <div class=\"detail\">\n                    <img src=\"./assets/img/repositorie icon.svg\" class=\"details-icon\">\n                    <span class=\"details-name\">{{user.public_repos}}</span>\n                </div>\n\n                <div class=\"detail\">\n                    <img src=\"./assets/img/followers icon.svg\" class=\"details-icon\">\n                    <span class=\"details-name\">{{user.followers}}</span>\n                    <span class=\"details-name\">{{user.following}}</span>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"right-side\">\n            <div class=\"repo\" *ngFor=\"let repo of repos\">\n                <div>\n                    <h1 class=\"repo-name\" *ngIf=\"repo?.name\">\n                        {{repo?.name}}\n                    </h1>\n                    <h2 class=\"repo-description\" *ngIf=\"repo?.description\">\n                        {{repo?.description}}\n                    </h2>\n\n                    <div class=\"star\" *ngIf=\"repo?.stargazers_count\">\n                        <img src=\"./assets/img/star icon.svg\" class=\"star-icon\">\n                        <span class=\"star-count\">{{repo?.stargazers_count}}</span>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"div-error\" *ngIf=\"error\">\n        <span class=\"Not-found-message\">User not fount :(</span>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.component.html": 
        /*!************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.component.html ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"center\">\r\n    <div class=\"relative\">\r\n        <div class=\"Github-Search\">\r\n            <b>Github</b>\r\n            <span class=\"text-style-1\"> Search</span>\r\n        </div>\r\n        <form (submit)=\"searchSubmit()\">\r\n            <div class=\"alinhar\">\r\n                <input type=\"text\" class=\"Search-Input search-text\" name=\"userLogin\" [(ngModel)]=\"userLogin\">\r\n                <button type=\"submit\" class=\"search-button\">\r\n                    <img src=\"./assets/img/search-icon.svg\" class=\"Search-Icon\">\r\n                </button>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var routes = [];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.api.ts": 
        /*!****************************!*\
          !*** ./src/app/app.api.ts ***!
          \****************************/
        /*! exports provided: USER_API */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_API", function () { return USER_API; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var USER_API = 'https://api.github.com/users';
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".Home {\r\n    height: 700px;\r\n    background-color: var(--white);\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0VBQ2hDIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuSG9tZSB7XHJcbiAgICBoZWlnaHQ6IDcwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gIH1cclxuICAiXX0= */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'app-concrete';
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'con-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
            /* harmony import */ var _result_result_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./result/result.component */ "./src/app/result/result.component.ts");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                        _search_search_component__WEBPACK_IMPORTED_MODULE_5__["SearchComponent"],
                        _result_result_component__WEBPACK_IMPORTED_MODULE_6__["ResultComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["BrowserModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_2__["ROUTES"]),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"]
                    ],
                    providers: [],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/app.routes.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.routes.ts ***!
          \*******************************/
        /*! exports provided: ROUTES */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function () { return ROUTES; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
            /* harmony import */ var _result_result_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./result/result.component */ "./src/app/result/result.component.ts");
            var ROUTES = [
                { path: '', component: _search_search_component__WEBPACK_IMPORTED_MODULE_1__["SearchComponent"] },
                { path: 'result', component: _result_result_component__WEBPACK_IMPORTED_MODULE_2__["ResultComponent"] }
            ];
            /***/ 
        }),
        /***/ "./src/app/result/result.component.css": 
        /*!*********************************************!*\
          !*** ./src/app/result/result.component.css ***!
          \*********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("@import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');\r\n\r\n.user-avatar {\r\n    width: 280px;\r\n    height: 280px;\r\n    border-radius: 2px;\r\n    box-shadow: 0 0 4px NaNpx var(--black-40);\r\n  }\r\n\r\n.user-name {\r\n    width: 280px;\r\n    height: 40px;\r\n    font-family: Raleway;\r\n    font-size: 25px;\r\n    font-weight: 300;\r\n    font-stretch: normal;\r\n    font-style: normal;\r\n    line-height: normal;\r\n    letter-spacing: normal;\r\n    color: #000000;\r\n  }\r\n\r\n.user-login {\r\n    width: 280px;\r\n    height: 25px;\r\n    font-family: Raleway;\r\n    font-size: 20px;\r\n    font-weight: 300;\r\n    font-stretch: normal;\r\n    font-style: normal;\r\n    line-height: normal;\r\n    letter-spacing: normal;\r\n    color: #5c5c5c;\r\n    margin-top: -22px;\r\n  }\r\n\r\n.details-name {\r\n    width: 240px;\r\n    height: 22px;\r\n    font-family: Raleway;\r\n    font-size: 20px;\r\n    font-weight: 300;\r\n    font-stretch: normal;\r\n    font-style: normal;\r\n    line-height: normal;\r\n    letter-spacing: normal;\r\n    color: #5c5c5c;\r\n    margin-left: 7px;\r\n  }\r\n\r\n.detail {\r\n    margin: 0 0 15px 0;\r\n  }\r\n\r\n.detail:first-child { \r\n    margin-top: 28px;\r\n   }\r\n\r\n.alinhar {\r\n    display: flex;\r\n    margin: 20px 0 20px 0;\r\n  }\r\n\r\n.right-side {\r\n    display: inline-block;\r\n    margin: 0px 0 0 81px;\r\n\r\n  }\r\n\r\n.left-side {\r\n    margin-left: 28px;\r\n    float: left;\r\n  }\r\n\r\n.repo-name {\r\n    width: 375.5px;\r\n    height: 40.8px;\r\n    font-family: Raleway;\r\n    font-size: 35px;\r\n    font-weight: normal;\r\n    font-stretch: normal;\r\n    font-style: normal;\r\n    line-height: normal;\r\n    letter-spacing: normal;\r\n    color: #ac53f2;\r\n    display: unset;\r\n  }\r\n\r\n.repo-description {\r\n    width: 600px;\r\n    height: 25.5px;\r\n    font-family: Raleway;\r\n    font-size: 20px;\r\n    font-weight: 300;\r\n    font-stretch: normal;\r\n    font-style: normal;\r\n    line-height: normal;\r\n    letter-spacing: normal;\r\n    color: #000000;\r\n    margin: 0 0 27.2px 0;\r\n  }\r\n\r\n.star {\r\n    margin-top: 9.2px;\r\n  }\r\n\r\n.star-icon {\r\n    width: 25.5px;\r\n    height: 24.5px;\r\n  }\r\n\r\n.star-count {\r\n    width: 255.3px;\r\n    height: 22.4px;\r\n    font-family: Raleway;\r\n    font-size: 20px;\r\n    font-weight: 300;\r\n    font-stretch: normal;\r\n    font-style: normal;\r\n    line-height: normal;\r\n    letter-spacing: normal;\r\n    color: #5c5c5c;\r\n  }\r\n\r\n.Github-Search {\r\n    width: 280px;\r\n    height: 50px;\r\n    font-family: monospace;\r\n    font-size: 40px;\r\n    font-weight: normal;\r\n    font-stretch: normal;\r\n    font-style: normal;\r\n    line-height: normal;\r\n    letter-spacing: normal;\r\n    color: #000000;\r\n    margin: 35px 61px 0 25px;\r\n  }\r\n\r\n.Github-Search .text-style-1 {\r\n    font-family: Raleway;\r\n    font-weight: 200;\r\n    font-style: italic;\r\n  }\r\n\r\n.Search-Input {\r\n    width: 650px;\r\n    height: 50px;\r\n    background-color: var(--white);\r\n  }\r\n\r\n.search-text {\r\n    font-family: Raleway;\r\n    font-size: 20px;\r\n    font-weight: 300;\r\n    font-stretch: normal;\r\n    font-style: normal;\r\n    line-height: normal;\r\n    letter-spacing: normal;\r\n    color: #5c5c5c;\r\n    padding-left: 17px;\r\n  }\r\n\r\nbutton {\r\n    width: 100px;\r\n    height: 50px;\r\n    border-radius: 2px;\r\n    background-color: #ac53f2;\r\n  }\r\n\r\n.Search-Icon {\r\n    width: 30px;\r\n    height: 30.1px;\r\n    box-shadow: 0 0 4px NaNpx var(--black-40);\r\n    background-color: var(--white);\r\n  }\r\n\r\n.repo {\r\n    margin: 0 0 30px 0;\r\n  }\r\n\r\n.Not-found-message {\r\n    width: 315px;\r\n    height: 41px;\r\n    font-family: Raleway;\r\n    font-size: 40px;\r\n    font-weight: normal;\r\n    font-stretch: normal;\r\n    font-style: normal;\r\n    line-height: normal;\r\n    letter-spacing: normal;\r\n    color: #ac53f2;\r\n  }\r\n\r\n.input {\r\n    margin: 12px 0 0 23px;\r\n  }\r\n\r\n.div-error {\r\n    margin: 177px 419px 550px 418px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdWx0L3Jlc3VsdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJFQUEyRTs7QUFFM0U7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQix5Q0FBeUM7RUFDM0M7O0FBRUE7SUFDRSxZQUFZO0lBQ1osWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixjQUFjO0VBQ2hCOztBQUVBO0lBQ0UsWUFBWTtJQUNaLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsY0FBYztJQUNkLGlCQUFpQjtFQUNuQjs7QUFFQTtJQUNFLFlBQVk7SUFDWixZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGNBQWM7SUFDZCxnQkFBZ0I7RUFDbEI7O0FBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0FBRUE7SUFDRSxnQkFBZ0I7R0FDakI7O0FBRUQ7SUFDRSxhQUFhO0lBQ2IscUJBQXFCO0VBQ3ZCOztBQUdBO0lBQ0UscUJBQXFCO0lBQ3JCLG9CQUFvQjs7RUFFdEI7O0FBRUE7SUFDRSxpQkFBaUI7SUFDakIsV0FBVztFQUNiOztBQUVBO0lBQ0UsY0FBYztJQUNkLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsY0FBYztJQUNkLGNBQWM7RUFDaEI7O0FBRUE7SUFDRSxZQUFZO0lBQ1osY0FBYztJQUNkLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2Qsb0JBQW9CO0VBQ3RCOztBQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztBQUVBO0lBQ0UsYUFBYTtJQUNiLGNBQWM7RUFDaEI7O0FBRUE7SUFDRSxjQUFjO0lBQ2QsY0FBYztJQUNkLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixjQUFjO0VBQ2hCOztBQUVBO0lBQ0UsWUFBWTtJQUNaLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsY0FBYztJQUNkLHdCQUF3QjtFQUMxQjs7QUFFQTtJQUNFLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0VBQ3BCOztBQUVBO0lBQ0UsWUFBWTtJQUNaLFlBQVk7SUFDWiw4QkFBOEI7RUFDaEM7O0FBRUE7SUFDRSxvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsY0FBYztJQUNkLGtCQUFrQjtFQUNwQjs7QUFFQTtJQUNFLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHlCQUF5QjtFQUMzQjs7QUFFQTtJQUNFLFdBQVc7SUFDWCxjQUFjO0lBQ2QseUNBQXlDO0lBQ3pDLDhCQUE4QjtFQUNoQzs7QUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7QUFFQTtJQUNFLFlBQVk7SUFDWixZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGNBQWM7RUFDaEI7O0FBRUE7SUFDRSxxQkFBcUI7RUFDdkI7O0FBRUE7SUFDRSwrQkFBK0I7RUFDakMiLCJmaWxlIjoic3JjL2FwcC9yZXN1bHQvcmVzdWx0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJhbGV3YXkmZGlzcGxheT1zd2FwJyk7XHJcblxyXG4udXNlci1hdmF0YXIge1xyXG4gICAgd2lkdGg6IDI4MHB4O1xyXG4gICAgaGVpZ2h0OiAyODBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMCA0cHggTmFOcHggdmFyKC0tYmxhY2stNDApO1xyXG4gIH1cclxuXHJcbiAgLnVzZXItbmFtZSB7XHJcbiAgICB3aWR0aDogMjgwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBmb250LWZhbWlseTogUmFsZXdheTtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgfVxyXG5cclxuICAudXNlci1sb2dpbiB7XHJcbiAgICB3aWR0aDogMjgwcHg7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICBmb250LWZhbWlseTogUmFsZXdheTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG4gICAgY29sb3I6ICM1YzVjNWM7XHJcbiAgICBtYXJnaW4tdG9wOiAtMjJweDtcclxuICB9XHJcblxyXG4gIC5kZXRhaWxzLW5hbWUge1xyXG4gICAgd2lkdGg6IDI0MHB4O1xyXG4gICAgaGVpZ2h0OiAyMnB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFJhbGV3YXk7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuICAgIGNvbG9yOiAjNWM1YzVjO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDdweDtcclxuICB9XHJcblxyXG4gIC5kZXRhaWwge1xyXG4gICAgbWFyZ2luOiAwIDAgMTVweCAwO1xyXG4gIH1cclxuXHJcbiAgLmRldGFpbDpmaXJzdC1jaGlsZCB7IFxyXG4gICAgbWFyZ2luLXRvcDogMjhweDtcclxuICAgfVxyXG5cclxuICAuYWxpbmhhciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luOiAyMHB4IDAgMjBweCAwO1xyXG4gIH1cclxuXHJcblxyXG4gIC5yaWdodC1zaWRlIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbjogMHB4IDAgMCA4MXB4O1xyXG5cclxuICB9XHJcblxyXG4gIC5sZWZ0LXNpZGUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI4cHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICB9XHJcblxyXG4gIC5yZXBvLW5hbWUge1xyXG4gICAgd2lkdGg6IDM3NS41cHg7XHJcbiAgICBoZWlnaHQ6IDQwLjhweDtcclxuICAgIGZvbnQtZmFtaWx5OiBSYWxld2F5O1xyXG4gICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICBjb2xvcjogI2FjNTNmMjtcclxuICAgIGRpc3BsYXk6IHVuc2V0O1xyXG4gIH1cclxuXHJcbiAgLnJlcG8tZGVzY3JpcHRpb24ge1xyXG4gICAgd2lkdGg6IDYwMHB4O1xyXG4gICAgaGVpZ2h0OiAyNS41cHg7XHJcbiAgICBmb250LWZhbWlseTogUmFsZXdheTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICBtYXJnaW46IDAgMCAyNy4ycHggMDtcclxuICB9XHJcblxyXG4gIC5zdGFyIHtcclxuICAgIG1hcmdpbi10b3A6IDkuMnB4O1xyXG4gIH1cclxuXHJcbiAgLnN0YXItaWNvbiB7XHJcbiAgICB3aWR0aDogMjUuNXB4O1xyXG4gICAgaGVpZ2h0OiAyNC41cHg7XHJcbiAgfVxyXG5cclxuICAuc3Rhci1jb3VudCB7XHJcbiAgICB3aWR0aDogMjU1LjNweDtcclxuICAgIGhlaWdodDogMjIuNHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFJhbGV3YXk7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuICAgIGNvbG9yOiAjNWM1YzVjO1xyXG4gIH1cclxuXHJcbiAgLkdpdGh1Yi1TZWFyY2gge1xyXG4gICAgd2lkdGg6IDI4MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICBtYXJnaW46IDM1cHggNjFweCAwIDI1cHg7XHJcbiAgfVxyXG5cclxuICAuR2l0aHViLVNlYXJjaCAudGV4dC1zdHlsZS0xIHtcclxuICAgIGZvbnQtZmFtaWx5OiBSYWxld2F5O1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICB9XHJcblxyXG4gIC5TZWFyY2gtSW5wdXQge1xyXG4gICAgd2lkdGg6IDY1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gIH1cclxuXHJcbiAgLnNlYXJjaC10ZXh0IHtcclxuICAgIGZvbnQtZmFtaWx5OiBSYWxld2F5O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICBjb2xvcjogIzVjNWM1YztcclxuICAgIHBhZGRpbmctbGVmdDogMTdweDtcclxuICB9XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWM1M2YyO1xyXG4gIH1cclxuXHJcbiAgLlNlYXJjaC1JY29uIHtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMC4xcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgNHB4IE5hTnB4IHZhcigtLWJsYWNrLTQwKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlKTtcclxuICB9XHJcblxyXG4gIC5yZXBvIHtcclxuICAgIG1hcmdpbjogMCAwIDMwcHggMDtcclxuICB9XHJcblxyXG4gIC5Ob3QtZm91bmQtbWVzc2FnZSB7XHJcbiAgICB3aWR0aDogMzE1cHg7XHJcbiAgICBoZWlnaHQ6IDQxcHg7XHJcbiAgICBmb250LWZhbWlseTogUmFsZXdheTtcclxuICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG4gICAgY29sb3I6ICNhYzUzZjI7XHJcbiAgfVxyXG5cclxuICAuaW5wdXQge1xyXG4gICAgbWFyZ2luOiAxMnB4IDAgMCAyM3B4O1xyXG4gIH1cclxuXHJcbiAgLmRpdi1lcnJvciB7XHJcbiAgICBtYXJnaW46IDE3N3B4IDQxOXB4IDU1MHB4IDQxOHB4O1xyXG4gIH0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/result/result.component.ts": 
        /*!********************************************!*\
          !*** ./src/app/result/result.component.ts ***!
          \********************************************/
        /*! exports provided: ResultComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultComponent", function () { return ResultComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _app_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.api */ "./src/app/app.api.ts");
            /* harmony import */ var _service_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/data.service */ "./src/app/service/data.service.ts");
            var ResultComponent = /** @class */ (function () {
                function ResultComponent(http, dataService) {
                    this.http = http;
                    this.dataService = dataService;
                    this.userLogin = '';
                    this.error = false;
                }
                /* função de inicialização do component */
                ResultComponent.prototype.ngOnInit = function () {
                    // recuperar o usuário da tela de search
                    this.userLogin = this.dataService.getUser();
                    // chamar a função para carregar os dados do usuário
                    this.searchSubmit();
                };
                /* Função para retornar os dados do usuário e do repositório*/
                ResultComponent.prototype.searchSubmit = function () {
                    var _this = this;
                    // chamada da api passando o usuário para obter os dados do mesmo
                    this.http.get(_app_api__WEBPACK_IMPORTED_MODULE_3__["USER_API"] + "/" + this.userLogin)
                        .subscribe(function (data) { _this.user = data; _this.error = false; }, function (err) {
                        if (err.error instanceof Error) {
                            _this.error = true;
                            console.log("Client-side error occured.");
                        }
                        else {
                            _this.error = true;
                            console.log("Server-side error occured.");
                        }
                    });
                    // chamada da api passando o usuário para obter os repositórios do usuário
                    this.http.get(_app_api__WEBPACK_IMPORTED_MODULE_3__["USER_API"] + "/" + this.userLogin + "/repos")
                        .subscribe(function (data) { _this.repos = data; _this.totalStars = _this.countStart(_this.repos); });
                };
                /* Função para fazer a contagem das estrelas do repositório */
                ResultComponent.prototype.countStart = function (repos) {
                    if (repos !== undefined) {
                        var stars_1 = 0;
                        repos.forEach(function (repo) {
                            stars_1 += repo.stargazers_count;
                        });
                        return stars_1;
                    }
                };
                return ResultComponent;
            }());
            ResultComponent.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
                { type: _service_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] }
            ]; };
            ResultComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'con-result',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./result.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/result/result.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./result.component.css */ "./src/app/result/result.component.css")).default]
                })
            ], ResultComponent);
            /***/ 
        }),
        /***/ "./src/app/search/search.component.css": 
        /*!*********************************************!*\
          !*** ./src/app/search/search.component.css ***!
          \*********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("@import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');\r\n\r\n.Github-Search {\r\n    width: 415px;\r\n    height: 81px;\r\n    font-family: monospace;\r\n    font-size: 60px;\r\n    font-weight: normal;\r\n    font-stretch: normal;\r\n    font-style: normal;\r\n    line-height: normal;\r\n    letter-spacing: normal;\r\n    color: #000000;\r\n    margin: 0 auto;\r\n  }\r\n\r\n.Github-Search .text-style-1 {\r\n    font-family: Raleway;\r\n    font-weight: 200;\r\n    font-style: italic;\r\n  }\r\n\r\n.Search-Input {\r\n    width: 650px;\r\n    height: 45px;\r\n    background-color: var(--white);\r\n  }\r\n\r\nbutton {\r\n    width: 100px;\r\n    height: 50px;\r\n    border-radius: 2px;\r\n    background-color: #ac53f2;\r\n  }\r\n\r\n.Search-Icon {\r\n    width: 30px;\r\n    height: 30.1px;\r\n    box-shadow: 0 0 4px NaNpx var(--black-40);\r\n    background-color: var(--white);\r\n  }\r\n\r\n.center {\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 40%;\r\n    transform: translate(-50%, -50%);\r\n    white-space: nowrap;\r\n  }\r\n\r\n.relative {\r\n    width: 100%;\r\n    position: relative;\r\n  }\r\n\r\n.alinhar {\r\n    display: flex;\r\n  }\r\n\r\n.search-text {\r\n    font-family: Raleway;\r\n    font-size: 20px;\r\n    font-weight: 300;\r\n    font-stretch: normal;\r\n    font-style: normal;\r\n    line-height: normal;\r\n    letter-spacing: normal;\r\n    color: #5c5c5c;\r\n    padding-left: 17px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJFQUEyRTs7QUFFM0U7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2QsY0FBYztFQUNoQjs7QUFDQTtJQUNFLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0VBQ3BCOztBQUNBO0lBQ0UsWUFBWTtJQUNaLFlBQVk7SUFDWiw4QkFBOEI7RUFDaEM7O0FBQ0E7SUFDRSxZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix5QkFBeUI7RUFDM0I7O0FBRUE7SUFDRSxXQUFXO0lBQ1gsY0FBYztJQUNkLHlDQUF5QztJQUN6Qyw4QkFBOEI7RUFDaEM7O0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFFBQVE7SUFDUixnQ0FBZ0M7SUFDaEMsbUJBQW1CO0VBQ3JCOztBQUVBO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtFQUNwQjs7QUFFQTtJQUNFLGFBQWE7RUFDZjs7QUFFQTtJQUNFLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2Qsa0JBQWtCO0VBQ3BCIiwiZmlsZSI6InNyYy9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1SYWxld2F5JmRpc3BsYXk9c3dhcCcpO1xyXG5cclxuLkdpdGh1Yi1TZWFyY2gge1xyXG4gICAgd2lkdGg6IDQxNXB4O1xyXG4gICAgaGVpZ2h0OiA4MXB4O1xyXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxuICAgIGZvbnQtc2l6ZTogNjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcbiAgLkdpdGh1Yi1TZWFyY2ggLnRleHQtc3R5bGUtMSB7XHJcbiAgICBmb250LWZhbWlseTogUmFsZXdheTtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgfVxyXG4gIC5TZWFyY2gtSW5wdXQge1xyXG4gICAgd2lkdGg6IDY1MHB4O1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0td2hpdGUpO1xyXG4gIH1cclxuICBidXR0b24ge1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2FjNTNmMjtcclxuICB9XHJcblxyXG4gIC5TZWFyY2gtSWNvbiB7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzAuMXB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDRweCBOYU5weCB2YXIoLS1ibGFjay00MCk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgfVxyXG5cclxuICAuY2VudGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRvcDogNDAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIH1cclxuICBcclxuICAucmVsYXRpdmUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5hbGluaGFyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG5cclxuICAuc2VhcmNoLXRleHQge1xyXG4gICAgZm9udC1mYW1pbHk6IFJhbGV3YXk7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuICAgIGNvbG9yOiAjNWM1YzVjO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxN3B4O1xyXG4gIH0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/search/search.component.ts": 
        /*!********************************************!*\
          !*** ./src/app/search/search.component.ts ***!
          \********************************************/
        /*! exports provided: SearchComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function () { return SearchComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _service_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/data.service */ "./src/app/service/data.service.ts");
            var SearchComponent = /** @class */ (function () {
                function SearchComponent(router, dataService) {
                    this.router = router;
                    this.dataService = dataService;
                }
                SearchComponent.prototype.ngOnInit = function () {
                };
                /* Função para navegar para a pagina de resultados */
                SearchComponent.prototype.searchSubmit = function () {
                    // armazenar o valor 
                    this.dataService.setUser(this.userLogin);
                    // seguir para a proxima pagina
                    this.router.navigate(['/result']);
                };
                return SearchComponent;
            }());
            SearchComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _service_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }
            ]; };
            SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'con-search',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./search.component.css */ "./src/app/search/search.component.css")).default]
                })
            ], SearchComponent);
            /***/ 
        }),
        /***/ "./src/app/service/data.service.ts": 
        /*!*****************************************!*\
          !*** ./src/app/service/data.service.ts ***!
          \*****************************************/
        /*! exports provided: DataService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function () { return DataService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var DataService = /** @class */ (function () {
                function DataService() {
                }
                DataService.prototype.setUser = function (user) {
                    this.user = user;
                };
                DataService.prototype.getUser = function () {
                    return this.user;
                };
                return DataService;
            }());
            DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], DataService);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! C:\Users\leticia.a.schneider\Desktop\workspace\gitbub-app\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map