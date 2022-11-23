// Challenge 4: Encuentra la contraseña de tu amigo

// Problema

// Un amigo compró 5 BitCoins en 2008. El problema es que lo tenía en un monedero digital... ¡y no se acuerda de la contraseña!

// Nos ha pedido ayuda. Y nos ha dado algunas pistas:

// - Es una contraseña de 5 dígitos.
// - La contraseña tenía el número 5 repetido como mínimo dos veces.
// - El número a la derecha siempre es mayor o igual que el que tiene a la izquierda.

// Nos ha puesto algunas ejemplos:
// 55678 es correcto lo cumple todo
// 12555 es correcto, lo cumple todo
// 55555 es correcto, lo cumple todo
// 12345 es incorrecto, no tiene el 5 repetido.
// 57775 es incorrecto, los números no van de forma creciente

// Dice que el password está entre los números 11098 y 98123. ¿Le podemos decir cuantos números cumplen esas reglas dentro de ese rango?

// Cómo enviar la solución
// Envía la solución con el comando submit, y el número de passwords que cumplen el criterio junto con el password que está en el índice 55 de la lista de passwords válidos, separado por un guión.

// Por ejemplo, para 87 resultados y el password 35522 en la posición 55 sería:

// $ submit 87-35522

export const challenge04 = () => {
    let start = 11098
    const end = 98123
    const passwords =  []
    // - Es una contraseña de 5 dígitos.
    for (start; start <= end; start++) {
        passwords.push(start)
    }

    const validPasswords = passwords.filter(numberAnalizer)
    console.log(validPasswords.length)
    console.log(validPasswords[55])

    console.log(`submit ${validPasswords.length}-${validPasswords[55]}`)
}


export const numberAnalizer = (number) => {
    const numberToString = String(number)

    const numberfive = numberToString.includes('55')
    
    const numberCrescent = numberToString.split('').every((number, index, array) => {
        return index === 0 || number >= array[index - 1]
    })

    return numberfive && numberCrescent

}

challenge04()


