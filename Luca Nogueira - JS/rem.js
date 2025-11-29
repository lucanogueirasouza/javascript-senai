const nome = document.getElementById("nome")
const especie = document.getElementById("especie")
const estatus = document.getElementById("status")
const localizacao = document.getElementById("localizacao")
const foto = document.getElementById("foto")


fetch("https://rickandmortyapi.com/api/character")
    .then((res) => res.json())

    .then((data) => {
        nome.innerText = data.results[0].name
        especie.innerText = data.results[0].species
        estatus.innerText = data.results[0].status
        localizacao.innerText = data.results[0].location.name
    })
