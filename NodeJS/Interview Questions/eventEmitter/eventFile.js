const { EventEmitter } = require("events");

module.exports.myEventEmitter = new EventEmitter();
module.exports.LOGIN_EVENT = "loginEvent";