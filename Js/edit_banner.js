var firestore = firebase.firestore()
var bdi

var img = document.getElementById('imgd')
var img_value
var ph = document.getElementById('ph')
var on = document.getElementById('on')
var ur = document.getElementById('url')
var sbt = document.getElementById('sbtn')
var imgr = document.getElementById('imgr')

window.onload = ()=>{
    bdi = window.localStorage.getItem('bn')
    console.log(bdi)
    if(bdi){
        var bnr = firebase.database().ref("SliderBanner/"+'Banner1');
        bnr.get().then((snapshot) => {
        img_value = snapshot.val().image
        ph.value = snapshot.val().number
        on.value = snapshot.val().onclick
        ur.value = snapshot.val().url
        img.src = `${img_value}`
    })

    }
    else{
        window.location.assign("https://adminpanel-dojo.netlify.app/entity")
    }
}

var urls 

var bnr = firebase.database().ref("SliderBanner");
var no = 0
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

sbt.addEventListener('click',async function(e){
    var load = document.getElementById("loads")
    load.style.display = "block"
    e.preventDefault()

    console.log(ph.value,on.value,url.value)

    var storageref = firebase.storage().ref()
    var pic = document.getElementById("img").files[0]

    if(pic){        
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
                bnr.child(`Banner${no + 1}`).set({
                    image: urls,
                    number: ph.value,
                    onclick: on.value,
                    url: ur.value
                })
                window.localStorage.setItem('bn','')
                alert(`${bnr},has been successfully updated.`)
                window.location.assign("https://adminpanel-dojo.netlify.app/entity")
            }).catch(function(error){
                console.log(error)
            })
        })
        }
    else{
        firebase.database().ref('SliderBanner/' + `${bdi}`).set({
            image: img_value,
            number: ph.value,
            onclick: on.value,
            url: ur.value
        });

        firebase.database().ref().update(updates);
    }
})