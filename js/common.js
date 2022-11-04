// header 
// $(function(){
//     var $header = $('header'); //헤더를 변수에 넣기
//     var $page = $('.page-start'); //색상이 변할 부분
//     var $window = $(window);
//     var pageOffsetTop = $page.offset().top;//색상 변할 부분의 top값 구하기
    
//     $window.resize(function(){ //반응형을 대비하여 리사이즈시 top값을 다시 계산
//       pageOffsetTop = $page.offset().top;
//     });
    
//     $window.on('scroll', function(){ //스크롤시
//       var scrolled = $window.scrollTop() >= pageOffsetTop; //스크롤된 상태; true or false
//       $header.toggleClass('down', scrolled); //클래스 토글
//     });
//   });


window.onload = function() {
    const header = document.querySelector(".header-wrap")

    window.onscroll = function() {
        if(window.scrollY >= 50) {
            header.classList.add("header-blur");
        } else {
            header.classList.remove("header-blur");
        }
    }
};
    // console.log(header);

    // window.addEventListener("scroll", () => {
    //     if(window.scrollY > headerHeight){
    //         header.classList.add("header-blur");
    //     } else {
    //         header.classList.remove("header-blur");
    //     }
    // });

// var lnb = $("#header").offset().top;
// $(window).scroll(function() {
//   	var window = $(this).scrollTop();

//     if(lnb <= window) {
//       $("#lnb").addClass("header-blur");
//     } else {
//       $("#lnb").removeClass("header-blur");
//     }
// })

$(document).ready(function(){
    $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      if (scroll > 1) {
        $(".header-wrap").addClass("header-blur");
      }
      else{
        $(".header-wrap").addClass("header-blur");   
      }
    })
})

// slick 슬라이드 
$(document).ready(function() {
    $('.bg-slide').slick({
        dots: true,
        infinite: true,
        arrows: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    });
});




// Business process

// let moveForce = 30;
// let rotateForce = 20;

// $(document).mousemove(function(e) {
//     let docX = $(document).width();
//     let docY = $(document).height();

//     let moveX = (e.pageX - docX/2) / (docX/2) * -moveForce;
//     let moveY = (e.pageY - docY/2) / (docY/2) * -moveForce;

//     let rotateY = (e.pageX / docX * rotateForce)
// })


// const who = document.querySelector("#mainWhoWeAre").offsetTop;
// window.scrollTo({ top: who, behavior: "smooth" });

// window.addEventListener('scroll', function() {
// function scrollToWho() {
//     const who = document.querySelector("#mainWhoWeAre").offsetTop;
//     window.scrollTo({ top: who, behavior: "smooth" });
// }
// window.addEventListener('scroll', scrollToWho);
// });

// scrollToValues() {
//     const values = document.querySelector("#mainOurValues").offsetTop;
//     window.scrollTo({ left: 0, top: values, behavior: "smooth" });
// }
// scrollToDate() {
//     const date = document.querySelector("#date").offsetTop;
//     window.scrollTo({ left: 0, top: date, behavior: "smooth" });
// }

// contact, apply page

    //textarea 크기 자동 조절
function resize(obj) {
    obj.style.height = '1px';
    obj.style.height = (12 + obj.scrollHeight) + 'px';
}
    // 파일명 
$(document).ready(function () {
    var fileTarget = $('.formmail_file .upload-hidden');
    fileTarget.on('change', function () { // 값이 변경되면 
        if (window.FileReader) { // modern browser 
            var filename = $(this)[0].files[0].name;
        } else { // old IE 
            var filename = $(this).val().split('/').pop().split('\\').pop(); // 파일명만 추출
        } // 추출한 파일명 삽입 
        $(this).siblings('.upload-name').css({ 'textAlign': "left" });
        $(this).siblings('.upload-name').val(filename);
    });
});

function fileUpload(){
    var fileInput = document.getElementsByClassName("apply_file");

    for( var i=0; i<fileInput.length; i++ ){
        if( fileInput[i].files.length > 0 ){
            for( var j = 0; j < fileInput[i].files.length; j++ ){
                console.log(fileInput[i].files[j].name); // 파일명 출력
            }
        }
    }
}