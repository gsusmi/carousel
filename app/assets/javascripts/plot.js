Plot = function ( element ) {
  this.setDimensions = function( x, y ) {
    this.elm.width(x);
    this.elm.height(y);
    this.width = x;
    this.height = y;
  }
  this.position = function( x, y ) {
    var xoffset = arguments[2] ? 0 : this.width / 2;
    var yoffset = arguments[2] ? 0 : this.height / 2;
    this.elm.css('left', (x - xoffset) + 'px');
    this.elm.css('top', (y - yoffset) + 'px');
    this.x = x;
    this.y = y;
  };
  this.setBackground = function( col ) {
    this.elm.css('background-color', col);
  }
  this.kill = function() {
    element.removeChild( this.elm );
  }
  this.rotate = function( str ) {
    // this.elm.style.webkitTransform = this.elm.style.MozTransform =
    // this.elm.style.OTransform = this.elm.style.transform =
    // 'rotate('+str+')';
    this.getElement().css({"-webkit-transform" : "rotate(+45deg)"});
  }
  this.content = function( content ) {
    this.elm.innerHTML = content;
  }
  this.round = function( round ) {
    this.elm.style.borderRadius = round ? '50%/50%' : '';
  }

  // this.elm = $(document.createElement('div'));
  // this.elm.css({ position: "absolute" });
  // element.append( this.elm );

  this.elm = element;
  this.elm.css({position: 'absolute'});
  window.e = this.elm;

  this.getElement = function() {
    return this.elm;
  }
};