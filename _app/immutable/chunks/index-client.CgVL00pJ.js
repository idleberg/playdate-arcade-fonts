import{al as x,am as ae,an as ie,L as P,ao as se,a9 as y,ap as I,aq as h,a0 as w,v as F,ar as fe,ah as ue,i as V,g as X,n as j,o as B,q as K,h as D,e as Q,as as W,H as le,k as ce,b as oe,l as H,m as k,at as de,au as ve,_ as L,u as _e,av as he,aw as pe,ax as U,ay as be,az as we,aA as $,aB as ee,aC as Pe,aD as ye,ac as re,a3 as G,ag as ge,aE as ne,aF as me,aG as T,aH as Ee,aI as Re,K as xe,X as N,aJ as te,Z as Ie}from"./runtime.BtKSATmf.js";import{u as Oe}from"./disclose-version.wztzmCI_.js";function R(e,r=null,a){if(typeof e!="object"||e===null||x in e)return e;const i=ue(e);if(i!==ae&&i!==ie)return e;var n=new Map,f=V(e),_=P(0);f&&n.set("length",P(e.length));var d;return new Proxy(e,{defineProperty(l,t,s){(!("value"in s)||s.configurable===!1||s.enumerable===!1||s.writable===!1)&&se();var u=n.get(t);return u===void 0?(u=P(s.value),n.set(t,u)):y(u,R(s.value,d)),!0},deleteProperty(l,t){var s=n.get(t);if(s===void 0)t in l&&n.set(t,P(h));else{if(f&&typeof t=="string"){var u=n.get("length"),c=Number(t);Number.isInteger(c)&&c<u.v&&y(u,c)}y(s,h),Z(_)}return!0},get(l,t,s){var p;if(t===x)return e;var u=n.get(t),c=t in l;if(u===void 0&&(!c||(p=I(l,t))!=null&&p.writable)&&(u=P(R(c?l[t]:h,d)),n.set(t,u)),u!==void 0){var o=w(u);return o===h?void 0:o}return Reflect.get(l,t,s)},getOwnPropertyDescriptor(l,t){var s=Reflect.getOwnPropertyDescriptor(l,t);if(s&&"value"in s){var u=n.get(t);u&&(s.value=w(u))}else if(s===void 0){var c=n.get(t),o=c==null?void 0:c.v;if(c!==void 0&&o!==h)return{enumerable:!0,configurable:!0,value:o,writable:!0}}return s},has(l,t){var o;if(t===x)return!0;var s=n.get(t),u=s!==void 0&&s.v!==h||Reflect.has(l,t);if(s!==void 0||F!==null&&(!u||(o=I(l,t))!=null&&o.writable)){s===void 0&&(s=P(u?R(l[t],d):h),n.set(t,s));var c=w(s);if(c===h)return!1}return u},set(l,t,s,u){var m;var c=n.get(t),o=t in l;if(f&&t==="length")for(var p=s;p<c.v;p+=1){var g=n.get(p+"");g!==void 0?y(g,h):p in l&&(g=P(h),n.set(p+"",g))}c===void 0?(!o||(m=I(l,t))!=null&&m.writable)&&(c=P(void 0),y(c,R(s,d)),n.set(t,c)):(o=c.v!==h,y(c,R(s,d)));var b=Reflect.getOwnPropertyDescriptor(l,t);if(b!=null&&b.set&&b.set.call(u,s),!o){if(f&&typeof t=="string"){var O=n.get("length"),S=Number(t);Number.isInteger(S)&&S>=O.v&&y(O,S+1)}Z(_)}return!0},ownKeys(l){w(_);var t=Reflect.ownKeys(l).filter(c=>{var o=n.get(c);return o===void 0||o.v!==h});for(var[s,u]of n)u.v!==h&&!(s in l)&&t.push(s);return t},setPrototypeOf(){fe()}})}function Z(e,r=1){y(e,e.v+r)}function Ce(e,r,a,i=null,n=!1){D&&Q();var f=e,_=null,d=null,l=null,t=n?W:0;X(()=>{if(l===(l=!!r()))return;let s=!1;if(D){const u=f.data===le;l===u&&(f=ce(),oe(f),H(!1),s=!0)}l?(_?j(_):_=B(()=>a(f)),d&&K(d,()=>{d=null})):(d?j(d):i&&(d=B(()=>i(f))),_&&K(_,()=>{_=null})),s&&H(!0)},t),D&&(f=k)}function Fe(e,r,a){D&&Q();var i=e,n,f;X(()=>{n!==(n=r())&&(f&&(K(f),f=null),n&&(f=B(()=>a(i,n))))},W),D&&(i=k)}function z(e,r){return e===r||(e==null?void 0:e[x])===r}function Be(e={},r,a,i){return de(()=>{var n,f;return ve(()=>{n=f,f=[],L(()=>{e!==a(...f)&&(r(e,...f),n&&z(a(...n),e)&&r(null,...n))})}),()=>{_e(()=>{f&&z(a(...f),e)&&r(null,...f)})}}),e}const Se={get(e,r){if(!e.exclude.includes(r))return w(e.version),r in e.special?e.special[r]():e.props[r]},set(e,r,a){return r in e.special||(e.special[r]=Te({get[r](){return e.props[r]}},r,ne)),e.special[r](a),U(e.version),!0},getOwnPropertyDescriptor(e,r){if(!e.exclude.includes(r)&&r in e.props)return{enumerable:!0,configurable:!0,value:e.props[r]}},deleteProperty(e,r){return e.exclude.includes(r)||(e.exclude.push(r),U(e.version)),!0},has(e,r){return e.exclude.includes(r)?!1:r in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(r=>!e.exclude.includes(r))}};function Ke(e,r){return new Proxy({props:e,exclude:r,special:{},version:P(0)},Se)}const Ae={get(e,r){let a=e.props.length;for(;a--;){let i=e.props[a];if(T(i)&&(i=i()),typeof i=="object"&&i!==null&&r in i)return i[r]}},set(e,r,a){let i=e.props.length;for(;i--;){let n=e.props[i];T(n)&&(n=n());const f=I(n,r);if(f&&f.set)return f.set(a),!0}return!1},getOwnPropertyDescriptor(e,r){let a=e.props.length;for(;a--;){let i=e.props[a];if(T(i)&&(i=i()),typeof i=="object"&&i!==null&&r in i){const n=I(i,r);return n&&!n.configurable&&(n.configurable=!0),n}}},has(e,r){if(r===x||r===re)return!1;for(let a of e.props)if(T(a)&&(a=a()),a!=null&&r in a)return!0;return!1},ownKeys(e){const r=[];for(let a of e.props){T(a)&&(a=a());for(const i in a)r.includes(i)||r.push(i)}return r}};function Me(...e){return new Proxy({props:e},Ae)}function J(e){for(var r=F,a=F;r!==null&&!(r.f&(be|we));)r=r.parent;try{return $(r),e()}finally{$(a)}}function Te(e,r,a,i){var Y;var n=(a&Ee)!==0,f=!ee||(a&Pe)!==0,_=(a&ye)!==0,d=(a&Re)!==0,l=!1,t;_?[t,l]=Oe(()=>e[r]):t=e[r];var s=x in e||re in e,u=((Y=I(e,r))==null?void 0:Y.set)??(s&&_&&r in e?v=>e[r]=v:void 0),c=i,o=!0,p=!1,g=()=>(p=!0,o&&(o=!1,d?c=L(i):c=i),c);t===void 0&&i!==void 0&&(u&&f&&he(),t=g(),u&&u(t));var b;if(f)b=()=>{var v=e[r];return v===void 0?g():(o=!0,p=!1,v)};else{var O=J(()=>(n?G:ge)(()=>e[r]));O.f|=pe,b=()=>{var v=w(O);return v!==void 0&&(c=void 0),v===void 0?c:v}}if(!(a&ne))return b;if(u){var S=e.$$legacy;return function(v,E){return arguments.length>0?((!f||!E||S||l)&&u(E?b():v),v):b()}}var m=!1,M=!1,q=xe(t),A=J(()=>G(()=>{var v=b(),E=w(q);return m?(m=!1,M=!0,E):(M=!1,q.v=v)}));return n||(A.equals=me),function(v,E){if(arguments.length>0){const C=E?w(A):f&&_?R(v):v;return A.equals(C)||(m=!0,y(q,C),p&&c!==void 0&&(c=C),L(()=>w(A))),v}return w(A)}}function Ye(e){N===null&&te(),ee&&N.l!==null?Ne(N).m.push(e):Ie(()=>{const r=L(e);if(typeof r=="function")return r})}function De(e,r,{bubbles:a=!1,cancelable:i=!1}={}){return new CustomEvent(e,{detail:r,bubbles:a,cancelable:i})}function je(){const e=N;return e===null&&te(),(r,a,i)=>{var f;const n=(f=e.s.$$events)==null?void 0:f[r];if(n){const _=V(n)?n.slice():[n],d=De(r,a,i);for(const l of _)l.call(e.x,d);return!d.defaultPrevented}return!0}}function Ne(e){var r=e.l;return r.u??(r.u={a:[],b:[],m:[]})}export{R as a,Be as b,Fe as c,je as d,Ce as i,Ke as l,Ye as o,Te as p,Me as s};
