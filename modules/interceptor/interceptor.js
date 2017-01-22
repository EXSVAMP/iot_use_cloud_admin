
var RDash_web = angular.module('RDash');
function RDashInterceptor() {
    this.config = {
        usecloud_token: 'usecloud-token',
    };

    this.$get = ['$log', '$cookieStore', '$q', '$location','$rootScope', function($log, $cookieStore, $q, $location,$rootScope) {
        var self = this;

        return {
            request: function(request) {
                var security = sessionStorage.getItem("user_token");
                if(security){
                    request.headers["usecloud-token"] =security;
                }else{

                }

                return request;
            },
            requestError: function(error) {
                return $q.reject(error);
            },
            response: function(response) {
                if (response.headers) {

                    var headers = response.headers();
                    var security = sessionStorage.getItem("user_token");
                    if (security) {
                        security = headers[self.config.usecloud_token];
                    }
                }
                return response;
            },
            responseError: function(response) {
                console.log("后台出错!")
                // window.location.href="/login.html"
                return $q.reject(response);
            }
        };
    }];

};
//loading
RDash_web.factory('timestampMarker', ["$rootScope", function ($rootScope) {
    var timestampMarker = {
        request: function (config) {
            $rootScope.loading = true;
            config.requestTimestamp = new Date().getTime();
            return config;
        },
        response: function (response) {
            // $rootScope.loading = false;
            response.config.responseTimestamp = new Date().getTime();
            return response;
        }
    };
    return timestampMarker;
}]);

RDash_web.factory('HttpInterceptor', ['$q', '$injector', HttpInterceptor]);
function HttpInterceptor($q, $injector) {
    return {
        request: function (config) {
            return config;
        },
        requestError: function (err) {
            return $q.reject(err);
        },
        response: function (res) {
            var ngDialog;
            if (!ngDialog) {
                ngDialog = $injector.get("ngDialog")
            }
            if (res.data.code) {
                if (res.data.code != '200') {
                    ngDialog.open({
                        template: '<p style=\"text-align: center\">错误信息：' + res.data.message + '</p>',
                        plain: true
                    });
                    return $q.reject(res);
                };
            }
            return res;
        },
        responseError: function (err) {
            var ngDialog;
            if (!ngDialog) {
                ngDialog = $injector.get("ngDialog")
            }
            if (-1 === err.status) {
                // 远程服务器无响应
                // ngDialog.open({
                //     template:'<p style=\"text-align: center\">远程服务器无响应</p>',
                //     plain:true
                // });
            } else if (500 === err.status) {
                // 处理各类自定义错误
                ngDialog.open({
                    template: '<p style=\"text-align: center\">内部服务器错误</p>',
                    plain: true
                });
            } else if (501 === err.status) {
                // ...
            } else if (403 === err.status) {
                window.open('login.html','_self');
            }
            return $q.reject(err);
        }
    };
}

RDash_web.provider('RDashInterceptor', RDashInterceptor);


RDash_web.config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('RDashInterceptor');
    $httpProvider.interceptors.push('timestampMarker');
    $httpProvider.interceptors.push('HttpInterceptor');
}]);