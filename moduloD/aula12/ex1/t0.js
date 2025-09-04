function clicar() {
    var txtI = document.getElementById('txtI')
    var idade = txtI.value
    var res = document.getElementById('res')
    if (idade < 16) {
        res.innerHTML = '<strong>Não pode</strong> votar!!'
    } else if (idade < 18 || idade >= 65) {
        res.innerHTML = 'Voto <strong>opcional</strong>!!'
    } else {
        res.innerHTML = 'Voto <strong>obrigatorio</strong>!!'
    }
}