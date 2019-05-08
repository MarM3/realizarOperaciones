/*function suma() {
    let n1suma = prompt("Introduzca el primer operando: ");
    let n2suma = prompt("Introduzca el segundo operando: ");

    while (!isNaN(n1suma) && !isNaN(n2suma)) {
        
   //} else {
        n1suma = prompt("Introduzca el primer operando: ");
        n2suma = prompt("Introduzca el segundo operando: ");
    }
    let solucionsuma = parseInt(n1suma) + parseInt(n2suma);
        document.getElementById("n1suma").innerHTML = n1suma;
        document.getElementById("n2suma").innerHTML = n2suma;
        document.getElementById("solucionsuma").innerHTML = solucionsuma;
}*/
function Operacion (parN1, parN2){
    this.n1 = parN1;
    this.n2 = parN2;
    this.n1 = prompt("Introduzca el primer operando: ");
    validar(this.n1);
    this.n2 = prompt("Introduzca el segundo operando: ");
    validar(this.n2);
    this.suma = function(){
        let parRes = parseInt(this.n1) + parseInt(this.n2);
        return this.n1, this.n2, parRes;
    }
}
function sumar(){
    let n1suma;
    let n2suma;

    let solucionsuma = new Operacion(n1suma, n2suma);
    solucionsuma.suma();
    document.getElementById("n1suma").innerHTML = n1suma;
    document.getElementById("n2suma").innerHTML = n2suma;
    document.getElementById("solucionsuma").innerHTML = solucionsuma;
}

function resta() {
    let n1resta = prompt("Introduzca el primer operando: ");
    let n2resta = prompt("Introduzca el segundo operando: ");

    while (!isNaN(n1resta) && !isNaN(n2resta)) {
        
   // } else {
        n1resta = prompt("Introduzca el primer operando: ");
        n2resta = prompt("Introduzca el segundo operando: ");
    }
    let solucionresta = parseInt(n1resta) - parseInt(n2resta);
        document.getElementById("n1resta").innerHTML = n1resta;
        document.getElementById("n2resta").innerHTML = n2resta;
        document.getElementById("solucionresta").innerHTML = solucionresta;
}

function multiplicacion() {
    let n1multiplicacion = prompt("Introduzca el primer operando: ");
    let n2multiplicacion = prompt("Introduzca el segundo operando: ");

    while (!isNaN(n1multiplicacion) && !isNaN(n2multiplicacion)) {
        
    //} else {
        n1multiplicacion = prompt("Introduzca el primer operando: ");
        n2multiplicacion = prompt("Introduzca el segundo operando: ");
    }
    let solucionmultiplicacion = parseInt(n1multiplicacion) * parseInt(n2multiplicacion);
        document.getElementById("n1multiplicacion").innerHTML = n1multiplicacion;
        document.getElementById("n2multiplicacion").innerHTML = n2multiplicacion;
        document.getElementById("solucionmultiplicacion").innerHTML = solucionmultiplicacion;
}

function division() {
    let n1division = prompt("Introduzca el primer operando: ");
    validar(n1division);
    let n2division = prompt("Introduzca el segundo operando: ");
    validar(n2division);

    let soluciondivision = Math.floor(parseInt(n1division) / parseInt(n2division));
        document.getElementById("n1division").innerHTML = n1division;
        document.getElementById("n2division").innerHTML = n2division;
        document.getElementById("soluciondivision").innerHTML = soluciondivision;
}

function validar (operando){
    let patron = /^[+-]?[0-9]{1,9}(?:,[0-9]{1,9})?$/; //otro patron a usar /[+-]?\d+(.\d+)?$/
    while (!isNaN(operando) && !patron.test(operando)){
        operando1 = prompt("Vuelve a introducir el operando: ");
    }

    return operando;
}