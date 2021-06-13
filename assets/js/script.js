$(document).ready(function(){
  /* Owl Carousel call */
  let owl_carousel = $(".owl-carousel");
  owl_carousel.owlCarousel({
      loop: true,
      autoplay: false,
      items: 1,
      dots: true,
      autoplaySpeed: 1000,
      autoplayTimeout: 3000
  });
  owl_carousel.trigger('refresh.owl_carousel.carousel');
    
  /* Navbar Slide */
  const burger_menu = $('.burger_menu');

  if (burger_menu.length > 0) {
    burger_menu.click(function(){
      const navbar = $('.collapse_navbar_menu');
      
      //Navbar Active
      navbar.toggleClass('navbar-active');
      
      //Burger animation
      burger_menu.toggleClass('toggle');
    });
  }

  /* Modal Image Slider */
  // Get the modal
  var modal = document.getElementById("myModal");

  // Get the button that opens the modal
  var zoom_icon = $('.zoom_icon');

  // Get the <span> element that closes the modal
  // var span = document.getElementsByClassName("close")[0];

  // When the user clicks the button, open the modal 
  zoom_icon.click(function() {
    modal.style.display = "block";
  });

  // When the user clicks on <span> (x), close the modal
  // span.onclick = function() {
  //   modal.style.display = "none";
  // }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

// When Scroll down add shadow to navbar 
$(window).on("scroll", function() {
  if ($(window).scrollTop()) {
      $('.navbar_').addClass('addShadow');
  }
  else {
      $('.navbar_').removeClass('addShadow');
  }
});

});
 
