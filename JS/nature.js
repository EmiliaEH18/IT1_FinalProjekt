const buttonElm = document.querySelector(".info_fourth button")
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

const bycicleElm = document.querySelector(".bycicle_container>img ")
let x = 0

function sykkelmove() {
    if (x < window.innerWidth) {
        x += 4;
    }

    else {
        x = -300
    }
    bycicleElm.style.left = x + 'px'
}

setInterval(sykkelmove, 10)


