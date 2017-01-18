var app = angular.module('RDash');
app.factory('formService', function ($http,baseUrl) {
    return {
        init:function(scope,submitUrl,options){
            scope.submitUrl = submitUrl;
            if(!scope.fieldSet)scope.fieldSet={};
            scope.submit=function(){
                
            }
            scope.reset=function(){

            }
        }
    }
});