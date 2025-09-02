console.log("Eu te amo no sentido literal Yasmin!")


function calcular(){
    var txtv = document.getElementById('txtvel')
    var res = document.getElementById('res')
    var vel = Number(txtv.value)
    res.innerText = `Sua velocidade atual é de ${vel}km/h.`
    if( vel > 60 ){
        res.innerHTML += '<p>Você passou o limite de velocidade. <strong>Multado!!</strong></p>' 
    }
    res.innerHTML += "<p>Dirija sempre com sinto de segurança.</p>"
}