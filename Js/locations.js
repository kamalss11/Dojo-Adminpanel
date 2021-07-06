function hm(){
    window.localStorage.setItem("SDocId",0)
    window.localStorage.setItem("TDocId",0)
    window.location.assign("https://adminpanel-dojo.netlify/dashboard.app")
}

function en(){
    window.localStorage.setItem("SDocId",0)
    window.localStorage.setItem("TDocId",0)
    window.location.assign("https://adminpanel-dojo.netlify.app/entity")
}

function snew(){
    window.localStorage.setItem("SDocId",0)
    window.localStorage.setItem("TDocId",0)
    window.location.assign("https://adminpanel-dojo.netlify.app/add_studio")
}

function ns(){
    window.localStorage.setItem("SDocId",0)
    window.localStorage.setItem("TDocId",0)
    window.location.assign("https://adminpanel-dojo.netlify.app/add_studio")
}

function tnew(){
    window.localStorage.setItem("SDocId",0)
    window.localStorage.setItem("TDocId",0)
    window.location.assign("https://adminpanel-dojo.netlify.app/add_trainer")
}

function nt(){
    window.localStorage.setItem("SDocId",0)
    window.localStorage.setItem("TDocId",0)
    window.location.assign("https://adminpanel-dojo.netlify.app/add_trainer")
}

var bars = document.querySelector(".bars")
var sidebar = document.querySelector(".sidebar")

bars.addEventListener("click",function(){
    bars.classList.toggle("active")
    sidebar.classList.toggle("active")
})