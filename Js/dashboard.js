var firestore = firebase.firestore()
var studios = firestore.collection("Studios")
var trainers = firestore.collection("Online")
var docs = 0
var dbRef = firebase.database().ref("Feedbacks");
var tots = document.querySelector(".tns")
var tott = document.querySelector(".tnt")
var add = document.querySelector(".adbtn")
var pop = document.querySelector(".pop")
var cls = document.querySelectorAll(".close")
var fd = document.querySelector(".fd")
var ffd = document.querySelector(".ffd")
var datas = document.querySelector(".datas")
var fdli
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
                console.log(doc.key,doc.val(),doc.val().User_ID)
                ++docs
                let li = document.createElement("li")
                li.id = doc.key
                if(doc.val().Feedback.length > 80){
                    li.innerHTML = `${docs}. ${doc.val().Feedback.substring(0,69)} ....`
                }

                else{
                    li.innerHTML = `${docs}. ${doc.val().Feedback}`
                }
                fd.append(li)
            })

            fdli = document.querySelectorAll(".fd li")

            for(let i=0;i<fdli.length;i++){
                fdli[i].addEventListener("click",function(e){
                    ffd.classList.add("active")
                    console.log(fdli[i].id)
                    dbRef.child(`${fdli[i].id}`).get().then((snapshot) => {
                        console.log(snapshot.val())
                        let usr_id = document.createElement("li")
                        usr_id.innerText = `User_ID : ${snapshot.val().User_ID}`
                        let usr_name = document.createElement("li")
                        usr_name.innerText = `User_Name : ${snapshot.val().User_Name}`
                        let usr_device = document.createElement("li")
                        usr_device.innerText = `User_Device : ${snapshot.val().User_Device}`
                        let feedback  = document.createElement("li")
                        feedback.innerText = `Feedback : ${snapshot.val().Feedback}`
                        console.log(usr_name,usr_id,usr_device,feedback)
                        datas.append(usr_id,usr_name,usr_device,feedback)
                    })
                })
            }
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

for(let i=0;i<cls.length;i++){
    cls[i].addEventListener("click",function(){
        if(i == 0){
            pop.classList.remove("active")
        }

        else{
            while(datas.children.length > 0){
                datas.children[0].remove()
            }
            ffd.classList.remove("active")
        }
    })
}
