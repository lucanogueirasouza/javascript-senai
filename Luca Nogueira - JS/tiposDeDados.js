// Tipos de dados: Primtivos 

// ----- EXPLICAÇÃO DE CADA UM -----

// strings: letras, frases, etc
// number: int/float, numeros em geral 
// boolean: bool, true ou false 
// null: uma variavel vazia, ou nula, the same thing, you know?
// undefined: algo indefinido , ex: tipo valor ....

// ----- STRING -----

let nome = "Cristiano Ronaldo"
var cristiano = "Ronaldo"
const cpf = 40129349304

console.log(nome)

// ----- INT/FLOAT OU NUMBER -----

let idade = 18 
console.log(idade)

// ----- BOOLEAN/BOOL -----

let vivo = true
console.log(vivo)

// ----- NULL -----

let desconto = null

if (desconto == null) {
    console.log("Zero Desconto.")
} else {
    console.log("Desconto ...")
}

// ----- UNDEFINED -----

let variavel_indefinida


// ------------------------------------------------------------------------------------------------

// Tipos de Dados: Estruturais 

// --- EXPLICAÇÃO DE CADA UM: ---

// Array: lista
// objetos: Dicionario 

// ----- ARRAY -----

let frutas = ["Banana", "Maçã", "Tomate"]

console.table(frutas) // função table
console.log(frutas[0])
console.log(frutas[0], frutas[1]) // chamar dois indices de uma lista

// -----

let idades = [13, 16, 19, 22, 30]

let mercado = ["Arroz", 20, "Feijão", 22, true, null]

// ----- OBJETOS -----

let aluno = {
    Nome : "Luca",
    Idade: 16,
    CPF: 192849202393,
    Sexo: "Masculino",
    Ano: "2° Ano, Médio",
}

console.log(aluno.Nome)

// O Aluno Luca tem 16 Anos
console.log("O Aluno", aluno.Nome, "Tem", aluno.Idade, "Anos")
console.log(`O Aluno ${aluno.Nome} tem ${aluno.Idade} Anos`)

