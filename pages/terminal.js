import Page from '../layouts/Post'
import Title from '../components/post/Title'
import TerminalPost from '../markdown/terminal.mdx'
import withMarkdownStyle from '../layouts/withMarkdownStyle'

const Terminal = () => {
  const Content = withMarkdownStyle(TerminalPost)
  return (
    <Page>
      <Content />
    </Page>
  )
}

export default Terminal