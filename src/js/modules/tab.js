module.exports = function() {

  // begin sales tab
  $('.sales-tab__btn').on('click', function(e) {
    e.preventDefault();

    let activeTab = $(this).data('sale');

    $('.sales-tab__btn').toggleClass('active');

    $('.sales-tab__body').removeClass('active');
    $(activeTab).addClass('active');

    //обнуляем открытые акции
    $('.sales-tab__more-btn').removeClass('active');
    $('.sales-item.hidden').fadeOut();
  });
  // end sales tab

};