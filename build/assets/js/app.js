!function(){return function e(t,o,n){function l(i,a){if(!o[i]){if(!t[i]){var r="function"==typeof require&&require;if(!a&&r)return r(i,!0);if(s)return s(i,!0);var c=new Error("Cannot find module '"+i+"'");throw c.code="MODULE_NOT_FOUND",c}var u=o[i]={exports:{}};t[i][0].call(u.exports,function(e){return l(t[i][1][e]||e)},u,u.exports,e,t,o,n)}return o[i].exports}for(var s="function"==typeof require&&require,i=0;i<n.length;i++)l(n[i]);return l}}()({1:[function(e,t,o){$(function(){e("./modules/svg4everybody")(),e("./modules/noJs")(),e("./modules/maskedinput")(),e("./modules/rangeSlider")(),e("./modules/selectUI")(),e("./modules/menu")(),e("./modules/tab")(),e("./modules/salesShowMore")(),e("./modules/tooltip")(),e("./modules/slick")(),e("./modules/popup")(),e("./modules/stickyHeader")(),e("./modules/animateCss")(),e("./modules/advantageOpen")(),e("./modules/calc-open-hide")(),e("./modules/fixedCalc")(),e("./modules/countdown")(),e("./modules/tvCheckboxHideOn")()})},{"./modules/advantageOpen":2,"./modules/animateCss":3,"./modules/calc-open-hide":4,"./modules/countdown":5,"./modules/fixedCalc":6,"./modules/maskedinput":7,"./modules/menu":8,"./modules/noJs":9,"./modules/popup":10,"./modules/rangeSlider":11,"./modules/salesShowMore":12,"./modules/selectUI":13,"./modules/slick":14,"./modules/stickyHeader":15,"./modules/svg4everybody":16,"./modules/tab":17,"./modules/tooltip":18,"./modules/tvCheckboxHideOn":19}],2:[function(e,t,o){t.exports=function(){$(".advantage-sec__body-btn").on("click",function(e){e.preventDefault(),$(".advantage-sec__body-footer").fadeOut(),$(".advantage-sec__body-hidden").slideDown()})}},{}],3:[function(e,t,o){t.exports=function(){!function(){let e=document.querySelectorAll(".fade-in");if(e.length>0)for(let t=0;t<e.length;t++)new Waypoint({element:e[t],handler:function(e){this.element.classList.add("animate__fadeInUp")},offset:"100%"})}()}},{}],4:[function(e,t,o){t.exports=function(){$(".calculator-open-section__btn").on("click",function(e){e.preventDefault(),$(".calculator-open-section, .calculator-banners--desktop").slideUp(),$(".calculator-form-right, .calculator-banners--mobile").slideDown(),$(".calculator-form-right").addClass("active")})}},{}],5:[function(e,t,o){t.exports=function(){let e=new Date("August 28, 2020 20:00:00").getTime(),t=setInterval(function(){let o=(new Date).getTime(),n=e-o,l=Math.floor(n/864e5),s=Math.floor(n%864e5/36e5),i=Math.floor(n%36e5/6e4),a=Math.floor(n%6e4/1e3);l<10&&(l="0"+l),s<10&&(s="0"+s),i<10&&(i="0"+i),a<10&&(a="0"+a);let r=document.querySelector("#sale-counter__body");r&&(document.querySelector("#sale-counter__body").innerHTML="<div class='sale-counter__item sale-counter__item--days'><span>"+l+"</span><span>Дни</span></div><div class='sale-counter__item sale-counter__item--hours'><span>"+s+"</span><span>Часы</span></div><div class='sale-counter__item sale-counter__item--minutes'><span>"+i+"</span><span>Минуты</span></div><div class='sale-counter__item sale-counter__item--seconds'><span>"+a+"</span><span>Секунды</span></div>"),n<0&&r&&(clearInterval(t),document.querySelector("#sale-counter__body").innerHTML=""),0===l&&document.querySelector(".sale-counter__item--days").classList.add("zero"),0===l&&0===s&&document.querySelector(".sale-counter__item--hours").classList.add("zero"),0===l&&0===s&&0===i&&document.querySelector(".sale-counter__item--minutes").classList.add("zero")},1e3)}},{}],6:[function(e,t,o){t.exports=function(){let e=$(".calculator-form-right"),t=$(".calculator-form-right__check-footer");$(window).scroll(function(){if(e.hasClass("active")){let e=$(window).height(),o=$(window).scrollTop(),n=$(".calculator-form-right").offset().top,l=$(".calculator-form-right__result").offset().top,s=o+e;n<s&&l>s?$(t).addClass("fixed"):$(t).removeClass("fixed")}})}},{}],7:[function(e,t,o){t.exports=function(){$(".phone-mask").mask("+38 (099) 999-99-99")}},{}],8:[function(e,t,o){t.exports=function(){$(".burger input").on("click",function(){$(".header-bottom").slideToggle(100),$(".header-bottom-menu__item--parent").removeClass("active"),$("#submenu").slideUp(100)}),$(".header-bottom-menu__item--parent .header-bottom-menu__link, .header-bottom-menu__item--parent .header-bottom-menu__btn").on("click",function(){let e=$(this).parents(".header-bottom-menu__item--parent");$(e).toggleClass("active"),$("#submenu").slideToggle(100)}),$(".footer-item__btn-contacts").on("click",function(e){e.preventDefault(),$(".footer-item__menu-contacts-list-close, .footer-item__menu-contacts-list").addClass("active")}),$(".footer-item__menu-contacts-list-close").on("click",function(e){e.preventDefault(),$(".footer-item__menu-contacts-list-close, .footer-item__menu-contacts-list").removeClass("active")})}},{}],9:[function(e,t,o){t.exports=function(){$(".main-wrap").removeClass("no-js")}},{}],10:[function(e,t,o){t.exports=function(){$(".popup-open").on("click",function(e){e.preventDefault();let t="#"+$(this).data("popup");$(t+", #popup__layer").fadeIn()}),$("#popup__layer, .popup__close").on("click",function(){$(".popup, #popup__layer").fadeOut()})}},{}],11:[function(e,t,o){t.exports=function(){let e=$("#calculator-item-internet__range-slider").data("internet");e&&$("#calculator-item-internet__range-slider").slider({range:"min",value:1,min:0,max:e.length-1,step:1,create:function(){let t=$(this).slider("value");$(".ui-slider-handle").html(e[t]+"<span>UA-IX</span>"),$(".calculator-item-internet__range-slider-scale-min").html(e[0]),$(".calculator-item-internet__range-slider-scale-max").html(e[e.length-1])},slide:function(t,o){$(".ui-slider-handle").html(e[o.value]+"<span>UA-IX</span>"),$("#calculator-form-right__header-title").html(e[o.value]+" Мбит/с")}})}},{}],12:[function(e,t,o){t.exports=function(){$(".sales-tab__more-btn").on("click",function(){let e=$(".sales-tab__body.active").find(".sales-item.hidden");$(this).toggleClass("active"),$(e).fadeToggle()})}},{}],13:[function(e,t,o){t.exports=function(){$("#region-select").selectmenu().selectmenu("menuWidget").addClass("region-select__menu"),$("#lang").selectmenu().selectmenu("menuWidget").addClass("lang__menu")}},{}],14:[function(e,t,o){t.exports=function(){$("#top-slider__list").slick({dots:!0,arrows:!0,infinite:!0,autoplay:!1,fade:!0,prevArrow:'<div class=\'prev\'><svg width="14" height="25" viewBox="0 0 14 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.5695 2.49876L3.54376 12.5006L13.5695 22.5015C14.1435 23.0731 14.1435 23.9999 13.5695 24.5705C12.9954 25.1432 12.0674 25.1432 11.4914 24.5705L0.431999 13.5346C-0.144 12.963 -0.144 12.0372 0.431999 11.4656L11.4914 0.428735C12.0674 -0.142911 12.9954 -0.142911 13.5695 0.428735C14.1435 0.999405 14.1435 1.92613 13.5695 2.49876Z"/></svg></div>',nextArrow:'<div class=\'next\'><svg width="14" height="25" viewBox="0 0 14 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.430532 22.5012L10.4562 12.4994L0.43053 2.49851C-0.143513 1.92687 -0.143513 1.00014 0.43053 0.429467C1.00457 -0.143153 1.93263 -0.143153 2.50862 0.429467L13.568 11.4654C14.144 12.037 14.144 12.9628 13.568 13.5344L2.50863 24.5713C1.93263 25.1429 1.00458 25.1429 0.430532 24.5713C-0.143511 24.0006 -0.143511 23.0739 0.430532 22.5012Z"/></svg></div>'}),$("#presents-slider").slick({dots:!1,arrows:!0,infinite:!0,autoplay:!1,slidesToShow:3,slidesToScroll:3,prevArrow:'<div class=\'prev\'><svg width="14" height="25" viewBox="0 0 14 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.5695 2.49876L3.54376 12.5006L13.5695 22.5015C14.1435 23.0731 14.1435 23.9999 13.5695 24.5705C12.9954 25.1432 12.0674 25.1432 11.4914 24.5705L0.431999 13.5346C-0.144 12.963 -0.144 12.0372 0.431999 11.4656L11.4914 0.428735C12.0674 -0.142911 12.9954 -0.142911 13.5695 0.428735C14.1435 0.999405 14.1435 1.92613 13.5695 2.49876Z"/></svg></div>',nextArrow:'<div class=\'next\'><svg width="14" height="25" viewBox="0 0 14 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.430532 22.5012L10.4562 12.4994L0.43053 2.49851C-0.143513 1.92687 -0.143513 1.00014 0.43053 0.429467C1.00457 -0.143153 1.93263 -0.143153 2.50862 0.429467L13.568 11.4654C14.144 12.037 14.144 12.9628 13.568 13.5344L2.50863 24.5713C1.93263 25.1429 1.00458 25.1429 0.430532 24.5713C-0.143511 24.0006 -0.143511 23.0739 0.430532 22.5012Z"/></svg></div>',responsive:[{breakpoint:1281,settings:{dots:!0}},{breakpoint:1024,settings:{dots:!0,slidesToShow:2,slidesToScroll:2}},{breakpoint:680,settings:{dots:!0,slidesToShow:1,slidesToScroll:1}}]}),$("#news-sec__slider").slick({dots:!1,arrows:!1,infinite:!0,autoplay:!0,slidesToShow:3,slidesToScroll:1,responsive:[{breakpoint:1024,settings:{dots:!0,slidesToShow:2,slidesToScroll:1}},{breakpoint:680,settings:{dots:!0,slidesToShow:1,slidesToScroll:1}}]})}},{}],15:[function(e,t,o){t.exports=function(){window.addEventListener("scroll",function(e){let t=this.oldScroll||0,o=this.scrollY,n=o>t;$(this).scrollTop()>=99&&document.querySelector(".header-bottom").classList.toggle("scroll-down",n),this.oldScroll=o})}},{}],16:[function(e,t,o){t.exports=function(){$(function(){svg4everybody()})}},{}],17:[function(e,t,o){t.exports=function(){$(".sales-tab__btn").on("click",function(e){e.preventDefault();let t=$(this).data("sale");$(".sales-tab__btn").toggleClass("active"),$(".sales-tab__body").removeClass("active"),$(t).addClass("active"),$(".sales-tab__more-btn").removeClass("active"),$(".sales-item.hidden").fadeOut()})}},{}],18:[function(e,t,o){t.exports=function(){function e(){let e=$(".tooltip");if(!e){let t=$(window).width(),o=$(e).offset().left,n=$(e).outerWidth(),l=t-o-n;o<20?$(e).offset({left:20}):l<20&&$(e).offset({right:t-n-20})}}$(".tooltip-wrap").hover(function(){e()}),e()}},{}],19:[function(e,t,o){t.exports=function(){$(".calculator-item-tv__input").on("click",function(){let e=$(".calculator-item-tv__input--base").prop("checked"),t=$(".calculator-item-tv__input--premium").prop("checked"),o=$("#calculator-item-tv-footer__static-label"),n=$(".calculator-item-tv-footer__input");e||t?$(o).slideDown():$(o).slideUp(),t||$(n).prop("checked",!1)}),$(".calculator-item-tv-footer__input").on("click",function(){let e=$(this).prop("checked"),t=$(".calculator-item-tv__input--premium"),o=$("#calculator-item-tv-footer__static-label");e&&($(t).prop("checked",!0),$(o).slideDown())})}},{}]},{},[1]);