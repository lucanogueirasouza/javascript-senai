let titulo = document.getElementById("titulo-inicial")

let botao = document.getElementById("btn")

let botaoZerar = document.getElementById("btnZerar")

let contador = 0

botao.addEventListener("click", function(){ 
    titulo.innerText = `Você clicou ${contador += 1}`
})

botaoZerar.addEventListener("click", function(){
    titulo.innerText = "Titulo Inicial!"
    contador = 0
})