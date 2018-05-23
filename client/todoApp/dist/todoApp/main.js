(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" href=\"#\">Todos App</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavAltMarkup\" aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNavAltMarkup\">\n    <div class=\"navbar-nav\">\n      <a class=\"nav-item nav-link active\" href=\"#\">Todo Organizer</a>\n    </div>\n  </div>\n</nav>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-8 offset-md-2\">\n      <app-todos></app-todos>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _todos_todos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todos/todos.component */ "./src/app/todos/todos.component.ts");
/* harmony import */ var _todos_todos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todos/todos.service */ "./src/app/todos/todos.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _todos_todos_component__WEBPACK_IMPORTED_MODULE_3__["TodosComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
            ],
            providers: [_todos_todos_service__WEBPACK_IMPORTED_MODULE_4__["TodoService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/todos/todo.model.ts":
/*!*************************************!*\
  !*** ./src/app/todos/todo.model.ts ***!
  \*************************************/
/*! exports provided: Todo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Todo", function() { return Todo; });
var Todo = /** @class */ (function () {
    function Todo(todo, isDone, _id) {
        this.todo = todo;
        this.isDone = isDone;
        this._id = _id;
    }
    return Todo;
}());



/***/ }),

/***/ "./src/app/todos/todos.component.css":
/*!*******************************************!*\
  !*** ./src/app/todos/todos.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\r\n    margin: 1rem;\r\n}\r\n\r\n.btn {\r\n    border-radius: 0;\r\n    margin: .1rem;\r\n}\r\n\r\n.list-group {\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.list-group-item {\r\n    border-radius: 0;\r\n}\r\n\r\n.not-last {\r\n    border-bottom: none;\r\n}"

/***/ }),

/***/ "./src/app/todos/todos.component.html":
/*!********************************************!*\
  !*** ./src/app/todos/todos.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"add-todo-form text-center\">\n  <h1>Add Todo</h1>\n  <div class=\"form-group\">\n    <input type=\"text\" class=\"form-control\" placeholder=\"Add Todo...\" autofocus #todoInput>\n    <br>\n    <button class=\"btn btn-primary btn-block\" (click)=\"onCreate()\">Create</button>\n  </div>\n</div>\n\n\n<ul class=\"list-group\">\n  <div class=\"todo-list\" *ngFor=\"let todo of todos; let i = index\">\n    <li class=\"list-group-item\" [ngClass]=\"{'not-last': i != todos.length - 1}\">\n      <div class=\"row\">\n    <div class=\"col-md-1\">\n      <input type=\"checkbox\" [checked]=\"todo.isDone\" (click)=\"onUpdateStatus(i)\">\n    </div>\n    <div class=\"col-md-8\">\n      <div *ngIf=\"!editMode || editedItem != i; else editor\">\n        {{ todo.todo }}\n      </div>\n      <ng-template #editor>\n        <div class=\"row\">\n          <div class=\"col-md-10\">\n            <input type=\"text\" [value]=\"todo.todo\" class=\"form-control\" (keypress)=\"onUpdateText($event)\">\n          </div>\n          <div class=\"col-md-2\">\n            <button class=\"btn btn-warning float-right\" (click)=\"editMode = false\">Cancel</button>\n          </div>\n        </div>\n      </ng-template>\n    </div>\n    <div class=\"col-md-3\">\n      <input type=\"button\" class=\"btn btn-outline-danger float-right\" (click)=\"onDelete(i)\" value=\"Delete\">\n      <input type=\"button\" class=\"btn btn-outline-success float-right\" (click)=\"onEdit(i)\" value=\"Edit\" [disabled]=\"editMode\">\n    </div>\n  </div>\n    </li>\n  </div>\n</ul>\n  "

/***/ }),

/***/ "./src/app/todos/todos.component.ts":
/*!******************************************!*\
  !*** ./src/app/todos/todos.component.ts ***!
  \******************************************/
/*! exports provided: TodosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodosComponent", function() { return TodosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _todos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todos.service */ "./src/app/todos/todos.service.ts");
/* harmony import */ var _todo_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo.model */ "./src/app/todos/todo.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TodosComponent = /** @class */ (function () {
    function TodosComponent(todoService) {
        this.todoService = todoService;
        this.editMode = false;
    }
    TodosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.todoService.todosChanged.subscribe(function (todos) { return _this.todos = todos; });
        this.todoService.fetchTodos();
    };
    TodosComponent.prototype.onCreate = function () {
        if (!this.todoInput.nativeElement.value) {
            alert('add text');
        }
        else {
            this.todoService.addTodo(new _todo_model__WEBPACK_IMPORTED_MODULE_2__["Todo"](this.todoInput.nativeElement.value, false));
            this.todoInput.nativeElement.value = '';
        }
    };
    TodosComponent.prototype.onDelete = function (index) {
        if (confirm('Are you shure you want to delete "' + this.todos[index].todo + '"?'))
            this.todoService.deleteTodo(index);
    };
    TodosComponent.prototype.onUpdateStatus = function (index) {
        var newTodo = new _todo_model__WEBPACK_IMPORTED_MODULE_2__["Todo"](this.todos[index].todo, !this.todos[index].isDone, this.todos[index]._id);
        this.todoService.updateTodo(index, newTodo);
    };
    TodosComponent.prototype.onEdit = function (index) {
        this.editMode = true;
        this.editedItem = index;
    };
    TodosComponent.prototype.onUpdateText = function (event) {
        if (event.which === 13) {
            if (event.target.value) {
                var newTodo = new _todo_model__WEBPACK_IMPORTED_MODULE_2__["Todo"](event.target.value, this.todos[this.editedItem].isDone, this.todos[this.editedItem]._id);
                this.todoService.updateTodo(this.editedItem, newTodo);
                this.editMode = false;
            }
            else {
                this.editMode = false;
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('todoInput'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], TodosComponent.prototype, "todoInput", void 0);
    TodosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-todos',
            template: __webpack_require__(/*! ./todos.component.html */ "./src/app/todos/todos.component.html"),
            styles: [__webpack_require__(/*! ./todos.component.css */ "./src/app/todos/todos.component.css")]
        }),
        __metadata("design:paramtypes", [_todos_service__WEBPACK_IMPORTED_MODULE_1__["TodoService"]])
    ], TodosComponent);
    return TodosComponent;
}());



/***/ }),

/***/ "./src/app/todos/todos.service.ts":
/*!****************************************!*\
  !*** ./src/app/todos/todos.service.ts ***!
  \****************************************/
/*! exports provided: TodoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoService", function() { return TodoService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TodoService = /** @class */ (function () {
    function TodoService(http) {
        this.http = http;
        this.todosChanged = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    TodoService.prototype.getTodos = function () {
        return this.todos.slice();
    };
    TodoService.prototype.setTodos = function (todos) {
        this.todos = todos;
        this.todosChanged.next(this.todos.slice());
    };
    TodoService.prototype.addTodo = function (todo) {
        var _this = this;
        this.todos.push(todo);
        this.todosChanged.next(this.todos);
        this.http.post('/api/v1/todos', todo).subscribe(function () { return _this.fetchTodos(); });
    };
    TodoService.prototype.deleteTodo = function (index) {
        var _this = this;
        this.http.delete("/api/v1/todos/" + this.todos[index]._id).subscribe(function () { return _this.fetchTodos(); });
        this.todos.splice(index, 1);
        this.todosChanged.next(this.todos);
    };
    TodoService.prototype.updateTodo = function (index, newTodo) {
        var _this = this;
        this.http.put('/api/v1/todos', __assign({}, newTodo, { id: this.todos[index]._id })).subscribe(function () { return _this.fetchTodos(); });
        this.todos[index] = newTodo;
        this.todosChanged.next(this.todos);
    };
    TodoService.prototype.fetchTodos = function () {
        var _this = this;
        this.http.get('/api/v1/todos')
            .subscribe(function (todos) { return _this.setTodos(todos); });
    };
    TodoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], TodoService);
    return TodoService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\par_k\OneDrive\Desktop\Program\todo_app\client\todoApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map