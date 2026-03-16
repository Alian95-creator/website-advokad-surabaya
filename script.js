const hamburger = document.getElementById("hamburger")
const menu = document.getElementById("menu")

hamburger.addEventListener("click", () => {
menu.classList.toggle("active")
})

/* SLIDER BACKGROUND TENTANG */

const tentang = document.querySelector(".tentang")

const images = [
"./img/pengadilan-negri-jatim.JPG",
"./img/background-2.JPG",
"./img/background-3.JPG"
]

let i = 0

function slideBg(){

tentang.style.backgroundImage = `url(${images[i]})`

i++

if(i >= images.length){
i = 0
}

}

slideBg()

setInterval(slideBg,4000)

/* LAYANAN CLICK DETAIL */

const layananCards = document.querySelectorAll(".layanan .card");

layananCards.forEach(card => {

card.addEventListener("click", () => {

if(card.classList.contains("active")){

card.classList.remove("active")

}else{

layananCards.forEach(c => c.classList.remove("active"))

card.classList.add("active")

}

})

});