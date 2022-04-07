function magicSquare3x3(square) {
    soma0 = square[0][0] +square[0][1] + square[0][2];
    soma1 = square[1][0] +square[1][1] + square[1][2];
    
    verdadeiro = true
    falso = false
    contador = 0
    if (soma0 == soma1) {
        soma2 = square[2][0] +square[2][1] + square[2][2];
        contador = contador + 1
        if (soma1 == soma2) {
            contador = contador + 2
            soma3 = square[0][0] +square[1][0] + square[2][0];
            if (soma2 == soma3) {
                contador = contador + 3
                soma4 = square[0][1] +square[1][1] + square[2][1];
                if (soma3 == soma4) {
                    contador = contador + 4
                    soma5 = square[0][2] +square[1][2] + square[2][2];
                    if (soma4 == soma5) {
                        contador = contador + 5
                        soma6 = square[0][0] +square[1][1] + square[2][2];
                        if (soma5 == soma6) {
                            contador = contador + 6
                            soma7 = square[2][0] +square[1][1] + square[0][2];
                            if (soma6 == soma7) {
                                contador = contador + 7
                            } else {
                                contador = 0
                                console.log("Quadrado não magico");
                                retorno = falso;
                                return retorno;
                            }
                        } else {
                            console.log("Quadrado não magico");
                            retorno = falso;
                            return retorno;
                        }
                    } else {
                        console.log("Quadrado não magico");
                        retorno = falso;
                        return retorno;
                    }
                } else {
                    console.log("Quadrado não magico");
                    retorno = falso;
                    return retorno;
                }
            } else {
                console.log("Quadrado não magico");
                retorno = falso;
                return retorno;
            }
        } else {
            console.log("Quadrado não magico");
            retorno = falso;
            return retorno;
        }
    } else {
        console.log("Quadrado não magico");
        retorno = falso;
        return retorno;
    }
    if ( contador == 28) {
        console.log("Quadrado magico");
        retorno = verdadeiro;
        return retorno;
    }
}


////////////////////////////////////////
/////NÃO ALTERAR DAQUI PARA BAIXO///////
////////////////////////////////////////

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
