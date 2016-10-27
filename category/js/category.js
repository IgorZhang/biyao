app.controller('categoryCtrl', function ($scope,$css,$http) {

    $scope.tittle = "分类";
    $css.removeAll();
    $css.add('../category/css/category.css');

    $http.get('http://localhost:8888/category/yanjing.json').success(function(data){
      $scope.items = data[0];

    })
    if ($('.max ul li').html() == "") {
      $('main .max').css('display','none');
    }
  $('.nav ul li').click(function () {
    $('.nav ul li').removeClass('li').eq($(this).index()).addClass('li');

    var index = $(this).index();
    $http.get('http://localhost:8888/category/yanjing.json').success(function(data){
      $scope.items = data[index];

    })
    setTimeout(function () {
      $('.max ul li:nth-child(1)').addClass('loge')
    },20)
  })


  $(document).on('click','.max ul li',function(){

      $('.max ul li').removeClass('loge').eq($(this).index()).addClass('loge');
  })

})
