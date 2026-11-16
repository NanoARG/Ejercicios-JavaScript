let nombre = prompt("Ingresa tu nombre")

while (nombre === "") {
    alert("Debes ingresar un nombre")
    nombre = prompt("Ingresa tu nombre")
}

function darBienvenida(nombre) {
    alert("Bienvenido " + nombre)
}

darBienvenida(nombre)

function mostrarMenu() {

    let opcion = prompt("1.Reservar clase\n2.Consultar horarios\n3.Salir")
    
    return opcion
}

function confirmarReserva(horario) {
    alert("Tu clase de las " + horario + " ha sido reservada.")
}

const mostrarError = () => {
    alert("Opción inválida")
}

let seguir = true

while (seguir) {  
    let opcion = mostrarMenu()
    
    if (opcion === "1") {
        let clase = prompt("1.Crossfit\n2.Funcional\n3.Hyrox")
        switch (clase) {
            case "1":
                let reservaCrossfit = prompt("1.9hs\n2.10hs\n3.18hs")
                if (reservaCrossfit === "1") {
                    confirmarReserva("9hs")
                } else if (reservaCrossfit === "2") {
                    confirmarReserva("10hs")
                } else if (reservaCrossfit === "3") {
                    confirmarReserva("18hs")
                } else {
                    mostrarError()
                }
                break
            case "2":
                let reservaFuncional = prompt("1.11hs\n2.19hs\n3.20hs")
                if (reservaFuncional === "1") {
                    confirmarReserva("11hs")
                } else if (reservaFuncional === "2") {
                    confirmarReserva("19hs")
                } else if (reservaFuncional === "3") {
                    confirmarReserva("20hs")
                } else {
                    mostrarError()
                }
                break
            case "3":
                let reservaHyrox = prompt("1.15hs\n2.16hs\n3.17hs")
                if (reservaHyrox === "1") {
                    confirmarReserva("15hs")
                } else if (reservaHyrox === "2") {
                    confirmarReserva("16hs")
                } else if (reservaHyrox === "3") {
                    confirmarReserva("17hs")
                } else {
                    mostrarError()
                }
                break
            default:
                mostrarError()
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
    } else {
        mostrarError()
    }
}
