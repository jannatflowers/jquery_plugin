// navbarscrolling bar start
function scrollToSection(event) {
    event.preventDefault();
    var $section = $($(this).attr('href')); 
    $('html, body').animate({
      scrollTop: $section.offset().top
    }, 200);
  }
  $('[data-scroll]').on('click', scrollToSection);

  // navbarcolorchang start

$(document).ready(function(){
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if (scroll > 200) {
      $(".sticky").css({"background-color": "#e91e63ad", "transition": ".8s"});
    }

    else{
      $(".sticky").css("background" , "");    
    }
  })
})