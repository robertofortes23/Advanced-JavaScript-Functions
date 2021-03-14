//Global
//Habilidade que a função tem de acessar seu escopo lexo

function retornaFuncao(nome){
    return function(){
        return nome;
    };
}

const funcao = retornaFuncao('Roberto');
const funcao2 = retornaFuncao('Fortes');

console.log(funcao);
console.log(funcao2);

console.log(funcao(), funcao2());