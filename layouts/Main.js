import Link from 'next/link'
import Meta from '../components/Meta'
import Navbar from '../components/nav/Navbar'
import { LeftNav, RightNav } from '../components/nav/Navbar'
import NavLink from '../components/nav/Link'
import Container from '../components/Container'

export default ({ children }) =>
  <div>
    <Navbar>
      <LeftNav>
        <Link prefetch href="/">
          <NavLink first>Home</NavLink>
        </Link>
        <Link prefetch href="/about">
          <NavLink>About</NavLink>
        </Link>
        <Link prefetch href="/posts">
          <NavLink>Posts</NavLink>
        </Link>
      </LeftNav>
      <RightNav>
        <Link>
          <NavLink href="https://github.com/dongy7/">
            <i class="fab fa-github fa-lg"></i>
          </NavLink>
        </Link>
        <Link>
          <NavLink href="https://www.linkedin.com/in/dongy7/">
            <i class="fab fa-linkedin fa-lg"></i>
          </NavLink>
        </Link>
        <Link>
          <NavLink href="mailto:dong@dongyeop.com">
            <i class="fas fa-envelope fa-lg"></i>
          </NavLink>
        </Link>
      </RightNav>
    </Navbar>
    <Container>
      {/* global styles and meta tags */}
      {children}
      <Meta />
    </Container>
  </div>
