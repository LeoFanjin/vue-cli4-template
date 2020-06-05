import {API} from "utils";

/***
 * 获取全部角色
 */
export const queryAllRole = ({commit}, params) => {
  var param = {
    url: G.base_api + "/ap-system/findRole.do",
    dataType: "json",
    commit: commit,
    data: params
  };
  return API.post(param);
};

/**
 * 根据用户查询角色
 */
export const queryRoleByUser = ({commit}, params) => {
  var param = {
    url: G.base_api + "/ap-system/findUserRole.do",
    dataType: "json",
    commit: commit,
    data: params
  };
  return API.post(param);
};

/***
 * 保存角色信息
 */
export const saveRole = ({commit}, params) => {
  var param = {
    url: G.base_api + "/ap-system/saveRole.do",
    dataType: "json",
    commit: commit,
    data: params
  };
  return API.post(param);
};

/***
 * 修改角色信息
 */
export const modifyRole = ({commit}, params) => {
  var param = {
    url: G.base_api + "/ap-system/modifyRole.do",
    dataType: "json",
    commit: commit,
    data: params
  };
  return API.post(param);
};

/***
 * 删除角色信息
 */
export const removeRole = ({commit}, params) => {
  var param = {
    url: G.base_api + "/ap-system/removeRole.do",
    dataType: "json",
    commit: commit,
    data: params
  };
  return API.post(param);
};

/**
 * 绑定角色信息
 */
export const saveRoleBind = ({commit}, params) => {
  var param = {
    url: G.base_api + "/ap-system/saveUserRoleRel.do",
    dataType: "json",
    commit: commit,
    data: params
  };
  return API.post(param);
};
