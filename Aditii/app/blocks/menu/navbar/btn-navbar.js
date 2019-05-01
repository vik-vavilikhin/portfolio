$(document).ready(function(){
  $(".btn-navbar").on("click", function() {
  		var target = $(this).data("target");
  		$(target).toggleClass("list_open");
  });
});
