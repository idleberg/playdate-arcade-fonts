import{s as ae,u as Z,F as J,G as K,h as S,d as m,j as g,H as Q,i as L,C as _,D as q,r as W,v as X,l as N,m as O,n as ue,f as T,a as R,e as x,O as ce,g as M,c as H,E as fe,o as ie,p as V,P as re,B as me}from"../chunks/scheduler.b0b23c3e.js";import{S as se,i as le,a as w,t as v,b as A,d as y,m as E,e as C,f as oe}from"../chunks/index.74801182.js";import{p as $e}from"../chunks/stores.427795d8.js";import{p as pe}from"../chunks/meta.af451603.js";import{L as de,b as ge,T as _e,a as he,d as G,B as ee,c as be}from"../chunks/Tags.572bfc83.js";import{g as we,R as j,C as Y}from"../chunks/Column.9e9fab5a.js";function te(r){let e,n;return{c(){e=J("title"),n=N(r[1])},l(t){e=K(t,"title",{});var a=S(e);n=O(a,r[1]),a.forEach(m)},m(t,a){L(t,e,a),_(e,n)},p(t,a){a&2&&ue(n,t[1])},d(t){t&&m(e)}}}function ve(r){let e,n,t=r[1]&&te(r),a=[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},{width:r[0]},{height:r[0]},r[2],r[3]],l={};for(let s=0;s<a.length;s+=1)l=Z(l,a[s]);return{c(){e=J("svg"),t&&t.c(),n=J("path"),this.h()},l(s){e=K(s,"svg",{xmlns:!0,viewBox:!0,fill:!0,preserveAspectRatio:!0,width:!0,height:!0});var o=S(e);t&&t.l(o),n=K(o,"path",{d:!0}),S(n).forEach(m),o.forEach(m),this.h()},h(){g(n,"d","M26 24v4H6V24H4v4H4a2 2 0 002 2H26a2 2 0 002-2h0V24zM26 14L24.59 12.59 17 20.17 17 2 15 2 15 20.17 7.41 12.59 6 14 16 24 26 14z"),Q(e,l)},m(s,o){L(s,e,o),t&&t.m(e,null),_(e,n)},p(s,[o]){s[1]?t?t.p(s,o):(t=te(s),t.c(),t.m(e,n)):t&&(t.d(1),t=null),Q(e,l=we(a,[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},o&1&&{width:s[0]},o&1&&{height:s[0]},o&4&&s[2],o&8&&s[3]]))},i:q,o:q,d(s){s&&m(e),t&&t.d()}}}function ke(r,e,n){let t,a;const l=["size","title"];let s=W(e,l),{size:o=16}=e,{title:$=void 0}=e;return r.$$set=p=>{n(5,e=Z(Z({},e),X(p))),n(3,s=W(e,l)),"size"in p&&n(0,o=p.size),"title"in p&&n(1,$=p.title)},r.$$.update=()=>{n(4,t=e["aria-label"]||e["aria-labelledby"]||$),n(2,a={"aria-hidden":t?void 0:!0,role:t?"img":void 0,focusable:Number(e.tabindex)===0?!0:void 0})},e=X(e),[o,$,a,s,t]}class Ae extends se{constructor(e){super(),le(this,e,ke,ve,ae,{size:0,title:1})}}function ye(r){let e,n;return e=new de({props:{withOverlay:!1,small:!0}}),{c(){A(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,a){E(e,t,a),n=!0},p:q,i(t){n||(w(e.$$.fragment,t),n=!0)},o(t){v(e.$$.fragment,t),n=!1},d(t){C(e,t)}}}function Ee(r){let e,n,t,a,l,s,o,$,p,h;n=new j({props:{$$slots:{default:[Te]},$$scope:{ctx:r}}}),a=new j({props:{$$slots:{default:[Pe]},$$scope:{ctx:r}}});let d=!(r[5].features.lowercase&&r[5].features.uppercase)&&ze(r);return o=new j({props:{$$slots:{default:[Ue]},$$scope:{ctx:r}}}),p=new j({props:{$$slots:{default:[Oe]},$$scope:{ctx:r}}}),{c(){e=T("div"),A(n.$$.fragment),t=R(),A(a.$$.fragment),l=R(),d&&d.c(),s=R(),A(o.$$.fragment),$=R(),A(p.$$.fragment),this.h()},l(f){e=M(f,"DIV",{style:!0});var i=S(e);y(n.$$.fragment,i),t=H(i),y(a.$$.fragment,i),l=H(i),d&&d.l(i),s=H(i),y(o.$$.fragment,i),$=H(i),y(p.$$.fragment,i),i.forEach(m),this.h()},h(){var f;g(e,"style",((f=r[5])==null?void 0:f.name)&&`--backgroundImage: url("https://idleberg.github.io/playdate-arcade-fonts/sprites/${encodeURIComponent(r[5].name)}.png")`)},m(f,i){L(f,e,i),E(n,e,null),_(e,t),E(a,e,null),_(e,l),d&&d.m(e,null),_(e,s),E(o,e,null),_(e,$),E(p,e,null),h=!0},p(f,i){const I={};i&131072&&(I.$$scope={dirty:i,ctx:f}),n.$set(I);const k={};i&131088&&(k.$$scope={dirty:i,ctx:f}),a.$set(k),f[5].features.lowercase&&f[5].features.uppercase||d.p(f,i);const z={};i&131079&&(z.$$scope={dirty:i,ctx:f}),o.$set(z);const F={};i&131072&&(F.$$scope={dirty:i,ctx:f}),p.$set(F)},i(f){h||(w(n.$$.fragment,f),w(a.$$.fragment,f),w(d),w(o.$$.fragment,f),w(p.$$.fragment,f),h=!0)},o(f){v(n.$$.fragment,f),v(a.$$.fragment,f),v(d),v(o.$$.fragment,f),v(p.$$.fragment,f),h=!1},d(f){f&&m(e),C(n),C(a),d&&d.d(),C(o),C(p)}}}function Ce(r){let e,n;return e=new ge({props:{font:r[5]}}),{c(){A(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,a){E(e,t,a),n=!0},p:q,i(t){n||(w(e.$$.fragment,t),n=!0)},o(t){v(e.$$.fragment,t),n=!1},d(t){C(e,t)}}}function Te(r){let e,n;return e=new Y({props:{padding:!0,$$slots:{default:[Ce]},$$scope:{ctx:r}}}),{c(){A(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,a){E(e,t,a),n=!0},p(t,a){const l={};a&131072&&(l.$$scope={dirty:a,ctx:t}),e.$set(l)},i(t){n||(w(e.$$.fragment,t),n=!0)},o(t){v(e.$$.fragment,t),n=!1},d(t){C(e,t)}}}function Me(r){let e,n,t;function a(s){r[7](s)}let l={style:"max-height:400px",placeholder:"Enter your text...",labelText:"Input"};return r[4]!==void 0&&(l.value=r[4]),e=new _e({props:l}),V.push(()=>oe(e,"value",a)),e.$on("input",r[8]),{c(){A(e.$$.fragment)},l(s){y(e.$$.fragment,s)},m(s,o){E(e,s,o),t=!0},p(s,o){const $={};!n&&o&16&&(n=!0,$.value=s[4],re(()=>n=!1)),e.$set($)},i(s){t||(w(e.$$.fragment,s),t=!0)},o(s){v(e.$$.fragment,s),t=!1},d(s){C(e,s)}}}function Pe(r){let e,n;return e=new Y({props:{padding:!0,$$slots:{default:[Me]},$$scope:{ctx:r}}}),{c(){A(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,a){E(e,t,a),n=!0},p(t,a){const l={};a&131088&&(l.$$scope={dirty:a,ctx:t}),e.$set(l)},i(t){n||(w(e.$$.fragment,t),n=!0)},o(t){v(e.$$.fragment,t),n=!1},d(t){C(e,t)}}}function ze(r){let e,n;return e=new j({props:{$$slots:{default:[Ie]},$$scope:{ctx:r}}}),{c(){A(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,a){E(e,t,a),n=!0},p(t,a){const l={};a&131080&&(l.$$scope={dirty:a,ctx:t}),e.$set(l)},i(t){n||(w(e.$$.fragment,t),n=!0)},o(t){v(e.$$.fragment,t),n=!1},d(t){C(e,t)}}}function Le(r){let e,n,t;function a(s){r[9](s)}let l={labelText:r[3].label};return r[3].checked!==void 0&&(l.checked=r[3].checked),e=new he({props:l}),V.push(()=>oe(e,"checked",a)),e.$on("change",r[10]),{c(){A(e.$$.fragment)},l(s){y(e.$$.fragment,s)},m(s,o){E(e,s,o),t=!0},p(s,o){const $={};o&8&&($.labelText=s[3].label),!n&&o&8&&(n=!0,$.checked=s[3].checked,re(()=>n=!1)),e.$set($)},i(s){t||(w(e.$$.fragment,s),t=!0)},o(s){v(e.$$.fragment,s),t=!1},d(s){C(e,s)}}}function Ie(r){let e,n;return e=new Y({props:{padding:!0,$$slots:{default:[Le]},$$scope:{ctx:r}}}),{c(){A(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,a){E(e,t,a),n=!0},p(t,a){const l={};a&131080&&(l.$$scope={dirty:a,ctx:t}),e.$set(l)},i(t){n||(w(e.$$.fragment,t),n=!0)},o(t){v(e.$$.fragment,t),n=!1},d(t){C(e,t)}}}function Fe(r){let e;return{c(){e=N("1x")},l(n){e=O(n,"1x")},m(n,t){L(n,e,t)},d(n){n&&m(e)}}}function Re(r){let e;return{c(){e=N("2x")},l(n){e=O(n,"2x")},m(n,t){L(n,e,t)},d(n){n&&m(e)}}}function He(r){let e;return{c(){e=N("4x")},l(n){e=O(n,"4x")},m(n,t){L(n,e,t)},d(n){n&&m(e)}}}function Se(r){let e,n="Output",t,a,l,s,o,$,p,h,d,f,i,I,k,z,F,B,D;return s=new G({props:{type:"gray",$$slots:{default:[Fe]},$$scope:{ctx:r}}}),d=new G({props:{type:"gray",$$slots:{default:[Re]},$$scope:{ctx:r}}}),z=new G({props:{type:"gray",$$slots:{default:[He]},$$scope:{ctx:r}}}),{c(){e=T("label"),e.textContent=n,t=R(),a=T("ul"),l=T("li"),A(s.$$.fragment),o=R(),$=T("span"),p=R(),h=T("li"),A(d.$$.fragment),f=R(),i=T("span"),I=R(),k=T("li"),A(z.$$.fragment),F=R(),B=T("span"),this.h()},l(u){e=M(u,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),me(e)!=="svelte-dvl09b"&&(e.textContent=n),t=H(u),a=M(u,"UL",{id:!0,class:!0});var c=S(a);l=M(c,"LI",{class:!0});var b=S(l);y(s.$$.fragment,b),o=H(b),$=M(b,"SPAN",{}),S($).forEach(m),b.forEach(m),p=H(c),h=M(c,"LI",{class:!0});var P=S(h);y(d.$$.fragment,P),f=H(P),i=M(P,"SPAN",{}),S(i).forEach(m),P.forEach(m),I=H(c),k=M(c,"LI",{class:!0});var U=S(k);y(z.$$.fragment,U),F=H(U),B=M(U,"SPAN",{}),S(B).forEach(m),U.forEach(m),c.forEach(m),this.h()},h(){g(e,"for","preview-area"),g(e,"class","false bx--label"),g(l,"class","svelte-tnlzgl"),g(h,"class","zoom-2x svelte-tnlzgl"),g(k,"class","zoom-4x svelte-tnlzgl"),g(a,"id","preview-area"),g(a,"class","svelte-tnlzgl")},m(u,c){L(u,e,c),L(u,t,c),L(u,a,c),_(a,l),E(s,l,null),_(l,o),_(l,$),r[11]($),_(a,p),_(a,h),E(d,h,null),_(h,f),_(h,i),r[12](i),_(a,I),_(a,k),E(z,k,null),_(k,F),_(k,B),r[13](B),D=!0},p(u,c){const b={};c&131072&&(b.$$scope={dirty:c,ctx:u}),s.$set(b);const P={};c&131072&&(P.$$scope={dirty:c,ctx:u}),d.$set(P);const U={};c&131072&&(U.$$scope={dirty:c,ctx:u}),z.$set(U)},i(u){D||(w(s.$$.fragment,u),w(d.$$.fragment,u),w(z.$$.fragment,u),D=!0)},o(u){v(s.$$.fragment,u),v(d.$$.fragment,u),v(z.$$.fragment,u),D=!1},d(u){u&&(m(e),m(t),m(a)),C(s),r[11](null),C(d),r[12](null),C(z),r[13](null)}}}function Ue(r){let e,n;return e=new Y({props:{padding:!0,$$slots:{default:[Se]},$$scope:{ctx:r}}}),{c(){A(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,a){E(e,t,a),n=!0},p(t,a){const l={};a&131079&&(l.$$scope={dirty:a,ctx:t}),e.$set(l)},i(t){n||(w(e.$$.fragment,t),n=!0)},o(t){v(e.$$.fragment,t),n=!1},d(t){C(e,t)}}}function Be(r){let e;return{c(){e=N("Download")},l(n){e=O(n,"Download")},m(n,t){L(n,e,t)},d(n){n&&m(e)}}}function De(r){let e;return{c(){e=N("Source")},l(n){e=O(n,"Source")},m(n,t){L(n,e,t)},d(n){n&&m(e)}}}function Ne(r){let e,n,t,a;return e=new ee({props:{href:`https://idleberg.github.io/playdate-arcade-fonts/fonts/${r[5].category}/${r[5].name}.fnt`,download:`${r[5].name}.fnt`,icon:Ae,$$slots:{default:[Be]},$$scope:{ctx:r}}}),t=new ee({props:{href:`https://github.com/idleberg/playdate-arcade-fonts/tree/main/static/fonts/${encodeURIComponent(r[5].category)}/${r[5].name}.fnt`,kind:"tertiary",icon:be,$$slots:{default:[De]},$$scope:{ctx:r}}}),{c(){A(e.$$.fragment),n=R(),A(t.$$.fragment)},l(l){y(e.$$.fragment,l),n=H(l),y(t.$$.fragment,l)},m(l,s){E(e,l,s),L(l,n,s),E(t,l,s),a=!0},p(l,s){const o={};s&131072&&(o.$$scope={dirty:s,ctx:l}),e.$set(o);const $={};s&131072&&($.$$scope={dirty:s,ctx:l}),t.$set($)},i(l){a||(w(e.$$.fragment,l),w(t.$$.fragment,l),a=!0)},o(l){v(e.$$.fragment,l),v(t.$$.fragment,l),a=!1},d(l){l&&m(n),C(e,l),C(t,l)}}}function Oe(r){let e,n;return e=new Y({props:{padding:!0,$$slots:{default:[Ne]},$$scope:{ctx:r}}}),{c(){A(e.$$.fragment)},l(t){y(e.$$.fragment,t)},m(t,a){E(e,t,a),n=!0},p(t,a){const l={};a&131072&&(l.$$scope={dirty:a,ctx:t}),e.$set(l)},i(t){n||(w(e.$$.fragment,t),n=!0)},o(t){v(e.$$.fragment,t),n=!1},d(t){C(e,t)}}}function je(r){var D;let e,n,t,a,l,s,o,$,p,h,d,f,i,I,k;document.title=e=(D=r[5])!=null&&D.name?`${r[5].name} | Playdate Arcade Fonts`:"Playdate Arcade Fonts";const z=[Ee,ye],F=[];function B(u,c){var b;return(b=u[5])!=null&&b.name?0:1}return f=B(r),i=F[f]=z[f](r),{c(){n=T("meta"),t=T("meta"),a=T("meta"),l=T("meta"),s=T("meta"),o=T("meta"),$=T("meta"),p=T("meta"),h=T("meta"),d=R(),i.c(),I=x(),this.h()},l(u){const c=ce("svelte-1b97o6c",document.head);n=M(c,"META",{property:!0,content:!0}),t=M(c,"META",{property:!0,content:!0}),a=M(c,"META",{property:!0,content:!0}),l=M(c,"META",{property:!0,content:!0}),s=M(c,"META",{name:!0,content:!0}),o=M(c,"META",{name:!0,content:!0}),$=M(c,"META",{name:!0,content:!0}),p=M(c,"META",{name:!0,content:!0}),h=M(c,"META",{name:!0,content:!0}),c.forEach(m),d=H(u),i.l(u),I=x(),this.h()},h(){var u,c,b,P;g(n,"property","og:title"),g(n,"content",(u=r[5])!=null&&u.name?`${r[5].name} | Playdate Arcade Fonts`:"Playdate Arcade Fonts"),g(t,"property","og:description"),g(t,"content","A collection of bitmap fonts for the Playdate, the tiny handheld game system from Panic."),g(a,"property","og:type"),g(a,"content","website"),g(l,"property","og:image"),g(l,"content",(c=r[5])!=null&&c.name?`https://idleberg.github.io/playdate-arcade-fonts/sprites/${encodeURIComponent(r[5].name)}.png`:""),g(s,"name","twitter:card"),g(s,"content","summary"),g(o,"name","twitter:site"),g(o,"content","@idleberg"),g($,"name","twitter:title"),g($,"content",(b=r[5])!=null&&b.name?`${r[5].name} | Playdate Arcade Fonts`:"Playdate Arcade Fonts"),g(p,"name","twitter:description"),g(p,"content","A collection of bitmap fonts for the Playdate, the tiny handheld game system from Panic."),g(h,"name","twitter:image"),g(h,"content",(P=r[5])!=null&&P.name?`https://idleberg.github.io/playdate-arcade-fonts/sprites/${encodeURIComponent(r[5].name)}.png`:"")},m(u,c){_(document.head,n),_(document.head,t),_(document.head,a),_(document.head,l),_(document.head,s),_(document.head,o),_(document.head,$),_(document.head,p),_(document.head,h),L(u,d,c),F[f].m(u,c),L(u,I,c),k=!0},p(u,[c]){var b;(!k||c&32)&&e!==(e=(b=u[5])!=null&&b.name?`${u[5].name} | Playdate Arcade Fonts`:"Playdate Arcade Fonts")&&(document.title=e),i.p(u,c)},i(u){k||(w(i),k=!0)},o(u){v(i),k=!1},d(u){u&&(m(d),m(I)),m(n),m(t),m(a),m(l),m(s),m(o),m($),m(p),m(h),F[f].d(u)}}}let ne="SPHINX OF BLACK QUARTZ JUDGE MY VOW";const Ve=" !\"#$&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~";function Ye(r,e,n){let t;fe(r,$e,u=>n(14,t=u));let a,l,s;const o=pe.content.find(u=>u.name===t.params.font),$=!(o!=null&&o.features.lowercase)&&(o==null?void 0:o.features.uppercase);let p={checked:!(o!=null&&o.features.lowercase&&(o!=null&&o.features.uppercase)),label:`Convert ${$?" lowercase":"uppercase"} characters ${$?" to uppercase":" to lowercase"}`},h=$?ne:ne.toLowerCase();ie(()=>{d()});function d(){const u=h.split(""),c=[];u.forEach(b=>{if([...Ve].includes(b)){const P=p.checked?f(b):b;c.push(`<span data-glyph="${P}" data-size="${o.size}" arial-label=${P}></span>`)}}),n(0,a.innerHTML=c.join(""),a),n(1,l.innerHTML=c.join(""),l),n(2,s.innerHTML=c.join(""),s)}function f(u){var c,b,P,U;if(!/[A-Za-z]/.test(u))return console.warn(`'${u}' is not an alphabetic character`),u;switch(!0){case(((c=o==null?void 0:o.features)==null?void 0:c.lowercase)&&!((b=o==null?void 0:o.features)!=null&&b.uppercase)):return u.toLowerCase();case(!((P=o==null?void 0:o.features)!=null&&P.lowercase)&&((U=o==null?void 0:o.features)==null?void 0:U.uppercase)):return u.toUpperCase()}}function i(u){h=u,n(4,h)}const I=()=>d();function k(u){r.$$.not_equal(p.checked,u)&&(p.checked=u,n(3,p))}const z=()=>d();function F(u){V[u?"unshift":"push"](()=>{a=u,n(0,a)})}function B(u){V[u?"unshift":"push"](()=>{l=u,n(1,l)})}function D(u){V[u?"unshift":"push"](()=>{s=u,n(2,s)})}return[a,l,s,p,h,o,d,i,I,k,z,F,B,D]}class We extends se{constructor(e){super(),le(this,e,Ye,je,ae,{})}}export{We as component};
