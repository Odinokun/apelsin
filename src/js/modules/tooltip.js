module.exports = function () {

  //begin tooltip
  $(document).on('ready', function () {
    let tooltip = $('.tooltip');

    let windowWidth = $(window).width();//ширина окна
    let tooltipLeft = $(tooltip).offset().left;//отступ слева
    let tooltipWidth = $(tooltip).outerWidth();//ширина тултипа
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