import{S as K,i as X,s as x,U as ee,t as E,V as te,a as y,h as z,d as h,g as k,M as p,j as me,C as F,b as Y,W as ae,z as Z,E as V,F as B,G as j,l as re,O as S,e as P,c as M,I as U,Q as v,R as q,T as le,f as be,X as We,w as C,k as G,x as N,m as H,y as D,q as T,o as W,B as O,n as he,p as de,Y as Ie,Z as Se,r as Re,H as ie,J as ce,K as fe,L as ue,A as Te,_ as Ce,v as Ne,$ as De}from"../../chunks/index-04fcb002.js";import{w as Oe}from"../../chunks/index-1a6227ed.js";import{R as qe,C as Fe}from"../../chunks/HeaderSearch.svelte_svelte_type_style_lang-afbcb924.js";import{L as Le}from"../../chunks/Link-e1b4cac7.js";function ke(o){let e,n;return{c(){e=ee("title"),n=E(o[1])},l(t){e=te(t,"title",{});var l=y(e);n=z(l,o[1]),l.forEach(h)},m(t,l){k(t,e,l),p(e,n)},p(t,l){l&2&&me(n,t[1])},d(t){t&&h(e)}}}function Ge(o){let e,n,t=o[1]&&ke(o),l=[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},{width:o[0]},{height:o[0]},o[2],o[3]],a={};for(let r=0;r<l.length;r+=1)a=F(a,l[r]);return{c(){e=ee("svg"),t&&t.c(),n=ee("path"),this.h()},l(r){e=te(r,"svg",{xmlns:!0,viewBox:!0,fill:!0,preserveAspectRatio:!0,width:!0,height:!0});var s=y(e);t&&t.l(s),n=te(s,"path",{d:!0}),y(n).forEach(h),s.forEach(h),this.h()},h(){Y(n,"d","M22 16L12 26 10.6 24.6 19.2 16 10.6 7.4 12 6z"),ae(e,a)},m(r,s){k(r,e,s),t&&t.m(e,null),p(e,n)},p(r,[s]){r[1]?t?t.p(r,s):(t=ke(r),t.c(),t.m(e,n)):t&&(t.d(1),t=null),ae(e,a=Z(l,[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},s&1&&{width:r[0]},s&1&&{height:r[0]},s&4&&r[2],s&8&&r[3]]))},i:V,o:V,d(r){r&&h(e),t&&t.d()}}}function He(o,e,n){let t,l;const a=["size","title"];let r=B(e,a),{size:s=16}=e,{title:i=void 0}=e;return o.$$set=c=>{n(5,e=F(F({},e),j(c))),n(3,r=B(e,a)),"size"in c&&n(0,s=c.size),"title"in c&&n(1,i=c.title)},o.$$.update=()=>{n(4,t=e["aria-label"]||e["aria-labelledby"]||i),n(2,l={"aria-hidden":t?void 0:!0,role:t?"img":void 0,focusable:Number(e.tabindex)===0?!0:void 0})},e=j(e),[s,i,l,r,t]}class _e extends K{constructor(e){super(),X(this,e,He,Ge,x,{size:0,title:1})}}function ve(o,e,n){const t=o.slice();return t[2]=e[n].width,t}function Ve(o){let e,n,t,l,a=[o[4],{style:n="width: "+o[2]+";"+o[4].style}],r={};for(let s=0;s<a.length;s+=1)r=F(r,a[s]);return{c(){e=P("p"),this.h()},l(s){e=M(s,"P",{style:!0}),y(e).forEach(h),this.h()},h(){U(e,r),v(e,"bx--skeleton__text",!0),v(e,"bx--skeleton__heading",o[0])},m(s,i){k(s,e,i),t||(l=[q(e,"click",o[12]),q(e,"mouseover",o[13]),q(e,"mouseenter",o[14]),q(e,"mouseleave",o[15])],t=!0)},p(s,i){U(e,r=Z(a,[i&16&&s[4],i&20&&n!==(n="width: "+s[2]+";"+s[4].style)&&{style:n}])),v(e,"bx--skeleton__text",!0),v(e,"bx--skeleton__heading",s[0])},d(s){s&&h(e),t=!1,le(l)}}}function Be(o){let e,n,t,l=o[3],a=[];for(let i=0;i<l.length;i+=1)a[i]=we(ve(o,l,i));let r=[o[4]],s={};for(let i=0;i<r.length;i+=1)s=F(s,r[i]);return{c(){e=P("div");for(let i=0;i<a.length;i+=1)a[i].c();this.h()},l(i){e=M(i,"DIV",{});var c=y(e);for(let d=0;d<a.length;d+=1)a[d].l(c);c.forEach(h),this.h()},h(){U(e,s)},m(i,c){k(i,e,c);for(let d=0;d<a.length;d+=1)a[d].m(e,null);n||(t=[q(e,"click",o[8]),q(e,"mouseover",o[9]),q(e,"mouseenter",o[10]),q(e,"mouseleave",o[11])],n=!0)},p(i,c){if(c&9){l=i[3];let d;for(d=0;d<l.length;d+=1){const g=ve(i,l,d);a[d]?a[d].p(g,c):(a[d]=we(g),a[d].c(),a[d].m(e,null))}for(;d<a.length;d+=1)a[d].d(1);a.length=l.length}U(e,s=Z(r,[c&16&&i[4]]))},d(i){i&&h(e),We(a,i),n=!1,le(t)}}}function we(o){let e;return{c(){e=P("p"),this.h()},l(n){e=M(n,"P",{style:!0}),y(e).forEach(h),this.h()},h(){be(e,"width",o[2]),v(e,"bx--skeleton__text",!0),v(e,"bx--skeleton__heading",o[0])},m(n,t){k(n,e,t)},p(n,t){t&8&&be(e,"width",n[2]),t&1&&v(e,"bx--skeleton__heading",n[0])},d(n){n&&h(e)}}}function Ye(o){let e;function n(a,r){return a[1]?Be:Ve}let t=n(o),l=t(o);return{c(){l.c(),e=re()},l(a){l.l(a),e=re()},m(a,r){l.m(a,r),k(a,e,r)},p(a,[r]){t===(t=n(a))&&l?l.p(a,r):(l.d(1),l=t(a),l&&(l.c(),l.m(e.parentNode,e)))},i:V,o:V,d(a){l.d(a),a&&h(e)}}}function Qe(o,e,n){let t,l,a;const r=["lines","heading","paragraph","width"];let s=B(e,r),{lines:i=3}=e,{heading:c=!1}=e,{paragraph:d=!1}=e,{width:g="100%"}=e;const w=[.973,.153,.567];function f(A){S.call(this,o,A)}function _(A){S.call(this,o,A)}function b(A){S.call(this,o,A)}function L(A){S.call(this,o,A)}function u(A){S.call(this,o,A)}function m(A){S.call(this,o,A)}function R(A){S.call(this,o,A)}function $(A){S.call(this,o,A)}return o.$$set=A=>{e=F(F({},e),j(A)),n(4,s=B(e,r)),"lines"in A&&n(5,i=A.lines),"heading"in A&&n(0,c=A.heading),"paragraph"in A&&n(1,d=A.paragraph),"width"in A&&n(2,g=A.width)},o.$$.update=()=>{if(o.$$.dirty&4&&n(7,l=parseInt(g,10)),o.$$.dirty&4&&n(6,a=g.includes("px")),o.$$.dirty&238&&d)for(let A=0;A<i;A++){const Q=a?l-75:0,ne=a?l:75,I=Math.floor(w[A%3]*(ne-Q+1))+Q+"px";n(3,t=[...t,{width:a?I:`calc(${g} - ${I})`}])}},n(3,t=[]),[c,d,g,t,s,i,a,l,f,_,b,L,u,m,R,$]}class oe extends K{constructor(e){super(),X(this,e,Qe,Ye,x,{lines:5,heading:0,paragraph:1,width:2})}}function ye(o,e,n){const t=o.slice();return t[9]=e[n],t}function $e(o){let e,n,t,l,a,r,s,i,c,d,g,w,f;return t=new _e({props:{class:"bx--accordion__arrow"}}),a=new oe({props:{class:"bx--accordion__title"}}),i=new oe({props:{width:"90%"}}),d=new oe({props:{width:"80%"}}),w=new oe({props:{width:"95%"}}),{c(){e=P("li"),n=P("span"),C(t.$$.fragment),l=G(),C(a.$$.fragment),r=G(),s=P("div"),C(i.$$.fragment),c=G(),C(d.$$.fragment),g=G(),C(w.$$.fragment),this.h()},l(_){e=M(_,"LI",{});var b=y(e);n=M(b,"SPAN",{});var L=y(n);N(t.$$.fragment,L),l=H(L),N(a.$$.fragment,L),L.forEach(h),r=H(b),s=M(b,"DIV",{class:!0});var u=y(s);N(i.$$.fragment,u),c=H(u),N(d.$$.fragment,u),g=H(u),N(w.$$.fragment,u),u.forEach(h),b.forEach(h),this.h()},h(){v(n,"bx--accordion__heading",!0),Y(s,"class","bx--accordion__content"),v(e,"bx--accordion__item",!0),v(e,"bx--accordion__item--active",!0)},m(_,b){k(_,e,b),p(e,n),D(t,n,null),p(n,l),D(a,n,null),p(e,r),p(e,s),D(i,s,null),p(s,c),D(d,s,null),p(s,g),D(w,s,null),f=!0},i(_){f||(T(t.$$.fragment,_),T(a.$$.fragment,_),T(i.$$.fragment,_),T(d.$$.fragment,_),T(w.$$.fragment,_),f=!0)},o(_){W(t.$$.fragment,_),W(a.$$.fragment,_),W(i.$$.fragment,_),W(d.$$.fragment,_),W(w.$$.fragment,_),f=!1},d(_){_&&h(e),O(t),O(a),O(i),O(d),O(w)}}}function Ee(o,e){let n,t,l,a,r,s,i;return l=new _e({props:{class:"bx--accordion__arrow"}}),r=new oe({props:{class:"bx--accordion__title"}}),{key:o,first:null,c(){n=P("li"),t=P("span"),C(l.$$.fragment),a=G(),C(r.$$.fragment),s=G(),this.h()},l(c){n=M(c,"LI",{class:!0});var d=y(n);t=M(d,"SPAN",{class:!0});var g=y(t);N(l.$$.fragment,g),a=H(g),N(r.$$.fragment,g),g.forEach(h),s=H(d),d.forEach(h),this.h()},h(){Y(t,"class","bx--accordion__heading"),Y(n,"class","bx--accordion__item"),this.first=n},m(c,d){k(c,n,d),p(n,t),D(l,t,null),p(t,a),D(r,t,null),p(n,s),i=!0},p(c,d){},i(c){i||(T(l.$$.fragment,c),T(r.$$.fragment,c),i=!0)},o(c){W(l.$$.fragment,c),W(r.$$.fragment,c),i=!1},d(c){c&&h(n),O(l),O(r)}}}function Ue(o){let e,n,t=[],l=new Map,a,r,s,i=o[3]&&$e(),c=Array.from({length:o[3]?o[0]-1:o[0]},ze);const d=f=>f[9];for(let f=0;f<c.length;f+=1){let _=ye(o,c,f),b=d(_);l.set(b,t[f]=Ee(b))}let g=[o[4]],w={};for(let f=0;f<g.length;f+=1)w=F(w,g[f]);return{c(){e=P("ul"),i&&i.c(),n=G();for(let f=0;f<t.length;f+=1)t[f].c();this.h()},l(f){e=M(f,"UL",{});var _=y(e);i&&i.l(_),n=H(_);for(let b=0;b<t.length;b+=1)t[b].l(_);_.forEach(h),this.h()},h(){U(e,w),v(e,"bx--skeleton",!0),v(e,"bx--accordion",!0),v(e,"bx--accordion--start",o[1]==="start"),v(e,"bx--accordion--end",o[1]==="end"),v(e,"bx--accordion--sm",o[2]==="sm"),v(e,"bx--accordion--xl",o[2]==="xl")},m(f,_){k(f,e,_),i&&i.m(e,null),p(e,n);for(let b=0;b<t.length;b+=1)t[b].m(e,null);a=!0,r||(s=[q(e,"click",o[5]),q(e,"mouseover",o[6]),q(e,"mouseenter",o[7]),q(e,"mouseleave",o[8])],r=!0)},p(f,[_]){f[3]?i?_&8&&T(i,1):(i=$e(),i.c(),T(i,1),i.m(e,n)):i&&(he(),W(i,1,1,()=>{i=null}),de()),_&9&&(c=Array.from({length:f[3]?f[0]-1:f[0]},ze),he(),t=Ie(t,_,d,1,f,c,l,e,Se,Ee,null,ye),de()),U(e,w=Z(g,[_&16&&f[4]])),v(e,"bx--skeleton",!0),v(e,"bx--accordion",!0),v(e,"bx--accordion--start",f[1]==="start"),v(e,"bx--accordion--end",f[1]==="end"),v(e,"bx--accordion--sm",f[2]==="sm"),v(e,"bx--accordion--xl",f[2]==="xl")},i(f){if(!a){T(i);for(let _=0;_<c.length;_+=1)T(t[_]);a=!0}},o(f){W(i);for(let _=0;_<t.length;_+=1)W(t[_]);a=!1},d(f){f&&h(e),i&&i.d();for(let _=0;_<t.length;_+=1)t[_].d();r=!1,le(s)}}}const ze=(o,e)=>e;function je(o,e,n){const t=["count","align","size","open"];let l=B(e,t),{count:a=4}=e,{align:r="end"}=e,{size:s=void 0}=e,{open:i=!0}=e;function c(f){S.call(this,o,f)}function d(f){S.call(this,o,f)}function g(f){S.call(this,o,f)}function w(f){S.call(this,o,f)}return o.$$set=f=>{e=F(F({},e),j(f)),n(4,l=B(e,t)),"count"in f&&n(0,a=f.count),"align"in f&&n(1,r=f.align),"size"in f&&n(2,s=f.size),"open"in f&&n(3,i=f.open)},[a,r,s,i,l,c,d,g,w]}class Ze extends K{constructor(e){super(),X(this,e,je,Ue,x,{count:0,align:1,size:2,open:3})}}function Je(o){let e,n,t,l;const a=o[6].default,r=ie(a,o,o[5],null);let s=[o[3]],i={};for(let c=0;c<s.length;c+=1)i=F(i,s[c]);return{c(){e=P("ul"),r&&r.c(),this.h()},l(c){e=M(c,"UL",{});var d=y(e);r&&r.l(d),d.forEach(h),this.h()},h(){U(e,i),v(e,"bx--accordion",!0),v(e,"bx--accordion--start",o[0]==="start"),v(e,"bx--accordion--end",o[0]==="end"),v(e,"bx--accordion--sm",o[1]==="sm"),v(e,"bx--accordion--xl",o[1]==="xl")},m(c,d){k(c,e,d),r&&r.m(e,null),n=!0,t||(l=[q(e,"click",o[7]),q(e,"mouseover",o[8]),q(e,"mouseenter",o[9]),q(e,"mouseleave",o[10])],t=!0)},p(c,d){r&&r.p&&(!n||d&32)&&ce(r,a,c,c[5],n?ue(a,c[5],d,null):fe(c[5]),null),U(e,i=Z(s,[d&8&&c[3]])),v(e,"bx--accordion",!0),v(e,"bx--accordion--start",c[0]==="start"),v(e,"bx--accordion--end",c[0]==="end"),v(e,"bx--accordion--sm",c[1]==="sm"),v(e,"bx--accordion--xl",c[1]==="xl")},i(c){n||(T(r,c),n=!0)},o(c){W(r,c),n=!1},d(c){c&&h(e),r&&r.d(c),t=!1,le(l)}}}function Ke(o){let e,n;const t=[o[3],{align:o[0]},{size:o[1]}];let l={};for(let a=0;a<t.length;a+=1)l=F(l,t[a]);return e=new Ze({props:l}),e.$on("click",o[11]),e.$on("mouseover",o[12]),e.$on("mouseenter",o[13]),e.$on("mouseleave",o[14]),{c(){C(e.$$.fragment)},l(a){N(e.$$.fragment,a)},m(a,r){D(e,a,r),n=!0},p(a,r){const s=r&11?Z(t,[r&8&&Te(a[3]),r&1&&{align:a[0]},r&2&&{size:a[1]}]):{};e.$set(s)},i(a){n||(T(e.$$.fragment,a),n=!0)},o(a){W(e.$$.fragment,a),n=!1},d(a){O(e,a)}}}function Xe(o){let e,n,t,l;const a=[Ke,Je],r=[];function s(i,c){return i[2]?0:1}return e=s(o),n=r[e]=a[e](o),{c(){n.c(),t=re()},l(i){n.l(i),t=re()},m(i,c){r[e].m(i,c),k(i,t,c),l=!0},p(i,[c]){let d=e;e=s(i),e===d?r[e].p(i,c):(he(),W(r[d],1,1,()=>{r[d]=null}),de(),n=r[e],n?n.p(i,c):(n=r[e]=a[e](i),n.c()),T(n,1),n.m(t.parentNode,t))},i(i){l||(T(n),l=!0)},o(i){W(n),l=!1},d(i){r[e].d(i),i&&h(t)}}}function xe(o,e,n){const t=["align","size","disabled","skeleton"];let l=B(e,t),{$$slots:a={},$$scope:r}=e,{align:s="end"}=e,{size:i=void 0}=e,{disabled:c=!1}=e,{skeleton:d=!1}=e;const g=Oe(c);Re("Accordion",{disableItems:g});function w($){S.call(this,o,$)}function f($){S.call(this,o,$)}function _($){S.call(this,o,$)}function b($){S.call(this,o,$)}function L($){S.call(this,o,$)}function u($){S.call(this,o,$)}function m($){S.call(this,o,$)}function R($){S.call(this,o,$)}return o.$$set=$=>{e=F(F({},e),j($)),n(3,l=B(e,t)),"align"in $&&n(0,s=$.align),"size"in $&&n(1,i=$.size),"disabled"in $&&n(4,c=$.disabled),"skeleton"in $&&n(2,d=$.skeleton),"$$scope"in $&&n(5,r=$.$$scope)},o.$$.update=()=>{o.$$.dirty&16&&g.set(c)},[s,i,d,l,c,r,a,w,f,_,b,L,u,m,R]}class et extends K{constructor(e){super(),X(this,e,xe,Xe,x,{align:0,size:1,disabled:4,skeleton:2})}}const tt=o=>({}),Ae=o=>({});function nt(o){let e;return{c(){e=E(o[2])},l(n){e=z(n,o[2])},m(n,t){k(n,e,t)},p(n,t){t&4&&me(e,n[2])},d(n){n&&h(e)}}}function ot(o){let e,n,t,l,a,r,s,i,c,d;t=new _e({props:{class:"bx--accordion__arrow","aria-label":o[3]}});const g=o[7].title,w=ie(g,o,o[6],Ae),f=w||nt(o),_=o[7].default,b=ie(_,o,o[6],null);let L=[o[5]],u={};for(let m=0;m<L.length;m+=1)u=F(u,L[m]);return{c(){e=P("li"),n=P("button"),C(t.$$.fragment),l=G(),a=P("div"),f&&f.c(),r=G(),s=P("div"),b&&b.c(),this.h()},l(m){e=M(m,"LI",{});var R=y(e);n=M(R,"BUTTON",{type:!0,title:!0,"aria-expanded":!0});var $=y(n);N(t.$$.fragment,$),l=H($),a=M($,"DIV",{});var A=y(a);f&&f.l(A),A.forEach(h),$.forEach(h),r=H(R),s=M(R,"DIV",{});var Q=y(s);b&&b.l(Q),Q.forEach(h),R.forEach(h),this.h()},h(){v(a,"bx--accordion__title",!0),Y(n,"type","button"),Y(n,"title",o[3]),Y(n,"aria-expanded",o[0]),n.disabled=o[1],v(n,"bx--accordion__heading",!0),v(s,"bx--accordion__content",!0),U(e,u),v(e,"bx--accordion__item",!0),v(e,"bx--accordion__item--active",o[0]),v(e,"bx--accordion__item--disabled",o[1]),v(e,"bx--accordion__item--expanding",o[4]==="expanding"),v(e,"bx--accordion__item--collapsing",o[4]==="collapsing")},m(m,R){k(m,e,R),p(e,n),D(t,n,null),p(n,l),p(n,a),f&&f.m(a,null),p(e,r),p(e,s),b&&b.m(s,null),i=!0,c||(d=[q(n,"click",o[9]),q(n,"click",o[14]),q(n,"mouseover",o[10]),q(n,"mouseenter",o[11]),q(n,"mouseleave",o[12]),q(n,"keydown",o[13]),q(n,"keydown",o[15]),q(e,"animationend",o[8]),q(e,"animationend",o[16])],c=!0)},p(m,[R]){const $={};R&8&&($["aria-label"]=m[3]),t.$set($),w?w.p&&(!i||R&64)&&ce(w,g,m,m[6],i?ue(g,m[6],R,tt):fe(m[6]),Ae):f&&f.p&&(!i||R&4)&&f.p(m,i?R:-1),(!i||R&8)&&Y(n,"title",m[3]),(!i||R&1)&&Y(n,"aria-expanded",m[0]),(!i||R&2)&&(n.disabled=m[1]),b&&b.p&&(!i||R&64)&&ce(b,_,m,m[6],i?ue(_,m[6],R,null):fe(m[6]),null),U(e,u=Z(L,[R&32&&m[5]])),v(e,"bx--accordion__item",!0),v(e,"bx--accordion__item--active",m[0]),v(e,"bx--accordion__item--disabled",m[1]),v(e,"bx--accordion__item--expanding",m[4]==="expanding"),v(e,"bx--accordion__item--collapsing",m[4]==="collapsing")},i(m){i||(T(t.$$.fragment,m),T(f,m),T(b,m),i=!0)},o(m){W(t.$$.fragment,m),W(f,m),W(b,m),i=!1},d(m){m&&h(e),O(t),f&&f.d(m),b&&b.d(m),c=!1,le(d)}}}function lt(o,e,n){const t=["title","open","disabled","iconDescription"];let l=B(e,t),{$$slots:a={},$$scope:r}=e,{title:s="title"}=e,{open:i=!1}=e,{disabled:c=!1}=e,{iconDescription:d="Expand/Collapse"}=e,g=c;const f=Ce("Accordion").disableItems.subscribe(I=>{!I&&g||n(1,c=I)});let _;Ne(()=>()=>{f()});function b(I){S.call(this,o,I)}function L(I){S.call(this,o,I)}function u(I){S.call(this,o,I)}function m(I){S.call(this,o,I)}function R(I){S.call(this,o,I)}function $(I){S.call(this,o,I)}const A=()=>{n(0,i=!i),n(4,_=i?"expanding":"collapsing")},Q=({key:I})=>{i&&I==="Escape"&&n(0,i=!1)},ne=()=>{n(4,_=void 0)};return o.$$set=I=>{e=F(F({},e),j(I)),n(5,l=B(e,t)),"title"in I&&n(2,s=I.title),"open"in I&&n(0,i=I.open),"disabled"in I&&n(1,c=I.disabled),"iconDescription"in I&&n(3,d=I.iconDescription),"$$scope"in I&&n(6,r=I.$$scope)},[i,c,s,d,_,l,r,a,b,L,u,m,R,$,A,Q,ne]}class J extends K{constructor(e){super(),X(this,e,lt,ot,x,{title:2,open:0,disabled:1,iconDescription:3})}}function Pe(o){let e,n;return{c(){e=ee("title"),n=E(o[1])},l(t){e=te(t,"title",{});var l=y(e);n=z(l,o[1]),l.forEach(h)},m(t,l){k(t,e,l),p(e,n)},p(t,l){l&2&&me(n,t[1])},d(t){t&&h(e)}}}function st(o){let e,n,t,l=o[1]&&Pe(o),a=[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},{width:o[0]},{height:o[0]},o[2],o[3]],r={};for(let s=0;s<a.length;s+=1)r=F(r,a[s]);return{c(){e=ee("svg"),l&&l.c(),n=ee("path"),t=ee("path"),this.h()},l(s){e=te(s,"svg",{xmlns:!0,viewBox:!0,fill:!0,preserveAspectRatio:!0,width:!0,height:!0});var i=y(e);l&&l.l(i),n=te(i,"path",{d:!0}),y(n).forEach(h),t=te(i,"path",{d:!0}),y(t).forEach(h),i.forEach(h),this.h()},h(){Y(n,"d","M26,28H6a2.0027,2.0027,0,0,1-2-2V6A2.0027,2.0027,0,0,1,6,4H16V6H6V26H26V16h2V26A2.0027,2.0027,0,0,1,26,28Z"),Y(t,"d","M20 2L20 4 26.586 4 18 12.586 19.414 14 28 5.414 28 12 30 12 30 2 20 2z"),ae(e,r)},m(s,i){k(s,e,i),l&&l.m(e,null),p(e,n),p(e,t)},p(s,[i]){s[1]?l?l.p(s,i):(l=Pe(s),l.c(),l.m(e,n)):l&&(l.d(1),l=null),ae(e,r=Z(a,[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},i&1&&{width:s[0]},i&1&&{height:s[0]},i&4&&s[2],i&8&&s[3]]))},i:V,o:V,d(s){s&&h(e),l&&l.d()}}}function at(o,e,n){let t,l;const a=["size","title"];let r=B(e,a),{size:s=16}=e,{title:i=void 0}=e;return o.$$set=c=>{n(5,e=F(F({},e),j(c))),n(3,r=B(e,a)),"size"in c&&n(0,s=c.size),"title"in c&&n(1,i=c.title)},o.$$.update=()=>{n(4,t=e["aria-label"]||e["aria-labelledby"]||i),n(2,l={"aria-hidden":t?void 0:!0,role:t?"img":void 0,focusable:Number(e.tabindex)===0?!0:void 0})},e=j(e),[s,i,l,r,t]}class Me extends K{constructor(e){super(),X(this,e,at,st,x,{size:0,title:1})}}function rt(o){let e;const n=o[1].default,t=ie(n,o,o[6],null);return{c(){t&&t.c()},l(l){t&&t.l(l)},m(l,a){t&&t.m(l,a),e=!0},p(l,a){t&&t.p&&(!e||a&64)&&ce(t,n,l,l[6],e?ue(n,l[6],a,null):fe(l[6]),null)},i(l){e||(T(t,l),e=!0)},o(l){W(t,l),e=!1},d(l){t&&t.d(l)}}}function it(o){let e,n;const t=[o[0],{target:"_blank"},{icon:Me}];let l={$$slots:{default:[rt]},$$scope:{ctx:o}};for(let a=0;a<t.length;a+=1)l=F(l,t[a]);return e=new Le({props:l}),e.$on("click",o[2]),e.$on("mouseover",o[3]),e.$on("mouseenter",o[4]),e.$on("mouseleave",o[5]),{c(){C(e.$$.fragment)},l(a){N(e.$$.fragment,a)},m(a,r){D(e,a,r),n=!0},p(a,[r]){const s=r&1?Z(t,[r&1&&Te(a[0]),t[1],r&0&&{icon:Me}]):{};r&64&&(s.$$scope={dirty:r,ctx:a}),e.$set(s)},i(a){n||(T(e.$$.fragment,a),n=!0)},o(a){W(e.$$.fragment,a),n=!1},d(a){O(e,a)}}}function ct(o,e,n){const t=[];let l=B(e,t),{$$slots:a={},$$scope:r}=e;function s(g){S.call(this,o,g)}function i(g){S.call(this,o,g)}function c(g){S.call(this,o,g)}function d(g){S.call(this,o,g)}return o.$$set=g=>{e=F(F({},e),j(g)),n(0,l=B(e,t)),"$$scope"in g&&n(6,r=g.$$scope)},[l,a,s,i,c,d,r]}class se extends K{constructor(e){super(),X(this,e,ct,it,x,{})}}function ft(o){let e;return{c(){e=E("Arcade Game Typography")},l(n){e=z(n,"Arcade Game Typography")},m(n,t){k(n,e,t)},d(n){n&&h(e)}}}function ut(o){let e,n,t,l,a;return t=new se({props:{inline:!0,href:"https://readonlymemory.vg/shop/book/arcade-game-typography/",$$slots:{default:[ft]},$$scope:{ctx:o}}}),{c(){e=P("p"),n=E(`All included fonts where hand-drawn from Toshi Omagari's magnificent book
                `),C(t.$$.fragment),l=E(`
                as reference. It's a lovely hommage to the hey-day of arcade games and to me it's been one of my favourite videogame related books.`)},l(r){e=M(r,"P",{});var s=y(e);n=z(s,`All included fonts where hand-drawn from Toshi Omagari's magnificent book
                `),N(t.$$.fragment,s),l=z(s,`
                as reference. It's a lovely hommage to the hey-day of arcade games and to me it's been one of my favourite videogame related books.`),s.forEach(h)},m(r,s){k(r,e,s),p(e,n),D(t,e,null),p(e,l),a=!0},p(r,s){const i={};s&2&&(i.$$scope={dirty:s,ctx:r}),t.$set(i)},i(r){a||(T(t.$$.fragment,r),a=!0)},o(r){W(t.$$.fragment,r),a=!1},d(r){r&&h(e),O(t)}}}function ht(o){let e,n;return{c(){e=P("strong"),n=E("Where are these fonts taken from?")},l(t){e=M(t,"STRONG",{});var l=y(e);n=z(l,"Where are these fonts taken from?"),l.forEach(h)},m(t,l){k(t,e,l),p(e,n)},p:V,d(t){t&&h(e)}}}function dt(o){let e;return{c(){e=E("Playdate")},l(n){e=z(n,"Playdate")},m(n,t){k(n,e,t)},d(n){n&&h(e)}}}function mt(o){let e,n,t,l,a;return t=new se({props:{inline:!0,href:"https://readonlymemory.vg/shop/book/arcade-game-typography/",$$slots:{default:[dt]},$$scope:{ctx:o}}}),{c(){e=P("p"),n=E(`The fonts have created with Panic's
                `),C(t.$$.fragment),l=E(`
                in mind, a tiny handheld game system with a monochrome display. If you find these useful for other purposes, please go ahead and make use of them!`)},l(r){e=M(r,"P",{});var s=y(e);n=z(s,`The fonts have created with Panic's
                `),N(t.$$.fragment,s),l=z(s,`
                in mind, a tiny handheld game system with a monochrome display. If you find these useful for other purposes, please go ahead and make use of them!`),s.forEach(h)},m(r,s){k(r,e,s),p(e,n),D(t,e,null),p(e,l),a=!0},p(r,s){const i={};s&2&&(i.$$scope={dirty:s,ctx:r}),t.$set(i)},i(r){a||(T(t.$$.fragment,r),a=!0)},o(r){W(t.$$.fragment,r),a=!1},d(r){r&&h(e),O(t)}}}function _t(o){let e,n;return{c(){e=P("strong"),n=E("Who are these fonts for?")},l(t){e=M(t,"STRONG",{});var l=y(e);n=z(l,"Who are these fonts for?"),l.forEach(h)},m(t,l){k(t,e,l),p(e,n)},p:V,d(t){t&&h(e)}}}function gt(o){let e,n,t,l,a;return{c(){e=P("p"),n=E(`This question can only be answered by the original designers of these fonts. Drawing only the characters used by a game, saving diskspace,
                limited knowledge of Western typography. My guess is as good as your's. However, it `),t=P("em"),l=E("seems"),a=E(` to me that the maker of the book left out
                some characters on purpose, e.g. some spread page highlight the quality of a font at the cost of completeness.`)},l(r){e=M(r,"P",{});var s=y(e);n=z(s,`This question can only be answered by the original designers of these fonts. Drawing only the characters used by a game, saving diskspace,
                limited knowledge of Western typography. My guess is as good as your's. However, it `),t=M(s,"EM",{});var i=y(t);l=z(i,"seems"),i.forEach(h),a=z(s,` to me that the maker of the book left out
                some characters on purpose, e.g. some spread page highlight the quality of a font at the cost of completeness.`),s.forEach(h)},m(r,s){k(r,e,s),p(e,n),p(e,t),p(t,l),p(e,a)},p:V,d(r){r&&h(e)}}}function pt(o){let e,n;return{c(){e=P("strong"),n=E("Why are some fonts incomplete?")},l(t){e=M(t,"STRONG",{});var l=y(e);n=z(l,"Why are some fonts incomplete?"),l.forEach(h)},m(t,l){k(t,e,l),p(e,n)},p:V,d(t){t&&h(e)}}}function bt(o){let e,n,t,l,a;return{c(){e=P("p"),n=E(`Fonts are tagged as incomplete, when they lack one or more characters in their supported character range. So when a font supports uppercase letters,
                but misses single characters, it's incomplete. Font are `),t=P("em"),l=E("not"),a=E(` tagged as incomplete, when they support the full range of uppercase characters,
                but no lowercase characters.`)},l(r){e=M(r,"P",{});var s=y(e);n=z(s,`Fonts are tagged as incomplete, when they lack one or more characters in their supported character range. So when a font supports uppercase letters,
                but misses single characters, it's incomplete. Font are `),t=M(s,"EM",{});var i=y(t);l=z(i,"not"),i.forEach(h),a=z(s,` tagged as incomplete, when they support the full range of uppercase characters,
                but no lowercase characters.`),s.forEach(h)},m(r,s){k(r,e,s),p(e,n),p(e,t),p(t,l),p(e,a)},p:V,d(r){r&&h(e)}}}function kt(o){let e,n;return{c(){e=P("strong"),n=E("When is a font tagged as incomplete?")},l(t){e=M(t,"STRONG",{});var l=y(e);n=z(l,"When is a font tagged as incomplete?"),l.forEach(h)},m(t,l){k(t,e,l),p(e,n)},p:V,d(t){t&&h(e)}}}function vt(o){let e;return{c(){e=E("Playdate's")},l(n){e=z(n,"Playdate's")},m(n,t){k(n,e,t)},d(n){n&&h(e)}}}function wt(o){let e,n,t,l,a;return t=new se({props:{inline:!0,href:"https://readonlymemory.vg/shop/book/arcade-game-typography/",$$slots:{default:[vt]},$$scope:{ctx:o}}}),{c(){e=P("p"),n=E(`If you know the book these fonts were taken from, you might wonder why some fonts are missing entirely. That's mostly the case when a font makes
                use of multiple colours, be it for aesthetic reasons or to make the font more legible through anti-aliasing. Since this mostly doesn't work for the
                `),C(t.$$.fragment),l=E(`
                monochrome display, most of these fonts were omitted while others were adapted.`)},l(r){e=M(r,"P",{});var s=y(e);n=z(s,`If you know the book these fonts were taken from, you might wonder why some fonts are missing entirely. That's mostly the case when a font makes
                use of multiple colours, be it for aesthetic reasons or to make the font more legible through anti-aliasing. Since this mostly doesn't work for the
                `),N(t.$$.fragment,s),l=z(s,`
                monochrome display, most of these fonts were omitted while others were adapted.`),s.forEach(h)},m(r,s){k(r,e,s),p(e,n),D(t,e,null),p(e,l),a=!0},p(r,s){const i={};s&2&&(i.$$scope={dirty:s,ctx:r}),t.$set(i)},i(r){a||(T(t.$$.fragment,r),a=!0)},o(r){W(t.$$.fragment,r),a=!1},d(r){r&&h(e),O(t)}}}function yt(o){let e,n;return{c(){e=P("strong"),n=E("Why are some fonts missing?")},l(t){e=M(t,"STRONG",{});var l=y(e);n=z(l,"Why are some fonts missing?"),l.forEach(h)},m(t,l){k(t,e,l),p(e,n)},p:V,d(t){t&&h(e)}}}function $t(o){let e,n,t,l,a,r,s,i;return{c(){e=P("p"),n=E(`All of the fonts included were sampled from classic video games, that made use of a 8x8 grid. Even when a glyph (or \u201Dcharacter\u201D) occupies less space,
                it lives on a 8x8 grid. For example, both wide (e.g. uppercase `),t=P("em"),l=E("W"),a=E(") and narrow glyphs (e.g. uppercase "),r=P("em"),s=E("I"),i=E(") will have the same dimensions.")},l(c){e=M(c,"P",{});var d=y(e);n=z(d,`All of the fonts included were sampled from classic video games, that made use of a 8x8 grid. Even when a glyph (or \u201Dcharacter\u201D) occupies less space,
                it lives on a 8x8 grid. For example, both wide (e.g. uppercase `),t=M(d,"EM",{});var g=y(t);l=z(g,"W"),g.forEach(h),a=z(d,") and narrow glyphs (e.g. uppercase "),r=M(d,"EM",{});var w=y(r);s=z(w,"I"),w.forEach(h),i=z(d,") will have the same dimensions."),d.forEach(h)},m(c,d){k(c,e,d),p(e,n),p(e,t),p(t,l),p(e,a),p(e,r),p(r,s),p(e,i)},p:V,d(c){c&&h(e)}}}function Et(o){let e,n;return{c(){e=P("strong"),n=E("What's a fixed size font?")},l(t){e=M(t,"STRONG",{});var l=y(e);n=z(l,"What's a fixed size font?"),l.forEach(h)},m(t,l){k(t,e,l),p(e,n)},p:V,d(t){t&&h(e)}}}function zt(o){let e;return{c(){e=E("Caps")},l(n){e=z(n,"Caps")},m(n,t){k(n,e,t)},d(n){n&&h(e)}}}function At(o){let e,n,t,l,a,r,s,i,c,d,g;return t=new se({props:{inline:!0,href:"https://play.date/caps/",$$slots:{default:[zt]},$$scope:{ctx:o}}}),{c(){e=P("p"),n=E(`The opposite of a fixed width font (see above). Panic's font editor
                `),C(t.$$.fragment),l=E(`
                has an auto-size feature which basically draws a glyph on the horizontal space it actually occupies. So, an uppercase `),a=P("em"),r=E("I"),s=E(` is usually narrower
                than an uppercase `),i=P("em"),c=E("W"),d=E(". While these fonts haven't been design with that in mind, some of them might work better for you in their auto-sized variant.")},l(w){e=M(w,"P",{});var f=y(e);n=z(f,`The opposite of a fixed width font (see above). Panic's font editor
                `),N(t.$$.fragment,f),l=z(f,`
                has an auto-size feature which basically draws a glyph on the horizontal space it actually occupies. So, an uppercase `),a=M(f,"EM",{});var _=y(a);r=z(_,"I"),_.forEach(h),s=z(f,` is usually narrower
                than an uppercase `),i=M(f,"EM",{});var b=y(i);c=z(b,"W"),b.forEach(h),d=z(f,". While these fonts haven't been design with that in mind, some of them might work better for you in their auto-sized variant."),f.forEach(h)},m(w,f){k(w,e,f),p(e,n),D(t,e,null),p(e,l),p(e,a),p(a,r),p(e,s),p(e,i),p(i,c),p(e,d),g=!0},p(w,f){const _={};f&2&&(_.$$scope={dirty:f,ctx:w}),t.$set(_)},i(w){g||(T(t.$$.fragment,w),g=!0)},o(w){W(t.$$.fragment,w),g=!1},d(w){w&&h(e),O(t)}}}function Pt(o){let e,n;return{c(){e=P("strong"),n=E("What's an auto-sized font?")},l(t){e=M(t,"STRONG",{});var l=y(e);n=z(l,"What's an auto-sized font?"),l.forEach(h)},m(t,l){k(t,e,l),p(e,n)},p:V,d(t){t&&h(e)}}}function Mt(o){let e;return{c(){e=E("CC0")},l(n){e=z(n,"CC0")},m(n,t){k(n,e,t)},d(n){n&&h(e)}}}function Tt(o){let e,n,t,l,a;return t=new se({props:{inline:!0,href:"https://creativecommons.org/publicdomain/zero/1.0/",$$slots:{default:[Mt]},$$scope:{ctx:o}}}),{c(){e=P("p"),n=E(`All included fonts are part of the public domain and as such they are available under the terms of the
                `),C(t.$$.fragment),l=E(`
                license.`)},l(r){e=M(r,"P",{});var s=y(e);n=z(s,`All included fonts are part of the public domain and as such they are available under the terms of the
                `),N(t.$$.fragment,s),l=z(s,`
                license.`),s.forEach(h)},m(r,s){k(r,e,s),p(e,n),D(t,e,null),p(e,l),a=!0},p(r,s){const i={};s&2&&(i.$$scope={dirty:s,ctx:r}),t.$set(i)},i(r){a||(T(t.$$.fragment,r),a=!0)},o(r){W(t.$$.fragment,r),a=!1},d(r){r&&h(e),O(t)}}}function Wt(o){let e,n;return{c(){e=P("strong"),n=E("How are these fonts license?")},l(t){e=M(t,"STRONG",{});var l=y(e);n=z(l,"How are these fonts license?"),l.forEach(h)},m(t,l){k(t,e,l),p(e,n)},p:V,d(t){t&&h(e)}}}function It(o){let e,n,t,l,a,r,s,i,c,d,g,w,f,_,b,L;return e=new J({props:{open:o[0],$$slots:{title:[ht],default:[ut]},$$scope:{ctx:o}}}),t=new J({props:{open:o[0],$$slots:{title:[_t],default:[mt]},$$scope:{ctx:o}}}),a=new J({props:{open:o[0],$$slots:{title:[pt],default:[gt]},$$scope:{ctx:o}}}),s=new J({props:{open:o[0],$$slots:{title:[kt],default:[bt]},$$scope:{ctx:o}}}),c=new J({props:{open:o[0],$$slots:{title:[yt],default:[wt]},$$scope:{ctx:o}}}),g=new J({props:{open:o[0],$$slots:{title:[Et],default:[$t]},$$scope:{ctx:o}}}),f=new J({props:{open:o[0],$$slots:{title:[Pt],default:[At]},$$scope:{ctx:o}}}),b=new J({props:{open:o[0],$$slots:{title:[Wt],default:[Tt]},$$scope:{ctx:o}}}),{c(){C(e.$$.fragment),n=G(),C(t.$$.fragment),l=G(),C(a.$$.fragment),r=G(),C(s.$$.fragment),i=G(),C(c.$$.fragment),d=G(),C(g.$$.fragment),w=G(),C(f.$$.fragment),_=G(),C(b.$$.fragment)},l(u){N(e.$$.fragment,u),n=H(u),N(t.$$.fragment,u),l=H(u),N(a.$$.fragment,u),r=H(u),N(s.$$.fragment,u),i=H(u),N(c.$$.fragment,u),d=H(u),N(g.$$.fragment,u),w=H(u),N(f.$$.fragment,u),_=H(u),N(b.$$.fragment,u)},m(u,m){D(e,u,m),k(u,n,m),D(t,u,m),k(u,l,m),D(a,u,m),k(u,r,m),D(s,u,m),k(u,i,m),D(c,u,m),k(u,d,m),D(g,u,m),k(u,w,m),D(f,u,m),k(u,_,m),D(b,u,m),L=!0},p(u,m){const R={};m&2&&(R.$$scope={dirty:m,ctx:u}),e.$set(R);const $={};m&2&&($.$$scope={dirty:m,ctx:u}),t.$set($);const A={};m&2&&(A.$$scope={dirty:m,ctx:u}),a.$set(A);const Q={};m&2&&(Q.$$scope={dirty:m,ctx:u}),s.$set(Q);const ne={};m&2&&(ne.$$scope={dirty:m,ctx:u}),c.$set(ne);const I={};m&2&&(I.$$scope={dirty:m,ctx:u}),g.$set(I);const ge={};m&2&&(ge.$$scope={dirty:m,ctx:u}),f.$set(ge);const pe={};m&2&&(pe.$$scope={dirty:m,ctx:u}),b.$set(pe)},i(u){L||(T(e.$$.fragment,u),T(t.$$.fragment,u),T(a.$$.fragment,u),T(s.$$.fragment,u),T(c.$$.fragment,u),T(g.$$.fragment,u),T(f.$$.fragment,u),T(b.$$.fragment,u),L=!0)},o(u){W(e.$$.fragment,u),W(t.$$.fragment,u),W(a.$$.fragment,u),W(s.$$.fragment,u),W(c.$$.fragment,u),W(g.$$.fragment,u),W(f.$$.fragment,u),W(b.$$.fragment,u),L=!1},d(u){O(e,u),u&&h(n),O(t,u),u&&h(l),O(a,u),u&&h(r),O(s,u),u&&h(i),O(c,u),u&&h(d),O(g,u),u&&h(w),O(f,u),u&&h(_),O(b,u)}}}function St(o){let e,n;return e=new et({props:{$$slots:{default:[It]},$$scope:{ctx:o}}}),{c(){C(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,l){D(e,t,l),n=!0},p(t,l){const a={};l&2&&(a.$$scope={dirty:l,ctx:t}),e.$set(a)},i(t){n||(T(e.$$.fragment,t),n=!0)},o(t){W(e.$$.fragment,t),n=!1},d(t){O(e,t)}}}function Rt(o){let e,n;return e=new Fe({props:{padding:!0,$$slots:{default:[St]},$$scope:{ctx:o}}}),{c(){C(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,l){D(e,t,l),n=!0},p(t,l){const a={};l&2&&(a.$$scope={dirty:l,ctx:t}),e.$set(a)},i(t){n||(T(e.$$.fragment,t),n=!0)},o(t){W(e.$$.fragment,t),n=!1},d(t){O(e,t)}}}function Ct(o){let e,n,t,l,a,r;return a=new qe({props:{$$slots:{default:[Rt]},$$scope:{ctx:o}}}),{c(){e=G(),n=P("h2"),t=E("Frequently Asked Questions"),l=G(),C(a.$$.fragment),this.h()},l(s){De('[data-svelte="svelte-2xq18x"]',document.head).forEach(h),e=H(s),n=M(s,"H2",{});var c=y(n);t=z(c,"Frequently Asked Questions"),c.forEach(h),l=H(s),N(a.$$.fragment,s),this.h()},h(){document.title="Frequently Asked Questions | Playdate Arcade Fonts"},m(s,i){k(s,e,i),k(s,n,i),p(n,t),k(s,l,i),D(a,s,i),r=!0},p(s,[i]){const c={};i&2&&(c.$$scope={dirty:i,ctx:s}),a.$set(c)},i(s){r||(T(a.$$.fragment,s),r=!0)},o(s){W(a.$$.fragment,s),r=!1},d(s){s&&h(e),s&&h(n),s&&h(l),O(a,s)}}}function Nt(o){return[!1]}class Lt extends K{constructor(e){super(),X(this,e,Nt,Ct,x,{})}}export{Lt as default};
