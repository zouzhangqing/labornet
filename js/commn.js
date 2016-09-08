$(function(){
	$(".navs_tem").unbind().click(function(){
		$(this).siblings(".tem_hover").removeClass("tem_hover");
		$(this).addClass("tem_hover");
	});
	$(".question_title").mouseover(function(){
		$(this).next().removeClass("hidden").addClass("show");
		$(this).css("color","#255625").css("font-size","larger");
		$(this).parent().parent().css("background-color","#C7DDEF");
	});
	$(".question_title").mouseout(function(){
		$(this).next().removeClass("show").addClass("hidden");
		$(this).css("color","#777777").css("font-size","medium");
		$(this).parent().parent().css("background-color","#E9E9E9");
	});
	
	$("#sy,.returns").click(function(){
		//location.href="index.html";
		$('html,body').animate({scrollTop:'0px'}, 800);
	});
	$("#fwfw").click(function(){
		//location.href="servce.html"
		$('html,body').animate({scrollTop:$('#service').offset().top}, 800);
	});
	$("#cases").click(function(){
		//location.href="cases.html"
		$('html,body').animate({scrollTop:$('#case').offset().top}, 800);
	});
	$("#about").click(function(){
		//location.href="about.html"
		$('html,body').animate({scrollTop:$('#aboutuser').offset().top}, 800);
	});
	$("#answer").click(function(){
		//location.href="answer.html"
		$('html,body').animate({scrollTop:$('#question').offset().top}, 800);
	});
});
                            
