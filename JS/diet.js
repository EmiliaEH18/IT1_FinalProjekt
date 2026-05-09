const buttonElm = document.querySelector(".diet_plate_btn")
const unactiveP = document.querySelector(".unactive_txt")
buttonElm.addEventListener("click",
    function klikk() {
        unactiveP.classList.toggle("unactive_txt")
        if (unactiveP.classList.contains("unactive_txt")) {
            buttonElm.innerHTML = "READ MORE"
        }

        else {
            buttonElm.innerHTML = "READ LESS"
        }

    }
)