webpackJsonp([27],{1443:function(e,t,r){"use strict";var n=r(0);r.d(t,"a",(function(){return h}));var i=this&&this.__decorate||function(e,t,r,n){var i,_=arguments.length,h=_<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)h=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(h=(_<3?i(h):_>3?i(t,r,h):i(t,r))||h);return _>3&&h&&Object.defineProperty(t,r,h),h},_=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},h=(function(){function e(){}return e=i([r.i(n.Component)({selector:"main",template:r(695),styles:[r(1630)]}),_("design:paramtypes",[])],e)})()},1509:function(e,t,r){"use strict";var n=r(0),i=r(8),_=r(1443),h=r(1510);r.d(t,"a",(function(){return o}));var s=this&&this.__decorate||function(e,t,r,n){var i,_=arguments.length,h=_<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)h=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(h=(_<3?i(h):_>3?i(t,r,h):i(t,r))||h);return _>3&&h&&Object.defineProperty(t,r,h),h},l=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},o=(function(){function e(){}return e=s([r.i(n.NgModule)({imports:[i.CommonModule,h.a],declarations:[_.a]}),l("design:paramtypes",[])],e)})()},1510:function(e,t,r){"use strict";var n=r(58),i=r(1443);r.d(t,"a",(function(){return _}));var _=n.RouterModule.forChild([{path:"",component:i.a}])},1603:function(e,t,r){"use strict";var n=r(1443),i=r(45),_=r(16),h=r(39),s=r(31),l=r(30),o=r(34),a=r(1604),c=r(311),u=r(59),d=r(46),x=r(94),p=r(93);r.d(t,"a",(function(){return R}));var f=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},m=(function(){function e(){this._changed=!1,this.context=new n.a}return e.prototype.ngOnDetach=function(e,t,r){},e.prototype.ngOnDestroy=function(){},e.prototype.ngDoCheck=function(e,t,r){var n=this._changed;return this._changed=!1,n},e.prototype.checkHost=function(e,t,r,n){},e.prototype.handleEvent=function(e,t){return!0},e.prototype.subscribe=function(e,t){this._eventHandler=t},e})(),g=_.createRenderComponentType("",0,h.b.None,[],{}),y=(function(e){function t(r,n,i,_){e.call(this,t,g,s.a.HOST,r,n,i,_,l.b.CheckAlways)}return f(t,e),t.prototype.createInternal=function(e){return this._el_0=_.selectOrCreateRenderHostElement(this.renderer,"main",_.EMPTY_INLINE_ARRAY,e,null),this.compView_0=new E(this.viewUtils,this,0,this._el_0),this._MainComponent_0_3=new m,this.compView_0.create(this._MainComponent_0_3.context),this.init(this._el_0,this.renderer.directRenderer?null:[this._el_0],null),new o.a(0,this,this._el_0,this._MainComponent_0_3.context)},t.prototype.injectorGetInternal=function(e,t,r){return e===n.a&&0===t?this._MainComponent_0_3.context:r},t.prototype.detectChangesInternal=function(e){this._MainComponent_0_3.ngDoCheck(this,this._el_0,e),this.compView_0.internalDetectChanges(e)},t.prototype.destroyInternal=function(){this.compView_0.destroy()},t.prototype.visitRootNodesInternal=function(e,t){e(this._el_0,t)},t})(i.a),R=new o.b("main",y,n.a),T=[a.a],w=_.createRenderComponentType("",0,h.b.Emulated,T,{}),E=(function(e){function t(r,n,i,_){e.call(this,t,w,s.a.COMPONENT,r,n,i,_,l.b.CheckAlways)}return f(t,e),t.prototype.createInternal=function(e){var t=this.renderer.createViewRoot(this.parentElement);this._el_0=_.createRenderElement(this.renderer,t,"h1",new _.InlineArray2(2,"class","page-title"),null),this._text_1=this.renderer.createText(this._el_0,"Overview",null),this._text_2=this.renderer.createText(t,"\n\n",null),this._el_3=_.createRenderElement(this.renderer,t,"p",_.EMPTY_INLINE_ARRAY,null),this._text_4=this.renderer.createText(this._el_3,"\n   EGEO is the open-source component library used to build ",null),this._el_5=_.createRenderElement(this.renderer,this._el_3,"a",new _.InlineArray2(2,"href","http://www.stratio.com"),null),this._text_6=this.renderer.createText(this._el_5,"Stratio",null),this._text_7=this.renderer.createText(this._el_3,"'s UI. The goals are to reduce the time and complexity of interface building being more productive, improving the experience based in apply the same patterns and visuals across the whole ",null),this._el_8=_.createRenderElement(this.renderer,this._el_3,"a",new _.InlineArray2(2,"href","http://www.stratio.com"),null),this._text_9=this.renderer.createText(this._el_8,"Stratio",null),this._text_10=this.renderer.createText(this._el_3," applications being more consistent, and create a common and unified visual language that helps us to understand each other better laying the foundation for scalable growth.\n",null),this._text_11=this.renderer.createText(t,"\n\n",null),this._el_12=_.createRenderElement(this.renderer,t,"p",_.EMPTY_INLINE_ARRAY,null),this._text_13=this.renderer.createText(this._el_12,"\n    In this website, you'll find UI components, services and utilities but this is only one part of the project. You can discover more visiting the Github repositories of the project:\n",null),this._text_14=this.renderer.createText(t,"\n\n",null),this._el_15=_.createRenderElement(this.renderer,t,"ul",_.EMPTY_INLINE_ARRAY,null),this._text_16=this.renderer.createText(this._el_15,"\n    ",null),this._el_17=_.createRenderElement(this.renderer,this._el_15,"li",_.EMPTY_INLINE_ARRAY,null),this._el_18=_.createRenderElement(this.renderer,this._el_17,"a",new _.InlineArray2(2,"href","http://github.com/Stratio/egeo"),null),this._text_19=this.renderer.createText(this._el_18,"egeo",null),this._text_20=this.renderer.createText(this._el_17,": the library of components.",null),this._text_21=this.renderer.createText(this._el_15,"\n    ",null),this._el_22=_.createRenderElement(this.renderer,this._el_15,"li",_.EMPTY_INLINE_ARRAY,null),this._el_23=_.createRenderElement(this.renderer,this._el_22,"a",new _.InlineArray2(2,"href","http://github.com/Stratio/egeo-web"),null),this._text_24=this.renderer.createText(this._el_23,"egeo-web",null),this._text_25=this.renderer.createText(this._el_22,": The official website of Egeo where documentation will be available soon.",null),this._text_26=this.renderer.createText(this._el_15,"\n    ",null),this._el_27=_.createRenderElement(this.renderer,this._el_15,"li",_.EMPTY_INLINE_ARRAY,null),this._el_28=_.createRenderElement(this.renderer,this._el_27,"a",new _.InlineArray2(2,"href","http://github.com/Stratio/egeo-ui-base"),null),this._text_29=this.renderer.createText(this._el_28,"egeo-ui-base",null),this._text_30=this.renderer.createText(this._el_27," A Sass library that helps us to build our styles, including a rewritten Sass version of flexboxgrid.",null),this._text_31=this.renderer.createText(this._el_15,"\n    ",null),this._el_32=_.createRenderElement(this.renderer,this._el_15,"li",_.EMPTY_INLINE_ARRAY,null),this._el_33=_.createRenderElement(this.renderer,this._el_32,"a",new _.InlineArray2(2,"href","http://github.com/Stratio/egeo-theme"),null),this._text_34=this.renderer.createText(this._el_33,"egeo-theme",null),this._text_35=this.renderer.createText(this._el_32,": The egeo components are thematizable. This is the official theme used in the ",null),this._el_36=_.createRenderElement(this.renderer,this._el_32,"a",new _.InlineArray2(2,"href","http://www.stratio.com"),null),this._text_37=this.renderer.createText(this._el_36,"Stratio",null),this._text_38=this.renderer.createText(this._el_32,"'s applications.",null),this._text_39=this.renderer.createText(this._el_15,"\n    ",null),this._el_40=_.createRenderElement(this.renderer,this._el_15,"li",_.EMPTY_INLINE_ARRAY,null),this._el_41=_.createRenderElement(this.renderer,this._el_40,"a",new _.InlineArray2(2,"href","http://github.com/Stratio/egeo-starter"),null),this._text_42=this.renderer.createText(this._el_41,"egeo-starter",null),this._text_43=this.renderer.createText(this._el_40,": A Boilerplate project prepared for work with Egeo 1.x, Angular 2.x, TypeScript, Webpack, Karma, Jasmine and Sass.",null),this._text_44=this.renderer.createText(this._el_15,"\n",null),this._text_45=this.renderer.createText(t,"\n\n",null),this._el_46=_.createRenderElement(this.renderer,t,"h2",_.EMPTY_INLINE_ARRAY,null),this._text_47=this.renderer.createText(this._el_46,"Get Started",null),this._text_48=this.renderer.createText(t,"\n\n",null),this._el_49=_.createRenderElement(this.renderer,t,"p",_.EMPTY_INLINE_ARRAY,null),this._text_50=this.renderer.createText(this._el_49,"\n    Egeo is compounded of several projects to build the whole functionality. The main one is the Anguar 2 library that includes the components, services and utilities. You can read more about the library, how to work with, how to install and much more in the ",null),this._el_51=_.createRenderElement(this.renderer,this._el_49,"a",new _.InlineArray2(2,"href","https://github.com/Stratio/egeo"),null),this._text_52=this.renderer.createText(this._el_51,"Readme",null),this._text_53=this.renderer.createText(this._el_49," and the ",null),this._el_54=_.createRenderElement(this.renderer,this._el_49,"a",new _.InlineArray2(2,"href","https://github.com/Stratio/egeo/wiki"),null),this._text_55=this.renderer.createText(this._el_54,"Wiki",null),this._text_56=this.renderer.createText(this._el_49," of the Github project.\n",null),this._text_57=this.renderer.createText(t,"\n\n",null),this._el_58=_.createRenderElement(this.renderer,t,"p",_.EMPTY_INLINE_ARRAY,null),this._text_59=this.renderer.createText(this._el_58,"\n    We use Egeo Themes to add styles to the components. By default, ",null),this._el_60=_.createRenderElement(this.renderer,this._el_58,"a",new _.InlineArray2(2,"href","http://www.stratio.com"),null),this._text_61=this.renderer.createText(this._el_60,"Stratio",null),this._text_62=this.renderer.createText(this._el_58," provides the ",null),this._el_63=_.createRenderElement(this.renderer,this._el_58,"a",new _.InlineArray2(2,"href","https://github.com/Stratio/egeo-theme"),null),this._text_64=this.renderer.createText(this._el_63,"official egeo theme",null),this._text_65=this.renderer.createText(this._el_58," which one the ",null),this._el_66=_.createRenderElement(this.renderer,this._el_58,"a",new _.InlineArray2(2,"href","http://www.stratio.com"),null),this._text_67=this.renderer.createText(this._el_66,"Stratio",null),this._text_68=this.renderer.createText(this._el_58,"'s apps are built. However, you can build your own theme using the ",null),this._el_69=_.createRenderElement(this.renderer,this._el_58,"a",new _.InlineArray2(2,"href","https://github.com/Stratio/egeo-ui-base"),null),this._text_70=this.renderer.createText(this._el_69,"Egeo UI Base library",null),this._text_71=this.renderer.createText(this._el_58,".\n",null),this._text_72=this.renderer.createText(t,"\n\n",null),this._el_73=_.createRenderElement(this.renderer,t,"p",_.EMPTY_INLINE_ARRAY,null),this._text_74=this.renderer.createText(this._el_73,"\n    We also provide a ",null),this._el_75=_.createRenderElement(this.renderer,this._el_73,"a",new _.InlineArray2(2,"href","https://github.com/Stratio/egeo-starter"),null),this._text_76=this.renderer.createText(this._el_75,"Starter",null),this._text_77=this.renderer.createText(this._el_73," you can use to begin a new Angular 2 app with Egeo ready to code with the whole dependencies you could need installed and configured (like Egeo, egeo-theme, Karma and Docker). Check the ",null),this._el_78=_.createRenderElement(this.renderer,this._el_73,"a",new _.InlineArray2(2,"href","https://github.com/Stratio/egeo-starter"),null),this._text_79=this.renderer.createText(this._el_78,"Readme",null),this._text_80=this.renderer.createText(this._el_73," and the ",null),this._el_81=_.createRenderElement(this.renderer,this._el_73,"a",new _.InlineArray2(2,"href","https://github.com/Stratio/egeo-starter/wiki"),null),this._text_82=this.renderer.createText(this._el_81,"Wiki",null),this._text_83=this.renderer.createText(this._el_73," of the project to know more.\n",null),this._text_84=this.renderer.createText(t,"\n\n",null),this._el_85=_.createRenderElement(this.renderer,t,"h2",_.EMPTY_INLINE_ARRAY,null),this._text_86=this.renderer.createText(this._el_85,"Changelog",null),this._text_87=this.renderer.createText(t,"\n\n",null),this._el_88=_.createRenderElement(this.renderer,t,"p",_.EMPTY_INLINE_ARRAY,null),this._text_89=this.renderer.createText(this._el_88,"\n   ",null),this._el_90=_.createRenderElement(this.renderer,this._el_88,"a",new _.InlineArray2(2,"routerLink","/changelog"),null),this._RouterLinkWithHref_90_3=new c.b(this.parentView.injectorGet(u.a,this.parentIndex),this.parentView.injectorGet(d.a,this.parentIndex),this.parentView.injectorGet(x.a,this.parentIndex)),this._text_91=this.renderer.createText(this._el_90,"Changelog",null),this._text_92=this.renderer.createText(this._el_88,"\n",null),this._text_93=this.renderer.createText(t,"\n",null);var r=_.subscribeToRenderElement(this,this._el_90,new _.InlineArray2(2,"click",null),this.eventHandler(this.handleEvent_90));return this.init(null,this.renderer.directRenderer?null:[this._el_0,this._text_1,this._text_2,this._el_3,this._text_4,this._el_5,this._text_6,this._text_7,this._el_8,this._text_9,this._text_10,this._text_11,this._el_12,this._text_13,this._text_14,this._el_15,this._text_16,this._el_17,this._el_18,this._text_19,this._text_20,this._text_21,this._el_22,this._el_23,this._text_24,this._text_25,this._text_26,this._el_27,this._el_28,this._text_29,this._text_30,this._text_31,this._el_32,this._el_33,this._text_34,this._text_35,this._el_36,this._text_37,this._text_38,this._text_39,this._el_40,this._el_41,this._text_42,this._text_43,this._text_44,this._text_45,this._el_46,this._text_47,this._text_48,this._el_49,this._text_50,this._el_51,this._text_52,this._text_53,this._el_54,this._text_55,this._text_56,this._text_57,this._el_58,this._text_59,this._el_60,this._text_61,this._text_62,this._el_63,this._text_64,this._text_65,this._el_66,this._text_67,this._text_68,this._el_69,this._text_70,this._text_71,this._text_72,this._el_73,this._text_74,this._el_75,this._text_76,this._text_77,this._el_78,this._text_79,this._text_80,this._el_81,this._text_82,this._text_83,this._text_84,this._el_85,this._text_86,this._text_87,this._el_88,this._text_89,this._el_90,this._text_91,this._text_92,this._text_93],[r]),null},t.prototype.injectorGetInternal=function(e,t,r){return e===p.b&&90<=t&&t<=91?this._RouterLinkWithHref_90_3.context:r},t.prototype.detectChangesInternal=function(e){this._RouterLinkWithHref_90_3.check_routerLink("/changelog",e,!1),this._RouterLinkWithHref_90_3.ngDoCheck(this,this._el_90,e),this._RouterLinkWithHref_90_3.checkHost(this,this,this._el_90,e)},t.prototype.destroyInternal=function(){this._RouterLinkWithHref_90_3.ngOnDestroy()},t.prototype.handleEvent_90=function(e,t){this.markPathToRootAsCheckOnce();var r=!0;return r=this._RouterLinkWithHref_90_3.handleEvent(e,t)&&r},t})(i.a)},1604:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n=['.page-title[_ngcontent-%COMP%]{color:#242424;font-family:Brandon Text;font-size:2.12rem;font-weight:400;margin-bottom:10px;text-transform:uppercase}.page-title[_ngcontent-%COMP%]:after{border-bottom:2px solid;border-color:#b5c1c5;content:" ";display:block;height:10px;width:100%}main[_ngcontent-%COMP%]{color:#555;line-height:1.5em}ul[_ngcontent-%COMP%]{list-style:none;padding:0 0 15px 25px}li[_ngcontent-%COMP%]:before{content:"-";margin-right:.5em}p[_ngcontent-%COMP%]{color:#777;font-size:1rem;padding:0 0 15px}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{padding:30px 0 25px}']},1630:function(e,t,r){var n=r(92);e.exports="string"==typeof n?n:n.toString()},667:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(203),i=r(1509),_=r(281),h=r(205),s=r(113),l=r(1603),o=r(202),a=r(1443),c=r(91);r.d(t,"MainModuleNgFactory",(function(){return x}));var u=this&&this.__extends||function(e,t){function r(){this.constructor=e}for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)},d=(function(e){function t(t){e.call(this,t,[l.a],[])}return u(t,e),Object.defineProperty(t.prototype,"_NgLocalization_3",{get:function(){return null==this.__NgLocalization_3&&(this.__NgLocalization_3=new s.c(this.parent.get(o.a))),this.__NgLocalization_3},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"_ROUTES_4",{get:function(){return null==this.__ROUTES_4&&(this.__ROUTES_4=[[{path:"",component:a.a}]]),this.__ROUTES_4},enumerable:!0,configurable:!0}),t.prototype.createInternal=function(){return this._CommonModule_0=new _.a,this._RouterModule_1=new h.g(this.parent.get(h.j,null)),this._MainModule_2=new i.a,this._MainModule_2},t.prototype.getInternal=function(e,t){return e===_.a?this._CommonModule_0:e===h.g?this._RouterModule_1:e===i.a?this._MainModule_2:e===s.b?this._NgLocalization_3:e===c.a?this._ROUTES_4:t},t.prototype.destroyInternal=function(){},t})(n.a),x=new n.b(d,i.a)}});