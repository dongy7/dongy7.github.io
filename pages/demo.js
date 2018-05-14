import Page from '../layouts/Post'
import Title from '../components/post/Title'
import Terminal from 'react-animated-term'

export default () => {
  const termLines = [
    {
      'text': 'ls',
      'cmd': true
    },
    {
      'text': 'index.js    node_modules    README.md    package.json',
      'cmd': false
    },
    {
      'text': '',
      'cmd': true
    }
  ]
  const spinnerFrames = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏']
  const spinnerLines = [
    {
      text: 'node example.js',
      cmd: true
    },
    {
      text: '',
      cmd: false,
      repeat: true,
      repeatCount: 2,
      frames: spinnerFrames.map(function (spinner) {
        return {
          text: spinner + ' Loading app',
          delay: 80
        }
      }),
      finalFrame: '✔ Loaded app'
    },
    {
      text: '',
      cmd: true
    }
  ]
  return (
    <Page>
      <div className="demo" style={{ width: '400px' }}>
        <Terminal lines={spinnerLines} interval={80} />
      </div>
    </Page>
  )
}