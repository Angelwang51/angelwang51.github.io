$(document).ready(function(){
    /*loading page*/
    $(window).load(function() {
        // Animate loader off screen
        $(".loading-page").hide();
    });
    /*toggle fullscreen menu*/
    $('.trigger').on('click', function() {
        $('.fullscreen-menu').fadeToggle(200);
    });
    $('.fullscreen-menu').click(function(){
        $('.fullscreen-menu').fadeToggle(200);
    });
    /*go home*/
    $('.overlay-goHome').click(function(){
        $(".fullscreen-work-slide").hide();
        $(location).attr('href','#home');

    });
    /*circle hover effect*/
    
    $('.hihi').hover(function(){
        $('.ui-design-circle').toggle();
    });
    $('.coding-container').hover(function(){
        $('.coding-circle').toggle();
    });
    $('.responsive-container').hover(function(){
        $('.responsive-design-circle').toggle();
    });
    $('.experience-container').hover(function(){
        $('.user-experience-circle').toggle();
    });

    /*post contact info*/
	$(".btn").click(function(){
        var postDate = new Date();
		$.post("https://torrid-heat-2114.firebaseio.com/contactMe.json",
			JSON.stringify({
				name:$(".contact-name").val(),
				email:$(".contact-email").val(),
				subject:$(".contact-subject").val(),
				message:$(".contact-message").val(),
                date: postDate,
			})
			
			);
		$(".contact-name").val("");
			$(".contact-email").val("");
			$(".contact-subject").val("");
			$(".contact-message").val("");
	});
    /*open and close popup page*/
    $('.overlay-close').click(function(){
        $('.fullscreen-work-slide').hide();
    });
    $('#neeyer').click(function(){
    	$('#slide-neeyer').show();
    });
    $('#fireblog').click(function(){
    	$('#slide-fireblog').show();
    });
    $('#somekolors').click(function(){
    	$('#slide-somekolors').show();
    });
    $('#rreader').click(function(){
        $('#slide-rreader').show();
    });
    $('#reactblog').click(function(){
        $('#slide-reactblog').show();
    });
    
});

