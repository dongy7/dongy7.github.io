import styled from 'styled-components'
import { Code } from 'react-animated-term'
const StyledSnippet = styled.pre`
  margin: 40px 0 40px 0;
  word-wrap: break-word;
`

const Snippet = ({ children }) =>
  <StyledSnippet>
    <Code white>
      {children}
    </Code>
  </StyledSnippet>

export default Snippet