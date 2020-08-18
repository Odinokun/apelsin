module.exports = function() {

  // begin sales page show/close sale items
  $('.sales-tab__more-btn').on('click', function() {
    let hiddenItems = $('.sales-tab__body.active').find('.sales-item.hidden')

    $(this).toggleClass('active');
    $(hiddenItems).fadeToggle();
  });
  // end sales page show/close sale items

};