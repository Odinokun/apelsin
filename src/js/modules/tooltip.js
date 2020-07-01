module.exports = function () {

  //begin tooltip
  $(window).on('load', function () {
    let tooltip = $('.tooltip');

    let windowWidth = $(window).width();//ширина окна
    let tooltipLeft = $(tooltip).offset().left;//отступ слева
    let tooltipWidth = $(tooltip).outerWidth();//штрина тултипа
    //отступ справа
    let tooltipRight = windowWidth - tooltipLeft - tooltipWidth;

    if (tooltipRight < 20) {
      $(tooltip).offset({left: windowWidth - tooltipWidth - 20});
    }
    if (tooltipLeft < 20) {
      $(tooltip).offset({left: 20});
    }
  });
  //end tooltip

};