 function clicar(){
    var txtH = document.querySelector('input#txtH')
    var hora = Number(txtH.value)
    var res = document.getElementById('res')
    if(hora<6){
        res.innerHTML = 'Boa madrugada!'
    } else if(hora<12){
        res.innerHTML = 'Bom Dia!'
    } else if(hora<=18){
        res.innerHTML = 'Boa Tarde'
    } else if(hora<=24){
        res.innerHTML = 'Boa Noite!'
    }
}