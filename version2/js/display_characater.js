var animation_index=0;
$('#richer,#gang,#hostess').mouseenter(function(e) {
	change_character(e)
	$("body").everyTime('0.10s','myTimer1',timerFunc,0)

});

function timerFunc(){
	
	var position="-"+animation_index*225+"px"
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
			actorName:"�󸻺�",
			year:"55��",
			narrate:"ȫ��ʮ����ҵ��֮һ",
			interest:"��Ȥ : ����������˾"
		}
		  break;
		case "gang":
		  class_name="act_gang";
		  actor={
			actorName:"�ڵ����",
			year:"40��",
			narrate:"�̾ᶫ���ϱ����������ĺڵ����",
			interest:"��Ȥ : ��ʮ��"
		}
		  break;
		case "hostess":
		class_name="act_hostess";
		 actor={
			actorName:"�Ƶ����",
			year:"25��",
			narrate:"ƴ�Ƶ�һ����������һ���ľƵ�Ů����",
			interest:"��Ȥ : ������"
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


//��ס픙�
    $(document).ready(function(){
    $(".stick_bar").sticky({topSpacing:0});
  });
$(window).scroll(function (e) {
 if($(e.currentTarget).scrollTop()>=200){
 	$('.stick_bar').css('display', 'block');
 }else{
 	$('.stick_bar').css('display', 'none');
 }
});
    