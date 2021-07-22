(function(e,t){'function'==typeof define&&define.amd?define('jquery-bridget/jquery-bridget',['jquery'],function(o){return t(e,o)}):'object'==typeof module&&module.exports?module.exports=t(e,require('jquery')):e.jQueryBridget=t(e,e.jQuery)})(window,function(t,o){'use strict';function n(d,p,u){function g(_,f,z){var I,v='$().'+d+'("'+f+'")';return _.each(function(S,E){var L=u.data(E,d);if(!L)return void l(d+' not initialized. Cannot call methods, i.e. '+v);var W=L[f];if(!W||'_'==f.charAt(0))return void l(v+' is not a valid method');var T=W.apply(L,z);I=void 0==I?T:I}),void 0===I?_:I}function c(_,f){_.each(function(z,I){var v=u.data(I,d);v?(v.option(f),v._init()):(v=new p(I,f),u.data(I,d,v))})}u=u||o||t.jQuery,u&&(!p.prototype.option&&(p.prototype.option=function(_){u.isPlainObject(_)&&(this.options=u.extend(!0,this.options,_))}),u.fn[d]=function(_){if('string'==typeof _){var f=s.call(arguments,1);return g(this,_,f)}return c(this,_),this},r(u))}function r(d){!d||d&&d.bridget||(d.bridget=n)}var s=Array.prototype.slice,m=t.console,l='undefined'==typeof m?function(){}:function(d){m.error(d)};return r(o||t.jQuery),n}),function(e,t){'function'==typeof define&&define.amd?define('ev-emitter/ev-emitter',t):'object'==typeof module&&module.exports?module.exports=t():e.EvEmitter=t()}('undefined'==typeof window?this:window,function(){function e(){}var t=e.prototype;return t.on=function(o,n){if(o&&n){var r=this._events=this._events||{},s=r[o]=r[o]||[];return-1==s.indexOf(n)&&s.push(n),this}},t.once=function(o,n){if(o&&n){this.on(o,n);var r=this._onceEvents=this._onceEvents||{},s=r[o]=r[o]||{};return s[n]=!0,this}},t.off=function(o,n){var r=this._events&&this._events[o];if(r&&r.length){var s=r.indexOf(n);return-1!=s&&r.splice(s,1),this}},t.emitEvent=function(o,n){var r=this._events&&this._events[o];if(r&&r.length){var s=0,m=r[s];n=n||[];for(var d,l=this._onceEvents&&this._onceEvents[o];m;)d=l&&l[m],d&&(this.off(o,m),delete l[m]),m.apply(this,n),s+=d?0:1,m=r[s];return this}},e}),function(e,t){'use strict';'function'==typeof define&&define.amd?define('get-size/get-size',[],function(){return t()}):'object'==typeof module&&module.exports?module.exports=t():e.getSize=t()}(window,function(){'use strict';function t(c){var _=parseFloat(c),f=-1==c.indexOf('%')&&!isNaN(_);return f&&_}function n(){for(var f,c={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},_=0;_<p;_++)f=d[_],c[f]=0;return c}function r(c){var _=getComputedStyle(c);return _||l('Style returned '+_+'. Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1'),_}function s(){if(!u){u=!0;var c=document.createElement('div');c.style.width='200px',c.style.padding='1px 2px 3px 4px',c.style.borderStyle='solid',c.style.borderWidth='1px 2px 3px 4px',c.style.boxSizing='border-box';var _=document.body||document.documentElement;_.appendChild(c);var f=r(c);m.isBoxSizeOuter=g=200==t(f.width),_.removeChild(c)}}function m(c){if(s(),'string'==typeof c&&(c=document.querySelector(c)),c&&'object'==typeof c&&c.nodeType){var _=r(c);if('none'==_.display)return n();for(var f={width:c.offsetWidth,height:c.offsetHeight},z=f.isBorderBox='border-box'==_.boxSizing,I=0;I<p;I++){var v=d[I],S=_[v],E=parseFloat(S);f[v]=isNaN(E)?0:E}var L=f.paddingLeft+f.paddingRight,W=f.paddingTop+f.paddingBottom,T=f.marginLeft+f.marginRight,C=f.marginTop+f.marginBottom,O=f.borderLeftWidth+f.borderRightWidth,R=f.borderTopWidth+f.borderBottomWidth,P=z&&g,D=t(_.width);!1!==D&&(f.width=D+(P?0:L+O));var j=t(_.height);return!1!==j&&(f.height=j+(P?0:W+R)),f.innerWidth=f.width-(L+O),f.innerHeight=f.height-(W+R),f.outerWidth=f.width+T,f.outerHeight=f.height+C,f}}var l='undefined'==typeof console?function(){}:function(c){console.error(c)},d=['paddingLeft','paddingRight','paddingTop','paddingBottom','marginLeft','marginRight','marginTop','marginBottom','borderLeftWidth','borderRightWidth','borderTopWidth','borderBottomWidth'],p=d.length,u=!1,g;return m}),function(e,t){'use strict';'function'==typeof define&&define.amd?define('desandro-matches-selector/matches-selector',t):'object'==typeof module&&module.exports?module.exports=t():e.matchesSelector=t()}(window,function(){'use strict';var t=function(){var o=window.Element.prototype;if(o.matches)return'matches';if(o.matchesSelector)return'matchesSelector';for(var n=['webkit','moz','ms','o'],r=0;r<n.length;r++){var s=n[r],m=s+'MatchesSelector';if(o[m])return m}}();return function(n,r){return n[t](r)}}),function(e,t){'function'==typeof define&&define.amd?define('fizzy-ui-utils/utils',['desandro-matches-selector/matches-selector'],function(o){return t(e,o)}):'object'==typeof module&&module.exports?module.exports=t(e,require('desandro-matches-selector')):e.fizzyUIUtils=t(e,e.matchesSelector)}(window,function(t,o){var n={};n.extend=function(s,m){for(var l in m)s[l]=m[l];return s},n.modulo=function(s,m){return(s%m+m)%m},n.makeArray=function(s){var m=[];if(Array.isArray(s))m=s;else if(s&&'object'==typeof s&&'number'==typeof s.length)for(var l=0;l<s.length;l++)m.push(s[l]);else m.push(s);return m},n.removeFrom=function(s,m){var l=s.indexOf(m);-1!=l&&s.splice(l,1)},n.getParent=function(s,m){for(;s.parentNode&&s!=document.body;)if(s=s.parentNode,o(s,m))return s},n.getQueryElement=function(s){return'string'==typeof s?document.querySelector(s):s},n.handleEvent=function(s){var m='on'+s.type;this[m]&&this[m](s)},n.filterFindElements=function(s,m){s=n.makeArray(s);var l=[];return s.forEach(function(d){if(d instanceof HTMLElement){if(!m)return void l.push(d);o(d,m)&&l.push(d);for(var p=d.querySelectorAll(m),u=0;u<p.length;u++)l.push(p[u])}}),l},n.debounceMethod=function(s,m,l){var d=s.prototype[m],p=m+'Timeout';s.prototype[m]=function(){var u=this[p];u&&clearTimeout(u);var g=arguments,c=this;this[p]=setTimeout(function(){d.apply(c,g),delete c[p]},l||100)}},n.docReady=function(s){var m=document.readyState;'complete'==m||'interactive'==m?setTimeout(s):document.addEventListener('DOMContentLoaded',s)},n.toDashed=function(s){return s.replace(/(.)([A-Z])/g,function(m,l,d){return l+'-'+d}).toLowerCase()};var r=t.console;return n.htmlInit=function(s,m){n.docReady(function(){var l=n.toDashed(m),d='data-'+l,p=document.querySelectorAll('['+d+']'),u=document.querySelectorAll('.js-'+l),g=n.makeArray(p).concat(n.makeArray(u)),_=t.jQuery;g.forEach(function(f){var I,z=f.getAttribute(d)||f.getAttribute(d+'-options');try{I=z&&JSON.parse(z)}catch(S){return void(r&&r.error('Error parsing '+d+' on '+f.className+': '+S))}var v=new s(f,I);_&&_.data(f,m,v)})})},n}),function(e,t){'function'==typeof define&&define.amd?define('outlayer/item',['ev-emitter/ev-emitter','get-size/get-size'],t):'object'==typeof module&&module.exports?module.exports=t(require('ev-emitter'),require('get-size')):(e.Outlayer={},e.Outlayer.Item=t(e.EvEmitter,e.getSize))}(window,function(t,o){'use strict';function n(z){for(var I in z)return!1;return I=null,!0}function r(z,I){z&&(this.element=z,this.layout=I,this.position={x:0,y:0},this._create())}var m=document.documentElement.style,l='string'==typeof m.transition?'transition':'WebkitTransition',d='string'==typeof m.transform?'transform':'WebkitTransform',p={WebkitTransition:'webkitTransitionEnd',transition:'transitionend'}[l],u={transform:d,transition:l,transitionDuration:l+'Duration',transitionProperty:l+'Property',transitionDelay:l+'Delay'},g=r.prototype=Object.create(t.prototype);g.constructor=r,g._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:'absolute'})},g.handleEvent=function(z){var I='on'+z.type;this[I]&&this[I](z)},g.getSize=function(){this.size=o(this.element)},g.css=function(z){var I=this.element.style;for(var v in z){var S=u[v]||v;I[S]=z[v]}},g.getPosition=function(){var z=getComputedStyle(this.element),I=this.layout._getOption('originLeft'),v=this.layout._getOption('originTop'),S=z[I?'left':'right'],E=z[v?'top':'bottom'],L=this.layout.size,W=-1==S.indexOf('%')?parseInt(S,10):parseFloat(S)/100*L.width,T=-1==E.indexOf('%')?parseInt(E,10):parseFloat(E)/100*L.height;W=isNaN(W)?0:W,T=isNaN(T)?0:T,W-=I?L.paddingLeft:L.paddingRight,T-=v?L.paddingTop:L.paddingBottom,this.position.x=W,this.position.y=T},g.layoutPosition=function(){var z=this.layout.size,I={},v=this.layout._getOption('originLeft'),S=this.layout._getOption('originTop'),E=v?'paddingLeft':'paddingRight',L=v?'left':'right',W=v?'right':'left',T=this.position.x+z[E];I[L]=this.getXValue(T),I[W]='';var C=S?'paddingTop':'paddingBottom',O=S?'top':'bottom',R=S?'bottom':'top',P=this.position.y+z[C];I[O]=this.getYValue(P),I[R]='',this.css(I),this.emitEvent('layout',[this])},g.getXValue=function(z){var I=this.layout._getOption('horizontal');return this.layout.options.percentPosition&&!I?100*(z/this.layout.size.width)+'%':z+'px'},g.getYValue=function(z){var I=this.layout._getOption('horizontal');return this.layout.options.percentPosition&&I?100*(z/this.layout.size.height)+'%':z+'px'},g._transitionTo=function(z,I){this.getPosition();var v=this.position.x,S=this.position.y,E=parseInt(z,10),L=parseInt(I,10),W=E===this.position.x&&L===this.position.y;if(this.setPosition(z,I),W&&!this.isTransitioning)return void this.layoutPosition();var O={};O.transform=this.getTranslate(z-v,I-S),this.transition({to:O,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},g.getTranslate=function(z,I){var v=this.layout._getOption('originLeft'),S=this.layout._getOption('originTop');return z=v?z:-z,I=S?I:-I,'translate3d('+z+'px, '+I+'px, 0)'},g.goTo=function(z,I){this.setPosition(z,I),this.layoutPosition()},g.moveTo=g._transitionTo,g.setPosition=function(z,I){this.position.x=parseInt(z,10),this.position.y=parseInt(I,10)},g._nonTransition=function(z){for(var I in this.css(z.to),z.isCleaning&&this._removeStyles(z.to),z.onTransitionEnd)z.onTransitionEnd[I].call(this)},g.transition=function(z){if(!parseFloat(this.layout.options.transitionDuration))return void this._nonTransition(z);var I=this._transn;for(var v in z.onTransitionEnd)I.onEnd[v]=z.onTransitionEnd[v];for(v in z.to)I.ingProperties[v]=!0,z.isCleaning&&(I.clean[v]=!0);if(z.from){this.css(z.from);this.element.offsetHeight}this.enableTransition(z.to),this.css(z.to),this.isTransitioning=!0};var c='opacity,'+function(z){return z.replace(/([A-Z])/g,function(I){return'-'+I.toLowerCase()})}(d);g.enableTransition=function(){if(!this.isTransitioning){var z=this.layout.options.transitionDuration;z='number'==typeof z?z+'ms':z,this.css({transitionProperty:c,transitionDuration:z,transitionDelay:this.staggerDelay||0}),this.element.addEventListener(p,this,!1)}},g.onwebkitTransitionEnd=function(z){this.ontransitionend(z)},g.onotransitionend=function(z){this.ontransitionend(z)};var _={'-webkit-transform':'transform'};g.ontransitionend=function(z){if(z.target===this.element){var I=this._transn,v=_[z.propertyName]||z.propertyName;if(delete I.ingProperties[v],n(I.ingProperties)&&this.disableTransition(),v in I.clean&&(this.element.style[z.propertyName]='',delete I.clean[v]),v in I.onEnd){var S=I.onEnd[v];S.call(this),delete I.onEnd[v]}this.emitEvent('transitionEnd',[this])}},g.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(p,this,!1),this.isTransitioning=!1},g._removeStyles=function(z){var I={};for(var v in z)I[v]='';this.css(I)};var f={transitionProperty:'',transitionDuration:'',transitionDelay:''};return g.removeTransitionStyles=function(){this.css(f)},g.stagger=function(z){z=isNaN(z)?0:z,this.staggerDelay=z+'ms'},g.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:''}),this.emitEvent('remove',[this])},g.remove=function(){return l&&parseFloat(this.layout.options.transitionDuration)?void(this.once('transitionEnd',function(){this.removeElem()}),this.hide()):void this.removeElem()},g.reveal=function(){delete this.isHidden,this.css({display:''});var z=this.layout.options,I={},v=this.getHideRevealTransitionEndProperty('visibleStyle');I[v]=this.onRevealTransitionEnd,this.transition({from:z.hiddenStyle,to:z.visibleStyle,isCleaning:!0,onTransitionEnd:I})},g.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent('reveal')},g.getHideRevealTransitionEndProperty=function(z){var I=this.layout.options[z];if(I.opacity)return'opacity';for(var v in I)return v},g.hide=function(){this.isHidden=!0,this.css({display:''});var z=this.layout.options,I={},v=this.getHideRevealTransitionEndProperty('hiddenStyle');I[v]=this.onHideTransitionEnd,this.transition({from:z.visibleStyle,to:z.hiddenStyle,isCleaning:!0,onTransitionEnd:I})},g.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:'none'}),this.emitEvent('hide'))},g.destroy=function(){this.css({position:'',left:'',right:'',top:'',bottom:'',transition:'',transform:''})},r}),function(e,t){'use strict';'function'==typeof define&&define.amd?define('outlayer/outlayer',['ev-emitter/ev-emitter','get-size/get-size','fizzy-ui-utils/utils','./item'],function(o,n,r,s){return t(e,o,n,r,s)}):'object'==typeof module&&module.exports?module.exports=t(e,require('ev-emitter'),require('get-size'),require('fizzy-ui-utils'),require('./item')):e.Outlayer=t(e,e.EvEmitter,e.getSize,e.fizzyUIUtils,e.Outlayer.Item)}(window,function(t,o,n,r,s){'use strict';function m(I,v){var S=r.getQueryElement(I);if(!S)return void(p&&p.error('Bad element for '+this.constructor.namespace+': '+(S||I)));this.element=S,u&&(this.$element=u(this.element)),this.options=r.extend({},this.constructor.defaults),this.option(v);var E=++c;this.element.outlayerGUID=E,_[E]=this,this._create();var L=this._getOption('initLayout');L&&this.layout()}function l(I){function v(){I.apply(this,arguments)}return v.prototype=Object.create(I.prototype),v.prototype.constructor=v,v}function d(I){if('number'==typeof I)return I;var v=I.match(/(^\d*\.?\d*)(\w*)/),S=v&&v[1],E=v&&v[2];if(!S.length)return 0;S=parseFloat(S);var L=z[E]||1;return S*L}var p=t.console,u=t.jQuery,g=function(){},c=0,_={};m.namespace='outlayer',m.Item=s,m.defaults={containerStyle:{position:'relative'},initLayout:!0,originLeft:!0,originTop:!0,resize:!0,resizeContainer:!0,transitionDuration:'0.4s',hiddenStyle:{opacity:0,transform:'scale(0.001)'},visibleStyle:{opacity:1,transform:'scale(1)'}};var f=m.prototype;r.extend(f,o.prototype),f.option=function(I){r.extend(this.options,I)},f._getOption=function(I){var v=this.constructor.compatOptions[I];return v&&void 0!==this.options[v]?this.options[v]:this.options[I]},m.compatOptions={initLayout:'isInitLayout',horizontal:'isHorizontal',layoutInstant:'isLayoutInstant',originLeft:'isOriginLeft',originTop:'isOriginTop',resize:'isResizeBound',resizeContainer:'isResizingContainer'},f._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),r.extend(this.element.style,this.options.containerStyle);var I=this._getOption('resize');I&&this.bindResize()},f.reloadItems=function(){this.items=this._itemize(this.element.children)},f._itemize=function(I){for(var v=this._filterFindItemElements(I),S=this.constructor.Item,E=[],L=0;L<v.length;L++){var W=v[L],T=new S(W,this);E.push(T)}return E},f._filterFindItemElements=function(I){return r.filterFindElements(I,this.options.itemSelector)},f.getItemElements=function(){return this.items.map(function(I){return I.element})},f.layout=function(){this._resetLayout(),this._manageStamps();var I=this._getOption('layoutInstant'),v=void 0===I?!this._isLayoutInited:I;this.layoutItems(this.items,v),this._isLayoutInited=!0},f._init=f.layout,f._resetLayout=function(){this.getSize()},f.getSize=function(){this.size=n(this.element)},f._getMeasurement=function(I,v){var E,S=this.options[I];S?('string'==typeof S?E=this.element.querySelector(S):S instanceof HTMLElement&&(E=S),this[I]=E?n(E)[v]:'string'==typeof S?0:S):this[I]=0},f.layoutItems=function(I,v){I=this._getItemsForLayout(I),this._layoutItems(I,v),this._postLayout()},f._getItemsForLayout=function(I){return I.filter(function(v){return!v.isIgnored})},f._layoutItems=function(I,v){if(this._emitCompleteOnItems('layout',I),I&&I.length){var S=[];I.forEach(function(E){var L=this._getItemLayoutPosition(E);L.item=E,L.isInstant=v||E.isLayoutInstant,S.push(L)},this),this._processLayoutQueue(S)}},f._getItemLayoutPosition=function(){return{x:0,y:0}},f._processLayoutQueue=function(I){this.updateStagger(),I.forEach(function(v,S){this._positionItem(v.item,v.x,v.y,v.isInstant,S)},this)},f.updateStagger=function(){var I=this.options.stagger;return null===I||void 0===I?void(this.stagger=0):(this.stagger=d(I),this.stagger)},f._positionItem=function(I,v,S,E,L){E?I.goTo(v,S):(I.stagger(L*this.stagger),I.moveTo(v,S))},f._postLayout=function(){this.resizeContainer()},f.resizeContainer=function(){var I=this._getOption('resizeContainer');if(I){var v=this._getContainerSize();v&&(this._setContainerMeasure(v.width,!0),this._setContainerMeasure(v.height,!1))}},f._getContainerSize=g,f._setContainerMeasure=function(I,v){if(void 0!==I){var S=this.size;S.isBorderBox&&(I+=v?S.paddingLeft+S.paddingRight+S.borderLeftWidth+S.borderRightWidth:S.paddingBottom+S.paddingTop+S.borderTopWidth+S.borderBottomWidth),I=Math.max(I,0),this.element.style[v?'width':'height']=I+'px'}},f._emitCompleteOnItems=function(I,v){function S(){L.dispatchEvent(I+'Complete',null,[v])}function E(){T++,T==W&&S()}var L=this,W=v.length;if(!v||!W)return void S();var T=0;v.forEach(function(C){C.once(I,E)})},f.dispatchEvent=function(I,v,S){var E=v?[v].concat(S):S;if(this.emitEvent(I,E),u)if(this.$element=this.$element||u(this.element),v){var L=u.Event(v);L.type=I,this.$element.trigger(L,S)}else this.$element.trigger(I,S)},f.ignore=function(I){var v=this.getItem(I);v&&(v.isIgnored=!0)},f.unignore=function(I){var v=this.getItem(I);v&&delete v.isIgnored},f.stamp=function(I){I=this._find(I),I&&(this.stamps=this.stamps.concat(I),I.forEach(this.ignore,this))},f.unstamp=function(I){I=this._find(I),I&&I.forEach(function(v){r.removeFrom(this.stamps,v),this.unignore(v)},this)},f._find=function(I){if(I)return'string'==typeof I&&(I=this.element.querySelectorAll(I)),I=r.makeArray(I),I},f._manageStamps=function(){this.stamps&&this.stamps.length&&(this._getBoundingRect(),this.stamps.forEach(this._manageStamp,this))},f._getBoundingRect=function(){var I=this.element.getBoundingClientRect(),v=this.size;this._boundingRect={left:I.left+v.paddingLeft+v.borderLeftWidth,top:I.top+v.paddingTop+v.borderTopWidth,right:I.right-(v.paddingRight+v.borderRightWidth),bottom:I.bottom-(v.paddingBottom+v.borderBottomWidth)}},f._manageStamp=g,f._getElementOffset=function(I){var v=I.getBoundingClientRect(),S=this._boundingRect,E=n(I),L={left:v.left-S.left-E.marginLeft,top:v.top-S.top-E.marginTop,right:S.right-v.right-E.marginRight,bottom:S.bottom-v.bottom-E.marginBottom};return L},f.handleEvent=r.handleEvent,f.bindResize=function(){t.addEventListener('resize',this),this.isResizeBound=!0},f.unbindResize=function(){t.removeEventListener('resize',this),this.isResizeBound=!1},f.onresize=function(){this.resize()},r.debounceMethod(m,'onresize',100),f.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},f.needsResizeLayout=function(){var I=n(this.element),v=this.size&&I;return v&&I.innerWidth!==this.size.innerWidth},f.addItems=function(I){var v=this._itemize(I);return v.length&&(this.items=this.items.concat(v)),v},f.appended=function(I){var v=this.addItems(I);v.length&&(this.layoutItems(v,!0),this.reveal(v))},f.prepended=function(I){var v=this._itemize(I);if(v.length){var S=this.items.slice(0);this.items=v.concat(S),this._resetLayout(),this._manageStamps(),this.layoutItems(v,!0),this.reveal(v),this.layoutItems(S)}},f.reveal=function(I){if(this._emitCompleteOnItems('reveal',I),I&&I.length){var v=this.updateStagger();I.forEach(function(S,E){S.stagger(E*v),S.reveal()})}},f.hide=function(I){if(this._emitCompleteOnItems('hide',I),I&&I.length){var v=this.updateStagger();I.forEach(function(S,E){S.stagger(E*v),S.hide()})}},f.revealItemElements=function(I){var v=this.getItems(I);this.reveal(v)},f.hideItemElements=function(I){var v=this.getItems(I);this.hide(v)},f.getItem=function(I){for(var S,v=0;v<this.items.length;v++)if(S=this.items[v],S.element==I)return S},f.getItems=function(I){I=r.makeArray(I);var v=[];return I.forEach(function(S){var E=this.getItem(S);E&&v.push(E)},this),v},f.remove=function(I){var v=this.getItems(I);this._emitCompleteOnItems('remove',v),v&&v.length&&v.forEach(function(S){S.remove(),r.removeFrom(this.items,S)},this)},f.destroy=function(){var I=this.element.style;I.height='',I.position='',I.width='',this.items.forEach(function(S){S.destroy()}),this.unbindResize();var v=this.element.outlayerGUID;delete _[v],delete this.element.outlayerGUID,u&&u.removeData(this.element,this.constructor.namespace)},m.data=function(I){I=r.getQueryElement(I);var v=I&&I.outlayerGUID;return v&&_[v]},m.create=function(I,v){var S=l(m);return S.defaults=r.extend({},m.defaults),r.extend(S.defaults,v),S.compatOptions=r.extend({},m.compatOptions),S.namespace=I,S.data=m.data,S.Item=l(s),r.htmlInit(S,I),u&&u.bridget&&u.bridget(I,S),S};var z={ms:1,s:1e3};return m.Item=s,m}),function(e,t){'function'==typeof define&&define.amd?define('isotope/js/item',['outlayer/outlayer'],t):'object'==typeof module&&module.exports?module.exports=t(require('outlayer')):(e.Isotope=e.Isotope||{},e.Isotope.Item=t(e.Outlayer))}(window,function(t){'use strict';function o(){t.Item.apply(this,arguments)}var n=o.prototype=Object.create(t.Item.prototype),r=n._create;n._create=function(){this.id=this.layout.itemGUID++,r.call(this),this.sortData={}},n.updateSortData=function(){if(!this.isIgnored){this.sortData.id=this.id,this.sortData['original-order']=this.id,this.sortData.random=Math.random();var m=this.layout.options.getSortData,l=this.layout._sorters;for(var d in m){var p=l[d];this.sortData[d]=p(this.element,this)}}};var s=n.destroy;return n.destroy=function(){s.apply(this,arguments),this.css({display:''})},o}),function(e,t){'function'==typeof define&&define.amd?define('isotope/js/layout-mode',['get-size/get-size','outlayer/outlayer'],t):'object'==typeof module&&module.exports?module.exports=t(require('get-size'),require('outlayer')):(e.Isotope=e.Isotope||{},e.Isotope.LayoutMode=t(e.getSize,e.Outlayer))}(window,function(t,o){'use strict';function n(m){this.isotope=m,m&&(this.options=m.options[this.namespace],this.element=m.element,this.items=m.filteredItems,this.size=m.size)}var r=n.prototype;return['_resetLayout','_getItemLayoutPosition','_manageStamp','_getContainerSize','_getElementOffset','needsResizeLayout','_getOption'].forEach(function(m){r[m]=function(){return o.prototype[m].apply(this.isotope,arguments)}}),r.needsVerticalResizeLayout=function(){var m=t(this.isotope.element),l=this.isotope.size&&m;return l&&m.innerHeight!=this.isotope.size.innerHeight},r._getMeasurement=function(){this.isotope._getMeasurement.apply(this,arguments)},r.getColumnWidth=function(){this.getSegmentSize('column','Width')},r.getRowHeight=function(){this.getSegmentSize('row','Height')},r.getSegmentSize=function(m,l){var d=m+l,p='outer'+l;if(this._getMeasurement(d,p),!this[d]){var u=this.getFirstItemSize();this[d]=u&&u[p]||this.isotope.size['inner'+l]}},r.getFirstItemSize=function(){var m=this.isotope.filteredItems[0];return m&&m.element&&t(m.element)},r.layout=function(){this.isotope.layout.apply(this.isotope,arguments)},r.getSize=function(){this.isotope.getSize(),this.size=this.isotope.size},n.modes={},n.create=function(m,l){function d(){n.apply(this,arguments)}return d.prototype=Object.create(r),d.prototype.constructor=d,l&&(d.options=l),d.prototype.namespace=m,n.modes[m]=d,d},n}),function(e,t){'function'==typeof define&&define.amd?define('masonry/masonry',['outlayer/outlayer','get-size/get-size'],t):'object'==typeof module&&module.exports?module.exports=t(require('outlayer'),require('get-size')):e.Masonry=t(e.Outlayer,e.getSize)}(window,function(t,o){var n=t.create('masonry');n.compatOptions.fitWidth='isFitWidth';var r=n.prototype;return r._resetLayout=function(){this.getSize(),this._getMeasurement('columnWidth','outerWidth'),this._getMeasurement('gutter','outerWidth'),this.measureColumns(),this.colYs=[];for(var s=0;s<this.cols;s++)this.colYs.push(0);this.maxY=0,this.horizontalColIndex=0},r.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var s=this.items[0],m=s&&s.element;this.columnWidth=m&&o(m).outerWidth||this.containerWidth}var l=this.columnWidth+=this.gutter,d=this.containerWidth+this.gutter,p=d/l,u=l-d%l,g=u&&1>u?'round':'floor';p=Math[g](p),this.cols=Math.max(p,1)},r.getContainerWidth=function(){var s=this._getOption('fitWidth'),m=s?this.element.parentNode:this.element,l=o(m);this.containerWidth=l&&l.innerWidth},r._getItemLayoutPosition=function(s){s.element.style.height='',s.getSize();var m=s.size.outerWidth%this.columnWidth,l=m&&1>m?'floor':'floor',d=Math[l](s.size.outerWidth/this.columnWidth);d=Math.min(d,this.cols);for(var p=this.options.horizontalOrder?'_getHorizontalColPosition':'_getTopColPosition',u=this[p](d,s),g={x:this.columnWidth*u.col,y:u.y},c=u.y+s.size.outerHeight,_=d+u.col,f=u.col;f<_;f++)this.colYs[f]=c;return g},r._getTopColPosition=function(s){var m=this._getTopColGroup(s),l=Math.min.apply(Math,m);return{col:m.indexOf(l),y:l}},r._getTopColGroup=function(s){if(2>s)return this.colYs;for(var m=[],l=this.cols+1-s,d=0;d<l;d++)m[d]=this._getColGroupY(d,s);return m},r._getColGroupY=function(s,m){if(2>m)return this.colYs[s];var l=this.colYs.slice(s,s+m);return Math.max.apply(Math,l)},r._getHorizontalColPosition=function(s,m){var l=this.horizontalColIndex%this.cols,d=1<s&&l+s>this.cols;l=d?0:l;var p=m.size.outerWidth&&m.size.outerHeight;return this.horizontalColIndex=p?l+s:this.horizontalColIndex,{col:l,y:this._getColGroupY(l,s)}},r._manageStamp=function(s){var m=o(s),l=this._getElementOffset(s),d=this._getOption('originLeft'),p=d?l.left:l.right,u=p+m.outerWidth,g=Math.floor(p/this.columnWidth);g=Math.max(0,g);var c=Math.floor(u/this.columnWidth);c-=u%this.columnWidth?0:1,c=Math.min(this.cols-1,c);for(var _=this._getOption('originTop'),f=(_?l.top:l.bottom)+m.outerHeight,z=g;z<=c;z++)this.colYs[z]=Math.max(f,this.colYs[z])},r._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var s={height:this.maxY};return this._getOption('fitWidth')&&(s.width=this._getContainerFitWidth()),s},r._getContainerFitWidth=function(){for(var s=0,m=this.cols;--m&&0===this.colYs[m];)s++;return(this.cols-s)*this.columnWidth-this.gutter},r.needsResizeLayout=function(){var s=this.containerWidth;return this.getContainerWidth(),s!=this.containerWidth},n}),function(e,t){'function'==typeof define&&define.amd?define('isotope/js/layout-modes/masonry',['../layout-mode','masonry/masonry'],t):'object'==typeof module&&module.exports?module.exports=t(require('../layout-mode'),require('masonry-layout')):t(e.Isotope.LayoutMode,e.Masonry)}(window,function(t,o){'use strict';var n=t.create('masonry'),r=n.prototype,s={_getElementOffset:!0,layout:!0,_getMeasurement:!0};for(var m in o.prototype)s[m]||(r[m]=o.prototype[m]);var l=r.measureColumns;r.measureColumns=function(){this.items=this.isotope.filteredItems,l.call(this)};var d=r._getOption;return r._getOption=function(p){return'fitWidth'==p?void 0===this.options.isFitWidth?this.options.fitWidth:this.options.isFitWidth:d.apply(this.isotope,arguments)},n}),function(e,t){'function'==typeof define&&define.amd?define('isotope/js/layout-modes/fit-rows',['../layout-mode'],t):'object'==typeof exports?module.exports=t(require('../layout-mode')):t(e.Isotope.LayoutMode)}(window,function(t){'use strict';var o=t.create('fitRows'),n=o.prototype;return n._resetLayout=function(){this.x=0,this.y=0,this.maxY=0,this._getMeasurement('gutter','outerWidth')},n._getItemLayoutPosition=function(r){r.getSize();var s=r.size.outerWidth+this.gutter,m=this.isotope.size.innerWidth+this.gutter;0!==this.x&&s+Math.floor(this.x)>m&&(this.x=0,this.y=this.maxY);var l={x:this.x,y:this.y};return this.maxY=Math.max(this.maxY,this.y+r.size.outerHeight),this.x+=s,l},n._getContainerSize=function(){return{height:this.maxY}},o}),function(e,t){'function'==typeof define&&define.amd?define('isotope/js/layout-modes/vertical',['../layout-mode'],t):'object'==typeof module&&module.exports?module.exports=t(require('../layout-mode')):t(e.Isotope.LayoutMode)}(window,function(t){'use strict';var o=t.create('vertical',{horizontalAlignment:0}),n=o.prototype;return n._resetLayout=function(){this.y=0},n._getItemLayoutPosition=function(r){r.getSize();var s=(this.isotope.size.innerWidth-r.size.outerWidth)*this.options.horizontalAlignment,m=this.y;return this.y+=r.size.outerHeight,{x:s,y:m}},n._getContainerSize=function(){return{height:this.y}},o}),function(e,t){'function'==typeof define&&define.amd?define(['outlayer/outlayer','get-size/get-size','desandro-matches-selector/matches-selector','fizzy-ui-utils/utils','isotope/js/item','isotope/js/layout-mode','isotope/js/layout-modes/masonry','isotope/js/layout-modes/fit-rows','isotope/js/layout-modes/vertical'],function(o,n,r,s,m,l){return t(e,o,n,r,s,m,l)}):'object'==typeof module&&module.exports?module.exports=t(e,require('outlayer'),require('get-size'),require('desandro-matches-selector'),require('fizzy-ui-utils'),require('isotope/js/item'),require('isotope/js/layout-mode'),require('isotope/js/layout-modes/masonry'),require('isotope/js/layout-modes/fit-rows'),require('isotope/js/layout-modes/vertical')):e.Isotope=t(e,e.Outlayer,e.getSize,e.matchesSelector,e.fizzyUIUtils,e.Isotope.Item,e.Isotope.LayoutMode)}(window,function(t,o,n,r,s,m,l){function d(z,I){return function(S,E){for(var L=0;L<z.length;L++){var W=z[L],T=S.sortData[W],C=E.sortData[W];if(T>C||T<C){var O=void 0===I[W]?I:I[W],R=O?1:-1;return(T>C?1:-1)*R}}return 0}}var p=t.jQuery,u=String.prototype.trim?function(z){return z.trim()}:function(z){return z.replace(/^\s+|\s+$/g,'')},g=o.create('isotope',{layoutMode:'masonry',isJQueryFiltering:!0,sortAscending:!0});g.Item=m,g.LayoutMode=l;var c=g.prototype;c._create=function(){for(var z in this.itemGUID=0,this._sorters={},this._getSorters(),o.prototype._create.call(this),this.modes={},this.filteredItems=this.items,this.sortHistory=['original-order'],l.modes)this._initLayoutMode(z)},c.reloadItems=function(){this.itemGUID=0,o.prototype.reloadItems.call(this)},c._itemize=function(){for(var v,z=o.prototype._itemize.apply(this,arguments),I=0;I<z.length;I++)v=z[I],v.id=this.itemGUID++;return this._updateItemsSortData(z),z},c._initLayoutMode=function(z){var I=l.modes[z],v=this.options[z]||{};this.options[z]=I.options?s.extend(I.options,v):v,this.modes[z]=new I(this)},c.layout=function(){return!this._isLayoutInited&&this._getOption('initLayout')?void this.arrange():void this._layout()},c._layout=function(){var z=this._getIsInstant();this._resetLayout(),this._manageStamps(),this.layoutItems(this.filteredItems,z),this._isLayoutInited=!0},c.arrange=function(z){this.option(z),this._getIsInstant();var I=this._filter(this.items);this.filteredItems=I.matches,this._bindArrangeComplete(),this._isInstant?this._noTransition(this._hideReveal,[I]):this._hideReveal(I),this._sort(),this._layout()},c._init=c.arrange,c._hideReveal=function(z){this.reveal(z.needReveal),this.hide(z.needHide)},c._getIsInstant=function(){var z=this._getOption('layoutInstant'),I=void 0===z?!this._isLayoutInited:z;return this._isInstant=I,I},c._bindArrangeComplete=function(){function z(){I&&v&&S&&E.dispatchEvent('arrangeComplete',null,[E.filteredItems])}var I,v,S,E=this;this.once('layoutComplete',function(){I=!0,z()}),this.once('hideComplete',function(){v=!0,z()}),this.once('revealComplete',function(){S=!0,z()})},c._filter=function(z){var I=this.options.filter;I=I||'*';for(var T,v=[],S=[],E=[],L=this._getFilterTest(I),W=0;W<z.length;W++)if(T=z[W],!T.isIgnored){var C=L(T);C&&v.push(T),C&&T.isHidden?S.push(T):!C&&!T.isHidden&&E.push(T)}return{matches:v,needReveal:S,needHide:E}},c._getFilterTest=function(z){return p&&this.options.isJQueryFiltering?function(I){return p(I.element).is(z)}:'function'==typeof z?function(I){return z(I.element)}:function(I){return r(I.element,z)}},c.updateSortData=function(z){var I;z?(z=s.makeArray(z),I=this.getItems(z)):I=this.items,this._getSorters(),this._updateItemsSortData(I)},c._getSorters=function(){var z=this.options.getSortData;for(var I in z){var v=z[I];this._sorters[I]=_(v)}},c._updateItemsSortData=function(z){for(var S,I=z&&z.length,v=0;I&&v<I;v++)S=z[v],S.updateSortData()};var _=function(){function I(v,S){return v?function(L){return L.getAttribute(v)}:function(L){var W=L.querySelector(S);return W&&W.textContent}}return function(v){if('string'!=typeof v)return v;var S=u(v).split(' '),E=S[0],L=E.match(/^\[(.+)\]$/),W=L&&L[1],T=I(W,E),C=g.sortDataParsers[S[1]];return v=C?function(O){return O&&C(T(O))}:function(O){return O&&T(O)},v}}();g.sortDataParsers={parseInt:function(z){return parseInt(z,10)},parseFloat:function(z){return parseFloat(z)}},c._sort=function(){if(this.options.sortBy){var z=s.makeArray(this.options.sortBy);this._getIsSameSortBy(z)||(this.sortHistory=z.concat(this.sortHistory));var I=d(this.sortHistory,this.options.sortAscending);this.filteredItems.sort(I)}},c._getIsSameSortBy=function(z){for(var I=0;I<z.length;I++)if(z[I]!=this.sortHistory[I])return!1;return!0},c._mode=function(){var z=this.options.layoutMode,I=this.modes[z];if(!I)throw new Error('No layout mode: '+z);return I.options=this.options[z],I},c._resetLayout=function(){o.prototype._resetLayout.call(this),this._mode()._resetLayout()},c._getItemLayoutPosition=function(z){return this._mode()._getItemLayoutPosition(z)},c._manageStamp=function(z){this._mode()._manageStamp(z)},c._getContainerSize=function(){return this._mode()._getContainerSize()},c.needsResizeLayout=function(){return this._mode().needsResizeLayout()},c.appended=function(z){var I=this.addItems(z);if(I.length){var v=this._filterRevealAdded(I);this.filteredItems=this.filteredItems.concat(v)}},c.prepended=function(z){var I=this._itemize(z);if(I.length){this._resetLayout(),this._manageStamps();var v=this._filterRevealAdded(I);this.layoutItems(this.filteredItems),this.filteredItems=v.concat(this.filteredItems),this.items=I.concat(this.items)}},c._filterRevealAdded=function(z){var I=this._filter(z);return this.hide(I.needHide),this.reveal(I.matches),this.layoutItems(I.matches,!0),I.matches},c.insert=function(z){var I=this.addItems(z);if(I.length){var v,S,E=I.length;for(v=0;v<E;v++)S=I[v],this.element.appendChild(S.element);var L=this._filter(I).matches;for(v=0;v<E;v++)I[v].isLayoutInstant=!0;for(this.arrange(),v=0;v<E;v++)delete I[v].isLayoutInstant;this.reveal(L)}};var f=c.remove;return c.remove=function(z){z=s.makeArray(z);var I=this.getItems(z);f.call(this,z);for(var E,v=I&&I.length,S=0;v&&S<v;S++)E=I[S],s.removeFrom(this.filteredItems,E)},c.shuffle=function(){for(var I,z=0;z<this.items.length;z++)I=this.items[z],I.sortData.random=Math.random();this.options.sortBy='random',this._sort(),this._layout()},c._noTransition=function(z,I){var v=this.options.transitionDuration;this.options.transitionDuration=0;var S=z.apply(this,I);return this.options.transitionDuration=v,S},c.getFilteredItemElements=function(){return this.filteredItems.map(function(z){return z.element})},g});