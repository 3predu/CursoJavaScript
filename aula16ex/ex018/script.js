let num = window.document.querySelector('input#box-number')
let list = window.document.querySelector('select#flist')
let res = window.document.querySelector('div#res')
let values = []

function validNumber(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inList(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function add(){
    if(validNumber(num.value) && !inList(num.value, values)){
        values.push(Number(num.value))
        let item = window.document.createElement('option')
        item.innerHTML= `Valor ${num.value} adicionado.`
        list.appendChild(item)
        res.innerHTML = ''
    }else{
        alert('Número inválido ou já alocado na lista')
    }
    num.value = ''
    num.focus()
}

function fin(){
    if(values.length == 0){
        window.alert('Adicione valores antes de finalizar!')
    }else{
        let totElements = values.length
        let larger = values[0]
        let smaller = values[0]
        let s = 0
        let m = 0
        for(let position in values){
            s += values[position]
            if(values[position] > larger)
                larger = values[position]
            if (values[position] < smaller)
                smaller = values[position]
        }
        m = s / totElements
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo tem-se ${totElements} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${larger}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${smaller}.</p>`
        res.innerHTML += `<p> Somando todos os valores tem-se ${s}.</p>`
        res.innerHTML += `<p> A média de todos os valores digitados é = ${m} .</p>`
    }
}

