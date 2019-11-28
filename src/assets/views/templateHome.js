


import{templateLogin} from './templateLogin.js'

export const templateHome = () => {
    //creamos vista o pagina principal/
    const containerHome= document.getElementById('root');
    containerHome.innerHTML += `<header><img >
    <img src="../assets/img/headerxs.png" ></header> 
<nav><ul>
        <li class="section"><a href="#">Centros de reciclaje</a></li>
        <li class="section"><a href="#">Valorizadoras de residuos</a></li>
        <li class="section"><a href="#">Lo que tienes que saber</a></li>
        <li class="section"><a href="#">Tus puntos mas cercanos</a></li>
      </ul></nav>
<section>
Comparte informacion, resuelve dudas, motivate junto a otros amigos del medio ambiente y participa en nuestros desafios en nuestra red social. Donde encontraras salas segun el tipo de residuo que te interese 
<div><button id="enter" class="button">Acceder</button></div>

 </section>
<footer>
<div><div>Etiquetas:</div>
<div class="keyWords">
Basura, Calcín, Clasificación de los residuos, Compost o compuesto, Compostaje,
Reciclaje, Recuperación, Recogida selectiva, Residuo, Residuos peligrosos
Reutilizar, Vertido controlado, biodegradable, botellas.
</div></div>

</footer> `


const buttonAcces=document.getElementById('enter')
buttonAcces.addEventListener('click',()=>{
    containerHome.innerHTML="";
    templateLogin();
    
})



}


