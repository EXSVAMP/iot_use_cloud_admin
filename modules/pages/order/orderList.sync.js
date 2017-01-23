var app = angular.module('RDash');

app.register.controller("orderListCtrl", function ($scope, $location,$timeout,$http,listService,utils,baseUrl,url_function) {
    $scope.title = '工单处理／工单列表';
    $scope.params={
        date_start:'',
        date_end:'',
        state:'',
        pk:''
    };
    $scope.selections={
        order_state:{},
        order_type:{}
    }
    utils.getSelection('work_order').then(function(data){
        $scope.selections=data;
    });
    listService.init($scope,'/api/1/admin/work_order/',{
        fieldSet:{
            message:''
        }
    });
    $scope.refresh();
    $scope.detail=null;
    $scope.afterShowData = function(){
        $scope.title = '工单管理／工单列表/工单详情';
        $http.get(baseUrl.getUrl()+'/api/1/admin/work_order/msg/'+url_function.getQuery({order_id:$scope.detail.id,is_page:0})).success(function(data){
            $scope.msgs = data.data;
            $timeout(function(){
                var msgsView = angular.element('.detail-center-area.order-list');
                msgsView.scrollTop(msgsView[0].scrollHeight);
            });
        });
    }

    userInfo = sessionStorage.getItem('user_info');
    if(userInfo){
        userInfo = angular.fromJson(userInfo);
        $scope.admin_id= userInfo.id;
        console.log("<====用户Id=====>"+$scope.admin_id);
    }

    $scope.submit=function(){
        var params = $scope.fieldSet;
        params.order_id = $scope.detail.id;
        $http.post(baseUrl.getUrl()+'/api/1/admin/work_order/msg/',params).success(function(res){
            $scope.afterShowData();
            $scope.reset();
        });
    }
    $scope.closeOrder = function(){
        $http.put(baseUrl.getUrl()+'/api/1/admin/work_order/'+$scope.detail.id+'/',{pk:$scope.detail.id}).success(function(res){
            $scope.back();
        });
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
    $scope.showImgs=function(imgs){
        utils.showImgs(imgs);
    }
});