function hm(){
    window.localStorage.setItem("SDocId",0)
    window.localStorage.setItem("TDocId",0)
    window.location.assign("https://adminpanel-dojo.netlify.app/dashboard")
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

function sbnew(){
    window.localStorage.setItem("SDocId",0)
    window.localStorage.setItem("TDocId",0)
    window.location.assign("https://adminpanel-dojo.netlify.app/add_banner")
}

function nt(){
    window.localStorage.setItem("SDocId",0)
    window.localStorage.setItem("TDocId",0)
    window.location.assign("https://adminpanel-dojo.netlify.app/add_trainer")
}

function pss(){
    window.localStorage.setItem("SDocId",0)
    window.localStorage.setItem("TDocId",0)
    window.location.assign("https://adminpanel-dojo.netlify.app/passport")
}

function logout(){
    firebase.auth().signOut()
    let u = firebase.auth().currentUser
    console.log(u,"logged out")
    window.location.assign("https://adminpanel-dojo.netlify.app")
}

var bars = document.querySelector(".bars")
var sidebar = document.querySelector(".sidebar")

bars.addEventListener("click",function(){
    bars.classList.toggle("active")
    sidebar.classList.toggle("active")
})