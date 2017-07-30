import Head from 'next/head'
import Title from '../../components/post/title'
import Post from '../../layouts/post'
import { H2, H3 } from '../../components/post/heading'
import Code from '../../components/post/code'
import Snippet from '../../components/post/snippet'
import P from '../../components/post/paragraph'
import Meta from '../../components/post/meta'
import Link from '../../components/post/link'

export default () =>
  <Post>
    <Head>
      <title>Complex Data Fetching Made Simple With Rx</title>
    </Head>
    <Title>Complex Data Fetching Made Simple With Rx</Title>
    <Meta date="June 24, 2017" />
    <P>
      This post assumes a basic understanding of{' '}
      <Link to="http://reactivex.io/rxjs/">RxJS</Link>. If you don't then, I
      highly recommend you read the following{' '}
      <Link to="https://gist.github.com/staltz/868e7e9bc2a7b8c1f754">
        intro
      </Link>{' '}
      that gives you the basic idea behind Rx and observables.
    </P>
    <P>
      Have you ever had to work with a complex query where you had to chain and
      nest multiple promises in order to get the data you wanted? I can tell you
      I have and it can get complex very quickly.
    </P>

    <P>
      Consider this query: I want to get the second page of the top stories on
      Hacker News where each page contains 30 posts. Now, Hacker News provides
      an excellent real time{' '}
      <Link to="https://github.com/HackerNews/API">API</Link>, but how do we get
      the specific posts that we want? The{' '}
      <Link to="https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty">
        endpoint
      </Link>{' '}
      provided by Firebase simply gives us the id of the top 500 posts for a
      specific category.
    </P>

    <P>
      Let's think about how we would accomplish this in Rx. First, we want to
      create a stream of the top 500 post ids from the Firebase API. We can do
      this with the <Code>ajax</Code> operator provided by <Code>RxDom</Code>.
    </P>

    <Snippet>
      {`
const source = Rx.Observable
  .ajax('https://hacker-news.firebaseio.com/v0/topstories.json')`}
    </Snippet>

    <P>
      Let's subscribe to our observable and see what we get by logging to the
      console:
    </P>

    <Snippet>
      {`
source.subscribe(x => console.log(x))`}
    </Snippet>

    <P>You should see something like this:</P>
    <Snippet>
      {`
[object Object] {
  originalEvent: [object Event] {
    AT_TARGET: 2,
    bubbles: false,
    BUBBLING_PHASE: 3,
    cancelable: false,
    cancelBubble: false,
    CAPTURING_PHASE: 1,
    composed: false,
    composedPath: function composedPath() { [native code] },
    currentTarget: [object XMLHttpRequest] { ... },
    defaultPrevented: false,
    eventPhase: 2,
    initEvent: function initEvent() { [native code] },
    isTrusted: true,
    NONE: 0,
    path: [],
    preventDefault: function preventDefault() { [native code] },
    returnValue: true,
    srcElement: [circular object XMLHttpRequest],
    stopImmediatePropagation: function stopImmediatePropagation() { [native code] },
    stopPropagation: function stopPropagation() { [native code] },
    target: [circular object XMLHttpRequest],
    timeStamp: 102.11500000000001,
    type: "readystatechange"
  },
  request: [object Object] {
    async: true,
    body: undefined,
    createXHR: function () {
                  return this.crossDomain ? getCORSRequest.call(this) : getXMLHttpRequest();
              },
    crossDomain: false,
    headers: [object Object] { ... },
    method: "GET",
    responseType: "json",
    timeout: 0,
    url: "https://hacker-news.firebaseio.com/v0/topstories.json",
    withCredentials: false
  },
  response: [14625795, 14626107, 14626295, 14624901, 14625702, 14625706, 14625542, 14625257, 14624482, 14625665, 14625015, 14620608, 14624511, 14625653, 14625499, 14621347, 14625100, 14624600, 14622006, 14621101, 14619360, 14625302, 14624935, 14624796, 14616951, 14623669, 14624090, 14625284, 14620990, 14618455, 14618830, 14612680, 14622947, 14624038, 14618256, 14621806, 14623937, 14624904, 14622181, 14625422, 14618853, 14617713, 14618128, 14619888, 14623821, 14619336, 14623650, 14619623, 14618751, 14622608, 14620848, 14620479, 14619629, 14621060, 14620270, 14624818, 14612537, 14624655, 14621663, 14612449, 14621397, 14618239, 14621790, 14624560, 14617751, 14616196, 14613139, 14622528, 14614304, 14620410, 14616997, 14613443, 14610110, 14612440, 14617453, 14617605, 14620387, 14623427, 14618564, 14623438, 14620787, 14624143, 14617784, 14605342, 14625001, 14610472, 14624129, 14614788, 14617966, 14613982, 14619808, 14617392, 14625192, 14619725, 14615785, 14614673, 14623559, 14624665, 14621359, 14621527, 14617028, 14611655, 14600873, 14612927, 14602595, 14618511, 14609321, 14624713, 14617731, 14625989, 14614540, 14602836, 14619886, 14612990, 14623789, 14612685, 14623375, 14611121, 14613774, 14600799, 14608916, 14614196, 14613986, 14597344, 14613557, 14596613, 14618555, 14624639, 14618308, 14624161, 14616146, 14598081, 14611149, 14624344, 14615414, 14623031, 14622221, 14610875, 14618782, 14613458, 14607723, 14615591, 14603879, 14618656, 14620987, 14617640, 14617601, 14609215, 14615084, 14605673, 14621301, 14616440, 14615182, 14617901, 14599530, 14610893, 14619183, 14614521, 14613756, 14612819, 14604617, 14622576, 14614059, 14617859, 14608894, 14614863, 14613742, 14616550, 14622753, 14597485, 14605373, 14613142, 14620223, 14608459, 14598314, 14624541, 14602674, 14610297, 14612605, 14608663, 14618109, 14620334, 14622041, 14613612, 14619445, 14605313, 14599606, 14617078, 14612171, 14609472, 14605179, 14617059, 14605882, 14622384, 14608131, 14605200, 14618608, 14597544, 14602157, 14609415, 14600419, 14612467, 14615334, 14616509, 14610882, 14602852, 14609525, 14608166, 14600621, 14601809, 14599668, 14609824, 14617365, 14608918, 14606536, 14606512, 14614429, 14612612, 14622101, 14605202, 14613156, 14623990, 14599908, 14599783, 14600443, 14612332, 14610986, 14615642, 14619861, 14606812, 14598150, 14618334, 14608523, 14613871, 14600102, 14609627, 14608232, 14614706, 14603131, 14614437, 14598469, 14611106, 14599337, 14623753, 14604500, 14604946, 14608959, 14621335, 14609184, 14618779, 14612900, 14613180, 14622088, 14604060, 14612807, 14605927, 14599978, 14608887, 14596611, 14609308, 14599003, 14597440, 14598098, 14607144, 14596991, 14606667, 14619214, 14605699, 14619079, 14602439, 14603669, 14622870, 14598636, 14606732, 14611839, 14601315, 14606544, 14598136, 14600282, 14610696, 14600808, 14604186, 14599687, 14604071, 14616554, 14606478, 14600079, 14624404, 14612666, 14618546, 14598459, 14605262, 14614672, 14612641, 14606509, 14609865, 14620812, 14600532, 14615214, 14605222, 14602544, 14609457, 14611914, 14614219, 14607703, 14598567, 14602880, 14603344, 14602988, 14610502, 14615934, 14597070, 14598044, 14599396, 14611299, 14604243, 14613105, 14612196, 14598266, 14596592, 14615524, 14608397, 14615437, 14599793, 14616492, 14613438, 14604927, 14613357, 14616645, 14617082, 14615753, 14612756, 14612174, 14604969, 14616998, 14608613, 14598839, 14599070, 14602584, 14598018, 14598360, 14600073, 14617350, 14615940, 14617278, 14609314, 14617199, 14617125, 14617122, 14610987, 14613622, 14598901, 14609837, 14618993, 14603933, 14619460, 14611333, 14618038, 14612198, 14606809, 14611258, 14606683, 14606057, 14605923, 14605595, 14608249, 14607458, 14598400, 14598562, 14608889, 14597739, 14605435, 14619956, 14615402, 14611436, 14615963, 14619835, 14597663, 14611154, 14614334, 14609167, 14609122, 14605208, 14609851, 14613860, 14603490, 14613688, 14608681, 14608168, 14614258, 14599436, 14623381, 14603180, 14609995, 14600686, 14604454, 14604324, 14600412, 14607389, 14618869, 14605011, 14599956, 14599772, 14599462, 14598759, 14600885, 14604514, 14612414, 14603621, 14609219, 14609218, 14599652, 14599454, 14605945, 14601853, 14597274, 14597174, 14599888, 14604726, 14604068, 14599174, 14603250, 14605501, 14606682, 14598201, 14601802, 14613005, 14604084, 14600036, 14620092, 14599148, 14612076, 14598892, 14598840, 14606679, 14614960, 14613028, 14622861, 14599117, 14601562, 14597505, 14597414, 14620382, 14621765, 14596707, 14623719, 14611399, 14600161, 14604269, 14598660, 14597060, 14597453, 14600975, 14616057],
  responseType: "json",
  status: 200,
  xhr: [circular object XMLHttpRequest]
}`}
    </Snippet>

    <P>
      We can see that the data that we're actually interested in, which is the{' '}
      <Code>ids</Code> of the articles is in the <Code>response</Code> field of
      the object. Since we are only interested in the <Code>response</Code>{' '}
      field, we can use the <Code>map</Code> operator:
    </P>

    <Snippet>
      {`
const source = Rx.Observable
  .ajax('https://hacker-news.firebaseio.com/v0/topstories.json')
  .map(res => res.response)`}
    </Snippet>

    <P>You should now see the list of all the IDs returned from the request.</P>

    <Snippet>
      {`
[14625795, 14626107, 14626295, 14624901, 14625702, 14625706, 14625542, 14625499, 14625257, 14624482, 14625665, 14625015, 14620608, 14624511, 14625653, 14621347, 14625100, 14624802, 14621101, 14624600, 14622006, 14624935, 14619360, 14625302, 14624796, 14616951, 14623669, 14624090, 14620990, 14625284, 14618455, 14618830, 14612680, 14623937, 14622947, 14624038, 14618256, 14621806, 14624904, 14622181, 14617713, 14618853, 14625422, 14618128, 14619888, 14623821, 14619336, 14623650, 14619623, 14618751, 14622608, 14620848, 14620479, 14619629, 14621060, 14620270, 14612537, 14624818, 14624655, 14621663, 14612449, 14621397, 14618239, 14621790, 14624560, 14617751, 14616196, 14613139, 14622528, 14614304, 14620410, 14616997, 14613443, 14610110, 14612440, 14617453, 14617605, 14620387, 14623427, 14618564, 14623438, 14620787, 14617784, 14624143, 14605342, 14625001, 14614788, 14610472, 14624129, 14617966, 14613982, 14619808, 14617392, 14619725, 14615785, 14614673, 14625192, 14623559, 14621359, 14624665, 14621527, 14611655, 14617028, 14600873, 14612927, 14602595, 14618511, 14609321, 14624713, 14617731, 14614540, 14602836, 14619886, 14612990, 14623789, 14612685, 14623375, 14611121, 14613774, 14600799, 14608916, 14625989, 14614196, 14613986, 14597344, 14613557, 14596613, 14618555, 14618308, 14624639, 14624161, 14616146, 14598081, 14611149, 14615414, 14624344, 14623031, 14622221, 14610875, 14618782, 14613458, 14607723, 14615591, 14603879, 14618656, 14620987, 14617640, 14609215, 14617601, 14615084, 14605673, 14621301, 14616440, 14615182, 14617901, 14599530, 14610893, 14619183, 14614521, 14613756, 14612819, 14604617, 14622576, 14614059, 14617859, 14608894, 14614863, 14613742, 14616550, 14622753, 14597485, 14605373, 14613142, 14620223, 14608459, 14598314, 14624541, 14602674, 14610297, 14612605, 14608663, 14618109, 14620334, 14613612, 14622041, 14605313, 14619445, 14599606, 14617078, 14609472, 14612171, 14605179, 14617059, 14605882, 14622384, 14608131, 14605200, 14597544, 14602157, 14618608, 14609415, 14600419, 14612467, 14615334, 14616509, 14610882, 14602852, 14609525, 14608166, 14600621, 14601809, 14599668, 14609824, 14617365, 14608918, 14606536, 14606512, 14614429, 14612612, 14605202, 14613156, 14622101, 14599908, 14623990, 14599783, 14600443, 14612332, 14610986, 14615642, 14619861, 14606812, 14598150, 14618334, 14608523, 14613871, 14600102, 14609627, 14608232, 14614706, 14603131, 14598469, 14614437, 14611106, 14599337, 14604500, 14623753, 14604946, 14608959, 14609184, 14621335, 14618779, 14612900, 14613180, 14622088, 14604060, 14612807, 14605927, 14599978, 14608887, 14596611, 14609308, 14599003, 14597440, 14598098, 14607144, 14596991, 14606667, 14619214, 14605699, 14619079, 14602439, 14603669, 14622870, 14598636, 14606732, 14611839, 14601315, 14606544, 14598136, 14600282, 14610696, 14600808, 14604186, 14599687, 14604071, 14616554, 14606478, 14600079, 14612666, 14624404, 14618546, 14598459, 14605262, 14614672, 14612641, 14606509, 14609865, 14620812, 14600532, 14615214, 14605222, 14602544, 14609457, 14611914, 14614219, 14607703, 14598567, 14602880, 14603344, 14602988, 14610502, 14615934, 14597070, 14598044, 14599396, 14611299, 14604243, 14613105, 14612196, 14598266, 14596592, 14615524, 14608397, 14615437, 14599793, 14616492, 14613438, 14604927, 14613357, 14616645, 14617082, 14615753, 14612756, 14612174, 14604969, 14616998, 14608613, 14598839, 14599070, 14602584, 14598018, 14598360, 14600073, 14617350, 14615940, 14617278, 14609314, 14617199, 14617125, 14617122, 14610987, 14613622, 14598901, 14609837, 14603933, 14618993, 14611333, 14619460, 14618038, 14612198, 14606809, 14611258, 14606683, 14606057, 14605923, 14605595, 14608249, 14607458, 14598400, 14598562, 14608889, 14597739, 14605435, 14619956, 14615402, 14611436, 14615963, 14619835, 14597663, 14611154, 14614334, 14609167, 14609122, 14605208, 14609851, 14613860, 14603490, 14613688, 14608681, 14608168, 14614258, 14599436, 14623381, 14603180, 14609995, 14600686, 14604454, 14604324, 14600412, 14607389, 14618869, 14605011, 14599956, 14599772, 14599462, 14598759, 14600885, 14604514, 14612414, 14603621, 14609219, 14609218, 14599652, 14599454, 14605945, 14601853, 14597274, 14597174, 14599888, 14604726, 14604068, 14599174, 14603250, 14605501, 14606682, 14598201, 14601802, 14613005, 14604084, 14600036, 14620092, 14599148, 14612076, 14598892, 14598840, 14606679, 14614960, 14613028, 14622861, 14599117, 14601562, 14597505, 14597414, 14620382, 14621765, 14596707, 14623719, 14611399, 14600161, 14604269, 14598660, 14597060, 14597453, 14600975, 14616057]`}
    </Snippet>

    <P>
      Now let's think about how we would filter the IDs so that we are working
      with just the IDs that are in the range specified a page number and the
      number of items per page. We could simply just fetch all of the articles
      from the list of IDs and get the articles that we need using array
      operations. However, using this approach, we are potentially throwing away
      most of the data that we fetch.
    </P>

    <P>
      Let's say we have a stream of post IDs. We'll also assume that a page
      contains 30 posts and we want to get the post IDs for the second page. In
      this scenario we want to skip the first 30 post IDs and get the next 30
      post IDs. Conveniently, Rx provides the{' '}
      <Link to="http://reactivex.io/documentation/operators/skip.html">
        skip
      </Link>{' '}
      operator to skip a specified number of items.
    </P>

    <Snippet>
      {`
const itemsPerPage = 30
const page = 2

const source = Rx.Observable
  .ajax('https://hacker-news.firebaseio.com/v0/topstories.json')
  .map(res => res.response)
  .skip(itemsPerPage * (page - 1))`}
    </Snippet>

    <P>
      When we run this code, you'll see no output in the conole. Why? Remember
      that we transformed our response into an array of IDs. We aren't dealing
      with a stream of IDs but rather an array of IDs. So we need to create a
      new Observable from the response array. We can accomplish this using the{' '}
      <Link to="http://reactivex.io/documentation/operators/from.html">
        from
      </Link>{' '}
      operator.
    </P>

    <Snippet>
      {`
const source = Rx.Observable
  .ajax('https://hacker-news.firebaseio.com/v0/topstories.json')
  .map(res => Rx.Observable.from(res.response))
  .skip(itemsPerPage * (page - 1))`}
    </Snippet>

    <P>
      Let's try running this code. Again, we get nothing logged to the console.
      To see why, let's take a look at the second operator. We have mapped our
      response array into another observable, but we have not subscribed to it.
      In order to emit the items that are being emitted by our second
      observable, we need to make use of the{' '}
      <Link to="http://reactivex.io/documentation/operators/flatmap.html">
        flatMap
      </Link>{' '}
      operator. We are going to use a variant of <Code>flatMap</Code> called{' '}
      <Code>concatMap</Code>. <Code>concatMap</Code> preserves the order of the
      items emitted by the observable, which we need because we want to get a
      certain part of the posts in the ordering.
    </P>

    <Snippet>
      {`
const source = Rx.Observable
  .ajax('https://hacker-news.firebaseio.com/v0/topstories.json')
  .concatMap(res => Rx.Observable.from(res.response))
  .skip(itemsPerPage * (page - 1))`}
    </Snippet>

    <P>
      Now when we run the code, we get the IDs of posts excluding the first 30
      items.
    </P>

    <Snippet>
      {`
"14621347"
"14625257"
"14625653"
"14625736"
"14625302"
...`}
    </Snippet>

    <P>
      Now, we just need to get the number posts that are needed for a page. We
      can use the{' '}
      <Link to="http://reactivex.io/documentation/operators/take.html">
        take
      </Link>{' '}
      operator to get the first <Code>n</Code> elements from the stream.
    </P>

    <Snippet>
      {`
const source = Rx.Observable
  .ajax('https://hacker-news.firebaseio.com/v0/topstories.json')
  .concatMap(res => Rx.Observable.from(res.response))
  .skip(itemsPerPage * (page - 1))
  .take(itemsPerPage)`}
    </Snippet>

    <P>You should now see 30 post IDs in the console.</P>

    <Snippet>
      {`
"14624090"
"14620990"
"14625212"
"14618455"
"14618830"
"14612680"
"14618256"
"14622947"
"14621806"
"14624038"
"14625882"
"14623937"
"14622181"
"14617713"
"14618853"
"14618128"
"14624904"
"14619888"
"14619336"
"14623821"
"14619623"
"14624560"
"14623650"
"14618751"
"14625422"
"14622608"
"14620848"
"14620479"
"14621663"
"14619629"`}
    </Snippet>

    <P>
      Great, now that we have the IDs of the posts that we want to fetch, we
      need to get the data associated with each post. We can use the item
      endpoint provided by the Firebase API. We'll use the <Code>ajax</Code>{' '}
      operator to create a stream of reponse objects. Once again, we'll need to
      make use of the <Code>concatMap</Code> operator to merge an observable of
      observables into a single stream.
    </P>

    <Snippet>
      {`
const source = Rx.Observable
  .ajax('https://hacker-news.firebaseio.com/v0/topstories.json')
  .concatMap(res => Rx.Observable.from(res.response))
  .skip(itemsPerPage * (page - 1))
  .take(itemsPerPage)
  .concatMap(id => Rx.Observable.ajax(\`https://hacker-news.firebaseio.com/v0/item/\${id}.json\`))
  .map(res => res.response)`}
    </Snippet>

    <P>
      In the console, you should now see post objects corresponding to the IDs.
    </P>

    <Snippet>
      {`
[object Object] {
  by: "kawera",
  descendants: 11,
  id: 14624090,
  kids: [14624882, 14626280, 14624880, 14625548],
  score: 38,
  time: 1498271415,
  title: "Voice and the uncanny valley of AI",
  type: "story",
  url: "http://ben-evans.com/benedictevans/2017/2/22/voice-and-the-uncanny-valley-of-ai"
}
...`}
    </Snippet>

    <P>
      To make it easy to consume the result of this stream, we'll merge all of
      the post objects into a single array. We can accomplish this using the{' '}
      <Link to="http://reactivex.io/documentation/operators/scan.html">
        scan
      </Link>{' '}
      operator. You can think of <Code>scan</Code> as a <Code>reduce</Code>{' '}
      where a function is applied to the item emitted by the observable then the
      result is emitted. In our case, we'll push items from stream onto an
      array.
    </P>

    <Snippet>
      {`
const source = Rx.Observable
  .ajax('https://hacker-news.firebaseio.com/v0/topstories.json')
  .concatMap(res => Rx.Observable.from(res.response))
  .skip(itemsPerPage * (page - 1))
  .take(itemsPerPage)
  .concatMap(id => Rx.Observable.ajax(\`https://hacker-news.firebaseio.com/v0/item/\${id}.json\`))
  .map(res => res.response)
  .scan((posts, post) => {
    posts.push(post)
    return posts
  }, [])`}
    </Snippet>

    <P>
      Taking a look at the output, you can see that posts are being accumulated
      into a single array:
    </P>

    <Snippet>
      {`
[[object Object] {
  by: "vinnyglennon",
  descendants: 52,
  id: 14623669,
  kids: [14624652, 14624755, 14624888, 14626483, 14624514, 14624426, 14624746, 14624715, 14625915, 14624579, 14625877, 14625655, 14625748, 14624911, 14625745],
  score: 130,
  time: 1498262659,
  title: "How did a 30 year-old Su-22 defeat a modern AIM-9X?",
  type: "story",
  url: "http://www.combataircraft.net/2017/06/23/how-did-a-30-year-old-su-22-defeat-a-modern-aim-9x/"
}]
[[object Object] {
  by: "vinnyglennon",
  descendants: 52,
  id: 14623669,
  kids: [14624652, 14624755, 14624888, 14626483, 14624514, 14624426, 14624746, 14624715, 14625915, 14624579, 14625877, 14625655, 14625748, 14624911, 14625745],
  score: 130,
  time: 1498262659,
  title: "How did a 30 year-old Su-22 defeat a modern AIM-9X?",
  type: "story",
  url: "http://www.combataircraft.net/2017/06/23/how-did-a-30-year-old-su-22-defeat-a-modern-aim-9x/"
}, [object Object] {
  by: "kawera",
  descendants: 11,
  id: 14624090,
  kids: [14624882, 14624880, 14626280, 14625548],
  score: 38,
  time: 1498271415,
  title: "Voice and the uncanny valley of AI",
  type: "story",
  url: "http://ben-evans.com/benedictevans/2017/2/22/voice-and-the-uncanny-valley-of-ai"
}]
...`}
    </Snippet>

    <P>
      We're only interested in the array containing all of the posts. We can use
      the{' '}
      <Link to="http://reactivex.io/documentation/operators/takelast.html">
        takeLast
      </Link>{' '}
      operator, which takes the final <Code>n</Code> elements emitted by the
      observable.
    </P>

    <Snippet>
      {`
const source = Rx.Observable
  .ajax('https://hacker-news.firebaseio.com/v0/topstories.json')
  .concatMap(res => Rx.Observable.from(res.response))
  .skip(itemsPerPage * (page - 1))
  .take(itemsPerPage)
  .concatMap(id => Rx.Observable.ajax(\`https://hacker-news.firebaseio.com/v0/item/\${id}.json\`))
  .map(res => res.response)
  .scan((posts, post) => {
    posts.push(post)
    return posts
  }, [])
  .takeLast(1)`}
    </Snippet>

    <P>
      Now when you look at the output, you should see an array of post items
      corresponding to the page number. I hope this example gave you an idea of
      the things you can do with <Code>Rx</Code>. If you want to play around
      with the example, you can checkout the{' '}
      <Link to="http://jsbin.com/yezugex/edit?js,console">JSBin</Link>.
    </P>
  </Post>
