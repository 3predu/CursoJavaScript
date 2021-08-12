let ni = window.document.querySelector('input#box-ni')
let nf = window.document.querySelector('input#box-nf')
let np = window.document.querySelector('input#box-np')
let res = window.document.querySelector('div#res')

function contagem(){
    if(ni.value.length == 0 || nf.value.length == 0 || np.value.length == 0){
        res.innerHTML = 'Impossivel contar!</br> Digite todos os valores!'
        window.alert('[ERRO] FALTAM DADOS!')
    }else {
        res.innerHTML = 'Contando: '
        let i = Number(ni.value)
        let f = Number(nf.value)
        let p = Number(np.value)

        if(i < f) {
            // contagem crescente
            for(let c = i; c <= f; c += p){
                res.innerHTML += ` ${c} > ` //\u{1F449} (emoji cetinha)
            }
        }else {
            for(let c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} > `
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}