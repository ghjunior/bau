jQuery.fn.center = function () {
    this.css("position", "absolute");
    this.css("top", ( $(window).height() - this.outerHeight() ) / 2 + $(window).scrollTop() + "px");
    this.css("left", ( $(window).width() - this.outerWidth() ) / 2 + $(window).scrollLeft() + "px");
    return this;
}

jQuery(document).ready(function($) {
	$("header").css("top", 20);
	$("header").css("left", 20).show();
	
	$("#credit").css("top", $(window).height() - $("#credit").outerHeight() - 20);
	$("#credit").css("left", $(window).width() - $("#credit").outerWidth() - 20).show();
	
	$("#nope").center();
	
	$('#balloon').center();
	$('#cloud-one').center();
	$('#cloud-two').center();
	$('#cloud-three').center();
	
	$('#balloon').show();
	$('#cloud-one').show();
	$('#cloud-two').show();
	$('#cloud-three').show();

	if (Modernizr.audio) {
		var audio = new Audio();
		audio.src = (Modernizr.audio.ogg)? 'audio/yo-la-tengo-leaving-home.ogg' : 'audio/yo-la-tengo-leaving-home.mp3';
		//audio.play();
		console.log(audio);
	}
});