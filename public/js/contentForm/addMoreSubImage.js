
/* ADD MORE SUB IMAGE AND ITS DESCRIPTION */

function extractNum(string){
    const words = string.split(" ")
    const num = words[words.length-1]
    return num
}

document.body.addEventListener("click",(event)=>{
    const classNames = ["add-more-sub-image","sub-image"]
    if(classNames.some((className)=>{return event.target.classList.contains(className)})){
        
        event.preventDefault()

        let subMenuNum = null
        let contentNum = null
        if(event.target.classList.contains("sub-image")){
            const subMenuTitle = event.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.firstElementChild.firstElementChild.textContent 
            const contentTitle = event.target.parentElement.parentElement.parentElement.parentElement.parentElement.firstElementChild.firstElementChild.textContent
            subMenuNum = extractNum(subMenuTitle)
            contentNum = extractNum(contentTitle)
        }
        if(event.target.classList.contains("add-more-sub-image")){
            const subMenuTitle = event.target.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.firstElementChild.firstElementChild.textContent
            const contentTitle = event.target.parentElement.parentElement.parentElement.firstElementChild.firstElementChild.textContent
            subMenuNum = extractNum(subMenuTitle)
            contentNum = extractNum(contentTitle)
        }

        const uploadIcon = document.createElement("i")
        uploadIcon.classList.add("bx")
        uploadIcon.classList.add("bx-cloud-upload")
        uploadIcon.classList.add("upload")

        const para = document.createElement("p")
        para.classList.add("message")
        para.textContent = "Upload Image"

        const input = document.createElement("input")
        input.type = "file"
        input.name = `subMenu_content${subMenuNum}_images${contentNum}`
        input.classList.add("image-select-input")
        input.accept = "image/*"

        const displayImg = document.createElement("img")
        displayImg.style.display = "none"
        displayImg.src = ""

        const deleteIcon = document.createElement("i")
        deleteIcon.classList.add("fas")
        deleteIcon.classList.add("fa-trash")
        deleteIcon.classList.add("delete")
        deleteIcon.style.display = "none"

        const labelImg = document.createElement("label")
        labelImg.for = "image-select-input"
        labelImg.classList.add("image-select")
        labelImg.append(uploadIcon,para,input,displayImg,deleteIcon)

        const paraImgDesc = document.createElement("p")
        paraImgDesc.classList.add("image-description-title")
        paraImgDesc.textContent = "Image Description"

        const txtAreaImgDesc = document.createElement("textarea")
        txtAreaImgDesc.name = `subMenu_content${subMenuNum}_imageDescription${contentNum}` 
        txtAreaImgDesc.classList.add("image-description")
        txtAreaImgDesc.disabled = true

        const imageDiv = document.createElement("div")
        imageDiv.classList.add("image")
        imageDiv.append(labelImg,paraImgDesc,txtAreaImgDesc)

        if(event.target.classList.contains("sub-image")){
            const imagesContainer = event.target.parentElement.parentElement.parentElement
            const referenceElement = event.target.parentElement.parentElement
            imagesContainer.insertBefore(imageDiv,referenceElement)
        }
        if(event.target.classList.contains("add-more-sub-image")){
            const imagesContainer = event.target.parentElement
            const referenceElement = event.target
            imagesContainer.insertBefore(imageDiv,referenceElement)
        }
    }
})