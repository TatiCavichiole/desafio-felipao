let heroi = "Gabys";
let vitorias = 15;
let derrotas = 5;
let saldoDeVitorias = vitorias - derrotas;
let nivelHeroi;

function saldo (vitorias, derrotas){
    return  saldoDeVitorias = vitorias  - derrotas;
}

switch (true) {
    case saldoDeVitorias <=10:
        nivelHeroi = "Ferro";
    break;
    case saldoDeVitorias <21:
        nivelHeroi = "Bronze";
    break;
    case saldoDeVitorias <51:
        nivelHeroi = "Prata";
    break;
    case saldoDeVitorias <81:
        nivelHeroi = "Ouro";
    break;
    case saldoDeVitorias <91:
        nivelHeroi = "Diamante";
    break;
    case saldoDeVitorias <101:
        nivelHeroi = "Lendario";
    break;
    case saldoDeVitorias >100:
        nivelHeroi = "Imortal";
    break;
       
}



console.log ("O heroi " + heroi, "tem o saldo de " + saldoDeVitorias, "vitorias, e esta no nivel "+ nivelHeroi, "!" )