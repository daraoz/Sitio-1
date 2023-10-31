const vInUsuarioId=document.getElementById('inputUsuarioId');
const vInContrasenaId=document.getElementById('inputContrasenaId');
const vBotonLog=document.getElementById('btnLogId')


const objForm = {
    user:'',
    pass:''

}
const formValues = (ev) => { //desectruramiento de un objeto
     const { name,value}=ev.target
    objForm[name]= value;

}

const sendForm = (ev) => {
    ev.preventDefault();
    const {user,pass}=objForm;
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const filterUser=users.filter ((userLS)=> userLS.usuario === user);
    

    if(filterUser.length >0) {
        if(filterUser[0].contrasena===pass){
            filterUser[0].role==='admin'? (location.href='../html/admin.html'):(location.href='../html/user.html');


        }
    }
};

vInUsuarioId.addEventListener("input",sendForm);
vInContrasenaId.addEventListener("input",sendForm);
vBotonLog.addEventListener('click',sendForm)