/*! jQuery UI - v1.13.0 - 2021-10-07
* http://jqueryui.com
* Includes: data.js, disable-selection.js, escape-selector.js, focusable.js, form-reset-mixin.js, form.js, ie.js, jquery-1-7.js, keycode.js, labels.js, plugin.js, position.js, safe-active-element.js, safe-blur.js, scroll-parent.js, tabbable.js, unique-id.js, version.js, widget.js
* Copyright jQuery Foundation and other contributors; Licensed  */
!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(x){"use strict";var t,e,i,n,W,C,o,s,r,l,a,h,f;function E(t,e,i){return[parseFloat(t[0])*(a.test(t[0])?e/100:1),parseFloat(t[1])*(a.test(t[1])?i/100:1)]}function L(t,e){return parseInt(x.css(t,e),10)||0}function N(t){return null!=t&&t===t.window}x.ui=x.ui||{},x.ui.version="1.13.0",
/*!
 * jQuery UI :data 1.13.0
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
x.extend(x.expr.pseudos,{data:x.expr.createPseudo?x.expr.createPseudo(function(e){return function(t){return!!x.data(t,e)}}):function(t,e,i){return!!x.data(t,i[3])}}),
/*!
 * jQuery UI Disable Selection 1.13.0
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
x.fn.extend({disableSelection:(t="onselectstart"in document.createElement("div")?"selectstart":"mousedown",function(){return this.on(t+".ui-disableSelection",function(t){t.preventDefault()})}),enableSelection:function(){return this.off(".ui-disableSelection")}}),
/*!
 * jQuery UI Focusable 1.13.0
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
x.ui.focusable=function(t,e){var i,n,o,s,r=t.nodeName.toLowerCase();return"area"===r?(n=(i=t.parentNode).name,!(!t.href||!n||"map"!==i.nodeName.toLowerCase())&&(0<(n=x("img[usemap='#"+n+"']")).length&&n.is(":visible"))):(/^(input|select|textarea|button|object)$/.test(r)?(o=!t.disabled)&&(s=x(t).closest("fieldset")[0])&&(o=!s.disabled):o="a"===r&&t.href||e,o&&x(t).is(":visible")&&function(t){var e=t.css("visibility");for(;"inherit"===e;)t=t.parent(),e=t.css("visibility");return"visible"===e}(x(t)))},x.extend(x.expr.pseudos,{focusable:function(t){return x.ui.focusable(t,null!=x.attr(t,"tabindex"))}}),x.fn._form=function(){return"string"==typeof this[0].form?this.closest("form"):x(this[0].form)},
/*!
 * jQuery UI Form Reset Mixin 1.13.0
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
x.ui.formResetMixin={_formResetHandler:function(){var e=x(this);setTimeout(function(){var t=e.data("ui-form-reset-instances");x.each(t,function(){this.refresh()})})},_bindFormResetHandler:function(){var t;this.form=this.element._form(),this.form.length&&((t=this.form.data("ui-form-reset-instances")||[]).length||this.form.on("reset.ui-form-reset",this._formResetHandler),t.push(this),this.form.data("ui-form-reset-instances",t))},_unbindFormResetHandler:function(){var t;this.form.length&&((t=this.form.data("ui-form-reset-instances")).splice(x.inArray(this,t),1),t.length?this.form.data("ui-form-reset-instances",t):this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset"))}},x.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),
/*!
 * jQuery UI Support for jQuery core 1.8.x and newer 1.13.0
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 */
x.expr.pseudos||(x.expr.pseudos=x.expr[":"]),x.uniqueSort||(x.uniqueSort=x.unique),x.escapeSelector||(e=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,i=function(t,e){return e?"\0"===t?"�":t.slice(0,-1)+"\\"+t.charCodeAt(t.length-1).toString(16)+" ":"\\"+t},x.escapeSelector=function(t){return(t+"").replace(e,i)}),x.fn.even&&x.fn.odd||x.fn.extend({even:function(){return this.filter(function(t){return t%2==0})},odd:function(){return this.filter(function(t){return t%2==1})}}),
/*!
 * jQuery UI Keycode 1.13.0
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
x.ui.keyCode={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38},
/*!
 * jQuery UI Labels 1.13.0
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
x.fn.labels=function(){var t,e,i;return this.length?this[0].labels&&this[0].labels.length?this.pushStack(this[0].labels):(e=this.eq(0).parents("label"),(t=this.attr("id"))&&(i=(i=this.eq(0).parents().last()).add((i.length?i:this).siblings()),t="label[for='"+x.escapeSelector(t)+"']",e=e.add(i.find(t).addBack(t))),this.pushStack(e)):this.pushStack([])},x.ui.plugin={add:function(t,e,i){var n,o=x.ui[t].prototype;for(n in i)o.plugins[n]=o.plugins[n]||[],o.plugins[n].push([e,i[n]])},call:function(t,e,i,n){var o,s=t.plugins[e];if(s&&(n||t.element[0].parentNode&&11!==t.element[0].parentNode.nodeType))for(o=0;o<s.length;o++)t.options[s[o][0]]&&s[o][1].apply(t.element,i)}},
/*!
 * jQuery UI Position 1.13.0
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/position/
 */
W=Math.max,C=Math.abs,o=/left|center|right/,s=/top|center|bottom/,r=/[\+\-]\d+(\.[\d]+)?%?/,l=/^\w+/,a=/%$/,h=x.fn.position,x.position={scrollbarWidth:function(){if(void 0!==n)return n;var t,e=x("<div style='display:block;position:absolute;width:200px;height:200px;overflow:hidden;'><div style='height:300px;width:auto;'></div></div>"),i=e.children()[0];return x("body").append(e),t=i.offsetWidth,e.css("overflow","scroll"),t===(i=i.offsetWidth)&&(i=e[0].clientWidth),e.remove(),n=t-i},getScrollInfo:function(t){var e=t.isWindow||t.isDocument?"":t.element.css("overflow-x"),i=t.isWindow||t.isDocument?"":t.element.css("overflow-y"),e="scroll"===e||"auto"===e&&t.width<t.element[0].scrollWidth;return{width:"scroll"===i||"auto"===i&&t.height<t.element[0].scrollHeight?x.position.scrollbarWidth():0,height:e?x.position.scrollbarWidth():0}},getWithinInfo:function(t){var e=x(t||window),i=N(e[0]),n=!!e[0]&&9===e[0].nodeType;return{element:e,isWindow:i,isDocument:n,offset:!i&&!n?x(t).offset():{left:0,top:0},scrollLeft:e.scrollLeft(),scrollTop:e.scrollTop(),width:e.outerWidth(),height:e.outerHeight()}}},x.fn.position=function(u){if(!u||!u.of)return h.apply(this,arguments);var c,d,p,g,m,t,v="string"==typeof(u=x.extend({},u)).of?x(document).find(u.of):x(u.of),y=x.position.getWithinInfo(u.within),w=x.position.getScrollInfo(y),b=(u.collision||"flip").split(" "),_={},e=9===(t=(e=v)[0]).nodeType?{width:e.width(),height:e.height(),offset:{top:0,left:0}}:N(t)?{width:e.width(),height:e.height(),offset:{top:e.scrollTop(),left:e.scrollLeft()}}:t.preventDefault?{width:0,height:0,offset:{top:t.pageY,left:t.pageX}}:{width:e.outerWidth(),height:e.outerHeight(),offset:e.offset()};return v[0].preventDefault&&(u.at="left top"),d=e.width,p=e.height,m=x.extend({},g=e.offset),x.each(["my","at"],function(){var t,e,i=(u[this]||"").split(" ");(i=1===i.length?o.test(i[0])?i.concat(["center"]):s.test(i[0])?["center"].concat(i):["center","center"]:i)[0]=o.test(i[0])?i[0]:"center",i[1]=s.test(i[1])?i[1]:"center",t=r.exec(i[0]),e=r.exec(i[1]),_[this]=[t?t[0]:0,e?e[0]:0],u[this]=[l.exec(i[0])[0],l.exec(i[1])[0]]}),1===b.length&&(b[1]=b[0]),"right"===u.at[0]?m.left+=d:"center"===u.at[0]&&(m.left+=d/2),"bottom"===u.at[1]?m.top+=p:"center"===u.at[1]&&(m.top+=p/2),c=E(_.at,d,p),m.left+=c[0],m.top+=c[1],this.each(function(){var i,t,r=x(this),l=r.outerWidth(),a=r.outerHeight(),e=L(this,"marginLeft"),n=L(this,"marginTop"),o=l+e+L(this,"marginRight")+w.width,s=a+n+L(this,"marginBottom")+w.height,h=x.extend({},m),f=E(_.my,r.outerWidth(),r.outerHeight());"right"===u.my[0]?h.left-=l:"center"===u.my[0]&&(h.left-=l/2),"bottom"===u.my[1]?h.top-=a:"center"===u.my[1]&&(h.top-=a/2),h.left+=f[0],h.top+=f[1],i={marginLeft:e,marginTop:n},x.each(["left","top"],function(t,e){x.ui.position[b[t]]&&x.ui.position[b[t]][e](h,{targetWidth:d,targetHeight:p,elemWidth:l,elemHeight:a,collisionPosition:i,collisionWidth:o,collisionHeight:s,offset:[c[0]+f[0],c[1]+f[1]],my:u.my,at:u.at,within:y,elem:r})}),u.using&&(t=function(t){var e=g.left-h.left,i=e+d-l,n=g.top-h.top,o=n+p-a,s={target:{element:v,left:g.left,top:g.top,width:d,height:p},element:{element:r,left:h.left,top:h.top,width:l,height:a},horizontal:i<0?"left":0<e?"right":"center",vertical:o<0?"top":0<n?"bottom":"middle"};d<l&&C(e+i)<d&&(s.horizontal="center"),p<a&&C(n+o)<p&&(s.vertical="middle"),W(C(e),C(i))>W(C(n),C(o))?s.important="horizontal":s.important="vertical",u.using.call(this,t,s)}),r.offset(x.extend(h,{using:t}))})},x.ui.position={fit:{left:function(t,e){var i=e.within,n=i.isWindow?i.scrollLeft:i.offset.left,o=i.width,s=t.left-e.collisionPosition.marginLeft,r=n-s,l=s+e.collisionWidth-o-n;e.collisionWidth>o?0<r&&l<=0?(i=t.left+r+e.collisionWidth-o-n,t.left+=r-i):t.left=!(0<l&&r<=0)&&l<r?n+o-e.collisionWidth:n:0<r?t.left+=r:0<l?t.left-=l:t.left=W(t.left-s,t.left)},top:function(t,e){var i=e.within,n=i.isWindow?i.scrollTop:i.offset.top,o=e.within.height,s=t.top-e.collisionPosition.marginTop,r=n-s,l=s+e.collisionHeight-o-n;e.collisionHeight>o?0<r&&l<=0?(i=t.top+r+e.collisionHeight-o-n,t.top+=r-i):t.top=!(0<l&&r<=0)&&l<r?n+o-e.collisionHeight:n:0<r?t.top+=r:0<l?t.top-=l:t.top=W(t.top-s,t.top)}},flip:{left:function(t,e){var i=e.within,n=i.offset.left+i.scrollLeft,o=i.width,s=i.isWindow?i.scrollLeft:i.offset.left,r=t.left-e.collisionPosition.marginLeft,l=r-s,a=r+e.collisionWidth-o-s,h="left"===e.my[0]?-e.elemWidth:"right"===e.my[0]?e.elemWidth:0,i="left"===e.at[0]?e.targetWidth:"right"===e.at[0]?-e.targetWidth:0,r=-2*e.offset[0];l<0?((n=t.left+h+i+r+e.collisionWidth-o-n)<0||n<C(l))&&(t.left+=h+i+r):0<a&&(0<(s=t.left-e.collisionPosition.marginLeft+h+i+r-s)||C(s)<a)&&(t.left+=h+i+r)},top:function(t,e){var i=e.within,n=i.offset.top+i.scrollTop,o=i.height,s=i.isWindow?i.scrollTop:i.offset.top,r=t.top-e.collisionPosition.marginTop,l=r-s,a=r+e.collisionHeight-o-s,h="top"===e.my[1]?-e.elemHeight:"bottom"===e.my[1]?e.elemHeight:0,i="top"===e.at[1]?e.targetHeight:"bottom"===e.at[1]?-e.targetHeight:0,r=-2*e.offset[1];l<0?((n=t.top+h+i+r+e.collisionHeight-o-n)<0||n<C(l))&&(t.top+=h+i+r):0<a&&(0<(s=t.top-e.collisionPosition.marginTop+h+i+r-s)||C(s)<a)&&(t.top+=h+i+r)}},flipfit:{left:function(){x.ui.position.flip.left.apply(this,arguments),x.ui.position.fit.left.apply(this,arguments)},top:function(){x.ui.position.flip.top.apply(this,arguments),x.ui.position.fit.top.apply(this,arguments)}}},x.ui.safeActiveElement=function(e){var i;try{i=e.activeElement}catch(t){i=e.body}return i=!(i=i||e.body).nodeName?e.body:i},x.ui.safeBlur=function(t){t&&"body"!==t.nodeName.toLowerCase()&&x(t).trigger("blur")},
/*!
 * jQuery UI Scroll Parent 1.13.0
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
x.fn.scrollParent=function(t){var e=this.css("position"),i="absolute"===e,n=t?/(auto|scroll|hidden)/:/(auto|scroll)/,t=this.parents().filter(function(){var t=x(this);return(!i||"static"!==t.css("position"))&&n.test(t.css("overflow")+t.css("overflow-y")+t.css("overflow-x"))}).eq(0);return"fixed"!==e&&t.length?t:x(this[0].ownerDocument||document)},
/*!
 * jQuery UI Tabbable 1.13.0
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
x.extend(x.expr.pseudos,{tabbable:function(t){var e=x.attr(t,"tabindex"),i=null!=e;return(!i||0<=e)&&x.ui.focusable(t,i)}}),
/*!
 * jQuery UI Unique ID 1.13.0
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
x.fn.extend({uniqueId:(f=0,function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++f)})}),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&x(this).removeAttr("id")})}});
/*!
 * jQuery UI Widget 1.13.0
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
var u,c=0,d=Array.prototype.hasOwnProperty,p=Array.prototype.slice;x.cleanData=(u=x.cleanData,function(t){for(var e,i,n=0;null!=(i=t[n]);n++)(e=x._data(i,"events"))&&e.remove&&x(i).triggerHandler("remove");u(t)}),x.widget=function(t,i,e){var n,o,s,r={},l=t.split(".")[0],a=l+"-"+(t=t.split(".")[1]);return e||(e=i,i=x.Widget),Array.isArray(e)&&(e=x.extend.apply(null,[{}].concat(e))),x.expr.pseudos[a.toLowerCase()]=function(t){return!!x.data(t,a)},x[l]=x[l]||{},n=x[l][t],o=x[l][t]=function(t,e){if(!this._createWidget)return new o(t,e);arguments.length&&this._createWidget(t,e)},x.extend(o,n,{version:e.version,_proto:x.extend({},e),_childConstructors:[]}),(s=new i).options=x.widget.extend({},s.options),x.each(e,function(e,n){function o(){return i.prototype[e].apply(this,arguments)}function s(t){return i.prototype[e].apply(this,t)}r[e]="function"==typeof n?function(){var t,e=this._super,i=this._superApply;return this._super=o,this._superApply=s,t=n.apply(this,arguments),this._super=e,this._superApply=i,t}:n}),o.prototype=x.widget.extend(s,{widgetEventPrefix:n&&s.widgetEventPrefix||t},r,{constructor:o,namespace:l,widgetName:t,widgetFullName:a}),n?(x.each(n._childConstructors,function(t,e){var i=e.prototype;x.widget(i.namespace+"."+i.widgetName,o,e._proto)}),delete n._childConstructors):i._childConstructors.push(o),x.widget.bridge(t,o),o},x.widget.extend=function(t){for(var e,i,n=p.call(arguments,1),o=0,s=n.length;o<s;o++)for(e in n[o])i=n[o][e],d.call(n[o],e)&&void 0!==i&&(x.isPlainObject(i)?t[e]=x.isPlainObject(t[e])?x.widget.extend({},t[e],i):x.widget.extend({},i):t[e]=i);return t},x.widget.bridge=function(s,e){var r=e.prototype.widgetFullName||s;x.fn[s]=function(i){var t="string"==typeof i,n=p.call(arguments,1),o=this;return t?this.length||"instance"!==i?this.each(function(){var t,e=x.data(this,r);return"instance"===i?(o=e,!1):e?"function"!=typeof e[i]||"_"===i.charAt(0)?x.error("no such method '"+i+"' for "+s+" widget instance"):(t=e[i].apply(e,n))!==e&&void 0!==t?(o=t&&t.jquery?o.pushStack(t.get()):t,!1):void 0:x.error("cannot call methods on "+s+" prior to initialization; attempted to call method '"+i+"'")}):o=void 0:(n.length&&(i=x.widget.extend.apply(null,[i].concat(n))),this.each(function(){var t=x.data(this,r);t?(t.option(i||{}),t._init&&t._init()):x.data(this,r,new e(i,this))})),o}},x.Widget=function(){},x.Widget._childConstructors=[],x.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:!1,create:null},_createWidget:function(t,e){e=x(e||this.defaultElement||this)[0],this.element=x(e),this.uuid=c++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=x(),this.hoverable=x(),this.focusable=x(),this.classesElementLookup={},e!==this&&(x.data(e,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===e&&this.destroy()}}),this.document=x(e.style?e.ownerDocument:e.document||e),this.window=x(this.document[0].defaultView||this.document[0].parentWindow)),this.options=x.widget.extend({},this.options,this._getCreateOptions(),t),this._create(),this.options.disabled&&this._setOptionDisabled(this.options.disabled),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:function(){return{}},_getCreateEventData:x.noop,_create:x.noop,_init:x.noop,destroy:function(){var i=this;this._destroy(),x.each(this.classesElementLookup,function(t,e){i._removeClass(e,t)}),this.element.off(this.eventNamespace).removeData(this.widgetFullName),this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),this.bindings.off(this.eventNamespace)},_destroy:x.noop,widget:function(){return this.element},option:function(t,e){var i,n,o,s=t;if(0===arguments.length)return x.widget.extend({},this.options);if("string"==typeof t)if(s={},t=(i=t.split(".")).shift(),i.length){for(n=s[t]=x.widget.extend({},this.options[t]),o=0;o<i.length-1;o++)n[i[o]]=n[i[o]]||{},n=n[i[o]];if(t=i.pop(),1===arguments.length)return void 0===n[t]?null:n[t];n[t]=e}else{if(1===arguments.length)return void 0===this.options[t]?null:this.options[t];s[t]=e}return this._setOptions(s),this},_setOptions:function(t){for(var e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return"classes"===t&&this._setOptionClasses(e),this.options[t]=e,"disabled"===t&&this._setOptionDisabled(e),this},_setOptionClasses:function(t){var e,i,n;for(e in t)n=this.classesElementLookup[e],t[e]!==this.options.classes[e]&&n&&n.length&&(i=x(n.get()),this._removeClass(n,e),i.addClass(this._classes({element:i,keys:e,classes:t,add:!0})))},_setOptionDisabled:function(t){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!t),t&&(this._removeClass(this.hoverable,null,"ui-state-hover"),this._removeClass(this.focusable,null,"ui-state-focus"))},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_classes:function(o){var s=[],r=this;function t(t,e){for(var i,n=0;n<t.length;n++)i=r.classesElementLookup[t[n]]||x(),i=o.add?(o.element.each(function(t,e){x.map(r.classesElementLookup,function(t){return t}).some(function(t){return t.is(e)})||r._on(x(e),{remove:"_untrackClassesElement"})}),x(x.uniqueSort(i.get().concat(o.element.get())))):x(i.not(o.element).get()),r.classesElementLookup[t[n]]=i,s.push(t[n]),e&&o.classes[t[n]]&&s.push(o.classes[t[n]])}return(o=x.extend({element:this.element,classes:this.options.classes||{}},o)).keys&&t(o.keys.match(/\S+/g)||[],!0),o.extra&&t(o.extra.match(/\S+/g)||[]),s.join(" ")},_untrackClassesElement:function(i){var n=this;x.each(n.classesElementLookup,function(t,e){-1!==x.inArray(i.target,e)&&(n.classesElementLookup[t]=x(e.not(i.target).get()))}),this._off(x(i.target))},_removeClass:function(t,e,i){return this._toggleClass(t,e,i,!1)},_addClass:function(t,e,i){return this._toggleClass(t,e,i,!0)},_toggleClass:function(t,e,i,n){var o="string"==typeof t||null===t,i={extra:o?e:i,keys:o?t:e,element:o?this.element:t,add:n="boolean"==typeof n?n:i};return i.element.toggleClass(this._classes(i),n),this},_on:function(o,s,t){var r,l=this;"boolean"!=typeof o&&(t=s,s=o,o=!1),t?(s=r=x(s),this.bindings=this.bindings.add(s)):(t=s,s=this.element,r=this.widget()),x.each(t,function(t,e){function i(){if(o||!0!==l.options.disabled&&!x(this).hasClass("ui-state-disabled"))return("string"==typeof e?l[e]:e).apply(l,arguments)}"string"!=typeof e&&(i.guid=e.guid=e.guid||i.guid||x.guid++);var n=t.match(/^([\w:-]*)\s*(.*)$/),t=n[1]+l.eventNamespace,n=n[2];n?r.on(t,n,i):s.on(t,i)})},_off:function(t,e){e=(e||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.off(e),this.bindings=x(this.bindings.not(t).get()),this.focusable=x(this.focusable.not(t).get()),this.hoverable=x(this.hoverable.not(t).get())},_delay:function(t,e){var i=this;return setTimeout(function(){return("string"==typeof t?i[t]:t).apply(i,arguments)},e||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){this._addClass(x(t.currentTarget),null,"ui-state-hover")},mouseleave:function(t){this._removeClass(x(t.currentTarget),null,"ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){this._addClass(x(t.currentTarget),null,"ui-state-focus")},focusout:function(t){this._removeClass(x(t.currentTarget),null,"ui-state-focus")}})},_trigger:function(t,e,i){var n,o,s=this.options[t];if(i=i||{},(e=x.Event(e)).type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),e.target=this.element[0],o=e.originalEvent)for(n in o)n in e||(e[n]=o[n]);return this.element.trigger(e,i),!("function"==typeof s&&!1===s.apply(this.element[0],[e].concat(i))||e.isDefaultPrevented())}},x.each({show:"fadeIn",hide:"fadeOut"},function(s,r){x.Widget.prototype["_"+s]=function(e,t,i){var n,o=(t="string"==typeof t?{effect:t}:t)?!0!==t&&"number"!=typeof t&&t.effect||r:s;"number"==typeof(t=t||{})?t={duration:t}:!0===t&&(t={}),n=!x.isEmptyObject(t),t.complete=i,t.delay&&e.delay(t.delay),n&&x.effects&&x.effects.effect[o]?e[s](t):o!==s&&e[o]?e[o](t.duration,t.easing,i):e.queue(function(t){x(this)[s](),i&&i.call(e[0]),t()})}})});
/*!
 * jQuery UI Menu 1.13.0
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","./core"],e):e(jQuery)}(function(a){"use strict";return a.widget("ui.menu",{version:"1.13.0",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-caret-1-e"},items:"> *",menus:"ul",position:{my:"left top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.mouseHandled=!1,this.lastMousePosition={x:null,y:null},this.element.uniqueId().attr({role:this.options.role,tabIndex:0}),this._addClass("ui-menu","ui-widget ui-widget-content"),this._on({"mousedown .ui-menu-item":function(e){e.preventDefault(),this._activateItem(e)},"click .ui-menu-item":function(e){var t=a(e.target),i=a(a.ui.safeActiveElement(this.document[0]));!this.mouseHandled&&t.not(".ui-state-disabled").length&&(this.select(e),e.isPropagationStopped()||(this.mouseHandled=!0),t.has(".ui-menu").length?this.expand(e):!this.element.is(":focus")&&i.closest(".ui-menu").length&&(this.element.trigger("focus",[!0]),this.active&&1===this.active.parents(".ui-menu").length&&clearTimeout(this.timer)))},"mouseenter .ui-menu-item":"_activateItem","mousemove .ui-menu-item":"_activateItem",mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(e,t){var i=this.active||this._menuItems().first();t||this.focus(e,i)},blur:function(e){this._delay(function(){a.contains(this.element[0],a.ui.safeActiveElement(this.document[0]))||this.collapseAll(e)})},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click:function(e){this._closeOnDocumentClick(e)&&this.collapseAll(e,!0),this.mouseHandled=!1}})},_activateItem:function(e){var t,i;this.previousFilter||e.clientX===this.lastMousePosition.x&&e.clientY===this.lastMousePosition.y||(this.lastMousePosition={x:e.clientX,y:e.clientY},t=a(e.target).closest(".ui-menu-item"),i=a(e.currentTarget),t[0]===i[0]&&(i.is(".ui-state-active")||(this._removeClass(i.siblings().children(".ui-state-active"),null,"ui-state-active"),this.focus(e,i))))},_destroy:function(){var e=this.element.find(".ui-menu-item").removeAttr("role aria-disabled").children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(),e.children().each(function(){var e=a(this);e.data("ui-menu-submenu-caret")&&e.remove()})},_keydown:function(e){var t,i,s,n=!0;switch(e.keyCode){case a.ui.keyCode.PAGE_UP:this.previousPage(e);break;case a.ui.keyCode.PAGE_DOWN:this.nextPage(e);break;case a.ui.keyCode.HOME:this._move("first","first",e);break;case a.ui.keyCode.END:this._move("last","last",e);break;case a.ui.keyCode.UP:this.previous(e);break;case a.ui.keyCode.DOWN:this.next(e);break;case a.ui.keyCode.LEFT:this.collapse(e);break;case a.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(e);break;case a.ui.keyCode.ENTER:case a.ui.keyCode.SPACE:this._activate(e);break;case a.ui.keyCode.ESCAPE:this.collapse(e);break;default:t=this.previousFilter||"",s=n=!1,i=96<=e.keyCode&&e.keyCode<=105?(e.keyCode-96).toString():String.fromCharCode(e.keyCode),clearTimeout(this.filterTimer),i===t?s=!0:i=t+i,t=this._filterMenuItems(i),(t=s&&-1!==t.index(this.active.next())?this.active.nextAll(".ui-menu-item"):t).length||(i=String.fromCharCode(e.keyCode),t=this._filterMenuItems(i)),t.length?(this.focus(e,t),this.previousFilter=i,this.filterTimer=this._delay(function(){delete this.previousFilter},1e3)):delete this.previousFilter}n&&e.preventDefault()},_activate:function(e){this.active&&!this.active.is(".ui-state-disabled")&&(this.active.children("[aria-haspopup='true']").length?this.expand(e):this.select(e))},refresh:function(){var e,t,s=this,n=this.options.icons.submenu,i=this.element.find(this.options.menus);this._toggleClass("ui-menu-icons",null,!!this.element.find(".ui-icon").length),t=i.filter(":not(.ui-menu)").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var e=a(this),t=e.prev(),i=a("<span>").data("ui-menu-submenu-caret",!0);s._addClass(i,"ui-menu-icon","ui-icon "+n),t.attr("aria-haspopup","true").prepend(i),e.attr("aria-labelledby",t.attr("id"))}),this._addClass(t,"ui-menu","ui-widget ui-widget-content ui-front"),(e=i.add(this.element).find(this.options.items)).not(".ui-menu-item").each(function(){var e=a(this);s._isDivider(e)&&s._addClass(e,"ui-menu-divider","ui-widget-content")}),i=(t=e.not(".ui-menu-item, .ui-menu-divider")).children().not(".ui-menu").uniqueId().attr({tabIndex:-1,role:this._itemRole()}),this._addClass(t,"ui-menu-item")._addClass(i,"ui-menu-item-wrapper"),e.filter(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!a.contains(this.element[0],this.active[0])&&this.blur()},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},_setOption:function(e,t){var i;"icons"===e&&(i=this.element.find(".ui-menu-icon"),this._removeClass(i,null,this.options.icons.submenu)._addClass(i,null,t.submenu)),this._super(e,t)},_setOptionDisabled:function(e){this._super(e),this.element.attr("aria-disabled",String(e)),this._toggleClass(null,"ui-state-disabled",!!e)},focus:function(e,t){var i;this.blur(e,e&&"focus"===e.type),this._scrollIntoView(t),this.active=t.first(),i=this.active.children(".ui-menu-item-wrapper"),this._addClass(i,null,"ui-state-active"),this.options.role&&this.element.attr("aria-activedescendant",i.attr("id")),i=this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"),this._addClass(i,null,"ui-state-active"),e&&"keydown"===e.type?this._close():this.timer=this._delay(function(){this._close()},this.delay),(i=t.children(".ui-menu")).length&&e&&/^mouse/.test(e.type)&&this._startOpening(i),this.activeMenu=t.parent(),this._trigger("focus",e,{item:t})},_scrollIntoView:function(e){var t,i,s;this._hasScroll()&&(i=parseFloat(a.css(this.activeMenu[0],"borderTopWidth"))||0,s=parseFloat(a.css(this.activeMenu[0],"paddingTop"))||0,t=e.offset().top-this.activeMenu.offset().top-i-s,i=this.activeMenu.scrollTop(),s=this.activeMenu.height(),e=e.outerHeight(),t<0?this.activeMenu.scrollTop(i+t):s<t+e&&this.activeMenu.scrollTop(i+t-s+e))},blur:function(e,t){t||clearTimeout(this.timer),this.active&&(this._removeClass(this.active.children(".ui-menu-item-wrapper"),null,"ui-state-active"),this._trigger("blur",e,{item:this.active}),this.active=null)},_startOpening:function(e){clearTimeout(this.timer),"true"===e.attr("aria-hidden")&&(this.timer=this._delay(function(){this._close(),this._open(e)},this.delay))},_open:function(e){var t=a.extend({of:this.active},this.options.position);clearTimeout(this.timer),this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden","true"),e.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(t)},collapseAll:function(t,i){clearTimeout(this.timer),this.timer=this._delay(function(){var e=i?this.element:a(t&&t.target).closest(this.element.find(".ui-menu"));e.length||(e=this.element),this._close(e),this.blur(t),this._removeClass(e.find(".ui-state-active"),null,"ui-state-active"),this.activeMenu=e},i?0:this.delay)},_close:function(e){(e=e||(this.active?this.active.parent():this.element)).find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false")},_closeOnDocumentClick:function(e){return!a(e.target).closest(".ui-menu").length},_isDivider:function(e){return!/[^\-\u2014\u2013\s]/.test(e.text())},collapse:function(e){var t=this.active&&this.active.parent().closest(".ui-menu-item",this.element);t&&t.length&&(this._close(),this.focus(e,t))},expand:function(e){var t=this.active&&this._menuItems(this.active.children(".ui-menu")).first();t&&t.length&&(this._open(t.parent()),this._delay(function(){this.focus(e,t)}))},next:function(e){this._move("next","first",e)},previous:function(e){this._move("prev","last",e)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_menuItems:function(e){return(e||this.element).find(this.options.items).filter(".ui-menu-item")},_move:function(e,t,i){var s;(s=this.active?"first"===e||"last"===e?this.active["first"===e?"prevAll":"nextAll"](".ui-menu-item").last():this.active[e+"All"](".ui-menu-item").first():s)&&s.length&&this.active||(s=this._menuItems(this.activeMenu)[t]()),this.focus(i,s)},nextPage:function(e){var t,i,s;this.active?this.isLastItem()||(this._hasScroll()?(i=this.active.offset().top,s=this.element.innerHeight(),0===a.fn.jquery.indexOf("3.2.")&&(s+=this.element[0].offsetHeight-this.element.outerHeight()),this.active.nextAll(".ui-menu-item").each(function(){return(t=a(this)).offset().top-i-s<0}),this.focus(e,t)):this.focus(e,this._menuItems(this.activeMenu)[this.active?"last":"first"]())):this.next(e)},previousPage:function(e){var t,i,s;this.active?this.isFirstItem()||(this._hasScroll()?(i=this.active.offset().top,s=this.element.innerHeight(),0===a.fn.jquery.indexOf("3.2.")&&(s+=this.element[0].offsetHeight-this.element.outerHeight()),this.active.prevAll(".ui-menu-item").each(function(){return 0<(t=a(this)).offset().top-i+s}),this.focus(e,t)):this.focus(e,this._menuItems(this.activeMenu).first())):this.next(e)},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(e){this.active=this.active||a(e.target).closest(".ui-menu-item");var t={item:this.active};this.active.has(".ui-menu").length||this.collapseAll(e,!0),this._trigger("select",e,t)},_filterMenuItems:function(e){var e=e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&"),t=new RegExp("^"+e,"i");return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function(){return t.test(String.prototype.trim.call(a(this).children(".ui-menu-item-wrapper").text()))})}})});
var runtime=function(a){"use strict";var u,t=Object.prototype,h=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},n=r.iterator||"@@iterator",e=r.asyncIterator||"@@asyncIterator",o=r.toStringTag||"@@toStringTag";function i(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{i({},"")}catch(t){i=function(t,r,e){return t[r]=e}}function c(t,r,e,n){var o,i,a,c,r=r&&r.prototype instanceof v?r:v,r=Object.create(r.prototype),n=new j(n||[]);return r._invoke=(o=t,i=e,a=n,c=l,function(t,r){if(c===p)throw new Error("Generator is already running");if(c===y){if("throw"===t)throw r;return k()}for(a.method=t,a.arg=r;;){var e=a.delegate;if(e){var n=function t(r,e){var n=r.iterator[e.method];if(n===u){if(e.delegate=null,"throw"===e.method){if(r.iterator.return&&(e.method="return",e.arg=u,t(r,e),"throw"===e.method))return g;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var n=f(n,r.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,g;n=n.arg;if(!n)return e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g;{if(!n.done)return n;e[r.resultName]=n.value,e.next=r.nextLoc,"return"!==e.method&&(e.method="next",e.arg=u)}e.delegate=null;return g}(e,a);if(n){if(n===g)continue;return n}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(c===l)throw c=y,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);c=p;n=f(o,i,a);if("normal"===n.type){if(c=a.done?y:s,n.arg!==g)return{value:n.arg,done:a.done}}else"throw"===n.type&&(c=y,a.method="throw",a.arg=n.arg)}}),r}function f(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}a.wrap=c;var l="suspendedStart",s="suspendedYield",p="executing",y="completed",g={};function v(){}function d(){}function m(){}var w={};i(w,n,function(){return this});r=Object.getPrototypeOf,r=r&&r(r(O([])));r&&r!==t&&h.call(r,n)&&(w=r);var L=m.prototype=v.prototype=Object.create(w);function x(t){["next","throw","return"].forEach(function(r){i(t,r,function(t){return this._invoke(r,t)})})}function b(a,c){var r;this._invoke=function(e,n){function t(){return new c(function(t,r){!function r(t,e,n,o){t=f(a[t],a,e);if("throw"!==t.type){var i=t.arg;return(e=i.value)&&"object"==typeof e&&h.call(e,"__await")?c.resolve(e.__await).then(function(t){r("next",t,n,o)},function(t){r("throw",t,n,o)}):c.resolve(e).then(function(t){i.value=t,n(i)},function(t){return r("throw",t,n,o)})}o(t.arg)}(e,n,t,r)})}return r=r?r.then(t,t):t()}}function E(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function _(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function O(r){if(r){var t=r[n];if(t)return t.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var e=-1,t=function t(){for(;++e<r.length;)if(h.call(r,e))return t.value=r[e],t.done=!1,t;return t.value=u,t.done=!0,t};return t.next=t}}return{next:k}}function k(){return{value:u,done:!0}}return i(L,"constructor",d.prototype=m),i(m,"constructor",d),d.displayName=i(m,o,"GeneratorFunction"),a.isGeneratorFunction=function(t){t="function"==typeof t&&t.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},a.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,i(t,o,"GeneratorFunction")),t.prototype=Object.create(L),t},a.awrap=function(t){return{__await:t}},x(b.prototype),i(b.prototype,e,function(){return this}),a.AsyncIterator=b,a.async=function(t,r,e,n,o){void 0===o&&(o=Promise);var i=new b(c(t,r,e,n),o);return a.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},x(L),i(L,o,"Generator"),i(L,n,function(){return this}),i(L,"toString",function(){return"[object Generator]"}),a.keys=function(e){var t,n=[];for(t in e)n.push(t);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},a.values=O,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=u,this.done=!1,this.delegate=null,this.method="next",this.arg=u,this.tryEntries.forEach(_),!t)for(var r in this)"t"===r.charAt(0)&&h.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=u)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function t(t,r){return i.type="throw",i.arg=e,n.next=t,r&&(n.method="next",n.arg=u),!!r}for(var r=this.tryEntries.length-1;0<=r;--r){var o=this.tryEntries[r],i=o.completion;if("root"===o.tryLoc)return t("end");if(o.tryLoc<=this.prev){var a=h.call(o,"catchLoc"),c=h.call(o,"finallyLoc");if(a&&c){if(this.prev<o.catchLoc)return t(o.catchLoc,!0);if(this.prev<o.finallyLoc)return t(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return t(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return t(o.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;0<=e;--e){var n=this.tryEntries[e];if(n.tryLoc<=this.prev&&h.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}var i=(o=o&&("break"===t||"continue"===t)&&o.tryLoc<=r&&r<=o.finallyLoc?null:o)?o.completion:{};return i.type=t,i.arg=r,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(i)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),g},finish:function(t){for(var r=this.tryEntries.length-1;0<=r;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),_(e),g}},catch:function(t){for(var r=this.tryEntries.length-1;0<=r;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n,o=e.completion;return"throw"===o.type&&(n=o.arg,_(e)),n}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:O(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=u),g}},a}("object"==typeof module?module.exports:{});try{regeneratorRuntime=runtime}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=runtime:Function("r","regeneratorRuntime = r")(runtime)};
/**
 * core-js 3.19.1
 * https://github.com/zloirock/core-js
 * License: http://rock.mit-license.org
 * © 2021 Denis Pushkarev (zloirock.ru)
 */
!function(C){"use strict";var r,e,o;e={},(o=function(t){if(e[t])return e[t].exports;var n=e[t]={i:t,l:!1,exports:{}};return r[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}).m=r=[function(t,n,r){r(1),r(67),r(68),r(72),r(79),t.exports=r(85)},function(t,n,r){var e=r(2),o=r(36),i=r(57),u=r(56),r=r(62);e({target:"Array",proto:!0},{at:function(t){var n=o(this),r=i(n),t=u(t),t=0<=t?t:r+t;return t<0||r<=t?C:n[t]}}),r("at")},function(t,n,r){var a=r(3),p=r(4).f,s=r(40),l=r(43),y=r(34),v=r(50),d=r(61);t.exports=function(t,n){var r,e,o,i=t.target,u=t.global,c=t.stat,f=u?a:c?a[i]||y(i,{}):(a[i]||{}).prototype;if(f)for(r in n){if(e=n[r],o=t.noTargetGet?(o=p(f,r))&&o.value:f[r],!d(u?r:i+(c?".":"#")+r,t.forced)&&o!==C){if(typeof e==typeof o)continue;v(e,o)}(t.sham||o&&o.sham)&&s(e,"sham",!0),l(f,r,e,t)}}},function(t,n){function r(t){return t&&t.Math==Math&&t}t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof global&&global)||function(){return this}()||Function("return this")()},function(t,n,r){var e=r(5),o=r(7),i=r(8),u=r(9),c=r(10),f=r(15),a=r(35),p=r(38),s=Object.getOwnPropertyDescriptor;n.f=e?s:function(t,n){if(t=c(t),n=f(n),p)try{return s(t,n)}catch(t){}if(a(t,n))return u(!o(i.f,t,n),t[n])}},function(t,n,r){r=r(6);t.exports=!r(function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){var r=Function.prototype.call;t.exports=r.bind?r.bind(r):function(){return r.apply(r,arguments)}},function(t,n,r){var e={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!e.call({1:2},1);n.f=i?function(t){t=o(this,t);return!!t&&t.enumerable}:e},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,r){var e=r(11),o=r(14);t.exports=function(t){return e(o(t))}},function(t,n,r){var e=r(3),o=r(12),i=r(6),u=r(13),c=e.Object,f=o("".split);t.exports=i(function(){return!c("z").propertyIsEnumerable(0)})?function(t){return"String"==u(t)?f(t,""):c(t)}:c},function(t,n){var r=Function.prototype,e=r.bind,o=r.call,i=e&&e.bind(o);t.exports=e?function(t){return t&&i(o,t)}:function(t){return t&&function(){return o.apply(t,arguments)}}},function(t,n,r){var r=r(12),e=r({}.toString),o=r("".slice);t.exports=function(t){return o(e(t),8,-1)}},function(t,n,r){var e=r(3).TypeError;t.exports=function(t){if(t==C)throw e("Can't call method on "+t);return t}},function(t,n,r){var e=r(16),o=r(19);t.exports=function(t){t=e(t,"string");return o(t)?t:t+""}},function(t,n,r){var e=r(3),o=r(7),i=r(17),u=r(19),c=r(26),f=r(29),r=r(30),a=e.TypeError,p=r("toPrimitive");t.exports=function(t,n){if(!i(t)||u(t))return t;var r=c(t,p);if(r){if(r=o(r,t,n=n===C?"default":n),!i(r)||u(r))return r;throw a("Can't convert object to primitive value")}return f(t,n=n===C?"number":n)}},function(t,n,r){var e=r(18);t.exports=function(t){return"object"==typeof t?null!==t:e(t)}},function(t,n){t.exports=function(t){return"function"==typeof t}},function(t,n,r){var e=r(3),o=r(20),i=r(18),u=r(21),r=r(22),c=e.Object;t.exports=r?function(t){return"symbol"==typeof t}:function(t){var n=o("Symbol");return i(n)&&u(n.prototype,c(t))}},function(t,n,r){var e=r(3),o=r(18);t.exports=function(t,n){return arguments.length<2?(r=e[t],o(r)?r:C):e[t]&&e[t][n];var r}},function(t,n,r){r=r(12);t.exports=r({}.isPrototypeOf)},function(t,n,r){r=r(23);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,n,r){var e=r(24),r=r(6);t.exports=!!Object.getOwnPropertySymbols&&!r(function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&e&&e<41})},function(t,n,r){var e,o,i=r(3),u=r(25),r=i.process,i=i.Deno,i=r&&r.versions||i&&i.version,i=i&&i.v8;!(o=i?0<(e=i.split("."))[0]&&e[0]<4?1:+(e[0]+e[1]):o)&&u&&(!(e=u.match(/Edge\/(\d+)/))||74<=e[1])&&(e=u.match(/Chrome\/(\d+)/))&&(o=+e[1]),t.exports=o},function(t,n,r){r=r(20);t.exports=r("navigator","userAgent")||""},function(t,n,r){var e=r(27);t.exports=function(t,n){n=t[n];return null==n?C:e(n)}},function(t,n,r){var e=r(3),o=r(18),i=r(28),u=e.TypeError;t.exports=function(t){if(o(t))return t;throw u(i(t)+" is not a function")}},function(t,n,r){var e=r(3).String;t.exports=function(t){try{return e(t)}catch(t){return"Object"}}},function(t,n,r){var e=r(3),o=r(7),i=r(18),u=r(17),c=e.TypeError;t.exports=function(t,n){var r,e;if("string"===n&&i(r=t.toString)&&!u(e=o(r,t)))return e;if(i(r=t.valueOf)&&!u(e=o(r,t)))return e;if("string"!==n&&i(r=t.toString)&&!u(e=o(r,t)))return e;throw c("Can't convert object to primitive value")}},function(t,n,r){var e=r(3),o=r(31),i=r(35),u=r(37),c=r(23),f=r(22),a=o("wks"),p=e.Symbol,s=p&&p.for,l=f?p:p&&p.withoutSetter||u;t.exports=function(t){var n;return i(a,t)&&(c||"string"==typeof a[t])||(n="Symbol."+t,c&&i(p,t)?a[t]=p[t]:a[t]=(f&&s?s:l)(n)),a[t]}},function(t,n,r){var e=r(32),o=r(33);(t.exports=function(t,n){return o[t]||(o[t]=n!==C?n:{})})("versions",[]).push({version:"3.19.1",mode:e?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},function(t,n){t.exports=!1},function(t,n,r){var e=r(3),o=r(34),r="__core-js_shared__",r=e[r]||o(r,{});t.exports=r},function(t,n,r){var e=r(3),o=Object.defineProperty;t.exports=function(n,r){try{o(e,n,{value:r,configurable:!0,writable:!0})}catch(t){e[n]=r}return r}},function(t,n,r){var e=r(12),o=r(36),i=e({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,n){return i(o(t),n)}},function(t,n,r){var e=r(3),o=r(14),i=e.Object;t.exports=function(t){return i(o(t))}},function(t,n,r){var r=r(12),e=0,o=Math.random(),i=r(1..toString);t.exports=function(t){return"Symbol("+(t===C?"":t)+")_"+i(++e+o,36)}},function(t,n,r){var e=r(5),o=r(6),i=r(39);t.exports=!e&&!o(function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a})},function(t,n,r){var e=r(3),r=r(17),o=e.document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,n,r){var e=r(5),o=r(41),i=r(9);t.exports=e?function(t,n,r){return o.f(t,n,i(1,r))}:function(t,n,r){return t[n]=r,t}},function(t,n,r){var e=r(3),o=r(5),i=r(38),u=r(42),c=r(15),f=e.TypeError,a=Object.defineProperty;n.f=o?a:function(t,n,r){if(u(t),n=c(n),u(r),i)try{return a(t,n,r)}catch(t){}if("get"in r||"set"in r)throw f("Accessors not supported");return"value"in r&&(t[n]=r.value),t}},function(t,n,r){var e=r(3),o=r(17),i=e.String,u=e.TypeError;t.exports=function(t){if(o(t))return t;throw u(i(t)+" is not an object")}},function(t,n,r){var f=r(3),a=r(18),p=r(35),s=r(40),l=r(34),e=r(44),o=r(45),y=r(49).CONFIGURABLE,i=o.get,v=o.enforce,d=String(String).split("String");(t.exports=function(t,n,r,e){var o=!!e&&!!e.unsafe,i=!!e&&!!e.enumerable,u=!!e&&!!e.noTargetGet,c=e&&e.name!==C?e.name:n;a(r)&&("Symbol("===String(c).slice(0,7)&&(c="["+String(c).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!p(r,"name")||y&&r.name!==c)&&s(r,"name",c),(e=v(r)).source||(e.source=d.join("string"==typeof c?c:""))),t!==f?(o?!u&&t[n]&&(i=!0):delete t[n],i?t[n]=r:s(t,n,r)):i?t[n]=r:l(n,r)})(Function.prototype,"toString",function(){return a(this)&&i(this).source||e(this)})},function(t,n,r){var e=r(12),o=r(18),r=r(33),i=e(Function.toString);o(r.inspectSource)||(r.inspectSource=function(t){return i(t)}),t.exports=r.inspectSource},function(t,n,r){var e,o,i,u,c,f,a,p,s=r(46),l=r(3),y=r(12),v=r(17),d=r(40),b=r(35),g=r(33),h=r(47),r=r(48),m="Object already initialized",x=l.TypeError,l=l.WeakMap;a=s||g.state?(e=g.state||(g.state=new l),o=y(e.get),i=y(e.has),u=y(e.set),c=function(t,n){if(i(e,t))throw new x(m);return n.facade=t,u(e,t,n),n},f=function(t){return o(e,t)||{}},function(t){return i(e,t)}):(r[p=h("state")]=!0,c=function(t,n){if(b(t,p))throw new x(m);return n.facade=t,d(t,p,n),n},f=function(t){return b(t,p)?t[p]:{}},function(t){return b(t,p)}),t.exports={set:c,get:f,has:a,enforce:function(t){return a(t)?f(t):c(t,{})},getterFor:function(r){return function(t){var n;if(!v(t)||(n=f(t)).type!==r)throw x("Incompatible receiver, "+r+" required");return n}}}},function(t,n,r){var e=r(3),o=r(18),r=r(44),e=e.WeakMap;t.exports=o(e)&&/native code/.test(r(e))},function(t,n,r){var e=r(31),o=r(37),i=e("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,n){t.exports={}},function(t,n,r){var e=r(5),o=r(35),i=Function.prototype,u=e&&Object.getOwnPropertyDescriptor,r=o(i,"name"),o=r&&"something"===function(){}.name,i=r&&(!e||e&&u(i,"name").configurable);t.exports={EXISTS:r,PROPER:o,CONFIGURABLE:i}},function(t,n,r){var c=r(35),f=r(51),a=r(4),p=r(41);t.exports=function(t,n){for(var r=f(n),e=p.f,o=a.f,i=0;i<r.length;i++){var u=r[i];c(t,u)||e(t,u,o(n,u))}}},function(t,n,r){var e=r(20),o=r(12),i=r(52),u=r(60),c=r(42),f=o([].concat);t.exports=e("Reflect","ownKeys")||function(t){var n=i.f(c(t)),r=u.f;return r?f(n,r(t)):n}},function(t,n,r){var e=r(53),o=r(59).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return e(t,o)}},function(t,n,r){var e=r(12),u=r(35),c=r(10),f=r(54).indexOf,a=r(48),p=e([].push);t.exports=function(t,n){var r,e=c(t),o=0,i=[];for(r in e)!u(a,r)&&u(e,r)&&p(i,r);for(;n.length>o;)u(e,r=n[o++])&&(~f(i,r)||p(i,r));return i}},function(t,n,r){var f=r(10),a=r(55),p=r(57),r=function(c){return function(t,n,r){var e,o=f(t),i=p(o),u=a(r,i);if(c&&n!=n){for(;u<i;)if((e=o[u++])!=e)return!0}else for(;u<i;u++)if((c||u in o)&&o[u]===n)return c||u||0;return!c&&-1}};t.exports={includes:r(!0),indexOf:r(!1)}},function(t,n,r){var e=r(56),o=Math.max,i=Math.min;t.exports=function(t,n){t=e(t);return t<0?o(t+n,0):i(t,n)}},function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){t=+t;return t!=t||0==t?0:(0<t?e:r)(t)}},function(t,n,r){var e=r(58);t.exports=function(t){return e(t.length)}},function(t,n,r){var e=r(56),o=Math.min;t.exports=function(t){return 0<t?o(e(t),9007199254740991):0}},function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,r){var e=r(6),o=r(18),i=/#|\.prototype\./,r=function(t,n){t=c[u(t)];return t==a||t!=f&&(o(n)?e(n):!!n)},u=r.normalize=function(t){return String(t).replace(i,".").toLowerCase()},c=r.data={},f=r.NATIVE="N",a=r.POLYFILL="P";t.exports=r},function(t,n,r){var e=r(30),o=r(63),r=r(41),i=e("unscopables"),u=Array.prototype;u[i]==C&&r.f(u,i,{configurable:!0,value:o(null)}),t.exports=function(t){u[i][t]=!0}},function(t,n,r){function e(){}function o(t){return"<script>"+t+"</"+v+">"}function i(t){t.write(o("")),t.close();var n=t.parentWindow.Object;return t=null,n}var u,c=r(42),f=r(64),a=r(59),p=r(48),s=r(66),l=r(39),r=r(47),y="prototype",v="script",d=r("IE_PROTO"),b=function(){try{u=new ActiveXObject("htmlfile")}catch(t){}var t;b="undefined"==typeof document||document.domain&&u?i(u):((t=l("iframe")).style.display="none",s.appendChild(t),t.src=String("javascript:"),(t=t.contentWindow.document).open(),t.write(o("document.F=Object")),t.close(),t.F);for(var n=a.length;n--;)delete b[y][a[n]];return b()};p[d]=!0,t.exports=Object.create||function(t,n){var r;return null!==t?(e[y]=c(t),r=new e,e[y]=null,r[d]=t):r=b(),n===C?r:f(r,n)}},function(t,n,r){var e=r(5),c=r(41),f=r(42),a=r(10),p=r(65);t.exports=e?Object.defineProperties:function(t,n){f(t);for(var r,e=a(n),o=p(n),i=o.length,u=0;u<i;)c.f(t,r=o[u++],e[r]);return t}},function(t,n,r){var e=r(53),o=r(59);t.exports=Object.keys||function(t){return e(t,o)}},function(t,n,r){r=r(20);t.exports=r("document","documentElement")},function(t,n,r){r(2)({target:"Object",stat:!0},{hasOwn:r(35)})},function(t,n,r){var e=r(2),o=r(12),i=r(14),u=r(56),c=r(69),r=r(6),f=o("".charAt);e({target:"String",proto:!0,forced:r(function(){return"\ud842"!=="𠮷".at(0)})},{at:function(t){var n=c(i(this)),r=n.length,t=u(t),t=0<=t?t:r+t;return t<0||r<=t?C:f(n,t)}})},function(t,n,r){var e=r(3),o=r(70),i=e.String;t.exports=function(t){if("Symbol"===o(t))throw TypeError("Cannot convert a Symbol value to a string");return i(t)}},function(t,n,r){var e=r(3),o=r(71),i=r(18),u=r(13),c=r(30)("toStringTag"),f=e.Object,a="Arguments"==u(function(){return arguments}());t.exports=o?u:function(t){var n;return t===C?"Undefined":null===t?"Null":"string"==typeof(t=function(t,n){try{return t[n]}catch(t){}}(n=f(t),c))?t:a?u(n):"Object"==(t=u(n))&&i(n.callee)?"Arguments":t}},function(t,n,r){var e={};e[r(30)("toStringTag")]="z",t.exports="[object z]"===String(e)},function(t,n,r){var e=r(73),o=r(57),i=r(56),u=e.aTypedArray;(0,e.exportTypedArrayMethod)("at",function(t){var n=u(this),r=o(n),t=i(t),t=0<=t?t:r+t;return t<0||r<=t?C:n[t]})},function(t,n,r){function e(t){return!!s(t)&&(t=y(t),l(M,t)||l(R,t))}var o,i,u,c=r(74),f=r(5),a=r(3),p=r(18),s=r(17),l=r(35),y=r(70),v=r(28),d=r(40),b=r(43),g=r(41).f,h=r(21),m=r(75),x=r(77),O=r(30),S=r(37),w=a.Int8Array,j=w&&w.prototype,r=a.Uint8ClampedArray,r=r&&r.prototype,A=w&&m(w),T=j&&m(j),w=Object.prototype,P=a.TypeError,O=O("toStringTag"),_=S("TYPED_ARRAY_TAG"),E=S("TYPED_ARRAY_CONSTRUCTOR"),I=c&&!!x&&"Opera"!==y(a.opera),c=!1,M={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},R={BigInt64Array:8,BigUint64Array:8};for(o in M)(u=(i=a[o])&&i.prototype)?d(u,E,i):I=!1;for(o in R)(u=(i=a[o])&&i.prototype)&&d(u,E,i);if((!I||!p(A)||A===Function.prototype)&&(A=function(){throw P("Incorrect invocation")},I))for(o in M)a[o]&&x(a[o],A);if((!I||!T||T===w)&&(T=A.prototype,I))for(o in M)a[o]&&x(a[o].prototype,T);if(I&&m(r)!==T&&x(r,T),f&&!l(T,O))for(o in c=!0,g(T,O,{get:function(){return s(this)?this[_]:C}}),M)a[o]&&d(a[o],_,o);t.exports={NATIVE_ARRAY_BUFFER_VIEWS:I,TYPED_ARRAY_CONSTRUCTOR:E,TYPED_ARRAY_TAG:c&&_,aTypedArray:function(t){if(e(t))return t;throw P("Target is not a typed array")},aTypedArrayConstructor:function(t){if(p(t)&&(!x||h(A,t)))return t;throw P(v(t)+" is not a typed array constructor")},exportTypedArrayMethod:function(t,n,r){if(f){if(r)for(var e in M){e=a[e];if(e&&l(e.prototype,t))try{delete e.prototype[t]}catch(t){}}T[t]&&!r||b(T,t,!r&&I&&j[t]||n)}},exportTypedArrayStaticMethod:function(t,n,r){var e,o;if(f){if(x){if(r)for(e in M)if((o=a[e])&&l(o,t))try{delete o[t]}catch(t){}if(A[t]&&!r)return;try{return b(A,t,!r&&I&&A[t]||n)}catch(t){}}for(e in M)!(o=a[e])||o[t]&&!r||b(o,t,n)}},isView:function(t){if(!s(t))return!1;t=y(t);return"DataView"===t||l(M,t)||l(R,t)},isTypedArray:e,TypedArray:A,TypedArrayPrototype:T}},function(t,n){t.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},function(t,n,r){var e=r(3),o=r(35),i=r(18),u=r(36),c=r(47),r=r(76),f=c("IE_PROTO"),a=e.Object,p=a.prototype;t.exports=r?a.getPrototypeOf:function(t){var n=u(t);if(o(n,f))return n[f];t=n.constructor;return i(t)&&n instanceof t?t.prototype:n instanceof a?p:null}},function(t,n,r){r=r(6);t.exports=!r(function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype})},function(t,n,r){var o=r(12),i=r(42),u=r(78);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var r,e=!1,t={};try{(r=o(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set))(t,[]),e=t instanceof Array}catch(t){}return function(t,n){return i(t),u(n),e?r(t,n):t.__proto__=n,t}}():C)},function(t,n,r){var e=r(3),o=r(18),i=e.String,u=e.TypeError;t.exports=function(t){if("object"==typeof t||o(t))return t;throw u("Can't set "+i(t)+" as a prototype")}},function(t,n,r){var e=r(3),o=r(12),i=r(6),u=r(27),c=r(80),f=r(73),a=r(82),p=r(83),s=r(24),l=r(84),y=e.Array,v=f.aTypedArray,f=f.exportTypedArrayMethod,d=e.Uint16Array,b=d&&o(d.prototype.sort),o=!(!b||i(function(){b(new d(2),null)})&&i(function(){b(new d(2),{})})),g=!!b&&!i(function(){if(s)return s<74;if(a)return a<67;if(p)return!0;if(l)return l<602;for(var t,n=new d(516),r=y(516),e=0;e<516;e++)t=e%4,n[e]=515-e,r[e]=e-2*t+3;for(b(n,function(t,n){return(t/4|0)-(n/4|0)}),e=0;e<516;e++)if(n[e]!==r[e])return!0});f("sort",function(t){return t!==C&&u(t),g?b(this,t):c(v(this),(r=t,function(t,n){return r!==C?+r(t,n)||0:n!=n?-1:t!=t?1:0===t&&0===n?0<1/t&&1/n<0?1:-1:n<t}));var r},!g||o)},function(t,n,r){var o=r(81),i=Math.floor,u=function(t,n){var r=t.length,e=i(r/2);return r<8?c(t,n):f(t,u(o(t,0,e),n),u(o(t,e),n),n)},c=function(t,n){for(var r,e,o=t.length,i=1;i<o;){for(r=t[e=i];e&&0<n(t[e-1],r);)t[e]=t[--e];e!==i++&&(t[e]=r)}return t},f=function(t,n,r,e){for(var o=n.length,i=r.length,u=0,c=0;u<o||c<i;)t[u+c]=u<o&&c<i?e(n[u],r[c])<=0?n[u++]:r[c++]:u<o?n[u++]:r[c++];return t};t.exports=u},function(t,n,r){r=r(12);t.exports=r([].slice)},function(t,n,r){r=r(25).match(/firefox\/(\d+)/i);t.exports=!!r&&+r[1]},function(t,n,r){r=r(25);t.exports=/MSIE|Trident/.test(r)},function(t,n,r){r=r(25).match(/AppleWebKit\/(\d+)\./);t.exports=!!r&&+r[1]},function(t,n,r){var e=r(2),o=r(3),r=r(86);e({global:!0,bind:!0,enumerable:!0,forced:!o.setImmediate||!o.clearImmediate},{setImmediate:r.set,clearImmediate:r.clear})},function(t,n,r){var e,o,i=r(3),u=r(87),c=r(88),f=r(18),a=r(35),p=r(6),s=r(66),l=r(81),y=r(39),v=r(89),d=r(90),b=i.setImmediate,g=i.clearImmediate,h=i.process,m=i.Dispatch,x=i.Function,O=i.MessageChannel,S=i.String,w=0,j={},A="onreadystatechange";try{e=i.location}catch(t){}function T(t){var n;a(j,t)&&(n=j[t],delete j[t],n())}function P(t){return function(){T(t)}}function _(t){T(t.data)}r=function(t){i.postMessage(S(t),e.protocol+"//"+e.host)};b&&g||(b=function(t){var n=l(arguments,1);return j[++w]=function(){u(f(t)?t:x(t),C,n)},o(w),w},g=function(t){delete j[t]},d?o=function(t){h.nextTick(P(t))}:m&&m.now?o=function(t){m.now(P(t))}:O&&!v?(O=(v=new O).port2,v.port1.onmessage=_,o=c(O.postMessage,O)):i.addEventListener&&f(i.postMessage)&&!i.importScripts&&e&&"file:"!==e.protocol&&!p(r)?(o=r,i.addEventListener("message",_,!1)):o=A in y("script")?function(t){s.appendChild(y("script"))[A]=function(){s.removeChild(this),T(t)}}:function(t){setTimeout(P(t),0)}),t.exports={set:b,clear:g}},function(t,n){var r=Function.prototype,e=r.apply,o=r.bind,i=r.call;t.exports="object"==typeof Reflect&&Reflect.apply||(o?i.bind(e):function(){return i.apply(e,arguments)})},function(t,n,r){var e=r(12),o=r(27),i=e(e.bind);t.exports=function(t,n){return o(t),n===C?t:i?i(t,n):function(){return t.apply(n,arguments)}}},function(t,n,r){r=r(25);t.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(r)},function(t,n,r){var e=r(13),r=r(3);t.exports="process"==e(r.process)}],o.c=e,o.d=function(t,n,r){o.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(n,t){if(1&t&&(n=o(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var e in n)o.d(r,e,function(t){return n[t]}.bind(null,e));return r},o.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(n,"a",n),n},o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},o.p="",o(o.s=0)}();
/*! This file is auto-generated */
this.wp=this.wp||{},this.wp.domReady=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="2oG7")}({"2oG7":function(e,t,n){"use strict";function r(e){"undefined"!=typeof document&&("complete"!==document.readyState&&"interactive"!==document.readyState?document.addEventListener("DOMContentLoaded",e):e())}n.r(t),n.d(t,"default",(function(){return r}))}}).default;
/*! This file is auto-generated */
this.wp=this.wp||{},this.wp.hooks=function(t){var n={};function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=n,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)r.d(e,o,function(n){return t[n]}.bind(null,o));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="",r(r.s="gEOj")}({gEOj:function(t,n,r){"use strict";r.r(n),r.d(n,"defaultHooks",(function(){return p})),r.d(n,"createHooks",(function(){return h})),r.d(n,"addAction",(function(){return v})),r.d(n,"addFilter",(function(){return m})),r.d(n,"removeAction",(function(){return A})),r.d(n,"removeFilter",(function(){return _})),r.d(n,"hasAction",(function(){return g})),r.d(n,"hasFilter",(function(){return y})),r.d(n,"removeAllActions",(function(){return b})),r.d(n,"removeAllFilters",(function(){return F})),r.d(n,"doAction",(function(){return k})),r.d(n,"applyFilters",(function(){return x})),r.d(n,"currentAction",(function(){return j})),r.d(n,"currentFilter",(function(){return O})),r.d(n,"doingAction",(function(){return I})),r.d(n,"doingFilter",(function(){return T})),r.d(n,"didAction",(function(){return w})),r.d(n,"didFilter",(function(){return P})),r.d(n,"actions",(function(){return S})),r.d(n,"filters",(function(){return z}));var e=function(t){return"string"!=typeof t||""===t?(console.error("The namespace must be a non-empty string."),!1):!!/^[a-zA-Z][a-zA-Z0-9_.\-\/]*$/.test(t)||(console.error("The namespace can only contain numbers, letters, dashes, periods, underscores and slashes."),!1)};var o=function(t){return"string"!=typeof t||""===t?(console.error("The hook name must be a non-empty string."),!1):/^__/.test(t)?(console.error("The hook name cannot begin with `__`."),!1):!!/^[a-zA-Z][a-zA-Z0-9_.-]*$/.test(t)||(console.error("The hook name can only contain numbers, letters, dashes, periods and underscores."),!1)};var i=function(t,n){return function(r,i,c){let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:10;const u=t[n];if(!o(r))return;if(!e(i))return;if("function"!=typeof c)return void console.error("The hook callback must be a function.");if("number"!=typeof s)return void console.error("If specified, the hook priority must be a number.");const l={callback:c,priority:s,namespace:i};if(u[r]){const t=u[r].handlers;let n;for(n=t.length;n>0&&!(s>=t[n-1].priority);n--);n===t.length?t[n]=l:t.splice(n,0,l),u.__current.forEach(t=>{t.name===r&&t.currentIndex>=n&&t.currentIndex++})}else u[r]={handlers:[l],runs:0};"hookAdded"!==r&&t.doAction("hookAdded",r,i,c,s)}};var c=function(t,n){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return function(i,c){const s=t[n];if(!o(i))return;if(!r&&!e(c))return;if(!s[i])return 0;let u=0;if(r)u=s[i].handlers.length,s[i]={runs:s[i].runs,handlers:[]};else{const t=s[i].handlers;for(let n=t.length-1;n>=0;n--)t[n].namespace===c&&(t.splice(n,1),u++,s.__current.forEach(t=>{t.name===i&&t.currentIndex>=n&&t.currentIndex--}))}return"hookRemoved"!==i&&t.doAction("hookRemoved",i,c),u}};var s=function(t,n){return function(r,e){const o=t[n];return void 0!==e?r in o&&o[r].handlers.some(t=>t.namespace===e):r in o}};var u=function(t,n){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return function(e){const o=t[n];o[e]||(o[e]={handlers:[],runs:0}),o[e].runs++;const i=o[e].handlers;for(var c=arguments.length,s=new Array(c>1?c-1:0),u=1;u<c;u++)s[u-1]=arguments[u];if(!i||!i.length)return r?s[0]:void 0;const l={name:e,currentIndex:0};for(o.__current.push(l);l.currentIndex<i.length;){const t=i[l.currentIndex].callback.apply(null,s);r&&(s[0]=t),l.currentIndex++}return o.__current.pop(),r?s[0]:void 0}};var l=function(t,n){return function(){var r,e;const o=t[n];return null!==(r=null===(e=o.__current[o.__current.length-1])||void 0===e?void 0:e.name)&&void 0!==r?r:null}};var d=function(t,n){return function(r){const e=t[n];return void 0===r?void 0!==e.__current[0]:!!e.__current[0]&&r===e.__current[0].name}};var a=function(t,n){return function(r){const e=t[n];if(o(r))return e[r]&&e[r].runs?e[r].runs:0}};class f{constructor(){this.actions=Object.create(null),this.actions.__current=[],this.filters=Object.create(null),this.filters.__current=[],this.addAction=i(this,"actions"),this.addFilter=i(this,"filters"),this.removeAction=c(this,"actions"),this.removeFilter=c(this,"filters"),this.hasAction=s(this,"actions"),this.hasFilter=s(this,"filters"),this.removeAllActions=c(this,"actions",!0),this.removeAllFilters=c(this,"filters",!0),this.doAction=u(this,"actions"),this.applyFilters=u(this,"filters",!0),this.currentAction=l(this,"actions"),this.currentFilter=l(this,"filters"),this.doingAction=d(this,"actions"),this.doingFilter=d(this,"filters"),this.didAction=a(this,"actions"),this.didFilter=a(this,"filters")}}var h=function(){return new f};const p=h(),{addAction:v,addFilter:m,removeAction:A,removeFilter:_,hasAction:g,hasFilter:y,removeAllActions:b,removeAllFilters:F,doAction:k,applyFilters:x,currentAction:j,currentFilter:O,doingAction:I,doingFilter:T,didAction:w,didFilter:P,actions:S,filters:z}=p}});
/*! This file is auto-generated */
this.wp=this.wp||{},this.wp.i18n=function(t){var n={};function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)e.d(r,i,function(n){return t[n]}.bind(null,i));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s="Vhyj")}({"4Z/T":function(t,n,e){var r;!function(){"use strict";var i={not_string:/[^s]/,not_bool:/[^t]/,not_type:/[^T]/,not_primitive:/[^v]/,number:/[diefg]/,numeric_arg:/[bcdiefguxX]/,json:/[j]/,not_json:/[^j]/,text:/^[^\x25]+/,modulo:/^\x25{2}/,placeholder:/^\x25(?:([1-9]\d*)\$|\(([^)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,key:/^([a-z_][a-z_\d]*)/i,key_access:/^\.([a-z_][a-z_\d]*)/i,index_access:/^\[(\d+)\]/,sign:/^[+-]/};function o(t){return s(l(t),arguments)}function a(t,n){return o.apply(null,[t].concat(n||[]))}function s(t,n){var e,r,a,s,u,l,c,p,f,d=1,h=t.length,g="";for(r=0;r<h;r++)if("string"==typeof t[r])g+=t[r];else if("object"==typeof t[r]){if((s=t[r]).keys)for(e=n[d],a=0;a<s.keys.length;a++){if(null==e)throw new Error(o('[sprintf] Cannot access property "%s" of undefined value "%s"',s.keys[a],s.keys[a-1]));e=e[s.keys[a]]}else e=s.param_no?n[s.param_no]:n[d++];if(i.not_type.test(s.type)&&i.not_primitive.test(s.type)&&e instanceof Function&&(e=e()),i.numeric_arg.test(s.type)&&"number"!=typeof e&&isNaN(e))throw new TypeError(o("[sprintf] expecting number but found %T",e));switch(i.number.test(s.type)&&(p=e>=0),s.type){case"b":e=parseInt(e,10).toString(2);break;case"c":e=String.fromCharCode(parseInt(e,10));break;case"d":case"i":e=parseInt(e,10);break;case"j":e=JSON.stringify(e,null,s.width?parseInt(s.width):0);break;case"e":e=s.precision?parseFloat(e).toExponential(s.precision):parseFloat(e).toExponential();break;case"f":e=s.precision?parseFloat(e).toFixed(s.precision):parseFloat(e);break;case"g":e=s.precision?String(Number(e.toPrecision(s.precision))):parseFloat(e);break;case"o":e=(parseInt(e,10)>>>0).toString(8);break;case"s":e=String(e),e=s.precision?e.substring(0,s.precision):e;break;case"t":e=String(!!e),e=s.precision?e.substring(0,s.precision):e;break;case"T":e=Object.prototype.toString.call(e).slice(8,-1).toLowerCase(),e=s.precision?e.substring(0,s.precision):e;break;case"u":e=parseInt(e,10)>>>0;break;case"v":e=e.valueOf(),e=s.precision?e.substring(0,s.precision):e;break;case"x":e=(parseInt(e,10)>>>0).toString(16);break;case"X":e=(parseInt(e,10)>>>0).toString(16).toUpperCase()}i.json.test(s.type)?g+=e:(!i.number.test(s.type)||p&&!s.sign?f="":(f=p?"+":"-",e=e.toString().replace(i.sign,"")),l=s.pad_char?"0"===s.pad_char?"0":s.pad_char.charAt(1):" ",c=s.width-(f+e).length,u=s.width&&c>0?l.repeat(c):"",g+=s.align?f+e+u:"0"===l?f+u+e:u+f+e)}return g}var u=Object.create(null);function l(t){if(u[t])return u[t];for(var n,e=t,r=[],o=0;e;){if(null!==(n=i.text.exec(e)))r.push(n[0]);else if(null!==(n=i.modulo.exec(e)))r.push("%");else{if(null===(n=i.placeholder.exec(e)))throw new SyntaxError("[sprintf] unexpected placeholder");if(n[2]){o|=1;var a=[],s=n[2],l=[];if(null===(l=i.key.exec(s)))throw new SyntaxError("[sprintf] failed to parse named argument key");for(a.push(l[1]);""!==(s=s.substring(l[0].length));)if(null!==(l=i.key_access.exec(s)))a.push(l[1]);else{if(null===(l=i.index_access.exec(s)))throw new SyntaxError("[sprintf] failed to parse named argument key");a.push(l[1])}n[2]=a}else o|=2;if(3===o)throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported");r.push({placeholder:n[0],param_no:n[1],keys:n[2],sign:n[3],pad_char:n[4],align:n[5],width:n[6],precision:n[7],type:n[8]})}e=e.substring(n[0].length)}return u[t]=r}n.sprintf=o,n.vsprintf=a,"undefined"!=typeof window&&(window.sprintf=o,window.vsprintf=a,void 0===(r=function(){return{sprintf:o,vsprintf:a}}.call(n,e,n,t))||(t.exports=r))}()},"4eJC":function(t,n,e){t.exports=function(t,n){var e,r,i=0;function o(){var o,a,s=e,u=arguments.length;t:for(;s;){if(s.args.length===arguments.length){for(a=0;a<u;a++)if(s.args[a]!==arguments[a]){s=s.next;continue t}return s!==e&&(s===r&&(r=s.prev),s.prev.next=s.next,s.next&&(s.next.prev=s.prev),s.next=e,s.prev=null,e.prev=s,e=s),s.val}s=s.next}for(o=new Array(u),a=0;a<u;a++)o[a]=arguments[a];return s={args:o,val:t.apply(null,o)},e?(e.prev=s,s.next=e):r=s,i===n.maxSize?(r=r.prev).next=null:i++,e=s,s.val}return n=n||{},o.clear=function(){e=null,r=null,i=0},o}},Vhyj:function(t,n,e){"use strict";e.r(n),e.d(n,"sprintf",(function(){return u})),e.d(n,"createI18n",(function(){return b})),e.d(n,"defaultI18n",(function(){return w})),e.d(n,"setLocaleData",(function(){return F})),e.d(n,"resetLocaleData",(function(){return S})),e.d(n,"getLocaleData",(function(){return k})),e.d(n,"subscribe",(function(){return j})),e.d(n,"__",(function(){return T})),e.d(n,"_x",(function(){return O})),e.d(n,"_n",(function(){return L})),e.d(n,"_nx",(function(){return D})),e.d(n,"isRTL",(function(){return P})),e.d(n,"hasTranslation",(function(){return E}));var r=e("4eJC"),i=e.n(r),o=e("4Z/T"),a=e.n(o);const s=i()(console.error);function u(t){try{for(var n=arguments.length,e=new Array(n>1?n-1:0),r=1;r<n;r++)e[r-1]=arguments[r];return a.a.sprintf(t,...e)}catch(n){return n instanceof Error&&s("sprintf error: \n\n"+n.toString()),t}}var l,c,p,f;l={"(":9,"!":8,"*":7,"/":7,"%":7,"+":6,"-":6,"<":5,"<=":5,">":5,">=":5,"==":4,"!=":4,"&&":3,"||":2,"?":1,"?:":1},c=["(","?"],p={")":["("],":":["?","?:"]},f=/<=|>=|==|!=|&&|\|\||\?:|\(|!|\*|\/|%|\+|-|<|>|\?|\)|:/;var d={"!":function(t){return!t},"*":function(t,n){return t*n},"/":function(t,n){return t/n},"%":function(t,n){return t%n},"+":function(t,n){return t+n},"-":function(t,n){return t-n},"<":function(t,n){return t<n},"<=":function(t,n){return t<=n},">":function(t,n){return t>n},">=":function(t,n){return t>=n},"==":function(t,n){return t===n},"!=":function(t,n){return t!==n},"&&":function(t,n){return t&&n},"||":function(t,n){return t||n},"?:":function(t,n,e){if(t)throw n;return e}};function h(t){var n=function(t){for(var n,e,r,i,o=[],a=[];n=t.match(f);){for(e=n[0],(r=t.substr(0,n.index).trim())&&o.push(r);i=a.pop();){if(p[e]){if(p[e][0]===i){e=p[e][1]||e;break}}else if(c.indexOf(i)>=0||l[i]<l[e]){a.push(i);break}o.push(i)}p[e]||a.push(e),t=t.substr(n.index+e.length)}return(t=t.trim())&&o.push(t),o.concat(a.reverse())}(t);return function(t){return function(t,n){var e,r,i,o,a,s,u=[];for(e=0;e<t.length;e++){if(a=t[e],o=d[a]){for(r=o.length,i=Array(r);r--;)i[r]=u.pop();try{s=o.apply(null,i)}catch(t){return t}}else s=n.hasOwnProperty(a)?n[a]:+a;u.push(s)}return u[0]}(n,t)}}var g={contextDelimiter:"",onMissingKey:null};function x(t,n){var e;for(e in this.data=t,this.pluralForms={},this.options={},g)this.options[e]=void 0!==n&&e in n?n[e]:g[e]}x.prototype.getPluralForm=function(t,n){var e,r,i,o,a=this.pluralForms[t];return a||("function"!=typeof(i=(e=this.data[t][""])["Plural-Forms"]||e["plural-forms"]||e.plural_forms)&&(r=function(t){var n,e,r;for(n=t.split(";"),e=0;e<n.length;e++)if(0===(r=n[e].trim()).indexOf("plural="))return r.substr(7)}(e["Plural-Forms"]||e["plural-forms"]||e.plural_forms),o=h(r),i=function(t){return+o({n:t})}),a=this.pluralForms[t]=i),a(n)},x.prototype.dcnpgettext=function(t,n,e,r,i){var o,a,s;return o=void 0===i?0:this.getPluralForm(t,i),a=e,n&&(a=n+this.options.contextDelimiter+e),(s=this.data[t][a])&&s[o]?s[o]:(this.options.onMissingKey&&this.options.onMissingKey(e,t),0===o?e:r)};const y={"":{plural_forms:t=>1===t?0:1}},v=/^i18n\.(n?gettext|has_translation)(_|$)/,b=(t,n,e)=>{const r=new x({}),i=new Set,o=()=>{i.forEach(t=>t())},a=function(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default";r.data[n]={...y,...r.data[n],...t},r.data[n][""]={...y[""],...r.data[n][""]}},s=(t,n)=>{a(t,n),o()},u=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default",n=arguments.length>1?arguments[1]:void 0,e=arguments.length>2?arguments[2]:void 0,i=arguments.length>3?arguments[3]:void 0,o=arguments.length>4?arguments[4]:void 0;return r.data[t]||a(void 0,t),r.dcnpgettext(t,n,e,i,o)},l=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default";return t},c=(t,n,r)=>{let i=u(r,n,t);return e?(i=e.applyFilters("i18n.gettext_with_context",i,t,n,r),e.applyFilters("i18n.gettext_with_context_"+l(r),i,t,n,r)):i};if(t&&s(t,n),e){const t=t=>{v.test(t)&&o()};e.addAction("hookAdded","core/i18n",t),e.addAction("hookRemoved","core/i18n",t)}return{getLocaleData:function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default";return r.data[t]},setLocaleData:s,resetLocaleData:(t,n)=>{r.data={},r.pluralForms={},s(t,n)},subscribe:t=>(i.add(t),()=>i.delete(t)),__:(t,n)=>{let r=u(n,void 0,t);return e?(r=e.applyFilters("i18n.gettext",r,t,n),e.applyFilters("i18n.gettext_"+l(n),r,t,n)):r},_x:c,_n:(t,n,r,i)=>{let o=u(i,void 0,t,n,r);return e?(o=e.applyFilters("i18n.ngettext",o,t,n,r,i),e.applyFilters("i18n.ngettext_"+l(i),o,t,n,r,i)):o},_nx:(t,n,r,i,o)=>{let a=u(o,i,t,n,r);return e?(a=e.applyFilters("i18n.ngettext_with_context",a,t,n,r,i,o),e.applyFilters("i18n.ngettext_with_context_"+l(o),a,t,n,r,i,o)):a},isRTL:()=>"rtl"===c("ltr","text direction"),hasTranslation:(t,n,i)=>{var o,a;const s=n?n+""+t:t;let u=!(null===(o=r.data)||void 0===o||null===(a=o[null!=i?i:"default"])||void 0===a||!a[s]);return e&&(u=e.applyFilters("i18n.has_translation",u,t,n,i),u=e.applyFilters("i18n.has_translation_"+l(i),u,t,n,i)),u}}};var _=e("g56x");const m=b(void 0,void 0,_.defaultHooks);var w=m;const k=m.getLocaleData.bind(m),F=m.setLocaleData.bind(m),S=m.resetLocaleData.bind(m),j=m.subscribe.bind(m),T=m.__.bind(m),O=m._x.bind(m),L=m._n.bind(m),D=m._nx.bind(m),P=m.isRTL.bind(m),E=m.hasTranslation.bind(m)},g56x:function(t,n){t.exports=window.wp.hooks}});

wp.i18n.setLocaleData( { 'text direction\u0004ltr': [ 'ltr' ] } );
( function( domain, translations ) {
	var localeData = translations.locale_data[ domain ] || translations.locale_data.messages;
	localeData[""].domain = domain;
	wp.i18n.setLocaleData( localeData, domain );
} )( "default", {"translation-revision-date":"2022-02-20 07:35:01+0000","generator":"GlotPress\/3.0.0-alpha.2","domain":"messages","locale_data":{"messages":{"":{"domain":"messages","plural-forms":"nplurals=2; plural=n > 1;","lang":"fr"},"Notifications":["Notifications"]}},"comment":{"reference":"wp-includes\/js\/dist\/a11y.js"}} );/*! This file is auto-generated */
this.wp=this.wp||{},this.wp.a11y=function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s="jncB")}({Y8OO:function(t,e){t.exports=window.wp.domReady},jncB:function(t,e,n){"use strict";n.r(e),n.d(e,"setup",(function(){return u})),n.d(e,"speak",(function(){return d}));var i=n("Y8OO"),o=n.n(i),r=n("l3Sj");function a(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"polite";const e=document.createElement("div");e.id="a11y-speak-"+t,e.className="a11y-speak-region",e.setAttribute("style","position: absolute;margin: -1px;padding: 0;height: 1px;width: 1px;overflow: hidden;clip: rect(1px, 1px, 1px, 1px);-webkit-clip-path: inset(50%);clip-path: inset(50%);border: 0;word-wrap: normal !important;"),e.setAttribute("aria-live",t),e.setAttribute("aria-relevant","additions text"),e.setAttribute("aria-atomic","true");const{body:n}=document;return n&&n.appendChild(e),e}let p="";function u(){const t=document.getElementById("a11y-speak-intro-text"),e=document.getElementById("a11y-speak-assertive"),n=document.getElementById("a11y-speak-polite");null===t&&function(){const t=document.createElement("p");t.id="a11y-speak-intro-text",t.className="a11y-speak-intro-text",t.textContent=Object(r.__)("Notifications"),t.setAttribute("style","position: absolute;margin: -1px;padding: 0;height: 1px;width: 1px;overflow: hidden;clip: rect(1px, 1px, 1px, 1px);-webkit-clip-path: inset(50%);clip-path: inset(50%);border: 0;word-wrap: normal !important;"),t.setAttribute("hidden","hidden");const{body:e}=document;e&&e.appendChild(t)}(),null===e&&a("assertive"),null===n&&a("polite")}function d(t,e){!function(){const t=document.getElementsByClassName("a11y-speak-region"),e=document.getElementById("a11y-speak-intro-text");for(let e=0;e<t.length;e++)t[e].textContent="";e&&e.setAttribute("hidden","hidden")}(),t=function(t){return t=t.replace(/<[^<>]+>/g," "),p===t&&(t+=" "),p=t,t}(t);const n=document.getElementById("a11y-speak-intro-text"),i=document.getElementById("a11y-speak-assertive"),o=document.getElementById("a11y-speak-polite");i&&"assertive"===e?i.textContent=t:o&&(o.textContent=t),n&&n.removeAttribute("hidden")}o()(u)},l3Sj:function(t,e){t.exports=window.wp.i18n}});
/*!
 * jQuery UI Autocomplete 1.13.0
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","./menu","./core"],e):e(jQuery)}(function(o){"use strict";return o.widget("ui.autocomplete",{version:"1.13.0",defaultElement:"<input>",options:{appendTo:null,autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},requestIndex:0,pending:0,_create:function(){var i,s,n,e=this.element[0].nodeName.toLowerCase(),t="textarea"===e,e="input"===e;this.isMultiLine=t||!e&&this._isContentEditable(this.element),this.valueMethod=this.element[t||e?"val":"text"],this.isNewMenu=!0,this._addClass("ui-autocomplete-input"),this.element.attr("autocomplete","off"),this._on(this.element,{keydown:function(e){if(this.element.prop("readOnly"))s=n=i=!0;else{s=n=i=!1;var t=o.ui.keyCode;switch(e.keyCode){case t.PAGE_UP:i=!0,this._move("previousPage",e);break;case t.PAGE_DOWN:i=!0,this._move("nextPage",e);break;case t.UP:i=!0,this._keyEvent("previous",e);break;case t.DOWN:i=!0,this._keyEvent("next",e);break;case t.ENTER:this.menu.active&&(i=!0,e.preventDefault(),this.menu.select(e));break;case t.TAB:this.menu.active&&this.menu.select(e);break;case t.ESCAPE:this.menu.element.is(":visible")&&(this.isMultiLine||this._value(this.term),this.close(e),e.preventDefault());break;default:s=!0,this._searchTimeout(e)}}},keypress:function(e){if(i)return i=!1,void(this.isMultiLine&&!this.menu.element.is(":visible")||e.preventDefault());if(!s){var t=o.ui.keyCode;switch(e.keyCode){case t.PAGE_UP:this._move("previousPage",e);break;case t.PAGE_DOWN:this._move("nextPage",e);break;case t.UP:this._keyEvent("previous",e);break;case t.DOWN:this._keyEvent("next",e)}}},input:function(e){if(n)return n=!1,void e.preventDefault();this._searchTimeout(e)},focus:function(){this.selectedItem=null,this.previous=this._value()},blur:function(e){clearTimeout(this.searching),this.close(e),this._change(e)}}),this._initSource(),this.menu=o("<ul>").appendTo(this._appendTo()).menu({role:null}).hide().attr({unselectable:"on"}).menu("instance"),this._addClass(this.menu.element,"ui-autocomplete","ui-front"),this._on(this.menu.element,{mousedown:function(e){e.preventDefault()},menufocus:function(e,t){var i;if(this.isNewMenu&&(this.isNewMenu=!1,e.originalEvent&&/^mouse/.test(e.originalEvent.type)))return this.menu.blur(),void this.document.one("mousemove",function(){o(e.target).trigger(e.originalEvent)});i=t.item.data("ui-autocomplete-item"),!1!==this._trigger("focus",e,{item:i})&&e.originalEvent&&/^key/.test(e.originalEvent.type)&&this._value(i.value),(i=t.item.attr("aria-label")||i.value)&&String.prototype.trim.call(i).length&&(this.liveRegion.children().hide(),o("<div>").text(i).appendTo(this.liveRegion))},menuselect:function(e,t){var i=t.item.data("ui-autocomplete-item"),s=this.previous;this.element[0]!==o.ui.safeActiveElement(this.document[0])&&(this.element.trigger("focus"),this.previous=s,this._delay(function(){this.previous=s,this.selectedItem=i})),!1!==this._trigger("select",e,{item:i})&&this._value(i.value),this.term=this._value(),this.close(e),this.selectedItem=i}}),this.liveRegion=o("<div>",{role:"status","aria-live":"assertive","aria-relevant":"additions"}).appendTo(this.document[0].body),this._addClass(this.liveRegion,null,"ui-helper-hidden-accessible"),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching),this.element.removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove()},_setOption:function(e,t){this._super(e,t),"source"===e&&this._initSource(),"appendTo"===e&&this.menu.element.appendTo(this._appendTo()),"disabled"===e&&t&&this.xhr&&this.xhr.abort()},_isEventTargetInWidget:function(e){var t=this.menu.element[0];return e.target===this.element[0]||e.target===t||o.contains(t,e.target)},_closeOnClickOutside:function(e){this._isEventTargetInWidget(e)||this.close()},_appendTo:function(){var e=this.options.appendTo;return e=!(e=!(e=e&&(e.jquery||e.nodeType?o(e):this.document.find(e).eq(0)))||!e[0]?this.element.closest(".ui-front, dialog"):e).length?this.document[0].body:e},_initSource:function(){var i,s,n=this;Array.isArray(this.options.source)?(i=this.options.source,this.source=function(e,t){t(o.ui.autocomplete.filter(i,e.term))}):"string"==typeof this.options.source?(s=this.options.source,this.source=function(e,t){n.xhr&&n.xhr.abort(),n.xhr=o.ajax({url:s,data:e,dataType:"json",success:function(e){t(e)},error:function(){t([])}})}):this.source=this.options.source},_searchTimeout:function(s){clearTimeout(this.searching),this.searching=this._delay(function(){var e=this.term===this._value(),t=this.menu.element.is(":visible"),i=s.altKey||s.ctrlKey||s.metaKey||s.shiftKey;e&&(t||i)||(this.selectedItem=null,this.search(null,s))},this.options.delay)},search:function(e,t){return e=null!=e?e:this._value(),this.term=this._value(),e.length<this.options.minLength?this.close(t):!1!==this._trigger("search",t)?this._search(e):void 0},_search:function(e){this.pending++,this._addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:e},this._response())},_response:function(){var t=++this.requestIndex;return function(e){t===this.requestIndex&&this.__response(e),this.pending--,this.pending||this._removeClass("ui-autocomplete-loading")}.bind(this)},__response:function(e){e=e&&this._normalize(e),this._trigger("response",null,{content:e}),!this.options.disabled&&e&&e.length&&!this.cancelSearch?(this._suggest(e),this._trigger("open")):this._close()},close:function(e){this.cancelSearch=!0,this._close(e)},_close:function(e){this._off(this.document,"mousedown"),this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",e))},_change:function(e){this.previous!==this._value()&&this._trigger("change",e,{item:this.selectedItem})},_normalize:function(e){return e.length&&e[0].label&&e[0].value?e:o.map(e,function(e){return"string"==typeof e?{label:e,value:e}:o.extend({},e,{label:e.label||e.value,value:e.value||e.label})})},_suggest:function(e){var t=this.menu.element.empty();this._renderMenu(t,e),this.isNewMenu=!0,this.menu.refresh(),t.show(),this._resizeMenu(),t.position(o.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next(),this._on(this.document,{mousedown:"_closeOnClickOutside"})},_resizeMenu:function(){var e=this.menu.element;e.outerWidth(Math.max(e.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(i,e){var s=this;o.each(e,function(e,t){s._renderItemData(i,t)})},_renderItemData:function(e,t){return this._renderItem(e,t).data("ui-autocomplete-item",t)},_renderItem:function(e,t){return o("<li>").append(o("<div>").text(t.label)).appendTo(e)},_move:function(e,t){if(this.menu.element.is(":visible"))return this.menu.isFirstItem()&&/^previous/.test(e)||this.menu.isLastItem()&&/^next/.test(e)?(this.isMultiLine||this._value(this.term),void this.menu.blur()):void this.menu[e](t);this.search(null,t)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(e,t){this.isMultiLine&&!this.menu.element.is(":visible")||(this._move(e,t),t.preventDefault())},_isContentEditable:function(e){if(!e.length)return!1;var t=e.prop("contentEditable");return"inherit"===t?this._isContentEditable(e.parent()):"true"===t}}),o.extend(o.ui.autocomplete,{escapeRegex:function(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(e,t){var i=new RegExp(o.ui.autocomplete.escapeRegex(t),"i");return o.grep(e,function(e){return i.test(e.label||e.value||e)})}}),o.widget("ui.autocomplete",o.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(e){return e+(1<e?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(e){this._superApply(arguments),this.options.disabled||this.cancelSearch||(e=e&&e.length?this.options.messages.results(e.length):this.options.messages.noResults,this.liveRegion.children().hide(),o("<div>").text(e).appendTo(this.liveRegion))}}),o.ui.autocomplete});
jQuery(document).ready(function($){"use strict";if($('#search-outer.nectar').length>0){var acs_action='myprefix_autocompletesearch';$("body").on('focus','#s',function(){if(!$(this).hasClass('ui-autocomplete-input')){$(this).autocomplete({delay:50,position:{of:"#search-outer #search .container"},appendTo:$("#search-box"),source:function(req,response){$.getJSON(MyAcSearch.url+'?callback=?&action='+acs_action,req,response)},select:function(event,ui){window.location.href=ui.item.link},minLength:2,}).data("ui-autocomplete")._renderItem=function(ul,item){return $("<li>").append("<a>"+item.image+"<span class='title'>"+item.label+"</span><br/><span class='desc'>"+item.post_type+"</span> </a>").appendTo(ul)}}})}});
!function(){"use strict";const e=e=>Math.abs(parseInt(e,10)),t=(e,t)=>{const r=new Map([["init","init"],["validation_failed","invalid"],["acceptance_missing","unaccepted"],["spam","spam"],["aborted","aborted"],["mail_sent","sent"],["mail_failed","failed"],["submitting","submitting"],["resetting","resetting"],["payment_required","payment-required"]]);r.has(t)&&(t=r.get(t)),Array.from(r.values()).includes(t)||(t=`custom-${t=(t=t.replace(/[^0-9a-z]+/i," ").trim()).replace(/\s+/,"-")}`);const n=e.getAttribute("data-status");return e.wpcf7.status=t,e.setAttribute("data-status",t),e.classList.add(t),n&&n!==t&&e.classList.remove(n),t},r=(e,t,r)=>{const n=new CustomEvent(`wpcf7${t}`,{bubbles:!0,detail:r});"string"==typeof e&&(e=document.querySelector(e)),e.dispatchEvent(n)},n=e=>{const{root:t,namespace:r="contact-form-7/v1"}=wpcf7.api;return a.reduceRight(((e,t)=>r=>t(r,e)),(e=>{let n,a,{url:c,path:s,endpoint:o,headers:i,body:l,data:p,...d}=e;"string"==typeof o&&(n=r.replace(/^\/|\/$/g,""),a=o.replace(/^\//,""),s=a?n+"/"+a:n),"string"==typeof s&&(-1!==t.indexOf("?")&&(s=s.replace("?","&")),s=s.replace(/^\//,""),c=t+s),i={Accept:"application/json, */*;q=0.1",...i},delete i["X-WP-Nonce"],p&&(l=JSON.stringify(p),i["Content-Type"]="application/json");const u={code:"fetch_error",message:"You are probably offline."},f={code:"invalid_json",message:"The response is not a valid JSON response."};return window.fetch(c||s||window.location.href,{...d,headers:i,body:l}).then((e=>Promise.resolve(e).then((e=>{if(e.status>=200&&e.status<300)return e;throw e})).then((e=>{if(204===e.status)return null;if(e&&e.json)return e.json().catch((()=>{throw f}));throw f}))),(()=>{throw u}))}))(e)},a=[];function c(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(wpcf7.blocked)return s(e),void t(e,"submitting");const c=new FormData(e);a.submitter&&a.submitter.name&&c.append(a.submitter.name,a.submitter.value);const o={contactFormId:e.wpcf7.id,pluginVersion:e.wpcf7.pluginVersion,contactFormLocale:e.wpcf7.locale,unitTag:e.wpcf7.unitTag,containerPostId:e.wpcf7.containerPost,status:e.wpcf7.status,inputs:Array.from(c,(e=>{const t=e[0],r=e[1];return!t.match(/^_/)&&{name:t,value:r}})).filter((e=>!1!==e)),formData:c},i=t=>{const r=document.createElement("li");r.setAttribute("id",t.error_id),t.idref?r.insertAdjacentHTML("beforeend",`<a href="#${t.idref}">${t.message}</a>`):r.insertAdjacentText("beforeend",t.message),e.wpcf7.parent.querySelector(".screen-reader-response ul").appendChild(r)},l=t=>{const r=e.querySelector(t.into),n=r.querySelector(".wpcf7-form-control");n.classList.add("wpcf7-not-valid"),n.setAttribute("aria-describedby",t.error_id);const a=document.createElement("span");a.setAttribute("class","wpcf7-not-valid-tip"),a.setAttribute("aria-hidden","true"),a.insertAdjacentText("beforeend",t.message),r.appendChild(a),r.querySelectorAll("[aria-invalid]").forEach((e=>{e.setAttribute("aria-invalid","true")})),n.closest(".use-floating-validation-tip")&&(n.addEventListener("focus",(e=>{a.setAttribute("style","display: none")})),a.addEventListener("mouseover",(e=>{a.setAttribute("style","display: none")})))};n({endpoint:`contact-forms/${e.wpcf7.id}/feedback`,method:"POST",body:c,wpcf7:{endpoint:"feedback",form:e,detail:o}}).then((n=>{const a=t(e,n.status);return o.status=n.status,o.apiResponse=n,["invalid","unaccepted","spam","aborted"].includes(a)?r(e,a,o):["sent","failed"].includes(a)&&r(e,`mail${a}`,o),r(e,"submit",o),n})).then((t=>{t.posted_data_hash&&(e.querySelector('input[name="_wpcf7_posted_data_hash"]').value=t.posted_data_hash),"mail_sent"===t.status&&(e.reset(),e.wpcf7.resetOnMailSent=!0),t.invalid_fields&&(t.invalid_fields.forEach(i),t.invalid_fields.forEach(l)),e.wpcf7.parent.querySelector('.screen-reader-response [role="status"]').insertAdjacentText("beforeend",t.message),e.querySelectorAll(".wpcf7-response-output").forEach((e=>{e.innerText=t.message}))})).catch((e=>console.error(e)))}n.use=e=>{a.unshift(e)},n.use(((e,n)=>{if(e.wpcf7&&"feedback"===e.wpcf7.endpoint){const{form:n,detail:a}=e.wpcf7;s(n),r(n,"beforesubmit",a),t(n,"submitting")}return n(e)}));const s=e=>{e.wpcf7.parent.querySelector('.screen-reader-response [role="status"]').innerText="",e.wpcf7.parent.querySelector(".screen-reader-response ul").innerText="",e.querySelectorAll(".wpcf7-not-valid-tip").forEach((e=>{e.remove()})),e.querySelectorAll("[aria-invalid]").forEach((e=>{e.setAttribute("aria-invalid","false")})),e.querySelectorAll(".wpcf7-form-control").forEach((e=>{e.removeAttribute("aria-describedby"),e.classList.remove("wpcf7-not-valid")})),e.querySelectorAll(".wpcf7-response-output").forEach((e=>{e.innerText=""}))};function o(e){const a=new FormData(e),c={contactFormId:e.wpcf7.id,pluginVersion:e.wpcf7.pluginVersion,contactFormLocale:e.wpcf7.locale,unitTag:e.wpcf7.unitTag,containerPostId:e.wpcf7.containerPost,status:e.wpcf7.status,inputs:Array.from(a,(e=>{const t=e[0],r=e[1];return!t.match(/^_/)&&{name:t,value:r}})).filter((e=>!1!==e)),formData:a};n({endpoint:`contact-forms/${e.wpcf7.id}/refill`,method:"GET",wpcf7:{endpoint:"refill",form:e,detail:c}}).then((n=>{e.wpcf7.resetOnMailSent?(delete e.wpcf7.resetOnMailSent,t(e,"mail_sent")):t(e,"init"),c.apiResponse=n,r(e,"reset",c)})).catch((e=>console.error(e)))}n.use(((e,r)=>{if(e.wpcf7&&"refill"===e.wpcf7.endpoint){const{form:r,detail:n}=e.wpcf7;s(r),t(r,"resetting")}return r(e)}));const i=(e,t)=>{for(const r in t){const n=t[r];e.querySelectorAll(`input[name="${r}"]`).forEach((e=>{e.value=""})),e.querySelectorAll(`img.wpcf7-captcha-${r}`).forEach((e=>{e.setAttribute("src",n)}));const a=/([0-9]+)\.(png|gif|jpeg)$/.exec(n);a&&e.querySelectorAll(`input[name="_wpcf7_captcha_challenge_${r}"]`).forEach((e=>{e.value=a[1]}))}},l=(e,t)=>{for(const r in t){const n=t[r][0],a=t[r][1];e.querySelectorAll(`.wpcf7-form-control-wrap.${r}`).forEach((e=>{e.querySelector(`input[name="${r}"]`).value="",e.querySelector(".wpcf7-quiz-label").textContent=n,e.querySelector(`input[name="_wpcf7_quiz_answer_${r}"]`).value=a}))}};function p(t){const r=new FormData(t);t.wpcf7={id:e(r.get("_wpcf7")),status:t.getAttribute("data-status"),pluginVersion:r.get("_wpcf7_version"),locale:r.get("_wpcf7_locale"),unitTag:r.get("_wpcf7_unit_tag"),containerPost:e(r.get("_wpcf7_container_post")),parent:t.closest(".wpcf7")},t.querySelectorAll(".has-spinner").forEach((e=>{e.insertAdjacentHTML("afterend",'<span class="wpcf7-spinner"></span>')})),(e=>{e.querySelectorAll(".wpcf7-exclusive-checkbox").forEach((t=>{t.addEventListener("change",(t=>{const r=t.target.getAttribute("name");e.querySelectorAll(`input[type="checkbox"][name="${r}"]`).forEach((e=>{e!==t.target&&(e.checked=!1)}))}))}))})(t),(e=>{e.querySelectorAll(".has-free-text").forEach((t=>{const r=t.querySelector("input.wpcf7-free-text"),n=t.querySelector('input[type="checkbox"], input[type="radio"]');r.disabled=!n.checked,e.addEventListener("change",(e=>{r.disabled=!n.checked,e.target===n&&n.checked&&r.focus()}))}))})(t),(e=>{e.querySelectorAll(".wpcf7-validates-as-url").forEach((e=>{e.addEventListener("change",(t=>{let r=e.value.trim();r&&!r.match(/^[a-z][a-z0-9.+-]*:/i)&&-1!==r.indexOf(".")&&(r=r.replace(/^\/+/,""),r="http://"+r),e.value=r}))}))})(t),(e=>{if(!e.querySelector(".wpcf7-acceptance")||e.classList.contains("wpcf7-acceptance-as-validation"))return;const t=()=>{let t=!0;e.querySelectorAll(".wpcf7-acceptance").forEach((e=>{if(!t||e.classList.contains("optional"))return;const r=e.querySelector('input[type="checkbox"]');(e.classList.contains("invert")&&r.checked||!e.classList.contains("invert")&&!r.checked)&&(t=!1)})),e.querySelectorAll(".wpcf7-submit").forEach((e=>{e.disabled=!t}))};t(),e.addEventListener("change",(e=>{t()})),e.addEventListener("wpcf7reset",(e=>{t()}))})(t),(t=>{const r=(t,r)=>{const n=e(t.getAttribute("data-starting-value")),a=e(t.getAttribute("data-maximum-value")),c=e(t.getAttribute("data-minimum-value")),s=t.classList.contains("down")?n-r.value.length:r.value.length;t.setAttribute("data-current-value",s),t.innerText=s,a&&a<r.value.length?t.classList.add("too-long"):t.classList.remove("too-long"),c&&r.value.length<c?t.classList.add("too-short"):t.classList.remove("too-short")},n=e=>{e={init:!1,...e},t.querySelectorAll(".wpcf7-character-count").forEach((n=>{const a=n.getAttribute("data-target-name"),c=t.querySelector(`[name="${a}"]`);c&&(c.value=c.defaultValue,r(n,c),e.init&&c.addEventListener("keyup",(e=>{r(n,c)})))}))};n({init:!0}),t.addEventListener("wpcf7reset",(e=>{n()}))})(t),window.addEventListener("load",(e=>{wpcf7.cached&&t.reset()})),t.addEventListener("reset",(e=>{wpcf7.reset(t)})),t.addEventListener("submit",(e=>{const r=e.submitter;wpcf7.submit(t,{submitter:r}),e.preventDefault()})),t.addEventListener("wpcf7submit",(e=>{e.detail.apiResponse.captcha&&i(t,e.detail.apiResponse.captcha),e.detail.apiResponse.quiz&&l(t,e.detail.apiResponse.quiz)})),t.addEventListener("wpcf7reset",(e=>{e.detail.apiResponse.captcha&&i(t,e.detail.apiResponse.captcha),e.detail.apiResponse.quiz&&l(t,e.detail.apiResponse.quiz)}))}document.addEventListener("DOMContentLoaded",(e=>{var t;if("undefined"==typeof wpcf7)return void console.error("wpcf7 is not defined.");if(void 0===wpcf7.api)return void console.error("wpcf7.api is not defined.");if("function"!=typeof window.fetch)return void console.error("Your browser doesn't support window.fetch().");if("function"!=typeof window.FormData)return void console.error("Your browser doesn't support window.FormData().");const r=document.querySelectorAll(".wpcf7 > form");"function"==typeof r.forEach?(wpcf7={init:p,submit:c,reset:o,...null!==(t=wpcf7)&&void 0!==t?t:{}},r.forEach((e=>wpcf7.init(e)))):console.error("Your browser doesn't support NodeList.forEach().")}))}();
jQuery(document).ready(function($){"use strict";function NectarSocial(){this.$body=$('body');this.$window=$(window);this.$wpAdminBar=$('#wpadminbar');this.usingMobileBrowser=(navigator.userAgent.match(/(Android|iPod|iPhone|iPad|BlackBerry|IEMobile|Opera Mini)/))?!0:!1;this.mouseEvents();this.nectarLove();if($('body').find('.nectar-social.fixed')){this.fixedStyle()}}
NectarSocial.prototype.mouseEvents=function(){this.$body.on('click','#single-below-header .nectar-social a',function(){return!1});$('body.single-product .nectar-social').addClass('woo');this.$body.on('click','.facebook-share:not(.inactive)',this.facebookShare);this.$body.on('click','.nectar-social:not(".woo") .twitter-share:not(.inactive)',this.twitterShare);this.$body.on('click','.nectar-social.woo .twitter-share',this.wooTwitterShare);this.$body.on('click','.nectar-social:not(".woo") .linkedin-share:not(.inactive)',this.linkedInShare);this.$body.on('click','.nectar-social.woo .linkedin-share',this.woolinkedInShare);this.$body.on('click','.nectar-social:not(".woo") .pinterest-share:not(.inactive)',this.pinterestShare);this.$body.on('click','.nectar-social.woo .pinterest-share',this.wooPinterestShare);this.$body.on('click','.nectar-social.fixed > a',function(){return!1});if(!this.usingMobileBrowser){var $socialTimeout;this.$body.on('mouseenter','.nectar-social.hover .share-btn',function(){clearTimeout($socialTimeout);if($(this).parents('[id*="-meta"]').length>0){$(this).parents('[id*="-meta"]').addClass('social-hovered')}
if($(this).parents('#single-below-header').length>0){$(this).parents('#single-below-header').addClass('social-hovered')}
$(this).parent().addClass('visible')});this.$body.on('mouseleave','.nectar-social.hover',function(){var $that=$(this);$socialTimeout=setTimeout(function(){$that.removeClass('visible');if($that.parents('[id*="-meta"]').length>0){$that.parents('[id*="-meta"]').removeClass('social-hovered')}
if($that.parents('#single-below-header').length>0){$that.parents('#single-below-header').removeClass('social-hovered')}},200)})}else{this.$body.on('click','.nectar-social.hover .share-btn',function(){if($(this).parents('[id*="-meta"]').length>0){$(this).parents('[id*="-meta"]').addClass('social-hovered')}
if($(this).parents('#single-below-header').length>0){$(this).parents('#single-below-header').addClass('social-hovered')}
$(this).parent().addClass('visible');return!1})}};NectarSocial.prototype.facebookShare=function(){var windowLocation=window.location.href.replace(window.location.hash,'');window.open('https://www.facebook.com/sharer/sharer.php?u='+windowLocation,"facebookWindow","height=380,width=660,resizable=0,toolbar=0,menubar=0,status=0,location=0,scrollbars=0");return!1};NectarSocial.prototype.facebookShare=function(){var windowLocation=window.location.href.replace(window.location.hash,'');window.open('https://www.facebook.com/sharer/sharer.php?u='+windowLocation,"facebookWindow","height=380,width=660,resizable=0,toolbar=0,menubar=0,status=0,location=0,scrollbars=0");return!1};NectarSocial.prototype.twitterShare=function(){var windowLocation=window.location.href.replace(window.location.hash,'');var $pageTitle;if($(".section-title h1").length>0){$pageTitle=encodeURIComponent($(".section-title h1").text())}else{$pageTitle=encodeURIComponent($(document).find("title").text())}
window.open('http://twitter.com/intent/tweet?text='+$pageTitle+' '+windowLocation,"twitterWindow","height=380,width=660,resizable=0,toolbar=0,menubar=0,status=0,location=0,scrollbars=0");return!1};NectarSocial.prototype.wooTwitterShare=function(){var windowLocation=window.location.href.replace(window.location.hash,'');window.open('http://twitter.com/intent/tweet?text='+$("h1.product_title").text()+' '+windowLocation,"twitterWindow","height=380,width=660,resizable=0,toolbar=0,menubar=0,status=0,location=0,scrollbars=0");return!1};NectarSocial.prototype.linkedInShare=function(){var windowLocation=window.location.href.replace(window.location.hash,'');var $pageTitle;if($(".section-title h1").length>0){$pageTitle=encodeURIComponent($(".section-title h1").text())}else{$pageTitle=encodeURIComponent($(document).find("title").text())}
window.open('http://www.linkedin.com/shareArticle?mini=true&url='+windowLocation+'&title='+$pageTitle+'',"linkedInWindow","height=480,width=660,resizable=0,toolbar=0,menubar=0,status=0,location=0,scrollbars=0");return!1};NectarSocial.prototype.woolinkedInShare=function(){var windowLocation=window.location.href.replace(window.location.hash,'');window.open('http://www.linkedin.com/shareArticle?mini=true&url='+windowLocation+'&title='+$("h1.product_title").text(),"twitterWindow","height=380,width=660,resizable=0,toolbar=0,menubar=0,status=0,location=0,scrollbars=0");return!1};NectarSocial.prototype.pinterestShare=function(){var windowLocation=window.location.href.replace(window.location.hash,'');var $sharingImg=($('.single-portfolio').length>0&&$('div[data-featured-img]').attr('data-featured-img')!='empty')?$('div[data-featured-img]').attr('data-featured-img'):$('#ajax-content-wrap img').first().attr('src');var $pageTitle;if($(".section-title h1").length>0){$pageTitle=encodeURIComponent($(".section-title h1").text())}else{$pageTitle=encodeURIComponent($(document).find("title").text())}
window.open('http://pinterest.com/pin/create/button/?url='+windowLocation+'&media='+$sharingImg+'&description='+$pageTitle,"pinterestWindow","height=640,width=660,resizable=0,toolbar=0,menubar=0,status=0,location=0,scrollbars=0");return!1};NectarSocial.prototype.wooPinterestShare=function(){var $imgToShare=($('img.attachment-shop_single').length>0)?$('img.attachment-shop_single').first().attr('src'):$('.single-product-main-image img').first().attr('src');var windowLocation=window.location.href.replace(window.location.hash,'');window.open('http://pinterest.com/pin/create/button/?url='+windowLocation+'&media='+$imgToShare+'&description='+$('h1.product_title').text(),"pinterestWindow","height=640,width=660,resizable=0,toolbar=0,menubar=0,status=0,location=0,scrollbars=0");return!1};NectarSocial.prototype.nectarLove=function(){this.$body.on('click','.nectar-love',function(){var $loveLink=$(this),$id=$(this).attr('id'),$that=$(this);if($loveLink.hasClass('loved')||$(this).hasClass('inactive')){return!1}
var $dataToPass={action:'nectar-love',loves_id:$id,love_nonce:window.nectarLove.loveNonce};$.post(window.nectarLove.ajaxurl,$dataToPass,function(data){$loveLink.find('.nectar-love-count').html(data);$loveLink.addClass('loved').attr('title','You already love this!');$that.find('.icon-salient-heart-2').addClass('loved')});$(this).addClass('inactive');return!1})};NectarSocial.prototype.fixedStyle=function(){$('.wpb_wrapper .nectar-social.fixed').each(function(i){if(i!==0){$(this).remove()}else{var $fixedMarkup=$(this).clone();$('body').append($fixedMarkup);$(this).remove()}});function showFixedSharing(){if($(window).scrollTop()>150){$('.nectar-social.fixed').addClass('visible');$(window).off('scroll',showFixedSharing);$(window).on('scroll',hideFixedSharing)}}
function hideFixedSharing(){if($(window).scrollTop()<150){$('.nectar-social.fixed').removeClass('visible');$(window).off('scroll',hideFixedSharing);$(window).on('scroll',showFixedSharing)}}
if($(window).width()<1000&&$('.nectar-social.fixed').length>0){if($(window).scrollTop()>150){$(window).on('scroll',hideFixedSharing)}else{$(window).on('scroll',showFixedSharing)}}
$(window).on('smartresize',function(){if($(window).width()>1000){$('.nectar-social.fixed').addClass('visible')}else if($(window).scrollTop()<150){$(window).off('scroll',hideFixedSharing);$(window).on('scroll',showFixedSharing);$('.nectar-social.fixed').removeClass('visible')}else{$(window).off('scroll',showFixedSharing);$(window).on('scroll',hideFixedSharing)}})};var nectarSocialInit=new NectarSocial();window.NectarSocial=NectarSocial});
/*!
 * JavaScript Cookie v2.1.4
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
!function(e){var n,o,t=!1;"function"==typeof define&&define.amd&&(define(e),t=!0),"object"==typeof exports&&(module.exports=e(),t=!0),t||(n=window.Cookies,(o=window.Cookies=e()).noConflict=function(){return window.Cookies=n,o})}(function(){function m(){for(var e=0,n={};e<arguments.length;e++){var o,t=arguments[e];for(o in t)n[o]=t[o]}return n}return function e(C){function g(e,n,o){var t,r;if("undefined"!=typeof document){if(1<arguments.length){"number"==typeof(o=m({path:"/"},g.defaults,o)).expires&&((r=new Date).setMilliseconds(r.getMilliseconds()+864e5*o.expires),o.expires=r),o.expires=o.expires?o.expires.toUTCString():"";try{t=JSON.stringify(n),/^[\{\[]/.test(t)&&(n=t)}catch(l){}n=C.write?C.write(n,e):encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),e=(e=(e=encodeURIComponent(String(e))).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape);var i,c="";for(i in o)o[i]&&(c+="; "+i,!0!==o[i]&&(c+="="+o[i]));return document.cookie=e+"="+n+c}e||(t={});for(var s=document.cookie?document.cookie.split("; "):[],f=/(%[0-9A-Z]{2})+/g,p=0;p<s.length;p++){var a=s[p].split("=");'"'===(u=a.slice(1).join("=")).charAt(0)&&(u=u.slice(1,-1));try{var d=a[0].replace(f,decodeURIComponent),u=C.read?C.read(u,d):C(u,d)||u.replace(f,decodeURIComponent);if(this.json)try{u=JSON.parse(u)}catch(l){}if(e===d){t=u;break}e||(t[d]=u)}catch(l){}}return t}}return(g.set=g).get=function(e){return g.call(g,e)},g.getJSON=function(){return g.apply({json:!0},[].slice.call(arguments))},g.defaults={},g.remove=function(e,n){g(e,"",m(n,{expires:-1}))},g.withConverter=e,g}(function(){})});
jQuery(function(s){s(".woocommerce-ordering").on("change","select.orderby",function(){s(this).closest("form").trigger("submit")}),s("input.qty:not(.product-quantity input.qty)").each(function(){var o=parseFloat(s(this).attr("min"));0<=o&&parseFloat(s(this).val())<o&&s(this).val(o)});var e="store_notice"+(s(".woocommerce-store-notice").data("noticeId")||"");"hidden"===Cookies.get(e)?s(".woocommerce-store-notice").hide():s(".woocommerce-store-notice").show(),s(".woocommerce-store-notice__dismiss-link").on("click",function(o){Cookies.set(e,"hidden",{path:"/"}),s(".woocommerce-store-notice").hide(),o.preventDefault()}),s(".woocommerce-input-wrapper span.description").length&&s(document.body).on("click",function(){s(".woocommerce-input-wrapper span.description:visible").prop("aria-hidden",!0).slideUp(250)}),s(".woocommerce-input-wrapper").on("click",function(o){o.stopPropagation()}),s(".woocommerce-input-wrapper :input").on("keydown",function(o){var e=s(this).parent().find("span.description");if(27===o.which&&e.length&&e.is(":visible"))return e.prop("aria-hidden",!0).slideUp(250),o.preventDefault(),!1}).on("click focus",function(){var o=s(this).parent(),e=o.find("span.description");o.addClass("currentTarget"),s(".woocommerce-input-wrapper:not(.currentTarget) span.description:visible").prop("aria-hidden",!0).slideUp(250),e.length&&e.is(":hidden")&&e.prop("aria-hidden",!1).slideDown(250),o.removeClass("currentTarget")}),s.scroll_to_notices=function(o){o.length&&s("html, body").animate({scrollTop:o.offset().top-100},1e3)},s('.woocommerce form .woocommerce-Input[type="password"]').wrap('<span class="password-input"></span>'),s(".woocommerce form input").filter(":password").parent("span").addClass("password-input"),s(".password-input").append('<span class="show-password-input"></span>'),s(".show-password-input").on("click",function(){s(this).hasClass("display-password")?s(this).removeClass("display-password"):s(this).addClass("display-password"),s(this).hasClass("display-password")?s(this).siblings(['input[type="password"]']).prop("type","text"):s(this).siblings('input[type="text"]').prop("type","password")})});
jQuery(function(r){if("undefined"==typeof wc_cart_fragments_params)return!1;var t=!0,o=wc_cart_fragments_params.cart_hash_key;try{t="sessionStorage"in window&&null!==window.sessionStorage,window.sessionStorage.setItem("wc","test"),window.sessionStorage.removeItem("wc"),window.localStorage.setItem("wc","test"),window.localStorage.removeItem("wc")}catch(f){t=!1}function a(){t&&sessionStorage.setItem("wc_cart_created",(new Date).getTime())}function s(e){t&&(localStorage.setItem(o,e),sessionStorage.setItem(o,e))}var e={url:wc_cart_fragments_params.wc_ajax_url.toString().replace("%%endpoint%%","get_refreshed_fragments"),type:"POST",data:{time:(new Date).getTime()},timeout:wc_cart_fragments_params.request_timeout,success:function(e){e&&e.fragments&&(r.each(e.fragments,function(e,t){r(e).replaceWith(t)}),t&&(sessionStorage.setItem(wc_cart_fragments_params.fragment_name,JSON.stringify(e.fragments)),s(e.cart_hash),e.cart_hash&&a()),r(document.body).trigger("wc_fragments_refreshed"))},error:function(){r(document.body).trigger("wc_fragments_ajax_error")}};function n(){r.ajax(e)}if(t){var i=null;r(document.body).on("wc_fragment_refresh updated_wc_div",function(){n()}),r(document.body).on("added_to_cart removed_from_cart",function(e,t,r){var n=sessionStorage.getItem(o);null!==n&&n!==undefined&&""!==n||a(),sessionStorage.setItem(wc_cart_fragments_params.fragment_name,JSON.stringify(t)),s(r)}),r(document.body).on("wc_fragments_refreshed",function(){clearTimeout(i),i=setTimeout(n,864e5)}),r(window).on("storage onstorage",function(e){o===e.originalEvent.key&&localStorage.getItem(o)!==sessionStorage.getItem(o)&&n()}),r(window).on("pageshow",function(e){e.originalEvent.persisted&&(r(".widget_shopping_cart_content").empty(),r(document.body).trigger("wc_fragment_refresh"))});try{var c=JSON.parse(sessionStorage.getItem(wc_cart_fragments_params.fragment_name)),_=sessionStorage.getItem(o),g=Cookies.get("woocommerce_cart_hash"),m=sessionStorage.getItem("wc_cart_created");if(null!==_&&_!==undefined&&""!==_||(_=""),null!==g&&g!==undefined&&""!==g||(g=""),_&&(null===m||m===undefined||""===m))throw"No cart_created";if(m){var d=+m+864e5,w=(new Date).getTime();if(d<w)throw"Fragment expired";i=setTimeout(n,d-w)}if(!c||!c["div.widget_shopping_cart_content"]||_!==g)throw"No fragment";r.each(c,function(e,t){r(e).replaceWith(t)}),r(document.body).trigger("wc_fragments_loaded")}catch(f){n()}}else n();0<Cookies.get("woocommerce_items_in_cart")?r(".hide_cart_widget_if_empty").closest(".widget_shopping_cart").show():r(".hide_cart_widget_if_empty").closest(".widget_shopping_cart").hide(),r(document.body).on("adding_to_cart",function(){r(".hide_cart_widget_if_empty").closest(".widget_shopping_cart").show()}),"undefined"!=typeof wp&&wp.customize&&wp.customize.selectiveRefresh&&wp.customize.widgetsPreview&&wp.customize.widgetsPreview.WidgetPartial&&wp.customize.selectiveRefresh.bind("partial-content-rendered",function(){n()})});
jQuery.easing.jswing=jQuery.easing.swing;jQuery.extend(jQuery.easing,{def:'easeOutQuad',swing:function(x,t,b,c,d){return c*(t/=d)*t+b},easeInQuad:function(x,t,b,c,d){return c*(t/=d)*t+b},easeOutQuad:function(x,t,b,c,d){return-c*(t/=d)*(t-2)+b},easeInOutQuad:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t+b;return-c/2*((--t)*(t-2)-1)+b},easeInCubic:function(x,t,b,c,d){return c*(t/=d)*t*t+b},easeOutCubic:function(x,t,b,c,d){return c*((t=t/d-1)*t*t+1)+b},easeInOutCubic:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t+b;return c/2*((t-=2)*t*t+2)+b},easeInQuart:function(x,t,b,c,d){return c*(t/=d)*t*t*t+b},easeOutQuart:function(x,t,b,c,d){return-c*((t=t/d-1)*t*t*t-1)+b},easeInOutQuart:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t+b;return-c/2*((t-=2)*t*t*t-2)+b},easeInQuint:function(x,t,b,c,d){return c*(t/=d)*t*t*t*t+b},easeOutQuint:function(x,t,b,c,d){return c*((t=t/d-1)*t*t*t*t+1)+b},easeInOutQuint:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t*t+b;return c/2*((t-=2)*t*t*t*t+2)+b},easeInSine:function(x,t,b,c,d){return-c*Math.cos(t/d*(Math.PI/2))+c+b},easeOutSine:function(x,t,b,c,d){return c*Math.sin(t/d*(Math.PI/2))+b},easeInOutSine:function(x,t,b,c,d){return-c/2*(Math.cos(Math.PI*t/d)-1)+b},easeInExpo:function(x,t,b,c,d){return(t==0)?b:c*Math.pow(2,10*(t/d-1))+b},easeOutExpo:function(x,t,b,c,d){return(t==d)?b+c:c*(-Math.pow(2,-10*t/d)+1)+b},easeInOutExpo:function(x,t,b,c,d){if(t==0)return b;if(t==d)return b+c;if((t/=d/2)<1)return c/2*Math.pow(2,10*(t-1))+b;return c/2*(-Math.pow(2,-10*--t)+2)+b},easeInCirc:function(x,t,b,c,d){return-c*(Math.sqrt(1-(t/=d)*t)-1)+b},easeOutCirc:function(x,t,b,c,d){return c*Math.sqrt(1-(t=t/d-1)*t)+b},easeInOutCirc:function(x,t,b,c,d){if((t/=d/2)<1)return-c/2*(Math.sqrt(1-t*t)-1)+b;return c/2*(Math.sqrt(1-(t-=2)*t)+1)+b},easeInElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4}else var s=p/(2*Math.PI)*Math.asin(c/a);return-(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b},easeOutElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*.3;if(a<Math.abs(c)){a=c;var s=p/4}else var s=p/(2*Math.PI)*Math.asin(c/a);return a*Math.pow(2,-10*t)*Math.sin((t*d-s)*(2*Math.PI)/p)+c+b},easeInOutElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d/2)==2)return b+c;if(!p)p=d*(.3*1.5);if(a<Math.abs(c)){a=c;var s=p/4}else var s=p/(2*Math.PI)*Math.asin(c/a);if(t<1)return-.5*(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;return a*Math.pow(2,-10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p)*.5+c+b},easeInBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;return c*(t/=d)*t*((s+1)*t-s)+b},easeOutBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;return c*((t=t/d-1)*t*((s+1)*t+s)+1)+b},easeInOutBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;if((t/=d/2)<1)return c/2*(t*t*(((s*=(1.525))+1)*t-s))+b;return c/2*((t-=2)*t*(((s*=(1.525))+1)*t+s)+2)+b},easeInBounce:function(x,t,b,c,d){return c-jQuery.easing.easeOutBounce(x,d-t,0,c,d)+b},easeOutBounce:function(x,t,b,c,d){if((t/=d)<(1/2.75)){return c*(7.5625*t*t)+b}else if(t<(2/2.75)){return c*(7.5625*(t-=(1.5/2.75))*t+.75)+b}else if(t<(2.5/2.75)){return c*(7.5625*(t-=(2.25/2.75))*t+.9375)+b}else{return c*(7.5625*(t-=(2.625/2.75))*t+.984375)+b}},easeInOutBounce:function(x,t,b,c,d){if(t<d/2)return jQuery.easing.easeInBounce(x,t*2,0,c,d)*.5+b;return jQuery.easing.easeOutBounce(x,t*2-d,0,c,d)*.5+c*.5+b}});
/*!
 * jQuery Mousewheel 
 *
 * Copyright 2015 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a:a(jQuery)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120===0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b),d=c["offsetParent"in a.fn?"offsetParent":"parent"]();return d.length||(d=a("body")),parseInt(d.css("fontSize"),10)||parseInt(c.css("fontSize"),10)||16},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})});
var headerEl=document.getElementById('header-outer');var headerSpaceEl=document.getElementById('header-space');if(typeof(headerEl)!='undefined'&&headerEl!=null&&typeof(headerSpaceEl)!='undefined'&&headerSpaceEl!=null&&headerSpaceEl.hasAttribute('data-secondary-header-display')){headerSpaceEl.style.height=headerEl.clientHeight+'px'}
jQuery(function($){"use strict";var using_mobile_browser=!1;if(navigator.userAgent.match(/(Android|iPod|iPhone|iPad|BlackBerry|IEMobile|Opera Mini)/)){using_mobile_browser=!0}
var nectarPageHeader;function fullscreenHeightCalc(){var pageHeaderOffset=nectarPageHeader.offset().top;nectarPageHeader.css('height',(parseInt(window.innerHeight)-parseInt(pageHeaderOffset))+'px')}
if(using_mobile_browser&&$('#page-header-bg.fullscreen-header').length>0){nectarPageHeader=$('#page-header-bg');fullscreenHeightCalc();var $windowDOMWidth=window.innerWidth,$windowDOMHeight=window.innerHeight;$(window).resize(function(){if(($(window).width()!=$windowDOMWidth&&$(window).height!=$windowDOMHeight)){fullscreenHeightCalc();$windowDOMWidth=window.innerWidth;$windowDOMHeight=window.innerHeight}})}
function portfolioFullScreenSliderCalcs(){var $bodyBorderSize=($('.body-border-top').length>0&&$(window).width()>1000)?$('.body-border-top').height():0;$('.nectar_fullscreen_zoom_recent_projects').each(function(){if($(this).parents('.first-section').length>0){$(this).css('height',$(window).height()-$(this).offset().top-$bodyBorderSize)}else{$(this).css('height',$(window).height())}})}
if(using_mobile_browser&&$('.nectar_fullscreen_zoom_recent_projects').length>0){portfolioFullScreenSliderCalcs()}
function centeredNavBottomBarReposition(){var $headerSpan9=$('#header-outer[data-format="centered-menu-bottom-bar"] header#top .span_9');var $headerSpan3=$('#header-outer[data-format="centered-menu-bottom-bar"] header#top .span_3');var $secondaryHeader=$('#header-secondary-outer');var $logoLinkClone=$headerSpan3.find('#logo').clone();if($logoLinkClone.is('[data-supplied-ml="true"]')){$logoLinkClone.find('img:not(.mobile-only-logo)').remove()}
$logoLinkClone.find('img.starting-logo').remove();if($secondaryHeader.length>0){$secondaryHeader.addClass('centered-menu-bottom-bar')}
if($('#header-outer[data-condense="true"]').length>0){$headerSpan9.prepend($logoLinkClone)}}
if($('#header-outer[data-format="centered-menu-bottom-bar"]').length>0){centeredNavBottomBarReposition()}
$('#page-header-bg[data-animate-in-effect="zoom-out"]').addClass('loaded');function sliderFontOverrides(){var $overrideCSS='';$('.nectar-slider-wrap').each(function(){if($(this).find('.swiper-container[data-tho]').length>0){var $tho=$(this).find('.swiper-container').attr('data-tho');var $tco=$(this).find('.swiper-container').attr('data-tco');var $pho=$(this).find('.swiper-container').attr('data-pho');var $pco=$(this).find('.swiper-container').attr('data-pco');if($tho!='auto'||$tco!='auto'){$overrideCSS+='@media only screen and (max-width: 1000px) and (min-width: 690px) {';if($tho!='auto')
$overrideCSS+='#'+$(this).attr('id')+'.nectar-slider-wrap[data-full-width="false"] .swiper-slide .content h2, #boxed .nectar-slider-wrap#'+$(this).attr('id')+' .swiper-slide .content h2, body .nectar-slider-wrap#'+$(this).attr('id')+'[data-full-width="true"] .swiper-slide .content h2, body .nectar-slider-wrap#'+$(this).attr('id')+'[data-full-width="boxed-full-width"] .swiper-slide .content h2, body .full-width-content .vc_span12 .nectar-slider-wrap#'+$(this).attr('id')+' .swiper-slide .content h2 { font-size:'+$tho+'px!important; line-height:'+(parseInt($tho)+10)+'px!important;  }';if($pho!='auto')
$overrideCSS+='#'+$(this).attr('id')+'.nectar-slider-wrap[data-full-width="false"] .swiper-slide .content p, #boxed .nectar-slider-wrap#'+$(this).attr('id')+' .swiper-slide .content p, body .nectar-slider-wrap#'+$(this).attr('id')+'[data-full-width="true"] .swiper-slide .content p, body .nectar-slider-wrap#'+$(this).attr('id')+'[data-full-width="boxed-full-width"] .swiper-slide .content p, body .full-width-content .vc_span12 .nectar-slider-wrap#'+$(this).attr('id')+' .swiper-slide .content p { font-size:'+$tco+'px!important; line-height:'+(parseInt($tco)+10)+'px!important;  }';$overrideCSS+='}'}
if($pho!='auto'||$pco!='auto'){$overrideCSS+='@media only screen and (max-width: 690px) {';if($pho!='auto')
$overrideCSS+='#'+$(this).attr('id')+'.nectar-slider-wrap[data-full-width="false"] .swiper-slide .content h2, #boxed .nectar-slider-wrap#'+$(this).attr('id')+' .swiper-slide .content h2, body .nectar-slider-wrap#'+$(this).attr('id')+'[data-full-width="true"] .swiper-slide .content h2, body .nectar-slider-wrap#'+$(this).attr('id')+'[data-full-width="boxed-full-width"] .swiper-slide .content h2, body .full-width-content .vc_span12 .nectar-slider-wrap#'+$(this).attr('id')+' .swiper-slide .content h2 { font-size:'+$pho+'px!important; line-height:'+(parseInt($pho)+10)+'px!important;  }';if($pho!='auto')
$overrideCSS+='#'+$(this).attr('id')+'.nectar-slider-wrap[data-full-width="false"] .swiper-slide .content p, #boxed .nectar-slider-wrap#'+$(this).attr('id')+' .swiper-slide .content p,  body .nectar-slider-wrap#'+$(this).attr('id')+'[data-full-width="true"] .swiper-slide .content p, body .nectar-slider-wrap#'+$(this).attr('id')+'[data-full-width="boxed-full-width"] .swiper-slide .content p, body .full-width-content .vc_span12 .nectar-slider-wrap#'+$(this).attr('id')+' .swiper-slide .content p { font-size:'+$pco+'px!important; line-height:'+(parseInt($pco)+10)+'px!important;  }';$overrideCSS+='}'}}});if($overrideCSS.length>1){var head=document.head||document.getElementsByTagName('head')[0];var style=document.createElement('style');style.type='text/css';if(style.styleSheet){style.styleSheet.cssText=$overrideCSS}else{style.appendChild(document.createTextNode($overrideCSS))}
head.appendChild(style);$('.nectar-slider-wrap .content').css('visibility','visible')}}
sliderFontOverrides()});
/*!
* jQuery Transit - CSS3 transitions and transformations
* (c) 2011-2012 Rico Sta. Cruz <rico@ricostacruz.com>
* MIT Licensed.
*/
(function(k){k.transit={version:"0.9.9",propertyMap:{marginLeft:"margin",marginRight:"margin",marginBottom:"margin",marginTop:"margin",paddingLeft:"padding",paddingRight:"padding",paddingBottom:"padding",paddingTop:"padding"},enabled:!0,useTransitionEnd:!1};var d=document.createElement("div");var q={};function b(v){if(v in d.style){return v}var u=["Moz","Webkit","O","ms"];var r=v.charAt(0).toUpperCase()+v.substr(1);if(v in d.style){return v}for(var t=0;t<u.length;++t){var s=u[t]+r;if(s in d.style){return s}}}function e(){d.style[q.transform]="";d.style[q.transform]="rotateY(90deg)";return d.style[q.transform]!==""}var a=navigator.userAgent.toLowerCase().indexOf("chrome")>-1;q.transition=b("transition");q.transitionDelay=b("transitionDelay");q.transform=b("transform");q.transformOrigin=b("transformOrigin");q.transform3d=e();var i={transition:"transitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",WebkitTransition:"webkitTransitionEnd",msTransition:"MSTransitionEnd"};var f=q.transitionEnd=i[q.transition]||null;for(var p in q){if(q.hasOwnProperty(p)&&typeof k.support[p]==="undefined"){k.support[p]=q[p]}}d=null;k.cssEase={_default:"ease","in":"ease-in",out:"ease-out","in-out":"ease-in-out",snap:"cubic-bezier(0,1,.5,1)",easeOutCubic:"cubic-bezier(.215,.61,.355,1)",easeInOutCubic:"cubic-bezier(.645,.045,.355,1)",easeInCirc:"cubic-bezier(.6,.04,.98,.335)",easeOutCirc:"cubic-bezier(.075,.82,.165,1)",easeInOutCirc:"cubic-bezier(.785,.135,.15,.86)",easeInExpo:"cubic-bezier(.95,.05,.795,.035)",easeOutExpo:"cubic-bezier(.19,1,.22,1)",easeInOutExpo:"cubic-bezier(1,0,0,1)",easeInQuad:"cubic-bezier(.55,.085,.68,.53)",easeOutQuad:"cubic-bezier(.25,.46,.45,.94)",easeInOutQuad:"cubic-bezier(.455,.03,.515,.955)",easeInQuart:"cubic-bezier(.895,.03,.685,.22)",easeOutQuart:"cubic-bezier(.165,.84,.44,1)",easeInOutQuart:"cubic-bezier(.77,0,.175,1)",easeInQuint:"cubic-bezier(.755,.05,.855,.06)",easeOutQuint:"cubic-bezier(.23,1,.32,1)",easeInOutQuint:"cubic-bezier(.86,0,.07,1)",easeInSine:"cubic-bezier(.47,0,.745,.715)",easeOutSine:"cubic-bezier(.39,.575,.565,1)",easeInOutSine:"cubic-bezier(.445,.05,.55,.95)",easeInBack:"cubic-bezier(.6,-.28,.735,.045)",easeOutBack:"cubic-bezier(.175, .885,.32,1.275)",easeInOutBack:"cubic-bezier(.68,-.55,.265,1.55)"};k.cssHooks["transit:transform"]={get:function(r){return k(r).data("transform")||new j()},set:function(s,r){var t=r;if(!(t instanceof j)){t=new j(t)}if(q.transform==="WebkitTransform"&&!a){s.style[q.transform]=t.toString(!0)}else{s.style[q.transform]=t.toString()}k(s).data("transform",t)}};k.cssHooks.transform={set:k.cssHooks["transit:transform"].set};if(k.fn.jquery<"1.8"){k.cssHooks.transformOrigin={get:function(r){return r.style[q.transformOrigin]},set:function(r,s){r.style[q.transformOrigin]=s}};k.cssHooks.transition={get:function(r){return r.style[q.transition]},set:function(r,s){r.style[q.transition]=s}}}n("scale");n("translate");n("rotate");n("rotateX");n("rotateY");n("rotate3d");n("perspective");n("skewX");n("skewY");n("x",!0);n("y",!0);function j(r){if(typeof r==="string"){this.parse(r)}return this}j.prototype={setFromString:function(t,s){var r=(typeof s==="string")?s.split(","):(s.constructor===Array)?s:[s];r.unshift(t);j.prototype.set.apply(this,r)},set:function(s){var r=Array.prototype.slice.apply(arguments,[1]);if(this.setter[s]){this.setter[s].apply(this,r)}else{this[s]=r.join(",")}},get:function(r){if(this.getter[r]){return this.getter[r].apply(this)}else{return this[r]||0}},setter:{rotate:function(r){this.rotate=o(r,"deg")},rotateX:function(r){this.rotateX=o(r,"deg")},rotateY:function(r){this.rotateY=o(r,"deg")},scale:function(r,s){if(s===undefined){s=r}this.scale=r+","+s},skewX:function(r){this.skewX=o(r,"deg")},skewY:function(r){this.skewY=o(r,"deg")},perspective:function(r){this.perspective=o(r,"px")},x:function(r){this.set("translate",r,null)},y:function(r){this.set("translate",null,r)},translate:function(r,s){if(this._translateX===undefined){this._translateX=0}if(this._translateY===undefined){this._translateY=0}if(r!==null&&r!==undefined){this._translateX=o(r,"px")}if(s!==null&&s!==undefined){this._translateY=o(s,"px")}this.translate=this._translateX+","+this._translateY}},getter:{x:function(){return this._translateX||0},y:function(){return this._translateY||0},scale:function(){var r=(this.scale||"1,1").split(",");if(r[0]){r[0]=parseFloat(r[0])}if(r[1]){r[1]=parseFloat(r[1])}return(r[0]===r[1])?r[0]:r},rotate3d:function(){var t=(this.rotate3d||"0,0,0,0deg").split(",");for(var r=0;r<=3;++r){if(t[r]){t[r]=parseFloat(t[r])}}if(t[3]){t[3]=o(t[3],"deg")}return t}},parse:function(s){var r=this;s.replace(/([a-zA-Z0-9]+)\((.*?)\)/g,function(t,v,u){r.setFromString(v,u)})},toString:function(t){var s=[];for(var r in this){if(this.hasOwnProperty(r)){if((!q.transform3d)&&((r==="rotateX")||(r==="rotateY")||(r==="perspective")||(r==="transformOrigin"))){continue}if(r[0]!=="_"){if(t&&(r==="scale")){s.push(r+"3d("+this[r]+",1)")}else{if(t&&(r==="translate")){s.push(r+"3d("+this[r]+",0)")}else{s.push(r+"("+this[r]+")")}}}}}return s.join(" ")}};function m(s,r,t){if(r===!0){s.queue(t)}else{if(r){s.queue(r,t)}else{t()}}}function h(s){var r=[];k.each(s,function(t){t=k.camelCase(t);t=k.transit.propertyMap[t]||k.cssProps[t]||t;t=c(t);if(k.inArray(t,r)===-1){r.push(t)}});return r}function g(s,v,x,r){var t=h(s);if(k.cssEase[x]){x=k.cssEase[x]}var w=""+l(v)+" "+x;if(parseInt(r,10)>0){w+=" "+l(r)}var u=[];k.each(t,function(z,y){u.push(y+" "+w)});return u.join(", ")}k.fn.transition=k.fn.transit=function(z,s,y,C){var D=this;var u=0;var w=!0;if(typeof s==="function"){C=s;s=undefined}if(typeof y==="function"){C=y;y=undefined}if(typeof z.easing!=="undefined"){y=z.easing;delete z.easing}if(typeof z.duration!=="undefined"){s=z.duration;delete z.duration}if(typeof z.complete!=="undefined"){C=z.complete;delete z.complete}if(typeof z.queue!=="undefined"){w=z.queue;delete z.queue}if(typeof z.delay!=="undefined"){u=z.delay;delete z.delay}if(typeof s==="undefined"){s=k.fx.speeds._default}if(typeof y==="undefined"){y=k.cssEase._default}s=l(s);var E=g(z,s,y,u);var B=k.transit.enabled&&q.transition;var t=B?(parseInt(s,10)+parseInt(u,10)):0;if(t===0){var A=function(F){D.css(z);if(C){C.apply(D)}if(F){F()}};m(D,w,A);return D}var x={};var r=function(H){var G=!1;var F=function(){if(G){D.unbind(f,F)}if(t>0){D.each(function(){this.style[q.transition]=(x[this]||null)})}if(typeof C==="function"){C.apply(D)}if(typeof H==="function"){H()}};if((t>0)&&(f)&&(k.transit.useTransitionEnd)){G=!0;D.bind(f,F)}else{window.setTimeout(F,t)}D.each(function(){if(t>0){this.style[q.transition]=E}k(this).css(z)})};var v=function(F){this.offsetWidth;r(F)};m(D,w,v);return this};function n(s,r){if(!r){k.cssNumber[s]=!0}k.transit.propertyMap[s]=q.transform;k.cssHooks[s]={get:function(v){var u=k(v).css("transit:transform");return u.get(s)},set:function(v,w){var u=k(v).css("transit:transform");u.setFromString(s,w);k(v).css({"transit:transform":u})}}}function c(r){return r.replace(/([A-Z])/g,function(s){return"-"+s.toLowerCase()})}function o(s,r){if((typeof s==="string")&&(!s.match(/^[\-0-9\.]+$/))){return s}else{return""+s+r}}function l(s){var r=s;if(k.fx.speeds[r]){r=k.fx.speeds[r]}return o(r,"ms")}k.transit.getTransitionValue=g})(jQuery);
/*!
Waypoints - 4.0.1
*/
!function(){"use strict";function t(o){if(!o)throw new Error("No options passed to Waypoint constructor");if(!o.element)throw new Error("No element option passed to Waypoint constructor");if(!o.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+e,this.options=t.Adapter.extend({},t.defaults,o),this.element=this.options.element,this.adapter=new t.Adapter(this.element),this.callback=o.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=t.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=t.Context.findOrCreateByElement(this.options.context),t.offsetAliases[this.options.offset]&&(this.options.offset=t.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),i[this.key]=this,e+=1}var e=0,i={};t.prototype.queueTrigger=function(t){this.group.queueTrigger(this,t)},t.prototype.trigger=function(t){this.enabled&&this.callback&&this.callback.apply(this,t)},t.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete i[this.key]},t.prototype.disable=function(){return this.enabled=!1,this},t.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},t.prototype.next=function(){return this.group.next(this)},t.prototype.previous=function(){return this.group.previous(this)},t.invokeAll=function(t){var e=[];for(var o in i)e.push(i[o]);for(var n=0,r=e.length;r>n;n++)e[n][t]()},t.destroyAll=function(){t.invokeAll("destroy")},t.disableAll=function(){t.invokeAll("disable")},t.enableAll=function(){t.Context.refreshAll();for(var e in i)i[e].enabled=!0;return this},t.refreshAll=function(){t.Context.refreshAll()},t.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},t.viewportWidth=function(){return document.documentElement.clientWidth},t.adapters=[],t.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},t.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=t}(),function(){"use strict";function t(t){window.setTimeout(t,1e3/60)}function e(t){this.element=t,this.Adapter=n.Adapter,this.adapter=new this.Adapter(t),this.key="waypoint-context-"+i,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,o[t.waypointContextKey]=this,i+=1,n.windowContext||(n.windowContext=!0,n.windowContext=new e(window)),this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var i=0,o={},n=window.Waypoint,r=window.onload;e.prototype.add=function(t){var e=t.options.horizontal?"horizontal":"vertical";this.waypoints[e][t.key]=t,this.refresh()},e.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),e=this.Adapter.isEmptyObject(this.waypoints.vertical),i=this.element==this.element.window;t&&e&&!i&&(this.adapter.off(".waypoints"),delete o[this.key])},e.prototype.createThrottledResizeHandler=function(){function t(){e.handleResize(),e.didResize=!1}var e=this;this.adapter.on("resize.waypoints",function(){e.didResize||(e.didResize=!0,n.requestAnimationFrame(t))})},e.prototype.createThrottledScrollHandler=function(){function t(){e.handleScroll(),e.didScroll=!1}var e=this;this.adapter.on("scroll.waypoints",function(){(!e.didScroll||n.isTouch)&&(e.didScroll=!0,n.requestAnimationFrame(t))})},e.prototype.handleResize=function(){n.Context.refreshAll()},e.prototype.handleScroll=function(){var t={},e={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var i in e){var o=e[i],n=o.newScroll>o.oldScroll,r=n?o.forward:o.backward;for(var s in this.waypoints[i]){var a=this.waypoints[i][s];if(null!==a.triggerPoint){var l=o.oldScroll<a.triggerPoint,h=o.newScroll>=a.triggerPoint,p=l&&h,u=!l&&!h;(p||u)&&(a.queueTrigger(r),t[a.group.id]=a.group)}}}for(var c in t)t[c].flushTriggers();this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}},e.prototype.innerHeight=function(){return this.element==this.element.window?n.viewportHeight():this.adapter.innerHeight()},e.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty()},e.prototype.innerWidth=function(){return this.element==this.element.window?n.viewportWidth():this.adapter.innerWidth()},e.prototype.destroy=function(){var t=[];for(var e in this.waypoints)for(var i in this.waypoints[e])t.push(this.waypoints[e][i]);for(var o=0,n=t.length;n>o;o++)t[o].destroy()},e.prototype.refresh=function(){var t,e=this.element==this.element.window,i=e?void 0:this.adapter.offset(),o={};this.handleScroll(),t={horizontal:{contextOffset:e?0:i.left,contextScroll:e?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:e?0:i.top,contextScroll:e?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};for(var r in t){var s=t[r];for(var a in this.waypoints[r]){var l,h,p,u,c,d=this.waypoints[r][a],f=d.options.offset,w=d.triggerPoint,y=0,g=null==w;d.element!==d.element.window&&(y=d.adapter.offset()[s.offsetProp]),"function"==typeof f?f=f.apply(d):"string"==typeof f&&(f=parseFloat(f),d.options.offset.indexOf("%")>-1&&(f=Math.ceil(s.contextDimension*f/100))),l=s.contextScroll-s.contextOffset,d.triggerPoint=Math.floor(y+l-f),h=w<s.oldScroll,p=d.triggerPoint>=s.oldScroll,u=h&&p,c=!h&&!p,!g&&u?(d.queueTrigger(s.backward),o[d.group.id]=d.group):!g&&c?(d.queueTrigger(s.forward),o[d.group.id]=d.group):g&&s.oldScroll>=d.triggerPoint&&(d.queueTrigger(s.forward),o[d.group.id]=d.group)}}return n.requestAnimationFrame(function(){for(var t in o)o[t].flushTriggers()}),this},e.findOrCreateByElement=function(t){return e.findByElement(t)||new e(t)},e.refreshAll=function(){for(var t in o)o[t].refresh()},e.findByElement=function(t){return o[t.waypointContextKey]},window.onload=function(){r&&r(),e.refreshAll()},n.requestAnimationFrame=function(e){var i=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||t;i.call(window,e)},n.Context=e}(),function(){"use strict";function t(t,e){return t.triggerPoint-e.triggerPoint}function e(t,e){return e.triggerPoint-t.triggerPoint}function i(t){this.name=t.name,this.axis=t.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),o[this.axis][this.name]=this}var o={vertical:{},horizontal:{}},n=window.Waypoint;i.prototype.add=function(t){this.waypoints.push(t)},i.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},i.prototype.flushTriggers=function(){for(var i in this.triggerQueues){var o=this.triggerQueues[i],n="up"===i||"left"===i;o.sort(n?e:t);for(var r=0,s=o.length;s>r;r+=1){var a=o[r];(a.options.continuous||r===o.length-1)&&a.trigger([i])}}this.clearTriggerQueues()},i.prototype.next=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints),o=i===this.waypoints.length-1;return o?null:this.waypoints[i+1]},i.prototype.previous=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints);return i?this.waypoints[i-1]:null},i.prototype.queueTrigger=function(t,e){this.triggerQueues[e].push(t)},i.prototype.remove=function(t){var e=n.Adapter.inArray(t,this.waypoints);e>-1&&this.waypoints.splice(e,1)},i.prototype.first=function(){return this.waypoints[0]},i.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},i.findOrCreate=function(t){return o[t.axis][t.name]||new i(t)},n.Group=i}(),function(){"use strict";function t(t){this.$element=e(t)}var e=window.jQuery,i=window.Waypoint;e.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],function(e,i){t.prototype[i]=function(){var t=Array.prototype.slice.call(arguments);return this.$element[i].apply(this.$element,t)}}),e.each(["extend","inArray","isEmptyObject"],function(i,o){t[o]=e[o]}),i.adapters.push({name:"jquery",Adapter:t}),i.Adapter=t}(),function(){"use strict";function t(t){return function(){var i=[],o=arguments[0];return t.isFunction(arguments[0])&&(o=t.extend({},arguments[1]),o.handler=arguments[0]),this.each(function(){var n=t.extend({},o,{element:this});"string"==typeof n.context&&(n.context=t(this).closest(n.context)[0]),i.push(new e(n))}),i}}var e=window.Waypoint;window.jQuery&&(window.jQuery.fn.waypoint=t(window.jQuery)),window.Zepto&&(window.Zepto.fn.waypoint=t(window.Zepto))}();
/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-applicationcache-audio-backgroundsize-borderimage-borderradius-boxshadow-canvas-canvastext-cssanimations-csscolumns-cssgradients-csspositionsticky-cssreflections-csstransforms-csstransforms3d-csstransitions-flexbox-flexboxlegacy-fontface-generatedcontent-geolocation-hashchange-history-hsla-indexeddb-inlinesvg-input-inputtypes-localstorage-multiplebgs-opacity-postmessage-rgba-sessionstorage-smil-svg-svgclippaths-textshadow-video-webgl-websockets-websqldatabase-webworkers-domprefixes-hasevent-prefixed-prefixes-setclasses-shiv-testallprops-testprop-teststyles !*/
!function(e,t,n){function r(e,t){return typeof e===t}function a(){var e,t,n,a,o,i,s;for(var c in b)if(b.hasOwnProperty(c)){if(e=[],t=b[c],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(a=r(t.fn,"function")?t.fn():t.fn,o=0;o<e.length;o++)i=e[o],s=i.split("."),1===s.length?Modernizr[s[0]]=a:(!Modernizr[s[0]]||Modernizr[s[0]]instanceof Boolean||(Modernizr[s[0]]=new Boolean(Modernizr[s[0]])),Modernizr[s[0]][s[1]]=a),y.push((a?"":"no-")+s.join("-"))}}function o(e){var t=C.className,n=Modernizr._config.classPrefix||"";if(E&&(t=t.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),E?C.className.baseVal=t:C.className=t)}function i(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):E?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function s(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function c(e,t){return!!~(""+e).indexOf(t)}function d(){var e=t.body;return e||(e=i(E?"svg":"body"),e.fake=!0),e}function l(e,n,r,a){var o,s,c,l,u="modernizr",f=i("div"),p=d();if(parseInt(r,10))for(;r--;)c=i("div"),c.id=a?a[r]:u+(r+1),f.appendChild(c);return o=i("style"),o.type="text/css",o.id="s"+u,(p.fake?p:f).appendChild(o),p.appendChild(f),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(t.createTextNode(e)),f.id=u,p.fake&&(p.style.background="",p.style.overflow="hidden",l=C.style.overflow,C.style.overflow="hidden",C.appendChild(p)),s=n(f,e),p.fake?(p.parentNode.removeChild(p),C.style.overflow=l,C.offsetHeight):f.parentNode.removeChild(f),!!s}function u(e,t){return function(){return e.apply(t,arguments)}}function f(e,t,n){var a;for(var o in e)if(e[o]in t)return n===!1?e[o]:(a=t[e[o]],r(a,"function")?u(a,n||t):a);return!1}function p(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function m(t,r){var a=t.length;if("CSS"in e&&"supports"in e.CSS){for(;a--;)if(e.CSS.supports(p(t[a]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var o=[];a--;)o.push("("+p(t[a])+":"+r+")");return o=o.join(" or "),l("@supports ("+o+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return n}function g(e,t,a,o){function d(){u&&(delete W.style,delete W.modElem)}if(o=r(o,"undefined")?!1:o,!r(a,"undefined")){var l=m(e,a);if(!r(l,"undefined"))return l}for(var u,f,p,g,h,v=["modernizr","tspan","samp"];!W.style&&v.length;)u=!0,W.modElem=i(v.shift()),W.style=W.modElem.style;for(p=e.length,f=0;p>f;f++)if(g=e[f],h=W.style[g],c(g,"-")&&(g=s(g)),W.style[g]!==n){if(o||r(a,"undefined"))return d(),"pfx"==t?g:!0;try{W.style[g]=a}catch(y){}if(W.style[g]!=h)return d(),"pfx"==t?g:!0}return d(),!1}function h(e,t,n,a,o){var i=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+B.join(i+" ")+i).split(" ");return r(t,"string")||r(t,"undefined")?g(s,t,a,o):(s=(e+" "+P.join(i+" ")+i).split(" "),f(s,t,n))}function v(e,t,r){return h(e,n,n,t,r)}var y=[],b=[],x={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){b.push({name:e,fn:t,options:n})},addAsyncTest:function(e){b.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=x,Modernizr=new Modernizr,Modernizr.addTest("applicationcache","applicationCache"in e),Modernizr.addTest("geolocation","geolocation"in navigator),Modernizr.addTest("history",function(){var t=navigator.userAgent;return-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone")?e.history&&"pushState"in e.history:!1}),Modernizr.addTest("postmessage","postMessage"in e),Modernizr.addTest("svg",!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect);var T=!1;try{T="WebSocket"in e&&2===e.WebSocket.CLOSING}catch(w){}Modernizr.addTest("websockets",T),Modernizr.addTest("localstorage",function(){var e="modernizr";try{return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch(t){return!1}}),Modernizr.addTest("sessionstorage",function(){var e="modernizr";try{return sessionStorage.setItem(e,e),sessionStorage.removeItem(e),!0}catch(t){return!1}}),Modernizr.addTest("websqldatabase","openDatabase"in e),Modernizr.addTest("webworkers","Worker"in e);var S=x._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];x._prefixes=S;var C=t.documentElement,E="svg"===C.nodeName.toLowerCase();E||!function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=b.elements;return"string"==typeof e?e.split(" "):e}function a(e,t){var n=b.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),b.elements=n+" "+e,d(t)}function o(e){var t=y[e[h]];return t||(t={},v++,e[h]=v,y[v]=t),t}function i(e,n,r){if(n||(n=t),u)return n.createElement(e);r||(r=o(n));var a;return a=r.cache[e]?r.cache[e].cloneNode():g.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!a.canHaveChildren||m.test(e)||a.tagUrn?a:r.frag.appendChild(a)}function s(e,n){if(e||(e=t),u)return e.createDocumentFragment();n=n||o(e);for(var a=n.frag.cloneNode(),i=0,s=r(),c=s.length;c>i;i++)a.createElement(s[i]);return a}function c(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return b.shivMethods?i(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-:]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(b,t.frag)}function d(e){e||(e=t);var r=o(e);return!b.shivCSS||l||r.hasCSS||(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),u||c(e,r),e}var l,u,f="3.7.3",p=e.html5||{},m=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,g=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,h="_html5shiv",v=0,y={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",l="hidden"in e,u=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){l=!0,u=!0}}();var b={elements:p.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:f,shivCSS:p.shivCSS!==!1,supportsUnknownElements:u,shivMethods:p.shivMethods!==!1,type:"default",shivDocument:d,createElement:i,createDocumentFragment:s,addElements:a};e.html5=b,d(t),"object"==typeof module&&module.exports&&(module.exports=b)}("undefined"!=typeof e?e:this,t);var k="Moz O ms Webkit",P=x._config.usePrefixes?k.toLowerCase().split(" "):[];x._domPrefixes=P;var _=function(){function e(e,t){var a;return e?(t&&"string"!=typeof t||(t=i(t||"div")),e="on"+e,a=e in t,!a&&r&&(t.setAttribute||(t=i("div")),t.setAttribute(e,""),a="function"==typeof t[e],t[e]!==n&&(t[e]=n),t.removeAttribute(e)),a):!1}var r=!("onblur"in t.documentElement);return e}();x.hasEvent=_,Modernizr.addTest("hashchange",function(){return _("hashchange",e)===!1?!1:t.documentMode===n||t.documentMode>7}),Modernizr.addTest("audio",function(){var e=i("audio"),t=!1;try{(t=!!e.canPlayType)&&(t=new Boolean(t),t.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),t.mp3=e.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/,""),t.opus=e.canPlayType('audio/ogg; codecs="opus"')||e.canPlayType('audio/webm; codecs="opus"').replace(/^no$/,""),t.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),t.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(n){}return t}),Modernizr.addTest("canvas",function(){var e=i("canvas");return!(!e.getContext||!e.getContext("2d"))}),Modernizr.addTest("canvastext",function(){return Modernizr.canvas===!1?!1:"function"==typeof i("canvas").getContext("2d").fillText}),Modernizr.addTest("video",function(){var e=i("video"),t=!1;try{(t=!!e.canPlayType)&&(t=new Boolean(t),t.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),t.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),t.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""),t.vp9=e.canPlayType('video/webm; codecs="vp9"').replace(/^no$/,""),t.hls=e.canPlayType('application/x-mpegURL; codecs="avc1.42E01E"').replace(/^no$/,""))}catch(n){}return t}),Modernizr.addTest("webgl",function(){var t=i("canvas"),n="probablySupportsContext"in t?"probablySupportsContext":"supportsContext";return n in t?t[n]("webgl")||t[n]("experimental-webgl"):"WebGLRenderingContext"in e}),Modernizr.addTest("cssgradients",function(){for(var e,t="background-image:",n="gradient(linear,left top,right bottom,from(#9f9),to(white));",r="",a=0,o=S.length-1;o>a;a++)e=0===a?"to ":"",r+=t+S[a]+"linear-gradient("+e+"left top, #9f9, white);";Modernizr._config.usePrefixes&&(r+=t+"-webkit-"+n);var s=i("a"),c=s.style;return c.cssText=r,(""+c.backgroundImage).indexOf("gradient")>-1}),Modernizr.addTest("multiplebgs",function(){var e=i("a").style;return e.cssText="background:url(https://),url(https://),red url(https://)",/(url\s*\(.*?){3}/.test(e.background)}),Modernizr.addTest("opacity",function(){var e=i("a").style;return e.cssText=S.join("opacity:.55;"),/^0.55$/.test(e.opacity)}),Modernizr.addTest("rgba",function(){var e=i("a").style;return e.cssText="background-color:rgba(150,255,150,.5)",(""+e.backgroundColor).indexOf("rgba")>-1}),Modernizr.addTest("inlinesvg",function(){var e=i("div");return e.innerHTML="<svg/>","http://www.w3.org/2000/svg"==("undefined"!=typeof SVGRect&&e.firstChild&&e.firstChild.namespaceURI)}),Modernizr.addTest("csspositionsticky",function(){var e="position:",t="sticky",n=i("a"),r=n.style;return r.cssText=e+S.join(t+";"+e).slice(0,-e.length),-1!==r.position.indexOf(t)});var N=i("input"),R="autocomplete autofocus list placeholder max min multiple pattern required step".split(" "),z={};Modernizr.input=function(t){for(var n=0,r=t.length;r>n;n++)z[t[n]]=!!(t[n]in N);return z.list&&(z.list=!(!i("datalist")||!e.HTMLDataListElement)),z}(R);var $="search tel url email datetime date month week time datetime-local number range color".split(" "),A={};Modernizr.inputtypes=function(e){for(var r,a,o,i=e.length,s="1)",c=0;i>c;c++)N.setAttribute("type",r=e[c]),o="text"!==N.type&&"style"in N,o&&(N.value=s,N.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(r)&&N.style.WebkitAppearance!==n?(C.appendChild(N),a=t.defaultView,o=a.getComputedStyle&&"textfield"!==a.getComputedStyle(N,null).WebkitAppearance&&0!==N.offsetHeight,C.removeChild(N)):/^(search|tel)$/.test(r)||(o=/^(url|email)$/.test(r)?N.checkValidity&&N.checkValidity()===!1:N.value!=s)),A[e[c]]=!!o;return A}($),Modernizr.addTest("hsla",function(){var e=i("a").style;return e.cssText="background-color:hsla(120,40%,100%,.5)",c(e.backgroundColor,"rgba")||c(e.backgroundColor,"hsla")});var O="CSS"in e&&"supports"in e.CSS,L="supportsCSS"in e;Modernizr.addTest("supports",O||L);var j={}.toString;Modernizr.addTest("svgclippaths",function(){return!!t.createElementNS&&/SVGClipPath/.test(j.call(t.createElementNS("http://www.w3.org/2000/svg","clipPath")))}),Modernizr.addTest("smil",function(){return!!t.createElementNS&&/SVGAnimate/.test(j.call(t.createElementNS("http://www.w3.org/2000/svg","animate")))});var B=x._config.usePrefixes?k.split(" "):[];x._cssomPrefixes=B;var F=function(t){var r,a=S.length,o=e.CSSRule;if("undefined"==typeof o)return n;if(!t)return!1;if(t=t.replace(/^@/,""),r=t.replace(/-/g,"_").toUpperCase()+"_RULE",r in o)return"@"+t;for(var i=0;a>i;i++){var s=S[i],c=s.toUpperCase()+"_"+r;if(c in o)return"@-"+s.toLowerCase()+"-"+t}return!1};x.atRule=F;var M=x.testStyles=l,D=function(){var e=navigator.userAgent,t=e.match(/applewebkit\/([0-9]+)/gi)&&parseFloat(RegExp.$1),n=e.match(/w(eb)?osbrowser/gi),r=e.match(/windows phone/gi)&&e.match(/iemobile\/([0-9])+/gi)&&parseFloat(RegExp.$1)>=9,a=533>t&&e.match(/android/gi);return n||a||r}();D?Modernizr.addTest("fontface",!1):M('@font-face {font-family:"font";src:url("https://")}',function(e,n){var r=t.getElementById("smodernizr"),a=r.sheet||r.styleSheet,o=a?a.cssRules&&a.cssRules[0]?a.cssRules[0].cssText:a.cssText||"":"",i=/src/i.test(o)&&0===o.indexOf(n.split(" ")[0]);Modernizr.addTest("fontface",i)}),M('#modernizr{font:0/0 a}#modernizr:after{content:":)";visibility:hidden;font:7px/1 a}',function(e){Modernizr.addTest("generatedcontent",e.offsetHeight>=7)});var I={elem:i("modernizr")};Modernizr._q.push(function(){delete I.elem});var W={style:I.elem.style};Modernizr._q.unshift(function(){delete W.style});var V=x.testProp=function(e,t,r){return g([e],n,t,r)};Modernizr.addTest("textshadow",V("textShadow","1px 1px")),x.testAllProps=h;var H,U=x.prefixed=function(e,t,n){return 0===e.indexOf("@")?F(e):(-1!=e.indexOf("-")&&(e=s(e)),t?h(e,t,n):h(e,"pfx"))};try{H=U("indexedDB",e)}catch(w){}Modernizr.addTest("indexeddb",!!H),H&&Modernizr.addTest("indexeddb.deletedatabase","deleteDatabase"in H),x.testAllProps=v,Modernizr.addTest("cssanimations",v("animationName","a",!0)),Modernizr.addTest("backgroundsize",v("backgroundSize","100%",!0)),Modernizr.addTest("borderimage",v("borderImage","url() 1",!0)),Modernizr.addTest("borderradius",v("borderRadius","0px",!0)),Modernizr.addTest("boxshadow",v("boxShadow","1px 1px",!0)),function(){Modernizr.addTest("csscolumns",function(){var e=!1,t=v("columnCount");try{(e=!!t)&&(e=new Boolean(e))}catch(n){}return e});for(var e,t,n=["Width","Span","Fill","Gap","Rule","RuleColor","RuleStyle","RuleWidth","BreakBefore","BreakAfter","BreakInside"],r=0;r<n.length;r++)e=n[r].toLowerCase(),t=v("column"+n[r]),("breakbefore"===e||"breakafter"===e||"breakinside"==e)&&(t=t||v(n[r])),Modernizr.addTest("csscolumns."+e,t)}(),Modernizr.addTest("flexbox",v("flexBasis","1px",!0)),Modernizr.addTest("flexboxlegacy",v("boxDirection","reverse",!0)),Modernizr.addTest("cssreflections",v("boxReflect","above",!0)),Modernizr.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&v("transform","scale(1)",!0)}),Modernizr.addTest("csstransforms3d",function(){var e=!!v("perspective","1px",!0),t=Modernizr._config.usePrefixes;if(e&&(!t||"webkitPerspective"in C.style)){var n,r="#modernizr{width:0;height:0}";Modernizr.supports?n="@supports (perspective: 1px)":(n="@media (transform-3d)",t&&(n+=",(-webkit-transform-3d)")),n+="{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}",M(r+n,function(t){e=7===t.offsetWidth&&18===t.offsetHeight})}return e}),Modernizr.addTest("csstransitions",v("transition","all",!0)),a(),o(y),delete x.addTest,delete x.addAsyncTest;for(var q=0;q<Modernizr._q.length;q++)Modernizr._q[q]();e.Modernizr=Modernizr}(window,document);
/*!
 * imagesLoaded PACKAGED v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

!function(e,t){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",t):"object"==typeof module&&module.exports?module.exports=t():e.EvEmitter=t()}("undefined"!=typeof window?window:this,function(){function e(){}var t=e.prototype;return t.on=function(e,t){if(e&&t){var i=this._events=this._events||{},n=i[e]=i[e]||[];return n.indexOf(t)==-1&&n.push(t),this}},t.once=function(e,t){if(e&&t){this.on(e,t);var i=this._onceEvents=this._onceEvents||{},n=i[e]=i[e]||{};return n[t]=!0,this}},t.off=function(e,t){var i=this._events&&this._events[e];if(i&&i.length){var n=i.indexOf(t);return n!=-1&&i.splice(n,1),this}},t.emitEvent=function(e,t){var i=this._events&&this._events[e];if(i&&i.length){i=i.slice(0),t=t||[];for(var n=this._onceEvents&&this._onceEvents[e],o=0;o<i.length;o++){var r=i[o],s=n&&n[r];s&&(this.off(e,r),delete n[r]),r.apply(this,t)}return this}},t.allOff=function(){delete this._events,delete this._onceEvents},e}),function(e,t){"use strict";"function"==typeof define&&define.amd?define(["ev-emitter/ev-emitter"],function(i){return t(e,i)}):"object"==typeof module&&module.exports?module.exports=t(e,require("ev-emitter")):e.imagesLoaded=t(e,e.EvEmitter)}("undefined"!=typeof window?window:this,function(e,t){function i(e,t){for(var i in t)e[i]=t[i];return e}function n(e){if(Array.isArray(e))return e;var t="object"==typeof e&&"number"==typeof e.length;return t?d.call(e):[e]}function o(e,t,r){if(!(this instanceof o))return new o(e,t,r);var s=e;return"string"==typeof e&&(s=document.querySelectorAll(e)),s?(this.elements=n(s),this.options=i({},this.options),"function"==typeof t?r=t:i(this.options,t),r&&this.on("always",r),this.getImages(),h&&(this.jqDeferred=new h.Deferred),void setTimeout(this.check.bind(this))):void a.error("Bad element for imagesLoaded "+(s||e))}function r(e){this.img=e}function s(e,t){this.url=e,this.element=t,this.img=new Image}var h=e.jQuery,a=e.console,d=Array.prototype.slice;o.prototype=Object.create(t.prototype),o.prototype.options={},o.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},o.prototype.addElementImages=function(e){"IMG"==e.nodeName&&this.addImage(e),this.options.background===!0&&this.addElementBackgroundImages(e);var t=e.nodeType;if(t&&u[t]){for(var i=e.querySelectorAll("img"),n=0;n<i.length;n++){var o=i[n];this.addImage(o)}if("string"==typeof this.options.background){var r=e.querySelectorAll(this.options.background);for(n=0;n<r.length;n++){var s=r[n];this.addElementBackgroundImages(s)}}}};var u={1:!0,9:!0,11:!0};return o.prototype.addElementBackgroundImages=function(e){var t=getComputedStyle(e);if(t)for(var i=/url\((['"])?(.*?)\1\)/gi,n=i.exec(t.backgroundImage);null!==n;){var o=n&&n[2];o&&this.addBackground(o,e),n=i.exec(t.backgroundImage)}},o.prototype.addImage=function(e){var t=new r(e);this.images.push(t)},o.prototype.addBackground=function(e,t){var i=new s(e,t);this.images.push(i)},o.prototype.check=function(){function e(e,i,n){setTimeout(function(){t.progress(e,i,n)})}var t=this;return this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?void this.images.forEach(function(t){t.once("progress",e),t.check()}):void this.complete()},o.prototype.progress=function(e,t,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded,this.emitEvent("progress",[this,e,t]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,e),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&a&&a.log("progress: "+i,e,t)},o.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(e,[this]),this.emitEvent("always",[this]),this.jqDeferred){var t=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[t](this)}},r.prototype=Object.create(t.prototype),r.prototype.check=function(){var e=this.getIsImageComplete();return e?void this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),void(this.proxyImage.src=this.img.src))},r.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},r.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.img,t])},r.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},r.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},r.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},r.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype=Object.create(r.prototype),s.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url;var e=this.getIsImageComplete();e&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},s.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.element,t])},o.makeJQueryPlugin=function(t){t=t||e.jQuery,t&&(h=t,h.fn.imagesLoaded=function(e,t){var i=new o(this,e,t);return i.jqDeferred.promise(h(this))})},o.makeJQueryPlugin(),o});
/*!
 * hoverIntent v1.9.0 // 2017.09.01 // jQuery v1.7.0+
 * http://briancherne.github.io/jquery-hoverIntent/
 *
 * You may use hoverIntent under the terms of the MIT license. Basically that
 * means you are free to use hoverIntent as long as this header is left intact.
 * Copyright 2007-2017 Brian Cherne
 */
!function(factory){"use strict";"function"==typeof define&&define.amd?define(["jquery"],factory):jQuery&&!jQuery.fn.hoverIntent&&factory(jQuery)}(function($){"use strict";var cX,cY,_cfg={interval:100,sensitivity:6,timeout:0},INSTANCE_COUNT=0,track=function(ev){cX=ev.pageX,cY=ev.pageY},compare=function(ev,$el,s,cfg){if(Math.sqrt((s.pX-cX)*(s.pX-cX)+(s.pY-cY)*(s.pY-cY))<cfg.sensitivity)return $el.off(s.event,track),delete s.timeoutId,s.isActive=!0,ev.pageX=cX,ev.pageY=cY,delete s.pX,delete s.pY,cfg.over.apply($el[0],[ev]);s.pX=cX,s.pY=cY,s.timeoutId=setTimeout(function(){compare(ev,$el,s,cfg)},cfg.interval)},delay=function(ev,$el,s,out){return delete $el.data("hoverIntent")[s.id],out.apply($el[0],[ev])};$.fn.hoverIntent=function(handlerIn,handlerOut,selector){var instanceId=INSTANCE_COUNT++,cfg=$.extend({},_cfg);$.isPlainObject(handlerIn)?(cfg=$.extend(cfg,handlerIn),$.isFunction(cfg.out)||(cfg.out=cfg.over)):cfg=$.isFunction(handlerOut)?$.extend(cfg,{over:handlerIn,out:handlerOut,selector:selector}):$.extend(cfg,{over:handlerIn,out:handlerIn,selector:handlerOut});var handleHover=function(e){var ev=$.extend({},e),$el=$(this),hoverIntentData=$el.data("hoverIntent");hoverIntentData||$el.data("hoverIntent",hoverIntentData={});var state=hoverIntentData[instanceId];state||(hoverIntentData[instanceId]=state={id:instanceId}),state.timeoutId&&(state.timeoutId=clearTimeout(state.timeoutId));var mousemove=state.event="mousemove.hoverIntent.hoverIntent"+instanceId;if("mouseenter"===e.type){if(state.isActive)return;state.pX=ev.pageX,state.pY=ev.pageY,$el.off(mousemove,track).on(mousemove,track),state.timeoutId=setTimeout(function(){compare(ev,$el,state,cfg)},cfg.interval)}else{if(!state.isActive)return;$el.off(mousemove,track),state.timeoutId=setTimeout(function(){delay(ev,$el,state,cfg.out)},cfg.timeout)}};return this.on({"mouseenter.hoverIntent":handleHover,"mouseleave.hoverIntent":handleHover},cfg.selector)}});
/*! Magnific Popup - v1.0.0 - 2015-09-17
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2015 Dmitry Semenov; */
;(function(factory){if(typeof define==='function'&&define.amd){define(['jquery'],factory)}else if(typeof exports==='object'){factory(require('jquery'))}else{factory(window.jQuery||window.Zepto)}}(function($){var CLOSE_EVENT='Close',BEFORE_CLOSE_EVENT='BeforeClose',AFTER_CLOSE_EVENT='AfterClose',BEFORE_APPEND_EVENT='BeforeAppend',MARKUP_PARSE_EVENT='MarkupParse',OPEN_EVENT='Open',CHANGE_EVENT='Change',NS='mfp',EVENT_NS='.'+NS,READY_CLASS='mfp-ready',REMOVING_CLASS='mfp-removing',PREVENT_CLOSE_CLASS='mfp-prevent-close';var mfp,MagnificPopup=function(){},_isJQ=!!(window.jQuery),_prevStatus,_window=$(window),_document,_prevContentType,_wrapClasses,_currPopupType;var _mfpOn=function(name,f){mfp.ev.on(NS+name+EVENT_NS,f)},_getEl=function(className,appendTo,html,raw){var el=document.createElement('div');el.className='mfp-'+className;if(html){el.innerHTML=html}
if(!raw){el=$(el);if(appendTo){el.appendTo(appendTo)}}else if(appendTo){appendTo.appendChild(el)}
return el},_mfpTrigger=function(e,data){mfp.ev.triggerHandler(NS+e,data);if(mfp.st.callbacks){e=e.charAt(0).toLowerCase()+e.slice(1);if(mfp.st.callbacks[e]){mfp.st.callbacks[e].apply(mfp,$.isArray(data)?data:[data])}}},_getCloseBtn=function(type){if(type!==_currPopupType||!mfp.currTemplate.closeBtn){mfp.currTemplate.closeBtn=$(mfp.st.closeMarkup.replace('%title%',mfp.st.tClose));_currPopupType=type}
return mfp.currTemplate.closeBtn},_checkInstance=function(){if(!$.magnificPopup.instance){mfp=new MagnificPopup();mfp.init();$.magnificPopup.instance=mfp}},supportsTransitions=function(){var s=document.createElement('p').style,v=['ms','O','Moz','Webkit'];if(s.transition!==undefined){return!0}
while(v.length){if(v.pop()+'Transition' in s){return!0}}
return!1};MagnificPopup.prototype={constructor:MagnificPopup,init:function(){var appVersion=navigator.appVersion;mfp.isIE7=appVersion.indexOf("MSIE 7.")!==-1;mfp.isIE8=appVersion.indexOf("MSIE 8.")!==-1;mfp.isLowIE=mfp.isIE7||mfp.isIE8;mfp.isAndroid=(/android/gi).test(appVersion);mfp.isIOS=(/iphone|ipad|ipod/gi).test(appVersion);mfp.supportsTransition=supportsTransitions();mfp.probablyMobile=(mfp.isAndroid||mfp.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent));_document=$(document);mfp.popupsCache={}},open:function(data){var i;if(data.isObj===!1){mfp.items=data.items.toArray();mfp.index=0;var items=data.items,item;for(i=0;i<items.length;i++){item=items[i];if(item.parsed){item=item.el[0]}
if(item===data.el[0]){mfp.index=i;break}}}else{mfp.items=$.isArray(data.items)?data.items:[data.items];mfp.index=data.index||0}
if(mfp.isOpen){mfp.updateItemHTML();return}
mfp.types=[];_wrapClasses='';if(data.mainEl&&data.mainEl.length){mfp.ev=data.mainEl.eq(0)}else{mfp.ev=_document}
if(data.key){if(!mfp.popupsCache[data.key]){mfp.popupsCache[data.key]={}}
mfp.currTemplate=mfp.popupsCache[data.key]}else{mfp.currTemplate={}}
mfp.st=$.extend(!0,{},$.magnificPopup.defaults,data);mfp.fixedContentPos=mfp.st.fixedContentPos==='auto'?!mfp.probablyMobile:mfp.st.fixedContentPos;if(mfp.st.modal){mfp.st.closeOnContentClick=!1;mfp.st.closeOnBgClick=!1;mfp.st.showCloseBtn=!1;mfp.st.enableEscapeKey=!1}
if(!mfp.bgOverlay){mfp.bgOverlay=_getEl('bg').on('click'+EVENT_NS,function(){mfp.close()});mfp.wrap=_getEl('wrap').attr('tabindex',-1).on('click'+EVENT_NS,function(e){if(mfp._checkIfClose(e.target)){mfp.close()}});mfp.container=_getEl('container',mfp.wrap)}
mfp.contentContainer=_getEl('content');if(mfp.st.preloader){mfp.preloader=_getEl('preloader',mfp.container,mfp.st.tLoading)}
var modules=$.magnificPopup.modules;for(i=0;i<modules.length;i++){var n=modules[i];n=n.charAt(0).toUpperCase()+n.slice(1);mfp['init'+n].call(mfp)}
_mfpTrigger('BeforeOpen');if(mfp.st.showCloseBtn){if(!mfp.st.closeBtnInside){mfp.wrap.append(_getCloseBtn())}else{_mfpOn(MARKUP_PARSE_EVENT,function(e,template,values,item){values.close_replaceWith=_getCloseBtn(item.type)});_wrapClasses+=' mfp-close-btn-in'}}
if(mfp.st.alignTop){_wrapClasses+=' mfp-align-top'}
if(mfp.fixedContentPos){mfp.wrap.css({overflow:mfp.st.overflowY,overflowX:'hidden',overflowY:mfp.st.overflowY})}else{mfp.wrap.css({top:_window.scrollTop()-parseInt($('html').css('margin-top')),position:'absolute'})}
if(mfp.st.fixedBgPos===!1||(mfp.st.fixedBgPos==='auto'&&!mfp.fixedContentPos)){mfp.bgOverlay.css({height:_document.height(),position:'absolute'})}
if(mfp.st.enableEscapeKey){_document.on('keyup'+EVENT_NS,function(e){if(e.keyCode===27){mfp.close()}})}
_window.on('resize'+EVENT_NS,function(){mfp.updateSize()});if(!mfp.st.closeOnContentClick){_wrapClasses+=' mfp-auto-cursor'}
if(_wrapClasses)
mfp.wrap.addClass(_wrapClasses);var windowHeight=mfp.wH=_window.height();var windowStyles={};if(mfp.fixedContentPos){if(mfp._hasScrollBar(windowHeight)){var s=mfp._getScrollbarSize();if(s){windowStyles.marginRight=s}}}
if(mfp.fixedContentPos){if(!mfp.isIE7){windowStyles.overflow='hidden'}else{$('body, html').css('overflow','hidden')}}
var classesToadd=mfp.st.mainClass;if(mfp.isIE7){classesToadd+=' mfp-ie7'}
if(classesToadd){mfp._addClassToMFP(classesToadd)}
mfp.updateItemHTML();_mfpTrigger('BuildControls');$('html').css(windowStyles);mfp.bgOverlay.add(mfp.wrap).prependTo(mfp.st.prependTo||$(document.body));mfp._lastFocusedEl=document.activeElement;setTimeout(function(){if(mfp.content){mfp._addClassToMFP(READY_CLASS);mfp._setFocus()}else{mfp.bgOverlay.addClass(READY_CLASS)}
_document.on('focusin'+EVENT_NS,mfp._onFocusIn)},16);mfp.isOpen=!0;mfp.updateSize(windowHeight);_mfpTrigger(OPEN_EVENT);return data},close:function(){if(!mfp.isOpen)return;_mfpTrigger(BEFORE_CLOSE_EVENT);mfp.isOpen=!1;if(mfp.st.removalDelay&&!mfp.isLowIE&&mfp.supportsTransition){mfp._addClassToMFP(REMOVING_CLASS);setTimeout(function(){mfp._close()},mfp.st.removalDelay)}else{mfp._close()}},_close:function(){_mfpTrigger(CLOSE_EVENT);var classesToRemove=REMOVING_CLASS+' '+READY_CLASS+' ';mfp.bgOverlay.detach();mfp.wrap.detach();mfp.container.empty();if(mfp.st.mainClass){classesToRemove+=mfp.st.mainClass+' '}
mfp._removeClassFromMFP(classesToRemove);if(mfp.fixedContentPos){var windowStyles={marginRight:''};if(mfp.isIE7){$('body, html').css('overflow','')}else{windowStyles.overflow=''}
$('html').css(windowStyles)}
_document.off('keyup'+EVENT_NS+' focusin'+EVENT_NS);mfp.ev.off(EVENT_NS);mfp.wrap.attr('class','mfp-wrap').removeAttr('style');mfp.bgOverlay.attr('class','mfp-bg');mfp.container.attr('class','mfp-container');if(mfp.st.showCloseBtn&&(!mfp.st.closeBtnInside||mfp.currTemplate[mfp.currItem.type]===!0)){if(mfp.currTemplate.closeBtn)
mfp.currTemplate.closeBtn.detach()}
if(mfp._lastFocusedEl){}
mfp.currItem=null;mfp.content=null;mfp.currTemplate=null;mfp.prevHeight=0;_mfpTrigger(AFTER_CLOSE_EVENT)},updateSize:function(winHeight){if(mfp.isIOS){var zoomLevel=document.documentElement.clientWidth/window.innerWidth;var height=window.innerHeight*zoomLevel;mfp.wrap.css('height',height);mfp.wH=height}else{mfp.wH=winHeight||_window.height()}
if(!mfp.fixedContentPos){mfp.wrap.css('height',mfp.wH)}
_mfpTrigger('Resize')},updateItemHTML:function(){var item=mfp.items[mfp.index];mfp.contentContainer.detach();if(mfp.content)
mfp.content.detach();if(!item.parsed){item=mfp.parseEl(mfp.index)}
var type=item.type;_mfpTrigger('BeforeChange',[mfp.currItem?mfp.currItem.type:'',type]);mfp.currItem=item;if(!mfp.currTemplate[type]){var markup=mfp.st[type]?mfp.st[type].markup:!1;_mfpTrigger('FirstMarkupParse',markup);if(markup){mfp.currTemplate[type]=$(markup)}else{mfp.currTemplate[type]=!0}}
if(_prevContentType&&_prevContentType!==item.type){mfp.container.removeClass('mfp-'+_prevContentType+'-holder')}
var newContent=mfp['get'+type.charAt(0).toUpperCase()+type.slice(1)](item,mfp.currTemplate[type]);mfp.appendContent(newContent,type);item.preloaded=!0;_mfpTrigger(CHANGE_EVENT,item);_prevContentType=item.type;mfp.container.prepend(mfp.contentContainer);_mfpTrigger('AfterChange')},appendContent:function(newContent,type){mfp.content=newContent;if(newContent){if(mfp.st.showCloseBtn&&mfp.st.closeBtnInside&&mfp.currTemplate[type]===!0){if(!mfp.content.find('.mfp-close').length){mfp.content.append(_getCloseBtn())}}else{mfp.content=newContent}}else{mfp.content=''}
_mfpTrigger(BEFORE_APPEND_EVENT);mfp.container.addClass('mfp-'+type+'-holder');mfp.contentContainer.append(mfp.content)},parseEl:function(index){var item=mfp.items[index],type;if(item.tagName){item={el:$(item)}}else{type=item.type;item={data:item,src:item.src}}
if(item.el){var types=mfp.types;for(var i=0;i<types.length;i++){if(item.el.hasClass('mfp-'+types[i])){type=types[i];break}}
item.src=item.el.attr('data-mfp-src');if(!item.src){item.src=item.el.attr('href')}}
item.type=type||mfp.st.type||'inline';item.index=index;item.parsed=!0;mfp.items[index]=item;_mfpTrigger('ElementParse',item);return mfp.items[index]},addGroup:function(el,options){var eHandler=function(e){e.mfpEl=this;mfp._openClick(e,el,options)};if(!options){options={}}
var eName='click.magnificPopup';options.mainEl=el;if(options.items){options.isObj=!0;el.off(eName).on(eName,eHandler)}else{options.isObj=!1;if(options.delegate){el.off(eName).on(eName,options.delegate,eHandler)}else{options.items=el;el.off(eName).on(eName,eHandler)}}},_openClick:function(e,el,options){var midClick=options.midClick!==undefined?options.midClick:$.magnificPopup.defaults.midClick;if(!midClick&&(e.which===2||e.ctrlKey||e.metaKey||e.altKey||e.shiftKey)){return}
var disableOn=options.disableOn!==undefined?options.disableOn:$.magnificPopup.defaults.disableOn;if(disableOn){if($.isFunction(disableOn)){if(!disableOn.call(mfp)){return!0}}else{if(_window.width()<disableOn){return!0}}}
if(e.type){e.preventDefault();if(mfp.isOpen){e.stopPropagation()}}
options.el=$(e.mfpEl);if(options.delegate){options.items=el.find(options.delegate)}
mfp.open(options)},updateStatus:function(status,text){if(mfp.preloader){if(_prevStatus!==status){mfp.container.removeClass('mfp-s-'+_prevStatus)}
if(!text&&status==='loading'){text=mfp.st.tLoading}
var data={status:status,text:text};_mfpTrigger('UpdateStatus',data);status=data.status;text=data.text;mfp.preloader.html(text);mfp.preloader.find('a').on('click',function(e){e.stopImmediatePropagation()});mfp.container.addClass('mfp-s-'+status);_prevStatus=status}},_checkIfClose:function(target){if($(target).hasClass(PREVENT_CLOSE_CLASS)){return}
var closeOnContent=mfp.st.closeOnContentClick;var closeOnBg=mfp.st.closeOnBgClick;if(closeOnContent&&closeOnBg){return!0}else{if(!mfp.content||$(target).hasClass('mfp-close')||(mfp.preloader&&target===mfp.preloader[0])){return!0}
if((target!==mfp.content[0]&&!$.contains(mfp.content[0],target))){if(closeOnBg){if($.contains(document,target)){return!0}}}else if(closeOnContent){return!0}}
return!1},_addClassToMFP:function(cName){mfp.bgOverlay.addClass(cName);mfp.wrap.addClass(cName)},_removeClassFromMFP:function(cName){this.bgOverlay.removeClass(cName);mfp.wrap.removeClass(cName)},_hasScrollBar:function(winHeight){return((mfp.isIE7?_document.height():document.body.scrollHeight)>(winHeight||_window.height()))},_setFocus:function(){(mfp.st.focus?mfp.content.find(mfp.st.focus).eq(0):mfp.wrap).focus()},_onFocusIn:function(e){if(e.target!==mfp.wrap[0]&&!$.contains(mfp.wrap[0],e.target)){mfp._setFocus();return!1}},_parseMarkup:function(template,values,item){var arr;if(item.data){values=$.extend(item.data,values)}
_mfpTrigger(MARKUP_PARSE_EVENT,[template,values,item]);$.each(values,function(key,value){if(value===undefined||value===!1){return!0}
arr=key.split('_');if(arr.length>1){var el=template.find(EVENT_NS+'-'+arr[0]);if(el.length>0){var attr=arr[1];if(attr==='replaceWith'){if(el[0]!==value[0]){el.replaceWith(value)}}else if(attr==='img'){if(el.is('img')){el.attr('src',value)}else{el.replaceWith('<img src="'+value+'" class="'+el.attr('class')+'" />')}}else{el.attr(arr[1],value)}}}else{template.find(EVENT_NS+'-'+key).html(value)}})},_getScrollbarSize:function(){if(mfp.scrollbarSize===undefined){var scrollDiv=document.createElement("div");scrollDiv.style.cssText='width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;';document.body.appendChild(scrollDiv);mfp.scrollbarSize=scrollDiv.offsetWidth-scrollDiv.clientWidth;document.body.removeChild(scrollDiv)}
return mfp.scrollbarSize}};$.magnificPopup={instance:null,proto:MagnificPopup.prototype,modules:[],open:function(options,index){_checkInstance();if(!options){options={}}else{options=$.extend(!0,{},options)}
options.isObj=!0;options.index=index||0;return this.instance.open(options)},close:function(){return $.magnificPopup.instance&&$.magnificPopup.instance.close()},registerModule:function(name,module){if(module.options){$.magnificPopup.defaults[name]=module.options}
$.extend(this.proto,module.proto);this.modules.push(name)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:'',preloader:!0,focus:'',closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:'auto',fixedBgPos:'auto',overflowY:'auto',closeMarkup:'<button title="%title%" type="button" class="mfp-close"></button>',tClose:'Close (Esc)',tLoading:'Loading...'}};$.fn.magnificPopup=function(options){_checkInstance();var jqEl=$(this);if(typeof options==="string"){if(options==='open'){var items,itemOpts=_isJQ?jqEl.data('magnificPopup'):jqEl[0].magnificPopup,index=parseInt(arguments[1],10)||0;if(itemOpts.items){items=itemOpts.items[index]}else{items=jqEl;if(itemOpts.delegate){items=items.find(itemOpts.delegate)}
items=items.eq(index)}
mfp._openClick({mfpEl:items},jqEl,itemOpts)}else{if(mfp.isOpen)
mfp[options].apply(mfp,Array.prototype.slice.call(arguments,1))}}else{options=$.extend(!0,{},options);if(_isJQ){jqEl.data('magnificPopup',options)}else{jqEl[0].magnificPopup=options}
mfp.addGroup(jqEl,options)}
return jqEl};var INLINE_NS='inline',_hiddenClass,_inlinePlaceholder,_lastInlineElement,_putInlineElementsBack=function(){if(_lastInlineElement){_inlinePlaceholder.after(_lastInlineElement.addClass(_hiddenClass)).detach();_lastInlineElement=null}};$.magnificPopup.registerModule(INLINE_NS,{options:{hiddenClass:'hide',markup:'',tNotFound:'Content not found'},proto:{initInline:function(){mfp.types.push(INLINE_NS);_mfpOn(CLOSE_EVENT+'.'+INLINE_NS,function(){_putInlineElementsBack()})},getInline:function(item,template){_putInlineElementsBack();if(item.src){var inlineSt=mfp.st.inline,el=$(item.src);if(el.length){var parent=el[0].parentNode;if(parent&&parent.tagName){if(!_inlinePlaceholder){_hiddenClass=inlineSt.hiddenClass;_inlinePlaceholder=_getEl(_hiddenClass);_hiddenClass='mfp-'+_hiddenClass}
_lastInlineElement=el.after(_inlinePlaceholder).detach().removeClass(_hiddenClass)}
mfp.updateStatus('ready')}else{mfp.updateStatus('error',inlineSt.tNotFound);el=$('<div>')}
item.inlineElement=el;return el}
mfp.updateStatus('ready');mfp._parseMarkup(template,{},item);return template}}});var AJAX_NS='ajax',_ajaxCur,_removeAjaxCursor=function(){if(_ajaxCur){$(document.body).removeClass(_ajaxCur)}},_destroyAjaxRequest=function(){_removeAjaxCursor();if(mfp.req){mfp.req.abort()}};$.magnificPopup.registerModule(AJAX_NS,{options:{settings:null,cursor:'mfp-ajax-cur',tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){mfp.types.push(AJAX_NS);_ajaxCur=mfp.st.ajax.cursor;_mfpOn(CLOSE_EVENT+'.'+AJAX_NS,_destroyAjaxRequest);_mfpOn('BeforeChange.'+AJAX_NS,_destroyAjaxRequest)},getAjax:function(item){if(_ajaxCur){$(document.body).addClass(_ajaxCur)}
mfp.updateStatus('loading');var opts=$.extend({url:item.src,success:function(data,textStatus,jqXHR){var temp={data:data,xhr:jqXHR};_mfpTrigger('ParseAjax',temp);mfp.appendContent($(temp.data),AJAX_NS);item.finished=!0;_removeAjaxCursor();mfp._setFocus();setTimeout(function(){mfp.wrap.addClass(READY_CLASS)},16);mfp.updateStatus('ready');_mfpTrigger('AjaxContentAdded')},error:function(){_removeAjaxCursor();item.finished=item.loadError=!0;mfp.updateStatus('error',mfp.st.ajax.tError.replace('%url%',item.src))}},mfp.st.ajax.settings);mfp.req=$.ajax(opts);return''}}});var _imgInterval,_getTitle=function(item){if(item.data&&item.data.title!==undefined)
return item.data.title;var src=mfp.st.image.titleSrc;if(src){if($.isFunction(src)){return src.call(mfp,item)}else if(item.el){return item.el.attr(src)||''}}
return''};$.magnificPopup.registerModule('image',{options:{markup:'<div class="mfp-figure">'+'<div class="mfp-close"></div>'+'<figure>'+'<div class="mfp-img"></div>'+'<figcaption>'+'<div class="mfp-bottom-bar">'+'<div class="mfp-title"></div>'+'<div class="mfp-counter"></div>'+'</div>'+'</figcaption>'+'</figure>'+'</div>',cursor:'mfp-zoom-out-cur',titleSrc:'title',verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var imgSt=mfp.st.image,ns='.image';mfp.types.push('image');_mfpOn(OPEN_EVENT+ns,function(){if(mfp.currItem.type==='image'&&imgSt.cursor){$(document.body).addClass(imgSt.cursor)}});_mfpOn(CLOSE_EVENT+ns,function(){if(imgSt.cursor){$(document.body).removeClass(imgSt.cursor)}
_window.off('resize'+EVENT_NS)});_mfpOn('Resize'+ns,mfp.resizeImage);if(mfp.isLowIE){_mfpOn('AfterChange',mfp.resizeImage)}},resizeImage:function(){var item=mfp.currItem;if(!item||!item.img)return;if(mfp.st.image.verticalFit){var decr=0;if(mfp.isLowIE){decr=parseInt(item.img.css('padding-top'),10)+parseInt(item.img.css('padding-bottom'),10)}
item.img.css('max-height',mfp.wH-decr)}},_onImageHasSize:function(item){if(item.img){item.hasSize=!0;if(_imgInterval){clearInterval(_imgInterval)}
item.isCheckingImgSize=!1;_mfpTrigger('ImageHasSize',item);if(item.imgHidden){if(mfp.content)
mfp.content.removeClass('mfp-loading');item.imgHidden=!1}}},findImageSize:function(item){var counter=0,img=item.img[0],mfpSetInterval=function(delay){if(_imgInterval){clearInterval(_imgInterval)}
_imgInterval=setInterval(function(){if(img.naturalWidth>0){mfp._onImageHasSize(item);return}
if(counter>200){clearInterval(_imgInterval)}
counter++;if(counter===3){mfpSetInterval(10)}else if(counter===40){mfpSetInterval(50)}else if(counter===100){mfpSetInterval(500)}},delay)};mfpSetInterval(1)},getImage:function(item,template){var guard=0,onLoadComplete=function(){if(item){if(item.img[0].complete){item.img.off('.mfploader');if(item===mfp.currItem){mfp._onImageHasSize(item);mfp.updateStatus('ready')}
item.hasSize=!0;item.loaded=!0;_mfpTrigger('ImageLoadComplete')}else{guard++;if(guard<200){setTimeout(onLoadComplete,100)}else{onLoadError()}}}},onLoadError=function(){if(item){item.img.off('.mfploader');if(item===mfp.currItem){mfp._onImageHasSize(item);mfp.updateStatus('error',imgSt.tError.replace('%url%',item.src))}
item.hasSize=!0;item.loaded=!0;item.loadError=!0}},imgSt=mfp.st.image;var el=template.find('.mfp-img');if(el.length){var img=document.createElement('img');img.className='mfp-img';if(item.el&&item.el.find('img').length){img.alt=item.el.find('img').attr('alt')}
item.img=$(img).on('load.mfploader',onLoadComplete).on('error.mfploader',onLoadError);img.src=item.src;if(el.is('img')){item.img=item.img.clone()}
img=item.img[0];if(img.naturalWidth>0){item.hasSize=!0}else if(!img.width){item.hasSize=!1}}
mfp._parseMarkup(template,{title:_getTitle(item),img_replaceWith:item.img},item);mfp.resizeImage();if(item.hasSize){if(_imgInterval)clearInterval(_imgInterval);if(item.loadError){template.addClass('mfp-loading');mfp.updateStatus('error',imgSt.tError.replace('%url%',item.src))}else{template.removeClass('mfp-loading');mfp.updateStatus('ready')}
return template}
mfp.updateStatus('loading');item.loading=!0;if(!item.hasSize){item.imgHidden=!0;template.addClass('mfp-loading');mfp.findImageSize(item)}
return template}}});var hasMozTransform,getHasMozTransform=function(){if(hasMozTransform===undefined){hasMozTransform=document.createElement('p').style.MozTransform!==undefined}
return hasMozTransform};$.magnificPopup.registerModule('zoom',{options:{enabled:!1,easing:'ease-in-out',duration:300,opener:function(element){return element.is('img')?element:element.find('img')}},proto:{initZoom:function(){var zoomSt=mfp.st.zoom,ns='.zoom',image;if(!zoomSt.enabled||!mfp.supportsTransition){return}
var duration=zoomSt.duration,getElToAnimate=function(image){var newImg=image.clone().removeAttr('style').removeAttr('class').addClass('mfp-animated-image'),transition='all '+(zoomSt.duration/1000)+'s '+zoomSt.easing,cssObj={position:'fixed',zIndex:9999,left:0,top:0,'-webkit-backface-visibility':'hidden'},t='transition';cssObj['-webkit-'+t]=cssObj['-moz-'+t]=cssObj['-o-'+t]=cssObj[t]=transition;newImg.css(cssObj);return newImg},showMainContent=function(){mfp.content.css('visibility','visible')},openTimeout,animatedImg;_mfpOn('BuildControls'+ns,function(){if(mfp._allowZoom()){clearTimeout(openTimeout);mfp.content.css('visibility','hidden');image=mfp._getItemToZoom();if(!image){showMainContent();return}
animatedImg=getElToAnimate(image);animatedImg.css(mfp._getOffset());mfp.wrap.append(animatedImg);openTimeout=setTimeout(function(){animatedImg.css(mfp._getOffset(!0));openTimeout=setTimeout(function(){showMainContent();setTimeout(function(){animatedImg.remove();image=animatedImg=null;_mfpTrigger('ZoomAnimationEnded')},16)},duration)},16)}});_mfpOn(BEFORE_CLOSE_EVENT+ns,function(){if(mfp._allowZoom()){clearTimeout(openTimeout);mfp.st.removalDelay=duration;if(!image){image=mfp._getItemToZoom();if(!image){return}
animatedImg=getElToAnimate(image)}
animatedImg.css(mfp._getOffset(!0));mfp.wrap.append(animatedImg);mfp.content.css('visibility','hidden');setTimeout(function(){animatedImg.css(mfp._getOffset())},16)}});_mfpOn(CLOSE_EVENT+ns,function(){if(mfp._allowZoom()){showMainContent();if(animatedImg){animatedImg.remove()}
image=null}})},_allowZoom:function(){return mfp.currItem.type==='image'},_getItemToZoom:function(){if(mfp.currItem.hasSize){return mfp.currItem.img}else{return!1}},_getOffset:function(isLarge){var el;if(isLarge){el=mfp.currItem.img}else{el=mfp.st.zoom.opener(mfp.currItem.el||mfp.currItem)}
var offset=el.offset();var paddingTop=parseInt(el.css('padding-top'),10);var paddingBottom=parseInt(el.css('padding-bottom'),10);offset.top-=($(window).scrollTop()-paddingTop);var obj={width:el.width(),height:(_isJQ?el.innerHeight():el[0].offsetHeight)-paddingBottom-paddingTop};if(getHasMozTransform()){obj['-moz-transform']=obj.transform='translate('+offset.left+'px,'+offset.top+'px)'}else{obj.left=offset.left;obj.top=offset.top}
return obj}}});var IFRAME_NS='iframe',_emptyPage='//about:blank',_fixIframeBugs=function(isShowing){if(mfp.currTemplate[IFRAME_NS]){var el=mfp.currTemplate[IFRAME_NS].find('iframe');if(el.length){if(!isShowing){el[0].src=_emptyPage}
if(mfp.isIE8){el.css('display',isShowing?'block':'none')}}}};$.magnificPopup.registerModule(IFRAME_NS,{options:{markup:'<div class="mfp-iframe-scaler">'+'<div class="mfp-close"></div>'+'<iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe>'+'</div>',srcAction:'iframe_src',patterns:{youtube:{index:'youtube.com',id:'v=',src:'//www.youtube.com/embed/%id%?autoplay=1'},youtube_compressed_url:{index:'youtu.be/',id:'/',src:'//www.youtube.com/embed/%id%?autoplay=1'},vimeo:{index:'vimeo.com/',id:'/',src:'//player.vimeo.com/video/%id%?autoplay=1'},gmaps:{index:'//maps.google.',src:'%id%&output=embed'}}},proto:{initIframe:function(){mfp.types.push(IFRAME_NS);_mfpOn('BeforeChange',function(e,prevType,newType){if(prevType!==newType){if(prevType===IFRAME_NS){_fixIframeBugs()}else if(newType===IFRAME_NS){_fixIframeBugs(!0)}}});_mfpOn(CLOSE_EVENT+'.'+IFRAME_NS,function(){_fixIframeBugs()})},getIframe:function(item,template){var embedSrc=item.src;var iframeSt=mfp.st.iframe;$.each(iframeSt.patterns,function(){if(embedSrc.indexOf(this.index)>-1){if(this.id){if(typeof this.id==='string'){embedSrc=embedSrc.substr(embedSrc.lastIndexOf(this.id)+this.id.length,embedSrc.length)}else{embedSrc=this.id.call(this,embedSrc)}}
embedSrc=this.src.replace('%id%',embedSrc);return!1}});var dataObj={};if(iframeSt.srcAction){dataObj[iframeSt.srcAction]=embedSrc}
mfp._parseMarkup(template,dataObj,item);mfp.updateStatus('ready');return template}}});var _getLoopedId=function(index){var numSlides=mfp.items.length;if(index>numSlides-1){return index-numSlides}else if(index<0){return numSlides+index}
return index},_replaceCurrTotal=function(text,curr,total){return text.replace(/%curr%/gi,curr+1).replace(/%total%/gi,total)};$.magnificPopup.registerModule('gallery',{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:'Previous (Left arrow key)',tNext:'Next (Right arrow key)',tCounter:'%curr% of %total%'},proto:{initGallery:function(){var gSt=mfp.st.gallery,ns='.mfp-gallery',supportsFastClick=Boolean($.fn.mfpFastClick);mfp.direction=!0;if(!gSt||!gSt.enabled)return!1;_wrapClasses+=' mfp-gallery';_mfpOn(OPEN_EVENT+ns,function(){if(gSt.navigateByImgClick){mfp.wrap.on('click'+ns,'.mfp-img',function(){if(mfp.items.length>1){mfp.next();return!1}})}
_document.on('keydown'+ns,function(e){if(e.keyCode===37){mfp.prev()}else if(e.keyCode===39){mfp.next()}})});_mfpOn('UpdateStatus'+ns,function(e,data){if(data.text){data.text=_replaceCurrTotal(data.text,mfp.currItem.index,mfp.items.length)}});_mfpOn(MARKUP_PARSE_EVENT+ns,function(e,element,values,item){var l=mfp.items.length;values.counter=l>1?_replaceCurrTotal(gSt.tCounter,item.index,l):''});_mfpOn('BuildControls'+ns,function(){if(mfp.items.length>1&&gSt.arrows&&!mfp.arrowLeft){var markup=gSt.arrowMarkup,arrowLeft=mfp.arrowLeft=$(markup.replace(/%title%/gi,gSt.tPrev).replace(/%dir%/gi,'left')).addClass(PREVENT_CLOSE_CLASS),arrowRight=mfp.arrowRight=$(markup.replace(/%title%/gi,gSt.tNext).replace(/%dir%/gi,'right')).addClass(PREVENT_CLOSE_CLASS);var eName=supportsFastClick?'mfpFastClick':'click';arrowLeft[eName](function(){mfp.prev()});arrowRight[eName](function(){mfp.next()});if(mfp.isIE7){_getEl('b',arrowLeft[0],!1,!0);_getEl('a',arrowLeft[0],!1,!0);_getEl('b',arrowRight[0],!1,!0);_getEl('a',arrowRight[0],!1,!0)}
mfp.container.append(arrowLeft.add(arrowRight))}});_mfpOn(CHANGE_EVENT+ns,function(){if(mfp._preloadTimeout)clearTimeout(mfp._preloadTimeout);mfp._preloadTimeout=setTimeout(function(){mfp.preloadNearbyImages();mfp._preloadTimeout=null},16)});_mfpOn(CLOSE_EVENT+ns,function(){_document.off(ns);mfp.wrap.off('click'+ns);if(mfp.arrowLeft&&supportsFastClick){mfp.arrowLeft.add(mfp.arrowRight).destroyMfpFastClick()}
mfp.arrowRight=mfp.arrowLeft=null})},next:function(){mfp.direction=!0;mfp.index=_getLoopedId(mfp.index+1);mfp.updateItemHTML()},prev:function(){mfp.direction=!1;mfp.index=_getLoopedId(mfp.index-1);mfp.updateItemHTML()},goTo:function(newIndex){mfp.direction=(newIndex>=mfp.index);mfp.index=newIndex;mfp.updateItemHTML()},preloadNearbyImages:function(){var p=mfp.st.gallery.preload,preloadBefore=Math.min(p[0],mfp.items.length),preloadAfter=Math.min(p[1],mfp.items.length),i;for(i=1;i<=(mfp.direction?preloadAfter:preloadBefore);i++){mfp._preloadItem(mfp.index+i)}
for(i=1;i<=(mfp.direction?preloadBefore:preloadAfter);i++){mfp._preloadItem(mfp.index-i)}},_preloadItem:function(index){index=_getLoopedId(index);if(mfp.items[index].preloaded){return}
var item=mfp.items[index];if(!item.parsed){item=mfp.parseEl(index)}
_mfpTrigger('LazyLoad',item);if(item.type==='image'){item.img=$('<img class="mfp-img" />').on('load.mfploader',function(){item.hasSize=!0}).on('error.mfploader',function(){item.hasSize=!0;item.loadError=!0;_mfpTrigger('LazyLoadError',item)}).attr('src',item.src)}
item.preloaded=!0}}});var RETINA_NS='retina';$.magnificPopup.registerModule(RETINA_NS,{options:{replaceSrc:function(item){return item.src.replace(/\.\w+$/,function(m){return'@2x'+m})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var st=mfp.st.retina,ratio=st.ratio;ratio=!isNaN(ratio)?ratio:ratio();if(ratio>1){_mfpOn('ImageHasSize'+'.'+RETINA_NS,function(e,item){item.img.css({'max-width':item.img[0].naturalWidth/ratio,'width':'100%'})});_mfpOn('ElementParse'+'.'+RETINA_NS,function(e,item){item.src=st.replaceSrc(item,ratio)})}}}}});(function(){var ghostClickDelay=1000,supportsTouch='ontouchstart' in window,unbindTouchMove=function(){_window.off('touchmove'+ns+' touchend'+ns)},eName='mfpFastClick',ns='.'+eName;$.fn.mfpFastClick=function(callback){return $(this).each(function(){var elem=$(this),lock;if(supportsTouch){var timeout,startX,startY,pointerMoved,point,numPointers;elem.on('touchstart'+ns,function(e){pointerMoved=!1;numPointers=1;point=e.originalEvent?e.originalEvent.touches[0]:e.touches[0];startX=point.clientX;startY=point.clientY;_window.on('touchmove'+ns,function(e){point=e.originalEvent?e.originalEvent.touches:e.touches;numPointers=point.length;point=point[0];if(Math.abs(point.clientX-startX)>10||Math.abs(point.clientY-startY)>10){pointerMoved=!0;unbindTouchMove()}}).on('touchend'+ns,function(e){unbindTouchMove();if(pointerMoved||numPointers>1){return}
lock=!0;e.preventDefault();clearTimeout(timeout);timeout=setTimeout(function(){lock=!1},ghostClickDelay);callback()})})}
elem.on('click'+ns,function(){if(!lock){callback()}})})};$.fn.destroyMfpFastClick=function(){$(this).off('touchstart'+ns+' click'+ns);if(supportsTouch)_window.off('touchmove'+ns+' touchend'+ns)}})();_checkInstance()}));
(function($){"use strict";var methods=(function(){var c={bcClass:'sf-breadcrumb',menuClass:'sf-js-enabled',anchorClass:'sf-with-ul',menuArrowClass:'sf-arrows'},ios=(function(){var ios=/iPhone|iPad|iPod/i.test(navigator.userAgent);if(ios){$('html').css('cursor','pointer').on('click',$.noop)}
return ios})(),wp7=(function(){var style=document.documentElement.style;return('behavior' in style&&'fill' in style&&/iemobile/i.test(navigator.userAgent))})(),toggleMenuClasses=function($menu,o){var classes=c.menuClass;if(o.cssArrows){classes+=' '+c.menuArrowClass}
$menu.toggleClass(classes)},setPathToCurrent=function($menu,o){return $menu.find('li.'+o.pathClass).slice(0,o.pathLevels).addClass(o.hoverClass+' '+c.bcClass).filter(function(){return($(this).children(o.popUpSelector).hide().show().length)}).removeClass(o.pathClass)},toggleAnchorClass=function($li){$li.children('a').toggleClass(c.anchorClass)},toggleTouchAction=function($menu){var touchAction=$menu.css('ms-touch-action');touchAction=(touchAction==='pan-y')?'auto':'pan-y';$menu.css('ms-touch-action',touchAction)},applyHandlers=function($menu,o){var targets='li:has('+o.popUpSelector+')';if($.fn.hoverIntent&&!o.disableHI){$menu.hoverIntent(over,out,targets)}else{$menu.on('mouseenter.superfish',targets,over).on('mouseleave.superfish',targets,out)}
var touchevent='MSPointerDown.superfish';if(!ios){touchevent+=' touchend.superfish'}
if(wp7){touchevent+=' mousedown.superfish'}
$menu.on('focusin.superfish','li',over).on('focusout.superfish','li',out).on(touchevent,'a',o,touchHandler)},touchHandler=function(e){var $this=$(this),$ul=$this.siblings(e.data.popUpSelector);if($ul.length>0&&$ul.is(':hidden')){$this.one('click.superfish',!1);if(e.type==='MSPointerDown'){$this.trigger('focus')}else{$.proxy(over,$this.parent('li'))()}}},over=function(){var $this=$(this),o=getOptions($this);if($(this).parents('.megamenu').length>0)return;clearTimeout(o.sfTimer);$this.siblings().superfish('hide').end().superfish('show')},out=function(){var $this=$(this),o=getOptions($this);if(ios){$.proxy(close,$this,o)()}else{clearTimeout(o.sfTimer);o.sfTimer=setTimeout($.proxy(close,$this,o),o.delay)}},close=function(o){o.retainPath=($.inArray(this[0],o.$path)>-1);this.superfish('hide');if(!this.parents('.'+o.hoverClass).length){o.onIdle.call(getMenu(this));if(o.$path.length){$.proxy(over,o.$path)()}}},getMenu=function($el){return $el.closest('.'+c.menuClass)},getOptions=function($el){return getMenu($el).data('sf-options')};return{hide:function(instant){if(this.length){var $this=this,o=getOptions($this);if(!o){return this}
if($(this).hasClass('menu-item-over')&&$(this).hasClass('megamenu')){return!0}
var not=(o.retainPath===!0)?o.$path:'',$ul=$this.find('li.'+o.hoverClass).add(this).not(not).removeClass(o.hoverClass).children(o.popUpSelector),speed=o.speedOut;if(instant){$ul.show();speed=0}
o.retainPath=!1;o.onBeforeHide.call($ul);if(o.dropdownStyle=='minimal'){var $this=$(this);o.onHide.call($this)}else{$ul.stop(!0,!0).animate(o.animationOut,speed,function(){var $this=$(this);o.onHide.call($this)})}
if($(this).parents('.megamenu').length>0)return;if($('#header-outer[data-megamenu-rt="1"]').length>0&&$('#header-outer[data-transparent-header="true"]').length>0){if($('#header-outer.scrolled-down').length==0&&$('#header-outer.small-nav').length==0&&$('#header-outer.detached').length==0&&$('#header-outer.fixed-menu').length==0){$('#header-outer').addClass('transparent')}
if($('#header-outer[data-permanent-transparent="1"][data-transparent-header="true"]').length>0){$('#header-outer').addClass('transparent')}}}
return this},show:function(){if($(this).parents('.megamenu').length>0)return;var o=getOptions(this);if(!o){return this}
var $this=this.addClass(o.hoverClass),$ul=$this.children(o.popUpSelector);if($('#header-outer[data-megamenu-rt="1"]').length>0&&$(this).hasClass('megamenu')&&$('#header-outer').attr('data-transparent-header')=='true'){$('#header-outer').addClass('no-transition');$('#header-outer').removeClass('transparent')}
o.onBeforeShow.call($ul);if(!$($ul).parents('li').hasClass('megamenu')&&!$($ul).parents('ul').hasClass('sub-menu')&&$ul.offset()){$ul.addClass('temp-hidden-display');var docW=$("#top .container").width();var elm=$ul;var off=elm.offset();var l=off.left-($(window).width()-docW)/2;var w=elm.width();var isEntirelyVisible=(l+w<=$(window).width()-100);if(!isEntirelyVisible){$ul.parents('li').addClass('edge')}else{$ul.parents('li').removeClass('edge')}
$ul.removeClass('temp-hidden-display')}
if(o.dropdownStyle=='minimal'){o.onShow.call($ul)}else{$ul.stop(!0,!0).animate(o.animation,o.speed,function(){o.onShow.call($ul)})}
if($ul.length>0&&$ul.parents('.sub-menu').length>0&&$ul.parents('.sf-menu').length>0){if($ul.offset().left+$ul.outerWidth()>$(window).width()){$ul.addClass('on-left-side');$ul.find('ul').addClass('on-left-side')}}
return this},destroy:function(){return this.each(function(){var $this=$(this),o=$this.data('sf-options'),$hasPopUp;if(!o){return!1}
$hasPopUp=$this.find(o.popUpSelector).parent('li');clearTimeout(o.sfTimer);toggleMenuClasses($this,o);toggleAnchorClass($hasPopUp);toggleTouchAction($this);$this.off('.superfish').off('.hoverIntent');$hasPopUp.children(o.popUpSelector).attr('style',function(i,style){return style.replace(/display[^;]+;?/g,'')});o.$path.removeClass(o.hoverClass+' '+c.bcClass).addClass(o.pathClass);$this.find('.'+o.hoverClass).removeClass(o.hoverClass);o.onDestroy.call($this);$this.removeData('sf-options')})},init:function(op){return this.each(function(){var $this=$(this);if($this.data('sf-options')){return!1}
var o=$.extend({},$.fn.superfish.defaults,op),$hasPopUp=$this.find(o.popUpSelector).parent('li');o.$path=setPathToCurrent($this,o);$this.data('sf-options',o);toggleMenuClasses($this,o);toggleAnchorClass($hasPopUp);toggleTouchAction($this);applyHandlers($this,o);$hasPopUp.not('.'+c.bcClass).superfish('hide',!0);o.onInit.call(this)})}}})();$.fn.superfish=function(method,args){if(methods[method]){return methods[method].apply(this,Array.prototype.slice.call(arguments,1))}else if(typeof method==='object'||!method){return methods.init.apply(this,arguments)}else{return $.error('Method '+method+' does not exist on jQuery.fn.superfish')}};$.fn.superfish.defaults={popUpSelector:'ul,.sf-mega',hoverClass:'sfHover',pathClass:'overrideThisToUse',pathLevels:1,delay:800,animation:{opacity:'show'},animationOut:{opacity:'hide'},speed:'normal',speedOut:'fast',cssArrows:!0,disableHI:!1,onInit:$.noop,onBeforeShow:$.noop,onShow:$.noop,onBeforeHide:$.noop,onHide:$.noop,onIdle:$.noop,onDestroy:$.noop,dropdownStyle:($('body[data-dropdown-style="minimal"]').length>0)?'minimal':'classic'};$.fn.extend({hideSuperfishUl:methods.hide,showSuperfishUl:methods.show})})(jQuery);
(function($,window,document){"use strict";var $window=$(window),$body=$('body'),$offCanvasEl=$('#slide-out-widget-area'),$offCanvasBG=$('#slide-out-widget-area-bg'),$headerOuterEl=$('#header-outer'),$headerSecondaryEl=$('#header-secondary-outer'),$searchButtonEl=$('#header-outer #search-btn a'),$wpAdminBar=$('#wpadminbar'),$loadingScreenEl=$('#ajax-loading-screen'),$bodyBorderTop=$('.body-border-top'),$pageHeaderBG=$('#page-header-bg'),$bodyBorderWidth=($('.body-border-right').length>0)?$('.body-border-right').width():0,$logoHeight=($headerOuterEl.is('[data-logo-height]'))?parseInt($headerOuterEl.attr('data-logo-height')):30,headerPadding=($headerOuterEl.is('[data-padding]'))?parseInt($headerOuterEl.attr('data-padding')):28,logoShrinkNum=($headerOuterEl.is('[data-shrink-num]'))?$headerOuterEl.attr('data-shrink-num'):6,condenseHeaderLayout=($headerOuterEl.is('[data-condense="true"]'))?!0:!1,usingLogoImage=($headerOuterEl.is('[data-using-logo="1"]'))?!0:!1,headerResize=($headerOuterEl.is('[data-header-resize="1"]'))?!0:!1,headerHideUntilNeeded=($body.is('[data-hhun]'))?$body.attr('data-hhun'):'',$animationEasing=($body.is('[data-cae]')&&$body.attr('data-cae')!=='swing')?$body.attr('data-cae'):'easeOutCubic',$animationDuration=($body.is('[data-cad]'))?$body.attr('data-cad'):'650',$portfolio_containers=[],$svgIcons=[],$nectarCustomSliderRotate=[],$flickitySliders=[],flickityDragArr=[],viewIndicatorArr=[],iconMouseFollowArr=[],$fsProjectSliderArr=[],$wooFlickityCarousels=[],$liquidBG_EL=[],$testimonialSliders=[],$mouseParallaxScenes=[],$nectarMasonryBlogs=[],$standAnimatedColTimeout=[],$animatedSVGIconTimeout=[],$projectCarouselSliderArr=[],$nectarPostGridArr=[],$tabbedClickCount=0,$fullscreenSelector='',$bodyBorderHeaderColorMatch=!1,nectarBoxRoll={animating:'false',perspect:'not-rolled'},$nectarFullPage={$usingFullScreenRows:!1},$svgResizeTimeout,$bodyBorderSizeToRemove;if($bodyBorderTop.length>0){if($bodyBorderTop.css('background-color')=='#ffffff'&&$body.attr('data-header-color')=='light'||$bodyBorderTop.css('background-color')=='rgb(255, 255, 255)'&&$body.attr('data-header-color')=='light'||$bodyBorderTop.css('background-color')==$headerOuterEl.attr('data-user-set-bg')){$bodyBorderHeaderColorMatch=!0}}
var nectarDOMInfo={usingMobileBrowser:(navigator.userAgent.match(/(Android|iPod|iPhone|iPad|BlackBerry|IEMobile|Opera Mini)/))?!0:!1,usingFrontEndEditor:(typeof window.vc_iframe==='undefined')?!1:!0,getWindowSize:function(){nectarDOMInfo.winH=window.innerHeight;nectarDOMInfo.winW=window.innerWidth;nectarDOMInfo.adminBarHeight=($wpAdminBar.length>0)?$wpAdminBar.height():0;nectarDOMInfo.secondaryHeaderHeight=($headerSecondaryEl.length>0&&$headerSecondaryEl.css('display')!='none')?$headerSecondaryEl.outerHeight():0},scrollTop:0,clientX:0,clientY:0,scrollPosMouse:function(){return $window.scrollTop()},scrollPosRAF:function(){nectarDOMInfo.scrollTop=$window.scrollTop();requestAnimationFrame(nectarDOMInfo.scrollPosRAF)},bindEvents:function(){if(!nectarDOMInfo.usingMobileBrowser){$window.on('scroll',function(){nectarDOMInfo.scrollTop=nectarDOMInfo.scrollPosMouse()})}else{requestAnimationFrame(nectarDOMInfo.scrollPosRAF)}
document.addEventListener("mousemove",function(e){nectarDOMInfo.clientX=e.clientX;nectarDOMInfo.clientY=e.clientY});$window.on('resize',nectarDOMInfo.getWindowSize)},init:function(){$wpAdminBar=$('#wpadminbar');this.getWindowSize();this.scrollTop=this.scrollPosMouse();this.bindEvents();this.usingFrontEndEditor=(typeof window.vc_iframe==='undefined')?!1:!0}};function smartResizeInit(){fullWidthContentColumns();parallaxRowsBGCals();headerSpace();OCM_overflowState();showOnLeftSubMenu()}
function resizeInit(){fullWidthSections();fullWidthContentColumns();addOrRemoveSF();responsiveVideoIframes();if(!nectarDOMInfo.usingMobileBrowser){parallaxRowsBGCals()}}
function flexsliderInit(){$('.flex-gallery').each(function(){if(!$().flexslider){return}
var $that=$(this);imagesLoaded($(this),function(){$that.flexslider({animation:'fade',smoothHeight:!1,animationSpeed:500,useCSS:!1,touch:!0});$('.flex-gallery .flex-direction-nav li a.flex-next').html('<i class="fa fa-angle-right"></i>');$('.flex-gallery .flex-direction-nav li a.flex-prev').html('<i class="fa fa-angle-left"></i>')})})}
function NectarIconMouseFollow($el,iconType){this.lastX=0;this.lastY=0;this.$el=$el;this.iconType=iconType;this.timeout=!1;this.overEl=!1;this.$dragEl='';this.$viewEl='';this.$closeEl='';this.createMarkup();this.mouseBind()}
NectarIconMouseFollow.prototype.createMarkup=function(){if(this.iconType==='horizontal-movement'){if($('.nectar-drag-indicator').length==0){$('body').append('<div class="nectar-drag-indicator"><span><i class="fa fa-angle-left"></i><i class="fa fa-angle-right"></i></span></div>');this.$dragEl=$('.nectar-drag-indicator');this.dragRAF()}else{this.$dragEl=$('.nectar-drag-indicator')}}
if(this.iconType==='view-indicator'){if($('.nectar-view-indicator').length==0){$('body').append('<div class="nectar-view-indicator"><div class="color-circle"></div><span></span></div>');$('.nectar-view-indicator span').text($('.nectar-post-grid').attr('data-indicator-text'));this.$viewEl=$('.nectar-view-indicator');this.viewRAF()}else{this.$viewEl=$('.nectar-view-indicator')}}
if(this.iconType==='close-indicator'){if($('.nectar-view-indicator').length==0){var $usingBoxedClass=($('body > #boxed').length>0)?'in-boxed':'';$('body').append('<div class="nectar-close-indicator '+$usingBoxedClass+'"><div class="inner"></div></div>');this.$closeEl=$('.nectar-close-indicator');this.closeRAF()}else{this.$closeEl=$('.nectar-close-indicator')}}}
NectarIconMouseFollow.prototype.mouseBind=function(){var that=this;if(this.iconType==='horizontal-movement'){that.$el.find('.flickity-viewport').on('mouseenter',function(){that.$dragEl.addClass('visible')});that.$el.find('.flickity-viewport').on('mouseleave',function(){that.$dragEl.removeClass('visible')})}else if(this.iconType==='close-indicator'){$('body').on('click','.team-member[data-style*="bio_fullscreen"]',function(){if($('.nectar_team_member_overlay:not(.open)').length>0){return}
that.$closeEl.addClass('visible');that.$closeEl.find('.inner').addClass('visible')});$('body').on('click','.nectar_team_member_overlay:not(.animating)',function(){that.$closeEl.removeClass('visible');that.$closeEl.find('.inner').removeClass('visible')});$('body').on('mouseenter','.nectar_team_member_overlay .bottom_meta a',function(){that.$closeEl.removeClass('visible')});$('body').on('mouseleave','.nectar_team_member_overlay .bottom_meta a',function(){that.$closeEl.addClass('visible')})}else if(this.iconType==='view-indicator'){var $color=that.$el.attr('data-indicator-color');var $style=that.$el.attr('data-indicator-style');that.$el.find('.nectar-post-grid-item').off();that.$el.find('.nectar-post-grid-item').on('mouseenter',function(){that.$viewEl.addClass('visible');that.$viewEl.attr('class',function(i,c){return c.replace(/(^|\s)style-\S+/g,'')});that.$viewEl.addClass('style-'+$style);if($style!=='see-through'){that.$viewEl.find('.color-circle').css('background-color',$color)}
clearTimeout(that.timeout)});that.$el.find('.nectar-post-grid-item').on('mouseleave',function(){that.timeout=setTimeout(function(){that.$viewEl.removeClass('visible')},100)});that.$el.find('.nectar-post-grid-item .meta-category a').on('mouseenter',function(){that.$viewEl.removeClass('visible')});that.$el.find('.nectar-post-grid-item .meta-category a').on('mouseleave',function(){that.$viewEl.addClass('visible')})}};NectarIconMouseFollow.prototype.dragRAF=function(){this.lastY=linearInterpolate(this.lastY,nectarDOMInfo.clientY,0.21);this.lastX=linearInterpolate(this.lastX,nectarDOMInfo.clientX,0.21);this.$dragEl.css({'transform':'translateX('+this.lastX+'px) translateY('+this.lastY+'px)'});requestAnimationFrame(this.dragRAF.bind(this))};NectarIconMouseFollow.prototype.viewRAF=function(){this.lastY=linearInterpolate(this.lastY,nectarDOMInfo.clientY,0.21);this.lastX=linearInterpolate(this.lastX,nectarDOMInfo.clientX,0.21);this.$viewEl.css({'transform':'translateX('+this.lastX+'px) translateY('+this.lastY+'px)'});requestAnimationFrame(this.viewRAF.bind(this))};NectarIconMouseFollow.prototype.closeRAF=function(){this.lastY=linearInterpolate(this.lastY,nectarDOMInfo.clientY,0.21);this.lastX=linearInterpolate(this.lastX,nectarDOMInfo.clientX,0.21);this.$closeEl.css({'transform':'translateX('+this.lastX+'px) translateY('+this.lastY+'px)'});requestAnimationFrame(this.closeRAF.bind(this))};function flickityLazyCalcs(){$('.wpb_gallery_slidesflickity_static_height_style .cell[data-lazy="true"]').each(function(){$(this).css({'height':'','width':''});var heightAttr=parseInt($(this).find('img').attr('height'));var widthAttr=parseInt($(this).find('img').attr('width'));var dimensions=calculateAspectRatio(widthAttr,heightAttr,2000,parseInt($(this).find('img').height()));$(this).css({'height':dimensions.height+'px','width':dimensions.width+'px'})})}
function flickityLazyInit(){if($('.wpb_gallery_slidesflickity_static_height_style .cell[data-lazy="true"]').length>0){flickityLazyCalcs();$window.on('smartresize',flickityLazyCalcs)}}
function flickityInit(){if($('.nectar-flickity:not(.masonry)').length==0){return!1}
$flickitySliders=[];flickityDragArr=[];$('.nectar-flickity:not(.masonry)').each(function(i){$(this).removeClass(function(index,className){return(className.match(/(^|\s)instance-\S+/g)||[]).join(' ')});$(this).addClass('instance-'+i);var $freeScrollBool=($(this).is('[data-free-scroll]')&&$(this).attr('data-free-scroll')=='true')?!0:!1,$groupCellsBool=!0,$flickContainBool=!0,$flcikAttr=0.025,$paginationBool=!1,$nextPrevArrowBool=!0,$flickCellAlign='center';if($(this).is('[data-format="fixed_text_content_fullwidth"]')){$flickCellAlign='left';$groupCellsBool=!1;$flickContainBool=!1;$flcikAttr=0.02}
if($freeScrollBool==!0){$groupCellsBool=!1}
if($(this).attr('data-controls').length>0&&$(this).attr('data-controls')=='next_prev_arrows'||$(this).attr('data-controls').length>0&&$(this).attr('data-controls')=='next_prev_arrows_overlaid'){$paginationBool=!1;$nextPrevArrowBool=!0}else{$paginationBool=!0;$nextPrevArrowBool=!1}
if($(this).attr('data-controls').length>0&&$(this).attr('data-controls')=='none'){$paginationBool=!1;$nextPrevArrowBool=!1}
var $flickity_autoplay=!1;if($(this).is('[data-autoplay]')&&$(this).attr('data-autoplay')=='true'){$flickity_autoplay=!0;if($(this).is('[data-autoplay-dur]')&&$(this).attr('data-autoplay-dur').length>0){if(parseInt($(this).attr('data-autoplay-dur'))>100&&parseInt($(this).attr('data-autoplay-dur'))<30000){$flickity_autoplay=parseInt($(this).attr('data-autoplay-dur'))}}}
var $that=$(this);var $frontEndEditorDrag=($('body.vc_editor').length>0)?!1:!0;var $frontEndEditorPause=($('body.vc_editor').length>0)?!0:!1;var $arrowShape='';var $wrapAround=($(this).is('[data-wrap]')&&$(this).attr('data-wrap')=='no-wrap')?!1:!0;var $lazyload=($(this).find('img[data-flickity-lazyload]'))?1:!1;if($(this).find('img[data-flickity-lazyload]')&&$(this).is('[data-overflow="visible"]')&&$(this).is('[data-wrap="no-wrap"]')){$lazyload=2}
if($(this).attr('data-controls').length>0&&$(this).attr('data-controls')=='next_prev_arrows_overlaid'||$(this).attr('data-controls').length>0&&$(this).attr('data-controls')=='touch_total'){$arrowShape={x0:10,x1:60,y1:50,x2:70,y2:40,x3:30}}else{$arrowShape={x0:20,x1:70,y1:30,x2:70,y2:25,x3:70}}
$flickitySliders[i]=new Flickity('.nectar-flickity.instance-'+i,{contain:$flickContainBool,draggable:$frontEndEditorDrag,lazyLoad:$lazyload,imagesLoaded:!0,percentPosition:!0,cellAlign:$flickCellAlign,groupCells:$groupCellsBool,prevNextButtons:$nextPrevArrowBool,freeScroll:$freeScrollBool,pageDots:$paginationBool,resize:!0,selectedAttraction:$flcikAttr,autoPlay:$flickity_autoplay,pauseAutoPlayOnHover:$frontEndEditorPause,setGallerySize:!0,wrapAround:$wrapAround,accessibility:!1,arrowShape:$arrowShape});if($(this).is('[data-controls="touch_total"]')){if($(this).find('.visualized-total').length==0){if($(this).parents('.full-width-content').length>0&&$(this).parents('.vc_col-sm-12').length>0){$(this).append('<div class="container normal-container"><div class="visualized-total"><span></span></div></div>')}else{$(this).append('<div class="visualized-total"><span></span></div>')}}
if(!nectarDOMInfo.usingMobileBrowser){flickityDragArr[i]=new NectarIconMouseFollow($(this),'horizontal-movement');$flickitySliders[i].on('dragMove',function(event,pointer){nectarDOMInfo.clientY=pointer.clientY;nectarDOMInfo.clientX=pointer.clientX})}
var $totalImgs=$(this).find('.flickity-page-dots li').length;var $totalIndicator=$(this).find('.visualized-total span');var $totalPosition=1;var $totalWidth=$(this).find('.visualized-total').width();$window.on('smartresize',function(){setTimeout(function(){$totalImgs=$that.find('.flickity-page-dots li').length;$totalWidth=$that.find('.visualized-total').width();$totalPosition=($totalWidth/$totalImgs)*$that.find('.flickity-page-dots .is-selected').index();$totalIndicator.css('width',100/$totalImgs+'%');$totalIndicator.css({'x':$totalPosition+'px'})},200)});setTimeout(function(){$totalImgs=$that.find('.flickity-page-dots li').length;$totalWidth=$that.find('.visualized-total').width();$totalIndicator.css('width',100/$totalImgs+'%')},200);$flickitySliders[i].on('change',function(event,progress){$totalPosition=($totalWidth/$totalImgs)*$that.find('.flickity-page-dots .is-selected').index();$totalIndicator.css({'x':$totalPosition+'px'})})}
if($(this).is('[data-format="fixed_text_content_fullwidth"]')&&!nectarDOMInfo.usingFrontEndEditor){var $onMobileBrowser=nectarDOMInfo.usingMobileBrowser;$flickitySliders[i].on('scroll',function(){if($onMobileBrowser){return}
var $flkSlideWidth=$that.find('.cell').outerWidth()+25,$leftHeaderSize=($('body[data-header-format="left-header"]').length>0&&$window.width()>1000)?275:0,$extraWindowSpace=(($window.width()+$leftHeaderSize)-$that.parents('.main-content').width())/2;$extraWindowSpace+=parseInt($that.css('margin-left'))+2;$flickitySliders[i].slides.forEach(function(slide,j){var $scaleAmt=1,$translateXAmt=0,$rotateAmt=0,$slideZIndex=10,$opacityAmt=1,$slideOffset=$(slide.cells[0].element).offset().left,flkInstanceSlide=$('.nectar-flickity.instance-'+i+' .cell:nth-child('+(j+1)+')');if($slideOffset-$extraWindowSpace<0&&$slideOffset-$extraWindowSpace>$flkSlideWidth*-1){$scaleAmt=1+(($slideOffset-$extraWindowSpace)/1500);$opacityAmt=1+(($slideOffset-$extraWindowSpace+70)/550);$translateXAmt=(($slideOffset-$extraWindowSpace))*-1;$rotateAmt=(($slideOffset-$extraWindowSpace)/25)*-1}else{$scaleAmt=1;$opacityAmt=1;$translateXAmt=0;$rotateAmt=0}
if($slideOffset+5-$extraWindowSpace<0&&$slideOffset-$extraWindowSpace>$flkSlideWidth*-1){$slideZIndex=5}else{$slideZIndex=10}
flkInstanceSlide.css({'z-index':$slideZIndex});flkInstanceSlide.find('.inner-wrap-outer').css({'transform':'perspective(800px) translateX('+$translateXAmt+'px) rotateY('+$rotateAmt+'deg) translateZ(0)','opacity':$opacityAmt});flkInstanceSlide.find('.inner-wrap').css({'transform':'scale('+$scaleAmt+') translateZ(0)'})})})}
var $removeHiddenTimeout;var $removeMovingTimeout;$flickitySliders[i].on('dragStart',function(){clearTimeout($removeHiddenTimeout);clearTimeout($removeMovingTimeout);$that.addClass('is-dragging');$that.addClass('is-moving');$that.find('.flickity-prev-next-button').addClass('hidden')});$flickitySliders[i].on('dragEnd',function(){$that.removeClass('is-dragging');$removeHiddenTimeout=setTimeout(function(){$that.removeClass('is-moving');$that.find('.flickity-prev-next-button').removeClass('hidden')},600);$removeMovingTimeout=setTimeout(function(){$that.removeClass('is-moving')},300)});$('.flickity-prev-next-button').on('click',function(){clearTimeout($removeHiddenTimeout);$(this).parents('.nectar-flickity').find('.flickity-prev-next-button').addClass('hidden');$removeHiddenTimeout=setTimeout(function(){$that.find('.flickity-prev-next-button').removeClass('hidden')},600)});if($that.hasClass('nectar-carousel')){imagesLoaded($that,function(){nectarCarouselFlkEH($that)})}});var $usingNectarCarouselFlk=($('.nectar-carousel.nectar-flickity:not(.masonry)').length>0)?!0:!1;if($usingNectarCarouselFlk){$window.on('resize',setNectarCarouselFlkEH)}}
function setNectarCarouselFlkEH(){$('.nectar-carousel.nectar-flickity:not(.masonry)').each(function(){nectarCarouselFlkEH($(this))})}
function nectarCarouselFlkEH($slider_instance){var $tallestSlideCol=0;$slider_instance.find('.flickity-slider > .cell').css('height','auto');$slider_instance.find('.flickity-slider > .cell').each(function(){if($(this).height()>$tallestSlideCol){$tallestSlideCol=$(this).height()}});if($tallestSlideCol<10){$tallestSlideCol='auto'}
$slider_instance.find('.flickity-slider > .cell').css('height',$tallestSlideCol+'px')}
function twentytwentyInit(){$('.twentytwenty-container').each(function(){var $that=$(this);if($that.find('.twentytwenty-handle').length==0){$(this).imagesLoaded(function(){$that.twentytwenty()})}})}
function initSF(){addOrRemoveSF();if($('body[data-header-format="left-header"]').length==0){var $disableHI;if(!($('#header-outer[data-megamenu-rt="1"]').length>0&&$('#header-outer[data-transparent-header="true"]').length>0)){$disableHI=!0}else{$disableHI=!1}
$(".sf-menu:not(.buttons)").superfish({delay:650,speed:'fast',disableHI:$disableHI,speedOut:'fast',animation:{opacity:'show'}});$('#header-outer .sf-menu.buttons li.menu-item').on('mouseover',function(){$(this).addClass('sfHover')});$('#header-outer .sf-menu.buttons li.menu-item').on('mouseleave',function(){var $that=$(this);if($that.is('.menu-item-has-children')){setTimeout(function(){if(!$that.is(':hover')){$that.removeClass('sfHover')}},200)}else{$that.removeClass('sfHover')}});$('#header-secondary-outer li.megamenu, .sf-menu.buttons li.megamenu').removeClass('megamenu');$('#header-outer .sf-menu > li:not(.megamenu) > ul > li > ul').each(function(){if($(this).offset().left+$(this).outerWidth()>$window.width()){$(this).addClass('on-left-side');$(this).find('ul').addClass('on-left-side')}});$('body:not([data-header-format="left-header"]) header#top nav > ul > li.megamenu > ul > li > ul > li:has("> ul")').addClass('has-ul');if($('body[data-megamenu-width="full-width"]').length>0&&$('ul.sub-menu').length>0){megamenuFullwidth();$window.on('smartresize',megamenuFullwidth);$('header#top nav > ul > li.megamenu > .sub-menu').css('box-sizing','content-box')}
$('header#top nav > ul.sf-menu > li.menu-item').on('mouseenter',function(){$(this).addClass('menu-item-over')});$('header#top nav > ul.sf-menu > li.menu-item').on('mouseleave',function(){$(this).removeClass('menu-item-over')});$('header#top nav .megamenu .sub-menu a.sf-with-ul .sf-sub-indicator, header#top .megamenu .sub-menu a .sf-sub-indicator').remove();$('header#top nav > ul > li.megamenu > ul.sub-menu > li > a').each(function(){if($(this).text()=='-'||$(this).text()=='–'||$(this).parent().hasClass('hide-title')){$(this).remove()}})}
if(nectarDOMInfo.usingMobileBrowser&&$('#header-outer[data-remove-fixed="1"]').length==0){$body.attr('data-hhun','0')}}
function megamenuFullwidth(){var $windowWidth=$window.width();var $headerContainerWidth=$('header#top > .container').width();$('header#top nav > ul > li.megamenu > .sub-menu').css({'padding-left':($windowWidth-$headerContainerWidth)/2+'px','padding-right':($windowWidth+2-$headerContainerWidth)/2+'px','width':$headerContainerWidth,'left':'-'+($windowWidth-$headerContainerWidth)/2+'px'})}
function addOrRemoveSF(){if(nectarDOMInfo.winW<1000&&$body.attr('data-responsive')=='1'){$body.addClass('mobile');$('header#top nav').css('display','none')}else{$body.removeClass('mobile');$('header#top nav').css('display','');$('.slide-out-widget-area-toggle #toggle-nav .lines-button').removeClass('close')}}
function showOnLeftSubMenu(){$('#header-outer .sf-menu > li:not(.megamenu) > ul > li > ul').each(function(){$(this).removeClass('on-left-side');if($(this).offset().left+$(this).outerWidth()>$window.width()){$(this).addClass('on-left-side');$(this).find('ul').addClass('on-left-side')}else{$(this).removeClass('on-left-side');$(this).find('ul').removeClass('on-left-side')}})}
function standardCarouselInit(){if($('.carousel').length==0){return}
if(typeof SalientRecentProjectsCarousel!=='undefined'){$('ul.carousel.portfolio-items').each(function(i){$projectCarouselSliderArr[i]=new SalientRecentProjectsCarousel($(this))})}
$('ul.carousel:not(".clients"):not(.portfolio-items)').each(function(){var $that=$(this),maxCols=($(this).parents('.carousel-wrap').attr('data-full-width')=='true')?'auto':3,scrollNum=($(this).parents('.carousel-wrap').attr('data-full-width')=='true')?'auto':'',colWidth=($(this).parents('.carousel-wrap').attr('data-full-width')=='true')?500:453,$autoplayBool=($(this).attr('data-autorotate')=='true')?!0:!1,$themeSkin=!0,$themeSkin2=!0;var scrollSpeed,easing;if($('body.ascend').length>0&&$(this).parents('.carousel-wrap').attr('data-full-width')!='true'||$('body.material').length>0&&$(this).parents('.carousel-wrap').attr('data-full-width')!='true'){if($(this).find('li').length%3===0){$themeSkin=!0;$themeSkin2=!0}else{$themeSkin=!1;$themeSkin2=!0}}else{$themeSkin=!0;$themeSkin2=!0}
scrollSpeed=(parseInt($(this).attr('data-scroll-speed')))?parseInt($(this).attr('data-scroll-speed')):700;easing=($(this).is('[data-easing]'))?$(this).attr('data-easing'):'linear';var $element=$that;if($that.find('img').length==0){$element=$body}
imagesLoaded($element,function(){$that.carouFredSel({circular:$themeSkin,infinite:$themeSkin2,height:'auto',responsive:!0,items:{width:colWidth,visible:{min:1,max:maxCols}},swipe:{onTouch:!0,onMouse:!0,options:{excludedElements:"button, input, select, textarea, .noSwipe",tap:function(event,target){if($(target).attr('href')&&!$(target).is('[target="_blank"]')&&!$(target).is('[rel^="prettyPhoto"]')&&!$(target).is('.magnific-popup')&&!$(target).is('.magnific')){window.open($(target).attr('href'),'_self')}}},onBefore:function(){$that.find('.work-item').trigger('mouseleave');$that.find('.work-item .work-info a').trigger('mouseup')}},scroll:{items:scrollNum,easing:easing,duration:scrollSpeed,onBefore:function(){if($('body.ascend').length>0&&$that.parents('.carousel-wrap').attr('data-full-width')!='true'||$('body.material').length>0&&$that.parents('.carousel-wrap').attr('data-full-width')!='true'){$that.parents('.carousel-wrap').find('.item-count .total').html(Math.ceil($that.find('> li').length/$that.triggerHandler("currentVisible").length))}},onAfter:function(){if($('body.ascend').length>0&&$that.parents('.carousel-wrap').attr('data-full-width')!='true'||$('body.material').length>0&&$that.parents('.carousel-wrap').attr('data-full-width')!='true'){$that.parents('.carousel-wrap').find('.item-count .current').html($that.triggerHandler('currentPage')+1);$that.parents('.carousel-wrap').find('.item-count .total').html(Math.ceil($that.find('> li').length/$that.triggerHandler("currentVisible").length))}}},prev:{button:function(){return $that.parents('.carousel-wrap').find('.carousel-prev')}},next:{button:function(){return $that.parents('.carousel-wrap').find('.carousel-next')}},auto:{play:$autoplayBool}},{transition:!0}).animate({'opacity':1},1300);$that.parents('.carousel-wrap').wrap('<div class="carousel-outer">');if($that.parents('.carousel-wrap').attr('data-full-width')=='true'){$that.parents('.carousel-outer').css('overflow','visible')}
if($('body.ascend').length>0&&$that.parents('.carousel-wrap').attr('data-full-width')!='true'||$('body.material').length>0&&$that.parents('.carousel-wrap').attr('data-full-width')!='true'){$('<div class="item-count"><span class="current">1</span>/<span class="total">'+($that.find('> li').length/$that.triggerHandler("currentVisible").length)+'</span></div>').insertAfter($that.parents('.carousel-wrap').find('.carousel-prev'))}
$that.addClass('finished-loading');carouselHeightCalcs()})});$window.off('smartresize.carouselHeightCalcs');$window.on('smartresize.carouselHeightCalcs',carouselHeightCalcs)}
function fwCarouselLinkFix(){var $mousePosStart=0,$mousePosEnd=0,fwCarouselLinkSelector='.carousel-wrap .portfolio-items .col .work-info a, .woocommerce .products-carousel ul.products li.product a';$(fwCarouselLinkSelector).on('mousedown',function(e){$mousePosStart=e.clientX});$(fwCarouselLinkSelector).on('mouseup',function(e){$mousePosEnd=e.clientX});$(fwCarouselLinkSelector).on('click',function(){if(Math.abs($mousePosStart-$mousePosEnd)>10){return!1}})}
function owlCarouselInit(){if($('.owl-carousel').length===0){return}
$('.owl-carousel').each(function(){$(this).addClass('owl-theme');var $that=$(this),$autoRotateBool=$that.attr('data-autorotate'),$autoRotateSpeed=$that.attr('data-autorotation-speed'),$owlLoopBool=($that.is('[data-loop="true"]'))?!0:!1;$(this).owlCarousel({responsive:{0:{items:$(this).attr('data-mobile-cols')},690:{items:$(this).attr('data-tablet-cols')},1000:{items:$(this).attr('data-desktop-small-cols')},1300:{items:$(this).attr('data-desktop-cols')}},autoplay:$autoRotateBool,autoplayTimeout:$autoRotateSpeed,loop:$owlLoopBool,smartSpeed:350,onTranslate:function(){$that.addClass('moving')},onTranslated:function(){$that.removeClass('moving')}});$(this).on('changed.owl.carousel',function(event){if(event.item.count-event.page.size==event.item.index){$(event.target).find('.owl-dots div:last').addClass('active').siblings().removeClass('active')}})})}
function owl_carousel_animate(){$($fullscreenSelector+'.owl-carousel[data-enable-animation="true"]').each(function(){var $owlOffsetPos=($('#nectar_fullscreen_rows').length>0)?'200%':'bottom-in-view';var $animationDelay=0;if($(this).is('[data-animation-delay]')&&$(this).attr('data-animation-delay').length>0&&$(this).attr('data-animation')!='false'){$animationDelay=$(this).attr('data-animation-delay')}
var $that=$(this);var waypoint=new Waypoint({element:$that,handler:function(){if($that.parents('.wpb_tab').length>0&&$that.parents('.wpb_tab').css('visibility')=='hidden'||$that.hasClass('animated-in')){waypoint.destroy();return}
setTimeout(function(){$that.find('.owl-stage > .owl-item').each(function(i){var $that=$(this);$that.delay(i*200).transition({'opacity':'1','y':'0'},600,'easeOutQuart')});$that.addClass('animated-in')},$animationDelay);waypoint.destroy()},offset:$owlOffsetPos})})}
function updateWooFlickityCount(e){var slideNumber=e.data.wooFlickity.selectedIndex+1;e.data.wooFlickityCount.text(slideNumber+'/'+e.data.wooFlickity.slides.length)}
function productCarouselInit(){if($('.products-carousel').length===0&&$('.nectar-woo-flickity').length===0){return}
$('.products-carousel').each(function(){var $that=$(this).find('ul'),maxCols='auto',scrollNum='auto',colWidth=($(this).parents('.full-width-content ').length>0)?400:353,scrollSpeed=800,easing='easeInOutQuart';var $element=$that;if($that.find('img').length==0){$element=$body}
$(this).append('<a class="carousel-prev" href="#"><i class="icon-salient-left-arrow"></i></a> <a class="carousel-next" href="#"><i class="icon-salient-right-arrow"></i></a>');imagesLoaded($element,function(){$that.carouFredSel({circular:!0,responsive:!0,items:{width:colWidth,visible:{min:1,max:maxCols}},swipe:{onTouch:!0,onMouse:!0,options:{excludedElements:"button, input, select, textarea, .noSwipe",tap:function(event,target){if($(target).attr('href')&&!$(target).is('[target="_blank"]')&&!$(target).hasClass('add_to_wishlist')&&!$(target).hasClass('add_to_cart_button')&&!$(target).is('[rel^="prettyPhoto"]')){window.open($(target).attr('href'),'_self')}
if($(target).parent().attr('href')&&!$(target).parent().is('[target="_blank"]')&&!$(target).parent().hasClass('add_to_wishlist')&&!$(target).parent().hasClass('add_to_cart_button')&&!$(target).parent().is('[rel^="prettyPhoto"]')){window.open($(target).parent().attr('href'),'_self')}}},onBefore:function(){$that.find('.product-wrap').trigger('mouseleave');$that.find('.product a').trigger('mouseup')}},scroll:{items:scrollNum,easing:easing,duration:scrollSpeed},prev:{button:function(){return $that.parents('.carousel-wrap').find('.carousel-prev')}},next:{button:function(){return $that.parents('.carousel-wrap').find('.carousel-next')}},auto:{play:!1}}).animate({'opacity':1},1300);$that.parents('.carousel-wrap').wrap('<div class="carousel-outer">');$that.addClass('finished-loading');fullWidthContentColumns();$window.trigger('resize')})});$wooFlickityCarousels=[];$('.nectar-woo-flickity').each(function(i){var $that=$(this);$(this).find('.products > li').each(function(){$(this).wrap('<div class="flickity-cell"></div>')});fullWidthSections();var pageDotsBool=($that.is('[data-controls="bottom-pagination"]'))?!0:!1,arrowsBool=($that.is('[data-controls="bottom-pagination"]'))?!1:!0,$autoplay=($that.is('[data-autorotate-speed]')&&parseInt($that.attr('data-autorotate-speed'))>800)?parseInt($that.attr('data-autorotate-speed')):5000;if(!$that.is('[data-autorotate="true"]')){$autoplay=!1}
$(this).find('ul').addClass('generate-markup');$wooFlickityCarousels[i]=$(this).find('ul');if(arrowsBool==!0){$wooFlickityCarousels[i].on('ready.flickity',function(){var flickityPrv=$that.find('.flickity-prev-next-button.previous').detach();var flickityNxt=$that.find('.flickity-prev-next-button.next').detach();$that.find('.nectar-woo-carousel-top').append(flickityPrv).append(flickityNxt)})}
$wooFlickityCarousels[i].flickity({draggable:!0,lazyLoad:!1,imagesLoaded:!0,cellAlign:'left',groupCells:pageDotsBool,prevNextButtons:arrowsBool,pageDots:pageDotsBool,resize:!0,percentPosition:!0,setGallerySize:!0,wrapAround:!0,autoPlay:$autoplay,accessibility:!1});if(arrowsBool==!0){$that.find('.flickity-prev-next-button').append('<svg width="65px" height="65px" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg"><circle stroke-width="3" fill="none" stroke-linecap="round" cx="33" cy="33" r="28"></circle> <circle class="time" stroke-width="3" fill="none" stroke-linecap="round" cx="33" cy="33" r="28"></circle></svg>');var $wooFlickityCount=$('<div class="woo-flickity-count" />');$that.append($wooFlickityCount);var $wooFlickityData=$wooFlickityCarousels[i].data('flickity');var $eventData={data:{wooFlickity:$wooFlickityData,wooFlickityCount:$wooFlickityCount}};updateWooFlickityCount($eventData);$wooFlickityCarousels[i].on('select.flickity',{wooFlickity:$wooFlickityData,wooFlickityCount:$wooFlickityCount},updateWooFlickityCount)}})}
function carouselHeightCalcs(){$('.carousel.finished-loading:not(".portfolio-items, .clients"), .caroufredsel_wrapper .products.finished-loading').each(function(){var tallestColumn=0;$(this).find('> li').each(function(){if($(this).height()>tallestColumn){tallestColumn=$(this).height()}});$(this).css('height',tallestColumn+5);$(this).parents('.caroufredsel_wrapper').css('height',tallestColumn+5);if($('body.ascend').length>0&&$(this).parents('.carousel-wrap').attr('data-full-width')!='true'||$('body.material').length>0&&$(this).parents('.carousel-wrap').attr('data-full-width')!='true'){$(this).parents('.carousel-wrap').find('.item-count .current').html(Math.ceil(($(this).triggerHandler("currentPosition")+1)/$(this).triggerHandler("currentVisible").length));$(this).parents('.carousel-wrap').find('.item-count .total').html(Math.ceil($(this).find('> li').length/$(this).triggerHandler("currentVisible").length))}})}
function clientsCarouselInit(){if($('.carousel.clients').length===0){return}
$('.carousel.clients').each(function(){var $that=$(this);var $autoRotate=(!$(this).hasClass('disable-autorotate'))?!0:!1;var columns;columns=(parseInt($(this).attr('data-max')))?parseInt($(this).attr('data-max')):5;if($window.width()<690&&$body.attr('data-responsive')=='1'){columns=2;$(this).addClass('phone')}
var $element=$that;if($that.find('img').length==0){$element=$body}
imagesLoaded($element,function(){$that.carouFredSel({circular:!0,responsive:!0,items:{height:$that.find('> div:first').height(),width:$that.find('> div:first').width(),visible:{min:1,max:columns}},swipe:{onTouch:!0,onMouse:!0},scroll:{items:1,easing:'easeInOutCubic',duration:'800',pauseOnHover:!0},auto:{play:$autoRotate,timeoutDuration:2700}}).animate({'opacity':1},1300);$that.addClass('finished-loading');$that.parents('.carousel-wrap').wrap('<div class="carousel-outer">');$window.trigger('resize')})});$window.off('smartresize.clientsCarouselHeight',clientsCarouselHeightRecalc);$window.on('smartresize.clientsCarouselHeight',clientsCarouselHeightRecalc)}
function clientsCarouselHeightRecalc(){var tallestImage=0;$('.carousel.clients.finished-loading').each(function(){$(this).find('> div').each(function(){if($(this).height()>tallestImage){tallestImage=$(this).height()}});$(this).css('height',tallestImage);$(this).parent().css('height',tallestImage)})}
$window.on("orientationchange",function(){setTimeout(clientsCarouselHeightRecalc,200)});function carouselfGrabbingClass(){$body.on('mousedown','.caroufredsel_wrapper, .carousel-wrap[data-full-width="true"] .portfolio-items .col .work-info a, .woocommerce .products-carousel ul.products li.product a',function(){$(this).addClass('active')});$body.on('mouseup','.caroufredsel_wrapper, .carousel-wrap[data-full-width="true"] .portfolio-items .col .work-info a, .woocommerce .products-carousel ul.products li.product a',function(){$(this).removeClass('active')});$('body.ascend, body.material').on('mouseover','.carousel-next',function(){$(this).parent().find('.carousel-prev, .item-count').addClass('next-hovered')});$('body.ascend, body.material').on('mouseleave','.carousel-next',function(){$(this).parent().find('.carousel-prev, .item-count').removeClass('next-hovered')})}
function clientsFadeIn(){var $clientsOffsetPos=($('#nectar_fullscreen_rows').length>0)?'200%':'bottom-in-view';$($fullscreenSelector+'.clients.fade-in-animation').each(function(){var $that=$(this),waypoint=new Waypoint({element:$that,handler:function(){if($that.parents('.wpb_tab').length>0&&$that.parents('.wpb_tab').css('visibility')=='hidden'||$that.hasClass('animated-in')){waypoint.destroy();return}
$that.find('> div').each(function(i){$(this).delay(i*80).transition({'opacity':"1"},450)});setTimeout(function(){$that.addClass('completed')},($that.find('> div').length*80)+450);$that.addClass('animated-in');waypoint.destroy()},offset:$clientsOffsetPos})})}
window.requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||function(f){setTimeout(f,1000/60)}
var $event=$.event,dispatchMethod=$.event.handle?'handle':'dispatch',resizeTimeout;$event.special.smartresize={setup:function(){$(this).on("resize",$event.special.smartresize.handler)},teardown:function(){$(this).off("resize",$event.special.smartresize.handler)},handler:function(event,execAsap){var context=this,args=arguments;event.type="smartresize";if(resizeTimeout){clearTimeout(resizeTimeout)}
resizeTimeout=setTimeout(function(){$event[dispatchMethod].apply(context,args)},execAsap==="execAsap"?0:100)}};$.fn.smartresize=function(fn){return fn?this.on("smartresize",fn):this.trigger("smartresize",["execAsap"])};function linearInterpolate(a,b,n){return(1-n)*a+n*b}
function calculateAspectRatio(srcWidth,srcHeight,maxWidth,maxHeight){var ratio=Math.min(maxWidth/srcWidth,maxHeight/srcHeight);return{width:srcWidth*ratio,height:srcHeight*ratio}}
function calcHeaderNavHeight(){var navHeight;if(($body.is('[data-header-format="left-header"]')&&nectarDOMInfo.winW>=1000)||$body.is('[data-hhun="1"]')&&nectarDOMInfo.winW>=1000||$('.page-template-template-no-header-footer').length>0||$('.page-template-template-no-header').length>0){navHeight=0}else{var headerPadding2=headerPadding-headerPadding/1.8;var $headerNavSpace=$headerOuterEl.outerHeight();if($headerSecondaryEl.length>0&&$body.is('.material')||$headerSecondaryEl.length>0&&!$body.is('.material')&&nectarDOMInfo.winW<1000){$headerNavSpace-=nectarDOMInfo.secondaryHeaderHeight}
if($headerOuterEl.is('[data-header-resize="1"]')&&!$headerOuterEl.is('.small-nav')&&nectarDOMInfo.winW>=1000){navHeight=$headerNavSpace-(parseInt(logoShrinkNum)+headerPadding2*2)}else{navHeight=$headerNavSpace}}
if(nectarDOMInfo.winW>=1000&&$('#header-outer[data-condense="true"]').length>0){var $headerSpan9=$('#header-outer[data-format="centered-menu-bottom-bar"] header#top .span_9');navHeight=$headerOuterEl.height()-(parseInt($headerSpan9.position().top)-parseInt($headerOuterEl.find('#logo').css('margin-top')))-parseInt(nectarDOMInfo.secondaryHeaderHeight)}
return navHeight}(function(d){var style_element=d.createElement('STYLE'),dom_events='addEventListener' in d,add_event_listener=function(type,callback){if(dom_events){d.addEventListener(type,callback)}else{d.attachEvent('on'+type,callback)}},set_css=function(css_text){!!style_element.styleSheet?style_element.styleSheet.cssText=css_text:style_element.innerHTML=css_text};d.getElementsByTagName('HEAD')[0].appendChild(style_element);add_event_listener('mousedown',function(){set_css(':focus{outline:0}::-moz-focus-inner{border:0;}')});add_event_listener('keydown',function(){set_css('')})})(document);jQuery.fn.setCursorPosition=function(position){if(this.length==0){return this}
return $(this).setSelection(position,position)};jQuery.fn.setSelection=function(selectionStart,selectionEnd){if(this.length==0){return this}
var input=this[0];if(input.createTextRange){var range=input.createTextRange();range.collapse(!0);range.moveEnd('character',selectionEnd);range.moveStart('character',selectionStart);range.select()}else if(input.setSelectionRange){input.focus();input.setSelectionRange(selectionStart,selectionEnd)}
return this};$.extend($.expr[':'],{transparent:function(elem,i,attr){return($(elem).css("opacity")==="0")}});function hex(x){return("0"+parseInt(x).toString(16)).slice(-2)}
$.cssHooks.color={get:function(elem){var color;if(elem.currentStyle){color=elem.currentStyle.color}else if(window.getComputedStyle){color=document.defaultView.getComputedStyle(elem,null).getPropertyValue("color")}
if(color.search("rgb")==-1){return color}else{color=color.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);if(color){return"#"+hex(color[1])+hex(color[2])+hex(color[3])}}}};$.cssHooks.backgroundColor={get:function(elem){var bg;if(elem.currentStyle){bg=elem.currentStyle.backgroundColor}else if(window.getComputedStyle){bg=document.defaultView.getComputedStyle(elem,null).getPropertyValue("background-color")}
if(bg.search("rgb")==-1){return bg}else{bg=bg.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);if(bg){return"#"+hex(bg[1])+hex(bg[2])+hex(bg[3])}}}};function uniqueIdGenerate(){return Math.floor(Math.random()*10000)}
function nectar_scrollToY(scrollTargetY,speed,easing){var scrollY=window.scrollY||document.documentElement.scrollTop,scrollTargetY=scrollTargetY||0,speed=speed||2000,easing=easing||'easeOutSine',currentTime=0;var time=Math.max(0.1,Math.min(Math.abs(scrollY-scrollTargetY)/speed,0.8));var easingEquations={easeInOutQuint:function(pos){if((pos/=0.5)<1){return 0.5*Math.pow(pos,5)}
return 0.5*(Math.pow((pos-2),5)+2)}};function tick(){currentTime+=1/60;var p=currentTime/time;var t=easingEquations[easing](p);if(p<1){requestAnimationFrame(tick);window.scrollTo(0,scrollY+((scrollTargetY-scrollY)*t))}else{window.scrollTo(0,scrollTargetY)}}
tick()}(function($){function s(e,i){var r=$.proxy(this.process,this);this.$body=$("body"),this.$scrollElement=$($(e).is("body")?window:e),this.options=$.extend({},s.DEFAULTS,i),this.selector=(this.options.target||"")+" ul li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",r),this.refresh(),this.process()}
function e(e){return this.each(function(){var i=$(this),r=i.data("bs.scrollspy"),o="object"==typeof e&&e;r||i.data("bs.scrollspy",r=new s(this,o)),"string"==typeof e&&r[e]()})}
s.VERSION="3.2.0",s.DEFAULTS={offset:10},s.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},s.prototype.refresh=function(){var s="offset",e=0;$.isWindow(this.$scrollElement[0])||(s="position",e=this.$scrollElement.scrollTop()),this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight();var i=this;this.$body.find(this.selector).map(function(){var i=$(this),r=i.data("target")||i.attr("href"),o=/^#./.test(r)&&$(r);return o&&o.length&&o.is(":visible")&&[[o[s]().top+e,r]]||null}).sort(function(t,s){return t[0]-s[0]}).each(function(){i.offsets.push(this[0]),i.targets.push(this[1])})},s.prototype.process=function(){var $pageSubMenu=0;if($('.page-submenu[data-sticky="true"]').length>0&&$('body[data-hhun="1"]').length==0||$('.page-submenu[data-sticky="true"]').length>0&&$('#header-outer[data-remove-fixed="1"]').length>0){$pageSubMenu=$('.page-submenu').height()}
var t,s=this.$scrollElement.scrollTop()+this.options.offset+$pageSubMenu,e=this.getScrollHeight(),i=this.options.offset+e-this.$scrollElement.height()-$pageSubMenu,r=this.offsets,o=this.targets,l=this.activeTarget;if(this.activeTarget&&s<this.offsets[0]&&this.offsets[0]>0){this.activeTarget=null;$(this.selector).parentsUntil(this.options.target,".current-menu-item").removeClass("current-menu-item").removeClass('sfHover');return}
if(this.scrollHeight!=e&&this.refresh(),s>=i){return l!=(t=o[o.length-1])&&this.activate(t)}
if(l&&s<=r[0]){return l!=(t=o[0])&&this.activate(t)}
for(t=r.length;t--;)l!=o[t]&&s>=r[t]&&(!r[t+1]||s<=r[t+1])&&this.activate(o[t])},s.prototype.activate=function(s){this.activeTarget=s,$(this.selector).parentsUntil(this.options.target,".current-menu-item").removeClass("current-menu-item").removeClass('sfHover');var e=this.selector+'[data-target="'+s+'"],'+this.selector+'[href="'+s+'"]',i=$(e).parents("li").addClass("current-menu-item");i.parent(".dropdown-menu").length&&(i=i.closest("li.dropdown").addClass("current-menu-item")),i.trigger("activate.bs.scrollspy")};var i=$.fn.scrollspy;$.fn.scrollspy=e,$.fn.scrollspy.Constructor=s,$.fn.scrollspy.noConflict=function(){return $.fn.scrollspy=i,this}}(jQuery));function mobileBreakPointCheck(){var $mobileBreakpoint=($('body[data-header-breakpoint]').length>0&&$body.attr('data-header-breakpoint')!='1000')?parseInt($body.attr('data-header-breakpoint')):1000;var $withinCustomBreakpoint=!1;if($mobileBreakpoint!=1000){if($('body[data-user-set-ocm="1"][data-slide-out-widget-area-style="slide-out-from-right-hover"]').length==0&&nectarDOMInfo.winW>1000&&nectarDOMInfo.winW<=$mobileBreakpoint){$withinCustomBreakpoint=!0}}
return $withinCustomBreakpoint}
function extractUrl(input){return input.replace(/"/g,"").replace(/url\(|\)$/ig,"")}
function getQueryParams(qs){qs=qs.split("+").join(" ");var params={},tokens,re=/[?&]?([^=]+)=([^&]*)/g;while(tokens=re.exec(qs)){params[decodeURIComponent(tokens[1])]=decodeURIComponent(tokens[2])}
return params}
var nectarGetQueryParam=getQueryParams(document.location.search);(function(t){var i=t(window);t.fn.visible=function(t,e,o){if(!(this.length<1)){var r=this.length>1?this.eq(0):this,n=r.get(0),f=i.width(),h=i.height(),o=o?o:"both",l=e===!0?n.offsetWidth*n.offsetHeight:!0;if("function"==typeof n.getBoundingClientRect){var g=n.getBoundingClientRect(),u=g.top>=0&&g.top<h,s=g.bottom>0&&g.bottom<=h,c=g.left>=0&&g.left<f,a=g.right>0&&g.right<=f,v=t?u||s:u&&s,b=t?c||a:c&&a;if("both"===o){return l&&v&&b}
if("vertical"===o){return l&&v}
if("horizontal"===o){return l&&b}}else{var d=i.scrollTop(),p=d+h,w=i.scrollLeft(),m=w+f,y=r.offset(),z=y.top,B=z+r.height(),C=y.left,R=C+r.width(),j=t===!0?B:z,q=t===!0?z:B,H=t===!0?R:C,L=t===!0?C:R;if("both"===o){return!!l&&p>=q&&j>=d&&m>=L&&H>=w}
if("vertical"===o){return!!l&&p>=q&&j>=d}
if("horizontal"===o){return!!l&&m>=L&&H>=w}}}}}(jQuery));var CountUp=function(target,startVal,endVal,decimals,duration,options){var lastTime=0;var vendors=['webkit','moz','ms','o'];for(var x=0;x<vendors.length&&!window.requestAnimationFrame;++x){window.requestAnimationFrame=window[vendors[x]+'RequestAnimationFrame'];window.cancelAnimationFrame=window[vendors[x]+'CancelAnimationFrame']||window[vendors[x]+'CancelRequestAnimationFrame']}
if(!window.requestAnimationFrame){window.requestAnimationFrame=function(callback){var currTime=new Date().getTime();var timeToCall=Math.max(0,16-(currTime-lastTime));var id=window.setTimeout(function(){callback(currTime+timeToCall)},timeToCall);lastTime=currTime+timeToCall;return id}}
if(!window.cancelAnimationFrame){window.cancelAnimationFrame=function(id){clearTimeout(id)}}
var self=this;self.options={useEasing:!0,useGrouping:!0,separator:',',decimal:'.',easingFn:null,formattingFn:null};for(var key in options){if(options.hasOwnProperty(key)){self.options[key]=options[key]}}
if(self.options.separator===''){self.options.useGrouping=!1}
if(!self.options.prefix){self.options.prefix=''}
if(!self.options.suffix){self.options.suffix=''}
self.d=(typeof target==='string')?document.getElementById(target):target;self.startVal=Number(startVal);self.endVal=Number(endVal);self.countDown=(self.startVal>self.endVal);self.frameVal=self.startVal;self.decimals=Math.max(0,decimals||0);self.dec=Math.pow(10,self.decimals);self.duration=Number(duration)*1000||2000;self.formatNumber=function(nStr){nStr=nStr.toFixed(self.decimals);nStr+='';var x,x1,x2,rgx;x=nStr.split('.');x1=x[0];x2=x.length>1?self.options.decimal+x[1]:'';rgx=/(\d+)(\d{3})/;if(self.options.useGrouping){while(rgx.test(x1)){x1=x1.replace(rgx,'$1'+self.options.separator+'$2')}}
return self.options.prefix+x1+x2+self.options.suffix};self.easeOutExpo=function(t,b,c,d){return c*(-Math.pow(2,-10*t/d)+1)*1024/1023+b};self.easingFn=self.options.easingFn?self.options.easingFn:self.easeOutExpo;self.formattingFn=self.options.formattingFn?self.options.formattingFn:self.formatNumber;self.version=function(){return'1.7.1'};self.printValue=function(value){var result=self.formattingFn(value);if(self.d.tagName==='INPUT'){this.d.value=result}else if(self.d.tagName==='text'||self.d.tagName==='tspan'){this.d.textContent=result}else{this.d.innerHTML=result}};self.count=function(timestamp){if(!self.startTime){self.startTime=timestamp}
self.timestamp=timestamp;var progress=timestamp-self.startTime;self.remaining=self.duration-progress;if(self.options.useEasing){if(self.countDown){self.frameVal=self.startVal-self.easingFn(progress,0,self.startVal-self.endVal,self.duration)}else{self.frameVal=self.easingFn(progress,self.startVal,self.endVal-self.startVal,self.duration)}}else{if(self.countDown){self.frameVal=self.startVal-((self.startVal-self.endVal)*(progress/self.duration))}else{self.frameVal=self.startVal+(self.endVal-self.startVal)*(progress/self.duration)}}
if(self.countDown){self.frameVal=(self.frameVal<self.endVal)?self.endVal:self.frameVal}else{self.frameVal=(self.frameVal>self.endVal)?self.endVal:self.frameVal}
self.frameVal=Math.round(self.frameVal*self.dec)/self.dec;self.printValue(self.frameVal);if(progress<self.duration){self.rAF=requestAnimationFrame(self.count)}else{if(self.callback){self.callback()}}};self.start=function(callback){self.callback=callback;self.rAF=requestAnimationFrame(self.count);return!1};self.pauseResume=function(){if(!self.paused){self.paused=!0;cancelAnimationFrame(self.rAF)}else{self.paused=!1;delete self.startTime;self.duration=self.remaining;self.startVal=self.frameVal;requestAnimationFrame(self.count)}};self.reset=function(){self.paused=!1;delete self.startTime;self.startVal=startVal;cancelAnimationFrame(self.rAF);self.printValue(self.startVal)};self.update=function(newEndVal){cancelAnimationFrame(self.rAF);self.paused=!1;delete self.startTime;self.startVal=self.frameVal;self.endVal=Number(newEndVal);self.countDown=(self.startVal>self.endVal);self.rAF=requestAnimationFrame(self.count)};self.printValue(self.startVal)};var easeOutCubic=function(t,b,c,d){return c*((t=t/d-1)*t*t+1)+b};function nectarCreateStyle(styles,name){if(styles.length>0){var head=document.head||document.getElementsByTagName('head')[0];var style=document.createElement('style');style.type='text/css';if(style.styleSheet){style.styleSheet.cssText=styles}else{style.appendChild(document.createTextNode(styles))}
$(style).attr('id',name);$('head').find('#'+name).remove();head.appendChild(style)}}
function fancyBoxInit(){$('a.pp').removeClass('pp').attr('data-fancybox','');$("a[rel^='prettyPhoto']:not([rel*='_gal']):not([rel*='product-gallery']):not([rel*='prettyPhoto['])").removeAttr('rel').attr('data-fancybox','');var $unique_id=uniqueIdGenerate();$('.wpb_gallery .wpb_gallery_slidesnectarslider_style').each(function(){$unique_id=uniqueIdGenerate();$(this).find('.swiper-slide a:not(.ext-url-link)').attr('data-fancybox','group_'+$unique_id)});$('.wpb_gallery_slides.wpb_flexslider:not([data-onclick="custom_link"])').each(function(){$unique_id=uniqueIdGenerate();$(this).find('.slides > li > a').attr('data-fancybox','group_'+$unique_id)});$('.wpb_gallery_slidesflickity_style, .wpb_gallery_slidesflickity_static_height_style').each(function(){$unique_id=uniqueIdGenerate();$(this).find('.cell > a:not(.ext-url-link)').attr('data-fancybox','group_'+$unique_id)});$('.portfolio-items, .wpb_gallery_slidesparallax_image_grid').each(function(){$unique_id=uniqueIdGenerate();if($(this).find('.pretty_photo').length>0){$(this).find('.pretty_photo').removeClass('pretty_photo').attr('data-fancybox','group_'+$unique_id)}else if($(this).find('a[rel*="prettyPhoto["]').length>0){$(this).find('a[rel*="prettyPhoto["]').removeAttr('rel').attr('data-fancybox','group_'+$unique_id)}});if($body.hasClass('nectar-auto-lightbox')){$('.gallery').each(function(){if($(this).find('.gallery-icon a[rel^="prettyPhoto"]').length==0){var $unique_id=uniqueIdGenerate();$(this).find('.gallery-item .gallery-icon a[href*=".jpg"], .gallery-item .gallery-icon a[href*=".png"], .gallery-item .gallery-icon a[href*=".gif"], .gallery-item .gallery-icon a[href*=".jpeg"]').attr('data-fancybox','group_'+$unique_id).removeClass('pretty_photo')}});$('.main-content img').each(function(){if($(this).parent().is("[href]")&&!$(this).parent().is(".magnific-popup")&&$(this).parents('.tiled-gallery').length==0&&$(this).parents('.product-image').length==0&&$(this).parents('.iosSlider.product-slider').length==0){var match=$(this).parent().attr('href').match(/\.(jpg|png|gif)\b/);if(match){$(this).parent().attr('data-fancybox','')}}})}
var fbMarginArr=($('body.admin-bar').length>0)?[60,100]:[60,100];if(nectarDOMInfo.winW<1000){fbMarginArr=[0,0]}
$("[data-fancybox]").fancybox({animationEffect:"zoom-in-out",animationDuration:350,buttons:['fullScreen','zoom','close'],margin:fbMarginArr,loop:!0,caption:function(){return $(this).attr('title')},beforeLoad:function(instance){if(typeof instance.current.src!=='string'){$.fancybox.close(!0)}},mobile:{margin:0}})}
function magnificInit(){$('a.pp').removeClass('pp').addClass('magnific-popup');$("a[rel^='prettyPhoto']:not([rel*='_gal']):not([rel*='product-gallery']):not([rel*='prettyPhoto['])").removeAttr('rel').addClass('magnific-popup');$('.wpb_gallery .wpb_gallery_slidesnectarslider_style').each(function(){$(this).find('.swiper-slide a:not(.ext-url-link)').addClass('pretty_photo')});$('.wpb_gallery_slides.wpb_flexslider:not([data-onclick="custom_link"])').each(function(){$(this).find('.slides > li > a').addClass('pretty_photo')});$('.wpb_gallery_slidesflickity_style, .wpb_gallery_slidesflickity_static_height_style').each(function(){$(this).find('.cell > a:not(.ext-url-link)').addClass('pretty_photo')});$('.portfolio-items, .wpb_gallery .swiper-slide, .wpb_gallery_slidesflickity_style .cell, .wpb_gallery_slidesflickity_static_height_style .cell, .wpb_gallery_slides.wpb_flexslider ul > li, .wpb_gallery .parallax-grid-item').each(function(){if($(this).find('.pretty_photo').length>0){$(this).find('.pretty_photo').removeClass('pretty_photo').addClass('gallery').addClass('magnific')}else if($(this).find('a[rel*="prettyPhoto["]').length>0){$(this).find('a[rel*="prettyPhoto["]').removeAttr('rel').addClass('gallery').addClass('magnific')}});$("a[data-rel='prettyPhoto[product-gallery]']").each(function(){$(this).removeAttr('data-rel').addClass('magnific').addClass('gallery')});if($body.hasClass('nectar-auto-lightbox')){$('.gallery').each(function(){if($(this).find('.gallery-icon a[rel^="prettyPhoto"]').length==0){$(this).find('.gallery-item .gallery-icon a[href*=".jpg"], .gallery-item .gallery-icon a[href*=".png"], .gallery-item .gallery-icon a[href*=".gif"], .gallery-item .gallery-icon a[href*=".jpeg"]').addClass('magnific').addClass('gallery').removeClass('pretty_photo')}});$('.main-content img').each(function(){if($(this).parent().is("[href]")&&!$(this).parent().is(".magnific-popup")&&$(this).parents('.tiled-gallery').length==0&&$(this).parents('.product-image').length==0&&$(this).parents('.iosSlider.product-slider').length==0){var match=$(this).parent().attr('href').match(/\.(jpg|png|gif)\b/);if(match){$(this).parent().addClass('magnific-popup').addClass('image-link')}}})}
$('a.magnific-popup:not(.gallery):not(.nectar_video_lightbox)').magnificPopup({type:'image',callbacks:{imageLoadComplete:function(){var $that=this;setTimeout(function(){$that.wrap.addClass('mfp-image-loaded')},10)},beforeOpen:function(){this.st.image.markup=this.st.image.markup.replace('mfp-figure','mfp-figure mfp-with-anim')},open:function(){$.magnificPopup.instance.next=function(){var $that=this;this.wrap.removeClass('mfp-image-loaded');setTimeout(function(){$.magnificPopup.proto.next.call($that)},100)};$.magnificPopup.instance.prev=function(){var $that=this;this.wrap.removeClass('mfp-image-loaded');setTimeout(function(){$.magnificPopup.proto.prev.call($that)},100)}}},fixedContentPos:!1,mainClass:'mfp-zoom-in',removalDelay:400});$('a.magnific-popup.nectar_video_lightbox, .magnific_nectar_video_lightbox a.link_text, .swiper-slide a[href*=youtube], .swiper-slide a[href*=vimeo], .nectar-video-box a.full-link.magnific-popup').magnificPopup({type:'iframe',fixedContentPos:!1,mainClass:'mfp-zoom-in',removalDelay:400});$('a.magnific.gallery').each(function(){var $parentRow=($(this).closest('.wpb_column').length>0)?$(this).closest('.wpb_column'):$(this).parents('.row');if($parentRow.length>0&&!$parentRow.hasClass('lightbox-col')){$parentRow.magnificPopup({type:'image',delegate:'a.magnific',mainClass:'mfp-zoom-in',fixedContentPos:!1,callbacks:{elementParse:function(item){if($(item.el.context).is('[href]')&&$(item.el.context).attr('href').indexOf('iframe=true')!=-1||$(item.el.context).is('[href]')&&$(item.el.context).attr('href').indexOf('https://www.youtube.com/watch')!=-1){item.type='iframe'}else if($(item.el.context).is('[href]')&&$(item.el.context).attr('href').indexOf('video-popup-')!=-1){item.type='inline'}else{item.type='image'}},imageLoadComplete:function(){var $that=this;setTimeout(function(){$that.wrap.addClass('mfp-image-loaded')},10)},beforeOpen:function(){this.st.image.markup=this.st.image.markup.replace('mfp-figure','mfp-figure mfp-with-anim')},open:function(){if($(this.content).find('.mejs-video video').length>0&&$().mediaelementplayer){$(this.content).find('.mejs-video video')[0].player.remove();var $that=this;setTimeout(function(){$($that.content).find('video').mediaelementplayer();$($that.content).find('.mejs-video video')[0].player.play()},50)}
$.magnificPopup.instance.next=function(){var $that=this;this.wrap.removeClass('mfp-image-loaded');setTimeout(function(){$.magnificPopup.proto.next.call($that);if($($that.content).find('.mejs-video video').length>0){$($that.content).find('.mejs-video video')[0].play()}},100)};$.magnificPopup.instance.prev=function(){var $that=this;this.wrap.removeClass('mfp-image-loaded');setTimeout(function(){$.magnificPopup.proto.prev.call($that);if($($that.content).find('.mejs-video video').length>0){$($that.content).find('.mejs-video video')[0].play()}},100)}},close:function(){if($(this.content).find('.mejs-video video').length>0){$(this.content).find('.mejs-video video')[0].load()}}},removalDelay:400,gallery:{enabled:!0}});$parentRow.addClass('lightbox-col')}})}
function lightBoxInit(){setTimeout(function(){if($('body[data-ls="magnific"]').length>0||$('body[data-ls="pretty_photo"]').length>0){magnificInit()}else if($('body[data-ls="fancybox"]').length>0){fancyBoxInit()}},100)}
function vcWaypoints(){$($fullscreenSelector+' .wpb_animate_when_almost_visible').each(function(){var $that=$(this),$vcOffsetPos=($('#nectar_fullscreen_rows').length>0)?'200%':'90%',waypoint=new Waypoint({element:$that,handler:function(){if($that.parents('.wpb_tab').length>0&&$that.parents('.wpb_tab').css('visibility')=='hidden'||$that.hasClass('animated')){waypoint.destroy();return}
$that.addClass("animated");$that.addClass("wpb_start_animation");waypoint.destroy();if($that.is('.nectar-button')&&$('body[data-button-style*="rounded_shadow"]').length>0){setTimeout(function(){$that.removeClass('wpb_start_animation')},1100)}},offset:$vcOffsetPos})})}
function milestoneInit(){$('.nectar-milestone').each(function(){if($(this).is('[data-symbol]')){if($(this).find('.symbol-wrap').length==0){if($(this).attr('data-symbol-pos')=='before'){$(this).find('.number').prepend('<div class="symbol-wrap"><span class="symbol">'+$(this).attr('data-symbol')+'</span></div>')}else{$(this).find('.number').append('<div class="symbol-wrap"><span class="symbol">'+$(this).attr('data-symbol')+'</span></div>')}}
var $symbol_size;if($(this).attr('data-symbol-size')==$(this).find('.number').attr('data-number-size')&&$(this).attr('data-symbol-alignment')=='superscript'){$symbol_size=32}else{$symbol_size=parseInt($(this).attr('data-symbol-size'))}
$(this).find('.symbol-wrap').css({'font-size':$symbol_size+'px','line-height':$symbol_size+'px'})}
$(this).find('.number').css({'font-size':$(this).find('.number').attr('data-number-size')+'px','line-height':$(this).find('.number').attr('data-number-size')+'px'})});if(!$body.hasClass('mobile')&&$('.nectar-milestone').length>0||$body.hasClass('rtl')&&$('.nectar-milestone').length>0){var $blurCssString='';$($fullscreenSelector+'.nectar-milestone.motion_blur').each(function(i){$(this).removeClass(function(index,className){return(className.match(/(^|\s)instance-\S+/g)||[]).join(' ')});$(this).addClass('instance-'+i);var $currentColor=$(this).find('.number').css('color'),colorInt=parseInt($currentColor.substring(1),16);var R=(colorInt&0xFF0000)>>16,G=(colorInt&0x00FF00)>>8,B=(colorInt&0x0000FF)>>0;var $rgbaColorStart='rgba('+R+','+G+','+B+',0.2)',$rgbaColorEnd='rgba('+R+','+G+','+B+',1)',$numberSize=parseInt($(this).find('.number').attr('data-number-size'));$blurCssString+='@keyframes motion-blur-number-'+i+' { '+' 0% { '+'opacity: 0;'+'color: '+$rgbaColorStart+'; '+'text-shadow: 0 '+$numberSize/20+'px 0 '+$rgbaColorStart+', 0 '+$numberSize/10+'px 0 '+$rgbaColorStart+', 0 '+$numberSize/6+'px 0 '+$rgbaColorStart+', 0 '+$numberSize/5+'px 0 '+$rgbaColorStart+', 0 '+$numberSize/4+'px 0 '+$rgbaColorStart+', 0 -'+$numberSize/20+'px 0 '+$rgbaColorStart+', 0 -'+$numberSize/10+'px 0 '+$rgbaColorStart+', 0 -'+$numberSize/6+'px 0 '+$rgbaColorStart+', 0 -'+$numberSize/5+'px 0 '+$rgbaColorStart+', 0 -'+$numberSize/4+'px 0 '+$rgbaColorStart+'; '+'transform: translateZ(0px) translateY(-100%); '+'-webkit-transform: translateZ(0px) translateY(-100%); '+'} '+'33% { opacity: 1 }'+'100% { '+'color: '+$rgbaColorEnd+'; '+'text-shadow: none; '+'transform: translateZ(0px) translateY(0px); '+'-webkit-transform: translateZ(0px) translateY(0px); '+'} '+'} '+'@-webkit-keyframes motion-blur-number-'+i+' { '+' 0% { '+'opacity: 0;'+'color: '+$rgbaColorStart+'; '+'text-shadow: 0 '+$numberSize/20+'px 0 '+$rgbaColorStart+', 0 '+$numberSize/10+'px 0 '+$rgbaColorStart+', 0 '+$numberSize/6+'px 0 '+$rgbaColorStart+', 0 '+$numberSize/5+'px 0 '+$rgbaColorStart+', 0 '+$numberSize/4+'px 0 '+$rgbaColorStart+', 0 -'+$numberSize/20+'px 0 '+$rgbaColorStart+', 0 -'+$numberSize/10+'px 0 '+$rgbaColorStart+', 0 -'+$numberSize/6+'px 0 '+$rgbaColorStart+', 0 -'+$numberSize/5+'px 0 '+$rgbaColorStart+', 0 -'+$numberSize/4+'px 0 '+$rgbaColorStart+'; '+'transform: translateZ(0px) translateY(-100%); '+'-webkit-transform: translateZ(0px) translateY(-100%); '+'} '+'33% { opacity: 1 }'+'100% { '+'color: '+$rgbaColorEnd+'; '+'text-shadow: none; '+'transform: translateZ(0px) translateY(0px); '+'-webkit-transform: translateZ(0px) translateY(0px); '+'} '+'} '+'.nectar-milestone.motion_blur.instance-'+i+' .number span.in-sight { animation: 0.65s cubic-bezier(0, 0, 0.17, 1) 0s normal backwards 1 motion-blur-number-'+i+'; -webkit-animation: 0.65s cubic-bezier(0, 0, 0.17, 1) 0s normal backwards 1 motion-blur-number-'+i+'; } ';var $symbol=$(this).find('.symbol-wrap').clone();$(this).find('.symbol-wrap').remove();var characters=$(this).find('.number').text().split("");var $this=$(this).find('.number');$this.empty();$.each(characters,function(i,el){$this.append("<span>"+el+"</span")});if($(this).has('[data-symbol]')){if($(this).attr('data-symbol-pos')=='after'){$this.append($symbol)}else{$this.prepend($symbol)}}});nectarCreateStyle($blurCssString,'milestone-blur');milestoneWaypoint()}}
function milestoneWaypoint(){$($fullscreenSelector+'.nectar-milestone').each(function(){var $offset=($('#nectar_fullscreen_rows').length>0)?'250%':'98%',$that=$(this),waypoint=new Waypoint({element:$that,handler:function(){if($that.parents('.wpb_tab').length>0&&$that.parents('.wpb_tab').css('visibility')=='hidden'||$that.hasClass('animated-in')){waypoint.destroy();return}
var $endNum=parseInt($that.find('.number span:not(.symbol)').text().replace(/,/g,''));if(!$that.hasClass('motion_blur')){var countOptions={easingFn:easeOutCubic};var $countEle=$that.find('.number span:not(.symbol)')[0];var numAnim=new CountUp($countEle,0,$endNum,0,2.2,countOptions);numAnim.start()}else{$that.find('span').each(function(i){var $that=$(this);setTimeout(function(){$that.addClass('in-sight')},200*i)})}
$that.addClass('animated-in');waypoint.destroy()},offset:$offset})})}
function tabbedChangeSection(clickedTab){var $id=clickedTab.parents('li').index()+1;var $frontEndEditorTabDiv=($('body.vc_editor').length>0)?'> .wpb_tab ':'';if(!clickedTab.hasClass('active-tab')&&!clickedTab.hasClass('loading')){clickedTab.parents('ul').find('a').removeClass('active-tab');clickedTab.addClass('active-tab');clickedTab.parents('.tabbed').find('> div:not(.clear)'+$frontEndEditorTabDiv).css({'visibility':'hidden','position':'absolute','opacity':'0','left':'-9999px','display':'none'}).removeClass('visible-tab');if($('body.vc_editor').length>0){var $data_m_id=(clickedTab.parent().is('[data-m-id]'))?clickedTab.parent().attr('data-m-id'):'';clickedTab.parents('.tabbed').find('> div[data-model-id="'+$data_m_id+'"]'+$frontEndEditorTabDiv).css({'visibility':'visible','position':'relative','left':'0','display':'block'}).stop().transition({'opacity':1},400).addClass('visible-tab');if(!$body.is('[data-flex-cols="true"]')){convertFrontEndPadding()}}else{clickedTab.parents('.tabbed').find('> div:nth-of-type('+$id+')'+$frontEndEditorTabDiv).css({'visibility':'visible','position':'relative','left':'0','display':'block'}).stop().transition({'opacity':1},400).addClass('visible-tab')}
if(clickedTab.parents('.tabbed').find('> div:nth-of-type('+$id+') .iframe-embed').length>0||clickedTab.parents('.tabbed').find('> div:nth-of-type('+$id+') .portfolio-items').length>0){setTimeout(function(){$window.trigger('resize')},10)}}
if($tabbedClickCount!=0){var $currentVisTab=clickedTab.parents('.tabbed').find('> div:nth-of-type('+$id+')'+$frontEndEditorTabDiv);if($currentVisTab.find('.nectar-progress-bar').length>0){progressBars()}
if($currentVisTab.find('.divider-small-border [data-animate="yes"]').length>0||$currentVisTab.find('.divider-border [data-animate="yes"]').length>0){dividers()}
if($currentVisTab.find('img.img-with-animation').length>0||$currentVisTab.find('.col.has-animation').length>0||$currentVisTab.find('.nectar_cascading_images').length>0||$currentVisTab.find('.wpb_column.has-animation').length>0){colAndImgAnimations();cascadingImageBGSizing()}
if($currentVisTab.find('.column-image-bg-wrap[data-bg-animation="displace-filter-fade"]').length>0){for(var k=0;k<$liquidBG_EL.length;k++){if($($liquidBG_EL[k].canvasContainer).parents('.wpb_tab').length>0&&$($liquidBG_EL[k].canvasContainer).parents('.wpb_tab').css('visibility')!='hidden'){if($($liquidBG_EL[k].canvasContainer).find('.image-added-to-stage').length==0){$liquidBG_EL[k].imgContainer.addChild($liquidBG_EL[k].bg)}
$($liquidBG_EL[k].canvasContainer).find('.nectar-liquid-bg').addClass('image-added-to-stage');$liquidBG_EL[k].resize();if($($liquidBG_EL[k].canvasContainer).find('.nectar-liquid-bg.animated-in').length==0){$liquidBG_EL[k].animateProps($liquidBG_EL[k])}}}}
if($currentVisTab.find('.nectar-milestone').length>0){milestoneWaypoint()}
if($currentVisTab.find('.nectar_image_with_hotspots[data-animation="true"]').length>0){imageWithHotspots();setTimeout(function(){$window.trigger('resize')},100)}
if($currentVisTab.find('.nectar-fancy-ul').length>0){nectarFancyUlInit()}
if($currentVisTab.find('.nectar-split-heading').length>0){splitLineHeadings()}
if($currentVisTab.find('.wpb_column[data-border-animation="true"]').length>0){animatedColBorders()}
if($currentVisTab.find('.wpb_animate_when_almost_visible').length>0){vcWaypoints()}
if($currentVisTab.find('.nectar-animated-title').length>0){animatedTitles()}
if($currentVisTab.find('.nectar-highlighted-text').length>0){highlightedText()}
if($currentVisTab.find('.nectar_food_menu_item').length>0){foodMenuItems()}
if(clickedTab.parents('.wpb_row').length>0){if($currentVisTab.find('.vc_pie_chart').length>0||$currentVisTab.find('.wp-video-shortcode').length>0||$currentVisTab.find('.post-area.masonry .posts-container').length>0||$currentVisTab.find('.twentytwenty-container').length>0||clickedTab.parents('#nectar_fullscreen_rows[data-content-overflow="scrollbar"]').length>0||clickedTab.parents('.tabbed').find('> div:nth-of-type('+$id+')').find('.wpb_gallery').length>0||clickedTab.parents('.wpb_row').next().hasClass('parallax_section')){$window.trigger('resize')}
if($currentVisTab.find('.nectar-flickity').length>0&&typeof Flickity!='undefined'){var tabbedFlkty=Flickity.data(clickedTab.parents('.tabbed').find('> div:nth-of-type('+$id+')').find('.nectar-flickity')[0]);tabbedFlkty.resize()}
if($currentVisTab.find('.nectar-woo-flickity').length>0&&typeof Flickity!='undefined'){var wootabbedFlkty=Flickity.data(clickedTab.parents('.tabbed').find('> div:nth-of-type('+$id+')').find('.nectar-woo-flickity > ul')[0]);wootabbedFlkty.resize()}}
$currentVisTab.find('.svg-icon-holder').each(function(i){var $that=$(this);setTimeout(function(){var $animationDelay=0;if($that.is('[data-animation-delay]')&&$that.attr('data-animation-delay').length>0&&$that.attr('data-animation')!='false'){$animationDelay=$that.attr('data-animation-delay')}
clearTimeout($animatedSVGIconTimeout[i]);if($that.attr('data-animation')=='false'){$that.css('opacity','1');$svgIcons[$that.find('svg').attr('id').slice(-1)].finish()}else{$svgIcons[$that.find('svg').attr('id').slice(-1)].reset();$animatedSVGIconTimeout[i]=setTimeout(function(){$svgIcons[$that.find('svg').attr('id').slice(-1)].play()},$animationDelay)}},150)})}
clickedTab.parents('.tabbed').find('.wpb_row').each(function(){if(typeof $(this).find('[class*="vc_col-"]').first().offset()!='undefined'){var $firstChildOffset=$(this).find('[class*="vc_col-"]').first().offset().left;$(this).find('[class*="vc_col-"]').each(function(){$(this).removeClass('no-left-margin');if($(this).offset().left<$firstChildOffset+15){$(this).addClass('no-left-margin')}else{$(this).removeClass('no-left-margin')}})}});$tabbedClickCount++;if(clickedTab.parent().parent().find('.magic-line').length>0){magicLineCalc(clickedTab)}}
function magicLineCalc($ele){var el,leftPos,ratio;el=$ele.parent();if(el.length){leftPos=el.position().left;ratio=el.width()}else{leftPos=ratio=0}
$ele.parent().parent().find('.magic-line').css('transform','translateX('+leftPos+'px) scaleX('+ratio+')')}
function tabbbedDeepLinking(){if(typeof nectarGetQueryParam.tab!='undefined'){$('.wpb_tabs_nav').each(function(){$(this).find('li').each(function(){var $currentText=$(this).find('a').clone(),$getText=nectarGetQueryParam.tab,$that=$(this);$currentText.find('svg').remove();$currentText=$currentText.text();$currentText=$currentText.replace(/\s+/g,'-').toLowerCase();if($currentText.length>0&&$currentText.substring(0,1)==='-'){$currentText=$currentText.substring(1)}
$getText=$getText.replace(/\s+/g,'-').replace(/</g,'&lt;').replace(/"/g,'&quot;').toLowerCase();if($currentText==$getText){$(this).find('a').trigger('click');setTimeout(function(){$that.find('a').trigger('click')},501)}})})}}
function tabbedInit(){$body.on('click','.tabbed > ul li:not(.cta-button) a',function(){tabbedChangeSection($(this));return!1});$('.tabbed').each(function(){var $that;$(this).find('.wpb_tab').each(function(i){if($(this).is('[data-tab-icon]')&&$(this).attr('data-tab-icon').length>0){$(this).parents('.tabbed').addClass('using-icons');$(this).parents('.tabbed').find('.wpb_tabs_nav li:nth-child('+(i+1)+') > a').prepend('<i class="'+$(this).attr("data-tab-icon")+'"></i>')}
if($(this).find('.im-icon-wrap.tab-icon').length>0){var $svg_icon_markup=$(this).find('.im-icon-wrap.tab-icon').detach();$(this).parents('.tabbed').find('.wpb_tabs_nav li:nth-child('+(i+1)+') > a').prepend($svg_icon_markup)}});if($(this).find('.swiper-container').length==0&&$(this).find('.testimonial_slider').length==0&&$(this).find('.portfolio-items:not(".carousel")').length==0&&$(this).find('.wpb_gallery .portfolio-items').length==0&&$(this).find('iframe').length==0){$(this).find('> ul li:first-child a').trigger('click')}
if($(this).find('.testimonial_slider').length>0||$(this).find('.portfolio-items:not(".carousel")').length>0||$(this).find('.wpb_gallery .portfolio-items').length>0||$(this).find('iframe').length>0){$that=$(this);$(this).find('.wpb_tab').show().css({'opacity':0,'height':'1px'});$(this).find('> ul li a').addClass('loading');setTimeout(function(){$that.find('.wpb_tab').hide().css({'opacity':1,'height':'auto'});$that.find('> ul li a').removeClass('loading');$that.find('> ul li:first-child a').trigger('click');tabbbedDeepLinking()},900)}
$that=$(this);setTimeout(function(){if($that.is('[data-style="minimal_alt"]')){$that.find('> ul').append('<li class="magic-line" />');magicLineCalc($that.find('> ul > li:first-child > a'))}},100)});if($('.tabbed[data-style="minimal_alt"]').length>0){$window.on('smartresize',function(){magicLineCalc($('.tabbed[data-style="minimal_alt"] > ul > li > a.active-tab'))})}
tabbbedDeepLinking()}
function accordionDeepLinking(){if(typeof nectarGetQueryParam.toggle!='undefined'){$('.toggles').each(function(){$(this).find('.toggle').each(function(){var $currentText=$(this).find('h3 a').clone();var $getText=nectarGetQueryParam.toggle;$($currentText).find('i').remove();$currentText=$currentText.text();$currentText=$currentText.replace(/\s+/g,'-').toLowerCase();$getText=$getText.replace(/\s+/g,'-').replace(/</g,'&lt;').replace(/"/g,'&quot;').toLowerCase();if($currentText==$getText){$(this).find('h3 a').trigger('click')}})})}}
function accordionInit(){$body.on('click','.toggle h3 a',function(){if(!$(this).parents('.toggles').hasClass('accordion')){$(this).parents('.toggle').find('> div').slideToggle(300);$(this).parents('.toggle').toggleClass('open');if($(this).parents('.toggle').hasClass('open')){$(this).find('i').attr('class','icon-minus-sign')}else{$(this).find('i').attr('class','icon-plus-sign')}
if($(this).parents('.toggle').find('> div .iframe-embed').length>0&&$(this).parents('.toggle').find('> div iframe.iframe-embed').height()=='0'){responsiveVideoIframes()}
if($(this).parents('.full-width-content').length>0){setTimeout(function(){fullWidthContentColumns()},300)}
if($('#nectar_fullscreen_rows').length>0){setTimeout(function(){$window.trigger('smartresize')},300)}
return!1}});$body.on('click','.accordion .toggle h3 a',function(){if($(this).parents('.toggle').hasClass('open')){return!1}
var $t;var $parentToggles=$(this).parents('.toggles');var $parentToggle=$(this).parents('.toggle');$parentToggles.find('.toggle > div').slideUp(300);$parentToggles.find('.toggle h3 a i').attr('class','icon-plus-sign');$parentToggles.find('.toggle').removeClass('open');$parentToggle.find('> div').slideDown(300);$parentToggle.addClass('open');if($parentToggle.hasClass('open')){$(this).find('i').attr('class','icon-minus-sign')}else{$(this).find('i').attr('class','icon-plus-sign')}
if($(this).parents('.full-width-content').length>0){clearTimeout($t);$t=setTimeout(function(){fullWidthContentColumns()},400)}
if($('#nectar_fullscreen_rows').length>0){clearTimeout($t);$t=setTimeout(function(){$window.trigger('smartresize')},400)}
return!1});$('.accordion').each(function(){$(this).find('> .toggle').first().addClass('open').find('> div').show();$(this).find('> .toggle').first().find('a i').attr('class','icon-minus-sign')});$('.toggles').each(function(){var $isAccordion=($(this).hasClass('accordion'))?!0:!1;$(this).find('.toggle').each(function(){if($(this).find('> div .testimonial_slider').length>0||$(this).find('> div iframe').length>0){var $that=$(this);$(this).find('> div').show().css({'opacity':0,'height':'1px','padding':'0'});for(var i=0;i<$testimonialSliders.length;i++){$testimonialSliders[i].testimonialHeightResize()}
setTimeout(function(){$that.find('> div').hide().css({'opacity':1,'height':'auto','padding':'10px 14px'});if($isAccordion==!0&&$that.index()==0){$that.find('> div').slideDown(300)}},900)}})});accordionDeepLinking()}
function shadeColor(hex,lum){hex=String(hex).replace(/[^0-9a-f]/gi,'');if(hex.length<6){hex=hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2]}
lum=lum||0;var rgb="#",c,i;for(i=0;i<3;i++){c=parseInt(hex.substr(i*2,2),16);c=Math.round(Math.min(Math.max(0,c+(c*lum)),255)).toString(16);rgb+=("00"+c).substr(c.length)}
return rgb}
function createExtraJumboSize(){$('.nectar-3d-transparent-button').each(function(){if($(this).css('visibility')!='visible'){return}
var $that=$(this),$size=$that.attr('data-size'),$padding=0;var $vert_height_divider=1.7;if($size=='extra_jumbo'){var $font_size;if(nectarDOMInfo.winW<1000&&nectarDOMInfo.winW>690){$padding=64;$font_size=34;$that.find('.back-3d rect').attr('stroke-width','12');$vert_height_divider=1.7}else if(nectarDOMInfo.winW<=690){$padding=46;$font_size=16;$that.find('.back-3d rect').attr('stroke-width','10');$vert_height_divider=1.7}else{$padding=100;$font_size=64;$that.find('.back-3d rect').attr('stroke-width','20');$vert_height_divider=1.6}
$that.find('svg text').attr('font-size',$font_size);var $boundingRect=$(this).find('.back-3d .button-text')[0].getBoundingClientRect(),$text_width=$boundingRect.width,$text_height=$font_size*1.5;$that.css({'width':($text_width+$padding*1.5)+'px','height':($text_height+$padding)+'px'});$that.find('> a').css({'height':($text_height+$padding)+'px'});$that.find('.back-3d svg, .front-3d svg').css({'width':($text_width+$padding*1.5)+'px','height':($text_height+$padding)+'px'}).attr('viewBox','0 0 '+($text_width+$padding)+' '+($text_height+$padding));$that.find('svg text').attr('transform','matrix(1 0 0 1 '+($text_width+$padding*1.6)/2+' '+(($text_height+$padding)/$vert_height_divider)+')');$that.find('.front-3d ').css('transform-origin','50% 50% -'+($text_height+$padding)/2+'px');$that.find('.back-3d').css('transform-origin','50% 50% -'+($text_height+$padding)/2+'px')}})}
function coloredButtons(){$('.nectar-button.see-through[data-color-override], .nectar-button.see-through-2[data-color-override], .nectar-button.see-through-3[data-color-override]').each(function(){var $usingMaterialSkin=($('body.material[data-button-style^="rounded"]').length>0)?!0:!1;$(this).css('visibility','visible');if($(this).hasClass('see-through-3')&&$(this).attr('data-color-override')=='false'){return!0}
var $color;var $that;if($(this).attr('data-color-override')!='false'){$color=$(this).attr('data-color-override')}else{if($(this).parents('.dark').length>0){$color='#000000'}else{$color='#ffffff'}}
if(!$(this).hasClass('see-through-3')){$(this).css('color',$color)}
$(this).find('i').css('color',$color);var colorInt=parseInt($color.substring(1),16);var $hoverColor=($(this).has('[data-hover-color-override]'))?$(this).attr('data-hover-color-override'):'no-override';var $hoverTextColor=($(this).has('[data-hover-text-color-override]'))?$(this).attr('data-hover-text-color-override'):'#fff';var R=(colorInt&0xFF0000)>>16;var G=(colorInt&0x00FF00)>>8;var B=(colorInt&0x0000FF)>>0;var $opacityStr=($(this).hasClass('see-through-3'))?'1':'0.75';$(this).css('border-color','rgba('+R+','+G+','+B+','+$opacityStr+')');if($usingMaterialSkin){$(this).find('i').css({'background-color':'rgba('+R+','+G+','+B+',1)','box-shadow':'0px 8px 15px rgba('+R+','+G+','+B+',0.24)'})}
if($(this).hasClass('see-through')){$that=$(this);$(this).on('mouseenter touchstart',function(){$that.css('border-color','rgba('+R+','+G+','+B+',1)')});$(this).on('mouseleave touchtouchend',function(){$that.css('border-color','rgba('+R+','+G+','+B+',1)');$opacityStr=($(this).hasClass('see-through-3'))?'1':'0.75';$that.css('border-color','rgba('+R+','+G+','+B+','+$opacityStr+')')})}else{$(this).find('i').css('color',$hoverTextColor);if($hoverColor!='no-override'){$that=$(this);$(this).on('mouseenter touchstart',function(){$that.css({'border-color':$hoverColor,'background-color':$hoverColor,'color':$hoverTextColor});if($usingMaterialSkin){$that.find('i').css({'background-color':'','box-shadow':''})}});$(this).on('mouseleave touchtouchend',function(){$opacityStr=($(this).hasClass('see-through-3'))?'1':'0.75';if($usingMaterialSkin){$that.find('i').css({'background-color':'rgba('+R+','+G+','+B+',1)','box-shadow':'0px 8px 15px rgba('+R+','+G+','+B+',0.24)'})}
if(!$that.hasClass('see-through-3')){$that.css({'border-color':'rgba('+R+','+G+','+B+','+$opacityStr+')','background-color':'transparent','color':$color})}else{$that.css({'border-color':'rgba('+R+','+G+','+B+','+$opacityStr+')','background-color':'transparent'})}})}else{$that=$(this);$(this).on('mouseenter touchstart',function(){$that.css({'border-color':$hoverColor,'color':$hoverTextColor})});$(this).on('mouseleave touchtouchend',function(){$opacityStr=($that.hasClass('see-through-3'))?'1':'0.75';$that.css({'border-color':'rgba('+R+','+G+','+B+','+$opacityStr+')','color':$hoverTextColor})})}}});$('.nectar-button:not(.see-through):not(.see-through-2):not(.see-through-3)[data-color-override]').each(function(){$(this).css('visibility','visible');if($(this).attr('data-color-override')!='false'){var $color=$(this).attr('data-color-override');$(this).removeClass('accent-color').removeClass('extra-color-1').removeClass('extra-color-2').removeClass('extra-color-3').css('background-color',$color)}});if($('.swiper-slide .solid_color_2').length>0||$('.tilt-button-inner').length>0){var $tiltButtonCssString='';var $color;$('.swiper-slide .solid_color_2 a').each(function(i){$(this).addClass('instance-'+i);if($(this).attr('data-color-override')!='false'){$color=$(this).attr('data-color-override')}else{if($(this).parents('.dark').length>0){$color='#000000'}else{$color='#ffffff'}}
$(this).css('color',$color);$(this).find('i').css('color',$color);var $currentColor=$(this).css('background-color'),$topColor=shadeColor($currentColor,0.13),$bottomColor=shadeColor($currentColor,-0.15);$tiltButtonCssString+='.swiper-slide .solid_color_2 a.instance-'+i+':after { background-color: '+$topColor+';  }'+' .swiper-slide .solid_color_2 a.instance-'+i+':before { background-color: '+$bottomColor+'; } '});$('.tilt-button-wrap a').each(function(i){$(this).addClass('instance-'+i);var $currentColor=$(this).css('background-color');var $color;if($(this).attr('data-color-override')!='false'){$color=$(this).attr('data-color-override');$(this).css('background-color',$color);$currentColor=$color}
var $topColor=shadeColor($currentColor,0.13),$bottomColor=shadeColor($currentColor,-0.15);$tiltButtonCssString+='.tilt-button-wrap a.instance-'+i+':after { background-color: '+$topColor+';  }'+' .tilt-button-wrap a.instance-'+i+':before { background-color: '+$bottomColor+'; } '});nectarCreateStyle($tiltButtonCssString,'tilt-button')}
if($('.nectar-3d-transparent-button').length>0){var $3dTransButtonCssString='';$('.nectar-3d-transparent-button').each(function(i){var $that=$(this),$size=$that.attr('data-size'),$padding=0,v1=1.5,v2=1.65,$font_size;if($size=='large'){$padding=46;$font_size=16;v1=1.5;v2=1.7}else if($size=='medium'){$padding=30;$font_size=16}else if($size=='small'){$padding=20;$font_size=12}else if($size=='jumbo'){$padding=54;$font_size=24;v1=1.5;v2=1.68}else if($size=='extra_jumbo'){$padding=100;$font_size=64;v1=1.6;v2=1.6}
$that.find('svg text').attr('font-size',$font_size);var $boundingRect=$(this).find('.back-3d .button-text')[0].getBoundingClientRect(),$text_width=$boundingRect.width,$text_height=$font_size*1.5;$that.css({'width':($text_width+$padding*1.5)+'px','height':($text_height+$padding)+'px'});$that.find('> a').css({'height':($text_height+$padding)+'px'});$that.find('.back-3d svg, .front-3d svg').css({'width':($text_width+$padding*1.5)+'px','height':($text_height+$padding)+'px'}).attr('viewBox','0 0 '+($text_width+$padding)+' '+($text_height+$padding));$that.find('svg text').attr('transform','matrix(1 0 0 1 '+($text_width+$padding*v1)/2+' '+(($text_height+$padding)/v2)+')');$that.find('.front-3d, .back-3d').css('transform-origin','50% 50% -'+($text_height+$padding)/2+'px');$(this).find('.front-3d svg > rect').attr('id','masked-rect-id-'+i);$(this).find('.front-3d defs mask').attr('id','button-text-mask-'+i);$that.css('visibility','visible');$3dTransButtonCssString+='#masked-rect-id-'+i+' { mask: url(#button-text-mask-'+i+'); -webkit-mask: url(#button-text-mask-'+i+')} '});createExtraJumboSize();$window.on('smartresize',createExtraJumboSize);nectarCreateStyle($3dTransButtonCssString,'nectar-td-button')}
setTimeout(function(){$('.nectar-button[class*="color-gradient"] .start').removeClass('loading')},150);if(navigator.userAgent.toLowerCase().indexOf('firefox')>-1||navigator.userAgent.indexOf("MSIE ")>-1||navigator.userAgent.match(/Trident\/7\./)){$('.nectar-button[class*="color-gradient"] .start').addClass('no-text-grad')}}
function largeIconHover(){$('.icon-3x').each(function(){$(this).closest('.col').on('mouseenter',function(){$(this).find('.icon-3x').addClass('hovered')});$(this).closest('.col').on('mouseleave',function(){$(this).find('.icon-3x').removeClass('hovered')})});if(navigator.userAgent.indexOf("MSIE ")>-1||navigator.userAgent.match(/Trident\/7\./)){$('[class^="icon-"][class*="color-gradient"], .nectar_icon_wrap[data-color*="extra-color-gradient"] .nectar_icon, .nectar-gradient-text').addClass('no-grad')}}
function teamMemberFullscreen(){if($('.team-member').length===0){return}
$body.on('click','.team-member[data-style="bio_fullscreen"], .team-member[data-style="bio_fullscreen_alt"]',function(){if($('.nectar_team_member_overlay').length>0){return}
var $usingBoxedClass=($('body > #boxed').length>0)?'in-boxed':'',$teamMemberMeta=$(this).find('.nectar_team_bio').html(),$teamMemberTitle=($(this).is('[data-style="bio_fullscreen_alt"]'))?$(this).find('.team-meta h5').html():$(this).find('.team-meta p').html(),$teamMemberImg=($(this).find('.nectar_team_bio_img[data-img-src]').length>0)?$(this).find('.nectar_team_bio_img').attr('data-img-src'):'',$teamMemberStyle=($(this).is('[data-style="bio_fullscreen_alt"]'))?'bio-fullscreen-alt':'bio-fullscreen',$teamName='';if($(this).is('[data-style="bio_fullscreen_alt"]')){$teamName='<div class="title">'+$teamMemberTitle+'</div><h2>'+$(this).find('.team-meta h3').html()+'</h2>'}else{$teamName='<h2>'+$(this).find('.team-meta h3').html()+'</h2><div class="title">'+$teamMemberTitle+'</div>'}
$body.append('<div class="nectar_team_member_overlay '+$usingBoxedClass+'" data-style="'+$teamMemberStyle+'"><div class="inner-wrap"><div class="team_member_details"><div class="bio-inner"><span class="mobile-close"></span>'+$teamName+'<div class="team-desc">'+$teamMemberMeta+'</div></div></div><div class="team_member_picture"><div class="team_member_image_bg_cover"></div><div class="team_member_picture_wrap"><div class="team_member_image"></div></div></div></div></div>');if($teamMemberImg.length>0){var teamTmpImg=new Image();teamTmpImg.src=$teamMemberImg;teamTmpImg.onload=function(){$('.nectar_team_member_overlay .team_member_image').css('opacity','1')};$('.nectar_team_member_overlay .team_member_image').css({'background-image':'url("'+$teamMemberImg+'")'})}
var $headerNavSpace=($('body[data-header-format="left-header"]').length>0&&$window.width()>1000)?0:$headerOuterEl.height();$('.nectar_team_member_overlay .inner-wrap').css({'padding-top':$headerNavSpace});if($('.using-mobile-browser').length>0){$('body,html').addClass('nectar-no-scrolling')}
teamFullscreenResize();$('.nectar_team_member_overlay').addClass('open').addClass('animating');setTimeout(function(){$('.nectar_team_member_close').addClass('visible');$('.nectar_team_member_overlay').removeClass('animating')},500);if($('.using-mobile-browser').length==0){fullscreenBioScrolling()}
if($('.team-member[data-style="bio_fullscreen"]').length>0&&nectarDOMInfo.usingMobileBrowser){$('.nectar_team_member_overlay').addClass('on-mobile')}});$body.on('click','.nectar_team_member_overlay',function(){if(!$(this).hasClass('animating')){$('.nectar_team_member_overlay').removeClass('open');$('.nectar_team_member_close').removeClass('visible');if($('.using-mobile-browser').length>0){$('body,html').removeClass('nectar-no-scrolling')}
setTimeout(function(){$('.nectar_team_member_overlay, .nectar_team_member_close').remove()},820)}});if($('.team-member[data-style="bio_fullscreen"]').length>0||$('.team-member[data-style="bio_fullscreen_alt"]').length>0){$window.on('resize',teamFullscreenResize);if(!nectarDOMInfo.usingMobileBrowser){var closeIndicator=new NectarIconMouseFollow('','close-indicator')}}}
function teamFullscreenResize(){var $leftHeaderSize=($('body[data-header-format="left-header"]').length>0&&$window.width()>1000)?275:0;$('.nectar_team_member_overlay').css({'width':$window.width()-$leftHeaderSize,'left':$leftHeaderSize})}
function fullscreenBioScrolling(){$('.nectar_team_member_overlay .inner-wrap').mousewheel(function(event,delta){this.scrollTop-=(delta*30);event.preventDefault()})}
function columnBGColors(){var $columnColorCSS='';$('.wpb_column').each(function(i){$(this).removeClass(function(index,className){return(className.match(/(^|\s)instance-\S+/g)||[]).join(' ')});$(this).addClass('instance-'+i);var $innerSelector=($(this).find('> .vc_column-inner > .column-bg-overlay-wrap').length>0||$(this).find('> .vc_column-inner > .column-bg-overlay').length>0)?' > .vc_column-inner ':'';var $innerWrapSelector=($(this).find($innerSelector+' > .column-bg-overlay-wrap').length>0)?'> .column-bg-overlay-wrap ':'';if($(this).attr('data-has-bg-color')=='true'){$columnColorCSS+='.wpb_column.instance-'+i+$innerSelector+$innerWrapSelector+' > .column-bg-overlay { background-color:'+$(this).attr('data-bg-color')+';  opacity: '+$(this).attr('data-bg-opacity')+'; }'}
if($(this).is('[data-hover-bg^="#"]')){$columnColorCSS+='.wpb_column.instance-'+i+':hover '+$innerSelector+$innerWrapSelector+' > .column-bg-overlay { background-color: '+$(this).attr('data-hover-bg')+'!important; opacity: '+$(this).attr('data-hover-bg-opacity')+'!important; }'}});nectarCreateStyle($columnColorCSS,'column-bg-colors')}
function nectarLiquidBGs(){$liquidBG_EL=[];if(typeof NectarLiquid=='undefined'||nectarDOMInfo.usingFrontEndEditor){return}
$('.row-bg-wrap[data-bg-animation*="displace-filter"] .row-bg.using-image, .column-image-bg-wrap[data-bg-animation*="displace-filter"] .column-image-bg').each(function(i){var $that_el=$(this);var $type;var $el_type;if($(this).is('.row-bg')){$type=$(this).parents('.row-bg-wrap').attr('data-bg-animation');$el_type='row'}else if($(this).is('.column-image-bg')){$type=$(this).parents('.column-image-bg-wrap').attr('data-bg-animation');$el_type='col'}
$liquidBG_EL[i]=new NectarLiquid($that_el,$type,$el_type)})}
function morphingOutlines(){if($('.morphing-outline').length>0){var $morphingOutlineCSS='',$frontEndEditorMOSelector=($('body.vc_editor').length>0)?'':'>';$('.morphing-outline').each(function(i){$(this).removeClass(function(index,className){return(className.match(/(^|\s)instance-\S+/g)||[]).join(' ')});$(this).addClass('instance-'+i).css({'visibility':'visible'});var $width=$(this).find('.inner').width(),$height=$(this).find('.inner').height(),$border=parseInt($(this).attr("data-border-thickness")),$hover=($('body[data-button-style*="rounded"]').length>0)?':hover':'',$hover2=($('body[data-button-style*="rounded"]').length>0)?'':':hover';$morphingOutlineCSS+='body .morphing-outline.instance-'+i+' .inner > * { color: '+$(this).attr("data-starting-color")+'; } ';$morphingOutlineCSS+='body .morphing-outline.instance-'+i+' .inner:after  { border-width:'+$(this).attr("data-border-thickness")+'px ; border-color: '+$(this).attr("data-starting-color")+'; } ';$morphingOutlineCSS+='body .wpb_column:hover > .wpb_wrapper '+$frontEndEditorMOSelector+' .morphing-outline.instance-'+i+' .inner > *, body .wpb_column:hover > .vc_column-inner > .wpb_wrapper '+$frontEndEditorMOSelector+' .morphing-outline.instance-'+i+' .inner > * { color: '+$(this).attr("data-hover-color")+'; } ';$morphingOutlineCSS+='body .wpb_column:hover > .wpb_wrapper '+$frontEndEditorMOSelector+' .morphing-outline.instance-'+i+' .inner:after, body .wpb_column:hover > .vc_column-inner > .wpb_wrapper '+$frontEndEditorMOSelector+' .morphing-outline.instance-'+i+' .inner:after  { border-color: '+$(this).attr("data-hover-color")+'; } ';$morphingOutlineCSS+='body .wpb_column'+$hover2+' > .wpb_wrapper '+$frontEndEditorMOSelector+' .morphing-outline.instance-'+i+' .inner:after, body .wpb_column'+$hover2+' > .vc_column-inner > .wpb_wrapper '+$frontEndEditorMOSelector+' .morphing-outline.instance-'+i+' .inner:after { padding: '+(($width+100+$border*2-$height)/2-$border)+'px 50px}';$morphingOutlineCSS+='.morphing-outline.instance-'+i+' { padding: '+(30+($width+80+$border*2-$height)/2-$border)+'px 50px}';$morphingOutlineCSS+='body .wpb_column'+$hover2+' > .wpb_wrapper '+$frontEndEditorMOSelector+' .morphing-outline.instance-'+i+' .inner:after, body .wpb_column'+$hover2+' > .vc_column-inner > .wpb_wrapper '+$frontEndEditorMOSelector+' .morphing-outline.instance-'+i+' .inner:after { top: -'+parseInt((($width+100+$border*2-$height)/2-$border)+$border)+'px }';$morphingOutlineCSS+='body .wpb_column > .wpb_wrapper '+$frontEndEditorMOSelector+' .morphing-outline.instance-'+i+' .inner:after, body .wpb_column > .vc_column-inner > .wpb_wrapper '+$frontEndEditorMOSelector+' .morphing-outline.instance-'+i+' .inner:after { left: -'+parseInt(50+$border)+'px }';$morphingOutlineCSS+='body .wpb_column'+$hover+' > .wpb_wrapper '+$frontEndEditorMOSelector+' .morphing-outline.instance-'+i+' .inner:after, body .wpb_column'+$hover+' > .vc_column-inner > .wpb_wrapper '+$frontEndEditorMOSelector+' .morphing-outline.instance-'+i+' .inner:after { padding: 50px 50px}';$morphingOutlineCSS+='body .wpb_column'+$hover+' > .wpb_wrapper '+$frontEndEditorMOSelector+' .morphing-outline.instance-'+i+' .inner:after, body .wpb_column'+$hover+' > .vc_column-inner > .wpb_wrapper '+$frontEndEditorMOSelector+' .morphing-outline.instance-'+i+' .inner:after { top: -'+parseInt(50+$border)+'px }'});nectarCreateStyle($morphingOutlineCSS,'morphing-outlines')}}
function morphingOutlinesInit(){if($('.morphing-outline').length>0){setTimeout(morphingOutlines,100);setTimeout(fullWidthContentColumns,125);$window.on('smartresize',morphingOutlines)}}
function svgAnimations(){var $svgOffsetPos=($('#nectar_fullscreen_rows').length>0)?'200%':'bottom-in-view';if($svgIcons.length==0){$('.svg-icon-holder:not(.animated-in)').has('svg').each(function(i){var $that=$(this);if(nectarDOMInfo.usingMobileBrowser){$that.attr('data-animation','false')}
$that.find('svg').css({'height':parseInt($that.attr('data-size'))+'px','width':parseInt($that.attr('data-size'))+'px'});$(this).find('svg').attr('id','nectar-svg-animation-instance-'+i);var $animationSpeed=($that.is('[data-animation-speed]')&&$that.attr('data-animation-speed').length>0)?$that.attr('data-animation-speed'):200;if($that.attr('data-animation')=='false'){$animationSpeed=1;$that.css('opacity','1')}
if(!$that.hasClass('bound')){$svgIcons[i]=new Vivus($that.find('svg').attr('id'),{type:'delayed',pathTimingFunction:Vivus.EASE_OUT,animTimingFunction:Vivus.LINEAR,duration:$animationSpeed,onReady:svgInit})}
if($animationSpeed!==1){var waypoint=new Waypoint({element:$that,handler:function(){if($that.hasClass('animated-in')){waypoint.destroy();return}
checkIfReady();$that.addClass('animated-in');waypoint.destroy()},offset:$svgOffsetPos})}else{checkIfReady()}
function checkIfReady(){var $animationDelay=0;if($that.is('[data-animation-delay]')&&$that.attr('data-animation-delay').length>0&&$that.attr('data-animation')!='false'){$animationDelay=$that.attr('data-animation-delay')}
var $iconID=$that.find('svg').attr('id').replace(/[^0-9]/g,'');if($svgIcons[$iconID].isReady==!0){setTimeout(function(){$that.css('opacity','1');$svgIcons[$iconID].reset().play()},$animationDelay)}else{setTimeout(checkIfReady,50)}}
function svgInit(){$that.css({'height':parseInt($that.attr('data-size'))+'px','width':parseInt($that.attr('data-size'))+'px'})}
$that.addClass('bound')});if($('.vc_row-o-equal-height .svg-icon-holder[data-animation="true"]').length>0&&$('#nectar_fullscreen_rows').length==0){$window.on('smartresize',function(){clearTimeout($svgResizeTimeout);$svgResizeTimeout=setTimeout(function(){if($svgIcons.length>0){$('.svg-icon-holder.animated-in').each(function(){$(this).css('opacity','1');if($(this).is('[id]')){var $iconID=$(this).attr('id').replace(/[^0-9]/g,'');$svgIcons[$iconID].finish()}})}},300)})}}else{$('.svg-icon-holder').addClass('animated-in').css('opacity','1')}
$('#nectar_fullscreen_rows .svg-icon-holder.animated-in').has('svg').each(function(i){var $animationDelay=0;if($(this).is('[data-animation-delay]')&&$(this).attr('data-animation-delay').length>0&&$(this).attr('data-animation')!='false'){$animationDelay=$(this).attr('data-animation-delay')}
var $that=$(this);var $iconID=$that.find('svg').attr('id').replace(/[^0-9]/g,'');clearTimeout($animatedSVGIconTimeout[i]);if($that.attr('data-animation')=='false'){$that.css('opacity','1');$svgIcons[$iconID].finish()}else{if($(this).parents('.active').length>0||$(this).parents('#footer-outer').length>0||$('body.mobile').length>0){$svgIcons[$iconID].reset();$animatedSVGIconTimeout[i]=setTimeout(function(){$svgIcons[$iconID].play()},$animationDelay)}else{$svgIcons[$iconID].reset().stop()}}})}
function nectarFancyUlInit(){$($fullscreenSelector+'.nectar-fancy-ul').each(function(){var $animation=$(this).attr('data-animation'),$animationDelay=0;if($(this).is('[data-animation-delay]')&&$(this).attr('data-animation-delay').length>0&&$(this).attr('data-animation')!='false'){$animationDelay=$(this).attr('data-animation-delay')}
if($animation=='true'){var $that=$(this),waypoint=new Waypoint({element:$that,handler:function(){if($that.parents('.wpb_tab').length>0&&$that.parents('.wpb_tab').css('visibility')=='hidden'||$that.hasClass('animated-in')){waypoint.destroy();return}
setTimeout(function(){$that.find('li').each(function(i){var $that=$(this);$that.delay(i*220).transition({'opacity':'1','left':'0'},220,'easeOutCubic')})},$animationDelay);$that.addClass('animated-in');waypoint.destroy()},offset:'bottom-in-view'})}})}
function nectarFancyUlIcons(){$('.nectar-fancy-ul:not([data-list-icon="dot"])').each(function(){var $icon=$(this).attr('data-list-icon'),$color=$(this).attr('data-color');$(this).find('li').each(function(){$(this).find('> i').remove();$(this).prepend('<i class="icon-default-style '+$icon+' '+$color+'"></i> ')})})}
function flipBoxHeights(){$('.nectar-flip-box').each(function(){var $flipBoxMinHeight=parseInt($(this).attr('data-min-height')),$flipBoxHeight=$(this).find('.flip-box-front .inner').height();if($(this).find('.flip-box-back .inner').height()>$(this).find('.flip-box-front .inner').height()){$flipBoxHeight=$(this).find('.flip-box-back .inner').height()}
if($flipBoxHeight>=$flipBoxMinHeight-80){$(this).find('> div').css('height',$flipBoxHeight+80)}else{$(this).find('> div').css('height','auto')}
if($(this).parent().hasClass('wpb_wrapper')){$(this).parent().css('transform','translateZ(0)')}})}
function flipBoxInit(){if($('.nectar-flip-box').length>0){if(nectarDOMInfo.usingMobileBrowser){$body.on('click','.nectar-flip-box',function(){$(this).toggleClass('flipped')})}
flipBoxHeights();$window.on('smartresize',flipBoxHeights)}}
$.fn.parallaxScroll=function(xpos,speedFactor,outerHeight){var $windowDOMWidth=nectarDOMInfo.winW,$windowDOMHeight=nectarDOMInfo.winH,$orientationChange=0,$this=$(this),firstTop=$this.offset().top;$this.each(function(){firstTop=$this.offset().top});var getHeight=function(jqo){return jqo.outerHeight(!0)};if(arguments.length<1||xpos===null){xpos="50%"}
if(arguments.length<2||speedFactor===null){speedFactor=0.25}
if(arguments.length<3||outerHeight===null){outerHeight=!0}
var $onMobileBrowser=nectarDOMInfo.usingMobileBrowser,classic_mobile_menu_open=!1,firstSection=!1,$element=$this,height=getHeight($element);$this.find('.row-bg.using-image, .page-header-bg-image, .image-bg, .video-wrap').addClass('translate');setInterval(function(){height=getHeight($element);classic_mobile_menu_open=($('body.classic_mobile_menu_open.mobile').length>0)?!0:!1},600);if($element.parents('.top-level').length>0&&$element.parents('.parallax_slider_outer').length>0||$element.parents('.top-level').length>0&&$element.is('.nectar-recent-posts-single_featured')||$element.is('.wpb_row.top-level')||$('.wpb_row').length==0){firstSection=!0}
if($('.wpb_row').length==0&&$element.parents('.parallax_slider_outer').length>0&&$element.is('[data-full-width="true"]')||($('#portfolio-extra').length>0&&$element.parents('.parallax_slider_outer').length>0&&$element.parents('.wpb_row').length>0&&$element.parents('.wpb_row').index()=='0')){firstSection=!0}
if(nectarDOMInfo.usingFrontEndEditor){firstSection=!1}
var nectarSliderElBool=$this.is('.nectar-slider-wrap');var pageHeaderBool=($this.find('.page-header-bg-image').length>0)?!0:!1;var $elToParallax=!1;if(nectarSliderElBool){if($this.find('.video-wrap').length>0||$this.find('.image-bg').length>0){$elToParallax=$this.find('.video-wrap, .image-bg')}}else{if($this.find('.row-bg.using-image').length>0){$elToParallax=$this.find('.row-bg.using-image')}else if($this.find('.page-header-bg-image').length>0){$elToParallax=$this.find('.page-header-bg-image')}}
function update(){firstTop=$element.offset().top;if($elToParallax==!1||firstTop+height<nectarDOMInfo.scrollTop||firstTop>nectarDOMInfo.scrollTop+nectarDOMInfo.winH||$('body.material-ocm-open').length>0){}else{if(nectarSliderElBool){if(firstSection){if(!classic_mobile_menu_open){$this.find('.video-wrap, .image-bg').css({'transform':'translate3d(0, '+parseFloat(nectarDOMInfo.scrollTop*speedFactor)+'px, 0)'})}}else{$this.find('.video-wrap, .image-bg').css({'transform':'translate3d(0, '+parseFloat((($windowDOMHeight+nectarDOMInfo.scrollTop-firstTop)*speedFactor))+'px, 0)'})}}else{if(firstSection){if(!classic_mobile_menu_open){$elToParallax.css({'transform':'translate3d(0, '+parseFloat(nectarDOMInfo.scrollTop*speedFactor)+'px, 0)'})}}else{$elToParallax.css({'transform':'translate3d(0, '+parseFloat((($windowDOMHeight+nectarDOMInfo.scrollTop-firstTop)*speedFactor))+'px, 0), scale(1.005)'})}
if(pageHeaderBool&&!classic_mobile_menu_open){$elToParallax.css({'transform':'translate3d(0, '+parseFloat(nectarDOMInfo.scrollTop*speedFactor)+'px, 0)'})}}}
if($onMobileBrowser){requestAnimationFrame(update)}}
if(window.addEventListener){if(nectarDOMInfo.usingFrontEndEditor||!nectarDOMInfo.usingMobileBrowser){$window.on('resize',function(){$windowDOMWidth=nectarDOMInfo.winW;$windowDOMHeight=nectarDOMInfo.winH})}
if(nectarDOMInfo.usingFrontEndEditor){$window.on('scroll.parallaxSections',update)}else if(!nectarDOMInfo.usingMobileBrowser){window.addEventListener('scroll',function(){requestAnimationFrame(update)},!1)}else{requestAnimationFrame(update);window.addEventListener("orientationchange",function(){$orientationChange=1});$window.on('resize',function(){if(($window.width()!=$windowDOMWidth&&$window.height!=$windowDOMHeight)||$orientationChange==1){$windowDOMWidth=nectarDOMInfo.winW;$windowDOMHeight=nectarDOMInfo.winH;$orientationChange=0}})}}
$window.on('resize.parallaxSections',update);update()};function fullWidthSectionsPreInit(){$('.wpb_row .vc_col-sm-12 .nectar-slider-wrap[data-full-width="true"]').each(function(){if($(this).parents('.wpb_row.full-width-section').length==0&&$(this).parents('.wpb_row.full-width-content').length==0){$(this).parents('.wpb_row').addClass('full-width-section')}})}
function fullWidthSections(){var $windowInnerWidth=nectarDOMInfo.winW,$bodyBorderWidth=($('.body-border-right').length>0&&$windowInnerWidth>1000)?parseInt($('.body-border-right').width())*2:0,$container_width=($('.container-wrap').length>0)?parseInt($('.container-wrap').outerWidth()):$window.width();var $windowWidth,$justOutOfSight,$mainContentWidth;if($('#boxed').length==1){$justOutOfSight=((parseInt($('.container-wrap').width())-parseInt($('.main-content').width()))/2)+4}else{var $extResponsivePadding=($('body[data-ext-responsive="true"]').length>0&&$windowInnerWidth>=1000)?180:0;if($container_width-$bodyBorderWidth<=parseInt($('.main-content').css('max-width'))){$windowWidth=parseInt($('.main-content').css('max-width'))}else{$windowWidth=$container_width-$bodyBorderWidth}
var $contentWidth=parseInt($('.main-content').css('max-width'));if($('body.single-post[data-ext-responsive="true"]').length>0&&$('.container-wrap.no-sidebar').length>0){$contentWidth=$('.post-area').width();$extResponsivePadding=0}
$justOutOfSight=Math.ceil((($windowWidth+$extResponsivePadding-$contentWidth)/2))}
$('.carousel-outer').has('.carousel-wrap[data-full-width="true"]').css('overflow','visible');$('.carousel-wrap[data-full-width="true"], .portfolio-items[data-col-num="elastic"]:not(.fullwidth-constrained), .full-width-content').each(function(){var $leftHeaderSize=($('#header-outer[data-format="left-header"]').length>0&&$windowInnerWidth>=1000)?parseInt($('#header-outer[data-format="left-header"]').width()):0;var $bodyBorderWidth=($('.body-border-right').length>0&&$windowInnerWidth>1000)?(parseInt($('.body-border-right').width())*2)-2:0;if($('#boxed').length==1){$mainContentWidth=($('#nectar_fullscreen_rows').length==0)?parseInt($('.main-content').width()):parseInt($(this).parents('.container').width());if($('body.single-post[data-ext-responsive="true"]').length>0&&$('.container-wrap.no-sidebar').length>0&&$(this).parents('.post-area').length>0){$contentWidth=$('.post-area').width();$extResponsivePadding=0;$windowWidth=$container_width-$bodyBorderWidth;$justOutOfSight=Math.ceil((($windowWidth+$extResponsivePadding-$contentWidth)/2))}else{if($(this).parents('.page-submenu').length>0){$justOutOfSight=((parseInt($('.container-wrap').width())-$mainContentWidth)/2)}else{$justOutOfSight=((parseInt($('.container-wrap').width())-$mainContentWidth)/2)+4}}}else{if($('body.single-post[data-ext-responsive="true"]').length>0&&$('.container-wrap.no-sidebar').length>0&&$(this).parents('.post-area').length>0){$contentWidth=$('.post-area').width();$extResponsivePadding=0;$windowWidth=$container_width-$bodyBorderWidth}else{var $mainContentMaxWidth=($('#nectar_fullscreen_rows').length==0)?parseInt($('.main-content').css('max-width')):parseInt($(this).parents('.container').css('max-width'));if($container_width-$bodyBorderWidth<=$mainContentMaxWidth){$windowWidth=$mainContentMaxWidth}
$contentWidth=$mainContentMaxWidth;$extResponsivePadding=($('body[data-ext-responsive="true"]').length>0&&nectarDOMInfo.winW>=1000)?180:0;if($leftHeaderSize>0){$extResponsivePadding=($('body[data-ext-responsive="true"]').length>0&&nectarDOMInfo.winW>=1000)?120:0}}
$justOutOfSight=Math.ceil((($windowWidth+$extResponsivePadding-$contentWidth)/2))}
var $extraSpace=0;if($(this).hasClass('carousel-wrap')){$extraSpace=1}
if($(this).hasClass('portfolio-items')){$extraSpace=5}
var $carouselWidth=($('#boxed').length==1)?$mainContentWidth+parseInt($justOutOfSight*2):$container_width-$bodyBorderWidth+$extraSpace;if($('#boxed').length==0&&$(this).hasClass('portfolio-items')&&$(this).is('[data-gutter*="px"]')&&$(this).attr('data-gutter').length>0&&$(this).attr('data-gutter')!='none'){if($container_width>1000){$carouselWidth=$container_width-$bodyBorderWidth+3}else{$carouselWidth=$container_width-$bodyBorderWidth}}
if($(this).parent().hasClass('default-style')){$mainContentWidth=($('#nectar_fullscreen_rows').length==0)?parseInt($('.main-content').width()):parseInt($(this).parents('.container').width());if($('#boxed').length!=0){$carouselWidth=($('#boxed').length==1)?$mainContentWidth+parseInt($justOutOfSight*2):$container_width+$extraSpace}else{$carouselWidth=($('#boxed').length==1)?$mainContentWidth+parseInt($justOutOfSight*2):($container_width-$bodyBorderWidth)-(($container_width-$bodyBorderWidth)*0.025)+$extraSpace;$windowWidth=($container_width-$bodyBorderWidth<=$mainContentWidth)?$mainContentWidth:($container_width-$bodyBorderWidth)-(($container_width-$bodyBorderWidth)*0.025);$justOutOfSight=Math.ceil((($windowWidth-$mainContentWidth)/2))}}else if($(this).parent().hasClass('spaced')){$mainContentWidth=($('#nectar_fullscreen_rows').length==0)?parseInt($('.main-content').width()):parseInt($(this).parents('.container').width());if($('#boxed').length!=0){$carouselWidth=($('#boxed').length==1)?$mainContentWidth+parseInt($justOutOfSight*2)-($container_width*0.02):$container_width+$extraSpace}else{$carouselWidth=($('#boxed').length==1)?$mainContentWidth+parseInt($justOutOfSight*2):($container_width-$bodyBorderWidth)-Math.ceil(($container_width-$bodyBorderWidth)*0.02)+$extraSpace;var $windowWidth2=($container_width-$bodyBorderWidth<=$mainContentWidth)?$mainContentWidth:($container_width-$bodyBorderWidth)-(($container_width-$bodyBorderWidth)*0.02);$justOutOfSight=Math.ceil((($windowWidth2-$mainContentWidth)/2)+2)}}
if(!$(this).parents('.span_9').length>0&&!$(this).parent().hasClass('span_3')&&$(this).parent().attr('id')!='sidebar-inner'&&$(this).parent().attr('id')!='portfolio-extra'&&!$(this).find('.carousel-wrap[data-full-width="true"]').length>0&&!$(this).find('.nectar-carousel-flickity-fixed-content').length>0&&!$(this).find('.portfolio-items:not(".carousel")[data-col-num="elastic"]').length>0){if($('.single-product').length>0&&$(this).parents('#tab-description').length>0&&$(this).parents('.full-width-tabs').length==0){$(this).css({'visibility':'visible'})}else{if($(this).hasClass('portfolio-items')){$(this).css({'margin-left':-$justOutOfSight,'left':0,'width':$carouselWidth,'visibility':'visible'})}else{if($('#nectar_fullscreen_rows').length>0&&$(this).hasClass('wpb_row')){$(this).css({'margin-left':-$justOutOfSight,'width':$carouselWidth,'visibility':'visible'})}else{$(this).css({'left':0,'margin-left':-$justOutOfSight,'width':$carouselWidth,'visibility':'visible'})}}}}else if($(this).parent().attr('id')=='portfolio-extra'&&$('#full_width_portfolio').length!=0){$(this).css({'left':0,'margin-left':-$justOutOfSight,'width':$carouselWidth,'visibility':'visible'})}else{$(this).css({'margin-left':0,'width':'auto','left':'0','visibility':'visible'})}})}
function parallaxSrollSpeed(speedString){var speed;switch(speedString){case 'slow':speed=0.6;break;case 'medium':speed=0.4;break;case 'fast':speed=0.25;break}
return speed}
function parallaxScrollInit(){if(nectarDOMInfo.usingMobileBrowser&&$('body[data-remove-m-parallax="1"]').length>0){return}
parallaxRowsBGCals();$('.nectar-recent-posts-single_featured, .wpb_row.parallax_section, #page-header-bg[data-parallax="1"] .page-header-bg-image-wrap, .parallax_slider_outer .nectar-slider-wrap').each(function(){var $id=$(this).attr('id');if($(this).find('[data-parallax-speed="fixed"]').length==0){if($(this).find('.row-bg').length==0){$('#'+$id).parallaxScroll("50%",0.25)}else{$('#'+$id+".parallax_section").parallaxScroll("50%",parallaxSrollSpeed($(this).find('.row-bg').attr('data-parallax-speed')))}}
$(this).addClass('nectar-parallax-enabled')})}
function firstFWSection(){$('.full-width-section.wpb_row, .full-width-content.wpb_row').each(function(){if(!$(this).parent().hasClass('span_9')&&!$(this).parent().hasClass('span_3')&&$(this).parent().attr('id')!='sidebar-inner'){if($(this).parents('#portfolio-extra').length>0&&$('#full_width_portfolio').length==0){return!1}
if($(this).index()=='0'&&$pageHeaderBG.length==0&&$('.page-header-no-bg').length==0&&$('.project-title').length==0&&$('body.single').length==0&&$('.project-title').length==0){$(this).addClass('first-section');var $that=$(this);setTimeout(function(){$that.addClass('loaded')},50)}}})}
function parallaxRowsBGCals(){if(nectarDOMInfo.usingMobileBrowser&&$('body[data-remove-m-parallax="1"]').length>0){return}
$('.nectar-recent-posts-single_featured, .wpb_row.parallax_section, #page-header-bg[data-parallax="1"] .page-header-bg-image-wrap, .parallax_slider_outer .nectar-slider-wrap .slide-bg-wrap').each(function(){var $non_page_builder_slider;if($(this).find('.row-bg').length==0&&$(this).find('.page-header-bg-image').length>0){}else if($(this).find('.row-bg').length==0&&$(this).find('.image-bg').length>0){$non_page_builder_slider=!1;if($('.wpb_row').length==0&&$(this).parents('.nectar-slider-wrap[data-full-width="true"]').length>0&&$(this).parents('.parallax_slider_outer').length>0&&$(this).parents('.parallax_slider_outer').index()=='1'){$non_page_builder_slider=!0}
if($('#portfolio-extra').length>0&&$(this).parents('.wpb_row').length>0&&$(this).parents('.parallax_slider_outer').length>0&&$(this).parents('.wpb_row').index()=='0'){$non_page_builder_slider=!0}
if($(this).parents('.top-level').length>0&&!nectarDOMInfo.usingFrontEndEditor||$non_page_builder_slider&&!nectarDOMInfo.usingFrontEndEditor){$(this).find('.image-bg').css({'height':Math.ceil($(this).parent().offset().top*0.25)+$(this).outerHeight(!0)})}else{$(this).find('.image-bg').css({'height':Math.ceil($window.height()*0.25)+$(this).outerHeight(!0)})}}else if($(this).find('.row-bg').length==0&&$(this).find('.video-wrap').length>0){$non_page_builder_slider=!1;if($('.wpb_row').length==0&&$(this).parents('.nectar-slider-wrap[data-full-width="true"]').length>0&&$(this).parents('.parallax_slider_outer').length>0&&$(this).parents('.parallax_slider_outer').index()=='1'){$non_page_builder_slider=!0}
if($('#portfolio-extra').length>0&&$(this).parents('.wpb_row').length>0&&$(this).parents('.parallax_slider_outer').length>0&&$(this).parents('.wpb_row').index()=='0'){$non_page_builder_slider=!0}
if($(this).parents('.top-level').length>0&&!nectarDOMInfo.usingFrontEndEditor||$non_page_builder_slider&&!nectarDOMInfo.usingFrontEndEditor){$(this).find('.video-wrap').css({'height':Math.ceil($(this).parent().offset().top*0.25)+$(this).outerHeight(!0)})}else{$(this).find('.video-wrap').css({'height':Math.ceil($window.height()*0.25)+$(this).outerHeight(!0)})}
var vid=$(this).find('.video-wrap video'),vid_w_orig=1280,vid_h_orig=720;var container_w=vid.parent().width(),container_h=vid.parent().height(),scale_w=container_w/vid_w_orig,scale_h=container_h/vid_h_orig;var scale=scale_w>scale_h?scale_w:scale_h;vid.width(scale*vid_w_orig);vid.height(scale*vid_h_orig)}else{if($(this).is('.nectar-recent-posts-single_featured')&&$(this).parents('.top-level').length>0&&!nectarDOMInfo.usingFrontEndEditor){}else if(!$(this).hasClass('top-level')||nectarDOMInfo.usingFrontEndEditor){var $ifFast=($(this).find('.row-bg[data-parallax-speed="fast"]').length>0)?60:0;$(this).find('.row-bg').css({'height':Math.ceil($window.height()*parallaxSrollSpeed($(this).find('.row-bg').attr('data-parallax-speed')))+$(this).outerHeight(!0)+$ifFast})}}})}
function fwsClasses(){$('.wpb_wrapper > .nectar-slider-wrap[data-full-width="true"]').each(function(){if(!$(this).parent().hasClass('span_9')&&!$(this).parent().hasClass('span_3')&&$(this).parent().attr('id')!='sidebar-inner'){if($(this).parents('.wpb_row').index()=='0'){$(this).addClass('first-nectar-slider')}}});var $contentElementsNum=($('#portfolio-extra').length==0)?$('.main-content > .row > *').length:$('.main-content > .row #portfolio-extra > *').length;if($('#portfolio-extra').length==0){$contentElementsNum=($('.main-content > .row > .wpb_row').length>0)?$('.main-content > .row > .wpb_row').length:$('.main-content > .row > *').length}else{$contentElementsNum=$('.main-content > .row #portfolio-extra > *').length}
$('.full-width-section, .full-width-content:not(.page-submenu .full-width-content):not(.blog-fullwidth-wrap), .row > .nectar-slider-wrap[data-full-width="true"], .wpb_wrapper > .nectar-slider-wrap[data-full-width="true"], .portfolio-items[data-col-num="elastic"]').each(function(){if(!$(this).parent().hasClass('span_9')&&!$(this).parent().hasClass('span_3')&&$(this).parent().attr('id')!='sidebar-inner'){if($(this).parents('.wpb_row').length>0){if($(this).parents('#portfolio-extra').length>0&&$('#full_width_portfolio').length==0){return!1}
if($(this).parents('.wpb_row').index()=='0'&&$pageHeaderBG.length!=0){}else if($(this).parents('.wpb_row').index()=='0'&&$pageHeaderBG.length==0&&$('.page-header-no-bg').length==0&&$('.project-title').length==0&&$(this).parents('.wpb_row').index()=='0'&&$('.project-title').length==0&&$('body[data-bg-header="true"]').length==0){if($('.single').length==0){$('.container-wrap').css('padding-top','0px')}else{$(this).addClass('first-section')}}
if($(this).parents('.wpb_row').index()==$contentElementsNum-1&&$('#respond').length==0){if($(this).attr('id')!='portfolio-filters-inline'){$('.container-wrap').css('padding-bottom','0px');$('#call-to-action .triangle').remove()}}}else{if($(this).parents('#portfolio-extra').length>0&&$('#full_width_portfolio').length==0){return!1}
if($(this).find('.portfolio-filters-inline').length==0&&$(this).attr('id')!='post-area'){if($(this).index()=='0'&&$pageHeaderBG.length!=0){}else if($(this).index()=='0'&&$pageHeaderBG.length==0&&$(this).index()=='0'&&$('.page-header-no-bg').length==0&&$(this).index()=='0'&&!$(this).hasClass('blog_next_prev_buttons')&&!$(this).hasClass('nectar-shop-outer')&&$(this).parents('.pum-container').length==0){if($('body[data-header-resize="0"]').length==1&&$('.single').length==0||$('body.material').length>0&&$('.single').length==0){if(!$('body.blog .blog-fullwidth-wrap > .masonry:not(.meta-overlaid)').length>0){$('.container-wrap').css('padding-top','0px')}}else{$(this).addClass('first-section')}}
if($(this).index()==$contentElementsNum-1&&$('#respond').length==0&&$('body.woocommerce-checkout').length==0){$('.container-wrap').css('padding-bottom','0px');$('.bottom_controls').css('margin-top','0px');$('#call-to-action .triangle').remove()}}}}});$('#portfolio-extra > .nectar-slider-wrap[data-full-width="true"], .portfolio-wrap').each(function(){if($(this).index()==$contentElementsNum-1&&$('#commentform').length==0&&$('#pagination').length==0){if(parseInt($('.container-wrap').css('padding-bottom'))>0){$(this).css('margin-bottom','-40px')}
$('#call-to-action .triangle').remove()}});$('.portfolio-filters').each(function(){if($(this).index()=='0'&&$pageHeaderBG.length!=0||$(this).index()=='0'){$(this).addClass('first-section nder-page-header')}else if($(this).index()=='0'&&$pageHeaderBG.length==0||$(this).index()=='0'){$(this).css({'margin-top':'0px'}).addClass('first-section')}});$('.portfolio-filters-inline').each(function(){if($(this).parents('.wpb_row').length>0){}else{if($(this).index()=='0'&&$pageHeaderBG.length!=0||$(this).index()=='0'){$(this).addClass('first-section nder-page-header')}else if($(this).index()=='0'&&$pageHeaderBG.length==0||$(this).index()=='0'){$(this).css({'margin-top':'-30px','padding-top':'50px'}).addClass('first-section')}}})}
function fullWidthRowPaddingAdjustCalc(){if($('#boxed').length==0){$('.full-width-section[data-top-percent], .full-width-section[data-bottom-percent], .full-width-content[data-top-percent], .full-width-content[data-bottom-percent]').each(function(){var $windowHeight=$window.width(),$topPadding=($(this).attr('data-top-percent'))?$(this).attr('data-top-percent'):'skip',$bottomPadding=($(this).attr('data-bottom-percent'))?$(this).attr('data-bottom-percent'):'skip';if($topPadding!='skip'){$(this).css('padding-top',$windowHeight*(parseInt($topPadding)/100))}
if($bottomPadding!='skip'){$(this).css('padding-bottom',$windowHeight*(parseInt($bottomPadding)/100))}})}}
function fullWidthRowPaddingAdjust(){if(nectarDOMInfo.usingMobileBrowser){fullWidthRowPaddingAdjustCalc()}
$window.on('resize',fullWidthRowPaddingAdjustCalc)}
function fullWidthContentColumns(){var $frontEndEditorElDiv=($('body.vc_editor').length>0)?'.vc_element > ':'';$('.main-content > .row > '+$frontEndEditorElDiv+' .full-width-content, #portfolio-extra > '+$frontEndEditorElDiv+' .full-width-content, .woocommerce-tabs #tab-description > .full-width-content, .post-area.span_12 article .content-inner > .full-width-content').each(function(){if($(this).find('> .span_12 > '+$frontEndEditorElDiv+' .col').length>1){var tallestColumn=0;var $columnInnerHeight=0;var $column_inner_selector;$(this).find('> .span_12 > '+$frontEndEditorElDiv+'  .col').each(function(){$column_inner_selector=($(this).find('> .vc_column-inner > .wpb_wrapper').length>0)?'.vc_column-inner':'.column-inner-wrap > .column-inner';var $padding=($body.is('[data-flex-cols="true"]'))?parseInt($(this).find('> .vc_column-inner').css('padding-top')):parseInt($(this).css('padding-top'));var $frontEndEditorElPadding=($frontEndEditorElDiv.length>2&&$(this).find('> .vc_column-inner').length>0)?parseInt($(this).find('> .vc_column-inner').css('padding-top')):0;if($(this).find('> '+$column_inner_selector+' > .wpb_wrapper').height()+($padding*2)+$frontEndEditorElPadding>tallestColumn){tallestColumn=$(this).find('> '+$column_inner_selector+' > .wpb_wrapper').height()+($padding*2)+$frontEndEditorElPadding}});$(this).find('> .span_12 > '+$frontEndEditorElDiv+' .col').each(function(){$column_inner_selector=($(this).find('> .vc_column-inner > .wpb_wrapper').length>0)?'.vc_column-inner':'.column-inner-wrap > .column-inner';if($(this).find('> '+$column_inner_selector+' > .wpb_wrapper > *').length>0){if($frontEndEditorElDiv.length<2&&!$(this).parent().parent().hasClass('vc_row-o-equal-height')){$(this).css('height',tallestColumn);if($body.is('[data-flex-cols="true"]')){$(this).find('> .vc_column-inner').css('height',tallestColumn)}}else if($frontEndEditorElDiv.length>2&&!$(this).parent().parent().parent().hasClass('vc_row-o-equal-height')){$(this).css('height',tallestColumn);if($body.is('[data-flex-cols="true"]')){$(this).find('> .vc_column-inner').css('height',tallestColumn)}}}else{if($(this).is('[data-using-bg="true"]')){$(this).css('min-height',tallestColumn);if($body.is('[data-flex-cols="true"]')){$(this).find('> .vc_column-inner').css('min-height',tallestColumn)}
if($(this).is('[data-animation*="reveal"]')){$(this).find('.column-inner').css('min-height',tallestColumn)}}}});if(nectarDOMInfo.winW<1000){$(this).find('> .span_12 > '+$frontEndEditorElDiv+' .col .wpb_row .col').css('min-height','0px')}
if($(this).hasClass('vertically-align-columns')&&nectarDOMInfo.winW>1000&&!$(this).hasClass('vc_row-o-equal-height')){$(this).find('> .span_12 > '+$frontEndEditorElDiv+' .col').each(function(){$column_inner_selector=($(this).find('> .vc_column-inner > .wpb_wrapper').length>0)?'.vc_column-inner':'.column-inner-wrap > .column-inner';$columnInnerHeight=$(this).find('> '+$column_inner_selector+' > .wpb_wrapper').height();var $marginCalc=($(this).height()/2)-($columnInnerHeight/2);if($marginCalc<=0){$marginCalc=0}
$(this).find('> '+$column_inner_selector+' > .wpb_wrapper').css('margin-top',$marginCalc).css('margin-bottom',$marginCalc)})}}});if($('body[data-flex-cols="true"]').length==0){$('.main-content > .row > .wpb_row:not(.full-width-content).vc_row-o-equal-height').each(function(){if($(this).find('>.span_12 > '+$frontEndEditorElDiv+' .wpb_column[data-animation*="reveal"]').length>0){var tallestColumn=0;$(this).find('> .span_12 > '+$frontEndEditorElDiv+' .col').each(function(){var $padding=parseInt($(this).find('> .column-inner-wrap > .column-inner').css('padding-top'));if($(this).find('> .column-inner-wrap > .column-inner').height()+($padding*2)>tallestColumn){tallestColumn=$(this).find('> .column-inner-wrap > .column-inner').height()+($padding*2)}});$(this).find('> .span_12 > '+$frontEndEditorElDiv+' .col').each(function(){if($(this).find('> .column-inner-wrap > .column-inner .wpb_wrapper > *').length>0){$(this).find('> .column-inner-wrap').css('height',tallestColumn)}else{$(this).css('min-height',tallestColumn);if($(this).is('[data-animation*="reveal"]')){$(this).find('.column-inner').css('min-height',tallestColumn)}}})}});$('.wpb_row.vc_row-o-equal-height>.span_12> '+$frontEndEditorElDiv+'.wpb_column[class*="padding-"][data-padding-pos="all"]').each(function(){if($(this).parents('.tabbed').length==0){$(this).css({'padding-top':$(this).css('padding-left'),'padding-bottom':$(this).css('padding-left')})}})}}
function mouseParallaxInit(){$('.wpb_row:has(.nectar-parallax-scene)').each(function(i){var $strength=parseInt($(this).find('.nectar-parallax-scene').attr('data-scene-strength'));$mouseParallaxScenes[i]=$(this).find('.nectar-parallax-scene').parallax({scalarX:$strength,scalarY:$strength});var images=$(this).find('.nectar-parallax-scene li');$.each(images,function(){if($(this).find('div').length>0){var el=$(this).find('div'),image=el.css('background-image').replace(/"/g,'').replace(/url\(|\)$/ig,'');if(image&&image!==''&&image!=='none'){images=images.add($('<img>').attr('src',image))}}})})}
function ulCheckmarks(){$('ul.checks li').each(function(){if($(this).find('i.icon-ok-sign').length==0){$(this).prepend('<i class="icon-ok-sign"></i>')}})}
function ctaLinkBG(){$body.on('click','.nectar-cta[data-using-bg="true"]:not([data-style="material"]) .link_wrap',function(){$(this).find('a.link_text')[0].click()})}
function nectarKeyframeAssist(){$('.nectar-cta[data-style="arrow-animation"]').addClass('loaded')}
function rowBGAnimations(){var $rowBGAnimationsOffsetPos=($('#nectar_fullscreen_rows').length>0)?'200%':'93%';var $rowBGAnimationsRevealOffsetPos=($('#nectar_fullscreen_rows').length>0)?'200%':'75%';var $rowBGOffset;$($fullscreenSelector+'.row-bg-wrap[data-bg-animation]:not([data-bg-animation="none"]):not([data-bg-animation*="displace-filter"]) .row-bg').each(function(){if(!$(this).parents('.row-bg-wrap').is('[data-bg-animation="zoom-out-reveal"]')){$rowBGOffset=$rowBGAnimationsOffsetPos}else{$rowBGOffset=$rowBGAnimationsRevealOffsetPos}
if(!$(this).hasClass('using-image')&&!$(this).parents('.row-bg-wrap').is('[data-bg-animation="zoom-out-reveal"]')){return}
var $that=$(this);var waypoint=new Waypoint({element:$that.parents('.row-bg-wrap'),handler:function(){if($that.parents('.wpb_tab').length>0&&$that.parents('.wpb_tab').css('visibility')=='hidden'||$that.hasClass('animated-in')){waypoint.destroy();return}
$that.parents('.inner-wrap').addClass('animated-in');if($that.parents('.row-bg-wrap').is('[data-bg-animation="zoom-out-reveal"]')){$that.parents('.row-bg-wrap').addClass('animated-in')}
waypoint.destroy()},offset:$rowBGOffset})})}
function columnBGAnimations(){var $colBGAnimationsOffsetPos=($('#nectar_fullscreen_rows').length>0)?'200%':'93%';var $colBGAnimationsRevealOffsetPos=($('#nectar_fullscreen_rows').length>0)?'200%':'80%';var $colBGOffset;$($fullscreenSelector+'.column-image-bg-wrap[data-bg-animation]:not([data-bg-animation="none"]):not([data-bg-animation*="displace-filter"]) .column-image-bg').each(function(){if(!$(this).parents('.column-image-bg-wrap').is('[data-bg-animation="zoom-out-reveal"]')){$colBGOffset=$colBGAnimationsOffsetPos}else{$colBGOffset=$colBGAnimationsRevealOffsetPos}
var $that=$(this);var waypoint=new Waypoint({element:$that.parents('.column-image-bg-wrap'),handler:function(){if($that.parents('.wpb_tab').length>0&&$that.parents('.wpb_tab').css('visibility')=='hidden'||$that.hasClass('animated-in')){waypoint.destroy();return}
$that.parents('.inner-wrap').addClass('animated-in');if($that.parents('.column-image-bg-wrap').is('[data-bg-animation="zoom-out-reveal"]')){$that.parents('.column-image-bg-wrap').addClass('animated-in');$that.parents('.column-image-bg-wrap').siblings('.column-bg-overlay-wrap').addClass('animated-in')}
waypoint.destroy()},offset:$colBGOffset})});$($fullscreenSelector+'.column-bg-overlay-wrap[data-bg-animation="zoom-out-reveal"]').each(function(){$colBGOffset=$colBGAnimationsRevealOffsetPos;var $that=$(this);if($that.parent().find('.column-image-bg-wrap').length==0){var waypoint=new Waypoint({element:$that,handler:function(){if($that.hasClass('animated-in')){waypoint.destroy();return}
$that.addClass('animated-in');waypoint.destroy()},offset:$colBGOffset})}})}
function colAndImgAnimations(){var $colAndImgOffsetPos=($('#nectar_fullscreen_rows').length>0)?'200%':'88%';var $cascadingOffsetPos=($('#nectar_fullscreen_rows').length>0)?'200%':'70%';var $colAndImgRevealOffsetPos=($('#nectar_fullscreen_rows').length>0)?'200%':'70%';$($fullscreenSelector+'img.img-with-animation').each(function(){var $that=$(this);var waypoint=new Waypoint({element:$that,handler:function(){if($that.parents('.wpb_tab').length>0&&$that.parents('.wpb_tab').css('visibility')=='hidden'||$that.hasClass('animated-in')){waypoint.destroy();return}
if(!nectarDOMInfo.usingMobileBrowser||$('body[data-responsive="0"]').length>0){var $delay=$that.attr('data-delay');var $elToAnimate=($that.parents('.hover-wrap').length>0)?$that.parents('.hover-wrap'):$that;if($that.attr('data-animation')=='fade-in-from-left'||$that.attr('data-animation')=='fade-in-from-right'){$elToAnimate.delay($delay).transition({'opacity':1,'x':'0px'},$animationDuration,$animationEasing)}else if($that.attr('data-animation')=='fade-in-from-bottom'){$elToAnimate.delay($delay).transition({'opacity':1,'y':'0px'},$animationDuration,$animationEasing)}else if($that.attr('data-animation')=='fade-in'){$elToAnimate.delay($delay).transition({'opacity':1},$animationDuration,$animationEasing)}else if($that.attr('data-animation')=='grow-in'){setTimeout(function(){$elToAnimate.transition({scale:1,'opacity':1},$animationDuration,$animationEasing)},$delay)}else if($that.attr('data-animation')=='flip-in'){setTimeout(function(){$elToAnimate.transition({rotateY:0,'opacity':1},$animationDuration,$animationEasing)},$delay)}else if($that.attr('data-animation')=='flip-in-vertical'){setTimeout(function(){$elToAnimate.transition({rotateX:0,'opacity':1},$animationDuration,$animationEasing)},$delay)}
$that.addClass('animated-in')}
waypoint.destroy()},offset:$colAndImgOffsetPos})});$($fullscreenSelector+'.nectar_cascading_images').each(function(){var $that=$(this);var $animationDelay=($(this).is('[data-animation-timing]'))?$(this).attr('data-animation-timing'):175;$animationDelay=parseInt($animationDelay);var waypoint=new Waypoint({element:$that,handler:function(){if($that.parents('.wpb_tab').length>0&&$that.parents('.wpb_tab').css('visibility')=='hidden'||$that.hasClass('animated-in')){waypoint.destroy();return}
if(!nectarDOMInfo.usingMobileBrowser||$('body[data-responsive="0"]').length>0){$that.find('.cascading-image').each(function(i){var $that2=$(this);if($that2.attr('data-animation')=='flip-in'||$that2.attr('data-animation')=='flip-in-vertical'){setTimeout(function(){$that2.find('.inner-wrap').css({'opacity':1,'transform':'rotate(0deg) translateZ(0px)'})},i*$animationDelay)}else if($that2.attr('data-animation')=='grow-in-reveal'){setTimeout(function(){$that2.find('.inner-wrap').css({'opacity':1,'transform':'translateX(0px) translateY(0px) scale(1,1) translateZ(0px)'});$that2.find('.inner-wrap img').css({'transform':'translateX(0px) translateY(0px) scale(1,1) translateZ(0px)'})},i*$animationDelay)}else{setTimeout(function(){$that2.find('.inner-wrap').css({'opacity':1,'transform':'translateX(0px) translateY(0px) scale(1,1) translateZ(0px)'})},i*$animationDelay)}});$that.addClass('animated-in')}
waypoint.destroy()},offset:$cascadingOffsetPos})});$($fullscreenSelector+'.col.has-animation:not([data-animation*="reveal"]), '+$fullscreenSelector+'.wpb_column.has-animation:not([data-animation*="reveal"]), '+$fullscreenSelector+'.nectar-fancy-box.has-animation').each(function(i){var $that=$(this);if($that.is('[data-animation="flip-in-vertical"]')||$that.is('[data-animation="slight-twist"]')){$that.parents('.col.span_12').addClass('flip-in-vertical-wrap')}
var waypoint=new Waypoint({element:$that,handler:function(){if($that.parents('.wpb_tab').length>0&&$that.parents('.wpb_tab').css('visibility')=='hidden'||$that.hasClass('animated-in')){waypoint.destroy();return}
if(!nectarDOMInfo.usingMobileBrowser||$('body[data-responsive="0"]').length>0){var $delay=$that.attr('data-delay');if($that.attr('data-animation')=='fade-in-from-left'||$that.attr('data-animation')=='fade-in-from-right'){$standAnimatedColTimeout[i]=setTimeout(function(){$that.transition({'opacity':1,'x':'0px'},$animationDuration,$animationEasing)},$delay)}else if($that.attr('data-animation')=='fade-in-from-bottom'){$standAnimatedColTimeout[i]=setTimeout(function(){$that.transition({'opacity':1,'y':'0px'},$animationDuration,$animationEasing)},$delay)}else if($that.attr('data-animation')=='fade-in'){$standAnimatedColTimeout[i]=setTimeout(function(){$that.transition({'opacity':1},$animationDuration,$animationEasing)},$delay)}else if($that.attr('data-animation')=='grow-in'||$that.attr('data-animation')=='zoom-out'){$standAnimatedColTimeout[i]=setTimeout(function(){$that.transition({scale:1,'opacity':1},$animationDuration,$animationEasing)},$delay)}else if($that.attr('data-animation')=='flip-in'){$standAnimatedColTimeout[i]=setTimeout(function(){$that.transition({rotateY:0,'opacity':1},$animationDuration,$animationEasing)},$delay)}else if($that.attr('data-animation')=='flip-in-vertical'){$standAnimatedColTimeout[i]=setTimeout(function(){$that.transition({rotateX:0,y:0,'opacity':1},$animationDuration,$animationEasing)},$delay)}else if($that.attr('data-animation')=='slight-twist'){$standAnimatedColTimeout[i]=setTimeout(function(){anime({targets:$that[0],rotateY:[20,0],rotateZ:[-4,0],opacity:1,easing:$animationEasing,duration:$animationDuration})},$delay)}
if($that.hasClass('boxed')){$that.addClass('no-pointer-events');setTimeout(function(){$that.removeClass('no-pointer-events')},parseInt($animationDuration)+parseInt($delay)+30)}
$that.addClass('animated-in')}
waypoint.destroy()},offset:$colAndImgOffsetPos})});$($fullscreenSelector+'.wpb_column.has-animation[data-animation*="reveal"]').each(function(){var $that=$(this),waypoint=new Waypoint({element:$that,handler:function(){if($that.parents('.wpb_tab').length>0&&$that.parents('.wpb_tab').css('visibility')=='hidden'||$that.hasClass('animated-in')){waypoint.destroy();return}
var $delay=$that.attr('data-delay');if(!nectarDOMInfo.usingMobileBrowser||$('body[data-responsive="0"]').length>0){var $columnInnerSelector=($that.find('> .vc_column-inner').length>0)?!0:!1;if($that.attr('data-animation')=='reveal-from-bottom'||$that.attr('data-animation')=='reveal-from-top'){setTimeout(function(){if($that.hasClass('animated-in')){if($columnInnerSelector==!0){$that.find('> .vc_column-inner').transition({'y':0},$animationDuration,$animationEasing)}else{$that.find('.column-inner-wrap, .column-inner').transition({'y':0},$animationDuration,$animationEasing,function(){$that.find('.column-inner-wrap, .column-inner').addClass('no-transform')})}}},$delay)}else if($that.attr('data-animation')=='reveal-from-right'||$that.attr('data-animation')=='reveal-from-left'){setTimeout(function(){if($that.hasClass('animated-in')){if($columnInnerSelector==!0){$that.find('> .vc_column-inner').transition({'x':0},$animationDuration,$animationEasing)}else{$that.find('.column-inner-wrap, .column-inner').transition({'x':0},$animationDuration,$animationEasing,function(){$that.find('.column-inner-wrap, .column-inner').addClass('no-transform')})}}},$delay)}
$that.addClass('animated-in')}
waypoint.destroy()},offset:$colAndImgRevealOffsetPos})})}
function cascadingImageBGSizing(){$('.nectar_cascading_images').each(function(){if($(this).parents('.vc_row-o-equal-height').length>0&&$(this).parents('.wpb_column').length>0){$(this).css('max-width',$(this).parents('.wpb_column').width())}
$(this).find('.bg-color').each(function(){var $bgColorHeight=0;var $bgColorWidth=0;if($(this).parent().find('.img-wrap').length==0){var $firstSibling=$(this).parents('.cascading-image').siblings('.cascading-image[data-has-img="true"]').first();$firstSibling.css({'position':'relative','visiblity':'hidden'});$bgColorHeight=$firstSibling.find('.img-wrap').height();$bgColorWidth=$firstSibling.find('.img-wrap').width();if($firstSibling.index()==0){$firstSibling.css({'visiblity':'visible'})}else{$firstSibling.css({'position':'absolute','visiblity':'visible'})}}else{$bgColorHeight=$(this).parent().find('.img-wrap').height();$bgColorWidth=$(this).parent().find('.img-wrap').width()}
$(this).css({'height':$bgColorHeight,'width':$bgColorWidth})})})}
function cascadingImageInit(){if($('.nectar_cascading_images').length>0){var cascadingParallax=[];$('.nectar_cascading_images').each(function(i){imagesLoaded($(this),function(instance){cascadingImageBGSizing();if($(instance.elements[0]).is('[data-parallax="yes"]')&&!nectarDOMInfo.usingMobileBrowser&&$('#nectar_fullscreen_rows').length==0){cascadingParallax[i]=new CascadingParallax($(instance.elements[0]),$(instance.elements[0]).attr('data-parallax-intensity'))}})});$window.on('resize',cascadingImageBGSizing)}}
function CascadingParallax(el,intensity){this.$element=el;this.inView=!1;this.topLevel=!1;this.lastY=0;switch(intensity){case 'subtle':this.intensity=0.09;break;case 'medium':this.intensity=0.15;break;case 'high':this.intensity=0.25;break}
this.calculatePos();this.trackView();this.animate();$window.on('resize',this.calculatePos.bind(this))}
CascadingParallax.prototype.calculatePos=function(){this.offsetTop=this.$element.offset().top;this.height=this.$element.outerHeight();this.vertCenter=nectarDOMInfo.winH/2-this.height/2};CascadingParallax.prototype.trackView=function(){var that=this;if(this.$element.parents('.top-level').length>0){this.topLevel=!0}
if('IntersectionObserver' in window){var options={rootMargin:'250px',}
var observer=new IntersectionObserver(function(entries){entries.forEach(function(entry){var isIntersecting=entry.isIntersecting;if(isIntersecting){that.inView=!0}else{that.inView=!1}})},options);observer.observe(this.$element[0])}};CascadingParallax.prototype.animate=function(){if(this.inView){var that=this;this.lastY=linearInterpolate(this.lastY,nectarDOMInfo.scrollTop,0.19);this.$element.find('.bg-layer').each(function(i){var $scale=$(this).attr('data-scale');if(that.topLevel===!0&&nectarDOMInfo.winW>1000){$(this).css('transform','translateY('+ -(that.lastY*that.intensity*i)+'px) translateZ(0) scale('+$scale+')')}else{$(this).css('transform','translateY('+ -((that.lastY-that.offsetTop+that.vertCenter)*that.intensity*i)+'px) translateZ(0) scale('+$scale+')')}})}
window.requestAnimationFrame(this.animate.bind(this))};function splitLineHeadings(){var $splitLineOffsetPos=($('#nectar_fullscreen_rows').length>0)?'200%':'bottom-in-view';$($fullscreenSelector+'.nectar-split-heading').each(function(){var $that=$(this);var $delay=($that.is('[data-animation-delay]'))?parseInt($that.attr('data-animation-delay')):0;var waypoint=new Waypoint({element:$that,handler:function(){if($that.parents('.wpb_tab').length>0&&$that.parents('.wpb_tab').css('visibility')=='hidden'||$that.hasClass('animated-in')){waypoint.destroy();return}
if(!nectarDOMInfo.usingMobileBrowser||$('body[data-responsive="0"]').length>0){var $animationDurationCap;setTimeout(function(){if($that.is('[data-animation-type="line-reveal-by-space"]')){$animationDurationCap=(parseInt($animationDuration)<900)?$animationDuration:'900';$that.find('> * > span').each(function(i){$(this).find('> .inner').transition({'y':'0px'},$animationDuration,$animationEasing)})}else if($that.is('[data-animation-type="letter-fade-reveal"]')){$animationDurationCap=(parseInt($animationDuration)<1000)?$animationDuration:'1000';$that.find('> * > span span').each(function(i){$(this).delay(i*8).transition({'y':'0px','opacity':'1'},$animationDurationCap,$animationEasing)})}else{$that.find('.heading-line').each(function(i){$(this).find('> div').delay(i*70).transition({'y':'0px'},$animationDuration,$animationEasing)})}
$that.addClass('animated-in')},$delay)}
waypoint.destroy()},offset:$splitLineOffsetPos})})}
function progressBars(){var $progressBarsOffsetPos=($('#nectar_fullscreen_rows').length>0)?'200%':'bottom-in-view';var $progressSelector=($('#nectar_fullscreen_rows[data-mobile-disable="on"]').length>0&&nectarDOMInfo.usingMobileBrowser)?'.nectar-progress-bar':$fullscreenSelector+'.nectar-progress-bar';$($progressSelector).parent().each(function(){var $that=$(this),waypoint=new Waypoint({element:$that,handler:function(){if($that.parents('.wpb_tab').length>0&&$that.parents('.wpb_tab').css('visibility')=='hidden'||$that.hasClass('completed')){waypoint.destroy();return}
if($progressBarsOffsetPos=='100%'){$that.find('.nectar-progress-bar .bar-wrap').css('opacity','1')}
$that.find('.nectar-progress-bar').each(function(i){var percent=$(this).find('span').attr('data-width'),$endNum=parseInt($(this).find('span strong i').text()),$that=$(this);$that.find('span').delay(i*90).transition({'width':percent+'%'},1050,'easeInOutQuint',function(){});setTimeout(function(){var countOptions={useEasing:!1};var $countEle=$that.find('span strong i')[0];var numAnim=new CountUp($countEle,0,$endNum,0,1,countOptions);numAnim.start();$that.find('span strong').transition({'opacity':1},550,'easeInCirc')},(i*90));if(percent=='100'){$that.find('span strong').addClass('full')}});$that.addClass('completed');waypoint.destroy()},offset:$progressBarsOffsetPos})})}
function animatedColBorders(){var $progressBarsOffsetPos=($('#nectar_fullscreen_rows').length>0)?'200%':'75%';$($fullscreenSelector+'.wpb_column[data-border-animation="true"]').each(function(){var $that=$(this),waypoint=new Waypoint({element:$that,handler:function(){if($that.parents('.wpb_tab').length>0&&$that.parents('.wpb_tab').css('visibility')=='hidden'||$that.hasClass('completed')){waypoint.destroy();return}
var $borderDelay=($that.attr('data-border-animation-delay').length>0)?parseInt($that.attr('data-border-animation-delay')):0;setTimeout(function(){$that.find('.border-wrap').addClass('animation');$that.find('.border-wrap').addClass('completed')},$borderDelay);waypoint.destroy()},offset:$progressBarsOffsetPos})})}
function foodMenuItems(){var $foodItemOffsetPos=($('#nectar_fullscreen_rows').length>0)?'200%':'80%';$($fullscreenSelector+'.nectar_food_menu_item').parent().each(function(){var $that=$(this),waypoint=new Waypoint({element:$that,handler:function(){if($that.parents('.wpb_tab').length>0&&$that.parents('.wpb_tab').css('visibility')=='hidden'||$that.hasClass('completed')){waypoint.destroy();return}
$that.find('.nectar_food_menu_item').each(function(i){var $that=$(this);setTimeout(function(){$that.addClass('animated-in')},i*150)});waypoint.destroy()},offset:$foodItemOffsetPos})})}
function dividers(){var $dividerOffsetPos=($('#nectar_fullscreen_rows').length>0)?'200%':'bottom-in-view';$($fullscreenSelector+'.divider-small-border[data-animate="yes"], '+$fullscreenSelector+'.divider-border[data-animate="yes"]').each(function(){var $lineDur=($(this).hasClass('divider-small-border'))?1300:1500,$that=$(this),waypoint=new Waypoint({element:$that,handler:function(){if($that.parents('.wpb_tab').length>0&&$that.parents('.wpb_tab').css('visibility')=='hidden'||$that.hasClass('completed')){waypoint.destroy();return}
$that.each(function(){$(this).css({'transform':'scale(0,1)','visibility':'visible'});var $that=$(this);$that.delay($that.attr('data-animation-delay')).transition({'transform':'scale(1, 1)'},$lineDur,'cubic-bezier(.18,1,.22,1)')});$that.addClass('completed');waypoint.destroy()},offset:$dividerOffsetPos})})}
function hotSpotHoverBind(){$('.nectar_image_with_hotspots[data-hotspot-icon="numerical"]').each(function(){$(this).find('.nectar_hotspot_wrap').each(function(i){var $that=$(this);setTimeout(function(){$that.find('.nectar_hotspot').addClass('pulse')},i*300)})});var hotSpotHoverTimeout=[];$('.nectar_image_with_hotspots:not([data-tooltip-func="click"]) .nectar_hotspot').each(function(i){hotSpotHoverTimeout[i]='';$(this).on('mouseover',function(){clearTimeout(hotSpotHoverTimeout[i]);$(this).parent().css({'z-index':'400','height':'auto','width':'auto'})});$(this).on('mouseleave',function(){var $that=$(this);$that.parent().css({'z-index':'auto'});hotSpotHoverTimeout[i]=setTimeout(function(){$that.parent().css({'height':'30px','width':'30px'})},300)})})}
function responsiveTooltips(){$('.nectar_image_with_hotspots').each(function(){$(this).find('.nectar_hotspot_wrap').each(function(){if(nectarDOMInfo.winW>690){if($(this).parents('.nectar_image_with_hotspots[data-tooltip-func="hover"]').length>0){$(this).find('.nectar_hotspot').removeClass('click');$(this).find('.nttip').removeClass('open')}
$(this).find('.nttip .inner a.tipclose').remove();$('.nttip').css('height','auto');$(this).css({'width':'auto','height':'auto'});$(this).find('.nttip').removeClass('force-right').removeClass('force-left').removeClass('force-top').css('width','auto');var $tipOffset=$(this).find('.nttip').offset();if($tipOffset.left>$(this).parents('.nectar_image_with_hotspots').width()-200){$(this).find('.nttip').css('width','250px')}else{$(this).find('.nttip').css('width','auto')}
if($tipOffset.left<0){$(this).find('.nttip').addClass('force-right')}else if($tipOffset.left+$(this).find('.nttip').outerWidth(!0)>nectarDOMInfo.winW){$(this).find('.nttip').addClass('force-left').css('width','250px')}else if($tipOffset.top+$(this).find('.nttip').height()+35>$window.height()&&$('#nectar_fullscreen_rows').length>0){$(this).find('.nttip').addClass('force-top')}
if($(this).find('> .open').length==0){$(this).css({'width':'30px','height':'30px'})}}else{$(this).find('.nttip').removeClass('force-left').removeClass('force-right').removeClass('force-top');$(this).find('.nectar_hotspot').addClass('click');if($(this).find('.nttip a.tipclose').length==0){$(this).find('.nttip .inner').append('<a href="#" class="tipclose"><span></span></a>')}
$('.nttip').css('height',$window.height())}})})}
function imageWithHotspotEvents(){if($('.nectar_image_with_hotspots').length==0){return}
hotSpotHoverBind();$body.on('click','.nectar_hotspot.click',function(){$(this).parents('.nectar_image_with_hotspots').find('.nttip').removeClass('open');$(this).parent().find('.nttip').addClass('open');$(this).parents('.nectar_image_with_hotspots').find('.nectar_hotspot').removeClass('open');$(this).parent().find('.nectar_hotspot').addClass('open');if(nectarDOMInfo.winW>690){$(this).parent().css({'z-index':'120','height':'auto','width':'auto'});var $that=$(this);setTimeout(function(){$that.parents('.nectar_image_with_hotspots').find('.nectar_hotspot_wrap').each(function(){if($(this).find('> .open').length==0){$(this).css({'height':'30px','width':'30px','z-index':'auto'})}})},300)}
if(nectarDOMInfo.winW<=690){$(this).parents('.wpb_row, [class*="vc_col-"]').css('z-index','200')}
return!1});$body.on('click','.nectar_hotspot.open',function(){$(this).parent().find('.nttip').removeClass('open');$(this).parent().find('.nectar_hotspot').removeClass('open');$(this).parents('.wpb_row').css('z-index','auto');return!1});$body.on('click','.nttip.open',function(){if(nectarDOMInfo.winW<690){$(this).parents('.nectar_image_with_hotspots').find('.nttip').removeClass('open');$(this).parents('.nectar_image_with_hotspots').find('.nectar_hotspot').removeClass('open');$(this).parents('.wpb_row').css('z-index','auto');return!1}});responsiveTooltips();$window.on('resize',responsiveTooltips)}
function imageWithHotspots(){var $imageWithHotspotsOffsetPos=($('#nectar_fullscreen_rows').length>0)?'200%':'50%';$($fullscreenSelector+'.nectar_image_with_hotspots[data-animation="true"]').each(function(){var $that=$(this);var waypoint=new Waypoint({element:$that,handler:function(){if($that.parents('.wpb_tab').length>0&&$that.parents('.wpb_tab').css('visibility')=='hidden'||$that.hasClass('completed')){waypoint.destroy();return}
$that.addClass('completed');$that.find('.nectar_hotspot_wrap').each(function(i){var $that2=$(this);var $extrai=($that2.parents('.col.has-animation').length>0)?1:0;setTimeout(function(){$that2.addClass('animated-in')},175*(i+$extrai))});waypoint.destroy()},offset:$imageWithHotspotsOffsetPos})})}
function nectarLazyImageLoading(){var lazyItems=[].slice.call(document.querySelectorAll('[data-nectar-img-src]'));if('IntersectionObserver' in window){var options={rootMargin:'75px',}
nectarLazyImageSizing();$window.on('resize',nectarLazyImageSizing);var lazyItemObserver=new IntersectionObserver(function(entries){entries.forEach(function(entry){if(entry.isIntersecting){var lazyItem=entry.target;var imgSrc=lazyItem.getAttribute('data-nectar-img-src');if(lazyItem.classList.contains('nectar-lazy')){lazyItem.addEventListener('load',function(){lazyItem.style.height="";lazyItem.style.width="";lazyItem.classList.add('loaded');lazyItem.removeAttribute('data-nectar-img-src');lazyItemObserver.unobserve(lazyItem)});lazyItem.src=imgSrc;var srcset=lazyItem.getAttribute('data-nectar-img-srcset');if(srcset){lazyItem.setAttribute('srcset',srcset);lazyItem.removeAttribute('data-nectar-img-srcset')}}else{lazyItem.style.backgroundImage="url('"+imgSrc+"')";lazyItem.classList.add('loaded');lazyItem.removeAttribute('data-nectar-img-src');lazyItemObserver.unobserve(lazyItem)}}})},options);lazyItems.forEach(function(lazyItem){lazyItemObserver.observe(lazyItem)})}else{lazyItems.forEach(function(lazyItem){if(lazyItem.classList.contains('nectar-lazy')){lazyItem.style.height="";lazyItem.style.width="";lazyItem.src=lazyItem.getAttribute('data-nectar-img-src');var srcset=lazyItem.getAttribute('data-nectar-img-srcset');if(srcset){lazyItem.setAttribute('srcset',srcset);lazyItem.removeAttribute('data-nectar-img-srcset')}
lazyItem.classList.add('loaded');lazyItem.removeAttribute('data-nectar-img-src')}else{lazyItem.style.backgroundImage="url('"+lazyItem.getAttribute('data-nectar-img-src')+"')";lazyItem.classList.add('loaded');lazyItem.removeAttribute('data-nectar-img-src')}})}}
function nectarLazyImageSizing(){$('img.nectar-lazy:not(.loaded)').each(function(){$(this).css({'height':'','width':''});var heightAttr=parseInt($(this).attr('height'));var widthAttr=parseInt($(this).attr('width'));var width=($(this).parents('.nectar_cascading_images').length>0)?$(this).parents('.bg-layer').width():$(this).width();var dimensions=calculateAspectRatio(widthAttr,heightAttr,width,2000);$(this).css({'height':dimensions.height+'px','width':dimensions.width+'px'})})}
function nectarPostGridMouse(){viewIndicatorArr=[];if(!nectarDOMInfo.usingMobileBrowser){$('.nectar-post-grid[data-indicator="yes"]').each(function(i){viewIndicatorArr[i]=new NectarIconMouseFollow($(this),'view-indicator')})}}
function nectarPostGridInit(){$nectarPostGridArr=[];nectarPostGridMouse();$('.nectar-post-grid-wrap').each(function(i){$nectarPostGridArr[i]=new NectarPostGrid($(this))})}
function NectarPostGrid(el){this.el=el;this.currentPage=0;this.activeFilter=1;this.activeCatTotal=0;this.settingsData=JSON.parse(this.el.attr('data-el-settings'));this.queryData=JSON.parse(this.el.attr('data-query'));this.sortable=this.el.find('.nectar-post-grid-filters').attr('data-sortable');this.initialMarkup();this.clickEvents()}
NectarPostGrid.prototype.initialMarkup=function(){if(this.el.find('.nectar-post-grid-filters a.active').length==0){this.el.find('.nectar-post-grid-filters a:first-child').addClass('active')}
if(this.settingsData.pagination==='load-more'&&this.el.find('.load-more-wrap').length==0){this.activeCatTotal=parseInt(this.el.find('.nectar-post-grid-filters a:nth-child('+this.activeFilter+')').attr('data-total-count'));if(this.el.find('.nectar-post-grid-item').length>=this.activeCatTotal){this.el.append('<div class="load-more-wrap inactive"><a href="#" class="load-more">'+this.el.attr('data-load-more-text')+'</a></div>')}else{this.el.append('<div class="load-more-wrap"><a href="#" class="load-more">'+this.el.attr('data-load-more-text')+'</a></div>')}}};NectarPostGrid.prototype.clickEvents=function(){this.el.find('.nectar-post-grid-filters h4').on('click',function(){$(this).parent().find('div').toggleClass('visible');$(this).toggleClass('visible')});var settingsData=this.settingsData;var queryData=this.queryData;var instance=this;this.el.find('.nectar-post-grid-filters a, .load-more-wrap:not(.inactive) .load-more').on('click',function(){var $that=$(this);if($that.parents('.nectar-post-grid-wrap.loading').length>0||$(this).hasClass('active')){return!1}
if($(this).parents('.nectar-post-grid-filters').length>0){$that.parent().find('a').removeClass('active');$that.addClass('active');instance.currentPage=0;instance.activeFilter=$that.index()+1}else{instance.currentPage++}
var $gridEl=$that.parents('.nectar-post-grid-wrap').find('.nectar-post-grid')
var $pagination=settingsData.pagination;var $action=($that.hasClass('load-more')&&$pagination==='load-more')?'load-more':'filter';var $category='';if(instance.sortable==='yes'){$category=$that.parents('.nectar-post-grid-wrap').find('.nectar-post-grid-filters a.active').attr('data-filter')}else{var skipAll=($that.parents('.nectar-post-grid-wrap').find('.nectar-post-grid-filters a').length>1)?':not(.all-filter)':'';$that.parents('.nectar-post-grid-wrap').find('.nectar-post-grid-filters a'+skipAll).each(function(){$category+=$(this).attr('data-filter')+', '});$category=$category.substring(0,$category.length-2)}
var $dataToPass={action:'nectar_get_post_grid_segment',post_type:queryData.post_type,category:$category,posts_per_page:queryData.posts_per_page,current_page:instance.currentPage,offset:queryData.offset,order:queryData.order,orderby:queryData.orderby,load_action:$action,settings:{pagination:$pagination,post_type:settingsData.post_type,image_size:settingsData.image_size,display_categories:settingsData.display_categories,display_excerpt:settingsData.display_excerpt,display_date:settingsData.display_date,color_overlay:settingsData.color_overlay,color_overlay_opacity:settingsData.color_overlay_opacity,color_overlay_hover_opacity:settingsData.color_overlay_hover_opacity}};$that.parents('.nectar-post-grid-wrap').addClass('loading');$.post(window.nectarLove.ajaxurl,$dataToPass,function(data){$that.parents('.nectar-post-grid-wrap').removeClass('loading');if($action==='load-more'){$gridEl.append(data)}else{$gridEl.html(data)}
if($pagination==='load-more'){instance.activeCatTotal=parseInt(instance.el.find('.nectar-post-grid-filters a:nth-child('+instance.activeFilter+')').attr('data-total-count'));if($gridEl.find('.nectar-post-grid-item').length>=instance.activeCatTotal){instance.el.find('.load-more-wrap').addClass('inactive')}else{instance.el.find('.load-more-wrap').removeClass('inactive')}}
$window.trigger('resize');nectarPostGridMouse()});return!1})};function animatedTitles(){var $animatedTitlesOffsetPos=($('#nectar_fullscreen_rows').length>0)?'200%':'bottom-in-view';$($fullscreenSelector+'.nectar-animated-title').each(function(){var $that=$(this),waypoint=new Waypoint({element:$that,handler:function(){if($that.parents('.wpb_tab').length>0&&$that.parents('.wpb_tab').css('visibility')=='hidden'||$that.hasClass('completed')){waypoint.destroy();return}
$that.addClass('completed');waypoint.destroy()},offset:$animatedTitlesOffsetPos})})}
function highlightedText(){var $highlightedTextOffsetPos=($('#nectar_fullscreen_rows').length>0)?'200%':'bottom-in-view';var highlightedColorCss='';$($fullscreenSelector+'.nectar-highlighted-text').each(function(i){var $animationDelay=0;if($(this).is('[data-animation-delay]')&&$(this).attr('data-animation-delay').length>0&&$(this).attr('data-animation')!='false'){$animationDelay=$(this).attr('data-animation-delay')}
if($(this).is('[data-using-custom-color="true"]')){var $custom_highlight_color=$(this).attr('data-color');var $custom_highlight_color_2=($(this).is('[data-color-gradient]')&&$(this).attr('data-color-gradient').length>0)?$(this).attr('data-color-gradient'):!1;$(this).addClass('instance-'+i);if($custom_highlight_color_2!==!1&&$custom_highlight_color_2.length>0){highlightedColorCss+='.nectar-highlighted-text.instance-'+i+' em:before { background: linear-gradient(90deg, '+$custom_highlight_color+', '+$custom_highlight_color_2+'); }'}else{highlightedColorCss+='.nectar-highlighted-text.instance-'+i+' em:before { background-color: '+$custom_highlight_color+'; }'}}
if(nectarDOMInfo.usingMobileBrowser){$(this).find('em').addClass('animated')}
var $that=$(this);var waypoint=new Waypoint({element:$that,handler:function(){if($that.parents('.wpb_tab').length>0&&$that.parents('.wpb_tab').css('visibility')=='hidden'||$that.hasClass('animated')){waypoint.destroy();return}
setTimeout(function(){$that.find('em').each(function(i){var $highlighted_em=$(this);setTimeout(function(){$highlighted_em.addClass('animated')},i*300)})},$animationDelay);waypoint.destroy()},offset:$highlightedTextOffsetPos})});nectarCreateStyle(highlightedColorCss,'highlighted-text')}
function pricingTableHeight(){var $tallestCol;$('.pricing-table[data-style="default"]').each(function(){$tallestCol=0;$(this).find('> div ul').each(function(){if($(this).height()>$tallestCol){$tallestCol=$(this).height()}});if($tallestCol==0){$tallestCol='auto'}
$(this).find('> div ul').css('height',$tallestCol)})}
function nectarTestimonialSliders(){$testimonialSliders=[];if(typeof NectarTestimonialSlider=='undefined'){return}
$('.testimonial_slider').each(function(i){var $that_el=$(this),$type=($(this).is('[data-style]'))?$(this).attr('data-style'):'none';$testimonialSliders[i]=new NectarTestimonialSlider($that_el,$type,resizeVideoToCover,fullWidthContentColumns);if($(this).is('.disable-height-animation:not([data-style*="multiple_visible"])')){$testimonialSliders[i].testimonialSliderHeight();setTimeout($testimonialSliders[i].testimonialSliderHeight.bind($testimonialSliders[i]),500)}
if($(this).is('.testimonial_slider[data-style="multiple_visible_minimal"]')){$testimonialSliders[i].testimonialSliderHeightMinimalMult();setTimeout($testimonialSliders[i].testimonialSliderHeightMinimalMult.bind($testimonialSliders[i]),500)}})}
function nectarTestimonialSlidersEvents(){$window.off('smartresize.nectarTestimonials');$window.off('resize.nectarTestimonialsMin');if($testimonialSliders.length>0){$window.on('smartresize.nectarTestimonials',nectarTestimonialMainResize)}
if($('.testimonial_slider[data-style="multiple_visible_minimal"]').length>0){$window.on('resize.nectarTestimonialsMin',nectarTestimonialMiniamlResize)}}
function nectarTestimonialMainResize(){for(var i=0;i<$testimonialSliders.length;i++){$testimonialSliders[i].testimonialSliderHeight();$testimonialSliders[i].testimonialHeightResize()}}
function nectarTestimonialMiniamlResize(){for(var i=0;i<$testimonialSliders.length;i++){$testimonialSliders[i].testimonialSliderHeightMinimalMult()}}
function iconList(){var $iconListOffsetPos=($('#nectar_fullscreen_rows').length>0)?'250%':'75%';$($fullscreenSelector+'.nectar-icon-list[data-animate="true"]').each(function(){var $that=$(this),waypoint=new Waypoint({element:$that,handler:function(){if($that.parents('.wpb_tab').length>0&&$that.parents('.wpb_tab').css('visibility')=='hidden'||$that.hasClass('completed')){waypoint.destroy();return}
$that.each(function(){var $listItemAnimationDelay=($that.is('[data-direction="horizontal"]'))?100:300;$(this).find('.nectar-icon-list-item').each(function(i){var $thatt=$(this);setTimeout(function(){$thatt.addClass('animated')},i*$listItemAnimationDelay)})});$that.addClass('completed');waypoint.destroy()},offset:$iconListOffsetPos})})}
function narrowParentBGC(element){var narrowedBGC;if(element.parents('.wpb_column[data-bg-color*="#"]').length>0&&element.parents('.wpb_column[data-bg-opacity="1"]').length>0){narrowedBGC=element.parents('.wpb_column').attr('data-bg-color')}else if(element.parents('.wpb_row').length>0&&element.parents('.wpb_row').find('.row-bg.using-bg-color').length>0||element.parents('.wpb_row').length>0&&element.parents('.wpb_row').find('.row-bg.using-bg-color-excluded').length>0){narrowedBGC=element.parents('.wpb_row').find('.row-bg').css('background-color')}else{if($('#nectar_fullscreen_rows').length>0){narrowedBGC=$('#nectar_fullscreen_rows > .wpb_row .full-page-inner-wrap').css('background-color')}else{narrowedBGC=$('.container-wrap').css('background-color')}}
return narrowedBGC}
function nectarIconMatchColoring(){var nectarMatchingBGCss='';$('.nectar-icon-list[data-icon-style="border"], .nectar_icon_wrap[data-style="border-animation"][data-color*="extra-color-gradient-"]').each(function(i){var $bgColorToSet=narrowParentBGC($(this));if($(this).hasClass('nectar-icon-list')){$(this).find('.list-icon-holder').css('background-color',$bgColorToSet)}else{$(this).removeClass(function(index,className){return(className.match(/(^|\s)instance-\S+/g)||[]).join(' ')});$(this).addClass('instance-'+i);nectarMatchingBGCss+='.nectar_icon_wrap.instance-'+i+' .nectar_icon:before { background-color: '+$bgColorToSet+'!important; }'}});$('body.material .nectar-button.see-through[class*="m-extra-color-gradient"]').each(function(i){var $bgColorToSet=narrowParentBGC($(this));$(this).removeClass(function(index,className){return(className.match(/(^|\s)instance-\S+/g)||[]).join(' ')});$(this).addClass('instance-'+i);nectarMatchingBGCss+='.nectar-button.see-through.instance-'+i+':after { background-color: '+$bgColorToSet+'!important; }'});nectarCreateStyle(nectarMatchingBGCss,'nectaricon-color-match')}
function oneFourthClasses(){$('.col.span_3, .vc_span3, .vc_col-sm-3').each(function(){if(!$(this).is('[data-t-w-inherits="small_desktop"]')){var $currentDiv=$(this);var $nextDiv=$(this).next('div');if($nextDiv.hasClass('span_3')&&!$currentDiv.hasClass('one-fourths')||$nextDiv.hasClass('vc_span3')&&!$currentDiv.hasClass('one-fourths')||$nextDiv.hasClass('vc_col-sm-3')&&!$currentDiv.hasClass('one-fourths')){$currentDiv.addClass('one-fourths clear-both');$nextDiv.addClass('one-fourths right-edge')}}});$('.span_12 .col.span_6').each(function(){if($(this).next('div').hasClass('span_6')&&$.trim($(this).next('div').html()).length==0){$(this).addClass('empty-second')}})}
function responsiveVideoIframesInit(){$('iframe').each(function(){if(typeof $(this).attr('src')!='undefined'&&!$(this).hasClass('skip-nectar-video-size')&&!$(this).hasClass('iframe-embed')&&$(this).parents('.ult_modal').length==0&&$(this).parents('.ls-slide').length==0&&$(this).parents('.esg-entry-media').length==0&&$(this).parents('.wpb_video_widget.wpb_content_element').length==0){var embedSrcLower=$(this).attr('src').toLowerCase();if(embedSrcLower.indexOf("youtube")>=0||embedSrcLower.indexOf("vimeo")>=0||embedSrcLower.indexOf("twitch.tv")>=0||embedSrcLower.indexOf("kickstarter")>=0||embedSrcLower.indexOf("embed-ssl.ted")>=0||embedSrcLower.indexOf("dailymotion")>=0){$(this).addClass('iframe-embed');if($(this).width()<$(this).parent().width()){$(this).attr('data-aspectRatio',$(this).height()/$(this).width()).removeAttr('height').removeAttr('width')}else{$(this).attr('data-aspectRatio','0.56').removeAttr('height').removeAttr('width')}
if($(this).parents('.post-area.masonry.classic').length>0){$(this).attr('data-aspectRatio','0.56').removeAttr('height').removeAttr('width')}}}})}
function responsiveVideoIframes(){$('iframe[data-aspectRatio]').each(function(){var $el=$(this),newWidth=$el.parent().width();if($(this).parents('.swiper-slide').length>0){if($(this).is(':visible')){$el.width(newWidth).height(newWidth*$el.attr('data-aspectRatio'))}}else{$el.width(newWidth).height(newWidth*$el.attr('data-aspectRatio'))}})}
function audioVideoVis(){$('.video-wrap iframe').unwrap();$('#sidebar iframe[src]').unwrap();$('audio').attr('width','100%').attr('height','100%').css('visibility','visible');if($body.hasClass('mobile')){$('video').css('visibility','hidden')}else{$('video').css('visibility','visible')}
$('.wp-video').each(function(){var video=$(this).find('video').get(0);video.addEventListener('loadeddata',function(){$window.trigger('resize')},!1)});$('.main-content iframe[src]').each(function(){$(this).css({'opacity':'1','visibility':'visible'})})}
function resizeVideoToCover(){var vid_w_orig=1280,vid_h_orig=720,min_w=1200;$('.nectar-video-wrap').each(function(){var $containerHeight,$containerWidth;if($(this).find('video').length==0){return}
if($(this).parents('#page-header-bg').length>0){if($('.container-wrap.auto-height').length>0){return!1}
$containerHeight=$(this).parents('#page-header-bg').outerHeight();$containerWidth=$(this).parents('#page-header-bg').outerWidth()}else{if($(this).hasClass('column-video')){if($body.is('[data-flex-cols="true"]')){$containerHeight=$(this).parents('.vc_column-inner').outerHeight();$containerWidth=$(this).parents('.vc_column-inner').outerWidth()}else{$containerHeight=$(this).parents('.wpb_column').outerHeight();$containerWidth=$(this).parents('.wpb_column').outerWidth()}}else{$containerHeight=$(this).parents('.wpb_row').outerHeight();$containerWidth=($(this).parents('.full-width-section').length>0)?nectarDOMInfo.winW:$(this).parents('.wpb_row').outerWidth()}}
$(this).width($containerWidth);if($(this).parents('#page-header-bg').length>0){$(this).height($containerHeight)}
var scale_h=$containerWidth/vid_w_orig,scale_v=($containerHeight-$containerHeight)/vid_h_orig,scale=scale_h>scale_v?scale_h:scale_v;min_w=1280/720*($containerHeight+40);if(scale*vid_w_orig<min_w){scale=min_w/vid_w_orig}
$(this).find('video, .mejs-overlay, .mejs-poster').width(Math.ceil(scale*vid_w_orig+0));$(this).find('video, .mejs-overlay, .mejs-poster').height(Math.ceil(scale*vid_h_orig+0));$(this).scrollLeft(($(this).find('video').width()-$containerWidth)/2);$(this).scrollTop(($(this).find('video').height()-($containerHeight))/2);$(this).find('.mejs-overlay, .mejs-poster').scrollTop(($(this).find('video').height()-($containerHeight))/2);if($(this).attr('data-bg-alignment')=='center bottom'||$(this).attr('data-bg-alignment')=='bottom'){$(this).scrollTop(($(this).find('video').height()-($containerHeight+6)))}else if($(this).attr('data-bg-alignment')=='center top'||$(this).attr('data-bg-alignment')=='top'){$(this).scrollTop(0)}
$(this).addClass('position-loaded')})}
function videoBGInit(){if($('.nectar-video-wrap').length==0&&$('.nectar-youtube-bg').length==0){return}
setTimeout(function(){resizeVideoToCover();$window.on('resize',resizeVideoToCover);$('.video-color-overlay').each(function(){$(this).css('background-color',$(this).attr('data-color'))});$('.nectar-video-wrap').each(function(){if($(this).find('video').length==0){return}
var $headerVideo=($(this).parents('#page-header-bg').length>0)?!0:!1;var $that=$(this);var videoReady=setInterval(function(){if($that.find('video').get(0).readyState>3){if(!nectarDOMInfo.usingMobileBrowser){$that.transition({'opacity':'1'},400);$that.find('video').transition({'opacity':'1'},400);$that.parent().find('.video-color-overlay').transition({'opacity':'0.7'},400);if($headerVideo==!0){pageHeaderTextEffect()}}
$loadingScreenEl.addClass('loaded');setTimeout(function(){$loadingScreenEl.addClass('hidden')},1000);clearInterval(videoReady)}},60);if(nectarDOMInfo.usingMobileBrowser){if($that.parents('.full-width-section').length>0&&$that.parents('#nectar_fullscreen_rows').length==0){$that.css('left','50%')}else{$that.css('left','0px')}
if($headerVideo==!0){pageHeaderTextEffect()}
$that.find('video')[0].onplay=function(){$that.transition({'opacity':'1'},400);$that.find('video').transition({'opacity':'1'},400);$that.parent().find('.video-color-overlay').transition({'opacity':'0.7'},400)}}})},300);if(nectarDOMInfo.usingMobileBrowser){$('.nectar-video-wrap').each(function(){if(!$(this).find('video').is('[muted]')){$(this).parent().find('.mobile-video-image').show();$(this).remove()}})}
$('.wpb_row:has(".nectar-video-wrap"):not(.fp-section)').each(function(i){$(this).css('z-index',100+i)});$(".vc_row").each(function(){var youtubeUrl,youtubeId,$row=jQuery(this);$row.find('.nectar-youtube-bg').length>0?(youtubeUrl=$row.find('.nectar-youtube-bg span').text(),youtubeId=nectarExtractYoutubeId(youtubeUrl),youtubeId&&($row.find(".vc_video-bg").remove(),nectarInsertYoutubeVideoAsBackground($row.find('.nectar-youtube-bg'),youtubeId))):$row.find(".nectar-youtube-bg").remove();$row.find('.nectar-youtube-bg span').remove();if(!nectarDOMInfo.usingMobileBrowser){$row.find('.nectar-video-wrap, .nectar-youtube-bg').css({'opacity':'1','width':'100%','height':'100%'})}
$row.find('.video-color-overlay').transition({'opacity':'0.7'},400)});function nectarInsertYoutubeVideoAsBackground($element,youtubeId,counter){if("undefined"==typeof YT||void 0===YT.Player)return 100<(counter=void 0===counter?0:counter)?void console.warn("Too many attempts to load YouTube api"):void setTimeout(function(){nectarInsertYoutubeVideoAsBackground($element,youtubeId,counter++)},100);var $container=$element.prepend('<div class="vc_video-bg"><div class="inner"></div></div>').find(".inner");new YT.Player($container[0],{width:"100%",height:"100%",videoId:youtubeId,playerVars:{playlist:youtubeId,iv_load_policy:3,enablejsapi:1,disablekb:1,autoplay:1,controls:0,showinfo:0,rel:0,loop:1},events:{onReady:function(event){event.target.mute().setLoop(!0);nectarResizeVideoBackground($element)}}}),nectarResizeVideoBackground($element),jQuery(window).on("resize",function(){nectarResizeVideoBackground($element)});setTimeout(function(){nectarResizeVideoBackground($element)},100)}
function nectarResizeVideoBackground($element){var iframeW,iframeH,marginLeft,marginTop,containerW=$element.innerWidth(),containerH=$element.innerHeight(),ratio1=16,ratio2=9;ratio1/ratio2>containerW/containerH?(iframeW=containerH*(ratio1/ratio2),iframeH=containerH,marginLeft=-Math.round((iframeW-containerW)/2)+"px",marginTop=-Math.round((iframeH-containerH)/2)+"px",iframeW+="px",iframeH+="px"):(iframeW=containerW,iframeH=containerW*(ratio2/ratio1),marginTop=-Math.round((iframeH-containerH)/2)+"px",marginLeft=-Math.round((iframeW-containerW)/2)+"px",iframeW+="px",iframeH+="px"),$element.find(".vc_video-bg iframe").css({maxWidth:"1000%",marginLeft:marginLeft,marginTop:marginTop,width:iframeW,height:iframeH})}
function nectarExtractYoutubeId(url){if("undefined"==typeof url){return!1}
var id=url.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);return null!==id?id[1]:!1}}
function blogSingle(){if($body.hasClass('single-post')&&$('.content-inner[data-has-gallery]').length>0){if($('.wp-block-gallery').length>0){$('.content-inner').find('.wp-block-gallery').each(function(i){if(i!==0){$(this).css('display','flex')}})}else{$('.content-inner').find('.gallery').each(function(i){if(i!==0){$(this).css('display','block')}})}}}
function mobileNavMegamenuCorrect(){var $mobileNavSelector=($('#top #mobile-menu').length>0)?'#top #mobile-menu ':'.off-canvas-menu-container.mobile-only ';$($mobileNavSelector+'.megamenu > ul > li > a').each(function(){if($(this).text()=='-'||$(this).text()=='–'||$(this).parent().hasClass('hide-title')){var $navLIs=$(this).parent().find('> ul > li').clone();$(this).parent().find('ul').remove();$(this).parent().parent().append($navLIs);$(this).parent().remove()}})}
function materialSkinOCM_Init(){if($('body.material[data-slide-out-widget-area-style="slide-out-from-right"]').length>0){OCM_materialWidth();if($wpAdminBar.length>0){var $topToolBar=$wpAdminBar.detach();$('.ocm-effect-wrap-inner').append($topToolBar)}}
OCM_materialIconMarkup();materialSkinTransition();$window.on('resize',OCM_materialSize)}
function materialSkinTransition(){if($('body.material[data-header-search="true"]').length>0||$('body.material .ocm-effect-wrap').length>0){var materialTransTO,allowMaterialResizeCalc=!1,orientTrack=0,$winDOMWidth=nectarDOMInfo.winW,$winDOMHeight=nectarDOMInfo.winH;window.addEventListener("orientationchange",function(){orientTrack=1});$window.on('resize',function(){if(nectarDOMInfo.usingMobileBrowser){if(($window.width()!=$winDOMWidth&&$window.height!=$winDOMHeight)||orientTrack===1){$winDOMWidth=nectarDOMInfo.winW;$winDOMHeight=nectarDOMInfo.winH;orientTrack=0;allowMaterialResizeCalc=!0}}else{allowMaterialResizeCalc=!0}
if(allowMaterialResizeCalc){clearTimeout(materialTransTO);$('body[data-slide-out-widget-area-style="slide-out-from-right"] > a.slide_out_area_close, .material #header-outer, .ocm-effect-wrap, .ocm-effect-wrap-shadow').addClass('no-material-transition');materialTransTO=setTimeout(function(){$('body[data-slide-out-widget-area-style="slide-out-from-right"] > a.slide_out_area_close, .material #header-outer, .ocm-effect-wrap, .ocm-effect-wrap-shadow').removeClass('no-material-transition')},250);OCM_materialWidth();allowMaterialResizeCalc=!1}})}}
function calculateHoverNavMinHeight(){var $widgetHeights=0;$('#slide-out-widget-area > .widget').each(function(){$widgetHeights+=$(this).height()});var $menuHeight;if(($offCanvasEl.height()-25-$('.bottom-meta-wrap').outerHeight(!0)-$widgetHeights)>$('#slide-out-widget-area .off-canvas-menu-container:last-child').height()){$menuHeight=$offCanvasEl.height()-25-$('.bottom-meta-wrap').outerHeight(!0)-$widgetHeights}else{$menuHeight=$('#slide-out-widget-area .off-canvas-menu-container:last-child').height()}
$('#slide-out-widget-area .inner').css({'height':'auto','min-height':$menuHeight});$('#slide-out-widget-area > .inner .off-canvas-menu-container').transition({y:'-'+($('#slide-out-widget-area > .inner .off-canvas-menu-container:last-child').height()/2)+'px'},0)}
function OCM_materialWidth(){$('#slide-out-widget-area.slide-out-from-right').css({'padding-top':$window.height()*0.1,'padding-bottom':$window.height()*0.1});OCM_overflowState()}
function OCM_materialIconMarkup(){if($('body.material').length>0&&$('body[data-slide-out-widget-area-style="slide-out-from-right-hover"]').length==0){if($('body[data-slide-out-widget-area-style*="fullscreen"]').length==0&&$('#mobile-menu').length==0){var $menuIconClone=$('header#top nav ul .slide-out-widget-area-toggle a > span > i').clone();$menuIconClone.addClass('hover-effect');$('header#top nav ul .slide-out-widget-area-toggle a > span').append($menuIconClone);var $menuIconClone2=$('header#top .slide-out-widget-area-toggle.mobile-icon a > span > i').clone();$menuIconClone2.addClass('hover-effect');$('header#top .slide-out-widget-area-toggle.mobile-icon a > span').append($menuIconClone2)}
$('body:not([data-slide-out-widget-area-style="slide-out-from-right"]) header#top .slide-out-widget-area-toggle a > span').append($('<span class="close-wrap"> <span class="close-line close-line1"></span> <span class="close-line close-line2"></span> </span>'))}
if($('body.material #boxed').length>0&&$('body[data-slide-out-widget-area-style="slide-out-from-right-hover"]').length>0){$('#ajax-content-wrap > .slide-out-widget-area-toggle.slide-out-hover-icon-effect').insertAfter('.ocm-effect-wrap')}
if($('body.material').length>0&&$('body[data-slide-out-widget-area-style*="fullscreen"]').length==0){$('body.material #slide-out-widget-area.slide-out-from-right .slide_out_area_close').insertAfter('.ocm-effect-wrap');$('#slide-out-widget-area-bg').insertAfter('.ocm-effect-wrap');$offCanvasEl.insertAfter('.ocm-effect-wrap')}}
function OCM_materialSize(){if($('.ocm-effect-wrap.material-ocm-open').length>0){$('.ocm-effect-wrap').css({'height':$window.height()});$('.ocm-effect-wrap-inner').css({'padding-top':nectarDOMInfo.adminBarHeight})}}
function OCM_dropdownMarkup(){var $nectar_ocm_dropdown_func=($('#slide-out-widget-area[data-dropdown-func]').length>0)?$offCanvasEl.attr('data-dropdown-func'):'default';if($nectar_ocm_dropdown_func=='separate-dropdown-parent-link'){$('#slide-out-widget-area .off-canvas-menu-container li.menu-item-has-children').append('<span class="ocm-dropdown-arrow"><i class="fa fa-angle-down"></i></span>')}}
function OCM_dropdownIconPos(){$('#slide-out-widget-area[class*="slide-out-from-right"] .off-canvas-menu-container li.menu-item-has-children').each(function(){$(this).find('.ocm-dropdown-arrow').css({'top':$(this).find('a').height()/2})})}
function OCM_overflowState(){if(nectarDOMInfo.winW<1000||$('body > #boxed').length>0||$('.ocm-effect-wrap-inner > #boxed').length>0){$('#slide-out-widget-area.fullscreen .off-canvas-social-links, #slide-out-widget-area.fullscreen-alt .off-canvas-social-links').appendTo('#slide-out-widget-area .inner');$('#slide-out-widget-area.fullscreen .bottom-text, #slide-out-widget-area.fullscreen-alt .bottom-text').appendTo('#slide-out-widget-area .inner')}else{$('#slide-out-widget-area.fullscreen .off-canvas-social-links,#slide-out-widget-area.fullscreen-alt .off-canvas-social-links').appendTo('#slide-out-widget-area .inner-wrap');$('#slide-out-widget-area.fullscreen .bottom-text, #slide-out-widget-area.fullscreen-alt .bottom-text').appendTo('#slide-out-widget-area .inner-wrap')}
if($('#slide-out-widget-area[class*="fullscreen"] .inner').height()>=$window.height()-100){$('#slide-out-widget-area[class*="fullscreen"] .inner, #slide-out-widget-area[class*="fullscreen"]').addClass('overflow-state')}else{$('#slide-out-widget-area[class*="fullscreen"] .inner, #slide-out-widget-area[class*="fullscreen"]').removeClass('overflow-state')}
$('#slide-out-widget-area[class*="fullscreen"] .inner').transition({y:'-'+($('#slide-out-widget-area[class*="fullscreen"] .inner').height()/2)+'px'},0);if($('.slide-out-from-right.open .off-canvas-menu-container.mobile-only').length>0&&$('body.mobile').length==0){$('#slide-out-widget-area .slide_out_area_close').trigger('click')}
OCM_dropdownIconPos()}
function OCM_slideOutRightHoverOpen(){calculateHoverNavMinHeight();if(nectarDOMInfo.usingMobileBrowser&&$('#slide-out-widget-area.open').length>0){OCM_mobileSlideOutRightHoverCloseCheck();return}
if(nectarDOMInfo.usingMobileBrowser){$('.slide-out-widget-area-toggle a').attr('aria-expanded','true')}
$offCanvasEl.css({'transform':'translate3d(0,0,0)'}).addClass('open');if($('header#top .container .span_9 > .slide-out-widget-area-toggle').length>0){var $hIconEl=$('.slide-out-hover-icon-effect'),secondaryBarHeight=nectarDOMInfo.secondaryHeaderHeight;var $nectarHamMenuPos;if($('body.mobile').length>0){$hIconEl.css({'top':$('header#top .span_9 > .slide-out-widget-area-toggle a').offset().top-nectarDOMInfo.scrollTop,'right':parseInt($('#header-outer header > .container').css('padding-right'))+1})}else{if($bodyBorderHeaderColorMatch){var $extraCushion=($('#header-outer[data-has-menu="false"]').length>0)?2:1;$hIconEl.css({'top':nectarDOMInfo.adminBarHeight+secondaryBarHeight+parseInt($('header#top nav >ul .slide-out-widget-area-toggle a').css('padding-top')),'right':29+$extraCushion})}else{if($('#header-outer[data-format="centered-menu-bottom-bar"]').length>0){$nectarHamMenuPos=($('header#top .span_9 > .slide-out-widget-area-toggle').css('display')=='block')?$('header#top .span_9 > .slide-out-widget-area-toggle.mobile-icon').position():$('header#top .span_3 .right-side .slide-out-widget-area-toggle > div').offset();$hIconEl.css({'top':parseInt($nectarHamMenuPos.top)-nectarDOMInfo.scrollTop,'right':parseInt($('#header-outer header >.container').css('padding-right'))+2})}else{if($body.hasClass('ascend')){$nectarHamMenuPos=($('header#top .span_9 > .slide-out-widget-area-toggle').css('display')=='block')?$('header#top .span_9 > .slide-out-widget-area-toggle.mobile-icon').position():$('header#top nav .buttons .slide-out-widget-area-toggle > div a > span').position()}else{$nectarHamMenuPos=($('header#top .span_9 > .slide-out-widget-area-toggle').css('display')=='block')?$('header#top .span_9 > .slide-out-widget-area-toggle.mobile-icon').position():$('header#top nav .buttons .slide-out-widget-area-toggle > div').position()}
if($('#header-secondary-outer.hide-up').length>0){secondaryBarHeight=0}
$hIconEl.css({'top':nectarDOMInfo.adminBarHeight+secondaryBarHeight+parseInt($nectarHamMenuPos.top),'right':parseInt($('#header-outer header >.container').css('padding-right'))+2})}}}}
$('.slide-out-hover-icon-effect .lines-button').removeClass('no-delay').addClass('unhidden-line');if($('#header-outer[data-permanent-transparent="1"]').length==0&&$('#nectar_fullscreen_rows').length==0&&!nectarDOMInfo.usingFrontEndEditor&&nectarDOMInfo.winW>1000){if(!(nectarDOMInfo.scrollTop==0&&$('#header-outer.transparent').length>0)){if($('body.mobile').length==0&&$bodyBorderHeaderColorMatch){$headerOuterEl.attr('data-transparent','true').addClass('no-bg-color').addClass('slide-out-hover');$('#header-outer header, #header-outer > .cart-outer').addClass('all-hidden')}}
if($('#header-outer[data-remove-fixed="1"]').length==0&&$('body.mobile').length==0&&$bodyBorderHeaderColorMatch){if(headerResize==!0){$window.off('scroll',bigNav);$window.off('scroll',smallNav)}else{$window.off('scroll',opaqueCheck);$window.off('scroll',transparentCheck)}}}
if(!nectarDOMInfo.usingMobileBrowser){$window.on('mousemove.rightOffsetCheck',OCM_slideOutRightHoverCloseCheck)}}
function OCM_slideOutRightHoverCloseCheck(e){var $windowWidth=$window.width();if(e.clientX<$windowWidth-340-$bodyBorderWidth&&$offCanvasEl.hasClass('mouse-accessed')){$offCanvasEl.removeClass('mouse-accessed');$window.off('mousemove.rightOffsetCheck',OCM_slideOutRightHoverCloseCheck);$offCanvasEl.css({'transform':'translate3d(341px,0,0)'}).removeClass('open');$headerOuterEl.removeClass('style-slide-out-from-right');$('.slide-out-hover-icon-effect .lines-button').removeClass('unhidden-line').addClass('no-delay');if($('#header-outer[data-permanent-transparent="1"]').length==0){if($('#header-outer[data-remove-fixed="1"]').length==0&&$('body.mobile').length==0&&$bodyBorderHeaderColorMatch){if($('body.mobile').length==0){$headerOuterEl.removeClass('no-bg-color');$('#header-outer header, #header-outer > .cart-outer').removeClass('all-hidden')}}
if($('#header-outer[data-remove-fixed="1"]').length==0&&$('body.mobile').length==0&&$bodyBorderHeaderColorMatch){if(headerResize==!0){$window.off('scroll.headerResizeEffect');if(nectarDOMInfo.scrollTop==0){$window.on('scroll.headerResizeEffect',smallNav);if($('#header-outer[data-full-width="true"][data-transparent-header="true"]').length>0&&$bodyBorderTop.length>0&&$bodyBorderHeaderColorMatch==!0&&$('#header-outer.pseudo-data-transparent').length>0){$('#header-outer[data-full-width="true"] header > .container').stop(!0,!0).animate({'padding':'0'},{queue:!1,duration:250,easing:'easeOutCubic'})}}else{$window.on('scroll.headerResizeEffect',bigNav)}}else{$window.off('scroll.headerResizeEffectOpaque');$window.on('scroll.headerResizeEffectOpaque',opaqueCheck)}}}}}
function OCM_mobileSlideOutRightHoverCloseCheck(){if(nectarDOMInfo.usingMobileBrowser){$('.slide-out-widget-area-toggle a').attr('aria-expanded','false')}
$offCanvasEl.css({'transform':'translate3d(341px,0,0)'}).removeClass('open');$headerOuterEl.removeClass('style-slide-out-from-right');$('.slide-out-hover-icon-effect .lines-button').removeClass('unhidden-line').addClass('no-delay');if($('#header-outer[data-permanent-transparent="1"]').length==0){$headerOuterEl.removeClass('no-bg-color');$('#header-outer header').removeClass('all-hidden')}
if($('#header-outer[data-remove-fixed="1"]').length==0&&$('body.mobile').length==0&&$bodyBorderHeaderColorMatch){if(headerResize==!0){$window.off('scroll.headerResizeEffect');if(nectarDOMInfo.scrollTop==0){$window.on('scroll.headerResizeEffect',smallNav);if($('#header-outer[data-full-width="true"][data-transparent-header="true"]').length>0&&$bodyBorderTop.length>0&&$bodyBorderHeaderColorMatch==!0&&$('#header-outer.pseudo-data-transparent').length>0){$('#header-outer[data-full-width="true"] header > .container').stop(!0,!0).animate({'padding':'0'},{queue:!1,duration:250,easing:'easeOutCubic'})}}else{$window.on('scroll.headerResizeEffect',bigNav)}}else{$window.off('scroll.headerResizeEffectOpaque');$window.on('scroll.headerResizeEffectOpaque',opaqueCheck)}}}
function OCM_slideOutRightHoverInit(){if($('#ajax-content-wrap > .slide-out-widget-area-toggle').length==0){$('<div class="slide-out-widget-area-toggle slide-out-hover-icon-effect" data-icon-animation="simple-transform"><div> <a href="#sidewidgetarea" class="closed"> <span> <i class="lines-button x2"> <i class="lines"></i> </i> </span> </a> </div> </div>').insertAfter('#slide-out-widget-area');if($('#header-outer[data-has-menu="true"]').length>0||$('body[data-header-search="true"]').length>0||$('.slide-out-widget-area-toggle a.using-label').length>0){$('.slide-out-widget-area-toggle').addClass('small')}}
if(!nectarDOMInfo.usingMobileBrowser){$body.on('mouseenter','#header-outer .slide-out-widget-area-toggle:not(.std-menu) a',OCM_slideOutRightHoverOpen);$offCanvasEl.on('mouseenter',function(){$(this).addClass('mouse-accessed')})}else{$body.on('click','.slide-out-widget-area-toggle:not(.std-menu) a',OCM_slideOutRightHoverOpen)}
$window.on('smartresize',calculateHoverNavMinHeight)}
function OCM_slideOutRightOpen(){var $slideOutAmount=($bodyBorderTop.length>0&&$('body.mobile').length==0)?$bodyBorderTop.height():0;if($('body.material').length==0){$('#slide-out-widget-area .inner').css({'height':'auto','min-height':$offCanvasEl.height()-25-$('.bottom-meta-wrap').height()});if($('#boxed').length==0){$('.container-wrap, .home-wrap, #footer-outer:not(#nectar_fullscreen_rows #footer-outer), .nectar-box-roll, #page-header-wrap .page-header-bg-image, #page-header-wrap .nectar-video-wrap, #page-header-wrap .mobile-video-image, #page-header-wrap #page-header-bg > .container, .page-header-no-bg, div:not(.container) > .project-title').stop(!0).transition({x:'-300px'},700,'easeInOutCubic');var $withinCustomBreakpoint=mobileBreakPointCheck();if($('#header-outer[data-format="centered-logo-between-menu"]').length==0||$withinCustomBreakpoint){if($('#header-outer[data-transparency-option="1"]').length==0||($('#header-outer[data-transparency-option="1"]').length>0&&$('#header-outer[data-full-width="true"]').length==0)||$('body.mobile').length>0){$headerOuterEl.stop(!0).css('transform','translateY(0)').transition({x:'-'+(300+$slideOutAmount)+'px'},700,'easeInOutCubic')}else{$headerOuterEl.stop(!0).css('transform','translateY(0)').transition({x:'-'+(300+$slideOutAmount)+'px','background-color':'transparent','border-bottom':'1px solid rgba(255,255,255,0.22)'},700,'easeInOutCubic')}}else{$('#header-outer header#top nav > ul.buttons, body:not(.material) #header-outer .cart-outer .cart-menu-wrap').transition({x:'-300px'},700,'easeInOutCubic')}}
$offCanvasEl.stop(!0).transition({x:'-'+$slideOutAmount+'px'},700,'easeInOutCubic').addClass('open');if($('#boxed').length==0){if($('#header-outer[data-full-width="true"]').length>0&&!$body.hasClass('mobile')){$headerOuterEl.addClass('highzI');$('#ascrail2000').addClass('z-index-adj');if($('#header-outer[data-format="centered-logo-between-menu"]').length==0){if($bodyBorderWidth==0){$('header#top #logo').stop(!0).transition({x:(300+$slideOutAmount)+'px'},700,'easeInOutCubic')}}
$('header#top .slide-out-widget-area-toggle .lines-button').addClass('close');$('body #header-outer nav > ul > li > a').css({'margin-bottom':'0'})}}
$headerOuterEl.addClass('style-slide-out-from-right');$offCanvasBG.css({'height':'100%','width':'100%'}).stop(!0).transition({'opacity':1},700,'easeInOutCubic',function(){$('.slide-out-widget-area-toggle:not(.std-menu) > div > a').removeClass('animating')});if($('#header-outer[data-format="centered-logo-between-menu"]').length==0){var $logoWidth=($('#logo img:visible').length>0)?$('#logo img:visible').width():$('#logo').width();if($('header#top nav > .sf-menu').offset().left-$logoWidth-300<20){$headerOuterEl.addClass('hidden-menu')}}else{$headerOuterEl.addClass('hidden-menu-items')}
if($('#header-outer[data-remove-fixed="1"]').length==0&&nectarDOMInfo.winW>1000){if($bodyBorderHeaderColorMatch==!0&&headerResize==!0){$headerOuterEl.stop(!0).transition({y:'0'},0).addClass('transparent').css('transition','transform');if($headerOuterEl.attr('data-transparent-header')!='true'){$headerOuterEl.attr('data-transparent-header','true').addClass('pseudo-data-transparent')}
$window.off('scroll',bigNav);$window.off('scroll',smallNav)}else if($bodyBorderHeaderColorMatch==!0){$headerOuterEl.addClass('transparent');$window.off('scroll',opaqueCheck);$window.off('scroll',transparentCheck);if($headerOuterEl.attr('data-transparent-header')!='true'){$headerOuterEl.attr('data-transparent-header','true').addClass('pseudo-data-transparent')}}}}else if($('body.material').length>0){if($loadingScreenEl.length>0&&$('.ocm-effect-wrap #ajax-loading-screen').length>0){$loadingScreenEl.insertBefore('.ocm-effect-wrap')}
if(nectarDOMInfo.scrollTop>40){$('body[data-hhun="1"] #header-secondary-outer').addClass('hidden')}
setTimeout(function(){$('.slide-out-widget-area-toggle:not(.std-menu) > div > a').removeClass('animating')},300);$('#slide-out-widget-area, #slide-out-widget-area-bg, #header-outer .slide-out-widget-area-toggle').addClass('material-open');if($('body:not(.mobile) #header-outer[data-format="centered-menu-bottom-bar"][data-condense="true"]').length>0&&$('#header-outer[data-format="centered-menu-bottom-bar"] .span_9').css('display')!='none'){$('#header-outer:not(.fixed-menu)').css('top',nectarDOMInfo.adminBarHeight-nectarDOMInfo.scrollTop+'px');if($headerSecondaryEl.length>0&&$('#header-outer.fixed-menu').length>0){$headerSecondaryEl.css('visibility','hidden')}}
$('#ajax-content-wrap').css({'position':'relative','top':'-'+nectarDOMInfo.scrollTop+'px'});$('.ocm-effect-wrap-inner').css({'padding-top':nectarDOMInfo.adminBarHeight});$('#fp-nav').addClass('material-ocm-open');$body.addClass('material-ocm-open');$body.addClass('nectar-no-flex-height');$('.ocm-effect-wrap').css({'height':nectarDOMInfo.winH});setTimeout(function(){$('.ocm-effect-wrap').addClass('material-ocm-open')},40);$('body > .slide_out_area_close').addClass('follow-body');$('#header-outer:not([data-format="left-header"]) header#top .slide-out-widget-area-toggle a').addClass('effect-shown');$('body[data-hhun="1"]:not(.no-scroll):not(.mobile) #header-outer[data-permanent-transparent="false"]:not(.detached):not(.parallax-contained):not(.at-top-before-box)').css({'transition':'none','transform':'translateY('+nectarDOMInfo.adminBarHeight+'px)'});setTimeout(function(){$('body > .slide_out_area_close').addClass('material-ocm-open')},350)}}
function OCM_slideOutRightClose(){if($('body.material').length==0){$('.container-wrap, .home-wrap, #footer-outer:not(#nectar_fullscreen_rows #footer-outer), .nectar-box-roll, #page-header-wrap .page-header-bg-image,  #page-header-wrap .nectar-video-wrap, #page-header-wrap .mobile-video-image, #page-header-wrap #page-header-bg > .container, .page-header-no-bg, div:not(.container) > .project-title').stop(!0).transition({x:'0px'},700,'easeInOutCubic');if($('#header-outer[data-transparency-option="1"]').length>0&&$('#boxed').length==0){var $currentRowBG=($('#header-outer[data-current-row-bg-color]').length>0)?$headerOuterEl.attr('data-current-row-bg-color'):$headerOuterEl.attr('data-user-set-bg');$headerOuterEl.stop(!0).transition({x:'0px','background-color':$currentRowBG},700,'easeInOutCubic')}else{$headerOuterEl.stop(!0).transition({x:'0px'},700,'easeInOutCubic')}
$offCanvasEl.stop(!0).transition({x:'301px'},700,'easeInOutCubic').removeClass('open');if($('#boxed').length==0){if($('#header-outer[data-full-width="true"]').length>0){$headerOuterEl.removeClass('highzI');$('header#top #logo').stop(!0).transition({x:'0px'},700,'easeInOutCubic');$('.lines-button').removeClass('close')}}
if($('#header-outer[data-format="centered-logo-between-menu"]').length>0){$('#header-outer header#top nav > ul.buttons, #header-outer .cart-outer .cart-menu-wrap').stop(!0).transition({x:'0px'},700,'easeInOutCubic')}
$offCanvasBG.stop(!0).transition({'opacity':0},700,'easeInOutCubic',function(){$('.slide-out-widget-area-toggle a').removeClass('animating');$(this).css({'height':'1px','width':'1px'});if($('#header-outer[data-remove-fixed="1"]').length==0){if($headerOuterEl.hasClass('parallax-contained')&&nectarDOMInfo.scrollTop>0&&$('#header-outer[data-permanent-transparent="1"]').length==0){$headerOuterEl.removeClass('parallax-contained').addClass('detached').removeClass('transparent')}else if(nectarDOMInfo.scrollTop==0&&$('body[data-hhun="1"]').length>0&&$('#page-header-bg[data-parallax="1"]').length>0||nectarDOMInfo.scrollTop==0&&$('body[data-hhun="1"]').length>0&&$('.parallax_slider_outer').length>0){if($('#header-outer[data-transparency-option="1"]').length>0){$headerOuterEl.addClass('transparent')}
$headerOuterEl.addClass('parallax-contained').removeClass('detached')}}
$('.container-wrap').css('transform','none')});$headerOuterEl.removeClass('style-slide-out-from-right');if($('#header-outer[data-remove-fixed="1"]').length==0){if($bodyBorderHeaderColorMatch==!0&&headerResize==!0&&nectarDOMInfo.winW>1000){$window.off('scroll.headerResizeEffect');if(nectarDOMInfo.scrollTop==0){$window.on('scroll.headerResizeEffect',smallNav);if($('#header-outer[data-full-width="true"][data-transparent-header="true"]').length>0&&$bodyBorderTop.length>0&&$bodyBorderHeaderColorMatch==!0&&$('#header-outer.pseudo-data-transparent').length>0){$('#header-outer[data-full-width="true"] header > .container').stop(!0,!0).animate({'padding':'0'},{queue:!1,duration:250,easing:'easeOutCubic'})}}else{$window.on('scroll.headerResizeEffect',bigNav)}
if($headerOuterEl.hasClass('pseudo-data-transparent')){$headerOuterEl.attr('data-transparent-header','false').removeClass('pseudo-data-transparent').removeClass('transparent')}
$headerOuterEl.css('transition','transform')}else if($bodyBorderHeaderColorMatch==!0&&nectarDOMInfo.winW>1000){$window.off('scroll.headerResizeEffectOpaque');$window.on('scroll.headerResizeEffectOpaque',opaqueCheck);$headerOuterEl.css('transition','transform');if($headerOuterEl.hasClass('pseudo-data-transparent')){$headerOuterEl.attr('data-transparent-header','false').removeClass('pseudo-data-transparent').removeClass('transparent')}}}}else if($('body.material').length>0){$offCanvasEl.removeClass('open');$('#slide-out-widget-area, #slide-out-widget-area-bg, #header-outer .slide-out-widget-area-toggle').removeClass('material-open');$('.ocm-effect-wrap, .ocm-effect-wrap-shadow, body > .slide_out_area_close, #fp-nav').removeClass('material-ocm-open');$('body > .slide_out_area_close').removeClass('follow-body');setTimeout(function(){$('.slide-out-widget-area-toggle a').removeClass('animating');$body.removeClass('material-ocm-open');$body.removeClass('nectar-no-flex-height');$('.ocm-effect-wrap').css({'height':'100%'});$('.ocm-effect-wrap-inner').css({'padding-top':'0'});$window.scrollTop(Math.abs(parseInt($('#ajax-content-wrap').css('top'))));$('#ajax-content-wrap').css({'position':'','top':''});if($('#header-outer[data-format="centered-menu-bottom-bar"]').length>0&&$('#header-outer[data-format="centered-menu-bottom-bar"] .span_9').css('display')!='none'&&$('body.mobile').length==0){$('#header-outer:not(.fixed-menu)').css('top','');$headerSecondaryEl.css('visibility','')}
$('body[data-hhun="1"]:not(.no-scroll) #header-outer[data-permanent-transparent="false"]:not(.detached):not(.parallax-contained):not(.at-top-before-box)').css({'transform':''});setTimeout(function(){$('body[data-hhun="1"]:not(.no-scroll) #header-outer[data-permanent-transparent="false"]:not(.detached):not(.parallax-contained):not(.at-top-before-box)').css({'transition':''})},30);$('body[data-hhun="1"] #header-secondary-outer.hidden').removeClass('hidden')},900);setTimeout(function(){$('#header-outer:not([data-format="left-header"]) header#top .slide-out-widget-area-toggle a').addClass('no-trans').removeClass('effect-shown')},200);setTimeout(function(){$('#header-outer:not([data-format="left-header"]) header#top .slide-out-widget-area-toggle a').removeClass('no-trans')},500)}}
function OCM_fullscreenOpen(){if($('body.material').length>0){$('header#top .slide-out-widget-area-toggle a').addClass('menu-push-out')}
var $scrollDelay=0;var $scrollDelay2=0;if(nectarDOMInfo.scrollTop+$window.height()>$('.blurred-wrap').height()&&$('#nectar_fullscreen_rows').length==0){$('body,html').stop().animate({scrollTop:$('.blurred-wrap').height()-$window.height()},600,'easeInOutCubic');$scrollDelay=550;$scrollDelay2=200}
$('header#top .slide-out-widget-area-toggle:not(.std-menu) .lines-button').addClass('close');setTimeout(function(){$('.blurred-wrap').addClass('blurred')},$scrollDelay);$('#slide-out-widget-area.fullscreen').show().addClass('open');if($('.nectar-social.fixed').length==0){hideToTop()}
$('.container-wrap').addClass('no-shadow');$headerOuterEl.stop(!0).css('transform','translateY(0)');setTimeout(function(){$('.off-canvas-menu-container .menu > li').each(function(i){$(this).delay(i*50).transition({y:0,'opacity':1},800,'easeOutExpo')});$('#slide-out-widget-area.fullscreen .widget').each(function(i){$(this).delay(i*100).transition({y:0,'opacity':1},800,'easeOutExpo')})},370+$scrollDelay2);setTimeout(function(){$('#slide-out-widget-area .off-canvas-social-links').addClass('line-shown');$('#slide-out-widget-area .off-canvas-social-links li').each(function(i){$(this).delay(i*50).transition({'scale':1},400,'easeOutCubic')});$('#slide-out-widget-area .bottom-text').transition({'opacity':0.7},400,'easeOutCubic')},750+$scrollDelay2);setTimeout(function(){var $easing=($('body.mobile').length>0)?'easeOutCubic':'easeInOutQuint';$offCanvasBG.css({'height':'100%','width':'100%'}).show().stop(!0).transition({'y':'0%'},920,$easing,function(){$('.slide-out-widget-area-toggle > div > a').removeClass('animating')})},50+$scrollDelay2);OCM_overflowState();if($('.mobile #header-outer[data-permanent-transparent="false"]').length>0&&$('.container-wrap').hasClass('no-scroll')){$('#ajax-content-wrap').addClass('at-content')}
if($('.mobile #header-outer[data-permanent-transparent="false"]').length>0||$('.mobile').length==0&&$('#header-outer.transparent').length==0){$('#slide-out-widget-area.fullscreen .inner-wrap').css('padding-top',$headerOuterEl.height())}}
function OCM_fullscreenClose(){if($('body.material').length>0){setTimeout(function(){$('header#top .slide-out-widget-area-toggle a').removeClass('menu-push-out')},350)}
$('.slide-out-widget-area-toggle:not(.std-menu) .lines-button').removeClass('close');$('.blurred-wrap').removeClass('blurred');$('#slide-out-widget-area.fullscreen').transition({'opacity':0},700,'easeOutQuad',function(){$('#slide-out-widget-area.fullscreen').hide().css('opacity','1')}).removeClass('open');$('#slide-out-widget-area.fullscreen .widget').transition({'opacity':0},700,'easeOutQuad',function(){$(this).transition({y:'110px'},0)});setTimeout(function(){$('.off-canvas-menu-container .menu > li').transition({y:'80px','opacity':0},0);$('#slide-out-widget-area .off-canvas-social-links li').transition({'scale':0},0);$('#slide-out-widget-area .off-canvas-social-links').removeClass('line-shown');$('#slide-out-widget-area .bottom-text').transition({'opacity':0},0);$('#slide-out-widget-area .menuwrapper .menu').removeClass('subview');$('#slide-out-widget-area .menuwrapper .menu li').removeClass('subview subviewopen');$('#slide-out-widget-area.fullscreen .inner .off-canvas-menu-container').css('height','auto')},800);setTimeout(function(){if($('.nectar-social.fixed').length==0){showToTop()}
$('.container-wrap').removeClass('no-shadow')},500);$offCanvasBG.stop(!0).transition({'opacity':0},900,'easeOutQuad',function(){if($('.mobile #header-outer[data-permanent-transparent="false"]').length>0&&$('.container-wrap').hasClass('no-scroll')){$('#ajax-content-wrap').removeClass('at-content')}
if($('.mobile #header-outer[data-permanent-transparent="false"]').length==0){$('#slide-out-widget-area.fullscreen .inner-wrap').css('padding-top','0')}
$('.slide-out-widget-area-toggle a').removeClass('animating');var $opacity=0.4;if($offCanvasBG.hasClass('solid')){$opacity=1}
if($offCanvasBG.hasClass('dark')){$opacity=0.93}
if($offCanvasBG.hasClass('medium')){$opacity=0.6}
if($offCanvasBG.hasClass('light')){$opacity=0.4}
$(this).css({'height':'1px','width':'1px','opacity':$opacity}).transition({y:'-100%'},0)})}
function OCM_fullscreenAltOpen(){if($('body.material').length>0){$('header#top .slide-out-widget-area-toggle a').addClass('menu-push-out')}
$('header#top .slide-out-widget-area-toggle:not(.std-menu) .lines-button').addClass('close');$('#slide-out-widget-area.fullscreen-alt').show().addClass('open');$offCanvasBG.addClass('open');$('body > div[class*="body-border"]').css('z-index','9995');$('.off-canvas-menu-container .menu').transition({y:'0px','opacity':1},0);if($('.nectar-social.fixed').length==0){hideToTop()}
if($('#header-outer.transparent').length>0){if($bodyBorderTop.length>0){$('.admin-bar #slide-out-widget-area-bg.fullscreen-alt').css({'padding-top':($bodyBorderTop.outerHeight(!0)+32)+'px'});$('body:not(.admin-bar) #slide-out-widget-area-bg.fullscreen-alt').css({'padding-top':($bodyBorderTop.outerHeight(!0))+'px'})}}
$headerOuterEl.stop(!0).css('transform','translateY(0)');if($('#logo .starting-logo').length>0&&$window.width()>1000&&$('#header-outer[data-format="centered-menu-bottom-bar"].fixed-menu').length==0&&$('body.material #header-outer[data-condense="true"]').length==0&&!nectarDOMInfo.usingFrontEndEditor){$headerOuterEl.stop(!0).css('transform','translateY(0)').addClass('transparent');if($headerOuterEl.attr('data-transparent-header')!='true'){$headerOuterEl.attr('data-transparent-header','true').addClass('pseudo-data-transparent')}}
$('.off-canvas-menu-container .clip-wrap').css('transition-duration','0s');setTimeout(function(){$('.off-canvas-menu-container .menu > li').each(function(i){$(this).delay(i*50).transition({y:0,'opacity':1},750,'easeOutCubic').addClass('no-pointer-events')});setTimeout(function(){$('.off-canvas-menu-container .menu > li').removeClass('no-pointer-events');$('.off-canvas-menu-container .clip-wrap').css('transition-duration','.45s')},500);$('#slide-out-widget-area.fullscreen-alt .widget').each(function(i){$(this).delay(i*100).transition({y:0,'opacity':1},650,'easeOutCubic')})},200);setTimeout(function(){$('#slide-out-widget-area .off-canvas-social-links').addClass('line-shown');$('#slide-out-widget-area .off-canvas-social-links li').css('opacity','1').each(function(i){$(this).delay(i*50).transition({'scale':1},400,'easeOutCubic')});$('#slide-out-widget-area .bottom-text').transition({'opacity':1},600,'easeOutCubic')},200);var $opacity=0.4;if($offCanvasBG.hasClass('solid')){$opacity=1}
if($offCanvasBG.hasClass('dark')){$opacity=0.97}
if($offCanvasBG.hasClass('medium')){$opacity=0.6}
if($offCanvasBG.hasClass('light')){$opacity=0.4}
$offCanvasBG.removeClass('no-transition');$offCanvasBG.addClass('padding-removed').css({'height':'100%','width':'100%','left':'0','opacity':$opacity});setTimeout(function(){$('.slide-out-widget-area-toggle > div > a').removeClass('animating')},600);OCM_overflowState();if($('.mobile #header-outer[data-permanent-transparent="false"]').length>0&&$('.container-wrap').hasClass('no-scroll')){$('#ajax-content-wrap').addClass('at-content')}
if($('.mobile #header-outer[data-permanent-transparent="false"]').length>0||$('.mobile').length==0&&$('#header-outer.transparent').length==0){$('#slide-out-widget-area.fullscreen-alt .inner-wrap').css('padding-top',$headerOuterEl.height())}}
function OCM_fullscreenAltClose(){if($('body.material').length>0){setTimeout(function(){$('header#top .slide-out-widget-area-toggle a').removeClass('menu-push-out')},350)}
$('.slide-out-widget-area-toggle:not(.std-menu) .lines-button').removeClass('close');$('.blurred-wrap').removeClass('blurred');$offCanvasBG.removeClass('open');$('#slide-out-widget-area.fullscreen-alt .widget').transition({'opacity':0},500,'easeOutQuad',function(){$(this).transition({y:'40px'},0)});$('#slide-out-widget-area .bottom-text, #slide-out-widget-area .off-canvas-social-links li').transition({'opacity':0},250,'easeOutQuad');$('#slide-out-widget-area .off-canvas-social-links').removeClass('line-shown');$('.off-canvas-menu-container .menu').transition({y:'-13px','opacity':0},400);setTimeout(function(){$('.off-canvas-menu-container .menu > li').stop(!0,!0).transition({y:'40px','opacity':0},0);$('#slide-out-widget-area .off-canvas-social-links li').transition({'scale':0},0);$('#slide-out-widget-area .off-canvas-social-links').removeClass('line-shown');$('#slide-out-widget-area .menuwrapper .menu').removeClass('subview');$('#slide-out-widget-area .menuwrapper .menu li').removeClass('subview subviewopen');$('#slide-out-widget-area.fullscreen-alt .inner .off-canvas-menu-container').css('height','auto');if($('.mobile #header-outer[data-permanent-transparent="false"]').length>0&&$('.container-wrap').hasClass('no-scroll')){$('#ajax-content-wrap').removeClass('at-content')}
if($('.mobile #header-outer[data-permanent-transparent="false"]').length==0){$('#slide-out-widget-area.fullscreen-alt .inner-wrap').css('padding-top','0')}
$('.slide-out-widget-area-toggle a').removeClass('animating');$offCanvasBG.css({'height':'1px','width':'1px','left':'-100%'});$('#slide-out-widget-area.fullscreen-alt').hide().removeClass('open')},550);setTimeout(function(){if($('.nectar-social.fixed').length==0){showToTop()}},600);setTimeout(function(){$offCanvasBG.removeClass('padding-removed')},50);var borderDelay=($bodyBorderHeaderColorMatch==!0)?150:50;setTimeout(function(){$offCanvasBG.stop(!0).css({'opacity':0});if($('#header-outer[data-transparent-header="true"]').length>0){$('body > div[class*="body-border"]').css('z-index','10000')}},borderDelay);setTimeout(function(){$('#header-outer.transparent.small-nav, #header-outer.transparent.detached, #header-outer:not([data-permanent-transparent="1"]).transparent.scrolled-down').removeClass('transparent');if($headerOuterEl.hasClass('pseudo-data-transparent')){$headerOuterEl.attr('data-transparent-header','false').removeClass('pseudo-data-transparent').removeClass('transparent')}},100)}
function OCM_simpleDropdownOpen(){$('#mobile-menu').show();$('header#top .slide-out-widget-area-toggle:not(.std-menu) .lines-button').addClass('close');if($('body.material').length>0){$('header#top .slide-out-widget-area-toggle a').addClass('menu-push-out')}
setTimeout(function(){$('.slide-out-widget-area-toggle > div > a').removeClass('animating')},100)}
function OCM_simpleDropdownClose(){$('#mobile-menu').hide();$('.slide-out-widget-area-toggle:not(.std-menu) .lines-button').removeClass('close');setTimeout(function(){if($('body.material').length>0){$('header#top .slide-out-widget-area-toggle a').removeClass('menu-push-out')}
$('.slide-out-widget-area-toggle a').removeClass('animating')},350)}
function OCM_simpleStyleInit(){if($('#header-outer #mobile-menu').length==0){return}
$('#header-outer #mobile-menu li.megamenu').removeClass('megamenu');$('#header-outer #mobile-menu ul li').each(function(){$(this).find('a').wrapInner('<span></span>');if($(this).find('> ul').length>0){$(this).find('> a').append('<span class="sf-sub-indicator"><i class="fa fa-angle-down"></i></span>')}});$('#header-outer #mobile-menu .sf-sub-indicator').on('click',function(){var $parentLI=$(this).parent().parent();$parentLI.toggleClass('current-open-item');if($parentLI.hasClass('current-open-item')){$parentLI.find('> ul').show();setTimeout(function(){$parentLI.addClass('visible')},30)}else{$parentLI.find('ul').hide();$parentLI.find('li').removeClass('visible').removeClass('current-open-item');$parentLI.removeClass('visible')}
return!1});$window.on('smartresize',function(){if(nectarDOMInfo.winW>1000&&$('.slide-out-widget-area-toggle.mobile-icon a.open').length>0){$('.slide-out-widget-area-toggle.mobile-icon a').addClass('non-human-allowed').trigger('click');setTimeout(function(){$('.slide-out-widget-area-toggle.mobile-icon a').removeClass('non-human-allowed')},100)}})}
function OCM_clickTriggeredStylesInit(){$body.on('click','.slide-out-widget-area-toggle:not(.std-menu) a.closed:not(.animating), .nectar-ocm-trigger-open',function(){if(nectarBoxRoll.animating=='true'||$('.slide-out-from-right-hover').length>0){return!1}
$headerOuterEl.removeClass('no-transition');if($offCanvasEl.hasClass('slide-out-from-right')){OCM_slideOutRightOpen()}else if($offCanvasEl.hasClass('fullscreen')){OCM_fullscreenOpen()}else if($offCanvasEl.hasClass('fullscreen-alt')){OCM_fullscreenAltOpen()}else if($('#header-outer #mobile-menu').length>0){OCM_simpleDropdownOpen()}
if($('#header-outer #mobile-menu').length==0){$headerOuterEl.removeClass('side-widget-closed').addClass('side-widget-open');if($('#header-outer[data-transparency-option="1"]').length>0&&$('#boxed').length==0&&$('#header-outer[data-full-width="true"]').length>0&&!nectarDOMInfo.usingFrontEndEditor){if($('body.material[data-slide-out-widget-area-style="slide-out-from-right"]').length==0&&$('body.material #header-outer[data-condense="true"]').length==0){$headerOuterEl.addClass('transparent')}}
if($('#header-outer.dark-slide.transparent').length>0&&$('#boxed').length==0&&$('body.material-ocm-open').length==0){$headerOuterEl.removeClass('dark-slide').addClass('temp-removed-dark-slide')}}
$('.slide-out-widget-area-toggle > div > a').removeClass('closed').addClass('open').attr('aria-expanded','true');$('.slide-out-widget-area-toggle > div > a').addClass('animating');return!1});$body.on('click','.slide-out-widget-area-toggle:not(.std-menu) a.open:not(.animating), #slide-out-widget-area .slide_out_area_close, > .slide_out_area_close, #slide-out-widget-area-bg.slide-out-from-right, .material-ocm-open #ajax-content-wrap',function(e){if(e.originalEvent==undefined&&$('.slide_out_area_close.non-human-allowed').length==0&&$('.slide-out-widget-area-toggle.mobile-icon a.non-human-allowed').length==0){return}
if($('.slide-out-widget-area-toggle:not(.std-menu) a.animating').length>0){return}
$headerOuterEl.removeClass('no-transition');$('.slide-out-widget-area-toggle:not(.std-menu) a').removeClass('open').addClass('closed').attr('aria-expanded','false');$('.slide-out-widget-area-toggle:not(.std-menu) a').addClass('animating');if($offCanvasEl.hasClass('slide-out-from-right')){OCM_slideOutRightClose()}else if($offCanvasEl.hasClass('fullscreen')){OCM_fullscreenClose()}else if($offCanvasEl.hasClass('fullscreen-alt')){OCM_fullscreenAltClose()}else if($('#header-outer #mobile-menu').length>0){OCM_simpleDropdownClose()}
if($('#header-outer #mobile-menu').length==0){if($('#header-outer.temp-removed-dark-slide.transparent').length>0&&$('#boxed').length==0){$headerOuterEl.removeClass('temp-removed-dark-slide').addClass('dark-slide')}
if($('#header-outer[data-permanent-transparent="1"]').length==0&&$('#slide-out-widget-area.fullscreen-alt').length==0){if($('.nectar-box-roll').length==0){if($('#header-outer.small-nav').length>0||$('#header-outer.scrolled-down').length>0){$headerOuterEl.removeClass('transparent')}}else{if($('#header-outer.small-nav').length>0||$('#header-outer.scrolled-down').length>0||$('.container-wrap.auto-height').length>0){$headerOuterEl.removeClass('transparent')}}}
$headerOuterEl.removeClass('hidden-menu');$headerOuterEl.removeClass('side-widget-open').addClass('side-widget-closed')}
return!1})}
function OCM_init(){if($('#slide-out-widget-area.slide-out-from-right-hover').length>0){OCM_slideOutRightHoverInit()}else{OCM_clickTriggeredStylesInit();OCM_simpleStyleInit()}
if($('body.material[data-slide-out-widget-area-style*="slide-out-from-right"]').length==0&&$('#slide-out-widget-area[data-dropdown-func="separate-dropdown-parent-link"]').length==0){fullscreenMenuInit()}else if($('body.using-mobile-browser[data-slide-out-widget-area-style="slide-out-from-right-hover"]').length>0){$('body #slide-out-widget-area .inner .off-canvas-menu-container li a[href]').on('click',function(){if($(this).attr('href')!='#'){OCM_close($(this).parent())}})}
if($('#nectar_fullscreen_rows').length>0&&$('body[data-slide-out-widget-area-style*="fullscreen"]').length>0){$('body #slide-out-widget-area .inner .off-canvas-menu-container li a[href]').on('click',function(){var $link_href=($(this).is('[href*="#"]'))?$(this).attr('href'):'';if($link_href!='#'&&$('div[data-fullscreen-anchor-id="'+$link_href.substr($link_href.indexOf("#")+1)+'"]').length>0){setTimeout(function(){$('#slide-out-widget-area .slide_out_area_close').addClass('non-human-allowed').trigger('click')},100);setTimeout(function(){$('#slide-out-widget-area .slide_out_area_close').removeClass('non-human-allowed')},150)}})}
$body.on('mouseover','#slide-out-widget-area .off-canvas-menu-container .menuwrapper > .sub-menu li > a',function(){var $currentTxt=$(this).text();$('.off-canvas-menu-container .menuwrapper .menu li > a').removeClass('hovered');$('.off-canvas-menu-container .menuwrapper .menu li > a:contains('+$currentTxt+')').addClass('hovered')});$body.on('mouseover','.off-canvas-menu-container .menuwrapper .menu li > a',function(){$('.off-canvas-menu-container .menuwrapper .menu li > a').removeClass('hovered')});setTimeout(OCM_scrolling,500);if(nectarDOMInfo.usingMobileBrowser){$offCanvasEl.addClass('mobile')}}
function OCM_scrolling(){$offCanvasEl.mousewheel(function(event,delta){this.scrollTop-=(delta*30);event.preventDefault()})}
function OCM_close(item){if($('#slide-out-widget-area.open').length>0){var $windowCurrentLocation=window.location.href.split("#")[0];var $windowClickedLocation=item.find('> a').attr('href').split("#")[0];if($windowCurrentLocation==$windowClickedLocation||item.find('a[href^="#"]').length>0){if(item.parents('.slide-out-from-right-hover').length>0){$('.slide-out-widget-area-toggle.slide-out-hover-icon-effect a').trigger('click')}else{$('.slide-out-widget-area-toggle a').trigger('click')}}}}
function clickToggleSubmenus(){if(!$('#header-outer[data-format="left-header"]').length>0&&!$('body.material[data-slide-out-widget-area-style*="slide-out-from-right"]').length>0&&!$('#slide-out-widget-area[data-dropdown-func="separate-dropdown-parent-link"]').length>0){return}
$('#header-outer[data-format="left-header"] nav li.megamenu').removeClass('megamenu');var $ocm_link_selector;if($('#slide-out-widget-area[data-dropdown-func="separate-dropdown-parent-link"]').length>0){$ocm_link_selector='#slide-out-widget-area .off-canvas-menu-container li.menu-item-has-children > .ocm-dropdown-arrow'}else{$ocm_link_selector='body.material #slide-out-widget-area[class*="slide-out-from-right"] .off-canvas-menu-container li.menu-item-has-children > a'}
$('#header-outer[data-format="left-header"] nav li.menu-item-has-children > a, '+$ocm_link_selector).on('click',function(){if($(this).parent().hasClass('open-submenu')){$(this).parent().find('.sub-menu').css({'max-height':'0'});$(this).parent().removeClass('open-submenu')}else{var $that=$(this);var $maxSubMenuHeight;$that.parent().find('> .sub-menu').addClass('no-trans');setTimeout(function(){$that.parent().find('> .sub-menu').css({'max-height':'none','position':'absolute','visibility':'hidden'});$maxSubMenuHeight=$that.parent().find('> .sub-menu').height();$that.parent().find('> .sub-menu').removeClass('no-trans');$that.parent().find('> .sub-menu').css({'max-height':'0','position':'relative','visibility':'visible'})},25);setTimeout(function(){$that.closest('ul').find('li.menu-item-has-children').removeClass('open-submenu');$that.closest('ul').find('li.menu-item-has-children > .sub-menu').css({'max-height':'0'});$that.parent().addClass('open-submenu');$that.parent().find('> .sub-menu').css('max-height',$maxSubMenuHeight);if($that.parents('ul').length>0){$that.parents('ul:not(.sf-menu)').each(function(){$(this).css('max-height');$(this).css('max-height',parseInt($(this).height()+parseInt($(this).css('padding-top'))*2+$maxSubMenuHeight)+'px')})}},50)}
return!1});if($('#header-outer[data-format="left-header"] nav .sf-menu > .current-menu-ancestor.menu-item-has-children > ul > li.current-menu-item').length>0){$('#header-outer[data-format="left-header"] nav .sf-menu > .current-menu-ancestor.menu-item-has-children > a').trigger('click')}}
$.DLMenu=function(options,element){this.$el=$(element);this._init(options)};$.DLMenu.defaults={animationClasses:{classin:'dl-animate-in-1',classout:'dl-animate-out-1'},onLevelClick:function(){return!1},onLinkClick:function(){return!1}};$.DLMenu.prototype={_init:function(options){this.options=$.extend(!0,{},$.DLMenu.defaults,options);this._config();var animEndEventNames={'WebkitAnimation':'webkitAnimationEnd','OAnimation':'oAnimationEnd','msAnimation':'MSAnimationEnd','animation':'animationend'},transEndEventNames={'WebkitTransition':'webkitTransitionEnd','MozTransition':'transitionend','OTransition':'oTransitionEnd','msTransition':'MSTransitionEnd','transition':'transitionend'};this.animEndEventName=animEndEventNames.animation+'.menu';this.transEndEventName=transEndEventNames.transition+'.menu',this.supportAnimations=!0,this.supportTransitions=!0;this._initEvents()},_config:function(){this.open=!1;this.$trigger=this.$el.children('.trigger');this.$menu=this.$el.children('ul.menu');this.$menuitems=this.$menu.find('li:not(.back) > a');this.$el.find('ul.sub-menu').prepend('<li class="back"><a href="#"> '+$offCanvasEl.attr('data-back-txt')+' </a></li>');this.$back=this.$menu.find('li.back')},_initEvents:function(){var self=this;this.$trigger.on('click.menu',function(){if(self.open){self._closeMenu()}else{self._openMenu()}
return!1});this.$menuitems.on('click.menu',function(event){var $item=$(this).parent('li'),$submenu=$item.children('ul.sub-menu');$('.fullscreen-alt .off-canvas-menu-container .clip-wrap, .fullscreen-alt .off-canvas-menu-container .clip-wrap span').css('transition-duration','0s');if($submenu.length>0){var $flyin=$submenu.clone().css('opacity',0).insertAfter(self.$menu),onAnimationEndFn=function(){self.$menu.off(self.animEndEventName).removeClass(self.options.animationClasses.classout).addClass('subview');$item.addClass('subviewopen').parents('.subviewopen:first').removeClass('subviewopen').addClass('subview');$flyin.remove();setTimeout(function(){$('.off-canvas-menu-container .menu > li').removeClass('no-pointer-events');$('.off-canvas-menu-container .clip-wrap, .off-canvas-menu-container .clip-wrap span').css('transition-duration','.45s')},300)};setTimeout(function(){$flyin.addClass(self.options.animationClasses.classin);self.$menu.addClass(self.options.animationClasses.classout);if(self.supportAnimations){self.$menu.on(self.animEndEventName,onAnimationEndFn)}else{onAnimationEndFn.call()}
self.options.onLevelClick($item,$item.children('a:first').text())});$item.parents('.off-canvas-menu-container').css('height',$item.parents('.off-canvas-menu-container').find('.menuwrapper .menu').height()).transition({'height':$flyin.height()},500,'easeInOutQuad');return!1}else{self.options.onLinkClick($item.find('> a'),event)}
OCM_close($item)});this.$back.on('click.menu',function(){var $this=$(this),$submenu=$this.parents('ul.sub-menu:first'),$item=$submenu.parent(),$flyin=$submenu.clone().insertAfter(self.$menu);var onAnimationEndFn=function(){self.$menu.off(self.animEndEventName).removeClass(self.options.animationClasses.classin);$flyin.remove()};setTimeout(function(){$flyin.addClass(self.options.animationClasses.classout);self.$menu.addClass(self.options.animationClasses.classin);if(self.supportAnimations){self.$menu.on(self.animEndEventName,onAnimationEndFn)}else{onAnimationEndFn.call()}
$item.removeClass('subviewopen');var $subview=$this.parents('.subview:first');if($subview.is('li')){$subview.addClass('subviewopen')}
$subview.removeClass('subview')});$item.parents('.off-canvas-menu-container').css('height',$item.parents('.off-canvas-menu-container').find('.menuwrapper .menu').height());setTimeout(function(){$item.parents('.off-canvas-menu-container').transition({'height':$item.parent().height()},500,'easeInOutQuad')},50);return!1})},closeMenu:function(){if(this.open){this._closeMenu()}},_closeMenu:function(){var self=this,onTransitionEndFn=function(){self.$menu.off(self.transEndEventName);self._resetMenu()};this.$menu.removeClass('menuopen');this.$menu.addClass('menu-toggle');this.$trigger.removeClass('active');if(this.supportTransitions){this.$menu.on(this.transEndEventName,onTransitionEndFn)}else{onTransitionEndFn.call()}
this.open=!1},openMenu:function(){if(!this.open){this._openMenu()}},_openMenu:function(){var self=this;$body.off('click').on('click.menu',function(){self._closeMenu()});this.$menu.addClass('menuopen menu-toggle').on(this.transEndEventName,function(){$(this).removeClass('menu-toggle')});this.$trigger.addClass('active');this.open=!0},_resetMenu:function(){this.$menu.removeClass('subview');this.$menuitems.removeClass('subview subviewopen')}};var logError=function(message){if(window.console){window.console.error(message)}};$.fn.dlmenu=function(options){if(typeof options==='string'){var args=Array.prototype.slice.call(arguments,1);this.each(function(){var instance=$.data(this,'menu');if(!instance){logError("cannot call methods on menu prior to initialization; "+"attempted to call method '"+options+"'");return}
if(!$.isFunction(instance[options])||options.charAt(0)==="_"){logError("no such method '"+options+"' for menu instance");return}
instance[options].apply(instance,args)})}else{this.each(function(){var instance=$.data(this,'menu');if(instance){instance._init()}else{instance=$.data(this,'menu',new $.DLMenu(options,this))}})}
return this};function fullscreenMenuInit(){$('#slide-out-widget-area .off-canvas-menu-container .menu').wrap('<div class="menu-wrap menuwrapper" />');$('#slide-out-widget-area .off-canvas-menu-container .menu').addClass('menuopen');var $ocmAnimationClassNum=($('#slide-out-widget-area.fullscreen-alt').length>0)?'4':'5';$('#slide-out-widget-area .off-canvas-menu-container .menu-wrap').dlmenu({animationClasses:{classin:'dl-animate-in-'+$ocmAnimationClassNum,classout:'dl-animate-out-'+$ocmAnimationClassNum}})}
function pageHeaderSlideInHeight(){var pageHeaderHeight=parseInt($pageHeaderBG.height());$('body[data-aie="slide-down"] #page-header-wrap:not(.fullscreen-header)').css('height',pageHeaderHeight+'px')}
function pageHeaderAfterLoad(){if($('#header-outer[data-transparent-header="true"]').length>0){$('#page-header-bg[data-parallax="1"]').css({'top':nectarDOMInfo.adminBarHeight})}else{if($('body[data-header-resize="0"]').length==0&&$('body.material').length==0){$('#page-header-bg[data-parallax="1"]').css({'top':($('#page-header-wrap').offset().top)+'px'})}}
if($('#ajax-content-wrap').length==0||!$body.hasClass('ajax-loaded')){$('#page-header-bg[data-parallax="1"]').animate({'opacity':1},350,'easeInCubic')}else if($('#ajax-content-wrap').length==1){$('#page-header-bg[data-parallax="1"]').css({'opacity':1})}
$('#page-header-bg[data-parallax="1"] .nectar-particles').append('<div class="fade-out" />')}
function pageHeaderUnload(){if(navigator.userAgent.indexOf('Safari')!=-1&&navigator.userAgent.indexOf('Chrome')==-1||navigator.userAgent.match(/(iPod|iPhone|iPad)/)){window.onunload=function(){pageHeaderInit();$('#page-header-bg[data-parallax="1"] .span_6').css({'opacity':1})}}}
function pageHeaderInit(){var $headerRemoveStickyness=($('body[data-hhun="1"]').length>0&&$('#header-outer[data-remove-fixed="1"]').length>0)?1:0;if($('#page-header-bg[data-parallax="1"]').length>0){var img=new Image(),pageHeaderHeight=parseInt($pageHeaderBG.height()),$initialImgCheck=extractUrl($('#page-header-bg[data-parallax="1"]').css('background-image'));if($initialImgCheck&&$initialImgCheck.indexOf('.')!==-1){img.onload=function(){pageHeaderAfterLoad()};img.src=extractUrl($('#page-header-bg[data-parallax="1"]').css('background-image'))}else{pageHeaderAfterLoad()}
if($('body[data-hhun="1"]').length>0&&!$('#header-outer[data-remove-fixed="1"]').length>0){$headerOuterEl.addClass('parallax-contained')}
window.addEventListener('scroll',function(){if(nectarDOMInfo.winW>1000){window.requestAnimationFrame(parallaxPageHeaderCalc)}},!1)}
var $pt_timeout=($('body[data-ajax-transitions="true"]').length>0&&$('#page-header-bg[data-animate-in-effect="slide-down"]').length>0)?350:0;if($pageHeaderBG.length>0){setTimeout(function(){pageHeaderSlideInHeight()},$pt_timeout);$('#page-header-bg[data-animate-in-effect="fade-in"]').addClass('loaded');var $initialImgCheckAscend=extractUrl($pageHeaderBG.css('background-image'));if($initialImgCheckAscend&&$initialImgCheckAscend.indexOf('.')!==-1){$pageHeaderBG.addClass('has-bg')}
$window.on('smartresize',pageHeaderSlideInHeight)}
function parallaxPageHeaderCalc(){var $scrollTop=nectarDOMInfo.scrollTop,$multiplier1=0.4,$multiplier2=0.09;if(!$body.hasClass('mobile')&&navigator.userAgent.match(/iPad/i)==null&&$('body.material-ocm-open').length==0){if(nectarDOMInfo.winW>1000){$('body:not("[data-header-format=\'left-header\']") #page-header-bg').css('top',$('#ajax-content-wrap').offset().top)}else{$('body:not("[data-header-format=\'left-header\']") #page-header-bg').css('top','0')}
if($('#page-header-bg.out-of-sight').length==0){if($headerRemoveStickyness){$pageHeaderBG.css({'transform':'translateY('+$scrollTop*-0.55+'px)'});$('#page-header-bg .span_6 .inner-wrap, body[data-button-style="rounded"] #page-header-bg .scroll-down-wrap, #page-header-bg[data-post-hs="default_minimal"] .author-section').css({'transform':'translateY('+$scrollTop*-0.45+'px)'})}else{$pageHeaderBG.css({'transform':'translateY('+$scrollTop*-$multiplier1+'px)'});$('#page-header-bg .span_6 .inner-wrap, body[data-button-style="rounded"] #page-header-bg .section-down-arrow, #page-header-bg[data-post-hs="default_minimal"] .author-section').css({'transform':'translateY('+$scrollTop*-$multiplier2+'px)'});$('#page-header-bg .span_6 .inner-wrap,  #page-header-bg[data-post-hs="default_minimal"] .author-section').css({'opacity':1-($scrollTop/(pageHeaderHeight-60))})}
if($('#page-header-bg .span_6 .inner-wrap').css('opacity')==0){$('#page-header-bg .span_6 .inner-wrap, #page-header-bg .portfolio-filters').hide()}else{$('#page-header-bg .span_6 .inner-wrap, #page-header-bg .portfolio-filters').show()}}
if(($scrollTop/(pageHeaderHeight+$('#header-space').height()+nectarDOMInfo.adminBarHeight))>1){$('#page-header-bg, .nectar-particles, #page-header-bg .fade-out').css('visibility','hidden').hide().addClass('out-of-sight')}else{$('#page-header-bg, .nectar-particles, #page-header-bg .fade-out').css('visibility','visible').show().removeClass('out-of-sight');pageHeaderHeight=parseInt($pageHeaderBG.height());$('#page-header-bg .container > .row').css('top',0)}}}
if($pageHeaderBG.length>0){pageHeaderUnload();if($('.nectar-box-roll').length==0){pageHeaderTextEffectInit()}}}
function pageHeaderTextEffectMarkup(){$pageHeaderBG.each(function(){if($(this).attr('data-text-effect')=='rotate_in'){var $topHeading='none';if($(this).find('.span_6 h1').length>0){$topHeading='h1'}
if($topHeading!='none'){var $selector=($(this).find('.nectar-particles').length>0)?'.inner-wrap.shape-1':'.span_6';$(this).find($selector).find($topHeading).addClass('top-heading').contents().filter(function(){return this.nodeType===3&&typeof this.data!='undefined'&&this.data.replace(/\s+/,"")}).wrap('<span class="wraped"></span>');$(this).find($selector).find('.wraped').each(function(){var textNode=$(this),text=textNode.text().split(' '),replace='';$.each(text,function(index,value){if(value.replace(/\s+/,"")){replace+='<span class="wraped"><span>'+value+'</span></span> '}});textNode.replaceWith($(replace))})}}})}
function pageHeaderTextEffect(){if($('#page-header-bg .nectar-particles').length==0&&$('#page-header-bg[data-text-effect="none"]').length==0||$('.nectar-box-roll').length>0&&$('#page-header-bg .nectar-particles').length==0){var $selector=($('.nectar-box-roll').length==0)?'#page-header-bg .span_6':'.nectar-box-roll .overlaid-content .span_6';$($selector).find('.wraped').each(function(i){$(this).find('span').delay(i*370).transition({rotateX:'0','opacity':1,y:0},400,'easeOutQuad')});setTimeout(function(){$($selector).find('.inner-wrap > *:not(.top-heading)').each(function(i){$(this).delay(i*370).transition({rotateX:'0','opacity':1,y:0},650,'easeOutQuad')});$('.scroll-down-wrap, .scroll-down-wrap .section-down-arrow').removeClass('hidden')},$($selector).find('.wraped').length*370)}}
function pageHeaderTextEffectInit(){pageHeaderTextEffectMarkup();var $effectTimeout=($loadingScreenEl.length>0)?800:0;if($('#page-header-bg .nectar-video-wrap video').length==0){setTimeout(pageHeaderTextEffect,$effectTimeout)}}
function midnightInit(){if($('#header-outer[data-permanent-transparent="1"]').length>0&&$('body[data-bg-header="true"]').length>0){if($('.container-wrap div[data-midnight]').length==0){$('.container-wrap').attr('data-midnight','dark')}
var $midnightCompatArr=[];$('div[data-midnight]').each(function(){if($(this).attr('data-midnight')=='light'&&$(this).parents('.pum-content').length==0||$(this).attr('data-midnight')=='dark'&&$(this).parents('.pum-content').length==0){if($(this).is('#page-header-bg')&&$(this).parents('#page-header-wrap[data-midnight]').length>0){}else{$midnightCompatArr.push($(this))}}});if($midnightCompatArr.length>0){$.each($midnightCompatArr,function(k,v){if(v.attr('data-midnight')=='light'||v.attr('data-midnight')=='dark'){var $that=v;var waypoint=new Waypoint({element:$that,handler:function(direction){if($('body.material-ocm-open').length>0){return}
var $textColor;if(direction=='down'){$textColor=($that.attr('data-midnight')=='light')?'':'dark-slide';$headerOuterEl.removeClass('dark-slide').addClass($textColor)}else{var $prevMidItem;if(k-1>=0){$prevMidItem=k-1}else{$prevMidItem=k}
$textColor=($midnightCompatArr[$prevMidItem].attr('data-midnight')=='light')?'':'dark-slide';$headerOuterEl.removeClass('dark-slide').addClass($textColor)}},offset:$headerOuterEl.height()})}})}}}
function nectarBoxRollInit(){if($('.nectar-box-roll').length>0&&typeof NectarBoxRoll!=='undefined'){pageHeaderTextEffectInit();nectarBoxRoll=new NectarBoxRoll(nectarDOMInfo,waypoints,midnightInit,pageLoadHash,resizeVideoToCover)}}
function waypoints(){rowBGAnimations();columnBGAnimations();colAndImgAnimations();progressBars();dividers();iconList();animatedTitles();highlightedText();imageWithHotspots();clientsFadeIn();splitLineHeadings();svgAnimations();milestoneInit();nectarFancyUlInit();owl_carousel_animate();headerRowColorInheritInit();morphingOutlines();animatedColBorders();foodMenuItems();vcWaypoints()}
function salientPageBuilderElInit(){flexsliderInit();flickityLazyInit();setTimeout(flickityInit,100);twentytwentyInit();standardCarouselInit();productCarouselInit();clientsCarouselInit();carouselfGrabbingClass();setTimeout(tabbedInit,60);accordionInit();largeIconHover();nectarIconMatchColoring();coloredButtons();ctaLinkBG();teamMemberFullscreen();flipBoxInit();owlCarouselInit();mouseParallaxInit();ulCheckmarks();nectarFancyUlIcons();nectarFancyBoxHover();nectarVideoLightbox();nectarKeyframeAssist();morphingOutlinesInit();nectarPostGridInit();cascadingImageInit();imageWithHotspotEvents();pricingTableHeight();pageSubmenuInit();nectarLiquidBGs();nectarTestimonialSliders();nectarTestimonialSlidersEvents();recentPostsTitleOnlyEqualHeight();recentPostsInit();parallaxItemHoverEffect();fsProjectSliderInit();postMouseEvents();masonryPortfolioInit();masonryBlogInit();portfolioCustomColoring();searchResultMasonryInit();stickySidebarInit();portfolioSidebarFollow();splitLineHeadingInit()}
function wooQauntityBtns(){jQuery(document.body).on('updated_cart_totals',function(){if($('.plus').length==0){$('div.quantity:not(.buttons_added), td.quantity:not(.buttons_added)').addClass('buttons_added').append('<input type="button" value="+" class="plus" />').prepend('<input type="button" value="-" class="minus" />')}});if($('.plus').length==0){$('div.quantity:not(.buttons_added), td.quantity:not(.buttons_added)').addClass('buttons_added').append('<input type="button" value="+" class="plus" />').prepend('<input type="button" value="-" class="minus" />');$(document).on('click','.plus, .minus',function(){var $qty=$(this).closest('.quantity').find('.qty'),currentVal=parseFloat($qty.val()),max=parseFloat($qty.attr('max')),min=parseFloat($qty.attr('min')),step=$qty.attr('step');if(!currentVal||currentVal===''||currentVal==='NaN'){currentVal=0}
if(max===''||max==='NaN'){max=''}
if(min===''||min==='NaN'){min=0}
if(step==='any'||step===''||step===undefined||parseFloat(step)==='NaN'){step=1}
if($(this).is('.plus')){if(max&&(max==currentVal||currentVal>max)){$qty.val(max)}else{$qty.val(currentVal+parseFloat(step))}}else{if(min&&(min==currentVal||currentVal<min)){$qty.val(min)}else if(currentVal>0){$qty.val(currentVal-parseFloat(step))}}
$qty.trigger('change')})}}
function wooCommerceEvents(){var wooCartTimeout;$body.on('click','.product .add_to_cart_button',function(){var $productHeading=($(this).parents('li').find('h2').length>0)?'h2':'h3',productToAdd=$(this).parents('li').find($productHeading).text();$('#header-outer .cart-notification span.item-name').html(productToAdd)});$body.on('mouseenter','#header-outer .cart-notification',function(){$(this).hide();$('#header-outer .widget_shopping_cart').addClass('open').stop(!0,!0).show();$('#header-outer .cart_list').stop(!0,!0).show();clearTimeout(wooCartTimeout)});var $headerCartSelector='#header-outer .nectar-woo-cart';if($($headerCartSelector).length>0){$($headerCartSelector).hoverIntent(function(){$('#header-outer .widget_shopping_cart').addClass('open').stop(!0,!0).show();$('#header-outer .cart_list').stop(!0,!0).show();clearTimeout(wooCartTimeout);$('#header-outer .cart-notification').hide()})}
$body.on('mouseleave',$headerCartSelector,function(){var $that=$(this);setTimeout(function(){if(!$that.is(':hover')){$('#header-outer .widget_shopping_cart').removeClass('open').stop(!0,!0).fadeOut(300);$('#header-outer .cart_list').stop(!0,!0).fadeOut(300)}},200)});if($('#header-outer[data-cart="false"]').length==0){$body.on('added_to_cart',shopping_cart_dropdown_show);$body.on('added_to_cart',shopping_cart_dropdown);$body.on('removed_from_cart',wooCartImgPos)}
function shopping_cart_dropdown(){if(!$('.widget_shopping_cart .widget_shopping_cart_content .cart_list .empty').length&&$('.widget_shopping_cart .widget_shopping_cart_content .cart_list').length>0){$('.cart-menu-wrap').addClass('has_products');$('header#top nav > ul, #search-outer #search #close a, header#top .span_9 >.slide-out-widget-area-toggle').addClass('product_added');if(!$('.cart-menu-wrap').hasClass('static')){$('.cart-menu-wrap, #mobile-cart-link').addClass('first-load')}
wooCartImgPos()}}
function shopping_cart_dropdown_show(e){clearTimeout(wooCartTimeout);if(!$('.widget_shopping_cart .widget_shopping_cart_content .cart_list .empty').length&&$('.widget_shopping_cart .widget_shopping_cart_content .cart_list').length>0&&typeof e.type!='undefined'){if($('#header-outer .cart-notification .item-name').length>0&&$('#header-outer .cart-notification .item-name').text().length==0){return}
if(!$('#header-outer .cart-menu-wrap').hasClass('has_products')){setTimeout(function(){$('#header-outer .cart-notification').fadeIn(400)},400)}else if(!$('#header-outer .cart-notification').is(':visible')){$('#header-outer .cart-notification').fadeIn(400)}else{$('#header-outer .cart-notification').show()}
wooCartTimeout=setTimeout(hideCart,2700)}}
function hideCart(){$('#header-outer .cart-notification').stop(!0,!0).fadeOut()}
function checkForWooItems(){var checkForCartItems=setInterval(shopping_cart_dropdown,250);setTimeout(function(){clearInterval(checkForCartItems)},4500)}
function wooCartImgPos(){$('#header-outer .widget_shopping_cart .cart_list li, #slide-out-widget-area .widget_shopping_cart .cart_list li').each(function(){if($(this).find('> img').length==0&&$(this).find('.product-meta').length==0){var productCartImgLinkSrc=($(this).find('> a[href]:not(.remove)').length>0)?$(this).find('> a[href]:not(.remove)').attr('href'):'';var productCartImg=$(this).find('> a > img').clone();$(this).wrapInner('<div class="product-meta" />');$(this).prepend(productCartImg);if(productCartImgLinkSrc.length>0){productCartImg.wrap('<a href="'+productCartImgLinkSrc+'"></a>')}}})}
if($('#header-outer[data-cart="false"]').length==0){checkForWooItems()}
function nectarAccountPageTabs(){if($('body.woocommerce-account #customer_login').length==0){return}
$('.woocommerce-account .woocommerce > #customer_login').prepend('<div class="nectar-form-controls" />');$('.woocommerce-account .woocommerce > #customer_login > div:not(.nectar-form-controls)').each(function(){var $title=$(this).find('> h2').text();$('#customer_login .nectar-form-controls').append('<div class="control">'+$title+'</div>')});$('.woocommerce-account .woocommerce > #customer_login .nectar-form-controls .control').on('click',function(){$('.woocommerce-account .woocommerce > #customer_login .nectar-form-controls .control').removeClass('active');$(this).addClass('active');var formIndex=$(this).index()+1;$('#customer_login div[class*="u-column"]').hide();$('#customer_login div[class*="u-column"].col-'+formIndex).show();setTimeout(function(){$('#customer_login div[class*="u-column"]').removeClass('visible');$('#customer_login div[class*="u-column"].col-'+formIndex).addClass('visible')},30)});$('.woocommerce-account .woocommerce > #customer_login .nectar-form-controls .control:nth-child(1)').trigger('click')}
nectarAccountPageTabs();$body.on('mouseover','.text_on_hover .product-wrap, .text_on_hover > a:first-child',function(){$(this).parent().addClass('hovered')});$body.on('mouseout','.text_on_hover .product-wrap, .text_on_hover > a:first-child',function(){$(this).parent().removeClass('hovered')});if($('.material.product').length>0||$('.minimal.product').length>0||$('.nectar-fancy-box[data-style="parallax_hover"]').length>0||$('.nectar-category-grid[data-shadow-hover="yes"]').length>0){var $productZindex=101;$body.on('mouseenter','.material.product, .minimal.product, .nectar-fancy-box[data-style="parallax_hover"], .nectar-category-grid[data-shadow-hover="yes"] .nectar-category-grid-item',function(){$productZindex++;$(this).css('z-index',$productZindex+1)});$body.on('mouseleave','.material.product, .minimal.product, .nectar-fancy-box[data-style="parallax_hover"], .nectar-category-grid[data-shadow-hover="yes"] .nectar-category-grid-item',function(){var $that=$(this);setTimeout(function(){if(!$that.is(':hover')){$that.css('z-index',100)}},350)});setInterval(function(){if($('.nectar-fancy-box[data-style="parallax_hover"]:hover').length>0||$('.minimal.product:hover').length>0){return}
$('.material.product:not(:hover), .minimal.product:not(:hover), .nectar-fancy-box[data-style="parallax_hover"]:not(:hover), .nectar-category-grid[data-shadow-hover="yes"] .nectar-category-grid-item:not(:hover)').css('z-index',100);$productZindex=101},10000)}
function minimalProductHover(){$('.products .classic .product-wrap .add_to_cart_button').wrapInner('<span />');$('.products .classic .product-wrap .add_to_cart_button').prepend('<i class="normal icon-salient-cart"></i>');$body.on('mouseover','.products .minimal.product',function(){minimalProductCalc($(this))});$body.on('mouseleave','.products .minimal.product',function(){$(this).find('.background-color-expand').css({'transform':'scale(1)'})});$('.products .minimal.product').each(function(){if($(this).is(':hover')){$(this).trigger('mouseover')}})}
function minimalProductCalc(el){var $item=el,$itemWidth=$item.width(),$itemHeight=$item.height(),$wChange=(parseInt($itemWidth)+40)/parseInt($itemWidth),$hChange=(parseInt($itemHeight)+40)/parseInt($itemHeight);$item.addClass('hover-bound');$item.find('.background-color-expand').css({'transform':'scale('+$wChange+','+$hChange+') translateY(0px)'})}
minimalProductHover();$('.woocommerce #sidebar .widget.woocommerce').each(function(){if($(this).find('> h4').length==0){$(this).addClass('no-widget-title')}});$body.on('click','#sidebar .widget.woocommerce:not(.widget_price_filter) h4',function(){if($window.width()<1000){if($(this).parent().is('.widget_product_tag_cloud')){$(this).parent().find('> div').slideToggle()}
if($(this).parent().is('.woocommerce-widget-layered-nav')&&$(this).parent().find('> .woocommerce-widget-layered-nav-dropdown').length>0){$(this).parent().find('> .woocommerce-widget-layered-nav-dropdown').slideToggle()}
$(this).parent().find('> ul').slideToggle();$(this).parent().toggleClass('open-filter')}});$body.on('mouseenter','#header-outer [data-cart-style="slide_in"] .cart-menu-wrap',openRightCart);function openRightCart(){if($('.nectar-slide-in-cart ul.cart_list li:not(.empty)').length>0){$('.nectar-slide-in-cart').addClass('open');$window.on('mousemove.rightCartOffsetCheck',closeCartCheck)}}
function closeCartCheck(e){var $windowWidth=$window.width();if(e.clientX<$windowWidth-370-$bodyBorderWidth){$window.off('mousemove.rightCartOffsetCheck',closeCartCheck);$('.nectar-slide-in-cart').removeClass('open')}}
wooQauntityBtns()}
function navigationSearchInit(){var $placeholder=($('#search-outer #search input[type=text][data-placeholder]').length>0)?$('#search-outer #search input[type=text]').attr('data-placeholder'):'';if($body.hasClass('material')&&$('#header-outer .bg-color-stripe').length==0){$headerOuterEl.append('<div class="bg-color-stripe" />')}
$body.on('click','#search-btn a',function(){return!1});$body.on('click','#search-btn a:not(.inactive), #header-outer .mobile-search',function(){if($(this).hasClass('open-search')){return!1}
if($body.hasClass('original')&&$('.slide-out-widget-area-toggle.mobile-icon a.open').length>0){$('.slide-out-widget-area-toggle.mobile-icon a').addClass('non-human-allowed').trigger('click');setTimeout(function(){$('.slide-out-widget-area-toggle.mobile-icon a').removeClass('non-human-allowed')},100)}
if($body.hasClass('ascend')||$('body[data-header-format="left-header"]').length>0&&$('body.material').length==0){$('#search-outer > #search form, #search-outer #search .span_12 span, #search-outer #search #close').css('opacity',0);$('#search-outer > #search form').css('transform','translateY(-30px)');$('#search-outer #search .span_12 span').css('transform','translateY(20px)');$('#search-outer').show();$('#search-outer').stop().transition({scale:'1,0','opacity':1},0).transition({scale:'1,1'},700,'cubic-bezier(0.2, 1, 0.3, 1)');$('#search-outer > #search form').delay(350).transition({'opacity':1,'transform':'translateY(0)'},700,'cubic-bezier(0.2, 1, 0.3, 1)');$('#search-outer #search #close').delay(500).transition({'opacity':1},700,'cubic-bezier(0.2, 1, 0.3, 1)');$('#search-outer #search .span_12 span').delay(450).transition({'opacity':1,'transform':'translateY(0)'},700,'cubic-bezier(0.2, 1, 0.3, 1)')}else if(!$body.hasClass('material')){$('#search-outer').stop(!0).fadeIn(600,'easeOutExpo')}else{$('#header-outer[data-transparent-header="true"] .bg-color-stripe').css('transition','');$('#search-outer, #ajax-content-wrap').addClass('material-open');$headerOuterEl.addClass('material-search-open');$('#fp-nav').addClass('material-ocm-open')}
setTimeout(function(){$('#search input[type=text]').trigger('focus');if($('#search input[type=text]').attr('value')==$placeholder){$('#search input[type=text]').setCursorPosition(0)}},300);$(this).toggleClass('open-search');$('.slide-out-widget-area-toggle a:not(#toggle-nav).open:not(.animating)').trigger('click');return!1});$('body:not(.material)').on('keydown','#search input[type=text]',function(){if($(this).attr('value')==$placeholder){$(this).attr('value','')}});$('body:not(.material)').on('keyup','#search input[type=text]',function(){if($(this).attr('value')==''){$(this).attr('value',$placeholder);$(this).setCursorPosition(0)}});$body.on('click','#close',function(){closeSearch();$searchButtonEl.removeClass('open-search');$('#header-outer .mobile-search').removeClass('open-search');return!1});$('body:not(.material)').on('blur','#search-box input[type=text]',function(){closeSearch();$searchButtonEl.removeClass('open-search');$('#header-outer .mobile-search').removeClass('open-search')});$('body.material').on('click','#ajax-content-wrap',function(e){if(e.originalEvent!==undefined){closeSearch();$searchButtonEl.removeClass('open-search');$('#header-outer .mobile-search').removeClass('open-search')}});if($('body.material').length>0){$(document).on('keyup',function(e){if(e.keyCode==27){closeSearch();$searchButtonEl.removeClass('open-search');if($('.ocm-effect-wrap.material-ocm-open').length>0){$('.slide-out-widget-area-toggle.material-open a').trigger('click')}}})}
function closeSearch(){if($body.hasClass('ascend')||$('body[data-header-format="left-header"]').length>0&&$('body.material').length==0){$('#search-outer').stop().transition({'opacity':0},300,'cubic-bezier(0.2, 1, 0.3, 1)');$searchButtonEl.addClass('inactive');setTimeout(function(){$('#search-outer').hide();$searchButtonEl.removeClass('inactive')},300)}else if($('body.material').length==0){$('#search-outer').stop(!0).fadeOut(450,'easeOutExpo')}
if($body.hasClass('material')){$('#ajax-content-wrap').removeClass('material-open');$headerOuterEl.removeClass('material-search-open');$('#search-outer').removeClass('material-open');$('#fp-nav').removeClass('material-ocm-open')}}}
function centeredNavBottomBarReposition(){var $headerOuter=$headerOuterEl,$headerSpan9=$('#header-outer[data-format="centered-menu-bottom-bar"] header#top .span_9'),$headerSpan3=$('#header-outer[data-format="centered-menu-bottom-bar"] header#top .span_3'),$secondaryHeader=$headerSecondaryEl,$headerBtns=$headerSpan3.find('nav >ul.buttons'),$navLogoMargin=parseInt($('body.material #header-outer').attr('data-padding')),$navLogoHeight=parseInt($('body.material #header-outer').attr('data-logo-height')),$triggerCondition=($navLogoMargin*2)+$navLogoHeight-parseInt(nectarDOMInfo.adminBarHeight)+parseInt(nectarDOMInfo.secondaryHeaderHeight);if($secondaryHeader.length>0){if($('#header-outer[data-remove-fixed="1"]').length==0&&$('#header-outer[data-condense="true"]').length>0){setTimeout(function(){nectarDOMInfo.secondaryHeaderHeight=$headerSecondaryEl.outerHeight()},50)}}
function condenseCustomBreakPointHelper(){var $withinCustomBreakpoint=mobileBreakPointCheck();if($withinCustomBreakpoint){$headerOuterEl.addClass('within-custom-breakpoint')}else{$headerOuterEl.removeClass('within-custom-breakpoint')}}
if($('#header-outer[data-condense="true"]').length>0){$window.on('scroll.centeredNavCondense',centeredNavBottomFixed_Scroll);$window.trigger('scroll');$window.on('resize',function(){if(nectarDOMInfo.winW<1000){$headerOuter.addClass('force-condense-remove');$window.off('scroll.centeredNavCondense')}});$window.smartresize(function(){condenseCustomBreakPointHelper();if(nectarDOMInfo.winW>=1000){if($headerOuter.hasClass('force-condense-remove')){centeredNavBottomFixed_Scroll();$headerOuter.removeClass('force-condense-remove');setTimeout(function(){if(nectarDOMInfo.scrollTop>=$triggerCondition){$headerOuter.addClass('force-condense');centeredNavBottomFixed_Scroll();$headerOuter.removeClass('force-condense')}
$window.on('scroll.centeredNavCondense',centeredNavBottomFixed_Scroll)},200)}}});condenseCustomBreakPointHelper()}
function centeredNavBottomFixed_Scroll(){if(nectarDOMInfo.winW<1000||$('body.material-ocm-open').length>0||$('#header-outer[data-has-menu="true"][data-format="centered-menu-bottom-bar"] .span_9').css('display')=='none'){return}
$bodyBorderTop=($bodyBorderTop.length>0&&nectarDOMInfo.secondaryHeaderHeight>0)?$bodyBorderTop.height():0;if($headerOuter.hasClass('force-condense')||!$headerOuter.hasClass('fixed-menu')&&nectarDOMInfo.scrollTop>=$triggerCondition){var amountToMove=(parseInt($headerSpan9.position().top)-$navLogoMargin-parseInt(nectarDOMInfo.adminBarHeight))+parseInt(nectarDOMInfo.secondaryHeaderHeight)-$bodyBorderTop;if($('#header-outer[data-megamenu-rt="1"]').length>0&&$('#header-outer .megamenu').length>0&&$('#header-outer[data-transparent-header="true"]').length>0){$headerOuterEl.removeClass('no-transition')}
$headerOuter.addClass('fixed-menu').removeClass('transparent').css({'top':'-'+amountToMove+'px','position':'fixed'});var $headerNavBarOffset=$('header#top .span_9 nav >ul').offset().top;var $headerButtonsOffset=$headerBtns.offset().top;var $headerButtonsHeight=($headerSpan9.find('.sf-menu > li > a').length>0)?(20-parseInt($headerSpan9.find('.sf-menu > li > a').height()))/2:2;$headerBtns.css('transform','translateY('+(parseInt($headerNavBarOffset)-parseInt($headerButtonsOffset)-$headerButtonsHeight-1)+'px)');$headerBtns.find('.nectar-woo-cart').css('height',$headerOuter.height()+parseInt($headerOuter.css('top'))-parseInt(nectarDOMInfo.adminBarHeight))}else if($headerOuter.hasClass('force-condense-remove')||$headerOuter.hasClass('fixed-menu')&&nectarDOMInfo.scrollTop<$triggerCondition){$headerOuter.removeClass('fixed-menu').css({'top':'0','position':'absolute'});$headerBtns.css('transform','translateY(0px)');$headerBtns.find('.nectar-woo-cart').css('height','');if($('#header-outer.transparent').length==0){if($('#header-outer[data-megamenu-rt="1"]').length>0&&$('#header-outer .megamenu').length>0){$headerOuterEl.removeClass('no-transition')}
if($('#header-outer[data-megamenu-rt="1"]').length>0&&$('#header-outer[data-transparent-header="true"]').length>0&&$('#header-outer .megamenu').length>0){if($headerOuterEl.attr('data-transparent-header')=='true'&&$('.nectar-box-roll').length==0&&$('.megamenu.sfHover').length==0){$headerOuterEl.addClass('transparent');$headerOuterEl.removeClass('no-transition')}else if($headerOuterEl.attr('data-transparent-header')=='true'&&$('.nectar-box-roll').length==0&&$('.megamenu.sfHover').length>0){$headerOuterEl.addClass('no-transition')}}else{if($headerOuterEl.attr('data-transparent-header')=='true'&&$('.nectar-box-roll').length==0){$headerOuterEl.addClass('transparent')}}}}}}
function centeredNavBottomBarInit(){if($('#header-outer[data-format="centered-menu-bottom-bar"]').length>0){centeredNavBottomBarReposition()}}
function centeredLogoMargins(){if(nectarDOMInfo.winW>1000){var $navItemLength=$('#header-outer[data-format="centered-logo-between-menu"] #top nav > .sf-menu:not(.buttons) > li').length;if($('#header-outer #social-in-menu').length>0){$navItemLength--}
var $centerLogoWidth,$extraMenuSpace;if($('#header-outer #top .row .col.span_3 #logo img:visible').length==0){$centerLogoWidth=parseInt($('#header-outer #top .row .col.span_3').width())}else{$centerLogoWidth=parseInt($('#header-outer #top .row .col.span_3 img:visible').width())}
if($('#header-outer[data-lhe="animated_underline"]').length>0){$extraMenuSpace=parseInt($('header#top nav > ul > li:first-child > a').css('margin-right'))}else{$extraMenuSpace=parseInt($('header#top nav > ul > li:first-child > a').css('padding-right'))}
if($extraMenuSpace>30){$extraMenuSpace+=45}else if($extraMenuSpace>20){$extraMenuSpace+=40}else{$extraMenuSpace+=30}
if(!$body.hasClass('rtl')){$('#header-outer[data-format="centered-logo-between-menu"] #top nav > .sf-menu:not(.buttons) > li:nth-child('+Math.floor($navItemLength/2)+')').css({'margin-right':($centerLogoWidth+$extraMenuSpace)+'px'}).addClass('menu-item-with-margin')}else{$('#header-outer[data-format="centered-logo-between-menu"] #top nav > .sf-menu:not(.buttons) > li:nth-child('+Math.floor($navItemLength/2)+')').css({'margin-left':($centerLogoWidth+$extraMenuSpace)+'px'}).addClass('menu-item-with-margin')}
var $leftMenuWidth=0;var $rightMenuWidth=0;$('#header-outer[data-format="centered-logo-between-menu"] #top nav > .sf-menu:not(.buttons) > li:not(#social-in-menu)').each(function(i){if(i+1<=Math.floor($navItemLength/2)){$leftMenuWidth+=$(this).width()}else{$rightMenuWidth+=$(this).width()}});var $menuDiff=Math.abs($rightMenuWidth-$leftMenuWidth);if($leftMenuWidth>$rightMenuWidth||($body.hasClass('rtl')&&$leftMenuWidth<$rightMenuWidth)){$('#header-outer #top .row > .col.span_9').css('padding-right',$menuDiff)}else{$('#header-outer #top .row > .col.span_9').css('padding-left',$menuDiff)}
$('#header-outer[data-format="centered-logo-between-menu"] nav').css('visibility','visible')}else if($('#header-outer[data-format="centered-logo-between-menu"]').length>0&&nectarDOMInfo.winW<1000){$('#header-outer .row > .col.span_9').css({'padding-right':'0','padding-left':'0'})}}
function centeredLogoHeaderInit(){if($('#header-outer[data-format="centered-logo-between-menu"]').length>0){if(!usingLogoImage){centeredLogoMargins()}else if(usingLogoImage&&$('#header-outer[data-format="centered-logo-between-menu"]').length>0&&$('header#top #logo img:first[src]').length>0){var tempLogoImg=new Image();tempLogoImg.src=$('header#top #logo img:first').attr('src');tempLogoImg.onload=function(){centeredLogoMargins()}}
$window.on('smartresize',centeredLogoMargins)}}
function headerNavPreInit(){if(nectarDOMInfo.usingMobileBrowser&&$('#header-outer[data-remove-fixed="1"]').length==0){$body.attr('data-hhun','0')}
if($('#nectar_fullscreen_rows').length>0){($headerOuterEl.attr('data-permanent-transparent','false'))}
if(nectarDOMInfo.usingMobileBrowser&&$('#header-outer[data-mobile-fixed="1"]').length>0&&$('#header-outer[data-transparent-header="true"]').length==0){$('#header-space').css('height',$headerOuterEl.outerHeight())}}
function hhunHeaderEffect(){var previousScroll=0,menuOffset=250,hideShowOffset=6;function hhunCalcs(){$headerOuterEl.addClass('detached');var currentScroll=nectarDOMInfo.scrollTop,scrollDifference=Math.abs(currentScroll-previousScroll);if($('body.animated-scrolling').length>0&&$('#header-outer.detached').length>0||$('body.no-scroll').length>0){if(nectarDOMInfo.winW>999){if(currentScroll>menuOffset){previousScroll=nectarDOMInfo.scrollTop;currentScroll=nectarDOMInfo.scrollTop}
requestAnimationFrame(hhunCalcs);return}}
if($('body.material-ocm-open').length>0||$('#search-outer.material-open').length>0){if(nectarDOMInfo.winW>999){requestAnimationFrame(hhunCalcs);return}}
if($('#header-outer[data-mobile-fixed="false"]').length>0&&$('body.mobile').length>0){$headerOuterEl.removeClass('detached');return}
if(!$headerOuterEl.hasClass('side-widget-open')&&!$('#header-outer .slide-out-widget-area-toggle a').hasClass('animating')){var heightToAdjust;if(currentScroll>1){if($('#header-outer[data-permanent-transparent="1"]').length==0){$headerOuterEl.removeClass('transparent');$headerOuterEl.addClass('scrolling')}
if($headerSecondaryEl.length>0){if(currentScroll>menuOffset){$headerSecondaryEl.addClass('hide-up');$headerOuterEl.css('transform','translateY(-'+nectarDOMInfo.secondaryHeaderHeight+'px)')}else{$headerSecondaryEl.removeClass('hide-up');$headerOuterEl.css('transform','0px)')}}}
if(currentScroll>menuOffset){if(!$headerOuterEl.hasClass('detached')){$headerOuterEl.addClass('detached').removeClass('parallax-contained')}
$headerOuterEl.removeClass('no-transition');if(scrollDifference>=hideShowOffset){if(currentScroll>previousScroll){if(!$headerOuterEl.hasClass('invisible')){$headerOuterEl.addClass('invisible').removeClass('at-top');if($(".sf-menu").length>0&&$().superfish){$(".sf-menu").superfish('hide');$('header#top nav > ul.sf-menu > li.menu-item-over').removeClass('menu-item-over')}}
$('.page-submenu.stuck').css('transform','translateY(0px)').addClass('header-not-visible')}else{if($headerOuterEl.hasClass('invisible')){$headerOuterEl.removeClass('invisible')}
heightToAdjust=$headerOuterEl.outerHeight();if($headerSecondaryEl.length>0){heightToAdjust-=nectarDOMInfo.secondaryHeaderHeight}
if($bodyBorderTop.length>0&&$('body.mobile').length==0){$bodyBorderSizeToRemove=($bodyBorderHeaderColorMatch)?$bodyBorderTop.height():0;$('.page-submenu.stuck').css('transform','translateY('+(heightToAdjust-$bodyBorderSizeToRemove)+'px)').removeClass('header-not-visible')}else{$('.page-submenu.stuck').css('transform','translateY('+heightToAdjust+'px)').removeClass('header-not-visible')}}}}else{var $topDetachNum=($('#header-outer[data-using-secondary="1"]').length>0)?32:0;if($bodyBorderTop.length>0){$topDetachNum=($('#header-outer[data-using-secondary="1"]').length>0)?32+$bodyBorderTop.height():$bodyBorderTop.height()}
if(currentScroll<=$topDetachNum){$headerOuterEl.addClass('at-top').removeClass('invisible').removeClass('scrolling');if($('#header-outer[data-megamenu-rt="1"]').length>0&&$('#header-outer[data-transparent-header="true"]').length>0&&$('#header-outer .megamenu').length>0){if($('#header-outer[data-transparent-header="true"]').length>0&&$('.nectar-box-roll').length==0&&$('.megamenu.sfHover').length==0){$headerOuterEl.addClass('transparent').css('transform','translateY(0)').removeClass('no-transition')}else if($('.nectar-box-roll').length>0){$headerOuterEl.css('transform','translateY(0)').addClass('at-top-before-box')}}else{if($('#header-outer[data-transparent-header="true"]').length>0&&$('.nectar-box-roll').length==0){$headerOuterEl.addClass('transparent').css('transform','translateY(0)')}else if($('.nectar-box-roll').length>0){$headerOuterEl.css('transform','translateY(0)').addClass('at-top-before-box')}}
if($('#page-header-bg[data-parallax="1"]').length>0){$headerOuterEl.addClass('parallax-contained').css('transform','translateY(0)')}}}
if((nectarDOMInfo.winH+window.scrollY)>=document.body.offsetHeight){$headerOuterEl.removeClass('invisible');heightToAdjust=$headerOuterEl.outerHeight();if($headerSecondaryEl.length>0){heightToAdjust-=nectarDOMInfo.secondaryHeaderHeight}
if($bodyBorderTop.length>0&&$('body.mobile').length==0){$bodyBorderSizeToRemove=($bodyBorderHeaderColorMatch)?$bodyBorderTop.height():0;$('.page-submenu.stuck').css('transform','translateY('+(heightToAdjust-$bodyBorderSizeToRemove)+'px)').removeClass('header-not-visible')}else{$('.page-submenu.stuck').css('transform','translateY('+heightToAdjust+'px)').removeClass('header-not-visible')}}}
previousScroll=currentScroll;if(nectarDOMInfo.winW>999){requestAnimationFrame(hhunCalcs)}}
hhunCalcs()}
function smallNav(){var $offset=nectarDOMInfo.scrollTop,$windowWidth=nectarDOMInfo.winW,$scrollTriggerOffset=($body.is('.material'))?150:30;if($offset>$scrollTriggerOffset&&$windowWidth>=1000&&$('body.material-ocm-open').length==0){if($body.is('.material')){if($('#search-outer.material-open').length==0){$('#header-outer[data-transparent-header="true"] .bg-color-stripe').css('transition','none')}
if($headerSecondaryEl.length>0){$headerSecondaryEl.addClass('hide-up');$headerOuterEl.css('transform','translateY(-'+nectarDOMInfo.secondaryHeaderHeight+'px)')}}
if($('#header-outer[data-megamenu-rt="1"]').length>0&&$('#header-outer[data-transparent-header="true"]').length>0&&$('#header-outer .megamenu').length>0){if($headerOuterEl.attr('data-transparent-header')=='true'&&$('#header-outer.side-widget-open').length==0&&$('#header-outer[data-permanent-transparent="1"]').length==0&&$('.megamenu.sfHover').length==0){$headerOuterEl.removeClass('transparent');$headerOuterEl.removeClass('no-transition')}}else{if($headerOuterEl.attr('data-transparent-header')=='true'&&$('#header-outer.side-widget-open').length==0&&$('#header-outer[data-permanent-transparent="1"]').length==0){$headerOuterEl.removeClass('transparent')}}
$('#header-outer, #search-outer').addClass('small-nav');if($('#header-outer[data-full-width="true"][data-transparent-header="true"]').length>0&&$bodyBorderTop.length>0&&$bodyBorderHeaderColorMatch==!0){$('#header-outer[data-full-width="true"] header > .container').stop(!0,!0).animate({'padding':'0'},{queue:!1,duration:250,easing:'easeOutCubic'})}
if($('body.material').length>0){$('header#top nav > ul > li.menu-item-with-margin').stop(!0,!0).animate({'margin-right':(parseInt($('header#top nav > ul > li.menu-item-with-margin').css('margin-right'))-parseInt(logoShrinkNum)*3)+'px'},{queue:!1,duration:310,easing:'easeOutQuad'})}
if($('.nectar-box-roll').length>0&&$('#header-outer[data-permanent-transparent="1"]').length==0){$('#ajax-content-wrap').animate({'margin-top':(Math.floor(($logoHeight-logoShrinkNum)+(headerPadding*2)/1.8+nectarDOMInfo.adminBarHeight+nectarDOMInfo.secondaryHeaderHeight))},{queue:!1,duration:250,easing:'easeOutCubic'})}
$window.off('scroll.headerResizeEffect',smallNav);$window.on('scroll.headerResizeEffect',bigNav);$('#header-outer[data-transparent-header="true"]').css('transition','transform 0.3s ease, background-color 0.30s ease, opacity 0.3s ease, box-shadow 0.30s ease, margin 0.25s ease-out');$('#header-outer[data-transparent-header="true"] .cart-menu').css('transition','none');setTimeout(function(){$('#header-outer[data-transparent-header="true"]').css('transition','transform 0.3s ease, background-color 0.30s ease, opacity 0.3s ease, box-shadow 0.30s ease, border-color 0.30s ease, margin 0.25s ease-out');$('#header-outer[data-transparent-header="true"] .cart-menu').css('transition','border-color 0.30s ease')},300)}}
function bigNav(){var $offset=nectarDOMInfo.scrollTop,$windowWidth=nectarDOMInfo.winW,$scrollTriggerOffset=($body.is('.material'))?150:30;if($body.is('.material-ocm-open')){return!1}
if($offset<=$scrollTriggerOffset&&$windowWidth>=1000||$('.small-nav').length>0&&$('#ajax-content-wrap.no-scroll').length>0){$('#header-outer, #search-outer').removeClass('small-nav');if($('#header-outer[data-megamenu-rt="1"]').length>0&&$('#header-outer[data-transparent-header="true"]').length>0&&$('#header-outer .megamenu').length>0){if($headerOuterEl.attr('data-transparent-header')=='true'&&$('.nectar-box-roll').length==0&&$('.megamenu.sfHover').length==0){$headerOuterEl.addClass('transparent');$headerOuterEl.removeClass('no-transition')}}else{if($headerOuterEl.attr('data-transparent-header')=='true'&&$('.nectar-box-roll').length==0){$headerOuterEl.addClass('transparent')}}
if($('#header-outer[data-full-width="true"][data-transparent-header="true"]').length>0&&$bodyBorderTop.length>0&&$bodyBorderHeaderColorMatch==!0){$('#header-outer[data-full-width="true"] header > .container').stop(!0,!0).animate({'padding':'0 28px'},{queue:!1,duration:250,easing:'easeOutCubic'})}
if($('body.material').length>0){$('header#top nav > ul > li.menu-item-with-margin').stop(!0,!0).animate({'margin-right':(parseInt($('header#top nav > ul > li.menu-item-with-margin').css('margin-right'))+parseInt(logoShrinkNum)*3)+'px'},{queue:!1,duration:140,easing:'easeOutQuad'})}
if($headerSecondaryEl.length>0){$headerSecondaryEl.removeClass('hide-up');$headerOuterEl.removeClass('hide-up').css('transform','translateY(0%)')}
if($('.nectar-box-roll').length>0&&$('#header-outer[data-permanent-transparent="1"]').length==0){$('#ajax-content-wrap').animate({'margin-top':(Math.floor(($logoHeight)+(headerPadding*2)+nectarDOMInfo.adminBarHeight+nectarDOMInfo.secondaryHeaderHeight))},{queue:!1,duration:250,easing:'easeOutCubic'})}
$window.off('scroll.headerResizeEffect',bigNav);$window.on('scroll.headerResizeEffect',smallNav);$('#header-outer[data-transparent-header="true"]').css('transition','transform 0.3s ease, background-color 0.30s ease, opacity 0.3s ease, box-shadow 0.30s ease, margin 0.25s ease-out');$('#header-outer[data-transparent-header="true"] .cart-menu').css('transition','none');setTimeout(function(){$('#header-outer[data-transparent-header="true"]').css('transition','transform 0.3s ease, background-color 0.30s ease, opacity 0.3s ease, box-shadow 0.30s ease, border-color 0.30s ease, margin 0.25s ease-out');$('#header-outer[data-transparent-header="true"] .cart-menu').css('transition','border-color 0.30s ease')},300)}}
function opaqueCheck(){if($('#header-outer[data-format="centered-menu-bottom-bar"][data-condense="true"]').length>0&&!$headerOuterEl.hasClass('within-custom-breakpoint')){return}
if(nectarDOMInfo.scrollTop>0){if($('body.material').length>0){$headerOuterEl.addClass('scrolled-down');if($headerSecondaryEl.length>0&&nectarDOMInfo.winW>1000){$headerSecondaryEl.addClass('hide-up');$headerOuterEl.css('transform','translateY(-'+nectarDOMInfo.secondaryHeaderHeight+'px)')}}
if($headerOuterEl.attr('data-transparent-header')=='true'&&$('#header-outer[data-permanent-transparent="1"]').length==0){$headerOuterEl.removeClass('transparent').addClass('scrolled-down')}
$window.off('scroll.headerResizeEffectOpaque',opaqueCheck);$window.on('scroll.headerResizeEffectOpaque',transparentCheck)}}
function transparentCheck(){if($('#header-outer[data-format="centered-menu-bottom-bar"][data-condense="true"]').length>0&&!$headerOuterEl.hasClass('within-custom-breakpoint')){return}
if(nectarDOMInfo.scrollTop==0&&$('body.material-ocm-open').length==0){if($('#header-outer[data-megamenu-rt="1"]').length>0&&$('#header-outer[data-transparent-header="true"]').length>0&&$('#header-outer .megamenu').length>0){if($headerOuterEl.attr('data-transparent-header')=='true'&&$('.megamenu.sfHover').length==0){$headerOuterEl.addClass('transparent').removeClass('scrolled-down');$headerOuterEl.removeClass('no-transition')}else if($headerOuterEl.attr('data-transparent-header')=='true'){$headerOuterEl.removeClass('scrolled-down')}}else{if($headerOuterEl.attr('data-transparent-header')=='true'){$headerOuterEl.addClass('transparent').removeClass('scrolled-down')}}
if($('body.material').length>0){$headerOuterEl.removeClass('scrolled-down');if($headerSecondaryEl.length>0&&nectarDOMInfo.winW>1000){$headerSecondaryEl.removeClass('hide-up');$headerOuterEl.removeClass('hide-up').css('transform','translateY(0%)')}}
$window.off('scroll.headerResizeEffectOpaque',transparentCheck);$window.on('scroll.headerResizeEffectOpaque',opaqueCheck)}}
function mobileHeaderRAF(){if($('body.material-ocm-open').length>0){requestAnimationFrame(mobileHeaderRAF);return}
if(nectarDOMInfo.scrollTop>80){if(!$headerOuterEl.is('[data-permanent-transparent="1"]')){$headerOuterEl.removeClass('transparent')}
if(nectarDOMInfo.secondaryHeaderHeight>0){$headerSecondaryEl.addClass('hide-up');$headerOuterEl.css('transform','translateY(-'+nectarDOMInfo.secondaryHeaderHeight+'px)').addClass('hidden-secondary')}else{$headerOuterEl.removeClass('hidden-secondary')}}else{if($headerOuterEl.is('[data-transparent-header="true"]')){$headerOuterEl.addClass('transparent')}
if(nectarDOMInfo.secondaryHeaderHeight>0){$headerSecondaryEl.removeClass('hide-up');$headerOuterEl.css('transform','translateY(0px)')}
$headerOuterEl.removeClass('hidden-secondary')}
if(nectarDOMInfo.winW<1000){requestAnimationFrame(mobileHeaderRAF)}}
function bindScrollEffectsMobile(){if(nectarDOMInfo.winW>999){return}
$window.off('scroll.headerResizeEffect');$window.off('scroll.headerResizeEffectOpaque');$headerOuterEl.removeClass('scrolled-down').removeClass('detached').removeClass('invisible').removeClass('at-top').css('transform','none');if($('#header-outer[data-mobile-fixed="1"]').length>0){requestAnimationFrame(mobileHeaderRAF)}else if($headerOuterEl.attr('data-transparent-header')=='true'){$headerOuterEl.addClass('transparent')}
$window.off('smartresize.nectarNavScrollEffects');$window.on('smartresize.nectarNavScrollEffects',bindScrollEffectsDesktop)}
function bindScrollEffectsDesktop(){if(nectarDOMInfo.winW<1000){return}
if(headerResize==!0&&headerHideUntilNeeded!='1'){$window.off('scroll.headerResizeEffect');if($('#nectar_fullscreen_rows').length==0){$window.on('scroll.headerResizeEffect',smallNav)}else if($('#nectar_fullscreen_rows[data-mobile-disable="on"]').length>0&&nectarDOMInfo.usingMobileBrowser){$window.on('scroll.headerResizeEffect',smallNav)}}else if(headerHideUntilNeeded!='1'){$window.off('scroll.headerResizeEffectOpaque');$window.on('scroll.headerResizeEffectOpaque',opaqueCheck)}else if(headerHideUntilNeeded=='1'){if($('.nectar-box-roll').length>0){$headerOuterEl.addClass('at-top-before-box')}
if($('#header-outer[data-remove-fixed="1"]').length==0){hhunHeaderEffect()}}
if($('#header-outer[data-format="centered-menu-bottom-bar"][data-condense="true"]').length>0){if($headerSecondaryEl.length>0){$headerOuterEl.css('transform','')}
if(nectarDOMInfo.scrollTop>200&&!$headerOuterEl.hasClass('fixed-menu')){$headerOuterEl.addClass('fixed-menu')}}
$window.off('smartresize.nectarNavScrollEffects');$window.on('smartresize.nectarNavScrollEffects',bindScrollEffectsMobile)}
function headerNavScrollInit(){if($('#header-outer[data-remove-fixed="1"]').length==0&&nectarDOMInfo.winW>1000){if($(window).scrollTop()!=0&&$('#header-outer.transparent[data-permanent-transparent="false"]').length==1){$headerOuterEl.removeClass('transparent')}}
if($('#nectar_fullscreen_rows').length==0&&$('.nectar-box-roll').length==0){midnightInit()}
if(nectarDOMInfo.winW<1000&&$('.nectar-box-roll').length==0){bindScrollEffectsMobile();$window.on('smartresize.nectarNavScrollEffects',bindScrollEffectsMobile)}else{bindScrollEffectsDesktop();$window.on('smartresize.nectarNavScrollEffects',bindScrollEffectsDesktop)}}
function headerSpace(){if($('.mobile').length>0){if(nectarDOMInfo.winH<nectarDOMInfo.winW&&nectarDOMInfo.winW>1000){if($('#header-outer.small-nav').length==0){$('#header-space').css('height',$headerOuterEl.outerHeight())}}else{$('#header-space').css('height',$headerOuterEl.outerHeight())}}else{if($('.nectar-parallax-scene.first-section').length==0){var headerPadding2=headerPadding-headerPadding/1.8;var $headerHeight=($('#header-outer[data-header-resize="1"]').length>0&&$('.small-nav').length>0)?$headerOuterEl.outerHeight()+(parseInt(logoShrinkNum)+headerPadding2*2):$headerOuterEl.outerHeight();$('#header-space').css('height',$headerHeight)}}}
function headerNavOffsetInit(){var lastPosition=-1;var $headerScrollTop=nectarDOMInfo.scrollTop;function headerOffsetAdjust(){if($('body.compose-mode').length>0){return}
$headerScrollTop=nectarDOMInfo.scrollTop;if(lastPosition==$headerScrollTop){requestAnimationFrame(headerOffsetAdjust);return!1}else{lastPosition=$headerScrollTop}
headerOffsetAdjustCalc();requestAnimationFrame(headerOffsetAdjust)}
function headerOffsetAdjustCalc(){var $eleHeight=0;if($('body.mobile').length>0||(condenseHeaderLayout==!0&&$('#header-outer .span_9').css('display')=='none')){$eleHeight=0;var $endOffset=($wpAdminBar.css('position')=='fixed')?$wpAdminBar.height():0;$eleHeight+=nectarDOMInfo.adminBarHeight;if($eleHeight-$headerScrollTop>$endOffset){$headerOuterEl.css('top',$eleHeight-$headerScrollTop+'px')}else{$headerOuterEl.css('top',$endOffset)}}else{if(condenseHeaderLayout==!1){$eleHeight=0;if(!$headerOuterEl.is('[data-remove-fixed="1"]')){$eleHeight+=nectarDOMInfo.adminBarHeight}
$headerOuterEl.css('top',$eleHeight+'px')}}}
if($('#header-outer[data-mobile-fixed="1"]').length>0&&$wpAdminBar.length>0){if($('#nectar_fullscreen_rows').length==0){requestAnimationFrame(headerOffsetAdjust)}else if($('#nectar_fullscreen_rows').length>0&&nectarDOMInfo.usingMobileBrowser){requestAnimationFrame(headerOffsetAdjust)}
$window.smartresize(headerOffsetAdjustCalc)}}
function footerRevealCalcs(){var $headerNavSpace=($('body[data-header-format="left-header"]').length>0&&$window.width()>1000)?0:$headerOuterEl.outerHeight();if($window.height()-$wpAdminBar.height()-$headerNavSpace-$('#footer-outer').height()-1-$pageHeaderBG.height()-$('.page-header-no-bg').height()>0){var $resizeExtra=($('body:not(.material) #header-outer[data-header-resize="1"]').length>0)?55:0;$('body[data-footer-reveal="1"] .container-wrap').css({'margin-bottom':$('#footer-outer').height()-1});$('.container-wrap').css({'min-height':$window.height()-$wpAdminBar.height()-$headerNavSpace-$('#footer-outer').height()-1-$('.page-header-no-bg').height()-$pageHeaderBG.height()+$resizeExtra})}else{$('body[data-footer-reveal="1"] .container-wrap').css({'margin-bottom':$('#footer-outer').height()-1})}
if($window.width()<1000){$('#footer-outer').attr('data-midnight','light')}else{$('#footer-outer').removeAttr('data-midnight')}}
function footerRevealInit(){if($('body[data-footer-reveal="1"]').length>0||$('body.material[data-slide-out-widget-area-style="slide-out-from-right"]').length>0){$body.addClass('nectar-no-flex-height');setTimeout(function(){footerRevealCalcs()},60);footerRevealCalcs();$window.on('resize',footerRevealCalcs);if($('bodybody[data-footer-reveal="1"][data-footer-reveal-shadow="large_2"]').length>0)$('.container-wrap').css({boxShadow:'0 70px 110px -30px '+$('#footer-outer').css('backgroundColor')})}}
function headerRowColorInheritInit(){if($('body[data-header-inherit-rc="true"]').length>0&&$('.mobile').length==0&&$('#header-outer[data-transparent-header="true"]').length>0){var headerOffset=$logoHeight/2+headerPadding+nectarDOMInfo.adminBarHeight;if($('#header-outer[data-permanent-transparent="1"]').length==0){headerOffset=($logoHeight-logoShrinkNum)+Math.ceil((headerPadding*2)/1.8)+nectarDOMInfo.adminBarHeight}
$('.main-content > .row > .wpb_row').each(function(){var $that=$(this);var $textColor;var waypoint=new Waypoint({element:$that,handler:function(direction){if(direction=='down'){if($that.find('.row-bg.using-bg-color').length>0){$textColor=($that.find('> .col.span_12.light').length>0)?'light-text':'dark-text';$headerOuterEl.css('background-color',$that.find('.row-bg').css('background-color')).removeClass('light-text').removeClass('dark-text').addClass($textColor);$headerOuterEl.attr('data-current-row-bg-color',$that.find('.row-bg').css('background-color'));$('body.material #header-outer .bg-color-stripe').css('background-color',$that.find('.row-bg').css('background-color'))}else{$headerOuterEl.css('background-color',$headerOuterEl.attr('data-user-set-bg')).removeClass('light-text').removeClass('dark-text');$headerOuterEl.attr('data-current-row-bg-color',$headerOuterEl.attr('data-user-set-bg'));$('body.material #header-outer .bg-color-stripe').css('background-color','')}}else{if($that.prev('div.wpb_row').find('.row-bg.using-bg-color').length>0){$textColor=($that.prev('div.wpb_row').find('> .col.span_12.light').length>0)?'light-text':'dark-text';$headerOuterEl.css('background-color',$that.prev('div.wpb_row').find('.row-bg').css('background-color')).removeClass('light-text').removeClass('dark-text').addClass($textColor);$headerOuterEl.attr('data-current-row-bg-color',$that.prev('div.wpb_row').find('.row-bg').css('background-color'));$('body.material #header-outer .bg-color-stripe').css('background-color',$that.prev('div.wpb_row').find('.row-bg').css('background-color'))}else{$headerOuterEl.css('background-color',$headerOuterEl.attr('data-user-set-bg')).removeClass('light-text').removeClass('dark-text');$headerOuterEl.attr('data-current-row-bg-color',$headerOuterEl.attr('data-user-set-bg'));$('body.material #header-outer .bg-color-stripe').css('background-color','')}}},offset:headerOffset})})}}
function stickyPageSubmenuInit(){var $=window.jQuery,Waypoint=window.Waypoint,$offsetHeight=calcHeaderNavHeight(),$headerHeight=calcHeaderNavHeight();$window.on('smartresize',function(){$offsetHeight=calcHeaderNavHeight();if($wpAdminBar.length>0&&$wpAdminBar.css('position')=='fixed'){$offsetHeight+=$wpAdminBar.height()}
if($bodyBorderTop.length>0&&$window.width()>1000&&$('body[data-hhun="1"]').length>0){$offsetHeight+=$bodyBorderTop.height()}
if($('.page-submenu.stuck').length>0){$('.page-submenu.stuck').addClass('no-trans').css('top',$offsetHeight).css('transform','translateY(0)').addClass('stuck');setTimeout(function(){$('.page-submenu.stuck').removeClass('no-trans')},50);$('.page-submenu.stuck').parents('.wpb_row').css('z-index',10000);if($('#boxed').length>0){var $negMargin=($window.width()>1000)?$('.container-wrap').width()*0.04:39;$('.page-submenu.stuck').css({'margin-left':'-'+$negMargin+'px','width':$('.container-wrap').width()})}}else{$('.page-submenu.stuck').css('top','0').removeClass('stuck');$('.page-submenu.stuck').parents('.wpb_row').css('z-index','auto');if($('#boxed').length>0){$('.page-submenu.stuck').css({'margin-left':'0px','width':'100%'})}}});function Sticky(options){this.options=$.extend({},Waypoint.defaults,Sticky.defaults,options);this.element=this.options.element;this.$element=$(this.element);this.createWrapper();this.createWaypoint()}
Sticky.prototype.createWaypoint=function(){var originalHandler=this.options.handler;$offsetHeight=calcHeaderNavHeight();if($wpAdminBar.length>0&&$wpAdminBar.css('position')=='fixed'){$offsetHeight+=$wpAdminBar.height()}
if($bodyBorderTop.length>0&&$window.width()>1000&&$('body[data-hhun="1"]').length>0){$offsetHeight+=$bodyBorderTop.height()}
this.waypoint=new Waypoint($.extend({},this.options,{element:this.wrapper,handler:$.proxy(function(direction){var shouldBeStuck=this.options.direction.indexOf(direction)>-1;var wrapperHeight=shouldBeStuck?this.$element.outerHeight(!0):'';this.$wrapper.height(wrapperHeight);if(shouldBeStuck){this.$element.addClass('no-trans').css('top',$offsetHeight).css('transform','translateY(0)').addClass('stuck');var $that=this;setTimeout(function(){$that.$element.removeClass('no-trans')},50);this.$element.parents('.wpb_row').css('z-index',10000);if($('#boxed').length>0){var $negMargin=($window.width()>1000)?$('.container-wrap').width()*0.04:39;this.$element.css({'margin-left':'-'+$negMargin+'px','width':$('.container-wrap').width()})}}else{this.$element.css('top','0').removeClass('stuck');if($('#boxed').length>0)this.$element.css({'margin-left':'0px','width':'100%'})}
if(originalHandler){originalHandler.call(this,direction)}},this),offset:$offsetHeight}));var $that=this;setInterval(function(){if($('body[data-hhun="1"] #header-outer.detached:not(.invisible)').length>0){var heightToAdjust=$headerOuterEl.outerHeight();if($headerSecondaryEl.length>0){heightToAdjust-=nectarDOMInfo.secondaryHeaderHeight}
$that.waypoint.options.offset=$offsetHeight+heightToAdjust}else{$that.waypoint.options.offset=$offsetHeight}
Waypoint.refreshAll()},100)};Sticky.prototype.createWrapper=function(){if(this.options.wrapper){this.$element.wrap(this.options.wrapper)}
this.$wrapper=this.$element.parent();this.wrapper=this.$wrapper[0]};Sticky.prototype.destroy=function(){if(this.$element.parent()[0]===this.wrapper){this.waypoint.destroy();this.$element.removeClass(this.options.stuckClass);if(this.options.wrapper){this.$element.unwrap()}}};Sticky.defaults={wrapper:'<div class="sticky-wrapper" />',stuckClass:'stuck',direction:'down right'};Waypoint.Sticky=Sticky}
function pageSubmenuInit(){if($('.page-submenu[data-sticky="true"]').length>0&&$('#nectar_fullscreen_rows').length==0){stickyPageSubmenuInit();if($('.page-submenu').parents('.span_12').find('> .wpb_column').length>1){var pageMenu=$('.page-submenu').clone(),pageMenuParentRow=$('.page-submenu').parents('.wpb_row');$('.page-submenu').remove();pageMenuParentRow.before(pageMenu)}
var sticky=new Waypoint.Sticky({element:$('.page-submenu[data-sticky="true"]')[0]})}
if($('#nectar_fullscreen_rows').length==0){$('.page-submenu').parents('.wpb_row').css('z-index',10000)}
$('.page-submenu .mobile-menu-link').on('click',function(){$(this).parents('.page-submenu').find('ul').stop(!0).slideToggle(350);return!1});$('.page-submenu ul li a').on('click',function(){if($('body.mobile').length>0){$(this).parents('.page-submenu').find('ul').stop(!0).slideToggle(350)}})}
function vcFullHeightRow(){var $element=$(".vc_row-o-full-height:first");if($element.length){var windowHeight,offsetTop,fullHeight;windowHeight=$window.height();$(".vc_row-o-full-height").each(function(){offsetTop=$(this).offset().top;if(offsetTop<windowHeight&&$(this).hasClass('top-level')&&!nectarDOMInfo.usingFrontEndEditor){fullHeight=100-offsetTop/(windowHeight/100);$(this).css("min-height",fullHeight+"vh");$(this).find('> .col.span_12').css("min-height",fullHeight+"vh")}else{$(this).css("min-height",windowHeight);$(this).find('> .col.span_12').css("min-height",windowHeight)}})}}
function vcFullHeightRowInit(){if($('.vc_row-o-full-height').length>0){vcFullHeightRow();$window.on('smartresize',vcFullHeightRow)}}
function fixIeFlexbox(){var ua=window.navigator.userAgent,msie=ua.indexOf("MSIE ");(msie>0||navigator.userAgent.match(/Trident.*rv\:11\./))&&$(".vc_row-o-full-height").each(function(){"flex"===$(this).find('> .span_12').css("display")&&$(this).wrap('<div class="vc_ie-flexbox-fixer"></div>')});if(msie>0||navigator.userAgent.match(/Trident.*rv\:11\./)){fixIE11Images();$(window).on('resize',fixIE11Images)}}
function fixIE11Images(){$('.img-with-aniamtion-wrap img.img-with-animation').each(function(){var $parentWrap=$(this).parents('.img-with-aniamtion-wrap');$parentWrap.css({'height':''});var height=$(this).height();$parentWrap.css({'height':height})})}
function recentPostsTitleOnlyEqualHeight(){function recentPostHeight(){$('.blog-recent[data-style="title_only"]').each(function(){if($(this).find('> .col').length>1){return!1}
var $parentsSeletor=$(this).parent().parent().parent();if($parentsSeletor.hasClass('vc_col-sm-3')||$parentsSeletor.hasClass('vc_col-sm-4')||$parentsSeletor.hasClass('vc_col-sm-6')||$parentsSeletor.hasClass('vc_col-sm-8')||$parentsSeletor.hasClass('vc_col-sm-9')){if($('body.mobile').length==0&&$(this).next('div').length==0){var tallestColumn=0;$(this).find('> .col').css('padding','50px 20px');$(this).parents('.span_12').find(' > .wpb_column').each(function(){if(Math.floor($(this).height())>tallestColumn){tallestColumn=Math.floor($(this).height())}});if(Math.floor($(this).find('> .col').outerHeight(!0))<Math.floor($(this).parents('.wpb_row').height())-1){$(this).find('> .col').css('padding-top',(tallestColumn-$(this).find('> .col').height())/2+'px');$(this).find('> .col').css('padding-bottom',(tallestColumn-$(this).find('> .col').height())/2+'px')}}else{$(this).find('> .col').css('padding','50px 20px')}}})}
if($('.blog-recent[data-style="title_only"]').length>0){recentPostHeight();$window.on('smartresize',recentPostHeight)}}
function recentPostSliderHeight(){$('.nectar-recent-posts-slider').each(function(){var $minHeight=250,$definedHeight=parseInt($(this).attr('data-height')),dif=($('body[data-ext-responsive="true"]').length>0)?$window.width()/1400:$window.width()/1100,$sliderSelectors=$(this).find('.nectar-recent-post-slide, .flickity-viewport');if(nectarDOMInfo.winW>1000&&$('#boxed').length==0){if($(this).parents('.full-width-content').length==0){if($('body[data-ext-responsive="true"]').length>0&&nectarDOMInfo.winW>=1400){$sliderSelectors.css('height',Math.ceil($definedHeight))}else if($('body[data-ext-responsive="true"]').length==0&&nectarDOMInfo.winW>=1100){$sliderSelectors.css('height',Math.ceil($definedHeight))}else{$sliderSelectors.css('height',Math.ceil($definedHeight*dif))}}else{$sliderSelectors.css('height',Math.ceil($definedHeight*dif))}}else{var $parentCol=($(this).parents('.wpb_column').length>0)?$(this).parents('.wpb_column'):$(this).parents('.col');if($parentCol.length==0){$parentCol=$('.main-content')}
if(!$parentCol.hasClass('vc_span12')&&!$parentCol.hasClass('main-content')&&!$parentCol.hasClass('span_12')&&!$parentCol.hasClass('vc_col-sm-12')){var $parentColWidth=sliderColumnDesktopWidth($parentCol),$aspectRatio=$definedHeight/$parentColWidth;if($aspectRatio*$parentCol.width()<=$minHeight){$sliderSelectors.css('height',$minHeight)}else{$sliderSelectors.css('height',$aspectRatio*$parentCol.width())}}else{if($definedHeight*dif<=$minHeight){$sliderSelectors.css('height',$minHeight)}else{$sliderSelectors.css('height',Math.ceil($definedHeight*dif))}}}})}
function sliderColumnDesktopWidth(parentCol){var $parentColWidth=1100,$columnNumberParsed=$(parentCol).attr('class').match(/\d+/);if($columnNumberParsed=='2'){$parentColWidth=170}else if($columnNumberParsed=='3'){$parentColWidth=260}else if($columnNumberParsed=='4'){$parentColWidth=340}else if($columnNumberParsed=='6'){$parentColWidth=530}else if($columnNumberParsed=='8'){$parentColWidth=700}else if($columnNumberParsed=='9'){$parentColWidth=805}else if($columnNumberParsed=='10'){$parentColWidth=916.3}else if($columnNumberParsed=='12'){$parentColWidth=1100}
return $parentColWidth}
function splitLineText(){$('.nectar-recent-posts-single_featured.multiple_featured').each(function(){var $slideClass=($(this).find('.project-slides').length>0)?'.project-slide':'.nectar-recent-post-slide',$slideInfoClass=($(this).find('.project-slides').length>0)?'.project-info h1':'.inner-wrap h2 a';$(this).find($slideClass).each(function(){$(this).find($slideInfoClass).each(function(){var textArr=$(this).text();textArr=textArr.trim();textArr=textArr.split(' ');$(this)[0].innerHTML='';for(var i=0;i<textArr.length;i++){$(this)[0].innerHTML+='<span>'+textArr[i]+'</span> '}});$(this).find($slideInfoClass+' > span').wrapInner('<span class="inner" />')})})}
function splitLineHeadingMarkup(){$('.nectar-split-heading[data-animation-type="line-reveal-by-space"]').each(function(){$(this).find('> *').each(function(){var textArr=$(this).text();textArr=textArr.trim();textArr=textArr.split(' ');$(this)[0].innerHTML='';for(var i=0;i<textArr.length;i++){$(this)[0].innerHTML+='<span>'+textArr[i]+'</span> '}});if(!$(this).hasClass('animated-in')){$(this).find('> * > span').wrapInner('<span class="inner" />')}else{$(this).find('> * > span').wrapInner('<span class="inner animated" />')}
$(this).addClass('markup-generated')});$('.nectar-split-heading[data-animation-type="letter-fade-reveal"]').each(function(){$(this).find('> *').each(function(){var textArr=$(this).text();textArr=textArr.trim();textArr=textArr.split(' ');$(this)[0].innerHTML='';for(var i=0;i<textArr.length;i++){$(this)[0].innerHTML+='<span>'+textArr[i]+'</span> '}});$(this).find('span').each(function(){var $this=$(this);var textArr=$(this).text().split('');$this.empty();$.each(textArr,function(i,el){$this.append("<span>"+el+"</span")})});$(this).addClass('markup-generated')})}
function splitLineHeadingInit(){if($('.nectar-split-heading[data-animation-type="line-reveal-by-space"]').length>0||$('.nectar-split-heading[data-animation-type="letter-fade-reveal"]').length>0){splitLineHeadingMarkup()}}
function recentPostsFlickityInit(){if($('.nectar-recent-posts-slider-inner').length>0){var $rpFGroupCells=($('.nectar-recent-posts-slider_multiple_visible').length>0)?'90%':!1;var $rpF=$('.nectar-recent-posts-slider-inner').flickity({contain:!0,groupCells:$rpFGroupCells,draggable:!0,lazyLoad:!1,imagesLoaded:!0,percentPosition:!0,prevNextButtons:!1,pageDots:!0,resize:!0,setGallerySize:!0,wrapAround:!0,accessibility:!1});setTimeout(function(){$('.nectar-recent-posts-slider-inner').addClass('loaded')},1150);var flkty=$rpF.data('flickity');$rpF.on('dragStart.flickity',function(){$('.flickity-viewport').addClass('is-moving')});$rpF.on('dragEnd.flickity',function(){$('.flickity-viewport').removeClass('is-moving')});var $dragTimeout;$rpF.on('select.flickity',function(){$('.flickity-viewport').addClass('no-hover');clearTimeout($dragTimeout);$dragTimeout=setTimeout(function(){$('.flickity-viewport').removeClass('no-hover')},400)});recentPostSliderHeight();$window.on('resize',recentPostSliderHeight);if(!nectarDOMInfo.usingMobileBrowser&&!nectarDOMInfo.usingFrontEndEditor){$window.on('resize',recentPostSliderParallaxMargins)}}
function multipleLargeFeaturedInit(){$('.nectar-recent-posts-single_featured.multiple_featured').each(function(sliderIndex){if($(this).find('> .normal-container').length>0){$(this).find('> .normal-container').remove()}
$(this).append('<div class="normal-container container"> <ul class="controls" data-color="'+$(this).attr('data-button-color')+'" data-num="'+$(this).find('.nectar-recent-post-slide').length+'"></ul> </div>');var $that=$(this);var tallestFeaturedSlide=0;var $slideClickTimeout;$nectarCustomSliderRotate[sliderIndex]={autorotate:''};$(this).find('.nectar-recent-post-slide').each(function(i){if($(this).find('.recent-post-container').height()>tallestFeaturedSlide){$(this).siblings().removeClass('tallest');$(this).addClass('tallest');tallestFeaturedSlide=$(this).find('.recent-post-container').height()}
var $activeClass=(i==0&&$(this).parents('.nectar-recent-posts-single_featured.multiple_featured[data-autorotate="none"]').length>0)?'class="active"':'';$that.find('.controls').append('<li '+$activeClass+'><span class="title">'+$(this).find('h2').text()+'</span></li>')});$(this).addClass('js-loaded');$(this).find('.controls li').on('click',function(e){if($(this).hasClass('active')){return}
if(e.originalEvent!==undefined){$(this).parent().find('.active').addClass('trans-out')}
var $index=$(this).index(),$oldIndex=$(this).parent().find('.active').index(),$that=$(this);clearTimeout($slideClickTimeout);$(this).siblings().removeClass('active');$(this).addClass('active');$slideClickTimeout=setTimeout(function(){$that.parents('.multiple_featured').find('.nectar-recent-post-slide:not(:eq('+$index+'))').css('opacity','0').removeClass('active');$that.parent().find('.trans-out').removeClass('trans-out')},300);$that.parents('.multiple_featured').find('.nectar-recent-post-slide:not(:eq('+$index+'))').css('z-index','10');$that.parents('.multiple_featured').find('.nectar-recent-post-slide:eq('+$oldIndex+')').css('z-index','15');$(this).parents('.multiple_featured').find('.nectar-recent-post-slide').eq($index).css({'opacity':'1','z-index':'20'}).addClass('active');if($(this).parents('.multiple_featured').attr('data-autorotate')!='none'){nectarCustomSliderResetRotate($that.parents('.nectar-recent-posts-single_featured.multiple_featured'),sliderIndex)}});$that=$(this);if($(this).attr('data-autorotate').length>0&&$(this).attr('data-autorotate')!='none'&&$('body.vc_editor').length==0){setTimeout(function(){var slide_interval=(parseInt($that.attr('data-autorotate'))<100)?4000:parseInt($that.attr('data-autorotate'));$nectarCustomSliderRotate[sliderIndex].autorotate=setInterval(function(){nectarCustomSliderRotate($that)},slide_interval);$that.find('.controls > li:first-child').addClass('active')},30)}});splitLineText();$window.on('resize',splitLineText)}
multipleLargeFeaturedInit()}
function recentPostSliderParallax(){$('.nectar-recent-posts-slider').each(function(){var $offset=parseInt($(this).find('.flickity-slider').position().left),$slides=$(this).find('.nectar-recent-post-slide'),$slideLength=$slides.length,$slideWidth=$slides.width(),$lastChildIndex=$(this).find('.nectar-recent-post-slide:last-child').index(),$slideFirstChildBG=$(this).find('.nectar-recent-post-slide:first-child .nectar-recent-post-bg'),$slideLastChildBG=$(this).find('.nectar-recent-post-slide:last-child .nectar-recent-post-bg');if($offset>=-3){$slideLastChildBG.css('margin-left',parseInt(Math.ceil($slideWidth/3.5))+'px')}else{$slideLastChildBG.css('margin-left','-'+parseInt(Math.ceil($slideWidth/3.5*$lastChildIndex))+'px')}
if(Math.abs($offset)>=($slideLength-1)*$slideWidth){$slideFirstChildBG.css('margin-left','-'+parseInt(Math.ceil(($slideWidth/3.5)*$slideLength))+'px')}else{$slideFirstChildBG.css('margin-left','0px')}
$(this).find('.nectar-recent-post-bg').css('transform','translateX('+Math.ceil($(this).find('.flickity-slider').position().left/-3.5)+'px)')});requestAnimationFrame(recentPostSliderParallax)}
function recentPostSliderParallaxMargins(){$('.nectar-recent-posts-slider').each(function(){var $slideWidth=$(this).find('.nectar-recent-post-slide').width();$(this).find('.nectar-recent-post-slide').each(function(i){$(this).find('.nectar-recent-post-bg').css('margin-left','-'+parseInt(Math.ceil($slideWidth/3.5)*i)+'px')})})}
function recentPostsInit(){recentPostsFlickityInit();$('.blog-recent[data-style="classic_enhanced_alt"] .inner-wrap').each(function(){$(this).find('.post-featured-img').each(function(){var $src=$(this).find('img').attr('src');$(this).css('background-image','url('+$src+')')})});$('.blog-recent[data-style="classic_enhanced"]').each(function(){if($(this).find('.inner-wrap.has-post-thumbnail').length==0){$(this).addClass('no-thumbs')}});if(!nectarDOMInfo.usingMobileBrowser){if($('.nectar-recent-posts-slider').length>0&&!nectarDOMInfo.usingFrontEndEditor){window.requestAnimationFrame(recentPostSliderParallax)}}
if(!nectarDOMInfo.usingMobileBrowser&&!nectarDOMInfo.usingFrontEndEditor){recentPostSliderParallaxMargins()}}
function parallaxItemHoverEffect(){$('.style-5').each(function(){$(this).find('.sizer').insertBefore($(this).find('.parallaxImg'))});$('.style-5').parents('.wpb_row').css('z-index','100');var d=document,bd=d.getElementsByTagName('body')[0],win=window,imgs=d.querySelectorAll('.parallaxImg'),totalImgs=imgs.length,supportsTouch='ontouchstart' in win||navigator.msMaxTouchPoints;if(totalImgs<=0){return}
for(var l=0;l<totalImgs;l++){var thisImg=imgs[l],layerElems=thisImg.querySelectorAll('.parallaxImg-layer'),totalLayerElems=layerElems.length;if(totalLayerElems<=0){continue}
while(thisImg.firstChild){thisImg.removeChild(thisImg.firstChild)}
var lastMove=0;var eventThrottle=$('html').hasClass('cssreflections')?1:80;if(eventThrottle==80){$body.addClass('cssreflections')}
var containerHTML=d.createElement('div'),shineHTML=d.createElement('div'),shadowHTML=d.createElement('div'),layersHTML=d.createElement('div'),layers=[];thisImg.id='parallaxImg__'+l;containerHTML.className='parallaxImg-container';shadowHTML.className='parallaxImg-shadow';layersHTML.className='parallaxImg-layers';for(var i=0;i<totalLayerElems;i++){var layer=d.createElement('div'),layerInner=d.createElement('div'),imgSrc=layerElems[i].getAttribute('data-img');$(layer).html($(layerElems[i]).html());layer.className='parallaxImg-rendered-layer';layer.setAttribute('data-layer',i);if(i==0&&$(thisImg).parents('.wpb_gallery').length==0){layerInner.className='bg-img';layerInner.style.backgroundImage='url('+imgSrc+')';layer.appendChild(layerInner)}
layersHTML.appendChild(layer);layers.push(layer)}
containerHTML.appendChild(layersHTML);thisImg.appendChild(containerHTML);$(thisImg).wrap('<div class="parallaxImg-wrap" />');if(!(navigator.userAgent.indexOf('Safari')!=-1&&navigator.userAgent.indexOf('Chrome')==-1)){$(thisImg).parent().append(shadowHTML)}
if(supportsTouch&&$('body.using-mobile-browser').length>0){}else{(function(_thisImg,_layers,_totalLayers,_shine){$(thisImg).parents('.style-5').on('mousemove',function(e){var parentEl=$(this);var now=Date.now();if(now>lastMove+eventThrottle){lastMove=now;window.requestAnimationFrame(function(){processMovement(e,!1,_thisImg,_layers,_totalLayers,_shine,parentEl)})}});$(thisImg).parents('.style-5').on('mouseenter',function(e){processEnter(e,_thisImg,_layers,_totalLayers,_shine)});$(thisImg).parents('.style-5').on('mouseleave',function(e){processExit(e,_thisImg,_layers,_totalLayers,_shine)})})(thisImg,layers,totalLayerElems,shineHTML)}(function(_thisImg,_layers,_totalLayers,_shine){depths(!1,_thisImg,_layers,_totalLayers,_shine);window.addEventListener('resize',function(){depths(!1,_thisImg,_layers,_totalLayers,_shine)})})(thisImg,layers,totalLayerElems,shineHTML)}
function processMovement(e,touchEnabled,elem,layers,totalLayers,shine,parentEl){if(!$(elem.firstChild).hasClass('over')){processExit(e,elem,layers,totalLayers,shine);return!1}
var yMult=0.03;var xMult=0.063;if($(elem).parents('.col.wide').length>0){yMult=0.03;xMult=0.063}else if($(elem).parents('.col.regular').length>0||$(elem).parents('.wpb_gallery').length>0){yMult=0.045;xMult=0.045}else if($(elem).parents('.col.tall').length>0){yMult=0.05;xMult=0.015}else if($(elem).parents('.col.wide_tall').length>0){yMult=0.04;xMult=0.04}else if(parentEl.hasClass('nectar-fancy-box')){yMult=0.045;xMult=0.022}else{yMult=0.045;xMult=0.075}
var bdst=nectarDOMInfo.scrollTop,bdsl=bd.scrollLeft,pageX=(touchEnabled)?e.touches[0].pageX:e.pageX,pageY=(touchEnabled)?e.touches[0].pageY:e.pageY,offsets=elem.getBoundingClientRect(),w=elem.clientWidth||elem.offsetWidth||elem.scrollWidth,h=elem.clientHeight||elem.offsetHeight||elem.scrollHeight,wMultiple=320/w,offsetX=0.52-(pageX-offsets.left-bdsl)/w,offsetY=0.52-(pageY-offsets.top-bdst)/h,dy=(pageY-offsets.top-bdst)-h/2,dx=(pageX-offsets.left-bdsl)-w/2,yRotate=(offsetX-dx)*(yMult*wMultiple),xRotate=(dy-offsetY)*(xMult*wMultiple);var imgCSS;if($(elem).parents('.wpb_gallery').length>0){imgCSS=' perspective('+w*3+'px) rotateX('+ -xRotate*1.9+'deg) rotateY('+ -yRotate*1.3+'deg)'}else{if($(elem).parents('.wide_tall').length==0&&$(elem).parents('.wide').length==0&&$(elem).parents('.tall').length==0){var $scaleAmount=(parentEl.hasClass('nectar-fancy-box'))?'1.06':'1.03';var $offsetAmount=(parentEl.hasClass('nectar-fancy-box'))?'-2':'-10';imgCSS=' perspective('+w*3+'px) rotateX('+xRotate+'deg) rotateY('+yRotate+'deg)  translateY('+offsetY*$offsetAmount+'px) translateX('+offsetX*$offsetAmount+'px) scale('+$scaleAmount+')'}else{imgCSS=' perspective('+w*3+'px) rotateX('+xRotate+'deg) rotateY('+yRotate+'deg)  translateY('+offsetY*-10+'px) translateX('+offsetX*-10+'px) scale(1.013)'}}
$(elem).find('.parallaxImg-container').css('transform',imgCSS);if(!(navigator.userAgent.indexOf('Safari')!=-1&&navigator.userAgent.indexOf('Chrome')==-1)){$(elem).parents('.parallaxImg-wrap').find('.parallaxImg-shadow').css('transform',imgCSS)}}
function processEnter(e,elem){elem.firstChild.className+=' over';elem.className+=' over';$(elem).addClass('transition');if($(elem).parents('.wpb_gallery').length>0){setTimeout(function(){$(elem).removeClass('transition')},450)}else{setTimeout(function(){$(elem).removeClass('transition')},200)}}
function processExit(e,elem){var w=elem.clientWidth||elem.offsetWidth||elem.scrollWidth;var container=elem.firstChild;container.className=container.className.replace(' over','');elem.className=elem.className.replace(' over','');$(container).css('transform','perspective('+w*3+'px) rotateX(0deg) rotateY(0deg) translateZ(0)');$(elem).parents('.parallaxImg-wrap').find('.parallaxImg-shadow').css('transform','perspective('+w*3+'px) rotateX(0deg) rotateY(0deg) translateZ(0)');$(elem).addClass('transition');setTimeout(function(){$(elem).removeClass('transition')},200)}
function depths(touchEnabled,elem,layers,totalLayers){var w=elem.clientWidth||elem.offsetWidth||elem.scrollWidth;var container=elem.firstChild;for(var ly=0;ly<totalLayers;ly++){if(ly==0){$(layers[ly]).css('transform','translateZ(0px)')}else{$(layers[ly]).css('transform','translateZ('+(w*3)/27*(ly*1.1)+'px) ')}}
totalLayers=totalLayers+3;$(container).css('transform','perspective('+w*3+'px)')}}
function nectarFancyBoxHover(){if($('.nectar-fancy-box[data-style="hover_desc"]').length==0){return!1}
var $hoverContentHeight=0;$('body').on('mouseenter','.nectar-fancy-box[data-style="hover_desc"]',function(){$hoverContentHeight=parseInt($(this).find('.hover-content').outerHeight(!0));$(this).find('.heading-wrap').css('transform','translateY(-'+$hoverContentHeight+'px)')});$('body').on('mouseleave','.nectar-fancy-box[data-style="hover_desc"]',function(){$(this).find('.heading-wrap').css('transform','translateY(0)')})}
function NectarMouseFollowIcon(el,iconSelector){this.$el=el;this.$iconEl=this.$el.find(iconSelector);this.elX=0;this.elY=0;this.initialX=this.$el.width()/2;this.initialY=this.$el.height()/2;this.elX=0;this.elY=0;this.lastScroll=0;this.scrollAdjust=0;this.lastX=this.initialX;this.lastY=this.initialY;this.activeFollow=!1;this.percentage=0.13;this.percentageTimeout;$window.on('resize',this.resizeEvent.bind(this));this.mouseEvents();this.rafLoop()}
NectarMouseFollowIcon.prototype.resizeEvent=function(){this.initialX=this.$el.width()/2;this.initialY=this.$el.height()/2};NectarMouseFollowIcon.prototype.mouseEvents=function(){var that=this;that.$el.on('mouseenter',function(e){that.activeFollow=!0;that.elX=e.offsetX;that.elY=e.offsetY;that.lastScroll=0;clearTimeout(that.percentageTimeout);that.percentageTimeout=setTimeout(function(){that.percentage=0.2},700)});that.$el.on('mouseleave',function(){that.activeFollow=!1;that.lastScroll=0;clearTimeout(that.percentageTimeout);that.percentage=0.13});that.$el.on('mousemove',function(e){that.elX=e.offsetX;that.elY=e.offsetY;that.lastScroll=0});$(window).on('scroll',function(){if(that.activeFollow==!0&&that.lastScroll==0){that.lastScroll=nectarDOMInfo.scrollTop}})};NectarMouseFollowIcon.prototype.rafLoop=function(){if(this.activeFollow==!0){this.scrollAdjust=(this.lastScroll>0)?nectarDOMInfo.scrollTop-this.lastScroll:0;this.lastY=linearInterpolate(this.lastY,this.elY+this.scrollAdjust,this.percentage);this.lastX=linearInterpolate(this.lastX,this.elX,this.percentage)}else{this.lastY=linearInterpolate(this.lastY,this.initialY,0.13);this.lastX=linearInterpolate(this.lastX,this.initialX,0.13)}
this.$iconEl.css({'transform':'translateX('+this.lastX+'px) translateY('+this.lastY+'px)'});requestAnimationFrame(this.rafLoop.bind(this))};function nectarVideoLightbox(){iconMouseFollowArr=[];$body.on('mouseenter','.nectar_video_lightbox[data-parent-hover="1"]',function(){var $parentRow=$(this).parents('.wpb_row');$parentRow.find('> .row-bg-wrap .row-bg, > .nectar-video-wrap .nectar-video-inner').addClass('transition');$parentRow.find('> .row-bg-wrap .row-bg, > .nectar-video-wrap .nectar-video-inner').css({'transform':'scale(1.08)'})});$body.on('mouseleave','.nectar_video_lightbox[data-parent-hover="1"]',function(){var $parentRow=$(this).parents('.wpb_row');$parentRow.find('> .row-bg-wrap .row-bg, > .nectar-video-wrap .nectar-video-inner').css({'transform':'scale(1)'})});$('.nectar-video-box').each(function(i){if($(this).find('.play_button_mouse_follow')){var $that=$(this);$(this).imagesLoaded(function(){if(!nectarDOMInfo.usingMobileBrowser){iconMouseFollowArr[i]=new NectarMouseFollowIcon($that,'.play_button_mouse_follow')}
var $playColor=($that.is('[data-mouse-icon-color]')&&$that.attr('data-mouse-icon-color').length>0)?$that.attr('data-mouse-icon-color'):'#000';if($that.is('[data-mouse-style="solid_color"]')){$that.find('.play_button_mouse_follow').css({'background-color':$playColor})}
$that.find('.play_button_mouse_follow').addClass('visible')})}})}
function nectarCustomSliderRotate(slider){if($('body.vc_editor').length>0){return}
var $controlSelector=(slider.find('.project-slides').length>0)?'.dot-nav > span':'.controls > li',$controlSelectorInd=(slider.find('.project-slides').length>0)?'span':' li',$slideLength=slider.find($controlSelector).length,$currentSlide=slider.find($controlSelector+'.active').index();if($currentSlide+1==$slideLength){slider.find($controlSelector+':first-child').trigger('click')}else{slider.find($controlSelector+'.active').next($controlSelectorInd).trigger('click')}}
function nectarCustomSliderResetRotate(slider,index){clearInterval($nectarCustomSliderRotate[index].autorotate);if(slider.attr('data-autorotate').length>0){var slide_interval=(parseInt(slider.attr('data-autorotate'))<100)?4000:parseInt(slider.attr('data-autorotate'));$nectarCustomSliderRotate[index].autorotate=setInterval(function(){nectarCustomSliderRotate(slider)},slide_interval)}}
function fsProjectSliderInit(){$fsProjectSliderArr=[];if(typeof SalientRecentProjectsFullScreen==='undefined'){return}
$('.nectar_fullscreen_zoom_recent_projects').each(function(i){$fsProjectSliderArr[i]=new SalientRecentProjectsFullScreen($(this))})}
function portfolioSidebarFollow(){var sidebarFollow=$('.single-portfolio #sidebar').attr('data-follow-on-scroll');if($('body.single-portfolio').length==0||$('#sidebar[data-follow-on-scroll]').length==0){return}
sidebarFollow=$('.single-portfolio #sidebar').attr('data-follow-on-scroll');if(sidebarFollow==1&&!$body.hasClass('mobile')&&parseInt($('#sidebar').height())+50<=parseInt($('.post-area').height())){var $ssExtraTopSpace=50;if($('#header-outer[data-remove-fixed="0"]').length>0&&$('body[data-hhun="1"]').length==0){$ssExtraTopSpace+=$headerOuterEl.outerHeight();if($('#header-outer[data-shrink-num][data-header-resize="1"]').length>0){var headerPadding2=parseInt($headerOuterEl.attr('data-padding'))-parseInt($headerOuterEl.attr('data-padding'))/1.8;$ssExtraTopSpace-=logoShrinkNum;$ssExtraTopSpace-=headerPadding2}
if($('body.mobile').length==0&&$('#header-outer[data-condense="true"]').length>0){var $headerSpan9=$('#header-outer[data-format="centered-menu-bottom-bar"] header#top .span_9');$ssExtraTopSpace=50;$ssExtraTopSpace+=$headerOuterEl.height()-(parseInt($headerSpan9.position().top)-parseInt($('#header-outer #logo').css('margin-top')))-parseInt(nectarDOMInfo.secondaryHeaderHeight)}}
if($wpAdminBar.length>0){$ssExtraTopSpace+=$wpAdminBar.outerHeight()}
$('.single-portfolio #sidebar').theiaStickySidebar({additionalMarginTop:$ssExtraTopSpace,updateSidebarHeight:!1})}}
function infiniteScrollInit(){if($('.infinite_scroll').length>0){$('.portfolio-items.infinite_scroll').infinitescroll({navSelector:"div#pagination",nextSelector:"div#pagination a:first",itemSelector:".portfolio-items.infinite_scroll .element",finishedMsg:"<em>Congratulations, you've reached the end of the internet.</em>",msgText:" ",},function(newElements){var $container=$('.portfolio-items.infinite_scroll:not(.carousel)'),$newElems=$(newElements).css('opacity',0);$newElems.imagesLoaded(function(){$(newElements).css('opacity',1);$container.isotope('appended',$(newElements));$(newElements).find('.work-item').addClass('ajax-loaded');$(newElements).addClass('ajax-loaded');$(newElements).find('.work-meta, .nectar-love-wrap').css({'opacity':1});if($('.portfolio-filters-inline').length>0||$('.portfolio-filters').length>0){var selector;if($('.portfolio-filters-inline').length>0){selector=$('.portfolio-filters-inline a.active').attr('data-filter')}else{selector=$('.portfolio-filters a.active').attr('data-filter')}
$('.portfolio-filters-inline a.active').attr('data-filter');$container.isotope({filter:selector})}
for(var i=0;i<$portfolio_containers.length;i++){$portfolio_containers[i].reLayout()}
if($(newElements).find('.work-item.style-5').length>0){parallaxItemHoverEffect()}
if($(newElements).find('.inner-wrap').attr('data-animation')=='none'){$('.portfolio-items .col .inner-wrap').removeClass('animated')}else{for(var i=0;i<$portfolio_containers.length;i++){$portfolio_containers[i].masonryZindex();$portfolio_containers[i].portfolioAccentColor()}
$(newElements).each(function(){var $portfolioOffsetPos=($('#nectar_fullscreen_rows').length>0)?'200%':'90%';var $that=$(this);var waypoint=new Waypoint({element:$that,handler:function(){var $portfolioAnimationDelay=($that.is('[data-masonry-type="photography"].masonry-items'))?85:115;setTimeout(function(){$that.addClass("animated-in")},$portfolioAnimationDelay*$that.attr('data-delay-amount'));waypoint.destroy()},offset:$portfolioOffsetPos})})}
$('.portfolio-items').each(function(){var $unique_id=uniqueIdGenerate();$(this).find('a[rel^="prettyPhoto"], a.pretty_photo').attr('rel','prettyPhoto['+$unique_id+'_gal]').removeClass('pretty_photo')});$('.portfolio-items').each(function(){var $unique_id=uniqueIdGenerate();$(this).find('a[data-fancybox^="group_"]').attr('data-fancybox','group_'+$unique_id)});lightBoxInit();setTimeout(function(){for(var i=0;i<$portfolio_containers.length;i++){$portfolio_containers[i].masonryZindex();$portfolio_containers[i].reLayout();$portfolio_containers[i].isotopeCatSelection()}
$(newElements).removeClass('ajax-loaded')},700);parallaxRowsBGCals()})});$('.post-area.infinite_scroll .posts-container').infinitescroll({navSelector:"div#pagination",nextSelector:"div#pagination a:first",itemSelector:".post-area .posts-container .post",finishedMsg:"<em>Congratulations, you've reached the end of the internet.</em>",msgText:" "},function(newElements){if($('.masonry.classic').length>0||$('.post-area:not(.masonry):not(.featured_img_left)').length>0||$('.post-area.standard-minimal').length>0){flexsliderInit();if($().mediaelementplayer){$(newElements).find('.wp-audio-shortcode, .wp-video-shortcode').mediaelementplayer()}
lightBoxInit();if($('.carousel').length>0){standardCarouselInit();clientsCarouselInit()}
waypoints();$('.testimonial_slider').animate({'opacity':'1'},800);nectarTestimonialSliders();nectarTestimonialSlidersEvents();setTimeout(function(){responsiveVideoIframesInit();responsiveVideoIframes();$window.trigger('resize')},500);parallaxRowsBGCals();$window.trigger('resize')}else{parallaxRowsBGCals();$window.trigger('resize')}
var $container=$('.posts-container');if($container.parent().hasClass('masonry')){$(newElements).addClass('masonry-blog-item')}
var $newElems=$(newElements);if($newElems.find('img').length==0){$newElems=$('body')}
$newElems.imagesLoaded(function(){if($container.parent().hasClass('masonry')&&!$container.parent().hasClass('auto_meta_overlaid_spaced')){$container.isotope('appended',$(newElements))}
for(var i=0;i<$nectarMasonryBlogs.length;i++){$nectarMasonryBlogs[i].flickityBlogInit()}
$(newElements).addClass('ajax-loaded');if($container.parent().hasClass('classic_enhanced')){$container.find('.large_featured.has-post-thumbnail.ajax-loaded .post-featured-img, .wide_tall.has-post-thumbnail.ajax-loaded .post-featured-img').each(function(){var $src=$(this).find('img').attr('src');$(this).css('background-image','url('+$src+')')});$container.find('.large_featured.ajax-loaded .nectar-flickity, .wide_tall.ajax-loaded .nectar-flickity').each(function(){$(this).find('.cell').each(function(){var $src=$(this).find('img').attr('src');$(this).css('background-image','url('+$src+')')})})}
if($(newElements).parents('.posts-container').attr('data-animation')=='none'){$(newElements).find('.inner-wrap').removeClass('animated')}else{for(var i=0;i<$nectarMasonryBlogs.length;i++){$nectarMasonryBlogs[i].blogMasonryZindex()}
$(newElements).each(function(){var $that=$(this);var waypoint=new Waypoint({element:$that,handler:function(){setTimeout(function(){$that.addClass("animated-in")},80*$that.attr('data-delay-amount'));waypoint.destroy()},offset:'90%'})})}
setTimeout(function(){$(newElements).removeClass('ajax-loaded')},700)})})}}
function toTopBind(){if($('#to-top').length>0&&$window.width()>1020||$('#to-top').length>0&&$('#to-top.mobile-enabled').length>0){if(nectarDOMInfo.scrollTop>350){$window.on('scroll',hideToTop)}else{$window.on('scroll',showToTop)}}}
function showToTop(){if(nectarDOMInfo.scrollTop>350&&!$offCanvasEl.is('.fullscreen.open')){$('#to-top').stop().transition({'bottom':'17px'},350,'easeInOutCubic');$window.off('scroll',showToTop);$window.on('scroll',hideToTop)}}
function hideToTop(){if(nectarDOMInfo.scrollTop<350||$offCanvasEl.is('.fullscreen.open')){var $animationTiming=($('#slide-out-widget-area.fullscreen.open').length>0)?1150:350;$('#to-top').stop().transition({'bottom':'-30px'},$animationTiming,'easeInOutQuint');$window.off('scroll',hideToTop);$window.on('scroll',showToTop)}}
function scrollToTopInit(){if($('.nectar-social.fixed').length==0){toTopBind()}
if($('body[data-button-style*="rounded"]').length>0){var $clone=$('#to-top .fa-angle-up').clone();$clone.addClass('top-icon');$('#to-top').prepend($clone)}
$body.on('click','#to-top, a[href="#top"]',function(){$('body,html').stop().animate({scrollTop:0},800,'easeOutQuad',function(){if($('.nectar-box-roll').length>0){$body.trigger('mousewheel',[1,0,0])}});return!1})}
function scrollSpyInit(){var $headerNavSpace=($('body[data-header-format="left-header"]').length>0&&$window.width()>1000)?0:$headerOuterEl.outerHeight();if($('.page-template-template-no-header-footer').length>0||$('.page-template-template-no-header').length>0){$headerNavSpace=0}
$('header#top .sf-menu li a[href="#"]').on('click',function(e){e.preventDefault()});if($('#nectar_fullscreen_rows').length==0||$nectarFullPage.$usingFullScreenRows==!1){$('a.nectar-next-section').each(function(){if($(this).parents('.wpb_row:not(.inner_row)').length>0){var $parentRow=$(this).parents('.wpb_row:not(.inner_row)'),$parentRowIndex=$(this).parents('.wpb_row:not(.inner_row)').index();if($parentRow.parent().find('> .wpb_row[id]:eq('+($parentRowIndex+1)+')').length>0){var $nextRowID=$parentRow.parent().find('> .wpb_row:eq('+($parentRowIndex+1)+')').attr('id');$(this).attr('href','#'+$nextRowID)}}})}else if($().fullpage){$('a.nectar-next-section').on('click',function(){$.fn.fullpage.moveSectionDown();return!1})}
if($('#slide-out-widget-area .off-canvas-menu-container').length>0){$('#slide-out-widget-area .off-canvas-menu-container').find("a[href*='"+location.pathname+"']").each(function(){var $href=$(this).attr('href');if($href!='#'&&$href.indexOf("#")!=-1&&$('div'+$href.substr($href.indexOf("#"))).length>0){$(this).attr('href',$href.substr($href.indexOf("#")));$(this).parent().removeClass('current_page_item').removeClass('current-menu-item')}
if($('div[data-fullscreen-anchor-id="'+$href.substr($href.indexOf("#")+1)+'"]').length>0){$(this).parent().removeClass('current_page_item').removeClass('current-menu-item')}})}
$("#header-outer").find("a[href*='"+location.pathname+"']").each(function(){var $href=$(this).attr('href');if($href.indexOf("#")!=-1&&$('div'+$href.substr($href.indexOf("#"))).length>0){$(this).attr('href',$href.substr($href.indexOf("#")));$(this).parent().removeClass('current_page_item').removeClass('current-menu-item')}
if($('div[data-fullscreen-anchor-id="'+$href.substr($href.indexOf("#")+1)+'"]').length>0){$(this).parent().removeClass('current_page_item').removeClass('current-menu-item')}});var $target=($('.page-submenu[data-sticky="true"]').length==0)?'#header-outer nav':'.page-submenu';$body.scrollspy({target:$target,offset:$headerNavSpace+nectarDOMInfo.adminBarHeight+40})}
function pageLoadHash(){var $hash=window.location.hash;if($hash&&$hash.length>0){$hash=$hash.replace(/<|>/g,'')}
var $hashSubstrng=($hash&&$hash.length>0)?$hash.substring(1,$hash.length):0,headerPadding2=parseInt($headerOuterEl.attr('data-padding'))*2,$hasSlashLength=0;if($hashSubstrng){$hasSlashLength=$hashSubstrng.split("/");$hasSlashLength=$hasSlashLength.length}
if($hashSubstrng&&$hasSlashLength>1){$hashSubstrng=$hashSubstrng.replace(/\//g,"");$hash=$hash.replace(/\//g,"")}
if($hash&&$('.main-content').find($hash).length>0||$hash&&$('.main-content').find('[data-fullscreen-anchor-id="'+$hashSubstrng+'"]').length>0){var $hashObj=($('.main-content').find($hash).length>0)?$('.main-content').find($hash):$('.main-content').find('[data-fullscreen-anchor-id="'+$hashSubstrng+'"]'),$headerNavSpace=($('body[data-header-format="left-header"]').length>0&&$window.width()>1000)?0:$('#header-space').outerHeight();if($('.page-template-template-no-header-footer').length>0||$('.page-template-template-no-header').length>0){$headerNavSpace=0}
var $timeoutVar=0;if($('.nectar-box-roll').length>0&&$('.container-wrap.bottomBoxOut').length>0){nectarBoxRoll.boxRoll(null,-1);$timeoutVar=2050}
setTimeout(function(){var $scrollTopDistance;if($('body[data-permanent-transparent="1"]').length==0){if(!$body.hasClass('mobile')){var $resize=($('#header-outer[data-header-resize="0"]').length>0)?0:parseInt(logoShrinkNum)+headerPadding2*2;if($('#header-outer[data-remove-fixed="1"]').length>0){$headerNavSpace=0}
$scrollTopDistance=$hashObj.offset().top-parseInt($headerNavSpace)+$resize+3-nectarDOMInfo.adminBarHeight;if($('body.mobile').length==0&&$('#header-outer[data-condense="true"]').length>0){var $headerSpan9=$('#header-outer[data-format="centered-menu-bottom-bar"] header#top .span_9'),$headerHeightStored=$headerOuterEl.height(),$headerHeightCondensed=$headerHeightStored-(parseInt($headerSpan9.height())+parseInt($('#header-outer #logo').css('margin-top')));$scrollTopDistance=$hashObj.offset().top-parseInt($headerNavSpace)+$headerHeightCondensed-nectarDOMInfo.adminBarHeight}}else{$scrollTopDistance=($('#header-outer[data-mobile-fixed="1"]').length>0)?$hashObj.offset().top+2-$headerNavSpace+nectarDOMInfo.adminBarHeight:$hashObj.offset().top-nectarDOMInfo.adminBarHeight+1}}else{$scrollTopDistance=$hashObj.offset().top-nectarDOMInfo.adminBarHeight+1}
if($('body[data-hhun="1"]').length>0&&$('#header-outer[data-remove-fixed="1"]').length==0){if($('#header-outer.detached').length==0){$scrollTopDistance=$scrollTopDistance+$headerNavSpace}}
var $pageSubMenu=($('.page-submenu[data-sticky="true"]').length>0)?$('.page-submenu').height():0;var $headerSecondary;if($('body.material').length>0&&$headerSecondaryEl.length>0&&$('body[data-hhun="1"]').length==0&&$('#header-outer[data-remove-fixed="1"]').length==0&&!$body.hasClass('mobile')){$headerSecondary=$headerSecondaryEl.height()}else{$headerSecondary=0}
nectar_scrollToY($scrollTopDistance-$pageSubMenu+$headerSecondary,700,'easeInOutQuint')},$timeoutVar)}}
function pageLoadHashInit(){if($('body[data-animated-anchors="true"]').length>0){if($('.nectar-box-roll').length==0&&$('#nectar_fullscreen_rows').length==0){if(typeof nectarGetQueryParam.tab!='undefined'){setTimeout(function(){pageLoadHash()},800)}else{pageLoadHash()}}
if($('#nectar_fullscreen_rows[data-mobile-disable="on"]').length>0&&$('.nectar-box-roll').length==0&&nectarDOMInfo.usingMobileBrowser){pageLoadHash()}}}
function animatedAnchorLinks(){if($('body[data-animated-anchors="true"]').length>0||$('.single-product [data-gallery-style="left_thumb_sticky"]').length>0){var headerPadding2=headerPadding-headerPadding/1.8;setTimeout(scrollSpyInit,200);var $animatedScrollingTimeout;$body.on('click','#header-outer nav .sf-menu a, #footer-outer .nectar-button, #mobile-menu li a, .container-wrap a:not(.wpb_tabs_nav a):not(.um-woo-view-order):not(.magnific):not([data-fancybox]):not(.woocommerce-tabs .tabs a):not(.slider-prev):not(.slider-next):not(.testimonial-next-prev a), .swiper-slide .button a, #slide-out-widget-area a, #slide-out-widget-area .inner div a',function(e){var $hash=$(this).prop("hash");if(!$(this).hasClass('nectar-next-section')){$body.addClass('animated-scrolling')}
clearTimeout($animatedScrollingTimeout);$animatedScrollingTimeout=setTimeout(function(){$body.removeClass('animated-scrolling')},850);var $headerNavSpace=($('body[data-header-format="left-header"]').length>0&&$window.width()>1000)?0:$('#header-space').outerHeight();if($('.page-template-template-no-header-footer').length>0||$('.page-template-template-no-header').length>0){$headerNavSpace=0}
if($hash&&$body.find($hash).length>0&&$hash!='#top'&&$hash!=''&&$(this).attr('href').indexOf(window.location.href.split("#")[0])!==-1||$(this).is('[href^="#"]')&&$hash!=''&&$body.find($hash).length>0&&$hash!='#top'){if(!$(this).hasClass('skip-hash')){if(history.pushState){history.pushState(null,null,$hash)}else{location.hash=$hash}}
if($(this).parents('ul').length>0){$(this).parents('ul').find('li').removeClass('current-menu-item')}
if($(this).parents('#slide-out-widget-area').length>0){if($('body.material[data-slide-out-widget-area-style="slide-out-from-right"].material-ocm-open').length>0){$('body > .slide_out_area_close').addClass('non-human-allowed').trigger('click');var $clickedLinkStore=$(this);setTimeout(function(){$clickedLinkStore.trigger('click')},1000)}else{$('#slide-out-widget-area .slide_out_area_close').addClass('non-human-allowed').trigger('click')}
setTimeout(function(){if($('body.material[data-slide-out-widget-area-style="slide-out-from-right"]').length>0){$('body > .slide_out_area_close').removeClass('non-human-allowed')}else{$('#slide-out-widget-area .slide_out_area_close').removeClass('non-human-allowed')}},100)}
if($(this).parents('#mobile-menu').length>0){$('.slide-out-widget-area-toggle.mobile-icon a').addClass('non-human-allowed').trigger('click');setTimeout(function(){$('.slide-out-widget-area-toggle.mobile-icon a').removeClass('non-human-allowed')},100)}
var $mobileMenuHeight=($(this).parents('#mobile-menu').length>0)?$(this).parents('#mobile-menu').height():null;var $timeoutVar=1;var $that=$(this);if($('.nectar-box-roll').length>0&&$('.container-wrap.bottomBoxOut').length>0){nectarBoxRoll.boxRoll(null,-1);$timeoutVar=2050}
setTimeout(function(){var $scrollTopDistance;if($('body[data-permanent-transparent="1"]').length==0){if(!$body.hasClass('mobile')){var $resize=($('#header-outer[data-header-resize="0"]').length>0)?0:parseInt(logoShrinkNum)+headerPadding2*2;if($('#header-outer[data-remove-fixed="1"]').length>0){$headerNavSpace=0}
$scrollTopDistance=$($hash).offset().top-$mobileMenuHeight-parseInt($headerNavSpace)+$resize+3-nectarDOMInfo.adminBarHeight;if($('body.mobile').length==0&&$('#header-outer[data-condense="true"]').length>0){var $headerSpan9=$('#header-outer[data-format="centered-menu-bottom-bar"] header#top .span_9'),$headerHeightStored=$headerOuterEl.height(),$headerHeightCondensed=$headerHeightStored-(parseInt($headerSpan9.height())+parseInt($('#header-outer #logo').css('margin-top')));$scrollTopDistance=$($hash).offset().top-parseInt($headerNavSpace)+$headerHeightCondensed-nectarDOMInfo.adminBarHeight}}else{$scrollTopDistance=($('#header-outer[data-mobile-fixed="1"]').length>0)?$($hash).offset().top+2-$headerNavSpace+nectarDOMInfo.adminBarHeight:$($hash).offset().top-$mobileMenuHeight-nectarDOMInfo.adminBarHeight+1}}else{$scrollTopDistance=$($hash).offset().top-nectarDOMInfo.adminBarHeight+1}
if($('body[data-hhun="1"]').length>0&&$('#header-outer[data-remove-fixed="1"]').length==0){if($('#header-outer.detached').length==0||$that.parents('.page-submenu[data-sticky="true"]').length>0){$scrollTopDistance=$scrollTopDistance+$headerNavSpace}
if($that.parents('.page-submenu[data-sticky="true"]').length>0){$('#header-outer.detached').addClass('invisible');$('.page-submenu').addClass('header-not-visible').css('transform','translateY(0px)')}}
var $pageSubMenu=($that.parents('.page-submenu[data-sticky="true"]').length>0)?$that.parents('.page-submenu').height():0;var $headerSecondary;if($('body.material').length>0&&$headerSecondaryEl.length>0&&$('body[data-hhun="1"]').length==0&&$('#header-outer[data-remove-fixed="1"]').length==0&&!$body.hasClass('mobile')){$headerSecondary=$headerSecondaryEl.height()}else{if($('body[data-hhun="1"]').length>0&&$headerSecondaryEl.length>0&&!$body.hasClass('mobile')&&$('#header-outer[data-remove-fixed="1"]').length==0){$headerSecondary=$headerSecondaryEl.height()}else{$headerSecondary=0}}
nectar_scrollToY($scrollTopDistance-$pageSubMenu+$headerSecondary,700,'easeInOutQuint')},$timeoutVar);e.preventDefault()}
if($hash=='#top'){if($(this).parents('#slide-out-widget-area').length>0){$('#slide-out-widget-area .slide_out_area_close').trigger('click')}}})}}
function searchResultMasonry(){var $searchContainer=$('#search-results'),$dividerNum=($searchContainer.is('[data-layout="masonry-no-sidebar"]'))?4:3;$searchContainer.imagesLoaded(function(){$searchContainer.isotope({itemSelector:'.result',layoutMode:'packery',packery:{columnWidth:$('#search-results').width()/$dividerNum}});$searchContainer.find('article').css('opacity','1')});$window.on('resize',function(){$searchContainer.isotope({layoutMode:'packery',packery:{columnWidth:$('#search-results').width()/$dividerNum}})})}
function searchResultMasonryInit(){if($('body.search-results').length>0&&$('#search-results article').length>0&&$('#search-results[data-layout="list-no-sidebar"]').length==0){searchResultMasonry()}}
function portfolioCustomColoring(){if($('.portfolio-items .col .style-3-alt').length>0||$('.portfolio-items .col .style-3').length>0||$('.portfolio-items .col .style-2').length>0||$('.portfolio-items .col .style-5').length>0){var portfolioColorCss='';$('.portfolio-items .col').each(function(){var $titleColor=$(this).attr('data-title-color'),$subTitleColor=$(this).attr('data-subtitle-color');if($titleColor.length>0){portfolioColorCss+='.col[data-title-color="'+$titleColor+'"] .vert-center h3, .portfolio-items[data-ps="6"] .col[data-title-color="'+$titleColor+'"] .work-meta h4 { color: '+$titleColor+'!important; } ';portfolioColorCss+=' .portfolio-items[data-ps="8"] .col[data-title-color="'+$titleColor+'"] .line { background-color: '+$titleColor+'; }';portfolioColorCss+='.portfolio-items[data-ps="8"] .col[data-title-color="'+$titleColor+'"] .next-arrow line { stroke: '+$titleColor+'; } '}
if($subTitleColor.length>0){portfolioColorCss+='.col[data-subtitle-color="'+$subTitleColor+'"] .vert-center p, .portfolio-items[data-ps="6"] .col[data-title-color="'+$titleColor+'"] .work-meta p { color: '+$subTitleColor+'; } '}});nectarCreateStyle(portfolioColorCss,'nectar-portfolio-colors')}}
function postMouseEvents(){$body.on('mouseover','.post-area.featured_img_left .grav-wrap .text a, .masonry.material .masonry-blog-item .grav-wrap .text a, .blog-recent[data-style="material"] .grav-wrap .text a',function(){$(this).parents('.grav-wrap').find('img').addClass('hovered')});$body.on('mouseleave','.post-area.featured_img_left .grav-wrap .text a, .masonry.material .masonry-blog-item .grav-wrap .text a, .blog-recent[data-style="material"] .grav-wrap .text a',function(){$(this).parents('.grav-wrap').find('img').removeClass('hovered')});$body.on('mouseleave','.container-wrap[data-nav-pos="after_project_2"] #portfolio-nav ul li, .blog_next_prev_buttons[data-style="fullwidth_next_prev"] ul li',function(){$(this).addClass('mouse-leaving')})}
function masonryPortfolioInit(){$portfolio_containers=[];$('.portfolio-items:not(.carousel)').each(function(i){$(this).attr('instance',i);$(this).parent().parent().find('div[class^=portfolio-filters]').attr('instance',i);if(typeof SalientPortfolio!=='undefined'){$portfolio_containers[i]=new SalientPortfolio($(this),fullWidthContentColumns)}})}
function updatePerspectiveOrigin(){if(nectarDOMInfo.winW>690){$('.posts-container[data-load-animation="perspective"]').css('perspective-origin','50% '+(nectarDOMInfo.scrollTop+nectarDOMInfo.winH)+'px')}
requestAnimationFrame(updatePerspectiveOrigin)}
function updatePerspectiveOriginInit(){if($('.posts-container[data-load-animation="perspective"]').length>0){requestAnimationFrame(updatePerspectiveOrigin)}}
function blogLoadIn(post_container){if(post_container.attr('data-load-animation')=='none'){post_container.find('.inner-wrap').removeClass('animated')}else{post_container.find('article').each(function(i){if($(this).visible(!0)){$(this).delay(110*i).queue(function(next){$(this).addClass("animated-in");next()})}else{var $that=$(this);var waypoint=new Waypoint({element:$that,handler:function(){setTimeout(function(){$that.addClass("animated-in")},80*$that.attr('data-delay-amount'));waypoint.destroy()},offset:'90%'})}})}}
function masonryBlogInit(){$nectarMasonryBlogs=[];$('.posts-container').each(function(i){if($(this).parent().hasClass('masonry')&&!$(this).parent().hasClass('auto_meta_overlaid_spaced')){if(typeof NectarMasonryBlog=='undefined'){return}
$nectarMasonryBlogs[i]=new NectarMasonryBlog($(this),fullWidthSections,blogLoadIn)}else{blogLoadIn($(this))}})}
function stickySidebarInit(){if(!$().theiaStickySidebar){return}
$('#sidebar[data-nectar-ss="true"], #sidebar[data-nectar-ss="1"]').each(function(){var $ssExtraTopSpace=50;if($('#header-outer[data-remove-fixed="0"]').length>0&&$('body[data-hhun="1"]').length==0&&$('#header-outer[data-format="left-header"]').length==0){$ssExtraTopSpace+=$headerOuterEl.outerHeight();if($('#header-outer[data-shrink-num][data-header-resize="1"]').length>0){var headerPadding2=parseInt($headerOuterEl.attr('data-padding'))-parseInt($headerOuterEl.attr('data-padding'))/1.8;$ssExtraTopSpace-=logoShrinkNum;$ssExtraTopSpace-=headerPadding2}
if($('body.mobile').length==0&&$('#header-outer[data-condense="true"]').length>0){var $headerSpan9=$('#header-outer[data-format="centered-menu-bottom-bar"] header#top .span_9');$ssExtraTopSpace=50;$ssExtraTopSpace+=$headerOuterEl.height()-(parseInt($headerSpan9.position().top)-parseInt($('#header-outer #logo').css('margin-top')))-parseInt(nectarDOMInfo.secondaryHeaderHeight)}}
if($wpAdminBar.length>0){$ssExtraTopSpace+=$wpAdminBar.outerHeight()}
if($(this).parents('.wpb_widgetised_column').length>0){if($('body.vc_editor').length>0){}else{$(this).parents('.wpb_column').theiaStickySidebar({additionalMarginTop:$ssExtraTopSpace,updateSidebarHeight:!1})}}else{$(this).theiaStickySidebar({additionalMarginTop:$ssExtraTopSpace,updateSidebarHeight:!1})}})}
function sectionDownArrowEvent(){var headerPadding2=headerPadding-headerPadding/1.8;$body.on('click','.section-down-arrow, .scroll-down-wrap > .minimal-arrow',function(){if($(this).parents('.nectar-box-roll').length>0){return!1}
var $currentSection=$(this).parents('#page-header-bg'),$topDistance=$currentSection.height(),$offset=($currentSection.parents('.first-section').length==0||$('body[data-transparent-header="false"]').length>0)?$currentSection.offset().top:0,$bodyBorderSize=($bodyBorderTop.length>0&&$window.width()>1000)?$bodyBorderTop.height():0,$headerNavSpace=($('body[data-header-format="left-header"]').length>0)?0:$('#header-space').height(),$materialSecondary=0;if($('body.material').length>0&&$headerSecondaryEl.length>0){$materialSecondary=$headerSecondaryEl.height()}
if($('body[data-permanent-transparent="1"]').length==0){if(!$body.hasClass('mobile')){if($('body[data-hhun="1"]').length>0&&$('#header-outer[data-remove-fixed="1"]').length==0){$('body,html').stop().animate({scrollTop:parseInt($topDistance)+$offset+2-$bodyBorderSize*2},1000,'easeInOutCubic')}else{var $resize=($('#header-outer[data-header-resize="0"]').length>0)?0:parseInt(logoShrinkNum)+headerPadding2*2;if($('#header-outer[data-remove-fixed="1"]').length>0){$headerNavSpace=0;$offset=0}
if($('body.mobile').length==0&&$('#header-outer[data-condense="true"]').length>0){var $headerSpan9=$('#header-outer[data-format="centered-menu-bottom-bar"] header#top .span_9');$headerNavSpace=$headerOuterEl.height()-(parseInt($headerSpan9.position().top)-parseInt($('#header-outer #logo').css('margin-top')))-parseInt(nectarDOMInfo.secondaryHeaderHeight)}
$('body,html').stop().animate({scrollTop:parseInt($topDistance-$headerNavSpace)+$resize+3+$offset+$materialSecondary},1000,'easeInOutCubic')}}else{var $scrollPos;if($('#header-outer[data-mobile-fixed="1"]').length>0){$scrollPos=parseInt($topDistance)-$headerNavSpace+parseInt($currentSection.offset().top)+2}else{$scrollPos=parseInt($topDistance)+parseInt($currentSection.offset().top)+2}
$('body,html').stop().animate({scrollTop:$scrollPos-$bodyBorderSize*2},1000,'easeInOutCubic')}}else{$('body,html').stop().animate({scrollTop:parseInt($topDistance)+parseInt($currentSection.offset().top)+2-$bodyBorderSize*2},1000,'easeInOutCubic')}
return!1})}
function nectarLiquidBGFP(){$('.nectar-liquid-bg').removeClass('animated-in');for(var k=0;k<$liquidBG_EL.length;k++){if($liquidBG_EL[k].animationType=='displace-filter-fade'&&$($liquidBG_EL[k].canvasContainer).parents('.fp-section.active').length>0){if($($liquidBG_EL[k].canvasContainer).find('.image-added-to-stage').length==0){$liquidBG_EL[k].imgContainer.addChild($liquidBG_EL[k].bg)}
$($liquidBG_EL[k].canvasContainer).find('.nectar-liquid-bg').addClass('image-added-to-stage');$liquidBG_EL[k].animateProps($liquidBG_EL[k])}}}
function nectarFullPageInit(){if($('#nectar_fullscreen_rows').length>0&&$().fullpage){$fullscreenSelector=(window.vc_iframe)?'.vc_element.vc_vc_row.active ':'.wpb_row.active ';$nectarFullPage=new NectarFullScreenRows(waypoints,$mouseParallaxScenes,nectarLiquidBGFP,nectarDOMInfo,responsiveTooltips,$standAnimatedColTimeout,$svgIcons)}}
function crossBrowserAdjust(){if(nectarDOMInfo.usingMobileBrowser){$body.addClass('using-mobile-browser')}
var ua=window.navigator.userAgent;var msie=ua.indexOf("Edge/");if(msie>0){$body.addClass('msie')}
if($('html.js').length==0){$('html').removeClass('no-js').addClass('js')}
$('code').find('br').remove();$('.wpcf7-form p:has(input[type=submit])').css('padding-bottom','0px');$('.full-width-content .wpcf7-submit').on('click',function(){setTimeout(function(){fullWidthContentColumns()},1000);setTimeout(function(){fullWidthContentColumns()},2000)});$('.gform_body').on('click',function(){setTimeout(function(){fullWidthContentColumns()},200)});$('.pum.pum-theme-salient-page-builder-optimized button.pum-close').wrapInner('<span />');if($('#nectar_fullscreen_rows').length>0&&$('.pum-container .pum-content > .wpb_row .full-page-inner > .container > .span_12').length>0){$('.pum-container .pum-content > .wpb_row .full-page-inner > .container > .span_12').unwrap()}
if($('.single .blog_next_prev_buttons').length>0){$('.container-wrap').css('padding-bottom',0)}
$('.full-width-section').each(function(){$(this).find('> .span_12 > div.col_last').last().css('margin-bottom','0')});$('.full-width-content .col.boxed').removeClass('boxed');$('.wpb_column.neg-marg').parents('.wpb_row').css('z-index','110')}
function vcMobileColumns(){$('.wpb_row').each(function(){if(typeof $(this).find('.span_12').offset()!='undefined'){$(this).find('[class*="vc_col-"]').each(function(){var $firstChildOffset=$(this).parents('.span_12').offset().left;$(this).removeClass('no-left-margin');if($(this).offset().left<$firstChildOffset+27){$(this).addClass('no-left-margin')}else{$(this).removeClass('no-left-margin')}})}})}
function vcMobileColumnsInit(){var $winDOMWidth=nectarDOMInfo.winW,$winDOMHeight=nectarDOMInfo.winH,$orientChangeTrack=0;if($body.is('[data-flex-cols="true"]')){return}
if($('[class*="vc_col-xs-"], [class*="vc_col-md-"], [class*="vc_col-lg-"]').length>0){vcMobileColumns();if(!nectarDOMInfo.usingMobileBrowser){$window.on('resize',vcMobileColumns)}else{window.addEventListener("orientationchange",function(){$orientChangeTrack=1});$window.on('resize',function(){if(($window.width()!=$winDOMWidth&&$window.height!=$winDOMHeight)||$orientChangeTrack===1){vcMobileColumns();$winDOMWidth=nectarDOMInfo.winW;$winDOMHeight=nectarDOMInfo.winH;$orientChangeTrack=0}})}}}
function select2Init(){$('select:not(.state_select):not(.country_select):not(.comment-form-rating #rating):not(#tribe-bar-form select):not(.woocommerce-currency-switcher)').each(function(){var $minimumToSearch=(nectarDOMInfo.winW>690)?7:200;if($(this).parents('#buddypress').length==0){if($(this).parents('.woocommerce-ordering').length==0){$(this).select2({minimumResultsForSearch:$minimumToSearch,width:'100%'})}else{$(this).select2({minimumResultsForSearch:$minimumToSearch,dropdownAutoWidth:!0})}}})}
function fancySelectStyling(){if($('body[data-fancy-form-rcs="1"]').length>0){$('select:not(.comment-form-rating #rating)').each(function(){var $selector;if($(this).parents('.wpcf7-form-control-wrap').length>0){if($(this).parents('.wpcf7-form-control-wrap').find('.select2-container').length>0){$selector=$($(this).prev('.select2-container'))}else{$selector=$(this)}
if($selector.parents('.wpcf7-form-control-wrap').parent().find('label').length==1){$selector.parents('.wpcf7-form-control-wrap').parent().wrapInner('<div class="fancy-select-wrap" />')}else{$selector.wrap('<div class="fancy-select-wrap" />')}}else{if($(this).prev('.select2-container').length>0){$selector=$(this).prev('.select2-container')}else{$selector=$(this)}
if($(this).parents('#buddypress').length==0&&$(this).parents('.widget_categories').length==0){if($selector.prev('label').length==1){$selector.prev('label').andSelf().wrapAll('<div class="fancy-select-wrap" />')}else if($selector.next('label').length==1){$selector.next('label').andSelf().wrapAll('<div class="fancy-select-wrap" />')}else{$selector.wrap('<div class="fancy-select-wrap" />')}}}});select2Init()}}
function bfCacheAssist(){if(navigator.userAgent.indexOf('Safari')!=-1&&navigator.userAgent.indexOf('Chrome')==-1||navigator.userAgent.match(/(iPod|iPhone|iPad)/)){window.onpageshow=function(event){if(event.persisted){$('.nectar-video-wrap, .nectar-slider-wrap .swiper-slide .video-wrap').each(function(){if($(this).find('video').length>0){$(this).find('video')[0].play()}});if($('body.material-ocm-open').length>0){$('body > .slide_out_area_close').addClass('non-human-allowed').trigger('click');setTimeout(function(){$('body > .slide_out_area_close').removeClass('non-human-allowed')},100)}else if($('#slide-out-widget-area.slide-out-from-right-hover.open').length>0&&navigator.userAgent.match(/(iPod|iPhone|iPad)/)){OCM_mobileSlideOutRightHoverCloseCheck()}else if($('#slide-out-widget-area.fullscreen.open').length>0||$('#slide-out-widget-area.fullscreen-alt.open').length>0||$('#slide-out-widget-area.slide-out-from-right.open').length>0){$('#slide-out-widget-area .slide_out_area_close').addClass('non-human-allowed');$('.slide-out-widget-area-toggle:not(.std-menu) a.open').addClass('non-human-allowed').trigger('click');setTimeout(function(){$('#slide-out-widget-area .slide_out_area_close').removeClass('non-human-allowed')},100)}}}}}
function addRowCtrls(){$('.wpb_row').removeClass('only-ns');$('.nectar-slider-wrap[data-full-width="true"], .page-submenu, .portfolio-items[data-col-num="elastic"]:not(.fullwidth-constrained), .blog-fullwidth-wrap').parents('.wpb_row').addClass('only-ns');$('body.vc_editor.compose-mode .wpb_row .vc_vc_column > .wpb_column > .vc_column-inner').each(function(){if($(this).find('> .vc_element-container > div').length>0){if($(this).find('> .vc_element-container > div:first-child').is('.vc_vc_row_inner')){$(this).find('> .vc_element-container > div:first-child').addClass('first-inner-row-el')}else{$(this).find('> .vc_element-container > div:first-child').removeClass('first-inner-row-el')}}})}
function convertFrontEndPadding(){$('.vc_element > .wpb_column[class*="padding-"][class*="-percent"]').each(function(){var $elPaddingPercent=4;var elclassName=this.className.match(/padding-\d+/);if(elclassName){$elPaddingPercent=elclassName[0].match(/\d+/);if($elPaddingPercent){$elPaddingPercent=$elPaddingPercent[0]/100}else{$elPaddingPercent=0}}
if($elPaddingPercent){var $parentRowWidth=$(this).parents('.span_12').width();if($(this).is('[data-padding-pos="all"]')){$(this).css('padding',$parentRowWidth*$elPaddingPercent)}else if($(this).is('[data-padding-pos="top"]')){$(this).css('padding-top',$parentRowWidth*$elPaddingPercent)}else if($(this).is('[data-padding-pos="bottom"]')){$(this).css('padding-bottom',$parentRowWidth*$elPaddingPercent)}else if($(this).is('[data-padding-pos="left"]')){$(this).css('padding-left',$parentRowWidth*$elPaddingPercent)}else if($(this).is('[data-padding-pos="right"]')){$(this).css('padding-right',$parentRowWidth*$elPaddingPercent)}else if($(this).is('[data-padding-pos="top-bottom"]')){$(this).css({'padding-top':$parentRowWidth*$elPaddingPercent,'padding-bottom':$parentRowWidth*$elPaddingPercent,})}else if($(this).is('[data-padding-pos="top-right"]')){$(this).css({'padding-top':$parentRowWidth*$elPaddingPercent,'padding-right':$parentRowWidth*$elPaddingPercent,})}else if($(this).is('[data-padding-pos="bottom-right"]')){$(this).css({'padding-right':$parentRowWidth*$elPaddingPercent,'padding-bottom':$parentRowWidth*$elPaddingPercent,})}else if($(this).is('[data-padding-pos="bottom-left"]')){$(this).css({'padding-left':$parentRowWidth*$elPaddingPercent,'padding-bottom':$parentRowWidth*$elPaddingPercent,})}else if($(this).is('[data-padding-pos="left-right"]')){$(this).css({'padding-left':$parentRowWidth*$elPaddingPercent,'padding-right':$parentRowWidth*$elPaddingPercent,})}}});$('.wpb_row[class*="vc_custom_"]').each(function(){$(this).parent().addClass('no-bottom-margin')})}
function wpBakeryFrontendInit(){setTimeout(function(){if($('body.compose-mode').length>0){$('.container-wrap').addClass('visible-editor-controls')}
if(nectarDOMInfo.usingFrontEndEditor){addRowCtrls();if(!$body.is('[data-flex-cols="true"]')){convertFrontEndPadding();$window.smartresize(convertFrontEndPadding)}}},200);$window.on('vc_reload',function(){addRowCtrls();columnBGColors();coloredButtons();twentytwentyInit();parallaxRowsBGCals();flexsliderInit();accordionInit();ulCheckmarks();nectarFancyUlIcons();nectarFancyBoxHover();oneFourthClasses();carouselfGrabbingClass();nectarPostGridInit();splitLineHeadingInit();nectarVideoLightbox();nectarKeyframeAssist();nectarLazyImageLoading();if($('.carousel').length>0){standardCarouselInit();clientsCarouselInit();carouselHeightCalcs()}
if($('.owl-carousel').length>0){$('.owl-carousel').each(function(){$(this).trigger('destroy.owl.carousel').removeClass('owl-loaded');$(this).find('.owl-stage-outer .owl-stage > *').unwrap();$(this).find('.owl-stage-outer > *').unwrap();$(this).find('.owl-item > *').unwrap();$(this).find('.owl-dots').remove();$(this).find('.owl-nav').remove()});owlCarouselInit()}
if($('.nectar_cascading_images').length>0){imagesLoaded($('.nectar_cascading_images'),function(){cascadingImageBGSizing()})}
fullWidthSections();fwsClasses();recentPostsInit();fullWidthRowPaddingAdjust();if($flickitySliders.length>0){for(var i=0;i<$flickitySliders.length;i++){$flickitySliders[i].reloadCells();$flickitySliders[i].off('scroll.flickity');$flickitySliders[i].off('dragStart.flickity');$flickitySliders[i].off('dragEnd.flickity')}}
flickityLazyInit();setTimeout(function(){flickityInit();if($flickitySliders.length>0){for(var i=0;i<$flickitySliders.length;i++){$flickitySliders[i].reloadCells();$flickitySliders[i].resize()}}},100);if($wooFlickityCarousels.length>0){for(var i=0;i<$wooFlickityCarousels.length;i++){$wooFlickityCarousels[i].flickity('reloadCells');$wooFlickityCarousels[i].off('scroll.flickity');$wooFlickityCarousels[i].off('dragStart.flickity');$wooFlickityCarousels[i].off('dragEnd.flickity')}}
setTimeout(function(){if($('.nectar-woo-flickity').length>0){productCarouselInit()}
if($wooFlickityCarousels.length>0){for(var i=0;i<$wooFlickityCarousels.length;i++){$wooFlickityCarousels[i].flickity('reloadCells');$wooFlickityCarousels[i].flickity('resize')}}},100);nectarTestimonialSliders();for(var i=0;i<$testimonialSliders.length;i++){if($testimonialSliders[i].type=='multiple_visible'||$testimonialSliders[i].type=='multiple_visible_minimal'){$testimonialSliders[i].flickityEl.flickity('reloadCells');$testimonialSliders[i].flickityEl.off('select.flickity');nectarTestimonialSliders();$testimonialSliders[i].flickityEl.resize()}
$testimonialSliders[i].testimonialSliderHeight()}
nectarTestimonialSlidersEvents();pricingTableHeight();nectarIconMatchColoring();lightBoxInit();imageWithHotspotEvents();largeIconHover();nectarBoxRollInit();midnightInit();responsiveVideoIframesInit();responsiveVideoIframes();fullWidthContentColumns();setTimeout(fullWidthContentColumns,1000);videoBGInit();vcFullHeightRowInit();$window.off('scroll.parallaxSections').off('resize.parallaxSections');parallaxScrollInit();masonryBlogInit();masonryPortfolioInit();if($portfolio_containers.length>0){for(var i=0;i<$portfolio_containers.length;i++){$portfolio_containers[i].portfolioAccentColor()}}
parallaxItemHoverEffect();fsProjectSliderInit();setTimeout(function(){if($('.nectar_fullscreen_zoom_recent_projects').length>0){if($fsProjectSliderArr.length>0){for(var i=0;i<$fsProjectSliderArr.length;i++){$fsProjectSliderArr[i].sliderCalcs()}}}},300);$window.unbind('.infscr');infiniteScrollInit();mouseParallaxInit();$('.nectar-video-wrap').each(function(){if($(this).find('video').length>0){$(this).find('video').css('visibility','visible')}});$('.wpb_column[data-t-w-inherits]').each(function(){if($(this).is('[data-t-w-inherits="small_desktop"]')){$(this).parent().addClass('inherits-s-desktop-col')}else{$(this).parent().removeClass('inherits-s-desktop-col')}});if($('#nectar_fullscreen_rows').length>0){if($('#nectar_fullscreen_rows > .vc_element').length==0){$('#nectar_fullscreen_rows').prepend('<div class="vc_element empty_placeholder" />')}
if($('#nectar_fullscreen_rows > .vc_element:not(.empty_placeholder)').length>0){$('#nectar_fullscreen_rows >.vc_element.empty_placeholder').remove()}
$.fn.fullpage.destroy('all');nectarFullPageInit();var nectarFPOffsets=[{el:'',offset:0}];$('#nectar_fullscreen_rows > div.vc_element').each(function(i){nectarFPOffsets[i]={el:$(this),offset:$(this).offset().top}});if($('#nectar_fullscreen_rows > div.vc_element').length===1){$('#nectar_fullscreen_rows').css({'transform':'translate3d(0,0,0)'})}
$body.scrollTo(0,0)}else{if($('body .main-content > .row > .vc_element:first > .wpb_row[class*="full-width-"]').length>0||$('body .main-content > .row > .vc_element:first .nectar-slider-wrap[data-full-width="true"]').length>0){$('.container-wrap').css({'padding-top':'0','margin-top':'0'})}else{$('.container-wrap').css({'padding-top':'40px'})}}
$svgIcons=[];$('.svg-icon-holder').removeClass('animated-in').removeClass('bound');if($('.vc_nectar_gmap').length>0){setTimeout(function(){if(typeof google==='object'&&typeof google.maps==='object'){window.mapAPI_Loaded()}else{if(window.nectarLove.mapApiKey.length>0){$.getScript('https://maps.google.com/maps/api/js?sensor=false&key='+window.nectarLove.mapApiKey+'&callback=mapAPI_Loaded')}}},100)}
stickySidebarInit();if(typeof window.Waypoint!='undefined'){Waypoint.destroyAll();waypoints()}})}
function pageTransitionInit(){if($('body[data-ajax-transitions="true"]').length>0&&$('#ajax-loading-screen[data-method="standard"]').length>0){$('html').addClass('page-trans-loaded');if($('#ajax-loading-screen[data-effect="standard"]').length>0){if($('.nectar-particles').length==0){$loadingScreenEl.transition({'opacity':0},500,function(){$(this).css({'display':'none'})});$('#ajax-loading-screen .loading-icon').transition({'opacity':0},500)}
if($('.nectar-box-roll').length==0){setTimeout(function(){waypoints()},550)}}else{if($('#ajax-loading-screen[data-effect*="horizontal_swipe"]').length>0){setTimeout(function(){$loadingScreenEl.addClass('loaded')},60)}
if($('#page-header-wrap #page-header-bg[data-animate-in-effect="zoom-out"] .nectar-video-wrap').length==0){setTimeout(function(){$('#ajax-loading-screen:not(.loaded)').addClass('loaded');setTimeout(function(){$loadingScreenEl.addClass('hidden')},1000)},150)}
if($('.nectar-box-roll').length==0&&$('#ajax-loading-screen[data-effect*="horizontal_swipe"]').length>0){setTimeout(function(){waypoints()},750)}else if($('.nectar-box-roll').length==0)setTimeout(function(){waypoints()},350)}
if(navigator.userAgent.indexOf('Safari')!=-1&&navigator.userAgent.indexOf('Chrome')==-1||navigator.userAgent.match(/(iPod|iPhone|iPad)/)){window.onunload=function(){$loadingScreenEl.stop().transition({'opacity':0},800,function(){$(this).css({'display':'none'})});$('#ajax-loading-screen .loading-icon').transition({'opacity':0},600)};window.onpageshow=function(event){if(event.persisted){$loadingScreenEl.stop().transition({'opacity':0},800,function(){$(this).css({'display':'none'})});$('#ajax-loading-screen .loading-icon').transition({'opacity':0},600)}}}else if(navigator.userAgent.indexOf('Firefox')!=-1){window.onunload=function(){}}
$('.portfolio-loading, .nectar-slider-loading .loading-icon').remove();if($('#ajax-loading-screen[data-disable-fade-on-click="1"]').length==0){if($('body.using-mobile-browser #ajax-loading-screen[data-method="standard"][data-disable-mobile="1"]').length==0){var ignore_onbeforeunload=!1;$('a[href^="mailto"], a[href^="tel"]').on('click',function(){ignore_onbeforeunload=!0});window.addEventListener('beforeunload',function(){if(!ignore_onbeforeunload){$loadingScreenEl.addClass('set-to-fade');transitionPage()}
ignore_onbeforeunload=!1})}}}else{if($('.nectar-box-roll').length==0&&!nectarDOMInfo.usingFrontEndEditor){setTimeout(function(){waypoints()},100)}}
function transitionPage(){if($('#ajax-loading-screen[data-effect*="horizontal_swipe"]').length>0){$loadingScreenEl.removeClass('loaded');$loadingScreenEl.addClass('in-from-right');setTimeout(function(){$loadingScreenEl.addClass('loaded')},30)}else{if($('#ajax-loading-screen[data-effect="center_mask_reveal"]').length>0){$loadingScreenEl.css('opacity','0').css('display','block').transition({'opacity':'1'},450)}else{$loadingScreenEl.show().transition({'opacity':'1'},450)}}}}
jQuery(document).ready(function($){nectarDOMInfo.init();nectarBoxRollInit();nectarFullPageInit();nectarLazyImageLoading();initSF();navigationSearchInit();centeredNavBottomBarInit();centeredLogoHeaderInit();headerNavPreInit();headerNavScrollInit();headerNavOffsetInit();salientPageBuilderElInit();columnBGColors();vcMobileColumnsInit();fullWidthSections();fwsClasses();fwCarouselLinkFix();fullWidthSectionsPreInit();firstFWSection();parallaxScrollInit();parallaxRowsBGCals();fullWidthRowPaddingAdjust();fullWidthContentColumns();oneFourthClasses();fixIeFlexbox();vcFullHeightRowInit();lightBoxInit();audioVideoVis();responsiveVideoIframesInit();responsiveVideoIframes();videoBGInit();blogSingle();mobileNavMegamenuCorrect();materialSkinOCM_Init();OCM_dropdownMarkup();OCM_dropdownIconPos();clickToggleSubmenus();OCM_init();pageHeaderInit();footerRevealInit();wooCommerceEvents();fancySelectStyling();infiniteScrollInit();scrollToTopInit();animatedAnchorLinks();updatePerspectiveOriginInit();sectionDownArrowEvent();crossBrowserAdjust();bfCacheAssist();wpBakeryFrontendInit();pageTransitionInit();$window.off('smartresize.srInit');$window.on('smartresize.srInit',smartResizeInit);$window.off('resize.srInit');$window.on('resize.srInit',resizeInit);$window.on('load',function(){if($(window).scrollTop()==0){headerSpace()}
$('video').css('visibility','visible');pageLoadHashInit();fullWidthContentColumns();parallaxRowsBGCals();resizeVideoToCover()})})}(window.jQuery,window,document));
/*!
 * WPBakery Page Builder v6.0.0 (https://wpbakery.com)
 * Copyright 2011-2019 Michael M, WPBakery
 * License: Commercial. More details: http://go.wpbakery.com/licensing
 */

// jscs:disable
// jshint ignore: start

/*
 * jQuery FlexSlider v2.2.2
 * Copyright 2012 WooThemes
 * Contributing Author: Tyler Smith
 */
!function(a){a.flexslider=function(b,c){var d=a(b);d.vars=a.extend({},a.flexslider.defaults,c);var j,e=d.vars.namespace,f=window.navigator&&window.navigator.msPointerEnabled&&window.MSGesture,g=("ontouchstart"in window||f||window.DocumentTouch&&document instanceof DocumentTouch)&&d.vars.touch,h="click touchend MSPointerUp",i="",k="vertical"===d.vars.direction,l=d.vars.reverse,m=d.vars.itemWidth>0,n="fade"===d.vars.animation,o=""!==d.vars.asNavFor,p={},q=!0;a.data(b,"flexslider",d),p={init:function(){d.animating=!1,d.currentSlide=parseInt(d.vars.startAt?d.vars.startAt:0,10),isNaN(d.currentSlide)&&(d.currentSlide=0),d.animatingTo=d.currentSlide,d.atEnd=0===d.currentSlide||d.currentSlide===d.last,d.containerSelector=d.vars.selector.substr(0,d.vars.selector.search(" ")),d.slides=a(d.vars.selector,d),d.container=a(d.containerSelector,d),d.count=d.slides.length,d.syncExists=a(d.vars.sync).length>0,"slide"===d.vars.animation&&(d.vars.animation="swing"),d.prop=k?"top":"marginLeft",d.args={},d.manualPause=!1,d.stopped=!1,d.started=!1,d.startTimeout=null,d.transitions=!d.vars.video&&!n&&d.vars.useCSS&&function(){var a=document.createElement("div"),b=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"];for(var c in b)if(void 0!==a.style[b[c]])return d.pfx=b[c].replace("Perspective","").toLowerCase(),d.prop="-"+d.pfx+"-transform",!0;return!1}(),d.ensureAnimationEnd="",""!==d.vars.controlsContainer&&(d.controlsContainer=a(d.vars.controlsContainer).length>0&&a(d.vars.controlsContainer)),""!==d.vars.manualControls&&(d.manualControls=a(d.vars.manualControls).length>0&&a(d.vars.manualControls)),d.vars.randomize&&(d.slides.sort(function(){return Math.round(Math.random())-.5}),d.container.empty().append(d.slides)),d.doMath(),d.setup("init"),d.vars.controlNav&&p.controlNav.setup(),d.vars.directionNav&&p.directionNav.setup(),d.vars.keyboard&&(1===a(d.containerSelector).length||d.vars.multipleKeyboard)&&a(document).bind("keyup",function(a){var b=a.keyCode;if(!d.animating&&(39===b||37===b)){var c=39===b?d.getTarget("next"):37===b?d.getTarget("prev"):!1;d.flexAnimate(c,d.vars.pauseOnAction)}}),d.vars.mousewheel&&d.bind("mousewheel",function(a,b){a.preventDefault();var f=0>b?d.getTarget("next"):d.getTarget("prev");d.flexAnimate(f,d.vars.pauseOnAction)}),d.vars.pausePlay&&p.pausePlay.setup(),d.vars.slideshow&&d.vars.pauseInvisible&&p.pauseInvisible.init(),d.vars.slideshow&&(d.vars.pauseOnHover&&d.hover(function(){d.manualPlay||d.manualPause||d.pause()},function(){d.manualPause||d.manualPlay||d.stopped||d.play()}),d.vars.pauseInvisible&&p.pauseInvisible.isHidden()||(d.vars.initDelay>0?d.startTimeout=setTimeout(d.play,d.vars.initDelay):d.play())),o&&p.asNav.setup(),g&&d.vars.touch&&p.touch(),(!n||n&&d.vars.smoothHeight)&&a(window).bind("resize orientationchange focus",p.resize),d.find("img").attr("draggable","false"),setTimeout(function(){d.vars.start(d)},200)},asNav:{setup:function(){d.asNav=!0,d.animatingTo=Math.floor(d.currentSlide/d.move),d.currentItem=d.currentSlide,d.slides.removeClass(e+"active-slide").eq(d.currentItem).addClass(e+"active-slide"),f?(b._slider=d,d.slides.each(function(){var b=this;b._gesture=new MSGesture,b._gesture.target=b,b.addEventListener("MSPointerDown",function(a){a.preventDefault(),a.currentTarget._gesture&&a.currentTarget._gesture.addPointer(a.pointerId)},!1),b.addEventListener("MSGestureTap",function(b){b.preventDefault();var c=a(this),e=c.index();a(d.vars.asNavFor).data("flexslider").animating||c.hasClass("active")||(d.direction=d.currentItem<e?"next":"prev",d.flexAnimate(e,d.vars.pauseOnAction,!1,!0,!0))})})):d.slides.on(h,function(b){b.preventDefault();var c=a(this),f=c.index(),g=c.offset().left-a(d).scrollLeft();0>=g&&c.hasClass(e+"active-slide")?d.flexAnimate(d.getTarget("prev"),!0):a(d.vars.asNavFor).data("flexslider").animating||c.hasClass(e+"active-slide")||(d.direction=d.currentItem<f?"next":"prev",d.flexAnimate(f,d.vars.pauseOnAction,!1,!0,!0))})}},controlNav:{setup:function(){d.manualControls?p.controlNav.setupManual():p.controlNav.setupPaging()},setupPaging:function(){var f,g,b="thumbnails"===d.vars.controlNav?"control-thumbs":"control-paging",c=1;if(d.controlNavScaffold=a('<ol class="'+e+"control-nav "+e+b+'"></ol>'),d.pagingCount>1)for(var j=0;j<d.pagingCount;j++){if(g=d.slides.eq(j),f="thumbnails"===d.vars.controlNav?'<img src="'+g.attr("data-thumb")+'"/>':"<a>"+c+"</a>","thumbnails"===d.vars.controlNav&&!0===d.vars.thumbCaptions){var k=g.attr("data-thumbcaption");""!=k&&void 0!=k&&(f+='<span class="'+e+'caption">'+k+"</span>")}d.controlNavScaffold.append("<li>"+f+"</li>"),c++}d.controlsContainer?a(d.controlsContainer).append(d.controlNavScaffold):d.append(d.controlNavScaffold),p.controlNav.set(),p.controlNav.active(),d.controlNavScaffold.delegate("a, img",h,function(b){if(b.preventDefault(),""===i||i===b.type){var c=a(this),f=d.controlNav.index(c);c.hasClass(e+"active")||(d.direction=f>d.currentSlide?"next":"prev",d.flexAnimate(f,d.vars.pauseOnAction))}""===i&&(i=b.type),p.setToClearWatchedEvent()})},setupManual:function(){d.controlNav=d.manualControls,p.controlNav.active(),d.controlNav.bind(h,function(b){if(b.preventDefault(),""===i||i===b.type){var c=a(this),f=d.controlNav.index(c);c.hasClass(e+"active")||(d.direction=f>d.currentSlide?"next":"prev",d.flexAnimate(f,d.vars.pauseOnAction))}""===i&&(i=b.type),p.setToClearWatchedEvent()})},set:function(){var b="thumbnails"===d.vars.controlNav?"img":"a";d.controlNav=a("."+e+"control-nav li "+b,d.controlsContainer?d.controlsContainer:d)},active:function(){d.controlNav.removeClass(e+"active").eq(d.animatingTo).addClass(e+"active")},update:function(b,c){d.pagingCount>1&&"add"===b?d.controlNavScaffold.append(a("<li><a>"+d.count+"</a></li>")):1===d.pagingCount?d.controlNavScaffold.find("li").remove():d.controlNav.eq(c).closest("li").remove(),p.controlNav.set(),d.pagingCount>1&&d.pagingCount!==d.controlNav.length?d.update(c,b):p.controlNav.active()}},directionNav:{setup:function(){var b=a('<ul class="'+e+'direction-nav"><li><a class="'+e+'prev" href="#">'+d.vars.prevText+'</a></li><li><a class="'+e+'next" href="#">'+d.vars.nextText+"</a></li></ul>");d.controlsContainer?(a(d.controlsContainer).append(b),d.directionNav=a("."+e+"direction-nav li a",d.controlsContainer)):(d.append(b),d.directionNav=a("."+e+"direction-nav li a",d)),p.directionNav.update(),d.directionNav.bind(h,function(b){b.preventDefault();var c;(""===i||i===b.type)&&(c=a(this).hasClass(e+"next")?d.getTarget("next"):d.getTarget("prev"),d.flexAnimate(c,d.vars.pauseOnAction)),""===i&&(i=b.type),p.setToClearWatchedEvent()})},update:function(){var a=e+"disabled";1===d.pagingCount?d.directionNav.addClass(a).attr("tabindex","-1"):d.vars.animationLoop?d.directionNav.removeClass(a).removeAttr("tabindex"):0===d.animatingTo?d.directionNav.removeClass(a).filter("."+e+"prev").addClass(a).attr("tabindex","-1"):d.animatingTo===d.last?d.directionNav.removeClass(a).filter("."+e+"next").addClass(a).attr("tabindex","-1"):d.directionNav.removeClass(a).removeAttr("tabindex")}},pausePlay:{setup:function(){var b=a('<div class="'+e+'pauseplay"><a></a></div>');d.controlsContainer?(d.controlsContainer.append(b),d.pausePlay=a("."+e+"pauseplay a",d.controlsContainer)):(d.append(b),d.pausePlay=a("."+e+"pauseplay a",d)),p.pausePlay.update(d.vars.slideshow?e+"pause":e+"play"),d.pausePlay.bind(h,function(b){b.preventDefault(),(""===i||i===b.type)&&(a(this).hasClass(e+"pause")?(d.manualPause=!0,d.manualPlay=!1,d.pause()):(d.manualPause=!1,d.manualPlay=!0,d.play())),""===i&&(i=b.type),p.setToClearWatchedEvent()})},update:function(a){"play"===a?d.pausePlay.removeClass(e+"pause").addClass(e+"play").html(d.vars.playText):d.pausePlay.removeClass(e+"play").addClass(e+"pause").html(d.vars.pauseText)}},touch:function(){function r(f){d.animating?f.preventDefault():(window.navigator.msPointerEnabled||1===f.touches.length)&&(d.pause(),g=k?d.h:d.w,i=Number(new Date),o=f.touches[0].pageX,p=f.touches[0].pageY,e=m&&l&&d.animatingTo===d.last?0:m&&l?d.limit-(d.itemW+d.vars.itemMargin)*d.move*d.animatingTo:m&&d.currentSlide===d.last?d.limit:m?(d.itemW+d.vars.itemMargin)*d.move*d.currentSlide:l?(d.last-d.currentSlide+d.cloneOffset)*g:(d.currentSlide+d.cloneOffset)*g,a=k?p:o,c=k?o:p,b.addEventListener("touchmove",s,!1),b.addEventListener("touchend",t,!1))}function s(b){o=b.touches[0].pageX,p=b.touches[0].pageY,h=k?a-p:a-o,j=k?Math.abs(h)<Math.abs(o-c):Math.abs(h)<Math.abs(p-c);var f=500;(!j||Number(new Date)-i>f)&&(b.preventDefault(),!n&&d.transitions&&(d.vars.animationLoop||(h/=0===d.currentSlide&&0>h||d.currentSlide===d.last&&h>0?Math.abs(h)/g+2:1),d.setProps(e+h,"setTouch")))}function t(){if(b.removeEventListener("touchmove",s,!1),d.animatingTo===d.currentSlide&&!j&&null!==h){var k=l?-h:h,m=k>0?d.getTarget("next"):d.getTarget("prev");d.canAdvance(m)&&(Number(new Date)-i<550&&Math.abs(k)>50||Math.abs(k)>g/2)?d.flexAnimate(m,d.vars.pauseOnAction):n||d.flexAnimate(d.currentSlide,d.vars.pauseOnAction,!0)}b.removeEventListener("touchend",t,!1),a=null,c=null,h=null,e=null}function u(a){a.stopPropagation(),d.animating?a.preventDefault():(d.pause(),b._gesture.addPointer(a.pointerId),q=0,g=k?d.h:d.w,i=Number(new Date),e=m&&l&&d.animatingTo===d.last?0:m&&l?d.limit-(d.itemW+d.vars.itemMargin)*d.move*d.animatingTo:m&&d.currentSlide===d.last?d.limit:m?(d.itemW+d.vars.itemMargin)*d.move*d.currentSlide:l?(d.last-d.currentSlide+d.cloneOffset)*g:(d.currentSlide+d.cloneOffset)*g)}function v(a){a.stopPropagation();var c=a.target._slider;if(c){var d=-a.translationX,f=-a.translationY;return q+=k?f:d,h=q,j=k?Math.abs(q)<Math.abs(-d):Math.abs(q)<Math.abs(-f),a.detail===a.MSGESTURE_FLAG_INERTIA?(setImmediate(function(){b._gesture.stop()}),void 0):((!j||Number(new Date)-i>500)&&(a.preventDefault(),!n&&c.transitions&&(c.vars.animationLoop||(h=q/(0===c.currentSlide&&0>q||c.currentSlide===c.last&&q>0?Math.abs(q)/g+2:1)),c.setProps(e+h,"setTouch"))),void 0)}}function w(b){b.stopPropagation();var d=b.target._slider;if(d){if(d.animatingTo===d.currentSlide&&!j&&null!==h){var f=l?-h:h,k=f>0?d.getTarget("next"):d.getTarget("prev");d.canAdvance(k)&&(Number(new Date)-i<550&&Math.abs(f)>50||Math.abs(f)>g/2)?d.flexAnimate(k,d.vars.pauseOnAction):n||d.flexAnimate(d.currentSlide,d.vars.pauseOnAction,!0)}a=null,c=null,h=null,e=null,q=0}}var a,c,e,g,h,i,j=!1,o=0,p=0,q=0;f?(b.style.msTouchAction="none",b._gesture=new MSGesture,b._gesture.target=b,b.addEventListener("MSPointerDown",u,!1),b._slider=d,b.addEventListener("MSGestureChange",v,!1),b.addEventListener("MSGestureEnd",w,!1)):b.addEventListener("touchstart",r,!1)},resize:function(){!d.animating&&d.is(":visible")&&(m||d.doMath(),n?p.smoothHeight():m?(d.slides.width(d.computedW),d.update(d.pagingCount),d.setProps()):k?(d.viewport.height(d.h),d.setProps(d.h,"setTotal")):(d.vars.smoothHeight&&p.smoothHeight(),d.newSlides.width(d.computedW),d.setProps(d.computedW,"setTotal")))},smoothHeight:function(a){if(!k||n){var b=n?d:d.viewport;a?b.animate({height:d.slides.eq(d.animatingTo).height()},a):b.height(d.slides.eq(d.animatingTo).height())}},sync:function(b){var c=a(d.vars.sync).data("flexslider"),e=d.animatingTo;switch(b){case"animate":c.flexAnimate(e,d.vars.pauseOnAction,!1,!0);break;case"play":c.playing||c.asNav||c.play();break;case"pause":c.pause()}},uniqueID:function(b){return b.find("[id]").each(function(){var b=a(this);b.attr("id",b.attr("id")+"_clone")}),b},pauseInvisible:{visProp:null,init:function(){var a=["webkit","moz","ms","o"];if("hidden"in document)return"hidden";for(var b=0;b<a.length;b++)a[b]+"Hidden"in document&&(p.pauseInvisible.visProp=a[b]+"Hidden");if(p.pauseInvisible.visProp){var c=p.pauseInvisible.visProp.replace(/[H|h]idden/,"")+"visibilitychange";document.addEventListener(c,function(){p.pauseInvisible.isHidden()?d.startTimeout?clearTimeout(d.startTimeout):d.pause():d.started?d.play():d.vars.initDelay>0?setTimeout(d.play,d.vars.initDelay):d.play()})}},isHidden:function(){return document[p.pauseInvisible.visProp]||!1}},setToClearWatchedEvent:function(){clearTimeout(j),j=setTimeout(function(){i=""},3e3)}},d.flexAnimate=function(b,c,f,h,i){if(d.vars.animationLoop||b===d.currentSlide||(d.direction=b>d.currentSlide?"next":"prev"),o&&1===d.pagingCount&&(d.direction=d.currentItem<b?"next":"prev"),!d.animating&&(d.canAdvance(b,i)||f)&&d.is(":visible")){if(o&&h){var j=a(d.vars.asNavFor).data("flexslider");if(d.atEnd=0===b||b===d.count-1,j.flexAnimate(b,!0,!1,!0,i),d.direction=d.currentItem<b?"next":"prev",j.direction=d.direction,Math.ceil((b+1)/d.visible)-1===d.currentSlide||0===b)return d.currentItem=b,d.slides.removeClass(e+"active-slide").eq(b).addClass(e+"active-slide"),!1;d.currentItem=b,d.slides.removeClass(e+"active-slide").eq(b).addClass(e+"active-slide"),b=Math.floor(b/d.visible)}if(d.animating=!0,d.animatingTo=b,c&&d.pause(),d.vars.before(d),d.syncExists&&!i&&p.sync("animate"),d.vars.controlNav&&p.controlNav.active(),m||d.slides.removeClass(e+"active-slide").eq(b).addClass(e+"active-slide"),d.atEnd=0===b||b===d.last,d.vars.directionNav&&p.directionNav.update(),b===d.last&&(d.vars.end(d),d.vars.animationLoop||d.pause()),n)g?(d.slides.eq(d.currentSlide).css({opacity:0,zIndex:1}),d.slides.eq(b).css({opacity:1,zIndex:2}),d.wrapup(q)):(d.slides.eq(d.currentSlide).css({zIndex:1}).animate({opacity:0},d.vars.animationSpeed,d.vars.easing),d.slides.eq(b).css({zIndex:2}).animate({opacity:1},d.vars.animationSpeed,d.vars.easing,d.wrapup));else{var r,s,t,q=k?d.slides.filter(":first").height():d.computedW;m?(r=d.vars.itemMargin,t=(d.itemW+r)*d.move*d.animatingTo,s=t>d.limit&&1!==d.visible?d.limit:t):s=0===d.currentSlide&&b===d.count-1&&d.vars.animationLoop&&"next"!==d.direction?l?(d.count+d.cloneOffset)*q:0:d.currentSlide===d.last&&0===b&&d.vars.animationLoop&&"prev"!==d.direction?l?0:(d.count+1)*q:l?(d.count-1-b+d.cloneOffset)*q:(b+d.cloneOffset)*q,d.setProps(s,"",d.vars.animationSpeed),d.transitions?(d.vars.animationLoop&&d.atEnd||(d.animating=!1,d.currentSlide=d.animatingTo),d.container.unbind("webkitTransitionEnd transitionend"),d.container.bind("webkitTransitionEnd transitionend",function(){clearTimeout(d.ensureAnimationEnd),d.wrapup(q)}),clearTimeout(d.ensureAnimationEnd),d.ensureAnimationEnd=setTimeout(function(){d.wrapup(q)},d.vars.animationSpeed+100)):d.container.animate(d.args,d.vars.animationSpeed,d.vars.easing,function(){d.wrapup(q)})}d.vars.smoothHeight&&p.smoothHeight(d.vars.animationSpeed)}},d.wrapup=function(a){n||m||(0===d.currentSlide&&d.animatingTo===d.last&&d.vars.animationLoop?d.setProps(a,"jumpEnd"):d.currentSlide===d.last&&0===d.animatingTo&&d.vars.animationLoop&&d.setProps(a,"jumpStart")),d.animating=!1,d.currentSlide=d.animatingTo,d.vars.after(d)},d.animateSlides=function(){!d.animating&&q&&d.flexAnimate(d.getTarget("next"))},d.pause=function(){clearInterval(d.animatedSlides),d.animatedSlides=null,d.playing=!1,d.vars.pausePlay&&p.pausePlay.update("play"),d.syncExists&&p.sync("pause")},d.play=function(){d.playing&&clearInterval(d.animatedSlides),d.animatedSlides=d.animatedSlides||setInterval(d.animateSlides,d.vars.slideshowSpeed),d.started=d.playing=!0,d.vars.pausePlay&&p.pausePlay.update("pause"),d.syncExists&&p.sync("play")},d.stop=function(){d.pause(),d.stopped=!0},d.canAdvance=function(a,b){var c=o?d.pagingCount-1:d.last;return b?!0:o&&d.currentItem===d.count-1&&0===a&&"prev"===d.direction?!0:o&&0===d.currentItem&&a===d.pagingCount-1&&"next"!==d.direction?!1:a!==d.currentSlide||o?d.vars.animationLoop?!0:d.atEnd&&0===d.currentSlide&&a===c&&"next"!==d.direction?!1:d.atEnd&&d.currentSlide===c&&0===a&&"next"===d.direction?!1:!0:!1},d.getTarget=function(a){return d.direction=a,"next"===a?d.currentSlide===d.last?0:d.currentSlide+1:0===d.currentSlide?d.last:d.currentSlide-1},d.setProps=function(a,b,c){var e=function(){var c=a?a:(d.itemW+d.vars.itemMargin)*d.move*d.animatingTo,e=function(){if(m)return"setTouch"===b?a:l&&d.animatingTo===d.last?0:l?d.limit-(d.itemW+d.vars.itemMargin)*d.move*d.animatingTo:d.animatingTo===d.last?d.limit:c;switch(b){case"setTotal":return l?(d.count-1-d.currentSlide+d.cloneOffset)*a:(d.currentSlide+d.cloneOffset)*a;case"setTouch":return l?a:a;case"jumpEnd":return l?a:d.count*a;case"jumpStart":return l?d.count*a:a;default:return a}}();return-1*e+"px"}();d.transitions&&(e=k?"translate3d(0,"+e+",0)":"translate3d("+e+",0,0)",c=void 0!==c?c/1e3+"s":"0s",d.container.css("-"+d.pfx+"-transition-duration",c),d.container.css("transition-duration",c)),d.args[d.prop]=e,(d.transitions||void 0===c)&&d.container.css(d.args),d.container.css("transform",e)},d.setup=function(b){if(n)d.slides.css({width:"100%","float":"left",marginRight:"-100%",position:"relative"}),"init"===b&&(g?d.slides.css({opacity:0,display:"block",webkitTransition:"opacity "+d.vars.animationSpeed/1e3+"s ease",zIndex:1}).eq(d.currentSlide).css({opacity:1,zIndex:2}):d.slides.css({opacity:0,display:"block",zIndex:1}).eq(d.currentSlide).css({zIndex:2}).animate({opacity:1},d.vars.animationSpeed,d.vars.easing)),d.vars.smoothHeight&&p.smoothHeight();else{var c,f;"init"===b&&(d.viewport=a('<div class="'+e+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(d).append(d.container),d.cloneCount=0,d.cloneOffset=0,l&&(f=a.makeArray(d.slides).reverse(),d.slides=a(f),d.container.empty().append(d.slides))),d.vars.animationLoop&&!m&&(d.cloneCount=2,d.cloneOffset=1,"init"!==b&&d.container.find(".clone").remove(),p.uniqueID(d.slides.first().clone().addClass("clone").attr("aria-hidden","true")).appendTo(d.container),p.uniqueID(d.slides.last().clone().addClass("clone").attr("aria-hidden","true")).prependTo(d.container)),d.newSlides=a(d.vars.selector,d),c=l?d.count-1-d.currentSlide+d.cloneOffset:d.currentSlide+d.cloneOffset,k&&!m?(d.container.height(200*(d.count+d.cloneCount)+"%").css("position","absolute").width("100%"),setTimeout(function(){d.newSlides.css({display:"block"}),d.doMath(),d.viewport.height(d.h),d.setProps(c*d.h,"init")},"init"===b?100:0)):(d.container.width(200*(d.count+d.cloneCount)+"%"),d.setProps(c*d.computedW,"init"),setTimeout(function(){d.doMath(),d.newSlides.css({width:d.computedW,"float":"left",display:"block"}),d.vars.smoothHeight&&p.smoothHeight()},"init"===b?100:0))}m||d.slides.removeClass(e+"active-slide").eq(d.currentSlide).addClass(e+"active-slide"),d.vars.init(d)},d.doMath=function(){var a=d.slides.first(),b=d.vars.itemMargin,c=d.vars.minItems,e=d.vars.maxItems;d.w=void 0===d.viewport?d.width():d.viewport.width(),d.h=a.height(),d.boxPadding=a.outerWidth()-a.width(),m?(d.itemT=d.vars.itemWidth+b,d.minW=c?c*d.itemT:d.w,d.maxW=e?e*d.itemT-b:d.w,d.itemW=d.minW>d.w?(d.w-b*(c-1))/c:d.maxW<d.w?(d.w-b*(e-1))/e:d.vars.itemWidth>d.w?d.w:d.vars.itemWidth,d.visible=Math.floor(d.w/d.itemW),d.move=d.vars.move>0&&d.vars.move<d.visible?d.vars.move:d.visible,d.pagingCount=Math.ceil((d.count-d.visible)/d.move+1),d.last=d.pagingCount-1,d.limit=1===d.pagingCount?0:d.vars.itemWidth>d.w?d.itemW*(d.count-1)+b*(d.count-1):(d.itemW+b)*d.count-d.w-b):(d.itemW=d.w,d.pagingCount=d.count,d.last=d.count-1),d.computedW=d.itemW-d.boxPadding},d.update=function(a,b){d.doMath(),m||(a<d.currentSlide?d.currentSlide+=1:a<=d.currentSlide&&0!==a&&(d.currentSlide-=1),d.animatingTo=d.currentSlide),d.vars.controlNav&&!d.manualControls&&("add"===b&&!m||d.pagingCount>d.controlNav.length?p.controlNav.update("add"):("remove"===b&&!m||d.pagingCount<d.controlNav.length)&&(m&&d.currentSlide>d.last&&(d.currentSlide-=1,d.animatingTo-=1),p.controlNav.update("remove",d.last))),d.vars.directionNav&&p.directionNav.update()},d.addSlide=function(b,c){var e=a(b);d.count+=1,d.last=d.count-1,k&&l?void 0!==c?d.slides.eq(d.count-c).after(e):d.container.prepend(e):void 0!==c?d.slides.eq(c).before(e):d.container.append(e),d.update(c,"add"),d.slides=a(d.vars.selector+":not(.clone)",d),d.setup(),d.vars.added(d)},d.removeSlide=function(b){var c=isNaN(b)?d.slides.index(a(b)):b;d.count-=1,d.last=d.count-1,isNaN(b)?a(b,d.slides).remove():k&&l?d.slides.eq(d.last).remove():d.slides.eq(b).remove(),d.doMath(),d.update(c,"remove"),d.slides=a(d.vars.selector+":not(.clone)",d),d.setup(),d.vars.removed(d)},p.init()},a(window).blur(function(){focused=!1}).focus(function(){focused=!0}),a.flexslider.defaults={namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:!1,animationLoop:!0,smoothHeight:!1,startAt:0,slideshow:!0,slideshowSpeed:7e3,animationSpeed:600,initDelay:0,randomize:!1,thumbCaptions:!1,pauseOnAction:!0,pauseOnHover:!1,pauseInvisible:!0,useCSS:!0,touch:!0,video:!1,controlNav:!0,directionNav:!0,prevText:"Previous",nextText:"Next",keyboard:!0,multipleKeyboard:!1,mousewheel:!1,pausePlay:!1,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:1,maxItems:0,move:0,allowOneSlide:!0,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){},init:function(){}},a.fn.flexslider=function(b){if(void 0===b&&(b={}),"object"==typeof b)return this.each(function(){var c=a(this),d=b.selector?b.selector:".slides > li",e=c.find(d);1===e.length&&b.allowOneSlide===!0||0===e.length?(e.fadeIn(400),b.start&&b.start(c)):void 0===c.data("flexslider")&&new a.flexslider(this,b)});var c=a(this).data("flexslider");switch(b){case"play":c.play();break;case"pause":c.pause();break;case"stop":c.stop();break;case"next":c.flexAnimate(c.getTarget("next"),!0);break;case"prev":case"previous":c.flexAnimate(c.getTarget("prev"),!0);break;default:"number"==typeof b&&c.flexAnimate(b,!0)}}}(jQuery);
/*!
 * Isotope PACKAGED v2.2.2
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * http://isotope.metafizzy.co
 * Copyright 2015 Metafizzy
 */

!function(a){function b(){}function c(a){function c(b){b.prototype.option||(b.prototype.option=function(b){a.isPlainObject(b)&&(this.options=a.extend(!0,this.options,b))})}function e(b,c){a.fn[b]=function(e){if("string"==typeof e){for(var g=d.call(arguments,1),h=0,i=this.length;i>h;h++){var j=this[h],k=a.data(j,b);if(k)if(a.isFunction(k[e])&&"_"!==e.charAt(0)){var l=k[e].apply(k,g);if(void 0!==l)return l}else f("no such method '"+e+"' for "+b+" instance");else f("cannot call methods on "+b+" prior to initialization; attempted to call '"+e+"'")}return this}return this.each(function(){var d=a.data(this,b);d?(d.option(e),d._init()):(d=new c(this,e),a.data(this,b,d))})}}if(a){var f="undefined"==typeof console?b:function(a){console.error(a)};return a.bridget=function(a,b){c(b),e(a,b)},a.bridget}}var d=Array.prototype.slice;"function"==typeof define&&define.amd?define("jquery-bridget/jquery.bridget",["jquery"],c):c("object"==typeof exports?require("jquery"):a.jQuery)}(window),function(a){function b(b){var c=a.event;return c.target=c.target||c.srcElement||b,c}var c=document.documentElement,d=function(){};c.addEventListener?d=function(a,b,c){a.addEventListener(b,c,!1)}:c.attachEvent&&(d=function(a,c,d){a[c+d]=d.handleEvent?function(){var c=b(a);d.handleEvent.call(d,c)}:function(){var c=b(a);d.call(a,c)},a.attachEvent("on"+c,a[c+d])});var e=function(){};c.removeEventListener?e=function(a,b,c){a.removeEventListener(b,c,!1)}:c.detachEvent&&(e=function(a,b,c){a.detachEvent("on"+b,a[b+c]);try{delete a[b+c]}catch(d){a[b+c]=void 0}});var f={bind:d,unbind:e};"function"==typeof define&&define.amd?define("eventie/eventie",f):"object"==typeof exports?module.exports=f:a.eventie=f}(window),function(){"use strict";function a(){}function b(a,b){for(var c=a.length;c--;)if(a[c].listener===b)return c;return-1}function c(a){return function(){return this[a].apply(this,arguments)}}var d=a.prototype,e=this,f=e.EventEmitter;d.getListeners=function(a){var b,c,d=this._getEvents();if(a instanceof RegExp){b={};for(c in d)d.hasOwnProperty(c)&&a.test(c)&&(b[c]=d[c])}else b=d[a]||(d[a]=[]);return b},d.flattenListeners=function(a){var b,c=[];for(b=0;b<a.length;b+=1)c.push(a[b].listener);return c},d.getListenersAsObject=function(a){var b,c=this.getListeners(a);return c instanceof Array&&(b={},b[a]=c),b||c},d.addListener=function(a,c){var d,e=this.getListenersAsObject(a),f="object"==typeof c;for(d in e)e.hasOwnProperty(d)&&-1===b(e[d],c)&&e[d].push(f?c:{listener:c,once:!1});return this},d.on=c("addListener"),d.addOnceListener=function(a,b){return this.addListener(a,{listener:b,once:!0})},d.once=c("addOnceListener"),d.defineEvent=function(a){return this.getListeners(a),this},d.defineEvents=function(a){for(var b=0;b<a.length;b+=1)this.defineEvent(a[b]);return this},d.removeListener=function(a,c){var d,e,f=this.getListenersAsObject(a);for(e in f)f.hasOwnProperty(e)&&(d=b(f[e],c),-1!==d&&f[e].splice(d,1));return this},d.off=c("removeListener"),d.addListeners=function(a,b){return this.manipulateListeners(!1,a,b)},d.removeListeners=function(a,b){return this.manipulateListeners(!0,a,b)},d.manipulateListeners=function(a,b,c){var d,e,f=a?this.removeListener:this.addListener,g=a?this.removeListeners:this.addListeners;if("object"!=typeof b||b instanceof RegExp)for(d=c.length;d--;)f.call(this,b,c[d]);else for(d in b)b.hasOwnProperty(d)&&(e=b[d])&&("function"==typeof e?f.call(this,d,e):g.call(this,d,e));return this},d.removeEvent=function(a){var b,c=typeof a,d=this._getEvents();if("string"===c)delete d[a];else if(a instanceof RegExp)for(b in d)d.hasOwnProperty(b)&&a.test(b)&&delete d[b];else delete this._events;return this},d.removeAllListeners=c("removeEvent"),d.emitEvent=function(a,b){var c,d,e,f,g=this.getListenersAsObject(a);for(e in g)if(g.hasOwnProperty(e))for(d=g[e].length;d--;)c=g[e][d],c.once===!0&&this.removeListener(a,c.listener),f=c.listener.apply(this,b||[]),f===this._getOnceReturnValue()&&this.removeListener(a,c.listener);return this},d.trigger=c("emitEvent"),d.emit=function(a){var b=Array.prototype.slice.call(arguments,1);return this.emitEvent(a,b)},d.setOnceReturnValue=function(a){return this._onceReturnValue=a,this},d._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},d._getEvents=function(){return this._events||(this._events={})},a.noConflict=function(){return e.EventEmitter=f,a},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return a}):"object"==typeof module&&module.exports?module.exports=a:e.EventEmitter=a}.call(this),function(a){function b(a){if(a){if("string"==typeof d[a])return a;a=a.charAt(0).toUpperCase()+a.slice(1);for(var b,e=0,f=c.length;f>e;e++)if(b=c[e]+a,"string"==typeof d[b])return b}}var c="Webkit Moz ms Ms O".split(" "),d=document.documentElement.style;"function"==typeof define&&define.amd?define("get-style-property/get-style-property",[],function(){return b}):"object"==typeof exports?module.exports=b:a.getStyleProperty=b}(window),function(a,b){function c(a){var b=parseFloat(a),c=-1===a.indexOf("%")&&!isNaN(b);return c&&b}function d(){}function e(){for(var a={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},b=0,c=h.length;c>b;b++){var d=h[b];a[d]=0}return a}function f(b){function d(){if(!m){m=!0;var d=a.getComputedStyle;if(j=function(){var a=d?function(a){return d(a,null)}:function(a){return a.currentStyle};return function(b){var c=a(b);return c||g("Style returned "+c+". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"),c}}(),k=b("boxSizing")){var e=document.createElement("div");e.style.width="200px",e.style.padding="1px 2px 3px 4px",e.style.borderStyle="solid",e.style.borderWidth="1px 2px 3px 4px",e.style[k]="border-box";var f=document.body||document.documentElement;f.appendChild(e);var h=j(e);l=200===c(h.width),f.removeChild(e)}}}function f(a){if(d(),"string"==typeof a&&(a=document.querySelector(a)),a&&"object"==typeof a&&a.nodeType){var b=j(a);if("none"===b.display)return e();var f={};f.width=a.offsetWidth,f.height=a.offsetHeight;for(var g=f.isBorderBox=!(!k||!b[k]||"border-box"!==b[k]),m=0,n=h.length;n>m;m++){var o=h[m],p=b[o];p=i(a,p);var q=parseFloat(p);f[o]=isNaN(q)?0:q}var r=f.paddingLeft+f.paddingRight,s=f.paddingTop+f.paddingBottom,t=f.marginLeft+f.marginRight,u=f.marginTop+f.marginBottom,v=f.borderLeftWidth+f.borderRightWidth,w=f.borderTopWidth+f.borderBottomWidth,x=g&&l,y=c(b.width);y!==!1&&(f.width=y+(x?0:r+v));var z=c(b.height);return z!==!1&&(f.height=z+(x?0:s+w)),f.innerWidth=f.width-(r+v),f.innerHeight=f.height-(s+w),f.outerWidth=f.width+t,f.outerHeight=f.height+u,f}}function i(b,c){if(a.getComputedStyle||-1===c.indexOf("%"))return c;var d=b.style,e=d.left,f=b.runtimeStyle,g=f&&f.left;return g&&(f.left=b.currentStyle.left),d.left=c,c=d.pixelLeft,d.left=e,g&&(f.left=g),c}var j,k,l,m=!1;return f}var g="undefined"==typeof console?d:function(a){console.error(a)},h=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"];"function"==typeof define&&define.amd?define("get-size/get-size",["get-style-property/get-style-property"],f):"object"==typeof exports?module.exports=f(require("desandro-get-style-property")):a.getSize=f(a.getStyleProperty)}(window),function(a){function b(a){"function"==typeof a&&(b.isReady?a():g.push(a))}function c(a){var c="readystatechange"===a.type&&"complete"!==f.readyState;b.isReady||c||d()}function d(){b.isReady=!0;for(var a=0,c=g.length;c>a;a++){var d=g[a];d()}}function e(e){return"complete"===f.readyState?d():(e.bind(f,"DOMContentLoaded",c),e.bind(f,"readystatechange",c),e.bind(a,"load",c)),b}var f=a.document,g=[];b.isReady=!1,"function"==typeof define&&define.amd?define("doc-ready/doc-ready",["eventie/eventie"],e):"object"==typeof exports?module.exports=e(require("eventie")):a.docReady=e(a.eventie)}(window),function(a){"use strict";function b(a,b){return a[g](b)}function c(a){if(!a.parentNode){var b=document.createDocumentFragment();b.appendChild(a)}}function d(a,b){c(a);for(var d=a.parentNode.querySelectorAll(b),e=0,f=d.length;f>e;e++)if(d[e]===a)return!0;return!1}function e(a,d){return c(a),b(a,d)}var f,g=function(){if(a.matches)return"matches";if(a.matchesSelector)return"matchesSelector";for(var b=["webkit","moz","ms","o"],c=0,d=b.length;d>c;c++){var e=b[c],f=e+"MatchesSelector";if(a[f])return f}}();if(g){var h=document.createElement("div"),i=b(h,"div");f=i?b:e}else f=d;"function"==typeof define&&define.amd?define("matches-selector/matches-selector",[],function(){return f}):"object"==typeof exports?module.exports=f:window.matchesSelector=f}(Element.prototype),function(a,b){"use strict";"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["doc-ready/doc-ready","matches-selector/matches-selector"],function(c,d){return b(a,c,d)}):"object"==typeof exports?module.exports=b(a,require("doc-ready"),require("desandro-matches-selector")):a.fizzyUIUtils=b(a,a.docReady,a.matchesSelector)}(window,function(a,b,c){var d={};d.extend=function(a,b){for(var c in b)a[c]=b[c];return a},d.modulo=function(a,b){return(a%b+b)%b};var e=Object.prototype.toString;d.isArray=function(a){return"[object Array]"==e.call(a)},d.makeArray=function(a){var b=[];if(d.isArray(a))b=a;else if(a&&"number"==typeof a.length)for(var c=0,e=a.length;e>c;c++)b.push(a[c]);else b.push(a);return b},d.indexOf=Array.prototype.indexOf?function(a,b){return a.indexOf(b)}:function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},d.removeFrom=function(a,b){var c=d.indexOf(a,b);-1!=c&&a.splice(c,1)},d.isElement="function"==typeof HTMLElement||"object"==typeof HTMLElement?function(a){return a instanceof HTMLElement}:function(a){return a&&"object"==typeof a&&1==a.nodeType&&"string"==typeof a.nodeName},d.setText=function(){function a(a,c){b=b||(void 0!==document.documentElement.textContent?"textContent":"innerText"),a[b]=c}var b;return a}(),d.getParent=function(a,b){for(;a!=document.body;)if(a=a.parentNode,c(a,b))return a},d.getQueryElement=function(a){return"string"==typeof a?document.querySelector(a):a},d.handleEvent=function(a){var b="on"+a.type;this[b]&&this[b](a)},d.filterFindElements=function(a,b){a=d.makeArray(a);for(var e=[],f=0,g=a.length;g>f;f++){var h=a[f];if(d.isElement(h))if(b){c(h,b)&&e.push(h);for(var i=h.querySelectorAll(b),j=0,k=i.length;k>j;j++)e.push(i[j])}else e.push(h)}return e},d.debounceMethod=function(a,b,c){var d=a.prototype[b],e=b+"Timeout";a.prototype[b]=function(){var a=this[e];a&&clearTimeout(a);var b=arguments,f=this;this[e]=setTimeout(function(){d.apply(f,b),delete f[e]},c||100)}},d.toDashed=function(a){return a.replace(/(.)([A-Z])/g,function(a,b,c){return b+"-"+c}).toLowerCase()};var f=a.console;return d.htmlInit=function(c,e){b(function(){for(var b=d.toDashed(e),g=document.querySelectorAll(".js-"+b),h="data-"+b+"-options",i=0,j=g.length;j>i;i++){var k,l=g[i],m=l.getAttribute(h);try{k=m&&JSON.parse(m)}catch(n){f&&f.error("Error parsing "+h+" on "+l.nodeName.toLowerCase()+(l.id?"#"+l.id:"")+": "+n);continue}var o=new c(l,k),p=a.jQuery;p&&p.data(l,e,o)}})},d}),function(a,b){"use strict";"function"==typeof define&&define.amd?define("outlayer/item",["eventEmitter/EventEmitter","get-size/get-size","get-style-property/get-style-property","fizzy-ui-utils/utils"],function(c,d,e,f){return b(a,c,d,e,f)}):"object"==typeof exports?module.exports=b(a,require("wolfy87-eventemitter"),require("get-size"),require("desandro-get-style-property"),require("fizzy-ui-utils")):(a.Outlayer={},a.Outlayer.Item=b(a,a.EventEmitter,a.getSize,a.getStyleProperty,a.fizzyUIUtils))}(window,function(a,b,c,d,e){"use strict";function f(a){for(var b in a)return!1;return b=null,!0}function g(a,b){a&&(this.element=a,this.layout=b,this.position={x:0,y:0},this._create())}function h(a){return a.replace(/([A-Z])/g,function(a){return"-"+a.toLowerCase()})}var i=a.getComputedStyle,j=i?function(a){return i(a,null)}:function(a){return a.currentStyle},k=d("transition"),l=d("transform"),m=k&&l,n=!!d("perspective"),o={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"otransitionend",transition:"transitionend"}[k],p=["transform","transition","transitionDuration","transitionProperty"],q=function(){for(var a={},b=0,c=p.length;c>b;b++){var e=p[b],f=d(e);f&&f!==e&&(a[e]=f)}return a}();e.extend(g.prototype,b.prototype),g.prototype._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},g.prototype.handleEvent=function(a){var b="on"+a.type;this[b]&&this[b](a)},g.prototype.getSize=function(){this.size=c(this.element)},g.prototype.css=function(a){var b=this.element.style;for(var c in a){var d=q[c]||c;b[d]=a[c]}},g.prototype.getPosition=function(){var a=j(this.element),b=this.layout.options,c=b.isOriginLeft,d=b.isOriginTop,e=a[c?"left":"right"],f=a[d?"top":"bottom"],g=this.layout.size,h=-1!=e.indexOf("%")?parseFloat(e)/100*g.width:parseInt(e,10),i=-1!=f.indexOf("%")?parseFloat(f)/100*g.height:parseInt(f,10);h=isNaN(h)?0:h,i=isNaN(i)?0:i,h-=c?g.paddingLeft:g.paddingRight,i-=d?g.paddingTop:g.paddingBottom,this.position.x=h,this.position.y=i},g.prototype.layoutPosition=function(){var a=this.layout.size,b=this.layout.options,c={},d=b.isOriginLeft?"paddingLeft":"paddingRight",e=b.isOriginLeft?"left":"right",f=b.isOriginLeft?"right":"left",g=this.position.x+a[d];c[e]=this.getXValue(g),c[f]="";var h=b.isOriginTop?"paddingTop":"paddingBottom",i=b.isOriginTop?"top":"bottom",j=b.isOriginTop?"bottom":"top",k=this.position.y+a[h];c[i]=this.getYValue(k),c[j]="",this.css(c),this.emitEvent("layout",[this])},g.prototype.getXValue=function(a){var b=this.layout.options;return b.percentPosition&&!b.isHorizontal?a/this.layout.size.width*100+"%":a+"px"},g.prototype.getYValue=function(a){var b=this.layout.options;return b.percentPosition&&b.isHorizontal?a/this.layout.size.height*100+"%":a+"px"},g.prototype._transitionTo=function(a,b){this.getPosition();var c=this.position.x,d=this.position.y,e=parseInt(a,10),f=parseInt(b,10),g=e===this.position.x&&f===this.position.y;if(this.setPosition(a,b),g&&!this.isTransitioning)return void this.layoutPosition();var h=a-c,i=b-d,j={};j.transform=this.getTranslate(h,i),this.transition({to:j,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},g.prototype.getTranslate=function(a,b){var c=this.layout.options;return a=c.isOriginLeft?a:-a,b=c.isOriginTop?b:-b,n?"translate3d("+a+"px, "+b+"px, 0)":"translate("+a+"px, "+b+"px)"},g.prototype.goTo=function(a,b){this.setPosition(a,b),this.layoutPosition()},g.prototype.moveTo=m?g.prototype._transitionTo:g.prototype.goTo,g.prototype.setPosition=function(a,b){this.position.x=parseInt(a,10),this.position.y=parseInt(b,10)},g.prototype._nonTransition=function(a){this.css(a.to),a.isCleaning&&this._removeStyles(a.to);for(var b in a.onTransitionEnd)a.onTransitionEnd[b].call(this)},g.prototype._transition=function(a){if(!parseFloat(this.layout.options.transitionDuration))return void this._nonTransition(a);var b=this._transn;for(var c in a.onTransitionEnd)b.onEnd[c]=a.onTransitionEnd[c];for(c in a.to)b.ingProperties[c]=!0,a.isCleaning&&(b.clean[c]=!0);if(a.from){this.css(a.from);var d=this.element.offsetHeight;d=null}this.enableTransition(a.to),this.css(a.to),this.isTransitioning=!0};var r="opacity,"+h(q.transform||"transform");g.prototype.enableTransition=function(){this.isTransitioning||(this.css({transitionProperty:r,transitionDuration:this.layout.options.transitionDuration}),this.element.addEventListener(o,this,!1))},g.prototype.transition=g.prototype[k?"_transition":"_nonTransition"],g.prototype.onwebkitTransitionEnd=function(a){this.ontransitionend(a)},g.prototype.onotransitionend=function(a){this.ontransitionend(a)};var s={"-webkit-transform":"transform","-moz-transform":"transform","-o-transform":"transform"};g.prototype.ontransitionend=function(a){if(a.target===this.element){var b=this._transn,c=s[a.propertyName]||a.propertyName;if(delete b.ingProperties[c],f(b.ingProperties)&&this.disableTransition(),c in b.clean&&(this.element.style[a.propertyName]="",delete b.clean[c]),c in b.onEnd){var d=b.onEnd[c];d.call(this),delete b.onEnd[c]}this.emitEvent("transitionEnd",[this])}},g.prototype.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(o,this,!1),this.isTransitioning=!1},g.prototype._removeStyles=function(a){var b={};for(var c in a)b[c]="";this.css(b)};var t={transitionProperty:"",transitionDuration:""};return g.prototype.removeTransitionStyles=function(){this.css(t)},g.prototype.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},g.prototype.remove=function(){if(!k||!parseFloat(this.layout.options.transitionDuration))return void this.removeElem();var a=this;this.once("transitionEnd",function(){a.removeElem()}),this.hide()},g.prototype.reveal=function(){delete this.isHidden,this.css({display:""});var a=this.layout.options,b={},c=this.getHideRevealTransitionEndProperty("visibleStyle");b[c]=this.onRevealTransitionEnd,this.transition({from:a.hiddenStyle,to:a.visibleStyle,isCleaning:!0,onTransitionEnd:b})},g.prototype.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},g.prototype.getHideRevealTransitionEndProperty=function(a){var b=this.layout.options[a];if(b.opacity)return"opacity";for(var c in b)return c},g.prototype.hide=function(){this.isHidden=!0,this.css({display:""});var a=this.layout.options,b={},c=this.getHideRevealTransitionEndProperty("hiddenStyle");b[c]=this.onHideTransitionEnd,this.transition({from:a.visibleStyle,to:a.hiddenStyle,isCleaning:!0,onTransitionEnd:b})},g.prototype.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},g.prototype.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},g}),function(a,b){"use strict";"function"==typeof define&&define.amd?define("outlayer/outlayer",["eventie/eventie","eventEmitter/EventEmitter","get-size/get-size","fizzy-ui-utils/utils","./item"],function(c,d,e,f,g){return b(a,c,d,e,f,g)}):"object"==typeof exports?module.exports=b(a,require("eventie"),require("wolfy87-eventemitter"),require("get-size"),require("fizzy-ui-utils"),require("./item")):a.Outlayer=b(a,a.eventie,a.EventEmitter,a.getSize,a.fizzyUIUtils,a.Outlayer.Item)}(window,function(a,b,c,d,e,f){"use strict";function g(a,b){var c=e.getQueryElement(a);if(!c)return void(h&&h.error("Bad element for "+this.constructor.namespace+": "+(c||a)));this.element=c,i&&(this.$element=i(this.element)),this.options=e.extend({},this.constructor.defaults),this.option(b);var d=++k;this.element.outlayerGUID=d,l[d]=this,this._create(),this.options.isInitLayout&&this.layout()}var h=a.console,i=a.jQuery,j=function(){},k=0,l={};return g.namespace="outlayer",g.Item=f,g.defaults={containerStyle:{position:"relative"},isInitLayout:!0,isOriginLeft:!0,isOriginTop:!0,isResizeBound:!0,isResizingContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}},e.extend(g.prototype,c.prototype),g.prototype.option=function(a){e.extend(this.options,a)},g.prototype._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),e.extend(this.element.style,this.options.containerStyle),this.options.isResizeBound&&this.bindResize()},g.prototype.reloadItems=function(){this.items=this._itemize(this.element.children)},g.prototype._itemize=function(a){for(var b=this._filterFindItemElements(a),c=this.constructor.Item,d=[],e=0,f=b.length;f>e;e++){var g=b[e],h=new c(g,this);d.push(h)}return d},g.prototype._filterFindItemElements=function(a){return e.filterFindElements(a,this.options.itemSelector)},g.prototype.getItemElements=function(){for(var a=[],b=0,c=this.items.length;c>b;b++)a.push(this.items[b].element);return a},g.prototype.layout=function(){this._resetLayout(),this._manageStamps();var a=void 0!==this.options.isLayoutInstant?this.options.isLayoutInstant:!this._isLayoutInited;this.layoutItems(this.items,a),this._isLayoutInited=!0},g.prototype._init=g.prototype.layout,g.prototype._resetLayout=function(){this.getSize()},g.prototype.getSize=function(){this.size=d(this.element)},g.prototype._getMeasurement=function(a,b){var c,f=this.options[a];f?("string"==typeof f?c=this.element.querySelector(f):e.isElement(f)&&(c=f),this[a]=c?d(c)[b]:f):this[a]=0},g.prototype.layoutItems=function(a,b){a=this._getItemsForLayout(a),this._layoutItems(a,b),this._postLayout()},g.prototype._getItemsForLayout=function(a){for(var b=[],c=0,d=a.length;d>c;c++){var e=a[c];e.isIgnored||b.push(e)}return b},g.prototype._layoutItems=function(a,b){if(this._emitCompleteOnItems("layout",a),a&&a.length){for(var c=[],d=0,e=a.length;e>d;d++){var f=a[d],g=this._getItemLayoutPosition(f);g.item=f,g.isInstant=b||f.isLayoutInstant,c.push(g)}this._processLayoutQueue(c)}},g.prototype._getItemLayoutPosition=function(){return{x:0,y:0}},g.prototype._processLayoutQueue=function(a){for(var b=0,c=a.length;c>b;b++){var d=a[b];this._positionItem(d.item,d.x,d.y,d.isInstant)}},g.prototype._positionItem=function(a,b,c,d){d?a.goTo(b,c):a.moveTo(b,c)},g.prototype._postLayout=function(){this.resizeContainer()},g.prototype.resizeContainer=function(){if(this.options.isResizingContainer){var a=this._getContainerSize();a&&(this._setContainerMeasure(a.width,!0),this._setContainerMeasure(a.height,!1))}},g.prototype._getContainerSize=j,g.prototype._setContainerMeasure=function(a,b){if(void 0!==a){var c=this.size;c.isBorderBox&&(a+=b?c.paddingLeft+c.paddingRight+c.borderLeftWidth+c.borderRightWidth:c.paddingBottom+c.paddingTop+c.borderTopWidth+c.borderBottomWidth),a=Math.max(a,0),this.element.style[b?"width":"height"]=a+"px"}},g.prototype._emitCompleteOnItems=function(a,b){function c(){e.dispatchEvent(a+"Complete",null,[b])}function d(){g++,g===f&&c()}var e=this,f=b.length;if(!b||!f)return void c();for(var g=0,h=0,i=b.length;i>h;h++){var j=b[h];j.once(a,d)}},g.prototype.dispatchEvent=function(a,b,c){var d=b?[b].concat(c):c;if(this.emitEvent(a,d),i)if(this.$element=this.$element||i(this.element),b){var e=i.Event(b);e.type=a,this.$element.trigger(e,c)}else this.$element.trigger(a,c)},g.prototype.ignore=function(a){var b=this.getItem(a);b&&(b.isIgnored=!0)},g.prototype.unignore=function(a){var b=this.getItem(a);b&&delete b.isIgnored},g.prototype.stamp=function(a){if(a=this._find(a)){this.stamps=this.stamps.concat(a);for(var b=0,c=a.length;c>b;b++){var d=a[b];this.ignore(d)}}},g.prototype.unstamp=function(a){if(a=this._find(a))for(var b=0,c=a.length;c>b;b++){var d=a[b];e.removeFrom(this.stamps,d),this.unignore(d)}},g.prototype._find=function(a){return a?("string"==typeof a&&(a=this.element.querySelectorAll(a)),a=e.makeArray(a)):void 0},g.prototype._manageStamps=function(){if(this.stamps&&this.stamps.length){this._getBoundingRect();for(var a=0,b=this.stamps.length;b>a;a++){var c=this.stamps[a];this._manageStamp(c)}}},g.prototype._getBoundingRect=function(){var a=this.element.getBoundingClientRect(),b=this.size;this._boundingRect={left:a.left+b.paddingLeft+b.borderLeftWidth,top:a.top+b.paddingTop+b.borderTopWidth,right:a.right-(b.paddingRight+b.borderRightWidth),bottom:a.bottom-(b.paddingBottom+b.borderBottomWidth)}},g.prototype._manageStamp=j,g.prototype._getElementOffset=function(a){var b=a.getBoundingClientRect(),c=this._boundingRect,e=d(a),f={left:b.left-c.left-e.marginLeft,top:b.top-c.top-e.marginTop,right:c.right-b.right-e.marginRight,bottom:c.bottom-b.bottom-e.marginBottom};return f},g.prototype.handleEvent=function(a){var b="on"+a.type;this[b]&&this[b](a)},g.prototype.bindResize=function(){this.isResizeBound||(b.bind(a,"resize",this),this.isResizeBound=!0)},g.prototype.unbindResize=function(){this.isResizeBound&&b.unbind(a,"resize",this),this.isResizeBound=!1},g.prototype.onresize=function(){function a(){b.resize(),delete b.resizeTimeout}this.resizeTimeout&&clearTimeout(this.resizeTimeout);var b=this;this.resizeTimeout=setTimeout(a,100)},g.prototype.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},g.prototype.needsResizeLayout=function(){var a=d(this.element),b=this.size&&a;return b&&a.innerWidth!==this.size.innerWidth},g.prototype.addItems=function(a){var b=this._itemize(a);return b.length&&(this.items=this.items.concat(b)),b},g.prototype.appended=function(a){var b=this.addItems(a);b.length&&(this.layoutItems(b,!0),this.reveal(b))},g.prototype.prepended=function(a){var b=this._itemize(a);if(b.length){var c=this.items.slice(0);this.items=b.concat(c),this._resetLayout(),this._manageStamps(),this.layoutItems(b,!0),this.reveal(b),this.layoutItems(c)}},g.prototype.reveal=function(a){this._emitCompleteOnItems("reveal",a);for(var b=a&&a.length,c=0;b&&b>c;c++){var d=a[c];d.reveal()}},g.prototype.hide=function(a){this._emitCompleteOnItems("hide",a);for(var b=a&&a.length,c=0;b&&b>c;c++){var d=a[c];d.hide()}},g.prototype.revealItemElements=function(a){var b=this.getItems(a);this.reveal(b)},g.prototype.hideItemElements=function(a){var b=this.getItems(a);this.hide(b)},g.prototype.getItem=function(a){for(var b=0,c=this.items.length;c>b;b++){var d=this.items[b];if(d.element===a)return d}},g.prototype.getItems=function(a){a=e.makeArray(a);for(var b=[],c=0,d=a.length;d>c;c++){var f=a[c],g=this.getItem(f);g&&b.push(g)}return b},g.prototype.remove=function(a){var b=this.getItems(a);if(this._emitCompleteOnItems("remove",b),b&&b.length)for(var c=0,d=b.length;d>c;c++){var f=b[c];f.remove(),e.removeFrom(this.items,f)}},g.prototype.destroy=function(){var a=this.element.style;a.height="",a.position="",a.width="";for(var b=0,c=this.items.length;c>b;b++){var d=this.items[b];d.destroy()}this.unbindResize();var e=this.element.outlayerGUID;delete l[e],delete this.element.outlayerGUID,i&&i.removeData(this.element,this.constructor.namespace)},g.data=function(a){a=e.getQueryElement(a);var b=a&&a.outlayerGUID;return b&&l[b]},g.create=function(a,b){function c(){g.apply(this,arguments)}return Object.create?c.prototype=Object.create(g.prototype):e.extend(c.prototype,g.prototype),c.prototype.constructor=c,c.defaults=e.extend({},g.defaults),e.extend(c.defaults,b),c.prototype.settings={},c.namespace=a,c.data=g.data,c.Item=function(){f.apply(this,arguments)},c.Item.prototype=new f,e.htmlInit(c,a),i&&i.bridget&&i.bridget(a,c),c},g.Item=f,g}),function(a,b){"use strict";"function"==typeof define&&define.amd?define("isotope/js/item",["outlayer/outlayer"],b):"object"==typeof exports?module.exports=b(require("outlayer")):(a.Isotope=a.Isotope||{},a.Isotope.Item=b(a.Outlayer))}(window,function(a){"use strict";function b(){a.Item.apply(this,arguments)}b.prototype=new a.Item,b.prototype._create=function(){this.id=this.layout.itemGUID++,a.Item.prototype._create.call(this),this.sortData={}},b.prototype.updateSortData=function(){if(!this.isIgnored){this.sortData.id=this.id,this.sortData["original-order"]=this.id,this.sortData.random=Math.random();var a=this.layout.options.getSortData,b=this.layout._sorters;for(var c in a){var d=b[c];this.sortData[c]=d(this.element,this)}}};var c=b.prototype.destroy;return b.prototype.destroy=function(){c.apply(this,arguments),this.css({display:""})},b}),function(a,b){"use strict";"function"==typeof define&&define.amd?define("isotope/js/layout-mode",["get-size/get-size","outlayer/outlayer"],b):"object"==typeof exports?module.exports=b(require("get-size"),require("outlayer")):(a.Isotope=a.Isotope||{},a.Isotope.LayoutMode=b(a.getSize,a.Outlayer))}(window,function(a,b){"use strict";function c(a){this.isotope=a,a&&(this.options=a.options[this.namespace],this.element=a.element,this.items=a.filteredItems,this.size=a.size)}return function(){function a(a){return function(){return b.prototype[a].apply(this.isotope,arguments)}}for(var d=["_resetLayout","_getItemLayoutPosition","_manageStamp","_getContainerSize","_getElementOffset","needsResizeLayout"],e=0,f=d.length;f>e;e++){var g=d[e];c.prototype[g]=a(g)}}(),c.prototype.needsVerticalResizeLayout=function(){var b=a(this.isotope.element),c=this.isotope.size&&b;return c&&b.innerHeight!=this.isotope.size.innerHeight},c.prototype._getMeasurement=function(){this.isotope._getMeasurement.apply(this,arguments)},c.prototype.getColumnWidth=function(){this.getSegmentSize("column","Width")},c.prototype.getRowHeight=function(){this.getSegmentSize("row","Height")},c.prototype.getSegmentSize=function(a,b){var c=a+b,d="outer"+b;if(this._getMeasurement(c,d),!this[c]){var e=this.getFirstItemSize();this[c]=e&&e[d]||this.isotope.size["inner"+b]}},c.prototype.getFirstItemSize=function(){var b=this.isotope.filteredItems[0];return b&&b.element&&a(b.element)},c.prototype.layout=function(){this.isotope.layout.apply(this.isotope,arguments)},c.prototype.getSize=function(){this.isotope.getSize(),this.size=this.isotope.size},c.modes={},c.create=function(a,b){function d(){c.apply(this,arguments)}return d.prototype=new c,b&&(d.options=b),d.prototype.namespace=a,c.modes[a]=d,d},c}),function(a,b){"use strict";"function"==typeof define&&define.amd?define("masonry/masonry",["outlayer/outlayer","get-size/get-size","fizzy-ui-utils/utils"],b):"object"==typeof exports?module.exports=b(require("outlayer"),require("get-size"),require("fizzy-ui-utils")):a.Masonry=b(a.Outlayer,a.getSize,a.fizzyUIUtils)}(window,function(a,b,c){var d=a.create("masonry");return d.prototype._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns();var a=this.cols;for(this.colYs=[];a--;)this.colYs.push(0);this.maxY=0},d.prototype.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var a=this.items[0],c=a&&a.element;this.columnWidth=c&&b(c).outerWidth||this.containerWidth}var d=this.columnWidth+=this.gutter,e=this.containerWidth+this.gutter,f=e/d,g=d-e%d,h=g&&1>g?"round":"floor";f=Math[h](f),this.cols=Math.max(f,1)},d.prototype.getContainerWidth=function(){var a=this.options.isFitWidth?this.element.parentNode:this.element,c=b(a);this.containerWidth=c&&c.innerWidth},d.prototype._getItemLayoutPosition=function(a){a.getSize();var b=a.size.outerWidth%this.columnWidth,d=b&&1>b?"round":"ceil",e=Math[d](a.size.outerWidth/this.columnWidth);e=Math.min(e,this.cols);for(var f=this._getColGroup(e),g=Math.min.apply(Math,f),h=c.indexOf(f,g),i={x:this.columnWidth*h,y:g},j=g+a.size.outerHeight,k=this.cols+1-f.length,l=0;k>l;l++)this.colYs[h+l]=j;return i},d.prototype._getColGroup=function(a){if(2>a)return this.colYs;for(var b=[],c=this.cols+1-a,d=0;c>d;d++){var e=this.colYs.slice(d,d+a);b[d]=Math.max.apply(Math,e)}return b},d.prototype._manageStamp=function(a){var c=b(a),d=this._getElementOffset(a),e=this.options.isOriginLeft?d.left:d.right,f=e+c.outerWidth,g=Math.floor(e/this.columnWidth);g=Math.max(0,g);var h=Math.floor(f/this.columnWidth);h-=f%this.columnWidth?0:1,h=Math.min(this.cols-1,h);for(var i=(this.options.isOriginTop?d.top:d.bottom)+c.outerHeight,j=g;h>=j;j++)this.colYs[j]=Math.max(i,this.colYs[j])},d.prototype._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var a={height:this.maxY};return this.options.isFitWidth&&(a.width=this._getContainerFitWidth()),a},d.prototype._getContainerFitWidth=function(){for(var a=0,b=this.cols;--b&&0===this.colYs[b];)a++;return(this.cols-a)*this.columnWidth-this.gutter},d.prototype.needsResizeLayout=function(){var a=this.containerWidth;return this.getContainerWidth(),a!==this.containerWidth},d}),function(a,b){"use strict";"function"==typeof define&&define.amd?define("isotope/js/layout-modes/masonry",["../layout-mode","masonry/masonry"],b):"object"==typeof exports?module.exports=b(require("../layout-mode"),require("masonry-layout")):b(a.Isotope.LayoutMode,a.Masonry)}(window,function(a,b){"use strict";function c(a,b){for(var c in b)a[c]=b[c];return a}var d=a.create("masonry"),e=d.prototype._getElementOffset,f=d.prototype.layout,g=d.prototype._getMeasurement;
c(d.prototype,b.prototype),d.prototype._getElementOffset=e,d.prototype.layout=f,d.prototype._getMeasurement=g;var h=d.prototype.measureColumns;d.prototype.measureColumns=function(){this.items=this.isotope.filteredItems,h.call(this)};var i=d.prototype._manageStamp;return d.prototype._manageStamp=function(){this.options.isOriginLeft=this.isotope.options.isOriginLeft,this.options.isOriginTop=this.isotope.options.isOriginTop,i.apply(this,arguments)},d}),function(a,b){"use strict";"function"==typeof define&&define.amd?define("isotope/js/layout-modes/fit-rows",["../layout-mode"],b):"object"==typeof exports?module.exports=b(require("../layout-mode")):b(a.Isotope.LayoutMode)}(window,function(a){"use strict";var b=a.create("fitRows");return b.prototype._resetLayout=function(){this.x=0,this.y=0,this.maxY=0,this._getMeasurement("gutter","outerWidth")},b.prototype._getItemLayoutPosition=function(a){a.getSize();var b=a.size.outerWidth+this.gutter,c=this.isotope.size.innerWidth+this.gutter;0!==this.x&&b+this.x>c&&(this.x=0,this.y=this.maxY);var d={x:this.x,y:this.y};return this.maxY=Math.max(this.maxY,this.y+a.size.outerHeight),this.x+=b,d},b.prototype._getContainerSize=function(){return{height:this.maxY}},b}),function(a,b){"use strict";"function"==typeof define&&define.amd?define("isotope/js/layout-modes/vertical",["../layout-mode"],b):"object"==typeof exports?module.exports=b(require("../layout-mode")):b(a.Isotope.LayoutMode)}(window,function(a){"use strict";var b=a.create("vertical",{horizontalAlignment:0});return b.prototype._resetLayout=function(){this.y=0},b.prototype._getItemLayoutPosition=function(a){a.getSize();var b=(this.isotope.size.innerWidth-a.size.outerWidth)*this.options.horizontalAlignment,c=this.y;return this.y+=a.size.outerHeight,{x:b,y:c}},b.prototype._getContainerSize=function(){return{height:this.y}},b}),function(a,b){"use strict";"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size","matches-selector/matches-selector","fizzy-ui-utils/utils","isotope/js/item","isotope/js/layout-mode","isotope/js/layout-modes/masonry","isotope/js/layout-modes/fit-rows","isotope/js/layout-modes/vertical"],function(c,d,e,f,g,h){return b(a,c,d,e,f,g,h)}):"object"==typeof exports?module.exports=b(a,require("outlayer"),require("get-size"),require("desandro-matches-selector"),require("fizzy-ui-utils"),require("./item"),require("./layout-mode"),require("./layout-modes/masonry"),require("./layout-modes/fit-rows"),require("./layout-modes/vertical")):a.Isotope=b(a,a.Outlayer,a.getSize,a.matchesSelector,a.fizzyUIUtils,a.Isotope.Item,a.Isotope.LayoutMode)}(window,function(a,b,c,d,e,f,g){function h(a,b){return function(c,d){for(var e=0,f=a.length;f>e;e++){var g=a[e],h=c.sortData[g],i=d.sortData[g];if(h>i||i>h){var j=void 0!==b[g]?b[g]:b,k=j?1:-1;return(h>i?1:-1)*k}}return 0}}var i=a.jQuery,j=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^\s+|\s+$/g,"")},k=document.documentElement,l=k.textContent?function(a){return a.textContent}:function(a){return a.innerText},m=b.create("isotope",{layoutMode:"masonry",isJQueryFiltering:!0,sortAscending:!0});m.Item=f,m.LayoutMode=g,m.prototype._create=function(){this.itemGUID=0,this._sorters={},this._getSorters(),b.prototype._create.call(this),this.modes={},this.filteredItems=this.items,this.sortHistory=["original-order"];for(var a in g.modes)this._initLayoutMode(a)},m.prototype.reloadItems=function(){this.itemGUID=0,b.prototype.reloadItems.call(this)},m.prototype._itemize=function(){for(var a=b.prototype._itemize.apply(this,arguments),c=0,d=a.length;d>c;c++){var e=a[c];e.id=this.itemGUID++}return this._updateItemsSortData(a),a},m.prototype._initLayoutMode=function(a){var b=g.modes[a],c=this.options[a]||{};this.options[a]=b.options?e.extend(b.options,c):c,this.modes[a]=new b(this)},m.prototype.layout=function(){return!this._isLayoutInited&&this.options.isInitLayout?void this.arrange():void this._layout()},m.prototype._layout=function(){var a=this._getIsInstant();this._resetLayout(),this._manageStamps(),this.layoutItems(this.filteredItems,a),this._isLayoutInited=!0},m.prototype.arrange=function(a){function b(){d.reveal(c.needReveal),d.hide(c.needHide)}this.option(a),this._getIsInstant();var c=this._filter(this.items);this.filteredItems=c.matches;var d=this;this._bindArrangeComplete(),this._isInstant?this._noTransition(b):b(),this._sort(),this._layout()},m.prototype._init=m.prototype.arrange,m.prototype._getIsInstant=function(){var a=void 0!==this.options.isLayoutInstant?this.options.isLayoutInstant:!this._isLayoutInited;return this._isInstant=a,a},m.prototype._bindArrangeComplete=function(){function a(){b&&c&&d&&e.dispatchEvent("arrangeComplete",null,[e.filteredItems])}var b,c,d,e=this;this.once("layoutComplete",function(){b=!0,a()}),this.once("hideComplete",function(){c=!0,a()}),this.once("revealComplete",function(){d=!0,a()})},m.prototype._filter=function(a){var b=this.options.filter;b=b||"*";for(var c=[],d=[],e=[],f=this._getFilterTest(b),g=0,h=a.length;h>g;g++){var i=a[g];if(!i.isIgnored){var j=f(i);j&&c.push(i),j&&i.isHidden?d.push(i):j||i.isHidden||e.push(i)}}return{matches:c,needReveal:d,needHide:e}},m.prototype._getFilterTest=function(a){return i&&this.options.isJQueryFiltering?function(b){return i(b.element).is(a)}:"function"==typeof a?function(b){return a(b.element)}:function(b){return d(b.element,a)}},m.prototype.updateSortData=function(a){var b;a?(a=e.makeArray(a),b=this.getItems(a)):b=this.items,this._getSorters(),this._updateItemsSortData(b)},m.prototype._getSorters=function(){var a=this.options.getSortData;for(var b in a){var c=a[b];this._sorters[b]=n(c)}},m.prototype._updateItemsSortData=function(a){for(var b=a&&a.length,c=0;b&&b>c;c++){var d=a[c];d.updateSortData()}};var n=function(){function a(a){if("string"!=typeof a)return a;var c=j(a).split(" "),d=c[0],e=d.match(/^\[(.+)\]$/),f=e&&e[1],g=b(f,d),h=m.sortDataParsers[c[1]];return a=h?function(a){return a&&h(g(a))}:function(a){return a&&g(a)}}function b(a,b){var c;return c=a?function(b){return b.getAttribute(a)}:function(a){var c=a.querySelector(b);return c&&l(c)}}return a}();m.sortDataParsers={parseInt:function(a){return parseInt(a,10)},parseFloat:function(a){return parseFloat(a)}},m.prototype._sort=function(){var a=this.options.sortBy;if(a){var b=[].concat.apply(a,this.sortHistory),c=h(b,this.options.sortAscending);this.filteredItems.sort(c),a!=this.sortHistory[0]&&this.sortHistory.unshift(a)}},m.prototype._mode=function(){var a=this.options.layoutMode,b=this.modes[a];if(!b)throw new Error("No layout mode: "+a);return b.options=this.options[a],b},m.prototype._resetLayout=function(){b.prototype._resetLayout.call(this),this._mode()._resetLayout()},m.prototype._getItemLayoutPosition=function(a){return this._mode()._getItemLayoutPosition(a)},m.prototype._manageStamp=function(a){this._mode()._manageStamp(a)},m.prototype._getContainerSize=function(){return this._mode()._getContainerSize()},m.prototype.needsResizeLayout=function(){return this._mode().needsResizeLayout()},m.prototype.appended=function(a){var b=this.addItems(a);if(b.length){var c=this._filterRevealAdded(b);this.filteredItems=this.filteredItems.concat(c)}},m.prototype.prepended=function(a){var b=this._itemize(a);if(b.length){this._resetLayout(),this._manageStamps();var c=this._filterRevealAdded(b);this.layoutItems(this.filteredItems),this.filteredItems=c.concat(this.filteredItems),this.items=b.concat(this.items)}},m.prototype._filterRevealAdded=function(a){var b=this._filter(a);return this.hide(b.needHide),this.reveal(b.matches),this.layoutItems(b.matches,!0),b.matches},m.prototype.insert=function(a){var b=this.addItems(a);if(b.length){var c,d,e=b.length;for(c=0;e>c;c++)d=b[c],this.element.appendChild(d.element);var f=this._filter(b).matches;for(c=0;e>c;c++)b[c].isLayoutInstant=!0;for(this.arrange(),c=0;e>c;c++)delete b[c].isLayoutInstant;this.reveal(f)}};var o=m.prototype.remove;return m.prototype.remove=function(a){a=e.makeArray(a);var b=this.getItems(a);o.call(this,a);var c=b&&b.length;if(c)for(var d=0;c>d;d++){var f=b[d];e.removeFrom(this.filteredItems,f)}},m.prototype.shuffle=function(){for(var a=0,b=this.items.length;b>a;a++){var c=this.items[a];c.sortData.random=Math.random()}this.options.sortBy="random",this._sort(),this._layout()},m.prototype._noTransition=function(a){var b=this.options.transitionDuration;this.options.transitionDuration=0;var c=a.call(this);return this.options.transitionDuration=b,c},m.prototype.getFilteredItemElements=function(){for(var a=[],b=0,c=this.filteredItems.length;c>b;b++)a.push(this.filteredItems[b].element);return a},m});

/*!
 * Packery layout mode PACKAGED v1.1.1
 * sub-classes Packery
 * http://packery.metafizzy.co
 */

!function(a){function b(a){return new RegExp("(^|\\s+)"+a+"(\\s+|$)")}function c(a,b){var c=d(a,b)?f:e;c(a,b)}var d,e,f;"classList"in document.documentElement?(d=function(a,b){return a.classList.contains(b)},e=function(a,b){a.classList.add(b)},f=function(a,b){a.classList.remove(b)}):(d=function(a,c){return b(c).test(a.className)},e=function(a,b){d(a,b)||(a.className=a.className+" "+b)},f=function(a,c){a.className=a.className.replace(b(c)," ")});var g={hasClass:d,addClass:e,removeClass:f,toggleClass:c,has:d,add:e,remove:f,toggle:c};"function"==typeof define&&define.amd?define("classie/classie",g):"object"==typeof exports?module.exports=g:a.classie=g}(window),function(a){function b(){function a(b){for(var c in a.defaults)this[c]=a.defaults[c];for(c in b)this[c]=b[c]}return c.Rect=a,a.defaults={x:0,y:0,width:0,height:0},a.prototype.contains=function(a){var b=a.width||0,c=a.height||0;return this.x<=a.x&&this.y<=a.y&&this.x+this.width>=a.x+b&&this.y+this.height>=a.y+c},a.prototype.overlaps=function(a){var b=this.x+this.width,c=this.y+this.height,d=a.x+a.width,e=a.y+a.height;return this.x<d&&b>a.x&&this.y<e&&c>a.y},a.prototype.getMaximalFreeRects=function(b){if(!this.overlaps(b))return!1;var c,d=[],e=this.x+this.width,f=this.y+this.height,g=b.x+b.width,h=b.y+b.height;return this.y<b.y&&(c=new a({x:this.x,y:this.y,width:this.width,height:b.y-this.y}),d.push(c)),e>g&&(c=new a({x:g,y:this.y,width:e-g,height:this.height}),d.push(c)),f>h&&(c=new a({x:this.x,y:h,width:this.width,height:f-h}),d.push(c)),this.x<b.x&&(c=new a({x:this.x,y:this.y,width:b.x-this.x,height:this.height}),d.push(c)),d},a.prototype.canFit=function(a){return this.width>=a.width&&this.height>=a.height},a}var c=a.Packery=function(){};"function"==typeof define&&define.amd?define("packery/js/rect",b):"object"==typeof exports?module.exports=b():(a.Packery=a.Packery||{},a.Packery.Rect=b())}(window),function(a){function b(a){function b(a,b,c){this.width=a||0,this.height=b||0,this.sortDirection=c||"downwardLeftToRight",this.reset()}b.prototype.reset=function(){this.spaces=[],this.newSpaces=[];var b=new a({x:0,y:0,width:this.width,height:this.height});this.spaces.push(b),this.sorter=c[this.sortDirection]||c.downwardLeftToRight},b.prototype.pack=function(a){for(var b=0,c=this.spaces.length;c>b;b++){var d=this.spaces[b];if(d.canFit(a)){this.placeInSpace(a,d);break}}},b.prototype.placeInSpace=function(a,b){a.x=b.x,a.y=b.y,this.placed(a)},b.prototype.placed=function(a){for(var b=[],c=0,d=this.spaces.length;d>c;c++){var e=this.spaces[c],f=e.getMaximalFreeRects(a);f?b.push.apply(b,f):b.push(e)}this.spaces=b,this.mergeSortSpaces()},b.prototype.mergeSortSpaces=function(){b.mergeRects(this.spaces),this.spaces.sort(this.sorter)},b.prototype.addSpace=function(a){this.spaces.push(a),this.mergeSortSpaces()},b.mergeRects=function(a){for(var b=0,c=a.length;c>b;b++){var d=a[b];if(d){var e=a.slice(0);e.splice(b,1);for(var f=0,g=0,h=e.length;h>g;g++){var i=e[g],j=b>g?0:1;d.contains(i)&&(a.splice(g+j-f,1),f++)}}}return a};var c={downwardLeftToRight:function(a,b){return a.y-b.y||a.x-b.x},rightwardTopToBottom:function(a,b){return a.x-b.x||a.y-b.y}};return b}if("function"==typeof define&&define.amd)define("packery/js/packer",["./rect"],b);else if("object"==typeof exports)module.exports=b(require("./rect"));else{var c=a.Packery=a.Packery||{};c.Packer=b(c.Rect)}}(window),function(a){function b(a,b,c){var d=a("transform"),e=function(){b.Item.apply(this,arguments)};e.prototype=new b.Item;var f=e.prototype._create;return e.prototype._create=function(){f.call(this),this.rect=new c,this.placeRect=new c},e.prototype.dragStart=function(){this.getPosition(),this.removeTransitionStyles(),this.isTransitioning&&d&&(this.element.style[d]="none"),this.getSize(),this.isPlacing=!0,this.needsPositioning=!1,this.positionPlaceRect(this.position.x,this.position.y),this.isTransitioning=!1,this.didDrag=!1},e.prototype.dragMove=function(a,b){this.didDrag=!0;var c=this.layout.size;a-=c.paddingLeft,b-=c.paddingTop,this.positionPlaceRect(a,b)},e.prototype.dragStop=function(){this.getPosition();var a=this.position.x!==this.placeRect.x,b=this.position.y!==this.placeRect.y;this.needsPositioning=a||b,this.didDrag=!1},e.prototype.positionPlaceRect=function(a,b,c){this.placeRect.x=this.getPlaceRectCoord(a,!0),this.placeRect.y=this.getPlaceRectCoord(b,!1,c)},e.prototype.getPlaceRectCoord=function(a,b,c){var d=b?"Width":"Height",e=this.size["outer"+d],f=this.layout[b?"columnWidth":"rowHeight"],g=this.layout.size["inner"+d];b||(g=Math.max(g,this.layout.maxY),this.layout.rowHeight||(g-=this.layout.gutter));var h;if(f){f+=this.layout.gutter,g+=b?this.layout.gutter:0,a=Math.round(a/f);var i;i=this.layout.options.isHorizontal?b?"ceil":"floor":b?"floor":"ceil";var j=Math[i](g/f);j-=Math.ceil(e/f),h=j}else h=g-e;return a=c?a:Math.min(a,h),a*=f||1,Math.max(0,a)},e.prototype.copyPlaceRectPosition=function(){this.rect.x=this.placeRect.x,this.rect.y=this.placeRect.y},e.prototype.removeElem=function(){this.element.parentNode.removeChild(this.element),this.layout.packer.addSpace(this.rect),this.emitEvent("remove",[this])},e}"function"==typeof define&&define.amd?define("packery/js/item",["get-style-property/get-style-property","outlayer/outlayer","./rect"],b):"object"==typeof exports?module.exports=b(require("desandro-get-style-property"),require("outlayer"),require("./rect")):a.Packery.Item=b(a.getStyleProperty,a.Outlayer,a.Packery.Rect)}(window),function(a){function b(a,b,c,d,e,f){function g(a,b){return a.position.y-b.position.y||a.position.x-b.position.x}function h(a,b){return a.position.x-b.position.x||a.position.y-b.position.y}d.prototype.canFit=function(a){return this.width>=a.width-1&&this.height>=a.height-1};var i=c.create("packery");return i.Item=f,i.prototype._create=function(){c.prototype._create.call(this),this.packer=new e,this.stamp(this.options.stamped);var a=this;this.handleDraggabilly={dragStart:function(b){a.itemDragStart(b.element)},dragMove:function(b){a.itemDragMove(b.element,b.position.x,b.position.y)},dragEnd:function(b){a.itemDragEnd(b.element)}},this.handleUIDraggable={start:function(b){a.itemDragStart(b.currentTarget)},drag:function(b,c){a.itemDragMove(b.currentTarget,c.position.left,c.position.top)},stop:function(b){a.itemDragEnd(b.currentTarget)}}},i.prototype._resetLayout=function(){this.getSize(),this._getMeasurements();var a=this.packer;this.options.isHorizontal?(a.width=Number.POSITIVE_INFINITY,a.height=this.size.innerHeight+this.gutter,a.sortDirection="rightwardTopToBottom"):(a.width=this.size.innerWidth+this.gutter,a.height=Number.POSITIVE_INFINITY,a.sortDirection="downwardLeftToRight"),a.reset(),this.maxY=0,this.maxX=0},i.prototype._getMeasurements=function(){this._getMeasurement("columnWidth","width"),this._getMeasurement("rowHeight","height"),this._getMeasurement("gutter","width")},i.prototype._getItemLayoutPosition=function(a){return this._packItem(a),a.rect},i.prototype._packItem=function(a){this._setRectSize(a.element,a.rect),this.packer.pack(a.rect),this._setMaxXY(a.rect)},i.prototype._setMaxXY=function(a){this.maxX=Math.max(a.x+a.width,this.maxX),this.maxY=Math.max(a.y+a.height,this.maxY)},i.prototype._setRectSize=function(a,c){var d=b(a),e=d.outerWidth,f=d.outerHeight;(e||f)&&(e=this._applyGridGutter(e,this.columnWidth),f=this._applyGridGutter(f,this.rowHeight)),c.width=Math.min(e,this.packer.width),c.height=Math.min(f,this.packer.height)},i.prototype._applyGridGutter=function(a,b){if(!b)return a+this.gutter;b+=this.gutter;var c=a%b,d=c&&1>c?"round":"ceil";return a=Math[d](a/b)*b},i.prototype._getContainerSize=function(){return this.options.isHorizontal?{width:this.maxX-this.gutter}:{height:this.maxY-this.gutter}},i.prototype._manageStamp=function(a){var b,c=this.getItem(a);if(c&&c.isPlacing)b=c.placeRect;else{var e=this._getElementOffset(a);b=new d({x:this.options.isOriginLeft?e.left:e.right,y:this.options.isOriginTop?e.top:e.bottom})}this._setRectSize(a,b),this.packer.placed(b),this._setMaxXY(b)},i.prototype.sortItemsByPosition=function(){var a=this.options.isHorizontal?h:g;this.items.sort(a)},i.prototype.fit=function(a,b,c){var d=this.getItem(a);d&&(this._getMeasurements(),this.stamp(d.element),d.getSize(),d.isPlacing=!0,b=void 0===b?d.rect.x:b,c=void 0===c?d.rect.y:c,d.positionPlaceRect(b,c,!0),this._bindFitEvents(d),d.moveTo(d.placeRect.x,d.placeRect.y),this.layout(),this.unstamp(d.element),this.sortItemsByPosition(),d.isPlacing=!1,d.copyPlaceRectPosition())},i.prototype._bindFitEvents=function(a){function b(){d++,2===d&&c.emitEvent("fitComplete",[c,a])}var c=this,d=0;a.on("layout",function(){return b(),!0}),this.on("layoutComplete",function(){return b(),!0})},i.prototype.resize=function(){var a=b(this.element),c=this.size&&a,d=this.options.isHorizontal?"innerHeight":"innerWidth";c&&a[d]===this.size[d]||this.layout()},i.prototype.itemDragStart=function(a){this.stamp(a);var b=this.getItem(a);b&&b.dragStart()},i.prototype.itemDragMove=function(a,b,c){function d(){f.layout(),delete f.dragTimeout}var e=this.getItem(a);e&&e.dragMove(b,c);var f=this;this.clearDragTimeout(),this.dragTimeout=setTimeout(d,40)},i.prototype.clearDragTimeout=function(){this.dragTimeout&&clearTimeout(this.dragTimeout)},i.prototype.itemDragEnd=function(b){var c,d=this.getItem(b);if(d&&(c=d.didDrag,d.dragStop()),!d||!c&&!d.needsPositioning)return void this.unstamp(b);a.add(d.element,"is-positioning-post-drag");var e=this._getDragEndLayoutComplete(b,d);d.needsPositioning?(d.on("layout",e),d.moveTo(d.placeRect.x,d.placeRect.y)):d&&d.copyPlaceRectPosition(),this.clearDragTimeout(),this.on("layoutComplete",e),this.layout()},i.prototype._getDragEndLayoutComplete=function(b,c){var d=c&&c.needsPositioning,e=0,f=d?2:1,g=this;return function(){return e++,e!==f?!0:(c&&(a.remove(c.element,"is-positioning-post-drag"),c.isPlacing=!1,c.copyPlaceRectPosition()),g.unstamp(b),g.sortItemsByPosition(),d&&g.emitEvent("dragItemPositioned",[g,c]),!0)}},i.prototype.bindDraggabillyEvents=function(a){a.on("dragStart",this.handleDraggabilly.dragStart),a.on("dragMove",this.handleDraggabilly.dragMove),a.on("dragEnd",this.handleDraggabilly.dragEnd)},i.prototype.bindUIDraggableEvents=function(a){a.on("dragstart",this.handleUIDraggable.start).on("drag",this.handleUIDraggable.drag).on("dragstop",this.handleUIDraggable.stop)},i.Rect=d,i.Packer=e,i}"function"==typeof define&&define.amd?define("packery/js/packery",["classie/classie","get-size/get-size","outlayer/outlayer","./rect","./packer","./item"],b):"object"==typeof exports?module.exports=b(require("desandro-classie"),require("get-size"),require("outlayer"),require("./rect"),require("./packer"),require("./item")):a.Packery=b(a.classie,a.getSize,a.Outlayer,a.Packery.Rect,a.Packery.Packer,a.Packery.Item)}(window),function(a){function b(a,b){for(var c in b)a[c]=b[c];return a}function c(a,c,d){var e=a.create("packery"),f=e.prototype._getElementOffset,g=e.prototype._getMeasurement;b(e.prototype,c.prototype),e.prototype._getElementOffset=f,e.prototype._getMeasurement=g;var h=e.prototype._resetLayout;e.prototype._resetLayout=function(){this.packer=this.packer||new c.Packer,h.apply(this,arguments)};var i=e.prototype._getItemLayoutPosition;e.prototype._getItemLayoutPosition=function(a){return a.rect=a.rect||new c.Rect,i.call(this,a)};var j=e.prototype._manageStamp;return e.prototype._manageStamp=function(){this.options.isOriginLeft=this.isotope.options.isOriginLeft,this.options.isOriginTop=this.isotope.options.isOriginTop,j.apply(this,arguments)},e.prototype.needsResizeLayout=function(){var a=d(this.element),b=this.size&&a,c=this.options.isHorizontal?"innerHeight":"innerWidth";return b&&a[c]!==this.size[c]},e}"function"==typeof define&&define.amd?define(["isotope/js/layout-mode","packery/js/packery","get-size/get-size"],c):"object"==typeof exports?module.exports=c(require("isotope-layout/js/layout-mode"),require("packery"),require("get-size")):c(a.Isotope.LayoutMode,a.Packery,a.getSize)}(window);
/*!
 * Flickity PACKAGED v2.1.2
 * Touch, responsive, flickable carousels
 *
 * Licensed GPLv3 for open source use
 * or Flickity Commercial License for commercial use
 *
 * https://flickity.metafizzy.co
 * Copyright 2015-2018 Metafizzy
 */

/**
 * Bridget makes jQuery widgets
 * v2.0.1
 * MIT license
 */

/* jshint browser: true, strict: true, undef: true, unused: true */

( function( window, factory ) {
  // universal module definition
  /*jshint strict: false */ /* globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'jquery-bridget/jquery-bridget',[ 'jquery' ], function( jQuery ) {
      return factory( window, jQuery );
    });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('jquery')
    );
  } else {
    // browser global
    window.jQueryBridget = factory(
      window,
      window.jQuery
    );
  }

}( window, function factory( window, jQuery ) {
'use strict';

// ----- utils ----- //

var arraySlice = Array.prototype.slice;

// helper function for logging errors
// $.error breaks jQuery chaining
var console = window.console;
var logError = typeof console == 'undefined' ? function() {} :
  function( message ) {
    console.error( message );
  };

// ----- jQueryBridget ----- //

function jQueryBridget( namespace, PluginClass, $ ) {
  $ = $ || jQuery || window.jQuery;
  if ( !$ ) {
    return;
  }

  // add option method -> $().plugin('option', {...})
  if ( !PluginClass.prototype.option ) {
    // option setter
    PluginClass.prototype.option = function( opts ) {
      // bail out if not an object
      if ( !$.isPlainObject( opts ) ){
        return;
      }
      this.options = $.extend( true, this.options, opts );
    };
  }

  // make jQuery plugin
  $.fn[ namespace ] = function( arg0 /*, arg1 */ ) {
    if ( typeof arg0 == 'string' ) {
      // method call $().plugin( 'methodName', { options } )
      // shift arguments by 1
      var args = arraySlice.call( arguments, 1 );
      return methodCall( this, arg0, args );
    }
    // just $().plugin({ options })
    plainCall( this, arg0 );
    return this;
  };

  // $().plugin('methodName')
  function methodCall( $elems, methodName, args ) {
    var returnValue;
    var pluginMethodStr = '$().' + namespace + '("' + methodName + '")';

    $elems.each( function( i, elem ) {
      // get instance
      var instance = $.data( elem, namespace );
      if ( !instance ) {
        logError( namespace + ' not initialized. Cannot call methods, i.e. ' +
          pluginMethodStr );
        return;
      }

      var method = instance[ methodName ];
      if ( !method || methodName.charAt(0) == '_' ) {
        logError( pluginMethodStr + ' is not a valid method' );
        return;
      }

      // apply method, get return value
      var value = method.apply( instance, args );
      // set return value if value is returned, use only first value
      returnValue = returnValue === undefined ? value : returnValue;
    });

    return returnValue !== undefined ? returnValue : $elems;
  }

  function plainCall( $elems, options ) {
    $elems.each( function( i, elem ) {
      var instance = $.data( elem, namespace );
      if ( instance ) {
        // set options & init
        instance.option( options );
        instance._init();
      } else {
        // initialize new instance
        instance = new PluginClass( elem, options );
        $.data( elem, namespace, instance );
      }
    });
  }

  updateJQuery( $ );

}

// ----- updateJQuery ----- //

// set $.bridget for v1 backwards compatibility
function updateJQuery( $ ) {
  if ( !$ || ( $ && $.bridget ) ) {
    return;
  }
  $.bridget = jQueryBridget;
}

updateJQuery( jQuery || window.jQuery );

// -----  ----- //

return jQueryBridget;

}));

/**
 * EvEmitter v1.1.0
 * Lil' event emitter
 * MIT License
 */

/* jshint unused: true, undef: true, strict: true */

( function( global, factory ) {
  // universal module definition
  /* jshint strict: false */ /* globals define, module, window */
  if ( typeof define == 'function' && define.amd ) {
    // AMD - RequireJS
    define( 'ev-emitter/ev-emitter',factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS - Browserify, Webpack
    module.exports = factory();
  } else {
    // Browser globals
    global.EvEmitter = factory();
  }

}( typeof window != 'undefined' ? window : this, function() {



function EvEmitter() {}

var proto = EvEmitter.prototype;

proto.on = function( eventName, listener ) {
  if ( !eventName || !listener ) {
    return;
  }
  // set events hash
  var events = this._events = this._events || {};
  // set listeners array
  var listeners = events[ eventName ] = events[ eventName ] || [];
  // only add once
  if ( listeners.indexOf( listener ) == -1 ) {
    listeners.push( listener );
  }

  return this;
};

proto.once = function( eventName, listener ) {
  if ( !eventName || !listener ) {
    return;
  }
  // add event
  this.on( eventName, listener );
  // set once flag
  // set onceEvents hash
  var onceEvents = this._onceEvents = this._onceEvents || {};
  // set onceListeners object
  var onceListeners = onceEvents[ eventName ] = onceEvents[ eventName ] || {};
  // set flag
  onceListeners[ listener ] = true;

  return this;
};

proto.off = function( eventName, listener ) {
  var listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) {
    return;
  }
  var index = listeners.indexOf( listener );
  if ( index != -1 ) {
    listeners.splice( index, 1 );
  }

  return this;
};

proto.emitEvent = function( eventName, args ) {
  var listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) {
    return;
  }
  // copy over to avoid interference if .off() in listener
  listeners = listeners.slice(0);
  args = args || [];
  // once stuff
  var onceListeners = this._onceEvents && this._onceEvents[ eventName ];

  for ( var i=0; i < listeners.length; i++ ) {
    var listener = listeners[i]
    var isOnce = onceListeners && onceListeners[ listener ];
    if ( isOnce ) {
      // remove listener
      // remove before trigger to prevent recursion
      this.off( eventName, listener );
      // unset once flag
      delete onceListeners[ listener ];
    }
    // trigger listener
    listener.apply( this, args );
  }

  return this;
};

proto.allOff = function() {
  delete this._events;
  delete this._onceEvents;
};

return EvEmitter;

}));

/*!
 * getSize v2.0.3
 * measure size of elements
 * MIT license
 */

/* jshint browser: true, strict: true, undef: true, unused: true */
/* globals console: false */

( function( window, factory ) {
  /* jshint strict: false */ /* globals define, module */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'get-size/get-size',factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory();
  } else {
    // browser global
    window.getSize = factory();
  }

})( window, function factory() {
'use strict';

// -------------------------- helpers -------------------------- //

// get a number from a string, not a percentage
function getStyleSize( value ) {
  var num = parseFloat( value );
  // not a percent like '100%', and a number
  var isValid = value.indexOf('%') == -1 && !isNaN( num );
  return isValid && num;
}

function noop() {}

var logError = typeof console == 'undefined' ? noop :
  function( message ) {
    console.error( message );
  };

// -------------------------- measurements -------------------------- //

var measurements = [
  'paddingLeft',
  'paddingRight',
  'paddingTop',
  'paddingBottom',
  'marginLeft',
  'marginRight',
  'marginTop',
  'marginBottom',
  'borderLeftWidth',
  'borderRightWidth',
  'borderTopWidth',
  'borderBottomWidth'
];

var measurementsLength = measurements.length;

function getZeroSize() {
  var size = {
    width: 0,
    height: 0,
    innerWidth: 0,
    innerHeight: 0,
    outerWidth: 0,
    outerHeight: 0
  };
  for ( var i=0; i < measurementsLength; i++ ) {
    var measurement = measurements[i];
    size[ measurement ] = 0;
  }
  return size;
}

// -------------------------- getStyle -------------------------- //

/**
 * getStyle, get style of element, check for Firefox bug
 * https://bugzilla.mozilla.org/show_bug.cgi?id=548397
 */
function getStyle( elem ) {
  var style = getComputedStyle( elem );
  if ( !style ) {
    logError( 'Style returned ' + style +
      '. Are you running this code in a hidden iframe on Firefox? ' +
      'See https://bit.ly/getsizebug1' );
  }
  return style;
}

// -------------------------- setup -------------------------- //

var isSetup = false;

var isBoxSizeOuter;

/**
 * setup
 * check isBoxSizerOuter
 * do on first getSize() rather than on page load for Firefox bug
 */
function setup() {
  // setup once
  if ( isSetup ) {
    return;
  }
  isSetup = true;

  // -------------------------- box sizing -------------------------- //

  /**
   * Chrome & Safari measure the outer-width on style.width on border-box elems
   * IE11 & Firefox<29 measures the inner-width
   */
  var div = document.createElement('div');
  div.style.width = '200px';
  div.style.padding = '1px 2px 3px 4px';
  div.style.borderStyle = 'solid';
  div.style.borderWidth = '1px 2px 3px 4px';
  div.style.boxSizing = 'border-box';

  var body = document.body || document.documentElement;
  body.appendChild( div );
  var style = getStyle( div );
  // round value for browser zoom. desandro/masonry#928
  isBoxSizeOuter = Math.round( getStyleSize( style.width ) ) == 200;
  getSize.isBoxSizeOuter = isBoxSizeOuter;

  body.removeChild( div );
}

// -------------------------- getSize -------------------------- //

function getSize( elem ) {
  setup();

  // use querySeletor if elem is string
  if ( typeof elem == 'string' ) {
    elem = document.querySelector( elem );
  }

  // do not proceed on non-objects
  if ( !elem || typeof elem != 'object' || !elem.nodeType ) {
    return;
  }

  var style = getStyle( elem );

  // if hidden, everything is 0
  if ( style.display == 'none' ) {
    return getZeroSize();
  }

  var size = {};
  size.width = elem.offsetWidth;
  size.height = elem.offsetHeight;

  var isBorderBox = size.isBorderBox = style.boxSizing == 'border-box';

  // get all measurements
  for ( var i=0; i < measurementsLength; i++ ) {
    var measurement = measurements[i];
    var value = style[ measurement ];
    var num = parseFloat( value );
    // any 'auto', 'medium' value will be 0
    size[ measurement ] = !isNaN( num ) ? num : 0;
  }

  var paddingWidth = size.paddingLeft + size.paddingRight;
  var paddingHeight = size.paddingTop + size.paddingBottom;
  var marginWidth = size.marginLeft + size.marginRight;
  var marginHeight = size.marginTop + size.marginBottom;
  var borderWidth = size.borderLeftWidth + size.borderRightWidth;
  var borderHeight = size.borderTopWidth + size.borderBottomWidth;

  var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;

  // overwrite width and height if we can get it from style
  var styleWidth = getStyleSize( style.width );
  if ( styleWidth !== false ) {
    size.width = styleWidth +
      // add padding and border unless it's already including it
      ( isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth );
  }

  var styleHeight = getStyleSize( style.height );
  if ( styleHeight !== false ) {
    size.height = styleHeight +
      // add padding and border unless it's already including it
      ( isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight );
  }

  size.innerWidth = size.width - ( paddingWidth + borderWidth );
  size.innerHeight = size.height - ( paddingHeight + borderHeight );

  size.outerWidth = size.width + marginWidth;
  size.outerHeight = size.height + marginHeight;

  return size;
}

return getSize;

});

/**
 * matchesSelector v2.0.2
 * matchesSelector( element, '.selector' )
 * MIT license
 */

/*jshint browser: true, strict: true, undef: true, unused: true */

( function( window, factory ) {
  /*global define: false, module: false */
  'use strict';
  // universal module definition
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'desandro-matches-selector/matches-selector',factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory();
  } else {
    // browser global
    window.matchesSelector = factory();
  }

}( window, function factory() {
  'use strict';

  var matchesMethod = ( function() {
    var ElemProto = window.Element.prototype;
    // check for the standard method name first
    if ( ElemProto.matches ) {
      return 'matches';
    }
    // check un-prefixed
    if ( ElemProto.matchesSelector ) {
      return 'matchesSelector';
    }
    // check vendor prefixes
    var prefixes = [ 'webkit', 'moz', 'ms', 'o' ];

    for ( var i=0; i < prefixes.length; i++ ) {
      var prefix = prefixes[i];
      var method = prefix + 'MatchesSelector';
      if ( ElemProto[ method ] ) {
        return method;
      }
    }
  })();

  return function matchesSelector( elem, selector ) {
    return elem[ matchesMethod ]( selector );
  };

}));

/**
 * Fizzy UI utils v2.0.7
 * MIT license
 */

/*jshint browser: true, undef: true, unused: true, strict: true */

( function( window, factory ) {
  // universal module definition
  /*jshint strict: false */ /*globals define, module, require */

  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'fizzy-ui-utils/utils',[
      'desandro-matches-selector/matches-selector'
    ], function( matchesSelector ) {
      return factory( window, matchesSelector );
    });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('desandro-matches-selector')
    );
  } else {
    // browser global
    window.fizzyUIUtils = factory(
      window,
      window.matchesSelector
    );
  }

}( window, function factory( window, matchesSelector ) {



var utils = {};

// ----- extend ----- //

// extends objects
utils.extend = function( a, b ) {
  for ( var prop in b ) {
    a[ prop ] = b[ prop ];
  }
  return a;
};

// ----- modulo ----- //

utils.modulo = function( num, div ) {
  return ( ( num % div ) + div ) % div;
};

// ----- makeArray ----- //

var arraySlice = Array.prototype.slice;

// turn element or nodeList into an array
utils.makeArray = function( obj ) {
  if ( Array.isArray( obj ) ) {
    // use object if already an array
    return obj;
  }
  // return empty array if undefined or null. #6
  if ( obj === null || obj === undefined ) {
    return [];
  }

  var isArrayLike = typeof obj == 'object' && typeof obj.length == 'number';
  if ( isArrayLike ) {
    // convert nodeList to array
    return arraySlice.call( obj );
  }

  // array of single index
  return [ obj ];
};

// ----- removeFrom ----- //

utils.removeFrom = function( ary, obj ) {
  var index = ary.indexOf( obj );
  if ( index != -1 ) {
    ary.splice( index, 1 );
  }
};

// ----- getParent ----- //

utils.getParent = function( elem, selector ) {
  while ( elem.parentNode && elem != document.body ) {
    elem = elem.parentNode;
    if ( matchesSelector( elem, selector ) ) {
      return elem;
    }
  }
};

// ----- getQueryElement ----- //

// use element as selector string
utils.getQueryElement = function( elem ) {
  if ( typeof elem == 'string' ) {
    return document.querySelector( elem );
  }
  return elem;
};

// ----- handleEvent ----- //

// enable .ontype to trigger from .addEventListener( elem, 'type' )
utils.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

// ----- filterFindElements ----- //

utils.filterFindElements = function( elems, selector ) {
  // make array of elems
  elems = utils.makeArray( elems );
  var ffElems = [];

  elems.forEach( function( elem ) {
    // check that elem is an actual element
    if ( !( elem instanceof HTMLElement ) ) {
      /*nectar addition*/
      if(jQuery('body.compose-mode').length == 0) {
        return;
      }
      /*nectar addition end*/
    }
    // add elem if no selector
    if ( !selector ) {
      ffElems.push( elem );
      return;
    }
    // filter & find items if we have a selector
    // filter
    if ( matchesSelector( elem, selector ) ) {
      ffElems.push( elem );
    }
    // find children
    var childElems = elem.querySelectorAll( selector );
    // concat childElems to filterFound array
    for ( var i=0; i < childElems.length; i++ ) {
      ffElems.push( childElems[i] );
    }
  });

  return ffElems;
};

// ----- debounceMethod ----- //

utils.debounceMethod = function( _class, methodName, threshold ) {
  threshold = threshold || 100;
  // original method
  var method = _class.prototype[ methodName ];
  var timeoutName = methodName + 'Timeout';

  _class.prototype[ methodName ] = function() {
    var timeout = this[ timeoutName ];
    clearTimeout( timeout );

    var args = arguments;
    var _this = this;
    this[ timeoutName ] = setTimeout( function() {
      method.apply( _this, args );
      delete _this[ timeoutName ];
    }, threshold );
  };
};

// ----- docReady ----- //

utils.docReady = function( callback ) {
  var readyState = document.readyState;
  if ( readyState == 'complete' || readyState == 'interactive' ) {
    // do async to allow for other scripts to run. metafizzy/flickity#441
    setTimeout( callback );
  } else {
    document.addEventListener( 'DOMContentLoaded', callback );
  }
};

// ----- htmlInit ----- //

// http://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/
utils.toDashed = function( str ) {
  return str.replace( /(.)([A-Z])/g, function( match, $1, $2 ) {
    return $1 + '-' + $2;
  }).toLowerCase();
};

var console = window.console;
/**
 * allow user to initialize classes via [data-namespace] or .js-namespace class
 * htmlInit( Widget, 'widgetName' )
 * options are parsed from data-namespace-options
 */
utils.htmlInit = function( WidgetClass, namespace ) {
  utils.docReady( function() {
    var dashedNamespace = utils.toDashed( namespace );
    var dataAttr = 'data-' + dashedNamespace;
    var dataAttrElems = document.querySelectorAll( '[' + dataAttr + ']' );
    var jsDashElems = document.querySelectorAll( '.js-' + dashedNamespace );
    var elems = utils.makeArray( dataAttrElems )
      .concat( utils.makeArray( jsDashElems ) );
    var dataOptionsAttr = dataAttr + '-options';
    var jQuery = window.jQuery;

    elems.forEach( function( elem ) {
      var attr = elem.getAttribute( dataAttr ) ||
        elem.getAttribute( dataOptionsAttr );
      var options;
      try {
        options = attr && JSON.parse( attr );
      } catch ( error ) {
        // log error, do not initialize
        if ( console ) {
          console.error( 'Error parsing ' + dataAttr + ' on ' + elem.className +
          ': ' + error );
        }
        return;
      }
      // initialize
      var instance = new WidgetClass( elem, options );
      // make available via $().data('namespace')
      if ( jQuery ) {
        jQuery.data( elem, namespace, instance );
      }
    });

  });
};

// -----  ----- //

return utils;

}));

// Flickity.Cell
( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'flickity/js/cell',[
      'get-size/get-size'
    ], function( getSize ) {
      return factory( window, getSize );
    });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('get-size')
    );
  } else {
    // browser global
    window.Flickity = window.Flickity || {};
    window.Flickity.Cell = factory(
      window,
      window.getSize
    );
  }

}( window, function factory( window, getSize ) {



function Cell( elem, parent ) {
  this.element = elem;
  this.parent = parent;

  this.create();
}

var proto = Cell.prototype;

proto.create = function() {
  this.element.style.position = 'absolute';
  this.element.setAttribute( 'aria-selected', 'false' );
  this.x = 0;
  this.shift = 0;
};

proto.destroy = function() {
  // reset style
  this.element.style.position = '';
  var side = this.parent.originSide;
  this.element.removeAttribute('aria-selected');
  this.element.style[ side ] = '';
};

proto.getSize = function() {
  this.size = getSize( this.element );
};

proto.setPosition = function( x ) {
  this.x = x;
  this.updateTarget();
  this.renderPosition( x );
};

// setDefaultTarget v1 method, backwards compatibility, remove in v3
proto.updateTarget = proto.setDefaultTarget = function() {
  var marginProperty = this.parent.originSide == 'left' ? 'marginLeft' : 'marginRight';
  this.target = this.x + this.size[ marginProperty ] +
    this.size.width * this.parent.cellAlign;
};

proto.renderPosition = function( x ) {
  // render position of cell with in slider
  var side = this.parent.originSide;
  this.element.style[ side ] = this.parent.getPositionValue( x );
};

/**
 * @param {Integer} factor - 0, 1, or -1
**/
proto.wrapShift = function( shift ) {
  this.shift = shift;
  this.renderPosition( this.x + this.parent.slideableWidth * shift );
};

proto.remove = function() {
  this.element.parentNode.removeChild( this.element );
};

return Cell;

}));

// slide
( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'flickity/js/slide',factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory();
  } else {
    // browser global
    window.Flickity = window.Flickity || {};
    window.Flickity.Slide = factory();
  }

}( window, function factory() {
'use strict';

function Slide( parent ) {
  this.parent = parent;
  this.isOriginLeft = parent.originSide == 'left';
  this.cells = [];
  this.outerWidth = 0;
  this.height = 0;
}

var proto = Slide.prototype;

proto.addCell = function( cell ) {
  this.cells.push( cell );
  this.outerWidth += cell.size.outerWidth;
  this.height = Math.max( cell.size.outerHeight, this.height );
  // first cell stuff
  if ( this.cells.length == 1 ) {
    this.x = cell.x; // x comes from first cell
    var beginMargin = this.isOriginLeft ? 'marginLeft' : 'marginRight';
    this.firstMargin = cell.size[ beginMargin ];
  }
};

proto.updateTarget = function() {
  var endMargin = this.isOriginLeft ? 'marginRight' : 'marginLeft';
  var lastCell = this.getLastCell();
  var lastMargin = lastCell ? lastCell.size[ endMargin ] : 0;
  var slideWidth = this.outerWidth - ( this.firstMargin + lastMargin );
  this.target = this.x + this.firstMargin + slideWidth * this.parent.cellAlign;
};

proto.getLastCell = function() {
  return this.cells[ this.cells.length - 1 ];
};

proto.select = function() {
  this.changeSelected( true );
};

proto.unselect = function() {
  this.changeSelected( false );
};

proto.changeSelected = function( isSelected ) {
  var classMethod = isSelected ? 'add' : 'remove';
  this.cells.forEach( function( cell ) {
    cell.element.classList[ classMethod ]('is-selected');
    cell.element.setAttribute( 'aria-selected', isSelected.toString() );
  });
};

proto.getCellElements = function() {
  return this.cells.map( function( cell ) {
    return cell.element;
  });
};

return Slide;

}));

// animate
( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'flickity/js/animate',[
      'fizzy-ui-utils/utils'
    ], function( utils ) {
      return factory( window, utils );
    });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('fizzy-ui-utils')
    );
  } else {
    // browser global
    window.Flickity = window.Flickity || {};
    window.Flickity.animatePrototype = factory(
      window,
      window.fizzyUIUtils
    );
  }

}( window, function factory( window, utils ) {



// -------------------------- animate -------------------------- //

var proto = {};

proto.startAnimation = function() {
  if ( this.isAnimating ) {
    return;
  }

  this.isAnimating = true;
  this.restingFrames = 0;
  this.animate();
};

proto.animate = function() {
  this.applyDragForce();
  this.applySelectedAttraction();

  var previousX = this.x;

  this.integratePhysics();
  this.positionSlider();
  this.settle( previousX );
  // animate next frame
  if ( this.isAnimating ) {
    var _this = this;
    requestAnimationFrame( function animateFrame() {
      _this.animate();
    });
  }
};

proto.positionSlider = function() {
  var x = this.x;
  // wrap position around
  if ( this.options.wrapAround && this.cells.length > 1 ) {
    x = utils.modulo( x, this.slideableWidth );
    x = x - this.slideableWidth;
    this.shiftWrapCells( x );
  }

  x = x + this.cursorPosition;
  // reverse if right-to-left and using transform
  x = this.options.rightToLeft ? -x : x;
  var value = this.getPositionValue( x );
  // use 3D tranforms for hardware acceleration on iOS
  // but use 2D when settled, for better font-rendering
  this.slider.style.transform = this.isAnimating ?
    'translate3d(' + value + ',0,0)' : 'translateX(' + value + ')';

  // scroll event
  var firstSlide = this.slides[0];
  if ( firstSlide ) {
    var positionX = -this.x - firstSlide.target;
    var progress = positionX / this.slidesWidth;
    this.dispatchEvent( 'scroll', null, [ progress, positionX ] );
  }
};

proto.positionSliderAtSelected = function() {
  if ( !this.cells.length ) {
    return;
  }
  this.x = -this.selectedSlide.target;
  this.velocity = 0; // stop wobble
  this.positionSlider();
};

proto.getPositionValue = function( position ) {
  if ( this.options.percentPosition ) {
    // percent position, round to 2 digits, like 12.34%
    return ( Math.round( ( position / this.size.innerWidth ) * 10000 ) * 0.01 )+ '%';
  } else {
    // pixel positioning
    return Math.round( position ) + 'px';
  }
};

proto.settle = function( previousX ) {
  // keep track of frames where x hasn't moved
  if ( !this.isPointerDown && Math.round( this.x * 100 ) == Math.round( previousX * 100 ) ) {
    this.restingFrames++;
  }
  // stop animating if resting for 3 or more frames
  if ( this.restingFrames > 2 ) {
    this.isAnimating = false;
    delete this.isFreeScrolling;
    // render position with translateX when settled
    this.positionSlider();
    this.dispatchEvent( 'settle', null, [ this.selectedIndex ] );
  }
};

proto.shiftWrapCells = function( x ) {
  // shift before cells
  var beforeGap = this.cursorPosition + x;
  this._shiftCells( this.beforeShiftCells, beforeGap, -1 );
  // shift after cells
  var afterGap = this.size.innerWidth - ( x + this.slideableWidth + this.cursorPosition );
  this._shiftCells( this.afterShiftCells, afterGap, 1 );
};

proto._shiftCells = function( cells, gap, shift ) {
  for ( var i=0; i < cells.length; i++ ) {
    var cell = cells[i];
    var cellShift = gap > 0 ? shift : 0;
    cell.wrapShift( cellShift );
    gap -= cell.size.outerWidth;
  }
};

proto._unshiftCells = function( cells ) {
  if ( !cells || !cells.length ) {
    return;
  }
  for ( var i=0; i < cells.length; i++ ) {
    cells[i].wrapShift( 0 );
  }
};

// -------------------------- physics -------------------------- //

proto.integratePhysics = function() {
  this.x += this.velocity;
  this.velocity *= this.getFrictionFactor();
};

proto.applyForce = function( force ) {
  this.velocity += force;
};

proto.getFrictionFactor = function() {
  return 1 - this.options[ this.isFreeScrolling ? 'freeScrollFriction' : 'friction' ];
};

proto.getRestingPosition = function() {
  // my thanks to Steven Wittens, who simplified this math greatly
  return this.x + this.velocity / ( 1 - this.getFrictionFactor() );
};

proto.applyDragForce = function() {
  if ( !this.isDraggable || !this.isPointerDown ) {
    return;
  }
  // change the position to drag position by applying force
  var dragVelocity = this.dragX - this.x;
  var dragForce = dragVelocity - this.velocity;
  this.applyForce( dragForce );
};

proto.applySelectedAttraction = function() {
  // do not attract if pointer down or no slides
  var dragDown = this.isDraggable && this.isPointerDown;
  if ( dragDown || this.isFreeScrolling || !this.slides.length ) {
    return;
  }
  var distance = this.selectedSlide.target * -1 - this.x;
  var force = distance * this.options.selectedAttraction;
  this.applyForce( force );
};

return proto;

}));

// Flickity main
( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'flickity/js/flickity',[
      'ev-emitter/ev-emitter',
      'get-size/get-size',
      'fizzy-ui-utils/utils',
      './cell',
      './slide',
      './animate'
    ], function( EvEmitter, getSize, utils, Cell, Slide, animatePrototype ) {
      return factory( window, EvEmitter, getSize, utils, Cell, Slide, animatePrototype );
    });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('ev-emitter'),
      require('get-size'),
      require('fizzy-ui-utils'),
      require('./cell'),
      require('./slide'),
      require('./animate')
    );
  } else {
    // browser global
    var _Flickity = window.Flickity;

    window.Flickity = factory(
      window,
      window.EvEmitter,
      window.getSize,
      window.fizzyUIUtils,
      _Flickity.Cell,
      _Flickity.Slide,
      _Flickity.animatePrototype
    );
  }

}( window, function factory( window, EvEmitter, getSize,
  utils, Cell, Slide, animatePrototype ) {



// vars
var jQuery = window.jQuery;
var getComputedStyle = window.getComputedStyle;
var console = window.console;

function moveElements( elems, toElem ) {
  elems = utils.makeArray( elems );
  while ( elems.length ) {
    toElem.appendChild( elems.shift() );
  }
}

// -------------------------- Flickity -------------------------- //

// globally unique identifiers
var GUID = 0;
// internal store of all Flickity intances
var instances = {};

function Flickity( element, options ) {
  var queryElement = utils.getQueryElement( element );
  if ( !queryElement ) {
    if ( console ) {
      console.error( 'Bad element for Flickity: ' + ( queryElement || element ) );
    }
    return;
  }
  this.element = queryElement;
  // do not initialize twice on same element
  if ( this.element.flickityGUID ) {
    var instance = instances[ this.element.flickityGUID ];
    instance.option( options );
    return instance;
  }

  // add jQuery
  if ( jQuery ) {
    this.$element = jQuery( this.element );
  }
  // options
  this.options = utils.extend( {}, this.constructor.defaults );
  this.option( options );

  // kick things off
  this._create();
}

Flickity.defaults = {
  accessibility: true,
  // adaptiveHeight: false,
  cellAlign: 'center',
  // cellSelector: undefined,
  // contain: false,
  freeScrollFriction: 0.075, // friction when free-scrolling
  friction: 0.28, // friction when selecting
  namespaceJQueryEvents: true,
  // initialIndex: 0,
  percentPosition: true,
  resize: true,
  selectedAttraction: 0.025,
  setGallerySize: true
  // watchCSS: false,
  // wrapAround: false
};

// hash of methods triggered on _create()
Flickity.createMethods = [];

var proto = Flickity.prototype;
// inherit EventEmitter
utils.extend( proto, EvEmitter.prototype );

proto._create = function() {
  // add id for Flickity.data
  var id = this.guid = ++GUID;
  this.element.flickityGUID = id; // expando
  instances[ id ] = this; // associate via id
  // initial properties
  this.selectedIndex = 0;
  // how many frames slider has been in same position
  this.restingFrames = 0;
  // initial physics properties
  this.x = 0;
  this.velocity = 0;
  this.originSide = this.options.rightToLeft ? 'right' : 'left';
  // create viewport & slider
  /*nectar addition*/
  
  if(this.$element.hasClass('generate-markup')) {
    this.viewport = document.createElement('div'); 
    this.viewport.className = 'flickity-viewport'; 
  } else {
    this.viewport = this.$element.find('.flickity-viewport')[0];
    this.slider = this.$element.find('.flickity-slider')[0];
    this.viewport.className = 'flickity-viewport';
  }

  this._createSlider();

  
  /*nectar addition end*/

  if ( this.options.resize || this.options.watchCSS ) {
    window.addEventListener( 'resize', this );
  }

  // add listeners from on option
  for ( var eventName in this.options.on ) {
    var listener = this.options.on[ eventName ];
    this.on( eventName, listener );
  }

  Flickity.createMethods.forEach( function( method ) {
    this[ method ]();
  }, this );

  if ( this.options.watchCSS ) {
    this.watchCSS();
  } else {
    this.activate();
  }

};

/**
 * set options
 * @param {Object} opts
 */
proto.option = function( opts ) {
  utils.extend( this.options, opts );
};

proto.activate = function() {
  if ( this.isActive ) {
    return;
  }
  this.isActive = true;
  this.element.classList.add('flickity-enabled');
  if ( this.options.rightToLeft ) {
    this.element.classList.add('flickity-rtl');
  }

  this.getSize();
  // move initial cell elements so they can be loaded as cells
  var cellElems = this._filterFindCellElements( this.element.children );
  
  /* nectar addition */
  if(this.$element.hasClass('generate-markup')) {
    moveElements( cellElems, this.slider );
    this.viewport.appendChild( this.slider );
    this.element.appendChild( this.viewport );
  } else {
    //do nothing
  }
  /* nectar addition  end */
  
  // get cells from children
  this.reloadCells();

  if ( this.options.accessibility ) {
    // allow element to focusable
    this.element.tabIndex = 0;
    // listen for key presses
    this.element.addEventListener( 'keydown', this );
  }

  this.emitEvent('activate');

  var index;
  var initialIndex = this.options.initialIndex;
  if ( this.isInitActivated ) {
    index = this.selectedIndex;
  } else if ( initialIndex !== undefined ) {
    index = this.cells[ initialIndex ] ? initialIndex : 0;
  } else {
    index = 0;
  }
  // select instantly
  this.select( index, false, true );
  // flag for initial activation, for using initialIndex
  this.isInitActivated = true;
  // ready event. #493
  this.dispatchEvent('ready');
};

// slider positions the cells
/* nectar addition */
proto._createSlider = function() {
  if(this.$element.hasClass('generate-markup')) {
    var slider = document.createElement('div');
    slider.className = 'flickity-slider';
    slider.style[ this.originSide ] = 0;
    this.slider = slider;
  } else {
    // slider element does all the positioning
    //var slider = document.createElement('div');
    //slider.className = 'flickity-slider';
    this.slider.style[ this.originSide ] = 0;
  //  this.slider = slider;
  }
  
};
/* nectar addition end */

proto._filterFindCellElements = function( elems ) {
  return utils.filterFindElements( elems, this.options.cellSelector );
};

// goes through all children
proto.reloadCells = function() {
  /* nectar addition */
  
  if(jQuery(this.slider).parent().parent().find('.flickity-page-dots').length > 0) {
    var $that = this;
    setTimeout(function(){
      $that.pageDots.setDots();
    },100);
  }
  var slidesArr = [];
  jQuery(this.slider).find('> *').each(function(i){
    slidesArr[i] = jQuery(this)[0];
  });
    
    
  // collection of item elements
    this.cells = this._makeCells(slidesArr);
    /* nectar addition end */
  this.positionCells();
  this._getWrapShiftCells();
  this.setGallerySize();
};

/**
 * turn elements into Flickity.Cells
 * @param {Array or NodeList or HTMLElement} elems
 * @returns {Array} items - collection of new Flickity Cells
 */
proto._makeCells = function( elems ) {
  var cellElems = this._filterFindCellElements( elems );

  // create new Flickity for collection
  var cells = cellElems.map( function( cellElem ) {
    return new Cell( cellElem, this );
  }, this );

  return cells;
};

proto.getLastCell = function() {
  return this.cells[ this.cells.length - 1 ];
};

proto.getLastSlide = function() {
  return this.slides[ this.slides.length - 1 ];
};

// positions all cells
proto.positionCells = function() {
  // size all cells
  this._sizeCells( this.cells );
  // position all cells
  this._positionCells( 0 );
};

/**
 * position certain cells
 * @param {Integer} index - which cell to start with
 */
proto._positionCells = function( index ) {
  index = index || 0;
  // also measure maxCellHeight
  // start 0 if positioning all cells
  this.maxCellHeight = index ? this.maxCellHeight || 0 : 0;
  var cellX = 0;
  // get cellX
  if ( index > 0 ) {
    var startCell = this.cells[ index - 1 ];
    cellX = startCell.x + startCell.size.outerWidth;
  }
  var len = this.cells.length;
  for ( var i=index; i < len; i++ ) {
    var cell = this.cells[i];
    cell.setPosition( cellX );
    cellX += cell.size.outerWidth;
    this.maxCellHeight = Math.max( cell.size.outerHeight, this.maxCellHeight );
  }
  // keep track of cellX for wrap-around
  this.slideableWidth = cellX;
  // slides
  this.updateSlides();
  // contain slides target
  this._containSlides();
  // update slidesWidth
  this.slidesWidth = len ? this.getLastSlide().target - this.slides[0].target : 0;
};

/**
 * cell.getSize() on multiple cells
 * @param {Array} cells
 */
proto._sizeCells = function( cells ) {
  cells.forEach( function( cell ) {
    cell.getSize();
  });
};

// --------------------------  -------------------------- //

proto.updateSlides = function() {
  this.slides = [];
  if ( !this.cells.length ) {
    return;
  }

  var slide = new Slide( this );
  this.slides.push( slide );
  var isOriginLeft = this.originSide == 'left';
  var nextMargin = isOriginLeft ? 'marginRight' : 'marginLeft';

  var canCellFit = this._getCanCellFit();

  this.cells.forEach( function( cell, i ) {
    // just add cell if first cell in slide
    if ( !slide.cells.length ) {
      slide.addCell( cell );
      return;
    }

    var slideWidth = ( slide.outerWidth - slide.firstMargin ) +
      ( cell.size.outerWidth - cell.size[ nextMargin ] );

    if ( canCellFit.call( this, i, slideWidth ) ) {
      slide.addCell( cell );
    } else {
      // doesn't fit, new slide
      slide.updateTarget();

      slide = new Slide( this );
      this.slides.push( slide );
      slide.addCell( cell );
    }
  }, this );
  // last slide
  slide.updateTarget();
  // update .selectedSlide
  this.updateSelectedSlide();
};

proto._getCanCellFit = function() {
  var groupCells = this.options.groupCells;
  if ( !groupCells ) {
    return function() {
      return false;
    };
  } else if ( typeof groupCells == 'number' ) {
    // group by number. 3 -> [0,1,2], [3,4,5], ...
    var number = parseInt( groupCells, 10 );
    return function( i ) {
      return ( i % number ) !== 0;
    };
  }
  // default, group by width of slide
  // parse '75%
  var percentMatch = typeof groupCells == 'string' &&
    groupCells.match(/^(\d+)%$/);
  var percent = percentMatch ? parseInt( percentMatch[1], 10 ) / 100 : 1;
  return function( i, slideWidth ) {
    return slideWidth <= ( this.size.innerWidth + 1 ) * percent;
  };
};

// alias _init for jQuery plugin .flickity()
proto._init =
proto.reposition = function() {
  this.positionCells();
  this.positionSliderAtSelected();
};

proto.getSize = function() {
  this.size = getSize( this.element );
  this.setCellAlign();
  this.cursorPosition = this.size.innerWidth * this.cellAlign;
};

var cellAlignShorthands = {
  // cell align, then based on origin side
  center: {
    left: 0.5,
    right: 0.5
  },
  left: {
    left: 0,
    right: 1
  },
  right: {
    right: 0,
    left: 1
  }
};

proto.setCellAlign = function() {
  var shorthand = cellAlignShorthands[ this.options.cellAlign ];
  this.cellAlign = shorthand ? shorthand[ this.originSide ] : this.options.cellAlign;
};

proto.setGallerySize = function() {
  if ( this.options.setGallerySize ) {
    var height = this.options.adaptiveHeight && this.selectedSlide ?
      this.selectedSlide.height : this.maxCellHeight;
    this.viewport.style.height = height + 'px';
  }
};

proto._getWrapShiftCells = function() {
  // only for wrap-around
  if ( !this.options.wrapAround ) {
    return;
  }
  // unshift previous cells
  this._unshiftCells( this.beforeShiftCells );
  this._unshiftCells( this.afterShiftCells );
  // get before cells
  // initial gap
  var gapX = this.cursorPosition;
  var cellIndex = this.cells.length - 1;
  this.beforeShiftCells = this._getGapCells( gapX, cellIndex, -1 );
  // get after cells
  // ending gap between last cell and end of gallery viewport
  gapX = this.size.innerWidth - this.cursorPosition;
  // start cloning at first cell, working forwards
  this.afterShiftCells = this._getGapCells( gapX, 0, 1 );
};

proto._getGapCells = function( gapX, cellIndex, increment ) {
  // keep adding cells until the cover the initial gap
  var cells = [];
  while ( gapX > 0 ) {
    var cell = this.cells[ cellIndex ];
    if ( !cell ) {
      break;
    }
    cells.push( cell );
    cellIndex += increment;
    gapX -= cell.size.outerWidth;
  }
  return cells;
};

// ----- contain ----- //

// contain cell targets so no excess sliding
proto._containSlides = function() {
  if ( !this.options.contain || this.options.wrapAround || !this.cells.length ) {
    return;
  }
  var isRightToLeft = this.options.rightToLeft;
  var beginMargin = isRightToLeft ? 'marginRight' : 'marginLeft';
  var endMargin = isRightToLeft ? 'marginLeft' : 'marginRight';
  var contentWidth = this.slideableWidth - this.getLastCell().size[ endMargin ];
  // content is less than gallery size
  var isContentSmaller = contentWidth < this.size.innerWidth;
  // bounds
  var beginBound = this.cursorPosition + this.cells[0].size[ beginMargin ];
  var endBound = contentWidth - this.size.innerWidth * ( 1 - this.cellAlign );
  // contain each cell target
  this.slides.forEach( function( slide ) {
    if ( isContentSmaller ) {
      // all cells fit inside gallery
      slide.target = contentWidth * this.cellAlign;
    } else {
      // contain to bounds
      slide.target = Math.max( slide.target, beginBound );
      slide.target = Math.min( slide.target, endBound );
    }
  }, this );
};

// -----  ----- //

/**
 * emits events via eventEmitter and jQuery events
 * @param {String} type - name of event
 * @param {Event} event - original event
 * @param {Array} args - extra arguments
 */
proto.dispatchEvent = function( type, event, args ) {
  var emitArgs = event ? [ event ].concat( args ) : args;
  this.emitEvent( type, emitArgs );

  if ( jQuery && this.$element ) {
    // default trigger with type if no event
    type += this.options.namespaceJQueryEvents ? '.flickity' : '';
    var $event = type;
    if ( event ) {
      // create jQuery event
      var jQEvent = jQuery.Event( event );
      jQEvent.type = type;
      $event = jQEvent;
    }
    this.$element.trigger( $event, args );
  }
};

// -------------------------- select -------------------------- //

/**
 * @param {Integer} index - index of the slide
 * @param {Boolean} isWrap - will wrap-around to last/first if at the end
 * @param {Boolean} isInstant - will immediately set position at selected cell
 */
proto.select = function( index, isWrap, isInstant ) {
  if ( !this.isActive ) {
    return;
  }
  index = parseInt( index, 10 );
  this._wrapSelect( index );

  if ( this.options.wrapAround || isWrap ) {
    index = utils.modulo( index, this.slides.length );
  }
  // bail if invalid index
  if ( !this.slides[ index ] ) {
    return;
  }
  var prevIndex = this.selectedIndex;
  this.selectedIndex = index;
  this.updateSelectedSlide();
  if ( isInstant ) {
    this.positionSliderAtSelected();
  } else {
    this.startAnimation();
  }
  if ( this.options.adaptiveHeight ) {
    this.setGallerySize();
  }
  // events
  this.dispatchEvent( 'select', null, [ index ] );
  // change event if new index
  if ( index != prevIndex ) {
    this.dispatchEvent( 'change', null, [ index ] );
  }
  // old v1 event name, remove in v3
  this.dispatchEvent('cellSelect');
};

// wraps position for wrapAround, to move to closest slide. #113
proto._wrapSelect = function( index ) {
  var len = this.slides.length;
  var isWrapping = this.options.wrapAround && len > 1;
  if ( !isWrapping ) {
    return index;
  }
  var wrapIndex = utils.modulo( index, len );
  // go to shortest
  var delta = Math.abs( wrapIndex - this.selectedIndex );
  var backWrapDelta = Math.abs( ( wrapIndex + len ) - this.selectedIndex );
  var forewardWrapDelta = Math.abs( ( wrapIndex - len ) - this.selectedIndex );
  if ( !this.isDragSelect && backWrapDelta < delta ) {
    index += len;
  } else if ( !this.isDragSelect && forewardWrapDelta < delta ) {
    index -= len;
  }
  // wrap position so slider is within normal area
  if ( index < 0 ) {
    this.x -= this.slideableWidth;
  } else if ( index >= len ) {
    this.x += this.slideableWidth;
  }
};

proto.previous = function( isWrap, isInstant ) {
  this.select( this.selectedIndex - 1, isWrap, isInstant );
};

proto.next = function( isWrap, isInstant ) {
  this.select( this.selectedIndex + 1, isWrap, isInstant );
};

proto.updateSelectedSlide = function() {
  var slide = this.slides[ this.selectedIndex ];
  // selectedIndex could be outside of slides, if triggered before resize()
  if ( !slide ) {
    return;
  }
  // unselect previous selected slide
  this.unselectSelectedSlide();
  // update new selected slide
  this.selectedSlide = slide;
  slide.select();
  this.selectedCells = slide.cells;
  this.selectedElements = slide.getCellElements();
  // HACK: selectedCell & selectedElement is first cell in slide, backwards compatibility
  // Remove in v3?
  this.selectedCell = slide.cells[0];
  this.selectedElement = this.selectedElements[0];
};

proto.unselectSelectedSlide = function() {
  if ( this.selectedSlide ) {
    this.selectedSlide.unselect();
  }
};

/**
 * select slide from number or cell element
 * @param {Element or Number} elem
 */
proto.selectCell = function( value, isWrap, isInstant ) {
  // get cell
  var cell = this.queryCell( value );
  if ( !cell ) {
    return;
  }

  var index = this.getCellSlideIndex( cell );
  this.select( index, isWrap, isInstant );
};

proto.getCellSlideIndex = function( cell ) {
  // get index of slides that has cell
  for ( var i=0; i < this.slides.length; i++ ) {
    var slide = this.slides[i];
    var index = slide.cells.indexOf( cell );
    if ( index != -1 ) {
      return i;
    }
  }
};

// -------------------------- get cells -------------------------- //

/**
 * get Flickity.Cell, given an Element
 * @param {Element} elem
 * @returns {Flickity.Cell} item
 */
proto.getCell = function( elem ) {
  // loop through cells to get the one that matches
  for ( var i=0; i < this.cells.length; i++ ) {
    var cell = this.cells[i];
    if ( cell.element == elem ) {
      return cell;
    }
  }
};

/**
 * get collection of Flickity.Cells, given Elements
 * @param {Element, Array, NodeList} elems
 * @returns {Array} cells - Flickity.Cells
 */
proto.getCells = function( elems ) {
  elems = utils.makeArray( elems );
  var cells = [];
  elems.forEach( function( elem ) {
    var cell = this.getCell( elem );
    if ( cell ) {
      cells.push( cell );
    }
  }, this );
  return cells;
};

/**
 * get cell elements
 * @returns {Array} cellElems
 */
proto.getCellElements = function() {
  return this.cells.map( function( cell ) {
    return cell.element;
  });
};

/**
 * get parent cell from an element
 * @param {Element} elem
 * @returns {Flickit.Cell} cell
 */
proto.getParentCell = function( elem ) {
  // first check if elem is cell
  var cell = this.getCell( elem );
  if ( cell ) {
    return cell;
  }
  // try to get parent cell elem
  elem = utils.getParent( elem, '.flickity-slider > *' );
  return this.getCell( elem );
};

/**
 * get cells adjacent to a slide
 * @param {Integer} adjCount - number of adjacent slides
 * @param {Integer} index - index of slide to start
 * @returns {Array} cells - array of Flickity.Cells
 */
proto.getAdjacentCellElements = function( adjCount, index ) {
  if ( !adjCount ) {
    return this.selectedSlide.getCellElements();
  }
  index = index === undefined ? this.selectedIndex : index;

  var len = this.slides.length;
  if ( 1 + ( adjCount * 2 ) >= len ) {
    return this.getCellElements();
  }

  var cellElems = [];
  for ( var i = index - adjCount; i <= index + adjCount ; i++ ) {
    var slideIndex = this.options.wrapAround ? utils.modulo( i, len ) : i;
    var slide = this.slides[ slideIndex ];
    if ( slide ) {
      cellElems = cellElems.concat( slide.getCellElements() );
    }
  }
  return cellElems;
};

/**
 * select slide from number or cell element
 * @param {Element, Selector String, or Number} selector
 */
proto.queryCell = function( selector ) {
  if ( typeof selector == 'number' ) {
    // use number as index
    return this.cells[ selector ];
  }
  if ( typeof selector == 'string' ) {
    // use string as selector, get element
    selector = this.element.querySelector( selector );
  }
  // get cell from element
  return this.getCell( selector );
};

// -------------------------- events -------------------------- //

proto.uiChange = function() {
  this.emitEvent('uiChange');
};

proto.childUIPointerDown = function( event ) {
  this.emitEvent( 'childUIPointerDown', [ event ] );
};

// ----- resize ----- //

proto.onresize = function() {
  this.watchCSS();
  this.resize();
};

utils.debounceMethod( Flickity, 'onresize', 150 );

proto.resize = function() {
  if ( !this.isActive ) {
    return;
  }
  this.getSize();
  // wrap values
  if ( this.options.wrapAround ) {
    this.x = utils.modulo( this.x, this.slideableWidth );
  }
  this.positionCells();
  this._getWrapShiftCells();
  this.setGallerySize();
  this.emitEvent('resize');
  // update selected index for group slides, instant
  // TODO: position can be lost between groups of various numbers
  var selectedElement = this.selectedElements && this.selectedElements[0];
  this.selectCell( selectedElement, false, true );
};

// watches the :after property, activates/deactivates
proto.watchCSS = function() {
  var watchOption = this.options.watchCSS;
  if ( !watchOption ) {
    return;
  }

  var afterContent = getComputedStyle( this.element, ':after' ).content;
  // activate if :after { content: 'flickity' }
  if ( afterContent.indexOf('flickity') != -1 ) {
    this.activate();
  } else {
    this.deactivate();
  }
};

// ----- keydown ----- //

// go previous/next if left/right keys pressed
proto.onkeydown = function( event ) {
  // only work if element is in focus
  var isNotFocused = document.activeElement && document.activeElement != this.element;
  if ( !this.options.accessibility ||isNotFocused ) {
    return;
  }

  var handler = Flickity.keyboardHandlers[ event.keyCode ];
  if ( handler ) {
    handler.call( this );
  }
};

Flickity.keyboardHandlers = {
  // left arrow
  37: function() {
    var leftMethod = this.options.rightToLeft ? 'next' : 'previous';
    this.uiChange();
    this[ leftMethod ]();
  },
  // right arrow
  39: function() {
    var rightMethod = this.options.rightToLeft ? 'previous' : 'next';
    this.uiChange();
    this[ rightMethod ]();
  },
};

// ----- focus ----- //

proto.focus = function() {
  // TODO remove scrollTo once focus options gets more support
  // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus#Browser_compatibility
  var prevScrollY = window.pageYOffset;
  this.element.focus({ preventScroll: true });
  // hack to fix scroll jump after focus, #76
  if ( window.pageYOffset != prevScrollY ) {
    window.scrollTo( window.pageXOffset, prevScrollY );
  }
};

// -------------------------- destroy -------------------------- //

// deactivate all Flickity functionality, but keep stuff available
proto.deactivate = function() {
  if ( !this.isActive ) {
    return;
  }
  this.element.classList.remove('flickity-enabled');
  this.element.classList.remove('flickity-rtl');
  this.unselectSelectedSlide();
  // destroy cells
  this.cells.forEach( function( cell ) {
    cell.destroy();
  });
  this.element.removeChild( this.viewport );
  // move child elements back into element
  moveElements( this.slider.children, this.element );
  if ( this.options.accessibility ) {
    this.element.removeAttribute('tabIndex');
    this.element.removeEventListener( 'keydown', this );
  }
  // set flags
  this.isActive = false;
  this.emitEvent('deactivate');
};

proto.destroy = function() {
  this.deactivate();
  window.removeEventListener( 'resize', this );
  this.emitEvent('destroy');
  if ( jQuery && this.$element ) {
    jQuery.removeData( this.element, 'flickity' );
  }
  delete this.element.flickityGUID;
  delete instances[ this.guid ];
};

// -------------------------- prototype -------------------------- //

utils.extend( proto, animatePrototype );

// -------------------------- extras -------------------------- //

/**
 * get Flickity instance from element
 * @param {Element} elem
 * @returns {Flickity}
 */
Flickity.data = function( elem ) {
  elem = utils.getQueryElement( elem );
  var id = elem && elem.flickityGUID;
  return id && instances[ id ];
};

utils.htmlInit( Flickity, 'flickity' );

if ( jQuery && jQuery.bridget ) {
  jQuery.bridget( 'flickity', Flickity );
}

// set internal jQuery, for Webpack + jQuery v3, #478
Flickity.setJQuery = function( jq ) {
  jQuery = jq;
};

Flickity.Cell = Cell;

return Flickity;

}));

/*!
 * Unipointer v2.3.0
 * base class for doing one thing with pointer event
 * MIT license
 */

/*jshint browser: true, undef: true, unused: true, strict: true */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /*global define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'unipointer/unipointer',[
      'ev-emitter/ev-emitter'
    ], function( EvEmitter ) {
      return factory( window, EvEmitter );
    });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('ev-emitter')
    );
  } else {
    // browser global
    window.Unipointer = factory(
      window,
      window.EvEmitter
    );
  }

}( window, function factory( window, EvEmitter ) {



function noop() {}

function Unipointer() {}

// inherit EvEmitter
var proto = Unipointer.prototype = Object.create( EvEmitter.prototype );

proto.bindStartEvent = function( elem ) {
  this._bindStartEvent( elem, true );
};

proto.unbindStartEvent = function( elem ) {
  this._bindStartEvent( elem, false );
};

/**
 * Add or remove start event
 * @param {Boolean} isAdd - remove if falsey
 */
proto._bindStartEvent = function( elem, isAdd ) {
  // munge isAdd, default to true
  isAdd = isAdd === undefined ? true : isAdd;
  var bindMethod = isAdd ? 'addEventListener' : 'removeEventListener';

  // default to mouse events
  var startEvent = 'mousedown';
  if ( window.PointerEvent ) {
    // Pointer Events
    startEvent = 'pointerdown';
  } else if ( 'ontouchstart' in window ) {
    // Touch Events. iOS Safari
    startEvent = 'touchstart';
  }
  elem[ bindMethod ]( startEvent, this );
};

// trigger handler methods for events
proto.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

// returns the touch that we're keeping track of
proto.getTouch = function( touches ) {
  for ( var i=0; i < touches.length; i++ ) {
    var touch = touches[i];
    if ( touch.identifier == this.pointerIdentifier ) {
      return touch;
    }
  }
};

// ----- start event ----- //

proto.onmousedown = function( event ) {
  // dismiss clicks from right or middle buttons
  var button = event.button;
  if ( button && ( button !== 0 && button !== 1 ) ) {
    return;
  }
  this._pointerDown( event, event );
};

proto.ontouchstart = function( event ) {
  this._pointerDown( event, event.changedTouches[0] );
};

proto.onpointerdown = function( event ) {
  this._pointerDown( event, event );
};

/**
 * pointer start
 * @param {Event} event
 * @param {Event or Touch} pointer
 */
proto._pointerDown = function( event, pointer ) {
  // dismiss right click and other pointers
  // button = 0 is okay, 1-4 not
  if ( event.button || this.isPointerDown ) {
    return;
  }

  this.isPointerDown = true;
  // save pointer identifier to match up touch events
  this.pointerIdentifier = pointer.pointerId !== undefined ?
    // pointerId for pointer events, touch.indentifier for touch events
    pointer.pointerId : pointer.identifier;

  this.pointerDown( event, pointer );
};

proto.pointerDown = function( event, pointer ) {
  this._bindPostStartEvents( event );
  this.emitEvent( 'pointerDown', [ event, pointer ] );
};

// hash of events to be bound after start event
var postStartEvents = {
  mousedown: [ 'mousemove', 'mouseup' ],
  touchstart: [ 'touchmove', 'touchend', 'touchcancel' ],
  pointerdown: [ 'pointermove', 'pointerup', 'pointercancel' ],
};

proto._bindPostStartEvents = function( event ) {
  if ( !event ) {
    return;
  }
  // get proper events to match start event
  var events = postStartEvents[ event.type ];
  // bind events to node
  events.forEach( function( eventName ) {
    window.addEventListener( eventName, this );
  }, this );
  // save these arguments
  this._boundPointerEvents = events;
};

proto._unbindPostStartEvents = function() {
  // check for _boundEvents, in case dragEnd triggered twice (old IE8 bug)
  if ( !this._boundPointerEvents ) {
    return;
  }
  this._boundPointerEvents.forEach( function( eventName ) {
    window.removeEventListener( eventName, this );
  }, this );

  delete this._boundPointerEvents;
};

// ----- move event ----- //

proto.onmousemove = function( event ) {
  this._pointerMove( event, event );
};

proto.onpointermove = function( event ) {
  if ( event.pointerId == this.pointerIdentifier ) {
    this._pointerMove( event, event );
  }
};

proto.ontouchmove = function( event ) {
  var touch = this.getTouch( event.changedTouches );
  if ( touch ) {
    this._pointerMove( event, touch );
  }
};

/**
 * pointer move
 * @param {Event} event
 * @param {Event or Touch} pointer
 * @private
 */
proto._pointerMove = function( event, pointer ) {
  this.pointerMove( event, pointer );
};

// public
proto.pointerMove = function( event, pointer ) {
  this.emitEvent( 'pointerMove', [ event, pointer ] );
};

// ----- end event ----- //


proto.onmouseup = function( event ) {
  this._pointerUp( event, event );
};

proto.onpointerup = function( event ) {
  if ( event.pointerId == this.pointerIdentifier ) {
    this._pointerUp( event, event );
  }
};

proto.ontouchend = function( event ) {
  var touch = this.getTouch( event.changedTouches );
  if ( touch ) {
    this._pointerUp( event, touch );
  }
};

/**
 * pointer up
 * @param {Event} event
 * @param {Event or Touch} pointer
 * @private
 */
proto._pointerUp = function( event, pointer ) {
  this._pointerDone();
  this.pointerUp( event, pointer );
};

// public
proto.pointerUp = function( event, pointer ) {
  this.emitEvent( 'pointerUp', [ event, pointer ] );
};

// ----- pointer done ----- //

// triggered on pointer up & pointer cancel
proto._pointerDone = function() {
  this._pointerReset();
  this._unbindPostStartEvents();
  this.pointerDone();
};

proto._pointerReset = function() {
  // reset properties
  this.isPointerDown = false;
  delete this.pointerIdentifier;
};

proto.pointerDone = noop;

// ----- pointer cancel ----- //

proto.onpointercancel = function( event ) {
  if ( event.pointerId == this.pointerIdentifier ) {
    this._pointerCancel( event, event );
  }
};

proto.ontouchcancel = function( event ) {
  var touch = this.getTouch( event.changedTouches );
  if ( touch ) {
    this._pointerCancel( event, touch );
  }
};

/**
 * pointer cancel
 * @param {Event} event
 * @param {Event or Touch} pointer
 * @private
 */
proto._pointerCancel = function( event, pointer ) {
  this._pointerDone();
  this.pointerCancel( event, pointer );
};

// public
proto.pointerCancel = function( event, pointer ) {
  this.emitEvent( 'pointerCancel', [ event, pointer ] );
};

// -----  ----- //

// utility function for getting x/y coords from event
Unipointer.getPointerPoint = function( pointer ) {
  return {
    x: pointer.pageX,
    y: pointer.pageY
  };
};

// -----  ----- //

return Unipointer;

}));

/*!
 * Unidragger v2.3.0
 * Draggable base class
 * MIT license
 */

/*jshint browser: true, unused: true, undef: true, strict: true */

( function( window, factory ) {
  // universal module definition
  /*jshint strict: false */ /*globals define, module, require */

  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'unidragger/unidragger',[
      'unipointer/unipointer'
    ], function( Unipointer ) {
      return factory( window, Unipointer );
    });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('unipointer')
    );
  } else {
    // browser global
    window.Unidragger = factory(
      window,
      window.Unipointer
    );
  }

}( window, function factory( window, Unipointer ) {



// -------------------------- Unidragger -------------------------- //

function Unidragger() {}

// inherit Unipointer & EvEmitter
var proto = Unidragger.prototype = Object.create( Unipointer.prototype );

// ----- bind start ----- //

proto.bindHandles = function() {
  this._bindHandles( true );
};

proto.unbindHandles = function() {
  this._bindHandles( false );
};

/**
 * Add or remove start event
 * @param {Boolean} isAdd
 */
proto._bindHandles = function( isAdd ) {
  // munge isAdd, default to true
  isAdd = isAdd === undefined ? true : isAdd;
  // bind each handle
  var bindMethod = isAdd ? 'addEventListener' : 'removeEventListener';
  var touchAction = isAdd ? this._touchActionValue : '';
  for ( var i=0; i < this.handles.length; i++ ) {
    var handle = this.handles[i];
    this._bindStartEvent( handle, isAdd );
    handle[ bindMethod ]( 'click', this );
    // touch-action: none to override browser touch gestures. metafizzy/flickity#540
    if ( window.PointerEvent ) {
      handle.style.touchAction = touchAction;
    }
  }
};

// prototype so it can be overwriteable by Flickity
proto._touchActionValue = 'none';

// ----- start event ----- //

/**
 * pointer start
 * @param {Event} event
 * @param {Event or Touch} pointer
 */
proto.pointerDown = function( event, pointer ) {
  var isOkay = this.okayPointerDown( event );
  if ( !isOkay ) {
    return;
  }
  // track start event position
  this.pointerDownPointer = pointer;

  event.preventDefault();
  this.pointerDownBlur();
  // bind move and end events
  this._bindPostStartEvents( event );
  this.emitEvent( 'pointerDown', [ event, pointer ] );
};

// nodes that have text fields
var cursorNodes = {
  TEXTAREA: true,
  INPUT: true,
  SELECT: true,
  OPTION: true,
};

// input types that do not have text fields
var clickTypes = {
  radio: true,
  checkbox: true,
  button: true,
  submit: true,
  image: true,
  file: true,
};

// dismiss inputs with text fields. flickity#403, flickity#404
proto.okayPointerDown = function( event ) {
  var isCursorNode = cursorNodes[ event.target.nodeName ];
  var isClickType = clickTypes[ event.target.type ];
  var isOkay = !isCursorNode || isClickType;
  if ( !isOkay ) {
    this._pointerReset();
  }
  return isOkay;
};

// kludge to blur previously focused input
proto.pointerDownBlur = function() {
  var focused = document.activeElement;
  // do not blur body for IE10, metafizzy/flickity#117
  var canBlur = focused && focused.blur && focused != document.body;
  if ( canBlur ) {
    focused.blur();
  }
};

// ----- move event ----- //

/**
 * drag move
 * @param {Event} event
 * @param {Event or Touch} pointer
 */
proto.pointerMove = function( event, pointer ) {
  var moveVector = this._dragPointerMove( event, pointer );
  this.emitEvent( 'pointerMove', [ event, pointer, moveVector ] );
  this._dragMove( event, pointer, moveVector );
};

// base pointer move logic
proto._dragPointerMove = function( event, pointer ) {
  var moveVector = {
    x: pointer.pageX - this.pointerDownPointer.pageX,
    y: pointer.pageY - this.pointerDownPointer.pageY
  };
  // start drag if pointer has moved far enough to start drag
  if ( !this.isDragging && this.hasDragStarted( moveVector ) ) {
    this._dragStart( event, pointer );
  }
  return moveVector;
};

// condition if pointer has moved far enough to start drag
proto.hasDragStarted = function( moveVector ) {
  return Math.abs( moveVector.x ) > 3 || Math.abs( moveVector.y ) > 3;
};

// ----- end event ----- //

/**
 * pointer up
 * @param {Event} event
 * @param {Event or Touch} pointer
 */
proto.pointerUp = function( event, pointer ) {
  this.emitEvent( 'pointerUp', [ event, pointer ] );
  this._dragPointerUp( event, pointer );
};

proto._dragPointerUp = function( event, pointer ) {
  if ( this.isDragging ) {
    this._dragEnd( event, pointer );
  } else {
    // pointer didn't move enough for drag to start
    this._staticClick( event, pointer );
  }
};

// -------------------------- drag -------------------------- //

// dragStart
proto._dragStart = function( event, pointer ) {
  this.isDragging = true;
  // prevent clicks
  this.isPreventingClicks = true;
  this.dragStart( event, pointer );
};

proto.dragStart = function( event, pointer ) {
  this.emitEvent( 'dragStart', [ event, pointer ] );
};

// dragMove
proto._dragMove = function( event, pointer, moveVector ) {
  // do not drag if not dragging yet
  if ( !this.isDragging ) {
    return;
  }

  this.dragMove( event, pointer, moveVector );
};

proto.dragMove = function( event, pointer, moveVector ) {
  event.preventDefault();
  this.emitEvent( 'dragMove', [ event, pointer, moveVector ] );
};

// dragEnd
proto._dragEnd = function( event, pointer ) {
  // set flags
  this.isDragging = false;
  // re-enable clicking async
  setTimeout( function() {
    delete this.isPreventingClicks;
  }.bind( this ) );

  this.dragEnd( event, pointer );
};

proto.dragEnd = function( event, pointer ) {
  this.emitEvent( 'dragEnd', [ event, pointer ] );
};

// ----- onclick ----- //

// handle all clicks and prevent clicks when dragging
proto.onclick = function( event ) {
  if ( this.isPreventingClicks ) {
    event.preventDefault();
  }
};

// ----- staticClick ----- //

// triggered after pointer down & up with no/tiny movement
proto._staticClick = function( event, pointer ) {
  // ignore emulated mouse up clicks
  if ( this.isIgnoringMouseUp && event.type == 'mouseup' ) {
    return;
  }

  this.staticClick( event, pointer );

  // set flag for emulated clicks 300ms after touchend
  if ( event.type != 'mouseup' ) {
    this.isIgnoringMouseUp = true;
    // reset flag after 300ms
    setTimeout( function() {
      delete this.isIgnoringMouseUp;
    }.bind( this ), 400 );
  }
};

proto.staticClick = function( event, pointer ) {
  this.emitEvent( 'staticClick', [ event, pointer ] );
};

// ----- utils ----- //

Unidragger.getPointerPoint = Unipointer.getPointerPoint;

// -----  ----- //

return Unidragger;

}));

// drag
( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'flickity/js/drag',[
      './flickity',
      'unidragger/unidragger',
      'fizzy-ui-utils/utils'
    ], function( Flickity, Unidragger, utils ) {
      return factory( window, Flickity, Unidragger, utils );
    });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('./flickity'),
      require('unidragger'),
      require('fizzy-ui-utils')
    );
  } else {
    // browser global
    window.Flickity = factory(
      window,
      window.Flickity,
      window.Unidragger,
      window.fizzyUIUtils
    );
  }

}( window, function factory( window, Flickity, Unidragger, utils ) {



// ----- defaults ----- //

utils.extend( Flickity.defaults, {
  draggable: '>1',
  dragThreshold: 3,
});

// ----- create ----- //

Flickity.createMethods.push('_createDrag');

// -------------------------- drag prototype -------------------------- //

var proto = Flickity.prototype;
utils.extend( proto, Unidragger.prototype );
proto._touchActionValue = 'pan-y';

// --------------------------  -------------------------- //

var isTouch = 'createTouch' in document;
var isTouchmoveScrollCanceled = false;

proto._createDrag = function() {
  this.on( 'activate', this.onActivateDrag );
  this.on( 'uiChange', this._uiChangeDrag );
  this.on( 'childUIPointerDown', this._childUIPointerDownDrag );
  this.on( 'deactivate', this.onDeactivateDrag );
  this.on( 'cellChange', this.updateDraggable );
  // TODO updateDraggable on resize? if groupCells & slides change
  // HACK - add seemingly innocuous handler to fix iOS 10 scroll behavior
  // #457, RubaXa/Sortable#973
  if ( isTouch && !isTouchmoveScrollCanceled ) {
    window.addEventListener( 'touchmove', function() {});
    isTouchmoveScrollCanceled = true;
  }
};

proto.onActivateDrag = function() {
  this.handles = [ this.viewport ];
  this.bindHandles();
  this.updateDraggable();
};

proto.onDeactivateDrag = function() {
  this.unbindHandles();
  this.element.classList.remove('is-draggable');
};

proto.updateDraggable = function() {
  // disable dragging if less than 2 slides. #278
  if ( this.options.draggable == '>1' ) {
    this.isDraggable = this.slides.length > 1;
  } else {
    this.isDraggable = this.options.draggable;
  }
  if ( this.isDraggable ) {
    this.element.classList.add('is-draggable');
  } else {
    this.element.classList.remove('is-draggable');
  }
};

// backwards compatibility
proto.bindDrag = function() {
  this.options.draggable = true;
  this.updateDraggable();
};

proto.unbindDrag = function() {
  this.options.draggable = false;
  this.updateDraggable();
};

proto._uiChangeDrag = function() {
  delete this.isFreeScrolling;
};

proto._childUIPointerDownDrag = function( event ) {
  // allow focus & preventDefault even when not draggable
  // so child UI elements keep focus on carousel. #721
  event.preventDefault();
  this.pointerDownFocus( event );
};

// -------------------------- pointer events -------------------------- //

proto.pointerDown = function( event, pointer ) {
  if ( !this.isDraggable ) {
    this._pointerDownDefault( event, pointer );
    return;
  }
  var isOkay = this.okayPointerDown( event );
  if ( !isOkay ) {
    return;
  }

  this._pointerDownPreventDefault( event );
  this.pointerDownFocus( event );
  // blur
  if ( document.activeElement != this.element ) {
    // do not blur if already focused
    this.pointerDownBlur();
  }

  // stop if it was moving
  this.dragX = this.x;
  this.viewport.classList.add('is-pointer-down');
  // track scrolling
  this.pointerDownScroll = getScrollPosition();
  window.addEventListener( 'scroll', this );

  this._pointerDownDefault( event, pointer );
};

// default pointerDown logic, used for staticClick
proto._pointerDownDefault = function( event, pointer ) {
  // track start event position
  this.pointerDownPointer = pointer;
  // bind move and end events
  this._bindPostStartEvents( event );
  this.dispatchEvent( 'pointerDown', event, [ pointer ] );
};

var focusNodes = {
  INPUT: true,
  TEXTAREA: true,
  SELECT: true,
};

proto.pointerDownFocus = function( event ) {
  var isFocusNode = focusNodes[ event.target.nodeName ];
  if ( !isFocusNode ) {
    this.focus();
  }
};

proto._pointerDownPreventDefault = function( event ) {
  var isTouchStart = event.type == 'touchstart';
  var isTouchPointer = event.pointerType == 'touch';
  var isFocusNode = focusNodes[ event.target.nodeName ];
  if ( !isTouchStart && !isTouchPointer && !isFocusNode ) {
    event.preventDefault();
  }
};

// ----- move ----- //

proto.hasDragStarted = function( moveVector ) {
  return Math.abs( moveVector.x ) > this.options.dragThreshold;
};

// ----- up ----- //

proto.pointerUp = function( event, pointer ) {
  delete this.isTouchScrolling;
  this.viewport.classList.remove('is-pointer-down');
  this.dispatchEvent( 'pointerUp', event, [ pointer ] );
  this._dragPointerUp( event, pointer );
};

proto.pointerDone = function() {
  window.removeEventListener( 'scroll', this );
  delete this.pointerDownScroll;
};

// -------------------------- dragging -------------------------- //

proto.dragStart = function( event, pointer ) {
  if ( !this.isDraggable ) {
    return;
  }
  this.dragStartPosition = this.x;
  this.startAnimation();
  window.removeEventListener( 'scroll', this );
  this.dispatchEvent( 'dragStart', event, [ pointer ] );
};

proto.pointerMove = function( event, pointer ) {
  var moveVector = this._dragPointerMove( event, pointer );
  this.dispatchEvent( 'pointerMove', event, [ pointer, moveVector ] );
  this._dragMove( event, pointer, moveVector );
};

proto.dragMove = function( event, pointer, moveVector ) {
  if ( !this.isDraggable ) {
    return;
  }
  event.preventDefault();

  this.previousDragX = this.dragX;
  // reverse if right-to-left
  var direction = this.options.rightToLeft ? -1 : 1;
  if ( this.options.wrapAround ) {
    // wrap around move. #589
    moveVector.x = moveVector.x % this.slideableWidth;
  }
  var dragX = this.dragStartPosition + moveVector.x * direction;

  if ( !this.options.wrapAround && this.slides.length ) {
    // slow drag
    var originBound = Math.max( -this.slides[0].target, this.dragStartPosition );
    dragX = dragX > originBound ? ( dragX + originBound ) * 0.5 : dragX;
    var endBound = Math.min( -this.getLastSlide().target, this.dragStartPosition );
    dragX = dragX < endBound ? ( dragX + endBound ) * 0.5 : dragX;
  }

  this.dragX = dragX;

  this.dragMoveTime = new Date();
  this.dispatchEvent( 'dragMove', event, [ pointer, moveVector ] );
};

proto.dragEnd = function( event, pointer ) {
  if ( !this.isDraggable ) {
    return;
  }
  if ( this.options.freeScroll ) {
    this.isFreeScrolling = true;
  }
  // set selectedIndex based on where flick will end up
  var index = this.dragEndRestingSelect();

  if ( this.options.freeScroll && !this.options.wrapAround ) {
    // if free-scroll & not wrap around
    // do not free-scroll if going outside of bounding slides
    // so bounding slides can attract slider, and keep it in bounds
    var restingX = this.getRestingPosition();
    this.isFreeScrolling = -restingX > this.slides[0].target &&
      -restingX < this.getLastSlide().target;
  } else if ( !this.options.freeScroll && index == this.selectedIndex ) {
    // boost selection if selected index has not changed
    index += this.dragEndBoostSelect();
  }
  delete this.previousDragX;
  // apply selection
  // TODO refactor this, selecting here feels weird
  // HACK, set flag so dragging stays in correct direction
  this.isDragSelect = this.options.wrapAround;
  this.select( index );
  delete this.isDragSelect;
  this.dispatchEvent( 'dragEnd', event, [ pointer ] );
};

proto.dragEndRestingSelect = function() {
  var restingX = this.getRestingPosition();
  // how far away from selected slide
  var distance = Math.abs( this.getSlideDistance( -restingX, this.selectedIndex ) );
  // get closet resting going up and going down
  var positiveResting = this._getClosestResting( restingX, distance, 1 );
  var negativeResting = this._getClosestResting( restingX, distance, -1 );
  // use closer resting for wrap-around
  var index = positiveResting.distance < negativeResting.distance ?
    positiveResting.index : negativeResting.index;
  return index;
};

/**
 * given resting X and distance to selected cell
 * get the distance and index of the closest cell
 * @param {Number} restingX - estimated post-flick resting position
 * @param {Number} distance - distance to selected cell
 * @param {Integer} increment - +1 or -1, going up or down
 * @returns {Object} - { distance: {Number}, index: {Integer} }
 */
proto._getClosestResting = function( restingX, distance, increment ) {
  var index = this.selectedIndex;
  var minDistance = Infinity;
  var condition = this.options.contain && !this.options.wrapAround ?
    // if contain, keep going if distance is equal to minDistance
    function( d, md ) { return d <= md; } : function( d, md ) { return d < md; };
  while ( condition( distance, minDistance ) ) {
    // measure distance to next cell
    index += increment;
    minDistance = distance;
    distance = this.getSlideDistance( -restingX, index );
    if ( distance === null ) {
      break;
    }
    distance = Math.abs( distance );
  }
  return {
    distance: minDistance,
    // selected was previous index
    index: index - increment
  };
};

/**
 * measure distance between x and a slide target
 * @param {Number} x
 * @param {Integer} index - slide index
 */
proto.getSlideDistance = function( x, index ) {
  var len = this.slides.length;
  // wrap around if at least 2 slides
  var isWrapAround = this.options.wrapAround && len > 1;
  var slideIndex = isWrapAround ? utils.modulo( index, len ) : index;
  var slide = this.slides[ slideIndex ];
  if ( !slide ) {
    return null;
  }
  // add distance for wrap-around slides
  var wrap = isWrapAround ? this.slideableWidth * Math.floor( index / len ) : 0;
  return x - ( slide.target + wrap );
};

proto.dragEndBoostSelect = function() {
  // do not boost if no previousDragX or dragMoveTime
  if ( this.previousDragX === undefined || !this.dragMoveTime ||
    // or if drag was held for 100 ms
    new Date() - this.dragMoveTime > 100 ) {
    return 0;
  }

  var distance = this.getSlideDistance( -this.dragX, this.selectedIndex );
  var delta = this.previousDragX - this.dragX;
  if ( distance > 0 && delta > 0 ) {
    // boost to next if moving towards the right, and positive velocity
    return 1;
  } else if ( distance < 0 && delta < 0 ) {
    // boost to previous if moving towards the left, and negative velocity
    return -1;
  }
  return 0;
};

// ----- staticClick ----- //

proto.staticClick = function( event, pointer ) {
  // get clickedCell, if cell was clicked
  var clickedCell = this.getParentCell( event.target );
  var cellElem = clickedCell && clickedCell.element;
  var cellIndex = clickedCell && this.cells.indexOf( clickedCell );
  this.dispatchEvent( 'staticClick', event, [ pointer, cellElem, cellIndex ] );
};

// ----- scroll ----- //

proto.onscroll = function() {
  var scroll = getScrollPosition();
  var scrollMoveX = this.pointerDownScroll.x - scroll.x;
  var scrollMoveY = this.pointerDownScroll.y - scroll.y;
  // cancel click/tap if scroll is too much
  if ( Math.abs( scrollMoveX ) > 3 || Math.abs( scrollMoveY ) > 3 ) {
    this._pointerDone();
  }
};

// ----- utils ----- //

function getScrollPosition() {
  return {
    x: window.pageXOffset,
    y: window.pageYOffset
  };
}

// -----  ----- //

return Flickity;

}));

/*!
 * Tap listener v2.0.0
 * listens to taps
 * MIT license
 */

/*jshint browser: true, unused: true, undef: true, strict: true */

( function( window, factory ) {
  // universal module definition
  /*jshint strict: false*/ /*globals define, module, require */

  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'tap-listener/tap-listener',[
      'unipointer/unipointer'
    ], function( Unipointer ) {
      return factory( window, Unipointer );
    });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('unipointer')
    );
  } else {
    // browser global
    window.TapListener = factory(
      window,
      window.Unipointer
    );
  }

}( window, function factory( window, Unipointer ) {



// --------------------------  TapListener -------------------------- //

function TapListener( elem ) {
  this.bindTap( elem );
}

// inherit Unipointer & EventEmitter
var proto = TapListener.prototype = Object.create( Unipointer.prototype );

/**
 * bind tap event to element
 * @param {Element} elem
 */
proto.bindTap = function( elem ) {
  if ( !elem ) {
    return;
  }
  this.unbindTap();
  this.tapElement = elem;
  this._bindStartEvent( elem, true );
};

proto.unbindTap = function() {
  if ( !this.tapElement ) {
    return;
  }
  this._bindStartEvent( this.tapElement, true );
  delete this.tapElement;
};

/**
 * pointer up
 * @param {Event} event
 * @param {Event or Touch} pointer
 */
proto.pointerUp = function( event, pointer ) {
  // ignore emulated mouse up clicks
  if ( this.isIgnoringMouseUp && event.type == 'mouseup' ) {
    return;
  }

  var pointerPoint = Unipointer.getPointerPoint( pointer );
  var boundingRect = this.tapElement.getBoundingClientRect();
  var scrollX = window.pageXOffset;
  var scrollY = window.pageYOffset;
  // calculate if pointer is inside tapElement
  var isInside = pointerPoint.x >= boundingRect.left + scrollX &&
    pointerPoint.x <= boundingRect.right + scrollX &&
    pointerPoint.y >= boundingRect.top + scrollY &&
    pointerPoint.y <= boundingRect.bottom + scrollY;
  // trigger callback if pointer is inside element
  if ( isInside ) {
    this.emitEvent( 'tap', [ event, pointer ] );
  }

  // set flag for emulated clicks 300ms after touchend
  if ( event.type != 'mouseup' ) {
    this.isIgnoringMouseUp = true;
    // reset flag after 300ms
    var _this = this;
    setTimeout( function() {
      delete _this.isIgnoringMouseUp;
    }, 400 );
  }
};

proto.destroy = function() {
  this.pointerDone();
  this.unbindTap();
};

// -----  ----- //

return TapListener;

}));

// prev/next buttons
( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'flickity/js/prev-next-button',[
      './flickity',
      'tap-listener/tap-listener',
      'fizzy-ui-utils/utils'
    ], function( Flickity, TapListener, utils ) {
      return factory( window, Flickity, TapListener, utils );
    });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('./flickity'),
      require('tap-listener'),
      require('fizzy-ui-utils')
    );
  } else {
    // browser global
    factory(
      window,
      window.Flickity,
      window.TapListener,
      window.fizzyUIUtils
    );
  }

}( window, function factory( window, Flickity, TapListener, utils ) {
'use strict';

var svgURI = 'http://www.w3.org/2000/svg';

// -------------------------- PrevNextButton -------------------------- //

function PrevNextButton( direction, parent ) {
  this.direction = direction;
  this.parent = parent;
  this._create();
}

PrevNextButton.prototype = Object.create( TapListener.prototype );

PrevNextButton.prototype._create = function() {
  // properties
  this.isEnabled = true;
  this.isPrevious = this.direction == -1;
  var leftDirection = this.parent.options.rightToLeft ? 1 : -1;
  this.isLeft = this.direction == leftDirection;

  var element = this.element = document.createElement('button');
  element.className = 'flickity-button flickity-prev-next-button';
  element.className += this.isPrevious ? ' previous' : ' next';
  // prevent button from submitting form http://stackoverflow.com/a/10836076/182183
  element.setAttribute( 'type', 'button' );
  // init as disabled
  this.disable();

  element.setAttribute( 'aria-label', this.isPrevious ? 'Previous' : 'Next' );

  // create arrow
  var svg = this.createSVG();
  element.appendChild( svg );
  // events
  this.on( 'tap', this.onTap );
  this.parent.on( 'select', this.update.bind( this ) );
  this.on( 'pointerDown', this.parent.childUIPointerDown.bind( this.parent ) );
};

PrevNextButton.prototype.activate = function() {
  this.bindTap( this.element );
  // click events from keyboard
  this.element.addEventListener( 'click', this );
  // add to DOM
  this.parent.element.appendChild( this.element );
};

PrevNextButton.prototype.deactivate = function() {
  // remove from DOM
  this.parent.element.removeChild( this.element );
  // do regular TapListener destroy
  TapListener.prototype.destroy.call( this );
  // click events from keyboard
  this.element.removeEventListener( 'click', this );
};

PrevNextButton.prototype.createSVG = function() {
  var svg = document.createElementNS( svgURI, 'svg');
  svg.setAttribute( 'class', 'flickity-button-icon' );
  svg.setAttribute( 'viewBox', '0 0 100 100' );
  var path = document.createElementNS( svgURI, 'path');
  var pathMovements = getArrowMovements( this.parent.options.arrowShape );
  path.setAttribute( 'd', pathMovements );
  path.setAttribute( 'class', 'arrow' );
  // rotate arrow
  if ( !this.isLeft ) {
    path.setAttribute( 'transform', 'translate(100, 100) rotate(180) ' );
  }
  svg.appendChild( path );
  return svg;
};

// get SVG path movmement
function getArrowMovements( shape ) {
  // use shape as movement if string
  if ( typeof shape == 'string' ) {
    return shape;
  }
  // create movement string
  return 'M ' + shape.x0 + ',50' +
    ' L ' + shape.x1 + ',' + ( shape.y1 + 50 ) +
    ' L ' + shape.x2 + ',' + ( shape.y2 + 50 ) +
    ' L ' + shape.x3 + ',50 ' +
    ' L ' + shape.x2 + ',' + ( 50 - shape.y2 ) +
    ' L ' + shape.x1 + ',' + ( 50 - shape.y1 ) +
    ' Z';
}

PrevNextButton.prototype.onTap = function() {
  if ( !this.isEnabled ) {
    return;
  }
  this.parent.uiChange();
  var method = this.isPrevious ? 'previous' : 'next';
  this.parent[ method ]();
};

PrevNextButton.prototype.handleEvent = utils.handleEvent;

PrevNextButton.prototype.onclick = function( event ) {
  // only allow clicks from keyboard
  var focused = document.activeElement;
  if ( focused && focused == this.element ) {
    this.onTap( event, event );
  }
};

// -----  ----- //

PrevNextButton.prototype.enable = function() {
  if ( this.isEnabled ) {
    return;
  }
  this.element.disabled = false;
  this.isEnabled = true;
};

PrevNextButton.prototype.disable = function() {
  if ( !this.isEnabled ) {
    return;
  }
  this.element.disabled = true;
  this.isEnabled = false;
};

PrevNextButton.prototype.update = function() {
  // index of first or last slide, if previous or next
  var slides = this.parent.slides;
  // enable is wrapAround and at least 2 slides
  if ( this.parent.options.wrapAround && slides.length > 1 ) {
    this.enable();
    return;
  }
  var lastIndex = slides.length ? slides.length - 1 : 0;
  var boundIndex = this.isPrevious ? 0 : lastIndex;
  var method = this.parent.selectedIndex == boundIndex ? 'disable' : 'enable';
  this[ method ]();
};

PrevNextButton.prototype.destroy = function() {
  this.deactivate();
};

// -------------------------- Flickity prototype -------------------------- //

utils.extend( Flickity.defaults, {
  prevNextButtons: true,
  arrowShape: {
    x0: 10,
    x1: 60, y1: 50,
    x2: 70, y2: 40,
    x3: 30
  }
});

Flickity.createMethods.push('_createPrevNextButtons');
var proto = Flickity.prototype;

proto._createPrevNextButtons = function() {
  if ( !this.options.prevNextButtons ) {
    return;
  }

  this.prevButton = new PrevNextButton( -1, this );
  this.nextButton = new PrevNextButton( 1, this );

  this.on( 'activate', this.activatePrevNextButtons );
};

proto.activatePrevNextButtons = function() {
  this.prevButton.activate();
  this.nextButton.activate();
  this.on( 'deactivate', this.deactivatePrevNextButtons );
};

proto.deactivatePrevNextButtons = function() {
  this.prevButton.deactivate();
  this.nextButton.deactivate();
  this.off( 'deactivate', this.deactivatePrevNextButtons );
};

// --------------------------  -------------------------- //

Flickity.PrevNextButton = PrevNextButton;

return Flickity;

}));

// page dots
( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'flickity/js/page-dots',[
      './flickity',
      'tap-listener/tap-listener',
      'fizzy-ui-utils/utils'
    ], function( Flickity, TapListener, utils ) {
      return factory( window, Flickity, TapListener, utils );
    });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('./flickity'),
      require('tap-listener'),
      require('fizzy-ui-utils')
    );
  } else {
    // browser global
    factory(
      window,
      window.Flickity,
      window.TapListener,
      window.fizzyUIUtils
    );
  }

}( window, function factory( window, Flickity, TapListener, utils ) {

// -------------------------- PageDots -------------------------- //



function PageDots( parent ) {
  this.parent = parent;
  this._create();
}

PageDots.prototype = new TapListener();

PageDots.prototype._create = function() {
  // create holder element
  this.holder = document.createElement('ol');
  this.holder.className = 'flickity-page-dots';
  // create dots, array of elements
  this.dots = [];
  // events
  this.on( 'tap', this.onTap );
  this.on( 'pointerDown', this.parent.childUIPointerDown.bind( this.parent ) );
};

PageDots.prototype.activate = function() {
  this.setDots();
  this.bindTap( this.holder );
  // add to DOM
  this.parent.element.appendChild( this.holder );
};

PageDots.prototype.deactivate = function() {
  // remove from DOM
  this.parent.element.removeChild( this.holder );
  TapListener.prototype.destroy.call( this );
};

PageDots.prototype.setDots = function() {
  // get difference between number of slides and number of dots
  var delta = this.parent.slides.length - this.dots.length;
  if ( delta > 0 ) {
    this.addDots( delta );
  } else if ( delta < 0 ) {
    this.removeDots( -delta );
  }
};

PageDots.prototype.addDots = function( count ) {
  var fragment = document.createDocumentFragment();
  var newDots = [];
  var length = this.dots.length;
  var max = length + count;

  for ( var i = length; i < max; i++ ) {
    var dot = document.createElement('li');
    dot.className = 'dot';
    dot.setAttribute( 'aria-label', 'Page dot ' + ( i + 1 ) );
    fragment.appendChild( dot );
    newDots.push( dot );
  }

  this.holder.appendChild( fragment );
  this.dots = this.dots.concat( newDots );
};

PageDots.prototype.removeDots = function( count ) {
  // remove from this.dots collection
  var removeDots = this.dots.splice( this.dots.length - count, count );
  // remove from DOM
  removeDots.forEach( function( dot ) {
    this.holder.removeChild( dot );
  }, this );
};

PageDots.prototype.updateSelected = function() {
  // remove selected class on previous
  if ( this.selectedDot ) {
    this.selectedDot.className = 'dot';
    this.selectedDot.removeAttribute('aria-current');
  }
  // don't proceed if no dots
  if ( !this.dots.length ) {
    return;
  }
  this.selectedDot = this.dots[ this.parent.selectedIndex ];
  this.selectedDot.className = 'dot is-selected';
  this.selectedDot.setAttribute( 'aria-current', 'step' );
};

PageDots.prototype.onTap = function( event ) {
  var target = event.target;
  // only care about dot clicks
  if ( target.nodeName != 'LI' ) {
    return;
  }

  this.parent.uiChange();
  var index = this.dots.indexOf( target );
  this.parent.select( index );
};

PageDots.prototype.destroy = function() {
  this.deactivate();
};

Flickity.PageDots = PageDots;

// -------------------------- Flickity -------------------------- //

utils.extend( Flickity.defaults, {
  pageDots: true
});

Flickity.createMethods.push('_createPageDots');

var proto = Flickity.prototype;

proto._createPageDots = function() {
  if ( !this.options.pageDots ) {
    return;
  }
  this.pageDots = new PageDots( this );
  // events
  this.on( 'activate', this.activatePageDots );
  this.on( 'select', this.updateSelectedPageDots );
  this.on( 'cellChange', this.updatePageDots );
  this.on( 'resize', this.updatePageDots );
  this.on( 'deactivate', this.deactivatePageDots );
};

proto.activatePageDots = function() {
  this.pageDots.activate();
};

proto.updateSelectedPageDots = function() {
  this.pageDots.updateSelected();
};

proto.updatePageDots = function() {
  this.pageDots.setDots();
};

proto.deactivatePageDots = function() {
  this.pageDots.deactivate();
};

// -----  ----- //

Flickity.PageDots = PageDots;

return Flickity;

}));

// player & autoPlay
( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'flickity/js/player',[
      'ev-emitter/ev-emitter',
      'fizzy-ui-utils/utils',
      './flickity'
    ], function( EvEmitter, utils, Flickity ) {
      return factory( EvEmitter, utils, Flickity );
    });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      require('ev-emitter'),
      require('fizzy-ui-utils'),
      require('./flickity')
    );
  } else {
    // browser global
    factory(
      window.EvEmitter,
      window.fizzyUIUtils,
      window.Flickity
    );
  }

}( window, function factory( EvEmitter, utils, Flickity ) {



// -------------------------- Player -------------------------- //

function Player( parent ) {
  this.parent = parent;
  this.state = 'stopped';
  // visibility change event handler
  this.onVisibilityChange = this.visibilityChange.bind( this );
  this.onVisibilityPlay = this.visibilityPlay.bind( this );
}

Player.prototype = Object.create( EvEmitter.prototype );

// start play
Player.prototype.play = function() {
  if ( this.state == 'playing' ) {
    return;
  }
  // do not play if page is hidden, start playing when page is visible
  var isPageHidden = document.hidden;
  if ( isPageHidden ) {
    document.addEventListener( 'visibilitychange', this.onVisibilityPlay );
    return;
  }

  this.state = 'playing';
  // listen to visibility change
  document.addEventListener( 'visibilitychange', this.onVisibilityChange );
  // start ticking
  this.tick();
};

Player.prototype.tick = function() {
  // do not tick if not playing
  if ( this.state != 'playing' ) {
    return;
  }

  var time = this.parent.options.autoPlay;
  // default to 3 seconds
  time = typeof time == 'number' ? time : 3000;
  var _this = this;
  // HACK: reset ticks if stopped and started within interval
  this.clear();
  this.timeout = setTimeout( function() {
    _this.parent.next( true );
    _this.tick();
  }, time );
};

Player.prototype.stop = function() {
  this.state = 'stopped';
  this.clear();
  // remove visibility change event
  document.removeEventListener( 'visibilitychange', this.onVisibilityChange );
};

Player.prototype.clear = function() {
  clearTimeout( this.timeout );
};

Player.prototype.pause = function() {
  if ( this.state == 'playing' ) {
    this.state = 'paused';
    this.clear();
  }
};

Player.prototype.unpause = function() {
  // re-start play if paused
  if ( this.state == 'paused' ) {
    this.play();
  }
};

// pause if page visibility is hidden, unpause if visible
Player.prototype.visibilityChange = function() {
  var isPageHidden = document.hidden;
  this[ isPageHidden ? 'pause' : 'unpause' ]();
};

Player.prototype.visibilityPlay = function() {
  this.play();
  document.removeEventListener( 'visibilitychange', this.onVisibilityPlay );
};

// -------------------------- Flickity -------------------------- //

utils.extend( Flickity.defaults, {
  pauseAutoPlayOnHover: true
});

Flickity.createMethods.push('_createPlayer');
var proto = Flickity.prototype;

proto._createPlayer = function() {
  this.player = new Player( this );

  this.on( 'activate', this.activatePlayer );
  this.on( 'uiChange', this.stopPlayer );
  this.on( 'pointerDown', this.stopPlayer );
  this.on( 'deactivate', this.deactivatePlayer );
};

proto.activatePlayer = function() {
  if ( !this.options.autoPlay ) {
    return;
  }
  this.player.play();
  this.element.addEventListener( 'mouseenter', this );
};

// Player API, don't hate the ... thanks I know where the door is

proto.playPlayer = function() {
  this.player.play();
};

proto.stopPlayer = function() {
  this.player.stop();
};

proto.pausePlayer = function() {
  this.player.pause();
};

proto.unpausePlayer = function() {
  this.player.unpause();
};

proto.deactivatePlayer = function() {
  this.player.stop();
  this.element.removeEventListener( 'mouseenter', this );
};

// ----- mouseenter/leave ----- //

// pause auto-play on hover
proto.onmouseenter = function() {
  if ( !this.options.pauseAutoPlayOnHover ) {
    return;
  }
  this.player.pause();
  this.element.addEventListener( 'mouseleave', this );
};

// resume auto-play on hover off
proto.onmouseleave = function() {
  this.player.unpause();
  this.element.removeEventListener( 'mouseleave', this );
};

// -----  ----- //

Flickity.Player = Player;

return Flickity;

}));

// add, remove cell
( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'flickity/js/add-remove-cell',[
      './flickity',
      'fizzy-ui-utils/utils'
    ], function( Flickity, utils ) {
      return factory( window, Flickity, utils );
    });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('./flickity'),
      require('fizzy-ui-utils')
    );
  } else {
    // browser global
    factory(
      window,
      window.Flickity,
      window.fizzyUIUtils
    );
  }

}( window, function factory( window, Flickity, utils ) {



// append cells to a document fragment
function getCellsFragment( cells ) {
  var fragment = document.createDocumentFragment();
  cells.forEach( function( cell ) {
    fragment.appendChild( cell.element );
  });
  return fragment;
}

// -------------------------- add/remove cell prototype -------------------------- //

var proto = Flickity.prototype;

/**
 * Insert, prepend, or append cells
 * @param {Element, Array, NodeList} elems
 * @param {Integer} index
 */
proto.insert = function( elems, index ) {
  var cells = this._makeCells( elems );
  if ( !cells || !cells.length ) {
    return;
  }
  var len = this.cells.length;
  // default to append
  index = index === undefined ? len : index;
  // add cells with document fragment
  var fragment = getCellsFragment( cells );
  // append to slider
  var isAppend = index == len;
  if ( isAppend ) {
    this.slider.appendChild( fragment );
  } else {
    var insertCellElement = this.cells[ index ].element;
    this.slider.insertBefore( fragment, insertCellElement );
  }
  // add to this.cells
  if ( index === 0 ) {
    // prepend, add to start
    this.cells = cells.concat( this.cells );
  } else if ( isAppend ) {
    // append, add to end
    this.cells = this.cells.concat( cells );
  } else {
    // insert in this.cells
    var endCells = this.cells.splice( index, len - index );
    this.cells = this.cells.concat( cells ).concat( endCells );
  }

  this._sizeCells( cells );
  this.cellChange( index, true );
};

proto.append = function( elems ) {
  this.insert( elems, this.cells.length );
};

proto.prepend = function( elems ) {
  this.insert( elems, 0 );
};

/**
 * Remove cells
 * @param {Element, Array, NodeList} elems
 */
proto.remove = function( elems ) {
  var cells = this.getCells( elems );
  if ( !cells || !cells.length ) {
    return;
  }

  var minCellIndex = this.cells.length - 1;
  // remove cells from collection & DOM
  cells.forEach( function( cell ) {
    cell.remove();
    var index = this.cells.indexOf( cell );
    minCellIndex = Math.min( index, minCellIndex );
    utils.removeFrom( this.cells, cell );
  }, this );

  this.cellChange( minCellIndex, true );
};

/**
 * logic to be run after a cell's size changes
 * @param {Element} elem - cell's element
 */
proto.cellSizeChange = function( elem ) {
  var cell = this.getCell( elem );
  if ( !cell ) {
    return;
  }
  cell.getSize();

  var index = this.cells.indexOf( cell );
  this.cellChange( index );
};

/**
 * logic any time a cell is changed: added, removed, or size changed
 * @param {Integer} changedCellIndex - index of the changed cell, optional
 */
proto.cellChange = function( changedCellIndex, isPositioningSlider ) {
  var prevSelectedElem = this.selectedElement;
  this._positionCells( changedCellIndex );
  this._getWrapShiftCells();
  this.setGallerySize();
  // update selectedIndex
  // try to maintain position & select previous selected element
  var cell = this.getCell( prevSelectedElem );
  if ( cell ) {
    this.selectedIndex = this.getCellSlideIndex( cell );
  }
  this.selectedIndex = Math.min( this.slides.length - 1, this.selectedIndex );

  this.emitEvent( 'cellChange', [ changedCellIndex ] );
  // position slider
  this.select( this.selectedIndex );
  // do not position slider after lazy load
  if ( isPositioningSlider ) {
    this.positionSliderAtSelected();
  }
};

// -----  ----- //

return Flickity;

}));

// lazyload
( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'flickity/js/lazyload',[
      './flickity',
      'fizzy-ui-utils/utils'
    ], function( Flickity, utils ) {
      return factory( window, Flickity, utils );
    });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('./flickity'),
      require('fizzy-ui-utils')
    );
  } else {
    // browser global
    factory(
      window,
      window.Flickity,
      window.fizzyUIUtils
    );
  }

}( window, function factory( window, Flickity, utils ) {
'use strict';

Flickity.createMethods.push('_createLazyload');
var proto = Flickity.prototype;

proto._createLazyload = function() {
  this.on( 'select', this.lazyLoad );
};

proto.lazyLoad = function() {
  var lazyLoad = this.options.lazyLoad;
  if ( !lazyLoad ) {
    return;
  }
  // get adjacent cells, use lazyLoad option for adjacent count
  var adjCount = typeof lazyLoad == 'number' ? lazyLoad : 0;
  var cellElems = this.getAdjacentCellElements( adjCount );
  // get lazy images in those cells
  var lazyImages = [];
  cellElems.forEach( function( cellElem ) {
    var lazyCellImages = getCellLazyImages( cellElem );
    lazyImages = lazyImages.concat( lazyCellImages );
  });
  // load lazy images
  lazyImages.forEach( function( img ) {
    new LazyLoader( img, this );
  }, this );
};

function getCellLazyImages( cellElem ) {
  // check if cell element is lazy image
  if ( cellElem.nodeName == 'IMG' ) {
    var lazyloadAttr = cellElem.getAttribute('data-flickity-lazyload');
    var srcAttr = cellElem.getAttribute('data-flickity-lazyload-src');
    var srcsetAttr = cellElem.getAttribute('data-flickity-lazyload-srcset');
    if ( lazyloadAttr || srcAttr || srcsetAttr ) {
      return [ cellElem ];
    }
  }
  // select lazy images in cell
  var lazySelector = 'img[data-flickity-lazyload], ' +
    'img[data-flickity-lazyload-src], img[data-flickity-lazyload-srcset]';
  var imgs = cellElem.querySelectorAll( lazySelector );
  return utils.makeArray( imgs );
}

// -------------------------- LazyLoader -------------------------- //

/**
 * class to handle loading images
 */
function LazyLoader( img, flickity ) {
  this.img = img;
  this.flickity = flickity;
  this.load();
}

LazyLoader.prototype.handleEvent = utils.handleEvent;

LazyLoader.prototype.load = function() {
  this.img.addEventListener( 'load', this );
  this.img.addEventListener( 'error', this );
  // get src & srcset
  var src = this.img.getAttribute('data-flickity-lazyload') ||
    this.img.getAttribute('data-flickity-lazyload-src');
  var srcset = this.img.getAttribute('data-flickity-lazyload-srcset');
  // set src & serset
  this.img.src = src;
  if ( srcset ) {
    this.img.setAttribute( 'srcset', srcset );
  }
  // remove attr
  this.img.removeAttribute('data-flickity-lazyload');
  this.img.removeAttribute('data-flickity-lazyload-src');
  this.img.removeAttribute('data-flickity-lazyload-srcset');
};

LazyLoader.prototype.onload = function( event ) {
  this.complete( event, 'flickity-lazyloaded' );
};

LazyLoader.prototype.onerror = function( event ) {
  this.complete( event, 'flickity-lazyerror' );
};

LazyLoader.prototype.complete = function( event, className ) {
  // unbind events
  this.img.removeEventListener( 'load', this );
  this.img.removeEventListener( 'error', this );

  var cell = this.flickity.getParentCell( this.img );
  var cellElem = cell && cell.element;
  this.flickity.cellSizeChange( cellElem );

  this.img.classList.add( className );
  this.flickity.dispatchEvent( 'lazyLoad', event, cellElem );
};

// -----  ----- //

Flickity.LazyLoader = LazyLoader;

return Flickity;

}));

/*!
 * Flickity v2.1.2
 * Touch, responsive, flickable carousels
 *
 * Licensed GPLv3 for open source use
 * or Flickity Commercial License for commercial use
 *
 * https://flickity.metafizzy.co
 * Copyright 2015-2018 Metafizzy
 */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'flickity/js/index',[
      './flickity',
      './drag',
      './prev-next-button',
      './page-dots',
      './player',
      './add-remove-cell',
      './lazyload'
    ], factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      require('./flickity'),
      require('./drag'),
      require('./prev-next-button'),
      require('./page-dots'),
      require('./player'),
      require('./add-remove-cell'),
      require('./lazyload')
    );
  }

})( window, function factory( Flickity ) {
  /*jshint strict: false*/
  return Flickity;
});

/*!
 * Flickity asNavFor v2.0.1
 * enable asNavFor for Flickity
 */

/*jshint browser: true, undef: true, unused: true, strict: true*/

( function( window, factory ) {
  // universal module definition
  /*jshint strict: false */ /*globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'flickity-as-nav-for/as-nav-for',[
      'flickity/js/index',
      'fizzy-ui-utils/utils'
    ], factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      require('flickity'),
      require('fizzy-ui-utils')
    );
  } else {
    // browser global
    window.Flickity = factory(
      window.Flickity,
      window.fizzyUIUtils
    );
  }

}( window, function factory( Flickity, utils ) {



// -------------------------- asNavFor prototype -------------------------- //

// Flickity.defaults.asNavFor = null;

Flickity.createMethods.push('_createAsNavFor');

var proto = Flickity.prototype;

proto._createAsNavFor = function() {
  this.on( 'activate', this.activateAsNavFor );
  this.on( 'deactivate', this.deactivateAsNavFor );
  this.on( 'destroy', this.destroyAsNavFor );

  var asNavForOption = this.options.asNavFor;
  if ( !asNavForOption ) {
    return;
  }
  // HACK do async, give time for other flickity to be initalized
  var _this = this;
  setTimeout( function initNavCompanion() {
    _this.setNavCompanion( asNavForOption );
  });
};

proto.setNavCompanion = function( elem ) {
  elem = utils.getQueryElement( elem );
  var companion = Flickity.data( elem );
  // stop if no companion or companion is self
  if ( !companion || companion == this ) {
    return;
  }

  this.navCompanion = companion;
  // companion select
  var _this = this;
  this.onNavCompanionSelect = function() {
    _this.navCompanionSelect();
  };
  companion.on( 'select', this.onNavCompanionSelect );
  // click
  this.on( 'staticClick', this.onNavStaticClick );

  this.navCompanionSelect( true );
};

proto.navCompanionSelect = function( isInstant ) {
  if ( !this.navCompanion ) {
    return;
  }
  // select slide that matches first cell of slide
  var selectedCell = this.navCompanion.selectedCells[0];
  var firstIndex = this.navCompanion.cells.indexOf( selectedCell );
  var lastIndex = firstIndex + this.navCompanion.selectedCells.length - 1;
  var selectIndex = Math.floor( lerp( firstIndex, lastIndex,
    this.navCompanion.cellAlign ) );
  this.selectCell( selectIndex, false, isInstant );
  // set nav selected class
  this.removeNavSelectedElements();
  // stop if companion has more cells than this one
  if ( selectIndex >= this.cells.length ) {
    return;
  }

  var selectedCells = this.cells.slice( firstIndex, lastIndex + 1 );
  this.navSelectedElements = selectedCells.map( function( cell ) {
    return cell.element;
  });
  this.changeNavSelectedClass('add');
};

function lerp( a, b, t ) {
  return ( b - a ) * t + a;
}

proto.changeNavSelectedClass = function( method ) {
  this.navSelectedElements.forEach( function( navElem ) {
    navElem.classList[ method ]('is-nav-selected');
  });
};

proto.activateAsNavFor = function() {
  this.navCompanionSelect( true );
};

proto.removeNavSelectedElements = function() {
  if ( !this.navSelectedElements ) {
    return;
  }
  this.changeNavSelectedClass('remove');
  delete this.navSelectedElements;
};

proto.onNavStaticClick = function( event, pointer, cellElement, cellIndex ) {
  if ( typeof cellIndex == 'number' ) {
    this.navCompanion.selectCell( cellIndex );
  }
};

proto.deactivateAsNavFor = function() {
  this.removeNavSelectedElements();
};

proto.destroyAsNavFor = function() {
  if ( !this.navCompanion ) {
    return;
  }
  this.navCompanion.off( 'select', this.onNavCompanionSelect );
  this.off( 'staticClick', this.onNavStaticClick );
  delete this.navCompanion;
};

// -----  ----- //

return Flickity;

}));

/*!
 * imagesLoaded v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

( function( window, factory ) { 'use strict';
  // universal module definition

  /*global define: false, module: false, require: false */

  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( 'imagesloaded/imagesloaded',[
      'ev-emitter/ev-emitter'
    ], function( EvEmitter ) {
      return factory( window, EvEmitter );
    });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('ev-emitter')
    );
  } else {
    // browser global
    window.imagesLoaded = factory(
      window,
      window.EvEmitter
    );
  }

})( typeof window !== 'undefined' ? window : this,

// --------------------------  factory -------------------------- //

function factory( window, EvEmitter ) {



var $ = window.jQuery;
var console = window.console;

// -------------------------- helpers -------------------------- //

// extend objects
function extend( a, b ) {
  for ( var prop in b ) {
    a[ prop ] = b[ prop ];
  }
  return a;
}

var arraySlice = Array.prototype.slice;

// turn element or nodeList into an array
function makeArray( obj ) {
  if ( Array.isArray( obj ) ) {
    // use object if already an array
    return obj;
  }

  var isArrayLike = typeof obj == 'object' && typeof obj.length == 'number';
  if ( isArrayLike ) {
    // convert nodeList to array
    return arraySlice.call( obj );
  }

  // array of single index
  return [ obj ];
}

// -------------------------- imagesLoaded -------------------------- //

/**
 * @param {Array, Element, NodeList, String} elem
 * @param {Object or Function} options - if function, use as callback
 * @param {Function} onAlways - callback function
 */
function ImagesLoaded( elem, options, onAlways ) {
  // coerce ImagesLoaded() without new, to be new ImagesLoaded()
  if ( !( this instanceof ImagesLoaded ) ) {
    return new ImagesLoaded( elem, options, onAlways );
  }
  // use elem as selector string
  var queryElem = elem;
  if ( typeof elem == 'string' ) {
    queryElem = document.querySelectorAll( elem );
  }
  // bail if bad element
  if ( !queryElem ) {
    console.error( 'Bad element for imagesLoaded ' + ( queryElem || elem ) );
    return;
  }

  this.elements = makeArray( queryElem );
  this.options = extend( {}, this.options );
  // shift arguments if no options set
  if ( typeof options == 'function' ) {
    onAlways = options;
  } else {
    extend( this.options, options );
  }

  if ( onAlways ) {
    this.on( 'always', onAlways );
  }

  this.getImages();

  if ( $ ) {
    // add jQuery Deferred object
    this.jqDeferred = new $.Deferred();
  }

  // HACK check async to allow time to bind listeners
  setTimeout( this.check.bind( this ) );
}

ImagesLoaded.prototype = Object.create( EvEmitter.prototype );

ImagesLoaded.prototype.options = {};

ImagesLoaded.prototype.getImages = function() {
  this.images = [];

  // filter & find items if we have an item selector
  this.elements.forEach( this.addElementImages, this );
};

/**
 * @param {Node} element
 */
ImagesLoaded.prototype.addElementImages = function( elem ) {
  // filter siblings
  if ( elem.nodeName == 'IMG' ) {
    this.addImage( elem );
  }
  // get background image on element
  if ( this.options.background === true ) {
    this.addElementBackgroundImages( elem );
  }

  // find children
  // no non-element nodes, #143
  var nodeType = elem.nodeType;
  if ( !nodeType || !elementNodeTypes[ nodeType ] ) {
    return;
  }
  var childImgs = elem.querySelectorAll('img');
  // concat childElems to filterFound array
  for ( var i=0; i < childImgs.length; i++ ) {
    var img = childImgs[i];
    this.addImage( img );
  }

  // get child background images
  if ( typeof this.options.background == 'string' ) {
    var children = elem.querySelectorAll( this.options.background );
    for ( i=0; i < children.length; i++ ) {
      var child = children[i];
      this.addElementBackgroundImages( child );
    }
  }
};

var elementNodeTypes = {
  1: true,
  9: true,
  11: true
};

ImagesLoaded.prototype.addElementBackgroundImages = function( elem ) {
  var style = getComputedStyle( elem );
  if ( !style ) {
    // Firefox returns null if in a hidden iframe https://bugzil.la/548397
    return;
  }
  // get url inside url("...")
  var reURL = /url\((['"])?(.*?)\1\)/gi;
  var matches = reURL.exec( style.backgroundImage );
  while ( matches !== null ) {
    var url = matches && matches[2];
    if ( url ) {
      this.addBackground( url, elem );
    }
    matches = reURL.exec( style.backgroundImage );
  }
};

/**
 * @param {Image} img
 */
ImagesLoaded.prototype.addImage = function( img ) {
  var loadingImage = new LoadingImage( img );
  this.images.push( loadingImage );
};

ImagesLoaded.prototype.addBackground = function( url, elem ) {
  var background = new Background( url, elem );
  this.images.push( background );
};

ImagesLoaded.prototype.check = function() {
  var _this = this;
  this.progressedCount = 0;
  this.hasAnyBroken = false;
  // complete if no images
  if ( !this.images.length ) {
    this.complete();
    return;
  }

  function onProgress( image, elem, message ) {
    // HACK - Chrome triggers event before object properties have changed. #83
    setTimeout( function() {
      _this.progress( image, elem, message );
    });
  }

  this.images.forEach( function( loadingImage ) {
    loadingImage.once( 'progress', onProgress );
    loadingImage.check();
  });
};

ImagesLoaded.prototype.progress = function( image, elem, message ) {
  this.progressedCount++;
  this.hasAnyBroken = this.hasAnyBroken || !image.isLoaded;
  // progress event
  this.emitEvent( 'progress', [ this, image, elem ] );
  if ( this.jqDeferred && this.jqDeferred.notify ) {
    this.jqDeferred.notify( this, image );
  }
  // check if completed
  if ( this.progressedCount == this.images.length ) {
    this.complete();
  }

  if ( this.options.debug && console ) {
    console.log( 'progress: ' + message, image, elem );
  }
};

ImagesLoaded.prototype.complete = function() {
  var eventName = this.hasAnyBroken ? 'fail' : 'done';
  this.isComplete = true;
  this.emitEvent( eventName, [ this ] );
  this.emitEvent( 'always', [ this ] );
  if ( this.jqDeferred ) {
    var jqMethod = this.hasAnyBroken ? 'reject' : 'resolve';
    this.jqDeferred[ jqMethod ]( this );
  }
};

// --------------------------  -------------------------- //

function LoadingImage( img ) {
  this.img = img;
}

LoadingImage.prototype = Object.create( EvEmitter.prototype );

LoadingImage.prototype.check = function() {
  // If complete is true and browser supports natural sizes,
  // try to check for image status manually.
  var isComplete = this.getIsImageComplete();
  if ( isComplete ) {
    // report based on naturalWidth
    this.confirm( this.img.naturalWidth !== 0, 'naturalWidth' );
    return;
  }

  // If none of the checks above matched, simulate loading on detached element.
  this.proxyImage = new Image();
  this.proxyImage.addEventListener( 'load', this );
  this.proxyImage.addEventListener( 'error', this );
  // bind to image as well for Firefox. #191
  this.img.addEventListener( 'load', this );
  this.img.addEventListener( 'error', this );
  this.proxyImage.src = this.img.src;
};

LoadingImage.prototype.getIsImageComplete = function() {
  // check for non-zero, non-undefined naturalWidth
  // fixes Safari+InfiniteScroll+Masonry bug infinite-scroll#671
  return this.img.complete && this.img.naturalWidth;
};

LoadingImage.prototype.confirm = function( isLoaded, message ) {
  this.isLoaded = isLoaded;
  this.emitEvent( 'progress', [ this, this.img, message ] );
};

// ----- events ----- //

// trigger specified handler for event type
LoadingImage.prototype.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

LoadingImage.prototype.onload = function() {
  this.confirm( true, 'onload' );
  this.unbindEvents();
};

LoadingImage.prototype.onerror = function() {
  this.confirm( false, 'onerror' );
  this.unbindEvents();
};

LoadingImage.prototype.unbindEvents = function() {
  this.proxyImage.removeEventListener( 'load', this );
  this.proxyImage.removeEventListener( 'error', this );
  this.img.removeEventListener( 'load', this );
  this.img.removeEventListener( 'error', this );
};

// -------------------------- Background -------------------------- //

function Background( url, element ) {
  this.url = url;
  this.element = element;
  this.img = new Image();
}

// inherit LoadingImage prototype
Background.prototype = Object.create( LoadingImage.prototype );

Background.prototype.check = function() {
  this.img.addEventListener( 'load', this );
  this.img.addEventListener( 'error', this );
  this.img.src = this.url;
  // check if image is already complete
  var isComplete = this.getIsImageComplete();
  if ( isComplete ) {
    this.confirm( this.img.naturalWidth !== 0, 'naturalWidth' );
    this.unbindEvents();
  }
};

Background.prototype.unbindEvents = function() {
  this.img.removeEventListener( 'load', this );
  this.img.removeEventListener( 'error', this );
};

Background.prototype.confirm = function( isLoaded, message ) {
  this.isLoaded = isLoaded;
  this.emitEvent( 'progress', [ this, this.element, message ] );
};

// -------------------------- jQuery -------------------------- //

ImagesLoaded.makeJQueryPlugin = function( jQuery ) {
  jQuery = jQuery || window.jQuery;
  if ( !jQuery ) {
    return;
  }
  // set local variable
  $ = jQuery;
  // $().imagesLoaded()
  $.fn.imagesLoaded = function( options, callback ) {
    var instance = new ImagesLoaded( this, options, callback );
    return instance.jqDeferred.promise( $(this) );
  };
};
// try making plugin
ImagesLoaded.makeJQueryPlugin();

// --------------------------  -------------------------- //

return ImagesLoaded;

});

/*!
 * Flickity imagesLoaded v2.0.0
 * enables imagesLoaded option for Flickity
 */

/*jshint browser: true, strict: true, undef: true, unused: true */

( function( window, factory ) {
  // universal module definition
  /*jshint strict: false */ /*globals define, module, require */
  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( [
      'flickity/js/index',
      'imagesloaded/imagesloaded'
    ], function( Flickity, imagesLoaded ) {
      return factory( window, Flickity, imagesLoaded );
    });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('flickity'),
      require('imagesloaded')
    );
  } else {
    // browser global
    window.Flickity = factory(
      window,
      window.Flickity,
      window.imagesLoaded
    );
  }

}( window, function factory( window, Flickity, imagesLoaded ) {
'use strict';

Flickity.createMethods.push('_createImagesLoaded');

var proto = Flickity.prototype;

proto._createImagesLoaded = function() {
  this.on( 'activate', this.imagesLoaded );
};

proto.imagesLoaded = function() {
  if ( !this.options.imagesLoaded ) {
    return;
  }
  var _this = this;
  function onImagesLoadedProgress( instance, image ) {
    var cell = _this.getParentCell( image.img );
    _this.cellSizeChange( cell && cell.element );
    if ( !_this.options.freeScroll ) {
      _this.positionSliderAtSelected();
    }
  }
  imagesLoaded( this.slider ).on( 'progress', onImagesLoadedProgress );
};

return Flickity;

}));
(function($){"use strict";function NectarTestimonialSlider(el,type,resizeVideoToCover,fullWidthContentColumns){this.el=el;this.type=type;this.resizeVideoToCover=resizeVideoToCover;this.fullWidthContentColumns=fullWidthContentColumns;this.flickityEl=null;this.createTestimonialControls()}
NectarTestimonialSlider.prototype.createTestimonialControls=function(){var $frontEndEditorTestimonialDiv=($('body.vc_editor').length>0)?'> div':'blockquote';var $that,slide_interval,objectStore;if(this.type!='multiple_visible'&&this.type!='multiple_visible_minimal'){this.el.animate({'opacity':'1'},800);if(this.el.find('blockquote').length>1){this.el.find('.controls, .testimonial-next-prev').remove();this.el.append('<div class="controls"><ul></ul></div>');var slideNum=this.el.find('blockquote').length;$that=this.el;for(var i=0;i<slideNum;i++){if(!this.el.is('[data-style="minimal"]')){$that.find('.controls ul').append('<li><span class="pagination-switch"></span></li>')}else{$that.find('.controls ul').append('<li>'+(i+1)+'</li>')}}
if(this.el.is('[data-style="minimal"]')){this.el.append('<div class="testimonial-next-prev"><a href="#" class="prev fa fa-angle-left"></a><a href="#" class="next fa fa-angle-right"></a></div>');this.el.find('.testimonial-next-prev a').on('click',this.minimalNextPrevSelect);if(this.el.find('.active').length==0){this.el.find('.slides '+$frontEndEditorTestimonialDiv+':first-child').addClass('active').css({'opacity':'1','transform':'translateX(0px)'}).css('z-index','20');if(!this.el.hasClass('disable-height-animation')){this.el.find('.slides').css({'height':this.el.find('.slides '+$frontEndEditorTestimonialDiv+':first-child').height()+40+'px'})}}
if(this.el.attr('data-autorotate').length>0){$that=this.el;slide_interval=(parseInt(this.el.attr('data-autorotate'))<100)?4000:parseInt(this.el.attr('data-autorotate'));objectStore=this;var $rotate=setInterval(function(){objectStore.testimonialRotate($that)},slide_interval)}
this.el.find('.testimonial-next-prev a').on('click',function(e){if(typeof e.clientX!='undefined'){clearInterval($rotate)}});this.el.find('.controls ul').wrap('<div class="control-wrap" />');this.el.find('.controls ul').css('width',((this.el.find('.controls ul li').length*20)+1)+'px');this.el.find('.controls').append('<span class="out-of">/</span><span class="total">'+this.el.find('blockquote').length+'</span>');this.el.swipe({swipeLeft:function(e){$that.find('.testimonial-next-prev .next').trigger('click');e.stopImmediatePropagation();clearInterval($rotate);return!1},swipeRight:function(e){$that.find('.testimonial-next-prev .prev').trigger('click');e.stopImmediatePropagation();clearInterval($rotate);return!1}})}
if(!this.el.is('[data-style="minimal"]')){this.el.find('.controls ul li').on('click',this.defaultPaginationSelect);this.el.find('.controls ul li').first().trigger('click');if(this.el.attr('data-autorotate').length>0){slide_interval=(parseInt(this.el.attr('data-autorotate'))<100)?4000:parseInt(this.el.attr('data-autorotate'));$that=this.el;objectStore=this;var $rotate=setInterval(function(){objectStore.testimonialRotate($that)},slide_interval)}
this.el.find('.controls li').on('click',function(e){if(typeof e.clientX!='undefined')clearInterval($rotate)});this.el.swipe({swipeLeft:function(e){$that.find('.controls ul li span.active').parent().next('li').find('span').trigger('click');e.stopImmediatePropagation();clearInterval($rotate);return!1},swipeRight:function(e){$that.find('.controls ul li span.active').parent().prev('li').find('span').trigger('click');e.stopImmediatePropagation();clearInterval($rotate);return!1}})}}else if(this.el.find('.controls').length==0){var currentHeight=this.el.find('.slides blockquote').height();this.el.find('.slides blockquote').css({'opacity':'0','transform':'translateX(-25px)','z-index':'1'});this.el.find('.slides blockquote').css({'opacity':'1','transform':'translateX(0px)'}).css('z-index','20');this.el.find('.slides').stop(!0,!0).animate({'height':currentHeight+20+'px'},450,'easeOutCubic')}}
if(this.type=='multiple_visible'||this.type=='multiple_visible_minimal'){objectStore=this;$that=this.el;var $element=$that;var $autoplay=($that.attr('data-autorotate').length>1&&parseInt($that.attr('data-autorotate'))>100)?parseInt($that.attr('data-autorotate')):!1;if($that.find('img').length==0){$element=$('body')}
if(this.el.attr('data-style')!='multiple_visible_minimal'){this.el.find('blockquote').each(function(){$(this).find('.image-icon').insertAfter($(this).find('p'))})}else{if(this.el.find('blockquote').length>4){this.el.addClass('has-alf')}}
var $testimonialGroupCells=(this.el.attr('data-style')=='multiple_visible_minimal')?!0:!1;var $frontEndEditorDrag=($('body.vc_editor').length>0)?false:!0;var $frontEndEditorPause=($('body.vc_editor').length>0)?true:!1;this.flickityEl=$that.find('.slides').flickity({contain:!0,draggable:$frontEndEditorDrag,groupCells:$testimonialGroupCells,lazyLoad:!1,imagesLoaded:!0,percentPosition:!0,prevNextButtons:!1,pageDots:!0,resize:!0,setGallerySize:!0,wrapAround:!0,autoPlay:$autoplay,pauseAutoPlayOnHover:$frontEndEditorPause,accessibility:!1});if(this.flickityEl.find('.vc_element.is-selected > blockquote').length>0){this.flickityEl.find('.vc_element.is-selected > blockquote').addClass('is-selected');this.flickityEl.on('select.flickity',function(){objectStore.flickityEl.find('.vc_element > blockquote').removeClass('is-selected');objectStore.flickityEl.find('.vc_element.is-selected > blockquote').addClass('is-selected')})}
$that.css('opacity','1')}
var testimonialObj=this;$('body').on('click','.testimonial_slider:not([data-style*="multiple_visible"]):not([data-style="minimal"]) .controls li, .testimonial_slider[data-style="minimal"] .testimonial-next-prev a',function(){testimonialObj.resizeVideoToCover();return!1})};NectarTestimonialSlider.prototype.defaultPaginationSelect=function(clicked){var $target=$(clicked.currentTarget);if($target.find('span').hasClass('active')){return!1}
var $frontEndEditorTestimonialDiv=($('body.vc_editor').length>0)?'> div':'blockquote';var $index=$target.index();var currentHeight=$target.parents('.testimonial_slider').find('.slides blockquote').eq($index).height();$target.parents('.testimonial_slider').find('li span').removeClass('active');$target.find('span').addClass('active');$target.parents('.testimonial_slider').find('.slides '+$frontEndEditorTestimonialDiv).addClass('no-trans');$target.parents('.testimonial_slider').find('.slides '+$frontEndEditorTestimonialDiv).css({'opacity':'0','transform':'translateX(-25px)','z-index':'1'});$target.parents('.testimonial_slider').find('.slides '+$frontEndEditorTestimonialDiv).eq($index).removeClass('no-trans').css({'opacity':'1','transform':'translateX(0px)'}).css('z-index','20');$target.parents('.testimonial_slider:not(.disable-height-animation)').find('.slides').stop(!0,!0).animate({'height':currentHeight+40+'px'},450,'easeOutCubic')};NectarTestimonialSlider.prototype.minimalNextPrevSelect=function(clicked){var $target=$(clicked.currentTarget);var $frontEndEditorTestimonialDiv=($('body.vc_editor').length>0)?'> div':'blockquote';var $index=$target.parents('.testimonial_slider').find('.slides '+$frontEndEditorTestimonialDiv+'.active').index();var $actualIndex=$index;var currentHeight;$target.parents('.testimonial_slider').find('.slides '+$frontEndEditorTestimonialDiv).addClass('no-trans');$target.parents('.testimonial_slider').find('.slides '+$frontEndEditorTestimonialDiv).css({'opacity':'0','transform':'translateX(-25px)','z-index':'1'});$target.parents('.testimonial_slider').find('.slides '+$frontEndEditorTestimonialDiv).eq($index).removeClass('active');if($target.hasClass('next')){if($index+1>=$target.parents('.testimonial_slider').find('.slides '+$frontEndEditorTestimonialDiv).length){$actualIndex=0}else{$actualIndex=$index+1}
currentHeight=$target.parents('.testimonial_slider').find('.slides '+$frontEndEditorTestimonialDiv).eq($actualIndex).height();$target.parents('.testimonial_slider').find('.slides '+$frontEndEditorTestimonialDiv).eq($actualIndex).addClass('active').removeClass('no-trans').css({'opacity':'1','transform':'translateX(0px)'}).css('z-index','20');$target.parents('.testimonial_slider').find('.control-wrap ul').css({'transform':'translateX(-'+(20*$actualIndex)+'px)'})}else{if($index-1==-1){$actualIndex=$target.parents('.testimonial_slider').find('.slides '+$frontEndEditorTestimonialDiv).length-1}else{$actualIndex=$index-1}
currentHeight=$target.parents('.testimonial_slider').find('.slides '+$frontEndEditorTestimonialDiv).eq($index-1).height();$target.parents('.testimonial_slider').find('.slides '+$frontEndEditorTestimonialDiv).eq($index-1).addClass('active').removeClass('no-trans').css({'opacity':'1','transform':'translateX(0px)'}).css('z-index','20');$target.parents('.testimonial_slider').find('.control-wrap ul').css({'transform':'translateX(-'+(20*$actualIndex)+'px)'})}
$target.parents('.testimonial_slider:not(.disable-height-animation)').find('.slides').stop(!0,!0).animate({'height':currentHeight+40+'px'},450,'easeOutCubic');return!1};NectarTestimonialSlider.prototype.testimonialRotate=function(){var $testimonialLength=this.el.find('li').length;var $currentTestimonial=this.el.find('.pagination-switch.active').parent().index();if(this.el.parents('.toggle').length>0&&this.el.parents('.toggle').hasClass('open')){if(!this.el.is('[data-style="minimal"]')){if($currentTestimonial+1==$testimonialLength){this.el.find('ul li:first-child').trigger('click')}else{this.el.find('.pagination-switch.active').parent().next('li').trigger('click')}}else{this.el.find('.testimonial-next-prev .next').trigger('click')}}else{if(!this.el.is('[data-style="minimal"]')){if($currentTestimonial+1==$testimonialLength){this.el.find('ul li:first-child').trigger('click')}else{this.el.find('.pagination-switch.active').parent().next('li').trigger('click')}}else{this.el.find('.testimonial-next-prev .next').trigger('click')}}};NectarTestimonialSlider.prototype.testimonialHeightResize=function(){if(!this.el.is('.disable-height-animation')&&!this.el.is('[data-style*="multiple_visible"]')){var $frontEndEditorTestimonialDiv=($('body.vc_editor').length>0)?'.slides > div':'.slides blockquote';var $index;if(this.el.is('[data-style="minimal"]')){$index=this.el.find($frontEndEditorTestimonialDiv+'.active').index()}else{$index=this.el.find('.controls ul li span.active').parent().index()}
var currentHeight=this.el.find($frontEndEditorTestimonialDiv).eq($index).height();this.el.find('.slides').stop(!0,!0).css({'height':currentHeight+40+'px'})}};NectarTestimonialSlider.prototype.testimonialSliderHeight=function(){if(this.el.is('.disable-height-animation')&&!this.el.is('[data-style*="multiple_visible"]')){var $tallestQuote=0;this.el.find('blockquote').each(function(){($(this).height()>$tallestQuote)?$tallestQuote=$(this).height():$tallestQuote=$tallestQuote});if($tallestQuote==0){$tallestQuote=100}
this.el.find('.slides').css('height',$tallestQuote+40+'px');this.el.animate({'opacity':'1'});this.fullWidthContentColumns()}};NectarTestimonialSlider.prototype.testimonialSliderHeightMinimalMult=function(){if(this.type=='multiple_visible_minimal'){var $tallestQuote=0;this.el.find('blockquote > .inner p').css('height','auto');this.el.find('blockquote > .inner p').each(function(){($(this).height()>$tallestQuote)?$tallestQuote=$(this).height():$tallestQuote=$tallestQuote});if($tallestQuote==0){$tallestQuote=200}
this.el.find('blockquote > .inner p').css('height',$tallestQuote+'px')}};window.NectarTestimonialSlider=NectarTestimonialSlider}(jQuery));
/* Touch swipe */
(function(d){var m="left",l="right",c="up",s="down",b="in",t="out",j="none",o="auto",i="swipe",p="pinch",u="tap",x="horizontal",q="vertical",g="all",e="start",h="move",f="end",n="cancel",a="ontouchstart" in window,v="TouchSwipe";var k={fingers:1,threshold:75,cancelThreshold:25,pinchThreshold:20,maxTimeThreshold:null,fingerReleaseThreshold:250,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,pinchIn:null,pinchOut:null,pinchStatus:null,click:null,tap:null,triggerOnTouchEnd:true,triggerOnTouchLeave:false,allowPageScroll:"auto",fallbackToMouseEvents:true,excludedElements:"button, input, select, textarea, a, .noSwipe"};d.fn.swipe=function(A){var z=d(this),y=z.data(v);if(y&&typeof A==="string"){if(y[A]){return y[A].apply(this,Array.prototype.slice.call(arguments,1))}else{d.error("Method "+A+" does not exist on jQuery.swipe")}}else{if(!y&&(typeof A==="object"||!A)){return r.apply(this,arguments)}}return z};d.fn.swipe.defaults=k;d.fn.swipe.phases={PHASE_START:e,PHASE_MOVE:h,PHASE_END:f,PHASE_CANCEL:n};d.fn.swipe.directions={LEFT:m,RIGHT:l,UP:c,DOWN:s,IN:b,OUT:t};d.fn.swipe.pageScroll={NONE:j,HORIZONTAL:x,VERTICAL:q,AUTO:o};d.fn.swipe.fingers={ONE:1,TWO:2,THREE:3,ALL:g};function r(y){if(y&&(y.allowPageScroll===undefined&&(y.swipe!==undefined||y.swipeStatus!==undefined))){y.allowPageScroll=j}if(y.click!==undefined&&y.tap===undefined){y.tap=y.click}if(!y){y={}}y=d.extend({},d.fn.swipe.defaults,y);return this.each(function(){var A=d(this);var z=A.data(v);if(!z){z=new w(this,y);A.data(v,z)}})}function w(S,ag){var aJ=(a||!ag.fallbackToMouseEvents),az=aJ?"touchstart":"mousedown",U=aJ?"touchmove":"mousemove",av=aJ?"touchend":"mouseup",D=aJ?null:"mouseleave",R="touchcancel";var ad=0,N=null,ah=0,aF=0,A=0,aj=1,aA=0,aN=0,Z=null;var H=d(S);var O="start";var aI=0;var ai=null;var I=0,Y=0,aD=0,aP=0;try{H.bind(az,at);H.bind(R,L)}catch(aG){d.error("events not supported "+az+","+R+" on jQuery.swipe")}this.enable=function(){H.bind(az,at);H.bind(R,L);return H};this.disable=function(){Q();return H};this.destroy=function(){Q();H.data(v,null);return H};this.option=function(aR,aQ){if(ag[aR]!==undefined){if(aQ===undefined){return ag[aR]}else{ag[aR]=aQ}}else{d.error("Option "+aR+" does not exist on jQuery.swipe.options")}};function at(aS){if(X()){return}if(d(aS.target).closest(ag.excludedElements,H).length>0){return}var aT=aS.originalEvent?aS.originalEvent:aS;var aR,aQ=a?aT.touches[0]:aT;O=e;if(a){aI=aT.touches.length}else{aS.preventDefault()}ad=0;N=null;aN=null;ah=0;aF=0;A=0;aj=1;aA=0;ai=T();Z=aE();z();if(!a||(aI===ag.fingers||ag.fingers===g)||ap()){aO(0,aQ);I=B();if(aI==2){aO(1,aT.touches[1]);aF=A=aa(ai[0].start,ai[1].start)}if(ag.swipeStatus||ag.pinchStatus){aR=aH(aT,O)}}else{aR=false}if(aR===false){O=n;aH(aT,O);return aR}else{ak(true)}}function P(aT){var aW=aT.originalEvent?aT.originalEvent:aT;if(O===f||O===n||af()){return}var aS,aR=a?aW.touches[0]:aW;var aU=V(aR);Y=B();if(a){aI=aW.touches.length}O=h;if(aI==2){if(aF==0){aO(1,aW.touches[1]);aF=A=aa(ai[0].start,ai[1].start)}else{V(aW.touches[1]);A=aa(ai[0].end,ai[1].end);aN=ao(ai[0].end,ai[1].end)}aj=y(aF,A);aA=Math.abs(aF-A)}if((aI===ag.fingers||ag.fingers===g)||!a||ap()){N=ar(aU.start,aU.end);C(aT,N);ad=G(aU.start,aU.end);ah=K();aK(N,ad);if(ag.swipeStatus||ag.pinchStatus){aS=aH(aW,O)}if(!ag.triggerOnTouchEnd||ag.triggerOnTouchLeave){var aQ=true;if(ag.triggerOnTouchLeave){var aV=au(this);aQ=aC(aU.end,aV)}if(!ag.triggerOnTouchEnd&&aQ){O=aM(h)}else{if(ag.triggerOnTouchLeave&&!aQ){O=aM(f)}}if(O==n||O==f){aH(aW,O)}}}else{O=n;aH(aW,O)}if(aS===false){O=n;aH(aW,O)}}function ab(aS){var aU=aS.originalEvent;if(a){if(aU.touches.length>0){aw();return true}}if(af()){aI=aP}aS.preventDefault();Y=B();if(ag.triggerOnTouchEnd||(ag.triggerOnTouchEnd==false&&O===h)){O=f;var aR=((aI===ag.fingers||ag.fingers===g)||!a);var aQ=ai[0].end.x!==0;var aT=aR&&aQ&&(an()||aB());if(aT){aH(aU,O)}else{O=n;aH(aU,O)}}else{if(!ag.triggerOnTouchEnd&&ay()){O=f;am(aU,O,u)}else{if(O===h){O=n;aH(aU,O)}}}ak(false)}function L(){aI=0;Y=0;I=0;aF=0;A=0;aj=1;z();ak(false)}function W(aQ){var aR=aQ.originalEvent;if(ag.triggerOnTouchLeave){O=aM(f);aH(aR,O)}}function Q(){H.unbind(az,at);H.unbind(R,L);H.unbind(U,P);H.unbind(av,ab);if(D){H.unbind(D,W)}ak(false)}function aM(aT){var aS=aT;var aR=aq();var aQ=ae();if(!aR){aS=n}else{if(aQ&&aT==h&&(!ag.triggerOnTouchEnd||ag.triggerOnTouchLeave)){aS=f}else{if(!aQ&&aT==f&&ag.triggerOnTouchLeave){aS=n}}}return aS}function aH(aS,aQ){var aR=undefined;if(ac()){aR=am(aS,aQ,i)}if(ap()&&aR!==false){aR=am(aS,aQ,p)}if(ay()&&aR!==false){aR=am(aS,aQ,u)}if(aQ===n){L(aS)}if(aQ===f){if(a){if(aS.touches.length==0){L(aS)}}else{L(aS)}}return aR}function am(aT,aQ,aS){var aR=undefined;if(aS==i){H.trigger("swipeStatus",[aQ,N||null,ad||0,ah||0,aI]);if(ag.swipeStatus){aR=ag.swipeStatus.call(H,aT,aQ,N||null,ad||0,ah||0,aI);if(aR===false){return false}}if(aQ==f&&aB()){H.trigger("swipe",[N,ad,ah,aI]);if(ag.swipe){aR=ag.swipe.call(H,aT,N,ad,ah,aI);if(aR===false){return false}}switch(N){case m:H.trigger("swipeLeft",[N,ad,ah,aI]);if(ag.swipeLeft){aR=ag.swipeLeft.call(H,aT,N,ad,ah,aI)}break;case l:H.trigger("swipeRight",[N,ad,ah,aI]);if(ag.swipeRight){aR=ag.swipeRight.call(H,aT,N,ad,ah,aI)}break;case c:H.trigger("swipeUp",[N,ad,ah,aI]);if(ag.swipeUp){aR=ag.swipeUp.call(H,aT,N,ad,ah,aI)}break;case s:H.trigger("swipeDown",[N,ad,ah,aI]);if(ag.swipeDown){aR=ag.swipeDown.call(H,aT,N,ad,ah,aI)}break}}}if(aS==p){H.trigger("pinchStatus",[aQ,aN||null,aA||0,ah||0,aI,aj]);if(ag.pinchStatus){aR=ag.pinchStatus.call(H,aT,aQ,aN||null,aA||0,ah||0,aI,aj);if(aR===false){return false}}if(aQ==f&&an()){switch(aN){case b:H.trigger("pinchIn",[aN||null,aA||0,ah||0,aI,aj]);if(ag.pinchIn){aR=ag.pinchIn.call(H,aT,aN||null,aA||0,ah||0,aI,aj)}break;case t:H.trigger("pinchOut",[aN||null,aA||0,ah||0,aI,aj]);if(ag.pinchOut){aR=ag.pinchOut.call(H,aT,aN||null,aA||0,ah||0,aI,aj)}break}}}if(aS==u){if(aQ===n||aQ===f){if((aI===1||!a)&&(isNaN(ad)||ad===0)){H.trigger("tap",[aT.target]);if(ag.tap){aR=ag.tap.call(H,aT,aT.target)}}}}return aR}function ae(){var aQ=true;if(ag.threshold!==null){aQ=ad>=ag.threshold}if(aQ&&ag.cancelThreshold!==null){aQ=(M(N)-ad)<ag.cancelThreshold}return aQ}function al(){if(ag.pinchThreshold!==null){return aA>=ag.pinchThreshold}return true}function aq(){var aQ;if(ag.maxTimeThreshold){if(ah>=ag.maxTimeThreshold){aQ=false}else{aQ=true}}else{aQ=true}return aQ}function C(aQ,aR){if(ag.allowPageScroll===j||ap()){aQ.preventDefault()}else{var aS=ag.allowPageScroll===o;switch(aR){case m:if((ag.swipeLeft&&aS)||(!aS&&ag.allowPageScroll!=x)){aQ.preventDefault()}break;case l:if((ag.swipeRight&&aS)||(!aS&&ag.allowPageScroll!=x)){aQ.preventDefault()}break;case c:if((ag.swipeUp&&aS)||(!aS&&ag.allowPageScroll!=q)){aQ.preventDefault()}break;case s:if((ag.swipeDown&&aS)||(!aS&&ag.allowPageScroll!=q)){aQ.preventDefault()}break}}}function an(){return al()}function ap(){return !!(ag.pinchStatus||ag.pinchIn||ag.pinchOut)}function ax(){return !!(an()&&ap())}function aB(){var aQ=aq();var aS=ae();var aR=aS&&aQ;return aR}function ac(){return !!(ag.swipe||ag.swipeStatus||ag.swipeLeft||ag.swipeRight||ag.swipeUp||ag.swipeDown)}function E(){return !!(aB()&&ac())}function ay(){return !!(ag.tap)}function aw(){aD=B();aP=event.touches.length+1}function z(){aD=0;aP=0}function af(){var aQ=false;if(aD){var aR=B()-aD;if(aR<=ag.fingerReleaseThreshold){aQ=true}}return aQ}function X(){return !!(H.data(v+"_intouch")===true)}function ak(aQ){if(aQ===true){H.bind(U,P);H.bind(av,ab);if(D){H.bind(D,W)}}else{H.unbind(U,P,false);H.unbind(av,ab,false);if(D){H.unbind(D,W,false)}}H.data(v+"_intouch",aQ===true)}function aO(aR,aQ){var aS=aQ.identifier!==undefined?aQ.identifier:0;ai[aR].identifier=aS;ai[aR].start.x=ai[aR].end.x=aQ.pageX||aQ.clientX;ai[aR].start.y=ai[aR].end.y=aQ.pageY||aQ.clientY;return ai[aR]}function V(aQ){var aS=aQ.identifier!==undefined?aQ.identifier:0;var aR=J(aS);aR.end.x=aQ.pageX||aQ.clientX;aR.end.y=aQ.pageY||aQ.clientY;return aR}function J(aR){for(var aQ=0;aQ<ai.length;aQ++){if(ai[aQ].identifier==aR){return ai[aQ]}}}function T(){var aQ=[];for(var aR=0;aR<=5;aR++){aQ.push({start:{x:0,y:0},end:{x:0,y:0},identifier:0})}return aQ}function aK(aQ,aR){aR=Math.max(aR,M(aQ));Z[aQ].distance=aR}function M(aQ){return Z[aQ].distance}function aE(){var aQ={};aQ[m]=aL(m);aQ[l]=aL(l);aQ[c]=aL(c);aQ[s]=aL(s);return aQ}function aL(aQ){return{direction:aQ,distance:0}}function K(){return Y-I}function aa(aT,aS){var aR=Math.abs(aT.x-aS.x);var aQ=Math.abs(aT.y-aS.y);return Math.round(Math.sqrt(aR*aR+aQ*aQ))}function y(aQ,aR){var aS=(aR/aQ)*1;return aS.toFixed(2)}function ao(){if(aj<1){return t}else{return b}}function G(aR,aQ){return Math.round(Math.sqrt(Math.pow(aQ.x-aR.x,2)+Math.pow(aQ.y-aR.y,2)))}function F(aT,aR){var aQ=aT.x-aR.x;var aV=aR.y-aT.y;var aS=Math.atan2(aV,aQ);var aU=Math.round(aS*180/Math.PI);if(aU<0){aU=360-Math.abs(aU)}return aU}function ar(aR,aQ){var aS=F(aR,aQ);if((aS<=45)&&(aS>=0)){return m}else{if((aS<=360)&&(aS>=315)){return m}else{if((aS>=135)&&(aS<=225)){return l}else{if((aS>45)&&(aS<135)){return s}else{return c}}}}}function B(){var aQ=new Date();return aQ.getTime()}function au(aQ){aQ=d(aQ);var aS=aQ.offset();var aR={left:aS.left,right:aS.left+aQ.outerWidth(),top:aS.top,bottom:aS.top+aQ.outerHeight()};return aR}function aC(aQ,aR){return(aQ.x>aR.left&&aQ.x<aR.right&&aQ.y>aR.top&&aQ.y<aR.bottom)}}})(jQuery);
