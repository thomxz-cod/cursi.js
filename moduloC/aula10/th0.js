//        EVENTOS DOM      -    JavaScript Events DOM List


//mouseenter   =   entrou na div
//mousemove    =   se moveu dentro da div
//mousedown    =   apertar e segurar dentro da div
//mouseup      =   soltar a div
//click        =   clicar na div
//mouseout     =   sair da div


var a = document.getElementById('area')
a.style.color = 'black'

//    Funções: 

function clicar() {
    a.innerText = 'Você clicou!!'
    a.style.color = 'white'
} 

function entrar() {
    a.innerText = 'Entrou!!'
    a.style.background = 'green'
    a.style.color = 'white'
}

function sair() {
    a.innerText = 'Saiu!!'
    a.style.color = 'white'
}