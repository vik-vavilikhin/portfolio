$(document).ready(function(){
	$(".brand-slider").owlCarousel({
  	loop           : true,
  	autoplay       : true,
  	autoplayTimeout: 5000
  	nav            :true

	// Адаптивность
	responsiveClass: true,
	responsive     : {
		    // Ширина окна браузера от 0 и больше
		    0   : {
		        items : 1,
				  center: true
		    },
		    // Ширина окна браузера от 480 и больше
		    551 : {
		        items : 2,
		    },
		    // Ширина окна браузера от 768 и больше
		    768 : {
		        items : 3
			 }
		}
	});
});

$(document).ready(function(){
  $(".btn-navbar").on("click", function() {
  		var target = $(this).data("target");
  		$(target).toggleClass("list_open");
  });
});

$(document).ready(function(){
  $(".top-slider").owlCarousel({
  	items          : 1,
  	loop           : true,
  	autoplay       : true,
  	autoplayTimeout: 3000
  });
});
