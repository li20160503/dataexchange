/**
 * @author   aliencode
 * @date     2014/9/25
 */

app.factory('DemoService', function ($http, RESTService) {

   var demo = new RESTService('demo/');


    return {
        demo: demo
    };

});