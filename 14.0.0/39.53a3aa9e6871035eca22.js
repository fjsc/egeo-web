(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{"5qVq":function(e,t,n){"use strict";n.r(t);var o=n("CcnG"),r=n("Ip0R"),i=n("dIas"),l=function(e,t,n,o){var r,i=arguments.length,l=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(l=(i<3?r(l):i>3?r(t,n,l):r(t,n))||l);return i>3&&l&&Object.defineProperty(t,n,l),l},a=function(){function e(){}return e.prototype.onUploadValidFile=function(e){console.log("uploaded a valid file:",e)},e.prototype.onUploadInvalidFile=function(){console.log("uploaded an invalid file:")},e=l([Object(o.Component)({selector:"st-file-button-demo",template:n("QsHO"),styles:[n("yRoy")]})],e)}();n.d(t,"StFileButtonDemoModule",function(){return c});var s=function(e,t,n,o){var r,i=arguments.length,l=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(l=(i<3?r(l):i>3?r(t,n,l):r(t,n))||l);return i>3&&l&&Object.defineProperty(t,n,l),l},c=function(){function e(){}return e=s([Object(o.NgModule)({imports:[r.CommonModule,i.m,i.i.withComponents({components:[a]})],declarations:[a],providers:[]})],e)}()},QsHO:function(e,t){e.exports='\x3c!--\r\n\r\n    \xa9 2017 Stratio Big Data Inc., Sucursal en Espa\xf1a.\r\n\r\n    This software is licensed under the Apache License, Version 2.0.\r\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n    See the terms of the License for more details.\r\n\r\n    SPDX-License-Identifier: Apache-2.0.\r\n\r\n--\x3e\r\n\r\n<section class="container-liquid">\r\n   <div class="example">\r\n      <h1 class="example-title"> Default file button </h1>\r\n      <st-file-button text="IMPORT" accepted=\'json\'\r\n                      (selected)="onUploadValidFile($event)" (error)="onUploadInvalidFile()">\r\n      </st-file-button>\r\n   </div>\r\n   <div class="example">\r\n      <h1 class="example-title"> Secondary link button </h1>\r\n      <div class="col-md-3">\r\n\r\n         <st-file-button text="Upload Json" accepted=\'json\' buttonClass="button button-link-secondary"\r\n                         (selected)="onUploadValidFile($event)" (error)="onUploadInvalidFile()">\r\n         </st-file-button>\r\n      </div>\r\n   </div>\r\n\r\n</section>\r\n'},yRoy:function(e,t){e.exports='@charset "UTF-8";\n/**\r\n * \xa9 2017 Stratio Big Data Inc., Sucursal en Espa\xf1a.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n.example {\n  padding-bottom: 30px; }\n.example-title {\n  padding-bottom: 10px; }\n'}}]);