import Link from 'next/prefetch'
import Meta from '../components/meta'
import Navbar from '../components/nav/Navbar'
import NavLink from '../components/nav/Link'
import Container from '../components/Container'

export default ({ children }) =>
  <div>
    <Navbar>
      <Link href="/">
        <NavLink first>Home</NavLink>
      </Link>
      <Link href="/about">
        <NavLink>About</NavLink>
      </Link>
      <Link href="/posts">
        <NavLink>Posts</NavLink>
      </Link>
    </Navbar>
    <Container>
      {/* global styles and meta tags */}
      {children}
      <Meta />
    </Container>
  </div>
