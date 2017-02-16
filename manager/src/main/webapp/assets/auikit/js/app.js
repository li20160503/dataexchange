/**
 * @author   aliencode
 * @date     2014/7/23
 */

window.app = angular.module('auikit', ['ngAnimate', 'ngResource',  'auikit.directives', 'auikit.services', 'auikit.filters', 'auikit.utils'])
    .constant('conf', {
    })
    .config(['$httpProvider', '$animateProvider', 'conf', function ($httpProvider, $animateProvider, conf) {
        $animateProvider.classNameFilter(/nganimate/);

        //$httpProvider.interceptors.push('TrackerHttpInterceptor');
    }])
    .run(function () {

    });

angular.bootstrap(document, ['auikit']);

//});





