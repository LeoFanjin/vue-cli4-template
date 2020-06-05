import {API} from "utils";

/**
 * 查询所有资源
 */
export const queryResource = ({commit}, params) => {
  var param = {
    url: G.base_api + "/ap-system/findResource.do",
    dataType: "json",
    commit: commit,
    data: params
  };
  return API.post(param);
};

/**
 * 查询资源详情
 */
export const queryResourceDetail = ({commit}, params) => {
  var param = {
    url: G.base_api + "/ap-system/findResourceInfo.do",
    dataType: "json",
    commit: commit,
    data: params
  };
  return API.post(param);
};

/**
 * 删除资源
 */
export const removeResource = ({commit}, params) => {
  var param = {
    url: G.base_api + "/ap-system/removeResource.do",
    dataType: "json",
    commit: commit,
    data: params
  };
  return API.post(param);
};

/**
 * 添加资源
 */
export const addResource = ({commit}, params) => {
  var param = {
    url: G.base_api + "/ap-system/saveResource.do",
    dataType: "json",
    commit: commit,
    data: params
  };
  return API.post(param);
};

/**
 * 修改资源
 */
export const modifyResource = ({commit}, params) => {
  var param = {
    url: G.base_api + "/ap-system/modifyResource.do",
    dataType: "json",
    commit: commit,
    data: params
  };
  return API.post(param);
};

/**
 * 切换岗位/组织机构位置
 */
export const changePositionByResource = ({commit}, params) => {
  var param = {
    url: G.base_api + "/ap-system/sortResource.do",
    dataType: "json",
    commit: commit,
    data: params
  };
  return API.post(param);
};
