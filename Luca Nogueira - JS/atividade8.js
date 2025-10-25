// A pessoa só pode entrar na festa se tiver convite OU estiver na lista de convidados 

let temConvite = true
let estaNaLista = false

let autorizado = (temConvite == true || estaNaLista == true)

console.log(`A pessoa pode entrar na festa? ${autorizado}`)