// multiplicar un numero sin el signo de multiplicacion 
const multiply = (a, b) => {
    let resultado = 0
    const positivo = Math.abs(b) == b
    for (i = 0; < Math.abs(b); i++){
        resultado = positivo ? resultado + a : resultado -a 
    }

    return resultado
}

const a = multiply(30, 60)
console.log(a)