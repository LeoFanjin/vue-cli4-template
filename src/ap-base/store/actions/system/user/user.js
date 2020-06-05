import {API} from "utils";

/**
 * 用户列表
 */
export const queryEmployeeInfoList = ({commit}, content) => {
  if (content.userAccount) {
    content.userAccount += ':f';
  }

  var param = {
    url: G.base_api + "/ap-system/findUser.do",
    data: content,
    commit: commit,
    dataType: "json"
  };
  return API.post(param);
};

/**
 * 新增用户
 */
export const saveUserRegInfo = ({commit}, content) => {
  var param = {
    url: G.base_api + "/ap-system/saveUser.do",
    data: content,
    commit: commit,
    dataType: "json"
  };
  return API.post(param);
};

/**
 * 查询用户详情
 */
export const queryEmployeeInfoDetail = ({commit}, content) => {
  var param = {
    url: G.base_api + "/ap-system/findUserInfo.do",
    data: content,
    commit: commit,
    dataType: "json"
  };
  return API.post(param);
};

/**
 * 更新用户详情
 */
export const modifyUserRegInfo = ({commit}, content) => {
  var param = {
    url: G.base_api + "/ap-system/modifyUser.do",
    data: content,
    commit: commit,
    dataType: "json"
  };
  return API.post(param);
};

/**
 * 删除用户（单个删除）
 */
export const removeEmployeeInfo = ({commit}, content) => {
  var param = {
    url: G.base_api + "/ap-system/removeUser.do",
    data: content,
    commit: commit,
    dataType: "json"
  };
  return API.post(param);
};

/**
 * 密码初始化
 */
export const initPassword = ({commit}, content) => {
  var param = {
    url: G.base_api + "/ap-system/initUserPassword.do",
    data: content,
    commit: commit,
    dataType: "json"
  };
  return API.post(param);
};

/**
 * 修改密码
 */
export const modifyPassword = ({commit}, content) => {
  var param = {
    url: G.base_api + "/ap-system/settingUserPassword.do",
    data: content,
    commit: commit,
    dataType: "json"
  };
  return API.post(param);
};

/**
 * 修改我的信息
 */
export const modifyMyInfo = ({commit}, content) => {
  var param = {
    url: G.base_api + "/ap-system/modifyUserInfo.do",
    data: content,
    commit: commit,
    dataType: "json"
  };

  return API.post(param).then(() => {
    commit("UPDATE_MY_INFO", content);
    return Promise.resolve(null);
  });
};

/**
 * 查询用户头像
 */
export const findUserHead = ({commit}, content) => {
  var param = {
    url: G.base_api + "/ap-system/findUserHeadImage.do",
    data: content,
    commit: commit,
    dataType: "json"
  };

  return API.post(param);
};

/**
 * 删除用户头像
 */
export const removeUserHead = ({commit}, content) => {
  var param = {
    url: G.base_api + "/ap-system/removeUserHeadImage.do",
    data: content,
    commit: commit,
    dataType: "json"
  };

  return API.post(param);
};

/**
 * 设置用户头像
 */
export const setUserHead = ({commit}, userImgPath) => {
  commit('SET_USER_HEAD', userImgPath);
};
