(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"+wdc":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=null,a=!1,r=3,i=-1,l=-1,s=!1,u=!1;function c(){if(!s){var e=o.expirationTime;u?x():u=!0,T(d,e)}}function p(){var e=o,t=o.next;if(o===t)o=null;else{var n=o.previous;o=n.next=t,t.previous=n}e.next=e.previous=null,n=e.callback,t=e.expirationTime,e=e.priorityLevel;var a=r,i=l;r=e,l=t;try{var s=n()}finally{r=a,l=i}if("function"===typeof s)if(s={callback:s,priorityLevel:e,expirationTime:t,next:null,previous:null},null===o)o=s.next=s.previous=s;else{n=null,e=o;do{if(e.expirationTime>=t){n=e;break}e=e.next}while(e!==o);null===n?n=o:n===o&&(o=s,c()),(t=n.previous).next=n.previous=s,s.next=n,s.previous=t}}function f(){if(-1===i&&null!==o&&1===o.priorityLevel){s=!0;try{do{p()}while(null!==o&&1===o.priorityLevel)}finally{s=!1,null!==o?c():u=!1}}}function d(e){s=!0;var n=a;a=e;try{if(e)for(;null!==o;){var r=t.unstable_now();if(!(o.expirationTime<=r))break;do{p()}while(null!==o&&o.expirationTime<=r)}else if(null!==o)do{p()}while(null!==o&&!_())}finally{s=!1,a=n,null!==o?c():u=!1,f()}}var m,h,v=Date,y="function"===typeof setTimeout?setTimeout:void 0,b="function"===typeof clearTimeout?clearTimeout:void 0,w="function"===typeof requestAnimationFrame?requestAnimationFrame:void 0,g="function"===typeof cancelAnimationFrame?cancelAnimationFrame:void 0;function M(e){m=w(function(t){b(h),e(t)}),h=y(function(){g(m),e(t.unstable_now())},100)}if("object"===typeof performance&&"function"===typeof performance.now){var E=performance;t.unstable_now=function(){return E.now()}}else t.unstable_now=function(){return v.now()};var T,x,_,D=null;if((D=window)&&D._schedMock){var k=D._schedMock;T=k[0],x=k[1],_=k[2],t.unstable_now=k[3]}else if("function"!==typeof MessageChannel){var X=null,N=function(e){if(null!==X)try{X(e)}finally{X=null}};T=function(e){null!==X?setTimeout(T,0,e):(X=e,setTimeout(N,0,!1))},x=function(){X=null},_=function(){return!1}}else{"undefined"!==typeof console&&("function"!==typeof w&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),"function"!==typeof g&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"));var j=null,C=!1,P=-1,O=!1,I=!1,L=0,S=33,A=33;_=function(){return L<=t.unstable_now()};var B=new MessageChannel,z=B.port2;B.port1.onmessage=function(){C=!1;var e=j,n=P;j=null,P=-1;var o=t.unstable_now(),a=!1;if(0>=L-o){if(!(-1!==n&&n<=o))return O||(O=!0,M(H)),j=e,void(P=n);a=!0}if(null!==e){I=!0;try{e(a)}finally{I=!1}}};var H=function(e){if(null!==j){M(H);var t=e-L+A;t<A&&S<A?(8>t&&(t=8),A=t<S?S:t):S=t,L=e+A,C||(C=!0,z.postMessage(void 0))}else O=!1};T=function(e,t){j=e,P=t,I||0>t?z.postMessage(void 0):O||(O=!0,M(H))},x=function(){j=null,C=!1,P=-1}}t.unstable_ImmediatePriority=1,t.unstable_UserBlockingPriority=2,t.unstable_NormalPriority=3,t.unstable_IdlePriority=5,t.unstable_LowPriority=4,t.unstable_runWithPriority=function(e,n){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var o=r,a=i;r=e,i=t.unstable_now();try{return n()}finally{r=o,i=a,f()}},t.unstable_next=function(e){switch(r){case 1:case 2:case 3:var n=3;break;default:n=r}var o=r,a=i;r=n,i=t.unstable_now();try{return e()}finally{r=o,i=a,f()}},t.unstable_scheduleCallback=function(e,n){var a=-1!==i?i:t.unstable_now();if("object"===typeof n&&null!==n&&"number"===typeof n.timeout)n=a+n.timeout;else switch(r){case 1:n=a+-1;break;case 2:n=a+250;break;case 5:n=a+1073741823;break;case 4:n=a+1e4;break;default:n=a+5e3}if(e={callback:e,priorityLevel:r,expirationTime:n,next:null,previous:null},null===o)o=e.next=e.previous=e,c();else{a=null;var l=o;do{if(l.expirationTime>n){a=l;break}l=l.next}while(l!==o);null===a?a=o:a===o&&(o=e,c()),(n=a.previous).next=a.previous=e,e.next=a,e.previous=n}return e},t.unstable_cancelCallback=function(e){var t=e.next;if(null!==t){if(t===e)o=null;else{e===o&&(o=t);var n=e.previous;n.next=t,t.previous=n}e.next=e.previous=null}},t.unstable_wrapCallback=function(e){var n=r;return function(){var o=r,a=i;r=n,i=t.unstable_now();try{return e.apply(this,arguments)}finally{r=o,i=a,f()}}},t.unstable_getCurrentPriorityLevel=function(){return r},t.unstable_shouldYield=function(){return!a&&(null!==o&&o.expirationTime<l||_())},t.unstable_continueExecution=function(){null!==o&&c()},t.unstable_pauseExecution=function(){},t.unstable_getFirstCallbackNode=function(){return o}},"4m2D":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n("q1tI"),r=l(a),i=l(n("HMs9"));function l(e){return e&&e.__esModule?e:{default:e}}var s=function(e){return e.displayName||e.name||"Component"};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){return function(n){function l(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(l.__proto__||Object.getPrototypeOf(l)).call(this));return e.displayName="LazyLoad"+s(t),e}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(l,a.Component),o(l,[{key:"render",value:function(){return r.default.createElement(i.default,e,r.default.createElement(t,this.props))}}]),l}()}}},HMs9:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.forceCheck=t.lazyload=void 0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n("q1tI"),r=d(a),i=d(n("i8i4")),l=d(n("17x9")),s=n("Seim"),u=d(n("tvXG")),c=d(n("PTkm")),p=d(n("uUxy")),f=d(n("4m2D"));function d(e){return e&&e.__esModule?e:{default:e}}var m=0,h=0,v="data-lazyload-listened",y=[],b=[],w=!1;try{var g=Object.defineProperty({},"passive",{get:function(){w=!0}});window.addEventListener("test",null,g)}catch(k){}var M=!!w&&{capture:!1,passive:!0},E=function(e){var t=i.default.findDOMNode(e);if(t){var n=(0,u.default)(t);(e.props.overflow&&n!==t.ownerDocument&&n!==document&&n!==document.documentElement?function(e,t){var n=i.default.findDOMNode(e),o=void 0,a=void 0;try{var r=t.getBoundingClientRect();o=r.top,a=r.height}catch(k){o=m,a=h}var l=window.innerHeight||document.documentElement.clientHeight,s=Math.max(o,0),u=Math.min(l,o+a)-s,c=void 0,p=void 0;try{var f=n.getBoundingClientRect();c=f.top,p=f.height}catch(k){c=m,p=h}var d=c-s,v=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return d-v[0]<=u&&d+p+v[1]>=0}(e,n):function(e){var t=i.default.findDOMNode(e);if(!(t.offsetWidth||t.offsetHeight||t.getClientRects().length))return!1;var n=void 0,o=void 0;try{var a=t.getBoundingClientRect();n=a.top,o=a.height}catch(k){n=m,o=h}var r=window.innerHeight||document.documentElement.clientHeight,l=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return n-l[0]<=r&&n+o+l[1]>=0}(e))?e.visible||(e.props.once&&b.push(e),e.visible=!0,e.forceUpdate()):e.props.once&&e.visible||(e.visible=!1,e.props.unmountIfInvisible&&e.forceUpdate())}},T=function(){for(var e=0;e<y.length;++e){var t=y[e];E(t)}b.forEach(function(e){var t=y.indexOf(e);-1!==t&&y.splice(t,1)}),b=[]},x=void 0,_=null,D=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.visible=!1,n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),o(t,[{key:"componentDidMount",value:function(){var e=!1;if(void 0!==this.props.debounce&&"throttle"===x?(console.warn("[react-lazyload] Previous delay function is `throttle`, now switching to `debounce`, try setting them unanimously"),e=!0):"debounce"===x&&void 0===this.props.debounce&&(console.warn("[react-lazyload] Previous delay function is `debounce`, now switching to `throttle`, try setting them unanimously"),e=!0),e&&((0,s.off)(window,"scroll",_,M),(0,s.off)(window,"resize",_,M),_=null),_||(void 0!==this.props.debounce?(_=(0,c.default)(T,"number"===typeof this.props.debounce?this.props.debounce:300),x="debounce"):void 0!==this.props.throttle?(_=(0,p.default)(T,"number"===typeof this.props.throttle?this.props.throttle:300),x="throttle"):_=T),this.props.overflow){var t=(0,u.default)(i.default.findDOMNode(this));if(t&&"function"===typeof t.getAttribute){var n=+t.getAttribute(v)+1;1===n&&t.addEventListener("scroll",_,M),t.setAttribute(v,n)}}else if(0===y.length||e){var o=this.props,a=o.scroll,r=o.resize;a&&(0,s.on)(window,"scroll",_,M),r&&(0,s.on)(window,"resize",_,M)}y.push(this),E(this)}},{key:"shouldComponentUpdate",value:function(){return this.visible}},{key:"componentWillUnmount",value:function(){if(this.props.overflow){var e=(0,u.default)(i.default.findDOMNode(this));if(e&&"function"===typeof e.getAttribute){var t=+e.getAttribute(v)-1;0===t?(e.removeEventListener("scroll",_,M),e.removeAttribute(v)):e.setAttribute(v,t)}}var n=y.indexOf(this);-1!==n&&y.splice(n,1),0===y.length&&((0,s.off)(window,"resize",_,M),(0,s.off)(window,"scroll",_,M))}},{key:"render",value:function(){return this.visible?this.props.children:this.props.placeholder?this.props.placeholder:r.default.createElement("div",{style:{height:this.props.height},className:"lazyload-placeholder"})}}]),t}();D.propTypes={once:l.default.bool,height:l.default.oneOfType([l.default.number,l.default.string]),offset:l.default.oneOfType([l.default.number,l.default.arrayOf(l.default.number)]),overflow:l.default.bool,resize:l.default.bool,scroll:l.default.bool,children:l.default.node,throttle:l.default.oneOfType([l.default.number,l.default.bool]),debounce:l.default.oneOfType([l.default.number,l.default.bool]),placeholder:l.default.node,unmountIfInvisible:l.default.bool},D.defaultProps={once:!1,offset:0,overflow:!1,resize:!1,scroll:!0,unmountIfInvisible:!1};t.lazyload=f.default;t.default=D,t.forceCheck=T}).call(this,n("8oxB"))},HPlS:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/2018/integrating-markdown-in-react-with-mdx",function(){var e=n("Nack");return{page:e.default||e}}])},Nack:function(e,t,n){"use strict";n.r(t);var o=n("q1tI"),a=n.n(o),r=n("Y6hp"),i=n("wFB7"),l=n("6qfE"),s=n("HMs9"),u=n.n(s),c=n("fL6P"),p=n.n(c),f=n("vOnD").b.div.withConfig({displayName:"Terminal__StyledTerminal",componentId:"s1ivd482-0"})(["margin:40px 0 40px 0;"]),d=function(e){return a.a.createElement(f,null,a.a.createElement(p.a,e))},m=function(e){var t=e.components;return a.a.createElement(l.MDXTag,{name:"wrapper"},a.a.createElement(l.MDXTag,{name:"p",components:t},"The ",a.a.createElement(l.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://nextjs.org/"}},"Next")," framework is great for creating websites with ",a.a.createElement(l.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://reactjs.org/"}},"React"),". In fact this ",a.a.createElement(l.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/dongy7/dongy7.github.io"}},"blog")," is built with Next. But one thing that I have missed about using static site frameworks such as ",a.a.createElement(l.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://jekyllrb.com/"}},"Jekyll")," is the ability to write content in Markdown. JSX syntax is nice for defining declarative components, but can be awkward to use when mixed with text. Here is an example from one of my previous posts written with JSX:"),a.a.createElement(l.MDXTag,{name:"pre",components:t},a.a.createElement(l.MDXTag,{name:"code",components:t,parentName:"pre"},"<P>\n  We can see that the data that we're actually interested in, which are the <Code>ids</Code> of\n  the articles is in the <Code>response</Code> field of the object. Since we are only interested\n  in the <Code>response</Code> field, we can use the <Code>map</Code> operator:\n</P>\n")),a.a.createElement(l.MDXTag,{name:"p",components:t},"As you can see JSX introduces breaks in the text and is hard to write even with editor integration for JSX. In comparison, the following is an equivalent markdown version:"),a.a.createElement(l.MDXTag,{name:"pre",components:t},a.a.createElement(l.MDXTag,{name:"code",components:t,parentName:"pre"},"We can see that the data that we're actually interested in, which are the `ids` of the articles\nis in the `response` field of the object. Since we are only interested in the `response` field,\nwe can use the `map` operator:\n")),a.a.createElement(l.MDXTag,{name:"p",components:t},"Markdown feels much better to write for things like blog posts where the majority of the content is text. But how do we integrate Markdown with JSX? Fortunately, we can use the ",a.a.createElement(l.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/mdx-js/mdx"}},"MDX")," library to render JSX in Markdown. First install the ",a.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"MDX")," library:"),a.a.createElement(u.a,{height:120},a.a.createElement(d,{lines:[{text:"npm install --save-dev @mdx-js/loader @mdx-js/mdx",cmd:!0}],interval:50,height:120})),a.a.createElement(l.MDXTag,{name:"p",components:t},"or if you use ",a.a.createElement(l.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://yarnpkg.com/en/"}},"Yarn"),":"),a.a.createElement(u.a,{height:120},a.a.createElement(d,{lines:[{text:"yarn add --dev @mdx-js/loader @mdx-js/mdx",cmd:!0}],interval:50,height:120})),a.a.createElement(l.MDXTag,{name:"p",components:t},"If you are using ",a.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"Next"),", add this to your ",a.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"next.config.js")," so that the ",a.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"MDX")," loader is used to load ",a.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"jsx")," and ",a.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"md")," files."),a.a.createElement(l.MDXTag,{name:"pre",components:t},a.a.createElement(l.MDXTag,{name:"code",components:t,parentName:"pre"},"module.exports = {\n  pageExtensions: ['js', 'jsx', 'md', 'mdx'],\n  webpack: (config, { defaultLoaders }) => {\n    config.module.rules.push({\n      test: /.md$/,\n      use: [\n        defaultLoaders.babel,\n        {\n          loader: '@mdx-js/loader'\n        }\n      ]\n    })\n\n    return config\n  }\n}\n")),a.a.createElement(l.MDXTag,{name:"p",components:t},"If you are using ",a.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"webpack"),", then specify the ",a.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"MDX")," loader as follows:"),a.a.createElement(l.MDXTag,{name:"pre",components:t},a.a.createElement(l.MDXTag,{name:"code",components:t,parentName:"pre"},"module.exports = {\n  module: {\n    rules: [\n      {\n        test: /.md$/,\n        use: ['babel-loader', '@mdx-js/loader']\n      }\n    ]\n  }\n}\n")),a.a.createElement(l.MDXTag,{name:"p",components:t},"Next, compose your content and save it to a ",a.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"markdown")," file and just import it and use it like a normal React component:"),a.a.createElement(l.MDXTag,{name:"pre",components:t},a.a.createElement(l.MDXTag,{name:"code",components:t,parentName:"pre"},"import MyBlogPost from './MyBlogPost.md'\n\nexport default () =>\n  <MyBlogPost />\n")),a.a.createElement(l.MDXTag,{name:"p",components:t},"If you are like me and have defined custom React components for things like code snippets, you can specify them through the ",a.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"components")," prop:"),a.a.createElement(l.MDXTag,{name:"pre",components:t},a.a.createElement(l.MDXTag,{name:"code",components:t,parentName:"pre"},"import MyBlogPost from './MyBlogPost.md'\nimport Snippet from '../components/Snippet'\n\nexport default () =>\n  <MyBlogPost\n    components={{\n      code: Snippet\n    }}\n  />\n")),a.a.createElement(l.MDXTag,{name:"p",components:t},"That's all you need to do in order to start writing content in Markdown for your React powered websites! If you want to learn more about ",a.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"MDX"),", I encourage you to check out the ",a.a.createElement(l.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/mdx-js/mdx"}},"MDX project page"),"."))};t.default=function(){var e=Object(i.a)(m);return a.a.createElement(r.a,{title:"Integrating Markdown in React with MDX",date:"May 4, 2018"},a.a.createElement(e,null))}},PTkm:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var o=void 0,a=void 0,r=void 0,i=void 0,l=void 0,s=function s(){var u=+new Date-i;u<t&&u>=0?o=setTimeout(s,t-u):(o=null,n||(l=e.apply(r,a),o||(r=null,a=null)))};return function(){r=this,a=arguments,i=+new Date;var u=n&&!o;return o||(o=setTimeout(s,t)),u&&(l=e.apply(r,a),r=null,a=null),l}}},QCnb:function(e,t,n){"use strict";e.exports=n("+wdc")},Seim:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.on=function(e,t,n,o){o=o||!1,e.addEventListener?e.addEventListener(t,n,o):e.attachEvent&&e.attachEvent("on"+t,function(t){n.call(e,t||window.event)})},t.off=function(e,t,n,o){o=o||!1,e.removeEventListener?e.removeEventListener(t,n,o):e.detachEvent&&e.detachEvent("on"+t,n)}},tvXG:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(!e)return document.documentElement;for(var t="absolute"===e.style.position,n=/(scroll|auto)/,o=e;o;){if(!o.parentNode)return e.ownerDocument||document.documentElement;var a=window.getComputedStyle(o),r=a.position,i=a.overflow,l=a["overflow-x"],s=a["overflow-y"];if("static"===r&&t)o=o.parentNode;else{if(n.test(i)&&n.test(l)&&n.test(s))return o;o=o.parentNode}}return e.ownerDocument||e.documentElement||document.documentElement}},uUxy:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var o,a;return t||(t=250),function(){var r=n||this,i=+new Date,l=arguments;o&&i<o+t?(clearTimeout(a),a=setTimeout(function(){o=i,e.apply(r,l)},t)):(o=i,e.apply(r,l))}}}},[["HPlS",1,0]]]);