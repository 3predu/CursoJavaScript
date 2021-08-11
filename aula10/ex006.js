var a = window.document.querySelector('div.area-click')
a.addEventListener('click', ClickMouse)
a.addEventListener('mouseenter', EnterMouse)
a.addEventListener('mouseout', OutMouse)
function ClickMouse(){
    a.innerText = 'Você clicou aqui!'
    a.style.background = 'yellow'
    a.style.color = '#000000'
}
function EnterMouse() {
    a.innerText = 'Mouse entrou!'
    a.style.background = '#c60606'
}
function OutMouse() {
    a.innerText = 'Mouse saiu!'
    a.style.background = '#000000'
    a.style.color = "#ffffff"
}