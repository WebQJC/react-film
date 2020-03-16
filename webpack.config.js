const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin') // 导入 在内存中自动生成 index 页面的插件


// 创建一个插件的实例对象
const htmlPlugin = new HtmlWebPackPlugin({
    template: path.join(__dirname, './src/index.html'), // 源文件
    filename: 'index.html' // 生成的内存中首页的名称
  })


module.exports = {
    mode: 'development', // development   production

    plugins: [
        htmlPlugin
      ],
      module: { // 所有第三方 模块的配置规则
        rules: [ // 第三方匹配规则
          { test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/ }, // 千万别忘记添加 exclude 排除项
          { test: /\.css$/, use: ['style-loader', 'css-loader'] }, // 通过 为 css-loader 添加 modules 参数，启用 CSS 的模块化
          { test: /\.scss$/, use: ['style-loader', 'css-loader?modules&localIdentName=[name]_[local]-[hash:8]', 'sass-loader'] },
          { test: /\.(png|gif|bmp|jpg)$/, use: 'url-loader?limit=43960&name=[hash:8]-[name].[ext]' },
          // {test: /\.json$/, use: 'json-loader'}
         
          // ?modules&localIdentName=[name]_[local]-[hash:5]
        ]
      }
}