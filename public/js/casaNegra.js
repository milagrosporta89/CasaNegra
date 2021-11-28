let thumbnails= document.getElementsByClassName("casaNegra__carrusel-thumbnail")
console.log(thumbnails)
let activeImages= document.getElementsByClassName("active")

for (let i=0; i<thumbnails.length; i++){
    thumbnails[i].addEventListener("click", ()=>{
        if(activeImages.length>0){
            activeImages[0].classList.remove("active")

   
        }
        let active= thumbnails[i]
        
         active.classList.add("active")
  
       document.getElementById("casaNegra__carrusel-featured").src =active.src
    })
}

let arrowLeft= document.getElementById ("slideLeft")
let arrowRight= document.getElementById ("slideRight")

arrowLeft.addEventListener("click",()=>{
    document.getElementById("slider").scrollLeft-=200
})

arrowRight.addEventListener("click",()=>{
    document.getElementById("slider").scrollLeft+=200
})