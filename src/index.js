import Layout from './layout';
import './index.less';
import * as OfflinePluginRuntime from 'offline-plugin/runtime';
OfflinePluginRuntime.install({
  onInstalled: () => {
    if (__DEV__) {
      console.log('OfflinePluginRuntime onInstalled');
    }
  },
});


ReactDom.render(
  <Layout />,
  document.getElementById('root')
);


