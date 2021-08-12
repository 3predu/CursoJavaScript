function tabuada(){
    let num = window.document.querySelector('input#box-n')
    let tab = window.document.querySelector('select#seltab')
    if(num.value.length == 0){
        window.alert('[ERRO] Por favor, digite um número!')
    }else{
        let n = Number(num.value)
        tab.innerHTML = ''
        for(c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}