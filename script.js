
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


class Usuario{
    constructor(carteira){
        this._carteira = carteira;
    }

    getCarteira(){
        return this._carteira
    }

    inserirValor(valor){
        this._carteira -= valor;
        getCarteira();
    }


    receberTroco(valor){
        this._carteira += valor;
        getCarteira();
    }

}


const getElement = (id) => document.getElementById(id);

class Duracao{
    constructor(tempo,valor){
        this.tempo = tempo;
        this.valor = valor;
    }
}


const tempo_30 = new Duracao(30,1.00)
const tempo_60 = new Duracao(60,1.75)
const tempo_120 = new Duracao(120,3.00)

console.log(tempo_120)

class Parquimetro{
    constructor(id){
        this.id = id
    }

    receberTroco(valorInserido, duracao){
        let troco = valorInserido - duracao.valor ;
        console.log("troco R$ " + parseFloat(troco))
    }

    checarValor(valor,duracao){
        return valor >= 1 && valor >= duracao.valor 
    }

    reservarTempo(){

        let valor = parseFloat(getElement("valorInserido").value);
        let tempoReservado = parseInt(document.querySelector("input[name=opcaoTempo]:checked").value);

            if(tempoReservado == 30){
                if(this.checarValor(valor, tempo_30)){
                    console.log("reservado 30 min")
                    this.receberTroco(valor, tempo_30)
                }
                else{
                    console.log("Saldo Insuficiente")
                }

            }
            else if(tempoReservado == 60){
                 if(this.checarValor(valor, tempo_60)){
                    console.log("reservado 60 min")
                    this.receberTroco(valor, tempo_60)
                }
                else{
                    console.log("Saldo Insuficiente")
                }
            }
            else if(tempoReservado == 120){
                if(this.checarValor(valor, tempo_120)){
                    console.log("reservado 120 min")
                    this.receberTroco(valor, tempo_120)
                }
                else{
                    console.log("Saldo Insuficiente")
                }
            }

        

    }
}


const estacionamento = new Parquimetro("estacionamento")




