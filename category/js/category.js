app.controller('categoryCtrl', function ($scope,$css) {

    $scope.tittle = "分类";
    $css.removeAll();
    $css.add('../category/css/category.css');
})
