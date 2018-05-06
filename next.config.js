const prod = process.env.NODE_ENV === 'production'

module.exports = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  webpack: (config, { defaultLoaders }) => {
    config.module.rules.push({
      test: /\.md$/,
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
      '/2017/fun-with-circuits': { page: '/2017/fun-with-circuits' },
      '/2017/complex-data-fetching-made-simple-with-rx': { page: '/2017/complex-data-fetching-made-simple-with-rx' },
      '/2018/integrating-markdown-in-react-with-mdx': { page: '/2018/integrating-markdown-in-react-with-mdx' },
    }
  },
  assetPrefix: prod ? '' : '',
}