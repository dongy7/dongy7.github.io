import styled from 'styled-components'

const Header = styled.header`
  max-width: 900px;
  margin: auto;
  padding: 30px 0;
  position: relative;
`

const Nav = styled.div`
  margin-top: -2px;
  padding: 10px;
  padding-right: 0;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`

export default ({ children }) =>
  <div>
    <Header>
      <div className="nav-container">
        <Nav>
          {children}
        </Nav>
      </div>
    </Header>
  </div>
