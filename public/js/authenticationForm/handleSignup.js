const btn = document.getElementById("btn")
const form = document.getElementById("form")
btn.addEventListener("click",(e)=>{
    e.preventDefault()

    document.getElementById("name-error").textContent = ""
    document.getElementById("email-error").textContent = ""
    document.getElementById("password-error").textContent = ""

    const data = {
        name:form.name.value,
        email:form.email.value,
        password:form.password.value
    }
    const endpoint = "https://d-web-web.onrender.com/user/signup"
    axios.post(endpoint,data,{
        headers:{
            "Content-Type":"application/json"
        }
    })
    .then((res)=>{
        if(res.status === 200){
            window.location.href = "/user/login"
        }
    })
    .catch((err)=>{
        const error = err.response.data.errors
        if(error.name){
            document.getElementById("name-error").textContent = error.name
        }
        if(error.email){
            document.getElementById("email-error").textContent = error.email
        }
        if(error.password){
            document.getElementById("password-error").textContent = error.password
        }
    })
})