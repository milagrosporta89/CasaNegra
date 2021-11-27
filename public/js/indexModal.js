const openModalButtons = document.querySelectorAll("[data-modal-target]") /* apunta a link de mas servicios, no es un boton, es un <a> */
const closeModalButtons= document.querySelectorAll("[data-close-button]")
const overlay= document.getElementById("overlay")

console.log(closeModalButtons,"soy close modal")
console.log(openModalButtons, "soy open modal")

console.log("funciona")
openModalButtons.forEach(button=>{
    button.addEventListener("click", () =>{
        const modal = document.querySelector(button.dataset.modalTarget)
        const modalClose = document.querySelector(button.dataset.closeButton)
/*         openModal(modal) */
        console.log (button.dataset)
    })
})
/* function openModal(modal){
    if(modal==null) return 
    
    overlay.classList.add("active")

} */