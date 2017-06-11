export default ({ children }) =>
  <h1>
    <a href="#">{children}</a>
    <style jsx>{`
      h1 {
        font-weight: 500;
        margin-bottom: 10px;
      }
      a {
        color: #000;
        text-decoration: none;
      }
      a:hover {
        background-color: #000;
        color: #fff;
      }
    `}</style>
  </h1>;
