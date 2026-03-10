const hamburger = document.getElementById("hamburger")
const menu = document.getElementById("menu")

hamburger.addEventListener("click", () => {

menu.classList.toggle("active")

})



/* SLIDER BACKGROUND TENTANG */

const tentang = document.querySelector(".tentang")

const images = [

"img/pengadilan-negri-jatim.jpg",
"img/background-2.jpg",
"img/background-3.jpg"

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