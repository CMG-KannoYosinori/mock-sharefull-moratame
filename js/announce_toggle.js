$(document).ready(function() {
   $('#announceTgl').click(function() {
      $('#announce').slideToggle();
  });
  $('#announce').bind('mouseleave', function() {
      $('#announce').slideUp();
  });
});