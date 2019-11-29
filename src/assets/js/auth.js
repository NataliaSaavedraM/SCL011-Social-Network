/* import { templateLogin } from "../views/templateLogin.js";
import { templateInitSection } from "../views/templateInitSection.js";
import { templateHome } from "../views/templateHome.js";*/
import {  emailValidation, validateUserInput, validateRecordInput } from "./validate.js" 

// registro de usuario

export const createUser = (email, password) => {
	
	firebase
		.auth()
		.createUserWithEmailAndPassword(email, password)
		.then(function() {
			verifyEmail();
			
		})
		.catch(function(error) {
			// Handle Errors here.
			var errorCode = error.code;
			var errorMessage = error.message;
			// ...
			console.log(errorCode);
			console.log(errorMessage);
		});
};





// Acceso con usuario ya creado

export const loginemail = (useremail, userpassword) => {
	firebase
		.auth()
		.signInWithEmailAndPassword(useremail, userpassword)
		.catch(function(error) {
			// Handle Errors here.
			var errorCode = error.code;
			var errorMessage = error.message;
			// ...
			console.log(errorCode);
			console.log(errorMessage);
		});
};






export const userGoogle = () => {
	const provider = new firebase.auth.GoogleAuthProvider();
	authentication(provider);
};
//Autenticando con Firebase a través del objeto del proveedor de Google
function authentication(base_porvider) {
	firebase
		.auth()
		.signInWithPopup(base_porvider)
		.then(function(result) {
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
};

const authFacebook = () => {
	const provider = new firebase.auth.FacebookAuthProvider();
	authCuentaFacebook(provider);
};

//authenticando con facebook

function authCuentaFacebook(provider) {
	firebase
		.auth()
		.signInWithPopup(provider)
		.then(function(result) {
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
			console.log(errorCode);
			var errorMessage = error.message;
			console.log(errorMessage);
			// The email of the user's account used.
			var email = error.email;
			console.log(email);
			// The firebase.auth.AuthCredential type that was used.
			var credential = error.credential;
			console.log(credential);
			// ...
		});
}

export const observer = () => {
	firebase.auth().onAuthStateChanged(function(user) {
		if (user) {
			console.log("usuario activo");
		} else {
			// No user is signed in.
			console.log("no hay usuario activo");
		}
	});
};

export const verifyEmail = () => {
	var user = firebase.auth().currentUser;

	user
		.sendEmailVerification()
		.then(function() {
			console.log("email enviado");
		})
		.catch(function(error) {
			console.log("Error inesperado");
		});
};

export const closeSession = () => {
	firebase
		.auth()
		.signOut()
		.then(function() {
			console.log("sesion cerrada con exito");
		})
		.catch(function(error) {
			console.log("vuelva a intentarlo");
		});
};

export const profileEmail =()=>{
    let user = firebase.auth().currentUser;   
   
   if (user != null) {
     name = user.displayName;
     email = user.email;
     photoUrl = user.photoURL;
     emailVerified = user.emailVerified;
     uid = user.uid; 
   }
   }

   export const profileRed=()=>{
    let user = firebase.auth().currentUser; 
    if (user != null) {
        user.providerData.forEach(function (profile) {
          console.log("Sign-in provider: " + profile.providerId);
          console.log("  Provider-specific UID: " + profile.uid);
          console.log("  Name: " + profile.displayName);
          console.log("  Email: " + profile.email);
          console.log("  Photo URL: " + profile.photoURL);
        });
      }
}

 