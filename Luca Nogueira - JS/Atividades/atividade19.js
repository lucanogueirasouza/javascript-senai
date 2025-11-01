// Crie um switch para somar, subtrair, multiplicar ou dividir dois números, com base na operação
// ("+", "-", "*", "/").

let numero1 = 6
let numero2 = 4

let sinal = "+"

switch (sinal) {
    case "+":
        console.log(numero1 + numero2)
        break;

    case "-":
        console.log(numero1 - numero2)
        break;

    case "*":
        console.log(numero1 * numero2)
        break;

    case "/":
        console.log(numero1 / numero2)
        break;

    default:
        console.log("Insira um sinal válido.")
        break;
}