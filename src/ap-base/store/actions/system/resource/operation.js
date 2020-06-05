import {API} from "utils";

/**
 * 查询对应操作
 */
export const queryOperation = ({commit}, params) => {
  var param = {
    url: G.base_api + "/ap-system/findOperation.do",
    dataType: "json",
    commit: commit,
    data: params
  };
  return API.post(param);
};

/**
 * 添加对应操作
 */
export const addOperation = ({commit}, params) => {
  var param = {
    url: G.base_api + "/ap-system/saveOperation.do",
    dataType: "json",
    commit: commit,
    data: params
  };
  return API.post(param);
};

/**
 * 删除对应操作
 */
export const removeOperation = ({commit}, params) => {
  var param = {
    url: G.base_api + "/ap-system/removeOperation.do",
    dataType: "json",
    commit: commit,
    data: params
  };
  return API.post(param);
};

/**
 * 修改对应操作
 */
export const modifyOperation = ({commit}, params) => {
  var param = {
    url: G.base_api + "/ap-system/modifyOperation.do",
    dataType: "json",
    commit: commit,
    data: params
  };
  return API.post(param);
};

/**
 * 为许可绑定操作
 */
export const bindPermissionOpe = ({commit}, params) => {
  var param = {
    url: G.base_api + "/ap-system/savePermissionOperationRel.do",
    dataType: "json",
    commit: commit,
    data: params
  };
  return API.post(param);
};

/**
 * 根据许可查询操作
 */
export const queryOperationsByPermission = ({commit}, params) => {
  var param = {
    url: G.base_api + "/ap-system/findOperationByPermission.do",
    dataType: "json",
    commit: commit,
    data: params
  };
  return API.post(param);
};
