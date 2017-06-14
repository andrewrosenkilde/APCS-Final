$(document).ready(function(){
	$(".splashscreen p").toggle().delay(1000);
	$(".splashscreen p").fadeTo(800, 1, function() {
		$(".splashscreen").delay(2000).slideUp(1000);
	});
	$(".projectlist div").mouseover(function() {
		$(this).animate({
			width: '+= 10%'
		});
	});
	$("projectlist div").mouseleave(function() {
		$(this).animate({
			width: '-= 10%'
		});
	});
});