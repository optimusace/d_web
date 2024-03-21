const btn = document.getElementById("btn")
const form = document.getElementById("form")
btn.addEventListener("click",(e)=>{
    e.preventDefault()
    document.getElementById("error").textContent = ""
    const data = {
        email:form.email.value,
        password:form.password.value
    }
    const endpoint = "http://127.0.0.1:3000/user/login"
    axios.post(endpoint,data,{
        headers:{
            "Content-Type":"application/json"
        }
    })
    .then((res)=>{
        if(res.status === 200){
            window.location.href = "/menu-details"
        }
    })
    .catch((err)=>{
        document.getElementById("error").textContent = "Invalid login credentails"
    })
    
})