$(document).ready(function(){

   //blog-slider
  $('.blog-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    autoplay:true,
    autoplayTimeout:2000,
    responsive:{
        0:{
            items:1
        },
        667:{
            items:1
        },
        1000:{
            items:4
        }
    }
  })
  
  //testi-slider
  $('.testi-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    autoplay:true,
    autoplayTimeout:2000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
  })
//counter js code
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });







});


//MixItUp.....
  var containerEl = document.querySelector('.port-area');

  var mixer = mixitup(containerEl);
