import Page from '../layouts/main';
import Post from './post';
import { posts } from '../posts';

export default () =>
  <Page>
    <div className="posts">
      {posts.map(({ id, date, title }) =>
        <Post id={id} key={id} date={date} title={title} />
      )}
    </div>
  </Page>;
