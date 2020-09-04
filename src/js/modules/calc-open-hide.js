module.exports = function() {

  //begin calculator-open-hidden
  $('.calculator-open-section__btn').on('click', function (e) {
    e.preventDefault();

    $('.calculator-open-section, .calculator-banners--desktop').slideUp();
    $('.calculator-form-right, .calculator-banners--mobile').slideDown();
    $('.calculator-form-right').addClass('active');
  });
  //end calculator-open-hidden

};