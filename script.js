/* global $ */

$(document).ready(function () {

$('#homelink').click(function(){
    //$().css('text-decoration','underline');
    $('#mainimg').show();
    $('#aboutmepage').hide();
    $('.contactcontent').hide();
    $('.contact').show();
});

$('#aboutmelink').click(function(){
    //$('#aboutmelink').css('text-decoration','underline');
    $('#mainimg').hide();
    $('.contactcontent').hide();
    $('#aboutmepage').show();
    $('.contact').show();
});

$('#contactlink').click(function(){
    //$('#contactlink').css('text-decoration','underline');
    $('#mainimg').hide();
    $('#aboutmepage').hide();
    $('.contactcontent').show();
    $('.contact').hide();
});

});