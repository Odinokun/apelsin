module.exports = function() {

  //begin open-close menu
  $('.burger input').on('click', function () {
    $('.header-bottom').slideToggle();
    //скрываем подменю
    $('.header-bottom-menu__item--parent').removeClass('active');
    $('#submenu').slideUp();
  });
  //end open-close menu

  //begin open-close menu
  $('.header-bottom-menu__item--parent .header-bottom-menu__link, .header-bottom-menu__item--parent .header-bottom-menu__btn').on('click', function () {
    let thisParent = $(this).parents('.header-bottom-menu__item--parent');

    $(thisParent).toggleClass('active');
    $('#submenu').slideToggle();
  });
  //end open-close menu

};