
module.exports = {
    url: '/messageList',
    template: __inline('./messageList.html'),
    //注意如果开启压缩，应采取此方式注入对象，否则压缩后将找不到
    controller : 'messageListCtrl',
    resolve: {
        loadCtrl: ["$q", function($q) {
            var deferred = $q.defer();
            //异步加载controller／directive/filter/service
            require([
                'messageList.sync'
            ], function() {
                deferred.resolve();
            });
            return deferred.promise;
        }]
    }
};