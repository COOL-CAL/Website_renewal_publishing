$(function(){
	$('input[name="telephone"]').keydown(function(event) {
		let key = event.charCode || event.keyCode || 0;
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

	let newValue02;
	let newValue03;
	let newValue04;
	let newValue05;
	let newValue06;
	let newValue07;

	// 프로젝트명
	$("#title").on("propertychange change keyup paste input", function() {
		// 현재 변경된 데이터 셋팅
		newValue02 = $(this).val();
		// 현재 실시간 데이터 표츌
		$("#load_title").text(newValue02);
		
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
			$("#load_title").addClass('min_auto');
		}else{
			$("#load_title").removeClass('min_auto');
		}
	});

	//문의 유형
	$(".chk_hidden").click(function(){  
		var check = $("#qatype01").is(":checked") + $("#qatype02").is(":checked") + $("#qatype03").is(":checked") + $("#qatype04").is(":checked");
		// if($(".chk_hidden").is(":checked")){
		// 	var qatype = "";
		// 	var qatype1 = $("#load_cate");
		// 	$(".chk_hidden").each(function(idx){  
		// 		if($(this).is(":checked")){
		// 			qatype += $(this).val() + "<strong>,</strong> ";
		// 			if(idx === 2){
		// 				qatype += "<br>"
		// 			}
		// 			// else if(idx === 3 ){
		// 			// 	qatype1 += `<span class="load_ctnt">을</span>`
		// 			// }
		// 		}
		// 	});

		// 	$("#load_cate").html(qatype);  
		// 	c1 = 1;
		// }

		if($(".chk_hidden").is(":checked")){
            var qatype = "";  
            $(".chk_hidden").each(function(idx){  
                if($(this).is(":checked")){
                    console.log(idx);
                    if(idx === 3){
						qatype += "<strong>"+ $(this).val() + "</strong>"; 
					} else if(idx === 2){
						qatype += "<strong>"+ $(this).val() + "</strong>, <br>";
					} else {
						qatype += "<strong>"+ $(this).val() + "</strong>, "; 
					}
				}
            });
            console.log(qatype);
            // $(".text").html(qatype);
        // }

					$("#load_cate").html(qatype);  
			c1 = 1;
		}
		



		
		// if(check >= 3){
		// 	$("#load_cate").addClass('max');
		// }else{
		// 	$("#load_cate").removeClass('max');
		// }
			// if(!newValue01 == ""){
			// 	if($('#title').val("")){
					// $(this).closest('.control-group').removeClass('contact-readonly');
					// $('#title').val(newValue01);
					// $('.contact_budget').removeClass('contact-readonly');
			// 	}
			// } else {
			// 	$("#load_cate").html("");  
			// 	c1 =0;
			// }
		// 	if($("input[name='BUDGET']").is(":checked")){
		// 		$('.contact_timeline').removeClass('contact-readonly');
		// 	}
		// 	if($("input[name='TIMELINE']").is(":checked")){
		// 		$('.contact_comment').removeClass('contact-readonly');
		// 	}
		// 	if(!newValue03 == ""){
		// 		$('#comments').val(newValue03);
		// 		$('.contact_right').removeClass('contact-readonly');
		// 	}
		// 	if(!newValue04 == ""){
		// 		$('#company').val(newValue04);
		// 		$('.contact_right .control-group').eq(0).removeClass('contact-readonly');
		// 	}
		// 	if(!newValue05 == ""){
		// 		$('#first_name').val(newValue05);
		// 		$('.contact_right .control-group').eq(1).removeClass('contact-readonly');
		// 	}
		// 	if(!newValue06 == ""){
		// 		$('#telephone').val(newValue06);
		// 		$('.contact_right .control-group').eq(2).removeClass('contact-readonly');
		// 	}
		// 	if(!newValue07 == ""){
		// 		$('#email').val(newValue07);
		// 		$('.contact_right .control-group').eq(3).removeClass('contact-readonly');
		// 	}

		// 	$('.contact_cname').removeClass('contact-readonly');
		// } else {
			//$('.contact_type').nextAll('div').find(".contact_tit").removeClass("choice");
			// $('.contact_type').nextAll('.control-group').addClass('contact-readonly');
			// $('.contact_right').find('.control-group').addClass('contact-readonly');
			// $('#title').attr('readonly',true);
			// $("#load_cate").html("");  
			// c1 =0;
		
		if(check >= 1){
			$("#load_cate").addClass('min_auto');
			$(".load_ctnt").addClass('min_auto');
			$('#title').attr('readonly',false);
		}else{
			$("#load_cate").removeClass('min_auto');
		}

	});

	//예산
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
			let budgettype = "";  
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
		let check = $("input[name='BUDGET']").is(":checked");
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
			let timetype = "";  
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
		let check = $("input[name='TIMELINE']").is(":checked");
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
					let height = $('.contact-wrap .left_contact').innerHeight() + 50;
					$('.contact-wrap .left_contact').css({"bottom":0});
					
				}
			} else {
				$('.result_box').removeClass('active');
				$('#ch-plugin, body.mobile .contact_gobtn_wr').removeClass('on');
			}
		});
	}
}); 