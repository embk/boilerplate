

function toggleMobileMenu(menu) {
  menu.classList.toggle('open');
  checkOpen();
}


function checkOpen() {
  const body = document.body;
  if(document.getElementById("hamburger-icon").classList.contains("open")){
    body.style.overflowY = 'hidden';
  } else {
    body.style.overflowY = 'visible';
  }
}


$(function() {
  $(window).on("scroll", function() {
      if($(window).scrollTop() > 50) {
          $(".header").addClass("active");
      } else {
          //remove the background property so it comes transparent again (defined in your css)
         $(".header").removeClass("active");
      }
  });
});


/* JS instead of jQuery */
// document.addEventListener("DOMContentLoaded", () => {
//   window.on("scroll", function() {
//       if(window.scrollTop() > 50) {
//           document.getElementByClassName("header").classList.add("active");
//       } else {
          
//          document.getElementByClassName("header").classList.remove("active");
//       }
//   });
// });
