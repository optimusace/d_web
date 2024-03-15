
//ADD MORE SUBMENU CONTENT
document.body.addEventListener("click",(event)=>{
    if(event.target.classList.contains("add-more-submenu-content")){
        event.preventDefault()

        const subMenuTitle = event.target.parentElement.parentElement.parentElement.previousElementSibling.firstElementChild.textContent 
        const subMenuNum = parseInt(subMenuTitle.split(" ")[2])

        const contentLength = event.target.parentElement.parentElement.querySelectorAll(".sub-menu-content").length
        const currentContentNumber = contentLength+1 

        //content-title-container
        const contenttitle = document.createElement("p")
        contenttitle.classList.add("content-title")
        contenttitle.textContent = `Content ${currentContentNumber}`

        const ctContainer = document.createElement("div")
        ctContainer.classList.add("content-title-container")
        ctContainer.append(contenttitle)

        //heading
        const headingDiv = document.createElement("div")
        const headingLabel = document.createElement("label")
        headingLabel.textContent = "Heading"
        const headingTxtArea = document.createElement("textarea")
        headingTxtArea.name = `subMenu_content${subMenuNum}_heading${currentContentNumber}`
        headingDiv.append(headingLabel)
        headingDiv.append(headingTxtArea)

        //sub-heading
        const shDiv = document.createElement("div")
        const shLabel = document.createElement("label")
        shLabel.textContent = "Sub-Heading"
        const shta = document.createElement("textarea")
        shta.name = `subMenu_content${subMenuNum}_subHheading${currentContentNumber}`
        shDiv.append(shLabel)
        shDiv.append(shta)

        //short-description
        const sdDiv = document.createElement("div")
        const sdLabel = document.createElement("label")
        sdLabel.textContent = "Short Description"
        const sdta = document.createElement("textarea")
        sdta.name = `subMenu_content${subMenuNum}_shortDescription${currentContentNumber}`
        sdDiv.append(sdLabel)
        sdDiv.append(sdta)

        //long-description
        const ldDiv = document.createElement("div")
        const ldLabel = document.createElement("label")
        ldLabel.textContent = "Long Description"
        const ldta = document.createElement("textarea")
        ldta.name = `subMenu_content${subMenuNum}_longDescription${currentContentNumber}`
        ldDiv.append(ldLabel)
        ldDiv.append(ldta)

        //page-location
        const plLabel = document.createElement("label")
        plLabel.textContent = "Page Location"
        const pli = document.createElement("input")
        pli.type = "text"
        pli.name = `subMenu_content${subMenuNum}_pageLocation${currentContentNumber}`
        const plDiv = document.createElement("div")
        plDiv.classList.add("page-location")
        plDiv.append(plLabel,pli)

        //images and description
        const uploadIcon = document.createElement("i")
        uploadIcon.classList.add("bx")
        uploadIcon.classList.add("bx-cloud-upload")
        uploadIcon.classList.add("upload")

        const para = document.createElement("p")
        para.classList.add("message")
        para.textContent = "Upload Image"

        const input = document.createElement("input")
        input.type = "file"
        input.name = `subMenu_content${subMenuNum}_images${currentContentNumber}`
        input.classList.add("image-select-input")
        input.id = "image-select-input"
        input.accept = "image/*"

        const displayImg = document.createElement("img")
        displayImg.style.display = "none"
        displayImg.src = ""

        const deleteIcon = document.createElement("i")
        deleteIcon.classList.add("fas")
        deleteIcon.classList.add("fa-trash")
        deleteIcon.classList.add("delete")
        deleteIcon.style.display = "none"

        const lblImg = document.createElement("label")
        lblImg.for = "image-select-input"
        lblImg.classList.add("image-select")
        lblImg.append(uploadIcon,para,input,displayImg,deleteIcon)

        const imgDescTitle = document.createElement("p")
        imgDescTitle.classList.add("image-description-title")
        imgDescTitle.textContent = "Image Description"

        const txtAreaImgDesc = document.createElement("textarea")
        txtAreaImgDesc.name = `subMenu_content${subMenuNum}_imageDescription${currentContentNumber}`
        txtAreaImgDesc.classList.add("image-description")
        txtAreaImgDesc.disabled = true 

        const imageDiv = document.createElement("div")
        imageDiv.classList.add("image")
        imageDiv.append(lblImg,imgDescTitle,txtAreaImgDesc)

        const addMoreIcon = document.createElement("i")
        addMoreIcon.classList.add("fas")
        addMoreIcon.classList.add("fa-plus")
        addMoreIcon.classList.add("sub-image")

        const addMorePara = document.createElement("p")
        addMorePara.classList.add("add-more-icon")
        addMorePara.append(addMoreIcon)

        const addMoreDiv = document.createElement("div")
        addMoreDiv.classList.add("add-more-sub-image")
        addMoreDiv.append(addMorePara)

        const imagesDiv = document.createElement("div")
        imagesDiv.classList.add("images")
        imagesDiv.append(imageDiv,addMoreDiv)

        const lblImages = document.createElement("label")
        lblImages.textContent = "Images"

        const IaDDiv = document.createElement("div")
        IaDDiv.classList.add("images-and-description")
        IaDDiv.append(lblImages,imagesDiv)

        const smcContainer = document.createElement("div")
        smcContainer.classList.add("sub-menu-content")
        smcContainer.append(ctContainer,headingDiv,shDiv,sdDiv,ldDiv,plDiv,IaDDiv)

        event.target.parentElement.parentElement.insertBefore(smcContainer,event.target.parentElement)
    }
})
