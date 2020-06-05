/**
 * Created by 15810 on 2017/9/1.
 */
function setAppUserInfo(results) {
  if (results.status === 1) {
    var data = results.data;
    if (data.organizationEntity && data.userEntity) {
      data.userEntity.organ = data.organizationEntity;
    }
    G.USER_INFO = data.userEntity;
    G.OPTIONS = data.operationEntities;
  }
}

function SSO () {
  function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null)
      return unescape(r[2]);
    return "";
  }
  var token = GetQueryString("t") || "";
  if (!token) {
    var name = 'token';
    var r = new RegExp('(?:^|;\\s*)' + name + '=([^;]*)'), m = document.cookie.match(r);
    token = m && m[1] || '';
  }
  if (token) {
    var jump = GetQueryString("jump");
    G.token = token;
    document.cookie = "token=" + G.token;
    G.jump = jump;
    document.cookie = "jump=" + G.jump;
    document.write('<script src="' + G.API_BASE + '/ap-system/UserLoginForChild?callback=setAppUserInfo&authorization=' + token + '"></sc' + 'ript>');
  }
}
if (!G.autonomously) {
  SSO();
}
