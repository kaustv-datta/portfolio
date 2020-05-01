const fullpage_api = new fullpage("#fullpage", {
  //options here
  anchors: [
    "home",
    "services-1",
    "services-2",
    "services-3",
    "about",
    "contact",
  ],
  controlArrows: false,
  menu: "#nav-menu",
  autoScrolling: true,
  scrollHorizontally: true,
  navigation: true,
  navigationPosition: "right",
  slidesNavigation: true,
  slidesNavPosition: "top",
});

const moveToServices = function () {
  fullpage_api.moveTo("services-1");
};

const moveToAbout = function () {
  fullpage_api.moveTo("about");
};

const moveToContact = function () {
  fullpage_api.moveTo("contact");
};
