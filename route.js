var app = angular.module('myApp', ['ngRoute', 'angularCSS']);

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
    .otherwise({
        redirectTo: '/'
    })

}]);
