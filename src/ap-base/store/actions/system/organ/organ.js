import {API} from "utils";

/***
 * 查询所有的组织机构及岗位
 */
export const queryOrganization = ({commit}, params) => {
  var param = {
    url: G.base_api + "/ap-system/findOrganization.do",
    dataType: "json",
    commit: commit,
    data: params
  };
  return API.post(param);
};

/***
 * 保存组织机构
 */
export const saveOrgan = ({commit}, params) => {
  var param = {
    url: G.base_api + "/ap-system/saveOrganization.do",
    dataType: "json",
    commit: commit,
    data: params
  };
  return API.post(param);
};

/***
 * 修改组织机构
 */
export const modifyOrgan = ({commit}, params) => {
  var param = {
    url: G.base_api + "/ap-system/modifyOrganization.do",
    dataType: "json",
    commit: commit,
    data: params
  };
  return API.post(param);
};

/***
 * 删除组织机构
 */
export const removeOrgan = ({commit}, params) => {
  var param = {
    url: G.base_api + "/ap-system/removeOrganization.do",
    dataType: "json",
    commit: commit,
    data: params
  };
  return API.post(param);
};
