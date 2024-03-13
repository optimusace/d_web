
/* ADD MORE MAIN MENU CONTENTS */
const addContentBtn = document.getElementById("add-more-main-content")
const contentsContainer = document.getElementById("menu-contents")
const menuContent = document.getElementsByClassName("menu-content")

addContentBtn.addEventListener("click",(e)=>{
    e.preventDefault()
    
    //content-title-container
    const contenttitle = document.createElement("p")
    contenttitle.classList.add("content-title")
    contenttitle.textContent = `Content ${menuContent.length+1}`

    const ctContainer = document.createElement("div")
    ctContainer.classList.add("content-title-container")
    ctContainer.append(contenttitle)

    //heading
    const headingDiv = document.createElement("div")
    const headingLabel = document.createElement("label")
    headingLabel.textContent = "Heading"
    const headingTxtArea = document.createElement("textarea")
    headingTxtArea.name = `main_heading${menuContent.length+1}`
    headingDiv.append(headingLabel)
    headingDiv.append(headingTxtArea)

    //sub-heading
    const shDiv = document.createElement("div")
    const shLabel = document.createElement("label")
    shLabel.textContent = "Sub-Heading"
    const shta = document.createElement("textarea")
    shta.name = `main_subHeading${menuContent.length+1}`
    shDiv.append(shLabel)
    shDiv.append(shta)

    //short-description
    const sdDiv = document.createElement("div")
    const sdLabel = document.createElement("label")
    sdLabel.textContent = "Short Description"
    const sdta = document.createElement("textarea")
    sdta.name = `main_shortDescription${menuContent.length+1}`
    sdDiv.append(sdLabel)
    sdDiv.append(sdta)

    //long-description
    const ldDiv = document.createElement("div")
    const ldLabel = document.createElement("label")
    ldLabel.textContent = "Long Description"
    const ldta = document.createElement("textarea")
    ldta.name = `main_longDescription${menuContent.length+1}`
    ldDiv.append(ldLabel)
    ldDiv.append(ldta)

    //page-location
    const plLabel = document.createElement("label")
    plLabel.textContent = "Page Location"
    const pli = document.createElement("input")
    pli.type = "text"
    pli.name = `main_pageLocation${menuContent.length+1}`
    const plDiv = document.createElement("div")
    plDiv.classList.add("page-location")
    plDiv.append(plLabel,pli)

    //images and description
    const uploadIcon = document.createElement("i")
    uploadIcon.classList.add("bx")
    uploadIcon.classList.add("bx-cloud-upload")

    const para = document.createElement("p")
    para.classList.add("message")
    para.textContent = "Upload Image"

    const input = document.createElement("input")
    input.type = "file"
    input.name = `main_images${menuContent.length+1}`
    input.classList.add("image-select-input")
    input.id = "image-select-input"
    input.accept = "image/*"

    const displayImg = document.createElement("img")
    displayImg.style.display = "none"
    displayImg.src = ""

    const lblImg = document.createElement("label")
    lblImg.for = "image-select-input"
    lblImg.classList.add("image-select")
    lblImg.append(uploadIcon,para,input,displayImg)

    const imgDescTitle = document.createElement("p")
    imgDescTitle.classList.add("image-description-title")
    imgDescTitle.textContent = "Image Description"

    const txtAreaImgDesc = document.createElement("textarea")
    txtAreaImgDesc.name = `main_imageDescription${menuContent.length+1}`
    txtAreaImgDesc.classList.add("image-description")
    txtAreaImgDesc.disabled = true 

    const imageDiv = document.createElement("div")
    imageDiv.classList.add("image")
    imageDiv.append(lblImg,imgDescTitle,txtAreaImgDesc)

    const addMoreIcon = document.createElement("i")
    addMoreIcon.classList.add("fas")
    addMoreIcon.classList.add("fa-plus")
    addMoreIcon.classList.add("main-image")

    const addMorePara = document.createElement("p")
    addMorePara.classList.add("add-more-icon")
    addMorePara.append(addMoreIcon)

    const addMoreDiv = document.createElement("div")
    addMoreDiv.classList.add("add-more-main-image")
    addMoreDiv.append(addMorePara)

    const imagesDiv = document.createElement("div")
    imagesDiv.classList.add("images")
    imagesDiv.append(imageDiv,addMoreDiv)

    const lblImages = document.createElement("label")
    lblImages.textContent = "Images"

    const IaDDiv = document.createElement("div")
    IaDDiv.classList.add("images-and-description")
    IaDDiv.append(lblImages,imagesDiv)

    //menu content container
    const mcContainer = document.createElement("div")
    mcContainer.classList.add("menu-content")
    mcContainer.append(ctContainer,headingDiv,shDiv,sdDiv,ldDiv,plDiv,IaDDiv)

    //appending menu container in the contents container
    contentsContainer.append(mcContainer)

})


