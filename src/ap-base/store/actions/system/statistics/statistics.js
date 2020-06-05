import {API} from "utils";

/**
 * 机构用户统计
 */
export const findOrganStaticInfo = ({commit}, content) => {
  var param = {
    url: G.base_api + "/ap-system/findOrganStaticInfo.do",
    data: content,
    commit: commit,
    timeout: 60000,
    dataType: "json"
  };
  return API.post(param);
};
/**
 * 综合访问情况统计
 */
export const findSystemVisitStatic = ({commit}, content) => {
  var param = {
    url: G.base_api + "/ap-system/findSystemVisitStatic.do",
    data: content,
    commit: commit,
    timeout: 60000,
    dataType: "json"
  };
  return API.post(param);
};
/**
 * 办内处室访问情况统计
 */
export const findBanNeiVisitStatic = ({commit}, content) => {
  var param = {
    url: G.base_api + "/ap-system/findBanNeiVisitStatic.do",
    data: content,
    commit: commit,
    timeout: 60000,
    dataType: "json"
  };
  return API.post(param);
};
/**
 * 成员单位访问情况统计
 */
export const findOrgVisitStatic = ({commit}, content) => {
  var param = {
    url: G.base_api + "/ap-system/findOrgVisitStatic.do",
    data: content,
    commit: commit,
    timeout: 60000,
    dataType: "json"
  };
  return API.post(param);
};
/**
 * 业务访问情况统计
 */
export const findSystemOrgStatic = ({commit}, content) => {
  var param = {
    url: G.base_api + "/ap-system/findSystemOrgStatic.do",
    data: content,
    commit: commit,
    timeout: 60000,
    dataType: "json"
  };
  return API.post(param);
};
/**
 * 业务访问用户查询
 */
export const findVisitStatic = ({commit}, content) => {
  var param = {
    url: G.base_api + "/ap-system/findVisitStatic.do",
    data: content,
    commit: commit,
    timeout: 60000,
    dataType: "json"
  };
  return API.post(param);
};