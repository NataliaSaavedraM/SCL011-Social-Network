export const initFirebase = () => {
   //Configuración de Firebase de tu aplicación web
    var firebaseConfig = {
        apiKey: "AIzaSyD1YrCI7NDWzc2G3WP3TS85545IBqmo460",
        authDomain: "reciclaje-unidos.firebaseapp.com",
        databaseURL: "https://reciclaje-unidos.firebaseio.com",
        projectId: "reciclaje-unidos",
        storageBucket: "reciclaje-unidos.appspot.com",
        messagingSenderId: "225568058485",
        appId: "1:225568058485:web:8c62fb5f2adda781581c3c",
        measurementId: "G-QGPB4HT294"
    };
    // Initializa Firebase

    firebase.initializeApp(firebaseConfig);

}