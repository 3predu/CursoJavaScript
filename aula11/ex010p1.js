var txtcountry = window.document.querySelector('input#box-country')
var answer = window.document.querySelector('div#answer')
function verification(){
    var country = String(txtcountry.value).toLowerCase()
    answer.innerHTML = `Seu país é <strong>${country.toUpperCase()}</strong> </br>`
    if(country == 'brasil'){
        answer.innerHTML += 'Você é Brasileiro!'
    } else{
        answer.innerHTML += 'Você é Estrangeiro!'
    }
}