(function(){"use strict";var U,h,ae,$,ie,le,se,Y,H,N,ce,q,G,V,M={},A=[],ze=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,I=Array.isArray;function S(e,t){for(var n in t)e[n]=t[n];return e}function X(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function pe(e,t,n){var o,a,r,l={};for(r in t)r=="key"?o=t[r]:r=="ref"?a=t[r]:l[r]=t[r];if(arguments.length>2&&(l.children=arguments.length>3?U.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(r in e.defaultProps)l[r]===void 0&&(l[r]=e.defaultProps[r]);return D(e,l,o,a,null)}function D(e,t,n,o,a){var r={type:e,props:t,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:a??++ae,__i:-1,__u:0};return a==null&&h.vnode!=null&&h.vnode(r),r}function F(e){return e.children}function z(e,t){this.props=e,this.context=t}function T(e,t){if(t==null)return e.__?T(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?T(e):null}function Re(e){if(e.__P&&e.__d){var t=e.__v,n=t.__e,o=[],a=[],r=S({},t);r.__v=t.__v+1,h.vnode&&h.vnode(r),K(e.__P,r,t,e.__n,e.__P.namespaceURI,32&t.__u?[n]:null,o,n??T(t),!!(32&t.__u),a),r.__v=t.__v,r.__.__k[r.__i]=r,ve(o,r,a),t.__e=t.__=null,r.__e!=n&&fe(r)}}function fe(e){if((e=e.__)!=null&&e.__c!=null)return e.__e=e.__c.base=null,e.__k.some(function(t){if(t!=null&&t.__e!=null)return e.__e=e.__c.base=t.__e}),fe(e)}function ue(e){(!e.__d&&(e.__d=!0)&&$.push(e)&&!R.__r++||ie!=h.debounceRendering)&&((ie=h.debounceRendering)||le)(R)}function R(){try{for(var e,t=1;$.length;)$.length>t&&$.sort(se),e=$.shift(),t=$.length,Re(e)}finally{$.length=R.__r=0}}function de(e,t,n,o,a,r,l,s,c,i,f){var _,u,p,b,w,y,m,d=o&&o.__k||A,P=t.length;for(c=We(n,t,d,c,P),_=0;_<P;_++)(p=n.__k[_])!=null&&(u=p.__i!=-1&&d[p.__i]||M,p.__i=_,y=K(e,p,u,a,r,l,s,c,i,f),b=p.__e,p.ref&&u.ref!=p.ref&&(u.ref&&Q(u.ref,null,p),f.push(p.ref,p.__c||b,p)),w==null&&b!=null&&(w=b),(m=!!(4&p.__u))||u.__k===p.__k?(c=he(p,c,e,m),m&&u.__e&&(u.__e=null)):typeof p.type=="function"&&y!==void 0?c=y:b&&(c=b.nextSibling),p.__u&=-7);return n.__e=w,c}function We(e,t,n,o,a){var r,l,s,c,i,f=n.length,_=f,u=0;for(e.__k=new Array(a),r=0;r<a;r++)(l=t[r])!=null&&typeof l!="boolean"&&typeof l!="function"?(typeof l=="string"||typeof l=="number"||typeof l=="bigint"||l.constructor==String?l=e.__k[r]=D(null,l,null,null,null):I(l)?l=e.__k[r]=D(F,{children:l},null,null,null):l.constructor===void 0&&l.__b>0?l=e.__k[r]=D(l.type,l.props,l.key,l.ref?l.ref:null,l.__v):e.__k[r]=l,c=r+u,l.__=e,l.__b=e.__b+1,s=null,(i=l.__i=Be(l,n,c,_))!=-1&&(_--,(s=n[i])&&(s.__u|=2)),s==null||s.__v==null?(i==-1&&(a>f?u--:a<f&&u++),typeof l.type!="function"&&(l.__u|=4)):i!=c&&(i==c-1?u--:i==c+1?u++:(i>c?u--:u++,l.__u|=4))):e.__k[r]=null;if(_)for(r=0;r<f;r++)(s=n[r])!=null&&!(2&s.__u)&&(s.__e==o&&(o=T(s)),ye(s,s));return o}function he(e,t,n,o){var a,r;if(typeof e.type=="function"){for(a=e.__k,r=0;a&&r<a.length;r++)a[r]&&(a[r].__=e,t=he(a[r],t,n,o));return t}e.__e!=t&&(o&&(t&&e.type&&!t.parentNode&&(t=T(e)),n.insertBefore(e.__e,t||null)),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function Be(e,t,n,o){var a,r,l,s=e.key,c=e.type,i=t[n],f=i!=null&&(2&i.__u)==0;if(i===null&&s==null||f&&s==i.key&&c==i.type)return n;if(o>(f?1:0)){for(a=n-1,r=n+1;a>=0||r<t.length;)if((i=t[l=a>=0?a--:r++])!=null&&!(2&i.__u)&&s==i.key&&c==i.type)return l}return-1}function me(e,t,n){t[0]=="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||ze.test(t)?n:n+"px"}function W(e,t,n,o,a){var r,l;e:if(t=="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof o=="string"&&(e.style.cssText=o=""),o)for(t in o)n&&t in n||me(e.style,t,"");if(n)for(t in n)o&&n[t]==o[t]||me(e.style,t,n[t])}else if(t[0]=="o"&&t[1]=="n")r=t!=(t=t.replace(ce,"$1")),l=t.toLowerCase(),t=l in e||t=="onFocusOut"||t=="onFocusIn"?l.slice(2):t.slice(2),e.l||(e.l={}),e.l[t+r]=n,n?o?n[N]=o[N]:(n[N]=q,e.addEventListener(t,r?V:G,r)):e.removeEventListener(t,r?V:G,r);else{if(a=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&n==1?"":n))}}function ge(e){return function(t){if(this.l){var n=this.l[t.type+e];if(t[H]==null)t[H]=q++;else if(t[H]<n[N])return;return n(h.event?h.event(t):t)}}}function K(e,t,n,o,a,r,l,s,c,i){var f,_,u,p,b,w,y,m,d,P,E,L,Fe,j,oe,k=t.type;if(t.constructor!==void 0)return null;128&n.__u&&(c=!!(32&n.__u),r=[s=t.__e=n.__e]),(f=h.__b)&&f(t);e:if(typeof k=="function")try{if(m=t.props,d=k.prototype&&k.prototype.render,P=(f=k.contextType)&&o[f.__c],E=f?P?P.props.value:f.__:o,n.__c?y=(_=t.__c=n.__c).__=_.__E:(d?t.__c=_=new k(m,E):(t.__c=_=new z(m,E),_.constructor=k,_.render=je),P&&P.sub(_),_.state||(_.state={}),_.__n=o,u=_.__d=!0,_.__h=[],_._sb=[]),d&&_.__s==null&&(_.__s=_.state),d&&k.getDerivedStateFromProps!=null&&(_.__s==_.state&&(_.__s=S({},_.__s)),S(_.__s,k.getDerivedStateFromProps(m,_.__s))),p=_.props,b=_.state,_.__v=t,u)d&&k.getDerivedStateFromProps==null&&_.componentWillMount!=null&&_.componentWillMount(),d&&_.componentDidMount!=null&&_.__h.push(_.componentDidMount);else{if(d&&k.getDerivedStateFromProps==null&&m!==p&&_.componentWillReceiveProps!=null&&_.componentWillReceiveProps(m,E),t.__v==n.__v||!_.__e&&_.shouldComponentUpdate!=null&&_.shouldComponentUpdate(m,_.__s,E)===!1){t.__v!=n.__v&&(_.props=m,_.state=_.__s,_.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.some(function(C){C&&(C.__=t)}),A.push.apply(_.__h,_._sb),_._sb=[],_.__h.length&&l.push(_);break e}_.componentWillUpdate!=null&&_.componentWillUpdate(m,_.__s,E),d&&_.componentDidUpdate!=null&&_.__h.push(function(){_.componentDidUpdate(p,b,w)})}if(_.context=E,_.props=m,_.__P=e,_.__e=!1,L=h.__r,Fe=0,d)_.state=_.__s,_.__d=!1,L&&L(t),f=_.render(_.props,_.state,_.context),A.push.apply(_.__h,_._sb),_._sb=[];else do _.__d=!1,L&&L(t),f=_.render(_.props,_.state,_.context),_.state=_.__s;while(_.__d&&++Fe<25);_.state=_.__s,_.getChildContext!=null&&(o=S(S({},o),_.getChildContext())),d&&!u&&_.getSnapshotBeforeUpdate!=null&&(w=_.getSnapshotBeforeUpdate(p,b)),j=f!=null&&f.type===F&&f.key==null?be(f.props.children):f,s=de(e,I(j)?j:[j],t,n,o,a,r,l,s,c,i),_.base=t.__e,t.__u&=-161,_.__h.length&&l.push(_),y&&(_.__E=_.__=null)}catch(C){if(t.__v=null,c||r!=null)if(C.then){for(t.__u|=c?160:128;s&&s.nodeType==8&&s.nextSibling;)s=s.nextSibling;r[r.indexOf(s)]=null,t.__e=s}else{for(oe=r.length;oe--;)X(r[oe]);J(t)}else t.__e=n.__e,t.__k=n.__k,C.then||J(t);h.__e(C,t,n)}else r==null&&t.__v==n.__v?(t.__k=n.__k,t.__e=n.__e):s=t.__e=Oe(n.__e,t,n,o,a,r,l,c,i);return(f=h.diffed)&&f(t),128&t.__u?void 0:s}function J(e){e&&(e.__c&&(e.__c.__e=!0),e.__k&&e.__k.some(J))}function ve(e,t,n){for(var o=0;o<n.length;o++)Q(n[o],n[++o],n[++o]);h.__c&&h.__c(t,e),e.some(function(a){try{e=a.__h,a.__h=[],e.some(function(r){r.call(a)})}catch(r){h.__e(r,a.__v)}})}function be(e){return typeof e!="object"||e==null||e.__b>0?e:I(e)?e.map(be):e.constructor!==void 0?null:S({},e)}function Oe(e,t,n,o,a,r,l,s,c){var i,f,_,u,p,b,w,y=n.props||M,m=t.props,d=t.type;if(d=="svg"?a="http://www.w3.org/2000/svg":d=="math"?a="http://www.w3.org/1998/Math/MathML":a||(a="http://www.w3.org/1999/xhtml"),r!=null){for(i=0;i<r.length;i++)if((p=r[i])&&"setAttribute"in p==!!d&&(d?p.localName==d:p.nodeType==3)){e=p,r[i]=null;break}}if(e==null){if(d==null)return document.createTextNode(m);e=document.createElementNS(a,d,m.is&&m),s&&(h.__m&&h.__m(t,r),s=!1),r=null}if(d==null)y===m||s&&e.data==m||(e.data=m);else{if(r=d=="textarea"&&m.defaultValue!=null?null:r&&U.call(e.childNodes),!s&&r!=null)for(y={},i=0;i<e.attributes.length;i++)y[(p=e.attributes[i]).name]=p.value;for(i in y)p=y[i],i=="dangerouslySetInnerHTML"?_=p:i=="children"||i in m||i=="value"&&"defaultValue"in m||i=="checked"&&"defaultChecked"in m||W(e,i,null,p,a);for(i in m)p=m[i],i=="children"?u=p:i=="dangerouslySetInnerHTML"?f=p:i=="value"?b=p:i=="checked"?w=p:s&&typeof p!="function"||y[i]===p||W(e,i,p,y[i],a);if(f)s||_&&(f.__html==_.__html||f.__html==e.innerHTML)||(e.innerHTML=f.__html),t.__k=[];else if(_&&(e.innerHTML=""),de(t.type=="template"?e.content:e,I(u)?u:[u],t,n,o,d=="foreignObject"?"http://www.w3.org/1999/xhtml":a,r,l,r?r[0]:n.__k&&T(n,0),s,c),r!=null)for(i=r.length;i--;)X(r[i]);s&&d!="textarea"||(i="value",d=="progress"&&b==null?e.removeAttribute("value"):b!=null&&(b!==e[i]||d=="progress"&&!b||d=="option"&&b!=y[i])&&W(e,i,b,y[i],a),i="checked",w!=null&&w!=e[i]&&W(e,i,w,y[i],a))}return e}function Q(e,t,n){try{if(typeof e=="function"){var o=typeof e.__u=="function";o&&e.__u(),o&&t==null||(e.__u=e(t))}else e.current=t}catch(a){h.__e(a,n)}}function ye(e,t,n){var o,a;if(h.unmount&&h.unmount(e),(o=e.ref)&&(o.current&&o.current!=e.__e||Q(o,null,t)),(o=e.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(r){h.__e(r,t)}o.base=o.__P=null}if(o=e.__k)for(a=0;a<o.length;a++)o[a]&&ye(o[a],t,n||typeof e.type!="function");n||X(e.__e),e.__c=e.__=e.__e=void 0}function je(e,t,n){return this.constructor(e,n)}function Ye(e,t,n){var o,a,r,l;t==document&&(t=document.documentElement),h.__&&h.__(e,t),a=(o=!1)?null:t.__k,r=[],l=[],K(t,e=t.__k=pe(F,null,[e]),a||M,M,t.namespaceURI,a?null:t.firstChild?U.call(t.childNodes):null,r,a?a.__e:t.firstChild,o,l),ve(r,e,l)}U=A.slice,h={__e:function(e,t,n,o){for(var a,r,l;t=t.__;)if((a=t.__c)&&!a.__)try{if((r=a.constructor)&&r.getDerivedStateFromError!=null&&(a.setState(r.getDerivedStateFromError(e)),l=a.__d),a.componentDidCatch!=null&&(a.componentDidCatch(e,o||{}),l=a.__d),l)return a.__E=a}catch(s){e=s}throw e}},ae=0,z.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=S({},this.state),typeof e=="function"&&(e=e(S({},n),this.props)),e&&S(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),ue(this))},z.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),ue(this))},z.prototype.render=F,$=[],le=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,se=function(e,t){return e.__v.__b-t.__v.__b},R.__r=0,Y=Math.random().toString(8),H="__d"+Y,N="__a"+Y,ce=/(PointerCapture)$|Capture$/i,q=0,G=ge(!1),V=ge(!0);function qe(){return!!document.querySelector(".md-content")}function Ge(e){return new URL(e).pathname}const Z="aralxp_progress",xe={xp:0,completed_pages:{}};function Ve(e){return typeof e=="object"&&e!==null&&"xp"in e&&typeof e.xp=="number"&&"completed_pages"in e&&typeof e.completed_pages=="object"}async function Xe(){try{const t=(await chrome.storage.local.get(Z))[Z];return Ve(t)?t:{...xe}}catch{return{...xe}}}async function Ke(e){await chrome.storage.local.set({[Z]:e})}async function Je(e,t){if(e.completed_pages[t])return e;const n={xp:e.xp+50,completed_pages:{...e.completed_pages,[t]:{completed_at:new Date().toISOString(),xp:50}}};return await Ke(n),n}var Qe=0;function x(e,t,n,o,a,r){t||(t={});var l,s,c=t;if("ref"in c)for(s in c={},t)s=="ref"?l=t[s]:c[s]=t[s];var i={type:e,props:c,key:n,ref:l,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--Qe,__i:-1,__u:0,__source:a,__self:r};if(typeof e=="function"&&(l=e.defaultProps))for(s in l)c[s]===void 0&&(c[s]=l[s]);return h.vnode&&h.vnode(i),i}var ee,g,te,we,ne=0,ke=[],v=h,Se=v.__b,$e=v.__r,Pe=v.diffed,Ee=v.__c,Te=v.unmount,Ce=v.__;function Ze(e,t){v.__h&&v.__h(g,e,ne||t),ne=0;var n=g.__H||(g.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function et(e){return ne=1,tt(Le,e)}function tt(e,t,n){var o=Ze(ee++,2);if(o.t=e,!o.__c&&(o.__=[Le(void 0,t),function(s){var c=o.__N?o.__N[0]:o.__[0],i=o.t(c,s);c!==i&&(o.__N=[i,o.__[1]],o.__c.setState({}))}],o.__c=g,!g.__f)){var a=function(s,c,i){if(!o.__c.__H)return!0;var f=o.__c.__H.__.filter(function(u){return u.__c});if(f.every(function(u){return!u.__N}))return!r||r.call(this,s,c,i);var _=o.__c.props!==s;return f.some(function(u){if(u.__N){var p=u.__[0];u.__=u.__N,u.__N=void 0,p!==u.__[0]&&(_=!0)}}),r&&r.call(this,s,c,i)||_};g.__f=!0;var r=g.shouldComponentUpdate,l=g.componentWillUpdate;g.componentWillUpdate=function(s,c,i){if(this.__e){var f=r;r=void 0,a(s,c,i),r=f}l&&l.call(this,s,c,i)},g.shouldComponentUpdate=a}return o.__N||o.__}function nt(){for(var e;e=ke.shift();){var t=e.__H;if(e.__P&&t)try{t.__h.some(B),t.__h.some(re),t.__h=[]}catch(n){t.__h=[],v.__e(n,e.__v)}}}v.__b=function(e){g=null,Se&&Se(e)},v.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),Ce&&Ce(e,t)},v.__r=function(e){$e&&$e(e),ee=0;var t=(g=e.__c).__H;t&&(te===g?(t.__h=[],g.__h=[],t.__.some(function(n){n.__N&&(n.__=n.__N),n.u=n.__N=void 0})):(t.__h.some(B),t.__h.some(re),t.__h=[],ee=0)),te=g},v.diffed=function(e){Pe&&Pe(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(ke.push(t)!==1&&we===v.requestAnimationFrame||((we=v.requestAnimationFrame)||rt)(nt)),t.__H.__.some(function(n){n.u&&(n.__H=n.u),n.u=void 0})),te=g=null},v.__c=function(e,t){t.some(function(n){try{n.__h.some(B),n.__h=n.__h.filter(function(o){return!o.__||re(o)})}catch(o){t.some(function(a){a.__h&&(a.__h=[])}),t=[],v.__e(o,n.__v)}}),Ee&&Ee(e,t)},v.unmount=function(e){Te&&Te(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.some(function(o){try{B(o)}catch(a){t=a}}),n.__H=void 0,t&&v.__e(t,n.__v))};var Ne=typeof requestAnimationFrame=="function";function rt(e){var t,n=function(){clearTimeout(o),Ne&&cancelAnimationFrame(t),setTimeout(e)},o=setTimeout(n,35);Ne&&(t=requestAnimationFrame(n))}function B(e){var t=g,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),g=t}function re(e){var t=g;e.__c=e.__(),g=t}function Le(e,t){return typeof t=="function"?t(e):t}const O={1:0,2:100,3:250,4:500},_e=4,Ue=10;function _t(e){return O[e]??O[_e]}function ot(e){return e>=_e?null:O[e+1]??null}function at(e){let t=1;for(let n=_e;n>=1;n--)if(e>=O[n]){t=n;break}return t}function it(e){const t=Math.floor(e/100*Ue),n=Ue-t;return`[${"■".repeat(t)}${"□".repeat(n)}] ${e}%`}function lt({progress:e,isPageCompleted:t,onFinish:n}){const[o,a]=et(!1),r=at(e.xp),l=ot(r),s=_t(r);let c=0;if(l!==null){const i=l-s,f=e.xp-s;c=Math.floor(f/i*100)}return x("div",{id:"aralxp-widget","data-aralxp":!0,"data-collapsed":o?"true":void 0,children:[x("div",{class:"aralxp-header",children:[x("span",{children:"AralXP"}),x("button",{class:"aralxp-toggle","aria-label":o?"Expand":"Collapse",onClick:()=>a(i=>!i),children:o?"▲":"▼"})]}),x("div",{class:"aralxp-body",children:[x("div",{class:"aralxp-level",children:["Level ",r]}),x("div",{class:"aralxp-xp",children:["XP: ",e.xp]}),l!==null?x("div",{class:"aralxp-bar",role:"progressbar","aria-valuenow":c,"aria-valuemin":0,"aria-valuemax":100,children:it(c)}):x("div",{class:"aralxp-bar",children:"MAX"}),x("div",{class:"aralxp-finish-btn-wrapper",children:x("button",{class:`aralxp-finish-btn${t?" completed":""}`,disabled:t,onClick:t?void 0:n,"aria-label":t?"Completed":"Finish Chapter",children:[x("span",{children:t?"✓ Done":"Finish Chapter"}),!t&&x("span",{class:"aralxp-xp-label",children:"+50 XP"})]})})]})]})}const st=`
  #aralxp-widget {
    position: fixed;
    bottom: 1.25rem;
    right: 1.25rem;
    z-index: 9999;
    background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
    color: #1f2937;
    border: 1px solid rgba(226, 232, 240, 0.8);
    border-radius: 10px;
    padding: 0.75rem 1rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
    font-size: 0.8rem;
    min-width: 170px;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    user-select: none;
    animation: slideUp 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  #aralxp-widget[data-collapsed="true"] .aralxp-body {
    display: none;
  }

  .aralxp-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    font-weight: 600;
    letter-spacing: 0.01em;
    text-transform: uppercase;
    font-size: 0.65rem;
    color: #6366f1;
    transition: opacity 0.2s ease;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid rgba(99, 102, 241, 0.1);
  }

  .aralxp-header:hover {
    opacity: 0.8;
  }

  .aralxp-toggle {
    background: none;
    border: none;
    color: #6366f1;
    cursor: pointer;
    font-size: 0.8rem;
    padding: 0 0 0 0.3rem;
    line-height: 1;
    transition: transform 0.2s ease;
  }

  .aralxp-toggle:hover {
    transform: scale(1.1);
  }

  .aralxp-body {
    margin-top: 0.5rem;
    animation: fadeIn 0.2s ease;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .aralxp-level {
    font-size: 1rem;
    font-weight: 700;
    background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 0.25rem;
  }

  .aralxp-xp {
    font-size: 0.7rem;
    color: #64748b;
    margin-bottom: 0.4rem;
    font-weight: 500;
  }

  .aralxp-bar {
    font-family: 'Courier New', monospace;
    font-size: 0.65rem;
    color: #0ea5e9;
    white-space: pre;
    letter-spacing: 0.04em;
    padding: 0.35rem;
    background: linear-gradient(90deg, rgba(6, 182, 212, 0.05) 0%, transparent 100%);
    border-radius: 5px;
    border-left: 2px solid #0ea5e9;
    margin-bottom: 0.5rem;
  }
`,ct=`
  .aralxp-finish-btn-wrapper {
    margin: 0;
  }

  .aralxp-finish-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.15rem;
    width: 100%;
    padding: 0.5rem 0.75rem;
    background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
    color: #ffffff;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 0.01em;
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    box-shadow: 0 4px 6px -1px rgba(99, 102, 241, 0.2);
    position: relative;
    overflow: hidden;
  }

  .aralxp-finish-btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s ease;
  }

  .aralxp-finish-btn:hover:not(:disabled)::before {
    left: 100%;
  }

  .aralxp-finish-btn:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: 0 10px 15px -3px rgba(99, 102, 241, 0.3);
  }

  .aralxp-finish-btn:active:not(:disabled) {
    transform: translateY(0);
  }

  .aralxp-finish-btn:disabled {
    background: linear-gradient(135deg, #e2e8f0 0%, #cbd5e1 100%);
    color: #94a3b8;
    cursor: not-allowed;
    box-shadow: none;
  }

  .aralxp-finish-btn.completed {
    background: linear-gradient(135deg, #10b981 0%, #059669 100%);
    box-shadow: 0 4px 6px -1px rgba(16, 185, 129, 0.2);
  }

  .aralxp-finish-btn.completed:hover {
    transform: translateY(-1px);
    box-shadow: 0 10px 15px -3px rgba(16, 185, 129, 0.3);
  }

  .aralxp-xp-label {
    font-size: 0.65rem;
    opacity: 0.85;
    font-weight: 400;
  }
`;function pt(){if(document.getElementById("aralxp-styles"))return;const e=document.createElement("style");e.id="aralxp-styles",e.textContent=st+ct,document.head.appendChild(e)}function He(){document.querySelectorAll("[data-aralxp]").forEach(e=>e.remove())}function ft(){return document.createElement("div")}async function Me(){if(!qe())return;pt(),He();let e;try{e=await Xe()}catch{return}const t=Ge(window.location.href),n=ft();document.body.appendChild(n);function o(a){Ye(pe(lt,{progress:a,isPageCompleted:!!a.completed_pages[t],onFinish:async()=>{const r=await Je(a,t);o(r)}}),n)}o(e)}async function Ae(){He(),await Me()}let Ie=window.location.pathname;async function De(){const e=window.location.pathname;e!==Ie&&(Ie=e,await Ae())}Me().catch(()=>{}),window.addEventListener("popstate",()=>{Ae().catch(()=>{})}),window.addEventListener("hashchange",()=>{De().catch(()=>{})});const ut=setInterval(()=>{De().catch(()=>{})},500);window.addEventListener("beforeunload",()=>{clearInterval(ut)})})();
