$(function(){
	// mouse cursor
	let mouseCursor = document.querySelector(".cursor");
	// let navLinks = document.querySelectorAll(".gnb li a"); //메뉴 링크
	//window 객체에 scroll & mouse 이벤트를 추가하고 cursor함수 실행되도록 함
	
	window.addEventListener("scroll", cursor);
	window.addEventListener("mousemove", cursor);
	//커스텀 커서의 left값과 top값을 커서의 XY좌표값과 일치시킴
	
	function cursor(e) {
		mouseCursor.style.left = e.windowX + "px";
		mouseCursor.style.top = e.windowY - scrollY + "px";
	};
	
	// 전화번호 숫자만 입력
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

	var c1 = 0;
	let newValue02;

	// 프로젝트명
	$("#title").on("propertychange change keyup paste input", function() {
		// 현재 변경된 데이터 셋팅
		newValue02 = $(this).val();
		// 현재 실시간 데이터 표츌
		$("#load_title").text(newValue02);
			
		if($(this).val().length >= 1 ){
			$("#load_title").addClass('min_auto');
		}else{
			$("#load_title").removeClass('min_auto');
		}
	});

	//문의 유형
	$(".chk_hidden").click(function(){  
		var check = $("#qatype01").is(":checked") + $("#qatype02").is(":checked") + $("#qatype03").is(":checked") + $("#qatype04").is(":checked");
		if($(".chk_hidden").is(":checked")){
			var qatype = "";
			$(".chk_hidden").each(function(idx){
				if($(this).is(":checked")){
					if(idx === 3 ){
						// qatype += $(this).val()
						qatype += $(this).val() + ` <span class="load_ctnt">을</span>`

						$(".hide").addClass('hidden');
					}
					else if(idx <= 2){
						qatype += $(this).val() + "<strong>,</strong> "; 
					}
					// else if(idx === 1){
					// 	qatype += "<br>" + $(this).val();
					// }
					else{
						$(item).removeClass('hidden');
						// $(".hide").removeClass('hidden');
						qatype = "";
						$(".hide").addClass('hidden');
					}
				}
			});
			$("#load_cate").html(qatype);  
			c1 = 1;
		}
		else{
			$("#load_cate").html("");  
			c1 =0;	
		}
		
		if(check >= 1){
			$("#load_cate").addClass('min_auto');
		}
		else{
			$("#load_cate").removeClass('min_auto');
		}

	});


// 	$(".chk_hidden").click(function(){  
// 		var check = $("#qatype01").is(":checked") + $("#qatype02").is(":checked") + $("#qatype03").is(":checked") + $("#qatype04").is(":checked");
// 		if($(".chk_hidden").is(":checked")){
// 			var qatype = "";
// 			$(".chk_hidden").each(function(idx, item){
// 				if($(item).is(":checked")){
// 					if(idx === 3 ){
// 						qatype += $(this).val() + ` <span class="load_ctnt">을</span>`
// 						$(item).addClass('hidden');
// 						// $(".hidden").css('height', '0');
// 					}
// 					else if(idx <= 2) {
// 						qatype += $(this).val() + "<strong>,</strong> "; 
// 					// qatype +=  "<strong>,</strong> ";
// 					// // if(idx === 2){
// 					// // 	qatype += "<br>"
// 				} 
// 				else {
// 					$(item).removeClass('hidden');
// 					// $(".load_ctnt1").addClass('hidden');
// 				}
// 			}
// 		});

// 		$("#load_cate").html(qatype);  
// 		c1 = 1;
// 	}
// 	if(check >= 1){
// 		$("#load_cate").addClass('min_auto');
// 	} else {
// 		$("#load_cate").removeClass('min_auto');
// 	}

// });







	//예산
	$(".budget_input").click(function(){  

		if($(".budget_input").is(":checked")){
			let budgettype = "";  
			$(".budget_input").each(function(){  
				if($(this).is(":checked")) 
					budgettype += " " + $(this).val(); 
			});
			$("#load_budget").text(budgettype); 
			$("#load_budget2").text(budgettype); 
			c3 = 1;
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

	//일정
	$(".timeline_input").click(function(){  
		if($(".timeline_input").is(":checked")){
			let timetype = "";  
			$(".timeline_input").each(function(){  
				if($(this).is(":checked")) 
					timetype += " " + $(this).val(); 
			});
			$("#load_time").text(timetype);
			$("#load_time2").text(timetype);
			c4 = 1;
		} else {

			$("#load_time").text("");  
			$("#load_time2").text("");  
			c4 = 0;
		}
		let check = $("input[name='TIMELINE']").is(":checked");
		if(check == 1){
			$("#load_time").addClass('min_auto');
		}else{
			$("#load_time").removeClass('min_auto');
		}
	});
}); 