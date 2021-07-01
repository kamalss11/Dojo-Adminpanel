var firestore = firebase.firestore()
var studios = firestore.collection("Studios")
var trainers = firestore.collection("Online")
var studios_list = document.querySelector(".list-1")
var trainers_list = document.querySelector(".list-2")
var edit1,edit2,no,
input = document.getElementById('ss'),
filter, ul, lis, i, txtValue,count
var no2,
input2 = document.getElementById('st'),
filter2, ul2, lis2, txtValue2,count2
var list = document.querySelectorAll(".list")
var list_tab = document.querySelectorAll(".tb p")
var sb = document.querySelector(".sidebar")
var br = document.querySelector(".bars")
var cls = document.querySelector("#close")
var cls2 = document.querySelector("#close2")

var pr = []

function ss(){
    console.log("up")
    cls.style.display = "flex"
}

function st(){
    console.log("up")
    cls2.style.display = "flex"
}

no = document.getElementById("no")
no.style.display = "none"

no2 = document.getElementById("no-2")
no2.style.display = "none"

for(let i=0;i<list_tab.length;i++){
    list_tab[i].addEventListener("click",function(){
        for(let j=0;j<list_tab.length;j++){
            list_tab[j].classList.remove("active")
            list[j].classList.remove("active")
        }
        list_tab[i].classList.add("active")
        list[i].classList.add("active")
        sb.classList.remove("active")
        br.classList.remove("active")
    })
}

window.onload = () =>{
    window.localStorage.setItem("SDocId",0)
    window.localStorage.setItem("TDocId",0)
    studios.get().then((querySnapShot)=>{
        let count = 0
        querySnapShot.forEach((doc)=>{
            count += 1
            console.log(doc.data().Name,count,doc.id)
            let li = document.createElement("li")
            li.textContent = `${doc.data().Name}`
            li.id = doc.id
            li.setAttribute("price",`${doc.data().Price}`)
            let button = document.createElement("button")
            button.id = `${doc.id}`
            button.innerHTML = "Edit"
            let span = document.createElement("span")
            span.classList = "material-icons"
            span.innerHTML = "edit"
            button.append(span)
            li.append(button)
            studios_list.append(li)
            pr.push(li.getAttribute("price"))
        })
        console.log(pr)
        console.log("Total no of Studios "+count)

        edit1 = document.querySelectorAll(".list-1 li button")
        console.log(edit1,edit1.length)

        ul = document.querySelector(".list-1");
        lis = ul.getElementsByTagName('li');
        console.log(lis.length)

    })

    trainers.get().then((querySnapShot)=>{
        let count = 0
        querySnapShot.forEach((doc)=>{
            count += 1
            console.log(doc.data().Name,count,doc.id)
            let li = document.createElement("li")
            li.textContent = `${doc.data().Name}`
            li.id = doc.id
            let button = document.createElement("button")
            button.id = `${doc.id}`
            button.innerHTML = "Edit"
            let span = document.createElement("span")
            span.classList = "material-icons"
            span.innerHTML = "edit"
            button.append(span)
            li.append(button)
            trainers_list.append(li)
        })
        console.log("Total no of Trainers "+count)
        edit2 = document.querySelectorAll(".list-2 li button")
        console.log(edit2,edit2.length)

        ul2 = document.querySelector(".list-2");
        lis2 = ul2.getElementsByTagName('li');
        console.log(lis2.length)

        for(let i = 0;i<edit1.length;i++){
            edit1[i].addEventListener("click",function(){
                console.log(edit1[i].id)
                window.localStorage.setItem("SDocId",edit1[i].id)
                console.log("Local Storage => " + localStorage.getItem("SDocId"))
                window.location.assign("https://adminpanel-dojo.netlify.app/edit_studio")
            })
        }

        for(let i = 0;i<edit2.length;i++){
            edit2[i].addEventListener("click",function(){
                console.log(edit2[i].id)
                window.localStorage.setItem("TDocId",edit2[i].id)
                console.log("Local Storage => " + localStorage.getItem("TDocId"))
                window.location.assign("https://adminpanel-dojo.netlify.app/edit_trainer")
            })
        }
    })
}
var temp = []
function lth(){
    for(let i=0;i<lis.length-1;i++){
        for(let j=0;j<lis.length-i-1;j++){
            if(lis[j].getAttribute("price") > lis[j+1].getAttribute("price")){
                console.log(lis[j].getAttribute("price"))
            }
        }
    }
}

function rm(){
    input.value = ""
    for(let i=0;i<lis.length;i++){
        lis[i].style.display = "flex"
    }
    no.style.display = "none"
    cls.style.display = "none"
}

function rm2(){
    input2.value = ""
    for(let i=0;i<lis2.length;i++){
        lis2[i].style.display = "flex"
    }
    no2.style.display = "none"
    cls2.style.display = "none"
}


function searchstudios(e){
    if(input.value == ""){
        cls.style.display = "none"
    }
    filter = input.value.toUpperCase();
     // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < lis.length; i++) {
        count = 0
        a = lis[i].textContent;
        txtValue = a.toUpperCase();
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            lis[i].style.display = "";
        }

        else {
            lis[i].style.display = "none";

            for (let i = 0; i < lis.length; i++) {
                if(lis[i].style.display == "none"){
                    count += 1
                }
            }
        }
    }

    if(count >= lis.length){
        no.style.display = "block"
    }

    else{
        no.style.display = "none"
    }
}

function searchtrainers(e){
    if(input2.value == ""){
        cls2.style.display = "none"
    }
    filter2 = input2.value.toUpperCase();
     // Loop through all list items, and hide those who don't match the search query
    for (let i = 0; i < lis2.length; i++) {
        count2 = 0
        a2 = lis2[i].textContent;
        txtValue2 = a2.toUpperCase();
        if (txtValue2.toUpperCase().indexOf(filter2) > -1) {
            lis2[i].style.display = "";
        }

        else {
            lis2[i].style.display = "none";

            for (let i = 0; i < lis2.length; i++) {
                if(lis2[i].style.display == "none"){
                    count2 += 1
                }
            }
        }
    }

    if(count2 >= lis2.length){
        no2.style.display = "block"
    }

    else{
        no2.style.display = "none"
    }
}