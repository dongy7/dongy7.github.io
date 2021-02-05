import styled from 'styled-components'

const StyledParagraph = styled.p`
  font-size: 14px;
  line-height: 24px;
  margin-bottom: 20px;
`

const Paragraph = ({ children }) =>
  <StyledParagraph>
    {children}
  </StyledParagraph>

export default Paragraph