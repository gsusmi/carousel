/* http://coding.smashingmagazine.com/2011/10/04/quick-look-math-animations-javascript/ */

$(document).ready(function() {
  var container = $('.stage'),
      plots = 10,
      increase = Math.PI * 2 / plots,
      angle = 0,
      x = 0,
      y = 0,
      plotcache = [];

  for( var i = 0; i < plots; i++ ) {
    var p = new Plot(container);
    p.setBackground( 'green' );
    p.setDimensions( 40, 40 );
    plotcache.push( p );
  }

  function draw(){
    for( var i = 0; i < plots; i++ ) {
      x = 100 * Math.cos( angle ) + 200;
      y = 100 * Math.sin( angle ) + 200;
      plotcache[ i ].rotate( Math.atan2( y - 200, x - 200 ) + 'rad' );
      plotcache[ i ].position( x, y );
      angle += increase;
    }
    angle += 0.06;
  }

  // setInterval( rotate, 1000/30 );

  draw();
});