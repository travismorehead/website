$( document ).ready(function() {

  $(".buttonone").hover(function() {
    $(".one").toggle();
  });
  $(".buttontwo").hover(function() {
    $(".two").toggle();
  });
  $(".buttonthree").hover(function() {
    $(".three").toggle();
  });
  $(".buttonfour").hover(function() {
    $(".four").toggle();
  });
  $(".buttonfive").hover(function() {
    $(".five").toggle();
  });
  $(".buttonsix").hover(function() {
    $(".six").toggle();
  });
  $(".buttonseven").hover(function() {
    $(".seven").toggle();
  });
  $(".buttoneight").hover(function() {
    $(".eight").toggle();
  });
  $(".buttonnine").hover(function() {
    $(".nine").toggle();
  });
  $("a").hover(highlight,highlight);
});

  function highlight() {
    $("div").toggleClass("highlight");
  }
