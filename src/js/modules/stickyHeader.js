module.exports = function () {

  // begin Sticky Header
  window.addEventListener('scroll', function(e) {
    let oldScroll = this.oldScroll || 0;
    let newScroll = this.scrollY;
    let isScrollDown = newScroll > oldScroll;
    let scrollTop = $(this).scrollTop();

    if (scrollTop >= 99) {
      document.querySelector('.header-bottom').classList.toggle('scroll-down', isScrollDown);
    }

    this.oldScroll = newScroll;
  });
  // end Sticky Header

};