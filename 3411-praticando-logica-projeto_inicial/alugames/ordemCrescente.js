function ordemCrescente(a, b, c) {
    return [a, b, c].sort((x, y) => x - y);
}

console.log(ordemCrescente(7, 5, 4));
