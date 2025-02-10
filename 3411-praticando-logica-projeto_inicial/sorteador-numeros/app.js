function sortear(){
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);

    let sorteados = [];
    let numero;
    let resultado = document.getElementById('resultado');

    if (ate <= de){
        resultado.innerHTML = `<label class="texto__paragrafo">O valor máximo é menor que o valor mínimo </label>`;
        alterarStatusBotao();
    } else {
        if (quantidade > (ate - de + 1)){
            resultado.innerHTML = `<label class="texto__paragrafo">A quantidade de número é maior que o espaço de seleção.</label>`;
            alterarStatusBotao(); 
        } else{
            for (let i = 0; i < quantidade; i++){
                numero = obterNumeroAleatorio(de, ate);
                while (sorteados.includes(numero)){
                    numero = obterNumeroAleatorio(de, ate);
                }
                sorteados.push(numero);
            }
        
            resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados} </label>`;
            alterarStatusBotao();
        }
    }    
}

function obterNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao(){
    let botao = document.getElementById('btn-reiniciar');
    let botao_s = document.getElementById('btn-sortear');
    if (botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
        botao_s.classList.remove('container__botao');
        botao_s.classList.add('container__botao-desabilitado');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
        botao_s.classList.remove('container__botao-desabilitado');
        botao_s.classList.add('container__botao');
    }
}

function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotao();
}