module.exports = function () {

  //Взял из Kerner

  // begin фиксируем карточку заказа товара при скролле
  let calc = $('.calculator-form-right');
  let footer = $('.calculator-form-right__check-footer');

  $(window).scroll(function() {
    if(calc.hasClass('active')){
      //высота окна
      let windowHeight = $(window).height();
      //сколько прскроллили
      let scrollVal = $(window).scrollTop();
      //высота до правого блока от верха страницы
      let calcWrapOffsetTop = $('.calculator-form-right').offset().top;
      //высота строки с результатом от верха страницы
      let resultRowOffsetTop = $('.calculator-form-right__result').offset().top;

      //скролл + высота окна
      let targetPoint = scrollVal + windowHeight;

      if (calcWrapOffsetTop < targetPoint  && resultRowOffsetTop > targetPoint){
        $(footer).addClass('fixed');
      } else {
        $(footer).removeClass('fixed');
      }
    }

  });
  // end фиксируем карточку заказа товара при скролле

};