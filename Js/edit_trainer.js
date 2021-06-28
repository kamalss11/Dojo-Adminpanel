var DocId
var firestore = firebase.firestore()
var studios = firestore.collection("Online")
var di = document.querySelector(".di")

window.onload = () =>{
    DocId = window.localStorage.getItem("TDocId")
    console.log("Document Id => " + DocId)
    if(DocId == 0){
        window.location.assign("https://adminpanel-dojo.netlify.app/entity")
    }
    else{
        di.innerHTML += DocId
    }
}