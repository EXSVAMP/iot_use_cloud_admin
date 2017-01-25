define('common/constant', function(require, exports, module) {

var app = angular.module('RDash');
app.constant("constant",{

   //url:"http://172.16.83.149:9115",
   //url:"http://211.152.46.42:9115",

     url:"http://iotcloud.useonline.cn",
    // websocket_url:"139.196.148.70",
    // websocket_url:"211.152.46.42",

    // url:"http://172.16.83.149:9011",
    // websocket_url:"172.16.83.149",
    websocket_userName:"iotclould",
    websocket_password:"123qwe!@#",
    websocket_port:8083

})


});
