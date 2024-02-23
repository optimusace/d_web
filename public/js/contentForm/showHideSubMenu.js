//TOGGLE CLASS-NAME TO SHOW/HIDE SUB MENU
document.addEventListener("click",(event)=>{
    if(event.target.classList.contains("fa-angle-down")){
        event.target.parentElement.nextElementSibling.classList.toggle("sub-menu-hide")
        event.target.classList.toggle("rotate-i")
    }
})