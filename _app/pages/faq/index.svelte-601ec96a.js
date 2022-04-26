import{S as J,i as K,s as X,U as ee,t as E,V as te,a as $,h as z,d as h,g as w,M as g,j as me,C as L,b as Y,W as ae,z as Z,E as B,F,G as j,l as ie,O as C,e as T,c as I,I as U,Q as b,R as S,T as le,f as ge,X as Me,w as N,k as H,x as D,m as V,y as O,q as P,o as M,B as q,n as de,p as he,Y as Te,Z as Ie,r as We,H as re,J as fe,K as ce,L as ue,A as Pe,_ as Ce,v as Re,$ as Se}from"../../chunks/index-04fcb002.js";import{w as Ne}from"../../chunks/index-1a6227ed.js";import{R as De,C as Oe}from"../../chunks/HeaderSearch.svelte_svelte_type_style_lang-afbcb924.js";import{L as qe}from"../../chunks/Link-e1b4cac7.js";function pe(o){let e,n;return{c(){e=ee("title"),n=E(o[1])},l(t){e=te(t,"title",{});var l=$(e);n=z(l,o[1]),l.forEach(h)},m(t,l){w(t,e,l),g(e,n)},p(t,l){l&2&&me(n,t[1])},d(t){t&&h(e)}}}function Le(o){let e,n,t=o[1]&&pe(o),l=[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},{width:o[0]},{height:o[0]},o[2],o[3]],s={};for(let i=0;i<l.length;i+=1)s=L(s,l[i]);return{c(){e=ee("svg"),t&&t.c(),n=ee("path"),this.h()},l(i){e=te(i,"svg",{xmlns:!0,viewBox:!0,fill:!0,preserveAspectRatio:!0,width:!0,height:!0});var a=$(e);t&&t.l(a),n=te(a,"path",{d:!0}),$(n).forEach(h),a.forEach(h),this.h()},h(){Y(n,"d","M22 16L12 26 10.6 24.6 19.2 16 10.6 7.4 12 6z"),ae(e,s)},m(i,a){w(i,e,a),t&&t.m(e,null),g(e,n)},p(i,[a]){i[1]?t?t.p(i,a):(t=pe(i),t.c(),t.m(e,n)):t&&(t.d(1),t=null),ae(e,s=Z(l,[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},a&1&&{width:i[0]},a&1&&{height:i[0]},a&4&&i[2],a&8&&i[3]]))},i:B,o:B,d(i){i&&h(e),t&&t.d()}}}function Ge(o,e,n){let t,l;const s=["size","title"];let i=F(e,s),{size:a=16}=e,{title:r=void 0}=e;return o.$$set=f=>{n(5,e=L(L({},e),j(f))),n(3,i=F(e,s)),"size"in f&&n(0,a=f.size),"title"in f&&n(1,r=f.title)},o.$$.update=()=>{n(4,t=e["aria-label"]||e["aria-labelledby"]||r),n(2,l={"aria-hidden":t?void 0:!0,role:t?"img":void 0,focusable:Number(e.tabindex)===0?!0:void 0})},e=j(e),[a,r,l,i,t]}class _e extends J{constructor(e){super(),K(this,e,Ge,Le,X,{size:0,title:1})}}function be(o,e,n){const t=o.slice();return t[2]=e[n].width,t}function He(o){let e,n,t,l,s=[o[4],{style:n="width: "+o[2]+";"+o[4].style}],i={};for(let a=0;a<s.length;a+=1)i=L(i,s[a]);return{c(){e=T("p"),this.h()},l(a){e=I(a,"P",{style:!0}),$(e).forEach(h),this.h()},h(){U(e,i),b(e,"bx--skeleton__text",!0),b(e,"bx--skeleton__heading",o[0])},m(a,r){w(a,e,r),t||(l=[S(e,"click",o[12]),S(e,"mouseover",o[13]),S(e,"mouseenter",o[14]),S(e,"mouseleave",o[15])],t=!0)},p(a,r){U(e,i=Z(s,[r&16&&a[4],r&20&&n!==(n="width: "+a[2]+";"+a[4].style)&&{style:n}])),b(e,"bx--skeleton__text",!0),b(e,"bx--skeleton__heading",a[0])},d(a){a&&h(e),t=!1,le(l)}}}function Ve(o){let e,n,t,l=o[3],s=[];for(let r=0;r<l.length;r+=1)s[r]=ke(be(o,l,r));let i=[o[4]],a={};for(let r=0;r<i.length;r+=1)a=L(a,i[r]);return{c(){e=T("div");for(let r=0;r<s.length;r+=1)s[r].c();this.h()},l(r){e=I(r,"DIV",{});var f=$(e);for(let d=0;d<s.length;d+=1)s[d].l(f);f.forEach(h),this.h()},h(){U(e,a)},m(r,f){w(r,e,f);for(let d=0;d<s.length;d+=1)s[d].m(e,null);n||(t=[S(e,"click",o[8]),S(e,"mouseover",o[9]),S(e,"mouseenter",o[10]),S(e,"mouseleave",o[11])],n=!0)},p(r,f){if(f&9){l=r[3];let d;for(d=0;d<l.length;d+=1){const _=be(r,l,d);s[d]?s[d].p(_,f):(s[d]=ke(_),s[d].c(),s[d].m(e,null))}for(;d<s.length;d+=1)s[d].d(1);s.length=l.length}U(e,a=Z(i,[f&16&&r[4]]))},d(r){r&&h(e),Me(s,r),n=!1,le(t)}}}function ke(o){let e;return{c(){e=T("p"),this.h()},l(n){e=I(n,"P",{style:!0}),$(e).forEach(h),this.h()},h(){ge(e,"width",o[2]),b(e,"bx--skeleton__text",!0),b(e,"bx--skeleton__heading",o[0])},m(n,t){w(n,e,t)},p(n,t){t&8&&ge(e,"width",n[2]),t&1&&b(e,"bx--skeleton__heading",n[0])},d(n){n&&h(e)}}}function Be(o){let e;function n(s,i){return s[1]?Ve:He}let t=n(o),l=t(o);return{c(){l.c(),e=ie()},l(s){l.l(s),e=ie()},m(s,i){l.m(s,i),w(s,e,i)},p(s,[i]){t===(t=n(s))&&l?l.p(s,i):(l.d(1),l=t(s),l&&(l.c(),l.m(e.parentNode,e)))},i:B,o:B,d(s){l.d(s),s&&h(e)}}}function Fe(o,e,n){let t,l,s;const i=["lines","heading","paragraph","width"];let a=F(e,i),{lines:r=3}=e,{heading:f=!1}=e,{paragraph:d=!1}=e,{width:_="100%"}=e;const k=[.973,.153,.567];function u(A){C.call(this,o,A)}function m(A){C.call(this,o,A)}function c(A){C.call(this,o,A)}function v(A){C.call(this,o,A)}function G(A){C.call(this,o,A)}function p(A){C.call(this,o,A)}function R(A){C.call(this,o,A)}function y(A){C.call(this,o,A)}return o.$$set=A=>{e=L(L({},e),j(A)),n(4,a=F(e,i)),"lines"in A&&n(5,r=A.lines),"heading"in A&&n(0,f=A.heading),"paragraph"in A&&n(1,d=A.paragraph),"width"in A&&n(2,_=A.width)},o.$$.update=()=>{if(o.$$.dirty&4&&n(7,l=parseInt(_,10)),o.$$.dirty&4&&n(6,s=_.includes("px")),o.$$.dirty&238&&d)for(let A=0;A<r;A++){const Q=s?l-75:0,ne=s?l:75,W=Math.floor(k[A%3]*(ne-Q+1))+Q+"px";n(3,t=[...t,{width:s?W:`calc(${_} - ${W})`}])}},n(3,t=[]),[f,d,_,t,a,r,s,l,u,m,c,v,G,p,R,y]}class oe extends J{constructor(e){super(),K(this,e,Fe,Be,X,{lines:5,heading:0,paragraph:1,width:2})}}function ve(o,e,n){const t=o.slice();return t[9]=e[n],t}function we(o){let e,n,t,l,s,i,a,r,f,d,_,k,u;return t=new _e({props:{class:"bx--accordion__arrow"}}),s=new oe({props:{class:"bx--accordion__title"}}),r=new oe({props:{width:"90%"}}),d=new oe({props:{width:"80%"}}),k=new oe({props:{width:"95%"}}),{c(){e=T("li"),n=T("span"),N(t.$$.fragment),l=H(),N(s.$$.fragment),i=H(),a=T("div"),N(r.$$.fragment),f=H(),N(d.$$.fragment),_=H(),N(k.$$.fragment),this.h()},l(m){e=I(m,"LI",{});var c=$(e);n=I(c,"SPAN",{});var v=$(n);D(t.$$.fragment,v),l=V(v),D(s.$$.fragment,v),v.forEach(h),i=V(c),a=I(c,"DIV",{class:!0});var G=$(a);D(r.$$.fragment,G),f=V(G),D(d.$$.fragment,G),_=V(G),D(k.$$.fragment,G),G.forEach(h),c.forEach(h),this.h()},h(){b(n,"bx--accordion__heading",!0),Y(a,"class","bx--accordion__content"),b(e,"bx--accordion__item",!0),b(e,"bx--accordion__item--active",!0)},m(m,c){w(m,e,c),g(e,n),O(t,n,null),g(n,l),O(s,n,null),g(e,i),g(e,a),O(r,a,null),g(a,f),O(d,a,null),g(a,_),O(k,a,null),u=!0},i(m){u||(P(t.$$.fragment,m),P(s.$$.fragment,m),P(r.$$.fragment,m),P(d.$$.fragment,m),P(k.$$.fragment,m),u=!0)},o(m){M(t.$$.fragment,m),M(s.$$.fragment,m),M(r.$$.fragment,m),M(d.$$.fragment,m),M(k.$$.fragment,m),u=!1},d(m){m&&h(e),q(t),q(s),q(r),q(d),q(k)}}}function ye(o,e){let n,t,l,s,i,a,r;return l=new _e({props:{class:"bx--accordion__arrow"}}),i=new oe({props:{class:"bx--accordion__title"}}),{key:o,first:null,c(){n=T("li"),t=T("span"),N(l.$$.fragment),s=H(),N(i.$$.fragment),a=H(),this.h()},l(f){n=I(f,"LI",{class:!0});var d=$(n);t=I(d,"SPAN",{class:!0});var _=$(t);D(l.$$.fragment,_),s=V(_),D(i.$$.fragment,_),_.forEach(h),a=V(d),d.forEach(h),this.h()},h(){Y(t,"class","bx--accordion__heading"),Y(n,"class","bx--accordion__item"),this.first=n},m(f,d){w(f,n,d),g(n,t),O(l,t,null),g(t,s),O(i,t,null),g(n,a),r=!0},p(f,d){},i(f){r||(P(l.$$.fragment,f),P(i.$$.fragment,f),r=!0)},o(f){M(l.$$.fragment,f),M(i.$$.fragment,f),r=!1},d(f){f&&h(n),q(l),q(i)}}}function Ye(o){let e,n,t=[],l=new Map,s,i,a,r=o[3]&&we(),f=Array.from({length:o[3]?o[0]-1:o[0]},$e);const d=u=>u[9];for(let u=0;u<f.length;u+=1){let m=ve(o,f,u),c=d(m);l.set(c,t[u]=ye(c))}let _=[o[4]],k={};for(let u=0;u<_.length;u+=1)k=L(k,_[u]);return{c(){e=T("ul"),r&&r.c(),n=H();for(let u=0;u<t.length;u+=1)t[u].c();this.h()},l(u){e=I(u,"UL",{});var m=$(e);r&&r.l(m),n=V(m);for(let c=0;c<t.length;c+=1)t[c].l(m);m.forEach(h),this.h()},h(){U(e,k),b(e,"bx--skeleton",!0),b(e,"bx--accordion",!0),b(e,"bx--accordion--start",o[1]==="start"),b(e,"bx--accordion--end",o[1]==="end"),b(e,"bx--accordion--sm",o[2]==="sm"),b(e,"bx--accordion--xl",o[2]==="xl")},m(u,m){w(u,e,m),r&&r.m(e,null),g(e,n);for(let c=0;c<t.length;c+=1)t[c].m(e,null);s=!0,i||(a=[S(e,"click",o[5]),S(e,"mouseover",o[6]),S(e,"mouseenter",o[7]),S(e,"mouseleave",o[8])],i=!0)},p(u,[m]){u[3]?r?m&8&&P(r,1):(r=we(),r.c(),P(r,1),r.m(e,n)):r&&(de(),M(r,1,1,()=>{r=null}),he()),m&9&&(f=Array.from({length:u[3]?u[0]-1:u[0]},$e),de(),t=Te(t,m,d,1,u,f,l,e,Ie,ye,null,ve),he()),U(e,k=Z(_,[m&16&&u[4]])),b(e,"bx--skeleton",!0),b(e,"bx--accordion",!0),b(e,"bx--accordion--start",u[1]==="start"),b(e,"bx--accordion--end",u[1]==="end"),b(e,"bx--accordion--sm",u[2]==="sm"),b(e,"bx--accordion--xl",u[2]==="xl")},i(u){if(!s){P(r);for(let m=0;m<f.length;m+=1)P(t[m]);s=!0}},o(u){M(r);for(let m=0;m<t.length;m+=1)M(t[m]);s=!1},d(u){u&&h(e),r&&r.d();for(let m=0;m<t.length;m+=1)t[m].d();i=!1,le(a)}}}const $e=(o,e)=>e;function Qe(o,e,n){const t=["count","align","size","open"];let l=F(e,t),{count:s=4}=e,{align:i="end"}=e,{size:a=void 0}=e,{open:r=!0}=e;function f(u){C.call(this,o,u)}function d(u){C.call(this,o,u)}function _(u){C.call(this,o,u)}function k(u){C.call(this,o,u)}return o.$$set=u=>{e=L(L({},e),j(u)),n(4,l=F(e,t)),"count"in u&&n(0,s=u.count),"align"in u&&n(1,i=u.align),"size"in u&&n(2,a=u.size),"open"in u&&n(3,r=u.open)},[s,i,a,r,l,f,d,_,k]}class Ue extends J{constructor(e){super(),K(this,e,Qe,Ye,X,{count:0,align:1,size:2,open:3})}}function je(o){let e,n,t,l;const s=o[6].default,i=re(s,o,o[5],null);let a=[o[3]],r={};for(let f=0;f<a.length;f+=1)r=L(r,a[f]);return{c(){e=T("ul"),i&&i.c(),this.h()},l(f){e=I(f,"UL",{});var d=$(e);i&&i.l(d),d.forEach(h),this.h()},h(){U(e,r),b(e,"bx--accordion",!0),b(e,"bx--accordion--start",o[0]==="start"),b(e,"bx--accordion--end",o[0]==="end"),b(e,"bx--accordion--sm",o[1]==="sm"),b(e,"bx--accordion--xl",o[1]==="xl")},m(f,d){w(f,e,d),i&&i.m(e,null),n=!0,t||(l=[S(e,"click",o[7]),S(e,"mouseover",o[8]),S(e,"mouseenter",o[9]),S(e,"mouseleave",o[10])],t=!0)},p(f,d){i&&i.p&&(!n||d&32)&&fe(i,s,f,f[5],n?ue(s,f[5],d,null):ce(f[5]),null),U(e,r=Z(a,[d&8&&f[3]])),b(e,"bx--accordion",!0),b(e,"bx--accordion--start",f[0]==="start"),b(e,"bx--accordion--end",f[0]==="end"),b(e,"bx--accordion--sm",f[1]==="sm"),b(e,"bx--accordion--xl",f[1]==="xl")},i(f){n||(P(i,f),n=!0)},o(f){M(i,f),n=!1},d(f){f&&h(e),i&&i.d(f),t=!1,le(l)}}}function Ze(o){let e,n;const t=[o[3],{align:o[0]},{size:o[1]}];let l={};for(let s=0;s<t.length;s+=1)l=L(l,t[s]);return e=new Ue({props:l}),e.$on("click",o[11]),e.$on("mouseover",o[12]),e.$on("mouseenter",o[13]),e.$on("mouseleave",o[14]),{c(){N(e.$$.fragment)},l(s){D(e.$$.fragment,s)},m(s,i){O(e,s,i),n=!0},p(s,i){const a=i&11?Z(t,[i&8&&Pe(s[3]),i&1&&{align:s[0]},i&2&&{size:s[1]}]):{};e.$set(a)},i(s){n||(P(e.$$.fragment,s),n=!0)},o(s){M(e.$$.fragment,s),n=!1},d(s){q(e,s)}}}function Je(o){let e,n,t,l;const s=[Ze,je],i=[];function a(r,f){return r[2]?0:1}return e=a(o),n=i[e]=s[e](o),{c(){n.c(),t=ie()},l(r){n.l(r),t=ie()},m(r,f){i[e].m(r,f),w(r,t,f),l=!0},p(r,[f]){let d=e;e=a(r),e===d?i[e].p(r,f):(de(),M(i[d],1,1,()=>{i[d]=null}),he(),n=i[e],n?n.p(r,f):(n=i[e]=s[e](r),n.c()),P(n,1),n.m(t.parentNode,t))},i(r){l||(P(n),l=!0)},o(r){M(n),l=!1},d(r){i[e].d(r),r&&h(t)}}}function Ke(o,e,n){const t=["align","size","disabled","skeleton"];let l=F(e,t),{$$slots:s={},$$scope:i}=e,{align:a="end"}=e,{size:r=void 0}=e,{disabled:f=!1}=e,{skeleton:d=!1}=e;const _=Ne(f);We("Accordion",{disableItems:_});function k(y){C.call(this,o,y)}function u(y){C.call(this,o,y)}function m(y){C.call(this,o,y)}function c(y){C.call(this,o,y)}function v(y){C.call(this,o,y)}function G(y){C.call(this,o,y)}function p(y){C.call(this,o,y)}function R(y){C.call(this,o,y)}return o.$$set=y=>{e=L(L({},e),j(y)),n(3,l=F(e,t)),"align"in y&&n(0,a=y.align),"size"in y&&n(1,r=y.size),"disabled"in y&&n(4,f=y.disabled),"skeleton"in y&&n(2,d=y.skeleton),"$$scope"in y&&n(5,i=y.$$scope)},o.$$.update=()=>{o.$$.dirty&16&&_.set(f)},[a,r,d,l,f,i,s,k,u,m,c,v,G,p,R]}class Xe extends J{constructor(e){super(),K(this,e,Ke,Je,X,{align:0,size:1,disabled:4,skeleton:2})}}const xe=o=>({}),Ee=o=>({});function et(o){let e;return{c(){e=E(o[2])},l(n){e=z(n,o[2])},m(n,t){w(n,e,t)},p(n,t){t&4&&me(e,n[2])},d(n){n&&h(e)}}}function tt(o){let e,n,t,l,s,i,a,r,f,d;t=new _e({props:{class:"bx--accordion__arrow","aria-label":o[3]}});const _=o[7].title,k=re(_,o,o[6],Ee),u=k||et(o),m=o[7].default,c=re(m,o,o[6],null);let v=[o[5]],G={};for(let p=0;p<v.length;p+=1)G=L(G,v[p]);return{c(){e=T("li"),n=T("button"),N(t.$$.fragment),l=H(),s=T("div"),u&&u.c(),i=H(),a=T("div"),c&&c.c(),this.h()},l(p){e=I(p,"LI",{});var R=$(e);n=I(R,"BUTTON",{type:!0,title:!0,"aria-expanded":!0});var y=$(n);D(t.$$.fragment,y),l=V(y),s=I(y,"DIV",{});var A=$(s);u&&u.l(A),A.forEach(h),y.forEach(h),i=V(R),a=I(R,"DIV",{});var Q=$(a);c&&c.l(Q),Q.forEach(h),R.forEach(h),this.h()},h(){b(s,"bx--accordion__title",!0),Y(n,"type","button"),Y(n,"title",o[3]),Y(n,"aria-expanded",o[0]),n.disabled=o[1],b(n,"bx--accordion__heading",!0),b(a,"bx--accordion__content",!0),U(e,G),b(e,"bx--accordion__item",!0),b(e,"bx--accordion__item--active",o[0]),b(e,"bx--accordion__item--disabled",o[1]),b(e,"bx--accordion__item--expanding",o[4]==="expanding"),b(e,"bx--accordion__item--collapsing",o[4]==="collapsing")},m(p,R){w(p,e,R),g(e,n),O(t,n,null),g(n,l),g(n,s),u&&u.m(s,null),g(e,i),g(e,a),c&&c.m(a,null),r=!0,f||(d=[S(n,"click",o[9]),S(n,"click",o[14]),S(n,"mouseover",o[10]),S(n,"mouseenter",o[11]),S(n,"mouseleave",o[12]),S(n,"keydown",o[13]),S(n,"keydown",o[15]),S(e,"animationend",o[8]),S(e,"animationend",o[16])],f=!0)},p(p,[R]){const y={};R&8&&(y["aria-label"]=p[3]),t.$set(y),k?k.p&&(!r||R&64)&&fe(k,_,p,p[6],r?ue(_,p[6],R,xe):ce(p[6]),Ee):u&&u.p&&(!r||R&4)&&u.p(p,r?R:-1),(!r||R&8)&&Y(n,"title",p[3]),(!r||R&1)&&Y(n,"aria-expanded",p[0]),(!r||R&2)&&(n.disabled=p[1]),c&&c.p&&(!r||R&64)&&fe(c,m,p,p[6],r?ue(m,p[6],R,null):ce(p[6]),null),U(e,G=Z(v,[R&32&&p[5]])),b(e,"bx--accordion__item",!0),b(e,"bx--accordion__item--active",p[0]),b(e,"bx--accordion__item--disabled",p[1]),b(e,"bx--accordion__item--expanding",p[4]==="expanding"),b(e,"bx--accordion__item--collapsing",p[4]==="collapsing")},i(p){r||(P(t.$$.fragment,p),P(u,p),P(c,p),r=!0)},o(p){M(t.$$.fragment,p),M(u,p),M(c,p),r=!1},d(p){p&&h(e),q(t),u&&u.d(p),c&&c.d(p),f=!1,le(d)}}}function nt(o,e,n){const t=["title","open","disabled","iconDescription"];let l=F(e,t),{$$slots:s={},$$scope:i}=e,{title:a="title"}=e,{open:r=!1}=e,{disabled:f=!1}=e,{iconDescription:d="Expand/Collapse"}=e,_=f;const u=Ce("Accordion").disableItems.subscribe(W=>{!W&&_||n(1,f=W)});let m;Re(()=>()=>{u()});function c(W){C.call(this,o,W)}function v(W){C.call(this,o,W)}function G(W){C.call(this,o,W)}function p(W){C.call(this,o,W)}function R(W){C.call(this,o,W)}function y(W){C.call(this,o,W)}const A=()=>{n(0,r=!r),n(4,m=r?"expanding":"collapsing")},Q=({key:W})=>{r&&W==="Escape"&&n(0,r=!1)},ne=()=>{n(4,m=void 0)};return o.$$set=W=>{e=L(L({},e),j(W)),n(5,l=F(e,t)),"title"in W&&n(2,a=W.title),"open"in W&&n(0,r=W.open),"disabled"in W&&n(1,f=W.disabled),"iconDescription"in W&&n(3,d=W.iconDescription),"$$scope"in W&&n(6,i=W.$$scope)},[r,f,a,d,m,l,i,s,c,v,G,p,R,y,A,Q,ne]}class x extends J{constructor(e){super(),K(this,e,nt,tt,X,{title:2,open:0,disabled:1,iconDescription:3})}}function ze(o){let e,n;return{c(){e=ee("title"),n=E(o[1])},l(t){e=te(t,"title",{});var l=$(e);n=z(l,o[1]),l.forEach(h)},m(t,l){w(t,e,l),g(e,n)},p(t,l){l&2&&me(n,t[1])},d(t){t&&h(e)}}}function ot(o){let e,n,t,l=o[1]&&ze(o),s=[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},{width:o[0]},{height:o[0]},o[2],o[3]],i={};for(let a=0;a<s.length;a+=1)i=L(i,s[a]);return{c(){e=ee("svg"),l&&l.c(),n=ee("path"),t=ee("path"),this.h()},l(a){e=te(a,"svg",{xmlns:!0,viewBox:!0,fill:!0,preserveAspectRatio:!0,width:!0,height:!0});var r=$(e);l&&l.l(r),n=te(r,"path",{d:!0}),$(n).forEach(h),t=te(r,"path",{d:!0}),$(t).forEach(h),r.forEach(h),this.h()},h(){Y(n,"d","M26,28H6a2.0027,2.0027,0,0,1-2-2V6A2.0027,2.0027,0,0,1,6,4H16V6H6V26H26V16h2V26A2.0027,2.0027,0,0,1,26,28Z"),Y(t,"d","M20 2L20 4 26.586 4 18 12.586 19.414 14 28 5.414 28 12 30 12 30 2 20 2z"),ae(e,i)},m(a,r){w(a,e,r),l&&l.m(e,null),g(e,n),g(e,t)},p(a,[r]){a[1]?l?l.p(a,r):(l=ze(a),l.c(),l.m(e,n)):l&&(l.d(1),l=null),ae(e,i=Z(s,[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},r&1&&{width:a[0]},r&1&&{height:a[0]},r&4&&a[2],r&8&&a[3]]))},i:B,o:B,d(a){a&&h(e),l&&l.d()}}}function lt(o,e,n){let t,l;const s=["size","title"];let i=F(e,s),{size:a=16}=e,{title:r=void 0}=e;return o.$$set=f=>{n(5,e=L(L({},e),j(f))),n(3,i=F(e,s)),"size"in f&&n(0,a=f.size),"title"in f&&n(1,r=f.title)},o.$$.update=()=>{n(4,t=e["aria-label"]||e["aria-labelledby"]||r),n(2,l={"aria-hidden":t?void 0:!0,role:t?"img":void 0,focusable:Number(e.tabindex)===0?!0:void 0})},e=j(e),[a,r,l,i,t]}class Ae extends J{constructor(e){super(),K(this,e,lt,ot,X,{size:0,title:1})}}function st(o){let e;const n=o[1].default,t=re(n,o,o[6],null);return{c(){t&&t.c()},l(l){t&&t.l(l)},m(l,s){t&&t.m(l,s),e=!0},p(l,s){t&&t.p&&(!e||s&64)&&fe(t,n,l,l[6],e?ue(n,l[6],s,null):ce(l[6]),null)},i(l){e||(P(t,l),e=!0)},o(l){M(t,l),e=!1},d(l){t&&t.d(l)}}}function at(o){let e,n;const t=[o[0],{target:"_blank"},{icon:Ae}];let l={$$slots:{default:[st]},$$scope:{ctx:o}};for(let s=0;s<t.length;s+=1)l=L(l,t[s]);return e=new qe({props:l}),e.$on("click",o[2]),e.$on("mouseover",o[3]),e.$on("mouseenter",o[4]),e.$on("mouseleave",o[5]),{c(){N(e.$$.fragment)},l(s){D(e.$$.fragment,s)},m(s,i){O(e,s,i),n=!0},p(s,[i]){const a=i&1?Z(t,[i&1&&Pe(s[0]),t[1],i&0&&{icon:Ae}]):{};i&64&&(a.$$scope={dirty:i,ctx:s}),e.$set(a)},i(s){n||(P(e.$$.fragment,s),n=!0)},o(s){M(e.$$.fragment,s),n=!1},d(s){q(e,s)}}}function it(o,e,n){const t=[];let l=F(e,t),{$$slots:s={},$$scope:i}=e;function a(_){C.call(this,o,_)}function r(_){C.call(this,o,_)}function f(_){C.call(this,o,_)}function d(_){C.call(this,o,_)}return o.$$set=_=>{e=L(L({},e),j(_)),n(0,l=F(e,t)),"$$scope"in _&&n(6,i=_.$$scope)},[l,s,a,r,f,d,i]}class se extends J{constructor(e){super(),K(this,e,it,at,X,{})}}function rt(o){let e;return{c(){e=E("Arcade Game Typography")},l(n){e=z(n,"Arcade Game Typography")},m(n,t){w(n,e,t)},d(n){n&&h(e)}}}function ft(o){let e,n,t,l,s;return t=new se({props:{inline:!0,href:"https://readonlymemory.vg/shop/book/arcade-game-typography/",$$slots:{default:[rt]},$$scope:{ctx:o}}}),{c(){e=T("p"),n=E(`All included fonts where hand-drawn from Toshi Omagari's magnificent book
                `),N(t.$$.fragment),l=E(`
                as reference. It's a lovely hommage to the hey-day of arcade games and to me it's been one of my favourite videogame related books.`)},l(i){e=I(i,"P",{});var a=$(e);n=z(a,`All included fonts where hand-drawn from Toshi Omagari's magnificent book
                `),D(t.$$.fragment,a),l=z(a,`
                as reference. It's a lovely hommage to the hey-day of arcade games and to me it's been one of my favourite videogame related books.`),a.forEach(h)},m(i,a){w(i,e,a),g(e,n),O(t,e,null),g(e,l),s=!0},p(i,a){const r={};a&2&&(r.$$scope={dirty:a,ctx:i}),t.$set(r)},i(i){s||(P(t.$$.fragment,i),s=!0)},o(i){M(t.$$.fragment,i),s=!1},d(i){i&&h(e),q(t)}}}function ct(o){let e,n;return{c(){e=T("strong"),n=E("Where are these fonts taken from?")},l(t){e=I(t,"STRONG",{});var l=$(e);n=z(l,"Where are these fonts taken from?"),l.forEach(h)},m(t,l){w(t,e,l),g(e,n)},p:B,d(t){t&&h(e)}}}function ut(o){let e;return{c(){e=E("Playdate")},l(n){e=z(n,"Playdate")},m(n,t){w(n,e,t)},d(n){n&&h(e)}}}function dt(o){let e,n,t,l,s;return t=new se({props:{inline:!0,href:"https://readonlymemory.vg/shop/book/arcade-game-typography/",$$slots:{default:[ut]},$$scope:{ctx:o}}}),{c(){e=T("p"),n=E(`The fonts have created with Panic's
                `),N(t.$$.fragment),l=E(`
                in mind, a tiny handheld game system with a monochrome display. If you find these useful for other purposes, please go ahead and make use of them!`)},l(i){e=I(i,"P",{});var a=$(e);n=z(a,`The fonts have created with Panic's
                `),D(t.$$.fragment,a),l=z(a,`
                in mind, a tiny handheld game system with a monochrome display. If you find these useful for other purposes, please go ahead and make use of them!`),a.forEach(h)},m(i,a){w(i,e,a),g(e,n),O(t,e,null),g(e,l),s=!0},p(i,a){const r={};a&2&&(r.$$scope={dirty:a,ctx:i}),t.$set(r)},i(i){s||(P(t.$$.fragment,i),s=!0)},o(i){M(t.$$.fragment,i),s=!1},d(i){i&&h(e),q(t)}}}function ht(o){let e,n;return{c(){e=T("strong"),n=E("Who are these fonts for?")},l(t){e=I(t,"STRONG",{});var l=$(e);n=z(l,"Who are these fonts for?"),l.forEach(h)},m(t,l){w(t,e,l),g(e,n)},p:B,d(t){t&&h(e)}}}function mt(o){let e,n,t,l,s;return{c(){e=T("p"),n=E(`This question can only be answered by the original designers of these fonts. Drawing only the characters used by a game, saving diskspace,
                limited knowledge of Western typography. My guess is as good as your's. However, it `),t=T("em"),l=E("seems"),s=E(` to me that the maker of the book left out
                some characters on purpose, e.g. some spread page highlight the quality of a font at the cost of completeness.`)},l(i){e=I(i,"P",{});var a=$(e);n=z(a,`This question can only be answered by the original designers of these fonts. Drawing only the characters used by a game, saving diskspace,
                limited knowledge of Western typography. My guess is as good as your's. However, it `),t=I(a,"EM",{});var r=$(t);l=z(r,"seems"),r.forEach(h),s=z(a,` to me that the maker of the book left out
                some characters on purpose, e.g. some spread page highlight the quality of a font at the cost of completeness.`),a.forEach(h)},m(i,a){w(i,e,a),g(e,n),g(e,t),g(t,l),g(e,s)},p:B,d(i){i&&h(e)}}}function _t(o){let e,n;return{c(){e=T("strong"),n=E("Why are some fonts incomplete?")},l(t){e=I(t,"STRONG",{});var l=$(e);n=z(l,"Why are some fonts incomplete?"),l.forEach(h)},m(t,l){w(t,e,l),g(e,n)},p:B,d(t){t&&h(e)}}}function gt(o){let e;return{c(){e=E("Playdate's")},l(n){e=z(n,"Playdate's")},m(n,t){w(n,e,t)},d(n){n&&h(e)}}}function pt(o){let e,n,t,l,s;return t=new se({props:{inline:!0,href:"https://readonlymemory.vg/shop/book/arcade-game-typography/",$$slots:{default:[gt]},$$scope:{ctx:o}}}),{c(){e=T("p"),n=E(`If you know the book these fonts were taken from, you might wonder why some fonts are missing entirely. That's mostly the case when a font makes
                use of multiple colours, be it for aesthetic reasons or to make the font more legible through anti-aliasing. Since this mostly doesn't work for the
                `),N(t.$$.fragment),l=E(`
                monochrome display, most of these fonts were omitted while others were adapted.`)},l(i){e=I(i,"P",{});var a=$(e);n=z(a,`If you know the book these fonts were taken from, you might wonder why some fonts are missing entirely. That's mostly the case when a font makes
                use of multiple colours, be it for aesthetic reasons or to make the font more legible through anti-aliasing. Since this mostly doesn't work for the
                `),D(t.$$.fragment,a),l=z(a,`
                monochrome display, most of these fonts were omitted while others were adapted.`),a.forEach(h)},m(i,a){w(i,e,a),g(e,n),O(t,e,null),g(e,l),s=!0},p(i,a){const r={};a&2&&(r.$$scope={dirty:a,ctx:i}),t.$set(r)},i(i){s||(P(t.$$.fragment,i),s=!0)},o(i){M(t.$$.fragment,i),s=!1},d(i){i&&h(e),q(t)}}}function bt(o){let e,n;return{c(){e=T("strong"),n=E("Why are some fonts missing?")},l(t){e=I(t,"STRONG",{});var l=$(e);n=z(l,"Why are some fonts missing?"),l.forEach(h)},m(t,l){w(t,e,l),g(e,n)},p:B,d(t){t&&h(e)}}}function kt(o){let e,n,t,l,s,i,a,r;return{c(){e=T("p"),n=E(`All of the fonts included were sampled from classic video games, that made use of a 8x8 grid. Even when a glyph (or \u201Dcharacter\u201D) occupies less space,
                it lives on a 8x8 grid. For example, both wide (e.g. uppercase `),t=T("em"),l=E("W"),s=E(") and narrow glyphs (e.g. uppercase "),i=T("em"),a=E("I"),r=E(") will have the same dimensions.")},l(f){e=I(f,"P",{});var d=$(e);n=z(d,`All of the fonts included were sampled from classic video games, that made use of a 8x8 grid. Even when a glyph (or \u201Dcharacter\u201D) occupies less space,
                it lives on a 8x8 grid. For example, both wide (e.g. uppercase `),t=I(d,"EM",{});var _=$(t);l=z(_,"W"),_.forEach(h),s=z(d,") and narrow glyphs (e.g. uppercase "),i=I(d,"EM",{});var k=$(i);a=z(k,"I"),k.forEach(h),r=z(d,") will have the same dimensions."),d.forEach(h)},m(f,d){w(f,e,d),g(e,n),g(e,t),g(t,l),g(e,s),g(e,i),g(i,a),g(e,r)},p:B,d(f){f&&h(e)}}}function vt(o){let e,n;return{c(){e=T("strong"),n=E("What's a fixed size font?")},l(t){e=I(t,"STRONG",{});var l=$(e);n=z(l,"What's a fixed size font?"),l.forEach(h)},m(t,l){w(t,e,l),g(e,n)},p:B,d(t){t&&h(e)}}}function wt(o){let e;return{c(){e=E("Caps")},l(n){e=z(n,"Caps")},m(n,t){w(n,e,t)},d(n){n&&h(e)}}}function yt(o){let e,n,t,l,s,i,a,r,f,d,_;return t=new se({props:{inline:!0,href:"https://play.date/caps/",$$slots:{default:[wt]},$$scope:{ctx:o}}}),{c(){e=T("p"),n=E(`The opposite of a fixed width font (see above). Panic's font editor
                `),N(t.$$.fragment),l=E(`
                has an auto-size feature which basically draws a glyph on the horizontal space it actually occupies. So, an uppercase `),s=T("em"),i=E("I"),a=E(` is usually narrower
                than an uppercase `),r=T("em"),f=E("W"),d=E(". While these fonts haven't been design with that in mind, some of them might work better for you in their auto-sized variant.")},l(k){e=I(k,"P",{});var u=$(e);n=z(u,`The opposite of a fixed width font (see above). Panic's font editor
                `),D(t.$$.fragment,u),l=z(u,`
                has an auto-size feature which basically draws a glyph on the horizontal space it actually occupies. So, an uppercase `),s=I(u,"EM",{});var m=$(s);i=z(m,"I"),m.forEach(h),a=z(u,` is usually narrower
                than an uppercase `),r=I(u,"EM",{});var c=$(r);f=z(c,"W"),c.forEach(h),d=z(u,". While these fonts haven't been design with that in mind, some of them might work better for you in their auto-sized variant."),u.forEach(h)},m(k,u){w(k,e,u),g(e,n),O(t,e,null),g(e,l),g(e,s),g(s,i),g(e,a),g(e,r),g(r,f),g(e,d),_=!0},p(k,u){const m={};u&2&&(m.$$scope={dirty:u,ctx:k}),t.$set(m)},i(k){_||(P(t.$$.fragment,k),_=!0)},o(k){M(t.$$.fragment,k),_=!1},d(k){k&&h(e),q(t)}}}function $t(o){let e,n;return{c(){e=T("strong"),n=E("What's an auto-sized font?")},l(t){e=I(t,"STRONG",{});var l=$(e);n=z(l,"What's an auto-sized font?"),l.forEach(h)},m(t,l){w(t,e,l),g(e,n)},p:B,d(t){t&&h(e)}}}function Et(o){let e;return{c(){e=E("CC0")},l(n){e=z(n,"CC0")},m(n,t){w(n,e,t)},d(n){n&&h(e)}}}function zt(o){let e,n,t,l,s;return t=new se({props:{inline:!0,href:"https://creativecommons.org/publicdomain/zero/1.0/",$$slots:{default:[Et]},$$scope:{ctx:o}}}),{c(){e=T("p"),n=E(`All included fonts are part of the public domain and as such they are available under the terms of the
                `),N(t.$$.fragment),l=E(`
                license.`)},l(i){e=I(i,"P",{});var a=$(e);n=z(a,`All included fonts are part of the public domain and as such they are available under the terms of the
                `),D(t.$$.fragment,a),l=z(a,`
                license.`),a.forEach(h)},m(i,a){w(i,e,a),g(e,n),O(t,e,null),g(e,l),s=!0},p(i,a){const r={};a&2&&(r.$$scope={dirty:a,ctx:i}),t.$set(r)},i(i){s||(P(t.$$.fragment,i),s=!0)},o(i){M(t.$$.fragment,i),s=!1},d(i){i&&h(e),q(t)}}}function At(o){let e,n;return{c(){e=T("strong"),n=E("How are these fonts license?")},l(t){e=I(t,"STRONG",{});var l=$(e);n=z(l,"How are these fonts license?"),l.forEach(h)},m(t,l){w(t,e,l),g(e,n)},p:B,d(t){t&&h(e)}}}function Pt(o){let e,n,t,l,s,i,a,r,f,d,_,k,u,m;return e=new x({props:{open:o[0],$$slots:{title:[ct],default:[ft]},$$scope:{ctx:o}}}),t=new x({props:{open:o[0],$$slots:{title:[ht],default:[dt]},$$scope:{ctx:o}}}),s=new x({props:{open:o[0],$$slots:{title:[_t],default:[mt]},$$scope:{ctx:o}}}),a=new x({props:{open:o[0],$$slots:{title:[bt],default:[pt]},$$scope:{ctx:o}}}),f=new x({props:{open:o[0],$$slots:{title:[vt],default:[kt]},$$scope:{ctx:o}}}),_=new x({props:{open:o[0],$$slots:{title:[$t],default:[yt]},$$scope:{ctx:o}}}),u=new x({props:{open:o[0],$$slots:{title:[At],default:[zt]},$$scope:{ctx:o}}}),{c(){N(e.$$.fragment),n=H(),N(t.$$.fragment),l=H(),N(s.$$.fragment),i=H(),N(a.$$.fragment),r=H(),N(f.$$.fragment),d=H(),N(_.$$.fragment),k=H(),N(u.$$.fragment)},l(c){D(e.$$.fragment,c),n=V(c),D(t.$$.fragment,c),l=V(c),D(s.$$.fragment,c),i=V(c),D(a.$$.fragment,c),r=V(c),D(f.$$.fragment,c),d=V(c),D(_.$$.fragment,c),k=V(c),D(u.$$.fragment,c)},m(c,v){O(e,c,v),w(c,n,v),O(t,c,v),w(c,l,v),O(s,c,v),w(c,i,v),O(a,c,v),w(c,r,v),O(f,c,v),w(c,d,v),O(_,c,v),w(c,k,v),O(u,c,v),m=!0},p(c,v){const G={};v&2&&(G.$$scope={dirty:v,ctx:c}),e.$set(G);const p={};v&2&&(p.$$scope={dirty:v,ctx:c}),t.$set(p);const R={};v&2&&(R.$$scope={dirty:v,ctx:c}),s.$set(R);const y={};v&2&&(y.$$scope={dirty:v,ctx:c}),a.$set(y);const A={};v&2&&(A.$$scope={dirty:v,ctx:c}),f.$set(A);const Q={};v&2&&(Q.$$scope={dirty:v,ctx:c}),_.$set(Q);const ne={};v&2&&(ne.$$scope={dirty:v,ctx:c}),u.$set(ne)},i(c){m||(P(e.$$.fragment,c),P(t.$$.fragment,c),P(s.$$.fragment,c),P(a.$$.fragment,c),P(f.$$.fragment,c),P(_.$$.fragment,c),P(u.$$.fragment,c),m=!0)},o(c){M(e.$$.fragment,c),M(t.$$.fragment,c),M(s.$$.fragment,c),M(a.$$.fragment,c),M(f.$$.fragment,c),M(_.$$.fragment,c),M(u.$$.fragment,c),m=!1},d(c){q(e,c),c&&h(n),q(t,c),c&&h(l),q(s,c),c&&h(i),q(a,c),c&&h(r),q(f,c),c&&h(d),q(_,c),c&&h(k),q(u,c)}}}function Mt(o){let e,n;return e=new Xe({props:{$$slots:{default:[Pt]},$$scope:{ctx:o}}}),{c(){N(e.$$.fragment)},l(t){D(e.$$.fragment,t)},m(t,l){O(e,t,l),n=!0},p(t,l){const s={};l&2&&(s.$$scope={dirty:l,ctx:t}),e.$set(s)},i(t){n||(P(e.$$.fragment,t),n=!0)},o(t){M(e.$$.fragment,t),n=!1},d(t){q(e,t)}}}function Tt(o){let e,n;return e=new Oe({props:{padding:!0,$$slots:{default:[Mt]},$$scope:{ctx:o}}}),{c(){N(e.$$.fragment)},l(t){D(e.$$.fragment,t)},m(t,l){O(e,t,l),n=!0},p(t,l){const s={};l&2&&(s.$$scope={dirty:l,ctx:t}),e.$set(s)},i(t){n||(P(e.$$.fragment,t),n=!0)},o(t){M(e.$$.fragment,t),n=!1},d(t){q(e,t)}}}function It(o){let e,n,t,l,s,i;return s=new De({props:{$$slots:{default:[Tt]},$$scope:{ctx:o}}}),{c(){e=H(),n=T("h2"),t=E("Frequently Asked Questions"),l=H(),N(s.$$.fragment),this.h()},l(a){Se('[data-svelte="svelte-2xq18x"]',document.head).forEach(h),e=V(a),n=I(a,"H2",{});var f=$(n);t=z(f,"Frequently Asked Questions"),f.forEach(h),l=V(a),D(s.$$.fragment,a),this.h()},h(){document.title="Frequently Asked Questions | Playdate Arcade Fonts"},m(a,r){w(a,e,r),w(a,n,r),g(n,t),w(a,l,r),O(s,a,r),i=!0},p(a,[r]){const f={};r&2&&(f.$$scope={dirty:r,ctx:a}),s.$set(f)},i(a){i||(P(s.$$.fragment,a),i=!0)},o(a){M(s.$$.fragment,a),i=!1},d(a){a&&h(e),a&&h(n),a&&h(l),q(s,a)}}}function Wt(o){return[!1]}class Dt extends J{constructor(e){super(),K(this,e,Wt,It,X,{})}}export{Dt as default};