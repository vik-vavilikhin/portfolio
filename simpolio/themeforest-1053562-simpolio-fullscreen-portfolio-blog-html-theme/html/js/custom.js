jQuery(function($) {

	// z-index order fix
	$(function() {
		var zIndexNumber = 1000;
		$('div').each(function() {
		  $(this).css('zIndex', zIndexNumber);
		  zIndexNumber-=1;
		});
	});
	  
	$("#pp_overlay").css('zIndex', 1001);
  
	$('.main-wrapper, .menu-logo, #single-img').each(function(){
		$(this).animate({opacity:'1'},450,function(){
		//remove the opacity in IE
			jQuery.each(jQuery.browser, function(i) {
				if($.browser.msie && $.browser.version.substr(0,1)<9){
					$('.main-wrapper, .menu-logo').css({opacity:''});
				}
			});
		});
	});

	// nav-top dropdown
	$(".nav-top .sub-menu-wrapper").hide();
	$(".nav-top li")
		.mouseenter(function(){$(this).find('.sub-menu-wrapper:first').fadeIn(300)})
		.mouseleave(function(){$(this).find('.sub-menu-wrapper:first').fadeOut(200)});
				
	$(".nav-top .sub-menu-wrapper")
		.mouseenter(function(){$(this).parents('li').addClass('active')})
		.mouseleave(function(){$(this).parents('li').removeClass('active')});
				
	$(".read-more")
		.mouseenter(function(){$(this).animate({borderBottomWidth:"-=3px"}, 'fast')})
		.mouseleave(function(){$(this).animate({borderBottomWidth:"+=3px"}, 'fast')});

	$(".nav-top .sub-menu-wrapper li")
		.mouseenter(function(){$(this).animate({borderLeftWidth:"+=3px"}, 'fast')})
		.mouseleave(function(){$(this).animate({borderLeftWidth:"-=3px"}, 'fast')});

	// title description
	var currdesc=$("#menu-nav-top .current-menu-item a");
	if(currdesc.length) $(".title-wrapper .desc").html(currdesc.attr('title'));


	// cufon font replacement
	Cufon.replace("h1, h2, h3, h4, h5, h6, .desc, .date, .nav-top-wrapper .nav-top li a", {
		hover: true,
		fontFamily: 'Colaborate'
	});


	// prettyPhoto image box
	$("a[class^='prettyPhoto']").prettyPhoto();
	$("a[rel='prettyPhoto'], a.prettyPhoto, a.hover, a")
		.mouseenter(function(){$(this).find(".zoom").stop().css({opacity:0}).animate({opacity:'0.6'}, 300); this.style.filter=""})
		.mouseleave(function(){$(this).find(".zoom").stop().animate({opacity:0}, 300)});
	$("a[rel='prettyPhoto'], a.prettyPhoto").prettyPhoto();
	$("a[rel='prettyPhoto'].video, a.prettyPhoto.video")
		.prettyPhoto({iframe:true, innerWidth:'640px', innerHeight:'390px'});
	$(".preload img").css({opacity:1}).one('load', function(){
		$(this).animate({opacity:1}, 1200).parents(".preload").css('background-image','none');
	})
	.each(function(){
		if(this.complete)
		$(this).stop().css({opacity:1}).parents(".preload").css('background-image','none');
	});

});