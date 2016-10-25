app.controller('mineCtrl', function ($scope,$css) {

    $scope.tittle = "我的";
    $css.removeAll();
    $css.add('../mine/css/mine.css');
})
