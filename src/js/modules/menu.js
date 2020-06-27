module.exports = function() {

  //begin open-close menu
  $('.burger input').on('click', function () {
    $('.header-bottom').slideToggle();
    //скрываем все подменю
    $('.submenu-left__title, .header-bottom-menu__item--parent').removeClass('active');
    $('.submenu-left__list, #submenu').slideUp();
  });
  //end open-close menu

  //begin open-close menu
  $('.header-bottom-menu__item--parent .header-bottom-menu__link, .header-bottom-menu__item--parent .header-bottom-menu__btn').on('click', function () {
    let thisParent = $(this).parents('.header-bottom-menu__item--parent');

    $(thisParent).toggleClass('active');
    $('#submenu').slideToggle();
    //скрываем подменю
    $('.submenu-left__title').removeClass('active');
    $('.submenu-left__list').slideUp();
  });
  //end open-close menu

  //begin open-close submenu-left__list
  $('.submenu-left__title').on('click', function () {
    $(this).toggleClass('active');
    $(this).siblings('.submenu-left__list').slideToggle();
  });
  //end open-close submenu-left__list

};