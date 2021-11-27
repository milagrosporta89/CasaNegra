const openModalButtons = document.querySelectorAll("[data-modal-target]") /* apunta a link de mas servicios, no es un boton, es un <a> */
const closeModalButtons= document.querySelectorAll("[data-close-button]")
let overlay= document.getElementById("overlay")

console.log(closeModalButtons,"soy close modal")
console.log(openModalButtons, "soy open modal")

console.log("funciona")
openModalButtons.forEach(button=>{
    button.addEventListener("click", () =>{
        const modal = document.querySelector(button.dataset.modalTarget)
        
        openModal(modal)
        
    })
})
closeModalButtons.forEach(button=>{
    button.addEventListener("click", () =>{
        const modal = button.closest(".modal-servicio")
     
        closeModal(modal)
        
    })
})
function openModal(modal){
    if(modal==null) return 
    modal.classList.add ("active")
    overlay.classList.add("active")

}
function closeModal (modal){
    if(modal==null) return 
    modal.classList.remove ("active")
    overlay.classList.remove("active")
}