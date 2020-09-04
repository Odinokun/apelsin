module.exports = function() {

  $('.calculator-item-tv__input').on('click', function () {
    let checkValBase = $('.calculator-item-tv__input--base').prop("checked");
    let checkValPremium = $('.calculator-item-tv__input--premium').prop("checked");
    let checkKinozal = $('#calculator-item-tv-footer__static-label');

    if(checkValBase || checkValPremium){
      $(checkKinozal).slideDown();
    } else {
      $(checkKinozal).slideUp();

    }
  });

};