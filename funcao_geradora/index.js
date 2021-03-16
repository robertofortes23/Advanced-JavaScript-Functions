function* gerador1(){
    let i = 0

    while(true){
        yield i;
        i++
    }
}
const g1 = gerador1();
console.log(g1.next().value); //0
console.log(g1.next().value); //1
console.log(g1.next().value); //2 
console.log(g1.next().value); //3
console.log(g1.next().value); //4


function* gerador3(){
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4(){
    yield* geradora3();
    yield 3;
    yield 4;
    yield 5;
}

const g4 = geradora4();
for(let valor of g4){
    console.log(valor);
}

function* gerador5(){
    yield function(){
        console.log('Teste n1')
    }

    yield function(){
        console.log('Teste n2')
    }
}

const g5 = gerador5();
const func1 = g5.next().value; //Teste n1
const func2 = g5.next().value; //Teste n2
