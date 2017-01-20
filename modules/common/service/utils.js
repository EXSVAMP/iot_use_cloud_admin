var app = angular.module('RDash');
app.service("utils",function($http,$q,baseUrl){
    var selections = {};
    var getFileStorageTocken = function () {
        var deferred = $q.defer();
        $http({
            method: 'get',
            url: baseUrl.getUrl() + '/api/1/filestorage/iotcloud/up_tocken',
        }).success(function (data) {
            deferred.resolve(data.data);
        }).error(function (data) {
            deferred.reject(data);
        });
        return deferred.promise;
    };
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
                // angular.forEach(data.data,function(obj,key){
                //     var sel = {};
                //     angular.merge(sel,{'':'请选择'},obj);
                //     data.data[key]=sel;
                // });
                selections[key] = data.data;
                deferred.resolve(data.data);
            }).error(function (data) {
                deferred.reject(data);
            });
            return deferred.promise;
        },
        getFileStorageTocken: getFileStorageTocken,
        getFileName: function (key) {
            var name = key.replace(key.substring(key.lastIndexOf('_'),key.lastIndexOf('.')),'');
            name = name.replace(name.substring(0,name.lastIndexOf('/')+1),'');
            return name;
        },
        getUploader: function (elId, uploadCallback) {
            var deferred = $q.defer();
            getFileStorageTocken().then(function (data) {
                var uploader = new QiniuJsSDK().uploader({
                    runtimes: 'html5',      // 上传模式，依次退化
                    browse_button: elId,         // 上传选择的点选按钮，必需
                    // 在初始化时，uptoken，uptoken_url，uptoken_func三个参数中必须有一个被设置
                    // 切如果提供了多个，其优先级为uptoken > uptoken_url > uptoken_func
                    // 其中uptoken是直接提供上传凭证，uptoken_url是提供了获取上传凭证的地址，如果需要定制获取uptoken的过程则可以设置uptoken_func
                    uptoken: data.tocken, // uptoken是上传凭证，由其他程序生成
                    // uptoken_url: baseUrl.getUrl()+'/api/1/filestorage/iotcloud/up_tocken',             // Ajax请求uptoken的Url，强烈建议设置（服务端提供）
                    // uptoken_func: function(file){    // 在需要获取uptoken时，该方法会被调用
                    //     console.log(file);
                    //     if(file){
                    //         getFileStorageTocken(file.name).then(function(data){
                    //             console.log(data);
                    //             uploader.setOption({uptoken:data.tocken});
                    //             console.log(uploader);
                    //             uploader.start();
                    //         });
                    //     }
                    // },
                    // get_new_uptoken: true,             // 设置上传文件的时候是否每次都重新获取新的uptoken
                    // downtoken_url: baseUrl.getUrl()+'/api/1/filestorage/iotcloud/up_tocken',
                    // Ajax请求downToken的Url，私有空间时使用，JS-SDK将向该地址POST文件的key和domain，服务端返回的JSON必须包含url字段，url值为该文件的下载地址
                    // unique_names: true,              // 默认false，key为文件名。若开启该选项，JS-SDK会为每个文件自动生成key（文件名）
                    // save_key: true,                  // 默认false。若在服务端生成uptoken的上传策略中指定了sava_key，则开启，SDK在前端将不对key进行任何处理
                    domain: 'filestorage.useonline.cn',     // bucket域名，下载资源时用到，必需
                    // container: 'container',             // 上传区域DOM ID，默认是browser_button的父元素
                    max_file_size: '100mb',             // 最大文件体积限制
                    // flash_swf_url: 'path/of/plupload/Moxie.swf',  //引入flash，相对路径
                    max_retries: 3,                     // 上传失败最大重试次数
                    dragdrop: false,                     // 开启可拖曳上传
                    // drop_element: 'container',          // 拖曳上传区域元素的ID，拖曳文件或文件夹后可触发上传
                    chunk_size: '4mb',                  // 分块上传时，每块的体积
                    auto_start: true,                   // 选择文件后自动上传，若关闭需要自己绑定事件触发上传
                    init: {
                        'FilesAdded': function (up, files) {
                        },
                        'BeforeUpload': function (up, file) {
                            // 每个文件上传前，处理相关的事情
                        },
                        'UploadProgress': function (up, file) {
                            // 每个文件上传时，处理相关的事情
                        },
                        'FileUploaded': function (up, file, info) {
                            console.log(info);
                            if (uploadCallback)uploadCallback(angular.fromJson(info), file);
                            // 每个文件上传成功后，处理相关的事情
                            // 其中info是文件上传成功后，服务端返回的json，形式如：
                            // {
                            //    "hash": "Fh8xVqod2MQ1mocfI4S4KpRL6D98",
                            //    "key": "gogopher.jpg"
                            //  }
                            // 查看简单反馈
                            // var domain = up.getOption('domain');
                            // var res = parseJSON(info);
                            // var sourceLink = domain +"/"+ res.key; 获取上传成功后的文件的Url
                        },
                        'Error': function (up, err, errTip) {
                            //上传出错时，处理相关的事情
                        },
                        'UploadComplete': function () {
                            //队列文件处理完毕后，处理相关的事情
                        },
                        'Key': function (up, file) {
                            // 若想在前端对每个文件的key进行个性化处理，可以配置该函数
                            // 该配置必须要在unique_names: false，save_key: false时才生效
                            var docName = file.name.split(".");
                            if (docName.length < 2) {
                                return data.path + file.name + '_' + new Date().getTime();
                            } else {
                                var fileName = '';
                                for (var i = 0; i < docName.length - 1; i++) {
                                    fileName += docName[i];
                                }
                                return data.path + fileName + '_' + new Date().getTime() + '.' + docName[docName.length - 1];
                            }
                        }
                    }
                });
                deferred.resolve(uploader);
            });
            return deferred.promise;
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
