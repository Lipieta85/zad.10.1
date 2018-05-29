$(document).ready(function () {

  var $carousel = $('.main-carousel').flickity();
  var $progressBar = $('.progress-bar');

  $carousel.on('scroll.flickity', function (event, progress) {
    progress = Math.max(0, Math.min(1, progress));
    $progressBar.width(progress * 100 + '%');
  });

  var carouselData = Flickity.data($carousel[0])
  var progress = (carouselData.selectedIndex + 1) / carouselData.cells.length
  $progressBar.width(progress * 100 + '%');

  $('.button-group').on('click', '.button', function () {
    var index = $(this).index();
    $carousel.flickity('selectCell', index);
  });
});

