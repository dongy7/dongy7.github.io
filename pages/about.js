import Page from '../layouts/Post'
import Title from '../components/post/Title'
import P from '../components/post/Paragraph'
import Link from '../components/post/Link'

export default () =>
  <Page>
    <div className="about">
      <Title>About Me</Title>
      <P>
        I'm currently studying Computer Science at the University of North
        Carolina at Chapel Hill. I'm passionate about open and web technologies.
        Feel free to reach out to <Link to={'mailto:dongy7@gmail.com'}>
          me
        </Link>{' '}
        if you are interested in working with me.
      </P>
    </div>
  </Page>
