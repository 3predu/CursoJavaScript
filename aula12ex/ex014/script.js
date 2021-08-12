    var msg = window.document.querySelector('div#msg')
    var image = window.document.querySelector('div#foto')
    var data = new Date()
    var hora = data.getHours()
function loading(){
    if(hora >= 0 && hora < 12){
        //foto dia
        image.src = 'foto-manha.png'
        document.body.style.background = '#00fff2'
        msg.innerHTML = 'Bom dia!</br>'
        msg.innerHTML += `Agora são: ${hora} horas.`
    }else if (hora >= 12 && hora < 18){
        //foto tarde
        image.src = 'foto-tarde.png'
        document.body.style.background = '#b34100'
        msg.innerHTML = 'Boa tarde!</br>'
        msg.innerHTML += `Agora são: ${hora} horas.`

    }else{
        //foto noite
        image.src = 'foto-noite.png'
        document.body.style.background = '#020211'
        msg.innerHTML = 'Boa noite!</br>'
        msg.innerHTML += `Agora são: ${hora} horas.`
    }
}
