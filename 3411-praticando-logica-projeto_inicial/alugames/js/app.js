console.log('Numero de jogos alugado: ' + ContarGame());

function alterarStatus(id){
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    if (imagem.classList.contains("dashboard__item__img--rented")){
        let confirma = parseInt(prompt("Você confirma a devolução?\nDigite 1 - Sim\nDigite 2 - Não"));
        if (confirma == 1){
            imagem.classList.remove('dashboard__item__img--rented');
            botao.textContent = 'Alugar';
            botao.classList.remove("dashboard__item__button--return");
        } else if (confirma == 2){
            alert("Ok, devolução não realizada!");
        }
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.textContent = 'Devolver';
        botao.classList.add("dashboard__item__button--return")
    }
    console.log('Numero de jogos alugado: ' + ContarGame());
}

function ContarGame() {
    let num = 0;
    for (let i = 1; i < 4; i++) { // Itera de game-0 a game-2
        let game = document.getElementById(`game-${i}`);
        let img = game.querySelector('.dashboard__item__img');
        if (img.classList.contains("dashboard__item__img--rented")) {
                num++;
        }    
    }
    return num;
}