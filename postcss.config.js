module.exports = {
  'plugins': {
    'postcss-px-to-viewport-opt': {
      // 设计稿宽度
      viewportWidth: 750,
      // 设计稿高度，可以不指定
      // viewportHeight: 1230,
      // px to vw无法整除时，保留几位小数
      unitPrecision: 3,
      // 转换成vw单位
      viewportUnit: 'vw',
      // 不转换的类名
      selectorBlackList: ['.ignore', '.hairlines', '.vux-number-selector-plus', '.vux-number-selector-sub'],
      // 小于1px不转换
      minPixelValue: 1,
      // 允许媒体查询中转换
      mediaQuery: false,
      exclude: /(\/|\\)(node_modules)(\/|\\)/,
      keepComment: 'no'
    }
  }
}
