var agora = new Date()
var time = agora.getHours()
console.log(`Agora são exatamente ${time} horas.`)
if(time <= 12){
    console.log('Bom dia!')
} else if(time <= 18){
    console.log('Boa tarde!')
} else{
    console.log('Boa Noite!')
}