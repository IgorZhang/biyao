app.controller('homeCtrl', function ($scope,$css) {

    $scope.tittle = "首页";
    $css.removeAll();
    $css.add('../home/css/home.css');
})
