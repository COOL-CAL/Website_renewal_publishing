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

// header(work, contact, apply)
let header1 = document.querySelector(".header-wrap1");

window.onscroll = function () {
    let windowTop = window.scrollY;
    if (windowTop >= 60) {
        header.classList.add("header-blur");
    } else {
        header.classList.remove("header-blur");
    }
};

// mouse cursor
let mouseCursor = document.querySelector(".cursor");
// let navLinks = document.querySelectorAll(".gnb li a"); //메뉴 링크
//window 객체에 scroll & mouse 이벤트를 추가하고 cursor함수 실행되도록 함

window.addEventListener("scroll", cursor);
window.addEventListener("mousemove", cursor);
//커스텀 커서의 left값과 top값을 커서의 XY좌표값과 일치시킴

function cursor(e) {
  mouseCursor.style.left = e.pageX + "px";
  mouseCursor.style.top = e.pageY - scrollY + "px";
};

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