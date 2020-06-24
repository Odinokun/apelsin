module.exports = function () {

  // begin Animate CSS + WayPoints javaScript Plugin
  
  let elem = document.querySelectorAll('.qwerty');
  if(elem.length > 0) {
    for(let i = 0; i < elem.length; i++) {
      let waypoint = new Waypoint({
        element: elem[i],
        handler: function(direction) {
          this.element.classList.add('animate__fadeInLeftBig');
        },
        offset: '100%'
      })
    }
  }

  // end Animate CSS + WayPoints javaScript Plugin

};