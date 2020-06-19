const config = {
  system_code: 'ab8e56da19a5269b675c2df89cd814f0',
  base_api: 'http://111.33.152.150:10003/AP-MANAGE',
  title: '举报信息统计分析stage',
  showLogo: false,
  // userManual: [
  //   {
  //     docName: '研判情报中枢系统-用户使用手册v2.0.20171206.doc',
  //     address:
  //       'http://10.20.30.220:80/group12/M00/03/DE/ChQeU1o4hJeABpB1ADPGAO0Q9Lo716.doc'
  //   }
  // ],
  portalPage: 'http://111.33.152.150:10009/synthesizeBusiness', // 主页路由
  loginPage: 'http://111.33.152.150:10009/login',

  env: 'staging', // 环境变量
  isRelyAPI: true, // 是否依赖后台接口
  homePage: '/home', // 首页路由
  homeLocation: 'top', // 首页位置 (left: 左侧、top: 顶部)
  is_i18n: false, // 是否支持多预言
  storage_key: 'user_info_d', // 用户信息 缓存 Key
  options_key: 'sinosoft_options', // 操作 缓存 Key
  lang_key: 'sinosoft_lang' // 语言 缓存 Key
};
export default config;
