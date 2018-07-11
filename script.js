/* global $ */

$(document).ready(function () {
    
    
    $('#option1').click(function(){
        $('.options').css('background-color','#262626');
        $('#option1').css('background-color','black');
        $('.pages').hide();
        $('#aboutmepage').show();
   });
   
   $('#option2').click(function(){
        $('.options').css('background-color','#262626');
        $('#option2').css('background-color','black');
        $('.pages').hide();
        $('#myworkpage').show();
   });
   
   $('select').click(function(){
       var option = $('select').val();
       if(option === 'vm'){
            $('#sampleimg').attr('src','/devlab1/images/vending_machine_screenshot.PNG');
            $('#description').text('A very basic virtual vending machine.' + 'This was a project for the ScriptEd class I\'m in, I worked on it both in class and at my house. I did edit it quite a bit it afterwards to make it look more appealing.');
            $('#tryout').attr('href','/devlab1/vm/vending_machine.html');
       }else if(option === "hh"){
            $('#sampleimg').attr('src','/devlab1/images/hats_hoods_screenshot.PNG');
            $('#description').text('(Incomplete) A website for a fictitious company. I am making this purely for practice.');
            $('#tryout').attr('href','/devlab1/h&h/h&h.html');
       }
   });
});