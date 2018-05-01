const prod = process.env.NODE_ENV === 'production'

module.exports = {
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/posts': { page: '/posts' },
      '/2017/fun-with-circuits': { page: '/2017/fun-with-circuits' },
      '/2017/complex-data-fetching-made-simple-with-rx': { page: '/2017/complex-data-fetching-made-simple-with-rx' },
    }
  },
  assetPrefix: prod ? '' : '',
}