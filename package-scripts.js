const ghpages = require('gh-pages')
const npUtils = require('nps-utils')
const series = npUtils.series

const publish = function (src, branch) {
  const date = new Date().toISOString()
  const options = {
    branch: branch,
    dotfiles: true,
    message: `New build on ${date}.`
  }

  ghpages.publish(src, options, (err) => {
    console.error(err)
  })
}

module.exports = {
  scripts: {
    publish: {
      default: series(
        publish('out', 'master')
      )
    }
  }
}