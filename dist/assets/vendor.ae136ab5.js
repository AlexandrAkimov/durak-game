function t(){}const n=t=>t;function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function s(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function u(n,e,o){n.$$.on_destroy.push(function(n,...e){if(null==n)return t;const o=n.subscribe(...e);return o.unsubscribe?()=>o.unsubscribe():o}(e,o))}function i(t,n,e,o){if(t){const r=a(t,n,e,o);return t[0](r)}}function a(t,n,e,o){return t[1]&&o?function(t,n){for(const e in n)t[e]=n[e];return t}(e.ctx.slice(),t[1](o(n))):e.ctx}function l(t,n,e,o,r,s,c){const u=function(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(void 0===n.dirty)return r;if("object"==typeof r){const t=[],e=Math.max(n.dirty.length,r.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o];return t}return n.dirty|r}return n.dirty}(n,o,r,s);if(u){const r=a(n,e,o,c);t.p(r,u)}}const f="undefined"!=typeof window;let d=f?()=>window.performance.now():()=>Date.now(),h=f?t=>requestAnimationFrame(t):t;const p=new Set;function $(t){p.forEach((n=>{n.c(t)||(p.delete(n),n.f())})),0!==p.size&&h($)}function m(t,n){t.appendChild(n)}function g(t,n,e){t.insertBefore(n,e||null)}function b(t){t.parentNode.removeChild(t)}function y(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function _(t){return document.createElement(t)}function x(t){return document.createTextNode(t)}function v(){return x(" ")}function w(){return x("")}function E(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function k(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function A(t){return Array.from(t.childNodes)}function C(t,n,e,o){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===n){let n=0;const s=[];for(;n<o.attributes.length;){const t=o.attributes[n++];e[t.name]||s.push(t.name)}for(let t=0;t<s.length;t++)o.removeAttribute(s[t]);return t.splice(r,1)[0]}}return o?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(n):_(n)}function S(t,n){for(let e=0;e<t.length;e+=1){const o=t[e];if(3===o.nodeType)return o.data=""+n,t.splice(e,1)[0]}return x(n)}function j(t){return S(t," ")}function N(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function O(t,n,e){t.classList[e?"add":"remove"](n)}function z(t,n){const e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,n),e}const L=new Set;let M,R=0;function q(t,n,e,o,r,s,c,u=0){const i=16.666/o;let a="{\n";for(let m=0;m<=1;m+=i){const t=n+(e-n)*s(m);a+=100*m+`%{${c(t,1-t)}}\n`}const l=a+`100% {${c(e,1-e)}}\n}`,f=`__svelte_${function(t){let n=5381,e=t.length;for(;e--;)n=(n<<5)-n^t.charCodeAt(e);return n>>>0}(l)}_${u}`,d=t.ownerDocument;L.add(d);const h=d.__svelte_stylesheet||(d.__svelte_stylesheet=d.head.appendChild(_("style")).sheet),p=d.__svelte_rules||(d.__svelte_rules={});p[f]||(p[f]=!0,h.insertRule(`@keyframes ${f} ${l}`,h.cssRules.length));const $=t.style.animation||"";return t.style.animation=`${$?`${$}, `:""}${f} ${o}ms linear ${r}ms 1 both`,R+=1,f}function D(t,n){const e=(t.style.animation||"").split(", "),o=e.filter(n?t=>t.indexOf(n)<0:t=>-1===t.indexOf("__svelte")),r=e.length-o.length;r&&(t.style.animation=o.join(", "),R-=r,R||h((()=>{R||(L.forEach((t=>{const n=t.__svelte_stylesheet;let e=n.cssRules.length;for(;e--;)n.deleteRule(e);t.__svelte_rules={}})),L.clear())})))}function F(t){M=t}function P(){if(!M)throw new Error("Function called outside component initialization");return M}function T(){const t=P();return(n,e)=>{const o=t.$$.callbacks[n];if(o){const r=z(n,e);o.slice().forEach((n=>{n.call(t,r)}))}}}function B(t,n){P().$$.context.set(t,n)}function G(t){return P().$$.context.get(t)}const H=[],I=[],J=[],K=[],Q=Promise.resolve();let U=!1;function V(t){J.push(t)}function W(t){K.push(t)}let X=!1;const Y=new Set;function Z(){if(!X){X=!0;do{for(let t=0;t<H.length;t+=1){const n=H[t];F(n),tt(n.$$)}for(F(null),H.length=0;I.length;)I.pop()();for(let t=0;t<J.length;t+=1){const n=J[t];Y.has(n)||(Y.add(n),n())}J.length=0}while(H.length);for(;K.length;)K.pop()();U=!1,X=!1,Y.clear()}}function tt(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(V)}}let nt;function et(t,n,e){t.dispatchEvent(z(`${n?"intro":"outro"}${e}`))}const ot=new Set;let rt;function st(){rt={r:0,c:[],p:rt}}function ct(){rt.r||r(rt.c),rt=rt.p}function ut(t,n){t&&t.i&&(ot.delete(t),t.i(n))}function it(t,n,e,o){if(t&&t.o){if(ot.has(t))return;ot.add(t),rt.c.push((()=>{ot.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}const at={duration:0};function lt(e,o,c,u){let i=o(e,c),a=u?0:1,l=null,f=null,m=null;function g(){m&&D(e,m)}function b(t,n){const e=t.b-a;return n*=Math.abs(e),{a:a,b:t.b,d:e,duration:n,start:t.start,end:t.start+n,group:t.group}}function y(o){const{delay:s=0,duration:c=300,easing:u=n,tick:y=t,css:_}=i||at,x={start:d()+s,b:o};o||(x.group=rt,rt.r+=1),l||f?f=x:(_&&(g(),m=q(e,a,o,c,s,u,_)),o&&y(0,1),l=b(x,c),V((()=>et(e,o,"start"))),function(t){let n;0===p.size&&h($),new Promise((e=>{p.add(n={c:t,f:e})}))}((t=>{if(f&&t>f.start&&(l=b(f,c),f=null,et(e,l.b,"start"),_&&(g(),m=q(e,a,l.b,l.duration,0,u,i.css))),l)if(t>=l.end)y(a=l.b,1-a),et(e,l.b,"end"),f||(l.b?g():--l.group.r||r(l.group.c)),l=null;else if(t>=l.start){const n=t-l.start;a=l.a+l.d*u(n/l.duration),y(a,1-a)}return!(!l&&!f)})))}return{run(t){s(i)?(nt||(nt=Promise.resolve(),nt.then((()=>{nt=null}))),nt).then((()=>{i=i(),y(t)})):y(t)},end(){g(),l=f=null}}}function ft(t,n,e){const o=t.$$.props[n];void 0!==o&&(t.$$.bound[o]=e,e(t.$$.ctx[o]))}function dt(t){t&&t.c()}function ht(t,n){t&&t.l(n)}function pt(t,n,o,c){const{fragment:u,on_mount:i,on_destroy:a,after_update:l}=t.$$;u&&u.m(n,o),c||V((()=>{const n=i.map(e).filter(s);a?a.push(...n):r(n),t.$$.on_mount=[]})),l.forEach(V)}function $t(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function mt(t,n){-1===t.$$.dirty[0]&&(H.push(t),U||(U=!0,Q.then(Z)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function gt(n,e,s,c,u,i,a=[-1]){const l=M;F(n);const f=n.$$={fragment:null,ctx:null,props:i,update:t,not_equal:u,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(l?l.$$.context:[]),callbacks:o(),dirty:a,skip_bound:!1};let d=!1;if(f.ctx=s?s(n,e.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return f.ctx&&u(f.ctx[t],f.ctx[t]=r)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](r),d&&mt(n,t)),e})):[],f.update(),d=!0,r(f.before_update),f.fragment=!!c&&c(f.ctx),e.target){if(e.hydrate){const t=A(e.target);f.fragment&&f.fragment.l(t),t.forEach(b)}else f.fragment&&f.fragment.c();e.intro&&ut(n.$$.fragment),pt(n,e.target,e.anchor,e.customElement),Z()}F(l)}class bt{$destroy(){$t(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const yt=[];function _t(n,e=t){let o;const r=[];function s(t){if(c(n,t)&&(n=t,o)){const t=!yt.length;for(let e=0;e<r.length;e+=1){const t=r[e];t[1](),yt.push(t,n)}if(t){for(let t=0;t<yt.length;t+=2)yt[t][0](yt[t+1]);yt.length=0}}}return{set:s,update:function(t){s(t(n))},subscribe:function(c,u=t){const i=[c,u];return r.push(i),1===r.length&&(o=e(s)||t),c(n),()=>{const t=r.indexOf(i);-1!==t&&r.splice(t,1),0===r.length&&(o(),o=null)}}}}function xt(t){const n=t-1;return n*n*n+1}function vt(t,{delay:n=0,duration:e=400,easing:o=xt,x:r=0,y:s=0,opacity:c=0}={}){const u=getComputedStyle(t),i=+u.opacity,a="none"===u.transform?"":u.transform,l=i*(1-c);return{delay:n,duration:e,easing:o,css:(t,n)=>`\n\t\t\ttransform: ${a} translate(${(1-t)*r}px, ${(1-t)*s}px);\n\t\t\topacity: ${i-l*n}`}}export{V as A,lt as B,it as C,vt as D,dt as E,ht as F,pt as G,$t as H,ct as I,B as J,I as K,ft as L,W as M,st as N,bt as S,k as a,g as b,C as c,b as d,_ as e,A as f,m as g,y as h,gt as i,T as j,v as k,j as l,E as m,t as n,S as o,N as p,G as q,w as r,c as s,x as t,u,O as v,_t as w,i as x,l as y,ut as z};
