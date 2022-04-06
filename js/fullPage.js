var myFullpage = new fullpage("#fullpage", {
  //Navigation
  anchors: ["home", "game1", "game2", "game3", "game4"],
  menu: "#nav-ul",
  lockAnchors: false,
  navigation: true,
  navigationPosition: "right",
  //   navigationTooltips: ["home", "game1", "game2"],
  showActiveTooltip: true,
  slidesNavigation: false,
  slidesNavPosition: "bottom",

  //Scrolling
  css3: true,
  scrollingSpeed: 1000,
  autoScrolling: true,
  fitToSection: true,
  fitToSectionDelay: 1000,
  scrollBar: false,
  easing: "easeInOutCubic",
  easingcss3: "ease",
  loopBottom: true,
  loopTop: false,
  loopHorizontal: true,
  continuousVertical: false,
  continuousHorizontal: false,
  scrollHorizontally: false,
  interlockedSlides: false,
  normalScrollElements: "#element1, .element2",
  scrollOverflow: false,
  scrollOverflowReset: false,
  scrollOverflowOptions: null,
  touchSensitivity: 15,
  bigSectionsDestination: null,

  //Accessibility
  keyboardScrolling: true,
  animateAnchor: true,
  recordHistory: true,

  //Design
  controlArrows: true,
  verticalCentered: true,
  paddingTop: "3em",
  paddingBottom: "10px",
  fixedElements: "#header, .footer",
  responsiveWidth: 0,
  responsiveHeight: 0,
  responsiveSlides: false,

  //Custom selectors
  sectionSelector: ".section",
  slideSelector: ".slide",

  lazyLoading: true,

  //events
  onLeave: function (origin, destination, direction) {},
  afterLoad: function (origin, destination, direction) {},
  afterRender: function () {},
  afterResize: function (width, height) {},
  afterReBuild: function () {},
  afterResponsive: function (isResponsive) {},
  afterSlideLoad: function (section, origin, destination, direction) {},
  onSlideLeave: function (section, origin, destination, direction) {},
});

fullpage_api.setAllowScrolling(true);
