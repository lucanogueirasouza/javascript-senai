// O Cliente recebe desconto se: 
// - For cliente VIP 
// - OU tiver feito uma compre acima de R$ 500

let clienteVIP = true 
let valorCompra = 250

let desconto = (clienteVIP == true || valorCompra > 500)

console.log(`O Cliente pode ter desconto? ${desconto}`)