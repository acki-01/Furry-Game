module.exports = {
  entry: './js/game.js',
  output: {
    filename:'./out.js'
  },
  watch: true,
  module: {
    loaders: [
      {
      test: /\.js$/,
      exclude:/node_modules/,
      loader:'babel-loader',
      query: {
        presets: ['es2015']
        }
      }
    ]
  }
}
