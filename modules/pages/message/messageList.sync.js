var app = angular.module('RDash');

app.register.controller("messageListCtrl", function ($scope,$http,listService,baseUrl) {
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
    $scope.submit=function(status){
        var params = $scope.fieldSet;
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
});