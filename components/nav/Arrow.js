import styled from 'styled-components'

const Menu = styled.div`
  display: None;
  width: 40px;
  height: 40px;

  @media screen and (max-width: 950px) {
    fill: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 28px;
    right: 20px;
    transition: transform 0.2s ease;
    transform: ${props => (props.toggled ? 'rotate(180deg)' : '')};
  }
`

export default ({ onClick, toggled }) =>
  <Menu toggled={toggled}>
    <svg
      width="27px"
      height="14px"
      viewBox="0 0 27 14"
      version="1.1"
      style={{ fill: 'inherit' }}
      onClick={() => onClick()}
    >
      <g id="Page-1" stroke="none" strokeWidth="1" fillRule="evenodd">
        <polygon
          id="Arrow"
          fillRule="nonzero"
          points="13.4999996 13.9214282 0.6 1.17499997 1.82857139 0.1 13.4999996 11.7714282 25.1714278 0.1 26.3999992 1.17499997"
        />
      </g>
    </svg>
  </Menu>
