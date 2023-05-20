$(function(){

    $(".B1,.B2,.B3,.B4").hide();
    $(".a1").click(function(){$(".B1").slideToggle();});
    $(".a2").click(function(){$(".B2").slideToggle();});
    $(".a3").click(function(){$(".B3").slideToggle();});
    $(".a4").click(function(){$(".B4").slideToggle();});
    $(".cutoff,.placement,.fees").hide();
    $(".X").click(function(){$(".cutoff,.placement,.fees").hide($(".cutoff").toggle());});
    $(".Y").click(function(){$(".cutoff,.fees").hide($(".placement").toggle());});
    $(".Z").click(function(){$(".placement,.cutoff").hide($(".fees").toggle());});

    $(".genimg,.ewsimg,.obcimg,.scimg,.stimg").hide();
    $(".genb").click(function(){($(".genimg").toggle());});
    $(".ewsb").click(function(){($(".ewsimg").toggle());});
    $(".obcb").click(function(){($(".obcimg").toggle());});
    $(".scb").click(function(){($(".scimg").toggle());});
    $(".stb").click(function(){($(".stimg").toggle());});

    
})