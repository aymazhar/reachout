const DISPLAY = {
  BLOCK: 'block',
  NONE: 'none',
  FLEX: 'flex'
};
const animationSpeed = 250;
const scrollSpeed = 650;
const mobileWidth = 575;

function isMobile(){
  return window.innerWidth < mobileWidth;
}

$('nav a').on('click', function(event)  {
    event.preventDefault();
    const hash = this.hash;
    let offset = 0;
    if (isMobile() && !$('nav').hasClass('navbar-fixed')){
      offset = $('nav').outerHeight();
    };
    $('html, body').animate({
      scrollTop: $(hash).offset().top - offset
    }, scrollSpeed);
    $( 'nav button' ).trigger( 'click' );
});

$('nav button').on('click', function()  {
  if (isMobile()){
    $("nav .nav-menu").toggle(animationSpeed);
    document.querySelector('nav').scrollIntoView({behavior: 'smooth'});
  }
});


window.addEventListener('scroll', function() {
  const padding = 48;
  if (window.scrollY > $('#landing').outerHeight()){
    const newPadding = padding + $('nav').outerHeight();
    $('nav').addClass('navbar-fixed');
    $('#about').css('padding-top', `${newPadding}`+ 'px');
  } else {
    $('nav').removeClass('navbar-fixed');
    $('#about').css('padding-top', `${padding}` + 'px');
  }
})

$(document).resize(function(){
  if (isMobile()){
    $('nav .nav-menu').css('display', DISPLAY.NONE);
  } else {
    $('nav .nav-menu').css('display', DISPLAY.FLEX);
  }
})