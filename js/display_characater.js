var animation_index=1;
$("body").everyTime('90ms','myTimer1',timerFunc,0)
$('#richer,#gang,#hostess,#waiter,#dancer,#police').mouseenter(function(e) {
	change_character(e)
});

$('#waiter,#dancer,#police').mouseenter(function(e) {
  change_character(e)
  });
//計時器停止
// $('#richer,#gang,#hostess').mouseout(function(e) {
//   $('body').stopTime ('myTimer1')
// });

function timerFunc(){
	var position="-"+animation_index*320+"px"
	$("#large_photo").css('background-position','0px '+position);
	animation_index++
	if(animation_index>7){
		animation_index=0
	}

}

function change_character(e){
	var n=e.currentTarget.id
	var class_name
	var actor

	switch(n){
		case "richer":
		class_name="act_richer"
		actor={
			actorName:"富少",
			year:"25岁",
			narrate:"出手阔绰的知名企业少东，在夜生活圈非常知名",
			interest:"兴趣 : 自拍"
		}
		  break;
		case "gang":
		  class_name="act_gang";
		  actor={
			actorName:"黑道大哥",
			year:"40岁",
			narrate:"盘踞东西南北各方势力的狠角色",
			interest:"兴趣 : 一打十"
		}
		  break;
		case "hostess":
		class_name="act_hostess";
		 actor={
			actorName:"酒店公主",
			year:"20岁",
			narrate:"艳冠群芳的酒店女红牌",
			interest:"兴趣 : 玩吹牛"
		}
		break;

    case "waiter":
    class_name="act_waiter";
     actor={
      actorName:"酒店服务生",
      year:"19岁",
      narrate:"为了生活来兼差的打工族",
      interest:"兴趣 : 一次端三盘"
    }
    break;

    case "dancer":
    class_name="act_dancer";
     actor={
      actorName:"酒店舞女",
      year:"30岁",
      narrate:"在酒店表演，以性感火辣，充满挑逗的舞姿著稱",
      interest:"兴趣 : 一字马"
    }
    break;

    case "police":
    class_name="act_police";
     actor={
      actorName:"公安",
      year:"38岁",
      narrate:"暴躁易怒的执法者",
      interest:"兴趣 :断水断电"
    }
    break;
	}
	$("#large_photo").attr('class', class_name);

	$("#actor_name").text(actor.actorName);
	$("#actor_year").text(actor.year);
	$("#actor_narrate").text(actor.narrate);
	$("#actor_interest").text(actor.interest);

}
  $(function(){
    $('.contect').click(function(){
      var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
      $body.animate({
        scrollTop: $('#contect_cont').offset().top-60
      }, 900);
      return false;
    });
  });
    $(function(){
    $('.feature').click(function(){
      var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
      $body.animate({
        scrollTop:$('#feature_cont').offset().top-60
      }, 300);
      return false;
    });
  });
    $(function(){
    $('.character').click(function(){
      var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
      $body.animate({
        scrollTop:$('#character_cont').offset().top-60
      }, 500);
      return false;
    });
  });
    $(function(){
    $('.play_game').click(function(){
      var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
      $body.animate({
        scrollTop:$('#play_game_cont').offset().top+20
      }, 700);
      return false;
    });
  });
    $(function(){
    $('#top_logo').click(function(){
      var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
      $body.animate({
        scrollTop:0
      }, 700);
      return false;
    });
  });


// Fixed Menu
$(document).ready(function(){
    //$(".stick_bar").sticky({topSpacing:0});

	/*$(window).scroll(function (e) {
	 if($(e.currentTarget).scrollTop()>=200){
	 	$('.stick_bar').css('display', 'block');
	 }else{
	 	$('.stick_bar').css('display', 'none');
	 }
	});*/

　$(window).load(function(){
　　$(window).bind('scroll resize', function(){
　　var $this = $(this);
　　var $this_Top=$this.scrollTop();

　　if($this_Top < 80){
　　　$('.stick_bar').stop().animate({top:"-65px"}, 560);
　　　}
　　　　if($this_Top > 80){
　　　　$('.stick_bar').stop().animate({top:"0px"}, 300);
　　　 }
　　}).scroll();
　});

});

//遊戲流程輪播
$(document).ready(function($) {
  
  $("#teachSlider").slides({
    preload: true,
    preloadImage: 'images/loading.gif',
    play: 2500,
    pause: 2500,
    hoverPause: true,
    container: 'flowContainer',
    prev: 'btn_backward',
    next: 'btn_forward',
    generatePagination: false,
    pagination: false
  });
});
/*
 var inside_hand=false;
 $('#play_game_cont').on('mousemove', function(e) {
   e.preventDefault();
   if(inside_hand){
    $('.slide_hand').offset({top:e.pageY+10,left:e.pageX+10});
   }else{ 
    $('.slide_hand').animate({left: e.pageX, top: e.pageY}, 300,function(){
    inside_hand=true;
   })
  }
   //console.log(e.pageX+"/"+e.pageY)
 });

$('#play_game_cont').on('mouseout', function(e) {
   event.preventDefault();
   var mouseY=e.pageY;
   var mouseX=e.pageX
   var sectionY=$('#play_game_cont').offset().top
   var sectionX=$('#play_game_cont').offset().left
   var sectionH=$('#play_game_cont').height()
   var sectionW=$('#play_game_cont').width()
   if(mouseY<sectionY||mouseY>sectionY+sectionH||mouseX<sectionX||mouseX>sectionX+sectionW){
    inside_hand=false;
    console.log(sectionW)
    $('.slide_hand').animate({left: 2000}, 300)
  }
 });
 */