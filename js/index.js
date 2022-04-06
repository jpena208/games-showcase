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
$(function () {
  //setup these vars only once since they are static
  var $myIFRAME = $(".iframe-class"), //unless this collection of elements changes over time, you only need to select them once
    ogWidth = 1080,
    ogHeight = 1080,
    ogRatio = ogWidth / ogHeight,
    windowWidth = 0, //store windowWidth here, this is just a different way to store this data
    resizeTimer = null;

  function setIFrameSize() {
    if (windowWidth < 480) {
      var parentDivWidth = $myIFRAME.parent().width(), //be aware this will still only get the height of the first element in this set of elements, you'll have to loop over them if you want to support more than one iframe on a page
        newHeight = parentDivWidth / ogRatio;

      $myIFRAME
        .addClass("iframe-class-resize")
        .css({ height: newHeight, width: parentDivWidth });
    } else {
      $myIFRAME
        .removeClass("iframe-class-resize")
        .css({ width: "", height: "" });
    }
  }

  $(window)
    .resize(function () {
      //only run this once per resize event, if a user drags the window to a different size, this will wait until they finish, then run the resize function
      //this way you don't blow up someone's browser with your resize function running hundreds of times a second
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(function () {
        //make sure to update windowWidth before calling resize function
        windowWidth = $(window).width();

        setIFrameSize();
      }, 75);
    })
    .trigger("click"); //run this once initially, just a different way to initialize
});
