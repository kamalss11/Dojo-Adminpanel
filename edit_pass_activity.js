var firestore = firebase.firestore()
var activities = firestore.collection("Activities")
var di = document.querySelector('.di')
var wel = document.querySelector(".wel")

window.onload = ()=>{
    firebase.auth().onAuthStateChanged(function(user) {
        if (!user) {
            location.assign("https://adminpanel-dojo.netlify.app/")
        } 
    
        else{
            wel.innerHTML += user.phoneNumber
        }
    })

    di = localStorage.getItem('eact')

}
