function Pessoa(nome, sobrenome){
    //Atributos ou métodos privados.
    const ID = 1234;
    const metodoInterno = function() {
        console.log("Não acessado externamente");
    };

    //Atributos ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo() = function(){
        console.log(this.nome + ': sou um método.')
    }
}

const p1 = new Pessoa('Roberto', 'Fortes');
const p1 = new Pessoa('Roberto', 'Gomes');
p2.metodo();