(function ($) {
  $(".js-t-accordion").on("click", function () {
    var $this = $(this);
    $this.next().slideToggle("normal");
    $this.toggleClass("t-arrow_down t-arrow_up");
  });
}(jQuery));
