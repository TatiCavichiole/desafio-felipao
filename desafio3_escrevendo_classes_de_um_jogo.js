class Heroi{
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    };   

    atacar(){
        let ataque = "";
    switch (this.tipo){
        case "mago": ataque = "magia";
            break;
        case "guerreiro": ataque = "espada";
            break;
        case "monge": ataque = "artes marciais";
            break;
        case "ninja": ataque = "shuriken";
            break;
            default: ataque = "Ataque desconhecido";
    
    }
    console.log (`${this.nome} e um ${this.tipo} que tem ${this.idade} anos e ataca usando ${ataque}`)
    }
};

 herois = [
   new Heroi("Patachu", 21, "guerreiro"),
   new Heroi("Patichuli", 12, "mago"),
   new Heroi("Pato", 17, "monge"),
   new Heroi("Patolino", 30, "ninja"),
   ];

 for (let i= 0; i <herois.length; i++){

    herois[i].atacar();
 }



    


