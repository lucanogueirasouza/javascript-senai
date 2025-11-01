let tipo = "visitante"

switch (tipo) {
    case "visitante":
        console.log("Acesso somente à leitura")
        break;

    case "editor": 
        console.log("Acesso Limitado")
        break
    
    case "admin": 
        console.log("Acesso total")
        break

    default:
        console.log("Coloque um tipo válido")
        break;
}