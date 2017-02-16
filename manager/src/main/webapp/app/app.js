/**
 * Created by guoruifeng on 15/10/8.
 */

var app = angular.module('DexcApp', ['ngMaterial', 'ngRoute', 'ngAnimate', 'ngResource', 'ngMessages', 'DexcApp.services'])
    .config(function ($mdThemingProvider, $routeProvider, $locationProvider) {

        $mdThemingProvider.theme('default')
            .primaryPalette('blue')
            .accentPalette('blue-grey')
            //.backgroundPalette('grey')
            .warnPalette('deep-orange');

        //$mdThemingProvider.theme('grey')
        //    .primaryPalette('blue-grey')
        //    .accentPalette('blue-grey')
        //    //.backgroundPalette('grey')
        //    .warnPalette('deep-orange');

        var base_parh = 'app/views';
        $routeProvider
            .otherwise({
                templateUrl: base_parh + '/dashboard.html',
                controller: 'DashboardCtrl'
            })
            //.when('/reg', {
            //    templateUrl: base_parh + '/reg.html',
            //    controller: 'NodesCtrl'
            //})
            .when('/nodes', {
                templateUrl: base_parh + '/nodes.html',
                controller: 'NodesCtrl'
            })
            .when('/schedulers', {
                templateUrl: base_parh + '/schedulers.html',
                controller: 'SchedulerCtrl'
            })
            .when('/apps', {
                templateUrl: base_parh + '/apps.html',
                controller: 'AppsCtrl'
            });

        // configure html5 to get links working on jsfiddle
        //$locationProvider.html5Mode(true);


    });


app.factory('RestService', function ($http, RESTService) {

    var _node = new RESTService('node/');
    var _app = new RESTService('app/');
    var _sch = new RESTService('scheduler/');

    var _NODESELECTEDID = "";
    var _APPSELECTEDID = "";
    var _SCHSELECTEDID = "";

    return {
        node: _node,
        app: _app,
        sch: _sch,
        NODESELECTEDID: _NODESELECTEDID,
        APPSELECTEDID: _APPSELECTEDID,
        SCHSELECTEDID: _SCHSELECTEDID
    };

});

app.controller('DashboardCtrl', function ($scope, $mdToast, $route, $routeParams, $location, $mdDialog) {


})


app.controller('MainCtrl', function ($scope, $mdToast, $route, $routeParams, $location, $mdDialog) {


    $scope.gotoUrl = function (url) {
        window.location.href = url;
    }


    $scope.showRegWindow = function (ev) {
        $mdDialog.show({
            controller: 'RegAppCtrl',
            templateUrl: 'app/views/reg.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: false
        });
    };



    $scope.showSchedulerWindow = function (ev) {
        $mdDialog.show({
            controller: 'AddSchedulerCtrl',
            templateUrl: 'app/views/scheduler.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: false
        });
    };


});


app.controller('SchedulerCtrl', function ($scope, $mdToast, $route, $routeParams, $location, $mdDialog, RestService, $log) {
    $scope.items = [];

    RestService.sch.get({str: 'list'}, function (result) {
        if (result.success) {
            $scope.items = result.data;
            console.log(result.data);
        }
    })

    $scope.menuClick = function (index, id, ev) {
        RestService.SCHSELECTEDID = id;

        switch (index) {
            //执行
            case 0:
                RestService.sch.get({str: 'trigger/' + id}, function (result) {
                    if (result.success) {
                        $mdToast.show(
                            $mdToast.simple()
                                .content('调用完成！')
                                .position('top right')
                                .hideDelay(1500)
                        );
                    }
                });
                break;
            //暂停
            case 1:
                var confirm = $mdDialog.confirm()
                    .title('提示')
                    .content('确定要进行此操作吗？')
                    .ok('确定')
                    .targetEvent(ev)
                    .cancel('取消');
                $mdDialog.show(confirm).then(function () {
                    RestService.sch.get({str: 'toggle/' + id}, function (result) {
                        if (result.success) {
                            window.location.reload();
                        }
                    });
                });
                break;
            //删除
            case 2:
                var confirm = $mdDialog.confirm()
                    .title('确定要删除此数据吗？')
                    .content('此数据删除后数据无法恢复，请慎重操作！')
                    .ok('确定')
                    .targetEvent(ev)
                    .cancel('取消');
                $mdDialog.show(confirm).then(function () {
                    RestService.sch.delete({str: 'del/' + id}, function (result) {
                        if (result.success) {
                            window.location.reload();
                        }
                    });
                });
                break;
            //应用信息
            case 3:
                RestService.APPSELECTEDID = id;
                $mdDialog.show({
                    controller: 'AppInfoViewCtrl',
                    templateUrl: 'app/views/app_info.html',
                    targetEvent: ev,
                    clickOutsideToClose: true
                });
                break;
        }


    }


})


app.controller('AddSchedulerCtrl', function ($scope, $mdToast, $route, $routeParams, $location, $mdDialog, RestService, $log) {

    $scope.apps = [];

    RestService.app.get({str: 'apps'}, function (result) {
        if (result.success) {
            $scope.apps = result.data;
        }
    })

    $scope.cancel = function () {
        $mdDialog.cancel();
    };

    $scope.scheduler = {
        name: '',
        cronexp: '',
        instanceId: '',
        status: '',
        content: ''
    }


    $scope.addScheduler = function () {
        if ($scope.schedulerForm.$valid) {
            RestService.sch.create({str: 'add', data: $scope.scheduler}, function (result) {
                if (result.success) {
                    $mdToast.show(
                        $mdToast.simple()
                            .content('计划任务添加成功！')
                            .position('top right')
                            .hideDelay(1500)
                    );
                    window.location.href = '/#schedulers';
                    window.location.reload();
                } else {
                    $mdToast.show(
                        $mdToast.simple()
                            .content('应用注册失败！' + result.errorMessage)
                            .position('top right')
                            .hideDelay(3000)
                    );
                }
            })
        }
        ;
    };


})

app.controller('RegAppCtrl', function ($scope, $mdToast, $route, $routeParams, $location, $mdDialog, RestService, $log) {

    $scope.instance = {
        appName: '',
        appNameCn: '',
        topicName: '',
        callbackRoute: '',
        partitions: 1,
        streamCount: 1
    }

    $scope.cancel = function () {
        $mdDialog.cancel();
    };

    $scope.regApp = function () {
        if ($scope.instanceForm.$valid) {
            RestService.app.create({str: 'regapp', data: $scope.instance}, function (result) {
                if (result.success) {
                    $mdToast.show(
                        $mdToast.simple()
                            .content('应用注册成功！')
                            .position('top right')
                            .hideDelay(1500)
                    );
                    window.location.href = '/#apps';
                    window.location.reload();
                } else {
                    $mdToast.show(
                        $mdToast.simple()
                            .content('应用注册失败！' + result.errorMessage)
                            .position('top right')
                            .hideDelay(3000)
                    );
                }
            })
        }
        ;
    };

})

app.controller('UpdateAppCtrl', function ($scope, $mdToast, $route, $routeParams, $location, $mdDialog, RestService, $log) {

    $scope.appId = RestService.APPSELECTEDID;

    $scope.instance = {}

    RestService.app.get({str: $scope.appId}, function (result) {
        if (result.success) {
            $scope.instance = result.data;
            console.log( $scope.instance);
        }
    });


    $scope.cancel = function () {
        $mdDialog.cancel();
    };

    $scope.updateApp = function () {
        if ($scope.instanceForm.$valid) {
            //RestService.app.update({str: $scope.appId, data: $scope.instance}, function (result) {
            RestService.app.update({str: 'updateapp', data: $scope.instance}, function (result) {
                if (result.success) {
                    $mdToast.show(
                        $mdToast.simple()
                            .content('应用修改成功！')
                            .position('top right')
                            .hideDelay(1500)
                    );
                    window.location.href = '/#apps';
                    window.location.reload();
                } else {
                    $mdToast.show(
                        $mdToast.simple()
                            .content('应用修改失败！' + result.errorMessage)
                            .position('top right')
                            .hideDelay(3000)
                    );
                }
            })
        }
        ;
    };

})


app.controller('AppsCtrl', function ($scope, $mdToast, $route, $routeParams, $location, $mdDialog, RestService) {
    $scope.items = [];

    RestService.app.get({str: 'apps'}, function (result) {
        if (result.success) {
            $scope.items = result.data;
            console.log(result.data);
        }
    })

    $scope.menuClick = function (index, id, ev) {
        RestService.APPSELECTEDID = id;

        switch (index) {
            //详细信息
            case 0:
                $mdDialog.show({
                    controller: 'AppInfoViewCtrl',
                    templateUrl: 'app/views/app_info.html',
                    targetEvent: ev,
                    clickOutsideToClose: true
                })
                break;
            //修改
            case 1:
                $mdDialog.show({
                    controller: 'UpdateAppCtrl',
                    templateUrl: 'app/views/edit.html',
                    parent: angular.element(document.body),
                    targetEvent: ev,
                    clickOutsideToClose: true
                });
                break;
            //发送任务数据
            case 2:
                $mdDialog.show({
                    controller: 'SendTestDataCtrl',
                    templateUrl: 'app/views/send_data.html',
                    targetEvent: ev,
                    clickOutsideToClose: true
                })
                break;
            //发送回调数据
            case 3:
                $mdDialog.show({
                    controller: 'SendTestCBDataCtrl',
                    templateUrl: 'app/views/send_data.html',
                    targetEvent: ev,
                    clickOutsideToClose: true
                })
                break;
            // 处理结点查看
            case 4:
                $mdDialog.show({
                    controller: 'NodeInfoViewCtrl',
                    templateUrl: 'app/views/node_info.html',
                    targetEvent: ev,
                    clickOutsideToClose: true
                })
                break;
            //删除应用
            case 5:
                var confirm = $mdDialog.confirm()
                    .title('确定要删除此应用吗？')
                    .content('此数据交换应用删除后数据无法恢复，请慎重操作！')
                    .ok('确定')
                    .targetEvent(ev)
                    .cancel('取消');
                $mdDialog.show(confirm).then(function () {
                    console.debug('del app: ' + id);
                    RestService.app.delete({str: 'del/' + id}, function (result) {
                        if (result.success) {
                            window.location.reload();
                        }
                    });
                });
                break;
        }


    }


});

app.controller('SendTestDataCtrl', function ($scope, $mdToast, $route, $routeParams, $location, $mdDialog, RestService) {

    $scope.appId = RestService.APPSELECTEDID;

    $scope.cancel = function () {
        $mdDialog.cancel();
    };

    $scope.sendData = function () {
        console.log($scope.textmsg);
        RestService.app.get({
            str: 'topicsendtest',
            params: {appid: $scope.appId, appkey: '1', msg: $scope.textmsg}
        }, function (result) {
            if (result.success) {
                $mdToast.show(
                    $mdToast.simple()
                        .content('数据已发送！')
                        .position('top right')
                        .hideDelay(1500)
                );
            }
            $mdDialog.cancel();
        })
    }

})

app.controller('SendTestCBDataCtrl', function ($scope, $mdToast, $route, $routeParams, $location, $mdDialog, RestService) {

    $scope.appId = RestService.APPSELECTEDID;

    $scope.cancel = function () {
        $mdDialog.cancel();
    };

    $scope.sendData = function () {
        console.log($scope.textmsg);
        RestService.app.get({
            str: 'topiccbsendtest',
            params: {appid: $scope.appId, appkey: '1', msg: $scope.textmsg}
        }, function (result) {
            if (result.success) {
                $mdToast.show(
                    $mdToast.simple()
                        .content('数据已发送！')
                        .position('top right')
                        .hideDelay(1500)
                );
            }
            $mdDialog.cancel();
        })
    }

})

app.controller('NodesCtrl', function ($scope, $mdToast, $route, $routeParams, $location, $mdDialog, RestService) {

    $scope.nodes = [];

    RestService.node.get({str: 'heads'}, function (result) {
        if (result.success) {
            $scope.nodes = result.data;
            console.log(result.data);
        }
    })

    $scope.menuClick = function (index, id) {
        //线程信息
        if (index == 0) {

            RestService.node.get({str: 'config/' + id}, function (result) {
                if (result.success) {
                    $mdDialog.show(
                        $mdDialog.alert()
                            .clickOutsideToClose(true)
                            .title('查看线程池信息')
                            .content('<span style="color:gray">id: ' + id + '</span><br/> <p>' +
                                '线程总数：' + result.data.CorePoolSize + '<br/>激活线程：<span style="color: red;">' + result.data.ActiveCount + '</span>' + '</p>')
                            .ok(' 关闭 ')
                    );
                }
            });

        }
        //作业信息
        else {

            RestService.NODESELECTEDID = id;
            $mdDialog.show({
                controller: 'NodesConsumerViewCtrl',
                templateUrl: 'app/views/consumer_apps.html',
                clickOutsideToClose: true
            })

        }
    }


});


app.controller('AppInfoViewCtrl', function ($scope, $mdDialog, RestService) {

    $scope.cancel = function () {
        $mdDialog.cancel();
    };

    RestService.app.get({str: RestService.APPSELECTEDID}, function (result) {
        if (result.success) {
            $scope.app = result.data;
        }
    });


})


app.controller('NodeInfoViewCtrl', function ($scope, $mdDialog, RestService) {

    $scope.cancel = function () {
        $mdDialog.cancel();
    };

    RestService.node.get({str: 'byapp/' + RestService.APPSELECTEDID}, function (result) {
        if (result.success) {
            $scope.node = result.data.split('||');
        }
    });


})


app.controller('NodesConsumerViewCtrl', function ($scope, $mdDialog, RestService) {

    $scope.apps = [];

    RestService.node.get({str: 'consumers/' + RestService.NODESELECTEDID}, function (result) {
        if (result.success) {
            $scope.apps = result.data;
        }
    });

    $scope.cancel = function () {
        $mdDialog.cancel();
    };


})

