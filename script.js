/* global $ */

$(document).ready(function () {
    
 
    
    $('#option0').click(function(){
        $('.options').css("font-weight","300");
        $('#option0').css("font-weight","600");
        $('.pages').hide();
        $('#homepage').show();
        $("#footer").hide();
   });
    
    $('#option1').click(function(){
        $('.options').css("font-weight","300");
        $('#option1').css("font-weight","600");
        $('.pages').hide();
        $('#aboutmepage').show();
        $("#footer").show();
   });
   
   $('#option2').click(function(){
        $('.options').css("font-weight","300");
        $('#option2').css("font-weight","600");
        $('.pages').hide();
        $('#myworkpage').show();
        $("#footer").show();
   });
   
   $('#option3').click(function(){
        $('.options').css("font-weight","300");
        $('#option3').css("font-weight","600");
        $('.pages').hide();
        $('#contactpage').show();
        $("#footer").show();
   });
   
   $('select').click(function(){
       var option = $('select').val();
       if(option === 'vm'){
            $('#sampleimg').attr('src','/devlab1/images/vending_machine_screenshot.PNG');
            $('#description').text('A very basic virtual vending machine.' + ' This was a project for the ScriptEd class I\'m in, I worked on it both in class and at my house. I did edit it quite a bit it afterwards to make it look more appealing.');
            $('#tryout').attr('href','/devlab1/vm/vending_machine.html');
       }else if(option === "hh"){
            $('#sampleimg').attr('src','/devlab1/images/hats_hoods_screenshot.PNG');
            $('#description').text('(Incomplete) A website for a fictitious company. I am making this purely for practice.');
            $('#tryout').attr('href','/devlab1/h&h/h&h.html');
       }
   });
   
   $("#aboutLink").click(function(){
       $("#aboutLink").css("border-bottom","2px");
   });
   
   $("#homeLink").click(function(){
      $("#homeLink").css("border-bottom","2px"); 
   });
   
   $("#workLink").click(function(){
       $("#workLink").css("border-bottom","2px");
   });
});