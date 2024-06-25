const { myEventEmitter, LOGIN_EVENT } = require("./eventFile");

myEventEmitter.on(LOGIN_EVENT, (userName) => {
  console.log("Writing in Db for user: ", userName);
});