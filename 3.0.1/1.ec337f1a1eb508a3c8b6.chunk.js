webpackJsonp([1],{AfCp:function(e,t,n){"use strict";!function(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}(n("KGhX"));var r=n("/oeL"),s=n("KGhX"),i=function(){function e(){}return e}();i.decorators=[{type:r.NgModule,args:[{declarations:[s.MarkdownToHtmlPipe],exports:[s.MarkdownToHtmlPipe]}]}],i.ctorParameters=function(){return[]},t.MarkdownToHtmlModule=i},KGhX:function(e,t,n){"use strict";var r=n("/oeL"),s=n("yDcv"),i=function(){function e(){}return e.prototype.transform=function(e,t){return null==e?"":s(e,t)},e.setOptions=function(e){s.setOptions(e)},e}();i.decorators=[{type:r.Pipe,args:[{name:"MarkdownToHtml"}]}],i.ctorParameters=function(){return[]},t.MarkdownToHtmlPipe=i},c0Rr:function(e,t,n){"use strict";function r(e){return i["\u0275vid"](0,[i["\u0275pid"](0,a.MarkdownToHtmlPipe,[]),(e()(),i["\u0275ted"](null,["\n\n"])),(e()(),i["\u0275eld"](0,null,null,1,"egeo-title",[["title","Changelog"]],null,null,null,p.b,p.a)),i["\u0275did"](49152,null,0,u.a,[],{title:[0,"title"]},null),(e()(),i["\u0275ted"](null,["\n"])),(e()(),i["\u0275eld"](0,null,null,1,"div",[["class","changelog"]],[[8,"innerHTML",1]],null,null,null,null)),i["\u0275ppd"](1),(e()(),i["\u0275ted"](null,["\n"]))],function(e,t){e(t,3,0,"Changelog")},function(e,t){var n=t.component;e(t,5,0,i["\u0275unv"](t,5,0,e(t,6,0,i["\u0275nov"](t,0),n.changelog)))})}function s(e){return i["\u0275vid"](0,[(e()(),i["\u0275eld"](0,null,null,1,"changelog",[],null,null,null,r,m)),i["\u0275did"](245760,null,0,d,[g],null,null)],function(e,t){e(t,1,0)},null)}Object.defineProperty(t,"__esModule",{value:!0});var i=n("/oeL"),o=function(){function e(){}return e}(),l=n("LI+7"),h=['@charset "UTF-8";'],a=n("KGhX"),p=n("Se6Y"),u=n("wTRB"),c=n("CPp0"),g=(n("5v8a"),function(){function e(e){this.http=e}return e.prototype.getChangelog=function(){return this.http.get(location.pathname+"assets/CHANGELOG.md").map(function(e){return e.text()})},e.ctorParameters=function(){return[{type:c.d}]},e}()),d=function(){function e(e){this.service=e,this.changelog=""}return e.prototype.ngOnInit=function(){var e=this;this.service.getChangelog().subscribe(function(t){return e.changelog=t})},e.prototype.ngOnDestroy=function(){this.sub&&this.sub.unsubscribe()},e.ctorParameters=function(){return[{type:g}]},e}(),f=[h],m=i["\u0275crt"]({encapsulation:0,styles:f,data:{}}),k=i["\u0275ccf"]("changelog",d,s,{},{},[]),b=n("qbdv"),x=n("bm2B"),y=n("z3WC"),_=n("BkNc"),w=n("pTHf"),v=n("9Qcf"),S=n("T2Au"),L=n("AfCp");n.d(t,"ChangelogModuleNgFactory",function(){return $});var $=i["\u0275cmf"](o,[],function(e){return i["\u0275mod"]([i["\u0275mpd"](512,i.ComponentFactoryResolver,i["\u0275CodegenComponentFactoryResolver"],[[8,[l._16,k]],[3,i.ComponentFactoryResolver],i.NgModuleRef]),i["\u0275mpd"](4608,b.NgLocalization,b.NgLocaleLocalization,[i.LOCALE_ID]),i["\u0275mpd"](4608,x.A,x.A,[]),i["\u0275mpd"](4608,x.d,x.d,[]),i["\u0275mpd"](4608,y.J,y.J,[]),i["\u0275mpd"](4608,y.e,y.e,[]),i["\u0275mpd"](4608,y.b,y.b,[]),i["\u0275mpd"](4608,g,g,[c.d]),i["\u0275mpd"](512,_.p,_.p,[[2,_.u],[2,_.l]]),i["\u0275mpd"](512,b.CommonModule,b.CommonModule,[]),i["\u0275mpd"](512,y.c,y.c,[]),i["\u0275mpd"](512,y.f,y.f,[]),i["\u0275mpd"](512,y.h,y.h,[]),i["\u0275mpd"](512,y.i,y.i,[]),i["\u0275mpd"](512,y.j,y.j,[]),i["\u0275mpd"](512,y.K,y.K,[]),i["\u0275mpd"](512,y.l,y.l,[]),i["\u0275mpd"](512,y.m,y.m,[]),i["\u0275mpd"](512,y.o,y.o,[]),i["\u0275mpd"](512,y._51,y._51,[]),i["\u0275mpd"](512,y.X,y.X,[]),i["\u0275mpd"](512,y._52,y._52,[]),i["\u0275mpd"](512,x.x,x.x,[]),i["\u0275mpd"](512,x.j,x.j,[]),i["\u0275mpd"](512,x.u,x.u,[]),i["\u0275mpd"](512,y.w,y.w,[]),i["\u0275mpd"](512,y.R,y.R,[]),i["\u0275mpd"](512,y.p,y.p,[]),i["\u0275mpd"](512,y.q,y.q,[]),i["\u0275mpd"](512,y.r,y.r,[]),i["\u0275mpd"](512,y.s,y.s,[]),i["\u0275mpd"](512,y.t,y.t,[]),i["\u0275mpd"](512,y.u,y.u,[]),i["\u0275mpd"](512,y.O,y.O,[]),i["\u0275mpd"](512,w.VirtualScrollModule,w.VirtualScrollModule,[]),i["\u0275mpd"](512,y.x,y.x,[]),i["\u0275mpd"](512,y.B,y.B,[]),i["\u0275mpd"](512,y.G,y.G,[]),i["\u0275mpd"](512,y.H,y.H,[]),i["\u0275mpd"](512,y.M,y.M,[]),i["\u0275mpd"](512,y.L,y.L,[]),i["\u0275mpd"](512,y.P,y.P,[]),i["\u0275mpd"](512,y.Q,y.Q,[]),i["\u0275mpd"](512,y.S,y.S,[]),i["\u0275mpd"](512,y.T,y.T,[]),i["\u0275mpd"](512,y.U,y.U,[]),i["\u0275mpd"](512,y.V,y.V,[]),i["\u0275mpd"](512,y.W,y.W,[]),i["\u0275mpd"](512,y.Y,y.Y,[]),i["\u0275mpd"](512,y.Z,y.Z,[]),i["\u0275mpd"](512,y._0,y._0,[]),i["\u0275mpd"](512,y.a,y.a,[]),i["\u0275mpd"](512,v.b,v.b,[]),i["\u0275mpd"](512,S.a,S.a,[]),i["\u0275mpd"](512,L.MarkdownToHtmlModule,L.MarkdownToHtmlModule,[]),i["\u0275mpd"](512,o,o,[]),i["\u0275mpd"](1024,_.j,function(){return[[{path:"",component:d}]]},[])])})},yDcv:function(e,t,n){(function(t){(function(){function t(e){this.tokens=[],this.tokens.links={},this.options=e||p.defaults,this.rules=u.normal,this.options.gfm&&(this.options.tables?this.rules=u.tables:this.rules=u.gfm)}function n(e,t){if(this.options=t||p.defaults,this.links=e,this.rules=c.normal,this.renderer=this.options.renderer||new r,this.renderer.options=this.options,!this.links)throw new Error("Tokens array requires a `links` property.");this.options.gfm?this.options.breaks?this.rules=c.breaks:this.rules=c.gfm:this.options.pedantic&&(this.rules=c.pedantic)}function r(e){this.options=e||{}}function s(e){this.tokens=[],this.token=null,this.options=e||p.defaults,this.options.renderer=this.options.renderer||new r,this.renderer=this.options.renderer,this.renderer.options=this.options}function i(e,t){return e.replace(t?/&/g:/&(?!#?\w+;)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function o(e){return e.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/g,function(e,t){return t=t.toLowerCase(),"colon"===t?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""})}function l(e,t){return e=e.source,t=t||"",function n(r,s){return r?(s=s.source||s,s=s.replace(/(^|[^\[])\^/g,"$1"),e=e.replace(r,s),n):new RegExp(e,t)}}function h(){}function a(e){for(var t,n,r=1;r<arguments.length;r++){t=arguments[r];for(n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}function p(e,n,r){if(r||"function"==typeof n){r||(r=n,n=null),n=a({},p.defaults,n||{});var o,l,h=n.highlight,u=0;try{o=t.lex(e,n)}catch(e){return r(e)}l=o.length;var c=function(e){if(e)return n.highlight=h,r(e);var t;try{t=s.parse(o,n)}catch(t){e=t}return n.highlight=h,e?r(e):r(null,t)};if(!h||h.length<3)return c();if(delete n.highlight,!l)return c();for(;u<o.length;u++)!function(e){"code"!==e.type?--l||c():h(e.text,e.lang,function(t,n){return t?c(t):null==n||n===e.text?--l||c():(e.text=n,e.escaped=!0,void(--l||c()))})}(o[u])}else try{return n&&(n=a({},p.defaults,n)),s.parse(t.lex(e,n),n)}catch(e){if(e.message+="\nPlease report this to https://github.com/chjj/marked.",(n||p.defaults).silent)return"<p>An error occured:</p><pre>"+i(e.message+"",!0)+"</pre>";throw e}}var u={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:h,hr:/^( *[-*_]){3,} *(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,nptable:h,lheading:/^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,blockquote:/^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,list:/^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:/^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,table:h,paragraph:/^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,text:/^[^\n]+/};u.bullet=/(?:[*+-]|\d+\.)/,u.item=/^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/,u.item=l(u.item,"gm")(/bull/g,u.bullet)(),u.list=l(u.list)(/bull/g,u.bullet)("hr","\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))")("def","\\n+(?="+u.def.source+")")(),u.blockquote=l(u.blockquote)("def",u.def)(),u._tag="(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b",u.html=l(u.html)("comment",/<!--[\s\S]*?-->/)("closed",/<(tag)[\s\S]+?<\/\1>/)("closing",/<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g,u._tag)(),u.paragraph=l(u.paragraph)("hr",u.hr)("heading",u.heading)("lheading",u.lheading)("blockquote",u.blockquote)("tag","<"+u._tag)("def",u.def)(),u.normal=a({},u),u.gfm=a({},u.normal,{fences:/^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\s*\1 *(?:\n+|$)/,paragraph:/^/,heading:/^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/}),u.gfm.paragraph=l(u.paragraph)("(?!","(?!"+u.gfm.fences.source.replace("\\1","\\2")+"|"+u.list.source.replace("\\1","\\3")+"|")(),u.tables=a({},u.gfm,{nptable:/^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,table:/^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/}),t.rules=u,t.lex=function(e,n){return new t(n).lex(e)},t.prototype.lex=function(e){return e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    ").replace(/\u00a0/g," ").replace(/\u2424/g,"\n"),this.token(e,!0)},t.prototype.token=function(e,t,n){for(var r,s,i,o,l,h,a,p,c,e=e.replace(/^ +$/gm,"");e;)if((i=this.rules.newline.exec(e))&&(e=e.substring(i[0].length),i[0].length>1&&this.tokens.push({type:"space"})),i=this.rules.code.exec(e))e=e.substring(i[0].length),i=i[0].replace(/^ {4}/gm,""),this.tokens.push({type:"code",text:this.options.pedantic?i:i.replace(/\n+$/,"")});else if(i=this.rules.fences.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"code",lang:i[2],text:i[3]||""});else if(i=this.rules.heading.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"heading",depth:i[1].length,text:i[2]});else if(t&&(i=this.rules.nptable.exec(e))){for(e=e.substring(i[0].length),h={type:"table",header:i[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:i[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:i[3].replace(/\n$/,"").split("\n")},p=0;p<h.align.length;p++)/^ *-+: *$/.test(h.align[p])?h.align[p]="right":/^ *:-+: *$/.test(h.align[p])?h.align[p]="center":/^ *:-+ *$/.test(h.align[p])?h.align[p]="left":h.align[p]=null;for(p=0;p<h.cells.length;p++)h.cells[p]=h.cells[p].split(/ *\| */);this.tokens.push(h)}else if(i=this.rules.lheading.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"heading",depth:"="===i[2]?1:2,text:i[1]});else if(i=this.rules.hr.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"hr"});else if(i=this.rules.blockquote.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"blockquote_start"}),i=i[0].replace(/^ *> ?/gm,""),this.token(i,t,!0),this.tokens.push({type:"blockquote_end"});else if(i=this.rules.list.exec(e)){for(e=e.substring(i[0].length),o=i[2],this.tokens.push({type:"list_start",ordered:o.length>1}),i=i[0].match(this.rules.item),r=!1,c=i.length,p=0;p<c;p++)h=i[p],a=h.length,h=h.replace(/^ *([*+-]|\d+\.) +/,""),~h.indexOf("\n ")&&(a-=h.length,h=this.options.pedantic?h.replace(/^ {1,4}/gm,""):h.replace(new RegExp("^ {1,"+a+"}","gm"),"")),this.options.smartLists&&p!==c-1&&(l=u.bullet.exec(i[p+1])[0],o===l||o.length>1&&l.length>1||(e=i.slice(p+1).join("\n")+e,p=c-1)),s=r||/\n\n(?!\s*$)/.test(h),p!==c-1&&(r="\n"===h.charAt(h.length-1),s||(s=r)),this.tokens.push({type:s?"loose_item_start":"list_item_start"}),this.token(h,!1,n),this.tokens.push({type:"list_item_end"});this.tokens.push({type:"list_end"})}else if(i=this.rules.html.exec(e))e=e.substring(i[0].length),this.tokens.push({type:this.options.sanitize?"paragraph":"html",pre:!this.options.sanitizer&&("pre"===i[1]||"script"===i[1]||"style"===i[1]),text:i[0]});else if(!n&&t&&(i=this.rules.def.exec(e)))e=e.substring(i[0].length),this.tokens.links[i[1].toLowerCase()]={href:i[2],title:i[3]};else if(t&&(i=this.rules.table.exec(e))){for(e=e.substring(i[0].length),h={type:"table",header:i[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:i[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:i[3].replace(/(?: *\| *)?\n$/,"").split("\n")},p=0;p<h.align.length;p++)/^ *-+: *$/.test(h.align[p])?h.align[p]="right":/^ *:-+: *$/.test(h.align[p])?h.align[p]="center":/^ *:-+ *$/.test(h.align[p])?h.align[p]="left":h.align[p]=null;for(p=0;p<h.cells.length;p++)h.cells[p]=h.cells[p].replace(/^ *\| *| *\| *$/g,"").split(/ *\| */);this.tokens.push(h)}else if(t&&(i=this.rules.paragraph.exec(e)))e=e.substring(i[0].length),this.tokens.push({type:"paragraph",text:"\n"===i[1].charAt(i[1].length-1)?i[1].slice(0,-1):i[1]});else if(i=this.rules.text.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"text",text:i[0]});else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0));return this.tokens};var c={escape:/^\\([\\`*{}\[\]()#+\-.!_>])/,autolink:/^<([^ >]+(@|:\/)[^ >]+)>/,url:h,tag:/^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,link:/^!?\[(inside)\]\(href\)/,reflink:/^!?\[(inside)\]\s*\[([^\]]*)\]/,nolink:/^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,strong:/^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,em:/^\b_((?:[^_]|__)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,code:/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,br:/^ {2,}\n(?!\s*$)/,del:h,text:/^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/};c._inside=/(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/,c._href=/\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/,c.link=l(c.link)("inside",c._inside)("href",c._href)(),c.reflink=l(c.reflink)("inside",c._inside)(),c.normal=a({},c),c.pedantic=a({},c.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/}),c.gfm=a({},c.normal,{escape:l(c.escape)("])","~|])")(),url:/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,del:/^~~(?=\S)([\s\S]*?\S)~~/,text:l(c.text)("]|","~]|")("|","|https?://|")()}),c.breaks=a({},c.gfm,{br:l(c.br)("{2,}","*")(),text:l(c.gfm.text)("{2,}","*")()}),n.rules=c,n.output=function(e,t,r){return new n(t,r).output(e)},n.prototype.output=function(e){for(var t,n,r,s,o="";e;)if(s=this.rules.escape.exec(e))e=e.substring(s[0].length),o+=s[1];else if(s=this.rules.autolink.exec(e))e=e.substring(s[0].length),"@"===s[2]?(n=":"===s[1].charAt(6)?this.mangle(s[1].substring(7)):this.mangle(s[1]),r=this.mangle("mailto:")+n):(n=i(s[1]),r=n),o+=this.renderer.link(r,null,n);else if(this.inLink||!(s=this.rules.url.exec(e))){if(s=this.rules.tag.exec(e))!this.inLink&&/^<a /i.test(s[0])?this.inLink=!0:this.inLink&&/^<\/a>/i.test(s[0])&&(this.inLink=!1),e=e.substring(s[0].length),o+=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(s[0]):i(s[0]):s[0];else if(s=this.rules.link.exec(e))e=e.substring(s[0].length),this.inLink=!0,o+=this.outputLink(s,{href:s[2],title:s[3]}),this.inLink=!1;else if((s=this.rules.reflink.exec(e))||(s=this.rules.nolink.exec(e))){if(e=e.substring(s[0].length),t=(s[2]||s[1]).replace(/\s+/g," "),!(t=this.links[t.toLowerCase()])||!t.href){o+=s[0].charAt(0),e=s[0].substring(1)+e;continue}this.inLink=!0,o+=this.outputLink(s,t),this.inLink=!1}else if(s=this.rules.strong.exec(e))e=e.substring(s[0].length),o+=this.renderer.strong(this.output(s[2]||s[1]));else if(s=this.rules.em.exec(e))e=e.substring(s[0].length),o+=this.renderer.em(this.output(s[2]||s[1]));else if(s=this.rules.code.exec(e))e=e.substring(s[0].length),o+=this.renderer.codespan(i(s[2],!0));else if(s=this.rules.br.exec(e))e=e.substring(s[0].length),o+=this.renderer.br();else if(s=this.rules.del.exec(e))e=e.substring(s[0].length),o+=this.renderer.del(this.output(s[1]));else if(s=this.rules.text.exec(e))e=e.substring(s[0].length),o+=this.renderer.text(i(this.smartypants(s[0])));else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0))}else e=e.substring(s[0].length),n=i(s[1]),r=n,o+=this.renderer.link(r,null,n);return o},n.prototype.outputLink=function(e,t){var n=i(t.href),r=t.title?i(t.title):null;return"!"!==e[0].charAt(0)?this.renderer.link(n,r,this.output(e[1])):this.renderer.image(n,r,i(e[1]))},n.prototype.smartypants=function(e){return this.options.smartypants?e.replace(/---/g,"\u2014").replace(/--/g,"\u2013").replace(/(^|[-\u2014\/(\[{"\s])'/g,"$1\u2018").replace(/'/g,"\u2019").replace(/(^|[-\u2014\/(\[{\u2018\s])"/g,"$1\u201c").replace(/"/g,"\u201d").replace(/\.{3}/g,"\u2026"):e},n.prototype.mangle=function(e){if(!this.options.mangle)return e;for(var t,n="",r=e.length,s=0;s<r;s++)t=e.charCodeAt(s),Math.random()>.5&&(t="x"+t.toString(16)),n+="&#"+t+";";return n},r.prototype.code=function(e,t,n){if(this.options.highlight){var r=this.options.highlight(e,t);null!=r&&r!==e&&(n=!0,e=r)}return t?'<pre><code class="'+this.options.langPrefix+i(t,!0)+'">'+(n?e:i(e,!0))+"\n</code></pre>\n":"<pre><code>"+(n?e:i(e,!0))+"\n</code></pre>"},r.prototype.blockquote=function(e){return"<blockquote>\n"+e+"</blockquote>\n"},r.prototype.html=function(e){return e},r.prototype.heading=function(e,t,n){return"<h"+t+' id="'+this.options.headerPrefix+n.toLowerCase().replace(/[^\w]+/g,"-")+'">'+e+"</h"+t+">\n"},r.prototype.hr=function(){return this.options.xhtml?"<hr/>\n":"<hr>\n"},r.prototype.list=function(e,t){var n=t?"ol":"ul";return"<"+n+">\n"+e+"</"+n+">\n"},r.prototype.listitem=function(e){return"<li>"+e+"</li>\n"},r.prototype.paragraph=function(e){return"<p>"+e+"</p>\n"},r.prototype.table=function(e,t){return"<table>\n<thead>\n"+e+"</thead>\n<tbody>\n"+t+"</tbody>\n</table>\n"},r.prototype.tablerow=function(e){return"<tr>\n"+e+"</tr>\n"},r.prototype.tablecell=function(e,t){var n=t.header?"th":"td";return(t.align?"<"+n+' style="text-align:'+t.align+'">':"<"+n+">")+e+"</"+n+">\n"},r.prototype.strong=function(e){return"<strong>"+e+"</strong>"},r.prototype.em=function(e){return"<em>"+e+"</em>"},r.prototype.codespan=function(e){return"<code>"+e+"</code>"},r.prototype.br=function(){return this.options.xhtml?"<br/>":"<br>"},r.prototype.del=function(e){return"<del>"+e+"</del>"},r.prototype.link=function(e,t,n){if(this.options.sanitize){try{var r=decodeURIComponent(o(e)).replace(/[^\w:]/g,"").toLowerCase()}catch(e){return""}if(0===r.indexOf("javascript:")||0===r.indexOf("vbscript:"))return""}var s='<a href="'+e+'"';return t&&(s+=' title="'+t+'"'),s+=">"+n+"</a>"},r.prototype.image=function(e,t,n){var r='<img src="'+e+'" alt="'+n+'"';return t&&(r+=' title="'+t+'"'),r+=this.options.xhtml?"/>":">"},r.prototype.text=function(e){return e},s.parse=function(e,t,n){return new s(t,n).parse(e)},s.prototype.parse=function(e){this.inline=new n(e.links,this.options,this.renderer),this.tokens=e.reverse();for(var t="";this.next();)t+=this.tok();return t},s.prototype.next=function(){return this.token=this.tokens.pop()},s.prototype.peek=function(){return this.tokens[this.tokens.length-1]||0},s.prototype.parseText=function(){for(var e=this.token.text;"text"===this.peek().type;)e+="\n"+this.next().text;return this.inline.output(e)},s.prototype.tok=function(){switch(this.token.type){case"space":return"";case"hr":return this.renderer.hr();case"heading":return this.renderer.heading(this.inline.output(this.token.text),this.token.depth,this.token.text);case"code":return this.renderer.code(this.token.text,this.token.lang,this.token.escaped);case"table":var e,t,n,r,s="",i="";for(n="",e=0;e<this.token.header.length;e++)({header:!0,align:this.token.align[e]}),n+=this.renderer.tablecell(this.inline.output(this.token.header[e]),{header:!0,align:this.token.align[e]});for(s+=this.renderer.tablerow(n),e=0;e<this.token.cells.length;e++){for(t=this.token.cells[e],n="",r=0;r<t.length;r++)n+=this.renderer.tablecell(this.inline.output(t[r]),{header:!1,align:this.token.align[r]});i+=this.renderer.tablerow(n)}return this.renderer.table(s,i);case"blockquote_start":for(var i="";"blockquote_end"!==this.next().type;)i+=this.tok();return this.renderer.blockquote(i);case"list_start":for(var i="",o=this.token.ordered;"list_end"!==this.next().type;)i+=this.tok();return this.renderer.list(i,o);case"list_item_start":for(var i="";"list_item_end"!==this.next().type;)i+="text"===this.token.type?this.parseText():this.tok();return this.renderer.listitem(i);case"loose_item_start":for(var i="";"list_item_end"!==this.next().type;)i+=this.tok();return this.renderer.listitem(i);case"html":var l=this.token.pre||this.options.pedantic?this.token.text:this.inline.output(this.token.text);return this.renderer.html(l);case"paragraph":return this.renderer.paragraph(this.inline.output(this.token.text));case"text":return this.renderer.paragraph(this.parseText())}},h.exec=h,p.options=p.setOptions=function(e){return a(p.defaults,e),p},p.defaults={gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!1,sanitizer:null,mangle:!0,smartLists:!1,silent:!1,highlight:null,langPrefix:"lang-",smartypants:!1,headerPrefix:"",renderer:new r,xhtml:!1},p.Parser=s,p.parser=s.parse,p.Renderer=r,p.Lexer=t,p.lexer=t.lex,p.InlineLexer=n,p.inlineLexer=n.output,p.parse=p,e.exports=p}).call(function(){return this||("undefined"!=typeof window?window:t)}())}).call(t,n("fRUx"))}});