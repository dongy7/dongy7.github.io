import styled from 'styled-components'

const StyledLink = styled.a.attrs({
  target: '_blank',
})``

const Link = ({ href, children }) =>
  <StyledLink href={href}>
    {children}
  </StyledLink>

export default Link