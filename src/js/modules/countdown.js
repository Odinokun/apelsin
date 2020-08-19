module.exports = function () {

  //begin sale countdown
  // Set the date we're counting down to
  let countDownDate = new Date("August 28, 2020 20:00:00").getTime();

// Update the count down every 1 second
  let x = setInterval(function() {

    // Get todays date and time
    let now = new Date().getTime();

    // Find the distance between now an the count down date
    let distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (days < 10){
      days = "0" + days;
    }
    if (hours < 10){
      hours = "0" + hours;
    }
    if (minutes < 10){
      minutes = "0" + minutes;
    }
    if (seconds < 10){
      seconds = "0" + seconds;
    }

    let saleCounter = document.querySelector("#sale-counter__body");

    // Display the result in the element with id="sale-counter__body"
    if(saleCounter){
      document.querySelector("#sale-counter__body").innerHTML = "<div class='sale-counter__item sale-counter__item--days'><span>" + days + "</span><span>Дни</span></div>" +
        "<div class='sale-counter__item sale-counter__item--hours'><span>" + hours + "</span><span>Часы</span></div>" +
        "<div class='sale-counter__item sale-counter__item--minutes'><span>" + minutes + "</span><span>Минуты</span></div>" +
        "<div class='sale-counter__item sale-counter__item--seconds'><span>" + seconds + "</span><span>Секунды</span></div>";
    }

    // If the count down is finished, write some text
    if (distance < 0 && saleCounter) {
      clearInterval(x);
      document.querySelector("#sale-counter__body").innerHTML = "";
    }

    //делаем цифры серыми когда они на нуле
    if(days === 0) {
      document.querySelector('.sale-counter__item--days').classList.add('zero');
    }
    if(days === 0 && hours === 0) {
      document.querySelector('.sale-counter__item--hours').classList.add('zero');
    }
    if(days === 0 && hours === 0 && minutes === 0) {
      document.querySelector('.sale-counter__item--minutes').classList.add('zero');
    }


  }, 1000);
  //end sale countdown

};