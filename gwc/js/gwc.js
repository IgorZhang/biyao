app.controller('gwcCtrl', function ($scope,$css) {
    $scope.showFlag = "false";
    $scope.tittle = "购物车";
    $css.removeAll();
    $css.add('gwc/css/gwc.css');
})
