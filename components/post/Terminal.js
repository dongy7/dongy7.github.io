import Terminal from 'react-animated-term'
import styled from 'styled-components'

const Styled = styled.div`margin: 40px 0 40px 0;`

const StyledTerminal = props =>
  <Styled>
    <Terminal {...props} />
  </Styled>

export default StyledTerminal