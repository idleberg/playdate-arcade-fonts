import{s as K,u as D,F as te,G as ne,h as R,d as m,j as J,H as ae,i as k,C as E,D as W,r as F,v as Q,l as H,m as V,n as ge,e as se,L as A,f as z,g as T,x as Y,I as g,J as I,K as ie,Q as Te,k as be,a as q,c as B,R as Me,w as ce,y as fe,z as ue,A as de,S as Re,o as Ie,O as Se,B as j}from"../chunks/scheduler.b0b23c3e.js";import{S as Z,i as X,a as $,g as he,t as y,c as _e,b as S,d as L,m as N,e as O}from"../chunks/index.74801182.js";import{g as U,a as ze,R as Le,C as Ne}from"../chunks/Column.9e9fab5a.js";import{w as Oe}from"../chunks/index.6a138f19.js";import{e as me,u as De,o as Ge}from"../chunks/each.776161f3.js";import{L as He}from"../chunks/Link.fe951525.js";function ke(o){let e,n;return{c(){e=te("title"),n=H(o[1])},l(t){e=ne(t,"title",{});var l=R(e);n=V(l,o[1]),l.forEach(m)},m(t,l){k(t,e,l),E(e,n)},p(t,l){l&2&&ge(n,t[1])},d(t){t&&m(e)}}}function Ve(o){let e,n,t=o[1]&&ke(o),l=[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},{width:o[0]},{height:o[0]},o[2],o[3]],i={};for(let r=0;r<l.length;r+=1)i=D(i,l[r]);return{c(){e=te("svg"),t&&t.c(),n=te("path"),this.h()},l(r){e=ne(r,"svg",{xmlns:!0,viewBox:!0,fill:!0,preserveAspectRatio:!0,width:!0,height:!0});var a=R(e);t&&t.l(a),n=ne(a,"path",{d:!0}),R(n).forEach(m),a.forEach(m),this.h()},h(){J(n,"d","M22 16L12 26 10.6 24.6 19.2 16 10.6 7.4 12 6z"),ae(e,i)},m(r,a){k(r,e,a),t&&t.m(e,null),E(e,n)},p(r,[a]){r[1]?t?t.p(r,a):(t=ke(r),t.c(),t.m(e,n)):t&&(t.d(1),t=null),ae(e,i=U(l,[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},a&1&&{width:r[0]},a&1&&{height:r[0]},a&4&&r[2],a&8&&r[3]]))},i:W,o:W,d(r){r&&m(e),t&&t.d()}}}function qe(o,e,n){let t,l;const i=["size","title"];let r=F(e,i),{size:a=16}=e,{title:s=void 0}=e;return o.$$set=c=>{n(5,e=D(D({},e),Q(c))),n(3,r=F(e,i)),"size"in c&&n(0,a=c.size),"title"in c&&n(1,s=c.title)},o.$$.update=()=>{n(4,t=e["aria-label"]||e["aria-labelledby"]||s),n(2,l={"aria-hidden":t?void 0:!0,role:t?"img":void 0,focusable:Number(e.tabindex)===0?!0:void 0})},e=Q(e),[a,s,l,r,t]}class Be extends Z{constructor(e){super(),X(this,e,qe,Ve,K,{size:0,title:1})}}const pe=Be;function ve(o,e,n){const t=o.slice();return t[2]=e[n].width,t}function We(o){let e,n,t,l,i=[o[4],{style:n="width: "+o[2]+";"+o[4].style}],r={};for(let a=0;a<i.length;a+=1)r=D(r,i[a]);return{c(){e=z("p"),this.h()},l(a){e=T(a,"P",{style:!0}),R(e).forEach(m),this.h()},h(){Y(e,r),g(e,"bx--skeleton__text",!0),g(e,"bx--skeleton__heading",o[0])},m(a,s){k(a,e,s),t||(l=[I(e,"click",o[12]),I(e,"mouseover",o[13]),I(e,"mouseenter",o[14]),I(e,"mouseleave",o[15])],t=!0)},p(a,s){Y(e,r=U(i,[s&16&&a[4],s&20&&n!==(n="width: "+a[2]+";"+a[4].style)&&{style:n}])),g(e,"bx--skeleton__text",!0),g(e,"bx--skeleton__heading",a[0])},d(a){a&&m(e),t=!1,ie(l)}}}function Fe(o){let e,n,t,l=me(o[3]),i=[];for(let s=0;s<l.length;s+=1)i[s]=we(ve(o,l,s));let r=[o[4]],a={};for(let s=0;s<r.length;s+=1)a=D(a,r[s]);return{c(){e=z("div");for(let s=0;s<i.length;s+=1)i[s].c();this.h()},l(s){e=T(s,"DIV",{});var c=R(e);for(let d=0;d<i.length;d+=1)i[d].l(c);c.forEach(m),this.h()},h(){Y(e,a)},m(s,c){k(s,e,c);for(let d=0;d<i.length;d+=1)i[d]&&i[d].m(e,null);n||(t=[I(e,"click",o[8]),I(e,"mouseover",o[9]),I(e,"mouseenter",o[10]),I(e,"mouseleave",o[11])],n=!0)},p(s,c){if(c&9){l=me(s[3]);let d;for(d=0;d<l.length;d+=1){const _=ve(s,l,d);i[d]?i[d].p(_,c):(i[d]=we(_),i[d].c(),i[d].m(e,null))}for(;d<i.length;d+=1)i[d].d(1);i.length=l.length}Y(e,a=U(r,[c&16&&s[4]]))},d(s){s&&m(e),Te(i,s),n=!1,ie(t)}}}function we(o){let e;return{c(){e=z("p"),this.h()},l(n){e=T(n,"P",{style:!0}),R(e).forEach(m),this.h()},h(){be(e,"width",o[2]),g(e,"bx--skeleton__text",!0),g(e,"bx--skeleton__heading",o[0])},m(n,t){k(n,e,t)},p(n,t){t&8&&be(e,"width",n[2]),t&1&&g(e,"bx--skeleton__heading",n[0])},d(n){n&&m(e)}}}function xe(o){let e;function n(i,r){return i[1]?Fe:We}let t=n(o),l=t(o);return{c(){l.c(),e=se()},l(i){l.l(i),e=se()},m(i,r){l.m(i,r),k(i,e,r)},p(i,[r]){t===(t=n(i))&&l?l.p(i,r):(l.d(1),l=t(i),l&&(l.c(),l.m(e.parentNode,e)))},i:W,o:W,d(i){i&&m(e),l.d(i)}}}function Ye(o,e,n){let t,l,i;const r=["lines","heading","paragraph","width"];let a=F(e,r),{lines:s=3}=e,{heading:c=!1}=e,{paragraph:d=!1}=e,{width:_="100%"}=e;const P=[.973,.153,.567];function u(w){A.call(this,o,w)}function h(w){A.call(this,o,w)}function f(w){A.call(this,o,w)}function b(w){A.call(this,o,w)}function G(w){A.call(this,o,w)}function p(w){A.call(this,o,w)}function M(w){A.call(this,o,w)}function v(w){A.call(this,o,w)}return o.$$set=w=>{e=D(D({},e),Q(w)),n(4,a=F(e,r)),"lines"in w&&n(5,s=w.lines),"heading"in w&&n(0,c=w.heading),"paragraph"in w&&n(1,d=w.paragraph),"width"in w&&n(2,_=w.width)},o.$$.update=()=>{if(o.$$.dirty&4&&n(7,l=parseInt(_,10)),o.$$.dirty&4&&n(6,i=_.includes("px")),o.$$.dirty&238&&d)for(let w=0;w<s;w++){const x=i?l-75:0,oe=i?l:75,C=Math.floor(P[w%3]*(oe-x+1))+x+"px";n(3,t=[...t,{width:i?C:`calc(${_} - ${C})`}])}},n(3,t=[]),[c,d,_,t,a,s,i,l,u,h,f,b,G,p,M,v]}class je extends Z{constructor(e){super(),X(this,e,Ye,xe,K,{lines:5,heading:0,paragraph:1,width:2})}}const le=je;function $e(o,e,n){const t=o.slice();return t[9]=e[n],t}function ye(o){let e,n,t,l,i,r,a,s,c,d,_,P,u;return t=new pe({props:{class:"bx--accordion__arrow"}}),i=new le({props:{class:"bx--accordion__title"}}),s=new le({props:{width:"90%"}}),d=new le({props:{width:"80%"}}),P=new le({props:{width:"95%"}}),{c(){e=z("li"),n=z("span"),S(t.$$.fragment),l=q(),S(i.$$.fragment),r=q(),a=z("div"),S(s.$$.fragment),c=q(),S(d.$$.fragment),_=q(),S(P.$$.fragment),this.h()},l(h){e=T(h,"LI",{});var f=R(e);n=T(f,"SPAN",{});var b=R(n);L(t.$$.fragment,b),l=B(b),L(i.$$.fragment,b),b.forEach(m),r=B(f),a=T(f,"DIV",{});var G=R(a);L(s.$$.fragment,G),c=B(G),L(d.$$.fragment,G),_=B(G),L(P.$$.fragment,G),G.forEach(m),f.forEach(m),this.h()},h(){g(n,"bx--accordion__heading",!0),g(a,"bx--accordion__content",!0),g(e,"bx--accordion__item",!0),g(e,"bx--accordion__item--active",!0)},m(h,f){k(h,e,f),E(e,n),N(t,n,null),E(n,l),N(i,n,null),E(e,r),E(e,a),N(s,a,null),E(a,c),N(d,a,null),E(a,_),N(P,a,null),u=!0},i(h){u||($(t.$$.fragment,h),$(i.$$.fragment,h),$(s.$$.fragment,h),$(d.$$.fragment,h),$(P.$$.fragment,h),u=!0)},o(h){y(t.$$.fragment,h),y(i.$$.fragment,h),y(s.$$.fragment,h),y(d.$$.fragment,h),y(P.$$.fragment,h),u=!1},d(h){h&&m(e),O(t),O(i),O(s),O(d),O(P)}}}function Ce(o,e){let n,t,l,i,r,a,s;return l=new pe({props:{class:"bx--accordion__arrow"}}),r=new le({props:{class:"bx--accordion__title"}}),{key:o,first:null,c(){n=z("li"),t=z("span"),S(l.$$.fragment),i=q(),S(r.$$.fragment),a=q(),this.h()},l(c){n=T(c,"LI",{});var d=R(n);t=T(d,"SPAN",{});var _=R(t);L(l.$$.fragment,_),i=B(_),L(r.$$.fragment,_),_.forEach(m),a=B(d),d.forEach(m),this.h()},h(){g(t,"bx--accordion__heading",!0),g(n,"bx--accordion__item",!0),this.first=n},m(c,d){k(c,n,d),E(n,t),N(l,t,null),E(t,i),N(r,t,null),E(n,a),s=!0},p(c,d){},i(c){s||($(l.$$.fragment,c),$(r.$$.fragment,c),s=!0)},o(c){y(l.$$.fragment,c),y(r.$$.fragment,c),s=!1},d(c){c&&m(n),O(l),O(r)}}}function Qe(o){let e,n,t=[],l=new Map,i,r,a,s=o[3]&&ye(),c=me(Array.from({length:o[3]?o[0]-1:o[0]},Ae));const d=u=>u[9];for(let u=0;u<c.length;u+=1){let h=$e(o,c,u),f=d(h);l.set(f,t[u]=Ce(f))}let _=[o[4]],P={};for(let u=0;u<_.length;u+=1)P=D(P,_[u]);return{c(){e=z("ul"),s&&s.c(),n=q();for(let u=0;u<t.length;u+=1)t[u].c();this.h()},l(u){e=T(u,"UL",{});var h=R(e);s&&s.l(h),n=B(h);for(let f=0;f<t.length;f+=1)t[f].l(h);h.forEach(m),this.h()},h(){Y(e,P),g(e,"bx--skeleton",!0),g(e,"bx--accordion",!0),g(e,"bx--accordion--start",o[1]==="start"),g(e,"bx--accordion--end",o[1]==="end"),g(e,"bx--accordion--sm",o[2]==="sm"),g(e,"bx--accordion--xl",o[2]==="xl")},m(u,h){k(u,e,h),s&&s.m(e,null),E(e,n);for(let f=0;f<t.length;f+=1)t[f]&&t[f].m(e,null);i=!0,r||(a=[I(e,"click",o[5]),I(e,"mouseover",o[6]),I(e,"mouseenter",o[7]),I(e,"mouseleave",o[8])],r=!0)},p(u,[h]){u[3]?s?h&8&&$(s,1):(s=ye(),s.c(),$(s,1),s.m(e,n)):s&&(he(),y(s,1,1,()=>{s=null}),_e()),h&9&&(c=me(Array.from({length:u[3]?u[0]-1:u[0]},Ae)),he(),t=De(t,h,d,1,u,c,l,e,Ge,Ce,null,$e),_e()),Y(e,P=U(_,[h&16&&u[4]])),g(e,"bx--skeleton",!0),g(e,"bx--accordion",!0),g(e,"bx--accordion--start",u[1]==="start"),g(e,"bx--accordion--end",u[1]==="end"),g(e,"bx--accordion--sm",u[2]==="sm"),g(e,"bx--accordion--xl",u[2]==="xl")},i(u){if(!i){$(s);for(let h=0;h<c.length;h+=1)$(t[h]);i=!0}},o(u){y(s);for(let h=0;h<t.length;h+=1)y(t[h]);i=!1},d(u){u&&m(e),s&&s.d();for(let h=0;h<t.length;h+=1)t[h].d();r=!1,ie(a)}}}const Ae=(o,e)=>e;function Ue(o,e,n){const t=["count","align","size","open"];let l=F(e,t),{count:i=4}=e,{align:r="end"}=e,{size:a=void 0}=e,{open:s=!0}=e;function c(u){A.call(this,o,u)}function d(u){A.call(this,o,u)}function _(u){A.call(this,o,u)}function P(u){A.call(this,o,u)}return o.$$set=u=>{e=D(D({},e),Q(u)),n(4,l=F(e,t)),"count"in u&&n(0,i=u.count),"align"in u&&n(1,r=u.align),"size"in u&&n(2,a=u.size),"open"in u&&n(3,s=u.open)},[i,r,a,s,l,c,d,_,P]}class Je extends Z{constructor(e){super(),X(this,e,Ue,Qe,K,{count:0,align:1,size:2,open:3})}}const Ke=Je;function Ze(o){let e,n,t,l;const i=o[6].default,r=ce(i,o,o[5],null);let a=[o[3]],s={};for(let c=0;c<a.length;c+=1)s=D(s,a[c]);return{c(){e=z("ul"),r&&r.c(),this.h()},l(c){e=T(c,"UL",{});var d=R(e);r&&r.l(d),d.forEach(m),this.h()},h(){Y(e,s),g(e,"bx--accordion",!0),g(e,"bx--accordion--start",o[0]==="start"),g(e,"bx--accordion--end",o[0]==="end"),g(e,"bx--accordion--sm",o[1]==="sm"),g(e,"bx--accordion--xl",o[1]==="xl")},m(c,d){k(c,e,d),r&&r.m(e,null),n=!0,t||(l=[I(e,"click",o[7]),I(e,"mouseover",o[8]),I(e,"mouseenter",o[9]),I(e,"mouseleave",o[10])],t=!0)},p(c,d){r&&r.p&&(!n||d&32)&&fe(r,i,c,c[5],n?de(i,c[5],d,null):ue(c[5]),null),Y(e,s=U(a,[d&8&&c[3]])),g(e,"bx--accordion",!0),g(e,"bx--accordion--start",c[0]==="start"),g(e,"bx--accordion--end",c[0]==="end"),g(e,"bx--accordion--sm",c[1]==="sm"),g(e,"bx--accordion--xl",c[1]==="xl")},i(c){n||($(r,c),n=!0)},o(c){y(r,c),n=!1},d(c){c&&m(e),r&&r.d(c),t=!1,ie(l)}}}function Xe(o){let e,n;const t=[o[3],{align:o[0]},{size:o[1]}];let l={};for(let i=0;i<t.length;i+=1)l=D(l,t[i]);return e=new Ke({props:l}),e.$on("click",o[11]),e.$on("mouseover",o[12]),e.$on("mouseenter",o[13]),e.$on("mouseleave",o[14]),{c(){S(e.$$.fragment)},l(i){L(e.$$.fragment,i)},m(i,r){N(e,i,r),n=!0},p(i,r){const a=r&11?U(t,[r&8&&ze(i[3]),r&1&&{align:i[0]},r&2&&{size:i[1]}]):{};e.$set(a)},i(i){n||($(e.$$.fragment,i),n=!0)},o(i){y(e.$$.fragment,i),n=!1},d(i){O(e,i)}}}function et(o){let e,n,t,l;const i=[Xe,Ze],r=[];function a(s,c){return s[2]?0:1}return e=a(o),n=r[e]=i[e](o),{c(){n.c(),t=se()},l(s){n.l(s),t=se()},m(s,c){r[e].m(s,c),k(s,t,c),l=!0},p(s,[c]){let d=e;e=a(s),e===d?r[e].p(s,c):(he(),y(r[d],1,1,()=>{r[d]=null}),_e(),n=r[e],n?n.p(s,c):(n=r[e]=i[e](s),n.c()),$(n,1),n.m(t.parentNode,t))},i(s){l||($(n),l=!0)},o(s){y(n),l=!1},d(s){s&&m(t),r[e].d(s)}}}function tt(o,e,n){const t=["align","size","disabled","skeleton"];let l=F(e,t),{$$slots:i={},$$scope:r}=e,{align:a="end"}=e,{size:s=void 0}=e,{disabled:c=!1}=e,{skeleton:d=!1}=e;const _=Oe(c);Me("Accordion",{disableItems:_});function P(v){A.call(this,o,v)}function u(v){A.call(this,o,v)}function h(v){A.call(this,o,v)}function f(v){A.call(this,o,v)}function b(v){A.call(this,o,v)}function G(v){A.call(this,o,v)}function p(v){A.call(this,o,v)}function M(v){A.call(this,o,v)}return o.$$set=v=>{e=D(D({},e),Q(v)),n(3,l=F(e,t)),"align"in v&&n(0,a=v.align),"size"in v&&n(1,s=v.size),"disabled"in v&&n(4,c=v.disabled),"skeleton"in v&&n(2,d=v.skeleton),"$$scope"in v&&n(5,r=v.$$scope)},o.$$.update=()=>{o.$$.dirty&16&&_.set(c)},[a,s,d,l,c,r,i,P,u,h,f,b,G,p,M]}class nt extends Z{constructor(e){super(),X(this,e,tt,et,K,{align:0,size:1,disabled:4,skeleton:2})}}const ot=nt,lt=o=>({}),Ee=o=>({});function it(o){let e;return{c(){e=H(o[2])},l(n){e=V(n,o[2])},m(n,t){k(n,e,t)},p(n,t){t&4&&ge(e,n[2])},d(n){n&&m(e)}}}function rt(o){let e,n,t,l,i,r,a,s,c,d;t=new pe({props:{class:"bx--accordion__arrow","aria-label":o[3]}});const _=o[7].title,P=ce(_,o,o[6],Ee),u=P||it(o),h=o[7].default,f=ce(h,o,o[6],null);let b=[o[5]],G={};for(let p=0;p<b.length;p+=1)G=D(G,b[p]);return{c(){e=z("li"),n=z("button"),S(t.$$.fragment),l=q(),i=z("div"),u&&u.c(),r=q(),a=z("div"),f&&f.c(),this.h()},l(p){e=T(p,"LI",{});var M=R(e);n=T(M,"BUTTON",{type:!0,title:!0,"aria-expanded":!0});var v=R(n);L(t.$$.fragment,v),l=B(v),i=T(v,"DIV",{});var w=R(i);u&&u.l(w),w.forEach(m),v.forEach(m),r=B(M),a=T(M,"DIV",{});var x=R(a);f&&f.l(x),x.forEach(m),M.forEach(m),this.h()},h(){g(i,"bx--accordion__title",!0),J(n,"type","button"),J(n,"title",o[3]),J(n,"aria-expanded",o[0]),n.disabled=o[1],g(n,"bx--accordion__heading",!0),g(a,"bx--accordion__content",!0),Y(e,G),g(e,"bx--accordion__item",!0),g(e,"bx--accordion__item--active",o[0]),g(e,"bx--accordion__item--disabled",o[1]),g(e,"bx--accordion__item--expanding",o[4]==="expanding"),g(e,"bx--accordion__item--collapsing",o[4]==="collapsing")},m(p,M){k(p,e,M),E(e,n),N(t,n,null),E(n,l),E(n,i),u&&u.m(i,null),E(e,r),E(e,a),f&&f.m(a,null),s=!0,c||(d=[I(n,"click",o[9]),I(n,"click",o[14]),I(n,"mouseover",o[10]),I(n,"mouseenter",o[11]),I(n,"mouseleave",o[12]),I(n,"keydown",o[13]),I(n,"keydown",o[15]),I(e,"animationend",o[8]),I(e,"animationend",o[16])],c=!0)},p(p,[M]){const v={};M&8&&(v["aria-label"]=p[3]),t.$set(v),P?P.p&&(!s||M&64)&&fe(P,_,p,p[6],s?de(_,p[6],M,lt):ue(p[6]),Ee):u&&u.p&&(!s||M&4)&&u.p(p,s?M:-1),(!s||M&8)&&J(n,"title",p[3]),(!s||M&1)&&J(n,"aria-expanded",p[0]),(!s||M&2)&&(n.disabled=p[1]),f&&f.p&&(!s||M&64)&&fe(f,h,p,p[6],s?de(h,p[6],M,null):ue(p[6]),null),Y(e,G=U(b,[M&32&&p[5]])),g(e,"bx--accordion__item",!0),g(e,"bx--accordion__item--active",p[0]),g(e,"bx--accordion__item--disabled",p[1]),g(e,"bx--accordion__item--expanding",p[4]==="expanding"),g(e,"bx--accordion__item--collapsing",p[4]==="collapsing")},i(p){s||($(t.$$.fragment,p),$(u,p),$(f,p),s=!0)},o(p){y(t.$$.fragment,p),y(u,p),y(f,p),s=!1},d(p){p&&m(e),O(t),u&&u.d(p),f&&f.d(p),c=!1,ie(d)}}}function at(o,e,n){const t=["title","open","disabled","iconDescription"];let l=F(e,t),{$$slots:i={},$$scope:r}=e,{title:a="title"}=e,{open:s=!1}=e,{disabled:c=!1}=e,{iconDescription:d="Expand/Collapse"}=e,_=c;const u=Re("Accordion").disableItems.subscribe(C=>{!C&&_||n(1,c=C)});let h;Ie(()=>()=>{u()});function f(C){A.call(this,o,C)}function b(C){A.call(this,o,C)}function G(C){A.call(this,o,C)}function p(C){A.call(this,o,C)}function M(C){A.call(this,o,C)}function v(C){A.call(this,o,C)}const w=()=>{n(0,s=!s),n(4,h=s?"expanding":"collapsing")},x=({key:C})=>{s&&C==="Escape"&&n(0,s=!1)},oe=()=>{n(4,h=void 0)};return o.$$set=C=>{e=D(D({},e),Q(C)),n(5,l=F(e,t)),"title"in C&&n(2,a=C.title),"open"in C&&n(0,s=C.open),"disabled"in C&&n(1,c=C.disabled),"iconDescription"in C&&n(3,d=C.iconDescription),"$$scope"in C&&n(6,r=C.$$scope)},[s,c,a,d,h,l,r,i,f,b,G,p,M,v,w,x,oe]}class st extends Z{constructor(e){super(),X(this,e,at,rt,K,{title:2,open:0,disabled:1,iconDescription:3})}}const ee=st;function Pe(o){let e,n;return{c(){e=te("title"),n=H(o[1])},l(t){e=ne(t,"title",{});var l=R(e);n=V(l,o[1]),l.forEach(m)},m(t,l){k(t,e,l),E(e,n)},p(t,l){l&2&&ge(n,t[1])},d(t){t&&m(e)}}}function ct(o){let e,n,t,l=o[1]&&Pe(o),i=[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},{width:o[0]},{height:o[0]},o[2],o[3]],r={};for(let a=0;a<i.length;a+=1)r=D(r,i[a]);return{c(){e=te("svg"),l&&l.c(),n=te("path"),t=te("path"),this.h()},l(a){e=ne(a,"svg",{xmlns:!0,viewBox:!0,fill:!0,preserveAspectRatio:!0,width:!0,height:!0});var s=R(e);l&&l.l(s),n=ne(s,"path",{d:!0}),R(n).forEach(m),t=ne(s,"path",{d:!0}),R(t).forEach(m),s.forEach(m),this.h()},h(){J(n,"d","M26,28H6a2.0027,2.0027,0,0,1-2-2V6A2.0027,2.0027,0,0,1,6,4H16V6H6V26H26V16h2V26A2.0027,2.0027,0,0,1,26,28Z"),J(t,"d","M20 2L20 4 26.586 4 18 12.586 19.414 14 28 5.414 28 12 30 12 30 2 20 2z"),ae(e,r)},m(a,s){k(a,e,s),l&&l.m(e,null),E(e,n),E(e,t)},p(a,[s]){a[1]?l?l.p(a,s):(l=Pe(a),l.c(),l.m(e,n)):l&&(l.d(1),l=null),ae(e,r=U(i,[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},s&1&&{width:a[0]},s&1&&{height:a[0]},s&4&&a[2],s&8&&a[3]]))},i:W,o:W,d(a){a&&m(e),l&&l.d()}}}function ft(o,e,n){let t,l;const i=["size","title"];let r=F(e,i),{size:a=16}=e,{title:s=void 0}=e;return o.$$set=c=>{n(5,e=D(D({},e),Q(c))),n(3,r=F(e,i)),"size"in c&&n(0,a=c.size),"title"in c&&n(1,s=c.title)},o.$$.update=()=>{n(4,t=e["aria-label"]||e["aria-labelledby"]||s),n(2,l={"aria-hidden":t?void 0:!0,role:t?"img":void 0,focusable:Number(e.tabindex)===0?!0:void 0})},e=Q(e),[a,s,l,r,t]}class ut extends Z{constructor(e){super(),X(this,e,ft,ct,K,{size:0,title:1})}}const dt=ut;function mt(o){let e;const n=o[1].default,t=ce(n,o,o[6],null);return{c(){t&&t.c()},l(l){t&&t.l(l)},m(l,i){t&&t.m(l,i),e=!0},p(l,i){t&&t.p&&(!e||i&64)&&fe(t,n,l,l[6],e?de(n,l[6],i,null):ue(l[6]),null)},i(l){e||($(t,l),e=!0)},o(l){y(t,l),e=!1},d(l){t&&t.d(l)}}}function ht(o){let e,n;const t=[o[0],{target:"_blank"},{icon:dt}];let l={$$slots:{default:[mt]},$$scope:{ctx:o}};for(let i=0;i<t.length;i+=1)l=D(l,t[i]);return e=new He({props:l}),e.$on("click",o[2]),e.$on("mouseover",o[3]),e.$on("mouseenter",o[4]),e.$on("mouseleave",o[5]),{c(){S(e.$$.fragment)},l(i){L(e.$$.fragment,i)},m(i,r){N(e,i,r),n=!0},p(i,[r]){const a=r&1?U(t,[ze(i[0]),t[1],t[2]]):{};r&64&&(a.$$scope={dirty:r,ctx:i}),e.$set(a)},i(i){n||($(e.$$.fragment,i),n=!0)},o(i){y(e.$$.fragment,i),n=!1},d(i){O(e,i)}}}function _t(o,e,n){const t=[];let l=F(e,t),{$$slots:i={},$$scope:r}=e;function a(_){A.call(this,o,_)}function s(_){A.call(this,o,_)}function c(_){A.call(this,o,_)}function d(_){A.call(this,o,_)}return o.$$set=_=>{e=D(D({},e),Q(_)),n(0,l=F(e,t)),"$$scope"in _&&n(6,r=_.$$scope)},[l,i,a,s,c,d,r]}class gt extends Z{constructor(e){super(),X(this,e,_t,ht,K,{})}}const re=gt;function pt(o){let e;return{c(){e=H("Arcade Game Typography")},l(n){e=V(n,"Arcade Game Typography")},m(n,t){k(n,e,t)},d(n){n&&m(e)}}}function bt(o){let e,n,t,l,i;return t=new re({props:{inline:!0,href:"https://readonlymemory.vg/shop/book/arcade-game-typography/",$$slots:{default:[pt]},$$scope:{ctx:o}}}),{c(){e=z("p"),n=H(`All included fonts where hand-drawn from Toshi Omagari's magnificent book
                `),S(t.$$.fragment),l=H(`
                as reference. It's a lovely hommage to the hey-day of arcade games and to me it's been one of my favourite videogame related books.`)},l(r){e=T(r,"P",{});var a=R(e);n=V(a,`All included fonts where hand-drawn from Toshi Omagari's magnificent book
                `),L(t.$$.fragment,a),l=V(a,`
                as reference. It's a lovely hommage to the hey-day of arcade games and to me it's been one of my favourite videogame related books.`),a.forEach(m)},m(r,a){k(r,e,a),E(e,n),N(t,e,null),E(e,l),i=!0},p(r,a){const s={};a&2&&(s.$$scope={dirty:a,ctx:r}),t.$set(s)},i(r){i||($(t.$$.fragment,r),i=!0)},o(r){y(t.$$.fragment,r),i=!1},d(r){r&&m(e),O(t)}}}function kt(o){let e,n="Where are these fonts taken from?";return{c(){e=z("strong"),e.textContent=n},l(t){e=T(t,"STRONG",{"data-svelte-h":!0}),j(e)!=="svelte-ocnfmk"&&(e.textContent=n)},m(t,l){k(t,e,l)},p:W,d(t){t&&m(e)}}}function vt(o){let e;return{c(){e=H("Playdate")},l(n){e=V(n,"Playdate")},m(n,t){k(n,e,t)},d(n){n&&m(e)}}}function wt(o){let e,n,t,l,i;return t=new re({props:{inline:!0,href:"https://readonlymemory.vg/shop/book/arcade-game-typography/",$$slots:{default:[vt]},$$scope:{ctx:o}}}),{c(){e=z("p"),n=H(`The fonts have created with Panic's
                `),S(t.$$.fragment),l=H(`
                in mind, a tiny handheld game system with a monochrome display. If you find these useful for other purposes, please go ahead and make use of them!`)},l(r){e=T(r,"P",{});var a=R(e);n=V(a,`The fonts have created with Panic's
                `),L(t.$$.fragment,a),l=V(a,`
                in mind, a tiny handheld game system with a monochrome display. If you find these useful for other purposes, please go ahead and make use of them!`),a.forEach(m)},m(r,a){k(r,e,a),E(e,n),N(t,e,null),E(e,l),i=!0},p(r,a){const s={};a&2&&(s.$$scope={dirty:a,ctx:r}),t.$set(s)},i(r){i||($(t.$$.fragment,r),i=!0)},o(r){y(t.$$.fragment,r),i=!1},d(r){r&&m(e),O(t)}}}function $t(o){let e,n="Who are these fonts for?";return{c(){e=z("strong"),e.textContent=n},l(t){e=T(t,"STRONG",{"data-svelte-h":!0}),j(e)!=="svelte-16m5xc9"&&(e.textContent=n)},m(t,l){k(t,e,l)},p:W,d(t){t&&m(e)}}}function yt(o){let e,n=`This question can only be answered by the original designers of these fonts. Drawing only the characters used by a game, saving diskspace,
                limited knowledge of Western typography. My guess is as good as your&#39;s. However, it <em>seems</em> to me that the maker of the book left out
                some characters on purpose, e.g. some spread page highlight the quality of a font at the cost of completeness.`;return{c(){e=z("p"),e.innerHTML=n},l(t){e=T(t,"P",{"data-svelte-h":!0}),j(e)!=="svelte-tnrtrx"&&(e.innerHTML=n)},m(t,l){k(t,e,l)},p:W,d(t){t&&m(e)}}}function Ct(o){let e,n="Why are some fonts incomplete?";return{c(){e=z("strong"),e.textContent=n},l(t){e=T(t,"STRONG",{"data-svelte-h":!0}),j(e)!=="svelte-qdsq0f"&&(e.textContent=n)},m(t,l){k(t,e,l)},p:W,d(t){t&&m(e)}}}function At(o){let e,n=`Fonts are tagged as incomplete, when they lack one or more characters in their supported character range. So when a font supports uppercase letters,
                but misses single ones, it&#39;s incomplete. Font are <em>not</em> tagged as incomplete, when they support the full range of uppercase characters,
                but have no lowercase characters.`;return{c(){e=z("p"),e.innerHTML=n},l(t){e=T(t,"P",{"data-svelte-h":!0}),j(e)!=="svelte-1h245tv"&&(e.innerHTML=n)},m(t,l){k(t,e,l)},p:W,d(t){t&&m(e)}}}function Et(o){let e,n="When is a font tagged as incomplete?";return{c(){e=z("strong"),e.textContent=n},l(t){e=T(t,"STRONG",{"data-svelte-h":!0}),j(e)!=="svelte-17pjakl"&&(e.textContent=n)},m(t,l){k(t,e,l)},p:W,d(t){t&&m(e)}}}function Pt(o){let e;return{c(){e=H("Playdate's")},l(n){e=V(n,"Playdate's")},m(n,t){k(n,e,t)},d(n){n&&m(e)}}}function zt(o){let e,n,t,l,i;return t=new re({props:{inline:!0,href:"https://readonlymemory.vg/shop/book/arcade-game-typography/",$$slots:{default:[Pt]},$$scope:{ctx:o}}}),{c(){e=z("p"),n=H(`If you know the book these fonts were taken from, you might wonder why some fonts are missing entirely. That's mostly the case when a font makes
                use of multiple colours, be it for aesthetic reasons or to make the font more legible through anti-aliasing. Since this mostly doesn't work for the
                `),S(t.$$.fragment),l=H(`
                monochrome display, most of these fonts were omitted while others were adapted.`)},l(r){e=T(r,"P",{});var a=R(e);n=V(a,`If you know the book these fonts were taken from, you might wonder why some fonts are missing entirely. That's mostly the case when a font makes
                use of multiple colours, be it for aesthetic reasons or to make the font more legible through anti-aliasing. Since this mostly doesn't work for the
                `),L(t.$$.fragment,a),l=V(a,`
                monochrome display, most of these fonts were omitted while others were adapted.`),a.forEach(m)},m(r,a){k(r,e,a),E(e,n),N(t,e,null),E(e,l),i=!0},p(r,a){const s={};a&2&&(s.$$scope={dirty:a,ctx:r}),t.$set(s)},i(r){i||($(t.$$.fragment,r),i=!0)},o(r){y(t.$$.fragment,r),i=!1},d(r){r&&m(e),O(t)}}}function Tt(o){let e,n="Why are some fonts missing?";return{c(){e=z("strong"),e.textContent=n},l(t){e=T(t,"STRONG",{"data-svelte-h":!0}),j(e)!=="svelte-x6gnz"&&(e.textContent=n)},m(t,l){k(t,e,l)},p:W,d(t){t&&m(e)}}}function Mt(o){let e;return{c(){e=H("Arcade Game Typography")},l(n){e=V(n,"Arcade Game Typography")},m(n,t){k(n,e,t)},d(n){n&&m(e)}}}function Rt(o){let e,n,t,l,i;return t=new re({props:{inline:!0,href:"https://readonlymemory.vg/shop/book/arcade-game-typography/",$$slots:{default:[Mt]},$$scope:{ctx:o}}}),{c(){e=z("p"),n=H(`A font considered for a game that didn't make it into the final product. Presumably, they ended
                in the ROM and have later been discovered by the author of the
                `),S(t.$$.fragment),l=H(`
                book.`)},l(r){e=T(r,"P",{});var a=R(e);n=V(a,`A font considered for a game that didn't make it into the final product. Presumably, they ended
                in the ROM and have later been discovered by the author of the
                `),L(t.$$.fragment,a),l=V(a,`
                book.`),a.forEach(m)},m(r,a){k(r,e,a),E(e,n),N(t,e,null),E(e,l),i=!0},p(r,a){const s={};a&2&&(s.$$scope={dirty:a,ctx:r}),t.$set(s)},i(r){i||($(t.$$.fragment,r),i=!0)},o(r){y(t.$$.fragment,r),i=!1},d(r){r&&m(e),O(t)}}}function It(o){let e,n="What's an unused font?";return{c(){e=z("strong"),e.textContent=n},l(t){e=T(t,"STRONG",{"data-svelte-h":!0}),j(e)!=="svelte-5ik4kp"&&(e.textContent=n)},m(t,l){k(t,e,l)},p:W,d(t){t&&m(e)}}}function St(o){let e;return{c(){e=H("CC0")},l(n){e=V(n,"CC0")},m(n,t){k(n,e,t)},d(n){n&&m(e)}}}function Lt(o){let e,n,t,l,i;return t=new re({props:{inline:!0,href:"https://creativecommons.org/publicdomain/zero/1.0/",$$slots:{default:[St]},$$scope:{ctx:o}}}),{c(){e=z("p"),n=H(`All included fonts are part of the public domain and as such they are available under the terms of the
                `),S(t.$$.fragment),l=H(`
                license.`)},l(r){e=T(r,"P",{});var a=R(e);n=V(a,`All included fonts are part of the public domain and as such they are available under the terms of the
                `),L(t.$$.fragment,a),l=V(a,`
                license.`),a.forEach(m)},m(r,a){k(r,e,a),E(e,n),N(t,e,null),E(e,l),i=!0},p(r,a){const s={};a&2&&(s.$$scope={dirty:a,ctx:r}),t.$set(s)},i(r){i||($(t.$$.fragment,r),i=!0)},o(r){y(t.$$.fragment,r),i=!1},d(r){r&&m(e),O(t)}}}function Nt(o){let e,n="How are these fonts licensed?";return{c(){e=z("strong"),e.textContent=n},l(t){e=T(t,"STRONG",{"data-svelte-h":!0}),j(e)!=="svelte-1e100n3"&&(e.textContent=n)},m(t,l){k(t,e,l)},p:W,d(t){t&&m(e)}}}function Ot(o){let e,n,t,l,i,r,a,s,c,d,_,P,u,h;return e=new ee({props:{open:o[0],$$slots:{title:[kt],default:[bt]},$$scope:{ctx:o}}}),t=new ee({props:{open:o[0],$$slots:{title:[$t],default:[wt]},$$scope:{ctx:o}}}),i=new ee({props:{open:o[0],$$slots:{title:[Ct],default:[yt]},$$scope:{ctx:o}}}),a=new ee({props:{open:o[0],$$slots:{title:[Et],default:[At]},$$scope:{ctx:o}}}),c=new ee({props:{open:o[0],$$slots:{title:[Tt],default:[zt]},$$scope:{ctx:o}}}),_=new ee({props:{open:o[0],$$slots:{title:[It],default:[Rt]},$$scope:{ctx:o}}}),u=new ee({props:{open:o[0],$$slots:{title:[Nt],default:[Lt]},$$scope:{ctx:o}}}),{c(){S(e.$$.fragment),n=q(),S(t.$$.fragment),l=q(),S(i.$$.fragment),r=q(),S(a.$$.fragment),s=q(),S(c.$$.fragment),d=q(),S(_.$$.fragment),P=q(),S(u.$$.fragment)},l(f){L(e.$$.fragment,f),n=B(f),L(t.$$.fragment,f),l=B(f),L(i.$$.fragment,f),r=B(f),L(a.$$.fragment,f),s=B(f),L(c.$$.fragment,f),d=B(f),L(_.$$.fragment,f),P=B(f),L(u.$$.fragment,f)},m(f,b){N(e,f,b),k(f,n,b),N(t,f,b),k(f,l,b),N(i,f,b),k(f,r,b),N(a,f,b),k(f,s,b),N(c,f,b),k(f,d,b),N(_,f,b),k(f,P,b),N(u,f,b),h=!0},p(f,b){const G={};b&2&&(G.$$scope={dirty:b,ctx:f}),e.$set(G);const p={};b&2&&(p.$$scope={dirty:b,ctx:f}),t.$set(p);const M={};b&2&&(M.$$scope={dirty:b,ctx:f}),i.$set(M);const v={};b&2&&(v.$$scope={dirty:b,ctx:f}),a.$set(v);const w={};b&2&&(w.$$scope={dirty:b,ctx:f}),c.$set(w);const x={};b&2&&(x.$$scope={dirty:b,ctx:f}),_.$set(x);const oe={};b&2&&(oe.$$scope={dirty:b,ctx:f}),u.$set(oe)},i(f){h||($(e.$$.fragment,f),$(t.$$.fragment,f),$(i.$$.fragment,f),$(a.$$.fragment,f),$(c.$$.fragment,f),$(_.$$.fragment,f),$(u.$$.fragment,f),h=!0)},o(f){y(e.$$.fragment,f),y(t.$$.fragment,f),y(i.$$.fragment,f),y(a.$$.fragment,f),y(c.$$.fragment,f),y(_.$$.fragment,f),y(u.$$.fragment,f),h=!1},d(f){f&&(m(n),m(l),m(r),m(s),m(d),m(P)),O(e,f),O(t,f),O(i,f),O(a,f),O(c,f),O(_,f),O(u,f)}}}function Dt(o){let e,n;return e=new ot({props:{$$slots:{default:[Ot]},$$scope:{ctx:o}}}),{c(){S(e.$$.fragment)},l(t){L(e.$$.fragment,t)},m(t,l){N(e,t,l),n=!0},p(t,l){const i={};l&2&&(i.$$scope={dirty:l,ctx:t}),e.$set(i)},i(t){n||($(e.$$.fragment,t),n=!0)},o(t){y(e.$$.fragment,t),n=!1},d(t){O(e,t)}}}function Gt(o){let e,n;return e=new Ne({props:{padding:!0,$$slots:{default:[Dt]},$$scope:{ctx:o}}}),{c(){S(e.$$.fragment)},l(t){L(e.$$.fragment,t)},m(t,l){N(e,t,l),n=!0},p(t,l){const i={};l&2&&(i.$$scope={dirty:l,ctx:t}),e.$set(i)},i(t){n||($(e.$$.fragment,t),n=!0)},o(t){y(e.$$.fragment,t),n=!1},d(t){O(e,t)}}}function Ht(o){let e,n,t="Frequently Asked Questions",l,i,r;return i=new Le({props:{$$slots:{default:[Gt]},$$scope:{ctx:o}}}),{c(){e=q(),n=z("h2"),n.textContent=t,l=q(),S(i.$$.fragment),this.h()},l(a){Se("svelte-2xq18x",document.head).forEach(m),e=B(a),n=T(a,"H2",{"data-svelte-h":!0}),j(n)!=="svelte-41559e"&&(n.textContent=t),l=B(a),L(i.$$.fragment,a),this.h()},h(){document.title="Frequently Asked Questions | Playdate Arcade Fonts"},m(a,s){k(a,e,s),k(a,n,s),k(a,l,s),N(i,a,s),r=!0},p(a,[s]){const c={};s&2&&(c.$$scope={dirty:s,ctx:a}),i.$set(c)},i(a){r||($(i.$$.fragment,a),r=!0)},o(a){y(i.$$.fragment,a),r=!1},d(a){a&&(m(e),m(n),m(l)),O(i,a)}}}function Vt(o){return[!1]}class jt extends Z{constructor(e){super(),X(this,e,Vt,Ht,K,{})}}export{jt as component};
