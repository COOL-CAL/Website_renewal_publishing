// const modal = document.getElementById("modal");
// function modalOn() {
//     modal.style.display = "flex"
// }
// function isModalOn() {
//     return modal.style.display === "flex"
// }
// function modalOff() {
//     modal.style.display = "none"
// }

// const btnModal = document.getElementById("magnify");
// btnModal.addEventListener("click", e => {
//     modalOn()
// })

// const closeBtn = modal.querySelector(".closeBtn");
// closeBtn.addEventListener("click", e => {
//     modalOff()
// })
// modal.addEventListener("click", e => {
//     const evTarget = e.target
//     if(evTarget.classList.contains("modal-overlay")) {
//         modalOff()
//     }
// })

// window.addEventListener("keyup", e => {
//     if(isModalOn() && e.key === "Escape") {
//         modalOff()
//     }
// })


$(document).on("click", ".magnify", function(event){
    alert("go");
});