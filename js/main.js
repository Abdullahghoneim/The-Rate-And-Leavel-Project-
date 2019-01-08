$(function() {
  "use strict";
  console.log(
    "%cDeveloper : %cabdullahghoneim890@gmail.com",
    "color: blue; font-size:20px;",
    "color: green; font-size:20px;"
  );

  // Adjust Slider Height
  var winH = $(window).height(),
    upperH = $(".upper-bar").innerHeight(),
    navH = $(".navbar").innerHeight();
  $(".slider, .carousel-item").height(winH - (upperH + navH));

  // Featured Work Shuffle
  $(".featured-work ul li").on("click", function() {
    $(this)
      .addClass("active")
      .siblings()
      .removeClass("active");
    if ($(this).data("class") === "all") {
      $(".shuffle-imgs .col-md").css("opacity", 1);
    } else {
      $(".shuffle-imgs .col-md").css("opacity", ".08");
      $($(this).data("class"))
        .parent()
        .css("opacity", 1);
    }
  });
  $(".carousel").carousel({
    interval: 2000
  });
  // ScrollReveal().reveal(".reveal");
});
