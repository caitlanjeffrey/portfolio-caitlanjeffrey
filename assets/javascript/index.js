
$(document).ready(function(){
    $('.sidenav').sidenav();
});


// FIREBASE CONFIGURATION
    var firebaseConfig = {
        apiKey: "AIzaSyCqabfLTvRyliZsJpbzhZRs0O2srfYcCaU",
        authDomain: "portfolio-caitlanjeffrey.firebaseapp.com",
        databaseURL: "https://portfolio-caitlanjeffrey.firebaseio.com",
        projectId: "portfolio-caitlanjeffrey",
        storageBucket: "portfolio-caitlanjeffrey.appspot.com",
        messagingSenderId: "562753246869",
        appId: "1:562753246869:web:44de131082dca27583ed9c"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
