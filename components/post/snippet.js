export default ({ children }) =>
  <pre>
    <code>{children}</code>
    <style jsx>{`
      pre {
        line-height: 20px;
        margin-bottom: 20px;
        margin-top: 20px;
        font-size: 13px;
        border: 1px solid;
        padding-left: 20px;
        padding-bottom: 20px;
        font-family: Menlo,
          Monaco,
          Lucida Console,
          Liberation Mono,
          DejaVu Sans Mono,
          Bitstream Vera Sans Mono,
          Courier New,
          monospace,
          serif;
        overflow-x: scroll;
      }
      code {
        color: #999;
      }
    `}</style>
  </pre>;
