var firestore = firebase.firestore()
var studios = firestore.collection("Studios")
var trainers = firestore.collection("Online")
var docs = 0
var dbRef = firebase.database().ref("Feedbacks");
var tots = document.querySelector(".tns")
var tott = document.querySelector(".tnt")
var add = document.querySelector(".adbtn")
var pop = document.querySelector(".pop")
var cls = document.querySelector(".pop .close")
var fd = document.querySelector(".fd")
console.log(studios,trainers)

window.onload = () =>{
    studios.get().then((querySnapShot)=>{
        let count = 0
        querySnapShot.forEach((doc)=>{
            count += 1
        })
        console.log("Total no. of studios => " + count)
        tots.innerHTML = count
    })

    trainers.get().then((querySnapShot)=>{
        let count = 0
        querySnapShot.forEach((doc)=>{
            count += 1
        })
        console.log("Total no. of trainers => " + count)
        tott.innerHTML = count
    })
    
    dbRef.get().then((snapshot) => {
        console.log(snapshot.val())
        if (snapshot.exists()) {
            snapshot.forEach((doc)=>{
                console.log(doc.val())
                ++docs
                let li = document.createElement("li")
                li.innerHTML = `${docs}. ${doc.val().Feedback}`
                fd.append(li)
            })
        } 
        else {
            alert("No data available");
        }
    }).catch((error) => {
      console.error(error);
    });
}

add.addEventListener("click",function(){
    pop.classList.add("active")
})

cls.addEventListener("click",function(){
    pop.classList.remove("active")
})
