let menuHaut = document.getElementById('menuHaut');
let drop = document.getElementById('drop');
menuHaut.style.height = 0;
drop.addEventListener('click',()=>{
    menuHaut.style.height = '270px';
})
let close = document.getElementById('close');
close.addEventListener('click',()=>{
    menuHaut.style.height = 0;
})
let supprim = document.getElementById('supprim');
let supp = document.getElementById('supp');
supprim.addEventListener('click',()=>{
    supp.remove();
})

function SendMail() {
    var params = {
        from_name : document.getElementById("fullName").value,
        email_id : document.getElementById("email_id").value,
        message : document.getElementById("message").value
    }
    emailjs.send("service_mc4j1q8", "template_b2tq96e", params).then(function (res) {
        alert("Success! " + res.status);
    })
}