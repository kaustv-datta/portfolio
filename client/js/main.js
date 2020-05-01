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

$(() => {
  $("#send-msg-btn").click(() => {
    const form = $("#granny-contact-form").get(0);

    form.reportValidity();

    if (form.checkValidity()) {
      $.post(
        "nodejs/sendMail",
        {
          email: $("#exampleEmailInput").val(),
          message: $("#exampleMessage").val(),
        },
        (data) => {
          if (data.success) {
            $("body").overhang({
              type: "success",
              message: "Woohoo! Granny got your message!",
            });
            $("#exampleEmailInput").val("");
            $("#exampleMessage").val("");
          } else {
            $("body").overhang({
              type: "error",
              html: true,
              message:
                "Oops! Something went wrong! Mail granny at <a href='mailto:info@codegranny.com'>info@codegranny.com</a>",
              closeConfirm: true,
            });
          }
        }
      );
    }
  });
});
