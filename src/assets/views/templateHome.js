


import{templateLogin} from './templateLogin.js'

export const templateHome = () => {
    //creamos vista o pagina principal/
    const containerHome= document.getElementById('root');
    containerHome.innerHTML += `<header><img >
    <img src="../assets/img/headerxs.png" ></header> 
<nav><ul>
        <li class="section"><a href="http://www.santiagorecicla.cl/mapa/">Centros de reciclaje</a></li>
        <li class="section"><a href="http://nuestraesfera.cl/zoom/empresas-que-reciclan-residuos-en-la-region-metropolitana-de-chile/">Valorizadoras de residuos</a></li>
        <li class="section"><a href="https://yotura.com/reciclar-en-casa-facil-110319/">Lo que tienes que saber</a></li>
        <li class="section"><a href="https://www.google.cl/maps/search/reciclaje+/@-33.4448366,-70.5863695,11z/data=!3m1!4b1?hl=es-419&authuser=0">Tus puntos mas cercanos</a></li>
      </ul></nav>
<section>
Comparte informacion, resuelve dudas, motivate junto a otros amigos del medio ambiente y participa en nuestros desafios en nuestra red social. Donde encontraras salas segun el tipo de residuo que te interese 
<div class="enterButton"><button id="enter" class="button">Acceder</button></div>

 </section>
<footer>
<div><div>Etiquetas:</div>
<div class="keyWords">
Basura, Calcín, Clasificación de los residuos, Compost o compuesto, Compostaje,
Reciclaje, Recuperación, Reciclar, Recogida selectiva, Residuo, Residuos peligrosos
Reutilizar, Vertido controlado, biodegradable, botellas.
</div></div>

</footer> `


const buttonAcces=document.getElementById('enter')
buttonAcces.addEventListener('click',()=>{
    containerHome.innerHTML="";
    templateLogin();
    
})



}


