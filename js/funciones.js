function suma() {
    let n1suma = prompt("Introduzca el primer operando: ");
    let n2suma = prompt("Introduzca el segundo operando: ");

    if (!isNaN(n1suma) && !isNaN(n2suma)) {
        let solucionsuma = Number(n1suma) + Number(n2suma);
        document.getElementById("n1suma").innerHTML = n1suma;
        document.getElementById("n2suma").innerHTML = n2suma;
        document.getElementById("solucionsuma").innerHTML = solucionsuma;
    } else {
        n1suma = prompt("Introduzca el primer operando: ");
        n2suma = prompt("Introduzca el segundo operando: ");
    }
}

function resta() {
    let n1resta = prompt("Introduzca el primer operando: ");
    let n2resta = prompt("Introduzca el segundo operando: ");

    if (!isNaN(n1resta) && !isNaN(n2resta)) {
        let solucionresta = n1resta - n2resta;
        document.getElementById("n1resta").innerHTML = n1resta;
        document.getElementById("n2resta").innerHTML = n2resta;
        document.getElementById("solucionresta").innerHTML = solucionresta;
    } else {
        n1resta = prompt("Introduzca el primer operando: ");
        n2resta = prompt("Introduzca el segundo operando: ");
    }
}

function multiplicacion() {
    let n1multiplicacion = prompt("Introduzca el primer operando: ");
    let n2multiplicacion = prompt("Introduzca el segundo operando: ");

    if (!isNaN(n1multiplicacion) && !isNaN(n2multiplicacion)) {
        let solucionmultiplicacion = n1multiplicacion * n2multiplicacion;
        document.getElementById("n1multiplicacion").innerHTML = n1multiplicacion;
        document.getElementById("n2multiplicacion").innerHTML = n2multiplicacion;
        document.getElementById("solucionmultiplicacion").innerHTML = solucionmultiplicacion;
    } else {
        n1multiplicacion = prompt("Introduzca el primer operando: ");
        n2multiplicacion = prompt("Introduzca el segundo operando: ");
    }
}

function division() {
    let n1division = prompt("Introduzca el primer operando: ");
    let n2division = prompt("Introduzca el segundo operando: ");

    if (!isNaN(n1division) && !isNaN(n2division)) {
        let soluciondivision = n1division / n2division;
        document.getElementById("n1division").innerHTML = n1division;
        document.getElementById("n2division").innerHTML = n2division;
        document.getElementById("soluciondivision").innerHTML = soluciondivision;
    } else {
        n1division = prompt("Introduzca el primer operando: ");
        n2division = prompt("Introduzca el segundo operando: ");
    }
}