$ (function(){
  

  $(".recent-item__stars").rateYo({
    rating: 4,
    starWidth: "11px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true,
    spacing: "6px",
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