var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  hash: true,
  pageDots: false,
  cellAlign: 'center',
  contain: true
});

// element argument can be a selector string
//   for an individual element
var flkty = new Flickity( '.main-carousel', {
 
  
});

var $carousel = $('.main-carousel').flickity();

var $progressBar = $('.progress-bar');

$carousel.on( 'scroll.flickity', function( event, progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  $progressBar.width( progress * 100 + '%' );
});

var $carousel = $('.main-carousel').flickity();

$('.button-group').on( 'click', '.button', function() {
  var selector = $(this).attr('data-selector');
  $carousel.flickity( 'selectCell', selector );
});
