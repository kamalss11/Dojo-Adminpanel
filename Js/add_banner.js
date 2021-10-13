var firestore = firebase.firestore()

var img = document.getElementById('img')
var ph = document.getElementById('ph')
var on = document.getElementById('on')
var url = document.getElementById('url')
var sbtn = document.getElementById('sbtn')
var imgr = document.getElementById('imgr')

var urls 

var bnr = firebase.database().ref("SliderBanner");
let no = 0
bnr.get().then((snapshot) => {
    console.log(snapshot.val())
    if (snapshot.exists()) {
        snapshot.forEach((doc)=>{
            no = no + 1
        })
    }
    else{
        no = 0
    }
})

img.addEventListener('change',function(){
    im()
})

function im(){
    imgr.style.fontSize = "13px"
    if(img.value == ""){
        sbtn.classList.add("active")
        img.style.borderColor = "red"
        imgr.innerHTML = "This field is required"
        imgr.style.display = "block"
        imgr.style.color = "red"
    }

    else{
        var storageref = firebase.storage().ref()
        var pic = document.getElementById("img").files[0]
        var imgname = pic.name
        const metadata = {
            contentType:pic.type
        }
        var uploadImg = storageref.child("images").child(imgname)
        uploadImg.put(pic,metadata)
        .then(snapshot =>{
            return uploadImg.getDownloadURL()
            .then(url => {
                urls = url
                console.log(urls)
            })
        })
        sbtn.classList.remove("active")
        img.style.borderColor = "#80808059"
        imgr.innerHTML = ""
        imgr.style.display = "none"
    }
}

sbtn.addEventListener('click',async function(e){
    e.preventDefault()
    await im()

    bnr.child(`Banner${no+1}`).set({
        image: urls,
        number: ph.value,
        onclick: on.value,
        url: url.value
    })
})