(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{BhFI:function(t,e,n){"use strict";n.r(e);var r=n("CcnG"),o=n("Ip0R"),i=n("dIas"),s=function(t,e,n,r){var o,i=arguments.length,s=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(s=(i<3?o(s):i>3?o(e,n,s):o(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s},c=function(){function t(){this.showFullscreenLayout=!1}return t.prototype.onClickShowButton=function(){this.showFullscreenLayout=!0},t.prototype.onClickHideButton=function(){this.showFullscreenLayout=!1},t=s([Object(r.Component)({selector:"st-fullscreen-layout-demo",template:n("Tk/0"),styles:[n("zKsP")]})],t)}();n.d(e,"StFullscreenLayoutDemoModule",function(){return u});var l=function(t,e,n,r){var o,i=arguments.length,s=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(s=(i<3?o(s):i>3?o(e,n,s):o(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s},u=function(){function t(){}return t=l([Object(r.NgModule)({imports:[o.CommonModule,i.r,i.i.withComponents({components:[c]})],declarations:[c]})],t)}()},"Tk/0":function(t,e){t.exports='\x3c!--\r\n\r\n    \xa9 2017 Stratio Big Data Inc., Sucursal en Espa\xf1a.\r\n\r\n    This software is licensed under the Apache License, Version 2.0.\r\n    This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n    without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n    See the terms of the License for more details.\r\n\r\n    SPDX-License-Identifier: Apache-2.0.\r\n\r\n--\x3e\r\n\r\n<section class="container-liquid demo-layout">\r\n   <p class="introduction">This component is useful to display any content using the entire screen. It can be used\r\n      customizing its title, header buttons and content</p>\r\n\r\n   <span class="separator"></span>\r\n\r\n   <button class="button button-primary" (click)="onClickShowButton()">Show full screen layout</button>\r\n\r\n   <div *ngIf="showFullscreenLayout">\r\n      <st-fullscreen-layout>\r\n         <p class="st-fullscreen-layout-title"><i class="icon-home"></i>Customized title</p>\r\n         <div class="st-fullscreen-layout-buttons">\r\n            <button class="button button-secondary-line button-separator" (click)="onClickHideButton()">Cancel</button>\r\n            <button class="button button-primary" (click)="onClickHideButton()">Save</button>\r\n         </div>\r\n         <div class="st-fullscreen-layout-content">\r\n            <h1>TEST</h1>\r\n         </div>\r\n      </st-fullscreen-layout>\r\n\r\n   </div>\r\n</section>\r\n'},zKsP:function(t,e){t.exports='@charset "UTF-8";\n/**\r\n * \xa9 2017 Stratio Big Data Inc., Sucursal en Espa\xf1a.\r\n *\r\n * This software is licensed under the Apache License, Version 2.0.\r\n * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\r\n * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.\r\n * See the terms of the License for more details.\r\n *\r\n * SPDX-License-Identifier: Apache-2.0.\r\n */\n.button-separator {\n  margin-right: 30px; }\n.st-fullscreen-layout-title i {\n  margin-right: 5px; }\n'}}]);