(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"2v+p":function(e,t){e.exports='\x3c!--\r\n\r\n    \xa9 2017 Stratio Big Data Inc., Sucursal en Espa\xf1a.\r\n\r\n    This software is licensed under the Apache License, Version 2.0.\r\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n    See the terms of the License for more details.\r\n\r\n    SPDX-License-Identifier: Apache-2.0.\r\n\r\n--\x3e\r\n<section class="container-fluid">\r\n   <st-toggle-buttons class="toggle-buttons" [tabs]="tabs" [description]="description" (select)="onSelectTab($event)" qaTag="toggle-buttons"></st-toggle-buttons>\r\n</section>\r\n'},DfTy:function(e,t,n){"use strict";n.r(t);var o=n("CcnG"),r=n("Ip0R"),i=n("dIas"),s=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s},c=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},a=function(){function e(){this.description="My tabs: ",this.tabs=[{label:"Tab1",number:5,active:!0},{label:"Tab2",number:10,active:!1}]}return e.prototype.onSelectTab=function(e){console.log("Selected tab: "+e.label)},e=s([Object(o.Component)({selector:"st-toggle-buttons-demo",template:n("2v+p"),styles:[n("f5h7")]}),c("design:paramtypes",[])],e)}();n.d(t,"StToggleButtonsDemoModule",function(){return u});var l=function(e,t,n,o){var r,i=arguments.length,s=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,o);else for(var c=e.length-1;c>=0;c--)(r=e[c])&&(s=(i<3?r(s):i>3?r(t,n,s):r(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s},u=function(){function e(){}return e=l([Object(o.NgModule)({imports:[r.CommonModule,i.X,i.i.withComponents({components:[a]})],declarations:[a],providers:[]})],e)}()},f5h7:function(e,t){e.exports='@charset "UTF-8";\n/**\r\n * \xa9 2017 Stratio Big Data Inc., Sucursal en Espa\xf1a.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n.toggle-buttons {\n  padding: 20px 0;\n  display: block; }\n'}}]);