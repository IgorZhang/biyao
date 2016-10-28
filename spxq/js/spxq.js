app.controller('spxqCtrl', function ($scope, $rootScope, $css, $location, $http) {

    // 处理url传递过来的参数,为之后的遍历数据做准备
    var urlObj = $location.search();
    console.log(urlObj)
    var goodsId = urlObj.id;
    console.log(goodsId)

    $scope.goodsTittle;
    $scope.price;
    $scope.imgUrl;
    $scope.goodsType;
    $scope.goodsId = goodsId;
    $scope.count = 1;

    $scope.addGwc = function () {
        var newObj = {
            id : $scope.goodsId,
            count : $scope.count,
            name : $scope.goodsTittle,
            price : $scope.price,
            imgUrl: $scope.imgUrl,
            type: $scope.goodsType
        }
        var gwcArr = JSON.parse(localStorage.getItem('gwc')) || [];
        console.log(newObj);
        gwcArr.unshift(newObj);
        console.log(gwcArr);
        localStorage.setItem('gwc',JSON.stringify(gwcArr));
    }



    //  各种事件的处理
  var swiper = new Swiper('.swiper-container', {
      direction: 'horizontal',
      pagination: '.swiper-pagination',
      paginationClickable: true,
      speed: 1000,
      loop: true,
      observer: true,
      observeParents: true,
      autoplayDisableOnInteraction: false,
      autoplay: 500
  });
    $css.removeAll();
    $css.add('libs/swiper.css');
    $css.add('spxq/css/spxq.css');
    $css.add('libs/reset.css');

    $('.color ul li').on('click', function () {
        $('.color ul li').removeClass('active').eq($(this).index()).addClass('active');
    });
    $('.size1 ul li').on('click', function () {
        $('.size1 ul li').removeClass('active').eq($(this).index()).addClass('active');
    });

    $('.number .add').on('click', function () {
        count = $('.number input').val();
        count++;
        $scope.count++;
        $('.number input').val(count);
    });
    $('.number .reduce').on('click', function () {
        count = $('.number input').val();
        count--;
        $scope.count++;
        $('.number input').val(count);
        if (count < 1) {
          $('.number input').val(1);
        }
    });



    // 通过type选择需要遍历某个JSON
    if(urlObj.type == "home") {
        $http.get("http://localhost:8888/home/home.json").success(function (data) {
            console.log("请求的是Homejson");
            // console.log(data.data);
            // 遍历数据，找到与商品编号id相同的数据
            angular.forEach(data.data, function (value,index){
                // console.log(value)
                angular.forEach(value.list, function (ele, index){
                    // console.log(ele)
                    // 找到数据后将数据添加到页面中
                    if(ele.id == goodsId){
                        console.log("找到了")
                        console.log(ele.price)
                        console.log(ele.imgUrl)
                        $scope.price = ele.price;
                        $scope.imgUrl = ele.imgUrl;
                        $scope.goodsType = ele.type;
                        $scope.goodsPrice = "￥" + ele.price;
                        // 动态添加轮播图图片
                        for(var i = 0; i<3;i++){
                            $('<div class="swiper-slide s1">'
                                +'<img src="'+ ele.imgUrl +'" alt="" />'
                                +'</div>').appendTo($('.swiper-wrapper'));
                        }
                        $('<img src="'+ ele.imgUrl +'" alt="" />').appendTo($('.show1'));
                        $('<img src="'+ ele.imgUrl +'" alt="" />').appendTo($('.show2'));
                        $('<img src="'+ ele.imgUrl +'" alt="" />').appendTo($('.show3'));
                        $scope.goodsTittle = ele.title;
                    }
                })
            })

        })
    } else if (urlObj.type == "yanjing") {
        $http.get("http://localhost:8888/home/yanjing.json").success(function (data) {
            console.log("请求的是yanjingjson");
            console.log(data);
            angular.forEach(data.data, function (value,index){
                // console.log(value)
                // angular.forEach(value, function (ele, index){
                    // console.log(ele)
                    // 找到数据后将数据添加到页面中
                    if(value.id == goodsId){
                        console.log("找到了")
                        console.log(value.price)
                        console.log(value.imgUrl)
                        $scope.price = value.price;
                        $scope.imgUrl = value.imgUrl;
                        $scope.goodsType = value.type;
                        $scope.goodsPrice = "￥" + value.price;
                        // 动态添加轮播图图片
                        for(var i = 0; i<3;i++){
                            $('<div class="swiper-slide s1">'
                                +'<img src="'+ value.imgUrl +'" alt="" />'
                                +'</div>').appendTo($('.swiper-wrapper'));
                        }
                        $('<img src="'+ value.imgUrl +'" alt="" />').appendTo($('.show1'));
                        $('<img src="'+ value.imgUrl +'" alt="" />').appendTo($('.show2'));
                        $('<img src="'+ value.imgUrl +'" alt="" />').appendTo($('.show3'));
                        $scope.goodsTittle = value.headline;
                    }
                // })
            })
        })
    } else if (urlObj.type == "fenlei") {
        $http.get("http://localhost:8888/category/yanjing.json").success(function (data) {
            console.log("请求的是fenleijson");
            console.log(data);
            angular.forEach(data, function (value,index){
                // console.log(value)
                angular.forEach(value.data, function (ele, index){
                    // console.log(ele)
                    // 找到数据后将数据添加到页面中
                    if(ele.id == goodsId){
                        console.log("找到了")
                        console.log(ele.price)
                        console.log(ele.imgUrl)
                        $scope.price = ele.price;
                        $scope.imgUrl = ele.imgUrl;
                        $scope.goodsType = ele.type;
                        $scope.goodsPrice = "￥" + ele.price;
                        // 动态添加轮播图图片
                        for(var i = 0; i<3;i++){
                            $('<div class="swiper-slide s1">'
                                +'<img src="'+ ele.imgUrl +'" alt="" />'
                                +'</div>').appendTo($('.swiper-wrapper'));
                        }
                        $('<img src="'+ ele.imgUrl +'" alt="" />').appendTo($('.show1'));
                        $('<img src="'+ ele.imgUrl +'" alt="" />').appendTo($('.show2'));
                        $('<img src="'+ ele.imgUrl +'" alt="" />').appendTo($('.show3'));
                        $scope.goodsTittle =  ele.headline;
                    }
                })
            })
        })
    }


});
