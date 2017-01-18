var app = angular.module('RDash');

app.register.controller("orderListCtrl", function ($scope, $location,$timeout,listService) {
    $scope.title = '工单处理／工单列表';
    $scope.params={
        date_start:'',
        date_end:'',
        state:''
    };
    listService.init($scope,'/api/1/work_order');
    $scope.selections={
        state:[{name:'test1',value:1},{name:'test2',value:2}]
    };
    // utils.getSelection('camera').then(function(data){
    //     console.log(data);
    // });
    $scope.detail=null;
    $scope.showDetail=function(data){
        $scope.detail=data;
        $scope.title = '工单管理／我的工单/工单详情';
    }
    $scope.dataList = [{},{},{},{},{},{},{},{},{},{}]
    // $timeout(function(){
    //     $('.date-picker').datepicker({
    //         language: 'zh',
    //         orientation: "left",
    //         todayHighlight: true,
    //         autoclose:true,
    //         templates:{
    //             leftArrow: '<i class="fa fa-angle-left"></i>',
    //             rightArrow: '<i class="fa fa-angle-right"></i>'
    //         }
    //     });
    // });
});