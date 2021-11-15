var firestore = firebase.firestore()
var activities = firestore.collection("Activities")
var passportli = document.querySelector(".list-1")
var wel = document.querySelector(".wel")
var editp

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
            passportli.append(li)
        })
        editp = document.querySelectorAll(".list-1 li button")
        console.log(editp)
        ed()
    })        
}


function ed(){
    for(let i=0;i<editp.length;i++){
        editp[i].addEventListener('click',function(){
            console.log(editp[i].id)
            window.localStorage.setItem('eact',editp[i].id)
            window.location.assign("https://adminpanel-dojo.netlify.app/edit_pass_activity")
        })
    }

}