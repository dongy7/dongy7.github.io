import Link from 'next/prefetch';

export default () =>
  <div className="nav">
    <ul id="navlist">
      <li>
        <Link href="/"><a>Home</a></Link>
      </li>
      <li>
        <Link href="/"><a>About</a></Link>
      </li>
    </ul>
    <style jsx>{`
      li {
        display: inline;
        list-style-type: none;
        padding-right: 20px;
      }

      a {
        text-decoration: none;
      }

      ul {
        padding-left: 0px;
      }

      .nav {
        padding-bottom: 50px;
      }

      @media (max-width: 500px) {
        .nav {
          padding-bottom: 20px;
        }
      }
    `}</style>
  </div>;
