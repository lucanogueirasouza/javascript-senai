const container = document.getElementById("container")

fetch("https://dragonball-api.com/api/characters")
    .then((res) => res.json())

    .then((data) => { 
        console.log(data.items)

        data.items.forEach((elemento) => {
            const card = document.createElement("div")
            card.className  = "card"
            card.innerHTML = `
            <img src="${elemento.image}">
            <h2>${elemento.name}</h2>
            <p>Afiliação: ${elemento.affiliation}</p>
            <p>Genêro: ${elemento.gender}</p>
            <br>
            <h5>${elemento.description}</h5>
        `   

        container.appendChild(card)

        })
    })
