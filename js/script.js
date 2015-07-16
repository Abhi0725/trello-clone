$(document).ready(function(){
    $(".cards").mouseenter(function(){
        $(this).find(".fold-effect").css("opacity", "0");
		$(this).css("border-radius", "0")
    });
	$(".cards").mouseleave(function(){
		$(this).find(".fold-effect").css("opacity", "1");
        $(this).css("border-radius", "0 10% 0 0")
    });
});