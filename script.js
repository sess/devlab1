/* global $ */

$(document).ready(function () {

	$('#homelink').click(function () {
		$('#mainimg').show();
		$('#aboutmepage').hide();
		$('.contactcontent').hide();
		$('.contact').hide();
		$('#portfoliopage').hide();
	});

	$('#aboutmelink').click(function () {
		$('#mainimg').hide();
		$('.contactcontent').hide();
		$('#aboutmepage').show();
		$('.contact').hide();
		$('#portfoliopage').hide();
	});

	$('#portfoliolink').click(function () {
		$('#mainimg').hide();
		$('.contactcontent').hide();
		$('#aboutmepage').hide();
		$('#portfoliopage').show();
		$('.contact').hide();


	});

	$('#contactlink').click(function () {
		$('#mainimg').hide();
		$('#aboutmepage').hide();
		$('.contactcontent').show();
		$('.contact').hide();
		$('#portfoliopage').hide();
	});

	$('#contactlink').click(function () {
		$('#mainimg').hide();
		$('#aboutmepage').hide();
		$('.contactcontent').show();
		$('.contact').hide();
		$('#portfoliopage').hide();
	});

});
