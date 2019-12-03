import {templateRegister} from './templateRegister.js';
import {templateInitSection} from './templateInitSection.js';
import {loginemail, userGoogle, userFacebook, observer} from '../js/auth.js';

export const templateLogin = () => {
    //creamos vista o pagina de login
    const containerLogin= document.getElementById('root');
    containerLogin.innerHTML += `<header><img >
    <img src="../assets/img/headerxs.png" ></header>
    <section>

    <h2>Inicio de Sesión</h2>
    <div>
    <label>Email:</label>
    <input id="useremail" type="email" placeholder="Ingresa email" >
    </div>
    <div></div>
    <label>Contraseña:</label>
    <input id="userpassword" type="password"  placeholder="ingresa contraseña">
    <button id="loginEmail" class="button">Entrar</button>  
    <div>
    <p>¿Eres nuevo? </p><a id="newUser" href="#/register">Crea una Cuenta</a>
    </div>      
  
    </section>
    <section>
    <h4>Accede con:</h4>
     <button id="google">Google</button>
     <button id ="facebook">Facebook</button>
    </section>
    <footer>Creado por Natalia Saavedra Madariaga</footer> `


    const newUser = document.getElementById("newUser");
    newUser.addEventListener('click', () => {
        containerLogin.innerHTML = " "
        templateRegister();
        window.location.hash ="#/register"
    })

const loginEmail=document.getElementById('loginEmail');

loginEmail.addEventListener('click', ()=>{
    let useremail=document.getElementById('useremail').value;
    let userpassword=document.getElementById('userpassword').value;
    loginemail(useremail, userpassword); 
    containerLogin.innerHTML = " ";
    templateInitSection();
    window.location.hash ="#/initSection"

})


const logingoogle=document.getElementById('google');
logingoogle.addEventListener('click',()=>{
    userGoogle();
    containerLogin.innerHTML = " ";
    templateInitSection();
    window.location.hash ="#/initSection"

})


const loginfacebook=document.getElementById('facebook')
loginfacebook.addEventListener('click',()=>{
    userFacebook();
    containerLogin.innerHTML = " ";
    templateInitSection();
    window.location.hash ="#/initSection"
})



}

