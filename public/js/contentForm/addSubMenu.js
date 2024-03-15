
//ADD SUB MENU 
document.getElementById("add-sub-menu").addEventListener("click",(e)=>{
    e.preventDefault()

    const totalSubMenu = document.getElementsByClassName("sub-menu")
    const subMenuNum = totalSubMenu.length+1

    //sub menu title container - smtc
    const smt = document.createElement("p")
    smt.classList.add("sub-menu-title")
    smt.textContent = `Sub Menu ${subMenuNum}`

    const i = document.createElement("i")
    i.classList.add("fas")
    i.classList.add("fa-angle-down")

    const smtc = document.createElement("div")
    smtc.classList.add("sub-menu-title-container")
    smtc.append(smt,i) 


    //sub menu details 
    //sub menu title link - smtl
    const lblname = document.createElement("label")
    lblname.textContent = "Sub-Menu Name"
    const nameInput = document.createElement("input")
    nameInput.type = "text"
    nameInput.name = `subMenu_name${subMenuNum}`
    nameInput.classList.add("name-input")
    const name = document.createElement("div")
    name.classList.add("name")
    name.append(lblname,nameInput)

    const lbllink = document.createElement("label")
    lbllink.textContent = "Sub-Menu Link"
    const linkInput = document.createElement("input")
    linkInput.type = "text"
    linkInput.name = `subMenu_link${subMenuNum}`
    linkInput.classList.add("link-input")
    const link = document.createElement("div")
    link.classList.add("link")
    link.append(lbllink,linkInput)

    const smtl = document.createElement("div")
    smtl.classList.add("sub-menu-title-link")
    smtl.append(name,link)

    //sub-menu-contents
    //sub menu contents title 
    const smct = document.createElement("p")
    smct.classList.add("sub-menu-contents-title")
    smct.textContent = "Contents"

    //sub menu content
    //content-title-container
    const contenttitle = document.createElement("p")
    contenttitle.classList.add("content-title")
    contenttitle.textContent = `Content 1`

    const ctContainer = document.createElement("div")
    ctContainer.classList.add("content-title-container")
    ctContainer.append(contenttitle)

    //heading
    const headingDiv = document.createElement("div")
    const headingLabel = document.createElement("label")
    headingLabel.textContent = "Heading"
    const headingTxtArea = document.createElement("textarea")
    headingTxtArea.name = `subMenu_content${subMenuNum}_heading1`
    headingDiv.append(headingLabel)
    headingDiv.append(headingTxtArea)

    //sub-heading
    const shDiv = document.createElement("div")
    const shLabel = document.createElement("label")
    shLabel.textContent = "Sub-Heading"
    const shta = document.createElement("textarea")
    shta.name = `subMenu_content${subMenuNum}_subHeading1`
    shDiv.append(shLabel)
    shDiv.append(shta)

    //short-description
    const sdDiv = document.createElement("div")
    const sdLabel = document.createElement("label")
    sdLabel.textContent = "Short Description"
    const sdta = document.createElement("textarea")
    sdta.name = `subMenu_content${subMenuNum}_shortDescription1`
    sdDiv.append(sdLabel)
    sdDiv.append(sdta)

    //long-description
    const ldDiv = document.createElement("div")
    const ldLabel = document.createElement("label")
    ldLabel.textContent = "Long Description"
    const ldta = document.createElement("textarea")
    ldta.name = `subMenu_content${subMenuNum}_longDescription1`
    ldDiv.append(ldLabel)
    ldDiv.append(ldta)

    //page-location
    const plLabel = document.createElement("label")
    plLabel.textContent = "Page Location"
    const pli = document.createElement("input")
    pli.type = "text"
    pli.name = `subMenu_content${subMenuNum}_pageLocation1`
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
    input.name = `subMenu_content${subMenuNum}_images1`
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
    txtAreaImgDesc.name = `subMenu_content${subMenuNum}_imageDescription1`
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

    const smcc = document.createElement("div")  //sub menu content container
    smcc.classList.add("sub-menu-content")
    smcc.append(ctContainer,headingDiv,shDiv,sdDiv,ldDiv,plDiv,IaDDiv)

    //add more content button
    const btn = document.createElement("button") 
    btn.classList.add("add-more-submenu-content")
    btn.type = "button"
    btn.textContent = "Add more content"

    const btnDiv = document.createElement("div")
    btnDiv.classList.add("button")
    btnDiv.append(btn)

    const smc =  document.createElement("div")     //sub menu contents
    smc.classList.add("sub-menu-contents")
    smc.append(smct,smcc,btnDiv)

    const smdc = document.createElement("div")      //sub menu details container
    smdc.classList.add("sub-menu-details")
    smdc.classList.add("sub-menu-hide")
    smdc.append(smtl,smc)

    const smd = document.createElement("div")       //sub menu div
    smd.classList.add("sub-menu")
    smd.append(smtc,smdc)

    const parentElement = document.getElementById("sub-menus")
    const referenceElement = document.getElementById("add-sub-menu")
    parentElement.insertBefore(smd,referenceElement)

})