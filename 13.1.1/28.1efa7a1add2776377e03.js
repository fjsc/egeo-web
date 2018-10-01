(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{WCov:function(e,t){e.exports='\x3c!--\n\n    \xa9 2017 Stratio Big Data Inc., Sucursal en Espa\xf1a.\n\n    This software is licensed under the Apache License, Version 2.0.\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n    See the terms of the License for more details.\n\n    SPDX-License-Identifier: Apache-2.0.\n\n--\x3e\n\n<section class="col-sm-4">\n   <h1>Without form control</h1>\n   <st-input class="st-form-field" type="text" name="outForm" placeholder="Enter your name" value="Peter" default="def"\n             label="Name"></st-input>\n\n   <br>\n\n   <h1>Inside form</h1>\n\n   <form [formGroup]="myForm" novalidate>\n      <st-input class="st-form-field" type="text" formControlName="name" placeholder="Enter your name" label="Field"\n                default="default name"\n                contextualHelp="This is a normal field"></st-input>\n      <st-input class="st-form-field" type="text" formControlName="disabledField" placeholder="This field is disabled"\n                label="Disabled field"></st-input>\n      <st-input class="st-form-field" type="text" formControlName="disabledFieldWithValue"\n                placeholder="This field is disabled" label="Disabled field"></st-input>\n\n      <st-input class="st-form-field" type="text" formControlName="requiredField" placeholder="This field is required"\n                [errors]="requiredError" label="Required field" contextualHelp="This is a required field"></st-input>\n\n      <st-input class="st-form-field" type="text" formControlName="numberField"\n                placeholder="This is a number field" label="Number field" fieldType="number" step="0.6"></st-input>\n\n      <div class="st-form-field">\n         <label class="st-label">Native Input with st-input class</label>\n         <input class="st-input st-form-field" formControlName="requiredField"\n                placeholder="This field is created with st-input class"/>\n\n         <input class="st-input st-form-field" formControlName="numberField"\n                placeholder="Number field" type="number"/>\n      </div>\n      <div class="st-form-field">\n         <label class="st-label">Native disabled Input with class</label>\n         <input class="st-input st-form-field" formControlName="disabledField" placeholder="This field is disabled"/>\n      </div>\n   </form>\n\n   <button class="button button-primary" (click)="disableInput()">DISABLE/ENABLE INPUTS</button>\n</section>\n'},n1lH:function(e,t){e.exports='@charset "UTF-8";\n/**\n * \xa9 2017 Stratio Big Data Inc., Sucursal en Espa\xf1a.\n *\n * This software is licensed under the Apache License, Version 2.0.\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\n * See the terms of the License for more details.\n *\n * SPDX-License-Identifier: Apache-2.0.\n */\nst-input, input {\n  margin-bottom: 10px;\n  display: block; }\n'},oHLD:function(e,t,i){"use strict";i.r(t);var n=i("CcnG"),l=i("Ip0R"),s=i("dIas"),r=i("gIcY"),o=function(e,t,i,n){var l,s=arguments.length,r=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,n);else for(var o=e.length-1;o>=0;o--)(l=e[o])&&(r=(s<3?l(r):s>3?l(t,i,r):l(t,i))||r);return s>3&&r&&Object.defineProperty(t,i,r),r},a=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},d=function(){function e(e){this.fb=e,this.requiredError={required:"This field is required"},this.disabled=!1,this.myForm=e.group({name:new r.c("",[]),disabledField:new r.c("",[]),disabledFieldWithValue:new r.c("Disabled value",[]),requiredField:new r.c("",[r.l.required]),numberField:new r.c}),this.myForm.controls.disabledField.disable(),this.myForm.controls.disabledFieldWithValue.disable(),this.myForm.valueChanges.subscribe(function(e){return console.log(e)})}return e.prototype.disableInput=function(){this.disabled=!this.disabled,this.disabled?(this.myForm.controls.name.disable(),this.myForm.controls.disabledField.disable(),this.myForm.controls.disabledFieldWithValue.disable(),this.myForm.controls.requiredField.disable(),this.myForm.controls.numberField.disable()):(this.myForm.controls.name.enable(),this.myForm.controls.disabledField.enable(),this.myForm.controls.disabledFieldWithValue.enable(),this.myForm.controls.requiredField.enable(),this.myForm.controls.numberField.enable())},e=o([Object(n.Component)({selector:"st-input-demo",template:i("WCov"),styles:[i("n1lH")]}),a("design:paramtypes",[r.b])],e)}();i.d(t,"StInputDemoModule",function(){return u});var c=function(e,t,i,n){var l,s=arguments.length,r=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,n);else for(var o=e.length-1;o>=0;o--)(l=e[o])&&(r=(s<3?l(r):s>3?l(t,i,r):l(t,i))||r);return s>3&&r&&Object.defineProperty(t,i,r),r},u=function(){function e(){}return e=c([Object(n.NgModule)({imports:[l.b,s.x,s.i.withComponents({components:[d]}),r.e,r.k],declarations:[d],providers:[]})],e)}()}}]);