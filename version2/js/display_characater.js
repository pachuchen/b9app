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
	switch(n){
		case "richer":
		class_name="act_richer"
		  break;
		case "gang":
		  class_name="act_gang";
		  break;
		case "hostess":
		class_name="act_hostess";
		break;
	}
	$("#large_photo").attr('class', class_name);
}