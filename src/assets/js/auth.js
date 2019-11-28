import {templateLogin} from '../views/templateLogin.js'
import {templateInitSection} from '../views/templateInitSection.js';
import {templateHome} from '../views/templateHome.js' 

export const createUser = (email, password) => {
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        console.log(errorCode);
        console.log(errorMessage);
      });

}


// Acceso con usuario ya creado

export const loginemail= (useremail, userpassword) =>{
    firebase.auth().signInWithEmailAndPassword(useremail, userpassword).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        console.log(errorCode);
        console.log(errorMessage);
      });

    }
    export const userGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        authentication(provider)
    
    }
    //Autenticando con Firebase a través del objeto del proveedor de Google
    function authentication(base_porvider) {
    firebase.auth().signInWithPopup(base_porvider).then(function(result) {
            // templateInitSection();
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            console.log(result);
    
    
        })
        .catch(function(error) {
            console.log(error);
            // Handle Errors here.
            var errorCode = error.code;
            console.log(errorCode);
            var errorMessage = error.message;
            console.log(errorMessage);
            // The email of the user's account used.
            var email = error.email;
            console.log(email);
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            console.log(credential);
    
        });
    
    }
    
    export const userFacebook = () => {
    authFacebook();
    authCuentaFacebook();
    }
    
    const authFacebook = () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    authCuentaFacebook(provider);
    }
    
    //authenticando con facebook
    
    
    function authCuentaFacebook(provider) {
    
    firebase.auth().signInWithPopup(provider).then(function(result) {
       // templateInitSection();
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            console.log(user);
            // ...
        })
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            console.log(errorCode)
            var errorMessage = error.message;
            console.log(errorMessage)
                // The email of the user's account used.
            var email = error.email;
            console.log(email)
                // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            console.log(credential)
                // ...
        })
    
    }