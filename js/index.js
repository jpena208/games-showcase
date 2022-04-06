/* -----------------------------
    Media Query Listeners
*/
// Media query for small screens under 300px
var mqSmall = window.matchMedia("(max-width: 320px)");
let icons = document.getElementById("icons");
let brand = document.getElementById("name");
let nav = document.getElementById("navbarNav");
let parent = document.getElementById("navContainer");

// Attach listener function on state changes
mqSmall.addEventListener("change", mqSmallHandler);

// Places icons inside nav menu on extra small screens
function mqSmallHandler(mqSmall) {
  if (mqSmall.matches) {
    // If media query matches, find icons and move them into nav menu
    nav.prepend(icons);
  } else {
    // If media query doesn't match, find icons and move them back into main
    parent.insertBefore(icons, brand.nextSibling);
  }
}

// Call listener function at run time
mqSmallHandler(mqSmall);

/*
  iframe resizing
*/
