var firestore = firebase.firestore()
var activities = firestore.collection("Activities")
var wel = document.querySelector(".wel")
var acttype = document.querySelector('#acttype')
var assename = document.querySelector('#assename')
var assetno = document.querySelector('#assetno')
var credit = document.querySelector('#credit')
var desc = document.querySelector('#desc')
var mon = document.querySelector('#mon')
var ppses = document.querySelector('#ppses')
var stat = document.querySelector('#status')
var submit = document.querySelector('.sbtn')

window.onload = ()=>{
    firebase.auth().onAuthStateChanged(function(user) {
        if (!user) {
            location.assign("https://adminpanel-dojo.netlify.app/")
        } 
    
        else{
            wel.innerHTML += user.phoneNumber
        }
    })
    
    activities.doc(`${localStorage.getItem('eact')}`).get().then((doc) => {
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

submit.addEventListener('click',function(e){
    e.preventDefault()
    activities.add({
        ActivityType: acttype.value,
        AssetName: assename.value,
        AssetNo: assetno.value,
        Credit : credit.value,
        Description : desc.value,
        Monthly: mon.value,
        PayPerSession: ppses.value,
        Status: stat.value
    }).then((docRef)=>{
        console.log(docRef.id)
    }).catch(function(error){
        console.log(error)
    })
})
