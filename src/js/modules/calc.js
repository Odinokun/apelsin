module.exports = function() {

  //begin calculator

  //меняем цену за IP
  $('#calculator-item-internet__static-checkbox').on('click', function () {
    if ($(this).prop('checked')){
      $('#calculator-form-right__row-item--static span strong').html('49 ₴/мес.');
    } else {
      $('#calculator-form-right__row-item--static span strong').html('0 ₴/мес.');
    }
  });

  //меняем TV пакет
  $('.calculator-item-tv__input').on('click', function () {

  });
  //end calculator

};