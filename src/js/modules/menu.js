module.exports = function() {

  //begin open-close menu
  $('.burger input').on('click', function () {
    $('.header-bottom').slideToggle(100);
    //скрываем подменю
    $('.header-bottom-menu__item--parent').removeClass('active');
    $('#submenu').slideUp(100);
  });
  //end open-close menu

  //begin open-close menu
  $('.header-bottom-menu__item--parent .header-bottom-menu__link, .header-bottom-menu__item--parent .header-bottom-menu__btn').on('click', function () {
    let thisParent = $(this).parents('.header-bottom-menu__item--parent');

    $(thisParent).toggleClass('active');
    $('#submenu').slideToggle(100);
  });
  //end open-close menu

  //begin open-close footer-mobile menu
  $('.footer-item__btn-contacts').on('click', function (e) {
    e.preventDefault();
    $('.footer-item__menu-contacts-list-close, .footer-item__menu-contacts-list').addClass('active');
  });

  $('.footer-item__menu-contacts-list-close').on('click', function (e) {
    e.preventDefault();
    $('.footer-item__menu-contacts-list-close, .footer-item__menu-contacts-list').removeClass('active');
  });
  //end open-close footer-mobile menu




};