var box1 = window.document.querySelector('input#box-txt1')
var box2 = window.document.querySelector('input#box-txt2')
var res = window.document.querySelector('div#result')

function somar(){
    var n1 = Number(box1.value)
    var n2 = Number(box2.value)
    var soma = n1 + n2
    res.innerHTML = `A soma entre ${n1} e ${n2} = <strong>${soma}</strong>`
}

