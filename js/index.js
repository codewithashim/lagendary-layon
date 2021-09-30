// $(document).ready(function(){
//     $('c').owlCarousel({
//         loop:true,
//         nav:true,
//         responsive:{
//             0:{
//                 items:1
//             },
//             600:{
//                 items:1
//             },
//             1000:{
//                 items:1
//             }
//         }
//     })
//   });

$(".js_road_map").owlCarousel({
  items: 5,
  nav: true,
  dots: true,
  margin: 30,
  navText: [
    "<i class='fa fa-angle-left'></i>",
    "<i class='fa fa-angle-right'></i>",
  ],
  responsive: {
    0: { items: 1 },
    400: { items: 2, center: true },
    599: { items: 3 },
    1024: { items: 4 },
    1170: { items: 5 },
  },
});

// nav bar
/* slick Nav */
// mobile_menu
var menu = $("ul#navigation");
if (menu.length) {
  menu.slicknav({
    prependTo: ".mobile_menu",
    closedSymbol: "+",
    openedSymbol: "-",
  });
}

/*   Custom Sticky Menu  */
$(window).on('scroll', function () {
    var scroll = $(window).scrollTop();
    if (scroll < 245) {
        $(".header-sticky").removeClass("sticky-bar");
    } else {
        $(".header-sticky").addClass("sticky-bar");
    }
});

// menu fixed js code
$(window).scroll(function () {
    var window_top = $(window).scrollTop() + 1;
    if (window_top > 50) {
        $('.main_menu').addClass('menu_fixed animated fadeInDown');
    } else {
        $('.main_menu').removeClass('menu_fixed animated fadeInDown');
    }
});
