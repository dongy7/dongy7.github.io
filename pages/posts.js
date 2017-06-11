import Page from '../layouts/Main';
import Post from './Post';
import { posts } from '../posts';

export default () =>
  <Page>
    <div className="posts">
      {posts.map(({ id, date, title }) =>
        <Post id={id} key={id} date={date} title={title} />
      )}
    </div>
  </Page>;
