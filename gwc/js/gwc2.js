app.controller("gwc2Ctrl", function ($scope, $css) {
    $css.removeAll();
    $css.add('gwc/css/gwc2.css');


    // 获取在localStorage中保存购物车数据
    var data = JSON.parse(localStorage.getItem('gwc'));
    // console.log(data);
    $scope.gwcList = data;
    console.log($scope.gwcList) // 查看当前购物车数组
    $scope.allPrice

    // 加减按钮及删除操作
    $scope.reduceCount = function (index) {
        console.log(index)
        $scope.gwcList[index].count = $scope.gwcList[index].count - 1;
        if($scope.gwcList[index].count <= 0){$scope.gwcList[index].count = 1}
        localStorage.setItem('gwc', JSON.stringify($scope.gwcList));
        suanMoeny();
    }
    $scope.addCount = function (index) {
        console.log(index)
        $scope.gwcList[index].count = $scope.gwcList[index].count + 1;
        localStorage.setItem('gwc', JSON.stringify($scope.gwcList));
        suanMoeny();
    }
    $scope.remove = function (index) {
        console.log(index)
        $scope.gwcList.splice(index,1)
        localStorage.setItem('gwc', JSON.stringify($scope.gwcList));
        suanMoeny();
    }
    $scope.allMoney=0;
    $scope.allCount=0;
    suanMoeny();
    function suanMoeny () {
        var itemPrice = 0;
        var itemCount = 0;
        for(var i = 0; i < $scope.gwcList.length; i++){
            itemPrice += $scope.gwcList[i].count *  $scope.gwcList[i].price;
            itemCount += $scope.gwcList[i].count;
        }
        $scope.allMoney = itemPrice;
        $scope.allCount= itemCount;
    }

});
