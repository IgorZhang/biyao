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
    $css.add('../css/spxq.css');
});
