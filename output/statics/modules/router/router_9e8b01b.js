define('router', function(require, exports, module) {

'use strict';

/**
 * Route configuration for the RDash module.
 */
var app = angular.module('RDash');
var orderList=require("pages/order/orderList");
var messageAdd=require("pages/message/messageList");
app.config(function($stateProvider, $urlRouterProvider,$controllerProvider){
    $stateProvider
        .state('orderList', orderList)
        .state('messageAdd', messageAdd);
    
    app.register = {
        controller: $controllerProvider.register
    };
});

});
