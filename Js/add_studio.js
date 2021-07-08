var co = [],s = [],c = [],csel,ssel
var nam = document.getElementById("name")
var country = document.getElementById("con")
var state = document.getElementById("state")
var city = document.getElementById("city")
var services = document.getElementById("services")
var price = document.getElementById("price")
var phone = document.getElementById("phone")
var experience = document.getElementById("exp")
var form = document.getElementById("form")
var sbtn = document.getElementById("sbtn")
var DocId,storageref,uploadImg
var ig = document.getElementById("img")
var firestore = firebase.firestore()
var studios = firestore.collection("Studios")
var pops = document.querySelector(".pops")
var pop = document.querySelector(".pops .pop")
var ptble = document.querySelector(".pop table")
var ner = document.getElementById("ner")
var prer = document.querySelector("#prer")
var pher = document.querySelector("#pher")
var ser = document.querySelector("#ser")
prer.style.display = "none"
pher.style.display = "none"
ner.style.display = "none"
ser.style.display = "none"

nam.addEventListener("blur",function(){
    na()
})

function na(){
    ner.style.fontSize = "13px"
    if(nam.value == ""){
        sbtn.classList.add("active")
        nam.style.borderColor = "red"
        ner.innerHTML = "This field is required"
        ner.style.display = "block"
        ner.style.color = "red"
    }

    else{
        sbtn.classList.remove("active")
        nam.style.borderColor = "#80808059"
        ner.innerHTML = ""
        ner.style.display = "none"
    }
}

price.addEventListener("blur",function(){
    pr()
})

function pr(){
    let ph = /\d[0-9]$/
    prer.style.fontSize = "13px"
    if(price.value){
        price.style.borderColor = "#80808059"
        if((!price.value.match(ph))){
            sbtn.classList.add("active")
            price.style.borderColor = "red"
            prer.innerHTML = "Enter only numericals"
            prer.style.display = "block"
            prer.style.color = "red"
        }

        else{
            sbtn.classList.remove("active")
            price.style.borderColor = "#80808059"
            prer.innerHTML = ""
            prer.style.display = "none"
        }
    }

    else{
        sbtn.classList.add("active")
        price.style.borderColor = "red"
        prer.innerHTML = "Enter only numericals"
        prer.style.display = "block"
        prer.style.color = "red"
    }
}

phone.addEventListener("blur",function(e){
    console.log(e.target.value.length)
    ph()
})

function ph(){
    let ph = /\d[0-9]{9}$/
    pher.style.fontSize = "13px"
    if(phone.value){
        if(!phone.value.match(ph)){
            sbtn.classList.add("active")
            phone.style.borderColor = "red"
            pher.innerHTML = "Enter 10 digits number"
            pher.style.display = "block"
            pher.style.color = "red"

        }
        else if(phone.value.length > 10){
            sbtn.classList.add("active")
            phone.style.borderColor = "red"
            pher.innerHTML = "Enter only 10 digits"
            pher.style.display = "block"
            pher.style.color = "red"
        }
        else{
            sbtn.classList.remove("active")
            phone.style.borderColor = "#80808059"
            pher.innerHTML = ""
            pher.style.display = "none"
        }
    }

    else{
        sbtn.classList.add("active")
        phone.style.borderColor = "red"
        pher.innerHTML = "Enter 10 digits number"
        pher.style.display = "block"
        pher.style.color = "red"
    }
}

services.addEventListener("blur",function(){
    sr()
})

function sr(){
    ser.style.fontSize = "13px"
    if(services.value == ""){
        sbtn.classList.add("active")
        services.style.borderColor = "red"
        ser.innerHTML = "This field is required"
        ser.style.display = "block"
        ser.style.color = "red"
    }

    else{
        sbtn.classList.remove("active")
        services.style.borderColor = "#80808059"
        ser.innerHTML = ""
        ser.style.display = "none"
    }
}

window.onload = () =>{
    var headers = new Headers();
    headers.append("X-CSCAPI-KEY", "bFRJVzhHclkxSHBQTEpDTGZaSER2TmlGUFBZY2k2YUcyRFdTWlhmaQ==");

    var requestOptions = {
        method: 'GET',
        headers: headers,
        redirect: 'follow'
    };

    fetch("https://api.countrystatecity.in/v1/countries", requestOptions)
    .then(response => response.text())
    .then(result => {
        co = JSON.parse(result)
        co.forEach((op) => {
            let option = document.createElement("option")
            option.classList = "op"
            option.id = op.iso2
            if(op.name == "India"){
                option.selected = "true"
                csel = op.iso2
            }
            option.value = op.name
            option.innerHTML = op.name
            country.append(option)
        })

        var headers = new Headers();
        headers.append("X-CSCAPI-KEY", "bFRJVzhHclkxSHBQTEpDTGZaSER2TmlGUFBZY2k2YUcyRFdTWlhmaQ==");

        var requestOptions = {
            method: 'GET',
            headers: headers,
            redirect: 'follow'
        };

        // Pass Country Code -- Eg: Country Code : IN
        fetch(`https://api.countrystatecity.in/v1/countries/${csel}/states`, requestOptions)
        .then(response => response.text())
        .then(result => {
            s = JSON.parse(result)
            s.forEach((st)=>{
                let option = document.createElement("option")
                option.id = st.iso2
                option.value = st.name
                option.innerHTML = st.name
                state.append(option)
            })
        })
        .catch(error => console.log('error', error));
    })
    .catch(error => console.log('error', error));
}

country.addEventListener("change",function(e){
    console.log("Country => "+this.value,country.options[country.selectedIndex].id)
    csel = country.options[country.selectedIndex].id
    // remove all options

    fetch_state()
})

function fetch_state(){
    while (city.options.length > 0) {
        city.remove(0);
    }

    let option = document.createElement("option")
    option.innerHTML = "--City--"
    option.setAttribute("aria-readonly","true")
    city.append(option)

    while (state.options.length > 0) {
        state.remove(0);
    }
    var headers = new Headers();
    headers.append("X-CSCAPI-KEY","bFRJVzhHclkxSHBQTEpDTGZaSER2TmlGUFBZY2k2YUcyRFdTWlhmaQ==");

    var requestOptions = {
        method: 'GET',
        headers: headers,
        redirect: 'follow'
    };

    // Pass Country Code -- Eg: Country Code : IN
    fetch(`https://api.countrystatecity.in/v1/countries/${csel}/states`, requestOptions)
    .then(response => response.text())
    .then(result => {
        s = JSON.parse(result)
        let option = document.createElement("option")
        option.innerHTML = "--State--"
        option.setAttribute("aria-readonly","true")
        state.append(option)
        s.forEach((st)=>{
            let option = document.createElement("option")
            option.id = st.iso2
            option.value = st.name
            option.innerHTML = st.name
            state.append(option)
        })
    })
    .catch(error => console.log('error', error));
}

state.addEventListener("change",function(e){
    console.log("State => "+this.value,state.options[state.selectedIndex].id)
    ssel = state.options[state.selectedIndex].id

    fetch_city()
})

function fetch_city(){
    // remove all options
    while (city.options.length > 0) {
        city.remove(0);
    }

    var headers = new Headers();
    headers.append("X-CSCAPI-KEY", "bFRJVzhHclkxSHBQTEpDTGZaSER2TmlGUFBZY2k2YUcyRFdTWlhmaQ==");

    var requestOptions = {
        method: 'GET',
        headers: headers,
        redirect: 'follow'
    };

    // Pass Country & State Code -- Eg: Country Code : IN & State Code : MH
    fetch(`https://api.countrystatecity.in/v1/countries/${csel}/states/${ssel}/cities`,requestOptions)
    .then(response => response.text())
    .then(result => {
        c = JSON.parse(result)
        let option = document.createElement("option")
        option.innerHTML = "--City--"
        option.setAttribute("aria-readonly","true")
        city.append(option)
        c.forEach((ci) => {
            let option = document.createElement("option")
            option.id = ci.iso2
            option.value = ci.name
            option.innerHTML = ci.name
            city.append(option)
        })
    })
    .catch(error => console.log('error', error));
}

city.addEventListener("change",function(e){
    console.log("City => "+this.value,city.options[city.selectedIndex].id)
})

sbtn.addEventListener("click",function(e){
    e.preventDefault()
    na()
    pr()
    ph()
    sr()

    if(sbtn.classList.contains("active")){
        alert("Check the fields are filled or not")
    }

    else{
        let nameInput = nam.value
        let countryInput = country.value
        let stateInput = state.value
        let cityInput = city.value
        let servicesInput = services.value
        let priceInput = price.value
        let phoneInput = phone.value
        let experienceInput = experience.value

        let tr1 = document.createElement("tr")
        let td1 = document.createElement("td")
        let td2 = document.createElement("td")
        td1.innerHTML = "Name"
        td2.innerHTML = nameInput
        tr1.append(td1,td2)
        
        let tr2 = document.createElement("tr")
        let td3 = document.createElement("td")
        let td4 = document.createElement("td")
        td3.innerHTML = "Country"
        td4.innerHTML = countryInput
        tr2.append(td3,td4)

        let tr3 = document.createElement("tr")
        let td5 = document.createElement("td")
        let td6 = document.createElement("td")
        td5.innerHTML = "State"
        td6.innerHTML = stateInput
        tr3.append(td5,td6)

        let tr4 = document.createElement("tr")
        let td7 = document.createElement("td")
        let td8 = document.createElement("td")
        td7.innerHTML = "City"
        td8.innerHTML = cityInput
        tr4.append(td7,td8)

        let tr5 = document.createElement("tr")
        let td9 = document.createElement("td")
        let td10 = document.createElement("td")
        td9.innerHTML = "Services"
        td10.innerHTML = servicesInput
        tr5.append(td9,td10)

        let tr6 = document.createElement("tr")
        let td11 = document.createElement("td")
        let td12 = document.createElement("td")
        td11.innerHTML = "Price"
        td12.innerHTML = priceInput
        tr6.append(td11,td12)

        let tr7 = document.createElement("tr")
        let td13 = document.createElement("td")
        let td14 = document.createElement("td")
        td13.innerHTML = "Phone"
        td14.innerHTML = phoneInput
        tr7.append(td13,td14)

        let tr8 = document.createElement("tr")
        let td15 = document.createElement("td")
        let td16 = document.createElement("td")
        td15.innerHTML = "Experience"
        td16.innerHTML = experienceInput
        tr8.append(td15,td16)

        var div = document.createElement("div")
        div.classList.add("options")
        var op1 = document.createElement("button")
        op1.innerText = "Edit"
        var op2 = document.createElement("button")
        op2.innerText = "Submit"

        div.append(op1,op2)

        ptble.append(tr1,tr2,tr3,tr4,tr5,tr6,tr7,tr8)
        pop.append(div)
            
        pops.classList.add("active")

        op1.addEventListener("click",function(){
            pops.classList.remove("active")
        })

        op2.addEventListener("click",function(){
            if(ig.value == ""){
                studios.add({
                    Name: nameInput,
                    Country: countryInput,
                    State: stateInput,
                    City : cityInput,
                    Services: servicesInput,
                    Price: priceInput,
                    Phone : phoneInput,
                    Experience : experienceInput,
                    Timestamp: firebase.firestore.Timestamp.now()
                }).then((docRef)=>{
                    studios.doc(`${docRef.id}`).update({
                        DocumentId: docRef.id
                    })
                    console.log("Data Saved.This is you id = > ",docRef.id)
                    console.log(nameInput,countryInput,stateInput,cityInput,servicesInput,priceInput,phoneInput,experienceInput)
                    form.reset()
                    window.location.assign("https://adminpanel-dojo.netlify.app/entity")
                }).catch(function(error){
                    console.log(error)
                })
            }
        
            else{
                storageref = firebase.storage().ref()
                var img = document.getElementById("img").files[0]
                var imgname = img.name
                const metadata = {
                    contentType:img.type
                }
                uploadImg = storageref.child("images").child(imgname)
                uploadImg.put(img,metadata)
                .then(snapshot =>{
                    return uploadImg.getDownloadURL()
                    .then(url => {
                        urls = url
                        console.log(urls)
                        studios.add({
                            Name: nameInput,
                            Country: countryInput,
                            State: stateInput,
                            City : cityInput,
                            Services: servicesInput,
                            Price: priceInput,
                            Phone : phoneInput,
                            Experience : experienceInput,
                            DisplayPicture: urls,
                            Timestamp: firebase.firestore.Timestamp.now()
                        }).then((docRef)=>{
                            studios.doc(`${docRef.id}`).update({
                                DocumentId: docRef.id
                            })
                            console.log("Data Saved.This is you id = > ",docRef.id)
                            console.log(nameInput,countryInput,stateInput,cityInput,servicesInput,priceInput,phoneInput,experienceInput,imgname)
                            form.reset()
                            window.location.assign("https://adminpanel-dojo.netlify.app/entity")
                        }).catch(function(error){
                            console.log(error)
                        })
                    })
                }).catch(function(error){
                    console.log(error)
                })
            }
        })
    }
})