$(document).ready(function () {
  $('.gallery').slick({
    
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 1500,
  slidesToShow: 4,
  slidesToScroll: 1,
  respondTo: "slider",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3
        
      }
    },
    {
      breakpoint: 620,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });
});
