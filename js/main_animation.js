// header 
// $(document).ready(function() {
    // let header = document.querySelector("header");
    // let headerHeight = header.offsetHeight;

    // window.onscroll = function () {
    //     let windowTop = window.scrollY;
    //     if (windowTop >= 80) {
    //         header.classList.add("on");
    //     } else {
    //         header.classList.remove("on");
    //     }
    // };
// });

function header(){
    // 스크롤 시 header fade-in
    $(document).on('scroll', function(){
        if($(window).scrollTop() > 100){
            $("#header").removeClass("deactive");
            $("#header").addClass("active");
        }else{
            $("#header").removeClass("active");
            $("#header").addClass("deactive");
        }
    })

};


// // Scroll Animation (sa, 스크롤 애니메이션)
// const saDefaultMargin = 300;
// let saTriggerMargin = 0;
// let saTriggerHeight = 0;
// const saElementList = document.querySelectorAll('.sa');

// const saFunc = function() {
//   for (const element of saElementList) {
//     if (!element.classList.contains('show')) {
//       if (element.dataset.saMargin) {
//         saTriggerMargin = parseInt(element.dataset.saMargin);
//       } else {
//         saTriggerMargin = saDefaultMargin;
//       }

//       if (element.dataset.saTrigger) {
//         saTriggerHeight = document.querySelector(element.dataset.saTrigger).getBoundingClientRect().top + saTriggerMargin;
//       } else {
//         saTriggerHeight = element.getBoundingClientRect().top + saTriggerMargin;
//       }

//       if (window.innerHeight > saTriggerHeight) {
//         let delay = (element.dataset.saDelay) ? element.dataset.saDelay : 0;
//         setTimeout(function() {
//           element.classList.add('show');
//         }, delay);
//       }
//     }
//   }
// }

// window.addEventListener('load', saFunc);
// window.addEventListener('scroll', saFunc);

// $(document).ready(function(){
//     $('.main-bg').slick({
//         dots: true,
//         infinite: true,
//         speed: 500,
//         fade: true,
//         cssEase: 'linear'
//     });
// });

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