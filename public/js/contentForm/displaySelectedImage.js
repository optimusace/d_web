
//DISPLAY SELECTED IMAGE
document.body.addEventListener("change",(event)=>{
    if(event.target.classList.contains("image-select-input")){
        console.log("image label clicked")
        console.log(event.target)
        event.target.previousElementSibling.previousElementSibling.style.display = "none"
        event.target.previousElementSibling.style.display = "none"
        event.target.parentElement.style.border = "none"
        event.target.parentElement.style.height = "154px"
        event.target.parentElement.nextElementSibling.nextElementSibling.disabled = false
        const file = event.target.files[0]
        if(file){
            const reader = new FileReader()
            reader.onload = function(e){
                event.target.nextElementSibling.style.display = "block"
                event.target.nextElementSibling.src = e.target.result
            }
            reader.readAsDataURL(file)
        }
    }
})

