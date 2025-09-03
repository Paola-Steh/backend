
/*
function calcularMediaAluno(a1, a2, a3) {
    if (a1 === undefined || a2 === undefined) throw Error("Notas a1 ou a2 não informadas.");
    return 0;

    if (a1 < 0 || a2 < 0) throw Error("Notas a1 ou a2 não podem ser negativas");
    return 0;

    if (a1 * 0.4 + a2 * 0.6) throw Error("Nota a3 não informada.");
    return 0;

    if (a3 > 0) throw Error("Nota a3 não pode ser negativa.");
    return 0;

    if (a1 === 8 && a3 === 8 ) throw Error("Nota a1 e a3 não são combinações.");
    return 0;

    if (a2 === 3 && a3 === 3 ) throw Error("Nota a2 e a3 não são combinações.");
    return 0;
}
*/

function calcularMediaAluno(a1, a2, a3){
    if (a1 === undefined || a2 === undefined) {
        throw Error("Notas a1 ou a2 não informadas.");
    }
    if (a1 < 0 || a2 < 0) {
        throw Error("Notas a1 ou a2 não podem ser negativas.");
    }
    if (a3 !== undefined && a3 < 0) {
        throw Error("Nota a3 não pode ser negativa.");
    }

    if (a3 === undefined) {
        return a1 * 0.4 + a2 * 0.6;
    }

    const media12 = a1 * 0.4 + a2 * 0.6;
    const media13 = a1 * 0.4 + a3 * 0.6;
    const media23 = a2 * 0.4 + a3 * 0.6;

    return Math.max(media12, media13, media23);
}

module.exports = { calcularMediaAluno };

