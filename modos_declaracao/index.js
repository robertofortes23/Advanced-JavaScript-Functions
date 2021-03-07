// Declaração de função (Function hoisting).
falaOi();
function falaOi(){
    console.log('Oie');
}

// Firt-class objects (Objetos de primeira classe)
// Function expression
const souUmDado = function(){
    console.log('Sou um dado.')
}

function executaFuncao(funcao) {
    funcao();
}
executaFuncao(souUmDado);

// Arrow function
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
};
funcaoArrow();

// Dentro de um objeto
const obj = {
    falar: function(){
        console.log("Falando portugues.");
    }
}
obj.falar()

//OU
const obj = {
    falar(){
        console.log("Falando portugues.");
    }
}
obj.falar()