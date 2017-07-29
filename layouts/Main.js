import Link from 'next/prefetch'
import Meta from '../components/meta'
import Navbar from '../components/nav/Navbar'
import NavLink from '../components/nav/Link'

export default ({ children }) =>
  <div>
    <Navbar>
      <Link href="/">
        <NavLink>Home</NavLink>
      </Link>
      <Link href="/about">
        <NavLink>About</NavLink>
      </Link>
      <Link href="/posts">
        <NavLink>Posts</NavLink>
      </Link>
    </Navbar>
    <div className="main">
      {children}
      {/* global styles and meta tags */}
      <Meta />
      <style jsx>{`
        .main {
          padding: 25px 50px;
        }
        .logo {
          padding-bottom: 50px;
        }
        a {
          text-decoration: none;
        }
        @media (max-width: 500px) {
          .main {
            padding: 25px 15px;
          }

          .logo {
            padding-bottom: 20px;
          }
        }
      `}</style>
    </div>
  </div>
