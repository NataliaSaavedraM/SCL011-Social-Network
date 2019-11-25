import {templateLogin} from './templateLogin.js'
import {createUser} from '../js/auth.js'

export const templateRegister= () => {
//creamos vista o pagina de registro
const containerRegister= document.getElementById('root');
containerRegister.innerHTML  += `<header><img >
<img src="../assets/img/headerxs.png" ></header>
<section>
<h2>Registro de Usuario</h2>
<label>Nombre y Apellido:</label>
<input id="name" type= "text" placeholder="Nombre Completo"></br>
<label>Email:</label>
<input id="email" type="correo" placeholder="Email"></br>
<label>Contraseña</label>
<input id="password" type="password" placeholder="Ingresa una Contraseña"></br>
 
<button id="register">Registrar</button>
</section>

<footer>Creado por Natalia Saavedra Madariaga</footer> `
const login = () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    createUser(email, password, name);

}
const createAccount=document.getElementById("register");
createAccount.addEventListener("click",()=>{
    
   containerRegister.innerHTML = " ";
   templateLogin();
    login();
})

}
    