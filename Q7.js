dia = "Terça"

switch(dia.toUpperCase()) {
    case "DOMINGO":
        console.log("PRAIA")
        break
    case "SEGUNDA":
        console.log("REUNIÃO")
        break
    case "TERÇA":
        console.log("PALESTRA")
        break
    case "QUARTA":
        console.log("WORKSHOP")
        break
    case "QUINTA":
        console.log("TRABALHO REMOTO")
        break
    case "SEXTA ":
        console.log("AGENDAMENTO SEMANAL")
        break
    case "SABADO":
        console.log("SHOPPING")
        break
    default:
        console.log("Valor inválido")
        break
}