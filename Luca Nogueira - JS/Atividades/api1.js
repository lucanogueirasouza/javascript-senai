const id = document.getElementById("id")
const nome = document.getElementById("name")
const username = document.getElementById("username")
const phone = document.getElementById("phone")
const rua = document.getElementById("rua")
const cidade = document.getElementById("cidade")

fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json()) //transforma json em objto javascript

    .then((data) => { //pegando as inf que foi transf em obj e mostrando no console
        nome.innerText = `nome do usuário: ${data[0].name}`
        id.innerText = `id do usuário: ${data[0].id}`
        username.innerText = `username do usuário: ${data[0].username}`
        phone.innerText = `telefone do usuário: ${data[0].phone}`
        rua.innerText = `Rua do usuario: ${data[0].address.street}`
        cidade.innerText = `Cidade do usuario: ${data[0].address.city}`
    })
