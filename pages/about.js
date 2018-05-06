import Page from '../layouts/Post'
import Title from '../components/post/Title'
import P from '../components/post/Paragraph'
import Link from '../components/post/Link'
import withMarkdownStyle from '../layouts/withMarkdownStyle'
import About from './description.md'

export default () => {
  const Content = withMarkdownStyle(About)
  return (
    <Page>
      <div className="about">
        <Title>About Me</Title>
        <Content />
      </div>
    </Page>
  )
}