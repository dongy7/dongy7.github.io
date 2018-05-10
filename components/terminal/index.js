import styled, { css } from 'styled-components'

const Window = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid rgb(51, 51, 51);
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 5px 0px;
  background: rgb(0, 0, 0);
`

const Terminal = styled.div`
  width: 100%;
  height: 290px;
  
  @(min-width: 768px) {
    width: 360px;
    height: 230px;
  }
`

const Header = styled.div`
  width: 100%;
  height: 36px;
  position: absolute;
`

const Button = styled.span`
  border-radius: 50%;
  display: inline-block;
  width: 12px;
  height: 12px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${props => props.close && css`
    background-color: rgb(255, 95, 86);
    left: 13px;
  `}
  ${props => props.minimize && css`
    background-color: rgb(255, 189, 46);
    left: 33px;
  `}
  ${props => props.maximize && css`
    background-color: rgb(39, 201, 63);
    left: 53px;
  `}
`

const Body = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  padding-top: 43px;
  position: absolute;
  overflow: auto;
`

const Console = styled.div`
  color: rgb(255, 255, 255);
  font-size: 12px;
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif;
  line-height: 24px;
  margin: 0px 16px;
`

const Code = styled.pre`
  font-size: 12px;
  font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif;
  line-height: 20px;
  margin: 0px;
  white-space: pre-wrap;
`

const Prompt = styled.span`
  color: rgb(204, 204, 204);
`

const Carret = styled.span`
  background: #f81ce5;
  display: inline-block;
  width: 7px;
  height: 15px;
  vertical-align: middle;
`

const renderLines = (lines) => {
  return lines.map(line => {
    return (
      <React.Fragment>
        {line.cmd ? <Prompt>$ </Prompt> : ''}
        {line.text}
        {line.current ? <Carret /> : ''}
        <br />
      </React.Fragment>
    )
  })
}

export default ({ children }) => {
  return (
    <Terminal>
      <Window>
        <Header>
          <Button close />
          <Button minimize />
          <Button maximize />
        </Header>
        <Body>
          <Console>
            <Code>
              {renderLines(children)}
            </Code>
          </Console>
        </Body>
      </Window>
    </Terminal>
  )
}