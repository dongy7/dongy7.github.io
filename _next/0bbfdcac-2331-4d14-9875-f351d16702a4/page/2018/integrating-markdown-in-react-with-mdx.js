module.exports=__NEXT_REGISTER_PAGE("/2018/integrating-markdown-in-react-with-mdx",function(){return{page:webpackJsonp([0],{129:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.forceCheck=t.lazyload=void 0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n(0),r=m(a),i=m(n(101)),l=m(n(7)),s=n(267),c=m(n(268)),p=m(n(269)),u=m(n(270)),d=m(n(271));function m(e){return e&&e.__esModule?e:{default:e}}var f=0,h=0,v="data-lazyload-listened",g=[],y=[],b=!1;try{var w=Object.defineProperty({},"passive",{get:function(){b=!0}});window.addEventListener("test",null,w)}catch(e){}var E=!!b&&{capture:!1,passive:!0},M=function(e){var t=i.default.findDOMNode(e);if(t instanceof HTMLElement){var n=(0,c.default)(t);(e.props.overflow&&n!==t.ownerDocument&&n!==document&&n!==document.documentElement?function(e,t){var n=i.default.findDOMNode(e),o=void 0,a=void 0;try{var r=t.getBoundingClientRect();o=r.top,a=r.height}catch(e){o=f,a=h}var l=window.innerHeight||document.documentElement.clientHeight,s=Math.max(o,0),c=Math.min(l,o+a)-s,p=void 0,u=void 0;try{var d=n.getBoundingClientRect();p=d.top,u=d.height}catch(e){p=f,u=h}var m=p-s,v=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return m-v[0]<=c&&m+u+v[1]>=0}(e,n):function(e){var t=i.default.findDOMNode(e);if(!(t.offsetWidth||t.offsetHeight||t.getClientRects().length))return!1;var n=void 0,o=void 0;try{var a=t.getBoundingClientRect();n=a.top,o=a.height}catch(e){n=f,o=h}var r=window.innerHeight||document.documentElement.clientHeight,l=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return n-l[0]<=r&&n+o+l[1]>=0}(e))?e.visible||(e.props.once&&y.push(e),e.visible=!0,e.forceUpdate()):e.props.once&&e.visible||(e.visible=!1,e.props.unmountIfInvisible&&e.forceUpdate())}},T=function(){for(var e=0;e<g.length;++e){var t=g[e];M(t)}y.forEach(function(e){var t=g.indexOf(e);-1!==t&&g.splice(t,1)}),y=[]},D=void 0,X=null,x=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.visible=!1,n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),o(t,[{key:"componentDidMount",value:function(){var e=window,t=this.props.scrollContainer;t&&"string"==typeof t&&(e=e.document.querySelector(t));var n=void 0!==this.props.debounce&&"throttle"===D||"debounce"===D&&void 0===this.props.debounce;if(n&&((0,s.off)(e,"scroll",X,E),(0,s.off)(window,"resize",X,E),X=null),X||(void 0!==this.props.debounce?(X=(0,p.default)(T,"number"==typeof this.props.debounce?this.props.debounce:300),D="debounce"):void 0!==this.props.throttle?(X=(0,u.default)(T,"number"==typeof this.props.throttle?this.props.throttle:300),D="throttle"):X=T),this.props.overflow){var o=(0,c.default)(i.default.findDOMNode(this));if(o&&"function"==typeof o.getAttribute){var a=+o.getAttribute(v)+1;1===a&&o.addEventListener("scroll",X,E),o.setAttribute(v,a)}}else if(0===g.length||n){var r=this.props,l=r.scroll,d=r.resize;l&&(0,s.on)(e,"scroll",X,E),d&&(0,s.on)(window,"resize",X,E)}g.push(this),M(this)}},{key:"shouldComponentUpdate",value:function(){return this.visible}},{key:"componentWillUnmount",value:function(){if(this.props.overflow){var e=(0,c.default)(i.default.findDOMNode(this));if(e&&"function"==typeof e.getAttribute){var t=+e.getAttribute(v)-1;0===t?(e.removeEventListener("scroll",X,E),e.removeAttribute(v)):e.setAttribute(v,t)}}var n=g.indexOf(this);-1!==n&&g.splice(n,1),0===g.length&&((0,s.off)(window,"resize",X,E),(0,s.off)(window,"scroll",X,E))}},{key:"render",value:function(){return this.visible?this.props.children:this.props.placeholder?this.props.placeholder:r.default.createElement("div",{style:{height:this.props.height},className:"lazyload-placeholder"})}}]),t}();x.propTypes={once:l.default.bool,height:l.default.oneOfType([l.default.number,l.default.string]),offset:l.default.oneOfType([l.default.number,l.default.arrayOf(l.default.number)]),overflow:l.default.bool,resize:l.default.bool,scroll:l.default.bool,children:l.default.node,throttle:l.default.oneOfType([l.default.number,l.default.bool]),debounce:l.default.oneOfType([l.default.number,l.default.bool]),placeholder:l.default.node,scrollContainer:l.default.oneOfType([l.default.string,l.default.object]),unmountIfInvisible:l.default.bool},x.defaultProps={once:!1,offset:0,overflow:!1,resize:!1,scroll:!0,unmountIfInvisible:!1};t.lazyload=d.default;t.default=x,t.forceCheck=T},265:function(e,t,n){e.exports=n(266)},266:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),a=n.n(o),r=n(39),i=n(41),l=n(40),s=n(129),c=n.n(s),p=n(78),u=n.n(p),d=n(1).a.div.withConfig({displayName:"Terminal__StyledTerminal",componentId:"sc-1ivd482-0"})(["margin:40px 0 40px 0;"]),m=function(e){return a.a.createElement(d,null,a.a.createElement(u.a,e))},f=function(e){var t=e.components;return a.a.createElement(l.MDXTag,{name:"wrapper"},a.a.createElement(l.MDXTag,{name:"p",components:t},"The ",a.a.createElement(l.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://nextjs.org/"}},"Next")," framework is great for creating websites with ",a.a.createElement(l.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://reactjs.org/"}},"React"),". In fact this ",a.a.createElement(l.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/dongy7/dongy7.github.io"}},"blog")," is built with Next. But one thing that I have missed about using static site frameworks such as ",a.a.createElement(l.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://jekyllrb.com/"}},"Jekyll")," is the ability to write content in Markdown. JSX syntax is nice for defining declarative components, but can be awkward to use when mixed with text. Here is an example from one of my previous posts written with JSX:"),a.a.createElement(l.MDXTag,{name:"pre",components:t},a.a.createElement(l.MDXTag,{name:"code",components:t,parentName:"pre"},"<P>\n  We can see that the data that we're actually interested in, which are the <Code>ids</Code> of\n  the articles is in the <Code>response</Code> field of the object. Since we are only interested\n  in the <Code>response</Code> field, we can use the <Code>map</Code> operator:\n</P>\n")),a.a.createElement(l.MDXTag,{name:"p",components:t},"As you can see JSX introduces breaks in the text and is hard to write even with editor integration for JSX. In comparison, the following is an equivalent markdown version:"),a.a.createElement(l.MDXTag,{name:"pre",components:t},a.a.createElement(l.MDXTag,{name:"code",components:t,parentName:"pre"},"We can see that the data that we're actually interested in, which are the `ids` of the articles\nis in the `response` field of the object. Since we are only interested in the `response` field,\nwe can use the `map` operator:\n")),a.a.createElement(l.MDXTag,{name:"p",components:t},"Markdown feels much better to write for things like blog posts where the majority of the content is text. But how do we integrate Markdown with JSX? Fortunately, we can use the ",a.a.createElement(l.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/mdx-js/mdx"}},"MDX")," library to render JSX in Markdown. First install the ",a.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"MDX")," library:"),a.a.createElement(c.a,{height:120},a.a.createElement(m,{lines:[{text:"npm install --save-dev @mdx-js/loader @mdx-js/mdx",cmd:!0}],interval:50,height:120})),a.a.createElement(l.MDXTag,{name:"p",components:t},"or if you use ",a.a.createElement(l.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://yarnpkg.com/en/"}},"Yarn"),":"),a.a.createElement(c.a,{height:120},a.a.createElement(m,{lines:[{text:"yarn add --dev @mdx-js/loader @mdx-js/mdx",cmd:!0}],interval:50,height:120})),a.a.createElement(l.MDXTag,{name:"p",components:t},"If you are using ",a.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"Next"),", add this to your ",a.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"next.config.js")," so that the ",a.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"MDX")," loader is used to load ",a.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"jsx")," and ",a.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"md")," files."),a.a.createElement(l.MDXTag,{name:"pre",components:t},a.a.createElement(l.MDXTag,{name:"code",components:t,parentName:"pre"},"module.exports = {\n  pageExtensions: ['js', 'jsx', 'md', 'mdx'],\n  webpack: (config, { defaultLoaders }) => {\n    config.module.rules.push({\n      test: /.md$/,\n      use: [\n        defaultLoaders.babel,\n        {\n          loader: '@mdx-js/loader'\n        }\n      ]\n    })\n\n    return config\n  }\n}\n")),a.a.createElement(l.MDXTag,{name:"p",components:t},"If you are using ",a.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"webpack"),", then specify the ",a.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"MDX")," loader as follows:"),a.a.createElement(l.MDXTag,{name:"pre",components:t},a.a.createElement(l.MDXTag,{name:"code",components:t,parentName:"pre"},"module.exports = {\n  module: {\n    rules: [\n      {\n        test: /.md$/,\n        use: ['babel-loader', '@mdx-js/loader']\n      }\n    ]\n  }\n}\n")),a.a.createElement(l.MDXTag,{name:"p",components:t},"Next, compose your content and save it to a ",a.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"markdown")," file and just import it and use it like a normal React component:"),a.a.createElement(l.MDXTag,{name:"pre",components:t},a.a.createElement(l.MDXTag,{name:"code",components:t,parentName:"pre"},"import MyBlogPost from './MyBlogPost.md'\n\nexport default () =>\n  <MyBlogPost />\n")),a.a.createElement(l.MDXTag,{name:"p",components:t},"If you are like me and have defined custom React components for things like code snippets, you can specify them through the ",a.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"components")," prop:"),a.a.createElement(l.MDXTag,{name:"pre",components:t},a.a.createElement(l.MDXTag,{name:"code",components:t,parentName:"pre"},"import MyBlogPost from './MyBlogPost.md'\nimport Snippet from '../components/Snippet'\n\nexport default () =>\n  <MyBlogPost\n    components={{\n      code: Snippet\n    }}\n  />\n")),a.a.createElement(l.MDXTag,{name:"p",components:t},"That's all you need to do in order to start writing content in Markdown for your React powered websites! If you want to learn more about ",a.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"MDX"),", I encourage you to check out the ",a.a.createElement(l.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://github.com/mdx-js/mdx"}},"MDX project page"),"."))};t.default=function(){var e=Object(i.a)(f);return a.a.createElement(r.a,{title:"Integrating Markdown in React with MDX",date:"May 4, 2018"},a.a.createElement(e,null))}},267:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.on=function(e,t,n,o){o=o||!1,e.addEventListener?e.addEventListener(t,n,o):e.attachEvent&&e.attachEvent("on"+t,function(t){n.call(e,t||window.event)})},t.off=function(e,t,n,o){o=o||!1,e.removeEventListener?e.removeEventListener(t,n,o):e.detachEvent&&e.detachEvent("on"+t,n)}},268:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(!(e instanceof HTMLElement))return document.documentElement;for(var t="absolute"===e.style.position,n=/(scroll|auto)/,o=e;o;){if(!o.parentNode)return e.ownerDocument||document.documentElement;var a=window.getComputedStyle(o),r=a.position,i=a.overflow,l=a["overflow-x"],s=a["overflow-y"];if("static"===r&&t)o=o.parentNode;else{if(n.test(i)&&n.test(l)&&n.test(s))return o;o=o.parentNode}}return e.ownerDocument||e.documentElement||document.documentElement}},269:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var o=void 0,a=void 0,r=void 0,i=void 0,l=void 0,s=function s(){var c=+new Date-i;c<t&&c>=0?o=setTimeout(s,t-c):(o=null,n||(l=e.apply(r,a),o||(r=null,a=null)))};return function(){r=this,a=arguments,i=+new Date;var c=n&&!o;return o||(o=setTimeout(s,t)),c&&(l=e.apply(r,a),r=null,a=null),l}}},270:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var o,a;return t||(t=250),function(){var r=n||this,i=+new Date,l=arguments;o&&i<o+t?(clearTimeout(a),a=setTimeout(function(){o=i,e.apply(r,l)},t)):(o=i,e.apply(r,l))}}},271:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n(0),r=l(a),i=l(n(129));function l(e){return e&&e.__esModule?e:{default:e}}var s=function(e){return e.displayName||e.name||"Component"};t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){return function(n){function l(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l);var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(l.__proto__||Object.getPrototypeOf(l)).call(this));return e.displayName="LazyLoad"+s(t),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(l,a.Component),o(l,[{key:"render",value:function(){return r.default.createElement(i.default,e,r.default.createElement(t,this.props))}}]),l}()}}}},[265]).default}});