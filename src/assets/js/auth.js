export const createUser = (email, password) => {


    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(function() {
            verificar()
        })
        .catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
        })

}


