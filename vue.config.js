
module.exports = {
  outputDir: 'dist',
  publicPath: process.env.NODE_ENV === 'production'
    ? '/steward-helper.github.io'
    : '/'
}
