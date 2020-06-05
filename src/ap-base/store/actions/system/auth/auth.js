import { API } from 'utils';

/***
 * 获取全部组织机构及人员
 */
export const queryAuthOrganization = ({ commit }, params) => {
  var param = {
    url: G.base_api + '/ap-system/findUserOrganizationTree.do',
    dataType: 'json',
    commit: commit,
    data: params
  };
  return API.post(param);
};

/***
 * 获取全部资源（包含操作）
 */
export const queryAllResource = ({ commit }, params) => {
  var param = {
    url: G.base_api + '/ap-system/findResourceOperationTree.do',
    dataType: 'json',
    commit: commit,
    data: params
  };
  return API.post(param);
};
