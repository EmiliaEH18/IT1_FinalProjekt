const buttonElm = document.querySelector(".info_fourth button")
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