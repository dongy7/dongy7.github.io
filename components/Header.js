import Head from 'next/head'
import styled from 'styled-components'

const H1 = styled.h1`
  font-weight: 200;
  font-size: 32px;
`

const Header = ({ title }) =>
  <div>
    <H1>
      {title}
    </H1>
  </div>

export default Header