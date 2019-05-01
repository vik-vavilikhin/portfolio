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
