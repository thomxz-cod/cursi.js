function verificar() {
    var txtp = document.getElementById('txtp')
    var pais = txtp.value
    var des = document.getElementById('des')
    if(pais == 'Brasil'){
        des.innerText = 'Você é Brasileiro'
    } else {
        des.innerText = 'Você é Estrangeiro'
    }
}