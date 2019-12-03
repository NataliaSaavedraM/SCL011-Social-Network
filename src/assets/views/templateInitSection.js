
import {closeSession} from '../js/auth.js';
import {templateHome} from './templateHome.js';
import {createPost, printPost} from '../js/post.js'
 
export const templateInitSection = () => {
    //creamos vista o pagina principal/
    const containerInitSection= document.getElementById('root');
    containerInitSection.innerHTML += `<header><img >
    <img src="../assets/img/headerxs.png" ><button id="close" class="button">Cerrar Sesion</button></header> 
<nav></nav>
<section>

<h2>Bienvenido, a nuestra comunidad Reciclaje Juntos</h2>


 <div id="post">
 <div id="containerPost">
 </div>           
 <textarea class="textPost"  id="textPost" placeholder="Postea aqui"></textarea>  
 <p id="alertpost"> </div>

 <button id="buttonPost" class="button">Publicar</button>

 </div>


 </section>
<footer>

</footer> `

document.getElementById("close").addEventListener('click',()=>{
    closeSession();
    containerInitSection.innerHTML = " ";
    templateHome();
    window.location.hash ="#/Home"

})
document.getElementById("buttonPost").addEventListener('click',()=>{
    createPost();
    printPost();
    
    document.getElementById("textPost").value ="";

})

/*  document.getElementById('buttonDeletePost').addEventListener('click',()=>{

    deletePost();
 <button id="buttonDeletePost" class="button">Eliminar</button>
})    */

}

