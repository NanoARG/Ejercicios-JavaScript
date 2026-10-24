let nombre = prompt("Ingresa tu nombre")

while (nombre === "") {
    alert("Debes ingresar un nombre")
    nombre = prompt("Ingresa tu nombre")
}

alert("Bienvenido a Roma Fitness " + nombre)  

let seguir = true

while (seguir) {  
    let opcion = prompt("1.Reservar clase\n2.Consultar horarios\n3.Salir")
    
    if (opcion === "1") {
        let clase = prompt("1.Crossfit\n2.Funcional\n3.Hyrox")
        switch (clase) {
            case "1":
                let reservaCrossfit = prompt("1.9hs\n2.10hs\n3.18hs")
                if (reservaCrossfit === "1") {
                    alert("Tu clase de las 9hs ha sido reservada")
                } else if (reservaCrossfit === "2") {
                    alert("Tu clase de las 10hs ha sido reservada")
                } else if (reservaCrossfit === "3") {
                    alert("Tu clase de las 18hs ha sido reservada")
                } else {
                    alert("Opción invalida")
                }
                break
            case "2":
                let reservaFuncional = prompt("1.11hs\n2.19hs\n3.20hs")
                if (reservaFuncional === "1") {
                    alert("Tu clase de las 11hs ha sido reservada")
                } else if (reservaFuncional === "2") {
                    alert("Tu clase de las 19hs ha sido reservada")
                } else if (reservaFuncional === "3") {
                    alert("Tu clase de las 20hs ha sido reservada")
                } else {
                    alert("Opción invalida")
                }
                break
            case "3":
                let reservaHyrox = prompt("1.15hs\n2.16hs\n3.17hs")
                if (reservaHyrox === "1") {
                    alert("Tu clase de las 15hs ha sido reservada")
                } else if (reservaHyrox === "2") {
                    alert("Tu clase de las 16hs ha sido reservada")
                } else if (reservaHyrox === "3") {
                    alert("Tu clase de las 17hs ha sido reservada")
                } else {
                    alert("Opción invalida")
                }
                break
            default:
                alert("Opcion incorrecta")
        }
    } else if (opcion === "2") {
        let horario = prompt("1.Horarios de Crossfit\n2.Horarios de Funcional\n3.Horarios de Hyrox")
        switch (horario) {
            case "1":
                alert("Crossfit\n9hs\n10hs\n18hs")
                break
            case "2":
                alert("Funcional\n11hs\n19hs\n20hs")
                break
            case "3":
                alert("Hyrox\n15hs\n16hs\n17hs")
                break
            default:
                alert("Opcion incorrecta")
        }
    } else if (opcion === "3") {
        alert("Sesión finalizada")
        seguir = false
    }else {
        alert("Opción no valida")
    }
}
