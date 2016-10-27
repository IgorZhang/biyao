app.controller('homeCtrl', function ($scope,$css,$http) {

    $scope.tittle = "首页";
    $css.removeAll();
    $css.add('../home/css/home.css');

    $http.get('http://localhost:8888/home/home.json').success(function(data){
      console.log(data);
      $scope.items = data.data
    })

})
// angular.module('myApp', ['ui.bootstrap', 'ngAnimate']).controller('CarouselDemoCtrl', function ($scope) {
//     $scope.myInterval = 2000;
//     $scope.noWrapSlides = false;
//     var slides = $scope.slides = [];
//     $scope.addSlide = function () {
//         var newWidth = 600 + slides.length + 1;
//         slides.push({
//             image: 'https://imgcms.biyao.com/files//web/402229507ecd429a8544d92b33783e7a.jpg',
//             text: 'Chocola & Vanilla',
//         });
//         slides.push({
//             image: 'https://imgcms.biyao.com/files//web/eb809360af154eea9d26a0f01eedd561.jpg',
//             text: 'Chocola & Vanilla',
//         });
//         slides.push({
//             image: 'https://imgcms.biyao.com/files//web/7623d0fa3ede40b18e7efb67811291a9.jpg',
//             text: 'Chocola & Vanilla',
//         });
//
//         slides.push({
//             image: 'https://imgcms.biyao.com/files//web/63bbf13888804cc1832fe84467a55541.jpg',
//             text: 'Chocola & Vanilla',
//         });
//         slides.push({
//             image: 'https://imgcms.biyao.com/files//web/b1987197ba694c79b9a70185b320b9ca.jpg',
//             text: 'Chocola & Vanilla',
//         });
//         slides.push({
//             image: 'https://imgcms.biyao.com/files//web/89080207cd984a6caf13b41e00552f03.jpg',
//             text: 'Chocola & Vanilla',
//         });
//     };
//     $scope.addSlide();
// });
