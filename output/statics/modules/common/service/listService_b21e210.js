define('common/service/listService', function(require, exports, module) {

var app = angular.module('RDash');
app.factory('listService', function ($http,baseUrl,url_function) {
    return {
        init:function(scope,url,options){                      //options:{isAdd:刷新时旧数据是否清空,autoRefresh:列表到底自动刷新,listElement:列表元素选择器}
            scope.url = url;
            scope.options = options?options:{};                //查询设置
            if(!options)options={};
            scope.listEl = null;                               //列表元素
            scope.dataList=[];                                 //数据
            scope.total=0;                                     //总条数
            scope.totalPage=0;                                 //总页数
            scope.listLoadFlag = 0;                            //列表加载标记0:未加载;1:加载中;2已加载
            if(!scope.selections){
                scope.selections={};
            }
            if(!scope.order)scope.order = {id:false};         //排序字段,true时带入descent
            scope.tableParams = {index:1,number:10,descent:''};     //查询条件,页码,每页条数,排序字段
            if(!scope.params)scope.params={};
            if(options.autoSearch){
                scope.$watch('params',function(newVal,oldVal,scope){
                    scope.refresh();
                },true);
            }
            scope.refresh=function(page,callback){
                if(/^\d+$/.test(page)&&page>scope.totalPage)return;
                if(/^\d+$/.test(page)){
                    scope.tableParams.index=page
                }else if(!angular.isUndefined(page)&&page!=null&&page!==''){
                    return;
                }
                if(scope.totalPage&&scope.tableParams.index>scope.totalPage)return;
                if(!scope.tableParams.index)return;

                var descent = '';
                var order = scope.order;
                for(var key in order){
                    if(order[key]){
                        if(descent!=''){
                            descent+=',';
                        }
                        descent+=key;
                    }
                }
                scope.tableParams.descent=descent;
                scope.listLoadFlag = 1;
                var params = {};
                angular.merge(params,scope.tableParams,scope.params);
                console.log(params)
                $http.get(baseUrl.getUrl() + url+url_function.getQuery(params)).success(function(data){
                    scope.listLoadFlag=2;
                    if(scope.options.isAdd){
                        scope.dataList=scope.dataList.concat(data.data);
                    }else{
                        scope.dataList=data.data;
                    }
                    scope.total=data.pageinfo.total_number;
                    scope.totalPage=data.pageinfo.total_page;
                    if(callback&&angular.isFunction(callback))callback(data);
                    if(scope.listCallback&&angular.isFunction(scope.listCallback))scope.listCallback(data);
                });
            }
            // scope.$watch(scope.tableParams,function(newVal,oldVal,scope){
            //     console.log(newVal);
            // });
            //自动刷新的列表添加滚动监听
            if(scope.options.autoRefresh&&scope.options.listElement){
                scope.listEl = angular.element(scope.options.listElement);
                if(scope.listEl){
                    scope.listEl.on('scroll',function(event){
                        var list = event.target;
                        if(list.scrollTop + list.clientHeight == list.scrollHeight){
                            scope.refresh(scope.tableParams.index+1);
                        }
                    });
                }
            }

            scope.step = 0; //0:列表;1:新增修改;2:详情
            if(!scope.fieldSet&&options.fieldSet){
                scope.fieldSet = options.fieldSet;//详情
            }else if(!scope.fieldSet){
                scope.fieldSet = {};
            }
            scope.showData=function(data){
                scope.setValues(data);
                scope.step = 2;
                if(scope.afterShowData)scope.afterShowData();
            }
            scope.editData=function(data){
                if(data){
                    scope.setValues(data)
                }else{
                    scope.reset();
                }
                scope.step = 1;
            }
            scope.back = function(){
                scope.step = 0;
                scope.refresh();
            }
            scope.setValues = function(values){
                scope.detail = values;
                angular.forEach(scope.fieldSet,function(val,key){
                    if(!angular.isUndefined(values[key])){
                        scope.fieldSet[key] = values[key];
                    }else{
                        scope.fieldSet[key] = '';
                    }
                });
            }
            scope.reset=function(){
                //console.log('scope.fieldSet',scope.fieldSet)
                angular.forEach(scope.fieldSet,function(val,key){
                    scope.fieldSet[key] = '';
                });
            }
        }
    }
});

});
