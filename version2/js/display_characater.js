var animation_index=0;
$('#richer,#gang,#hostess').mouseenter(function(e) {
	change_character(e)
	$("body").everyTime('90ms','myTimer1',timerFunc,0)
});

$('#richer,#gang,#hostess').mouseout(function(e) {
  $('body').stopTime ('myTimer1')
});

function timerFunc(){
	
	var position="-"+animation_index*320+"px"
	console.log(position)
	$("#large_photo").css('background-position','0px '+position);
	animation_index++
	if(animation_index>7){
		animation_index=0
	}

}
//  $("#gang").mouseenter(function(e) {
// 	change_character(e)
// });
//  $("#hostess").mouseenter(function(e) {
// 	change_character(e)
// });
function change_character(e){
	var n=e.currentTarget.id
	var class_name
	var actor

	switch(n){
		case "richer":
		class_name="act_richer"
		actor={
			actorName:"富二代",
			year:"25岁",
			narrate:"全球十大企业家之一",
			interest:"兴趣 : 并购其他公司"
		}
		  break;
		case "gang":
		  class_name="act_gang";
		  actor={
			actorName:"黑道大哥",
			year:"40岁",
			narrate:"盘踞东西南北各方势力的黑道大哥",
			interest:"兴趣:一打十"
		}
		  break;
		case "hostess":
		class_name="act_hostess";
		 actor={
			actorName:"酒店红牌",
			year:"20岁",
			narrate:"艳冠群芳的酒店女公关",
			interest:"兴趣 : 玩吹牛"
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
        scrollTop:$('#play_game_cont').offset().top
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
    play: 4500,
    pause: 2500,
    hoverPause: true,
    container: 'flowContainer',
    prev: 'btn_backward',
    next: 'btn_forward',
    generatePagination: false,
    pagination: false
  });
});
    