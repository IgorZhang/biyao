app.controller('spxqCtrl', function ($scope, $css) {
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
        $('.number input').val(count);
    });
    $('.number .reduce').on('click', function () {
        count = $('.number input').val();
        count--;
        $('.number input').val(count);
        if (count < 1) {
          $('.number input').val(1);
        }
    });
});
