import{S as ie,i as ue,s as fe,N as he,t as ee,O as _e,a as D,h as te,d as p,g as R,M as A,j as Le,C as j,b as T,P as ge,z as ce,E as G,F as X,G as se,e as P,k as Y,c as V,m as Z,Q as k,I as re,T as B,U as Be,Y as M,l as J,n as W,o as C,p as x,q as v,X as Fe,Z as me,H as je,w as E,x as S,y as I,R as be,B as L,J as qe,K as Ge,L as Je,A as Ke,$ as Qe,v as Xe,a1 as We,a2 as xe,a3 as de}from"../chunks/index-4eec04f6.js";import{s as pe}from"../chunks/store-a1f3538e.js";import{R as oe,C as le}from"../chunks/HeaderSearch.svelte_svelte_type_style_lang-08139da2.js";import{C as ke,L as et,T as tt,B as ve}from"../chunks/Tags-1df179aa.js";import"../chunks/index-7e4dd922.js";function $e(n){let e,l;return{c(){e=he("title"),l=ee(n[1])},l(t){e=_e(t,"title",{});var s=D(e);l=te(s,n[1]),s.forEach(p)},m(t,s){R(t,e,s),A(e,l)},p(t,s){s&2&&Le(l,t[1])},d(t){t&&p(e)}}}function lt(n){let e,l,t=n[1]&&$e(n),s=[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},{width:n[0]},{height:n[0]},n[2],n[3]],r={};for(let a=0;a<s.length;a+=1)r=j(r,s[a]);return{c(){e=he("svg"),t&&t.c(),l=he("path"),this.h()},l(a){e=_e(a,"svg",{xmlns:!0,viewBox:!0,fill:!0,preserveAspectRatio:!0,width:!0,height:!0});var i=D(e);t&&t.l(i),l=_e(i,"path",{d:!0}),D(l).forEach(p),i.forEach(p),this.h()},h(){T(l,"d","M29,27.5859l-7.5521-7.5521a11.0177,11.0177,0,1,0-1.4141,1.4141L27.5859,29ZM4,13a9,9,0,1,1,9,9A9.01,9.01,0,0,1,4,13Z"),ge(e,r)},m(a,i){R(a,e,i),t&&t.m(e,null),A(e,l)},p(a,[i]){a[1]?t?t.p(a,i):(t=$e(a),t.c(),t.m(e,l)):t&&(t.d(1),t=null),ge(e,r=ce(s,[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},i&1&&{width:a[0]},i&1&&{height:a[0]},i&4&&a[2],i&8&&a[3]]))},i:G,o:G,d(a){a&&p(e),t&&t.d()}}}function nt(n,e,l){let t,s;const r=["size","title"];let a=X(e,r),{size:i=16}=e,{title:o=void 0}=e;return n.$$set=f=>{l(5,e=j(j({},e),se(f))),l(3,a=X(e,r)),"size"in f&&l(0,i=f.size),"title"in f&&l(1,o=f.title)},n.$$.update=()=>{l(4,t=e["aria-label"]||e["aria-labelledby"]||o),l(2,s={"aria-hidden":t?void 0:!0,role:t?"img":void 0,focusable:Number(e.tabindex)===0?!0:void 0})},e=se(e),[i,o,s,a,t]}class at extends ie{constructor(e){super(),ue(this,e,nt,lt,fe,{size:0,title:1})}}function st(n){let e,l,t,s,r,a,i=[n[1]],o={};for(let f=0;f<i.length;f+=1)o=j(o,i[f]);return{c(){e=P("div"),l=P("span"),t=Y(),s=P("div"),this.h()},l(f){e=V(f,"DIV",{});var h=D(e);l=V(h,"SPAN",{}),D(l).forEach(p),t=Z(h),s=V(h,"DIV",{}),D(s).forEach(p),h.forEach(p),this.h()},h(){k(l,"bx--label",!0),k(s,"bx--search-input",!0),re(e,o),k(e,"bx--skeleton",!0),k(e,"bx--search--sm",n[0]==="sm"),k(e,"bx--search--lg",n[0]==="lg"),k(e,"bx--search--xl",n[0]==="xl")},m(f,h){R(f,e,h),A(e,l),A(e,t),A(e,s),r||(a=[B(e,"click",n[2]),B(e,"mouseover",n[3]),B(e,"mouseenter",n[4]),B(e,"mouseleave",n[5])],r=!0)},p(f,[h]){re(e,o=ce(i,[h&2&&f[1]])),k(e,"bx--skeleton",!0),k(e,"bx--search--sm",f[0]==="sm"),k(e,"bx--search--lg",f[0]==="lg"),k(e,"bx--search--xl",f[0]==="xl")},i:G,o:G,d(f){f&&p(e),r=!1,Be(a)}}}function rt(n,e,l){const t=["size"];let s=X(e,t),{size:r="xl"}=e;function a(h){M.call(this,n,h)}function i(h){M.call(this,n,h)}function o(h){M.call(this,n,h)}function f(h){M.call(this,n,h)}return n.$$set=h=>{e=j(j({},e),se(h)),l(1,s=X(e,t)),"size"in h&&l(0,r=h.size)},[r,s,a,i,o,f]}class ot extends ie{constructor(e){super(),ue(this,e,rt,st,fe,{size:0})}}const it=n=>({}),Ce=n=>({});function ut(n){let e,l,t,s,r,a,i,o,f,h,$,_,N,d,m,w;var z=n[14];function b(c){return{props:{class:"bx--search-magnifier-icon"}}}z&&(t=new z(b()));const y=n[20].labelText,K=je(y,n,n[19],Ce),U=K||ct(n);let H=[{type:"text"},{role:"searchbox"},{autofocus:f=n[11]===!0?!0:void 0},{autocomplete:n[10]},{disabled:n[7]},{id:n[15]},{placeholder:n[9]},n[18]],q={};for(let c=0;c<H.length;c+=1)q=j(q,H[c]);var O=ke;function ne(c){return{props:{size:c[3]==="xl"?20:16}}}return O&&(_=new O(ne(n))),{c(){e=P("div"),l=P("div"),t&&E(t.$$.fragment),s=Y(),r=P("label"),U&&U.c(),i=Y(),o=P("input"),h=Y(),$=P("button"),_&&E(_.$$.fragment),this.h()},l(c){e=V(c,"DIV",{role:!0,"aria-labelledby":!0,class:!0});var g=D(e);l=V(g,"DIV",{});var Q=D(l);t&&S(t.$$.fragment,Q),Q.forEach(p),s=Z(g),r=V(g,"LABEL",{id:!0,for:!0});var F=D(r);U&&U.l(F),F.forEach(p),i=Z(g),o=V(g,"INPUT",{type:!0,role:!0,autocomplete:!0,id:!0,placeholder:!0}),h=Z(g),$=V(g,"BUTTON",{type:!0,"aria-label":!0});var ae=D($);_&&S(_.$$.fragment,ae),ae.forEach(p),g.forEach(p),this.h()},h(){k(l,"bx--search-magnifier",!0),T(r,"id",a=n[15]+"-search"),T(r,"for",n[15]),k(r,"bx--label",!0),re(o,q),k(o,"bx--search-input",!0),T($,"type","button"),T($,"aria-label",n[12]),$.disabled=n[7],k($,"bx--search-close",!0),k($,"bx--search-close--hidden",n[2]===""),T(e,"role","search"),T(e,"aria-labelledby",N=n[15]+"-search"),T(e,"class",n[4]),k(e,"bx--search",!0),k(e,"bx--search--light",n[6]),k(e,"bx--search--disabled",n[7]),k(e,"bx--search--sm",n[3]==="sm"),k(e,"bx--search--lg",n[3]==="lg"),k(e,"bx--search--xl",n[3]==="xl"),k(e,"bx--search--expandable",n[8]),k(e,"bx--search--expanded",n[0])},m(c,g){R(c,e,g),A(e,l),t&&I(t,l,null),n[32](l),A(e,s),A(e,r),U&&U.m(r,null),A(e,i),A(e,o),o.autofocus&&o.focus(),n[34](o),be(o,n[2]),A(e,h),A(e,$),_&&I(_,$,null),d=!0,m||(w=[B(l,"click",n[33]),B(o,"input",n[35]),B(o,"change",n[22]),B(o,"input",n[23]),B(o,"focus",n[24]),B(o,"focus",n[36]),B(o,"blur",n[25]),B(o,"blur",n[37]),B(o,"keydown",n[26]),B(o,"keydown",n[38]),B(o,"keyup",n[27]),B($,"click",n[21]),B($,"click",n[39])],m=!0)},p(c,g){if(z!==(z=c[14])){if(t){W();const F=t;C(F.$$.fragment,1,0,()=>{L(F,1)}),x()}z?(t=new z(b()),E(t.$$.fragment),v(t.$$.fragment,1),I(t,l,null)):t=null}K?K.p&&(!d||g[0]&524288)&&qe(K,y,c,c[19],d?Je(y,c[19],g,it):Ge(c[19]),Ce):U&&U.p&&(!d||g[0]&8192)&&U.p(c,d?g:[-1,-1]),(!d||g[0]&32768&&a!==(a=c[15]+"-search"))&&T(r,"id",a),(!d||g[0]&32768)&&T(r,"for",c[15]),re(o,q=ce(H,[{type:"text"},{role:"searchbox"},(!d||g[0]&2048&&f!==(f=c[11]===!0?!0:void 0))&&{autofocus:f},(!d||g[0]&1024)&&{autocomplete:c[10]},(!d||g[0]&128)&&{disabled:c[7]},(!d||g[0]&32768)&&{id:c[15]},(!d||g[0]&512)&&{placeholder:c[9]},g[0]&262144&&c[18]])),g[0]&4&&o.value!==c[2]&&be(o,c[2]),k(o,"bx--search-input",!0);const Q={};if(g[0]&8&&(Q.size=c[3]==="xl"?20:16),O!==(O=ke)){if(_){W();const F=_;C(F.$$.fragment,1,0,()=>{L(F,1)}),x()}O?(_=new O(ne(c)),E(_.$$.fragment),v(_.$$.fragment,1),I(_,$,null)):_=null}else O&&_.$set(Q);(!d||g[0]&4096)&&T($,"aria-label",c[12]),(!d||g[0]&128)&&($.disabled=c[7]),g[0]&4&&k($,"bx--search-close--hidden",c[2]===""),(!d||g[0]&32768&&N!==(N=c[15]+"-search"))&&T(e,"aria-labelledby",N),(!d||g[0]&16)&&T(e,"class",c[4]),g[0]&16&&k(e,"bx--search",!0),g[0]&80&&k(e,"bx--search--light",c[6]),g[0]&144&&k(e,"bx--search--disabled",c[7]),g[0]&24&&k(e,"bx--search--sm",c[3]==="sm"),g[0]&24&&k(e,"bx--search--lg",c[3]==="lg"),g[0]&24&&k(e,"bx--search--xl",c[3]==="xl"),g[0]&272&&k(e,"bx--search--expandable",c[8]),g[0]&17&&k(e,"bx--search--expanded",c[0])},i(c){d||(t&&v(t.$$.fragment,c),v(U,c),_&&v(_.$$.fragment,c),d=!0)},o(c){t&&C(t.$$.fragment,c),C(U,c),_&&C(_.$$.fragment,c),d=!1},d(c){c&&p(e),t&&L(t),n[32](null),U&&U.d(c),n[34](null),_&&L(_),m=!1,Be(w)}}}function ft(n){let e,l;const t=[{size:n[3]},n[18]];let s={};for(let r=0;r<t.length;r+=1)s=j(s,t[r]);return e=new ot({props:s}),e.$on("click",n[28]),e.$on("mouseover",n[29]),e.$on("mouseenter",n[30]),e.$on("mouseleave",n[31]),{c(){E(e.$$.fragment)},l(r){S(e.$$.fragment,r)},m(r,a){I(e,r,a),l=!0},p(r,a){const i=a[0]&262152?ce(t,[a[0]&8&&{size:r[3]},a[0]&262144&&Ke(r[18])]):{};e.$set(i)},i(r){l||(v(e.$$.fragment,r),l=!0)},o(r){C(e.$$.fragment,r),l=!1},d(r){L(e,r)}}}function ct(n){let e;return{c(){e=ee(n[13])},l(l){e=te(l,n[13])},m(l,t){R(l,e,t)},p(l,t){t[0]&8192&&Le(e,l[13])},d(l){l&&p(e)}}}function ht(n){let e,l,t,s;const r=[ft,ut],a=[];function i(o,f){return o[5]?0:1}return e=i(n),l=a[e]=r[e](n),{c(){l.c(),t=J()},l(o){l.l(o),t=J()},m(o,f){a[e].m(o,f),R(o,t,f),s=!0},p(o,f){let h=e;e=i(o),e===h?a[e].p(o,f):(W(),C(a[h],1,1,()=>{a[h]=null}),x(),l=a[e],l?l.p(o,f):(l=a[e]=r[e](o),l.c()),v(l,1),l.m(t.parentNode,t))},i(o){s||(v(l),s=!0)},o(o){C(l),s=!1},d(o){a[e].d(o),o&&p(t)}}}function _t(n,e,l){const t=["value","size","searchClass","skeleton","light","disabled","expandable","expanded","placeholder","autocomplete","autofocus","closeButtonLabelText","labelText","icon","id","ref"];let s=X(e,t),{$$slots:r={},$$scope:a}=e,{value:i=""}=e,{size:o="xl"}=e,{searchClass:f=""}=e,{skeleton:h=!1}=e,{light:$=!1}=e,{disabled:_=!1}=e,{expandable:N=!1}=e,{expanded:d=!1}=e,{placeholder:m="Search..."}=e,{autocomplete:w="off"}=e,{autofocus:z=!1}=e,{closeButtonLabelText:b="Clear search input"}=e,{labelText:y=""}=e,{icon:K=at}=e,{id:U="ccs-"+Math.random().toString(36)}=e,{ref:H=null}=e;const q=Fe();let O=null;function ne(u){M.call(this,n,u)}function c(u){M.call(this,n,u)}function g(u){M.call(this,n,u)}function Q(u){M.call(this,n,u)}function F(u){M.call(this,n,u)}function ae(u){M.call(this,n,u)}function Se(u){M.call(this,n,u)}function Ne(u){M.call(this,n,u)}function Ue(u){M.call(this,n,u)}function Ae(u){M.call(this,n,u)}function Me(u){M.call(this,n,u)}function De(u){me[u?"unshift":"push"](()=>{O=u,l(16,O)})}const Pe=()=>{N&&l(0,d=!0)};function Ve(u){me[u?"unshift":"push"](()=>{H=u,l(1,H)})}function ye(){i=this.value,l(2,i)}const He=()=>{N&&l(0,d=!0)},Oe=()=>{d&&i.trim().length===0&&l(0,d=!1)},Ye=({key:u})=>{u==="Escape"&&(l(2,i=""),q("clear"))},Ze=()=>{l(2,i=""),H.focus(),q("clear")};return n.$$set=u=>{e=j(j({},e),se(u)),l(18,s=X(e,t)),"value"in u&&l(2,i=u.value),"size"in u&&l(3,o=u.size),"searchClass"in u&&l(4,f=u.searchClass),"skeleton"in u&&l(5,h=u.skeleton),"light"in u&&l(6,$=u.light),"disabled"in u&&l(7,_=u.disabled),"expandable"in u&&l(8,N=u.expandable),"expanded"in u&&l(0,d=u.expanded),"placeholder"in u&&l(9,m=u.placeholder),"autocomplete"in u&&l(10,w=u.autocomplete),"autofocus"in u&&l(11,z=u.autofocus),"closeButtonLabelText"in u&&l(12,b=u.closeButtonLabelText),"labelText"in u&&l(13,y=u.labelText),"icon"in u&&l(14,K=u.icon),"id"in u&&l(15,U=u.id),"ref"in u&&l(1,H=u.ref),"$$scope"in u&&l(19,a=u.$$scope)},n.$$.update=()=>{n.$$.dirty[0]&3&&d&&H&&H.focus(),n.$$.dirty[0]&1&&q(d?"expand":"collapse")},[d,H,i,o,f,h,$,_,N,m,w,z,b,y,K,U,O,q,s,a,r,ne,c,g,Q,F,ae,Se,Ne,Ue,Ae,Me,De,Pe,Ve,ye,He,Oe,Ye,Ze]}class mt extends ie{constructor(e){super(),ue(this,e,_t,ht,fe,{value:2,size:3,searchClass:4,skeleton:5,light:6,disabled:7,expandable:8,expanded:0,placeholder:9,autocomplete:10,autofocus:11,closeButtonLabelText:12,labelText:13,icon:14,id:15,ref:1},null,[-1,-1])}}function ze(n,e,l){const t=n.slice();return t[9]=e[l],t}function Te(n,e,l){const t=n.slice();return t[12]=e[l],t}function we(n,e,l){const t=n.slice();return t[12]=e[l],t}function dt(n){let e,l,t;function s(a){n[7](a)}let r={placeholder:"Search by name..."};return n[0]!==void 0&&(r.value=n[0]),e=new mt({props:r}),me.push(()=>We(e,"value",s)),e.$on("input",n[5]),e.$on("clear",n[6]),{c(){E(e.$$.fragment)},l(a){S(e.$$.fragment,a)},m(a,i){I(e,a,i),t=!0},p(a,i){const o={};!l&&i&1&&(l=!0,o.value=a[0],xe(()=>l=!1)),e.$set(o)},i(a){t||(v(e.$$.fragment,a),t=!0)},o(a){C(e.$$.fragment,a),t=!1},d(a){L(e,a)}}}function gt(n){let e,l;return e=new le({props:{padding:!0,lg:6,md:4,sm:8,$$slots:{default:[dt]},$$scope:{ctx:n}}}),{c(){E(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,s){I(e,t,s),l=!0},p(t,s){const r={};s&131073&&(r.$$scope={dirty:s,ctx:t}),e.$set(r)},i(t){l||(v(e.$$.fragment,t),l=!0)},o(t){C(e.$$.fragment,t),l=!1},d(t){L(e,t)}}}function bt(n){let e,l;return e=new le({props:{class:"center",padding:!0,$$slots:{default:[$t]},$$scope:{ctx:n}}}),{c(){E(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,s){I(e,t,s),l=!0},p(t,s){const r={};s&131074&&(r.$$scope={dirty:s,ctx:t}),e.$set(r)},i(t){l||(v(e.$$.fragment,t),l=!0)},o(t){C(e.$$.fragment,t),l=!1},d(t){L(e,t)}}}function pt(n){let e,l,t=n[2],s=[];for(let a=0;a<t.length;a+=1)s[a]=Ie(ze(n,t,a));const r=a=>C(s[a],1,1,()=>{s[a]=null});return{c(){for(let a=0;a<s.length;a+=1)s[a].c();e=J()},l(a){for(let i=0;i<s.length;i+=1)s[i].l(a);e=J()},m(a,i){for(let o=0;o<s.length;o+=1)s[o].m(a,i);R(a,e,i),l=!0},p(a,i){if(i&28){t=a[2];let o;for(o=0;o<t.length;o+=1){const f=ze(a,t,o);s[o]?(s[o].p(f,i),v(s[o],1)):(s[o]=Ie(f),s[o].c(),v(s[o],1),s[o].m(e.parentNode,e))}for(W(),o=t.length;o<s.length;o+=1)r(o);x()}},i(a){if(!l){for(let i=0;i<t.length;i+=1)v(s[i]);l=!0}},o(a){s=s.filter(Boolean);for(let i=0;i<s.length;i+=1)C(s[i]);l=!1},d(a){de(s,a),a&&p(e)}}}function kt(n){let e;return{c(){e=ee("No Results")},l(l){e=te(l,"No Results")},m(l,t){R(l,e,t)},i:G,o:G,d(l){l&&p(e)}}}function vt(n){let e,l;return e=new et({props:{withOverlay:!1,small:!0}}),{c(){E(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,s){I(e,t,s),l=!0},i(t){l||(v(e.$$.fragment,t),l=!0)},o(t){C(e.$$.fragment,t),l=!1},d(t){L(e,t)}}}function $t(n){let e,l,t,s;const r=[vt,kt],a=[];function i(o,f){return o[1]?0:1}return e=i(n),l=a[e]=r[e](n),{c(){l.c(),t=J()},l(o){l.l(o),t=J()},m(o,f){a[e].m(o,f),R(o,t,f),s=!0},p(o,f){let h=e;e=i(o),e!==h&&(W(),C(a[h],1,1,()=>{a[h]=null}),x(),l=a[e],l||(l=a[e]=r[e](o),l.c()),v(l,1),l.m(t.parentNode,t))},i(o){s||(v(l),s=!0)},o(o){C(l),s=!1},d(o){a[e].d(o),o&&p(t)}}}function Re(n){let e,l,t;return{c(){e=P("span"),this.h()},l(s){e=V(s,"SPAN",{"data-glyph":!0,"arial-label":!0}),D(e).forEach(p),this.h()},h(){T(e,"data-glyph",l=n[12]),T(e,"arial-label",t=n[12])},m(s,r){R(s,e,r)},p:G,d(s){s&&p(e)}}}function Ee(n){let e,l,t;return{c(){e=P("span"),this.h()},l(s){e=V(s,"SPAN",{"data-glyph":!0,"arial-label":!0}),D(e).forEach(p),this.h()},h(){T(e,"data-glyph",l=n[12]),T(e,"arial-label",t=n[12])},m(s,r){R(s,e,r)},p:G,d(s){s&&p(e)}}}function Ct(n){let e,l,t,s,r,a,i,o,f,h;e=new tt({props:{font:n[9]}});let $=n[3],_=[];for(let m=0;m<$.length;m+=1)_[m]=Re(we(n,$,m));let N=n[4],d=[];for(let m=0;m<N.length;m+=1)d[m]=Ee(Te(n,N,m));return{c(){E(e.$$.fragment),l=Y(),t=P("a"),s=P("div");for(let m=0;m<_.length;m+=1)_[m].c();r=Y(),a=P("br"),i=Y();for(let m=0;m<d.length;m+=1)d[m].c();this.h()},l(m){S(e.$$.fragment,m),l=Z(m),t=V(m,"A",{href:!0});var w=D(t);s=V(w,"DIV",{class:!0,style:!0});var z=D(s);for(let b=0;b<_.length;b+=1)_[b].l(z);r=Z(z),a=V(z,"BR",{}),i=Z(z);for(let b=0;b<d.length;b+=1)d[b].l(z);z.forEach(p),w.forEach(p),this.h()},h(){T(s,"class","preview zoom-4x svelte-1fiu607"),T(s,"style",o=`--backgroundImage: url("https://idleberg.github.io/playdate-arcade-fonts/sprites/${encodeURIComponent(n[9].name)}.png")`),T(t,"href",f=`https://idleberg.github.io/playdate-arcade-fonts/details/${encodeURIComponent(n[9].name)}`)},m(m,w){I(e,m,w),R(m,l,w),R(m,t,w),A(t,s);for(let z=0;z<_.length;z+=1)_[z].m(s,null);A(s,r),A(s,a),A(s,i);for(let z=0;z<d.length;z+=1)d[z].m(s,null);h=!0},p(m,w){const z={};if(w&4&&(z.font=m[9]),e.$set(z),w&8){$=m[3];let b;for(b=0;b<$.length;b+=1){const y=we(m,$,b);_[b]?_[b].p(y,w):(_[b]=Re(y),_[b].c(),_[b].m(s,r))}for(;b<_.length;b+=1)_[b].d(1);_.length=$.length}if(w&16){N=m[4];let b;for(b=0;b<N.length;b+=1){const y=Te(m,N,b);d[b]?d[b].p(y,w):(d[b]=Ee(y),d[b].c(),d[b].m(s,null))}for(;b<d.length;b+=1)d[b].d(1);d.length=N.length}(!h||w&4&&o!==(o=`--backgroundImage: url("https://idleberg.github.io/playdate-arcade-fonts/sprites/${encodeURIComponent(m[9].name)}.png")`))&&T(s,"style",o),(!h||w&4&&f!==(f=`https://idleberg.github.io/playdate-arcade-fonts/details/${encodeURIComponent(m[9].name)}`))&&T(t,"href",f)},i(m){h||(v(e.$$.fragment,m),h=!0)},o(m){C(e.$$.fragment,m),h=!1},d(m){L(e,m),m&&p(l),m&&p(t),de(_,m),de(d,m)}}}function zt(n){let e,l;return e=new le({props:{lg:16,$$slots:{default:[Ct]},$$scope:{ctx:n}}}),{c(){E(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,s){I(e,t,s),l=!0},p(t,s){const r={};s&131076&&(r.$$scope={dirty:s,ctx:t}),e.$set(r)},i(t){l||(v(e.$$.fragment,t),l=!0)},o(t){C(e.$$.fragment,t),l=!1},d(t){L(e,t)}}}function Tt(n){let e;return{c(){e=ee("Details")},l(l){e=te(l,"Details")},m(l,t){R(l,e,t)},d(l){l&&p(e)}}}function wt(n){let e;return{c(){e=ee("Source")},l(l){e=te(l,"Source")},m(l,t){R(l,e,t)},d(l){l&&p(e)}}}function Rt(n){let e,l,t,s;return e=new ve({props:{href:`https://idleberg.github.io/playdate-arcade-fonts/details/${encodeURIComponent(n[9].name)}`,size:"small",$$slots:{default:[Tt]},$$scope:{ctx:n}}}),t=new ve({props:{href:`https://github.com/idleberg/playdate-arcade-fonts/tree/main/static/fonts/${encodeURIComponent(n[9].category)}`,size:"small",kind:"tertiary",$$slots:{default:[wt]},$$scope:{ctx:n}}}),{c(){E(e.$$.fragment),l=Y(),E(t.$$.fragment)},l(r){S(e.$$.fragment,r),l=Z(r),S(t.$$.fragment,r)},m(r,a){I(e,r,a),R(r,l,a),I(t,r,a),s=!0},p(r,a){const i={};a&4&&(i.href=`https://idleberg.github.io/playdate-arcade-fonts/details/${encodeURIComponent(r[9].name)}`),a&131072&&(i.$$scope={dirty:a,ctx:r}),e.$set(i);const o={};a&4&&(o.href=`https://github.com/idleberg/playdate-arcade-fonts/tree/main/static/fonts/${encodeURIComponent(r[9].category)}`),a&131072&&(o.$$scope={dirty:a,ctx:r}),t.$set(o)},i(r){s||(v(e.$$.fragment,r),v(t.$$.fragment,r),s=!0)},o(r){C(e.$$.fragment,r),C(t.$$.fragment,r),s=!1},d(r){L(e,r),r&&p(l),L(t,r)}}}function Et(n){let e,l;return e=new le({props:{padding:!0,$$slots:{default:[Rt]},$$scope:{ctx:n}}}),{c(){E(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,s){I(e,t,s),l=!0},p(t,s){const r={};s&131076&&(r.$$scope={dirty:s,ctx:t}),e.$set(r)},i(t){l||(v(e.$$.fragment,t),l=!0)},o(t){C(e.$$.fragment,t),l=!1},d(t){L(e,t)}}}function It(n){let e,l,t,s,r;return e=new oe({props:{$$slots:{default:[zt]},$$scope:{ctx:n}}}),t=new oe({props:{$$slots:{default:[Et]},$$scope:{ctx:n}}}),{c(){E(e.$$.fragment),l=Y(),E(t.$$.fragment),s=Y()},l(a){S(e.$$.fragment,a),l=Z(a),S(t.$$.fragment,a),s=Z(a)},m(a,i){I(e,a,i),R(a,l,i),I(t,a,i),R(a,s,i),r=!0},p(a,i){const o={};i&131076&&(o.$$scope={dirty:i,ctx:a}),e.$set(o);const f={};i&131076&&(f.$$scope={dirty:i,ctx:a}),t.$set(f)},i(a){r||(v(e.$$.fragment,a),v(t.$$.fragment,a),r=!0)},o(a){C(e.$$.fragment,a),C(t.$$.fragment,a),r=!1},d(a){L(e,a),a&&p(l),L(t,a),a&&p(s)}}}function Ie(n){let e,l;return e=new le({props:{padding:!0,$$slots:{default:[It]},$$scope:{ctx:n}}}),{c(){E(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,s){I(e,t,s),l=!0},p(t,s){const r={};s&131076&&(r.$$scope={dirty:s,ctx:t}),e.$set(r)},i(t){l||(v(e.$$.fragment,t),l=!0)},o(t){C(e.$$.fragment,t),l=!1},d(t){L(e,t)}}}function Lt(n){let e,l,t,s;const r=[pt,bt],a=[];function i(o,f){var h;return(h=o[2])!=null&&h.length?0:1}return e=i(n),l=a[e]=r[e](n),{c(){l.c(),t=J()},l(o){l.l(o),t=J()},m(o,f){a[e].m(o,f),R(o,t,f),s=!0},p(o,f){let h=e;e=i(o),e===h?a[e].p(o,f):(W(),C(a[h],1,1,()=>{a[h]=null}),x(),l=a[e],l?l.p(o,f):(l=a[e]=r[e](o),l.c()),v(l,1),l.m(t.parentNode,t))},i(o){s||(v(l),s=!0)},o(o){C(l),s=!1},d(o){a[e].d(o),o&&p(t)}}}function Bt(n){let e,l,t,s;return e=new oe({props:{$$slots:{default:[gt]},$$scope:{ctx:n}}}),t=new oe({props:{class:"high-row",$$slots:{default:[Lt]},$$scope:{ctx:n}}}),{c(){E(e.$$.fragment),l=Y(),E(t.$$.fragment)},l(r){S(e.$$.fragment,r),l=Z(r),S(t.$$.fragment,r)},m(r,a){I(e,r,a),R(r,l,a),I(t,r,a),s=!0},p(r,[a]){const i={};a&131073&&(i.$$scope={dirty:a,ctx:r}),e.$set(i);const o={};a&131078&&(o.$$scope={dirty:a,ctx:r}),t.$set(o)},i(r){s||(v(e.$$.fragment,r),v(t.$$.fragment,r),s=!0)},o(r){C(e.$$.fragment,r),C(t.$$.fragment,r),s=!1},d(r){L(e,r),r&&p(l),L(t,r)}}}function St(n,e,l){let t;Qe(n,pe,_=>l(8,t=_));let s="",r=!0,a=[],i="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),o="0123456789".split("");Xe(()=>{l(1,r=!1)}),pe.subscribe(_=>{l(2,a=_)});const f=()=>{s!=null&&s.length?l(2,a=t.filter(_=>_.name.toLowerCase().includes(s.toLowerCase())||_.category.toLowerCase().includes(s.toLowerCase()))):h()},h=()=>{l(2,a=t)};function $(_){s=_,l(0,s)}return[s,r,a,i,o,f,h,$]}class Pt extends ie{constructor(e){super(),ue(this,e,St,Bt,fe,{})}}export{Pt as default};
