window.onload = function() {

    const modal = document.getElementById("modal")
    function modalOn() {
        modal.style.display = "flex"
    }
    function isModalOn() {
        return modal.style.display === "block"
    }
    function modalOff() {
        modal.style.display = "none"
    }
    const btnModal = document.querySelector(".magnify")
    btnModal.addEventListener("click", e => {
        modalOn()
    })
    const closeBtn = modal.querySelector(".closeBtn")
    closeBtn.addEventListener("click", e => {
        modalOff()
    })
    modal.addEventListener("click", e => {
        const evTarget = e.target
        if(evTarget.classList.contains("modal-overlay")) {
            modalOff()
        }
    })
    window.addEventListener("keyup", e => {
        if(isModalOn() && e.key === "Escape") {
            modalOff()
        }
    })

    // document.body.classList.add("stop-scroll");
    // document.body.classList.remove("stop-scroll");
}




// // mouse cursor
// let mouseCursor = document.querySelector(".cursor");
// // let navLinks = document.querySelectorAll(".gnb li a"); //메뉴 링크
// //window 객체에 scroll & mouse 이벤트를 추가하고 cursor함수 실행되도록 함

// window.addEventListener("scroll", cursor);
// window.addEventListener("mousemove", cursor);
// //커스텀 커서의 left값과 top값을 커서의 XY좌표값과 일치시킴

// function cursor(e) {
//   mouseCursor.style.left = e.pageX + "px";
//   mouseCursor.style.top = e.pageY - scrollY + "px";
// }



