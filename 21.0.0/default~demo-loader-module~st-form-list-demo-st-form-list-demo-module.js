(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~demo-loader-module~st-form-list-demo-st-form-list-demo-module"],{

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/demos/st-form-list-demo/st-form-list-demo.html":
/*!***********************************************************************************************************************************!*\
  !*** /home/fjsevilla/workspace/egeo/node_modules/raw-loader/dist/cjs.js!./src/app/demos/st-form-list-demo/st-form-list-demo.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n\n    © 2017 Stratio Big Data Inc., Sucursal en España.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n-->\n<st-docs [htmlFile]=\"configDoc.html\" [tsFile]=\"configDoc.ts\" [componentFile]=\"configDoc.component\">\n   <section class=\"container-liquid\">\n\n      <h1>IN A TEMPLATE DRIVEN FORM</h1>\n      <form #templateDrivenForm=\"ngForm\" novalidate>\n         <st-form-list [schema]=\"jsonSchema\" [ngModel]=\"model1\" name=\"list\" (blur)=\"onBlur($event)\" (add)=\"onAddItem($event)\" (remove)=\"onRemoveItem($event)\">\n         </st-form-list>\n      </form>\n\n      <div class=\"result-div\">\n         <h2> Form value: </h2>\n         <p>{{ templateDrivenForm.value | json }}</p>\n         <h2>Form status:</h2>\n         <p>{{ templateDrivenForm.disabled ? 'DISABLED' : templateDrivenForm.valid ? 'VALID' : 'INVALID'\n            }}</p>\n         <h2> Model:</h2>\n         <p>{{model1 | json}} </p>\n      </div>\n      <button class=\"button button-primary\" (click)=\"onChangeTemplateFormStatus(templateDrivenForm)\"> DISABLE/ENABLE FORM ARRAY</button>\n      <button class=\"button button-primary \" (click)=\"showStatus(templateDrivenForm)\">SHOW STATUS</button>\n\n   </section>\n   <section class=\"container-liquid\">\n\n      <h1>IN A MODEL DRIVEN FORM</h1>\n\n      <form [formGroup]=\"reactiveForm\" novalidate>\n         <st-form-list [schema]=\"jsonSchema\" [(value)]=\"model2\" formControlName=\"list\">\n         </st-form-list>\n      </form>\n\n      <h2>Model:</h2>\n      <p>{{model2 | json}}</p>\n      <h2>Form value:</h2>\n      <p>{{ reactiveForm.value | json }}</p>\n      <h2>Form status:</h2>\n      <p>{{ reactiveForm.disabled ? 'DISABLED' : reactiveForm.valid ? 'VALID' : 'INVALID' }}</p>\n\n      <button class=\"button button-primary\" (click)=\"onChangeReactiveFormStatus(reactiveForm)\"> DISABLE/ENABLE FORM ARRAY</button>\n      <button class=\"button button-primary \" (click)=\"showStatus(reactiveForm)\">SHOW STATUS</button>\n\n   </section>\n\n   <section class=\"container-liquid\">\n      <h1>WITHOUT FORM</h1>\n      <st-form-list [schema]=\"jsonSchema\" [(value)]=\"model3\"></st-form-list>\n\n      <h2>Model:</h2>\n      <p>{{model3 | json}}</p>\n   </section>\n</st-docs>\n");

/***/ }),

/***/ "./src/app/demos/st-form-list-demo/st-form-list-demo.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/demos/st-form-list-demo/st-form-list-demo.module.ts ***!
  \*********************************************************************/
/*! exports provided: StFormListDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StFormListDemoModule", function() { return StFormListDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stratio/egeo */ "../egeo/src/public_api.ts");
/* harmony import */ var _st_form_list_demo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./st-form-list-demo */ "./src/app/demos/st-form-list-demo/st-form-list-demo.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
/*
 * © 2017 Stratio Big Data Inc., Sucursal en España.
 *
 * This software is licensed under the Apache License, Version 2.0.
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the terms of the License for more details.
 *
 * SPDX-License-Identifier: Apache-2.0.
 */





var StFormListDemoModule = /** @class */ (function () {
    function StFormListDemoModule() {
    }
    StFormListDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StDocsModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StFormListModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StDemoGeneratorModule"].withComponents({ components: [_st_form_list_demo__WEBPACK_IMPORTED_MODULE_3__["StFormListDemoComponent"]] })
            ],
            declarations: [_st_form_list_demo__WEBPACK_IMPORTED_MODULE_3__["StFormListDemoComponent"]]
        })
    ], StFormListDemoModule);
    return StFormListDemoModule;
}());



/***/ }),

/***/ "./src/app/demos/st-form-list-demo/st-form-list-demo.scss":
/*!****************************************************************!*\
  !*** ./src/app/demos/st-form-list-demo/st-form-list-demo.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/**\n * © 2017 Stratio Big Data Inc., Sucursal en España.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\nh1 {\n  padding: 10px 0; }\nh2 {\n  padding: 5px 0; }\n.result-div {\n  padding: 20px 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2VnZW8tZGVtby9zcmMvYXBwL2RlbW9zL3N0LWZvcm0tbGlzdC1kZW1vL3N0LWZvcm0tbGlzdC1kZW1vLnNjc3MiLCIvaG9tZS9manNldmlsbGEvd29ya3NwYWNlL2VnZW8vcHJvamVjdHMvZWdlby1kZW1vL3NyYy9hcHAvZGVtb3Mvc3QtZm9ybS1saXN0LWRlbW8vc3QtZm9ybS1saXN0LWRlbW8uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7Ozs7Ozs7OztFRFVFO0FDQ0Y7RUFDRyxlQUFlLEVBQUE7QUFJbEI7RUFDRyxjQUFjLEVBQUE7QUFHakI7RUFDRyxlQUFlLEVBQUEiLCJmaWxlIjoicHJvamVjdHMvZWdlby1kZW1vL3NyYy9hcHAvZGVtb3Mvc3QtZm9ybS1saXN0LWRlbW8vc3QtZm9ybS1saXN0LWRlbW8uc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cbmgxIHtcbiAgcGFkZGluZzogMTBweCAwOyB9XG5cbmgyIHtcbiAgcGFkZGluZzogNXB4IDA7IH1cblxuLnJlc3VsdC1kaXYge1xuICBwYWRkaW5nOiAyMHB4IDA7IH1cbiIsIi8qKlxuICogwqkgMjAxNyBTdHJhdGlvIEJpZyBEYXRhIEluYy4sIFN1Y3Vyc2FsIGVuIEVzcGHDsWEuXG4gKlxuICogVGhpcyBzb2Z0d2FyZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wLlxuICogVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTtcbiAqIHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZiBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4gKiBTZWUgdGhlIHRlcm1zIG9mIHRoZSBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogU1BEWC1MaWNlbnNlLUlkZW50aWZpZXI6IEFwYWNoZS0yLjAuXG4gKi9cblxuaDEge1xuICAgcGFkZGluZzogMTBweCAwO1xufVxuXG5cbmgyIHtcbiAgIHBhZGRpbmc6IDVweCAwO1xufVxuXG4ucmVzdWx0LWRpdiB7XG4gICBwYWRkaW5nOiAyMHB4IDA7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/demos/st-form-list-demo/st-form-list-demo.ts":
/*!**************************************************************!*\
  !*** ./src/app/demos/st-form-list-demo/st-form-list-demo.ts ***!
  \**************************************************************/
/*! exports provided: StFormListDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StFormListDemoComponent", function() { return StFormListDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
/*
 * © 2017 Stratio Big Data Inc., Sucursal en España.
 *
 * This software is licensed under the Apache License, Version 2.0.
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the terms of the License for more details.
 *
 * SPDX-License-Identifier: Apache-2.0.
 */


var StFormListDemoComponent = /** @class */ (function () {
    function StFormListDemoComponent() {
        this.configDoc = {
            html: 'demo/st-form-list-demo/st-form-list-demo.html',
            ts: 'demo/st-form-list-demo/st-form-list-demo.ts',
            component: 'lib/st-form-list/st-form-list.component.ts'
        };
        this.jsonSchema = {
            '$schema': 'http://json-schema.org/schema#',
            'properties': {
                'genericNumberInput': {
                    'title': 'Required number between 6-10',
                    'description': 'Generic input description',
                    'type': 'number',
                    'default': 6,
                    'minimum': 1,
                    'maximum': 10,
                    'exclusiveMinimum': false,
                    'exclusiveMaximum': false
                },
                'genericTextInput': {
                    'title': 'Text',
                    'description': 'This is a generic text',
                    'type': 'string',
                    'maxLength': 50
                }
            },
            'required': [
                'genericNumberInput'
            ]
        };
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({});
        this.formArray = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"]([]);
        this.model1 = [
            { genericNumberInput: 1, genericTextInput: 'item 1 of model 1' },
            { genericNumberInput: 2, genericTextInput: 'item 2 of model 1' }
        ];
        this.model2 = [
            { genericNumberInput: 3, genericTextInput: 'item 1 of model 2' }
        ];
        this.model3 = [
            { genericNumberInput: 4, genericTextInput: 'item 1 of model 3' },
            { genericNumberInput: 5, genericTextInput: 'item 2 of model 3' },
            { genericNumberInput: 6, genericTextInput: 'item 3 of model 3' }
        ];
        this.reactiveForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({ list: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]() });
    }
    StFormListDemoComponent.prototype.onChangeTemplateFormStatus = function (form) {
        if (form.control.disabled) {
            form.control.enable();
        }
        else {
            form.control.disable();
        }
    };
    StFormListDemoComponent.prototype.onChangeReactiveFormStatus = function (form) {
        if (form.disabled) {
            form.enable();
        }
        else {
            form.disable();
        }
    };
    StFormListDemoComponent.prototype.onBlur = function (event) {
        console.log('onblur', event);
    };
    StFormListDemoComponent.prototype.onAddItem = function (event) {
        console.log('onAddItem', event);
    };
    StFormListDemoComponent.prototype.onRemoveItem = function (event) {
        console.log('onRemoveItem', event);
    };
    StFormListDemoComponent.prototype.showStatus = function () {
        console.log(this.templateDrivenForm);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('formModel', { static: false }),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], StFormListDemoComponent.prototype, "formModel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('templateDrivenForm', { static: false }),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], StFormListDemoComponent.prototype, "templateDrivenForm", void 0);
    StFormListDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'st-form-list-demo',
            template: __importDefault(__webpack_require__(/*! raw-loader!./st-form-list-demo.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/demos/st-form-list-demo/st-form-list-demo.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./st-form-list-demo.scss */ "./src/app/demos/st-form-list-demo/st-form-list-demo.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], StFormListDemoComponent);
    return StFormListDemoComponent;
}());



/***/ })

}]);
//# sourceMappingURL=default~demo-loader-module~st-form-list-demo-st-form-list-demo-module.js.map