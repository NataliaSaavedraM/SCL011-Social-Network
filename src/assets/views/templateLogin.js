
import {templateRegister} from './templateRegister.js'
export const templateLogin = () => {
    //creamos vista o pagina de login
    const containerLogin= document.getElementById('root');
    containerLogin.innerHTML += `<header><img >
    <img src="../assets/img/headerxs.png" ></header>
    <section>

    <h2>Inicio de Sesión</h2>
    <div><label>Email:</label>
    <input id="email" type="correo" placeholder="Ingresa email" ></div>
    <div></div><label>Contraseña:</label>
    <input id="password" type="password" placeholder="ingresa contraseña">
    <button id="button" >Entrar</button>  
    <div>
    <p>¿Eres nuevo? </p><a id="newUser" "href="#">Crea una Cuenta</a>
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
    })



}
