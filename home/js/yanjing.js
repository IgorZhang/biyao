app.controller("yjCtrl", function ($scope,$css,$http) {

  $css.removeAll();
  $css.add('../home/css/yanjing.css');

  $http.get('http://localhost:8888/home/yanjing.json').success(function(data){
    console.log(data);
    $scope.items = data.data;
    
  })
});
