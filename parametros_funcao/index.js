const conta = (...args) => {
    console.log(args);
}
conta('+', 1, 2, 3, 4, 5)


console.log('######');


function funcao() {
    let total = 0;
    for (let argumento of arguments){
        total+= argumento;
    }
    console.log(total);
}
funcao(1,2,3,4,5,6,7,8)


console.log('######');


function outrafuncao(a,b){
    console.log(a+b) // NaN
}
outrafuncao(3)