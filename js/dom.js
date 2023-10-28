// const botonGoId = document.getElementById("botonCardGo1"); // busco un elemento segun su id y lo asigno una var
// console.log(botonGoId); //  Muestro en Consola

// const botonGoClass = document.getElementsByClassName('botonGoClass'); //busco un elemento segun su Class y lo asigno una var
// console.log(botonGoClass); //  Muestro en Consola

// const botonGoTags = document.getElementsByTagName('a');// busco un elemento segun su etiqueta y asigno una var
// console.log(botonGoTags);  //  Muestro en Consola

// const botonGoA = document.querySelector('#botonCardGo1');// busco un elemento segun id #
// console.log(botonGoA);  //  Muestro en Consola

// const botonGoB = document.querySelector('.botonGoClass');// busco un elemento segun su clase . (pueden ser otros atributos tb)
// console.log(botonGoB);  //  Muestro en Consola

// const botonGoAll = document.querySelectorAll('.botonGoClass'); // busco todos los elementos segun su clase .
// console.log(botonGoAll);  //  Muestro en Consola

// const titulo=document.getElementById("tituloUno");

const errorUsuarioVar=document.getElementById("errorUsuarioId"); // busco el mensaje de error y asigno a variable
const errorPasswordVar=document.getElementById("errorPasswordId"); // busco el mensaje de error y asigno a variable
const errorConfirmPasswordVar=document.getElementById("errorConfirmPasswordId"); // busco el mensaje de error y asigno a variable


errorUsuarioVar.classList.add("d-none"); // escondo el mensaje de error usuario
errorPasswordVar.classList.add("d-none"); // escondo el mensaje de error password
errorConfirmPasswordVar.classList.add("d-none"); // escondo el mensaje de error confirm password

const VarBotonRegistro=document.getElementById("btnRegId"); // busco el boton de registro y lo asig a una variable

const VarInputUsuario=document.getElementById("inputUsuarioId");// busco elem HTML  y asigno a variable
console.log (VarInputUsuario); //muestro todo la linea HTML correspondiente
const VarInputPassword=document.getElementById("inputPasswordId");// busco elem HTML  y asigno a variable
console.log (VarInputPassword);//muestro todo la linea HTML correspondiente
const VarInputConfirmPassword=document.getElementById("inputConfirmPasswordId");// busco elem HTML  y asigno a variable
console.log (VarInputConfirmPassword);//muestro todo la linea HTML correspondiente


const objUsuario = {  // construyo un objeto usuario para que los datos sobrevivan al concluir el evento
    user:"",
    pass:"",
    conf:"",   
};
console.log(objUsuario) // muestro objeto obtenido



const cambiosInputs = (evento) => {   // funcion cambios en inputs (Devuelve un objeto gigante!)
    objUsuario[evento.target.name]=evento.target.value; // Creo un objeto usuario para que los valores vivan  
    // cuando el evento se acabe. Ademas target.value contiene todo lo que la persona esta escribiendo

    console.log(objUsuario) // Ver en la consola bien el comportamiento, muy interesante

    if (evento.target.name==="user"&& evento.target.value !== "") //Verifica si no esta vacio
    {
        errorUsuarioVar.classList.add("d-none"); // oculta el mensaje rojo mientras escribe
    } 
    else if (evento.target.name === "pass" && evento.target.value !== "" ) //verifica si no esta vacio
    {
        errorPasswordVar.classList.add("d-none"); // oculta el mensaje rojo mientras escribe
    } 
    else if (evento.target.name === "conf" && evento.target.value !== "" ) //Verifica si no esta vacio
    {
        errorConfirmPasswordVar.classList.add("d-none"); // oculta el mensaje rojo mientras escribe
    }
  
};

const enviarRegistro = (ev) => {
    ev.preventDefault(); // previene que la pagina se recargue
    
    if (!objUsuario.user && !objUsuario.pass && !objUsuario.conf) // verif si no existe nada en los tres campos
        {        
        errorUsuarioVar.classList.remove("d-none"); //muestro el mensaje de error usuario
        errorPasswordVar.classList.remove("d-none"); // muestro el mensaje de error password
        errorConfirmPasswordVar.classList.remove("d-none"); // muestro el mensaje de error confirm password
        };
    if ( !objUsuario.user)
        {
        errorUsuarioVar.classList.remove("d-none");
        }
    if (!objUsuario.pass)
        {
       errorPasswordVar.classList.remove("d-none");
        }
    if (!objUsuario.conf)
        {
        errorConfirmPasswordVar.classList.remove("d-none");
        }
    if (objUsuario.user && objUsuario.pass && objUsuario.conf)
        {
        console.log(objUsuario);
        }
};

VarInputUsuario.addEventListener('input',cambiosInputs); // es como una funcion (video Dom Time 1:06:53)
VarInputPassword.addEventListener('input',cambiosInputs);
VarInputConfirmPassword.addEventListener('input',cambiosInputs);



VarBotonRegistro.addEventListener('click',enviarRegistro)


// setTimeout(()=> {
//     titulo.innerText= "Hola Mundo";
// },3000);

// const divPrincipalVar = document.getElementById("divPrincipalId");

// console.log(divPrincipalVar)   //  Muestro en Consola
// const p=document.createElement("p");

// p.innerText="Soy un párrafo desde Js"
// divPrincipalVar.appendChild(p)
// console.log(p);   //  Muestro en Consola

// const funcionBoton=()=> {
//     console.log("Clicksss");   //  Muestro en Consola
//     alert("boton apretado");
// };

// const funcionEjecutadaHtml1=()=>{
//     console.log("html");    // Muestro en Consola

// };
// botonGoId.addEventListener('click',funcionBoton);

