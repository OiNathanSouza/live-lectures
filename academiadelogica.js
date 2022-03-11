let maiorPalavra = array[0];
let menorPalavra = array[0]
let array = ['java', 'javascript', 'phyton', 'html', 'css']



for (let contador = 1; contador < array.length; contador += 1) {
    console.log('contador ', contador);
    console.log('array[contador] ', array[contador]);
    console.log('menorPalavra fora do if ', menorPalavra);
    if (array[contador].length >= menorPalavra.length) {
        menorPalavra = array[contador];
        XPathResult.push
        console.log('maiorPalavra dentro do ig' , maiorPalavra);
    }
    console.log('--------------------')
}