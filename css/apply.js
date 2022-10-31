$(function(){
	$('input[name="applicant_tel"]').keydown(function(event) {
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

	let newValue01;

	// 지원자 이름
	$("#applicant_name").on("propertychange change keyup paste input", function() {
		// 현재 변경된 데이터 셋팅
		newValue01 = $(this).val();
		// 현재 실시간 데이터 표츌
		$("#applicant_nm").text(newValue01);
		if($(this).val().length >= 1 ){
			$("#applicant_nm").addClass('min_auto');
		}else{
			$("#applicant_nm").removeClass('min_auto');
		}
	});

    //지원 분야
	$(".chk_hidden").click(function(){  
		var check = $("#applyType01").is(":checked") || $("#applyType02").is(":checked") || $("#applyType03").is(":checked") || $("#applyType04").is(":checked");
		if($(".chk_hidden").is(":checked")){
			var applyType = "";
			$(".chk_hidden").each(function(idx){  
				if($(this).is(":checked")){
					applyType += $(this).val();
				}
			});
			$("#apply_type").html(applyType);  
			c1 = 1;
		}
		if(check >= 1){
			$("#apply_type").addClass('min_auto');
			// $(".load_ctnt").addClass('min_auto');
			// $('#title').attr('readonly',false);
		}else{
			$("#apply_type").removeClass('min_auto');
		}
    });
});