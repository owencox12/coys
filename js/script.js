

let swiper = new Swiper(".swiper", {
    pagination: {
        el: ".swiper-pagination",
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
})



const burger = document.querySelector(".header__item_burger")
const burgerMenu = document.querySelector(".header__burger_list")

burger.addEventListener("click", function(){
    burger.classList.toggle("header__item_burger_active")
    burgerMenu.classList.toggle("header__burger_list_active")
})

let arrow = document.querySelector(".footer__item_arrow")

arrow.addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})

window.addEventListener("scroll", function(){
    if (scrollY >= 100) {
        document.querySelector(".header").classList.add("header__active")
    } else {
        document.querySelector(".header").classList.remove("header__active")
    }
})

let menu = document.querySelector(".header__item_menu")


menu.addEventListener("click", function(e){
    if (e.target.dataset.id) {
        let target = document.querySelector(e.target.dataset.id)
        e.preventDefault();
        let pos = target.offsetTop-90
        window.scrollTo({
            top: pos,
            behavior: "smooth"
        })
    }
})