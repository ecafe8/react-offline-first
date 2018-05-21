### 如何升级成为支持离线模式的页面

1. 安装 **offline-plugin** (sinx 需要 1.2.5+)
```sh
yarn add -D offline-plugin
```

2. 添加 **offlinePlugin.config.js** 配置文件
```js
module.exports = {
  responseStrategy: 'cache-first', // 'cache-first' | 'network-first' 响应策略。是否首先使用缓存或网络进行响应。
  externals: [], // 允许您指定要缓存的其他（在构建过程的外部）URL。 例如 淘宝图片空间的一些图片或视频。
  excludes: [], // 需要排除的文件。默认：['**/.*', '**/*.map', '**/*.gz']
  ServiceWorker: {
    output: 'sw.min.js',
    minify: true,
  }
};
```

3. 在入口js里添加install方法，例如 src/index.js 里增加如下代码：
```js
import * as OfflinePluginRuntime from 'offline-plugin/runtime';
OfflinePluginRuntime.install();
```

4. That's all.


#### 如何调试

**F12 -> Application -> Service Workers 和 Clear storage**
