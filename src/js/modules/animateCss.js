module.exports = function () {

  // begin Animate CSS + WayPoints javaScript Plugin

  function animateZoom() {
    let elem = document.querySelectorAll('.fade-in');
    if(elem.length > 0) {
      for(let i = 0; i < elem.length; i++) {
        let waypoint = new Waypoint({
          element: elem[i],
          handler: function(direction) {
            this.element.classList.add('animate__fadeInUp');
          },
          offset: '100%'
        })
      }
    }
  }

  animateZoom();

  // end Animate CSS + WayPoints javaScript Plugin

};