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
 Back Links
*/
// var element = document.getElementById("back-link");

// Provide a standard href to facilitate standard browser features such as
//  - Hover to see link
//  - Right click and copy link
//  - Right click and open in new tab
// element.setAttribute("href", document.referrer);

// We can't let the browser use the above href for navigation. If it does,
// the browser will think that it is a regular link, and place the current
// page on the browser history, so that if the user clicks "back" again,
// it'll actually return to this page. We need to perform a native back to
// integrate properly into the browser's history behavior
// element.onclick = function () {
// history.back();
// return false;

document.getElementById("go-back").addEventListener("click", () => {
  history.back();
});
