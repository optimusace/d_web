//script to delete the parent of the associated image when delete icon clicked
document.body.addEventListener("click",(e)=>{
    if(e.target.classList.contains("delete")){
        e.target.parentElement.parentElement.remove()
    }
})