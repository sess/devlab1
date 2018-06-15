/* global $ */

$(document).ready(function () {
	
	function underline(a,b,c,d){
		$(a).css('text-decoration','none');
		$(b).css('text-decoration','none');
		$(c).css('text-decoration','none');
		$(d).css('text-decoration','underline');	
	}

	$('#homelink').click(function () {
		$('#mainimg').show();
		$('#aboutmepage').hide();
		$('.contactcontent').hide();
		$('.contact').hide();
		$('#portfoliopage').hide();
		underline('#aboutmelink','#portfoliolink','#contactlink','#homelink');
	});

	$('#aboutmelink').click(function () {
		$('#mainimg').hide();
		$('.contactcontent').hide();
		$('#aboutmepage').show();
		$('.contact').hide();
		$('#portfoliopage').hide();
		underline('#homelink','#contactlink','#portfoliolink','#aboutmelink');
	});

	$('#portfoliolink').click(function () {
		$('#mainimg').hide();
		$('.contactcontent').hide();
		$('#aboutmepage').hide();
		$('#portfoliopage').show();
		$('.contact').hide();
		underline('#homelink','#aboutmelink','#contactlink','#portfoliolink');
	});

	$('#contactlink').click(function () {
		$('#mainimg').hide();
		$('#aboutmepage').hide();
		$('.contactcontent').show();
		$('.contact').hide();
		$('#portfoliopage').hide();
		underline('#homelink','#aboutmelink','#portfoliolink','#contactlink');
	});
});