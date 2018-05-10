import LazyLoad from 'react-lazyload'
import Terminal from './index'

function* termSeq(lines) {
  let lineIndex = 0
  let pos = 0
  const currLines = []
  if (lines.length === 0) {
    return []
  }

  while (true) {
    if (lineIndex < lines.length) {
      if (!lines[lineIndex].cmd) {
        currLines.push({
          text: lines[lineIndex].text,
          cmd: false,
          current: false
        })
        pos = 0
        lineIndex++
      } else if (pos == 0) {
        currLines.push({
          text: '',
          cmd: lines[lineIndex].cmd,
          current: true
        })
        pos++
      } else if (pos > lines[lineIndex].text.length) {
        currLines[lineIndex].current = (lineIndex === lines.length - 1)
        pos = 0
        lineIndex++
      } else {
        currLines[lineIndex].text = lines[lineIndex].text.substring(0, pos)
        pos++
      }
      yield currLines
    } else {
      return currLines
    }
  }
}

class Renderer extends React.Component {
  constructor(props) {
    super(props)
    this.seq = termSeq(props.lines)
    this.state = {
      lines: this.seq.next().value
    }
  }

  componentDidMount() {
    const timer = setInterval(() => {
      const { value, done } = this.seq.next()
      this.setState({
        lines: value
      })
      if (done) {
        clearInterval(timer)
      }
    }, 150)
  }

  render() {
    return (
      <Terminal>
        {this.state.lines}
      </Terminal>
    )
  }
}

const LazyRenderer = (props) =>
  <LazyLoad>
    <Renderer {...props} />
  </LazyLoad>

export default LazyRenderer