define('common/service/utils', function(require, exports, module) {

var app = angular.module('RDash');

app.service("utils",function($http,$q,baseUrl,$uibModal,$timeout){
    var selections = {};
    return {
        getSelection: function (key) {
            var deferred = $q.defer();
            if (selections[key]) {
                $timeout(function () {
                    deferred.resolve(selections[key]);
                });
                return deferred.promise;
            }
            $http.get(baseUrl.getUrl() + '/api/1/common/choices/?key=' + key).success(function (data) {
                selections[key] = data.data;
                deferred.resolve(data.data);
            }).error(function (data) {
                deferred.reject(data);
            });
            return deferred.promise;
        },
        showImgs:function(imgs){
            if(angular.isString(imgs)){
                imgs=angular.fromJson(imgs);
            }
            if(imgs.length==0)return;
            var modalInstance = $uibModal.open({
                size:'lm',
                template : "<div class=\"img-container\">\n    <img ng-repeat=\"img in imgs\" ng-show=\"currentIndex==$index\" class=\"img\" ng-src=\"{{img | img}}\"/>\n    <div class=\"img-bar\">\n        <span style=\"margin-right:30px;\">{{currentIndex+1}}/{{imgs.length}}张</span>\n        <a class=\"icon-icon_left_circle_o\" ng-class=\"currentIndex>0?'':'disable'\"\n           ng-click=\"currentIndex>0?(currentIndex=currentIndex-1):''\"></a>\n        <a class=\"icon-icon_right_circle_o\" ng-class=\"currentIndex<imgs.length-1?'':'disable'\"\n           ng-click=\"currentIndex<imgs.length-1?(currentIndex=currentIndex+1):''\"></a>\n    </div>\n</div>",
                controller : function($scope, $uibModalInstance) {
                    $scope.currentIndex=0;
                    if(angular.isString(imgs)){
                        imgs=angular.fromJson(imgs);
                    }
                    $scope.imgs = imgs
                    $scope.close = function() {
                        $uibModalInstance.dismiss();
                    };
                }
            });
        }
    }
});

app.factory('PageHandle', function (ngDialog) {
    return {
        setPageInput: function (sPageInput, iMaxPage) {
            var isNum = /^\d+$/.test(sPageInput);
            if (!isNum) {
                ngDialog.open({
                    template: '<p style=\"text-align: center\">输入页码不正确</p>',
                    plain: true
                });
                return false;
            } else {
                sPageInput = parseInt(sPageInput);
                if (sPageInput == 0 || sPageInput > iMaxPage) {
                    ngDialog.open({
                        template: '<p style=\"text-align: center\">输入页码不正确</p>',
                        plain: true
                    });
                    return false;
                }
            }
            return true;
        }
    }
});


});
