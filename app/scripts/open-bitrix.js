import $ from 'jquery';

$( "#button1" ).click(function() {
	$( "#bitrix" ).toggle( "fast", function() {
		$('html, body').animate({
			scrollTop: $("#bitrix").offset().top
		}, 'slow');
	});
});
