app.controller('homeCtrl', function ($scope,$css,$http) {

    $scope.tittle = "首页";
    $css.removeAll();
    $css.add('../home/css/home.css');

    $http.get('./home/home.json').success(function(data){
      $scope.items = data.data
    })
    window.onload = function(){
    $('#home nav section img').width(width);
    }
    clearInterval(timer);
    var width = $('#home nav').width();
    var count = $('#home nav section img').length;
    var index = 0;
    var timer = "";
    function go(){
      timer = setInterval(function(){
      index++;
      if (index >= count) {
        index = 0;
      }
      $('#home nav section').css('left',-width * index);
      $('#home nav .wrap span').removeClass('mound').eq(index).addClass('mound');
    },1000);
    }
    go();
    function munch(){
      var time = setTimeout(function(){
          end();
          go();
      },1000)
    }
    function end(){
        clearInterval(timer);
        timer = null;
    }
      var touch ="";
      var p = "";
      var a = "";
      var nav = document.querySelector("#home nav section");

      nav.addEventListener('touchstart',function(e){
        // console.log(touch);
        end();
        p = e.changedTouches[0].pageX;
        touch = e.changedTouches[0].pageX - nav.offsetLeft;
      })
      nav.addEventListener('touchmove',function(e){
        var touge = e.changedTouches[0].pageX;
        // console.log(e);
        nav.style.left = touge - touch + 'px';

      })
      nav.addEventListener('touchend',function(e){
        a = e.changedTouches[0].pageX;
      if (p - a > 20 ) {
        index++;
        if (index >= count) {
          index = count -1;
        }
        nav.style.left = -width * index + "px";
        $('#home nav .wrap span').removeClass('mound').eq(index).addClass('mound');

      }else if(a - p > 20){
        index--;
        if (index < 0) {
          index = 0;
        }
        nav.style.left = -width * index + "px";
        $('#home nav .wrap span').removeClass('mound').eq(index).addClass('mound');
      }
          end();
          munch();
      })
})
