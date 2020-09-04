$(function() {

  // begin SVG for IE
  require('./modules/svg4everybody')();

  // begin no-js
  require('./modules/noJs')();

  // begin phone mask
  require('./modules/maskedinput')();

  // begin range slider
  require('./modules/rangeSlider')();

  // begin select UI
  require('./modules/selectUI')();

  // begin menu & submenu
  require('./modules/menu')();

  // begin tab
  require('./modules/tab')();

  // begin sales page show/close sale items
  require('./modules/salesShowMore')();

  // begin tooltip
  require('./modules/tooltip')();

  // begin Slick slider
  require('./modules/slick')();

  // begin Popups
  require('./modules/popup')();

  // begin Sticky header
  require('./modules/stickyHeader')();

  // begin Animate.css
  require('./modules/animateCss')();

  // begin advantage text open
  require('./modules/advantageOpen')();

  // begin calculator
  require('./modules/calc-open-hide')();
    //всплывающее окно с информацией в моб версии
  require('./modules/fixedCalc')();

  // begin sale countdown
  require('./modules/countdown')();

  // begin index page TV section
  require('./modules/tvCheckboxHideOn')();

});