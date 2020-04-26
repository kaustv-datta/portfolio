const fullpage_api = new fullpage("#fullpage", {
  //options here
  anchors: ["home", "services", "about", "contact"],
  menu: "#nav-menu",
  autoScrolling: true,
  scrollHorizontally: true,
});

const moveToServices = function () {
  fullpage_api.moveTo("services");
};

const moveToAbout = function () {
  fullpage_api.moveTo("about");
};

const moveToContact = function () {
  fullpage_api.moveTo("contact");
};
