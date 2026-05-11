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
const container = document.querySelector(".bycicle_container")
let x = 0




function sykkelmove() {
    const screenWidth = container.offsetWidth
    const bikeWidth = bycicleElm.offsetWidth

    x += 4

    if (x > screenWidth) {
        x = -bikeWidth
    }

    bycicleElm.style.left = x + "px"
}

setInterval(sykkelmove, 10)
