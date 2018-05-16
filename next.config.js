const withCSS = require('@zeit/next-css')

const config = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  webpack: (config, { defaultLoaders }) => {
    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        defaultLoaders.babel,
        {
          loader: '@mdx-js/loader'
        }
      ]
    })

    return config
  },
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/posts': { page: '/posts' },
      '/projects': { page: '/projects' },
      '/2017/fun-with-circuits': { page: '/2017/fun-with-circuits' },
      '/2017/complex-data-fetching-made-simple-with-rx': { page: '/2017/complex-data-fetching-made-simple-with-rx' },
      '/2018/integrating-markdown-in-react-with-mdx': { page: '/2018/integrating-markdown-in-react-with-mdx' },
    }
  }
}

module.exports = withCSS(config)