/* const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
 */
const path = require("path");

module.exports = {
    devServer: {
        proxy : 'http://localhost:8080'
    },
    indexPath: '../../templates/vue/index.html',
    publicPath: '/vue',
    outputDir: path.resolve(__dirname, "../backend/src/main/resources/static/vue")
}
