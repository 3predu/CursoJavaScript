var txtvel = window.document.querySelector('input#box-vel')
var res = window.document.querySelector('div#res')
function calculate(){
    var vel = Number(txtvel.value)
    res.innerHTML = `Sua velocidade atual é de <strong>${vel}Km/h</strong>`
    
    if(vel > 70){
        res.innerHTML += `<p>Você está <strong>MULTADO!</strong> por excesso de velocidade (Velocidade = ${vel}Km/h)</p>`
    }

    res.innerHTML += `<p>Dirija sempre com cinto de segurança!</p>`
}