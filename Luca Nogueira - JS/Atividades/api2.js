const container = document.getElementById("container")

fetch("https://rickandmortyapi.com/api/character")
    .then((res) => res.json())
    .then((data) => {
        console.log(data.results)

        data.results.forEach((elemento) => {
            const card = document.createElement("div")
            card.className  = "card"
            card.innerHTML = `
            <img src="${elemento.image}">
            <h2>${elemento.name}</h2>
            <p>${elemento.species}</p>
        `

        container.appendChild(card)
        
        })

    })

    .catch((err) => console.log(err))