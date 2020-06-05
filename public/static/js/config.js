/**
 * 定义全局变量APP_CONFIG，在index.html中前引用，
 * 在执行单点登录前在G.js中获取对应的base_api等变量
 */
let APP_CONFIG = {
  development: {
    system_code: '22c8ef91873fa4389b5300bdd3d155be',
    // base_api: 'http://111.33.152.130:10003/AP-MANAGE',
    // base_api: 'http://192.168.125.123:8081/JBXXTJFX',
    base_api: 'http://111.33.152.130:10102/iiprp',
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
    portalPage: 'http://111.33.152.130:10009/synthesizeBusiness', //主页路由
    loginPage: '/login' //是否显示logo
  },
  /* 测试环境 */
  staging: {
    system_code: 'ab8e56da19a5269b675c2df89cd814f0',
    base_api: 'http://111.33.152.130:10003/AP-MANAGE',
    title: '举报信息统计分析stage',
    showLogo: false,
    // userManual: [
    //   {
    //     docName: '研判情报中枢系统-用户使用手册v2.0.20171206.doc',
    //     address:
    //       'http://10.20.30.220:80/group12/M00/03/DE/ChQeU1o4hJeABpB1ADPGAO0Q9Lo716.doc'
    //   }
    // ],
    portalPage: 'http://111.33.152.130:10009/synthesizeBusiness', //主页路由
    loginPage: 'http://111.33.152.130:10009/login'
  },
  /* 生产环境 */
  production: {
    system_code: '20a7c0398c70f798d1b9dd43b65989d8',
    base_api: 'http://111.33.152.130:10110/JBTJFX',
    // base_api: 'http://10.20.20.151:8011/JBTJFX',
    // base_api: 'http://111.33.152.130:10096/JBTJFX',
    title: '举报信息统计分析pro',
    showLogo: false,
    // userManual: [
    //   {
    //     docName: '研判情报中枢系统-用户使用手册v2.0.20171206.doc',
    //     address:
    //       'http://10.20.30.220:80/group12/M00/03/DE/ChQeU1o4hJeABpB1ADPGAO0Q9Lo716.doc'
    //   }
    // ],
    portalPage: 'http://111.33.152.130:10009/synthesizeBusiness', //主页路由
    loginPage: 'http://111.33.152.130:10009/login'
  }
};

/**
 * 定义全局变量G，用于保存单点登录的相关变量
 */
let G = {
  USER_INFO: {},
  OPTIONS: [],
  token: null,
  jump: '',
  homePage: '',
  autonomously: false
};
