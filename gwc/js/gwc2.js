app.controller("gwc2Ctrl", function ($scope, $css) {
    $css.removeAll();
    $css.add('gwc/css/gwc2.css');


    // 获取在localStorage中保存购物车数据
    var data = JSON.parse(localStorage.getItem('gwc'));
    console.log(data);
    $scope.gwcList = data;
    console.log($scope.gwcList)
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



    // var price = $('.bottom .price1').html();
    // $(document).on('click','.number .add', function () {
    //     count = $('.number input').val();
    //     count++;
    //     $('.number input').val(count);
    //     $('.bottom .count').html(count);
    //     $('.bottom .price1').html(price * count);
    //     $('.thing-gwc > footer .right .price1').html(price * count);
    //     $('.thing-gwc > footer .right div span').html(count);
    // });


    // $(document).on('click','.number .reduce', function () {
    //     count = $('.number input').val();
    //     count--;
    //     $('.number input').val(count);
    //     $('.bottom .count').html(count);
    //     $('.bottom .price1').html(price * count);
    //     $('.thing-gwc > footer .right .price1').html(price * count);
    //     $('.thing-gwc > footer .right div span').html(count);
    //     if (count < 1) {
    //       $('.number input').val(1);
    //       $('.bottom .count').html(1);
    //       $('.bottom .price1').html(price * 1);
    //       $('.thing-gwc > footer .right .price1').html(price * 1);
    //       $('.thing-gwc > footer .right div span').html(1);
    //     }
    // });
    // var flag = true;
    // $('.qx').on('click', function () {
    //     $('.qx').toggleClass('xz');
    //     flag = !flag;
    //     if (!flag) {
    //       $('.bottom .count').html(0);
    //       $('.bottom .price1').html(0);
    //       $('.thing-gwc > footer .right .price1').html(0);
    //       $('.thing-gwc > footer .right div span').html(0);
    //     }
    //     if (flag) {
    //       $('.bottom .count').html(count);
    //       $('.bottom .price1').html(price * count);
    //       $('.thing-gwc > footer .right .price1').html(price * count);
    //       $('.thing-gwc > footer .right div span').html(count);
    //     }
    //
    //
    // });




});
