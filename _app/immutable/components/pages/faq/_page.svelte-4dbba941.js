import{S as K,i as X,s as Z,C as q,W as ee,X as te,m as y,h as d,n as J,Y as se,b as v,K as b,J as j,R as F,B,D as U,q as P,r as z,u as me,e as ae,M as I,k as T,l as R,F as Q,O as g,P as D,Q as le,a1 as Me,p as ge,a as H,c as V,f as E,g as de,t as A,d as he,a4 as Te,v as N,w as O,x as W,y as G,a5 as Re,a6 as Ie,A as Se,E as ie,G as ce,H as fe,I as ue,V as ze,a2 as Ce,o as De,_ as Ne}from"../../../chunks/index-1588bfdc.js";import{R as Oe,C as We}from"../../../chunks/HeaderSearch.svelte_svelte_type_style_lang-1c1bef06.js";import"../../../chunks/preload-helper-aa6bc0ce.js";import{L as Ge}from"../../../chunks/Link-4220a621.js";function pe(o){let e,n;return{c(){e=ee("title"),n=P(o[1])},l(t){e=te(t,"title",{});var l=y(e);n=z(l,o[1]),l.forEach(d)},m(t,l){v(t,e,l),b(e,n)},p(t,l){l&2&&me(n,t[1])},d(t){t&&d(e)}}}function qe(o){let e,n,t=o[1]&&pe(o),l=[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},{width:o[0]},{height:o[0]},o[2],o[3]],a={};for(let s=0;s<l.length;s+=1)a=q(a,l[s]);return{c(){e=ee("svg"),t&&t.c(),n=ee("path"),this.h()},l(s){e=te(s,"svg",{xmlns:!0,viewBox:!0,fill:!0,preserveAspectRatio:!0,width:!0,height:!0});var r=y(e);t&&t.l(r),n=te(r,"path",{d:!0}),y(n).forEach(d),r.forEach(d),this.h()},h(){J(n,"d","M22 16L12 26 10.6 24.6 19.2 16 10.6 7.4 12 6z"),se(e,a)},m(s,r){v(s,e,r),t&&t.m(e,null),b(e,n)},p(s,[r]){s[1]?t?t.p(s,r):(t=pe(s),t.c(),t.m(e,n)):t&&(t.d(1),t=null),se(e,a=j(l,[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},r&1&&{width:s[0]},r&1&&{height:s[0]},r&4&&s[2],r&8&&s[3]]))},i:F,o:F,d(s){s&&d(e),t&&t.d()}}}function Le(o,e,n){let t,l;const a=["size","title"];let s=B(e,a),{size:r=16}=e,{title:i=void 0}=e;return o.$$set=c=>{n(5,e=q(q({},e),U(c))),n(3,s=B(e,a)),"size"in c&&n(0,r=c.size),"title"in c&&n(1,i=c.title)},o.$$.update=()=>{n(4,t=e["aria-label"]||e["aria-labelledby"]||i),n(2,l={"aria-hidden":t?void 0:!0,role:t?"img":void 0,focusable:Number(e.tabindex)===0?!0:void 0})},e=U(e),[r,i,l,s,t]}class _e extends K{constructor(e){super(),X(this,e,Le,qe,Z,{size:0,title:1})}}function be(o,e,n){const t=o.slice();return t[2]=e[n].width,t}function He(o){let e,n,t,l,a=[o[4],{style:n="width: "+o[2]+";"+o[4].style}],s={};for(let r=0;r<a.length;r+=1)s=q(s,a[r]);return{c(){e=T("p"),this.h()},l(r){e=R(r,"P",{style:!0}),y(e).forEach(d),this.h()},h(){Q(e,s),g(e,"bx--skeleton__text",!0),g(e,"bx--skeleton__heading",o[0])},m(r,i){v(r,e,i),t||(l=[D(e,"click",o[12]),D(e,"mouseover",o[13]),D(e,"mouseenter",o[14]),D(e,"mouseleave",o[15])],t=!0)},p(r,i){Q(e,s=j(a,[i&16&&r[4],i&20&&n!==(n="width: "+r[2]+";"+r[4].style)&&{style:n}])),g(e,"bx--skeleton__text",!0),g(e,"bx--skeleton__heading",r[0])},d(r){r&&d(e),t=!1,le(l)}}}function Ve(o){let e,n,t,l=o[3],a=[];for(let i=0;i<l.length;i+=1)a[i]=ke(be(o,l,i));let s=[o[4]],r={};for(let i=0;i<s.length;i+=1)r=q(r,s[i]);return{c(){e=T("div");for(let i=0;i<a.length;i+=1)a[i].c();this.h()},l(i){e=R(i,"DIV",{});var c=y(e);for(let h=0;h<a.length;h+=1)a[h].l(c);c.forEach(d),this.h()},h(){Q(e,r)},m(i,c){v(i,e,c);for(let h=0;h<a.length;h+=1)a[h].m(e,null);n||(t=[D(e,"click",o[8]),D(e,"mouseover",o[9]),D(e,"mouseenter",o[10]),D(e,"mouseleave",o[11])],n=!0)},p(i,c){if(c&9){l=i[3];let h;for(h=0;h<l.length;h+=1){const _=be(i,l,h);a[h]?a[h].p(_,c):(a[h]=ke(_),a[h].c(),a[h].m(e,null))}for(;h<a.length;h+=1)a[h].d(1);a.length=l.length}Q(e,r=j(s,[c&16&&i[4]]))},d(i){i&&d(e),Me(a,i),n=!1,le(t)}}}function ke(o){let e;return{c(){e=T("p"),this.h()},l(n){e=R(n,"P",{style:!0}),y(e).forEach(d),this.h()},h(){ge(e,"width",o[2]),g(e,"bx--skeleton__text",!0),g(e,"bx--skeleton__heading",o[0])},m(n,t){v(n,e,t)},p(n,t){t&8&&ge(e,"width",n[2]),t&1&&g(e,"bx--skeleton__heading",n[0])},d(n){n&&d(e)}}}function Fe(o){let e;function n(a,s){return a[1]?Ve:He}let t=n(o),l=t(o);return{c(){l.c(),e=ae()},l(a){l.l(a),e=ae()},m(a,s){l.m(a,s),v(a,e,s)},p(a,[s]){t===(t=n(a))&&l?l.p(a,s):(l.d(1),l=t(a),l&&(l.c(),l.m(e.parentNode,e)))},i:F,o:F,d(a){l.d(a),a&&d(e)}}}function Be(o,e,n){let t,l,a;const s=["lines","heading","paragraph","width"];let r=B(e,s),{lines:i=3}=e,{heading:c=!1}=e,{paragraph:h=!1}=e,{width:_="100%"}=e;const S=[.973,.153,.567];function u($){I.call(this,o,$)}function m($){I.call(this,o,$)}function f($){I.call(this,o,$)}function k($){I.call(this,o,$)}function L($){I.call(this,o,$)}function p($){I.call(this,o,$)}function C($){I.call(this,o,$)}function w($){I.call(this,o,$)}return o.$$set=$=>{e=q(q({},e),U($)),n(4,r=B(e,s)),"lines"in $&&n(5,i=$.lines),"heading"in $&&n(0,c=$.heading),"paragraph"in $&&n(1,h=$.paragraph),"width"in $&&n(2,_=$.width)},o.$$.update=()=>{if(o.$$.dirty&4&&n(7,l=parseInt(_,10)),o.$$.dirty&4&&n(6,a=_.includes("px")),o.$$.dirty&238&&h)for(let $=0;$<i;$++){const Y=a?l-75:0,ne=a?l:75,M=Math.floor(S[$%3]*(ne-Y+1))+Y+"px";n(3,t=[...t,{width:a?M:`calc(${_} - ${M})`}])}},n(3,t=[]),[c,h,_,t,r,i,a,l,u,m,f,k,L,p,C,w]}class oe extends K{constructor(e){super(),X(this,e,Be,Fe,Z,{lines:5,heading:0,paragraph:1,width:2})}}function ve(o,e,n){const t=o.slice();return t[9]=e[n],t}function we(o){let e,n,t,l,a,s,r,i,c,h,_,S,u;return t=new _e({props:{class:"bx--accordion__arrow"}}),a=new oe({props:{class:"bx--accordion__title"}}),i=new oe({props:{width:"90%"}}),h=new oe({props:{width:"80%"}}),S=new oe({props:{width:"95%"}}),{c(){e=T("li"),n=T("span"),N(t.$$.fragment),l=H(),N(a.$$.fragment),s=H(),r=T("div"),N(i.$$.fragment),c=H(),N(h.$$.fragment),_=H(),N(S.$$.fragment),this.h()},l(m){e=R(m,"LI",{});var f=y(e);n=R(f,"SPAN",{});var k=y(n);O(t.$$.fragment,k),l=V(k),O(a.$$.fragment,k),k.forEach(d),s=V(f),r=R(f,"DIV",{});var L=y(r);O(i.$$.fragment,L),c=V(L),O(h.$$.fragment,L),_=V(L),O(S.$$.fragment,L),L.forEach(d),f.forEach(d),this.h()},h(){g(n,"bx--accordion__heading",!0),g(r,"bx--accordion__content",!0),g(e,"bx--accordion__item",!0),g(e,"bx--accordion__item--active",!0)},m(m,f){v(m,e,f),b(e,n),W(t,n,null),b(n,l),W(a,n,null),b(e,s),b(e,r),W(i,r,null),b(r,c),W(h,r,null),b(r,_),W(S,r,null),u=!0},i(m){u||(E(t.$$.fragment,m),E(a.$$.fragment,m),E(i.$$.fragment,m),E(h.$$.fragment,m),E(S.$$.fragment,m),u=!0)},o(m){A(t.$$.fragment,m),A(a.$$.fragment,m),A(i.$$.fragment,m),A(h.$$.fragment,m),A(S.$$.fragment,m),u=!1},d(m){m&&d(e),G(t),G(a),G(i),G(h),G(S)}}}function ye(o,e){let n,t,l,a,s,r,i;return l=new _e({props:{class:"bx--accordion__arrow"}}),s=new oe({props:{class:"bx--accordion__title"}}),{key:o,first:null,c(){n=T("li"),t=T("span"),N(l.$$.fragment),a=H(),N(s.$$.fragment),r=H(),this.h()},l(c){n=R(c,"LI",{});var h=y(n);t=R(h,"SPAN",{});var _=y(t);O(l.$$.fragment,_),a=V(_),O(s.$$.fragment,_),_.forEach(d),r=V(h),h.forEach(d),this.h()},h(){g(t,"bx--accordion__heading",!0),g(n,"bx--accordion__item",!0),this.first=n},m(c,h){v(c,n,h),b(n,t),W(l,t,null),b(t,a),W(s,t,null),b(n,r),i=!0},p(c,h){},i(c){i||(E(l.$$.fragment,c),E(s.$$.fragment,c),i=!0)},o(c){A(l.$$.fragment,c),A(s.$$.fragment,c),i=!1},d(c){c&&d(n),G(l),G(s)}}}function Ye(o){let e,n,t=[],l=new Map,a,s,r,i=o[3]&&we(),c=Array.from({length:o[3]?o[0]-1:o[0]},$e);const h=u=>u[9];for(let u=0;u<c.length;u+=1){let m=ve(o,c,u),f=h(m);l.set(f,t[u]=ye(f))}let _=[o[4]],S={};for(let u=0;u<_.length;u+=1)S=q(S,_[u]);return{c(){e=T("ul"),i&&i.c(),n=H();for(let u=0;u<t.length;u+=1)t[u].c();this.h()},l(u){e=R(u,"UL",{});var m=y(e);i&&i.l(m),n=V(m);for(let f=0;f<t.length;f+=1)t[f].l(m);m.forEach(d),this.h()},h(){Q(e,S),g(e,"bx--skeleton",!0),g(e,"bx--accordion",!0),g(e,"bx--accordion--start",o[1]==="start"),g(e,"bx--accordion--end",o[1]==="end"),g(e,"bx--accordion--sm",o[2]==="sm"),g(e,"bx--accordion--xl",o[2]==="xl")},m(u,m){v(u,e,m),i&&i.m(e,null),b(e,n);for(let f=0;f<t.length;f+=1)t[f].m(e,null);a=!0,s||(r=[D(e,"click",o[5]),D(e,"mouseover",o[6]),D(e,"mouseenter",o[7]),D(e,"mouseleave",o[8])],s=!0)},p(u,[m]){u[3]?i?m&8&&E(i,1):(i=we(),i.c(),E(i,1),i.m(e,n)):i&&(de(),A(i,1,1,()=>{i=null}),he()),m&9&&(c=Array.from({length:u[3]?u[0]-1:u[0]},$e),de(),t=Te(t,m,h,1,u,c,l,e,Re,ye,null,ve),he()),Q(e,S=j(_,[m&16&&u[4]])),g(e,"bx--skeleton",!0),g(e,"bx--accordion",!0),g(e,"bx--accordion--start",u[1]==="start"),g(e,"bx--accordion--end",u[1]==="end"),g(e,"bx--accordion--sm",u[2]==="sm"),g(e,"bx--accordion--xl",u[2]==="xl")},i(u){if(!a){E(i);for(let m=0;m<c.length;m+=1)E(t[m]);a=!0}},o(u){A(i);for(let m=0;m<t.length;m+=1)A(t[m]);a=!1},d(u){u&&d(e),i&&i.d();for(let m=0;m<t.length;m+=1)t[m].d();s=!1,le(r)}}}const $e=(o,e)=>e;function Qe(o,e,n){const t=["count","align","size","open"];let l=B(e,t),{count:a=4}=e,{align:s="end"}=e,{size:r=void 0}=e,{open:i=!0}=e;function c(u){I.call(this,o,u)}function h(u){I.call(this,o,u)}function _(u){I.call(this,o,u)}function S(u){I.call(this,o,u)}return o.$$set=u=>{e=q(q({},e),U(u)),n(4,l=B(e,t)),"count"in u&&n(0,a=u.count),"align"in u&&n(1,s=u.align),"size"in u&&n(2,r=u.size),"open"in u&&n(3,i=u.open)},[a,s,r,i,l,c,h,_,S]}class Ue extends K{constructor(e){super(),X(this,e,Qe,Ye,Z,{count:0,align:1,size:2,open:3})}}function je(o){let e,n,t,l;const a=o[6].default,s=ie(a,o,o[5],null);let r=[o[3]],i={};for(let c=0;c<r.length;c+=1)i=q(i,r[c]);return{c(){e=T("ul"),s&&s.c(),this.h()},l(c){e=R(c,"UL",{});var h=y(e);s&&s.l(h),h.forEach(d),this.h()},h(){Q(e,i),g(e,"bx--accordion",!0),g(e,"bx--accordion--start",o[0]==="start"),g(e,"bx--accordion--end",o[0]==="end"),g(e,"bx--accordion--sm",o[1]==="sm"),g(e,"bx--accordion--xl",o[1]==="xl")},m(c,h){v(c,e,h),s&&s.m(e,null),n=!0,t||(l=[D(e,"click",o[7]),D(e,"mouseover",o[8]),D(e,"mouseenter",o[9]),D(e,"mouseleave",o[10])],t=!0)},p(c,h){s&&s.p&&(!n||h&32)&&ce(s,a,c,c[5],n?ue(a,c[5],h,null):fe(c[5]),null),Q(e,i=j(r,[h&8&&c[3]])),g(e,"bx--accordion",!0),g(e,"bx--accordion--start",c[0]==="start"),g(e,"bx--accordion--end",c[0]==="end"),g(e,"bx--accordion--sm",c[1]==="sm"),g(e,"bx--accordion--xl",c[1]==="xl")},i(c){n||(E(s,c),n=!0)},o(c){A(s,c),n=!1},d(c){c&&d(e),s&&s.d(c),t=!1,le(l)}}}function Je(o){let e,n;const t=[o[3],{align:o[0]},{size:o[1]}];let l={};for(let a=0;a<t.length;a+=1)l=q(l,t[a]);return e=new Ue({props:l}),e.$on("click",o[11]),e.$on("mouseover",o[12]),e.$on("mouseenter",o[13]),e.$on("mouseleave",o[14]),{c(){N(e.$$.fragment)},l(a){O(e.$$.fragment,a)},m(a,s){W(e,a,s),n=!0},p(a,s){const r=s&11?j(t,[s&8&&ze(a[3]),s&1&&{align:a[0]},s&2&&{size:a[1]}]):{};e.$set(r)},i(a){n||(E(e.$$.fragment,a),n=!0)},o(a){A(e.$$.fragment,a),n=!1},d(a){G(e,a)}}}function Ke(o){let e,n,t,l;const a=[Je,je],s=[];function r(i,c){return i[2]?0:1}return e=r(o),n=s[e]=a[e](o),{c(){n.c(),t=ae()},l(i){n.l(i),t=ae()},m(i,c){s[e].m(i,c),v(i,t,c),l=!0},p(i,[c]){let h=e;e=r(i),e===h?s[e].p(i,c):(de(),A(s[h],1,1,()=>{s[h]=null}),he(),n=s[e],n?n.p(i,c):(n=s[e]=a[e](i),n.c()),E(n,1),n.m(t.parentNode,t))},i(i){l||(E(n),l=!0)},o(i){A(n),l=!1},d(i){s[e].d(i),i&&d(t)}}}function Xe(o,e,n){const t=["align","size","disabled","skeleton"];let l=B(e,t),{$$slots:a={},$$scope:s}=e,{align:r="end"}=e,{size:i=void 0}=e,{disabled:c=!1}=e,{skeleton:h=!1}=e;const _=Se(c);Ie("Accordion",{disableItems:_});function S(w){I.call(this,o,w)}function u(w){I.call(this,o,w)}function m(w){I.call(this,o,w)}function f(w){I.call(this,o,w)}function k(w){I.call(this,o,w)}function L(w){I.call(this,o,w)}function p(w){I.call(this,o,w)}function C(w){I.call(this,o,w)}return o.$$set=w=>{e=q(q({},e),U(w)),n(3,l=B(e,t)),"align"in w&&n(0,r=w.align),"size"in w&&n(1,i=w.size),"disabled"in w&&n(4,c=w.disabled),"skeleton"in w&&n(2,h=w.skeleton),"$$scope"in w&&n(5,s=w.$$scope)},o.$$.update=()=>{o.$$.dirty&16&&_.set(c)},[r,i,h,l,c,s,a,S,u,m,f,k,L,p,C]}class Ze extends K{constructor(e){super(),X(this,e,Xe,Ke,Z,{align:0,size:1,disabled:4,skeleton:2})}}const xe=o=>({}),Ee=o=>({});function et(o){let e;return{c(){e=P(o[2])},l(n){e=z(n,o[2])},m(n,t){v(n,e,t)},p(n,t){t&4&&me(e,n[2])},d(n){n&&d(e)}}}function tt(o){let e,n,t,l,a,s,r,i,c,h;t=new _e({props:{class:"bx--accordion__arrow","aria-label":o[3]}});const _=o[7].title,S=ie(_,o,o[6],Ee),u=S||et(o),m=o[7].default,f=ie(m,o,o[6],null);let k=[o[5]],L={};for(let p=0;p<k.length;p+=1)L=q(L,k[p]);return{c(){e=T("li"),n=T("button"),N(t.$$.fragment),l=H(),a=T("div"),u&&u.c(),s=H(),r=T("div"),f&&f.c(),this.h()},l(p){e=R(p,"LI",{});var C=y(e);n=R(C,"BUTTON",{type:!0,title:!0,"aria-expanded":!0});var w=y(n);O(t.$$.fragment,w),l=V(w),a=R(w,"DIV",{});var $=y(a);u&&u.l($),$.forEach(d),w.forEach(d),s=V(C),r=R(C,"DIV",{});var Y=y(r);f&&f.l(Y),Y.forEach(d),C.forEach(d),this.h()},h(){g(a,"bx--accordion__title",!0),J(n,"type","button"),J(n,"title",o[3]),J(n,"aria-expanded",o[0]),n.disabled=o[1],g(n,"bx--accordion__heading",!0),g(r,"bx--accordion__content",!0),Q(e,L),g(e,"bx--accordion__item",!0),g(e,"bx--accordion__item--active",o[0]),g(e,"bx--accordion__item--disabled",o[1]),g(e,"bx--accordion__item--expanding",o[4]==="expanding"),g(e,"bx--accordion__item--collapsing",o[4]==="collapsing")},m(p,C){v(p,e,C),b(e,n),W(t,n,null),b(n,l),b(n,a),u&&u.m(a,null),b(e,s),b(e,r),f&&f.m(r,null),i=!0,c||(h=[D(n,"click",o[9]),D(n,"click",o[14]),D(n,"mouseover",o[10]),D(n,"mouseenter",o[11]),D(n,"mouseleave",o[12]),D(n,"keydown",o[13]),D(n,"keydown",o[15]),D(e,"animationend",o[8]),D(e,"animationend",o[16])],c=!0)},p(p,[C]){const w={};C&8&&(w["aria-label"]=p[3]),t.$set(w),S?S.p&&(!i||C&64)&&ce(S,_,p,p[6],i?ue(_,p[6],C,xe):fe(p[6]),Ee):u&&u.p&&(!i||C&4)&&u.p(p,i?C:-1),(!i||C&8)&&J(n,"title",p[3]),(!i||C&1)&&J(n,"aria-expanded",p[0]),(!i||C&2)&&(n.disabled=p[1]),f&&f.p&&(!i||C&64)&&ce(f,m,p,p[6],i?ue(m,p[6],C,null):fe(p[6]),null),Q(e,L=j(k,[C&32&&p[5]])),g(e,"bx--accordion__item",!0),g(e,"bx--accordion__item--active",p[0]),g(e,"bx--accordion__item--disabled",p[1]),g(e,"bx--accordion__item--expanding",p[4]==="expanding"),g(e,"bx--accordion__item--collapsing",p[4]==="collapsing")},i(p){i||(E(t.$$.fragment,p),E(u,p),E(f,p),i=!0)},o(p){A(t.$$.fragment,p),A(u,p),A(f,p),i=!1},d(p){p&&d(e),G(t),u&&u.d(p),f&&f.d(p),c=!1,le(h)}}}function nt(o,e,n){const t=["title","open","disabled","iconDescription"];let l=B(e,t),{$$slots:a={},$$scope:s}=e,{title:r="title"}=e,{open:i=!1}=e,{disabled:c=!1}=e,{iconDescription:h="Expand/Collapse"}=e,_=c;const u=Ce("Accordion").disableItems.subscribe(M=>{!M&&_||n(1,c=M)});let m;De(()=>()=>{u()});function f(M){I.call(this,o,M)}function k(M){I.call(this,o,M)}function L(M){I.call(this,o,M)}function p(M){I.call(this,o,M)}function C(M){I.call(this,o,M)}function w(M){I.call(this,o,M)}const $=()=>{n(0,i=!i),n(4,m=i?"expanding":"collapsing")},Y=({key:M})=>{i&&M==="Escape"&&n(0,i=!1)},ne=()=>{n(4,m=void 0)};return o.$$set=M=>{e=q(q({},e),U(M)),n(5,l=B(e,t)),"title"in M&&n(2,r=M.title),"open"in M&&n(0,i=M.open),"disabled"in M&&n(1,c=M.disabled),"iconDescription"in M&&n(3,h=M.iconDescription),"$$scope"in M&&n(6,s=M.$$scope)},[i,c,r,h,m,l,s,a,f,k,L,p,C,w,$,Y,ne]}class x extends K{constructor(e){super(),X(this,e,nt,tt,Z,{title:2,open:0,disabled:1,iconDescription:3})}}function Ae(o){let e,n;return{c(){e=ee("title"),n=P(o[1])},l(t){e=te(t,"title",{});var l=y(e);n=z(l,o[1]),l.forEach(d)},m(t,l){v(t,e,l),b(e,n)},p(t,l){l&2&&me(n,t[1])},d(t){t&&d(e)}}}function ot(o){let e,n,t,l=o[1]&&Ae(o),a=[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},{width:o[0]},{height:o[0]},o[2],o[3]],s={};for(let r=0;r<a.length;r+=1)s=q(s,a[r]);return{c(){e=ee("svg"),l&&l.c(),n=ee("path"),t=ee("path"),this.h()},l(r){e=te(r,"svg",{xmlns:!0,viewBox:!0,fill:!0,preserveAspectRatio:!0,width:!0,height:!0});var i=y(e);l&&l.l(i),n=te(i,"path",{d:!0}),y(n).forEach(d),t=te(i,"path",{d:!0}),y(t).forEach(d),i.forEach(d),this.h()},h(){J(n,"d","M26,28H6a2.0027,2.0027,0,0,1-2-2V6A2.0027,2.0027,0,0,1,6,4H16V6H6V26H26V16h2V26A2.0027,2.0027,0,0,1,26,28Z"),J(t,"d","M20 2L20 4 26.586 4 18 12.586 19.414 14 28 5.414 28 12 30 12 30 2 20 2z"),se(e,s)},m(r,i){v(r,e,i),l&&l.m(e,null),b(e,n),b(e,t)},p(r,[i]){r[1]?l?l.p(r,i):(l=Ae(r),l.c(),l.m(e,n)):l&&(l.d(1),l=null),se(e,s=j(a,[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},i&1&&{width:r[0]},i&1&&{height:r[0]},i&4&&r[2],i&8&&r[3]]))},i:F,o:F,d(r){r&&d(e),l&&l.d()}}}function lt(o,e,n){let t,l;const a=["size","title"];let s=B(e,a),{size:r=16}=e,{title:i=void 0}=e;return o.$$set=c=>{n(5,e=q(q({},e),U(c))),n(3,s=B(e,a)),"size"in c&&n(0,r=c.size),"title"in c&&n(1,i=c.title)},o.$$.update=()=>{n(4,t=e["aria-label"]||e["aria-labelledby"]||i),n(2,l={"aria-hidden":t?void 0:!0,role:t?"img":void 0,focusable:Number(e.tabindex)===0?!0:void 0})},e=U(e),[r,i,l,s,t]}class Pe extends K{constructor(e){super(),X(this,e,lt,ot,Z,{size:0,title:1})}}function rt(o){let e;const n=o[1].default,t=ie(n,o,o[6],null);return{c(){t&&t.c()},l(l){t&&t.l(l)},m(l,a){t&&t.m(l,a),e=!0},p(l,a){t&&t.p&&(!e||a&64)&&ce(t,n,l,l[6],e?ue(n,l[6],a,null):fe(l[6]),null)},i(l){e||(E(t,l),e=!0)},o(l){A(t,l),e=!1},d(l){t&&t.d(l)}}}function st(o){let e,n;const t=[o[0],{target:"_blank"},{icon:Pe}];let l={$$slots:{default:[rt]},$$scope:{ctx:o}};for(let a=0;a<t.length;a+=1)l=q(l,t[a]);return e=new Ge({props:l}),e.$on("click",o[2]),e.$on("mouseover",o[3]),e.$on("mouseenter",o[4]),e.$on("mouseleave",o[5]),{c(){N(e.$$.fragment)},l(a){O(e.$$.fragment,a)},m(a,s){W(e,a,s),n=!0},p(a,[s]){const r=s&1?j(t,[s&1&&ze(a[0]),t[1],s&0&&{icon:Pe}]):{};s&64&&(r.$$scope={dirty:s,ctx:a}),e.$set(r)},i(a){n||(E(e.$$.fragment,a),n=!0)},o(a){A(e.$$.fragment,a),n=!1},d(a){G(e,a)}}}function at(o,e,n){const t=[];let l=B(e,t),{$$slots:a={},$$scope:s}=e;function r(_){I.call(this,o,_)}function i(_){I.call(this,o,_)}function c(_){I.call(this,o,_)}function h(_){I.call(this,o,_)}return o.$$set=_=>{e=q(q({},e),U(_)),n(0,l=B(e,t)),"$$scope"in _&&n(6,s=_.$$scope)},[l,a,r,i,c,h,s]}class re extends K{constructor(e){super(),X(this,e,at,st,Z,{})}}function it(o){let e;return{c(){e=P("Arcade Game Typography")},l(n){e=z(n,"Arcade Game Typography")},m(n,t){v(n,e,t)},d(n){n&&d(e)}}}function ct(o){let e,n,t,l,a;return t=new re({props:{inline:!0,href:"https://readonlymemory.vg/shop/book/arcade-game-typography/",$$slots:{default:[it]},$$scope:{ctx:o}}}),{c(){e=T("p"),n=P(`All included fonts where hand-drawn from Toshi Omagari's magnificent book
                `),N(t.$$.fragment),l=P(`
                as reference. It's a lovely hommage to the hey-day of arcade games and to me it's been one of my favourite videogame related books.`)},l(s){e=R(s,"P",{});var r=y(e);n=z(r,`All included fonts where hand-drawn from Toshi Omagari's magnificent book
                `),O(t.$$.fragment,r),l=z(r,`
                as reference. It's a lovely hommage to the hey-day of arcade games and to me it's been one of my favourite videogame related books.`),r.forEach(d)},m(s,r){v(s,e,r),b(e,n),W(t,e,null),b(e,l),a=!0},p(s,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:s}),t.$set(i)},i(s){a||(E(t.$$.fragment,s),a=!0)},o(s){A(t.$$.fragment,s),a=!1},d(s){s&&d(e),G(t)}}}function ft(o){let e,n;return{c(){e=T("strong"),n=P("Where are these fonts taken from?")},l(t){e=R(t,"STRONG",{});var l=y(e);n=z(l,"Where are these fonts taken from?"),l.forEach(d)},m(t,l){v(t,e,l),b(e,n)},p:F,d(t){t&&d(e)}}}function ut(o){let e;return{c(){e=P("Playdate")},l(n){e=z(n,"Playdate")},m(n,t){v(n,e,t)},d(n){n&&d(e)}}}function dt(o){let e,n,t,l,a;return t=new re({props:{inline:!0,href:"https://readonlymemory.vg/shop/book/arcade-game-typography/",$$slots:{default:[ut]},$$scope:{ctx:o}}}),{c(){e=T("p"),n=P(`The fonts have created with Panic's
                `),N(t.$$.fragment),l=P(`
                in mind, a tiny handheld game system with a monochrome display. If you find these useful for other purposes, please go ahead and make use of them!`)},l(s){e=R(s,"P",{});var r=y(e);n=z(r,`The fonts have created with Panic's
                `),O(t.$$.fragment,r),l=z(r,`
                in mind, a tiny handheld game system with a monochrome display. If you find these useful for other purposes, please go ahead and make use of them!`),r.forEach(d)},m(s,r){v(s,e,r),b(e,n),W(t,e,null),b(e,l),a=!0},p(s,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:s}),t.$set(i)},i(s){a||(E(t.$$.fragment,s),a=!0)},o(s){A(t.$$.fragment,s),a=!1},d(s){s&&d(e),G(t)}}}function ht(o){let e,n;return{c(){e=T("strong"),n=P("Who are these fonts for?")},l(t){e=R(t,"STRONG",{});var l=y(e);n=z(l,"Who are these fonts for?"),l.forEach(d)},m(t,l){v(t,e,l),b(e,n)},p:F,d(t){t&&d(e)}}}function mt(o){let e,n,t,l,a;return{c(){e=T("p"),n=P(`This question can only be answered by the original designers of these fonts. Drawing only the characters used by a game, saving diskspace,
                limited knowledge of Western typography. My guess is as good as your's. However, it `),t=T("em"),l=P("seems"),a=P(` to me that the maker of the book left out
                some characters on purpose, e.g. some spread page highlight the quality of a font at the cost of completeness.`)},l(s){e=R(s,"P",{});var r=y(e);n=z(r,`This question can only be answered by the original designers of these fonts. Drawing only the characters used by a game, saving diskspace,
                limited knowledge of Western typography. My guess is as good as your's. However, it `),t=R(r,"EM",{});var i=y(t);l=z(i,"seems"),i.forEach(d),a=z(r,` to me that the maker of the book left out
                some characters on purpose, e.g. some spread page highlight the quality of a font at the cost of completeness.`),r.forEach(d)},m(s,r){v(s,e,r),b(e,n),b(e,t),b(t,l),b(e,a)},p:F,d(s){s&&d(e)}}}function _t(o){let e,n;return{c(){e=T("strong"),n=P("Why are some fonts incomplete?")},l(t){e=R(t,"STRONG",{});var l=y(e);n=z(l,"Why are some fonts incomplete?"),l.forEach(d)},m(t,l){v(t,e,l),b(e,n)},p:F,d(t){t&&d(e)}}}function gt(o){let e,n,t,l,a;return{c(){e=T("p"),n=P(`Fonts are tagged as incomplete, when they lack one or more characters in their supported character range. So when a font supports uppercase letters,
                but misses single ones, it's incomplete. Font are `),t=T("em"),l=P("not"),a=P(` tagged as incomplete, when they support the full range of uppercase characters,
                but have no lowercase characters.`)},l(s){e=R(s,"P",{});var r=y(e);n=z(r,`Fonts are tagged as incomplete, when they lack one or more characters in their supported character range. So when a font supports uppercase letters,
                but misses single ones, it's incomplete. Font are `),t=R(r,"EM",{});var i=y(t);l=z(i,"not"),i.forEach(d),a=z(r,` tagged as incomplete, when they support the full range of uppercase characters,
                but have no lowercase characters.`),r.forEach(d)},m(s,r){v(s,e,r),b(e,n),b(e,t),b(t,l),b(e,a)},p:F,d(s){s&&d(e)}}}function pt(o){let e,n;return{c(){e=T("strong"),n=P("When is a font tagged as incomplete?")},l(t){e=R(t,"STRONG",{});var l=y(e);n=z(l,"When is a font tagged as incomplete?"),l.forEach(d)},m(t,l){v(t,e,l),b(e,n)},p:F,d(t){t&&d(e)}}}function bt(o){let e;return{c(){e=P("Playdate's")},l(n){e=z(n,"Playdate's")},m(n,t){v(n,e,t)},d(n){n&&d(e)}}}function kt(o){let e,n,t,l,a;return t=new re({props:{inline:!0,href:"https://readonlymemory.vg/shop/book/arcade-game-typography/",$$slots:{default:[bt]},$$scope:{ctx:o}}}),{c(){e=T("p"),n=P(`If you know the book these fonts were taken from, you might wonder why some fonts are missing entirely. That's mostly the case when a font makes
                use of multiple colours, be it for aesthetic reasons or to make the font more legible through anti-aliasing. Since this mostly doesn't work for the
                `),N(t.$$.fragment),l=P(`
                monochrome display, most of these fonts were omitted while others were adapted.`)},l(s){e=R(s,"P",{});var r=y(e);n=z(r,`If you know the book these fonts were taken from, you might wonder why some fonts are missing entirely. That's mostly the case when a font makes
                use of multiple colours, be it for aesthetic reasons or to make the font more legible through anti-aliasing. Since this mostly doesn't work for the
                `),O(t.$$.fragment,r),l=z(r,`
                monochrome display, most of these fonts were omitted while others were adapted.`),r.forEach(d)},m(s,r){v(s,e,r),b(e,n),W(t,e,null),b(e,l),a=!0},p(s,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:s}),t.$set(i)},i(s){a||(E(t.$$.fragment,s),a=!0)},o(s){A(t.$$.fragment,s),a=!1},d(s){s&&d(e),G(t)}}}function vt(o){let e,n;return{c(){e=T("strong"),n=P("Why are some fonts missing?")},l(t){e=R(t,"STRONG",{});var l=y(e);n=z(l,"Why are some fonts missing?"),l.forEach(d)},m(t,l){v(t,e,l),b(e,n)},p:F,d(t){t&&d(e)}}}function wt(o){let e;return{c(){e=P("Arcade Game Typography")},l(n){e=z(n,"Arcade Game Typography")},m(n,t){v(n,e,t)},d(n){n&&d(e)}}}function yt(o){let e,n,t,l,a;return t=new re({props:{inline:!0,href:"https://readonlymemory.vg/shop/book/arcade-game-typography/",$$slots:{default:[wt]},$$scope:{ctx:o}}}),{c(){e=T("p"),n=P(`A font considered for a game that didn't make it into the final product. Presumably, they ended
                in the ROM and have later been discovered by the author of the
                `),N(t.$$.fragment),l=P(`
                book.`)},l(s){e=R(s,"P",{});var r=y(e);n=z(r,`A font considered for a game that didn't make it into the final product. Presumably, they ended
                in the ROM and have later been discovered by the author of the
                `),O(t.$$.fragment,r),l=z(r,`
                book.`),r.forEach(d)},m(s,r){v(s,e,r),b(e,n),W(t,e,null),b(e,l),a=!0},p(s,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:s}),t.$set(i)},i(s){a||(E(t.$$.fragment,s),a=!0)},o(s){A(t.$$.fragment,s),a=!1},d(s){s&&d(e),G(t)}}}function $t(o){let e,n;return{c(){e=T("strong"),n=P("What's an unused font?")},l(t){e=R(t,"STRONG",{});var l=y(e);n=z(l,"What's an unused font?"),l.forEach(d)},m(t,l){v(t,e,l),b(e,n)},p:F,d(t){t&&d(e)}}}function Et(o){let e;return{c(){e=P("CC0")},l(n){e=z(n,"CC0")},m(n,t){v(n,e,t)},d(n){n&&d(e)}}}function At(o){let e,n,t,l,a;return t=new re({props:{inline:!0,href:"https://creativecommons.org/publicdomain/zero/1.0/",$$slots:{default:[Et]},$$scope:{ctx:o}}}),{c(){e=T("p"),n=P(`All included fonts are part of the public domain and as such they are available under the terms of the
                `),N(t.$$.fragment),l=P(`
                license.`)},l(s){e=R(s,"P",{});var r=y(e);n=z(r,`All included fonts are part of the public domain and as such they are available under the terms of the
                `),O(t.$$.fragment,r),l=z(r,`
                license.`),r.forEach(d)},m(s,r){v(s,e,r),b(e,n),W(t,e,null),b(e,l),a=!0},p(s,r){const i={};r&2&&(i.$$scope={dirty:r,ctx:s}),t.$set(i)},i(s){a||(E(t.$$.fragment,s),a=!0)},o(s){A(t.$$.fragment,s),a=!1},d(s){s&&d(e),G(t)}}}function Pt(o){let e,n;return{c(){e=T("strong"),n=P("How are these fonts licensed?")},l(t){e=R(t,"STRONG",{});var l=y(e);n=z(l,"How are these fonts licensed?"),l.forEach(d)},m(t,l){v(t,e,l),b(e,n)},p:F,d(t){t&&d(e)}}}function zt(o){let e,n,t,l,a,s,r,i,c,h,_,S,u,m;return e=new x({props:{open:o[0],$$slots:{title:[ft],default:[ct]},$$scope:{ctx:o}}}),t=new x({props:{open:o[0],$$slots:{title:[ht],default:[dt]},$$scope:{ctx:o}}}),a=new x({props:{open:o[0],$$slots:{title:[_t],default:[mt]},$$scope:{ctx:o}}}),r=new x({props:{open:o[0],$$slots:{title:[pt],default:[gt]},$$scope:{ctx:o}}}),c=new x({props:{open:o[0],$$slots:{title:[vt],default:[kt]},$$scope:{ctx:o}}}),_=new x({props:{open:o[0],$$slots:{title:[$t],default:[yt]},$$scope:{ctx:o}}}),u=new x({props:{open:o[0],$$slots:{title:[Pt],default:[At]},$$scope:{ctx:o}}}),{c(){N(e.$$.fragment),n=H(),N(t.$$.fragment),l=H(),N(a.$$.fragment),s=H(),N(r.$$.fragment),i=H(),N(c.$$.fragment),h=H(),N(_.$$.fragment),S=H(),N(u.$$.fragment)},l(f){O(e.$$.fragment,f),n=V(f),O(t.$$.fragment,f),l=V(f),O(a.$$.fragment,f),s=V(f),O(r.$$.fragment,f),i=V(f),O(c.$$.fragment,f),h=V(f),O(_.$$.fragment,f),S=V(f),O(u.$$.fragment,f)},m(f,k){W(e,f,k),v(f,n,k),W(t,f,k),v(f,l,k),W(a,f,k),v(f,s,k),W(r,f,k),v(f,i,k),W(c,f,k),v(f,h,k),W(_,f,k),v(f,S,k),W(u,f,k),m=!0},p(f,k){const L={};k&2&&(L.$$scope={dirty:k,ctx:f}),e.$set(L);const p={};k&2&&(p.$$scope={dirty:k,ctx:f}),t.$set(p);const C={};k&2&&(C.$$scope={dirty:k,ctx:f}),a.$set(C);const w={};k&2&&(w.$$scope={dirty:k,ctx:f}),r.$set(w);const $={};k&2&&($.$$scope={dirty:k,ctx:f}),c.$set($);const Y={};k&2&&(Y.$$scope={dirty:k,ctx:f}),_.$set(Y);const ne={};k&2&&(ne.$$scope={dirty:k,ctx:f}),u.$set(ne)},i(f){m||(E(e.$$.fragment,f),E(t.$$.fragment,f),E(a.$$.fragment,f),E(r.$$.fragment,f),E(c.$$.fragment,f),E(_.$$.fragment,f),E(u.$$.fragment,f),m=!0)},o(f){A(e.$$.fragment,f),A(t.$$.fragment,f),A(a.$$.fragment,f),A(r.$$.fragment,f),A(c.$$.fragment,f),A(_.$$.fragment,f),A(u.$$.fragment,f),m=!1},d(f){G(e,f),f&&d(n),G(t,f),f&&d(l),G(a,f),f&&d(s),G(r,f),f&&d(i),G(c,f),f&&d(h),G(_,f),f&&d(S),G(u,f)}}}function Mt(o){let e,n;return e=new Ze({props:{$$slots:{default:[zt]},$$scope:{ctx:o}}}),{c(){N(e.$$.fragment)},l(t){O(e.$$.fragment,t)},m(t,l){W(e,t,l),n=!0},p(t,l){const a={};l&2&&(a.$$scope={dirty:l,ctx:t}),e.$set(a)},i(t){n||(E(e.$$.fragment,t),n=!0)},o(t){A(e.$$.fragment,t),n=!1},d(t){G(e,t)}}}function Tt(o){let e,n;return e=new We({props:{padding:!0,$$slots:{default:[Mt]},$$scope:{ctx:o}}}),{c(){N(e.$$.fragment)},l(t){O(e.$$.fragment,t)},m(t,l){W(e,t,l),n=!0},p(t,l){const a={};l&2&&(a.$$scope={dirty:l,ctx:t}),e.$set(a)},i(t){n||(E(e.$$.fragment,t),n=!0)},o(t){A(e.$$.fragment,t),n=!1},d(t){G(e,t)}}}function Rt(o){let e,n,t,l,a,s;return a=new Oe({props:{$$slots:{default:[Tt]},$$scope:{ctx:o}}}),{c(){e=H(),n=T("h2"),t=P("Frequently Asked Questions"),l=H(),N(a.$$.fragment),this.h()},l(r){Ne('[data-svelte="svelte-2xq18x"]',document.head).forEach(d),e=V(r),n=R(r,"H2",{});var c=y(n);t=z(c,"Frequently Asked Questions"),c.forEach(d),l=V(r),O(a.$$.fragment,r),this.h()},h(){document.title="Frequently Asked Questions | Playdate Arcade Fonts"},m(r,i){v(r,e,i),v(r,n,i),b(n,t),v(r,l,i),W(a,r,i),s=!0},p(r,[i]){const c={};i&2&&(c.$$scope={dirty:i,ctx:r}),a.$set(c)},i(r){s||(E(a.$$.fragment,r),s=!0)},o(r){A(a.$$.fragment,r),s=!1},d(r){r&&d(e),r&&d(n),r&&d(l),G(a,r)}}}function It(o){return[!1]}class Ot extends K{constructor(e){super(),X(this,e,It,Rt,Z,{})}}export{Ot as default};
