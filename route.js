var app = angular.module('myApp', ['ngRoute', 'angularCSS']);

app.controller('indexTopCtrl', function ($scope) {
    $scope.flag = false;
});

app.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
    .when('/',{
        templateUrl: "./home/html/home.html",
        controller: 'homeCtrl'
    })
    .when('/category',{
        templateUrl: "./category/html/category.html",
        controller: 'categoryCtrl'
    })
    .when('/gwc',{
        templateUrl: "./gwc/html/gwc.html",
        controller: 'gwcCtrl'
    })
    .when('/mine',{
        templateUrl: "./mine/html/mine.html",
        controller: 'mineCtrl'
    })
    .when('/login',{
        templateUrl: "./mine/html/login.html",
        controller: 'loginCtrl'
    })
    .when('/register',{
        templateUrl: "./mine/html/register.html",
        controller: 'registerCtrl'
    })
    .when('/addAddress',{
        templateUrl: "./mine/html/addAddress.html",
        controller: 'addAddressCtrl'
    })
    .when('/changePwd',{
        templateUrl: "./mine/html/changePwd.html",
        controller: 'changePwdCtrl'
    })
    .when('/orderInfo',{
        templateUrl: "./mine/html/orderInfo.html",
        controller: 'orderInfoCtrl'
    })
    .when('/no-order',{
        templateUrl: "./mine/html/no-order.html",
        controller: 'noOrderCtrl'
    })
    .when('/spxq',{
        templateUrl: "./spxq/html/spxq.html",
        controller: 'spxqCtrl'
    })
<<<<<<< HEAD
    .when('/gwc2', {
      templateUrl: "./gwc/html/gwc2.html",
      controller: 'gwc2Ctrl'
    })
    .when('/yj',{
       templateUrl:'./home/html/yanjing.html',
       controller:'yjCtrl'
    })
    .when('/spxq2', {
      templateUrl: "./spxq/html/spxq-yj.html",
      controller: 'spxq-yjCtrl'
=======
    .when('/yj',{
      templateUrl: "./home/html/yanjing.html",
      controller: 'yjCtrl'
    })
    .when('/kefu',{
      templateUrl:"./mine/html/modified.html",
      controller:'modifiedCtrl'
>>>>>>> 0cb9c9297964dde41124b531a89dc99133c0f1ae
    })
    .otherwise({
        redirectTo: '/'
    })

}]);
