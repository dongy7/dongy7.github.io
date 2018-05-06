import styled from 'styled-components'

const Project = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  text-align: left;
  border-radius: 5px;
  border: 1px solid #909497;
  padding: 5px 5px 5px 15px;
  transition: border-color 200ms ease-in-out;

  :hover {
    border : 1px solid #333;
  }
`

export default Project