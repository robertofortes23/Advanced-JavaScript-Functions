(function(idade, peso, altura){
    const sobrenome = 'Fortes';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome(){
        console.log(criaNome('Roberto'));
    }

    falaNome();
    console.log(idade, peso, altura);
})(22, 80, 1.80);