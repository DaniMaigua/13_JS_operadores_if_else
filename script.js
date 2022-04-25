/*console.log("Funciona")

let edad = 23
console.log("Me llamo Juana y mi edad es : " + edad)
edad= edad+1
console.log("Me llamo Juana y mi edad es : " + edad)


let edad = 23
console.log("Me llamo Juana y mi edad es : " + ++edad)
++incrementa uno, al final edad++ incrementa uno para el siguiente print
console.log("Me llamo Juana y mi edad es : " + edad++)
console.log ("Juana tiene" + edad)


// modulo es la diferencia/restante en la division

let num1 = 0
let num2 = 2

let modulo = num1 % num2
console.log ("el modulo es : " + modulo)

////////OPERADORES ARITMETICOS

let edad = 23
edad = edad + 1
siempre utilizaremos operadores aritméticos

edad +=1

///////////OPERADORES RELACIONALES- devuelven true o false

console.log (2>1)
console.log (2 != 1)
console.log (2>=1)

siempre consultamos por una condicion, para ver si es correcta y que esto ejecute la funcion
if ( 2>1 ) {
    console.log ("2 es mayor a 1")
    console.log ("estoy adentro del if")
}

let pago = true 

if ( pago == true ) {
console.log ("dejar ver la pelicula")
 } 

let edadBoliche = 17

if ( edadBoliche >= 18 ) {
   console.log ("dejar pasar al boliche")
 }else {
 console.log("no podes ingresar")
 }

// else - se ejecuta si no entra al primer bloque {}
 
let pago=true
let edad= 21

if (pago==true && edad >=18) {
console.log ("dejar ver la pelicula")
 } else{
    console.log("no podes ver la pelicula o cumpli 18")
 }

 si alguno de los factores no coincide, sale else por defecto

let pago = false
let tieneCupon= true

if (pago==true || tieneCupon==true) {
     console.log ("ver la pelicula")
} else{
      console.log("consegui cupon o paga!")
}


let Jazmin = 26
let Marcos = 26

//codear un programa que dice quien es mas grande

if (Jazmin > Marcos ) {
    console.log("Jazmin es mas grande")
}else if (Marcos > Jazmin) {
    console.log("marcos es mas grande")
} else {
    console.log (" Jazmin y Marcos tiene la misma edad")
}

/* ELSE IF el uso es infinito */

////////////////////CALCULADORA//////////////////

let num1 = parseFloat (prompt( "ingresa el primer numero"))
let num2 = parseFloat (prompt("ingresa el segundo numero"))

let operacion = parseInt (prompt( "Introduzca : \n 1:sumar \n 2:restar \n 3:multiplicar \n 4:dividir"))

if (operacion ==1) {
    resultado = num1+num2
    alert (resultado)
} else if (operacion ==2) {
    resultado = num1-num2
    alert (resultado)
} else if (operacion ==3) {
    resultado =num1*num2
    alert (resultado)
} else if (operacion ==4) {
    resultado = num1/num2
    alert (resultado)
} else  {
    alert ("por favor ingresa una opcion válida")
}

/*PARSEFLOAT TOMA DECIMALES POR ESO LO PONEMOS
PARSE INT PERMITE TOMAR NROS PERO NO DECIMALES*/

switch (operacion) {
    case 1:
    resultado = num1+num2
    alert (resultado)
    break

    case 2:
        resultado = num1-num2
        alert (resultado)
    break

    case 3:
        resultado =num1*num2
        alert (resultado)
    break

    case 4:
        resultado = num1/num2
        alert (resultado)
    break

    default: alert ("Item ingresado, no valido")
}

console.log ("sali del switch")

/*1.9 min*/

/*SWITCH utilizar cuando los casos son pocos y enteros*/

/*let nota = 10

if (nota < 5) {
    calificacion = "insuficiente"
} else if (nota < 6) { 
    calificacion = "suficiente"
} else if (nota < 8) {
    calificacion = "bien"
} else if (nota <= 9) {
    calificacion = "notable"
} else {
    calificacion = "sobresaliente"
}

console.log ("He obtenido una calificación " + calificacion)*/


let nota = 0

switch (nota) {
    case 10:
    calificacion = "capo total"
    break 
    case 9:
    case 8:
        calificacion = "notable"
        break 
    case 7:
    case 6:
        calificacion = "bien"
    break
    case 5:
    case 4:
        calificacion = "suficiente"
    break
    case 3:
    case 2:
    case 1:
    case 0:
        calificacion = "insuficiente"
    break
    default:
    //cualquier otro caso
        calificacion = "nota erronea"
}

console.log ("He obtenido una calificación " + calificacion)

