const config = {
  system_code: '22c8ef91873fa4389b5300bdd3d155be',
  // base_api: 'http://111.33.152.150:10003/AP-MANAGE',
  // base_api: 'http://192.168.125.123:8081/JBXXTJFX',
  base_api: 'http://111.33.152.150:10102/iiprp',
  // "base_api": "http://4w1cabdcii.bjhttp.cn/JBTJFX",
  title: '举报信息统计分析dev',
  showLogo: false,
  // userManual: [
  //   {
  //     docName: '研判情报中枢系统-用户使用手册v2.0.20171206.doc',
  //     address:
  //       'http://10.20.30.220:80/group12/M00/03/DE/ChQeU1o4hJeABpB1ADPGAO0Q9Lo716.doc'
  //   }
  // ],
  portalPage: 'http://111.33.152.150:10009/synthesizeBusiness', // 主页路由
  loginPage: '/login', // 是否显示logo

  env: 'development', // 环境变量
  isRelyAPI: false, // 是否依赖后台接口
  homePage: '/home', // 首页路由
  homeLocation: 'top', // 首页位置 (left: 左侧、top: 顶部)
  is_i18n: false, // 是否支持多预言
  storage_key: 'user_info_d', // 用户信息 缓存 Key
  options_key: 'sinosoft_options', // 操作 缓存 Key
  lang_key: 'sinosoft_lang' // 语言 缓存 Key
};
export default config;
