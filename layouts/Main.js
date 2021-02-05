import Link from 'next/link'
import Meta from '../components/Meta'
import Navbar from '../components/nav/Navbar'
import { LeftNav, RightNav } from '../components/nav/Navbar'
import NavLink from '../components/nav/Link'
import MainContainer from '../components/Container'
import ProjectContainer from '../components/ProjectContainer'

const Main = ({ children, project }) => {
  const Container = project ? ProjectContainer : MainContainer
  return (
    <div>
      <Navbar>
        <LeftNav>
          <Link href="/" passHref>
            <NavLink first>Home</NavLink>
          </Link>
          <Link href="/about" passHref>
            <NavLink>About</NavLink>
          </Link>
          <Link href="/projects" passHref>
            <NavLink>Projects</NavLink>
          </Link>
          <Link href="/posts" passHref>
            <NavLink>Posts</NavLink>
          </Link>
        </LeftNav>
        <RightNav>
          <NavLink href="https://github.com/dongy7/" newTab>
            <i className="fab fa-github fa-lg" />
          </NavLink>
          <NavLink href="https://www.linkedin.com/in/dongy7/" newTab>
            <i className="fab fa-linkedin fa-lg" />
          </NavLink>
          <NavLink href="mailto:dongy7@gmail.com" newTab>
            <i className="fas fa-envelope fa-lg" />
          </NavLink>
        </RightNav>
      </Navbar>
      <Container>
        {children}
        <Meta />
      </Container>
    </div>
  )
}

export default Main