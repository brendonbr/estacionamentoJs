

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


class Parquimetro{
    constructor(id,statusDisplay){
        this.id = id;
        this.statusDisplay = statusDisplay
    }

    receberTroco(valorInserido, duracao){
        let troco = valorInserido - duracao.valor ;
        const statusPagamento = getElement("statusPagamento");
        console.log("troco R$ " + parseFloat(troco))

        statusPagamento.textContent = `Obrigado pela compra, aqui esta os seus R$ ${troco} de troco`;
    }

    checarValor(valor,duracao){
        return valor >= 1 && valor >= duracao.valor 
    }

    reservarTempo(){
        const statusDuracao = getElement("statusDuracao");
        const statusPagamento = getElement("statusPagamento");
        let valor = parseFloat(getElement("valorInserido").value);
        let tempoReservado = parseInt(document.querySelector("input[name=opcaoTempo]:checked").value);

            if(tempoReservado == 30){
                if(this.checarValor(valor, tempo_30)){
                    statusDuracao.textContent = "Reserva de 30 minutos efetuada";
                    this.receberTroco(valor, tempo_30)
                }
                else{
                    statusPagamento.textContent = "Saldo Insuficiente"
                }

            }
            else if(tempoReservado == 60){
                 if(this.checarValor(valor, tempo_60)){
                    statusDuracao.textContent = "Reserva de 60 minutos efetuada";
                    this.receberTroco(valor, tempo_60)
                }
                else{
                    statusPagamento.textContent = "Saldo Insuficiente"
                }
            }
            else if(tempoReservado == 120){
                if(this.checarValor(valor, tempo_120)){
                    statusDuracao.textContent = "Reserva de 120 minutos efetuada";
                    this.receberTroco(valor, tempo_120)
                }
                else{
                    statusPagamento.textContent = "Saldo Insuficiente"
                }
            }

        

    }
}


const estacionamento = new Parquimetro("estacionamento")




