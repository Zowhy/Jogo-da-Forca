let palavras = ["praia", "musica", "livro", "computador", "comida"];
let palavra = palavras[Math.floor(Math.random() * palavras.length)];
let letrasCorretas = [];
let maxTentativas = 15;

function exibirPalavraOculta() {
    let palavraOculta = "";
    for (let i = 0; i < palavra.length; i++){
        if (letrasCorretas.indexOf(palavra[i]) !== -1){
            palavraOculta += palavra[i];
        } else {
            palavraOculta += "_";
        }
        }
        return palavraOculta;
    }
function verificarLetra(letra){
    if (letrasCorretas.indexOf(letra) === -1){
        letrasCorretas.push(letra);
        if (palavras.indexOf(letra) === -1){
            maxTentativas--;
        } 
    }
}
    function veriFicarFim() {
        if (maxTentativas === 0) {
            return "Você perdeu!!! A palavra era: " + palavra;
        }
        if (exibirPalavraOculta() === palavra){
            return "Parabéns!!! Você ganhou!";
        }
        return false;
    }
    while (true) {
        alert("Palavra: " + exibirPalavraOculta());
        alert("Tentativas restantes:" + maxTentativas);
        let letra = prompt("Digite uma letra:".toLowerCase());
    
     verificarLetra(letra);    
        let resultado = veriFicarFim()
        if(resultado) {
            alert(resultado);
           break;
        }
      }
    
    
    

