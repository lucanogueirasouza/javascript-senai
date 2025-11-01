// Crie duas variaveis:
//  - valorCompra 
//  - clienteFrequente
// A promoção só é valida de o cliente for frequente e a compra for maior que 100 reais. 


let valorCompra = 500
let clienteFrequente = true 

let autorizado = (valorCompra > 100 && clienteFrequente == true)

console.log(`A compra do cliente tem direito à desconto? ${autorizado}`)



