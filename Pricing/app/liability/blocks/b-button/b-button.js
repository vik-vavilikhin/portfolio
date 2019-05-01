$(function () {
	$(window).on('load resize', function () {
		var $width = $(window).width();

		if ($width <= 544){
			$('.main-menu').css('display', '');
		} else {
			$('.main-menu').css('display', 'flex');
		}
	});
});

$(document).ready(function(){
	$('.button__menu').click(function () {
		$(this).toggleClass('button__menu_mobile')
		$('.main-menu').slideToggle();
	});
});