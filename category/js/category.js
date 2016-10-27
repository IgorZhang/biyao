app.controller('categoryCtrl', function ($scope,$css,$http) {

    $scope.tittle = "分类";
    $css.removeAll();
    $css.add('../category/css/category.css');

    $http.get('http://localhost:8888/category/yanjing.json').success(function(data){
      console.log(data);
      $scope.items = data.data;
    })
})
