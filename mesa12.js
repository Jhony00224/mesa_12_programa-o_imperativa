const alicia = [23, 69, 32];
const bob = [12, 67, 43];

function encontrarGanhador (alicia, bob) {
    let pontosPrimeiroParticipante = 0;
    let pontosSegundoParticipante = 0; 

    for(let i = 0; i<alicia.length;i++){
        if(alicia[i] > bob[i]){
            pontosPrimeiroParticipante = pontosPrimeiroParticipante + 1;
        }
        else if(alicia[i] < bob[i]){
            pontosSegundoParticipante = pontosSegundoParticipante + 1;
        }
        else{
            pontosPrimeiroParticipante = pontosPrimeiroParticipante + 0;
            pontosSegundoParticipante = pontosSegundoParticipante + 0;
        }
    }


let resultado
    if (pontosPrimeiroParticipante > pontosSegundoParticipante){
         resultado = 'alicia'
    }
    else if(pontosPrimeiroParticipante < pontosSegundoParticipante){
        resultado = 'bob'
    }
    else{
        resultado = 'nenhum dos dois, deu empate'
    }

    return resultado

}

console.log('O ganhador é: ' + encontrarGanhador (alicia, bob));

