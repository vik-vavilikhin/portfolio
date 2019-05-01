$(document).ready(function(){
  $(".botton-closing").on("click", function() {
  		var target = $(this).data("opener");
  		$(target).toggleClass("list_open");
  });
});
