import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('../../src', import.meta.url))
    }
  },
  build: {
    outDir: '../../src/main/resources/static',
  }
  
})




/**
 * vue.config.js
 */
// const path = require('path');

// module.exports = {
//     css: {
//         sourceMap: true,
//     },

//     publicPath: '/',
//     outputDir: 'src/main/resources/static',
//     lintOnSave: false,
//     pages: {
//         index: {
//             entry: 'src/vue/main.js',
//            // template: 'src/main/resources/static/index.html',
//             filename: 'index.html',
//         },
//     },
//     configureWebpack: {
//         resolve: {
//             alias: require('./alias.config.js').webpack
//         },
//         performance: {
//             maxAssetSize: 500000,
//         },
//     },
//     devServer: {
//         proxy: "http://localhost:8080"
//     },
//     transpileDependencies: ['vuex-persist']
// };
