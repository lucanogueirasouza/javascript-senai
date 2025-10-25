// Mostrar em qual faixa etária a pessoa está.  

// Regras:
// Menor que 12 → "Criança"
// De 12 a 17 → "Adolescente"
// De 18 a 59 → "Adulto"
// 60 ou mais → "Idoso"

let idade = 18

if (idade < 12) {
    console.log("Você é uma criança")
} else if (idade >= 12 && idade < 18) {
    console.log("Você é um adolescente")
} else if (idade >= 18 && idade < 60) {
    console.log("Você é um adulto")
} else {
    console.log("Você é um idoso")
}