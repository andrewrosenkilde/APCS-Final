$(document).ready(function() {
	$('.stringWrapper').toggle();
	$('img').toggle().delay(500);
	$('.stringWrapper').toggle(500).delay(500);
	$('#highstring img').slideDown(500, function() {
		$('#midstring img').slideDown(500, function() {
			$('#lowstring img').slideDown(500);
		});
	});
});