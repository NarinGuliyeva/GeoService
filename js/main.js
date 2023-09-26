$(document).ready(function () {


    $('header .navbar-toggler').click(function(e){
        e.stopPropagation();
        $('header .menu_wrapper').addClass('resp_nav');
        $('header .collapse').css('display', 'block');
        $('header .navbar-collapse').addClass('bg_color');
        $('header .menu_wrapper').animate({right: '0'}, 300, 'linear');
        $('body').css('overflow-y', 'hidden');
    });
    
    $('header .close').click(function(){
        $('header .menu_wrapper').animate({right: '-100%'}, 300, 'linear');
        $('header .menu_wrapper').removeClass('resp_nav');
        $('header .navbar-collapse').removeClass('bg_color');
        setTimeout(function () {
            $('header .collapse').css('display', 'none');
            $('body').css('overflow-y', 'auto');
          }, 200);
    });
    
    $('header .dropdown').click(function(){
        $(this).find('.dropdown-menu').toggleClass('resp_dropdown');
    });
    
    $('header .menu_wrapper').click(function(e){
        e.stopPropagation();
    })
    
    function responsive() {
        if ($(window).width() < 990.91) {
          $('.dropdown .nav-link').attr('href', 'javascript:void(0)');
        } else {
            $('.dropdown .nav-link').attr('href', '/services/');
        }
    }
    
    responsive();
    $(window).resize(function() {
      responsive(); 
    });
    
    
    $('body').click(function () {
        $('header .menu_wrapper').animate({right: '-100%'}, 300, 'linear');
          setTimeout(function () {
            $('header .collapse').css('display', 'none');
            $('body').css('overflow-y', 'visible');
          }, 200);
    });

    // Slider
    $('main .ws_controls').addClass('container');
    $(window).scroll(function () {
      let header = $("header"),
        headHeight = header.height(),
        scroll = $(this).scrollTop();
  
      if (scroll > headHeight) {
        header.addClass("fixed animate__fadeInDownBig header_bg_color");
      } else {
        header.removeClass("fixed animate__fadeInDownBig header_bg_color");
      }
    });
    
    // Fancybox
    $(".highslide").attr("data-fancybox", "gallery");
    
    $('.main_gallery .quote a').attr("href", "/gallery/");
    $('.main_gallery .quote a').removeAttr("data-fancybox");
});
