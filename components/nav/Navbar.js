import styled from 'styled-components'
import Arrow from './Arrow'

const Header = styled.header`
  max-width: 900px;
  margin: auto;
  padding: 30px 0;
  position: relative;

  @media screen and (max-width: 950px) {
    text-align: center;
  }
`

const NavContainer = styled.div`
  @media screen and (max-width: 950px) {
    display: ${props => (props.toggled ? 'block' : 'none')};
    padding: 20px;
    background: #fff;
    width: 100%;
    min-height: 90vh;
    z-index: 1;
  }
`

const Nav = styled.div`
  margin-top: -2px;
  padding-right: 0;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  @media screen and (max-width: 950px) {
    position: relative;
    padding: 0;
    left: 0;
    top: 20px;
    transform: none;
  }
`

export default class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      toggled: false,
    }
  }

  render() {
    return (
      <div>
        <Header>
          <Arrow
            onClick={() => this.setState({ toggled: !this.state.toggled })}
            toggled={this.state.toggled}
          />
          <NavContainer toggled={this.state.toggled}>
            <Nav>
              {this.props.children}
            </Nav>
          </NavContainer>
        </Header>
      </div>
    )
  }
}
