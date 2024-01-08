const h1 = document.querySelector("h1")
const form = document.querySelector("#form")
const input1 = document.querySelector("#calculo1")
const input2 = document.querySelector("#calculo2")
const boton = document.querySelector("#calcular")
const result = document.querySelector("#result")

form.addEventListener("submit", enviar)

function enviar(event){
    console.log({event})
    event.preventDefault()
    const concatenacion = input1.value + input2.value
    result.innerHTML = "Resultado = " + concatenacion
} 

