angular.module("RDash", ['ui.bootstrap', 'ui.router', 'ngCookies', 'ngDialog', 'cgBusy', 'truncate', 'ui.select', 'ngSanitize', 'angular-loading-bar', 'ngAnimate']);
require('router');
require('interceptor');
require('common/service/listService');
require('common/constant');
require('common/fliter');
require('common/service/utils');


/**
 * Master Controller
 */
var app = angular.module('RDash');


app.config(function ($httpProvider) {
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
});


app.controller("MasterCtrl", function ($scope, $location) {
    if($location.path()==''){
        $location.path('orderList')
    }
});

app.controller('headerManageCtrl', function ($scope, $cookieStore, $http, $uibModal, baseUrl, ngDialog, $rootScope) {
    var username = sessionStorage.getItem("loginName");
    if (username) {
        $scope.user_name = username;
    };
    $scope.open = function (size, method) {
        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            controller: 'ModalHeader',
            templateUrl: "myModalContent.html",
            size: size,
            resolve: {
                items: function () {
                    if (method == "quit") {
                        return {
                            title: "退出IOT云",
                            method: "quit",
                            scope: $scope
                        }
                    }
                }
            }
        });
        modalInstance.result.then(function (selectedItem) {
            $scope.selected = selectedItem;
        }, function () {
        });
    }

});

app.controller("sideBarCtrl", function ($scope, $cookieStore, $http, $uibModal, $location, baseUrl, ngDialog, $rootScope) {
    var username = sessionStorage.getItem("loginName");
    if (username) {
        $scope.user_name = username;
    }
    $scope.status = {
        "order": false,
        "message": false
    }
    $scope.toggle = function (name) {
        if (name) {
            $scope.status[name] = !$scope.status[name];
        }
    }
})

app.service("baseUrl", function (constant, ngDialog,$location) {
    var url = constant.url;
    return {
        getUrl: function () {
            return url;
        },
        getServerUrl: function () {
            //return 'http://' + $location.host() + ':' + $location.port() + "/";
            if ((typeof $location.port()) === 'number') {
                return 'http://' + $location.host() + ':' + $location.port() + "/";
            } else {
                return 'http://' + $location.host() + "/";
            }
        },
        ngDialog: function (sAlert) {
            ngDialog.open({
                template: '<p style=\"text-align: center\">' + sAlert + '</p>',
                plain: true
            });
        },
        dupInObjArr: function (key, objArr) {
            var isDup = 0;
            //key = 'name'
            //var test= [{name:'test',s:'pb'},{name:'test2',s:'pb8'},{name:'test',s:'pb7'}]
            var temp = []

            _.forEach(objArr, function (value) {
                if (_.find(temp, function (o) {
                        return o == value[key];
                    })) {
                    isDup = 1;
                    return isDup;
                } else
                    temp.push(value[key])
            });
            console.log(isDup)
            return isDup;

        },
        checkUrl: function(input){
            var str = input;
            //在JavaScript中，正则表达式只能使用"/"开头和结束，不能使用双引号
            var Expression=/http(s)?:////([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/;
            var objExp=new RegExp(Expression);
            if(str.indexOf("localhost")){
                str = str.replace("localhost","127.0.0.1");
            }
            if(objExp.test(str)==true){
                //alert("你输入的URL有效");
                return true;
            }else{
                //alert('你输入的URL无效');
                return false;
            }


        }

    }
}).service("url_junction", function () {
    return {
        getQuery: function (dic) {
            var query_url = '';
            for (var i in dic) {
                if (dic[i] && dic[i] != '-1') {
                    if (query_url == "") {
                        query_url += "?" + i + "=" + dic[i]
                    } else {
                        query_url += "&" + i + "=" + dic[i]
                    }
                }
            }
            return query_url
        },
        getDict: function (dic) {
            var ret_dic = {};
            for (var i in dic) {
                if (dic[i] && dic[i] != '-1') {
                    ret_dic[i] = dic[i];
                }
            }
            return ret_dic;
        }
    }
});