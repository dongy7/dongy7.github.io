import styled from 'styled-components'

const Link = styled.a`
  color: #999;
  padding: 10px;
  padding-left: ${props => (props.first ? '0px' : '10px')};
  font-size: 12px;
  font-weight: normal;
  text-transform: uppercase;
`

export default Link
