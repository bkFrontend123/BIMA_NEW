/*************************
  Animation on scroll
*************************/
jQuery(function($) {
  
  // Function which adds the 'animated' class to any '.animatable' in view
  var doAnimations = function() {
    
    // Calc current offset and get all animatables
    var offset = $(window).scrollTop() + $(window).height(),
        $animatables = $('.animatable');
    
    // Unbind scroll handler if we have no animatables
    if ($animatables.length == 0) {
      $(window).off('scroll', doAnimations);
    }
    
    // Check all animatables and animate them if necessary
		$animatables.each(function(i) {
       var $animatable = $(this);
			if (($animatable.offset().top + $animatable.height() - 20) < offset) {
        $animatable.removeClass('animatable').addClass('animated');
			}
    });

	};
  
  // Hook doAnimations on scroll, and trigger a scroll
	$(window).on('scroll', doAnimations);
  $(window).trigger('scroll');

});

/*************************
  Partner Slider
*************************/
var swiper = new Swiper('.partnerSlider', {
  slidesPerView: 8,
  spaceBetween: 30,
  centeredSlides: true,
  speed: 2500,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
// Responsive breakpoints
  breakpoints: {
      // when window width is <= 320px
      320: {
          slidesPerView: 4,
          spaceBetween: 30
      },
      // when window width is <= 500px
      500: {
          slidesPerView: 5,
          spaceBetween: 30
      },
      // when window width is <= 768px
      768: {
          slidesPerView: 5,
          spaceBetween: 30
      },
      // when window width is <= 992px
      992: {
          slidesPerView: 6,
          spaceBetween: 30
      },
      // when window width is <= 1200px
      1200: {
          slidesPerView: 8,
          spaceBetween: 30
      }
  }
});

/*************************
  Companies Slider
*************************/
var swiper = new Swiper('.companySlider', {
  slidesPerView: 8,
  spaceBetween: 30,
  centeredSlides: true,
  speed: 2500,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
// Responsive breakpoints
  breakpoints: {
      // when window width is <= 320px
      320: {
          slidesPerView: 4,
          spaceBetween: 30
      },
      // when window width is <= 500px
      500: {
          slidesPerView: 5,
          spaceBetween: 30
      },
      // when window width is <= 768px
      768: {
          slidesPerView: 5,
          spaceBetween: 30
      },
      // when window width is <= 992px
      992: {
          slidesPerView: 6,
          spaceBetween: 30
      },
      // when window width is <= 1200px
      1200: {
          slidesPerView: 8,
          spaceBetween: 30
      }
  }
});

/*************************
  Testimonials Slider
*************************/
var swiper = new Swiper('.testimonialSlider', {
  slidesPerView: 1,
  spaceBetween: 40,
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
// Responsive breakpoints
  breakpoints: {
      // when window width is <= 320px
      320: {
          slidesPerView: 1,
          spaceBetween: 0
      },
      // when window width is <= 500px
      575: {
          slidesPerView: 1,
          spaceBetween: 0
      },
      // when window width is <= 768px
      767: {
          slidesPerView: 1,
          spaceBetween: 40
      },
      // when window width is <= 992px
      991: {
          slidesPerView: 1,
          spaceBetween: 40
      },
      // when window width is <= 1200px
      1199: {
          slidesPerView: 1,
          spaceBetween: 40
      }
  }
});