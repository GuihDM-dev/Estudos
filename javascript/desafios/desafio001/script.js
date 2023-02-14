
function carregar() {
var img = document.querySelector('img.img')
var msg = document.getElementById('msg')
var agora = new Date()
//var hora = agora.getHours()
var hora = 10
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 00 && hora < 12 ) {
    //Bom Dia!
    img.src = 'manha.jpg'
    document.body.style.background = '#f0e984da'
}
else if (hora >= 12 && hora <=18) {
    //Boa tarde!
    img.src = 'tarde.jpg'
    document.body.style.background = '#FBBC78'
}
else {
    //Boa noite!
    img.src = 'noite.jpg'
    document.body.style.background = '#9B7CB5'
}
}
