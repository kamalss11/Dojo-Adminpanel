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
var img = document.getElementById("img")
var DocId,storageref
var firestore = firebase.firestore()
var studios = firestore.collection("Studios")

price.addEventListener("blur",function(){
    pr()
})

function pr(){
    let ph = /\d[0-9]$/
    if(price.value){
        if((!price.value.match(ph))){
            sbtn.classList.add("active")
        }

        else{
            sbtn.classList.remove("active")
        }
    }
}

phone.addEventListener("blur",function(e){
    console.log(e.target.value.length)
    ph()
})

function ph(){
    let ph = /\d[0-9]{9}$/
    if(phone.value){
        if(!phone.value.match(ph)){
            sbtn.classList.add("active")
        }
        else if(phone.value.length > 10){
            sbtn.classList.add("active")
        }
        else{
            sbtn.classList.remove("active")
        }
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
    pr()
    ph()

    let nameInput = nam.value
    let countryInput = country.value
    let stateInput = state.value
    let cityInput = city.value
    let servicesInput = services.value
    let priceInput = price.value
    let phoneInput = phone.value
    let experienceInput = experience.value
    if(img.value == ""){
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

    else{uploadImg.put(img,metadata)
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
                    console.log(nameInput,countryInput,stateInput,cityInput,servicesInput,priceInput,phoneInput,experienceInput,imgName)
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