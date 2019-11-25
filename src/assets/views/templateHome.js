


import{templateLogin} from './templateLogin.js'

export const templateHome = () => {
    //creamos vista o pagina principal/
    const containerHome= document.getElementById('root');
    containerHome.innerHTML += `<header><img >
    <img src="../assets/img/headerxs.png" ></header> 
<nav><ul>
        <li>centros de reciclaje</li>
        <li>valorizadoras de residuos</li>
        <li>lo que tienes que saber</li>
        <li>tus puntos mas cercanos</li>
      </ul></nav>
<section>
Comparte informacion, resuelve dudas, motivate junto a otros amigos del medio ambiente y participa en nuestros desafios en nuestra red social. Donde encontraras salas segun el tipo de residuo que te interese 
<button id="enter"></button>
 </section>
<footer>
<div>Etiquetas:</div>
<div>
Basura, Calcín, Clasificación de los residuos, Compost o compuesto, Compostaje,
Reciclaje, Recuperación, Recogida selectiva, Residuo, Residuos peligrosos
Reutilizar, Vertido controlado, biodegradable, botellas.
</div>
</footer> `


const buttonAcces=document.getElementById('enter')
buttonAcces.addEventListener('click',()=>{
    containerHome.innerHTML="";
    templateLogin();
    
})



}


