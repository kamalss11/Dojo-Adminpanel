var firestore = firebase.firestore()

var img = document.getElementById('img')
var ph = document.getElementById('ph')
var on = document.getElementById('on')
var url = document.getElementById('url')

var bnr = firebase.database().ref("SliderBanner");

bnr.get().then((snapshot) => {
    console.log(snapshot.val())
    if (snapshot.exists()) {
        snapshot.forEach((doc)=>{
            let div = document.createElement("div")
            div.className = "swiper-slide"
            let a = document.createElement("a")
            a.href = `${doc.val().url}`
            a.target = "_blank"
            let img = document.createElement("img")
            img.src = `${doc.val().image}`
            a.append(img)
            div.append(a)
            console.log(doc.val().image)
            banners.append(div)
        })
    }
    else{
        console.log("No data found")
    }
})