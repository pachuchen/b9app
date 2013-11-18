$('#richer').mouseenter(function(e) {
	change_character(e)
});
 $("#gang").mouseenter(function(e) {
	change_character(e)
});
 $("#whore").mouseenter(function(e) {
	change_character(e)
});
function change_character(e){
	var n=e.currentTarget.id
	var charac_url
	switch(n){
		case "richer":
		  console.log("132");
		  break;
		case "gang":
		  charac_url="url(../images/whore/whore0001.png)";
		  break;
		case "whore":
		break;
	}
	$('.large_photo').css('background-image')="url(../images/whore/whore0001.png)";
	
}