class ContaBancaria{

    //Crie a classe ContaBancaria, que possui os parâmetros agencia, numero, tipo e saldo;

    constructor(agencia, numero, tipo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    //Dentro de ContaBancaria, crie os métodos sacar e depositar;

    sacar(valor){
        if(valor > this._saldo){
        return console.log("Saldo insuficiente");
        }
        this._saldo = this._saldo - valor;
        return this._saldo;
    }

    depositar(valor){
        this._saldo = this._saldo + valor;
        return this._saldo;
    }

    //Construa o getter e o setter de saldo;
    get saldo(){
        return this._saldo;
    }

    set saldo(valor){
        this._saldo = valor;
    }

}

/*Crie uma classe-filha chamada ContaCorrente que herda todos esses parâmetros e 
    ainda possua o parâmetro cartaoCredito;*/

class ContaCorrente extends ContaBancaria{
    constructor(agencia, numero, cartaoCredito){
        super(agencia, numero);
        this.tipo = 'corrente'; 
        this._cartaoCredito = cartaoCredito; 
    }

//Ainda em ContaCorrente, construa o getter e o setter de cartaoCredito;

    get cartaoCredito() {
        return this._cartaoCredito;
    }
    set cartaoCredito(valor){
        this._cartaoCredito = valor;
    }
}

//Crie uma classe-filha chamada ContaPoupanca que herda todos os parâmetros de ContaBancaria;

class ContaPoupanca extends ContaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'poupança';
    }
}

//Crie uma classe-filha chamada ContaUniversitaria que herda todos os parâmetros de ContaBancaria;

class ContaUniversitaria extends ContaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'universitaria';
    }

/*Faça com que o método saque de ContaUniversitaria apenas seja capaz de sacar 
valores menores que 500 reais.*/

    sacar(valor){
        if(valor > 500){
            return "Operação negada!"
        }
        this._saldo = this._saldo - valor;
        return this._saldo;
    }
}
