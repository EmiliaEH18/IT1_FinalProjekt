const buttonElm = document.querySelector(".diet_plate_btn")
const unactiveP = document.querySelector(".unactive")
buttonElm.addEventListener("click",
    function klikk() {
        unactiveP.classList.toggle("unactive")
        if (unactiveP.classList.contains("unactive")) {
            buttonElm.innerHTML = "READ MORE"
        }

        else {
            buttonElm.innerHTML = "READ LESS"
        }

    }
)