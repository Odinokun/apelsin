module.exports = function() {

  // begin advantage text open
  $('.advantage-sec__body-btn').on('click', function (e) {
    e.preventDefault();
    $('.advantage-sec__body-footer').fadeOut();
    $('.advantage-sec__body-hidden').slideDown();
  });
  // end advantage text open

};