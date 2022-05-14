$ (function(){
  

  $('.product-tabs__top-item').on('click', function(e){
    e.preventDefault();
    $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
    $(this).addClass('product-tabs__top-item--active');
    
    $('.product-tabs__item').removeClass('product-tabs__item--active');
    $($(this).attr('href')).addClass('product-tabs__item--active');
  });


  $(".recent-item__stars").rateYo({
    rating: 4,
    starWidth: "11px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true,
    spacing: "6px",
  });

  $(".product-one__star").rateYo({
    rating: 4,
    starWidth: "17px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true,
    spacing: "6px",
  });
  
  // кнопки 
   $(document).on('click', '.input-number__minus', function () {
        let total = $(this).next();
        if (total.val() > 1) {
            total.val(+total.val() - 1);
        }
    });
    
    $(document).on('click', '.input-number__plus', function () {
        let total = $(this).prev();
        total.val(+total.val() + 1);
    });
    
    document.querySelectorAll('.input-number__input').forEach(function (el) {
        el.addEventListener('input', function () {
            this.value = this.value.replace(/[^\d]/g, '');
        });
    });


  $('.product-slider__thumb').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  focusOnSelect: true,
  vertical: true,
  draggable:false,
  asNavFor: '.product-slider__big'
  });

$('.product-slider__big').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  draggable: false,
  arrows: false,
  fade: true,
  asNavFor: '.product-slider__thumb',
  
  });
  


  $(".filter-price__slider").ionRangeSlider({
        type: "double",
        min: 0,
        max: 1000,
        from: 200,
        to: 500,
        grid: true,
        prefix: "$",
         onChange: function (data) {
            $(".filter-price__from").text(data.from);
            $(".filter-price__to").text(data.to);   
        },
    });


  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade:true,
    autoplay:true,
    autoplaySpeed: 3000,
  });

  $('.related__items').slick({
    arrows: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1
  });

  

  
  

  var containerEl1 = document.querySelector('[data-ref="container-1"]');
  var containerEl2 = document.querySelector('[data-ref="container-2"]');
 
  var config = {
    controls: {
      scope: 'local'
    }
  };
 
  var mixer1 = mixitup(containerEl1, config);
  var mixer2 = mixitup(containerEl2, config);

}

);