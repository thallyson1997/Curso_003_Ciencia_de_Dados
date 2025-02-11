function ePalindromo(texto){
    texto_o = texto.replace(/\s+/g, '');
    texto_i = texto_o.split('').reverse().join('');   
    if (texto_o == texto_i){
        return console.log(`Sim, "${texto}" é um palíndromo.`)
    } else {
        return console.log(`Não, "${texto}" não é um palindromo`)
    }
}

ePalindromo('amor a roma');