import styled from 'styled-components'

const Code = styled.code`
  color: #bd10e0;
  font-size: 13px;
  line-height: 22px;
  font-family: Operator Mono, Menlo, Monaco, Lucida Console, Liberation Mono,
    DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif;
`

const stripLeadingNewline = text => {
  if (text[0] === '\n') {
    return text.slice(1)
  } else {
    return text
  }
}

export default ({ children }) =>
  <Code>
    {stripLeadingNewline(children)}
  </Code>
