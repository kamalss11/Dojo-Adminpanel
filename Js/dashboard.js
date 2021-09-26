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
var wel = document.querySelector(".wel")

var bnr = firebase.database().ref("SlideBanner");

window.onload = () =>{
    firebase.auth().onAuthStateChanged(function(user) {
        if (!user) {
            location.assign("https://adminpanel-dojo.netlify.app/")
        } 
    
        else{
            wel.innerHTML += user.phoneNumber

            bnr.on('value', function(snapshot) {
                snapshot.forEach(function(childSnapshot) {
                  console.log(childSnapshot)
                });
            });
            
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
                                let usr_id = document.createElement("tr")
                                let idtd1 = document.createElement("td")
                                idtd1.innerHTML = "User_ID"
                                let idtd2 = document.createElement("td")
                                idtd2.innerText = `${snapshot.val().User_ID}`
                                usr_id.append(idtd1,idtd2)
                                let usr_name = document.createElement("tr")
                                let idtd3 = document.createElement("td")
                                idtd3.innerHTML = "User_Name"
                                let idtd4 = document.createElement("td")
                                idtd4.innerText = `${snapshot.val().User_Name}`
                                usr_name.append(idtd3,idtd4)
                                let usr_device = document.createElement("tr")
                                let idtd5 = document.createElement("td")
                                idtd5.innerHTML = "User_Device"
                                let idtd6 = document.createElement("td")
                                idtd6.innerText = `${snapshot.val().User_Device}`
                                usr_device.append(idtd5,idtd6)
                                let feedback  = document.createElement("tr")
                                let idtd7 = document.createElement("td")
                                idtd7.innerHTML = "Feedback"
                                let idtd8 = document.createElement("td")
                                idtd8.innerText = `${snapshot.val().Feedback}`
                                feedback.append(idtd7,idtd8)
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
    });

    

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
