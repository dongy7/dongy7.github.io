import styled from 'styled-components'

const StyledMeta = styled.div`
  margin-bottom: 20px;
  color: #777;
`

const Meta = ({ date }) =>
  <StyledMeta>
    {date}
  </StyledMeta>

export default Meta