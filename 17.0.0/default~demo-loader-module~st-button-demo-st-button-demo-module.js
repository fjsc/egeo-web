(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~demo-loader-module~st-button-demo-st-button-demo-module"],{

/***/ "./src/app/demos/st-button-demo/st-button-demo.component.html":
/*!********************************************************************!*\
  !*** ./src/app/demos/st-button-demo/st-button-demo.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\r\n\r\n    © 2017 Stratio Big Data Inc., Sucursal en España.\r\n\r\n    This software is licensed under the Apache License, Version 2.0.\r\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n    See the terms of the License for more details.\r\n\r\n    SPDX-License-Identifier: Apache-2.0.\r\n\r\n-->\r\n<st-docs [htmlFile]=\"configDoc.html\" [tsFile]=\"configDoc.ts\" [componentFile]=\"configDoc.component\">\r\n   <section class=\"container-liquid\">\r\n\r\n      <div class=\"row\">\r\n         <div class=\"col-md-12\">\r\n            <h1>REGULAR BUTTONS:</h1>\r\n         </div>\r\n         <div class=\"col-md-3\">\r\n            <button class=\"button button-primary\">\r\n               <span>Primary</span>\r\n            </button>\r\n         </div>\r\n         <div class=\"col-md-3\">\r\n            <button class=\"button button-primary\" disabled>\r\n               <span>Primary</span>\r\n            </button>\r\n         </div>\r\n         <div class=\"col-md-3\">\r\n            <button class=\"button button-secondary-line\">\r\n               <span>Secondary</span>\r\n            </button>\r\n         </div>\r\n         <div class=\"col-md-3\">\r\n            <button class=\"button button-secondary-line\" disabled>\r\n               <span>Secondary</span>\r\n            </button>\r\n         </div>\r\n      </div>\r\n      <div class=\"row\">\r\n         <div class=\"col-md-3\">\r\n            <i class=\"temp1\">.button.button-primary</i>\r\n         </div>\r\n         <div class=\"col-md-3\">\r\n            <i class=\"temp1\">.button.button-primary[disabled]</i>\r\n         </div>\r\n         <div class=\"col-md-3\">\r\n            <i class=\"temp1\">.button.button-secondary</i>\r\n         </div>\r\n         <div class=\"col-md-3\">\r\n            <i class=\"temp1\">.button.button-secondary[disabled]</i>\r\n         </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n         <div class=\"col-md-3\">\r\n            <button class=\"button button-secondary-gray\">\r\n               <span>Secondary</span>\r\n            </button>\r\n         </div>\r\n         <div class=\"col-md-3\">\r\n            <button class=\"button button-secondary-gray\" disabled>\r\n               <span>Secondary</span>\r\n            </button>\r\n         </div>\r\n         <div class=\"col-md-3\">\r\n            <button class=\"button button-critical\">\r\n               <span>Critical</span>\r\n            </button>\r\n         </div>\r\n         <div class=\"col-md-3\">\r\n            <button class=\"button button-critical\" disabled>\r\n               <span>Critical</span>\r\n            </button>\r\n         </div>\r\n      </div>\r\n      <div class=\"row\">\r\n         <div class=\"col-md-3\">\r\n            <i class=\"temp1\">.button.button-secondary-gray</i>\r\n         </div>\r\n         <div class=\"col-md-3\">\r\n            <i class=\"temp1\">.button.button-secondary-gray[disabled]</i>\r\n         </div>\r\n         <div class=\"col-md-3\">\r\n            <i class=\"temp1\">.button.button-critical</i>\r\n         </div>\r\n         <div class=\"col-md-3\">\r\n            <i class=\"temp1\">.button.button-critical[disabled]</i>\r\n         </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n         <div class=\"col-md-3\">\r\n            <button class=\"button button-warning\">\r\n               <span>Warning</span>\r\n            </button>\r\n         </div>\r\n         <div class=\"col-md-3\">\r\n            <button class=\"button button-warning\" disabled>\r\n               <span>Warning</span>\r\n            </button>\r\n         </div>\r\n         <div class=\"col-md-3\">\r\n            <button class=\"button button-success\">\r\n               <span>Success</span>\r\n            </button>\r\n         </div>\r\n         <div class=\"col-md-3\">\r\n            <button class=\"button button-success\" disabled>\r\n               <span>Success</span>\r\n            </button>\r\n         </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n         <div class=\"col-md-3\">\r\n            <i class=\"temp1\">.button.button-warning</i>\r\n         </div>\r\n         <div class=\"col-md-3\">\r\n            <i class=\"temp1\">.button.button-warning[disabled]</i>\r\n         </div>\r\n         <div class=\"col-md-3\">\r\n            <i class=\"temp1\">.button.button-success</i>\r\n         </div>\r\n         <div class=\"col-md-3\">\r\n            <i class=\"temp1\">.button.button-success[disabled]</i>\r\n         </div>\r\n      </div>\r\n\r\n      <br>\r\n\r\n      <div class=\"row\">\r\n         <div class=\"col-md-12\">\r\n            <h1>ICON VERSION:</h1>\r\n         </div>\r\n         <div class=\"col-md-3\">\r\n            <button class=\"button button-primary\">\r\n               <i class=\"icon-circle-check\"></i>\r\n               <span>Primary</span>\r\n            </button>\r\n         </div>\r\n         <div class=\"col-md-3\">\r\n            <button class=\"button button-primary\" disabled>\r\n               <i class=\"icon-circle-check\"></i>\r\n               <span>Primary</span>\r\n            </button>\r\n         </div>\r\n         <div class=\"col-md-3\">\r\n            <button class=\"button button-primary\">\r\n               <span>Primary</span>\r\n               <i class=\"icon-circle-check\"></i>\r\n            </button>\r\n         </div>\r\n         <div class=\"col-md-3\">\r\n            <button class=\"button button-primary\" disabled>\r\n               <span>Primary</span>\r\n               <i class=\"icon-circle-check\"></i>\r\n            </button>\r\n         </div>\r\n      </div>\r\n      <div class=\"row\">\r\n         <div class=\"col-md-3\">\r\n            <i class=\"temp1\">.button.button-primary</i>\r\n         </div>\r\n         <div class=\"col-md-3\">\r\n            <i class=\"temp1\">.button.button-primary[disabled]</i>\r\n         </div>\r\n         <div class=\"col-md-3\">\r\n            <i class=\"temp1\">.button.button-primary</i>\r\n         </div>\r\n         <div class=\"col-md-3\">\r\n            <i class=\"temp1\">.button.button-primary[disabled]</i>\r\n         </div>\r\n      </div>\r\n\r\n      <br>\r\n\r\n      <div class=\"row\">\r\n         <div class=\"col-md-12\">\r\n            <h1>BLOCK VERSION:</h1>\r\n         </div>\r\n         <div class=\"col-md-3\">\r\n            <button class=\"button button-primary block\">\r\n               <span>Primary</span>\r\n            </button>\r\n         </div>\r\n         <div class=\"col-md-3\">\r\n            <button class=\"button button-primary block\" disabled>\r\n               <span>Primary</span>\r\n            </button>\r\n         </div>\r\n      </div>\r\n      <div class=\"row\">\r\n         <div class=\"col-md-3\">\r\n            <i class=\"temp1\">.button.button-primary.block</i>\r\n         </div>\r\n         <div class=\"col-md-3\">\r\n            <i class=\"temp1\">.button.button-primary[disabled].block</i>\r\n         </div>\r\n      </div>\r\n\r\n      <br>\r\n\r\n      <div class=\"row\">\r\n         <div class=\"col-md-12\">\r\n            <h1>LARGE VERSION:</h1>\r\n         </div>\r\n         <div class=\"col-md-3\">\r\n            <button class=\"button button-primary large\">\r\n               <span>Primary</span>\r\n            </button>\r\n         </div>\r\n         <div class=\"col-md-3\">\r\n            <button class=\"button button-primary large\" disabled>\r\n               <span>Primary</span>\r\n            </button>\r\n         </div>\r\n      </div>\r\n      <div class=\"row\">\r\n         <div class=\"col-md-3\">\r\n            <i class=\"temp1\">.button.button-primary.large</i>\r\n         </div>\r\n         <div class=\"col-md-3\">\r\n            <i class=\"temp1\">.button.button-primary[disabled].large</i>\r\n         </div>\r\n      </div>\r\n\r\n      <br>\r\n\r\n      <div class=\"row\">\r\n         <div class=\"col-md-12\">\r\n            <h1>SMALL VERSION:</h1>\r\n         </div>\r\n         <div class=\"col-md-3\">\r\n            <button class=\"button button-primary small\">\r\n               <span>Primary</span>\r\n            </button>\r\n         </div>\r\n         <div class=\"col-md-3\">\r\n            <button class=\"button button-primary small\" disabled>\r\n               <span>Primary</span>\r\n            </button>\r\n         </div>\r\n         <div class=\"col-md-3\">\r\n            <button class=\"button button-secondary-line small\">\r\n               <span>Primary</span>\r\n            </button>\r\n         </div>\r\n         <div class=\"col-md-3\">\r\n            <button class=\"button button-secondary-line small\" disabled>\r\n               <span>Primary</span>\r\n            </button>\r\n         </div>\r\n      </div>\r\n      <div class=\"row\">\r\n         <div class=\"col-md-3\">\r\n            <i class=\"temp1\">.button.button-primary.small</i>\r\n         </div>\r\n         <div class=\"col-md-3\">\r\n            <i class=\"temp1\">.button.button-primary[disabled].small</i>\r\n         </div>\r\n         <div class=\"col-md-3\">\r\n            <i class=\"temp1\">.button.button-secondary-line.small</i>\r\n         </div>\r\n         <div class=\"col-md-3\">\r\n            <i class=\"temp1\">.button.button-secondary-line[disabled].small</i>\r\n         </div>\r\n      </div>\r\n      <div class=\"row\">\r\n         <div class=\"col-md-3\">\r\n            <button class=\"button button-secondary-gray small\">\r\n               <span>Secondary</span>\r\n            </button>\r\n         </div>\r\n         <div class=\"col-md-3\">\r\n            <button class=\"button button-secondary-gray small\" disabled>\r\n               <span>Secondary</span>\r\n            </button>\r\n         </div>\r\n         <div class=\"col-md-3\">\r\n            <button class=\"button button-critical small\">\r\n               <span>Critical</span>\r\n            </button>\r\n         </div>\r\n         <div class=\"col-md-3\">\r\n            <button class=\"button button-critical small\" disabled>\r\n               <span>Critical</span>\r\n            </button>\r\n         </div>\r\n      </div>\r\n      <div class=\"row\">\r\n         <div class=\"col-md-3\">\r\n            <i class=\"temp1\">.button.button-secondary-gray.small</i>\r\n         </div>\r\n         <div class=\"col-md-3\">\r\n            <i class=\"temp1\">.button.button-secondary-gray[disabled].small</i>\r\n         </div>\r\n         <div class=\"col-md-3\">\r\n            <i class=\"temp1\">.button.button-critical.small</i>\r\n         </div>\r\n         <div class=\"col-md-3\">\r\n            <i class=\"temp1\">.button.button-critical[disabled].small</i>\r\n         </div>\r\n      </div>\r\n      <div class=\"row\">\r\n         <div class=\"col-md-3\">\r\n            <button class=\"button button-warning small\">\r\n               <span>Warning</span>\r\n            </button>\r\n         </div>\r\n         <div class=\"col-md-3\">\r\n            <button class=\"button button-warning small\" disabled>\r\n               <span>Warning</span>\r\n            </button>\r\n         </div>\r\n         <div class=\"col-md-3\">\r\n            <button class=\"button button-success small\">\r\n               <span>Success</span>\r\n            </button>\r\n         </div>\r\n         <div class=\"col-md-3\">\r\n            <button class=\"button button-success small\" disabled>\r\n               <span>Success</span>\r\n            </button>\r\n         </div>\r\n      </div>\r\n      <div class=\"row\">\r\n         <div class=\"col-md-3\">\r\n            <i class=\"temp1\">.button.button-secondary-gray.small</i>\r\n         </div>\r\n         <div class=\"col-md-3\">\r\n            <i class=\"temp1\">.button.button-secondary-gray[disabled].small</i>\r\n         </div>\r\n         <div class=\"col-md-3\">\r\n            <i class=\"temp1\">.button.button-critical.small</i>\r\n         </div>\r\n         <div class=\"col-md-3\">\r\n            <i class=\"temp1\">.button.button-critical[disabled].small</i>\r\n         </div>\r\n      </div>\r\n      <br>\r\n\r\n      <div class=\"row\">\r\n         <div class=\"col-md-12\">\r\n            <h1>TOOLBAR BUTTONS:</h1>\r\n         </div>\r\n         <div class=\"col-md-1\">\r\n            <button class=\"button button-toolbar\">\r\n               <i class=\"icon-circle-check\"></i>\r\n            </button>\r\n         </div>\r\n         <div class=\"col-md-1\">\r\n            <button class=\"button button-toolbar\">\r\n               <i class=\"icon-download\"></i>\r\n            </button>\r\n         </div>\r\n         <div class=\"col-md-1\">\r\n            <button class=\"button button-toolbar\">\r\n               <i class=\"icon-circle-plus\"></i>\r\n            </button>\r\n         </div>\r\n         <div class=\"col-md-1\">\r\n            <button class=\"button button-toolbar\">\r\n               <i class=\"icon-arrow-up\"></i>\r\n            </button>\r\n         </div>\r\n      </div>\r\n      <div class=\"row\">\r\n         <div class=\"col-md-12\">\r\n            <i class=\"temp1\">.button.button-toolbar</i>\r\n         </div>\r\n      </div>\r\n      <br>\r\n\r\n      <div class=\"row\">\r\n         <div class=\"col-md-1\">\r\n            <button class=\"button button-toolbar\" disabled>\r\n               <i class=\"icon-circle-check\"></i>\r\n            </button>\r\n         </div>\r\n         <div class=\"col-md-1\">\r\n            <button class=\"button button-toolbar\" disabled>\r\n               <i class=\"icon-download\"></i>\r\n            </button>\r\n         </div>\r\n         <div class=\"col-md-1\">\r\n            <button class=\"button button-toolbar\" disabled>\r\n               <i class=\"icon-circle-plus\"></i>\r\n            </button>\r\n         </div>\r\n         <div class=\"col-md-1\">\r\n            <button class=\"button button-toolbar\" disabled>\r\n               <i class=\"icon-arrow-up\"></i>\r\n            </button>\r\n         </div>\r\n      </div>\r\n      <div class=\"row\">\r\n         <div class=\"col-md-12\">\r\n            <i class=\"temp1\">.button.button-toolbar[disabled]</i>\r\n         </div>\r\n      </div>\r\n\r\n      <br>\r\n      <div class=\"row\">\r\n         <div class=\"col-md-12\">\r\n            <h1>SMALL TOOLBAR BUTTONS:</h1>\r\n         </div>\r\n         <div class=\"col-md-1\">\r\n            <button class=\"button button-toolbar small\">\r\n               <i class=\"icon-circle-check\"></i>\r\n            </button>\r\n         </div>\r\n         <div class=\"col-md-1\">\r\n            <button class=\"button button-toolbar small\">\r\n               <i class=\"icon-download\"></i>\r\n            </button>\r\n         </div>\r\n         <div class=\"col-md-1\">\r\n            <button class=\"button button-toolbar small\">\r\n               <i class=\"icon-circle-plus\"></i>\r\n            </button>\r\n         </div>\r\n         <div class=\"col-md-1\">\r\n            <button class=\"button button-toolbar small\">\r\n               <i class=\"icon-arrow-up\"></i>\r\n            </button>\r\n         </div>\r\n      </div>\r\n      <div class=\"row\">\r\n         <div class=\"col-md-12\">\r\n            <i class=\"temp1\">.button.button-toolbar.small</i>\r\n         </div>\r\n      </div>\r\n      <br>\r\n      <div class=\"row\">\r\n         <div class=\"col-md-12\">\r\n            <h1>DISABLED SMALL TOOLBAR BUTTONS:</h1>\r\n         </div>\r\n         <div class=\"col-md-1\">\r\n            <button class=\"button button-toolbar small\" disabled>\r\n               <i class=\"icon-circle-check\"></i>\r\n            </button>\r\n         </div>\r\n         <div class=\"col-md-1\">\r\n            <button class=\"button button-toolbar small\" disabled>\r\n               <i class=\"icon-download\"></i>\r\n            </button>\r\n         </div>\r\n         <div class=\"col-md-1\">\r\n            <button class=\"button button-toolbar small\" disabled>\r\n               <i class=\"icon-circle-plus\"></i>\r\n            </button>\r\n         </div>\r\n         <div class=\"col-md-1\">\r\n            <button class=\"button button-toolbar small\" disabled>\r\n               <i class=\"icon-arrow-up\"></i>\r\n            </button>\r\n         </div>\r\n      </div>\r\n      <div class=\"row\">\r\n         <div class=\"col-md-12\">\r\n            <i class=\"temp1\">.button.button-toolbar[disabled].small</i>\r\n         </div>\r\n      </div>\r\n      <br>\r\n\r\n      <div class=\"row\">\r\n         <div class=\"col-md-12\">\r\n            <h1>LINK BUTTONS:</h1>\r\n         </div>\r\n         <div class=\"col-md-3\">\r\n            <button class=\"button button-link-primary\">\r\n               <span>Primary link</span>\r\n            </button>\r\n         </div>\r\n         <div class=\"col-md-3\">\r\n            <button class=\"button button-link-secondary\">\r\n               <span>Secondary link</span>\r\n            </button>\r\n         </div>\r\n         <div class=\"col-md-3\">\r\n            <button class=\"button button-link-primary\" disabled>\r\n               <span>Disabled primary link</span>\r\n            </button>\r\n         </div>\r\n         <div class=\"col-md-3\">\r\n            <button class=\"button button-link-secondary\" disabled>\r\n               <span>Disabled secondary link</span>\r\n            </button>\r\n         </div>\r\n      </div>\r\n      <div class=\"row\">\r\n         <div class=\"col-md-3\">\r\n            <i class=\"temp1\">.button.button-link-primary</i>\r\n         </div>\r\n         <div class=\"col-md-3\">\r\n            <i class=\"temp1\">.button.button-link-secondary</i>\r\n         </div>\r\n         <div class=\"col-md-3\">\r\n            <i class=\"temp1\">.button.button-link-primary[disabled]</i>\r\n         </div>\r\n         <div class=\"col-md-3\">\r\n            <i class=\"temp1\">.button.button-link-secondary[disabled]</i>\r\n         </div>\r\n      </div>\r\n\r\n\r\n      <div class=\"row\">\r\n         <div class=\"col-md-12\">\r\n            <h1>SMALL LINK BUTTONS:</h1>\r\n         </div>\r\n         <div class=\"col-md-3\">\r\n            <button class=\"button button-link-primary small\">\r\n               <span>Primary link</span>\r\n            </button>\r\n         </div>\r\n         <div class=\"col-md-3\">\r\n            <button class=\"button button-link-secondary small\">\r\n               <span>Secondary link</span>\r\n            </button>\r\n         </div>\r\n         <div class=\"col-md-3\">\r\n            <button class=\"button button-link-primary small\" disabled>\r\n               <span>Disabled primary link</span>\r\n            </button>\r\n         </div>\r\n         <div class=\"col-md-3\">\r\n            <button class=\"button button-link-secondary small\" disabled>\r\n               <span>Disabled secondary link</span>\r\n            </button>\r\n         </div>\r\n      </div>\r\n      <div class=\"row\">\r\n         <div class=\"col-md-3\">\r\n            <i class=\"temp1\">.button.button-link-primary.small</i>\r\n         </div>\r\n         <div class=\"col-md-3\">\r\n            <i class=\"temp1\">.button.button-link-secondary.small</i>\r\n         </div>\r\n         <div class=\"col-md-3\">\r\n            <i class=\"temp1\">.button.button-link-primary[disabled].small</i>\r\n         </div>\r\n         <div class=\"col-md-3\">\r\n            <i class=\"temp1\">.button.button-link-secondary[disabled].small</i>\r\n         </div>\r\n      </div>\r\n\r\n   </section>\r\n</st-docs>\r\n"

/***/ }),

/***/ "./src/app/demos/st-button-demo/st-button-demo.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/demos/st-button-demo/st-button-demo.component.ts ***!
  \******************************************************************/
/*! exports provided: StButtonDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StButtonDemoComponent", function() { return StButtonDemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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

var StButtonDemoComponent = /** @class */ (function () {
    function StButtonDemoComponent() {
        this.configDoc = {
            html: 'demo/st-button-demo/st-button-demo.component.html',
            ts: 'demo/st-button-demo/st-button-demo.component.ts'
        };
    }
    StButtonDemoComponent.prototype.test1 = function () {
        console.log('You clicked the button 1!');
    };
    StButtonDemoComponent.prototype.test2 = function () {
        console.log('You clicked the button 2!');
    };
    StButtonDemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'st-button-demo',
            template: __webpack_require__(/*! ./st-button-demo.component.html */ "./src/app/demos/st-button-demo/st-button-demo.component.html")
        })
    ], StButtonDemoComponent);
    return StButtonDemoComponent;
}());



/***/ }),

/***/ "./src/app/demos/st-button-demo/st-button-demo.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/demos/st-button-demo/st-button-demo.module.ts ***!
  \***************************************************************/
/*! exports provided: StButtonDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StButtonDemoModule", function() { return StButtonDemoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stratio/egeo */ "../egeo/src/public_api.ts");
/* harmony import */ var _st_button_demo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./st-button-demo.component */ "./src/app/demos/st-button-demo/st-button-demo.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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




var StButtonDemoModule = /** @class */ (function () {
    function StButtonDemoModule() {
    }
    StButtonDemoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StDemoGeneratorModule"].withComponents({ components: [_st_button_demo_component__WEBPACK_IMPORTED_MODULE_3__["StButtonDemoComponent"]] }),
                _stratio_egeo__WEBPACK_IMPORTED_MODULE_2__["StDocsModule"]
            ],
            declarations: [_st_button_demo_component__WEBPACK_IMPORTED_MODULE_3__["StButtonDemoComponent"]],
            providers: []
        })
    ], StButtonDemoModule);
    return StButtonDemoModule;
}());



/***/ })

}]);
//# sourceMappingURL=default~demo-loader-module~st-button-demo-st-button-demo-module.js.map