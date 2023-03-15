

const array = [10,30,45,67,99]

//1
const quintuplos = array.map((elemento,indice,array) => {
    const calculo = elemento * 5
    return calculo
})

console.log(quintuplos)

//2
const metades = array.map((elemento) => {
    const calculo2 = elemento / 2
    return calculo2
})
console.log(metades)