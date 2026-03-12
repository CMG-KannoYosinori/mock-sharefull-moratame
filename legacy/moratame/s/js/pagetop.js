
var nowPosition = 0;

$(function () {
  $('#scrollContainer').click(function () {
    $('body,html').scrollTop(0);
  });
});

$(function () {
  $('#scrollContainer').hide();
  $(window).scroll(function () {
    diffPosition = nowPosition - $(window).scrollTop();
    nowPosition = $(window).scrollTop();
    if (diffPosition <= 0 || nowPosition <= 50) {
      $('#scrollContainer').stop(false, true).fadeOut();
    } else {
      $('#scrollContainer').stop(false, true).fadeIn();
    }
  });
});
