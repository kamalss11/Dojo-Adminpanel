var firestore = firebase.firestore()

var img = document.getElementById('img')
var ph = document.getElementById('ph')
var on = document.getElementById('on')
var url = document.getElementById('url')
var submit = document.getElementById('submit')
var imgr = document.getElementById('imgr')

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

function im(){
    ser.style.fontSize = "13px"
    if(img.value == ""){
        sbtn.classList.add("active")
        img.style.borderColor = "red"
        imgr.innerHTML = "This field is required"
        imgr.style.display = "block"
        imgr.style.color = "red"
    }

    else{
        sbtn.classList.remove("active")
        img.style.borderColor = "#80808059"
        imgr.innerHTML = ""
        imgr.style.display = "none"
    }
}

sbtn.addEventListener('click',async function(){
    await im()
})