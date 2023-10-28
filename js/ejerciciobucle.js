/* crea un script que escriba los números del 1 al 500, indique cuales son los multiplos de 4 y de 9

  */

// for (let index = 1; index <= 500; index++) {
//     document.write(`${index}`);
//     if (index % 4===0)
//     {
//         document.write(" Multiplo de 4");
//     }
//     if (index % 9=== 0)
//     {
//         document.write(" Multiplo de 9");
//     }
//     if (index % 5===0) 
//     {
//         document.write("<br>------------------------<br>");
//     }
//     document.write(`<br>`);
    
// }

/* crea una web con un reloj que muestre las sig informacion: Jueves 29 de Octubre de 2015
12:02:58 PM */

const fechaP=document.getElementById('fecha')
const horaP=document.getElementById('hora')

let fecha = new Date();
let dia=fecha.getDate();  // devuelve la fecha
let posicionDia=fecha.getDay(); //devuelve la posicion del dia de la semana
let mes=fecha.getMonth(); //devuelve la posicion del mes
let anyo=fecha.getFullYear(); //  devuelve el año
let hora=fecha.getHours(); // devuelve la hora
let minuto=fecha.getMinutes(); //devuelve los minutos
let segundo=fecha.getSeconds(); //devuelve los segundos


const dias = [ "Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"]; // Arreglo dias
const meses = [
"Enero",
"Febrero",
"Marzo",
"Abril",
"Mayo",
"Junio",
"Julio",
"Agosto",
"Septiembre",
"Octubre",
"Noviembre",
"Diciembre",
];  //arreglo meses

setInterval(()=> {
    let fecha = new Date();
    let dia=fecha.getDate();  // devuelve la fecha
    let posicionDia=fecha.getDay(); //devuelve la posicion del dia de la semana
    let mes=fecha.getMonth(); //devuelve la posicion del mes
    let anyo=fecha.getFullYear(); //  devuelve el año
    let hora=fecha.getHours(); // devuelve la hora
    let minuto=fecha.getMinutes(); //devuelve los minutos
    let segundo=fecha.getSeconds(); //devuelve los segundos

    const fechaEspanyol=`${dias[posicionDia]} ${dia} de ${meses[mes]} de ${anyo}`;
    const horaActual= `${hora}:${minuto}:${segundo}`;

    fechaP.innerText=fechaEspanyol;
    horaP.innerText=horaActual;  

}, 1000);




 




