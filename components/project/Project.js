import styled from 'styled-components'

const Project = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  text-align: left;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.12), 0 1px 5px 0 rgba(0,0,0,.2);
  padding: 5px 5px 5px 15px;
  transition: border-color 200ms ease-in-out;
  :hover {
    border : 1px solid #333;
  }
`

export default Project