module.exports = function() {

  // begin range slider
  let steps = $("#calculator-item-internet__range-slider").data('internet');
  
  if(steps){
    $("#calculator-item-internet__range-slider").slider({
      range: "min",
      value: 1, //текущее значение
      min: 0,
      max: steps.length - 1, //максимальное значение
      step: 1,
      create: function() {
        let currVal = $(this).slider( "value" );
        $('.ui-slider-handle').html(steps[currVal] + '<span>UA-IX</span>');
        $('.calculator-item-internet__range-slider-scale-min').html(steps[0]);
        $('.calculator-item-internet__range-slider-scale-max').html(steps[steps.length - 1]);
      },
      slide: function(event, ui) {
        $('.ui-slider-handle').html(steps[ui.value] + '<span>UA-IX</span>');
        $('#calculator-form-right__header-title').html(steps[ui.value] + ' Мбит/с');
      }
    });
  }
  // end range slider

};