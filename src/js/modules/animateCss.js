module.exports = function () {

  // begin Animate CSS + WayPoints javaScript Plugin

  // function animateLeft() {
  //   let elem = document.querySelectorAll('.fade-in-left');
  //   if(elem.length > 0) {
  //     for(let i = 0; i < elem.length; i++) {
  //       let waypoint = new Waypoint({
  //         element: elem[i],
  //         handler: function(direction) {
  //           this.element.classList.add('animate__fadeInLeftBig');
  //         },
  //         offset: '100%'
  //       })
  //     }
  //   }
  // }
  // animateLeft();
  //
  // function animateRight() {
  //   let elem = document.querySelectorAll('.fade-in-right');
  //   console.log(elem);
  //   if(elem.length > 0) {
  //     for(let i = 0; i < elem.length; i++) {
  //       let waypoint = new Waypoint({
  //         element: elem[i],
  //         handler: function(direction) {
  //           this.element.classList.add('animate__fadeInRightBig');
  //         },
  //         offset: '100%'
  //       })
  //     }
  //   }
  // }
  //
  // animateRight();

  function animateZoom() {
    let elem = document.querySelectorAll('.zoom-in');
    if(elem.length > 0) {
      for(let i = 0; i < elem.length; i++) {
        let waypoint = new Waypoint({
          element: elem[i],
          handler: function(direction) {
            this.element.classList.add('animate__zoomIn');
          },
          offset: '100%'
        })
      }
    }
  }

  animateZoom();

  // end Animate CSS + WayPoints javaScript Plugin

};