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
    this.res = 0;
    this.suma = function(){
        this.res = parseInt(this.n1) + parseInt(this.n2);
        //return this.res;
    };
    this.resta = function(){
        this.res = parseInt(this.n1) - parseInt(this.n2);
        //return this.res;
    };
    this.multiplicacion = function(){
        this.res = parseInt(this.n1) * parseInt(this.n2);
       // return this.res;
    };
    this.division = function(){
        this.res = parseInt(this.n1) / parseInt(this.n2);
        //return this.res;
    };
}

function sumar(){
    let n1suma = parseFloat(prompt("Introduzca el primer operando: "));
    validar(n1suma);

    let n2suma = parseFloat(prompt("Introduzca el segundo operando: "));
    validar(n2suma);

    let ope1 = new Operacion(n1suma, n2suma);

    ope1.suma();
    resultados("n1suma", "n2suma", "solucionsuma", ope1);
}

function restar(){
    let n1resta = parseFloat(prompt("Introduzca el primer operando: "));
    validar(n1resta);

    let n2resta = parseFloat(prompt("Introduzca el segundo operando: "));
    validar(n2resta);

    let ope1 = new Operacion(n1resta, n2resta);

    ope1.resta();
    resultados("n1resta", "n2resta", "solucionresta", ope1);
}

function multiplicar(){
    let n1multiplicacion = parseFloat(prompt("Introduzca el primer operando: "));
    validar(n1multiplicacion);

    let n2multiplicacion = parseFloat(prompt("Introduzca el segundo operando: "));
    validar(n2multiplicacion);

    let ope1 = new Operacion(n1multiplicacion, n2multiplicacion);

    ope1.multiplicacion();
    resultados("n1multiplicacion", "n2multiplicacion", "solucionmultiplicacion", ope1);
}

function dividir(){
    let n1division = parseFloat(prompt("Introduzca el primer operando: "));
    validar(n1division);

    let n2division = parseFloat(prompt("Introduzca el segundo operando: "));
    validar(n2division);

    let ope1 = new Operacion(n1division, n2division);

    ope1.division();
    resultados("n1division", "n2division", "soluciondivision", ope1);
}

function resultados (n1, n2, res, obj){
    document.getElementById(n1).innerHTML = obj.n1;
    document.getElementById(n2).innerHTML = obj.n2;
    document.getElementById(res).innerHTML = obj.res;
}

/*function resta() {
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
*/
function validar (operando){
    let patron = /^[+-]?\d+(.\d+)?$/; //otro patron a usar /^[+-]?[0-9]{1,9}(?:,[0-9]{1,9})?$/
    //let operando1;

    while (!isNaN(operando) || patron.test(operando)){
        operando = prompt("Vuelve a introducir el operando: ");
    }

    return operando;
}