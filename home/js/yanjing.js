app.controller("yjCtrl", function ($scope,$css,$http) {

  $css.removeAll();
  $css.add('../home/css/yanjing.css');

  $http.get('./home/yanjing.json').success(function(data){
    console.log(data);
    $scope.items = data.data;

  })
});
