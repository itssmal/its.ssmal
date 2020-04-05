let navLinks = document.querySelector("#js-menu");
const navbar = document.querySelector("#navigation");
let sticky = navbar.offsetTop;
console.log(sticky);

// ---------------------------- Sticky Navbar ----------------------
window.onscroll = function() {
    myFunction();
};

function myFunction() {
    console.log(sticky);
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

// ---------------------- Navbar collapsible ----------------------
function showNavbar() {
    navLinks.classList.toggle("active");
}

// -------------------- Smooth Scrolling -------------------------

$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });