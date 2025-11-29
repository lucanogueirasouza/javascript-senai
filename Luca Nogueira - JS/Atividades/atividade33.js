function baixarArquivo (callback) {
    console.log("Baixando arquivo...");

    setTimeout(() => {
        console.log("Download concluido...");
        callback()
    }, 4000);
}

function abrirArquivo() {
    console.log("Abrindo arquivo...");
}

baixarArquivo(abrirArquivo)
