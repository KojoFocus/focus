// Get Current Year
function getYear() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  document.querySelector("#displayYear").textContent = currentYear;
}

getYear();

// Isotope JS
$(window).on('load', function () {
  let $grid = $(".grid").isotope({
      itemSelector: ".all",
      percentPosition: false,
      masonry: {
          columnWidth: ".all"
      }
  });

  $('.filters_menu li').click(function () {
      $('.filters_menu li').removeClass('active');
      $(this).addClass('active');

      const data = $(this).attr('data-filter');
      $grid.isotope({ filter: data });
  });
});

// Nice Select
$(document).ready(function () {
  // Check if both jQuery and niceSelect are loaded
  if (typeof $ === 'function' && typeof $.fn.niceSelect === 'function') {
      $('select').niceSelect();
  } else {
      // If not loaded, try again after a short delay (not ideal, but works in this structure)
      setTimeout(() => {
          if (typeof $ === 'function' && typeof $.fn.niceSelect === 'function') {
              $('select').niceSelect();
          } else {
              console.error("niceSelect is not loaded even after delay.");
          }
      }, 50); // Adjust delay as needed
  }
});

// Google Map JS
function myMap() {
  if (typeof google !== 'undefined' && document.getElementById("googleMap")) {
      const mapProp = {
          center: new google.maps.LatLng(40.712775, -74.005973),
          zoom: 18,
      };
      new google.maps.Map(document.getElementById("googleMap"), mapProp);
  }
}

$(document).ready(function() {
  if (typeof google !== 'undefined' && typeof google.maps !== 'undefined') {
      myMap();
  } else {
      console.error("Google Maps API not loaded.");
  }
});

// Client Section Owl Carousel
$(document).ready(function () {
  if (typeof $.fn.owlCarousel === "function") {
      $(".client_owl-carousel").owlCarousel({
          loop: true,
          margin: 0,
          dots: false,
          nav: true,
          navText: [
              '<i class="fa fa-angle-left" aria-hidden="true"></i>',
              '<i class="fa fa-angle-right" aria-hidden="true"></i>'
          ],
          autoplay: true,
          autoplayHoverPause: true,
          responsive: {
              0: { items: 1 },
              768: { items: 2 },
              1000: { items: 2 }
          }
      });
  }
});