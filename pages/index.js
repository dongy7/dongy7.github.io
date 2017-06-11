import Post from '../layouts/Post';
import Header from '../components/Header';
import P from '../components/Paragraph';
import SamplePost from './SamplePost';

export default () =>
  <div>
    <style jsx global>{`
      body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
      }
    `}</style>
    <SamplePost />
  </div>;
