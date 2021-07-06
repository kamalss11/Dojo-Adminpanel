var em = document.querySelector("#email")
var password = document.querySelector("#pass")
var sbtn = document.querySelector(".sub")
var form = document.getElementById("form")
var err = document.querySelectorAll(".err")

em.addEventListener("blur",function(e){
    validateem(e)
})

password.addEventListener("blur",function(e){
    valpass(e)
})

function validateem(e){
    if(em.value == ""){
        sbtn.classList.add("active")
        console.log(e)
    }

    else{
        sbtn.classList.remove("active")
    }
}

function valpass(e){
    if(password.value == ""){
        sbtn.classList.add("active")
        console.log(e)
    }

    else{
        sbtn.classList.remove("active")
    }
}

sbtn.addEventListener("click",function(e){
    e.preventDefault()
    validateem()
    valpass()
    if(em.value && password.value){
        form.reset()
        window.location.assign("https://adminpanel-dojo.netlify.app/dashboard")
    }
})