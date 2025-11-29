// Programação Assincrona seria: Uma lingugagem não depende da outra para executar sua tarefa, ou seja, caso uma tarefa demore para executar, a linguagem não espera essa demora. O JavaScript usa essa função de programação assincrona. 

// ----------------------------------------------------------------

// Programação Sincrona

// console.log("1. Iniciando o Servidor")

// console.log("2. Executando o Servidor")

// console.log("3. Encerrando o servidor")

// Esse é uma programação síncrona, executa a função ao mesmo tempo.

// ---------------------------------------------------------------------------

// Programação Assincrona 


// setTimeout(() => {
//     console.log("1. Iniciando o Servidor")    
// }, 2000);

// console.log("2. Executando o Servidor")

// console.log("3. Encerrando o servidor")

// -----------------------------------------------------------------------------

// function assarPizza() {
//     setTimeout(() => {
//         console.log("Pizza Pronta!");
//     }, 2000);
// }


// console.log("Preparando Pizza...");
// assarPizza()
// console.log("Comendo a Pizza.");

// ------------------------------------------------------------------------

// function assarPizza(callback) {
//     setTimeout(() => {
//         console.log("Pizza Pronta")
//         callback()
//     }, 2000);
// }   

// function comerPizza() {
//     console.log("Comendo a Pizza.")
// }


// console.log("Preparando a Pizza...")

// assarPizza(comerPizza)

// //  

// function darNome(callback) {
//     setTimeout(() => {
//         nome = "Luca"
//         callback()
//     }, 2000);
// }

// function mostrarNome() {
//     console.log(nome)
// }

// darNome(mostrarNome)

// 

// let usuario

// function criarUsuario(callback) {
//     setTimeout(() => {
//         usuario = {
//             nome: "Luca",
//             idade: 17,
//             email: "lns12@gmail.com"
//         }
//         callback()
//     }, 2000);
// }

// function mostrarUsuario() {
//     console.log(usuario.email)
// }


// criarUsuario(mostrarUsuario)

// //  

// function verificarResultado (callbacksucesso, callbackerro) {
//     let result = 1 + 1

//     if (result == 2) {
//         callbacksucesso()
//     } else { 
//         callbackerro()
//     }
// }

// function sucesso() {
//     console.log("Uhhhuuuuuuuuuuul! Número 2")
// }

// function erro() {
//     console.log("XIIIIIIIIIII! Número não é 2")
// }

// verificarResultado(sucesso, erro)

// 

// Promisses 

// let pizzaChegou = true

// const pedido = new Promise((resolve, reject) => {
//     if (pizzaChegou == true) {
//         resolve("A Pizza chegou!")
//     } else {
//         reject("Pedido cancelado.")
//     }
// })

// pedido
//     .then(() => {
//         console.log("BOOOOOUUUUA")
//     })

//     .catch(() => {
//         console.log("POBRETA!!")
//     })

// 

// const verificarResultado = new Promise((resolve, reject) => {
//     let resultado = 1 + 1

//     if (resultado == 2) {
//         resolve("DEU BOMMMM; NUMERO 2")
//     } else {
//         reject("DEU RUIM :(")
//     }
// })

// verificarResultado
//     .then((res) => {
//         console.log(res);
//     })

//     .catch((err) => {
//         console.log(err);
//     })

// 

const buscarUsuario = new Promise((resolve, reject) => {
    console.log("Buscando usuário no Banco de Dados...")

    setTimeout(() => {
        let encontrado = true

        if (encontrado == true) {
            resolve({
                nome: "Luca",
                idade: 16,
                profissao: "Programador"
            })
        } else {
            reject("Usuário não encontrado")
        }
    }, 2000);

})

buscarUsuario
    .then((res) => {
        console.log(`Nome do usuário: ${res.nome}`)
        console.log(`Idade do usuário: ${res.idade}`)
    })

    .catch(() => {
        console.log(res)
    })
