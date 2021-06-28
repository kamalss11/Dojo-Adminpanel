function hm(){
    window.localStorage.setItem("SDocId",0)
    window.localStorage.setItem("TDocId",0)
    window.location.assign("https://adminpanel-dojo.netlify.app")
}

function en(){
    window.localStorage.setItem("SDocId",0)
    window.localStorage.setItem("TDocId",0)
    window.location.assign("https://adminpanel-dojo.netlify.app/entity")
}

var bars = document.querySelector(".bars")

bars.addEventListener("click",function(){
    bars.classList.toggle("active")
})