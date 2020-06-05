// 全局变量(在引入store之前引用，否则引入store时里面用到的G中的变量还没有初始化会报错)
import './G';

// 页面头部加载条
import '../ap-base/static/js/pace/pace.min';

// element组件引入
import './element.js';

// 引入bootstrap
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/less/bootstrap.less';

// 引入ap样式
import '../ap-base/static/css/main.less';

// 引入图标库
import '../ap-base/static/fonts/font-class/iconfont.css';
// import './ap-base/static/fonts/mh-icon/iconfont.css';
