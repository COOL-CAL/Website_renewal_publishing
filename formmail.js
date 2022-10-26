$(function(){
	
	/*寃쎄퀬李� �덉씠�� �앹뾽*/
	$('#layer_pop').find('.exit a').click(function(e){
		e.preventDefault();
		$('#layer_pop').hide();

	});
	$('#layer_pop').find('.pop_exit').click(function(e){
		e.preventDefault();
		$('#layer_pop').hide();
		back = 0;
	});
	// $(document).mouseup(function (e){
	//   var LayerPopup = $("#layer_pop");
	//   if(back == 0){
	// 	  if(LayerPopup.has(e.target).length === 0){
	// 		$('#layer_pop').hide();
	// 	  }
	//   }
	});
	$('input[name="telephone"]').keydown(function(event) {
		var key = event.charCode || event.keyCode || 0;
		$text = $(this);
		if (key !== 8 && key !== 9) {
			if ($text.val().length === 3) {
				$text.val($text.val() + '-');
			}
			if ($text.val().length === 8) {
				$text.val($text.val() + '-');
			}
		}
	 
		return (key == 8 || key == 9 || key == 46 || (key >= 48 && key <= 57) || (key >= 96 && key <= 105));          
	});
	/*�ㅽ겕濡ㅼ떆 寃��뺣같寃�*/
	// if($(window).width() > 1024){
	// 	$(window).scroll(function(event){
	// 		var scTop = $(this).scrollTop();
	// 		var scBottom = scTop + $(this).innerHeight();
	// 		//console.log(scBottom);
	// 		if($('.control-privacy').length){
	// 			if(scBottom > ($('#formMail .result_box .send_btn').offset().top + ($('#formMail .result_box .send_btn').innerHeight()/2)) ){
	// 				$('.contact-wrap').addClass('black');
	// 				$('#formMail .result_box .send_btn').addClass('apply');
	// 				$('.contact-wrap .left_contact .scroll_box').hide();
	// 			}else{
	// 				$('.contact-wrap').removeClass('black');
	// 				$('#formMail .result_box .send_btn').removeClass('apply');
	// 				$('.contact-wrap .left_contact .scroll_box').show();
	// 			}
	// 		}
	// 	});
	// }else{
	// 	var height = $('.contact-wrap .left_contact').innerHeight() + 50;
	// 	$('.contact-wrap .left_contact').css({"bottom":- height});
	// 	$(".contact-wrap #formMail .send_btn").click(function(e){
	// 		e.preventDefault();
	// 		$('.contact-wrap .left_contact').css({"bottom":0});
	// 	});
	// 	// �몃��곸뿭 �대┃ �� �앹뾽 �リ린
	// 	$(document).mouseup(function (e){
	// 	  var LayerPopup = $(".contact-wrap .left_contact");
	// 	  if(LayerPopup.has(e.target).length === 0){
	// 		$('.contact-wrap .left_contact').css({"bottom":- height});
	// 	  }
	// 	});
	// }
	// /*醫뚯륫 sticky�곸뿭 span �대┃�� �대떦 �ㅽ겕濡ㅻ줈*/
	// var location01 = $('#formMail form > div .contact_type').offset().top - ($(window).innerHeight()/2) + 70;
	// var location02 = $('#formMail form > div .contact_cname').offset().top - ($(window).innerHeight()/2) + 70;
	// var location03 = $('#formMail form > div .contact_budget').offset().top - ($(window).innerHeight()/2) + 70;
	// var location04 = $('#formMail form > div .contact_timeline').offset().top - ($(window).innerHeight()/2) + 70;
	// var location05 = $('#formMail form > div .contact_comment').offset().top - ($(window).innerHeight()/2) + 70;
	// var location06 = $('#formMail form > div .contact_right').offset().top - ($(window).innerHeight()/2) + 70;
	// var location07 = $('#formMail form > div .contact_right').offset().top - ($(window).innerHeight()/2) + 70;
	// var location08 = $('#formMail form > div .contact_right').offset().top - ($(window).innerHeight()/2) + 70;
	// var location09 = $('#formMail form > div .contact_right').offset().top - ($(window).innerHeight()/2) + 70;
	
	// $('#load_cate').click(function(){
	// 	$('html,body').animate({scrollTop:location01},300);
	// });
	// $('span.load_title').click(function(){
	// 	$('html,body').animate({scrollTop:location02},300);
	// });
	// $('#load_budget').click(function(){
	// 	$('html,body').animate({scrollTop:location03},300);
	// });
	// $('#load_time').click(function(){
	// 	$('html,body').animate({scrollTop:location04},300);
	// });
	var c1,c2,c3,c4 = 0;
	var text01 = "�섎굹 �댁긽�� �좏삎�� �좏깮�섏꽭��.";
	var text02 = "�꾨줈�앺듃紐낆쓣 �낅젰�댁＜��떆��.";
	var text03 = "�덉궛�� �좏깮�댁＜��떆��.";
	var text04 = "�쇱젙�� �좏깮�댁＜��떆��.";
	var text05 = "�댁슜�� �낅젰�댁＜��떆��.";
	var text06 = "�뚯궗紐낆쓣 �낅젰�댁＜��떆��.";
	var text07 = "�대떦�� �대쫫�� �낅젰�댁＜��떆��.";
	var text08 = "�곕씫泥섎� �낅젰�댁＜��떆��.";
	var text09 = "�대찓�쇰� �낅젰�댁＜��떆��.";
	var newValue02;
	var newValue03;
	var newValue04;
	var newValue05;
	var newValue06;
	var newValue07;
	//臾몄쓽�좏삎
	$(".chk_hidden").click(function(){  
		var check = $("#qatype01").is(":checked") + $("#qatype02").is(":checked") + $("#qatype03").is(":checked");
		if($(".chk_hidden").is(":checked")){
			var qatype = "";  
			$(".chk_hidden").each(function(){  
				if($(this).is(":checked")){
					qatype += $(this).val() + "<strong>,</strong> "; 
				}
			});
			$("#load_cate").html(qatype);  
			c1 = 1;
			if(!newValue02 == ""){
				if($('#title').val("")){
					$(this).closest('.control-group').removeClass('contact-readonly');
					$('#title').val(newValue02);
					$('.contact_budget').removeClass('contact-readonly');
				}
			}
			if($("input[name='BUDGET']").is(":checked")){
				$('.contact_timeline').removeClass('contact-readonly');
			}
			if($("input[name='TIMELINE']").is(":checked")){
				$('.contact_comment').removeClass('contact-readonly');
			}
			if(!newValue03 == ""){
				$('#comments').val(newValue03);
				$('.contact_right').removeClass('contact-readonly');
			}
			if(!newValue04 == ""){
				$('#company').val(newValue04);
				$('.contact_right .control-group').eq(0).removeClass('contact-readonly');
			}
			if(!newValue05 == ""){
				$('#first_name').val(newValue05);
				$('.contact_right .control-group').eq(1).removeClass('contact-readonly');
			}
			if(!newValue06 == ""){
				$('#telephone').val(newValue06);
				$('.contact_right .control-group').eq(2).removeClass('contact-readonly');
			}
			if(!newValue07 == ""){
				$('#email').val(newValue07);
				$('.contact_right .control-group').eq(3).removeClass('contact-readonly');
			}

			$('.contact_cname').removeClass('contact-readonly');
		} else {
			//$('.contact_type').nextAll('div').find(".contact_tit").removeClass("choice");
			$('.contact_type').nextAll('.control-group').addClass('contact-readonly');
			$('.contact_right').find('.control-group').addClass('contact-readonly');
			$('#title').attr('readonly',true);
			$("#load_cate").html("");  
			c1 =0;
			
		}
		
		if(check >= 1){
			$("#load_cate").addClass('min_auto');
			$('#title').attr('readonly',false);
		}else{
			$("#load_cate").removeClass('min_auto');
		}

	});

	 // �꾨줈�앺듃紐�
	$("#title").click(function(){
		if($(".chk_hidden:checked").length <= 0){
			$('#layer_pop').show();
			$('#layer_pop').find('.pop_text').text(text01);
			$('html,body').animate({scrollTop:location01},300);
			return false;
		}else{	
			$(this).parent('div').addClass('on');
		};
	});
	$("#title").on("propertychange change keyup paste input", function() {
		// �꾩옱 蹂�寃쎈맂 �곗씠�� �뗮똿
		newValue02 = $(this).val();
		// �꾩옱 �ㅼ떆媛� �곗씠�� �쒖툕
		$(".load_title").text(newValue02);
		
		if($(this).val() == ""){
			c2 = 0;
			$('.contact_cname').nextAll('.control-group').addClass('contact-readonly');
			$('.contact_right').find('.control-group').addClass('contact-readonly');
		}else{
			c2 = 1;
			if($("input[name='BUDGET']").is(":checked")){
				$('.contact_timeline').removeClass('contact-readonly');
			}
			if($("input[name='TIMELINE']").is(":checked")){
				$('.contact_comment').removeClass('contact-readonly');
			}
			if(!newValue03 == ""){
				$('#comments').val(newValue03);
				$('.contact_right').removeClass('contact-readonly');
			}
			if(!newValue04 == ""){
				$('#company').val(newValue04);
				$('.contact_right .control-group').eq(0).removeClass('contact-readonly');
			}
			if(!newValue05 == ""){
				$('#first_name').val(newValue05);
				$('.contact_right .control-group').eq(1).removeClass('contact-readonly');
			}
			if(!newValue06 == ""){
				$('#telephone').val(newValue06);
				$('.contact_right .control-group').eq(2).removeClass('contact-readonly');
			}
			if(!newValue07 == ""){
				$('#email').val(newValue07);
				$('.contact_right .control-group').eq(3).removeClass('contact-readonly');
			}
			$('.contact_budget').removeClass('contact-readonly');

		}
		if($(this).val().length >= 1 ){
			$(".load_title").addClass('min_auto');
		}else{
			$(".load_title").removeClass('min_auto');
		}
	 });
	//�덉궛
	$(".budget_input").click(function(){  
		
		if($(".chk_hidden:checked").length <= 0){
			$('#layer_pop').show();
			$('#layer_pop').find('.pop_text').text(text01);
			$('html,body').animate({scrollTop:location01},300);
			return false;
		}if(contactform.title.value == ''){
			$('#layer_pop').show();
			$('#layer_pop').find('.pop_text').text(text02);
			$('html,body').animate({scrollTop:location02},300);
			return false;
		};

		if($(".budget_input").is(":checked")){
			var budgettype = "";  
			$(".budget_input").each(function(){  
				if($(this).is(":checked")) 
					budgettype += " " + $(this).val(); 
			});
			$("#load_budget").text(budgettype); 
			$("#load_budget2").text(budgettype); 
			c3 = 1;
			$('.contact_timeline').removeClass('contact-readonly');
		} else {
			$("#load_budget").text(""); 
			$("#load_budget2").text(""); 
			c3 = 0;
		}
		var check = $("input[name='BUDGET']").is(":checked");
		if(check == 1){
			$("#load_budget").addClass('min_auto');
		}else{
			$("#load_budget").removeClass('min_auto');
		}
	});
	//�쇱젙
	$(".timeline_input").click(function(){  
		if($(".chk_hidden:checked").length <= 0){
			$('#layer_pop').show();
			$('#layer_pop').find('.pop_text').text(text01);
			$('html,body').animate({scrollTop:location01},300);
			return false;
		}if(contactform.title.value == ''){
			$('#layer_pop').show();
			$('#layer_pop').find('.pop_text').text(text02);
			$('html,body').animate({scrollTop:location02},300);
			return false;
		};
		if($(".budget_input:checked").length <= 0){
			$('#layer_pop').show();
			$('#layer_pop').find('.pop_text').text(text03);
			$('html,body').animate({scrollTop:location03},300);
			return false;
		};

		if($(".timeline_input").is(":checked")){
			var timetype = "";  
			$(".timeline_input").each(function(){  
				if($(this).is(":checked")) 
					timetype += " " + $(this).val(); 
			});
			$("#load_time").text(timetype);
			$("#load_time2").text(timetype);
			c4 = 1;
			$('.contact_comment').removeClass('contact-readonly');
		} else {

			$("#load_time").text("");  
			$("#load_time2").text("");  
			c4 = 0;
		}
		var check = $("input[name='TIMELINE']").is(":checked");
		if(check == 1){
			$("#load_time").addClass('min_auto');
			$('#comments').attr('readonly',false);
		}else{
			$("#load_time").removeClass('min_auto');
		}
	});
	// �댁슜
	 $("#comments").click(function(){
		 if($(".chk_hidden:checked").length <= 0){
			 $('#layer_pop').show();
			$('#layer_pop').find('.pop_text').text(text01);
			$('html,body').animate({scrollTop:location01},300);

			return false;
		}if(contactform.title.value == ''){
			$('#layer_pop').show();
			$('#layer_pop').find('.pop_text').text(text02);
			$('html,body').animate({scrollTop:location02},300);
			return false;
		};
		if($(".budget_input:checked").length <= 0){
			$('#layer_pop').show();
			$('#layer_pop').find('.pop_text').text(text03);
			$('html,body').animate({scrollTop:location03},300);
			return false;
		};
		if($(".timeline_input:checked").length <= 0){
			$('#layer_pop').show();
			$('#layer_pop').find('.pop_text').text(text04);
			$('html,body').animate({scrollTop:location04},300);
			$("#comments").blur();
			return false;
		} else {
			$("#comments").on("propertychange change keyup paste input", function() {	
				$('#company').attr('readonly',false);
				$('.contact_right').removeClass('contact-readonly');
				
				// �꾩옱 蹂�寃쎈맂 �곗씠�� �뗮똿
				newValue03 = $(this).val();
				if(!$(this).val() == ""){
					$('.contact_right .control-group').eq(0).removeClass('contact-readonly');
					if(!newValue04 == ""){
						$('#company').val(newValue04);
						$('.contact_right .control-group').eq(0).removeClass('contact-readonly');
					}
					if(!newValue05 == ""){
						$('#first_name').val(newValue05);
						$('.contact_right .control-group').eq(1).removeClass('contact-readonly');
					}
					if(!newValue06 == ""){
						$('#telephone').val(newValue06);
						$('.contact_right .control-group').eq(2).removeClass('contact-readonly');
					}
					if(!newValue07 == ""){
						$('#email').val(newValue07);
						$('.contact_right .control-group').eq(3).removeClass('contact-readonly');
					}
				}else{
					$('.contact_right').find('.control-group').addClass('contact-readonly');
				}
			});	
			

		};
	 });

	 //�뚯궗紐�
	$("#company").click(function(){
		 if($(".chk_hidden:checked").length <= 0){
			$('#layer_pop').show();
			$('#layer_pop').find('.pop_text').text(text01);
			$('html,body').animate({scrollTop:location01},300);
			return false;
		}if(contactform.title.value == ''){
			$('#layer_pop').show();
			$('#layer_pop').find('.pop_text').text(text02);
			$('html,body').animate({scrollTop:location02},300);
			return false;
		};
		if($(".budget_input:checked").length <= 0){
			$('#layer_pop').show();
			$('#layer_pop').find('.pop_text').text(text03);
			$('html,body').animate({scrollTop:location03},300);
			return false;
		};
		if($(".timeline_input:checked").length <= 0){
			$('#layer_pop').show();
			$('#layer_pop').find('.pop_text').text(text04);
			$('html,body').animate({scrollTop:location04},300);
			$("#comments").blur();
			return false;
		}
		if(contactform.comments.value == ''){
			$('#layer_pop').show();
			$('#layer_pop').find('.pop_text').text(text05);
			$('html,body').animate({scrollTop:location05},300);
			contactform.comments.focus();
			return false;
		}else{
			$(this).parent('div').addClass('on');
			
			$("#company").on("propertychange change keyup paste input", function() {	
				
				$('#first_name').attr('readonly',false);
				$('.contact_right .control-group').eq(1).removeClass('contact-readonly');
				// �꾩옱 蹂�寃쎈맂 �곗씠�� �뗮똿
				newValue04 = $(this).val();
				if(!$(this).val() == ""){
					if(!newValue05 == ""){
						$('#first_name').val(newValue05);
						$('.contact_right .control-group').eq(1).removeClass('contact-readonly');
					}
					if(!newValue06 == ""){
						$('#telephone').val(newValue06);
						$('.contact_right .control-group').eq(2).removeClass('contact-readonly');
					}
					if(!newValue07 == ""){
						$('#email').val(newValue07);
						$('.contact_right .control-group').eq(3).removeClass('contact-readonly');
					}
				}else{
					$('.contact_right').find('.control-group').eq(0).nextAll('.control-group').addClass('contact-readonly');
				}
			});	
		}
	});

	$("#first_name").click(function(){
		if($(".chk_hidden:checked").length <= 0){
			$('#layer_pop').show();
			$('#layer_pop').find('.pop_text').text(text01);
			$('html,body').animate({scrollTop:location01},300);

			return false;
		}if(contactform.title.value == ''){
			$('#layer_pop').show();
			$('#layer_pop').find('.pop_text').text(text02);
			$('html,body').animate({scrollTop:location02},300);
			return false;
		};
		if($(".budget_input:checked").length <= 0){
			$('#layer_pop').show();
			$('#layer_pop').find('.pop_text').text(text03);
			$('html,body').animate({scrollTop:location03},300);
			return false;
		};
		if($(".timeline_input:checked").length <= 0){
			$('#layer_pop').show();
			$('#layer_pop').find('.pop_text').text(text04);
			$('html,body').animate({scrollTop:location04},300);
			$("#comments").blur();
			return false;
		}
		if(contactform.comments.value == ''){
			$('#layer_pop').show();
			$('#layer_pop').find('.pop_text').text(text05);
			$('html,body').animate({scrollTop:location05},300);
			contactform.comments.focus();
			return false;
		}
		if(contactform.company.value == ''){
			$('#layer_pop').show();
			$('#layer_pop').find('.pop_text').text(text06);
			$('html,body').animate({scrollTop:location06},300);
			contactform.company.focus();
			return false;
		}else{
			$(this).parent('div').addClass('on');
			$("#first_name").on("propertychange change keyup paste input", function() {	
				$('.contact_right .control-group').eq(2).removeClass('contact-readonly');
				$('#telephone').attr('readonly',false);
				// �꾩옱 蹂�寃쎈맂 �곗씠�� �뗮똿
				newValue05 = $(this).val();
				if(!$(this).val() == ""){
					if(!newValue06 == ""){
						$('#telephone').val(newValue06);
						$('.contact_right .control-group').eq(2).removeClass('contact-readonly');
					}
					if(!newValue07 == ""){
						$('#email').val(newValue07);
						$('.contact_right .control-group').eq(3).removeClass('contact-readonly');
					}
				}else{
					$('.contact_right').find('.control-group').eq(1).nextAll('.control-group').addClass('contact-readonly');
				}
			});	
		}
	});

	
	$("#telephone").click(function(){
		if($(".chk_hidden:checked").length <= 0){
			$('#layer_pop').show();
			$('#layer_pop').find('.pop_text').text(text01);
			$('html,body').animate({scrollTop:location01},300);
			return false;
		}if(contactform.title.value == ''){
			$('#layer_pop').show();
			$('#layer_pop').find('.pop_text').text(text02);
			$('html,body').animate({scrollTop:location02},300);
			return false;
		};
		if($(".budget_input:checked").length <= 0){
			$('#layer_pop').show();
			$('#layer_pop').find('.pop_text').text(text03);
			$('html,body').animate({scrollTop:location03},300);
			return false;
		};
		if($(".timeline_input:checked").length <= 0){
			$('#layer_pop').show();
			$('#layer_pop').find('.pop_text').text(text04);
			$('html,body').animate({scrollTop:location04},300);
			$("#comments").blur();
			return false;
		}
		if(contactform.comments.value == ''){
			$('#layer_pop').show();
			$('#layer_pop').find('.pop_text').text(text05);
			$('html,body').animate({scrollTop:location05},300);
			contactform.comments.focus();
			return false;
		}
		if(contactform.company.value == ''){
			$('#layer_pop').show();
			$('#layer_pop').find('.pop_text').text(text06);
			$('html,body').animate({scrollTop:location06},300);
			contactform.company.focus();
			return false;
		}
		if(contactform.first_name.value == ''){
			$('#layer_pop').show();
			$('#layer_pop').find('.pop_text').text(text07);
			$('html,body').animate({scrollTop:location07},300);
			contactform.first_name.focus();
			return false;
		}else{
			$(this).parent('div').addClass('on');
			$("#telephone").on("propertychange change keyup paste input", function() {	
				$('.contact_right .control-group').eq(3).removeClass('contact-readonly');
				$('#email').attr('readonly',false);
				// �꾩옱 蹂�寃쎈맂 �곗씠�� �뗮똿
				newValue06 = $(this).val();
				if(!$(this).val() == ""){
					if(!newValue07 == ""){
						$('#email').val(newValue07);
						$('.contact_right .control-group').eq(3).removeClass('contact-readonly');
					}
				}else{
					$('.contact_right').find('.control-group').eq(2).nextAll('.control-group').addClass('contact-readonly');
				}
			});	
		}
	});

	$("#email").click(function(){
		if($(".chk_hidden:checked").length <= 0){
			$('#layer_pop').show();
			$('#layer_pop').find('.pop_text').text(text01);
			$('html,body').animate({scrollTop:location01},300);
			return false;
		}if(contactform.title.value == ''){
			$('#layer_pop').show();
			$('#layer_pop').find('.pop_text').text(text02);
			$('html,body').animate({scrollTop:location01},300);
			return false;
		};
		if($(".budget_input:checked").length <= 0){
			$('#layer_pop').show();
			$('#layer_pop').find('.pop_text').text(text03);
			$('html,body').animate({scrollTop:location03},300);
			return false;
		};
		if($(".timeline_input:checked").length <= 0){
			$('#layer_pop').show();
			$('#layer_pop').find('.pop_text').text(text04);
			$('html,body').animate({scrollTop:location04},300);
			$("#comments").blur();
			return false;
		}
		if(contactform.comments.value == ''){
			$('#layer_pop').show();
			$('#layer_pop').find('.pop_text').text(text05);
			$('html,body').animate({scrollTop:location05},300);
			contactform.comments.focus();
			return false;
		}
		if(contactform.company.value == ''){
			$('#layer_pop').show();
			$('#layer_pop').find('.pop_text').text(text06);
			$('html,body').animate({scrollTop:location06},300);
			contactform.company.focus();
			return false;
		}
		if(contactform.first_name.value == ''){
			$('#layer_pop').show();
			$('#layer_pop').find('.pop_text').text(text07);
			$('html,body').animate({scrollTop:location07},300);
			contactform.first_name.focus();
			return false;
		}
		if(contactform.telephone.value == ''){
			$('#layer_pop').show();
			$('#layer_pop').find('.pop_text').text(text08);
			$('html,body').animate({scrollTop:location08},300);
			contactform.telephone.focus();
			return false;
		}else{
			$(this).parent('div').addClass('on');
			$(this).attr('readonly',false);
			$("#email").on("propertychange change keyup paste input", function() {	
				// �꾩옱 蹂�寃쎈맂 �곗씠�� �뗮똿
				newValue07 = $(this).val();
			});	
		}
	});
	if($(window).width() <= 1024){
		$(".control-privacy input:checkbox").on('click', function() {
			if ( $(this).prop('checked') ) {
				if(!$('.contact_right .control-group').eq(3).is('.contact-readonly') && !$("#email").val() == ""){
					$('.result_box').addClass('active');
					$('#ch-plugin , body.mobile .contact_gobtn_wr').addClass('on');
					var height = $('.contact-wrap .left_contact').innerHeight() + 50;
					$('.contact-wrap .left_contact').css({"bottom":0});
					
				}
			} else {
				$('.result_box').removeClass('active');
				$('#ch-plugin, body.mobile .contact_gobtn_wr').removeClass('on');
			}
		});
	}
// });	 