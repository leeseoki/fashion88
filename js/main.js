// Toggle menu on mobile view
$('.nav-toggle').click(
  function() {
    $('.nav-sections').toggleClass('nav-explain');
    if ($('.nav-sections').hasClass('nav-explain')) {
      $('body').addClass('no-scroll');
    } else {
      $('body').removeClass('no-scroll');
    }
  }
);