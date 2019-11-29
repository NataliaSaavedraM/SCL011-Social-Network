
import {closeSession} from '../js/auth.js';
import {templateHome} from './templateHome.js';
export const templateInitSection = () => {
    //creamos vista o pagina principal/
    const containerInitSection= document.getElementById('root');
    containerInitSection.innerHTML += `<header><img >
    <img src="../assets/img/headerxs.png" ></header> 
<nav></nav>
<section>
<h2>Bienvenido, escoge tu sala</h2>
 <button id="close" class="button">Cerrar Sesion</button>
 </section>
<footer>

</footer> `

document.getElementById("close").addEventListener('click',()=>{
    closeSession();
    containerInitSection.innerHTML = " ";
    templateHome();
})




}
