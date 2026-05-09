const burgerElm = document.querySelector(".hamburger")

burgerElm.addEventListener("click",
    function burgerklikk() {
        const navbar = document.querySelector(".nav_media")
        const mediaDiv =document.querySelector(".media")
        navbar.classList.toggle("unactive")
        mediaDiv.classList.toggle("unactive")
    }
)