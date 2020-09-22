module.exports = function() {

  // begin Slick slider

  $('#top-slider__list').slick({
    dots: true,
    arrows: true,
    infinite: true,
    autoplay: false,
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
  // end Slick slider

};