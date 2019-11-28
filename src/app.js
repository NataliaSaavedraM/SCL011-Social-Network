import {observer} from './assets/js/auth.js'

import { initFirebase } from '/assets/js/firebase.js';
import { initRouter } from './route.js';
const init = () => {
    //para iniciar base de datos firebase
    initFirebase();
    //la primera pantalla que abre 
    initRouter();
    observer();
    

}
// aquí le decimos que cada vez que la pagina cargue de realizar la funcion init
window.addEventListener('load', init);

