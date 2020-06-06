$(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
      $('.footer').fadeOut();
    } else {
      $('.footer').fadeIn();
    }
  });