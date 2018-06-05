
$(document).ready(function () {

  var templateList = document.getElementById('template-product-list').innerHTML;

  Mustache.parse(templateList);


  for (var i = 0; i < productsData.length; i++) {
    document.querySelector('.main-carousel').innerHTML += Mustache.render(templateList, productsData[i])
  }


  var elem = document.querySelector('.main-carousel');
  var flkty = new Flickity(elem, {

    hash: true,
    pageDots: false,
    cellAlign: 'center',
    contain: true
  });



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

(function () {

  window.initMap = function () {

    var uluru = productsData[0].coords;

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: uluru
    });

    for (var i = 0; i < productsData.length; i++) {
      var marker = new google.maps.Marker({
        position: productsData[i].coords,
        map: map,
        index: i,
      });

      var $carousel = $('.main-carousel').flickity();
      marker.addListener('click', function () {


        $carousel.flickity('selectCell', this.index);
      });

      $carousel.on('change.flickity', function (event, i) {

        map.panTo(productsData[i].coords);

        map.setZoom(5);
      });
    }
  };
})();




