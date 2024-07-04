// packages/shared/vite.config.ts
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    // 产物输出目录，默认值就是 dist。我们使用默认值，注释掉此字段。
    // outDir: 'dist',

    // 参考：https://cn.vitejs.dev/config/build-options.html#build-lib
    lib: {
      // 构建的入口文件
      entry: './src/index.ts',

      // 产物的生成格式，默认为 ['es', 'umd']。我们使用默认值，注释掉此字段。
      // formats: ['es', 'umd'],

      // 当产物为 umd、iife 格式时，该模块暴露的全局变量名称
      name: 'VueUI',
      // 产物文件名称
      fileName: 'vue-ui',
    },
    // 为了方便学习，查看构建产物，将此置为 false，不要混淆产物代码
    minify: false,
    rollupOptions: {
      external: [
        // 除了 @monitor/shared，未来可能还会依赖其他内部模块，不如用正则表达式将 @openxui 开头的依赖项一起处理掉
        /@monitor.*/, 
        'vue'
      ],
    },
  }
})
