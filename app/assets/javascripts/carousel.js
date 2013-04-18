/* http://coding.smashingmagazine.com/2011/10/04/quick-look-math-animations-javascript/ */

$(document).ready(function() {

  var container = $('.carousel a'),
      plots = container.length,
      increase = Math.PI * 2 / plots,
      x = 0,
      y = 0,
      plotcache = [];

  for( var i = 0; i < plots; i++ ) {
    container.each(function(index) {
      element = $(this);
      plot = new Plot(element);
      // colors = ['yellow', 'cyan', 'magenta', 'red', 'green', 'blue'];
      // color = colors[Math.floor(Math.random()*colors.length)];
      // plot.setBackground(color);
      plot.setDimensions(40, 40);
      plotcache.push(plot);
    });
  }

  function draw(angle){
    for( var i = 0; i < plots; i++ ) {
      x = 100 * Math.cos( angle ) + 200;
      y = 100 * Math.sin( angle ) + 200;
      plotcache[i].position( x, y );
      angle += increase;
    }
  }

  function rotate(element, angle) {
    element.rotate( Math.atan2( y - 200, x - 200 ) + 'rad' );
  }

  // setInterval( rotate, 1000/30 );

  // draw(180);

  // rotate(plotcache[i], 90);

  function centerCarouselOn(items, index, callback) {
    var items = items;
    var middleIdx = Math.floor(items.length / 2);
    var direction = null;
    var iterCount = 0;

    if(index === middleIdx) return;

    // if iterCount is positive, we are going right; else, we are going left
    iterCount = middleIdx - index;

    // this funciton gets called recursively until all moves are complete
    function moveCarousel() {
      if (iterCount===0) return;

      if (iterCount > 0) {
        // take the last element, prepend it to the carousel
        items.last().prependTo(items);
        iterCount--;
      } else if (iterCount < 0) {
        // take the first element, append it to the carousel
        items.first().appendTo(items);
        iterCount++;
      }

      // execute callback to apply css changes at each step
      // callback();

      // set a delay, then repeat.
      // window.setTimeout(moveCarousel, 1000);
    }

    // start moving the carousel
    moveCarousel(iterCount);
  }

  container.click(function() {
    // $(this).slideUp();
    centerCarouselOn(container, Math.floor(Math.random() * container.length));
  });
});