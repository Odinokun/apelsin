module.exports = function() {

  // begin range slider
  // let steps = [40, 60, 80, 100, 200, 300, 400, 1000];
  let steps = $("#calculator-item-internet__range-slider").data('internet');

  $("#calculator-item-internet__range-slider").slider({
    range: "min",
    value: 3, //текущее значение
    min: 0,
    max: steps.length - 1, //максимальное значение
    step: 1,
    slide: function(event, ui) {
      $(this).removeClass('active');

      if(steps[ui.value] > 100) {

        $(this).slider("value", 7); //хак, что бы ползунок перепрыгивал в конец
        //$(this).addClass('active'); //изменяю цвет при максимальном значении
        //выводим максимальное значение массива справа в баннере
        $('#calculator-form-right__header-title').html(steps[steps.length - 1] + ' Мбит/с');

        return false;
      }

      $('#calculator-form-right__header-title').html(steps[ui.value] + ' Мбит/с')

    }
  });
  // end range slider

};