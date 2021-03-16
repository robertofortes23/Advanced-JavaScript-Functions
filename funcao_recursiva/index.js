//Função que se chama de volta.
function recursiva(max){
    if (max >= 10) return; //Limite para a função acabar
    max++; //Incrementando nas chamadas da função
    console.log(max);
    recursiva(max);
}

recursiva(0)