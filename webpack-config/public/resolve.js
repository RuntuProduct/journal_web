const path = require('path')

module.exports = ({
  SRC,
}) => {
  return {
    extensions: ['.js', '.jsx'],
    alias: {
      '@': SRC,
      '@layout': path.resolve(SRC, './components/layout'),
      '@services': path.resolve(SRC, 'services'),
      '@static': path.resolve(SRC, 'static'),
    },
  }
}
