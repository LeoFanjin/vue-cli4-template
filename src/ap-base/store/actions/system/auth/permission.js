import {API} from "utils";


/***
 * 获取全部许可
 */
export const queryAllPermission = ({commit}, params) => {
  var param = {
    url: G.base_api + "/ap-system/findPermission.do",
    dataType: "json",
    commit: commit,
    data: params
  };
  return API.post(param);
};

/**
 * 根据用户查询许可
 */
export const queryPermissionByUser = ({commit}, params) => {
  var param = {
    url: G.base_api + "/ap-system/findPermissionByUser.do",
    dataType: "json",
    commit: commit,
    data: params
  };
  return API.post(param);
};

/**
 * 根据组织查询许可
 */
export const queryPermissionByOrgan = ({commit}, params) => {
  var param = {
    url: G.base_api + "/ap-system/findPermissionByOrgan.do",
    dataType: "json",
    commit: commit,
    data: params
  };

  return API.post(param);
};

/**
 * 查询许可以及操作
 */
export const findPermissionByRole = ({commit}, params) => {
  var param = {
    url: G.base_api + "/ap-system/findPermissionByRole.do",
    dataType: "json",
    commit: commit,
    data: params
  };
  return API.post(param);
};

/**
 * 保存许可信息
 */
export const savePermission = ({commit}, params) => {
  var param = {
    url: G.base_api + "/ap-system/savePermission.do",
    dataType: "json",
    commit: commit,
    data: params
  };
  return API.post(param);
};


/**
 * 删除许可信息
 */
export const removePermission = ({commit}, params) => {
  var param = {
    url: G.base_api + "/ap-system/removePermission.do",
    dataType: "json",
    commit: commit,
    data: params
  };
  return API.post(param);
};

/**
 * 修改许可信息
 */
export const modifyPermission = ({commit}, params) => {
  var param = {
    url: G.base_api + "/ap-system/modifyPermission.do",
    dataType: "json",
    commit: commit,
    data: params
  };
  return API.post(param);
};

/**
 * 为用户绑定许可
 */
export const bindPermissionUser = ({commit}, params) => {
  var param = {
    url: G.base_api + "/ap-system/saveUserPermissionRel.do",
    dataType: "json",
    commit: commit,
    data: params
  };

  return API.post(param);
};

/**
 * 绑定组织绑定许可
 */
export const bindPermissionOrgan = ({commit}, params) => {
  var param = {
    url: G.base_api + "/ap-system/savePermissionOrganRel.do",
    dataType: "json",
    commit: commit,
    data: params
  };

  return API.post(param);
};

/**
 * 为角色绑定许可
 */
export const bindPermissionRole = ({commit}, params) => {
  var param = {
    url: G.base_api + "/ap-system/savePermissionRoleRel.do",
    dataType: "json",
    commit: commit,
    data: params
  };
  return API.post(param);
};
