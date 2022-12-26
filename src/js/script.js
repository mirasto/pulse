$(document).ready(function(){
    $('.carousel__inner').slick({
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      variableWidth: true,
      prevArrow: '<button type="button" class="slick-prev"> <img src="icons/icon_arrow_left.png">  </button>',
      nextArrow: '<button type="button" class="slick-next"> <img src="icons/icon_arrow_right.png"> </button>',
      responsive: [
        {
          breakpoint: 992,
          settings: {
            dots: true,
            arrows: false
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
  });