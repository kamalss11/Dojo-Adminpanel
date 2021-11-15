var firestore = firebase.firestore()
var activities = firestore.collection("Activities")
var passportli = document.querySelector(".list-1")
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

    activities.get().then((querySnapShot)=>{
        querySnapShot.forEach((doc)=>{
            console.log(doc.data(),doc.id)
            let li = document.createElement("li")
            li.textContent = `${doc.data().ActivityType}`
            li.id = doc.id
            let button = document.createElement("button")
            button.id = `${doc.id}`
            button.innerHTML = "Edit"
            let span = document.createElement("span")
            span.classList = "material-icons"
            span.innerHTML = "edit"
            button.append(span)
            li.append(button)
            activities.append(li)
        })
    })        
}