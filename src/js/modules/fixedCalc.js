module.exports = function () {

  // Получаем нужный элемент
  let element = document.querySelector('.calculator-form');
  let elementBottom = document.querySelector('.calculator-form');

  let Visible = function (target) {
    // Все позиции элемента
    let targetPosition = {
        top: window.pageYOffset + target.getBoundingClientRect().top,
        left: window.pageXOffset + target.getBoundingClientRect().left,
        right: window.pageXOffset + target.getBoundingClientRect().right,
        bottom: window.pageYOffset + target.getBoundingClientRect().bottom
      },
      // Получаем позиции окна
      windowPosition = {
        top: window.pageYOffset,
        left: window.pageXOffset,
        right: window.pageXOffset + document.documentElement.clientWidth,
        bottom: window.pageYOffset + document.documentElement.clientHeight
      };

    if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
      targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
      targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
      targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
      // Если элемент полностью видно, то запускаем следующий код
      console.clear();
      console.log('Вы видите элемент :)');
    } else {
      // Если элемент не видно, то запускаем этот код
      console.clear();
    }
  };

// Запускаем функцию при прокрутке страницы
  window.addEventListener('scroll', function() {
    Visible (element);
  });

// А также запустим функцию сразу. А то вдруг, элемент изначально видно
  Visible (element);

  window.addEventListener('scroll', function(e) {
    // let one = $('.calculator-form-right__footer').position().top;
    // let two = $(window).scrollTop();
    // let three = $('.calculator-form-right__footer').offset().top - $(window).scrollTop();
    // console.log(one);
    // console.log(two);
    // console.log(three);


    //-let topObj = $(".calculator-form-right__header").position().top; //насколько вверх прокручен заголовок формы
    //-let windowHeight = $(window).height();
    // console.log('от формы до верха' + topObj);
    // console.log(windowHeight);
    // let topObj = document.querySelector('.calculator-form-right');

    // let topObj = $(".calculator-form-right").offset().top - $(window).scrollTop();
    //let topScroll = $(window).scrollTop(); //сколько проскролили

    //-console.log(topObj + windowHeight);

    // console.log('проскролили' + topScroll);
    // console.log('от формы до верха' + topObj);

    // if(topScroll < topObj){
    //   console.log('KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK');
    // }
  //   let oldScroll = this.oldScroll || 0;
  //   let newScroll = this.scrollY;
  //   let isScrollDown = newScroll > oldScroll;
  //   let scrollTop = $(this).scrollTop();
  //
  //   let calcWrap = document.querySelector('.calculator-form-right');
  //   let fixedCalc = document.querySelector('.calculator-form-right__check-footer');
  //
  //   if (scrollTop >= 99) {
  //     fixedCalc.classList.toggle('scroll-down', isScrollDown);
  //   }
  //
  //   this.oldScroll = newScroll;
  });
  // end Sticky Header

  //основа кода для начала анимации взята отсюда
  //https://www.youtube.com/watch?v=kupwmF72Plo&feature=em-uploademail
  // const animItems = document.querySelectorAll('.calculator-form-right__header');
  //
  // if (animItems.length > 0) {
  //   window.addEventListener('scroll', animOnScroll);
  //
  //   function animOnScroll() {
  //
  //     for (let i = 0; i < animItems.length; i++) {
  //       const animItem = animItems[i];
  //       const animItemHeight = animItem.offsetHeight;
  //       const animItemOffset = offset(animItem).top;
  //       const animStart = -1;
  //
  //       let animItemPoint = window.innerHeight - animItemHeight / animStart;
  //
  //       if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
  //         let startPos = window.pageYOffset - animItemOffset;
  //         animItem.style.transform = "scale(1.1) translateY(" + startPos * 0.09 + "px)";
          // console.log('HEKLO');
        // }
      // }
    // }
    //
    // function offset(el) {
    //   const rect = el.getBoundingClientRect(),
    //     scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    //     scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    //   return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
    // }
    //
    // animOnScroll();
  // }

};