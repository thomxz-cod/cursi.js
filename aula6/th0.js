// var nome = prompt("Qual é o seu nome?");
// alert(`Olá ${nome}, você está pronto para continuar?`);

var n1 = 1500.5
n1.toFixed(2) //coloca so dois numeros depois do ponto
n1.toFixed(2).replace('.', ',') // troca "isso" por "aquilo"
n1.toLocaleString('pt-br', {style: 'currency', /*corrency = dinheiro*/ currency: 'BRL'}) // tranforma em valor real
