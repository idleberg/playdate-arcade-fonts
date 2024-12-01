var Mt=Array.isArray,Ht=Array.from,Yt=Object.defineProperty,pn=Object.getOwnPropertyDescriptor,tt=Object.getOwnPropertyDescriptors,jt=Object.prototype,Bt=Array.prototype,rt=Object.getPrototypeOf;function Ut(n){return typeof n=="function"}const Vt=()=>{};function Gt(n){return n()}function wn(n){for(var t=0;t<n.length;t++)n[t]()}const y=2,mn=4,j=8,sn=16,g=32,J=64,X=128,R=256,G=512,h=1024,x=2048,b=4096,N=8192,q=16384,et=32768,Tn=65536,Kt=1<<17,at=1<<19,gn=1<<20,hn=Symbol("$state"),$t=Symbol("legacy props"),Zt=Symbol("");function An(n){return n===this.v}function st(n,t){return n!=n?t==t:n!==t||n!==null&&typeof n=="object"||typeof n=="function"}function xn(n){return!st(n,this.v)}function lt(n){throw new Error("effect_in_teardown")}function ut(){throw new Error("effect_in_unowned_derived")}function ot(n){throw new Error("effect_orphan")}function it(){throw new Error("effect_update_depth_exceeded")}function zt(){throw new Error("hydration_failed")}function Jt(n){throw new Error("props_invalid_value")}function Qt(){throw new Error("state_descriptors_fixed")}function Wt(){throw new Error("state_prototype_fixed")}function ft(){throw new Error("state_unsafe_local_read")}function _t(){throw new Error("state_unsafe_mutation")}let Q=!1;function Xt(){Q=!0}function ln(n){return{f:0,v:n,reactions:null,equals:An,version:0}}function nr(n){return kn(ln(n))}function ct(n,t=!1){var e;const r=ln(n);return t||(r.equals=xn),Q&&o!==null&&o.l!==null&&((e=o.l).s??(e.s=[])).push(r),r}function tr(n,t=!1){return kn(ct(n,t))}function kn(n){return i!==null&&i.f&y&&(T===null?St([n]):T.push(n)),n}function In(n,t){return i!==null&&_n()&&i.f&(y|sn)&&(T===null||!T.includes(n))&&_t(),vt(n,t)}function vt(n,t){return n.equals(t)||(n.v=t,n.version=$n(),Rn(n,x),_n()&&u!==null&&u.f&h&&!(u.f&g)&&(v!==null&&v.includes(n)?(m(u,x),W(u)):A===null?Dt([n]):A.push(n))),t}function Rn(n,t){var r=n.reactions;if(r!==null)for(var e=_n(),a=r.length,s=0;s<a;s++){var l=r[s],f=l.f;f&x||!e&&l===u||(m(l,t),f&(h|R)&&(f&y?Rn(l,b):W(l)))}}const rr=1,er=2,ar=4,sr=8,lr=16,ur=1,or=2,ir=4,fr=8,_r=16,cr=1,vr=2,pt="[",ht="[!",dt="]",Sn={},pr=Symbol();function Dn(n){console.warn("hydration_mismatch")}let I=!1;function hr(n){I=n}let w;function M(n){if(n===null)throw Dn(),Sn;return w=n}function dr(){return M(S(w))}function Er(n){if(I){if(S(w)!==null)throw Dn(),Sn;w=n}}function yr(n=1){if(I){for(var t=n,r=w;t--;)r=S(r);w=r}}function wr(){for(var n=0,t=w;;){if(t.nodeType===8){var r=t.data;if(r===dt){if(n===0)return t;n-=1}else(r===pt||r===ht)&&(n+=1)}var e=S(t);t.remove(),t=e}}var dn,Et,On,Cn;function mr(){if(dn===void 0){dn=window,Et=document;var n=Element.prototype,t=Node.prototype;On=pn(t,"firstChild").get,Cn=pn(t,"nextSibling").get,n.__click=void 0,n.__className="",n.__attributes=null,n.__styles=null,n.__e=void 0,Text.prototype.__t=void 0}}function nn(n=""){return document.createTextNode(n)}function tn(n){return On.call(n)}function S(n){return Cn.call(n)}function Tr(n,t){if(!I)return tn(n);var r=tn(w);if(r===null)r=w.appendChild(nn());else if(t&&r.nodeType!==3){var e=nn();return r==null||r.before(e),M(e),e}return M(r),r}function gr(n,t){if(!I){var r=tn(n);return r instanceof Comment&&r.data===""?S(r):r}return w}function Ar(n,t=1,r=!1){let e=I?w:n;for(var a;t--;)a=e,e=S(e);if(!I)return e;var s=e==null?void 0:e.nodeType;if(r&&s!==3){var l=nn();return e===null?a==null||a.after(l):e.before(l),M(l),l}return M(e),e}function xr(n){n.textContent=""}function yt(n){var t=y|x;u===null?t|=R:u.f|=gn;var r=i!==null&&i.f&y?i:null;const e={children:null,ctx:o,deps:null,equals:An,f:t,fn:n,reactions:null,v:null,version:0,parent:r??u};return r!==null&&(r.children??(r.children=[])).push(e),e}function kr(n){const t=yt(n);return t.equals=xn,t}function Nn(n){var t=n.children;if(t!==null){n.children=null;for(var r=0;r<t.length;r+=1){var e=t[r];e.f&y?un(e):F(e)}}}function wt(n){for(var t=n.parent;t!==null;){if(!(t.f&y))return t;t=t.parent}return null}function bn(n){var t,r=u;z(wt(n));try{Nn(n),t=Zn(n)}finally{z(r)}return t}function qn(n){var t=bn(n),r=(D||n.f&R)&&n.deps!==null?b:h;m(n,r),n.equals(t)||(n.v=t,n.version=$n())}function un(n){Nn(n),Y(n,0),m(n,q),n.v=n.children=n.deps=n.ctx=n.reactions=null}function Pn(n){u===null&&i===null&&ot(),i!==null&&i.f&R&&ut(),fn&&lt()}function mt(n,t){var r=t.last;r===null?t.last=t.first=n:(r.next=n,n.prev=r,t.last=n)}function P(n,t,r,e=!0){var a=(n&J)!==0,s=u,l={ctx:o,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:n|x,first:null,fn:t,last:null,next:null,parent:a?null:s,prev:null,teardown:null,transitions:null,version:0};if(r){var f=O;try{En(!0),B(l),l.f|=et}catch(_){throw F(l),_}finally{En(f)}}else t!==null&&W(l);var p=r&&l.deps===null&&l.first===null&&l.nodes_start===null&&l.teardown===null&&(l.f&gn)===0;if(!p&&!a&&e&&(s!==null&&mt(l,s),i!==null&&i.f&y)){var d=i;(d.children??(d.children=[])).push(l)}return l}function Ir(n){const t=P(j,null,!1);return m(t,h),t.teardown=n,t}function Rr(n){Pn();var t=u!==null&&(u.f&g)!==0&&o!==null&&!o.m;if(t){var r=o;(r.e??(r.e=[])).push({fn:n,effect:u,reaction:i})}else{var e=Fn(n);return e}}function Sr(n){return Pn(),on(n)}function Dr(n){const t=P(J,n,!0);return()=>{F(t)}}function Fn(n){return P(mn,n,!1)}function Or(n,t){var r=o,e={effect:null,ran:!1};r.l.r1.push(e),e.effect=on(()=>{n(),!e.ran&&(e.ran=!0,In(r.l.r2,!0),Pt(t))})}function Cr(){var n=o;on(()=>{if(Xn(n.l.r2)){for(var t of n.l.r1){var r=t.effect;r.f&h&&m(r,b),L(r)&&B(r),t.ran=!1}n.l.r2.v=!1}})}function on(n){return P(j,n,!0)}function Nr(n){return Tt(n)}function Tt(n,t=0){return P(j|sn|t,n,!0)}function br(n,t=!0){return P(j|g,n,!0,t)}function Ln(n){var t=n.teardown;if(t!==null){const r=fn,e=i;yn(!0),Z(null);try{t.call(null)}finally{yn(r),Z(e)}}}function Mn(n){var t=n.deriveds;if(t!==null){n.deriveds=null;for(var r=0;r<t.length;r+=1)un(t[r])}}function Hn(n,t=!1){var r=n.first;for(n.first=n.last=null;r!==null;){var e=r.next;F(r,t),r=e}}function gt(n){for(var t=n.first;t!==null;){var r=t.next;t.f&g||F(t),t=r}}function F(n,t=!0){var r=!1;if((t||n.f&at)&&n.nodes_start!==null){for(var e=n.nodes_start,a=n.nodes_end;e!==null;){var s=e===a?null:S(e);e.remove(),e=s}r=!0}Hn(n,t&&!r),Mn(n),Y(n,0),m(n,q);var l=n.transitions;if(l!==null)for(const p of l)p.stop();Ln(n);var f=n.parent;f!==null&&f.first!==null&&Yn(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.fn=n.nodes_start=n.nodes_end=null}function Yn(n){var t=n.parent,r=n.prev,e=n.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),t!==null&&(t.first===n&&(t.first=e),t.last===n&&(t.last=r))}function qr(n,t){var r=[];jn(n,r,!0),At(r,()=>{F(n),t&&t()})}function At(n,t){var r=n.length;if(r>0){var e=()=>--r||t();for(var a of n)a.out(e)}else t()}function jn(n,t,r){if(!(n.f&N)){if(n.f^=N,n.transitions!==null)for(const l of n.transitions)(l.is_global||r)&&t.push(l);for(var e=n.first;e!==null;){var a=e.next,s=(e.f&Tn)!==0||(e.f&g)!==0;jn(e,t,s?r:!1),e=a}}}function Pr(n){Bn(n,!0)}function Bn(n,t){if(n.f&N){L(n)&&B(n),n.f^=N;for(var r=n.first;r!==null;){var e=r.next,a=(r.f&Tn)!==0||(r.f&g)!==0;Bn(r,a?t:!1),r=e}if(n.transitions!==null)for(const s of n.transitions)(s.is_global||t)&&s.in()}}const xt=typeof requestIdleCallback>"u"?n=>setTimeout(n,1):requestIdleCallback;let K=!1,$=!1,rn=[],en=[];function Un(){K=!1;const n=rn.slice();rn=[],wn(n)}function Vn(){$=!1;const n=en.slice();en=[],wn(n)}function Fr(n){K||(K=!0,queueMicrotask(Un)),rn.push(n)}function Lr(n){$||($=!0,xt(Vn)),en.push(n)}function kt(){K&&Un(),$&&Vn()}function It(n){throw new Error("lifecycle_outside_component")}const Gn=0,Rt=1;let U=!1,V=Gn,H=!1,O=!1,fn=!1;function En(n){O=n}function yn(n){fn=n}let k=[],C=0;let i=null;function Z(n){i=n}let u=null;function z(n){u=n}let T=null;function St(n){T=n}let v=null,E=0,A=null;function Dt(n){A=n}let Kn=0,D=!1,o=null;function $n(){return++Kn}function _n(){return!Q||o!==null&&o.l===null}function L(n){var l,f;var t=n.f;if(t&x)return!0;if(t&b){var r=n.deps,e=(t&R)!==0;if(r!==null){var a;if(t&G){for(a=0;a<r.length;a++)((l=r[a]).reactions??(l.reactions=[])).push(n);n.f^=G}for(a=0;a<r.length;a++){var s=r[a];if(L(s)&&qn(s),e&&u!==null&&!D&&!((f=s==null?void 0:s.reactions)!=null&&f.includes(n))&&(s.reactions??(s.reactions=[])).push(n),s.version>n.version)return!0}}e||m(n,h)}return!1}function Ot(n,t){for(var r=t;r!==null;){if(r.f&X)try{r.fn(n);return}catch{r.f^=X}r=r.parent}throw U=!1,n}function Ct(n){return(n.f&q)===0&&(n.parent===null||(n.parent.f&X)===0)}function cn(n,t,r,e){if(U){if(r===null&&(U=!1),Ct(t))throw n;return}r!==null&&(U=!0);{Ot(n,t);return}}function Zn(n){var vn;var t=v,r=E,e=A,a=i,s=D,l=T,f=o,p=n.f;v=null,E=0,A=null,i=p&(g|J)?null:n,D=!O&&(p&R)!==0,T=null,o=n.ctx;try{var d=(0,n.fn)(),_=n.deps;if(v!==null){var c;if(Y(n,E),_!==null&&E>0)for(_.length=E+v.length,c=0;c<v.length;c++)_[E+c]=v[c];else n.deps=_=v;if(!D)for(c=E;c<_.length;c++)((vn=_[c]).reactions??(vn.reactions=[])).push(n)}else _!==null&&E<_.length&&(Y(n,E),_.length=E);return d}finally{v=t,E=r,A=e,i=a,D=s,T=l,o=f}}function Nt(n,t){let r=t.reactions;if(r!==null){var e=r.indexOf(n);if(e!==-1){var a=r.length-1;a===0?r=t.reactions=null:(r[e]=r[a],r.pop())}}r===null&&t.f&y&&(v===null||!v.includes(t))&&(m(t,b),t.f&(R|G)||(t.f^=G),Y(t,0))}function Y(n,t){var r=n.deps;if(r!==null)for(var e=t;e<r.length;e++)Nt(n,r[e])}function B(n){var t=n.f;if(!(t&q)){m(n,h);var r=u,e=o;u=n;try{t&sn?gt(n):Hn(n),Mn(n),Ln(n);var a=Zn(n);n.teardown=typeof a=="function"?a:null,n.version=Kn}catch(s){cn(s,n,r,e||n.ctx)}finally{u=r}}}function zn(){C>1e3&&(C=0,it()),C++}function Jn(n){var t=n.length;if(t!==0){zn();var r=O;O=!0;try{for(var e=0;e<t;e++){var a=n[e];a.f&h||(a.f^=h);var s=[];Qn(a,s),bt(s)}}finally{O=r}}}function bt(n){var t=n.length;if(t!==0)for(var r=0;r<t;r++){var e=n[r];if(!(e.f&(q|N)))try{L(e)&&(B(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Yn(e):e.fn=null))}catch(a){cn(a,e,null,e.ctx)}}}function qt(){if(H=!1,C>1001)return;const n=k;k=[],Jn(n),H||(C=0)}function W(n){V===Gn&&(H||(H=!0,queueMicrotask(qt)));for(var t=n;t.parent!==null;){t=t.parent;var r=t.f;if(r&(J|g)){if(!(r&h))return;t.f^=h}}k.push(t)}function Qn(n,t){var r=n.first,e=[];n:for(;r!==null;){var a=r.f,s=(a&g)!==0,l=s&&(a&h)!==0,f=r.next;if(!l&&!(a&N))if(a&j){if(s)r.f^=h;else try{L(r)&&B(r)}catch(c){cn(c,r,null,r.ctx)}var p=r.first;if(p!==null){r=p;continue}}else a&mn&&e.push(r);if(f===null){let c=r.parent;for(;c!==null;){if(n===c)break n;var d=c.next;if(d!==null){r=d;continue n}c=c.parent}}r=f}for(var _=0;_<e.length;_++)p=e[_],t.push(p),Qn(p,t)}function Wn(n){var t=V,r=k;try{zn();const a=[];V=Rt,k=a,H=!1,Jn(r);var e=n==null?void 0:n();return kt(),(k.length>0||a.length>0)&&Wn(),C=0,e}finally{V=t,k=r}}async function Mr(){await Promise.resolve(),Wn()}function Xn(n){var _;var t=n.f,r=(t&y)!==0;if(r&&t&q){var e=bn(n);return un(n),e}if(i!==null){T!==null&&T.includes(n)&&ft();var a=i.deps;v===null&&a!==null&&a[E]===n?E++:v===null?v=[n]:v.push(n),A!==null&&u!==null&&u.f&h&&!(u.f&g)&&A.includes(n)&&(m(u,x),W(u))}else if(r&&n.deps===null)for(var s=n,l=s.parent,f=s;l!==null;)if(l.f&y){var p=l;f=p,l=p.parent}else{var d=l;(_=d.deriveds)!=null&&_.includes(f)||(d.deriveds??(d.deriveds=[])).push(f);break}return r&&(s=n,L(s)&&qn(s)),n.v}function Pt(n){const t=i;try{return i=null,n()}finally{i=t}}const Ft=~(x|b|h);function m(n,t){n.f=n.f&Ft|t}function Hr(n){return nt().get(n)}function Yr(n,t){return nt().set(n,t),t}function nt(n){return o===null&&It(),o.c??(o.c=new Map(Lt(o)||void 0))}function Lt(n){let t=n.p;for(;t!==null;){const r=t.c;if(r!==null)return r;t=t.p}return null}function jr(n,t=1){var r=+Xn(n);return In(n,r+t),r}function Br(n,t=!1,r){o={p:o,c:null,e:null,m:!1,s:n,x:null,l:null},Q&&!t&&(o.l={s:null,u:null,r1:[],r2:ln(!1)})}function Ur(n){const t=o;if(t!==null){const l=t.e;if(l!==null){var r=u,e=i;t.e=null;try{for(var a=0;a<l.length;a++){var s=l[a];z(s.effect),Z(s.reaction),Fn(s.fn)}}finally{z(r),Z(e)}}o=t.p,t.m=!0}return{}}function Vr(n){if(!(typeof n!="object"||!n||n instanceof EventTarget)){if(hn in n)an(n);else if(!Array.isArray(n))for(let t in n){const r=n[t];typeof r=="object"&&r&&hn in r&&an(r)}}}function an(n,t=new Set){if(typeof n=="object"&&n!==null&&!(n instanceof EventTarget)&&!t.has(n)){t.add(n),n instanceof Date&&n.getTime();for(let e in n)try{an(n[e],t)}catch{}const r=rt(n);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=tt(r);for(let a in e){const s=e[a].get;if(s)try{s.call(n)}catch{}}}}}export{wn as $,At as A,F as B,ar as C,tn as D,rr as E,dt as F,i as G,ht as H,N as I,sr as J,ct as K,ln as L,lr as M,S as N,Vt as O,st as P,at as Q,pt as R,mr as S,Sn as T,Dn as U,zt as V,Dr as W,o as X,Sr as Y,Rr as Z,Pt as _,Ur as a,Xn as a0,Gt as a1,Vr as a2,yt as a3,Xt as a4,Or as a5,Cr as a6,yr as a7,tr as a8,In as a9,z as aA,Q as aB,or as aC,fr as aD,ir as aE,xn as aF,Ut as aG,ur as aH,_r as aI,It as aJ,Yr as aK,Hr as aL,Z as aM,Ir as aN,cr as aO,vr as aP,_n as aQ,nr as aa,Et as ab,$t as ac,Wn as ad,Yt as ae,Mr as af,kr as ag,rt as ah,Lr as ai,tt as aj,Zt as ak,hn as al,jt as am,Bt as an,Qt as ao,pn as ap,pr as aq,Wt as ar,Tn as as,Fn as at,on as au,Jt as av,Kt as aw,jr as ax,g as ay,J as az,M as b,Tr as c,nn as d,dr as e,gr as f,Tt as g,I as h,Mt as i,Ht as j,wr as k,hr as l,w as m,Pr as n,br as o,Br as p,qr as q,Er as r,Ar as s,Nr as t,Fr as u,u as v,vt as w,er as x,jn as y,xr as z};
