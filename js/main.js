var parameters =  new Array();
var settings_block = '<aside id="settings" class="noprint">\
		        <div id="settings-icon"></div>\
		        \
		             <h3>Color cheme</h3>\
		             <ul id="color-cheme" class="active_element clearfix" data-setting-name="color">\
				 <li><a href="#" class="active_element color_53b7f9" data-setting-value="color_53b7f9"><span></span></a></li>\
				 <li><a href="#" class="active_element color_ff3500" data-setting-value="color_ff3500"><span></span></a></li>\
				 <li><a href="#" class="active_element color_35bb2e" data-setting-value="color_35bb2e"><span></span></a></li>\
				 <li><a href="#" class="active_element color_ff6800" data-setting-value="color_ff6800"><span></span></a></li>\
				 <li><a href="#" class="active_element color_197bbf" data-setting-value="color_197bbf"><span></span></a></li>\
				 <li><a href="#" class="active_element color_c7df2e" data-setting-value="color_c7df2e"><span></span></a></li>\
				 <li><a href="#" class="active_element color_704f36" data-setting-value="color_704f36"><span></span></a></li>\
				 \
				 <li><a href="#" class="active_element color_e35039" data-setting-value="color_e35039"><span></span></a></li>\
				 <li><a href="#" class="active_element color_df5085" data-setting-value="color_df5085"><span></span></a></li>\
				 <li><a href="#" class="active_element color_03ae91" data-setting-value="color_03ae91"><span></span></a></li>\
				 <li><a href="#" class="active_element color_ea3302" data-setting-value="color_ea3302"><span></span></a></li>\
				 <li><a href="#" class="active_element color_27ccc0" data-setting-value="color_27ccc0"><span></span></a></li>\
				 <li><a href="#" class="active_element color_976ad8" data-setting-value="color_976ad8"><span></span></a></li>\
				 <li><a href="#" class="active_element color_f9c100" data-setting-value="color_f9c100"><span></span></a></li>\
		             </ul>\
		             \
		             <h3>Theme main skin</h3>\
					<ul id="main_skin" class="active_element clearfix" data-setting-name="body_skin">\
						<li  class="fl-left"><a class="active_element" data-setting-value="light_skin" href="#">white skin</a></li>\
						<li  class="fl-right"><a class="active_element" data-setting-value="dark_skin" href="#">dark skin</a></li></ul>\
		             \
		             <h3>Background Color</h3>\
		             <ul id="bg-colors" class="active_element clearfix" data-setting-name="background">\
				 <li><a href="#" class="active_element color_f0f2f2" data-setting-value="bg_f0f2f2"><span></span></a></li>\
				 <li><a href="#" class="active_element color_f1d2c2" data-setting-value="bg_f1d2c2"><span></span></a></li>\
				 <li><a href="#" class="active_element color_c2f1f1" data-setting-value="bg_c2f1f1"><span></span></a></li>\
				 <li><a href="#" class="active_element color_6fa5d6" data-setting-value="bg_6fa5d6"><span></span></a></li>\
				 <li><a href="#" class="active_element color_197bbf" data-setting-value="bg_197bbf"><span></span></a></li>\
				 <li><a href="#" class="active_element color_f1efc2" data-setting-value="bg_f1efc2"><span></span></a></li>\
				 <li><a href="#" class="active_element color_e4ddce" data-setting-value="bg_e4ddce"><span></span></a></li>\
				 \
				 <li><a href="#" class="active_element color_cc3300" data-setting-value="bg_cc3300"><span></span></a></li>\
				 <li><a href="#" class="active_element color_e52b50" data-setting-value="bg_e52b50"><span></span></a></li>\
				 <li><a href="#" class="active_element color_d66fa5" data-setting-value="bg_d66fa5"><span></span></a></li>\
				 <li><a href="#" class="active_element color_ffbe34" data-setting-value="bg_ffbe34"><span></span></a></li>\
				 <li><a href="#" class="active_element color_e36009" data-setting-value="bg_e36009"><span></span></a></li>\
				 <li><a href="#" class="active_element color_6f4e37" data-setting-value="bg_6f4e37"><span></span></a></li>\
				 <li><a href="#" class="active_element color_132c42" data-setting-value="bg_132c42"><span></span></a></li>\
		             </ul>\
		             \
		             <h3>Background patterns</h3>\
		             <ul id="bg-patterns" class="active_element clearfix" data-setting-name="background">\
				 <li><a href="#" class="active_element bg-pattern1" data-setting-value="bg-pattern1"></a></li>\
				 <li><a href="#" class="active_element bg-pattern2" data-setting-value="bg-pattern2"></a></li>\
				 <li><a href="#" class="active_element bg-pattern3" data-setting-value="bg-pattern3"></a></li>\
				 <li><a href="#" class="active_element bg-pattern4" data-setting-value="bg-pattern4"></a></li>\
				 <li><a href="#" class="active_element bg-pattern5" data-setting-value="bg-pattern5"></a></li>\
				 <li><a href="#" class="active_element bg-pattern6" data-setting-value="bg-pattern6"></a></li>\
				 <li><a href="#" class="active_element bg-pattern7" data-setting-value="bg-pattern7"></a></li>\
				 \
				 <li><a href="#" class="active_element bg-pattern8" data-setting-value="bg-pattern8"></a></li>\
				 <li><a href="#" class="active_element bg-pattern9" data-setting-value="bg-pattern9"></a></li>\
				 <li><a href="#" class="active_element bg-pattern10" data-setting-value="bg-pattern10"></a></li>\
				 <li><a href="#" class="active_element bg-pattern11" data-setting-value="bg-pattern11"></a></li>\
				 <li><a href="#" class="active_element bg-pattern12" data-setting-value="bg-pattern12"></a></li>\
		             </ul>\
		             \
		             <h3>Logotype color</h3>\
						 <ul id="logo_color" class="active_element clearfix" data-setting-name="logo_skin">\
							<li class="fl-left"><a class="active_element" data-setting-value="logo_light" href="#">light color</a></li>\
							<li class="fl-right"><a class="active_element" data-setting-value="logo_dark" href="#">dark color</a></li>\
						 </ul>\
		     </aside>';

function init_actions() {
	jQuery('ul.active_element').each(function() {
		var name = jQuery(this).attr('data-setting-name');
		parameters.push(name);
		
		jQuery(this).change(function() {
			var parameter = jQuery(this).val();
			if(jQuery(this).hasClass('go_link')) window.location = parameter;
			else {
				var old_parameter = jQuery.cookies.get(name);
				if(old_parameter) {
					jQuery('body, .wrapper').removeClass(old_parameter)
				}
				jQuery.cookies.set(name, parameter);
				jQuery('body, .wrapper').addClass(parameter);
			}
			
			jQuery(window).resize();
		});
	});
	
	jQuery('ul.active_element').each(function() {
		var name = jQuery(this).attr('data-setting-name');
		parameters.push(name);
		
		jQuery(this).find('a').click(function(e) {
			var parameter = jQuery(this).attr('data-setting-value');
			jQuery('.active_element[data-setting-name=' + name + '] a').removeClass('current');
			jQuery(this).addClass('current');
			if(!jQuery(this).hasClass('go_link')) {
				var old_parameter = jQuery.cookies.get(name);
				if(old_parameter) {
					jQuery('body, .wrapper').removeClass(old_parameter)
				}
				jQuery.cookies.set(name, parameter);
				jQuery('body, .wrapper').addClass(parameter);
				
				e.preventDefault();
				jQuery(window).resize();
			}
		});
	});
}


function init_cookies() {
	for(key in parameters) {
		var name = parameters[key];
		var parameter = jQuery.cookies.get(name);
		if(parameter) {
			jQuery('body, .wrapper').addClass(parameter);
			jQuery('ul.active_element[data-setting-name=' + name + '] li[value=' + parameter + ']').attr('selected', 'selected');
			jQuery('.active_element[data-setting-name=' + name + '] a[data-setting-value=' + parameter + ']').addClass('current');
		}
	}
}


jQuery( document ).ready(function( $ ) {	

	//jQuery('body').prepend(settings_block);
	jQuery.cookies.set('header_position', 'fixed_header');
        
	
/*init selector functions*/

	init_actions();
	init_cookies();
	
/*mediaelement*/
        $('audio,video').mediaelementplayer();

	//gallery
	if ($("#Grid").length > 0){
	     $('#Grid').mixitup({
                targetSelector: '.mix',
                targetDisplayGrid: 'inline-block',
                animateGridList: false
            });
	}  

	/* sections */
	$( "h2.toggle" ).click(function(e) {
		if($(this).hasClass('closed')){
			$(this).removeClass('closed');
			$(this).addClass('opened');
			$(this).next().slideDown('fast', function() {
				//e.preventDefault();     
				goToByScroll($(this).parent().attr("id"));
			});

			if($(this).parent().attr('id') == 'resume'){
				set_skill_percent()
			}
			if($(this).parent().attr('id') == 'contact'){
				google.maps.event.trigger(map, 'resize');
                map.setCenter(myLatlng);
			}
		} 
		else{
			$(this).removeClass('opened');
			$(this).addClass('closed');	
			$(this).next('.item-cont').slideUp(800);
		}
                $('li.active').click();
	});
	
	/* settings */
	$('#settings-icon').click(function(){
		if($('#settings').hasClass('active')){
		   $('#settings').animate({"left":"-210px"}, "slow").removeClass('active');
		} else {
		   $('#settings').animate({"left":"0"}, "slow").addClass('active');
		}
	});
	
	/* profile */
	$("#profile .col500").animate({'margin-left':"0%"},600);
    $("#profile .col260").animate({'margin-right':"0%"},600);
	
	var isMobile = window.is_mobile;
	if(isMobile){
		//gallery items hover
		if($(window).width() > 979 ){ gallery_hover(50, 55); } 
		else if($(window).width() > 767 && $(window).width() <= 979) { gallery_hover(35, 35); } //(min-width: 768px) and (max-width: 979px)
		else if($(window).width() > 480 && $(window).width() <= 767) { gallery_hover(90, 75); } //(max-width: 767px)
		else if($(window).width() <= 480) { gallery_hover(50, 55); } //(max-width: 480px)
		
		$(window).bind('resize', function () { 
			$('.ptf-item').unbind('mouseenter').unbind('mouseleave');
			if($(window).width() > 979 ){ gallery_hover(50, 55); } 
		else if($(window).width() > 767 && $(window).width() <= 979) { gallery_hover(35, 35); } //(min-width: 768px) and (max-width: 979px)
		else if($(window).width() > 480 && $(window).width() <= 767) { gallery_hover(90, 75); } //(max-width: 767px)
		else if($(window).width() <= 480) { gallery_hover(50, 55); } //(max-width: 480px)
		});
	}
	else {
		//gallery items hover
		if($(window).width() > 979 ){ gallery_hover(50, 55); } 
		else if($(window).width() > 767 && $(window).width() <= 979) { gallery_hover(35, 35); } //(min-width: 768px) and (max-width: 979px)
		else if($(window).width() > 480 && $(window).width() <= 767) { gallery_hover(90, 75); } //(max-width: 767px)
		else if($(window).width() <= 480) { gallery_hover(50, 55); } //(max-width: 480px)
		
		$(window).bind('resize', function () { 
			$('.ptf-item').unbind('mouseenter').unbind('mouseleave');
			if($(window).width() > 979 ){ gallery_hover(50, 55); } 
			else if($(window).width() > 767 && $(window).width() <= 979) { gallery_hover(35, 35); } //(min-width: 768px) and (max-width: 979px)
			else if($(window).width() > 480 && $(window).width() <= 767) { gallery_hover(90, 75); } //(max-width: 767px)
			else if($(window).width() <= 480) { gallery_hover(50, 55); } //(max-width: 480px)
		});
	}
	
	//fancybox
	if ($(".fancybox").length > 0){
		$(".fancybox").fancybox({ padding: 0, fsBtn:false, autoSize: true, });
	}
	$("#fancyboxvideo").click(function() {
		$.fancybox({
			'padding'		: 0,
			'autoScale'		: false,
			'transitionIn'	: 'none',
			'transitionOut'	: 'none',
			'title'			: this.title,
			'width'			: 640,
			'height'		: 385,
			'href'			: this.href.replace(new RegExp("([0-9])","i"),'moogaloop.swf?clip_id=$1'),
			'type'			: 'swf'
		});

		return false;
	});
	
	//page scroll up
	$("#up").click(function() {
	  $("html, body").animate({ scrollTop: 0 }, "slow");
	  return false;
	});
	
	//set #up position for pc screens
	position_up();
	
	$(window).resize(function() {
		position_up();
	});

	$('a[data-rel]').each(function() {
		$(this).attr('rel', $(this).attr('data-rel')).removeAttr('data-rel');
	});
	$('audio[data-type]').each(function() {
		$(this).attr('type', $(this).attr('data-type')).removeAttr('data-type');
	});
	
// contact form
/*
jQuery('#submit').click(function(){
	jQuery('.alert_message').empty();
	jQuery('.alert_message').remove();
	jQuery.post(
		MyAjax.ajaxurl,
		{
			action : 'send_email',
			contact_name: jQuery('#contact_name').val(),
			email: jQuery('#email').val(),
			msg: jQuery('#comment').val()
		},
		function(response){		
			var errors = response.errors;
			if(errors){
				var message = "<div class='alert_message error'>Please check if you've filled all the fields with valid information. Thank you.</div>";
				jQuery(message).insertBefore(jQuery('#contact_form'));;
			}else{
				var message = "<div class='alert_message success'>Thank you for using my contact form! Your email was successfully sent!</div>";
				jQuery(message).insertBefore(jQuery('#contact_form'));;
			}
			clear_errors();
			for(var i = 0; i < errors.length; ++i){
				jQuery('#' + errors[i]).addClass('error');
				console.log(jQuery('#' + errors[i]).addClass('error'));
			}
		},
		"json"
	);
	return false;
});

function clear_errors(){
	jQuery('#contact_name').removeClass('error');
	jQuery('#email').removeClass('error');
	jQuery('#comment').removeClass('error');
}*/


	
});//end document ready


/* set skill percent
=========================================== */
function set_skill_percent(){
    $('.skill-percent-line').each(function() {
        var width = $(this).data( "width" );
        $( this ).animate({width: width+'%'}, 1000 );

    });	
}

/* scroll to section by id
=========================================== */
function goToByScroll(id){
    id = id.replace("link", "");
    $('html,body').animate({scrollTop: $("#"+id).offset().top},'slow');
}

/* set #up position
=========================================== */
function position_up(){
  if ($(window).width() < 1024) {
	$('#up').css({right:'20px', bottom:'20px'});
  } else {
	 $('#up').removeAttr('style');
  }
}

/* gallery hover
=========================================== */
function gallery_hover(pos_text, pos_btn){
	$('.ptf-item').bind({
		mouseenter : function(e) {
			$(this).find('.ptf-cover').stop().animate({"opacity":"1"},500); 
			$(this).find('.ptf-button').stop().animate({ bottom: '+='+pos_btn+'px', 'opacity':1 }, 300, 'easeOutSine', function () {});
			$(this).find('.ptf-details').stop().animate({ top: '+='+pos_text+'px', 'opacity':1 }, 300, 'easeOutSine', function () {});
		},
		mouseleave: function(e) {
			$(this).find('.ptf-cover').stop().animate({"opacity":"0"},500); 
			$(this).find('.ptf-button').stop().animate({ bottom: '0px', 'opacity':0 }, 300, 'easeOutSine', function () {});
			$(this).find('.ptf-details').stop().animate({ top: '0px', 'opacity':0 }, 300, 'easeOutSine', function () {});
		}
	});
}

function gallery_hover_mobile(pos_btn, pos_text){
	$('.ptf-item').bind({
		touchstart : function(e) {
			$(this).find('.ptf-cover').stop().animate({"opacity":"1"},500); 
			$(this).find('.ptf-button').stop().animate({ bottom: '+='+pos_btn+'px', 'opacity':1 }, 300, 'easeOutSine', function () {});
			$(this).find('.ptf-details').stop().animate({ top: '+='+pos_text+'px', 'opacity':1 }, 300, 'easeOutSine', function () {});
		},
		touchend: function(e) {
			$(this).find('.ptf-cover').stop().animate({"opacity":"0"},500); 
			$(this).find('.ptf-button').stop().animate({ bottom: '0px', 'opacity':0 }, 300, 'easeOutSine', function () {});
			$(this).find('.ptf-details').stop().animate({ top: '0px', 'opacity':0 }, 300, 'easeOutSine', function () {});
		}
	});
}



function init_validation(target) {
	function validate(target) {
		var valid = true;
		jQuery(target).find('.req').each(function() {
			if(jQuery(this).val() == '') {
				valid = false;
				jQuery(this).parent().addClass('errored');
			}
			else {
				jQuery(this).parent().removeClass('errored');
			}
		});
		return valid;
	}
	
	jQuery('form.w_validation').live('submit', function(e) {
		var valid = validate(this);
		if(!valid) e.preventDefault();
	});
	
	if(target) {return validate(target);}
}

jQuery(document).ready(function() {
	init_validation();
});

jQuery(window).load(function() {
	init_validation();
});