const path = require('path')

const SRC = path.resolve(__dirname, './src')

export default {
  plugins: [
    'umi-plugin-dva',
  ],
  alias: {
    '@layout': path.resolve(SRC, './components/layout'),
  },
  theme: {
    '@theme_background_color': '#f0f0f0',
    '@theme_color_white': '#fff',
    // 格式类
    '@layout_spacing_vertical': '10px',  // 竖直间隔
    '@layout_spacing_horizontal': '8px', // 水平间隔
  },
}
