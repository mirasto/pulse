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
          breakpoint: 991,
          settings: {
            arrows: false
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow:   2,
            slidesToScroll: 2,
            arrows: false    
          }
        },
        {
          breakpoint: 575,
          settings: {
            arrows: false
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
       $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });
    
    

      function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            });
        });
    }

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');


    // modal

    $('[data-modal=consultation]').on('click',function(){
      $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function() {
      $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
    });
    $('.button_mini').each(function(i) {
      $(this).on('click', function(){
        $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
        $('.overlay, #order').fadeIn('slow');
      })
    })


  });

