import {templateInitSection} from './templateInitSection.js'
import {createUser} from '../js/auth.js'

export const templateRegister= () => {
//creamos vista o pagina de registro
const containerRegister= document.getElementById('root');
containerRegister.innerHTML  += `<header>

<img src="../assets/img/headerxs.png" >
</header>
<section>
<h2>Registro de Usuario</h2>


<label>Email:</label>
<input id="email" type="email" placeholder="Ingresa email" >
<br>
<label>Contraseña:</label>
 <input id="password" type="password" placeholder="ingresa contraseña"><br>
<button id="register" class="button" >Registrar</button>

 
</section>

<footer><div>Creado por Naralia Saavedra Madariaga</div></footer> `


const newAccount= () => {
   // const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    createUser(email, password);

}

const createAccount=document.getElementById("register");
createAccount.addEventListener("click",()=>{
   newAccount();
   
   containerRegister.innerHTML = " ";
   templateInitSection();
   
})

}
    