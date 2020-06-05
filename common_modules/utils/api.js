import Promise from 'bluebird';
import { Ajax } from './ajax';
import { lang } from '../../src/ap-base/lang';
const i18n = lang[`${G.lang}`];

let postQueue = {}; // 请求队列,防止重复请求

const API = {
  basePost: function(opt) {
    opt = opt || {};
    opt.type = 'POST';
    opt.dataType = opt.dataType || 'json';
    opt.timeout = opt.timeout || 5000; // 超时时间设置，单位毫秒
    opt.contentType =
      opt.contentType || 'application/x-www-form-urlencoded;charset=utf-8';
    opt.urlObj = opt.urlObj || url2obj(opt.url);
    opt.xhrFields = {
      withCredentials: true // 是否发送凭据
    };
    opt.crossDomain = true;
    const isInApp = opt.url.indexOf(G.base_api) === 0; // 是否从平台发送请求
    opt.charset = opt.charset || 'UTF-8';
    opt.url = appendQueryString(opt.url, opt.queryString);
    opt.headers = opt.headers || {};
    if (!G.autonomously) {
      const token = null;
      if (token && isInApp) {
        opt.headers['authorization'] = 'JWT ' + token; // 设置token
      }
    }

    let queueName =
      opt.queueName == null
        ? opt.url + JSON.stringify(opt.data)
        : opt.queueName;
    if (queueName) {
      if (postQueue[queueName]) {
        return Promise.reject(i18n.common.msg.un_repeat_request);
      }
      postQueue[queueName] = 1;
    }

    const pro = Promise.resolve($.ajax(opt));
    if (opt.commit) opt.commit('SET_FULL_LOADING', true);
    pro
      .finally(() => {
        if (queueName) {
          delete postQueue[queueName];
        }
        if (opt.commit) opt.commit('SET_FULL_LOADING', false);
      })
      .catch(Ajax.dealCommonError);

    return pro.then(function(res) {
      return Promise.resolve(res);
    });
  },
  post: function(opt) {
    opt = opt || {};
    opt.type = 'POST';
    opt.dataType = opt.dataType || 'json';
    opt.timeout = opt.timeout || 10000; // 超时时间设置，单位毫秒
    opt.contentType = 'application/x-www-form-urlencoded;charset=utf-8';
    opt.urlObj = opt.urlObj || url2obj(opt.url);
    // 解决跨域问题
    opt.xhrFields = {
      withCredentials: true
    };
    opt.crossDomain = true;

    const isInApp = opt.url.indexOf(G.base_api) === 0;
    opt.charset = opt.charset || 'UTF-8';
    opt.url = appendQueryString(opt.url, opt.queryString);
    opt.headers = opt.headers || {};
    if (!G.autonomously) {
      const token = G.token || null;
      if (token && isInApp) {
        opt.headers['authorization'] = token;
      }
    }
    // 限制同一请求同时只能请求一次
    let queueName =
      opt.queueName == null
        ? opt.url + JSON.stringify(opt.data)
        : opt.queueName;
    if (queueName) {
      if (postQueue[queueName]) {
        // return Promise.reject(i18n.common.msg.un_repeat_request);
      }
      postQueue[queueName] = 1;
    }

    const pro = Promise.resolve($.ajax(opt));

    if (opt.commit) opt.commit('SET_FULL_LOADING', true);
    pro
      .finally(() => {
        if (queueName) {
          delete postQueue[queueName];
        }
        if (opt.commit) opt.commit('SET_FULL_LOADING', false);
      })
      .catch(Ajax.dealCommonError);

    return pro.then(function(res) {
      // 请求成功返回数据
      return Ajax.dealSuccess(res);
    });
  },
  getJSON: function(option) {
    var url = option.url;
    return $.getJSON(url).then(
      function(data) {
        return data;
      },
      function(error) {
        return error;
      }
    );
  }
};

export { API };

function url2obj(str) {
  if (typeof str !== 'string') {
    return str;
  }
  let m = str.match(
    /([^:]*:)?(?:\/\/)?([^\/:]+)?(:)?(\d+)?([^?#]+)(\?[^?#]*)?(#[^#]*)?/
  );
  m = m || [];
  const uri = {
    href: str,
    protocol: m[1] || 'http:',
    host: (m[2] || '') + (m[3] || '') + (m[4] || ''),
    hostname: m[2] || '',
    port: m[4] || '',
    pathname: m[5] || '',
    search: m[6] || '',
    hash: m[7] || ''
  };
  uri.origin = uri.protocol + '//' + uri.host;
  return uri;
}

/** 将url拼写完整 **/
function appendQueryString(url, param, isHashMode) {
  if (!param) {
    param = '';
  } else if (typeof param === 'object') {
    const tmp = {};
    Object.keys(param).forEach(key => {
      const val = param[key];
      const type = typeof val;
      if (val === null) {
        tmp[key] = 'null';
      } else if (type !== 'undefined' && type !== 'object') {
        tmp[key] = val;
      }
    });
    param = $.param(tmp, true);
  } else if (typeof param === 'string') {
    param = param.replace(/^[&?]/, '');
  } else {
    param = '';
  }
  if (!param) {
    return url;
  }
  if (isHashMode) {
    if (url.indexOf('#') === -1) {
      url += '#' + param;
    } else {
      url += '&' + param;
    }
  } else if (url.indexOf('#') === -1) {
    if (url.indexOf('?') === -1) {
      url += '?' + param;
    } else {
      url += '&' + param;
    }
  } else {
    const tmp = url.split('#');
    if (tmp[0].indexOf('?') === -1) {
      url = tmp[0] + '?' + param + '#' + (tmp[1] || '');
    } else {
      url = tmp[0] + '&' + param + '#' + (tmp[1] || '');
    }
  }
  return url;
}
