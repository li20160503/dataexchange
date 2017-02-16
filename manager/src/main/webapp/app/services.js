/**
 * @author   aliencode
 * @date     2014/7/23
 */
angular.module('DexcApp.services', [])
    .factory('RESTService', ['$http', function($http) {

        var RESTService = function (url) {
            this.setURL(url);

            this.get = function (conf, callback) {
                this.http('GET', conf, callback);
            };

            this.create = function (conf, callback) {
                this.http('POST', conf, callback);
            };

            this.update = function (conf, callback) {
                this.http('PUT', conf, callback);
            };

            this.delete = function (conf, callback) {
                this.http('DELETE', conf, callback);
            };

        }

        RESTService.prototype = {

            constructor: RESTService,

            setURL: function (url) {
                this.url = url;
            },

            getURL: function () {
                return this.url;
            },


            /**
             * 发送HTTP请求
             * @param method 请求访求：GET、POST、PUT、DELETE
             * @param conf  {str：直接拼在url后面的查询字符串（解决对像中存在同名变量的查询）， params：传递一个js对像会自动拼在url后面做查询，data：提交的数据流}
             * @param callback
             */
            http: function (method, conf, callback) {

                var url = this.url;
                if (conf.str)url = url + conf.str;

                conf.headers = conf.headers || {'Content-Type': 'application/json'};

                $http({method: method, url: url, params: conf.params, data: conf.data, headers: conf.headers}).
                    success(function (data, status) {
                        callback(data, status);
                    });

            }


        }


        return RESTService;


    }]);
