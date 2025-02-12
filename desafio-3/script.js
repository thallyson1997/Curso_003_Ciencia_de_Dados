function exibirValores(){
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<strong>Nome:</strong> ${nome} <br> <strong>E-mail:</strong> ${email}`;
    console.log(nome);
    console.log(email);
    document.getElementById("mensagem").textContent = "Os dados foram inseridos com sucesso!";
}

let num1 = 10;
let num2 = 20;
let soma = num1 + num2;

console.log(`A soma de ${num1} e ${num2} é igual a ${soma}.`);

function dividirSentencas(texto) {
    let frases = texto.split(";");
    console.log("Frases separadas:", frases);
}

let textoExemplo = "Esta é a primeira sentença;Aqui está a segunda sentença;E esta é a terceira.";
dividirSentencas(textoExemplo);

function exibirNumeros(numerosString) {
    let numerosArray = numerosString.split(",");
    console.log("Números separados:", numerosArray);
}

let entrada = "10,20,30,40,50";
exibirNumeros(entrada);
