import Head from 'next/head'
import BlogPost from '../../layouts/BlogPost'
import RxPost from './rxpost.md'
import withMarkdownStyle from '../../layouts/withMarkdownStyle'

export default () => {
  const PostContent = withMarkdownStyle(RxPost)
  return (
    <BlogPost
      title={'Complex Data Fetching Made Simple With Rx'}
      date={'June 24, 2017'}
    >
      <PostContent />
    </BlogPost>
  )
}
