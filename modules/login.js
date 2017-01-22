angular.module("RDash", ['ui.bootstrap', 'ui.router', 'ngCookies', 'ngDialog', 'cgBusy', 'truncate', 'ui.select', 'ngSanitize', 'angular-loading-bar', 'ngAnimate']);
require('interceptor');
require('common/constant');


/**
 * Master Controller
 */
var app = angular.module('RDash');

app.controller("loginCtrl", function ($scope,$http,baseUrl) {
    $scope.form = {
        username:'',
        password:''
    }
    $scope.login=function(){
        $http.post(baseUrl.getUrl()+'/api/1/admin/user/login',$scope.form).success(function(data){
            sessionStorage.setItem('user_token',data.data.token);
            sessionStorage.setItem('user_info',angular.toJson(data.data));
            window.open('index.html','_self');
        });
    };
});

app.config(function ($httpProvider) {
    $httpProvider.defaults.xsrfCookieName = 'csrftoken';
    $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
});


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
});