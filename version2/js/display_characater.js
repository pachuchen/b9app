$('#richer').mouseenter(function(e) {
	change_character(e)
});
 $("#gang").mouseenter(function(e) {
	change_character(e)
});
 $("#hostess").mouseenter(function(e) {
	change_character(e)
});
function change_character(e){
	var n=e.currentTarget.id
	var class_name
	var actor

	switch(n){
		case "richer":
		class_name="act_richer"
		actor={
			actorName:"大富豪",
			year:"55岁",
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
			interest:"兴趣 : 打十個"
		}
		  break;
		case "hostess":
		class_name="act_hostess";
		 actor={
			actorName:"酒店红牌",
			year:"25岁",
			narrate:"拼酒第一，交际手腕一流的酒店女公关",
			interest:"兴趣 : 玩骰宝"
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
    $('.exchange').click(function(){
      var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
      $body.animate({
        scrollTop: $('#exchange_cont').offset().top-60
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


//定住頂欄
    $(document).ready(function(){
    $(".stick_bar").sticky({topSpacing:0});
  });
$(window).scroll(function (e) {
 if($(e.currentTarget).scrollTop()>=200){
 	$('.stick_bar').css('display', 'block');
 	console.log($(e.currentTarget).scrollTop())
 }else{
 	$('.stick_bar').css('display', 'none');
 }
});
    