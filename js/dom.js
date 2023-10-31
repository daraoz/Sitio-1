
const varInpUser=document.getElementById("inputUsuarioId"); // busco elem HTML  y asigno a variable
console.log(varInpUser)

const varInpPass=document.getElementById("inputPasswordId");// busco elem HTML  y asigno a variable
console.log(varInpPass)

const varInpConfPass=document.getElementById("inputConfirmPasswordId");// busco elem HTML  y asigno a variable
console.log(varInpConfPass)

const varBtnReg=document.getElementById("btnRegId"); // busco el boton de registro y lo asig a una variable
console.log(varBtnReg)

const varErrUser=document.getElementById("errorUsuarioId"); // busco el mensaje de error y asigno a variable
console.log(varErrUser)

const varErrPass=document.getElementById("errorPasswordId"); // busco el mensaje de error y asigno a variable
console.log(varErrPass)

const varErrConfPass=document.getElementById("errorConfirmPasswordId"); // busco el mensaje de error y asigno a variable
console.log(varErrConfPass)

varErrUser.classList.add("d-none"); // escondo el mensaje de error usuario

varErrPass.classList.add("d-none"); // escondo el mensaje de error password

varErrConfPass.classList.add("d-none"); // escondo el mensaje de error confirm password

console.log (varInpUser); //muestro todo la linea HTML correspondiente
console.log (varInpPass);//muestro todo la linea HTML correspondiente
console.log (varInpConfPass);//muestro todo la linea HTML correspondiente




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

        { varErrUser.classList.add("d-none");}// oculta el mensaje rojo mientras escribe

    else if (evento.target.name === "pass" && evento.target.value !== "" ) //verifica si no esta vacio

        { varErrPass.classList.add("d-none");} // oculta el mensaje rojo mientras escribe 

    else if (evento.target.name === "conf" && evento.target.value !== "" ) //Verifica si no esta vacio
        { varErrConfPass.classList.add("d-none");} // oculta el mensaje rojo mientras escribe

};

//  controlado lo de arriba


const enviarRegistro = (ev) => {
    
    ev.preventDefault(); // previene que la pagina se recargue


    
    if (!objUsuario.user && 
        !objUsuario.pass && 
        !objUsuario.conf) // verif si no existe nada en los tres campos
        {        
            varErrUser.classList.remove("d-none"); //muestro el mensaje de error usuario
            varErrPass.classList.remove("d-none"); // muestro el mensaje de error password
            varErrConfPass.classList.remove("d-none"); // muestro el mensaje de error confirm password
        };
        
        if ( !objUsuario.user)
        {
            varErrUser.classList.remove("d-none");
        }
        
        if (!objUsuario.pass)
        {
            varErrPass.classList.remove("d-none");
        }
        
        if (!objUsuario.conf)
        {
            varErrConfPass.classList.remove("d-none");
        }
        
        if (objUsuario.user &&  objUsuario.pass &&  objUsuario.conf) {    // aquí pregunto si extiste todo el objeto
        
            if (objUsuario.pass === objUsuario.conf) { // Las contraseñas son iguales? 
                    // si son iguales , comienzo a crear ese objeto nuevo con el id
                const users = JSON.parse(localStorage.getItem('users')) || [] // (or) si no existe user, entonces devuelve un undefined y prefiero un arreglo vacío

                const id = users.length > 0 ? users[users.length -1 ].id + 1 : 1  // obtener el último elemento del array y agragarle uno . En algun momento de la historia , el array va a estar vacio. Entonces hago un ... Ternario :  condición ? valor_si_verdadero : valor_si_falso  
                // El valor  vale 0, entonces uso la condicion falso y hago valer el id 1               
                
                const newUser ={
                    id,
                    usuario: objUsuario.user,
                    pass: objUsuario.pass,
                    role: "user",  
                    login: false,
                };  // he construido un nuevo usuario
                
                users.push(newUser);
                varInpUser.value='';
                varInpPass.value='';
                varInpConfPass.value='';
                localStorage.setItem("users",JSON.stringify(users))
                setTimeout(()=> {
                    location.href= '../html/iniciar-sesion.html';

                },1000)
                console.log(users);
            } 
            else // si las contraseñas no son iguales
            { 
                alert (" las contraseñas no coinciden");   
            }
        }
};
        
        varInpUser.addEventListener("input",cambiosInputs); // es como una funcion (video Dom Time 1:06:53)
        varInpPass.addEventListener("input",cambiosInputs);
        varInpConfPass.addEventListener("input",cambiosInputs);
        varBtnReg.addEventListener("click", enviarRegistro);