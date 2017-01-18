angular.module("RDash", ['ui.bootstrap', 'ui.router', 'ngCookies', 'ngDialog', 'cgBusy', 'truncate', 'ui.select', 'ngSanitize', 'angular-loading-bar', 'ngAnimate']);
require('interceptor');
require('common/constant');


/**
 * Master Controller
 */
var app = angular.module('RDash');

app.controller("loginCtrl", function ($scope, $location) {
    $scope.login=function(){
        window.open('/index.html','_self');
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