const { myEventEmitter, LOGIN_EVENT } = require("./eventFile");

module.exports.loginSuccessful = (userName) => {
  setInterval(() => {
    myEventEmitter.emit(LOGIN_EVENT, userName);
  }, 2000);
};