// Para rodar, escrever no terminal "npm run test"
// Baixar tbm o  "npm install jest --save-dev"
// "npm init -y" e "npm install prompt-sync"

const { calcularMediaAluno } = require('../src/calcularMediaAluno');

test("Calcular média por Aluno", () => {
    expect(calcularMediaAluno).toBeDefined();
});

// --------------------------------------------------------

// test("Média por aluno", function() {
//    expect(calcularMediaAluno.calcularMedia).toBeDefined();
//    expect(() => calcularMediaAluno(5, 8.2, 1)).toThrow("Respectivas médias:");
//});

test("Erro se a1 ou a2 não forem informadas", () => {
    expect(() => calcularMediaAluno(undefined, 5)).toThrow("Notas a1 ou a2 não informadas.");
});

// --------------------------------------------------------

//test("Erro se a1 ou a2 forem negativas", function() {
//    expect(calcularMediaAluno.negativo).toBeDefined();
//    expect(() => calcularMediaAluno(5, -1, 4)).toThrow("Média negativa.");
//});

test("Erro se a1 ou a2 forem negativas", () => {
    expect(() => calcularMediaAluno(-5, 4)).toThrow("Notas a1 ou a2 não podem ser negativas.");
});

// --------------------------------------------------------

//test("Média não informada", function() {
//    expect(calcularMediaAluno.naoInformada).toBeCloseTo();
//    expect(() => calcularMediaAluno(5, 2)).toThrow("Média a3 não informada.");
//});

test("Média não informada", () => {
    expect(calcularMediaAluno(7, 9)).toBeCloseTo(8.2);
});

// --------------------------------------------------------

//test("Erro se média a3 é negativa", function() {
//    expect(calcularMediaAluno.a3Negativa).toBeDefined();
//    expect(() => calcularMediaAluno(5, 2, -5)).toThrow("Média a3 negativa.");
//});

test("Erro se média a3 é negativa", () => {
    expect(() => calcularMediaAluno(5, 4, -3)).toThrow("Nota a3 não pode ser negativa.");
});

// --------------------------------------------------------

//test("Média de melhor combinação a1 com a3", function() {
//     expect(() => calcularMediaAluno(7, 5, 9)).toBeCloseTo(8);
//});

test("Média de melhor combinação a1 com a3", () => {
    expect(calcularMediaAluno(9, 4, 8)).toBeCloseTo(8.4);
});

// --------------------------------------------------------

//test("Média de melhor combinação a2 com a3", function() {
//    expect(() => calcularMediaAluno(5, 2, 7)).toBeCloseTo(3);
//});

test("Média de melhor combinação a2 com a3", () => {
    expect(calcularMediaAluno(5, 6, 9)).toBeCloseTo(7.8);
});

// --------------------------------------------------------