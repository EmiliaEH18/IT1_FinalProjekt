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

const fruitPic = document.querySelector(".nr1")
const hidden1 = document.querySelector(".nr1_o")
fruitPic.addEventListener("mouseover",
    function fruit_mouseover() {
        fruitPic.classList.add("grey")

        hidden1.classList.remove("unactive")

    }
)
fruitPic.addEventListener("mouseout",
    function fruit_out() {
        fruitPic.classList.remove("grey")
        hidden1.classList.add("unactive")
    }
)

const linsPic = document.querySelector(".nr2")
const hidden2 = document.querySelector(".nr2_o")

linsPic.addEventListener("mouseover",
    function lins_mouseover() {
        linsPic.classList.add("grey")
        hidden2.classList.remove("unactive")
    }
)
linsPic.addEventListener("mouseout",
    function lins_out() {
        linsPic.classList.remove("grey")
        hidden2.classList.add("unactive")
    }
)

const proteinPic = document.querySelector(".nr3")
const hidden3 = document.querySelector(".nr3_o")

proteinPic.addEventListener("mouseover",
    function protein_mouseover() {
        proteinPic.classList.add("grey")
        hidden3.classList.remove("unactive")
    }
)
proteinPic.addEventListener("mouseout",
    function protien_out() {
        proteinPic.classList.remove("grey")
        hidden3.classList.add("unactive")
    }
)


