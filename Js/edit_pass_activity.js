var firestore = firebase.firestore()
var activities = firestore.collection("Activities")
var di = document.querySelector('.di')
var wel = document.querySelector(".wel")
var acttype = document.querySelector('#acttype')
var assename = document.querySelector('#assename')
var assetno = document.querySelector('#assetno')
var credit = document.querySelector('#credit')
var desc = document.querySelector('#desc')
var mon = document.querySelector('#mon')
var ppses = document.querySelector('#ppses')
var stat = document.querySelector('#status')

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
    
    activities.doc(`${di}`).get().then((doc) => {
        console.log(doc.data())
        acttype.value = doc.data().ActivityType
        assename.value = doc.data().AssetName
        assetno.value = doc.data().AssetNo
        credit.value = doc.data().Credit
        desc.value = doc.data().Description
        mon.value = doc.data().Monthly
        ppses.value = doc.data().PayPerSession
        stat.value = doc.data().Status
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
}
