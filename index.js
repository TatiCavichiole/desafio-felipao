let heroi = "Gabys";
let xp = 10000;
let nivelHeroi;

switch (true) {
    case xp <= 1000:
      nivelHeroi = "Ferro";
        break;
    case xp <= 2000:
        nivelHeroi = "Bronze";
        break;
    case xp  <= 5000:
        nivelHeroi = "Prata";
        break;
    case xp  <= 7000:
        nivelHeroi = "Ouro";
        break;
    case xp  <= 8000:
        nivelHeroi = "Platina";
        break;
    case xp  <= 9000:
        nivelHeroi = "Ascendente";
        break;
    case xp  <= 10000:
        nivelHeroi = "Imortal";
        break;
    case xp >10001:
        nivelHeroi = "Radiante";
        break;
      default: "Heroi nao classificado";  
}

console.log ( "O Herói de nome " + heroi + " está no nível de " + nivelHeroi)
