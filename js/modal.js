window.onload = function() {

    const modal = document.getElementById("modal")
    function modalOn() {
        modal.style.display = "flex"
        document.body.style.overflow = "hidden"
    }
    function isModalOn() {
        return modal.style.display === "block"
    }
    function modalOff() {
        modal.style.display = "none"
        document.body.style.overflow = "unset"
    }
    const btnModal = document.querySelector(".work-list-ctnt")
    btnModal.addEventListener("click", e => {
        modalOn()
    })
    // const btnModal2 = document.querySelector(".ctnt-work")
    // // function modalOn360() {
    //     if( window <= 360) {
    //         btnModal2.addEventListener("click", e => {
    //             modalOn()
    //         })
    //     }
    // // }
    

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
    modal.addEventListener("keyup", e => {
        if(isModalOn() && e.key === "Escape") {
            modalOff()
        }
    })
}



