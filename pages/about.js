import Head from 'next/head'
import Page from '../layouts/Post'
import Title from '../components/post/Title'
import withMarkdownStyle from '../layouts/withMarkdownStyle'
import About from '../markdown/about.md'

const AboutPage = () => {
  const Content = withMarkdownStyle(About)
  return (
    <Page>
      <Head>
        <title>About</title>
      </Head>
      <div className="about">
        <Title>About Me</Title>
        <Content />
      </div>
    </Page>
  )
}

export default AboutPage