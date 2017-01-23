var app = angular.module('RDash');

app.register.controller("messageListCtrl", function ($scope,$http,listService,baseUrl,$uibModal,$timeout) {
    $scope.optip = 'obj-hide'
    $scope.title = '站内信设置/站内信列表';
    $scope.params={
        pk:'',
        startDate:'',
        endDate:'',
        status:''
    };
    listService.init($scope,'/api/1/admin/message/',{
        fieldSet:{
            title:'',
            content:''
        }
    });
    $scope.selections={
        status:[{name:'未发布',value:0},{name:'已发布',value:1},{name:'撤销发布',value:2}]
    };
    $scope.submit=function(status,sId){
        var params = $scope.fieldSet;
        if(sId){
            params.id = sId;
        }
        if(status){
            params.status="1";
        }else{
            params.status="0";
        }
        if(params.id){
            $http.put(baseUrl.getUrl()+'/api/1/admin/message/'+params.id+'/',params).success(function(data){
                $scope.back();
            });
        }else{
            $http.post(baseUrl.getUrl()+'/api/1/admin/message/',params).success(function(data){
                $scope.back();
            });
        }
    }
    $scope.editStatus = function(id,status){
        $http.put(baseUrl.getUrl()+'/api/1/admin/message/'+id+'/',{status:status.toString}).success(function(data){
            $scope.back();
        });
    }
    $scope.refresh();

    $scope.optipHide = function () {
        $timeout(function () {
            $scope.optip = 'obj-hide'
        }, 1000)}


    $scope.optipShow = function (iFlag, message) {
        baseUrl.bodyScroll()
        if(iFlag == 1){
            $scope.$broadcast('optip', {flag: iFlag, msg: message});
            $scope.optip = 'obj-show'
            $scope.optipHide()
        }
    }

    $scope.remove = function (size, method, data) {
        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            controller: 'ModalMessageList',
            templateUrl: "myModalMessageList.html",
            size: size,
            resolve: {
                items: function () {
                    if (method == "delete") {
                        return {
                            title: "删除站内信",
                            method: "delete",
                            scope: $scope,
                            data: data
                        }
                    }
                }


            }
        });
        modalInstance.result.then(function (selectedItem) {
            $scope.selected = selectedItem;
        }, function () {
            baseUrl.bodyScroll()
        })


    }

    $timeout(function(){
        $('.date-picker').datepicker({
            language: 'zh',
            orientation: "left",
            todayHighlight: true,
            autoclose:true,
            templates:{
                leftArrow: '<i class="fa fa-angle-left"></i>',
                rightArrow: '<i class="fa fa-angle-right"></i>'
            }
        });
    });
});