var firestore = firebase.firestore()
var studios = firestore.collection("Studios")
var trainers = firestore.collection("Online")
var tots = document.querySelector(".tns")
var tott = document.querySelector(".tnt")
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
}