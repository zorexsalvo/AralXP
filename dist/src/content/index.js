(function(){"use strict";var L,h,ie,P,ae,se,ce,O,H,N,ue,G,V,X,M={},U=[],Ie=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,F=Array.isArray;function S(e,t){for(var _ in t)e[_]=t[_];return e}function K(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function Y(e,t,_){var o,l,n,i={};for(n in t)n=="key"?o=t[n]:n=="ref"?l=t[n]:i[n]=t[n];if(arguments.length>2&&(i.children=arguments.length>3?L.call(arguments,2):_),typeof e=="function"&&e.defaultProps!=null)for(n in e.defaultProps)i[n]===void 0&&(i[n]=e.defaultProps[n]);return D(e,i,o,l,null)}function D(e,t,_,o,l){var n={type:e,props:t,key:_,ref:o,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:l??++ie,__i:-1,__u:0};return l==null&&h.vnode!=null&&h.vnode(n),n}function I(e){return e.children}function z(e,t){this.props=e,this.context=t}function T(e,t){if(t==null)return e.__?T(e.__,e.__i+1):null;for(var _;t<e.__k.length;t++)if((_=e.__k[t])!=null&&_.__e!=null)return _.__e;return typeof e.type=="function"?T(e):null}function ze(e){if(e.__P&&e.__d){var t=e.__v,_=t.__e,o=[],l=[],n=S({},t);n.__v=t.__v+1,h.vnode&&h.vnode(n),J(e.__P,n,t,e.__n,e.__P.namespaceURI,32&t.__u?[_]:null,o,_??T(t),!!(32&t.__u),l),n.__v=t.__v,n.__.__k[n.__i]=n,ge(o,n,l),t.__e=t.__=null,n.__e!=_&&pe(n)}}function pe(e){if((e=e.__)!=null&&e.__c!=null)return e.__e=e.__c.base=null,e.__k.some(function(t){if(t!=null&&t.__e!=null)return e.__e=e.__c.base=t.__e}),pe(e)}function fe(e){(!e.__d&&(e.__d=!0)&&P.push(e)&&!R.__r++||ae!=h.debounceRendering)&&((ae=h.debounceRendering)||se)(R)}function R(){try{for(var e,t=1;P.length;)P.length>t&&P.sort(ce),e=P.shift(),t=P.length,ze(e)}finally{P.length=R.__r=0}}function de(e,t,_,o,l,n,i,s,c,a,p){var r,f,u,y,k,b,m,d=o&&o.__k||U,$=t.length;for(c=Re(_,t,d,c,$),r=0;r<$;r++)(u=_.__k[r])!=null&&(f=u.__i!=-1&&d[u.__i]||M,u.__i=r,b=J(e,u,f,l,n,i,s,c,a,p),y=u.__e,u.ref&&f.ref!=u.ref&&(f.ref&&Z(f.ref,null,u),p.push(u.ref,u.__c||y,u)),k==null&&y!=null&&(k=y),(m=!!(4&u.__u))||f.__k===u.__k?(c=he(u,c,e,m),m&&f.__e&&(f.__e=null)):typeof u.type=="function"&&b!==void 0?c=b:y&&(c=y.nextSibling),u.__u&=-7);return _.__e=k,c}function Re(e,t,_,o,l){var n,i,s,c,a,p=_.length,r=p,f=0;for(e.__k=new Array(l),n=0;n<l;n++)(i=t[n])!=null&&typeof i!="boolean"&&typeof i!="function"?(typeof i=="string"||typeof i=="number"||typeof i=="bigint"||i.constructor==String?i=e.__k[n]=D(null,i,null,null,null):F(i)?i=e.__k[n]=D(I,{children:i},null,null,null):i.constructor===void 0&&i.__b>0?i=e.__k[n]=D(i.type,i.props,i.key,i.ref?i.ref:null,i.__v):e.__k[n]=i,c=n+f,i.__=e,i.__b=e.__b+1,s=null,(a=i.__i=We(i,_,c,r))!=-1&&(r--,(s=_[a])&&(s.__u|=2)),s==null||s.__v==null?(a==-1&&(l>p?f--:l<p&&f++),typeof i.type!="function"&&(i.__u|=4)):a!=c&&(a==c-1?f--:a==c+1?f++:(a>c?f--:f++,i.__u|=4))):e.__k[n]=null;if(r)for(n=0;n<p;n++)(s=_[n])!=null&&!(2&s.__u)&&(s.__e==o&&(o=T(s)),be(s,s));return o}function he(e,t,_,o){var l,n;if(typeof e.type=="function"){for(l=e.__k,n=0;l&&n<l.length;n++)l[n]&&(l[n].__=e,t=he(l[n],t,_,o));return t}e.__e!=t&&(o&&(t&&e.type&&!t.parentNode&&(t=T(e)),_.insertBefore(e.__e,t||null)),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function We(e,t,_,o){var l,n,i,s=e.key,c=e.type,a=t[_],p=a!=null&&(2&a.__u)==0;if(a===null&&s==null||p&&s==a.key&&c==a.type)return _;if(o>(p?1:0)){for(l=_-1,n=_+1;l>=0||n<t.length;)if((a=t[i=l>=0?l--:n++])!=null&&!(2&a.__u)&&s==a.key&&c==a.type)return i}return-1}function me(e,t,_){t[0]=="-"?e.setProperty(t,_??""):e[t]=_==null?"":typeof _!="number"||Ie.test(t)?_:_+"px"}function W(e,t,_,o,l){var n,i;e:if(t=="style")if(typeof _=="string")e.style.cssText=_;else{if(typeof o=="string"&&(e.style.cssText=o=""),o)for(t in o)_&&t in _||me(e.style,t,"");if(_)for(t in _)o&&_[t]==o[t]||me(e.style,t,_[t])}else if(t[0]=="o"&&t[1]=="n")n=t!=(t=t.replace(ue,"$1")),i=t.toLowerCase(),t=i in e||t=="onFocusOut"||t=="onFocusIn"?i.slice(2):t.slice(2),e.l||(e.l={}),e.l[t+n]=_,_?o?_[N]=o[N]:(_[N]=G,e.addEventListener(t,n?X:V,n)):e.removeEventListener(t,n?X:V,n);else{if(l=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=_??"";break e}catch{}typeof _=="function"||(_==null||_===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&_==1?"":_))}}function ve(e){return function(t){if(this.l){var _=this.l[t.type+e];if(t[H]==null)t[H]=G++;else if(t[H]<_[N])return;return _(h.event?h.event(t):t)}}}function J(e,t,_,o,l,n,i,s,c,a){var p,r,f,u,y,k,b,m,d,$,E,A,De,q,le,w=t.type;if(t.constructor!==void 0)return null;128&_.__u&&(c=!!(32&_.__u),n=[s=t.__e=_.__e]),(p=h.__b)&&p(t);e:if(typeof w=="function")try{if(m=t.props,d=w.prototype&&w.prototype.render,$=(p=w.contextType)&&o[p.__c],E=p?$?$.props.value:p.__:o,_.__c?b=(r=t.__c=_.__c).__=r.__E:(d?t.__c=r=new w(m,E):(t.__c=r=new z(m,E),r.constructor=w,r.render=je),$&&$.sub(r),r.state||(r.state={}),r.__n=o,f=r.__d=!0,r.__h=[],r._sb=[]),d&&r.__s==null&&(r.__s=r.state),d&&w.getDerivedStateFromProps!=null&&(r.__s==r.state&&(r.__s=S({},r.__s)),S(r.__s,w.getDerivedStateFromProps(m,r.__s))),u=r.props,y=r.state,r.__v=t,f)d&&w.getDerivedStateFromProps==null&&r.componentWillMount!=null&&r.componentWillMount(),d&&r.componentDidMount!=null&&r.__h.push(r.componentDidMount);else{if(d&&w.getDerivedStateFromProps==null&&m!==u&&r.componentWillReceiveProps!=null&&r.componentWillReceiveProps(m,E),t.__v==_.__v||!r.__e&&r.shouldComponentUpdate!=null&&r.shouldComponentUpdate(m,r.__s,E)===!1){t.__v!=_.__v&&(r.props=m,r.state=r.__s,r.__d=!1),t.__e=_.__e,t.__k=_.__k,t.__k.some(function(C){C&&(C.__=t)}),U.push.apply(r.__h,r._sb),r._sb=[],r.__h.length&&i.push(r);break e}r.componentWillUpdate!=null&&r.componentWillUpdate(m,r.__s,E),d&&r.componentDidUpdate!=null&&r.__h.push(function(){r.componentDidUpdate(u,y,k)})}if(r.context=E,r.props=m,r.__P=e,r.__e=!1,A=h.__r,De=0,d)r.state=r.__s,r.__d=!1,A&&A(t),p=r.render(r.props,r.state,r.context),U.push.apply(r.__h,r._sb),r._sb=[];else do r.__d=!1,A&&A(t),p=r.render(r.props,r.state,r.context),r.state=r.__s;while(r.__d&&++De<25);r.state=r.__s,r.getChildContext!=null&&(o=S(S({},o),r.getChildContext())),d&&!f&&r.getSnapshotBeforeUpdate!=null&&(k=r.getSnapshotBeforeUpdate(u,y)),q=p!=null&&p.type===I&&p.key==null?ye(p.props.children):p,s=de(e,F(q)?q:[q],t,_,o,l,n,i,s,c,a),r.base=t.__e,t.__u&=-161,r.__h.length&&i.push(r),b&&(r.__E=r.__=null)}catch(C){if(t.__v=null,c||n!=null)if(C.then){for(t.__u|=c?160:128;s&&s.nodeType==8&&s.nextSibling;)s=s.nextSibling;n[n.indexOf(s)]=null,t.__e=s}else{for(le=n.length;le--;)K(n[le]);Q(t)}else t.__e=_.__e,t.__k=_.__k,C.then||Q(t);h.__e(C,t,_)}else n==null&&t.__v==_.__v?(t.__k=_.__k,t.__e=_.__e):s=t.__e=Be(_.__e,t,_,o,l,n,i,c,a);return(p=h.diffed)&&p(t),128&t.__u?void 0:s}function Q(e){e&&(e.__c&&(e.__c.__e=!0),e.__k&&e.__k.some(Q))}function ge(e,t,_){for(var o=0;o<_.length;o++)Z(_[o],_[++o],_[++o]);h.__c&&h.__c(t,e),e.some(function(l){try{e=l.__h,l.__h=[],e.some(function(n){n.call(l)})}catch(n){h.__e(n,l.__v)}})}function ye(e){return typeof e!="object"||e==null||e.__b>0?e:F(e)?e.map(ye):e.constructor!==void 0?null:S({},e)}function Be(e,t,_,o,l,n,i,s,c){var a,p,r,f,u,y,k,b=_.props||M,m=t.props,d=t.type;if(d=="svg"?l="http://www.w3.org/2000/svg":d=="math"?l="http://www.w3.org/1998/Math/MathML":l||(l="http://www.w3.org/1999/xhtml"),n!=null){for(a=0;a<n.length;a++)if((u=n[a])&&"setAttribute"in u==!!d&&(d?u.localName==d:u.nodeType==3)){e=u,n[a]=null;break}}if(e==null){if(d==null)return document.createTextNode(m);e=document.createElementNS(l,d,m.is&&m),s&&(h.__m&&h.__m(t,n),s=!1),n=null}if(d==null)b===m||s&&e.data==m||(e.data=m);else{if(n=d=="textarea"&&m.defaultValue!=null?null:n&&L.call(e.childNodes),!s&&n!=null)for(b={},a=0;a<e.attributes.length;a++)b[(u=e.attributes[a]).name]=u.value;for(a in b)u=b[a],a=="dangerouslySetInnerHTML"?r=u:a=="children"||a in m||a=="value"&&"defaultValue"in m||a=="checked"&&"defaultChecked"in m||W(e,a,null,u,l);for(a in m)u=m[a],a=="children"?f=u:a=="dangerouslySetInnerHTML"?p=u:a=="value"?y=u:a=="checked"?k=u:s&&typeof u!="function"||b[a]===u||W(e,a,u,b[a],l);if(p)s||r&&(p.__html==r.__html||p.__html==e.innerHTML)||(e.innerHTML=p.__html),t.__k=[];else if(r&&(e.innerHTML=""),de(t.type=="template"?e.content:e,F(f)?f:[f],t,_,o,d=="foreignObject"?"http://www.w3.org/1999/xhtml":l,n,i,n?n[0]:_.__k&&T(_,0),s,c),n!=null)for(a=n.length;a--;)K(n[a]);s&&d!="textarea"||(a="value",d=="progress"&&y==null?e.removeAttribute("value"):y!=null&&(y!==e[a]||d=="progress"&&!y||d=="option"&&y!=b[a])&&W(e,a,y,b[a],l),a="checked",k!=null&&k!=e[a]&&W(e,a,k,b[a],l))}return e}function Z(e,t,_){try{if(typeof e=="function"){var o=typeof e.__u=="function";o&&e.__u(),o&&t==null||(e.__u=e(t))}else e.current=t}catch(l){h.__e(l,_)}}function be(e,t,_){var o,l;if(h.unmount&&h.unmount(e),(o=e.ref)&&(o.current&&o.current!=e.__e||Z(o,null,t)),(o=e.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(n){h.__e(n,t)}o.base=o.__P=null}if(o=e.__k)for(l=0;l<o.length;l++)o[l]&&be(o[l],t,_||typeof e.type!="function");_||K(e.__e),e.__c=e.__=e.__e=void 0}function je(e,t,_){return this.constructor(e,_)}function xe(e,t,_){var o,l,n,i;t==document&&(t=document.documentElement),h.__&&h.__(e,t),l=(o=!1)?null:t.__k,n=[],i=[],J(t,e=t.__k=Y(I,null,[e]),l||M,M,t.namespaceURI,l?null:t.firstChild?L.call(t.childNodes):null,n,l?l.__e:t.firstChild,o,i),ge(n,e,i)}L=U.slice,h={__e:function(e,t,_,o){for(var l,n,i;t=t.__;)if((l=t.__c)&&!l.__)try{if((n=l.constructor)&&n.getDerivedStateFromError!=null&&(l.setState(n.getDerivedStateFromError(e)),i=l.__d),l.componentDidCatch!=null&&(l.componentDidCatch(e,o||{}),i=l.__d),i)return l.__E=l}catch(s){e=s}throw e}},ie=0,z.prototype.setState=function(e,t){var _;_=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=S({},this.state),typeof e=="function"&&(e=e(S({},_),this.props)),e&&S(_,e),e!=null&&this.__v&&(t&&this._sb.push(t),fe(this))},z.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),fe(this))},z.prototype.render=I,P=[],se=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,ce=function(e,t){return e.__v.__b-t.__v.__b},R.__r=0,O=Math.random().toString(8),H="__d"+O,N="__a"+O,ue=/(PointerCapture)$|Capture$/i,G=0,V=ve(!1),X=ve(!0);function qe(){return!!document.querySelector(".md-content")}function Oe(){return document.querySelector(".md-footer")}function Ge(e){return new URL(e).pathname}const ee="aralxp_progress",ke={xp:0,completed_pages:{}};function Ve(e){return typeof e=="object"&&e!==null&&"xp"in e&&typeof e.xp=="number"&&"completed_pages"in e&&typeof e.completed_pages=="object"}async function Xe(){try{const t=(await chrome.storage.local.get(ee))[ee];return Ve(t)?t:{...ke}}catch{return{...ke}}}async function Ke(e){await chrome.storage.local.set({[ee]:e})}async function Ye(e,t){if(e.completed_pages[t])return e;const _={xp:e.xp+50,completed_pages:{...e.completed_pages,[t]:{completed_at:new Date().toISOString(),xp:50}}};return await Ke(_),_}var Je=0;function x(e,t,_,o,l,n){t||(t={});var i,s,c=t;if("ref"in c)for(s in c={},t)s=="ref"?i=t[s]:c[s]=t[s];var a={type:e,props:c,key:_,ref:i,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--Je,__i:-1,__u:0,__source:l,__self:n};if(typeof e=="function"&&(i=e.defaultProps))for(s in i)c[s]===void 0&&(c[s]=i[s]);return h.vnode&&h.vnode(a),a}function Qe({isCompleted:e,onFinish:t}){return x("div",{class:"aralxp-finish-btn-wrapper","data-aralxp":!0,children:x("button",{class:`aralxp-finish-btn${e?" completed":""}`,disabled:e,onClick:e?void 0:t,"aria-label":e?"Completed":"Finish Chapter",children:[x("span",{children:e?"✓ Completed":"Finish Chapter"}),!e&&x("span",{class:"aralxp-xp-label",children:"+50 XP"})]})})}var te,v,_e,we,ne=0,Se=[],g=h,Pe=g.__b,$e=g.__r,Ee=g.diffed,Te=g.__c,Ce=g.unmount,Ne=g.__;function Ze(e,t){g.__h&&g.__h(v,e,ne||t),ne=0;var _=v.__H||(v.__H={__:[],__h:[]});return e>=_.__.length&&_.__.push({}),_.__[e]}function et(e){return ne=1,tt(Le,e)}function tt(e,t,_){var o=Ze(te++,2);if(o.t=e,!o.__c&&(o.__=[Le(void 0,t),function(s){var c=o.__N?o.__N[0]:o.__[0],a=o.t(c,s);c!==a&&(o.__N=[a,o.__[1]],o.__c.setState({}))}],o.__c=v,!v.__f)){var l=function(s,c,a){if(!o.__c.__H)return!0;var p=o.__c.__H.__.filter(function(f){return f.__c});if(p.every(function(f){return!f.__N}))return!n||n.call(this,s,c,a);var r=o.__c.props!==s;return p.some(function(f){if(f.__N){var u=f.__[0];f.__=f.__N,f.__N=void 0,u!==f.__[0]&&(r=!0)}}),n&&n.call(this,s,c,a)||r};v.__f=!0;var n=v.shouldComponentUpdate,i=v.componentWillUpdate;v.componentWillUpdate=function(s,c,a){if(this.__e){var p=n;n=void 0,l(s,c,a),n=p}i&&i.call(this,s,c,a)},v.shouldComponentUpdate=l}return o.__N||o.__}function _t(){for(var e;e=Se.shift();){var t=e.__H;if(e.__P&&t)try{t.__h.some(B),t.__h.some(re),t.__h=[]}catch(_){t.__h=[],g.__e(_,e.__v)}}}g.__b=function(e){v=null,Pe&&Pe(e)},g.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),Ne&&Ne(e,t)},g.__r=function(e){$e&&$e(e),te=0;var t=(v=e.__c).__H;t&&(_e===v?(t.__h=[],v.__h=[],t.__.some(function(_){_.__N&&(_.__=_.__N),_.u=_.__N=void 0})):(t.__h.some(B),t.__h.some(re),t.__h=[],te=0)),_e=v},g.diffed=function(e){Ee&&Ee(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Se.push(t)!==1&&we===g.requestAnimationFrame||((we=g.requestAnimationFrame)||nt)(_t)),t.__H.__.some(function(_){_.u&&(_.__H=_.u),_.u=void 0})),_e=v=null},g.__c=function(e,t){t.some(function(_){try{_.__h.some(B),_.__h=_.__h.filter(function(o){return!o.__||re(o)})}catch(o){t.some(function(l){l.__h&&(l.__h=[])}),t=[],g.__e(o,_.__v)}}),Te&&Te(e,t)},g.unmount=function(e){Ce&&Ce(e);var t,_=e.__c;_&&_.__H&&(_.__H.__.some(function(o){try{B(o)}catch(l){t=l}}),_.__H=void 0,t&&g.__e(t,_.__v))};var Ae=typeof requestAnimationFrame=="function";function nt(e){var t,_=function(){clearTimeout(o),Ae&&cancelAnimationFrame(t),setTimeout(e)},o=setTimeout(_,35);Ae&&(t=requestAnimationFrame(_))}function B(e){var t=v,_=e.__c;typeof _=="function"&&(e.__c=void 0,_()),v=t}function re(e){var t=v;e.__c=e.__(),v=t}function Le(e,t){return typeof t=="function"?t(e):t}const j={1:0,2:100,3:250,4:500},oe=4,He=10;function rt(e){return j[e]??j[oe]}function ot(e){return e>=oe?null:j[e+1]??null}function lt(e){let t=1;for(let _=oe;_>=1;_--)if(e>=j[_]){t=_;break}return t}function it(e){const t=Math.floor(e/100*He),_=He-t;return`[${"■".repeat(t)}${"□".repeat(_)}] ${e}%`}function at({progress:e}){const[t,_]=et(!1),o=lt(e.xp),l=ot(o),n=rt(o);let i=0;if(l!==null){const s=l-n,c=e.xp-n;i=Math.floor(c/s*100)}return x("div",{id:"aralxp-widget","data-aralxp":!0,"data-collapsed":t?"true":void 0,children:[x("div",{class:"aralxp-header",children:[x("span",{children:"AralXP"}),x("button",{class:"aralxp-toggle","aria-label":t?"Expand":"Collapse",onClick:()=>_(s=>!s),children:t?"▲":"▼"})]}),x("div",{class:"aralxp-body",children:[x("div",{class:"aralxp-level",children:["Level ",o]}),x("div",{class:"aralxp-xp",children:["XP: ",e.xp]}),l!==null?x("div",{class:"aralxp-bar",role:"progressbar","aria-valuenow":i,"aria-valuemin":0,"aria-valuemax":100,children:it(i)}):x("div",{class:"aralxp-bar",children:"MAX"})]})]})}const st=`
  #aralxp-widget {
    position: fixed;
    bottom: 1.5rem;
    right: 1.5rem;
    z-index: 9999;
    background: #1e1e2e;
    color: #cdd6f4;
    border: 1px solid #313244;
    border-radius: 8px;
    padding: 0.75rem 1rem;
    font-family: 'Segoe UI', system-ui, sans-serif;
    font-size: 0.85rem;
    min-width: 180px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
    user-select: none;
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
    letter-spacing: 0.04em;
    text-transform: uppercase;
    font-size: 0.75rem;
    color: #89b4fa;
  }

  .aralxp-toggle {
    background: none;
    border: none;
    color: #89b4fa;
    cursor: pointer;
    font-size: 0.9rem;
    padding: 0;
    line-height: 1;
  }

  .aralxp-body {
    margin-top: 0.5rem;
  }

  .aralxp-level {
    font-size: 1rem;
    font-weight: 700;
    color: #a6e3a1;
    margin-bottom: 0.2rem;
  }

  .aralxp-xp {
    font-size: 0.8rem;
    color: #bac2de;
    margin-bottom: 0.4rem;
  }

  .aralxp-bar {
    font-family: monospace;
    font-size: 0.75rem;
    color: #89dceb;
    white-space: pre;
  }
`,ct=`
  .aralxp-finish-btn-wrapper {
    margin: 1.5rem 0;
  }

  .aralxp-finish-btn {
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.15rem;
    padding: 0.6rem 1.2rem;
    background: #1e66f5;
    color: #ffffff;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-family: 'Segoe UI', system-ui, sans-serif;
    font-size: 0.9rem;
    font-weight: 500;
    transition: background 0.15s ease;
  }

  .aralxp-finish-btn:hover:not(:disabled) {
    background: #1a56d6;
  }

  .aralxp-finish-btn:disabled {
    background: #313244;
    color: #6c7086;
    cursor: default;
  }

  .aralxp-finish-btn.completed {
    background: #313244;
    color: #a6e3a1;
  }

  .aralxp-xp-label {
    font-size: 0.72rem;
    opacity: 0.75;
  }
`;function ut(){if(document.getElementById("aralxp-styles"))return;const e=document.createElement("style");e.id="aralxp-styles",e.textContent=st+ct,document.head.appendChild(e)}function Me(){document.querySelectorAll("[data-aralxp]").forEach(e=>e.remove())}function Ue(){return document.createElement("div")}async function Fe(){if(!qe())return;ut(),Me();let e;try{e=await Xe()}catch{return}const t=Ge(window.location.href),_=Oe(),o=Ue();_&&_.parentElement?_.parentElement.insertBefore(o,_):document.body.appendChild(o);const l=Ue();document.body.appendChild(l);function n(i){xe(Y(Qe,{isCompleted:!!i.completed_pages[t],onFinish:async()=>{const s=await Ye(i,t);n(s)}}),o),xe(Y(at,{progress:i}),l)}n(e)}async function pt(){Me(),await Fe()}Fe().catch(()=>{}),window.addEventListener("popstate",()=>{pt().catch(()=>{})})})();
