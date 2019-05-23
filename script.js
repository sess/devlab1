/* global $ */

$(document).ready(function () {
   
   $('select').click(function(){
       var option = $('select').val();
       if(option === 'cts'){
            $('#sampleImg').attr('src','crackthesafeSample.png');
            $('.sampleBlurb').text('A pretty simple game that I created as part of a project for the Code Nation Advanced Course. The goal of the game is to try and guess the passcode in order to unlock the safe.');
            $('#tryout').attr('href',"https://sess.github.io/crackthesafe/");
       }else if(option === "cfp"){
            $('#sampleImg').attr('src','cerealfanpageSample.png');
            $('.sampleBlurb').text('A simple fanpage about cereal. I created it as part of the Code Nation Advanced Course.');
            $('#tryout').attr('href','https://sess.github.io/fanpage/');
       }else if(option === "ttt"){
           $("#sampleImg").attr("src","tictactoeSample.png");
           $(".sampleBlurb").text("Recreated tic tac toe as part of the Code Nation Advanced Course.");
           $("#tryout").attr("href","https://sess.github.io/tictactoe/");
       }else if(option === "pl"){
           $("#sampleImg").attr("src","playlistSample.PNG");
           $(".sampleBlurb").text("As part of the Code Nation Advanced Course, I made a sort of playlist in order to demonstrate \".forEach();\", \".push\", and so on");
           $("#tryout").attr("href","https://sess.github.io/playlist/");
       }else if(option === "cyoa"){
           $("#sampleImg").attr("src","chooseyoaSample.png");
           $(".sampleBlurb").text("As part of the Code Nation Advanced Course, put together a sort of \"Choose Your Own Adventure\" from a template.");
           $("#tryout").attr("href","https://sess.github.io/ChooseYourOwnAdventure/");
       }else if(option === "gif"){
           $("#sampleImg").attr("src","giphySample.png");
           $(".sampleBlurb").text("As part of the Code Nation Advanced Course, I, along with a partner made a make-shift Giphy search engine which can be searched using Google's speech recongition API. Chrome is needed for it to work.");
           $("#tryout").attr("href","https://baekrxnn.github.io/giphy/");
       }else if(option === "nasa"){
           $("#sampleImg").attr("src","nasasearchSample.png");
           $(".sampleBlurb").text("As part of the Code Nation Advanced Course, created a project using one of NASA's API.");
           $("#tryout").attr("href","https://sess.github.io/apiclientprojectV2/");
       }
   });
});