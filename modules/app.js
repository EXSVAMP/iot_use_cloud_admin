angular.module("RDash", ['ui.bootstrap', 'ui.router', 'ngCookies', 'ngDialog', 'cgBusy', 'truncate', 'ui.select',
    'ngSanitize', 'angular-loading-bar', 'ngAnimate']);
require('router');
require('interceptor');
require('common/service/listService');
require('common/constant');
require('common/fliter');
require('common/service/utils');
require('components/opTip');


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

app.controller('headerManageCtrl', function ($scope) {
    var userInfo;
    userInfo = sessionStorage.getItem('user_info');
    if(userInfo){
        userInfo = angular.fromJson(userInfo);
        $scope.userName = userInfo.username;
    }
    $scope.loginOut = function (size, method) {
        sessionStorage.setItem('user_token','');
        window.open('/login.html','_self');
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

app.service("baseUrl", function (constant, ngDialog,$location,$timeout) {
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


        },
        bodyNoScroll: function(){
            angular.element('body').addClass('height-view')
        }

    }
}).service("url_function", function () {
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

app.controller('opTipCtr', function ($scope, $cookieStore, $http, baseUrl, ngDialog) {

    $scope.$on('optip', function (d, data) {
        console.log(1,data)
        $scope.flag = data.flag;
        $scope.optipText = data.msg;

    });
})

app.controller('ModalMessageList', function ($scope, $cookieStore, $uibModalInstance, $http, items, baseUrl, ngDialog) {
    baseUrl.bodyNoScroll()
    var url = baseUrl.getUrl();
    $scope.item = items;
    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
    if ($scope.item.method == 'delete') {
        $scope.ok = function () {
            var data = items.data;
            angular.element('#messageId').val(items.data.id)
            var formWayData = $('#message-delete-form').serialize()
            $scope.params = {
                method: 'delete',
                url: url + "/api/1/message/",
                data: formWayData, // form way submit
                params: {},
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }
            $http($scope.params).success(function (data) {
                    if (data.code == "200") {
                        items.scope.optipShow(1, '操作成功')
                        items.scope.refresh();
                    }
                }).error(function () {
                    //ngDialog.open({
                    //    template: '<p style=\"text-align: center\">添加失败:'+data.description+'</p>',
                    //    plain: true
                    //});
                    //items.scope.optipShow(0, '操作失败,' + data.description)
                });
            $uibModalInstance.close();

        }
    }


})


$.fn.datepicker.dates['zh'] = {
    days: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"],
    daysShort: ["日", "一", "二", "三", "四", "五", "六", "日"],
    daysMin: ["日", "一", "二", "三", "四", "五", "六", "日"],
    months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
    monthsShort: ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"],
    meridiem: ["上午", "下午"],
    //suffix:      ["st", "nd", "rd", "th"],
    today: "今天"
};