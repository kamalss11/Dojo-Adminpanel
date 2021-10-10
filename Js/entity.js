var firestore = firebase.firestore()
var studios = firestore.collection("Studios")
var trainers = firestore.collection("Online")
var studios_list = document.querySelector(".list-1")
var trainers_list = document.querySelector(".list-2")
var banners_list = document.querySelector(".list-3")
var edit1,edit2,no,
input = document.getElementById('ss'),
filter, ul, lis, i, txtValue,count

var temps = [],tempna = [],tempt = [],temptna = []
var rs = [],rt = [],rsn = [],rtn = []

var no2,
input2 = document.getElementById('st'),
filter2, ul2, lis2, txtValue2,count2
var list = document.querySelectorAll(".list")
var list_tab = document.querySelectorAll(".tb p")
var sb = document.querySelector(".sidebar")
var br = document.querySelector(".bars")
var cls = document.querySelector("#close")
var cls2 = document.querySelector("#close2")

var pricep = document.querySelectorAll(".price p")
var price = document.querySelectorAll(".price")
var btn = document.querySelectorAll(".lh")

var fs = document.querySelector("#fs")
var s,ssel,sta = []
var fc = document.querySelector("#fc")
var c,csel
var ssr = document.querySelector("#ssr")

var fst = document.querySelector("#fst")
var st,sselt,stat = []
var fct = document.querySelector("#fct")
var ct,cselt
var ssrt = document.querySelector("#ssrt")
var gender = document.querySelector("#gender")

var nss = document.querySelector(".ns")
var ntt = document.querySelector(".nt")

var apply = document.getElementById("apply")
var cancel = document.getElementById("cancel")

var wel = document.querySelector(".wel")

for(let i=0;i<btn.length;i++){
    if(i == 0 || i == 1 || i == 2 || i == 3){
        btn[i].addEventListener("click",function(){
            price[0].classList.remove("active")
        })
    }

    else{
        btn[i].addEventListener("click",function(){
            price[1].classList.remove("active")
        })
    }
}

for(let i=0;i<pricep.length;i++){
    pricep[i].addEventListener("click",function(){
        for(let j=0;j<pricep.length;j++){
            if(price[j].classList.contains("active")){
                price[j].classList.remove("active")
            }
        }
        price[i].classList.toggle("active")
    })
}

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

// loading
var bnr = firebase.database().ref("SliderBanner");

window.onload = () =>{
    firebase.auth().onAuthStateChanged(function(user) {
        if (!user) {
            location.assign("https://adminpanel-dojo.netlify.app/")
        } 
    
        else{
            wel.innerHTML += user.phoneNumber
        }
    })
    fstate()
    fstatet()
    window.localStorage.setItem("SDocId",0)
    window.localStorage.setItem("TDocId",0)
    studios.get().then((querySnapShot)=>{
        let count = 0
        querySnapShot.forEach((doc)=>{
            count += 1
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
            if(doc.data().Price == "NA"){
                tempna.push({id:`${doc.id}`,name:`${doc.data().Name}`,price:`${doc.data().Price}`})
            }
            else{
                temps.push({id:`${doc.id}`,name:`${doc.data().Name}`,price:`${doc.data().Price}`})
            }

            if(doc.data().Rating == "NA"){
                rsn.push({id:`${doc.id}`,name:`${doc.data().Name}`,rating:`${doc.data().Rating}`})
            }

            else{
                rs.push({id:`${doc.id}`,name:`${doc.data().Name}`,rating:`${doc.data().Rating}`})
            }

            sta.push({id:`${doc.id}`,name:`${doc.data().Name}`,state: `${doc.data().State}`,city: `${doc.data().City}`,services: `${doc.data().Services}`})

        })
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
            if(doc.data().Price == "NA"){
                temptna.push({id:`${doc.id}`,name:`${doc.data().Name}`,price:`${doc.data().Price}`})
            }
            else{
                tempt.push({id:`${doc.id}`,name:`${doc.data().Name}`,price:`${doc.data().Price}`})
            }

            if(doc.data().Rating == "NA"){
                rtn.push({id:`${doc.id}`,name:`${doc.data().Name}`,rating:`${doc.data().Rating}`})
            }

            else{
                rt.push({id:`${doc.id}`,name:`${doc.data().Name}`,rating:`${doc.data().Rating}`})
            }

            stat.push({id:`${doc.id}`,name:`${doc.data().Name}`,state: `${doc.data().State}`,city: `${doc.data().City}`,services: `${doc.data().Services}`,gender: `${doc.data().Gender}`})
        })
        console.log("Total no of Trainers "+count)
        edit2 = document.querySelectorAll(".list-2 li button")
        console.log(edit2,edit2.length)

        ul2 = document.querySelector(".list-2");
        lis2 = ul2.getElementsByTagName('li');
        console.log(lis2.length)

        ed1()

        ed2()
    })

    bnr.get().then((snapshot) => {
        console.log(snapshot.val())
        if (snapshot.exists()) {
            let count = 0
            snapshot.forEach((doc)=>{
                count = count + 1
                let li = document.createElement("li")
                li.textContent = `Banner${count}`
                let button = document.createElement("button")
                button.id = `${doc.val().url}`
                let img = document.createElement('img')
                img.src = `${doc.url}`
                li.append(img,button)
                banners_list.append(li)
            })
        }
        else{
            console.log("No data found")
        }
    })

    if(window.localStorage.getItem("td") == 1){
        list[0].classList.remove("active")
        list[1].classList.add("active")
    }

    window.localStorage.setItem("td","0")
}

// apply for studios
var scnt = document.querySelector("#scnt");

apply.addEventListener("click",function(e){
    price[1].classList.remove("active")
    console.log(fs.value,fc.value)

    if(fs.value=="" && fc.value=="" && ssr.value==""){
        alert("no select")
        scnt.innerHTML = ``
    }

    else if(fs.value && fc.value=="" && ssr.value ==""){
        alert("only state")

        while(lis.length > 0){
            lis[0].remove()
        }

        let count = 0
        console.log(count)
        for(let i=0;i<sta.length;i++){
            if(sta[i].state == fs.value){
                ++count
                console.log(count)
                ssf(i)
            }
        }
        if(count == 0){
            nss.innerHTML = "No Results Found"
            spp(count)
        }
        else{
            spp(count)
        }
    }
    else if(fs.value && fc.value && ssr.value ==""){
        alert("only state & City")
        
        while(lis.length > 0){
            lis[0].remove()
        }

        let count = 0
        console.log(count)
        for(let i=0;i<sta.length;i++){
            if(sta[i].state == fs.value && sta[i].city == fc.value){
                ++count
                console.log(count)
                ssf(i)
            }
        }
        if(count == 0){
            nss.innerHTML = "No Results Found"
            spp(count)
        }
        else{
            spp(count)
        }
    }
    else if(fs.value && fc.value && ssr.value){
        alert("state City & services")

        while(lis.length > 0){
            lis[0].remove()
        }
        let count = 0
        console.log(count)
        for(let i=0;i<sta.length;i++){
            if(sta[i].state == fs.value && sta[i].city == fc.value && sta[i].services == ssr.value){
                ++count
                console.log(count)
                ssf(i)
            }
        }
        if(count == 0){
            nss.innerHTML = "No Results Found"
            spp(count)
        }
        else{
            spp(count)
        }
    }
    else if(fs.value=="" && fc.value=="" && ssr.value){
        alert("services")

        while(lis.length > 0){
            lis[0].remove()
        }
        let count = 0
        console.log(count)
        for(let i=0;i<sta.length;i++){
            if(sta[i].services == ssr.value){
                ++count
                console.log(count)
                ssf(i)
            }
        }
        if(count == 0){
            nss.innerHTML = "No Results Found"
            spp(count)
        }
        else{
            spp(count)
        }
    }
    else if(fs.value && fc.value=="" && ssr.value){
        alert("state & services")
        while(lis.length > 0){
            lis[0].remove()
        }
        let count = 0
        console.log(count)
        for(let i=0;i<sta.length;i++){
            if(sta[i].state == fs.value && sta[i].services == ssr.value){
                ++count
                console.log(count)
                ssf(i)
            }
        }
        if(count == 0){
            nss.innerHTML = "No Results Found"
            spp(count)
        }
        else{
            spp(count)
        }
    }
    else{
        nss.innerHTML = ""
    }
})

function spp(count){
    scnt.innerHTML = `No.of Counts : ${count}`
}

// cancel

cancel.addEventListener("click",function(){
    price[1].classList.remove("active")
})

// studio filter function

function ssf(n){
    console.log(sta[n])
    let li = document.createElement("li")
    li.textContent = sta[n].name
    li.id = sta[n].id
    li.setAttribute("price",`${sta[n].state}`)
    let div =  document.createElement("div")
    let price = document.createElement("span")
    price.innerHTML = `${sta[n].state}`
    let button = document.createElement("button")
    button.id = `${sta[n].id}`
    button.innerHTML = "Edit"
    let span = document.createElement("span")
    span.classList = "material-icons"
    span.innerHTML = "edit"
    button.append(span)
    div.append(price,button)
    li.append(div)
    studios_list.append(li)

    if(count == 0){
        nss.innerHTML = "No Results"
    }

    else{
        nss.innerHTML = ""
    }

    edit1 = document.querySelectorAll(".list-1 li button")
    ed1()
}

// studios filter

function fstate(){
    var headers = new Headers();
    headers.append("X-CSCAPI-KEY", "bFRJVzhHclkxSHBQTEpDTGZaSER2TmlGUFBZY2k2YUcyRFdTWlhmaQ==");

    var requestOptions = {
        method: 'GET',
        headers: headers,
        redirect: 'follow'
    };
    fetch(`https://api.countrystatecity.in/v1/countries/IN/states`, requestOptions)
    .then(response => response.text())
    .then(result => {
        s = JSON.parse(result)
        console.log(s)
        s.forEach((st)=>{
            let option = document.createElement("option")
            option.id = st.iso2
            option.value = st.name
            option.innerHTML = st.name
            fs.append(option)
        })
    })
    .catch(error => console.log('error', error));
}

fs.addEventListener("change",function(){
    console.log("State => "+this.value,fs.options[fs.selectedIndex].id)
    ssel = fs.options[fs.selectedIndex].id
    fcity()
})

function fcity(){
    while(fc.children.length > 1){
        fc.children[1].remove()
    }

    var headers = new Headers();
    headers.append("X-CSCAPI-KEY","bFRJVzhHclkxSHBQTEpDTGZaSER2TmlGUFBZY2k2YUcyRFdTWlhmaQ==");

    var requestOptions = {
        method: 'GET',
        headers: headers,
        redirect: 'follow'
    };

    // Pass Country Code -- Eg: Country Code : IN
    fetch(`https://api.countrystatecity.in/v1/countries/IN/states/${ssel}/cities`, requestOptions)
    .then(response => response.text())
    .then(result => {
        c = JSON.parse(result)
        c.forEach((st)=>{
            let option = document.createElement("option")
            option.id = st.id
            option.value = st.name
            option.innerHTML = st.name
            fc.append(option)
        })
    })
    .catch(error => console.log('error', error));

    
    edit1 = document.querySelectorAll(".list-1 li button")
    ed1()
}

fc.addEventListener("change",function(){
    console.log("City => "+this.value,fc.options[fs.selectedIndex].id)
    ssel = fc.options[fc.selectedIndex].id
})

// trainer filter

var applyt = document.querySelector("#applyt")
var cancelt = document.querySelector("#cancelt")

// trainer filter gender

gender.addEventListener("change",function(){
    console.log(this.value)
})

var tcnt = document.querySelector("#tcnt");

applyt.addEventListener("click",function(e){
    price[3].classList.remove("active")
    console.log(fst.value,fct.value)

    if(fst.value=="" && fct.value=="" && ssrt.value=="" && gender.value==""){
        alert("no select")
        tcnt.innerHTML = ""
    }

    else if(fst.value && fct.value=="" && ssrt.value =="" && gender.value==""){
        alert("only state")
    
        while(lis2.length > 0){
            lis2[0].remove()
        }
        let count = 0
        console.log(count)
        for(let i=0;i<stat.length;i++){
            if(stat[i].state == fst.value){
                ++count
                console.log(count)
                ssft(i)
            }
        }
        if(count == 0){
            ntt.innerHTML = "No Results Found"
            tpp(count)
        }
        else{
            tpp(count)
        }
    }
    else if(fst.value && fct.value && ssrt.value =="" && gender.value==""){
        alert("only state & City")
        while(lis2.length > 0){
            lis2[0].remove()
        }
        let count = 0
        console.log(count)
        for(let i=0;i<stat.length;i++){
            if(stat[i].state == fst.value && stat[i].city == fct.value){
                ++count
                console.log(count)
                ssft(i)
            }
        }
        if(count == 0){
            ntt.innerHTML = "No Results Found"
            tpp(count)
        }
        else{
            tpp(count)
        }
    }
    else if(fst.value && fct.value && ssrt.value && gender.value){
        alert("state City services & gender")
        while(lis2.length > 0){
            lis2[0].remove()
        }
        let count = 0
        console.log(count)
        for(let i=0;i<stat.length;i++){
            if(stat[i].state == fst.value && stat[i].city == fct.value && stat[i].services == ssrt.value &&  stat[i].gender == gender.value){
                ++count
                console.log(count)
                ssft(i)
            }
        }
        if(count == 0){
            ntt.innerHTML = "No Results Found"
            tpp(count)
        }
        else{
            tpp(count)
        }
    }
    else if(fst.value=="" && fct.value=="" && ssrt.value && gender.value==""){
        alert("services")
        while(lis2.length > 0){
            lis2[0].remove()
        }
        let count = 0
        console.log(count)
        for(let i=0;i<stat.length;i++){
            if(stat[i].services == ssrt.value){
                ++count
                console.log(count)
                ssft(i)
            }
        }
        if(count == 0){
            ntt.innerHTML = "No Results Found"
            tpp(count)
        }
        else{
            tpp(count)
        }
    }
    else if(fst.value=="" && fct.value=="" && ssrt.value && gender.value){
        alert("services & gender")
        while(lis2.length > 0){
            lis2[0].remove()
        }
        let count = 0
        console.log(count)
        for(let i=0;i<stat.length;i++){
            if(stat[i].services == ssrt.value && stat[i].gender == gender.value){
                ++count
                console.log(count)
                ssft(i)
            }
        }
        if(count == 0){
            ntt.innerHTML = "No Results Found"
            tpp(count)
        }
        else{
            tpp(count)
        }
    }
    else if(fst.value=="" && fct.value=="" && ssrt.value=="" && gender.value){
        alert("gender")
        while(lis2.length > 0){
            lis2[0].remove()
        }
        let count = 0
        console.log(count)
        for(let i=0;i<stat.length;i++){
            if(stat[i].gender == gender.value){
                ++count
                console.log(count)
                ssft(i)
            }
        }
        if(count == 0){
            ntt.innerHTML = "No Results Found"
            tpp(count)
        }
        else{
            tpp(count)
        }
    }
    else if(fst.value && fct.value=="" && ssrt.value=="" && gender.value){
        alert("state & gender")
        while(lis2.length > 0){
            lis2[0].remove()
        }
        let count = 0
        console.log(count)
        for(let i=0;i<stat.length;i++){
            if(stat[i].state == fst.value && stat[i].gender == gender.value){
                ++count
                console.log(count)
                ssft(i)
            }
        }
        if(count == 0){
            ntt.innerHTML = "No Results Found"
            tpp(count)
        }
        else{
            tpp(count)
        }
    }
    else if(fst.value && fct.value && ssrt.value=="" && gender.value){
        alert("state city & gender")
        while(lis2.length > 0){
            lis2[0].remove()
        }
        let count = 0
        console.log(count)
        for(let i=0;i<stat.length;i++){
            if(stat[i].state == fst.value && stat[i].gender == gender.value){
                ++count
                console.log(count)
                ssft(i)
            }
        }
        if(count == 0){
            ntt.innerHTML = "No Results Found"
            tpp(count)
        }
        else{
            tpp(count)
        }
    }
    else if(fst.value && fct.value && ssrt.value && gender.value==""){
        alert("state city & services")
        while(lis2.length > 0){
            lis2[0].remove()
        }
        let count = 0
        console.log(count)
        for(let i=0;i<stat.length;i++){
            if(stat[i].state == fst.value && stat[i].city == fct.value && stat[i].services == ssrt.value){
                ++count
                console.log(count)
                ssft(i)
            }
        }
        if(count == 0){
            ntt.innerHTML = "No Results Found"
            tpp(count)
        }
        else{
            tpp(count)
        }
    }
    else if(fst.value && fct.value=="" && ssrt.value && gender.value==""){
        alert("state services")
        while(lis2.length > 0){
            lis2[0].remove()
        }
        let count = 0
        console.log(count)
        for(let i=0;i<stat.length;i++){
            if(stat[i].state == fst.value && stat[i].city == fct.value && stat[i].services == ssrt.value){
                ++count
                console.log(count)
                ssft(i)
            }
        }
        if(count == 0){
            ntt.innerHTML = "No Results Found"
            tpp(count)
        }
        else{
            tpp(count)
        }
    }
    else if(fst.value && fct.value=="" && ssrt.value && gender.value){
        alert("state services & gender")
        while(lis2.length > 0){
            lis2[0].remove()
        }
        let count = 0
        console.log(count)
        for(let i=0;i<stat.length;i++){
            if(stat[i].state == fst.value && stat[i].services == ssrt.value && stat[i].gender== gender.value){
                ++count
                console.log(count)
                ssft(i)
            }
        }
        if(count == 0){
            ntt.innerHTML = "No Results Found"
            tpp(count)
        }
        else{
            tpp(count)
        }
    }
    else{
        ntt.innerHTML = ""
    }
})

// trainer counts

function tpp(count){
    tcnt.innerHTML = `No.of Counts : ${count}`
}

// cancelt

cancelt.addEventListener("click",function(){
    price[3].classList.remove("active")
})

// trainer filter elements

function ssft(n){
    console.log(stat[n])
    let li = document.createElement("li")
    li.textContent = stat[n].name
    li.id = stat[n].id
    li.setAttribute("price",`${stat[n].state}`)
    let div =  document.createElement("div")
    let price = document.createElement("span")
    price.innerHTML = `${stat[n].state}`
    let button = document.createElement("button")
    button.id = `${stat[n].id}`
    button.innerHTML = "Edit"
    let span = document.createElement("span")
    span.classList = "material-icons"
    span.innerHTML = "edit"
    button.append(span)
    div.append(price,button)
    li.append(div)
    trainers_list.append(li)

    if(count == 0){
        ntt.innerHTML = "No Results"
    }

    else{
        ntt.innerHTML = ""
    }

    edit2 = document.querySelectorAll(".list-2 li button")
    ed2()
}

function fstatet(){
    var headers = new Headers();
    headers.append("X-CSCAPI-KEY", "bFRJVzhHclkxSHBQTEpDTGZaSER2TmlGUFBZY2k2YUcyRFdTWlhmaQ==");

    var requestOptions = {
        method: 'GET',
        headers: headers,
        redirect: 'follow'
    };
    fetch(`https://api.countrystatecity.in/v1/countries/IN/states`, requestOptions)
    .then(response => response.text())
    .then(result => {
        st = JSON.parse(result)
        console.log(st)
        st.forEach((st)=>{
            let option = document.createElement("option")
            option.id = st.iso2
            option.value = st.name
            option.innerHTML = st.name
            fst.append(option)
        })
    })
    .catch(error => console.log('error', error));
}

fst.addEventListener("change",function(){
    console.log("State => "+this.value,fst.options[fs.selectedIndex].id)
    sselt = fst.options[fst.selectedIndex].id
    fcityt()
})

function fcityt(){
    while(fct.children.length > 1){
        fct.children[1].remove()
    }

    var headers = new Headers();
    headers.append("X-CSCAPI-KEY","bFRJVzhHclkxSHBQTEpDTGZaSER2TmlGUFBZY2k2YUcyRFdTWlhmaQ==");

    var requestOptions = {
        method: 'GET',
        headers: headers,
        redirect: 'follow'
    };

    // Pass Country Code -- Eg: Country Code : IN
    fetch(`https://api.countrystatecity.in/v1/countries/IN/states/${sselt}/cities`, requestOptions)
    .then(response => response.text())
    .then(result => {
        ct = JSON.parse(result)
        ct.forEach((st)=>{
            let option = document.createElement("option")
            option.id = st.id
            option.value = st.name
            option.innerHTML = st.name
            fct.append(option)
        })
    })
    .catch(error => console.log('error', error));

    
    edit2 = document.querySelectorAll(".list-2 li button")
    ed2()
}

fct.addEventListener("change",function(){
    console.log("City => "+this.value,fct.options[fct.selectedIndex].id)
    ssel = fct.options[fct.selectedIndex].id
})

// Services filter studios

ssr.addEventListener("change",function(){    
    console.log("Services => "+this.value,ssr.options[ssr.selectedIndex].id)
})

// Services filter trainers

ssrt.addEventListener("change",function(){    
    console.log("Services => "+this.value,ssrt.options[ssrt.selectedIndex].id)
})

// Edit buttons

function ed1(){
    for(let i = 0;i<edit1.length;i++){
        edit1[i].addEventListener("click",function(){
            console.log(edit1[i].id)
            window.localStorage.setItem("SDocId",edit1[i].id)
            console.log("Local Storage => " + localStorage.getItem("SDocId"))
            window.location.assign("https://adminpanel-dojo.netlify.app/edit_studio")
        })
    }
}

function ed2(){
    for(let i = 0;i<edit2.length;i++){
        edit2[i].addEventListener("click",function(){
            console.log(edit2[i].id)
            window.localStorage.setItem("TDocId",edit2[i].id)
            console.log("Local Storage => " + localStorage.getItem("TDocId"))
            window.location.assign("https://adminpanel-dojo.netlify.app/edit_trainer")
        })
    }
}

function lths(){
    temps.sort((a,b) => {
        return a.price - b.price
    })
    console.log(temps)

    append(temps)
}

function rlhs(){
    rs.sort((a,b) => {
        return a.rating - b.rating
    })
    console.log(rs)
    
    rappend(rs)
}

function htls(){
    temps.sort((a,b) => {
        return b.price - a.price
    })
    console.log(temps)

    append(temps)
}

function rhls(){
    rs.sort((a,b) => {
        return b.rating - a.rating
    })
    console.log(rs)
    
    rappend(rs)
}

function ltht(){
    tempt.sort((a,b) => {
        return a.price - b.price
    })
    console.log(tempt)

    append2(tempt)
}

function rlht(){
    rt.sort((a,b) => {
        return a.rating - b.rating
    })
    console.log(rt)

    rappendt(rt)
}

function htlt(){
    tempt.sort((a,b) => {
        return b.price - a.price
    })
    console.log(tempt)

    append2(tempt)
}

function rhlt(){
    rt.sort((a,b) => {
        return b.rating - a.rating
    })
    console.log(rt)

    rappendt(rt)
}

function append(val){
    while(lis.length > 0){
        lis[0].remove()
    }

    let count = 0
    val.forEach((doc)=>{
        count += 1
        console.log(doc.name,count,doc.id)
        let li = document.createElement("li")
        li.textContent = `${doc.name}`
        li.id = doc.id
        li.setAttribute("price",`${doc.price}`)
        let div =  document.createElement("div")
        let price = document.createElement("span")
        price.innerHTML = ` &#8377 ${doc.price}`
        let button = document.createElement("button")
        button.id = `${doc.id}`
        button.innerHTML = "Edit"
        let span = document.createElement("span")
        span.classList = "material-icons"
        span.innerHTML = "edit"
        button.append(span)
        div.append(price,button)
        li.append(div)
        studios_list.append(li)
    })

    tempna.forEach((doc)=>{
        count += 1
        console.log(doc.name,count,doc.id)
        let li = document.createElement("li")
        li.textContent = `${doc.name}`
        li.id = doc.id
        li.setAttribute("price",`${doc.price}`)
        let div =  document.createElement("div")
        let price = document.createElement("span")
        price.innerHTML = ` &#8377 ${doc.price}`
        let button = document.createElement("button")
        button.id = `${doc.id}`
        button.innerHTML = "Edit"
        let span = document.createElement("span")
        span.classList = "material-icons"
        span.innerHTML = "edit"
        button.append(span)
        div.append(price,button)
        li.append(div)
        studios_list.append(li)
    })

    edit1 = document.querySelectorAll(".list-1 li button")
    ed1()
}

function append2(val){
    while(lis2.length > 0){
        lis2[0].remove()
    }

    let count = 0
    val.forEach((doc)=>{
        count += 1
        console.log(doc.name,count,doc.id)
        let li = document.createElement("li")
        li.textContent = `${doc.name}`
        li.id = doc.id
        li.setAttribute("price",`${doc.price}`)
        let div =  document.createElement("div")
        let price = document.createElement("span")
        price.innerHTML = ` &#8377 ${doc.price}`
        let button = document.createElement("button")
        button.id = `${doc.id}`
        button.innerHTML = "Edit"
        let span = document.createElement("span")
        span.classList = "material-icons"
        span.innerHTML = "edit"
        button.append(span)
        div.append(price,button)
        li.append(div)
        trainers_list.append(li)
    })

    temptna.forEach((doc)=>{
        count += 1
        console.log(doc.name,count,doc.id)
        let li = document.createElement("li")
        li.textContent = `${doc.name}`
        li.id = doc.id
        li.setAttribute("price",`${doc.price}`)
        let div =  document.createElement("div")
        let price = document.createElement("span")
        price.innerHTML = ` &#8377 ${doc.price}`
        let button = document.createElement("button")
        button.id = `${doc.id}`
        button.innerHTML = "Edit"
        let span = document.createElement("span")
        span.classList = "material-icons"
        span.innerHTML = "edit"
        button.append(span)
        div.append(price,button)
        li.append(div)
        trainers_list.append(li)
    })

    edit2 = document.querySelectorAll(".list-2 li button")
    ed2()
}

function rappend(val){
    while(lis.length > 0){
        lis[0].remove()
    }

    let count = 0
    val.forEach((doc)=>{
        count += 1
        console.log(doc.name,count,doc.id)
        let li = document.createElement("li")
        li.textContent = `${doc.name}`
        li.id = doc.id
        li.setAttribute("rating",`${doc.rating}`)
        let div =  document.createElement("div")
        let rating = document.createElement("span")
        rating.innerHTML = doc.rating
        div.append(rating)
        let button = document.createElement("button")
        button.id = `${doc.id}`
        button.innerHTML = "Edit"
        let span = document.createElement("span")
        span.classList = "material-icons"
        span.innerHTML = "edit"
        button.append(span)
        div.append(button)
        li.append(div)
        studios_list.append(li)
    })

    rsn.forEach((doc)=>{
        count += 1
        console.log(doc.name,count,doc.id)
        let li = document.createElement("li")
        li.textContent = `${doc.name}`
        li.id = doc.id
        li.setAttribute("rating",`${doc.rating}`)
        let div =  document.createElement("div")
        let rating = document.createElement("span")
        rating.innerHTML = doc.rating
        div.append(rating)
        let button = document.createElement("button")
        button.id = `${doc.id}`
        button.innerHTML = "Edit"
        let span = document.createElement("span")
        span.classList = "material-icons"
        span.innerHTML = "edit"
        button.append(span)
        div.append(button)
        li.append(div)
        studios_list.append(li)
    })
    edit1 = document.querySelectorAll(".list-1 li button")
    ed1()
}

function rappendt(val){
    while(lis2.length > 0){
        lis2[0].remove()
    }

    let count = 0
    val.forEach((doc)=>{
        count += 1
        console.log(doc.name,count,doc.id)
        let li = document.createElement("li")
        li.textContent = `${doc.name}`
        li.id = doc.id
        li.setAttribute("rating",`${doc.rating}`)
        let div =  document.createElement("div")
        let rating = document.createElement("span")
        rating.innerHTML = doc.rating
        div.append(rating)
        let button = document.createElement("button")
        button.id = `${doc.id}`
        button.innerHTML = "Edit"
        let span = document.createElement("span")
        span.classList = "material-icons"
        span.innerHTML = "edit"
        button.append(span)
        div.append(button)
        li.append(div)
        trainers_list.append(li)
    })

    rtn.forEach((doc)=>{
        count += 1
        console.log(doc.name,count,doc.id)
        let li = document.createElement("li")
        li.textContent = `${doc.name}`
        li.id = doc.id
        li.setAttribute("rating",`${doc.rating}`)
        let div =  document.createElement("div")
        let rating = document.createElement("span")
        rating.innerHTML = doc.rating
        div.append(rating)
        let button = document.createElement("button")
        button.id = `${doc.id}`
        button.innerHTML = "Edit"
        let span = document.createElement("span")
        span.classList = "material-icons"
        span.innerHTML = "edit"
        button.append(span)
        div.append(button)
        li.append(div)
        trainers_list.append(li)
    })
    
    edit2 = document.querySelectorAll(".list-2 li button")
    ed2()
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
