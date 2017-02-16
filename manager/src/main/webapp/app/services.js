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
             * ����HTTP����
             * @param method �������GET��POST��PUT��DELETE
             * @param conf  {str��ֱ��ƴ��url����Ĳ�ѯ�ַ�������������д���ͬ�������Ĳ�ѯ���� params������һ��js������Զ�ƴ��url��������ѯ��data���ύ��������}
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
