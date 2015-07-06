$(document).ready(function(){
	$(".btn").click(function(){
		$.post("https://torrid-heat-2114.firebaseio.com/contactMe.json",
			JSON.stringify({
				name:$(".contact-name").val(),
				email:$(".contact-email").val(),
				subject:$(".contact-subject").val(),
				message:$(".contact-message").val(),
			})
			
			);
		$(".contact-name").val("");
			$(".contact-email").val("");
			$(".contact-subject").val("");
			$(".contact-message").val("");
	});
	function blinker() {
    $('.focus-code').fadeOut(500);
    $('.focus-code').fadeIn(500);
}

    setInterval(blinker, 1000);
});