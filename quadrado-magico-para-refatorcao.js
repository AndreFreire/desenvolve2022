function magicSquare3x3(square) {
    let soma0 = square[0][0] + square[0][1] + square[0][2];
    let soma1 = square[1][0] + square[1][1] + square[1][2];
    let soma2 = square[2][0] + square[2][1] + square[2][2];
    let soma3 = square[0][0] + square[1][0] + square[2][0];
    let soma4 = square[0][1] + square[1][1] + square[2][1];
    let soma5 = square[0][2] + square[1][2] + square[2][2];
    let soma6 = square[0][0] + square[1][1] + square[2][2];
    let soma7 = square[2][0] + square[1][1] + square[0][2];
    
    let retorno;

    if (soma1 == soma2 && soma2 == soma3 && soma3 == soma4 && soma4 == soma5 && soma5 == soma6 && soma6 == soma7 ) {
        console.log("Quadrado magico")
        retorno = true;
        return retorno
    } else {
        console.log("Quadrado não magico");
        retorno = false;
        return retorno;
    }
    
}

//NÃO ALTERAR DAQUI PARA BAIXO

square = [[2, 7, 6], [9,5,1],[4,3,8]]
console.log("Esperado: quadrado magico")
t1 = magicSquare3x3(square) 

square = [[8,1,6], [3,5,7],[4,9,2]]
console.log("Esperado: quadrado magico")
t2 = magicSquare3x3(square) 

square = [[8,3,4], [1,5,9],[6,7,2]]
console.log("Esperado: quadrado magico")
t3 = magicSquare3x3(square) 

square = [[6,1,8], [7,5,3],[2,9,4]]
console.log("Esperado: quadrado magico")
t4 = magicSquare3x3(square) 

square = [[2, 7, 6], [9,1,1],[4,3,8]]
console.log("Esperado: quadrado NAO magico")
t5 = magicSquare3x3(square) 

square = [[8,1,6], [3,5,7],[4,9,3]]
console.log("Esperado: quadrado NAO magico")
t6 = magicSquare3x3(square) 

square = [[8,1,4], [1,5,9],[6,7,2]]
console.log("Esperado: quadrado NAO magico")
t7 = magicSquare3x3(square) 

square = [[7,5,3], [6,1,8], [2,9,4]]
console.log("Esperado: quadrado NAO magico")
t8 = magicSquare3x3(square) 

if(t1&&t2&&t3&&t4&&!t5&&!t6&&!t7&&!t8) {
    console.log("\nSEU CÓDIGO FUNCIONA, PARABENS!");
} else {
    console.log("\nSEU CÓDIGO NÃO FUNCIONA, =(");
}
