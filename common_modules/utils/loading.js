import { Loading } from 'element-ui';

export const loadingUtil = ({
  target = document.body,
  loadingText = '加载中'
} = {}) =>
  Loading.service({
    target,
    lock: true,
    text: loadingText,
    spinner: 'el-icon-loading',
    background: 'rgba(0, 0, 0, 0.7)'
  });
