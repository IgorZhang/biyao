app.controller("gwc2Ctrl", function ($scope, $css) {
    $css.removeAll();
    $css.add('gwc/css/gwc2.css');

    var price = $('.bottom .price1').html();
    $('.number .add').on('click', function () {
        count = $('.number input').val();
        count++;
        $('.number input').val(count);
        $('.bottom .count').html(count);
        $('.bottom .price1').html(price * count);
        $('.thing-gwc > footer .right .price1').html(price * count);
        $('.thing-gwc > footer .right div span').html(count);
    });
    $('.number .reduce').on('click', function () {
        count = $('.number input').val();
        count--;
        $('.number input').val(count);
        $('.bottom .count').html(count);
        $('.bottom .price1').html(price * count);
        $('.thing-gwc > footer .right .price1').html(price * count);
        $('.thing-gwc > footer .right div span').html(count);
        if (count < 1) {
          $('.number input').val(1);
          $('.bottom .count').html(1);
          $('.bottom .price1').html(price * 1);
          $('.thing-gwc > footer .right .price1').html(price * 1);
          $('.thing-gwc > footer .right div span').html(1);
        }
    });
    var flag = true;
    $('.qx').on('click', function () {
        $('.qx').toggleClass('xz');
        flag = !flag;
        if (!flag) {
          $('.bottom .count').html(0);
          $('.bottom .price1').html(0);
          $('.thing-gwc > footer .right .price1').html(0);
          $('.thing-gwc > footer .right div span').html(0);
        }
        if (flag) {
          $('.bottom .count').html(count);
          $('.bottom .price1').html(price * count);
          $('.thing-gwc > footer .right .price1').html(price * count);
          $('.thing-gwc > footer .right div span').html(count);
        }


    });
});
