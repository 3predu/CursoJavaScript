var data = new Date()
var year = data.getFullYear()
var fyear = window.document.getElementById('box-year')
var res = window.document.querySelector('div#res')
function verification(){
    if (fyear.value.length == 0 || Number(fyear.value) > year) {
        window.alert('[Erro] Verifique os dados e tente novamente!')
    }else{
        var fsex = window.document.getElementsByName('radsex')
        var idade = year - Number(fyear.value)
        var genero = ''
        if(fsex[0].checked){
            genero = 'Homem'
        } else if(fsex[1].checked){
            genero = 'Mulher'
        }
        res.innerHTML = `Foi verificado que você é <strong>${genero}</strong> e têm ${idade} anos`
    }
}