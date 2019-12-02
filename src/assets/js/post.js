
export const createPost = ()=>{
    
    const db = firebase.firestore(); 
    db.collection("users").add({
        uId: firebase.auth().currentUser.email,
        userName: firebase.auth().currentUser.displayName,
        text :document.getElementById("textPost").value, 
        date: new Date(),  
        
    })
    .then(function(docRef) {
        console.log("Doc escrito con ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error al agregar doc: ", error);
    });
    
    return createPost
    }

    // onSnapshot imprime es t° "real" 
// querySnapshot  consulta de resultados
    
    export let  printPost =()=>{
        const db=firebase.firestore();
        db.collection("users").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
               // console.log(`${doc.data().userName} : ${doc.data().text}`);
                document.getElementById('containerPost').innerHTML+=`<p>${doc.data().userName} : ${doc.data().text}</p>`
            });
        });
    }

  /*   export const deletePost=()=>{

        db.collection("users").doc("id").delete().then(function() {
            console.log("Post borrado");
        }).catch(function(error) {
            console.error("Error al eliminar post: ", error);
        });

    } */