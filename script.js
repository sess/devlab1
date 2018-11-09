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
       if(option === 'cts'){
            $('#sampleImg').attr('src','crackthesafeSample.png');
            $('.sampleBlurb').text('A pretty simple game that I created as part of a project for the ScriptEd Advanced Course. The goal of the game is to try and guess the passcode in order to unlock the safe.');
            $('#tryout').attr('href',"https://sess.github.io/crackthesafe/");
       }else if(option === "cfp"){
            $('#sampleImg').attr('src','cerealfanpageSample.png');
            $('.sampleBlurb').text('A simple fanpage about cereal. I also created as part of the ScriptEd Advanced Course.');
            $('#tryout').attr('href','https://sess.github.io/fanpage/');
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