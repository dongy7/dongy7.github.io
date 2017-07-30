import Link from 'next/link'
import Meta from '../components/Meta'
import Navbar from '../components/nav/Navbar'
import NavLink from '../components/nav/Link'
import Container from '../components/Container'

export default ({ children }) =>
  <div>
    <Navbar>
      <Link prefetch href="/">
        <NavLink first>Home</NavLink>
      </Link>
      <Link prefetch href="/about">
        <NavLink>About</NavLink>
      </Link>
      <Link prefetch href="/posts">
        <NavLink>Posts</NavLink>
      </Link>
    </Navbar>
    <Container>
      {/* global styles and meta tags */}
      {children}
      <Meta />
    </Container>
  </div>
