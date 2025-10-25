// Regras:
// Menos de 15 → "Está frio!"
// De 15 a 30 → "Clima agradável!"
// Acima de 30 → "Está quente!"

let temperatura = 31
    
if (temperatura < 15) {
    console.log("Está frio.")
} else if (temperatura >= 15 && temperatura <= 30) {
    console.log("Clima Agradável.")
} else { 
    console.log("Está quente.")
}