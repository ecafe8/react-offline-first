// https://github.com/NekR/offline-plugin/blob/master/docs/options.md
// https://github.com/NekR/offline-plugin/blob/master/src/default-options.js

module.exports = {
  responseStrategy: 'cache-first', // 'cache-first' | 'network-first' 响应策略。是否首先使用缓存或网络进行响应。
  externals: [], // 允许您指定要缓存的其他（在构建过程的外部）URL。 例如 淘宝图片空间的一些图片或视频。
  excludes: [], // 需要排除的文件。默认：['**/.*', '**/*.map', '**/*.gz']
  ServiceWorker: {
    output: 'sw.min.js',
    events: true, // 为ServiceWorker启用运行时事件。对于支持的事件看到Runtime的install()选项。 默认： false
    minify: true,
  }
};
