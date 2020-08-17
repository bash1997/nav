var navMenu = document.getElementById("navMenu");
var menuSharp = document.getElementsByName("menu-sharp");//menu image
var mainNav = document.getElementById("mainNav");//menu
var navTop = document.getElementById("navTop");//red nav
var subTop = document.getElementById("subTop");//button nav
var subNav = document.getElementById("subNav");//pink nav

var showNav = function() {
  if (menuSharp.name = "menu-sharp") {
    mainNav.style.display = "block";
    menuSharp.name = "close-sharp";
  } else if (menuSharp.name = "close-sharp") {
      mainNav.style.display = "none";
      menuSharp.name ="menu-sharp";
    }
  };

menuSharp.addEventListener("click", showNav);
