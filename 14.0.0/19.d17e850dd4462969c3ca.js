(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"/utg":function(e,t){e.exports="@charset \"UTF-8\";\n/**\r\n * \xa9 2017 Stratio Big Data Inc., Sucursal en Espa\xf1a.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\nh1 {\n  font-family: 'Nunito Sans Bold';\n  font-size: 20px;\n  margin-bottom: 20px;\n  padding: 0;\n  line-height: 25px;\n  font-weight: lighter; }\np {\n  font-family: 'Nunito Sans';\n  margin: 0;\n  padding: 0; }\n.separator {\n  display: block;\n  margin: 10px;\n  overflow: hidden; }\nst-select {\n  width: 100%;\n  position: relative;\n  display: block; }\nform {\n  border: 1px solid black;\n  padding: 20px; }\n"},N7SP:function(e,t,n){"use strict";n.r(t);var r=n("Ip0R"),o=n("CcnG"),i=n("gIcY"),s=n("dIas"),a=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s},l=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},p=function(){function e(e){this._fb=e,this.options=[],this.model={option1:null},this.reactiveErrorMessage=void 0,this.disabled=!1,this.options.push({label:"Select an option",value:void 0});for(var t=0;t<10;t++)this.options.push({label:"option-"+t,value:t});this.model.option1=3,this.options[5].selected=!0,this.reactiveForm=this._fb.group({option1:[this.model.option1,i.l.required]})}return e.prototype.onSelect=function(e){void 0===e&&(this.model.option1=void 0)},e.prototype.changeDisabled=function(){this.disabled=!this.disabled,this.disabled?(this.reactiveForm.get("option1").disable(),this.templateDrivenForm.controls.option1.disable()):(this.reactiveForm.get("option1").enable(),this.templateDrivenForm.controls.option1.enable())},e.prototype.onSubmitReactiveForm=function(){this.model.option1=this.reactiveForm.value.option1,this.model.option2=this.reactiveForm.value.option2},e.prototype.changeOptions=function(){this.options=[];for(var e=0;e<10;e++)this.options.push({label:"new options-"+e,value:10+e})},a([Object(o.ViewChild)("templateDrivenForm"),l("design:type",i.i)],e.prototype,"templateDrivenForm",void 0),e=a([Object(o.Component)({selector:"select-demo",template:n("bqeX"),styles:[n("/utg")]}),l("design:paramtypes",[i.b])],e)}();n.d(t,"StSelectDemoModule",function(){return d});var c=function(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s},d=function(){function e(){}return e=c([Object(o.NgModule)({imports:[r.CommonModule,s.N,i.e,i.k,s.i.withComponents({components:[p]})],declarations:[p]})],e)}()},bqeX:function(e,t){e.exports='\x3c!--\r\n\r\n    \xa9 2017 Stratio Big Data Inc., Sucursal en Espa\xf1a.\r\n\r\n    This software is licensed under the Apache License, Version 2.0.\r\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n    See the terms of the License for more details.\r\n\r\n    SPDX-License-Identifier: Apache-2.0.\r\n\r\n--\x3e\r\n<section class="container-liquid">\r\n   <st-select placeholder="Select option" [options]="options" [disabled]="disabled" [default]="options[2].value">\r\n   </st-select>\r\n\r\n   <div class="separator"></div>\r\n   <button class="button button-primary" (click)="changeOptions()">Change options</button>\r\n\r\n   <div class="separator"></div>\r\n   <div class="separator"></div>\r\n   <div class="separator"></div>\r\n\r\n   <h1>TEMPLATE DRIVEN EXAMPLE</h1>\r\n   <form #templateDrivenForm="ngForm" novalidate autocomplete="off" class="col-md-3">\r\n      <div class="form-group">\r\n\r\n         <st-select\r\n            stCheckValidations\r\n            label="Option 1"\r\n            tooltip="Prueba"\r\n            placeholder="Select option"\r\n            [options]="options"\r\n            [(ngModel)]="model.option1"\r\n            name="option1"\r\n            required\r\n            id="test"\r\n            (select)="onSelect($event)"\r\n            class="st-form-field"\r\n         >\r\n         </st-select>\r\n         <div class="separator"></div>\r\n\r\n\r\n         Disabled select\r\n\r\n         <st-select\r\n            stCheckValidations\r\n            label="Option 1"\r\n            tooltip="Prueba"\r\n            placeholder="Select option"\r\n            [options]="options"\r\n            [(ngModel)]="model.option1"\r\n            name="option1"\r\n            required\r\n            [disabled]="true"\r\n            id="disabled-test"\r\n            (select)="onSelect($event)"\r\n            class="st-form-field"\r\n         >\r\n         </st-select>\r\n\r\n         <button class="button button-primary"><span>Submit</span></button>\r\n\r\n         <div class="separator"></div>\r\n\r\n         <p>Form value: {{ templateDrivenForm.value | json }}</p>\r\n         <p>Form status: {{ templateDrivenForm.disabled ? \'DISABLED\' : templateDrivenForm.valid ? \'VALID\' : \'INVALID\' }}</p>\r\n      </div>\r\n   </form>\r\n\r\n   <div class="separator"></div>\r\n   <div class="separator"></div>\r\n   <div class="separator"></div>\r\n\r\n   <h1>MODEL DRIVEN / REACTIVE EXAMPLE</h1>\r\n   <form [formGroup]="reactiveForm" novalidate autocomplete="off" class="col-md-3">\r\n      <div class="form-group">\r\n\r\n         <st-select\r\n         stCheckValidations\r\n         formControlName="option1"\r\n         placeholder="Select option"\r\n         [options]="options"\r\n         class="st-form-field"\r\n         >\r\n         </st-select>\r\n      </div>\r\n\r\n      <div class="separator"></div>\r\n\r\n      <button class="button button-primary"><span>Submit</span></button>\r\n\r\n      <div class="separator"></div>\r\n\r\n      <p>Form value: {{ reactiveForm.value | json }}</p>\r\n      <p>Form status: {{ reactiveForm.status | json }}</p>\r\n   </form>\r\n\r\n\r\n   <h1>TEMPLATE DRIVEN EXAMPLE</h1>\r\n   <br>\r\n   <br>\r\n   <button class="button button-primary" (click)="changeDisabled()">Change disable</button>\r\n\r\n   <div class="separator"></div>\r\n   <div class="separator"></div>\r\n   <div class="separator"></div>\r\n   <h1>SEARCH OPTION EXAMPLE</h1>\r\n   <st-select [search]="true" placeholder="Select option" [options]="options" [disabled]="disabled" [default]="options[2].value">\r\n   </st-select>\r\n\r\n   <div class="separator"></div>\r\n\r\n\r\n</section>\r\n'}}]);