
//HANDLE SOME LOGICS FOR MENU-FORM SUBMISSION
document.getElementById("content-form").addEventListener("submit",(e)=>{
    e.preventDefault()

    //check if menu name and link is provided or not
    const menuName = document.getElementById("menu-name")
    const menuLink = document.getElementById("menu-link")
    if(menuName.value === "" && menuLink.value === ""){
        menuName.style.borderColor = "red"
        menuName.style.boxShadow = "0px 0px 5px red"
        menuLink.style.borderColor = "red"
        menuLink.style.boxShadow = "0px 0px 5px red"
        return false
    }

    //check if menu/sub-menu name is provided but link not provided and vice-versa
    const nameInputs = e.target.getElementsByClassName("name-input")
    const linkInputs = e.target.getElementsByClassName("link-input")
    
    for(let i=0;i<nameInputs.length;i++){
        nameInputs[i].style.borderColor = "gainsboro"
        nameInputs[i].style.boxShadow = "none"
        linkInputs[i].style.borderColor = "gainsboro"
        linkInputs[i].style.boxShadow = "none"

        if(nameInputs[i].value === "" && linkInputs[i].value !== ""){
            console.log("name input field is empty")
            nameInputs[i].style.borderColor = "red"
            nameInputs[i].style.boxShadow = "0px 0px 5px red"
            return false
        }
        if(nameInputs[i].value !== "" && linkInputs[i].value === ""){
            console.log("link input field is empty")
            linkInputs[i].style.borderColor = "red"
            linkInputs[i].style.boxShadow = "0px 0px 5px red"
            return false
        }
    }

    //handle if image provided but image description not provided
    const imageDescriptions = e.target.getElementsByClassName("image-description")
    for(let i=0;i<imageDescriptions.length;i++){
        if(!imageDescriptions[i].disabled && imageDescriptions[i].value === ""){
            imageDescriptions[i].value = "No Description"
        }
    }

    //if all checks pass, submit the form
    e.target.submit()
})