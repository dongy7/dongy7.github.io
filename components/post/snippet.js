import styled from 'styled-components'
import Code from './Code'

const Snippet = styled.pre`
  padding: 20px;
  margin: 40px 0 40px 0;
  white-space: pre-wrap;
  word-wrap: break-word;
  border: 1px solid #eaeaea;
`

export default ({ children }) =>
  <Snippet>
    <Code>
      {children}
    </Code>
  </Snippet>
