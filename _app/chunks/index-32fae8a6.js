function N(){}function H(t,n){for(const e in n)t[e]=n[e];return t}function P(t){return t()}function M(){return Object.create(null)}function p(t){t.forEach(P)}function I(t){return typeof t=="function"}function lt(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function W(t){return Object.keys(t).length===0}function G(t,...n){if(t==null)return N;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function ut(t,n,e){t.$$.on_destroy.push(G(n,e))}function at(t,n,e,i){if(t){const c=T(t,n,e,i);return t[0](c)}}function T(t,n,e,i){return t[1]&&i?H(e.ctx.slice(),t[1](i(n))):e.ctx}function ft(t,n,e,i){if(t[2]&&i){const c=t[2](i(e));if(n.dirty===void 0)return c;if(typeof c=="object"){const u=[],s=Math.max(n.dirty.length,c.length);for(let o=0;o<s;o+=1)u[o]=n.dirty[o]|c[o];return u}return n.dirty|c}return n.dirty}function _t(t,n,e,i,c,u){if(c){const s=T(n,e,i,u);t.p(s,c)}}function dt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function ht(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function mt(t,n){const e={};n=new Set(n);for(const i in t)!n.has(i)&&i[0]!=="$"&&(e[i]=t[i]);return e}function pt(t){const n={};for(const e in t)n[e]=!0;return n}let v=!1;function J(){v=!0}function K(){v=!1}function Q(t,n,e,i){for(;t<n;){const c=t+(n-t>>1);e(c)<=i?t=c+1:n=c}return t}function R(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const r=[];for(let l=0;l<n.length;l++){const f=n[l];f.claim_order!==void 0&&r.push(f)}n=r}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let c=0;for(let r=0;r<n.length;r++){const l=n[r].claim_order,f=(c>0&&n[e[c]].claim_order<=l?c+1:Q(1,c,g=>n[e[g]].claim_order,l))-1;i[r]=e[f]+1;const a=f+1;e[a]=r,c=Math.max(a,c)}const u=[],s=[];let o=n.length-1;for(let r=e[c]+1;r!=0;r=i[r-1]){for(u.push(n[r-1]);o>=r;o--)s.push(n[o]);o--}for(;o>=0;o--)s.push(n[o]);u.reverse(),s.sort((r,l)=>r.claim_order-l.claim_order);for(let r=0,l=0;r<s.length;r++){for(;l<u.length&&s[r].claim_order>=u[l].claim_order;)l++;const f=l<u.length?u[l]:null;t.insertBefore(s[r],f)}}function U(t,n){if(v){for(R(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function yt(t,n,e){v&&!e?U(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function V(t){t.parentNode.removeChild(t)}function gt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function X(t){return document.createElement(t)}function Y(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function S(t){return document.createTextNode(t)}function xt(){return S(" ")}function bt(){return S("")}function $t(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function vt(t){return function(n){return n.stopPropagation(),t.call(this,n)}}function L(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function wt(t,n){const e=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in n)n[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=n[i]:i==="__value"?t.value=t[i]=n[i]:e[i]&&e[i].set?t[i]=n[i]:L(t,i,n[i])}function Et(t,n){for(const e in n)L(t,e,n[e])}function Z(t){return Array.from(t.childNodes)}function tt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function B(t,n,e,i,c=!1){tt(t);const u=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const o=t[s];if(n(o)){const r=e(o);return r===void 0?t.splice(s,1):t[s]=r,c||(t.claim_info.last_index=s),o}}for(let s=t.claim_info.last_index-1;s>=0;s--){const o=t[s];if(n(o)){const r=e(o);return r===void 0?t.splice(s,1):t[s]=r,c?r===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,o}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function D(t,n,e,i){return B(t,c=>c.nodeName===n,c=>{const u=[];for(let s=0;s<c.attributes.length;s++){const o=c.attributes[s];e[o.name]||u.push(o.name)}u.forEach(s=>c.removeAttribute(s))},()=>i(n))}function kt(t,n,e){return D(t,n,e,X)}function jt(t,n,e){return D(t,n,e,Y)}function nt(t,n){return B(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>S(n),!0)}function Nt(t){return nt(t," ")}function St(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function At(t,n){t.value=n==null?"":n}function Ct(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function Mt(t,n,e){t.classList[e?"add":"remove"](n)}function et(t,n,e=!1){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,e,!1,n),i}let m;function h(t){m=t}function y(){if(!m)throw new Error("Function called outside component initialization");return m}function Ot(t){y().$$.on_mount.push(t)}function Pt(t){y().$$.after_update.push(t)}function Tt(){const t=y();return(n,e)=>{const i=t.$$.callbacks[n];if(i){const c=et(n,e);i.slice().forEach(u=>{u.call(t,c)})}}}function Lt(t,n){y().$$.context.set(t,n)}function Bt(t){return y().$$.context.get(t)}function Dt(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(i=>i.call(this,n))}const d=[],O=[],b=[],E=[],q=Promise.resolve();let k=!1;function z(){k||(k=!0,q.then(F))}function qt(){return z(),q}function j(t){b.push(t)}function zt(t){E.push(t)}const w=new Set;let x=0;function F(){const t=m;do{for(;x<d.length;){const n=d[x];x++,h(n),it(n.$$)}for(h(null),d.length=0,x=0;O.length;)O.pop()();for(let n=0;n<b.length;n+=1){const e=b[n];w.has(e)||(w.add(e),e())}b.length=0}while(d.length);for(;E.length;)E.pop()();k=!1,w.clear(),h(t)}function it(t){if(t.fragment!==null){t.update(),p(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(j)}}const $=new Set;let _;function Ft(){_={r:0,c:[],p:_}}function Ht(){_.r||p(_.c),_=_.p}function ct(t,n){t&&t.i&&($.delete(t),t.i(n))}function It(t,n,e,i){if(t&&t.o){if($.has(t))return;$.add(t),_.c.push(()=>{$.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}}function Wt(t,n){const e={},i={},c={$$scope:1};let u=t.length;for(;u--;){const s=t[u],o=n[u];if(o){for(const r in s)r in o||(i[r]=1);for(const r in o)c[r]||(e[r]=o[r],c[r]=1);t[u]=o}else for(const r in s)c[r]=1}for(const s in i)s in e||(e[s]=void 0);return e}function Gt(t){return typeof t=="object"&&t!==null?t:{}}function Jt(t,n,e){const i=t.$$.props[n];i!==void 0&&(t.$$.bound[i]=e,e(t.$$.ctx[i]))}function Kt(t){t&&t.c()}function Qt(t,n){t&&t.l(n)}function rt(t,n,e,i){const{fragment:c,on_mount:u,on_destroy:s,after_update:o}=t.$$;c&&c.m(n,e),i||j(()=>{const r=u.map(P).filter(I);s?s.push(...r):p(r),t.$$.on_mount=[]}),o.forEach(j)}function st(t,n){const e=t.$$;e.fragment!==null&&(p(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ot(t,n){t.$$.dirty[0]===-1&&(d.push(t),z(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Rt(t,n,e,i,c,u,s,o=[-1]){const r=m;h(t);const l=t.$$={fragment:null,ctx:null,props:u,update:N,not_equal:c,bound:M(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(r?r.$$.context:[])),callbacks:M(),dirty:o,skip_bound:!1,root:n.target||r.$$.root};s&&s(l.root);let f=!1;if(l.ctx=e?e(t,n.props||{},(a,g,...A)=>{const C=A.length?A[0]:g;return l.ctx&&c(l.ctx[a],l.ctx[a]=C)&&(!l.skip_bound&&l.bound[a]&&l.bound[a](C),f&&ot(t,a)),g}):[],l.update(),f=!0,p(l.before_update),l.fragment=i?i(l.ctx):!1,n.target){if(n.hydrate){J();const a=Z(n.target);l.fragment&&l.fragment.l(a),a.forEach(V)}else l.fragment&&l.fragment.c();n.intro&&ct(t.$$.fragment),rt(t,n.target,n.anchor,n.customElement),K(),F()}h(r)}class Ut{$destroy(){st(this,1),this.$destroy=N}$on(n,e){const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const c=i.indexOf(e);c!==-1&&i.splice(c,1)}}$set(n){this.$$set&&!W(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{vt as $,Gt as A,st as B,H as C,qt as D,N as E,mt as F,ht as G,at as H,wt as I,_t as J,dt as K,ft as L,U as M,Y as N,jt as O,Et as P,Mt as Q,At as R,Ut as S,$t as T,p as U,pt as V,Bt as W,Tt as X,Dt as Y,O as Z,ut as _,Z as a,Jt as a0,zt as a1,gt as a2,L as b,kt as c,V as d,X as e,Ct as f,yt as g,nt as h,Rt as i,St as j,xt as k,bt as l,Nt as m,Ft as n,It as o,Ht as p,ct as q,Lt as r,lt as s,S as t,Pt as u,Ot as v,Kt as w,Qt as x,rt as y,Wt as z};