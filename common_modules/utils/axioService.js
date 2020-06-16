import axios from 'axios';
import qs from 'qs';

const Axios = {
  basePost: ({
    url,
    method = 'post',
    data = {},
    params = {},
    responseType = 'json',
    responseEncoding = 'utf-8'
  } = {}) => {
    const service = axios.create({
      // baseURL: base_api || G.base_api, // url = base url + request url
      url,
      method,
      withCredentials: true, // 跨域请求时是否需要使用凭证
      data: qs.stringify(data), // 请求参数,
      params, // url中带的参数，Must be a plain object or a URLSearchParams object
      responseType,
      responseEncoding
    });
    service.defaults.baseURL = G.base_api;
    service.defaults.timeout = 5000; // 默认timeout
    service.defaults.headers.post['content-type'] =
      'application/x-www-form-urlencoded';
    const isInApp = service.defaults.baseURL.indexOf(G.base_api) === 0; // 是否从平台发送请求
    if (!G.autonomously) {
      const token = null;
      if (token && isInApp) {
        service.defaults.headers['Authorization'] = `JWT ${token}`;
      }
    }
    return service();
  },
  post: ({
    url,
    method = 'post',
    data = {},
    params = {},
    responseType = 'json',
    responseEncoding = 'utf-8'
  } = {}) => {
    const service = axios.create({
      // baseURL: base_api, // url = base url + request url
      url,
      method,
      withCredentials: true, // 跨域请求时是否需要使用凭证
      /* transformRequest: [function (data, headers) {
        console.log('transformRequest', data, headers)
        return data;
      }], */
      data, // 请求参数,
      params, // url中带的参数，Must be a plain object or a URLSearchParams object
      responseType,
      responseEncoding
    });
    service.defaults.baseURL = G.base_api;
    service.defaults.timeout = 10000; // 默认timeout
    service.defaults.headers.post['Content-Type'] =
      'application/x-www-form-urlencoded;charset=UTF-8';
    const isInApp = service.defaults.baseURL.indexOf(G.base_api) === 0; // 是否从平台发送请求
    if (!G.autonomously) {
      const token = G.token || null;
      if (token && isInApp) {
        service.defaults.headers.common['Authorization'] = token;
      }
    }
    return service();
  }
};

export { Axios };
