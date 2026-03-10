$(document).ready(function () {
  var headerHeight = $('header').outerHeight();
  if ($('main').length) {
    $('main').css('padding-top', headerHeight + 'px');
  }
  $('#menu').css('margin-top', headerHeight + 'px');

  $('#menu_btn').on('click', function () {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $(this).text('MENU');
      $('#menu').removeClass('open');
      $('.menu-background').removeClass('open');
    } else {
      $(this).addClass('active');
      $(this).text('CLOSE');
      $('#menu').addClass('open');
      $('.menu-background').addClass('open');
    }
  });

  $('.menu-background').on('click', function () {
    if ($(this).hasClass('open')) {
      $(this).removeClass('open');
      $('#menu_btn').removeClass('active').text('MENU');
      $('#menu').removeClass('open');
    }
  });
});

