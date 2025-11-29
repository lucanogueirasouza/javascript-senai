const baixarArquivo = new Promise((resolve, reject) => {
    console.log("Baixando arquivo...")

    baixou = true

    setTimeout(() => {
    if (baixou == true) {
        resolve({
            arquivo: "Video.mp4",
            tamanho: "150mb",
            data: "29/11/2025",
        })
    } else {
        reject("Falha ao baixar o arquivo. Tente novamente mais tarde.")
    }
    }, 2000);
})

baixarArquivo
    .then((res) => {
        console.log(`Arquivo baixado: ${res.arquivo}\nTamanho: ${res.tamanho}\nData do Download: ${res.data}`)
    })

    .catch((err) => {
        console.log(err)
    })  