$(document).ready(function(){
    var stt=0;
    starImg = $("img.sli:first").attr("stt");
    endImg = $("img.sli:last").attr("stt");
    $("img.sli").each(function(){
        if($(this).is(':visible'))
        stt = $(this).attr("stt");
    });
    $("#next").click(function(){
        if(stt==endImg){
            stt=-1;
        }
        next = ++stt;
       $("img.sli").hide();
       $("img.sli").eq(next).show() ;
    });
      $("#pre").click(function(){
          if(stt==2){
            stt=endImg;
            pre = stt++;
        }
        pre = --stt;
       $("img.sli").hide();
       $("img.sli").eq(pre).show() ;
    });
    
});
   $("#back-to-top").click(function(){
    return $("body, html").animate({scrollTop:0},400),!1
});
$(function(){$('[data-toggle="tooltip"]').tooltip()
});
