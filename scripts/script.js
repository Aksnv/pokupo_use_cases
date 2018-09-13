/* Platform use cases script */

$(".use-cases__item").hover(
  function() {
  $(this).addClass("use-cases__item--active");
  },
  function() {
  $(this).removeClass("use-cases__item--active");
  });

$(".use-cases__item--active button").click(function() {
  $(".use-cases__item").removeClass("use-cases__item--active");
});