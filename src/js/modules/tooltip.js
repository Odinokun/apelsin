module.exports = function () {

  //begin tooltip
  $('.tooltip-wrap').hover(function () {
    tooltipPosition();
  });

  function tooltipPosition() {
    let tooltip = $('.tooltip');

    if(!tooltip){
      let windowWidth = $(window).width(); //ширина окна
      let tooltipLeft = $(tooltip).offset().left; //отступ слева
      let tooltipWidth = $(tooltip).outerWidth(); //ширина тултипа
      //отступ справа
      let tooltipRight = windowWidth - tooltipLeft - tooltipWidth;

      if (tooltipLeft < 20) {
        $(tooltip).offset({left: 20});
      } else if (tooltipRight < 20) {
        $(tooltip).offset({right: windowWidth - tooltipWidth - 20});
      }
    }
  }

  tooltipPosition();
  //end tooltip

};