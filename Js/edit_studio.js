var DocId
var firestore = firebase.firestore()
var studios = firestore.collection("Studios")
var di = document.querySelector(".di")

var nam = document.querySelector("#name")
var phone = document.querySelector("#phone")
var email = document.querySelector("#email")
var price = document.querySelector("#price")
var rating = document.querySelector("#rating")
var services = document.querySelector("#services")
var sts = document.querySelector("#status")
var category = document.querySelector("#category")
var city = document.querySelector("#city")
var state = document.querySelector("#state")
var address = document.querySelector("#address")
var sbtn = document.querySelector(".sbtn")
var form = document.querySelector("#form")
window.onload = () =>{
    DocId = window.localStorage.getItem("SDocId")
    console.log("Document Id => " + DocId)
    if(DocId == 0){
        window.location.assign("https://adminpanel-dojo.netlify.app/entity.html")
    }
    else{
        di.innerHTML += DocId

        studios.doc(`${DocId}`).get().then((doc) => {
            console.log(doc.data())
            nam.value = doc.data().Name
            phone.value = doc.data().Phone
            email.value = doc.data().Email
            price.value = doc.data().Price
            rating.value = doc.data().Rating
            services.value = doc.data().Services
            sts.value = doc.data().Status
            category.value = doc.data().Category
            city.value = doc.data().City
            state.value = doc.data().State
            address.value = doc.data().Address
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    }
}

sbtn.addEventListener("click",function(e){
    e.preventDefault()
    
    studios.doc(`${DocId}`).update({
        Name: nam.value,
        Phone: phone.value,
        Email: email.value,
        Price: price.value,
        Rating: rating.value,
        Services: services.value,
        Status: sts.value,
        Category: category.value,
        City: city.value,
        State: state.value,
        Address: address.value,
    }).then(()=>{
        console.log("Data Saved.This is you id = > ",DocId)
        alert("Your data has been updated")
        form.reset()
        window.localStorage.setItem("SDocId",0)
        window.location.assign("https://adminpanel-dojo.netlify.app/entity")
    }).catch(function(error){
        console.log(error)
    })
})