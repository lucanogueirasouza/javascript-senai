let titulo = document.getElementById("titulo-inicial")

let botao = document.getElementById("btn")

botao.addEventListener("click", function(){ 
    titulo.innerText = "Titulo Alterado com Sucesso!"
})