module.exports = function() {

  // begin range slider
  let steps = [40, 60, 80, 100, 200, 300, 400, 1000];

  $("#calculator-item-internet__range-slider").slider({
    range: "min",
    value: 3, //текущее значение
    min: 0,
    max: steps.length - 1, //максимальнео значение
    step: 1,
    slide: function(event, ui) {
      //если значение больше 100, но меньше 1000
      if(steps[ui.value] > 100 && steps[ui.value] < 1000) {
        //хак, что бы ползунок перепрыгивал в конец
        $(this).slider("value", 7);
        return false;
      }
    }
  });
  // end range slider


};