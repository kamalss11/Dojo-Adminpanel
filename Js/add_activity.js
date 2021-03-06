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
var ll = document.querySelector('#ll')
var time = document.querySelector('#tme')
var form = document.querySelector('#form')

window.onload = ()=>{
    firebase.auth().onAuthStateChanged(function(user) {
        if (!user) {
            location.assign("https://adminpanel-dojo.netlify.app/")
        } 
    
        else{
            wel.innerHTML += user.phoneNumber
        }
    })
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
        Status: stat.value,
        Timing: time.value,
        Location_Link : ll.value
    }).then((docRef)=>{
        console.log(docRef.id)
    }).catch(function(error){
        console.log(error)
    })
    form.reset()
    window.location.assign("https://adminpanel-dojo.netlify.app/passport")
})
