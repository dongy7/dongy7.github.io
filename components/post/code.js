import styled from 'styled-components'

const Code = styled.code`
  color: #bd10e0;
  font-size: 13px;
  line-height: 22px;
  font-family: Operator Mono, Menlo, Monaco, Lucida Console, Liberation Mono,
    DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif;
`

const stripLeadingAndTrailingNewline = text => {
  let formattedText = text
  if (text[0] === '\n') {
    formattedText = text.slice(1)
  }

  if (text.slice(-1)[0] === '\n') {
    formattedText = text.slice(0, -1)
  }

  return formattedText
}

export default ({ children }) =>
  <Code>
    {stripLeadingAndTrailingNewline(children)}
  </Code>
