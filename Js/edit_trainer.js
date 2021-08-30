var DocId
var firestore = firebase.firestore()
var trainers = firestore.collection("Online")
var di = document.querySelector(".di")

var nam = document.querySelector("#name")
var gender = document.querySelector("#gender")
var lan = document.querySelector("#lan")
var email = document.querySelector("#email")
var phone = document.querySelector("#phone")
var category = document.querySelector("#cat")
var speciality = document.querySelector("#spe")
var exp = document.querySelector("#exp")
var price = document.querySelector("#price")
var rating = document.querySelector("#rat")
var tags = document.querySelector("#tags")
var city = document.querySelector("#cit")
var state = document.querySelector("#state")
var img = document.getElementById("img")
var sbtn = document.querySelector(".sbtn")
var form = document.getElementById("form")
var imgs = document.getElementById("img2")
var urls
window.onload = () =>{
    DocId = window.localStorage.getItem("TDocId")
    console.log("Document Id => " + DocId)
    if(DocId == 0){
        window.location.assign("https://adminpanel-dojo.netlify.app/entity")
    }
    else{
        di.innerHTML += DocId

        trainers.doc(`${DocId}`).get().then((doc) => {
            console.log(doc.data())
            nam.value = doc.data().Name
            gender.value = doc.data().Gender
            lan.value = doc.data().Language
            email.value = doc.data().Email
            phone.value = doc.data().Phone
            category.value = doc.data().Category
            speciality.value = doc.data().Speciality
            exp.value = doc.data().Experience
            price.value = doc.data().Price
            rating.value = doc.data().Rating
            tags.value = doc.data().Tags
            city.value = doc.data().City
            state.value = doc.data().State
            img.src = `${doc.data().DisplayPicture}`
            urls = `${doc.data().DisplayPicture}`
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    }
}

sbtn.addEventListener("click",function(e){
    e.preventDefault()
    var load = document.getElementById("loads")
            
    load.style.display = "block"
    var image,imgname,storageref = firebase.storage().ref()
    if(imgs.value == ""){
        trainers.doc(`${DocId}`).update({
            Name: nam.value,
            Gender: gender.value,
            Language: lan.value,
            Email: email.value,
            Phone: phone.value,
            Category: category.value,
            Speciality: speciality.value,
            Experience: exp.value,
            Price: price.value,
            Rating: rating.value,
            Tags: tags.value,
            City: city.value,
            State: state.value,
            DisplayPicture: urls
        }).then(()=>{
            console.log("Data Saved.This is you id = > ",DocId)
            form.reset()
            window.localStorage.setItem("td",1)
            window.localStorage.setItem("TDocId",0)
            alert(`Your data has been successfully updated.`)
            window.location.assign("https://adminpanel-dojo.netlify.app/entity")
        }).catch(function(error){
            console.log(error)
        })
    }
    else{
        image = document.getElementById("img2").files[0]
        imgname = image.name
        const metadata = {
            contentType:image.type
        }
        var uploadImg = storageref.child("images").child(imgname)
        uploadImg.put(image,metadata)
        .then(snapshot =>{
            return uploadImg.getDownloadURL()
            .then(url => {
                urls = url
                console.log(urls)
                trainers.doc(`${docId}`).update({
                    Name: nam.value,
                    Gender: gender.value,
                    Language: lan.value,
                    Email: email.value,
                    Phone: phone.value,
                    Category: category.value,
                    Speciality: speciality.value,
                    Experience: exp.value,
                    Price: price.value,
                    Rating: rating.value,
                    Tags: tags.value,
                    City: city.value,
                    State: state.value,
                    DisplayPicture: urls
                }).then(()=>{
                    console.log("Data Saved.This is you id = > ",DocId)
                    form.reset()
                    window.localStorage.setItem("td",1)
                    window.localStorage.setItem("TDocId",0)
                    alert(`Your data has been successfully updated.`)
                    window.location.assign("https://adminpanel-dojo.netlify.app/entity")
                }).catch(function(error){
                    console.log(error)
                })
            })
        })
    }
})