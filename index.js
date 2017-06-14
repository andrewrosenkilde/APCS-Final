$(document).ready(function(){
	$(".splashscreen p").toggle().delay(1000);
	$(".splashscreen p").fadeTo(800, 1, function() {
		$(".splashscreen").delay(2000).slideUp(1000);
	});
	$(".projectlist div").hover(function() {
		$(this).animate({
			opacity: '1'
		});
	}, function() {
		$(this).animate({
			opacity: '0.75'
		});
	});
});