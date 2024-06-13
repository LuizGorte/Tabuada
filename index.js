const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function tabuada(numero) {
    for (let i = 1; i <= 10; i++) {
        console.log(numero + " x " + i + " = " + numero * i);
    }
}

rl.question('Digite um número para exibir a tabuada:', (numero) => {
    numero = parseInt(numero);

    if (!isNaN(numero)) {
        tabuada(numero);
        rl.close();
    } else {
        console.log("Por favor, insira um número válido.");
        rl.close();
    }
});