window.onload = function() {

const modal = document.getElementById("modal");
// const overlay = document.querySelector(".");
function modalOn() {
    modal.style.display = "block"
    
}
// function isModalOn() {
//     return modal.style.display === "flex"
// }
function modalOff() {
    modal.style.display = "none"
}

const btnModal = document.querySelector(".magnify");
btnModal.addEventListener("click", e => {
    modalOn()
})

const closeBtn = modal.querySelector(".closeBtn");
closeBtn.addEventListener("click", e => {
    modalOff()
})
modal.addEventListener("click", e => {
    const evTarget = e.target
    if(evTarget.addClass("modal-overlay")) {
        modalOff()
    }
})

window.addEventListener("keyup", e => {
    if(modalOn() && e.key === "Escape") {
        modalOff()
    }
})
}


// $(document).on("click", ".magnify", function(e){
//     alert("go");
// });



// window.onload = function() {
//     var open = document.querySelector(".magnify");
//     var close = document.querySelector(".closeBtn");
//     var modal = document.querySelector("#modal");

//     open.onclick = () => {
//         modal.style.display = "flex";
//     };

//     close.onclick = () => {
//         modal.style.display = "none";
// };
// };



