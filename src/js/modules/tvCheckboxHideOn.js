module.exports = function () {

  $('.calculator-item-tv__input').on('click', function () {
    //значение базового тарифа
    let checkValBase = $('.calculator-item-tv__input--base').prop("checked");
    //значение премиального тарифа
    let checkValPremium = $('.calculator-item-tv__input--premium').prop("checked");
    //чекбокс с Кинозалом
    let checkKinozal = $('#calculator-item-tv-footer__static-label');
    //свитч с Амедиатекой
    let aMedia = $('.calculator-item-tv-footer__input');

    //если 2 последних тарифа, то показываем чекбокс с ТВ
    if (checkValBase || checkValPremium) {
      $(checkKinozal).slideDown();
    } else {
      $(checkKinozal).slideUp();
    }

    if(!checkValPremium){
      $(aMedia).prop('checked', false);
    }
  });

  $('.calculator-item-tv-footer__input').on('click', function () {
    let amediaVal = $(this).prop('checked');
    let checkValPremium = $('.calculator-item-tv__input--premium');
    let checkKinozal = $('#calculator-item-tv-footer__static-label');

    if (amediaVal) {
      $(checkValPremium).prop('checked', true);
      $(checkKinozal).slideDown();
    }
  });

};