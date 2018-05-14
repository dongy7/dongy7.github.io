module.exports=__NEXT_REGISTER_PAGE("/2017/complex-data-fetching-made-simple-with-rx",function(){var e=webpackJsonp([5],{179:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});var a=n(0);var o=n.n(a);var r=n(48);var s=n.n(r);t["default"]=function(e){var t=e.components;return o.a.createElement(r["MDXTag"],{name:"wrapper"},o.a.createElement(r["MDXTag"],{name:"p",components:t},"This post assumes a basic understanding of ",o.a.createElement(r["MDXTag"],{name:"a",components:t,parentName:"p",props:{href:"http://reactivex.io/rxjs/"}},"RxJS"),". If you don't then, I highly recommend you read the following ",o.a.createElement(r["MDXTag"],{name:"a",components:t,parentName:"p",props:{href:"https://gist.github.com/staltz/868e7e9bc2a7b8c1f754"}},"intro")," that gives you the basic idea behind Rx and observables."),o.a.createElement(r["MDXTag"],{name:"p",components:t},"Have you ever had to work with a complex query where you had to chain and nest multiple promises in order to get the data you wanted? I can tell you I have and it can get complex very quickly."),o.a.createElement(r["MDXTag"],{name:"p",components:t},"Consider this query: I want to get the second page of the top stories on Hacker News where each page contains 30 posts. Now, Hacker News provides an excellent real time ",o.a.createElement(r["MDXTag"],{name:"a",components:t,parentName:"p",props:{href:"https://github.com/HackerNews/API"}},"API"),", but how do we get the specific posts that we want? The ",o.a.createElement(r["MDXTag"],{name:"a",components:t,parentName:"p",props:{href:"https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"}},"endpoint"),", provided by Firebase simply gives us the id of the top 500 posts for a specific category."),o.a.createElement(r["MDXTag"],{name:"p",components:t},"Let's think about how we would accomplish this in Rx. First, we want to create a stream of the top 500 post ids from the Firebase API. We can do this with the ",o.a.createElement(r["MDXTag"],{name:"inlineCode",components:t,parentName:"p"},"ajax")," operator provided by ",o.a.createElement(r["MDXTag"],{name:"inlineCode",components:t,parentName:"p"},"RxDom"),"."),o.a.createElement(r["MDXTag"],{name:"pre",components:t},o.a.createElement(r["MDXTag"],{name:"code",components:t,parentName:"pre"},"const source = Rx.Observable\n  .ajax('https://hacker-news.firebaseio.com/v0/topstories.json')`}\n")),o.a.createElement(r["MDXTag"],{name:"p",components:t},"Let's subscribe to our observable and see what we get by logging to the console:"),o.a.createElement(r["MDXTag"],{name:"pre",components:t},o.a.createElement(r["MDXTag"],{name:"code",components:t,parentName:"pre"},"source.subscribe(x => console.log(x))\n")),o.a.createElement(r["MDXTag"],{name:"p",components:t},"You should see something like this:"),o.a.createElement(r["MDXTag"],{name:"pre",components:t},o.a.createElement(r["MDXTag"],{name:"code",components:t,parentName:"pre"},'[object Object] {\n  originalEvent: [object Event] {\n    AT_TARGET: 2,\n    bubbles: false,\n    BUBBLING_PHASE: 3,\n    cancelable: false,\n    cancelBubble: false,\n    CAPTURING_PHASE: 1,\n    composed: false,\n    composedPath: function composedPath() { [native code] },\n    currentTarget: [object XMLHttpRequest] { ... },\n    defaultPrevented: false,\n    eventPhase: 2,\n    initEvent: function initEvent() { [native code] },\n    isTrusted: true,\n    NONE: 0,\n    path: [],\n    preventDefault: function preventDefault() { [native code] },\n    returnValue: true,\n    srcElement: [circular object XMLHttpRequest],\n    stopImmediatePropagation: function stopImmediatePropagation() { [native code] },\n    stopPropagation: function stopPropagation() { [native code] },\n    target: [circular object XMLHttpRequest],\n    timeStamp: 102.11500000000001,\n    type: "readystatechange"\n  },\n  request: [object Object] {\n    async: true,\n    body: undefined,\n    createXHR: function () {\n                  return this.crossDomain ? getCORSRequest.call(this) : getXMLHttpRequest();\n              },\n    crossDomain: false,\n    headers: [object Object] { ... },\n    method: "GET",\n    responseType: "json",\n    timeout: 0,\n    url: "https://hacker-news.firebaseio.com/v0/topstories.json",\n    withCredentials: false\n  },\n  response: [14625795, 14626107, 14626295, ...],\n  responseType: "json",\n  status: 200,\n  xhr: [circular object XMLHttpRequest]\n}\n')),o.a.createElement(r["MDXTag"],{name:"p",components:t},"We can see that the data that we're actually interested in, which are the",o.a.createElement(r["MDXTag"],{name:"inlineCode",components:t,parentName:"p"},"ids")," of the articles is in the ",o.a.createElement(r["MDXTag"],{name:"inlineCode",components:t,parentName:"p"},"response")," field of the object. Since we are only interested in the ",o.a.createElement(r["MDXTag"],{name:"inlineCode",components:t,parentName:"p"},"response")," field, we can use the ",o.a.createElement(r["MDXTag"],{name:"inlineCode",components:t,parentName:"p"},"map")," operator:"),o.a.createElement(r["MDXTag"],{name:"pre",components:t},o.a.createElement(r["MDXTag"],{name:"code",components:t,parentName:"pre"},"const source = Rx.Observable\n  .ajax('https://hacker-news.firebaseio.com/v0/topstories.json')\n  .map(res => res.response)\n")),o.a.createElement(r["MDXTag"],{name:"p",components:t},"You should now see the list of all the IDs returned from the request."),o.a.createElement(r["MDXTag"],{name:"pre",components:t},o.a.createElement(r["MDXTag"],{name:"code",components:t,parentName:"pre"},"[14625795, 14626107, 14626295, ...]\n")),o.a.createElement(r["MDXTag"],{name:"p",components:t},"Now let's think about how we would filter the IDs so that we are working with just the IDs that are in the range specified a page number and the number of items per page. We could simply just fetch all of the articles from the list of IDs and get the articles that we need using array operations. However, using this approach, we are potentially throwing away most of the data that we fetch."),o.a.createElement(r["MDXTag"],{name:"p",components:t},"Let's say we have a stream of post IDs. We'll also assume that a page contains 30 posts and we want to get the post IDs for the second page. In this scenario we want to skip the first 30 post IDs and get the next 30 post IDs. Conveniently, Rx provides the ",o.a.createElement(r["MDXTag"],{name:"a",components:t,parentName:"p",props:{href:"http://reactivex.io/documentation/operators/skip.html"}},"skip")," operator to skip a specified number of items."),o.a.createElement(r["MDXTag"],{name:"pre",components:t},o.a.createElement(r["MDXTag"],{name:"code",components:t,parentName:"pre"},"const itemsPerPage = 30\nconst page = 2\n\nconst source = Rx.Observable\n  .ajax('https://hacker-news.firebaseio.com/v0/topstories.json')\n  .map(res => res.response)\n  .skip(itemsPerPage * (page - 1))\n")),o.a.createElement(r["MDXTag"],{name:"p",components:t},"When we run this code, you'll see no output in the conole. Why? Remember that we transformed our response into an array of IDs. We aren't dealing with a stream of IDs but rather an array of IDs. So we need to create a new Observable from the response array. We can accomplish this using the ",o.a.createElement(r["MDXTag"],{name:"a",components:t,parentName:"p",props:{href:"http://reactivex.io/documentation/operators/from.html"}},"from")," operator."),o.a.createElement(r["MDXTag"],{name:"pre",components:t},o.a.createElement(r["MDXTag"],{name:"code",components:t,parentName:"pre"},"const source = Rx.Observable\n  .ajax('https://hacker-news.firebaseio.com/v0/topstories.json')\n  .map(res => Rx.Observable.from(res.response))\n  .skip(itemsPerPage * (page - 1))\n")),o.a.createElement(r["MDXTag"],{name:"p",components:t},"Let's try running this code. Again, we get nothing logged to the console. To see why, let's take a look at the second operator. We have mapped our response array into another observable, but we have not subscribed to it. In order to emit the items that are being emitted by our second observable, we need to make use of the ",o.a.createElement(r["MDXTag"],{name:"a",components:t,parentName:"p",props:{href:"http://reactivex.io/documentation/operators/flatmap.html"}},"flapMap")," operator. We are going to use a variant of ",o.a.createElement(r["MDXTag"],{name:"inlineCode",components:t,parentName:"p"},"flatMap")," called",o.a.createElement(r["MDXTag"],{name:"inlineCode",components:t,parentName:"p"},"concatMap"),". ",o.a.createElement(r["MDXTag"],{name:"inlineCode",components:t,parentName:"p"},"concatMap")," preserves the order of the items emitted by the observable, which we need because we want to get a certain part of the posts in the ordering."),o.a.createElement(r["MDXTag"],{name:"pre",components:t},o.a.createElement(r["MDXTag"],{name:"code",components:t,parentName:"pre"},"const source = Rx.Observable\n  .ajax('https://hacker-news.firebaseio.com/v0/topstories.json')\n  .concatMap(res => Rx.Observable.from(res.response))\n  .skip(itemsPerPage * (page - 1))\n")),o.a.createElement(r["MDXTag"],{name:"p",components:t},"Now when we run the code, we get the IDs of posts excluding the first 30 items."),o.a.createElement(r["MDXTag"],{name:"pre",components:t},o.a.createElement(r["MDXTag"],{name:"code",components:t,parentName:"pre"},'"14621347"\n"14625257"\n"14625653"\n"14625736"\n"14625302"\n...\n')),o.a.createElement(r["MDXTag"],{name:"p",components:t},"Now, we just need to get the number posts that are needed for a page. We can use the ",o.a.createElement(r["MDXTag"],{name:"a",components:t,parentName:"p",props:{href:"http://reactivex.io/documentation/operators/take.html"}},"take")," operator to get the first ",o.a.createElement(r["MDXTag"],{name:"inlineCode",components:t,parentName:"p"},"n")," elements from the stream."),o.a.createElement(r["MDXTag"],{name:"pre",components:t},o.a.createElement(r["MDXTag"],{name:"code",components:t,parentName:"pre"},"const source = Rx.Observable\n  .ajax('https://hacker-news.firebaseio.com/v0/topstories.json')\n  .concatMap(res => Rx.Observable.from(res.response))\n  .skip(itemsPerPage * (page - 1))\n  .take(itemsPerPage)\n")),o.a.createElement(r["MDXTag"],{name:"p",components:t},"You should now see 30 post IDs in the console."),o.a.createElement(r["MDXTag"],{name:"pre",components:t},o.a.createElement(r["MDXTag"],{name:"code",components:t,parentName:"pre"},'"14624090"\n"14620990"\n"14625212"\n"14618455"\n"14618830"\n"14612680"\n"14618256"\n"14622947"\n"14621806"\n"14624038"\n"14625882"\n"14623937"\n"14622181"\n"14617713"\n"14618853"\n"14618128"\n"14624904"\n"14619888"\n"14619336"\n"14623821"\n"14619623"\n"14624560"\n"14623650"\n"14618751"\n"14625422"\n"14622608"\n"14620848"\n"14620479"\n"14621663"\n"14619629"\n')),o.a.createElement(r["MDXTag"],{name:"p",components:t},"Great, now that we have the IDs of the posts that we want to fetch, we need to get the data associated with each post. We can use the item endpoint provided by the Firebase API. We'll use the ",o.a.createElement(r["MDXTag"],{name:"inlineCode",components:t,parentName:"p"},"ajax")," operator to create a stream of response objects. Once again, we'll need to make use of the ",o.a.createElement(r["MDXTag"],{name:"inlineCode",components:t,parentName:"p"},"concatMap")," operator to merge an observable of observables into a single stream."),o.a.createElement(r["MDXTag"],{name:"pre",components:t},o.a.createElement(r["MDXTag"],{name:"code",components:t,parentName:"pre"},"const source = Rx.Observable\n  .ajax('https://hacker-news.firebaseio.com/v0/topstories.json')\n  .concatMap(res => Rx.Observable.from(res.response))\n  .skip(itemsPerPage * (page - 1))\n  .take(itemsPerPage)\n  .concatMap(id => Rx.Observable.ajax(`https://hacker-news.firebaseio.com/v0/item/${id}.json`))\n  .map(res => res.response)\n")),o.a.createElement(r["MDXTag"],{name:"p",components:t},"In the console, you should now see post objects corresponding to the IDs."),o.a.createElement(r["MDXTag"],{name:"pre",components:t},o.a.createElement(r["MDXTag"],{name:"code",components:t,parentName:"pre"},'[object Object] {\n  by: "kawera",\n  descendants: 11,\n  id: 14624090,\n  kids: [14624882, 14626280, 14624880, 14625548],\n  score: 38,\n  time: 1498271415,\n  title: "Voice and the uncanny valley of AI",\n  type: "story",\n  url: "http://ben-evans.com/benedictevans/2017/2/22/voice-and-the-uncanny-valley-of-ai"\n}\n...\n')),o.a.createElement(r["MDXTag"],{name:"p",components:t},"To make it easy to consume the result of this stream, we'll merge all of the post objects into a single array. We can accomplish this using the ",o.a.createElement(r["MDXTag"],{name:"a",components:t,parentName:"p",props:{href:"http://reactivex.io/documentation/operators/scan.html"}},"scan")," operator. You can think of ",o.a.createElement(r["MDXTag"],{name:"inlineCode",components:t,parentName:"p"},"scan")," as a ",o.a.createElement(r["MDXTag"],{name:"inlineCode",components:t,parentName:"p"},"reduce")," where a function is applied to the item emitted by the observable then the result is emitted. In our case, we'll push items from stream onto an array."),o.a.createElement(r["MDXTag"],{name:"pre",components:t},o.a.createElement(r["MDXTag"],{name:"code",components:t,parentName:"pre"},"const source = Rx.Observable\n  .ajax('https://hacker-news.firebaseio.com/v0/topstories.json')\n  .concatMap(res => Rx.Observable.from(res.response))\n  .skip(itemsPerPage * (page - 1))\n  .take(itemsPerPage)\n  .concatMap(id => Rx.Observable.ajax(`https://hacker-news.firebaseio.com/v0/item/${id}.json`))\n  .map(res => res.response)\n  .scan((posts, post) => {\n    posts.push(post)\n    return posts\n  }, [])\n")),o.a.createElement(r["MDXTag"],{name:"p",components:t},"Taking a look at the output, you can see that posts are being accumulated into a single array:"),o.a.createElement(r["MDXTag"],{name:"pre",components:t},o.a.createElement(r["MDXTag"],{name:"code",components:t,parentName:"pre"},'[[object Object] {\n  by: "vinnyglennon",\n  descendants: 52,\n  id: 14623669,\n  kids: [14624652, 14624755, 14624888, 14626483, 14624514, 14624426, 14624746, 14624715, 14625915, 14624579, 14625877, 14625655, 14625748, 14624911, 14625745],\n  score: 130,\n  time: 1498262659,\n  title: "How did a 30 year-old Su-22 defeat a modern AIM-9X?",\n  type: "story",\n  url: "http://www.combataircraft.net/2017/06/23/how-did-a-30-year-old-su-22-defeat-a-modern-aim-9x/"\n}]\n[[object Object] {\n  by: "vinnyglennon",\n  descendants: 52,\n  id: 14623669,\n  kids: [14624652, 14624755, 14624888, 14626483, 14624514, 14624426, 14624746, 14624715, 14625915, 14624579, 14625877, 14625655, 14625748, 14624911, 14625745],\n  score: 130,\n  time: 1498262659,\n  title: "How did a 30 year-old Su-22 defeat a modern AIM-9X?",\n  type: "story",\n  url: "http://www.combataircraft.net/2017/06/23/how-did-a-30-year-old-su-22-defeat-a-modern-aim-9x/"\n}, [object Object] {\n  by: "kawera",\n  descendants: 11,\n  id: 14624090,\n  kids: [14624882, 14624880, 14626280, 14625548],\n  score: 38,\n  time: 1498271415,\n  title: "Voice and the uncanny valley of AI",\n  type: "story",\n  url: "http://ben-evans.com/benedictevans/2017/2/22/voice-and-the-uncanny-valley-of-ai"\n}]\n...\n')),o.a.createElement(r["MDXTag"],{name:"p",components:t},"We're only interested in the array containing all of the posts. We can use the ",o.a.createElement(r["MDXTag"],{name:"a",components:t,parentName:"p",props:{href:"http://reactivex.io/documentation/operators/takelast.html"}},"takeLast")," operator, which takes the final ",o.a.createElement(r["MDXTag"],{name:"inlineCode",components:t,parentName:"p"},"n")," elements emitted by the observable."),o.a.createElement(r["MDXTag"],{name:"pre",components:t},o.a.createElement(r["MDXTag"],{name:"code",components:t,parentName:"pre"},"const source = Rx.Observable\n  .ajax('https://hacker-news.firebaseio.com/v0/topstories.json')\n  .concatMap(res => Rx.Observable.from(res.response))\n  .skip(itemsPerPage * (page - 1))\n  .take(itemsPerPage)\n  .concatMap(id => Rx.Observable.ajax(`https://hacker-news.firebaseio.com/v0/item/${id}.json`))\n  .map(res => res.response)\n  .scan((posts, post) => {\n    posts.push(post)\n    return posts\n  }, [])\n  .takeLast(1)\n")),o.a.createElement(r["MDXTag"],{name:"p",components:t},"Now when you look at the output, you should see an array of post items corresponding to the page number. I hope this example gave you an idea of the things you can do with ",o.a.createElement(r["MDXTag"],{name:"inlineCode",components:t,parentName:"p"},"Rx"),". If you want to play around with the example, you can checkout the ",o.a.createElement(r["MDXTag"],{name:"a",components:t,parentName:"p",props:{href:"http://jsbin.com/yezugex/edit?js,console"}},"JSBin"),"."))}},24:function(e,t,n){"use strict";var a=n(0);var o=n.n(a);var r=n(1);var s=r["a"].a.withConfig({displayName:"Title__A",componentId:"s1tjl8o3-0"})(["color:#000;text-decoration:none;&:hover{background-color:#000;color:#fff;}"]);var c=r["a"].h1.withConfig({displayName:"Title__H1",componentId:"s1tjl8o3-1"})(["font-weight:500;margin-bottom:10px;"]);t["a"]=function(e){var t=e.children;return o.a.createElement(c,null,o.a.createElement(s,{href:"#"},t))}},310:function(e,t,n){e.exports=n(311)},311:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});var a=n(0);var o=n.n(a);var r=n(49);var s=n.n(r);var c=n(46);var p=n(179);var m=n(68);t["default"]=function(){var e=Object(m["a"])(p["default"]);return o.a.createElement(c["a"],{title:"Complex Data Fetching Made Simple With Rx",date:"June 24, 2017"},o.a.createElement(e,null))}},46:function(e,t,n){"use strict";var a=n(0);var o=n.n(a);var r=n(1);var s=n(67);var c=n(49);var p=n.n(c);var m=n(24);var i=r["a"].div.withConfig({displayName:"Meta",componentId:"gi0p4q-0"})(["margin-bottom:20px;color:#777;"]);var l=function(e){var t=e.date;return o.a.createElement(i,null,t)};var h=r["a"].article.withConfig({displayName:"Post__Article",componentId:"s1wome8d-0"})(["font-size:14px;"]);var d=t["a"]=function(e){var t=e.title,n=e.date,a=e.children;return o.a.createElement(s["a"],null,o.a.createElement(h,null,o.a.createElement(p.a,null,o.a.createElement("title",null,t)),o.a.createElement(m["a"],null,t),o.a.createElement(l,{date:n}),a))}},50:function(e,t,n){"use strict";var a=n(0);var o=n.n(a);var r=n(1);var s=r["a"].p.withConfig({displayName:"Paragraph",componentId:"s1xc2s0t-0"})(["font-size:14px;line-height:24px;margin-bottom:20px;"]);t["a"]=function(e){var t=e.children;return o.a.createElement(s,null,t)}},68:function(e,t,n){"use strict";var a=n(0);var o=n.n(a);var r=n(1);var s=r["a"].code.withConfig({displayName:"Code",componentId:"s58spfp-0"})(["color:#bd10e0;font-size:13px;line-height:22px;font-family:Operator Mono,Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace,serif;"]);var c=function e(t){var n=t;while("\n"===n[0])n=n.slice(1);return n};var p=function(e){var t=e.children;return o.a.createElement(s,null,c(t))};var m=r["a"].pre.withConfig({displayName:"Snippet",componentId:"s55njzd-0"})(["padding:20px;margin:40px 0 40px 0;white-space:pre-wrap;word-wrap:break-word;border:1px solid #eaeaea;"]);var i=function(e){var t=e.children;return o.a.createElement(m,null,o.a.createElement(p,null,t))};var l=n(50);function h(){h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e};return h.apply(this,arguments)}function d(e,t){if(null==e)return{};var n={};var a=Object.keys(e);var o,r;for(r=0;r<a.length;r++){o=a[r];if(t.indexOf(o)>=0)continue;n[o]=e[o]}if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++){o=s[r];if(t.indexOf(o)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(e,o))continue;n[o]=e[o]}}return n}var u=t["a"]=function(e){return function(t){var n=t.children,a=d(t,["children"]);return o.a.createElement(e,h({},a,{components:{p:l["a"],code:i,inlineCode:p}}),n)}}}},[310]);return{page:e.default}});