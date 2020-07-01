module.exports = function() {

  // begin Slick slider

  $('#top-slider__list').slick({
    dots: true,
    arrows: true,
    infinite: true,
    autoplay: true,
    fade: true,
    prevArrow: "<div class='prev'><svg width=\"14\" height=\"25\" viewBox=\"0 0 14 25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M13.5695 2.49876L3.54376 12.5006L13.5695 22.5015C14.1435 23.0731 14.1435 23.9999 13.5695 24.5705C12.9954 25.1432 12.0674 25.1432 11.4914 24.5705L0.431999 13.5346C-0.144 12.963 -0.144 12.0372 0.431999 11.4656L11.4914 0.428735C12.0674 -0.142911 12.9954 -0.142911 13.5695 0.428735C14.1435 0.999405 14.1435 1.92613 13.5695 2.49876Z\"/></svg></div>",
    nextArrow: "<div class='next'><svg width=\"14\" height=\"25\" viewBox=\"0 0 14 25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M0.430532 22.5012L10.4562 12.4994L0.43053 2.49851C-0.143513 1.92687 -0.143513 1.00014 0.43053 0.429467C1.00457 -0.143153 1.93263 -0.143153 2.50862 0.429467L13.568 11.4654C14.144 12.037 14.144 12.9628 13.568 13.5344L2.50863 24.5713C1.93263 25.1429 1.00458 25.1429 0.430532 24.5713C-0.143511 24.0006 -0.143511 23.0739 0.430532 22.5012Z\"/></svg></div>"
  });

  $('#presents-slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: "<div class='prev'><svg width=\"14\" height=\"25\" viewBox=\"0 0 14 25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M13.5695 2.49876L3.54376 12.5006L13.5695 22.5015C14.1435 23.0731 14.1435 23.9999 13.5695 24.5705C12.9954 25.1432 12.0674 25.1432 11.4914 24.5705L0.431999 13.5346C-0.144 12.963 -0.144 12.0372 0.431999 11.4656L11.4914 0.428735C12.0674 -0.142911 12.9954 -0.142911 13.5695 0.428735C14.1435 0.999405 14.1435 1.92613 13.5695 2.49876Z\"/></svg></div>",
    nextArrow: "<div class='next'><svg width=\"14\" height=\"25\" viewBox=\"0 0 14 25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M0.430532 22.5012L10.4562 12.4994L0.43053 2.49851C-0.143513 1.92687 -0.143513 1.00014 0.43053 0.429467C1.00457 -0.143153 1.93263 -0.143153 2.50862 0.429467L13.568 11.4654C14.144 12.037 14.144 12.9628 13.568 13.5344L2.50863 24.5713C1.93263 25.1429 1.00458 25.1429 0.430532 24.5713C-0.143511 24.0006 -0.143511 23.0739 0.430532 22.5012Z\"/></svg></div>",
    responsive: [
      {
        breakpoint: 1281,
        settings: {
          dots: true,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      }, {
        breakpoint: 680,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });

  $('#news-sec__slider').slick({
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
           {
        breakpoint: 1024,
        settings: {
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }, {
        breakpoint: 680,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });



  // $('.slick').slick({
  //   dots: false,
  //   arrows: true,
  //   infinite: true,
  //   autoplay: true,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   prevArrow: "<div class='prev'><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"33\" height=\"14\" viewBox=\"0 0 33 14\"><g><g><path d=\"M6.173.33L.55 5.952c-.44.439-.44 1.15 0 1.59l5.623 5.623a1.125 1.125 0 0 0 1.59-1.59L4.06 7.872h27.036a1.125 1.125 0 0 0 0-2.249H4.06L7.763 1.92a1.121 1.121 0 0 0 0-1.59 1.125 1.125 0 0 0-1.59 0z\"/></g></g></svg></div>",
  //   nextArrow: "<div class='next'><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"33\" height=\"14\" viewBox=\"0 0 33 14\"><g><g><path d=\"M26.33 13.166l5.623-5.623c.439-.44.439-1.151 0-1.59L26.33.329a1.125 1.125 0 0 0-1.59 1.59l3.702 3.704H1.407a1.125 1.125 0 0 0 0 2.25h27.035l-3.703 3.703a1.121 1.121 0 0 0 0 1.59c.44.44 1.151.44 1.59 0z\"/></g></g></svg></div>",
  //   responsive: [
  //     {
  //       breakpoint: 481,
  //       settings: {
  //         arrows: false
  //       }
  //     }
  //   ]
  // });
  //
  // //begin slider with counters
  // // отображаем общее кол-во слайдов
  // $('#index-direction__slider').on('init', function (event, slick) {
  //   var allSlide = slick.slideCount;
  //   if (allSlide < 10) {
  //     allSlide = "0" + allSlide;
  //   }
  //   $("#counter-all").html(allSlide);
  // });
  // // отображаем текущий слайд в счетчике
  // $('#index-direction__slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
  //   var curSlide = currentSlide + 1;
  //   if (curSlide < 10) {
  //     curSlide = "0" + curSlide;
  //   }
  //   $("#counter-tab").html(curSlide);
  // });
  // // инициализируем слайдер
  // $('#index-direction__slider').slick({
  //   arrows: true,
  //   fade: true,
  //   autoplay: false,
  //   cssEase: 'linear',
  //   slidesToShow: 1,
  //   infinity:false,
  //   slidesToScroll: 1,
  //   dots: false,
  //   adaptiveHeight: true,
  //   dotsClass: 'custom_paging'
  // });
  // //end slider with counters
  //
  //
  // //begin fadeIn/Out left arrows
  // $('.slick-slider .slick-next').on('click', function () {
  //   var slider = $(this).parents('.slick-slider');
  //   $(slider).children('.slick-prev').addClass('active');
  // });
  // //end fadeIn/Out left arrows
  //
  // //begin fade next btn if last slide is active
  // $('.course-schedule__slider .slick-next, .course-schedule__slider .slick-prev').on('click', function () {
  //   var slider = $(this).parents('.course-schedule__slider');
  //   var lastChild = $(slider).find('.slick-slide:last');
  //
  //   if($(lastChild).hasClass('slick-active')){
  //     $(slider).children('.slick-next').addClass('hide');
  //   } else {
  //     $(slider).children('.slick-next').removeClass('hide');
  //   }
  // });
  // //end fade next btn if last slide is active

  // end Slick slider

};