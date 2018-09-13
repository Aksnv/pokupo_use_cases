/* Platform use cases script */

$(".use-cases__item").hover(
  function() {
  $(this).addClass("use-cases__item--active");
  },
  function() {
  $(this).removeClass("use-cases__item--active");
  });

$(".use-cases__item button").click(function() {
  $(this).parent().removeClass("use-cases__item--active");
});