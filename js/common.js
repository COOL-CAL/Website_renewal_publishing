// header
let header = document.querySelector(".header-wrap");

window.onscroll = function () {
    let windowTop = window.scrollY;
    if (windowTop >= 60) {
        header.classList.add("header-blur");
    } else {
        header.classList.remove("header-blur");
    }
};

// header(work)
let header1 = document.querySelector(".header-wrap1");

window.onscroll = function () {
    let windowTop = window.scrollY;
    if (windowTop >= 60) {
        header.classList.add("header-blur");
    } else {
        header.classList.remove("header-blur");
    }
};

window.onload = function() {
// mouse cursor
// let cursor = document.querySelector(".cursor");
// // let navLinks = document.querySelectorAll(".gnb li a"); //메뉴 링크
// // window 객체에 scroll & mouse 이벤트를 추가하고 cursor함수 실행되도록 함

// window.addEventListener("scroll", cursor);
// window.addEventListener("mousemove", cursor);
// // //커스텀 커서의 left값과 top값을 커서의 XY좌표값과 일치시킴

// function cursor(e) {
//   mouseCursor.style.left = e.pageX + "px";
//   mouseCursor.style.top = e.pageY - scrollY + "px";
// };

// cursor.addEventListener('mousemove',(e) => { 
//     cursor.style.left = `${e.clientX}px`; 
//     cursor.style.top = `${e.clientY}px`; 
//   });

// navLinks.forEach((link) => {
// link.addEventListener("mouseover", () => {
//     mouseCursor.classList.add("link-grow");
//     mouseCursor.style.zIndex = "-1";
//     link.classList.add("hovered-link");
// });
// link.addEventListener("mouseleave", () => {
//     mouseCursor.classList.remove("link-grow");
//     mouseCursor.style.zIndex = "1000";
//     link.classList.remove("hovered-link");
// });
// });

// const mouseImg = document.querySelector('.cursor');
// // const mouseImgRect = mouseImg.getBoundingClientRect();
// // const mouseImgHalfWidth = mouseImgRect.width / 2;
// // const mouseImgHalfHeight = mouseImgRect.height / 2;
// // const tag = document.querySelector('.tag');

// document.addEventListener('mousemove', (e) => {
//     const x = e.pageX;
//   const y = e.pageY;
//   //   mouseImg.style.transform = `translate(${x - mouseImgHalfWidth}px, ${
//       //     y - mouseImgHalfHeight
//       //   }px)`;
//       mouseImg.style.transform = `translate(${x}px, ${y}px)`;
//       //   tag.innerHTML = `${x}px ${y}px`;
//     });










}

// $(function(){
// 	// mouse cursor
// 	let mouseCursor = document.querySelector(".cursor");
// 	// let navLinks = document.querySelectorAll(".gnb li a"); //메뉴 링크
// 	//window 객체에 scroll & mouse 이벤트를 추가하고 cursor함수 실행되도록 함
	
// 	window.addEventListener("scroll", cursor);
// 	window.addEventListener("mousemove", cursor);
// 	//커스텀 커서의 left값과 top값을 커서의 XY좌표값과 일치시킴
	
// 	function cursor(e) {
// 		mouseCursor.style.left = e.windowX + "px";
// 		mouseCursor.style.top = e.windowY - scrollY + "px";
//     }
// });



// slick 슬라이드 
$(document).ready(function() {
    $('.bg-slide').slick({
        slide: 'div',
        dots: true,
        infinite: true,
        arrows: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive:[
            {
                breakpoint: 360,
                setting: {
                    autoplay: true,
                    autoplaySpeed: 10000,
                }
            },
            {
                breakpoint: 768,
            },
            {
                breakpoint: 1024,
            }
        ]
    });
});

// $(document).ready(function() {
//     $('.bg-slide1').slick({
//         dots: true,
//         infinite: true,
//         arrows: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         responsive:[
//             {
//                 breakpoint: 360,
//                 setting: {
//                     autoplay: true,
//                     autoplaySpeed: 10000,
//                 }
//             },
//             {
//                 breakpoint: 768,
//             },
//             {
//                 breakpoint: 1024,
//             }
//         ]
//     });
// });




// Business process

// let curPos = 0;
// let position = 0;
// let start_x, end_x;
// const img_width = 260;
// const imgs = document.querySelector(".process-list-t",".process-list-b") 
 
// imgs.addEventListener('touchstart', touch_start);
// imgs.addEventListener('touchend', touch_end);
 
// function prev(){
//   if(curPos > 0){
//     position += img_width;
//     imgs.style.transform = `translateX(${position}px)`;
//     curPos = curPos - 1;
//   }
// }
// function next(){
//   if(curPos < 3){
//     position -= img_width;
//     imgs.style.transform = `translateX(${position}px)`;
//     curPos = curPos + 1;
//   }
// }
 
// function touch_start(event) {
//   start_x = event.touches[0].pageX
// }
 
// function touch_end(event) {
//   end_x = event.changedTouches[0].pageX;
//   if(start_x > end_x){
//     next();
//   }else{
//     prev();
//   }
// }

// contact, apply page

    //textarea 크기 자동 조절
function resize(obj) {
    obj.style.height = '1px';
    obj.style.height = (12 + obj.scrollHeight) + 'px';
}

    // 문의 파일명 
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
    var fileInput = document.getElementsByClassName("upload-hidden");

    for( var i=0; i<fileInput.length; i++ ){
        if( fileInput[i].files.length > 0 ){
            for( var j = 0; j < fileInput[i].files.length; j++ ){
                console.log(fileInput[i].files[j].name); // 파일명 출력
            }
        }
    }
}

    // 채용 파일명 
$(document).ready(function () {
    var fileTarget1 = $('.apply-file-btn .apply_file');
    fileTarget1.on('change', function () { // 값이 변경되면 
        if (window.FileReader) { // modern browser 
            var filename1 = $(this)[0].files[0].name;
        } else { // old IE 
            var filename1 = $(this).val().split('/').pop().split('\\').pop(); // 파일명만 추출
        } // 추출한 파일명 삽입 
        $(this).siblings('.upload-name').css({ 'textAlign': "left" });
        $(this).siblings('.upload-name').val(filename1);
    });
});

function fileUpload1(){
    var fileInput1 = document.getElementsByClassName("apply_file");

    for( var i=0; i<fileInput1.length; i++ ){
        if( fileInput1[i].files.length > 0 ){
            for( var j = 0; j < fileInput1[i].files.length; j++ ){
                console.log(fileInput1[i].files[j].name); // 파일명 출력
            }
        }
    }
}