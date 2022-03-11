let sorteio = [number1, number2, number3, number4, number5, number6];


// 1. Criar uma função para gerar um número aleatório.

function generateRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 60) + 1;
    return randomNumber;
}
// console.log(generateRandomNumber());


// 2. Criar um jogo completo, com 6 números.

function generateGame() {
let megasenaGame = []
for (let index = 1; index <= 6; index +=1) {
    // megasenaGame.push(generateRandomNumber());
}
return megasenaGame;
}
console.log(generateGame());

// 3. Verificar o número de acertos

function checkNumberOfHits(person, megaSenaGame) {
    let numberOfHits = 0;
    for (let index = 0; index < jogoDaniel.length; index +=1) {
    for (let index2 = 0; index2 < megaSenaGame.length; index2 +=1) {
        if (person[index2] === person[index])
            numberOfHits += 1;
        }
    }
}
return numberOfHits ;

//4. Gerar o Jogo

let jogoDoNathan = [8, 10, 50, 44, 20, 12];

console.log('Jogo sorteado: ' + generateGame());
console.log('Jogo da pessoa: ' + jogoDoNathan);
console.log('Numero de acertos: ' + checkNumberOfHits(jogoDoNathan, generateGame));