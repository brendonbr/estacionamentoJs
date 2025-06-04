
//criar uma classe
class Veiculo { 

    //metodo construtor
    constructor(marca, modelo, ano){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;

        //atributo privado para indicar se o veiculo esta ligado
        this._ligado = false

    }

    //metodos
    ligar(){
        this._ligado = true;
        console.log("o veiculo foi ligado");
    }
    desligar(){
        this._ligado = false;
        console.log("o veiculo foi desligado");
    }

    getLigado(){
        return this._ligado;
    }
}




//Herança

class Moto extends Veiculo{
    constructor(marca,modelo, ano){
        super(marca,modelo,ano);
    }
}


class Carro extends Veiculo{

    constructor(marca,modelo,ano, numeroPortas){
        super(marca,modelo,ano)
        this.numeroPortas = numeroPortas
    }

    abrirPortas(){
        console.log("As portas do carro estão abertas")
    }

}


const motoNova = new Moto("yamaha","mt-05",2025);
console.log(motoNova)
motoNova.ligar();

const carroNovo = new Carro("honda","civic",2025);
console.log(carroNovo)
carroNovo.ligar();
carroNovo.abrirPortas()